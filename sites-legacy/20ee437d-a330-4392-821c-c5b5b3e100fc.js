try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "20ee437d-a330-4392-821c-c5b5b3e100fc", t._sentryDebugIdIdentifier = "sentry-dbid-20ee437d-a330-4392-821c-c5b5b3e100fc")
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
  [831], {
    21441(t, e, i) {
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
    74143(t, e, i) {
      var r = i(5559);
      t.exports = function(t) {
        return r(t, 5)
      }
    },
    73892(t, e, i) {
      var r = i(69526);
      t.exports = function(t, e, i) {
        var o = null == t ? void 0 : r(t, e);
        return void 0 === o ? i : o
      }
    },
    43431(t) {
      var e, i, r = t.exports = {};

      function o() {
        throw new Error("setTimeout has not been defined")
      }

      function s() {
        throw new Error("clearTimeout has not been defined")
      }

      function n(t) {
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
          i = "function" == typeof clearTimeout ? clearTimeout : s
        } catch (t) {
          i = s
        }
      }();
      var a, h = [],
        p = !1,
        u = -1;

      function l() {
        p && a && (p = !1, a.length ? h = a.concat(h) : u = -1, h.length && d())
      }

      function d() {
        if (!p) {
          var t = n(l);
          p = !0;
          for (var e = h.length; e;) {
            for (a = h, h = []; ++u < e;) a && a[u].run();
            u = -1, e = h.length
          }
          a = null, p = !1,
            function(t) {
              if (i === clearTimeout) return clearTimeout(t);
              if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t);
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

      function c(t, e) {
        this.fun = t, this.array = e
      }

      function f() {}
      r.nextTick = function(t) {
        var e = new Array(arguments.length - 1);
        if (arguments.length > 1)
          for (var i = 1; i < arguments.length; i++) e[i - 1] = arguments[i];
        h.push(new c(t, e)), 1 !== h.length || p || n(d)
      }, c.prototype.run = function() {
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
    79484(t, e, i) {
      "use strict";
      i.d(e, {
        c: () => W
      });
      var r, o = i(39793),
        s = i(93082),
        n = i(84017),
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
        d = (0, s.memo)(function(t) {
          var e = t.onResizeStart,
            i = t.direction,
            r = t.children,
            n = t.replaceStyles,
            h = t.className,
            p = (0, s.useCallback)(function(t) {
              e(t, i)
            }, [e, i]),
            u = (0, s.useCallback)(function(t) {
              e(t, i)
            }, [e, i]),
            d = (0, s.useMemo)(function() {
              return a(a({
                position: "absolute",
                userSelect: "none"
              }, l[i]), null != n ? n : {})
            }, [n, i]);
          return (0, o.jsx)("div", {
            className: h || void 0,
            style: d,
            onMouseDown: p,
            onTouchStart: u,
            children: r
          })
        }),
        c = (r = function(t, e) {
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
        b = function(t, e, i) {
          return Math.max(Math.min(t, i), e)
        },
        w = function(t, e, i) {
          var r = Math.round(t / e);
          return r * e + i * (r - 1)
        },
        v = function(t, e) {
          return new RegExp(t, "i").test(e)
        },
        y = function(t) {
          return Boolean(t.touches && t.touches.length)
        },
        m = function(t, e, i) {
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
        W = function(t) {
          function e(e) {
            var i, r, o, s, n = t.call(this, e) || this;
            return n.ratio = 1, n.resizable = null, n.parentLeft = 0, n.parentTop = 0, n.resizableLeft = 0, n.resizableRight = 0, n.resizableTop = 0, n.resizableBottom = 0, n.targetLeft = 0, n.targetTop = 0, n.delta = {
              width: 0,
              height: 0
            }, n.appendBase = function() {
              if (!n.resizable || !n.window) return null;
              var t = n.parentNode;
              if (!t) return null;
              var e = n.window.document.createElement("div");
              return e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.transform = "scale(0, 0)", e.style.left = "0", e.style.flex = "0 0 100%", e.classList ? e.classList.add(R) : e.className += R, t.appendChild(e), e
            }, n.removeBase = function(t) {
              var e = n.parentNode;
              e && e.removeChild(t)
            }, n.state = {
              isResizing: !1,
              width: null !== (r = null === (i = n.propsSize) || void 0 === i ? void 0 : i.width) && void 0 !== r ? r : "auto",
              height: null !== (s = null === (o = n.propsSize) || void 0 === o ? void 0 : o.height) && void 0 !== s ? s : "auto",
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
            }, n.onResizeStart = n.onResizeStart.bind(n), n.onMouseMove = n.onMouseMove.bind(n), n.onMouseUp = n.onMouseUp.bind(n), n
          }
          return c(e, t), Object.defineProperty(e.prototype, "parentNode", {
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
              s = this.state.direction,
              n = o && v("left", s),
              a = o && v("top", s);
            if ("parent" === this.props.bounds) {
              var h = this.parentNode;
              h && (i = n ? this.resizableRight - this.parentLeft : h.offsetWidth + (this.parentLeft - this.resizableLeft), r = a ? this.resizableBottom - this.parentTop : h.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = n ? this.resizableRight : this.window.innerWidth - this.resizableLeft, r = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = n ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), r = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (t = t && t < i ? t : i), r && Number.isFinite(r) && (e = e && e < r ? e : r), {
              maxWidth: t,
              maxHeight: e
            }
          }, e.prototype.calculateNewSizeFromDirection = function(t, e) {
            var i, r = this.props.scale || 1,
              o = (i = this.props.resizeRatio || 1, Array.isArray(i) ? i : [i, i]),
              s = o[0],
              n = o[1],
              a = this.state,
              h = a.direction,
              p = a.original,
              u = this.props,
              l = u.lockAspectRatio,
              d = u.lockAspectRatioExtraHeight,
              c = u.lockAspectRatioExtraWidth,
              f = p.width,
              g = p.height,
              b = d || 0,
              w = c || 0;
            return v("right", h) && (f = p.width + (t - p.x) * s / r, l && (g = (f - w) / this.ratio + b)), v("left", h) && (f = p.width - (t - p.x) * s / r, l && (g = (f - w) / this.ratio + b)), v("bottom", h) && (g = p.height + (e - p.y) * n / r, l && (f = (g - b) * this.ratio + w)), v("top", h) && (g = p.height - (e - p.y) * n / r, l && (f = (g - b) * this.ratio + w)), {
              newWidth: f,
              newHeight: g
            }
          }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, r) {
            var o = this.props,
              s = o.lockAspectRatio,
              n = o.lockAspectRatioExtraHeight,
              a = o.lockAspectRatioExtraWidth,
              h = void 0 === r.width ? 10 : r.width,
              p = void 0 === i.width || i.width < 0 ? t : i.width,
              u = void 0 === r.height ? 10 : r.height,
              l = void 0 === i.height || i.height < 0 ? e : i.height,
              d = n || 0,
              c = a || 0;
            if (s) {
              var f = (u - d) * this.ratio + c,
                g = (l - d) * this.ratio + c,
                w = (h - c) / this.ratio + d,
                v = (p - c) / this.ratio + d,
                y = Math.max(h, f),
                m = Math.min(p, g),
                z = Math.max(u, w),
                x = Math.min(l, v);
              t = b(t, y, m), e = b(e, z, x)
            } else t = b(t, h, p), e = b(e, u, l);
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
                s = o.left,
                n = o.top,
                a = o.right,
                h = o.bottom;
              this.resizableLeft = s * t, this.resizableRight = a * t, this.resizableTop = n * t, this.resizableBottom = h * t
            }
          }, e.prototype.onResizeStart = function(t, e) {
            if (this.resizable && this.window) {
              var i, r = 0,
                o = 0;
              if (t.nativeEvent && function(t) {
                  return Boolean((t.clientX || 0 === t.clientX) && (t.clientY || 0 === t.clientY))
                }(t.nativeEvent) ? (r = t.nativeEvent.clientX, o = t.nativeEvent.clientY) : t.nativeEvent && y(t.nativeEvent) && (r = t.nativeEvent.touches[0].clientX, o = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(t, e, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var s = this.window.getComputedStyle(this.resizable);
              if ("auto" !== s.flexBasis) {
                var n = this.parentNode;
                if (n) {
                  var a = this.window.getComputedStyle(n).flexDirection;
                  this.flexDir = a.startsWith("row") ? "row" : "column", i = s.flexBasis
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
              if (this.window.TouchEvent && y(t)) try {
                t.preventDefault(), t.stopPropagation()
              } catch (t) {}
              var i = this.props,
                r = i.maxWidth,
                o = i.maxHeight,
                s = i.minWidth,
                a = i.minHeight,
                h = y(t) ? t.touches[0].clientX : t.clientX,
                p = y(t) ? t.touches[0].clientY : t.clientY,
                u = this.state,
                l = u.direction,
                d = u.original,
                c = u.width,
                f = u.height,
                g = this.getParentSize(),
                b = function(t, e, i, r, o, s, n) {
                  return r = x(r, t.width, e, i), o = x(o, t.height, e, i), s = x(s, t.width, e, i), n = x(n, t.height, e, i), {
                    maxWidth: void 0 === r ? void 0 : Number(r),
                    maxHeight: void 0 === o ? void 0 : Number(o),
                    minWidth: void 0 === s ? void 0 : Number(s),
                    minHeight: void 0 === n ? void 0 : Number(n)
                  }
                }(g, this.window.innerWidth, this.window.innerHeight, r, o, s, a);
              r = b.maxWidth, o = b.maxHeight, s = b.minWidth, a = b.minHeight;
              var v = this.calculateNewSizeFromDirection(h, p),
                z = v.newHeight,
                S = v.newWidth,
                R = this.calculateNewMaxFromBoundary(r, o);
              this.props.snap && this.props.snap.x && (S = m(S, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (z = m(z, this.props.snap.y, this.props.snapGap));
              var W = this.calculateNewSizeFromAspectRatio(S, z, {
                width: R.maxWidth,
                height: R.maxHeight
              }, {
                width: s,
                height: a
              });
              if (S = W.newWidth, z = W.newHeight, this.props.grid) {
                var E = w(S, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  O = w(z, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  M = this.props.snapGap || 0;
                S = 0 === M || Math.abs(E - S) <= M ? E : S, z = 0 === M || Math.abs(O - z) <= M ? O : z
              }
              var T = {
                width: S - d.width,
                height: z - d.height
              };
              if (this.delta = T, c && "string" == typeof c)
                if (c.endsWith("%")) {
                  var j = S / g.width * 100;
                  S = "".concat(j, "%")
                } else if (c.endsWith("vw")) {
                var k = S / this.window.innerWidth * 100;
                S = "".concat(k, "vw")
              } else if (c.endsWith("vh")) {
                var N = S / this.window.innerHeight * 100;
                S = "".concat(N, "vh")
              }
              f && "string" == typeof f && (f.endsWith("%") ? (j = z / g.height * 100, z = "".concat(j, "%")) : f.endsWith("vw") ? (k = z / this.window.innerWidth * 100, z = "".concat(k, "vw")) : f.endsWith("vh") && (N = z / this.window.innerHeight * 100, z = "".concat(N, "vh")));
              var A = {
                width: this.createSizeForCssProperty(S, "width"),
                height: this.createSizeForCssProperty(z, "height")
              };
              "row" === this.flexDir ? A.flexBasis = A.width : "column" === this.flexDir && (A.flexBasis = A.height);
              var L = this.state.width !== A.width,
                B = this.state.height !== A.height,
                H = this.state.flexBasis !== A.flexBasis,
                P = L || B || H;
              P && (0, n.flushSync)(function() {
                e.setState(A)
              }), this.props.onResize && P && this.props.onResize(t, l, this.resizable, T)
            }
          }, e.prototype.onMouseUp = function(t) {
            var e, i, r = this.state,
              o = r.isResizing,
              s = r.direction;
            r.original, o && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(t, s, this.resizable, this.delta), this.props.size && this.setState({
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
              s = e.handleClasses,
              n = e.handleWrapperStyle,
              a = e.handleWrapperClass,
              h = e.handleComponent;
            if (!i) return null;
            var p = Object.keys(i).map(function(e) {
              return !1 !== i[e] ? (0, o.jsx)(d, {
                direction: e,
                onResizeStart: t.onResizeStart,
                replaceStyles: r && r[e],
                className: s && s[e],
                children: h && h[e] ? h[e] : null
              }, e) : null
            });
            return (0, o.jsx)("div", {
              className: a,
              style: n,
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
        }(s.PureComponent)
    },
    39279(t, e, i) {
      "use strict";
      i.d(e, {
        A: () => h
      });
      const r = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let o;
      const s = new Uint8Array(16);

      function n() {
        if (!o && (o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !o)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return o(s)
      }
      const a = [];
      for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
      const h = function(t, e, i) {
        if (r.randomUUID && !e && !t) return r.randomUUID();
        const o = (t = t || {}).random || (t.rng || n)();
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
    5953(t, e, i) {
      "use strict";
      i.d(e, {
        A: () => o
      });
      var r = i(94570);

      function o(t, e, i) {
        return (e = (0, r.A)(e)) in t ? Object.defineProperty(t, e, {
          value: i,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[e] = i, t
      }
    },
    88846(t, e, i) {
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
    82229(t, e, i) {
      "use strict";
      i.d(e, {
        A: () => s
      });
      var r = i(5953);

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

      function s(t) {
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
    25473(t, e, i) {
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
    88208(t, e, i) {
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
    94570(t, e, i) {
      "use strict";
      i.d(e, {
        A: () => o
      });
      var r = i(8942);

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
    8942(t, e, i) {
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