! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "cd1c4a62-33d4-42df-81cb-701f849e0b88", t._sentryDebugIdIdentifier = "sentry-dbid-cd1c4a62-33d4-42df-81cb-701f849e0b88")
  } catch (t) {}
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
  [4448], {
    91689: t => {
      function e(t) {
        return t && t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
      }

      function i(t) {
        return t
      }

      function o(t, o) {
        const s = (o = o || {}).delimiter || ".",
          r = o.maxDepth,
          n = o.transformKey || i,
          h = {};
        return function t(i, a, p) {
          p = p || 1, Object.keys(i).forEach((function(d) {
            const l = i[d],
              u = o.safe && Array.isArray(l),
              c = Object.prototype.toString.call(l),
              f = e(l),
              g = "[object Object]" === c || "[object Array]" === c,
              b = a ? a + s + n(d) : n(d);
            if (!u && !f && g && Object.keys(l).length && (!o.maxDepth || p < r)) return t(l, b, p + 1);
            h[b] = l
          }))
        }(t), h
      }
      t.exports = o, o.flatten = o, o.unflatten = function t(s, r) {
        const n = (r = r || {}).delimiter || ".",
          h = r.overwrite || !1,
          a = r.transformKey || i,
          p = {};
        if (e(s) || "[object Object]" !== Object.prototype.toString.call(s)) return s;

        function d(t) {
          const e = Number(t);
          return isNaN(e) || -1 !== t.indexOf(".") || r.object ? t : e
        }
        return s = Object.keys(s).reduce((function(t, e) {
          const i = Object.prototype.toString.call(s[e]);
          return "[object Object]" !== i && "[object Array]" !== i || function(t) {
            const e = Object.prototype.toString.call(t),
              i = "[object Object]" === e;
            return !t || ("[object Array]" === e ? !t.length : i ? !Object.keys(t).length : void 0)
          }(s[e]) ? (t[e] = s[e], t) : function(t, e, i) {
            return Object.keys(i).reduce((function(e, o) {
              return e[t + n + o] = i[o], e
            }), e)
          }(e, t, o(s[e], r))
        }), {}), Object.keys(s).forEach((function(e) {
          const i = e.split(n).map(a);
          let o = d(i.shift()),
            l = d(i[0]),
            u = p;
          for (; void 0 !== l;) {
            if ("__proto__" === o) return;
            const t = Object.prototype.toString.call(u[o]),
              e = "[object Object]" === t || "[object Array]" === t;
            if (!h && !e && void 0 !== u[o]) return;
            (h && !e || !h && null == u[o]) && (u[o] = "number" != typeof l || r.object ? {} : []), u = u[o], i.length > 0 && (o = d(i.shift()), l = d(i[0]))
          }
          u[o] = t(s[e], r)
        })), p
      }
    },
    44251: (t, e, i) => {
      "use strict";
      var o, s = i(62229),
        r = i(44853),
        n = (o = function(t, e) {
          return o = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(t, e) {
            t.__proto__ = e
          } || function(t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          }, o(t, e)
        }, function(t, e) {
          function i() {
            this.constructor = t
          }
          o(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        h = function() {
          return h = Object.assign || function(t) {
            for (var e, i = 1, o = arguments.length; i < o; i++)
              for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
            return t
          }, h.apply(this, arguments)
        },
        a = {
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
        d = {
          width: "20px",
          height: "20px",
          position: "absolute"
        },
        l = {
          top: h(h({}, a), {
            top: "-5px"
          }),
          right: h(h({}, p), {
            left: void 0,
            right: "-5px"
          }),
          bottom: h(h({}, a), {
            top: void 0,
            bottom: "-5px"
          }),
          left: h(h({}, p), {
            left: "-5px"
          }),
          topRight: h(h({}, d), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: h(h({}, d), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: h(h({}, d), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: h(h({}, d), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        u = function(t) {
          function e() {
            var e = null !== t && t.apply(this, arguments) || this;
            return e.onMouseDown = function(t) {
              e.props.onResizeStart(t, e.props.direction)
            }, e.onTouchStart = function(t) {
              e.props.onResizeStart(t, e.props.direction)
            }, e
          }
          return n(e, t), e.prototype.render = function() {
            return s.createElement("div", {
              className: this.props.className || "",
              style: h(h({
                position: "absolute",
                userSelect: "none"
              }, l[this.props.direction]), this.props.replaceStyles || {}),
              onMouseDown: this.onMouseDown,
              onTouchStart: this.onTouchStart
            }, this.props.children)
          }, e
        }(s.PureComponent),
        c = function() {
          var t = function(e, i) {
            return t = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(t, e) {
              t.__proto__ = e
            } || function(t, e) {
              for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
            }, t(e, i)
          };
          return function(e, i) {
            function o() {
              this.constructor = e
            }
            t(e, i), e.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
          }
        }(),
        f = function() {
          return f = Object.assign || function(t) {
            for (var e, i = 1, o = arguments.length; i < o; i++)
              for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
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
        w = function(t, e) {
          return Math.round(t / e) * e
        },
        y = function(t, e) {
          return new RegExp(t, "i").test(e)
        },
        v = function(t) {
          return Boolean(t.touches && t.touches.length)
        },
        m = function(t, e, i) {
          void 0 === i && (i = 0);
          var o = e.reduce((function(i, o, s) {
              return Math.abs(o - t) < Math.abs(e[i] - t) ? s : i
            }), 0),
            s = Math.abs(e[o] - t);
          return 0 === i || s < i ? e[o] : t
        },
        z = function(t) {
          return "auto" === (t = t.toString()) || t.endsWith("px") || t.endsWith("%") || t.endsWith("vh") || t.endsWith("vw") || t.endsWith("vmax") || t.endsWith("vmin") ? t : t + "px"
        },
        x = function(t, e, i, o) {
          if (t && "string" == typeof t) {
            if (t.endsWith("px")) return Number(t.replace("px", ""));
            if (t.endsWith("%")) return e * (Number(t.replace("%", "")) / 100);
            if (t.endsWith("vw")) return i * (Number(t.replace("vw", "")) / 100);
            if (t.endsWith("vh")) return o * (Number(t.replace("vh", "")) / 100)
          }
          return t
        },
        S = ["as", "style", "className", "grid", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        R = "__resizable_base__";
      ! function(t) {
        function e(e) {
          var i = t.call(this, e) || this;
          return i.ratio = 1, i.resizable = null, i.parentLeft = 0, i.parentTop = 0, i.resizableLeft = 0, i.resizableRight = 0, i.resizableTop = 0, i.resizableBottom = 0, i.targetLeft = 0, i.targetTop = 0, i.appendBase = function() {
            if (!i.resizable || !i.window) return null;
            var t = i.parentNode;
            if (!t) return null;
            var e = i.window.document.createElement("div");
            return e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.transform = "scale(0, 0)", e.style.left = "0", e.style.flex = "0 0 100%", e.classList ? e.classList.add(R) : e.className += R, t.appendChild(e), e
          }, i.removeBase = function(t) {
            var e = i.parentNode;
            e && e.removeChild(t)
          }, i.ref = function(t) {
            t && (i.resizable = t)
          }, i.state = {
            isResizing: !1,
            width: void 0 === (i.propsSize && i.propsSize.width) ? "auto" : i.propsSize && i.propsSize.width,
            height: void 0 === (i.propsSize && i.propsSize.height) ? "auto" : i.propsSize && i.propsSize.height,
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
          }, i.onResizeStart = i.onResizeStart.bind(i), i.onMouseMove = i.onMouseMove.bind(i), i.onMouseUp = i.onMouseUp.bind(i), i
        }
        c(e, t), Object.defineProperty(e.prototype, "parentNode", {
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
                o = this.resizable.offsetHeight,
                s = this.resizable.style.position;
              "relative" !== s && (this.resizable.style.position = "relative"), t = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i, e = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : o, this.resizable.style.position = s
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
                if (void 0 === t.state[e] || "auto" === t.state[e]) return "auto";
                if (t.propsSize && t.propsSize[e] && t.propsSize[e].toString().endsWith("%")) {
                  if (t.state[e].toString().endsWith("%")) return t.state[e].toString();
                  var i = t.getParentSize();
                  return Number(t.state[e].toString().replace("px", "")) / i[e] * 100 + "%"
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
          var o = {
            width: t.offsetWidth,
            height: t.offsetHeight
          };
          return e && (this.parentNode.style.flexWrap = i), this.removeBase(t), o
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
          var i, o, s = this.props.boundsByDirection,
            r = this.state.direction,
            n = s && y("left", r),
            h = s && y("top", r);
          if ("parent" === this.props.bounds) {
            var a = this.parentNode;
            a && (i = n ? this.resizableRight - this.parentLeft : a.offsetWidth + (this.parentLeft - this.resizableLeft), o = h ? this.resizableBottom - this.parentTop : a.offsetHeight + (this.parentTop - this.resizableTop))
          } else "window" === this.props.bounds ? this.window && (i = n ? this.resizableRight : this.window.innerWidth - this.resizableLeft, o = h ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = n ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), o = h ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
          return i && Number.isFinite(i) && (t = t && t < i ? t : i), o && Number.isFinite(o) && (e = e && e < o ? e : o), {
            maxWidth: t,
            maxHeight: e
          }
        }, e.prototype.calculateNewSizeFromDirection = function(t, e) {
          var i = this.props.scale || 1,
            o = this.props.resizeRatio || 1,
            s = this.state,
            r = s.direction,
            n = s.original,
            h = this.props,
            a = h.lockAspectRatio,
            p = h.lockAspectRatioExtraHeight,
            d = h.lockAspectRatioExtraWidth,
            l = n.width,
            u = n.height,
            c = p || 0,
            f = d || 0;
          return y("right", r) && (l = n.width + (t - n.x) * o / i, a && (u = (l - f) / this.ratio + c)), y("left", r) && (l = n.width - (t - n.x) * o / i, a && (u = (l - f) / this.ratio + c)), y("bottom", r) && (u = n.height + (e - n.y) * o / i, a && (l = (u - c) * this.ratio + f)), y("top", r) && (u = n.height - (e - n.y) * o / i, a && (l = (u - c) * this.ratio + f)), {
            newWidth: l,
            newHeight: u
          }
        }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, o) {
          var s = this.props,
            r = s.lockAspectRatio,
            n = s.lockAspectRatioExtraHeight,
            h = s.lockAspectRatioExtraWidth,
            a = void 0 === o.width ? 10 : o.width,
            p = void 0 === i.width || i.width < 0 ? t : i.width,
            d = void 0 === o.height ? 10 : o.height,
            l = void 0 === i.height || i.height < 0 ? e : i.height,
            u = n || 0,
            c = h || 0;
          if (r) {
            var f = (d - u) * this.ratio + c,
              g = (l - u) * this.ratio + c,
              w = (a - c) / this.ratio + u,
              y = (p - c) / this.ratio + u,
              v = Math.max(a, f),
              m = Math.min(p, g),
              z = Math.max(d, w),
              x = Math.min(l, y);
            t = b(t, v, m), e = b(e, z, x)
          } else t = b(t, a, p), e = b(e, d, l);
          return {
            newWidth: t,
            newHeight: e
          }
        }, e.prototype.setBoundingClientRect = function() {
          if ("parent" === this.props.bounds) {
            var t = this.parentNode;
            if (t) {
              var e = t.getBoundingClientRect();
              this.parentLeft = e.left, this.parentTop = e.top
            }
          }
          if (this.props.bounds && "string" != typeof this.props.bounds) {
            var i = this.props.bounds.getBoundingClientRect();
            this.targetLeft = i.left, this.targetTop = i.top
          }
          if (this.resizable) {
            var o = this.resizable.getBoundingClientRect(),
              s = o.left,
              r = o.top,
              n = o.right,
              h = o.bottom;
            this.resizableLeft = s, this.resizableRight = n, this.resizableTop = r, this.resizableBottom = h
          }
        }, e.prototype.onResizeStart = function(t, e) {
          if (this.resizable && this.window) {
            var i, o = 0,
              s = 0;
            if (t.nativeEvent && function(t) {
                return Boolean((t.clientX || 0 === t.clientX) && (t.clientY || 0 === t.clientY))
              }(t.nativeEvent) ? (o = t.nativeEvent.clientX, s = t.nativeEvent.clientY) : t.nativeEvent && v(t.nativeEvent) && (o = t.nativeEvent.touches[0].clientX, s = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(t, e, this.resizable)) return;
            this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
              height: this.props.size.height
            }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
              width: this.props.size.width
            })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
            var r = this.window.getComputedStyle(this.resizable);
            if ("auto" !== r.flexBasis) {
              var n = this.parentNode;
              if (n) {
                var h = this.window.getComputedStyle(n).flexDirection;
                this.flexDir = h.startsWith("row") ? "row" : "column", i = r.flexBasis
              }
            }
            this.setBoundingClientRect(), this.bindEvents();
            var a = {
              original: {
                x: o,
                y: s,
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
            this.setState(a)
          }
        }, e.prototype.onMouseMove = function(t) {
          var e = this;
          if (this.state.isResizing && this.resizable && this.window) {
            if (this.window.TouchEvent && v(t)) try {
              t.preventDefault(), t.stopPropagation()
            } catch (t) {}
            var i = this.props,
              o = i.maxWidth,
              s = i.maxHeight,
              n = i.minWidth,
              h = i.minHeight,
              a = v(t) ? t.touches[0].clientX : t.clientX,
              p = v(t) ? t.touches[0].clientY : t.clientY,
              d = this.state,
              l = d.direction,
              u = d.original,
              c = d.width,
              f = d.height,
              g = this.getParentSize(),
              b = function(t, e, i, o, s, r, n) {
                return o = x(o, t.width, e, i), s = x(s, t.height, e, i), r = x(r, t.width, e, i), n = x(n, t.height, e, i), {
                  maxWidth: void 0 === o ? void 0 : Number(o),
                  maxHeight: void 0 === s ? void 0 : Number(s),
                  minWidth: void 0 === r ? void 0 : Number(r),
                  minHeight: void 0 === n ? void 0 : Number(n)
                }
              }(g, this.window.innerWidth, this.window.innerHeight, o, s, n, h);
            o = b.maxWidth, s = b.maxHeight, n = b.minWidth, h = b.minHeight;
            var y = this.calculateNewSizeFromDirection(a, p),
              z = y.newHeight,
              S = y.newWidth,
              R = this.calculateNewMaxFromBoundary(o, s);
            this.props.snap && this.props.snap.x && (S = m(S, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (z = m(z, this.props.snap.y, this.props.snapGap));
            var W = this.calculateNewSizeFromAspectRatio(S, z, {
              width: R.maxWidth,
              height: R.maxHeight
            }, {
              width: n,
              height: h
            });
            if (S = W.newWidth, z = W.newHeight, this.props.grid) {
              var E = w(S, this.props.grid[0]),
                M = w(z, this.props.grid[1]),
                j = this.props.snapGap || 0;
              S = 0 === j || Math.abs(E - S) <= j ? E : S, z = 0 === j || Math.abs(M - z) <= j ? M : z
            }
            var _ = {
              width: S - u.width,
              height: z - u.height
            };
            c && "string" == typeof c && (c.endsWith("%") ? S = S / g.width * 100 + "%" : c.endsWith("vw") ? S = S / this.window.innerWidth * 100 + "vw" : c.endsWith("vh") && (S = S / this.window.innerHeight * 100 + "vh")), f && "string" == typeof f && (f.endsWith("%") ? z = z / g.height * 100 + "%" : f.endsWith("vw") ? z = z / this.window.innerWidth * 100 + "vw" : f.endsWith("vh") && (z = z / this.window.innerHeight * 100 + "vh"));
            var k = {
              width: this.createSizeForCssProperty(S, "width"),
              height: this.createSizeForCssProperty(z, "height")
            };
            "row" === this.flexDir ? k.flexBasis = k.width : "column" === this.flexDir && (k.flexBasis = k.height), (0, r.flushSync)((function() {
              e.setState(k)
            })), this.props.onResize && this.props.onResize(t, l, this.resizable, _)
          }
        }, e.prototype.onMouseUp = function(t) {
          var e = this.state,
            i = e.isResizing,
            o = e.direction,
            s = e.original;
          if (i && this.resizable) {
            var r = {
              width: this.size.width - s.width,
              height: this.size.height - s.height
            };
            this.props.onResizeStop && this.props.onResizeStop(t, o, this.resizable, r), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
              isResizing: !1,
              backgroundStyle: f(f({}, this.state.backgroundStyle), {
                cursor: "auto"
              })
            })
          }
        }, e.prototype.updateSize = function(t) {
          this.setState({
            width: t.width,
            height: t.height
          })
        }, e.prototype.renderResizer = function() {
          var t = this,
            e = this.props,
            i = e.enable,
            o = e.handleStyles,
            r = e.handleClasses,
            n = e.handleWrapperStyle,
            h = e.handleWrapperClass,
            a = e.handleComponent;
          if (!i) return null;
          var p = Object.keys(i).map((function(e) {
            return !1 !== i[e] ? s.createElement(u, {
              key: e,
              direction: e,
              onResizeStart: t.onResizeStart,
              replaceStyles: o && o[e],
              className: r && r[e]
            }, a && a[e] ? a[e] : null) : null
          }));
          return s.createElement("div", {
            className: h,
            style: n
          }, p)
        }, e.prototype.render = function() {
          var t = this,
            e = Object.keys(this.props).reduce((function(e, i) {
              return -1 !== S.indexOf(i) || (e[i] = t.props[i]), e
            }), {}),
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
          var o = this.props.as || "div";
          return s.createElement(o, f({
            ref: this.ref,
            style: i,
            className: this.props.className
          }, e), this.state.isResizing && s.createElement("div", {
            style: this.state.backgroundStyle
          }), this.props.children, this.renderResizer())
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
          lockAspectRatio: !1,
          lockAspectRatioExtraWidth: 0,
          lockAspectRatioExtraHeight: 0,
          scale: 1,
          resizeRatio: 1,
          snapGap: 0
        }
      }(s.PureComponent)
    },
    20310: (t, e, i) => {
      "use strict";
      i.d(e, {
        A: () => a
      });
      const o = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let s;
      const r = new Uint8Array(16);

      function n() {
        if (!s && (s = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !s)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return s(r)
      }
      const h = [];
      for (let t = 0; t < 256; ++t) h.push((t + 256).toString(16).slice(1));
      const a = function(t, e, i) {
        if (o.randomUUID && !e && !t) return o.randomUUID();
        const s = (t = t || {}).random || (t.rng || n)();
        if (s[6] = 15 & s[6] | 64, s[8] = 63 & s[8] | 128, e) {
          i = i || 0;
          for (let t = 0; t < 16; ++t) e[i + t] = s[t];
          return e
        }
        return function(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return h[t[e + 0]] + h[t[e + 1]] + h[t[e + 2]] + h[t[e + 3]] + "-" + h[t[e + 4]] + h[t[e + 5]] + "-" + h[t[e + 6]] + h[t[e + 7]] + "-" + h[t[e + 8]] + h[t[e + 9]] + "-" + h[t[e + 10]] + h[t[e + 11]] + h[t[e + 12]] + h[t[e + 13]] + h[t[e + 14]] + h[t[e + 15]]
        }(s)
      }
    }
  }
]);