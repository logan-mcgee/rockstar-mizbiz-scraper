! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5eedd885-b4b2-4896-874d-a690ec8e1439", e._sentryDebugIdIdentifier = "sentry-dbid-5eedd885-b4b2-4896-874d-a690ec8e1439")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "1a2a4086bf51f6ab1b48a1034109163ec977b086",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "1a2a4086bf51f6ab1b48a1034109163ec977b086"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [708, 8327], {
    708: (e, t, n) => {
      n.r(t), n.d(t, {
        RemoveScroll: () => D
      });
      var r = n(3514),
        a = n(2229),
        o = "right-scroll-bar-position",
        c = "width-before-scroll-bar",
        i = n(3614),
        l = (0, n(9683).f)(),
        d = function() {},
        u = a.forwardRef((function(e, t) {
          var n = a.useRef(null),
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
            g = e.removeScrollBar,
            p = e.enabled,
            v = e.shards,
            m = e.sideCar,
            b = e.noIsolation,
            y = e.inert,
            w = e.allowPinchZoom,
            _ = e.as,
            E = void 0 === _ ? "div" : _,
            M = e.gapMode,
            C = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            k = m,
            S = (0, i.S)([n, t]),
            R = (0, r.__assign)((0, r.__assign)({}, C), c);
          return a.createElement(a.Fragment, null, p && a.createElement(k, {
            sideCar: l,
            removeScrollBar: g,
            shards: v,
            noIsolation: b,
            inert: y,
            setCallbacks: u,
            allowPinchZoom: !!w,
            lockRef: n,
            gapMode: M
          }), s ? a.cloneElement(a.Children.only(f), (0, r.__assign)((0, r.__assign)({}, R), {
            ref: S
          })) : a.createElement(E, (0, r.__assign)({}, R, {
            className: h,
            ref: S
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
        var t = e.sideCar,
          n = (0, r.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var o = t.read();
        if (!o) throw new Error("Sidecar medium not found");
        return a.createElement(o, (0, r.__assign)({}, n))
      };
      s.isSideCarExport = !0;
      var f = function() {
          var e = 0,
            t = null;
          return {
            add: function(r) {
              var a, o;
              0 == e && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = n.nc;
                return t && e.setAttribute("nonce", t), e
              }()) && (o = r, (a = t).styleSheet ? a.styleSheet.cssText = o : a.appendChild(document.createTextNode(o)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), e++
            },
            remove: function() {
              !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }
        },
        h = function() {
          var e, t = (e = f(), function(t, n) {
            a.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var n = e.styles,
              r = e.dynamic;
            return t(n, r), null
          }
        },
        g = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        p = function(e) {
          return parseInt(e || "", 10) || 0
        },
        v = h(),
        m = "data-scroll-locked",
        b = function(e, t, n, r) {
          var a = e.left,
            i = e.top,
            l = e.right,
            d = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(d, "px ").concat(r, ";\n  }\n  body[").concat(m, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(a, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(l, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(d, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(d, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(o, " {\n    right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(o, " .").concat(o, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(m, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(d, "px;\n  }\n")
        },
        y = function() {
          var e = parseInt(document.body.getAttribute(m) || "0", 10);
          return isFinite(e) ? e : 0
        },
        w = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          a.useEffect((function() {
            return document.body.setAttribute(m, (y() + 1).toString()),
              function() {
                var e = y() - 1;
                e <= 0 ? document.body.removeAttribute(m) : document.body.setAttribute(m, e.toString())
              }
          }), []);
          var c = a.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return g;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    a = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [p(n), p(r), p(a)]
                }(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
              }
            }(o)
          }), [o]);
          return a.createElement(v, {
            styles: b(c, !t, o, n ? "" : "!important")
          })
        },
        _ = !1;
      if ("undefined" != typeof window) try {
        var E = Object.defineProperty({}, "passive", {
          get: function() {
            return _ = !0, !0
          }
        });
        window.addEventListener("test", E, E), window.removeEventListener("test", E, E)
      } catch (e) {
        _ = !1
      }
      var M = !!_ && {
          passive: !1
        },
        C = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        k = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), S(e, r)) {
              var a = R(e, r);
              if (a[1] > a[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        S = function(e, t) {
          return "v" === e ? function(e) {
            return C(e, "overflowY")
          }(t) : function(e) {
            return C(e, "overflowX")
          }(t)
        },
        R = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        T = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        L = function(e) {
          return [e.deltaX, e.deltaY]
        },
        N = function(e) {
          return e && "current" in e ? e.current : e
        },
        x = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        I = 0,
        P = [];

      function A(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const B = (l.useMedium((function(e) {
        var t = a.useRef([]),
          n = a.useRef([0, 0]),
          o = a.useRef(),
          c = a.useState(I++)[0],
          i = a.useState(h)[0],
          l = a.useRef(e);
        a.useEffect((function() {
          l.current = e
        }), [e]), a.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(N), !0).filter(Boolean);
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
        var d = a.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !l.current.allowPinchZoom;
            var r, a = T(e),
              c = n.current,
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
            return function(e, t, n, r, a) {
              var o = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                c = o * r,
                i = n.target,
                l = t.contains(i),
                d = !1,
                u = c > 0,
                s = 0,
                f = 0;
              do {
                var h = R(e, i),
                  g = h[0],
                  p = h[1] - h[2] - o * g;
                (g || p) && S(e, i) && (s += p, f += g), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!l && i !== document.body || l && (t.contains(i) || t === i));
              return (u && (a && Math.abs(s) < 1 || !a && c > s) || !u && (a && Math.abs(f) < 1 || !a && -c > f)) && (d = !0), d
            }(h, t, e, "h" === h ? i : d, !0)
          }), []),
          u = a.useCallback((function(e) {
            var n = e;
            if (P.length && P[P.length - 1] === i) {
              var r = "deltaY" in n ? L(n) : T(n),
                a = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, a = r, t[0] === a[0] && t[1] === a[1]);
                  var t, a
                }))[0];
              if (a && a.should) n.cancelable && n.preventDefault();
              else if (!a) {
                var o = (l.current.shards || []).map(N).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (o.length > 0 ? d(n, o[0]) : !l.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          s = a.useCallback((function(e, n, r, a) {
            var o = {
              name: e,
              delta: n,
              target: r,
              should: a,
              shadowParent: A(r)
            };
            t.current.push(o), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== o
              }))
            }), 1)
          }), []),
          f = a.useCallback((function(e) {
            n.current = T(e), o.current = void 0
          }), []),
          g = a.useCallback((function(t) {
            s(t.type, L(t), t.target, d(t, e.lockRef.current))
          }), []),
          p = a.useCallback((function(t) {
            s(t.type, T(t), t.target, d(t, e.lockRef.current))
          }), []);
        a.useEffect((function() {
          return P.push(i), e.setCallbacks({
              onScrollCapture: g,
              onWheelCapture: g,
              onTouchMoveCapture: p
            }), document.addEventListener("wheel", u, M), document.addEventListener("touchmove", u, M), document.addEventListener("touchstart", f, M),
            function() {
              P = P.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", u, M), document.removeEventListener("touchmove", u, M), document.removeEventListener("touchstart", f, M)
            }
        }), []);
        var v = e.removeScrollBar,
          m = e.inert;
        return a.createElement(a.Fragment, null, m ? a.createElement(i, {
          styles: x(c)
        }) : null, v ? a.createElement(w, {
          gapMode: e.gapMode
        }) : null)
      })), s);
      var Y = a.forwardRef((function(e, t) {
        return a.createElement(u, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: B
        }))
      }));
      Y.classNames = u.classNames;
      const D = Y
    }
  }
]);