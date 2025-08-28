try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "d200a83f-188d-49c8-98b9-7a2f72f1960f", e._sentryDebugIdIdentifier = "sentry-dbid-d200a83f-188d-49c8-98b9-7a2f72f1960f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-footer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [7634], {
    18628: (e, n, t) => {
      t.d(n, {
        Qg: () => i,
        bL: () => u,
        s6: () => c
      });
      var r = t(71127),
        o = t(51347),
        a = t(70954),
        i = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        c = r.forwardRef(((e, n) => (0, a.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...i,
            ...e.style
          }
        })));
      c.displayName = "VisuallyHidden";
      var u = c
    },
    51347: (e, n, t) => {
      t.d(n, {
        hO: () => u,
        sG: () => c
      });
      var r = t(71127),
        o = t(18429),
        a = t(83970),
        i = t(70954),
        c = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, a.TL)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, c = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(c, {
                ...a,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function u(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    69727: (e, n, t) => {
      t.d(n, {
        A: () => O
      });
      var r = t(91299),
        o = t(71127),
        a = "right-scroll-bar-position",
        i = "width-before-scroll-bar";

      function c(e, n) {
        return "function" == typeof e ? e(n) : e && (e.current = n), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        d = new WeakMap;

      function l(e) {
        return e
      }
      var s = function(e) {
          void 0 === e && (e = {});
          var n = function(e, n) {
            void 0 === n && (n = l);
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
                  i = function() {
                    return Promise.resolve().then(a)
                  };
                i(), t = {
                  push: function(e) {
                    n.push(e), i()
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
        f = function() {},
        h = o.forwardRef((function(e, n) {
          var t = o.useRef(null),
            a = o.useState({
              onScrollCapture: f,
              onWheelCapture: f,
              onTouchMoveCapture: f
            }),
            i = a[0],
            l = a[1],
            h = e.forwardProps,
            v = e.children,
            p = e.className,
            g = e.removeScrollBar,
            m = e.enabled,
            w = e.shards,
            b = e.sideCar,
            y = e.noIsolation,
            E = e.inert,
            _ = e.allowPinchZoom,
            S = e.as,
            k = void 0 === S ? "div" : S,
            C = e.gapMode,
            M = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            R = b,
            T = function(e, n) {
              var t, r, a, i = (t = n || null, r = function(n) {
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
              return u((function() {
                var n = d.get(i);
                if (n) {
                  var t = new Set(n),
                    r = new Set(e),
                    o = i.current;
                  t.forEach((function(e) {
                    r.has(e) || c(e, null)
                  })), r.forEach((function(e) {
                    t.has(e) || c(e, o)
                  }))
                }
                d.set(i, e)
              }), [e]), i
            }([t, n]),
            L = (0, r.__assign)((0, r.__assign)({}, M), i);
          return o.createElement(o.Fragment, null, m && o.createElement(R, {
            sideCar: s,
            removeScrollBar: g,
            shards: w,
            noIsolation: y,
            inert: E,
            setCallbacks: l,
            allowPinchZoom: !!_,
            lockRef: t,
            gapMode: C
          }), h ? o.cloneElement(o.Children.only(v), (0, r.__assign)((0, r.__assign)({}, L), {
            ref: T
          })) : o.createElement(k, (0, r.__assign)({}, L, {
            className: p,
            ref: T
          }), v))
        }));
      h.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, h.classNames = {
        fullWidth: i,
        zeroRight: a
      };
      var v = function(e) {
        var n = e.sideCar,
          t = (0, r.__rest)(e, ["sideCar"]);
        if (!n) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = n.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, t))
      };
      v.isSideCarExport = !0;
      var p = function() {
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
        g = function() {
          var e, n = (e = p(), function(n, t) {
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
        m = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        w = function(e) {
          return parseInt(e || "", 10) || 0
        },
        b = g(),
        y = "data-scroll-locked",
        E = function(e, n, t, r) {
          var o = e.left,
            c = e.top,
            u = e.right,
            d = e.gap;
          return void 0 === t && (t = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(d, "px ").concat(r, ";\n  }\n  body[").concat(y, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([n && "position: relative ".concat(r, ";"), "margin" === t && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(d, "px ").concat(r, ";\n    "), "padding" === t && "padding-right: ".concat(d, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " {\n    margin-right: ").concat(d, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(y, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(d, "px;\n  }\n")
        },
        _ = function() {
          var e = parseInt(document.body.getAttribute(y) || "0", 10);
          return isFinite(e) ? e : 0
        },
        S = function(e) {
          var n = e.noRelative,
            t = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(y, (_() + 1).toString()),
              function() {
                var e = _() - 1;
                e <= 0 ? document.body.removeAttribute(y) : document.body.setAttribute(y, e.toString())
              }
          }), []);
          var i = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return m;
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
          return o.createElement(b, {
            styles: E(i, !n, a, t ? "" : "!important")
          })
        },
        k = !1;
      if ("undefined" != typeof window) try {
        var C = Object.defineProperty({}, "passive", {
          get: function() {
            return k = !0, !0
          }
        });
        window.addEventListener("test", C, C), window.removeEventListener("test", C, C)
      } catch (e) {
        k = !1
      }
      var M = !!k && {
          passive: !1
        },
        R = function(e, n) {
          if (!(e instanceof Element)) return !1;
          var t = window.getComputedStyle(e);
          return "hidden" !== t[n] && !(t.overflowY === t.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === t[n])
        },
        T = function(e, n) {
          var t = n.ownerDocument,
            r = n;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), L(e, r)) {
              var o = N(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== t.body);
          return !1
        },
        L = function(e, n) {
          return "v" === e ? function(e) {
            return R(e, "overflowY")
          }(n) : function(e) {
            return R(e, "overflowX")
          }(n)
        },
        N = function(e, n) {
          return "v" === e ? [(t = n).scrollTop, t.scrollHeight, t.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(n);
          var t
        },
        x = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        P = function(e) {
          return [e.deltaX, e.deltaY]
        },
        I = function(e) {
          return e && "current" in e ? e.current : e
        },
        A = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        B = 0,
        W = [];

      function Y(e) {
        for (var n = null; null !== e;) e instanceof ShadowRoot && (n = e.host, e = e.host), e = e.parentNode;
        return n
      }
      const D = (X = function(e) {
        var n = o.useRef([]),
          t = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(B++)[0],
          c = o.useState(g)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var n = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(I), !0).filter(Boolean);
            return n.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(i))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(i)), n.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(i))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var d = o.useCallback((function(e, n) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = x(e),
              i = t.current,
              c = "deltaX" in e ? e.deltaX : i[0] - o[0],
              d = "deltaY" in e ? e.deltaY : i[1] - o[1],
              l = e.target,
              s = Math.abs(c) > Math.abs(d) ? "h" : "v";
            if ("touches" in e && "h" === s && "range" === l.type) return !1;
            var f = T(s, l);
            if (!f) return !0;
            if (f ? r = s : (r = "v" === s ? "h" : "v", f = T(s, l)), !f) return !1;
            if (!a.current && "changedTouches" in e && (c || d) && (a.current = r), !r) return !0;
            var h = a.current || r;
            return function(e, n, t, r) {
              var o = function(e, n) {
                  return "h" === e && "rtl" === n ? -1 : 1
                }(e, window.getComputedStyle(n).direction),
                a = o * r,
                i = t.target,
                c = n.contains(i),
                u = !1,
                d = a > 0,
                l = 0,
                s = 0;
              do {
                var f = N(e, i),
                  h = f[0],
                  v = f[1] - f[2] - o * h;
                (h || v) && L(e, i) && (l += v, s += h), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!c && i !== document.body || c && (n.contains(i) || n === i));
              return (d && (Math.abs(l) < 1 || !1) || !d && (Math.abs(s) < 1 || !1)) && (u = !0), u
            }(h, n, e, "h" === h ? c : d)
          }), []),
          l = o.useCallback((function(e) {
            var t = e;
            if (W.length && W[W.length - 1] === c) {
              var r = "deltaY" in t ? P(t) : x(t),
                o = n.current.filter((function(e) {
                  return e.name === t.type && (e.target === t.target || t.target === e.shadowParent) && (n = e.delta, o = r, n[0] === o[0] && n[1] === o[1]);
                  var n, o
                }))[0];
              if (o && o.should) t.cancelable && t.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(I).filter(Boolean).filter((function(e) {
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
              shadowParent: Y(r)
            };
            n.current.push(a), setTimeout((function() {
              n.current = n.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          f = o.useCallback((function(e) {
            t.current = x(e), a.current = void 0
          }), []),
          h = o.useCallback((function(n) {
            s(n.type, P(n), n.target, d(n, e.lockRef.current))
          }), []),
          v = o.useCallback((function(n) {
            s(n.type, x(n), n.target, d(n, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return W.push(c), e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", l, M), document.addEventListener("touchmove", l, M), document.addEventListener("touchstart", f, M),
            function() {
              W = W.filter((function(e) {
                return e !== c
              })), document.removeEventListener("wheel", l, M), document.removeEventListener("touchmove", l, M), document.removeEventListener("touchstart", f, M)
            }
        }), []);
        var p = e.removeScrollBar,
          m = e.inert;
        return o.createElement(o.Fragment, null, m ? o.createElement(c, {
          styles: A(i)
        }) : null, p ? o.createElement(S, {
          gapMode: e.gapMode
        }) : null)
      }, s.useMedium(X), v);
      var X, j = o.forwardRef((function(e, n) {
        return o.createElement(h, (0, r.__assign)({}, e, {
          ref: n,
          sideCar: D
        }))
      }));
      j.classNames = h.classNames;
      const O = j
    }
  }
]);