! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "14653c28-4bad-4533-8863-9a2d87a092d8", e._sentryDebugIdIdentifier = "sentry-dbid-14653c28-4bad-4533-8863-9a2d87a092d8")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [9449], {
    4970: (e, t, n) => {
      var r = n(5590).Symbol;
      e.exports = r
    },
    6203: (e, t, n) => {
      var r = n(4970),
        o = n(7390),
        a = n(5461),
        c = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : c && c in Object(e) ? o(e) : a(e)
      }
    },
    811: (e, t, n) => {
      var r = n(2089),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    4239: (e, t, n) => {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r
    },
    7390: (e, t, n) => {
      var r = n(4970),
        o = Object.prototype,
        a = o.hasOwnProperty,
        c = o.toString,
        i = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, i),
          n = e[i];
        try {
          e[i] = void 0;
          var r = !0
        } catch (e) {}
        var o = c.call(e);
        return r && (t ? e[i] = n : delete e[i]), o
      }
    },
    5461: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    5590: (e, t, n) => {
      var r = n(4239),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = r || o || Function("return this")();
      e.exports = a
    },
    2089: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    2296: (e, t, n) => {
      var r = n(8660),
        o = n(1383),
        a = n(8635),
        c = Math.max,
        i = Math.min;
      e.exports = function(e, t, n) {
        var u, l, d, s, f, v, p = 0,
          h = !1,
          m = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function b(t) {
          var n = u,
            r = l;
          return u = l = void 0, p = t, s = e.apply(r, n)
        }

        function y(e) {
          var n = e - v;
          return void 0 === v || n >= t || n < 0 || m && e - p >= d
        }

        function w() {
          var e = o();
          if (y(e)) return E(e);
          f = setTimeout(w, function(e) {
            var n = t - (e - v);
            return m ? i(n, d - (e - p)) : n
          }(e))
        }

        function E(e) {
          return f = void 0, g && u ? b(e) : (u = l = void 0, s)
        }

        function _() {
          var e = o(),
            n = y(e);
          if (u = arguments, l = this, v = e, n) {
            if (void 0 === f) return function(e) {
              return p = e, f = setTimeout(w, t), h ? b(e) : s
            }(v);
            if (m) return clearTimeout(f), f = setTimeout(w, t), b(v)
          }
          return void 0 === f && (f = setTimeout(w, t)), s
        }
        return t = a(t) || 0, r(n) && (h = !!n.leading, d = (m = "maxWait" in n) ? c(a(n.maxWait) || 0, t) : d, g = "trailing" in n ? !!n.trailing : g), _.cancel = function() {
          void 0 !== f && clearTimeout(f), p = 0, u = v = l = f = void 0
        }, _.flush = function() {
          return void 0 === f ? s : E(o())
        }, _
      }
    },
    8660: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    939: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    3771: (e, t, n) => {
      var r = n(6203),
        o = n(939);
      e.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
      }
    },
    1383: (e, t, n) => {
      var r = n(5590);
      e.exports = function() {
        return r.Date.now()
      }
    },
    8635: (e, t, n) => {
      var r = n(811),
        o = n(8660),
        a = n(3771),
        c = /^[-+]0x[0-9a-f]+$/i,
        i = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        l = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return NaN;
        if (o(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = o(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = r(e);
        var n = i.test(e);
        return n || u.test(e) ? l(e.slice(2), n ? 2 : 8) : c.test(e) ? NaN : +e
      }
    },
    5402: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => z
      });
      var r = n(3461),
        o = n(2229),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;

      function d(e) {
        return e
      }
      var s = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = d);
            var n = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
              },
              useMedium: function(e) {
                var o = t(e, r);
                return n.push(o),
                  function() {
                    n = n.filter((function(e) {
                      return e !== o
                    }))
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; n.length;) {
                  var t = n;
                  n = [], t.forEach(e)
                }
                n = {
                  push: function(t) {
                    return e(t)
                  },
                  filter: function() {
                    return n
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var t = [];
                if (n.length) {
                  var o = n;
                  n = [], o.forEach(e), t = n
                }
                var a = function() {
                    var n = t;
                    t = [], n.forEach(e)
                  },
                  c = function() {
                    return Promise.resolve().then(a)
                  };
                c(), n = {
                  push: function(e) {
                    t.push(e), c()
                  },
                  filter: function(e) {
                    return t = t.filter(e), n
                  }
                }
              }
            }
          }(null);
          return t.options = (0, r.__assign)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        f = function() {},
        v = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            c = a[0],
            d = a[1],
            v = e.forwardProps,
            p = e.children,
            h = e.className,
            m = e.removeScrollBar,
            g = e.enabled,
            b = e.shards,
            y = e.sideCar,
            w = e.noIsolation,
            E = e.inert,
            _ = e.allowPinchZoom,
            S = e.as,
            x = void 0 === S ? "div" : S,
            C = e.gapMode,
            k = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            M = y,
            T = function(e, t) {
              var n, r, a, c = (n = t || null, r = function(t) {
                return e.forEach((function(e) {
                  return i(e, t)
                }))
              }, (a = (0, o.useState)((function() {
                return {
                  value: n,
                  callback: r,
                  facade: {
                    get current() {
                      return a.value
                    },
                    set current(e) {
                      var t = a.value;
                      t !== e && (a.value = e, a.callback(e, t))
                    }
                  }
                }
              }))[0]).callback = r, a.facade);
              return u((function() {
                var t = l.get(c);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = c.current;
                  n.forEach((function(e) {
                    r.has(e) || i(e, null)
                  })), r.forEach((function(e) {
                    n.has(e) || i(e, o)
                  }))
                }
                l.set(c, e)
              }), [e]), c
            }([n, t]),
            N = (0, r.__assign)((0, r.__assign)({}, k), c);
          return o.createElement(o.Fragment, null, g && o.createElement(M, {
            sideCar: s,
            removeScrollBar: m,
            shards: b,
            noIsolation: w,
            inert: E,
            setCallbacks: d,
            allowPinchZoom: !!_,
            lockRef: n,
            gapMode: C
          }), v ? o.cloneElement(o.Children.only(p), (0, r.__assign)((0, r.__assign)({}, N), {
            ref: T
          })) : o.createElement(x, (0, r.__assign)({}, N, {
            className: h,
            ref: T
          }), p))
        }));
      v.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, v.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var p = function(e) {
        var t = e.sideCar,
          n = (0, r.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = t.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, n))
      };
      p.isSideCarExport = !0;
      var h, m, g, b, y = function() {
          return n.nc
        },
        w = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        E = function(e) {
          return parseInt(e || "", 10) || 0
        },
        _ = (g = 0, b = null, h = {
          add: function(e) {
            var t, n;
            0 == g && (b = function() {
              if (!document) return null;
              var e = document.createElement("style");
              e.type = "text/css";
              var t = y();
              return t && e.setAttribute("nonce", t), e
            }()) && (n = e, (t = b).styleSheet ? t.styleSheet.cssText = n : t.appendChild(document.createTextNode(n)), function(e) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(b)), g++
          },
          remove: function() {
            !--g && b && (b.parentNode && b.parentNode.removeChild(b), b = null)
          }
        }, m = function(e, t) {
          o.useEffect((function() {
            return h.add(e),
              function() {
                h.remove()
              }
          }), [e && t])
        }, function(e) {
          var t = e.styles,
            n = e.dynamic;
          return m(t, n), null
        }),
        S = "data-scroll-locked",
        x = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(S, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(S, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        C = function() {
          var e = parseInt(document.body.getAttribute(S) || "0", 10);
          return isFinite(e) ? e : 0
        },
        k = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(S, (C() + 1).toString()),
              function() {
                var e = C() - 1;
                e <= 0 ? document.body.removeAttribute(S) : document.body.setAttribute(S, e.toString())
              }
          }), []);
          var c = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return w;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [E(n), E(r), E(o)]
                }(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
              }
            }(a)
          }), [a]);
          return o.createElement(_, {
            styles: x(c, !t, a, n ? "" : "!important")
          })
        },
        M = function() {
          var e = function() {
            var e = function() {
              var e = 0,
                t = null;
              return {
                add: function(n) {
                  var r, o;
                  0 == e && (t = function() {
                    if (!document) return null;
                    var e = document.createElement("style");
                    e.type = "text/css";
                    var t = y();
                    return t && e.setAttribute("nonce", t), e
                  }()) && (o = n, (r = t).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(e) {
                    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                  }(t)), e++
                },
                remove: function() {
                  !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
                }
              }
            }();
            return function(t, n) {
              o.useEffect((function() {
                return e.add(t),
                  function() {
                    e.remove()
                  }
              }), [t && n])
            }
          }();
          return function(t) {
            var n = t.styles,
              r = t.dynamic;
            return e(n, r), null
          }
        },
        T = !1;
      if ("undefined" != typeof window) try {
        var N = Object.defineProperty({}, "passive", {
          get: function() {
            return T = !0, !0
          }
        });
        window.addEventListener("test", N, N), window.removeEventListener("test", N, N)
      } catch (e) {
        T = !1
      }
      var R = !!T && {
          passive: !1
        },
        L = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        j = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), I(e, r)) {
              var o = A(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        I = function(e, t) {
          return "v" === e ? function(e) {
            return L(e, "overflowY")
          }(t) : function(e) {
            return L(e, "overflowX")
          }(t)
        },
        A = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        P = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        O = function(e) {
          return [e.deltaX, e.deltaY]
        },
        B = function(e) {
          return e && "current" in e ? e.current : e
        },
        W = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        D = 0,
        Y = [];

      function X(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const F = (Z = function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(D++)[0],
          i = o.useState(M)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(B), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(c))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(c)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(c))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var l = o.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = P(e),
              c = n.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              d = e.target,
              s = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === d.type) return !1;
            var f = j(s, d);
            if (!f) return !0;
            if (f ? r = s : (r = "v" === s ? "h" : "v", f = j(s, d)), !f) return !1;
            if (!a.current && "changedTouches" in e && (i || l) && (a.current = r), !r) return !0;
            var v = a.current || r;
            return function(e, t, n, r, o) {
              var a = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                c = a * r,
                i = n.target,
                u = t.contains(i),
                l = !1,
                d = c > 0,
                s = 0,
                f = 0;
              do {
                var v = A(e, i),
                  p = v[0],
                  h = v[1] - v[2] - a * p;
                (p || h) && I(e, i) && (s += h, f += p), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (t.contains(i) || t === i));
              return (d && (Math.abs(s) < 1 || !1) || !d && (Math.abs(f) < 1 || !1)) && (l = !0), l
            }(v, t, e, "h" === v ? i : l)
          }), []),
          d = o.useCallback((function(e) {
            var n = e;
            if (Y.length && Y[Y.length - 1] === i) {
              var r = "deltaY" in n ? O(n) : P(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(B).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (a.length > 0 ? l(n, a[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          s = o.useCallback((function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: X(r)
            };
            t.current.push(a), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            n.current = P(e), a.current = void 0
          }), []),
          v = o.useCallback((function(t) {
            s(t.type, O(t), t.target, l(t, e.lockRef.current))
          }), []),
          p = o.useCallback((function(t) {
            s(t.type, P(t), t.target, l(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return Y.push(i), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: p
            }), document.addEventListener("wheel", d, R), document.addEventListener("touchmove", d, R), document.addEventListener("touchstart", f, R),
            function() {
              Y = Y.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", d, R), document.removeEventListener("touchmove", d, R), document.removeEventListener("touchstart", f, R)
            }
        }), []);
        var h = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(i, {
          styles: W(c)
        }) : null, h ? o.createElement(k, {
          gapMode: e.gapMode
        }) : null)
      }, s.useMedium(Z), p);
      var Z, $ = o.forwardRef((function(e, t) {
        return o.createElement(v, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: F
        }))
      }));
      $.classNames = v.classNames;
      const z = $
    }
  }
]);