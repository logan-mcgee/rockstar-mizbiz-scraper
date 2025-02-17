! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "a648e1da-415b-4054-9229-361f89f6c6aa", e._sentryDebugIdIdentifier = "sentry-dbid-a648e1da-415b-4054-9229-361f89f6c6aa")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-rockstargames",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [1597], {
    22102: (e, n, t) => {
      t.d(n, {
        m: () => r
      });
      var r = function() {
        return t.nc
      }
    },
    26068: (e, n, t) => {
      t.d(n, {
        T0: () => a
      });
      var r = t(62229),
        o = t(22102),
        a = function() {
          var e, n, t, a = (n = 0, t = null, e = {
            add: function(e) {
              var r, a;
              0 == n && (t = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var n = (0, o.m)();
                return n && e.setAttribute("nonce", n), e
              }()) && (a = e, (r = t).styleSheet ? r.styleSheet.cssText = a : r.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(t)), n++
            },
            remove: function() {
              !--n && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
            }
          }, function(n, t) {
            r.useEffect((function() {
              return e.add(n),
                function() {
                  e.remove()
                }
            }), [n && t])
          });
          return function(e) {
            var n = e.styles,
              t = e.dynamic;
            return a(n, t), null
          }
        }
    },
    79898: (e, n, t) => {
      t.d(n, {
        m: () => c
      });
      var r = t(63461),
        o = t(62229),
        a = function(e) {
          var n = e.sideCar,
            t = (0, r.__rest)(e, ["sideCar"]);
          if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var a = n.read();
          if (!a) throw new Error("Sidecar medium not found");
          return o.createElement(a, (0, r.__assign)({}, t))
        };

      function c(e, n) {
        return e.useMedium(n), a
      }
      a.isSideCarExport = !0
    },
    81402: (e, n, t) => {
      t.d(n, {
        C: () => c,
        f: () => i
      });
      var r = t(63461);

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
    1597: (e, n, t) => {
      t.d(n, {
        A: () => z
      });
      var r = t(63461),
        o = t(62229),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;
      var d = (0, t(81402).f)(),
        s = function() {},
        f = o.forwardRef((function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: s,
              onWheelCapture: s,
              onTouchMoveCapture: s
            }),
            c = a[0],
            f = a[1],
            h = e.forwardProps,
            v = e.children,
            m = e.className,
            g = e.removeScrollBar,
            p = e.enabled,
            b = e.shards,
            y = e.sideCar,
            w = e.noIsolation,
            E = e.inert,
            _ = e.allowPinchZoom,
            C = e.as,
            k = void 0 === C ? "div" : C,
            S = e.gapMode,
            M = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            R = y,
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
            N = (0, r.__assign)((0, r.__assign)({}, M), c);
          return o.createElement(o.Fragment, null, p && o.createElement(R, {
            sideCar: d,
            removeScrollBar: g,
            shards: b,
            noIsolation: w,
            inert: E,
            setCallbacks: f,
            allowPinchZoom: !!_,
            lockRef: t,
            gapMode: S
          }), h ? o.cloneElement(o.Children.only(v), (0, r.__assign)((0, r.__assign)({}, N), {
            ref: T
          })) : o.createElement(k, (0, r.__assign)({}, N, {
            className: m,
            ref: T
          }), v))
        }));
      f.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, f.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var h, v, m, g, p = t(79898),
        b = t(22102),
        y = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        w = function(e) {
          return parseInt(e || "", 10) || 0
        },
        E = (m = 0, g = null, h = {
          add: function(e) {
            var n, t;
            0 == m && (g = function() {
              if (!document) return null;
              var e = document.createElement("style");
              e.type = "text/css";
              var n = (0, b.m)();
              return n && e.setAttribute("nonce", n), e
            }()) && (t = e, (n = g).styleSheet ? n.styleSheet.cssText = t : n.appendChild(document.createTextNode(t)), function(e) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(g)), m++
          },
          remove: function() {
            !--m && g && (g.parentNode && g.parentNode.removeChild(g), g = null)
          }
        }, v = function(e, n) {
          o.useEffect((function() {
            return h.add(e),
              function() {
                h.remove()
              }
          }), [e && n])
        }, function(e) {
          var n = e.styles,
            t = e.dynamic;
          return v(n, t), null
        }),
        _ = "data-scroll-locked",
        C = function(e, n, t, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(_, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(_, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        k = function() {
          var e = parseInt(document.body.getAttribute(_) || "0", 10);
          return isFinite(e) ? e : 0
        },
        S = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(_, (k() + 1).toString()),
              function() {
                var e = k() - 1;
                e <= 0 ? document.body.removeAttribute(_) : document.body.setAttribute(_, e.toString())
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
                  return [w(t), w(r), w(o)]
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
          return o.createElement(E, {
            styles: C(c, !n, a, t ? "" : "!important")
          })
        },
        M = t(26068),
        R = !1;
      if ("undefined" != typeof window) try {
        var T = Object.defineProperty({}, "passive", {
          get: function() {
            return R = !0, !0
          }
        });
        window.addEventListener("test", T, T), window.removeEventListener("test", T, T)
      } catch (e) {
        R = !1
      }
      var N = !!R && {
          passive: !1
        },
        x = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        L = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), I(e, r)) {
              var o = A(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        I = function(e, n) {
          return "v" === e ? function(e) {
            return x(e, "overflowY")
          }(n) : function(e) {
            return x(e, "overflowX")
          }(n)
        },
        A = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
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

      function Z(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const F = (0, p.m)(d, (function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(D++)[0],
          i = o.useState(M.T0)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(W), !0).filter(Boolean);
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
            var r, o = P(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              d = e.target,
              s = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === d.type) return !1;
            var f = L(s, d);
            if (!f) return !0;
            if (f ? r = s : (r = "v" === s ? "h" : "v", f = L(s, d)), !f) return !1;
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
                var h = A(e, i),
                  v = h[0],
                  m = h[1] - h[2] - a * v;
                (v || m) && I(e, i) && (s += m, f += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (n.contains(i) || n === i));
              return (d && (Math.abs(s) < 1 || !1) || !d && (Math.abs(f) < 1 || !1)) && (l = !0), l
            }(h, n, e, "h" === h ? i : l)
          }), []),
          d = o.useCallback((function(e) {
            var t = e;
            if (X.length && X[X.length - 1] === i) {
              var r = "deltaY" in t ? B(t) : P(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(W).filter(Boolean).filter((function(e) {
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
              shadowParent: Z(r)
            };
            n.current.push(a), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            t.current = P(e), a.current = void 0
          }), []),
          h = o.useCallback((function(n) {
            s(n.type, B(n), n.target, l(n, e.lockRef.current))
          }), []),
          v = o.useCallback((function(n) {
            s(n.type, P(n), n.target, l(n, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return X.push(i), e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", d, N), document.addEventListener("touchmove", d, N), document.addEventListener("touchstart", f, N),
            function() {
              X = X.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", d, N), document.removeEventListener("touchmove", d, N), document.removeEventListener("touchstart", f, N)
            }
        }), []);
        var m = e.removeScrollBar,
          g = e.inert;
        return o.createElement(o.Fragment, null, g ? o.createElement(i, {
          styles: Y(c)
        }) : null, m ? o.createElement(S, {
          gapMode: e.gapMode
        }) : null)
      }));
      var j = o.forwardRef((function(e, n) {
        return o.createElement(f, (0, r.__assign)({}, e, {
          ref: n,
          sideCar: F
        }))
      }));
      j.classNames = f.classNames;
      const z = j
    }
  }
]);