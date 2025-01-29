! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a2206ee4-45a8-4f84-b8bd-4e6d10beba24", e._sentryDebugIdIdentifier = "sentry-dbid-a2206ee4-45a8-4f84-b8bd-4e6d10beba24")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [350, 679], {
    5356: (e, t, s) => {
      "use strict";
      var r = s(2229),
        a = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        o = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function c(e, t, s) {
        var r, i = {},
          c = null,
          d = null;
        for (r in void 0 !== s && (c = "" + s), void 0 !== t.key && (c = "" + t.key), void 0 !== t.ref && (d = t.ref), t) n.call(t, r) && !l.hasOwnProperty(r) && (i[r] = t[r]);
        if (e && e.defaultProps)
          for (r in t = e.defaultProps) void 0 === i[r] && (i[r] = t[r]);
        return {
          $$typeof: a,
          type: e,
          key: c,
          ref: d,
          props: i,
          _owner: o.current
        }
      }
      t.Fragment = i, t.jsx = c, t.jsxs = c
    },
    8096: (e, t, s) => {
      "use strict";
      e.exports = s(5356)
    },
    5138: (e, t, s) => {
      "use strict";
      s.d(t, {
        A: () => i,
        C: () => r
      });
      const r = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        a = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store"
          },
          cookieIdentifier: "prod"
        }],
        i = () => {
          let e;
          const {
            location: t
          } = window, s = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), r = a.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [r, a] = t;
            return a === s && (e = {
              site: r,
              subDomain: a
            }, !0)
          })) >= 0)), i = a[r >= 0 ? r : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...i,
            currentSite: e
          }
        }
    },
    7350: (e, t, s) => {
      "use strict";
      s.r(t), s.d(t, {
        default: () => ga
      });
      var r = s(2229),
        a = s(3581);
      let i, n, o, l, c, d, m, u, g, p, f, _, b, h, v = () => i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i,
        k = 1,
        y = [],
        w = [],
        x = [],
        S = Date.now,
        T = (e, t) => t,
        z = (e, t) => ~x.indexOf(e) && x[x.indexOf(e) + 1][t],
        R = e => !!~f.indexOf(e),
        E = (e, t, s, r, a) => e.addEventListener(t, s, {
          passive: !r,
          capture: !!a
        }),
        C = (e, t, s, r) => e.removeEventListener(t, s, !!r),
        j = "scrollLeft",
        N = "scrollTop",
        P = () => _ && _.isPressed || w.cache++,
        M = (e, t) => {
          let s = r => {
            if (r || 0 === r) {
              k && (l.history.scrollRestoration = "manual");
              let t = _ && _.isPressed;
              r = s.v = Math.round(r) || (_ && _.iOS ? 1 : 0), e(r), s.cacheID = w.cache, t && T("ss", r)
            } else(t || w.cache !== s.cacheID || T("ref")) && (s.cacheID = w.cache, s.v = e());
            return s.v + s.offset
          };
          return s.offset = 0, e && s
        },
        O = {
          s: j,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: M((function(e) {
            return arguments.length ? l.scrollTo(e, A.sc()) : l.pageXOffset || c[j] || d[j] || m[j] || 0
          }))
        },
        A = {
          s: N,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: O,
          sc: M((function(e) {
            return arguments.length ? l.scrollTo(O.sc(), e) : l.pageYOffset || c[N] || d[N] || m[N] || 0
          }))
        },
        I = (e, t) => (t && t._ctx && t._ctx.selector || i.utils.toArray)(e)[0] || ("string" == typeof e && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", e) : null),
        V = (e, t) => {
          let {
            s,
            sc: r
          } = t;
          R(e) && (e = c.scrollingElement || d);
          let a = w.indexOf(e),
            n = r === A.sc ? 1 : 2;
          !~a && (a = w.push(e) - 1), w[a + n] || E(e, "scroll", P);
          let o = w[a + n],
            l = o || (w[a + n] = M(z(e, s), !0) || (R(e) ? r : M((function(t) {
              return arguments.length ? e[s] = t : e[s]
            }))));
          return l.target = e, o || (l.smooth = "smooth" === i.getProperty(e, "scrollBehavior")), l
        },
        D = (e, t, s) => {
          let r = e,
            a = e,
            i = S(),
            n = i,
            o = t || 50,
            l = Math.max(500, 3 * o),
            c = (e, t) => {
              let l = S();
              t || l - i > o ? (a = r, r = e, n = i, i = l) : s ? r += e : r = a + (e - a) / (l - n) * (i - n)
            };
          return {
            update: c,
            reset: () => {
              a = r = s ? 0 : r, n = i = 0
            },
            getVelocity: e => {
              let t = n,
                o = a,
                d = S();
              return (e || 0 === e) && e !== r && c(e), i === n || d - n > l ? 0 : (r + (s ? o : -o)) / ((s ? d : i) - t) * 1e3
            }
          }
        },
        L = (e, t) => (t && !e._gsapAllow && e.preventDefault(), e.changedTouches ? e.changedTouches[0] : e),
        G = e => {
          let t = Math.max(...e),
            s = Math.min(...e);
          return Math.abs(t) >= Math.abs(s) ? t : s
        },
        q = () => {
          p = i.core.globals().ScrollTrigger, p && p.core && (() => {
            let e = p.core,
              t = e.bridge || {},
              s = e._scrollers,
              r = e._proxies;
            s.push(...w), r.push(...x), w = s, x = r, T = (e, s) => t[e](s)
          })()
        },
        B = e => (i = e || v(), i && "undefined" != typeof document && document.body && (l = window, c = document, d = c.documentElement, m = c.body, f = [l, c, d, m], o = i.utils.clamp, h = i.core.context || function() {}, g = "onpointerenter" in m ? "pointer" : "mouse", u = Y.isTouch = l.matchMedia && l.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in l || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, b = Y.eventTypes = ("ontouchstart" in d ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in d ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => k = 0), 500), q(), n = 1), n);
      O.op = A, w.cache = 0;
      class Y {
        constructor(e) {
          this.init(e)
        }
        init(e) {
          n || B(i) || console.warn("Please gsap.registerPlugin(Observer)"), p || q();
          let {
            tolerance: t,
            dragMinimum: s,
            type: r,
            target: a,
            lineHeight: o,
            debounce: f,
            preventDefault: v,
            onStop: k,
            onStopDelay: w,
            ignore: x,
            wheelSpeed: T,
            event: z,
            onDragStart: j,
            onDragEnd: N,
            onDrag: M,
            onPress: Y,
            onRelease: F,
            onRight: H,
            onLeft: W,
            onUp: U,
            onDown: X,
            onChangeX: $,
            onChangeY: K,
            onChange: Z,
            onToggleX: Q,
            onToggleY: J,
            onHover: ee,
            onHoverEnd: te,
            onMove: se,
            ignoreCheck: re,
            isNormalizer: ae,
            onGestureStart: ie,
            onGestureEnd: ne,
            onWheel: oe,
            onEnable: le,
            onDisable: ce,
            onClick: de,
            scrollSpeed: me,
            capture: ue,
            allowClicks: ge,
            lockAxis: pe,
            onLockAxis: fe
          } = e;
          this.target = a = I(a) || d, this.vars = e, x && (x = i.utils.toArray(x)), t = t || 1e-9, s = s || 0, T = T || 1, me = me || 1, r = r || "wheel,touch,pointer", f = !1 !== f, o || (o = parseFloat(l.getComputedStyle(m).lineHeight) || 22);
          let _e, be, he, ve, ke, ye, we, xe = this,
            Se = 0,
            Te = 0,
            ze = V(a, O),
            Re = V(a, A),
            Ee = ze(),
            Ce = Re(),
            je = ~r.indexOf("touch") && !~r.indexOf("pointer") && "pointerdown" === b[0],
            Ne = R(a),
            Pe = a.ownerDocument || c,
            Me = [0, 0, 0],
            Oe = [0, 0, 0],
            Ae = 0,
            Ie = () => Ae = S(),
            Ve = (e, t) => (xe.event = e) && x && ~x.indexOf(e.target) || t && je && "touch" !== e.pointerType || re && re(e, t),
            De = () => {
              let e = xe.deltaX = G(Me),
                s = xe.deltaY = G(Oe),
                r = Math.abs(e) >= t,
                a = Math.abs(s) >= t;
              Z && (r || a) && Z(xe, e, s, Me, Oe), r && (H && xe.deltaX > 0 && H(xe), W && xe.deltaX < 0 && W(xe), $ && $(xe), Q && xe.deltaX < 0 != Se < 0 && Q(xe), Se = xe.deltaX, Me[0] = Me[1] = Me[2] = 0), a && (X && xe.deltaY > 0 && X(xe), U && xe.deltaY < 0 && U(xe), K && K(xe), J && xe.deltaY < 0 != Te < 0 && J(xe), Te = xe.deltaY, Oe[0] = Oe[1] = Oe[2] = 0), (ve || he) && (se && se(xe), he && (M(xe), he = !1), ve = !1), ye && !(ye = !1) && fe && fe(xe), ke && (oe(xe), ke = !1), _e = 0
            },
            Le = (e, t, s) => {
              Me[s] += e, Oe[s] += t, xe._vx.update(e), xe._vy.update(t), f ? _e || (_e = requestAnimationFrame(De)) : De()
            },
            Ge = (e, t) => {
              pe && !we && (xe.axis = we = Math.abs(e) > Math.abs(t) ? "x" : "y", ye = !0), "y" !== we && (Me[2] += e, xe._vx.update(e, !0)), "x" !== we && (Oe[2] += t, xe._vy.update(t, !0)), f ? _e || (_e = requestAnimationFrame(De)) : De()
            },
            qe = e => {
              if (Ve(e, 1)) return;
              let t = (e = L(e, v)).clientX,
                r = e.clientY,
                a = t - xe.x,
                i = r - xe.y,
                n = xe.isDragging;
              xe.x = t, xe.y = r, (n || Math.abs(xe.startX - t) >= s || Math.abs(xe.startY - r) >= s) && (M && (he = !0), n || (xe.isDragging = !0), Ge(a, i), n || j && j(xe))
            },
            Be = xe.onPress = e => {
              Ve(e, 1) || e && e.button || (xe.axis = we = null, be.pause(), xe.isPressed = !0, e = L(e), Se = Te = 0, xe.startX = xe.x = e.clientX, xe.startY = xe.y = e.clientY, xe._vx.reset(), xe._vy.reset(), E(ae ? a : Pe, b[1], qe, v, !0), xe.deltaX = xe.deltaY = 0, Y && Y(xe))
            },
            Ye = xe.onRelease = e => {
              if (Ve(e, 1)) return;
              C(ae ? a : Pe, b[1], qe, !0);
              let t = !isNaN(xe.y - xe.startY),
                s = xe.isDragging && (Math.abs(xe.x - xe.startX) > 3 || Math.abs(xe.y - xe.startY) > 3),
                r = L(e);
              !s && t && (xe._vx.reset(), xe._vy.reset(), v && ge && i.delayedCall(.08, (() => {
                if (S() - Ae > 300 && !e.defaultPrevented)
                  if (e.target.click) e.target.click();
                  else if (Pe.createEvent) {
                  let t = Pe.createEvent("MouseEvents");
                  t.initMouseEvent("click", !0, !0, l, 1, r.screenX, r.screenY, r.clientX, r.clientY, !1, !1, !1, !1, 0, null), e.target.dispatchEvent(t)
                }
              }))), xe.isDragging = xe.isGesturing = xe.isPressed = !1, k && !ae && be.restart(!0), N && s && N(xe), F && F(xe, s)
            },
            Fe = e => e.touches && e.touches.length > 1 && (xe.isGesturing = !0) && ie(e, xe.isDragging),
            He = () => (xe.isGesturing = !1) || ne(xe),
            We = e => {
              if (Ve(e)) return;
              let t = ze(),
                s = Re();
              Le((t - Ee) * me, (s - Ce) * me, 1), Ee = t, Ce = s, k && be.restart(!0)
            },
            Ue = e => {
              if (Ve(e)) return;
              e = L(e, v), oe && (ke = !0);
              let t = (1 === e.deltaMode ? o : 2 === e.deltaMode ? l.innerHeight : 1) * T;
              Le(e.deltaX * t, e.deltaY * t, 0), k && !ae && be.restart(!0)
            },
            Xe = e => {
              if (Ve(e)) return;
              let t = e.clientX,
                s = e.clientY,
                r = t - xe.x,
                a = s - xe.y;
              xe.x = t, xe.y = s, ve = !0, (r || a) && Ge(r, a)
            },
            $e = e => {
              xe.event = e, ee(xe)
            },
            Ke = e => {
              xe.event = e, te(xe)
            },
            Ze = e => Ve(e) || L(e, v) && de(xe);
          be = xe._dc = i.delayedCall(w || .25, (() => {
            xe._vx.reset(), xe._vy.reset(), be.pause(), k && k(xe)
          })).pause(), xe.deltaX = xe.deltaY = 0, xe._vx = D(0, 50, !0), xe._vy = D(0, 50, !0), xe.scrollX = ze, xe.scrollY = Re, xe.isDragging = xe.isGesturing = xe.isPressed = !1, h(this), xe.enable = e => (xe.isEnabled || (E(Ne ? Pe : a, "scroll", P), r.indexOf("scroll") >= 0 && E(Ne ? Pe : a, "scroll", We, v, ue), r.indexOf("wheel") >= 0 && E(a, "wheel", Ue, v, ue), (r.indexOf("touch") >= 0 && u || r.indexOf("pointer") >= 0) && (E(a, b[0], Be, v, ue), E(Pe, b[2], Ye), E(Pe, b[3], Ye), ge && E(a, "click", Ie, !1, !0), de && E(a, "click", Ze), ie && E(Pe, "gesturestart", Fe), ne && E(Pe, "gestureend", He), ee && E(a, g + "enter", $e), te && E(a, g + "leave", Ke), se && E(a, g + "move", Xe)), xe.isEnabled = !0, e && e.type && Be(e), le && le(xe)), xe), xe.disable = () => {
            xe.isEnabled && (y.filter((e => e !== xe && R(e.target))).length || C(Ne ? Pe : a, "scroll", P), xe.isPressed && (xe._vx.reset(), xe._vy.reset(), C(ae ? a : Pe, b[1], qe, !0)), C(Ne ? Pe : a, "scroll", We, ue), C(a, "wheel", Ue, ue), C(a, b[0], Be, ue), C(Pe, b[2], Ye), C(Pe, b[3], Ye), C(a, "click", Ie, !0), C(a, "click", Ze), C(Pe, "gesturestart", Fe), C(Pe, "gestureend", He), C(a, g + "enter", $e), C(a, g + "leave", Ke), C(a, g + "move", Xe), xe.isEnabled = xe.isPressed = xe.isDragging = !1, ce && ce(xe))
          }, xe.kill = xe.revert = () => {
            xe.disable();
            let e = y.indexOf(xe);
            e >= 0 && y.splice(e, 1), _ === xe && (_ = 0)
          }, y.push(xe), ae && R(a) && (_ = xe), xe.enable(z)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      Y.version = "3.12.2", Y.create = e => new Y(e), Y.register = B, Y.getAll = () => y.slice(), Y.getById = e => y.filter((t => t.vars.id === e))[0], v() && i.registerPlugin(Y);
      let F, H, W, U, X, $, K, Z, Q, J, ee, te, se, re, ae, ie, ne, oe, le, ce, de, me, ue, ge, pe, fe, _e, be, he, ve, ke, ye, we, xe, Se, Te, ze = 1,
        Re = Date.now,
        Ee = Re(),
        Ce = 0,
        je = 0,
        Ne = (e, t, s) => {
          let r = He(e) && ("clamp(" === e.substr(0, 6) || e.indexOf("max") > -1);
          return s["_" + t + "Clamp"] = r, r ? e.substr(6, e.length - 7) : e
        },
        Pe = (e, t) => !t || He(e) && "clamp(" === e.substr(0, 6) ? e : "clamp(" + e + ")",
        Me = () => je && requestAnimationFrame(Me),
        Oe = () => re = 1,
        Ae = () => re = 0,
        Ie = e => e,
        Ve = e => Math.round(1e5 * e) / 1e5 || 0,
        De = () => "undefined" != typeof window,
        Le = () => F || De() && (F = window.gsap) && F.registerPlugin && F,
        Ge = e => !!~K.indexOf(e),
        qe = e => ("Height" === e ? ke : W["inner" + e]) || X["client" + e] || $["client" + e],
        Be = e => z(e, "getBoundingClientRect") || (Ge(e) ? () => (es.width = W.innerWidth, es.height = ke, es) : () => pt(e)),
        Ye = (e, t) => {
          let {
            s,
            d2: r,
            d: a,
            a: i
          } = t;
          return Math.max(0, (s = "scroll" + r) && (i = z(e, s)) ? i() - Be(e)()[a] : Ge(e) ? (X[s] || $[s]) - qe(r) : e[s] - e["offset" + r])
        },
        Fe = (e, t) => {
          for (let s = 0; s < le.length; s += 3)(!t || ~t.indexOf(le[s + 1])) && e(le[s], le[s + 1], le[s + 2])
        },
        He = e => "string" == typeof e,
        We = e => "function" == typeof e,
        Ue = e => "number" == typeof e,
        Xe = e => "object" == typeof e,
        $e = (e, t, s) => e && e.progress(t ? 0 : 1) && s && e.pause(),
        Ke = (e, t) => {
          if (e.enabled) {
            let s = t(e);
            s && s.totalTime && (e.callbackAnimation = s)
          }
        },
        Ze = Math.abs,
        Qe = "left",
        Je = "right",
        et = "bottom",
        tt = "width",
        st = "height",
        rt = "Right",
        at = "Left",
        it = "Top",
        nt = "Bottom",
        ot = "padding",
        lt = "margin",
        ct = "Width",
        dt = "Height",
        mt = "px",
        ut = e => W.getComputedStyle(e),
        gt = (e, t) => {
          for (let s in t) s in e || (e[s] = t[s]);
          return e
        },
        pt = (e, t) => {
          let s = t && "matrix(1, 0, 0, 1, 0, 0)" !== ut(e)[ae] && F.to(e, {
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
          return s && s.progress(0).kill(), r
        },
        ft = (e, t) => {
          let {
            d2: s
          } = t;
          return e["offset" + s] || e["client" + s] || 0
        },
        _t = e => {
          let t, s = [],
            r = e.labels,
            a = e.duration();
          for (t in r) s.push(r[t] / a);
          return s
        },
        bt = e => {
          let t = F.utils.snap(e),
            s = Array.isArray(e) && e.slice(0).sort(((e, t) => e - t));
          return s ? function(e, r) {
            let a, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!r) return t(e);
            if (r > 0) {
              for (e -= i, a = 0; a < s.length; a++)
                if (s[a] >= e) return s[a];
              return s[a - 1]
            }
            for (a = s.length, e += i; a--;)
              if (s[a] <= e) return s[a];
            return s[0]
          } : function(s, r) {
            let a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              i = t(s);
            return !r || Math.abs(i - s) < a || i - s < 0 == r < 0 ? i : t(r < 0 ? s - e : s + e)
          }
        },
        ht = (e, t, s, r) => s.split(",").forEach((s => e(t, s, r))),
        vt = (e, t, s, r, a) => e.addEventListener(t, s, {
          passive: !r,
          capture: !!a
        }),
        kt = (e, t, s, r) => e.removeEventListener(t, s, !!r),
        yt = (e, t, s) => {
          (s = s && s.wheelHandler) && (e(t, "wheel", s), e(t, "touchmove", s))
        },
        wt = {
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
        Tt = (e, t) => {
          if (He(e)) {
            let s = e.indexOf("="),
              r = ~s ? +(e.charAt(s - 1) + 1) * parseFloat(e.substr(s + 1)) : 0;
            ~s && (e.indexOf("%") > s && (r *= t / 100), e = e.substr(0, s - 1)), e = r + (e in St ? St[e] * t : ~e.indexOf("%") ? parseFloat(e) * t / 100 : parseFloat(e) || 0)
          }
          return e
        },
        zt = (e, t, s, r, a, i, n, o) => {
          let {
            startColor: l,
            endColor: c,
            fontSize: d,
            indent: m,
            fontWeight: u
          } = a, g = U.createElement("div"), p = Ge(s) || "fixed" === z(s, "pinType"), f = -1 !== e.indexOf("scroller"), _ = p ? $ : s, b = -1 !== e.indexOf("start"), h = b ? l : c, v = "border-color:" + h + ";font-size:" + d + ";color:" + h + ";font-weight:" + u + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return v += "position:" + ((f || o) && p ? "fixed;" : "absolute;"), (f || o || !p) && (v += (r === A ? Je : et) + ":" + (i + parseFloat(m)) + "px;"), n && (v += "box-sizing:border-box;text-align:left;width:" + n.offsetWidth + "px;"), g._isStart = b, g.setAttribute("class", "gsap-marker-" + e + (t ? " marker-" + t : "")), g.style.cssText = v, g.innerText = t || 0 === t ? e + "-" + t : e, _.children[0] ? _.insertBefore(g, _.children[0]) : _.appendChild(g), g._offset = g["offset" + r.op.d2], Rt(g, 0, r, b), g
        },
        Rt = (e, t, s, r) => {
          let a = {
              display: "block"
            },
            i = s[r ? "os2" : "p2"],
            n = s[r ? "p2" : "os2"];
          e._isFlipped = r, a[s.a + "Percent"] = r ? -100 : 0, a[s.a] = r ? "1px" : 0, a["border" + i + ct] = 1, a["border" + n + ct] = 0, a[s.p] = t + "px", F.set(e, a)
        },
        Et = [],
        Ct = {},
        jt = () => Re() - Ce > 34 && (we || (we = requestAnimationFrame(Ut))),
        Nt = () => {
          (!ue || !ue.isPressed || ue.startX > $.clientWidth) && (w.cache++, ue ? we || (we = requestAnimationFrame(Ut)) : Ut(), Ce || Vt("scrollStart"), Ce = Re())
        },
        Pt = () => {
          fe = W.innerWidth, pe = W.innerHeight
        },
        Mt = () => {
          w.cache++, !se && !me && !U.fullscreenElement && !U.webkitFullscreenElement && (!ge || fe !== W.innerWidth || Math.abs(W.innerHeight - pe) > .25 * W.innerHeight) && Z.restart(!0)
        },
        Ot = {},
        At = [],
        It = () => kt(os, "scrollEnd", It) || Ft(!0),
        Vt = e => Ot[e] && Ot[e].map((e => e())) || At,
        Dt = [],
        Lt = e => {
          for (let t = 0; t < Dt.length; t += 5)(!e || Dt[t + 4] && Dt[t + 4].query === e) && (Dt[t].style.cssText = Dt[t + 1], Dt[t].getBBox && Dt[t].setAttribute("transform", Dt[t + 2] || ""), Dt[t + 3].uncache = 1)
        },
        Gt = (e, t) => {
          let s;
          for (ie = 0; ie < Et.length; ie++) s = Et[ie], !s || t && s._ctx !== t || (e ? s.kill(1) : s.revert(!0, !0));
          t && Lt(t), t || Vt("revert")
        },
        qt = (e, t) => {
          w.cache++, (t || !xe) && w.forEach((e => We(e) && e.cacheID++ && (e.rec = 0))), He(e) && (W.history.scrollRestoration = he = e)
        },
        Bt = 0,
        Yt = () => {
          $.appendChild(ve), ke = ve.offsetHeight || W.innerHeight, $.removeChild(ve)
        },
        Ft = (e, t) => {
          if (Ce && !e) return void vt(os, "scrollEnd", It);
          Yt(), xe = os.isRefreshing = !0, w.forEach((e => We(e) && ++e.cacheID && (e.rec = e())));
          let s = Vt("refreshInit");
          ce && os.sort(), t || Gt(), w.forEach((e => {
            We(e) && (e.smooth && (e.target.style.scrollBehavior = "auto"), e(0))
          })), Et.slice(0).forEach((e => e.refresh())), Et.forEach(((e, t) => {
            if (e._subPinOffset && e.pin) {
              let t = e.vars.horizontal ? "offsetWidth" : "offsetHeight",
                s = e.pin[t];
              e.revert(!0, 1), e.adjustPinSpacing(e.pin[t] - s), e.refresh()
            }
          })), Et.forEach((e => {
            let t = Ye(e.scroller, e._dir);
            ("max" === e.vars.end || e._endClamp && e.end > t) && e.setPositions(e.start, Math.max(e.start + 1, t), !0)
          })), s.forEach((e => e && e.render && e.render(-1))), w.forEach((e => {
            We(e) && (e.smooth && requestAnimationFrame((() => e.target.style.scrollBehavior = "smooth")), e.rec && e(e.rec))
          })), qt(he, 1), Z.pause(), Bt++, xe = 2, Ut(2), Et.forEach((e => We(e.vars.onRefresh) && e.vars.onRefresh(e))), xe = os.isRefreshing = !1, Vt("refresh")
        },
        Ht = 0,
        Wt = 1,
        Ut = e => {
          if (!xe || 2 === e) {
            os.isUpdating = !0, Te && Te.update(0);
            let e = Et.length,
              t = Re(),
              s = t - Ee >= 50,
              r = e && Et[0].scroll();
            if (Wt = Ht > r ? -1 : 1, xe || (Ht = r), s && (Ce && !re && t - Ce > 200 && (Ce = 0, Vt("scrollEnd")), ee = Ee, Ee = t), Wt < 0) {
              for (ie = e; ie-- > 0;) Et[ie] && Et[ie].update(0, s);
              Wt = 1
            } else
              for (ie = 0; ie < e; ie++) Et[ie] && Et[ie].update(0, s);
            os.isUpdating = !1
          }
          we = 0
        },
        Xt = [Qe, "top", et, Je, lt + nt, lt + rt, lt + it, lt + at, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        $t = Xt.concat([tt, st, "boxSizing", "max" + ct, "max" + dt, "position", lt, ot, ot + it, ot + rt, ot + nt, ot + at]),
        Kt = (e, t, s, r) => {
          if (!e._gsap.swappedIn) {
            let a, i = Xt.length,
              n = t.style,
              o = e.style;
            for (; i--;) a = Xt[i], n[a] = s[a];
            n.position = "absolute" === s.position ? "absolute" : "relative", "inline" === s.display && (n.display = "inline-block"), o[et] = o[Je] = "auto", n.flexBasis = s.flexBasis || "auto", n.overflow = "visible", n.boxSizing = "border-box", n[tt] = ft(e, O) + mt, n[st] = ft(e, A) + mt, n[ot] = o[lt] = o.top = o[Qe] = "0", Qt(r), o[tt] = o["max" + ct] = s[tt], o[st] = o["max" + dt] = s[st], o[ot] = s[ot], e.parentNode !== t && (e.parentNode.insertBefore(t, e), t.appendChild(e)), e._gsap.swappedIn = !0
          }
        },
        Zt = /([A-Z])/g,
        Qt = e => {
          if (e) {
            let t, s, r = e.t.style,
              a = e.length,
              i = 0;
            for ((e.t._gsap || F.core.getCache(e.t)).uncache = 1; i < a; i += 2) s = e[i + 1], t = e[i], s ? r[t] = s : r[t] && r.removeProperty(t.replace(Zt, "-$1").toLowerCase())
          }
        },
        Jt = e => {
          let t = $t.length,
            s = e.style,
            r = [],
            a = 0;
          for (; a < t; a++) r.push($t[a], s[$t[a]]);
          return r.t = e, r
        },
        es = {
          left: 0,
          top: 0
        },
        ts = (e, t, s, r, a, i, n, o, l, c, d, m, u, g) => {
          We(e) && (e = e(o)), He(e) && "max" === e.substr(0, 3) && (e = m + ("=" === e.charAt(4) ? Tt("0" + e.substr(3), s) : 0));
          let p, f, _, b = u ? u.time() : 0;
          if (u && u.seek(0), isNaN(e) || (e = +e), Ue(e)) u && (e = F.utils.mapRange(u.scrollTrigger.start, u.scrollTrigger.end, 0, m, e)), n && Rt(n, s, r, !0);
          else {
            We(t) && (t = t(o));
            let i, d, m, u, g = (e || "0").split(" ");
            _ = I(t, o) || $, i = pt(_) || {}, i && (i.left || i.top) || "none" !== ut(_).display || (u = _.style.display, _.style.display = "block", i = pt(_), u ? _.style.display = u : _.style.removeProperty("display")), d = Tt(g[0], i[r.d]), m = Tt(g[1] || "0", s), e = i[r.p] - l[r.p] - c + d + a - m, n && Rt(n, m, r, s - m < 20 || n._isStart && m > 20), s -= s - m
          }
          if (g && (o[g] = e || -.001, e < 0 && (e = 0)), i) {
            let t = e + s,
              a = i._isStart;
            p = "scroll" + r.d2, Rt(i, t, r, a && t > 20 || !a && (d ? Math.max($[p], X[p]) : i.parentNode[p]) <= t + 1), d && (l = pt(n), d && (i.style[r.op.p] = l[r.op.p] - r.op.m - i._offset + mt))
          }
          return u && _ && (p = pt(_), u.seek(m), f = pt(_), u._caScrollDist = p[r.p] - f[r.p], e = e / u._caScrollDist * m), u && u.seek(b), u ? e : Math.round(e)
        },
        ss = /(webkit|moz|length|cssText|inset)/i,
        rs = (e, t, s, r) => {
          if (e.parentNode !== t) {
            let a, i, n = e.style;
            if (t === $) {
              for (a in e._stOrig = n.cssText, i = ut(e), i) + a || ss.test(a) || !i[a] || "string" != typeof n[a] || "0" === a || (n[a] = i[a]);
              n.top = s, n.left = r
            } else n.cssText = e._stOrig;
            F.core.getCache(e).uncache = 1, t.appendChild(e)
          }
        },
        as = (e, t, s) => {
          let r = t,
            a = r;
          return t => {
            let i = Math.round(e());
            return i !== r && i !== a && Math.abs(i - r) > 3 && Math.abs(i - a) > 3 && (t = i, s && s()), a = r, r = t, t
          }
        },
        is = (e, t, s) => {
          let r = {};
          r[t.p] = "+=" + s, F.set(e, r)
        },
        ns = (e, t) => {
          let s = V(e, t),
            r = "_scroll" + t.p2,
            a = (t, i, n, o, l) => {
              let c = a.tween,
                d = i.onComplete,
                m = {};
              n = n || s();
              let u = as(s, n, (() => {
                c.kill(), a.tween = 0
              }));
              return l = o && l || 0, o = o || t - n, c && c.kill(), i[r] = t, i.modifiers = m, m[r] = () => u(n + o * c.ratio + l * c.ratio * c.ratio), i.onUpdate = () => {
                w.cache++, Ut()
              }, i.onComplete = () => {
                a.tween = 0, d && d.call(c)
              }, c = a.tween = F.to(e, i), c
            };
          return e[r] = s, s.wheelHandler = () => a.tween && a.tween.kill() && (a.tween = 0), vt(e, "wheel", s.wheelHandler), os.isTouch && vt(e, "touchmove", s.wheelHandler), a
        };
      class os {
        constructor(e, t) {
          H || os.register(F) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), be(this), this.init(e, t)
        }
        init(e, t) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !je) return void(this.update = this.refresh = this.kill = Ie);
          e = gt(He(e) || Ue(e) || e.nodeType ? {
            trigger: e
          } : e, xt);
          let s, r, a, i, n, o, l, c, d, m, u, g, p, f, _, b, h, v, k, y, S, T, R, E, C, j, N, P, M, D, L, G, q, B, Y, H, K, Z, te, {
              onUpdate: ae,
              toggleClass: ne,
              id: oe,
              onToggle: le,
              onRefresh: me,
              scrub: ue,
              trigger: ge,
              pin: pe,
              pinSpacing: fe,
              invalidateOnRefresh: _e,
              anticipatePin: be,
              onScrubComplete: he,
              onSnapComplete: ve,
              once: ke,
              snap: we,
              pinReparent: Ee,
              pinSpacer: Me,
              containerAnimation: Oe,
              fastScrollEnd: Ae,
              preventOverlaps: De
            } = e,
            Le = e.horizontal || e.containerAnimation && !1 !== e.horizontal ? O : A,
            Fe = !ue && 0 !== ue,
            Qe = I(e.scroller || W),
            Je = F.core.getCache(Qe),
            et = Ge(Qe),
            ht = "fixed" === ("pinType" in e ? e.pinType : z(Qe, "pinType") || et && "fixed"),
            yt = [e.onEnter, e.onLeave, e.onEnterBack, e.onLeaveBack],
            St = Fe && e.toggleActions.split(" "),
            Rt = "markers" in e ? e.markers : xt.markers,
            jt = et ? 0 : parseFloat(ut(Qe)["border" + Le.p2 + ct]) || 0,
            Pt = this,
            Ot = e.onRefreshInit && (() => e.onRefreshInit(Pt)),
            At = ((e, t, s) => {
              let {
                d: r,
                d2: a,
                a: i
              } = s;
              return (i = z(e, "getBoundingClientRect")) ? () => i()[r] : () => (t ? qe(a) : e["client" + a]) || 0
            })(Qe, et, Le),
            Vt = ((e, t) => !t || ~x.indexOf(e) ? Be(e) : () => es)(Qe, et),
            Dt = 0,
            Lt = 0,
            Gt = 0,
            qt = V(Qe, Le);
          var Yt;
          if (Pt._startClamp = Pt._endClamp = !1, Pt._dir = Le, be *= 45, Pt.scroller = Qe, Pt.scroll = Oe ? Oe.time.bind(Oe) : qt, i = qt(), Pt.vars = e, t = t || e.animation, "refreshPriority" in e && (ce = 1, -9999 === e.refreshPriority && (Te = Pt)), Je.tweenScroll = Je.tweenScroll || {
              top: ns(Qe, A),
              left: ns(Qe, O)
            }, Pt.tweenTo = s = Je.tweenScroll[Le.p], Pt.scrubDuration = e => {
              q = Ue(e) && e, q ? G ? G.duration(e) : G = F.to(t, {
                ease: "expo",
                totalProgress: "+=0",
                duration: q,
                paused: !0,
                onComplete: () => he && he(Pt)
              }) : (G && G.progress(1).kill(), G = 0)
            }, t && (t.vars.lazy = !1, t._initted && !Pt.isReverted || !1 !== t.vars.immediateRender && !1 !== e.immediateRender && t.duration() && t.render(0, !0, !0), Pt.animation = t.pause(), t.scrollTrigger = Pt, Pt.scrubDuration(ue), D = 0, oe || (oe = t.vars.id)), we && (Xe(we) && !we.push || (we = {
              snapTo: we
            }), "scrollBehavior" in $.style && F.set(et ? [$, X] : Qe, {
              scrollBehavior: "auto"
            }), w.forEach((e => We(e) && e.target === (et ? U.scrollingElement || X : Qe) && (e.smooth = !1))), a = We(we.snapTo) ? we.snapTo : "labels" === we.snapTo ? (e => t => F.utils.snap(_t(e), t))(t) : "labelsDirectional" === we.snapTo ? (Yt = t, (e, t) => bt(_t(Yt))(e, t.direction)) : !1 !== we.directional ? (e, t) => bt(we.snapTo)(e, Re() - Lt < 500 ? 0 : t.direction) : F.utils.snap(we.snapTo), B = we.duration || {
              min: .1,
              max: 2
            }, B = Xe(B) ? J(B.min, B.max) : J(B, B), Y = F.delayedCall(we.delay || q / 2 || .1, (() => {
              let e = qt(),
                r = Re() - Lt < 500,
                i = s.tween;
              if (!(r || Math.abs(Pt.getVelocity()) < 10) || i || re || Dt === e) Pt.isActive && Dt !== e && Y.restart(!0);
              else {
                let n = (e - o) / f,
                  c = t && !Fe ? t.totalProgress() : n,
                  d = r ? 0 : (c - L) / (Re() - ee) * 1e3 || 0,
                  m = F.utils.clamp(-n, 1 - n, Ze(d / 2) * d / .185),
                  u = n + (!1 === we.inertia ? 0 : m),
                  g = J(0, 1, a(u, Pt)),
                  p = Math.round(o + g * f),
                  {
                    onStart: _,
                    onInterrupt: b,
                    onComplete: h
                  } = we;
                if (e <= l && e >= o && p !== e) {
                  if (i && !i._initted && i.data <= Ze(p - e)) return;
                  !1 === we.inertia && (m = g - n), s(p, {
                    duration: B(Ze(.185 * Math.max(Ze(u - c), Ze(g - c)) / d / .05 || 0)),
                    ease: we.ease || "power3",
                    data: Ze(p - e),
                    onInterrupt: () => Y.restart(!0) && b && b(Pt),
                    onComplete: () => {
                      Pt.update(), Dt = qt(), D = L = t && !Fe ? t.totalProgress() : Pt.progress, ve && ve(Pt), h && h(Pt)
                    }
                  }, e, m * f, p - e - m * f), _ && _(Pt, s.tween)
                }
              }
            })).pause()), oe && (Ct[oe] = Pt), ge = Pt.trigger = I(ge || !0 !== pe && pe), te = ge && ge._gsap && ge._gsap.stRevert, te && (te = te(Pt)), pe = !0 === pe ? ge : I(pe), He(ne) && (ne = {
              targets: ge,
              className: ne
            }), pe && (!1 === fe || fe === lt || (fe = !(!fe && pe.parentNode && pe.parentNode.style && "flex" === ut(pe.parentNode).display) && ot), Pt.pin = pe, r = F.core.getCache(pe), r.spacer ? _ = r.pinState : (Me && (Me = I(Me), Me && !Me.nodeType && (Me = Me.current || Me.nativeElement), r.spacerIsNative = !!Me, Me && (r.spacerState = Jt(Me))), r.spacer = v = Me || U.createElement("div"), v.classList.add("pin-spacer"), oe && v.classList.add("pin-spacer-" + oe), r.pinState = _ = Jt(pe)), !1 !== e.force3D && F.set(pe, {
              force3D: !0
            }), Pt.spacer = v = r.spacer, M = ut(pe), E = M[fe + Le.os2], y = F.getProperty(pe), S = F.quickSetter(pe, Le.a, mt), Kt(pe, v, M), h = Jt(pe)), Rt) {
            g = Xe(Rt) ? gt(Rt, wt) : wt, m = zt("scroller-start", oe, Qe, Le, g, 0), u = zt("scroller-end", oe, Qe, Le, g, 0, m), k = m["offset" + Le.op.d2];
            let e = I(z(Qe, "content") || Qe);
            c = this.markerStart = zt("start", oe, e, Le, g, k, 0, Oe), d = this.markerEnd = zt("end", oe, e, Le, g, k, 0, Oe), Oe && (Z = F.quickSetter([c, d], Le.a, mt)), ht || x.length && !0 === z(Qe, "fixedMarkers") || ((e => {
              let t = ut(e).position;
              e.style.position = "absolute" === t || "fixed" === t ? t : "relative"
            })(et ? $ : Qe), F.set([m, u], {
              force3D: !0
            }), j = F.quickSetter(m, Le.a, mt), P = F.quickSetter(u, Le.a, mt))
          }
          if (Oe) {
            let e = Oe.vars.onUpdate,
              t = Oe.vars.onUpdateParams;
            Oe.eventCallback("onUpdate", (() => {
              Pt.update(0, 0, 1), e && e.apply(Oe, t || [])
            }))
          }
          if (Pt.previous = () => Et[Et.indexOf(Pt) - 1], Pt.next = () => Et[Et.indexOf(Pt) + 1], Pt.revert = (e, s) => {
              if (!s) return Pt.kill(!0);
              let r = !1 !== e || !Pt.enabled,
                a = se;
              r !== Pt.isReverted && (r && (H = Math.max(qt(), Pt.scroll.rec || 0), Gt = Pt.progress, K = t && t.progress()), c && [c, d, m, u].forEach((e => e.style.display = r ? "none" : "block")), r && (se = Pt, Pt.update(r)), !pe || Ee && Pt.isActive || (r ? ((e, t, s) => {
                Qt(s);
                let r = e._gsap;
                if (r.spacerIsNative) Qt(r.spacerState);
                else if (e._gsap.swappedIn) {
                  let s = t.parentNode;
                  s && (s.insertBefore(e, t), s.removeChild(t))
                }
                e._gsap.swappedIn = !1
              })(pe, v, _) : Kt(pe, v, ut(pe), C)), r || Pt.update(r), se = a, Pt.isReverted = r)
            }, Pt.refresh = (r, a, g, k) => {
              if ((se || !Pt.enabled) && !a) return;
              if (pe && r && Ce) return void vt(os, "scrollEnd", It);
              !xe && Ot && Ot(Pt), se = Pt, s.tween && !g && (s.tween.kill(), s.tween = 0), G && G.pause(), _e && t && t.revert({
                kill: !1
              }).invalidate(), Pt.isReverted || Pt.revert(!0, !0), Pt._subPinOffset = !1;
              let w, x, S, z, E, j, P, M, D, L, q, B, W, Z = At(),
                Q = Vt(),
                J = Oe ? Oe.duration() : Ye(Qe, Le),
                ee = f <= .01,
                te = 0,
                re = k || 0,
                ae = Xe(g) ? g.end : e.end,
                ie = e.endTrigger || ge,
                ne = Xe(g) ? g.start : e.start || (0 !== e.start && ge ? pe ? "0 0" : "0 100%" : 0),
                oe = Pt.pinnedContainer = e.pinnedContainer && I(e.pinnedContainer, Pt),
                le = ge && Math.max(0, Et.indexOf(Pt)) || 0,
                ce = le;
              for (Rt && Xe(g) && (B = F.getProperty(m, Le.p), W = F.getProperty(u, Le.p)); ce--;) j = Et[ce], j.end || j.refresh(0, 1) || (se = Pt), P = j.pin, !P || P !== ge && P !== pe && P !== oe || j.isReverted || (L || (L = []), L.unshift(j), j.revert(!0, !0)), j !== Et[ce] && (le--, ce--);
              for (We(ne) && (ne = ne(Pt)), ne = Ne(ne, "start", Pt), o = ts(ne, ge, Z, Le, qt(), c, m, Pt, Q, jt, ht, J, Oe, Pt._startClamp && "_startClamp") || (pe ? -.001 : 0), We(ae) && (ae = ae(Pt)), He(ae) && !ae.indexOf("+=") && (~ae.indexOf(" ") ? ae = (He(ne) ? ne.split(" ")[0] : "") + ae : (te = Tt(ae.substr(2), Z), ae = He(ne) ? ne : (Oe ? F.utils.mapRange(0, Oe.duration(), Oe.scrollTrigger.start, Oe.scrollTrigger.end, o) : o) + te, ie = ge)), ae = Ne(ae, "end", Pt), l = Math.max(o, ts(ae || (ie ? "100% 0" : J), ie, Z, Le, qt() + te, d, u, Pt, Q, jt, ht, J, Oe, Pt._endClamp && "_endClamp")) || -.001, te = 0, ce = le; ce--;) j = Et[ce], P = j.pin, P && j.start - j._pinPush <= o && !Oe && j.end > 0 && (w = j.end - (Pt._startClamp ? Math.max(0, j.start) : j.start), (P === ge && j.start - j._pinPush < o || P === oe) && isNaN(ne) && (te += w * (1 - j.progress)), P === pe && (re += w));
              if (o += te, l += te, Pt._startClamp && (Pt._startClamp += te), Pt._endClamp && !xe && (Pt._endClamp = l || -.001, l = Math.min(l, Ye(Qe, Le))), f = l - o || (o -= .01) && .001, ee && (Gt = F.utils.clamp(0, 1, F.utils.normalize(o, l, H))), Pt._pinPush = re, c && te && (w = {}, w[Le.a] = "+=" + te, oe && (w[Le.p] = "-=" + qt()), F.set([c, d], w)), pe) w = ut(pe), z = Le === A, S = qt(), T = parseFloat(y(Le.a)) + re, !J && l > 1 && (q = (et ? U.scrollingElement || X : Qe).style, q = {
                style: q,
                value: q["overflow" + Le.a.toUpperCase()]
              }, et && "scroll" !== ut($)["overflow" + Le.a.toUpperCase()] && (q.style["overflow" + Le.a.toUpperCase()] = "scroll")), Kt(pe, v, w), h = Jt(pe), x = pt(pe, !0), M = ht && V(Qe, z ? O : A)(), fe && (C = [fe + Le.os2, f + re + mt], C.t = v, ce = fe === ot ? ft(pe, Le) + f + re : 0, ce && C.push(Le.d, ce + mt), Qt(C), oe && Et.forEach((e => {
                e.pin === oe && !1 !== e.vars.pinSpacing && (e._subPinOffset = !0)
              })), ht && qt(H)), ht && (E = {
                top: x.top + (z ? S - o : M) + mt,
                left: x.left + (z ? M : S - o) + mt,
                boxSizing: "border-box",
                position: "fixed"
              }, E[tt] = E["max" + ct] = Math.ceil(x.width) + mt, E[st] = E["max" + dt] = Math.ceil(x.height) + mt, E[lt] = E[lt + it] = E[lt + rt] = E[lt + nt] = E[lt + at] = "0", E[ot] = w[ot], E[ot + it] = w[ot + it], E[ot + rt] = w[ot + rt], E[ot + nt] = w[ot + nt], E[ot + at] = w[ot + at], b = ((e, t, s) => {
                let r, a = [],
                  i = e.length,
                  n = s ? 8 : 0;
                for (; n < i; n += 2) r = e[n], a.push(r, r in t ? t[r] : e[n + 1]);
                return a.t = e.t, a
              })(_, E, Ee), xe && qt(0)), t ? (D = t._initted, de(1), t.render(t.duration(), !0, !0), R = y(Le.a) - T + f + re, N = Math.abs(f - R) > 1, ht && N && b.splice(b.length - 2, 2), t.render(0, !0, !0), D || t.invalidate(!0), t.parent || t.totalTime(t.totalTime()), de(0)) : R = f, q && (q.value ? q.style["overflow" + Le.a.toUpperCase()] = q.value : q.style.removeProperty("overflow-" + Le.a));
              else if (ge && qt() && !Oe)
                for (x = ge.parentNode; x && x !== $;) x._pinOffset && (o -= x._pinOffset, l -= x._pinOffset), x = x.parentNode;
              L && L.forEach((e => e.revert(!1, !0))), Pt.start = o, Pt.end = l, i = n = xe ? H : qt(), Oe || xe || (i < H && qt(H), Pt.scroll.rec = 0), Pt.revert(!1, !0), Lt = Re(), Y && (Dt = -1, Y.restart(!0)), se = 0, t && Fe && (t._initted || K) && t.progress() !== K && t.progress(K || 0, !0).render(t.time(), !0, !0), (ee || Gt !== Pt.progress || Oe) && (t && !Fe && t.totalProgress(Oe && o < -.001 && !Gt ? F.utils.normalize(o, l, 0) : Gt, !0), Pt.progress = ee || (i - o) / f === Gt ? 0 : Gt), pe && fe && (v._pinOffset = Math.round(Pt.progress * R)), G && G.invalidate(), isNaN(B) || (B -= F.getProperty(m, Le.p), W -= F.getProperty(u, Le.p), is(m, Le, B), is(c, Le, B - (k || 0)), is(u, Le, W), is(d, Le, W - (k || 0))), ee && !xe && Pt.update(), !me || xe || p || (p = !0, me(Pt), p = !1)
            }, Pt.getVelocity = () => (qt() - n) / (Re() - ee) * 1e3 || 0, Pt.endAnimation = () => {
              $e(Pt.callbackAnimation), t && (G ? G.progress(1) : t.paused() ? Fe || $e(t, Pt.direction < 0, 1) : $e(t, t.reversed()))
            }, Pt.labelToScroll = e => t && t.labels && (o || Pt.refresh() || o) + t.labels[e] / t.duration() * f || 0, Pt.getTrailing = e => {
              let t = Et.indexOf(Pt),
                s = Pt.direction > 0 ? Et.slice(0, t).reverse() : Et.slice(t + 1);
              return (He(e) ? s.filter((t => t.vars.preventOverlaps === e)) : s).filter((e => Pt.direction > 0 ? e.end <= o : e.start >= l))
            }, Pt.update = (e, r, a) => {
              if (Oe && !a && !e) return;
              let c, d, u, g, p, _, k, y, w = !0 === xe ? H : Pt.scroll(),
                x = e ? 0 : (w - o) / f,
                z = x < 0 ? 0 : x > 1 ? 1 : x || 0,
                C = Pt.progress;
              if (r && (n = i, i = Oe ? qt() : w, we && (L = D, D = t && !Fe ? t.totalProgress() : z)), be && !z && pe && !se && !ze && Ce && o < w + (w - n) / (Re() - ee) * be && (z = 1e-4), z !== C && Pt.enabled) {
                if (c = Pt.isActive = !!z && z < 1, d = !!C && C < 1, _ = c !== d, p = _ || !!z != !!C, Pt.direction = z > C ? 1 : -1, Pt.progress = z, p && !se && (u = z && !C ? 0 : 1 === z ? 1 : 1 === C ? 2 : 3, Fe && (g = !_ && "none" !== St[u + 1] && St[u + 1] || St[u], y = t && ("complete" === g || "reset" === g || g in t))), De && (_ || y) && (y || ue || !t) && (We(De) ? De(Pt) : Pt.getTrailing(De).forEach((e => e.endAnimation()))), Fe || (!G || se || ze ? t && t.totalProgress(z, !(!se || !Lt && !e)) : (G._dp._time - G._start !== G._time && G.render(G._dp._time - G._start), G.resetTo ? G.resetTo("totalProgress", z, t._tTime / t._tDur) : (G.vars.totalProgress = z, G.invalidate().restart()))), pe)
                  if (e && fe && (v.style[fe + Le.os2] = E), ht) {
                    if (p) {
                      if (k = !e && z > C && l + 1 > w && w + 1 >= Ye(Qe, Le), Ee)
                        if (e || !c && !k) rs(pe, v);
                        else {
                          let e = pt(pe, !0),
                            t = w - o;
                          rs(pe, $, e.top + (Le === A ? t : 0) + mt, e.left + (Le === A ? 0 : t) + mt)
                        } Qt(c || k ? b : h), N && z < 1 && c || S(T + (1 !== z || k ? 0 : R))
                    }
                  } else S(Ve(T + R * z));
                we && !s.tween && !se && !ze && Y.restart(!0), ne && (_ || ke && z && (z < 1 || !ye)) && Q(ne.targets).forEach((e => e.classList[c || ke ? "add" : "remove"](ne.className))), ae && !Fe && !e && ae(Pt), p && !se ? (Fe && (y && ("complete" === g ? t.pause().totalProgress(1) : "reset" === g ? t.restart(!0).pause() : "restart" === g ? t.restart(!0) : t[g]()), ae && ae(Pt)), !_ && ye || (le && _ && Ke(Pt, le), yt[u] && Ke(Pt, yt[u]), ke && (1 === z ? Pt.kill(!1, 1) : yt[u] = 0), _ || (u = 1 === z ? 1 : 3, yt[u] && Ke(Pt, yt[u]))), Ae && !c && Math.abs(Pt.getVelocity()) > (Ue(Ae) ? Ae : 2500) && ($e(Pt.callbackAnimation), G ? G.progress(1) : $e(t, "reverse" === g ? 1 : !z, 1))) : Fe && ae && !se && ae(Pt)
              }
              if (P) {
                let e = Oe ? w / Oe.duration() * (Oe._caScrollDist || 0) : w;
                j(e + (m._isFlipped ? 1 : 0)), P(e)
              }
              Z && Z(-w / Oe.duration() * (Oe._caScrollDist || 0))
            }, Pt.enable = (e, t) => {
              Pt.enabled || (Pt.enabled = !0, vt(Qe, "resize", Mt), et || vt(Qe, "scroll", Nt), Ot && vt(os, "refreshInit", Ot), !1 !== e && (Pt.progress = Gt = 0, i = n = Dt = qt()), !1 !== t && Pt.refresh())
            }, Pt.getTween = e => e && s ? s.tween : G, Pt.setPositions = (e, t, s, r) => {
              if (Oe) {
                let s = Oe.scrollTrigger,
                  r = Oe.duration(),
                  a = s.end - s.start;
                e = s.start + a * e / r, t = s.start + a * t / r
              }
              Pt.refresh(!1, !1, {
                start: Pe(e, s && !!Pt._startClamp),
                end: Pe(t, s && !!Pt._endClamp)
              }, r), Pt.update()
            }, Pt.adjustPinSpacing = e => {
              if (C && e) {
                let t = C.indexOf(Le.d) + 1;
                C[t] = parseFloat(C[t]) + e + mt, C[1] = parseFloat(C[1]) + e + mt, Qt(C)
              }
            }, Pt.disable = (e, t) => {
              if (Pt.enabled && (!1 !== e && Pt.revert(!0, !0), Pt.enabled = Pt.isActive = !1, t || G && G.pause(), H = 0, r && (r.uncache = 1), Ot && kt(os, "refreshInit", Ot), Y && (Y.pause(), s.tween && s.tween.kill() && (s.tween = 0)), !et)) {
                let e = Et.length;
                for (; e--;)
                  if (Et[e].scroller === Qe && Et[e] !== Pt) return;
                kt(Qe, "resize", Mt), et || kt(Qe, "scroll", Nt)
              }
            }, Pt.kill = (s, a) => {
              Pt.disable(s, a), G && !a && G.kill(), oe && delete Ct[oe];
              let i = Et.indexOf(Pt);
              i >= 0 && Et.splice(i, 1), i === ie && Wt > 0 && ie--, i = 0, Et.forEach((e => e.scroller === Pt.scroller && (i = 1))), i || xe || (Pt.scroll.rec = 0), t && (t.scrollTrigger = null, s && t.revert({
                kill: !1
              }), a || t.kill()), c && [c, d, m, u].forEach((e => e.parentNode && e.parentNode.removeChild(e))), Te === Pt && (Te = 0), pe && (r && (r.uncache = 1), i = 0, Et.forEach((e => e.pin === pe && i++)), i || (r.spacer = 0)), e.onKill && e.onKill(Pt)
            }, Et.push(Pt), Pt.enable(!1, !1), te && te(Pt), t && t.add && !f) {
            let e = Pt.update;
            Pt.update = () => {
              Pt.update = e, o || l || Pt.refresh()
            }, F.delayedCall(.01, Pt.update), f = .01, o = l = 0
          } else Pt.refresh();
          pe && (() => {
            if (Se !== Bt) {
              let e = Se = Bt;
              requestAnimationFrame((() => e === Bt && Ft(!0)))
            }
          })()
        }
        static register(e) {
          return H || (F = e || Le(), De() && window.document && os.enable(), H = je), H
        }
        static defaults(e) {
          if (e)
            for (let t in e) xt[t] = e[t];
          return xt
        }
        static disable(e, t) {
          je = 0, Et.forEach((s => s[t ? "kill" : "disable"](e))), kt(W, "wheel", Nt), kt(U, "scroll", Nt), clearInterval(te), kt(U, "touchcancel", Ie), kt($, "touchstart", Ie), ht(kt, U, "pointerdown,touchstart,mousedown", Oe), ht(kt, U, "pointerup,touchend,mouseup", Ae), Z.kill(), Fe(kt);
          for (let e = 0; e < w.length; e += 3) yt(kt, w[e], w[e + 1]), yt(kt, w[e], w[e + 2])
        }
        static enable() {
          if (W = window, U = document, X = U.documentElement, $ = U.body, F && (Q = F.utils.toArray, J = F.utils.clamp, be = F.core.context || Ie, de = F.core.suppressOverwrites || Ie, he = W.history.scrollRestoration || "auto", Ht = W.pageYOffset, F.core.globals("ScrollTrigger", os), $)) {
            je = 1, ve = document.createElement("div"), ve.style.height = "100vh", ve.style.position = "absolute", Yt(), Me(), Y.register(F), os.isTouch = Y.isTouch, _e = Y.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), vt(W, "wheel", Nt), K = [W, U, X, $], F.matchMedia ? (os.matchMedia = e => {
              let t, s = F.matchMedia();
              for (t in e) s.add(t, e[t]);
              return s
            }, F.addEventListener("matchMediaInit", (() => Gt())), F.addEventListener("matchMediaRevert", (() => Lt())), F.addEventListener("matchMedia", (() => {
              Ft(0, 1), Vt("matchMedia")
            })), F.matchMedia("(orientation: portrait)", (() => (Pt(), Pt)))) : console.warn("Requires GSAP 3.11.0 or later"), Pt(), vt(U, "scroll", Nt);
            let e, t, s = $.style,
              r = s.borderTopStyle,
              a = F.core.Animation.prototype;
            for (a.revert || Object.defineProperty(a, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), s.borderTopStyle = "solid", e = pt($), A.m = Math.round(e.top + A.sc()) || 0, O.m = Math.round(e.left + O.sc()) || 0, r ? s.borderTopStyle = r : s.removeProperty("border-top-style"), te = setInterval(jt, 250), F.delayedCall(.5, (() => ze = 0)), vt(U, "touchcancel", Ie), vt($, "touchstart", Ie), ht(vt, U, "pointerdown,touchstart,mousedown", Oe), ht(vt, U, "pointerup,touchend,mouseup", Ae), ae = F.utils.checkPrefix("transform"), $t.push(ae), H = Re(), Z = F.delayedCall(.2, Ft).pause(), le = [U, "visibilitychange", () => {
                let e = W.innerWidth,
                  t = W.innerHeight;
                U.hidden ? (ne = e, oe = t) : ne === e && oe === t || Mt()
              }, U, "DOMContentLoaded", Ft, W, "load", Ft, W, "resize", Mt], Fe(vt), Et.forEach((e => e.enable(0, 1))), t = 0; t < w.length; t += 3) yt(kt, w[t], w[t + 1]), yt(kt, w[t], w[t + 2])
          }
        }
        static config(e) {
          "limitCallbacks" in e && (ye = !!e.limitCallbacks);
          let t = e.syncInterval;
          t && clearInterval(te) || (te = t) && setInterval(jt, t), "ignoreMobileResize" in e && (ge = 1 === os.isTouch && e.ignoreMobileResize), "autoRefreshEvents" in e && (Fe(kt) || Fe(vt, e.autoRefreshEvents || "none"), me = -1 === (e.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(e, t) {
          let s = I(e),
            r = w.indexOf(s),
            a = Ge(s);
          ~r && w.splice(r, a ? 6 : 2), t && (a ? x.unshift(W, t, $, t, X, t) : x.unshift(s, t))
        }
        static clearMatchMedia(e) {
          Et.forEach((t => t._ctx && t._ctx.query === e && t._ctx.kill(!0, !0)))
        }
        static isInViewport(e, t, s) {
          let r = (He(e) ? I(e) : e).getBoundingClientRect(),
            a = r[s ? tt : st] * t || 0;
          return s ? r.right - a > 0 && r.left + a < W.innerWidth : r.bottom - a > 0 && r.top + a < W.innerHeight
        }
        static positionInViewport(e, t, s) {
          He(e) && (e = I(e));
          let r = e.getBoundingClientRect(),
            a = r[s ? tt : st],
            i = null == t ? a / 2 : t in St ? St[t] * a : ~t.indexOf("%") ? parseFloat(t) * a / 100 : parseFloat(t) || 0;
          return s ? (r.left + i) / W.innerWidth : (r.top + i) / W.innerHeight
        }
        static killAll(e) {
          if (Et.slice(0).forEach((e => "ScrollSmoother" !== e.vars.id && e.kill())), !0 !== e) {
            let e = Ot.killAll || [];
            Ot = {}, e.forEach((e => e()))
          }
        }
      }
      os.version = "3.12.2", os.saveStyles = e => e ? Q(e).forEach((e => {
        if (e && e.style) {
          let t = Dt.indexOf(e);
          t >= 0 && Dt.splice(t, 5), Dt.push(e, e.style.cssText, e.getBBox && e.getAttribute("transform"), F.core.getCache(e), be())
        }
      })) : Dt, os.revert = (e, t) => Gt(!e, t), os.create = (e, t) => new os(e, t), os.refresh = e => e ? Mt() : (H || os.register()) && Ft(!0), os.update = e => ++w.cache && Ut(!0 === e ? 2 : 0), os.clearScrollMemory = qt, os.maxScroll = (e, t) => Ye(e, t ? O : A), os.getScrollFunc = (e, t) => V(I(e), t ? O : A), os.getById = e => Ct[e], os.getAll = () => Et.filter((e => "ScrollSmoother" !== e.vars.id)), os.isScrolling = () => !!Ce, os.snapDirectional = bt, os.addEventListener = (e, t) => {
        let s = Ot[e] || (Ot[e] = []);
        ~s.indexOf(t) || s.push(t)
      }, os.removeEventListener = (e, t) => {
        let s = Ot[e],
          r = s && s.indexOf(t);
        r >= 0 && s.splice(r, 1)
      }, os.batch = (e, t) => {
        let s, r = [],
          a = {},
          i = t.interval || .016,
          n = t.batchMax || 1e9,
          o = (e, t) => {
            let s = [],
              r = [],
              a = F.delayedCall(i, (() => {
                t(s, r), s = [], r = []
              })).pause();
            return e => {
              s.length || a.restart(!0), s.push(e.trigger), r.push(e), n <= s.length && a.progress(1)
            }
          };
        for (s in t) a[s] = "on" === s.substr(0, 2) && We(t[s]) && "onRefreshInit" !== s ? o(0, t[s]) : t[s];
        return We(n) && (n = n(), vt(os, "refresh", (() => n = t.batchMax()))), Q(e).forEach((e => {
          let t = {};
          for (s in a) t[s] = a[s];
          t.trigger = e, r.push(os.create(t))
        })), r
      };
      let ls, cs = (e, t, s, r) => (t > r ? e(r) : t < 0 && e(0), s > r ? (r - t) / (s - t) : s < 0 ? t / (t - s) : 1),
        ds = (e, t) => {
          !0 === t ? e.style.removeProperty("touch-action") : e.style.touchAction = !0 === t ? "auto" : t ? "pan-" + t + (Y.isTouch ? " pinch-zoom" : "") : "none", e === X && ds($, t)
        },
        ms = {
          auto: 1,
          scroll: 1
        },
        us = e => {
          let t, {
              event: s,
              target: r,
              axis: a
            } = e,
            i = (s.changedTouches ? s.changedTouches[0] : s).target,
            n = i._gsap || F.core.getCache(i),
            o = Re();
          if (!n._isScrollT || o - n._isScrollT > 2e3) {
            for (; i && i !== $ && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !ms[(t = ut(i)).overflowY] && !ms[t.overflowX]);) i = i.parentNode;
            n._isScroll = i && i !== r && !Ge(i) && (ms[(t = ut(i)).overflowY] || ms[t.overflowX]), n._isScrollT = o
          }(n._isScroll || "x" === a) && (s.stopPropagation(), s._gsapAllow = !0)
        },
        gs = (e, t, s, r) => Y.create({
          target: e,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: t,
          onWheel: r = r && us,
          onPress: r,
          onDrag: r,
          onScroll: r,
          onEnable: () => s && vt(U, Y.eventTypes[0], fs, !1, !0),
          onDisable: () => kt(U, Y.eventTypes[0], fs, !0)
        }),
        ps = /(input|label|select|textarea)/i,
        fs = e => {
          let t = ps.test(e.target.tagName);
          (t || ls) && (e._gsapAllow = !0, ls = t)
        };
      os.sort = e => Et.sort(e || ((e, t) => -1e6 * (e.vars.refreshPriority || 0) + e.start - (t.start + -1e6 * (t.vars.refreshPriority || 0)))), os.observe = e => new Y(e), os.normalizeScroll = e => {
        if (void 0 === e) return ue;
        if (!0 === e && ue) return ue.enable();
        if (!1 === e) return ue && ue.kill();
        let t = e instanceof Y ? e : (e => {
          Xe(e) || (e = {}), e.preventDefault = e.isNormalizer = e.allowClicks = !0, e.type || (e.type = "wheel,touch"), e.debounce = !!e.debounce, e.id = e.id || "normalizer";
          let t, s, r, a, i, n, o, l, {
              normalizeScrollX: c,
              momentum: d,
              allowNestedScroll: m,
              onRelease: u
            } = e,
            g = I(e.target) || X,
            p = F.core.globals().ScrollSmoother,
            f = p && p.get(),
            _ = _e && (e.content && I(e.content) || f && !1 !== e.content && !f.smooth() && f.content()),
            b = V(g, A),
            h = V(g, O),
            v = 1,
            k = (Y.isTouch && W.visualViewport ? W.visualViewport.scale * W.visualViewport.width : W.outerWidth) / W.innerWidth,
            y = 0,
            x = We(d) ? () => d(t) : () => d || 2.8,
            S = gs(g, e.type, !0, m),
            T = () => a = !1,
            z = Ie,
            R = Ie,
            E = () => {
              s = Ye(g, A), R = J(_e ? 1 : 0, s), c && (z = J(0, Ye(g, O))), r = Bt
            },
            C = () => {
              _._gsap.y = Ve(parseFloat(_._gsap.y) + b.offset) + "px", _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(_._gsap.y) + ", 0, 1)", b.offset = b.cacheID = 0
            },
            j = () => {
              E(), i.isActive() && i.vars.scrollY > s && (b() > s ? i.progress(1) && b(s) : i.resetTo("scrollY", s))
            };
          return _ && F.set(_, {
            y: "+=0"
          }), e.ignoreCheck = e => _e && "touchmove" === e.type && (() => {
            if (a) {
              requestAnimationFrame(T);
              let e = Ve(t.deltaY / 2),
                s = R(b.v - e);
              if (_ && s !== b.v + b.offset) {
                b.offset = s - b.v;
                let e = Ve((parseFloat(_ && _._gsap.y) || 0) - b.offset);
                _.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", _._gsap.y = e + "px", b.cacheID = w.cache, Ut()
              }
              return !0
            }
            b.offset && C(), a = !0
          })() || v > 1.05 && "touchstart" !== e.type || t.isGesturing || e.touches && e.touches.length > 1, e.onPress = () => {
            a = !1;
            let e = v;
            v = Ve((W.visualViewport && W.visualViewport.scale || 1) / k), i.pause(), e !== v && ds(g, v > 1.01 || !c && "x"), n = h(), o = b(), E(), r = Bt
          }, e.onRelease = e.onGestureStart = (e, t) => {
            if (b.offset && C(), t) {
              w.cache++;
              let t, r, a = x();
              c && (t = h(), r = t + .05 * a * -e.velocityX / .227, a *= cs(h, t, r, Ye(g, O)), i.vars.scrollX = z(r)), t = b(), r = t + .05 * a * -e.velocityY / .227, a *= cs(b, t, r, Ye(g, A)), i.vars.scrollY = R(r), i.invalidate().duration(a).play(.01), (_e && i.vars.scrollY >= s || t >= s - 1) && F.to({}, {
                onUpdate: j,
                duration: a
              })
            } else l.restart(!0);
            u && u(e)
          }, e.onWheel = () => {
            i._ts && i.pause(), Re() - y > 1e3 && (r = 0, y = Re())
          }, e.onChange = (e, t, s, a, i) => {
            if (Bt !== r && E(), t && c && h(z(a[2] === t ? n + (e.startX - e.x) : h() + t - a[1])), s) {
              b.offset && C();
              let t = i[2] === s,
                r = t ? o + e.startY - e.y : b() + s - i[1],
                a = R(r);
              t && r !== a && (o += a - r), b(a)
            }(s || t) && Ut()
          }, e.onEnable = () => {
            ds(g, !c && "x"), os.addEventListener("refresh", j), vt(W, "resize", j), b.smooth && (b.target.style.scrollBehavior = "auto", b.smooth = h.smooth = !1), S.enable()
          }, e.onDisable = () => {
            ds(g, !0), kt(W, "resize", j), os.removeEventListener("refresh", j), S.kill()
          }, e.lockAxis = !1 !== e.lockAxis, t = new Y(e), t.iOS = _e, _e && !b() && b(1), _e && F.ticker.add(Ie), l = t._dc, i = F.to(t, {
            ease: "power4",
            paused: !0,
            scrollX: c ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: as(b, b(), (() => i.pause()))
            },
            onUpdate: Ut,
            onComplete: l.vars.onComplete
          }), t
        })(e);
        return ue && ue.target === t.target && ue.kill(), Ge(t.target) && (ue = t), t
      }, os.core = {
        _getVelocityProp: D,
        _inputObserver: gs,
        _scrollers: w,
        _proxies: x,
        bridge: {
          ss: () => {
            Ce || Vt("scrollStart"), Ce = Re()
          },
          ref: () => se
        }
      }, Le() && F.registerPlugin(os);
      let _s, bs, hs, vs, ks, ys, ws, xs, Ss, Ts, zs, Rs, Es, Cs, js, Ns, Ps = () => "undefined" != typeof window,
        Ms = () => _s || Ps() && (_s = window.gsap) && _s.registerPlugin && _s,
        Os = e => Ts.maxScroll(e || hs);
      class As {
        constructor(e) {
          bs || As.register(_s) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, zs && zs.kill(), zs = this, js(this);
          let t, s, r, a, i, n, o, l, c, d, m, u, g, p, f, {
              smoothTouch: _,
              onUpdate: b,
              onStop: h,
              smooth: v,
              onFocusIn: k,
              normalizeScroll: y,
              wholePixels: w
            } = e,
            x = this,
            S = e.effectsPrefix || "",
            T = Ts.getScrollFunc(hs),
            z = 1 === Ts.isTouch ? !0 === _ ? .8 : parseFloat(_) || 0 : 0 === v || !1 === v ? 0 : parseFloat(v) || .8,
            R = z && +e.speed || 1,
            E = 0,
            C = 0,
            j = 1,
            N = Es(0),
            P = () => N.update(-E),
            M = {
              y: 0
            },
            O = () => t.style.overflow = "visible",
            A = e => {
              e.update();
              let t = e.getTween();
              t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), p = !1, e.animation.progress(e.progress, !0)
            },
            I = (e, s) => {
              (e !== E && !d || s) && (w && (e = Math.round(e)), z && (t.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", t._gsap.y = e + "px"), C = e - E, E = e, Ts.isUpdating || As.isRefreshing || Ts.update())
            },
            V = function(e) {
              return arguments.length ? (e < 0 && (e = 0), M.y = -e, p = !0, d ? E = -e : I(-e), Ts.isRefreshing ? a.update() : T(e / R), this) : -E
            },
            D = "undefined" != typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver((() => {
              if (!Ts.isRefreshing) {
                let e = Os(s) * R;
                e < -E && V(e), Ns.restart(!0)
              }
            })),
            L = e => {
              s.scrollTop = 0, e.target.contains && e.target.contains(s) || k && !1 === k(this, e) || (Ts.isInViewport(e.target) || e.target === f || this.scrollTo(e.target, !1, "center center"), f = e.target)
            },
            G = (e, t) => {
              if (e < t.start) return e;
              let s = isNaN(t.ratio) ? 1 : t.ratio,
                r = t.end - t.start,
                a = e - t.start,
                i = t.offset || 0,
                n = t.pins || [],
                o = n.offset || 0,
                l = t._startClamp && t.start <= 0 || t.pins && t.pins.offset ? 0 : t._endClamp && t.end === Os() ? 1 : .5;
              return n.forEach((t => {
                r -= t.distance, t.nativeStart <= e && (a -= t.distance)
              })), o && (a *= (r - o / s) / r), e + (a - i * l) / s - a
            },
            q = (e, t, s) => {
              s || (e.pins.length = e.pins.offset = 0);
              let r, a, i, n, o, l, c, d, m = e.pins,
                u = e.markers;
              for (c = 0; c < t.length; c++)
                if (d = t[c], e.trigger && d.trigger && e !== d && (d.trigger === e.trigger || d.pinnedContainer === e.trigger || e.trigger.contains(d.trigger)) && (o = d._startNative || d._startClamp || d.start, l = d._endNative || d._endClamp || d.end, i = G(o, e), n = d.pin && l > 0 ? i + (l - o) : G(l, e), d.setPositions(i, n, !0, (d._startClamp ? Math.max(0, i) : i) - o), d.markerStart && u.push(_s.quickSetter([d.markerStart, d.markerEnd], "y", "px")), d.pin && d.end > 0 && !s)) {
                  if (r = d.end - d.start, a = e._startClamp && d.start < 0, a) {
                    if (e.start > 0) return e.setPositions(0, e.end + (e._startNative - e.start), !0), void q(e, t);
                    r += d.start, m.offset = -d.start
                  }
                  m.push({
                    start: d.start,
                    nativeStart: o,
                    end: d.end,
                    distance: r,
                    trig: d
                  }), e.setPositions(e.start, e.end + (a ? -d.start : r), !0)
                }
            },
            B = (e, t) => {
              i.forEach((s => q(s, e, t)))
            },
            Y = () => {
              O(), requestAnimationFrame(O), i && (Ts.getAll().forEach((e => {
                e._startNative = e.start, e._endNative = e.end
              })), i.forEach((e => {
                let t = e._startClamp || e.start,
                  s = e.autoSpeed ? Math.min(Os(), e.end) : t + Math.abs((e.end - t) / e.ratio),
                  r = s - e.end;
                if (t -= r / 2, s -= r / 2, t > s) {
                  let e = t;
                  t = s, s = e
                }
                e._startClamp && t < 0 ? (s = e.ratio < 0 ? Os() : e.end / e.ratio, r = s - e.end, t = 0) : (e.ratio < 0 || e._endClamp && s >= Os()) && (s = Os(), t = e.ratio < 0 || e.ratio > 1 ? 0 : s - (s - e.start) / e.ratio, r = (s - t) * e.ratio - (e.end - e.start)), e.offset = r || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(t, s, !0)
              })), B(Ts.sort())), N.reset()
            },
            F = () => Ts.addEventListener("refresh", Y),
            H = () => i && i.forEach((e => e.vars.onRefresh(e))),
            W = () => (i && i.forEach((e => e.vars.onRefreshInit(e))), H),
            U = (e, t, s, r) => () => {
              let a = "function" == typeof t ? t(s, r) : t;
              a || 0 === a || (a = r.getAttribute("data-" + S + e) || ("speed" === e ? 1 : 0)), r.setAttribute("data-" + S + e, a);
              let i = "clamp(" === (a + "").substr(0, 6);
              return {
                clamp: i,
                value: i ? a.substr(6, a.length - 7) : a
              }
            },
            X = (e, t, r, a, n) => {
              n = ("function" == typeof n ? n(a, e) : n) || 0;
              let o, l, c, d, m, u, g = U("speed", t, a, e),
                p = U("lag", r, a, e),
                f = _s.getProperty(e, "y"),
                _ = e._gsap,
                b = [],
                h = () => {
                  t = g(), r = parseFloat(p().value), o = parseFloat(t.value) || 1, c = "auto" === t.value, m = c || l && l._startClamp && l.start <= 0 || b.offset ? 0 : l && l._endClamp && l.end === Os() ? 1 : .5, d && d.kill(), d = r && _s.to(e, {
                    ease: Rs,
                    overwrite: !1,
                    y: "+=0",
                    duration: r
                  }), l && (l.ratio = o, l.autoSpeed = c)
                },
                v = () => {
                  _.y = f + "px", _.renderTransform(1), h()
                },
                k = [],
                y = 0,
                w = t => {
                  if (c) {
                    v();
                    let s = ((e, t) => {
                      let s, r, a = e.parentNode || ks,
                        i = e.getBoundingClientRect(),
                        n = a.getBoundingClientRect(),
                        o = n.top - i.top,
                        l = n.bottom - i.bottom,
                        c = (Math.abs(o) > Math.abs(l) ? o : l) / (1 - t),
                        d = -c * t;
                      return c > 0 && (s = n.height / (hs.innerHeight + n.height), r = .5 === s ? 2 * n.height : 2 * Math.min(n.height, Math.abs(-c * s / (2 * s - 1))) * (t || 1), d += t ? -r * t : -r / 2, c += r), {
                        change: c,
                        offset: d
                      }
                    })(e, Ss(0, 1, -t.start / (t.end - t.start)));
                    y = s.change, u = s.offset
                  } else u = b.offset || 0, y = (t.end - t.start - u) * (1 - o);
                  b.forEach((e => y -= e.distance * (1 - o))), t.offset = y || .001, t.vars.onUpdate(t), d && d.progress(1)
                };
              return h(), (1 !== o || c || d) && (l = Ts.create({
                trigger: c ? e.parentNode : e,
                start: () => t.clamp ? "clamp(top bottom+=" + n + ")" : "top bottom+=" + n,
                end: () => t.value < 0 ? "max" : t.clamp ? "clamp(bottom top-=" + n + ")" : "bottom top-=" + n,
                scroller: s,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: v,
                onRefresh: w,
                onKill: e => {
                  let t = i.indexOf(e);
                  t >= 0 && i.splice(t, 1), v()
                },
                onUpdate: e => {
                  let t, s, r, a = f + y * (e.progress - m),
                    i = b.length,
                    n = 0;
                  if (e.offset) {
                    if (i) {
                      for (s = -E, r = e.end; i--;) {
                        if (t = b[i], t.trig.isActive || s >= t.start && s <= t.end) return void(d && (t.trig.progress += t.trig.direction < 0 ? .001 : -.001, t.trig.update(0, 0, 1), d.resetTo("y", parseFloat(_.y), -C, !0), j && d.progress(1)));
                        s > t.end && (n += t.distance), r -= t.distance
                      }
                      a = f + n + y * ((_s.utils.clamp(e.start, e.end, s) - e.start - n) / (r - e.start) - m)
                    }
                    k.length && !c && k.forEach((e => e(a - n))), o = a + u, a = Math.round(1e5 * o) / 1e5 || 0, d ? (d.resetTo("y", a, -C, !0), j && d.progress(1)) : (_.y = a + "px", _.renderTransform(1))
                  }
                  var o
                }
              }), w(l), _s.core.getCache(l.trigger).stRevert = W, l.startY = f, l.pins = b, l.markers = k, l.ratio = o, l.autoSpeed = c, e.style.willChange = "transform"), l
            };

          function $() {
            return r = t.clientHeight, t.style.overflow = "visible", ys.style.height = hs.innerHeight + (r - hs.innerHeight) / R + "px", r - hs.innerHeight
          }
          F(), Ts.addEventListener("killAll", F), _s.delayedCall(.5, (() => j = 0)), this.scrollTop = V, this.scrollTo = (e, t, s) => {
            let r = _s.utils.clamp(0, Os(), isNaN(e) ? this.offset(e, s) : +e);
            t ? d ? _s.to(this, {
              duration: z,
              scrollTop: r,
              overwrite: "auto",
              ease: Rs
            }) : T(r) : V(r)
          }, this.offset = (e, t) => {
            let s, r = (e = xs(e)[0]).style.cssText,
              a = Ts.create({
                trigger: e,
                start: t || "top top"
              });
            return i && (j ? Ts.refresh() : B([a], !0)), s = a.start / R, a.kill(!1), e.style.cssText = r, _s.core.getCache(e).uncache = 1, s
          }, this.content = function(e) {
            if (arguments.length) {
              let s = xs(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || ys.children[0];
              return s !== t && (t = s, c = t.getAttribute("style") || "", D && D.observe(t), _s.set(t, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), z || _s.set(t, {
                clearProps: "transform"
              })), this
            }
            return t
          }, this.wrapper = function(e) {
            return arguments.length ? (s = xs(e || "#smooth-wrapper")[0] || (e => {
              let t = vs.querySelector(".ScrollSmoother-wrapper");
              return t || (t = vs.createElement("div"), t.classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
            })(t), l = s.getAttribute("style") || "", $(), _s.set(s, z ? {
              overflow: "hidden",
              position: "fixed",
              height: "100%",
              width: "100%",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0
            } : {
              overflow: "visible",
              position: "relative",
              width: "100%",
              height: "auto",
              top: "auto",
              bottom: "auto",
              left: "auto",
              right: "auto"
            }), this) : s
          }, this.effects = (e, t) => {
            if (i || (i = []), !e) return i.slice(0);
            (e = xs(e)).forEach((e => {
              let t = i.length;
              for (; t--;) i[t].trigger === e && i[t].kill()
            })), t = t || {};
            let s, r, {
                speed: a,
                lag: n,
                effectsPadding: o
              } = t,
              l = [];
            for (s = 0; s < e.length; s++) r = X(e[s], a, n, s, o), r && l.push(r);
            return i.push(...l), l
          }, this.sections = (e, t) => {
            if (n || (n = []), !e) return n.slice(0);
            let s = xs(e).map((e => Ts.create({
              trigger: e,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: t => {
                e.style.opacity = t.isActive ? "1" : "0", e.style.pointerEvents = t.isActive ? "all" : "none"
              }
            })));
            return t && t.add ? n.push(...s) : n = s.slice(0), s
          }, this.content(e.content), this.wrapper(e.wrapper), this.render = e => I(e || 0 === e ? e : E), this.getVelocity = () => N.getVelocity(-E), Ts.scrollerProxy(s, {
            scrollTop: V,
            scrollHeight: () => $() && ys.scrollHeight,
            fixedMarkers: !1 !== e.fixedMarkers && !!z,
            content: t,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: hs.innerWidth,
              height: hs.innerHeight
            })
          }), Ts.defaults({
            scroller: s
          });
          let K = Ts.getAll().filter((e => e.scroller === hs || e.scroller === s));
          K.forEach((e => e.revert(!0, !0))), a = Ts.create({
            animation: _s.fromTo(M, {
              y: 0
            }, {
              y: () => -$(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let e = p;
                  e && (A(a), M.y = E), I(M.y, e), P(), b && !d && b(x)
                }
              }
            }),
            onRefreshInit: e => {
              if (As.isRefreshing) return;
              if (As.isRefreshing = !0, i) {
                let e = Ts.getAll().filter((e => !!e.pin));
                i.forEach((t => {
                  t.vars.pinnedContainer || e.forEach((e => {
                    if (e.pin.contains(t.trigger)) {
                      let s = t.vars;
                      s.pinnedContainer = e.pin, t.vars = null, t.init(s, t.animation)
                    }
                  }))
                }))
              }
              let t = e.getTween();
              g = t && t._end > t._dp._time, u = E, M.y = 0, z && (1 === Ts.isTouch && (s.style.position = "absolute"), s.scrollTop = 0, 1 === Ts.isTouch && (s.style.position = "fixed"))
            },
            onRefresh: e => {
              e.animation.invalidate(), e.setPositions(e.start, $() / R), g || A(e), M.y = -T() * R, I(M.y), j || e.animation.progress(_s.utils.clamp(0, 1, u / R / -e.end)), g && (e.progress -= .001, e.update()), As.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: hs,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => $() / R,
            onScrubComplete: () => {
              N.reset(), h && h(this)
            },
            scrub: z || !0
          }), this.smooth = function(t) {
            return arguments.length && (z = t || 0, R = z && +e.speed || 1, a.scrubDuration(t)), a.getTween() ? a.getTween().duration() : 0
          }, a.getTween() && (a.getTween().vars.ease = e.ease || Rs), this.scrollTrigger = a, e.effects && this.effects(!0 === e.effects ? "[data-" + S + "speed], [data-" + S + "lag]" : e.effects, {
            effectsPadding: e.effectsPadding
          }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), K.forEach((e => {
            e.vars.scroller = s, e.revert(!1, !0), e.init(e.vars, e.animation)
          })), this.paused = function(e, t) {
            return arguments.length ? (!!d !== e && (e ? (a.getTween() && a.getTween().pause(), T(-E / R), N.reset(), m = Ts.normalizeScroll(), m && m.disable(), d = Ts.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => V(-E)
            }), d.nested = Cs(ks, "wheel,touch,scroll", !0, !1 !== t)) : (d.nested.kill(), d.kill(), d = 0, m && m.enable(), a.progress = (-E / R - a.start) / (a.end - a.start), A(a))), this) : !!d
          }, this.kill = this.revert = () => {
            this.paused(!1), A(a), a.kill();
            let e = (i || []).concat(n || []),
              r = e.length;
            for (; r--;) e[r].kill();
            Ts.scrollerProxy(s), Ts.removeEventListener("killAll", F), Ts.removeEventListener("refresh", Y), s.style.cssText = l, t.style.cssText = c;
            let d = Ts.defaults({});
            d && d.scroller === s && Ts.defaults({
              scroller: hs
            }), this.normalizer && Ts.normalizeScroll(!1), clearInterval(o), zs = null, D && D.disconnect(), ys.style.removeProperty("height"), hs.removeEventListener("focusin", L)
          }, this.refresh = (e, t) => a.refresh(e, t), y && (this.normalizer = Ts.normalizeScroll(!0 === y ? {
            debounce: !0,
            content: !z && t
          } : y)), Ts.config(e), "overscrollBehavior" in hs.getComputedStyle(ys) && _s.set([ys, ks], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in hs.getComputedStyle(ys) && _s.set([ys, ks], {
            scrollBehavior: "auto"
          }), hs.addEventListener("focusin", L), o = setInterval(P, 250), "loading" === vs.readyState || requestAnimationFrame((() => Ts.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(e) {
          return bs || (_s = e || Ms(), Ps() && window.document && (hs = window, vs = document, ks = vs.documentElement, ys = vs.body), _s && (xs = _s.utils.toArray, Ss = _s.utils.clamp, Rs = _s.parseEase("expo"), js = _s.core.context || function() {}, Ts = _s.core.globals().ScrollTrigger, _s.core.globals("ScrollSmoother", As), ys && Ts && (Ns = _s.delayedCall(.2, (() => Ts.isRefreshing || zs && zs.refresh())).pause(), ws = [hs, vs, ks, ys], Es = Ts.core._getVelocityProp, Cs = Ts.core._inputObserver, As.refresh = Ts.refresh, bs = 1))), bs
        }
      }
      As.version = "3.12.2", As.create = e => zs && e && zs.content() === xs(e.content)[0] ? zs : new As(e), As.get = () => zs, Ms() && _s.registerPlugin(As);
      let Is, Vs, Ds, Ls, Gs, qs, Bs, Ys, Fs = () => "undefined" != typeof window,
        Hs = () => Is || Fs() && (Is = window.gsap) && Is.registerPlugin && Is,
        Ws = e => "string" == typeof e,
        Us = e => "function" == typeof e,
        Xs = (e, t) => {
          let s = "x" === t ? "Width" : "Height",
            r = "scroll" + s,
            a = "client" + s;
          return e === Ds || e === Ls || e === Gs ? Math.max(Ls[r], Gs[r]) - (Ds["inner" + s] || Ls[a] || Gs[a]) : e[r] - e["offset" + s]
        },
        $s = (e, t) => {
          let s = "scroll" + ("x" === t ? "Left" : "Top");
          return e === Ds && (null != e.pageXOffset ? s = "page" + t.toUpperCase() + "Offset" : e = null != Ls[s] ? Ls : Gs), () => e[s]
        },
        Ks = (e, t) => {
          if (!(e = qs(e)[0]) || !e.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let s = e.getBoundingClientRect(),
            r = !t || t === Ds || t === Gs,
            a = r ? {
              top: Ls.clientTop - (Ds.pageYOffset || Ls.scrollTop || Gs.scrollTop || 0),
              left: Ls.clientLeft - (Ds.pageXOffset || Ls.scrollLeft || Gs.scrollLeft || 0)
            } : t.getBoundingClientRect(),
            i = {
              x: s.left - a.left,
              y: s.top - a.top
            };
          return !r && t && (i.x += $s(t, "x")(), i.y += $s(t, "y")()), i
        },
        Zs = (e, t, s, r, a) => isNaN(e) || "object" == typeof e ? Ws(e) && "=" === e.charAt(1) ? parseFloat(e.substr(2)) * ("-" === e.charAt(0) ? -1 : 1) + r - a : "max" === e ? Xs(t, s) - a : Math.min(Xs(t, s), Ks(e, t)[s] - a) : parseFloat(e) - a,
        Qs = () => {
          Is = Hs(), Fs() && Is && "undefined" != typeof document && document.body && (Ds = window, Gs = document.body, Ls = document.documentElement, qs = Is.utils.toArray, Is.config({
            autoKillThreshold: 7
          }), Bs = Is.config(), Vs = 1)
        };
      const Js = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(e) {
          Is = e, Qs()
        },
        init(e, t, s, r, a) {
          Vs || Qs();
          let i = this,
            n = Is.getProperty(e, "scrollSnapType");
          i.isWin = e === Ds, i.target = e, i.tween = s, t = ((e, t, s, r) => {
            if (Us(e) && (e = e(t, s, r)), "object" != typeof e) return Ws(e) && "max" !== e && "=" !== e.charAt(1) ? {
              x: e,
              y: e
            } : {
              y: e
            };
            if (e.nodeType) return {
              y: e,
              x: e
            }; {
              let a, i = {};
              for (a in e) i[a] = "onAutoKill" !== a && Us(e[a]) ? e[a](t, s, r) : e[a];
              return i
            }
          })(t, r, e, a), i.vars = t, i.autoKill = !!t.autoKill, i.getX = $s(e, "x"), i.getY = $s(e, "y"), i.x = i.xPrev = i.getX(), i.y = i.yPrev = i.getY(), Ys || (Ys = Is.core.globals().ScrollTrigger), "smooth" === Is.getProperty(e, "scrollBehavior") && Is.set(e, {
            scrollBehavior: "auto"
          }), n && "none" !== n && (i.snap = 1, i.snapInline = e.style.scrollSnapType, e.style.scrollSnapType = "none"), null != t.x ? (i.add(i, "x", i.x, Zs(t.x, e, "x", i.x, t.offsetX || 0), r, a), i._props.push("scrollTo_x")) : i.skipX = 1, null != t.y ? (i.add(i, "y", i.y, Zs(t.y, e, "y", i.y, t.offsetY || 0), r, a), i._props.push("scrollTo_y")) : i.skipY = 1
        },
        render(e, t) {
          let s, r, a, i, n, o = t._pt,
            {
              target: l,
              tween: c,
              autoKill: d,
              xPrev: m,
              yPrev: u,
              isWin: g,
              snap: p,
              snapInline: f
            } = t;
          for (; o;) o.r(e, o.d), o = o._next;
          s = g || !t.skipX ? t.getX() : m, r = g || !t.skipY ? t.getY() : u, a = r - u, i = s - m, n = Bs.autoKillThreshold, t.x < 0 && (t.x = 0), t.y < 0 && (t.y = 0), d && (!t.skipX && (i > n || i < -n) && s < Xs(l, "x") && (t.skipX = 1), !t.skipY && (a > n || a < -n) && r < Xs(l, "y") && (t.skipY = 1), t.skipX && t.skipY && (c.kill(), t.vars.onAutoKill && t.vars.onAutoKill.apply(c, t.vars.onAutoKillParams || []))), g ? Ds.scrollTo(t.skipX ? s : t.x, t.skipY ? r : t.y) : (t.skipY || (l.scrollTop = t.y), t.skipX || (l.scrollLeft = t.x)), !p || 1 !== e && 0 !== e || (r = l.scrollTop, s = l.scrollLeft, f ? l.style.scrollSnapType = f : l.style.removeProperty("scroll-snap-type"), l.scrollTop = r + 1, l.scrollLeft = s + 1, l.scrollTop = r, l.scrollLeft = s), t.xPrev = t.x, t.yPrev = t.y, Ys && Ys.update()
        },
        kill(e) {
          let t = "scrollTo" === e;
          (t || "scrollTo_x" === e) && (this.skipX = 1), (t || "scrollTo_y" === e) && (this.skipY = 1)
        }
      };
      Js.max = Xs, Js.getOffset = Ks, Js.buildGetter = $s, Hs() && Is.registerPlugin(Js);
      var er = s(2918);
      const tr = {
          banner_collapsed: [/.*/],
          full_exclusion: [/^\/contact/, /agegate/, /privacy/, /legal/, /ccpa/, /corpinfo/, /cookies/, /^\/gta-online\/license-plates/, /.*\?info=.*/]
        },
        sr = {
          banner_collapsed: [/.*/],
          full_exclusion: [/^\/activate/, /^\/settings/, /agegate/, /^\/Error.htm/, /^\/(photo|video|job)\/(rdr2|gtav)\/.*/, /^\/games\/maxpayne3/]
        },
        rr = "grtTKOExpanded",
        ar = a.Expo.easeInOut,
        ir = {
          default: a.Power2.easeInOut,
          takeover: a.Power4.easeInOut,
          parallax: a.Power3.easeInOut,
          intro: ar,
          playVideo: {
            fadeOut: a.Power2.easeIn,
            fadeIn: a.Power2.easeIn,
            cta: a.Power1.easeOut
          }
        },
        nr = 2,
        or = 1,
        lr = .3;
      var cr = s(5966),
        dr = s(5124);
      const mr = () => {
        const {
          data: e,
          loading: t
        } = (0, cr.useQuery)(dr.abc123);
        return {
          data: e,
          loading: t,
          translation: t => e?.abc123?.find((e => e.key === t))?.value ?? ""
        }
      };
      var ur = s(9623),
        gr = s(5138),
        pr = s(8096);
      const fr = (0, cr.setContextItem)({
          context: (0, r.createContext)(void 0),
          key: "gtaState"
        }),
        _r = e => {
          let {
            children: t
          } = e;
          const [s, a] = (0, r.useState)(!1), [i, n] = (0, r.useState)(), {
            data: o,
            translation: l
          } = mr(), [c, d] = (0, r.useState)({}), [m, u] = (0, r.useState)(!1), [g, p] = (0, r.useState)(!1), f = (() => {
            const {
              lsSettings: e,
              mutateLSSettings: t
            } = (0, cr.useRockstarWebLSSettings)(), {
              pathname: s,
              search: a
            } = (0, ur.useLocation)(), i = (0, r.useRef)((0, gr.A)().currentSite?.site === gr.C.socialClub ? sr : tr), n = () => {
              const e = ((e, t, s) => !e.full_exclusion.find((e => e.test(t + s))))(i.current, s, a);
              return window.self === window.top && e
            }, o = t => t && !(window?.env?.responseStatusCode && 200 !== window?.env?.responseStatusCode) && !((e, t, s) => e.banner_collapsed.some((e => "string" == typeof e ? t === e : e.test(t + s))))(i.current, s, a) && (e?.[rr] ?? !0), [l, c] = (0, r.useState)(n()), [d, m] = (0, r.useState)(o(l)), [u, g] = (0, r.useState)(d || !l);
            return (0, r.useEffect)((() => {
              const e = n(),
                t = o(e);
              m(t), c(e)
            }), [s, a, window.env]), (0, r.useEffect)((() => {
              !d && l && g(!1)
            }), [d]), (0, r.useEffect)((() => {
              void 0 === e?.[rr] && t({
                key: rr,
                value: !0
              })
            }), [e]), (0, r.useEffect)((() => {
              e?.[rr] || t({
                key: rr,
                value: d
              })
            }), [d]), {
              isExpanded: d,
              setIsExpanded: m,
              isInitialExpansion: u,
              doesPageDisplayBanner: l
            }
          })(), _ = (0, r.useRef)(null), b = (0, r.useRef)(null), h = (0, r.useRef)(null), v = (0, r.useRef)(null), k = (0, r.useRef)(null), y = {
            createYouTubePlayer: async function() {
              let {
                onVideoComplete: e,
                target: t,
                id: s
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const r = await (e => {
                let {
                  onStateChange: t,
                  playerVars: s = {},
                  target: r,
                  videoId: a,
                  playerId: i
                } = e;
                return new Promise(((e, n) => {
                  const o = `youtube-player-${i}`,
                    l = document.createElement("div");
                  l.id = o, r.appendChild(l);
                  const c = () => new window.YT.Player(o, {
                    videoId: a,
                    width: "100%",
                    height: "100%",
                    playerVars: s,
                    events: {
                      onReady: async t => {
                        try {
                          const s = await t.target;
                          e(s)
                        } catch (e) {
                          n(e)
                        }
                      },
                      onStateChange: t
                    }
                  });
                  if (window.YT) c();
                  else {
                    const e = document.createElement("script");
                    e.src = "https://www.youtube.com/iframe_api", window.onYouTubeIframeAPIReady = () => {
                      c()
                    }, document.head.appendChild(e)
                  }
                }))
              })({
                onStateChange: async t => {
                  switch (t.data) {
                    case window.YT.PlayerState.UNSTARTED:
                      await b.current.mute(), await b.current.playVideo();
                      break;
                    case window.YT.PlayerState.ENDED:
                      e?.();
                    case window.YT.PlayerState.PLAYING:
                  }
                },
                playerVars: {
                  rel: 0,
                  autoplay: 1,
                  playlist: i,
                  controls: 1
                },
                target: t.current,
                videoId: i,
                playerId: s
              });
              b.current = r
            },
            playVideo: async () => {
              await (b?.current?.playVideo())
            },
            pauseVideo: async () => {
              await (b?.current?.pauseVideo())
            },
            stopVideo: async () => {
              await (b?.current?.stopVideo())
            },
            resetVideo: async () => {
              await (b?.current?.pauseVideo()), await (b?.current?.seekTo(0))
            }
          }, w = (e, t) => {
            d((s => ({
              ...s,
              [e]: t
            })))
          }, x = () => {
            for (const e in c) Object.hasOwn(c, e) && c[e].reverse()
          };
          (0, r.useEffect)((() => {
            n(l("youtubeId"))
          }), [o]), (0, r.useEffect)((() => () => {
            x()
          }), [c]);
          const S = (0, r.useMemo)((() => ({
            ctaButtonRef: _,
            timelines: c,
            addTimeline: w,
            reverseAllTimelines: x,
            isStandalone: s,
            setIsStandalone: a,
            isModalOpen: g,
            setIsModalOpen: p,
            ...f,
            isVideoPlayerActive: m,
            setIsVideoPlayerActive: u,
            youtubeRef: b,
            heroPlayerRef: v,
            dialogPlayerRef: k,
            playButtonRef: h,
            ...y,
            videoId: i
          })), [_, o, c, w, x, f, m, u, b, v, k, h, y, i]);
          return (0, pr.jsx)(fr.Provider, {
            value: S,
            children: t
          })
        },
        br = () => {
          const e = (0, r.useContext)(fr);
          if (void 0 === e) throw new Error("useGTA must be used within a GTAProvider");
          return e
        };
      var hr = s(1788);
      const vr = (0, hr.defineMessages)({
        home_text: {
          defaultMessage: "Home",
          id: "home_text"
        },
        rockstar_games_logo_alt_text: {
          defaultMessage: "Rockstar Games Logo",
          id: "rockstar_games_logo_alt_text"
        }
      });
      var kr = s(5945),
        yr = s.n(kr),
        wr = s(9690);
      const xr = {
          pillBtn: "rockstargames-sites-gtacbc3b8c083aafc89543ae84fce9049b8",
          selected: "rockstargames-sites-gtaed57deeb23fd9dea2a75444a2345ad1c",
          closeBtn: "rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb"
        },
        Sr = e => {
          let {
            className: t,
            onClick: s,
            closeRef: a
          } = e;
          return (0, r.useEffect)((() => {
            const e = e => {
              "Escape" === e.key && s?.()
            };
            return window.addEventListener("keydown", e), () => {
              window.removeEventListener("keydown", e)
            }
          }), [s]), (0, pr.jsx)("button", {
            ref: a,
            type: "button",
            className: [xr.closeBtn, t || ""].join(" "),
            onClick: s,
            "aria-label": "close",
            disabled: !1
          })
        },
        Tr = e => {
          let {
            showCloseButton: t = !1
          } = e;
          const s = (0, r.useRef)(null),
            a = (0, r.useRef)(null),
            {
              track: i
            } = (0, er.useGtmTrack)(),
            {
              timelines: n,
              isVideoPlayerActive: o,
              youtubeRef: l,
              heroPlayerRef: c,
              resetVideo: d
            } = br();
          (0, r.useLayoutEffect)((() => {
            n.playVideoTimeline?.fromTo(s.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              duration: or,
              ease: ir.playVideo.fadeIn
            }).fromTo(a.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1
            })
          }), [n.playVideoTimeline]), (0, r.useLayoutEffect)((() => () => {
            delete window.onYouTubeIframeAPIReady
          }), []), (0, r.useEffect)((() => {
            os.refresh()
          }), [o]);
          let m = null;
          return m = yr(), (0, pr.jsx)(wr.RemoveScroll, {
            allowPinchZoom: !1,
            enabled: o,
            children: (0, pr.jsx)(m, {
              disabled: !o,
              children: (0, pr.jsxs)("div", {
                ref: s,
                className: "rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a",
                children: [t && (0, pr.jsx)(Sr, {
                  className: "rockstargames-sites-gtaf335b4848dbe29b6f2aa6f4d2d742c6f",
                  onClick: () => (l?.current && n.playVideoTimeline.timeScale(3).reverse(), d(), void i({
                    event: "takeover_close",
                    element_placement: "promo_banner2"
                  })),
                  closeRef: a
                }), o && (0, pr.jsx)("div", {
                  className: "rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06",
                  ref: c
                })]
              })
            })
          })
        },
        zr = (0, r.forwardRef)(((e, t) => {
          const a = (0, r.useRef)(null),
            i = (0, r.useRef)(null),
            n = (0, r.useRef)(null),
            {
              isMobile: o
            } = (0, cr.useWindowResize)(),
            [l, c] = (0, r.useState)("");
          (0, r.useEffect)((() => {
            c(s(o ? 4720 : 5231))
          }), [o]), (0, r.useImperativeHandle)(t, (() => ({
            heroImagesRef: a,
            heroLogoRef: n
          })), [a?.current, n?.current]);
          const {
            timelines: d
          } = br();
          return (0, r.useLayoutEffect)((() => {
            d?.playVideoTimeline?.fromTo([a.current], {
              autoAlpha: 1,
              scale: 1
            }, {
              autoAlpha: 0,
              scale: .98,
              duration: nr,
              ease: ir.playVideo.fadeOut
            })
          }), [d?.playVideoTimeline]), (0, r.useLayoutEffect)((() => {
            d?.introTimeline?.from(i.current, {
              "--hero-image-height": "200%",
              "--hero-image-width": "200%"
            }, 0)?.set([i.current], {
              clearProps: "all"
            })
          }), [d.introTimeline]), (0, pr.jsx)("div", {
            ref: a,
            className: "rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909",
            children: (0, pr.jsx)("img", {
              ref: i,
              className: "rockstargames-sites-gtae62d834027a5326f36643e3aad7affba",
              src: l,
              alt: ""
            })
          })
        }));
      zr.displayName = "LayeredImages";
      const Rr = zr,
        Er = "rockstargames-sites-gtad26a2b386731f653809936b604d324a7",
        Cr = () => {
          const {
            ctaButtonRef: e,
            timelines: t,
            isExpanded: r,
            createYouTubePlayer: i,
            isStandalone: n,
            playButtonRef: o,
            playVideo: l,
            heroPlayerRef: c
          } = br(), {
            track: d
          } = (0, er.useGtmTrack)();
          return (0, pr.jsx)("button", {
            type: "button",
            ref: o,
            className: "rockstargames-sites-gtaf51004ce85c3f57a633de8359052344a",
            onMouseEnter: e => {
              let {
                currentTarget: t
              } = e;
              a.gsap.to(t, {
                scale: 1.1,
                duration: .15,
                ease: a.Power1.easeOut
              })
            },
            onMouseLeave: e => {
              let {
                currentTarget: t
              } = e;
              a.gsap.to(t, {
                scale: 1,
                duration: .15,
                ease: a.Power1.easeOut
              })
            },
            onClick: () => {
              const s = () => {
                r && a.gsap.to(e.current, {
                  autoAlpha: 1,
                  duration: lr,
                  ease: ir.playVideo.cta
                })
              };
              t.playVideoTimeline?.play(), setTimeout((async () => {
                await i({
                  onVideoComplete: s,
                  target: c,
                  id: "hero"
                }), await l()
              }), 2e3), d({
                event: "video_play",
                element_placement: n ? "landing_page_hero" : "banner",
                video_id: "promo_video",
                video_title: "promo_video"
              })
            },
            "aria-label": "Play",
            tabIndex: r || n ? void 0 : -1,
            children: (0, pr.jsx)("img", {
              src: s(4238),
              alt: "",
              "aria-hidden": !0
            })
          })
        },
        jr = e => {
          let {
            className: t
          } = e;
          return (0, pr.jsx)("svg", {
            className: t || "",
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "12",
            viewBox: "0 0 32 12",
            fill: "none",
            children: (0, pr.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M31.7948 1.60281C32.2537 2.47697 31.9171 3.55765 31.0429 4.01658L15.9054 11.9638L0.948843 4.01224C0.0770835 3.54878 -0.253903 2.46636 0.209564 1.5946C0.673031 0.722843 1.75545 0.391857 2.62721 0.855324L15.9159 7.92018L29.381 0.850985C30.2552 0.392054 31.3358 0.728659 31.7948 1.60281Z",
              fill: "white"
            })
          })
        },
        Nr = {
          pillBtn: "rockstargames-sites-gtafea394adacd195a4079cd095bb6765d6",
          selected: "rockstargames-sites-gtac8081639889a262aa10ca3480844c22e",
          logo: "rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f"
        },
        Pr = (0, r.forwardRef)(((e, t) => {
          let {
            className: r,
            logoSource: a,
            text: i
          } = e;
          return (0, pr.jsxs)("div", {
            className: [Nr.logo, r || ""].join(" "),
            ref: t,
            children: [(0, pr.jsx)("img", {
              src: s(7958)(`./${a}`),
              alt: `${i} logo`
            }), (0, pr.jsx)("p", {
              children: i
            })]
          })
        }));
      Pr.displayName = "IconLogoWithText";
      const Mr = Pr,
        Or = (0, r.forwardRef)(((e, t) => {
          let {
            secondPhase: s = !1
          } = e;
          const {
            loading: i,
            translation: n
          } = mr(), o = (0, r.useRef)(null), {
            timelines: l
          } = br();
          (0, r.useImperativeHandle)(t, (() => o?.current), [o?.current]);
          return (0, r.useLayoutEffect)((() => {
            l?.introTimeline?.fromTo(o.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              ease: "cubic-bezier(0.42, 0, 0.58, 1)",
              duration: 1,
              onComplete: () => {
                a.gsap.set(o?.current?.children, {
                  pointerEvents: "auto"
                })
              }
            }, "<75%")
          }), [l.introTimeline]), (0, r.useLayoutEffect)((() => {
            l?.playVideoTimeline?.fromTo(o.current, {
              autoAlpha: 1
            }, {
              autoAlpha: 0,
              immediateRender: !1
            }, "<")
          }), [l.playVideoTimeline]), (0, pr.jsxs)("div", {
            ref: o,
            className: "rockstargames-sites-gtaee7daa085f52e6f228418057d0cd434c",
            children: [(0, pr.jsx)(Cr, {}), s ? (0, pr.jsxs)(pr.Fragment, {
              children: [(0, pr.jsx)(Mr, {
                className: Er,
                text: n("d2.destLogoMSG"),
                logoSource: "logo_secondary_stroke.svg"
              }), (0, pr.jsx)(jr, {
                className: "rockstargames-sites-gtaebdb4d02c9494a731f4638ad714c4c82"
              })]
            }) : (0, pr.jsx)(Mr, {
              className: Er,
              text: n("d2.tkoLogoMsg"),
              logoSource: "logo_secondary_stroke.svg"
            })]
          })
        }));
      Or.displayName = "UI";
      const Ar = Or,
        Ir = {
          hero: "rockstargames-sites-gtab2ba83d95e58e4e8ee5db947901752d6"
        },
        Vr = (0, r.forwardRef)(((e, t) => (0, pr.jsx)("div", {
          className: "rockstargames-sites-gtaa3fdd9c237605835107fb50d062c0902",
          ref: t
        })));
      Vr.displayName = "LoadingState";
      const Dr = Vr,
        Lr = (0, r.forwardRef)(((e, t) => {
          let {
            className: s,
            standalone: i = !1
          } = e;
          const n = (0, r.useRef)(null),
            o = (0, r.useRef)(null),
            l = (0, r.useRef)(null),
            c = (0, r.useRef)(null),
            {
              addTimeline: d,
              timelines: m,
              setIsVideoPlayerActive: u
            } = br();
          return (0, r.useImperativeHandle)(t, (() => ({
            heroRef: o,
            heroUIRef: l,
            heroImagesRefs: c
          })), [o?.current, l?.current, c?.current]), (0, r.useLayoutEffect)((() => {
            const e = a.gsap.context((() => {
              const e = a.gsap.timeline({
                  paused: !0,
                  defaults: {
                    duration: 2,
                    ease: ir.intro,
                    force3D: !0
                  }
                }).to(n.current, {
                  autoAlpha: 0
                }),
                t = a.gsap.timeline({
                  paused: !0,
                  defaults: {
                    duration: .5,
                    ease: ir.default,
                    force3D: !0
                  }
                });
              d("introTimeline", e), d("playVideoTimeline", t)
            }));
            return () => e.revert()
          }), []), (0, r.useEffect)((() => {
            n?.current && m?.introTimeline && m?.introTimeline.play()
          }), [n?.current, m?.introTimeline, i]), (0, r.useLayoutEffect)((() => {
            m?.playVideoTimeline && o?.current && (m.playVideoTimeline.eventCallback("onStart", (() => {
              m?.playVideoTimeline.timeScale(1), u(!0), a.gsap.set(o?.current, {
                background: "transparent"
              })
            })), m.playVideoTimeline.eventCallback("onReverseComplete", (() => {
              u(!1), a.gsap.set(o?.current, {
                clearProps: "background"
              })
            })))
          }), [u, o?.current, m?.playVideoTimeline, i]), (0, pr.jsxs)("div", {
            ref: o,
            className: [Ir.hero, s || ""].join(" "),
            children: [(0, pr.jsx)(Dr, {
              ref: n
            }), (0, pr.jsx)(Rr, {
              ref: c
            }), (0, pr.jsx)(Ar, {
              ref: l,
              secondPhase: i
            }), i ? null : (0, pr.jsx)(Tr, {})]
          })
        }));
      Lr.displayName = "Hero";
      const Gr = Lr,
        qr = e => {
          let {
            children: t,
            showModal: s = !1,
            dialogRef: i,
            onClose: n = (() => {})
          } = e;
          return (0, r.useEffect)((() => {
            s && i.current && (i.current.showModal(), setTimeout((() => {
              a.gsap.set(window, {
                scrollTo: 0
              })
            }), 300))
          }), [s]), (0, pr.jsxs)("dialog", {
            ref: i,
            className: "rockstargames-sites-gtac34c5e39b029dfbc07c6cf926ec6c6bf",
            onClick: e => (e => {
              e.currentTarget && (e.currentTarget.close(), n(), e.preventDefault(), e.stopPropagation(), e.nativeEvent.stopImmediatePropagation())
            })(e),
            children: [(0, pr.jsx)("button", {
              className: "rockstargames-sites-gtabec32e64fef6bfb3e29ea8ab7b6b0497",
              onClick: () => (i.current?.close(), void n()),
              type: "button",
              value: "cancel",
              "aria-label": "close",
              children: (0, pr.jsx)("div", {
                className: "rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11"
              })
            }), (0, pr.jsx)("div", {
              className: "rockstargames-sites-gtab124e7c39577f90390ae9e697500f0d3",
              children: t
            })]
          })
        },
        Br = e => {
          let {
            alt: t = "",
            className: s = "",
            clipRule: r = "evenodd",
            fill: a = "white",
            fillRule: i = "evenodd"
          } = e;
          return (0, pr.jsxs)("svg", {
            className: s,
            fill: a,
            version: "1.1",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, pr.jsx)("title", {
              children: t
            }), (0, pr.jsx)("path", {
              fillRule: i,
              clipRule: r,
              d: "M4.52081 2.12229C4.84189 1.947 5.23305 1.96101 5.54076 2.15882L19.5408 11.1588C19.827 11.3428 20 11.6597 20 12C20 12.3403 19.827 12.6572 19.5408 12.8412L5.54076 21.8412C5.23305 22.039 4.84189 22.053 4.52081 21.8777C4.19974 21.7024 4 21.3658 4 21V3C4 2.63419 4.19974 2.29758 4.52081 2.12229Z"
            })]
          })
        },
        Yr = {
          pillBtn: "rockstargames-sites-gtab0b87091cc0b540c763dfa89c7e70cdb",
          selected: "rockstargames-sites-gtad12b2c4aba551689348a84d1a7da7b9c",
          infoSection: "rockstargames-sites-gtaff0a4e54ba34184a330f2d984517782c",
          logo: "rockstargames-sites-gtac124245163a75b1c26d87831c89e2f7c",
          content: "rockstargames-sites-gtac9099ca97ec9a8ff35a7ec7c28fa730e",
          text: "rockstargames-sites-gtac57674ad6381f670a3a8d568522ee25b",
          header: "rockstargames-sites-gtad718c77b847c5ca7d4271b6d1d56ec8b",
          blurb: "rockstargames-sites-gtae3b7dacbddb0856ad18292ba432919ce",
          button: "rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34",
          buttonIcon: "rockstargames-sites-gtaf102dd5667ea10593e011a0f5cca1ea5",
          platforms: "rockstargames-sites-gtacd741e4221e11994aecf7a92b11686b2"
        };
      a.gsap.registerPlugin(os, Js);
      const Fr = (0, r.forwardRef)(((e, t) => {
        let {
          blurb: r,
          buttonText: a,
          className: i = "",
          image: n = "logo_secondary_color.png",
          header: o
        } = e;
        const {
          setIsModalOpen: l
        } = br(), {
          track: c
        } = (0, er.useGtmTrack)();
        return (0, pr.jsxs)("div", {
          className: [Yr.infoSection, i || ""].join(" "),
          ref: t,
          children: [(0, pr.jsx)("img", {
            className: Yr.logo,
            src: s(7958)(`./${n}`),
            alt: ""
          }), (0, pr.jsxs)("div", {
            className: Yr.content,
            children: [(0, pr.jsxs)("div", {
              className: Yr.text,
              children: [(0, pr.jsx)("h1", {
                className: Yr.header,
                children: o
              }), (0, pr.jsx)("div", {
                className: Yr.blurb,
                dangerouslySetInnerHTML: {
                  __html: (d = r, d.split(/\r\n|\r|\n/).reduce(((e, t) => {
                    let s = e;
                    return t.trim().length && (s += `<p>${t}</p>`), s
                  })))
                }
              })]
            }), (0, pr.jsxs)("button", {
              type: "button",
              className: Yr.button,
              onClick: () => {
                c({
                  event: "video_play",
                  element_placement: "landing_page_description",
                  video_id: "promo_video",
                  video_title: "promo_video"
                }), l(!0)
              },
              children: [(0, pr.jsx)(Br, {
                className: Yr.buttonIcon
              }), a]
            })]
          })]
        });
        var d
      }));
      Fr.displayName = "InfoSection";
      const Hr = Fr,
        Wr = JSON.parse('{"us":{"aria_label_open_new_window":"(Opens in a new window)","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","previous_button_label":"Previous video page"},"de":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"Okay","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","previous_button_label":"Vorherige Videoseite"},"es":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_error_generic_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes sucribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","previous_button_label":"Página de vídeo anterior"},"mx":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Comprueba tu correo","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"Aceptar","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","previous_button_label":"Página de video anterior"},"fr":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmez votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmer votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","previous_button_label":"Page vidéo précédente"},"it":{"aria_label_open_new_window":"(Apri in una nuova finestra)","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","previous_button_label":"Pagina di video precedente"},"jp":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認してください","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認する","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","previous_button_label":"前のビデオページ"},"kr":{"aria_label_open_new_window":"(새 창에서 열기)","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","previous_button_label":"이전 비디오 페이지"},"pl":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","previous_button_label":"Poprzednia strona z filmami"},"br":{"aria_label_open_new_window":"(Abre em uma nova janela)","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","previous_button_label":"Página anterior de vídeos"},"ru":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","previous_button_label":"Предыдущая страница с видео"},"hans":{"aria_label_open_new_window":"（在新窗口中打开）","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","previous_button_label":"上一页视频"},"tw":{"aria_label_open_new_window":"（在新視窗開啟）","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","previous_button_label":"上一個影片頁面"}}'),
        Ur = (0, hr.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        }),
        Xr = "rockstargames-sites-gtaea8cf4797c830e5b5dad68b2ec814e67",
        $r = (0, hr.withIntl)((e => {
          let {
            children: t,
            to: s = "#",
            reloadDocument: a = !1,
            alt: i = "",
            autoBlank: n = !1,
            onClick: o = (() => {}),
            focused: l = !1,
            ...c
          } = e;
          const d = (0, r.useRef)(null),
            m = (0, hr.useIntl)(),
            u = !/^(https?|mailto):/i.test(s),
            g = /^#/.test(s),
            p = c?.target ?? (n ? "_blank" : "_self"),
            {
              ...f
            } = c;
          let _ = "";
          if ("aria-label" in f && f["aria-label"] && (_ = "_blank" === p ? `${f["aria-label"]} ${m.formatMessage(Ur.aria_label_open_new_window)}` : f["aria-label"]), (0, r.useEffect)((() => {
              l && d?.current && d.current.focus()
            }), [d?.current, l]), g) {
            const e = e => {
              e.preventDefault(), document?.querySelector(`[id='${s.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), o && o(e)
            };
            return (0, pr.jsxs)("a", {
              title: i,
              href: s,
              onClick: e,
              ...f,
              "aria-label": _,
              ref: d,
              children: [t, "_blank" === p && !_ && (0, pr.jsx)("span", {
                className: Xr,
                children: m.formatMessage(Ur.aria_label_open_new_window)
              })]
            })
          }
          if (u) return (0, pr.jsxs)(ur.NavLink, {
            title: i,
            to: s,
            onClick: o,
            ...f,
            "aria-label": _,
            ref: d,
            reloadDocument: a,
            children: [t, "_blank" === p && !_ && (0, pr.jsx)("span", {
              className: Xr,
              children: m.formatMessage(Ur.aria_label_open_new_window)
            })]
          });
          const b = Object.keys(f).filter((e => !["activeClassName", "key", "end"].includes(e))).reduce(((e, t) => ({
            ...e,
            [t]: c[t]
          })), {});
          return "function" == typeof b?.className && delete b.className, (0, pr.jsxs)("a", {
            href: s,
            title: i,
            onClick: o,
            target: p,
            ...b,
            "aria-label": _,
            ref: d,
            children: [t, "_blank" === p && !_ && (0, pr.jsx)("span", {
              className: Xr,
              children: m.formatMessage(Ur.aria_label_open_new_window)
            })]
          })
        }), Wr);
      Object.defineProperty;
      var Kr = new Map,
        Zr = new WeakMap,
        Qr = 0;

      function Jr(e, t, s = {}, r = undefined) {
        if (void 0 === window.IntersectionObserver && void 0 !== r) {
          const a = e.getBoundingClientRect();
          return t(r, {
            isIntersecting: r,
            target: e,
            intersectionRatio: "number" == typeof s.threshold ? s.threshold : 0,
            time: 0,
            boundingClientRect: a,
            intersectionRect: a,
            rootBounds: a
          }), () => {}
        }
        const {
          id: a,
          observer: i,
          elements: n
        } = function(e) {
          const t = function(e) {
            return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
              return `${t}_${"root"===t?(s=e.root,s?(Zr.has(s)||(Qr+=1,Zr.set(s,Qr.toString())),Zr.get(s)):"0"):e[t]}`;
              var s
            })).toString()
          }(e);
          let s = Kr.get(t);
          if (!s) {
            const r = new Map;
            let a;
            const i = new IntersectionObserver((t => {
              t.forEach((t => {
                var s;
                const i = t.isIntersecting && a.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = i), null == (s = r.get(t.target)) || s.forEach((e => {
                  e(i, t)
                }))
              }))
            }), e);
            a = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), s = {
              id: t,
              observer: i,
              elements: r
            }, Kr.set(t, s)
          }
          return s
        }(s), o = n.get(e) || [];
        return n.has(e) || n.set(e, o), o.push(t), i.observe(e),
          function() {
            o.splice(o.indexOf(t), 1), 0 === o.length && (n.delete(e), i.unobserve(e)), 0 === n.size && (i.disconnect(), Kr.delete(a))
          }
      }
      r.Component;
      class ea extends r.Component {
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
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, pr.jsxs)("div", {
            className: "rockstargames-sites-gtad5c408a8b618087ef4bb452f96526b2b",
            children: [(0, pr.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, pr.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      const ta = {
          rating: "rockstargames-sites-gtac3e95c84902dd75b827d3c95532e22dc",
          withDescriptors: "rockstargames-sites-gtab98963abfc7a63295bebc6c6d15b391a",
          withOutDescriptors: "rockstargames-sites-gtab6339480b5fd086fb0c025930bfb7dcd",
          text: "rockstargames-sites-gtababdd6ae2ff83f380dadc6982effa011"
        },
        sa = (0, hr.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var ra = s(5520);
      (0, cr.importAll)(s(6672));
      const aa = function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            s = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(r) {
            return (0, pr.jsx)(ea, {
              header: t,
              hidden: s,
              children: (0, pr.jsx)(e, {
                ...r
              })
            })
          }
        }((0, hr.withIntl)((e => {
          let {
            descriptors: t = null,
            footer: a = null,
            href: i,
            img: n = null,
            titleSlug: o = null,
            style: l = {},
            className: c
          } = e;
          const [d, m] = (0, r.useState)(!1), {
            inView: u
          } = function({
            threshold: e,
            delay: t,
            trackVisibility: s,
            rootMargin: a,
            root: i,
            triggerOnce: n,
            skip: o,
            initialInView: l,
            fallbackInView: c,
            onChange: d
          } = {}) {
            var m;
            const [u, g] = r.useState(null), p = r.useRef(), [f, _] = r.useState({
              inView: !!l,
              entry: void 0
            });
            p.current = d, r.useEffect((() => {
              if (o || !u) return;
              let r;
              return r = Jr(u, ((e, t) => {
                _({
                  inView: e,
                  entry: t
                }), p.current && p.current(e, t), t.isIntersecting && n && r && (r(), r = void 0)
              }), {
                root: i,
                rootMargin: a,
                threshold: e,
                trackVisibility: s,
                delay: t
              }, c), () => {
                r && r()
              }
            }), [Array.isArray(e) ? e.toString() : e, u, i, a, n, o, s, c, t]);
            const b = null == (m = f.entry) ? void 0 : m.target,
              h = r.useRef();
            u || !b || n || o || h.current === b || (h.current = b, _({
              inView: !!l,
              entry: void 0
            }));
            const v = [g, f.inView, f.entry];
            return v.ref = v[0], v.inView = v[1], v.entry = v[2], v
          }({
            threshold: .6
          }), [g, p] = (0, r.useState)({
            ratingDescriptors: t,
            ratingFooter: a,
            ratingImg: n,
            ratingUrl: i
          }), {
            track: f
          } = (0, er.useGtmTrack)(), _ = (0, hr.useIntl)(), {
            data: b
          } = (0, cr.useQuery)(ra.GameData, {
            variables: {
              titleSlug: o
            },
            skip: !o
          });
          if ((0, r.useEffect)((() => {
              b && p(b?.game)
            }), [b]), (0, r.useEffect)((() => {
              u && !d && g.img_rating && (f({
                event: "page_section_impression",
                element_placement: "rating"
              }), m(!0))
            }), [u]), !g.ratingImg) return null;
          const h = !!g.ratingDescriptors;
          return (0, pr.jsxs)("div", {
            className: [ta.rating, h ? ta.withDescriptors : ta.withOutDescriptors, c || ""].join(" "),
            style: (0, cr.safeStyles)(l),
            children: [(0, pr.jsx)($r, {
              to: g.ratingUrl,
              target: "_blank",
              children: (0, pr.jsx)("img", {
                alt: _.formatMessage(sa.components_ratings_link_alt, {
                  rating: (v = g.ratingImg, v.replace(/_/g, " ").split(".")[0].toUpperCase())
                }),
                src: s(8194)(`./${g.ratingImg}`)
              })
            }), h && (0, pr.jsxs)("div", {
              className: ta.text,
              children: [(0, pr.jsx)("p", {
                className: ta.descriptors,
                dangerouslySetInnerHTML: {
                  __html: g?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
                }
              }), g.ratingFooter && (0, pr.jsx)("hr", {}), g.ratingFooter && (0, pr.jsx)("p", {
                dangerouslySetInnerHTML: {
                  __html: g.ratingFooter.replace(/ \//g, ", ")
                }
              })]
            })]
          });
          var v
        }), Wr)),
        ia = {
          pillBtn: "rockstargames-sites-gtad5e006785121f616027593fb779471c5",
          selected: "rockstargames-sites-gtace0be315a25002dede1552e150f1ce71",
          infoSectionFooter: "rockstargames-sites-gtac86f468861a4a23636373a2c4e96e7ae",
          logo: "rockstargames-sites-gtad622ce76c31f954e4efda94438e554ee",
          platforms: "rockstargames-sites-gtab95fa6bfe4d700532ebbeded5f325f5a",
          rating: "rockstargames-sites-gtae3214549fe341b8695a1537b06f5a12c",
          withoutBorder: "rockstargames-sites-gtad2f8161fa0bd7f923704fcc0784ee3fd"
        },
        na = {
          rating_img: "pegi_rp.png",
          rating_link: "https://pegi.info/"
        },
        oa = {
          rating_img: "esrb_rp.svg",
          rating_link: "https://www.esrb.org/"
        },
        la = (0, hr.createDevLocaleHook)({
          br: {
            rating_img: "vaci_rp.png",
            rating_link: "https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
          },
          de: {
            rating_img: "usk_rp.svg",
            rating_link: "http://www.usk.de"
          },
          es: na,
          fr: na,
          hans: oa,
          it: na,
          jp: {
            rating_img: "cero_rp.png",
            rating_link: "https://www.cero.gr.jp/"
          },
          kr: oa,
          mx: oa,
          pl: na,
          ru: oa,
          tw: oa,
          us: oa
        }),
        ca = (0, r.forwardRef)(((e, t) => {
          let {
            className: r = "",
            titleSlug: a = "",
            platforms: i = [{
              name: "PlayStation 5",
              url: "playstation.svg"
            }, {
              name: "Xbox Series X|S",
              url: "xbox.svg"
            }]
          } = e;
          const n = (0, hr.useIntl)(),
            o = la(),
            l = "esrb_rp.svg" === o.rating_img ? "<p>May contain content inappropriate for children.</p>" : void 0,
            c = "esrb_rp.svg" === o.rating_img ? '<p>Visit <a href="https://esrb.org" target="_blank">esrb.org</a> for rating information.</p>' : void 0;
          return (0, pr.jsxs)("div", {
            className: [ia.infoSectionFooter, r || ""].join(" "),
            ref: t,
            children: [(0, pr.jsx)("div", {
              className: ia.rating,
              children: (0, pr.jsx)(aa, {
                className: [ia.mobileRating, ia.rating, ia.withoutBorder].join(" "),
                titleSlug: a || null,
                img: o.rating_img,
                descriptors: l,
                href: o.rating_link,
                footer: c
              })
            }), i.length && (0, pr.jsx)("div", {
              className: [ia.platforms, ia.hideOnMobile].join(" "),
              children: i.map((e => {
                let {
                  name: t,
                  url: r
                } = e;
                return (0, pr.jsx)("img", {
                  src: s(7958)(`./${r}`),
                  alt: t
                }, r)
              }))
            }), (0, pr.jsx)($r, {
              to: "/",
              "aria-label": n.formatMessage(vr.home_text),
              children: (0, pr.jsx)("img", {
                className: [ia.logo, ia.hideOnMobile].join(" "),
                src: s(5116),
                alt: n.formatMessage(vr.rockstar_games_logo_alt_text)
              })
            })]
          })
        }));
      ca.displayName = "InfoSectionFooter";
      const da = ca,
        ma = {
          pillBtn: "rockstargames-sites-gtaa482034b8e28e92f914d0a4814b36302",
          selected: "rockstargames-sites-gtacf7f41f7042d5a8186229002576d1be2",
          destinationPage: "rockstargames-sites-gtae8ec89818fc79edbaa66362c1c86d68b",
          footerContainer: "rockstargames-sites-gtafb6c191e89e437ace48ce507809afe5d",
          destinationContainer: "rockstargames-sites-gtaca2f81543a0e0655ab1b2abda8c2a1ce",
          active: "rockstargames-sites-gtaf4203b4395c65222fc14f58c4f9f9646",
          hero: "rockstargames-sites-gtaebb0afd7536b0fb0683ffff440c7ec3b",
          infoSectionContainer: "rockstargames-sites-gtacdfbf3e1aae618a88ec82a3ad18954a0",
          videoDialog: "rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f",
          videoDialogContent: "rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2"
        };
      a.gsap.registerPlugin(os, As, Js);
      const ua = e => {
          let {
            footer: t
          } = e;
          const {
            timelines: s,
            setIsStandalone: i,
            isVideoPlayerActive: n,
            createYouTubePlayer: o,
            dialogPlayerRef: l,
            isModalOpen: c,
            setIsModalOpen: d,
            setIsVideoPlayerActive: m,
            resetVideo: u
          } = br(), g = (0, r.useRef)(), p = (0, r.useRef)(null), f = (0, r.useRef)(null), _ = (0, r.useRef)(null), b = (0, r.useRef)(null), h = (0, r.useRef)(null), v = (0, r.useRef)(null), k = (0, r.useRef)(null), y = (0, r.useRef)(n), w = (0, r.useRef)(null), {
            loading: x,
            translation: S
          } = mr(), {
            track: T
          } = (0, er.useGtmTrack)();
          (0, r.useEffect)((() => {
            a.gsap.set(window, {
              scrollTo: 0
            })
          }), []);
          const z = e => {
            const t = e.relatedTarget;
            p.current && (f?.current?.heroUIRef?.current.contains(t) ? a.gsap.set(window, {
              scrollTo: 0
            }) : p.current.contains(t) && a.gsap.set(window, {
              scrollTo: t
            }))
          };
          return (0, r.useEffect)((() => (i(!0), window.document.body.style.overflowY = "hidden", window.document.addEventListener("focusout", z), () => {
            window.document.body.style.overflowY = "unset", window.document.removeEventListener("focusout", z)
          })), []), (0, r.useEffect)((() => {
            y.current = n, g.current && g.current.paused(n)
          }), [n]), (0, r.useEffect)((() => (h.current && (g.current = As.create({
            content: h.current,
            smooth: .5,
            normalizeScroll: !0
          }), g.current.paused(!0)), () => {
            g.current?.kill()
          })), [h.current]), (0, r.useLayoutEffect)((() => {
            const e = a.gsap.matchMedia();
            s?.introTimeline && e.add({
              isVerticalLayout: "(max-width: 1279px)",
              isHorizontalLayout: "(min-width: 1280px)"
            }, (e => (s.introTimeline.eventCallback("onComplete", (() => {
              g.current && g.current.paused(!1);
              const e = f?.current?.heroUIRef?.current,
                t = f?.current?.heroImagesRefs?.current?.heroImagesRef?.current,
                s = os.isTouch ? .75 : 100,
                r = os.isTouch ? a.Expo.easeInOut : "none";
              k?.current?.progress(0).kill(), k.current = a.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: s,
                  force3D: !0
                },
                scrollTrigger: {
                  trigger: p.current,
                  toggleActions: "play none none reverse",
                  toggleClass: `${ma.active}`,
                  pin: !0,
                  start: os.isTouch ? "top +=-1" : "top top",
                  end: os.isTouch ? "+=50" : "+=300",
                  scrub: !os.isTouch && .5,
                  invalidateOnRefresh: !0,
                  snap: !os.isTouch && {
                    snapTo: 1,
                    duration: {
                      min: .05,
                      max: .3
                    },
                    ease: a.Power3.easeIn
                  },
                  onLeaveBack: () => {
                    a.gsap.set(v?.current, {
                      display: "none"
                    })
                  },
                  onToggle: e => {
                    g.current && (a.gsap.set(v?.current, {
                      display: e.isActive ? "none" : "block"
                    }), -1 !== e.direction && (y.current || (g.current.paused(!0), setTimeout((() => {
                      y.current || g?.current?.paused(!1)
                    }), 500))))
                  }
                },
                onComplete: () => {
                  1 === os.isTouch && a.gsap.set(v?.current, {
                    display: "block"
                  })
                },
                onReverseComplete: () => {
                  1 === os.isTouch && a.gsap.set(v?.current, {
                    display: "none"
                  })
                }
              }).set(p.current, {
                height: () => b?.current?.clientHeight,
                maxHeight: () => b?.current?.clientHeight
              }).fromTo(e, {
                opacity: 1
              }, {
                opacity: 0,
                duration: os.isTouch ? .4 * s : .2 * s,
                ease: os.isTouch ? a.Sine.easeInOut : "sine.easeInOut",
                immediateRender: !1
              }).fromTo(f?.current?.heroRef?.current, {
                backgroundSize: () => 10 * window.innerWidth + "px",
                maskSize: () => 10 * window.innerWidth + "px",
                backgroundPosition: () => os.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`,
                maskPosition: () => os.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`
              }, {
                backgroundSize: () => _?.current?.children[0].clientWidth || _?.current?.children[0].scrollWidth || 0,
                maskSize: () => _?.current?.children[0].clientWidth || _?.current?.children[0].scrollWidth || 0,
                backgroundPosition: () => {
                  const e = _?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                maskPosition: () => {
                  const e = _?.current?.children[0]?.getBoundingClientRect();
                  return `${e?.x??0}px ${e?.y??0}px`
                },
                ease: os.isTouch ? r : "power2.easeInOut"
              }, "<").to(t, {
                "--hero-image-width": os.isTouch ? "110%" : "105%",
                "--hero-image-height": os.isTouch ? "110%" : "105%",
                "--hero-image-offset-bottom": os.isTouch ? "110%" : "105%",
                ease: os.isTouch ? r : "none"
              }, "<").to(t, {
                opacity: 0,
                duration: .2 * s,
                ease: "power2.easeInOut"
              }, "<85%").fromTo(_.current, {
                opacity: 0,
                pointerEvents: "none"
              }, {
                opacity: 1,
                pointerEvents: "auto",
                duration: .2 * s,
                ease: os.isTouch ? a.Power1.easeInOut : "power1.easeInOut"
              }, "<20%")
            }), []), () => {})))
          }), [n, s?.introTimeline, p?.current, f?.current?.heroRef?.current, f?.current?.heroUIRef?.current, f?.current?.heroImagesRef?.current, _?.current, v?.current]), (0, r.useEffect)((() => {
            c && l.current && o({
              target: l,
              id: "dialog"
            })
          }), [l, c]), (0, pr.jsxs)(pr.Fragment, {
            children: [(0, pr.jsx)(qr, {
              showModal: c,
              onClose: () => (d(!1), m(!1), u(), void T({
                event: "takeover_close",
                element_placement: "info_section"
              })),
              dialogRef: w,
              children: c && (0, pr.jsx)("div", {
                className: ma.videoDialog,
                children: (0, pr.jsx)("div", {
                  className: ma.videoDialogContent,
                  ref: l
                })
              })
            }), (0, pr.jsxs)("div", {
              className: ma.destinationPage,
              ref: h,
              children: [(0, pr.jsxs)("div", {
                className: ma.destinationContainer,
                ref: p,
                children: [(0, pr.jsx)(Gr, {
                  ref: f,
                  className: ma.hero,
                  standalone: !0
                }), (0, pr.jsx)("div", {
                  ref: b,
                  className: ma.infoSectionContainer,
                  children: (0, pr.jsx)(Hr, {
                    blurb: x ? "" : S("d2.destDescription"),
                    buttonText: x ? "" : S("d2.playbackCTA"),
                    header: x ? "" : S("d2.destHeadline"),
                    className: ma.infoSection,
                    ref: _
                  })
                })]
              }), (0, pr.jsx)(Tr, {
                showCloseButton: !0
              }), (0, pr.jsxs)("div", {
                ref: v,
                className: ma.footerContainer,
                children: [(0, pr.jsx)(da, {
                  platforms: [{
                    name: "PlayStation 5",
                    url: "playstation.svg"
                  }, {
                    name: "Xbox Series X|S",
                    url: "xbox.svg"
                  }]
                }), t]
              })]
            })]
          })
        },
        ga = e => {
          let {
            footer: t
          } = e;
          return (0, pr.jsx)(_r, {
            children: (0, pr.jsx)("span", {
              children: (0, pr.jsx)(ua, {
                footer: t
              })
            })
          })
        }
    },
    5520: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GameData"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "titleSlug"
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
                value: "withMetaTitle"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !1
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "metaUrl"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "String"
              }
            },
            defaultValue: {
              kind: "StringValue",
              value: "/",
              block: !1
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "meta"
              },
              name: {
                kind: "Name",
                value: "metaUrl"
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
                  value: "domain"
                },
                value: {
                  kind: "StringValue",
                  value: "www",
                  block: !1
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "url"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "metaUrl"
                  }
                }
              }],
              directives: [{
                kind: "Directive",
                name: {
                  kind: "Name",
                  value: "include"
                },
                arguments: [{
                  kind: "Argument",
                  name: {
                    kind: "Name",
                    value: "if"
                  },
                  value: {
                    kind: "Variable",
                    name: {
                      kind: "Name",
                      value: "withMetaTitle"
                    }
                  }
                }]
              }],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "title"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }, {
              kind: "Field",
              name: {
                kind: "Name",
                value: "game"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "titleSlug"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "titleSlug"
                  }
                }
              }, {
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingDescriptors"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingFooter"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingImg"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "ratingUrl"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 394
        }
      };

      function s(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, t)
        }))
      }
      t.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function a(e, t) {
        for (var s = 0; s < e.definitions.length; s++) {
          var r = e.definitions[s];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          s(e, t), r[e.name.value] = t
        }
      })), e.exports = t, e.exports.GameData = function(e, t) {
        var s = {
          kind: e.kind,
          definitions: [a(e, t)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = r[t] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var r = a(e, t);
          r && s.definitions.push(r)
        })), s
      }(t, "GameData")
    },
    5124: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "abc123"
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
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              alias: {
                kind: "Name",
                value: "abc123"
              },
              name: {
                kind: "Name",
                value: "abc123Aa73120ec29e42c87d5233b2f9a126277a5e3b8d9553ed992da0adf6a277bb2c"
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
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "key"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "value"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 183
        }
      };

      function s(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var r = e.type;
          "NamedType" === r.kind && t.add(r.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          s(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          s(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          s(e, t)
        }))
      }
      t.loc.source = {
        body: "query abc123($locale: String!) {\n    abc123: abc123Aa73120ec29e42c87d5233b2f9a126277a5e3b8d9553ed992da0adf6a277bb2c(\n        locale: $locale\n    ) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var r = {};

      function a(e, t) {
        for (var s = 0; s < e.definitions.length; s++) {
          var r = e.definitions[s];
          if (r.name && r.name.value == t) return r
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          s(e, t), r[e.name.value] = t
        }
      })), e.exports = t, e.exports.abc123 = function(e, t) {
        var s = {
          kind: e.kind,
          definitions: [a(e, t)]
        };
        e.hasOwnProperty("loc") && (s.loc = e.loc);
        var i = r[t] || new Set,
          n = new Set,
          o = new Set;
        for (i.forEach((function(e) {
            o.add(e)
          })); o.size > 0;) {
          var l = o;
          o = new Set, l.forEach((function(e) {
            n.has(e) || (n.add(e), (r[e] || new Set).forEach((function(e) {
              o.add(e)
            })))
          }))
        }
        return n.forEach((function(t) {
          var r = a(e, t);
          r && s.definitions.push(r)
        })), s
      }(t, "abc123")
    },
    6672: (e, t, s) => {
      var r = {
        "./cero_a.png": 7558,
        "./cero_b.svg": 9362,
        "./cero_c.svg": 7299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 7065,
        "./cero_z.svg": 6554,
        "./djctq_10.svg": 1392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 9836,
        "./djctq_16.svg": 4222,
        "./djctq_18.svg": 8648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 3781,
        "./esrb_ao.svg": 9235,
        "./esrb_e.svg": 4256,
        "./esrb_e10plus.svg": 5315,
        "./esrb_m.svg": 7256,
        "./esrb_m_ao.svg": 419,
        "./esrb_rp.svg": 9069,
        "./esrb_rplm17.svg": 5088,
        "./esrb_t.svg": 8177,
        "./fpb_13.svg": 6595,
        "./fpb_16.svg": 8414,
        "./fpb_18.svg": 1864,
        "./fpb_pg.svg": 7404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 8157,
        "./grac_19.svg": 9612,
        "./grac_a.svg": 9303,
        "./gsrr_0.svg": 7443,
        "./gsrr_12.svg": 9980,
        "./gsrr_15.svg": 4611,
        "./gsrr_18.svg": 8918,
        "./gsrr_6.svg": 3117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 324,
        "./nmc_18.svg": 2466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 8712,
        "./oflc_g.svg": 1022,
        "./oflc_m.svg": 2772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 7580,
        "./oflc_r18.svg": 4432,
        "./pegi_12.svg": 5821,
        "./pegi_16.svg": 6929,
        "./pegi_18.svg": 1575,
        "./pegi_3.svg": 7351,
        "./pegi_4.svg": 2424,
        "./pegi_6.svg": 6618,
        "./pegi_7.svg": 491,
        "./pegi_rp.png": 4293,
        "./rars_0.svg": 6855,
        "./rars_12.svg": 8952,
        "./rars_16.svg": 5044,
        "./rars_18.svg": 2690,
        "./rars_6.svg": 1913,
        "./usk_0.svg": 4406,
        "./usk_12.svg": 6151,
        "./usk_16.svg": 7707,
        "./usk_18.svg": 717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 1228,
        "./vaci_rp.png": 2323
      };

      function a(e) {
        var t = i(e);
        return s(t)
      }

      function i(e) {
        if (!s.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      a.keys = function() {
        return Object.keys(r)
      }, a.resolve = i, e.exports = a, a.id = 6672
    },
    8194: (e, t, s) => {
      var r = {
        "./cero_a.png": 7558,
        "./cero_b.svg": 9362,
        "./cero_c.svg": 7299,
        "./cero_d.svg": 9020,
        "./cero_rp.png": 7065,
        "./cero_z.svg": 6554,
        "./djctq_10.svg": 1392,
        "./djctq_12.svg": 8674,
        "./djctq_14.svg": 9836,
        "./djctq_16.svg": 4222,
        "./djctq_18.svg": 8648,
        "./djctq_er.svg": 8054,
        "./djctq_l.svg": 3781,
        "./esrb_ao.svg": 9235,
        "./esrb_e.svg": 4256,
        "./esrb_e10plus.svg": 5315,
        "./esrb_m.svg": 7256,
        "./esrb_m_ao.svg": 419,
        "./esrb_rp.svg": 9069,
        "./esrb_rplm17.svg": 5088,
        "./esrb_t.svg": 8177,
        "./fpb_13.svg": 6595,
        "./fpb_16.svg": 8414,
        "./fpb_18.svg": 1864,
        "./fpb_pg.svg": 7404,
        "./grac_12.svg": 8711,
        "./grac_15.svg": 6312,
        "./grac_18.svg": 8157,
        "./grac_19.svg": 9612,
        "./grac_a.svg": 9303,
        "./gsrr_0.svg": 7443,
        "./gsrr_12.svg": 9980,
        "./gsrr_15.svg": 4611,
        "./gsrr_18.svg": 8918,
        "./gsrr_6.svg": 3117,
        "./nmc_12.svg": 2024,
        "./nmc_16.svg": 324,
        "./nmc_18.svg": 2466,
        "./nmc_21.svg": 3950,
        "./nmc_3.svg": 9188,
        "./nmc_7.svg": 8712,
        "./oflc_g.svg": 1022,
        "./oflc_m.svg": 2772,
        "./oflc_ma15.svg": 9815,
        "./oflc_pg.svg": 7580,
        "./oflc_r18.svg": 4432,
        "./pegi_12.svg": 5821,
        "./pegi_16.svg": 6929,
        "./pegi_18.svg": 1575,
        "./pegi_3.svg": 7351,
        "./pegi_4.svg": 2424,
        "./pegi_6.svg": 6618,
        "./pegi_7.svg": 491,
        "./pegi_rp.png": 4293,
        "./rars_0.svg": 6855,
        "./rars_12.svg": 8952,
        "./rars_16.svg": 5044,
        "./rars_18.svg": 2690,
        "./rars_6.svg": 1913,
        "./usk_0.svg": 4406,
        "./usk_12.svg": 6151,
        "./usk_16.svg": 7707,
        "./usk_18.svg": 717,
        "./usk_6.svg": 2696,
        "./usk_rp.svg": 1228,
        "./vaci_rp.png": 2323
      };

      function a(e) {
        var t = i(e);
        return s(t)
      }

      function i(e) {
        if (!s.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      a.keys = function() {
        return Object.keys(r)
      }, a.resolve = i, e.exports = a, a.id = 8194
    },
    7958: (e, t, s) => {
      var r = {
        "./hero-mobile.jpg": 4720,
        "./hero.jpg": 5231,
        "./hero_0.jpg": 2062,
        "./hero_00.jpg": 7716,
        "./hero_00_L.png": 365,
        "./hero_00_R.png": 1091,
        "./hero_1.png": 4291,
        "./hero_2.png": 9016,
        "./hero_3.png": 3233,
        "./hero_logo.png": 6089,
        "./logo_primary.svg": 7650,
        "./logo_rockstar.svg": 159,
        "./logo_rockstar_gold.svg": 5116,
        "./logo_secondary_color.png": 6773,
        "./logo_secondary_mask.svg": 9129,
        "./logo_secondary_stroke.svg": 5741,
        "./play.svg": 4238,
        "./playstation.svg": 1258,
        "./xbox.svg": 6747
      };

      function a(e) {
        var t = i(e);
        return s(t)
      }

      function i(e) {
        if (!s.o(r, e)) {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }
        return r[e]
      }
      a.keys = function() {
        return Object.keys(r)
      }, a.resolve = i, e.exports = a, a.id = 7958
    },
    7558: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    9362: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    7299: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    7065: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    6554: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    1392: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    9836: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    4222: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    8648: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    3781: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    9235: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    4256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    5315: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    7256: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    419: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    9069: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    5088: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    8177: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    6595: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    8414: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    1864: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    7404: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    8157: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    9612: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    9303: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    7443: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    9980: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    4611: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    8918: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    3117: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    324: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    2466: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9188: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    8712: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    1022: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    2772: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    7580: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    4432: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    5821: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    6929: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    1575: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    7351: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    2424: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    6618: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    491: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    4293: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    6855: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    8952: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    5044: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    2690: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    1913: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    4406: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    6151: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    7707: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    717: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    1228: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    2323: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    4720: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
    },
    5231: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f7eab33a4989ce5f0cd89c70723909b3.jpg"
    },
    2062: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/309aa5a460fa7144f3633cf36159c417.jpg"
    },
    7716: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cff62fb2b8dc824b667505750129bd4d.jpg"
    },
    365: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c762105ff73b658b9e0d5373b9f6a476.png"
    },
    1091: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1fd72e459fc90381589af486ab6b029.png"
    },
    4291: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/530ffb0c42c0c18dcacbeb49c6587895.png"
    },
    9016: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/52c0b621f342d970c1e7726a83094887.png"
    },
    3233: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4bc6cd678f5391e5108a0e7fc1828436.png"
    },
    6089: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b3f050fed97a2b5bd571123c1a302593.png"
    },
    7650: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f37e3b93d105ed47dff3a5083ba21dd9.svg"
    },
    159: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52ba580606a589f4ac105866012722.svg"
    },
    5116: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c151d539436aaf8c9460d25e88a9307a.svg"
    },
    6773: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d358ca0f4ef1b724361c30dd82547992.png"
    },
    9129: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa598c85c9406b0078e3db23e2b605a8.svg"
    },
    5741: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4933ca1111cda1074c52c3918dbfbaf2.svg"
    },
    4238: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46b63430f04ecee9ad59d197168370a0.svg"
    },
    1258: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e47fca9e280c162468fe51d577f6db1.svg"
    },
    6747: e => {
      "use strict";
      e.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb63e6e7c7df7dcec0a9e0908e8b5d2.svg"
    }
  }
]);