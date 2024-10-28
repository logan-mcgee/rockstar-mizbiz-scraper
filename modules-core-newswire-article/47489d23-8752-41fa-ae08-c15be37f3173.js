! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "47489d23-8752-41fa-ae08-c15be37f3173", t._sentryDebugIdIdentifier = "sentry-dbid-47489d23-8752-41fa-ae08-c15be37f3173")
  } catch (t) {}
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
  [1225], {
    90250: (t, e, n) => {
      "use strict";
      n.d(e, {
        A: () => j
      });
      var r = n(80226),
        o = n(71403),
        i = "right-scroll-bar-position",
        a = "width-before-scroll-bar",
        c = n(26208),
        l = (0, n(23496).f)(),
        s = function() {},
        u = o.forwardRef((function(t, e) {
          var n = o.useRef(null),
            i = o.useState({
              onScrollCapture: s,
              onWheelCapture: s,
              onTouchMoveCapture: s
            }),
            a = i[0],
            u = i[1],
            f = t.forwardProps,
            d = t.children,
            p = t.className,
            h = t.removeScrollBar,
            m = t.enabled,
            g = t.shards,
            v = t.sideCar,
            y = t.noIsolation,
            w = t.inert,
            b = t.allowPinchZoom,
            x = t.as,
            E = void 0 === x ? "div" : x,
            T = t.gapMode,
            R = (0, r.Tt)(t, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = v,
            S = (0, c.S)([n, e]),
            L = (0, r.Cl)((0, r.Cl)({}, R), a);
          return o.createElement(o.Fragment, null, m && o.createElement(C, {
            sideCar: l,
            removeScrollBar: h,
            shards: g,
            noIsolation: y,
            inert: w,
            setCallbacks: u,
            allowPinchZoom: !!b,
            lockRef: n,
            gapMode: T
          }), f ? o.cloneElement(o.Children.only(d), (0, r.Cl)((0, r.Cl)({}, L), {
            ref: S
          })) : o.createElement(E, (0, r.Cl)({}, L, {
            className: p,
            ref: S
          }), d))
        }));
      u.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, u.classNames = {
        fullWidth: a,
        zeroRight: i
      };
      var f = function(t) {
        var e = t.sideCar,
          n = (0, r.Tt)(t, ["sideCar"]);
        if (!e) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var i = e.read();
        if (!i) throw new Error("Sidecar medium not found");
        return o.createElement(i, (0, r.Cl)({}, n))
      };
      f.isSideCarExport = !0;
      var d = function() {
          var t = 0,
            e = null;
          return {
            add: function(r) {
              var o, i;
              0 == t && (e = function() {
                if (!document) return null;
                var t = document.createElement("style");
                t.type = "text/css";
                var e = n.nc;
                return e && t.setAttribute("nonce", e), t
              }()) && (i = r, (o = e).styleSheet ? o.styleSheet.cssText = i : o.appendChild(document.createTextNode(i)), function(t) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(t)
              }(e)), t++
            },
            remove: function() {
              !--t && e && (e.parentNode && e.parentNode.removeChild(e), e = null)
            }
          }
        },
        p = function() {
          var t, e = (t = d(), function(e, n) {
            o.useEffect((function() {
              return t.add(e),
                function() {
                  t.remove()
                }
            }), [e && n])
          });
          return function(t) {
            var n = t.styles,
              r = t.dynamic;
            return e(n, r), null
          }
        },
        h = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        m = function(t) {
          return parseInt(t || "", 10) || 0
        },
        g = p(),
        v = function(t, e, n, r) {
          var o = t.left,
            c = t.top,
            l = t.right,
            s = t.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(s, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([e && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(s, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(s, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(i, " {\n    right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " {\n    margin-right: ").concat(s, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(s, "px;\n  }\n")
        },
        y = function(t) {
          var e = t.noRelative,
            n = t.noImportant,
            r = t.gapMode,
            i = void 0 === r ? "margin" : r,
            a = o.useMemo((function() {
              return function(t) {
                if (void 0 === t && (t = "margin"), "undefined" == typeof window) return h;
                var e = function(t) {
                    var e = window.getComputedStyle(document.body),
                      n = e["padding" === t ? "paddingLeft" : "marginLeft"],
                      r = e["padding" === t ? "paddingTop" : "marginTop"],
                      o = e["padding" === t ? "paddingRight" : "marginRight"];
                    return [m(n), m(r), m(o)]
                  }(t),
                  n = document.documentElement.clientWidth,
                  r = window.innerWidth;
                return {
                  left: e[0],
                  top: e[1],
                  right: e[2],
                  gap: Math.max(0, r - n + e[2] - e[0])
                }
              }(i)
            }), [i]);
          return o.createElement(g, {
            styles: v(a, !e, i, n ? "" : "!important")
          })
        },
        w = !1;
      if ("undefined" != typeof window) try {
        var b = Object.defineProperty({}, "passive", {
          get: function() {
            return w = !0, !0
          }
        });
        window.addEventListener("test", b, b), window.removeEventListener("test", b, b)
      } catch (t) {
        w = !1
      }
      var x = !!w && {
          passive: !1
        },
        E = function(t, e) {
          var n = window.getComputedStyle(t);
          return "hidden" !== n[e] && !(n.overflowY === n.overflowX && ! function(t) {
            return "TEXTAREA" === t.tagName
          }(t) && "visible" === n[e])
        },
        T = function(t, e) {
          var n = e.ownerDocument,
            r = e;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), R(t, r)) {
              var o = C(t, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        R = function(t, e) {
          return "v" === t ? function(t) {
            return E(t, "overflowY")
          }(e) : function(t) {
            return E(t, "overflowX")
          }(e)
        },
        C = function(t, e) {
          return "v" === t ? [(n = e).scrollTop, n.scrollHeight, n.clientHeight] : function(t) {
            return [t.scrollLeft, t.scrollWidth, t.clientWidth]
          }(e);
          var n
        },
        S = function(t) {
          return "changedTouches" in t ? [t.changedTouches[0].clientX, t.changedTouches[0].clientY] : [0, 0]
        },
        L = function(t) {
          return [t.deltaX, t.deltaY]
        },
        k = function(t) {
          return t && "current" in t ? t.current : t
        },
        A = function(t) {
          return "\n  .block-interactivity-".concat(t, " {pointer-events: none;}\n  .allow-interactivity-").concat(t, " {pointer-events: all;}\n")
        },
        _ = 0,
        D = [];

      function O(t) {
        for (var e = null; null !== t;) t instanceof ShadowRoot && (e = t.host, t = t.host), t = t.parentNode;
        return e
      }
      const M = (l.useMedium((function(t) {
        var e = o.useRef([]),
          n = o.useRef([0, 0]),
          i = o.useRef(),
          a = o.useState(_++)[0],
          c = o.useState(p)[0],
          l = o.useRef(t);
        o.useEffect((function() {
          l.current = t
        }), [t]), o.useEffect((function() {
          if (t.inert) {
            document.body.classList.add("block-interactivity-".concat(a));
            var e = (0, r.fX)([t.lockRef.current], (t.shards || []).map(k), !0).filter(Boolean);
            return e.forEach((function(t) {
                return t.classList.add("allow-interactivity-".concat(a))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(a)), e.forEach((function(t) {
                  return t.classList.remove("allow-interactivity-".concat(a))
                }))
              }
          }
        }), [t.inert, t.lockRef.current, t.shards]);
        var s = o.useCallback((function(t, e) {
            if ("touches" in t && 2 === t.touches.length) return !l.current.allowPinchZoom;
            var r, o = S(t),
              a = n.current,
              c = "deltaX" in t ? t.deltaX : a[0] - o[0],
              s = "deltaY" in t ? t.deltaY : a[1] - o[1],
              u = t.target,
              f = Math.abs(c) > Math.abs(s) ? "h" : "v";
            if ("touches" in t && "h" === f && "range" === u.type) return !1;
            var d = T(f, u);
            if (!d) return !0;
            if (d ? r = f : (r = "v" === f ? "h" : "v", d = T(f, u)), !d) return !1;
            if (!i.current && "changedTouches" in t && (c || s) && (i.current = r), !r) return !0;
            var p = i.current || r;
            return function(t, e, n, r, o) {
              var i = function(t, e) {
                  return "h" === t && "rtl" === e ? -1 : 1
                }(t, window.getComputedStyle(e).direction),
                a = i * r,
                c = n.target,
                l = e.contains(c),
                s = !1,
                u = a > 0,
                f = 0,
                d = 0;
              do {
                var p = C(t, c),
                  h = p[0],
                  m = p[1] - p[2] - i * h;
                (h || m) && R(t, c) && (f += m, d += h), c = c instanceof ShadowRoot ? c.host : c.parentNode
              } while (!l && c !== document.body || l && (e.contains(c) || e === c));
              return (u && (o && Math.abs(f) < 1 || !o && a > f) || !u && (o && Math.abs(d) < 1 || !o && -a > d)) && (s = !0), s
            }(p, e, t, "h" === p ? c : s, !0)
          }), []),
          u = o.useCallback((function(t) {
            var n = t;
            if (D.length && D[D.length - 1] === c) {
              var r = "deltaY" in n ? L(n) : S(n),
                o = e.current.filter((function(t) {
                  return t.name === n.type && (t.target === n.target || n.target === t.shadowParent) && (e = t.delta, o = r, e[0] === o[0] && e[1] === o[1]);
                  var e, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var i = (l.current.shards || []).map(k).filter(Boolean).filter((function(t) {
                  return t.contains(n.target)
                }));
                (i.length > 0 ? s(n, i[0]) : !l.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          f = o.useCallback((function(t, n, r, o) {
            var i = {
              name: t,
              delta: n,
              target: r,
              should: o,
              shadowParent: O(r)
            };
            e.current.push(i), setTimeout((function() {
              e.current = e.current.filter((function(t) {
                return t !== i
              }))
            }), 1)
          }), []),
          d = o.useCallback((function(t) {
            n.current = S(t), i.current = void 0
          }), []),
          h = o.useCallback((function(e) {
            f(e.type, L(e), e.target, s(e, t.lockRef.current))
          }), []),
          m = o.useCallback((function(e) {
            f(e.type, S(e), e.target, s(e, t.lockRef.current))
          }), []);
        o.useEffect((function() {
          return D.push(c), t.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: m
            }), document.addEventListener("wheel", u, x), document.addEventListener("touchmove", u, x), document.addEventListener("touchstart", d, x),
            function() {
              D = D.filter((function(t) {
                return t !== c
              })), document.removeEventListener("wheel", u, x), document.removeEventListener("touchmove", u, x), document.removeEventListener("touchstart", d, x)
            }
        }), []);
        var g = t.removeScrollBar,
          v = t.inert;
        return o.createElement(o.Fragment, null, v ? o.createElement(c, {
          styles: A(a)
        }) : null, g ? o.createElement(y, {
          gapMode: t.gapMode
        }) : null)
      })), f);
      var P = o.forwardRef((function(t, e) {
        return o.createElement(u, (0, r.Cl)({}, t, {
          ref: e,
          sideCar: M
        }))
      }));
      P.classNames = u.classNames;
      const j = P
    },
    26208: (t, e, n) => {
      "use strict";
      n.d(e, {
        S: () => o
      });
      var r = n(71403);

      function o(t, e) {
        return n = e || null, o = function(e) {
          return t.forEach((function(t) {
            return function(t, e) {
              return "function" == typeof t ? t(e) : t && (t.current = e), t
            }(t, e)
          }))
        }, (i = (0, r.useState)((function() {
          return {
            value: n,
            callback: o,
            facade: {
              get current() {
                return i.value
              },
              set current(t) {
                var e = i.value;
                e !== t && (i.value = t, i.callback(t, e))
              }
            }
          }
        }))[0]).callback = o, i.facade;
        var n, o, i
      }
    },
    23496: (t, e, n) => {
      "use strict";
      n.d(e, {
        C: () => a,
        f: () => c
      });
      var r = n(80226);

      function o(t) {
        return t
      }

      function i(t, e) {
        void 0 === e && (e = o);
        var n = [],
          r = !1;
        return {
          read: function() {
            if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return n.length ? n[n.length - 1] : t
          },
          useMedium: function(t) {
            var o = e(t, r);
            return n.push(o),
              function() {
                n = n.filter((function(t) {
                  return t !== o
                }))
              }
          },
          assignSyncMedium: function(t) {
            for (r = !0; n.length;) {
              var e = n;
              n = [], e.forEach(t)
            }
            n = {
              push: function(e) {
                return t(e)
              },
              filter: function() {
                return n
              }
            }
          },
          assignMedium: function(t) {
            r = !0;
            var e = [];
            if (n.length) {
              var o = n;
              n = [], o.forEach(t), e = n
            }
            var i = function() {
                var n = e;
                e = [], n.forEach(t)
              },
              a = function() {
                return Promise.resolve().then(i)
              };
            a(), n = {
              push: function(t) {
                e.push(t), a()
              },
              filter: function(t) {
                return e = e.filter(t), n
              }
            }
          }
        }
      }

      function a(t, e) {
        return void 0 === e && (e = o), i(t, e)
      }

      function c(t) {
        void 0 === t && (t = {});
        var e = i(null);
        return e.options = (0, r.Cl)({
          async: !0,
          ssr: !1
        }, t), e
      }
    },
    19435: (t, e, n) => {
      var r = n(78007).Symbol;
      t.exports = r
    },
    7158: (t, e, n) => {
      var r = n(19435),
        o = n(16061),
        i = n(84968),
        a = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        return null == t ? void 0 === t ? "[object Undefined]" : "[object Null]" : a && a in Object(t) ? o(t) : i(t)
      }
    },
    48530: (t, e, n) => {
      var r = n(18478),
        o = /^\s+/;
      t.exports = function(t) {
        return t ? t.slice(0, r(t) + 1).replace(o, "") : t
      }
    },
    94626: (t, e, n) => {
      var r = "object" == typeof n.g && n.g && n.g.Object === Object && n.g;
      t.exports = r
    },
    16061: (t, e, n) => {
      var r = n(19435),
        o = Object.prototype,
        i = o.hasOwnProperty,
        a = o.toString,
        c = r ? r.toStringTag : void 0;
      t.exports = function(t) {
        var e = i.call(t, c),
          n = t[c];
        try {
          t[c] = void 0;
          var r = !0
        } catch (t) {}
        var o = a.call(t);
        return r && (e ? t[c] = n : delete t[c]), o
      }
    },
    84968: t => {
      var e = Object.prototype.toString;
      t.exports = function(t) {
        return e.call(t)
      }
    },
    78007: (t, e, n) => {
      var r = n(94626),
        o = "object" == typeof self && self && self.Object === Object && self,
        i = r || o || Function("return this")();
      t.exports = i
    },
    18478: t => {
      var e = /\s/;
      t.exports = function(t) {
        for (var n = t.length; n-- && e.test(t.charAt(n)););
        return n
      }
    },
    14963: (t, e, n) => {
      var r = n(27335),
        o = n(92346),
        i = n(58972),
        a = Math.max,
        c = Math.min;
      t.exports = function(t, e, n) {
        var l, s, u, f, d, p, h = 0,
          m = !1,
          g = !1,
          v = !0;
        if ("function" != typeof t) throw new TypeError("Expected a function");

        function y(e) {
          var n = l,
            r = s;
          return l = s = void 0, h = e, f = t.apply(r, n)
        }

        function w(t) {
          var n = t - p;
          return void 0 === p || n >= e || n < 0 || g && t - h >= u
        }

        function b() {
          var t = o();
          if (w(t)) return x(t);
          d = setTimeout(b, function(t) {
            var n = e - (t - p);
            return g ? c(n, u - (t - h)) : n
          }(t))
        }

        function x(t) {
          return d = void 0, v && l ? y(t) : (l = s = void 0, f)
        }

        function E() {
          var t = o(),
            n = w(t);
          if (l = arguments, s = this, p = t, n) {
            if (void 0 === d) return function(t) {
              return h = t, d = setTimeout(b, e), m ? y(t) : f
            }(p);
            if (g) return clearTimeout(d), d = setTimeout(b, e), y(p)
          }
          return void 0 === d && (d = setTimeout(b, e)), f
        }
        return e = i(e) || 0, r(n) && (m = !!n.leading, u = (g = "maxWait" in n) ? a(i(n.maxWait) || 0, e) : u, v = "trailing" in n ? !!n.trailing : v), E.cancel = function() {
          void 0 !== d && clearTimeout(d), h = 0, l = p = s = d = void 0
        }, E.flush = function() {
          return void 0 === d ? f : x(o())
        }, E
      }
    },
    27335: t => {
      t.exports = function(t) {
        var e = typeof t;
        return null != t && ("object" == e || "function" == e)
      }
    },
    95360: t => {
      t.exports = function(t) {
        return null != t && "object" == typeof t
      }
    },
    87416: (t, e, n) => {
      var r = n(7158),
        o = n(95360);
      t.exports = function(t) {
        return "symbol" == typeof t || o(t) && "[object Symbol]" == r(t)
      }
    },
    92346: (t, e, n) => {
      var r = n(78007);
      t.exports = function() {
        return r.Date.now()
      }
    },
    58972: (t, e, n) => {
      var r = n(48530),
        o = n(27335),
        i = n(87416),
        a = /^[-+]0x[0-9a-f]+$/i,
        c = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        s = parseInt;
      t.exports = function(t) {
        if ("number" == typeof t) return t;
        if (i(t)) return NaN;
        if (o(t)) {
          var e = "function" == typeof t.valueOf ? t.valueOf() : t;
          t = o(e) ? e + "" : e
        }
        if ("string" != typeof t) return 0 === t ? t : +t;
        t = r(t);
        var n = c.test(t);
        return n || l.test(t) ? s(t.slice(2), n ? 2 : 8) : a.test(t) ? NaN : +t
      }
    },
    26677: (t, e, n) => {
      "use strict";

      function r() {
        return r = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var n = arguments[e];
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r])
          }
          return t
        }, r.apply(this, arguments)
      }
      n.d(e, {
        A: () => r
      })
    },
    23340: (t, e, n) => {
      "use strict";
      n.d(e, {
        BN: () => p,
        ER: () => h,
        Ej: () => m,
        UE: () => c,
        UU: () => l,
        cY: () => d,
        jD: () => f,
        rD: () => i
      });
      var r = n(84891);

      function o(t, e, n) {
        let {
          reference: o,
          floating: i
        } = t;
        const a = (0, r.TV)(e),
          c = (0, r.Dz)(e),
          l = (0, r.sq)(c),
          s = (0, r.C0)(e),
          u = "y" === a,
          f = o.x + o.width / 2 - i.width / 2,
          d = o.y + o.height / 2 - i.height / 2,
          p = o[l] / 2 - i[l] / 2;
        let h;
        switch (s) {
          case "top":
            h = {
              x: f,
              y: o.y - i.height
            };
            break;
          case "bottom":
            h = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            h = {
              x: o.x + o.width,
              y: d
            };
            break;
          case "left":
            h = {
              x: o.x - i.width,
              y: d
            };
            break;
          default:
            h = {
              x: o.x,
              y: o.y
            }
        }
        switch ((0, r.Sg)(e)) {
          case "start":
            h[c] -= p * (n && u ? -1 : 1);
            break;
          case "end":
            h[c] += p * (n && u ? -1 : 1)
        }
        return h
      }
      const i = async (t, e, n) => {
        const {
          placement: r = "bottom",
          strategy: i = "absolute",
          middleware: a = [],
          platform: c
        } = n, l = a.filter(Boolean), s = await (null == c.isRTL ? void 0 : c.isRTL(e));
        let u = await c.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }),
          {
            x: f,
            y: d
          } = o(u, r, s),
          p = r,
          h = {},
          m = 0;
        for (let n = 0; n < l.length; n++) {
          const {
            name: a,
            fn: g
          } = l[n], {
            x: v,
            y,
            data: w,
            reset: b
          } = await g({
            x: f,
            y: d,
            initialPlacement: r,
            placement: p,
            strategy: i,
            middlewareData: h,
            rects: u,
            platform: c,
            elements: {
              reference: t,
              floating: e
            }
          });
          f = null != v ? v : f, d = null != y ? y : d, h = {
            ...h,
            [a]: {
              ...h[a],
              ...w
            }
          }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (p = b.placement), b.rects && (u = !0 === b.rects ? await c.getElementRects({
            reference: t,
            floating: e,
            strategy: i
          }) : b.rects), ({
            x: f,
            y: d
          } = o(u, p, s))), n = -1)
        }
        return {
          x: f,
          y: d,
          placement: p,
          strategy: i,
          middlewareData: h
        }
      };
      async function a(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: o,
          y: i,
          platform: a,
          rects: c,
          elements: l,
          strategy: s
        } = t, {
          boundary: u = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: d = "floating",
          altBoundary: p = !1,
          padding: h = 0
        } = (0, r._3)(e, t), m = (0, r.nI)(h), g = l[p ? "floating" === d ? "reference" : "floating" : d], v = (0, r.B1)(await a.getClippingRect({
          element: null == (n = await (null == a.isElement ? void 0 : a.isElement(g))) || n ? g : g.contextElement || await (null == a.getDocumentElement ? void 0 : a.getDocumentElement(l.floating)),
          boundary: u,
          rootBoundary: f,
          strategy: s
        })), y = "floating" === d ? {
          ...c.floating,
          x: o,
          y: i
        } : c.reference, w = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(l.floating)), b = await (null == a.isElement ? void 0 : a.isElement(w)) && await (null == a.getScale ? void 0 : a.getScale(w)) || {
          x: 1,
          y: 1
        }, x = (0, r.B1)(a.convertOffsetParentRelativeRectToViewportRelativeRect ? await a.convertOffsetParentRelativeRectToViewportRelativeRect({
          rect: y,
          offsetParent: w,
          strategy: s
        }) : y);
        return {
          top: (v.top - x.top + m.top) / b.y,
          bottom: (x.bottom - v.bottom + m.bottom) / b.y,
          left: (v.left - x.left + m.left) / b.x,
          right: (x.right - v.right + m.right) / b.x
        }
      }
      const c = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: o,
              placement: i,
              rects: a,
              platform: c,
              elements: l,
              middlewareData: s
            } = e, {
              element: u,
              padding: f = 0
            } = (0, r._3)(t, e) || {};
            if (null == u) return {};
            const d = (0, r.nI)(f),
              p = {
                x: n,
                y: o
              },
              h = (0, r.Dz)(i),
              m = (0, r.sq)(h),
              g = await c.getDimensions(u),
              v = "y" === h,
              y = v ? "top" : "left",
              w = v ? "bottom" : "right",
              b = v ? "clientHeight" : "clientWidth",
              x = a.reference[m] + a.reference[h] - p[h] - a.floating[m],
              E = p[h] - a.reference[h],
              T = await (null == c.getOffsetParent ? void 0 : c.getOffsetParent(u));
            let R = T ? T[b] : 0;
            R && await (null == c.isElement ? void 0 : c.isElement(T)) || (R = l.floating[b] || a.floating[m]);
            const C = x / 2 - E / 2,
              S = R / 2 - g[m] / 2 - 1,
              L = (0, r.jk)(d[y], S),
              k = (0, r.jk)(d[w], S),
              A = L,
              _ = R - g[m] - k,
              D = R / 2 - g[m] / 2 + C,
              O = (0, r.qE)(A, D, _),
              M = !s.arrow && null != (0, r.Sg)(i) && D != O && a.reference[m] / 2 - (D < A ? L : k) - g[m] / 2 < 0,
              P = M ? D < A ? D - A : D - _ : 0;
            return {
              [h]: p[h] + P,
              data: {
                [h]: O,
                centerOffset: D - O - P,
                ...M && {
                  alignmentOffset: P
                }
              },
              reset: M
            }
          }
        }),
        l = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, o;
              const {
                placement: i,
                middlewareData: c,
                rects: l,
                initialPlacement: s,
                platform: u,
                elements: f
              } = e, {
                mainAxis: d = !0,
                crossAxis: p = !0,
                fallbackPlacements: h,
                fallbackStrategy: m = "bestFit",
                fallbackAxisSideDirection: g = "none",
                flipAlignment: v = !0,
                ...y
              } = (0, r._3)(t, e);
              if (null != (n = c.arrow) && n.alignmentOffset) return {};
              const w = (0, r.C0)(i),
                b = (0, r.C0)(s) === s,
                x = await (null == u.isRTL ? void 0 : u.isRTL(f.floating)),
                E = h || (b || !v ? [(0, r.bV)(s)] : (0, r.WJ)(s));
              h || "none" === g || E.push(...(0, r.lP)(s, v, g, x));
              const T = [s, ...E],
                R = await a(e, y),
                C = [];
              let S = (null == (o = c.flip) ? void 0 : o.overflows) || [];
              if (d && C.push(R[w]), p) {
                const t = (0, r.w7)(i, l, x);
                C.push(R[t[0]], R[t[1]])
              }
              if (S = [...S, {
                  placement: i,
                  overflows: C
                }], !C.every((t => t <= 0))) {
                var L, k;
                const t = ((null == (L = c.flip) ? void 0 : L.index) || 0) + 1,
                  e = T[t];
                if (e) return {
                  data: {
                    index: t,
                    overflows: S
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (k = S.filter((t => t.overflows[0] <= 0)).sort(((t, e) => t.overflows[1] - e.overflows[1]))[0]) ? void 0 : k.placement;
                if (!n) switch (m) {
                  case "bestFit": {
                    var A;
                    const t = null == (A = S.map((t => [t.placement, t.overflows.filter((t => t > 0)).reduce(((t, e) => t + e), 0)])).sort(((t, e) => t[1] - e[1]))[0]) ? void 0 : A[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = s
                }
                if (i !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        };

      function s(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function u(t) {
        return r.r_.some((e => t[e] >= 0))
      }
      const f = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: n
              } = e, {
                strategy: o = "referenceHidden",
                ...i
              } = (0, r._3)(t, e);
              switch (o) {
                case "referenceHidden": {
                  const t = s(await a(e, {
                    ...i,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: u(t)
                    }
                  }
                }
                case "escaped": {
                  const t = s(await a(e, {
                    ...i,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: u(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        d = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: o
              } = e, i = await async function(t, e) {
                const {
                  placement: n,
                  platform: o,
                  elements: i
                } = t, a = await (null == o.isRTL ? void 0 : o.isRTL(i.floating)), c = (0, r.C0)(n), l = (0, r.Sg)(n), s = "y" === (0, r.TV)(n), u = ["left", "top"].includes(c) ? -1 : 1, f = a && s ? -1 : 1, d = (0, r._3)(e, t);
                let {
                  mainAxis: p,
                  crossAxis: h,
                  alignmentAxis: m
                } = "number" == typeof d ? {
                  mainAxis: d,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  alignmentAxis: null,
                  ...d
                };
                return l && "number" == typeof m && (h = "end" === l ? -1 * m : m), s ? {
                  x: h * f,
                  y: p * u
                } : {
                  x: p * u,
                  y: h * f
                }
              }(e, t);
              return {
                x: n + i.x,
                y: o + i.y,
                data: i
              }
            }
          }
        },
        p = function(t) {
          return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: o,
                placement: i
              } = e, {
                mainAxis: c = !0,
                crossAxis: l = !1,
                limiter: s = {
                  fn: t => {
                    let {
                      x: e,
                      y: n
                    } = t;
                    return {
                      x: e,
                      y: n
                    }
                  }
                },
                ...u
              } = (0, r._3)(t, e), f = {
                x: n,
                y: o
              }, d = await a(e, u), p = (0, r.TV)((0, r.C0)(i)), h = (0, r.PG)(p);
              let m = f[h],
                g = f[p];
              if (c) {
                const t = "y" === h ? "bottom" : "right",
                  e = m + d["y" === h ? "top" : "left"],
                  n = m - d[t];
                m = (0, r.qE)(e, m, n)
              }
              if (l) {
                const t = "y" === p ? "bottom" : "right",
                  e = g + d["y" === p ? "top" : "left"],
                  n = g - d[t];
                g = (0, r.qE)(e, g, n)
              }
              const v = s.fn({
                ...e,
                [h]: m,
                [p]: g
              });
              return {
                ...v,
                data: {
                  x: v.x - n,
                  y: v.y - o
                }
              }
            }
          }
        },
        h = function(t) {
          return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
              const {
                x: n,
                y: o,
                placement: i,
                rects: a,
                middlewareData: c
              } = e, {
                offset: l = 0,
                mainAxis: s = !0,
                crossAxis: u = !0
              } = (0, r._3)(t, e), f = {
                x: n,
                y: o
              }, d = (0, r.TV)(i), p = (0, r.PG)(d);
              let h = f[p],
                m = f[d];
              const g = (0, r._3)(l, e),
                v = "number" == typeof g ? {
                  mainAxis: g,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...g
                };
              if (s) {
                const t = "y" === p ? "height" : "width",
                  e = a.reference[p] - a.floating[t] + v.mainAxis,
                  n = a.reference[p] + a.reference[t] - v.mainAxis;
                h < e ? h = e : h > n && (h = n)
              }
              if (u) {
                var y, w;
                const t = "y" === p ? "width" : "height",
                  e = ["top", "left"].includes((0, r.C0)(i)),
                  n = a.reference[d] - a.floating[t] + (e && (null == (y = c.offset) ? void 0 : y[d]) || 0) + (e ? 0 : v.crossAxis),
                  o = a.reference[d] + a.reference[t] + (e ? 0 : (null == (w = c.offset) ? void 0 : w[d]) || 0) - (e ? v.crossAxis : 0);
                m < n ? m = n : m > o && (m = o)
              }
              return {
                [p]: h,
                [d]: m
              }
            }
          }
        },
        m = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              const {
                placement: n,
                rects: o,
                platform: i,
                elements: c
              } = e, {
                apply: l = (() => {}),
                ...s
              } = (0, r._3)(t, e), u = await a(e, s), f = (0, r.C0)(n), d = (0, r.Sg)(n), p = "y" === (0, r.TV)(n), {
                width: h,
                height: m
              } = o.floating;
              let g, v;
              "top" === f || "bottom" === f ? (g = f, v = d === (await (null == i.isRTL ? void 0 : i.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (v = f, g = "end" === d ? "top" : "bottom");
              const y = m - u[g],
                w = h - u[v],
                b = !e.middlewareData.shift;
              let x = y,
                E = w;
              if (p) {
                const t = h - u.left - u.right;
                E = d || b ? (0, r.jk)(w, t) : t
              } else {
                const t = m - u.top - u.bottom;
                x = d || b ? (0, r.jk)(y, t) : t
              }
              if (b && !d) {
                const t = (0, r.T9)(u.left, 0),
                  e = (0, r.T9)(u.right, 0),
                  n = (0, r.T9)(u.top, 0),
                  o = (0, r.T9)(u.bottom, 0);
                p ? E = h - 2 * (0 !== t || 0 !== e ? t + e : (0, r.T9)(u.left, u.right)) : x = m - 2 * (0 !== n || 0 !== o ? n + o : (0, r.T9)(u.top, u.bottom))
              }
              await l({
                ...e,
                availableWidth: E,
                availableHeight: x
              });
              const T = await i.getDimensions(c.floating);
              return h !== T.width || m !== T.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        }
    },
    31202: (t, e, n) => {
      "use strict";
      n.d(e, {
        ll: () => j,
        rD: () => I
      });
      var r = n(84891),
        o = n(23340);

      function i(t) {
        return l(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function a(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function c(t) {
        var e;
        return null == (e = (l(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function l(t) {
        return t instanceof Node || t instanceof a(t).Node
      }

      function s(t) {
        return t instanceof Element || t instanceof a(t).Element
      }

      function u(t) {
        return t instanceof HTMLElement || t instanceof a(t).HTMLElement
      }

      function f(t) {
        return "undefined" != typeof ShadowRoot && (t instanceof ShadowRoot || t instanceof a(t).ShadowRoot)
      }

      function d(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: r,
          display: o
        } = v(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + r + n) && !["inline", "contents"].includes(o)
      }

      function p(t) {
        return ["table", "td", "th"].includes(i(t))
      }

      function h(t) {
        const e = m(),
          n = v(t);
        return "none" !== n.transform || "none" !== n.perspective || !!n.containerType && "normal" !== n.containerType || !e && !!n.backdropFilter && "none" !== n.backdropFilter || !e && !!n.filter && "none" !== n.filter || ["transform", "perspective", "filter"].some((t => (n.willChange || "").includes(t))) || ["paint", "layout", "strict", "content"].some((t => (n.contain || "").includes(t)))
      }

      function m() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }

      function g(t) {
        return ["html", "body", "#document"].includes(i(t))
      }

      function v(t) {
        return a(t).getComputedStyle(t)
      }

      function y(t) {
        return s(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.pageXOffset,
          scrollTop: t.pageYOffset
        }
      }

      function w(t) {
        if ("html" === i(t)) return t;
        const e = t.assignedSlot || t.parentNode || f(t) && t.host || c(t);
        return f(e) ? e.host : e
      }

      function b(t) {
        const e = w(t);
        return g(e) ? t.ownerDocument ? t.ownerDocument.body : t.body : u(e) && d(e) ? e : b(e)
      }

      function x(t, e, n) {
        var r;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const o = b(t),
          i = o === (null == (r = t.ownerDocument) ? void 0 : r.body),
          c = a(o);
        return i ? e.concat(c, c.visualViewport || [], d(o) ? o : [], c.frameElement && n ? x(c.frameElement) : []) : e.concat(o, x(o, [], n))
      }

      function E(t) {
        const e = v(t);
        let n = parseFloat(e.width) || 0,
          o = parseFloat(e.height) || 0;
        const i = u(t),
          a = i ? t.offsetWidth : n,
          c = i ? t.offsetHeight : o,
          l = (0, r.LI)(n) !== a || (0, r.LI)(o) !== c;
        return l && (n = a, o = c), {
          width: n,
          height: o,
          $: l
        }
      }

      function T(t) {
        return s(t) ? t : t.contextElement
      }

      function R(t) {
        const e = T(t);
        if (!u(e)) return (0, r.Jx)(1);
        const n = e.getBoundingClientRect(),
          {
            width: o,
            height: i,
            $: a
          } = E(e);
        let c = (a ? (0, r.LI)(n.width) : n.width) / o,
          l = (a ? (0, r.LI)(n.height) : n.height) / i;
        return c && Number.isFinite(c) || (c = 1), l && Number.isFinite(l) || (l = 1), {
          x: c,
          y: l
        }
      }
      const C = (0, r.Jx)(0);

      function S(t) {
        const e = a(t);
        return m() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : C
      }

      function L(t, e, n, o) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          c = T(t);
        let l = (0, r.Jx)(1);
        e && (o ? s(o) && (l = R(o)) : l = R(t));
        const u = function(t, e, n) {
          return void 0 === e && (e = !1), !(!n || e && n !== a(t)) && e
        }(c, n, o) ? S(c) : (0, r.Jx)(0);
        let f = (i.left + u.x) / l.x,
          d = (i.top + u.y) / l.y,
          p = i.width / l.x,
          h = i.height / l.y;
        if (c) {
          const t = a(c),
            e = o && s(o) ? a(o) : o;
          let n = t.frameElement;
          for (; n && o && e !== t;) {
            const t = R(n),
              e = n.getBoundingClientRect(),
              r = v(n),
              o = e.left + (n.clientLeft + parseFloat(r.paddingLeft)) * t.x,
              i = e.top + (n.clientTop + parseFloat(r.paddingTop)) * t.y;
            f *= t.x, d *= t.y, p *= t.x, h *= t.y, f += o, d += i, n = a(n).frameElement
          }
        }
        return (0, r.B1)({
          width: p,
          height: h,
          x: f,
          y: d
        })
      }

      function k(t) {
        return L(c(t)).left + y(t).scrollLeft
      }

      function A(t, e, n) {
        let o;
        if ("viewport" === e) o = function(t, e) {
          const n = a(t),
            r = c(t),
            o = n.visualViewport;
          let i = r.clientWidth,
            l = r.clientHeight,
            s = 0,
            u = 0;
          if (o) {
            i = o.width, l = o.height;
            const t = m();
            (!t || t && "fixed" === e) && (s = o.offsetLeft, u = o.offsetTop)
          }
          return {
            width: i,
            height: l,
            x: s,
            y: u
          }
        }(t, n);
        else if ("document" === e) o = function(t) {
          const e = c(t),
            n = y(t),
            o = t.ownerDocument.body,
            i = (0, r.T9)(e.scrollWidth, e.clientWidth, o.scrollWidth, o.clientWidth),
            a = (0, r.T9)(e.scrollHeight, e.clientHeight, o.scrollHeight, o.clientHeight);
          let l = -n.scrollLeft + k(t);
          const s = -n.scrollTop;
          return "rtl" === v(o).direction && (l += (0, r.T9)(e.clientWidth, o.clientWidth) - i), {
            width: i,
            height: a,
            x: l,
            y: s
          }
        }(c(t));
        else if (s(e)) o = function(t, e) {
          const n = L(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            i = n.left + t.clientLeft,
            a = u(t) ? R(t) : (0, r.Jx)(1);
          return {
            width: t.clientWidth * a.x,
            height: t.clientHeight * a.y,
            x: i * a.x,
            y: o * a.y
          }
        }(e, n);
        else {
          const n = S(t);
          o = {
            ...e,
            x: e.x - n.x,
            y: e.y - n.y
          }
        }
        return (0, r.B1)(o)
      }

      function _(t, e) {
        const n = w(t);
        return !(n === e || !s(n) || g(n)) && ("fixed" === v(n).position || _(n, e))
      }

      function D(t, e, n) {
        const o = u(e),
          a = c(e),
          l = "fixed" === n,
          s = L(t, !0, l, e);
        let f = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const p = (0, r.Jx)(0);
        if (o || !o && !l)
          if (("body" !== i(e) || d(a)) && (f = y(e)), o) {
            const t = L(e, !0, l, e);
            p.x = t.x + e.clientLeft, p.y = t.y + e.clientTop
          } else a && (p.x = k(a));
        return {
          x: s.left + f.scrollLeft - p.x,
          y: s.top + f.scrollTop - p.y,
          width: s.width,
          height: s.height
        }
      }

      function O(t, e) {
        return u(t) && "fixed" !== v(t).position ? e ? e(t) : t.offsetParent : null
      }

      function M(t, e) {
        const n = a(t);
        if (!u(t)) return n;
        let r = O(t, e);
        for (; r && p(r) && "static" === v(r).position;) r = O(r, e);
        return r && ("html" === i(r) || "body" === i(r) && "static" === v(r).position && !h(r)) ? n : r || function(t) {
          let e = w(t);
          for (; u(e) && !g(e);) {
            if (h(e)) return e;
            e = w(e)
          }
          return null
        }(t) || n
      }
      const P = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            rect: e,
            offsetParent: n,
            strategy: o
          } = t;
          const a = u(n),
            l = c(n);
          if (n === l) return e;
          let s = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = (0, r.Jx)(1);
          const p = (0, r.Jx)(0);
          if ((a || !a && "fixed" !== o) && (("body" !== i(n) || d(l)) && (s = y(n)), u(n))) {
            const t = L(n);
            f = R(n), p.x = t.x + n.clientLeft, p.y = t.y + n.clientTop
          }
          return {
            width: e.width * f.x,
            height: e.height * f.y,
            x: e.x * f.x - s.scrollLeft * f.x + p.x,
            y: e.y * f.y - s.scrollTop * f.y + p.y
          }
        },
        getDocumentElement: c,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: o,
            strategy: a
          } = t;
          const c = [..."clippingAncestors" === n ? function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let r = x(t, [], !1).filter((t => s(t) && "body" !== i(t))),
                o = null;
              const a = "fixed" === v(t).position;
              let c = a ? w(t) : t;
              for (; s(c) && !g(c);) {
                const e = v(c),
                  n = h(c);
                n || "fixed" !== e.position || (o = null), (a ? !n && !o : !n && "static" === e.position && o && ["absolute", "fixed"].includes(o.position) || d(c) && !n && _(t, c)) ? r = r.filter((t => t !== c)) : o = e, c = w(c)
              }
              return e.set(t, r), r
            }(e, this._c) : [].concat(n), o],
            l = c[0],
            u = c.reduce(((t, n) => {
              const o = A(e, n, a);
              return t.top = (0, r.T9)(o.top, t.top), t.right = (0, r.jk)(o.right, t.right), t.bottom = (0, r.jk)(o.bottom, t.bottom), t.left = (0, r.T9)(o.left, t.left), t
            }), A(e, l, a));
          return {
            width: u.right - u.left,
            height: u.bottom - u.top,
            x: u.left,
            y: u.top
          }
        },
        getOffsetParent: M,
        getElementRects: async function(t) {
          let {
            reference: e,
            floating: n,
            strategy: r
          } = t;
          const o = this.getOffsetParent || M,
            i = this.getDimensions;
          return {
            reference: D(e, await o(n), r),
            floating: {
              x: 0,
              y: 0,
              ...await i(n)
            }
          }
        },
        getClientRects: function(t) {
          return Array.from(t.getClientRects())
        },
        getDimensions: function(t) {
          return E(t)
        },
        getScale: R,
        isElement: s,
        isRTL: function(t) {
          return "rtl" === v(t).direction
        }
      };

      function j(t, e, n, o) {
        void 0 === o && (o = {});
        const {
          ancestorScroll: i = !0,
          ancestorResize: a = !0,
          elementResize: l = "function" == typeof ResizeObserver,
          layoutShift: s = "function" == typeof IntersectionObserver,
          animationFrame: u = !1
        } = o, f = T(t), d = i || a ? [...f ? x(f) : [], ...x(e)] : [];
        d.forEach((t => {
          i && t.addEventListener("scroll", n, {
            passive: !0
          }), a && t.addEventListener("resize", n)
        }));
        const p = f && s ? function(t, e) {
          let n, o = null;
          const i = c(t);

          function a() {
            clearTimeout(n), o && o.disconnect(), o = null
          }
          return function c(l, s) {
            void 0 === l && (l = !1), void 0 === s && (s = 1), a();
            const {
              left: u,
              top: f,
              width: d,
              height: p
            } = t.getBoundingClientRect();
            if (l || e(), !d || !p) return;
            const h = {
              rootMargin: -(0, r.RI)(f) + "px " + -(0, r.RI)(i.clientWidth - (u + d)) + "px " + -(0, r.RI)(i.clientHeight - (f + p)) + "px " + -(0, r.RI)(u) + "px",
              threshold: (0, r.T9)(0, (0, r.jk)(1, s)) || 1
            };
            let m = !0;

            function g(t) {
              const e = t[0].intersectionRatio;
              if (e !== s) {
                if (!m) return c();
                e ? c(!1, e) : n = setTimeout((() => {
                  c(!1, 1e-7)
                }), 100)
              }
              m = !1
            }
            try {
              o = new IntersectionObserver(g, {
                ...h,
                root: i.ownerDocument
              })
            } catch (t) {
              o = new IntersectionObserver(g, h)
            }
            o.observe(t)
          }(!0), a
        }(f, n) : null;
        let h, m = -1,
          g = null;
        l && (g = new ResizeObserver((t => {
          let [r] = t;
          r && r.target === f && g && (g.unobserve(e), cancelAnimationFrame(m), m = requestAnimationFrame((() => {
            g && g.observe(e)
          }))), n()
        })), f && !u && g.observe(f), g.observe(e));
        let v = u ? L(t) : null;
        return u && function e() {
          const r = L(t);
          !v || r.x === v.x && r.y === v.y && r.width === v.width && r.height === v.height || n(), v = r, h = requestAnimationFrame(e)
        }(), n(), () => {
          d.forEach((t => {
            i && t.removeEventListener("scroll", n), a && t.removeEventListener("resize", n)
          })), p && p(), g && g.disconnect(), g = null, u && cancelAnimationFrame(h)
        }
      }
      const I = (t, e, n) => {
        const r = new Map,
          i = {
            platform: P,
            ...n
          },
          a = {
            ...i.platform,
            _c: r
          };
        return (0, o.rD)(t, e, {
          ...i,
          platform: a
        })
      }
    },
    84891: (t, e, n) => {
      "use strict";
      n.d(e, {
        B1: () => C,
        C0: () => p,
        Dz: () => y,
        Jx: () => l,
        LI: () => a,
        PG: () => m,
        RI: () => c,
        Sg: () => h,
        T9: () => i,
        TV: () => v,
        WJ: () => b,
        _3: () => d,
        bV: () => T,
        jk: () => o,
        lP: () => E,
        nI: () => R,
        qE: () => f,
        r_: () => r,
        sq: () => g,
        w7: () => w
      });
      const r = ["top", "right", "bottom", "left"],
        o = Math.min,
        i = Math.max,
        a = Math.round,
        c = Math.floor,
        l = t => ({
          x: t,
          y: t
        }),
        s = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        u = {
          start: "end",
          end: "start"
        };

      function f(t, e, n) {
        return i(t, o(e, n))
      }

      function d(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function p(t) {
        return t.split("-")[0]
      }

      function h(t) {
        return t.split("-")[1]
      }

      function m(t) {
        return "x" === t ? "y" : "x"
      }

      function g(t) {
        return "y" === t ? "height" : "width"
      }

      function v(t) {
        return ["top", "bottom"].includes(p(t)) ? "y" : "x"
      }

      function y(t) {
        return m(v(t))
      }

      function w(t, e, n) {
        void 0 === n && (n = !1);
        const r = h(t),
          o = y(t),
          i = g(o);
        let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
        return e.reference[i] > e.floating[i] && (a = T(a)), [a, T(a)]
      }

      function b(t) {
        const e = T(t);
        return [x(t), e, x(e)]
      }

      function x(t) {
        return t.replace(/start|end/g, (t => u[t]))
      }

      function E(t, e, n, r) {
        const o = h(t);
        let i = function(t, e, n) {
          const r = ["left", "right"],
            o = ["right", "left"],
            i = ["top", "bottom"],
            a = ["bottom", "top"];
          switch (t) {
            case "top":
            case "bottom":
              return n ? e ? o : r : e ? r : o;
            case "left":
            case "right":
              return e ? i : a;
            default:
              return []
          }
        }(p(t), "start" === n, r);
        return o && (i = i.map((t => t + "-" + o)), e && (i = i.concat(i.map(x)))), i
      }

      function T(t) {
        return t.replace(/left|right|bottom|top/g, (t => s[t]))
      }

      function R(t) {
        return "number" != typeof t ? function(t) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...t
          }
        }(t) : {
          top: t,
          right: t,
          bottom: t,
          left: t
        }
      }

      function C(t) {
        return {
          ...t,
          top: t.y,
          left: t.x,
          right: t.x + t.width,
          bottom: t.y + t.height
        }
      }
    }
  }
]);