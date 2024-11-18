! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d4ee36ee-25a8-42c4-9c0a-ba14062a154a", e._sentryDebugIdIdentifier = "sentry-dbid-d4ee36ee-25a8-42c4-9c0a-ba14062a154a")
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
  [839, 868], {
    6868: (e, n, t) => {
      t.r(n), t.d(n, {
        RemoveScroll: () => X
      });
      var r = t(226),
        a = t(1403),
        o = "right-scroll-bar-position",
        c = "width-before-scroll-bar",
        i = t(6208),
        l = (0, t(3496).f)(),
        d = function() {},
        u = a.forwardRef((function(e, n) {
          var t = a.useRef(null),
            o = a.useState({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: d
            }),
            c = o[0],
            u = o[1],
            s = e.forwardProps,
            f = e.children,
            h = e.className,
            v = e.removeScrollBar,
            p = e.enabled,
            g = e.shards,
            m = e.sideCar,
            w = e.noIsolation,
            b = e.inert,
            y = e.allowPinchZoom,
            C = e.as,
            E = void 0 === C ? "div" : C,
            k = e.gapMode,
            S = (0, r.Tt)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            R = m,
            M = (0, i.S)([t, n]),
            _ = (0, r.Cl)((0, r.Cl)({}, S), c);
          return a.createElement(a.Fragment, null, p && a.createElement(R, {
            sideCar: l,
            removeScrollBar: v,
            shards: g,
            noIsolation: w,
            inert: b,
            setCallbacks: u,
            allowPinchZoom: !!y,
            lockRef: t,
            gapMode: k
          }), s ? a.cloneElement(a.Children.only(f), (0, r.Cl)((0, r.Cl)({}, _), {
            ref: M
          })) : a.createElement(E, (0, r.Cl)({}, _, {
            className: h,
            ref: M
          }), f))
        }));
      u.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, u.classNames = {
        fullWidth: c,
        zeroRight: o
      };
      var s = function(e) {
        var n = e.sideCar,
          t = (0, r.Tt)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var o = n.read();
        if (!o) throw new Error("Sidecar medium not found");
        return a.createElement(o, (0, r.Cl)({}, t))
      };
      s.isSideCarExport = !0;
      var f = function() {
          var e = 0,
            n = null;
          return {
            add: function(r) {
              var a, o;
              0 == e && (n = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var n = t.nc;
                return n && e.setAttribute("nonce", n), e
              }()) && (o = r, (a = n).styleSheet ? a.styleSheet.cssText = o : a.appendChild(document.createTextNode(o)), function(e) {
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
            a.useEffect((function() {
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
        p = function(e) {
          return parseInt(e || "", 10) || 0
        },
        g = h(),
        m = function(e, n, t, r) {
          var a = e.left,
            i = e.top,
            l = e.right,
            d = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(d, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(a, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(d, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(d, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(o, " {\n    right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(o, " .").concat(o, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(d, "px;\n  }\n")
        },
        w = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r,
            c = a.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return v;
                var n = function(e) {
                    var n = window.getComputedStyle(document.body),
                      t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = n["padding" === e ? "paddingTop" : "marginTop"],
                      a = n["padding" === e ? "paddingRight" : "marginRight"];
                    return [p(t), p(r), p(a)]
                  }(e),
                  t = document.documentElement.clientWidth,
                  r = window.innerWidth;
                return {
                  left: n[0],
                  top: n[1],
                  right: n[2],
                  gap: Math.max(0, r - t + n[2] - n[0])
                }
              }(o)
            }), [o]);
          return a.createElement(g, {
            styles: m(c, !n, o, t ? "" : "!important")
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
      var C = !!b && {
          passive: !1
        },
        E = function(e, n) {
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
              var a = R(e, r);
              if (a[1] > a[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        S = function(e, n) {
          return "v" === e ? function(e) {
            return E(e, "overflowY")
          }(n) : function(e) {
            return E(e, "overflowX")
          }(n)
        },
        R = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        M = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        _ = function(e) {
          return [e.deltaX, e.deltaY]
        },
        T = function(e) {
          return e && "current" in e ? e.current : e
        },
        L = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        N = 0,
        x = [];

      function I(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const P = (l.useMedium((function(e) {
        var n = a.useRef([]),
          t = a.useRef([0, 0]),
          o = a.useRef(),
          c = a.useState(N++)[0],
          i = a.useState(h)[0],
          l = a.useRef(e);
        a.useEffect((function() {
          l.current = e
        }), [e]), a.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.fX)([e.lockRef.current], (e.shards || []).map(T), !0).filter(Boolean);
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
        var d = a.useCallback((function(e, n) {
            if ("touches" in e && 2 === e.touches.length) return !l.current.allowPinchZoom;
            var r, a = M(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - a[0],
              d = "deltaY" in e ? e.deltaY : c[1] - a[1],
              u = e.target,
              s = Math.abs(i) > Math.abs(d) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === u.type) return !1;
            var f = k(s, u);
            if (!f) return !0;
            if (f ? r = s : (r = "v" === s ? "h" : "v", f = k(s, u)), !f) return !1;
            if (!o.current && "changedTouches" in e && (i || d) && (o.current = r), !r) return !0;
            var h = o.current || r;
            return function(e, n, t, r, a) {
              var o = function(e, n) {
                  return "h" === e && "rtl" === n ? -1 : 1
                }(e, window.getComputedStyle(n).direction),
                c = o * r,
                i = t.target,
                l = n.contains(i),
                d = !1,
                u = c > 0,
                s = 0,
                f = 0;
              do {
                var h = R(e, i),
                  v = h[0],
                  p = h[1] - h[2] - o * v;
                (v || p) && S(e, i) && (s += p, f += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!l && i !== document.body || l && (n.contains(i) || n === i));
              return (u && (a && Math.abs(s) < 1 || !a && c > s) || !u && (a && Math.abs(f) < 1 || !a && -c > f)) && (d = !0), d
            }(h, n, e, "h" === h ? i : d, !0)
          }), []),
          u = a.useCallback((function(e) {
            var t = e;
            if (x.length && x[x.length - 1] === i) {
              var r = "deltaY" in t ? _(t) : M(t),
                a = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, a = r, n[0] === a[0] && n[1] === a[1]);
                  var n, a
                }))[0];
              if (a && a.should) t.cancelable && t.preventDefault();
              else if (!a) {
                var o = (l.current.shards || []).map(T).filter(Boolean).filter((function(e) {
                  return e.contains(t.target)
                }));
                (o.length > 0 ? d(t, o[0]) : !l.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }), []),
          s = a.useCallback((function(e, t, r, a) {
            var o = {
              name: e,
              delta: t,
              target: r,
              should: a,
              shadowParent: I(r)
            };
            n.current.push(o), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== o
              }))
            }), 1)
          }), []),
          f = a.useCallback((function(e) {
            t.current = M(e), o.current = void 0
          }), []),
          v = a.useCallback((function(n) {
            s(n.type, _(n), n.target, d(n, e.lockRef.current))
          }), []),
          p = a.useCallback((function(n) {
            s(n.type, M(n), n.target, d(n, e.lockRef.current))
          }), []);
        a.useEffect((function() {
          return x.push(i), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: p
            }), document.addEventListener("wheel", u, C), document.addEventListener("touchmove", u, C), document.addEventListener("touchstart", f, C),
            function() {
              x = x.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", u, C), document.removeEventListener("touchmove", u, C), document.removeEventListener("touchstart", f, C)
            }
        }), []);
        var g = e.removeScrollBar,
          m = e.inert;
        return a.createElement(a.Fragment, null, m ? a.createElement(i, {
          styles: L(c)
        }) : null, g ? a.createElement(w, {
          gapMode: e.gapMode
        }) : null)
      })), s);
      var B = a.forwardRef((function(e, n) {
        return a.createElement(u, (0, r.Cl)({}, e, {
          ref: n,
          sideCar: P
        }))
      }));
      B.classNames = u.classNames;
      const X = B
    }
  }
]);