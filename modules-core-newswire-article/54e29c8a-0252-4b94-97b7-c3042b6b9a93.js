! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "54e29c8a-0252-4b94-97b7-c3042b6b9a93", e._sentryDebugIdIdentifier = "sentry-dbid-54e29c8a-0252-4b94-97b7-c3042b6b9a93")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-newswire-article",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [8463], {
    45739: (e, t, n) => {
      "use strict";
      n.d(t, {
        m: () => r
      });
      var r = function() {
        return n.nc
      }
    },
    80689: (e, t, n) => {
      var r = n(20605).Symbol;
      e.exports = r
    },
    95192: (e, t, n) => {
      var r = n(80689),
        o = n(54915),
        a = n(18150),
        c = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : c && c in Object(e) ? o(e) : a(e)
      }
    },
    42368: (e, t, n) => {
      var r = n(69896),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    38888: (e, t, n) => {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r
    },
    54915: (e, t, n) => {
      var r = n(80689),
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
    18150: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    20605: (e, t, n) => {
      var r = n(38888),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = r || o || Function("return this")();
      e.exports = a
    },
    69896: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    45757: (e, t, n) => {
      var r = n(23693),
        o = n(42204),
        a = n(79902),
        c = Math.max,
        i = Math.min;
      e.exports = function(e, t, n) {
        var u, l, d, f, s, v, p = 0,
          h = !1,
          m = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function b(t) {
          var n = u,
            r = l;
          return u = l = void 0, p = t, f = e.apply(r, n)
        }

        function y(e) {
          var n = e - v;
          return void 0 === v || n >= t || n < 0 || m && e - p >= d
        }

        function w() {
          var e = o();
          if (y(e)) return E(e);
          s = setTimeout(w, function(e) {
            var n = t - (e - v);
            return m ? i(n, d - (e - p)) : n
          }(e))
        }

        function E(e) {
          return s = void 0, g && u ? b(e) : (u = l = void 0, f)
        }

        function C() {
          var e = o(),
            n = y(e);
          if (u = arguments, l = this, v = e, n) {
            if (void 0 === s) return function(e) {
              return p = e, s = setTimeout(w, t), h ? b(e) : f
            }(v);
            if (m) return clearTimeout(s), s = setTimeout(w, t), b(v)
          }
          return void 0 === s && (s = setTimeout(w, t)), f
        }
        return t = a(t) || 0, r(n) && (h = !!n.leading, d = (m = "maxWait" in n) ? c(a(n.maxWait) || 0, t) : d, g = "trailing" in n ? !!n.trailing : g), C.cancel = function() {
          void 0 !== s && clearTimeout(s), p = 0, u = v = l = s = void 0
        }, C.flush = function() {
          return void 0 === s ? f : E(o())
        }, C
      }
    },
    23693: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    56490: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    69978: (e, t, n) => {
      var r = n(95192),
        o = n(56490);
      e.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
      }
    },
    42204: (e, t, n) => {
      var r = n(20605);
      e.exports = function() {
        return r.Date.now()
      }
    },
    79902: (e, t, n) => {
      var r = n(42368),
        o = n(23693),
        a = n(69978),
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
    5718: (e, t, n) => {
      "use strict";
      n.d(t, {
        T0: () => a
      });
      var r = n(62229),
        o = n(45739),
        a = function() {
          var e, t, n, a = (t = 0, n = null, e = {
            add: function(e) {
              var r, a;
              0 == t && (n = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = (0, o.m)();
                return t && e.setAttribute("nonce", t), e
              }()) && (a = e, (r = n).styleSheet ? r.styleSheet.cssText = a : r.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(n)), t++
            },
            remove: function() {
              !--t && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
            }
          }, function(t, n) {
            r.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var t = e.styles,
              n = e.dynamic;
            return a(t, n), null
          }
        }
    },
    50555: (e, t, n) => {
      "use strict";
      n.d(t, {
        m: () => c
      });
      var r = n(78322),
        o = n(62229),
        a = function(e) {
          var t = e.sideCar,
            n = (0, r.Tt)(e, ["sideCar"]);
          if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var a = t.read();
          if (!a) throw new Error("Sidecar medium not found");
          return o.createElement(a, (0, r.Cl)({}, n))
        };

      function c(e, t) {
        return e.useMedium(t), a
      }
      a.isSideCarExport = !0
    },
    64269: (e, t, n) => {
      "use strict";
      n.d(t, {
        C: () => c,
        f: () => i
      });
      var r = n(78322);

      function o(e) {
        return e
      }

      function a(e, t) {
        void 0 === t && (t = o);
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
      }

      function c(e, t) {
        return void 0 === t && (t = o), a(e, t)
      }

      function i(e) {
        void 0 === e && (e = {});
        var t = a(null);
        return t.options = (0, r.Cl)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    64147: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => Z
      });
      var r = n(78322),
        o = n(62229),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;
      var d = (0, n(64269).f)(),
        f = function() {},
        s = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            c = a[0],
            s = a[1],
            v = e.forwardProps,
            p = e.children,
            h = e.className,
            m = e.removeScrollBar,
            g = e.enabled,
            b = e.shards,
            y = e.sideCar,
            w = e.noIsolation,
            E = e.inert,
            C = e.allowPinchZoom,
            S = e.as,
            x = void 0 === S ? "div" : S,
            T = e.gapMode,
            k = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            M = y,
            N = function(e, t) {
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
            _ = (0, r.Cl)((0, r.Cl)({}, k), c);
          return o.createElement(o.Fragment, null, g && o.createElement(M, {
            sideCar: d,
            removeScrollBar: m,
            shards: b,
            noIsolation: w,
            inert: E,
            setCallbacks: s,
            allowPinchZoom: !!C,
            lockRef: n,
            gapMode: T
          }), v ? o.cloneElement(o.Children.only(p), (0, r.Cl)((0, r.Cl)({}, _), {
            ref: N
          })) : o.createElement(x, (0, r.Cl)({}, _, {
            className: h,
            ref: N
          }), p))
        }));
      s.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, s.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var v, p, h, m, g = n(50555),
        b = n(45739),
        y = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        w = function(e) {
          return parseInt(e || "", 10) || 0
        },
        E = (h = 0, m = null, v = {
          add: function(e) {
            var t, n;
            0 == h && (m = function() {
              if (!document) return null;
              var e = document.createElement("style");
              e.type = "text/css";
              var t = (0, b.m)();
              return t && e.setAttribute("nonce", t), e
            }()) && (n = e, (t = m).styleSheet ? t.styleSheet.cssText = n : t.appendChild(document.createTextNode(n)), function(e) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(m)), h++
          },
          remove: function() {
            !--h && m && (m.parentNode && m.parentNode.removeChild(m), m = null)
          }
        }, p = function(e, t) {
          o.useEffect((function() {
            return v.add(e),
              function() {
                v.remove()
              }
          }), [e && t])
        }, function(e) {
          var t = e.styles,
            n = e.dynamic;
          return p(t, n), null
        }),
        C = "data-scroll-locked",
        S = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(C, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(C, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        x = function() {
          var e = parseInt(document.body.getAttribute(C) || "0", 10);
          return isFinite(e) ? e : 0
        },
        T = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(C, (x() + 1).toString()),
              function() {
                var e = x() - 1;
                e <= 0 ? document.body.removeAttribute(C) : document.body.setAttribute(C, e.toString())
              }
          }), []);
          var c = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return y;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [w(n), w(r), w(o)]
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
          return o.createElement(E, {
            styles: S(c, !t, a, n ? "" : "!important")
          })
        },
        k = n(5718),
        M = !1;
      if ("undefined" != typeof window) try {
        var N = Object.defineProperty({}, "passive", {
          get: function() {
            return M = !0, !0
          }
        });
        window.addEventListener("test", N, N), window.removeEventListener("test", N, N)
      } catch (e) {
        M = !1
      }
      var _ = !!M && {
          passive: !1
        },
        R = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        L = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), j(e, r)) {
              var o = I(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        j = function(e, t) {
          return "v" === e ? function(e) {
            return R(e, "overflowY")
          }(t) : function(e) {
            return R(e, "overflowX")
          }(t)
        },
        I = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        P = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        A = function(e) {
          return [e.deltaX, e.deltaY]
        },
        O = function(e) {
          return e && "current" in e ? e.current : e
        },
        B = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        W = 0,
        D = [];

      function X(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const Y = (0, g.m)(d, (function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(W++)[0],
          i = o.useState(k.T0)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var t = (0, r.fX)([e.lockRef.current], (e.shards || []).map(O), !0).filter(Boolean);
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
              f = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === f && "range" === d.type) return !1;
            var s = L(f, d);
            if (!s) return !0;
            if (s ? r = f : (r = "v" === f ? "h" : "v", s = L(f, d)), !s) return !1;
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
                f = 0,
                s = 0;
              do {
                var v = I(e, i),
                  p = v[0],
                  h = v[1] - v[2] - a * p;
                (p || h) && j(e, i) && (f += h, s += p), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (t.contains(i) || t === i));
              return (d && (Math.abs(f) < 1 || !1) || !d && (Math.abs(s) < 1 || !1)) && (l = !0), l
            }(v, t, e, "h" === v ? i : l)
          }), []),
          d = o.useCallback((function(e) {
            var n = e;
            if (D.length && D[D.length - 1] === i) {
              var r = "deltaY" in n ? A(n) : P(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(O).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (a.length > 0 ? l(n, a[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          f = o.useCallback((function(e, n, r, o) {
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
          s = o.useCallback((function(e) {
            n.current = P(e), a.current = void 0
          }), []),
          v = o.useCallback((function(t) {
            f(t.type, A(t), t.target, l(t, e.lockRef.current))
          }), []),
          p = o.useCallback((function(t) {
            f(t.type, P(t), t.target, l(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return D.push(i), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: p
            }), document.addEventListener("wheel", d, _), document.addEventListener("touchmove", d, _), document.addEventListener("touchstart", s, _),
            function() {
              D = D.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", d, _), document.removeEventListener("touchmove", d, _), document.removeEventListener("touchstart", s, _)
            }
        }), []);
        var h = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(i, {
          styles: B(c)
        }) : null, h ? o.createElement(T, {
          gapMode: e.gapMode
        }) : null)
      }));
      var F = o.forwardRef((function(e, t) {
        return o.createElement(s, (0, r.Cl)({}, e, {
          ref: t,
          sideCar: Y
        }))
      }));
      F.classNames = s.classNames;
      const Z = F
    }
  }
]);