try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "ec7ea678-ead5-44a3-baea-79a8030164a4", t._sentryDebugIdIdentifier = "sentry-dbid-ec7ea678-ead5-44a3-baea-79a8030164a4")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-legacy",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_legacy = self.webpackChunk_rockstargames_sites_legacy || []).push([
  [9967], {
    88922(t, e, i) {
      "use strict";

      function r(t) {
        var e = Object.create(null);
        return function(i) {
          return void 0 === e[i] && (e[i] = t(i)), e[i]
        }
      }
      i.d(e, {
        A: () => r
      })
    },
    35255(t, e, i) {
      "use strict";
      var r = i(88335),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        n = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        s = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        a = {};

      function h(t) {
        return r.isMemo(t) ? s : a[t.$$typeof] || o
      }
      a[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, a[r.Memo] = s;
      var p = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        c = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        f = Object.prototype;
      t.exports = function t(e, i, r) {
        if ("string" != typeof i) {
          if (f) {
            var o = d(i);
            o && o !== f && t(e, o, r)
          }
          var s = u(i);
          l && (s = s.concat(l(i)));
          for (var a = h(e), g = h(i), y = 0; y < s.length; ++y) {
            var b = s[y];
            if (!(n[b] || r && r[b] || g && g[b] || a && a[b])) {
              var v = c(i, b);
              try {
                p(e, b, v)
              } catch (t) {}
            }
          }
        }
        return e
      }
    },
    16859(t, e) {
      "use strict";
      var i = "function" == typeof Symbol && Symbol.for,
        r = i ? Symbol.for("react.element") : 60103,
        o = i ? Symbol.for("react.portal") : 60106,
        n = i ? Symbol.for("react.fragment") : 60107,
        s = i ? Symbol.for("react.strict_mode") : 60108,
        a = i ? Symbol.for("react.profiler") : 60114,
        h = i ? Symbol.for("react.provider") : 60109,
        p = i ? Symbol.for("react.context") : 60110,
        u = i ? Symbol.for("react.async_mode") : 60111,
        l = i ? Symbol.for("react.concurrent_mode") : 60111,
        c = i ? Symbol.for("react.forward_ref") : 60112,
        d = i ? Symbol.for("react.suspense") : 60113,
        f = i ? Symbol.for("react.suspense_list") : 60120,
        g = i ? Symbol.for("react.memo") : 60115,
        y = i ? Symbol.for("react.lazy") : 60116,
        b = i ? Symbol.for("react.block") : 60121,
        v = i ? Symbol.for("react.fundamental") : 60117,
        m = i ? Symbol.for("react.responder") : 60118,
        w = i ? Symbol.for("react.scope") : 60119;

      function z(t) {
        if ("object" == typeof t && null !== t) {
          var e = t.$$typeof;
          switch (e) {
            case r:
              switch (t = t.type) {
                case u:
                case l:
                case n:
                case a:
                case s:
                case d:
                  return t;
                default:
                  switch (t = t && t.$$typeof) {
                    case p:
                    case c:
                    case y:
                    case g:
                    case h:
                      return t;
                    default:
                      return e
                  }
              }
            case o:
              return e
          }
        }
      }

      function x(t) {
        return z(t) === l
      }
      e.AsyncMode = u, e.ConcurrentMode = l, e.ContextConsumer = p, e.ContextProvider = h, e.Element = r, e.ForwardRef = c, e.Fragment = n, e.Lazy = y, e.Memo = g, e.Portal = o, e.Profiler = a, e.StrictMode = s, e.Suspense = d, e.isAsyncMode = function(t) {
        return x(t) || z(t) === u
      }, e.isConcurrentMode = x, e.isContextConsumer = function(t) {
        return z(t) === p
      }, e.isContextProvider = function(t) {
        return z(t) === h
      }, e.isElement = function(t) {
        return "object" == typeof t && null !== t && t.$$typeof === r
      }, e.isForwardRef = function(t) {
        return z(t) === c
      }, e.isFragment = function(t) {
        return z(t) === n
      }, e.isLazy = function(t) {
        return z(t) === y
      }, e.isMemo = function(t) {
        return z(t) === g
      }, e.isPortal = function(t) {
        return z(t) === o
      }, e.isProfiler = function(t) {
        return z(t) === a
      }, e.isStrictMode = function(t) {
        return z(t) === s
      }, e.isSuspense = function(t) {
        return z(t) === d
      }, e.isValidElementType = function(t) {
        return "string" == typeof t || "function" == typeof t || t === n || t === l || t === a || t === s || t === d || t === f || "object" == typeof t && null !== t && (t.$$typeof === y || t.$$typeof === g || t.$$typeof === h || t.$$typeof === p || t.$$typeof === c || t.$$typeof === v || t.$$typeof === m || t.$$typeof === w || t.$$typeof === b)
      }, e.typeOf = z
    },
    88335(t, e, i) {
      "use strict";
      t.exports = i(16859)
    },
    31454(t, e, i) {
      var r = i(49192);
      t.exports = function(t) {
        return r(t, 5)
      }
    },
    10613(t, e, i) {
      var r = i(23117);
      t.exports = function(t, e, i) {
        var o = null == t ? void 0 : r(t, e);
        return void 0 === o ? i : o
      }
    },
    42649(t) {
      var e, i, r = t.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function n() {
        throw new Error("clearTimeout has not been defined")
      }

      function s(t) {
        if (e === setTimeout) return setTimeout(t, 0);
        if ((e === o || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
        try {
          return e(t, 0)
        } catch (i) {
          try {
            return e.call(null, t, 0)
          } catch (i) {
            return e.call(this, t, 0)
          }
        }
      }! function() {
        try {
          e = "function" == typeof setTimeout ? setTimeout : o
        } catch (t) {
          e = o
        }
        try {
          i = "function" == typeof clearTimeout ? clearTimeout : n
        } catch (t) {
          i = n
        }
      }();
      var a, h = [],
        p = !1,
        u = -1;

      function l() {
        p && a && (p = !1, a.length ? h = a.concat(h) : u = -1, h.length && c())
      }

      function c() {
        if (!p) {
          var t = s(l);
          p = !0;
          for (var e = h.length; e;) {
            for (a = h, h = []; ++u < e;) a && a[u].run();
            u = -1, e = h.length
          }
          a = null, p = !1,
            function(t) {
              if (i === clearTimeout) return clearTimeout(t);
              if ((i === n || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
              try {
                return i(t)
              } catch (e) {
                try {
                  return i.call(null, t)
                } catch (e) {
                  return i.call(this, t)
                }
              }
            }(t)
        }
      }

      function d(t, e) {
        this.fun = t, this.array = e
      }

      function f() {}
      r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        h.push(new d(t, e)), 1 !== h.length || p || s(c)
      }, d.prototype.run = function() {
        this.fun.apply(null, this.array)
      }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = f, r.addListener = f, r.once = f, r.off = f, r.removeListener = f, r.removeAllListeners = f, r.emit = f, r.prependListener = f, r.prependOnceListener = f, r.listeners = function(t) {
        return []
      }, r.binding = function(t) {
        throw new Error("process.binding is not supported")
      }, r.cwd = function() {
        return "/"
      }, r.chdir = function(t) {
        throw new Error("process.chdir is not supported")
      }, r.umask = function() {
        return 0
      }
    },
    21442(t, e, i) {
      "use strict";
      i.d(e, {
        c: () => O
      });
      var r, o = i(42295),
        n = i(71127),
        s = i(18429),
        a = function() {
          return a = Object.assign || function(t) {
            for (var e, i = 1, r = arguments.length; i < r; i++)
              for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
          }, a.apply(this, arguments)
        },
        h = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize"
        },
        p = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize"
        },
        u = {
          width: "20px",
          height: "20px",
          position: "absolute",
          zIndex: 1
        },
        l = {
          top: a(a({}, h), {
            top: "-5px"
          }),
          right: a(a({}, p), {
            left: void 0,
            right: "-5px"
          }),
          bottom: a(a({}, h), {
            top: void 0,
            bottom: "-5px"
          }),
          left: a(a({}, p), {
            left: "-5px"
          }),
          topRight: a(a({}, u), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: a(a({}, u), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: a(a({}, u), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: a(a({}, u), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        c = (0, n.memo)(function(t) {
          var e = t.onResizeStart,
            i = t.direction,
            r = t.children,
            s = t.replaceStyles,
            h = t.className,
            p = (0, n.useCallback)(function(t) {
              e(t, i)
            }, [e, i]),
            u = (0, n.useCallback)(function(t) {
              e(t, i)
            }, [e, i]),
            c = (0, n.useMemo)(function() {
              return a(a({
                position: "absolute",
                userSelect: "none"
              }, l[i]), null != s ? s : {})
            }, [s, i]);
          return (0, o.jsx)("div", {
            className: h || void 0,
            style: c,
            onMouseDown: p,
            onTouchStart: u,
            children: r
          })
        }),
        d = (r = function(t, e) {
          return r = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(t, e) {
            t.__proto__ = e
          } || function(t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          }, r(t, e)
        }, function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

          function i() {
            this.constructor = t
          }
          r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        f = function() {
          return f = Object.assign || function(t) {
            for (var e, i = 1, r = arguments.length; i < r; i++)
              for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
          }, f.apply(this, arguments)
        },
        g = {
          width: "auto",
          height: "auto"
        },
        y = function(t, e, i) {
          return Math.max(Math.min(t, i), e)
        },
        b = function(t, e, i) {
          var r = Math.round(t / e);
          return r * e + i * (r - 1)
        },
        v = function(t, e) {
          return new RegExp(t, "i").test(e)
        },
        m = function(t) {
          return Boolean(t.touches && t.touches.length)
        },
        w = function(t, e, i) {
          void 0 === i && (i = 0);
          var r = e.reduce(function(i, r, o) {
              return Math.abs(r - t) < Math.abs(e[i] - t) ? o : i
            }, 0),
            o = Math.abs(e[r] - t);
          return 0 === i || o < i ? e[r] : t
        },
        z = function(t) {
          return "auto" === (t = t.toString()) || t.endsWith("px") || t.endsWith("%") || t.endsWith("vh") || t.endsWith("vw") || t.endsWith("vmax") || t.endsWith("vmin") ? t : "".concat(t, "px")
        },
        x = function(t, e, i, r) {
          if (t && "string" == typeof t) {
            if (t.endsWith("px")) return Number(t.replace("px", ""));
            if (t.endsWith("%")) return e * (Number(t.replace("%", "")) / 100);
            if (t.endsWith("vw")) return i * (Number(t.replace("vw", "")) / 100);
            if (t.endsWith("vh")) return r * (Number(t.replace("vh", "")) / 100)
          }
          return t
        },
        S = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        R = "__resizable_base__",
        O = function(t) {
          function e(e) {
            var i, r, o, n, s = t.call(this, e) || this;
            return s.ratio = 1, s.resizable = null, s.parentLeft = 0, s.parentTop = 0, s.resizableLeft = 0, s.resizableRight = 0, s.resizableTop = 0, s.resizableBottom = 0, s.targetLeft = 0, s.targetTop = 0, s.delta = {
              width: 0,
              height: 0
            }, s.appendBase = function() {
              if (!s.resizable || !s.window) return null;
              var t = s.parentNode;
              if (!t) return null;
              var e = s.window.document.createElement("div");
              return e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.transform = "scale(0, 0)", e.style.left = "0", e.style.flex = "0 0 100%", e.classList ? e.classList.add(R) : e.className += R, t.appendChild(e), e
            }, s.removeBase = function(t) {
              var e = s.parentNode;
              e && e.removeChild(t)
            }, s.state = {
              isResizing: !1,
              width: null !== (r = null === (i = s.propsSize) || void 0 === i ? void 0 : i.width) && void 0 !== r ? r : "auto",
              height: null !== (n = null === (o = s.propsSize) || void 0 === o ? void 0 : o.height) && void 0 !== n ? n : "auto",
              direction: "right",
              original: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
              },
              backgroundStyle: {
                height: "100%",
                width: "100%",
                backgroundColor: "rgba(0,0,0,0)",
                cursor: "auto",
                opacity: 0,
                position: "fixed",
                zIndex: 9999,
                top: "0",
                left: "0",
                bottom: "0",
                right: "0"
              },
              flexBasis: void 0
            }, s.onResizeStart = s.onResizeStart.bind(s), s.onMouseMove = s.onMouseMove.bind(s), s.onMouseUp = s.onMouseUp.bind(s), s
          }
          return d(e, t), Object.defineProperty(e.prototype, "parentNode", {
            get: function() {
              return this.resizable ? this.resizable.parentNode : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "window", {
            get: function() {
              return this.resizable && this.resizable.ownerDocument ? this.resizable.ownerDocument.defaultView : null
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "propsSize", {
            get: function() {
              return this.props.size || this.props.defaultSize || g
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "size", {
            get: function() {
              var t = 0,
                e = 0;
              if (this.resizable && this.window) {
                var i = this.resizable.offsetWidth,
                  r = this.resizable.offsetHeight,
                  o = this.resizable.style.position;
                "relative" !== o && (this.resizable.style.position = "relative"), t = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i, e = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : r, this.resizable.style.position = o
              }
              return {
                width: t,
                height: e
              }
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "sizeStyle", {
            get: function() {
              var t = this,
                e = this.props.size,
                i = function(e) {
                  var i;
                  if (void 0 === t.state[e] || "auto" === t.state[e]) return "auto";
                  if (t.propsSize && t.propsSize[e] && (null === (i = t.propsSize[e]) || void 0 === i ? void 0 : i.toString().endsWith("%"))) {
                    if (t.state[e].toString().endsWith("%")) return t.state[e].toString();
                    var r = t.getParentSize(),
                      o = Number(t.state[e].toString().replace("px", "")) / r[e] * 100;
                    return "".concat(o, "%")
                  }
                  return z(t.state[e])
                };
              return {
                width: e && void 0 !== e.width && !this.state.isResizing ? z(e.width) : i("width"),
                height: e && void 0 !== e.height && !this.state.isResizing ? z(e.height) : i("height")
              }
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.getParentSize = function() {
            if (!this.parentNode) return this.window ? {
              width: this.window.innerWidth,
              height: this.window.innerHeight
            } : {
              width: 0,
              height: 0
            };
            var t = this.appendBase();
            if (!t) return {
              width: 0,
              height: 0
            };
            var e = !1,
              i = this.parentNode.style.flexWrap;
            "wrap" !== i && (e = !0, this.parentNode.style.flexWrap = "wrap"), t.style.position = "relative", t.style.minWidth = "100%", t.style.minHeight = "100%";
            var r = {
              width: t.offsetWidth,
              height: t.offsetHeight
            };
            return e && (this.parentNode.style.flexWrap = i), this.removeBase(t), r
          }, e.prototype.bindEvents = function() {
            this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
              capture: !0,
              passive: !1
            }), this.window.addEventListener("touchend", this.onMouseUp))
          }, e.prototype.unbindEvents = function() {
            this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp))
          }, e.prototype.componentDidMount = function() {
            if (this.resizable && this.window) {
              var t = this.window.getComputedStyle(this.resizable);
              this.setState({
                width: this.state.width || this.size.width,
                height: this.state.height || this.size.height,
                flexBasis: "auto" !== t.flexBasis ? t.flexBasis : void 0
              })
            }
          }, e.prototype.componentWillUnmount = function() {
            this.window && this.unbindEvents()
          }, e.prototype.createSizeForCssProperty = function(t, e) {
            var i = this.propsSize && this.propsSize[e];
            return "auto" !== this.state[e] || this.state.original[e] !== t || void 0 !== i && "auto" !== i ? t : "auto"
          }, e.prototype.calculateNewMaxFromBoundary = function(t, e) {
            var i, r, o = this.props.boundsByDirection,
              n = this.state.direction,
              s = o && v("left", n),
              a = o && v("top", n);
            if ("parent" === this.props.bounds) {
              var h = this.parentNode;
              h && (i = s ? this.resizableRight - this.parentLeft : h.offsetWidth + (this.parentLeft - this.resizableLeft), r = a ? this.resizableBottom - this.parentTop : h.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = s ? this.resizableRight : this.window.innerWidth - this.resizableLeft, r = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = s ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), r = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (t = t && t < i ? t : i), r && Number.isFinite(r) && (e = e && e < r ? e : r), {
              maxWidth: t,
              maxHeight: e
            }
          }, e.prototype.calculateNewSizeFromDirection = function(t, e) {
            var i, r = this.props.scale || 1,
              o = (i = this.props.resizeRatio || 1, Array.isArray(i) ? i : [i, i]),
              n = o[0],
              s = o[1],
              a = this.state,
              h = a.direction,
              p = a.original,
              u = this.props,
              l = u.lockAspectRatio,
              c = u.lockAspectRatioExtraHeight,
              d = u.lockAspectRatioExtraWidth,
              f = p.width,
              g = p.height,
              y = c || 0,
              b = d || 0;
            return v("right", h) && (f = p.width + (t - p.x) * n / r, l && (g = (f - b) / this.ratio + y)), v("left", h) && (f = p.width - (t - p.x) * n / r, l && (g = (f - b) / this.ratio + y)), v("bottom", h) && (g = p.height + (e - p.y) * s / r, l && (f = (g - y) * this.ratio + b)), v("top", h) && (g = p.height - (e - p.y) * s / r, l && (f = (g - y) * this.ratio + b)), {
              newWidth: f,
              newHeight: g
            }
          }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, r) {
            var o = this.props,
              n = o.lockAspectRatio,
              s = o.lockAspectRatioExtraHeight,
              a = o.lockAspectRatioExtraWidth,
              h = void 0 === r.width ? 10 : r.width,
              p = void 0 === i.width || i.width < 0 ? t : i.width,
              u = void 0 === r.height ? 10 : r.height,
              l = void 0 === i.height || i.height < 0 ? e : i.height,
              c = s || 0,
              d = a || 0;
            if (n) {
              var f = (u - c) * this.ratio + d,
                g = (l - c) * this.ratio + d,
                b = (h - d) / this.ratio + c,
                v = (p - d) / this.ratio + c,
                m = Math.max(h, f),
                w = Math.min(p, g),
                z = Math.max(u, b),
                x = Math.min(l, v);
              t = y(t, m, w), e = y(e, z, x)
            } else t = y(t, h, p), e = y(e, u, l);
            return {
              newWidth: t,
              newHeight: e
            }
          }, e.prototype.setBoundingClientRect = function() {
            var t = 1 / (this.props.scale || 1);
            if ("parent" === this.props.bounds) {
              var e = this.parentNode;
              if (e) {
                var i = e.getBoundingClientRect();
                this.parentLeft = i.left * t, this.parentTop = i.top * t
              }
            }
            if (this.props.bounds && "string" != typeof this.props.bounds) {
              var r = this.props.bounds.getBoundingClientRect();
              this.targetLeft = r.left * t, this.targetTop = r.top * t
            }
            if (this.resizable) {
              var o = this.resizable.getBoundingClientRect(),
                n = o.left,
                s = o.top,
                a = o.right,
                h = o.bottom;
              this.resizableLeft = n * t, this.resizableRight = a * t, this.resizableTop = s * t, this.resizableBottom = h * t
            }
          }, e.prototype.onResizeStart = function(t, e) {
            if (this.resizable && this.window) {
              var i, r = 0,
                o = 0;
              if (t.nativeEvent && function(t) {
                  return Boolean((t.clientX || 0 === t.clientX) && (t.clientY || 0 === t.clientY))
                }(t.nativeEvent) ? (r = t.nativeEvent.clientX, o = t.nativeEvent.clientY) : t.nativeEvent && m(t.nativeEvent) && (r = t.nativeEvent.touches[0].clientX, o = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(t, e, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var n = this.window.getComputedStyle(this.resizable);
              if ("auto" !== n.flexBasis) {
                var s = this.parentNode;
                if (s) {
                  var a = this.window.getComputedStyle(s).flexDirection;
                  this.flexDir = a.startsWith("row") ? "row" : "column", i = n.flexBasis
                }
              }
              this.setBoundingClientRect(), this.bindEvents();
              var h = {
                original: {
                  x: r,
                  y: o,
                  width: this.size.width,
                  height: this.size.height
                },
                isResizing: !0,
                backgroundStyle: f(f({}, this.state.backgroundStyle), {
                  cursor: this.window.getComputedStyle(t.target).cursor || "auto"
                }),
                direction: e,
                flexBasis: i
              };
              this.setState(h)
            }
          }, e.prototype.onMouseMove = function(t) {
            var e = this;
            if (this.state.isResizing && this.resizable && this.window) {
              if (this.window.TouchEvent && m(t)) try {
                t.preventDefault(), t.stopPropagation()
              } catch (t) {}
              var i = this.props,
                r = i.maxWidth,
                o = i.maxHeight,
                n = i.minWidth,
                a = i.minHeight,
                h = m(t) ? t.touches[0].clientX : t.clientX,
                p = m(t) ? t.touches[0].clientY : t.clientY,
                u = this.state,
                l = u.direction,
                c = u.original,
                d = u.width,
                f = u.height,
                g = this.getParentSize(),
                y = function(t, e, i, r, o, n, s) {
                  return r = x(r, t.width, e, i), o = x(o, t.height, e, i), n = x(n, t.width, e, i), s = x(s, t.height, e, i), {
                    maxWidth: void 0 === r ? void 0 : Number(r),
                    maxHeight: void 0 === o ? void 0 : Number(o),
                    minWidth: void 0 === n ? void 0 : Number(n),
                    minHeight: void 0 === s ? void 0 : Number(s)
                  }
                }(g, this.window.innerWidth, this.window.innerHeight, r, o, n, a);
              r = y.maxWidth, o = y.maxHeight, n = y.minWidth, a = y.minHeight;
              var v = this.calculateNewSizeFromDirection(h, p),
                z = v.newHeight,
                S = v.newWidth,
                R = this.calculateNewMaxFromBoundary(r, o);
              this.props.snap && this.props.snap.x && (S = w(S, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (z = w(z, this.props.snap.y, this.props.snapGap));
              var O = this.calculateNewSizeFromAspectRatio(S, z, {
                width: R.maxWidth,
                height: R.maxHeight
              }, {
                width: n,
                height: a
              });
              if (S = O.newWidth, z = O.newHeight, this.props.grid) {
                var W = b(S, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  M = b(z, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  E = this.props.snapGap || 0;
                S = 0 === E || Math.abs(W - S) <= E ? W : S, z = 0 === E || Math.abs(M - z) <= E ? M : z
              }
              var j = {
                width: S - c.width,
                height: z - c.height
              };
              if (this.delta = j, d && "string" == typeof d)
                if (d.endsWith("%")) {
                  var P = S / g.width * 100;
                  S = "".concat(P, "%")
                } else if (d.endsWith("vw")) {
                var T = S / this.window.innerWidth * 100;
                S = "".concat(T, "vw")
              } else if (d.endsWith("vh")) {
                var N = S / this.window.innerHeight * 100;
                S = "".concat(N, "vh")
              }
              f && "string" == typeof f && (f.endsWith("%") ? (P = z / g.height * 100, z = "".concat(P, "%")) : f.endsWith("vw") ? (T = z / this.window.innerWidth * 100, z = "".concat(T, "vw")) : f.endsWith("vh") && (N = z / this.window.innerHeight * 100, z = "".concat(N, "vh")));
              var k = {
                width: this.createSizeForCssProperty(S, "width"),
                height: this.createSizeForCssProperty(z, "height")
              };
              "row" === this.flexDir ? k.flexBasis = k.width : "column" === this.flexDir && (k.flexBasis = k.height);
              var A = this.state.width !== k.width,
                L = this.state.height !== k.height,
                _ = this.state.flexBasis !== k.flexBasis,
                C = A || L || _;
              C && (0, s.flushSync)(function() {
                e.setState(k)
              }), this.props.onResize && C && this.props.onResize(t, l, this.resizable, j)
            }
          }, e.prototype.onMouseUp = function(t) {
            var e, i, r = this.state,
              o = r.isResizing,
              n = r.direction;
            r.original, o && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(t, n, this.resizable, this.delta), this.props.size && this.setState({
              width: null !== (e = this.props.size.width) && void 0 !== e ? e : "auto",
              height: null !== (i = this.props.size.height) && void 0 !== i ? i : "auto"
            }), this.unbindEvents(), this.setState({
              isResizing: !1,
              backgroundStyle: f(f({}, this.state.backgroundStyle), {
                cursor: "auto"
              })
            }))
          }, e.prototype.updateSize = function(t) {
            var e, i;
            this.setState({
              width: null !== (e = t.width) && void 0 !== e ? e : "auto",
              height: null !== (i = t.height) && void 0 !== i ? i : "auto"
            })
          }, e.prototype.renderResizer = function() {
            var t = this,
              e = this.props,
              i = e.enable,
              r = e.handleStyles,
              n = e.handleClasses,
              s = e.handleWrapperStyle,
              a = e.handleWrapperClass,
              h = e.handleComponent;
            if (!i) return null;
            var p = Object.keys(i).map(function(e) {
              return !1 !== i[e] ? (0, o.jsx)(c, {
                direction: e,
                onResizeStart: t.onResizeStart,
                replaceStyles: r && r[e],
                className: n && n[e],
                children: h && h[e] ? h[e] : null
              }, e) : null
            });
            return (0, o.jsx)("div", {
              className: a,
              style: s,
              children: p
            })
          }, e.prototype.render = function() {
            var t = this,
              e = Object.keys(this.props).reduce(function(e, i) {
                return -1 !== S.indexOf(i) || (e[i] = t.props[i]), e
              }, {}),
              i = f(f(f({
                position: "relative",
                userSelect: this.state.isResizing ? "none" : "auto"
              }, this.props.style), this.sizeStyle), {
                maxWidth: this.props.maxWidth,
                maxHeight: this.props.maxHeight,
                minWidth: this.props.minWidth,
                minHeight: this.props.minHeight,
                boxSizing: "border-box",
                flexShrink: 0
              });
            this.state.flexBasis && (i.flexBasis = this.state.flexBasis);
            var r = this.props.as || "div";
            return (0, o.jsxs)(r, f({
              style: i,
              className: this.props.className
            }, e, {
              ref: function(e) {
                e && (t.resizable = e)
              },
              children: [this.state.isResizing && (0, o.jsx)("div", {
                style: this.state.backgroundStyle
              }), this.props.children, this.renderResizer()]
            }))
          }, e.defaultProps = {
            as: "div",
            onResizeStart: function() {},
            onResize: function() {},
            onResizeStop: function() {},
            enable: {
              top: !0,
              right: !0,
              bottom: !0,
              left: !0,
              topRight: !0,
              bottomRight: !0,
              bottomLeft: !0,
              topLeft: !0
            },
            style: {},
            grid: [1, 1],
            gridGap: [0, 0],
            lockAspectRatio: !1,
            lockAspectRatioExtraWidth: 0,
            lockAspectRatioExtraHeight: 0,
            scale: 1,
            resizeRatio: 1,
            snapGap: 0
          }, e
        }(n.PureComponent)
    },
    11206(t, e, i) {
      "use strict";
      i.d(e, {
        A: () => h
      });
      const r = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let o;
      const n = new Uint8Array(16);

      function s() {
        if (!o && (o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !o)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return o(n)
      }
      const a = [];
      for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
      const h = function(t, e, i) {
        if (r.randomUUID && !e && !t) return r.randomUUID();
        const o = (t = t || {}).random || (t.rng || s)();
        if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e) {
          i = i || 0;
          for (let t = 0; t < 16; ++t) e[i + t] = o[t];
          return e
        }
        return function(t, e = 0) {
          return a[t[e + 0]] + a[t[e + 1]] + a[t[e + 2]] + a[t[e + 3]] + "-" + a[t[e + 4]] + a[t[e + 5]] + "-" + a[t[e + 6]] + a[t[e + 7]] + "-" + a[t[e + 8]] + a[t[e + 9]] + "-" + a[t[e + 10]] + a[t[e + 11]] + a[t[e + 12]] + a[t[e + 13]] + a[t[e + 14]] + a[t[e + 15]]
        }(o)
      }
    },
    22256(t, e, i) {
      "use strict";
      i.d(e, {
        A: () => o
      });
      var r = i(5843);

      function o(t, e, i) {
        return (e = (0, r.A)(e)) in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, t
      }
    },
    32549(t, e, i) {
      "use strict";

      function r() {
        return r = Object.assign ? Object.assign.bind() : function(t) {
          for (var e = 1; e < arguments.length; e++) {
            var i = arguments[e];
            for (var r in i)({}).hasOwnProperty.call(i, r) && (t[r] = i[r])
          }
          return t
        }, r.apply(null, arguments)
      }
      i.d(e, {
        A: () => r
      })
    },
    40942(t, e, i) {
      "use strict";
      i.d(e, {
        A: () => n
      });
      var r = i(22256);

      function o(t, e) {
        var i = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(t);
          e && (r = r.filter(function(e) {
            return Object.getOwnPropertyDescriptor(t, e).enumerable
          })), i.push.apply(i, r)
        }
        return i
      }

      function n(t) {
        for (var e = 1; e < arguments.length; e++) {
          var i = null != arguments[e] ? arguments[e] : {};
          e % 2 ? o(Object(i), !0).forEach(function(e) {
            (0, r.A)(t, e, i[e])
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : o(Object(i)).forEach(function(e) {
            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
          })
        }
        return t
      }
    },
    58900(t, e, i) {
      "use strict";

      function r(t, e) {
        if (null == t) return {};
        var i = {};
        for (var r in t)
          if ({}.hasOwnProperty.call(t, r)) {
            if (-1 !== e.indexOf(r)) continue;
            i[r] = t[r]
          } return i
      }
      i.d(e, {
        A: () => r
      })
    },
    13305(t, e, i) {
      "use strict";

      function r(t, e) {
        return r = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
          return t.__proto__ = e, t
        }, r(t, e)
      }
      i.d(e, {
        A: () => r
      })
    },
    5843(t, e, i) {
      "use strict";
      i.d(e, {
        A: () => o
      });
      var r = i(35739);

      function o(t) {
        var e = function(t) {
          if ("object" != (0, r.A)(t) || !t) return t;
          var e = t[Symbol.toPrimitive];
          if (void 0 !== e) {
            var i = e.call(t, "string");
            if ("object" != (0, r.A)(i)) return i;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(t)
        }(t);
        return "symbol" == (0, r.A)(e) ? e : e + ""
      }
    },
    35739(t, e, i) {
      "use strict";

      function r(t) {
        return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
          return typeof t
        } : function(t) {
          return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }, r(t)
      }
      i.d(e, {
        A: () => r
      })
    }
  }
]);