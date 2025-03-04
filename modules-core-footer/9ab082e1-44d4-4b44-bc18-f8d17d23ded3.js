! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "9ab082e1-44d4-4b44-bc18-f8d17d23ded3", e._sentryDebugIdIdentifier = "sentry-dbid-9ab082e1-44d4-4b44-bc18-f8d17d23ded3")
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
  [5801], {
    1597: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => O
      });
      var r = n(63461),
        o = n(62229),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;
      var d = (0, n(81402).f)(),
        s = function() {},
        f = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: s,
              onWheelCapture: s,
              onTouchMoveCapture: s
            }),
            c = a[0],
            f = a[1],
            v = e.forwardProps,
            g = e.children,
            h = e.className,
            p = e.removeScrollBar,
            m = e.enabled,
            b = e.shards,
            y = e.sideCar,
            w = e.noIsolation,
            E = e.inert,
            _ = e.allowPinchZoom,
            k = e.as,
            S = void 0 === k ? "div" : k,
            C = e.gapMode,
            R = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            M = y,
            L = function(e, t) {
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
            T = (0, r.__assign)((0, r.__assign)({}, R), c);
          return o.createElement(o.Fragment, null, m && o.createElement(M, {
            sideCar: d,
            removeScrollBar: p,
            shards: b,
            noIsolation: w,
            inert: E,
            setCallbacks: f,
            allowPinchZoom: !!_,
            lockRef: n,
            gapMode: C
          }), v ? o.cloneElement(o.Children.only(g), (0, r.__assign)((0, r.__assign)({}, T), {
            ref: L
          })) : o.createElement(S, (0, r.__assign)({}, T, {
            className: h,
            ref: L
          }), g))
        }));
      f.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, f.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var v, g, h, p, m = n(79898),
        b = n(22102),
        y = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        w = function(e) {
          return parseInt(e || "", 10) || 0
        },
        E = (h = 0, p = null, v = {
          add: function(e) {
            var t, n;
            0 == h && (p = function() {
              if (!document) return null;
              var e = document.createElement("style");
              e.type = "text/css";
              var t = (0, b.m)();
              return t && e.setAttribute("nonce", t), e
            }()) && (n = e, (t = p).styleSheet ? t.styleSheet.cssText = n : t.appendChild(document.createTextNode(n)), function(e) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(p)), h++
          },
          remove: function() {
            !--h && p && (p.parentNode && p.parentNode.removeChild(p), p = null)
          }
        }, g = function(e, t) {
          o.useEffect((function() {
            return v.add(e),
              function() {
                v.remove()
              }
          }), [e && t])
        }, function(e) {
          var t = e.styles,
            n = e.dynamic;
          return g(t, n), null
        }),
        _ = "data-scroll-locked",
        k = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(_, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(_, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        S = function() {
          var e = parseInt(document.body.getAttribute(_) || "0", 10);
          return isFinite(e) ? e : 0
        },
        C = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(_, (S() + 1).toString()),
              function() {
                var e = S() - 1;
                e <= 0 ? document.body.removeAttribute(_) : document.body.setAttribute(_, e.toString())
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
            styles: k(c, !t, a, n ? "" : "!important")
          })
        },
        R = n(26068),
        M = !1;
      if ("undefined" != typeof window) try {
        var L = Object.defineProperty({}, "passive", {
          get: function() {
            return M = !0, !0
          }
        });
        window.addEventListener("test", L, L), window.removeEventListener("test", L, L)
      } catch (e) {
        M = !1
      }
      var T = !!M && {
          passive: !1
        },
        x = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        N = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), A(e, r)) {
              var o = I(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        A = function(e, t) {
          return "v" === e ? function(e) {
            return x(e, "overflowY")
          }(t) : function(e) {
            return x(e, "overflowX")
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
        B = function(e) {
          return [e.deltaX, e.deltaY]
        },
        W = function(e) {
          return e && "current" in e ? e.current : e
        },
        Y = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        D = 0,
        X = [];

      function j(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const Z = (0, m.m)(d, (function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(D++)[0],
          i = o.useState(R.T0)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(W), !0).filter(Boolean);
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
            var f = N(s, d);
            if (!f) return !0;
            if (f ? r = s : (r = "v" === s ? "h" : "v", f = N(s, d)), !f) return !1;
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
                var v = I(e, i),
                  g = v[0],
                  h = v[1] - v[2] - a * g;
                (g || h) && A(e, i) && (s += h, f += g), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (t.contains(i) || t === i));
              return (d && (Math.abs(s) < 1 || !1) || !d && (Math.abs(f) < 1 || !1)) && (l = !0), l
            }(v, t, e, "h" === v ? i : l)
          }), []),
          d = o.useCallback((function(e) {
            var n = e;
            if (X.length && X[X.length - 1] === i) {
              var r = "deltaY" in n ? B(n) : P(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(W).filter(Boolean).filter((function(e) {
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
              shadowParent: j(r)
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
            s(t.type, B(t), t.target, l(t, e.lockRef.current))
          }), []),
          g = o.useCallback((function(t) {
            s(t.type, P(t), t.target, l(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return X.push(i), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: g
            }), document.addEventListener("wheel", d, T), document.addEventListener("touchmove", d, T), document.addEventListener("touchstart", f, T),
            function() {
              X = X.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", d, T), document.removeEventListener("touchmove", d, T), document.removeEventListener("touchstart", f, T)
            }
        }), []);
        var h = e.removeScrollBar,
          p = e.inert;
        return o.createElement(o.Fragment, null, p ? o.createElement(i, {
          styles: Y(c)
        }) : null, h ? o.createElement(C, {
          gapMode: e.gapMode
        }) : null)
      }));
      var F = o.forwardRef((function(e, t) {
        return o.createElement(f, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: Z
        }))
      }));
      F.classNames = f.classNames;
      const O = F
    },
    65485: (e, t) => {
      var n;
      ! function() {
        "use strict";
        var r = {}.hasOwnProperty;

        function o() {
          for (var e = "", t = 0; t < arguments.length; t++) {
            var n = arguments[t];
            n && (e = c(e, a(n)))
          }
          return e
        }

        function a(e) {
          if ("string" == typeof e || "number" == typeof e) return e;
          if ("object" != typeof e) return "";
          if (Array.isArray(e)) return o.apply(null, e);
          if (e.toString !== Object.prototype.toString && !e.toString.toString().includes("[native code]")) return e.toString();
          var t = "";
          for (var n in e) r.call(e, n) && e[n] && (t = c(t, n));
          return t
        }

        function c(e, t) {
          return t ? e ? e + " " + t : e + t : e
        }
        e.exports ? (o.default = o, e.exports = o) : void 0 === (n = function() {
          return o
        }.apply(t, [])) || (e.exports = n)
      }()
    }
  }
]);