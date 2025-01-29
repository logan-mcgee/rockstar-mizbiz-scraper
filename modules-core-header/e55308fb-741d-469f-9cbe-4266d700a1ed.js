! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "e55308fb-741d-469f-9cbe-4266d700a1ed", e._sentryDebugIdIdentifier = "sentry-dbid-e55308fb-741d-469f-9cbe-4266d700a1ed")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [776], {
    3776: (e, n, t) => {
      t.r(n), t.d(n, {
        RemoveScroll: () => K
      });
      var r = t(8322),
        o = t(2229),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;

      function d(e) {
        return e
      }
      var f = function(e) {
          void 0 === e && (e = {});
          var n = function(e, n) {
            void 0 === n && (n = d);
            var t = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return t.length ? t[t.length - 1] : e
              },
              useMedium: function(e) {
                var o = n(e, r);
                return t.push(o),
                  function() {
                    t = t.filter((function(e) {
                      return e !== o
                    }))
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; t.length;) {
                  var n = t;
                  t = [], n.forEach(e)
                }
                t = {
                  push: function(n) {
                    return e(n)
                  },
                  filter: function() {
                    return t
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var n = [];
                if (t.length) {
                  var o = t;
                  t = [], o.forEach(e), n = t
                }
                var a = function() {
                    var t = n;
                    n = [], t.forEach(e)
                  },
                  c = function() {
                    return Promise.resolve().then(a)
                  };
                c(), t = {
                  push: function(e) {
                    n.push(e), c()
                  },
                  filter: function(e) {
                    return n = n.filter(e), t
                  }
                }
              }
            }
          }(null);
          return n.options = (0, r.Cl)({
            async: !0,
            ssr: !1
          }, e), n
        }(),
        s = function() {},
        h = o.forwardRef((function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: s,
              onWheelCapture: s,
              onTouchMoveCapture: s
            }),
            c = a[0],
            d = a[1],
            h = e.forwardProps,
            v = e.children,
            m = e.className,
            p = e.removeScrollBar,
            g = e.enabled,
            b = e.shards,
            w = e.sideCar,
            y = e.noIsolation,
            E = e.inert,
            C = e.allowPinchZoom,
            S = e.as,
            k = void 0 === S ? "div" : S,
            M = e.gapMode,
            R = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            _ = w,
            T = function(e, n) {
              var t, r, a, c = (t = n || null, r = function(n) {
                return e.forEach((function(e) {
                  return i(e, n)
                }))
              }, (a = (0, o.useState)((function() {
                return {
                  value: t,
                  callback: r,
                  facade: {
                    get current() {
                      return a.value
                    },
                    set current(e) {
                      var n = a.value;
                      n !== e && (a.value = e, a.callback(e, n))
                    }
                  }
                }
              }))[0]).callback = r, a.facade);
              return u((function() {
                var n = l.get(c);
                if (n) {
                  var t = new Set(n),
                    r = new Set(e),
                    o = c.current;
                  t.forEach((function(e) {
                    r.has(e) || i(e, null)
                  })), r.forEach((function(e) {
                    t.has(e) || i(e, o)
                  }))
                }
                l.set(c, e)
              }), [e]), c
            }([t, n]),
            N = (0, r.Cl)((0, r.Cl)({}, R), c);
          return o.createElement(o.Fragment, null, g && o.createElement(_, {
            sideCar: f,
            removeScrollBar: p,
            shards: b,
            noIsolation: y,
            inert: E,
            setCallbacks: d,
            allowPinchZoom: !!C,
            lockRef: t,
            gapMode: M
          }), h ? o.cloneElement(o.Children.only(v), (0, r.Cl)((0, r.Cl)({}, N), {
            ref: T
          })) : o.createElement(k, (0, r.Cl)({}, N, {
            className: m,
            ref: T
          }), v))
        }));
      h.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, h.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var v = function(e) {
        var n = e.sideCar,
          t = (0, r.Tt)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.Cl)({}, t))
      };
      v.isSideCarExport = !0;
      var m, p, g, b, w = function() {
          return t.nc
        },
        y = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        E = function(e) {
          return parseInt(e || "", 10) || 0
        },
        C = (g = 0, b = null, m = {
          add: function(e) {
            var n, t;
            0 == g && (b = function() {
              if (!document) return null;
              var e = document.createElement("style");
              e.type = "text/css";
              var n = w();
              return n && e.setAttribute("nonce", n), e
            }()) && (t = e, (n = b).styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), function(e) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(b)), g++
          },
          remove: function() {
            !--g && b && (b.parentNode && b.parentNode.removeChild(b), b = null)
          }
        }, p = function(e, n) {
          o.useEffect((function() {
            return m.add(e),
              function() {
                m.remove()
              }
          }), [e && n])
        }, function(e) {
          var n = e.styles,
            t = e.dynamic;
          return p(n, t), null
        }),
        S = "data-scroll-locked",
        k = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(S, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(S, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        M = function() {
          var e = parseInt(document.body.getAttribute(S) || "0", 10);
          return isFinite(e) ? e : 0
        },
        R = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(S, (M() + 1).toString()),
              function() {
                var e = M() - 1;
                e <= 0 ? document.body.removeAttribute(S) : document.body.setAttribute(S, e.toString())
              }
          }), []);
          var c = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return y;
              var n = function(e) {
                  var n = window.getComputedStyle(document.body),
                    t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = n["padding" === e ? "paddingTop" : "marginTop"],
                    o = n["padding" === e ? "paddingRight" : "marginRight"];
                  return [E(t), E(r), E(o)]
                }(e),
                t = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: n[0],
                top: n[1],
                right: n[2],
                gap: Math.max(0, r - t + n[2] - n[0])
              }
            }(a)
          }), [a]);
          return o.createElement(C, {
            styles: k(c, !n, a, t ? "" : "!important")
          })
        },
        _ = function() {
          var e = function() {
            var e = function() {
              var e = 0,
                n = null;
              return {
                add: function(t) {
                  var r, o;
                  0 == e && (n = function() {
                    if (!document) return null;
                    var e = document.createElement("style");
                    e.type = "text/css";
                    var n = w();
                    return n && e.setAttribute("nonce", n), e
                  }()) && (o = t, (r = n).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(e) {
                    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                  }(n)), e++
                },
                remove: function() {
                  !--e && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
                }
              }
            }();
            return function(n, t) {
              o.useEffect((function() {
                return e.add(n),
                  function() {
                    e.remove()
                  }
              }), [n && t])
            }
          }();
          return function(n) {
            var t = n.styles,
              r = n.dynamic;
            return e(t, r), null
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
      var x = !!T && {
          passive: !1
        },
        L = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        I = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), P(e, r)) {
              var o = B(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        P = function(e, n) {
          return "v" === e ? function(e) {
            return L(e, "overflowY")
          }(n) : function(e) {
            return L(e, "overflowX")
          }(n)
        },
        B = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        A = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        W = function(e) {
          return [e.deltaX, e.deltaY]
        },
        X = function(e) {
          return e && "current" in e ? e.current : e
        },
        Y = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        D = 0,
        Z = [];

      function F(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const j = (z = function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(D++)[0],
          i = o.useState(_)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.fX)([e.lockRef.current], (e.shards || []).map(X), !0).filter(Boolean);
            return n.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(c))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(c)), n.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(c))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var l = o.useCallback((function(e, n) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = A(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              d = e.target,
              f = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === f && "range" === d.type) return !1;
            var s = I(f, d);
            if (!s) return !0;
            if (s ? r = f : (r = "v" === f ? "h" : "v", s = I(f, d)), !s) return !1;
            if (!a.current && "changedTouches" in e && (i || l) && (a.current = r), !r) return !0;
            var h = a.current || r;
            return function(e, n, t, r, o) {
              var a = function(e, n) {
                  return "h" === e && "rtl" === n ? -1 : 1
                }(e, window.getComputedStyle(n).direction),
                c = a * r,
                i = t.target,
                u = n.contains(i),
                l = !1,
                d = c > 0,
                f = 0,
                s = 0;
              do {
                var h = B(e, i),
                  v = h[0],
                  m = h[1] - h[2] - a * v;
                (v || m) && P(e, i) && (f += m, s += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (n.contains(i) || n === i));
              return (d && (Math.abs(f) < 1 || !1) || !d && (Math.abs(s) < 1 || !1)) && (l = !0), l
            }(h, n, e, "h" === h ? i : l)
          }), []),
          d = o.useCallback((function(e) {
            var t = e;
            if (Z.length && Z[Z.length - 1] === i) {
              var r = "deltaY" in t ? W(t) : A(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(X).filter(Boolean).filter((function(e) {
                  return e.contains(t.target)
                }));
                (a.length > 0 ? l(t, a[0]) : !u.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }), []),
          f = o.useCallback((function(e, t, r, o) {
            var a = {
              name: e,
              delta: t,
              target: r,
              should: o,
              shadowParent: F(r)
            };
            n.current.push(a), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          s = o.useCallback((function(e) {
            t.current = A(e), a.current = void 0
          }), []),
          h = o.useCallback((function(n) {
            f(n.type, W(n), n.target, l(n, e.lockRef.current))
          }), []),
          v = o.useCallback((function(n) {
            f(n.type, A(n), n.target, l(n, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return Z.push(i), e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", d, x), document.addEventListener("touchmove", d, x), document.addEventListener("touchstart", s, x),
            function() {
              Z = Z.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", d, x), document.removeEventListener("touchmove", d, x), document.removeEventListener("touchstart", s, x)
            }
        }), []);
        var m = e.removeScrollBar,
          p = e.inert;
        return o.createElement(o.Fragment, null, p ? o.createElement(i, {
          styles: Y(c)
        }) : null, m ? o.createElement(R, {
          gapMode: e.gapMode
        }) : null)
      }, f.useMedium(z), v);
      var z, H = o.forwardRef((function(e, n) {
        return o.createElement(h, (0, r.Cl)({}, e, {
          ref: n,
          sideCar: j
        }))
      }));
      H.classNames = h.classNames;
      const K = H
    }
  }
]);