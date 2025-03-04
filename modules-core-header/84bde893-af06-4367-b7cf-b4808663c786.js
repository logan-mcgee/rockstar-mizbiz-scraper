! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      n = (new Error).stack;
    n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "84bde893-af06-4367-b7cf-b4808663c786", e._sentryDebugIdIdentifier = "sentry-dbid-84bde893-af06-4367-b7cf-b4808663c786")
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
  [6252], {
    22102: (e, n, t) => {
      t.d(n, {
        m: () => r
      });
      var r = function() {
        return t.nc
      }
    },
    76117: (e, n, t) => {
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
    20917: (e, n, t) => {
      t.d(n, {
        jp: () => p
      });
      var r, o, a, c, i = t(62229),
        u = t(22102),
        l = t(76117),
        d = {
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
          return void 0 === t && (t = "margin"), "\n  .".concat(l.E9, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(i, "px ").concat(r, ";\n  }\n  body[").concat(h, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(c, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(i, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(i, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(l.Mi, " {\n    right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(l.pN, " {\n    margin-right: ").concat(i, "px ").concat(r, ";\n  }\n  \n  .").concat(l.Mi, " .").concat(l.Mi, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(l.pN, " .").concat(l.pN, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(h, "] {\n    ").concat(l.xi, ": ").concat(i, "px;\n  }\n")
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
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return d;
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
        f: () => a
      });
      var r = t(63461);

      function o(e) {
        return e
      }

      function a(e) {
        void 0 === e && (e = {});
        var n = function(e, n) {
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
        }(null);
        return n.options = (0, r.__assign)({
          async: !0,
          ssr: !1
        }, e), n
      }
    },
    53871: (e, n, t) => {
      t.r(n), t.d(n, {
        RemoveScroll: () => L
      });
      var r = t(63461),
        o = t(62229),
        a = t(76117);

      function c(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var i = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        u = new WeakMap;
      var l = (0, t(81402).f)(),
        d = function() {},
        s = o.forwardRef((function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: d
            }),
            s = a[0],
            f = a[1],
            h = e.forwardProps,
            v = e.children,
            m = e.className,
            p = e.removeScrollBar,
            g = e.enabled,
            b = e.shards,
            y = e.sideCar,
            w = e.noIsolation,
            E = e.inert,
            _ = e.allowPinchZoom,
            C = e.as,
            S = void 0 === C ? "div" : C,
            k = e.gapMode,
            M = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            N = y,
            R = function(e, n) {
              var t, r, a, l = (t = n || null, r = function(n) {
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
                var n = u.get(l);
                if (n) {
                  var t = new Set(n),
                    r = new Set(e),
                    o = l.current;
                  t.forEach((function(e) {
                    r.has(e) || c(e, null)
                  })), r.forEach((function(e) {
                    t.has(e) || c(e, o)
                  }))
                }
                u.set(l, e)
              }), [e]), l
            }([t, n]),
            T = (0, r.__assign)((0, r.__assign)({}, M), s);
          return o.createElement(o.Fragment, null, g && o.createElement(N, {
            sideCar: l,
            removeScrollBar: p,
            shards: b,
            noIsolation: w,
            inert: E,
            setCallbacks: f,
            allowPinchZoom: !!_,
            lockRef: t,
            gapMode: k
          }), h ? o.cloneElement(o.Children.only(v), (0, r.__assign)((0, r.__assign)({}, T), {
            ref: R
          })) : o.createElement(S, (0, r.__assign)({}, T, {
            className: m,
            ref: R
          }), v))
        }));
      s.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, s.classNames = {
        fullWidth: a.pN,
        zeroRight: a.Mi
      };
      var f = t(79898),
        h = t(20917),
        v = t(26068),
        m = !1;
      if ("undefined" != typeof window) try {
        var p = Object.defineProperty({}, "passive", {
          get: function() {
            return m = !0, !0
          }
        });
        window.addEventListener("test", p, p), window.removeEventListener("test", p, p)
      } catch (e) {
        m = !1
      }
      var g = !!m && {
          passive: !1
        },
        b = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        y = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), w(e, r)) {
              var o = E(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        w = function(e, n) {
          return "v" === e ? function(e) {
            return b(e, "overflowY")
          }(n) : function(e) {
            return b(e, "overflowX")
          }(n)
        },
        E = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        _ = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        C = function(e) {
          return [e.deltaX, e.deltaY]
        },
        S = function(e) {
          return e && "current" in e ? e.current : e
        },
        k = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        M = 0,
        N = [];

      function R(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const T = (0, f.m)(l, (function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(M++)[0],
          i = o.useState(v.T0)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var n = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(S), !0).filter(Boolean);
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
            var r, o = _(e),
              c = t.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              d = e.target,
              s = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === d.type) return !1;
            var f = y(s, d);
            if (!f) return !0;
            if (f ? r = s : (r = "v" === s ? "h" : "v", f = y(s, d)), !f) return !1;
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
                var h = E(e, i),
                  v = h[0],
                  m = h[1] - h[2] - a * v;
                (v || m) && w(e, i) && (s += m, f += v), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (n.contains(i) || n === i));
              return (d && (Math.abs(s) < 1 || !1) || !d && (Math.abs(f) < 1 || !1)) && (l = !0), l
            }(h, n, e, "h" === h ? i : l)
          }), []),
          d = o.useCallback((function(e) {
            var t = e;
            if (N.length && N[N.length - 1] === i) {
              var r = "deltaY" in t ? C(t) : _(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(S).filter(Boolean).filter((function(e) {
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
              shadowParent: R(r)
            };
            n.current.push(a), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            t.current = _(e), a.current = void 0
          }), []),
          m = o.useCallback((function(n) {
            s(n.type, C(n), n.target, l(n, e.lockRef.current))
          }), []),
          p = o.useCallback((function(n) {
            s(n.type, _(n), n.target, l(n, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return N.push(i), e.setCallbacks({
              onScrollCapture: m,
              onWheelCapture: m,
              onTouchMoveCapture: p
            }), document.addEventListener("wheel", d, g), document.addEventListener("touchmove", d, g), document.addEventListener("touchstart", f, g),
            function() {
              N = N.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", d, g), document.removeEventListener("touchmove", d, g), document.removeEventListener("touchstart", f, g)
            }
        }), []);
        var b = e.removeScrollBar,
          T = e.inert;
        return o.createElement(o.Fragment, null, T ? o.createElement(i, {
          styles: k(c)
        }) : null, b ? o.createElement(h.jp, {
          gapMode: e.gapMode
        }) : null)
      }));
      var x = o.forwardRef((function(e, n) {
        return o.createElement(s, (0, r.__assign)({}, e, {
          ref: n,
          sideCar: T
        }))
      }));
      x.classNames = s.classNames;
      const L = x
    }
  }
]);