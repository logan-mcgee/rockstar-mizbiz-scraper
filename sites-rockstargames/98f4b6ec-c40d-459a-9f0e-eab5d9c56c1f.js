try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "98f4b6ec-c40d-459a-9f0e-eab5d9c56c1f", e._sentryDebugIdIdentifier = "sentry-dbid-98f4b6ec-c40d-459a-9f0e-eab5d9c56c1f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "4e734f43fc53879f76d3e1ad3d0f71361f833d25",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "4e734f43fc53879f76d3e1ad3d0f71361f833d25"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [4446], {
    4446: (e, n, t) => {
      t.d(n, {
        A: () => Y
      });
      var r = t(91299),
        o = t(62229),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar",
        i = t(89720),
        u = (0, t(68295).f)(),
        d = function() {},
        l = o.forwardRef((function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: d
            }),
            c = a[0],
            l = a[1],
            s = e.forwardProps,
            f = e.children,
            h = e.className,
            v = e.removeScrollBar,
            g = e.enabled,
            p = e.shards,
            m = e.sideCar,
            w = e.noIsolation,
            b = e.inert,
            y = e.allowPinchZoom,
            E = e.as,
            _ = void 0 === E ? "div" : E,
            k = e.gapMode,
            S = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            C = m,
            M = (0, i.S)([t, n]),
            R = (0, r.__assign)((0, r.__assign)({}, S), c);
          return o.createElement(o.Fragment, null, g && o.createElement(C, {
            sideCar: u,
            removeScrollBar: v,
            shards: p,
            noIsolation: w,
            inert: b,
            setCallbacks: l,
            allowPinchZoom: !!y,
            lockRef: t,
            gapMode: k
          }), s ? o.cloneElement(o.Children.only(f), (0, r.__assign)((0, r.__assign)({}, R), {
            ref: M
          })) : o.createElement(_, (0, r.__assign)({}, R, {
            className: h,
            ref: M
          }), f))
        }));
      l.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, l.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var s = function(e) {
        var n = e.sideCar,
          t = (0, r.__rest)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, t))
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
        g = function(e) {
          return parseInt(e || "", 10) || 0
        },
        p = h(),
        m = "data-scroll-locked",
        w = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            d = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(d, "px ").concat(r, ";\n  }\n  body[").concat(m, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(d, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(d, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(m, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(d, "px;\n  }\n")
        },
        b = function() {
          var e = parseInt(document.body.getAttribute(m) || "0", 10);
          return isFinite(e) ? e : 0
        },
        y = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(m, (b() + 1).toString()),
              function() {
                var e = b() - 1;
                e <= 0 ? document.body.removeAttribute(m) : document.body.setAttribute(m, e.toString())
              }
          }), []);
          var c = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return v;
              var n = function(e) {
                  var n = window.getComputedStyle(document.body),
                    t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = n["padding" === e ? "paddingTop" : "marginTop"],
                    o = n["padding" === e ? "paddingRight" : "marginRight"];
                  return [g(t), g(r), g(o)]
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
            styles: w(c, !n, a, t ? "" : "!important")
          })
        },
        E = !1;
      if ("undefined" != typeof window) try {
        var _ = Object.defineProperty({}, "passive", {
          get: function() {
            return E = !0, !0
          }
        });
        window.addEventListener("test", _, _), window.removeEventListener("test", _, _)
      } catch (e) {
        E = !1
      }
      var k = !!E && {
          passive: !1
        },
        S = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        C = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), M(e, r)) {
              var o = R(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        M = function(e, n) {
          return "v" === e ? function(e) {
            return S(e, "overflowY")
          }(n) : function(e) {
            return S(e, "overflowX")
          }(n)
        },
        R = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
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
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const B = (u.useMedium((function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(I++)[0],
          i = o.useState(h)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(N), !0).filter(Boolean);
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
        var d = o.useCallback((function(e, n) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = T(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              d = "deltaY" in e ? e.deltaY : c[1] - o[1],
              l = e.target,
              s = Math.abs(i) > Math.abs(d) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === l.type) return !1;
            var f = C(s, l);
            if (!f) return !0;
            if (f ? r = s : (r = "v" === s ? "h" : "v", f = C(s, l)), !f) return !1;
            if (!a.current && "changedTouches" in e && (i || d) && (a.current = r), !r) return !0;
            var h = a.current || r;
            return function(e, n, t, r, o) {
              var a = function(e, n) {
                  return "h" === e && "rtl" === n ? -1 : 1
                }(e, window.getComputedStyle(n).direction),
                c = a * r,
                i = t.target,
                u = n.contains(i),
                d = !1,
                l = c > 0,
                s = 0,
                f = 0;
              do {
                var h = R(e, i),
                  v = h[0],
                  g = h[1] - h[2] - a * v;
                (v || g) && M(e, i) && (s += g, f += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (n.contains(i) || n === i));
              return (l && (o && Math.abs(s) < 1 || !o && c > s) || !l && (o && Math.abs(f) < 1 || !o && -c > f)) && (d = !0), d
            }(h, n, e, "h" === h ? i : d, !0)
          }), []),
          l = o.useCallback((function(e) {
            var t = e;
            if (P.length && P[P.length - 1] === i) {
              var r = "deltaY" in t ? L(t) : T(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(N).filter(Boolean).filter((function(e) {
                  return e.contains(t.target)
                }));
                (a.length > 0 ? d(t, a[0]) : !u.current.noIsolation) && t.cancelable && t.preventDefault()
              }
            }
          }), []),
          s = o.useCallback((function(e, t, r, o) {
            var a = {
              name: e,
              delta: t,
              target: r,
              should: o,
              shadowParent: A(r)
            };
            n.current.push(a), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            t.current = T(e), a.current = void 0
          }), []),
          v = o.useCallback((function(n) {
            s(n.type, L(n), n.target, d(n, e.lockRef.current))
          }), []),
          g = o.useCallback((function(n) {
            s(n.type, T(n), n.target, d(n, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return P.push(i), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: g
            }), document.addEventListener("wheel", l, k), document.addEventListener("touchmove", l, k), document.addEventListener("touchstart", f, k),
            function() {
              P = P.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", l, k), document.removeEventListener("touchmove", l, k), document.removeEventListener("touchstart", f, k)
            }
        }), []);
        var p = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(i, {
          styles: x(c)
        }) : null, p ? o.createElement(y, {
          gapMode: e.gapMode
        }) : null)
      })), s);
      var W = o.forwardRef((function(e, n) {
        return o.createElement(l, (0, r.__assign)({}, e, {
          ref: n,
          sideCar: B
        }))
      }));
      W.classNames = l.classNames;
      const Y = W
    },
    68295: (e, n, t) => {
      t.d(n, {
        C: () => c,
        f: () => i
      });
      var r = t(91299);

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
        return n.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, e), n
      }
    },
    89720: (e, n, t) => {
      t.d(n, {
        S: () => i
      });
      var r = t(62229);

      function o(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var a = "undefined" != typeof window ? r.useLayoutEffect : r.useEffect,
        c = new WeakMap;

      function i(e, n) {
        var t, i, u, d = (t = n || null, i = function(n) {
          return e.forEach((function(e) {
            return o(e, n)
          }))
        }, (u = (0, r.useState)((function() {
          return {
            value: t,
            callback: i,
            facade: {
              get current() {
                return u.value
              },
              set current(e) {
                var n = u.value;
                n !== e && (u.value = e, u.callback(e, n))
              }
            }
          }
        }))[0]).callback = i, u.facade);
        return a((function() {
          var n = c.get(d);
          if (n) {
            var t = new Set(n),
              r = new Set(e),
              a = d.current;
            t.forEach((function(e) {
              r.has(e) || o(e, null)
            })), r.forEach((function(e) {
              t.has(e) || o(e, a)
            }))
          }
          c.set(d, e)
        }), [e]), d
      }
    }
  }
]);