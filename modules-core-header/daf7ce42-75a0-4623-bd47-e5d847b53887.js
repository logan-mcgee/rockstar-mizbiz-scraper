! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "daf7ce42-75a0-4623-bd47-e5d847b53887", e._sentryDebugIdIdentifier = "sentry-dbid-daf7ce42-75a0-4623-bd47-e5d847b53887")
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
  [7847, 3461, 228], {
    30228: (e, t, n) => {
      n.r(t), n.d(t, {
        RemoveScroll: () => Z
      });
      var r = n(63461),
        o = n(62229),
        a = "right-scroll-bar-position",
        c = "width-before-scroll-bar";

      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var u = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        l = new WeakMap;

      function s(e) {
        return e
      }
      var f = function(e) {
          void 0 === e && (e = {});
          var t = function(e, t) {
            void 0 === t && (t = s);
            var n = [],
              r = !1;
            return {
              read: function() {
                if (r) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                return n.length ? n[n.length - 1] : e
              },
              useMedium: function(e) {
                var o = t(e, r);
                return n.push(o),
                  function() {
                    n = n.filter((function(e) {
                      return e !== o
                    }))
                  }
              },
              assignSyncMedium: function(e) {
                for (r = !0; n.length;) {
                  var t = n;
                  n = [], t.forEach(e)
                }
                n = {
                  push: function(t) {
                    return e(t)
                  },
                  filter: function() {
                    return n
                  }
                }
              },
              assignMedium: function(e) {
                r = !0;
                var t = [];
                if (n.length) {
                  var o = n;
                  n = [], o.forEach(e), t = n
                }
                var a = function() {
                    var n = t;
                    t = [], n.forEach(e)
                  },
                  c = function() {
                    return Promise.resolve().then(a)
                  };
                c(), n = {
                  push: function(e) {
                    t.push(e), c()
                  },
                  filter: function(e) {
                    return t = t.filter(e), n
                  }
                }
              }
            }
          }(null);
          return t.options = (0, r.__assign)({
            async: !0,
            ssr: !1
          }, e), t
        }(),
        d = function() {},
        p = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: d,
              onWheelCapture: d,
              onTouchMoveCapture: d
            }),
            c = a[0],
            s = a[1],
            p = e.forwardProps,
            h = e.children,
            v = e.className,
            y = e.removeScrollBar,
            m = e.enabled,
            _ = e.shards,
            g = e.sideCar,
            b = e.noIsolation,
            w = e.inert,
            E = e.allowPinchZoom,
            S = e.as,
            P = void 0 === S ? "div" : S,
            O = e.gapMode,
            k = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            j = g,
            C = function(e, t) {
              var n, r, a, c = (n = t || null, r = function(t) {
                return e.forEach((function(e) {
                  return i(e, t)
                }))
              }, (a = (0, o.useState)((function() {
                return {
                  value: n,
                  callback: r,
                  facade: {
                    get current() {
                      return a.value
                    },
                    set current(e) {
                      var t = a.value;
                      t !== e && (a.value = e, a.callback(e, t))
                    }
                  }
                }
              }))[0]).callback = r, a.facade);
              return u((function() {
                var t = l.get(c);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = c.current;
                  n.forEach((function(e) {
                    r.has(e) || i(e, null)
                  })), r.forEach((function(e) {
                    n.has(e) || i(e, o)
                  }))
                }
                l.set(c, e)
              }), [e]), c
            }([n, t]),
            T = (0, r.__assign)((0, r.__assign)({}, k), c);
          return o.createElement(o.Fragment, null, m && o.createElement(j, {
            sideCar: f,
            removeScrollBar: y,
            shards: _,
            noIsolation: b,
            inert: w,
            setCallbacks: s,
            allowPinchZoom: !!E,
            lockRef: n,
            gapMode: O
          }), p ? o.cloneElement(o.Children.only(h), (0, r.__assign)((0, r.__assign)({}, T), {
            ref: C
          })) : o.createElement(P, (0, r.__assign)({}, T, {
            className: v,
            ref: C
          }), h))
        }));
      p.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, p.classNames = {
        fullWidth: c,
        zeroRight: a
      };
      var h = function(e) {
        var t = e.sideCar,
          n = (0, r.__rest)(e, ["sideCar"]);
        if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
        var a = t.read();
        if (!a) throw new Error("Sidecar medium not found");
        return o.createElement(a, (0, r.__assign)({}, n))
      };
      h.isSideCarExport = !0;
      var v, y, m, _, g = function() {
          return n.nc
        },
        b = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        w = function(e) {
          return parseInt(e || "", 10) || 0
        },
        E = (m = 0, _ = null, v = {
          add: function(e) {
            var t, n;
            0 == m && (_ = function() {
              if (!document) return null;
              var e = document.createElement("style");
              e.type = "text/css";
              var t = g();
              return t && e.setAttribute("nonce", t), e
            }()) && (n = e, (t = _).styleSheet ? t.styleSheet.cssText = n : t.appendChild(document.createTextNode(n)), function(e) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(_)), m++
          },
          remove: function() {
            !--m && _ && (_.parentNode && _.parentNode.removeChild(_), _ = null)
          }
        }, y = function(e, t) {
          o.useEffect((function() {
            return v.add(e),
              function() {
                v.remove()
              }
          }), [e && t])
        }, function(e) {
          var t = e.styles,
            n = e.dynamic;
          return y(t, n), null
        }),
        S = "data-scroll-locked",
        P = function(e, t, n, r) {
          var o = e.left,
            i = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body[").concat(S, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(i, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(c, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(c, " .").concat(c, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(S, "] {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        O = function() {
          var e = parseInt(document.body.getAttribute(S) || "0", 10);
          return isFinite(e) ? e : 0
        },
        k = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r;
          o.useEffect((function() {
            return document.body.setAttribute(S, (O() + 1).toString()),
              function() {
                var e = O() - 1;
                e <= 0 ? document.body.removeAttribute(S) : document.body.setAttribute(S, e.toString())
              }
          }), []);
          var c = o.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return b;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [w(n), w(r), w(o)]
                }(e),
                n = document.documentElement.clientWidth,
                r = window.innerWidth;
              return {
                left: t[0],
                top: t[1],
                right: t[2],
                gap: Math.max(0, r - n + t[2] - t[0])
              }
            }(a)
          }), [a]);
          return o.createElement(E, {
            styles: P(c, !t, a, n ? "" : "!important")
          })
        },
        j = function() {
          var e = function() {
            var e = function() {
              var e = 0,
                t = null;
              return {
                add: function(n) {
                  var r, o;
                  0 == e && (t = function() {
                    if (!document) return null;
                    var e = document.createElement("style");
                    e.type = "text/css";
                    var t = g();
                    return t && e.setAttribute("nonce", t), e
                  }()) && (o = n, (r = t).styleSheet ? r.styleSheet.cssText = o : r.appendChild(document.createTextNode(o)), function(e) {
                    (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
                  }(t)), e++
                },
                remove: function() {
                  !--e && t && (t.parentNode && t.parentNode.removeChild(t), t = null)
                }
              }
            }();
            return function(t, n) {
              o.useEffect((function() {
                return e.add(t),
                  function() {
                    e.remove()
                  }
              }), [t && n])
            }
          }();
          return function(t) {
            var n = t.styles,
              r = t.dynamic;
            return e(n, r), null
          }
        },
        C = !1;
      if ("undefined" != typeof window) try {
        var T = Object.defineProperty({}, "passive", {
          get: function() {
            return C = !0, !0
          }
        });
        window.addEventListener("test", T, T), window.removeEventListener("test", T, T)
      } catch (e) {
        C = !1
      }
      var x = !!C && {
          passive: !1
        },
        R = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        M = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), I(e, r)) {
              var o = N(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        I = function(e, t) {
          return "v" === e ? function(e) {
            return R(e, "overflowY")
          }(t) : function(e) {
            return R(e, "overflowX")
          }(t)
        },
        N = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        D = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        A = function(e) {
          return [e.deltaX, e.deltaY]
        },
        L = function(e) {
          return e && "current" in e ? e.current : e
        },
        B = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        F = 0,
        W = [];

      function Y(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const X = (z = function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          c = o.useState(F++)[0],
          i = o.useState(j)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(c));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(L), !0).filter(Boolean);
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
        var l = o.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = D(e),
              c = n.current,
              i = "deltaX" in e ? e.deltaX : c[0] - o[0],
              l = "deltaY" in e ? e.deltaY : c[1] - o[1],
              s = e.target,
              f = Math.abs(i) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === f && "range" === s.type) return !1;
            var d = M(f, s);
            if (!d) return !0;
            if (d ? r = f : (r = "v" === f ? "h" : "v", d = M(f, s)), !d) return !1;
            if (!a.current && "changedTouches" in e && (i || l) && (a.current = r), !r) return !0;
            var p = a.current || r;
            return function(e, t, n, r, o) {
              var a = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                c = a * r,
                i = n.target,
                u = t.contains(i),
                l = !1,
                s = c > 0,
                f = 0,
                d = 0;
              do {
                var p = N(e, i),
                  h = p[0],
                  v = p[1] - p[2] - a * h;
                (h || v) && I(e, i) && (f += v, d += h), i = i instanceof ShadowRoot ? i.host : i.parentNode
              } while (!u && i !== document.body || u && (t.contains(i) || t === i));
              return (s && (Math.abs(f) < 1 || !1) || !s && (Math.abs(d) < 1 || !1)) && (l = !0), l
            }(p, t, e, "h" === p ? i : l)
          }), []),
          s = o.useCallback((function(e) {
            var n = e;
            if (W.length && W[W.length - 1] === i) {
              var r = "deltaY" in n ? A(n) : D(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(L).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (a.length > 0 ? l(n, a[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          f = o.useCallback((function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: Y(r)
            };
            t.current.push(a), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          d = o.useCallback((function(e) {
            n.current = D(e), a.current = void 0
          }), []),
          p = o.useCallback((function(t) {
            f(t.type, A(t), t.target, l(t, e.lockRef.current))
          }), []),
          h = o.useCallback((function(t) {
            f(t.type, D(t), t.target, l(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return W.push(i), e.setCallbacks({
              onScrollCapture: p,
              onWheelCapture: p,
              onTouchMoveCapture: h
            }), document.addEventListener("wheel", s, x), document.addEventListener("touchmove", s, x), document.addEventListener("touchstart", d, x),
            function() {
              W = W.filter((function(e) {
                return e !== i
              })), document.removeEventListener("wheel", s, x), document.removeEventListener("touchmove", s, x), document.removeEventListener("touchstart", d, x)
            }
        }), []);
        var v = e.removeScrollBar,
          y = e.inert;
        return o.createElement(o.Fragment, null, y ? o.createElement(i, {
          styles: B(c)
        }) : null, v ? o.createElement(k, {
          gapMode: e.gapMode
        }) : null)
      }, f.useMedium(z), h);
      var z, G = o.forwardRef((function(e, t) {
        return o.createElement(p, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: X
        }))
      }));
      G.classNames = p.classNames;
      const Z = G
    },
    63461: (e, t, n) => {
      n.r(t), n.d(t, {
        __addDisposableResource: () => N,
        __assign: () => a,
        __asyncDelegator: () => O,
        __asyncGenerator: () => P,
        __asyncValues: () => k,
        __await: () => S,
        __awaiter: () => h,
        __classPrivateFieldGet: () => R,
        __classPrivateFieldIn: () => I,
        __classPrivateFieldSet: () => M,
        __createBinding: () => y,
        __decorate: () => i,
        __disposeResources: () => A,
        __esDecorate: () => l,
        __exportStar: () => m,
        __extends: () => o,
        __generator: () => v,
        __importDefault: () => x,
        __importStar: () => T,
        __makeTemplateObject: () => j,
        __metadata: () => p,
        __param: () => u,
        __propKey: () => f,
        __read: () => g,
        __rest: () => c,
        __runInitializers: () => s,
        __setFunctionName: () => d,
        __spread: () => b,
        __spreadArray: () => E,
        __spreadArrays: () => w,
        __values: () => _,
        default: () => L
      });
      var r = function(e, t) {
        return r = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n])
        }, r(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function n() {
          this.constructor = e
        }
        r(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function c(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function i(e, t, n, r) {
        var o, a = arguments.length,
          c = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, r);
        else
          for (var i = e.length - 1; i >= 0; i--)(o = e[i]) && (c = (a < 3 ? o(c) : a > 3 ? o(t, n, c) : o(t, n)) || c);
        return a > 3 && c && Object.defineProperty(t, n, c), c
      }

      function u(e, t) {
        return function(n, r) {
          t(n, r, e)
        }
      }

      function l(e, t, n, r, o, a) {
        function c(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var i, u = r.kind, l = "getter" === u ? "get" : "setter" === u ? "set" : "value", s = !t && e ? r.static ? e : e.prototype : null, f = t || (s ? Object.getOwnPropertyDescriptor(s, r.name) : {}), d = !1, p = n.length - 1; p >= 0; p--) {
          var h = {};
          for (var v in r) h[v] = "access" === v ? {} : r[v];
          for (var v in r.access) h.access[v] = r.access[v];
          h.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(c(e || null))
          };
          var y = (0, n[p])("accessor" === u ? {
            get: f.get,
            set: f.set
          } : f[l], h);
          if ("accessor" === u) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y) throw new TypeError("Object expected");
            (i = c(y.get)) && (f.get = i), (i = c(y.set)) && (f.set = i), (i = c(y.init)) && o.unshift(i)
          } else(i = c(y)) && ("field" === u ? o.unshift(i) : f[l] = i)
        }
        s && Object.defineProperty(s, r.name, f), d = !0
      }

      function s(e, t, n) {
        for (var r = arguments.length > 2, o = 0; o < t.length; o++) n = r ? t[o].call(e, n) : t[o].call(e);
        return r ? n : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function d(e, t, n) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: n ? "".concat(n, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function h(e, t, n, r) {
        return new(n || (n = Promise))((function(o, a) {
          function c(e) {
            try {
              u(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
            try {
              u(r.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function u(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof n ? t : new n((function(e) {
              e(t)
            }))).then(c, i)
          }
          u((r = r.apply(e, t || [])).next())
        }))
      }

      function v(e, t) {
        var n, r, o, a, c = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return a = {
          next: i(0),
          throw: i(1),
          return: i(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function i(i) {
          return function(u) {
            return function(i) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, i[0] && (c = 0)), c;) try {
                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return c.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    c.label++, r = i[1], i = [0];
                    continue;
                  case 7:
                    i = c.ops.pop(), c.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = c.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      c = 0;
                      continue
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      c.label = i[1];
                      break
                    }
                    if (6 === i[0] && c.label < o[1]) {
                      c.label = o[1], o = i;
                      break
                    }
                    if (o && c.label < o[2]) {
                      c.label = o[2], c.ops.push(i);
                      break
                    }
                    o[2] && c.ops.pop(), c.trys.pop();
                    continue
                }
                i = t.call(e, c)
              } catch (e) {
                i = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, u])
          }
        }
      }
      var y = Object.create ? function(e, t, n, r) {
        void 0 === r && (r = n);
        var o = Object.getOwnPropertyDescriptor(t, n);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return t[n]
          }
        }), Object.defineProperty(e, r, o)
      } : function(e, t, n, r) {
        void 0 === r && (r = n), e[r] = t[n]
      };

      function m(e, t) {
        for (var n in e) "default" === n || Object.prototype.hasOwnProperty.call(t, n) || y(t, e, n)
      }

      function _(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          n = t && e[t],
          r = 0;
        if (n) return n.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && r >= e.length && (e = void 0), {
              value: e && e[r++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function g(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, a = n.call(e),
          c = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = a.next()).done;) c.push(r.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            r && !r.done && (n = a.return) && n.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return c
      }

      function b() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e
      }

      function w() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          o = 0;
        for (t = 0; t < n; t++)
          for (var a = arguments[t], c = 0, i = a.length; c < i; c++, o++) r[o] = a[c];
        return r
      }

      function E(e, t, n) {
        if (n || 2 === arguments.length)
          for (var r, o = 0, a = t.length; o < a; o++) !r && o in t || (r || (r = Array.prototype.slice.call(t, 0, o)), r[o] = t[o]);
        return e.concat(r || Array.prototype.slice.call(t))
      }

      function S(e) {
        return this instanceof S ? (this.v = e, this) : new S(e)
      }

      function P(e, t, n) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, o = n.apply(e, t || []),
          a = [];
        return r = {}, c("next"), c("throw"), c("return"), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function c(e) {
          o[e] && (r[e] = function(t) {
            return new Promise((function(n, r) {
              a.push([e, t, n, r]) > 1 || i(e, t)
            }))
          })
        }

        function i(e, t) {
          try {
            (n = o[e](t)).value instanceof S ? Promise.resolve(n.value.v).then(u, l) : s(a[0][2], n)
          } catch (e) {
            s(a[0][3], e)
          }
          var n
        }

        function u(e) {
          i("next", e)
        }

        function l(e) {
          i("throw", e)
        }

        function s(e, t) {
          e(t), a.shift(), a.length && i(a[0][0], a[0][1])
        }
      }

      function O(e) {
        var t, n;
        return t = {}, r("next"), r("throw", (function(e) {
          throw e
        })), r("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function r(r, o) {
          t[r] = e[r] ? function(t) {
            return (n = !n) ? {
              value: S(e[r](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function k(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, n = e[Symbol.asyncIterator];
        return n ? n.call(e) : (e = _(e), t = {}, r("next"), r("throw"), r("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function r(n) {
          t[n] = e[n] && function(t) {
            return new Promise((function(r, o) {
              ! function(e, t, n, r) {
                Promise.resolve(r).then((function(t) {
                  e({
                    value: t,
                    done: n
                  })
                }), t)
              }(r, o, (t = e[n](t)).done, t.value)
            }))
          }
        }
      }

      function j(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var C = Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
          enumerable: !0,
          value: t
        })
      } : function(e, t) {
        e.default = t
      };

      function T(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && y(t, e, n);
        return C(t, e), t
      }

      function x(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function R(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
      }

      function M(e, t, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
      }

      function I(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function N(e, t, n) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var r;
          if (n) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            r = t[Symbol.asyncDispose]
          }
          if (void 0 === r) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            r = t[Symbol.dispose]
          }
          if ("function" != typeof r) throw new TypeError("Object not disposable.");
          e.stack.push({
            value: t,
            dispose: r,
            async: n
          })
        } else n && e.stack.push({
          async: !0
        });
        return t
      }
      var D = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
      };

      function A(e) {
        function t(t) {
          e.error = e.hasError ? new D(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        return function n() {
          for (; e.stack.length;) {
            var r = e.stack.pop();
            try {
              var o = r.dispose && r.dispose.call(r.value);
              if (r.async) return Promise.resolve(o).then(n, (function(e) {
                return t(e), n()
              }))
            } catch (e) {
              t(e)
            }
          }
          if (e.hasError) throw e.error
        }()
      }
      const L = {
        __extends: o,
        __assign: a,
        __rest: c,
        __decorate: i,
        __param: u,
        __metadata: p,
        __awaiter: h,
        __generator: v,
        __createBinding: y,
        __exportStar: m,
        __values: _,
        __read: g,
        __spread: b,
        __spreadArrays: w,
        __spreadArray: E,
        __await: S,
        __asyncGenerator: P,
        __asyncDelegator: O,
        __asyncValues: k,
        __makeTemplateObject: j,
        __importStar: T,
        __importDefault: x,
        __classPrivateFieldGet: R,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: I,
        __addDisposableResource: N,
        __disposeResources: A
      }
    }
  }
]);