! function() {
  try {
    var n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[e] = "1caba060-d965-4a8c-b23f-befa505a611b", n._sentryDebugIdIdentifier = "sentry-dbid-1caba060-d965-4a8c-b23f-befa505a611b")
  } catch (n) {}
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
  [6570, 3820], {
    3178: n => {
      "use strict";
      var e = [];

      function t(n) {
        for (var t = -1, a = 0; a < e.length; a++)
          if (e[a].identifier === n) {
            t = a;
            break
          } return t
      }

      function a(n, a) {
        for (var i = {}, o = [], s = 0; s < n.length; s++) {
          var l = n[s],
            d = a.base ? l[0] + a.base : l[0],
            c = i[d] || 0,
            g = "".concat(d, " ").concat(c);
          i[d] = c + 1;
          var m = t(g),
            p = {
              css: l[1],
              media: l[2],
              sourceMap: l[3],
              supports: l[4],
              layer: l[5]
            };
          if (-1 !== m) e[m].references++, e[m].updater(p);
          else {
            var h = r(p, a);
            a.byIndex = s, e.splice(s, 0, {
              identifier: g,
              updater: h,
              references: 1
            })
          }
          o.push(g)
        }
        return o
      }

      function r(n, e) {
        var t = e.domAPI(e);
        return t.update(n),
          function(e) {
            if (e) {
              if (e.css === n.css && e.media === n.media && e.sourceMap === n.sourceMap && e.supports === n.supports && e.layer === n.layer) return;
              t.update(n = e)
            } else t.remove()
          }
      }
      n.exports = function(n, r) {
        var i = a(n = n || [], r = r || {});
        return function(n) {
          n = n || [];
          for (var o = 0; o < i.length; o++) {
            var s = t(i[o]);
            e[s].references--
          }
          for (var l = a(n, r), d = 0; d < i.length; d++) {
            var c = t(i[d]);
            0 === e[c].references && (e[c].updater(), e.splice(c, 1))
          }
          i = l
        }
      }
    },
    7529: n => {
      "use strict";
      var e = {};
      n.exports = function(n, t) {
        var a = function(n) {
          if (void 0 === e[n]) {
            var t = document.querySelector(n);
            if (window.HTMLIFrameElement && t instanceof window.HTMLIFrameElement) try {
              t = t.contentDocument.head
            } catch (n) {
              t = null
            }
            e[n] = t
          }
          return e[n]
        }(n);
        if (!a) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        a.appendChild(t)
      }
    },
    2510: n => {
      "use strict";
      n.exports = function(n) {
        var e = document.createElement("style");
        return n.setAttributes(e, n.attributes), n.insert(e, n.options), e
      }
    },
    2162: (n, e, t) => {
      "use strict";
      n.exports = function(n) {
        var e = t.nc;
        e && n.setAttribute("nonce", e)
      }
    },
    7835: n => {
      "use strict";
      n.exports = function(n) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var e = n.insertStyleElement(n);
        return {
          update: function(t) {
            ! function(n, e, t) {
              var a = "";
              t.supports && (a += "@supports (".concat(t.supports, ") {")), t.media && (a += "@media ".concat(t.media, " {"));
              var r = void 0 !== t.layer;
              r && (a += "@layer".concat(t.layer.length > 0 ? " ".concat(t.layer) : "", " {")), a += t.css, r && (a += "}"), t.media && (a += "}"), t.supports && (a += "}");
              var i = t.sourceMap;
              i && "undefined" != typeof btoa && (a += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i)))), " */")), e.styleTagTransform(a, n, e.options)
            }(e, n, t)
          },
          remove: function() {
            ! function(n) {
              if (null === n.parentNode) return !1;
              n.parentNode.removeChild(n)
            }(e)
          }
        }
      }
    },
    675: n => {
      "use strict";
      n.exports = function(n, e) {
        if (e.styleSheet) e.styleSheet.cssText = n;
        else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(n))
        }
      }
    },
    5081: n => {
      "use strict";
      n.exports = function(n) {
        var e = [];
        return e.toString = function() {
          return this.map((function(e) {
            var t = "",
              a = void 0 !== e[5];
            return e[4] && (t += "@supports (".concat(e[4], ") {")), e[2] && (t += "@media ".concat(e[2], " {")), a && (t += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), t += n(e), a && (t += "}"), e[2] && (t += "}"), e[4] && (t += "}"), t
          })).join("")
        }, e.i = function(n, t, a, r, i) {
          "string" == typeof n && (n = [
            [null, n, void 0]
          ]);
          var o = {};
          if (a)
            for (var s = 0; s < this.length; s++) {
              var l = this[s][0];
              null != l && (o[l] = !0)
            }
          for (var d = 0; d < n.length; d++) {
            var c = [].concat(n[d]);
            a && o[c[0]] || (void 0 !== i && (void 0 === c[5] || (c[1] = "@layer".concat(c[5].length > 0 ? " ".concat(c[5]) : "", " {").concat(c[1], "}")), c[5] = i), t && (c[2] ? (c[1] = "@media ".concat(c[2], " {").concat(c[1], "}"), c[2] = t) : c[2] = t), r && (c[4] ? (c[1] = "@supports (".concat(c[4], ") {").concat(c[1], "}"), c[4] = r) : c[4] = "".concat(r)), e.push(c))
          }
        }, e
      }
    },
    9908: n => {
      "use strict";
      n.exports = function(n, e) {
        return e || (e = {}), n ? (n = String(n.__esModule ? n.default : n), /^['"].*['"]$/.test(n) && (n = n.slice(1, -1)), e.hash && (n += e.hash), /["'() \t\n]|(%20)/.test(n) || e.needQuotes ? '"'.concat(n.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : n) : n
      }
    },
    2587: n => {
      "use strict";
      n.exports = function(n) {
        var e = n[1],
          t = n[3];
        if (!t) return e;
        if ("function" == typeof btoa) {
          var a = btoa(unescape(encodeURIComponent(JSON.stringify(t)))),
            r = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),
            i = "/*# ".concat(r, " */");
          return [e].concat([i]).join("\n")
        }
        return [e].join("\n")
      }
    },
    2469: (n, e, t) => {
      "use strict";
      var a = t(2229),
        r = Symbol.for("react.element"),
        i = Symbol.for("react.fragment"),
        o = Object.prototype.hasOwnProperty,
        s = a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function d(n, e, t) {
        var a, i = {},
          d = null,
          c = null;
        for (a in void 0 !== t && (d = "" + t), void 0 !== e.key && (d = "" + e.key), void 0 !== e.ref && (c = e.ref), e) o.call(e, a) && !l.hasOwnProperty(a) && (i[a] = e[a]);
        if (n && n.defaultProps)
          for (a in e = n.defaultProps) void 0 === i[a] && (i[a] = e[a]);
        return {
          $$typeof: r,
          type: n,
          key: d,
          ref: c,
          props: i,
          _owner: s.current
        }
      }
      e.Fragment = i, e.jsx = d, e.jsxs = d
    },
    3855: (n, e, t) => {
      "use strict";
      n.exports = t(2469)
    },
    62: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => i,
        C: () => a
      });
      const a = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store"
        },
        r = [{
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
          let n;
          const {
            location: e
          } = window, t = e.hostname.substring(0, e.hostname.indexOf(".rockstargames.com")), a = r.findIndex((e => Object.entries(e.sites).findIndex((e => {
            let [a, r] = e;
            return r === t && (n = {
              site: a,
              subDomain: r
            }, !0)
          })) >= 0)), i = r[a >= 0 ? a : 0];
          return n || (n = {
            site: "www",
            subDomain: "local"
          }), {
            ...i,
            currentSite: n
          }
        }
    },
    6570: (n, e, t) => {
      "use strict";
      t.r(e), t.d(e, {
        default: () => di
      });
      var a = t(2229),
        r = t(3581);
      let i, o, s, l, d, c, g, m, p, h, f, A, u, v, b = () => i || "undefined" != typeof window && (i = window.gsap) && i.registerPlugin && i,
        w = 1,
        x = [],
        y = [],
        C = [],
        k = Date.now,
        _ = (n, e) => e,
        z = (n, e) => ~C.indexOf(n) && C[C.indexOf(n) + 1][e],
        B = n => !!~f.indexOf(n),
        I = (n, e, t, a, r) => n.addEventListener(e, t, {
          passive: !a,
          capture: !!r
        }),
        D = (n, e, t, a) => n.removeEventListener(e, t, !!a),
        S = "scrollLeft",
        E = "scrollTop",
        R = () => A && A.isPressed || y.cache++,
        N = (n, e) => {
          let t = a => {
            if (a || 0 === a) {
              w && (l.history.scrollRestoration = "manual");
              let e = A && A.isPressed;
              a = t.v = Math.round(a) || (A && A.iOS ? 1 : 0), n(a), t.cacheID = y.cache, e && _("ss", a)
            } else(e || y.cache !== t.cacheID || _("ref")) && (t.cacheID = y.cache, t.v = n());
            return t.v + t.offset
          };
          return t.offset = 0, n && t
        },
        T = {
          s: S,
          p: "left",
          p2: "Left",
          os: "right",
          os2: "Right",
          d: "width",
          d2: "Width",
          a: "x",
          sc: N((function(n) {
            return arguments.length ? l.scrollTo(n, F.sc()) : l.pageXOffset || d[S] || c[S] || g[S] || 0
          }))
        },
        F = {
          s: E,
          p: "top",
          p2: "Top",
          os: "bottom",
          os2: "Bottom",
          d: "height",
          d2: "Height",
          a: "y",
          op: T,
          sc: N((function(n) {
            return arguments.length ? l.scrollTo(T.sc(), n) : l.pageYOffset || d[E] || c[E] || g[E] || 0
          }))
        },
        M = (n, e) => (e && e._ctx && e._ctx.selector || i.utils.toArray)(n)[0] || ("string" == typeof n && !1 !== i.config().nullTargetWarn ? console.warn("Element not found:", n) : null),
        G = (n, e) => {
          let {
            s: t,
            sc: a
          } = e;
          B(n) && (n = d.scrollingElement || c);
          let r = y.indexOf(n),
            o = a === F.sc ? 1 : 2;
          !~r && (r = y.push(n) - 1), y[r + o] || I(n, "scroll", R);
          let s = y[r + o],
            l = s || (y[r + o] = N(z(n, t), !0) || (B(n) ? a : N((function(e) {
              return arguments.length ? n[t] = e : n[t]
            }))));
          return l.target = n, s || (l.smooth = "smooth" === i.getProperty(n, "scrollBehavior")), l
        },
        P = (n, e, t) => {
          let a = n,
            r = n,
            i = k(),
            o = i,
            s = e || 50,
            l = Math.max(500, 3 * s),
            d = (n, e) => {
              let l = k();
              e || l - i > s ? (r = a, a = n, o = i, i = l) : t ? a += n : a = r + (n - r) / (l - o) * (i - o)
            };
          return {
            update: d,
            reset: () => {
              r = a = t ? 0 : a, o = i = 0
            },
            getVelocity: n => {
              let e = o,
                s = r,
                c = k();
              return (n || 0 === n) && n !== a && d(n), i === o || c - o > l ? 0 : (a + (t ? s : -s)) / ((t ? c : i) - e) * 1e3
            }
          }
        },
        j = (n, e) => (e && !n._gsapAllow && n.preventDefault(), n.changedTouches ? n.changedTouches[0] : n),
        H = n => {
          let e = Math.max(...n),
            t = Math.min(...n);
          return Math.abs(e) >= Math.abs(t) ? e : t
        },
        O = () => {
          h = i.core.globals().ScrollTrigger, h && h.core && (() => {
            let n = h.core,
              e = n.bridge || {},
              t = n._scrollers,
              a = n._proxies;
            t.push(...y), a.push(...C), y = t, C = a, _ = (n, t) => e[n](t)
          })()
        },
        W = n => (i = n || b(), i && "undefined" != typeof document && document.body && (l = window, d = document, c = d.documentElement, g = d.body, f = [l, d, c, g], s = i.utils.clamp, v = i.core.context || function() {}, p = "onpointerenter" in g ? "pointer" : "mouse", m = L.isTouch = l.matchMedia && l.matchMedia("(hover: none), (pointer: coarse)").matches ? 1 : "ontouchstart" in l || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0 ? 2 : 0, u = L.eventTypes = ("ontouchstart" in c ? "touchstart,touchmove,touchcancel,touchend" : "onpointerdown" in c ? "pointerdown,pointermove,pointercancel,pointerup" : "mousedown,mousemove,mouseup,mouseup").split(","), setTimeout((() => w = 0), 500), O(), o = 1), o);
      T.op = F, y.cache = 0;
      class L {
        constructor(n) {
          this.init(n)
        }
        init(n) {
          o || W(i) || console.warn("Please gsap.registerPlugin(Observer)"), h || O();
          let {
            tolerance: e,
            dragMinimum: t,
            type: a,
            target: r,
            lineHeight: s,
            debounce: f,
            preventDefault: b,
            onStop: w,
            onStopDelay: y,
            ignore: C,
            wheelSpeed: _,
            event: z,
            onDragStart: S,
            onDragEnd: E,
            onDrag: N,
            onPress: L,
            onRelease: q,
            onRight: U,
            onLeft: V,
            onUp: J,
            onDown: Q,
            onChangeX: Y,
            onChangeY: K,
            onChange: $,
            onToggleX: X,
            onToggleY: Z,
            onHover: nn,
            onHoverEnd: en,
            onMove: tn,
            ignoreCheck: an,
            isNormalizer: rn,
            onGestureStart: on,
            onGestureEnd: sn,
            onWheel: ln,
            onEnable: dn,
            onDisable: cn,
            onClick: gn,
            scrollSpeed: mn,
            capture: pn,
            allowClicks: hn,
            lockAxis: fn,
            onLockAxis: An
          } = n;
          this.target = r = M(r) || c, this.vars = n, C && (C = i.utils.toArray(C)), e = e || 1e-9, t = t || 0, _ = _ || 1, mn = mn || 1, a = a || "wheel,touch,pointer", f = !1 !== f, s || (s = parseFloat(l.getComputedStyle(g).lineHeight) || 22);
          let un, vn, bn, wn, xn, yn, Cn, kn = this,
            _n = 0,
            zn = 0,
            Bn = G(r, T),
            In = G(r, F),
            Dn = Bn(),
            Sn = In(),
            En = ~a.indexOf("touch") && !~a.indexOf("pointer") && "pointerdown" === u[0],
            Rn = B(r),
            Nn = r.ownerDocument || d,
            Tn = [0, 0, 0],
            Fn = [0, 0, 0],
            Mn = 0,
            Gn = () => Mn = k(),
            Pn = (n, e) => (kn.event = n) && C && ~C.indexOf(n.target) || e && En && "touch" !== n.pointerType || an && an(n, e),
            jn = () => {
              let n = kn.deltaX = H(Tn),
                t = kn.deltaY = H(Fn),
                a = Math.abs(n) >= e,
                r = Math.abs(t) >= e;
              $ && (a || r) && $(kn, n, t, Tn, Fn), a && (U && kn.deltaX > 0 && U(kn), V && kn.deltaX < 0 && V(kn), Y && Y(kn), X && kn.deltaX < 0 != _n < 0 && X(kn), _n = kn.deltaX, Tn[0] = Tn[1] = Tn[2] = 0), r && (Q && kn.deltaY > 0 && Q(kn), J && kn.deltaY < 0 && J(kn), K && K(kn), Z && kn.deltaY < 0 != zn < 0 && Z(kn), zn = kn.deltaY, Fn[0] = Fn[1] = Fn[2] = 0), (wn || bn) && (tn && tn(kn), bn && (N(kn), bn = !1), wn = !1), yn && !(yn = !1) && An && An(kn), xn && (ln(kn), xn = !1), un = 0
            },
            Hn = (n, e, t) => {
              Tn[t] += n, Fn[t] += e, kn._vx.update(n), kn._vy.update(e), f ? un || (un = requestAnimationFrame(jn)) : jn()
            },
            On = (n, e) => {
              fn && !Cn && (kn.axis = Cn = Math.abs(n) > Math.abs(e) ? "x" : "y", yn = !0), "y" !== Cn && (Tn[2] += n, kn._vx.update(n, !0)), "x" !== Cn && (Fn[2] += e, kn._vy.update(e, !0)), f ? un || (un = requestAnimationFrame(jn)) : jn()
            },
            Wn = n => {
              if (Pn(n, 1)) return;
              let e = (n = j(n, b)).clientX,
                a = n.clientY,
                r = e - kn.x,
                i = a - kn.y,
                o = kn.isDragging;
              kn.x = e, kn.y = a, (o || Math.abs(kn.startX - e) >= t || Math.abs(kn.startY - a) >= t) && (N && (bn = !0), o || (kn.isDragging = !0), On(r, i), o || S && S(kn))
            },
            Ln = kn.onPress = n => {
              Pn(n, 1) || n && n.button || (kn.axis = Cn = null, vn.pause(), kn.isPressed = !0, n = j(n), _n = zn = 0, kn.startX = kn.x = n.clientX, kn.startY = kn.y = n.clientY, kn._vx.reset(), kn._vy.reset(), I(rn ? r : Nn, u[1], Wn, b, !0), kn.deltaX = kn.deltaY = 0, L && L(kn))
            },
            qn = kn.onRelease = n => {
              if (Pn(n, 1)) return;
              D(rn ? r : Nn, u[1], Wn, !0);
              let e = !isNaN(kn.y - kn.startY),
                t = kn.isDragging && (Math.abs(kn.x - kn.startX) > 3 || Math.abs(kn.y - kn.startY) > 3),
                a = j(n);
              !t && e && (kn._vx.reset(), kn._vy.reset(), b && hn && i.delayedCall(.08, (() => {
                if (k() - Mn > 300 && !n.defaultPrevented)
                  if (n.target.click) n.target.click();
                  else if (Nn.createEvent) {
                  let e = Nn.createEvent("MouseEvents");
                  e.initMouseEvent("click", !0, !0, l, 1, a.screenX, a.screenY, a.clientX, a.clientY, !1, !1, !1, !1, 0, null), n.target.dispatchEvent(e)
                }
              }))), kn.isDragging = kn.isGesturing = kn.isPressed = !1, w && !rn && vn.restart(!0), E && t && E(kn), q && q(kn, t)
            },
            Un = n => n.touches && n.touches.length > 1 && (kn.isGesturing = !0) && on(n, kn.isDragging),
            Vn = () => (kn.isGesturing = !1) || sn(kn),
            Jn = n => {
              if (Pn(n)) return;
              let e = Bn(),
                t = In();
              Hn((e - Dn) * mn, (t - Sn) * mn, 1), Dn = e, Sn = t, w && vn.restart(!0)
            },
            Qn = n => {
              if (Pn(n)) return;
              n = j(n, b), ln && (xn = !0);
              let e = (1 === n.deltaMode ? s : 2 === n.deltaMode ? l.innerHeight : 1) * _;
              Hn(n.deltaX * e, n.deltaY * e, 0), w && !rn && vn.restart(!0)
            },
            Yn = n => {
              if (Pn(n)) return;
              let e = n.clientX,
                t = n.clientY,
                a = e - kn.x,
                r = t - kn.y;
              kn.x = e, kn.y = t, wn = !0, (a || r) && On(a, r)
            },
            Kn = n => {
              kn.event = n, nn(kn)
            },
            $n = n => {
              kn.event = n, en(kn)
            },
            Xn = n => Pn(n) || j(n, b) && gn(kn);
          vn = kn._dc = i.delayedCall(y || .25, (() => {
            kn._vx.reset(), kn._vy.reset(), vn.pause(), w && w(kn)
          })).pause(), kn.deltaX = kn.deltaY = 0, kn._vx = P(0, 50, !0), kn._vy = P(0, 50, !0), kn.scrollX = Bn, kn.scrollY = In, kn.isDragging = kn.isGesturing = kn.isPressed = !1, v(this), kn.enable = n => (kn.isEnabled || (I(Rn ? Nn : r, "scroll", R), a.indexOf("scroll") >= 0 && I(Rn ? Nn : r, "scroll", Jn, b, pn), a.indexOf("wheel") >= 0 && I(r, "wheel", Qn, b, pn), (a.indexOf("touch") >= 0 && m || a.indexOf("pointer") >= 0) && (I(r, u[0], Ln, b, pn), I(Nn, u[2], qn), I(Nn, u[3], qn), hn && I(r, "click", Gn, !1, !0), gn && I(r, "click", Xn), on && I(Nn, "gesturestart", Un), sn && I(Nn, "gestureend", Vn), nn && I(r, p + "enter", Kn), en && I(r, p + "leave", $n), tn && I(r, p + "move", Yn)), kn.isEnabled = !0, n && n.type && Ln(n), dn && dn(kn)), kn), kn.disable = () => {
            kn.isEnabled && (x.filter((n => n !== kn && B(n.target))).length || D(Rn ? Nn : r, "scroll", R), kn.isPressed && (kn._vx.reset(), kn._vy.reset(), D(rn ? r : Nn, u[1], Wn, !0)), D(Rn ? Nn : r, "scroll", Jn, pn), D(r, "wheel", Qn, pn), D(r, u[0], Ln, pn), D(Nn, u[2], qn), D(Nn, u[3], qn), D(r, "click", Gn, !0), D(r, "click", Xn), D(Nn, "gesturestart", Un), D(Nn, "gestureend", Vn), D(r, p + "enter", Kn), D(r, p + "leave", $n), D(r, p + "move", Yn), kn.isEnabled = kn.isPressed = kn.isDragging = !1, cn && cn(kn))
          }, kn.kill = kn.revert = () => {
            kn.disable();
            let n = x.indexOf(kn);
            n >= 0 && x.splice(n, 1), A === kn && (A = 0)
          }, x.push(kn), rn && B(r) && (A = kn), kn.enable(z)
        }
        get velocityX() {
          return this._vx.getVelocity()
        }
        get velocityY() {
          return this._vy.getVelocity()
        }
      }
      L.version = "3.12.2", L.create = n => new L(n), L.register = W, L.getAll = () => x.slice(), L.getById = n => x.filter((e => e.vars.id === n))[0], b() && i.registerPlugin(L);
      let q, U, V, J, Q, Y, K, $, X, Z, nn, en, tn, an, rn, on, sn, ln, dn, cn, gn, mn, pn, hn, fn, An, un, vn, bn, wn, xn, yn, Cn, kn, _n, zn, Bn = 1,
        In = Date.now,
        Dn = In(),
        Sn = 0,
        En = 0,
        Rn = (n, e, t) => {
          let a = Vn(n) && ("clamp(" === n.substr(0, 6) || n.indexOf("max") > -1);
          return t["_" + e + "Clamp"] = a, a ? n.substr(6, n.length - 7) : n
        },
        Nn = (n, e) => !e || Vn(n) && "clamp(" === n.substr(0, 6) ? n : "clamp(" + n + ")",
        Tn = () => En && requestAnimationFrame(Tn),
        Fn = () => an = 1,
        Mn = () => an = 0,
        Gn = n => n,
        Pn = n => Math.round(1e5 * n) / 1e5 || 0,
        jn = () => "undefined" != typeof window,
        Hn = () => q || jn() && (q = window.gsap) && q.registerPlugin && q,
        On = n => !!~K.indexOf(n),
        Wn = n => ("Height" === n ? xn : V["inner" + n]) || Q["client" + n] || Y["client" + n],
        Ln = n => z(n, "getBoundingClientRect") || (On(n) ? () => (et.width = V.innerWidth, et.height = xn, et) : () => fe(n)),
        qn = (n, e) => {
          let {
            s: t,
            d2: a,
            d: r,
            a: i
          } = e;
          return Math.max(0, (t = "scroll" + a) && (i = z(n, t)) ? i() - Ln(n)()[r] : On(n) ? (Q[t] || Y[t]) - Wn(a) : n[t] - n["offset" + a])
        },
        Un = (n, e) => {
          for (let t = 0; t < dn.length; t += 3)(!e || ~e.indexOf(dn[t + 1])) && n(dn[t], dn[t + 1], dn[t + 2])
        },
        Vn = n => "string" == typeof n,
        Jn = n => "function" == typeof n,
        Qn = n => "number" == typeof n,
        Yn = n => "object" == typeof n,
        Kn = (n, e, t) => n && n.progress(e ? 0 : 1) && t && n.pause(),
        $n = (n, e) => {
          if (n.enabled) {
            let t = e(n);
            t && t.totalTime && (n.callbackAnimation = t)
          }
        },
        Xn = Math.abs,
        Zn = "left",
        ne = "right",
        ee = "bottom",
        te = "width",
        ae = "height",
        re = "Right",
        ie = "Left",
        oe = "Top",
        se = "Bottom",
        le = "padding",
        de = "margin",
        ce = "Width",
        ge = "Height",
        me = "px",
        pe = n => V.getComputedStyle(n),
        he = (n, e) => {
          for (let t in e) t in n || (n[t] = e[t]);
          return n
        },
        fe = (n, e) => {
          let t = e && "matrix(1, 0, 0, 1, 0, 0)" !== pe(n)[rn] && q.to(n, {
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
            a = n.getBoundingClientRect();
          return t && t.progress(0).kill(), a
        },
        Ae = (n, e) => {
          let {
            d2: t
          } = e;
          return n["offset" + t] || n["client" + t] || 0
        },
        ue = n => {
          let e, t = [],
            a = n.labels,
            r = n.duration();
          for (e in a) t.push(a[e] / r);
          return t
        },
        ve = n => {
          let e = q.utils.snap(n),
            t = Array.isArray(n) && n.slice(0).sort(((n, e) => n - e));
          return t ? function(n, a) {
            let r, i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001;
            if (!a) return e(n);
            if (a > 0) {
              for (n -= i, r = 0; r < t.length; r++)
                if (t[r] >= n) return t[r];
              return t[r - 1]
            }
            for (r = t.length, n += i; r--;)
              if (t[r] <= n) return t[r];
            return t[0]
          } : function(t, a) {
            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : .001,
              i = e(t);
            return !a || Math.abs(i - t) < r || i - t < 0 == a < 0 ? i : e(a < 0 ? t - n : t + n)
          }
        },
        be = (n, e, t, a) => t.split(",").forEach((t => n(e, t, a))),
        we = (n, e, t, a, r) => n.addEventListener(e, t, {
          passive: !a,
          capture: !!r
        }),
        xe = (n, e, t, a) => n.removeEventListener(e, t, !!a),
        ye = (n, e, t) => {
          (t = t && t.wheelHandler) && (n(e, "wheel", t), n(e, "touchmove", t))
        },
        Ce = {
          startColor: "green",
          endColor: "red",
          indent: 0,
          fontSize: "16px",
          fontWeight: "normal"
        },
        ke = {
          toggleActions: "play",
          anticipatePin: 0
        },
        _e = {
          top: 0,
          left: 0,
          center: .5,
          bottom: 1,
          right: 1
        },
        ze = (n, e) => {
          if (Vn(n)) {
            let t = n.indexOf("="),
              a = ~t ? +(n.charAt(t - 1) + 1) * parseFloat(n.substr(t + 1)) : 0;
            ~t && (n.indexOf("%") > t && (a *= e / 100), n = n.substr(0, t - 1)), n = a + (n in _e ? _e[n] * e : ~n.indexOf("%") ? parseFloat(n) * e / 100 : parseFloat(n) || 0)
          }
          return n
        },
        Be = (n, e, t, a, r, i, o, s) => {
          let {
            startColor: l,
            endColor: d,
            fontSize: c,
            indent: g,
            fontWeight: m
          } = r, p = J.createElement("div"), h = On(t) || "fixed" === z(t, "pinType"), f = -1 !== n.indexOf("scroller"), A = h ? Y : t, u = -1 !== n.indexOf("start"), v = u ? l : d, b = "border-color:" + v + ";font-size:" + c + ";color:" + v + ";font-weight:" + m + ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
          return b += "position:" + ((f || s) && h ? "fixed;" : "absolute;"), (f || s || !h) && (b += (a === F ? ne : ee) + ":" + (i + parseFloat(g)) + "px;"), o && (b += "box-sizing:border-box;text-align:left;width:" + o.offsetWidth + "px;"), p._isStart = u, p.setAttribute("class", "gsap-marker-" + n + (e ? " marker-" + e : "")), p.style.cssText = b, p.innerText = e || 0 === e ? n + "-" + e : n, A.children[0] ? A.insertBefore(p, A.children[0]) : A.appendChild(p), p._offset = p["offset" + a.op.d2], Ie(p, 0, a, u), p
        },
        Ie = (n, e, t, a) => {
          let r = {
              display: "block"
            },
            i = t[a ? "os2" : "p2"],
            o = t[a ? "p2" : "os2"];
          n._isFlipped = a, r[t.a + "Percent"] = a ? -100 : 0, r[t.a] = a ? "1px" : 0, r["border" + i + ce] = 1, r["border" + o + ce] = 0, r[t.p] = e + "px", q.set(n, r)
        },
        De = [],
        Se = {},
        Ee = () => In() - Sn > 34 && (Cn || (Cn = requestAnimationFrame(Qe))),
        Re = () => {
          (!pn || !pn.isPressed || pn.startX > Y.clientWidth) && (y.cache++, pn ? Cn || (Cn = requestAnimationFrame(Qe)) : Qe(), Sn || Pe("scrollStart"), Sn = In())
        },
        Ne = () => {
          An = V.innerWidth, fn = V.innerHeight
        },
        Te = () => {
          y.cache++, !tn && !mn && !J.fullscreenElement && !J.webkitFullscreenElement && (!hn || An !== V.innerWidth || Math.abs(V.innerHeight - fn) > .25 * V.innerHeight) && $.restart(!0)
        },
        Fe = {},
        Me = [],
        Ge = () => xe(lt, "scrollEnd", Ge) || Ue(!0),
        Pe = n => Fe[n] && Fe[n].map((n => n())) || Me,
        je = [],
        He = n => {
          for (let e = 0; e < je.length; e += 5)(!n || je[e + 4] && je[e + 4].query === n) && (je[e].style.cssText = je[e + 1], je[e].getBBox && je[e].setAttribute("transform", je[e + 2] || ""), je[e + 3].uncache = 1)
        },
        Oe = (n, e) => {
          let t;
          for (on = 0; on < De.length; on++) t = De[on], !t || e && t._ctx !== e || (n ? t.kill(1) : t.revert(!0, !0));
          e && He(e), e || Pe("revert")
        },
        We = (n, e) => {
          y.cache++, (e || !kn) && y.forEach((n => Jn(n) && n.cacheID++ && (n.rec = 0))), Vn(n) && (V.history.scrollRestoration = bn = n)
        },
        Le = 0,
        qe = () => {
          Y.appendChild(wn), xn = wn.offsetHeight || V.innerHeight, Y.removeChild(wn)
        },
        Ue = (n, e) => {
          if (Sn && !n) return void we(lt, "scrollEnd", Ge);
          qe(), kn = lt.isRefreshing = !0, y.forEach((n => Jn(n) && ++n.cacheID && (n.rec = n())));
          let t = Pe("refreshInit");
          cn && lt.sort(), e || Oe(), y.forEach((n => {
            Jn(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0))
          })), De.slice(0).forEach((n => n.refresh())), De.forEach(((n, e) => {
            if (n._subPinOffset && n.pin) {
              let e = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
                t = n.pin[e];
              n.revert(!0, 1), n.adjustPinSpacing(n.pin[e] - t), n.refresh()
            }
          })), De.forEach((n => {
            let e = qn(n.scroller, n._dir);
            ("max" === n.vars.end || n._endClamp && n.end > e) && n.setPositions(n.start, Math.max(n.start + 1, e), !0)
          })), t.forEach((n => n && n.render && n.render(-1))), y.forEach((n => {
            Jn(n) && (n.smooth && requestAnimationFrame((() => n.target.style.scrollBehavior = "smooth")), n.rec && n(n.rec))
          })), We(bn, 1), $.pause(), Le++, kn = 2, Qe(2), De.forEach((n => Jn(n.vars.onRefresh) && n.vars.onRefresh(n))), kn = lt.isRefreshing = !1, Pe("refresh")
        },
        Ve = 0,
        Je = 1,
        Qe = n => {
          if (!kn || 2 === n) {
            lt.isUpdating = !0, zn && zn.update(0);
            let n = De.length,
              e = In(),
              t = e - Dn >= 50,
              a = n && De[0].scroll();
            if (Je = Ve > a ? -1 : 1, kn || (Ve = a), t && (Sn && !an && e - Sn > 200 && (Sn = 0, Pe("scrollEnd")), nn = Dn, Dn = e), Je < 0) {
              for (on = n; on-- > 0;) De[on] && De[on].update(0, t);
              Je = 1
            } else
              for (on = 0; on < n; on++) De[on] && De[on].update(0, t);
            lt.isUpdating = !1
          }
          Cn = 0
        },
        Ye = [Zn, "top", ee, ne, de + se, de + re, de + oe, de + ie, "display", "flexShrink", "float", "zIndex", "gridColumnStart", "gridColumnEnd", "gridRowStart", "gridRowEnd", "gridArea", "justifySelf", "alignSelf", "placeSelf", "order"],
        Ke = Ye.concat([te, ae, "boxSizing", "max" + ce, "max" + ge, "position", de, le, le + oe, le + re, le + se, le + ie]),
        $e = (n, e, t, a) => {
          if (!n._gsap.swappedIn) {
            let r, i = Ye.length,
              o = e.style,
              s = n.style;
            for (; i--;) r = Ye[i], o[r] = t[r];
            o.position = "absolute" === t.position ? "absolute" : "relative", "inline" === t.display && (o.display = "inline-block"), s[ee] = s[ne] = "auto", o.flexBasis = t.flexBasis || "auto", o.overflow = "visible", o.boxSizing = "border-box", o[te] = Ae(n, T) + me, o[ae] = Ae(n, F) + me, o[le] = s[de] = s.top = s[Zn] = "0", Ze(a), s[te] = s["max" + ce] = t[te], s[ae] = s["max" + ge] = t[ae], s[le] = t[le], n.parentNode !== e && (n.parentNode.insertBefore(e, n), e.appendChild(n)), n._gsap.swappedIn = !0
          }
        },
        Xe = /([A-Z])/g,
        Ze = n => {
          if (n) {
            let e, t, a = n.t.style,
              r = n.length,
              i = 0;
            for ((n.t._gsap || q.core.getCache(n.t)).uncache = 1; i < r; i += 2) t = n[i + 1], e = n[i], t ? a[e] = t : a[e] && a.removeProperty(e.replace(Xe, "-$1").toLowerCase())
          }
        },
        nt = n => {
          let e = Ke.length,
            t = n.style,
            a = [],
            r = 0;
          for (; r < e; r++) a.push(Ke[r], t[Ke[r]]);
          return a.t = n, a
        },
        et = {
          left: 0,
          top: 0
        },
        tt = (n, e, t, a, r, i, o, s, l, d, c, g, m, p) => {
          Jn(n) && (n = n(s)), Vn(n) && "max" === n.substr(0, 3) && (n = g + ("=" === n.charAt(4) ? ze("0" + n.substr(3), t) : 0));
          let h, f, A, u = m ? m.time() : 0;
          if (m && m.seek(0), isNaN(n) || (n = +n), Qn(n)) m && (n = q.utils.mapRange(m.scrollTrigger.start, m.scrollTrigger.end, 0, g, n)), o && Ie(o, t, a, !0);
          else {
            Jn(e) && (e = e(s));
            let i, c, g, m, p = (n || "0").split(" ");
            A = M(e, s) || Y, i = fe(A) || {}, i && (i.left || i.top) || "none" !== pe(A).display || (m = A.style.display, A.style.display = "block", i = fe(A), m ? A.style.display = m : A.style.removeProperty("display")), c = ze(p[0], i[a.d]), g = ze(p[1] || "0", t), n = i[a.p] - l[a.p] - d + c + r - g, o && Ie(o, g, a, t - g < 20 || o._isStart && g > 20), t -= t - g
          }
          if (p && (s[p] = n || -.001, n < 0 && (n = 0)), i) {
            let e = n + t,
              r = i._isStart;
            h = "scroll" + a.d2, Ie(i, e, a, r && e > 20 || !r && (c ? Math.max(Y[h], Q[h]) : i.parentNode[h]) <= e + 1), c && (l = fe(o), c && (i.style[a.op.p] = l[a.op.p] - a.op.m - i._offset + me))
          }
          return m && A && (h = fe(A), m.seek(g), f = fe(A), m._caScrollDist = h[a.p] - f[a.p], n = n / m._caScrollDist * g), m && m.seek(u), m ? n : Math.round(n)
        },
        at = /(webkit|moz|length|cssText|inset)/i,
        rt = (n, e, t, a) => {
          if (n.parentNode !== e) {
            let r, i, o = n.style;
            if (e === Y) {
              for (r in n._stOrig = o.cssText, i = pe(n), i) + r || at.test(r) || !i[r] || "string" != typeof o[r] || "0" === r || (o[r] = i[r]);
              o.top = t, o.left = a
            } else o.cssText = n._stOrig;
            q.core.getCache(n).uncache = 1, e.appendChild(n)
          }
        },
        it = (n, e, t) => {
          let a = e,
            r = a;
          return e => {
            let i = Math.round(n());
            return i !== a && i !== r && Math.abs(i - a) > 3 && Math.abs(i - r) > 3 && (e = i, t && t()), r = a, a = e, e
          }
        },
        ot = (n, e, t) => {
          let a = {};
          a[e.p] = "+=" + t, q.set(n, a)
        },
        st = (n, e) => {
          let t = G(n, e),
            a = "_scroll" + e.p2,
            r = (e, i, o, s, l) => {
              let d = r.tween,
                c = i.onComplete,
                g = {};
              o = o || t();
              let m = it(t, o, (() => {
                d.kill(), r.tween = 0
              }));
              return l = s && l || 0, s = s || e - o, d && d.kill(), i[a] = e, i.modifiers = g, g[a] = () => m(o + s * d.ratio + l * d.ratio * d.ratio), i.onUpdate = () => {
                y.cache++, Qe()
              }, i.onComplete = () => {
                r.tween = 0, c && c.call(d)
              }, d = r.tween = q.to(n, i), d
            };
          return n[a] = t, t.wheelHandler = () => r.tween && r.tween.kill() && (r.tween = 0), we(n, "wheel", t.wheelHandler), lt.isTouch && we(n, "touchmove", t.wheelHandler), r
        };
      class lt {
        constructor(n, e) {
          U || lt.register(q) || console.warn("Please gsap.registerPlugin(ScrollTrigger)"), vn(this), this.init(n, e)
        }
        init(n, e) {
          if (this.progress = this.start = 0, this.vars && this.kill(!0, !0), !En) return void(this.update = this.refresh = this.kill = Gn);
          n = he(Vn(n) || Qn(n) || n.nodeType ? {
            trigger: n
          } : n, ke);
          let t, a, r, i, o, s, l, d, c, g, m, p, h, f, A, u, v, b, w, x, k, _, B, I, D, S, E, R, N, P, j, H, O, W, L, U, K, $, en, {
              onUpdate: rn,
              toggleClass: sn,
              id: ln,
              onToggle: dn,
              onRefresh: mn,
              scrub: pn,
              trigger: hn,
              pin: fn,
              pinSpacing: An,
              invalidateOnRefresh: un,
              anticipatePin: vn,
              onScrubComplete: bn,
              onSnapComplete: wn,
              once: xn,
              snap: Cn,
              pinReparent: Dn,
              pinSpacer: Tn,
              containerAnimation: Fn,
              fastScrollEnd: Mn,
              preventOverlaps: jn
            } = n,
            Hn = n.horizontal || n.containerAnimation && !1 !== n.horizontal ? T : F,
            Un = !pn && 0 !== pn,
            Zn = M(n.scroller || V),
            ne = q.core.getCache(Zn),
            ee = On(Zn),
            be = "fixed" === ("pinType" in n ? n.pinType : z(Zn, "pinType") || ee && "fixed"),
            ye = [n.onEnter, n.onLeave, n.onEnterBack, n.onLeaveBack],
            _e = Un && n.toggleActions.split(" "),
            Ie = "markers" in n ? n.markers : ke.markers,
            Ee = ee ? 0 : parseFloat(pe(Zn)["border" + Hn.p2 + ce]) || 0,
            Ne = this,
            Fe = n.onRefreshInit && (() => n.onRefreshInit(Ne)),
            Me = ((n, e, t) => {
              let {
                d: a,
                d2: r,
                a: i
              } = t;
              return (i = z(n, "getBoundingClientRect")) ? () => i()[a] : () => (e ? Wn(r) : n["client" + r]) || 0
            })(Zn, ee, Hn),
            Pe = ((n, e) => !e || ~C.indexOf(n) ? Ln(n) : () => et)(Zn, ee),
            je = 0,
            He = 0,
            Oe = 0,
            We = G(Zn, Hn);
          var qe;
          if (Ne._startClamp = Ne._endClamp = !1, Ne._dir = Hn, vn *= 45, Ne.scroller = Zn, Ne.scroll = Fn ? Fn.time.bind(Fn) : We, i = We(), Ne.vars = n, e = e || n.animation, "refreshPriority" in n && (cn = 1, -9999 === n.refreshPriority && (zn = Ne)), ne.tweenScroll = ne.tweenScroll || {
              top: st(Zn, F),
              left: st(Zn, T)
            }, Ne.tweenTo = t = ne.tweenScroll[Hn.p], Ne.scrubDuration = n => {
              O = Qn(n) && n, O ? H ? H.duration(n) : H = q.to(e, {
                ease: "expo",
                totalProgress: "+=0",
                duration: O,
                paused: !0,
                onComplete: () => bn && bn(Ne)
              }) : (H && H.progress(1).kill(), H = 0)
            }, e && (e.vars.lazy = !1, e._initted && !Ne.isReverted || !1 !== e.vars.immediateRender && !1 !== n.immediateRender && e.duration() && e.render(0, !0, !0), Ne.animation = e.pause(), e.scrollTrigger = Ne, Ne.scrubDuration(pn), P = 0, ln || (ln = e.vars.id)), Cn && (Yn(Cn) && !Cn.push || (Cn = {
              snapTo: Cn
            }), "scrollBehavior" in Y.style && q.set(ee ? [Y, Q] : Zn, {
              scrollBehavior: "auto"
            }), y.forEach((n => Jn(n) && n.target === (ee ? J.scrollingElement || Q : Zn) && (n.smooth = !1))), r = Jn(Cn.snapTo) ? Cn.snapTo : "labels" === Cn.snapTo ? (n => e => q.utils.snap(ue(n), e))(e) : "labelsDirectional" === Cn.snapTo ? (qe = e, (n, e) => ve(ue(qe))(n, e.direction)) : !1 !== Cn.directional ? (n, e) => ve(Cn.snapTo)(n, In() - He < 500 ? 0 : e.direction) : q.utils.snap(Cn.snapTo), W = Cn.duration || {
              min: .1,
              max: 2
            }, W = Yn(W) ? Z(W.min, W.max) : Z(W, W), L = q.delayedCall(Cn.delay || O / 2 || .1, (() => {
              let n = We(),
                a = In() - He < 500,
                i = t.tween;
              if (!(a || Math.abs(Ne.getVelocity()) < 10) || i || an || je === n) Ne.isActive && je !== n && L.restart(!0);
              else {
                let o = (n - s) / f,
                  d = e && !Un ? e.totalProgress() : o,
                  c = a ? 0 : (d - j) / (In() - nn) * 1e3 || 0,
                  g = q.utils.clamp(-o, 1 - o, Xn(c / 2) * c / .185),
                  m = o + (!1 === Cn.inertia ? 0 : g),
                  p = Z(0, 1, r(m, Ne)),
                  h = Math.round(s + p * f),
                  {
                    onStart: A,
                    onInterrupt: u,
                    onComplete: v
                  } = Cn;
                if (n <= l && n >= s && h !== n) {
                  if (i && !i._initted && i.data <= Xn(h - n)) return;
                  !1 === Cn.inertia && (g = p - o), t(h, {
                    duration: W(Xn(.185 * Math.max(Xn(m - d), Xn(p - d)) / c / .05 || 0)),
                    ease: Cn.ease || "power3",
                    data: Xn(h - n),
                    onInterrupt: () => L.restart(!0) && u && u(Ne),
                    onComplete: () => {
                      Ne.update(), je = We(), P = j = e && !Un ? e.totalProgress() : Ne.progress, wn && wn(Ne), v && v(Ne)
                    }
                  }, n, g * f, h - n - g * f), A && A(Ne, t.tween)
                }
              }
            })).pause()), ln && (Se[ln] = Ne), hn = Ne.trigger = M(hn || !0 !== fn && fn), en = hn && hn._gsap && hn._gsap.stRevert, en && (en = en(Ne)), fn = !0 === fn ? hn : M(fn), Vn(sn) && (sn = {
              targets: hn,
              className: sn
            }), fn && (!1 === An || An === de || (An = !(!An && fn.parentNode && fn.parentNode.style && "flex" === pe(fn.parentNode).display) && le), Ne.pin = fn, a = q.core.getCache(fn), a.spacer ? A = a.pinState : (Tn && (Tn = M(Tn), Tn && !Tn.nodeType && (Tn = Tn.current || Tn.nativeElement), a.spacerIsNative = !!Tn, Tn && (a.spacerState = nt(Tn))), a.spacer = b = Tn || J.createElement("div"), b.classList.add("pin-spacer"), ln && b.classList.add("pin-spacer-" + ln), a.pinState = A = nt(fn)), !1 !== n.force3D && q.set(fn, {
              force3D: !0
            }), Ne.spacer = b = a.spacer, N = pe(fn), I = N[An + Hn.os2], x = q.getProperty(fn), k = q.quickSetter(fn, Hn.a, me), $e(fn, b, N), v = nt(fn)), Ie) {
            p = Yn(Ie) ? he(Ie, Ce) : Ce, g = Be("scroller-start", ln, Zn, Hn, p, 0), m = Be("scroller-end", ln, Zn, Hn, p, 0, g), w = g["offset" + Hn.op.d2];
            let n = M(z(Zn, "content") || Zn);
            d = this.markerStart = Be("start", ln, n, Hn, p, w, 0, Fn), c = this.markerEnd = Be("end", ln, n, Hn, p, w, 0, Fn), Fn && ($ = q.quickSetter([d, c], Hn.a, me)), be || C.length && !0 === z(Zn, "fixedMarkers") || ((n => {
              let e = pe(n).position;
              n.style.position = "absolute" === e || "fixed" === e ? e : "relative"
            })(ee ? Y : Zn), q.set([g, m], {
              force3D: !0
            }), S = q.quickSetter(g, Hn.a, me), R = q.quickSetter(m, Hn.a, me))
          }
          if (Fn) {
            let n = Fn.vars.onUpdate,
              e = Fn.vars.onUpdateParams;
            Fn.eventCallback("onUpdate", (() => {
              Ne.update(0, 0, 1), n && n.apply(Fn, e || [])
            }))
          }
          if (Ne.previous = () => De[De.indexOf(Ne) - 1], Ne.next = () => De[De.indexOf(Ne) + 1], Ne.revert = (n, t) => {
              if (!t) return Ne.kill(!0);
              let a = !1 !== n || !Ne.enabled,
                r = tn;
              a !== Ne.isReverted && (a && (U = Math.max(We(), Ne.scroll.rec || 0), Oe = Ne.progress, K = e && e.progress()), d && [d, c, g, m].forEach((n => n.style.display = a ? "none" : "block")), a && (tn = Ne, Ne.update(a)), !fn || Dn && Ne.isActive || (a ? ((n, e, t) => {
                Ze(t);
                let a = n._gsap;
                if (a.spacerIsNative) Ze(a.spacerState);
                else if (n._gsap.swappedIn) {
                  let t = e.parentNode;
                  t && (t.insertBefore(n, e), t.removeChild(e))
                }
                n._gsap.swappedIn = !1
              })(fn, b, A) : $e(fn, b, pe(fn), D)), a || Ne.update(a), tn = r, Ne.isReverted = a)
            }, Ne.refresh = (a, r, p, w) => {
              if ((tn || !Ne.enabled) && !r) return;
              if (fn && a && Sn) return void we(lt, "scrollEnd", Ge);
              !kn && Fe && Fe(Ne), tn = Ne, t.tween && !p && (t.tween.kill(), t.tween = 0), H && H.pause(), un && e && e.revert({
                kill: !1
              }).invalidate(), Ne.isReverted || Ne.revert(!0, !0), Ne._subPinOffset = !1;
              let y, C, k, z, I, S, R, N, P, j, O, W, V, $ = Me(),
                X = Pe(),
                Z = Fn ? Fn.duration() : qn(Zn, Hn),
                nn = f <= .01,
                en = 0,
                an = w || 0,
                rn = Yn(p) ? p.end : n.end,
                on = n.endTrigger || hn,
                sn = Yn(p) ? p.start : n.start || (0 !== n.start && hn ? fn ? "0 0" : "0 100%" : 0),
                ln = Ne.pinnedContainer = n.pinnedContainer && M(n.pinnedContainer, Ne),
                dn = hn && Math.max(0, De.indexOf(Ne)) || 0,
                cn = dn;
              for (Ie && Yn(p) && (W = q.getProperty(g, Hn.p), V = q.getProperty(m, Hn.p)); cn--;) S = De[cn], S.end || S.refresh(0, 1) || (tn = Ne), R = S.pin, !R || R !== hn && R !== fn && R !== ln || S.isReverted || (j || (j = []), j.unshift(S), S.revert(!0, !0)), S !== De[cn] && (dn--, cn--);
              for (Jn(sn) && (sn = sn(Ne)), sn = Rn(sn, "start", Ne), s = tt(sn, hn, $, Hn, We(), d, g, Ne, X, Ee, be, Z, Fn, Ne._startClamp && "_startClamp") || (fn ? -.001 : 0), Jn(rn) && (rn = rn(Ne)), Vn(rn) && !rn.indexOf("+=") && (~rn.indexOf(" ") ? rn = (Vn(sn) ? sn.split(" ")[0] : "") + rn : (en = ze(rn.substr(2), $), rn = Vn(sn) ? sn : (Fn ? q.utils.mapRange(0, Fn.duration(), Fn.scrollTrigger.start, Fn.scrollTrigger.end, s) : s) + en, on = hn)), rn = Rn(rn, "end", Ne), l = Math.max(s, tt(rn || (on ? "100% 0" : Z), on, $, Hn, We() + en, c, m, Ne, X, Ee, be, Z, Fn, Ne._endClamp && "_endClamp")) || -.001, en = 0, cn = dn; cn--;) S = De[cn], R = S.pin, R && S.start - S._pinPush <= s && !Fn && S.end > 0 && (y = S.end - (Ne._startClamp ? Math.max(0, S.start) : S.start), (R === hn && S.start - S._pinPush < s || R === ln) && isNaN(sn) && (en += y * (1 - S.progress)), R === fn && (an += y));
              if (s += en, l += en, Ne._startClamp && (Ne._startClamp += en), Ne._endClamp && !kn && (Ne._endClamp = l || -.001, l = Math.min(l, qn(Zn, Hn))), f = l - s || (s -= .01) && .001, nn && (Oe = q.utils.clamp(0, 1, q.utils.normalize(s, l, U))), Ne._pinPush = an, d && en && (y = {}, y[Hn.a] = "+=" + en, ln && (y[Hn.p] = "-=" + We()), q.set([d, c], y)), fn) y = pe(fn), z = Hn === F, k = We(), _ = parseFloat(x(Hn.a)) + an, !Z && l > 1 && (O = (ee ? J.scrollingElement || Q : Zn).style, O = {
                style: O,
                value: O["overflow" + Hn.a.toUpperCase()]
              }, ee && "scroll" !== pe(Y)["overflow" + Hn.a.toUpperCase()] && (O.style["overflow" + Hn.a.toUpperCase()] = "scroll")), $e(fn, b, y), v = nt(fn), C = fe(fn, !0), N = be && G(Zn, z ? T : F)(), An && (D = [An + Hn.os2, f + an + me], D.t = b, cn = An === le ? Ae(fn, Hn) + f + an : 0, cn && D.push(Hn.d, cn + me), Ze(D), ln && De.forEach((n => {
                n.pin === ln && !1 !== n.vars.pinSpacing && (n._subPinOffset = !0)
              })), be && We(U)), be && (I = {
                top: C.top + (z ? k - s : N) + me,
                left: C.left + (z ? N : k - s) + me,
                boxSizing: "border-box",
                position: "fixed"
              }, I[te] = I["max" + ce] = Math.ceil(C.width) + me, I[ae] = I["max" + ge] = Math.ceil(C.height) + me, I[de] = I[de + oe] = I[de + re] = I[de + se] = I[de + ie] = "0", I[le] = y[le], I[le + oe] = y[le + oe], I[le + re] = y[le + re], I[le + se] = y[le + se], I[le + ie] = y[le + ie], u = ((n, e, t) => {
                let a, r = [],
                  i = n.length,
                  o = t ? 8 : 0;
                for (; o < i; o += 2) a = n[o], r.push(a, a in e ? e[a] : n[o + 1]);
                return r.t = n.t, r
              })(A, I, Dn), kn && We(0)), e ? (P = e._initted, gn(1), e.render(e.duration(), !0, !0), B = x(Hn.a) - _ + f + an, E = Math.abs(f - B) > 1, be && E && u.splice(u.length - 2, 2), e.render(0, !0, !0), P || e.invalidate(!0), e.parent || e.totalTime(e.totalTime()), gn(0)) : B = f, O && (O.value ? O.style["overflow" + Hn.a.toUpperCase()] = O.value : O.style.removeProperty("overflow-" + Hn.a));
              else if (hn && We() && !Fn)
                for (C = hn.parentNode; C && C !== Y;) C._pinOffset && (s -= C._pinOffset, l -= C._pinOffset), C = C.parentNode;
              j && j.forEach((n => n.revert(!1, !0))), Ne.start = s, Ne.end = l, i = o = kn ? U : We(), Fn || kn || (i < U && We(U), Ne.scroll.rec = 0), Ne.revert(!1, !0), He = In(), L && (je = -1, L.restart(!0)), tn = 0, e && Un && (e._initted || K) && e.progress() !== K && e.progress(K || 0, !0).render(e.time(), !0, !0), (nn || Oe !== Ne.progress || Fn) && (e && !Un && e.totalProgress(Fn && s < -.001 && !Oe ? q.utils.normalize(s, l, 0) : Oe, !0), Ne.progress = nn || (i - s) / f === Oe ? 0 : Oe), fn && An && (b._pinOffset = Math.round(Ne.progress * B)), H && H.invalidate(), isNaN(W) || (W -= q.getProperty(g, Hn.p), V -= q.getProperty(m, Hn.p), ot(g, Hn, W), ot(d, Hn, W - (w || 0)), ot(m, Hn, V), ot(c, Hn, V - (w || 0))), nn && !kn && Ne.update(), !mn || kn || h || (h = !0, mn(Ne), h = !1)
            }, Ne.getVelocity = () => (We() - o) / (In() - nn) * 1e3 || 0, Ne.endAnimation = () => {
              Kn(Ne.callbackAnimation), e && (H ? H.progress(1) : e.paused() ? Un || Kn(e, Ne.direction < 0, 1) : Kn(e, e.reversed()))
            }, Ne.labelToScroll = n => e && e.labels && (s || Ne.refresh() || s) + e.labels[n] / e.duration() * f || 0, Ne.getTrailing = n => {
              let e = De.indexOf(Ne),
                t = Ne.direction > 0 ? De.slice(0, e).reverse() : De.slice(e + 1);
              return (Vn(n) ? t.filter((e => e.vars.preventOverlaps === n)) : t).filter((n => Ne.direction > 0 ? n.end <= s : n.start >= l))
            }, Ne.update = (n, a, r) => {
              if (Fn && !r && !n) return;
              let d, c, m, p, h, A, w, x, y = !0 === kn ? U : Ne.scroll(),
                C = n ? 0 : (y - s) / f,
                z = C < 0 ? 0 : C > 1 ? 1 : C || 0,
                D = Ne.progress;
              if (a && (o = i, i = Fn ? We() : y, Cn && (j = P, P = e && !Un ? e.totalProgress() : z)), vn && !z && fn && !tn && !Bn && Sn && s < y + (y - o) / (In() - nn) * vn && (z = 1e-4), z !== D && Ne.enabled) {
                if (d = Ne.isActive = !!z && z < 1, c = !!D && D < 1, A = d !== c, h = A || !!z != !!D, Ne.direction = z > D ? 1 : -1, Ne.progress = z, h && !tn && (m = z && !D ? 0 : 1 === z ? 1 : 1 === D ? 2 : 3, Un && (p = !A && "none" !== _e[m + 1] && _e[m + 1] || _e[m], x = e && ("complete" === p || "reset" === p || p in e))), jn && (A || x) && (x || pn || !e) && (Jn(jn) ? jn(Ne) : Ne.getTrailing(jn).forEach((n => n.endAnimation()))), Un || (!H || tn || Bn ? e && e.totalProgress(z, !(!tn || !He && !n)) : (H._dp._time - H._start !== H._time && H.render(H._dp._time - H._start), H.resetTo ? H.resetTo("totalProgress", z, e._tTime / e._tDur) : (H.vars.totalProgress = z, H.invalidate().restart()))), fn)
                  if (n && An && (b.style[An + Hn.os2] = I), be) {
                    if (h) {
                      if (w = !n && z > D && l + 1 > y && y + 1 >= qn(Zn, Hn), Dn)
                        if (n || !d && !w) rt(fn, b);
                        else {
                          let n = fe(fn, !0),
                            e = y - s;
                          rt(fn, Y, n.top + (Hn === F ? e : 0) + me, n.left + (Hn === F ? 0 : e) + me)
                        } Ze(d || w ? u : v), E && z < 1 && d || k(_ + (1 !== z || w ? 0 : B))
                    }
                  } else k(Pn(_ + B * z));
                Cn && !t.tween && !tn && !Bn && L.restart(!0), sn && (A || xn && z && (z < 1 || !yn)) && X(sn.targets).forEach((n => n.classList[d || xn ? "add" : "remove"](sn.className))), rn && !Un && !n && rn(Ne), h && !tn ? (Un && (x && ("complete" === p ? e.pause().totalProgress(1) : "reset" === p ? e.restart(!0).pause() : "restart" === p ? e.restart(!0) : e[p]()), rn && rn(Ne)), !A && yn || (dn && A && $n(Ne, dn), ye[m] && $n(Ne, ye[m]), xn && (1 === z ? Ne.kill(!1, 1) : ye[m] = 0), A || (m = 1 === z ? 1 : 3, ye[m] && $n(Ne, ye[m]))), Mn && !d && Math.abs(Ne.getVelocity()) > (Qn(Mn) ? Mn : 2500) && (Kn(Ne.callbackAnimation), H ? H.progress(1) : Kn(e, "reverse" === p ? 1 : !z, 1))) : Un && rn && !tn && rn(Ne)
              }
              if (R) {
                let n = Fn ? y / Fn.duration() * (Fn._caScrollDist || 0) : y;
                S(n + (g._isFlipped ? 1 : 0)), R(n)
              }
              $ && $(-y / Fn.duration() * (Fn._caScrollDist || 0))
            }, Ne.enable = (n, e) => {
              Ne.enabled || (Ne.enabled = !0, we(Zn, "resize", Te), ee || we(Zn, "scroll", Re), Fe && we(lt, "refreshInit", Fe), !1 !== n && (Ne.progress = Oe = 0, i = o = je = We()), !1 !== e && Ne.refresh())
            }, Ne.getTween = n => n && t ? t.tween : H, Ne.setPositions = (n, e, t, a) => {
              if (Fn) {
                let t = Fn.scrollTrigger,
                  a = Fn.duration(),
                  r = t.end - t.start;
                n = t.start + r * n / a, e = t.start + r * e / a
              }
              Ne.refresh(!1, !1, {
                start: Nn(n, t && !!Ne._startClamp),
                end: Nn(e, t && !!Ne._endClamp)
              }, a), Ne.update()
            }, Ne.adjustPinSpacing = n => {
              if (D && n) {
                let e = D.indexOf(Hn.d) + 1;
                D[e] = parseFloat(D[e]) + n + me, D[1] = parseFloat(D[1]) + n + me, Ze(D)
              }
            }, Ne.disable = (n, e) => {
              if (Ne.enabled && (!1 !== n && Ne.revert(!0, !0), Ne.enabled = Ne.isActive = !1, e || H && H.pause(), U = 0, a && (a.uncache = 1), Fe && xe(lt, "refreshInit", Fe), L && (L.pause(), t.tween && t.tween.kill() && (t.tween = 0)), !ee)) {
                let n = De.length;
                for (; n--;)
                  if (De[n].scroller === Zn && De[n] !== Ne) return;
                xe(Zn, "resize", Te), ee || xe(Zn, "scroll", Re)
              }
            }, Ne.kill = (t, r) => {
              Ne.disable(t, r), H && !r && H.kill(), ln && delete Se[ln];
              let i = De.indexOf(Ne);
              i >= 0 && De.splice(i, 1), i === on && Je > 0 && on--, i = 0, De.forEach((n => n.scroller === Ne.scroller && (i = 1))), i || kn || (Ne.scroll.rec = 0), e && (e.scrollTrigger = null, t && e.revert({
                kill: !1
              }), r || e.kill()), d && [d, c, g, m].forEach((n => n.parentNode && n.parentNode.removeChild(n))), zn === Ne && (zn = 0), fn && (a && (a.uncache = 1), i = 0, De.forEach((n => n.pin === fn && i++)), i || (a.spacer = 0)), n.onKill && n.onKill(Ne)
            }, De.push(Ne), Ne.enable(!1, !1), en && en(Ne), e && e.add && !f) {
            let n = Ne.update;
            Ne.update = () => {
              Ne.update = n, s || l || Ne.refresh()
            }, q.delayedCall(.01, Ne.update), f = .01, s = l = 0
          } else Ne.refresh();
          fn && (() => {
            if (_n !== Le) {
              let n = _n = Le;
              requestAnimationFrame((() => n === Le && Ue(!0)))
            }
          })()
        }
        static register(n) {
          return U || (q = n || Hn(), jn() && window.document && lt.enable(), U = En), U
        }
        static defaults(n) {
          if (n)
            for (let e in n) ke[e] = n[e];
          return ke
        }
        static disable(n, e) {
          En = 0, De.forEach((t => t[e ? "kill" : "disable"](n))), xe(V, "wheel", Re), xe(J, "scroll", Re), clearInterval(en), xe(J, "touchcancel", Gn), xe(Y, "touchstart", Gn), be(xe, J, "pointerdown,touchstart,mousedown", Fn), be(xe, J, "pointerup,touchend,mouseup", Mn), $.kill(), Un(xe);
          for (let n = 0; n < y.length; n += 3) ye(xe, y[n], y[n + 1]), ye(xe, y[n], y[n + 2])
        }
        static enable() {
          if (V = window, J = document, Q = J.documentElement, Y = J.body, q && (X = q.utils.toArray, Z = q.utils.clamp, vn = q.core.context || Gn, gn = q.core.suppressOverwrites || Gn, bn = V.history.scrollRestoration || "auto", Ve = V.pageYOffset, q.core.globals("ScrollTrigger", lt), Y)) {
            En = 1, wn = document.createElement("div"), wn.style.height = "100vh", wn.style.position = "absolute", qe(), Tn(), L.register(q), lt.isTouch = L.isTouch, un = L.isTouch && /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent), we(V, "wheel", Re), K = [V, J, Q, Y], q.matchMedia ? (lt.matchMedia = n => {
              let e, t = q.matchMedia();
              for (e in n) t.add(e, n[e]);
              return t
            }, q.addEventListener("matchMediaInit", (() => Oe())), q.addEventListener("matchMediaRevert", (() => He())), q.addEventListener("matchMedia", (() => {
              Ue(0, 1), Pe("matchMedia")
            })), q.matchMedia("(orientation: portrait)", (() => (Ne(), Ne)))) : console.warn("Requires GSAP 3.11.0 or later"), Ne(), we(J, "scroll", Re);
            let n, e, t = Y.style,
              a = t.borderTopStyle,
              r = q.core.Animation.prototype;
            for (r.revert || Object.defineProperty(r, "revert", {
                value: function() {
                  return this.time(-.01, !0)
                }
              }), t.borderTopStyle = "solid", n = fe(Y), F.m = Math.round(n.top + F.sc()) || 0, T.m = Math.round(n.left + T.sc()) || 0, a ? t.borderTopStyle = a : t.removeProperty("border-top-style"), en = setInterval(Ee, 250), q.delayedCall(.5, (() => Bn = 0)), we(J, "touchcancel", Gn), we(Y, "touchstart", Gn), be(we, J, "pointerdown,touchstart,mousedown", Fn), be(we, J, "pointerup,touchend,mouseup", Mn), rn = q.utils.checkPrefix("transform"), Ke.push(rn), U = In(), $ = q.delayedCall(.2, Ue).pause(), dn = [J, "visibilitychange", () => {
                let n = V.innerWidth,
                  e = V.innerHeight;
                J.hidden ? (sn = n, ln = e) : sn === n && ln === e || Te()
              }, J, "DOMContentLoaded", Ue, V, "load", Ue, V, "resize", Te], Un(we), De.forEach((n => n.enable(0, 1))), e = 0; e < y.length; e += 3) ye(xe, y[e], y[e + 1]), ye(xe, y[e], y[e + 2])
          }
        }
        static config(n) {
          "limitCallbacks" in n && (yn = !!n.limitCallbacks);
          let e = n.syncInterval;
          e && clearInterval(en) || (en = e) && setInterval(Ee, e), "ignoreMobileResize" in n && (hn = 1 === lt.isTouch && n.ignoreMobileResize), "autoRefreshEvents" in n && (Un(xe) || Un(we, n.autoRefreshEvents || "none"), mn = -1 === (n.autoRefreshEvents + "").indexOf("resize"))
        }
        static scrollerProxy(n, e) {
          let t = M(n),
            a = y.indexOf(t),
            r = On(t);
          ~a && y.splice(a, r ? 6 : 2), e && (r ? C.unshift(V, e, Y, e, Q, e) : C.unshift(t, e))
        }
        static clearMatchMedia(n) {
          De.forEach((e => e._ctx && e._ctx.query === n && e._ctx.kill(!0, !0)))
        }
        static isInViewport(n, e, t) {
          let a = (Vn(n) ? M(n) : n).getBoundingClientRect(),
            r = a[t ? te : ae] * e || 0;
          return t ? a.right - r > 0 && a.left + r < V.innerWidth : a.bottom - r > 0 && a.top + r < V.innerHeight
        }
        static positionInViewport(n, e, t) {
          Vn(n) && (n = M(n));
          let a = n.getBoundingClientRect(),
            r = a[t ? te : ae],
            i = null == e ? r / 2 : e in _e ? _e[e] * r : ~e.indexOf("%") ? parseFloat(e) * r / 100 : parseFloat(e) || 0;
          return t ? (a.left + i) / V.innerWidth : (a.top + i) / V.innerHeight
        }
        static killAll(n) {
          if (De.slice(0).forEach((n => "ScrollSmoother" !== n.vars.id && n.kill())), !0 !== n) {
            let n = Fe.killAll || [];
            Fe = {}, n.forEach((n => n()))
          }
        }
      }
      lt.version = "3.12.2", lt.saveStyles = n => n ? X(n).forEach((n => {
        if (n && n.style) {
          let e = je.indexOf(n);
          e >= 0 && je.splice(e, 5), je.push(n, n.style.cssText, n.getBBox && n.getAttribute("transform"), q.core.getCache(n), vn())
        }
      })) : je, lt.revert = (n, e) => Oe(!n, e), lt.create = (n, e) => new lt(n, e), lt.refresh = n => n ? Te() : (U || lt.register()) && Ue(!0), lt.update = n => ++y.cache && Qe(!0 === n ? 2 : 0), lt.clearScrollMemory = We, lt.maxScroll = (n, e) => qn(n, e ? T : F), lt.getScrollFunc = (n, e) => G(M(n), e ? T : F), lt.getById = n => Se[n], lt.getAll = () => De.filter((n => "ScrollSmoother" !== n.vars.id)), lt.isScrolling = () => !!Sn, lt.snapDirectional = ve, lt.addEventListener = (n, e) => {
        let t = Fe[n] || (Fe[n] = []);
        ~t.indexOf(e) || t.push(e)
      }, lt.removeEventListener = (n, e) => {
        let t = Fe[n],
          a = t && t.indexOf(e);
        a >= 0 && t.splice(a, 1)
      }, lt.batch = (n, e) => {
        let t, a = [],
          r = {},
          i = e.interval || .016,
          o = e.batchMax || 1e9,
          s = (n, e) => {
            let t = [],
              a = [],
              r = q.delayedCall(i, (() => {
                e(t, a), t = [], a = []
              })).pause();
            return n => {
              t.length || r.restart(!0), t.push(n.trigger), a.push(n), o <= t.length && r.progress(1)
            }
          };
        for (t in e) r[t] = "on" === t.substr(0, 2) && Jn(e[t]) && "onRefreshInit" !== t ? s(0, e[t]) : e[t];
        return Jn(o) && (o = o(), we(lt, "refresh", (() => o = e.batchMax()))), X(n).forEach((n => {
          let e = {};
          for (t in r) e[t] = r[t];
          e.trigger = n, a.push(lt.create(e))
        })), a
      };
      let dt, ct = (n, e, t, a) => (e > a ? n(a) : e < 0 && n(0), t > a ? (a - e) / (t - e) : t < 0 ? e / (e - t) : 1),
        gt = (n, e) => {
          !0 === e ? n.style.removeProperty("touch-action") : n.style.touchAction = !0 === e ? "auto" : e ? "pan-" + e + (L.isTouch ? " pinch-zoom" : "") : "none", n === Q && gt(Y, e)
        },
        mt = {
          auto: 1,
          scroll: 1
        },
        pt = n => {
          let e, {
              event: t,
              target: a,
              axis: r
            } = n,
            i = (t.changedTouches ? t.changedTouches[0] : t).target,
            o = i._gsap || q.core.getCache(i),
            s = In();
          if (!o._isScrollT || s - o._isScrollT > 2e3) {
            for (; i && i !== Y && (i.scrollHeight <= i.clientHeight && i.scrollWidth <= i.clientWidth || !mt[(e = pe(i)).overflowY] && !mt[e.overflowX]);) i = i.parentNode;
            o._isScroll = i && i !== a && !On(i) && (mt[(e = pe(i)).overflowY] || mt[e.overflowX]), o._isScrollT = s
          }(o._isScroll || "x" === r) && (t.stopPropagation(), t._gsapAllow = !0)
        },
        ht = (n, e, t, a) => L.create({
          target: n,
          capture: !0,
          debounce: !1,
          lockAxis: !0,
          type: e,
          onWheel: a = a && pt,
          onPress: a,
          onDrag: a,
          onScroll: a,
          onEnable: () => t && we(J, L.eventTypes[0], At, !1, !0),
          onDisable: () => xe(J, L.eventTypes[0], At, !0)
        }),
        ft = /(input|label|select|textarea)/i,
        At = n => {
          let e = ft.test(n.target.tagName);
          (e || dt) && (n._gsapAllow = !0, dt = e)
        };
      lt.sort = n => De.sort(n || ((n, e) => -1e6 * (n.vars.refreshPriority || 0) + n.start - (e.start + -1e6 * (e.vars.refreshPriority || 0)))), lt.observe = n => new L(n), lt.normalizeScroll = n => {
        if (void 0 === n) return pn;
        if (!0 === n && pn) return pn.enable();
        if (!1 === n) return pn && pn.kill();
        let e = n instanceof L ? n : (n => {
          Yn(n) || (n = {}), n.preventDefault = n.isNormalizer = n.allowClicks = !0, n.type || (n.type = "wheel,touch"), n.debounce = !!n.debounce, n.id = n.id || "normalizer";
          let e, t, a, r, i, o, s, l, {
              normalizeScrollX: d,
              momentum: c,
              allowNestedScroll: g,
              onRelease: m
            } = n,
            p = M(n.target) || Q,
            h = q.core.globals().ScrollSmoother,
            f = h && h.get(),
            A = un && (n.content && M(n.content) || f && !1 !== n.content && !f.smooth() && f.content()),
            u = G(p, F),
            v = G(p, T),
            b = 1,
            w = (L.isTouch && V.visualViewport ? V.visualViewport.scale * V.visualViewport.width : V.outerWidth) / V.innerWidth,
            x = 0,
            C = Jn(c) ? () => c(e) : () => c || 2.8,
            k = ht(p, n.type, !0, g),
            _ = () => r = !1,
            z = Gn,
            B = Gn,
            I = () => {
              t = qn(p, F), B = Z(un ? 1 : 0, t), d && (z = Z(0, qn(p, T))), a = Le
            },
            D = () => {
              A._gsap.y = Pn(parseFloat(A._gsap.y) + u.offset) + "px", A.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + parseFloat(A._gsap.y) + ", 0, 1)", u.offset = u.cacheID = 0
            },
            S = () => {
              I(), i.isActive() && i.vars.scrollY > t && (u() > t ? i.progress(1) && u(t) : i.resetTo("scrollY", t))
            };
          return A && q.set(A, {
            y: "+=0"
          }), n.ignoreCheck = n => un && "touchmove" === n.type && (() => {
            if (r) {
              requestAnimationFrame(_);
              let n = Pn(e.deltaY / 2),
                t = B(u.v - n);
              if (A && t !== u.v + u.offset) {
                u.offset = t - u.v;
                let n = Pn((parseFloat(A && A._gsap.y) || 0) - u.offset);
                A.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", A._gsap.y = n + "px", u.cacheID = y.cache, Qe()
              }
              return !0
            }
            u.offset && D(), r = !0
          })() || b > 1.05 && "touchstart" !== n.type || e.isGesturing || n.touches && n.touches.length > 1, n.onPress = () => {
            r = !1;
            let n = b;
            b = Pn((V.visualViewport && V.visualViewport.scale || 1) / w), i.pause(), n !== b && gt(p, b > 1.01 || !d && "x"), o = v(), s = u(), I(), a = Le
          }, n.onRelease = n.onGestureStart = (n, e) => {
            if (u.offset && D(), e) {
              y.cache++;
              let e, a, r = C();
              d && (e = v(), a = e + .05 * r * -n.velocityX / .227, r *= ct(v, e, a, qn(p, T)), i.vars.scrollX = z(a)), e = u(), a = e + .05 * r * -n.velocityY / .227, r *= ct(u, e, a, qn(p, F)), i.vars.scrollY = B(a), i.invalidate().duration(r).play(.01), (un && i.vars.scrollY >= t || e >= t - 1) && q.to({}, {
                onUpdate: S,
                duration: r
              })
            } else l.restart(!0);
            m && m(n)
          }, n.onWheel = () => {
            i._ts && i.pause(), In() - x > 1e3 && (a = 0, x = In())
          }, n.onChange = (n, e, t, r, i) => {
            if (Le !== a && I(), e && d && v(z(r[2] === e ? o + (n.startX - n.x) : v() + e - r[1])), t) {
              u.offset && D();
              let e = i[2] === t,
                a = e ? s + n.startY - n.y : u() + t - i[1],
                r = B(a);
              e && a !== r && (s += r - a), u(r)
            }(t || e) && Qe()
          }, n.onEnable = () => {
            gt(p, !d && "x"), lt.addEventListener("refresh", S), we(V, "resize", S), u.smooth && (u.target.style.scrollBehavior = "auto", u.smooth = v.smooth = !1), k.enable()
          }, n.onDisable = () => {
            gt(p, !0), xe(V, "resize", S), lt.removeEventListener("refresh", S), k.kill()
          }, n.lockAxis = !1 !== n.lockAxis, e = new L(n), e.iOS = un, un && !u() && u(1), un && q.ticker.add(Gn), l = e._dc, i = q.to(e, {
            ease: "power4",
            paused: !0,
            scrollX: d ? "+=0.1" : "+=0",
            scrollY: "+=0.1",
            modifiers: {
              scrollY: it(u, u(), (() => i.pause()))
            },
            onUpdate: Qe,
            onComplete: l.vars.onComplete
          }), e
        })(n);
        return pn && pn.target === e.target && pn.kill(), On(e.target) && (pn = e), e
      }, lt.core = {
        _getVelocityProp: P,
        _inputObserver: ht,
        _scrollers: y,
        _proxies: C,
        bridge: {
          ss: () => {
            Sn || Pe("scrollStart"), Sn = In()
          },
          ref: () => tn
        }
      }, Hn() && q.registerPlugin(lt);
      let ut, vt, bt, wt, xt, yt, Ct, kt, _t, zt, Bt, It, Dt, St, Et, Rt, Nt = () => "undefined" != typeof window,
        Tt = () => ut || Nt() && (ut = window.gsap) && ut.registerPlugin && ut,
        Ft = n => zt.maxScroll(n || bt);
      class Mt {
        constructor(n) {
          vt || Mt.register(ut) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), n = this.vars = n || {}, Bt && Bt.kill(), Bt = this, Et(this);
          let e, t, a, r, i, o, s, l, d, c, g, m, p, h, f, {
              smoothTouch: A,
              onUpdate: u,
              onStop: v,
              smooth: b,
              onFocusIn: w,
              normalizeScroll: x,
              wholePixels: y
            } = n,
            C = this,
            k = n.effectsPrefix || "",
            _ = zt.getScrollFunc(bt),
            z = 1 === zt.isTouch ? !0 === A ? .8 : parseFloat(A) || 0 : 0 === b || !1 === b ? 0 : parseFloat(b) || .8,
            B = z && +n.speed || 1,
            I = 0,
            D = 0,
            S = 1,
            E = Dt(0),
            R = () => E.update(-I),
            N = {
              y: 0
            },
            T = () => e.style.overflow = "visible",
            F = n => {
              n.update();
              let e = n.getTween();
              e && (e.pause(), e._time = e._dur, e._tTime = e._tDur), h = !1, n.animation.progress(n.progress, !0)
            },
            M = (n, t) => {
              (n !== I && !c || t) && (y && (n = Math.round(n)), z && (e.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + n + ", 0, 1)", e._gsap.y = n + "px"), D = n - I, I = n, zt.isUpdating || Mt.isRefreshing || zt.update())
            },
            G = function(n) {
              return arguments.length ? (n < 0 && (n = 0), N.y = -n, h = !0, c ? I = -n : M(-n), zt.isRefreshing ? r.update() : _(n / B), this) : -I
            },
            P = "undefined" != typeof ResizeObserver && !1 !== n.autoResize && new ResizeObserver((() => {
              if (!zt.isRefreshing) {
                let n = Ft(t) * B;
                n < -I && G(n), Rt.restart(!0)
              }
            })),
            j = n => {
              t.scrollTop = 0, n.target.contains && n.target.contains(t) || w && !1 === w(this, n) || (zt.isInViewport(n.target) || n.target === f || this.scrollTo(n.target, !1, "center center"), f = n.target)
            },
            H = (n, e) => {
              if (n < e.start) return n;
              let t = isNaN(e.ratio) ? 1 : e.ratio,
                a = e.end - e.start,
                r = n - e.start,
                i = e.offset || 0,
                o = e.pins || [],
                s = o.offset || 0,
                l = e._startClamp && e.start <= 0 || e.pins && e.pins.offset ? 0 : e._endClamp && e.end === Ft() ? 1 : .5;
              return o.forEach((e => {
                a -= e.distance, e.nativeStart <= n && (r -= e.distance)
              })), s && (r *= (a - s / t) / a), n + (r - i * l) / t - r
            },
            O = (n, e, t) => {
              t || (n.pins.length = n.pins.offset = 0);
              let a, r, i, o, s, l, d, c, g = n.pins,
                m = n.markers;
              for (d = 0; d < e.length; d++)
                if (c = e[d], n.trigger && c.trigger && n !== c && (c.trigger === n.trigger || c.pinnedContainer === n.trigger || n.trigger.contains(c.trigger)) && (s = c._startNative || c._startClamp || c.start, l = c._endNative || c._endClamp || c.end, i = H(s, n), o = c.pin && l > 0 ? i + (l - s) : H(l, n), c.setPositions(i, o, !0, (c._startClamp ? Math.max(0, i) : i) - s), c.markerStart && m.push(ut.quickSetter([c.markerStart, c.markerEnd], "y", "px")), c.pin && c.end > 0 && !t)) {
                  if (a = c.end - c.start, r = n._startClamp && c.start < 0, r) {
                    if (n.start > 0) return n.setPositions(0, n.end + (n._startNative - n.start), !0), void O(n, e);
                    a += c.start, g.offset = -c.start
                  }
                  g.push({
                    start: c.start,
                    nativeStart: s,
                    end: c.end,
                    distance: a,
                    trig: c
                  }), n.setPositions(n.start, n.end + (r ? -c.start : a), !0)
                }
            },
            W = (n, e) => {
              i.forEach((t => O(t, n, e)))
            },
            L = () => {
              T(), requestAnimationFrame(T), i && (zt.getAll().forEach((n => {
                n._startNative = n.start, n._endNative = n.end
              })), i.forEach((n => {
                let e = n._startClamp || n.start,
                  t = n.autoSpeed ? Math.min(Ft(), n.end) : e + Math.abs((n.end - e) / n.ratio),
                  a = t - n.end;
                if (e -= a / 2, t -= a / 2, e > t) {
                  let n = e;
                  e = t, t = n
                }
                n._startClamp && e < 0 ? (t = n.ratio < 0 ? Ft() : n.end / n.ratio, a = t - n.end, e = 0) : (n.ratio < 0 || n._endClamp && t >= Ft()) && (t = Ft(), e = n.ratio < 0 || n.ratio > 1 ? 0 : t - (t - n.start) / n.ratio, a = (t - e) * n.ratio - (n.end - n.start)), n.offset = a || 1e-4, n.pins.length = n.pins.offset = 0, n.setPositions(e, t, !0)
              })), W(zt.sort())), E.reset()
            },
            q = () => zt.addEventListener("refresh", L),
            U = () => i && i.forEach((n => n.vars.onRefresh(n))),
            V = () => (i && i.forEach((n => n.vars.onRefreshInit(n))), U),
            J = (n, e, t, a) => () => {
              let r = "function" == typeof e ? e(t, a) : e;
              r || 0 === r || (r = a.getAttribute("data-" + k + n) || ("speed" === n ? 1 : 0)), a.setAttribute("data-" + k + n, r);
              let i = "clamp(" === (r + "").substr(0, 6);
              return {
                clamp: i,
                value: i ? r.substr(6, r.length - 7) : r
              }
            },
            Q = (n, e, a, r, o) => {
              o = ("function" == typeof o ? o(r, n) : o) || 0;
              let s, l, d, c, g, m, p = J("speed", e, r, n),
                h = J("lag", a, r, n),
                f = ut.getProperty(n, "y"),
                A = n._gsap,
                u = [],
                v = () => {
                  e = p(), a = parseFloat(h().value), s = parseFloat(e.value) || 1, d = "auto" === e.value, g = d || l && l._startClamp && l.start <= 0 || u.offset ? 0 : l && l._endClamp && l.end === Ft() ? 1 : .5, c && c.kill(), c = a && ut.to(n, {
                    ease: It,
                    overwrite: !1,
                    y: "+=0",
                    duration: a
                  }), l && (l.ratio = s, l.autoSpeed = d)
                },
                b = () => {
                  A.y = f + "px", A.renderTransform(1), v()
                },
                w = [],
                x = 0,
                y = e => {
                  if (d) {
                    b();
                    let t = ((n, e) => {
                      let t, a, r = n.parentNode || xt,
                        i = n.getBoundingClientRect(),
                        o = r.getBoundingClientRect(),
                        s = o.top - i.top,
                        l = o.bottom - i.bottom,
                        d = (Math.abs(s) > Math.abs(l) ? s : l) / (1 - e),
                        c = -d * e;
                      return d > 0 && (t = o.height / (bt.innerHeight + o.height), a = .5 === t ? 2 * o.height : 2 * Math.min(o.height, Math.abs(-d * t / (2 * t - 1))) * (e || 1), c += e ? -a * e : -a / 2, d += a), {
                        change: d,
                        offset: c
                      }
                    })(n, _t(0, 1, -e.start / (e.end - e.start)));
                    x = t.change, m = t.offset
                  } else m = u.offset || 0, x = (e.end - e.start - m) * (1 - s);
                  u.forEach((n => x -= n.distance * (1 - s))), e.offset = x || .001, e.vars.onUpdate(e), c && c.progress(1)
                };
              return v(), (1 !== s || d || c) && (l = zt.create({
                trigger: d ? n.parentNode : n,
                start: () => e.clamp ? "clamp(top bottom+=" + o + ")" : "top bottom+=" + o,
                end: () => e.value < 0 ? "max" : e.clamp ? "clamp(bottom top-=" + o + ")" : "bottom top-=" + o,
                scroller: t,
                scrub: !0,
                refreshPriority: -999,
                onRefreshInit: b,
                onRefresh: y,
                onKill: n => {
                  let e = i.indexOf(n);
                  e >= 0 && i.splice(e, 1), b()
                },
                onUpdate: n => {
                  let e, t, a, r = f + x * (n.progress - g),
                    i = u.length,
                    o = 0;
                  if (n.offset) {
                    if (i) {
                      for (t = -I, a = n.end; i--;) {
                        if (e = u[i], e.trig.isActive || t >= e.start && t <= e.end) return void(c && (e.trig.progress += e.trig.direction < 0 ? .001 : -.001, e.trig.update(0, 0, 1), c.resetTo("y", parseFloat(A.y), -D, !0), S && c.progress(1)));
                        t > e.end && (o += e.distance), a -= e.distance
                      }
                      r = f + o + x * ((ut.utils.clamp(n.start, n.end, t) - n.start - o) / (a - n.start) - g)
                    }
                    w.length && !d && w.forEach((n => n(r - o))), s = r + m, r = Math.round(1e5 * s) / 1e5 || 0, c ? (c.resetTo("y", r, -D, !0), S && c.progress(1)) : (A.y = r + "px", A.renderTransform(1))
                  }
                  var s
                }
              }), y(l), ut.core.getCache(l.trigger).stRevert = V, l.startY = f, l.pins = u, l.markers = w, l.ratio = s, l.autoSpeed = d, n.style.willChange = "transform"), l
            };

          function Y() {
            return a = e.clientHeight, e.style.overflow = "visible", yt.style.height = bt.innerHeight + (a - bt.innerHeight) / B + "px", a - bt.innerHeight
          }
          q(), zt.addEventListener("killAll", q), ut.delayedCall(.5, (() => S = 0)), this.scrollTop = G, this.scrollTo = (n, e, t) => {
            let a = ut.utils.clamp(0, Ft(), isNaN(n) ? this.offset(n, t) : +n);
            e ? c ? ut.to(this, {
              duration: z,
              scrollTop: a,
              overwrite: "auto",
              ease: It
            }) : _(a) : G(a)
          }, this.offset = (n, e) => {
            let t, a = (n = kt(n)[0]).style.cssText,
              r = zt.create({
                trigger: n,
                start: e || "top top"
              });
            return i && (S ? zt.refresh() : W([r], !0)), t = r.start / B, r.kill(!1), n.style.cssText = a, ut.core.getCache(n).uncache = 1, t
          }, this.content = function(n) {
            if (arguments.length) {
              let t = kt(n || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || yt.children[0];
              return t !== e && (e = t, d = e.getAttribute("style") || "", P && P.observe(e), ut.set(e, {
                overflow: "visible",
                width: "100%",
                boxSizing: "border-box",
                y: "+=0"
              }), z || ut.set(e, {
                clearProps: "transform"
              })), this
            }
            return e
          }, this.wrapper = function(n) {
            return arguments.length ? (t = kt(n || "#smooth-wrapper")[0] || (n => {
              let e = wt.querySelector(".ScrollSmoother-wrapper");
              return e || (e = wt.createElement("div"), e.classList.add("ScrollSmoother-wrapper"), n.parentNode.insertBefore(e, n), e.appendChild(n)), e
            })(e), l = t.getAttribute("style") || "", Y(), ut.set(t, z ? {
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
            }), this) : t
          }, this.effects = (n, e) => {
            if (i || (i = []), !n) return i.slice(0);
            (n = kt(n)).forEach((n => {
              let e = i.length;
              for (; e--;) i[e].trigger === n && i[e].kill()
            })), e = e || {};
            let t, a, {
                speed: r,
                lag: o,
                effectsPadding: s
              } = e,
              l = [];
            for (t = 0; t < n.length; t++) a = Q(n[t], r, o, t, s), a && l.push(a);
            return i.push(...l), l
          }, this.sections = (n, e) => {
            if (o || (o = []), !n) return o.slice(0);
            let t = kt(n).map((n => zt.create({
              trigger: n,
              start: "top 120%",
              end: "bottom -20%",
              onToggle: e => {
                n.style.opacity = e.isActive ? "1" : "0", n.style.pointerEvents = e.isActive ? "all" : "none"
              }
            })));
            return e && e.add ? o.push(...t) : o = t.slice(0), t
          }, this.content(n.content), this.wrapper(n.wrapper), this.render = n => M(n || 0 === n ? n : I), this.getVelocity = () => E.getVelocity(-I), zt.scrollerProxy(t, {
            scrollTop: G,
            scrollHeight: () => Y() && yt.scrollHeight,
            fixedMarkers: !1 !== n.fixedMarkers && !!z,
            content: e,
            getBoundingClientRect: () => ({
              top: 0,
              left: 0,
              width: bt.innerWidth,
              height: bt.innerHeight
            })
          }), zt.defaults({
            scroller: t
          });
          let K = zt.getAll().filter((n => n.scroller === bt || n.scroller === t));
          K.forEach((n => n.revert(!0, !0))), r = zt.create({
            animation: ut.fromTo(N, {
              y: 0
            }, {
              y: () => -Y(),
              immediateRender: !1,
              ease: "none",
              data: "ScrollSmoother",
              duration: 100,
              onUpdate: function() {
                if (this._dur) {
                  let n = h;
                  n && (F(r), N.y = I), M(N.y, n), R(), u && !c && u(C)
                }
              }
            }),
            onRefreshInit: n => {
              if (Mt.isRefreshing) return;
              if (Mt.isRefreshing = !0, i) {
                let n = zt.getAll().filter((n => !!n.pin));
                i.forEach((e => {
                  e.vars.pinnedContainer || n.forEach((n => {
                    if (n.pin.contains(e.trigger)) {
                      let t = e.vars;
                      t.pinnedContainer = n.pin, e.vars = null, e.init(t, e.animation)
                    }
                  }))
                }))
              }
              let e = n.getTween();
              p = e && e._end > e._dp._time, m = I, N.y = 0, z && (1 === zt.isTouch && (t.style.position = "absolute"), t.scrollTop = 0, 1 === zt.isTouch && (t.style.position = "fixed"))
            },
            onRefresh: n => {
              n.animation.invalidate(), n.setPositions(n.start, Y() / B), p || F(n), N.y = -_() * B, M(N.y), S || n.animation.progress(ut.utils.clamp(0, 1, m / B / -n.end)), p && (n.progress -= .001, n.update()), Mt.isRefreshing = !1
            },
            id: "ScrollSmoother",
            scroller: bt,
            invalidateOnRefresh: !0,
            start: 0,
            refreshPriority: -9999,
            end: () => Y() / B,
            onScrubComplete: () => {
              E.reset(), v && v(this)
            },
            scrub: z || !0
          }), this.smooth = function(e) {
            return arguments.length && (z = e || 0, B = z && +n.speed || 1, r.scrubDuration(e)), r.getTween() ? r.getTween().duration() : 0
          }, r.getTween() && (r.getTween().vars.ease = n.ease || It), this.scrollTrigger = r, n.effects && this.effects(!0 === n.effects ? "[data-" + k + "speed], [data-" + k + "lag]" : n.effects, {
            effectsPadding: n.effectsPadding
          }), n.sections && this.sections(!0 === n.sections ? "[data-section]" : n.sections), K.forEach((n => {
            n.vars.scroller = t, n.revert(!1, !0), n.init(n.vars, n.animation)
          })), this.paused = function(n, e) {
            return arguments.length ? (!!c !== n && (n ? (r.getTween() && r.getTween().pause(), _(-I / B), E.reset(), g = zt.normalizeScroll(), g && g.disable(), c = zt.observe({
              preventDefault: !0,
              type: "wheel,touch,scroll",
              debounce: !1,
              allowClicks: !0,
              onChangeY: () => G(-I)
            }), c.nested = St(xt, "wheel,touch,scroll", !0, !1 !== e)) : (c.nested.kill(), c.kill(), c = 0, g && g.enable(), r.progress = (-I / B - r.start) / (r.end - r.start), F(r))), this) : !!c
          }, this.kill = this.revert = () => {
            this.paused(!1), F(r), r.kill();
            let n = (i || []).concat(o || []),
              a = n.length;
            for (; a--;) n[a].kill();
            zt.scrollerProxy(t), zt.removeEventListener("killAll", q), zt.removeEventListener("refresh", L), t.style.cssText = l, e.style.cssText = d;
            let c = zt.defaults({});
            c && c.scroller === t && zt.defaults({
              scroller: bt
            }), this.normalizer && zt.normalizeScroll(!1), clearInterval(s), Bt = null, P && P.disconnect(), yt.style.removeProperty("height"), bt.removeEventListener("focusin", j)
          }, this.refresh = (n, e) => r.refresh(n, e), x && (this.normalizer = zt.normalizeScroll(!0 === x ? {
            debounce: !0,
            content: !z && e
          } : x)), zt.config(n), "overscrollBehavior" in bt.getComputedStyle(yt) && ut.set([yt, xt], {
            overscrollBehavior: "none"
          }), "scrollBehavior" in bt.getComputedStyle(yt) && ut.set([yt, xt], {
            scrollBehavior: "auto"
          }), bt.addEventListener("focusin", j), s = setInterval(R, 250), "loading" === wt.readyState || requestAnimationFrame((() => zt.refresh()))
        }
        get progress() {
          return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
        }
        static register(n) {
          return vt || (ut = n || Tt(), Nt() && window.document && (bt = window, wt = document, xt = wt.documentElement, yt = wt.body), ut && (kt = ut.utils.toArray, _t = ut.utils.clamp, It = ut.parseEase("expo"), Et = ut.core.context || function() {}, zt = ut.core.globals().ScrollTrigger, ut.core.globals("ScrollSmoother", Mt), yt && zt && (Rt = ut.delayedCall(.2, (() => zt.isRefreshing || Bt && Bt.refresh())).pause(), Ct = [bt, wt, xt, yt], Dt = zt.core._getVelocityProp, St = zt.core._inputObserver, Mt.refresh = zt.refresh, vt = 1))), vt
        }
      }
      Mt.version = "3.12.2", Mt.create = n => Bt && n && Bt.content() === kt(n.content)[0] ? Bt : new Mt(n), Mt.get = () => Bt, Tt() && ut.registerPlugin(Mt);
      let Gt, Pt, jt, Ht, Ot, Wt, Lt, qt, Ut = () => "undefined" != typeof window,
        Vt = () => Gt || Ut() && (Gt = window.gsap) && Gt.registerPlugin && Gt,
        Jt = n => "string" == typeof n,
        Qt = n => "function" == typeof n,
        Yt = (n, e) => {
          let t = "x" === e ? "Width" : "Height",
            a = "scroll" + t,
            r = "client" + t;
          return n === jt || n === Ht || n === Ot ? Math.max(Ht[a], Ot[a]) - (jt["inner" + t] || Ht[r] || Ot[r]) : n[a] - n["offset" + t]
        },
        Kt = (n, e) => {
          let t = "scroll" + ("x" === e ? "Left" : "Top");
          return n === jt && (null != n.pageXOffset ? t = "page" + e.toUpperCase() + "Offset" : n = null != Ht[t] ? Ht : Ot), () => n[t]
        },
        $t = (n, e) => {
          if (!(n = Wt(n)[0]) || !n.getBoundingClientRect) return console.warn("scrollTo target doesn't exist. Using 0") || {
            x: 0,
            y: 0
          };
          let t = n.getBoundingClientRect(),
            a = !e || e === jt || e === Ot,
            r = a ? {
              top: Ht.clientTop - (jt.pageYOffset || Ht.scrollTop || Ot.scrollTop || 0),
              left: Ht.clientLeft - (jt.pageXOffset || Ht.scrollLeft || Ot.scrollLeft || 0)
            } : e.getBoundingClientRect(),
            i = {
              x: t.left - r.left,
              y: t.top - r.top
            };
          return !a && e && (i.x += Kt(e, "x")(), i.y += Kt(e, "y")()), i
        },
        Xt = (n, e, t, a, r) => isNaN(n) || "object" == typeof n ? Jt(n) && "=" === n.charAt(1) ? parseFloat(n.substr(2)) * ("-" === n.charAt(0) ? -1 : 1) + a - r : "max" === n ? Yt(e, t) - r : Math.min(Yt(e, t), $t(n, e)[t] - r) : parseFloat(n) - r,
        Zt = () => {
          Gt = Vt(), Ut() && Gt && "undefined" != typeof document && document.body && (jt = window, Ot = document.body, Ht = document.documentElement, Wt = Gt.utils.toArray, Gt.config({
            autoKillThreshold: 7
          }), Lt = Gt.config(), Pt = 1)
        };
      const na = {
        version: "3.12.2",
        name: "scrollTo",
        rawVars: 1,
        register(n) {
          Gt = n, Zt()
        },
        init(n, e, t, a, r) {
          Pt || Zt();
          let i = this,
            o = Gt.getProperty(n, "scrollSnapType");
          i.isWin = n === jt, i.target = n, i.tween = t, e = ((n, e, t, a) => {
            if (Qt(n) && (n = n(e, t, a)), "object" != typeof n) return Jt(n) && "max" !== n && "=" !== n.charAt(1) ? {
              x: n,
              y: n
            } : {
              y: n
            };
            if (n.nodeType) return {
              y: n,
              x: n
            }; {
              let r, i = {};
              for (r in n) i[r] = "onAutoKill" !== r && Qt(n[r]) ? n[r](e, t, a) : n[r];
              return i
            }
          })(e, a, n, r), i.vars = e, i.autoKill = !!e.autoKill, i.getX = Kt(n, "x"), i.getY = Kt(n, "y"), i.x = i.xPrev = i.getX(), i.y = i.yPrev = i.getY(), qt || (qt = Gt.core.globals().ScrollTrigger), "smooth" === Gt.getProperty(n, "scrollBehavior") && Gt.set(n, {
            scrollBehavior: "auto"
          }), o && "none" !== o && (i.snap = 1, i.snapInline = n.style.scrollSnapType, n.style.scrollSnapType = "none"), null != e.x ? (i.add(i, "x", i.x, Xt(e.x, n, "x", i.x, e.offsetX || 0), a, r), i._props.push("scrollTo_x")) : i.skipX = 1, null != e.y ? (i.add(i, "y", i.y, Xt(e.y, n, "y", i.y, e.offsetY || 0), a, r), i._props.push("scrollTo_y")) : i.skipY = 1
        },
        render(n, e) {
          let t, a, r, i, o, s = e._pt,
            {
              target: l,
              tween: d,
              autoKill: c,
              xPrev: g,
              yPrev: m,
              isWin: p,
              snap: h,
              snapInline: f
            } = e;
          for (; s;) s.r(n, s.d), s = s._next;
          t = p || !e.skipX ? e.getX() : g, a = p || !e.skipY ? e.getY() : m, r = a - m, i = t - g, o = Lt.autoKillThreshold, e.x < 0 && (e.x = 0), e.y < 0 && (e.y = 0), c && (!e.skipX && (i > o || i < -o) && t < Yt(l, "x") && (e.skipX = 1), !e.skipY && (r > o || r < -o) && a < Yt(l, "y") && (e.skipY = 1), e.skipX && e.skipY && (d.kill(), e.vars.onAutoKill && e.vars.onAutoKill.apply(d, e.vars.onAutoKillParams || []))), p ? jt.scrollTo(e.skipX ? t : e.x, e.skipY ? a : e.y) : (e.skipY || (l.scrollTop = e.y), e.skipX || (l.scrollLeft = e.x)), !h || 1 !== n && 0 !== n || (a = l.scrollTop, t = l.scrollLeft, f ? l.style.scrollSnapType = f : l.style.removeProperty("scroll-snap-type"), l.scrollTop = a + 1, l.scrollLeft = t + 1, l.scrollTop = a, l.scrollLeft = t), e.xPrev = e.x, e.yPrev = e.y, qt && qt.update()
        },
        kill(n) {
          let e = "scrollTo" === n;
          (e || "scrollTo_x" === n) && (this.skipX = 1), (e || "scrollTo_y" === n) && (this.skipY = 1)
        }
      };
      na.max = Yt, na.getOffset = $t, na.buildGetter = Kt, Vt() && Gt.registerPlugin(na);
      var ea = t(2918);
      const ta = {
          banner_collapsed: [/.*/],
          full_exclusion: [/^\/contact/, /agegate/, /privacy/, /legal/, /ccpa/, /corpinfo/, /cookies/, /^\/gta-online\/license-plates/, /.*\?info=.*/]
        },
        aa = {
          banner_collapsed: [/.*/],
          full_exclusion: [/^\/activate/, /^\/settings/, /agegate/, /^\/Error.htm/, /^\/(photo|video|job)\/(rdr2|gtav)\/.*/, /^\/games\/maxpayne3/]
        },
        ra = "grtTKOExpanded",
        ia = r.Expo.easeInOut,
        oa = {
          default: r.Power2.easeInOut,
          takeover: r.Power4.easeInOut,
          parallax: r.Power3.easeInOut,
          intro: ia,
          playVideo: {
            fadeOut: r.Power2.easeIn,
            fadeIn: r.Power2.easeIn,
            cta: r.Power1.easeOut
          }
        },
        sa = 2,
        la = 1,
        da = .3;
      var ca = t(5966),
        ga = t(5124);
      const ma = () => {
        const {
          data: n,
          loading: e
        } = (0, ca.useQuery)(ga.abc123);
        return {
          data: n,
          loading: e,
          translation: e => n?.abc123?.find((n => n.key === e))?.value ?? ""
        }
      };
      var pa = t(9623),
        ha = t(62),
        fa = t(3855);
      const Aa = (0, ca.setContextItem)({
          context: (0, a.createContext)(void 0),
          key: "gtaState"
        }),
        ua = n => {
          let {
            children: e
          } = n;
          const [t, r] = (0, a.useState)(!1), [i, o] = (0, a.useState)(), {
            data: s,
            translation: l
          } = ma(), [d, c] = (0, a.useState)({}), [g, m] = (0, a.useState)(!1), [p, h] = (0, a.useState)(!1), f = (() => {
            const {
              webSettings: n,
              mutateWebSettings: e
            } = (0, ca.useRockstarWebSettings)(), {
              pathname: t,
              search: r
            } = (0, pa.useLocation)(), i = (0, a.useRef)((0, ha.A)().currentSite?.site === ha.C.socialClub ? aa : ta), o = () => {
              const n = ((n, e, t) => !n.full_exclusion.find((n => n.test(e + t))))(i.current, t, r);
              return window.self === window.top && n
            }, s = e => e && !(window?.env?.responseStatusCode && 200 !== window?.env?.responseStatusCode) && !((n, e, t) => n.banner_collapsed.some((n => "string" == typeof n ? e === n : n.test(e + t))))(i.current, t, r) && (n?.[ra] ?? !0), [l, d] = (0, a.useState)(o()), [c, g] = (0, a.useState)(s(l)), [m, p] = (0, a.useState)(c || !l);
            return (0, a.useEffect)((() => {
              const n = o(),
                e = s(n);
              g(e), d(n)
            }), [t, r, window.env]), (0, a.useEffect)((() => {
              !c && l && p(!1)
            }), [c]), (0, a.useEffect)((() => {
              void 0 === n?.[ra] && e({
                key: ra,
                value: !0
              })
            }), [n]), (0, a.useEffect)((() => {
              n?.[ra] || e({
                key: ra,
                value: c
              })
            }), [c]), {
              isExpanded: c,
              setIsExpanded: g,
              isInitialExpansion: m,
              doesPageDisplayBanner: l
            }
          })(), A = (0, a.useRef)(null), u = (0, a.useRef)(null), v = (0, a.useRef)(null), b = (0, a.useRef)(null), w = (0, a.useRef)(null), x = {
            createYouTubePlayer: async function() {
              let {
                onVideoComplete: n,
                target: e,
                id: t
              } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
              const a = await (n => {
                let {
                  onStateChange: e,
                  playerVars: t = {},
                  target: a,
                  videoId: r,
                  playerId: i
                } = n;
                return new Promise(((n, o) => {
                  const s = `youtube-player-${i}`,
                    l = document.createElement("div");
                  l.id = s, a.appendChild(l);
                  const d = () => new window.YT.Player(s, {
                    videoId: r,
                    width: "100%",
                    height: "100%",
                    playerVars: t,
                    events: {
                      onReady: async e => {
                        try {
                          const t = await e.target;
                          n(t)
                        } catch (n) {
                          o(n)
                        }
                      },
                      onStateChange: e
                    }
                  });
                  if (window.YT) d();
                  else {
                    const n = document.createElement("script");
                    n.src = "https://www.youtube.com/iframe_api", window.onYouTubeIframeAPIReady = () => {
                      d()
                    }, document.head.appendChild(n)
                  }
                }))
              })({
                onStateChange: async e => {
                  switch (e.data) {
                    case window.YT.PlayerState.UNSTARTED:
                      await u.current.mute(), await u.current.playVideo();
                      break;
                    case window.YT.PlayerState.ENDED:
                      n?.();
                    case window.YT.PlayerState.PLAYING:
                  }
                },
                playerVars: {
                  rel: 0,
                  autoplay: 1,
                  playlist: i,
                  controls: 1
                },
                target: e.current,
                videoId: i,
                playerId: t
              });
              u.current = a
            },
            playVideo: async () => {
              await (u?.current?.playVideo())
            },
            pauseVideo: async () => {
              await (u?.current?.pauseVideo())
            },
            stopVideo: async () => {
              await (u?.current?.stopVideo())
            },
            resetVideo: async () => {
              await (u?.current?.pauseVideo()), await (u?.current?.seekTo(0))
            }
          }, y = (n, e) => {
            c((t => ({
              ...t,
              [n]: e
            })))
          }, C = () => {
            for (const n in d) Object.hasOwn(d, n) && d[n].reverse()
          };
          (0, a.useEffect)((() => {
            o(l("youtubeId"))
          }), [s]), (0, a.useEffect)((() => () => {
            C()
          }), [d]);
          const k = (0, a.useMemo)((() => ({
            ctaButtonRef: A,
            timelines: d,
            addTimeline: y,
            reverseAllTimelines: C,
            isStandalone: t,
            setIsStandalone: r,
            isModalOpen: p,
            setIsModalOpen: h,
            ...f,
            isVideoPlayerActive: g,
            setIsVideoPlayerActive: m,
            youtubeRef: u,
            heroPlayerRef: b,
            dialogPlayerRef: w,
            playButtonRef: v,
            ...x,
            videoId: i
          })), [A, s, d, y, C, f, g, m, u, b, w, v, x, i]);
          return (0, fa.jsx)(Aa.Provider, {
            value: k,
            children: e
          })
        },
        va = () => {
          const n = (0, a.useContext)(Aa);
          if (void 0 === n) throw new Error("useGTA must be used within a GTAProvider");
          return n
        };
      var ba = t(1788);
      const wa = (0, ba.defineMessages)({
        home_text: {
          defaultMessage: "Home",
          id: "home_text"
        },
        rockstar_games_logo_alt_text: {
          defaultMessage: "Rockstar Games Logo",
          id: "rockstar_games_logo_alt_text"
        }
      });
      var xa = t(5945),
        ya = t.n(xa),
        Ca = t(9690),
        ka = t(3178),
        _a = t.n(ka),
        za = t(7835),
        Ba = t.n(za),
        Ia = t(7529),
        Da = t.n(Ia),
        Sa = t(2162),
        Ea = t.n(Sa),
        Ra = t(2510),
        Na = t.n(Ra),
        Ta = t(675),
        Fa = t.n(Ta),
        Ma = t(9210),
        Ga = {};
      Ga.styleTagTransform = Fa(), Ga.setAttributes = Ea(), Ga.insert = Da().bind(null, "head"), Ga.domAPI = Ba(), Ga.insertStyleElement = Na(), _a()(Ma.A, Ga);
      const Pa = Ma.A && Ma.A.locals ? Ma.A.locals : void 0,
        ja = n => {
          let {
            className: e,
            onClick: t,
            closeRef: r
          } = n;
          return (0, a.useEffect)((() => {
            const n = n => {
              "Escape" === n.key && t?.()
            };
            return window.addEventListener("keydown", n), () => {
              window.removeEventListener("keydown", n)
            }
          }), [t]), (0, fa.jsx)("button", {
            ref: r,
            type: "button",
            className: [Pa.closeBtn, e || ""].join(" "),
            onClick: t,
            "aria-label": "close",
            disabled: !1
          })
        };
      var Ha = t(6232),
        Oa = {};
      Oa.styleTagTransform = Fa(), Oa.setAttributes = Ea(), Oa.insert = Da().bind(null, "head"), Oa.domAPI = Ba(), Oa.insertStyleElement = Na(), _a()(Ha.A, Oa);
      const Wa = Ha.A && Ha.A.locals ? Ha.A.locals : void 0,
        La = n => {
          let {
            showCloseButton: e = !1
          } = n;
          const t = (0, a.useRef)(null),
            r = (0, a.useRef)(null),
            {
              track: i
            } = (0, ea.useGtmTrack)(),
            {
              timelines: o,
              isVideoPlayerActive: s,
              youtubeRef: l,
              heroPlayerRef: d,
              resetVideo: c
            } = va();
          (0, a.useLayoutEffect)((() => {
            o.playVideoTimeline?.fromTo(t.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              duration: la,
              ease: oa.playVideo.fadeIn
            }).fromTo(r.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1
            })
          }), [o.playVideoTimeline]), (0, a.useLayoutEffect)((() => () => {
            delete window.onYouTubeIframeAPIReady
          }), []), (0, a.useEffect)((() => {
            lt.refresh()
          }), [s]);
          let g = null;
          return g = ya(), (0, fa.jsx)(Ca.RemoveScroll, {
            allowPinchZoom: !1,
            enabled: s,
            children: (0, fa.jsx)(g, {
              disabled: !s,
              children: (0, fa.jsxs)("div", {
                ref: t,
                className: Wa.videoContainer,
                children: [e && (0, fa.jsx)(ja, {
                  className: Wa.closeButton,
                  onClick: () => (l?.current && o.playVideoTimeline.timeScale(3).reverse(), c(), void i({
                    event: "takeover_close",
                    element_placement: "promo_banner2"
                  })),
                  closeRef: r
                }), s && (0, fa.jsx)("div", {
                  className: Wa.videoContent,
                  ref: d
                })]
              })
            })
          })
        };
      var qa = t(8770),
        Ua = {};
      Ua.styleTagTransform = Fa(), Ua.setAttributes = Ea(), Ua.insert = Da().bind(null, "head"), Ua.domAPI = Ba(), Ua.insertStyleElement = Na(), _a()(qa.A, Ua);
      const Va = qa.A && qa.A.locals ? qa.A.locals : void 0,
        Ja = (0, a.forwardRef)(((n, e) => {
          const r = (0, a.useRef)(null),
            i = (0, a.useRef)(null),
            o = (0, a.useRef)(null),
            {
              isMobile: s
            } = (0, ca.useWindowResize)(),
            [l, d] = (0, a.useState)("");
          (0, a.useEffect)((() => {
            d(t(s ? 4720 : 5231))
          }), [s]), (0, a.useImperativeHandle)(e, (() => ({
            heroImagesRef: r,
            heroLogoRef: o
          })), [r?.current, o?.current]);
          const {
            timelines: c
          } = va();
          return (0, a.useLayoutEffect)((() => {
            c?.playVideoTimeline?.fromTo([r.current], {
              autoAlpha: 1,
              scale: 1
            }, {
              autoAlpha: 0,
              scale: .98,
              duration: sa,
              ease: oa.playVideo.fadeOut
            })
          }), [c?.playVideoTimeline]), (0, a.useLayoutEffect)((() => {
            c?.introTimeline?.from(i.current, {
              "--hero-image-height": "200%",
              "--hero-image-width": "200%"
            }, 0)?.set([i.current], {
              clearProps: "all"
            })
          }), [c.introTimeline]), (0, fa.jsx)("div", {
            ref: r,
            className: Va.heroImages,
            children: (0, fa.jsx)("img", {
              ref: i,
              className: Va.layeredImage,
              src: l,
              alt: ""
            })
          })
        }));
      Ja.displayName = "LayeredImages";
      const Qa = Ja;
      var Ya = t(9062),
        Ka = {};
      Ka.styleTagTransform = Fa(), Ka.setAttributes = Ea(), Ka.insert = Da().bind(null, "head"), Ka.domAPI = Ba(), Ka.insertStyleElement = Na(), _a()(Ya.A, Ka);
      const $a = Ya.A && Ya.A.locals ? Ya.A.locals : void 0;
      var Xa = t(7392),
        Za = {};
      Za.styleTagTransform = Fa(), Za.setAttributes = Ea(), Za.insert = Da().bind(null, "head"), Za.domAPI = Ba(), Za.insertStyleElement = Na(), _a()(Xa.A, Za);
      const nr = Xa.A && Xa.A.locals ? Xa.A.locals : void 0,
        er = () => {
          const {
            ctaButtonRef: n,
            timelines: e,
            isExpanded: a,
            createYouTubePlayer: i,
            isStandalone: o,
            playButtonRef: s,
            playVideo: l,
            heroPlayerRef: d
          } = va(), {
            track: c
          } = (0, ea.useGtmTrack)();
          return (0, fa.jsx)("button", {
            type: "button",
            ref: s,
            className: nr.playButton,
            onMouseEnter: n => {
              let {
                currentTarget: e
              } = n;
              r.gsap.to(e, {
                scale: 1.1,
                duration: .15,
                ease: r.Power1.easeOut
              })
            },
            onMouseLeave: n => {
              let {
                currentTarget: e
              } = n;
              r.gsap.to(e, {
                scale: 1,
                duration: .15,
                ease: r.Power1.easeOut
              })
            },
            onClick: () => {
              const t = () => {
                a && r.gsap.to(n.current, {
                  autoAlpha: 1,
                  duration: da,
                  ease: oa.playVideo.cta
                })
              };
              e.playVideoTimeline?.play(), setTimeout((async () => {
                await i({
                  onVideoComplete: t,
                  target: d,
                  id: "hero"
                }), await l()
              }), 2e3), c({
                event: "video_play",
                element_placement: o ? "landing_page_hero" : "banner",
                video_id: "promo_video",
                video_title: "promo_video"
              })
            },
            "aria-label": "Play",
            tabIndex: a || o ? void 0 : -1,
            children: (0, fa.jsx)("img", {
              src: t(4238),
              alt: "",
              "aria-hidden": !0
            })
          })
        },
        tr = n => {
          let {
            className: e
          } = n;
          return (0, fa.jsx)("svg", {
            className: e || "",
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "12",
            viewBox: "0 0 32 12",
            fill: "none",
            children: (0, fa.jsx)("path", {
              fillRule: "evenodd",
              clipRule: "evenodd",
              d: "M31.7948 1.60281C32.2537 2.47697 31.9171 3.55765 31.0429 4.01658L15.9054 11.9638L0.948843 4.01224C0.0770835 3.54878 -0.253903 2.46636 0.209564 1.5946C0.673031 0.722843 1.75545 0.391857 2.62721 0.855324L15.9159 7.92018L29.381 0.850985C30.2552 0.392054 31.3358 0.728659 31.7948 1.60281Z",
              fill: "white"
            })
          })
        };
      var ar = t(4239),
        rr = {};
      rr.styleTagTransform = Fa(), rr.setAttributes = Ea(), rr.insert = Da().bind(null, "head"), rr.domAPI = Ba(), rr.insertStyleElement = Na(), _a()(ar.A, rr);
      const ir = ar.A && ar.A.locals ? ar.A.locals : void 0,
        or = (0, a.forwardRef)(((n, e) => {
          let {
            className: a,
            logoSource: r,
            text: i
          } = n;
          return (0, fa.jsxs)("div", {
            className: [ir.logo, a || ""].join(" "),
            ref: e,
            children: [(0, fa.jsx)("img", {
              src: t(7958)(`./${r}`),
              alt: `${i} logo`
            }), (0, fa.jsx)("p", {
              children: i
            })]
          })
        }));
      or.displayName = "IconLogoWithText";
      const sr = or,
        lr = (0, a.forwardRef)(((n, e) => {
          let {
            secondPhase: t = !1
          } = n;
          const {
            loading: i,
            translation: o
          } = ma(), s = (0, a.useRef)(null), {
            timelines: l
          } = va();
          (0, a.useImperativeHandle)(e, (() => s?.current), [s?.current]);
          return (0, a.useLayoutEffect)((() => {
            l?.introTimeline?.fromTo(s.current, {
              autoAlpha: 0
            }, {
              autoAlpha: 1,
              ease: "cubic-bezier(0.42, 0, 0.58, 1)",
              duration: 1,
              onComplete: () => {
                r.gsap.set(s?.current?.children, {
                  pointerEvents: "auto"
                })
              }
            }, "<75%")
          }), [l.introTimeline]), (0, a.useLayoutEffect)((() => {
            l?.playVideoTimeline?.fromTo(s.current, {
              autoAlpha: 1
            }, {
              autoAlpha: 0,
              immediateRender: !1
            }, "<")
          }), [l.playVideoTimeline]), (0, fa.jsxs)("div", {
            ref: s,
            className: $a.ui,
            children: [(0, fa.jsx)(er, {}), t ? (0, fa.jsxs)(fa.Fragment, {
              children: [(0, fa.jsx)(sr, {
                className: $a.iconLogoWithText,
                text: o("d2.destLogoMSG"),
                logoSource: "logo_secondary_stroke.svg"
              }), (0, fa.jsx)(tr, {
                className: $a.scrollIndicator
              })]
            }) : (0, fa.jsx)(sr, {
              className: $a.iconLogoWithText,
              text: o("d2.tkoLogoMsg"),
              logoSource: "logo_secondary_stroke.svg"
            })]
          })
        }));
      lr.displayName = "UI";
      const dr = lr;
      var cr = t(5826),
        gr = {};
      gr.styleTagTransform = Fa(), gr.setAttributes = Ea(), gr.insert = Da().bind(null, "head"), gr.domAPI = Ba(), gr.insertStyleElement = Na(), _a()(cr.A, gr);
      const mr = cr.A && cr.A.locals ? cr.A.locals : void 0;
      var pr = t(7151),
        hr = {};
      hr.styleTagTransform = Fa(), hr.setAttributes = Ea(), hr.insert = Da().bind(null, "head"), hr.domAPI = Ba(), hr.insertStyleElement = Na(), _a()(pr.A, hr);
      const fr = pr.A && pr.A.locals ? pr.A.locals : void 0,
        Ar = (0, a.forwardRef)(((n, e) => (0, fa.jsx)("div", {
          className: fr.loader,
          ref: e
        })));
      Ar.displayName = "LoadingState";
      const ur = Ar,
        vr = (0, a.forwardRef)(((n, e) => {
          let {
            className: t,
            standalone: i = !1
          } = n;
          const o = (0, a.useRef)(null),
            s = (0, a.useRef)(null),
            l = (0, a.useRef)(null),
            d = (0, a.useRef)(null),
            {
              addTimeline: c,
              timelines: g,
              setIsVideoPlayerActive: m
            } = va();
          return (0, a.useImperativeHandle)(e, (() => ({
            heroRef: s,
            heroUIRef: l,
            heroImagesRefs: d
          })), [s?.current, l?.current, d?.current]), (0, a.useLayoutEffect)((() => {
            const n = r.gsap.context((() => {
              const n = r.gsap.timeline({
                  paused: !0,
                  defaults: {
                    duration: 2,
                    ease: oa.intro,
                    force3D: !0
                  }
                }).to(o.current, {
                  autoAlpha: 0
                }),
                e = r.gsap.timeline({
                  paused: !0,
                  defaults: {
                    duration: .5,
                    ease: oa.default,
                    force3D: !0
                  }
                });
              c("introTimeline", n), c("playVideoTimeline", e)
            }));
            return () => n.revert()
          }), []), (0, a.useEffect)((() => {
            o?.current && g?.introTimeline && g?.introTimeline.play()
          }), [o?.current, g?.introTimeline, i]), (0, a.useLayoutEffect)((() => {
            g?.playVideoTimeline && s?.current && (g.playVideoTimeline.eventCallback("onStart", (() => {
              g?.playVideoTimeline.timeScale(1), m(!0), r.gsap.set(s?.current, {
                background: "transparent"
              })
            })), g.playVideoTimeline.eventCallback("onReverseComplete", (() => {
              m(!1), r.gsap.set(s?.current, {
                clearProps: "background"
              })
            })))
          }), [m, s?.current, g?.playVideoTimeline, i]), (0, fa.jsxs)("div", {
            ref: s,
            className: [mr.hero, t || ""].join(" "),
            children: [(0, fa.jsx)(ur, {
              ref: o
            }), (0, fa.jsx)(Qa, {
              ref: d
            }), (0, fa.jsx)(dr, {
              ref: l,
              secondPhase: i
            }), i ? null : (0, fa.jsx)(La, {})]
          })
        }));
      vr.displayName = "Hero";
      const br = vr;
      var wr = t(6863),
        xr = {};
      xr.styleTagTransform = Fa(), xr.setAttributes = Ea(), xr.insert = Da().bind(null, "head"), xr.domAPI = Ba(), xr.insertStyleElement = Na(), _a()(wr.A, xr);
      const yr = wr.A && wr.A.locals ? wr.A.locals : void 0,
        Cr = n => {
          let {
            children: e,
            showModal: t = !1,
            dialogRef: i,
            onClose: o = (() => {})
          } = n;
          return (0, a.useEffect)((() => {
            t && i.current && (i.current.showModal(), setTimeout((() => {
              r.gsap.set(window, {
                scrollTo: 0
              })
            }), 300))
          }), [t]), (0, fa.jsxs)("dialog", {
            ref: i,
            className: yr.dialogModal,
            onClick: n => (n => {
              n.currentTarget && (n.currentTarget.close(), o(), n.preventDefault(), n.stopPropagation(), n.nativeEvent.stopImmediatePropagation())
            })(n),
            children: [(0, fa.jsx)("button", {
              className: yr.modalButton,
              onClick: () => (i.current?.close(), void o()),
              type: "button",
              value: "cancel",
              "aria-label": "close",
              children: (0, fa.jsx)("div", {
                className: yr.closeButton
              })
            }), (0, fa.jsx)("div", {
              className: yr.modalContent,
              children: e
            })]
          })
        },
        kr = n => {
          let {
            alt: e = "",
            className: t = "",
            clipRule: a = "evenodd",
            fill: r = "white",
            fillRule: i = "evenodd"
          } = n;
          return (0, fa.jsxs)("svg", {
            className: t,
            fill: r,
            version: "1.1",
            viewBox: "0 0 24 24",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, fa.jsx)("title", {
              children: e
            }), (0, fa.jsx)("path", {
              fillRule: i,
              clipRule: a,
              d: "M4.52081 2.12229C4.84189 1.947 5.23305 1.96101 5.54076 2.15882L19.5408 11.1588C19.827 11.3428 20 11.6597 20 12C20 12.3403 19.827 12.6572 19.5408 12.8412L5.54076 21.8412C5.23305 22.039 4.84189 22.053 4.52081 21.8777C4.19974 21.7024 4 21.3658 4 21V3C4 2.63419 4.19974 2.29758 4.52081 2.12229Z"
            })]
          })
        };
      var _r = t(2677),
        zr = {};
      zr.styleTagTransform = Fa(), zr.setAttributes = Ea(), zr.insert = Da().bind(null, "head"), zr.domAPI = Ba(), zr.insertStyleElement = Na(), _a()(_r.A, zr);
      const Br = _r.A && _r.A.locals ? _r.A.locals : void 0;
      r.gsap.registerPlugin(lt, na);
      const Ir = (0, a.forwardRef)(((n, e) => {
        let {
          blurb: a,
          buttonText: r,
          className: i = "",
          image: o = "logo_secondary_color.png",
          header: s
        } = n;
        const {
          setIsModalOpen: l
        } = va(), {
          track: d
        } = (0, ea.useGtmTrack)();
        return (0, fa.jsxs)("div", {
          className: [Br.infoSection, i || ""].join(" "),
          ref: e,
          children: [(0, fa.jsx)("img", {
            className: Br.logo,
            src: t(7958)(`./${o}`),
            alt: ""
          }), (0, fa.jsxs)("div", {
            className: Br.content,
            children: [(0, fa.jsxs)("div", {
              className: Br.text,
              children: [(0, fa.jsx)("h1", {
                className: Br.header,
                children: s
              }), (0, fa.jsx)("div", {
                className: Br.blurb,
                dangerouslySetInnerHTML: {
                  __html: (c = a, c.split(/\r\n|\r|\n/).reduce(((n, e) => {
                    let t = n;
                    return e.trim().length && (t += `<p>${e}</p>`), t
                  })))
                }
              })]
            }), (0, fa.jsxs)("button", {
              type: "button",
              className: Br.button,
              onClick: () => {
                d({
                  event: "video_play",
                  element_placement: "landing_page_description",
                  video_id: "promo_video",
                  video_title: "promo_video"
                }), l(!0)
              },
              children: [(0, fa.jsx)(kr, {
                className: Br.buttonIcon
              }), r]
            })]
          })]
        });
        var c
      }));
      Ir.displayName = "InfoSection";
      const Dr = Ir,
        Sr = (0, ba.defineMessages)({
          aria_label_open_new_window: {
            id: "aria_label_open_new_window",
            defaultMessage: "(Opens in a new window)"
          }
        });
      var Er = t(1835),
        Rr = {};
      Rr.styleTagTransform = Fa(), Rr.setAttributes = Ea(), Rr.insert = Da().bind(null, "head"), Rr.domAPI = Ba(), Rr.insertStyleElement = Na(), _a()(Er.A, Rr);
      const Nr = Er.A && Er.A.locals ? Er.A.locals : void 0,
        Tr = JSON.parse('{"de-DE":{"aria_label_open_new_window":"(Öffnet ein neues Fenster)","components_ratings_link_alt":"Altersfreigabe: {rating} Klicke hier, um mehr über Altersfreigaben zu erfahren.","components_track_list_title":"Trackliste","next_button_label":"Nächste Videoseite","ns_already_subbed_details":"Du erhältst bereits Newsletter-Updates an diese E-Mail-Adresse. Du kannst deine Präferenzen bezüglich E-Mails jederzeit in den Einstellungen deines Kontos ändern.","ns_already_subbed_title":"Bereits abonniert","ns_check_email_details":"Bitte verifiziere deine E-Mail-Adresse über den Link, der an die E-Mail-Adresse geschickt wurde, mit der du dich angemeldet hast, um dein Abo für die E-Mail-Liste von Rockstar Games zu bestätigen.","ns_check_email_title":"Überprüfe deine E-Mails","ns_confirm_after_register_details":"Du hast dich während der Kontoerstellung nicht für Werbe-E-Mails angemeldet. Möchtest du immer noch unseren Newsletter abonnieren?","ns_confirm_after_register_title":"Bestätige dein Abo","ns_confirm_details":"Bitte drücke auf den Knopf unten, um zu bestätigen, dass du den Newsletter von Rockstar Games abonnieren möchtest.","ns_confirm_title":"Bestätige dein Abo","ns_cta_button_text":"Jetzt abonnieren","ns_cta_text":"Melde dich bei unserem E-Mail-Newsletter an, um über Spielankündigungen und Updates, besondere Events, Angebote und mehr von Rockstar Games und unseren Partnern informiert zu werden.","ns_cta_title":"E-Mail-Liste von Rockstar Games beitreten","ns_cta_title_twitchdrops":"Verpass nicht dein nächstes Gratisgeschenk in GTA Online.","ns_error_generic_details":"Wir können diese E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden.","ns_error_generic_title":"Fehler","ns_error_preferences_details":"Wir können deine E-Mail-Adresse derzeit nicht bei unserem Newsletter anmelden. Ändere deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos oder versuche es später erneut.","ns_error_preferences_title":"Fehler","ns_go_back_text":"Nein, zurückkehren","ns_manage_prefs_button_text":"Präferenzen verwalten","ns_ok_button_text":"OKAY","ns_successfully_subscribed_details":"Du hast dich bei der E-Mail-Liste von Rockstar Games angemeldet und erhältst regelmäßig Updates an die E-Mail-Adresse, mit der du dich angemeldet hast. Verwalte deine Präferenzen bezüglich E-Mails in den Einstellungen deines Kontos.","ns_successfully_subscribed_title":"Erfolgreich abonniert","ns_yes_subscribe_text":"Ja, abonnieren","previous_button_label":"Vorherige Videoseite","profile_silhouette_mugshot":"Verbrecherfoto mit Silhouette","rp_icon":"RP-Kategorie"},"en-US":{"aria_label_open_new_window":"(Opens in a new window)","components_ratings_link_alt":"Rating: {rating}. Click here learn more about rating systems","components_track_list_title":"Tracklist","next_button_label":"Next video page","ns_already_subbed_details":"You are already receiving newsletter updates at this email address. Change your email preferences at any time on your account settings page.","ns_already_subbed_title":"Already Subscribed","ns_check_email_details":"To confirm your subscription to the Rockstar Games Email List, please verify your email address via the link sent to the email address you’ve signed up with.","ns_check_email_title":"Check Your Email","ns_confirm_after_register_details":"You did not opt-in to receive marketing emails during account creation. Would you still like to subscribe to our newsletter?","ns_confirm_after_register_title":"Confirm your subscription","ns_confirm_details":"Please confirm that you would like to subscribe to the Rockstar Games Newsletter by clicking the button below.","ns_confirm_title":"Confirm your subscription","ns_cta_button_text":"Subscribe Now","ns_cta_text":"Sign up for our email newsletter to get info on game announcements and updates, details on special events and offers, and more from Rockstar Games and our affiliates.","ns_cta_title":"Subscribe to the Rockstar Games Email List","ns_cta_title_twitchdrops":"Don\'t miss the next free GTA Online gift","ns_error_generic_details":"We cannot sign up this email address to our newsletter at this time.","ns_error_generic_title":"Error","ns_error_preferences_details":"We cannot sign up your email address to our newsletter at this time. Change your email preferences on your account settings page or try again later.","ns_error_preferences_title":"Error","ns_go_back_text":"No, Go Back","ns_manage_prefs_button_text":"Manage Preferences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"You are now signed up to the Rockstar Games Email List and will receive regular updates to the email address you’ve signed up with. Manage your email preferences at any time on your account settings page.","ns_successfully_subscribed_title":"Successfully Subscribed","ns_yes_subscribe_text":"Yes, Subscribe","previous_button_label":"Previous video page","profile_silhouette_mugshot":"Silhouette mugshot","rp_icon":"RP Category"},"es-ES":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre los sistemas de clasificación.","components_track_list_title":"Lista de pistas","next_button_label":"Página de vídeo siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín de noticias en este correo electrónico. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_already_subbed_title":"Ya tienes una suscripción","ns_check_email_details":"Para confirmar tu suscripción a la lista de correo de Rockstar Games, verifica tu correo electrónico a través del enlace enviado al correo electrónico con el que te has suscrito.","ns_check_email_title":"Comprueba tu correo electrónico","ns_confirm_after_register_details":"No te has suscrito a los correos electrónicos comerciales al crear tu cuenta. ¿Quieres suscribirte a nuestro boletín de noticias?","ns_confirm_after_register_title":"Confirma tu suscripción","ns_confirm_details":"Haz click en el botón para confirmar que quieres suscribirte al boletín de noticias de Rockstar Games.","ns_confirm_title":"Confirma tu suscripción","ns_cta_button_text":"Suscríbete ya","ns_cta_text":"Suscríbete a nuestro boletín de noticias para obtener información sobre los anuncios y actualizaciones de juegos, detalles sobre eventos especiales, ofertas y mucho más sobre Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correo de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con este correo electrónico.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento no puedes suscribirte a nuestro boletín de noticias con tu correo electrónico. Cambia tus preferencias de correos electrónicos en la página de ajustes de tu cuenta o inténtalo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Te has suscrito a la lista de correo de Rockstar Games y recibirás actualizaciones en el correo electrónico con el que te has suscrito. Cambia tus preferencias de correos electrónicos en cualquier momento en la página de ajustes de tu cuenta.","ns_successfully_subscribed_title":"Te has suscrito","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de vídeo anterior","profile_silhouette_mugshot":"Foto de silueta","rp_icon":"Categoría de RP"},"es-MX":{"aria_label_open_new_window":"(Se abre en una ventana nueva)","components_ratings_link_alt":"Clasificación: {rating}. Haz clic aquí para obtener más información sobre el sistema de clasificación.","components_track_list_title":"Lista de canciones","next_button_label":"Página de video siguiente","ns_already_subbed_details":"Ya recibes actualizaciones del boletín en esta dirección de correo electrónico. Modifica las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_already_subbed_title":"Ya cuentas con una suscripción","ns_check_email_details":"Verifica tu dirección de correo electrónico mediante el enlace que enviamos al correo con el que te registraste para confirmar la suscripción a la lista de correos de Rockstar Games.","ns_check_email_title":"Verifica tu dirección de correo electrónico","ns_confirm_after_register_details":"No optaste por recibir correos con publicidad durante la creación de la cuenta. ¿Quieres suscribirte a nuestro boletín de todos modos?","ns_confirm_after_register_title":"Confirmar suscripción","ns_confirm_details":"Haz clic en el botón a continuación para confirmar que quieres suscribirte al boletín de Rockstar Games.","ns_confirm_title":"Confirmar suscripción","ns_cta_button_text":"Suscribirse ahora","ns_cta_text":"Regístrate para recibir nuestro boletín por correo electrónico y recibir información sobre anuncios y actualizaciones de juegos, detalles sobre eventos y ofertas especiales, y mucho más de Rockstar Games y sus afiliados.","ns_cta_title":"Suscríbete a la lista de correos de Rockstar Games","ns_cta_title_twitchdrops":"No te pierdas el próximo regalo de GTA Online","ns_error_generic_details":"En este momento, no podemos registrar esta dirección de correo electrónico a nuestro boletín.","ns_error_generic_title":"Error","ns_error_preferences_details":"En este momento, no podemos registrar tu dirección de correo electrónico a nuestro boletín. Modifica las preferencias de tu correo desde la página de ajustes de la cuenta o inténtalo de nuevo más tarde.","ns_error_preferences_title":"Error","ns_go_back_text":"No, volver","ns_manage_prefs_button_text":"Gestionar preferencias","ns_ok_button_text":"ACEPTAR","ns_successfully_subscribed_details":"Cuentas con una suscripción a la lista de correos de Rockstar Games y recibirás actualizaciones habituales a la dirección de correo electrónico con la que te registraste. Gestiona las preferencias de tu correo cuando quieras desde la página de ajustes de la cuenta.","ns_successfully_subscribed_title":"Suscripción exitosa","ns_yes_subscribe_text":"Sí, suscribirse","previous_button_label":"Página de video anterior","profile_silhouette_mugshot":"Foto de una silueta","rp_icon":"Categoría de RP"},"fr-FR":{"aria_label_open_new_window":"(S’ouvre dans une nouvelle fenêtre)","components_ratings_link_alt":"Classification : {rating}. Cliquez ici pour en savoir plus sur les systèmes de classification.","components_track_list_title":"Liste des morceaux","next_button_label":"Page vidéo suivante","ns_already_subbed_details":"Vous êtes déjà abonné(e) à la newsletter avec cette adresse e-mail. Modifiez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_already_subbed_title":"Vous êtes déjà abonné(e)","ns_check_email_details":"Pour confirmer votre abonnement à la liste de diffusion de Rockstar Games, veuillez vérifier votre adresse e-mail en cliquant sur le lien envoyé à l\'adresse e-mail avec laquelle vous vous êtes abonné(e).","ns_check_email_title":"Vérifiez votre adresse e-mail","ns_confirm_after_register_details":"Vous avez choisi de ne pas recevoir d\'e-mails publicitaires lors de la création de votre compte. Voulez-vous toujours vous abonner à notre newsletter ?","ns_confirm_after_register_title":"Confirmer votre abonnement","ns_confirm_details":"Veuillez confirmer que vous souhaitez vous abonner à la newsletter de Rockstar Games en cliquant sur le bouton ci-dessous.","ns_confirm_title":"Confirmez votre abonnement","ns_cta_button_text":"S\'abonner","ns_cta_text":"Abonnez-vous à la newsletter pour recevoir par e-mail des infos relatives à nos jeux et aux mises à jour, aux évènements spéciaux et aux offres, et plus de la part de Rockstar Games et nos affiliés.","ns_cta_title":"S\'abonner à la liste de diffusion de Rockstar Games ","ns_cta_title_twitchdrops":"Ne manquez pas le prochain cadeau gratuit dans GTA Online.","ns_error_generic_details":"Nous ne pouvons pas abonner cette adresse e-mail à notre newsletter pour l\'instant.","ns_error_generic_title":"Erreur","ns_error_preferences_details":"Nous ne pouvons pas abonner votre adresse e-mail à notre newsletter pour l\'instant. Modifiez vos préférences concernant les e-mails sur la page des paramètres de votre compte ou réessayez plus tard.","ns_error_preferences_title":"Erreur","ns_go_back_text":"Non, retour","ns_manage_prefs_button_text":"Gérer vos préférences","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Vous êtes désormais abonné(e) à la liste de diffusion de Rockstar Games. Vous recevrez des e-mails régulièrement à l\'adresse e-mail avec laquelle vous vous êtes abonné(e). Gérez vos préférences concernant les e-mails à tout moment sur la page des paramètres de votre compte.","ns_successfully_subscribed_title":"Abonnement effectué","ns_yes_subscribe_text":"Oui, je m\'abonne","previous_button_label":"Page vidéo précédente","profile_silhouette_mugshot":"Photo d\'identité : silhouette","rp_icon":"Catégorie : RP"},"it-IT":{"aria_label_open_new_window":"(Apri in una nuova finestra)","components_ratings_link_alt":"Classificazione: {rating}. Clicca qui per scoprire di più sui sistemi di classificazione","components_track_list_title":"Tracklist","next_button_label":"Pagina di video successiva","ns_already_subbed_details":"Stai già usando questo indirizzo email per ricevere la newsletter. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_already_subbed_title":"Sei già iscritto","ns_check_email_details":"Per confermare la tua iscrizione alla mailing list di Rockstar Games, verifica il tuo indirizzo email tramite il link che ti abbiamo inviato all’indirizzo email che hai usato per iscriverti.","ns_check_email_title":"Controlla la tua mail","ns_confirm_after_register_details":"Non hai acconsentito a ricevere le email di marketing durante la creazione dell\'account. Vuoi ancora iscriverti alla nostra newsletter?","ns_confirm_after_register_title":"Conferma la tua iscrizione","ns_confirm_details":"Conferma che vuoi iscriverti alla Newsletter di Rockstar Games cliccando sul pulsanto qui sotto.","ns_confirm_title":"Conferma la tua iscrizione","ns_cta_button_text":"Iscriviti","ns_cta_text":"Iscriviti alla nostra newsletter via email per ricevere i dettagli, gli annunci e gli aggiornamenti sui giochi, i dettagli sugli eventi speciali e sulle offerte, e altro da parte di Rockstar Games e dai nostri soci.","ns_cta_title":"Iscriviti alla mailing list di Rockstar Games","ns_cta_title_twitchdrops":"Non perdere il prossimo omaggio di GTA Online","ns_error_generic_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento.","ns_error_generic_title":"Errore","ns_error_preferences_details":"Non è stato possibile procedere con l’iscrizione di questo indirizzo email alla nostra newsletter in questo momento. Modifica le preferenze della tua email nella pagina delle impostazioni dell’account o riprova più tardi.","ns_error_preferences_title":"Errore","ns_go_back_text":"No, torna indietro","ns_manage_prefs_button_text":"Gestisci le preferenze","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Hai effettuato l’iscrizione alla mailing list di Rockstar Games e riceverai regolarmente gli aggiornamenti all’indirizzo email che hai usato per iscriverti. Puoi modificare le preferenze delle email in qualsiasi momento nella pagina delle impostazioni dell’account.","ns_successfully_subscribed_title":"Iscrizione effettuata con successo","ns_yes_subscribe_text":"Sì, iscriviti","previous_button_label":"Pagina di video precedente","profile_silhouette_mugshot":"Foto segnaletica silhouette","rp_icon":"Categoria RP"},"ja-JP":{"aria_label_open_new_window":"(新しいウィンドウで開きます)","components_ratings_link_alt":"レーティング：{rating}レーティングについての詳細はこちらをクリックしてください","components_track_list_title":"トラックリスト","next_button_label":"次のビデオページ","ns_already_subbed_details":"このメールアドレスで既にニュースレターアップデートを受け取っています。アカウント設定のページからいつでもメール受信設定を変更できます。","ns_already_subbed_title":"サブスクリプション登録済み","ns_check_email_details":"ロックスター・ゲームスのメールリストへのサブスクリプション登録を確認するため、登録に使用したメールアドレスに送られたリンクからメールアドレスを認証してください。","ns_check_email_title":"メールを確認してください","ns_confirm_after_register_details":"アカウント作成時にマーケティングメールを受け取ることを選択していません。ニュースレターのサブスクリプション登録をしますか？","ns_confirm_after_register_title":"サブスクリプション登録を承認する","ns_confirm_details":"下のボタンをクリックすることでロックスター・ゲームスのニュースレターにサブスクリプション登録をすることを承認してください。","ns_confirm_title":"サブスクリプション登録を承認してください","ns_cta_button_text":"サブスクリプション登録をしましょう","ns_cta_text":"メールニュースレターに登録して、ゲーム発表やアップデート、特別イベントやオファーの詳細など、ロックスター・ゲームスと関連会社からの情報を受け取りましょう。","ns_cta_title":"ロックスター・ゲームスのメールリストへのサブスクリプション登録","ns_cta_title_twitchdrops":"次回の「GTAオンライン」の無料ギフトをお見逃しなく","ns_error_generic_details":"現在このメールアドレスでニュースレターに登録することはできません。","ns_error_generic_title":"エラー","ns_error_preferences_details":"現在このメールアドレスでニュースレターに登録することはできません。アカウント設定のページからメール受信設定を変更するか、後ほど再度お試しください。","ns_error_preferences_title":"エラー","ns_go_back_text":"戻ります","ns_manage_prefs_button_text":"設定を管理する","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"ロックスター・ゲームスのメールリストに登録されました。登録したメールアドレスに定期的にアップデートが送信されます。アカウント設定のページからいつでもメール受信設定を管理できます。","ns_successfully_subscribed_title":"サブスクリプション登録が完了しました","ns_yes_subscribe_text":"サブスクリプション登録します","previous_button_label":"前のビデオページ","profile_silhouette_mugshot":"シルエット顔写真","rp_icon":"RPカテゴリー"},"ko-KR":{"aria_label_open_new_window":"(새 창에서 열기)","components_ratings_link_alt":"등급 분류: {rating}. 등급 분류 제도에 대해 더 자세히 알아보려면 여기를 클릭하십시오","components_track_list_title":"트랙리스트","next_button_label":"다음 비디오 페이지","ns_already_subbed_details":"이미 이 이메일 주소로 뉴스레터 최신 정보를 수신하고 있습니다. 계정 설정 페이지에서 언제든지 이메일 설정을 변경할 수 있습니다.","ns_already_subbed_title":"이미 구독하고 있음","ns_check_email_details":"Rockstar Games 이메일 리스트 구독 상황을 확인하려면 가입 시 사용한 이메일 주소로 전송된 링크를 통해 이메일 주소를 인증하십시오.","ns_check_email_title":"이메일 확인하기","ns_confirm_after_register_details":"계정 생성 시 마케팅 이메일 수신 동의을 선택하지 않았습니다. 그래도 뉴스레터를 구독하시겠습니까?","ns_confirm_after_register_title":"구독 확인하기","ns_confirm_details":"아래 버튼을 클릭하여 Rockstar Games 뉴스레터 구독 여부를 확인하십시오.","ns_confirm_title":"구독 확인하기","ns_cta_button_text":"지금 구독하기","ns_cta_text":"이메일 뉴스레터를 구독하면 Rockstar Games 및 관련 제휴사로부터 게임 공지 사항, 업데이트, 특별 이벤트 및 혜택에 관한 세부 정보 등 다양한 정보를 받아보실 수 있습니다.","ns_cta_title":"Rockstar Games 이메일 리스트 구독하기","ns_cta_title_twitchdrops":"다음 무료 GTA 온라인 선물을 놓치지 마십시오","ns_error_generic_details":"현재 이 이메일 주소로 뉴스레터를 구독할 수 없습니다.","ns_error_generic_title":"오류","ns_error_preferences_details":"현재 해당 이메일 주소로 뉴스레터를 구독할 수 없습니다. 계정 설정 페이지에서 이메일 설정을 변경하거나 나중에 다시 시도하십시오.","ns_error_preferences_title":"오류","ns_go_back_text":"아니오, 뒤로 갑니다","ns_manage_prefs_button_text":"설정 관리","ns_ok_button_text":"확인","ns_successfully_subscribed_details":"Rockstar Games 이메일 리스트를 구독합니다. 가입하신 이메일 주소로 최신 정보가 정기적으로 전달됩니다. 계정 설정 페이지에서 언제든지 이메일 설정을 관리할 수 있습니다.","ns_successfully_subscribed_title":"구독 완료","ns_yes_subscribe_text":"네, 구독합니다","previous_button_label":"이전 비디오 페이지","profile_silhouette_mugshot":"실루엣 머그샷","rp_icon":"RP 카테고리"},"pl-PL":{"aria_label_open_new_window":"(Otwórz w nowym oknie)","components_ratings_link_alt":"Klasyfikacja wiekowa: {rating}. Kliknij tutaj, aby dowiedzieć się więcej o systemie klasyfikacji wiekowej","components_track_list_title":"Lista utworów","next_button_label":"Następna strona z filmami","ns_already_subbed_details":"Już otrzymujesz powiadomienia o nowościach na ten adres e-mail. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_already_subbed_title":"Subskrypcja jest już aktywna","ns_check_email_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej.","ns_check_email_title":"Sprawdź swoją pocztę","ns_confirm_after_register_details":"Nie udzielono zgody na otrzymywanie powiadomień marketingowych przy zakładaniu konta. Czy chcesz subskrybować naszą listę mailingową?","ns_confirm_after_register_title":"Potwierdź swoją subskrypcję","ns_confirm_details":"Należy potwierdzić swoją subskrypcję listy mailingowej Rockstar Games poprzez kliknięcie poniższego przycisku.","ns_confirm_title":"Potwierdź swoją subskrypcję","ns_cta_button_text":"Subskrybuj teraz","ns_cta_text":"Zapisz się, aby otrzymywać powiadomienia o nowościach dotyczących gier i aktualizacji, a także informacje na temat specjalnych wydarzeń i ofert oraz więcej od Rockstar Games i naszych oddziałów.","ns_cta_title":"Subskrybuj listę mailingową Rockstar Games","ns_cta_title_twitchdrops":"Nie przegap kolejnych darmowych korzyści w GTA Online","ns_error_generic_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games.","ns_error_generic_title":"Błąd","ns_error_preferences_details":"Nie możemy w tym momencie dodać twojego adresu do listy mailingowej Rockstar Games. Zmień swoje preferencje w ustawieniach swojego konta lub spróbuj ponownie później.","ns_error_preferences_title":"Błąd","ns_go_back_text":"Nie, cofnij","ns_manage_prefs_button_text":"Aktualizuj swoje preferencje","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Aby potwierdzić swoją subskrypcję listy mailingowej Rockstar Games, zweryfikuj swój adres e-mail poprzez link wysłany do twojej skrzynki odbiorczej. Zmień swoje preferencje w dowolnym momencie w ustawieniach swojego konta.","ns_successfully_subscribed_title":"Pomyślnie zasubskrybowano","ns_yes_subscribe_text":"Tak, subskrybuj","previous_button_label":"Poprzednia strona z filmami","profile_silhouette_mugshot":"Zdjęcie sylwetki","rp_icon":"Poziom RP"},"pt-BR":{"aria_label_open_new_window":"(Abre em uma nova janela)","components_ratings_link_alt":"Classificação Indicativa: {rating}. Clique aqui para saber mais sobre sistemas de classificação indicativa.","components_track_list_title":"Lista de faixas","next_button_label":"Próxima página de vídeos","ns_already_subbed_details":"Você já está recebendo atualizações do newsletter neste endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_already_subbed_title":"Já está inscrito","ns_check_email_details":"Para confirmar sua inscrição na lista de e-mails da Rockstar Games, verifique seu endereço de e-mail pelo link enviado para o endereço que você usou para se inscrever.","ns_check_email_title":"Verifique seu e-mail","ns_confirm_after_register_details":"Você escolheu não receber e-mails de marketing quando criou a sua conta. Deseja se inscrever no nosso newsletter?","ns_confirm_after_register_title":"Confirme sua inscrição","ns_confirm_details":"Confirme que você deseja se inscrever no newsletter da Rockstar Games clicando no botão abaixo.","ns_confirm_title":"Confirme sua inscrição","ns_cta_button_text":"Inscrever-se","ns_cta_text":"Inscreva-se no nosso newsletter para receber informações sobre atualizações e anúncios, detalhes sobre eventos e ofertas especiais e mais da Rockstar Games e afiliadas.","ns_cta_title":"Inscreva-se na lista de e-mails da Rockstar Games","ns_cta_title_twitchdrops":"Não perca o próximo presente gratuito do GTA Online","ns_error_generic_details":"No momento, não é possível se inscrever no nosso newsletter usando este endereço de e-mail.","ns_error_generic_title":"Erro","ns_error_preferences_details":"No momento, não é possível se inscrever no nosso newsletter usando o seu endereço de e-mail. Mude suas preferências de e-mail a qualquer momento na página de configurações da sua conta ou tente novamente mais tarde.","ns_error_preferences_title":"Erro","ns_go_back_text":"Não, voltar","ns_manage_prefs_button_text":"Gerenciar preferências","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Você está inscrito na lista de e-mails da Rockstar Games e receberá atualizações periódicas no endereço de e-mail que usou para se inscrever. Gerencie suas preferências de e-mail a qualquer momento na página de configurações da sua conta.","ns_successfully_subscribed_title":"Inscrição efetuada","ns_yes_subscribe_text":"Sim, fazer inscrição","previous_button_label":"Página anterior de vídeos","profile_silhouette_mugshot":"Foto da silhueta","rp_icon":"Categoria de RP"},"ru-RU":{"aria_label_open_new_window":"(ссылка откроется в новом окне)","components_ratings_link_alt":"Рейтинг: {rating}. Нажмите, чтобы узнать больше о системе рейтинга","components_track_list_title":"Список песен","next_button_label":"Следующая страница с видео","ns_already_subbed_details":"Вы уже получаете письма по рассылке на этот адрес электронной почты. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_already_subbed_title":"Подписка уже оформлена","ns_check_email_details":"Чтобы подтвердить подписку на рассылку электронных писем Rockstar Games, пожалуйста, подтвердите адрес электронной почты, нажав на ссылку в письме, полученном на адрес электронной почты, который вы указали при оформлении подписки.","ns_check_email_title":"Проверьте электронную почту","ns_confirm_after_register_details":"Вы не дали согласия на получение рекламных писем во время создания учетной записи. Вы все еще хотите оформить подписку на нашу рассылку?","ns_confirm_after_register_title":"Подтвердите подписку","ns_confirm_details":"Пожалуйста, подтвердите, что вы хотите подписаться на рассылку электронных писем Rockstar Games, нажав на кнопку ниже.","ns_confirm_title":"Подтвердите подписку","ns_cta_button_text":"Оформить подписку","ns_cta_text":"Подпишитесь на нашу рассылку электронных писем, чтобы получать анонсы и информацию об обновлении игр, подробности о специальных событиях и скидках, а также другую информацию от Rockstar Games и наших партнеров.","ns_cta_title":"Подпишитесь на рассылку электронных писем Rockstar Games","ns_cta_title_twitchdrops":"Не пропустите следующий подарок в GTA Online","ns_error_generic_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент.","ns_error_generic_title":"Ошибка","ns_error_preferences_details":"Невозможно оформить подписку на нашу рассылку для этого адреса электронной почты в данный момент. Вы можете изменить настройки электронной почты на странице настроек учетной записи или повторить попытку позже.","ns_error_preferences_title":"Ошибка","ns_go_back_text":"Нет, вернуться","ns_manage_prefs_button_text":"Изменить настройки учетной записи","ns_ok_button_text":"OK","ns_successfully_subscribed_details":"Подписка на рассылку электронных писем Rockstar Games оформлена, и вы будете регулярно получать новости на адрес электронной почты, указанный при оформлении. Вы можете изменить настройки электронной почты в любое время на странице настроек учетной записи.","ns_successfully_subscribed_title":"Подписка оформлена","ns_yes_subscribe_text":"Да, подписаться","previous_button_label":"Предыдущая страница с видео","profile_silhouette_mugshot":"Силуэт игрока","rp_icon":"Категория опыта"},"zh-CN":{"aria_label_open_new_window":"（在新窗口中打开）","components_ratings_link_alt":"评级：{rating}。点击此处了解评级系统的更多详情。","components_track_list_title":"曲目列表","next_button_label":"下一页视频","ns_already_subbed_details":"您的电子邮件地址已在接收新闻通讯更新。您可以在账户设置页面随时修改电子邮件偏好。","ns_already_subbed_title":"已订阅","ns_check_email_details":"要确认您已订阅 Rockstar Games 电子邮件列表，请通过发送到您订阅时使用的电子邮件地址中的链接验证邮箱。","ns_check_email_title":"检查您的电子邮箱","ns_confirm_after_register_details":"您在创建账户时没有选择接收营销邮件。您还想要订阅我们的新闻通讯吗？","ns_confirm_after_register_title":"确认您的订阅","ns_confirm_details":"请点击下方按钮以确认您想订阅 Rockstar Games 新闻通讯。","ns_confirm_title":"确认您的订阅","ns_cta_button_text":"立即订阅","ns_cta_text":"订阅我们的电子邮件新闻通讯，以获得来自 Rockstar Games 以及我们附属公司的游戏公告和更新、特殊活动与优惠的信息，及更多内容。","ns_cta_title":"订阅 Rockstar Games 电子邮件列表","ns_cta_title_twitchdrops":"不要错过下一份 GTA 在线模式免费礼物","ns_error_generic_details":"我们目前无法用此电子邮件地址订阅新闻通讯。","ns_error_generic_title":"错误","ns_error_preferences_details":"我们目前无法用您的电子邮件地址订阅新闻通讯。请在账户设置页面中修改电子邮件偏好，或稍后再试。","ns_error_preferences_title":"错误","ns_go_back_text":"不，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好的","ns_successfully_subscribed_details":"您现已订阅 Rockstar Games 电子邮件列表，您将会在您订阅时使用的电子邮件地址中收到定期更新。您可以在账户设置页面随时管理电子邮件偏好。","ns_successfully_subscribed_title":"订阅成功","ns_yes_subscribe_text":"是，订阅","previous_button_label":"上一页视频","profile_silhouette_mugshot":"剪影面部照片","rp_icon":"声望值类别"},"zh-TW":{"aria_label_open_new_window":"（在新視窗開啟）","components_ratings_link_alt":"評分：{rating}。點擊此處以更加了解評分系統","components_track_list_title":"曲目清單","next_button_label":"下一個影片頁面","ns_already_subbed_details":"電子報更新已以此電子郵件地址寄送給您。您可以在帳戶設定頁面隨時變更您的電子郵件偏好設定。","ns_already_subbed_title":"已經訂閱","ns_check_email_details":"為了確認您的 Rockstar Games 電子郵件通知訂閱，請以寄送到您訂閱電子郵件地址的連結，驗證您的電子郵件地址。","ns_check_email_title":"檢查您的電子郵件","ns_confirm_after_register_details":"在建立帳戶時，您並沒有選擇可接收行銷電子郵件。您仍想訂閱我們的電子報？","ns_confirm_after_register_title":"確認您的訂閱","ns_confirm_details":"請點擊以下按鈕，以確認您想訂閱 Rockstar Games 電子報。","ns_confirm_title":"確認您的訂閱","ns_cta_button_text":"立刻訂閱","ns_cta_text":"訂閱我們的電子報，以獲得遊戲公告與更新、特殊活動與優惠的詳情，以及更多來自 Rockstar Games 與相關單位的各式資訊。","ns_cta_title":"訂閱 Rockstar Games 電子郵件通知","ns_cta_title_twitchdrops":"別錯過下一個免費的 GTA 線上模式好禮","ns_error_generic_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。","ns_error_generic_title":"錯誤","ns_error_preferences_details":"我們現在無法將此電子郵件地址訂閱到我們的電子報。在帳戶設定頁面變更您的電子郵件偏好設定，或稍後再試。","ns_error_preferences_title":"錯誤","ns_go_back_text":"否，返回","ns_manage_prefs_button_text":"管理偏好","ns_ok_button_text":"好","ns_successfully_subscribed_details":"您現在已訂閱 Rockstar Games 電子郵件通知，將會在訂閱的電子郵件地址收到定期更新。您可以在帳戶設定頁面隨時管理您的電子郵件偏好設定。","ns_successfully_subscribed_title":"成功訂閱","ns_yes_subscribe_text":"是的，訂閱","previous_button_label":"上一個影片頁面","profile_silhouette_mugshot":"罪犯檔案照剪影","rp_icon":"聲望值類別"}}'),
        Fr = n => (0, ba.withIntl)(n, Tr),
        Mr = Fr((n => {
          let {
            children: e,
            to: t = "#",
            reloadDocument: r = !1,
            alt: i = "",
            autoBlank: o = !1,
            role: s = "link",
            onClick: l = (() => {}),
            focused: d = !1,
            ...c
          } = n;
          const g = (0, a.useRef)(null),
            m = (0, ba.useIntl)(),
            p = !/^(https?|mailto):/i.test(t),
            h = /^#/.test(t),
            f = c?.target ?? (o ? "_blank" : "_self"),
            {
              ...A
            } = c;
          let u = "";
          if ("aria-label" in A && A["aria-label"] && (u = "_blank" === f ? `${A["aria-label"]} ${m.formatMessage(Sr.aria_label_open_new_window)}` : A["aria-label"]), (0, a.useEffect)((() => {
              d && g?.current && g.current.focus()
            }), [g?.current, d]), h) {
            const n = n => {
              n.preventDefault(), document?.querySelector(`[id='${t.replace("#","")}']`)?.scrollIntoView({
                behavior: "smooth",
                block: "center"
              }), l && l(n)
            };
            return (0, fa.jsxs)("a", {
              title: i,
              href: t,
              onClick: n,
              ...A,
              "aria-label": u,
              ref: g,
              role: s,
              children: [e, "_blank" === f && !u && (0, fa.jsx)("span", {
                className: Nr.visuallyHidden,
                children: m.formatMessage(Sr.aria_label_open_new_window)
              })]
            })
          }
          if (p) return (0, fa.jsxs)(pa.NavLink, {
            title: i,
            to: t,
            onClick: l,
            ...A,
            "aria-label": u,
            ref: g,
            reloadDocument: r,
            children: [e, "_blank" === f && !u && (0, fa.jsx)("span", {
              className: Nr.visuallyHidden,
              children: m.formatMessage(Sr.aria_label_open_new_window)
            })]
          });
          const v = Object.keys(A).filter((n => !["activeClassName", "key", "end"].includes(n))).reduce(((n, e) => ({
            ...n,
            [e]: c[e]
          })), {});
          return "function" == typeof v?.className && delete v.className, (0, fa.jsxs)("a", {
            href: t,
            title: i,
            onClick: l,
            target: f,
            ...v,
            "aria-label": u,
            ref: g,
            role: s,
            children: [e, "_blank" === f && !u && (0, fa.jsx)("span", {
              className: Nr.visuallyHidden,
              children: m.formatMessage(Sr.aria_label_open_new_window)
            })]
          })
        }));
      Object.defineProperty;
      var Gr = new Map,
        Pr = new WeakMap,
        jr = 0;

      function Hr(n, e, t = {}, a = undefined) {
        if (void 0 === window.IntersectionObserver && void 0 !== a) {
          const r = n.getBoundingClientRect();
          return e(a, {
            isIntersecting: a,
            target: n,
            intersectionRatio: "number" == typeof t.threshold ? t.threshold : 0,
            time: 0,
            boundingClientRect: r,
            intersectionRect: r,
            rootBounds: r
          }), () => {}
        }
        const {
          id: r,
          observer: i,
          elements: o
        } = function(n) {
          const e = function(n) {
            return Object.keys(n).sort().filter((e => void 0 !== n[e])).map((e => {
              return `${e}_${"root"===e?(t=n.root,t?(Pr.has(t)||(jr+=1,Pr.set(t,jr.toString())),Pr.get(t)):"0"):n[e]}`;
              var t
            })).toString()
          }(n);
          let t = Gr.get(e);
          if (!t) {
            const a = new Map;
            let r;
            const i = new IntersectionObserver((e => {
              e.forEach((e => {
                var t;
                const i = e.isIntersecting && r.some((n => e.intersectionRatio >= n));
                n.trackVisibility && void 0 === e.isVisible && (e.isVisible = i), null == (t = a.get(e.target)) || t.forEach((n => {
                  n(i, e)
                }))
              }))
            }), n);
            r = i.thresholds || (Array.isArray(n.threshold) ? n.threshold : [n.threshold || 0]), t = {
              id: e,
              observer: i,
              elements: a
            }, Gr.set(e, t)
          }
          return t
        }(t), s = o.get(n) || [];
        return o.has(n) || o.set(n, s), s.push(e), i.observe(n),
          function() {
            s.splice(s.indexOf(e), 1), 0 === s.length && (o.delete(n), i.unobserve(n)), 0 === o.size && (i.disconnect(), Gr.delete(r))
          }
      }
      a.Component;
      var Or = t(9460),
        Wr = {};
      Wr.styleTagTransform = Fa(), Wr.setAttributes = Ea(), Wr.insert = Da().bind(null, "head"), Wr.domAPI = Ba(), Wr.insertStyleElement = Na(), _a()(Or.A, Wr);
      const Lr = Or.A && Or.A.locals ? Or.A.locals : void 0;
      class qr extends a.Component {
        constructor(n) {
          super(n), this.state = {
            header: n.header ?? null,
            hidden: n.hidden ?? !1
          }
        }
        static getDerivedStateFromError(n) {
          return {
            error: {
              message: n.message ?? n.toString()
            }
          }
        }
        render() {
          return this?.state?.error?.message && this?.state?.hidden ? null : this?.state?.error?.message ? (0, fa.jsxs)("div", {
            className: Lr.errorMsg,
            children: [(0, fa.jsx)("h1", {
              children: this.state.header ?? "An error occurred."
            }), (0, fa.jsx)("span", {
              children: this.state.error.message
            })]
          }) : this.props.children
        }
      }
      var Ur = t(5300),
        Vr = {};
      Vr.styleTagTransform = Fa(), Vr.setAttributes = Ea(), Vr.insert = Da().bind(null, "head"), Vr.domAPI = Ba(), Vr.insertStyleElement = Na(), _a()(Ur.A, Vr);
      const Jr = Ur.A && Ur.A.locals ? Ur.A.locals : void 0,
        Qr = (0, ba.defineMessages)({
          components_ratings_link_alt: {
            id: "components_ratings_link_alt",
            defaultMessage: "Rating: {rating}. Click here learn more about rating systems"
          }
        });
      var Yr = t(5520);
      (0, ca.importAll)(t(6672));
      const Kr = function(n) {
        let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
          t = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        return function(a) {
          return (0, fa.jsx)(qr, {
            header: e,
            hidden: t,
            children: (0, fa.jsx)(n, {
              ...a
            })
          })
        }
      }(Fr((n => {
        let {
          descriptors: e = null,
          footer: r = null,
          href: i,
          img: o = null,
          titleSlug: s = null,
          style: l = {},
          className: d
        } = n;
        const [c, g] = (0, a.useState)(!1), {
          inView: m
        } = function({
          threshold: n,
          delay: e,
          trackVisibility: t,
          rootMargin: r,
          root: i,
          triggerOnce: o,
          skip: s,
          initialInView: l,
          fallbackInView: d,
          onChange: c
        } = {}) {
          var g;
          const [m, p] = a.useState(null), h = a.useRef(), [f, A] = a.useState({
            inView: !!l,
            entry: void 0
          });
          h.current = c, a.useEffect((() => {
            if (s || !m) return;
            let a;
            return a = Hr(m, ((n, e) => {
              A({
                inView: n,
                entry: e
              }), h.current && h.current(n, e), e.isIntersecting && o && a && (a(), a = void 0)
            }), {
              root: i,
              rootMargin: r,
              threshold: n,
              trackVisibility: t,
              delay: e
            }, d), () => {
              a && a()
            }
          }), [Array.isArray(n) ? n.toString() : n, m, i, r, o, s, t, d, e]);
          const u = null == (g = f.entry) ? void 0 : g.target,
            v = a.useRef();
          m || !u || o || s || v.current === u || (v.current = u, A({
            inView: !!l,
            entry: void 0
          }));
          const b = [p, f.inView, f.entry];
          return b.ref = b[0], b.inView = b[1], b.entry = b[2], b
        }({
          threshold: .6
        }), [p, h] = (0, a.useState)({
          ratingDescriptors: e,
          ratingFooter: r,
          ratingImg: o,
          ratingUrl: i
        }), {
          track: f
        } = (0, ea.useGtmTrack)(), A = (0, ba.useIntl)(), {
          data: u
        } = (0, ca.useQuery)(Yr.GameData, {
          variables: {
            titleSlug: s
          },
          skip: !s
        });
        if ((0, a.useEffect)((() => {
            u && h(u?.game)
          }), [u]), (0, a.useEffect)((() => {
            m && !c && p.img_rating && (f({
              event: "page_section_impression",
              element_placement: "rating"
            }), g(!0))
          }), [m]), !p.ratingImg) return null;
        const v = !!p.ratingDescriptors;
        return (0, fa.jsxs)("div", {
          className: [Jr.rating, v ? Jr.withDescriptors : Jr.withOutDescriptors, d || ""].join(" "),
          style: (0, ca.safeStyles)(l),
          "data-testId": "rating",
          children: [(0, fa.jsx)(Mr, {
            to: p.ratingUrl,
            target: "_blank",
            children: (0, fa.jsx)("img", {
              alt: A.formatMessage(Qr.components_ratings_link_alt, {
                rating: (b = p.ratingImg, b.replace(/_/g, " ").split(".")[0].toUpperCase())
              }),
              src: t(8194)(`./${p.ratingImg}`)
            })
          }), v && (0, fa.jsxs)("div", {
            className: Jr.text,
            children: [(0, fa.jsx)("p", {
              className: Jr.descriptors,
              dangerouslySetInnerHTML: {
                __html: p?.ratingDescriptors?.split(/<br\s?\/?>/).join(", ") || ""
              }
            }), p.ratingFooter && (0, fa.jsx)("hr", {}), p.ratingFooter && (0, fa.jsx)("p", {
              dangerouslySetInnerHTML: {
                __html: p.ratingFooter.replace(/ \//g, ", ")
              }
            })]
          })]
        });
        var b
      })));
      var $r = t(6490),
        Xr = {};
      Xr.styleTagTransform = Fa(), Xr.setAttributes = Ea(), Xr.insert = Da().bind(null, "head"), Xr.domAPI = Ba(), Xr.insertStyleElement = Na(), _a()($r.A, Xr);
      const Zr = $r.A && $r.A.locals ? $r.A.locals : void 0,
        ni = {
          rating_img: "pegi_rp.png",
          rating_link: "https://pegi.info/"
        },
        ei = {
          rating_img: "esrb_rp.svg",
          rating_link: "https://www.esrb.org/"
        },
        ti = (0, ba.createDevLocaleHook)({
          br: {
            rating_img: "vaci_rp.png",
            rating_link: "https://www.gov.br/mj/pt-br/assuntos/seus-direitos/classificacao-1"
          },
          de: {
            rating_img: "usk_rp.svg",
            rating_link: "http://www.usk.de"
          },
          es: ni,
          fr: ni,
          hans: ei,
          it: ni,
          jp: {
            rating_img: "cero_rp.png",
            rating_link: "https://www.cero.gr.jp/"
          },
          kr: ei,
          mx: ei,
          pl: ni,
          ru: ei,
          tw: ei,
          us: ei
        }),
        ai = (0, a.forwardRef)(((n, e) => {
          let {
            className: a = "",
            titleSlug: r = "",
            platforms: i = [{
              name: "PlayStation 5",
              url: "playstation.svg"
            }, {
              name: "Xbox Series X|S",
              url: "xbox.svg"
            }]
          } = n;
          const o = (0, ba.useIntl)(),
            s = ti(),
            l = "esrb_rp.svg" === s.rating_img ? "<p>May contain content inappropriate for children.</p>" : void 0,
            d = "esrb_rp.svg" === s.rating_img ? '<p>Visit <a href="https://esrb.org" target="_blank">esrb.org</a> for rating information.</p>' : void 0;
          return (0, fa.jsxs)("div", {
            className: [Zr.infoSectionFooter, a || ""].join(" "),
            ref: e,
            children: [(0, fa.jsx)("div", {
              className: Zr.rating,
              children: (0, fa.jsx)(Kr, {
                className: [Zr.mobileRating, Zr.rating, Zr.withoutBorder].join(" "),
                titleSlug: r || null,
                img: s.rating_img,
                descriptors: l,
                href: s.rating_link,
                footer: d
              })
            }), i.length && (0, fa.jsx)("div", {
              className: [Zr.platforms, Zr.hideOnMobile].join(" "),
              children: i.map((n => {
                let {
                  name: e,
                  url: a
                } = n;
                return (0, fa.jsx)("img", {
                  src: t(7958)(`./${a}`),
                  alt: e
                }, a)
              }))
            }), (0, fa.jsx)(Mr, {
              to: "/",
              "aria-label": o.formatMessage(wa.home_text),
              children: (0, fa.jsx)("img", {
                className: [Zr.logo, Zr.hideOnMobile].join(" "),
                src: t(5116),
                alt: o.formatMessage(wa.rockstar_games_logo_alt_text)
              })
            })]
          })
        }));
      ai.displayName = "InfoSectionFooter";
      const ri = ai;
      var ii = t(6024),
        oi = {};
      oi.styleTagTransform = Fa(), oi.setAttributes = Ea(), oi.insert = Da().bind(null, "head"), oi.domAPI = Ba(), oi.insertStyleElement = Na(), _a()(ii.A, oi);
      const si = ii.A && ii.A.locals ? ii.A.locals : void 0;
      r.gsap.registerPlugin(lt, Mt, na);
      const li = n => {
          let {
            footer: e
          } = n;
          const {
            timelines: t,
            setIsStandalone: i,
            isVideoPlayerActive: o,
            createYouTubePlayer: s,
            dialogPlayerRef: l,
            isModalOpen: d,
            setIsModalOpen: c,
            setIsVideoPlayerActive: g,
            resetVideo: m
          } = va(), p = (0, a.useRef)(), h = (0, a.useRef)(null), f = (0, a.useRef)(null), A = (0, a.useRef)(null), u = (0, a.useRef)(null), v = (0, a.useRef)(null), b = (0, a.useRef)(null), w = (0, a.useRef)(null), x = (0, a.useRef)(o), y = (0, a.useRef)(null), {
            loading: C,
            translation: k
          } = ma(), {
            track: _
          } = (0, ea.useGtmTrack)();
          (0, a.useEffect)((() => {
            r.gsap.set(window, {
              scrollTo: 0
            })
          }), []);
          const z = n => {
            const e = n.relatedTarget;
            h.current && (f?.current?.heroUIRef?.current.contains(e) ? r.gsap.set(window, {
              scrollTo: 0
            }) : h.current.contains(e) && r.gsap.set(window, {
              scrollTo: e
            }))
          };
          return (0, a.useEffect)((() => (i(!0), window.document.body.style.overflowY = "hidden", window.document.addEventListener("focusout", z), () => {
            window.document.body.style.overflowY = "unset", window.document.removeEventListener("focusout", z)
          })), []), (0, a.useEffect)((() => {
            x.current = o, p.current && p.current.paused(o)
          }), [o]), (0, a.useEffect)((() => (v.current && (p.current = Mt.create({
            content: v.current,
            smooth: .5,
            normalizeScroll: !0
          }), p.current.paused(!0)), () => {
            p.current?.kill()
          })), [v.current]), (0, a.useLayoutEffect)((() => {
            const n = r.gsap.matchMedia();
            t?.introTimeline && n.add({
              isVerticalLayout: "(max-width: 1279px)",
              isHorizontalLayout: "(min-width: 1280px)"
            }, (n => (t.introTimeline.eventCallback("onComplete", (() => {
              p.current && p.current.paused(!1);
              const n = f?.current?.heroUIRef?.current,
                e = f?.current?.heroImagesRefs?.current?.heroImagesRef?.current,
                t = lt.isTouch ? .75 : 100,
                a = lt.isTouch ? r.Expo.easeInOut : "none";
              w?.current?.progress(0).kill(), w.current = r.gsap.timeline({
                paused: !0,
                defaults: {
                  duration: t,
                  force3D: !0
                },
                scrollTrigger: {
                  trigger: h.current,
                  toggleActions: "play none none reverse",
                  toggleClass: `${si.active}`,
                  pin: !0,
                  start: lt.isTouch ? "top +=-1" : "top top",
                  end: lt.isTouch ? "+=50" : "+=300",
                  scrub: !lt.isTouch && .5,
                  invalidateOnRefresh: !0,
                  snap: !lt.isTouch && {
                    snapTo: 1,
                    duration: {
                      min: .05,
                      max: .3
                    },
                    ease: r.Power3.easeIn
                  },
                  onLeaveBack: () => {
                    r.gsap.set(b?.current, {
                      display: "none"
                    })
                  },
                  onToggle: n => {
                    p.current && (r.gsap.set(b?.current, {
                      display: n.isActive ? "none" : "block"
                    }), -1 !== n.direction && (x.current || (p.current.paused(!0), setTimeout((() => {
                      x.current || p?.current?.paused(!1)
                    }), 500))))
                  }
                },
                onComplete: () => {
                  1 === lt.isTouch && r.gsap.set(b?.current, {
                    display: "block"
                  })
                },
                onReverseComplete: () => {
                  1 === lt.isTouch && r.gsap.set(b?.current, {
                    display: "none"
                  })
                }
              }).set(h.current, {
                height: () => u?.current?.clientHeight,
                maxHeight: () => u?.current?.clientHeight
              }).fromTo(n, {
                opacity: 1
              }, {
                opacity: 0,
                duration: lt.isTouch ? .4 * t : .2 * t,
                ease: lt.isTouch ? r.Sine.easeInOut : "sine.easeInOut",
                immediateRender: !1
              }).fromTo(f?.current?.heroRef?.current, {
                backgroundSize: () => 10 * window.innerWidth + "px",
                maskSize: () => 10 * window.innerWidth + "px",
                backgroundPosition: () => lt.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`,
                maskPosition: () => lt.isTouch ? `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.2}px` : `${10*window.innerWidth*-.285}px ${10*window.innerWidth*-.3}px`
              }, {
                backgroundSize: () => A?.current?.children[0].clientWidth || A?.current?.children[0].scrollWidth || 0,
                maskSize: () => A?.current?.children[0].clientWidth || A?.current?.children[0].scrollWidth || 0,
                backgroundPosition: () => {
                  const n = A?.current?.children[0]?.getBoundingClientRect();
                  return `${n?.x??0}px ${n?.y??0}px`
                },
                maskPosition: () => {
                  const n = A?.current?.children[0]?.getBoundingClientRect();
                  return `${n?.x??0}px ${n?.y??0}px`
                },
                ease: lt.isTouch ? a : "power2.easeInOut"
              }, "<").to(e, {
                "--hero-image-width": lt.isTouch ? "110%" : "105%",
                "--hero-image-height": lt.isTouch ? "110%" : "105%",
                "--hero-image-offset-bottom": lt.isTouch ? "110%" : "105%",
                ease: lt.isTouch ? a : "none"
              }, "<").to(e, {
                opacity: 0,
                duration: .2 * t,
                ease: "power2.easeInOut"
              }, "<85%").fromTo(A.current, {
                opacity: 0,
                pointerEvents: "none"
              }, {
                opacity: 1,
                pointerEvents: "auto",
                duration: .2 * t,
                ease: lt.isTouch ? r.Power1.easeInOut : "power1.easeInOut"
              }, "<20%")
            }), []), () => {})))
          }), [o, t?.introTimeline, h?.current, f?.current?.heroRef?.current, f?.current?.heroUIRef?.current, f?.current?.heroImagesRef?.current, A?.current, b?.current]), (0, a.useEffect)((() => {
            d && l.current && s({
              target: l,
              id: "dialog"
            })
          }), [l, d]), (0, fa.jsxs)(fa.Fragment, {
            children: [(0, fa.jsx)(Cr, {
              showModal: d,
              onClose: () => (c(!1), g(!1), m(), void _({
                event: "takeover_close",
                element_placement: "info_section"
              })),
              dialogRef: y,
              children: d && (0, fa.jsx)("div", {
                className: si.videoDialog,
                children: (0, fa.jsx)("div", {
                  className: si.videoDialogContent,
                  ref: l
                })
              })
            }), (0, fa.jsxs)("div", {
              className: si.destinationPage,
              ref: v,
              children: [(0, fa.jsxs)("div", {
                className: si.destinationContainer,
                ref: h,
                children: [(0, fa.jsx)(br, {
                  ref: f,
                  className: si.hero,
                  standalone: !0
                }), (0, fa.jsx)("div", {
                  ref: u,
                  className: si.infoSectionContainer,
                  children: (0, fa.jsx)(Dr, {
                    blurb: C ? "" : k("d2.destDescription"),
                    buttonText: C ? "" : k("d2.playbackCTA"),
                    header: C ? "" : k("d2.destHeadline"),
                    className: si.infoSection,
                    ref: A
                  })
                })]
              }), (0, fa.jsx)(La, {
                showCloseButton: !0
              }), (0, fa.jsxs)("div", {
                ref: b,
                className: si.footerContainer,
                children: [(0, fa.jsx)(ri, {
                  platforms: [{
                    name: "PlayStation 5",
                    url: "playstation.svg"
                  }, {
                    name: "Xbox Series X|S",
                    url: "xbox.svg"
                  }]
                }), e]
              })]
            })]
          })
        },
        di = n => {
          let {
            footer: e
          } = n;
          return (0, fa.jsx)(ua, {
            children: (0, fa.jsx)("span", {
              children: (0, fa.jsx)(li, {
                footer: e
              })
            })
          })
        }
    },
    5300: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, '.rockstargames-sites-gtac3e95c84902dd75b827d3c95532e22dc{--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--text-light:#e8e8e8;--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;background-color:var(--black-200);border:1px solid var(--border-color);border-radius:var(--border-radius-sm);color:#000;display:grid;font-size:10px;margin:0 auto;max-width:270px;padding:var(--padding-sm)}@media (min-width:2560px){.rockstargames-sites-gtac3e95c84902dd75b827d3c95532e22dc{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-sites-gtac3e95c84902dd75b827d3c95532e22dc{--spacing-lg:2rem;--spacing-xl:4rem}}.rockstargames-sites-gtac3e95c84902dd75b827d3c95532e22dc.rockstargames-sites-gtab98963abfc7a63295bebc6c6d15b391a{grid-gap:var(--grid-gap-sm);grid-template-columns:72px 1fr}.rockstargames-sites-gtac3e95c84902dd75b827d3c95532e22dc.rockstargames-sites-gtab6339480b5fd086fb0c025930bfb7dcd{max-width:calc(72px + (2 * var(--padding-sm)))}.rockstargames-sites-gtac3e95c84902dd75b827d3c95532e22dc hr{background:var(--white-15);border:0;height:1px;margin:0;width:100%}.rockstargames-sites-gtac3e95c84902dd75b827d3c95532e22dc img{width:100%}.rockstargames-sites-gtababdd6ae2ff83f380dadc6982effa011{grid-gap:var(--grid-gap-xs);align-content:center;display:grid}.rockstargames-sites-gtababdd6ae2ff83f380dadc6982effa011 p{color:var(--white-100)!important;font-family:var(--font-family-body)!important;font-size:10px!important;line-height:1.25!important}.rockstargames-sites-gtababdd6ae2ff83f380dadc6982effa011 p:empty{display:none!important}.rockstargames-sites-gtababdd6ae2ff83f380dadc6982effa011 a{font-weight:700}', "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/Rating/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AAEA,yDCDA,2BAAA,CACA,gCAAA,CAGA,yBAAA,CACA,sBAAA,CAGA,uBAAA,CACA,oBAAA,CAGA,kBAAA,CACA,oBAAA,CACA,oBAAA,CAGA,gBAAA,CACA,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CAEA,gBAAA,CACA,8BAAA,CACA,6BAAA,CACA,8BAAA,CACA,oBAAA,CAEA,qBAAA,CACA,aAAA,CACA,uBAAA,CACA,uBAAA,CACA,0BAAA,CACA,yBAAA,CACA,mBAAA,CAEA,qBAAA,CAGA,0BAAA,CACA,8BAAA,CAEA,qBAAA,CACA,oBAAA,CAGA,4BAAA,CACA,gCAAA,CAGA,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAIA,iCAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CAGA,gCAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CAGA,+BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CAGA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,uBAAA,CAGA,sGAAA,CAMA,2EAAA,CAOA,4BAAA,CDzGI,iCAAA,CACA,oCAAA,CACA,qCAAA,CACA,UAAA,CALA,YAAA,CAMA,cAAA,CACA,aAAA,CAGA,eAAA,CAFA,yBAmGJ,CEHI,0BAAA,yDDpDE,qBD2DJ,CACF,CE3EI,yBAAA,yDDwBI,iBAAA,CAAoB,iBDwD1B,CACF,CA1GI,iHAEI,2BAAA,CADA,8BA6GR,CAzGI,iHACI,8CA2GR,CAjIA,4DA0BQ,0BAAA,CACA,QAAA,CAIA,UAAA,CAHA,QAAA,CAEA,UA0GR,CAxIA,6DAmCQ,UAwGR,CAzFA,yDACI,2BAAA,CACA,oBAAA,CACA,YA2FJ,CA9FA,2DAVI,gCAAA,CACA,6CAAA,CACA,wBAAA,CACA,0BA2GJ,CAzGI,iEACI,sBA2GR,CAvGA,2DAUQ,eAgGR",
        sourcesContent: ["@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.rating {\n    // We need to know vars for this.\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n\n    display: grid;\n\n    background-color: var(--black-200);\n    border: 1px solid var(--border-color);\n    border-radius: var(--border-radius-sm);\n    color: black;\n    font-size: 10px;\n    margin: 0 auto;\n    padding: var(--padding-sm);\n\n    max-width: 270px;\n\n    &.withDescriptors {\n        grid-template-columns: 72px 1fr;\n        grid-gap: var(--grid-gap-sm);\n    }\n\n    &.withOutDescriptors {\n        max-width: calc(72px + (2 * var(--padding-sm)));\n    }\n\n    hr {\n        background: var(--white-15);\n        border: 0;\n        margin: 0;\n\n        width: 100%;\n        height: 1px;\n    }\n\n    img {\n        width: 100%;\n    }\n}\n\n.desriptorTxt() {\n    color: var(--white-100);\n    font-family: var(--font-family-body);\n    font-size: 10px;\n    line-height: 1.25;\n\n    &:empty {\n        display: none;\n    }\n}\n\n.text {\n    grid-gap: var(--grid-gap-xs);\n    align-content: center;\n    display: grid;\n\n    p {\n        .desriptorTxt() !important;\n    }\n\n    a {\n        font-weight: 700;\n    }\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        rating: "rockstargames-sites-gtac3e95c84902dd75b827d3c95532e22dc",
        withDescriptors: "rockstargames-sites-gtab98963abfc7a63295bebc6c6d15b391a",
        withOutDescriptors: "rockstargames-sites-gtab6339480b5fd086fb0c025930bfb7dcd",
        text: "rockstargames-sites-gtababdd6ae2ff83f380dadc6982effa011"
      };
      const s = o
    },
    1835: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-gtaedb30438bec02a28ec1d06d071bcf836{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtaedb30438bec02a28ec1d06d071bcf836 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtaedb30438bec02a28ec1d06d071bcf836:focus,.rockstargames-sites-gtaedb30438bec02a28ec1d06d071bcf836:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtaedb30438bec02a28ec1d06d071bcf836.rockstargames-sites-gtac1ac4227ecc3c60c4a623f13dd4609b6{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtaedb30438bec02a28ec1d06d071bcf836.rockstargames-sites-gtac1ac4227ecc3c60c4a623f13dd4609b6 img{filter:invert()}.rockstargames-sites-gtaea8cf4797c830e5b5dad68b2ec814e67{clip:rect(0 0 0 0);border:0;height:1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./../../buildtime/components/src/dom/A/index.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,8HAEI,gCAAA,CACA,YC/OR,CDkPI,iHAEI,2BAAA,CADA,sBC/OR,CD8OI,qHAKQ,eChPZ,CAjEA,yDDwYI,kBAAA,CADA,QAAA,CAEA,UAAA,CACA,eAAA,CACA,SAAA,CACA,iBAAA,CACA,kBAAA,CACA,SCnUJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.visuallyHidden {\n    .visuallyHidden();\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        pillBtn: "rockstargames-sites-gtaedb30438bec02a28ec1d06d071bcf836",
        selected: "rockstargames-sites-gtac1ac4227ecc3c60c4a623f13dd4609b6",
        visuallyHidden: "rockstargames-sites-gtaea8cf4797c830e5b5dad68b2ec814e67"
      };
      const s = o
    },
    9460: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-gtad5c408a8b618087ef4bb452f96526b2b{grid-gap:1rem;align-content:center;background:#000;display:grid;grid-auto-rows:max-content;height:100%;justify-items:center;padding:.5rem}.rockstargames-sites-gtad5c408a8b618087ef4bb452f96526b2b,.rockstargames-sites-gtad5c408a8b618087ef4bb452f96526b2b h1{color:#fff}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/components/src/error/ErrorBoundarySimple/index.less"],
        names: [],
        mappings: "AAAA,yDAQI,aAAA,CAFA,oBAAA,CAHA,eAAA,CAEA,YAAA,CAIA,0BAAA,CARA,WAAA,CAMA,oBAAA,CALA,aAQJ,CAVA,qHAII,UASJ",
        sourcesContent: [".errorMsg {\n    height: 100%;\n    padding: 0.5rem;\n    background: black;\n    color: white;\n    display: grid;\n    align-content: center;\n    justify-items: center;\n    grid-gap: 1rem;\n    grid-auto-rows: max-content;\n    h1 {\n        color: white;\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        errorMsg: "rockstargames-sites-gtad5c408a8b618087ef4bb452f96526b2b"
      };
      const s = o
    },
    9210: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => m
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i),
        s = t(9908),
        l = t.n(s),
        d = new URL(t(4436), t.b),
        c = o()(r()),
        g = l()(d);
      c.push([n.id, `.rockstargames-sites-gtacbc3b8c083aafc89543ae84fce9049b8{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtacbc3b8c083aafc89543ae84fce9049b8 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtacbc3b8c083aafc89543ae84fce9049b8:focus,.rockstargames-sites-gtacbc3b8c083aafc89543ae84fce9049b8:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtacbc3b8c083aafc89543ae84fce9049b8.rockstargames-sites-gtaed57deeb23fd9dea2a75444a2345ad1c{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtacbc3b8c083aafc89543ae84fce9049b8.rockstargames-sites-gtaed57deeb23fd9dea2a75444a2345ad1c img{filter:invert()}.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb{background:var(--black-65,rgba(0,0,0,.65));border:1px solid var(--white-100,#fff);border-color:var(--white-15,hsla(0,0%,100%,.15));border-radius:50%;cursor:pointer;height:2rem;height:calc(var(--base-rem) * 2);padding:0;position:relative;transition:background .3s ease-in-out;width:2rem;width:calc(var(--base-rem) * 2)}.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb:after{background:url(${g}) no-repeat 50%/1rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb:focus{border:none;outline:none}@media (pointer:coarse){.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb:active{background:var(--white-100,#fff)}.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb:active:after{filter:invert(1)}}@media not ((pointer:coarse)){.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb:focus,.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb:hover{background:var(--white-100,#fff)}.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb:focus:after,.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb:hover:after{filter:invert(1)}}.rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb:after{background-size:calc(var(--base-rem) * 1)}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/CloseButton/index.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,8HAEI,gCAAA,CACA,YC/OR,CDkPI,iHAEI,2BAAA,CADA,sBC/OR,CD8OI,qHAKQ,eChPZ,CA/DA,yDDgMI,0CAAA,CACA,sCAAA,CC/LA,gDAAA,CDgMA,iBAAA,CAHA,cAAA,CAFA,WAAA,CCzLA,gCAAA,CD+LA,SAAA,CALA,iBAAA,CAMA,qCAAA,CARA,UAAA,CCzLA,+BA0EJ,CDwHI,+DAvBA,qEAAA,CAyBI,UAAA,CACA,aAAA,CACA,WAAA,CAGA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,0BAAA,CAJA,UClHR,CDyHI,+DAEI,WAAA,CADA,YCtHR,CDqQI,wBA1II,gEACI,gCCxHV,CDyHU,sEACI,gBCvHd,CACF,CDgQI,8BAtII,8HAEI,gCCvHV,CDwHU,0IACI,gBCrHd,CACF,CAxGI,+DACI,yCA0GR",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n@import '../../utils/constants/index.less';\n\n.closeBtn {\n    .iconBtn('x');\n    border-color: var(--white-15, rgba(255, 255, 255, 0.15));\n    width: @closeBtnHeight;\n    height: @closeBtnHeight;\n\n    &::after {\n        background-size: calc(var(--base-rem) * 1);\n    }\n}\n"],
        sourceRoot: ""
      }]), c.locals = {
        pillBtn: "rockstargames-sites-gtacbc3b8c083aafc89543ae84fce9049b8",
        selected: "rockstargames-sites-gtaed57deeb23fd9dea2a75444a2345ad1c",
        closeBtn: "rockstargames-sites-gtade842e9bb5e0157b44c45993257b03cb"
      };
      const m = c
    },
    6863: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => m
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i),
        s = t(9908),
        l = t.n(s),
        d = new URL(t(4436), t.b),
        c = o()(r()),
        g = l()(d);
      c.push([n.id, `.rockstargames-sites-gtaa1e71665830a3a2d55ca98f253009b76{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtaa1e71665830a3a2d55ca98f253009b76 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtaa1e71665830a3a2d55ca98f253009b76:focus,.rockstargames-sites-gtaa1e71665830a3a2d55ca98f253009b76:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtaa1e71665830a3a2d55ca98f253009b76.rockstargames-sites-gtad7c35fb4862124be8f904ba9e0ed3e23{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtaa1e71665830a3a2d55ca98f253009b76.rockstargames-sites-gtad7c35fb4862124be8f904ba9e0ed3e23 img{filter:invert()}@keyframes rockstargames-sites-gtac31ec9d1a3c6df56d328c5723b29c3c5{0%{opacity:0}to{opacity:1}}@keyframes rockstargames-sites-gtae146706c557ece715974526844030947{0%{opacity:1}to{opacity:0}}.rockstargames-sites-gtac34c5e39b029dfbc07c6cf926ec6c6bf[open]{align-items:center;animation:rockstargames-sites-gtac31ec9d1a3c6df56d328c5723b29c3c5 .3s ease-in-out;background-color:initial;background-color:#000;border:none;display:flex;height:100vh;justify-content:center;left:0;margin:0;max-height:unset;max-width:unset;overflow:hidden;padding:0;top:0;width:100%}@media (min-width:0px){.rockstargames-sites-gtac34c5e39b029dfbc07c6cf926ec6c6bf[open]{--base-rem:16px}}@media (min-width:768px){.rockstargames-sites-gtac34c5e39b029dfbc07c6cf926ec6c6bf[open]{--base-rem:18px}}@media (min-width:1024px){.rockstargames-sites-gtac34c5e39b029dfbc07c6cf926ec6c6bf[open]{--base-rem:20px}}@media (min-width:1920px){.rockstargames-sites-gtac34c5e39b029dfbc07c6cf926ec6c6bf[open]{--base-rem:22px}}.rockstargames-sites-gtac34c5e39b029dfbc07c6cf926ec6c6bf[open]::backdrop{animation:rockstargames-sites-gtac31ec9d1a3c6df56d328c5723b29c3c5 .3s ease-in-out;background-color:rgba(0,0,0,.8)}.rockstargames-sites-gtac34c5e39b029dfbc07c6cf926ec6c6bf[close]{animation:rockstargames-sites-gtae146706c557ece715974526844030947 ease-in-out .3s :local(ease-in-out) 3s}.rockstargames-sites-gtab124e7c39577f90390ae9e697500f0d3{height:100%;width:100%}.rockstargames-sites-gtabec32e64fef6bfb3e29ea8ab7b6b0497{background:none;border:none;margin:0;padding:0}.rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11{background:var(--black-65,rgba(0,0,0,.65));border:1px solid var(--white-100,#fff);border-radius:50%;cursor:pointer;height:2rem;padding:0;position:relative;position:absolute;right:var(--padding-sm,1rem);top:var(--padding-sm,1rem);transition:background .3s ease-in-out;width:2rem}.rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11:after{background:url(${g}) no-repeat 50%/1rem;content:"";display:block;height:100%;left:0;position:absolute;top:0;transition:.3s ease-in-out;width:100%}.rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11:focus{border:none;outline:none}@media (pointer:coarse){.rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11:active{background:var(--white-100,#fff)}.rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11:active:after{filter:invert(1)}}@media not ((pointer:coarse)){.rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11:focus,.rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11:hover{background:var(--white-100,#fff)}.rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11:focus:after,.rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11:hover:after{filter:invert(1)}}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/DialogModal/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,8HAEI,gCAAA,CACA,YC/OR,CDkPI,iHAEI,2BAAA,CADA,sBC/OR,CD8OI,qHAKQ,eChPZ,CA/DA,mEACI,GACI,SAiEN,CA/DE,GACI,SAiEN,CACF,CA9DA,mEACI,GACI,SAgEN,CA9DE,GACI,SAgEN,CACF,CA1DA,+DAgBI,kBAAA,CASA,iFAAA,CAjBA,wBAAA,CAcA,qBAAA,CAbA,WAAA,CAKA,YAAA,CAMA,YAAA,CALA,sBAAA,CAJA,MAAA,CACA,QAAA,CAMA,gBAAA,CADA,eAAA,CAMA,eAAA,CAVA,SAAA,CAHA,KAAA,CASA,UAyDJ,CC/DI,uBAAA,+DDZK,eA+EP,CACF,CClDI,yBAAA,+DD7BK,eAmFP,CACF,CCrCI,0BAAA,+DD9CK,eAuFP,CACF,CCxBI,0BAAA,+DD/DK,eA2FP,CACF,CArEI,yEAEI,iFAAA,CADA,+BAwER,CAnEA,gEACI,wGAqEJ,CAlEA,yDACI,WAAA,CACA,UAoEJ,CAjEA,yDAGI,eAAA,CACA,WAAA,CAFA,QAAA,CADA,SAsEJ,CAhEA,yDD0HI,0CAAA,CACA,sCAAA,CACA,iBAAA,CAHA,cAAA,CAFA,WAAA,CAMA,SAAA,CALA,iBAAA,CCtHA,iBAAA,CAEA,4BAAA,CADA,0BAAA,CD2HA,qCAAA,CARA,UCxCJ,CDiDI,+DAvBA,qEAAA,CAyBI,UAAA,CACA,aAAA,CACA,WAAA,CAGA,MAAA,CADA,iBAAA,CAEA,KAAA,CACA,0BAAA,CAJA,UC3CR,CDkDI,+DAEI,WAAA,CADA,YC/CR,CD8LI,wBA1II,gEACI,gCCjDV,CDkDU,sEACI,gBChDd,CACF,CDyLI,8BAtII,8HAEI,gCChDV,CDiDU,0IACI,gBC9Cd,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n@import '../../utils/constants/index.less';\n\n@keyframes fade-in {\n    from {\n        opacity: 0;\n    }\n    to {\n        opacity: 1;\n    }\n}\n\n@keyframes fade-out {\n    from {\n        opacity: 1;\n    }\n    to {\n        opacity: 0;\n    }\n}\n\n@modalFadeIn: fade-in 0.3s ease-in-out;\n@modalFadeOut: fade-out 0.3s ease-in-out;\n\n.dialogModal[open] {\n    .sm({--base-rem: 16px;});\n    .md({--base-rem: 18px;});\n    .lg({--base-rem: 20px;});\n    .xl({--base-rem: 22px;});\n\n    width: 100%;\n    height: 100vh;\n    background-color: transparent;\n    border: none;\n    top: 0;\n    left: 0;\n    margin: 0;\n    padding: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    max-width: unset;\n    max-height: unset;\n    width: 100%;\n    height: 100vh;\n\n    background-color: black;\n    overflow: hidden;\n\n    animation: @modalFadeIn;\n\n    &::backdrop {\n        background-color: rgba(0, 0, 0, 0.8);\n        animation: @modalFadeIn;\n    }\n}\n\n.dialogModal[close] {\n    animation: @modalFadeOut 3s ease-in-out;\n}\n\n.modalContent {\n    height: 100%;\n    width: 100%;\n}\n\n.modalButton {\n    padding: 0;\n    margin: 0;\n    background: none;\n    border: none;\n}\n\n.closeButton {\n    .iconBtn('x');\n    position: absolute;\n    top: var(--padding-sm, 1rem);\n    right: var(--padding-sm, 1rem);\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), c.locals = {
        pillBtn: "rockstargames-sites-gtaa1e71665830a3a2d55ca98f253009b76",
        selected: "rockstargames-sites-gtad7c35fb4862124be8f904ba9e0ed3e23",
        dialogModal: "rockstargames-sites-gtac34c5e39b029dfbc07c6cf926ec6c6bf",
        "fade-in": "rockstargames-sites-gtac31ec9d1a3c6df56d328c5723b29c3c5",
        "fade-out": "rockstargames-sites-gtae146706c557ece715974526844030947",
        modalContent: "rockstargames-sites-gtab124e7c39577f90390ae9e697500f0d3",
        modalButton: "rockstargames-sites-gtabec32e64fef6bfb3e29ea8ab7b6b0497",
        closeButton: "rockstargames-sites-gtab82fe66f86502f223983f4728ae48c11"
      };
      const m = c
    },
    8770: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909{--hero-image-height:100%;--hero-image-width:100%;--hero-image-offset-bottom:100%;--hero-image-offset-left:100%;--hero-image-object-position:50% 50%;--hero-image-height:124%;--hero-image-width:144%;--hero-image-object-position:50% 15%;height:100%;position:absolute;width:100%;z-index:1}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtae62d834027a5326f36643e3aad7affba{bottom:calc((var(--hero-image-height) - var(--hero-image-offset-bottom)) / -2);height:var(--hero-image-height);left:calc((var(--hero-image-width) - var(--hero-image-offset-left)) / -2);max-width:none;pointer-events:none;position:absolute;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:var(--hero-image-width);will-change:height,width,bottom}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtae62d834027a5326f36643e3aad7affba,.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtad96b40277531d639dc29c190f048e294{object-fit:cover;object-position:var(--hero-image-object-position)}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtad96b40277531d639dc29c190f048e294{height:100%;width:100%}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtaebf082558822e9a1fc01b9b7465943d7{display:none;position:absolute}@media (min-aspect-ratio:1.9){.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909{--hero-image-width:130%}}@media (min-aspect-ratio:2.1){.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909{--hero-image-width:110%}}@media (min-aspect-ratio:2.8){.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909{--hero-image-width:110%;--hero-image-height:110%;--hero-image-object-position:0 46%}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtae62d834027a5326f36643e3aad7affba.rockstargames-sites-gtabcaa4e04f2ac63cd7c3d953ee3cf65f3{bottom:0;height:100%;left:0;width:100%;z-index:1}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtad96b40277531d639dc29c190f048e294{display:none}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtaebf082558822e9a1fc01b9b7465943d7{display:block;height:50vh;left:25%;top:50%;transform:translate(-50%,-50%)}}@media (min-aspect-ratio:3.4){.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909{--hero-image-object-position:0 43%}}@media (min-aspect-ratio:4.5){.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909{--hero-image-object-position:0 40%}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtaebf082558822e9a1fc01b9b7465943d7{height:60vh}}@media (min-aspect-ratio:5.8){.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909{--hero-image-object-position:0 37%}}@media (max-width:768px) and (min-aspect-ratio:1.5){.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909{--hero-image-object-position:0 44%}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtae62d834027a5326f36643e3aad7affba.rockstargames-sites-gtabcaa4e04f2ac63cd7c3d953ee3cf65f3{bottom:0;height:100%;left:0;width:100%;z-index:1}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtad96b40277531d639dc29c190f048e294{display:none}.rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909 .rockstargames-sites-gtaebf082558822e9a1fc01b9b7465943d7{display:block;left:25%;top:10%;transform:translateX(-50%);width:30vw}}", "", {
        version: 3,
        sources: ["webpack://./src/components/Hero/components/LayeredImages/index.less"],
        names: [],
        mappings: "AAAA,yDACI,wBAAA,CACA,uBAAA,CACA,+BAAA,CACA,6BAAA,CACA,oCAAA,CACA,wBAAA,CACA,uBAAA,CACA,oCAAA,CAGA,WAAA,CAFA,iBAAA,CACA,UAAA,CAEA,SACJ,CAbA,kHAgBQ,8EAAA,CAMA,+BAAA,CAHA,yEAAA,CAKA,cAAA,CAGA,mBAAA,CAZA,iBAAA,CAaA,wBAAA,CAAA,qBAAA,CAAA,gBAAA,CALA,6BAAA,CAOA,+BAJR,CA1BA,oOAyBQ,gBAAA,CACA,iDAMR,CAhCA,kHAmCQ,WAAA,CADA,UAFR,CAhCA,kHAyCQ,YAAA,CACA,iBANR,CASI,8BAAA,yDACI,uBANN,CACF,CAQI,8BAAA,yDACI,uBALN,CACF,CAOI,8BAAA,yDACI,uBAAA,CACA,wBAAA,CACA,kCAJN,CACE,0KAOQ,QAAA,CAEA,WAAA,CAHA,MAAA,CAEA,UAAA,CAEA,SAJV,CANE,kHAcQ,YALV,CATE,kHAkBQ,aAAA,CAIA,WAAA,CAHA,QAAA,CACA,OAAA,CACA,8BALV,CACF,CASI,8BAAA,yDACI,kCANN,CACF,CAQI,8BAAA,yDACI,kCALN,CAIE,kHAIQ,WALV,CACF,CAQI,8BAAA,yDACI,kCALN,CACF,CAOI,oDAAA,yDACI,kCAJN,CAGE,0KAKQ,QAAA,CAEA,WAAA,CAHA,MAAA,CAEA,UAAA,CAEA,SAJV,CAJE,kHAYQ,YALV,CAPE,kHAgBQ,aAAA,CACA,QAAA,CACA,OAAA,CACA,0BAAA,CACA,UANV,CACF",
        sourcesContent: [".heroImages {\n    --hero-image-height: 100%;\n    --hero-image-width: 100%;\n    --hero-image-offset-bottom: 100%;\n    --hero-image-offset-left: 100%;\n    --hero-image-object-position: 50% 50%;\n    --hero-image-height: 124%;\n    --hero-image-width: 144%;\n    --hero-image-object-position: 50% 15%;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    z-index: 1;\n\n    .layeredImage {\n        position: absolute;\n        bottom: calc(\n            (var(--hero-image-height) - var(--hero-image-offset-bottom)) / -2\n        );\n        left: calc(\n            (var(--hero-image-width) - var(--hero-image-offset-left)) / -2\n        );\n        height: var(--hero-image-height);\n        width: var(--hero-image-width);\n        max-width: none;\n        object-fit: cover;\n        object-position: var(--hero-image-object-position);\n        pointer-events: none;\n        user-select: none;\n\n        will-change: height, width, bottom;\n    }\n\n    .logoVertical {\n        width: 100%;\n        height: 100%;\n        object-fit: cover;\n        object-position: var(--hero-image-object-position);\n    }\n\n    .logoHorizontal {\n        display: none;\n        position: absolute;\n    }\n\n    @media (min-aspect-ratio: 1.9) {\n        --hero-image-width: 130%;\n    }\n\n    @media (min-aspect-ratio: 2.1) {\n        --hero-image-width: 110%;\n    }\n\n    @media (min-aspect-ratio: 2.8) {\n        --hero-image-width: 110%;\n        --hero-image-height: 110%;\n        --hero-image-object-position: 0 46%;\n\n        .layeredImage.logo {\n            left: 0;\n            bottom: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n        }\n\n        .logoVertical {\n            display: none;\n        }\n\n        .logoHorizontal {\n            display: block;\n            left: 25%;\n            top: 50%;\n            transform: translate(-50%, -50%);\n            height: 50vh;\n        }\n    }\n\n    @media (min-aspect-ratio: 3.4) {\n        --hero-image-object-position: 0 43%;\n    }\n\n    @media (min-aspect-ratio: 4.5) {\n        --hero-image-object-position: 0 40%;\n\n        .logoHorizontal {\n            height: 60vh;\n        }\n    }\n\n    @media (min-aspect-ratio: 5.8) {\n        --hero-image-object-position: 0 37%;\n    }\n\n    @media (max-width: 768px) and (min-aspect-ratio: 1.5) {\n        --hero-image-object-position: 0 44%;\n\n        .layeredImage.logo {\n            left: 0;\n            bottom: 0;\n            width: 100%;\n            height: 100%;\n            z-index: 1;\n        }\n\n        .logoVertical {\n            display: none;\n        }\n\n        .logoHorizontal {\n            display: block;\n            left: 25%;\n            top: 10%;\n            transform: translateX(-50%);\n            width: 30vw;\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        heroImages: "rockstargames-sites-gtadfc038a5cb51f594e5a538d132d08909",
        layeredImage: "rockstargames-sites-gtae62d834027a5326f36643e3aad7affba",
        logoVertical: "rockstargames-sites-gtad96b40277531d639dc29c190f048e294",
        logoHorizontal: "rockstargames-sites-gtaebf082558822e9a1fc01b9b7465943d7",
        logo: "rockstargames-sites-gtabcaa4e04f2ac63cd7c3d953ee3cf65f3"
      };
      const s = o
    },
    9062: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-gtaf102d4d113977a9d1dae517af2f98d47{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtaf102d4d113977a9d1dae517af2f98d47 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtaf102d4d113977a9d1dae517af2f98d47:focus,.rockstargames-sites-gtaf102d4d113977a9d1dae517af2f98d47:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtaf102d4d113977a9d1dae517af2f98d47.rockstargames-sites-gtae0e36189e1065fccbc1765b05747e1d0{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtaf102d4d113977a9d1dae517af2f98d47.rockstargames-sites-gtae0e36189e1065fccbc1765b05747e1d0 img{filter:invert()}.rockstargames-sites-gtaee7daa085f52e6f228418057d0cd434c{display:grid;height:100vh;height:100dvh;left:0;padding:0 8px;pointer-events:none;position:absolute;top:0;width:100vw;will-change:opacity;z-index:2}@media (max-width:767px){.rockstargames-sites-gtaee7daa085f52e6f228418057d0cd434c{height:95vh;height:100dvh}}@media (min-aspect-ratio:5){.rockstargames-sites-gtaee7daa085f52e6f228418057d0cd434c{grid-gap:5vh;aspect-ratio:5;height:100%;margin:0 auto;width:auto}@supports not (aspect-ratio:5){.rockstargames-sites-gtaee7daa085f52e6f228418057d0cd434c{width:100%}}}.rockstargames-sites-gtaee7daa085f52e6f228418057d0cd434c .rockstargames-sites-gtaebdb4d02c9494a731f4638ad714c4c82{bottom:1rem;height:calc(max(5vw, 10vh) * .11);opacity:.6;width:auto}.rockstargames-sites-gtad26a2b386731f653809936b604d324a7,.rockstargames-sites-gtaee7daa085f52e6f228418057d0cd434c .rockstargames-sites-gtaebdb4d02c9494a731f4638ad714c4c82{left:50%;position:absolute;transform:translateX(-50%)}.rockstargames-sites-gtad26a2b386731f653809936b604d324a7{bottom:calc((max(5vw, 10vh) * .11) + 2rem)}@media (min-aspect-ratio:2.8){.rockstargames-sites-gtad26a2b386731f653809936b604d324a7{bottom:unset;left:75%;top:50%;transform:translate(-50%,-50%)}}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/Hero/components/UI/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,8HAEI,gCAAA,CACA,YC/OR,CDkPI,iHAEI,2BAAA,CADA,sBC/OR,CD8OI,qHAKQ,eChPZ,CAjEA,yDACI,YAAA,CAUA,YAAA,CACA,aAAA,CALA,MAAA,CAMA,aAAA,CAVA,mBAAA,CAEA,iBAAA,CACA,KAAA,CAIA,WAAA,CAKA,mBAAA,CAPA,SAsEJ,CCrCI,yBAAA,yDDvBI,WAAA,CACA,aAgEN,CACF,CA9DI,4BAAA,yDAKI,YAAA,CAJA,cAAA,CACA,WAAA,CAEA,aAAA,CADA,UAmEN,CA/DM,+BAAA,yDACI,UAkER,CACF,CACF,CAlGA,kHAwCQ,WAAA,CAFA,iCAAA,CAGA,UAAA,CAFA,UAoER,CA9DA,2KATQ,QAAA,CADA,iBAAA,CAEA,0BA4ER,CApEA,yDAEI,0CAkEJ,CA9DI,8BAAA,yDACI,YAAA,CACA,QAAA,CACA,OAAA,CACA,8BAiEN,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../../../utils/constants/index.less';\n\n.ui {\n    display: grid;\n\n    pointer-events: none;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 2;\n\n    width: 100vw;\n    height: 100vh;\n    height: 100dvh;\n    padding: 0 8px;\n\n    will-change: opacity;\n\n    .smMax({\n        height: 95vh;\n        height: 100dvh;\n    });\n\n    @media (min-aspect-ratio: 5) {\n        aspect-ratio: 5;\n        height: 100%;\n        width: auto;\n        margin: 0 auto;\n        grid-gap: 5vh;\n\n        @supports not (aspect-ratio: 5) {\n            width: 100%;\n        }\n    }\n\n    .scrollIndicator {\n        position: absolute;\n        left: 50%;\n        transform: translateX(-50%);\n        height: calc(@hero-ui-elements-size * 0.11);\n        width: auto;\n        bottom: 1rem;\n        opacity: 0.6;\n    }\n}\n\n.iconLogoWithText {\n    position: absolute;\n    bottom: calc((@hero-ui-elements-size * 0.11) + 2rem);\n    left: 50%;\n    transform: translateX(-50%);\n\n    @media (min-aspect-ratio: 2.8) {\n        bottom: unset;\n        left: 75%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        pillBtn: "rockstargames-sites-gtaf102d4d113977a9d1dae517af2f98d47",
        selected: "rockstargames-sites-gtae0e36189e1065fccbc1765b05747e1d0",
        ui: "rockstargames-sites-gtaee7daa085f52e6f228418057d0cd434c",
        scrollIndicator: "rockstargames-sites-gtaebdb4d02c9494a731f4638ad714c4c82",
        iconLogoWithText: "rockstargames-sites-gtad26a2b386731f653809936b604d324a7"
      };
      const s = o
    },
    5826: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-gtab2ba83d95e58e4e8ee5db947901752d6{--hero-background-color:#131319}@media (min-aspect-ratio:5){.rockstargames-sites-gtab2ba83d95e58e4e8ee5db947901752d6{aspect-ratio:5;height:100%;margin:0 auto;position:relative;width:auto}}", "", {
        version: 3,
        sources: ["webpack://./src/components/Hero/index.less"],
        names: [],
        mappings: "AAAA,yDACI,+BACJ,CACI,4BAAA,yDAEI,cAAA,CACA,WAAA,CAEA,aAAA,CAJA,iBAAA,CAGA,UAGN,CACF",
        sourcesContent: [".hero {\n    --hero-background-color: #131319;\n\n    @media (min-aspect-ratio: 5) {\n        position: relative;\n        aspect-ratio: 5;\n        height: 100%;\n        width: auto;\n        margin: 0 auto;\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        hero: "rockstargames-sites-gtab2ba83d95e58e4e8ee5db947901752d6"
      };
      const s = o
    },
    4239: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => z
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i),
        s = t(9908),
        l = t.n(s),
        d = new URL(t(6562), t.b),
        c = new URL(t(1117), t.b),
        g = new URL(t(9133), t.b),
        m = new URL(t(3458), t.b),
        p = new URL(t(5293), t.b),
        h = new URL(t(6962), t.b),
        f = new URL(t(8326), t.b),
        A = new URL(t(225), t.b),
        u = o()(r()),
        v = l()(d),
        b = l()(c),
        w = l()(g),
        x = l()(m),
        y = l()(p),
        C = l()(h),
        k = l()(f),
        _ = l()(A);
      u.push([n.id, `.rockstargames-sites-gtafea394adacd195a4079cd095bb6765d6{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtafea394adacd195a4079cd095bb6765d6 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtafea394adacd195a4079cd095bb6765d6:focus,.rockstargames-sites-gtafea394adacd195a4079cd095bb6765d6:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtafea394adacd195a4079cd095bb6765d6.rockstargames-sites-gtac8081639889a262aa10ca3480844c22e{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtafea394adacd195a4079cd095bb6765d6.rockstargames-sites-gtac8081639889a262aa10ca3480844c22e img{filter:invert()}.rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f{--secondary-logo-size:max(5vw,10vh);color:#fff;display:flex;filter:drop-shadow(0 1px calc(var(--secondary-logo-size) * .2) #000);height:var(--secondary-logo-size);-webkit-user-select:none;-moz-user-select:none;user-select:none;width:auto}@media (min-aspect-ratio:2.8){.rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f{--secondary-logo-size:30vh}}.rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f img{-webkit-user-drag:none;height:100%;width:auto}.rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f p{font-family:GTAArtDeco;font-size:calc(var(--secondary-logo-size) * .18)!important;font-weight:500;left:50%;letter-spacing:.25em;line-height:120%;line-height:120%!important;position:absolute;text-align:center;text-transform:uppercase;top:50%;transform:translate(-50%,-65%);-webkit-user-select:all;-moz-user-select:all;user-select:all;width:-moz-max-content;width:max-content}.rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f p:lang(ja_jp){font-family:NotoSansJP}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:400;src:url(${v}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:500;src:url(${b}) format("woff")}.rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f p:lang(ko_kr){font-family:NotoSansKR}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:400;src:url(${w}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:500;src:url(${x}) format("woff")}.rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f p:lang(zh_tw){font-family:NotoSansTC}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:400;src:url(${y}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:500;src:url(${C}) format("woff")}.rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f p:lang(zh_hans){font-family:NotoSansSC}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:400;src:url(${k}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:500;src:url(${_}) format("woff")}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/IconLogoWithText/index.less", "webpack://./src/utils/constants/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,8HAEI,gCAAA,CACA,YC/OR,CDkPI,iHAEI,2BAAA,CADA,sBC/OR,CD8OI,qHAKQ,eChPZ,CAjEA,yDACI,mCAAA,CAIA,UAAA,CAFA,YAAA,CAGA,oEAAA,CAIA,iCAAA,CAHA,wBAAA,CAAA,qBAAA,CAAA,gBAAA,CAEA,UAiEJ,CA9DI,8BAAA,yDACI,0BAiEN,CACF,CA/EA,6DAiBQ,sBAAA,CAGA,WAAA,CADA,UAiER,CApFA,2DCSI,sBAAA,CDiBI,0DAAA,CCbJ,eAAA,CDqBI,QAAA,CCvBJ,oBAAA,CACA,gBAAA,CDeI,0BAAA,CAKA,iBAAA,CAJA,iBAAA,CClBJ,wBAAA,CDuBI,OAAA,CAJA,8BAAA,CACA,uBAAA,CAAA,oBAAA,CAAA,eAAA,CAMA,sBAAA,CAAA,iBAgER,CC/BI,uEAGI,sBD+BR,CEkYI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFhYR,CE4XI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF1XR,CCxCI,uEAGI,sBDwCR,CEmXI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFjXR,CE6WI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF3WR,CCjDI,uEAGI,sBDiDR,CEoWI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFlWR,CE8VI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF5VR,CC1DI,yEAGI,sBD0DR,CEqVI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFnVR,CE+UI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF7UR",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../utils/constants/index.less';\n\n.logo {\n    --secondary-logo-size: @hero-ui-elements-size;\n\n    display: flex;\n\n    color: white;\n    filter: drop-shadow(0 1px calc(var(--secondary-logo-size) * 0.2) #000);\n    user-select: none;\n\n    width: auto;\n    height: var(--secondary-logo-size);\n\n    @media (min-aspect-ratio: 2.8) {\n        --secondary-logo-size: 30vh;\n    }\n\n    img {\n        -webkit-user-drag: none;\n\n        width: auto;\n        height: 100%;\n    }\n\n    p {\n        .ducksFont();\n\n        font-size: calc(var(--secondary-logo-size) * 0.18) !important;\n        line-height: 120% !important;\n        text-align: center;\n        transform: translate(-50%, -65%);\n        user-select: all;\n\n        position: absolute;\n        top: 50%;\n        left: 50%;\n\n        width: max-content;\n    }\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n@hero-ui-elements-size: max(5vw, 10vh);\n\n@zIndex-promo-banner: 110;\n@closeBtnMargin: calc(var(--base-rem) * 1.5);\n@closeBtnHeight: calc(var(--base-rem) * 2);\n@accentColor: #f8b3d5;\n\n.ducksFont(@size: '') {\n    font-family: 'GTAArtDeco';\n    text-transform: uppercase;\n    letter-spacing: 0.25em;\n    line-height: 120%;\n    font-weight: 500;\n\n    & when (@size = 'h1') {\n        font-size: 2rem;\n        letter-spacing: 0.1em;\n        line-height: 110%;\n\n        .smMax({\n            font-size: min(2rem, 8vw);\n        });\n        .xxl({\n            font-size: 1.8vw;\n        });\n    }\n    & when (@size = 'h2') {\n        font-size: max(14px, 2.15vmin);\n    }\n    & when (@size = 'h3') {\n        font-size: min(3.2vw, 14px);\n        letter-spacing: 0.2em;\n        .lg ({\n            font-size: min(2vw, 16px);\n        });;\n        .xl ({\n            font-size: 18px;\n        });;\n    }\n    & when (@size = 'p') {\n        font-size: 0.9rem;\n        line-height: 150%;\n        letter-spacing: 0.02em;\n        text-transform: none;\n        font-weight: 400;\n        color: #e8e8e8;\n\n        .xxl({\n            font-size: 0.8vw;\n        });\n    }\n    & when (@size = 'button') {\n        font-size: 0.9rem;\n        line-height: 100%;\n        letter-spacing: 0.1em;\n    }\n    & when (@size = 'buttonSecondary') {\n        font-size: 0.9rem;\n        line-height: 100%;\n        letter-spacing: 0.05em;\n        text-transform: none;\n\n        .xxl({\n            font-size: 0.8vw;\n            gap: 0.5vw;\n        });\n    }\n\n    &:lang(ja_jp) {\n        .loadFont(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n        .loadFont(NotoSansJP, 500, normal, Noto-Sans-JP-500);\n        font-family: 'NotoSansJP';\n    }\n\n    &:lang(ko_kr) {\n        .loadFont(NotoSansKR, 400, normal, Noto-Sans-KR-400);\n        .loadFont(NotoSansKR, 500, normal, Noto-Sans-KR-500);\n        font-family: 'NotoSansKR';\n    }\n\n    &:lang(zh_tw) {\n        .loadFont(NotoSansTC, 400, normal, Noto-Sans-TC-400);\n        .loadFont(NotoSansTC, 500, normal, Noto-Sans-TC-500);\n        font-family: 'NotoSansTC';\n    }\n\n    &:lang(zh_hans) {\n        .loadFont(NotoSansSC, 400, normal, Noto-Sans-SC-400);\n        .loadFont(NotoSansSC, 500, normal, Noto-Sans-SC-500);\n        font-family: 'NotoSansSC';\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), u.locals = {
        pillBtn: "rockstargames-sites-gtafea394adacd195a4079cd095bb6765d6",
        selected: "rockstargames-sites-gtac8081639889a262aa10ca3480844c22e",
        logo: "rockstargames-sites-gtac5b175fb90ff05de6bcb6813576ca12f"
      };
      const z = u
    },
    2677: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => z
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i),
        s = t(9908),
        l = t.n(s),
        d = new URL(t(6562), t.b),
        c = new URL(t(1117), t.b),
        g = new URL(t(9133), t.b),
        m = new URL(t(3458), t.b),
        p = new URL(t(5293), t.b),
        h = new URL(t(6962), t.b),
        f = new URL(t(8326), t.b),
        A = new URL(t(225), t.b),
        u = o()(r()),
        v = l()(d),
        b = l()(c),
        w = l()(g),
        x = l()(m),
        y = l()(p),
        C = l()(h),
        k = l()(f),
        _ = l()(A);
      u.push([n.id, `.rockstargames-sites-gtab0b87091cc0b540c763dfa89c7e70cdb{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtab0b87091cc0b540c763dfa89c7e70cdb img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtab0b87091cc0b540c763dfa89c7e70cdb:focus,.rockstargames-sites-gtab0b87091cc0b540c763dfa89c7e70cdb:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtab0b87091cc0b540c763dfa89c7e70cdb.rockstargames-sites-gtad12b2c4aba551689348a84d1a7da7b9c{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtab0b87091cc0b540c763dfa89c7e70cdb.rockstargames-sites-gtad12b2c4aba551689348a84d1a7da7b9c img{filter:invert()}.rockstargames-sites-gtaff0a4e54ba34184a330f2d984517782c{--font-family-body:"Chalet";--font-family-h:"ChaletComprime";--font-weight-regular:400;--font-weight-bold:700;--letter-spacing-body:0;--letter-spacing-h:0;--line-height-sm:1;--line-height-md:1.1;--line-height-lg:1.6;--black-200:#000;--black-100:#121212;--black-65:hsla(0,0%,7%,.65);--black-40:hsla(0,0%,7%,.4);--black-15:hsla(0,0%,7%,.15);--text-dark:#2d2d2d;--border-color:#2d2d2d;--white-100:#fff;--white-65:hsla(0,0%,100%,.65);--white-40:hsla(0,0%,100%,.4);--white-15:hsla(0,0%,100%,.15);--text-light:#e8e8e8;--focusring-blue:blue;--red:#e03232;--circoloco-red:#eb1818;--rockstar-gold:#fcaf17;--playstation-blue:#00439c;--microsoft-green:#387a26;--pc-legacy:#b2b2b2;--pc-enhanced:#beb279;--color-h:var(--white-100);--color-body:var(--text-light);--green-light:#c1f7bd;--green-dark:#81da85;--scroll-thumb-color:#7d7d7d;--scroll-track-color:transparent;--max-width-sm:640px;--max-width-md:1088px;--max-width-lg:1920px;--max-width-xl:2560px;--spacing-xxs:0.25rem;--spacing-xs:0.5rem;--spacing-sm:1rem;--spacing-md:2rem;--spacing-lg:4rem;--spacing-xl:8rem;--grid-gap-xxs:var(--spacing-xxs);--grid-gap-xs:var(--spacing-xs);--grid-gap-sm:var(--spacing-sm);--grid-gap-md:var(--spacing-md);--grid-gap-lg:var(--spacing-lg);--grid-gap-xl:var(--spacing-xl);--padding-xxs:var(--spacing-xxs);--padding-xs:var(--spacing-xs);--padding-sm:var(--spacing-sm);--padding-md:var(--spacing-md);--padding-lg:var(--spacing-lg);--padding-xl:var(--spacing-xl);--margin-xxs:var(--spacing-xxs);--margin-xs:var(--spacing-xs);--margin-sm:var(--spacing-sm);--margin-md:var(--spacing-md);--margin-lg:var(--spacing-lg);--margin-xl:var(--spacing-xl);--border-radius-xs:2px;--border-radius-sm:4px;--border-radius-md:8px;--border-radius-lg:16px;--gradient-overlay-bottom:linear-gradient(180.08deg,transparent 25%,rgba(0,0,0,.5) 65%,rgba(0,0,0,.6));--gradient-overlay-right:linear-gradient(270deg,rgba(0,0,0,.9),transparent);--promo-banner-z-index:11500;align-items:center;background-color:initial;display:flex;flex-direction:column;gap:3rem;justify-content:center;opacity:0;width:100%}@media (min-width:2560px){.rockstargames-sites-gtaff0a4e54ba34184a330f2d984517782c{--max-width-md:1440px}}@media (max-width:767px){.rockstargames-sites-gtaff0a4e54ba34184a330f2d984517782c{--spacing-lg:2rem;--spacing-xl:4rem}}@media (min-width:768px){.rockstargames-sites-gtaff0a4e54ba34184a330f2d984517782c{gap:4rem}}@media (min-width:1280px){.rockstargames-sites-gtaff0a4e54ba34184a330f2d984517782c{flex-direction:row}}@media (min-width:1920px){.rockstargames-sites-gtaff0a4e54ba34184a330f2d984517782c{gap:6rem}}@media (min-width:2560px){.rockstargames-sites-gtaff0a4e54ba34184a330f2d984517782c{gap:var(--grid-gap-xl)}}.rockstargames-sites-gtac124245163a75b1c26d87831c89e2f7c{aspect-ratio:4116/2910;height:auto;opacity:0;visibility:hidden;width:clamp(35vw,50vh,85%)}@media (min-width:1280px){.rockstargames-sites-gtac124245163a75b1c26d87831c89e2f7c{max-width:25rem;width:clamp(25vw,50vh,40%)}}@media (min-width:2560px){.rockstargames-sites-gtac124245163a75b1c26d87831c89e2f7c{max-width:unset;width:20vw}}.rockstargames-sites-gtac9099ca97ec9a8ff35a7ec7c28fa730e{display:grid;flex:1 1 0;flex-direction:column;gap:.6rem;height:-moz-fit-content;height:fit-content;justify-content:center;max-width:var(--max-width-sm)}@media (min-width:768px){.rockstargames-sites-gtac9099ca97ec9a8ff35a7ec7c28fa730e{align-items:normal;justify-content:normal}}@media (max-width:1279px){.rockstargames-sites-gtac9099ca97ec9a8ff35a7ec7c28fa730e{gap:var(--grid-gap-lg);justify-items:center}}@media (min-width:2560px){.rockstargames-sites-gtac9099ca97ec9a8ff35a7ec7c28fa730e{gap:1vw;max-width:30vw}}.rockstargames-sites-gtac57674ad6381f670a3a8d568522ee25b{display:grid;gap:var(--grid-gap-sm)}@media (max-width:1279px){.rockstargames-sites-gtac57674ad6381f670a3a8d568522ee25b{text-align:center}}@media (min-width:2560px){.rockstargames-sites-gtac57674ad6381f670a3a8d568522ee25b{gap:1vw;max-width:30vw}}h1.rockstargames-sites-gtad718c77b847c5ca7d4271b6d1d56ec8b{font-family:GTAArtDeco;font-size:2rem;font-weight:500;letter-spacing:.25em;letter-spacing:.1em;line-height:120%;line-height:110%;text-transform:uppercase}@media (max-width:767px){h1.rockstargames-sites-gtad718c77b847c5ca7d4271b6d1d56ec8b{font-size:min(2rem,8vw)}}@media (min-width:2560px){h1.rockstargames-sites-gtad718c77b847c5ca7d4271b6d1d56ec8b{font-size:1.8vw}}h1.rockstargames-sites-gtad718c77b847c5ca7d4271b6d1d56ec8b:lang(ja_jp){font-family:NotoSansJP}h1.rockstargames-sites-gtad718c77b847c5ca7d4271b6d1d56ec8b:lang(ko_kr){font-family:NotoSansKR}h1.rockstargames-sites-gtad718c77b847c5ca7d4271b6d1d56ec8b:lang(zh_tw){font-family:NotoSansTC}h1.rockstargames-sites-gtad718c77b847c5ca7d4271b6d1d56ec8b:lang(zh_hans){font-family:NotoSansSC}.rockstargames-sites-gtae3b7dacbddb0856ad18292ba432919ce{color:#e8e8e8;font-family:GTAArtDeco;font-size:.9rem;font-weight:500;font-weight:400;letter-spacing:.25em;letter-spacing:.02em;line-height:120%;line-height:150%;text-transform:uppercase;text-transform:none}@media (min-width:2560px){.rockstargames-sites-gtae3b7dacbddb0856ad18292ba432919ce{font-size:.8vw}}.rockstargames-sites-gtae3b7dacbddb0856ad18292ba432919ce:lang(ja_jp){font-family:NotoSansJP}.rockstargames-sites-gtae3b7dacbddb0856ad18292ba432919ce:lang(ko_kr){font-family:NotoSansKR}.rockstargames-sites-gtae3b7dacbddb0856ad18292ba432919ce:lang(zh_tw){font-family:NotoSansTC}.rockstargames-sites-gtae3b7dacbddb0856ad18292ba432919ce:lang(zh_hans){font-family:NotoSansSC}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34{align-items:center;align-self:normal;background-color:var(--white-100);border:none;border-radius:var(--border-radius-md);color:var(--black-100);cursor:pointer;display:flex;font-family:GTAArtDeco;font-size:.9rem;font-weight:500;gap:var(--grid-gap-xs);height:4rem;justify-content:center;letter-spacing:.25em;letter-spacing:.1em;line-height:120%;line-height:100%;margin:0;max-width:400px;padding:1rem 1.2rem;text-transform:uppercase;width:100%}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:lang(ja_jp){font-family:NotoSansJP}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:400;src:url(${v}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:500;src:url(${b}) format("woff")}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:lang(ko_kr){font-family:NotoSansKR}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:400;src:url(${w}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:500;src:url(${x}) format("woff")}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:lang(zh_tw){font-family:NotoSansTC}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:400;src:url(${y}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:500;src:url(${C}) format("woff")}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:lang(zh_hans){font-family:NotoSansSC}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:400;src:url(${k}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:500;src:url(${_}) format("woff")}@media (min-width:1280px){.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34{background-color:initial;border:none;color:var(--white-100,#fff);cursor:pointer;font-family:GTAArtDeco;font-size:.9rem;font-weight:500;gap:var(--grid-gap-xs);letter-spacing:.25em;letter-spacing:.05em;line-height:120%;line-height:100%;max-width:-moz-fit-content;max-width:fit-content;padding:1rem 0;text-transform:uppercase;text-transform:none;transition:color .2s ease-in-out}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:lang(ja_jp){font-family:NotoSansJP}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:400;src:url(${v}) format("woff")}@font-face{font-family:NotoSansJP;font-style:normal;font-weight:500;src:url(${b}) format("woff")}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:lang(ko_kr){font-family:NotoSansKR}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:400;src:url(${w}) format("woff")}@font-face{font-family:NotoSansKR;font-style:normal;font-weight:500;src:url(${x}) format("woff")}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:lang(zh_tw){font-family:NotoSansTC}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:400;src:url(${y}) format("woff")}@font-face{font-family:NotoSansTC;font-style:normal;font-weight:500;src:url(${C}) format("woff")}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:lang(zh_hans){font-family:NotoSansSC}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:400;src:url(${k}) format("woff")}@font-face{font-family:NotoSansSC;font-style:normal;font-weight:500;src:url(${_}) format("woff")}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:hover{color:#f8b3d5}.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34:hover .rockstargames-sites-gtaf102dd5667ea10593e011a0f5cca1ea5{fill:#f8b3d5}}@media (min-width:1280px) and (min-width:2560px){.rockstargames-sites-gtae32464f8e81db047a2b9752ad9f10c34{font-size:.8vw;gap:.5vw}}.rockstargames-sites-gtaf102dd5667ea10593e011a0f5cca1ea5{fill:var(--black-100);height:1rem;width:1rem}@media (min-width:1280px){.rockstargames-sites-gtaf102dd5667ea10593e011a0f5cca1ea5{fill:var(--white-100,#fff);transition:fill .2s ease-in-out}}@media (min-width:2560px){.rockstargames-sites-gtaf102dd5667ea10593e011a0f5cca1ea5{height:.9vw;width:.9vw}}.rockstargames-sites-gtacd741e4221e11994aecf7a92b11686b2{align-items:center;display:flex;flex-direction:row;gap:var(--grid-gap-sm)}@media (max-width:1279px){.rockstargames-sites-gtacd741e4221e11994aecf7a92b11686b2{justify-content:center}}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/InfoSection/index.less", "webpack://./../../buildtime/legacy-design-system/less/gen9-vars.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less", "webpack://./src/utils/constants/index.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC7QJ,CDyPA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC5QR,CDgRI,8HAEI,gCAAA,CACA,YC9QR,CDiRI,iHAEI,2BAAA,CADA,sBC9QR,CD6QI,qHAKQ,eC/QZ,CAjCA,yDCFA,2BAAA,CACA,gCAAA,CAGA,yBAAA,CACA,sBAAA,CAGA,uBAAA,CACA,oBAAA,CAGA,kBAAA,CACA,oBAAA,CACA,oBAAA,CAGA,gBAAA,CACA,mBAAA,CACA,4BAAA,CACA,2BAAA,CACA,4BAAA,CACA,mBAAA,CACA,sBAAA,CAEA,gBAAA,CACA,8BAAA,CACA,6BAAA,CACA,8BAAA,CACA,oBAAA,CAEA,qBAAA,CACA,aAAA,CACA,uBAAA,CACA,uBAAA,CACA,0BAAA,CACA,yBAAA,CACA,mBAAA,CAEA,qBAAA,CAGA,0BAAA,CACA,8BAAA,CAEA,qBAAA,CACA,oBAAA,CAGA,4BAAA,CACA,gCAAA,CAGA,oBAAA,CACA,qBAAA,CACA,qBAAA,CACA,qBAAA,CAIA,qBAAA,CACA,mBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CACA,iBAAA,CAIA,iCAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CACA,+BAAA,CAGA,gCAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CACA,8BAAA,CAGA,+BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CACA,6BAAA,CAGA,sBAAA,CACA,sBAAA,CACA,sBAAA,CACA,uBAAA,CAGA,sGAAA,CAMA,2EAAA,CAOA,4BAAA,CDzGI,kBAAA,CAIA,wBAAA,CANA,YAAA,CACA,qBAAA,CAGA,QAAA,CADA,sBAAA,CAIA,SAAA,CAEA,UAsIJ,CEvCI,0BAAA,yDDpDE,qBD+FJ,CACF,CE/GI,yBAAA,yDDwBI,iBAAA,CAAoB,iBD4F1B,CACF,CExGI,yBAAA,yDFtCI,QAkJN,CACF,CAjJI,0BAAA,yDACI,kBAoJN,CACF,CE9EI,0BAAA,yDFnEI,QAqJN,CACF,CEjEI,0BAAA,yDFlFI,sBAuJN,CACF,CApJA,yDAII,sBAAA,CAGA,WAAA,CANA,SAAA,CACA,iBAAA,CAIA,0BAqJJ,CAlJI,0BAAA,yDAEI,eAAA,CADA,0BAsJN,CACF,CEnFI,0BAAA,yDF/DI,eAAA,CACA,UAsJN,CACF,CAnJA,yDACI,YAAA,CAGA,UAAA,CAFA,qBAAA,CAGA,SAAA,CAGA,uBAAA,CAAA,kBAAA,CALA,sBAAA,CAIA,6BAqJJ,CExJI,yBAAA,yDFOI,kBAAA,CACA,sBAqJN,CACF,CAnJI,0BAAA,yDAEI,sBAAA,CADA,oBAuJN,CACF,CE9GI,0BAAA,yDFpCI,OAAA,CADA,cAwJN,CACF,CApJA,yDACI,YAAA,CACA,sBAsJJ,CApJI,0BAAA,yDACI,iBAuJN,CACF,CE7HI,0BAAA,yDFtBI,OAAA,CADA,cAyJN,CACF,CArJA,2DGjFI,sBAAA,CAOI,cAAA,CAHJ,eAAA,CAFA,oBAAA,CAMI,mBAAA,CALJ,gBAAA,CAMI,gBAAA,CARJ,wBH+OJ,CEhNI,yBAAA,2DCpBQ,uBHwOV,CACF,CElJI,0BAAA,2DCpFQ,eH0OV,CACF,CG9LI,uEAGI,sBH8LR,CG3LI,uEAGI,sBHuMR,CGpMI,uEAGI,sBHgNR,CG7MI,yEAGI,sBHyNR,CArNA,yDGhDQ,aAAA,CArCJ,sBAAA,CAgCI,eAAA,CA5BJ,eAAA,CAgCI,eAAA,CAlCJ,oBAAA,CAgCI,oBAAA,CA/BJ,gBAAA,CA8BI,gBAAA,CAhCJ,wBAAA,CAkCI,mBHgSR,CEhOI,0BAAA,yDC3DQ,cH+RV,CACF,CG5QI,qEAGI,sBH4QR,CGzQI,qEAGI,sBHqRR,CGlRI,qEAGI,sBH8RR,CG3RI,uEAGI,sBHuSR,CA/RA,yDAMI,kBAAA,CADA,iBAAA,CAIA,iCAAA,CACA,WAAA,CACA,qCAAA,CACA,sBAAA,CACA,cAAA,CAVA,YAAA,CG5FA,sBAAA,CA4CI,eAAA,CAxCJ,eAAA,CH4FA,sBAAA,CAWA,WAAA,CAdA,sBAAA,CG3FA,oBAAA,CA4CI,mBAAA,CA3CJ,gBAAA,CA0CI,gBAAA,CH2DJ,QAAA,CAIA,eAAA,CALA,mBAAA,CGtGA,wBAAA,CHyGA,UAmTJ,CGjWI,qEAGI,sBHiWR,CEgEI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF9DR,CE0DI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFxDR,CG1WI,qEAGI,sBH0WR,CEiDI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF/CR,CE2CI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFzCR,CGnXI,qEAGI,sBHmXR,CEkCI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFhCR,CE4BI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF1BR,CG5XI,uEAGI,sBH4XR,CEmBI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFjBR,CEaI,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFXR,CA3WI,0BAAA,yDAEI,wBAAA,CACA,WAAA,CACA,2BAAA,CACA,cAAA,CGnHJ,sBAAA,CAiDI,eAAA,CA7CJ,eAAA,CHgHI,sBAAA,CGlHJ,oBAAA,CAiDI,oBAAA,CAhDJ,gBAAA,CA+CI,gBAAA,CHqEA,0BAAA,CAAA,qBAAA,CAFA,cAAA,CGpHJ,wBAAA,CAmDI,mBAAA,CHqEA,gCAoXN,CGjbE,qEAGI,sBHibN,CEhBE,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFkBN,CEtBE,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFwBN,CG1bE,qEAGI,sBH0bN,CE/BE,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFiCN,CErCE,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFuCN,CGncE,qEAGI,sBHmcN,CE9CE,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFgDN,CEpDE,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFsDN,CG5cE,uEAGI,sBH4cN,CE7DE,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DF+DN,CEnEE,WACI,sBAAA,CACA,iBAAA,CACA,eAAA,CACA,0DFqEN,CA9aM,+DACI,aAgbV,CAjbM,wHAIQ,YAgbd,CACF,CE7cI,iDAAA,yDC5CQ,cAAA,CACA,QH6fV,CACF,CAjbA,yDACI,qBAAA,CAGA,WAAA,CADA,UAmbJ,CAhbI,0BAAA,yDAEI,0BAAA,CADA,+BAobN,CACF,CE9dI,0BAAA,yDF+CI,WAAA,CADA,UAqbN,CACF,CAjbA,yDAGI,kBAAA,CAFA,YAAA,CACA,kBAAA,CAEA,sBAmbJ,CAjbI,0BAAA,yDACI,sBAobN,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../utils/constants/index.less';\n@import '@rsgweb/legacy-design-system/less/mixins.less';\n\n.infoSection {\n    @import '@rsgweb/legacy-design-system/less/gen9-vars.less';\n\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    gap: 3rem;\n\n    background-color: transparent;\n    opacity: 0;\n\n    width: 100%;\n\n    .md ({\n        gap: 4rem;\n    });;\n    @media (min-width: 1280px) {\n        flex-direction: row;\n        // align-items: start;\n    }\n    .xl ({\n        gap: 6rem;\n    });;\n    .xxl ({\n        gap: var(--grid-gap-xl);\n    });;\n}\n\n.logo {\n    opacity: 0;\n    visibility: hidden;\n\n    aspect-ratio: 4116/2910;\n\n    width: clamp(35vw, 50vh, 85%);\n    height: auto;\n\n    @media (min-width: 1280px) {\n        width: clamp(25vw, 50vh, 40%);\n        max-width: 25rem;\n    }\n\n    .xxl({\n        max-width: unset;\n        width: 20vw;\n    });\n}\n\n.content {\n    display: grid;\n    flex-direction: column;\n    justify-content: center;\n    flex: 1 1 0;\n    gap: 0.6rem;\n\n    max-width: var(--max-width-sm);\n    height: fit-content;\n\n    .md({\n        align-items: normal;\n        justify-content: normal;\n    });\n\n    @media (max-width: 1279px) {\n        justify-items: center;\n        gap: var(--grid-gap-lg);\n    }\n\n    .xxl({\n        max-width: 30vw;\n        gap: 1vw\n    });\n}\n\n.text {\n    display: grid;\n    gap: var(--grid-gap-sm);\n\n    @media (max-width: 1279px) {\n        text-align: center;\n    }\n\n    .xxl({\n        max-width: 30vw;\n        gap: 1vw\n    });\n}\n\nh1.header {\n    .ducksFont('h1');\n}\n\n.blurb {\n    .ducksFont('p');\n}\n\n.button {\n    .ducksFont('button');\n\n    display: flex;\n    justify-content: center;\n    align-self: normal;\n    align-items: center;\n    gap: var(--grid-gap-xs);\n\n    background-color: var(--white-100);\n    border: none;\n    border-radius: var(--border-radius-md);\n    color: var(--black-100);\n    cursor: pointer;\n    padding: 1rem 1.2rem;\n    margin: 0;\n\n    width: 100%;\n    height: 4rem;\n    max-width: 400px;\n\n    @media (min-width: 1280px) {\n        .ducksFont('buttonSecondary');\n        background-color: transparent;\n        border: none;\n        color: var(--white-100, #fff);\n        cursor: pointer;\n        gap: var(--grid-gap-xs);\n        padding: 1rem 0;\n\n        max-width: fit-content;\n\n        transition: color 0.2s ease-in-out;\n\n        &:hover {\n            color: @accentColor;\n\n            .buttonIcon {\n                fill: @accentColor;\n            }\n        }\n    }\n}\n\n.buttonIcon {\n    fill: var(--black-100);\n\n    width: 1rem;\n    height: 1rem;\n\n    @media (min-width: 1280px) {\n        transition: fill 0.2s ease-in-out;\n        fill: var(--white-100, #fff);\n    }\n\n    .xxl ({\n        width: 0.9vw;\n        height: 0.9vw;\n    });;\n}\n\n.platforms {\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    gap: var(--grid-gap-sm);\n\n    @media (max-width: 1279px) {\n        justify-content: center;\n    }\n}\n", "// Font Family\n--font-family-body: 'Chalet';\n--font-family-h: 'ChaletComprime';\n\n// Font Weight\n--font-weight-regular: 400;\n--font-weight-bold: 700;\n\n// Letter Spacing\n--letter-spacing-body: 0;\n--letter-spacing-h: 0;\n\n// Line Height\n--line-height-sm: 1;\n--line-height-md: 1.1;\n--line-height-lg: 1.6;\n\n// Colors\n--black-200: #000000;\n--black-100: #121212;\n--black-65: rgba(18, 18, 18, 0.65);\n--black-40: rgba(18, 18, 18, 0.4);\n--black-15: rgba(18, 18, 18, 0.15);\n--text-dark: #2d2d2d;\n--border-color: #2d2d2d;\n\n--white-100: #ffffff;\n--white-65: rgba(255, 255, 255, 0.65);\n--white-40: rgba(255, 255, 255, 0.4);\n--white-15: rgba(255, 255, 255, 0.15);\n--text-light: #e8e8e8;\n\n--focusring-blue: blue;\n--red: #e03232;\n--circoloco-red: #eb1818;\n--rockstar-gold: #fcaf17;\n--playstation-blue: #00439c;\n--microsoft-green: #387a26;\n--pc-legacy: #b2b2b2;\n/* #if PCALT */\n--pc-enhanced: #beb279;\n/* #endif */\n\n--color-h: var(--white-100);\n--color-body: var(--text-light);\n\n--green-light: #c1f7bd;\n--green-dark: #81da85;\n\n// Scrollbar Colors\n--scroll-thumb-color: #7d7d7d;\n--scroll-track-color: transparent;\n\n// Max-Widths\n--max-width-sm: 640px;\n--max-width-md: 1088px;\n--max-width-lg: 1920px;\n--max-width-xl: 2560px;\n.xxl({--max-width-md: 1440px;});\n\n// Spacing\n--spacing-xxs: 0.25rem;\n--spacing-xs: 0.5rem;\n--spacing-sm: 1rem;\n--spacing-md: 2rem;\n--spacing-lg: 4rem;\n--spacing-xl: 8rem;\n.smMax({--spacing-lg: 2rem; --spacing-xl: 4rem;});\n\n// Grid Gap\n--grid-gap-xxs: var(--spacing-xxs);\n--grid-gap-xs: var(--spacing-xs);\n--grid-gap-sm: var(--spacing-sm);\n--grid-gap-md: var(--spacing-md);\n--grid-gap-lg: var(--spacing-lg);\n--grid-gap-xl: var(--spacing-xl);\n\n// Padding\n--padding-xxs: var(--spacing-xxs);\n--padding-xs: var(--spacing-xs);\n--padding-sm: var(--spacing-sm);\n--padding-md: var(--spacing-md);\n--padding-lg: var(--spacing-lg);\n--padding-xl: var(--spacing-xl);\n\n// Margin\n--margin-xxs: var(--spacing-xxs);\n--margin-xs: var(--spacing-xs);\n--margin-sm: var(--spacing-sm);\n--margin-md: var(--spacing-md);\n--margin-lg: var(--spacing-lg);\n--margin-xl: var(--spacing-xl);\n\n// Border Radius\n--border-radius-xs: 2px;\n--border-radius-sm: 4px;\n--border-radius-md: 8px;\n--border-radius-lg: 16px;\n\n// Gradients\n--gradient-overlay-bottom: linear-gradient(\n    180.08deg,\n    rgba(0, 0, 0, 0) 25%,\n    rgba(0, 0, 0, 0.5) 65%,\n    rgba(0, 0, 0, 0.6) 100%\n);\n--gradient-overlay-right: linear-gradient(\n    270deg,\n    rgba(0, 0, 0, 0.9) 0%,\n    rgba(0, 0, 0, 0) 100%\n);\n\n// Z-indicies\n--promo-banner-z-index: 11500;\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n@hero-ui-elements-size: max(5vw, 10vh);\n\n@zIndex-promo-banner: 110;\n@closeBtnMargin: calc(var(--base-rem) * 1.5);\n@closeBtnHeight: calc(var(--base-rem) * 2);\n@accentColor: #f8b3d5;\n\n.ducksFont(@size: '') {\n    font-family: 'GTAArtDeco';\n    text-transform: uppercase;\n    letter-spacing: 0.25em;\n    line-height: 120%;\n    font-weight: 500;\n\n    & when (@size = 'h1') {\n        font-size: 2rem;\n        letter-spacing: 0.1em;\n        line-height: 110%;\n\n        .smMax({\n            font-size: min(2rem, 8vw);\n        });\n        .xxl({\n            font-size: 1.8vw;\n        });\n    }\n    & when (@size = 'h2') {\n        font-size: max(14px, 2.15vmin);\n    }\n    & when (@size = 'h3') {\n        font-size: min(3.2vw, 14px);\n        letter-spacing: 0.2em;\n        .lg ({\n            font-size: min(2vw, 16px);\n        });;\n        .xl ({\n            font-size: 18px;\n        });;\n    }\n    & when (@size = 'p') {\n        font-size: 0.9rem;\n        line-height: 150%;\n        letter-spacing: 0.02em;\n        text-transform: none;\n        font-weight: 400;\n        color: #e8e8e8;\n\n        .xxl({\n            font-size: 0.8vw;\n        });\n    }\n    & when (@size = 'button') {\n        font-size: 0.9rem;\n        line-height: 100%;\n        letter-spacing: 0.1em;\n    }\n    & when (@size = 'buttonSecondary') {\n        font-size: 0.9rem;\n        line-height: 100%;\n        letter-spacing: 0.05em;\n        text-transform: none;\n\n        .xxl({\n            font-size: 0.8vw;\n            gap: 0.5vw;\n        });\n    }\n\n    &:lang(ja_jp) {\n        .loadFont(NotoSansJP, 400, normal, Noto-Sans-JP-400);\n        .loadFont(NotoSansJP, 500, normal, Noto-Sans-JP-500);\n        font-family: 'NotoSansJP';\n    }\n\n    &:lang(ko_kr) {\n        .loadFont(NotoSansKR, 400, normal, Noto-Sans-KR-400);\n        .loadFont(NotoSansKR, 500, normal, Noto-Sans-KR-500);\n        font-family: 'NotoSansKR';\n    }\n\n    &:lang(zh_tw) {\n        .loadFont(NotoSansTC, 400, normal, Noto-Sans-TC-400);\n        .loadFont(NotoSansTC, 500, normal, Noto-Sans-TC-500);\n        font-family: 'NotoSansTC';\n    }\n\n    &:lang(zh_hans) {\n        .loadFont(NotoSansSC, 400, normal, Noto-Sans-SC-400);\n        .loadFont(NotoSansSC, 500, normal, Noto-Sans-SC-500);\n        font-family: 'NotoSansSC';\n    }\n}\n"],
        sourceRoot: ""
      }]), u.locals = {
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
      const z = u
    },
    6490: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-gtad5e006785121f616027593fb779471c5{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtad5e006785121f616027593fb779471c5 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtad5e006785121f616027593fb779471c5:focus,.rockstargames-sites-gtad5e006785121f616027593fb779471c5:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtad5e006785121f616027593fb779471c5.rockstargames-sites-gtace0be315a25002dede1552e150f1ce71{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtad5e006785121f616027593fb779471c5.rockstargames-sites-gtace0be315a25002dede1552e150f1ce71 img{filter:invert()}.rockstargames-sites-gtac86f468861a4a23636373a2c4e96e7ae{align-items:center;box-sizing:border-box;display:flex;flex-direction:column;gap:3rem;position:relative}@media (min-width:1280px){.rockstargames-sites-gtac86f468861a4a23636373a2c4e96e7ae{background:#000;flex-direction:row;height:100%;justify-content:space-between;padding:2rem var(--padding-sides);width:100%}}.rockstargames-sites-gtad622ce76c31f954e4efda94438e554ee{width:4rem}.rockstargames-sites-gtab95fa6bfe4d700532ebbeded5f325f5a{display:flex;flex-direction:row;gap:1rem}@media (min-width:1280px){.rockstargames-sites-gtab95fa6bfe4d700532ebbeded5f325f5a{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}}.rockstargames-sites-gtae3214549fe341b8695a1537b06f5a12c{margin:0}@media (max-width:1279px){.rockstargames-sites-gtae3214549fe341b8695a1537b06f5a12c{background:#000;order:3;padding:2rem;width:100%}}.rockstargames-sites-gtad2f8161fa0bd7f923704fcc0784ee3fd{border:none}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/InfoSectionFooter/index.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,8HAEI,gCAAA,CACA,YC/OR,CDkPI,iHAEI,2BAAA,CADA,sBC/OR,CD8OI,qHAKQ,eChPZ,CAhEA,yDAII,kBAAA,CAGA,qBAAA,CANA,YAAA,CAEA,qBAAA,CAEA,QAAA,CAHA,iBAsEJ,CA/DI,0BAAA,yDAKI,eAAA,CAJA,kBAAA,CAOA,WAAA,CANA,6BAAA,CAEA,iCAAA,CAGA,UAiEN,CACF,CA7DA,yDACI,UA+DJ,CA5DA,yDACI,YAAA,CACA,kBAAA,CACA,QA8DJ,CA5DI,0BAAA,yDAEI,QAAA,CADA,iBAAA,CAEA,OAAA,CACA,8BA+DN,CACF,CA5DA,yDACI,QA8DJ,CA5DI,0BAAA,yDAEI,eAAA,CADA,OAAA,CAEA,YAAA,CACA,UA+DN,CACF,CA5DA,yDACI,WA8DJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '@rsgweb/legacy-design-system/less/gen9-mixins.less';\n\n.infoSectionFooter {\n    display: flex;\n    position: relative;\n    flex-direction: column;\n    align-items: center;\n    gap: 3rem;\n\n    box-sizing: border-box;\n\n    @media (min-width: 1280px) {\n        flex-direction: row;\n        justify-content: space-between;\n\n        padding: 2rem var(--padding-sides);\n        background: black;\n\n        width: 100%;\n        height: 100%;\n    }\n}\n\n.logo {\n    width: 4rem;\n}\n\n.platforms {\n    display: flex;\n    flex-direction: row;\n    gap: 1rem;\n\n    @media (min-width: 1280px) {\n        position: absolute;\n        left: 50%;\n        top: 50%;\n        transform: translate(-50%, -50%);\n    }\n}\n\n.rating {\n    margin: 0;\n\n    @media (max-width: 1279px) {\n        order: 3;\n        background: black;\n        padding: 2rem;\n        width: 100%;\n    }\n}\n\n.withoutBorder {\n    border: none;\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        pillBtn: "rockstargames-sites-gtad5e006785121f616027593fb779471c5",
        selected: "rockstargames-sites-gtace0be315a25002dede1552e150f1ce71",
        infoSectionFooter: "rockstargames-sites-gtac86f468861a4a23636373a2c4e96e7ae",
        logo: "rockstargames-sites-gtad622ce76c31f954e4efda94438e554ee",
        platforms: "rockstargames-sites-gtab95fa6bfe4d700532ebbeded5f325f5a",
        rating: "rockstargames-sites-gtae3214549fe341b8695a1537b06f5a12c",
        withoutBorder: "rockstargames-sites-gtad2f8161fa0bd7f923704fcc0784ee3fd"
      };
      const s = o
    },
    7151: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-gtaa3fdd9c237605835107fb50d062c0902{background-color:#000;border:none;box-sizing:border-box;height:100vh;left:0;margin:0;min-height:100vh;min-width:100vw;padding:0;position:absolute;top:0;will-change:opacity;z-index:999999999999999}", "", {
        version: 3,
        sources: ["webpack://./src/components/LoadingState/index.less"],
        names: [],
        mappings: "AAAA,yDACI,qBAAA,CACA,WAAA,CACA,qBAAA,CAWA,YAAA,CAJA,MAAA,CALA,QAAA,CAUA,gBAAA,CAFA,eAAA,CAPA,SAAA,CAEA,iBAAA,CACA,KAAA,CAQA,mBAAA,CANA,uBAGJ",
        sourcesContent: [".loader {\n    background-color: black;\n    border: none;\n    box-sizing: border-box;\n\n    margin: 0;\n    padding: 0;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: 999999999999999;\n\n    min-width: 100vw;\n    height: 100vh;\n    min-height: 100vh;\n\n    will-change: opacity;\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        loader: "rockstargames-sites-gtaa3fdd9c237605835107fb50d062c0902"
      };
      const s = o
    },
    7392: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, ".rockstargames-sites-gtaa655a189cb60b462ee3c47aa039f28c4{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtaa655a189cb60b462ee3c47aa039f28c4 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtaa655a189cb60b462ee3c47aa039f28c4:focus,.rockstargames-sites-gtaa655a189cb60b462ee3c47aa039f28c4:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtaa655a189cb60b462ee3c47aa039f28c4.rockstargames-sites-gtac907cd6af7ac87539e21690c1affba37{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtaa655a189cb60b462ee3c47aa039f28c4.rockstargames-sites-gtac907cd6af7ac87539e21690c1affba37 img{filter:invert()}.rockstargames-sites-gtaf51004ce85c3f57a633de8359052344a{--playBtnSize:max(5vw,10vh);align-self:center;background-color:rgba(0,0,0,.4);border:none;border-radius:100%;cursor:pointer;display:flex;height:var(--playBtnSize);justify-self:center;padding:0;width:var(--playBtnSize)}@media (min-aspect-ratio:1.65){.rockstargames-sites-gtaf51004ce85c3f57a633de8359052344a{margin-top:7%}}@media (min-aspect-ratio:2.1){.rockstargames-sites-gtaf51004ce85c3f57a633de8359052344a{margin-top:5%}}@media (min-aspect-ratio:2.45){.rockstargames-sites-gtaf51004ce85c3f57a633de8359052344a{margin-top:8%}}@media (min-aspect-ratio:2.8){.rockstargames-sites-gtaf51004ce85c3f57a633de8359052344a{height:25vh;margin-top:0;width:25vh}}.rockstargames-sites-gtaf51004ce85c3f57a633de8359052344a img{height:100%;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;user-select:none;width:100%}", "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/PlayButton/index.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,8HAEI,gCAAA,CACA,YC/OR,CDkPI,iHAEI,2BAAA,CADA,sBC/OR,CD8OI,qHAKQ,eChPZ,CAjEA,yDACI,2BAAA,CAOA,iBAAA,CAFA,+BAAA,CAKA,WAAA,CAJA,kBAAA,CAGA,cAAA,CARA,YAAA,CACA,yBAAA,CAMA,mBAAA,CAJA,SAAA,CADA,wBA0EJ,CAjEI,+BAAA,yDACI,aAoEN,CACF,CAnEI,8BAAA,yDACI,aAsEN,CACF,CArEI,+BAAA,yDACI,aAwEN,CACF,CAvEI,8BAAA,yDAGI,WAAA,CAFA,YAAA,CACA,UA2EN,CACF,CApGA,6DA8BQ,WAAA,CAEA,mBAAA,CADA,wBAAA,CAAA,qBAAA,CAAA,gBAAA,CAFA,UA6ER",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '../../utils/constants/index.less';\n\n.playButton {\n    --playBtnSize: @hero-ui-elements-size;\n    display: flex;\n    height: var(--playBtnSize);\n    width: var(--playBtnSize);\n    padding: 0;\n    background-color: rgba(0, 0, 0, 0.4);\n    border-radius: 100%;\n    align-self: center;\n    justify-self: center;\n    cursor: pointer;\n    border: none;\n\n    @media (min-aspect-ratio: 1.65) {\n        margin-top: 7%;\n    }\n    @media (min-aspect-ratio: 2.1) {\n        margin-top: 5%;\n    }\n    @media (min-aspect-ratio: 2.45) {\n        margin-top: 8%;\n    }\n    @media (min-aspect-ratio: 2.8) {\n        margin-top: 0;\n        width: 25vh;\n        height: 25vh;\n    }\n\n    img {\n        width: 100%;\n        height: 100%;\n        user-select: none;\n        pointer-events: none;\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        pillBtn: "rockstargames-sites-gtaa655a189cb60b462ee3c47aa039f28c4",
        selected: "rockstargames-sites-gtac907cd6af7ac87539e21690c1affba37",
        playButton: "rockstargames-sites-gtaf51004ce85c3f57a633de8359052344a"
      };
      const s = o
    },
    6232: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => s
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i)()(r());
      o.push([n.id, '.rockstargames-sites-gtac3887f6f7d0ed63027b10181ca1c2dd1{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtac3887f6f7d0ed63027b10181ca1c2dd1 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtac3887f6f7d0ed63027b10181ca1c2dd1:focus,.rockstargames-sites-gtac3887f6f7d0ed63027b10181ca1c2dd1:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtac3887f6f7d0ed63027b10181ca1c2dd1.rockstargames-sites-gtaa5665f61ec035c1c7fa04bd147761c20{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtac3887f6f7d0ed63027b10181ca1c2dd1.rockstargames-sites-gtaa5665f61ec035c1c7fa04bd147761c20 img{filter:invert()}.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a{align-items:center;background-color:#000;display:flex;height:100vh;justify-content:center;left:0;overflow:hidden;position:absolute;top:0;width:100%}@supports not (aspect-ratio:16/9){.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a{position:relative}.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a:before{content:"";display:block;padding-top:calc((9 / 16) * 100%);width:100%}.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a>.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:16/9){.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a .rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06{aspect-ratio:16/9!important;height:auto!important;width:100%!important}}@media (max-aspect-ratio:1.1){@supports not (aspect-ratio:1.5/1){.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a{position:relative}.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a:before{content:"";display:block;padding-top:calc((1 / 1.5) * 100%);width:100%}.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a>.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:1.5/1){.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a .rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06{aspect-ratio:1.5/1!important;height:auto!important;width:100%!important}}}@media (max-aspect-ratio:0.85){@supports not (aspect-ratio:1/1){.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a{position:relative}.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a:before{content:"";display:block;padding-top:calc((1 / 1) * 100%);width:100%}.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a>.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:1/1){.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a .rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06{aspect-ratio:1/1!important;height:auto!important;width:100%!important}}}.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06{display:flex;max-height:calc(100vh - (calc(var(--base-rem) * 1.5) * 2 + calc(var(--base-rem) * 2)) * 2)}@media (min-aspect-ratio:2.5){@supports not (aspect-ratio:16/9){.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06{position:relative}.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06:before{content:"";display:block;padding-top:calc((9 / 16) * 100%);width:100%}.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06>iframe{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:16/9){.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06 iframe{aspect-ratio:16/9!important;height:auto!important;width:100%!important}}}@media (orientation:landscape){@supports (aspect-ratio:16/9){.rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a .rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06{height:100%!important;max-height:unset;max-width:calc(100vw - (calc(var(--base-rem) * 1.5) * 2 + calc(var(--base-rem) * 2)) * 2);width:auto!important}}}.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06 iframe{align-self:center;background:#000;cursor:pointer;height:100%;width:100%}@media (min-aspect-ratio:2.5){.rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06 iframe{height:calc(100% - (calc(var(--base-rem) * 1.5) * 2 + 21px))!important;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:auto!important}}.rockstargames-sites-gtaf335b4848dbe29b6f2aa6f4d2d742c6f{position:absolute;right:calc(var(--base-rem) * 1.5);top:calc(var(--base-rem) * 1.5)}', "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/components/PromoVideo/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,8HAEI,gCAAA,CACA,YC/OR,CDkPI,iHAEI,2BAAA,CADA,sBC/OR,CD8OI,qHAKQ,eChPZ,CAhEA,yDAEI,kBAAA,CAGA,qBAAA,CAJA,YAAA,CAYA,YAAA,CAVA,sBAAA,CAOA,MAAA,CAJA,eAAA,CAEA,iBAAA,CACA,KAAA,CAGA,UAgEJ,CC4wBI,kCAAA,yDACI,iBDzwBN,CC0wBM,gEAEI,UAAA,CADA,aAAA,CAGA,iCAAA,CADA,UDvwBV,CCkwBE,kHAaQ,QAAA,CAEA,qBAAA,CAJA,MAAA,CAFA,iBAAA,CAGA,OAAA,CAFA,KAAA,CAIA,oBDvwBV,CACF,CC2wBI,8BAAA,kHAEQ,2BAAA,CAEA,qBAAA,CADA,oBDxwBV,CACF,CAtFI,8BCu0BA,mCAAA,yDACI,iBD7uBJ,CC8uBI,gEAEI,UAAA,CADA,aAAA,CAGA,kCAAA,CADA,UD3uBR,CCsuBA,kHAaQ,QAAA,CAEA,qBAAA,CAJA,MAAA,CAFA,iBAAA,CAGA,OAAA,CAFA,KAAA,CAIA,oBD3uBR,CACF,CC+uBE,+BAAA,kHAEQ,4BAAA,CAEA,qBAAA,CADA,oBD5uBR,CACF,CACF,CA/GI,+BCm0BA,iCAAA,yDACI,iBDhtBJ,CCitBI,gEAEI,UAAA,CADA,aAAA,CAGA,gCAAA,CADA,UD9sBR,CCysBA,kHAaQ,QAAA,CAEA,qBAAA,CAJA,MAAA,CAFA,iBAAA,CAGA,OAAA,CAFA,KAAA,CAIA,oBD9sBR,CACF,CCktBE,6BAAA,kHAEQ,0BAAA,CAEA,qBAAA,CADA,oBD/sBR,CACF,CACF,CAvIA,yDACI,YAAA,CACA,0FAyIJ,CAvII,8BC0zBA,kCAAA,yDACI,iBD/qBJ,CCgrBI,gEAEI,UAAA,CADA,aAAA,CAGA,iCAAA,CADA,UD7qBR,CCwqBA,gEAaQ,QAAA,CAEA,qBAAA,CAJA,MAAA,CAFA,iBAAA,CAGA,OAAA,CAFA,KAAA,CAIA,oBD7qBR,CACF,CCirBE,8BAAA,gEAEQ,2BAAA,CAEA,qBAAA,CADA,oBD9qBR,CACF,CACF,CA/JI,+BACI,8BACI,kHAKI,qBAAA,CADA,gBAAA,CAHA,yFAAA,CAKA,oBA+JZ,CACF,CACF,CAlLA,gEAuBQ,iBAAA,CAEA,eAAA,CACA,cAAA,CAGA,WAAA,CADA,UA6JR,CA1JQ,8BAAA,gEAQI,sEAAA,CALA,QAAA,CAFA,iBAAA,CACA,OAAA,CAEA,8BAAA,CAGA,oBA4JV,CACF,CAvJA,yDACI,iBAAA,CAEA,iCAAA,CADA,+BA0JJ",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '../../utils/constants/index.less';\n\n.videoContainer {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n\n    background-color: black;\n    overflow: hidden;\n\n    position: absolute;\n    top: 0;\n    left: 0;\n\n    width: 100%;\n    height: 100vh;\n\n    .aspect-ratio(16, 9, videoContent, ~'.');\n\n    @media (max-aspect-ratio: 1.1) {\n        .aspect-ratio(1.5, 1, videoContent, ~'.');\n    }\n\n    @media (max-aspect-ratio: 0.85) {\n        .aspect-ratio(1, 1, videoContent, ~'.');\n    }\n}\n\n.videoContent {\n    display: flex;\n    max-height: calc(100vh - (@closeBtnMargin * 2 + @closeBtnHeight) * 2);\n\n    @media (min-aspect-ratio: 2.5) {\n        .aspect-ratio(16, 9, iframe);\n    }\n\n    // need to beat the specificity of the mixin\n    @media (orientation: landscape) {\n        @supports (aspect-ratio: 16/ 9) {\n            .videoContainer & {\n                max-width: calc(\n                    100vw - (@closeBtnMargin * 2 + @closeBtnHeight) * 2\n                );\n                max-height: unset;\n                height: 100% !important;\n                width: auto !important;\n            }\n        }\n    }\n\n    iframe {\n        align-self: center;\n\n        background: black;\n        cursor: pointer;\n\n        width: 100%;\n        height: 100%;\n\n        @media (min-aspect-ratio: 2.5) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n\n            // 21px is the padding in the youtube embed UI\n            width: auto !important;\n            height: calc(100% - (@closeBtnMargin * 2 + 21px)) !important;\n        }\n    }\n}\n\n.closeButton {\n    position: absolute;\n    top: @closeBtnMargin;\n    right: @closeBtnMargin;\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), o.locals = {
        pillBtn: "rockstargames-sites-gtac3887f6f7d0ed63027b10181ca1c2dd1",
        selected: "rockstargames-sites-gtaa5665f61ec035c1c7fa04bd147761c20",
        videoContainer: "rockstargames-sites-gtaecf916bdffa2fe413b85ad7967a1683a",
        videoContent: "rockstargames-sites-gtacd2cdfa0c9298cc807fd807cffbbbf06",
        closeButton: "rockstargames-sites-gtaf335b4848dbe29b6f2aa6f4d2d742c6f"
      };
      const s = o
    },
    6024: (n, e, t) => {
      "use strict";
      t.d(e, {
        A: () => h
      });
      var a = t(2587),
        r = t.n(a),
        i = t(5081),
        o = t.n(i),
        s = t(9908),
        l = t.n(s),
        d = new URL(t(6773), t.b),
        c = new URL(t(9129), t.b),
        g = o()(r()),
        m = l()(d),
        p = l()(c);
      g.push([n.id, `.rockstargames-sites-gtaa482034b8e28e92f914d0a4814b36302{align-items:center;background:var(--white-15);border:none;border-radius:100px;color:var(--white-100);cursor:pointer;display:flex;font-family:var(--font-family-body);font-size:20px;font-style:normal;font-weight:700;justify-content:center;line-height:var(--rem-125);min-width:var(--rem-6);padding:var(--padding-xs) var(--padding-sm);text-align:center;transition:background-color .3s ease-in-out}.rockstargames-sites-gtaa482034b8e28e92f914d0a4814b36302 img{height:var(--nav-icon-size);margin-left:var(--grid-gap-xs);transition:filter .3s ease-in-out;width:var(--nav-icon-size)}.rockstargames-sites-gtaa482034b8e28e92f914d0a4814b36302:focus,.rockstargames-sites-gtaa482034b8e28e92f914d0a4814b36302:hover{background-color:var(--white-40);outline:none}.rockstargames-sites-gtaa482034b8e28e92f914d0a4814b36302.rockstargames-sites-gtacf7f41f7042d5a8186229002576d1be2{background:var(--white-100);color:var(--black-200)}.rockstargames-sites-gtaa482034b8e28e92f914d0a4814b36302.rockstargames-sites-gtacf7f41f7042d5a8186229002576d1be2 img{filter:invert()}.rockstargames-sites-gtae8ec89818fc79edbaa66362c1c86d68b{background:#131319;will-change:transform}@media (min-width:0px){.rockstargames-sites-gtae8ec89818fc79edbaa66362c1c86d68b{--base-rem:16px}}@media (min-width:768px){.rockstargames-sites-gtae8ec89818fc79edbaa66362c1c86d68b{--base-rem:18px}}@media (min-width:1024px){.rockstargames-sites-gtae8ec89818fc79edbaa66362c1c86d68b{--base-rem:20px}}@media (min-width:1920px){.rockstargames-sites-gtae8ec89818fc79edbaa66362c1c86d68b{--base-rem:22px}}.rockstargames-sites-gtae8ec89818fc79edbaa66362c1c86d68b .pin-spacer{height:auto!important}.rockstargames-sites-gtafb6c191e89e437ace48ce507809afe5d{display:none}.rockstargames-sites-gtaca2f81543a0e0655ab1b2abda8c2a1ce{min-height:100vh;position:relative}.rockstargames-sites-gtaca2f81543a0e0655ab1b2abda8c2a1ce.rockstargames-sites-gtaf4203b4395c65222fc14f58c4f9f9646+.rockstargames-sites-gtafb6c191e89e437ace48ce507809afe5d{display:none}.rockstargames-sites-gtaebb0afd7536b0fb0683ffff440c7ec3b{background:url(${m}) 45% 30%/1000% no-repeat;height:100vh;-webkit-mask:url(${p}) 45% 30%/1000% no-repeat;overflow:hidden;position:relative;will-change:-webkit-mask-position,background-position,-webkit-mask-size,background-size}.rockstargames-sites-gtacdfbf3e1aae618a88ec82a3ad18954a0{align-items:center;display:flex;flex-direction:column;justify-content:flex-start;min-height:100vh;padding:5rem 3.5rem var(--padding-sides);pointer-events:none;position:absolute;top:0;width:100vw}@media (min-width:768px){.rockstargames-sites-gtacdfbf3e1aae618a88ec82a3ad18954a0{justify-content:center}}.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f{align-items:center;display:flex;height:100%;justify-content:center;width:100%}@supports not (aspect-ratio:16/9){.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f{position:relative}.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f:before{content:"";display:block;padding-top:calc((9 / 16) * 100%);width:100%}.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f>.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:16/9){.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f .rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2{aspect-ratio:16/9!important;height:auto!important;width:100%!important}}@media (max-aspect-ratio:1.1){@supports not (aspect-ratio:1.5/1){.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f{position:relative}.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f:before{content:"";display:block;padding-top:calc((1 / 1.5) * 100%);width:100%}.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f>.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:1.5/1){.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f .rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2{aspect-ratio:1.5/1!important;height:auto!important;width:100%!important}}}@media (max-aspect-ratio:0.85){@supports not (aspect-ratio:1/1){.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f{position:relative}.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f:before{content:"";display:block;padding-top:calc((1 / 1) * 100%);width:100%}.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f>.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:1/1){.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f .rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2{aspect-ratio:1/1!important;height:auto!important;width:100%!important}}}.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2{display:flex;max-height:calc(100vh - (calc(var(--base-rem) * 1.5) * 2 + calc(var(--base-rem) * 2)) * 2)}@media (min-aspect-ratio:2.5){@supports not (aspect-ratio:16/9){.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2{position:relative}.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2:before{content:"";display:block;padding-top:calc((9 / 16) * 100%);width:100%}.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2>iframe{bottom:0;height:100%!important;left:0;position:absolute;right:0;top:0;width:100%!important}}@supports (aspect-ratio:16/9){.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2 iframe{aspect-ratio:16/9!important;height:auto!important;width:100%!important}}}@media (orientation:landscape){@supports (aspect-ratio:16/9){.rockstargames-sites-gtaad13236b174e0a931b06ad4e64e9d98f .rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2{height:100%!important;max-height:unset;max-width:calc(100vw - (calc(var(--base-rem) * 1.5) * 2 + calc(var(--base-rem) * 2)) * 2);width:auto!important}}}.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2 iframe{align-self:center;background:#000;cursor:pointer;min-height:100%;width:100%}@media (min-aspect-ratio:2.5){.rockstargames-sites-gtabade55c685c0fdf671e31b6584090ef2 iframe{height:calc(100% - (calc(var(--base-rem) * 1.5) * 2 + 21px))!important;left:50%;position:absolute;top:50%;transform:translate(-50%,-50%);width:auto!important}}`, "", {
        version: 3,
        sources: ["webpack://./../../buildtime/legacy-design-system/less/gen9-mixins.less", "webpack://./src/layouts/DestinationPage/index.less", "webpack://./../../buildtime/legacy-design-system/less/mixins.less"],
        names: [],
        mappings: "AA2QA,yDAKI,kBAAA,CAGA,0BAAA,CAFA,WAAA,CACA,mBAAA,CAIA,sBAAA,CAQA,cAAA,CAlBA,YAAA,CAYA,mCAAA,CACA,cAAA,CACA,iBAAA,CACA,eAAA,CAZA,sBAAA,CAaA,0BAAA,CAfA,sBAAA,CACA,2CAAA,CASA,iBAAA,CAQA,2CC9OJ,CD0NA,6DAwBQ,2BAAA,CADA,8BAAA,CAGA,iCAAA,CADA,0BC7OR,CDiPI,8HAEI,gCAAA,CACA,YC/OR,CDkPI,iHAEI,2BAAA,CADA,sBC/OR,CD8OI,qHAKQ,eChPZ,CA7DA,yDAMI,kBAAA,CACA,qBA0DJ,CCjCI,uBAAA,yDD/BK,eAoEP,CACF,CCpBI,yBAAA,yDDhDK,eAwEP,CACF,CCPI,0BAAA,yDDjEK,eA4EP,CACF,CCMI,0BAAA,yDDlFK,eAgFP,CACF,CArFA,qEAWQ,qBA6ER,CAzEA,yDACI,YA2EJ,CAxEA,yDAEI,gBAAA,CADA,iBA2EJ,CAxEI,0KACI,YA0ER,CAtEA,yDAKI,0EAAA,CAOA,YAAA,CARA,4EAAA,CAFA,eAAA,CADA,iBAAA,CAKA,uFAwEJ,CA/DA,yDAII,kBAAA,CAHA,YAAA,CACA,qBAAA,CACA,0BAAA,CASA,gBAAA,CALA,wCAAA,CAFA,mBAAA,CAIA,iBAAA,CACA,KAAA,CAGA,WA8DJ,CA5DI,yBAAA,yDACI,sBA+DN,CACF,CA3DA,yDAGI,kBAAA,CAFA,YAAA,CAGA,WAAA,CAFA,sBAAA,CAGA,UA6DJ,CCmtBI,kCAAA,yDACI,iBDhtBN,CCitBM,gEAEI,UAAA,CADA,aAAA,CAGA,iCAAA,CADA,UD9sBV,CCysBE,kHAaQ,QAAA,CAEA,qBAAA,CAJA,MAAA,CAFA,iBAAA,CAGA,OAAA,CAFA,KAAA,CAIA,oBD9sBV,CACF,CCktBI,8BAAA,kHAEQ,2BAAA,CAEA,qBAAA,CADA,oBD/sBV,CACF,CApFI,8BC4wBA,mCAAA,yDACI,iBDprBJ,CCqrBI,gEAEI,UAAA,CADA,aAAA,CAGA,kCAAA,CADA,UDlrBR,CC6qBA,kHAaQ,QAAA,CAEA,qBAAA,CAJA,MAAA,CAFA,iBAAA,CAGA,OAAA,CAFA,KAAA,CAIA,oBDlrBR,CACF,CCsrBE,+BAAA,kHAEQ,4BAAA,CAEA,qBAAA,CADA,oBDnrBR,CACF,CACF,CA7GI,+BCwwBA,iCAAA,yDACI,iBDvpBJ,CCwpBI,gEAEI,UAAA,CADA,aAAA,CAGA,gCAAA,CADA,UDrpBR,CCgpBA,kHAaQ,QAAA,CAEA,qBAAA,CAJA,MAAA,CAFA,iBAAA,CAGA,OAAA,CAFA,KAAA,CAIA,oBDrpBR,CACF,CCypBE,6BAAA,kHAEQ,0BAAA,CAEA,qBAAA,CADA,oBDtpBR,CACF,CACF,CArIA,yDACI,YAAA,CACA,0FAuIJ,CArII,8BC+vBA,kCAAA,yDACI,iBDtnBJ,CCunBI,gEAEI,UAAA,CADA,aAAA,CAGA,iCAAA,CADA,UDpnBR,CC+mBA,gEAaQ,QAAA,CAEA,qBAAA,CAJA,MAAA,CAFA,iBAAA,CAGA,OAAA,CAFA,KAAA,CAIA,oBDpnBR,CACF,CCwnBE,8BAAA,gEAEQ,2BAAA,CAEA,qBAAA,CADA,oBDrnBR,CACF,CACF,CA7JI,+BACI,8BACI,kHAKI,qBAAA,CADA,gBAAA,CAHA,yFAAA,CAKA,oBA6JZ,CACF,CACF,CAhLA,gEAuBQ,iBAAA,CAEA,eAAA,CACA,cAAA,CAGA,eAAA,CADA,UA2JR,CAxJQ,8BAAA,gEAQI,sEAAA,CALA,QAAA,CAFA,iBAAA,CACA,OAAA,CAEA,8BAAA,CAGA,oBA0JV,CACF",
        sourcesContent: ["@import 'mixins.less';\n\n// Headlines\n.headline-6 () {\n    font-size: calc(var(--font-size-3) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-5 () {\n    font-size: calc(var(--font-size-4) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-4 () {\n    font-size: calc(var(--font-size-5) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3 () {\n    font-size: calc(var(--font-size-6) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-3-bold () {\n    .headline-3();\n    font-weight: var(--font-weight-bold);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-2 () {\n    font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.headline-1 () {\n    font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n.xLarge () {\n    font-size: calc(var(--font-size-9) * var(--header-multiplier));\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-md);\n    font-weight: var(--font-weight-bold);\n    letter-spacing: var(--letter-spacing-h);\n    color: var(--color-override, var(--color-h));\n}\n\n// Body\n.body-xs () {\n    font-size: var(--font-size-1);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-xs-bold () {\n    .body-xs;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-sm () {\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-sm-bold () {\n    .body-sm;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-md () {\n    font-size: var(--font-size-3);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-md-bold () {\n    .body-md;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.body-lg () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-body);\n    line-height: var(--line-height-lg);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-body);\n    color: var(--color-body);\n}\n\n.body-lg-bold () {\n    .body-lg;\n    font-weight: var(--font-weight-bold);\n    color: var(--color-body);\n}\n\n.handleFontDeclarationsGen9() {\n    h1 {\n        .headline-1;\n    }\n    h2 {\n        .headline-2;\n    }\n    h3 {\n        .headline-3;\n    }\n    h4 {\n        .headline-4;\n    }\n    h5 {\n        .headline-5;\n    }\n    p {\n        .body-md;\n    }\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n.commonContent() {\n    .handlePadding(var(--padding-sides), 0);\n    .handleMaxWidth(var(--content-max-width));\n}\n\n.backgroundIcon(@icon) {\n    background: url('../icons/@{icon}.svg') no-repeat center/1rem;\n}\n\n@iconBtnConfig: {\n    @small: {\n        size: 2rem;\n    };\n    @large: {\n        size: 3rem;\n    };\n};\n\n.iconBtn(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    background: var(--black-65, rgba(0, 0, 0, 0.65));\n    border: 1px solid var(--white-100, #fff);\n    border-radius: 50%;\n    padding: 0;\n    transition: background 0.3s ease-in-out;\n    &::after {\n        .backgroundIcon(@icon);\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n    }\n\n    &:focus {\n        outline: none;\n        border: none;\n    }\n\n    .isTouchscreen({\n        &:active {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    }, {\n        &:hover,\n        &:focus {\n            background: var(--white-100, #fff);\n            &::after {\n                filter: invert(1);\n            }\n        }\n    });\n}\n\n.iconBtnPlain(@icon, @size: small) {\n    @lookup: @size;\n    width: @iconBtnConfig[@@lookup][size];\n    height: @iconBtnConfig[@@lookup][size];\n    position: relative;\n    cursor: pointer;\n    padding: 0;\n\n    &::after {\n        content: '';\n        display: block;\n        height: 100%;\n        width: 100%;\n        position: absolute;\n        left: 0;\n        top: 0;\n        transition: 0.3s ease-in-out;\n        background: url('../icons/@{icon}.svg') no-repeat center/1.5rem;\n    }\n}\n\n.swiperBtn(@icon) {\n    .iconBtn(@icon, large);\n    background: var(--black-200);\n    border-radius: 0;\n    border: none;\n    &::after {\n        background-size: 1.5rem;\n    }\n}\n\n.pillBtn {\n    display: flex;\n    min-width: var(--rem-6);\n    padding: var(--padding-xs) var(--padding-sm);\n    justify-content: center;\n    align-items: center;\n    border: none;\n    border-radius: 100px;\n    background: var(--white-15);\n    cursor: pointer;\n\n    color: var(--white-100);\n    text-align: center;\n    font-family: var(--font-family-body);\n    font-size: 20px;\n    font-style: normal;\n    font-weight: 700;\n    line-height: var(--rem-125);\n\n    cursor: pointer;\n    transition: background-color 0.3s ease-in-out;\n\n    img {\n        margin-left: var(--grid-gap-xs);\n        height: var(--nav-icon-size);\n        width: var(--nav-icon-size);\n        transition: filter 0.3s ease-in-out;\n    }\n\n    &:hover,\n    &:focus {\n        background-color: var(--white-40);\n        outline: none;\n    }\n\n    &.selected {\n        color: var(--black-200);\n        background: var(--white-100);\n\n        img {\n            filter: invert();\n        }\n    }\n}\n\n.setGen9Root() {\n    --gen9-max-width: 2560px;\n    --content-max-width: var(--gen9-max-width);\n    --padding-sides: var(--padding-lg);\n    --content-padding: 0 var(--padding-sides);\n    flex: 1;\n    display: flex;\n    justify-content: center;\n\n    .xl({\n        --padding-sides: var(--padding-xl);\n    });\n\n    .handleFontDeclarationsGen9();\n}\n\n.scrollFade() {\n    // @note: this is breaking on firefox.\n    mask-image: linear-gradient(\n        to bottom,\n        var(--black-100) calc(100% - 48px),\n        transparent calc(100% + 16px)\n    );\n}\n\n.scrollbar() {\n    /* Firefox */\n    scrollbar-width: auto;\n    scrollbar-color: var(--scroll-thumb-color) var(--scroll-track-color);\n\n    /* Chrome, Edge, and Safari */\n    &::-webkit-scrollbar {\n        width: 8px;\n    }\n    &::-webkit-scrollbar-track {\n        background: transparent;\n    }\n    &::-webkit-scrollbar-thumb {\n        background-color: var(--scroll-thumb-color);\n        border-radius: 10px;\n        border: none;\n    }\n}\n\n.ifElse(@condition, @if-styles, @else-styles) {\n    @media @condition {\n        @if-styles();\n    }\n    @media not (@condition) {\n        @else-styles();\n    }\n}\n\n.isTouchscreen(@if-styles, @else-styles) {\n    .ifElse(~'(pointer: coarse)', @if-styles, @else-styles);\n}\n\n.mobile-landscape(@rules) {\n    @media only screen and (min-width: 480px) and (max-width: 1023px) and (orientation: landscape) {\n        @rules();\n    }\n}\n\n.caret(@color) {\n    .dropdownCaret(@color);\n}\n\n.horizontalScrollFade() {\n    mask-image: linear-gradient(\n        to right,\n        transparent,\n        rgba(0, 0, 0, 0.3) calc(var(--padding-sides) / 2),\n        #000 var(--padding-sides),\n        #000 calc(100% - var(--padding-sides)),\n        rgba(0, 0, 0, 0.3) calc(100% - (var(--padding-sides) / 2)),\n        transparent\n    );\n}\n\n// Accessibility\n.visuallyHidden() {\n    border: 0;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    white-space: nowrap;\n    width: 1px;\n}\n", "@import '@rsgweb/legacy-design-system/less/mixins.less';\n@import '../../utils/constants/index.less';\n\n@closeBtnMargin: calc(var(--base-rem) * 1.5);\n@closeBtnHeight: calc(var(--base-rem) * 2);\n\n.destinationPage {\n    .sm({--base-rem: 16px;});\n    .md({--base-rem: 18px;});\n    .lg({--base-rem: 20px;});\n    .xl({--base-rem: 22px;});\n\n    background: #131319;\n    will-change: transform;\n\n    // Override explicit height from gsap which causes footer content to overlap trailer button\n    :global(.pin-spacer) {\n        height: auto !important;\n    }\n}\n\n.footerContainer {\n    display: none;\n}\n\n.destinationContainer {\n    position: relative;\n    min-height: 100vh;\n\n    &.active + .footerContainer {\n        display: none;\n    }\n}\n\n.hero {\n    position: relative;\n    overflow: hidden;\n\n    -webkit-mask: url(../../img/logo_secondary_mask.svg) 45% 30%/1000% no-repeat;\n    background: url(../../img/logo_secondary_color.png) 45% 30%/1000% no-repeat;\n    will-change:\n        -webkit-mask-position,\n        background-position,\n        -webkit-mask-size,\n        background-size;\n\n    height: 100vh;\n}\n\n.infoSectionContainer {\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-start;\n    align-items: center;\n    pointer-events: none;\n\n    padding: 5rem 3.5rem var(--padding-sides);\n\n    position: absolute;\n    top: 0;\n\n    min-height: 100vh;\n    width: 100vw;\n\n    @media (min-width: 768px) {\n        justify-content: center;\n    }\n}\n\n// Dialog Video Player Modal\n.videoDialog {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    height: 100%;\n    width: 100%;\n\n    .aspect-ratio(16, 9, videoDialogContent, ~'.');\n\n    @media (max-aspect-ratio: 1.1) {\n        .aspect-ratio(1.5, 1, videoDialogContent, ~'.');\n    }\n\n    @media (max-aspect-ratio: 0.85) {\n        .aspect-ratio(1, 1, videoDialogContent, ~'.');\n    }\n}\n\n.videoDialogContent {\n    display: flex;\n    max-height: calc(100vh - (@closeBtnMargin * 2 + @closeBtnHeight) * 2);\n\n    @media (min-aspect-ratio: 2.5) {\n        .aspect-ratio(16, 9, iframe);\n    }\n\n    // this is needed to beat the specificity of the mixin\n    @media (orientation: landscape) {\n        @supports (aspect-ratio: 16/ 9) {\n            .videoDialog & {\n                max-width: calc(\n                    100vw - (@closeBtnMargin * 2 + @closeBtnHeight) * 2\n                );\n                max-height: unset;\n                height: 100% !important;\n                width: auto !important;\n            }\n        }\n    }\n\n    iframe {\n        align-self: center;\n\n        background: black;\n        cursor: pointer;\n\n        width: 100%;\n        min-height: 100%;\n\n        @media (min-aspect-ratio: 2.5) {\n            position: absolute;\n            top: 50%;\n            left: 50%;\n            transform: translate(-50%, -50%);\n\n            // 21px is the padding in the youtube embed UI\n            width: auto !important;\n            height: calc(100% - (@closeBtnMargin * 2 + 21px)) !important;\n        }\n    }\n}\n", "/*\n * New Design System:\n * 1. Breakpoints\n * 2. Typography\n * 3. Variables\n * 4. Utility\n *     4.1 Flex\n *     4.2 Grid\n *     4.3 Max-Width\n *     4.4 Images\n *     4.5 Padding\n *     4.6 Fonts\n *     4.7 Games\n *     4.8 Tina\n *     4.9 Hacks\n * 5. Presentational\n */\n\n/* 1. Breakpoints */\n@screen-sm: 0px;\n@screen-md: 768px;\n@screen-lg: 1024px;\n@screen-xl: 1920px;\n@screen-xxl: 2560px;\n@sm-min-width: @screen-sm;\n@md-min-width: @screen-md;\n@lg-min-width: @screen-lg;\n@xl-min-width: @screen-xl;\n@xxl-min-width: @screen-xxl;\n@sm-max-width: (@md-min-width - 1px);\n@md-max-width: (@lg-min-width - 1px);\n@lg-max-width: (@xl-min-width - 1px);\n@xl-max-width: (@xxl-min-width - 1px);\n\n.sm(@rules) {\n    .smMin(@rules);\n}\n.smMin(@rules) {\n    @media (min-width: @sm-min-width) {\n        @rules();\n    }\n}\n.smMax(@rules) {\n    @media (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.smOnly(@rules) {\n    @media (min-width: @sm-min-width) and (max-width: @sm-max-width) {\n        @rules();\n    }\n}\n.md(@rules) {\n    .mdMin(@rules);\n}\n.mdMin(@rules) {\n    @media (min-width: @md-min-width) {\n        @rules();\n    }\n}\n.mdMax(@rules) {\n    @media (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.mdOnly(@rules) {\n    @media (min-width: @md-min-width) and (max-width: @md-max-width) {\n        @rules();\n    }\n}\n.lg(@rules) {\n    .lgMin(@rules);\n}\n.lgMin(@rules) {\n    @media (min-width: @lg-min-width) {\n        @rules();\n    }\n}\n.lgMax(@rules) {\n    @media (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.lgOnly(@rules) {\n    @media (min-width: @lg-min-width) and (max-width: @lg-max-width) {\n        @rules();\n    }\n}\n.xl(@rules) {\n    .xlMin(@rules);\n}\n.xlMin(@rules) {\n    @media (min-width: @xl-min-width) {\n        @rules();\n    }\n}\n.xlMax(@rules) {\n    @media (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xlOnly(@rules) {\n    @media (min-width: @xl-min-width) and (max-width: @xl-max-width) {\n        @rules();\n    }\n}\n.xxl(@rules) {\n    .xxlMin(@rules);\n}\n.xxlMin(@rules) {\n    @media (min-width: @xxl-min-width) {\n        @rules();\n    }\n}\n\n.notoBackup(@varName; @stdFont) {\n    @{varName}: @stdFont;\n\n    &:lang(ja_jp) {\n        @{varName}: @stdFont, NotoSansJP;\n    }\n    &:lang(zh_hans) {\n        @{varName}: @stdFont, NotoSansSC;\n    }\n    &:lang(zh_tw) {\n        @{varName}: @stdFont, NotoSansTC;\n    }\n}\n\n/* 2. Typography */\n.handleFontDeclarations() {\n    .notoBackup(--rsg-font-family-std, HelveticaNowText);\n    .notoBackup(--rsg-font-family-h, HelveticaNowDisplayBold);\n    .notoBackup(--gta-font-family-std, Chalet);\n    .notoBackup(--gta-font-family-h, ChaletComprime);\n    .notoBackup(--gta-font-family-badge, Pricedown);\n    .notoBackup(--rdr-font-family-std, HapnaSlabSerif);\n    .notoBackup(--rdr-font-family-h, RDRLino-Regular);\n    .notoBackup(--rdr-font-family-newswire-subtitle, HapnaSlabSerif);\n    .notoBackup(--rdr-area-font, RDRCatalogueBold);\n\n    --header-multiplier: var(--header-numerator, var(--root-font-size)) /\n        var(--root-font-size);\n    font-family: var(--font-family-std, HelveticaNowText);\n    font-weight: var(--font-weight-std, 400);\n    letter-spacing: var(--letter-spacing-std, -0.025em);\n    line-height: var(--line-height-std, 1.6);\n    font-size: calc(var(--root-font-size) * 1px);\n    -webkit-font-smoothing: antialiased;\n\n    h1.large,\n    h1,\n    h2,\n    h3,\n    h4 {\n        font-family: var(--font-family-h, HelveticaNowDisplayBold);\n        letter-spacing: var(--letter-spacing-h, -0.025em);\n    }\n    h1.large,\n    h1 {\n        font-weight: var(--font-weight-h1, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h1, var(--text-transform-h, none));\n        line-height: var(--line-height-h1, var(--line-height-h, 1.1));\n    }\n\n    h1.large {\n        font-size: calc(var(--font-size-8) * var(--header-multiplier));\n    }\n    h1 {\n        font-size: calc(var(--font-size-7) * var(--header-multiplier));\n    }\n    h2 {\n        font-size: calc(var(--font-size-6) * var(--header-multiplier));\n        font-weight: var(--font-weight-h2, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h2, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n    }\n    h3 {\n        font-size: calc(var(--font-size-5) * var(--header-multiplier));\n        font-weight: var(--font-weight-h3, var(--font-weight-h, 700));\n        text-transform: var(--text-transform-h3, var(--text-transform-h, none));\n        line-height: var(--line-height-h, 1.1);\n\n        &[data-context='newswire-subtitle'] {\n            font-size: calc(\n                var(--font-size-5) *\n                    var(\n                        --h3-numerator-override-newswire-subtitle,\n                        var(--header-multiplier)\n                    )\n            );\n            font-weight: var(\n                --font-weight-newswire-subtitle,\n                var(--font-weight-h)\n            );\n            font-family: var(\n                --font-family-newswire-subtitle,\n                var(--font-family-h)\n            );\n            text-transform: var(--text-transform-newswire-subtitle);\n        }\n\n        .isRdr({\n            font-weight: var(--font-weight-h3, var(--font-weight-h, 400));\n        });\n    }\n\n    h4,\n    h5,\n    h6 {\n        font-size: calc(var(--font-size-4) * var(--header-multiplier));\n        line-height: var(--line-height-h, 1.1);\n    }\n}\n\n.handleColors() {\n    h1.large,\n    h1 {\n        color: var(--color-h-dynamic, var(--color-h1, var(--color-h, inherit)));\n    }\n    h2 {\n        color: var(--color-h-dynamic, var(--color-h2, var(--color-h, inherit)));\n    }\n    h3 {\n        color: var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)));\n\n        &[data-context='newswire-subtitle'] {\n            color: var(\n                --color-subtitle-dynamic,\n                var(--color-h-dynamic, var(--color-h3, var(--color-h, inherit)))\n            );\n        }\n    }\n    h4,\n    h5,\n    h6 {\n        color: var(--color-h-dynamic, var(--color-h, inherit));\n    }\n    background-color: var(--background-color, transparent);\n\n    [template='community'] {\n        --time-color: var(--body-color, #2d2d2d);\n        --breadcrumb-separator-filter-invert: invert(0);\n\n        main {\n            color: var(--color-h, #161616);\n        }\n        p {\n            color: var(--body-color, #2d2d2d);\n        }\n    }\n}\n\n/* 3. Variables */\n.resetVariables() {\n    --text-section-max-width: 640px;\n    --base-pixel-size: 12px;\n    --base-rem-size: 0.75rem;\n    --half-rem-size: calc(var(--base-rem-size) / 2);\n    --twice-rem-size: calc(var(--base-rem-size) * 2);\n    --section-margin-bottom: calc(var(--base-rem-size) * 4);\n    --header-height: 80px;\n    --breadcrumbs-height: calc(var(--base-pixel-size) * 3.5);\n    --max-width: 1920px;\n    --standard-color: #fcaf17;\n    --color-h: #ffffff;\n    --body-color: #e8e8e8;\n    --background-color: #0b0b0b;\n    --card-background-color: #000;\n    --border-color: #282828;\n    --privacy-banner-height: 0px;\n    --game-header-height: 50px;\n    --standard-grid-gap: calc(var(--base-rem-size) * 2);\n    --image-margin-bottom: inherit;\n    --image-rounding: 0px;\n    --image-rounding-static: 16px;\n    --image-rounding-static-sm: 8px;\n    --image-rounding-static-xs: 4px;\n\n    --grid-gap-static-xs: 0.5rem;\n    --grid-gap-static-sm: 1rem;\n    --grid-gap-static-md: 2rem;\n    --grid-gap-static-lg: 4rem;\n    --grid-gap-static-xl: 8rem;\n    .smMax({--grid-gap-static-lg: 2rem; --grid-gap-static-xl: 4rem;});\n\n    --max-width-static: 640px;\n    --max-width-static-md: 1088px;\n    --max-width-static-lg: 1920px;\n    --max-width-static-xl: 2560px;\n    .xxlMin({--max-width-static-md: 1440px;});\n\n    --margin-static: 0 0 2rem;\n    --h2-margin: 2rem 0 0 0;\n\n    --padding-sides: var(--grid-gap-static-lg);\n    --padding-top-bottom: var(--padding-sides);\n    --padding-static: var(--padding-sides);\n}\n\n/* 4. Utility */\n/* 4.1 Flex */\n.flex() {\n    display: flex;\n    flex-flow: column;\n}\n.horizontalCenterChildren() {\n    display: flex;\n    justify-content: center;\n}\n.verticalCenterChildren() {\n    display: flex;\n    align-items: center;\n}\n.flexCenterChildren() {\n    .horizontalCenterChildren();\n    .verticalCenterChildren();\n}\n\n/* 4.2 Grid */\n.gridMinWidth(@minWidth: 480px; @rowGap: var(--standard-grid-gap); @colGap: var(--standard-grid-gap); @autoType: 'auto-fit') {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: ~'repeat(@{autoType}, minmax(@{minWidth}, 1fr))';\n}\n.gridHideExtraRows(@colGap: var(--standard-grid-gap)) {\n    ::-webkit-scrollbar {\n        display: none;\n    }\n    -ms-overflow-style: none;\n    display: grid;\n    grid-auto-flow: column;\n    grid-column-gap: @colGap;\n    overflow-y: hidden;\n    scroll-snap-type: x mandatory;\n    > * {\n        scroll-snap-align: start;\n    }\n    --per-page: 4;\n    .lgMax({--per-page: 3;});\n    .mdMax({--per-page: 2;});\n    .smMax({--per-page: 1;});\n\n    grid-auto-columns: calc(\n        100% / var(--per-page) - (var(--per-page) - 1) / var(--per-page) *\n            @colGap\n    );\n}\n.gridNumCols(@numInitialItems) {\n    display: grid;\n    grid-gap: var(--standard-grid-gap);\n    .smMax({grid-template-columns: repeat(1, minmax(0px, 1fr)) ;});\n    @media screen and (min-width: @screen-sm) and (max-width: @md-max-width) {\n        grid-template-columns: repeat(2, minmax(0px, 1fr));\n    }\n    @media screen and (min-width: @screen-lg) {\n        grid-template-columns: repeat(4, minmax(0px, 1fr));\n    }\n}\n.gridNumColsSmall(@colGap: var(--padding-top-bottom); @rowGap: var(--padding-top-bottom)) {\n    display: grid;\n    grid-row-gap: @rowGap;\n    grid-column-gap: @colGap;\n    grid-template-columns: repeat(1, minmax(0px, 1fr));\n    .md({grid-template-columns: repeat(2, minmax(0px, 1fr)) ;});\n}\n\n.standardLayoutGridItem(@maxWidth: var(--max-width-static-md), @padding: var(--padding-static)) {\n    .handleMaxWidth(@maxWidth);\n    .handlePadding(@padding);\n}\n\n.handleGridStyles(@grid-gap-dynamic: var(--grid-gap-static-md)) {\n    --grid-gap-dynamic: @grid-gap-dynamic;\n    display: grid;\n    grid-template-columns: repeat(var(--grid-num-columns, 1), minmax(0px, 1fr));\n    grid-template: var(\n        --grid-template-override,\n        auto / repeat(var(--grid-num-columns, 1), minmax(0, 1fr))\n    );\n    grid-gap: var(--grid-gap-dynamic);\n    align-items: var(--grid-align-items);\n    align-content: var(--grid-align-content);\n    align-self: var(--grid-align-self);\n    justify-items: var(--grid-justify-items);\n    justify-content: var(--grid-justify-content);\n    justify-self: var(--grid-justify-self);\n}\n\n/* 4.3 Max-Width */\n.maxWidth(@padding: 0) {\n    max-width: var(--max-width);\n    width: 100%;\n    margin: 0 auto;\n    padding-left: @padding;\n    padding-right: @padding;\n}\n.maxWidthWithNormalPadding() {\n    .maxWidth(var(--padding-sides));\n}\n\n.handleMaxWidth(@max-width-default: 1000000px) {\n    width: 100%;\n    max-width: calc(\n        var(--max-width-dynamic, @max-width-default) +\n            var(--padding-dynamic, 0px) * 2\n    ) !important;\n    margin: 0 auto;\n}\n\n.breakout(@max-width-default: 100vw) {\n    @margin: calc((@max-width-default / 2) * -1);\n    width: @max-width-default;\n    max-width: @max-width-default !important;\n    position: relative;\n    left: 50%;\n    right: 50%;\n    margin-left: @margin;\n    margin-right: @margin;\n}\n\n.fullWidth() {\n    .breakout;\n}\n\n/* 4.4 Images */\n.handleAspectRatio() {\n    --aspect-ratio-default: 1;\n    .lgMin({\n        --aspect-ratio-default: 16/9;\n    });\n\n    position: relative;\n    &:before {\n        content: '';\n        height: 0;\n        width: 100%;\n        display: block;\n        padding-bottom: calc(\n            100% / calc(var(--aspect-ratio, var(--aspect-ratio-default)))\n        );\n    }\n    > * {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n    }\n}\n.setAspectRatio(@ratio) {\n    --aspect-ratio: @ratio;\n    .handleAspectRatio;\n}\n\n.handleParallaxPerspective() {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    overflow-x: hidden;\n    overflow-y: scroll;\n    perspective: var(--parallax-perspective);\n    perspective-origin: 0 0;\n}\n.handleParallaxDistance() {\n    transform: translateZ(var(--parallax-distance))\n        scale(\n            calc(\n                (var(--parallax-perspective) - var(--parallax-distance)) /\n                    var(--parallax-distance)\n            )\n        );\n}\n\n.handleImageRounding() {\n    border-radius: var(--image-rounding-dynamic, 0px);\n}\n\n/* 4.5 Padding */\n.handlePadding(@paddingSides: initial, @paddingTopBottom: initial) {\n    --padding-dynamic: @paddingSides;\n    --padding-dynamic-tb: @paddingTopBottom;\n\n    padding: var(--padding-t, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0) var(--padding-b, var(--padding-dynamic-tb, 0))\n        var(--padding-dynamic, 0);\n}\n\n/* 4.6 Fonts */\n.loadFont(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff') format('woff');\n    }\n}\n.loadFontWoff2(@family, @weight: 400, @style: normal, @file: @family) {\n    @font-face {\n        font-family: @family;\n        font-style: @style;\n        font-weight: @weight;\n        src: url('../fonts/@{file}.woff2') format('woff2');\n    }\n}\n.fontClip(@backgroundImg) {\n    -webkit-background-clip: text;\n    -webkit-text-fill-color: transparent;\n    @backgroundImg();\n}\n\n/* 4.7 Games */\n.gta(@rules) {\n    [data-game^='gta'] {\n        @rules();\n    }\n}\n\n.isGta(@rules) {\n    [data-game^='gta'] & {\n        @rules();\n    }\n}\n\n.rdr(@rules) {\n    [data-game='rdo'],\n    [data-game^='rdr'] {\n        @rules();\n    }\n}\n\n.isRdr(@rules) {\n    [data-game='rdo'] &,\n    [data-game^='rdr'] & {\n        @rules();\n    }\n}\n\n/* 4.8 Tina */\n.tinaTextField() {\n    padding: var(--tina-padding-small);\n    border-radius: var(--tina-radius-small);\n    background: var(--tina-color-grey-0);\n    color: var(--tina-color-grey-10);\n    background-color: var(--tina-color-grey-0);\n    border: 1px solid var(--tina-color-grey-2);\n    box-shadow: 0 0 0 2px transparent;\n    margin-bottom: 14px;\n}\n\n/* 4.9 Hacks */\n.safariBorderRadiusOverflowFix() {\n    // https://stackoverflow.com/questions/49066011/overflow-hidden-with-border-radius-not-working-on-safari\n    -webkit-mask-image: -webkit-radial-gradient(white, black);\n}\n\n.forceGpuRendering() {\n    // https://web.dev/animations-guide/#force\n    transform: translateZ(0);\n}\n\n/* 5. Presentational */\n@locales: en_us, fr_fr, de_de, es_es, es_mx, it_it, pt_br, pl_pl, ru_ru, ja_jp,\n    ko_kr, zh_tw, zh_hans;\n\n.placeholder(@rules) {\n    &::-webkit-input-placeholder {\n        @rules();\n    }\n    &:-moz-placeholder {\n        @rules();\n    }\n    &::-moz-placeholder {\n        @rules();\n    }\n    &:-ms-input-placeholder {\n        @rules();\n    }\n}\n\n.bgImg() {\n    background-size: cover;\n    background-position: center center;\n    background-repeat: no-repeat;\n}\n\n.themeDark() {\n    color: #e8e8e8;\n    --tag-color: #e8e8e8;\n}\n\n.outbound() {\n    content: '';\n    display: inline-block;\n    background-size: 100%;\n    background-repeat: no-repeat;\n    background-position: 0% 50%;\n    vertical-align: baseline;\n    margin-left: var(--grid-gap-static-xs);\n    width: 1rem;\n    height: 1rem;\n    background-image: data-uri('../img/outbound.svg');\n}\n\n.blurryBg() {\n    transition: filter 0.8s;\n    filter: blur(var(--blur-because-in-bg, 0px));\n}\n\n.fancyLink() {\n    position: relative;\n    background: transparent;\n    padding: 0;\n    z-index: 1;\n    @media (min-width: @screen-sm) {\n        transition: all 0.2s ease;\n        &:before {\n            content: '';\n            display: block;\n            position: absolute;\n            bottom: 0;\n            left: -0.1rem;\n            width: calc(100% + 0.2rem);\n            height: 2px;\n            background: var(--body-color);\n            transition: all 0.2s ease;\n            z-index: -1;\n            border-radius: 0.25rem;\n        }\n        &:hover {\n            color: #161616;\n\n            &:before {\n                left: -0.25rem;\n                width: calc(100% + 0.5rem);\n                height: 100%;\n            }\n        }\n    }\n    img {\n        display: block;\n    }\n}\n.stdHover() {\n    transition:\n        color 0.2s ease,\n        opacity 0.2s ease;\n    &:hover {\n        color: var(--standard-color);\n        opacity: 1;\n    }\n}\n.stdIconHover() {\n    &:hover {\n        filter: brightness(0) saturate(100%) invert(76%) sepia(15%)\n            saturate(5173%) hue-rotate(348deg) brightness(105%) contrast(98%);\n    }\n}\n.card() {\n    .handleImageRounding;\n    --image-rounding-dynamic: var(--image-rounding-static-sm);\n    background: var(--card-background-color);\n    overflow: hidden;\n    display: flex;\n    flex-flow: column;\n    transition: transform 0.2s ease;\n    border: 1px solid var(--border-color);\n    .info {\n        .handleGridStyles;\n        --grid-gap-dynamic: var(--grid-gap-static-xs);\n        padding: 2rem 1.5rem;\n        .title {\n            --line-height-h: 1.3;\n            color: var(--color-h);\n        }\n    }\n}\n\n.cardHover() {\n    transition:\n        transform 0.3s cubic-bezier(0, 0, 0.5, 1),\n        box-shadow 0.3s cubic-bezier(0, 0, 0.5, 1);\n    box-shadow: 0px 0px 40px -25px rgba(0, 0, 0, 0);\n\n    &:hover {\n        transform: scale(1.025);\n        box-shadow: 0px 30px 40px -25px rgba(0, 0, 0, 1);\n    }\n}\n\n.cardSecondary() {\n    .card();\n    .info {\n        padding: 1.5rem;\n    }\n    .title {\n        font-size: var(--font-size-3);\n        font-weight: 400;\n    }\n}\n\n.cardTertiary() {\n    .cardSecondary();\n    --image-rounding-dynamic: 0;\n    --card-background-color: transparent;\n    grid-gap: var(--grid-gap-static-sm);\n    overflow: unset;\n    border: none;\n    .info {\n        padding: 0;\n    }\n    .img {\n        .handleImageRounding;\n        --image-rounding-dynamic: var(--image-rounding-static-sm);\n    }\n}\n\n.standardPage() {\n    .maxWidthWithNormalPadding;\n    padding-top: var(--padding-top-bottom);\n    padding-bottom: var(--padding-top-bottom);\n}\n\n.dropdownThing(@defaultDeg: 0deg; @openDeg: 180deg) {\n    position: relative;\n    padding-right: calc(var(--grid-gap-static-xs) + 24px);\n    .dropdownCaret(yellow; @defaultDeg; @openDeg);\n}\n.dropdownCaret(@color; @defaultDeg: 0deg; @openDeg: 180deg) {\n    &:after {\n        display: inline-block;\n        content: '';\n        position: absolute;\n        top: 0;\n        right: 0;\n        @img: '../img/dropdown-@{color}.svg';\n        background-image: data-uri(@img);\n        background-repeat: no-repeat;\n        width: image-width(@img);\n        height: 100%;\n        background-position: center;\n        background-size: 100%;\n        transform: rotate(@defaultDeg);\n        transition: transform 0.3s;\n        .open& {\n            transform: rotate(@openDeg);\n        }\n    }\n}\n\n.sectionHeader() {\n    margin: 0 0 1.5rem;\n    font-size: var(--font-size-5);\n    font-family: var(--font-family-h);\n    font-weight: var(--font-weight-h);\n    --line-height-h: 1.3;\n\n    .xlMin ({\n        font-size: var(--font-size-6);\n    });;\n}\n.sectionHeaderSmall() {\n    .sectionHeader;\n    font-size: var(--font-size-4);\n\n    .xlMin ({\n        font-size: var(--font-size-5);\n    });;\n}\n\n.tag() {\n    color: var(--tag-color, var(--body-color));\n    font-weight: 700;\n    font-size: var(--font-size-2);\n    line-height: 1.6;\n}\n\n.date() {\n    .tag;\n    font-weight: 400;\n    opacity: 0.65;\n}\n.animationFadeInUp() {\n    :global {\n        animation: globalFadeInUp 0.75s;\n        animation-play-state: paused;\n    }\n}\n.animationPaused() {\n    animation-play-state: paused;\n}\n.animationRunning() {\n    animation-play-state: running;\n}\n\n.button() {\n    font-weight: 700;\n    align-self: center;\n    display: inline-block;\n    text-transform: uppercase;\n    background: transparent;\n    border: 1px solid var(--color-h);\n    padding: 1rem 3rem;\n    color: inherit;\n    cursor: pointer;\n    border-radius: 0.25rem;\n    color: var(--color-h);\n    line-height: 100%;\n    transition: all 0.2s ease;\n    &:focus,\n    &:hover {\n        background: var(--standard-color);\n        border-color: var(--standard-color);\n        color: #161616;\n    }\n    &.secondary {\n        .fancyLink;\n        outline: none;\n        border: none;\n        text-transform: none;\n        font-weight: 400;\n        line-height: unset;\n        .smMin ({\n            &:before {\n                background: var(--standard-color);\n                height:4px;\n            }\n            &:focus,\n            &:hover {\n                &:before {\n                    left: -0.5rem;\n                    width: calc(100% + 1rem);\n                    height: 100%;\n                }\n            }\n         });;\n    }\n    &[disabled] {\n        opacity: 0.5;\n    }\n}\n\n.expandToEdges() {\n    margin-top: calc(var(--padding-top-bottom) * -1);\n    margin-left: calc(var(--padding-sides) * -1);\n    width: 100vw;\n    width: calc(100% + calc(var(--padding-sides) * 2));\n}\n\n.shadow(@boxShadow: 0 10px 30px rgba(0, 0, 0, 0.5)) {\n    // border: 1px solid rgba(0, 0, 0, 0.15);\n    box-shadow: @boxShadow;\n}\n.shadowTop() {\n    box-shadow: -3px -3px 6px 0 rgba(0, 0, 0, 0.2);\n}\n\n.aspect-ratio(@width, @height, @selector: div, @pre: ~'') {\n    @supports not (aspect-ratio: @width / @height) {\n        position: relative;\n        &:before {\n            display: block;\n            content: '';\n            width: 100%;\n            padding-top: calc((@height / @width) * 100%);\n        }\n        > @{pre}@{selector} {\n            position: absolute;\n            top: 0;\n            left: 0;\n            right: 0;\n            bottom: 0;\n            width: 100% !important;\n            height: 100% !important;\n        }\n    }\n\n    @supports (aspect-ratio: @width / @height) {\n        @{pre}@{selector} {\n            aspect-ratio: @width / @height !important;\n            width: 100% !important;\n            height: auto !important;\n        }\n    }\n}\n.unset-aspect-ratio(@selector, @pre: ~'') {\n    @supports not (aspect-ratio: 1/1) {\n        position: unset;\n        &:before {\n            display: none;\n        }\n        > @{pre}@{selector} {\n            position: unset;\n            width: 100% !important;\n            height: unset !important;\n        }\n    }\n\n    @supports (aspect-ratio: 1/1) {\n        @{pre}@{selector} {\n            aspect-ratio: unset !important;\n        }\n    }\n}\n\n.rockstarTypography() {\n    --font-family-std: NeueHelveticaPaneuropean, sans-serif;\n    --leter-spacing-std: 0;\n\n    font-size: var(--font-size-2);\n    font-family: var(--font-family-std);\n    letter-spacing: var(--leter-spacing-std);\n\n    button {\n        letter-spacing: var(--leter-spacing-std);\n    }\n}\n\n.setNodeFontSizing() {\n    // TODO audit this. .5rem is very small.\n    --font-size-1: 0.75rem;\n\n    --font-size-2: 0.75rem;\n    --font-size-3: 1rem;\n    --font-size-4: 1.25rem;\n    --font-size-5: 1.5rem;\n    --font-size-6: 2rem;\n    --font-size-7: 2.5rem;\n    --font-size-8: 3rem;\n    --font-size-9: 4rem;\n    --font-size-10: 5rem;\n}\n\n.setRootFontSizing() {\n    .sm({--root-font-size: 16;});\n    .md({--root-font-size: 18;});\n    .lg({--root-font-size: 20;});\n    .xl({--root-font-size: 22;});\n}\n\n.button-text () {\n    font-size: var(--font-size-4);\n    font-family: var(--font-family-h);\n    line-height: var(--line-height-sm);\n    font-weight: var(--font-weight-regular);\n    letter-spacing: var(--letter-spacing-h);\n    text-transform: uppercase;\n}\n\n.button-text-sm () {\n    .button-text;\n    font-size: var(--font-size-3);\n}\n\n.button-text-md () {\n    .button-text;\n    font-size: var(--font-size-4);\n    padding: 0 var(--padding-md);\n}\n\n.button-text-lg () {\n    .button-text;\n    font-size: var(--font-size-5);\n    padding: 0 var(--padding-lg);\n}\n\n.button-text-xl () {\n    .button-text;\n    font-size: var(--font-size-7);\n    padding: 0 var(--padding-xl);\n}\n\n.cta-button() {\n    @import '../less/gen9-vars';\n\n    --button-text-color-hover: var(--white-100);\n\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    justify-content: center;\n    gap: var(--grid-gap-xs, 0.5rem);\n\n    background: var(\n        --button-background-color,\n        var(--black-65, hsla(0, 0%, 7%, 0.65))\n    );\n    border: 1px solid var(--white-100, #fff);\n    border-radius: var(--border-radius-sm, 4px);\n    color: var(--button-text-color, var(--white-100));\n    cursor: pointer;\n    padding: 0 var(--padding-sm);\n\n    width: 100%;\n    height: var(--button-height-3, 3rem);\n\n    transition: all 0.3s ease-in-out;\n\n    &[data-brand='reddeadredemption'],\n    [data-brand='reddeadredemption'] & {\n        --accent-color: #cc0000;\n        --font-family-h: RDRUltra;\n\n        :lang(pl_pl) {\n            --font-family-h: RDRUltra, NeueHelveticaPaneuropean;\n        }\n    }\n\n    &[data-brand='bully'],\n    [data-brand='bully'] & {\n        --accent-color: #f8ad00;\n        --font-family-h: HelveticaNowDisplayBold;\n        --button-background-color: var(--white-100);\n        --button-background-color-hover: var(--accent-color);\n        --button-text-color: var(--black-100);\n        --button-text-color-hover: var(--black-100);\n\n        backdrop-filter: blur(25px);\n        padding: 0 var(--padding-md, 32px);\n    }\n\n    img {\n        height: 1rem;\n        width: auto;\n    }\n\n    .label {\n        .button-text();\n        display: flex;\n        flex-shrink: 0;\n    }\n\n    &.primary {\n        color: var(--black-100);\n        background-color: var(--white-100);\n    }\n\n    &:hover {\n        border-color: var(--accent-color, var(--btn-active-color));\n        background-color: var(--accent-color, var(--btn-active-color));\n        color: var(--button-text-color-hover, var(--btn-active-color));\n\n        &.primary {\n            color: var(--button-text-color-hover, var(--white-100));\n        }\n    }\n\n    @media (min-width: 1280px) {\n        padding: 0 var(--padding-md);\n    }\n\n    @media (min-width: 768px) and (max-width: 1539px) {\n        height: 2.5rem;\n\n        img {\n            height: 1rem;\n        }\n\n        .label {\n            .button-text-sm();\n        }\n    }\n}\n"],
        sourceRoot: ""
      }]), g.locals = {
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
      const h = g
    },
    5520: n => {
      var e = {
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

      function t(n, e) {
        if ("FragmentSpread" === n.kind) e.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var a = n.type;
          "NamedType" === a.kind && e.add(a.name.value)
        }
        n.selectionSet && n.selectionSet.selections.forEach((function(n) {
          t(n, e)
        })), n.variableDefinitions && n.variableDefinitions.forEach((function(n) {
          t(n, e)
        })), n.definitions && n.definitions.forEach((function(n) {
          t(n, e)
        }))
      }
      e.loc.source = {
        body: 'query GameData(\n    $titleSlug: String!\n    $locale: String!\n    $withMetaTitle: Boolean = false\n    $metaUrl: String = "/"\n) {\n    meta: metaUrl(locale: $locale, domain: "www", url: $metaUrl)\n        @include(if: $withMetaTitle) {\n        title\n    }\n    game(titleSlug: $titleSlug, locale: $locale) {\n        ratingDescriptors\n        ratingFooter\n        ratingImg\n        ratingUrl\n    }\n}\n',
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function r(n, e) {
        for (var t = 0; t < n.definitions.length; t++) {
          var a = n.definitions[t];
          if (a.name && a.name.value == e) return a
        }
      }
      e.definitions.forEach((function(n) {
        if (n.name) {
          var e = new Set;
          t(n, e), a[n.name.value] = e
        }
      })), n.exports = e, n.exports.GameData = function(n, e) {
        var t = {
          kind: n.kind,
          definitions: [r(n, e)]
        };
        n.hasOwnProperty("loc") && (t.loc = n.loc);
        var i = a[e] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(n) {
            s.add(n)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(n) {
            o.has(n) || (o.add(n), (a[n] || new Set).forEach((function(n) {
              s.add(n)
            })))
          }))
        }
        return o.forEach((function(e) {
          var a = r(n, e);
          a && t.definitions.push(a)
        })), t
      }(e, "GameData")
    },
    5124: n => {
      var e = {
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

      function t(n, e) {
        if ("FragmentSpread" === n.kind) e.add(n.name.value);
        else if ("VariableDefinition" === n.kind) {
          var a = n.type;
          "NamedType" === a.kind && e.add(a.name.value)
        }
        n.selectionSet && n.selectionSet.selections.forEach((function(n) {
          t(n, e)
        })), n.variableDefinitions && n.variableDefinitions.forEach((function(n) {
          t(n, e)
        })), n.definitions && n.definitions.forEach((function(n) {
          t(n, e)
        }))
      }
      e.loc.source = {
        body: "query abc123($locale: String!) {\n    abc123: abc123Aa73120ec29e42c87d5233b2f9a126277a5e3b8d9553ed992da0adf6a277bb2c(\n        locale: $locale\n    ) {\n        key\n        value\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var a = {};

      function r(n, e) {
        for (var t = 0; t < n.definitions.length; t++) {
          var a = n.definitions[t];
          if (a.name && a.name.value == e) return a
        }
      }
      e.definitions.forEach((function(n) {
        if (n.name) {
          var e = new Set;
          t(n, e), a[n.name.value] = e
        }
      })), n.exports = e, n.exports.abc123 = function(n, e) {
        var t = {
          kind: n.kind,
          definitions: [r(n, e)]
        };
        n.hasOwnProperty("loc") && (t.loc = n.loc);
        var i = a[e] || new Set,
          o = new Set,
          s = new Set;
        for (i.forEach((function(n) {
            s.add(n)
          })); s.size > 0;) {
          var l = s;
          s = new Set, l.forEach((function(n) {
            o.has(n) || (o.add(n), (a[n] || new Set).forEach((function(n) {
              s.add(n)
            })))
          }))
        }
        return o.forEach((function(e) {
          var a = r(n, e);
          a && t.definitions.push(a)
        })), t
      }(e, "abc123")
    },
    6672: (n, e, t) => {
      var a = {
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

      function r(n) {
        var e = i(n);
        return t(e)
      }

      function i(n) {
        if (!t.o(a, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }
        return a[n]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = i, n.exports = r, r.id = 6672
    },
    8194: (n, e, t) => {
      var a = {
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

      function r(n) {
        var e = i(n);
        return t(e)
      }

      function i(n) {
        if (!t.o(a, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }
        return a[n]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = i, n.exports = r, r.id = 8194
    },
    7958: (n, e, t) => {
      var a = {
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

      function r(n) {
        var e = i(n);
        return t(e)
      }

      function i(n) {
        if (!t.o(a, n)) {
          var e = new Error("Cannot find module '" + n + "'");
          throw e.code = "MODULE_NOT_FOUND", e
        }
        return a[n]
      }
      r.keys = function() {
        return Object.keys(a)
      }, r.resolve = i, n.exports = r, r.id = 7958
    },
    7558: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d51b141250a4851d7ec3673d88dbd20a.png"
    },
    9362: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7ac89f9e00ded04ef4b2dd3eaf3e8734.svg"
    },
    7299: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f44dd7aad9d6c62e40a11f51252f59b8.svg"
    },
    9020: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/204116b24cd9e9ab4e71af21b3a96179.svg"
    },
    7065: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/676b3908098d8b19f1019ce361af45ec.png"
    },
    6554: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/03ab76c58ed61a83bf035c923dbe32b2.svg"
    },
    1392: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f468aef6f0b5399d5c0f6b2e95b60cc5.svg"
    },
    8674: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/0b31c79d361cfd92e1a405dbbf4890bd.svg"
    },
    9836: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/3689ac97526f00a4537e1b38ec82a074.svg"
    },
    4222: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07f9f9e93ec430813e74cbce545962c4.svg"
    },
    8648: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/608f591c35aff9d47091dd7fe9a8fb13.svg"
    },
    8054: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/198ced82807c854e92e84e23f7434c91.svg"
    },
    3781: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edf01daa4f0392081705c17a74d8a146.svg"
    },
    9235: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c4dd58f5b5b97796b6c6177de364dd36.svg"
    },
    4256: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/201de0eb81b09ea93aa1aef2a6824b7c.svg"
    },
    5315: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/534078f6307f97ce0d70e0bb885f9d77.svg"
    },
    7256: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f4b0d9409df1e8a420b2118e4e601263.svg"
    },
    419: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/092865e0ddae5190dc3c0284ee3c21bd.svg"
    },
    9069: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/80dd50a2fa9aae3b5d6effdb2d9c2661.svg"
    },
    5088: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5d471eef7883043fdabe1b3ed17a72b3.svg"
    },
    8177: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/35cf853d7882b090b56837bd08127da1.svg"
    },
    6595: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/72e8749316b4d1f52925b95e075e9c24.svg"
    },
    8414: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c2acdad576048f5c48b2ee6a2a2a90a3.svg"
    },
    1864: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52c5ab315a1ff90360e06372c3f2c0.svg"
    },
    7404: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1f569db6c94b4f81417f62e91759082.svg"
    },
    8711: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fe262661c6667d97f441e045067f4a0f.svg"
    },
    6312: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1b457cab77cb82e1c05ad12628414576.svg"
    },
    8157: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    9612: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/1a3660d76f39527a79f8a49bb27a74be.svg"
    },
    9303: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/515f2884036e870905ae53f156692721.svg"
    },
    7443: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a3931a545299e205758648bce29e5c49.svg"
    },
    9980: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/05e9f2f27883d4cbabb3d4e4e16c9c74.svg"
    },
    4611: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f2fc4de3decfa0ac007f6cbd91658a9.svg"
    },
    8918: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cd57122be57f5e3a9dc4d0a0f2503fb1.svg"
    },
    3117: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2d910a48fc0914f58ca80dc0732a7677.svg"
    },
    2024: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6e99540df7fd07d75b08a5fbc02d4815.svg"
    },
    324: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/937b7a0c5a128c39addf2adeba2d2f23.svg"
    },
    2466: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46a27d8d16855dcc2a217f48243c6d82.svg"
    },
    3950: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/e5792c85d5a88a0b7c75af087e4c6ee2.svg"
    },
    9188: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4da522682784ded3799c5a6f9f8c213a.svg"
    },
    8712: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/29ea20c333709a952c2eb3a2591d435d.svg"
    },
    1022: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7c66fbb7c204e32da80ccb1693d15e00.svg"
    },
    2772: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/954d63889440be17e1ebef30b7026369.svg"
    },
    9815: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb8777f38cbd4d721261ad736c1f2e7.svg"
    },
    7580: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/6079496697e537802f8a0eb5a83d2e94.svg"
    },
    4432: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a19fbf81b03db0fda00839496a3ce5.svg"
    },
    5821: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/129ef1c1a15ffc7afb86ce282e48decb.svg"
    },
    6929: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a2a5d9ca87a5bd107da9bb33d3d718e8.svg"
    },
    1575: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/dabd13175cc0894dcb3f942d3d2dab86.svg"
    },
    7351: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/64d281825da1c782681bcc096d693e32.svg"
    },
    2424: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b43dddd485139df895fc531e79c75e68.svg"
    },
    6618: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c01f38f1051e751caa633d533202873c.svg"
    },
    491: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/27a26f477c8db29df4ceec4517c7f42b.svg"
    },
    4293: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a380d3ce353544a356e8ce48f8586804.png"
    },
    6855: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/bba2f70e014e82b336a9f80625053089.svg"
    },
    8952: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/85250e8a0e5a5a1209f214423f6ebe43.svg"
    },
    5044: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f1a94d5705ae3ddeb4c8c2fde79bfe81.svg"
    },
    2690: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/a825976dddc59e33b3ce146ad6cd3d20.svg"
    },
    1913: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/01b0cd4466759aa349ac4036594ab6ae.svg"
    },
    4406: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/9c699f3b76c15209c8059f02507e11b5.svg"
    },
    6151: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b48e041f1412ff62c8a92dc424b59aa5.svg"
    },
    7707: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/07362df5a2671c08b232a97d503cd6bf.svg"
    },
    717: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c3fe2a9610ca8b42807dfa99073d68b3.svg"
    },
    2696: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/056d3bdf1f300bcb7efa4aebcfc5224d.svg"
    },
    1228: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/278e84e5a41407499c43a30f545da3e8.svg"
    },
    2323: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/703a546f7a5109c1e2af87a212135aad.png"
    },
    6562: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/0cd5b1e38f54ef83942d288ce01980e6.woff"
    },
    1117: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/e2838b19e760e3e6f50866c533aeb282.woff"
    },
    9133: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/c31221106dc90ced1c3479d73a5fe115.woff"
    },
    3458: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/e34f12fc5033d9cdc9f062f80c447b8f.woff"
    },
    8326: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/8517df1baaad4b49346c1293b195088a.woff"
    },
    225: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/6ffa7afc52831edad562d5a1c17dc41e.woff"
    },
    5293: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/90ef908f0a56e2fa2b7d9b2056d81bcc.woff"
    },
    6962: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/fonts/94d584a6e397820977db9932febb4b92.woff"
    },
    4436: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/edd74b31c8db281779029448248f466b.svg"
    },
    4720: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/71d4d17edcd49703a5ea446cc0e588e6.jpg"
    },
    5231: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f7eab33a4989ce5f0cd89c70723909b3.jpg"
    },
    2062: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/309aa5a460fa7144f3633cf36159c417.jpg"
    },
    7716: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/cff62fb2b8dc824b667505750129bd4d.jpg"
    },
    365: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c762105ff73b658b9e0d5373b9f6a476.png"
    },
    1091: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d1fd72e459fc90381589af486ab6b029.png"
    },
    4291: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/530ffb0c42c0c18dcacbeb49c6587895.png"
    },
    9016: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/52c0b621f342d970c1e7726a83094887.png"
    },
    3233: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4bc6cd678f5391e5108a0e7fc1828436.png"
    },
    6089: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/b3f050fed97a2b5bd571123c1a302593.png"
    },
    7650: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/f37e3b93d105ed47dff3a5083ba21dd9.svg"
    },
    159: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/5f52ba580606a589f4ac105866012722.svg"
    },
    5116: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/c151d539436aaf8c9460d25e88a9307a.svg"
    },
    6773: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/d358ca0f4ef1b724361c30dd82547992.png"
    },
    9129: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/fa598c85c9406b0078e3db23e2b605a8.svg"
    },
    5741: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/4933ca1111cda1074c52c3918dbfbaf2.svg"
    },
    4238: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/46b63430f04ecee9ad59d197168370a0.svg"
    },
    1258: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/7e47fca9e280c162468fe51d577f6db1.svg"
    },
    6747: n => {
      "use strict";
      n.exports = "https://media-rockstargames-com.akamaized.net/mfe6/prod/__common/img/2eb63e6e7c7df7dcec0a9e0908e8b5d2.svg"
    }
  }
]);