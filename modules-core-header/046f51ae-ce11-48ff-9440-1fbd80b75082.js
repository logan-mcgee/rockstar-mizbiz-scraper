! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "046f51ae-ce11-48ff-9440-1fbd80b75082", e._sentryDebugIdIdentifier = "sentry-dbid-046f51ae-ce11-48ff-9440-1fbd80b75082")
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
  [239], {
    91620: (e, n, t) => {
      t.r(n), t.d(n, {
        RemoveScroll: () => B
      });
      var r = t(87672),
        o = t(51664),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar",
        i = t(92634),
        u = (0, t(35045).Y)(),
        l = function() {},
        d = o.forwardRef((function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: l,
              onWheelCapture: l,
              onTouchMoveCapture: l
            }),
            c = a[0],
            d = a[1],
            s = e.forwardProps,
            f = e.children,
            h = e.className,
            v = e.removeScrollBar,
            m = e.enabled,
            p = e.shards,
            g = e.sideCar,
            w = e.noIsolation,
            b = e.inert,
            y = e.allowPinchZoom,
            E = e.as,
            C = void 0 === E ? "div" : E,
            k = e.gapMode,
            S = (0, r.sX)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            M = g,
            R = (0, i.m)([t, n]),
            _ = (0, r.C3)((0, r.C3)({}, S), c);
          return o.createElement(o.Fragment, null, m && o.createElement(M, {
            sideCar: u,
            removeScrollBar: v,
            shards: p,
            noIsolation: w,
            inert: b,
            setCallbacks: d,
            allowPinchZoom: !!y,
            lockRef: t,
            gapMode: k
          }), s ? o.cloneElement(o.Children.only(f), (0, r.C3)((0, r.C3)({}, _), {
            ref: R
          })) : o.createElement(C, (0, r.C3)({}, _, {
            className: h,
            ref: R
          }), f))
        }));
      d.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, d.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var s = function(e) {
        var n = e.sideCar,
          t = (0, r.sX)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.C3)({}, t))
      };
      s.isSideCarExport = !0;
      var f = function() {
          var e = 0,
            n = null;
          return {
            add: function(r) {
              var o, a;
              0 == e && (n = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var n = t.nc;
                return n && e.setAttribute("nonce", n), e
              }()) && (a = r, (o = n).styleSheet ? o.styleSheet.cssText = a : o.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(n)), e++
            },
            remove: function() {
              !--e && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
            }
          }
        },
        h = function() {
          var e, n = (e = f(), function(n, t) {
            o.useEffect((function() {
              return e.add(n),
                function() {
                  e.remove()
                }
            }), [n && t])
          });
          return function(e) {
            var t = e.styles,
              r = e.dynamic;
            return n(t, r), null
          }
        },
        v = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        m = function(e) {
          return parseInt(e || "", 10) || 0
        },
        p = h(),
        g = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        w = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r,
            c = o.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return v;
                var n = function(e) {
                    var n = window.getComputedStyle(document.body),
                      t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = n["padding" === e ? "paddingTop" : "marginTop"],
                      o = n["padding" === e ? "paddingRight" : "marginRight"];
                    return [m(t), m(r), m(o)]
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
          return o.createElement(p, {
            styles: g(c, !n, a, t ? "" : "!important")
          })
        },
        b = !1;
      if ("undefined" != typeof window) try {
        var y = Object.defineProperty({}, "passive", {
          get: function() {
            return b = !0, !0
          }
        });
        window.addEventListener("test", y, y), window.removeEventListener("test", y, y)
      } catch (e) {
        b = !1
      }
      var E = !!b && {
          passive: !1
        },
        C = function(e, n) {
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        k = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), S(e, r)) {
              var o = M(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        S = function(e, n) {
          return "v" === e ? function(e) {
            return C(e, "overflowY")
          }(n) : function(e) {
            return C(e, "overflowX")
          }(n)
        },
        M = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        R = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        _ = function(e) {
          return [e.deltaX, e.deltaY]
        },
        L = function(e) {
          return e && "current" in e ? e.current : e
        },
        N = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        T = 0,
        x = [];

      function I(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const P = (u.useMedium((function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(T++)[0],
          i = o.useState(h)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.Mt)([e.lockRef.current], (e.shards || []).map(L), !0).filter(Boolean);
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
            if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
            var r, o = R(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              d = e.target,
              s = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === d.type) return !1;
            var f = k(s, d);
            if (!f) return !0;
            if (f ? r = s : (r = "v" === s ? "h" : "v", f = k(s, d)), !f) return !1;
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
                s = 0,
                f = 0;
              do {
                var h = M(e, i),
                  v = h[0],
                  m = h[1] - h[2] - a * v;
                (v || m) && S(e, i) && (s += m, f += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (n.contains(i) || n === i));
              return (d && (o && Math.abs(s) < 1 || !o && c > s) || !d && (o && Math.abs(f) < 1 || !o && -c > f)) && (l = !0), l
            }(h, n, e, "h" === h ? i : l, !0)
          }), []),
          d = o.useCallback((function(e) {
            var t = e;
            if (x.length && x[x.length - 1] === i) {
              var r = "deltaY" in t ? _(t) : R(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(L).filter(Boolean).filter((function(e) {
                  return e.contains(t.target)
                }));
                (a.length > 0 ? l(t, a[0]) : !u.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }), []),
          s = o.useCallback((function(e, t, r, o) {
            var a = {
              name: e,
              delta: t,
              target: r,
              should: o,
              shadowParent: I(r)
            };
            n.current.push(a), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            t.current = R(e), a.current = void 0
          }), []),
          v = o.useCallback((function(n) {
            s(n.type, _(n), n.target, l(n, e.lockRef.current))
          }), []),
          m = o.useCallback((function(n) {
            s(n.type, R(n), n.target, l(n, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return x.push(i), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: m
            }), document.addEventListener("wheel", d, E), document.addEventListener("touchmove", d, E), document.addEventListener("touchstart", f, E),
            function() {
              x = x.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", d, E), document.removeEventListener("touchmove", d, E), document.removeEventListener("touchstart", f, E)
            }
        }), []);
        var p = e.removeScrollBar,
          g = e.inert;
        return o.createElement(o.Fragment, null, g ? o.createElement(i, {
          styles: N(c)
        }) : null, p ? o.createElement(w, {
          gapMode: e.gapMode
        }) : null)
      })), s);
      var Y = o.forwardRef((function(e, n) {
        return o.createElement(d, (0, r.C3)({}, e, {
          ref: n,
          sideCar: P
        }))
      }));
      Y.classNames = d.classNames;
      const B = Y
    },
    92634: (e, n, t) => {
      t.d(n, {
        m: () => o
      });
      var r = t(51664);

      function o(e, n) {
        return t = n || null, o = function(n) {
          return e.forEach((function(e) {
            return function(e, n) {
              return "function" == typeof e ? e(n) : e && (e.current = n), e
            }(e, n)
          }))
        }, (a = (0, r.useState)((function() {
          return {
            value: t,
            callback: o,
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
        }))[0]).callback = o, a.facade;
        var t, o, a
      }
    },
    35045: (e, n, t) => {
      t.d(n, {
        W: () => c,
        Y: () => i
      });
      var r = t(87672);

      function o(e) {
        return e
      }

      function a(e, n) {
        void 0 === n && (n = o);
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
      }

      function c(e, n) {
        return void 0 === n && (n = o), a(e, n)
      }

      function i(e) {
        void 0 === e && (e = {});
        var n = a(null);
        return n.options = (0, r.C3)({
          async: !0,
          ssr: !1
        }, e), n
      }
    }
  }
]);