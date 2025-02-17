! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a41f0f03-8885-4492-a885-eb8fea45b48a", e._sentryDebugIdIdentifier = "sentry-dbid-a41f0f03-8885-4492-a885-eb8fea45b48a")
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
  [2498], {
    22102: (e, t, n) => {
      "use strict";
      n.d(t, {
        m: () => r
      });
      var r = function() {
        return n.nc
      }
    },
    44970: (e, t, n) => {
      var r = n(45590).Symbol;
      e.exports = r
    },
    56203: (e, t, n) => {
      var r = n(44970),
        o = n(97390),
        a = n(65461),
        i = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : i && i in Object(e) ? o(e) : a(e)
      }
    },
    50811: (e, t, n) => {
      var r = n(72089),
        o = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, r(e) + 1).replace(o, "") : e
      }
    },
    94239: (e, t, n) => {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      e.exports = r
    },
    97390: (e, t, n) => {
      var r = n(44970),
        o = Object.prototype,
        a = o.hasOwnProperty,
        i = o.toString,
        c = r ? r.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, c),
          n = e[c];
        try {
          e[c] = void 0;
          var r = !0
        } catch (e) {}
        var o = i.call(e);
        return r && (t ? e[c] = n : delete e[c]), o
      }
    },
    65461: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    45590: (e, t, n) => {
      var r = n(94239),
        o = "object" == typeof self && self && self.Object === Object && self,
        a = r || o || Function("return this")();
      e.exports = a
    },
    72089: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var n = e.length; n-- && t.test(e.charAt(n)););
        return n
      }
    },
    12296: (e, t, n) => {
      var r = n(88660),
        o = n(21383),
        a = n(48635),
        i = Math.max,
        c = Math.min;
      e.exports = function(e, t, n) {
        var u, l, s, d, f, v, p = 0,
          h = !1,
          m = !1,
          g = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function b(t) {
          var n = u,
            r = l;
          return u = l = void 0, p = t, d = e.apply(r, n)
        }

        function y(e) {
          var n = e - v;
          return void 0 === v || n >= t || n < 0 || m && e - p >= s
        }

        function w() {
          var e = o();
          if (y(e)) return E(e);
          f = setTimeout(w, function(e) {
            var n = t - (e - v);
            return m ? c(n, s - (e - p)) : n
          }(e))
        }

        function E(e) {
          return f = void 0, g && u ? b(e) : (u = l = void 0, d)
        }

        function _() {
          var e = o(),
            n = y(e);
          if (u = arguments, l = this, v = e, n) {
            if (void 0 === f) return function(e) {
              return p = e, f = setTimeout(w, t), h ? b(e) : d
            }(v);
            if (m) return clearTimeout(f), f = setTimeout(w, t), b(v)
          }
          return void 0 === f && (f = setTimeout(w, t)), d
        }
        return t = a(t) || 0, r(n) && (h = !!n.leading, s = (m = "maxWait" in n) ? i(a(n.maxWait) || 0, t) : s, g = "trailing" in n ? !!n.trailing : g), _.cancel = function() {
          void 0 !== f && clearTimeout(f), p = 0, u = v = l = f = void 0
        }, _.flush = function() {
          return void 0 === f ? d : E(o())
        }, _
      }
    },
    88660: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    10939: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    23771: (e, t, n) => {
      var r = n(56203),
        o = n(10939);
      e.exports = function(e) {
        return "symbol" == typeof e || o(e) && "[object Symbol]" == r(e)
      }
    },
    21383: (e, t, n) => {
      var r = n(45590);
      e.exports = function() {
        return r.Date.now()
      }
    },
    48635: (e, t, n) => {
      var r = n(50811),
        o = n(88660),
        a = n(23771),
        i = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
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
        var n = c.test(e);
        return n || u.test(e) ? l(e.slice(2), n ? 2 : 8) : i.test(e) ? NaN : +e
      }
    },
    26068: (e, t, n) => {
      "use strict";
      n.d(t, {
        T0: () => a
      });
      var r = n(62229),
        o = n(22102),
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
    79898: (e, t, n) => {
      "use strict";
      n.d(t, {
        m: () => i
      });
      var r = n(63461),
        o = n(62229),
        a = function(e) {
          var t = e.sideCar,
            n = (0, r.__rest)(e, ["sideCar"]);
          if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var a = t.read();
          if (!a) throw new Error("Sidecar medium not found");
          return o.createElement(a, (0, r.__assign)({}, n))
        };

      function i(e, t) {
        return e.useMedium(t), a
      }
      a.isSideCarExport = !0
    },
    81402: (e, t, n) => {
      "use strict";
      n.d(t, {
        C: () => i,
        f: () => c
      });
      var r = n(63461);

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
              i = function() {
                return Promise.resolve().then(a)
              };
            i(), n = {
              push: function(e) {
                t.push(e), i()
              },
              filter: function(e) {
                return t = t.filter(e), n
              }
            }
          }
        }
      }

      function i(e, t) {
        return void 0 === t && (t = o), a(e, t)
      }

      function c(e) {
        void 0 === e && (e = {});
        var t = a(null);
        return t.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    1597: (e, t, n) => {
      "use strict";
      n.d(t, {
        A: () => Z
      });
      var r = n(63461),
        o = n(62229),
        a = "right-scroll-bar-position",
        i = "width-before-scroll-bar";

      function c(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;
      var s = (0, n(81402).f)(),
        d = function() {},
        f = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: d
            }),
            i = a[0],
            f = a[1],
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
            T = y,
            M = function(e, t) {
              var n, r, a, i = (n = t || null, r = function(t) {
                return e.forEach((function(e) {
                  return c(e, t)
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
                var t = l.get(i);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = i.current;
                  n.forEach((function(e) {
                    r.has(e) || c(e, null)
                  })), r.forEach((function(e) {
                    n.has(e) || c(e, o)
                  }))
                }
                l.set(i, e)
              }), [e]), i
            }([n, t]),
            N = (0, r.__assign)((0, r.__assign)({}, k), i);
          return o.createElement(o.Fragment, null, g && o.createElement(T, {
            sideCar: s,
            removeScrollBar: m,
            shards: b,
            noIsolation: w,
            inert: E,
            setCallbacks: f,
            allowPinchZoom: !!_,
            lockRef: n,
            gapMode: C
          }), v ? o.cloneElement(o.Children.only(p), (0, r.__assign)((0, r.__assign)({}, N), {
            ref: M
          })) : o.createElement(x, (0, r.__assign)({}, N, {
            className: h,
            ref: M
          }), p))
        }));
      f.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, f.classNames = {
        fullWidth: i,
        zeroRight: a
      };
      var v, p, h, m, g = n(79898),
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
        _ = "data-scroll-locked",
        S = function(e, t, n, r) {
          var o = e.left,
            c = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(_, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(_, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        x = function() {
          var e = parseInt(document.body.getAttribute(_) || "0", 10);
          return isFinite(e) ? e : 0
        },
        C = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(_, (x() + 1).toString()),
              function() {
                var e = x() - 1;
                e <= 0 ? document.body.removeAttribute(_) : document.body.setAttribute(_, e.toString())
              }
          }), []);
          var i = o.useMemo((function() {
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
            styles: S(i, !t, a, n ? "" : "!important")
          })
        },
        k = n(26068),
        T = !1;
      if ("undefined" != typeof window) try {
        var M = Object.defineProperty({}, "passive", {
          get: function() {
            return T = !0, !0
          }
        });
        window.addEventListener("test", M, M), window.removeEventListener("test", M, M)
      } catch (e) {
        T = !1
      }
      var N = !!T && {
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
        A = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        P = function(e) {
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

      function Y(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const X = (0, g.m)(s, (function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(W++)[0],
          c = o.useState(k.T0)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(O), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(i))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(i)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(i))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var l = o.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = A(e),
              i = n.current,
              c = "deltaX" in e ? e.deltaX : i[0] - o[0],
              l = "deltaY" in e ? e.deltaY : i[1] - o[1],
              s = e.target,
              d = Math.abs(c) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === d && "range" === s.type) return !1;
            var f = L(d, s);
            if (!f) return !0;
            if (f ? r = d : (r = "v" === d ? "h" : "v", f = L(d, s)), !f) return !1;
            if (!a.current && "changedTouches" in e && (c || l) && (a.current = r), !r) return !0;
            var v = a.current || r;
            return function(e, t, n, r, o) {
              var a = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                i = a * r,
                c = n.target,
                u = t.contains(c),
                l = !1,
                s = i > 0,
                d = 0,
                f = 0;
              do {
                var v = I(e, c),
                  p = v[0],
                  h = v[1] - v[2] - a * p;
                (p || h) && j(e, c) && (d += h, f += p), c = c instanceof ShadowRoot ? c.host : c.parentNode
              } while (!u && c !== document.body || u && (t.contains(c) || t === c));
              return (s && (Math.abs(d) < 1 || !1) || !s && (Math.abs(f) < 1 || !1)) && (l = !0), l
            }(v, t, e, "h" === v ? c : l)
          }), []),
          s = o.useCallback((function(e) {
            var n = e;
            if (D.length && D[D.length - 1] === c) {
              var r = "deltaY" in n ? P(n) : A(n),
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
          d = o.useCallback((function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: Y(r)
            };
            t.current.push(a), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            n.current = A(e), a.current = void 0
          }), []),
          v = o.useCallback((function(t) {
            d(t.type, P(t), t.target, l(t, e.lockRef.current))
          }), []),
          p = o.useCallback((function(t) {
            d(t.type, A(t), t.target, l(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return D.push(c), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: p
            }), document.addEventListener("wheel", s, N), document.addEventListener("touchmove", s, N), document.addEventListener("touchstart", f, N),
            function() {
              D = D.filter((function(e) {
                return e !== c
              })), document.removeEventListener("wheel", s, N), document.removeEventListener("touchmove", s, N), document.removeEventListener("touchstart", f, N)
            }
        }), []);
        var h = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(c, {
          styles: B(i)
        }) : null, h ? o.createElement(C, {
          gapMode: e.gapMode
        }) : null)
      }));
      var F = o.forwardRef((function(e, t) {
        return o.createElement(f, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: X
        }))
      }));
      F.classNames = f.classNames;
      const Z = F
    }
  }
]);