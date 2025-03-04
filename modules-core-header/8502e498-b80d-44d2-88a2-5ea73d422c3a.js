! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "8502e498-b80d-44d2-88a2-5ea73d422c3a", e._sentryDebugIdIdentifier = "sentry-dbid-8502e498-b80d-44d2-88a2-5ea73d422c3a")
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
  [5875], {
    22102: (e, t, n) => {
      n.d(t, {
        m: () => r
      });
      var r = function() {
        return n.nc
      }
    },
    95875: (e, t, n) => {
      n.r(t), n.d(t, {
        RemoveScroll: () => I
      });
      var r = n(63461),
        o = n(62229),
        a = "right-scroll-bar-position",
        i = "width-before-scroll-bar";
      var c = (0, n(81402).f)(),
        u = function() {},
        l = o.forwardRef((function(e, t) {
          var n = o.useRef(null),
            a = o.useState({
              onScrollCapture: u,
              onWheelCapture: u,
              onTouchMoveCapture: u
            }),
            i = a[0],
            l = a[1],
            s = e.forwardProps,
            f = e.children,
            d = e.className,
            p = e.removeScrollBar,
            h = e.enabled,
            v = e.shards,
            y = e.sideCar,
            m = e.noIsolation,
            _ = e.inert,
            g = e.allowPinchZoom,
            b = e.as,
            w = void 0 === b ? "div" : b,
            E = e.gapMode,
            S = (0, r.__rest)(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as", "gapMode"]),
            P = y,
            O = function(e, t) {
              return n = t || null, r = function(t) {
                return e.forEach((function(e) {
                  return function(e, t) {
                    return "function" == typeof e ? e(t) : e && (e.current = t), e
                  }(e, t)
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
              }))[0]).callback = r, a.facade;
              var n, r, a
            }([n, t]),
            k = (0, r.__assign)((0, r.__assign)({}, S), i);
          return o.createElement(o.Fragment, null, h && o.createElement(P, {
            sideCar: c,
            removeScrollBar: p,
            shards: v,
            noIsolation: m,
            inert: _,
            setCallbacks: l,
            allowPinchZoom: !!g,
            lockRef: n,
            gapMode: E
          }), s ? o.cloneElement(o.Children.only(f), (0, r.__assign)((0, r.__assign)({}, k), {
            ref: O
          })) : o.createElement(w, (0, r.__assign)({}, k, {
            className: d,
            ref: O
          }), f))
        }));
      l.defaultProps = {
        enabled: !0,
        removeScrollBar: !0,
        inert: !1
      }, l.classNames = {
        fullWidth: i,
        zeroRight: a
      };
      var s = n(79898),
        f = n(26068),
        d = {
          left: 0,
          top: 0,
          right: 0,
          gap: 0
        },
        p = function(e) {
          return parseInt(e || "", 10) || 0
        },
        h = (0, f.T0)(),
        v = function(e, t, n, r) {
          var o = e.left,
            c = e.top,
            u = e.right,
            l = e.gap;
          return void 0 === n && (n = "margin"), "\n  .".concat("with-scroll-bars-hidden", " {\n   overflow: hidden ").concat(r, ";\n   padding-right: ").concat(l, "px ").concat(r, ";\n  }\n  body {\n    overflow: hidden ").concat(r, ";\n    overscroll-behavior: contain;\n    ").concat([t && "position: relative ".concat(r, ";"), "margin" === n && "\n    padding-left: ".concat(o, "px;\n    padding-top: ").concat(c, "px;\n    padding-right: ").concat(u, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(l, "px ").concat(r, ";\n    "), "padding" === n && "padding-right: ".concat(l, "px ").concat(r, ";")].filter(Boolean).join(""), "\n  }\n  \n  .").concat(a, " {\n    right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(i, " {\n    margin-right: ").concat(l, "px ").concat(r, ";\n  }\n  \n  .").concat(a, " .").concat(a, " {\n    right: 0 ").concat(r, ";\n  }\n  \n  .").concat(i, " .").concat(i, " {\n    margin-right: 0 ").concat(r, ";\n  }\n  \n  body {\n    ").concat("--removed-body-scroll-bar-size", ": ").concat(l, "px;\n  }\n")
        },
        y = function(e) {
          var t = e.noRelative,
            n = e.noImportant,
            r = e.gapMode,
            a = void 0 === r ? "margin" : r,
            i = o.useMemo((function() {
              return function(e) {
                if (void 0 === e && (e = "margin"), "undefined" == typeof window) return d;
                var t = function(e) {
                    var t = window.getComputedStyle(document.body),
                      n = t["padding" === e ? "paddingLeft" : "marginLeft"],
                      r = t["padding" === e ? "paddingTop" : "marginTop"],
                      o = t["padding" === e ? "paddingRight" : "marginRight"];
                    return [p(n), p(r), p(o)]
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
          return o.createElement(h, {
            styles: v(i, !t, a, n ? "" : "!important")
          })
        },
        m = !1;
      if ("undefined" != typeof window) try {
        var _ = Object.defineProperty({}, "passive", {
          get: function() {
            return m = !0, !0
          }
        });
        window.addEventListener("test", _, _), window.removeEventListener("test", _, _)
      } catch (e) {
        m = !1
      }
      var g = !!m && {
          passive: !1
        },
        b = function(e, t) {
          var n = window.getComputedStyle(e);
          return "hidden" !== n[t] && !(n.overflowY === n.overflowX && ! function(e) {
            return "TEXTAREA" === e.tagName
          }(e) && "visible" === n[t])
        },
        w = function(e, t) {
          var n = t.ownerDocument,
            r = t;
          do {
            if ("undefined" != typeof ShadowRoot && r instanceof ShadowRoot && (r = r.host), E(e, r)) {
              var o = S(e, r);
              if (o[1] > o[2]) return !0
            }
            r = r.parentNode
          } while (r && r !== n.body);
          return !1
        },
        E = function(e, t) {
          return "v" === e ? function(e) {
            return b(e, "overflowY")
          }(t) : function(e) {
            return b(e, "overflowX")
          }(t)
        },
        S = function(e, t) {
          return "v" === e ? [(n = t).scrollTop, n.scrollHeight, n.clientHeight] : function(e) {
            return [e.scrollLeft, e.scrollWidth, e.clientWidth]
          }(t);
          var n
        },
        P = function(e) {
          return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]
        },
        O = function(e) {
          return [e.deltaX, e.deltaY]
        },
        k = function(e) {
          return e && "current" in e ? e.current : e
        },
        j = function(e) {
          return "\n  .block-interactivity-".concat(e, " {pointer-events: none;}\n  .allow-interactivity-").concat(e, " {pointer-events: all;}\n")
        },
        T = 0,
        C = [];

      function x(e) {
        for (var t = null; null !== e;) e instanceof ShadowRoot && (t = e.host, e = e.host), e = e.parentNode;
        return t
      }
      const R = (0, s.m)(c, (function(e) {
        var t = o.useRef([]),
          n = o.useRef([0, 0]),
          a = o.useRef(),
          i = o.useState(T++)[0],
          c = o.useState(f.T0)[0],
          u = o.useRef(e);
        o.useEffect((function() {
          u.current = e
        }), [e]), o.useEffect((function() {
          if (e.inert) {
            document.body.classList.add("block-interactivity-".concat(i));
            var t = (0, r.__spreadArray)([e.lockRef.current], (e.shards || []).map(k), !0).filter(Boolean);
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
            if ("touches" in e && 2 === e.touches.length) return !u.current.allowPinchZoom;
            var r, o = P(e),
              i = n.current,
              c = "deltaX" in e ? e.deltaX : i[0] - o[0],
              l = "deltaY" in e ? e.deltaY : i[1] - o[1],
              s = e.target,
              f = Math.abs(c) > Math.abs(l) ? "h" : "v";
            if ("touches" in e && "h" === f && "range" === s.type) return !1;
            var d = w(f, s);
            if (!d) return !0;
            if (d ? r = f : (r = "v" === f ? "h" : "v", d = w(f, s)), !d) return !1;
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
                var p = S(e, c),
                  h = p[0],
                  v = p[1] - p[2] - a * h;
                (h || v) && E(e, c) && (f += v, d += h), c = c instanceof ShadowRoot ? c.host : c.parentNode
              } while (!u && c !== document.body || u && (t.contains(c) || t === c));
              return (s && (Math.abs(f) < 1 || !1) || !s && (Math.abs(d) < 1 || !1)) && (l = !0), l
            }(p, t, e, "h" === p ? c : l)
          }), []),
          s = o.useCallback((function(e) {
            var n = e;
            if (C.length && C[C.length - 1] === c) {
              var r = "deltaY" in n ? O(n) : P(n),
                o = t.current.filter((function(e) {
                  return e.name === n.type && (e.target === n.target || n.target === e.shadowParent) && (t = e.delta, o = r, t[0] === o[0] && t[1] === o[1]);
                  var t, o
                }))[0];
              if (o && o.should) n.cancelable && n.preventDefault();
              else if (!o) {
                var a = (u.current.shards || []).map(k).filter(Boolean).filter((function(e) {
                  return e.contains(n.target)
                }));
                (a.length > 0 ? l(n, a[0]) : !u.current.noIsolation) && n.cancelable && n.preventDefault()
              }
            }
          }), []),
          d = o.useCallback((function(e, n, r, o) {
            var a = {
              name: e,
              delta: n,
              target: r,
              should: o,
              shadowParent: x(r)
            };
            t.current.push(a), setTimeout((function() {
              t.current = t.current.filter((function(e) {
                return e !== a
              }))
            }), 1)
          }), []),
          p = o.useCallback((function(e) {
            n.current = P(e), a.current = void 0
          }), []),
          h = o.useCallback((function(t) {
            d(t.type, O(t), t.target, l(t, e.lockRef.current))
          }), []),
          v = o.useCallback((function(t) {
            d(t.type, P(t), t.target, l(t, e.lockRef.current))
          }), []);
        o.useEffect((function() {
          return C.push(c), e.setCallbacks({
              onScrollCapture: h,
              onWheelCapture: h,
              onTouchMoveCapture: v
            }), document.addEventListener("wheel", s, g), document.addEventListener("touchmove", s, g), document.addEventListener("touchstart", p, g),
            function() {
              C = C.filter((function(e) {
                return e !== c
              })), document.removeEventListener("wheel", s, g), document.removeEventListener("touchmove", s, g), document.removeEventListener("touchstart", p, g)
            }
        }), []);
        var m = e.removeScrollBar,
          _ = e.inert;
        return o.createElement(o.Fragment, null, _ ? o.createElement(c, {
          styles: j(i)
        }) : null, m ? o.createElement(y, {
          gapMode: e.gapMode
        }) : null)
      }));
      var M = o.forwardRef((function(e, t) {
        return o.createElement(l, (0, r.__assign)({}, e, {
          ref: t,
          sideCar: R
        }))
      }));
      M.classNames = l.classNames;
      const I = M
    },
    26068: (e, t, n) => {
      n.d(t, {
        T0: () => a
      });
      var r = n(62229),
        o = n(22102),
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
    79898: (e, t, n) => {
      n.d(t, {
        m: () => i
      });
      var r = n(63461),
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
    81402: (e, t, n) => {
      n.d(t, {
        f: () => a
      });
      var r = n(63461);

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
    63461: (e, t, n) => {
      n.r(t), n.d(t, {
        __addDisposableResource: () => D,
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
        __decorate: () => c,
        __disposeResources: () => L,
        __esDecorate: () => l,
        __exportStar: () => m,
        __extends: () => o,
        __generator: () => v,
        __importDefault: () => x,
        __importStar: () => C,
        __makeTemplateObject: () => j,
        __metadata: () => p,
        __param: () => u,
        __propKey: () => f,
        __read: () => g,
        __rest: () => i,
        __runInitializers: () => s,
        __setFunctionName: () => d,
        __spread: () => b,
        __spreadArray: () => E,
        __spreadArrays: () => w,
        __values: () => _,
        default: () => A
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

      function g(e, t) {
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

      function b() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
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

      function C(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && y(t, e, n);
        return T(t, e), t
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

      function D(e, t, n) {
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
      var N = "function" == typeof SuppressedError ? SuppressedError : function(e, t, n) {
        var r = new Error(n);
        return r.name = "SuppressedError", r.error = e, r.suppressed = t, r
      };

      function L(e) {
        function t(t) {
          e.error = e.hasError ? new N(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
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
      const A = {
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
        __read: g,
        __spread: b,
        __spreadArrays: w,
        __spreadArray: E,
        __await: S,
        __asyncGenerator: P,
        __asyncDelegator: O,
        __asyncValues: k,
        __makeTemplateObject: j,
        __importStar: C,
        __importDefault: x,
        __classPrivateFieldGet: R,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: I,
        __addDisposableResource: D,
        __disposeResources: L
      }
    }
  }
]);