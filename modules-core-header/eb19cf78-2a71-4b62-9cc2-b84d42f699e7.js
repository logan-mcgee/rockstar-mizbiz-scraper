! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eb19cf78-2a71-4b62-9cc2-b84d42f699e7", e._sentryDebugIdIdentifier = "sentry-dbid-eb19cf78-2a71-4b62-9cc2-b84d42f699e7")
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
  [7512], {
    47512: (e, t, n) => {
      n.r(t), n.d(t, {
        RemoveScroll: () => M
      });
      var r = n(91299),
        o = n(62229),
        a = n(85191);

      function i(e, t) {
        return "function" == typeof e ? e(t) : e && (e.current = t), e
      }
      var c = "undefined" != typeof window ? o.useLayoutEffect : o.useEffect,
        u = new WeakMap;
      var l = (0, n(2788).f)(),
        s = function() {},
        f = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: s,
              onWheelCapture: s,
              onTouchMoveCapture: s
            }),
            f = a[0],
            d = a[1],
            p = e.forwardProps,
            h = e.children,
            v = e.className,
            y = e.removeScrollBar,
            m = e.enabled,
            _ = e.shards,
            b = e.sideCar,
            g = e.noIsolation,
            w = e.inert,
            E = e.allowPinchZoom,
            S = e.as,
            P = void 0 === S ? "div" : S,
            O = e.gapMode,
            k = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            j = b,
            T = function(e, t) {
              var n, r, a, l = (n = t || null, r = function(t) {
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
              return c((function() {
                var t = u.get(l);
                if (t) {
                  var n = new Set(t),
                    r = new Set(e),
                    o = l.current;
                  n.forEach((function(e) {
                    r.has(e) || i(e, null)
                  })), r.forEach((function(e) {
                    n.has(e) || i(e, o)
                  }))
                }
                u.set(l, e)
              }), [e]), l
            }([n, t]),
            x = (0, r.__assign)((0, r.__assign)({}, k), f);
          return o.createElement(o.Fragment, null, m && o.createElement(j, {
            sideCar: l,
            removeScrollBar: y,
            shards: _,
            noIsolation: g,
            inert: w,
            setCallbacks: d,
            allowPinchZoom: !!E,
            lockRef: n,
            gapMode: O
          }), p ? o.cloneElement(o.Children.only(h), (0, r.__assign)((0, r.__assign)({}, x), {
            ref: T
          })) : o.createElement(P, (0, r.__assign)({}, x, {
            className: v,
            ref: T
          }), h))
        }));
      f.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, f.classNames = {
        fullWidth: a.pN,
        zeroRight: a.Mi
      };
      var d = n(91116),
        p = n(14028),
        h = n(33758),
        v = !1;
      if ("undefined" != typeof window) try {
        var y = Object.defineProperty({}, "passive", {
          get: function() {
            return v = !0, !0
          }
        });
        window.addEventListener("test", y, y), window.removeEventListener("test", y, y)
      } catch (e) {
        v = !1
      }
      var m = !!v && {
          passive: !1
        },
        _ = function(e, t) {
          if (!(e instanceof Element)) return !1;
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        b = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), g(e, r)) {
              var o = w(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        g = function(e, t) {
          return "v" === e ? function(e) {
            return _(e, "overflowY")
          }(t) : function(e) {
            return _(e, "overflowX")
          }(t)
        },
        w = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        E = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        S = function(e) {
          return [e.deltaX, e.deltaY]
        },
        P = function(e) {
          return e && "current" in e ? e.current : e
        },
        O = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        k = 0,
        j = [];

      function T(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const x = (0, d.m)(l, (function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(k++)[0],
          c = o.useState(h.T0)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(P), !0).filter(Boolean);
            return t.forEach((function(e) {
                return e.classList.add("allow-interactivity-".concat(i))
              })),
              function() {
                document.body.classList.remove("block-interactivity-".concat(i)), t.forEach((function(e) {
                  return e.classList.remove("allow-interactivity-".concat(i))
                }))
              }
          }
        }), [e.inert, e.lockRef.current, e.shards]);
        var l = o.useCallback((function(e, t) {
            if ("touches" in e && 2 === e.touches.length || "wheel" === e.type && e.ctrlKey) return !u.current.allowPinchZoom;
            var r, o = E(e),
              i = n.current,
              c = "deltaX" in e ? e.deltaX : i[0] - o[0],
              l = "deltaY" in e ? e.deltaY : i[1] - o[1],
              s = e.target,
              f = Math.abs(c) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === f && "range" === s.type) return !1;
            var d = b(f, s);
            if (!d) return !0;
            if (d ? r = f : (r = "v" === f ? "h" : "v", d = b(f, s)), !d) return !1;
            if (!a.current && "changedTouches" in e && (c || l) && (a.current = r), !r) return !0;
            var p = a.current || r;
            return function(e, t, n, r, o) {
              var a = function(e, t) {
                  return "h" === e && "rtl" === t ? -1 : 1
                }(e, window.getComputedStyle(t).direction),
                i = a * r,
                c = n.target,
                u = t.contains(c),
                l = !1,
                s = i > 0,
                f = 0,
                d = 0;
              do {
                var p = w(e, c),
                  h = p[0],
                  v = p[1] - p[2] - a * h;
                (h || v) && g(e, c) && (f += v, d += h), c = c instanceof ShadowRoot ? c.host : c.parentNode
              } while (!u && c !== document.body || u && (t.contains(c) || t === c));
              return (s && (Math.abs(f) < 1 || !1) || !s && (Math.abs(d) < 1 || !1)) && (l = !0), l
            }(p, t, e, "h" === p ? c : l)
          }), []),
          s = o.useCallback((function(e) {
            var n = e;
            if (j.length && j[j.length - 1] === c) {
              var r = "deltaY" in n ? S(n) : E(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(P).filter(Boolean).filter((function(e) {
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
              shadowParent: T(r)
            };
            t.current.push(a), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          d = o.useCallback((function(e) {
            n.current = E(e), a.current = void 0
          }), []),
          v = o.useCallback((function(t) {
            f(t.type, S(t), t.target, l(t, e.lockRef.current))
          }), []),
          y = o.useCallback((function(t) {
            f(t.type, E(t), t.target, l(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return j.push(c), e.setCallbacks({
              onScrollCapture: v,
              onWheelCapture: v,
              onTouchMoveCapture: y
            }), document.addEventListener("wheel", s, m), document.addEventListener("touchmove", s, m), document.addEventListener("touchstart", d, m),
            function() {
              j = j.filter((function(e) {
                return e !== c
              })), document.removeEventListener("wheel", s, m), document.removeEventListener("touchmove", s, m), document.removeEventListener("touchstart", d, m)
            }
        }), []);
        var _ = e.removeScrollBar,
          x = e.inert;
        return o.createElement(o.Fragment, null, x ? o.createElement(c, {
          styles: O(i)
        }) : null, _ ? o.createElement(p.jp, {
          gapMode: e.gapMode
        }) : null)
      }));
      var C = o.forwardRef((function(e, t) {
        return o.createElement(f, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: x
        }))
      }));
      C.classNames = f.classNames;
      const M = C
    },
    89412: (e, t, n) => {
      n.d(t, {
        m: () => r
      });
      var r = function() {
        return n.nc
      }
    },
    85191: (e, t, n) => {
      n.d(t, {
        E9: () => a,
        Mi: () => r,
        pN: () => o,
        xi: () => i
      });
      var r = "right-scroll-bar-position",
        o = "width-before-scroll-bar",
        a = "with-scroll-bars-hidden",
        i = "--removed-body-scroll-bar-size"
    },
    14028: (e, t, n) => {
      n.d(t, {
        jp: () => y
      });
      var r, o, a, i, c = n(62229),
        u = n(89412),
        l = n(85191),
        s = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        f = function(e) {
          return parseInt(e || "", 10) || 0
        },
        d = (a = 0, i = null, r = {
          add: function(e) {
            var t, n;
            0 == a && (i = function() {
              if (!document) return null;
              var e = document.createElement("style");
              e.type = "text/css";
              var t = (0, u.m)();
              return t && e.setAttribute("nonce", t), e
            }()) && (n = e, (t = i).styleSheet ? t.styleSheet.cssText = n : t.appendChild(document.createTextNode(n)), function(e) {
              (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
            }(i)), a++
          },
          remove: function() {
            !--a && i && (i.parentNode && i.parentNode.removeChild(i), i = null)
          }
        }, o = function(e, t) {
          c.useEffect((function() {
            return r.add(e),
              function() {
                r.remove()
              }
          }), [e && t])
        }, function(e) {
          var t = e.styles,
            n = e.dynamic;
          return o(t, n), null
        }),
        p = "data-scroll-locked",
        h = function(e, t, n, r) {
          var o = e.left,
            a = e.top,
            i = e.right,
            c = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat(l.E9, " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(c, "px ").concat(r, ";\n  }\n  body[").concat(p, "] {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(a, "px;\n    padding-right: ").concat(i, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(c, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(c, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(l.Mi, " {\n    right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(l.pN, " {\n    margin-right: ").concat(c, "px ").concat(r, ";\n  }\n  \n  .").concat(l.Mi, " .").concat(l.Mi, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(l.pN, " .").concat(l.pN, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body[").concat(p, "] {\n    ").concat(l.xi, ": ").concat(c, "px;\n  }\n")
        },
        v = function() {
          var e = parseInt(document.body.getAttribute(p) || "0", 10);
          return isFinite(e) ? e : 0
        },
        y = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            o = void 0 === r ? "margin" : r;
          c.useEffect((function() {
            return document.body.setAttribute(p, (v() + 1).toString()),
              function() {
                var e = v() - 1;
                e <= 0 ? document.body.removeAttribute(p) : document.body.setAttribute(p, e.toString())
              }
          }), []);
          var a = c.useMemo((function() {
            return function(e) {
              if (void 0 === e && (e = "margin"), "undefined" == typeof window) return s;
              var t = function(e) {
                  var t = window.getComputedStyle(document.body),
                    n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                    r = t["padding" === e ? "paddingTop" : "marginTop"],
                    o = t["padding" === e ? "paddingRight" : "marginRight"];
                  return [f(n), f(r), f(o)]
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
          return c.createElement(d, {
            styles: h(a, !t, o, n ? "" : "!important")
          })
        }
    },
    33758: (e, t, n) => {
      n.d(t, {
        T0: () => a
      });
      var r = n(62229),
        o = n(89412),
        a = function() {
          var e, t, n, a = (t = 0, n = null, e = {
            add: function(e) {
              var r, a;
              0 == t && (n = function() {
                if (!document) return null;
                var e = document.createElement("style");
                e.type = "text/css";
                var t = (0, o.m)();
                return t && e.setAttribute("nonce", t), e
              }()) && (a = e, (r = n).styleSheet ? r.styleSheet.cssText = a : r.appendChild(document.createTextNode(a)), function(e) {
                (document.head || document.getElementsByTagName("head")[0]).appendChild(e)
              }(n)), t++
            },
            remove: function() {
              !--t && n && (n.parentNode && n.parentNode.removeChild(n), n = null)
            }
          }, function(t, n) {
            r.useEffect((function() {
              return e.add(t),
                function() {
                  e.remove()
                }
            }), [t && n])
          });
          return function(e) {
            var t = e.styles,
              n = e.dynamic;
            return a(t, n), null
          }
        }
    },
    91116: (e, t, n) => {
      n.d(t, {
        m: () => i
      });
      var r = n(91299),
        o = n(62229),
        a = function(e) {
          var t = e.sideCar,
            n = (0, r.__rest)(e, ["sideCar"]);
          if (!t) throw new Error("Sidecar: please provide `sideCar` property to import the right car");
          var a = t.read();
          if (!a) throw new Error("Sidecar medium not found");
          return o.createElement(a, (0, r.__assign)({}, n))
        };

      function i(e, t) {
        return e.useMedium(t), a
      }
      a.isSideCarExport = !0
    },
    2788: (e, t, n) => {
      n.d(t, {
        f: () => a
      });
      var r = n(91299);

      function o(e) {
        return e
      }

      function a(e) {
        void 0 === e && (e = {});
        var t = function(e, t) {
          void 0 === t && (t = o);
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
                i = function() {
                  return Promise.resolve().then(a)
                };
              i(), n = {
                push: function(e) {
                  t.push(e), i()
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
      }
    },
    91299: (e, t, n) => {
      n.r(t), n.d(t, {
        __addDisposableResource: () => I,
        __assign: () => a,
        __asyncDelegator: () => O,
        __asyncGenerator: () => P,
        __asyncValues: () => k,
        __await: () => S,
        __awaiter: () => h,
        __classPrivateFieldGet: () => M,
        __classPrivateFieldIn: () => N,
        __classPrivateFieldSet: () => R,
        __createBinding: () => y,
        __decorate: () => c,
        __disposeResources: () => A,
        __esDecorate: () => l,
        __exportStar: () => m,
        __extends: () => o,
        __generator: () => v,
        __importDefault: () => C,
        __importStar: () => x,
        __makeTemplateObject: () => j,
        __metadata: () => p,
        __param: () => u,
        __propKey: () => f,
        __read: () => b,
        __rest: () => i,
        __runInitializers: () => s,
        __setFunctionName: () => d,
        __spread: () => g,
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

      function i(e, t) {
        var n = {};
        for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (r = Object.getOwnPropertySymbols(e); o < r.length; o++) t.indexOf(r[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[o]) && (n[r[o]] = e[r[o]])
        }
        return n
      }

      function c(e, t, n, r) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, n) : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, n, r);
        else
          for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, n, i) : o(t, n)) || i);
        return a > 3 && i && Object.defineProperty(t, n, i), i
      }

      function u(e, t) {
        return function(n, r) {
          t(n, r, e)
        }
      }

      function l(e, t, n, r, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, u = r.kind, l = "getter" === u ? "get" : "setter" === u ? "set" : "value", s = !t && e ? r.static ? e : e.prototype : null, f = t || (s ? Object.getOwnPropertyDescriptor(s, r.name) : {}), d = !1, p = n.length - 1; p >= 0; p--) {
          var h = {};
          for (var v in r) h[v] = "access" === v ? {} : r[v];
          for (var v in r.access) h.access[v] = r.access[v];
          h.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var y = (0, n[p])("accessor" === u ? {
            get: f.get,
            set: f.set
          } : f[l], h);
          if ("accessor" === u) {
            if (void 0 === y) continue;
            if (null === y || "object" != typeof y) throw new TypeError("Object expected");
            (c = i(y.get)) && (f.get = c), (c = i(y.set)) && (f.set = c), (c = i(y.init)) && o.unshift(c)
          } else(c = i(y)) && ("field" === u ? o.unshift(c) : f[l] = c)
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
          function i(e) {
            try {
              u(r.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
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
            }))).then(i, c)
          }
          u((r = r.apply(e, t || [])).next())
        }))
      }

      function v(e, t) {
        var n, r, o, a, i = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return a = {
          next: c(0),
          throw: c(1),
          return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function c(c) {
          return function(u) {
            return function(c) {
              if (n) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, c[0] && (i = 0)), i;) try {
                if (n = 1, r && (o = 2 & c[0] ? r.return : c[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, c[1])).done) return o;
                switch (r = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return i.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    i.label++, r = c[1], c = [0];
                    continue;
                  case 7:
                    c = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      i.label = c[1];
                      break
                    }
                    if (6 === c[0] && i.label < o[1]) {
                      i.label = o[1], o = c;
                      break
                    }
                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(c);
                      break
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                c = t.call(e, i)
              } catch (e) {
                c = [6, e], r = 0
              } finally {
                n = o = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, u])
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

      function b(e, t) {
        var n = "function" == typeof Symbol && e[Symbol.iterator];
        if (!n) return e;
        var r, o, a = n.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(r = a.next()).done;) i.push(r.value)
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
        return i
      }

      function g() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(b(arguments[t]));
        return e
      }

      function w() {
        for (var e = 0, t = 0, n = arguments.length; t < n; t++) e += arguments[t].length;
        var r = Array(e),
          o = 0;
        for (t = 0; t < n; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) r[o] = a[i];
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
        return r = {}, i("next"), i("throw"), i("return"), r[Symbol.asyncIterator] = function() {
          return this
        }, r;

        function i(e) {
          o[e] && (r[e] = function(t) {
            return new Promise((function(n, r) {
              a.push([e, t, n, r]) > 1 || c(e, t)
            }))
          })
        }

        function c(e, t) {
          try {
            (n = o[e](t)).value instanceof S ? Promise.resolve(n.value.v).then(u, l) : s(a[0][2], n)
          } catch (e) {
            s(a[0][3], e)
          }
          var n
        }

        function u(e) {
          c("next", e)
        }

        function l(e) {
          c("throw", e)
        }

        function s(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
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
      var T = Object.create ? function(e, t) {
        Object.defineProperty(e, "default", {
          enumerable: !0,
          value: t
        })
      } : function(e, t) {
        e.default = t
      };

      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && y(t, e, n);
        return T(t, e), t
      }

      function C(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function M(e, t, n, r) {
        if ("a" === n && !r) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !r : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === n ? r : "a" === n ? r.call(e) : r ? r.value : t.get(e)
      }

      function R(e, t, n, r, o) {
        if ("m" === r) throw new TypeError("Private method is not writable");
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === r ? o.call(e, n) : o ? o.value = n : t.set(e, n), n
      }

      function N(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function I(e, t, n) {
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
        __rest: i,
        __decorate: c,
        __param: u,
        __metadata: p,
        __awaiter: h,
        __generator: v,
        __createBinding: y,
        __exportStar: m,
        __values: _,
        __read: b,
        __spread: g,
        __spreadArrays: w,
        __spreadArray: E,
        __await: S,
        __asyncGenerator: P,
        __asyncDelegator: O,
        __asyncValues: k,
        __makeTemplateObject: j,
        __importStar: x,
        __importDefault: C,
        __classPrivateFieldGet: M,
        __classPrivateFieldSet: R,
        __classPrivateFieldIn: N,
        __addDisposableResource: I,
        __disposeResources: A
      }
    }
  }
]);