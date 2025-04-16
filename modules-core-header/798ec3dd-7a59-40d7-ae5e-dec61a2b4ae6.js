! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "798ec3dd-7a59-40d7-ae5e-dec61a2b4ae6", e._sentryDebugIdIdentifier = "sentry-dbid-798ec3dd-7a59-40d7-ae5e-dec61a2b4ae6")
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
  [6082], {
    86082: (e, n, t) => {
      t.r(n), t.d(n, {
        RemoveScroll: () => A
      });
      var r = t(91299),
        o = t(62229),
        a = t(85191);

      function c(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var i = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        u = new WeakMap;

      function d(e) {
        return e
      }
      var l = function(e) {
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
          return n.options = (0, r.__assign)({
            async: !0,
            ssr: !1
          }, e), n
        }(),
        s = function() {},
        f = o.forwardRef((function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: s,
              onWheelCapture: s,
              onTouchMoveCapture: s
            }),
            d = a[0],
            f = a[1],
            h = e.forwardProps,
            v = e.children,
            m = e.className,
            p = e.removeScrollBar,
            g = e.enabled,
            y = e.shards,
            b = e.sideCar,
            w = e.noIsolation,
            E = e.inert,
            _ = e.allowPinchZoom,
            C = e.as,
            S = void 0 === C ? "div" : C,
            k = e.gapMode,
            M = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            N = b,
            R = function(e, n) {
              var t, r, a, d = (t = n || null, r = function(n) {
                return e.forEach((function(e) {
                  return c(e, n)
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
              return i((function() {
                var n = u.get(d);
                if (n) {
                  var t = new Set(n),
                    r = new Set(e),
                    o = d.current;
                  t.forEach((function(e) {
                    r.has(e) || c(e, null)
                  })), r.forEach((function(e) {
                    t.has(e) || c(e, o)
                  }))
                }
                u.set(d, e)
              }), [e]), d
            }([t, n]),
            x = (0, r.__assign)((0, r.__assign)({}, M), d);
          return o.createElement(o.Fragment, null, g && o.createElement(N, {
            sideCar: l,
            removeScrollBar: p,
            shards: y,
            noIsolation: w,
            inert: E,
            setCallbacks: f,
            allowPinchZoom: !!_,
            lockRef: t,
            gapMode: k
          }), h ? o.cloneElement(o.Children.only(v), (0, r.__assign)((0, r.__assign)({}, x), {
            ref: R
          })) : o.createElement(S, (0, r.__assign)({}, x, {
            className: m,
            ref: R
          }), v))
        }));
      f.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, f.classNames = {
        fullWidth: a.pN,
        zeroRight: a.Mi
      };
      var h = function(e) {
        var n = e.sideCar,
          t = (0, r.__rest)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, t))
      };
      h.isSideCarExport = !0;
      var v = t(14028),
        m = t(89412),
        p = function() {
          var e, n, t, r = (n = 0, t = null, e = {
            add: function(e) {
              var r, o;
              0 == n && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var n = (0, m.m)();
                return n && e.setAttribute("nonce", n), e
              }()) && (o = e, (r = t).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), n++
            },
            remove: function() {
              !--n && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }, function(n, t) {
            o.useEffect((function() {
              return e.add(n),
                function() {
                  e.remove()
                }
            }), [n && t])
          });
          return function(e) {
            var n = e.styles,
              t = e.dynamic;
            return r(n, t), null
          }
        },
        g = !1;
      if ("undefined" != typeof window) try {
        var y = Object.defineProperty({}, "passive", {
          get: function() {
            return g = !0, !0
          }
        });
        window.addEventListener("test", y, y), window.removeEventListener("test", y, y)
      } catch (e) {
        g = !1
      }
      var b = !!g && {
          passive: !1
        },
        w = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        E = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), _(e, r)) {
              var o = C(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        _ = function(e, n) {
          return "v" === e ? function(e) {
            return w(e, "overflowY")
          }(n) : function(e) {
            return w(e, "overflowX")
          }(n)
        },
        C = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        S = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        k = function(e) {
          return [e.deltaX, e.deltaY]
        },
        M = function(e) {
          return e && "current" in e ? e.current : e
        },
        N = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        R = 0,
        x = [];

      function T(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const L = (I = function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(R++)[0],
          i = o.useState(p)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(M), !0).filter(Boolean);
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
            var r, o = S(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              d = "deltaY" in e ? e.deltaY : c[1] - o[1],
              l = e.target,
              s = Math.abs(i) > Math.abs(d) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === l.type) return !1;
            var f = E(s, l);
            if (!f) return !0;
            if (f ? r = s : (r = "v" === s ? "h" : "v", f = E(s, l)), !f) return !1;
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
                var h = C(e, i),
                  v = h[0],
                  m = h[1] - h[2] - a * v;
                (v || m) && _(e, i) && (s += m, f += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (n.contains(i) || n === i));
              return (l && (Math.abs(s) < 1 || !1) || !l && (Math.abs(f) < 1 || !1)) && (d = !0), d
            }(h, n, e, "h" === h ? i : d)
          }), []),
          l = o.useCallback((function(e) {
            var t = e;
            if (x.length && x[x.length - 1] === i) {
              var r = "deltaY" in t ? k(t) : S(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(M).filter(Boolean).filter((function(e) {
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
              shadowParent: T(r)
            };
            n.current.push(a), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            t.current = S(e), a.current = void 0
          }), []),
          h = o.useCallback((function(n) {
            s(n.type, k(n), n.target, d(n, e.lockRef.current))
          }), []),
          m = o.useCallback((function(n) {
            s(n.type, S(n), n.target, d(n, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return x.push(i), e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: m
            }), document.addEventListener("wheel", l, b), document.addEventListener("touchmove", l, b), document.addEventListener("touchstart", f, b),
            function() {
              x = x.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", l, b), document.removeEventListener("touchmove", l, b), document.removeEventListener("touchstart", f, b)
            }
        }), []);
        var g = e.removeScrollBar,
          y = e.inert;
        return o.createElement(o.Fragment, null, y ? o.createElement(i, {
          styles: N(c)
        }) : null, g ? o.createElement(v.jp, {
          gapMode: e.gapMode
        }) : null)
      }, l.useMedium(I), h);
      var I, P = o.forwardRef((function(e, n) {
        return o.createElement(f, (0, r.__assign)({}, e, {
          ref: n,
          sideCar: L
        }))
      }));
      P.classNames = f.classNames;
      const A = P
    },
    89412: (e, n, t) => {
      t.d(n, {
        m: () => r
      });
      var r = function() {
        return t.nc
      }
    },
    85191: (e, n, t) => {
      t.d(n, {
        E9: () => a,
        Mi: () => r,
        pN: () => o,
        xi: () => c
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        a = "with-scroll-bars-hidden",
        c = "--removed-body-scroll-bar-size"
    },
    14028: (e, n, t) => {
      t.d(n, {
        jp: () => p
      });
      var r, o, a, c, i = t(62229),
        u = t(89412),
        d = t(85191),
        l = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        s = function(e) {
          return parseInt(e || "", 10) || 0
        },
        f = (a = 0, c = null, r = {
          add: function(e) {
            var n, t;
            0 == a && (c = function() {
              if (!document) return null;
              var e = document.createElement("style");
              e.type = "text/css";
              var n = (0, u.m)();
              return n && e.setAttribute("nonce", n), e
            }()) && (t = e, (n = c).styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), function(e) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(c)), a++
          },
          remove: function() {
            !--a && c && (c.parentNode && c.parentNode.removeChild(c), c = null)
          }
        }, o = function(e, n) {
          i.useEffect((function() {
            return r.add(e),
              function() {
                r.remove()
              }
          }), [e && n])
        }, function(e) {
          var n = e.styles,
            t = e.dynamic;
          return o(n, t), null
        }),
        h = "data-scroll-locked",
        v = function(e, n, t, r) {
          var o = e.left,
            a = e.top,
            c = e.right,
            i = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat(d.E9, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(i, "px ").concat(r, ";\n  }\n  body[").concat(h, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(c, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(d.Mi, " {\n    right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(d.pN, " {\n    margin-right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(d.Mi, " .").concat(d.Mi, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(d.pN, " .").concat(d.pN, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(h, "] {\n    ").concat(d.xi, ": ").concat(i, "px;\n  }\n")
        },
        m = function() {
          var e = parseInt(document.body.getAttribute(h) || "0", 10);
          return isFinite(e) ? e : 0
        },
        p = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          i.useEffect((function() {
            return document.body.setAttribute(h, (m() + 1).toString()),
              function() {
                var e = m() - 1;
                e <= 0 ? document.body.removeAttribute(h) : document.body.setAttribute(h, e.toString())
              }
          }), []);
          var a = i.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return l;
              var n = function(e) {
                  var n = window.getComputedStyle(document.body),
                    t = n["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = n["padding" === e ? "paddingTop" : "marginTop"],
                    o = n["padding" === e ? "paddingRight" : "marginRight"];
                  return [s(t), s(r), s(o)]
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
          return i.createElement(f, {
            styles: v(a, !n, o, t ? "" : "!important")
          })
        }
    }
  }
]);