/*! For license information please see ac7887def94f53d045fc326e551cee2f.js.LICENSE.txt */ ! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "b796a7e8-af0c-4ad4-91c9-80d01961210d", e._sentryDebugIdIdentifier = "sentry-dbid-b796a7e8-af0c-4ad4-91c9-80d01961210d")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "d409e297a36831321bd01cc6fefa95672d98d375",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "d409e297a36831321bd01cc6fefa95672d98d375"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [798], {
    5780: (e, t, r) => {
      "use strict";
      var i, n = r(8200),
        a = r(4768),
        s = (i = function(e, t) {
          return i = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
          }, i(e, t)
        }, function(e, t) {
          function r() {
            this.constructor = e
          }
          i(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        }),
        o = function() {
          return o = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }, o.apply(this, arguments)
        },
        l = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize"
        },
        h = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize"
        },
        c = {
          width: "20px",
          height: "20px",
          position: "absolute"
        },
        p = {
          top: o(o({}, l), {
            top: "-5px"
          }),
          right: o(o({}, h), {
            left: void 0,
            right: "-5px"
          }),
          bottom: o(o({}, l), {
            top: void 0,
            bottom: "-5px"
          }),
          left: o(o({}, h), {
            left: "-5px"
          }),
          topRight: o(o({}, c), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: o(o({}, c), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: o(o({}, c), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: o(o({}, c), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        u = function(e) {
          function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onMouseDown = function(e) {
              t.props.onResizeStart(e, t.props.direction)
            }, t.onTouchStart = function(e) {
              t.props.onResizeStart(e, t.props.direction)
            }, t
          }
          return s(t, e), t.prototype.render = function() {
            return n.createElement("div", {
              className: this.props.className || "",
              style: o(o({
                position: "absolute",
                userSelect: "none"
              }, p[this.props.direction]), this.props.replaceStyles || {}),
              onMouseDown: this.onMouseDown,
              onTouchStart: this.onTouchStart
            }, this.props.children)
          }, t
        }(n.PureComponent),
        d = function() {
          var e = function(t, r) {
            return e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(e, t) {
              e.__proto__ = t
            } || function(e, t) {
              for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
            }, e(t, r)
          };
          return function(t, r) {
            function i() {
              this.constructor = t
            }
            e(t, r), t.prototype = null === r ? Object.create(r) : (i.prototype = r.prototype, new i)
          }
        }(),
        f = function() {
          return f = Object.assign || function(e) {
            for (var t, r = 1, i = arguments.length; r < i; r++)
              for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }, f.apply(this, arguments)
        },
        m = {
          width: "auto",
          height: "auto"
        },
        g = function(e, t, r) {
          return Math.max(Math.min(e, r), t)
        },
        v = function(e, t) {
          return Math.round(e / t) * t
        },
        y = function(e, t) {
          return new RegExp(e, "i").test(t)
        },
        b = function(e) {
          return Boolean(e.touches && e.touches.length)
        },
        S = function(e, t, r) {
          void 0 === r && (r = 0);
          var i = t.reduce((function(r, i, n) {
              return Math.abs(i - e) < Math.abs(t[r] - e) ? n : r
            }), 0),
            n = Math.abs(t[i] - e);
          return 0 === r || n < r ? t[i] : e
        },
        x = function(e) {
          return "auto" === (e = e.toString()) || e.endsWith("px") || e.endsWith("%") || e.endsWith("vh") || e.endsWith("vw") || e.endsWith("vmax") || e.endsWith("vmin") ? e : e + "px"
        },
        E = function(e, t, r, i) {
          if (e && "string" == typeof e) {
            if (e.endsWith("px")) return Number(e.replace("px", ""));
            if (e.endsWith("%")) return t * (Number(e.replace("%", "")) / 100);
            if (e.endsWith("vw")) return r * (Number(e.replace("vw", "")) / 100);
            if (e.endsWith("vh")) return i * (Number(e.replace("vh", "")) / 100)
          }
          return e
        },
        w = ["as", "style", "className", "grid", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        P = "__resizable_base__";
      ! function(e) {
        function t(t) {
          var r = e.call(this, t) || this;
          return r.ratio = 1, r.resizable = null, r.parentLeft = 0, r.parentTop = 0, r.resizableLeft = 0, r.resizableRight = 0, r.resizableTop = 0, r.resizableBottom = 0, r.targetLeft = 0, r.targetTop = 0, r.appendBase = function() {
            if (!r.resizable || !r.window) return null;
            var e = r.parentNode;
            if (!e) return null;
            var t = r.window.document.createElement("div");
            return t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.transform = "scale(0, 0)", t.style.left = "0", t.style.flex = "0 0 100%", t.classList ? t.classList.add(P) : t.className += P, e.appendChild(t), t
          }, r.removeBase = function(e) {
            var t = r.parentNode;
            t && t.removeChild(e)
          }, r.ref = function(e) {
            e && (r.resizable = e)
          }, r.state = {
            isResizing: !1,
            width: void 0 === (r.propsSize && r.propsSize.width) ? "auto" : r.propsSize && r.propsSize.width,
            height: void 0 === (r.propsSize && r.propsSize.height) ? "auto" : r.propsSize && r.propsSize.height,
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
          }, r.onResizeStart = r.onResizeStart.bind(r), r.onMouseMove = r.onMouseMove.bind(r), r.onMouseUp = r.onMouseUp.bind(r), r
        }
        d(t, e), Object.defineProperty(t.prototype, "parentNode", {
          get: function() {
            return this.resizable ? this.resizable.parentNode : null
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "window", {
          get: function() {
            return this.resizable && this.resizable.ownerDocument ? this.resizable.ownerDocument.defaultView : null
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "propsSize", {
          get: function() {
            return this.props.size || this.props.defaultSize || m
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "size", {
          get: function() {
            var e = 0,
              t = 0;
            if (this.resizable && this.window) {
              var r = this.resizable.offsetWidth,
                i = this.resizable.offsetHeight,
                n = this.resizable.style.position;
              "relative" !== n && (this.resizable.style.position = "relative"), e = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : r, t = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : i, this.resizable.style.position = n
            }
            return {
              width: e,
              height: t
            }
          },
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(t.prototype, "sizeStyle", {
          get: function() {
            var e = this,
              t = this.props.size,
              r = function(t) {
                if (void 0 === e.state[t] || "auto" === e.state[t]) return "auto";
                if (e.propsSize && e.propsSize[t] && e.propsSize[t].toString().endsWith("%")) {
                  if (e.state[t].toString().endsWith("%")) return e.state[t].toString();
                  var r = e.getParentSize();
                  return Number(e.state[t].toString().replace("px", "")) / r[t] * 100 + "%"
                }
                return x(e.state[t])
              };
            return {
              width: t && void 0 !== t.width && !this.state.isResizing ? x(t.width) : r("width"),
              height: t && void 0 !== t.height && !this.state.isResizing ? x(t.height) : r("height")
            }
          },
          enumerable: !1,
          configurable: !0
        }), t.prototype.getParentSize = function() {
          if (!this.parentNode) return this.window ? {
            width: this.window.innerWidth,
            height: this.window.innerHeight
          } : {
            width: 0,
            height: 0
          };
          var e = this.appendBase();
          if (!e) return {
            width: 0,
            height: 0
          };
          var t = !1,
            r = this.parentNode.style.flexWrap;
          "wrap" !== r && (t = !0, this.parentNode.style.flexWrap = "wrap"), e.style.position = "relative", e.style.minWidth = "100%", e.style.minHeight = "100%";
          var i = {
            width: e.offsetWidth,
            height: e.offsetHeight
          };
          return t && (this.parentNode.style.flexWrap = r), this.removeBase(e), i
        }, t.prototype.bindEvents = function() {
          this.window && (this.window.addEventListener("mouseup", this.onMouseUp), this.window.addEventListener("mousemove", this.onMouseMove), this.window.addEventListener("mouseleave", this.onMouseUp), this.window.addEventListener("touchmove", this.onMouseMove, {
            capture: !0,
            passive: !1
          }), this.window.addEventListener("touchend", this.onMouseUp))
        }, t.prototype.unbindEvents = function() {
          this.window && (this.window.removeEventListener("mouseup", this.onMouseUp), this.window.removeEventListener("mousemove", this.onMouseMove), this.window.removeEventListener("mouseleave", this.onMouseUp), this.window.removeEventListener("touchmove", this.onMouseMove, !0), this.window.removeEventListener("touchend", this.onMouseUp))
        }, t.prototype.componentDidMount = function() {
          if (this.resizable && this.window) {
            var e = this.window.getComputedStyle(this.resizable);
            this.setState({
              width: this.state.width || this.size.width,
              height: this.state.height || this.size.height,
              flexBasis: "auto" !== e.flexBasis ? e.flexBasis : void 0
            })
          }
        }, t.prototype.componentWillUnmount = function() {
          this.window && this.unbindEvents()
        }, t.prototype.createSizeForCssProperty = function(e, t) {
          var r = this.propsSize && this.propsSize[t];
          return "auto" !== this.state[t] || this.state.original[t] !== e || void 0 !== r && "auto" !== r ? e : "auto"
        }, t.prototype.calculateNewMaxFromBoundary = function(e, t) {
          var r, i, n = this.props.boundsByDirection,
            a = this.state.direction,
            s = n && y("left", a),
            o = n && y("top", a);
          if ("parent" === this.props.bounds) {
            var l = this.parentNode;
            l && (r = s ? this.resizableRight - this.parentLeft : l.offsetWidth + (this.parentLeft - this.resizableLeft), i = o ? this.resizableBottom - this.parentTop : l.offsetHeight + (this.parentTop - this.resizableTop))
          } else "window" === this.props.bounds ? this.window && (r = s ? this.resizableRight : this.window.innerWidth - this.resizableLeft, i = o ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (r = s ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), i = o ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
          return r && Number.isFinite(r) && (e = e && e < r ? e : r), i && Number.isFinite(i) && (t = t && t < i ? t : i), {
            maxWidth: e,
            maxHeight: t
          }
        }, t.prototype.calculateNewSizeFromDirection = function(e, t) {
          var r = this.props.scale || 1,
            i = this.props.resizeRatio || 1,
            n = this.state,
            a = n.direction,
            s = n.original,
            o = this.props,
            l = o.lockAspectRatio,
            h = o.lockAspectRatioExtraHeight,
            c = o.lockAspectRatioExtraWidth,
            p = s.width,
            u = s.height,
            d = h || 0,
            f = c || 0;
          return y("right", a) && (p = s.width + (e - s.x) * i / r, l && (u = (p - f) / this.ratio + d)), y("left", a) && (p = s.width - (e - s.x) * i / r, l && (u = (p - f) / this.ratio + d)), y("bottom", a) && (u = s.height + (t - s.y) * i / r, l && (p = (u - d) * this.ratio + f)), y("top", a) && (u = s.height - (t - s.y) * i / r, l && (p = (u - d) * this.ratio + f)), {
            newWidth: p,
            newHeight: u
          }
        }, t.prototype.calculateNewSizeFromAspectRatio = function(e, t, r, i) {
          var n = this.props,
            a = n.lockAspectRatio,
            s = n.lockAspectRatioExtraHeight,
            o = n.lockAspectRatioExtraWidth,
            l = void 0 === i.width ? 10 : i.width,
            h = void 0 === r.width || r.width < 0 ? e : r.width,
            c = void 0 === i.height ? 10 : i.height,
            p = void 0 === r.height || r.height < 0 ? t : r.height,
            u = s || 0,
            d = o || 0;
          if (a) {
            var f = (c - u) * this.ratio + d,
              m = (p - u) * this.ratio + d,
              v = (l - d) / this.ratio + u,
              y = (h - d) / this.ratio + u,
              b = Math.max(l, f),
              S = Math.min(h, m),
              x = Math.max(c, v),
              E = Math.min(p, y);
            e = g(e, b, S), t = g(t, x, E)
          } else e = g(e, l, h), t = g(t, c, p);
          return {
            newWidth: e,
            newHeight: t
          }
        }, t.prototype.setBoundingClientRect = function() {
          if ("parent" === this.props.bounds) {
            var e = this.parentNode;
            if (e) {
              var t = e.getBoundingClientRect();
              this.parentLeft = t.left, this.parentTop = t.top
            }
          }
          if (this.props.bounds && "string" != typeof this.props.bounds) {
            var r = this.props.bounds.getBoundingClientRect();
            this.targetLeft = r.left, this.targetTop = r.top
          }
          if (this.resizable) {
            var i = this.resizable.getBoundingClientRect(),
              n = i.left,
              a = i.top,
              s = i.right,
              o = i.bottom;
            this.resizableLeft = n, this.resizableRight = s, this.resizableTop = a, this.resizableBottom = o
          }
        }, t.prototype.onResizeStart = function(e, t) {
          if (this.resizable && this.window) {
            var r, i = 0,
              n = 0;
            if (e.nativeEvent && function(e) {
                return Boolean((e.clientX || 0 === e.clientX) && (e.clientY || 0 === e.clientY))
              }(e.nativeEvent) ? (i = e.nativeEvent.clientX, n = e.nativeEvent.clientY) : e.nativeEvent && b(e.nativeEvent) && (i = e.nativeEvent.touches[0].clientX, n = e.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(e, t, this.resizable)) return;
            this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
              height: this.props.size.height
            }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
              width: this.props.size.width
            })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
            var a = this.window.getComputedStyle(this.resizable);
            if ("auto" !== a.flexBasis) {
              var s = this.parentNode;
              if (s) {
                var o = this.window.getComputedStyle(s).flexDirection;
                this.flexDir = o.startsWith("row") ? "row" : "column", r = a.flexBasis
              }
            }
            this.setBoundingClientRect(), this.bindEvents();
            var l = {
              original: {
                x: i,
                y: n,
                width: this.size.width,
                height: this.size.height
              },
              isResizing: !0,
              backgroundStyle: f(f({}, this.state.backgroundStyle), {
                cursor: this.window.getComputedStyle(e.target).cursor || "auto"
              }),
              direction: t,
              flexBasis: r
            };
            this.setState(l)
          }
        }, t.prototype.onMouseMove = function(e) {
          var t = this;
          if (this.state.isResizing && this.resizable && this.window) {
            if (this.window.TouchEvent && b(e)) try {
              e.preventDefault(), e.stopPropagation()
            } catch (e) {}
            var r = this.props,
              i = r.maxWidth,
              n = r.maxHeight,
              s = r.minWidth,
              o = r.minHeight,
              l = b(e) ? e.touches[0].clientX : e.clientX,
              h = b(e) ? e.touches[0].clientY : e.clientY,
              c = this.state,
              p = c.direction,
              u = c.original,
              d = c.width,
              f = c.height,
              m = this.getParentSize(),
              g = function(e, t, r, i, n, a, s) {
                return i = E(i, e.width, t, r), n = E(n, e.height, t, r), a = E(a, e.width, t, r), s = E(s, e.height, t, r), {
                  maxWidth: void 0 === i ? void 0 : Number(i),
                  maxHeight: void 0 === n ? void 0 : Number(n),
                  minWidth: void 0 === a ? void 0 : Number(a),
                  minHeight: void 0 === s ? void 0 : Number(s)
                }
              }(m, this.window.innerWidth, this.window.innerHeight, i, n, s, o);
            i = g.maxWidth, n = g.maxHeight, s = g.minWidth, o = g.minHeight;
            var y = this.calculateNewSizeFromDirection(l, h),
              x = y.newHeight,
              w = y.newWidth,
              P = this.calculateNewMaxFromBoundary(i, n);
            this.props.snap && this.props.snap.x && (w = S(w, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (x = S(x, this.props.snap.y, this.props.snapGap));
            var T = this.calculateNewSizeFromAspectRatio(w, x, {
              width: P.maxWidth,
              height: P.maxHeight
            }, {
              width: s,
              height: o
            });
            if (w = T.newWidth, x = T.newHeight, this.props.grid) {
              var C = v(w, this.props.grid[0]),
                _ = v(x, this.props.grid[1]),
                M = this.props.snapGap || 0;
              w = 0 === M || Math.abs(C - w) <= M ? C : w, x = 0 === M || Math.abs(_ - x) <= M ? _ : x
            }
            var A = {
              width: w - u.width,
              height: x - u.height
            };
            d && "string" == typeof d && (d.endsWith("%") ? w = w / m.width * 100 + "%" : d.endsWith("vw") ? w = w / this.window.innerWidth * 100 + "vw" : d.endsWith("vh") && (w = w / this.window.innerHeight * 100 + "vh")), f && "string" == typeof f && (f.endsWith("%") ? x = x / m.height * 100 + "%" : f.endsWith("vw") ? x = x / this.window.innerWidth * 100 + "vw" : f.endsWith("vh") && (x = x / this.window.innerHeight * 100 + "vh"));
            var k = {
              width: this.createSizeForCssProperty(w, "width"),
              height: this.createSizeForCssProperty(x, "height")
            };
            "row" === this.flexDir ? k.flexBasis = k.width : "column" === this.flexDir && (k.flexBasis = k.height), (0, a.flushSync)((function() {
              t.setState(k)
            })), this.props.onResize && this.props.onResize(e, p, this.resizable, A)
          }
        }, t.prototype.onMouseUp = function(e) {
          var t = this.state,
            r = t.isResizing,
            i = t.direction,
            n = t.original;
          if (r && this.resizable) {
            var a = {
              width: this.size.width - n.width,
              height: this.size.height - n.height
            };
            this.props.onResizeStop && this.props.onResizeStop(e, i, this.resizable, a), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
              isResizing: !1,
              backgroundStyle: f(f({}, this.state.backgroundStyle), {
                cursor: "auto"
              })
            })
          }
        }, t.prototype.updateSize = function(e) {
          this.setState({
            width: e.width,
            height: e.height
          })
        }, t.prototype.renderResizer = function() {
          var e = this,
            t = this.props,
            r = t.enable,
            i = t.handleStyles,
            a = t.handleClasses,
            s = t.handleWrapperStyle,
            o = t.handleWrapperClass,
            l = t.handleComponent;
          if (!r) return null;
          var h = Object.keys(r).map((function(t) {
            return !1 !== r[t] ? n.createElement(u, {
              key: t,
              direction: t,
              onResizeStart: e.onResizeStart,
              replaceStyles: i && i[t],
              className: a && a[t]
            }, l && l[t] ? l[t] : null) : null
          }));
          return n.createElement("div", {
            className: o,
            style: s
          }, h)
        }, t.prototype.render = function() {
          var e = this,
            t = Object.keys(this.props).reduce((function(t, r) {
              return -1 !== w.indexOf(r) || (t[r] = e.props[r]), t
            }), {}),
            r = f(f(f({
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
          this.state.flexBasis && (r.flexBasis = this.state.flexBasis);
          var i = this.props.as || "div";
          return n.createElement(i, f({
            ref: this.ref,
            style: r,
            className: this.props.className
          }, t), this.state.isResizing && n.createElement("div", {
            style: this.state.backgroundStyle
          }), this.props.children, this.renderResizer())
        }, t.defaultProps = {
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
      }(n.PureComponent)
    },
    6896: (e, t, r) => {
      "use strict";
      var i = u(r(3752)),
        n = u(r(1736)),
        a = u(r(1944)),
        s = u(r(2352)),
        o = u(r(7056)),
        l = u(r(2484)),
        h = u(r(8200)),
        c = u(r(6048)),
        p = u(r(4368));

      function u(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      var d = function(e) {
        function t() {
          var e, r, i, s;
          (0, a.default)(this, t);
          for (var l = arguments.length, h = Array(l), c = 0; c < l; c++) h[c] = arguments[c];
          return r = i = (0, o.default)(this, (e = t.__proto__ || (0, n.default)(t)).call.apply(e, [this].concat(h))), i.handleClickToPause = function() {
            i.anim.isPaused ? i.anim.play() : i.anim.pause()
          }, s = r, (0, o.default)(i, s)
        }
        return (0, l.default)(t, e), (0, s.default)(t, [{
          key: "componentDidMount",
          value: function() {
            var e = this.props,
              t = e.options,
              r = e.eventListeners,
              n = t.loop,
              a = t.autoplay,
              s = t.animationData,
              o = t.rendererSettings,
              l = t.segments;
            this.options = {
              container: this.el,
              renderer: "svg",
              loop: !1 !== n,
              autoplay: !1 !== a,
              segments: !1 !== l,
              animationData: s,
              rendererSettings: o
            }, this.options = (0, i.default)({}, this.options, t), this.anim = p.default.loadAnimation(this.options), this.registerEvents(r)
          }
        }, {
          key: "componentWillUpdate",
          value: function(e) {
            this.options.animationData !== e.options.animationData && (this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options = (0, i.default)({}, this.options, e.options), this.anim = p.default.loadAnimation(this.options), this.registerEvents(e.eventListeners))
          }
        }, {
          key: "componentDidUpdate",
          value: function() {
            this.props.isStopped ? this.stop() : this.props.segments ? this.playSegments() : this.play(), this.pause(), this.setSpeed(), this.setDirection()
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.deRegisterEvents(this.props.eventListeners), this.destroy(), this.options.animationData = null, this.anim = null
          }
        }, {
          key: "setSpeed",
          value: function() {
            this.anim.setSpeed(this.props.speed)
          }
        }, {
          key: "setDirection",
          value: function() {
            this.anim.setDirection(this.props.direction)
          }
        }, {
          key: "play",
          value: function() {
            this.anim.play()
          }
        }, {
          key: "playSegments",
          value: function() {
            this.anim.playSegments(this.props.segments)
          }
        }, {
          key: "stop",
          value: function() {
            this.anim.stop()
          }
        }, {
          key: "pause",
          value: function() {
            (this.props.isPaused && !this.anim.isPaused || !this.props.isPaused && this.anim.isPaused) && this.anim.pause()
          }
        }, {
          key: "destroy",
          value: function() {
            this.anim.destroy()
          }
        }, {
          key: "registerEvents",
          value: function(e) {
            var t = this;
            e.forEach((function(e) {
              t.anim.addEventListener(e.eventName, e.callback)
            }))
          }
        }, {
          key: "deRegisterEvents",
          value: function(e) {
            var t = this;
            e.forEach((function(e) {
              t.anim.removeEventListener(e.eventName, e.callback)
            }))
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.width,
              n = t.height,
              a = t.ariaRole,
              s = t.ariaLabel,
              o = t.isClickToPauseDisabled,
              l = t.title,
              c = function(e) {
                return "number" == typeof e ? e + "px" : e || "100%"
              },
              p = (0, i.default)({
                width: c(r),
                height: c(n),
                overflow: "hidden",
                margin: "0 auto",
                outline: "none"
              }, this.props.style),
              u = o ? function() {
                return null
              } : this.handleClickToPause;
            return h.default.createElement("div", {
              ref: function(t) {
                e.el = t
              },
              style: p,
              onClick: u,
              title: l,
              role: a,
              "aria-label": s,
              tabIndex: "0"
            })
          }
        }]), t
      }(h.default.Component);
      d.propTypes = {
        eventListeners: c.default.arrayOf(c.default.object),
        options: c.default.object.isRequired,
        height: c.default.oneOfType([c.default.string, c.default.number]),
        width: c.default.oneOfType([c.default.string, c.default.number]),
        isStopped: c.default.bool,
        isPaused: c.default.bool,
        speed: c.default.number,
        segments: c.default.arrayOf(c.default.number),
        direction: c.default.number,
        ariaRole: c.default.string,
        ariaLabel: c.default.string,
        isClickToPauseDisabled: c.default.bool,
        title: c.default.string
      }, d.defaultProps = {
        eventListeners: [],
        isStopped: !1,
        isPaused: !1,
        speed: 1,
        ariaRole: "button",
        ariaLabel: "animation",
        isClickToPauseDisabled: !1,
        title: ""
      }
    },
    6116: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function e(t, r, i) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var n = r.y0,
          a = r.y1,
          s = r.x1,
          o = r.x0,
          l = "%" === a.unit && "%" === n.unit,
          h = n.value,
          c = a.value;
        if (l) {
          var p = t.height / 100;
          h = n.value * p, c = a.value * p
        }
        var u = "%" === s.unit && "%" === o.unit,
          d = o.value,
          f = s.value;
        if (u) {
          var m = t.width / 100;
          d = o.value * m, f = s.value * m
        }
        var g = Math.abs(h) + Math.abs(c);
        this.totalDistY = i.height + t.height + g;
        var v = i.height + t.height + (c > h ? -1 * g : g),
          y = Math.abs(d) + Math.abs(f);
        this.totalDistX = i.width + t.width + y;
        var b = i.width + t.width + (f > d ? -1 * y : y),
          S = t.originTotalDistY / v,
          x = t.originTotalDistX / b;
        this.top = t.top, this.bottom = t.bottom, h < 0 && (this.top = this.top + h * S), c > 0 && (this.bottom = this.bottom + c * S), this.left = t.left, this.right = t.right, d < 0 && (this.left = this.left + d * x), f > 0 && (this.right = this.right + f * x)
      }
    },
    3840: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Element = void 0;
      var i = r(7268),
        n = r(2996),
        a = r(7360),
        s = l(r(6116)),
        o = l(r(9919));

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? h(Object(r), !0).forEach((function(t) {
            p(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : h(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function p(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      var d = function() {
        function e(t) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.elInner = t.elInner, this.elOuter = t.elOuter, this.props = t.props, this.scrollAxis = t.scrollAxis, this.id = (0, i.createId)(), this.offsets = (0, n.getOffsets)(this.props), this.isInView = null, this.percent = 0, this.updatePosition = t.scrollAxis === a.VERTICAL ? this._updatePositionVertical : this._updatePositionHorizontal
        }
        var t, r;
        return t = e, (r = [{
          key: "updateProps",
          value: function(e) {
            return this.props = c(c({}, this.props), e), this.offsets = (0, n.getOffsets)(e), this
          }
        }, {
          key: "setCachedAttributes",
          value: function(e, t) {
            return this.rect = new o.default(this.elOuter, e, t), this.bounds = new s.default(this.rect, this.offsets, e), this
          }
        }, {
          key: "_updatePositionHorizontal",
          value: function(e, t) {
            return this.isInView = (0, n.isElementInView)(this.bounds.left, this.bounds.right, e.width, t.x), this.isInView ? (this.percent = (0, n.percentMoved)(this.rect.left, this.rect.originTotalDistX, e.width, t.x), (0, n.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }, {
          key: "_updatePositionVertical",
          value: function(e, t) {
            return this.isInView = (0, n.isElementInView)(this.bounds.top, this.bounds.bottom, e.height, t.y), this.isInView ? (this.percent = (0, n.percentMoved)(this.rect.top, this.rect.originTotalDistY, e.height, t.y), (0, n.setParallaxStyles)(this.elInner, this.offsets, this.percent), this) : this
          }
        }]) && u(t.prototype, r), e
      }();
      t.Element = d
    },
    7424: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = r(7268),
        n = r(2996),
        a = r(1160),
        s = r(896),
        o = r(3840),
        l = r(7360);

      function h(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
        return i
      }

      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function p(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(Object(r), !0).forEach((function(t) {
            u(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function u(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function d(e) {
        var t = e.scrollAxis,
          r = void 0 === t ? l.VERTICAL : t,
          c = e.scrollContainer,
          u = [],
          d = !!c,
          f = c || window,
          m = d ? f.scrollLeft : window.pageXOffset,
          g = d ? f.scrollTop : window.pageYOffset,
          v = new s.Scroll(m, g),
          y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: c
          }),
          b = !1,
          S = (0, i.testForPassiveScroll)();

        function x(e) {
          e.addEventListener("scroll", w, !!S && {
            passive: !0
          }), window.addEventListener("resize", P, !1)
        }

        function E(e) {
          e.removeEventListener("scroll", w, !!S && {
            passive: !0
          }), window.removeEventListener("resize", P, !1)
        }

        function w() {
          var e = d ? f.scrollLeft : window.pageXOffset,
            t = d ? f.scrollTop : window.pageYOffset;
          v.setScroll(e, t), !b && u.length > 0 && (b = !0, window.requestAnimationFrame(T))
        }

        function P() {
          _(), T({
            updateCache: !0
          })
        }

        function T() {
          var e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}).updateCache;
          u && u.forEach((function(t) {
            C(t), e && t.setCachedAttributes(y, v)
          })), b = !1
        }

        function C(e) {
          e.props.disabled || e.updatePosition(y, v)
        }

        function _() {
          if (d) {
            var e = f.offsetWidth,
              t = f.offsetHeight;
            return y.setSize(e, t)
          }
          var r = document.documentElement,
            i = window.innerWidth || r.clientWidth,
            n = window.innerHeight || r.clientHeight;
          return y.setSize(i, n)
        }
        x(f), _(), this.getElements = function() {
          return u
        }, this.createElement = function(e) {
          var t, i = new o.Element(p(p({}, e), {}, {
            scrollAxis: r
          }));
          return i.setCachedAttributes(y, v), u = u ? [].concat(function(e) {
            if (Array.isArray(e)) return h(e)
          }(t = u) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(t) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return h(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? h(e, t) : void 0
            }
          }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }(), [i]) : [i], C(i), i
        }, this.removeElementById = function(e) {
          u && (u = u.filter((function(t) {
            return t.id !== e
          })))
        }, this.updateElementPropsById = function(e, t) {
          u && (u = u.map((function(r) {
            return r.id === e ? r.updateProps(t) : r
          }))), this.update()
        }, this.resetElementStyles = function(e) {
          (0, n.resetStyles)(e)
        }, this.update = function() {
          var e = d ? f.scrollLeft : window.pageXOffset,
            t = d ? f.scrollTop : window.pageYOffset;
          v.setScroll(e, t), _(), T({
            updateCache: !0
          })
        }, this.updateScrollContainer = function(e) {
          E(f), f = e, d = !!e, y = new a.View({
            width: 0,
            height: 0,
            scrollContainer: e
          }), _(), x(f), T({
            updateCache: !0
          })
        }, this.destroy = function() {
          E(f), u && u.forEach((function(e) {
            return (0, n.resetStyles)(e)
          })), u = void 0
        }
      }
      d.init = function(e) {
        if ("undefined" == typeof window) throw new Error("Looks like ParallaxController.init() was called on the server. This method must be called on the client.");
        return new d(e)
      };
      var f = d;
      t.default = f
    },
    9919: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      t.default = function e(t, r, i) {
        ! function(e, t) {
          if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
        }(this, e);
        var n = t.getBoundingClientRect();
        if (r.scrollContainer) {
          var a = r.scrollContainer.getBoundingClientRect();
          n = {
            top: n.top - a.top,
            right: n.right - a.left,
            bottom: n.bottom - a.top,
            left: n.left - a.left
          }
        }
        this.height = t.offsetHeight, this.width = t.offsetWidth, this.left = n.left + i.x, this.right = n.right + i.x, this.top = n.top + i.y, this.bottom = n.bottom + i.y, this.originTotalDistY = r.height + this.height, this.originTotalDistX = r.width + this.width
      }
    },
    896: (e, t) => {
      "use strict";

      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.Scroll = void 0;
      var i = function() {
        function e() {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.setScroll.apply(this, arguments)
        }
        var t, i;
        return t = e, (i = [{
          key: "setScroll",
          value: function(e, t) {
            return this.x = e, this.y = t, this
          }
        }]) && r(t.prototype, i), e
      }();
      t.Scroll = i
    },
    1160: (e, t) => {
      "use strict";

      function r(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.View = void 0;
      var i = function() {
        function e(t) {
          var r = t.width,
            i = t.height,
            n = t.scrollContainer;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), this.scrollContainer = n, this.setSize(r, i)
        }
        var t, i;
        return t = e, (i = [{
          key: "setSize",
          value: function(e, t) {
            return this.width = e, this.height = t, this
          }
        }]) && r(t.prototype, i), e
      }();
      t.View = i
    },
    5040: (e, t, r) => {
      "use strict";

      function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== i(e) && "function" != typeof e) return {
            default: e
          };
          var t = h();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(e, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
            } return r.default = e, t && t.set(e, r), r
        }(r(8200)),
        a = l(r(6048)),
        s = l(r(7424)),
        o = l(r(1432));

      function l(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function h() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return h = function() {
          return e
        }, e
      }

      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function p(e, t) {
        return p = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, p(e, t)
      }

      function u(e) {
        if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return e
      }

      function d(e) {
        return d = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, d(e)
      }

      function f(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var m = function(e) {
        ! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && p(e, t)
        }(h, e);
        var t, r, a, o, l = (a = h, o = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, t = d(a);
          if (o) {
            var r = d(this).constructor;
            e = Reflect.construct(t, arguments, r)
          } else e = t.apply(this, arguments);
          return function(e, t) {
            return !t || "object" !== i(t) && "function" != typeof t ? u(e) : t
          }(this, e)
        });

        function h() {
          var e;
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, h);
          for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++) r[i] = arguments[i];
          return f(u(e = l.call.apply(l, [this].concat(r))), "mapRefOuter", (function(t) {
            e._outer = t
          })), f(u(e), "mapRefInner", (function(t) {
            e._inner = t
          })), e
        }
        return t = h, (r = [{
          key: "componentDidMount",
          value: function() {
            var e = this.controller instanceof s.default;
            if (!this.controller && !e) throw new Error("Must wrap your application's <Parallax /> components in a <ParallaxProvider />.");
            this.element = this.controller.createElement(this._getElementOptions())
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.props.disabled === e.disabled && this.props.x[0] === e.x[0] && this.props.x[1] === e.x[1] && this.props.y[0] === e.y[0] && this.props.y[1] === e.y[1] || this.controller.updateElementPropsById(this.element.id, this._getElementOptions().props), this.props.disabled !== e.disabled && this.props.disabled && this.controller.resetElementStyles(this.element)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller.removeElementById(this.element.id)
          }
        }, {
          key: "_getElementOptions",
          value: function() {
            return {
              elInner: this._inner,
              elOuter: this._outer,
              props: {
                disabled: this.props.disabled,
                x0: this.props.x[0],
                x1: this.props.x[1],
                y0: this.props.y[0],
                y1: this.props.y[1]
              }
            }
          }
        }, {
          key: "controller",
          get: function() {
            return this.props.parallaxController
          }
        }, {
          key: "render",
          value: function() {
            var e = this.props,
              t = e.children,
              r = e.className,
              i = e.tagOuter,
              a = e.tagInner,
              s = e.styleOuter,
              o = e.styleInner,
              l = "parallax-outer" + (r ? " ".concat(r) : "");
            return n.default.createElement(i, {
              className: l,
              ref: this.mapRefOuter,
              style: s
            }, n.default.createElement(a, {
              className: "parallax-inner",
              ref: this.mapRefInner,
              style: o
            }, t))
          }
        }]) && c(t.prototype, r), h
      }(n.Component);
      f(m, "defaultProps", {
        disabled: !1,
        tagInner: "div",
        tagOuter: "div",
        x: [0, 0],
        y: [0, 0]
      }), f(m, "propTypes", {
        children: a.default.node,
        className: a.default.string,
        disabled: a.default.bool.isRequired,
        parallaxController: a.default.object,
        styleInner: a.default.object,
        styleOuter: a.default.object,
        tagInner: a.default.string.isRequired,
        tagOuter: a.default.string.isRequired,
        x: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.number])),
        y: a.default.arrayOf(a.default.oneOfType([a.default.string, a.default.number]))
      });
      var g = (0, o.default)(m);
      t.default = g
    },
    9920: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i = s(r(8200)),
        n = s(r(6048)),
        a = s(r(5040));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function o() {
        return o = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }, o.apply(this, arguments)
      }

      function l(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          t && (i = i.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, i)
        }
        return r
      }

      function h(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? l(Object(r), !0).forEach((function(t) {
            c(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : l(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function c(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var p = {
          position: "relative",
          overflow: "hidden",
          width: "100%",
          height: "50vh"
        },
        u = {
          position: "absolute",
          top: 0,
          right: 0,
          bottom: 0,
          left: 0
        },
        d = function(e) {
          var t = e.children,
            r = e.className,
            n = e.layers,
            s = e.style,
            l = e.disabled;
          return i.default.createElement("div", {
            style: h(h({}, p), s),
            className: "parallax-banner" + (r ? " ".concat(r) : "")
          }, n.map((function(e, t) {
            var r = e.amount,
              n = e.children,
              s = e.expanded,
              c = void 0 === s || s,
              p = e.image,
              d = e.props,
              f = void 0 === d ? {} : d,
              m = f.style || {},
              g = f.className || "";
            delete f.style, delete f.className;
            var v = "parallax-banner-layer-".concat(t).concat(g ? " ".concat(g) : ""),
              y = c ? {
                top: 100 * Math.abs(r) * -1 + "%",
                bottom: 100 * Math.abs(r) * -1 + "%"
              } : {},
              b = p ? {
                backgroundImage: "url(".concat(p, ")"),
                backgroundPosition: "center",
                backgroundSize: "cover"
              } : {};
            return i.default.createElement(a.default, {
              key: "layer-".concat(t),
              y: [-1 * r * 100 + "%", 100 * r + "%"],
              styleInner: u,
              styleOuter: u,
              disabled: l
            }, i.default.createElement("div", o({
              className: v,
              style: h(h(h(h({}, b), u), y), m)
            }, f), n))
          })), t)
        };
      d.defaultProps = {
        disabled: !1
      }, d.propTypes = {
        children: n.default.node,
        className: n.default.string,
        disabled: n.default.bool.isRequired,
        layers: n.default.arrayOf(n.default.shape({
          amount: n.default.number.isRequired,
          children: n.default.oneOfType([n.default.node, n.default.func]),
          expanded: n.default.bool,
          image: n.default.string,
          props: n.default.object
        })),
        style: n.default.object
      };
      var f = d;
      t.default = f
    },
    9436: (e, t, r) => {
      "use strict";

      function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== i(e) && "function" != typeof e) return {
            default: e
          };
          var t = p();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(e, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
            } return r.default = e, t && t.set(e, r), r
        }(r(8200)),
        a = c(r(6048)),
        s = c(r(2488)),
        o = c(r(7424)),
        l = r(7360),
        h = c(r(3888));

      function c(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function p() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return p = function() {
          return e
        }, e
      }

      function u(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function d(e, t) {
        return d = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, d(e, t)
      }

      function f(e) {
        return f = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, f(e)
      }

      function m(e, t, r) {
        return t in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }
      var g = function(e) {
        ! function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              writable: !0,
              configurable: !0
            }
          }), t && d(e, t)
        }(c, e);
        var t, r, a, l, h = (a = c, l = function() {
          if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
          if (Reflect.construct.sham) return !1;
          if ("function" == typeof Proxy) return !0;
          try {
            return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
          } catch (e) {
            return !1
          }
        }(), function() {
          var e, t = f(a);
          if (l) {
            var r = f(this).constructor;
            e = Reflect.construct(t, arguments, r)
          } else e = t.apply(this, arguments);
          return function(e, t) {
            return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
              if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
              return e
            }(e) : t
          }(this, e)
        });

        function c(e) {
          var t, r;
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, c), (t = h.call(this, e)).controller = (r = {
            scrollAxis: e.scrollAxis,
            scrollContainer: e.scrollContainer
          }, "undefined" == typeof window ? null : o.default.init(r)), t
        }
        return t = c, (r = [{
          key: "componentDidUpdate",
          value: function(e) {
            e.scrollContainer !== this.props.scrollContainer && this.controller.updateScrollContainer(this.props.scrollContainer)
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.controller = this.controller.destroy()
          }
        }, {
          key: "render",
          value: function() {
            var e = this.props.children;
            return n.default.createElement(s.default.Provider, {
              value: this.controller
            }, e)
          }
        }]) && u(t.prototype, r), c
      }(n.Component);
      t.default = g, m(g, "defaultProps", {
        scrollAxis: l.VERTICAL
      }), m(g, "propTypes", {
        children: a.default.node.isRequired,
        scrollAxis: a.default.oneOf([l.VERTICAL, l.HORIZONTAL]),
        scrollContainer: h.default
      })
    },
    1752: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var i, n = r(8200),
        a = (i = r(2488)) && i.__esModule ? i : {
          default: i
        };
      t.default = function() {
        var e = (0, n.useContext)(a.default);
        if ("undefined" == typeof window) return null;
        if (!e) throw new Error("Could not find `react-scroll-parallax` context value. Please ensure the component is wrapped in a <ParallaxProvider>");
        return {
          parallaxController: e
        }
      }
    },
    1432: (e, t, r) => {
      "use strict";

      function i(e) {
        return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, i(e)
      }
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = function(e) {
          if (e && e.__esModule) return e;
          if (null === e || "object" !== i(e) && "function" != typeof e) return {
            default: e
          };
          var t = l();
          if (t && t.has(e)) return t.get(e);
          var r = {},
            n = Object.defineProperty && Object.getOwnPropertyDescriptor;
          for (var a in e)
            if (Object.prototype.hasOwnProperty.call(e, a)) {
              var s = n ? Object.getOwnPropertyDescriptor(e, a) : null;
              s && (s.get || s.set) ? Object.defineProperty(r, a, s) : r[a] = e[a]
            } return r.default = e, t && t.set(e, r), r
        }(r(8200)),
        a = o(r(6048)),
        s = o(r(2488));

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function l() {
        if ("function" != typeof WeakMap) return null;
        var e = new WeakMap;
        return l = function() {
          return e
        }, e
      }

      function h() {
        return h = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }, h.apply(this, arguments)
      }

      function c(e, t) {
        for (var r = 0; r < t.length; r++) {
          var i = t[r];
          i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
        }
      }

      function p(e, t) {
        return p = Object.setPrototypeOf || function(e, t) {
          return e.__proto__ = t, e
        }, p(e, t)
      }

      function u(e) {
        return u = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, u(e)
      }
      t.default = function(e) {
        var t, r, o, l = function(t) {
          ! function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), t && p(e, t)
          }(f, t);
          var r, a, o, l, d = (o = f, l = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }(), function() {
            var e, t = u(o);
            if (l) {
              var r = u(this).constructor;
              e = Reflect.construct(t, arguments, r)
            } else e = t.apply(this, arguments);
            return function(e, t) {
              return !t || "object" !== i(t) && "function" != typeof t ? function(e) {
                if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return e
              }(e) : t
            }(this, e)
          });

          function f() {
            return function(e, t) {
              if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }(this, f), d.apply(this, arguments)
          }
          return r = f, (a = [{
            key: "render",
            value: function() {
              var t = this;
              return n.default.createElement(s.default.Consumer, null, (function(r) {
                return n.default.createElement(e, h({
                  parallaxController: r
                }, t.props))
              }))
            }
          }]) && c(r.prototype, a), f
        }(n.Component);
        return t = l, r = "propTypes", o = {
          parallaxController: a.default.object
        }, r in t ? Object.defineProperty(t, r, {
          value: o,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : t[r] = o, l
      }
    },
    7360: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.HORIZONTAL = t.VERTICAL = void 0, t.VERTICAL = "vertical", t.HORIZONTAL = "horizontal"
    },
    2488: (e, t, r) => {
      "use strict";
      var i;
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = void 0;
      var n = ((i = r(8200)) && i.__esModule ? i : {
        default: i
      }).default.createContext(null);
      t.default = n
    },
    3224: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.setParallaxStyles = function(e, t, r) {
        var n = (0, i.getParallaxOffsets)(t, r),
          a = n.x,
          s = a.value,
          o = a.unit,
          l = n.y,
          h = l.value,
          c = l.unit;
        e.style.transform = "translate3d(".concat(s).concat(o, ", ").concat(h).concat(c, ", 0)")
      }, t.resetStyles = function(e) {
        e.elInner.style.transform = ""
      };
      var i = r(8852)
    },
    260: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = e.y0,
          r = e.y1,
          n = e.x1,
          a = e.x0,
          s = (0, i.parseValueAndUnit)(t),
          o = (0, i.parseValueAndUnit)(r),
          l = (0, i.parseValueAndUnit)(a),
          h = (0, i.parseValueAndUnit)(n);
        if (l.unit !== h.unit || s.unit !== o.unit) throw new Error("Must provide matching units for the min and max offset values of each axis.");
        return {
          xUnit: l.unit || "%",
          yUnit: s.unit || "%",
          y0: s,
          y1: o,
          x0: l,
          x1: h
        }
      };
      var i = r(7268)
    },
    8852: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.getParallaxOffsets = function(e, t) {
        var r = e.y0,
          n = e.y1,
          a = e.x0,
          s = e.x1,
          o = n.unit,
          l = s.unit;
        return {
          x: {
            value: (0, i.scaleBetween)(t, a.value, s.value, 0, 100),
            unit: l
          },
          y: {
            value: (0, i.scaleBetween)(t, r.value, n.value, 0, 100),
            unit: o
          }
        }
      };
      var i = r(7268)
    },
    2996: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "ParallaxContext", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(t, "percentMoved", {
        enumerable: !0,
        get: function() {
          return n.percentMoved
        }
      }), Object.defineProperty(t, "setParallaxStyles", {
        enumerable: !0,
        get: function() {
          return a.setParallaxStyles
        }
      }), Object.defineProperty(t, "resetStyles", {
        enumerable: !0,
        get: function() {
          return a.resetStyles
        }
      }), Object.defineProperty(t, "getParallaxOffsets", {
        enumerable: !0,
        get: function() {
          return s.getParallaxOffsets
        }
      }), Object.defineProperty(t, "isElementInView", {
        enumerable: !0,
        get: function() {
          return o.isElementInView
        }
      }), Object.defineProperty(t, "getOffsets", {
        enumerable: !0,
        get: function() {
          return l.default
        }
      });
      var i = h(r(2488)),
        n = r(2376),
        a = r(3224),
        s = r(8852),
        o = r(204),
        l = h(r(260));

      function h(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    204: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.isElementInView = function(e, t, r, i) {
        var n = e - i,
          a = t - i;
        return n >= 0 && n <= r || a >= 0 && a <= r || n <= 0 && a >= r
      }
    },
    2376: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.percentMoved = function(e, t, r, i) {
        return (-1 * (e - i) + r) / t * 100
      }
    },
    5324: (e, t, r) => {
      "use strict";
      i(r(1752)), i(r(1432)), i(r(5040)), i(r(9436)), i(r(9920)), i(r(2488));

      function i(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    1120: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.createId = function() {
        return ++r
      };
      var r = 0
    },
    7268: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), Object.defineProperty(t, "parseValueAndUnit", {
        enumerable: !0,
        get: function() {
          return i.default
        }
      }), Object.defineProperty(t, "scaleBetween", {
        enumerable: !0,
        get: function() {
          return n.default
        }
      }), Object.defineProperty(t, "testForPassiveScroll", {
        enumerable: !0,
        get: function() {
          return a.default
        }
      }), Object.defineProperty(t, "createId", {
        enumerable: !0,
        get: function() {
          return s.createId
        }
      });
      var i = o(r(5888)),
        n = o(r(5688)),
        a = o(r(2752)),
        s = r(1120);

      function o(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
    },
    5888: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
          value: 0,
          unit: "px"
        };
        if ("number" != typeof e && "string" != typeof e) throw new Error("Invalid value provided. Must provide a value as a string or number");
        if (e = String(e), t.value = parseFloat(e, 10), t.unit = e.match(/[\d.\-\+]*\s*(.*)/)[1] || "%", !["px", "%"].find((function(e) {
            return e === t.unit
          }))) throw new Error("Invalid unit provided. Must provide a unit of px in or %");
        return t
      }
    },
    5688: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t, r, i, n) {
        return (r - t) * (e - i) / (n - i) + t
      }
    },
    2752: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        var e = !1;
        try {
          var t = Object.defineProperty({}, "passive", {
            get: function() {
              e = !0
            }
          });
          window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
        } catch (e) {}
        return e
      }
    },
    3888: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "ANONYMOUS";
        return "undefined" == typeof window || !e[t] || e[t] instanceof window.Element ? null : new Error('Prop name "'.concat(t, '" in <').concat(r, "> must be an HTML DOM element."))
      }
    },
    1392: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var i = Object.assign || function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        },
        n = function() {
          function e(e, t) {
            for (var r = 0; r < t.length; r++) {
              var i = t[r];
              i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), Object.defineProperty(e, i.key, i)
            }
          }
          return function(t, r, i) {
            return r && e(t.prototype, r), i && e(t, i), t
          }
        }(),
        a = d(r(8200)),
        s = d(r(6048)),
        o = d(r(8156)),
        l = d(r(1508)),
        h = d(r(7464)),
        c = d(r(3812)),
        p = d(r(6240)),
        u = r(7896);

      function d(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function f(e, t) {
        return e.scrollWidth - 1 <= t
      }

      function m(e, t) {
        return e.scrollHeight - 1 <= t
      }
      var g = function(e) {
        function t(e) {
          ! function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, t);
          var r = function(e, t) {
            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            return !t || "object" != typeof t && "function" != typeof t ? e : t
          }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
          return r.state = {
            fontSize: null,
            ready: !1
          }, r.handleWindowResize = function() {
            r.process()
          }, "perfectFit" in e && console.warn("TextFit property perfectFit has been removed."), r.handleWindowResize = (0, c.default)(r.handleWindowResize, e.throttle), r
        }
        return function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
          e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
        }(t, e), n(t, [{
          key: "componentDidMount",
          value: function() {
            this.props.autoResize && window.addEventListener("resize", this.handleWindowResize), this.process()
          }
        }, {
          key: "componentDidUpdate",
          value: function(e) {
            this.state.ready && ((0, o.default)(this.props, e) || this.process())
          }
        }, {
          key: "componentWillUnmount",
          value: function() {
            this.props.autoResize && window.removeEventListener("resize", this.handleWindowResize), this.pid = (0, p.default)()
          }
        }, {
          key: "process",
          value: function() {
            var e = this,
              t = this.props,
              r = t.min,
              i = t.max,
              n = t.mode,
              a = t.forceSingleModeWidth,
              s = t.onReady,
              o = this._parent,
              c = this._child,
              d = (0, u.innerWidth)(o),
              g = (0, u.innerHeight)(o);
            if (g <= 0 || isNaN(g)) console.warn("Can not process element without height. Make sure the element is displayed and has a static height.");
            else if (d <= 0 || isNaN(d)) console.warn("Can not process element without width. Make sure the element is displayed and has a static width.");
            else {
              var v = (0, p.default)();
              this.pid = v;
              var y = function() {
                  return v !== e.pid
                },
                b = "multi" === n ? function() {
                  return m(c, g)
                } : function() {
                  return f(c, d)
                },
                S = "multi" === n ? function() {
                  return f(c, d)
                } : function() {
                  return m(c, g)
                },
                x = void 0,
                E = r,
                w = i;
              this.setState({
                ready: !1
              }), (0, l.default)([function(t) {
                return (0, h.default)((function() {
                  return E <= w
                }), (function(t) {
                  if (y()) return t(!0);
                  x = parseInt((E + w) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return y() ? t(!0) : (b() ? E = x + 1 : w = x - 1, t())
                  }))
                }), t)
              }, function(t) {
                return "single" === n && a || S() ? t() : (E = r, w = x, (0, h.default)((function() {
                  return E < w
                }), (function(t) {
                  if (y()) return t(!0);
                  x = parseInt((E + w) / 2, 10), e.setState({
                    fontSize: x
                  }, (function() {
                    return v !== e.pid ? t(!0) : (S() ? E = x + 1 : w = x - 1, t())
                  }))
                }), t))
              }, function(t) {
                if (x = Math.min(E, w), x = Math.max(x, r), x = Math.min(x, i), x = Math.max(x, 0), y()) return t(!0);
                e.setState({
                  fontSize: x
                }, t)
              }], (function(t) {
                t || y() || e.setState({
                  ready: !0
                }, (function() {
                  return s(x)
                }))
              }))
            }
          }
        }, {
          key: "render",
          value: function() {
            var e = this,
              t = this.props,
              r = t.children,
              n = t.text,
              s = t.style,
              o = (t.min, t.max, t.mode),
              l = (t.forceWidth, t.forceSingleModeWidth, t.throttle, t.autoResize, t.onReady, function(e, t) {
                var r = {};
                for (var i in e) t.indexOf(i) >= 0 || Object.prototype.hasOwnProperty.call(e, i) && (r[i] = e[i]);
                return r
              }(t, ["children", "text", "style", "min", "max", "mode", "forceWidth", "forceSingleModeWidth", "throttle", "autoResize", "onReady"])),
              h = this.state,
              c = h.fontSize,
              p = h.ready,
              u = i({}, s, {
                fontSize: c
              }),
              d = {
                display: p ? "block" : "inline-block"
              };
            return "single" === o && (d.whiteSpace = "nowrap"), a.default.createElement("div", i({
              ref: function(t) {
                return e._parent = t
              },
              style: u
            }, l), a.default.createElement("div", {
              ref: function(t) {
                return e._child = t
              },
              style: d
            }, n && "function" == typeof r ? p ? r(n) : n : r))
          }
        }]), t
      }(a.default.Component);
      g.propTypes = {
        children: s.default.node,
        text: s.default.string,
        min: s.default.number,
        max: s.default.number,
        mode: s.default.oneOf(["single", "multi"]),
        forceSingleModeWidth: s.default.bool,
        throttle: s.default.number,
        onReady: s.default.func
      }, g.defaultProps = {
        min: 1,
        max: 100,
        mode: "multi",
        forceSingleModeWidth: !0,
        throttle: 50,
        autoResize: !0,
        onReady: function() {}
      }, t.default = g
    },
    3824: (e, t, r) => {
      "use strict";
      var i, n = (i = r(1392)) && i.__esModule ? i : {
        default: i
      };
      n.default, n.default
    },
    7896: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.innerHeight = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientHeight - parseInt(t.getPropertyValue("padding-top"), 10) - parseInt(t.getPropertyValue("padding-bottom"), 10) : e.clientHeight
      }, t.innerWidth = function(e) {
        var t = window.getComputedStyle(e, null);
        return t ? e.clientWidth - parseInt(t.getPropertyValue("padding-left"), 10) - parseInt(t.getPropertyValue("padding-right"), 10) : e.clientWidth
      }
    },
    1508: (e, t, r) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = [],
          i = 0,
          a = !0;

        function s(e) {
          function i() {
            t && t(e, r)
          }
          a ? n.default.nextTick(i) : i()
        }
        e.length > 0 ? e[0]((function t(n, a) {
          r.push(a), ++i >= e.length || n ? s(n) : e[i](t)
        })) : s(null), a = !1
      };
      var i, n = (i = r(6540)) && i.__esModule ? i : {
        default: i
      }
    },
    8156: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        if (e === t) return !0;
        var r = Object.keys(e),
          i = Object.keys(t);
        if (r.length !== i.length) return !1;
        for (var n = Object.prototype.hasOwnProperty, a = 0; a < r.length; a++)
          if (!n.call(t, r[a]) || e[r[a]] !== t[r[a]]) return !1;
        return !0
      }
    },
    3812: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var r = void 0,
          i = void 0,
          n = void 0,
          a = void 0,
          s = 0;

        function o() {
          a = 0, s = +new Date, n = e.apply(r, i), r = null, i = null
        }
        return function() {
          r = this, i = arguments;
          var e = new Date - s;
          return a || (e >= t ? o() : a = setTimeout(o, t - e)), n
        }
      }
    },
    6240: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function() {
        return r++
      };
      var r = 0
    },
    7464: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e, t) {
        var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : r;
        e() ? t((function r(n) {
          for (var a = arguments.length, s = Array(a > 1 ? a - 1 : 0), o = 1; o < a; o++) s[o - 1] = arguments[o];
          n ? i(n) : e.apply(this, s) ? t(r) : i(null)
        })) : i(null)
      };
      var r = function() {}
    },
    4340: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        componentsToDebugString: () => se,
        default: () => pe,
        getFullscreenElement: () => I,
        getScreenFrame: () => W,
        hashComponents: () => oe,
        isAndroid: () => F,
        isChromium: () => M,
        isDesktopSafari: () => k,
        isEdgeHTML: () => _,
        isGecko: () => D,
        isTrident: () => C,
        isWebKit: () => A,
        load: () => ce,
        loadSources: () => P,
        murmurX64Hash128: () => ue,
        prepareForSources: () => le,
        sources: () => ie,
        transformSource: () => T,
        withIframe: () => O
      });
      var i = r(7672),
        n = "3.4.2";

      function a(e, t) {
        return new Promise((function(r) {
          return setTimeout(r, e, t)
        }))
      }

      function s(e) {
        return !!e && "function" == typeof e.then
      }

      function o(e, t) {
        try {
          var r = e();
          s(r) ? r.then((function(e) {
            return t(!0, e)
          }), (function(e) {
            return t(!1, e)
          })) : t(!0, r)
        } catch (e) {
          t(!1, e)
        }
      }

      function l(e, t, r) {
        return void 0 === r && (r = 16), (0, i.kH)(this, void 0, void 0, (function() {
          var n, s, o, l;
          return (0, i.KE)(this, (function(i) {
            switch (i.label) {
              case 0:
                n = Array(e.length), s = Date.now(), o = 0, i.label = 1;
              case 1:
                return o < e.length ? (n[o] = t(e[o], o), (l = Date.now()) >= s + r ? (s = l, [4, a(0)]) : [3, 3]) : [3, 4];
              case 2:
                i.sent(), i.label = 3;
              case 3:
                return ++o, [3, 1];
              case 4:
                return [2, n]
            }
          }))
        }))
      }

      function h(e) {
        e.then(void 0, (function() {}))
      }

      function c(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function p(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        var r = [0, 0, 0, 0];
        return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function u(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function d(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function f(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function m(e) {
        return e = f(e, [0, e[0] >>> 1]), e = f(e = p(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), f(e = p(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function g(e, t) {
        t = t || 0;
        var r, i = (e = e || "").length % 16,
          n = e.length - i,
          a = [0, t],
          s = [0, t],
          o = [0, 0],
          l = [0, 0],
          h = [2277735313, 289559509],
          g = [1291169091, 658871167];
        for (r = 0; r < n; r += 16) o = [255 & e.charCodeAt(r + 4) | (255 & e.charCodeAt(r + 5)) << 8 | (255 & e.charCodeAt(r + 6)) << 16 | (255 & e.charCodeAt(r + 7)) << 24, 255 & e.charCodeAt(r) | (255 & e.charCodeAt(r + 1)) << 8 | (255 & e.charCodeAt(r + 2)) << 16 | (255 & e.charCodeAt(r + 3)) << 24], l = [255 & e.charCodeAt(r + 12) | (255 & e.charCodeAt(r + 13)) << 8 | (255 & e.charCodeAt(r + 14)) << 16 | (255 & e.charCodeAt(r + 15)) << 24, 255 & e.charCodeAt(r + 8) | (255 & e.charCodeAt(r + 9)) << 8 | (255 & e.charCodeAt(r + 10)) << 16 | (255 & e.charCodeAt(r + 11)) << 24], o = u(o = p(o, h), 31), a = c(a = u(a = f(a, o = p(o, g)), 27), s), a = c(p(a, [0, 5]), [0, 1390208809]), l = u(l = p(l, g), 33), s = c(s = u(s = f(s, l = p(l, h)), 31), a), s = c(p(s, [0, 5]), [0, 944331445]);
        switch (o = [0, 0], l = [0, 0], i) {
          case 15:
            l = f(l, d([0, e.charCodeAt(r + 14)], 48));
          case 14:
            l = f(l, d([0, e.charCodeAt(r + 13)], 40));
          case 13:
            l = f(l, d([0, e.charCodeAt(r + 12)], 32));
          case 12:
            l = f(l, d([0, e.charCodeAt(r + 11)], 24));
          case 11:
            l = f(l, d([0, e.charCodeAt(r + 10)], 16));
          case 10:
            l = f(l, d([0, e.charCodeAt(r + 9)], 8));
          case 9:
            l = p(l = f(l, [0, e.charCodeAt(r + 8)]), g), s = f(s, l = p(l = u(l, 33), h));
          case 8:
            o = f(o, d([0, e.charCodeAt(r + 7)], 56));
          case 7:
            o = f(o, d([0, e.charCodeAt(r + 6)], 48));
          case 6:
            o = f(o, d([0, e.charCodeAt(r + 5)], 40));
          case 5:
            o = f(o, d([0, e.charCodeAt(r + 4)], 32));
          case 4:
            o = f(o, d([0, e.charCodeAt(r + 3)], 24));
          case 3:
            o = f(o, d([0, e.charCodeAt(r + 2)], 16));
          case 2:
            o = f(o, d([0, e.charCodeAt(r + 1)], 8));
          case 1:
            o = p(o = f(o, [0, e.charCodeAt(r)]), h), a = f(a, o = p(o = u(o, 31), g))
        }
        return a = c(a = f(a, [0, e.length]), s = f(s, [0, e.length])), s = c(s, a), a = c(a = m(a), s = m(s)), s = c(s, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
      }

      function v(e) {
        return parseInt(e)
      }

      function y(e) {
        return parseFloat(e)
      }

      function b(e, t) {
        return "number" == typeof e && isNaN(e) ? t : e
      }

      function S(e) {
        return e.reduce((function(e, t) {
          return e + (t ? 1 : 0)
        }), 0)
      }

      function x(e, t) {
        if (void 0 === t && (t = 1), Math.abs(t) >= 1) return Math.round(e / t) * t;
        var r = 1 / t;
        return Math.round(e * r) / r
      }

      function E(e) {
        return e && "object" == typeof e && "message" in e ? e : {
          message: e
        }
      }

      function w(e) {
        return "function" != typeof e
      }

      function P(e, t, r) {
        var n = Object.keys(e).filter((function(e) {
            return ! function(e, t) {
              for (var r = 0, i = e.length; r < i; ++r)
                if (e[r] === t) return !0;
              return !1
            }(r, e)
          })),
          a = l(n, (function(r) {
            return function(e, t) {
              var r = new Promise((function(r) {
                var i = Date.now();
                o(e.bind(null, t), (function() {
                  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
                  var n = Date.now() - i;
                  if (!e[0]) return r((function() {
                    return {
                      error: E(e[1]),
                      duration: n
                    }
                  }));
                  var a = e[1];
                  if (w(a)) return r((function() {
                    return {
                      value: a,
                      duration: n
                    }
                  }));
                  r((function() {
                    return new Promise((function(e) {
                      var t = Date.now();
                      o(a, (function() {
                        for (var r = [], i = 0; i < arguments.length; i++) r[i] = arguments[i];
                        var a = n + Date.now() - t;
                        if (!r[0]) return e({
                          error: E(r[1]),
                          duration: a
                        });
                        e({
                          value: r[1],
                          duration: a
                        })
                      }))
                    }))
                  }))
                }))
              }));
              return h(r),
                function() {
                  return r.then((function(e) {
                    return e()
                  }))
                }
            }(e[r], t)
          }));
        return h(a),
          function() {
            return (0, i.kH)(this, void 0, void 0, (function() {
              var e, t, r, s;
              return (0, i.KE)(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return [4, a];
                  case 1:
                    return [4, l(i.sent(), (function(e) {
                      var t = e();
                      return h(t), t
                    }))];
                  case 2:
                    return e = i.sent(), [4, Promise.all(e)];
                  case 3:
                    for (t = i.sent(), r = {}, s = 0; s < n.length; ++s) r[n[s]] = t[s];
                    return [2, r]
                }
              }))
            }))
          }
      }

      function T(e, t) {
        var r = function(e) {
          return w(e) ? t(e) : function() {
            var r = e();
            return s(r) ? r.then(t) : t(r)
          }
        };
        return function(t) {
          var i = e(t);
          return s(i) ? i.then(r) : r(i)
        }
      }

      function C() {
        var e = window,
          t = navigator;
        return S(["MSCSSMatrix" in e, "msSetImmediate" in e, "msIndexedDB" in e, "msMaxTouchPoints" in t, "msPointerEnabled" in t]) >= 4
      }

      function _() {
        var e = window,
          t = navigator;
        return S(["msWriteProfilerMark" in e, "MSStream" in e, "msLaunchUri" in t, "msSaveBlob" in t]) >= 3 && !C()
      }

      function M() {
        var e = window,
          t = navigator;
        return S(["webkitPersistentStorage" in t, "webkitTemporaryStorage" in t, 0 === t.vendor.indexOf("Google"), "webkitResolveLocalFileSystemURL" in e, "BatteryManager" in e, "webkitMediaStream" in e, "webkitSpeechGrammar" in e]) >= 5
      }

      function A() {
        var e = window,
          t = navigator;
        return S(["ApplePayError" in e, "CSSPrimitiveValue" in e, "Counter" in e, 0 === t.vendor.indexOf("Apple"), "getStorageUpdates" in t, "WebKitMediaKeys" in e]) >= 4
      }

      function k() {
        var e = window;
        return S(["safari" in e, !("DeviceMotionEvent" in e), !("ongestureend" in e), !("standalone" in navigator)]) >= 3
      }

      function D() {
        var e, t, r = window;
        return S(["buildID" in navigator, "MozAppearance" in (null !== (t = null === (e = document.documentElement) || void 0 === e ? void 0 : e.style) && void 0 !== t ? t : {}), "onmozfullscreenchange" in r, "mozInnerScreenX" in r, "CSSMozDocumentRule" in r, "CanvasCaptureMediaStream" in r]) >= 4
      }

      function I() {
        var e = document;
        return e.fullscreenElement || e.msFullscreenElement || e.mozFullScreenElement || e.webkitFullscreenElement || null
      }

      function F() {
        var e = M(),
          t = D();
        if (!e && !t) return !1;
        var r = window;
        return S(["onorientationchange" in r, "orientation" in r, e && !("SharedWorker" in r), t && /android/i.test(navigator.appVersion)]) >= 2
      }

      function L(e) {
        var t = new Error(e);
        return t.name = e, t
      }

      function O(e, t, r) {
        var n, s, o;
        return void 0 === r && (r = 50), (0, i.kH)(this, void 0, void 0, (function() {
          var l, h;
          return (0, i.KE)(this, (function(i) {
            switch (i.label) {
              case 0:
                l = document, i.label = 1;
              case 1:
                return l.body ? [3, 3] : [4, a(r)];
              case 2:
                return i.sent(), [3, 1];
              case 3:
                h = l.createElement("iframe"), i.label = 4;
              case 4:
                return i.trys.push([4, , 10, 11]), [4, new Promise((function(e, r) {
                  var i = !1,
                    n = function() {
                      i = !0, e()
                    };
                  h.onload = n, h.onerror = function(e) {
                    i = !0, r(e)
                  };
                  var a = h.style;
                  a.setProperty("display", "block", "important"), a.position = "absolute", a.top = "0", a.left = "0", a.visibility = "hidden", t && "srcdoc" in h ? h.srcdoc = t : h.src = "about:blank", l.body.appendChild(h);
                  var s = function() {
                    var e, t;
                    i || ("complete" === (null === (t = null === (e = h.contentWindow) || void 0 === e ? void 0 : e.document) || void 0 === t ? void 0 : t.readyState) ? n() : setTimeout(s, 10))
                  };
                  s()
                }))];
              case 5:
                i.sent(), i.label = 6;
              case 6:
                return (null === (s = null === (n = h.contentWindow) || void 0 === n ? void 0 : n.document) || void 0 === s ? void 0 : s.body) ? [3, 8] : [4, a(r)];
              case 7:
                return i.sent(), [3, 6];
              case 8:
                return [4, e(h, h.contentWindow)];
              case 9:
                return [2, i.sent()];
              case 10:
                return null === (o = h.parentNode) || void 0 === o || o.removeChild(h), [7];
              case 11:
                return [2]
            }
          }))
        }))
      }

      function R(e) {
        for (var t = function(e) {
            for (var t, r, i = "Unexpected syntax '".concat(e, "'"), n = /^\s*([a-z-]*)(.*)$/i.exec(e), a = n[1] || void 0, s = {}, o = /([.:#][\w-]+|\[.+?\])/gi, l = function(e, t) {
                s[e] = s[e] || [], s[e].push(t)
              };;) {
              var h = o.exec(n[2]);
              if (!h) break;
              var c = h[0];
              switch (c[0]) {
                case ".":
                  l("class", c.slice(1));
                  break;
                case "#":
                  l("id", c.slice(1));
                  break;
                case "[":
                  var p = /^\[([\w-]+)([~|^$*]?=("(.*?)"|([\w-]+)))?(\s+[is])?\]$/.exec(c);
                  if (!p) throw new Error(i);
                  l(p[1], null !== (r = null !== (t = p[4]) && void 0 !== t ? t : p[5]) && void 0 !== r ? r : "");
                  break;
                default:
                  throw new Error(i)
              }
            }
            return [a, s]
          }(e), r = t[0], i = t[1], n = document.createElement(null != r ? r : "div"), a = 0, s = Object.keys(i); a < s.length; a++) {
          var o = s[a],
            l = i[o].join(" ");
          "style" === o ? V(n.style, l) : n.setAttribute(o, l)
        }
        return n
      }

      function V(e, t) {
        for (var r = 0, i = t.split(";"); r < i.length; r++) {
          var n = i[r],
            a = /^\s*([\w-]+)\s*:\s*(.+?)(\s*!([\w-]+))?\s*$/.exec(n);
          if (a) {
            var s = a[1],
              o = a[2],
              l = a[4];
            e.setProperty(s, o, l || "")
          }
        }
      }
      var B = ["monospace", "sans-serif", "serif"],
        N = ["sans-serif-thin", "ARNO PRO", "Agency FB", "Arabic Typesetting", "Arial Unicode MS", "AvantGarde Bk BT", "BankGothic Md BT", "Batang", "Bitstream Vera Sans Mono", "Calibri", "Century", "Century Gothic", "Clarendon", "EUROSTILE", "Franklin Gothic", "Futura Bk BT", "Futura Md BT", "GOTHAM", "Gill Sans", "HELV", "Haettenschweiler", "Helvetica Neue", "Humanst521 BT", "Leelawadee", "Letter Gothic", "Levenim MT", "Lucida Bright", "Lucida Sans", "Menlo", "MS Mincho", "MS Outlook", "MS Reference Specialty", "MS UI Gothic", "MT Extra", "MYRIAD PRO", "Marlett", "Meiryo UI", "Microsoft Uighur", "Minion Pro", "Monotype Corsiva", "PMingLiU", "Pristina", "SCRIPTINA", "Segoe UI Light", "Serifa", "SimHei", "Small Fonts", "Staccato222 BT", "TRAJAN PRO", "Univers CE 55 Medium", "Vrinda", "ZWAdobeF"];

      function z(e) {
        return e.toDataURL()
      }
      var G, j, H = 2500;

      function W() {
        var e = this;
        return function() {
            if (void 0 === j) {
              var e = function() {
                var t = X();
                Y(t) ? j = setTimeout(e, H) : (G = t, j = void 0)
              };
              e()
            }
          }(),
          function() {
            return (0, i.kH)(e, void 0, void 0, (function() {
              var e;
              return (0, i.KE)(this, (function(t) {
                switch (t.label) {
                  case 0:
                    return Y(e = X()) ? G ? [2, (0, i.Mt)([], G, !0)] : I() ? [4, (r = document, (r.exitFullscreen || r.msExitFullscreen || r.mozCancelFullScreen || r.webkitExitFullscreen).call(r))] : [3, 2] : [3, 2];
                  case 1:
                    t.sent(), e = X(), t.label = 2;
                  case 2:
                    return Y(e) || (G = e), [2, e]
                }
                var r
              }))
            }))
          }
      }

      function X() {
        var e = screen;
        return [b(y(e.availTop), null), b(y(e.width) - y(e.availWidth) - b(y(e.availLeft), 0), null), b(y(e.height) - y(e.availHeight) - b(y(e.availTop), 0), null), b(y(e.availLeft), null)]
      }

      function Y(e) {
        for (var t = 0; t < 4; ++t)
          if (e[t]) return !1;
        return !0
      }

      function U(e) {
        var t;
        return (0, i.kH)(this, void 0, void 0, (function() {
          var r, n, s, o, l, h, c;
          return (0, i.KE)(this, (function(i) {
            switch (i.label) {
              case 0:
                for (r = document, n = r.createElement("div"), s = new Array(e.length), o = {}, q(n), c = 0; c < e.length; ++c) "DIALOG" === (l = R(e[c])).tagName && l.show(), q(h = r.createElement("div")), h.appendChild(l), n.appendChild(h), s[c] = l;
                i.label = 1;
              case 1:
                return r.body ? [3, 3] : [4, a(50)];
              case 2:
                return i.sent(), [3, 1];
              case 3:
                r.body.appendChild(n);
                try {
                  for (c = 0; c < e.length; ++c) s[c].offsetParent || (o[e[c]] = !0)
                } finally {
                  null === (t = n.parentNode) || void 0 === t || t.removeChild(n)
                }
                return [2, o]
            }
          }))
        }))
      }

      function q(e) {
        e.style.setProperty("display", "block", "important")
      }

      function Z(e) {
        return matchMedia("(inverted-colors: ".concat(e, ")")).matches
      }

      function $(e) {
        return matchMedia("(forced-colors: ".concat(e, ")")).matches
      }

      function J(e) {
        return matchMedia("(prefers-contrast: ".concat(e, ")")).matches
      }

      function K(e) {
        return matchMedia("(prefers-reduced-motion: ".concat(e, ")")).matches
      }

      function Q(e) {
        return matchMedia("(dynamic-range: ".concat(e, ")")).matches
      }
      var ee = Math,
        te = function() {
          return 0
        },
        re = {
          default: [],
          apple: [{
            font: "-apple-system-body"
          }],
          serif: [{
            fontFamily: "serif"
          }],
          sans: [{
            fontFamily: "sans-serif"
          }],
          mono: [{
            fontFamily: "monospace"
          }],
          min: [{
            fontSize: "1px"
          }],
          system: [{
            fontFamily: "system-ui"
          }]
        },
        ie = {
          fonts: function() {
            return O((function(e, t) {
              var r = t.document,
                i = r.body;
              i.style.fontSize = "48px";
              var n = r.createElement("div"),
                a = {},
                s = {},
                o = function(e) {
                  var t = r.createElement("span"),
                    i = t.style;
                  return i.position = "absolute", i.top = "0", i.left = "0", i.fontFamily = e, t.textContent = "mmMwWLliI0O&1", n.appendChild(t), t
                },
                l = B.map(o),
                h = function() {
                  for (var e = {}, t = function(t) {
                      e[t] = B.map((function(e) {
                        return function(e, t) {
                          return o("'".concat(e, "',").concat(t))
                        }(t, e)
                      }))
                    }, r = 0, i = N; r < i.length; r++) t(i[r]);
                  return e
                }();
              i.appendChild(n);
              for (var c = 0; c < B.length; c++) a[B[c]] = l[c].offsetWidth, s[B[c]] = l[c].offsetHeight;
              return N.filter((function(e) {
                return t = h[e], B.some((function(e, r) {
                  return t[r].offsetWidth !== a[e] || t[r].offsetHeight !== s[e]
                }));
                var t
              }))
            }))
          },
          domBlockers: function(e) {
            var t = (void 0 === e ? {} : e).debug;
            return (0, i.kH)(this, void 0, void 0, (function() {
              var e, r, n, a, s;
              return (0, i.KE)(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return A() || F() ? (o = atob, e = {
                      abpIndo: ["#Iklan-Melayang", "#Kolom-Iklan-728", "#SidebarIklan-wrapper", '[title="ALIENBOLA" i]', o("I0JveC1CYW5uZXItYWRz")],
                      abpvn: [".quangcao", "#mobileCatfish", o("LmNsb3NlLWFkcw=="), '[id^="bn_bottom_fixed_"]', "#pmadv"],
                      adBlockFinland: [".mainostila", o("LnNwb25zb3JpdA=="), ".ylamainos", o("YVtocmVmKj0iL2NsaWNrdGhyZ2guYXNwPyJd"), o("YVtocmVmXj0iaHR0cHM6Ly9hcHAucmVhZHBlYWsuY29tL2FkcyJd")],
                      adBlockPersian: ["#navbar_notice_50", ".kadr", 'TABLE[width="140px"]', "#divAgahi", o("YVtocmVmXj0iaHR0cDovL2cxLnYuZndtcm0ubmV0L2FkLyJd")],
                      adBlockWarningRemoval: ["#adblock-honeypot", ".adblocker-root", ".wp_adblock_detect", o("LmhlYWRlci1ibG9ja2VkLWFk"), o("I2FkX2Jsb2NrZXI=")],
                      adGuardAnnoyances: [".hs-sosyal", "#cookieconsentdiv", 'div[class^="app_gdpr"]', ".as-oil", '[data-cypress="soft-push-notification-modal"]'],
                      adGuardBase: [".BetterJsPopOverlay", o("I2FkXzMwMFgyNTA="), o("I2Jhbm5lcmZsb2F0MjI="), o("I2NhbXBhaWduLWJhbm5lcg=="), o("I0FkLUNvbnRlbnQ=")],
                      adGuardChinese: [o("LlppX2FkX2FfSA=="), o("YVtocmVmKj0iLmh0aGJldDM0LmNvbSJd"), "#widget-quan", o("YVtocmVmKj0iLzg0OTkyMDIwLnh5eiJd"), o("YVtocmVmKj0iLjE5NTZobC5jb20vIl0=")],
                      adGuardFrench: ["#pavePub", o("LmFkLWRlc2t0b3AtcmVjdGFuZ2xl"), ".mobile_adhesion", ".widgetadv", o("LmFkc19iYW4=")],
                      adGuardGerman: ['aside[data-portal-id="leaderboard"]'],
                      adGuardJapanese: ["#kauli_yad_1", o("YVtocmVmXj0iaHR0cDovL2FkMi50cmFmZmljZ2F0ZS5uZXQvIl0="), o("Ll9wb3BJbl9pbmZpbml0ZV9hZA=="), o("LmFkZ29vZ2xl"), o("Ll9faXNib29zdFJldHVybkFk")],
                      adGuardMobile: [o("YW1wLWF1dG8tYWRz"), o("LmFtcF9hZA=="), 'amp-embed[type="24smi"]', "#mgid_iframe1", o("I2FkX2ludmlld19hcmVh")],
                      adGuardRussian: [o("YVtocmVmXj0iaHR0cHM6Ly9hZC5sZXRtZWFkcy5jb20vIl0="), o("LnJlY2xhbWE="), 'div[id^="smi2adblock"]', o("ZGl2W2lkXj0iQWRGb3hfYmFubmVyXyJd"), "#psyduckpockeball"],
                      adGuardSocial: [o("YVtocmVmXj0iLy93d3cuc3R1bWJsZXVwb24uY29tL3N1Ym1pdD91cmw9Il0="), o("YVtocmVmXj0iLy90ZWxlZ3JhbS5tZS9zaGFyZS91cmw/Il0="), ".etsy-tweet", "#inlineShare", ".popup-social"],
                      adGuardSpanishPortuguese: ["#barraPublicidade", "#Publicidade", "#publiEspecial", "#queTooltip", ".cnt-publi"],
                      adGuardTrackingProtection: ["#qoo-counter", o("YVtocmVmXj0iaHR0cDovL2NsaWNrLmhvdGxvZy5ydS8iXQ=="), o("YVtocmVmXj0iaHR0cDovL2hpdGNvdW50ZXIucnUvdG9wL3N0YXQucGhwIl0="), o("YVtocmVmXj0iaHR0cDovL3RvcC5tYWlsLnJ1L2p1bXAiXQ=="), "#top100counter"],
                      adGuardTurkish: ["#backkapat", o("I3Jla2xhbWk="), o("YVtocmVmXj0iaHR0cDovL2Fkc2Vydi5vbnRlay5jb20udHIvIl0="), o("YVtocmVmXj0iaHR0cDovL2l6bGVuemkuY29tL2NhbXBhaWduLyJd"), o("YVtocmVmXj0iaHR0cDovL3d3dy5pbnN0YWxsYWRzLm5ldC8iXQ==")],
                      bulgarian: [o("dGQjZnJlZW5ldF90YWJsZV9hZHM="), "#ea_intext_div", ".lapni-pop-over", "#xenium_hot_offers"],
                      easyList: [".yb-floorad", o("LndpZGdldF9wb19hZHNfd2lkZ2V0"), o("LnRyYWZmaWNqdW5reS1hZA=="), ".textad_headline", o("LnNwb25zb3JlZC10ZXh0LWxpbmtz")],
                      easyListChina: [o("LmFwcGd1aWRlLXdyYXBbb25jbGljayo9ImJjZWJvcy5jb20iXQ=="), o("LmZyb250cGFnZUFkdk0="), "#taotaole", "#aafoot.top_box", ".cfa_popup"],
                      easyListCookie: [".ezmob-footer", ".cc-CookieWarning", "[data-cookie-number]", o("LmF3LWNvb2tpZS1iYW5uZXI="), ".sygnal24-gdpr-modal-wrap"],
                      easyListCzechSlovak: ["#onlajny-stickers", o("I3Jla2xhbW5pLWJveA=="), o("LnJla2xhbWEtbWVnYWJvYXJk"), ".sklik", o("W2lkXj0ic2tsaWtSZWtsYW1hIl0=")],
                      easyListDutch: [o("I2FkdmVydGVudGll"), o("I3ZpcEFkbWFya3RCYW5uZXJCbG9jaw=="), ".adstekst", o("YVtocmVmXj0iaHR0cHM6Ly94bHR1YmUubmwvY2xpY2svIl0="), "#semilo-lrectangle"],
                      easyListGermany: ["#SSpotIMPopSlider", o("LnNwb25zb3JsaW5rZ3J1ZW4="), o("I3dlcmJ1bmdza3k="), o("I3Jla2xhbWUtcmVjaHRzLW1pdHRl"), o("YVtocmVmXj0iaHR0cHM6Ly9iZDc0Mi5jb20vIl0=")],
                      easyListItaly: [o("LmJveF9hZHZfYW5udW5jaQ=="), ".sb-box-pubbliredazionale", o("YVtocmVmXj0iaHR0cDovL2FmZmlsaWF6aW9uaWFkcy5zbmFpLml0LyJd"), o("YVtocmVmXj0iaHR0cHM6Ly9hZHNlcnZlci5odG1sLml0LyJd"), o("YVtocmVmXj0iaHR0cHM6Ly9hZmZpbGlhemlvbmlhZHMuc25haS5pdC8iXQ==")],
                      easyListLithuania: [o("LnJla2xhbW9zX3RhcnBhcw=="), o("LnJla2xhbW9zX251b3JvZG9z"), o("aW1nW2FsdD0iUmVrbGFtaW5pcyBza3lkZWxpcyJd"), o("aW1nW2FsdD0iRGVkaWt1b3RpLmx0IHNlcnZlcmlhaSJd"), o("aW1nW2FsdD0iSG9zdGluZ2FzIFNlcnZlcmlhaS5sdCJd")],
                      estonian: [o("QVtocmVmKj0iaHR0cDovL3BheTRyZXN1bHRzMjQuZXUiXQ==")],
                      fanboyAnnoyances: ["#ac-lre-player", ".navigate-to-top", "#subscribe_popup", ".newsletter_holder", "#back-top"],
                      fanboyAntiFacebook: [".util-bar-module-firefly-visible"],
                      fanboyEnhancedTrackers: [".open.pushModal", "#issuem-leaky-paywall-articles-zero-remaining-nag", "#sovrn_container", 'div[class$="-hide"][zoompage-fontsize][style="display: block;"]', ".BlockNag__Card"],
                      fanboySocial: ["#FollowUs", "#meteored_share", "#social_follow", ".article-sharer", ".community__social-desc"],
                      frellwitSwedish: [o("YVtocmVmKj0iY2FzaW5vcHJvLnNlIl1bdGFyZ2V0PSJfYmxhbmsiXQ=="), o("YVtocmVmKj0iZG9rdG9yLXNlLm9uZWxpbmsubWUiXQ=="), "article.category-samarbete", o("ZGl2LmhvbGlkQWRz"), "ul.adsmodern"],
                      greekAdBlock: [o("QVtocmVmKj0iYWRtYW4ub3RlbmV0LmdyL2NsaWNrPyJd"), o("QVtocmVmKj0iaHR0cDovL2F4aWFiYW5uZXJzLmV4b2R1cy5nci8iXQ=="), o("QVtocmVmKj0iaHR0cDovL2ludGVyYWN0aXZlLmZvcnRobmV0LmdyL2NsaWNrPyJd"), "DIV.agores300", "TABLE.advright"],
                      hungarian: ["#cemp_doboz", ".optimonk-iframe-container", o("LmFkX19tYWlu"), o("W2NsYXNzKj0iR29vZ2xlQWRzIl0="), "#hirdetesek_box"],
                      iDontCareAboutCookies: ['.alert-info[data-block-track*="CookieNotice"]', ".ModuleTemplateCookieIndicator", ".o--cookies--container", "#cookies-policy-sticky", "#stickyCookieBar"],
                      icelandicAbp: [o("QVtocmVmXj0iL2ZyYW1ld29yay9yZXNvdXJjZXMvZm9ybXMvYWRzLmFzcHgiXQ==")],
                      latvian: [o("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiAxMjBweDsgaGVpZ2h0OiA0MHB4OyBvdmVyZmxvdzogaGlkZGVuOyBwb3NpdGlvbjogcmVsYXRpdmU7Il0="), o("YVtocmVmPSJodHRwOi8vd3d3LnNhbGlkemluaS5sdi8iXVtzdHlsZT0iZGlzcGxheTogYmxvY2s7IHdpZHRoOiA4OHB4OyBoZWlnaHQ6IDMxcHg7IG92ZXJmbG93OiBoaWRkZW47IHBvc2l0aW9uOiByZWxhdGl2ZTsiXQ==")],
                      listKr: [o("YVtocmVmKj0iLy9hZC5wbGFuYnBsdXMuY28ua3IvIl0="), o("I2xpdmVyZUFkV3JhcHBlcg=="), o("YVtocmVmKj0iLy9hZHYuaW1hZHJlcC5jby5rci8iXQ=="), o("aW5zLmZhc3R2aWV3LWFk"), ".revenue_unit_item.dable"],
                      listeAr: [o("LmdlbWluaUxCMUFk"), ".right-and-left-sponsers", o("YVtocmVmKj0iLmFmbGFtLmluZm8iXQ=="), o("YVtocmVmKj0iYm9vcmFxLm9yZyJd"), o("YVtocmVmKj0iZHViaXp6bGUuY29tL2FyLz91dG1fc291cmNlPSJd")],
                      listeFr: [o("YVtocmVmXj0iaHR0cDovL3Byb21vLnZhZG9yLmNvbS8iXQ=="), o("I2FkY29udGFpbmVyX3JlY2hlcmNoZQ=="), o("YVtocmVmKj0id2Vib3JhbWEuZnIvZmNnaS1iaW4vIl0="), ".site-pub-interstitiel", 'div[id^="crt-"][data-criteo-id]'],
                      officialPolish: ["#ceneo-placeholder-ceneo-12", o("W2hyZWZePSJodHRwczovL2FmZi5zZW5kaHViLnBsLyJd"), o("YVtocmVmXj0iaHR0cDovL2Fkdm1hbmFnZXIudGVjaGZ1bi5wbC9yZWRpcmVjdC8iXQ=="), o("YVtocmVmXj0iaHR0cDovL3d3dy50cml6ZXIucGwvP3V0bV9zb3VyY2UiXQ=="), o("ZGl2I3NrYXBpZWNfYWQ=")],
                      ro: [o("YVtocmVmXj0iLy9hZmZ0cmsuYWx0ZXgucm8vQ291bnRlci9DbGljayJd"), o("YVtocmVmXj0iaHR0cHM6Ly9ibGFja2ZyaWRheXNhbGVzLnJvL3Ryay9zaG9wLyJd"), o("YVtocmVmXj0iaHR0cHM6Ly9ldmVudC4ycGVyZm9ybWFudC5jb20vZXZlbnRzL2NsaWNrIl0="), o("YVtocmVmXj0iaHR0cHM6Ly9sLnByb2ZpdHNoYXJlLnJvLyJd"), 'a[href^="/url/"]'],
                      ruAd: [o("YVtocmVmKj0iLy9mZWJyYXJlLnJ1LyJd"), o("YVtocmVmKj0iLy91dGltZy5ydS8iXQ=="), o("YVtocmVmKj0iOi8vY2hpa2lkaWtpLnJ1Il0="), "#pgeldiz", ".yandex-rtb-block"],
                      thaiAds: ["a[href*=macau-uta-popup]", o("I2Fkcy1nb29nbGUtbWlkZGxlX3JlY3RhbmdsZS1ncm91cA=="), o("LmFkczMwMHM="), ".bumq", ".img-kosana"],
                      webAnnoyancesUltralist: ["#mod-social-share-2", "#social-tools", o("LmN0cGwtZnVsbGJhbm5lcg=="), ".zergnet-recommend", ".yt.btn-link.btn-md.btn"]
                    }, r = Object.keys(e), [4, U((s = []).concat.apply(s, r.map((function(t) {
                      return e[t]
                    }))))]) : [2, void 0];
                  case 1:
                    return n = i.sent(), t && function(e, t) {
                      for (var r = "DOM blockers debug:\n```", i = 0, n = Object.keys(e); i < n.length; i++) {
                        var a = n[i];
                        r += "\n".concat(a, ":");
                        for (var s = 0, o = e[a]; s < o.length; s++) {
                          var l = o[s];
                          r += "\n  ".concat(t[l] ? "🚫" : "➡️", " ").concat(l)
                        }
                      }
                      console.log("".concat(r, "\n```"))
                    }(e, n), (a = r.filter((function(t) {
                      var r = e[t];
                      return S(r.map((function(e) {
                        return n[e]
                      }))) > .6 * r.length
                    }))).sort(), [2, a]
                }
                var o
              }))
            }))
          },
          fontPreferences: function() {
            return void 0 === e && (e = 4e3), O((function(t, r) {
              var n = r.document,
                a = n.body,
                s = a.style;
              s.width = "".concat(e, "px"), s.webkitTextSizeAdjust = s.textSizeAdjust = "none", M() ? a.style.zoom = "".concat(1 / r.devicePixelRatio) : A() && (a.style.zoom = "reset");
              var o = n.createElement("div");
              return o.textContent = (0, i.Mt)([], Array(e / 20 << 0), !0).map((function() {
                  return "word"
                })).join(" "), a.appendChild(o),
                function(e, t) {
                  for (var r = {}, i = {}, n = 0, a = Object.keys(re); n < a.length; n++) {
                    var s = a[n],
                      o = re[s],
                      l = o[0],
                      h = void 0 === l ? {} : l,
                      c = o[1],
                      p = void 0 === c ? "mmMwWLliI0fiflO&1" : c,
                      u = e.createElement("span");
                    u.textContent = p, u.style.whiteSpace = "nowrap";
                    for (var d = 0, f = Object.keys(h); d < f.length; d++) {
                      var m = f[d],
                        g = h[m];
                      void 0 !== g && (u.style[m] = g)
                    }
                    r[s] = u, t.appendChild(e.createElement("br")), t.appendChild(u)
                  }
                  for (var v = 0, y = Object.keys(re); v < y.length; v++) i[s = y[v]] = r[s].getBoundingClientRect().width;
                  return i
                }(n, a)
            }), '<!doctype html><html><head><meta name="viewport" content="width=device-width, initial-scale=1">');
            var e
          },
          audio: function() {
            var e = window,
              t = e.OfflineAudioContext || e.webkitOfflineAudioContext;
            if (!t) return -2;
            if (A() && !k() && ! function() {
                var e = window;
                return S(["DOMRectList" in e, "RTCPeerConnectionIceEvent" in e, "SVGGeometryElement" in e, "ontransitioncancel" in e]) >= 3
              }()) return -1;
            var r = new t(1, 5e3, 44100),
              i = r.createOscillator();
            i.type = "triangle", i.frequency.value = 1e4;
            var n = r.createDynamicsCompressor();
            n.threshold.value = -50, n.knee.value = 40, n.ratio.value = 12, n.attack.value = 0, n.release.value = .25, i.connect(n), n.connect(r.destination), i.start(0);
            var a = function(e) {
                var t = function() {};
                return [new Promise((function(r, i) {
                  var n = !1,
                    a = 0,
                    o = 0;
                  e.oncomplete = function(e) {
                    return r(e.renderedBuffer)
                  };
                  var l = function() {
                      setTimeout((function() {
                        return i(L("timeout"))
                      }), Math.min(500, o + 5e3 - Date.now()))
                    },
                    c = function() {
                      try {
                        var t = e.startRendering();
                        switch (s(t) && h(t), e.state) {
                          case "running":
                            o = Date.now(), n && l();
                            break;
                          case "suspended":
                            document.hidden || a++, n && a >= 3 ? i(L("suspended")) : setTimeout(c, 500)
                        }
                      } catch (e) {
                        i(e)
                      }
                    };
                  c(), t = function() {
                    n || (n = !0, o > 0 && l())
                  }
                })), t]
              }(r),
              o = a[0],
              l = a[1],
              c = o.then((function(e) {
                return function(e) {
                  for (var t = 0, r = 0; r < e.length; ++r) t += Math.abs(e[r]);
                  return t
                }(e.getChannelData(0).subarray(4500))
              }), (function(e) {
                if ("timeout" === e.name || "suspended" === e.name) return -3;
                throw e
              }));
            return h(c),
              function() {
                return l(), c
              }
          },
          screenFrame: function() {
            var e = this,
              t = W();
            return function() {
              return (0, i.kH)(e, void 0, void 0, (function() {
                var e, r;
                return (0, i.KE)(this, (function(i) {
                  switch (i.label) {
                    case 0:
                      return [4, t()];
                    case 1:
                      return e = i.sent(), [2, [(r = function(e) {
                        return null === e ? null : x(e, 10)
                      })(e[0]), r(e[1]), r(e[2]), r(e[3])]]
                  }
                }))
              }))
            }
          },
          osCpu: function() {
            return navigator.oscpu
          },
          languages: function() {
            var e, t = navigator,
              r = [],
              i = t.language || t.userLanguage || t.browserLanguage || t.systemLanguage;
            if (void 0 !== i && r.push([i]), Array.isArray(t.languages)) M() && S([!("MediaSettingsRange" in (e = window)), "RTCEncodedAudioFrame" in e, "" + e.Intl == "[object Intl]", "" + e.Reflect == "[object Reflect]"]) >= 3 || r.push(t.languages);
            else if ("string" == typeof t.languages) {
              var n = t.languages;
              n && r.push(n.split(","))
            }
            return r
          },
          colorDepth: function() {
            return window.screen.colorDepth
          },
          deviceMemory: function() {
            return b(y(navigator.deviceMemory), void 0)
          },
          screenResolution: function() {
            var e = screen,
              t = function(e) {
                return b(v(e), null)
              },
              r = [t(e.width), t(e.height)];
            return r.sort().reverse(), r
          },
          hardwareConcurrency: function() {
            return b(v(navigator.hardwareConcurrency), void 0)
          },
          timezone: function() {
            var e, t = null === (e = window.Intl) || void 0 === e ? void 0 : e.DateTimeFormat;
            if (t) {
              var r = (new t).resolvedOptions().timeZone;
              if (r) return r
            }
            var i, n = (i = (new Date).getFullYear(), -Math.max(y(new Date(i, 0, 1).getTimezoneOffset()), y(new Date(i, 6, 1).getTimezoneOffset())));
            return "UTC".concat(n >= 0 ? "+" : "").concat(Math.abs(n))
          },
          sessionStorage: function() {
            try {
              return !!window.sessionStorage
            } catch (e) {
              return !0
            }
          },
          localStorage: function() {
            try {
              return !!window.localStorage
            } catch (e) {
              return !0
            }
          },
          indexedDB: function() {
            if (!C() && !_()) try {
              return !!window.indexedDB
            } catch (e) {
              return !0
            }
          },
          openDatabase: function() {
            return !!window.openDatabase
          },
          cpuClass: function() {
            return navigator.cpuClass
          },
          platform: function() {
            var e = navigator.platform;
            return "MacIntel" === e && A() && !k() ? function() {
              if ("iPad" === navigator.platform) return !0;
              var e = screen,
                t = e.width / e.height;
              return S(["MediaSource" in window, !!Element.prototype.webkitRequestFullscreen, t > .65 && t < 1.53]) >= 2
            }() ? "iPad" : "iPhone" : e
          },
          plugins: function() {
            var e = navigator.plugins;
            if (e) {
              for (var t = [], r = 0; r < e.length; ++r) {
                var i = e[r];
                if (i) {
                  for (var n = [], a = 0; a < i.length; ++a) {
                    var s = i[a];
                    n.push({
                      type: s.type,
                      suffixes: s.suffixes
                    })
                  }
                  t.push({
                    name: i.name,
                    description: i.description,
                    mimeTypes: n
                  })
                }
              }
              return t
            }
          },
          canvas: function() {
            var e, t, r = !1,
              i = function() {
                var e = document.createElement("canvas");
                return e.width = 1, e.height = 1, [e, e.getContext("2d")]
              }(),
              n = i[0],
              a = i[1];
            if (function(e, t) {
                return !(!t || !e.toDataURL)
              }(n, a)) {
              r = function(e) {
                  return e.rect(0, 0, 10, 10), e.rect(2, 2, 6, 6), !e.isPointInPath(5, 5, "evenodd")
                }(a),
                function(e, t) {
                  e.width = 240, e.height = 60, t.textBaseline = "alphabetic", t.fillStyle = "#f60", t.fillRect(100, 1, 62, 20), t.fillStyle = "#069", t.font = '11pt "Times New Roman"';
                  var r = "Cwm fjordbank gly ".concat(String.fromCharCode(55357, 56835));
                  t.fillText(r, 2, 15), t.fillStyle = "rgba(102, 204, 0, 0.2)", t.font = "18pt Arial", t.fillText(r, 4, 45)
                }(n, a);
              var s = z(n);
              s !== z(n) ? e = t = "unstable" : (t = s, function(e, t) {
                e.width = 122, e.height = 110, t.globalCompositeOperation = "multiply";
                for (var r = 0, i = [
                    ["#f2f", 40, 40],
                    ["#2ff", 80, 40],
                    ["#ff2", 60, 80]
                  ]; r < i.length; r++) {
                  var n = i[r],
                    a = n[0],
                    s = n[1],
                    o = n[2];
                  t.fillStyle = a, t.beginPath(), t.arc(s, o, 40, 0, 2 * Math.PI, !0), t.closePath(), t.fill()
                }
                t.fillStyle = "#f9c", t.arc(60, 60, 60, 0, 2 * Math.PI, !0), t.arc(60, 60, 20, 0, 2 * Math.PI, !0), t.fill("evenodd")
              }(n, a), e = z(n))
            } else e = t = "";
            return {
              winding: r,
              geometry: e,
              text: t
            }
          },
          touchSupport: function() {
            var e, t = navigator,
              r = 0;
            void 0 !== t.maxTouchPoints ? r = v(t.maxTouchPoints) : void 0 !== t.msMaxTouchPoints && (r = t.msMaxTouchPoints);
            try {
              document.createEvent("TouchEvent"), e = !0
            } catch (t) {
              e = !1
            }
            return {
              maxTouchPoints: r,
              touchEvent: e,
              touchStart: "ontouchstart" in window
            }
          },
          vendor: function() {
            return navigator.vendor || ""
          },
          vendorFlavors: function() {
            for (var e = [], t = 0, r = ["chrome", "safari", "__crWeb", "__gCrWeb", "yandex", "__yb", "__ybro", "__firefox__", "__edgeTrackingPreventionStatistics", "webkit", "oprt", "samsungAr", "ucweb", "UCShellJava", "puffinDevice"]; t < r.length; t++) {
              var i = r[t],
                n = window[i];
              n && "object" == typeof n && e.push(i)
            }
            return e.sort()
          },
          cookiesEnabled: function() {
            var e = document;
            try {
              e.cookie = "cookietest=1; SameSite=Strict;";
              var t = -1 !== e.cookie.indexOf("cookietest=");
              return e.cookie = "cookietest=1; SameSite=Strict; expires=Thu, 01-Jan-1970 00:00:01 GMT", t
            } catch (e) {
              return !1
            }
          },
          colorGamut: function() {
            for (var e = 0, t = ["rec2020", "p3", "srgb"]; e < t.length; e++) {
              var r = t[e];
              if (matchMedia("(color-gamut: ".concat(r, ")")).matches) return r
            }
          },
          invertedColors: function() {
            return !!Z("inverted") || !Z("none") && void 0
          },
          forcedColors: function() {
            return !!$("active") || !$("none") && void 0
          },
          monochrome: function() {
            if (matchMedia("(min-monochrome: 0)").matches) {
              for (var e = 0; e <= 100; ++e)
                if (matchMedia("(max-monochrome: ".concat(e, ")")).matches) return e;
              throw new Error("Too high value")
            }
          },
          contrast: function() {
            return J("no-preference") ? 0 : J("high") || J("more") ? 1 : J("low") || J("less") ? -1 : J("forced") ? 10 : void 0
          },
          reducedMotion: function() {
            return !!K("reduce") || !K("no-preference") && void 0
          },
          hdr: function() {
            return !!Q("high") || !Q("standard") && void 0
          },
          math: function() {
            var e, t = ee.acos || te,
              r = ee.acosh || te,
              i = ee.asin || te,
              n = ee.asinh || te,
              a = ee.atanh || te,
              s = ee.atan || te,
              o = ee.sin || te,
              l = ee.sinh || te,
              h = ee.cos || te,
              c = ee.cosh || te,
              p = ee.tan || te,
              u = ee.tanh || te,
              d = ee.exp || te,
              f = ee.expm1 || te,
              m = ee.log1p || te;
            return {
              acos: t(.12312423423423424),
              acosh: r(1e308),
              acoshPf: (e = 1e154, ee.log(e + ee.sqrt(e * e - 1))),
              asin: i(.12312423423423424),
              asinh: n(1),
              asinhPf: ee.log(1 + ee.sqrt(2)),
              atanh: a(.5),
              atanhPf: ee.log(3) / 2,
              atan: s(.5),
              sin: o(-1e300),
              sinh: l(1),
              sinhPf: ee.exp(1) - 1 / ee.exp(1) / 2,
              cos: h(10.000000000123),
              cosh: c(1),
              coshPf: (ee.exp(1) + 1 / ee.exp(1)) / 2,
              tan: p(-1e300),
              tanh: u(1),
              tanhPf: (ee.exp(2) - 1) / (ee.exp(2) + 1),
              exp: d(1),
              expm1: f(1),
              expm1Pf: ee.exp(1) - 1,
              log1p: m(10),
              log1pPf: ee.log(11),
              powPI: ee.pow(ee.PI, -100)
            }
          },
          videoCard: function() {
            var e, t = document.createElement("canvas"),
              r = null !== (e = t.getContext("webgl")) && void 0 !== e ? e : t.getContext("experimental-webgl");
            if (r && "getExtension" in r) {
              var i = r.getExtension("WEBGL_debug_renderer_info");
              if (i) return {
                vendor: (r.getParameter(i.UNMASKED_VENDOR_WEBGL) || "").toString(),
                renderer: (r.getParameter(i.UNMASKED_RENDERER_WEBGL) || "").toString()
              }
            }
          },
          pdfViewerEnabled: function() {
            return navigator.pdfViewerEnabled
          },
          architecture: function() {
            var e = new Float32Array(1),
              t = new Uint8Array(e.buffer);
            return e[0] = 1 / 0, e[0] = e[0] - e[0], t[3]
          }
        },
        ne = "$ if upgrade to Pro: https://fpjs.dev/pro";

      function ae(e) {
        var t = function(e) {
            if (F()) return .4;
            if (A()) return k() ? .5 : .3;
            var t = e.platform.value || "";
            return /^Win/.test(t) ? .6 : /^Mac/.test(t) ? .5 : .7
          }(e),
          r = function(e) {
            return x(.99 + .01 * e, 1e-4)
          }(t);
        return {
          score: t,
          comment: ne.replace(/\$/g, "".concat(r))
        }
      }

      function se(e) {
        return JSON.stringify(e, (function(e, t) {
          return t instanceof Error ? (r = t, (0, i.C3)({
            name: r.name,
            message: r.message,
            stack: null === (n = r.stack) || void 0 === n ? void 0 : n.split("\n")
          }, r)) : t;
          var r, n
        }), 2)
      }

      function oe(e) {
        return g(function(e) {
          for (var t = "", r = 0, i = Object.keys(e).sort(); r < i.length; r++) {
            var n = i[r],
              a = e[n],
              s = a.error ? "error" : JSON.stringify(a.value);
            t += "".concat(t ? "|" : "").concat(n.replace(/([:|\\])/g, "\\$1"), ":").concat(s)
          }
          return t
        }(e))
      }

      function le(e) {
        return void 0 === e && (e = 50),
          function(e, t) {
            void 0 === t && (t = 1 / 0);
            var r = window.requestIdleCallback;
            return r ? new Promise((function(e) {
              return r.call(window, (function() {
                return e()
              }), {
                timeout: t
              })
            })) : a(Math.min(e, t))
          }(e, 2 * e)
      }

      function he(e, t) {
        var r = Date.now();
        return {
          get: function(a) {
            return (0, i.kH)(this, void 0, void 0, (function() {
              var s, o, l;
              return (0, i.KE)(this, (function(i) {
                switch (i.label) {
                  case 0:
                    return s = Date.now(), [4, e()];
                  case 1:
                    return o = i.sent(), l = function(e) {
                      var t;
                      return {
                        get visitorId() {
                          return void 0 === t && (t = oe(this.components)), t
                        },
                        set visitorId(e) {
                          t = e
                        },
                        confidence: ae(e),
                        components: e,
                        version: n
                      }
                    }(o), (t || (null == a ? void 0 : a.debug)) && console.log("Copy the text below to get the debug data:\n\n```\nversion: ".concat(l.version, "\nuserAgent: ").concat(navigator.userAgent, "\ntimeBetweenLoadAndGet: ").concat(s - r, "\nvisitorId: ").concat(l.visitorId, "\ncomponents: ").concat(se(o), "\n```")), [2, l]
                }
              }))
            }))
          }
        }
      }

      function ce(e) {
        var t = void 0 === e ? {} : e,
          r = t.delayFallback,
          a = t.debug,
          s = t.monitoring,
          o = void 0 === s || s;
        return (0, i.kH)(this, void 0, void 0, (function() {
          return (0, i.KE)(this, (function(e) {
            switch (e.label) {
              case 0:
                return o && function() {
                  if (!(window.__fpjs_d_m || Math.random() >= .001)) try {
                    var e = new XMLHttpRequest;
                    e.open("get", "https://m1.openfpcdn.io/fingerprintjs/v".concat(n, "/npm-monitoring"), !0), e.send()
                  } catch (e) {
                    console.error(e)
                  }
                }(), [4, le(r)];
              case 1:
                return e.sent(), [2, he(P(ie, {
                  debug: a
                }, []), a)]
            }
          }))
        }))
      }
      var pe = {
          load: ce,
          hashComponents: oe,
          componentsToDebugString: se
        },
        ue = g
    },
    8848: (e, t, r) => {
      var i, n, a, s = r(4340);

      function o(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let r = [0, 0, 0, 0];
        return r[3] += e[3] + t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] + t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] + t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] + t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function l(e, t) {
        e = [e[0] >>> 16, 65535 & e[0], e[1] >>> 16, 65535 & e[1]], t = [t[0] >>> 16, 65535 & t[0], t[1] >>> 16, 65535 & t[1]];
        let r = [0, 0, 0, 0];
        return r[3] += e[3] * t[3], r[2] += r[3] >>> 16, r[3] &= 65535, r[2] += e[2] * t[3], r[1] += r[2] >>> 16, r[2] &= 65535, r[2] += e[3] * t[2], r[1] += r[2] >>> 16, r[2] &= 65535, r[1] += e[1] * t[3], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[2] * t[2], r[0] += r[1] >>> 16, r[1] &= 65535, r[1] += e[3] * t[1], r[0] += r[1] >>> 16, r[1] &= 65535, r[0] += e[0] * t[3] + e[1] * t[2] + e[2] * t[1] + e[3] * t[0], r[0] &= 65535, [r[0] << 16 | r[1], r[2] << 16 | r[3]]
      }

      function h(e, t) {
        return 32 == (t %= 64) ? [e[1], e[0]] : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t | e[0] >>> 32 - t] : (t -= 32, [e[1] << t | e[0] >>> 32 - t, e[0] << t | e[1] >>> 32 - t])
      }

      function c(e, t) {
        return 0 == (t %= 64) ? e : t < 32 ? [e[0] << t | e[1] >>> 32 - t, e[1] << t] : [e[1] << t - 32, 0]
      }

      function p(e, t) {
        return [e[0] ^ t[0], e[1] ^ t[1]]
      }

      function u(e) {
        return e = p(e, [0, e[0] >>> 1]), e = p(e = l(e, [4283543511, 3981806797]), [0, e[0] >>> 1]), p(e = l(e, [3301882366, 444984403]), [0, e[0] >>> 1])
      }

      function d(e) {
        return e.length > 32 ? function(e, t) {
          t = t || 0;
          let r, i = (e = e || "").length % 16,
            n = e.length - i,
            a = [0, t],
            s = [0, t],
            d = [0, 0],
            f = [0, 0],
            m = [2277735313, 289559509],
            g = [1291169091, 658871167];
          for (r = 0; r < n; r += 16) d = [255 & e.charCodeAt(r + 4) | (255 & e.charCodeAt(r + 5)) << 8 | (255 & e.charCodeAt(r + 6)) << 16 | (255 & e.charCodeAt(r + 7)) << 24, 255 & e.charCodeAt(r) | (255 & e.charCodeAt(r + 1)) << 8 | (255 & e.charCodeAt(r + 2)) << 16 | (255 & e.charCodeAt(r + 3)) << 24], f = [255 & e.charCodeAt(r + 12) | (255 & e.charCodeAt(r + 13)) << 8 | (255 & e.charCodeAt(r + 14)) << 16 | (255 & e.charCodeAt(r + 15)) << 24, 255 & e.charCodeAt(r + 8) | (255 & e.charCodeAt(r + 9)) << 8 | (255 & e.charCodeAt(r + 10)) << 16 | (255 & e.charCodeAt(r + 11)) << 24], d = l(d, m), d = h(d, 31), d = l(d, g), a = p(a, d), a = h(a, 27), a = o(a, s), a = o(l(a, [0, 5]), [0, 1390208809]), f = l(f, g), f = h(f, 33), f = l(f, m), s = p(s, f), s = h(s, 31), s = o(s, a), s = o(l(s, [0, 5]), [0, 944331445]);
          switch (d = [0, 0], f = [0, 0], i) {
            case 15:
              f = p(f, c([0, e.charCodeAt(r + 14)], 48));
              break;
            case 14:
              f = p(f, c([0, e.charCodeAt(r + 13)], 40));
              break;
            case 13:
              f = p(f, c([0, e.charCodeAt(r + 12)], 32));
              break;
            case 12:
              f = p(f, c([0, e.charCodeAt(r + 11)], 24));
              break;
            case 11:
              f = p(f, c([0, e.charCodeAt(r + 10)], 16));
              break;
            case 10:
              f = p(f, c([0, e.charCodeAt(r + 9)], 8));
              break;
            case 9:
              f = p(f, [0, e.charCodeAt(r + 8)]), f = l(f, g), f = h(f, 33), f = l(f, m), s = p(s, f);
              break;
            case 8:
              d = p(d, c([0, e.charCodeAt(r + 7)], 56));
              break;
            case 7:
              d = p(d, c([0, e.charCodeAt(r + 6)], 48));
              break;
            case 6:
              d = p(d, c([0, e.charCodeAt(r + 5)], 40));
              break;
            case 5:
              d = p(d, c([0, e.charCodeAt(r + 4)], 32));
              break;
            case 4:
              d = p(d, c([0, e.charCodeAt(r + 3)], 24));
              break;
            case 3:
              d = p(d, c([0, e.charCodeAt(r + 2)], 16));
              break;
            case 2:
              d = p(d, c([0, e.charCodeAt(r + 1)], 8));
              break;
            case 1:
              d = p(d, [0, e.charCodeAt(r)]), d = l(d, m), d = h(d, 31), d = l(d, g), a = p(a, d)
          }
          return a = p(a, [0, e.length]), s = p(s, [0, e.length]), a = o(a, s), s = o(s, a), a = u(a), s = u(s), a = o(a, s), s = o(s, a), ("00000000" + (a[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (a[1] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[0] >>> 0).toString(16)).slice(-8) + ("00000000" + (s[1] >>> 0).toString(16)).slice(-8)
        }(e, 31) : e
      }

      function f(e) {
        const t = [...e];
        return function() {
          const e = [/palemoon/i];
          let t = !1;
          for (let r = 0, i = e.length; r < i; r++) {
            let i = e[r];
            if (navigator.userAgent.match(i)) {
              t = !0;
              break
            }
          }
          return t
        }() && (t = t.sort((function(e, t) {
          return e.name > t.name ? 1 : e.name < t.name ? -1 : 0
        }))), t.map((e => {
          let t = e.mimeTypes.map((e => [e.type, e.suffixes].join("~")));
          return [e.name, e.description, t].join("::")
        }))
      }

      function m() {
        let e = document.createElement("canvas");
        return !(!e.getContext || !e.getContext("2d"))
      }

      function g() {
        let e = document.createElement("div");
        e.innerHTML = "&nbsp;", e.className = "adsbox";
        let t = !1;
        try {
          document.body.appendChild(e), t = 0 === document.getElementsByClassName("adsbox")[0].offsetHeight, document.body.removeChild(e)
        } catch (e) {
          t = !1
        }
        return t
      }

      function v(e) {
        let t, r = navigator.oscpu,
          i = navigator.platform.toLowerCase(),
          n = b(e);
        if (t = "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0, t && "Windows Phone" !== n && "Android" !== n && "iOS" !== n && "Other" !== n) return !0;
        if (void 0 !== r) {
          if (r = r.toLowerCase(), r.indexOf("win") >= 0 && "Windows" !== n && "Windows Phone" !== n) return !0;
          if (r.indexOf("linux") >= 0 && "Linux" !== n && "Android" !== n) return !0;
          if (r.indexOf("mac") >= 0 && "Mac" !== n && "iOS" !== n) return !0;
          if (0 === r.indexOf("win") && 0 === r.indexOf("linux") && r.indexOf("mac") >= 0 && "other" !== n) return !0
        }
        return i.indexOf("win") >= 0 && "Windows" !== n && "Windows Phone" !== n || (i.indexOf("linux") >= 0 || i.indexOf("android") >= 0 || i.indexOf("pike") >= 0) && "Linux" !== n && "Android" !== n || (i.indexOf("mac") >= 0 || i.indexOf("ipad") >= 0 || i.indexOf("ipod") >= 0 || i.indexOf("iphone") >= 0) && "Mac" !== n && "iOS" !== n || 0 === i.indexOf("win") && 0 === i.indexOf("linux") && i.indexOf("mac") >= 0 && "other" !== n || void 0 === navigator.plugins && "Windows" !== n && "Windows Phone" !== n
      }

      function y(e, t) {
        const r = function() {
            let e, t = navigator.userAgent.toLowerCase();
            return e = t.indexOf("firefox") >= 0 ? "Firefox" : t.indexOf("ucbrowser") >= 0 ? "UC Browser" : t.indexOf("maxthon") >= 0 ? "Maxthon" : t.indexOf("opera") >= 0 || t.indexOf("opr") >= 0 ? "Opera" : t.indexOf("edge") >= 0 || t.indexOf("edg") >= 0 ? "Microsoft Edge" : t.indexOf("chrome") >= 0 || t.indexOf("crios") >= 0 ? "Chrome" : t.indexOf("playstation") >= 0 ? "PlayStation" : t.indexOf("safari") >= 0 ? "Safari" : t.indexOf("trident") >= 0 ? "Internet Explorer" : t.indexOf("nintendobrowser") >= 0 ? "Nintendo" : "Unknown browser", e
          }(),
          i = b(e, t);
        switch (r) {
          case "PlayStation":
          case "Nintendo":
            return i;
          default:
            return r + " on " + i
        }
      }

      function b(e, t) {
        if (e) return e;
        let r, i = navigator.userAgent.toLowerCase();
        return r = i.indexOf("windows phone") >= 0 ? "Windows Phone" : i.indexOf("steam") >= 0 ? "Steam" : i.indexOf("xbox series x") >= 0 || i.indexOf("xbox series s") >= 0 ? "Xbox Series X|S" : i.indexOf("xbox one") >= 0 || i.indexOf("xbox_one") >= 0 ? "Xbox One" : i.indexOf("xbox") >= 0 ? "Xbox 360" : t && t.model && "xbox" === t.model.toLowerCase() ? "Xbox" : i.indexOf("playstation 5") >= 0 ? "PlayStation 5" : i.indexOf("playstation 4") >= 0 ? "PlayStation 4" : i.indexOf("playstation 3") >= 0 ? "PlayStation 3" : i.indexOf("win") >= 0 ? "Windows" : i.indexOf("android") >= 0 ? "Android" : i.indexOf("linux") >= 0 ? "Linux" : i.indexOf("nintendo switch") >= 0 ? "Nintendo Switch" : i.indexOf("iphone") >= 0 || i.indexOf("ipad") >= 0 ? "iOS" : i.indexOf("mac") >= 0 ? "Mac" : "Unknown OS", r
      }

      function S(e) {
        let t = ["monospace", "sans-serif", "serif"],
          r = ["Andale Mono", "Arial", "Arial Black", "Arial Hebrew", "Arial MT", "Arial Narrow", "Arial Rounded MT Bold", "Arial Unicode MS", "Bitstream Vera Sans Mono", "Book Antiqua", "Bookman Old Style", "Calibri", "Cambria", "Cambria Math", "Century", "Century Gothic", "Century Schoolbook", "Comic Sans", "Comic Sans MS", "Consolas", "Courier", "Courier New", "Garamond", "Geneva", "Georgia", "Helvetica", "Helvetica Neue", "Impact", "Lucida Bright", "Lucida Calligraphy", "Lucida Console", "Lucida Fax", "LUCIDA GRANDE", "Lucida Handwriting", "Lucida Sans", "Lucida Sans Typewriter", "Lucida Sans Unicode", "Microsoft Sans Serif", "Monaco", "Monotype Corsiva", "MS Gothic", "MS Outlook", "MS PGothic", "MS Reference Sans Serif", "MS Sans Serif", "MS Serif", "MYRIAD", "MYRIAD PRO", "Palatino", "Palatino Linotype", "Segoe Print", "Segoe Script", "Segoe UI", "Segoe UI Light", "Segoe UI Semibold", "Segoe UI Symbol", "Tahoma", "Times", "Times New Roman", "Times New Roman PS", "Trebuchet MS", "Verdana", "Wingdings", "Wingdings 2", "Wingdings 3"],
          i = document.getElementsByTagName("body")[0],
          n = document.createElement("div"),
          a = document.createElement("div"),
          s = {},
          o = {},
          l = function() {
            let e = document.createElement("span");
            return e.style.position = "absolute", e.style.left = "-9999px", e.style.fontSize = "72px", e.innerHTML = "mmmmmmmmmmlli", e
          },
          h = function(e, t) {
            let r = l();
            return r.style.fontFamily = "'" + e + "'," + t, r
          },
          c = function(e) {
            let r = !1;
            for (let i = 0; i < t.length; i++)
              if (r = e[i].offsetWidth !== s[t[i]] || e[i].offsetHeight !== o[t[i]], r) return r;
            return r
          },
          p = function() {
            let e = [];
            for (let r = 0, i = t.length; r < i; r++) {
              let i = l();
              i.style.fontFamily = t[r], n.appendChild(i), e.push(i)
            }
            return e
          }();
        i.appendChild(n);
        for (let e = 0, r = t.length; e < r; e++) s[t[e]] = p[e].offsetWidth, o[t[e]] = p[e].offsetHeight;
        let u = function() {
          let e = {};
          for (let i = 0, n = r.length; i < n; i++) {
            let n = [];
            for (let e = 0, s = t.length; e < s; e++) {
              let s = h(r[i], t[e]);
              a.appendChild(s), n.push(s)
            }
            e[r[i]] = n
          }
          return e
        }();
        i.appendChild(a);
        let d = [];
        for (let e = 0, t = r.length; e < t; e++) c(u[r[e]]) && d.push(r[e]);
        return i.removeChild(a), i.removeChild(n), d
      }
      i = e.exports, Object.defineProperty(i, "__esModule", {
        value: !0,
        configurable: !0
      }), n = e.exports, a = () => w, Object.defineProperty(n, "default", {
        get: a,
        set: undefined,
        enumerable: !0,
        configurable: !0
      });
      let x = null;
      const E = {
        get: function(e) {
          return x || (x = new Promise((t => {
            const r = function(e) {
                return e && e.__esModule ? e.default : e
              }(s).load({
                monitoring: !1
              }),
              i = navigator.userAgentData && navigator.userAgentData.getHighEntropyValues ? navigator.userAgentData.getHighEntropyValues(["model"]) : Promise.resolve({});
            Promise.all([r, i]).then((r => {
              const i = r[0],
                n = r[1];
              i.get().then((r => {
                const i = r.components,
                  a = {
                    fp: {
                      user_agent: d(navigator.userAgent),
                      language: navigator.language || navigator.userLanguage || navigator.browserLanguage || navigator.systemLanguage || "",
                      pixel_ratio: window.devicePixelRatio || "",
                      timezone_offset: (new Date).getTimezoneOffset(),
                      session_storage: i.sessionStorage.value ? 1 : 0,
                      local_storage: i.localStorage.value ? 1 : 0,
                      indexed_db: i.indexedDB.value ? 1 : 0,
                      open_database: i.openDatabase.value ? 1 : 0,
                      cpu_class: i.cpuClass.value ? i.cpuClass.value : "unknown",
                      navigator_platform: i.platform.value ? i.platform.value : "unknown",
                      do_not_track: navigator.doNotTrack ? navigator.doNotTrack : "unknown",
                      regular_plugins: d(f(i.plugins.value).join(";")),
                      canvas: null,
                      webgl: null,
                      adblock: d(g()),
                      has_lied_os: v(n),
                      touch_support: [i.touchSupport.value.maxTouchPoints, i.touchSupport.value.touchEvent, i.touchSupport.value.touchStart].join(";"),
                      device_name: y(e, n),
                      js_fonts: d(S().join(";"))
                    }
                  };
                m() ? a.fp.canvas = d(function() {
                    let e = [],
                      t = document.createElement("canvas");
                    t.width = 2e3, t.height = 200, t.style.display = "inline";
                    let r = t.getContext("2d");
                    return r.rect(0, 0, 10, 10), r.rect(2, 2, 6, 6), e.push("canvas winding:" + (!1 === r.isPointInPath(5, 5, "evenodd") ? "yes" : "no")), r.textBaseline = "alphabetic", r.fillStyle = "#f60", r.fillRect(125, 1, 62, 20), r.fillStyle = "#069", r.font = "11pt no-real-font-123", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 2, 15), r.fillStyle = "rgba(102, 204, 0, 0.2)", r.font = "18pt Arial", r.fillText("Cwm fjordbank glyphs vext quiz, 😃", 4, 45), r.globalCompositeOperation = "multiply", r.fillStyle = "rgb(255,0,255)", r.beginPath(), r.arc(50, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(0,255,255)", r.beginPath(), r.arc(100, 50, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,255,0)", r.beginPath(), r.arc(75, 100, 50, 0, 2 * Math.PI, !0), r.closePath(), r.fill(), r.fillStyle = "rgb(255,0,255)", r.arc(75, 75, 75, 0, 2 * Math.PI, !0), r.arc(75, 75, 25, 0, 2 * Math.PI, !0), r.fill("evenodd"), e.push("canvas fp:" + t.toDataURL()), e.join("~")
                  }()) : delete a.fp.canvas,
                  function() {
                    if (!m()) return !1;
                    let e, t = document.createElement("canvas");
                    try {
                      e = t.getContext && (t.getContext("webgl") || t.getContext("experimental-webgl"))
                    } catch (t) {
                      e = !1
                    }
                    return !!window.WebGLRenderingContext && !!e
                  }() ? a.fp.webgl = d(function() {
                    let e, t = function(t) {
                      return e.clearColor(0, 0, 0, 1), e.enable(e.DEPTH_TEST), e.depthFunc(e.LEQUAL), e.clear(e.COLOR_BUFFER_BIT | e.DEPTH_BUFFER_BIT), "[" + t[0] + ", " + t[1] + "]"
                    };
                    if (e = function() {
                        let e = document.createElement("canvas"),
                          t = null;
                        try {
                          t = e.getContext("webgl") || e.getContext("experimental-webgl")
                        } catch (e) {}
                        return t || (t = null), t
                      }(), !e) return null;
                    let r = [],
                      i = e.createBuffer();
                    e.bindBuffer(e.ARRAY_BUFFER, i);
                    let n = new Float32Array([-.2, -.9, 0, .4, -.26, 0, 0, .732134444, 0]);
                    e.bufferData(e.ARRAY_BUFFER, n, e.STATIC_DRAW), i.itemSize = 3, i.numItems = 3;
                    let a = e.createProgram(),
                      s = e.createShader(e.VERTEX_SHADER);
                    e.shaderSource(s, "attribute vec2 attrVertex;varying vec2 varyinTexCoordinate;uniform vec2 uniformOffset;void main(){varyinTexCoordinate=attrVertex+uniformOffset;gl_Position=vec4(attrVertex,0,1);}"), e.compileShader(s);
                    let o = e.createShader(e.FRAGMENT_SHADER);
                    return e.shaderSource(o, "precision mediump float;varying vec2 varyinTexCoordinate;void main() {gl_FragColor=vec4(varyinTexCoordinate,0,1);}"), e.compileShader(o), e.attachShader(a, s), e.attachShader(a, o), e.linkProgram(a), e.useProgram(a), a.vertexPosAttrib = e.getAttribLocation(a, "attrVertex"), a.offsetUniform = e.getUniformLocation(a, "uniformOffset"), e.enableVertexAttribArray(a.vertexPosArray), e.vertexAttribPointer(a.vertexPosAttrib, i.itemSize, e.FLOAT, !1, 0, 0), e.uniform2f(a.offsetUniform, 1, 1), e.drawArrays(e.TRIANGLE_STRIP, 0, i.numItems), e.canvas && r.push(e.canvas.toDataURL()), r.push("extensions:" + e.getSupportedExtensions().join(";")), r.push("webgl aliased line width range:" + t(e.getParameter(e.ALIASED_LINE_WIDTH_RANGE))), r.push("webgl aliased point size range:" + t(e.getParameter(e.ALIASED_POINT_SIZE_RANGE))), r.push("webgl alpha bits:" + e.getParameter(e.ALPHA_BITS)), r.push("webgl antialiasing:" + (e.getContextAttributes().antialias ? "yes" : "no")), r.push("webgl blue bits:" + e.getParameter(e.BLUE_BITS)), r.push("webgl depth bits:" + e.getParameter(e.DEPTH_BITS)), r.push("webgl green bits:" + e.getParameter(e.GREEN_BITS)), r.push("webgl max anisotropy:" + function(e) {
                      let t, r = e.getExtension("EXT_texture_filter_anisotropic") || e.getExtension("WEBKIT_EXT_texture_filter_anisotropic") || e.getExtension("MOZ_EXT_texture_filter_anisotropic");
                      return r ? (t = e.getParameter(r.MAX_TEXTURE_MAX_ANISOTROPY_EXT), 0 === t && (t = 2), t) : null
                    }(e)), r.push("webgl max combined texture image units:" + e.getParameter(e.MAX_COMBINED_TEXTURE_IMAGE_UNITS)), r.push("webgl max cube map texture size:" + e.getParameter(e.MAX_CUBE_MAP_TEXTURE_SIZE)), r.push("webgl max fragment uniform vectors:" + e.getParameter(e.MAX_FRAGMENT_UNIFORM_VECTORS)), r.push("webgl max render buffer size:" + e.getParameter(e.MAX_RENDERBUFFER_SIZE)), r.push("webgl max texture image units:" + e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS)), r.push("webgl max texture size:" + e.getParameter(e.MAX_TEXTURE_SIZE)), r.push("webgl max varying vectors:" + e.getParameter(e.MAX_VARYING_VECTORS)), r.push("webgl max vertex attribs:" + e.getParameter(e.MAX_VERTEX_ATTRIBS)), r.push("webgl max vertex texture image units:" + e.getParameter(e.MAX_VERTEX_TEXTURE_IMAGE_UNITS)), r.push("webgl max vertex uniform vectors:" + e.getParameter(e.MAX_VERTEX_UNIFORM_VECTORS)), r.push("webgl max viewport dims:" + t(e.getParameter(e.MAX_VIEWPORT_DIMS))), r.push("webgl red bits:" + e.getParameter(e.RED_BITS)), r.push("webgl renderer:" + e.getParameter(e.RENDERER)), r.push("webgl shading language version:" + e.getParameter(e.SHADING_LANGUAGE_VERSION)), r.push("webgl stencil bits:" + e.getParameter(e.STENCIL_BITS)), r.push("webgl vendor:" + e.getParameter(e.VENDOR)), r.push("webgl version:" + e.getParameter(e.VERSION)), e.getShaderPrecisionFormat ? (r.push("webgl vertex shader high float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).precision), r.push("webgl vertex shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl vertex shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl vertex shader medium float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl vertex shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl vertex shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl vertex shader low float precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).precision), r.push("webgl vertex shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl vertex shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl fragment shader high float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).precision), r.push("webgl fragment shader high float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMin), r.push("webgl fragment shader high float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_FLOAT).rangeMax), r.push("webgl fragment shader medium float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).precision), r.push("webgl fragment shader medium float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMin), r.push("webgl fragment shader medium float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_FLOAT).rangeMax), r.push("webgl fragment shader low float precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).precision), r.push("webgl fragment shader low float precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMin), r.push("webgl fragment shader low float precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_FLOAT).rangeMax), r.push("webgl vertex shader high int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).precision), r.push("webgl vertex shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMin), r.push("webgl vertex shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.HIGH_INT).rangeMax), r.push("webgl vertex shader medium int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).precision), r.push("webgl vertex shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl vertex shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl vertex shader low int precision:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).precision), r.push("webgl vertex shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMin), r.push("webgl vertex shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.VERTEX_SHADER, e.LOW_INT).rangeMax), r.push("webgl fragment shader high int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).precision), r.push("webgl fragment shader high int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMin), r.push("webgl fragment shader high int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.HIGH_INT).rangeMax), r.push("webgl fragment shader medium int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).precision), r.push("webgl fragment shader medium int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMin), r.push("webgl fragment shader medium int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.MEDIUM_INT).rangeMax), r.push("webgl fragment shader low int precision:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).precision), r.push("webgl fragment shader low int precision rangeMin:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMin), r.push("webgl fragment shader low int precision rangeMax:" + e.getShaderPrecisionFormat(e.FRAGMENT_SHADER, e.LOW_INT).rangeMax), r.join("~")) : ("undefined" == typeof NODEBUG && console.log("WebGL fingerprinting is incomplete, because your browser does not support getShaderPrecisionFormat"), r.join("~"))
                  }()) : delete a.fp.webgl;
                const s = JSON.stringify(a);
                t(s)
              }))
            })).catch((e => console.error(e)))
          }))), x
        }
      };
      var w = E
    },
    2952: (e, t, r) => {
      "use strict";
      r.d(t, {
        U1: () => d
      });
      const i = function(e) {
          return "string" != typeof e || "" === e ? (console.error("The namespace must be a non-empty string."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.\-\/]*$/.test(e) || (console.error("The namespace can only contain numbers, letters, dashes, periods, underscores and slashes."), !1)
        },
        n = function(e) {
          return "string" != typeof e || "" === e ? (console.error("The hook name must be a non-empty string."), !1) : /^__/.test(e) ? (console.error("The hook name cannot begin with `__`."), !1) : !!/^[a-zA-Z][a-zA-Z0-9_.-]*$/.test(e) || (console.error("The hook name can only contain numbers, letters, dashes, periods and underscores."), !1)
        },
        a = function(e, t) {
          return function(r, a, s) {
            let o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 10;
            const l = e[t];
            if (!n(r)) return;
            if (!i(a)) return;
            if ("function" != typeof s) return void console.error("The hook callback must be a function.");
            if ("number" != typeof o) return void console.error("If specified, the hook priority must be a number.");
            const h = {
              callback: s,
              priority: o,
              namespace: a
            };
            if (l[r]) {
              const e = l[r].handlers;
              let t;
              for (t = e.length; t > 0 && !(o >= e[t - 1].priority); t--);
              t === e.length ? e[t] = h : e.splice(t, 0, h), l.__current.forEach((e => {
                e.name === r && e.currentIndex >= t && e.currentIndex++
              }))
            } else l[r] = {
              handlers: [h],
              runs: 0
            };
            "hookAdded" !== r && e.doAction("hookAdded", r, a, s, o)
          }
        },
        s = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(a, s) {
            const o = e[t];
            if (!n(a)) return;
            if (!r && !i(s)) return;
            if (!o[a]) return 0;
            let l = 0;
            if (r) l = o[a].handlers.length, o[a] = {
              runs: o[a].runs,
              handlers: []
            };
            else {
              const e = o[a].handlers;
              for (let t = e.length - 1; t >= 0; t--) e[t].namespace === s && (e.splice(t, 1), l++, o.__current.forEach((e => {
                e.name === a && e.currentIndex >= t && e.currentIndex--
              })))
            }
            return "hookRemoved" !== a && e.doAction("hookRemoved", a, s), l
          }
        },
        o = function(e, t) {
          return function(r, i) {
            const n = e[t];
            return void 0 !== i ? r in n && n[r].handlers.some((e => e.namespace === i)) : r in n
          }
        },
        l = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          return function(i) {
            const n = e[t];
            n[i] || (n[i] = {
              handlers: [],
              runs: 0
            }), n[i].runs++;
            const a = n[i].handlers;
            for (var s = arguments.length, o = new Array(s > 1 ? s - 1 : 0), l = 1; l < s; l++) o[l - 1] = arguments[l];
            if (!a || !a.length) return r ? o[0] : void 0;
            const h = {
              name: i,
              currentIndex: 0
            };
            for (n.__current.push(h); h.currentIndex < a.length;) {
              const e = a[h.currentIndex].callback.apply(null, o);
              r && (o[0] = e), h.currentIndex++
            }
            return n.__current.pop(), r ? o[0] : void 0
          }
        },
        h = function(e, t) {
          return function() {
            var r;
            const i = e[t];
            return null !== (r = i.__current[i.__current.length - 1]?.name) && void 0 !== r ? r : null
          }
        },
        c = function(e, t) {
          return function(r) {
            const i = e[t];
            return void 0 === r ? void 0 !== i.__current[0] : !!i.__current[0] && r === i.__current[0].name
          }
        },
        p = function(e, t) {
          return function(r) {
            const i = e[t];
            if (n(r)) return i[r] && i[r].runs ? i[r].runs : 0
          }
        };
      class u {
        constructor() {
          this.actions = Object.create(null), this.actions.__current = [], this.filters = Object.create(null), this.filters.__current = [], this.addAction = a(this, "actions"), this.addFilter = a(this, "filters"), this.removeAction = s(this, "actions"), this.removeFilter = s(this, "filters"), this.hasAction = o(this, "actions"), this.hasFilter = o(this, "filters"), this.removeAllActions = s(this, "actions", !0), this.removeAllFilters = s(this, "filters", !0), this.doAction = l(this, "actions"), this.applyFilters = l(this, "filters", !0), this.currentAction = h(this, "actions"), this.currentFilter = h(this, "filters"), this.doingAction = c(this, "actions"), this.doingFilter = c(this, "filters"), this.didAction = p(this, "actions"), this.didFilter = p(this, "filters")
        }
      }
      const d = function() {
          return new u
        },
        f = d(),
        {
          addAction: m,
          addFilter: g,
          removeAction: v,
          removeFilter: y,
          hasAction: b,
          hasFilter: S,
          removeAllActions: x,
          removeAllFilters: E,
          doAction: w,
          applyFilters: P,
          currentAction: T,
          currentFilter: C,
          doingAction: _,
          doingFilter: M,
          didAction: A,
          didFilter: k,
          actions: D,
          filters: I
        } = f
    },
    4125: (e, t, r) => {
      e.exports = {
        default: r(7264),
        __esModule: !0
      }
    },
    8064: (e, t, r) => {
      e.exports = {
        default: r(9256),
        __esModule: !0
      }
    },
    2120: (e, t, r) => {
      e.exports = {
        default: r(5488),
        __esModule: !0
      }
    },
    1736: (e, t, r) => {
      e.exports = {
        default: r(9016),
        __esModule: !0
      }
    },
    4660: (e, t, r) => {
      e.exports = {
        default: r(8952),
        __esModule: !0
      }
    },
    2031: (e, t, r) => {
      e.exports = {
        default: r(8704),
        __esModule: !0
      }
    },
    3144: (e, t, r) => {
      e.exports = {
        default: r(4780),
        __esModule: !0
      }
    },
    1944: (e, t) => {
      "use strict";
      t.__esModule = !0, t.default = function(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }
    },
    2352: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i, n = (i = r(2120)) && i.__esModule ? i : {
        default: i
      };
      t.default = function() {
        function e(e, t) {
          for (var r = 0; r < t.length; r++) {
            var i = t[r];
            i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), (0, n.default)(e, i.key, i)
          }
        }
        return function(t, r, i) {
          return r && e(t.prototype, r), i && e(t, i), t
        }
      }()
    },
    3752: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i, n = (i = r(4125)) && i.__esModule ? i : {
        default: i
      };
      t.default = n.default || function(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = arguments[t];
          for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
        }
        return e
      }
    },
    2484: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i = s(r(4660)),
        n = s(r(8064)),
        a = s(r(9520));

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      t.default = function(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + (void 0 === t ? "undefined" : (0, a.default)(t)));
        e.prototype = (0, n.default)(t && t.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0
          }
        }), t && (i.default ? (0, i.default)(e, t) : e.__proto__ = t)
      }
    },
    7056: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i, n = (i = r(9520)) && i.__esModule ? i : {
        default: i
      };
      t.default = function(e, t) {
        if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        return !t || "object" !== (void 0 === t ? "undefined" : (0, n.default)(t)) && "function" != typeof t ? e : t
      }
    },
    9520: (e, t, r) => {
      "use strict";
      t.__esModule = !0;
      var i = s(r(3144)),
        n = s(r(2031)),
        a = "function" == typeof n.default && "symbol" == typeof i.default ? function(e) {
          return typeof e
        } : function(e) {
          return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : typeof e
        };

      function s(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }
      t.default = "function" == typeof n.default && "symbol" === a(i.default) ? function(e) {
        return void 0 === e ? "undefined" : a(e)
      } : function(e) {
        return e && "function" == typeof n.default && e.constructor === n.default && e !== n.default.prototype ? "symbol" : void 0 === e ? "undefined" : a(e)
      }
    },
    7448: function(e) {
      e.exports = function() {
        "use strict";

        function e(t) {
          return e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, e(t)
        }

        function t(e, r) {
          return t = Object.setPrototypeOf || function(e, t) {
            return e.__proto__ = t, e
          }, t(e, r)
        }

        function r(e, i, n) {
          return r = function() {
            if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
            if (Reflect.construct.sham) return !1;
            if ("function" == typeof Proxy) return !0;
            try {
              return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
            } catch (e) {
              return !1
            }
          }() ? Reflect.construct : function(e, r, i) {
            var n = [null];
            n.push.apply(n, r);
            var a = new(Function.bind.apply(e, n));
            return i && t(a, i.prototype), a
          }, r.apply(null, arguments)
        }

        function i(e) {
          return function(e) {
            if (Array.isArray(e)) return n(e)
          }(e) || function(e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
          }(e) || function(e, t) {
            if (e) {
              if ("string" == typeof e) return n(e, t);
              var r = Object.prototype.toString.call(e).slice(8, -1);
              return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
            }
          }(e) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
          }()
        }

        function n(e, t) {
          (null == t || t > e.length) && (t = e.length);
          for (var r = 0, i = new Array(t); r < t; r++) i[r] = e[r];
          return i
        }
        var a = Object.hasOwnProperty,
          s = Object.setPrototypeOf,
          o = Object.isFrozen,
          l = Object.getPrototypeOf,
          h = Object.getOwnPropertyDescriptor,
          c = Object.freeze,
          p = Object.seal,
          u = Object.create,
          d = "undefined" != typeof Reflect && Reflect,
          f = d.apply,
          m = d.construct;
        f || (f = function(e, t, r) {
          return e.apply(t, r)
        }), c || (c = function(e) {
          return e
        }), p || (p = function(e) {
          return e
        }), m || (m = function(e, t) {
          return r(e, i(t))
        });
        var g, v = M(Array.prototype.forEach),
          y = M(Array.prototype.pop),
          b = M(Array.prototype.push),
          S = M(String.prototype.toLowerCase),
          x = M(String.prototype.toString),
          E = M(String.prototype.match),
          w = M(String.prototype.replace),
          P = M(String.prototype.indexOf),
          T = M(String.prototype.trim),
          C = M(RegExp.prototype.test),
          _ = (g = TypeError, function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            return m(g, t)
          });

        function M(e) {
          return function(t) {
            for (var r = arguments.length, i = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++) i[n - 1] = arguments[n];
            return f(e, t, i)
          }
        }

        function A(e, t, r) {
          var i;
          r = null !== (i = r) && void 0 !== i ? i : S, s && s(e, null);
          for (var n = t.length; n--;) {
            var a = t[n];
            if ("string" == typeof a) {
              var l = r(a);
              l !== a && (o(t) || (t[n] = l), a = l)
            }
            e[a] = !0
          }
          return e
        }

        function k(e) {
          var t, r = u(null);
          for (t in e) !0 === f(a, e, [t]) && (r[t] = e[t]);
          return r
        }

        function D(e, t) {
          for (; null !== e;) {
            var r = h(e, t);
            if (r) {
              if (r.get) return M(r.get);
              if ("function" == typeof r.value) return M(r.value)
            }
            e = l(e)
          }
          return function(e) {
            return console.warn("fallback value for", e), null
          }
        }
        var I = c(["a", "abbr", "acronym", "address", "area", "article", "aside", "audio", "b", "bdi", "bdo", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "content", "data", "datalist", "dd", "decorator", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "fieldset", "figcaption", "figure", "font", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "img", "input", "ins", "kbd", "label", "legend", "li", "main", "map", "mark", "marquee", "menu", "menuitem", "meter", "nav", "nobr", "ol", "optgroup", "option", "output", "p", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "section", "select", "shadow", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "tt", "u", "ul", "var", "video", "wbr"]),
          F = c(["svg", "a", "altglyph", "altglyphdef", "altglyphitem", "animatecolor", "animatemotion", "animatetransform", "circle", "clippath", "defs", "desc", "ellipse", "filter", "font", "g", "glyph", "glyphref", "hkern", "image", "line", "lineargradient", "marker", "mask", "metadata", "mpath", "path", "pattern", "polygon", "polyline", "radialgradient", "rect", "stop", "style", "switch", "symbol", "text", "textpath", "title", "tref", "tspan", "view", "vkern"]),
          L = c(["feBlend", "feColorMatrix", "feComponentTransfer", "feComposite", "feConvolveMatrix", "feDiffuseLighting", "feDisplacementMap", "feDistantLight", "feFlood", "feFuncA", "feFuncB", "feFuncG", "feFuncR", "feGaussianBlur", "feImage", "feMerge", "feMergeNode", "feMorphology", "feOffset", "fePointLight", "feSpecularLighting", "feSpotLight", "feTile", "feTurbulence"]),
          O = c(["animate", "color-profile", "cursor", "discard", "fedropshadow", "font-face", "font-face-format", "font-face-name", "font-face-src", "font-face-uri", "foreignobject", "hatch", "hatchpath", "mesh", "meshgradient", "meshpatch", "meshrow", "missing-glyph", "script", "set", "solidcolor", "unknown", "use"]),
          R = c(["math", "menclose", "merror", "mfenced", "mfrac", "mglyph", "mi", "mlabeledtr", "mmultiscripts", "mn", "mo", "mover", "mpadded", "mphantom", "mroot", "mrow", "ms", "mspace", "msqrt", "mstyle", "msub", "msup", "msubsup", "mtable", "mtd", "mtext", "mtr", "munder", "munderover"]),
          V = c(["maction", "maligngroup", "malignmark", "mlongdiv", "mscarries", "mscarry", "msgroup", "mstack", "msline", "msrow", "semantics", "annotation", "annotation-xml", "mprescripts", "none"]),
          B = c(["#text"]),
          N = c(["accept", "action", "align", "alt", "autocapitalize", "autocomplete", "autopictureinpicture", "autoplay", "background", "bgcolor", "border", "capture", "cellpadding", "cellspacing", "checked", "cite", "class", "clear", "color", "cols", "colspan", "controls", "controlslist", "coords", "crossorigin", "datetime", "decoding", "default", "dir", "disabled", "disablepictureinpicture", "disableremoteplayback", "download", "draggable", "enctype", "enterkeyhint", "face", "for", "headers", "height", "hidden", "high", "href", "hreflang", "id", "inputmode", "integrity", "ismap", "kind", "label", "lang", "list", "loading", "loop", "low", "max", "maxlength", "media", "method", "min", "minlength", "multiple", "muted", "name", "nonce", "noshade", "novalidate", "nowrap", "open", "optimum", "pattern", "placeholder", "playsinline", "poster", "preload", "pubdate", "radiogroup", "readonly", "rel", "required", "rev", "reversed", "role", "rows", "rowspan", "spellcheck", "scope", "selected", "shape", "size", "sizes", "span", "srclang", "start", "src", "srcset", "step", "style", "summary", "tabindex", "title", "translate", "type", "usemap", "valign", "value", "width", "xmlns", "slot"]),
          z = c(["accent-height", "accumulate", "additive", "alignment-baseline", "ascent", "attributename", "attributetype", "azimuth", "basefrequency", "baseline-shift", "begin", "bias", "by", "class", "clip", "clippathunits", "clip-path", "clip-rule", "color", "color-interpolation", "color-interpolation-filters", "color-profile", "color-rendering", "cx", "cy", "d", "dx", "dy", "diffuseconstant", "direction", "display", "divisor", "dur", "edgemode", "elevation", "end", "fill", "fill-opacity", "fill-rule", "filter", "filterunits", "flood-color", "flood-opacity", "font-family", "font-size", "font-size-adjust", "font-stretch", "font-style", "font-variant", "font-weight", "fx", "fy", "g1", "g2", "glyph-name", "glyphref", "gradientunits", "gradienttransform", "height", "href", "id", "image-rendering", "in", "in2", "k", "k1", "k2", "k3", "k4", "kerning", "keypoints", "keysplines", "keytimes", "lang", "lengthadjust", "letter-spacing", "kernelmatrix", "kernelunitlength", "lighting-color", "local", "marker-end", "marker-mid", "marker-start", "markerheight", "markerunits", "markerwidth", "maskcontentunits", "maskunits", "max", "mask", "media", "method", "mode", "min", "name", "numoctaves", "offset", "operator", "opacity", "order", "orient", "orientation", "origin", "overflow", "paint-order", "path", "pathlength", "patterncontentunits", "patterntransform", "patternunits", "points", "preservealpha", "preserveaspectratio", "primitiveunits", "r", "rx", "ry", "radius", "refx", "refy", "repeatcount", "repeatdur", "restart", "result", "rotate", "scale", "seed", "shape-rendering", "specularconstant", "specularexponent", "spreadmethod", "startoffset", "stddeviation", "stitchtiles", "stop-color", "stop-opacity", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke", "stroke-width", "style", "surfacescale", "systemlanguage", "tabindex", "targetx", "targety", "transform", "transform-origin", "text-anchor", "text-decoration", "text-rendering", "textlength", "type", "u1", "u2", "unicode", "values", "viewbox", "visibility", "version", "vert-adv-y", "vert-origin-x", "vert-origin-y", "width", "word-spacing", "wrap", "writing-mode", "xchannelselector", "ychannelselector", "x", "x1", "x2", "xmlns", "y", "y1", "y2", "z", "zoomandpan"]),
          G = c(["accent", "accentunder", "align", "bevelled", "close", "columnsalign", "columnlines", "columnspan", "denomalign", "depth", "dir", "display", "displaystyle", "encoding", "fence", "frame", "height", "href", "id", "largeop", "length", "linethickness", "lspace", "lquote", "mathbackground", "mathcolor", "mathsize", "mathvariant", "maxsize", "minsize", "movablelimits", "notation", "numalign", "open", "rowalign", "rowlines", "rowspacing", "rowspan", "rspace", "rquote", "scriptlevel", "scriptminsize", "scriptsizemultiplier", "selection", "separator", "separators", "stretchy", "subscriptshift", "supscriptshift", "symmetric", "voffset", "width", "xmlns"]),
          j = c(["xlink:href", "xml:id", "xlink:title", "xml:space", "xmlns:xlink"]),
          H = p(/\{\{[\w\W]*|[\w\W]*\}\}/gm),
          W = p(/<%[\w\W]*|[\w\W]*%>/gm),
          X = p(/\${[\w\W]*}/gm),
          Y = p(/^data-[\-\w.\u00B7-\uFFFF]/),
          U = p(/^aria-[\-\w]+$/),
          q = p(/^(?:(?:(?:f|ht)tps?|mailto|tel|callto|cid|xmpp):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i),
          Z = p(/^(?:\w+script|data):/i),
          $ = p(/[\u0000-\u0020\u00A0\u1680\u180E\u2000-\u2029\u205F\u3000]/g),
          J = p(/^html$/i),
          K = function() {
            return "undefined" == typeof window ? null : window
          };
        return function t() {
          var r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : K(),
            n = function(e) {
              return t(e)
            };
          if (n.version = "2.4.7", n.removed = [], !r || !r.document || 9 !== r.document.nodeType) return n.isSupported = !1, n;
          var a = r.document,
            s = r.document,
            o = r.DocumentFragment,
            l = r.HTMLTemplateElement,
            h = r.Node,
            p = r.Element,
            u = r.NodeFilter,
            d = r.NamedNodeMap,
            f = void 0 === d ? r.NamedNodeMap || r.MozNamedAttrMap : d,
            m = r.HTMLFormElement,
            g = r.DOMParser,
            M = r.trustedTypes,
            Q = p.prototype,
            ee = D(Q, "cloneNode"),
            te = D(Q, "nextSibling"),
            re = D(Q, "childNodes"),
            ie = D(Q, "parentNode");
          if ("function" == typeof l) {
            var ne = s.createElement("template");
            ne.content && ne.content.ownerDocument && (s = ne.content.ownerDocument)
          }
          var ae = function(t, r) {
              if ("object" !== e(t) || "function" != typeof t.createPolicy) return null;
              var i = null,
                n = "data-tt-policy-suffix";
              r.currentScript && r.currentScript.hasAttribute(n) && (i = r.currentScript.getAttribute(n));
              var a = "dompurify" + (i ? "#" + i : "");
              try {
                return t.createPolicy(a, {
                  createHTML: function(e) {
                    return e
                  },
                  createScriptURL: function(e) {
                    return e
                  }
                })
              } catch (e) {
                return console.warn("TrustedTypes policy " + a + " could not be created."), null
              }
            }(M, a),
            se = ae ? ae.createHTML("") : "",
            oe = s,
            le = oe.implementation,
            he = oe.createNodeIterator,
            ce = oe.createDocumentFragment,
            pe = oe.getElementsByTagName,
            ue = a.importNode,
            de = {};
          try {
            de = k(s).documentMode ? s.documentMode : {}
          } catch (e) {}
          var fe = {};
          n.isSupported = "function" == typeof ie && le && void 0 !== le.createHTMLDocument && 9 !== de;
          var me, ge, ve = H,
            ye = W,
            be = X,
            Se = Y,
            xe = U,
            Ee = Z,
            we = $,
            Pe = q,
            Te = null,
            Ce = A({}, [].concat(i(I), i(F), i(L), i(R), i(B))),
            _e = null,
            Me = A({}, [].concat(i(N), i(z), i(G), i(j))),
            Ae = Object.seal(Object.create(null, {
              tagNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              attributeNameCheck: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: null
              },
              allowCustomizedBuiltInElements: {
                writable: !0,
                configurable: !1,
                enumerable: !0,
                value: !1
              }
            })),
            ke = null,
            De = null,
            Ie = !0,
            Fe = !0,
            Le = !1,
            Oe = !0,
            Re = !1,
            Ve = !1,
            Be = !1,
            Ne = !1,
            ze = !1,
            Ge = !1,
            je = !1,
            He = !0,
            We = !1,
            Xe = !0,
            Ye = !1,
            Ue = {},
            qe = null,
            Ze = A({}, ["annotation-xml", "audio", "colgroup", "desc", "foreignobject", "head", "iframe", "math", "mi", "mn", "mo", "ms", "mtext", "noembed", "noframes", "noscript", "plaintext", "script", "style", "svg", "template", "thead", "title", "video", "xmp"]),
            $e = null,
            Je = A({}, ["audio", "video", "img", "source", "image", "track"]),
            Ke = null,
            Qe = A({}, ["alt", "class", "for", "id", "label", "name", "pattern", "placeholder", "role", "summary", "title", "value", "style", "xmlns"]),
            et = "http://www.w3.org/1998/Math/MathML",
            tt = "http://www.w3.org/2000/svg",
            rt = "http://www.w3.org/1999/xhtml",
            it = rt,
            nt = !1,
            at = null,
            st = A({}, [et, tt, rt], x),
            ot = ["application/xhtml+xml", "text/html"],
            lt = null,
            ht = s.createElement("form"),
            ct = function(e) {
              return e instanceof RegExp || e instanceof Function
            },
            pt = function(t) {
              lt && lt === t || (t && "object" === e(t) || (t = {}), t = k(t), me = me = -1 === ot.indexOf(t.PARSER_MEDIA_TYPE) ? "text/html" : t.PARSER_MEDIA_TYPE, ge = "application/xhtml+xml" === me ? x : S, Te = "ALLOWED_TAGS" in t ? A({}, t.ALLOWED_TAGS, ge) : Ce, _e = "ALLOWED_ATTR" in t ? A({}, t.ALLOWED_ATTR, ge) : Me, at = "ALLOWED_NAMESPACES" in t ? A({}, t.ALLOWED_NAMESPACES, x) : st, Ke = "ADD_URI_SAFE_ATTR" in t ? A(k(Qe), t.ADD_URI_SAFE_ATTR, ge) : Qe, $e = "ADD_DATA_URI_TAGS" in t ? A(k(Je), t.ADD_DATA_URI_TAGS, ge) : Je, qe = "FORBID_CONTENTS" in t ? A({}, t.FORBID_CONTENTS, ge) : Ze, ke = "FORBID_TAGS" in t ? A({}, t.FORBID_TAGS, ge) : {}, De = "FORBID_ATTR" in t ? A({}, t.FORBID_ATTR, ge) : {}, Ue = "USE_PROFILES" in t && t.USE_PROFILES, Ie = !1 !== t.ALLOW_ARIA_ATTR, Fe = !1 !== t.ALLOW_DATA_ATTR, Le = t.ALLOW_UNKNOWN_PROTOCOLS || !1, Oe = !1 !== t.ALLOW_SELF_CLOSE_IN_ATTR, Re = t.SAFE_FOR_TEMPLATES || !1, Ve = t.WHOLE_DOCUMENT || !1, ze = t.RETURN_DOM || !1, Ge = t.RETURN_DOM_FRAGMENT || !1, je = t.RETURN_TRUSTED_TYPE || !1, Ne = t.FORCE_BODY || !1, He = !1 !== t.SANITIZE_DOM, We = t.SANITIZE_NAMED_PROPS || !1, Xe = !1 !== t.KEEP_CONTENT, Ye = t.IN_PLACE || !1, Pe = t.ALLOWED_URI_REGEXP || Pe, it = t.NAMESPACE || rt, Ae = t.CUSTOM_ELEMENT_HANDLING || {}, t.CUSTOM_ELEMENT_HANDLING && ct(t.CUSTOM_ELEMENT_HANDLING.tagNameCheck) && (Ae.tagNameCheck = t.CUSTOM_ELEMENT_HANDLING.tagNameCheck), t.CUSTOM_ELEMENT_HANDLING && ct(t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck) && (Ae.attributeNameCheck = t.CUSTOM_ELEMENT_HANDLING.attributeNameCheck), t.CUSTOM_ELEMENT_HANDLING && "boolean" == typeof t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements && (Ae.allowCustomizedBuiltInElements = t.CUSTOM_ELEMENT_HANDLING.allowCustomizedBuiltInElements), Re && (Fe = !1), Ge && (ze = !0), Ue && (Te = A({}, i(B)), _e = [], !0 === Ue.html && (A(Te, I), A(_e, N)), !0 === Ue.svg && (A(Te, F), A(_e, z), A(_e, j)), !0 === Ue.svgFilters && (A(Te, L), A(_e, z), A(_e, j)), !0 === Ue.mathMl && (A(Te, R), A(_e, G), A(_e, j))), t.ADD_TAGS && (Te === Ce && (Te = k(Te)), A(Te, t.ADD_TAGS, ge)), t.ADD_ATTR && (_e === Me && (_e = k(_e)), A(_e, t.ADD_ATTR, ge)), t.ADD_URI_SAFE_ATTR && A(Ke, t.ADD_URI_SAFE_ATTR, ge), t.FORBID_CONTENTS && (qe === Ze && (qe = k(qe)), A(qe, t.FORBID_CONTENTS, ge)), Xe && (Te["#text"] = !0), Ve && A(Te, ["html", "head", "body"]), Te.table && (A(Te, ["tbody"]), delete ke.tbody), c && c(t), lt = t)
            },
            ut = A({}, ["mi", "mo", "mn", "ms", "mtext"]),
            dt = A({}, ["foreignobject", "desc", "title", "annotation-xml"]),
            ft = A({}, ["title", "style", "font", "a", "script"]),
            mt = A({}, F);
          A(mt, L), A(mt, O);
          var gt = A({}, R);
          A(gt, V);
          var vt = function(e) {
              b(n.removed, {
                element: e
              });
              try {
                e.parentNode.removeChild(e)
              } catch (t) {
                try {
                  e.outerHTML = se
                } catch (t) {
                  e.remove()
                }
              }
            },
            yt = function(e, t) {
              try {
                b(n.removed, {
                  attribute: t.getAttributeNode(e),
                  from: t
                })
              } catch (e) {
                b(n.removed, {
                  attribute: null,
                  from: t
                })
              }
              if (t.removeAttribute(e), "is" === e && !_e[e])
                if (ze || Ge) try {
                  vt(t)
                } catch (e) {} else try {
                  t.setAttribute(e, "")
                } catch (e) {}
            },
            bt = function(e) {
              var t, r;
              if (Ne) e = "<remove></remove>" + e;
              else {
                var i = E(e, /^[\r\n\t ]+/);
                r = i && i[0]
              }
              "application/xhtml+xml" === me && it === rt && (e = '<html xmlns="http://www.w3.org/1999/xhtml"><head></head><body>' + e + "</body></html>");
              var n = ae ? ae.createHTML(e) : e;
              if (it === rt) try {
                t = (new g).parseFromString(n, me)
              } catch (e) {}
              if (!t || !t.documentElement) {
                t = le.createDocument(it, "template", null);
                try {
                  t.documentElement.innerHTML = nt ? se : n
                } catch (e) {}
              }
              var a = t.body || t.documentElement;
              return e && r && a.insertBefore(s.createTextNode(r), a.childNodes[0] || null), it === rt ? pe.call(t, Ve ? "html" : "body")[0] : Ve ? t.documentElement : a
            },
            St = function(e) {
              return he.call(e.ownerDocument || e, e, u.SHOW_ELEMENT | u.SHOW_COMMENT | u.SHOW_TEXT, null, !1)
            },
            xt = function(t) {
              return "object" === e(h) ? t instanceof h : t && "object" === e(t) && "number" == typeof t.nodeType && "string" == typeof t.nodeName
            },
            Et = function(e, t, r) {
              fe[e] && v(fe[e], (function(e) {
                e.call(n, t, r, lt)
              }))
            },
            wt = function(e) {
              var t, r;
              if (Et("beforeSanitizeElements", e, null), (r = e) instanceof m && ("string" != typeof r.nodeName || "string" != typeof r.textContent || "function" != typeof r.removeChild || !(r.attributes instanceof f) || "function" != typeof r.removeAttribute || "function" != typeof r.setAttribute || "string" != typeof r.namespaceURI || "function" != typeof r.insertBefore || "function" != typeof r.hasChildNodes)) return vt(e), !0;
              if (C(/[\u0080-\uFFFF]/, e.nodeName)) return vt(e), !0;
              var i = ge(e.nodeName);
              if (Et("uponSanitizeElement", e, {
                  tagName: i,
                  allowedTags: Te
                }), e.hasChildNodes() && !xt(e.firstElementChild) && (!xt(e.content) || !xt(e.content.firstElementChild)) && C(/<[/\w]/g, e.innerHTML) && C(/<[/\w]/g, e.textContent)) return vt(e), !0;
              if ("select" === i && C(/<template/i, e.innerHTML)) return vt(e), !0;
              if (!Te[i] || ke[i]) {
                if (!ke[i] && Tt(i)) {
                  if (Ae.tagNameCheck instanceof RegExp && C(Ae.tagNameCheck, i)) return !1;
                  if (Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(i)) return !1
                }
                if (Xe && !qe[i]) {
                  var a = ie(e) || e.parentNode,
                    s = re(e) || e.childNodes;
                  if (s && a)
                    for (var o = s.length - 1; o >= 0; --o) a.insertBefore(ee(s[o], !0), te(e))
                }
                return vt(e), !0
              }
              return e instanceof p && ! function(e) {
                var t = ie(e);
                t && t.tagName || (t = {
                  namespaceURI: it,
                  tagName: "template"
                });
                var r = S(e.tagName),
                  i = S(t.tagName);
                return !!at[e.namespaceURI] && (e.namespaceURI === tt ? t.namespaceURI === rt ? "svg" === r : t.namespaceURI === et ? "svg" === r && ("annotation-xml" === i || ut[i]) : Boolean(mt[r]) : e.namespaceURI === et ? t.namespaceURI === rt ? "math" === r : t.namespaceURI === tt ? "math" === r && dt[i] : Boolean(gt[r]) : e.namespaceURI === rt ? !(t.namespaceURI === tt && !dt[i]) && !(t.namespaceURI === et && !ut[i]) && !gt[r] && (ft[r] || !mt[r]) : !("application/xhtml+xml" !== me || !at[e.namespaceURI]))
              }(e) ? (vt(e), !0) : "noscript" !== i && "noembed" !== i && "noframes" !== i || !C(/<\/no(script|embed|frames)/i, e.innerHTML) ? (Re && 3 === e.nodeType && (t = e.textContent, t = w(t, ve, " "), t = w(t, ye, " "), t = w(t, be, " "), e.textContent !== t && (b(n.removed, {
                element: e.cloneNode()
              }), e.textContent = t)), Et("afterSanitizeElements", e, null), !1) : (vt(e), !0)
            },
            Pt = function(e, t, r) {
              if (He && ("id" === t || "name" === t) && (r in s || r in ht)) return !1;
              if (Fe && !De[t] && C(Se, t));
              else if (Ie && C(xe, t));
              else if (!_e[t] || De[t]) {
                if (!(Tt(e) && (Ae.tagNameCheck instanceof RegExp && C(Ae.tagNameCheck, e) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(e)) && (Ae.attributeNameCheck instanceof RegExp && C(Ae.attributeNameCheck, t) || Ae.attributeNameCheck instanceof Function && Ae.attributeNameCheck(t)) || "is" === t && Ae.allowCustomizedBuiltInElements && (Ae.tagNameCheck instanceof RegExp && C(Ae.tagNameCheck, r) || Ae.tagNameCheck instanceof Function && Ae.tagNameCheck(r)))) return !1
              } else if (Ke[t]);
              else if (C(Pe, w(r, we, "")));
              else if ("src" !== t && "xlink:href" !== t && "href" !== t || "script" === e || 0 !== P(r, "data:") || !$e[e])
                if (Le && !C(Ee, w(r, we, "")));
                else if (r) return !1;
              return !0
            },
            Tt = function(e) {
              return e.indexOf("-") > 0
            },
            Ct = function(t) {
              var r, i, a, s;
              Et("beforeSanitizeAttributes", t, null);
              var o = t.attributes;
              if (o) {
                var l = {
                  attrName: "",
                  attrValue: "",
                  keepAttr: !0,
                  allowedAttributes: _e
                };
                for (s = o.length; s--;) {
                  var h = r = o[s],
                    c = h.name,
                    p = h.namespaceURI;
                  if (i = "value" === c ? r.value : T(r.value), a = ge(c), l.attrName = a, l.attrValue = i, l.keepAttr = !0, l.forceKeepAttr = void 0, Et("uponSanitizeAttribute", t, l), i = l.attrValue, !l.forceKeepAttr && (yt(c, t), l.keepAttr))
                    if (Oe || !C(/\/>/i, i)) {
                      Re && (i = w(i, ve, " "), i = w(i, ye, " "), i = w(i, be, " "));
                      var u = ge(t.nodeName);
                      if (Pt(u, a, i)) {
                        if (!We || "id" !== a && "name" !== a || (yt(c, t), i = "user-content-" + i), ae && "object" === e(M) && "function" == typeof M.getAttributeType)
                          if (p);
                          else switch (M.getAttributeType(u, a)) {
                            case "TrustedHTML":
                              i = ae.createHTML(i);
                              break;
                            case "TrustedScriptURL":
                              i = ae.createScriptURL(i)
                          }
                        try {
                          p ? t.setAttributeNS(p, c, i) : t.setAttribute(c, i), y(n.removed)
                        } catch (e) {}
                      }
                    } else yt(c, t)
                }
                Et("afterSanitizeAttributes", t, null)
              }
            },
            _t = function e(t) {
              var r, i = St(t);
              for (Et("beforeSanitizeShadowDOM", t, null); r = i.nextNode();) Et("uponSanitizeShadowNode", r, null), wt(r) || (r.content instanceof o && e(r.content), Ct(r));
              Et("afterSanitizeShadowDOM", t, null)
            };
          return n.sanitize = function(t) {
            var i, s, l, c, p, u = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
            if ((nt = !t) && (t = "\x3c!--\x3e"), "string" != typeof t && !xt(t)) {
              if ("function" != typeof t.toString) throw _("toString is not a function");
              if ("string" != typeof(t = t.toString())) throw _("dirty is not a string, aborting")
            }
            if (!n.isSupported) {
              if ("object" === e(r.toStaticHTML) || "function" == typeof r.toStaticHTML) {
                if ("string" == typeof t) return r.toStaticHTML(t);
                if (xt(t)) return r.toStaticHTML(t.outerHTML)
              }
              return t
            }
            if (Be || pt(u), n.removed = [], "string" == typeof t && (Ye = !1), Ye) {
              if (t.nodeName) {
                var d = ge(t.nodeName);
                if (!Te[d] || ke[d]) throw _("root node is forbidden and cannot be sanitized in-place")
              }
            } else if (t instanceof h) 1 === (s = (i = bt("\x3c!----\x3e")).ownerDocument.importNode(t, !0)).nodeType && "BODY" === s.nodeName || "HTML" === s.nodeName ? i = s : i.appendChild(s);
            else {
              if (!ze && !Re && !Ve && -1 === t.indexOf("<")) return ae && je ? ae.createHTML(t) : t;
              if (!(i = bt(t))) return ze ? null : je ? se : ""
            }
            i && Ne && vt(i.firstChild);
            for (var f = St(Ye ? t : i); l = f.nextNode();) 3 === l.nodeType && l === c || wt(l) || (l.content instanceof o && _t(l.content), Ct(l), c = l);
            if (c = null, Ye) return t;
            if (ze) {
              if (Ge)
                for (p = ce.call(i.ownerDocument); i.firstChild;) p.appendChild(i.firstChild);
              else p = i;
              return (_e.shadowroot || _e.shadowrootmod) && (p = ue.call(a, p, !0)), p
            }
            var m = Ve ? i.outerHTML : i.innerHTML;
            return Ve && Te["!doctype"] && i.ownerDocument && i.ownerDocument.doctype && i.ownerDocument.doctype.name && C(J, i.ownerDocument.doctype.name) && (m = "<!DOCTYPE " + i.ownerDocument.doctype.name + ">\n" + m), Re && (m = w(m, ve, " "), m = w(m, ye, " "), m = w(m, be, " ")), ae && je ? ae.createHTML(m) : m
          }, n.setConfig = function(e) {
            pt(e), Be = !0
          }, n.clearConfig = function() {
            lt = null, Be = !1
          }, n.isValidAttribute = function(e, t, r) {
            lt || pt({});
            var i = ge(e),
              n = ge(t);
            return Pt(i, n, r)
          }, n.addHook = function(e, t) {
            "function" == typeof t && (fe[e] = fe[e] || [], b(fe[e], t))
          }, n.removeHook = function(e) {
            if (fe[e]) return y(fe[e])
          }, n.removeHooks = function(e) {
            fe[e] && (fe[e] = [])
          }, n.removeAllHooks = function() {
            fe = {}
          }, n
        }()
      }()
    },
    1188: e => {
      function t(e) {
        return e && e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
      }

      function r(e) {
        return e
      }

      function i(e, i) {
        const n = (i = i || {}).delimiter || ".",
          a = i.maxDepth,
          s = i.transformKey || r,
          o = {};
        return function e(r, l, h) {
          h = h || 1, Object.keys(r).forEach((function(c) {
            const p = r[c],
              u = i.safe && Array.isArray(p),
              d = Object.prototype.toString.call(p),
              f = t(p),
              m = "[object Object]" === d || "[object Array]" === d,
              g = l ? l + n + s(c) : s(c);
            if (!u && !f && m && Object.keys(p).length && (!i.maxDepth || h < a)) return e(p, g, h + 1);
            o[g] = p
          }))
        }(e), o
      }
      e.exports = i, i.flatten = i, i.unflatten = function e(n, a) {
        const s = (a = a || {}).delimiter || ".",
          o = a.overwrite || !1,
          l = a.transformKey || r,
          h = {};
        if (t(n) || "[object Object]" !== Object.prototype.toString.call(n)) return n;

        function c(e) {
          const t = Number(e);
          return isNaN(t) || -1 !== e.indexOf(".") || a.object ? e : t
        }
        return n = Object.keys(n).reduce((function(e, t) {
          const r = Object.prototype.toString.call(n[t]);
          return "[object Object]" !== r && "[object Array]" !== r || function(e) {
            const t = Object.prototype.toString.call(e),
              r = "[object Object]" === t;
            return !e || ("[object Array]" === t ? !e.length : r ? !Object.keys(e).length : void 0)
          }(n[t]) ? (e[t] = n[t], e) : function(e, t, r) {
            return Object.keys(r).reduce((function(t, i) {
              return t[e + s + i] = r[i], t
            }), t)
          }(t, e, i(n[t], a))
        }), {}), Object.keys(n).forEach((function(t) {
          const r = t.split(s).map(l);
          let i = c(r.shift()),
            p = c(r[0]),
            u = h;
          for (; void 0 !== p;) {
            if ("__proto__" === i) return;
            const e = Object.prototype.toString.call(u[i]),
              t = "[object Object]" === e || "[object Array]" === e;
            if (!o && !t && void 0 !== u[i]) return;
            (o && !t || !o && null == u[i]) && (u[i] = "number" != typeof p || a.object ? {} : []), u = u[i], r.length > 0 && (i = c(r.shift()), p = c(r[0]))
          }
          u[i] = e(n[t], a)
        })), h
      }
    },
    6384: (e, t, r) => {
      var i;
      ! function(n, a, s, o) {
        "use strict";
        var l, h = ["", "webkit", "Moz", "MS", "ms", "o"],
          c = a.createElement("div"),
          p = "function",
          u = Math.round,
          d = Math.abs,
          f = Date.now;

        function m(e, t, r) {
          return setTimeout(E(e, r), t)
        }

        function g(e, t, r) {
          return !!Array.isArray(e) && (v(e, r[t], r), !0)
        }

        function v(e, t, r) {
          var i;
          if (e)
            if (e.forEach) e.forEach(t, r);
            else if (e.length !== o)
            for (i = 0; i < e.length;) t.call(r, e[i], i, e), i++;
          else
            for (i in e) e.hasOwnProperty(i) && t.call(r, e[i], i, e)
        }

        function y(e, t, r) {
          var i = "DEPRECATED METHOD: " + t + "\n" + r + " AT \n";
          return function() {
            var t = new Error("get-stack-trace"),
              r = t && t.stack ? t.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
              a = n.console && (n.console.warn || n.console.log);
            return a && a.call(n.console, i, r), e.apply(this, arguments)
          }
        }
        l = "function" != typeof Object.assign ? function(e) {
          if (e === o || null === e) throw new TypeError("Cannot convert undefined or null to object");
          for (var t = Object(e), r = 1; r < arguments.length; r++) {
            var i = arguments[r];
            if (i !== o && null !== i)
              for (var n in i) i.hasOwnProperty(n) && (t[n] = i[n])
          }
          return t
        } : Object.assign;
        var b = y((function(e, t, r) {
            for (var i = Object.keys(t), n = 0; n < i.length;)(!r || r && e[i[n]] === o) && (e[i[n]] = t[i[n]]), n++;
            return e
          }), "extend", "Use `assign`."),
          S = y((function(e, t) {
            return b(e, t, !0)
          }), "merge", "Use `assign`.");

        function x(e, t, r) {
          var i, n = t.prototype;
          (i = e.prototype = Object.create(n)).constructor = e, i._super = n, r && l(i, r)
        }

        function E(e, t) {
          return function() {
            return e.apply(t, arguments)
          }
        }

        function w(e, t) {
          return typeof e == p ? e.apply(t && t[0] || o, t) : e
        }

        function P(e, t) {
          return e === o ? t : e
        }

        function T(e, t, r) {
          v(A(t), (function(t) {
            e.addEventListener(t, r, !1)
          }))
        }

        function C(e, t, r) {
          v(A(t), (function(t) {
            e.removeEventListener(t, r, !1)
          }))
        }

        function _(e, t) {
          for (; e;) {
            if (e == t) return !0;
            e = e.parentNode
          }
          return !1
        }

        function M(e, t) {
          return e.indexOf(t) > -1
        }

        function A(e) {
          return e.trim().split(/\s+/g)
        }

        function k(e, t, r) {
          if (e.indexOf && !r) return e.indexOf(t);
          for (var i = 0; i < e.length;) {
            if (r && e[i][r] == t || !r && e[i] === t) return i;
            i++
          }
          return -1
        }

        function D(e) {
          return Array.prototype.slice.call(e, 0)
        }

        function I(e, t, r) {
          for (var i = [], n = [], a = 0; a < e.length;) {
            var s = t ? e[a][t] : e[a];
            k(n, s) < 0 && i.push(e[a]), n[a] = s, a++
          }
          return r && (i = t ? i.sort((function(e, r) {
            return e[t] > r[t]
          })) : i.sort()), i
        }

        function F(e, t) {
          for (var r, i, n = t[0].toUpperCase() + t.slice(1), a = 0; a < h.length;) {
            if ((i = (r = h[a]) ? r + n : t) in e) return i;
            a++
          }
          return o
        }
        var L = 1;

        function O(e) {
          var t = e.ownerDocument || e;
          return t.defaultView || t.parentWindow || n
        }
        var R = "ontouchstart" in n,
          V = F(n, "PointerEvent") !== o,
          B = R && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
          N = "touch",
          z = "mouse",
          G = 25,
          j = 1,
          H = 4,
          W = 8,
          X = 1,
          Y = 2,
          U = 4,
          q = 8,
          Z = 16,
          $ = Y | U,
          J = q | Z,
          K = $ | J,
          Q = ["x", "y"],
          ee = ["clientX", "clientY"];

        function te(e, t) {
          var r = this;
          this.manager = e, this.callback = t, this.element = e.element, this.target = e.options.inputTarget, this.domHandler = function(t) {
            w(e.options.enable, [e]) && r.handler(t)
          }, this.init()
        }

        function re(e, t, r) {
          var i = r.pointers.length,
            n = r.changedPointers.length,
            a = t & j && i - n == 0,
            s = t & (H | W) && i - n == 0;
          r.isFirst = !!a, r.isFinal = !!s, a && (e.session = {}), r.eventType = t,
            function(e, t) {
              var r = e.session,
                i = t.pointers,
                n = i.length;
              r.firstInput || (r.firstInput = ie(t)), n > 1 && !r.firstMultiple ? r.firstMultiple = ie(t) : 1 === n && (r.firstMultiple = !1);
              var a = r.firstInput,
                s = r.firstMultiple,
                l = s ? s.center : a.center,
                h = t.center = ne(i);
              t.timeStamp = f(), t.deltaTime = t.timeStamp - a.timeStamp, t.angle = le(l, h), t.distance = oe(l, h),
                function(e, t) {
                  var r = t.center,
                    i = e.offsetDelta || {},
                    n = e.prevDelta || {},
                    a = e.prevInput || {};
                  t.eventType !== j && a.eventType !== H || (n = e.prevDelta = {
                    x: a.deltaX || 0,
                    y: a.deltaY || 0
                  }, i = e.offsetDelta = {
                    x: r.x,
                    y: r.y
                  }), t.deltaX = n.x + (r.x - i.x), t.deltaY = n.y + (r.y - i.y)
                }(r, t), t.offsetDirection = se(t.deltaX, t.deltaY);
              var c, p, u = ae(t.deltaTime, t.deltaX, t.deltaY);
              t.overallVelocityX = u.x, t.overallVelocityY = u.y, t.overallVelocity = d(u.x) > d(u.y) ? u.x : u.y, t.scale = s ? (c = s.pointers, oe((p = i)[0], p[1], ee) / oe(c[0], c[1], ee)) : 1, t.rotation = s ? function(e, t) {
                  return le(t[1], t[0], ee) + le(e[1], e[0], ee)
                }(s.pointers, i) : 0, t.maxPointers = r.prevInput ? t.pointers.length > r.prevInput.maxPointers ? t.pointers.length : r.prevInput.maxPointers : t.pointers.length,
                function(e, t) {
                  var r, i, n, a, s = e.lastInterval || t,
                    l = t.timeStamp - s.timeStamp;
                  if (t.eventType != W && (l > G || s.velocity === o)) {
                    var h = t.deltaX - s.deltaX,
                      c = t.deltaY - s.deltaY,
                      p = ae(l, h, c);
                    i = p.x, n = p.y, r = d(p.x) > d(p.y) ? p.x : p.y, a = se(h, c), e.lastInterval = t
                  } else r = s.velocity, i = s.velocityX, n = s.velocityY, a = s.direction;
                  t.velocity = r, t.velocityX = i, t.velocityY = n, t.direction = a
                }(r, t);
              var m = e.element;
              _(t.srcEvent.target, m) && (m = t.srcEvent.target), t.target = m
            }(e, r), e.emit("hammer.input", r), e.recognize(r), e.session.prevInput = r
        }

        function ie(e) {
          for (var t = [], r = 0; r < e.pointers.length;) t[r] = {
            clientX: u(e.pointers[r].clientX),
            clientY: u(e.pointers[r].clientY)
          }, r++;
          return {
            timeStamp: f(),
            pointers: t,
            center: ne(t),
            deltaX: e.deltaX,
            deltaY: e.deltaY
          }
        }

        function ne(e) {
          var t = e.length;
          if (1 === t) return {
            x: u(e[0].clientX),
            y: u(e[0].clientY)
          };
          for (var r = 0, i = 0, n = 0; n < t;) r += e[n].clientX, i += e[n].clientY, n++;
          return {
            x: u(r / t),
            y: u(i / t)
          }
        }

        function ae(e, t, r) {
          return {
            x: t / e || 0,
            y: r / e || 0
          }
        }

        function se(e, t) {
          return e === t ? X : d(e) >= d(t) ? e < 0 ? Y : U : t < 0 ? q : Z
        }

        function oe(e, t, r) {
          r || (r = Q);
          var i = t[r[0]] - e[r[0]],
            n = t[r[1]] - e[r[1]];
          return Math.sqrt(i * i + n * n)
        }

        function le(e, t, r) {
          r || (r = Q);
          var i = t[r[0]] - e[r[0]],
            n = t[r[1]] - e[r[1]];
          return 180 * Math.atan2(n, i) / Math.PI
        }
        te.prototype = {
          handler: function() {},
          init: function() {
            this.evEl && T(this.element, this.evEl, this.domHandler), this.evTarget && T(this.target, this.evTarget, this.domHandler), this.evWin && T(O(this.element), this.evWin, this.domHandler)
          },
          destroy: function() {
            this.evEl && C(this.element, this.evEl, this.domHandler), this.evTarget && C(this.target, this.evTarget, this.domHandler), this.evWin && C(O(this.element), this.evWin, this.domHandler)
          }
        };
        var he = {
            mousedown: j,
            mousemove: 2,
            mouseup: H
          },
          ce = "mousedown",
          pe = "mousemove mouseup";

        function ue() {
          this.evEl = ce, this.evWin = pe, this.pressed = !1, te.apply(this, arguments)
        }
        x(ue, te, {
          handler: function(e) {
            var t = he[e.type];
            t & j && 0 === e.button && (this.pressed = !0), 2 & t && 1 !== e.which && (t = H), this.pressed && (t & H && (this.pressed = !1), this.callback(this.manager, t, {
              pointers: [e],
              changedPointers: [e],
              pointerType: z,
              srcEvent: e
            }))
          }
        });
        var de = {
            pointerdown: j,
            pointermove: 2,
            pointerup: H,
            pointercancel: W,
            pointerout: W
          },
          fe = {
            2: N,
            3: "pen",
            4: z,
            5: "kinect"
          },
          me = "pointerdown",
          ge = "pointermove pointerup pointercancel";

        function ve() {
          this.evEl = me, this.evWin = ge, te.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
        }
        n.MSPointerEvent && !n.PointerEvent && (me = "MSPointerDown", ge = "MSPointerMove MSPointerUp MSPointerCancel"), x(ve, te, {
          handler: function(e) {
            var t = this.store,
              r = !1,
              i = e.type.toLowerCase().replace("ms", ""),
              n = de[i],
              a = fe[e.pointerType] || e.pointerType,
              s = a == N,
              o = k(t, e.pointerId, "pointerId");
            n & j && (0 === e.button || s) ? o < 0 && (t.push(e), o = t.length - 1) : n & (H | W) && (r = !0), o < 0 || (t[o] = e, this.callback(this.manager, n, {
              pointers: t,
              changedPointers: [e],
              pointerType: a,
              srcEvent: e
            }), r && t.splice(o, 1))
          }
        });
        var ye = {
          touchstart: j,
          touchmove: 2,
          touchend: H,
          touchcancel: W
        };

        function be() {
          this.evTarget = "touchstart", this.evWin = "touchstart touchmove touchend touchcancel", this.started = !1, te.apply(this, arguments)
        }

        function Se(e, t) {
          var r = D(e.touches),
            i = D(e.changedTouches);
          return t & (H | W) && (r = I(r.concat(i), "identifier", !0)), [r, i]
        }
        x(be, te, {
          handler: function(e) {
            var t = ye[e.type];
            if (t === j && (this.started = !0), this.started) {
              var r = Se.call(this, e, t);
              t & (H | W) && r[0].length - r[1].length == 0 && (this.started = !1), this.callback(this.manager, t, {
                pointers: r[0],
                changedPointers: r[1],
                pointerType: N,
                srcEvent: e
              })
            }
          }
        });
        var xe = {
            touchstart: j,
            touchmove: 2,
            touchend: H,
            touchcancel: W
          },
          Ee = "touchstart touchmove touchend touchcancel";

        function we() {
          this.evTarget = Ee, this.targetIds = {}, te.apply(this, arguments)
        }

        function Pe(e, t) {
          var r = D(e.touches),
            i = this.targetIds;
          if (t & (2 | j) && 1 === r.length) return i[r[0].identifier] = !0, [r, r];
          var n, a, s = D(e.changedTouches),
            o = [],
            l = this.target;
          if (a = r.filter((function(e) {
              return _(e.target, l)
            })), t === j)
            for (n = 0; n < a.length;) i[a[n].identifier] = !0, n++;
          for (n = 0; n < s.length;) i[s[n].identifier] && o.push(s[n]), t & (H | W) && delete i[s[n].identifier], n++;
          return o.length ? [I(a.concat(o), "identifier", !0), o] : void 0
        }
        x(we, te, {
          handler: function(e) {
            var t = xe[e.type],
              r = Pe.call(this, e, t);
            r && this.callback(this.manager, t, {
              pointers: r[0],
              changedPointers: r[1],
              pointerType: N,
              srcEvent: e
            })
          }
        });
        var Te = 2500;

        function Ce() {
          te.apply(this, arguments);
          var e = E(this.handler, this);
          this.touch = new we(this.manager, e), this.mouse = new ue(this.manager, e), this.primaryTouch = null, this.lastTouches = []
        }

        function _e(e, t) {
          e & j ? (this.primaryTouch = t.changedPointers[0].identifier, Me.call(this, t)) : e & (H | W) && Me.call(this, t)
        }

        function Me(e) {
          var t = e.changedPointers[0];
          if (t.identifier === this.primaryTouch) {
            var r = {
              x: t.clientX,
              y: t.clientY
            };
            this.lastTouches.push(r);
            var i = this.lastTouches;
            setTimeout((function() {
              var e = i.indexOf(r);
              e > -1 && i.splice(e, 1)
            }), Te)
          }
        }

        function Ae(e) {
          for (var t = e.srcEvent.clientX, r = e.srcEvent.clientY, i = 0; i < this.lastTouches.length; i++) {
            var n = this.lastTouches[i],
              a = Math.abs(t - n.x),
              s = Math.abs(r - n.y);
            if (a <= 25 && s <= 25) return !0
          }
          return !1
        }
        x(Ce, te, {
          handler: function(e, t, r) {
            var i = r.pointerType == N,
              n = r.pointerType == z;
            if (!(n && r.sourceCapabilities && r.sourceCapabilities.firesTouchEvents)) {
              if (i) _e.call(this, t, r);
              else if (n && Ae.call(this, r)) return;
              this.callback(e, t, r)
            }
          },
          destroy: function() {
            this.touch.destroy(), this.mouse.destroy()
          }
        });
        var ke = F(c.style, "touchAction"),
          De = ke !== o,
          Ie = "compute",
          Fe = "auto",
          Le = "manipulation",
          Oe = "none",
          Re = "pan-x",
          Ve = "pan-y",
          Be = function() {
            if (!De) return !1;
            var e = {},
              t = n.CSS && n.CSS.supports;
            return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(r) {
              e[r] = !t || n.CSS.supports("touch-action", r)
            })), e
          }();

        function Ne(e, t) {
          this.manager = e, this.set(t)
        }
        Ne.prototype = {
          set: function(e) {
            e == Ie && (e = this.compute()), De && this.manager.element.style && Be[e] && (this.manager.element.style[ke] = e), this.actions = e.toLowerCase().trim()
          },
          update: function() {
            this.set(this.manager.options.touchAction)
          },
          compute: function() {
            var e = [];
            return v(this.manager.recognizers, (function(t) {
                w(t.options.enable, [t]) && (e = e.concat(t.getTouchAction()))
              })),
              function(e) {
                if (M(e, Oe)) return Oe;
                var t = M(e, Re),
                  r = M(e, Ve);
                return t && r ? Oe : t || r ? t ? Re : Ve : M(e, Le) ? Le : Fe
              }(e.join(" "))
          },
          preventDefaults: function(e) {
            var t = e.srcEvent,
              r = e.offsetDirection;
            if (this.manager.session.prevented) t.preventDefault();
            else {
              var i = this.actions,
                n = M(i, Oe) && !Be[Oe],
                a = M(i, Ve) && !Be[Ve],
                s = M(i, Re) && !Be[Re];
              if (n) {
                var o = 1 === e.pointers.length,
                  l = e.distance < 2,
                  h = e.deltaTime < 250;
                if (o && l && h) return
              }
              if (!s || !a) return n || a && r & $ || s && r & J ? this.preventSrc(t) : void 0
            }
          },
          preventSrc: function(e) {
            this.manager.session.prevented = !0, e.preventDefault()
          }
        };
        var ze = 1,
          Ge = 32;

        function je(e) {
          this.options = l({}, this.defaults, e || {}), this.id = L++, this.manager = null, this.options.enable = P(this.options.enable, !0), this.state = ze, this.simultaneous = {}, this.requireFail = []
        }

        function He(e) {
          return 16 & e ? "cancel" : 8 & e ? "end" : 4 & e ? "move" : 2 & e ? "start" : ""
        }

        function We(e) {
          return e == Z ? "down" : e == q ? "up" : e == Y ? "left" : e == U ? "right" : ""
        }

        function Xe(e, t) {
          var r = t.manager;
          return r ? r.get(e) : e
        }

        function Ye() {
          je.apply(this, arguments)
        }

        function Ue() {
          Ye.apply(this, arguments), this.pX = null, this.pY = null
        }

        function qe() {
          Ye.apply(this, arguments)
        }

        function Ze() {
          je.apply(this, arguments), this._timer = null, this._input = null
        }

        function $e() {
          Ye.apply(this, arguments)
        }

        function Je() {
          Ye.apply(this, arguments)
        }

        function Ke() {
          je.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
        }

        function Qe(e, t) {
          return (t = t || {}).recognizers = P(t.recognizers, Qe.defaults.preset), new et(e, t)
        }

        function et(e, t) {
          this.options = l({}, Qe.defaults, t || {}), this.options.inputTarget = this.options.inputTarget || e, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = e, this.input = new(this.options.inputClass || (V ? ve : B ? we : R ? Ce : ue))(this, re), this.touchAction = new Ne(this, this.options.touchAction), tt(this, !0), v(this.options.recognizers, (function(e) {
            var t = this.add(new e[0](e[1]));
            e[2] && t.recognizeWith(e[2]), e[3] && t.requireFailure(e[3])
          }), this)
        }

        function tt(e, t) {
          var r, i = e.element;
          i.style && (v(e.options.cssProps, (function(n, a) {
            r = F(i.style, a), t ? (e.oldCssProps[r] = i.style[r], i.style[r] = n) : i.style[r] = e.oldCssProps[r] || ""
          })), t || (e.oldCssProps = {}))
        }
        je.prototype = {
          defaults: {},
          set: function(e) {
            return l(this.options, e), this.manager && this.manager.touchAction.update(), this
          },
          recognizeWith: function(e) {
            if (g(e, "recognizeWith", this)) return this;
            var t = this.simultaneous;
            return t[(e = Xe(e, this)).id] || (t[e.id] = e, e.recognizeWith(this)), this
          },
          dropRecognizeWith: function(e) {
            return g(e, "dropRecognizeWith", this) || (e = Xe(e, this), delete this.simultaneous[e.id]), this
          },
          requireFailure: function(e) {
            if (g(e, "requireFailure", this)) return this;
            var t = this.requireFail;
            return -1 === k(t, e = Xe(e, this)) && (t.push(e), e.requireFailure(this)), this
          },
          dropRequireFailure: function(e) {
            if (g(e, "dropRequireFailure", this)) return this;
            e = Xe(e, this);
            var t = k(this.requireFail, e);
            return t > -1 && this.requireFail.splice(t, 1), this
          },
          hasRequireFailures: function() {
            return this.requireFail.length > 0
          },
          canRecognizeWith: function(e) {
            return !!this.simultaneous[e.id]
          },
          emit: function(e) {
            var t = this,
              r = this.state;

            function i(r) {
              t.manager.emit(r, e)
            }
            r < 8 && i(t.options.event + He(r)), i(t.options.event), e.additionalEvent && i(e.additionalEvent), r >= 8 && i(t.options.event + He(r))
          },
          tryEmit: function(e) {
            if (this.canEmit()) return this.emit(e);
            this.state = Ge
          },
          canEmit: function() {
            for (var e = 0; e < this.requireFail.length;) {
              if (!(this.requireFail[e].state & (Ge | ze))) return !1;
              e++
            }
            return !0
          },
          recognize: function(e) {
            var t = l({}, e);
            if (!w(this.options.enable, [this, t])) return this.reset(), void(this.state = Ge);
            56 & this.state && (this.state = ze), this.state = this.process(t), 30 & this.state && this.tryEmit(t)
          },
          process: function(e) {},
          getTouchAction: function() {},
          reset: function() {}
        }, x(Ye, je, {
          defaults: {
            pointers: 1
          },
          attrTest: function(e) {
            var t = this.options.pointers;
            return 0 === t || e.pointers.length === t
          },
          process: function(e) {
            var t = this.state,
              r = e.eventType,
              i = 6 & t,
              n = this.attrTest(e);
            return i && (r & W || !n) ? 16 | t : i || n ? r & H ? 8 | t : 2 & t ? 4 | t : 2 : Ge
          }
        }), x(Ue, Ye, {
          defaults: {
            event: "pan",
            threshold: 10,
            pointers: 1,
            direction: K
          },
          getTouchAction: function() {
            var e = this.options.direction,
              t = [];
            return e & $ && t.push(Ve), e & J && t.push(Re), t
          },
          directionTest: function(e) {
            var t = this.options,
              r = !0,
              i = e.distance,
              n = e.direction,
              a = e.deltaX,
              s = e.deltaY;
            return n & t.direction || (t.direction & $ ? (n = 0 === a ? X : a < 0 ? Y : U, r = a != this.pX, i = Math.abs(e.deltaX)) : (n = 0 === s ? X : s < 0 ? q : Z, r = s != this.pY, i = Math.abs(e.deltaY))), e.direction = n, r && i > t.threshold && n & t.direction
          },
          attrTest: function(e) {
            return Ye.prototype.attrTest.call(this, e) && (2 & this.state || !(2 & this.state) && this.directionTest(e))
          },
          emit: function(e) {
            this.pX = e.deltaX, this.pY = e.deltaY;
            var t = We(e.direction);
            t && (e.additionalEvent = this.options.event + t), this._super.emit.call(this, e)
          }
        }), x(qe, Ye, {
          defaults: {
            event: "pinch",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Oe]
          },
          attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.scale - 1) > this.options.threshold || 2 & this.state)
          },
          emit: function(e) {
            if (1 !== e.scale) {
              var t = e.scale < 1 ? "in" : "out";
              e.additionalEvent = this.options.event + t
            }
            this._super.emit.call(this, e)
          }
        }), x(Ze, je, {
          defaults: {
            event: "press",
            pointers: 1,
            time: 251,
            threshold: 9
          },
          getTouchAction: function() {
            return [Fe]
          },
          process: function(e) {
            var t = this.options,
              r = e.pointers.length === t.pointers,
              i = e.distance < t.threshold,
              n = e.deltaTime > t.time;
            if (this._input = e, !i || !r || e.eventType & (H | W) && !n) this.reset();
            else if (e.eventType & j) this.reset(), this._timer = m((function() {
              this.state = 8, this.tryEmit()
            }), t.time, this);
            else if (e.eventType & H) return 8;
            return Ge
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function(e) {
            8 === this.state && (e && e.eventType & H ? this.manager.emit(this.options.event + "up", e) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
          }
        }), x($e, Ye, {
          defaults: {
            event: "rotate",
            threshold: 0,
            pointers: 2
          },
          getTouchAction: function() {
            return [Oe]
          },
          attrTest: function(e) {
            return this._super.attrTest.call(this, e) && (Math.abs(e.rotation) > this.options.threshold || 2 & this.state)
          }
        }), x(Je, Ye, {
          defaults: {
            event: "swipe",
            threshold: 10,
            velocity: .3,
            direction: $ | J,
            pointers: 1
          },
          getTouchAction: function() {
            return Ue.prototype.getTouchAction.call(this)
          },
          attrTest: function(e) {
            var t, r = this.options.direction;
            return r & ($ | J) ? t = e.overallVelocity : r & $ ? t = e.overallVelocityX : r & J && (t = e.overallVelocityY), this._super.attrTest.call(this, e) && r & e.offsetDirection && e.distance > this.options.threshold && e.maxPointers == this.options.pointers && d(t) > this.options.velocity && e.eventType & H
          },
          emit: function(e) {
            var t = We(e.offsetDirection);
            t && this.manager.emit(this.options.event + t, e), this.manager.emit(this.options.event, e)
          }
        }), x(Ke, je, {
          defaults: {
            event: "tap",
            pointers: 1,
            taps: 1,
            interval: 300,
            time: 250,
            threshold: 9,
            posThreshold: 10
          },
          getTouchAction: function() {
            return [Le]
          },
          process: function(e) {
            var t = this.options,
              r = e.pointers.length === t.pointers,
              i = e.distance < t.threshold,
              n = e.deltaTime < t.time;
            if (this.reset(), e.eventType & j && 0 === this.count) return this.failTimeout();
            if (i && n && r) {
              if (e.eventType != H) return this.failTimeout();
              var a = !this.pTime || e.timeStamp - this.pTime < t.interval,
                s = !this.pCenter || oe(this.pCenter, e.center) < t.posThreshold;
              if (this.pTime = e.timeStamp, this.pCenter = e.center, s && a ? this.count += 1 : this.count = 1, this._input = e, 0 == this.count % t.taps) return this.hasRequireFailures() ? (this._timer = m((function() {
                this.state = 8, this.tryEmit()
              }), t.interval, this), 2) : 8
            }
            return Ge
          },
          failTimeout: function() {
            return this._timer = m((function() {
              this.state = Ge
            }), this.options.interval, this), Ge
          },
          reset: function() {
            clearTimeout(this._timer)
          },
          emit: function() {
            8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
          }
        }), Qe.VERSION = "2.0.7", Qe.defaults = {
          domEvents: !1,
          touchAction: Ie,
          enable: !0,
          inputTarget: null,
          inputClass: null,
          preset: [
            [$e, {
              enable: !1
            }],
            [qe, {
                enable: !1
              },
              ["rotate"]
            ],
            [Je, {
              direction: $
            }],
            [Ue, {
                direction: $
              },
              ["swipe"]
            ],
            [Ke],
            [Ke, {
                event: "doubletap",
                taps: 2
              },
              ["tap"]
            ],
            [Ze]
          ],
          cssProps: {
            userSelect: "none",
            touchSelect: "none",
            touchCallout: "none",
            contentZooming: "none",
            userDrag: "none",
            tapHighlightColor: "rgba(0,0,0,0)"
          }
        }, et.prototype = {
          set: function(e) {
            return l(this.options, e), e.touchAction && this.touchAction.update(), e.inputTarget && (this.input.destroy(), this.input.target = e.inputTarget, this.input.init()), this
          },
          stop: function(e) {
            this.session.stopped = e ? 2 : 1
          },
          recognize: function(e) {
            var t = this.session;
            if (!t.stopped) {
              var r;
              this.touchAction.preventDefaults(e);
              var i = this.recognizers,
                n = t.curRecognizer;
              (!n || n && 8 & n.state) && (n = t.curRecognizer = null);
              for (var a = 0; a < i.length;) r = i[a], 2 === t.stopped || n && r != n && !r.canRecognizeWith(n) ? r.reset() : r.recognize(e), !n && 14 & r.state && (n = t.curRecognizer = r), a++
            }
          },
          get: function(e) {
            if (e instanceof je) return e;
            for (var t = this.recognizers, r = 0; r < t.length; r++)
              if (t[r].options.event == e) return t[r];
            return null
          },
          add: function(e) {
            if (g(e, "add", this)) return this;
            var t = this.get(e.options.event);
            return t && this.remove(t), this.recognizers.push(e), e.manager = this, this.touchAction.update(), e
          },
          remove: function(e) {
            if (g(e, "remove", this)) return this;
            if (e = this.get(e)) {
              var t = this.recognizers,
                r = k(t, e); - 1 !== r && (t.splice(r, 1), this.touchAction.update())
            }
            return this
          },
          on: function(e, t) {
            if (e !== o && t !== o) {
              var r = this.handlers;
              return v(A(e), (function(e) {
                r[e] = r[e] || [], r[e].push(t)
              })), this
            }
          },
          off: function(e, t) {
            if (e !== o) {
              var r = this.handlers;
              return v(A(e), (function(e) {
                t ? r[e] && r[e].splice(k(r[e], t), 1) : delete r[e]
              })), this
            }
          },
          emit: function(e, t) {
            this.options.domEvents && function(e, t) {
              var r = a.createEvent("Event");
              r.initEvent(e, !0, !0), r.gesture = t, t.target.dispatchEvent(r)
            }(e, t);
            var r = this.handlers[e] && this.handlers[e].slice();
            if (r && r.length) {
              t.type = e, t.preventDefault = function() {
                t.srcEvent.preventDefault()
              };
              for (var i = 0; i < r.length;) r[i](t), i++
            }
          },
          destroy: function() {
            this.element && tt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
          }
        }, l(Qe, {
          INPUT_START: j,
          INPUT_MOVE: 2,
          INPUT_END: H,
          INPUT_CANCEL: W,
          STATE_POSSIBLE: ze,
          STATE_BEGAN: 2,
          STATE_CHANGED: 4,
          STATE_ENDED: 8,
          STATE_RECOGNIZED: 8,
          STATE_CANCELLED: 16,
          STATE_FAILED: Ge,
          DIRECTION_NONE: X,
          DIRECTION_LEFT: Y,
          DIRECTION_RIGHT: U,
          DIRECTION_UP: q,
          DIRECTION_DOWN: Z,
          DIRECTION_HORIZONTAL: $,
          DIRECTION_VERTICAL: J,
          DIRECTION_ALL: K,
          Manager: et,
          Input: te,
          TouchAction: Ne,
          TouchInput: we,
          MouseInput: ue,
          PointerEventInput: ve,
          TouchMouseInput: Ce,
          SingleTouchInput: be,
          Recognizer: je,
          AttrRecognizer: Ye,
          Tap: Ke,
          Pan: Ue,
          Swipe: Je,
          Pinch: qe,
          Rotate: $e,
          Press: Ze,
          on: T,
          off: C,
          each: v,
          merge: S,
          extend: b,
          assign: l,
          inherit: x,
          bindFn: E,
          prefixed: F
        }), (void 0 !== n ? n : "undefined" != typeof self ? self : {}).Hammer = Qe, (i = function() {
          return Qe
        }.call(t, r, t, e)) === o || (e.exports = i)
      }(window, document)
    },
    7580: (e, t, r) => {
      "use strict";

      function i() {
        return i = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }, i.apply(this, arguments)
      }

      function n(e) {
        return "/" === e.charAt(0)
      }

      function a(e, t) {
        for (var r = t, i = r + 1, n = e.length; i < n; r += 1, i += 1) e[r] = e[i];
        e.pop()
      }
      r.d(t, {
        iU: () => m
      });
      const s = function(e, t) {
        void 0 === t && (t = "");
        var r, i = e && e.split("/") || [],
          s = t && t.split("/") || [],
          o = e && n(e),
          l = t && n(t),
          h = o || l;
        if (e && n(e) ? s = i : i.length && (s.pop(), s = s.concat(i)), !s.length) return "/";
        if (s.length) {
          var c = s[s.length - 1];
          r = "." === c || ".." === c || "" === c
        } else r = !1;
        for (var p = 0, u = s.length; u >= 0; u--) {
          var d = s[u];
          "." === d ? a(s, u) : ".." === d ? (a(s, u), p++) : p && (a(s, u), p--)
        }
        if (!h)
          for (; p--; p) s.unshift("..");
        !h || "" === s[0] || s[0] && n(s[0]) || s.unshift("");
        var f = s.join("/");
        return r && "/" !== f.substr(-1) && (f += "/"), f
      };
      var o = !0,
        l = "Invariant failed";

      function h(e, t, r, n) {
        var a;
        "string" == typeof e ? (a = function(e) {
          var t = e || "/",
            r = "",
            i = "",
            n = t.indexOf("#"); - 1 !== n && (i = t.substr(n), t = t.substr(0, n));
          var a = t.indexOf("?");
          return -1 !== a && (r = t.substr(a), t = t.substr(0, a)), {
            pathname: t,
            search: "?" === r ? "" : r,
            hash: "#" === i ? "" : i
          }
        }(e), a.state = t) : (void 0 === (a = i({}, e)).pathname && (a.pathname = ""), a.search ? "?" !== a.search.charAt(0) && (a.search = "?" + a.search) : a.search = "", a.hash ? "#" !== a.hash.charAt(0) && (a.hash = "#" + a.hash) : a.hash = "", void 0 !== t && void 0 === a.state && (a.state = t));
        try {
          a.pathname = decodeURI(a.pathname)
        } catch (e) {
          throw e instanceof URIError ? new URIError('Pathname "' + a.pathname + '" could not be decoded. This is likely caused by an invalid percent-encoding.') : e
        }
        return r && (a.key = r), n ? a.pathname ? "/" !== a.pathname.charAt(0) && (a.pathname = s(a.pathname, n.pathname)) : a.pathname = n.pathname : a.pathname || (a.pathname = "/"), a
      }
      var c = !("undefined" == typeof window || !window.document || !window.document.createElement);

      function p(e, t) {
        t(window.confirm(e))
      }
      var u = "popstate",
        d = "hashchange";

      function f() {
        try {
          return window.history.state || {}
        } catch (e) {
          return {}
        }
      }

      function m(e) {
        void 0 === e && (e = {}), c || function(e, t) {
          if (o) throw new Error(l);
          throw new Error(l)
        }();
        var t, r, n = window.history,
          a = (-1 === (t = window.navigator.userAgent).indexOf("Android 2.") && -1 === t.indexOf("Android 4.0") || -1 === t.indexOf("Mobile Safari") || -1 !== t.indexOf("Chrome") || -1 !== t.indexOf("Windows Phone")) && window.history && "pushState" in window.history,
          s = !(-1 === window.navigator.userAgent.indexOf("Trident")),
          m = e,
          g = m.forceRefresh,
          v = void 0 !== g && g,
          y = m.getUserConfirmation,
          b = void 0 === y ? p : y,
          S = m.keyLength,
          x = void 0 === S ? 6 : S,
          E = e.basename ? function(e) {
            return "/" === e.charAt(e.length - 1) ? e.slice(0, -1) : e
          }("/" === (r = e.basename).charAt(0) ? r : "/" + r) : "";

        function w(e) {
          var t = e || {},
            r = t.key,
            i = t.state,
            n = window.location,
            a = n.pathname + n.search + n.hash;
          return E && (a = function(e, t) {
            return function(e, t) {
              return 0 === e.toLowerCase().indexOf(t.toLowerCase()) && -1 !== "/?#".indexOf(e.charAt(t.length))
            }(e, t) ? e.substr(t.length) : e
          }(a, E)), h(a, i, r)
        }

        function P() {
          return Math.random().toString(36).substr(2, x)
        }
        var T, C, _ = (T = null, C = [], {
          setPrompt: function(e) {
            return T = e,
              function() {
                T === e && (T = null)
              }
          },
          confirmTransitionTo: function(e, t, r, i) {
            if (null != T) {
              var n = "function" == typeof T ? T(e, t) : T;
              "string" == typeof n ? "function" == typeof r ? r(n, i) : i(!0) : i(!1 !== n)
            } else i(!0)
          },
          appendListener: function(e) {
            var t = !0;

            function r() {
              t && e.apply(void 0, arguments)
            }
            return C.push(r),
              function() {
                t = !1, C = C.filter((function(e) {
                  return e !== r
                }))
              }
          },
          notifyListeners: function() {
            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
            C.forEach((function(e) {
              return e.apply(void 0, t)
            }))
          }
        });

        function M(e) {
          i(z, e), z.length = n.length, _.notifyListeners(z.location, z.action)
        }

        function A(e) {
          (function(e) {
            return void 0 === e.state && -1 === navigator.userAgent.indexOf("CriOS")
          })(e) || I(w(e.state))
        }

        function k() {
          I(w(f()))
        }
        var D = !1;

        function I(e) {
          D ? (D = !1, M()) : _.confirmTransitionTo(e, "POP", b, (function(t) {
            t ? M({
              action: "POP",
              location: e
            }) : function(e) {
              var t = z.location,
                r = L.indexOf(t.key); - 1 === r && (r = 0);
              var i = L.indexOf(e.key); - 1 === i && (i = 0);
              var n = r - i;
              n && (D = !0, R(n))
            }(e)
          }))
        }
        var F = w(f()),
          L = [F.key];

        function O(e) {
          return E + function(e) {
            var t = e.pathname,
              r = e.search,
              i = e.hash,
              n = t || "/";
            return r && "?" !== r && (n += "?" === r.charAt(0) ? r : "?" + r), i && "#" !== i && (n += "#" === i.charAt(0) ? i : "#" + i), n
          }(e)
        }

        function R(e) {
          n.go(e)
        }
        var V = 0;

        function B(e) {
          1 === (V += e) && 1 === e ? (window.addEventListener(u, A), s && window.addEventListener(d, k)) : 0 === V && (window.removeEventListener(u, A), s && window.removeEventListener(d, k))
        }
        var N = !1,
          z = {
            length: n.length,
            action: "POP",
            location: F,
            createHref: O,
            push: function(e, t) {
              var r = "PUSH",
                i = h(e, t, P(), z.location);
              _.confirmTransitionTo(i, r, b, (function(e) {
                if (e) {
                  var t = O(i),
                    s = i.key,
                    o = i.state;
                  if (a)
                    if (n.pushState({
                        key: s,
                        state: o
                      }, null, t), v) window.location.href = t;
                    else {
                      var l = L.indexOf(z.location.key),
                        h = L.slice(0, l + 1);
                      h.push(i.key), L = h, M({
                        action: r,
                        location: i
                      })
                    }
                  else window.location.href = t
                }
              }))
            },
            replace: function(e, t) {
              var r = "REPLACE",
                i = h(e, t, P(), z.location);
              _.confirmTransitionTo(i, r, b, (function(e) {
                if (e) {
                  var t = O(i),
                    s = i.key,
                    o = i.state;
                  if (a)
                    if (n.replaceState({
                        key: s,
                        state: o
                      }, null, t), v) window.location.replace(t);
                    else {
                      var l = L.indexOf(z.location.key); - 1 !== l && (L[l] = i.key), M({
                        action: r,
                        location: i
                      })
                    }
                  else window.location.replace(t)
                }
              }))
            },
            go: R,
            goBack: function() {
              R(-1)
            },
            goForward: function() {
              R(1)
            },
            block: function(e) {
              void 0 === e && (e = !1);
              var t = _.setPrompt(e);
              return N || (B(1), N = !0),
                function() {
                  return N && (N = !1, B(-1)), t()
                }
            },
            listen: function(e) {
              var t = _.appendListener(e);
              return B(1),
                function() {
                  B(-1), t()
                }
            }
          };
        return z
      }
    },
    6208: (e, t, r) => {
      var i = r(496).Symbol;
      e.exports = i
    },
    4175: (e, t, r) => {
      var i = r(6208),
        n = r(1172),
        a = r(3720),
        s = i ? i.toStringTag : void 0;
      e.exports = function(e) {
        return null == e ? void 0 === e ? "[object Undefined]" : "[object Null]" : s && s in Object(e) ? n(e) : a(e)
      }
    },
    5248: (e, t, r) => {
      var i = r(7908),
        n = /^\s+/;
      e.exports = function(e) {
        return e ? e.slice(0, i(e) + 1).replace(n, "") : e
      }
    },
    748: (e, t, r) => {
      var i = "object" == typeof r.g && r.g && r.g.Object === Object && r.g;
      e.exports = i
    },
    1172: (e, t, r) => {
      var i = r(6208),
        n = Object.prototype,
        a = n.hasOwnProperty,
        s = n.toString,
        o = i ? i.toStringTag : void 0;
      e.exports = function(e) {
        var t = a.call(e, o),
          r = e[o];
        try {
          e[o] = void 0;
          var i = !0
        } catch (e) {}
        var n = s.call(e);
        return i && (t ? e[o] = r : delete e[o]), n
      }
    },
    3720: e => {
      var t = Object.prototype.toString;
      e.exports = function(e) {
        return t.call(e)
      }
    },
    496: (e, t, r) => {
      var i = r(748),
        n = "object" == typeof self && self && self.Object === Object && self,
        a = i || n || Function("return this")();
      e.exports = a
    },
    7908: e => {
      var t = /\s/;
      e.exports = function(e) {
        for (var r = e.length; r-- && t.test(e.charAt(r)););
        return r
      }
    },
    8931: (e, t, r) => {
      var i = r(576),
        n = r(9152),
        a = r(6532),
        s = Math.max,
        o = Math.min;
      e.exports = function(e, t, r) {
        var l, h, c, p, u, d, f = 0,
          m = !1,
          g = !1,
          v = !0;
        if ("function" != typeof e) throw new TypeError("Expected a function");

        function y(t) {
          var r = l,
            i = h;
          return l = h = void 0, f = t, p = e.apply(i, r)
        }

        function b(e) {
          var r = e - d;
          return void 0 === d || r >= t || r < 0 || g && e - f >= c
        }

        function S() {
          var e = n();
          if (b(e)) return x(e);
          u = setTimeout(S, function(e) {
            var r = t - (e - d);
            return g ? o(r, c - (e - f)) : r
          }(e))
        }

        function x(e) {
          return u = void 0, v && l ? y(e) : (l = h = void 0, p)
        }

        function E() {
          var e = n(),
            r = b(e);
          if (l = arguments, h = this, d = e, r) {
            if (void 0 === u) return function(e) {
              return f = e, u = setTimeout(S, t), m ? y(e) : p
            }(d);
            if (g) return clearTimeout(u), u = setTimeout(S, t), y(d)
          }
          return void 0 === u && (u = setTimeout(S, t)), p
        }
        return t = a(t) || 0, i(r) && (m = !!r.leading, c = (g = "maxWait" in r) ? s(a(r.maxWait) || 0, t) : c, v = "trailing" in r ? !!r.trailing : v), E.cancel = function() {
          void 0 !== u && clearTimeout(u), f = 0, l = d = h = u = void 0
        }, E.flush = function() {
          return void 0 === u ? p : x(n())
        }, E
      }
    },
    576: e => {
      e.exports = function(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
      }
    },
    9480: e => {
      e.exports = function(e) {
        return null != e && "object" == typeof e
      }
    },
    8128: (e, t, r) => {
      var i = r(4175),
        n = r(9480);
      e.exports = function(e) {
        return "symbol" == typeof e || n(e) && "[object Symbol]" == i(e)
      }
    },
    9152: (e, t, r) => {
      var i = r(496);
      e.exports = function() {
        return i.Date.now()
      }
    },
    6532: (e, t, r) => {
      var i = r(5248),
        n = r(576),
        a = r(8128),
        s = /^[-+]0x[0-9a-f]+$/i,
        o = /^0b[01]+$/i,
        l = /^0o[0-7]+$/i,
        h = parseInt;
      e.exports = function(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return NaN;
        if (n(e)) {
          var t = "function" == typeof e.valueOf ? e.valueOf() : e;
          e = n(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = i(e);
        var r = o.test(e);
        return r || l.test(e) ? h(e.slice(2), r ? 2 : 8) : s.test(e) ? NaN : +e
      }
    },
    4368: function(module, exports, __webpack_require__) {
      var factory;
      "undefined" != typeof navigator && (factory = function() {
        "use strict";
        var svgNS = "http://www.w3.org/2000/svg",
          locationHref = "",
          _useWebWorker = !1,
          initialDefaultFrame = -999999,
          setWebWorker = function(e) {
            _useWebWorker = !!e
          },
          getWebWorker = function() {
            return _useWebWorker
          },
          setLocationHref = function(e) {
            locationHref = e
          },
          getLocationHref = function() {
            return locationHref
          };

        function createTag(e) {
          return document.createElement(e)
        }

        function extendPrototype(e, t) {
          var r, i, n = e.length;
          for (r = 0; r < n; r += 1)
            for (var a in i = e[r].prototype) Object.prototype.hasOwnProperty.call(i, a) && (t.prototype[a] = i[a])
        }

        function getDescriptor(e, t) {
          return Object.getOwnPropertyDescriptor(e, t)
        }

        function createProxyFunction(e) {
          function t() {}
          return t.prototype = e, t
        }
        var audioControllerFactory = function() {
            function e(e) {
              this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1
            }
            return e.prototype = {
                addAudio: function(e) {
                  this.audios.push(e)
                },
                pause: function() {
                  var e, t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].pause()
                },
                resume: function() {
                  var e, t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].resume()
                },
                setRate: function(e) {
                  var t, r = this.audios.length;
                  for (t = 0; t < r; t += 1) this.audios[t].setRate(e)
                },
                createAudio: function(e) {
                  return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({
                    src: [e]
                  }) : {
                    isPlaying: !1,
                    play: function() {
                      this.isPlaying = !0
                    },
                    seek: function() {
                      this.isPlaying = !1
                    },
                    playing: function() {},
                    rate: function() {},
                    setVolume: function() {}
                  }
                },
                setAudioFactory: function(e) {
                  this.audioFactory = e
                },
                setVolume: function(e) {
                  this._volume = e, this._updateVolume()
                },
                mute: function() {
                  this._isMuted = !0, this._updateVolume()
                },
                unmute: function() {
                  this._isMuted = !1, this._updateVolume()
                },
                getVolume: function() {
                  return this._volume
                },
                _updateVolume: function() {
                  var e, t = this.audios.length;
                  for (e = 0; e < t; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1))
                }
              },
              function() {
                return new e
              }
          }(),
          createTypedArray = function() {
            function e(e, t) {
              var r, i = 0,
                n = [];
              switch (e) {
                case "int16":
                case "uint8c":
                  r = 1;
                  break;
                default:
                  r = 1.1
              }
              for (i = 0; i < t; i += 1) n.push(r);
              return n
            }
            return "function" == typeof Uint8ClampedArray && "function" == typeof Float32Array ? function(t, r) {
              return "float32" === t ? new Float32Array(r) : "int16" === t ? new Int16Array(r) : "uint8c" === t ? new Uint8ClampedArray(r) : e(t, r)
            } : e
          }();

        function createSizedArray(e) {
          return Array.apply(null, {
            length: e
          })
        }

        function _typeof$6(e) {
          return _typeof$6 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$6(e)
        }
        var subframeEnabled = !0,
          expressionsPlugin = null,
          expressionsInterfaces = null,
          idPrefix$1 = "",
          isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
          _shouldRoundValues = !1,
          bmPow = Math.pow,
          bmSqrt = Math.sqrt,
          bmFloor = Math.floor,
          bmMax = Math.max,
          bmMin = Math.min,
          BMMath = {};

        function ProjectInterface$1() {
          return {}
        }! function() {
          var e, t = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"],
            r = t.length;
          for (e = 0; e < r; e += 1) BMMath[t[e]] = Math[t[e]]
        }(), BMMath.random = Math.random, BMMath.abs = function(e) {
          if ("object" === _typeof$6(e) && e.length) {
            var t, r = createSizedArray(e.length),
              i = e.length;
            for (t = 0; t < i; t += 1) r[t] = Math.abs(e[t]);
            return r
          }
          return Math.abs(e)
        };
        var defaultCurveSegments = 150,
          degToRads = Math.PI / 180,
          roundCorner = .5519;

        function roundValues(e) {
          _shouldRoundValues = !!e
        }

        function bmRnd(e) {
          return _shouldRoundValues ? Math.round(e) : e
        }

        function styleDiv(e) {
          e.style.position = "absolute", e.style.top = 0, e.style.left = 0, e.style.display = "block", e.style.transformOrigin = "0 0", e.style.webkitTransformOrigin = "0 0", e.style.backfaceVisibility = "visible", e.style.webkitBackfaceVisibility = "visible", e.style.transformStyle = "preserve-3d", e.style.webkitTransformStyle = "preserve-3d", e.style.mozTransformStyle = "preserve-3d"
        }

        function BMEnterFrameEvent(e, t, r, i) {
          this.type = e, this.currentTime = t, this.totalTime = r, this.direction = i < 0 ? -1 : 1
        }

        function BMCompleteEvent(e, t) {
          this.type = e, this.direction = t < 0 ? -1 : 1
        }

        function BMCompleteLoopEvent(e, t, r, i) {
          this.type = e, this.currentLoop = r, this.totalLoops = t, this.direction = i < 0 ? -1 : 1
        }

        function BMSegmentStartEvent(e, t, r) {
          this.type = e, this.firstFrame = t, this.totalFrames = r
        }

        function BMDestroyEvent(e, t) {
          this.type = e, this.target = t
        }

        function BMRenderFrameErrorEvent(e, t) {
          this.type = "renderFrameError", this.nativeError = e, this.currentTime = t
        }

        function BMConfigErrorEvent(e) {
          this.type = "configError", this.nativeError = e
        }

        function BMAnimationConfigErrorEvent(e, t) {
          this.type = e, this.nativeError = t
        }
        var createElementID = (_count = 0, function() {
            return idPrefix$1 + "__lottie_element_" + (_count += 1)
          }),
          _count;

        function HSVtoRGB(e, t, r) {
          var i, n, a, s, o, l, h, c;
          switch (l = r * (1 - t), h = r * (1 - (o = 6 * e - (s = Math.floor(6 * e))) * t), c = r * (1 - (1 - o) * t), s % 6) {
            case 0:
              i = r, n = c, a = l;
              break;
            case 1:
              i = h, n = r, a = l;
              break;
            case 2:
              i = l, n = r, a = c;
              break;
            case 3:
              i = l, n = h, a = r;
              break;
            case 4:
              i = c, n = l, a = r;
              break;
            case 5:
              i = r, n = l, a = h
          }
          return [i, n, a]
        }

        function RGBtoHSV(e, t, r) {
          var i, n = Math.max(e, t, r),
            a = Math.min(e, t, r),
            s = n - a,
            o = 0 === n ? 0 : s / n,
            l = n / 255;
          switch (n) {
            case a:
              i = 0;
              break;
            case e:
              i = t - r + s * (t < r ? 6 : 0), i /= 6 * s;
              break;
            case t:
              i = r - e + 2 * s, i /= 6 * s;
              break;
            case r:
              i = e - t + 4 * s, i /= 6 * s
          }
          return [i, o, l]
        }

        function addSaturationToRGB(e, t) {
          var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
          return r[1] += t, r[1] > 1 ? r[1] = 1 : r[1] <= 0 && (r[1] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addBrightnessToRGB(e, t) {
          var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
          return r[2] += t, r[2] > 1 ? r[2] = 1 : r[2] < 0 && (r[2] = 0), HSVtoRGB(r[0], r[1], r[2])
        }

        function addHueToRGB(e, t) {
          var r = RGBtoHSV(255 * e[0], 255 * e[1], 255 * e[2]);
          return r[0] += t / 360, r[0] > 1 ? r[0] -= 1 : r[0] < 0 && (r[0] += 1), HSVtoRGB(r[0], r[1], r[2])
        }
        var rgbToHex = function() {
            var e, t, r = [];
            for (e = 0; e < 256; e += 1) t = e.toString(16), r[e] = 1 === t.length ? "0" + t : t;
            return function(e, t, i) {
              return e < 0 && (e = 0), t < 0 && (t = 0), i < 0 && (i = 0), "#" + r[e] + r[t] + r[i]
            }
          }(),
          setSubframeEnabled = function(e) {
            subframeEnabled = !!e
          },
          getSubframeEnabled = function() {
            return subframeEnabled
          },
          setExpressionsPlugin = function(e) {
            expressionsPlugin = e
          },
          getExpressionsPlugin = function() {
            return expressionsPlugin
          },
          setExpressionInterfaces = function(e) {
            expressionsInterfaces = e
          },
          getExpressionInterfaces = function() {
            return expressionsInterfaces
          },
          setDefaultCurveSegments = function(e) {
            defaultCurveSegments = e
          },
          getDefaultCurveSegments = function() {
            return defaultCurveSegments
          },
          setIdPrefix = function(e) {
            idPrefix$1 = e
          },
          getIdPrefix = function() {
            return idPrefix$1
          };

        function createNS(e) {
          return document.createElementNS(svgNS, e)
        }

        function _typeof$5(e) {
          return _typeof$5 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$5(e)
        }
        var dataManager = function() {
            var e, t, r = 1,
              i = [],
              n = {
                onmessage: function() {},
                postMessage: function(t) {
                  e({
                    data: t
                  })
                }
              },
              a = {
                postMessage: function(e) {
                  n.onmessage({
                    data: e
                  })
                }
              };

            function s() {
              t || (t = function(t) {
                if (window.Worker && window.Blob && getWebWorker()) {
                  var r = new Blob(["var _workerSelf = self; self.onmessage = ", t.toString()], {
                      type: "text/javascript"
                    }),
                    i = URL.createObjectURL(r);
                  return new Worker(i)
                }
                return e = t, n
              }((function(e) {
                if (a.dataManager || (a.dataManager = function() {
                    function e(n, a) {
                      var s, o, l, h, c, p, u, d = n.length;
                      for (o = 0; o < d; o += 1)
                        if ("ks" in (s = n[o]) && !s.completed) {
                          if (s.completed = !0, s.hasMask) {
                            var f = s.masksProperties;
                            for (h = f.length, l = 0; l < h; l += 1)
                              if (f[l].pt.k.i) i(f[l].pt.k);
                              else
                                for (p = f[l].pt.k.length, c = 0; c < p; c += 1) f[l].pt.k[c].s && i(f[l].pt.k[c].s[0]), f[l].pt.k[c].e && i(f[l].pt.k[c].e[0])
                          }
                          0 === s.ty ? (s.layers = t(s.refId, a), e(s.layers, a)) : 4 === s.ty ? r(s.shapes) : 5 === s.ty && (0 === (u = s).t.a.length && u.t.p)
                        }
                    }

                    function t(e, t) {
                      var r = function(e, t) {
                        for (var r = 0, i = t.length; r < i;) {
                          if (t[r].id === e) return t[r];
                          r += 1
                        }
                        return null
                      }(e, t);
                      return r ? r.layers.__used ? JSON.parse(JSON.stringify(r.layers)) : (r.layers.__used = !0, r.layers) : null
                    }

                    function r(e) {
                      var t, n, a;
                      for (t = e.length - 1; t >= 0; t -= 1)
                        if ("sh" === e[t].ty)
                          if (e[t].ks.k.i) i(e[t].ks.k);
                          else
                            for (a = e[t].ks.k.length, n = 0; n < a; n += 1) e[t].ks.k[n].s && i(e[t].ks.k[n].s[0]), e[t].ks.k[n].e && i(e[t].ks.k[n].e[0]);
                      else "gr" === e[t].ty && r(e[t].it)
                    }

                    function i(e) {
                      var t, r = e.i.length;
                      for (t = 0; t < r; t += 1) e.i[t][0] += e.v[t][0], e.i[t][1] += e.v[t][1], e.o[t][0] += e.v[t][0], e.o[t][1] += e.v[t][1]
                    }

                    function n(e, t) {
                      var r = t ? t.split(".") : [100, 100, 100];
                      return e[0] > r[0] || !(r[0] > e[0]) && (e[1] > r[1] || !(r[1] > e[1]) && (e[2] > r[2] || !(r[2] > e[2]) && null))
                    }
                    var a, s = function() {
                        var e = [4, 4, 14];

                        function t(e) {
                          var t, r, i, n = e.length;
                          for (t = 0; t < n; t += 1) 5 === e[t].ty && (void 0, i = (r = e[t]).t.d, r.t.d = {
                            k: [{
                              s: i,
                              t: 0
                            }]
                          })
                        }
                        return function(r) {
                          if (n(e, r.v) && (t(r.layers), r.assets)) {
                            var i, a = r.assets.length;
                            for (i = 0; i < a; i += 1) r.assets[i].layers && t(r.assets[i].layers)
                          }
                        }
                      }(),
                      o = (a = [4, 7, 99], function(e) {
                        if (e.chars && !n(a, e.v)) {
                          var t, i = e.chars.length;
                          for (t = 0; t < i; t += 1) {
                            var s = e.chars[t];
                            s.data && s.data.shapes && (r(s.data.shapes), s.data.ip = 0, s.data.op = 99999, s.data.st = 0, s.data.sr = 1, s.data.ks = {
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              }
                            }, e.chars[t].t || (s.data.shapes.push({
                              ty: "no"
                            }), s.data.shapes[0].it.push({
                              p: {
                                k: [0, 0],
                                a: 0
                              },
                              s: {
                                k: [100, 100],
                                a: 0
                              },
                              a: {
                                k: [0, 0],
                                a: 0
                              },
                              r: {
                                k: 0,
                                a: 0
                              },
                              o: {
                                k: 100,
                                a: 0
                              },
                              sk: {
                                k: 0,
                                a: 0
                              },
                              sa: {
                                k: 0,
                                a: 0
                              },
                              ty: "tr"
                            })))
                          }
                        }
                      }),
                      l = function() {
                        var e = [5, 7, 15];

                        function t(e) {
                          var t, r, i = e.length;
                          for (t = 0; t < i; t += 1) 5 === e[t].ty && (r = void 0, "number" == typeof(r = e[t].t.p).a && (r.a = {
                            a: 0,
                            k: r.a
                          }), "number" == typeof r.p && (r.p = {
                            a: 0,
                            k: r.p
                          }), "number" == typeof r.r && (r.r = {
                            a: 0,
                            k: r.r
                          }))
                        }
                        return function(r) {
                          if (n(e, r.v) && (t(r.layers), r.assets)) {
                            var i, a = r.assets.length;
                            for (i = 0; i < a; i += 1) r.assets[i].layers && t(r.assets[i].layers)
                          }
                        }
                      }(),
                      h = function() {
                        var e = [4, 1, 9];

                        function t(e) {
                          var r, i, n, a = e.length;
                          for (r = 0; r < a; r += 1)
                            if ("gr" === e[r].ty) t(e[r].it);
                            else if ("fl" === e[r].ty || "st" === e[r].ty)
                            if (e[r].c.k && e[r].c.k[0].i)
                              for (n = e[r].c.k.length, i = 0; i < n; i += 1) e[r].c.k[i].s && (e[r].c.k[i].s[0] /= 255, e[r].c.k[i].s[1] /= 255, e[r].c.k[i].s[2] /= 255, e[r].c.k[i].s[3] /= 255), e[r].c.k[i].e && (e[r].c.k[i].e[0] /= 255, e[r].c.k[i].e[1] /= 255, e[r].c.k[i].e[2] /= 255, e[r].c.k[i].e[3] /= 255);
                            else e[r].c.k[0] /= 255, e[r].c.k[1] /= 255, e[r].c.k[2] /= 255, e[r].c.k[3] /= 255
                        }

                        function r(e) {
                          var r, i = e.length;
                          for (r = 0; r < i; r += 1) 4 === e[r].ty && t(e[r].shapes)
                        }
                        return function(t) {
                          if (n(e, t.v) && (r(t.layers), t.assets)) {
                            var i, a = t.assets.length;
                            for (i = 0; i < a; i += 1) t.assets[i].layers && r(t.assets[i].layers)
                          }
                        }
                      }(),
                      c = function() {
                        var e = [4, 4, 18];

                        function t(e) {
                          var r, i, n;
                          for (r = e.length - 1; r >= 0; r -= 1)
                            if ("sh" === e[r].ty)
                              if (e[r].ks.k.i) e[r].ks.k.c = e[r].closed;
                              else
                                for (n = e[r].ks.k.length, i = 0; i < n; i += 1) e[r].ks.k[i].s && (e[r].ks.k[i].s[0].c = e[r].closed), e[r].ks.k[i].e && (e[r].ks.k[i].e[0].c = e[r].closed);
                          else "gr" === e[r].ty && t(e[r].it)
                        }

                        function r(e) {
                          var r, i, n, a, s, o, l = e.length;
                          for (i = 0; i < l; i += 1) {
                            if ((r = e[i]).hasMask) {
                              var h = r.masksProperties;
                              for (a = h.length, n = 0; n < a; n += 1)
                                if (h[n].pt.k.i) h[n].pt.k.c = h[n].cl;
                                else
                                  for (o = h[n].pt.k.length, s = 0; s < o; s += 1) h[n].pt.k[s].s && (h[n].pt.k[s].s[0].c = h[n].cl), h[n].pt.k[s].e && (h[n].pt.k[s].e[0].c = h[n].cl)
                            }
                            4 === r.ty && t(r.shapes)
                          }
                        }
                        return function(t) {
                          if (n(e, t.v) && (r(t.layers), t.assets)) {
                            var i, a = t.assets.length;
                            for (i = 0; i < a; i += 1) t.assets[i].layers && r(t.assets[i].layers)
                          }
                        }
                      }();
                    var p = {
                      completeData: function(r) {
                        r.__complete || (h(r), s(r), o(r), l(r), c(r), e(r.layers, r.assets), function(r, i) {
                          if (r) {
                            var n = 0,
                              a = r.length;
                            for (n = 0; n < a; n += 1) 1 === r[n].t && (r[n].data.layers = t(r[n].data.refId, i), e(r[n].data.layers, i))
                          }
                        }(r.chars, r.assets), r.__complete = !0)
                      }
                    };
                    return p.checkColors = h, p.checkChars = o, p.checkPathProperties = l, p.checkShapes = c, p.completeLayers = e, p
                  }()), a.assetLoader || (a.assetLoader = function() {
                    function e(e) {
                      var t = e.getResponseHeader("content-type");
                      return t && "json" === e.responseType && -1 !== t.indexOf("json") || e.response && "object" === _typeof$5(e.response) ? e.response : e.response && "string" == typeof e.response ? JSON.parse(e.response) : e.responseText ? JSON.parse(e.responseText) : null
                    }
                    return {
                      load: function(t, r, i, n) {
                        var a, s = new XMLHttpRequest;
                        try {
                          s.responseType = "json"
                        } catch (e) {}
                        s.onreadystatechange = function() {
                          if (4 === s.readyState)
                            if (200 === s.status) a = e(s), i(a);
                            else try {
                              a = e(s), i(a)
                            } catch (e) {
                              n && n(e)
                            }
                        };
                        try {
                          s.open(["G", "E", "T"].join(""), t, !0)
                        } catch (e) {
                          s.open(["G", "E", "T"].join(""), r + "/" + t, !0)
                        }
                        s.send()
                      }
                    }
                  }()), "loadAnimation" === e.data.type) a.assetLoader.load(e.data.path, e.data.fullPath, (function(t) {
                  a.dataManager.completeData(t), a.postMessage({
                    id: e.data.id,
                    payload: t,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: e.data.id,
                    status: "error"
                  })
                }));
                else if ("complete" === e.data.type) {
                  var t = e.data.animation;
                  a.dataManager.completeData(t), a.postMessage({
                    id: e.data.id,
                    payload: t,
                    status: "success"
                  })
                } else "loadData" === e.data.type && a.assetLoader.load(e.data.path, e.data.fullPath, (function(t) {
                  a.postMessage({
                    id: e.data.id,
                    payload: t,
                    status: "success"
                  })
                }), (function() {
                  a.postMessage({
                    id: e.data.id,
                    status: "error"
                  })
                }))
              })), t.onmessage = function(e) {
                var t = e.data,
                  r = t.id,
                  n = i[r];
                i[r] = null, "success" === t.status ? n.onComplete(t.payload) : n.onError && n.onError()
              })
            }

            function o(e, t) {
              var n = "processId_" + (r += 1);
              return i[n] = {
                onComplete: e,
                onError: t
              }, n
            }
            return {
              loadAnimation: function(e, r, i) {
                s();
                var n = o(r, i);
                t.postMessage({
                  type: "loadAnimation",
                  path: e,
                  fullPath: window.location.origin + window.location.pathname,
                  id: n
                })
              },
              loadData: function(e, r, i) {
                s();
                var n = o(r, i);
                t.postMessage({
                  type: "loadData",
                  path: e,
                  fullPath: window.location.origin + window.location.pathname,
                  id: n
                })
              },
              completeAnimation: function(e, r, i) {
                s();
                var n = o(r, i);
                t.postMessage({
                  type: "complete",
                  animation: e,
                  id: n
                })
              }
            }
          }(),
          ImagePreloader = function() {
            var e = function() {
              var e = createTag("canvas");
              e.width = 1, e.height = 1;
              var t = e.getContext("2d");
              return t.fillStyle = "rgba(0,0,0,0)", t.fillRect(0, 0, 1, 1), e
            }();

            function t() {
              this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function r() {
              this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null)
            }

            function i(e, t, r) {
              var i = "";
              if (e.e) i = e.p;
              else if (t) {
                var n = e.p; - 1 !== n.indexOf("images/") && (n = n.split("/")[1]), i = t + n
              } else i = r, i += e.u ? e.u : "", i += e.p;
              return i
            }

            function n(e) {
              var t = 0,
                r = setInterval(function() {
                  (e.getBBox().width || t > 500) && (this._imageLoaded(), clearInterval(r)), t += 1
                }.bind(this), 50)
            }

            function a(e) {
              var t = {
                  assetData: e
                },
                r = i(e, this.assetsPath, this.path);
              return dataManager.loadData(r, function(e) {
                t.img = e, this._footageLoaded()
              }.bind(this), function() {
                t.img = {}, this._footageLoaded()
              }.bind(this)), t
            }

            function s() {
              this._imageLoaded = t.bind(this), this._footageLoaded = r.bind(this), this.testImageLoaded = n.bind(this), this.createFootageData = a.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = []
            }
            return s.prototype = {
              loadAssets: function(e, t) {
                var r;
                this.imagesLoadedCb = t;
                var i = e.length;
                for (r = 0; r < i; r += 1) e[r].layers || (e[r].t && "seq" !== e[r].t ? 3 === e[r].t && (this.totalFootages += 1, this.images.push(this.createFootageData(e[r]))) : (this.totalImages += 1, this.images.push(this._createImageData(e[r]))))
              },
              setAssetsPath: function(e) {
                this.assetsPath = e || ""
              },
              setPath: function(e) {
                this.path = e || ""
              },
              loadedImages: function() {
                return this.totalImages === this.loadedAssets
              },
              loadedFootages: function() {
                return this.totalFootages === this.loadedFootagesCount
              },
              destroy: function() {
                this.imagesLoadedCb = null, this.images.length = 0
              },
              getAsset: function(e) {
                for (var t = 0, r = this.images.length; t < r;) {
                  if (this.images[t].assetData === e) return this.images[t].img;
                  t += 1
                }
                return null
              },
              createImgData: function(t) {
                var r = i(t, this.assetsPath, this.path),
                  n = createTag("img");
                n.crossOrigin = "anonymous", n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                  a.img = e, this._imageLoaded()
                }.bind(this), !1), n.src = r;
                var a = {
                  img: n,
                  assetData: t
                };
                return a
              },
              createImageData: function(t) {
                var r = i(t, this.assetsPath, this.path),
                  n = createNS("image");
                isSafari ? this.testImageLoaded(n) : n.addEventListener("load", this._imageLoaded, !1), n.addEventListener("error", function() {
                  a.img = e, this._imageLoaded()
                }.bind(this), !1), n.setAttributeNS("http://www.w3.org/1999/xlink", "href", r), this._elementHelper.append ? this._elementHelper.append(n) : this._elementHelper.appendChild(n);
                var a = {
                  img: n,
                  assetData: t
                };
                return a
              },
              imageLoaded: t,
              footageLoaded: r,
              setCacheType: function(e, t) {
                "svg" === e ? (this._elementHelper = t, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this)
              }
            }, s
          }();

        function BaseEvent() {}
        BaseEvent.prototype = {
          triggerEvent: function(e, t) {
            if (this._cbs[e])
              for (var r = this._cbs[e], i = 0; i < r.length; i += 1) r[i](t)
          },
          addEventListener: function(e, t) {
            return this._cbs[e] || (this._cbs[e] = []), this._cbs[e].push(t),
              function() {
                this.removeEventListener(e, t)
              }.bind(this)
          },
          removeEventListener: function(e, t) {
            if (t) {
              if (this._cbs[e]) {
                for (var r = 0, i = this._cbs[e].length; r < i;) this._cbs[e][r] === t && (this._cbs[e].splice(r, 1), r -= 1, i -= 1), r += 1;
                this._cbs[e].length || (this._cbs[e] = null)
              }
            } else this._cbs[e] = null
          }
        };
        var markerParser = function() {
            function e(e) {
              for (var t, r = e.split("\r\n"), i = {}, n = 0, a = 0; a < r.length; a += 1) 2 === (t = r[a].split(":")).length && (i[t[0]] = t[1].trim(), n += 1);
              if (0 === n) throw new Error;
              return i
            }
            return function(t) {
              for (var r = [], i = 0; i < t.length; i += 1) {
                var n = t[i],
                  a = {
                    time: n.tm,
                    duration: n.dr
                  };
                try {
                  a.payload = JSON.parse(t[i].cm)
                } catch (r) {
                  try {
                    a.payload = e(t[i].cm)
                  } catch (e) {
                    a.payload = {
                      name: t[i].cm
                    }
                  }
                }
                r.push(a)
              }
              return r
            }
          }(),
          ProjectInterface = function() {
            function e(e) {
              this.compositions.push(e)
            }
            return function() {
              function t(e) {
                for (var t = 0, r = this.compositions.length; t < r;) {
                  if (this.compositions[t].data && this.compositions[t].data.nm === e) return this.compositions[t].prepareFrame && this.compositions[t].data.xt && this.compositions[t].prepareFrame(this.currentFrame), this.compositions[t].compInterface;
                  t += 1
                }
                return null
              }
              return t.compositions = [], t.currentFrame = 0, t.registerComposition = e, t
            }
          }(),
          renderers = {},
          registerRenderer = function(e, t) {
            renderers[e] = t
          };

        function getRenderer(e) {
          return renderers[e]
        }

        function getRegisteredRenderer() {
          if (renderers.canvas) return "canvas";
          for (var e in renderers)
            if (renderers[e]) return e;
          return ""
        }

        function _typeof$4(e) {
          return _typeof$4 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$4(e)
        }
        var AnimationItem = function() {
          this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader, this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin()
        };
        extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(e) {
          (e.wrapper || e.container) && (this.wrapper = e.wrapper || e.container);
          var t = "svg";
          e.animType ? t = e.animType : e.renderer && (t = e.renderer);
          var r = getRenderer(t);
          this.renderer = new r(this, e.rendererSettings), this.imagePreloader.setCacheType(t, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = t, "" === e.loop || null === e.loop || void 0 === e.loop || !0 === e.loop ? this.loop = !0 : !1 === e.loop ? this.loop = !1 : this.loop = parseInt(e.loop, 10), this.autoplay = !("autoplay" in e) || e.autoplay, this.name = e.name ? e.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(e, "autoloadSegments") || e.autoloadSegments, this.assetsPath = e.assetsPath, this.initialSegment = e.initialSegment, e.audioFactory && this.audioController.setAudioFactory(e.audioFactory), e.animationData ? this.setupAnimation(e.animationData) : e.path && (-1 !== e.path.lastIndexOf("\\") ? this.path = e.path.substr(0, e.path.lastIndexOf("\\") + 1) : this.path = e.path.substr(0, e.path.lastIndexOf("/") + 1), this.fileName = e.path.substr(e.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(e.path, this.configAnimation, this.onSetupError))
        }, AnimationItem.prototype.onSetupError = function() {
          this.trigger("data_failed")
        }, AnimationItem.prototype.setupAnimation = function(e) {
          dataManager.completeAnimation(e, this.configAnimation)
        }, AnimationItem.prototype.setData = function(e, t) {
          t && "object" !== _typeof$4(t) && (t = JSON.parse(t));
          var r = {
              wrapper: e,
              animationData: t
            },
            i = e.attributes;
          r.path = i.getNamedItem("data-animation-path") ? i.getNamedItem("data-animation-path").value : i.getNamedItem("data-bm-path") ? i.getNamedItem("data-bm-path").value : i.getNamedItem("bm-path") ? i.getNamedItem("bm-path").value : "", r.animType = i.getNamedItem("data-anim-type") ? i.getNamedItem("data-anim-type").value : i.getNamedItem("data-bm-type") ? i.getNamedItem("data-bm-type").value : i.getNamedItem("bm-type") ? i.getNamedItem("bm-type").value : i.getNamedItem("data-bm-renderer") ? i.getNamedItem("data-bm-renderer").value : i.getNamedItem("bm-renderer") ? i.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
          var n = i.getNamedItem("data-anim-loop") ? i.getNamedItem("data-anim-loop").value : i.getNamedItem("data-bm-loop") ? i.getNamedItem("data-bm-loop").value : i.getNamedItem("bm-loop") ? i.getNamedItem("bm-loop").value : "";
          "false" === n ? r.loop = !1 : "true" === n ? r.loop = !0 : "" !== n && (r.loop = parseInt(n, 10));
          var a = i.getNamedItem("data-anim-autoplay") ? i.getNamedItem("data-anim-autoplay").value : i.getNamedItem("data-bm-autoplay") ? i.getNamedItem("data-bm-autoplay").value : !i.getNamedItem("bm-autoplay") || i.getNamedItem("bm-autoplay").value;
          r.autoplay = "false" !== a, r.name = i.getNamedItem("data-name") ? i.getNamedItem("data-name").value : i.getNamedItem("data-bm-name") ? i.getNamedItem("data-bm-name").value : i.getNamedItem("bm-name") ? i.getNamedItem("bm-name").value : "", "false" === (i.getNamedItem("data-anim-prerender") ? i.getNamedItem("data-anim-prerender").value : i.getNamedItem("data-bm-prerender") ? i.getNamedItem("data-bm-prerender").value : i.getNamedItem("bm-prerender") ? i.getNamedItem("bm-prerender").value : "") && (r.prerender = !1), r.path ? this.setParams(r) : this.trigger("destroy")
        }, AnimationItem.prototype.includeLayers = function(e) {
          e.op > this.animationData.op && (this.animationData.op = e.op, this.totalFrames = Math.floor(e.op - this.animationData.ip));
          var t, r, i = this.animationData.layers,
            n = i.length,
            a = e.layers,
            s = a.length;
          for (r = 0; r < s; r += 1)
            for (t = 0; t < n;) {
              if (i[t].id === a[r].id) {
                i[t] = a[r];
                break
              }
              t += 1
            }
          if ((e.chars || e.fonts) && (this.renderer.globalData.fontManager.addChars(e.chars), this.renderer.globalData.fontManager.addFonts(e.fonts, this.renderer.globalData.defs)), e.assets)
            for (n = e.assets.length, t = 0; t < n; t += 1) this.animationData.assets.push(e.assets[t]);
          this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete)
        }, AnimationItem.prototype.onSegmentComplete = function(e) {
          this.animationData = e;
          var t = getExpressionsPlugin();
          t && t.initExpressions(this), this.loadNextSegment()
        }, AnimationItem.prototype.loadNextSegment = function() {
          var e = this.animationData.segments;
          if (!e || 0 === e.length || !this.autoloadSegments) return this.trigger("data_ready"), void(this.timeCompleted = this.totalFrames);
          var t = e.shift();
          this.timeCompleted = t.time * this.frameRate;
          var r = this.path + this.fileName + "_" + this.segmentPos + ".json";
          this.segmentPos += 1, dataManager.loadData(r, this.includeLayers.bind(this), function() {
            this.trigger("data_failed")
          }.bind(this))
        }, AnimationItem.prototype.loadSegments = function() {
          this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment()
        }, AnimationItem.prototype.imagesLoaded = function() {
          this.trigger("loaded_images"), this.checkLoaded()
        }, AnimationItem.prototype.preloadImages = function() {
          this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this))
        }, AnimationItem.prototype.configAnimation = function(e) {
          if (this.renderer) try {
            this.animationData = e, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(e), e.assets || (e.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(e.assets), this.markers = markerParser(e.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause()
          } catch (e) {
            this.triggerConfigError(e)
          }
        }, AnimationItem.prototype.waitForFontsLoaded = function() {
          this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20))
        }, AnimationItem.prototype.checkLoaded = function() {
          if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || "canvas" !== this.renderer.rendererType) && this.imagePreloader.loadedFootages()) {
            this.isLoaded = !0;
            var e = getExpressionsPlugin();
            e && e.initExpressions(this), this.renderer.initItems(), setTimeout(function() {
              this.trigger("DOMLoaded")
            }.bind(this), 0), this.gotoFrame(), this.autoplay && this.play()
          }
        }, AnimationItem.prototype.resize = function(e, t) {
          var r = "number" == typeof e ? e : void 0,
            i = "number" == typeof t ? t : void 0;
          this.renderer.updateContainerSize(r, i)
        }, AnimationItem.prototype.setSubframe = function(e) {
          this.isSubframeEnabled = !!e
        }, AnimationItem.prototype.gotoFrame = function() {
          this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame")
        }, AnimationItem.prototype.renderFrame = function() {
          if (!1 !== this.isLoaded && this.renderer) try {
            this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame)
          } catch (e) {
            this.triggerRenderFrameError(e)
          }
        }, AnimationItem.prototype.play = function(e) {
          e && this.name !== e || !0 === this.isPaused && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")))
        }, AnimationItem.prototype.pause = function(e) {
          e && this.name !== e || !1 === this.isPaused && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause())
        }, AnimationItem.prototype.togglePause = function(e) {
          e && this.name !== e || (!0 === this.isPaused ? this.play() : this.pause())
        }, AnimationItem.prototype.stop = function(e) {
          e && this.name !== e || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0))
        }, AnimationItem.prototype.getMarkerData = function(e) {
          for (var t, r = 0; r < this.markers.length; r += 1)
            if ((t = this.markers[r]).payload && t.payload.name === e) return t;
          return null
        }, AnimationItem.prototype.goToAndStop = function(e, t, r) {
          if (!r || this.name === r) {
            var i = Number(e);
            if (isNaN(i)) {
              var n = this.getMarkerData(e);
              n && this.goToAndStop(n.time, !0)
            } else t ? this.setCurrentRawFrameValue(e) : this.setCurrentRawFrameValue(e * this.frameModifier);
            this.pause()
          }
        }, AnimationItem.prototype.goToAndPlay = function(e, t, r) {
          if (!r || this.name === r) {
            var i = Number(e);
            if (isNaN(i)) {
              var n = this.getMarkerData(e);
              n && (n.duration ? this.playSegments([n.time, n.time + n.duration], !0) : this.goToAndStop(n.time, !0))
            } else this.goToAndStop(i, t, r);
            this.play()
          }
        }, AnimationItem.prototype.advanceTime = function(e) {
          if (!0 !== this.isPaused && !1 !== this.isLoaded) {
            var t = this.currentRawFrame + e * this.frameModifier,
              r = !1;
            t >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? t >= this.totalFrames ? (this.playCount += 1, this.checkSegments(t % this.totalFrames) || (this.setCurrentRawFrameValue(t % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(t) : this.checkSegments(t > this.totalFrames ? t % this.totalFrames : 0) || (r = !0, t = this.totalFrames - 1) : t < 0 ? this.checkSegments(t % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && !0 !== this.loop ? (r = !0, t = 0) : (this.setCurrentRawFrameValue(this.totalFrames + t % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(t), r && (this.setCurrentRawFrameValue(t), this.pause(), this.trigger("complete"))
          }
        }, AnimationItem.prototype.adjustSegment = function(e, t) {
          this.playCount = 0, e[1] < e[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = e[0] - e[1], this.timeCompleted = this.totalFrames, this.firstFrame = e[1], this.setCurrentRawFrameValue(this.totalFrames - .001 - t)) : e[1] > e[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = e[1] - e[0], this.timeCompleted = this.totalFrames, this.firstFrame = e[0], this.setCurrentRawFrameValue(.001 + t)), this.trigger("segmentStart")
        }, AnimationItem.prototype.setSegment = function(e, t) {
          var r = -1;
          this.isPaused && (this.currentRawFrame + this.firstFrame < e ? r = e : this.currentRawFrame + this.firstFrame > t && (r = t - e)), this.firstFrame = e, this.totalFrames = t - e, this.timeCompleted = this.totalFrames, -1 !== r && this.goToAndStop(r, !0)
        }, AnimationItem.prototype.playSegments = function(e, t) {
          if (t && (this.segments.length = 0), "object" === _typeof$4(e[0])) {
            var r, i = e.length;
            for (r = 0; r < i; r += 1) this.segments.push(e[r])
          } else this.segments.push(e);
          this.segments.length && t && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play()
        }, AnimationItem.prototype.resetSegments = function(e) {
          this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), e && this.checkSegments(0)
        }, AnimationItem.prototype.checkSegments = function(e) {
          return !!this.segments.length && (this.adjustSegment(this.segments.shift(), e), !0)
        }, AnimationItem.prototype.destroy = function(e) {
          e && this.name !== e || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null)
        }, AnimationItem.prototype.setCurrentRawFrameValue = function(e) {
          this.currentRawFrame = e, this.gotoFrame()
        }, AnimationItem.prototype.setSpeed = function(e) {
          this.playSpeed = e, this.updaFrameModifier()
        }, AnimationItem.prototype.setDirection = function(e) {
          this.playDirection = e < 0 ? -1 : 1, this.updaFrameModifier()
        }, AnimationItem.prototype.setLoop = function(e) {
          this.loop = e
        }, AnimationItem.prototype.setVolume = function(e, t) {
          t && this.name !== t || this.audioController.setVolume(e)
        }, AnimationItem.prototype.getVolume = function() {
          return this.audioController.getVolume()
        }, AnimationItem.prototype.mute = function(e) {
          e && this.name !== e || this.audioController.mute()
        }, AnimationItem.prototype.unmute = function(e) {
          e && this.name !== e || this.audioController.unmute()
        }, AnimationItem.prototype.updaFrameModifier = function() {
          this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection)
        }, AnimationItem.prototype.getPath = function() {
          return this.path
        }, AnimationItem.prototype.getAssetsPath = function(e) {
          var t = "";
          if (e.e) t = e.p;
          else if (this.assetsPath) {
            var r = e.p; - 1 !== r.indexOf("images/") && (r = r.split("/")[1]), t = this.assetsPath + r
          } else t = this.path, t += e.u ? e.u : "", t += e.p;
          return t
        }, AnimationItem.prototype.getAssetData = function(e) {
          for (var t = 0, r = this.assets.length; t < r;) {
            if (e === this.assets[t].id) return this.assets[t];
            t += 1
          }
          return null
        }, AnimationItem.prototype.hide = function() {
          this.renderer.hide()
        }, AnimationItem.prototype.show = function() {
          this.renderer.show()
        }, AnimationItem.prototype.getDuration = function(e) {
          return e ? this.totalFrames : this.totalFrames / this.frameRate
        }, AnimationItem.prototype.updateDocumentData = function(e, t, r) {
          try {
            this.renderer.getElementByPath(e).updateDocumentData(t, r)
          } catch (e) {}
        }, AnimationItem.prototype.trigger = function(e) {
          if (this._cbs && this._cbs[e]) switch (e) {
            case "enterFrame":
              this.triggerEvent(e, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameModifier));
              break;
            case "drawnFrame":
              this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(e, this.drawnFrameEvent);
              break;
            case "loopComplete":
              this.triggerEvent(e, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult));
              break;
            case "complete":
              this.triggerEvent(e, new BMCompleteEvent(e, this.frameMult));
              break;
            case "segmentStart":
              this.triggerEvent(e, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames));
              break;
            case "destroy":
              this.triggerEvent(e, new BMDestroyEvent(e, this));
              break;
            default:
              this.triggerEvent(e)
          }
          "enterFrame" === e && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(e, this.currentFrame, this.totalFrames, this.frameMult)), "loopComplete" === e && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(e, this.loop, this.playCount, this.frameMult)), "complete" === e && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(e, this.frameMult)), "segmentStart" === e && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(e, this.firstFrame, this.totalFrames)), "destroy" === e && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(e, this))
        }, AnimationItem.prototype.triggerRenderFrameError = function(e) {
          var t = new BMRenderFrameErrorEvent(e, this.currentFrame);
          this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
        }, AnimationItem.prototype.triggerConfigError = function(e) {
          var t = new BMConfigErrorEvent(e, this.currentFrame);
          this.triggerEvent("error", t), this.onError && this.onError.call(this, t)
        };
        var animationManager = function() {
            var e = {},
              t = [],
              r = 0,
              i = 0,
              n = 0,
              a = !0,
              s = !1;

            function o(e) {
              for (var r = 0, n = e.target; r < i;) t[r].animation === n && (t.splice(r, 1), r -= 1, i -= 1, n.isPaused || c()), r += 1
            }

            function l(e, r) {
              if (!e) return null;
              for (var n = 0; n < i;) {
                if (t[n].elem === e && null !== t[n].elem) return t[n].animation;
                n += 1
              }
              var a = new AnimationItem;
              return p(a, e), a.setData(e, r), a
            }

            function h() {
              n += 1, f()
            }

            function c() {
              n -= 1
            }

            function p(e, r) {
              e.addEventListener("destroy", o), e.addEventListener("_active", h), e.addEventListener("_idle", c), t.push({
                elem: r,
                animation: e
              }), i += 1
            }

            function u(e) {
              var o, l = e - r;
              for (o = 0; o < i; o += 1) t[o].animation.advanceTime(l);
              r = e, n && !s ? window.requestAnimationFrame(u) : a = !0
            }

            function d(e) {
              r = e, window.requestAnimationFrame(u)
            }

            function f() {
              !s && n && a && (window.requestAnimationFrame(d), a = !1)
            }
            return e.registerAnimation = l, e.loadAnimation = function(e) {
              var t = new AnimationItem;
              return p(t, null), t.setParams(e), t
            }, e.setSpeed = function(e, r) {
              var n;
              for (n = 0; n < i; n += 1) t[n].animation.setSpeed(e, r)
            }, e.setDirection = function(e, r) {
              var n;
              for (n = 0; n < i; n += 1) t[n].animation.setDirection(e, r)
            }, e.play = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.play(e)
            }, e.pause = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.pause(e)
            }, e.stop = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.stop(e)
            }, e.togglePause = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.togglePause(e)
            }, e.searchAnimations = function(e, t, r) {
              var i, n = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))),
                a = n.length;
              for (i = 0; i < a; i += 1) r && n[i].setAttribute("data-bm-type", r), l(n[i], e);
              if (t && 0 === a) {
                r || (r = "svg");
                var s = document.getElementsByTagName("body")[0];
                s.innerText = "";
                var o = createTag("div");
                o.style.width = "100%", o.style.height = "100%", o.setAttribute("data-bm-type", r), s.appendChild(o), l(o, e)
              }
            }, e.resize = function() {
              var e;
              for (e = 0; e < i; e += 1) t[e].animation.resize()
            }, e.goToAndStop = function(e, r, n) {
              var a;
              for (a = 0; a < i; a += 1) t[a].animation.goToAndStop(e, r, n)
            }, e.destroy = function(e) {
              var r;
              for (r = i - 1; r >= 0; r -= 1) t[r].animation.destroy(e)
            }, e.freeze = function() {
              s = !0
            }, e.unfreeze = function() {
              s = !1, f()
            }, e.setVolume = function(e, r) {
              var n;
              for (n = 0; n < i; n += 1) t[n].animation.setVolume(e, r)
            }, e.mute = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.mute(e)
            }, e.unmute = function(e) {
              var r;
              for (r = 0; r < i; r += 1) t[r].animation.unmute(e)
            }, e.getRegisteredAnimations = function() {
              var e, r = t.length,
                i = [];
              for (e = 0; e < r; e += 1) i.push(t[e].animation);
              return i
            }, e
          }(),
          BezierFactory = function() {
            var e = {
                getBezierEasing: function(e, r, i, n, a) {
                  var s = a || ("bez_" + e + "_" + r + "_" + i + "_" + n).replace(/\./g, "p");
                  if (t[s]) return t[s];
                  var o = new c([e, r, i, n]);
                  return t[s] = o, o
                }
              },
              t = {},
              r = 11,
              i = 1 / (r - 1),
              n = "function" == typeof Float32Array;

            function a(e, t) {
              return 1 - 3 * t + 3 * e
            }

            function s(e, t) {
              return 3 * t - 6 * e
            }

            function o(e) {
              return 3 * e
            }

            function l(e, t, r) {
              return ((a(t, r) * e + s(t, r)) * e + o(t)) * e
            }

            function h(e, t, r) {
              return 3 * a(t, r) * e * e + 2 * s(t, r) * e + o(t)
            }

            function c(e) {
              this._p = e, this._mSampleValues = n ? new Float32Array(r) : new Array(r), this._precomputed = !1, this.get = this.get.bind(this)
            }
            return c.prototype = {
              get: function(e) {
                var t = this._p[0],
                  r = this._p[1],
                  i = this._p[2],
                  n = this._p[3];
                return this._precomputed || this._precompute(), t === r && i === n ? e : 0 === e ? 0 : 1 === e ? 1 : l(this._getTForX(e), r, n)
              },
              _precompute: function() {
                var e = this._p[0],
                  t = this._p[1],
                  r = this._p[2],
                  i = this._p[3];
                this._precomputed = !0, e === t && r === i || this._calcSampleValues()
              },
              _calcSampleValues: function() {
                for (var e = this._p[0], t = this._p[2], n = 0; n < r; ++n) this._mSampleValues[n] = l(n * i, e, t)
              },
              _getTForX: function(e) {
                for (var t = this._p[0], n = this._p[2], a = this._mSampleValues, s = 0, o = 1, c = r - 1; o !== c && a[o] <= e; ++o) s += i;
                var p = s + (e - a[--o]) / (a[o + 1] - a[o]) * i,
                  u = h(p, t, n);
                return u >= .001 ? function(e, t, r, i) {
                  for (var n = 0; n < 4; ++n) {
                    var a = h(t, r, i);
                    if (0 === a) return t;
                    t -= (l(t, r, i) - e) / a
                  }
                  return t
                }(e, p, t, n) : 0 === u ? p : function(e, t, r, i, n) {
                  var a, s, o = 0;
                  do {
                    (a = l(s = t + (r - t) / 2, i, n) - e) > 0 ? r = s : t = s
                  } while (Math.abs(a) > 1e-7 && ++o < 10);
                  return s
                }(e, s, s + i, t, n)
              }
            }, e
          }(),
          pooling = {
            double: function(e) {
              return e.concat(createSizedArray(e.length))
            }
          },
          poolFactory = function(e, t, r) {
            var i = 0,
              n = e,
              a = createSizedArray(n);
            return {
              newElement: function() {
                return i ? a[i -= 1] : t()
              },
              release: function(e) {
                i === n && (a = pooling.double(a), n *= 2), r && r(e), a[i] = e, i += 1
              }
            }
          },
          bezierLengthPool = poolFactory(8, (function() {
            return {
              addedLength: 0,
              percents: createTypedArray("float32", getDefaultCurveSegments()),
              lengths: createTypedArray("float32", getDefaultCurveSegments())
            }
          })),
          segmentsLengthPool = poolFactory(8, (function() {
            return {
              lengths: [],
              totalLength: 0
            }
          }), (function(e) {
            var t, r = e.lengths.length;
            for (t = 0; t < r; t += 1) bezierLengthPool.release(e.lengths[t]);
            e.lengths.length = 0
          }));

        function bezFunction() {
          var e = Math;

          function t(e, t, r, i, n, a) {
            var s = e * i + t * n + r * a - n * i - a * e - r * t;
            return s > -.001 && s < .001
          }
          var r = function(e, t, r, i) {
            var n, a, s, o, l, h, c = getDefaultCurveSegments(),
              p = 0,
              u = [],
              d = [],
              f = bezierLengthPool.newElement();
            for (s = r.length, n = 0; n < c; n += 1) {
              for (l = n / (c - 1), h = 0, a = 0; a < s; a += 1) o = bmPow(1 - l, 3) * e[a] + 3 * bmPow(1 - l, 2) * l * r[a] + 3 * (1 - l) * bmPow(l, 2) * i[a] + bmPow(l, 3) * t[a], u[a] = o, null !== d[a] && (h += bmPow(u[a] - d[a], 2)), d[a] = u[a];
              h && (p += h = bmSqrt(h)), f.percents[n] = l, f.lengths[n] = p
            }
            return f.addedLength = p, f
          };

          function i(e) {
            this.segmentLength = 0, this.points = new Array(e)
          }

          function n(e, t) {
            this.partialLength = e, this.point = t
          }
          var a, s = (a = {}, function(e, r, s, o) {
            var l = (e[0] + "_" + e[1] + "_" + r[0] + "_" + r[1] + "_" + s[0] + "_" + s[1] + "_" + o[0] + "_" + o[1]).replace(/\./g, "p");
            if (!a[l]) {
              var h, c, p, u, d, f, m, g = getDefaultCurveSegments(),
                v = 0,
                y = null;
              2 === e.length && (e[0] !== r[0] || e[1] !== r[1]) && t(e[0], e[1], r[0], r[1], e[0] + s[0], e[1] + s[1]) && t(e[0], e[1], r[0], r[1], r[0] + o[0], r[1] + o[1]) && (g = 2);
              var b = new i(g);
              for (p = s.length, h = 0; h < g; h += 1) {
                for (m = createSizedArray(p), d = h / (g - 1), f = 0, c = 0; c < p; c += 1) u = bmPow(1 - d, 3) * e[c] + 3 * bmPow(1 - d, 2) * d * (e[c] + s[c]) + 3 * (1 - d) * bmPow(d, 2) * (r[c] + o[c]) + bmPow(d, 3) * r[c], m[c] = u, null !== y && (f += bmPow(m[c] - y[c], 2));
                v += f = bmSqrt(f), b.points[h] = new n(f, m), y = m
              }
              b.segmentLength = v, a[l] = b
            }
            return a[l]
          });

          function o(e, t) {
            var r = t.percents,
              i = t.lengths,
              n = r.length,
              a = bmFloor((n - 1) * e),
              s = e * t.addedLength,
              o = 0;
            if (a === n - 1 || 0 === a || s === i[a]) return r[a];
            for (var l = i[a] > s ? -1 : 1, h = !0; h;)
              if (i[a] <= s && i[a + 1] > s ? (o = (s - i[a]) / (i[a + 1] - i[a]), h = !1) : a += l, a < 0 || a >= n - 1) {
                if (a === n - 1) return r[a];
                h = !1
              } return r[a] + (r[a + 1] - r[a]) * o
          }
          var l = createTypedArray("float32", 8);
          return {
            getSegmentsLength: function(e) {
              var t, i = segmentsLengthPool.newElement(),
                n = e.c,
                a = e.v,
                s = e.o,
                o = e.i,
                l = e._length,
                h = i.lengths,
                c = 0;
              for (t = 0; t < l - 1; t += 1) h[t] = r(a[t], a[t + 1], s[t], o[t + 1]), c += h[t].addedLength;
              return n && l && (h[t] = r(a[t], a[0], s[t], o[0]), c += h[t].addedLength), i.totalLength = c, i
            },
            getNewSegment: function(t, r, i, n, a, s, h) {
              a < 0 ? a = 0 : a > 1 && (a = 1);
              var c, p = o(a, h),
                u = o(s = s > 1 ? 1 : s, h),
                d = t.length,
                f = 1 - p,
                m = 1 - u,
                g = f * f * f,
                v = p * f * f * 3,
                y = p * p * f * 3,
                b = p * p * p,
                S = f * f * m,
                x = p * f * m + f * p * m + f * f * u,
                E = p * p * m + f * p * u + p * f * u,
                w = p * p * u,
                P = f * m * m,
                T = p * m * m + f * u * m + f * m * u,
                C = p * u * m + f * u * u + p * m * u,
                _ = p * u * u,
                M = m * m * m,
                A = u * m * m + m * u * m + m * m * u,
                k = u * u * m + m * u * u + u * m * u,
                D = u * u * u;
              for (c = 0; c < d; c += 1) l[4 * c] = e.round(1e3 * (g * t[c] + v * i[c] + y * n[c] + b * r[c])) / 1e3, l[4 * c + 1] = e.round(1e3 * (S * t[c] + x * i[c] + E * n[c] + w * r[c])) / 1e3, l[4 * c + 2] = e.round(1e3 * (P * t[c] + T * i[c] + C * n[c] + _ * r[c])) / 1e3, l[4 * c + 3] = e.round(1e3 * (M * t[c] + A * i[c] + k * n[c] + D * r[c])) / 1e3;
              return l
            },
            getPointInSegment: function(t, r, i, n, a, s) {
              var l = o(a, s),
                h = 1 - l;
              return [e.round(1e3 * (h * h * h * t[0] + (l * h * h + h * l * h + h * h * l) * i[0] + (l * l * h + h * l * l + l * h * l) * n[0] + l * l * l * r[0])) / 1e3, e.round(1e3 * (h * h * h * t[1] + (l * h * h + h * l * h + h * h * l) * i[1] + (l * l * h + h * l * l + l * h * l) * n[1] + l * l * l * r[1])) / 1e3]
            },
            buildBezierData: s,
            pointOnLine2D: t,
            pointOnLine3D: function(r, i, n, a, s, o, l, h, c) {
              if (0 === n && 0 === o && 0 === c) return t(r, i, a, s, l, h);
              var p, u = e.sqrt(e.pow(a - r, 2) + e.pow(s - i, 2) + e.pow(o - n, 2)),
                d = e.sqrt(e.pow(l - r, 2) + e.pow(h - i, 2) + e.pow(c - n, 2)),
                f = e.sqrt(e.pow(l - a, 2) + e.pow(h - s, 2) + e.pow(c - o, 2));
              return (p = u > d ? u > f ? u - d - f : f - d - u : f > d ? f - d - u : d - u - f) > -1e-4 && p < 1e-4
            }
          }
        }
        var bez = bezFunction(),
          initFrame = initialDefaultFrame,
          mathAbs = Math.abs;

        function interpolateValue(e, t) {
          var r, i = this.offsetTime;
          "multidimensional" === this.propType && (r = createTypedArray("float32", this.pv.length));
          for (var n, a, s, o, l, h, c, p, u, d = t.lastIndex, f = d, m = this.keyframes.length - 1, g = !0; g;) {
            if (n = this.keyframes[f], a = this.keyframes[f + 1], f === m - 1 && e >= a.t - i) {
              n.h && (n = a), d = 0;
              break
            }
            if (a.t - i > e) {
              d = f;
              break
            }
            f < m - 1 ? f += 1 : (d = 0, g = !1)
          }
          s = this.keyframesMetadata[f] || {};
          var v, y = a.t - i,
            b = n.t - i;
          if (n.to) {
            s.bezierData || (s.bezierData = bez.buildBezierData(n.s, a.s || n.e, n.to, n.ti));
            var S = s.bezierData;
            if (e >= y || e < b) {
              var x = e >= y ? S.points.length - 1 : 0;
              for (l = S.points[x].point.length, o = 0; o < l; o += 1) r[o] = S.points[x].point[o]
            } else {
              s.__fnct ? u = s.__fnct : (u = BezierFactory.getBezierEasing(n.o.x, n.o.y, n.i.x, n.i.y, n.n).get, s.__fnct = u), h = u((e - b) / (y - b));
              var E, w = S.segmentLength * h,
                P = t.lastFrame < e && t._lastKeyframeIndex === f ? t._lastAddedLength : 0;
              for (p = t.lastFrame < e && t._lastKeyframeIndex === f ? t._lastPoint : 0, g = !0, c = S.points.length; g;) {
                if (P += S.points[p].partialLength, 0 === w || 0 === h || p === S.points.length - 1) {
                  for (l = S.points[p].point.length, o = 0; o < l; o += 1) r[o] = S.points[p].point[o];
                  break
                }
                if (w >= P && w < P + S.points[p + 1].partialLength) {
                  for (E = (w - P) / S.points[p + 1].partialLength, l = S.points[p].point.length, o = 0; o < l; o += 1) r[o] = S.points[p].point[o] + (S.points[p + 1].point[o] - S.points[p].point[o]) * E;
                  break
                }
                p < c - 1 ? p += 1 : g = !1
              }
              t._lastPoint = p, t._lastAddedLength = P - S.points[p].partialLength, t._lastKeyframeIndex = f
            }
          } else {
            var T, C, _, M, A;
            if (m = n.s.length, v = a.s || n.e, this.sh && 1 !== n.h) e >= y ? (r[0] = v[0], r[1] = v[1], r[2] = v[2]) : e <= b ? (r[0] = n.s[0], r[1] = n.s[1], r[2] = n.s[2]) : quaternionToEuler(r, slerp(createQuaternion(n.s), createQuaternion(v), (e - b) / (y - b)));
            else
              for (f = 0; f < m; f += 1) 1 !== n.h && (e >= y ? h = 1 : e < b ? h = 0 : (n.o.x.constructor === Array ? (s.__fnct || (s.__fnct = []), s.__fnct[f] ? u = s.__fnct[f] : (T = void 0 === n.o.x[f] ? n.o.x[0] : n.o.x[f], C = void 0 === n.o.y[f] ? n.o.y[0] : n.o.y[f], _ = void 0 === n.i.x[f] ? n.i.x[0] : n.i.x[f], M = void 0 === n.i.y[f] ? n.i.y[0] : n.i.y[f], u = BezierFactory.getBezierEasing(T, C, _, M).get, s.__fnct[f] = u)) : s.__fnct ? u = s.__fnct : (T = n.o.x, C = n.o.y, _ = n.i.x, M = n.i.y, u = BezierFactory.getBezierEasing(T, C, _, M).get, n.keyframeMetadata = u), h = u((e - b) / (y - b)))), v = a.s || n.e, A = 1 === n.h ? n.s[f] : n.s[f] + (v[f] - n.s[f]) * h, "multidimensional" === this.propType ? r[f] = A : r = A
          }
          return t.lastIndex = d, r
        }

        function slerp(e, t, r) {
          var i, n, a, s, o, l = [],
            h = e[0],
            c = e[1],
            p = e[2],
            u = e[3],
            d = t[0],
            f = t[1],
            m = t[2],
            g = t[3];
          return (n = h * d + c * f + p * m + u * g) < 0 && (n = -n, d = -d, f = -f, m = -m, g = -g), 1 - n > 1e-6 ? (i = Math.acos(n), a = Math.sin(i), s = Math.sin((1 - r) * i) / a, o = Math.sin(r * i) / a) : (s = 1 - r, o = r), l[0] = s * h + o * d, l[1] = s * c + o * f, l[2] = s * p + o * m, l[3] = s * u + o * g, l
        }

        function quaternionToEuler(e, t) {
          var r = t[0],
            i = t[1],
            n = t[2],
            a = t[3],
            s = Math.atan2(2 * i * a - 2 * r * n, 1 - 2 * i * i - 2 * n * n),
            o = Math.asin(2 * r * i + 2 * n * a),
            l = Math.atan2(2 * r * a - 2 * i * n, 1 - 2 * r * r - 2 * n * n);
          e[0] = s / degToRads, e[1] = o / degToRads, e[2] = l / degToRads
        }

        function createQuaternion(e) {
          var t = e[0] * degToRads,
            r = e[1] * degToRads,
            i = e[2] * degToRads,
            n = Math.cos(t / 2),
            a = Math.cos(r / 2),
            s = Math.cos(i / 2),
            o = Math.sin(t / 2),
            l = Math.sin(r / 2),
            h = Math.sin(i / 2);
          return [o * l * s + n * a * h, o * a * s + n * l * h, n * l * s - o * a * h, n * a * s - o * l * h]
        }

        function getValueAtCurrentTime() {
          var e = this.comp.renderedFrame - this.offsetTime,
            t = this.keyframes[0].t - this.offsetTime,
            r = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
          if (!(e === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= r && e >= r || this._caching.lastFrame < t && e < t))) {
            this._caching.lastFrame >= e && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
            var i = this.interpolateValue(e, this._caching);
            this.pv = i
          }
          return this._caching.lastFrame = e, this.pv
        }

        function setVValue(e) {
          var t;
          if ("unidimensional" === this.propType) t = e * this.mult, mathAbs(this.v - t) > 1e-5 && (this.v = t, this._mdf = !0);
          else
            for (var r = 0, i = this.v.length; r < i;) t = e[r] * this.mult, mathAbs(this.v[r] - t) > 1e-5 && (this.v[r] = t, this._mdf = !0), r += 1
        }

        function processEffectsSequence() {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length)
            if (this.lock) this.setVValue(this.pv);
            else {
              var e;
              this.lock = !0, this._mdf = this._isFirstFrame;
              var t = this.effectsSequence.length,
                r = this.kf ? this.pv : this.data.k;
              for (e = 0; e < t; e += 1) r = this.effectsSequence[e](r);
              this.setVValue(r), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
        }

        function addEffect(e) {
          this.effectsSequence.push(e), this.container.addDynamicProperty(this)
        }

        function ValueProperty(e, t, r, i) {
          this.propType = "unidimensional", this.mult = r || 1, this.data = t, this.v = r ? t.k * r : t.k, this.pv = t.k, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function MultiDimensionalProperty(e, t, r, i) {
          var n;
          this.propType = "multidimensional", this.mult = r || 1, this.data = t, this._mdf = !1, this.elem = e, this.container = i, this.comp = e.comp, this.k = !1, this.kf = !1, this.frameId = -1;
          var a = t.k.length;
          for (this.v = createTypedArray("float32", a), this.pv = createTypedArray("float32", a), this.vel = createTypedArray("float32", a), n = 0; n < a; n += 1) this.v[n] = t.k[n] * this.mult, this.pv[n] = t.k[n];
          this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect
        }

        function KeyframedValueProperty(e, t, r, i) {
          this.propType = "unidimensional", this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.frameId = -1, this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: 0,
            _lastKeyframeIndex: -1
          }, this.k = !0, this.kf = !0, this.data = t, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect
        }

        function KeyframedMultidimensionalProperty(e, t, r, i) {
          var n;
          this.propType = "multidimensional";
          var a, s, o, l, h = t.k.length;
          for (n = 0; n < h - 1; n += 1) t.k[n].to && t.k[n].s && t.k[n + 1] && t.k[n + 1].s && (a = t.k[n].s, s = t.k[n + 1].s, o = t.k[n].to, l = t.k[n].ti, (2 === a.length && (a[0] !== s[0] || a[1] !== s[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], a[0] + o[0], a[1] + o[1]) && bez.pointOnLine2D(a[0], a[1], s[0], s[1], s[0] + l[0], s[1] + l[1]) || 3 === a.length && (a[0] !== s[0] || a[1] !== s[1] || a[2] !== s[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], a[0] + o[0], a[1] + o[1], a[2] + o[2]) && bez.pointOnLine3D(a[0], a[1], a[2], s[0], s[1], s[2], s[0] + l[0], s[1] + l[1], s[2] + l[2])) && (t.k[n].to = null, t.k[n].ti = null), a[0] === s[0] && a[1] === s[1] && 0 === o[0] && 0 === o[1] && 0 === l[0] && 0 === l[1] && (2 === a.length || a[2] === s[2] && 0 === o[2] && 0 === l[2]) && (t.k[n].to = null, t.k[n].ti = null));
          this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = t, this.keyframes = t.k, this.keyframesMetadata = [], this.offsetTime = e.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = r || 1, this.elem = e, this.container = i, this.comp = e.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
          var c = t.k[0].s.length;
          for (this.v = createTypedArray("float32", c), this.pv = createTypedArray("float32", c), n = 0; n < c; n += 1) this.v[n] = initFrame, this.pv[n] = initFrame;
          this._caching = {
            lastFrame: initFrame,
            lastIndex: 0,
            value: createTypedArray("float32", c)
          }, this.addEffect = addEffect
        }
        var PropertyFactory = {
          getProp: function(e, t, r, i, n) {
            var a;
            if (t.sid && (t = e.globalData.slotManager.getProp(t)), t.k.length)
              if ("number" == typeof t.k[0]) a = new MultiDimensionalProperty(e, t, i, n);
              else switch (r) {
                case 0:
                  a = new KeyframedValueProperty(e, t, i, n);
                  break;
                case 1:
                  a = new KeyframedMultidimensionalProperty(e, t, i, n)
              } else a = new ValueProperty(e, t, i, n);
            return a.effectsSequence.length && n.addDynamicProperty(a), a
          }
        };

        function DynamicPropertyContainer() {}
        DynamicPropertyContainer.prototype = {
          addDynamicProperty: function(e) {
            -1 === this.dynamicProperties.indexOf(e) && (this.dynamicProperties.push(e), this.container.addDynamicProperty(this), this._isAnimated = !0)
          },
          iterateDynamicProperties: function() {
            var e;
            this._mdf = !1;
            var t = this.dynamicProperties.length;
            for (e = 0; e < t; e += 1) this.dynamicProperties[e].getValue(), this.dynamicProperties[e]._mdf && (this._mdf = !0)
          },
          initDynamicPropertyContainer: function(e) {
            this.container = e, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1
          }
        };
        var pointPool = poolFactory(8, (function() {
          return createTypedArray("float32", 2)
        }));

        function ShapePath() {
          this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength)
        }
        ShapePath.prototype.setPathData = function(e, t) {
          this.c = e, this.setLength(t);
          for (var r = 0; r < t;) this.v[r] = pointPool.newElement(), this.o[r] = pointPool.newElement(), this.i[r] = pointPool.newElement(), r += 1
        }, ShapePath.prototype.setLength = function(e) {
          for (; this._maxLength < e;) this.doubleArrayLength();
          this._length = e
        }, ShapePath.prototype.doubleArrayLength = function() {
          this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2
        }, ShapePath.prototype.setXYAt = function(e, t, r, i, n) {
          var a;
          switch (this._length = Math.max(this._length, i + 1), this._length >= this._maxLength && this.doubleArrayLength(), r) {
            case "v":
              a = this.v;
              break;
            case "i":
              a = this.i;
              break;
            case "o":
              a = this.o;
              break;
            default:
              a = []
          }(!a[i] || a[i] && !n) && (a[i] = pointPool.newElement()), a[i][0] = e, a[i][1] = t
        }, ShapePath.prototype.setTripleAt = function(e, t, r, i, n, a, s, o) {
          this.setXYAt(e, t, "v", s, o), this.setXYAt(r, i, "o", s, o), this.setXYAt(n, a, "i", s, o)
        }, ShapePath.prototype.reverse = function() {
          var e = new ShapePath;
          e.setPathData(this.c, this._length);
          var t = this.v,
            r = this.o,
            i = this.i,
            n = 0;
          this.c && (e.setTripleAt(t[0][0], t[0][1], i[0][0], i[0][1], r[0][0], r[0][1], 0, !1), n = 1);
          var a, s = this._length - 1,
            o = this._length;
          for (a = n; a < o; a += 1) e.setTripleAt(t[s][0], t[s][1], i[s][0], i[s][1], r[s][0], r[s][1], a, !1), s -= 1;
          return e
        }, ShapePath.prototype.length = function() {
          return this._length
        };
        var shapePool = (factory = poolFactory(4, (function() {
            return new ShapePath
          }), (function(e) {
            var t, r = e._length;
            for (t = 0; t < r; t += 1) pointPool.release(e.v[t]), pointPool.release(e.i[t]), pointPool.release(e.o[t]), e.v[t] = null, e.i[t] = null, e.o[t] = null;
            e._length = 0, e.c = !1
          })), factory.clone = function(e) {
            var t, r = factory.newElement(),
              i = void 0 === e._length ? e.v.length : e._length;
            for (r.setLength(i), r.c = e.c, t = 0; t < i; t += 1) r.setTripleAt(e.v[t][0], e.v[t][1], e.o[t][0], e.o[t][1], e.i[t][0], e.i[t][1], t);
            return r
          }, factory),
          factory;

        function ShapeCollection() {
          this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength)
        }
        ShapeCollection.prototype.addShape = function(e) {
          this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = e, this._length += 1
        }, ShapeCollection.prototype.releaseShapes = function() {
          var e;
          for (e = 0; e < this._length; e += 1) shapePool.release(this.shapes[e]);
          this._length = 0
        };
        var shapeCollectionPool = (ob = {
            newShapeCollection: function() {
              return _length ? pool[_length -= 1] : new ShapeCollection
            },
            release: function(e) {
              var t, r = e._length;
              for (t = 0; t < r; t += 1) shapePool.release(e.shapes[t]);
              e._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = e, _length += 1
            }
          }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob),
          ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
            var e = -999999;

            function t(e, t, r) {
              var i, n, a, s, o, l, h, c, p, u = r.lastIndex,
                d = this.keyframes;
              if (e < d[0].t - this.offsetTime) i = d[0].s[0], a = !0, u = 0;
              else if (e >= d[d.length - 1].t - this.offsetTime) i = d[d.length - 1].s ? d[d.length - 1].s[0] : d[d.length - 2].e[0], a = !0;
              else {
                for (var f, m, g, v = u, y = d.length - 1, b = !0; b && (f = d[v], !((m = d[v + 1]).t - this.offsetTime > e));) v < y - 1 ? v += 1 : b = !1;
                if (g = this.keyframesMetadata[v] || {}, u = v, !(a = 1 === f.h)) {
                  if (e >= m.t - this.offsetTime) c = 1;
                  else if (e < f.t - this.offsetTime) c = 0;
                  else {
                    var S;
                    g.__fnct ? S = g.__fnct : (S = BezierFactory.getBezierEasing(f.o.x, f.o.y, f.i.x, f.i.y).get, g.__fnct = S), c = S((e - (f.t - this.offsetTime)) / (m.t - this.offsetTime - (f.t - this.offsetTime)))
                  }
                  n = m.s ? m.s[0] : f.e[0]
                }
                i = f.s[0]
              }
              for (l = t._length, h = i.i[0].length, r.lastIndex = u, s = 0; s < l; s += 1)
                for (o = 0; o < h; o += 1) p = a ? i.i[s][o] : i.i[s][o] + (n.i[s][o] - i.i[s][o]) * c, t.i[s][o] = p, p = a ? i.o[s][o] : i.o[s][o] + (n.o[s][o] - i.o[s][o]) * c, t.o[s][o] = p, p = a ? i.v[s][o] : i.v[s][o] + (n.v[s][o] - i.v[s][o]) * c, t.v[s][o] = p
            }

            function r() {
              var t = this.comp.renderedFrame - this.offsetTime,
                r = this.keyframes[0].t - this.offsetTime,
                i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime,
                n = this._caching.lastFrame;
              return n !== e && (n < r && t < r || n > i && t > i) || (this._caching.lastIndex = n < t ? this._caching.lastIndex : 0, this.interpolateShape(t, this.pv, this._caching)), this._caching.lastFrame = t, this.pv
            }

            function i() {
              this.paths = this.localShapeCollection
            }

            function n(e) {
              (function(e, t) {
                if (e._length !== t._length || e.c !== t.c) return !1;
                var r, i = e._length;
                for (r = 0; r < i; r += 1)
                  if (e.v[r][0] !== t.v[r][0] || e.v[r][1] !== t.v[r][1] || e.o[r][0] !== t.o[r][0] || e.o[r][1] !== t.o[r][1] || e.i[r][0] !== t.i[r][0] || e.i[r][1] !== t.i[r][1]) return !1;
                return !0
              })(this.v, e) || (this.v = shapePool.clone(e), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection)
            }

            function a() {
              if (this.elem.globalData.frameId !== this.frameId)
                if (this.effectsSequence.length)
                  if (this.lock) this.setVValue(this.pv);
                  else {
                    var e, t;
                    this.lock = !0, this._mdf = !1, e = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
                    var r = this.effectsSequence.length;
                    for (t = 0; t < r; t += 1) e = this.effectsSequence[t](e);
                    this.setVValue(e), this.lock = !1, this.frameId = this.elem.globalData.frameId
                  }
              else this._mdf = !1
            }

            function s(e, t, r) {
              this.propType = "shape", this.comp = e.comp, this.container = e, this.elem = e, this.data = t, this.k = !1, this.kf = !1, this._mdf = !1;
              var n = 3 === r ? t.pt.k : t.ks.k;
              this.v = shapePool.clone(n), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = []
            }

            function o(e) {
              this.effectsSequence.push(e), this.container.addDynamicProperty(this)
            }

            function l(t, n, a) {
              this.propType = "shape", this.comp = t.comp, this.elem = t, this.container = t, this.offsetTime = t.data.st, this.keyframes = 3 === a ? n.pt.k : n.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
              var s = this.keyframes[0].s[0].i.length;
              this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, s), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = e, this.reset = i, this._caching = {
                lastFrame: e,
                lastIndex: 0
              }, this.effectsSequence = [r.bind(this)]
            }
            s.prototype.interpolateShape = t, s.prototype.getValue = a, s.prototype.setVValue = n, s.prototype.addEffect = o, l.prototype.getValue = a, l.prototype.interpolateShape = t, l.prototype.setVValue = n, l.prototype.addEffect = o;
            var h = function() {
                var e = roundCorner;

                function t(e, t) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = t.d, this.elem = e, this.comp = e.comp, this.frameId = -1, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath())
                }
                return t.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath())
                  },
                  convertEllToPath: function() {
                    var t = this.p.v[0],
                      r = this.p.v[1],
                      i = this.s.v[0] / 2,
                      n = this.s.v[1] / 2,
                      a = 3 !== this.d,
                      s = this.v;
                    s.v[0][0] = t, s.v[0][1] = r - n, s.v[1][0] = a ? t + i : t - i, s.v[1][1] = r, s.v[2][0] = t, s.v[2][1] = r + n, s.v[3][0] = a ? t - i : t + i, s.v[3][1] = r, s.i[0][0] = a ? t - i * e : t + i * e, s.i[0][1] = r - n, s.i[1][0] = a ? t + i : t - i, s.i[1][1] = r - n * e, s.i[2][0] = a ? t + i * e : t - i * e, s.i[2][1] = r + n, s.i[3][0] = a ? t - i : t + i, s.i[3][1] = r + n * e, s.o[0][0] = a ? t + i * e : t - i * e, s.o[0][1] = r - n, s.o[1][0] = a ? t + i : t - i, s.o[1][1] = r + n * e, s.o[2][0] = a ? t - i * e : t + i * e, s.o[2][1] = r + n, s.o[3][0] = a ? t - i : t + i, s.o[3][1] = r - n * e
                  }
                }, extendPrototype([DynamicPropertyContainer], t), t
              }(),
              c = function() {
                function e(e, t) {
                  this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = e, this.comp = e.comp, this.data = t, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), 1 === t.sy ? (this.ir = PropertyFactory.getProp(e, t.ir, 0, 0, this), this.is = PropertyFactory.getProp(e, t.is, 0, .01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(e, t.pt, 0, 0, this), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, degToRads, this), this.or = PropertyFactory.getProp(e, t.or, 0, 0, this), this.os = PropertyFactory.getProp(e, t.os, 0, .01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath())
                }
                return e.prototype = {
                  reset: i,
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath())
                  },
                  convertStarToPath: function() {
                    var e, t, r, i, n = 2 * Math.floor(this.pt.v),
                      a = 2 * Math.PI / n,
                      s = !0,
                      o = this.or.v,
                      l = this.ir.v,
                      h = this.os.v,
                      c = this.is.v,
                      p = 2 * Math.PI * o / (2 * n),
                      u = 2 * Math.PI * l / (2 * n),
                      d = -Math.PI / 2;
                    d += this.r.v;
                    var f = 3 === this.data.d ? -1 : 1;
                    for (this.v._length = 0, e = 0; e < n; e += 1) {
                      r = s ? h : c, i = s ? p : u;
                      var m = (t = s ? o : l) * Math.cos(d),
                        g = t * Math.sin(d),
                        v = 0 === m && 0 === g ? 0 : g / Math.sqrt(m * m + g * g),
                        y = 0 === m && 0 === g ? 0 : -m / Math.sqrt(m * m + g * g);
                      m += +this.p.v[0], g += +this.p.v[1], this.v.setTripleAt(m, g, m - v * i * r * f, g - y * i * r * f, m + v * i * r * f, g + y * i * r * f, e, !0), s = !s, d += a * f
                    }
                  },
                  convertPolygonToPath: function() {
                    var e, t = Math.floor(this.pt.v),
                      r = 2 * Math.PI / t,
                      i = this.or.v,
                      n = this.os.v,
                      a = 2 * Math.PI * i / (4 * t),
                      s = .5 * -Math.PI,
                      o = 3 === this.data.d ? -1 : 1;
                    for (s += this.r.v, this.v._length = 0, e = 0; e < t; e += 1) {
                      var l = i * Math.cos(s),
                        h = i * Math.sin(s),
                        c = 0 === l && 0 === h ? 0 : h / Math.sqrt(l * l + h * h),
                        p = 0 === l && 0 === h ? 0 : -l / Math.sqrt(l * l + h * h);
                      l += +this.p.v[0], h += +this.p.v[1], this.v.setTripleAt(l, h, l - c * a * n * o, h - p * a * n * o, l + c * a * n * o, h + p * a * n * o, e, !0), s += r * o
                    }
                    this.paths.length = 0, this.paths[0] = this.v
                  }
                }, extendPrototype([DynamicPropertyContainer], e), e
              }(),
              p = function() {
                function e(e, t) {
                  this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = e, this.comp = e.comp, this.frameId = -1, this.d = t.d, this.initDynamicPropertyContainer(e), this.p = PropertyFactory.getProp(e, t.p, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s, 1, 0, this), this.r = PropertyFactory.getProp(e, t.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath())
                }
                return e.prototype = {
                  convertRectToPath: function() {
                    var e = this.p.v[0],
                      t = this.p.v[1],
                      r = this.s.v[0] / 2,
                      i = this.s.v[1] / 2,
                      n = bmMin(r, i, this.r.v),
                      a = n * (1 - roundCorner);
                    this.v._length = 0, 2 === this.d || 1 === this.d ? (this.v.setTripleAt(e + r, t - i + n, e + r, t - i + n, e + r, t - i + a, 0, !0), this.v.setTripleAt(e + r, t + i - n, e + r, t + i - a, e + r, t + i - n, 1, !0), 0 !== n ? (this.v.setTripleAt(e + r - n, t + i, e + r - n, t + i, e + r - a, t + i, 2, !0), this.v.setTripleAt(e - r + n, t + i, e - r + a, t + i, e - r + n, t + i, 3, !0), this.v.setTripleAt(e - r, t + i - n, e - r, t + i - n, e - r, t + i - a, 4, !0), this.v.setTripleAt(e - r, t - i + n, e - r, t - i + a, e - r, t - i + n, 5, !0), this.v.setTripleAt(e - r + n, t - i, e - r + n, t - i, e - r + a, t - i, 6, !0), this.v.setTripleAt(e + r - n, t - i, e + r - a, t - i, e + r - n, t - i, 7, !0)) : (this.v.setTripleAt(e - r, t + i, e - r + a, t + i, e - r, t + i, 2), this.v.setTripleAt(e - r, t - i, e - r, t - i + a, e - r, t - i, 3))) : (this.v.setTripleAt(e + r, t - i + n, e + r, t - i + a, e + r, t - i + n, 0, !0), 0 !== n ? (this.v.setTripleAt(e + r - n, t - i, e + r - n, t - i, e + r - a, t - i, 1, !0), this.v.setTripleAt(e - r + n, t - i, e - r + a, t - i, e - r + n, t - i, 2, !0), this.v.setTripleAt(e - r, t - i + n, e - r, t - i + n, e - r, t - i + a, 3, !0), this.v.setTripleAt(e - r, t + i - n, e - r, t + i - a, e - r, t + i - n, 4, !0), this.v.setTripleAt(e - r + n, t + i, e - r + n, t + i, e - r + a, t + i, 5, !0), this.v.setTripleAt(e + r - n, t + i, e + r - a, t + i, e + r - n, t + i, 6, !0), this.v.setTripleAt(e + r, t + i - n, e + r, t + i - n, e + r, t + i - a, 7, !0)) : (this.v.setTripleAt(e - r, t - i, e - r + a, t - i, e - r, t - i, 1, !0), this.v.setTripleAt(e - r, t + i, e - r, t + i - a, e - r, t + i, 2, !0), this.v.setTripleAt(e + r, t + i, e + r - a, t + i, e + r, t + i, 3, !0)))
                  },
                  getValue: function() {
                    this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath())
                  },
                  reset: i
                }, extendPrototype([DynamicPropertyContainer], e), e
              }();
            return {
              getShapeProp: function(e, t, r) {
                var i;
                return 3 === r || 4 === r ? i = (3 === r ? t.pt : t.ks).k.length ? new l(e, t, r) : new s(e, t, r) : 5 === r ? i = new p(e, t) : 6 === r ? i = new h(e, t) : 7 === r && (i = new c(e, t)), i.k && e.addDynamicProperty(i), i
              },
              getConstructorFunction: function() {
                return s
              },
              getKeyframedConstructorFunction: function() {
                return l
              }
            }
          }(),
          Matrix = function() {
            var e = Math.cos,
              t = Math.sin,
              r = Math.tan,
              i = Math.round;

            function n() {
              return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this
            }

            function a(r) {
              if (0 === r) return this;
              var i = e(r),
                n = t(r);
              return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function s(r) {
              if (0 === r) return this;
              var i = e(r),
                n = t(r);
              return this._t(1, 0, 0, 0, 0, i, -n, 0, 0, n, i, 0, 0, 0, 0, 1)
            }

            function o(r) {
              if (0 === r) return this;
              var i = e(r),
                n = t(r);
              return this._t(i, 0, n, 0, 0, 1, 0, 0, -n, 0, i, 0, 0, 0, 0, 1)
            }

            function l(r) {
              if (0 === r) return this;
              var i = e(r),
                n = t(r);
              return this._t(i, -n, 0, 0, n, i, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function h(e, t) {
              return this._t(1, t, e, 1, 0, 0)
            }

            function c(e, t) {
              return this.shear(r(e), r(t))
            }

            function p(i, n) {
              var a = e(n),
                s = t(n);
              return this._t(a, s, 0, 0, -s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, r(i), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(a, -s, 0, 0, s, a, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)
            }

            function u(e, t, r) {
              return r || 0 === r || (r = 1), 1 === e && 1 === t && 1 === r ? this : this._t(e, 0, 0, 0, 0, t, 0, 0, 0, 0, r, 0, 0, 0, 0, 1)
            }

            function d(e, t, r, i, n, a, s, o, l, h, c, p, u, d, f, m) {
              return this.props[0] = e, this.props[1] = t, this.props[2] = r, this.props[3] = i, this.props[4] = n, this.props[5] = a, this.props[6] = s, this.props[7] = o, this.props[8] = l, this.props[9] = h, this.props[10] = c, this.props[11] = p, this.props[12] = u, this.props[13] = d, this.props[14] = f, this.props[15] = m, this
            }

            function f(e, t, r) {
              return r = r || 0, 0 !== e || 0 !== t || 0 !== r ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, e, t, r, 1) : this
            }

            function m(e, t, r, i, n, a, s, o, l, h, c, p, u, d, f, m) {
              var g = this.props;
              if (1 === e && 0 === t && 0 === r && 0 === i && 0 === n && 1 === a && 0 === s && 0 === o && 0 === l && 0 === h && 1 === c && 0 === p) return g[12] = g[12] * e + g[15] * u, g[13] = g[13] * a + g[15] * d, g[14] = g[14] * c + g[15] * f, g[15] *= m, this._identityCalculated = !1, this;
              var v = g[0],
                y = g[1],
                b = g[2],
                S = g[3],
                x = g[4],
                E = g[5],
                w = g[6],
                P = g[7],
                T = g[8],
                C = g[9],
                _ = g[10],
                M = g[11],
                A = g[12],
                k = g[13],
                D = g[14],
                I = g[15];
              return g[0] = v * e + y * n + b * l + S * u, g[1] = v * t + y * a + b * h + S * d, g[2] = v * r + y * s + b * c + S * f, g[3] = v * i + y * o + b * p + S * m, g[4] = x * e + E * n + w * l + P * u, g[5] = x * t + E * a + w * h + P * d, g[6] = x * r + E * s + w * c + P * f, g[7] = x * i + E * o + w * p + P * m, g[8] = T * e + C * n + _ * l + M * u, g[9] = T * t + C * a + _ * h + M * d, g[10] = T * r + C * s + _ * c + M * f, g[11] = T * i + C * o + _ * p + M * m, g[12] = A * e + k * n + D * l + I * u, g[13] = A * t + k * a + D * h + I * d, g[14] = A * r + k * s + D * c + I * f, g[15] = A * i + k * o + D * p + I * m, this._identityCalculated = !1, this
            }

            function g(e) {
              var t = e.props;
              return this.transform(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
            }

            function v() {
              return this._identityCalculated || (this._identity = !(1 !== this.props[0] || 0 !== this.props[1] || 0 !== this.props[2] || 0 !== this.props[3] || 0 !== this.props[4] || 1 !== this.props[5] || 0 !== this.props[6] || 0 !== this.props[7] || 0 !== this.props[8] || 0 !== this.props[9] || 1 !== this.props[10] || 0 !== this.props[11] || 0 !== this.props[12] || 0 !== this.props[13] || 0 !== this.props[14] || 1 !== this.props[15]), this._identityCalculated = !0), this._identity
            }

            function y(e) {
              for (var t = 0; t < 16;) {
                if (e.props[t] !== this.props[t]) return !1;
                t += 1
              }
              return !0
            }

            function b(e) {
              var t;
              for (t = 0; t < 16; t += 1) e.props[t] = this.props[t];
              return e
            }

            function S(e) {
              var t;
              for (t = 0; t < 16; t += 1) this.props[t] = e[t]
            }

            function x(e, t, r) {
              return {
                x: e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12],
                y: e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13],
                z: e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
              }
            }

            function E(e, t, r) {
              return e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12]
            }

            function w(e, t, r) {
              return e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13]
            }

            function P(e, t, r) {
              return e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]
            }

            function T() {
              var e = this.props[0] * this.props[5] - this.props[1] * this.props[4],
                t = this.props[5] / e,
                r = -this.props[1] / e,
                i = -this.props[4] / e,
                n = this.props[0] / e,
                a = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / e,
                s = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / e,
                o = new Matrix;
              return o.props[0] = t, o.props[1] = r, o.props[4] = i, o.props[5] = n, o.props[12] = a, o.props[13] = s, o
            }

            function C(e) {
              return this.getInverseMatrix().applyToPointArray(e[0], e[1], e[2] || 0)
            }

            function _(e) {
              var t, r = e.length,
                i = [];
              for (t = 0; t < r; t += 1) i[t] = C(e[t]);
              return i
            }

            function M(e, t, r) {
              var i = createTypedArray("float32", 6);
              if (this.isIdentity()) i[0] = e[0], i[1] = e[1], i[2] = t[0], i[3] = t[1], i[4] = r[0], i[5] = r[1];
              else {
                var n = this.props[0],
                  a = this.props[1],
                  s = this.props[4],
                  o = this.props[5],
                  l = this.props[12],
                  h = this.props[13];
                i[0] = e[0] * n + e[1] * s + l, i[1] = e[0] * a + e[1] * o + h, i[2] = t[0] * n + t[1] * s + l, i[3] = t[0] * a + t[1] * o + h, i[4] = r[0] * n + r[1] * s + l, i[5] = r[0] * a + r[1] * o + h
              }
              return i
            }

            function A(e, t, r) {
              return this.isIdentity() ? [e, t, r] : [e * this.props[0] + t * this.props[4] + r * this.props[8] + this.props[12], e * this.props[1] + t * this.props[5] + r * this.props[9] + this.props[13], e * this.props[2] + t * this.props[6] + r * this.props[10] + this.props[14]]
            }

            function k(e, t) {
              if (this.isIdentity()) return e + "," + t;
              var r = this.props;
              return Math.round(100 * (e * r[0] + t * r[4] + r[12])) / 100 + "," + Math.round(100 * (e * r[1] + t * r[5] + r[13])) / 100
            }

            function D() {
              for (var e = 0, t = this.props, r = "matrix3d("; e < 16;) r += i(1e4 * t[e]) / 1e4, r += 15 === e ? ")" : ",", e += 1;
              return r
            }

            function I(e) {
              return e < 1e-6 && e > 0 || e > -1e-6 && e < 0 ? i(1e4 * e) / 1e4 : e
            }

            function F() {
              var e = this.props;
              return "matrix(" + I(e[0]) + "," + I(e[1]) + "," + I(e[4]) + "," + I(e[5]) + "," + I(e[12]) + "," + I(e[13]) + ")"
            }
            return function() {
              this.reset = n, this.rotate = a, this.rotateX = s, this.rotateY = o, this.rotateZ = l, this.skew = c, this.skewFromAxis = p, this.shear = h, this.scale = u, this.setTransform = d, this.translate = f, this.transform = m, this.multiply = g, this.applyToPoint = x, this.applyToX = E, this.applyToY = w, this.applyToZ = P, this.applyToPointArray = A, this.applyToTriplePoints = M, this.applyToPointStringified = k, this.toCSS = D, this.to2dCSS = F, this.clone = b, this.cloneFromProps = S, this.equals = y, this.inversePoints = _, this.inversePoint = C, this.getInverseMatrix = T, this._t = this.transform, this.isIdentity = v, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset()
            }
          }();

        function _typeof$3(e) {
          return _typeof$3 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$3(e)
        }
        var lottie = {},
          standalone = "__[STANDALONE]__",
          animationData = "__[ANIMATIONDATA]__",
          renderer = "";

        function setLocation(e) {
          setLocationHref(e)
        }

        function searchAnimations() {
          !0 === standalone ? animationManager.searchAnimations(animationData, standalone, renderer) : animationManager.searchAnimations()
        }

        function setSubframeRendering(e) {
          setSubframeEnabled(e)
        }

        function setPrefix(e) {
          setIdPrefix(e)
        }

        function loadAnimation(e) {
          return !0 === standalone && (e.animationData = JSON.parse(animationData)), animationManager.loadAnimation(e)
        }

        function setQuality(e) {
          if ("string" == typeof e) switch (e) {
            case "high":
              setDefaultCurveSegments(200);
              break;
            default:
            case "medium":
              setDefaultCurveSegments(50);
              break;
            case "low":
              setDefaultCurveSegments(10)
          } else !isNaN(e) && e > 1 && setDefaultCurveSegments(e);
          getDefaultCurveSegments() >= 50 ? roundValues(!1) : roundValues(!0)
        }

        function inBrowser() {
          return "undefined" != typeof navigator
        }

        function installPlugin(e, t) {
          "expressions" === e && setExpressionsPlugin(t)
        }

        function getFactory(e) {
          switch (e) {
            case "propertyFactory":
              return PropertyFactory;
            case "shapePropertyFactory":
              return ShapePropertyFactory;
            case "matrix":
              return Matrix;
            default:
              return null
          }
        }

        function checkReady() {
          "complete" === document.readyState && (clearInterval(readyStateCheckInterval), searchAnimations())
        }

        function getQueryVariable(e) {
          for (var t = queryString.split("&"), r = 0; r < t.length; r += 1) {
            var i = t[r].split("=");
            if (decodeURIComponent(i[0]) == e) return decodeURIComponent(i[1])
          }
          return null
        }
        lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
        var queryString = "";
        if (standalone) {
          var scripts = document.getElementsByTagName("script"),
            index = scripts.length - 1,
            myScript = scripts[index] || {
              src: ""
            };
          queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", renderer = getQueryVariable("renderer")
        }
        var readyStateCheckInterval = setInterval(checkReady, 100);
        try {
          "object" !== _typeof$3(exports) && __webpack_require__.amdO
        } catch (e) {}
        var ShapeModifiers = function() {
          var e = {},
            t = {};
          return e.registerModifier = function(e, r) {
            t[e] || (t[e] = r)
          }, e.getModifier = function(e, r, i) {
            return new t[e](r, i)
          }, e
        }();

        function ShapeModifier() {}

        function TrimModifier() {}

        function PuckerAndBloatModifier() {}
        ShapeModifier.prototype.initModifierProperties = function() {}, ShapeModifier.prototype.addShapeToModifier = function() {}, ShapeModifier.prototype.addShape = function(e) {
          if (!this.closed) {
            e.sh.container.addDynamicProperty(e.sh);
            var t = {
              shape: e.sh,
              data: e,
              localShapeCollection: shapeCollectionPool.newShapeCollection()
            };
            this.shapes.push(t), this.addShapeToModifier(t), this._isAnimated && e.setAsAnimated()
          }
        }, ShapeModifier.prototype.init = function(e, t) {
          this.shapes = [], this.elem = e, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, ShapeModifier.prototype.processKeys = function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties())
        }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(e, t) {
          this.s = PropertyFactory.getProp(e, t.s, 0, .01, this), this.e = PropertyFactory.getProp(e, t.e, 0, .01, this), this.o = PropertyFactory.getProp(e, t.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = t.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length
        }, TrimModifier.prototype.addShapeToModifier = function(e) {
          e.pathsData = []
        }, TrimModifier.prototype.calculateShapeEdges = function(e, t, r, i, n) {
          var a = [];
          t <= 1 ? a.push({
            s: e,
            e: t
          }) : e >= 1 ? a.push({
            s: e - 1,
            e: t - 1
          }) : (a.push({
            s: e,
            e: 1
          }), a.push({
            s: 0,
            e: t - 1
          }));
          var s, o, l = [],
            h = a.length;
          for (s = 0; s < h; s += 1) {
            var c, p;
            (o = a[s]).e * n < i || o.s * n > i + r || (c = o.s * n <= i ? 0 : (o.s * n - i) / r, p = o.e * n >= i + r ? 1 : (o.e * n - i) / r, l.push([c, p]))
          }
          return l.length || l.push([0, 0]), l
        }, TrimModifier.prototype.releasePathsData = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) segmentsLengthPool.release(e[t]);
          return e.length = 0, e
        }, TrimModifier.prototype.processShapes = function(e) {
          var t, r, i, n;
          if (this._mdf || e) {
            var a = this.o.v % 360 / 360;
            if (a < 0 && (a += 1), (t = this.s.v > 1 ? 1 + a : this.s.v < 0 ? 0 + a : this.s.v + a) > (r = this.e.v > 1 ? 1 + a : this.e.v < 0 ? 0 + a : this.e.v + a)) {
              var s = t;
              t = r, r = s
            }
            t = 1e-4 * Math.round(1e4 * t), r = 1e-4 * Math.round(1e4 * r), this.sValue = t, this.eValue = r
          } else t = this.sValue, r = this.eValue;
          var o, l, h, c, p, u = this.shapes.length,
            d = 0;
          if (r === t)
            for (n = 0; n < u; n += 1) this.shapes[n].localShapeCollection.releaseShapes(), this.shapes[n].shape._mdf = !0, this.shapes[n].shape.paths = this.shapes[n].localShapeCollection, this._mdf && (this.shapes[n].pathsData.length = 0);
          else if (1 === r && 0 === t || 0 === r && 1 === t) {
            if (this._mdf)
              for (n = 0; n < u; n += 1) this.shapes[n].pathsData.length = 0, this.shapes[n].shape._mdf = !0
          } else {
            var f, m, g = [];
            for (n = 0; n < u; n += 1)
              if ((f = this.shapes[n]).shape._mdf || this._mdf || e || 2 === this.m) {
                if (l = (i = f.shape.paths)._length, p = 0, !f.shape._mdf && f.pathsData.length) p = f.totalShapeLength;
                else {
                  for (h = this.releasePathsData(f.pathsData), o = 0; o < l; o += 1) c = bez.getSegmentsLength(i.shapes[o]), h.push(c), p += c.totalLength;
                  f.totalShapeLength = p, f.pathsData = h
                }
                d += p, f.shape._mdf = !0
              } else f.shape.paths = f.localShapeCollection;
            var v, y = t,
              b = r,
              S = 0;
            for (n = u - 1; n >= 0; n -= 1)
              if ((f = this.shapes[n]).shape._mdf) {
                for ((m = f.localShapeCollection).releaseShapes(), 2 === this.m && u > 1 ? (v = this.calculateShapeEdges(t, r, f.totalShapeLength, S, d), S += f.totalShapeLength) : v = [
                    [y, b]
                  ], l = v.length, o = 0; o < l; o += 1) {
                  y = v[o][0], b = v[o][1], g.length = 0, b <= 1 ? g.push({
                    s: f.totalShapeLength * y,
                    e: f.totalShapeLength * b
                  }) : y >= 1 ? g.push({
                    s: f.totalShapeLength * (y - 1),
                    e: f.totalShapeLength * (b - 1)
                  }) : (g.push({
                    s: f.totalShapeLength * y,
                    e: f.totalShapeLength
                  }), g.push({
                    s: 0,
                    e: f.totalShapeLength * (b - 1)
                  }));
                  var x = this.addShapes(f, g[0]);
                  if (g[0].s !== g[0].e) {
                    if (g.length > 1)
                      if (f.shape.paths.shapes[f.shape.paths._length - 1].c) {
                        var E = x.pop();
                        this.addPaths(x, m), x = this.addShapes(f, g[1], E)
                      } else this.addPaths(x, m), x = this.addShapes(f, g[1]);
                    this.addPaths(x, m)
                  }
                }
                f.shape.paths = m
              }
          }
        }, TrimModifier.prototype.addPaths = function(e, t) {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) t.addShape(e[r])
        }, TrimModifier.prototype.addSegment = function(e, t, r, i, n, a, s) {
          n.setXYAt(t[0], t[1], "o", a), n.setXYAt(r[0], r[1], "i", a + 1), s && n.setXYAt(e[0], e[1], "v", a), n.setXYAt(i[0], i[1], "v", a + 1)
        }, TrimModifier.prototype.addSegmentFromArray = function(e, t, r, i) {
          t.setXYAt(e[1], e[5], "o", r), t.setXYAt(e[2], e[6], "i", r + 1), i && t.setXYAt(e[0], e[4], "v", r), t.setXYAt(e[3], e[7], "v", r + 1)
        }, TrimModifier.prototype.addShapes = function(e, t, r) {
          var i, n, a, s, o, l, h, c, p = e.pathsData,
            u = e.shape.paths.shapes,
            d = e.shape.paths._length,
            f = 0,
            m = [],
            g = !0;
          for (r ? (o = r._length, c = r._length) : (r = shapePool.newElement(), o = 0, c = 0), m.push(r), i = 0; i < d; i += 1) {
            for (l = p[i].lengths, r.c = u[i].c, a = u[i].c ? l.length : l.length + 1, n = 1; n < a; n += 1)
              if (f + (s = l[n - 1]).addedLength < t.s) f += s.addedLength, r.c = !1;
              else {
                if (f > t.e) {
                  r.c = !1;
                  break
                }
                t.s <= f && t.e >= f + s.addedLength ? (this.addSegment(u[i].v[n - 1], u[i].o[n - 1], u[i].i[n], u[i].v[n], r, o, g), g = !1) : (h = bez.getNewSegment(u[i].v[n - 1], u[i].v[n], u[i].o[n - 1], u[i].i[n], (t.s - f) / s.addedLength, (t.e - f) / s.addedLength, l[n - 1]), this.addSegmentFromArray(h, r, o, g), g = !1, r.c = !1), f += s.addedLength, o += 1
              } if (u[i].c && l.length) {
              if (s = l[n - 1], f <= t.e) {
                var v = l[n - 1].addedLength;
                t.s <= f && t.e >= f + v ? (this.addSegment(u[i].v[n - 1], u[i].o[n - 1], u[i].i[0], u[i].v[0], r, o, g), g = !1) : (h = bez.getNewSegment(u[i].v[n - 1], u[i].v[0], u[i].o[n - 1], u[i].i[0], (t.s - f) / v, (t.e - f) / v, l[n - 1]), this.addSegmentFromArray(h, r, o, g), g = !1, r.c = !1)
              } else r.c = !1;
              f += s.addedLength, o += 1
            }
            if (r._length && (r.setXYAt(r.v[c][0], r.v[c][1], "i", c), r.setXYAt(r.v[r._length - 1][0], r.v[r._length - 1][1], "o", r._length - 1)), f > t.e) break;
            i < d - 1 && (r = shapePool.newElement(), g = !0, m.push(r), o = 0)
          }
          return m
        }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length
        }, PuckerAndBloatModifier.prototype.processPath = function(e, t) {
          var r = t / 100,
            i = [0, 0],
            n = e._length,
            a = 0;
          for (a = 0; a < n; a += 1) i[0] += e.v[a][0], i[1] += e.v[a][1];
          i[0] /= n, i[1] /= n;
          var s, o, l, h, c, p, u = shapePool.newElement();
          for (u.c = e.c, a = 0; a < n; a += 1) s = e.v[a][0] + (i[0] - e.v[a][0]) * r, o = e.v[a][1] + (i[1] - e.v[a][1]) * r, l = e.o[a][0] + (i[0] - e.o[a][0]) * -r, h = e.o[a][1] + (i[1] - e.o[a][1]) * -r, c = e.i[a][0] + (i[0] - e.i[a][0]) * -r, p = e.i[a][1] + (i[1] - e.i[a][1]) * -r, u.setTripleAt(s, o, l, h, c, p, a);
          return u
        }, PuckerAndBloatModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s, o = this.shapes.length,
            l = this.amount.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var TransformPropertyFactory = function() {
          var e = [0, 0];

          function t(e, t, r) {
            if (this.elem = e, this.frameId = -1, this.propType = "transform", this.data = t, this.v = new Matrix, this.pre = new Matrix, this.appliedTransformations = 0, this.initDynamicPropertyContainer(r || e), t.p && t.p.s ? (this.px = PropertyFactory.getProp(e, t.p.x, 0, 0, this), this.py = PropertyFactory.getProp(e, t.p.y, 0, 0, this), t.p.z && (this.pz = PropertyFactory.getProp(e, t.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(e, t.p || {
                k: [0, 0, 0]
              }, 1, 0, this), t.rx) {
              if (this.rx = PropertyFactory.getProp(e, t.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(e, t.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(e, t.rz, 0, degToRads, this), t.or.k[0].ti) {
                var i, n = t.or.k.length;
                for (i = 0; i < n; i += 1) t.or.k[i].to = null, t.or.k[i].ti = null
              }
              this.or = PropertyFactory.getProp(e, t.or, 1, degToRads, this), this.or.sh = !0
            } else this.r = PropertyFactory.getProp(e, t.r || {
              k: 0
            }, 0, degToRads, this);
            t.sk && (this.sk = PropertyFactory.getProp(e, t.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(e, t.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(e, t.a || {
              k: [0, 0, 0]
            }, 1, 0, this), this.s = PropertyFactory.getProp(e, t.s || {
              k: [100, 100, 100]
            }, 1, .01, this), t.o ? this.o = PropertyFactory.getProp(e, t.o, 0, .01, e) : this.o = {
              _mdf: !1,
              v: 1
            }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0)
          }
          return t.prototype = {
            applyToMatrix: function(e) {
              var t = this._mdf;
              this.iterateDynamicProperties(), this._mdf = this._mdf || t, this.a && e.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && e.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && e.skewFromAxis(-this.sk.v, this.sa.v), this.r ? e.rotate(-this.r.v) : e.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? e.translate(this.px.v, this.py.v, -this.pz.v) : e.translate(this.px.v, this.py.v, 0) : e.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
            },
            getValue: function(t) {
              if (this.elem.globalData.frameId !== this.frameId) {
                if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || t) {
                  var r;
                  if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
                    var i, n;
                    if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (i = this.p.getValueAtTime((this.p.keyframes[0].t + .01) / r, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (i = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - .05) / r, 0)) : (i = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - .01) / r, this.p.offsetTime));
                    else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                      i = [], n = [];
                      var a = this.px,
                        s = this.py;
                      a._caching.lastFrame + a.offsetTime <= a.keyframes[0].t ? (i[0] = a.getValueAtTime((a.keyframes[0].t + .01) / r, 0), i[1] = s.getValueAtTime((s.keyframes[0].t + .01) / r, 0), n[0] = a.getValueAtTime(a.keyframes[0].t / r, 0), n[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)) : a._caching.lastFrame + a.offsetTime >= a.keyframes[a.keyframes.length - 1].t ? (i[0] = a.getValueAtTime(a.keyframes[a.keyframes.length - 1].t / r, 0), i[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), n[0] = a.getValueAtTime((a.keyframes[a.keyframes.length - 1].t - .01) / r, 0), n[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - .01) / r, 0)) : (i = [a.pv, s.pv], n[0] = a.getValueAtTime((a._caching.lastFrame + a.offsetTime - .01) / r, a.offsetTime), n[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - .01) / r, s.offsetTime))
                    } else i = n = e;
                    this.v.rotate(-Math.atan2(i[1] - n[1], i[0] - n[0]))
                  }
                  this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2])
                }
                this.frameId = this.elem.globalData.frameId
              }
            },
            precalculateMatrix: function() {
              if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
                if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
                  if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
                  this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3
                }
                this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4)
              }
            },
            autoOrient: function() {}
          }, extendPrototype([DynamicPropertyContainer], t), t.prototype.addDynamicProperty = function(e) {
            this._addDynamicProperty(e), this.elem.addDynamicProperty(e), this._isDirty = !0
          }, t.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, {
            getTransformProperty: function(e, r, i) {
              return new t(e, r, i)
            }
          }
        }();

        function RepeaterModifier() {}

        function RoundCornersModifier() {}

        function floatEqual(e, t) {
          return 1e5 * Math.abs(e - t) <= Math.min(Math.abs(e), Math.abs(t))
        }

        function floatZero(e) {
          return Math.abs(e) <= 1e-5
        }

        function lerp(e, t, r) {
          return e * (1 - r) + t * r
        }

        function lerpPoint(e, t, r) {
          return [lerp(e[0], t[0], r), lerp(e[1], t[1], r)]
        }

        function quadRoots(e, t, r) {
          if (0 === e) return [];
          var i = t * t - 4 * e * r;
          if (i < 0) return [];
          var n = -t / (2 * e);
          if (0 === i) return [n];
          var a = Math.sqrt(i) / (2 * e);
          return [n - a, n + a]
        }

        function polynomialCoefficients(e, t, r, i) {
          return [3 * t - e - 3 * r + i, 3 * e - 6 * t + 3 * r, -3 * e + 3 * t, e]
        }

        function singlePoint(e) {
          return new PolynomialBezier(e, e, e, e, !1)
        }

        function PolynomialBezier(e, t, r, i, n) {
          n && pointEqual(e, t) && (t = lerpPoint(e, i, 1 / 3)), n && pointEqual(r, i) && (r = lerpPoint(e, i, 2 / 3));
          var a = polynomialCoefficients(e[0], t[0], r[0], i[0]),
            s = polynomialCoefficients(e[1], t[1], r[1], i[1]);
          this.a = [a[0], s[0]], this.b = [a[1], s[1]], this.c = [a[2], s[2]], this.d = [a[3], s[3]], this.points = [e, t, r, i]
        }

        function extrema(e, t) {
          var r = e.points[0][t],
            i = e.points[e.points.length - 1][t];
          if (r > i) {
            var n = i;
            i = r, r = n
          }
          for (var a = quadRoots(3 * e.a[t], 2 * e.b[t], e.c[t]), s = 0; s < a.length; s += 1)
            if (a[s] > 0 && a[s] < 1) {
              var o = e.point(a[s])[t];
              o < r ? r = o : o > i && (i = o)
            } return {
            min: r,
            max: i
          }
        }

        function intersectData(e, t, r) {
          var i = e.boundingBox();
          return {
            cx: i.cx,
            cy: i.cy,
            width: i.width,
            height: i.height,
            bez: e,
            t: (t + r) / 2,
            t1: t,
            t2: r
          }
        }

        function splitData(e) {
          var t = e.bez.split(.5);
          return [intersectData(t[0], e.t1, e.t), intersectData(t[1], e.t, e.t2)]
        }

        function boxIntersect(e, t) {
          return 2 * Math.abs(e.cx - t.cx) < e.width + t.width && 2 * Math.abs(e.cy - t.cy) < e.height + t.height
        }

        function intersectsImpl(e, t, r, i, n, a) {
          if (boxIntersect(e, t))
            if (r >= a || e.width <= i && e.height <= i && t.width <= i && t.height <= i) n.push([e.t, t.t]);
            else {
              var s = splitData(e),
                o = splitData(t);
              intersectsImpl(s[0], o[0], r + 1, i, n, a), intersectsImpl(s[0], o[1], r + 1, i, n, a), intersectsImpl(s[1], o[0], r + 1, i, n, a), intersectsImpl(s[1], o[1], r + 1, i, n, a)
            }
        }

        function crossProduct(e, t) {
          return [e[1] * t[2] - e[2] * t[1], e[2] * t[0] - e[0] * t[2], e[0] * t[1] - e[1] * t[0]]
        }

        function lineIntersection(e, t, r, i) {
          var n = [e[0], e[1], 1],
            a = [t[0], t[1], 1],
            s = [r[0], r[1], 1],
            o = [i[0], i[1], 1],
            l = crossProduct(crossProduct(n, a), crossProduct(s, o));
          return floatZero(l[2]) ? null : [l[0] / l[2], l[1] / l[2]]
        }

        function polarOffset(e, t, r) {
          return [e[0] + Math.cos(t) * r, e[1] - Math.sin(t) * r]
        }

        function pointDistance(e, t) {
          return Math.hypot(e[0] - t[0], e[1] - t[1])
        }

        function pointEqual(e, t) {
          return floatEqual(e[0], t[0]) && floatEqual(e[1], t[1])
        }

        function ZigZagModifier() {}

        function setPoint(e, t, r, i, n, a, s) {
          var o = r - Math.PI / 2,
            l = r + Math.PI / 2,
            h = t[0] + Math.cos(r) * i * n,
            c = t[1] - Math.sin(r) * i * n;
          e.setTripleAt(h, c, h + Math.cos(o) * a, c - Math.sin(o) * a, h + Math.cos(l) * s, c - Math.sin(l) * s, e.length())
        }

        function getPerpendicularVector(e, t) {
          var r = [t[0] - e[0], t[1] - e[1]],
            i = .5 * -Math.PI;
          return [Math.cos(i) * r[0] - Math.sin(i) * r[1], Math.sin(i) * r[0] + Math.cos(i) * r[1]]
        }

        function getProjectingAngle(e, t) {
          var r = 0 === t ? e.length() - 1 : t - 1,
            i = (t + 1) % e.length(),
            n = getPerpendicularVector(e.v[r], e.v[i]);
          return Math.atan2(0, 1) - Math.atan2(n[1], n[0])
        }

        function zigZagCorner(e, t, r, i, n, a, s) {
          var o = getProjectingAngle(t, r),
            l = t.v[r % t._length],
            h = t.v[0 === r ? t._length - 1 : r - 1],
            c = t.v[(r + 1) % t._length],
            p = 2 === a ? Math.sqrt(Math.pow(l[0] - h[0], 2) + Math.pow(l[1] - h[1], 2)) : 0,
            u = 2 === a ? Math.sqrt(Math.pow(l[0] - c[0], 2) + Math.pow(l[1] - c[1], 2)) : 0;
          setPoint(e, t.v[r % t._length], o, s, i, u / (2 * (n + 1)), p / (2 * (n + 1)), a)
        }

        function zigZagSegment(e, t, r, i, n, a) {
          for (var s = 0; s < i; s += 1) {
            var o = (s + 1) / (i + 1),
              l = 2 === n ? Math.sqrt(Math.pow(t.points[3][0] - t.points[0][0], 2) + Math.pow(t.points[3][1] - t.points[0][1], 2)) : 0,
              h = t.normalAngle(o);
            setPoint(e, t.point(o), h, a, r, l / (2 * (i + 1)), l / (2 * (i + 1)), n), a = -a
          }
          return a
        }

        function linearOffset(e, t, r) {
          var i = Math.atan2(t[0] - e[0], t[1] - e[1]);
          return [polarOffset(e, i, r), polarOffset(t, i, r)]
        }

        function offsetSegment(e, t) {
          var r, i, n, a, s, o, l;
          r = (l = linearOffset(e.points[0], e.points[1], t))[0], i = l[1], n = (l = linearOffset(e.points[1], e.points[2], t))[0], a = l[1], s = (l = linearOffset(e.points[2], e.points[3], t))[0], o = l[1];
          var h = lineIntersection(r, i, n, a);
          null === h && (h = i);
          var c = lineIntersection(s, o, n, a);
          return null === c && (c = s), new PolynomialBezier(r, h, c, o)
        }

        function joinLines(e, t, r, i, n) {
          var a = t.points[3],
            s = r.points[0];
          if (3 === i) return a;
          if (pointEqual(a, s)) return a;
          if (2 === i) {
            var o = -t.tangentAngle(1),
              l = -r.tangentAngle(0) + Math.PI,
              h = lineIntersection(a, polarOffset(a, o + Math.PI / 2, 100), s, polarOffset(s, o + Math.PI / 2, 100)),
              c = h ? pointDistance(h, a) : pointDistance(a, s) / 2,
              p = polarOffset(a, o, 2 * c * roundCorner);
            return e.setXYAt(p[0], p[1], "o", e.length() - 1), p = polarOffset(s, l, 2 * c * roundCorner), e.setTripleAt(s[0], s[1], s[0], s[1], p[0], p[1], e.length()), s
          }
          var u = lineIntersection(pointEqual(a, t.points[2]) ? t.points[0] : t.points[2], a, s, pointEqual(s, r.points[1]) ? r.points[3] : r.points[1]);
          return u && pointDistance(u, a) < n ? (e.setTripleAt(u[0], u[1], u[0], u[1], u[0], u[1], e.length()), u) : a
        }

        function getIntersection(e, t) {
          var r = e.intersections(t);
          return r.length && floatEqual(r[0][0], 1) && r.shift(), r.length ? r[0] : null
        }

        function pruneSegmentIntersection(e, t) {
          var r = e.slice(),
            i = t.slice(),
            n = getIntersection(e[e.length - 1], t[0]);
          return n && (r[e.length - 1] = e[e.length - 1].split(n[0])[0], i[0] = t[0].split(n[1])[1]), e.length > 1 && t.length > 1 && (n = getIntersection(e[0], t[t.length - 1])) ? [
            [e[0].split(n[0])[0]],
            [t[t.length - 1].split(n[1])[1]]
          ] : [r, i]
        }

        function pruneIntersections(e) {
          for (var t, r = 1; r < e.length; r += 1) t = pruneSegmentIntersection(e[r - 1], e[r]), e[r - 1] = t[0], e[r] = t[1];
          return e.length > 1 && (t = pruneSegmentIntersection(e[e.length - 1], e[0]), e[e.length - 1] = t[0], e[0] = t[1]), e
        }

        function offsetSegmentSplit(e, t) {
          var r, i, n, a, s = e.inflectionPoints();
          if (0 === s.length) return [offsetSegment(e, t)];
          if (1 === s.length || floatEqual(s[1], 1)) return r = (n = e.split(s[0]))[0], i = n[1], [offsetSegment(r, t), offsetSegment(i, t)];
          r = (n = e.split(s[0]))[0];
          var o = (s[1] - s[0]) / (1 - s[0]);
          return a = (n = n[1].split(o))[0], i = n[1], [offsetSegment(r, t), offsetSegment(a, t), offsetSegment(i, t)]
        }

        function OffsetPathModifier() {}

        function getFontProperties(e) {
          for (var t = e.fStyle ? e.fStyle.split(" ") : [], r = "normal", i = "normal", n = t.length, a = 0; a < n; a += 1) switch (t[a].toLowerCase()) {
            case "italic":
              i = "italic";
              break;
            case "bold":
              r = "700";
              break;
            case "black":
              r = "900";
              break;
            case "medium":
              r = "500";
              break;
            case "regular":
            case "normal":
              r = "400";
              break;
            case "light":
            case "thin":
              r = "200"
          }
          return {
            style: i,
            weight: e.fWeight || r
          }
        }
        extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.c = PropertyFactory.getProp(e, t.c, 0, null, this), this.o = PropertyFactory.getProp(e, t.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(e, t.tr, this), this.so = PropertyFactory.getProp(e, t.tr.so, 0, .01, this), this.eo = PropertyFactory.getProp(e, t.tr.eo, 0, .01, this), this.data = t, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix, this.rMatrix = new Matrix, this.sMatrix = new Matrix, this.tMatrix = new Matrix, this.matrix = new Matrix
        }, RepeaterModifier.prototype.applyTransforms = function(e, t, r, i, n, a) {
          var s = a ? -1 : 1,
            o = i.s.v[0] + (1 - i.s.v[0]) * (1 - n),
            l = i.s.v[1] + (1 - i.s.v[1]) * (1 - n);
          e.translate(i.p.v[0] * s * n, i.p.v[1] * s * n, i.p.v[2]), t.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), t.rotate(-i.r.v * s * n), t.translate(i.a.v[0], i.a.v[1], i.a.v[2]), r.translate(-i.a.v[0], -i.a.v[1], i.a.v[2]), r.scale(a ? 1 / o : o, a ? 1 / l : l), r.translate(i.a.v[0], i.a.v[1], i.a.v[2])
        }, RepeaterModifier.prototype.init = function(e, t, r, i) {
          for (this.elem = e, this.arr = t, this.pos = r, this.elemsData = i, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(e), this.initModifierProperties(e, t[r]); r > 0;) r -= 1, this._elements.unshift(t[r]);
          this.dynamicProperties.length ? this.k = !0 : this.getValue(!0)
        }, RepeaterModifier.prototype.resetElements = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) e[t]._processed = !1, "gr" === e[t].ty && this.resetElements(e[t].it)
        }, RepeaterModifier.prototype.cloneElements = function(e) {
          var t = JSON.parse(JSON.stringify(e));
          return this.resetElements(t), t
        }, RepeaterModifier.prototype.changeGroupRender = function(e, t) {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) e[r]._render = t, "gr" === e[r].ty && this.changeGroupRender(e[r].it, t)
        }, RepeaterModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s = !1;
          if (this._mdf || e) {
            var o, l = Math.ceil(this.c.v);
            if (this._groups.length < l) {
              for (; this._groups.length < l;) {
                var h = {
                  it: this.cloneElements(this._elements),
                  ty: "gr"
                };
                h.it.push({
                  a: {
                    a: 0,
                    ix: 1,
                    k: [0, 0]
                  },
                  nm: "Transform",
                  o: {
                    a: 0,
                    ix: 7,
                    k: 100
                  },
                  p: {
                    a: 0,
                    ix: 2,
                    k: [0, 0]
                  },
                  r: {
                    a: 1,
                    ix: 6,
                    k: [{
                      s: 0,
                      e: 0,
                      t: 0
                    }, {
                      s: 0,
                      e: 0,
                      t: 1
                    }]
                  },
                  s: {
                    a: 0,
                    ix: 3,
                    k: [100, 100]
                  },
                  sa: {
                    a: 0,
                    ix: 5,
                    k: 0
                  },
                  sk: {
                    a: 0,
                    ix: 4,
                    k: 0
                  },
                  ty: "tr"
                }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1
              }
              this.elem.reloadShapes(), s = !0
            }
            for (a = 0, i = 0; i <= this._groups.length - 1; i += 1) {
              if (o = a < l, this._groups[i]._render = o, this.changeGroupRender(this._groups[i].it, o), !o) {
                var c = this.elemsData[i].it,
                  p = c[c.length - 1];
                0 !== p.transform.op.v ? (p.transform.op._mdf = !0, p.transform.op.v = 0) : p.transform.op._mdf = !1
              }
              a += 1
            }
            this._currentCopies = l;
            var u = this.o.v,
              d = u % 1,
              f = u > 0 ? Math.floor(u) : Math.ceil(u),
              m = this.pMatrix.props,
              g = this.rMatrix.props,
              v = this.sMatrix.props;
            this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
            var y, b, S = 0;
            if (u > 0) {
              for (; S < f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), S += 1;
              d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, d, !1), S += d)
            } else if (u < 0) {
              for (; S > f;) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), S -= 1;
              d && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -d, !0), S -= d)
            }
            for (i = 1 === this.data.m ? 0 : this._currentCopies - 1, n = 1 === this.data.m ? 1 : -1, a = this._currentCopies; a;) {
              if (b = (r = (t = this.elemsData[i].it)[t.length - 1].transform.mProps.v.props).length, t[t.length - 1].transform.mProps._mdf = !0, t[t.length - 1].transform.op._mdf = !0, t[t.length - 1].transform.op.v = 1 === this._currentCopies ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (i / (this._currentCopies - 1)), 0 !== S) {
                for ((0 !== i && 1 === n || i !== this._currentCopies - 1 && -1 === n) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), this.matrix.transform(v[0], v[1], v[2], v[3], v[4], v[5], v[6], v[7], v[8], v[9], v[10], v[11], v[12], v[13], v[14], v[15]), this.matrix.transform(m[0], m[1], m[2], m[3], m[4], m[5], m[6], m[7], m[8], m[9], m[10], m[11], m[12], m[13], m[14], m[15]), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
                this.matrix.reset()
              } else
                for (this.matrix.reset(), y = 0; y < b; y += 1) r[y] = this.matrix.props[y];
              S += 1, a -= 1, i += n
            }
          } else
            for (a = this._currentCopies, i = 0, n = 1; a;) r = (t = this.elemsData[i].it)[t.length - 1].transform.mProps.v.props, t[t.length - 1].transform.mProps._mdf = !1, t[t.length - 1].transform.op._mdf = !1, a -= 1, i += n;
          return s
        }, RepeaterModifier.prototype.addShape = function() {}, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(e, t.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length
        }, RoundCornersModifier.prototype.processPath = function(e, t) {
          var r, i = shapePool.newElement();
          i.c = e.c;
          var n, a, s, o, l, h, c, p, u, d, f, m, g = e._length,
            v = 0;
          for (r = 0; r < g; r += 1) n = e.v[r], s = e.o[r], a = e.i[r], n[0] === s[0] && n[1] === s[1] && n[0] === a[0] && n[1] === a[1] ? 0 !== r && r !== g - 1 || e.c ? (o = 0 === r ? e.v[g - 1] : e.v[r - 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, c = f = n[0] + (o[0] - n[0]) * h, p = m = n[1] - (n[1] - o[1]) * h, u = c - (c - n[0]) * roundCorner, d = p - (p - n[1]) * roundCorner, i.setTripleAt(c, p, u, d, f, m, v), v += 1, o = r === g - 1 ? e.v[0] : e.v[r + 1], h = (l = Math.sqrt(Math.pow(n[0] - o[0], 2) + Math.pow(n[1] - o[1], 2))) ? Math.min(l / 2, t) / l : 0, c = u = n[0] + (o[0] - n[0]) * h, p = d = n[1] + (o[1] - n[1]) * h, f = c - (c - n[0]) * roundCorner, m = p - (p - n[1]) * roundCorner, i.setTripleAt(c, p, u, d, f, m, v), v += 1) : (i.setTripleAt(n[0], n[1], s[0], s[1], a[0], a[1], v), v += 1) : (i.setTripleAt(e.v[r][0], e.v[r][1], e.o[r][0], e.o[r][1], e.i[r][0], e.i[r][1], v), v += 1);
          return i
        }, RoundCornersModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s, o = this.shapes.length,
            l = this.rd.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, PolynomialBezier.prototype.point = function(e) {
          return [((this.a[0] * e + this.b[0]) * e + this.c[0]) * e + this.d[0], ((this.a[1] * e + this.b[1]) * e + this.c[1]) * e + this.d[1]]
        }, PolynomialBezier.prototype.derivative = function(e) {
          return [(3 * e * this.a[0] + 2 * this.b[0]) * e + this.c[0], (3 * e * this.a[1] + 2 * this.b[1]) * e + this.c[1]]
        }, PolynomialBezier.prototype.tangentAngle = function(e) {
          var t = this.derivative(e);
          return Math.atan2(t[1], t[0])
        }, PolynomialBezier.prototype.normalAngle = function(e) {
          var t = this.derivative(e);
          return Math.atan2(t[0], t[1])
        }, PolynomialBezier.prototype.inflectionPoints = function() {
          var e = this.a[1] * this.b[0] - this.a[0] * this.b[1];
          if (floatZero(e)) return [];
          var t = -.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / e,
            r = t * t - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / e;
          if (r < 0) return [];
          var i = Math.sqrt(r);
          return floatZero(i) ? i > 0 && i < 1 ? [t] : [] : [t - i, t + i].filter((function(e) {
            return e > 0 && e < 1
          }))
        }, PolynomialBezier.prototype.split = function(e) {
          if (e <= 0) return [singlePoint(this.points[0]), this];
          if (e >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
          var t = lerpPoint(this.points[0], this.points[1], e),
            r = lerpPoint(this.points[1], this.points[2], e),
            i = lerpPoint(this.points[2], this.points[3], e),
            n = lerpPoint(t, r, e),
            a = lerpPoint(r, i, e),
            s = lerpPoint(n, a, e);
          return [new PolynomialBezier(this.points[0], t, n, s, !0), new PolynomialBezier(s, a, i, this.points[3], !0)]
        }, PolynomialBezier.prototype.bounds = function() {
          return {
            x: extrema(this, 0),
            y: extrema(this, 1)
          }
        }, PolynomialBezier.prototype.boundingBox = function() {
          var e = this.bounds();
          return {
            left: e.x.min,
            right: e.x.max,
            top: e.y.min,
            bottom: e.y.max,
            width: e.x.max - e.x.min,
            height: e.y.max - e.y.min,
            cx: (e.x.max + e.x.min) / 2,
            cy: (e.y.max + e.y.min) / 2
          }
        }, PolynomialBezier.prototype.intersections = function(e, t, r) {
          void 0 === t && (t = 2), void 0 === r && (r = 7);
          var i = [];
          return intersectsImpl(intersectData(this, 0, 1), intersectData(e, 0, 1), 0, t, i, r), i
        }, PolynomialBezier.shapeSegment = function(e, t) {
          var r = (t + 1) % e.length();
          return new PolynomialBezier(e.v[t], e.o[t], e.i[r], e.v[r], !0)
        }, PolynomialBezier.shapeSegmentInverted = function(e, t) {
          var r = (t + 1) % e.length();
          return new PolynomialBezier(e.v[r], e.i[r], e.o[t], e.v[t], !0)
        }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(e, t.s, 0, null, this), this.frequency = PropertyFactory.getProp(e, t.r, 0, null, this), this.pointsType = PropertyFactory.getProp(e, t.pt, 0, null, this), this._isAnimated = 0 !== this.amplitude.effectsSequence.length || 0 !== this.frequency.effectsSequence.length || 0 !== this.pointsType.effectsSequence.length
        }, ZigZagModifier.prototype.processPath = function(e, t, r, i) {
          var n = e._length,
            a = shapePool.newElement();
          if (a.c = e.c, e.c || (n -= 1), 0 === n) return a;
          var s = -1,
            o = PolynomialBezier.shapeSegment(e, 0);
          zigZagCorner(a, e, 0, t, r, i, s);
          for (var l = 0; l < n; l += 1) s = zigZagSegment(a, o, t, r, i, -s), o = l !== n - 1 || e.c ? PolynomialBezier.shapeSegment(e, (l + 1) % n) : null, zigZagCorner(a, e, l + 1, t, r, i, s);
          return a
        }, ZigZagModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s, o = this.shapes.length,
            l = this.amplitude.v,
            h = Math.max(0, Math.round(this.frequency.v)),
            c = this.pointsType.v;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l, h, c));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(e, t) {
          this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(e, t.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(e, t.ml, 0, null, this), this.lineJoin = t.lj, this._isAnimated = 0 !== this.amount.effectsSequence.length
        }, OffsetPathModifier.prototype.processPath = function(e, t, r, i) {
          var n = shapePool.newElement();
          n.c = e.c;
          var a, s, o, l = e.length();
          e.c || (l -= 1);
          var h = [];
          for (a = 0; a < l; a += 1) o = PolynomialBezier.shapeSegment(e, a), h.push(offsetSegmentSplit(o, t));
          if (!e.c)
            for (a = l - 1; a >= 0; a -= 1) o = PolynomialBezier.shapeSegmentInverted(e, a), h.push(offsetSegmentSplit(o, t));
          h = pruneIntersections(h);
          var c = null,
            p = null;
          for (a = 0; a < h.length; a += 1) {
            var u = h[a];
            for (p && (c = joinLines(n, p, u[0], r, i)), p = u[u.length - 1], s = 0; s < u.length; s += 1) o = u[s], c && pointEqual(o.points[0], c) ? n.setXYAt(o.points[1][0], o.points[1][1], "o", n.length() - 1) : n.setTripleAt(o.points[0][0], o.points[0][1], o.points[1][0], o.points[1][1], o.points[0][0], o.points[0][1], n.length()), n.setTripleAt(o.points[3][0], o.points[3][1], o.points[3][0], o.points[3][1], o.points[2][0], o.points[2][1], n.length()), c = o.points[3]
          }
          return h.length && joinLines(n, p, h[0][0], r, i), n
        }, OffsetPathModifier.prototype.processShapes = function(e) {
          var t, r, i, n, a, s, o = this.shapes.length,
            l = this.amount.v,
            h = this.miterLimit.v,
            c = this.lineJoin;
          if (0 !== l)
            for (r = 0; r < o; r += 1) {
              if (s = (a = this.shapes[r]).localShapeCollection, a.shape._mdf || this._mdf || e)
                for (s.releaseShapes(), a.shape._mdf = !0, t = a.shape.paths.shapes, n = a.shape.paths._length, i = 0; i < n; i += 1) s.addShape(this.processPath(t[i], l, c, h));
              a.shape.paths = a.localShapeCollection
            }
          this.dynamicProperties.length || (this._mdf = !1)
        };
        var FontManager = function() {
          var e = {
              w: 0,
              size: 0,
              shapes: [],
              data: {
                shapes: []
              }
            },
            t = [];
          t = t.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
          var r = 127988,
            i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];

          function n(e, t) {
            var r = createTag("span");
            r.setAttribute("aria-hidden", !0), r.style.fontFamily = t;
            var i = createTag("span");
            i.innerText = "giItT1WQy@!-/#", r.style.position = "absolute", r.style.left = "-10000px", r.style.top = "-10000px", r.style.fontSize = "300px", r.style.fontVariant = "normal", r.style.fontStyle = "normal", r.style.fontWeight = "normal", r.style.letterSpacing = "0", r.appendChild(i), document.body.appendChild(r);
            var n = i.offsetWidth;
            return i.style.fontFamily = function(e) {
              var t, r = e.split(","),
                i = r.length,
                n = [];
              for (t = 0; t < i; t += 1) "sans-serif" !== r[t] && "monospace" !== r[t] && n.push(r[t]);
              return n.join(",")
            }(e) + ", " + t, {
              node: i,
              w: n,
              parent: r
            }
          }

          function a(e, t) {
            var r, i = document.body && t ? "svg" : "canvas",
              n = getFontProperties(e);
            if ("svg" === i) {
              var a = createNS("text");
              a.style.fontSize = "100px", a.setAttribute("font-family", e.fFamily), a.setAttribute("font-style", n.style), a.setAttribute("font-weight", n.weight), a.textContent = "1", e.fClass ? (a.style.fontFamily = "inherit", a.setAttribute("class", e.fClass)) : a.style.fontFamily = e.fFamily, t.appendChild(a), r = a
            } else {
              var s = new OffscreenCanvas(500, 500).getContext("2d");
              s.font = n.style + " " + n.weight + " 100px " + e.fFamily, r = s
            }
            return {
              measureText: function(e) {
                return "svg" === i ? (r.textContent = e, r.getComputedTextLength()) : r.measureText(e).width
              }
            }
          }

          function s(e) {
            var t = 0,
              r = e.charCodeAt(0);
            if (r >= 55296 && r <= 56319) {
              var i = e.charCodeAt(1);
              i >= 56320 && i <= 57343 && (t = 1024 * (r - 55296) + i - 56320 + 65536)
            }
            return t
          }

          function o(e) {
            var t = s(e);
            return t >= 127462 && t <= 127487
          }
          var l = function() {
            this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this)
          };
          l.isModifier = function(e, t) {
            var r = e.toString(16) + t.toString(16);
            return -1 !== i.indexOf(r)
          }, l.isZeroWidthJoiner = function(e) {
            return 8205 === e
          }, l.isFlagEmoji = function(e) {
            return o(e.substr(0, 2)) && o(e.substr(2, 2))
          }, l.isRegionalCode = o, l.isCombinedCharacter = function(e) {
            return -1 !== t.indexOf(e)
          }, l.isRegionalFlag = function(e, t) {
            var i = s(e.substr(t, 2));
            if (i !== r) return !1;
            var n = 0;
            for (t += 2; n < 5;) {
              if ((i = s(e.substr(t, 2))) < 917601 || i > 917626) return !1;
              n += 1, t += 2
            }
            return 917631 === s(e.substr(t, 2))
          }, l.isVariationSelector = function(e) {
            return 65039 === e
          }, l.BLACK_FLAG_CODE_POINT = r;
          var h = {
            addChars: function(e) {
              if (e) {
                var t;
                this.chars || (this.chars = []);
                var r, i, n = e.length,
                  a = this.chars.length;
                for (t = 0; t < n; t += 1) {
                  for (r = 0, i = !1; r < a;) this.chars[r].style === e[t].style && this.chars[r].fFamily === e[t].fFamily && this.chars[r].ch === e[t].ch && (i = !0), r += 1;
                  i || (this.chars.push(e[t]), a += 1)
                }
              }
            },
            addFonts: function(e, t) {
              if (e) {
                if (this.chars) return this.isLoaded = !0, void(this.fonts = e.list);
                if (!document.body) return this.isLoaded = !0, e.list.forEach((function(e) {
                  e.helper = a(e), e.cache = {}
                })), void(this.fonts = e.list);
                var r, i = e.list,
                  s = i.length,
                  o = s;
                for (r = 0; r < s; r += 1) {
                  var l, h, c = !0;
                  if (i[r].loaded = !1, i[r].monoCase = n(i[r].fFamily, "monospace"), i[r].sansCase = n(i[r].fFamily, "sans-serif"), i[r].fPath) {
                    if ("p" === i[r].fOrigin || 3 === i[r].origin) {
                      if ((l = document.querySelectorAll('style[f-forigin="p"][f-family="' + i[r].fFamily + '"], style[f-origin="3"][f-family="' + i[r].fFamily + '"]')).length > 0 && (c = !1), c) {
                        var p = createTag("style");
                        p.setAttribute("f-forigin", i[r].fOrigin), p.setAttribute("f-origin", i[r].origin), p.setAttribute("f-family", i[r].fFamily), p.type = "text/css", p.innerText = "@font-face {font-family: " + i[r].fFamily + "; font-style: normal; src: url('" + i[r].fPath + "');}", t.appendChild(p)
                      }
                    } else if ("g" === i[r].fOrigin || 1 === i[r].origin) {
                      for (l = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), h = 0; h < l.length; h += 1) - 1 !== l[h].href.indexOf(i[r].fPath) && (c = !1);
                      if (c) {
                        var u = createTag("link");
                        u.setAttribute("f-forigin", i[r].fOrigin), u.setAttribute("f-origin", i[r].origin), u.type = "text/css", u.rel = "stylesheet", u.href = i[r].fPath, document.body.appendChild(u)
                      }
                    } else if ("t" === i[r].fOrigin || 2 === i[r].origin) {
                      for (l = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), h = 0; h < l.length; h += 1) i[r].fPath === l[h].src && (c = !1);
                      if (c) {
                        var d = createTag("link");
                        d.setAttribute("f-forigin", i[r].fOrigin), d.setAttribute("f-origin", i[r].origin), d.setAttribute("rel", "stylesheet"), d.setAttribute("href", i[r].fPath), t.appendChild(d)
                      }
                    }
                  } else i[r].loaded = !0, o -= 1;
                  i[r].helper = a(i[r], t), i[r].cache = {}, this.fonts.push(i[r])
                }
                0 === o ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100)
              } else this.isLoaded = !0
            },
            getCharData: function(t, r, i) {
              for (var n = 0, a = this.chars.length; n < a;) {
                if (this.chars[n].ch === t && this.chars[n].style === r && this.chars[n].fFamily === i) return this.chars[n];
                n += 1
              }
              return ("string" == typeof t && 13 !== t.charCodeAt(0) || !t) && console && console.warn && !this._warned && (this._warned = !0, console.warn("Missing character from exported characters list: ", t, r, i)), e
            },
            getFontByName: function(e) {
              for (var t = 0, r = this.fonts.length; t < r;) {
                if (this.fonts[t].fName === e) return this.fonts[t];
                t += 1
              }
              return this.fonts[0]
            },
            measureText: function(e, t, r) {
              var i = this.getFontByName(t),
                n = e;
              if (!i.cache[n]) {
                var a = i.helper;
                if (" " === e) {
                  var s = a.measureText("|" + e + "|"),
                    o = a.measureText("||");
                  i.cache[n] = (s - o) / 100
                } else i.cache[n] = a.measureText(e) / 100
              }
              return i.cache[n] * r
            },
            checkLoadedFonts: function() {
              var e, t, r, i = this.fonts.length,
                n = i;
              for (e = 0; e < i; e += 1) this.fonts[e].loaded ? n -= 1 : "n" === this.fonts[e].fOrigin || 0 === this.fonts[e].origin ? this.fonts[e].loaded = !0 : (t = this.fonts[e].monoCase.node, r = this.fonts[e].monoCase.w, t.offsetWidth !== r ? (n -= 1, this.fonts[e].loaded = !0) : (t = this.fonts[e].sansCase.node, r = this.fonts[e].sansCase.w, t.offsetWidth !== r && (n -= 1, this.fonts[e].loaded = !0)), this.fonts[e].loaded && (this.fonts[e].sansCase.parent.parentNode.removeChild(this.fonts[e].sansCase.parent), this.fonts[e].monoCase.parent.parentNode.removeChild(this.fonts[e].monoCase.parent)));
              0 !== n && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10)
            },
            setIsLoaded: function() {
              this.isLoaded = !0
            }
          };
          return l.prototype = h, l
        }();

        function SlotManager(e) {
          this.animationData = e
        }

        function slotFactory(e) {
          return new SlotManager(e)
        }

        function RenderableElement() {}
        SlotManager.prototype.getProp = function(e) {
          return this.animationData.slots && this.animationData.slots[e.sid] ? Object.assign(e, this.animationData.slots[e.sid].p) : e
        }, RenderableElement.prototype = {
          initRenderable: function() {
            this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = []
          },
          addRenderableComponent: function(e) {
            -1 === this.renderableComponents.indexOf(e) && this.renderableComponents.push(e)
          },
          removeRenderableComponent: function(e) {
            -1 !== this.renderableComponents.indexOf(e) && this.renderableComponents.splice(this.renderableComponents.indexOf(e), 1)
          },
          prepareRenderableFrame: function(e) {
            this.checkLayerLimits(e)
          },
          checkTransparency: function() {
            this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show())
          },
          checkLayerLimits: function(e) {
            this.data.ip - this.data.st <= e && this.data.op - this.data.st > e ? !0 !== this.isInRange && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : !1 !== this.isInRange && (this.globalData._mdf = !0, this.isInRange = !1, this.hide())
          },
          renderRenderable: function() {
            var e, t = this.renderableComponents.length;
            for (e = 0; e < t; e += 1) this.renderableComponents[e].renderFrame(this._isFirstFrame)
          },
          sourceRectAtTime: function() {
            return {
              top: 0,
              left: 0,
              width: 100,
              height: 100
            }
          },
          getLayerSize: function() {
            return 5 === this.data.ty ? {
              w: this.data.textData.width,
              h: this.data.textData.height
            } : {
              w: this.data.width,
              h: this.data.height
            }
          }
        };
        var getBlendMode = (blendModeEnums = {
            0: "source-over",
            1: "multiply",
            2: "screen",
            3: "overlay",
            4: "darken",
            5: "lighten",
            6: "color-dodge",
            7: "color-burn",
            8: "hard-light",
            9: "soft-light",
            10: "difference",
            11: "exclusion",
            12: "hue",
            13: "saturation",
            14: "color",
            15: "luminosity"
          }, function(e) {
            return blendModeEnums[e] || ""
          }),
          blendModeEnums;

        function SliderEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function AngleEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function ColorEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
        }

        function PointEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 1, 0, r)
        }

        function LayerIndexEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function MaskIndexEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function CheckboxEffect(e, t, r) {
          this.p = PropertyFactory.getProp(t, e.v, 0, 0, r)
        }

        function NoValueEffect() {
          this.p = {}
        }

        function EffectsManager(e, t) {
          var r, i = e.ef || [];
          this.effectElements = [];
          var n, a = i.length;
          for (r = 0; r < a; r += 1) n = new GroupEffect(i[r], t), this.effectElements.push(n)
        }

        function GroupEffect(e, t) {
          this.init(e, t)
        }

        function BaseElement() {}

        function FrameElement() {}

        function FootageElement(e, t, r) {
          this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.footageData = t.imageLoader.getAsset(this.assetData), this.initBaseData(e, t, r)
        }

        function AudioElement(e, t, r) {
          this.initFrame(), this.initRenderable(), this.assetData = t.getAssetData(e.refId), this.initBaseData(e, t, r), this._isPlaying = !1, this._canPlay = !1;
          var i = this.globalData.getAssetsPath(this.assetData);
          this.audio = this.globalData.audioController.createAudio(i), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }, this.lv = PropertyFactory.getProp(this, e.au && e.au.lv ? e.au.lv : {
            k: [100]
          }, 1, .01, this)
        }

        function BaseRenderer() {}
        extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(e, t) {
          var r;
          this.data = e, this.effectElements = [], this.initDynamicPropertyContainer(t);
          var i, n = this.data.ef.length,
            a = this.data.ef;
          for (r = 0; r < n; r += 1) {
            switch (i = null, a[r].ty) {
              case 0:
                i = new SliderEffect(a[r], t, this);
                break;
              case 1:
                i = new AngleEffect(a[r], t, this);
                break;
              case 2:
                i = new ColorEffect(a[r], t, this);
                break;
              case 3:
                i = new PointEffect(a[r], t, this);
                break;
              case 4:
              case 7:
                i = new CheckboxEffect(a[r], t, this);
                break;
              case 10:
                i = new LayerIndexEffect(a[r], t, this);
                break;
              case 11:
                i = new MaskIndexEffect(a[r], t, this);
                break;
              case 5:
                i = new EffectsManager(a[r], t, this);
                break;
              default:
                i = new NoValueEffect(a[r], t, this)
            }
            i && this.effectElements.push(i)
          }
        }, BaseElement.prototype = {
          checkMasks: function() {
            if (!this.data.hasMask) return !1;
            for (var e = 0, t = this.data.masksProperties.length; e < t;) {
              if ("n" !== this.data.masksProperties[e].mode && !1 !== this.data.masksProperties[e].cl) return !0;
              e += 1
            }
            return !1
          },
          initExpressions: function() {
            var e = getExpressionInterfaces();
            if (e) {
              var t = e("layer"),
                r = e("effects"),
                i = e("shape"),
                n = e("text"),
                a = e("comp");
              this.layerInterface = t(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
              var s = r.createEffectsInterface(this, this.layerInterface);
              this.layerInterface.registerEffectsInterface(s), 0 === this.data.ty || this.data.xt ? this.compInterface = a(this) : 4 === this.data.ty ? (this.layerInterface.shapeInterface = i(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : 5 === this.data.ty && (this.layerInterface.textInterface = n(this), this.layerInterface.text = this.layerInterface.textInterface)
            }
          },
          setBlendMode: function() {
            var e = getBlendMode(this.data.bm);
            (this.baseElement || this.layerElement).style["mix-blend-mode"] = e
          },
          initBaseData: function(e, t, r) {
            this.globalData = t, this.comp = r, this.data = e, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties)
          },
          getType: function() {
            return this.type
          },
          sourceRectAtTime: function() {}
        }, FrameElement.prototype = {
          initFrame: function() {
            this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1
          },
          prepareProperties: function(e, t) {
            var r, i = this.dynamicProperties.length;
            for (r = 0; r < i; r += 1)(t || this._isParent && "transform" === this.dynamicProperties[r].propType) && (this.dynamicProperties[r].getValue(), this.dynamicProperties[r]._mdf && (this.globalData._mdf = !0, this._mdf = !0))
          },
          addDynamicProperty: function(e) {
            -1 === this.dynamicProperties.indexOf(e) && this.dynamicProperties.push(e)
          }
        }, FootageElement.prototype.prepareFrame = function() {}, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
          return null
        }, FootageElement.prototype.renderFrame = function() {}, FootageElement.prototype.destroy = function() {}, FootageElement.prototype.initExpressions = function() {
          var e = getExpressionInterfaces();
          if (e) {
            var t = e("footage");
            this.layerInterface = t(this)
          }
        }, FootageElement.prototype.getFootageData = function() {
          return this.footageData
        }, AudioElement.prototype.prepareFrame = function(e) {
          if (this.prepareRenderableFrame(e, !0), this.prepareProperties(e, !0), this.tm._placeholder) this._currentTime = e / this.data.sr;
          else {
            var t = this.tm.v;
            this._currentTime = t
          }
          this._volume = this.lv.v[0];
          var r = this._volume * this._volumeMultiplier;
          this._previousVolume !== r && (this._previousVolume = r, this.audio.volume(r))
        }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
          this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > .1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0))
        }, AudioElement.prototype.show = function() {}, AudioElement.prototype.hide = function() {
          this.audio.pause(), this._isPlaying = !1
        }, AudioElement.prototype.pause = function() {
          this.audio.pause(), this._isPlaying = !1, this._canPlay = !1
        }, AudioElement.prototype.resume = function() {
          this._canPlay = !0
        }, AudioElement.prototype.setRate = function(e) {
          this.audio.rate(e)
        }, AudioElement.prototype.volume = function(e) {
          this._volumeMultiplier = e, this._previousVolume = e * this._volume, this.audio.volume(this._previousVolume)
        }, AudioElement.prototype.getBaseElement = function() {
          return null
        }, AudioElement.prototype.destroy = function() {}, AudioElement.prototype.sourceRectAtTime = function() {}, AudioElement.prototype.initExpressions = function() {}, BaseRenderer.prototype.checkLayers = function(e) {
          var t, r, i = this.layers.length;
          for (this.completeLayers = !0, t = i - 1; t >= 0; t -= 1) this.elements[t] || (r = this.layers[t]).ip - r.st <= e - this.layers[t].st && r.op - r.st > e - this.layers[t].st && this.buildItem(t), this.completeLayers = !!this.elements[t] && this.completeLayers;
          this.checkPendingElements()
        }, BaseRenderer.prototype.createItem = function(e) {
          switch (e.ty) {
            case 2:
              return this.createImage(e);
            case 0:
              return this.createComp(e);
            case 1:
              return this.createSolid(e);
            case 3:
            default:
              return this.createNull(e);
            case 4:
              return this.createShape(e);
            case 5:
              return this.createText(e);
            case 6:
              return this.createAudio(e);
            case 13:
              return this.createCamera(e);
            case 15:
              return this.createFootage(e)
          }
        }, BaseRenderer.prototype.createCamera = function() {
          throw new Error("You're using a 3d camera. Try the html renderer.")
        }, BaseRenderer.prototype.createAudio = function(e) {
          return new AudioElement(e, this.globalData, this)
        }, BaseRenderer.prototype.createFootage = function(e) {
          return new FootageElement(e, this.globalData, this)
        }, BaseRenderer.prototype.buildAllItems = function() {
          var e, t = this.layers.length;
          for (e = 0; e < t; e += 1) this.buildItem(e);
          this.checkPendingElements()
        }, BaseRenderer.prototype.includeLayers = function(e) {
          var t;
          this.completeLayers = !1;
          var r, i = e.length,
            n = this.layers.length;
          for (t = 0; t < i; t += 1)
            for (r = 0; r < n;) {
              if (this.layers[r].id === e[t].id) {
                this.layers[r] = e[t];
                break
              }
              r += 1
            }
        }, BaseRenderer.prototype.setProjectInterface = function(e) {
          this.globalData.projectInterface = e
        }, BaseRenderer.prototype.initItems = function() {
          this.globalData.progressiveLoad || this.buildAllItems()
        }, BaseRenderer.prototype.buildElementParenting = function(e, t, r) {
          for (var i = this.elements, n = this.layers, a = 0, s = n.length; a < s;) n[a].ind == t && (i[a] && !0 !== i[a] ? (r.push(i[a]), i[a].setAsParent(), void 0 !== n[a].parent ? this.buildElementParenting(e, n[a].parent, r) : e.setHierarchy(r)) : (this.buildItem(a), this.addPendingElement(e))), a += 1
        }, BaseRenderer.prototype.addPendingElement = function(e) {
          this.pendingElements.push(e)
        }, BaseRenderer.prototype.searchExtraCompositions = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var i = this.createComp(e[t]);
              i.initExpressions(), this.globalData.projectInterface.registerComposition(i)
            }
        }, BaseRenderer.prototype.getElementById = function(e) {
          var t, r = this.elements.length;
          for (t = 0; t < r; t += 1)
            if (this.elements[t].data.ind === e) return this.elements[t];
          return null
        }, BaseRenderer.prototype.getElementByPath = function(e) {
          var t, r = e.shift();
          if ("number" == typeof r) t = this.elements[r];
          else {
            var i, n = this.elements.length;
            for (i = 0; i < n; i += 1)
              if (this.elements[i].data.nm === r) {
                t = this.elements[i];
                break
              }
          }
          return 0 === e.length ? t : t.getElementByPath(e)
        }, BaseRenderer.prototype.setupGlobalData = function(e, t) {
          this.globalData.fontManager = new FontManager, this.globalData.slotManager = slotFactory(e), this.globalData.fontManager.addChars(e.chars), this.globalData.fontManager.addFonts(e.fonts, t), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = e.fr, this.globalData.nm = e.nm, this.globalData.compSize = {
            w: e.w,
            h: e.h
          }
        };
        var effectTypes = {
          TRANSFORM_EFFECT: "transformEFfect"
        };

        function TransformElement() {}

        function MaskElement(e, t, r) {
          this.data = e, this.element = t, this.globalData = r, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
          var i, n, a = this.globalData.defs,
            s = this.masksProperties ? this.masksProperties.length : 0;
          this.viewData = createSizedArray(s), this.solidPath = "";
          var o, l, h, c, p, u, d = this.masksProperties,
            f = 0,
            m = [],
            g = createElementID(),
            v = "clipPath",
            y = "clip-path";
          for (i = 0; i < s; i += 1)
            if (("a" !== d[i].mode && "n" !== d[i].mode || d[i].inv || 100 !== d[i].o.k || d[i].o.x) && (v = "mask", y = "mask"), "s" !== d[i].mode && "i" !== d[i].mode || 0 !== f ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), m.push(h)), n = createNS("path"), "n" === d[i].mode) this.viewData[i] = {
              op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
              prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
              elem: n,
              lastPath: ""
            }, a.appendChild(n);
            else {
              var b;
              if (f += 1, n.setAttribute("fill", "s" === d[i].mode ? "#000000" : "#ffffff"), n.setAttribute("clip-rule", "nonzero"), 0 !== d[i].x.k ? (v = "mask", y = "mask", u = PropertyFactory.getProp(this.element, d[i].x, 0, null, this.element), b = createElementID(), (c = createNS("filter")).setAttribute("id", b), (p = createNS("feMorphology")).setAttribute("operator", "erode"), p.setAttribute("in", "SourceGraphic"), p.setAttribute("radius", "0"), c.appendChild(p), a.appendChild(c), n.setAttribute("stroke", "s" === d[i].mode ? "#000000" : "#ffffff")) : (p = null, u = null), this.storedData[i] = {
                  elem: n,
                  x: u,
                  expan: p,
                  lastPath: "",
                  lastOperator: "",
                  filterId: b,
                  lastRadius: 0
                }, "i" === d[i].mode) {
                l = m.length;
                var S = createNS("g");
                for (o = 0; o < l; o += 1) S.appendChild(m[o]);
                var x = createNS("mask");
                x.setAttribute("mask-type", "alpha"), x.setAttribute("id", g + "_" + f), x.appendChild(n), a.appendChild(x), S.setAttribute("mask", "url(" + getLocationHref() + "#" + g + "_" + f + ")"), m.length = 0, m.push(S)
              } else m.push(n);
              d[i].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[i] = {
                elem: n,
                lastPath: "",
                op: PropertyFactory.getProp(this.element, d[i].o, 0, .01, this.element),
                prop: ShapePropertyFactory.getShapeProp(this.element, d[i], 3),
                invRect: h
              }, this.viewData[i].prop.k || this.drawPath(d[i], this.viewData[i].prop.v, this.viewData[i])
            } for (this.maskElement = createNS(v), s = m.length, i = 0; i < s; i += 1) this.maskElement.appendChild(m[i]);
          f > 0 && (this.maskElement.setAttribute("id", g), this.element.maskedElement.setAttribute(y, "url(" + getLocationHref() + "#" + g + ")"), a.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this)
        }
        TransformElement.prototype = {
          initTransform: function() {
            var e = new Matrix;
            this.finalTransform = {
              mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : {
                o: 0
              },
              _matMdf: !1,
              _localMatMdf: !1,
              _opMdf: !1,
              mat: e,
              localMat: e,
              localOpacity: 1
            }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty
          },
          renderTransform: function() {
            if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
              var e, t = this.finalTransform.mat,
                r = 0,
                i = this.hierarchy.length;
              if (!this.finalTransform._matMdf)
                for (; r < i;) {
                  if (this.hierarchy[r].finalTransform.mProp._mdf) {
                    this.finalTransform._matMdf = !0;
                    break
                  }
                  r += 1
                }
              if (this.finalTransform._matMdf)
                for (e = this.finalTransform.mProp.v.props, t.cloneFromProps(e), r = 0; r < i; r += 1) t.multiply(this.hierarchy[r].finalTransform.mProp.v)
            }
            this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v)
          },
          renderLocalTransform: function() {
            if (this.localTransforms) {
              var e = 0,
                t = this.localTransforms.length;
              if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf)
                for (; e < t;) this.localTransforms[e]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[e]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), e += 1;
              if (this.finalTransform._localMatMdf) {
                var r = this.finalTransform.localMat;
                for (this.localTransforms[0].matrix.clone(r), e = 1; e < t; e += 1) {
                  var i = this.localTransforms[e].matrix;
                  r.multiply(i)
                }
                r.multiply(this.finalTransform.mat)
              }
              if (this.finalTransform._opMdf) {
                var n = this.finalTransform.localOpacity;
                for (e = 0; e < t; e += 1) n *= .01 * this.localTransforms[e].opacity;
                this.finalTransform.localOpacity = n
              }
            }
          },
          searchEffectTransforms: function() {
            if (this.renderableEffectsManager) {
              var e = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
              if (e.length) {
                this.localTransforms = [], this.finalTransform.localMat = new Matrix;
                var t = 0,
                  r = e.length;
                for (t = 0; t < r; t += 1) this.localTransforms.push(e[t])
              }
            }
          },
          globalToLocal: function(e) {
            var t = [];
            t.push(this.finalTransform);
            for (var r, i = !0, n = this.comp; i;) n.finalTransform ? (n.data.hasMask && t.splice(0, 0, n.finalTransform), n = n.comp) : i = !1;
            var a, s = t.length;
            for (r = 0; r < s; r += 1) a = t[r].mat.applyToPointArray(0, 0, 0), e = [e[0] - a[0], e[1] - a[1], 0];
            return e
          },
          mHelper: new Matrix
        }, MaskElement.prototype.getMaskProperty = function(e) {
          return this.viewData[e].prop
        }, MaskElement.prototype.renderFrame = function(e) {
          var t, r = this.element.finalTransform.mat,
            i = this.masksProperties.length;
          for (t = 0; t < i; t += 1)
            if ((this.viewData[t].prop._mdf || e) && this.drawPath(this.masksProperties[t], this.viewData[t].prop.v, this.viewData[t]), (this.viewData[t].op._mdf || e) && this.viewData[t].elem.setAttribute("fill-opacity", this.viewData[t].op.v), "n" !== this.masksProperties[t].mode && (this.viewData[t].invRect && (this.element.finalTransform.mProp._mdf || e) && this.viewData[t].invRect.setAttribute("transform", r.getInverseMatrix().to2dCSS()), this.storedData[t].x && (this.storedData[t].x._mdf || e))) {
              var n = this.storedData[t].expan;
              this.storedData[t].x.v < 0 ? ("erode" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "erode", this.storedData[t].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[t].filterId + ")")), n.setAttribute("radius", -this.storedData[t].x.v)) : ("dilate" !== this.storedData[t].lastOperator && (this.storedData[t].lastOperator = "dilate", this.storedData[t].elem.setAttribute("filter", null)), this.storedData[t].elem.setAttribute("stroke-width", 2 * this.storedData[t].x.v))
            }
        }, MaskElement.prototype.getMaskelement = function() {
          return this.maskElement
        }, MaskElement.prototype.createLayerSolidPath = function() {
          var e = "M0,0 ";
          return e += " h" + this.globalData.compSize.w, e += " v" + this.globalData.compSize.h, (e += " h-" + this.globalData.compSize.w) + " v-" + this.globalData.compSize.h + " "
        }, MaskElement.prototype.drawPath = function(e, t, r) {
          var i, n, a = " M" + t.v[0][0] + "," + t.v[0][1];
          for (n = t._length, i = 1; i < n; i += 1) a += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[i][0] + "," + t.i[i][1] + " " + t.v[i][0] + "," + t.v[i][1];
          if (t.c && n > 1 && (a += " C" + t.o[i - 1][0] + "," + t.o[i - 1][1] + " " + t.i[0][0] + "," + t.i[0][1] + " " + t.v[0][0] + "," + t.v[0][1]), r.lastPath !== a) {
            var s = "";
            r.elem && (t.c && (s = e.inv ? this.solidPath + a : a), r.elem.setAttribute("d", s)), r.lastPath = a
          }
        }, MaskElement.prototype.destroy = function() {
          this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null
        };
        var filtersFactory = {
            createFilter: function(e, t) {
              var r = createNS("filter");
              return r.setAttribute("id", e), !0 !== t && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r
            },
            createAlphaToLuminanceFilter: function() {
              var e = createNS("feColorMatrix");
              return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e
            }
          },
          featureSupport = function() {
            var e = {
              maskType: !0,
              svgLumaHidden: !0,
              offscreenCanvas: "undefined" != typeof OffscreenCanvas
            };
            return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (e.maskType = !1), /firefox/i.test(navigator.userAgent) && (e.svgLumaHidden = !1), e
          }(),
          registeredEffects$1 = {},
          idPrefix = "filter_result_";

        function SVGEffects(e) {
          var t, r, i = "SourceGraphic",
            n = e.data.ef ? e.data.ef.length : 0,
            a = createElementID(),
            s = filtersFactory.createFilter(a, !0),
            o = 0;
          for (this.filters = [], t = 0; t < n; t += 1) {
            r = null;
            var l = e.data.ef[t].ty;
            registeredEffects$1[l] && (r = new(0, registeredEffects$1[l].effect)(s, e.effectsManager.effectElements[t], e, idPrefix + o, i), i = idPrefix + o, registeredEffects$1[l].countsAsEffect && (o += 1)), r && this.filters.push(r)
          }
          o && (e.globalData.defs.appendChild(s), e.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + a + ")")), this.filters.length && e.addRenderableComponent(this)
        }

        function registerEffect$1(e, t, r) {
          registeredEffects$1[e] = {
            effect: t,
            countsAsEffect: r
          }
        }

        function SVGBaseElement() {}

        function HierarchyElement() {}

        function RenderableDOMElement() {}

        function IImageElement(e, t, r) {
          this.assetData = t.getAssetData(e.refId), this.assetData && this.assetData.sid && (this.assetData = t.slotManager.getProp(this.assetData)), this.initElement(e, t, r), this.sourceRect = {
            top: 0,
            left: 0,
            width: this.assetData.w,
            height: this.assetData.h
          }
        }

        function ProcessedElement(e, t) {
          this.elem = e, this.pos = t
        }

        function IShapeElement() {}
        SVGEffects.prototype.renderFrame = function(e) {
          var t, r = this.filters.length;
          for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
        }, SVGEffects.prototype.getEffects = function(e) {
          var t, r = this.filters.length,
            i = [];
          for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
          return i
        }, SVGBaseElement.prototype = {
          initRendererElement: function() {
            this.layerElement = createNS("g")
          },
          createContainerElements: function() {
            this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
            var e = null;
            if (this.data.td) {
              this.matteMasks = {};
              var t = createNS("g");
              t.setAttribute("id", this.layerId), t.appendChild(this.layerElement), e = t, this.globalData.defs.appendChild(t)
            } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), e = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
            if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 === this.data.ty && !this.data.hd) {
              var r = createNS("clipPath"),
                i = createNS("path");
              i.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
              var n = createElementID();
              if (r.setAttribute("id", n), r.appendChild(i), this.globalData.defs.appendChild(r), this.checkMasks()) {
                var a = createNS("g");
                a.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), a.appendChild(this.layerElement), this.transformedElement = a, e ? e.appendChild(this.transformedElement) : this.baseElement = this.transformedElement
              } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")")
            }
            0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity)
          },
          destroyBaseElement: function() {
            this.layerElement = null, this.matteElement = null, this.maskManager.destroy()
          },
          getBaseElement: function() {
            return this.data.hd ? null : this.baseElement
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms()
          },
          getMatte: function(e) {
            if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[e]) {
              var t, r, i, n, a = this.layerId + "_" + e;
              if (1 === e || 3 === e) {
                var s = createNS("mask");
                s.setAttribute("id", a), s.setAttribute("mask-type", 3 === e ? "luminance" : "alpha"), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), s.appendChild(i), this.globalData.defs.appendChild(s), featureSupport.maskType || 1 !== e || (s.setAttribute("mask-type", "luminance"), t = createElementID(), r = filtersFactory.createFilter(t), this.globalData.defs.appendChild(r), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (n = createNS("g")).appendChild(i), s.appendChild(n), n.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"))
              } else if (2 === e) {
                var o = createNS("mask");
                o.setAttribute("id", a), o.setAttribute("mask-type", "alpha");
                var l = createNS("g");
                o.appendChild(l), t = createElementID(), r = filtersFactory.createFilter(t);
                var h = createNS("feComponentTransfer");
                h.setAttribute("in", "SourceGraphic"), r.appendChild(h);
                var c = createNS("feFuncA");
                c.setAttribute("type", "table"), c.setAttribute("tableValues", "1.0 0.0"), h.appendChild(c), this.globalData.defs.appendChild(r);
                var p = createNS("rect");
                p.setAttribute("width", this.comp.data.w), p.setAttribute("height", this.comp.data.h), p.setAttribute("x", "0"), p.setAttribute("y", "0"), p.setAttribute("fill", "#ffffff"), p.setAttribute("opacity", "0"), l.setAttribute("filter", "url(" + getLocationHref() + "#" + t + ")"), l.appendChild(p), (i = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(i), featureSupport.maskType || (o.setAttribute("mask-type", "luminance"), r.appendChild(filtersFactory.createAlphaToLuminanceFilter()), n = createNS("g"), l.appendChild(p), n.appendChild(this.layerElement), l.appendChild(n)), this.globalData.defs.appendChild(o)
              }
              this.matteMasks[e] = a
            }
            return this.matteMasks[e]
          },
          setMatte: function(e) {
            this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + e + ")")
          }
        }, HierarchyElement.prototype = {
          initHierarchy: function() {
            this.hierarchy = [], this._isParent = !1, this.checkParenting()
          },
          setHierarchy: function(e) {
            this.hierarchy = e
          },
          setAsParent: function() {
            this._isParent = !0
          },
          checkParenting: function() {
            void 0 !== this.data.parent && this.comp.buildElementParenting(this, this.data.parent, [])
          }
        }, extendPrototype([RenderableElement, createProxyFunction({
          initElement: function(e, t, r) {
            this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide()
          },
          hide: function() {
            this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0)
          },
          show: function() {
            this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          renderInnerContent: function() {},
          prepareFrame: function(e) {
            this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.checkTransparency()
          },
          destroy: function() {
            this.innerElem = null, this.destroyBaseElement()
          }
        })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
          var e = this.globalData.getAssetsPath(this.assetData);
          this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.innerElem)
        }, IImageElement.prototype.sourceRectAtTime = function() {
          return this.sourceRect
        }, IShapeElement.prototype = {
          addShapeToModifiers: function(e) {
            var t, r = this.shapeModifiers.length;
            for (t = 0; t < r; t += 1) this.shapeModifiers[t].addShape(e)
          },
          isShapeInAnimatedModifiers: function(e) {
            for (var t = this.shapeModifiers.length; 0 < t;)
              if (this.shapeModifiers[0].isAnimatedWithShape(e)) return !0;
            return !1
          },
          renderModifiers: function() {
            if (this.shapeModifiers.length) {
              var e, t = this.shapes.length;
              for (e = 0; e < t; e += 1) this.shapes[e].sh.reset();
              for (e = (t = this.shapeModifiers.length) - 1; e >= 0 && !this.shapeModifiers[e].processShapes(this._isFirstFrame); e -= 1);
            }
          },
          searchProcessedElement: function(e) {
            for (var t = this.processedElements, r = 0, i = t.length; r < i;) {
              if (t[r].elem === e) return t[r].pos;
              r += 1
            }
            return 0
          },
          addProcessedElement: function(e, t) {
            for (var r = this.processedElements, i = r.length; i;)
              if (r[i -= 1].elem === e) return void(r[i].pos = t);
            r.push(new ProcessedElement(e, t))
          },
          prepareFrame: function(e) {
            this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
          }
        };
        var lineCapEnum = {
            1: "butt",
            2: "round",
            3: "square"
          },
          lineJoinEnum = {
            1: "miter",
            2: "round",
            3: "bevel"
          };

        function SVGShapeData(e, t, r) {
          this.caches = [], this.styles = [], this.transformers = e, this.lStr = "", this.sh = r, this.lvl = t, this._isAnimated = !!r.k;
          for (var i = 0, n = e.length; i < n;) {
            if (e[i].mProps.dynamicProperties.length) {
              this._isAnimated = !0;
              break
            }
            i += 1
          }
        }

        function SVGStyleData(e, t) {
          this.data = e, this.type = e.ty, this.d = "", this.lvl = t, this._mdf = !1, this.closed = !0 === e.hd, this.pElem = createNS("path"), this.msElem = null
        }

        function DashProperty(e, t, r, i) {
          var n;
          this.elem = e, this.frameId = -1, this.dataProps = createSizedArray(t.length), this.renderer = r, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", t.length ? t.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(i);
          var a, s = t.length || 0;
          for (n = 0; n < s; n += 1) a = PropertyFactory.getProp(e, t[n].v, 0, 0, this), this.k = a.k || this.k, this.dataProps[n] = {
            n: t[n].n,
            p: a
          };
          this.k || this.getValue(!0), this._isAnimated = this.k
        }

        function SVGStrokeStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r, this._isAnimated = !!this._isAnimated
        }

        function SVGFillStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.c = PropertyFactory.getProp(e, t.c, 1, 255, this), this.style = r
        }

        function SVGNoStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.style = r
        }

        function GradientProperty(e, t, r) {
          this.data = t, this.c = createTypedArray("uint8c", 4 * t.p);
          var i = t.k.k[0].s ? t.k.k[0].s.length - 4 * t.p : t.k.k.length - 4 * t.p;
          this.o = createTypedArray("float32", i), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = i, this.initDynamicPropertyContainer(r), this.prop = PropertyFactory.getProp(e, t.k, 1, null, this), this.k = this.prop.k, this.getValue(!0)
        }

        function SVGGradientFillStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.initGradientData(e, t, r)
        }

        function SVGGradientStrokeStyleData(e, t, r) {
          this.initDynamicPropertyContainer(e), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(e, t.w, 0, null, this), this.d = new DashProperty(e, t.d || {}, "svg", this), this.initGradientData(e, t, r), this._isAnimated = !!this._isAnimated
        }

        function ShapeGroupData() {
          this.it = [], this.prevViewData = [], this.gr = createNS("g")
        }

        function SVGTransformData(e, t, r) {
          this.transform = {
            mProps: e,
            op: t,
            container: r
          }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length
        }
        SVGShapeData.prototype.setAsAnimated = function() {
          this._isAnimated = !0
        }, SVGStyleData.prototype.reset = function() {
          this.d = "", this._mdf = !1
        }, DashProperty.prototype.getValue = function(e) {
          if ((this.elem.globalData.frameId !== this.frameId || e) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || e, this._mdf)) {
            var t = 0,
              r = this.dataProps.length;
            for ("svg" === this.renderer && (this.dashStr = ""), t = 0; t < r; t += 1) "o" !== this.dataProps[t].n ? "svg" === this.renderer ? this.dashStr += " " + this.dataProps[t].p.v : this.dashArray[t] = this.dataProps[t].p.v : this.dashoffset[0] = this.dataProps[t].p.v
          }
        }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(e, t) {
          for (var r = 0, i = this.o.length / 2; r < i;) {
            if (Math.abs(e[4 * r] - e[4 * t + 2 * r]) > .01) return !1;
            r += 1
          }
          return !0
        }, GradientProperty.prototype.checkCollapsable = function() {
          if (this.o.length / 2 != this.c.length / 4) return !1;
          if (this.data.k.k[0].s)
            for (var e = 0, t = this.data.k.k.length; e < t;) {
              if (!this.comparePoints(this.data.k.k[e].s, this.data.p)) return !1;
              e += 1
            } else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
          return !0
        }, GradientProperty.prototype.getValue = function(e) {
          if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || e) {
            var t, r, i, n = 4 * this.data.p;
            for (t = 0; t < n; t += 1) r = t % 4 == 0 ? 100 : 255, i = Math.round(this.prop.v[t] * r), this.c[t] !== i && (this.c[t] = i, this._cmdf = !e);
            if (this.o.length)
              for (n = this.prop.v.length, t = 4 * this.data.p; t < n; t += 1) r = t % 2 == 0 ? 100 : 1, i = t % 2 == 0 ? Math.round(100 * this.prop.v[t]) : this.prop.v[t], this.o[t - 4 * this.data.p] !== i && (this.o[t - 4 * this.data.p] = i, this._omdf = !e);
            this._mdf = !e
          }
        }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(e, t, r) {
          this.o = PropertyFactory.getProp(e, t.o, 0, .01, this), this.s = PropertyFactory.getProp(e, t.s, 1, null, this), this.e = PropertyFactory.getProp(e, t.e, 1, null, this), this.h = PropertyFactory.getProp(e, t.h || {
            k: 0
          }, 0, .01, this), this.a = PropertyFactory.getProp(e, t.a || {
            k: 0
          }, 0, degToRads, this), this.g = new GradientProperty(e, t.g, this), this.style = r, this.stops = [], this.setGradientData(r.pElem, t), this.setGradientOpacity(t, r), this._isAnimated = !!this._isAnimated
        }, SVGGradientFillStyleData.prototype.setGradientData = function(e, t) {
          var r = createElementID(),
            i = createNS(1 === t.t ? "linearGradient" : "radialGradient");
          i.setAttribute("id", r), i.setAttribute("spreadMethod", "pad"), i.setAttribute("gradientUnits", "userSpaceOnUse");
          var n, a, s, o = [];
          for (s = 4 * t.g.p, a = 0; a < s; a += 4) n = createNS("stop"), i.appendChild(n), o.push(n);
          e.setAttribute("gf" === t.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + r + ")"), this.gf = i, this.cst = o
        }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(e, t) {
          if (this.g._hasOpacity && !this.g._collapsable) {
            var r, i, n, a = createNS("mask"),
              s = createNS("path");
            a.appendChild(s);
            var o = createElementID(),
              l = createElementID();
            a.setAttribute("id", l);
            var h = createNS(1 === e.t ? "linearGradient" : "radialGradient");
            h.setAttribute("id", o), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), n = e.g.k.k[0].s ? e.g.k.k[0].s.length : e.g.k.k.length;
            var c = this.stops;
            for (i = 4 * e.g.p; i < n; i += 2)(r = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(r), c.push(r);
            s.setAttribute("gf" === e.ty ? "fill" : "stroke", "url(" + getLocationHref() + "#" + o + ")"), "gs" === e.ty && (s.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), s.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), 1 === e.lj && s.setAttribute("stroke-miterlimit", e.ml)), this.of = h, this.ms = a, this.ost = c, this.maskId = l, t.msElem = s
          }
        }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
        var buildShapeString = function(e, t, r, i) {
            if (0 === t) return "";
            var n, a = e.o,
              s = e.i,
              o = e.v,
              l = " M" + i.applyToPointStringified(o[0][0], o[0][1]);
            for (n = 1; n < t; n += 1) l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[n][0], s[n][1]) + " " + i.applyToPointStringified(o[n][0], o[n][1]);
            return r && t && (l += " C" + i.applyToPointStringified(a[n - 1][0], a[n - 1][1]) + " " + i.applyToPointStringified(s[0][0], s[0][1]) + " " + i.applyToPointStringified(o[0][0], o[0][1]), l += "z"), l
          },
          SVGElementsRenderer = function() {
            var e = new Matrix,
              t = new Matrix;

            function r(e, t, r) {
              (r || t.transform.op._mdf) && t.transform.container.setAttribute("opacity", t.transform.op.v), (r || t.transform.mProps._mdf) && t.transform.container.setAttribute("transform", t.transform.mProps.v.to2dCSS())
            }

            function i() {}

            function n(r, i, n) {
              var a, s, o, l, h, c, p, u, d, f, m = i.styles.length,
                g = i.lvl;
              for (c = 0; c < m; c += 1) {
                if (l = i.sh._mdf || n, i.styles[c].lvl < g) {
                  for (u = t.reset(), d = g - i.styles[c].lvl, f = i.transformers.length - 1; !l && d > 0;) l = i.transformers[f].mProps._mdf || l, d -= 1, f -= 1;
                  if (l)
                    for (d = g - i.styles[c].lvl, f = i.transformers.length - 1; d > 0;) u.multiply(i.transformers[f].mProps.v), d -= 1, f -= 1
                } else u = e;
                if (s = (p = i.sh.paths)._length, l) {
                  for (o = "", a = 0; a < s; a += 1)(h = p.shapes[a]) && h._length && (o += buildShapeString(h, h._length, h.c, u));
                  i.caches[c] = o
                } else o = i.caches[c];
                i.styles[c].d += !0 === r.hd ? "" : o, i.styles[c]._mdf = l || i.styles[c]._mdf
              }
            }

            function a(e, t, r) {
              var i = t.style;
              (t.c._mdf || r) && i.pElem.setAttribute("fill", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r) && i.pElem.setAttribute("fill-opacity", t.o.v)
            }

            function s(e, t, r) {
              o(e, t, r), l(0, t, r)
            }

            function o(e, t, r) {
              var i, n, a, s, o, l = t.gf,
                h = t.g._hasOpacity,
                c = t.s.v,
                p = t.e.v;
              if (t.o._mdf || r) {
                var u = "gf" === e.ty ? "fill-opacity" : "stroke-opacity";
                t.style.pElem.setAttribute(u, t.o.v)
              }
              if (t.s._mdf || r) {
                var d = 1 === e.t ? "x1" : "cx",
                  f = "x1" === d ? "y1" : "cy";
                l.setAttribute(d, c[0]), l.setAttribute(f, c[1]), h && !t.g._collapsable && (t.of.setAttribute(d, c[0]), t.of.setAttribute(f, c[1]))
              }
              if (t.g._cmdf || r) {
                i = t.cst;
                var m = t.g.c;
                for (a = i.length, n = 0; n < a; n += 1)(s = i[n]).setAttribute("offset", m[4 * n] + "%"), s.setAttribute("stop-color", "rgb(" + m[4 * n + 1] + "," + m[4 * n + 2] + "," + m[4 * n + 3] + ")")
              }
              if (h && (t.g._omdf || r)) {
                var g = t.g.o;
                for (a = (i = t.g._collapsable ? t.cst : t.ost).length, n = 0; n < a; n += 1) s = i[n], t.g._collapsable || s.setAttribute("offset", g[2 * n] + "%"), s.setAttribute("stop-opacity", g[2 * n + 1])
              }
              if (1 === e.t)(t.e._mdf || r) && (l.setAttribute("x2", p[0]), l.setAttribute("y2", p[1]), h && !t.g._collapsable && (t.of.setAttribute("x2", p[0]), t.of.setAttribute("y2", p[1])));
              else if ((t.s._mdf || t.e._mdf || r) && (o = Math.sqrt(Math.pow(c[0] - p[0], 2) + Math.pow(c[1] - p[1], 2)), l.setAttribute("r", o), h && !t.g._collapsable && t.of.setAttribute("r", o)), t.e._mdf || t.h._mdf || t.a._mdf || r) {
                o || (o = Math.sqrt(Math.pow(c[0] - p[0], 2) + Math.pow(c[1] - p[1], 2)));
                var v = Math.atan2(p[1] - c[1], p[0] - c[0]),
                  y = t.h.v;
                y >= 1 ? y = .99 : y <= -1 && (y = -.99);
                var b = o * y,
                  S = Math.cos(v + t.a.v) * b + c[0],
                  x = Math.sin(v + t.a.v) * b + c[1];
                l.setAttribute("fx", S), l.setAttribute("fy", x), h && !t.g._collapsable && (t.of.setAttribute("fx", S), t.of.setAttribute("fy", x))
              }
            }

            function l(e, t, r) {
              var i = t.style,
                n = t.d;
              n && (n._mdf || r) && n.dashStr && (i.pElem.setAttribute("stroke-dasharray", n.dashStr), i.pElem.setAttribute("stroke-dashoffset", n.dashoffset[0])), t.c && (t.c._mdf || r) && i.pElem.setAttribute("stroke", "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r) && i.pElem.setAttribute("stroke-opacity", t.o.v), (t.w._mdf || r) && (i.pElem.setAttribute("stroke-width", t.w.v), i.msElem && i.msElem.setAttribute("stroke-width", t.w.v))
            }
            return {
              createRenderFunction: function(e) {
                switch (e.ty) {
                  case "fl":
                    return a;
                  case "gf":
                    return o;
                  case "gs":
                    return s;
                  case "st":
                    return l;
                  case "sh":
                  case "el":
                  case "rc":
                  case "sr":
                    return n;
                  case "tr":
                    return r;
                  case "no":
                    return i;
                  default:
                    return null
                }
              }
            }
          }();

        function SVGShapeElement(e, t, r) {
          this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(e, t, r), this.prevViewData = []
        }

        function LetterProps(e, t, r, i, n, a) {
          this.o = e, this.sw = t, this.sc = r, this.fc = i, this.m = n, this.p = a, this._mdf = {
            o: !0,
            sw: !!t,
            sc: !!r,
            fc: !!i,
            m: !0,
            p: !0
          }
        }

        function TextProperty(e, t) {
          this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, t.d && t.d.sid && (t.d = e.globalData.slotManager.getProp(t.d)), this.data = t, this.elem = e, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = {
            ascent: 0,
            boxWidth: this.defaultBoxWidth,
            f: "",
            fStyle: "",
            fWeight: "",
            fc: "",
            j: "",
            justifyOffset: "",
            l: [],
            lh: 0,
            lineWidths: [],
            ls: "",
            of: "",
            s: "",
            sc: "",
            sw: 0,
            t: 0,
            tr: 0,
            sz: 0,
            ps: null,
            fillColorAnim: !1,
            strokeColorAnim: !1,
            strokeWidthAnim: !1,
            yOffset: 0,
            finalSize: 0,
            finalText: [],
            finalLineHeight: 0,
            __complete: !1
          }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData)
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {}, SVGShapeElement.prototype.identityMatrix = new Matrix, SVGShapeElement.prototype.buildExpressionInterface = function() {}, SVGShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes()
        }, SVGShapeElement.prototype.filterUniqueShapes = function() {
          var e, t, r, i, n = this.shapes.length,
            a = this.stylesList.length,
            s = [],
            o = !1;
          for (r = 0; r < a; r += 1) {
            for (i = this.stylesList[r], o = !1, s.length = 0, e = 0; e < n; e += 1) - 1 !== (t = this.shapes[e]).styles.indexOf(i) && (s.push(t), o = t._isAnimated || o);
            s.length > 1 && o && this.setShapesAsAnimated(s)
          }
        }, SVGShapeElement.prototype.setShapesAsAnimated = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) e[t].setAsAnimated()
        }, SVGShapeElement.prototype.createStyleElement = function(e, t) {
          var r, i = new SVGStyleData(e, t),
            n = i.pElem;
          return "st" === e.ty ? r = new SVGStrokeStyleData(this, e, i) : "fl" === e.ty ? r = new SVGFillStyleData(this, e, i) : "gf" === e.ty || "gs" === e.ty ? (r = new("gf" === e.ty ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, e, i), this.globalData.defs.appendChild(r.gf), r.maskId && (this.globalData.defs.appendChild(r.ms), this.globalData.defs.appendChild(r.of), n.setAttribute("mask", "url(" + getLocationHref() + "#" + r.maskId + ")"))) : "no" === e.ty && (r = new SVGNoStyleData(this, e, i)), "st" !== e.ty && "gs" !== e.ty || (n.setAttribute("stroke-linecap", lineCapEnum[e.lc || 2]), n.setAttribute("stroke-linejoin", lineJoinEnum[e.lj || 2]), n.setAttribute("fill-opacity", "0"), 1 === e.lj && n.setAttribute("stroke-miterlimit", e.ml)), 2 === e.r && n.setAttribute("fill-rule", "evenodd"), e.ln && n.setAttribute("id", e.ln), e.cl && n.setAttribute("class", e.cl), e.bm && (n.style["mix-blend-mode"] = getBlendMode(e.bm)), this.stylesList.push(i), this.addToAnimatedContents(e, r), r
        }, SVGShapeElement.prototype.createGroupElement = function(e) {
          var t = new ShapeGroupData;
          return e.ln && t.gr.setAttribute("id", e.ln), e.cl && t.gr.setAttribute("class", e.cl), e.bm && (t.gr.style["mix-blend-mode"] = getBlendMode(e.bm)), t
        }, SVGShapeElement.prototype.createTransformElement = function(e, t) {
          var r = TransformPropertyFactory.getTransformProperty(this, e, this),
            i = new SVGTransformData(r, r.o, t);
          return this.addToAnimatedContents(e, i), i
        }, SVGShapeElement.prototype.createShapeElement = function(e, t, r) {
          var i = 4;
          "rc" === e.ty ? i = 5 : "el" === e.ty ? i = 6 : "sr" === e.ty && (i = 7);
          var n = new SVGShapeData(t, r, ShapePropertyFactory.getShapeProp(this, e, i, this));
          return this.shapes.push(n), this.addShapeToModifiers(n), this.addToAnimatedContents(e, n), n
        }, SVGShapeElement.prototype.addToAnimatedContents = function(e, t) {
          for (var r = 0, i = this.animatedContents.length; r < i;) {
            if (this.animatedContents[r].element === t) return;
            r += 1
          }
          this.animatedContents.push({
            fn: SVGElementsRenderer.createRenderFunction(e),
            element: t,
            data: e
          })
        }, SVGShapeElement.prototype.setElementStyles = function(e) {
          var t, r = e.styles,
            i = this.stylesList.length;
          for (t = 0; t < i; t += 1) this.stylesList[t].closed || r.push(this.stylesList[t])
        }, SVGShapeElement.prototype.reloadShapes = function() {
          var e;
          this._isFirstFrame = !0;
          var t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
          this.renderModifiers()
        }, SVGShapeElement.prototype.searchShapes = function(e, t, r, i, n, a, s) {
          var o, l, h, c, p, u, d = [].concat(a),
            f = e.length - 1,
            m = [],
            g = [];
          for (o = f; o >= 0; o -= 1) {
            if ((u = this.searchProcessedElement(e[o])) ? t[o] = r[u - 1] : e[o]._render = s, "fl" === e[o].ty || "st" === e[o].ty || "gf" === e[o].ty || "gs" === e[o].ty || "no" === e[o].ty) u ? t[o].style.closed = !1 : t[o] = this.createStyleElement(e[o], n), e[o]._render && t[o].style.pElem.parentNode !== i && i.appendChild(t[o].style.pElem), m.push(t[o].style);
            else if ("gr" === e[o].ty) {
              if (u)
                for (h = t[o].it.length, l = 0; l < h; l += 1) t[o].prevViewData[l] = t[o].it[l];
              else t[o] = this.createGroupElement(e[o]);
              this.searchShapes(e[o].it, t[o].it, t[o].prevViewData, t[o].gr, n + 1, d, s), e[o]._render && t[o].gr.parentNode !== i && i.appendChild(t[o].gr)
            } else "tr" === e[o].ty ? (u || (t[o] = this.createTransformElement(e[o], i)), c = t[o].transform, d.push(c)) : "sh" === e[o].ty || "rc" === e[o].ty || "el" === e[o].ty || "sr" === e[o].ty ? (u || (t[o] = this.createShapeElement(e[o], d, n)), this.setElementStyles(t[o])) : "tm" === e[o].ty || "rd" === e[o].ty || "ms" === e[o].ty || "pb" === e[o].ty || "zz" === e[o].ty || "op" === e[o].ty ? (u ? (p = t[o]).closed = !1 : ((p = ShapeModifiers.getModifier(e[o].ty)).init(this, e[o]), t[o] = p, this.shapeModifiers.push(p)), g.push(p)) : "rp" === e[o].ty && (u ? (p = t[o]).closed = !0 : (p = ShapeModifiers.getModifier(e[o].ty), t[o] = p, p.init(this, e, o, t), this.shapeModifiers.push(p), s = !1), g.push(p));
            this.addProcessedElement(e[o], o + 1)
          }
          for (f = m.length, o = 0; o < f; o += 1) m[o].closed = !0;
          for (f = g.length, o = 0; o < f; o += 1) g[o].closed = !0
        }, SVGShapeElement.prototype.renderInnerContent = function() {
          var e;
          this.renderModifiers();
          var t = this.stylesList.length;
          for (e = 0; e < t; e += 1) this.stylesList[e].reset();
          for (this.renderShape(), e = 0; e < t; e += 1)(this.stylesList[e]._mdf || this._isFirstFrame) && (this.stylesList[e].msElem && (this.stylesList[e].msElem.setAttribute("d", this.stylesList[e].d), this.stylesList[e].d = "M0 0" + this.stylesList[e].d), this.stylesList[e].pElem.setAttribute("d", this.stylesList[e].d || "M0 0"))
        }, SVGShapeElement.prototype.renderShape = function() {
          var e, t, r = this.animatedContents.length;
          for (e = 0; e < r; e += 1) t = this.animatedContents[e], (this._isFirstFrame || t.element._isAnimated) && !0 !== t.data && t.fn(t.data, t.element, this._isFirstFrame)
        }, SVGShapeElement.prototype.destroy = function() {
          this.destroyBaseElement(), this.shapesData = null, this.itemsData = null
        }, LetterProps.prototype.update = function(e, t, r, i, n, a) {
          this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
          var s = !1;
          return this.o !== e && (this.o = e, this._mdf.o = !0, s = !0), this.sw !== t && (this.sw = t, this._mdf.sw = !0, s = !0), this.sc !== r && (this.sc = r, this._mdf.sc = !0, s = !0), this.fc !== i && (this.fc = i, this._mdf.fc = !0, s = !0), this.m !== n && (this.m = n, this._mdf.m = !0, s = !0), !a.length || this.p[0] === a[0] && this.p[1] === a[1] && this.p[4] === a[4] && this.p[5] === a[5] && this.p[12] === a[12] && this.p[13] === a[13] || (this.p = a, this._mdf.p = !0, s = !0), s
        }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
          return e
        }, TextProperty.prototype.setCurrentData = function(e) {
          e.__complete || this.completeTextData(e), this.currentData = e, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0
        }, TextProperty.prototype.searchProperty = function() {
          return this.searchKeyframes()
        }, TextProperty.prototype.searchKeyframes = function() {
          return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf
        }, TextProperty.prototype.addEffect = function(e) {
          this.effectsSequence.push(e), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.getValue = function(e) {
          if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || e) {
            this.currentData.t = this.data.d.k[this.keysIndex].s.t;
            var t = this.currentData,
              r = this.keysIndex;
            if (this.lock) this.setCurrentData(this.currentData);
            else {
              var i;
              this.lock = !0, this._mdf = !1;
              var n = this.effectsSequence.length,
                a = e || this.data.d.k[this.keysIndex].s;
              for (i = 0; i < n; i += 1) a = r !== this.keysIndex ? this.effectsSequence[i](a, a.t) : this.effectsSequence[i](this.currentData, a.t);
              t !== a && this.setCurrentData(a), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId
            }
          }
        }, TextProperty.prototype.getKeyframeValue = function() {
          for (var e = this.data.d.k, t = this.elem.comp.renderedFrame, r = 0, i = e.length; r <= i - 1 && !(r === i - 1 || e[r + 1].t > t);) r += 1;
          return this.keysIndex !== r && (this.keysIndex = r), this.data.d.k[this.keysIndex].s
        }, TextProperty.prototype.buildFinalText = function(e) {
          for (var t, r, i = [], n = 0, a = e.length, s = !1, o = !1, l = ""; n < a;) s = o, o = !1, t = e.charCodeAt(n), l = e.charAt(n), FontManager.isCombinedCharacter(t) ? s = !0 : t >= 55296 && t <= 56319 ? FontManager.isRegionalFlag(e, n) ? l = e.substr(n, 14) : (r = e.charCodeAt(n + 1)) >= 56320 && r <= 57343 && (FontManager.isModifier(t, r) ? (l = e.substr(n, 2), s = !0) : l = FontManager.isFlagEmoji(e.substr(n, 4)) ? e.substr(n, 4) : e.substr(n, 2)) : t > 56319 ? (r = e.charCodeAt(n + 1), FontManager.isVariationSelector(t) && (s = !0)) : FontManager.isZeroWidthJoiner(t) && (s = !0, o = !0), s ? (i[i.length - 1] += l, s = !1) : i.push(l), n += l.length;
          return i
        }, TextProperty.prototype.completeTextData = function(e) {
          e.__complete = !0;
          var t, r, i, n, a, s, o, l = this.elem.globalData.fontManager,
            h = this.data,
            c = [],
            p = 0,
            u = h.m.g,
            d = 0,
            f = 0,
            m = 0,
            g = [],
            v = 0,
            y = 0,
            b = l.getFontByName(e.f),
            S = 0,
            x = getFontProperties(b);
          e.fWeight = x.weight, e.fStyle = x.style, e.finalSize = e.s, e.finalText = this.buildFinalText(e.t), r = e.finalText.length, e.finalLineHeight = e.lh;
          var E, w = e.tr / 1e3 * e.finalSize;
          if (e.sz)
            for (var P, T, C = !0, _ = e.sz[0], M = e.sz[1]; C;) {
              P = 0, v = 0, r = (T = this.buildFinalText(e.t)).length, w = e.tr / 1e3 * e.finalSize;
              var A = -1;
              for (t = 0; t < r; t += 1) E = T[t].charCodeAt(0), i = !1, " " === T[t] ? A = t : 13 !== E && 3 !== E || (v = 0, i = !0, P += e.finalLineHeight || 1.2 * e.finalSize), l.chars ? (o = l.getCharData(T[t], b.fStyle, b.fFamily), S = i ? 0 : o.w * e.finalSize / 100) : S = l.measureText(T[t], e.f, e.finalSize), v + S > _ && " " !== T[t] ? (-1 === A ? r += 1 : t = A, P += e.finalLineHeight || 1.2 * e.finalSize, T.splice(t, A === t ? 1 : 0, "\r"), A = -1, v = 0) : (v += S, v += w);
              P += b.ascent * e.finalSize / 100, this.canResize && e.finalSize > this.minimumFontSize && M < P ? (e.finalSize -= 1, e.finalLineHeight = e.finalSize * e.lh / e.s) : (e.finalText = T, r = e.finalText.length, C = !1)
            }
          v = -w, S = 0;
          var k, D = 0;
          for (t = 0; t < r; t += 1)
            if (i = !1, 13 === (E = (k = e.finalText[t]).charCodeAt(0)) || 3 === E ? (D = 0, g.push(v), y = v > y ? v : y, v = -2 * w, n = "", i = !0, m += 1) : n = k, l.chars ? (o = l.getCharData(k, b.fStyle, l.getFontByName(e.f).fFamily), S = i ? 0 : o.w * e.finalSize / 100) : S = l.measureText(n, e.f, e.finalSize), " " === k ? D += S + w : (v += S + w + D, D = 0), c.push({
                l: S,
                an: S,
                add: d,
                n: i,
                anIndexes: [],
                val: n,
                line: m,
                animatorJustifyOffset: 0
              }), 2 == u) {
              if (d += S, "" === n || " " === n || t === r - 1) {
                for ("" !== n && " " !== n || (d -= S); f <= t;) c[f].an = d, c[f].ind = p, c[f].extra = S, f += 1;
                p += 1, d = 0
              }
            } else if (3 == u) {
            if (d += S, "" === n || t === r - 1) {
              for ("" === n && (d -= S); f <= t;) c[f].an = d, c[f].ind = p, c[f].extra = S, f += 1;
              d = 0, p += 1
            }
          } else c[p].ind = p, c[p].extra = 0, p += 1;
          if (e.l = c, y = v > y ? v : y, g.push(v), e.sz) e.boxWidth = e.sz[0], e.justifyOffset = 0;
          else switch (e.boxWidth = y, e.j) {
            case 1:
              e.justifyOffset = -e.boxWidth;
              break;
            case 2:
              e.justifyOffset = -e.boxWidth / 2;
              break;
            default:
              e.justifyOffset = 0
          }
          e.lineWidths = g;
          var I, F, L, O, R = h.a;
          s = R.length;
          var V = [];
          for (a = 0; a < s; a += 1) {
            for ((I = R[a]).a.sc && (e.strokeColorAnim = !0), I.a.sw && (e.strokeWidthAnim = !0), (I.a.fc || I.a.fh || I.a.fs || I.a.fb) && (e.fillColorAnim = !0), O = 0, L = I.s.b, t = 0; t < r; t += 1)(F = c[t]).anIndexes[a] = O, (1 == L && "" !== F.val || 2 == L && "" !== F.val && " " !== F.val || 3 == L && (F.n || " " == F.val || t == r - 1) || 4 == L && (F.n || t == r - 1)) && (1 === I.s.rn && V.push(O), O += 1);
            h.a[a].s.totalChars = O;
            var B, N = -1;
            if (1 === I.s.rn)
              for (t = 0; t < r; t += 1) N != (F = c[t]).anIndexes[a] && (N = F.anIndexes[a], B = V.splice(Math.floor(Math.random() * V.length), 1)[0]), F.anIndexes[a] = B
          }
          e.yOffset = e.finalLineHeight || 1.2 * e.finalSize, e.ls = e.ls || 0, e.ascent = b.ascent * e.finalSize / 100
        }, TextProperty.prototype.updateDocumentData = function(e, t) {
          t = void 0 === t ? this.keysIndex : t;
          var r = this.copyData({}, this.data.d.k[t].s);
          r = this.copyData(r, e), this.data.d.k[t].s = r, this.recalculate(t), this.setCurrentData(r), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.recalculate = function(e) {
          var t = this.data.d.k[e].s;
          t.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(t)
        }, TextProperty.prototype.canResizeFont = function(e) {
          this.canResize = e, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        }, TextProperty.prototype.setMinimumFontSize = function(e) {
          this.minimumFontSize = Math.floor(e) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this)
        };
        var TextSelectorProp = function() {
          var e = Math.max,
            t = Math.min,
            r = Math.floor;

          function i(e, t) {
            this._currentTextLength = -1, this.k = !1, this.data = t, this.elem = e, this.comp = e.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(e), this.s = PropertyFactory.getProp(e, t.s || {
              k: 0
            }, 0, 0, this), this.e = "e" in t ? PropertyFactory.getProp(e, t.e, 0, 0, this) : {
              v: 100
            }, this.o = PropertyFactory.getProp(e, t.o || {
              k: 0
            }, 0, 0, this), this.xe = PropertyFactory.getProp(e, t.xe || {
              k: 0
            }, 0, 0, this), this.ne = PropertyFactory.getProp(e, t.ne || {
              k: 0
            }, 0, 0, this), this.sm = PropertyFactory.getProp(e, t.sm || {
              k: 100
            }, 0, 0, this), this.a = PropertyFactory.getProp(e, t.a, 0, .01, this), this.dynamicProperties.length || this.getValue()
          }
          return i.prototype = {
            getMult: function(i) {
              this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
              var n = 0,
                a = 0,
                s = 1,
                o = 1;
              this.ne.v > 0 ? n = this.ne.v / 100 : a = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : o = 1 + this.xe.v / 100;
              var l = BezierFactory.getBezierEasing(n, a, s, o).get,
                h = 0,
                c = this.finalS,
                p = this.finalE,
                u = this.data.sh;
              if (2 === u) h = l(h = p === c ? i >= p ? 1 : 0 : e(0, t(.5 / (p - c) + (i - c) / (p - c), 1)));
              else if (3 === u) h = l(h = p === c ? i >= p ? 0 : 1 : 1 - e(0, t(.5 / (p - c) + (i - c) / (p - c), 1)));
              else if (4 === u) p === c ? h = 0 : (h = e(0, t(.5 / (p - c) + (i - c) / (p - c), 1))) < .5 ? h *= 2 : h = 1 - 2 * (h - .5), h = l(h);
              else if (5 === u) {
                if (p === c) h = 0;
                else {
                  var d = p - c,
                    f = -d / 2 + (i = t(e(0, i + .5 - c), p - c)),
                    m = d / 2;
                  h = Math.sqrt(1 - f * f / (m * m))
                }
                h = l(h)
              } else 6 === u ? (p === c ? h = 0 : (i = t(e(0, i + .5 - c), p - c), h = (1 + Math.cos(Math.PI + 2 * Math.PI * i / (p - c))) / 2), h = l(h)) : (i >= r(c) && (h = e(0, t(i - c < 0 ? t(p, 1) - (c - i) : p - i, 1))), h = l(h));
              if (100 !== this.sm.v) {
                var g = .01 * this.sm.v;
                0 === g && (g = 1e-8);
                var v = .5 - .5 * g;
                h < v ? h = 0 : (h = (h - v) / g) > 1 && (h = 1)
              }
              return h * this.a.v
            },
            getValue: function(e) {
              this.iterateDynamicProperties(), this._mdf = e || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, e && 2 === this.data.r && (this.e.v = this._currentTextLength);
              var t = 2 === this.data.r ? 1 : 100 / this.data.totalChars,
                r = this.o.v / t,
                i = this.s.v / t + r,
                n = this.e.v / t + r;
              if (i > n) {
                var a = i;
                i = n, n = a
              }
              this.finalS = i, this.finalE = n
            }
          }, extendPrototype([DynamicPropertyContainer], i), {
            getTextSelectorProp: function(e, t, r) {
              return new i(e, t, r)
            }
          }
        }();

        function TextAnimatorDataProperty(e, t, r) {
          var i = {
              propType: !1
            },
            n = PropertyFactory.getProp,
            a = t.a;
          this.a = {
            r: a.r ? n(e, a.r, 0, degToRads, r) : i,
            rx: a.rx ? n(e, a.rx, 0, degToRads, r) : i,
            ry: a.ry ? n(e, a.ry, 0, degToRads, r) : i,
            sk: a.sk ? n(e, a.sk, 0, degToRads, r) : i,
            sa: a.sa ? n(e, a.sa, 0, degToRads, r) : i,
            s: a.s ? n(e, a.s, 1, .01, r) : i,
            a: a.a ? n(e, a.a, 1, 0, r) : i,
            o: a.o ? n(e, a.o, 0, .01, r) : i,
            p: a.p ? n(e, a.p, 1, 0, r) : i,
            sw: a.sw ? n(e, a.sw, 0, 0, r) : i,
            sc: a.sc ? n(e, a.sc, 1, 0, r) : i,
            fc: a.fc ? n(e, a.fc, 1, 0, r) : i,
            fh: a.fh ? n(e, a.fh, 0, 0, r) : i,
            fs: a.fs ? n(e, a.fs, 0, .01, r) : i,
            fb: a.fb ? n(e, a.fb, 0, .01, r) : i,
            t: a.t ? n(e, a.t, 0, 0, r) : i
          }, this.s = TextSelectorProp.getTextSelectorProp(e, t.s, r), this.s.t = t.s.t
        }

        function TextAnimatorProperty(e, t, r) {
          this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = e, this._renderType = t, this._elem = r, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = {
            alignment: {}
          }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(r)
        }

        function ITextElement() {}
        TextAnimatorProperty.prototype.searchProperties = function() {
          var e, t, r = this._textData.a.length,
            i = PropertyFactory.getProp;
          for (e = 0; e < r; e += 1) t = this._textData.a[e], this._animatorsData[e] = new TextAnimatorDataProperty(this._elem, t, this);
          this._textData.p && "m" in this._textData.p ? (this._pathData = {
            a: i(this._elem, this._textData.p.a, 0, 0, this),
            f: i(this._elem, this._textData.p.f, 0, 0, this),
            l: i(this._elem, this._textData.p.l, 0, 0, this),
            r: i(this._elem, this._textData.p.r, 0, 0, this),
            p: i(this._elem, this._textData.p.p, 0, 0, this),
            m: this._elem.maskManager.getMaskProperty(this._textData.p.m)
          }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = i(this._elem, this._textData.m.a, 1, 0, this)
        }, TextAnimatorProperty.prototype.getMeasures = function(e, t) {
          if (this.lettersChangedFlag = t, this._mdf || this._isFirstFrame || t || this._hasMaskedPath && this._pathData.m._mdf) {
            this._isFirstFrame = !1;
            var r, i, n, a, s, o, l, h, c, p, u, d, f, m, g, v, y, b, S, x = this._moreOptions.alignment.v,
              E = this._animatorsData,
              w = this._textData,
              P = this.mHelper,
              T = this._renderType,
              C = this.renderedLetters.length,
              _ = e.l;
            if (this._hasMaskedPath) {
              if (S = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
                var M, A = S.v;
                for (this._pathData.r.v && (A = A.reverse()), s = {
                    tLength: 0,
                    segments: []
                  }, a = A._length - 1, v = 0, n = 0; n < a; n += 1) M = bez.buildBezierData(A.v[n], A.v[n + 1], [A.o[n][0] - A.v[n][0], A.o[n][1] - A.v[n][1]], [A.i[n + 1][0] - A.v[n + 1][0], A.i[n + 1][1] - A.v[n + 1][1]]), s.tLength += M.segmentLength, s.segments.push(M), v += M.segmentLength;
                n = a, S.v.c && (M = bez.buildBezierData(A.v[n], A.v[0], [A.o[n][0] - A.v[n][0], A.o[n][1] - A.v[n][1]], [A.i[0][0] - A.v[0][0], A.i[0][1] - A.v[0][1]]), s.tLength += M.segmentLength, s.segments.push(M), v += M.segmentLength), this._pathData.pi = s
              }
              if (s = this._pathData.pi, o = this._pathData.f.v, u = 0, p = 1, h = 0, c = !0, m = s.segments, o < 0 && S.v.c)
                for (s.tLength < Math.abs(o) && (o = -Math.abs(o) % s.tLength), p = (f = m[u = m.length - 1].points).length - 1; o < 0;) o += f[p].partialLength, (p -= 1) < 0 && (p = (f = m[u -= 1].points).length - 1);
              d = (f = m[u].points)[p - 1], g = (l = f[p]).partialLength
            }
            a = _.length, r = 0, i = 0;
            var k, D, I, F, L, O = 1.2 * e.finalSize * .714,
              R = !0;
            I = E.length;
            var V, B, N, z, G, j, H, W, X, Y, U, q, Z = -1,
              $ = o,
              J = u,
              K = p,
              Q = -1,
              ee = "",
              te = this.defaultPropsArray;
            if (2 === e.j || 1 === e.j) {
              var re = 0,
                ie = 0,
                ne = 2 === e.j ? -.5 : -1,
                ae = 0,
                se = !0;
              for (n = 0; n < a; n += 1)
                if (_[n].n) {
                  for (re && (re += ie); ae < n;) _[ae].animatorJustifyOffset = re, ae += 1;
                  re = 0, se = !0
                } else {
                  for (D = 0; D < I; D += 1)(k = E[D].a).t.propType && (se && 2 === e.j && (ie += k.t.v * ne), (L = E[D].s.getMult(_[n].anIndexes[D], w.a[D].s.totalChars)).length ? re += k.t.v * L[0] * ne : re += k.t.v * L * ne);
                  se = !1
                } for (re && (re += ie); ae < n;) _[ae].animatorJustifyOffset = re, ae += 1
            }
            for (n = 0; n < a; n += 1) {
              if (P.reset(), z = 1, _[n].n) r = 0, i += e.yOffset, i += R ? 1 : 0, o = $, R = !1, this._hasMaskedPath && (p = K, d = (f = m[u = J].points)[p - 1], g = (l = f[p]).partialLength, h = 0), ee = "", U = "", X = "", q = "", te = this.defaultPropsArray;
              else {
                if (this._hasMaskedPath) {
                  if (Q !== _[n].line) {
                    switch (e.j) {
                      case 1:
                        o += v - e.lineWidths[_[n].line];
                        break;
                      case 2:
                        o += (v - e.lineWidths[_[n].line]) / 2
                    }
                    Q = _[n].line
                  }
                  Z !== _[n].ind && (_[Z] && (o += _[Z].extra), o += _[n].an / 2, Z = _[n].ind), o += x[0] * _[n].an * .005;
                  var oe = 0;
                  for (D = 0; D < I; D += 1)(k = E[D].a).p.propType && ((L = E[D].s.getMult(_[n].anIndexes[D], w.a[D].s.totalChars)).length ? oe += k.p.v[0] * L[0] : oe += k.p.v[0] * L), k.a.propType && ((L = E[D].s.getMult(_[n].anIndexes[D], w.a[D].s.totalChars)).length ? oe += k.a.v[0] * L[0] : oe += k.a.v[0] * L);
                  for (c = !0, this._pathData.a.v && (o = .5 * _[0].an + (v - this._pathData.f.v - .5 * _[0].an - .5 * _[_.length - 1].an) * Z / (a - 1), o += this._pathData.f.v); c;) h + g >= o + oe || !f ? (y = (o + oe - h) / l.partialLength, B = d.point[0] + (l.point[0] - d.point[0]) * y, N = d.point[1] + (l.point[1] - d.point[1]) * y, P.translate(-x[0] * _[n].an * .005, -x[1] * O * .01), c = !1) : f && (h += l.partialLength, (p += 1) >= f.length && (p = 0, m[u += 1] ? f = m[u].points : S.v.c ? (p = 0, f = m[u = 0].points) : (h -= l.partialLength, f = null)), f && (d = l, g = (l = f[p]).partialLength));
                  V = _[n].an / 2 - _[n].add, P.translate(-V, 0, 0)
                } else V = _[n].an / 2 - _[n].add, P.translate(-V, 0, 0), P.translate(-x[0] * _[n].an * .005, -x[1] * O * .01, 0);
                for (D = 0; D < I; D += 1)(k = E[D].a).t.propType && (L = E[D].s.getMult(_[n].anIndexes[D], w.a[D].s.totalChars), 0 === r && 0 === e.j || (this._hasMaskedPath ? L.length ? o += k.t.v * L[0] : o += k.t.v * L : L.length ? r += k.t.v * L[0] : r += k.t.v * L));
                for (e.strokeWidthAnim && (j = e.sw || 0), e.strokeColorAnim && (G = e.sc ? [e.sc[0], e.sc[1], e.sc[2]] : [0, 0, 0]), e.fillColorAnim && e.fc && (H = [e.fc[0], e.fc[1], e.fc[2]]), D = 0; D < I; D += 1)(k = E[D].a).a.propType && ((L = E[D].s.getMult(_[n].anIndexes[D], w.a[D].s.totalChars)).length ? P.translate(-k.a.v[0] * L[0], -k.a.v[1] * L[1], k.a.v[2] * L[2]) : P.translate(-k.a.v[0] * L, -k.a.v[1] * L, k.a.v[2] * L));
                for (D = 0; D < I; D += 1)(k = E[D].a).s.propType && ((L = E[D].s.getMult(_[n].anIndexes[D], w.a[D].s.totalChars)).length ? P.scale(1 + (k.s.v[0] - 1) * L[0], 1 + (k.s.v[1] - 1) * L[1], 1) : P.scale(1 + (k.s.v[0] - 1) * L, 1 + (k.s.v[1] - 1) * L, 1));
                for (D = 0; D < I; D += 1) {
                  if (k = E[D].a, L = E[D].s.getMult(_[n].anIndexes[D], w.a[D].s.totalChars), k.sk.propType && (L.length ? P.skewFromAxis(-k.sk.v * L[0], k.sa.v * L[1]) : P.skewFromAxis(-k.sk.v * L, k.sa.v * L)), k.r.propType && (L.length ? P.rotateZ(-k.r.v * L[2]) : P.rotateZ(-k.r.v * L)), k.ry.propType && (L.length ? P.rotateY(k.ry.v * L[1]) : P.rotateY(k.ry.v * L)), k.rx.propType && (L.length ? P.rotateX(k.rx.v * L[0]) : P.rotateX(k.rx.v * L)), k.o.propType && (L.length ? z += (k.o.v * L[0] - z) * L[0] : z += (k.o.v * L - z) * L), e.strokeWidthAnim && k.sw.propType && (L.length ? j += k.sw.v * L[0] : j += k.sw.v * L), e.strokeColorAnim && k.sc.propType)
                    for (W = 0; W < 3; W += 1) L.length ? G[W] += (k.sc.v[W] - G[W]) * L[0] : G[W] += (k.sc.v[W] - G[W]) * L;
                  if (e.fillColorAnim && e.fc) {
                    if (k.fc.propType)
                      for (W = 0; W < 3; W += 1) L.length ? H[W] += (k.fc.v[W] - H[W]) * L[0] : H[W] += (k.fc.v[W] - H[W]) * L;
                    k.fh.propType && (H = L.length ? addHueToRGB(H, k.fh.v * L[0]) : addHueToRGB(H, k.fh.v * L)), k.fs.propType && (H = L.length ? addSaturationToRGB(H, k.fs.v * L[0]) : addSaturationToRGB(H, k.fs.v * L)), k.fb.propType && (H = L.length ? addBrightnessToRGB(H, k.fb.v * L[0]) : addBrightnessToRGB(H, k.fb.v * L))
                  }
                }
                for (D = 0; D < I; D += 1)(k = E[D].a).p.propType && (L = E[D].s.getMult(_[n].anIndexes[D], w.a[D].s.totalChars), this._hasMaskedPath ? L.length ? P.translate(0, k.p.v[1] * L[0], -k.p.v[2] * L[1]) : P.translate(0, k.p.v[1] * L, -k.p.v[2] * L) : L.length ? P.translate(k.p.v[0] * L[0], k.p.v[1] * L[1], -k.p.v[2] * L[2]) : P.translate(k.p.v[0] * L, k.p.v[1] * L, -k.p.v[2] * L));
                if (e.strokeWidthAnim && (X = j < 0 ? 0 : j), e.strokeColorAnim && (Y = "rgb(" + Math.round(255 * G[0]) + "," + Math.round(255 * G[1]) + "," + Math.round(255 * G[2]) + ")"), e.fillColorAnim && e.fc && (U = "rgb(" + Math.round(255 * H[0]) + "," + Math.round(255 * H[1]) + "," + Math.round(255 * H[2]) + ")"), this._hasMaskedPath) {
                  if (P.translate(0, -e.ls), P.translate(0, x[1] * O * .01 + i, 0), this._pathData.p.v) {
                    b = (l.point[1] - d.point[1]) / (l.point[0] - d.point[0]);
                    var le = 180 * Math.atan(b) / Math.PI;
                    l.point[0] < d.point[0] && (le += 180), P.rotate(-le * Math.PI / 180)
                  }
                  P.translate(B, N, 0), o -= x[0] * _[n].an * .005, _[n + 1] && Z !== _[n + 1].ind && (o += _[n].an / 2, o += .001 * e.tr * e.finalSize)
                } else {
                  switch (P.translate(r, i, 0), e.ps && P.translate(e.ps[0], e.ps[1] + e.ascent, 0), e.j) {
                    case 1:
                      P.translate(_[n].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[_[n].line]), 0, 0);
                      break;
                    case 2:
                      P.translate(_[n].animatorJustifyOffset + e.justifyOffset + (e.boxWidth - e.lineWidths[_[n].line]) / 2, 0, 0)
                  }
                  P.translate(0, -e.ls), P.translate(V, 0, 0), P.translate(x[0] * _[n].an * .005, x[1] * O * .01, 0), r += _[n].l + .001 * e.tr * e.finalSize
                }
                "html" === T ? ee = P.toCSS() : "svg" === T ? ee = P.to2dCSS() : te = [P.props[0], P.props[1], P.props[2], P.props[3], P.props[4], P.props[5], P.props[6], P.props[7], P.props[8], P.props[9], P.props[10], P.props[11], P.props[12], P.props[13], P.props[14], P.props[15]], q = z
              }
              C <= n ? (F = new LetterProps(q, X, Y, U, ee, te), this.renderedLetters.push(F), C += 1, this.lettersChangedFlag = !0) : (F = this.renderedLetters[n], this.lettersChangedFlag = F.update(q, X, Y, U, ee, te) || this.lettersChangedFlag)
            }
          }
        }, TextAnimatorProperty.prototype.getValue = function() {
          this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties())
        }, TextAnimatorProperty.prototype.mHelper = new Matrix, TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(e, t, r) {
          this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(e, t, r), this.textProperty = new TextProperty(this, e.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(e.t, this.renderType, this), this.initTransform(e, t, r), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties)
        }, ITextElement.prototype.prepareFrame = function(e) {
          this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange)
        }, ITextElement.prototype.createPathShape = function(e, t) {
          var r, i, n = t.length,
            a = "";
          for (r = 0; r < n; r += 1) "sh" === t[r].ty && (i = t[r].ks.k, a += buildShapeString(i, i.i.length, !0, e));
          return a
        }, ITextElement.prototype.updateDocumentData = function(e, t) {
          this.textProperty.updateDocumentData(e, t)
        }, ITextElement.prototype.canResizeFont = function(e) {
          this.textProperty.canResizeFont(e)
        }, ITextElement.prototype.setMinimumFontSize = function(e) {
          this.textProperty.setMinimumFontSize(e)
        }, ITextElement.prototype.applyTextPropertiesToMatrix = function(e, t, r, i, n) {
          switch (e.ps && t.translate(e.ps[0], e.ps[1] + e.ascent, 0), t.translate(0, -e.ls, 0), e.j) {
            case 1:
              t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]), 0, 0);
              break;
            case 2:
              t.translate(e.justifyOffset + (e.boxWidth - e.lineWidths[r]) / 2, 0, 0)
          }
          t.translate(i, n, 0)
        }, ITextElement.prototype.buildColor = function(e) {
          return "rgb(" + Math.round(255 * e[0]) + "," + Math.round(255 * e[1]) + "," + Math.round(255 * e[2]) + ")"
        }, ITextElement.prototype.emptyProp = new LetterProps, ITextElement.prototype.destroy = function() {}, ITextElement.prototype.validateText = function() {
          (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1)
        };
        var emptyShapeData = {
          shapes: []
        };

        function SVGTextLottieElement(e, t, r) {
          this.textSpans = [], this.renderType = "svg", this.initElement(e, t, r)
        }

        function ISolidElement(e, t, r) {
          this.initElement(e, t, r)
        }

        function NullElement(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initFrame(), this.initTransform(e, t, r), this.initHierarchy()
        }

        function SVGRendererBase() {}

        function ICompElement() {}

        function SVGCompElement(e, t, r) {
          this.layers = e.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }
        }

        function SVGRenderer(e, t) {
          this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
          var r = "";
          if (t && t.title) {
            var i = createNS("title"),
              n = createElementID();
            i.setAttribute("id", n), i.textContent = t.title, this.svgElement.appendChild(i), r += n
          }
          if (t && t.description) {
            var a = createNS("desc"),
              s = createElementID();
            a.setAttribute("id", s), a.textContent = t.description, this.svgElement.appendChild(a), r += " " + s
          }
          r && this.svgElement.setAttribute("aria-labelledby", r);
          var o = createNS("defs");
          this.svgElement.appendChild(o);
          var l = createNS("g");
          this.svgElement.appendChild(l), this.layerElement = l, this.renderConfig = {
            preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: t && t.contentVisibility || "visible",
            progressiveLoad: t && t.progressiveLoad || !1,
            hideOnTransparent: !(t && !1 === t.hideOnTransparent),
            viewBoxOnly: t && t.viewBoxOnly || !1,
            viewBoxSize: t && t.viewBoxSize || !1,
            className: t && t.className || "",
            id: t && t.id || "",
            focusable: t && t.focusable,
            filterSize: {
              width: t && t.filterSize && t.filterSize.width || "100%",
              height: t && t.filterSize && t.filterSize.height || "100%",
              x: t && t.filterSize && t.filterSize.x || "0%",
              y: t && t.filterSize && t.filterSize.y || "0%"
            },
            width: t && t.width,
            height: t && t.height,
            runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            defs: o,
            renderConfig: this.renderConfig
          }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg"
        }

        function ShapeTransformManager() {
          this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0
        }
        extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
          this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"))
        }, SVGTextLottieElement.prototype.buildTextContents = function(e) {
          for (var t = 0, r = e.length, i = [], n = ""; t < r;) e[t] === String.fromCharCode(13) || e[t] === String.fromCharCode(3) ? (i.push(n), n = "") : n += e[t], t += 1;
          return i.push(n), i
        }, SVGTextLottieElement.prototype.buildShapeData = function(e, t) {
          if (e.shapes && e.shapes.length) {
            var r = e.shapes[0];
            if (r.it) {
              var i = r.it[r.it.length - 1];
              i.s && (i.s.k[0] = t, i.s.k[1] = t)
            }
          }
          return e
        }, SVGTextLottieElement.prototype.buildNewText = function() {
          var e, t;
          this.addDynamicProperty(this);
          var r = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(r ? r.l.length : 0), r.fc ? this.layerElement.setAttribute("fill", this.buildColor(r.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), r.sc && (this.layerElement.setAttribute("stroke", this.buildColor(r.sc)), this.layerElement.setAttribute("stroke-width", r.sw)), this.layerElement.setAttribute("font-size", r.finalSize);
          var i = this.globalData.fontManager.getFontByName(r.f);
          if (i.fClass) this.layerElement.setAttribute("class", i.fClass);
          else {
            this.layerElement.setAttribute("font-family", i.fFamily);
            var n = r.fWeight,
              a = r.fStyle;
            this.layerElement.setAttribute("font-style", a), this.layerElement.setAttribute("font-weight", n)
          }
          this.layerElement.setAttribute("aria-label", r.t);
          var s, o = r.l || [],
            l = !!this.globalData.fontManager.chars;
          t = o.length;
          var h = this.mHelper,
            c = this.data.singleShape,
            p = 0,
            u = 0,
            d = !0,
            f = .001 * r.tr * r.finalSize;
          if (!c || l || r.sz) {
            var m, g = this.textSpans.length;
            for (e = 0; e < t; e += 1) {
              if (this.textSpans[e] || (this.textSpans[e] = {
                  span: null,
                  childSpan: null,
                  glyph: null
                }), !l || !c || 0 === e) {
                if (s = g > e ? this.textSpans[e].span : createNS(l ? "g" : "text"), g <= e) {
                  if (s.setAttribute("stroke-linecap", "butt"), s.setAttribute("stroke-linejoin", "round"), s.setAttribute("stroke-miterlimit", "4"), this.textSpans[e].span = s, l) {
                    var v = createNS("g");
                    s.appendChild(v), this.textSpans[e].childSpan = v
                  }
                  this.textSpans[e].span = s, this.layerElement.appendChild(s)
                }
                s.style.display = "inherit"
              }
              if (h.reset(), c && (o[e].n && (p = -f, u += r.yOffset, u += d ? 1 : 0, d = !1), this.applyTextPropertiesToMatrix(r, h, o[e].line, p, u), p += o[e].l || 0, p += f), l) {
                var y;
                if (1 === (m = this.globalData.fontManager.getCharData(r.finalText[e], i.fStyle, this.globalData.fontManager.getFontByName(r.f).fFamily)).t) y = new SVGCompElement(m.data, this.globalData, this);
                else {
                  var b = emptyShapeData;
                  m.data && m.data.shapes && (b = this.buildShapeData(m.data, r.finalSize)), y = new SVGShapeElement(b, this.globalData, this)
                }
                if (this.textSpans[e].glyph) {
                  var S = this.textSpans[e].glyph;
                  this.textSpans[e].childSpan.removeChild(S.layerElement), S.destroy()
                }
                this.textSpans[e].glyph = y, y._debug = !0, y.prepareFrame(0), y.renderFrame(), this.textSpans[e].childSpan.appendChild(y.layerElement), 1 === m.t && this.textSpans[e].childSpan.setAttribute("transform", "scale(" + r.finalSize / 100 + "," + r.finalSize / 100 + ")")
              } else c && s.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), s.textContent = o[e].val, s.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve")
            }
            c && s && s.setAttribute("d", "")
          } else {
            var x = this.textContainer,
              E = "start";
            switch (r.j) {
              case 1:
                E = "end";
                break;
              case 2:
                E = "middle";
                break;
              default:
                E = "start"
            }
            x.setAttribute("text-anchor", E), x.setAttribute("letter-spacing", f);
            var w = this.buildTextContents(r.finalText);
            for (t = w.length, u = r.ps ? r.ps[1] + r.ascent : 0, e = 0; e < t; e += 1)(s = this.textSpans[e].span || createNS("tspan")).textContent = w[e], s.setAttribute("x", 0), s.setAttribute("y", u), s.style.display = "inherit", x.appendChild(s), this.textSpans[e] || (this.textSpans[e] = {
              span: null,
              glyph: null
            }), this.textSpans[e].span = s, u += r.finalLineHeight;
            this.layerElement.appendChild(x)
          }
          for (; e < this.textSpans.length;) this.textSpans[e].span.style.display = "none", e += 1;
          this._sizeChanged = !0
        }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
          if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
            this._sizeChanged = !1;
            var e = this.layerElement.getBBox();
            this.bbox = {
              top: e.y,
              left: e.x,
              width: e.width,
              height: e.height
            }
          }
          return this.bbox
        }, SVGTextLottieElement.prototype.getValue = function() {
          var e, t, r = this.textSpans.length;
          for (this.renderedFrame = this.comp.renderedFrame, e = 0; e < r; e += 1)(t = this.textSpans[e].glyph) && (t.prepareFrame(this.comp.renderedFrame - this.data.st), t._mdf && (this._mdf = !0))
        }, SVGTextLottieElement.prototype.renderInnerContent = function() {
          if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
            var e, t;
            this._sizeChanged = !0;
            var r, i, n, a = this.textAnimator.renderedLetters,
              s = this.textProperty.currentData.l;
            for (t = s.length, e = 0; e < t; e += 1) s[e].n || (r = a[e], i = this.textSpans[e].span, (n = this.textSpans[e].glyph) && n.renderFrame(), r._mdf.m && i.setAttribute("transform", r.m), r._mdf.o && i.setAttribute("opacity", r.o), r._mdf.sw && i.setAttribute("stroke-width", r.sw), r._mdf.sc && i.setAttribute("stroke", r.sc), r._mdf.fc && i.setAttribute("fill", r.fc))
          }
        }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
          var e = createNS("rect");
          e.setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.layerElement.appendChild(e)
        }, NullElement.prototype.prepareFrame = function(e) {
          this.prepareProperties(e, !0)
        }, NullElement.prototype.renderFrame = function() {}, NullElement.prototype.getBaseElement = function() {
          return null
        }, NullElement.prototype.destroy = function() {}, NullElement.prototype.sourceRectAtTime = function() {}, NullElement.prototype.hide = function() {}, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(e) {
          return new NullElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createShape = function(e) {
          return new SVGShapeElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createText = function(e) {
          return new SVGTextLottieElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createImage = function(e) {
          return new IImageElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.createSolid = function(e) {
          return new ISolidElement(e, this.globalData, this)
        }, SVGRendererBase.prototype.configAnimation = function(e) {
          this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + e.w + " " + e.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", e.w), this.svgElement.setAttribute("height", e.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), void 0 !== this.renderConfig.focusable && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
          var t = this.globalData.defs;
          this.setupGlobalData(e, t), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = e;
          var r = createNS("clipPath"),
            i = createNS("rect");
          i.setAttribute("width", e.w), i.setAttribute("height", e.h), i.setAttribute("x", 0), i.setAttribute("y", 0);
          var n = createElementID();
          r.setAttribute("id", n), r.appendChild(i), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + n + ")"), t.appendChild(r), this.layers = e.layers, this.elements = createSizedArray(e.layers.length)
        }, SVGRendererBase.prototype.destroy = function() {
          var e;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
          var t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, SVGRendererBase.prototype.updateContainerSize = function() {}, SVGRendererBase.prototype.findIndexByInd = function(e) {
          var t = 0,
            r = this.layers.length;
          for (t = 0; t < r; t += 1)
            if (this.layers[t].ind === e) return t;
          return -1
        }, SVGRendererBase.prototype.buildItem = function(e) {
          var t = this.elements;
          if (!t[e] && 99 !== this.layers[e].ty) {
            t[e] = !0;
            var r = this.createItem(this.layers[e]);
            if (t[e] = r, getExpressionsPlugin() && (0 === this.layers[e].ty && this.globalData.projectInterface.registerComposition(r), r.initExpressions()), this.appendElementInPos(r, e), this.layers[e].tt) {
              var i = "tp" in this.layers[e] ? this.findIndexByInd(this.layers[e].tp) : e - 1;
              if (-1 === i) return;
              if (this.elements[i] && !0 !== this.elements[i]) {
                var n = t[i].getMatte(this.layers[e].tt);
                r.setMatte(n)
              } else this.buildItem(i), this.addPendingElement(r)
            }
          }
        }, SVGRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) {
            var e = this.pendingElements.pop();
            if (e.checkParenting(), e.data.tt)
              for (var t = 0, r = this.elements.length; t < r;) {
                if (this.elements[t] === e) {
                  var i = "tp" in e.data ? this.findIndexByInd(e.data.tp) : t - 1,
                    n = this.elements[i].getMatte(this.layers[t].tt);
                  e.setMatte(n);
                  break
                }
                t += 1
              }
          }
        }, SVGRendererBase.prototype.renderFrame = function(e) {
          if (this.renderedFrame !== e && !this.destroyed) {
            var t;
            null === e ? e = this.renderedFrame : this.renderedFrame = e, this.globalData.frameNum = e, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = e, this.globalData._mdf = !1;
            var r = this.layers.length;
            for (this.completeLayers || this.checkLayers(e), t = r - 1; t >= 0; t -= 1)(this.completeLayers || this.elements[t]) && this.elements[t].prepareFrame(e - this.layers[t].st);
            if (this.globalData._mdf)
              for (t = 0; t < r; t += 1)(this.completeLayers || this.elements[t]) && this.elements[t].renderFrame()
          }
        }, SVGRendererBase.prototype.appendElementInPos = function(e, t) {
          var r = e.getBaseElement();
          if (r) {
            for (var i, n = 0; n < t;) this.elements[n] && !0 !== this.elements[n] && this.elements[n].getBaseElement() && (i = this.elements[n].getBaseElement()), n += 1;
            i ? this.layerElement.insertBefore(r, i) : this.layerElement.appendChild(r)
          }
        }, SVGRendererBase.prototype.hide = function() {
          this.layerElement.style.display = "none"
        }, SVGRendererBase.prototype.show = function() {
          this.layerElement.style.display = "block"
        }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initTransform(e, t, r), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && t.progressiveLoad || this.buildAllItems(), this.hide()
        }, ICompElement.prototype.prepareFrame = function(e) {
          if (this._mdf = !1, this.prepareRenderableFrame(e), this.prepareProperties(e, this.isInRange), this.isInRange || this.data.xt) {
            if (this.tm._placeholder) this.renderedFrame = e / this.data.sr;
            else {
              var t = this.tm.v;
              t === this.data.op && (t = this.data.op - 1), this.renderedFrame = t
            }
            var r, i = this.elements.length;
            for (this.completeLayers || this.checkLayers(this.renderedFrame), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && (this.elements[r].prepareFrame(this.renderedFrame - this.layers[r].st), this.elements[r]._mdf && (this._mdf = !0))
          }
        }, ICompElement.prototype.renderInnerContent = function() {
          var e, t = this.layers.length;
          for (e = 0; e < t; e += 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, ICompElement.prototype.setElements = function(e) {
          this.elements = e
        }, ICompElement.prototype.getElements = function() {
          return this.elements
        }, ICompElement.prototype.destroyElements = function() {
          var e, t = this.layers.length;
          for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy()
        }, ICompElement.prototype.destroy = function() {
          this.destroyElements(), this.destroyBaseElement()
        }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(e) {
          return new SVGCompElement(e, this.globalData, this)
        }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(e) {
          return new SVGCompElement(e, this.globalData, this)
        }, ShapeTransformManager.prototype = {
          addTransformSequence: function(e) {
            var t, r = e.length,
              i = "_";
            for (t = 0; t < r; t += 1) i += e[t].transform.key + "_";
            var n = this.sequences[i];
            return n || (n = {
              transforms: [].concat(e),
              finalTransform: new Matrix,
              _mdf: !1
            }, this.sequences[i] = n, this.sequenceList.push(n)), n
          },
          processSequence: function(e, t) {
            for (var r = 0, i = e.transforms.length, n = t; r < i && !t;) {
              if (e.transforms[r].transform.mProps._mdf) {
                n = !0;
                break
              }
              r += 1
            }
            if (n)
              for (e.finalTransform.reset(), r = i - 1; r >= 0; r -= 1) e.finalTransform.multiply(e.transforms[r].transform.mProps.v);
            e._mdf = n
          },
          processSequences: function(e) {
            var t, r = this.sequenceList.length;
            for (t = 0; t < r; t += 1) this.processSequence(this.sequenceList[t], e)
          },
          getNewKey: function() {
            return this.transform_key_count += 1, "_" + this.transform_key_count
          }
        };
        var lumaLoader = function() {
          var e = "__lottie_element_luma_buffer",
            t = null,
            r = null,
            i = null;

          function n() {
            var n, a, s;
            t || (n = createNS("svg"), a = createNS("filter"), s = createNS("feColorMatrix"), a.setAttribute("id", e), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), a.appendChild(s), n.appendChild(a), n.setAttribute("id", e + "_svg"), featureSupport.svgLumaHidden && (n.style.display = "none"), i = n, document.body.appendChild(i), t = createTag("canvas"), (r = t.getContext("2d")).filter = "url(#" + e + ")", r.fillStyle = "rgba(0,0,0,0)", r.fillRect(0, 0, 1, 1))
          }
          return {
            load: n,
            get: function(i) {
              return t || n(), t.width = i.width, t.height = i.height, r.filter = "url(#" + e + ")", t
            }
          }
        };

        function createCanvas(e, t) {
          if (featureSupport.offscreenCanvas) return new OffscreenCanvas(e, t);
          var r = createTag("canvas");
          return r.width = e, r.height = t, r
        }
        var assetLoader = {
            loadLumaCanvas: lumaLoader.load,
            getLumaCanvas: lumaLoader.get,
            createCanvas
          },
          registeredEffects = {};

        function CVEffects(e) {
          var t, r, i = e.data.ef ? e.data.ef.length : 0;
          for (this.filters = [], t = 0; t < i; t += 1) {
            r = null;
            var n = e.data.ef[t].ty;
            registeredEffects[n] && (r = new(0, registeredEffects[n].effect)(e.effectsManager.effectElements[t], e)), r && this.filters.push(r)
          }
          this.filters.length && e.addRenderableComponent(this)
        }

        function registerEffect(e, t) {
          registeredEffects[e] = {
            effect: t
          }
        }

        function CVMaskElement(e, t) {
          var r;
          this.data = e, this.element = t, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
          var i = this.masksProperties.length,
            n = !1;
          for (r = 0; r < i; r += 1) "n" !== this.masksProperties[r].mode && (n = !0), this.viewData[r] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[r], 3);
          this.hasMasks = n, n && this.element.addRenderableComponent(this)
        }

        function CVBaseElement() {}
        CVEffects.prototype.renderFrame = function(e) {
          var t, r = this.filters.length;
          for (t = 0; t < r; t += 1) this.filters[t].renderFrame(e)
        }, CVEffects.prototype.getEffects = function(e) {
          var t, r = this.filters.length,
            i = [];
          for (t = 0; t < r; t += 1) this.filters[t].type === e && i.push(this.filters[t]);
          return i
        }, CVMaskElement.prototype.renderFrame = function() {
          if (this.hasMasks) {
            var e, t, r, i, n = this.element.finalTransform.mat,
              a = this.element.canvasContext,
              s = this.masksProperties.length;
            for (a.beginPath(), e = 0; e < s; e += 1)
              if ("n" !== this.masksProperties[e].mode) {
                var o;
                this.masksProperties[e].inv && (a.moveTo(0, 0), a.lineTo(this.element.globalData.compSize.w, 0), a.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), a.lineTo(0, this.element.globalData.compSize.h), a.lineTo(0, 0)), i = this.viewData[e].v, t = n.applyToPointArray(i.v[0][0], i.v[0][1], 0), a.moveTo(t[0], t[1]);
                var l = i._length;
                for (o = 1; o < l; o += 1) r = n.applyToTriplePoints(i.o[o - 1], i.i[o], i.v[o]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5]);
                r = n.applyToTriplePoints(i.o[o - 1], i.i[0], i.v[0]), a.bezierCurveTo(r[0], r[1], r[2], r[3], r[4], r[5])
              } this.element.globalData.renderer.save(!0), a.clip()
          }
        }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
          this.element = null
        };
        var operationsMap = {
          1: "source-in",
          2: "source-out",
          3: "source-in",
          4: "source-out"
        };

        function CVShapeData(e, t, r, i) {
          this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
          var n, a = 4;
          "rc" === t.ty ? a = 5 : "el" === t.ty ? a = 6 : "sr" === t.ty && (a = 7), this.sh = ShapePropertyFactory.getShapeProp(e, t, a, e);
          var s, o = r.length;
          for (n = 0; n < o; n += 1) r[n].closed || (s = {
            transforms: i.addTransformSequence(r[n].transforms),
            trNodes: []
          }, this.styledShapes.push(s), r[n].elements.push(s))
        }

        function CVShapeElement(e, t, r) {
          this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager, this.initElement(e, t, r)
        }

        function CVTextElement(e, t, r) {
          this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = {
            fill: "rgba(0,0,0,0)",
            stroke: "rgba(0,0,0,0)",
            sWidth: 0,
            fValue: ""
          }, this.initElement(e, t, r)
        }

        function CVImageElement(e, t, r) {
          this.assetData = t.getAssetData(e.refId), this.img = t.imageLoader.getAsset(this.assetData), this.initElement(e, t, r)
        }

        function CVSolidElement(e, t, r) {
          this.initElement(e, t, r)
        }

        function CanvasRendererBase() {}

        function CanvasContext() {
          this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random()
        }

        function CVContextData() {
          var e;
          for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix, e = 0; e < 15; e += 1) {
            var t = new CanvasContext;
            this.stack[e] = t
          }
          this._length = 15, this.nativeContext = null, this.transformMat = new Matrix, this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = ""
        }

        function CVCompElement(e, t, r) {
          this.completeLayers = !1, this.layers = e.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }
        }

        function CanvasRenderer(e, t) {
          this.animationItem = e, this.renderConfig = {
            clearCanvas: !t || void 0 === t.clearCanvas || t.clearCanvas,
            context: t && t.context || null,
            progressiveLoad: t && t.progressiveLoad || !1,
            preserveAspectRatio: t && t.preserveAspectRatio || "xMidYMid meet",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            contentVisibility: t && t.contentVisibility || "visible",
            className: t && t.className || "",
            id: t && t.id || "",
            runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
          }, this.renderConfig.dpr = t && t.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = t && t.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = {
            frameNum: -1,
            _mdf: !1,
            renderConfig: this.renderConfig,
            currentGlobalAlpha: -1
          }, this.contextData = new CVContextData, this.elements = [], this.pendingElements = [], this.transformMat = new Matrix, this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData))
        }

        function HBaseElement() {}

        function HSolidElement(e, t, r) {
          this.initElement(e, t, r)
        }

        function HShapeElement(e, t, r) {
          this.shapes = [], this.shapesData = e.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(e, t, r), this.prevViewData = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }
        }

        function HTextElement(e, t, r) {
          this.textSpans = [], this.textPaths = [], this.currentBBox = {
            x: 999999,
            y: -999999,
            h: 0,
            w: 0
          }, this.renderType = "svg", this.isMasked = !1, this.initElement(e, t, r)
        }

        function HCameraElement(e, t, r) {
          this.initFrame(), this.initBaseData(e, t, r), this.initHierarchy();
          var i = PropertyFactory.getProp;
          if (this.pe = i(this, e.pe, 0, 0, this), e.ks.p.s ? (this.px = i(this, e.ks.p.x, 1, 0, this), this.py = i(this, e.ks.p.y, 1, 0, this), this.pz = i(this, e.ks.p.z, 1, 0, this)) : this.p = i(this, e.ks.p, 1, 0, this), e.ks.a && (this.a = i(this, e.ks.a, 1, 0, this)), e.ks.or.k.length && e.ks.or.k[0].to) {
            var n, a = e.ks.or.k.length;
            for (n = 0; n < a; n += 1) e.ks.or.k[n].to = null, e.ks.or.k[n].ti = null
          }
          this.or = i(this, e.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = i(this, e.ks.rx, 0, degToRads, this), this.ry = i(this, e.ks.ry, 0, degToRads, this), this.rz = i(this, e.ks.rz, 0, degToRads, this), this.mat = new Matrix, this._prevMat = new Matrix, this._isFirstFrame = !0, this.finalTransform = {
            mProp: this
          }
        }

        function HImageElement(e, t, r) {
          this.assetData = t.getAssetData(e.refId), this.initElement(e, t, r)
        }

        function HybridRendererBase(e, t) {
          this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: t && t.className || "",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(t && !1 === t.hideOnTransparent),
            filterSize: {
              width: t && t.filterSize && t.filterSize.width || "400%",
              height: t && t.filterSize && t.filterSize.height || "400%",
              x: t && t.filterSize && t.filterSize.x || "-100%",
              y: t && t.filterSize && t.filterSize.y || "-100%"
            }
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }

        function HCompElement(e, t, r) {
          this.layers = e.layers, this.supports3d = !e.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(e, t, r), this.tm = e.tm ? PropertyFactory.getProp(this, e.tm, 0, t.frameRate, this) : {
            _placeholder: !0
          }
        }

        function HybridRenderer(e, t) {
          this.animationItem = e, this.layers = null, this.renderedFrame = -1, this.renderConfig = {
            className: t && t.className || "",
            imagePreserveAspectRatio: t && t.imagePreserveAspectRatio || "xMidYMid slice",
            hideOnTransparent: !(t && !1 === t.hideOnTransparent),
            filterSize: {
              width: t && t.filterSize && t.filterSize.width || "400%",
              height: t && t.filterSize && t.filterSize.height || "400%",
              x: t && t.filterSize && t.filterSize.x || "-100%",
              y: t && t.filterSize && t.filterSize.y || "-100%"
            },
            runExpressions: !t || void 0 === t.runExpressions || t.runExpressions
          }, this.globalData = {
            _mdf: !1,
            frameNum: -1,
            renderConfig: this.renderConfig
          }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html"
        }
        CVBaseElement.prototype = {
          createElements: function() {},
          initRendererElement: function() {},
          createContainerElements: function() {
            if (this.data.tt >= 1) {
              this.buffers = [];
              var e = this.globalData.canvasContext,
                t = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
              this.buffers.push(t);
              var r = assetLoader.createCanvas(e.canvas.width, e.canvas.height);
              this.buffers.push(r), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas()
            }
            this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms()
          },
          createContent: function() {},
          setBlendMode: function() {
            var e = this.globalData;
            if (e.blendMode !== this.data.bm) {
              e.blendMode = this.data.bm;
              var t = getBlendMode(this.data.bm);
              e.canvasContext.globalCompositeOperation = t
            }
          },
          createRenderableComponents: function() {
            this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT)
          },
          hideElement: function() {
            this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0)
          },
          showElement: function() {
            this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0)
          },
          clearCanvas: function(e) {
            e.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy)
          },
          prepareLayer: function() {
            if (this.data.tt >= 1) {
              var e = this.buffers[0].getContext("2d");
              this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform)
            }
          },
          exitLayer: function() {
            if (this.data.tt >= 1) {
              var e = this.buffers[1],
                t = e.getContext("2d");
              if (this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
                var r = assetLoader.getLumaCanvas(this.canvasContext.canvas);
                r.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(r, 0, 0)
              }
              this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(e, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over"
            }
          },
          renderFrame: function(e) {
            if (!this.hidden && !this.data.hd && (1 !== this.data.td || e)) {
              this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
              var t = 0 === this.data.ty;
              this.prepareLayer(), this.globalData.renderer.save(t), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(t), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1)
            }
          },
          destroy: function() {
            this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy()
          },
          mHelper: new Matrix
        }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = {
          opacity: 1,
          _opMdf: !1
        }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, [])
        }, CVShapeElement.prototype.createStyleElement = function(e, t) {
          var r = {
              data: e,
              type: e.ty,
              preTransforms: this.transformsManager.addTransformSequence(t),
              transforms: [],
              elements: [],
              closed: !0 === e.hd
            },
            i = {};
          if ("fl" === e.ty || "st" === e.ty ? (i.c = PropertyFactory.getProp(this, e.c, 1, 255, this), i.c.k || (r.co = "rgb(" + bmFloor(i.c.v[0]) + "," + bmFloor(i.c.v[1]) + "," + bmFloor(i.c.v[2]) + ")")) : "gf" !== e.ty && "gs" !== e.ty || (i.s = PropertyFactory.getProp(this, e.s, 1, null, this), i.e = PropertyFactory.getProp(this, e.e, 1, null, this), i.h = PropertyFactory.getProp(this, e.h || {
              k: 0
            }, 0, .01, this), i.a = PropertyFactory.getProp(this, e.a || {
              k: 0
            }, 0, degToRads, this), i.g = new GradientProperty(this, e.g, this)), i.o = PropertyFactory.getProp(this, e.o, 0, .01, this), "st" === e.ty || "gs" === e.ty) {
            if (r.lc = lineCapEnum[e.lc || 2], r.lj = lineJoinEnum[e.lj || 2], 1 == e.lj && (r.ml = e.ml), i.w = PropertyFactory.getProp(this, e.w, 0, null, this), i.w.k || (r.wi = i.w.v), e.d) {
              var n = new DashProperty(this, e.d, "canvas", this);
              i.d = n, i.d.k || (r.da = i.d.dashArray, r.do = i.d.dashoffset[0])
            }
          } else r.r = 2 === e.r ? "evenodd" : "nonzero";
          return this.stylesList.push(r), i.style = r, i
        }, CVShapeElement.prototype.createGroupElement = function() {
          return {
            it: [],
            prevViewData: []
          }
        }, CVShapeElement.prototype.createTransformElement = function(e) {
          return {
            transform: {
              opacity: 1,
              _opMdf: !1,
              key: this.transformsManager.getNewKey(),
              op: PropertyFactory.getProp(this, e.o, 0, .01, this),
              mProps: TransformPropertyFactory.getTransformProperty(this, e, this)
            }
          }
        }, CVShapeElement.prototype.createShapeElement = function(e) {
          var t = new CVShapeData(this, e, this.stylesList, this.transformsManager);
          return this.shapes.push(t), this.addShapeToModifiers(t), t
        }, CVShapeElement.prototype.reloadShapes = function() {
          var e;
          this._isFirstFrame = !0;
          var t = this.itemsData.length;
          for (e = 0; e < t; e += 1) this.prevViewData[e] = this.itemsData[e];
          for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), t = this.dynamicProperties.length, e = 0; e < t; e += 1) this.dynamicProperties[e].getValue();
          this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame)
        }, CVShapeElement.prototype.addTransformToStyleList = function(e) {
          var t, r = this.stylesList.length;
          for (t = 0; t < r; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.push(e)
        }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
          var e, t = this.stylesList.length;
          for (e = 0; e < t; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.pop()
        }, CVShapeElement.prototype.closeStyles = function(e) {
          var t, r = e.length;
          for (t = 0; t < r; t += 1) e[t].closed = !0
        }, CVShapeElement.prototype.searchShapes = function(e, t, r, i, n) {
          var a, s, o, l, h, c, p = e.length - 1,
            u = [],
            d = [],
            f = [].concat(n);
          for (a = p; a >= 0; a -= 1) {
            if ((l = this.searchProcessedElement(e[a])) ? t[a] = r[l - 1] : e[a]._shouldRender = i, "fl" === e[a].ty || "st" === e[a].ty || "gf" === e[a].ty || "gs" === e[a].ty) l ? t[a].style.closed = !1 : t[a] = this.createStyleElement(e[a], f), u.push(t[a].style);
            else if ("gr" === e[a].ty) {
              if (l)
                for (o = t[a].it.length, s = 0; s < o; s += 1) t[a].prevViewData[s] = t[a].it[s];
              else t[a] = this.createGroupElement(e[a]);
              this.searchShapes(e[a].it, t[a].it, t[a].prevViewData, i, f)
            } else "tr" === e[a].ty ? (l || (c = this.createTransformElement(e[a]), t[a] = c), f.push(t[a]), this.addTransformToStyleList(t[a])) : "sh" === e[a].ty || "rc" === e[a].ty || "el" === e[a].ty || "sr" === e[a].ty ? l || (t[a] = this.createShapeElement(e[a])) : "tm" === e[a].ty || "rd" === e[a].ty || "pb" === e[a].ty || "zz" === e[a].ty || "op" === e[a].ty ? (l ? (h = t[a]).closed = !1 : ((h = ShapeModifiers.getModifier(e[a].ty)).init(this, e[a]), t[a] = h, this.shapeModifiers.push(h)), d.push(h)) : "rp" === e[a].ty && (l ? (h = t[a]).closed = !0 : (h = ShapeModifiers.getModifier(e[a].ty), t[a] = h, h.init(this, e, a, t), this.shapeModifiers.push(h), i = !1), d.push(h));
            this.addProcessedElement(e[a], a + 1)
          }
          for (this.removeTransformFromStyleList(), this.closeStyles(u), p = d.length, a = 0; a < p; a += 1) d[a].closed = !0
        }, CVShapeElement.prototype.renderInnerContent = function() {
          this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0)
        }, CVShapeElement.prototype.renderShapeTransform = function(e, t) {
          (e._opMdf || t.op._mdf || this._isFirstFrame) && (t.opacity = e.opacity, t.opacity *= t.op.v, t._opMdf = !0)
        }, CVShapeElement.prototype.drawLayer = function() {
          var e, t, r, i, n, a, s, o, l, h = this.stylesList.length,
            c = this.globalData.renderer,
            p = this.globalData.canvasContext;
          for (e = 0; e < h; e += 1)
            if (("st" !== (o = (l = this.stylesList[e]).type) && "gs" !== o || 0 !== l.wi) && l.data._shouldRender && 0 !== l.coOp && 0 !== this.globalData.currentGlobalAlpha) {
              for (c.save(), a = l.elements, "st" === o || "gs" === o ? (c.ctxStrokeStyle("st" === o ? l.co : l.grd), c.ctxLineWidth(l.wi), c.ctxLineCap(l.lc), c.ctxLineJoin(l.lj), c.ctxMiterLimit(l.ml || 0)) : c.ctxFillStyle("fl" === o ? l.co : l.grd), c.ctxOpacity(l.coOp), "st" !== o && "gs" !== o && p.beginPath(), c.ctxTransform(l.preTransforms.finalTransform.props), r = a.length, t = 0; t < r; t += 1) {
                for ("st" !== o && "gs" !== o || (p.beginPath(), l.da && (p.setLineDash(l.da), p.lineDashOffset = l.do)), n = (s = a[t].trNodes).length, i = 0; i < n; i += 1) "m" === s[i].t ? p.moveTo(s[i].p[0], s[i].p[1]) : "c" === s[i].t ? p.bezierCurveTo(s[i].pts[0], s[i].pts[1], s[i].pts[2], s[i].pts[3], s[i].pts[4], s[i].pts[5]) : p.closePath();
                "st" !== o && "gs" !== o || (c.ctxStroke(), l.da && p.setLineDash(this.dashResetter))
              }
              "st" !== o && "gs" !== o && this.globalData.renderer.ctxFill(l.r), c.restore()
            }
        }, CVShapeElement.prototype.renderShape = function(e, t, r, i) {
          var n, a;
          for (a = e, n = t.length - 1; n >= 0; n -= 1) "tr" === t[n].ty ? (a = r[n].transform, this.renderShapeTransform(e, a)) : "sh" === t[n].ty || "el" === t[n].ty || "rc" === t[n].ty || "sr" === t[n].ty ? this.renderPath(t[n], r[n]) : "fl" === t[n].ty ? this.renderFill(t[n], r[n], a) : "st" === t[n].ty ? this.renderStroke(t[n], r[n], a) : "gf" === t[n].ty || "gs" === t[n].ty ? this.renderGradientFill(t[n], r[n], a) : "gr" === t[n].ty ? this.renderShape(a, t[n].it, r[n].it) : t[n].ty;
          i && this.drawLayer()
        }, CVShapeElement.prototype.renderStyledShape = function(e, t) {
          if (this._isFirstFrame || t._mdf || e.transforms._mdf) {
            var r, i, n, a = e.trNodes,
              s = t.paths,
              o = s._length;
            a.length = 0;
            var l = e.transforms.finalTransform;
            for (n = 0; n < o; n += 1) {
              var h = s.shapes[n];
              if (h && h.v) {
                for (i = h._length, r = 1; r < i; r += 1) 1 === r && a.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[r], h.v[r])
                });
                1 === i && a.push({
                  t: "m",
                  p: l.applyToPointArray(h.v[0][0], h.v[0][1], 0)
                }), h.c && i && (a.push({
                  t: "c",
                  pts: l.applyToTriplePoints(h.o[r - 1], h.i[0], h.v[0])
                }), a.push({
                  t: "z"
                }))
              }
            }
            e.trNodes = a
          }
        }, CVShapeElement.prototype.renderPath = function(e, t) {
          if (!0 !== e.hd && e._shouldRender) {
            var r, i = t.styledShapes.length;
            for (r = 0; r < i; r += 1) this.renderStyledShape(t.styledShapes[r], t.sh)
          }
        }, CVShapeElement.prototype.renderFill = function(e, t, r) {
          var i = t.style;
          (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity)
        }, CVShapeElement.prototype.renderGradientFill = function(e, t, r) {
          var i, n = t.style;
          if (!n.grd || t.g._mdf || t.s._mdf || t.e._mdf || 1 !== e.t && (t.h._mdf || t.a._mdf)) {
            var a, s = this.globalData.canvasContext,
              o = t.s.v,
              l = t.e.v;
            if (1 === e.t) i = s.createLinearGradient(o[0], o[1], l[0], l[1]);
            else {
              var h = Math.sqrt(Math.pow(o[0] - l[0], 2) + Math.pow(o[1] - l[1], 2)),
                c = Math.atan2(l[1] - o[1], l[0] - o[0]),
                p = t.h.v;
              p >= 1 ? p = .99 : p <= -1 && (p = -.99);
              var u = h * p,
                d = Math.cos(c + t.a.v) * u + o[0],
                f = Math.sin(c + t.a.v) * u + o[1];
              i = s.createRadialGradient(d, f, 0, o[0], o[1], h)
            }
            var m = e.g.p,
              g = t.g.c,
              v = 1;
            for (a = 0; a < m; a += 1) t.g._hasOpacity && t.g._collapsable && (v = t.g.o[2 * a + 1]), i.addColorStop(g[4 * a] / 100, "rgba(" + g[4 * a + 1] + "," + g[4 * a + 2] + "," + g[4 * a + 3] + "," + v + ")");
            n.grd = i
          }
          n.coOp = t.o.v * r.opacity
        }, CVShapeElement.prototype.renderStroke = function(e, t, r) {
          var i = t.style,
            n = t.d;
          n && (n._mdf || this._isFirstFrame) && (i.da = n.dashArray, i.do = n.dashoffset[0]), (t.c._mdf || this._isFirstFrame) && (i.co = "rgb(" + bmFloor(t.c.v[0]) + "," + bmFloor(t.c.v[1]) + "," + bmFloor(t.c.v[2]) + ")"), (t.o._mdf || r._opMdf || this._isFirstFrame) && (i.coOp = t.o.v * r.opacity), (t.w._mdf || this._isFirstFrame) && (i.wi = t.w.v)
        }, CVShapeElement.prototype.destroy = function() {
          this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = !1;
          e.fc ? (t = !0, this.values.fill = this.buildColor(e.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = t;
          var r = !1;
          e.sc && (r = !0, this.values.stroke = this.buildColor(e.sc), this.values.sWidth = e.sw);
          var i, n, a, s, o, l, h, c, p, u, d, f, m = this.globalData.fontManager.getFontByName(e.f),
            g = e.l,
            v = this.mHelper;
          this.stroke = r, this.values.fValue = e.finalSize + "px " + this.globalData.fontManager.getFontByName(e.f).fFamily, n = e.finalText.length;
          var y = this.data.singleShape,
            b = .001 * e.tr * e.finalSize,
            S = 0,
            x = 0,
            E = !0,
            w = 0;
          for (i = 0; i < n; i += 1) {
            s = (a = this.globalData.fontManager.getCharData(e.finalText[i], m.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily)) && a.data || {}, v.reset(), y && g[i].n && (S = -b, x += e.yOffset, x += E ? 1 : 0, E = !1), p = (h = s.shapes ? s.shapes[0].it : []).length, v.scale(e.finalSize / 100, e.finalSize / 100), y && this.applyTextPropertiesToMatrix(e, v, g[i].line, S, x), d = createSizedArray(p - 1);
            var P = 0;
            for (c = 0; c < p; c += 1)
              if ("sh" === h[c].ty) {
                for (l = h[c].ks.k.i.length, u = h[c].ks.k, f = [], o = 1; o < l; o += 1) 1 === o && f.push(v.applyToX(u.v[0][0], u.v[0][1], 0), v.applyToY(u.v[0][0], u.v[0][1], 0)), f.push(v.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), v.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), v.applyToX(u.i[o][0], u.i[o][1], 0), v.applyToY(u.i[o][0], u.i[o][1], 0), v.applyToX(u.v[o][0], u.v[o][1], 0), v.applyToY(u.v[o][0], u.v[o][1], 0));
                f.push(v.applyToX(u.o[o - 1][0], u.o[o - 1][1], 0), v.applyToY(u.o[o - 1][0], u.o[o - 1][1], 0), v.applyToX(u.i[0][0], u.i[0][1], 0), v.applyToY(u.i[0][0], u.i[0][1], 0), v.applyToX(u.v[0][0], u.v[0][1], 0), v.applyToY(u.v[0][0], u.v[0][1], 0)), d[P] = f, P += 1
              } y && (S += g[i].l, S += b), this.textSpans[w] ? this.textSpans[w].elem = d : this.textSpans[w] = {
              elem: d
            }, w += 1
          }
        }, CVTextElement.prototype.renderInnerContent = function() {
          var e, t, r, i, n, a;
          this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
          var s, o = this.textAnimator.renderedLetters,
            l = this.textProperty.currentData.l;
          t = l.length;
          var h, c, p = null,
            u = null,
            d = null,
            f = this.globalData.renderer;
          for (e = 0; e < t; e += 1)
            if (!l[e].n) {
              if ((s = o[e]) && (f.save(), f.ctxTransform(s.p), f.ctxOpacity(s.o)), this.fill) {
                for (s && s.fc ? p !== s.fc && (f.ctxFillStyle(s.fc), p = s.fc) : p !== this.values.fill && (p = this.values.fill, f.ctxFillStyle(this.values.fill)), i = (h = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (a = (c = h[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                this.globalData.canvasContext.closePath(), f.ctxFill()
              }
              if (this.stroke) {
                for (s && s.sw ? d !== s.sw && (d = s.sw, f.ctxLineWidth(s.sw)) : d !== this.values.sWidth && (d = this.values.sWidth, f.ctxLineWidth(this.values.sWidth)), s && s.sc ? u !== s.sc && (u = s.sc, f.ctxStrokeStyle(s.sc)) : u !== this.values.stroke && (u = this.values.stroke, f.ctxStrokeStyle(this.values.stroke)), i = (h = this.textSpans[e].elem).length, this.globalData.canvasContext.beginPath(), r = 0; r < i; r += 1)
                  for (a = (c = h[r]).length, this.globalData.canvasContext.moveTo(c[0], c[1]), n = 2; n < a; n += 6) this.globalData.canvasContext.bezierCurveTo(c[n], c[n + 1], c[n + 2], c[n + 3], c[n + 4], c[n + 5]);
                this.globalData.canvasContext.closePath(), f.ctxStroke()
              }
              s && this.globalData.renderer.restore()
            }
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
          if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
            var e = createTag("canvas");
            e.width = this.assetData.w, e.height = this.assetData.h;
            var t, r, i = e.getContext("2d"),
              n = this.img.width,
              a = this.img.height,
              s = n / a,
              o = this.assetData.w / this.assetData.h,
              l = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
            s > o && "xMidYMid slice" === l || s < o && "xMidYMid slice" !== l ? t = (r = a) * o : r = (t = n) / o, i.drawImage(this.img, (n - t) / 2, (a - r) / 2, t, r, 0, 0, this.assetData.w, this.assetData.h), this.img = e
          }
        }, CVImageElement.prototype.renderInnerContent = function() {
          this.canvasContext.drawImage(this.img, 0, 0)
        }, CVImageElement.prototype.destroy = function() {
          this.img = null
        }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
          this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh)
        }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(e) {
          return new CVShapeElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createText = function(e) {
          return new CVTextElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createImage = function(e) {
          return new CVImageElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createSolid = function(e) {
          return new CVSolidElement(e, this.globalData, this)
        }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(e) {
          1 === e[0] && 0 === e[1] && 0 === e[4] && 1 === e[5] && 0 === e[12] && 0 === e[13] || this.canvasContext.transform(e[0], e[1], e[4], e[5], e[12], e[13])
        }, CanvasRendererBase.prototype.ctxOpacity = function(e) {
          this.canvasContext.globalAlpha *= e < 0 ? 0 : e
        }, CanvasRendererBase.prototype.ctxFillStyle = function(e) {
          this.canvasContext.fillStyle = e
        }, CanvasRendererBase.prototype.ctxStrokeStyle = function(e) {
          this.canvasContext.strokeStyle = e
        }, CanvasRendererBase.prototype.ctxLineWidth = function(e) {
          this.canvasContext.lineWidth = e
        }, CanvasRendererBase.prototype.ctxLineCap = function(e) {
          this.canvasContext.lineCap = e
        }, CanvasRendererBase.prototype.ctxLineJoin = function(e) {
          this.canvasContext.lineJoin = e
        }, CanvasRendererBase.prototype.ctxMiterLimit = function(e) {
          this.canvasContext.miterLimit = e
        }, CanvasRendererBase.prototype.ctxFill = function(e) {
          this.canvasContext.fill(e)
        }, CanvasRendererBase.prototype.ctxFillRect = function(e, t, r, i) {
          this.canvasContext.fillRect(e, t, r, i)
        }, CanvasRendererBase.prototype.ctxStroke = function() {
          this.canvasContext.stroke()
        }, CanvasRendererBase.prototype.reset = function() {
          this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.save = function() {
          this.canvasContext.save()
        }, CanvasRendererBase.prototype.restore = function(e) {
          this.renderConfig.clearCanvas ? (e && (this.globalData.blendMode = "source-over"), this.contextData.restore(e)) : this.canvasContext.restore()
        }, CanvasRendererBase.prototype.configAnimation = function(e) {
          if (this.animationItem.wrapper) {
            this.animationItem.container = createTag("canvas");
            var t = this.animationItem.container.style;
            t.width = "100%", t.height = "100%";
            var r = "0px 0px 0px";
            t.transformOrigin = r, t.mozTransformOrigin = r, t.webkitTransformOrigin = r, t["-webkit-transform"] = r, t.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id)
          } else this.canvasContext = this.renderConfig.context;
          this.contextData.setContext(this.canvasContext), this.data = e, this.layers = e.layers, this.transformCanvas = {
            w: e.w,
            h: e.h,
            sx: 0,
            sy: 0,
            tx: 0,
            ty: 0
          }, this.setupGlobalData(e, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(e.layers.length), this.updateContainerSize()
        }, CanvasRendererBase.prototype.updateContainerSize = function(e, t) {
          var r, i, n, a;
          if (this.reset(), e ? (r = e, i = t, this.canvasContext.canvas.width = r, this.canvasContext.canvas.height = i) : (this.animationItem.wrapper && this.animationItem.container ? (r = this.animationItem.wrapper.offsetWidth, i = this.animationItem.wrapper.offsetHeight) : (r = this.canvasContext.canvas.width, i = this.canvasContext.canvas.height), this.canvasContext.canvas.width = r * this.renderConfig.dpr, this.canvasContext.canvas.height = i * this.renderConfig.dpr), -1 !== this.renderConfig.preserveAspectRatio.indexOf("meet") || -1 !== this.renderConfig.preserveAspectRatio.indexOf("slice")) {
            var s = this.renderConfig.preserveAspectRatio.split(" "),
              o = s[1] || "meet",
              l = s[0] || "xMidYMid",
              h = l.substr(0, 4),
              c = l.substr(4);
            n = r / i, (a = this.transformCanvas.w / this.transformCanvas.h) > n && "meet" === o || a < n && "slice" === o ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = "xMid" === h && (a < n && "meet" === o || a > n && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : "xMax" === h && (a < n && "meet" === o || a > n && "slice" === o) ? (r - this.transformCanvas.w * (i / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = "YMid" === c && (a > n && "meet" === o || a < n && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : "YMax" === c && (a > n && "meet" === o || a < n && "slice" === o) ? (i - this.transformCanvas.h * (r / this.transformCanvas.w)) * this.renderConfig.dpr : 0
          } else "none" === this.renderConfig.preserveAspectRatio ? (this.transformCanvas.sx = r / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
          this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0)
        }, CanvasRendererBase.prototype.destroy = function() {
          var e;
          for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), e = (this.layers ? this.layers.length : 0) - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
          this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0
        }, CanvasRendererBase.prototype.renderFrame = function(e, t) {
          if ((this.renderedFrame !== e || !0 !== this.renderConfig.clearCanvas || t) && !this.destroyed && -1 !== e) {
            var r;
            this.renderedFrame = e, this.globalData.frameNum = e - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || t, this.globalData.projectInterface.currentFrame = e;
            var i = this.layers.length;
            for (this.completeLayers || this.checkLayers(e), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].prepareFrame(e - this.layers[r].st);
            if (this.globalData._mdf) {
              for (!0 === this.renderConfig.clearCanvas ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), r = i - 1; r >= 0; r -= 1)(this.completeLayers || this.elements[r]) && this.elements[r].renderFrame();
              !0 !== this.renderConfig.clearCanvas && this.restore()
            }
          }
        }, CanvasRendererBase.prototype.buildItem = function(e) {
          var t = this.elements;
          if (!t[e] && 99 !== this.layers[e].ty) {
            var r = this.createItem(this.layers[e], this, this.globalData);
            t[e] = r, r.initExpressions()
          }
        }, CanvasRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, CanvasRendererBase.prototype.hide = function() {
          this.animationItem.container.style.display = "none"
        }, CanvasRendererBase.prototype.show = function() {
          this.animationItem.container.style.display = "block"
        }, CVContextData.prototype.duplicate = function() {
          var e = 2 * this._length,
            t = 0;
          for (t = this._length; t < e; t += 1) this.stack[t] = new CanvasContext;
          this._length = e
        }, CVContextData.prototype.reset = function() {
          this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1
        }, CVContextData.prototype.restore = function(e) {
          this.cArrPos -= 1;
          var t, r = this.stack[this.cArrPos],
            i = r.transform,
            n = this.cTr.props;
          for (t = 0; t < 16; t += 1) n[t] = i[t];
          if (e) {
            this.nativeContext.restore();
            var a = this.stack[this.cArrPos + 1];
            this.appliedFillStyle = a.fillStyle, this.appliedStrokeStyle = a.strokeStyle, this.appliedLineWidth = a.lineWidth, this.appliedLineCap = a.lineCap, this.appliedLineJoin = a.lineJoin, this.appliedMiterLimit = a.miterLimit
          }
          this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]), (e || -1 !== r.opacity && this.currentOpacity !== r.opacity) && (this.nativeContext.globalAlpha = r.opacity, this.currentOpacity = r.opacity), this.currentFillStyle = r.fillStyle, this.currentStrokeStyle = r.strokeStyle, this.currentLineWidth = r.lineWidth, this.currentLineCap = r.lineCap, this.currentLineJoin = r.lineJoin, this.currentMiterLimit = r.miterLimit
        }, CVContextData.prototype.save = function(e) {
          e && this.nativeContext.save();
          var t = this.cTr.props;
          this._length <= this.cArrPos && this.duplicate();
          var r, i = this.stack[this.cArrPos];
          for (r = 0; r < 16; r += 1) i.transform[r] = t[r];
          this.cArrPos += 1;
          var n = this.stack[this.cArrPos];
          n.opacity = i.opacity, n.fillStyle = i.fillStyle, n.strokeStyle = i.strokeStyle, n.lineWidth = i.lineWidth, n.lineCap = i.lineCap, n.lineJoin = i.lineJoin, n.miterLimit = i.miterLimit
        }, CVContextData.prototype.setOpacity = function(e) {
          this.stack[this.cArrPos].opacity = e
        }, CVContextData.prototype.setContext = function(e) {
          this.nativeContext = e
        }, CVContextData.prototype.fillStyle = function(e) {
          this.stack[this.cArrPos].fillStyle !== e && (this.currentFillStyle = e, this.stack[this.cArrPos].fillStyle = e)
        }, CVContextData.prototype.strokeStyle = function(e) {
          this.stack[this.cArrPos].strokeStyle !== e && (this.currentStrokeStyle = e, this.stack[this.cArrPos].strokeStyle = e)
        }, CVContextData.prototype.lineWidth = function(e) {
          this.stack[this.cArrPos].lineWidth !== e && (this.currentLineWidth = e, this.stack[this.cArrPos].lineWidth = e)
        }, CVContextData.prototype.lineCap = function(e) {
          this.stack[this.cArrPos].lineCap !== e && (this.currentLineCap = e, this.stack[this.cArrPos].lineCap = e)
        }, CVContextData.prototype.lineJoin = function(e) {
          this.stack[this.cArrPos].lineJoin !== e && (this.currentLineJoin = e, this.stack[this.cArrPos].lineJoin = e)
        }, CVContextData.prototype.miterLimit = function(e) {
          this.stack[this.cArrPos].miterLimit !== e && (this.currentMiterLimit = e, this.stack[this.cArrPos].miterLimit = e)
        }, CVContextData.prototype.transform = function(e) {
          this.transformMat.cloneFromProps(e);
          var t = this.cTr;
          this.transformMat.multiply(t), t.cloneFromProps(this.transformMat.props);
          var r = t.props;
          this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13])
        }, CVContextData.prototype.opacity = function(e) {
          var t = this.stack[this.cArrPos].opacity;
          t *= e < 0 ? 0 : e, this.stack[this.cArrPos].opacity !== t && (this.currentOpacity !== e && (this.nativeContext.globalAlpha = e, this.currentOpacity = e), this.stack[this.cArrPos].opacity = t)
        }, CVContextData.prototype.fill = function(e) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(e)
        }, CVContextData.prototype.fillRect = function(e, t, r, i) {
          this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(e, t, r, i)
        }, CVContextData.prototype.stroke = function() {
          this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke()
        }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
          var e, t = this.canvasContext;
          for (t.beginPath(), t.moveTo(0, 0), t.lineTo(this.data.w, 0), t.lineTo(this.data.w, this.data.h), t.lineTo(0, this.data.h), t.lineTo(0, 0), t.clip(), e = this.layers.length - 1; e >= 0; e -= 1)(this.completeLayers || this.elements[e]) && this.elements[e].renderFrame()
        }, CVCompElement.prototype.destroy = function() {
          var e;
          for (e = this.layers.length - 1; e >= 0; e -= 1) this.elements[e] && this.elements[e].destroy();
          this.layers = null, this.elements = null
        }, CVCompElement.prototype.createComp = function(e) {
          return new CVCompElement(e, this.globalData, this)
        }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(e) {
          return new CVCompElement(e, this.globalData, this)
        }, HBaseElement.prototype = {
          checkBlendMode: function() {},
          initRendererElement: function() {
            this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement)
          },
          createContainerElements: function() {
            this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), 0 !== this.data.bm && this.setBlendMode()
          },
          renderElement: function() {
            var e = this.transformedElement ? this.transformedElement.style : {};
            if (this.finalTransform._matMdf) {
              var t = this.finalTransform.mat.toCSS();
              e.transform = t, e.webkitTransform = t
            }
            this.finalTransform._opMdf && (e.opacity = this.finalTransform.mProp.o.v)
          },
          renderFrame: function() {
            this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1))
          },
          destroy: function() {
            this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null)
          },
          createRenderableComponents: function() {
            this.maskManager = new MaskElement(this.data, this, this.globalData)
          },
          addEffects: function() {},
          setMatte: function() {}
        }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
          var e;
          this.data.hasMask ? ((e = createNS("rect")).setAttribute("width", this.data.sw), e.setAttribute("height", this.data.sh), e.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((e = createTag("div")).style.width = this.data.sw + "px", e.style.height = this.data.sh + "px", e.style.backgroundColor = this.data.sc), this.layerElement.appendChild(e)
        }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
          var e;
          if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), e = this.svgElement;
          else {
            e = createNS("svg");
            var t = this.comp.data ? this.comp.data : this.globalData.compSize;
            e.setAttribute("width", t.w), e.setAttribute("height", t.h), e.appendChild(this.shapesContainer), this.layerElement.appendChild(e)
          }
          this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = e
        }, HShapeElement.prototype.getTransformedPoint = function(e, t) {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) t = e[r].mProps.v.applyToPointArray(t[0], t[1], 0);
          return t
        }, HShapeElement.prototype.calculateShapeBoundingBox = function(e, t) {
          var r, i, n, a, s, o = e.sh.v,
            l = e.transformers,
            h = o._length;
          if (!(h <= 1)) {
            for (r = 0; r < h - 1; r += 1) i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[r + 1]), s = this.getTransformedPoint(l, o.v[r + 1]), this.checkBounds(i, n, a, s, t);
            o.c && (i = this.getTransformedPoint(l, o.v[r]), n = this.getTransformedPoint(l, o.o[r]), a = this.getTransformedPoint(l, o.i[0]), s = this.getTransformedPoint(l, o.v[0]), this.checkBounds(i, n, a, s, t))
          }
        }, HShapeElement.prototype.checkBounds = function(e, t, r, i, n) {
          this.getBoundsOfCurve(e, t, r, i);
          var a = this.shapeBoundingBox;
          n.x = bmMin(a.left, n.x), n.xMax = bmMax(a.right, n.xMax), n.y = bmMin(a.top, n.y), n.yMax = bmMax(a.bottom, n.yMax)
        }, HShapeElement.prototype.shapeBoundingBox = {
          left: 0,
          right: 0,
          top: 0,
          bottom: 0
        }, HShapeElement.prototype.tempBoundingBox = {
          x: 0,
          xMax: 0,
          y: 0,
          yMax: 0,
          width: 0,
          height: 0
        }, HShapeElement.prototype.getBoundsOfCurve = function(e, t, r, i) {
          for (var n, a, s, o, l, h, c, p = [
              [e[0], i[0]],
              [e[1], i[1]]
            ], u = 0; u < 2; ++u) a = 6 * e[u] - 12 * t[u] + 6 * r[u], n = -3 * e[u] + 9 * t[u] - 9 * r[u] + 3 * i[u], s = 3 * t[u] - 3 * e[u], a |= 0, s |= 0, 0 == (n |= 0) && 0 === a || (0 === n ? (o = -s / a) > 0 && o < 1 && p[u].push(this.calculateF(o, e, t, r, i, u)) : (l = a * a - 4 * s * n) >= 0 && ((h = (-a + bmSqrt(l)) / (2 * n)) > 0 && h < 1 && p[u].push(this.calculateF(h, e, t, r, i, u)), (c = (-a - bmSqrt(l)) / (2 * n)) > 0 && c < 1 && p[u].push(this.calculateF(c, e, t, r, i, u))));
          this.shapeBoundingBox.left = bmMin.apply(null, p[0]), this.shapeBoundingBox.top = bmMin.apply(null, p[1]), this.shapeBoundingBox.right = bmMax.apply(null, p[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, p[1])
        }, HShapeElement.prototype.calculateF = function(e, t, r, i, n, a) {
          return bmPow(1 - e, 3) * t[a] + 3 * bmPow(1 - e, 2) * e * r[a] + 3 * (1 - e) * bmPow(e, 2) * i[a] + bmPow(e, 3) * n[a]
        }, HShapeElement.prototype.calculateBoundingBox = function(e, t) {
          var r, i = e.length;
          for (r = 0; r < i; r += 1) e[r] && e[r].sh ? this.calculateShapeBoundingBox(e[r], t) : e[r] && e[r].it ? this.calculateBoundingBox(e[r].it, t) : e[r] && e[r].style && e[r].w && this.expandStrokeBoundingBox(e[r].w, t)
        }, HShapeElement.prototype.expandStrokeBoundingBox = function(e, t) {
          var r = 0;
          if (e.keyframes) {
            for (var i = 0; i < e.keyframes.length; i += 1) {
              var n = e.keyframes[i].s;
              n > r && (r = n)
            }
            r *= e.mult
          } else r = e.v * e.mult;
          t.x -= r, t.xMax += r, t.y -= r, t.yMax += r
        }, HShapeElement.prototype.currentBoxContains = function(e) {
          return this.currentBBox.x <= e.x && this.currentBBox.y <= e.y && this.currentBBox.width + this.currentBBox.x >= e.x + e.width && this.currentBBox.height + this.currentBBox.y >= e.y + e.height
        }, HShapeElement.prototype.renderInnerContent = function() {
          if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
            var e = this.tempBoundingBox,
              t = 999999;
            if (e.x = t, e.xMax = -t, e.y = t, e.yMax = -t, this.calculateBoundingBox(this.itemsData, e), e.width = e.xMax < e.x ? 0 : e.xMax - e.x, e.height = e.yMax < e.y ? 0 : e.yMax - e.y, this.currentBoxContains(e)) return;
            var r = !1;
            if (this.currentBBox.w !== e.width && (this.currentBBox.w = e.width, this.shapeCont.setAttribute("width", e.width), r = !0), this.currentBBox.h !== e.height && (this.currentBBox.h = e.height, this.shapeCont.setAttribute("height", e.height), r = !0), r || this.currentBBox.x !== e.x || this.currentBBox.y !== e.y) {
              this.currentBBox.w = e.width, this.currentBBox.h = e.height, this.currentBBox.x = e.x, this.currentBBox.y = e.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
              var i = this.shapeCont.style,
                n = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
              i.transform = n, i.webkitTransform = n
            }
          }
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
          if (this.isMasked = this.checkMasks(), this.isMasked) {
            this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
            var e = createNS("g");
            this.maskedElement.appendChild(e), this.innerElem = e
          } else this.renderType = "html", this.innerElem = this.layerElement;
          this.checkParenting()
        }, HTextElement.prototype.buildNewText = function() {
          var e = this.textProperty.currentData;
          this.renderedLetters = createSizedArray(e.l ? e.l.length : 0);
          var t = this.innerElem.style,
            r = e.fc ? this.buildColor(e.fc) : "rgba(0,0,0,0)";
          t.fill = r, t.color = r, e.sc && (t.stroke = this.buildColor(e.sc), t.strokeWidth = e.sw + "px");
          var i, n, a = this.globalData.fontManager.getFontByName(e.f);
          if (!this.globalData.fontManager.chars)
            if (t.fontSize = e.finalSize + "px", t.lineHeight = e.finalSize + "px", a.fClass) this.innerElem.className = a.fClass;
            else {
              t.fontFamily = a.fFamily;
              var s = e.fWeight,
                o = e.fStyle;
              t.fontStyle = o, t.fontWeight = s
            } var l, h, c, p = e.l;
          n = p.length;
          var u, d = this.mHelper,
            f = "",
            m = 0;
          for (i = 0; i < n; i += 1) {
            if (this.globalData.fontManager.chars ? (this.textPaths[m] ? l = this.textPaths[m] : ((l = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), l.setAttribute("stroke-linejoin", lineJoinEnum[2]), l.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[m] ? c = (h = this.textSpans[m]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (c = createNS("svg")).appendChild(l), styleDiv(h)))) : this.isMasked ? l = this.textPaths[m] ? this.textPaths[m] : createNS("text") : this.textSpans[m] ? (h = this.textSpans[m], l = this.textPaths[m]) : (styleDiv(h = createTag("span")), styleDiv(l = createTag("span")), h.appendChild(l)), this.globalData.fontManager.chars) {
              var g, v = this.globalData.fontManager.getCharData(e.finalText[i], a.fStyle, this.globalData.fontManager.getFontByName(e.f).fFamily);
              if (g = v ? v.data : null, d.reset(), g && g.shapes && g.shapes.length && (u = g.shapes[0].it, d.scale(e.finalSize / 100, e.finalSize / 100), f = this.createPathShape(d, u), l.setAttribute("d", f)), this.isMasked) this.innerElem.appendChild(l);
              else {
                if (this.innerElem.appendChild(h), g && g.shapes) {
                  document.body.appendChild(c);
                  var y = c.getBBox();
                  c.setAttribute("width", y.width + 2), c.setAttribute("height", y.height + 2), c.setAttribute("viewBox", y.x - 1 + " " + (y.y - 1) + " " + (y.width + 2) + " " + (y.height + 2));
                  var b = c.style,
                    S = "translate(" + (y.x - 1) + "px," + (y.y - 1) + "px)";
                  b.transform = S, b.webkitTransform = S, p[i].yOffset = y.y - 1
                } else c.setAttribute("width", 1), c.setAttribute("height", 1);
                h.appendChild(c)
              }
            } else if (l.textContent = p[i].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(l);
            else {
              this.innerElem.appendChild(h);
              var x = l.style,
                E = "translate3d(0," + -e.finalSize / 1.2 + "px,0)";
              x.transform = E, x.webkitTransform = E
            }
            this.isMasked ? this.textSpans[m] = l : this.textSpans[m] = h, this.textSpans[m].style.display = "block", this.textPaths[m] = l, m += 1
          }
          for (; m < this.textSpans.length;) this.textSpans[m].style.display = "none", m += 1
        }, HTextElement.prototype.renderInnerContent = function() {
          var e;
          if (this.validateText(), this.data.singleShape) {
            if (!this._isFirstFrame && !this.lettersChangedFlag) return;
            if (this.isMasked && this.finalTransform._matMdf) {
              this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), e = this.svgElement.style;
              var t = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
              e.transform = t, e.webkitTransform = t
            }
          }
          if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
            var r, i, n, a, s, o = 0,
              l = this.textAnimator.renderedLetters,
              h = this.textProperty.currentData.l;
            for (i = h.length, r = 0; r < i; r += 1) h[r].n ? o += 1 : (a = this.textSpans[r], s = this.textPaths[r], n = l[o], o += 1, n._mdf.m && (this.isMasked ? a.setAttribute("transform", n.m) : (a.style.webkitTransform = n.m, a.style.transform = n.m)), a.style.opacity = n.o, n.sw && n._mdf.sw && s.setAttribute("stroke-width", n.sw), n.sc && n._mdf.sc && s.setAttribute("stroke", n.sc), n.fc && n._mdf.fc && (s.setAttribute("fill", n.fc), s.style.color = n.fc));
            if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
              var c = this.innerElem.getBBox();
              if (this.currentBBox.w !== c.width && (this.currentBBox.w = c.width, this.svgElement.setAttribute("width", c.width)), this.currentBBox.h !== c.height && (this.currentBBox.h = c.height, this.svgElement.setAttribute("height", c.height)), this.currentBBox.w !== c.width + 2 || this.currentBBox.h !== c.height + 2 || this.currentBBox.x !== c.x - 1 || this.currentBBox.y !== c.y - 1) {
                this.currentBBox.w = c.width + 2, this.currentBBox.h = c.height + 2, this.currentBBox.x = c.x - 1, this.currentBBox.y = c.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), e = this.svgElement.style;
                var p = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
                e.transform = p, e.webkitTransform = p
              }
            }
          }
        }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
          var e, t, r, i, n = this.comp.threeDElements.length;
          for (e = 0; e < n; e += 1)
            if ("3d" === (t = this.comp.threeDElements[e]).type) {
              r = t.perspectiveElem.style, i = t.container.style;
              var a = this.pe.v + "px",
                s = "0px 0px 0px",
                o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
              r.perspective = a, r.webkitPerspective = a, i.transformOrigin = s, i.mozTransformOrigin = s, i.webkitTransformOrigin = s, r.transform = o, r.webkitTransform = o
            }
        }, HCameraElement.prototype.createElements = function() {}, HCameraElement.prototype.hide = function() {}, HCameraElement.prototype.renderFrame = function() {
          var e, t, r = this._isFirstFrame;
          if (this.hierarchy)
            for (t = this.hierarchy.length, e = 0; e < t; e += 1) r = this.hierarchy[e].finalTransform.mProp._mdf || r;
          if (r || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
            if (this.mat.reset(), this.hierarchy)
              for (e = t = this.hierarchy.length - 1; e >= 0; e -= 1) {
                var i = this.hierarchy[e].finalTransform.mProp;
                this.mat.translate(-i.p.v[0], -i.p.v[1], i.p.v[2]), this.mat.rotateX(-i.or.v[0]).rotateY(-i.or.v[1]).rotateZ(i.or.v[2]), this.mat.rotateX(-i.rx.v).rotateY(-i.ry.v).rotateZ(i.rz.v), this.mat.scale(1 / i.s.v[0], 1 / i.s.v[1], 1 / i.s.v[2]), this.mat.translate(i.a.v[0], i.a.v[1], i.a.v[2])
              }
            if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
              var n;
              n = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
              var a = Math.sqrt(Math.pow(n[0], 2) + Math.pow(n[1], 2) + Math.pow(n[2], 2)),
                s = [n[0] / a, n[1] / a, n[2] / a],
                o = Math.sqrt(s[2] * s[2] + s[0] * s[0]),
                l = Math.atan2(s[1], o),
                h = Math.atan2(s[0], -s[2]);
              this.mat.rotateY(h).rotateX(-l)
            }
            this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
            var c = !this._prevMat.equals(this.mat);
            if ((c || this.pe._mdf) && this.comp.threeDElements) {
              var p, u, d;
              for (t = this.comp.threeDElements.length, e = 0; e < t; e += 1)
                if ("3d" === (p = this.comp.threeDElements[e]).type) {
                  if (c) {
                    var f = this.mat.toCSS();
                    (d = p.container.style).transform = f, d.webkitTransform = f
                  }
                  this.pe._mdf && ((u = p.perspectiveElem.style).perspective = this.pe.v + "px", u.webkitPerspective = this.pe.v + "px")
                } this.mat.clone(this._prevMat)
            }
          }
          this._isFirstFrame = !1
        }, HCameraElement.prototype.prepareFrame = function(e) {
          this.prepareProperties(e, !0)
        }, HCameraElement.prototype.destroy = function() {}, HCameraElement.prototype.getBaseElement = function() {
          return null
        }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
          var e = this.globalData.getAssetsPath(this.assetData),
            t = new Image;
          this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", e), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(t), t.crossOrigin = "anonymous", t.src = e, this.data.ln && this.baseElement.setAttribute("id", this.data.ln)
        }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
          for (; this.pendingElements.length;) this.pendingElements.pop().checkParenting()
        }, HybridRendererBase.prototype.appendElementInPos = function(e, t) {
          var r = e.getBaseElement();
          if (r) {
            var i = this.layers[t];
            if (i.ddd && this.supports3d) this.addTo3dContainer(r, t);
            else if (this.threeDElements) this.addTo3dContainer(r, t);
            else {
              for (var n, a, s = 0; s < t;) this.elements[s] && !0 !== this.elements[s] && this.elements[s].getBaseElement && (a = this.elements[s], n = (this.layers[s].ddd ? this.getThreeDContainerByPos(s) : a.getBaseElement()) || n), s += 1;
              n ? i.ddd && this.supports3d || this.layerElement.insertBefore(r, n) : i.ddd && this.supports3d || this.layerElement.appendChild(r)
            }
          }
        }, HybridRendererBase.prototype.createShape = function(e) {
          return this.supports3d ? new HShapeElement(e, this.globalData, this) : new SVGShapeElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createText = function(e) {
          return this.supports3d ? new HTextElement(e, this.globalData, this) : new SVGTextLottieElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createCamera = function(e) {
          return this.camera = new HCameraElement(e, this.globalData, this), this.camera
        }, HybridRendererBase.prototype.createImage = function(e) {
          return this.supports3d ? new HImageElement(e, this.globalData, this) : new IImageElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createSolid = function(e) {
          return this.supports3d ? new HSolidElement(e, this.globalData, this) : new ISolidElement(e, this.globalData, this)
        }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(e) {
          for (var t = 0, r = this.threeDElements.length; t < r;) {
            if (this.threeDElements[t].startPos <= e && this.threeDElements[t].endPos >= e) return this.threeDElements[t].perspectiveElem;
            t += 1
          }
          return null
        }, HybridRendererBase.prototype.createThreeDContainer = function(e, t) {
          var r, i, n = createTag("div");
          styleDiv(n);
          var a = createTag("div");
          if (styleDiv(a), "3d" === t) {
            (r = n.style).width = this.globalData.compSize.w + "px", r.height = this.globalData.compSize.h + "px";
            var s = "50% 50%";
            r.webkitTransformOrigin = s, r.mozTransformOrigin = s, r.transformOrigin = s;
            var o = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
            (i = a.style).transform = o, i.webkitTransform = o
          }
          n.appendChild(a);
          var l = {
            container: a,
            perspectiveElem: n,
            startPos: e,
            endPos: e,
            type: t
          };
          return this.threeDElements.push(l), l
        }, HybridRendererBase.prototype.build3dContainers = function() {
          var e, t, r = this.layers.length,
            i = "";
          for (e = 0; e < r; e += 1) this.layers[e].ddd && 3 !== this.layers[e].ty ? ("3d" !== i && (i = "3d", t = this.createThreeDContainer(e, "3d")), t.endPos = Math.max(t.endPos, e)) : ("2d" !== i && (i = "2d", t = this.createThreeDContainer(e, "2d")), t.endPos = Math.max(t.endPos, e));
          for (e = (r = this.threeDElements.length) - 1; e >= 0; e -= 1) this.resizerElem.appendChild(this.threeDElements[e].perspectiveElem)
        }, HybridRendererBase.prototype.addTo3dContainer = function(e, t) {
          for (var r = 0, i = this.threeDElements.length; r < i;) {
            if (t <= this.threeDElements[r].endPos) {
              for (var n, a = this.threeDElements[r].startPos; a < t;) this.elements[a] && this.elements[a].getBaseElement && (n = this.elements[a].getBaseElement()), a += 1;
              n ? this.threeDElements[r].container.insertBefore(e, n) : this.threeDElements[r].container.appendChild(e);
              break
            }
            r += 1
          }
        }, HybridRendererBase.prototype.configAnimation = function(e) {
          var t = createTag("div"),
            r = this.animationItem.wrapper,
            i = t.style;
          i.width = e.w + "px", i.height = e.h + "px", this.resizerElem = t, styleDiv(t), i.transformStyle = "flat", i.mozTransformStyle = "flat", i.webkitTransformStyle = "flat", this.renderConfig.className && t.setAttribute("class", this.renderConfig.className), r.appendChild(t), i.overflow = "hidden";
          var n = createNS("svg");
          n.setAttribute("width", "1"), n.setAttribute("height", "1"), styleDiv(n), this.resizerElem.appendChild(n);
          var a = createNS("defs");
          n.appendChild(a), this.data = e, this.setupGlobalData(e, n), this.globalData.defs = a, this.layers = e.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize()
        }, HybridRendererBase.prototype.destroy = function() {
          var e;
          this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
          var t = this.layers ? this.layers.length : 0;
          for (e = 0; e < t; e += 1) this.elements[e] && this.elements[e].destroy && this.elements[e].destroy();
          this.elements.length = 0, this.destroyed = !0, this.animationItem = null
        }, HybridRendererBase.prototype.updateContainerSize = function() {
          var e, t, r, i, n = this.animationItem.wrapper.offsetWidth,
            a = this.animationItem.wrapper.offsetHeight,
            s = n / a;
          this.globalData.compSize.w / this.globalData.compSize.h > s ? (e = n / this.globalData.compSize.w, t = n / this.globalData.compSize.w, r = 0, i = (a - this.globalData.compSize.h * (n / this.globalData.compSize.w)) / 2) : (e = a / this.globalData.compSize.h, t = a / this.globalData.compSize.h, r = (n - this.globalData.compSize.w * (a / this.globalData.compSize.h)) / 2, i = 0);
          var o = this.resizerElem.style;
          o.webkitTransform = "matrix3d(" + e + ",0,0,0,0," + t + ",0,0,0,0,1,0," + r + "," + i + ",0,1)", o.transform = o.webkitTransform
        }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
          this.resizerElem.style.display = "none"
        }, HybridRendererBase.prototype.show = function() {
          this.resizerElem.style.display = "block"
        }, HybridRendererBase.prototype.initItems = function() {
          if (this.buildAllItems(), this.camera) this.camera.setup();
          else {
            var e, t = this.globalData.compSize.w,
              r = this.globalData.compSize.h,
              i = this.threeDElements.length;
            for (e = 0; e < i; e += 1) {
              var n = this.threeDElements[e].perspectiveElem.style;
              n.webkitPerspective = Math.sqrt(Math.pow(t, 2) + Math.pow(r, 2)) + "px", n.perspective = n.webkitPerspective
            }
          }
        }, HybridRendererBase.prototype.searchExtraCompositions = function(e) {
          var t, r = e.length,
            i = createTag("div");
          for (t = 0; t < r; t += 1)
            if (e[t].xt) {
              var n = this.createComp(e[t], i, this.globalData.comp, null);
              n.initExpressions(), this.globalData.projectInterface.registerComposition(n)
            }
        }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
          this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement
        }, HCompElement.prototype.addTo3dContainer = function(e, t) {
          for (var r, i = 0; i < t;) this.elements[i] && this.elements[i].getBaseElement && (r = this.elements[i].getBaseElement()), i += 1;
          r ? this.layerElement.insertBefore(e, r) : this.layerElement.appendChild(e)
        }, HCompElement.prototype.createComp = function(e) {
          return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
        }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(e) {
          return this.supports3d ? new HCompElement(e, this.globalData, this) : new SVGCompElement(e, this.globalData, this)
        };
        var CompExpressionInterface = function(e) {
          function t(t) {
            for (var r = 0, i = e.layers.length; r < i;) {
              if (e.layers[r].nm === t || e.layers[r].ind === t) return e.elements[r].layerInterface;
              r += 1
            }
            return null
          }
          return Object.defineProperty(t, "_name", {
            value: e.data.nm
          }), t.layer = t, t.pixelAspect = 1, t.height = e.data.h || e.globalData.compSize.h, t.width = e.data.w || e.globalData.compSize.w, t.pixelAspect = 1, t.frameDuration = 1 / e.globalData.frameRate, t.displayStartTime = 0, t.numLayers = e.layers.length, t
        };

        function _typeof$2(e) {
          return _typeof$2 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$2(e)
        }

        function seedRandom(e, t) {
          var r, i = this,
            n = 256,
            a = "random",
            s = t.pow(n, 6),
            o = t.pow(2, 52),
            l = 2 * o,
            h = 255;

          function c(e) {
            var t, r = e.length,
              i = this,
              a = 0,
              s = i.i = i.j = 0,
              o = i.S = [];
            for (r || (e = [r++]); a < n;) o[a] = a++;
            for (a = 0; a < n; a++) o[a] = o[s = h & s + e[a % r] + (t = o[a])], o[s] = t;
            i.g = function(e) {
              for (var t, r = 0, a = i.i, s = i.j, o = i.S; e--;) t = o[a = h & a + 1], r = r * n + o[h & (o[a] = o[s = h & s + t]) + (o[s] = t)];
              return i.i = a, i.j = s, r
            }
          }

          function p(e, t) {
            return t.i = e.i, t.j = e.j, t.S = e.S.slice(), t
          }

          function u(e, t) {
            var r, i = [],
              n = _typeof$2(e);
            if (t && "object" == n)
              for (r in e) try {
                i.push(u(e[r], t - 1))
              } catch (e) {}
            return i.length ? i : "string" == n ? e : e + "\0"
          }

          function d(e, t) {
            for (var r, i = e + "", n = 0; n < i.length;) t[h & n] = h & (r ^= 19 * t[h & n]) + i.charCodeAt(n++);
            return f(t)
          }

          function f(e) {
            return String.fromCharCode.apply(0, e)
          }
          t["seed" + a] = function(h, m, g) {
            var v = [],
              y = d(u((m = !0 === m ? {
                entropy: !0
              } : m || {}).entropy ? [h, f(e)] : null === h ? function() {
                try {
                  r;
                  var t = new Uint8Array(n);
                  return (i.crypto || i.msCrypto).getRandomValues(t), f(t)
                } catch (t) {
                  var a = i.navigator,
                    s = a && a.plugins;
                  return [+new Date, i, s, i.screen, f(e)]
                }
              }() : h, 3), v),
              b = new c(v),
              S = function() {
                for (var e = b.g(6), t = s, r = 0; e < o;) e = (e + r) * n, t *= n, r = b.g(1);
                for (; e >= l;) e /= 2, t /= 2, r >>>= 1;
                return (e + r) / t
              };
            return S.int32 = function() {
              return 0 | b.g(4)
            }, S.quick = function() {
              return b.g(4) / 4294967296
            }, S.double = S, d(f(b.S), e), (m.pass || g || function(e, r, i, n) {
              return n && (n.S && p(n, b), e.state = function() {
                return p(b, {})
              }), i ? (t[a] = e, r) : e
            })(S, y, "global" in m ? m.global : this == t, m.state)
          }, d(t.random(), e)
        }

        function initialize$2(e) {
          seedRandom([], e)
        }
        var propTypes = {
          SHAPE: "shape"
        };

        function _typeof$1(e) {
          return _typeof$1 = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof$1(e)
        }
        var ExpressionManager = function() {
            var ob = {},
              Math = BMMath,
              window = null,
              document = null,
              XMLHttpRequest = null,
              fetch = null,
              frames = null,
              _lottieGlobal = {};

            function resetFrame() {
              _lottieGlobal = {}
            }

            function $bm_isInstanceOfArray(e) {
              return e.constructor === Array || e.constructor === Float32Array
            }

            function isNumerable(e, t) {
              return "number" === e || t instanceof Number || "boolean" === e || "string" === e
            }

            function $bm_neg(e) {
              var t = _typeof$1(e);
              if ("number" === t || e instanceof Number || "boolean" === t) return -e;
              if ($bm_isInstanceOfArray(e)) {
                var r, i = e.length,
                  n = [];
                for (r = 0; r < i; r += 1) n[r] = -e[r];
                return n
              }
              return e.propType ? e.v : -e
            }
            initialize$2(BMMath);
            var easeInBez = BezierFactory.getBezierEasing(.333, 0, .833, .833, "easeIn").get,
              easeOutBez = BezierFactory.getBezierEasing(.167, .167, .667, 1, "easeOut").get,
              easeInOutBez = BezierFactory.getBezierEasing(.33, 0, .667, 1, "easeInOut").get;

            function sum(e, t) {
              var r = _typeof$1(e),
                i = _typeof$1(t);
              if (isNumerable(r, e) && isNumerable(i, t) || "string" === r || "string" === i) return e + t;
              if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0))[0] += t, e;
              if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e + t[0], t;
              if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                for (var n = 0, a = e.length, s = t.length, o = []; n < a || n < s;)("number" == typeof e[n] || e[n] instanceof Number) && ("number" == typeof t[n] || t[n] instanceof Number) ? o[n] = e[n] + t[n] : o[n] = void 0 === t[n] ? e[n] : e[n] || t[n], n += 1;
                return o
              }
              return 0
            }
            var add = sum;

            function sub(e, t) {
              var r = _typeof$1(e),
                i = _typeof$1(t);
              if (isNumerable(r, e) && isNumerable(i, t)) return "string" === r && (e = parseInt(e, 10)), "string" === i && (t = parseInt(t, 10)), e - t;
              if ($bm_isInstanceOfArray(e) && isNumerable(i, t)) return (e = e.slice(0))[0] -= t, e;
              if (isNumerable(r, e) && $bm_isInstanceOfArray(t)) return (t = t.slice(0))[0] = e - t[0], t;
              if ($bm_isInstanceOfArray(e) && $bm_isInstanceOfArray(t)) {
                for (var n = 0, a = e.length, s = t.length, o = []; n < a || n < s;)("number" == typeof e[n] || e[n] instanceof Number) && ("number" == typeof t[n] || t[n] instanceof Number) ? o[n] = e[n] - t[n] : o[n] = void 0 === t[n] ? e[n] : e[n] || t[n], n += 1;
                return o
              }
              return 0
            }

            function mul(e, t) {
              var r, i, n, a = _typeof$1(e),
                s = _typeof$1(t);
              if (isNumerable(a, e) && isNumerable(s, t)) return e * t;
              if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e[i] * t;
                return r
              }
              if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e * t[i];
                return r
              }
              return 0
            }

            function div(e, t) {
              var r, i, n, a = _typeof$1(e),
                s = _typeof$1(t);
              if (isNumerable(a, e) && isNumerable(s, t)) return e / t;
              if ($bm_isInstanceOfArray(e) && isNumerable(s, t)) {
                for (n = e.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e[i] / t;
                return r
              }
              if (isNumerable(a, e) && $bm_isInstanceOfArray(t)) {
                for (n = t.length, r = createTypedArray("float32", n), i = 0; i < n; i += 1) r[i] = e / t[i];
                return r
              }
              return 0
            }

            function mod(e, t) {
              return "string" == typeof e && (e = parseInt(e, 10)), "string" == typeof t && (t = parseInt(t, 10)), e % t
            }
            var $bm_sum = sum,
              $bm_sub = sub,
              $bm_mul = mul,
              $bm_div = div,
              $bm_mod = mod;

            function clamp(e, t, r) {
              if (t > r) {
                var i = r;
                r = t, t = i
              }
              return Math.min(Math.max(e, t), r)
            }

            function radiansToDegrees(e) {
              return e / degToRads
            }
            var radians_to_degrees = radiansToDegrees;

            function degreesToRadians(e) {
              return e * degToRads
            }
            var degrees_to_radians = radiansToDegrees,
              helperLengthArray = [0, 0, 0, 0, 0, 0];

            function length(e, t) {
              if ("number" == typeof e || e instanceof Number) return t = t || 0, Math.abs(e - t);
              var r;
              t || (t = helperLengthArray);
              var i = Math.min(e.length, t.length),
                n = 0;
              for (r = 0; r < i; r += 1) n += Math.pow(t[r] - e[r], 2);
              return Math.sqrt(n)
            }

            function normalize(e) {
              return div(e, length(e))
            }

            function rgbToHsl(e) {
              var t, r, i = e[0],
                n = e[1],
                a = e[2],
                s = Math.max(i, n, a),
                o = Math.min(i, n, a),
                l = (s + o) / 2;
              if (s === o) t = 0, r = 0;
              else {
                var h = s - o;
                switch (r = l > .5 ? h / (2 - s - o) : h / (s + o), s) {
                  case i:
                    t = (n - a) / h + (n < a ? 6 : 0);
                    break;
                  case n:
                    t = (a - i) / h + 2;
                    break;
                  case a:
                    t = (i - n) / h + 4
                }
                t /= 6
              }
              return [t, r, l, e[3]]
            }

            function hue2rgb(e, t, r) {
              return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
            }

            function hslToRgb(e) {
              var t, r, i, n = e[0],
                a = e[1],
                s = e[2];
              if (0 === a) t = s, i = s, r = s;
              else {
                var o = s < .5 ? s * (1 + a) : s + a - s * a,
                  l = 2 * s - o;
                t = hue2rgb(l, o, n + 1 / 3), r = hue2rgb(l, o, n), i = hue2rgb(l, o, n - 1 / 3)
              }
              return [t, r, i, e[3]]
            }

            function linear(e, t, r, i, n) {
              if (void 0 !== i && void 0 !== n || (i = t, n = r, t = 0, r = 1), r < t) {
                var a = r;
                r = t, t = a
              }
              if (e <= t) return i;
              if (e >= r) return n;
              var s, o = r === t ? 0 : (e - t) / (r - t);
              if (!i.length) return i + (n - i) * o;
              var l = i.length,
                h = createTypedArray("float32", l);
              for (s = 0; s < l; s += 1) h[s] = i[s] + (n[s] - i[s]) * o;
              return h
            }

            function random(e, t) {
              if (void 0 === t && (void 0 === e ? (e = 0, t = 1) : (t = e, e = void 0)), t.length) {
                var r, i = t.length;
                e || (e = createTypedArray("float32", i));
                var n = createTypedArray("float32", i),
                  a = BMMath.random();
                for (r = 0; r < i; r += 1) n[r] = e[r] + a * (t[r] - e[r]);
                return n
              }
              return void 0 === e && (e = 0), e + BMMath.random() * (t - e)
            }

            function createPath(e, t, r, i) {
              var n, a = e.length,
                s = shapePool.newElement();
              s.setPathData(!!i, a);
              var o, l, h = [0, 0];
              for (n = 0; n < a; n += 1) o = t && t[n] ? t[n] : h, l = r && r[n] ? r[n] : h, s.setTripleAt(e[n][0], e[n][1], l[0] + e[n][0], l[1] + e[n][1], o[0] + e[n][0], o[1] + e[n][1], n, !0);
              return s
            }

            function initiateExpression(elem, data, property) {
              function noOp(e) {
                return e
              }
              if (!elem.globalData.renderConfig.runExpressions) return noOp;
              var val = data.x,
                needsVelocity = /velocity(?![\w\d])/.test(val),
                _needsRandom = -1 !== val.indexOf("random"),
                elemType = elem.data.ty,
                transform, $bm_transform, content, effect, thisProperty = property;
              thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", {
                get: function() {
                  return thisProperty.v
                }
              }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
              var inPoint = elem.data.ip / elem.comp.globalData.frameRate,
                outPoint = elem.data.op / elem.comp.globalData.frameRate,
                width = elem.data.sw ? elem.data.sw : 0,
                height = elem.data.sh ? elem.data.sh : 0,
                name = elem.data.nm,
                loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0],
                numKeys = property.kf ? data.k.length : 0,
                active = !this.data || !0 !== this.data.hd,
                wiggle = function(e, t) {
                  var r, i, n = this.pv.length ? this.pv.length : 1,
                    a = createTypedArray("float32", n),
                    s = Math.floor(5 * time);
                  for (r = 0, i = 0; r < s;) {
                    for (i = 0; i < n; i += 1) a[i] += -t + 2 * t * BMMath.random();
                    r += 1
                  }
                  var o = 5 * time,
                    l = o - Math.floor(o),
                    h = createTypedArray("float32", n);
                  if (n > 1) {
                    for (i = 0; i < n; i += 1) h[i] = this.pv[i] + a[i] + (-t + 2 * t * BMMath.random()) * l;
                    return h
                  }
                  return this.pv + a[0] + (-t + 2 * t * BMMath.random()) * l
                }.bind(this);

              function loopInDuration(e, t) {
                return loopIn(e, t, !0)
              }

              function loopOutDuration(e, t) {
                return loopOut(e, t, !0)
              }
              thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
              var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface),
                time, velocity, value, text, textIndex, textTotal, selectorValue;

              function lookAt(e, t) {
                var r = [t[0] - e[0], t[1] - e[1], t[2] - e[2]],
                  i = Math.atan2(r[0], Math.sqrt(r[1] * r[1] + r[2] * r[2])) / degToRads;
                return [-Math.atan2(r[1], r[2]) / degToRads, i, 0]
              }

              function easeOut(e, t, r, i, n) {
                return applyEase(easeOutBez, e, t, r, i, n)
              }

              function easeIn(e, t, r, i, n) {
                return applyEase(easeInBez, e, t, r, i, n)
              }

              function ease(e, t, r, i, n) {
                return applyEase(easeInOutBez, e, t, r, i, n)
              }

              function applyEase(e, t, r, i, n, a) {
                void 0 === n ? (n = r, a = i) : t = (t - r) / (i - r), t > 1 ? t = 1 : t < 0 && (t = 0);
                var s = e(t);
                if ($bm_isInstanceOfArray(n)) {
                  var o, l = n.length,
                    h = createTypedArray("float32", l);
                  for (o = 0; o < l; o += 1) h[o] = (a[o] - n[o]) * s + n[o];
                  return h
                }
                return (a - n) * s + n
              }

              function nearestKey(e) {
                var t, r, i, n = data.k.length;
                if (data.k.length && "number" != typeof data.k[0])
                  if (r = -1, (e *= elem.comp.globalData.frameRate) < data.k[0].t) r = 1, i = data.k[0].t;
                  else {
                    for (t = 0; t < n - 1; t += 1) {
                      if (e === data.k[t].t) {
                        r = t + 1, i = data.k[t].t;
                        break
                      }
                      if (e > data.k[t].t && e < data.k[t + 1].t) {
                        e - data.k[t].t > data.k[t + 1].t - e ? (r = t + 2, i = data.k[t + 1].t) : (r = t + 1, i = data.k[t].t);
                        break
                      }
                    } - 1 === r && (r = t + 1, i = data.k[t].t)
                  }
                else r = 0, i = 0;
                var a = {};
                return a.index = r, a.time = i / elem.comp.globalData.frameRate, a
              }

              function key(e) {
                var t, r, i;
                if (!data.k.length || "number" == typeof data.k[0]) throw new Error("The property has no keyframe at index " + e);
                e -= 1, t = {
                  time: data.k[e].t / elem.comp.globalData.frameRate,
                  value: []
                };
                var n = Object.prototype.hasOwnProperty.call(data.k[e], "s") ? data.k[e].s : data.k[e - 1].e;
                for (i = n.length, r = 0; r < i; r += 1) t[r] = n[r], t.value[r] = n[r];
                return t
              }

              function framesToTime(e, t) {
                return t || (t = elem.comp.globalData.frameRate), e / t
              }

              function timeToFrames(e, t) {
                return e || 0 === e || (e = time), t || (t = elem.comp.globalData.frameRate), e * t
              }

              function seedRandom(e) {
                BMMath.seedrandom(randSeed + e)
              }

              function sourceRectAtTime() {
                return elem.sourceRectAtTime()
              }

              function substring(e, t) {
                return "string" == typeof value ? void 0 === t ? value.substring(e) : value.substring(e, t) : ""
              }

              function substr(e, t) {
                return "string" == typeof value ? void 0 === t ? value.substr(e) : value.substr(e, t) : ""
              }

              function posterizeTime(e) {
                time = 0 === e ? 0 : Math.floor(time * e) / e, value = valueAtTime(time)
              }
              var index = elem.data.ind,
                hasParent = !(!elem.hierarchy || !elem.hierarchy.length),
                parent, randSeed = Math.floor(1e6 * Math.random()),
                globalData = elem.globalData;

              function executeExpression(e) {
                return value = e, this.frameExpressionId === elem.globalData.frameId && "textSelector" !== this.propType ? value : ("textSelector" === this.propType && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), 4 !== elemType || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), (hasParent = !(!elem.hierarchy || !elem.hierarchy.length)) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt)
              }
              return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression
            }
            return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob
          }(),
          Expressions = function() {
            var e = {
              initExpressions: function(e) {
                var t = 0,
                  r = [];
                e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = function() {
                  t += 1
                }, e.renderer.globalData.popExpression = function() {
                  0 == (t -= 1) && function() {
                    var e, t = r.length;
                    for (e = 0; e < t; e += 1) r[e].release();
                    r.length = 0
                  }()
                }, e.renderer.globalData.registerExpressionProperty = function(e) {
                  -1 === r.indexOf(e) && r.push(e)
                }
              }
            };
            return e.resetFrame = ExpressionManager.resetFrame, e
          }(),
          MaskManagerInterface = function() {
            function e(e, t) {
              this._mask = e, this._data = t
            }
            return Object.defineProperty(e.prototype, "maskPath", {
                get: function() {
                  return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop
                }
              }), Object.defineProperty(e.prototype, "maskOpacity", {
                get: function() {
                  return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v
                }
              }),
              function(t) {
                var r, i = createSizedArray(t.viewData.length),
                  n = t.viewData.length;
                for (r = 0; r < n; r += 1) i[r] = new e(t.viewData[r], t.masksProperties[r]);
                return function(e) {
                  for (r = 0; r < n;) {
                    if (t.masksProperties[r].nm === e) return i[r];
                    r += 1
                  }
                  return null
                }
              }
          }(),
          ExpressionPropertyInterface = function() {
            var e = {
                pv: 0,
                v: 0,
                mult: 1
              },
              t = {
                pv: [0, 0, 0],
                v: [0, 0, 0],
                mult: 1
              };

            function r(e, t, r) {
              Object.defineProperty(e, "velocity", {
                get: function() {
                  return t.getVelocityAtTime(t.comp.currentFrame)
                }
              }), e.numKeys = t.keyframes ? t.keyframes.length : 0, e.key = function(i) {
                if (!e.numKeys) return 0;
                var n;
                n = "s" in t.keyframes[i - 1] ? t.keyframes[i - 1].s : "e" in t.keyframes[i - 2] ? t.keyframes[i - 2].e : t.keyframes[i - 2].s;
                var a = "unidimensional" === r ? new Number(n) : Object.assign({}, n);
                return a.time = t.keyframes[i - 1].t / t.elem.comp.globalData.frameRate, a.value = "unidimensional" === r ? n[0] : n, a
              }, e.valueAtTime = t.getValueAtTime, e.speedAtTime = t.getSpeedAtTime, e.velocityAtTime = t.getVelocityAtTime, e.propertyGroup = t.propertyGroup
            }

            function i() {
              return e
            }
            return function(n) {
              return n ? "unidimensional" === n.propType ? function(t) {
                t && "pv" in t || (t = e);
                var i = 1 / t.mult,
                  n = t.pv * i,
                  a = new Number(n);
                return a.value = n, r(a, t, "unidimensional"),
                  function() {
                    return t.k && t.getValue(), n = t.v * i, a.value !== n && ((a = new Number(n)).value = n, r(a, t, "unidimensional")), a
                  }
              }(n) : function(e) {
                e && "pv" in e || (e = t);
                var i = 1 / e.mult,
                  n = e.data && e.data.l || e.pv.length,
                  a = createTypedArray("float32", n),
                  s = createTypedArray("float32", n);
                return a.value = s, r(a, e, "multidimensional"),
                  function() {
                    e.k && e.getValue();
                    for (var t = 0; t < n; t += 1) s[t] = e.v[t] * i, a[t] = s[t];
                    return a
                  }
              }(n) : i
            }
          }(),
          TransformExpressionInterface = function(e) {
            function t(e) {
              switch (e) {
                case "scale":
                case "Scale":
                case "ADBE Scale":
                case 6:
                  return t.scale;
                case "rotation":
                case "Rotation":
                case "ADBE Rotation":
                case "ADBE Rotate Z":
                case 10:
                  return t.rotation;
                case "ADBE Rotate X":
                  return t.xRotation;
                case "ADBE Rotate Y":
                  return t.yRotation;
                case "position":
                case "Position":
                case "ADBE Position":
                case 2:
                  return t.position;
                case "ADBE Position_0":
                  return t.xPosition;
                case "ADBE Position_1":
                  return t.yPosition;
                case "ADBE Position_2":
                  return t.zPosition;
                case "anchorPoint":
                case "AnchorPoint":
                case "Anchor Point":
                case "ADBE AnchorPoint":
                case 1:
                  return t.anchorPoint;
                case "opacity":
                case "Opacity":
                case 11:
                  return t.opacity;
                default:
                  return null
              }
            }
            var r, i, n, a;
            return Object.defineProperty(t, "rotation", {
              get: ExpressionPropertyInterface(e.r || e.rz)
            }), Object.defineProperty(t, "zRotation", {
              get: ExpressionPropertyInterface(e.rz || e.r)
            }), Object.defineProperty(t, "xRotation", {
              get: ExpressionPropertyInterface(e.rx)
            }), Object.defineProperty(t, "yRotation", {
              get: ExpressionPropertyInterface(e.ry)
            }), Object.defineProperty(t, "scale", {
              get: ExpressionPropertyInterface(e.s)
            }), e.p ? a = ExpressionPropertyInterface(e.p) : (r = ExpressionPropertyInterface(e.px), i = ExpressionPropertyInterface(e.py), e.pz && (n = ExpressionPropertyInterface(e.pz))), Object.defineProperty(t, "position", {
              get: function() {
                return e.p ? a() : [r(), i(), n ? n() : 0]
              }
            }), Object.defineProperty(t, "xPosition", {
              get: ExpressionPropertyInterface(e.px)
            }), Object.defineProperty(t, "yPosition", {
              get: ExpressionPropertyInterface(e.py)
            }), Object.defineProperty(t, "zPosition", {
              get: ExpressionPropertyInterface(e.pz)
            }), Object.defineProperty(t, "anchorPoint", {
              get: ExpressionPropertyInterface(e.a)
            }), Object.defineProperty(t, "opacity", {
              get: ExpressionPropertyInterface(e.o)
            }), Object.defineProperty(t, "skew", {
              get: ExpressionPropertyInterface(e.sk)
            }), Object.defineProperty(t, "skewAxis", {
              get: ExpressionPropertyInterface(e.sa)
            }), Object.defineProperty(t, "orientation", {
              get: ExpressionPropertyInterface(e.or)
            }), t
          },
          LayerExpressionInterface = function() {
            function e(e) {
              var t = new Matrix;
              return void 0 !== e ? this._elem.finalTransform.mProp.getValueAtTime(e).clone(t) : this._elem.finalTransform.mProp.applyToMatrix(t), t
            }

            function t(e, t) {
              var r = this.getMatrix(t);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.applyPoint(r, e)
            }

            function r(e, t) {
              var r = this.getMatrix(t);
              return this.applyPoint(r, e)
            }

            function i(e, t) {
              var r = this.getMatrix(t);
              return r.props[12] = 0, r.props[13] = 0, r.props[14] = 0, this.invertPoint(r, e)
            }

            function n(e, t) {
              var r = this.getMatrix(t);
              return this.invertPoint(r, e)
            }

            function a(e, t) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)
              }
              return e.applyToPointArray(t[0], t[1], t[2] || 0)
            }

            function s(e, t) {
              if (this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(e)
              }
              return e.inversePoint(t)
            }

            function o(e) {
              var t = new Matrix;
              if (t.reset(), this._elem.finalTransform.mProp.applyToMatrix(t), this._elem.hierarchy && this._elem.hierarchy.length) {
                var r, i = this._elem.hierarchy.length;
                for (r = 0; r < i; r += 1) this._elem.hierarchy[r].finalTransform.mProp.applyToMatrix(t);
                return t.inversePoint(e)
              }
              return t.inversePoint(e)
            }

            function l() {
              return [1, 1, 1, 1]
            }
            return function(h) {
              var c;

              function p(e) {
                switch (e) {
                  case "ADBE Root Vectors Group":
                  case "Contents":
                  case 2:
                    return p.shapeInterface;
                  case 1:
                  case 6:
                  case "Transform":
                  case "transform":
                  case "ADBE Transform Group":
                    return c;
                  case 4:
                  case "ADBE Effect Parade":
                  case "effects":
                  case "Effects":
                    return p.effect;
                  case "ADBE Text Properties":
                    return p.textInterface;
                  default:
                    return null
                }
              }
              p.getMatrix = e, p.invertPoint = s, p.applyPoint = a, p.toWorld = r, p.toWorldVec = t, p.fromWorld = n, p.fromWorldVec = i, p.toComp = r, p.fromComp = o, p.sampleImage = l, p.sourceRectAtTime = h.sourceRectAtTime.bind(h), p._elem = h;
              var u = getDescriptor(c = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
              return Object.defineProperties(p, {
                hasParent: {
                  get: function() {
                    return h.hierarchy.length
                  }
                },
                parent: {
                  get: function() {
                    return h.hierarchy[0].layerInterface
                  }
                },
                rotation: getDescriptor(c, "rotation"),
                scale: getDescriptor(c, "scale"),
                position: getDescriptor(c, "position"),
                opacity: getDescriptor(c, "opacity"),
                anchorPoint: u,
                anchor_point: u,
                transform: {
                  get: function() {
                    return c
                  }
                },
                active: {
                  get: function() {
                    return h.isInRange
                  }
                }
              }), p.startTime = h.data.st, p.index = h.data.ind, p.source = h.data.refId, p.height = 0 === h.data.ty ? h.data.h : 100, p.width = 0 === h.data.ty ? h.data.w : 100, p.inPoint = h.data.ip / h.comp.globalData.frameRate, p.outPoint = h.data.op / h.comp.globalData.frameRate, p._name = h.data.nm, p.registerMaskInterface = function(e) {
                p.mask = new MaskManagerInterface(e, h)
              }, p.registerEffectsInterface = function(e) {
                p.effect = e
              }, p
            }
          }(),
          propertyGroupFactory = function(e, t) {
            return function(r) {
              return (r = void 0 === r ? 1 : r) <= 0 ? e : t(r - 1)
            }
          },
          PropertyInterface = function(e, t) {
            var r = {
              _name: e
            };
            return function(e) {
              return (e = void 0 === e ? 1 : e) <= 0 ? r : t(e - 1)
            }
          },
          EffectsExpressionInterface = function() {
            function e(r, i, n, a) {
              function s(e) {
                for (var t = r.ef, i = 0, n = t.length; i < n;) {
                  if (e === t[i].nm || e === t[i].mn || e === t[i].ix) return 5 === t[i].ty ? h[i] : h[i]();
                  i += 1
                }
                throw new Error
              }
              var o, l = propertyGroupFactory(s, n),
                h = [],
                c = r.ef.length;
              for (o = 0; o < c; o += 1) 5 === r.ef[o].ty ? h.push(e(r.ef[o], i.effectElements[o], i.effectElements[o].propertyGroup, a)) : h.push(t(i.effectElements[o], r.ef[o].ty, a, l));
              return "ADBE Color Control" === r.mn && Object.defineProperty(s, "color", {
                get: function() {
                  return h[0]()
                }
              }), Object.defineProperties(s, {
                numProperties: {
                  get: function() {
                    return r.np
                  }
                },
                _name: {
                  value: r.nm
                },
                propertyGroup: {
                  value: l
                }
              }), s.enabled = 0 !== r.en, s.active = s.enabled, s
            }

            function t(e, t, r, i) {
              var n = ExpressionPropertyInterface(e.p);
              return e.p.setGroupProperty && e.p.setGroupProperty(PropertyInterface("", i)),
                function() {
                  return 10 === t ? r.comp.compInterface(e.p.v) : n()
                }
            }
            return {
              createEffectsInterface: function(t, r) {
                if (t.effectsManager) {
                  var i, n = [],
                    a = t.data.ef,
                    s = t.effectsManager.effectElements.length;
                  for (i = 0; i < s; i += 1) n.push(e(a[i], t.effectsManager.effectElements[i], r, t));
                  var o = t.data.ef || [],
                    l = function(e) {
                      for (i = 0, s = o.length; i < s;) {
                        if (e === o[i].nm || e === o[i].mn || e === o[i].ix) return n[i];
                        i += 1
                      }
                      return null
                    };
                  return Object.defineProperty(l, "numProperties", {
                    get: function() {
                      return o.length
                    }
                  }), l
                }
                return null
              }
            }
          }(),
          ShapePathInterface = function(e, t, r) {
            var i = t.sh;

            function n(e) {
              return "Shape" === e || "shape" === e || "Path" === e || "path" === e || "ADBE Vector Shape" === e || 2 === e ? n.path : null
            }
            var a = propertyGroupFactory(n, r);
            return i.setGroupProperty(PropertyInterface("Path", a)), Object.defineProperties(n, {
              path: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              shape: {
                get: function() {
                  return i.k && i.getValue(), i
                }
              },
              _name: {
                value: e.nm
              },
              ix: {
                value: e.ix
              },
              propertyIndex: {
                value: e.ix
              },
              mn: {
                value: e.mn
              },
              propertyGroup: {
                value: r
              }
            }), n
          },
          ShapeExpressionInterface = function() {
            function e(e, s, u) {
              var d, f = [],
                m = e ? e.length : 0;
              for (d = 0; d < m; d += 1) "gr" === e[d].ty ? f.push(t(e[d], s[d], u)) : "fl" === e[d].ty ? f.push(r(e[d], s[d], u)) : "st" === e[d].ty ? f.push(n(e[d], s[d], u)) : "tm" === e[d].ty ? f.push(a(e[d], s[d], u)) : "tr" === e[d].ty || ("el" === e[d].ty ? f.push(o(e[d], s[d], u)) : "sr" === e[d].ty ? f.push(l(e[d], s[d], u)) : "sh" === e[d].ty ? f.push(ShapePathInterface(e[d], s[d], u)) : "rc" === e[d].ty ? f.push(h(e[d], s[d], u)) : "rd" === e[d].ty ? f.push(c(e[d], s[d], u)) : "rp" === e[d].ty ? f.push(p(e[d], s[d], u)) : "gf" === e[d].ty ? f.push(i(e[d], s[d], u)) : f.push((e[d], s[d], function() {
                return null
              })));
              return f
            }

            function t(t, r, i) {
              var n = function(e) {
                switch (e) {
                  case "ADBE Vectors Group":
                  case "Contents":
                  case 2:
                    return n.content;
                  default:
                    return n.transform
                }
              };
              n.propertyGroup = propertyGroupFactory(n, i);
              var a = function(t, r, i) {
                  var n, a = function(e) {
                    for (var t = 0, r = n.length; t < r;) {
                      if (n[t]._name === e || n[t].mn === e || n[t].propertyIndex === e || n[t].ix === e || n[t].ind === e) return n[t];
                      t += 1
                    }
                    return "number" == typeof e ? n[e - 1] : null
                  };
                  a.propertyGroup = propertyGroupFactory(a, i), n = e(t.it, r.it, a.propertyGroup), a.numProperties = n.length;
                  var o = s(t.it[t.it.length - 1], r.it[r.it.length - 1], a.propertyGroup);
                  return a.transform = o, a.propertyIndex = t.cix, a._name = t.nm, a
                }(t, r, n.propertyGroup),
                o = s(t.it[t.it.length - 1], r.it[r.it.length - 1], n.propertyGroup);
              return n.content = a, n.transform = o, Object.defineProperty(n, "_name", {
                get: function() {
                  return t.nm
                }
              }), n.numProperties = t.np, n.propertyIndex = t.ix, n.nm = t.nm, n.mn = t.mn, n
            }

            function r(e, t, r) {
              function i(e) {
                return "Color" === e || "color" === e ? i.color : "Opacity" === e || "opacity" === e ? i.opacity : null
              }
              return Object.defineProperties(i, {
                color: {
                  get: ExpressionPropertyInterface(t.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(t.o)
                },
                _name: {
                  value: e.nm
                },
                mn: {
                  value: e.mn
                }
              }), t.c.setGroupProperty(PropertyInterface("Color", r)), t.o.setGroupProperty(PropertyInterface("Opacity", r)), i
            }

            function i(e, t, r) {
              function i(e) {
                return "Start Point" === e || "start point" === e ? i.startPoint : "End Point" === e || "end point" === e ? i.endPoint : "Opacity" === e || "opacity" === e ? i.opacity : null
              }
              return Object.defineProperties(i, {
                startPoint: {
                  get: ExpressionPropertyInterface(t.s)
                },
                endPoint: {
                  get: ExpressionPropertyInterface(t.e)
                },
                opacity: {
                  get: ExpressionPropertyInterface(t.o)
                },
                type: {
                  get: function() {
                    return "a"
                  }
                },
                _name: {
                  value: e.nm
                },
                mn: {
                  value: e.mn
                }
              }), t.s.setGroupProperty(PropertyInterface("Start Point", r)), t.e.setGroupProperty(PropertyInterface("End Point", r)), t.o.setGroupProperty(PropertyInterface("Opacity", r)), i
            }

            function n(e, t, r) {
              var i, n = propertyGroupFactory(h, r),
                a = propertyGroupFactory(l, n);

              function s(r) {
                Object.defineProperty(l, e.d[r].nm, {
                  get: ExpressionPropertyInterface(t.d.dataProps[r].p)
                })
              }
              var o = e.d ? e.d.length : 0,
                l = {};
              for (i = 0; i < o; i += 1) s(i), t.d.dataProps[i].p.setGroupProperty(a);

              function h(e) {
                return "Color" === e || "color" === e ? h.color : "Opacity" === e || "opacity" === e ? h.opacity : "Stroke Width" === e || "stroke width" === e ? h.strokeWidth : null
              }
              return Object.defineProperties(h, {
                color: {
                  get: ExpressionPropertyInterface(t.c)
                },
                opacity: {
                  get: ExpressionPropertyInterface(t.o)
                },
                strokeWidth: {
                  get: ExpressionPropertyInterface(t.w)
                },
                dash: {
                  get: function() {
                    return l
                  }
                },
                _name: {
                  value: e.nm
                },
                mn: {
                  value: e.mn
                }
              }), t.c.setGroupProperty(PropertyInterface("Color", n)), t.o.setGroupProperty(PropertyInterface("Opacity", n)), t.w.setGroupProperty(PropertyInterface("Stroke Width", n)), h
            }

            function a(e, t, r) {
              function i(t) {
                return t === e.e.ix || "End" === t || "end" === t ? i.end : t === e.s.ix ? i.start : t === e.o.ix ? i.offset : null
              }
              var n = propertyGroupFactory(i, r);
              return i.propertyIndex = e.ix, t.s.setGroupProperty(PropertyInterface("Start", n)), t.e.setGroupProperty(PropertyInterface("End", n)), t.o.setGroupProperty(PropertyInterface("Offset", n)), i.propertyIndex = e.ix, i.propertyGroup = r, Object.defineProperties(i, {
                start: {
                  get: ExpressionPropertyInterface(t.s)
                },
                end: {
                  get: ExpressionPropertyInterface(t.e)
                },
                offset: {
                  get: ExpressionPropertyInterface(t.o)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function s(e, t, r) {
              function i(t) {
                return e.a.ix === t || "Anchor Point" === t ? i.anchorPoint : e.o.ix === t || "Opacity" === t ? i.opacity : e.p.ix === t || "Position" === t ? i.position : e.r.ix === t || "Rotation" === t || "ADBE Vector Rotation" === t ? i.rotation : e.s.ix === t || "Scale" === t ? i.scale : e.sk && e.sk.ix === t || "Skew" === t ? i.skew : e.sa && e.sa.ix === t || "Skew Axis" === t ? i.skewAxis : null
              }
              var n = propertyGroupFactory(i, r);
              return t.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", n)), t.transform.mProps.p.setGroupProperty(PropertyInterface("Position", n)), t.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", n)), t.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", n)), t.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", n)), t.transform.mProps.sk && (t.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", n)), t.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", n))), t.transform.op.setGroupProperty(PropertyInterface("Opacity", n)), Object.defineProperties(i, {
                opacity: {
                  get: ExpressionPropertyInterface(t.transform.mProps.o)
                },
                position: {
                  get: ExpressionPropertyInterface(t.transform.mProps.p)
                },
                anchorPoint: {
                  get: ExpressionPropertyInterface(t.transform.mProps.a)
                },
                scale: {
                  get: ExpressionPropertyInterface(t.transform.mProps.s)
                },
                rotation: {
                  get: ExpressionPropertyInterface(t.transform.mProps.r)
                },
                skew: {
                  get: ExpressionPropertyInterface(t.transform.mProps.sk)
                },
                skewAxis: {
                  get: ExpressionPropertyInterface(t.transform.mProps.sa)
                },
                _name: {
                  value: e.nm
                }
              }), i.ty = "tr", i.mn = e.mn, i.propertyGroup = r, i
            }

            function o(e, t, r) {
              function i(t) {
                return e.p.ix === t ? i.position : e.s.ix === t ? i.size : null
              }
              var n = propertyGroupFactory(i, r);
              i.propertyIndex = e.ix;
              var a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return a.s.setGroupProperty(PropertyInterface("Size", n)), a.p.setGroupProperty(PropertyInterface("Position", n)), Object.defineProperties(i, {
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function l(e, t, r) {
              function i(t) {
                return e.p.ix === t ? i.position : e.r.ix === t ? i.rotation : e.pt.ix === t ? i.points : e.or.ix === t || "ADBE Vector Star Outer Radius" === t ? i.outerRadius : e.os.ix === t ? i.outerRoundness : !e.ir || e.ir.ix !== t && "ADBE Vector Star Inner Radius" !== t ? e.is && e.is.ix === t ? i.innerRoundness : null : i.innerRadius
              }
              var n = propertyGroupFactory(i, r),
                a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return i.propertyIndex = e.ix, a.or.setGroupProperty(PropertyInterface("Outer Radius", n)), a.os.setGroupProperty(PropertyInterface("Outer Roundness", n)), a.pt.setGroupProperty(PropertyInterface("Points", n)), a.p.setGroupProperty(PropertyInterface("Position", n)), a.r.setGroupProperty(PropertyInterface("Rotation", n)), e.ir && (a.ir.setGroupProperty(PropertyInterface("Inner Radius", n)), a.is.setGroupProperty(PropertyInterface("Inner Roundness", n))), Object.defineProperties(i, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                rotation: {
                  get: ExpressionPropertyInterface(a.r)
                },
                points: {
                  get: ExpressionPropertyInterface(a.pt)
                },
                outerRadius: {
                  get: ExpressionPropertyInterface(a.or)
                },
                outerRoundness: {
                  get: ExpressionPropertyInterface(a.os)
                },
                innerRadius: {
                  get: ExpressionPropertyInterface(a.ir)
                },
                innerRoundness: {
                  get: ExpressionPropertyInterface(a.is)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function h(e, t, r) {
              function i(t) {
                return e.p.ix === t ? i.position : e.r.ix === t ? i.roundness : e.s.ix === t || "Size" === t || "ADBE Vector Rect Size" === t ? i.size : null
              }
              var n = propertyGroupFactory(i, r),
                a = "tm" === t.sh.ty ? t.sh.prop : t.sh;
              return i.propertyIndex = e.ix, a.p.setGroupProperty(PropertyInterface("Position", n)), a.s.setGroupProperty(PropertyInterface("Size", n)), a.r.setGroupProperty(PropertyInterface("Rotation", n)), Object.defineProperties(i, {
                position: {
                  get: ExpressionPropertyInterface(a.p)
                },
                roundness: {
                  get: ExpressionPropertyInterface(a.r)
                },
                size: {
                  get: ExpressionPropertyInterface(a.s)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function c(e, t, r) {
              function i(t) {
                return e.r.ix === t || "Round Corners 1" === t ? i.radius : null
              }
              var n = propertyGroupFactory(i, r),
                a = t;
              return i.propertyIndex = e.ix, a.rd.setGroupProperty(PropertyInterface("Radius", n)), Object.defineProperties(i, {
                radius: {
                  get: ExpressionPropertyInterface(a.rd)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }

            function p(e, t, r) {
              function i(t) {
                return e.c.ix === t || "Copies" === t ? i.copies : e.o.ix === t || "Offset" === t ? i.offset : null
              }
              var n = propertyGroupFactory(i, r),
                a = t;
              return i.propertyIndex = e.ix, a.c.setGroupProperty(PropertyInterface("Copies", n)), a.o.setGroupProperty(PropertyInterface("Offset", n)), Object.defineProperties(i, {
                copies: {
                  get: ExpressionPropertyInterface(a.c)
                },
                offset: {
                  get: ExpressionPropertyInterface(a.o)
                },
                _name: {
                  value: e.nm
                }
              }), i.mn = e.mn, i
            }
            return function(t, r, i) {
              var n;

              function a(e) {
                if ("number" == typeof e) return 0 === (e = void 0 === e ? 1 : e) ? i : n[e - 1];
                for (var t = 0, r = n.length; t < r;) {
                  if (n[t]._name === e) return n[t];
                  t += 1
                }
                return null
              }
              return a.propertyGroup = propertyGroupFactory(a, (function() {
                return i
              })), n = e(t, r, a.propertyGroup), a.numProperties = n.length, a._name = "Contents", a
            }
          }(),
          TextExpressionInterface = function(e) {
            var t;

            function r(e) {
              return "ADBE Text Document" === e ? r.sourceText : null
            }
            return Object.defineProperty(r, "sourceText", {
              get: function() {
                e.textProperty.getValue();
                var r = e.textProperty.currentData.t;
                return t && r === t.value || ((t = new String(r)).value = r || new String(r), Object.defineProperty(t, "style", {
                  get: function() {
                    return {
                      fillColor: e.textProperty.currentData.fc
                    }
                  }
                })), t
              }
            }), r
          };

        function _typeof(e) {
          return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
          } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
          }, _typeof(e)
        }
        var FootageInterface = (dataInterfaceFactory = function(e) {
            function t(e) {
              return "Outline" === e ? t.outlineInterface() : null
            }
            return t._name = "Outline", t.outlineInterface = function(e) {
              var t = "",
                r = e.getFootageData();

              function i(e) {
                if (r[e]) return t = e, "object" === _typeof(r = r[e]) ? i : r;
                var n = e.indexOf(t);
                if (-1 !== n) {
                  var a = parseInt(e.substr(n + t.length), 10);
                  return "object" === _typeof(r = r[a]) ? i : r
                }
                return ""
              }
              return function() {
                return t = "", r = e.getFootageData(), i
              }
            }(e), t
          }, function(e) {
            function t(e) {
              return "Data" === e ? t.dataInterface : null
            }
            return t._name = "Data", t.dataInterface = dataInterfaceFactory(e), t
          }),
          dataInterfaceFactory, interfaces = {
            layer: LayerExpressionInterface,
            effects: EffectsExpressionInterface,
            comp: CompExpressionInterface,
            shape: ShapeExpressionInterface,
            text: TextExpressionInterface,
            footage: FootageInterface
          };

        function getInterface(e) {
          return interfaces[e] || null
        }
        var expressionHelpers = {
          searchExpressions: function(e, t, r) {
            t.x && (r.k = !0, r.x = !0, r.initiateExpression = ExpressionManager.initiateExpression, r.effectsSequence.push(r.initiateExpression(e, t, r).bind(r)))
          },
          getSpeedAtTime: function(e) {
            var t = this.getValueAtTime(e),
              r = this.getValueAtTime(e + -.01),
              i = 0;
            if (t.length) {
              var n;
              for (n = 0; n < t.length; n += 1) i += Math.pow(r[n] - t[n], 2);
              i = 100 * Math.sqrt(i)
            } else i = 0;
            return i
          },
          getVelocityAtTime: function(e) {
            if (void 0 !== this.vel) return this.vel;
            var t, r, i = -.001,
              n = this.getValueAtTime(e),
              a = this.getValueAtTime(e + i);
            if (n.length)
              for (t = createTypedArray("float32", n.length), r = 0; r < n.length; r += 1) t[r] = (a[r] - n[r]) / i;
            else t = (a - n) / i;
            return t
          },
          getValueAtTime: function(e) {
            return e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < e ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(e, this._cachingAtTime), this._cachingAtTime.lastFrame = e), this._cachingAtTime.value
          },
          getStaticValueAtTime: function() {
            return this.pv
          },
          setGroupProperty: function(e) {
            this.propertyGroup = e
          }
        };

        function addPropertyDecorator() {
          function e(e, t, r) {
            if (!this.k || !this.keyframes) return this.pv;
            e = e ? e.toLowerCase() : "";
            var i, n, a, s, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              c = h[h.length - 1].t;
            if (l <= c) return this.pv;
            if (r ? n = c - (i = t ? Math.abs(c - this.elem.comp.globalData.frameRate * t) : Math.max(0, c - this.elem.data.ip)) : ((!t || t > h.length - 1) && (t = h.length - 1), i = c - (n = h[h.length - 1 - t].t)), "pingpong" === e) {
              if (Math.floor((l - n) / i) % 2 != 0) return this.getValueAtTime((i - (l - n) % i + n) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === e) {
                var p = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                  u = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  d = this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0),
                  f = Math.floor((l - n) / i);
                if (this.pv.length) {
                  for (s = (o = new Array(p.length)).length, a = 0; a < s; a += 1) o[a] = (u[a] - p[a]) * f + d[a];
                  return o
                }
                return (u - p) * f + d
              }
              if ("continue" === e) {
                var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  g = this.getValueAtTime((c - .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * ((l - c) / this.comp.globalData.frameRate) / 5e-4;
                  return o
                }
                return m + (l - c) / .001 * (m - g)
              }
            }
            return this.getValueAtTime(((l - n) % i + n) / this.comp.globalData.frameRate, 0)
          }

          function t(e, t, r) {
            if (!this.k) return this.pv;
            e = e ? e.toLowerCase() : "";
            var i, n, a, s, o, l = this.comp.renderedFrame,
              h = this.keyframes,
              c = h[0].t;
            if (l >= c) return this.pv;
            if (r ? n = c + (i = t ? Math.abs(this.elem.comp.globalData.frameRate * t) : Math.max(0, this.elem.data.op - c)) : ((!t || t > h.length - 1) && (t = h.length - 1), i = (n = h[t].t) - c), "pingpong" === e) {
              if (Math.floor((c - l) / i) % 2 == 0) return this.getValueAtTime(((c - l) % i + c) / this.comp.globalData.frameRate, 0)
            } else {
              if ("offset" === e) {
                var p = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  u = this.getValueAtTime(n / this.comp.globalData.frameRate, 0),
                  d = this.getValueAtTime((i - (c - l) % i + c) / this.comp.globalData.frameRate, 0),
                  f = Math.floor((c - l) / i) + 1;
                if (this.pv.length) {
                  for (s = (o = new Array(p.length)).length, a = 0; a < s; a += 1) o[a] = d[a] - (u[a] - p[a]) * f;
                  return o
                }
                return d - (u - p) * f
              }
              if ("continue" === e) {
                var m = this.getValueAtTime(c / this.comp.globalData.frameRate, 0),
                  g = this.getValueAtTime((c + .001) / this.comp.globalData.frameRate, 0);
                if (this.pv.length) {
                  for (s = (o = new Array(m.length)).length, a = 0; a < s; a += 1) o[a] = m[a] + (m[a] - g[a]) * (c - l) / .001;
                  return o
                }
                return m + (m - g) * (c - l) / .001
              }
            }
            return this.getValueAtTime((i - ((c - l) % i + c)) / this.comp.globalData.frameRate, 0)
          }

          function r(e, t) {
            if (!this.k) return this.pv;
            if (e = .5 * (e || .4), (t = Math.floor(t || 5)) <= 1) return this.pv;
            var r, i, n = this.comp.renderedFrame / this.comp.globalData.frameRate,
              a = n - e,
              s = t > 1 ? (n + e - a) / (t - 1) : 1,
              o = 0,
              l = 0;
            for (r = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; o < t;) {
              if (i = this.getValueAtTime(a + o * s), this.pv.length)
                for (l = 0; l < this.pv.length; l += 1) r[l] += i[l];
              else r += i;
              o += 1
            }
            if (this.pv.length)
              for (l = 0; l < this.pv.length; l += 1) r[l] /= t;
            else r /= t;
            return r
          }

          function i(e) {
            this._transformCachingAtTime || (this._transformCachingAtTime = {
              v: new Matrix
            });
            var t = this._transformCachingAtTime.v;
            if (t.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
              var r = this.a.getValueAtTime(e);
              t.translate(-r[0] * this.a.mult, -r[1] * this.a.mult, r[2] * this.a.mult)
            }
            if (this.appliedTransformations < 2) {
              var i = this.s.getValueAtTime(e);
              t.scale(i[0] * this.s.mult, i[1] * this.s.mult, i[2] * this.s.mult)
            }
            if (this.sk && this.appliedTransformations < 3) {
              var n = this.sk.getValueAtTime(e),
                a = this.sa.getValueAtTime(e);
              t.skewFromAxis(-n * this.sk.mult, a * this.sa.mult)
            }
            if (this.r && this.appliedTransformations < 4) {
              var s = this.r.getValueAtTime(e);
              t.rotate(-s * this.r.mult)
            } else if (!this.r && this.appliedTransformations < 4) {
              var o = this.rz.getValueAtTime(e),
                l = this.ry.getValueAtTime(e),
                h = this.rx.getValueAtTime(e),
                c = this.or.getValueAtTime(e);
              t.rotateZ(-o * this.rz.mult).rotateY(l * this.ry.mult).rotateX(h * this.rx.mult).rotateZ(-c[2] * this.or.mult).rotateY(c[1] * this.or.mult).rotateX(c[0] * this.or.mult)
            }
            if (this.data.p && this.data.p.s) {
              var p = this.px.getValueAtTime(e),
                u = this.py.getValueAtTime(e);
              if (this.data.p.z) {
                var d = this.pz.getValueAtTime(e);
                t.translate(p * this.px.mult, u * this.py.mult, -d * this.pz.mult)
              } else t.translate(p * this.px.mult, u * this.py.mult, 0)
            } else {
              var f = this.p.getValueAtTime(e);
              t.translate(f[0] * this.p.mult, f[1] * this.p.mult, -f[2] * this.p.mult)
            }
            return t
          }

          function n() {
            return this.v.clone(new Matrix)
          }
          var a = TransformPropertyFactory.getTransformProperty;
          TransformPropertyFactory.getTransformProperty = function(e, t, r) {
            var s = a(e, t, r);
            return s.dynamicProperties.length ? s.getValueAtTime = i.bind(s) : s.getValueAtTime = n.bind(s), s.setGroupProperty = expressionHelpers.setGroupProperty, s
          };
          var s = PropertyFactory.getProp;
          PropertyFactory.getProp = function(i, n, a, o, l) {
            var h = s(i, n, a, o, l);
            h.kf ? h.getValueAtTime = expressionHelpers.getValueAtTime.bind(h) : h.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(h), h.setGroupProperty = expressionHelpers.setGroupProperty, h.loopOut = e, h.loopIn = t, h.smooth = r, h.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(h), h.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(h), h.numKeys = 1 === n.a ? n.k.length : 0, h.propertyIndex = n.ix;
            var c = 0;
            return 0 !== a && (c = createTypedArray("float32", 1 === n.a ? n.k[0].s.length : n.k.length)), h._cachingAtTime = {
              lastFrame: initialDefaultFrame,
              lastIndex: 0,
              value: c
            }, expressionHelpers.searchExpressions(i, n, h), h.k && l.addDynamicProperty(h), h
          };
          var o = ShapePropertyFactory.getConstructorFunction(),
            l = ShapePropertyFactory.getKeyframedConstructorFunction();

          function h() {}
          h.prototype = {
            vertices: function(e, t) {
              this.k && this.getValue();
              var r, i = this.v;
              void 0 !== t && (i = this.getValueAtTime(t, 0));
              var n = i._length,
                a = i[e],
                s = i.v,
                o = createSizedArray(n);
              for (r = 0; r < n; r += 1) o[r] = "i" === e || "o" === e ? [a[r][0] - s[r][0], a[r][1] - s[r][1]] : [a[r][0], a[r][1]];
              return o
            },
            points: function(e) {
              return this.vertices("v", e)
            },
            inTangents: function(e) {
              return this.vertices("i", e)
            },
            outTangents: function(e) {
              return this.vertices("o", e)
            },
            isClosed: function() {
              return this.v.c
            },
            pointOnPath: function(e, t) {
              var r = this.v;
              void 0 !== t && (r = this.getValueAtTime(t, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(r));
              for (var i, n = this._segmentsLength, a = n.lengths, s = n.totalLength * e, o = 0, l = a.length, h = 0; o < l;) {
                if (h + a[o].addedLength > s) {
                  var c = o,
                    p = r.c && o === l - 1 ? 0 : o + 1,
                    u = (s - h) / a[o].addedLength;
                  i = bez.getPointInSegment(r.v[c], r.v[p], r.o[c], r.i[p], u, a[o]);
                  break
                }
                h += a[o].addedLength, o += 1
              }
              return i || (i = r.c ? [r.v[0][0], r.v[0][1]] : [r.v[r._length - 1][0], r.v[r._length - 1][1]]), i
            },
            vectorOnPath: function(e, t, r) {
              1 == e ? e = this.v.c : 0 == e && (e = .999);
              var i = this.pointOnPath(e, t),
                n = this.pointOnPath(e + .001, t),
                a = n[0] - i[0],
                s = n[1] - i[1],
                o = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
              return 0 === o ? [0, 0] : "tangent" === r ? [a / o, s / o] : [-s / o, a / o]
            },
            tangentOnPath: function(e, t) {
              return this.vectorOnPath(e, t, "tangent")
            },
            normalOnPath: function(e, t) {
              return this.vectorOnPath(e, t, "normal")
            },
            setGroupProperty: expressionHelpers.setGroupProperty,
            getValueAtTime: expressionHelpers.getStaticValueAtTime
          }, extendPrototype([h], o), extendPrototype([h], l), l.prototype.getValueAtTime = function(e) {
            return this._cachingAtTime || (this._cachingAtTime = {
              shapeValue: shapePool.clone(this.pv),
              lastIndex: 0,
              lastTime: initialDefaultFrame
            }), e *= this.elem.globalData.frameRate, (e -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < e ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = e, this.interpolateShape(e, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue
          }, l.prototype.initiateExpression = ExpressionManager.initiateExpression;
          var c = ShapePropertyFactory.getShapeProp;
          ShapePropertyFactory.getShapeProp = function(e, t, r, i, n) {
            var a = c(e, t, r, i, n);
            return a.propertyIndex = t.ix, a.lock = !1, 3 === r ? expressionHelpers.searchExpressions(e, t.pt, a) : 4 === r && expressionHelpers.searchExpressions(e, t.ks, a), a.k && e.addDynamicProperty(a), a
          }
        }

        function initialize$1() {
          addPropertyDecorator()
        }

        function addDecorator() {
          TextProperty.prototype.getExpressionValue = function(e, t) {
            var r = this.calculateExpression(t);
            if (e.t !== r) {
              var i = {};
              return this.copyData(i, e), i.t = r.toString(), i.__complete = !1, i
            }
            return e
          }, TextProperty.prototype.searchProperty = function() {
            var e = this.searchKeyframes(),
              t = this.searchExpressions();
            return this.kf = e || t, this.kf
          }, TextProperty.prototype.searchExpressions = function() {
            return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null
          }
        }

        function initialize() {
          addDecorator()
        }

        function SVGComposableEffect() {}
        SVGComposableEffect.prototype = {
          createMergeNode: function(e, t) {
            var r, i, n = createNS("feMerge");
            for (n.setAttribute("result", e), i = 0; i < t.length; i += 1)(r = createNS("feMergeNode")).setAttribute("in", t[i]), n.appendChild(r), n.appendChild(r);
            return n
          }
        };
        var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";

        function SVGTintFilter(e, t, r, i, n) {
          this.filterManager = t;
          var a = createNS("feColorMatrix");
          a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = a, a.setAttribute("result", i + "_tint_1"), e.appendChild(a), (a = createNS("feColorMatrix")).setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", i + "_tint_2"), e.appendChild(a), this.matrixFilter = a;
          var s = this.createMergeNode(i, [n, i + "_tint_1", i + "_tint_2"]);
          e.appendChild(s)
        }

        function SVGFillFilter(e, t, r, i) {
          this.filterManager = t;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", i), e.appendChild(n), this.matrixFilter = n
        }

        function SVGStrokeEffect(e, t, r) {
          this.initialized = !1, this.filterManager = t, this.elem = r, this.paths = []
        }

        function SVGTritoneFilter(e, t, r, i) {
          this.filterManager = t;
          var n = createNS("feColorMatrix");
          n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), e.appendChild(n);
          var a = createNS("feComponentTransfer");
          a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), this.matrixFilter = a;
          var s = createNS("feFuncR");
          s.setAttribute("type", "table"), a.appendChild(s), this.feFuncR = s;
          var o = createNS("feFuncG");
          o.setAttribute("type", "table"), a.appendChild(o), this.feFuncG = o;
          var l = createNS("feFuncB");
          l.setAttribute("type", "table"), a.appendChild(l), this.feFuncB = l, e.appendChild(a)
        }

        function SVGProLevelsFilter(e, t, r, i) {
          this.filterManager = t;
          var n = this.filterManager.effectElements,
            a = createNS("feComponentTransfer");
          (n[10].p.k || 0 !== n[10].p.v || n[11].p.k || 1 !== n[11].p.v || n[12].p.k || 1 !== n[12].p.v || n[13].p.k || 0 !== n[13].p.v || n[14].p.k || 1 !== n[14].p.v) && (this.feFuncR = this.createFeFunc("feFuncR", a)), (n[17].p.k || 0 !== n[17].p.v || n[18].p.k || 1 !== n[18].p.v || n[19].p.k || 1 !== n[19].p.v || n[20].p.k || 0 !== n[20].p.v || n[21].p.k || 1 !== n[21].p.v) && (this.feFuncG = this.createFeFunc("feFuncG", a)), (n[24].p.k || 0 !== n[24].p.v || n[25].p.k || 1 !== n[25].p.v || n[26].p.k || 1 !== n[26].p.v || n[27].p.k || 0 !== n[27].p.v || n[28].p.k || 1 !== n[28].p.v) && (this.feFuncB = this.createFeFunc("feFuncB", a)), (n[31].p.k || 0 !== n[31].p.v || n[32].p.k || 1 !== n[32].p.v || n[33].p.k || 1 !== n[33].p.v || n[34].p.k || 0 !== n[34].p.v || n[35].p.k || 1 !== n[35].p.v) && (this.feFuncA = this.createFeFunc("feFuncA", a)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (a.setAttribute("color-interpolation-filters", "sRGB"), e.appendChild(a)), (n[3].p.k || 0 !== n[3].p.v || n[4].p.k || 1 !== n[4].p.v || n[5].p.k || 1 !== n[5].p.v || n[6].p.k || 0 !== n[6].p.v || n[7].p.k || 1 !== n[7].p.v) && ((a = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("result", i), e.appendChild(a), this.feFuncRComposed = this.createFeFunc("feFuncR", a), this.feFuncGComposed = this.createFeFunc("feFuncG", a), this.feFuncBComposed = this.createFeFunc("feFuncB", a))
        }

        function SVGDropShadowEffect(e, t, r, i, n) {
          var a = t.container.globalData.renderConfig.filterSize,
            s = t.data.fs || a;
          e.setAttribute("x", s.x || a.x), e.setAttribute("y", s.y || a.y), e.setAttribute("width", s.width || a.width), e.setAttribute("height", s.height || a.height), this.filterManager = t;
          var o = createNS("feGaussianBlur");
          o.setAttribute("in", "SourceAlpha"), o.setAttribute("result", i + "_drop_shadow_1"), o.setAttribute("stdDeviation", "0"), this.feGaussianBlur = o, e.appendChild(o);
          var l = createNS("feOffset");
          l.setAttribute("dx", "25"), l.setAttribute("dy", "0"), l.setAttribute("in", i + "_drop_shadow_1"), l.setAttribute("result", i + "_drop_shadow_2"), this.feOffset = l, e.appendChild(l);
          var h = createNS("feFlood");
          h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", i + "_drop_shadow_3"), this.feFlood = h, e.appendChild(h);
          var c = createNS("feComposite");
          c.setAttribute("in", i + "_drop_shadow_3"), c.setAttribute("in2", i + "_drop_shadow_2"), c.setAttribute("operator", "in"), c.setAttribute("result", i + "_drop_shadow_4"), e.appendChild(c);
          var p = this.createMergeNode(i, [i + "_drop_shadow_4", n]);
          e.appendChild(p)
        }
        extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v / 100;
            this.linearFilter.setAttribute("values", linearFilterValue + " " + i + " 0"), this.matrixFilter.setAttribute("values", r[0] - t[0] + " 0 0 0 " + t[0] + " " + (r[1] - t[1]) + " 0 0 0 " + t[1] + " " + (r[2] - t[2]) + " 0 0 0 " + t[2] + " 0 0 0 1 0")
          }
        }, SVGFillFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = this.filterManager.effectElements[2].p.v,
              r = this.filterManager.effectElements[6].p.v;
            this.matrixFilter.setAttribute("values", "0 0 0 0 " + t[0] + " 0 0 0 0 " + t[1] + " 0 0 0 0 " + t[2] + " 0 0 0 " + r + " 0")
          }
        }, SVGStrokeEffect.prototype.initialize = function() {
          var e, t, r, i, n = this.elem.layerElement.children || this.elem.layerElement.childNodes;
          for (1 === this.filterManager.effectElements[1].p.v ? (i = this.elem.maskManager.masksProperties.length, r = 0) : i = 1 + (r = this.filterManager.effectElements[0].p.v - 1), (t = createNS("g")).setAttribute("fill", "none"), t.setAttribute("stroke-linecap", "round"), t.setAttribute("stroke-dashoffset", 1); r < i; r += 1) e = createNS("path"), t.appendChild(e), this.paths.push({
            p: e,
            m: r
          });
          if (3 === this.filterManager.effectElements[10].p.v) {
            var a = createNS("mask"),
              s = createElementID();
            a.setAttribute("id", s), a.setAttribute("mask-type", "alpha"), a.appendChild(t), this.elem.globalData.defs.appendChild(a);
            var o = createNS("g");
            for (o.setAttribute("mask", "url(" + getLocationHref() + "#" + s + ")"); n[0];) o.appendChild(n[0]);
            this.elem.layerElement.appendChild(o), this.masker = a, t.setAttribute("stroke", "#fff")
          } else if (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) {
            if (2 === this.filterManager.effectElements[10].p.v)
              for (n = this.elem.layerElement.children || this.elem.layerElement.childNodes; n.length;) this.elem.layerElement.removeChild(n[0]);
            this.elem.layerElement.appendChild(t), this.elem.layerElement.removeAttribute("mask"), t.setAttribute("stroke", "#fff")
          }
          this.initialized = !0, this.pathMasker = t
        }, SVGStrokeEffect.prototype.renderFrame = function(e) {
          var t;
          this.initialized || this.initialize();
          var r, i, n = this.paths.length;
          for (t = 0; t < n; t += 1)
            if (-1 !== this.paths[t].m && (r = this.elem.maskManager.viewData[this.paths[t].m], i = this.paths[t].p, (e || this.filterManager._mdf || r.prop._mdf) && i.setAttribute("d", r.lastPath), e || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || r.prop._mdf)) {
              var a;
              if (0 !== this.filterManager.effectElements[7].p.v || 100 !== this.filterManager.effectElements[8].p.v) {
                var s = .01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  o = .01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v),
                  l = i.getTotalLength();
                a = "0 0 0 " + l * s + " ";
                var h, c = l * (o - s),
                  p = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01,
                  u = Math.floor(c / p);
                for (h = 0; h < u; h += 1) a += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01 + " ";
                a += "0 " + 10 * l + " 0 0"
              } else a = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * .01;
              i.setAttribute("stroke-dasharray", a)
            } if ((e || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (e || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (1 === this.filterManager.effectElements[10].p.v || 2 === this.filterManager.effectElements[10].p.v) && (e || this.filterManager.effectElements[3].p._mdf)) {
            var d = this.filterManager.effectElements[3].p.v;
            this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * d[0]) + "," + bmFloor(255 * d[1]) + "," + bmFloor(255 * d[2]) + ")")
          }
        }, SVGTritoneFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = this.filterManager.effectElements[2].p.v,
              n = i[0] + " " + r[0] + " " + t[0],
              a = i[1] + " " + r[1] + " " + t[1],
              s = i[2] + " " + r[2] + " " + t[2];
            this.feFuncR.setAttribute("tableValues", n), this.feFuncG.setAttribute("tableValues", a), this.feFuncB.setAttribute("tableValues", s)
          }
        }, SVGProLevelsFilter.prototype.createFeFunc = function(e, t) {
          var r = createNS(e);
          return r.setAttribute("type", "table"), t.appendChild(r), r
        }, SVGProLevelsFilter.prototype.getTableValue = function(e, t, r, i, n) {
          for (var a, s, o = 0, l = Math.min(e, t), h = Math.max(e, t), c = Array.call(null, {
              length: 256
            }), p = 0, u = n - i, d = t - e; o <= 256;) s = (a = o / 256) <= l ? d < 0 ? n : i : a >= h ? d < 0 ? i : n : i + u * Math.pow((a - e) / d, 1 / r), c[p] = s, p += 1, o += 256 / 255;
          return c.join(" ")
        }, SVGProLevelsFilter.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t, r = this.filterManager.effectElements;
            this.feFuncRComposed && (e || r[3].p._mdf || r[4].p._mdf || r[5].p._mdf || r[6].p._mdf || r[7].p._mdf) && (t = this.getTableValue(r[3].p.v, r[4].p.v, r[5].p.v, r[6].p.v, r[7].p.v), this.feFuncRComposed.setAttribute("tableValues", t), this.feFuncGComposed.setAttribute("tableValues", t), this.feFuncBComposed.setAttribute("tableValues", t)), this.feFuncR && (e || r[10].p._mdf || r[11].p._mdf || r[12].p._mdf || r[13].p._mdf || r[14].p._mdf) && (t = this.getTableValue(r[10].p.v, r[11].p.v, r[12].p.v, r[13].p.v, r[14].p.v), this.feFuncR.setAttribute("tableValues", t)), this.feFuncG && (e || r[17].p._mdf || r[18].p._mdf || r[19].p._mdf || r[20].p._mdf || r[21].p._mdf) && (t = this.getTableValue(r[17].p.v, r[18].p.v, r[19].p.v, r[20].p.v, r[21].p.v), this.feFuncG.setAttribute("tableValues", t)), this.feFuncB && (e || r[24].p._mdf || r[25].p._mdf || r[26].p._mdf || r[27].p._mdf || r[28].p._mdf) && (t = this.getTableValue(r[24].p.v, r[25].p.v, r[26].p.v, r[27].p.v, r[28].p.v), this.feFuncB.setAttribute("tableValues", t)), this.feFuncA && (e || r[31].p._mdf || r[32].p._mdf || r[33].p._mdf || r[34].p._mdf || r[35].p._mdf) && (t = this.getTableValue(r[31].p.v, r[32].p.v, r[33].p.v, r[34].p.v, r[35].p.v), this.feFuncA.setAttribute("tableValues", t))
          }
        }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            if ((e || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), e || this.filterManager.effectElements[0].p._mdf) {
              var t = this.filterManager.effectElements[0].p.v;
              this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * t[0]), Math.round(255 * t[1]), Math.round(255 * t[2])))
            }
            if ((e || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), e || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
              var r = this.filterManager.effectElements[3].p.v,
                i = (this.filterManager.effectElements[2].p.v - 90) * degToRads,
                n = r * Math.cos(i),
                a = r * Math.sin(i);
              this.feOffset.setAttribute("dx", n), this.feOffset.setAttribute("dy", a)
            }
          }
        };
        var _svgMatteSymbols = [];

        function SVGMatte3Effect(e, t, r) {
          this.initialized = !1, this.filterManager = t, this.filterElem = e, this.elem = r, r.matteElement = createNS("g"), r.matteElement.appendChild(r.layerElement), r.matteElement.appendChild(r.transformedElement), r.baseElement = r.matteElement
        }

        function SVGGaussianBlurEffect(e, t, r, i) {
          e.setAttribute("x", "-100%"), e.setAttribute("y", "-100%"), e.setAttribute("width", "300%"), e.setAttribute("height", "300%"), this.filterManager = t;
          var n = createNS("feGaussianBlur");
          n.setAttribute("result", i), e.appendChild(n), this.feGaussianBlur = n
        }

        function TransformEffect() {}

        function SVGTransformEffect(e, t) {
          this.init(t)
        }

        function CVTransformEffect(e) {
          this.init(e)
        }
        return SVGMatte3Effect.prototype.findSymbol = function(e) {
          for (var t = 0, r = _svgMatteSymbols.length; t < r;) {
            if (_svgMatteSymbols[t] === e) return _svgMatteSymbols[t];
            t += 1
          }
          return null
        }, SVGMatte3Effect.prototype.replaceInParent = function(e, t) {
          var r = e.layerElement.parentNode;
          if (r) {
            for (var i, n = r.children, a = 0, s = n.length; a < s && n[a] !== e.layerElement;) a += 1;
            a <= s - 2 && (i = n[a + 1]);
            var o = createNS("use");
            o.setAttribute("href", "#" + t), i ? r.insertBefore(o, i) : r.appendChild(o)
          }
        }, SVGMatte3Effect.prototype.setElementAsMask = function(e, t) {
          if (!this.findSymbol(t)) {
            var r = createElementID(),
              i = createNS("mask");
            i.setAttribute("id", t.layerId), i.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(t);
            var n = e.globalData.defs;
            n.appendChild(i);
            var a = createNS("symbol");
            a.setAttribute("id", r), this.replaceInParent(t, r), a.appendChild(t.layerElement), n.appendChild(a);
            var s = createNS("use");
            s.setAttribute("href", "#" + r), i.appendChild(s), t.data.hd = !1, t.show()
          }
          e.setMatte(t.layerId)
        }, SVGMatte3Effect.prototype.initialize = function() {
          for (var e = this.filterManager.effectElements[0].p.v, t = this.elem.comp.elements, r = 0, i = t.length; r < i;) t[r] && t[r].data.ind === e && this.setElementAsMask(this.elem, t[r]), r += 1;
          this.initialized = !0
        }, SVGMatte3Effect.prototype.renderFrame = function() {
          this.initialized || this.initialize()
        }, SVGGaussianBlurEffect.prototype.renderFrame = function(e) {
          if (e || this.filterManager._mdf) {
            var t = .3 * this.filterManager.effectElements[0].p.v,
              r = this.filterManager.effectElements[1].p.v,
              i = 3 == r ? 0 : t,
              n = 2 == r ? 0 : t;
            this.feGaussianBlur.setAttribute("stdDeviation", i + " " + n);
            var a = 1 == this.filterManager.effectElements[2].p.v ? "wrap" : "duplicate";
            this.feGaussianBlur.setAttribute("edgeMode", a)
          }
        }, TransformEffect.prototype.init = function(e) {
          this.effectsManager = e, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix, this.opacity = -1, this._mdf = !1, this._opMdf = !1
        }, TransformEffect.prototype.renderFrame = function(e) {
          if (this._opMdf = !1, this._mdf = !1, e || this.effectsManager._mdf) {
            var t = this.effectsManager.effectElements,
              r = t[0].p.v,
              i = t[1].p.v,
              n = 1 === t[2].p.v,
              a = t[3].p.v,
              s = n ? a : t[4].p.v,
              o = t[5].p.v,
              l = t[6].p.v,
              h = t[7].p.v;
            this.matrix.reset(), this.matrix.translate(-r[0], -r[1], r[2]), this.matrix.scale(.01 * s, .01 * a, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-o * degToRads, (l + 90) * degToRads), this.matrix.translate(i[0], i[1], 0), this._mdf = !0, this.opacity !== t[8].p.v && (this.opacity = t[8].p.v, this._opMdf = !0)
          }
        }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie
      }, module.exports = factory())
    },
    3336: (e, t, r) => {
      "use strict";
      var i = r(8900);

      function n() {}

      function a() {}
      a.resetWarningCache = n, e.exports = function() {
        function e(e, t, r, n, a, s) {
          if (s !== i) {
            var o = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
            throw o.name = "Invariant Violation", o
          }
        }

        function t() {
          return e
        }
        e.isRequired = e;
        var r = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: a,
          resetWarningCache: n
        };
        return r.PropTypes = r, r
      }
    },
    6048: (e, t, r) => {
      e.exports = r(3336)()
    },
    8900: e => {
      "use strict";
      e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
    },
    3128: (e, t, r) => {
      "use strict";
      var i, n = (i = r(120)) && i.__esModule ? i : {
          default: i
        },
        a = {
          tags: function(e) {
            var t = e.id,
              r = e.events,
              i = e.dataLayer,
              a = e.dataLayerName,
              s = e.preview,
              o = "&gtm_auth=" + e.auth,
              l = "&gtm_preview=" + s;
            return t || (0, n.default)("GTM Id is required"), {
              iframe: '\n      <iframe src="https://www.googletagmanager.com/ns.html?id=' + t + o + l + '&gtm_cookies_win=x"\n        height="0" width="0" style="display:none;visibility:hidden" id="tag-manager"></iframe>',
              script: "\n      (function(w,d,s,l,i){w[l]=w[l]||[];\n        w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', " + JSON.stringify(r).slice(1, -1) + "});\n        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';\n        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl+'" + o + l + "&gtm_cookies_win=x';\n        f.parentNode.insertBefore(j,f);\n      })(window,document,'script','" + a + "','" + t + "');",
              dataLayerVar: this.dataLayer(i, a)
            }
          },
          dataLayer: function(e, t) {
            return "\n      window." + t + " = window." + t + " || [];\n      window." + t + ".push(" + JSON.stringify(e) + ")"
          }
        };
      e.exports = a
    },
    2776: (e, t, r) => {
      "use strict";
      var i, n = (i = r(3128)) && i.__esModule ? i : {
          default: i
        },
        a = {
          dataScript: function(e) {
            var t = document.createElement("script");
            return t.innerHTML = e, t
          },
          gtm: function(e) {
            var t = n.default.tags(e);
            return {
              noScript: function() {
                var e = document.createElement("noscript");
                return e.innerHTML = t.iframe, e
              },
              script: function() {
                var e = document.createElement("script");
                return e.innerHTML = t.script, e
              },
              dataScript: this.dataScript(t.dataLayerVar)
            }
          },
          initialize: function(e) {
            var t = e.gtmId,
              r = e.events,
              i = void 0 === r ? {} : r,
              n = e.dataLayer,
              a = e.dataLayerName,
              s = void 0 === a ? "dataLayer" : a,
              o = e.auth,
              l = void 0 === o ? "" : o,
              h = e.preview,
              c = void 0 === h ? "" : h,
              p = this.gtm({
                id: t,
                events: i,
                dataLayer: n || void 0,
                dataLayerName: s,
                auth: l,
                preview: c
              });
            n && document.head.appendChild(p.dataScript), document.head.insertBefore(p.script(), document.head.childNodes[0]), document.body.insertBefore(p.noScript(), document.body.childNodes[0])
          },
          dataLayer: function(e) {
            var t = e.dataLayer,
              r = e.dataLayerName,
              i = void 0 === r ? "dataLayer" : r;
            if (window[i]) return window[i].push(t);
            var a = n.default.dataLayer(t, i),
              s = this.dataScript(a);
            document.head.insertBefore(s, document.head.childNodes[0])
          }
        };
      e.exports = a
    },
    1408: (e, t, r) => {
      "use strict";
      var i, n = (i = r(2776)) && i.__esModule ? i : {
        default: i
      };
      e.exports = n.default
    },
    120: (e, t) => {
      "use strict";
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        console.warn("[react-gtm]", e)
      }
    },
    1456: function(e, t, r) {
      class i {
        constructor() {
          this.data = r(2396), this.labelMap = {}, this.valueMap = {}, this.data.forEach((e => {
            this.labelMap[e.label.toLowerCase()] = e.value, this.valueMap[e.value.toLowerCase()] = e.label
          }))
        }
        getValue(e) {
          return this.labelMap[e.toLowerCase()]
        }
        getLabel(e) {
          return this.valueMap[e.toLowerCase()]
        }
        getLabels() {
          return this.data.map((e => e.label))
        }
        getValues() {
          return this.data.map((e => e.value))
        }
        getLabelList() {
          return this.labelMap
        }
        getValueList() {
          return this.valueMap
        }
        getData() {
          return this.data
        }
        setLabel(e, t) {
          return this.data.forEach((r => {
            r.value === e && (r.label = t, this.valueMap[r.value.toLowerCase()] = r.label)
          })), this
        }
        setEmpty(e) {
          return this.data.unshift({
            value: "",
            label: e
          }), this.valueMap[""] = e, this.labelMap[e] = "", this
        }
        native() {
          return this.nativeData = r(8048), this.nativeData.forEach((e => {
            this.labelMap[e.label.toLowerCase()] = e.value, this.valueMap[e.value.toLowerCase()] = e.label
          })), this
        }
      }
      e.exports = () => {
        if (!(this instanceof i)) return new i
      }
    },
    1656: (e, t, r) => {
      "use strict";
      r.d(t, {
        c: () => l
      });
      const i = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let n;
      const a = new Uint8Array(16);

      function s() {
        if (!n && (n = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !n)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return n(a)
      }
      const o = [];
      for (let e = 0; e < 256; ++e) o.push((e + 256).toString(16).slice(1));
      const l = function(e, t, r) {
        if (i.randomUUID && !t && !e) return i.randomUUID();
        const n = (e = e || {}).random || (e.rng || s)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
          r = r || 0;
          for (let e = 0; e < 16; ++e) t[r + e] = n[e];
          return t
        }
        return function(e) {
          let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0;
          return o[e[t + 0]] + o[e[t + 1]] + o[e[t + 2]] + o[e[t + 3]] + "-" + o[e[t + 4]] + o[e[t + 5]] + "-" + o[e[t + 6]] + o[e[t + 7]] + "-" + o[e[t + 8]] + o[e[t + 9]] + "-" + o[e[t + 10]] + o[e[t + 11]] + o[e[t + 12]] + o[e[t + 13]] + o[e[t + 14]] + o[e[t + 15]]
        }(n)
      }
    },
    7264: (e, t, r) => {
      r(8960), e.exports = r(5968).Object.assign
    },
    9256: (e, t, r) => {
      r(9616);
      var i = r(5968).Object;
      e.exports = function(e, t) {
        return i.create(e, t)
      }
    },
    5488: (e, t, r) => {
      r(5376);
      var i = r(5968).Object;
      e.exports = function(e, t, r) {
        return i.defineProperty(e, t, r)
      }
    },
    9016: (e, t, r) => {
      r(2660), e.exports = r(5968).Object.getPrototypeOf
    },
    8952: (e, t, r) => {
      r(4252), e.exports = r(5968).Object.setPrototypeOf
    },
    8704: (e, t, r) => {
      r(4396), r(4623), r(2880), r(929), e.exports = r(5968).Symbol
    },
    4780: (e, t, r) => {
      r(3928), r(9888), e.exports = r(7368).f("iterator")
    },
    7601: e => {
      e.exports = function(e) {
        if ("function" != typeof e) throw TypeError(e + " is not a function!");
        return e
      }
    },
    16: e => {
      e.exports = function() {}
    },
    7544: (e, t, r) => {
      var i = r(3176);
      e.exports = function(e) {
        if (!i(e)) throw TypeError(e + " is not an object!");
        return e
      }
    },
    9e3: (e, t, r) => {
      var i = r(8412),
        n = r(5008),
        a = r(4124);
      e.exports = function(e) {
        return function(t, r, s) {
          var o, l = i(t),
            h = n(l.length),
            c = a(s, h);
          if (e && r != r) {
            for (; h > c;)
              if ((o = l[c++]) != o) return !0
          } else
            for (; h > c; c++)
              if ((e || c in l) && l[c] === r) return e || c || 0;
          return !e && -1
        }
      }
    },
    5736: e => {
      var t = {}.toString;
      e.exports = function(e) {
        return t.call(e).slice(8, -1)
      }
    },
    5968: e => {
      var t = e.exports = {
        version: "2.6.12"
      };
      "number" == typeof __e && (__e = t)
    },
    6508: (e, t, r) => {
      var i = r(7601);
      e.exports = function(e, t, r) {
        if (i(e), void 0 === t) return e;
        switch (r) {
          case 1:
            return function(r) {
              return e.call(t, r)
            };
          case 2:
            return function(r, i) {
              return e.call(t, r, i)
            };
          case 3:
            return function(r, i, n) {
              return e.call(t, r, i, n)
            }
        }
        return function() {
          return e.apply(t, arguments)
        }
      }
    },
    9048: e => {
      e.exports = function(e) {
        if (null == e) throw TypeError("Can't call method on  " + e);
        return e
      }
    },
    180: (e, t, r) => {
      e.exports = !r(1380)((function() {
        return 7 != Object.defineProperty({}, "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    7508: (e, t, r) => {
      var i = r(3176),
        n = r(9712).document,
        a = i(n) && i(n.createElement);
      e.exports = function(e) {
        return a ? n.createElement(e) : {}
      }
    },
    9752: e => {
      e.exports = "constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")
    },
    6632: (e, t, r) => {
      var i = r(7768),
        n = r(6868),
        a = r(3995);
      e.exports = function(e) {
        var t = i(e),
          r = n.f;
        if (r)
          for (var s, o = r(e), l = a.f, h = 0; o.length > h;) l.call(e, s = o[h++]) && t.push(s);
        return t
      }
    },
    1048: (e, t, r) => {
      var i = r(9712),
        n = r(5968),
        a = r(6508),
        s = r(9132),
        o = r(2304),
        l = "prototype",
        h = function(e, t, r) {
          var c, p, u, d = e & h.F,
            f = e & h.G,
            m = e & h.S,
            g = e & h.P,
            v = e & h.B,
            y = e & h.W,
            b = f ? n : n[t] || (n[t] = {}),
            S = b[l],
            x = f ? i : m ? i[t] : (i[t] || {})[l];
          for (c in f && (r = t), r)(p = !d && x && void 0 !== x[c]) && o(b, c) || (u = p ? x[c] : r[c], b[c] = f && "function" != typeof x[c] ? r[c] : v && p ? a(u, i) : y && x[c] == u ? function(e) {
            var t = function(t, r, i) {
              if (this instanceof e) {
                switch (arguments.length) {
                  case 0:
                    return new e;
                  case 1:
                    return new e(t);
                  case 2:
                    return new e(t, r)
                }
                return new e(t, r, i)
              }
              return e.apply(this, arguments)
            };
            return t[l] = e[l], t
          }(u) : g && "function" == typeof u ? a(Function.call, u) : u, g && ((b.virtual || (b.virtual = {}))[c] = u, e & h.R && S && !S[c] && s(S, c, u)))
        };
      h.F = 1, h.G = 2, h.S = 4, h.P = 8, h.B = 16, h.W = 32, h.U = 64, h.R = 128, e.exports = h
    },
    1380: e => {
      e.exports = function(e) {
        try {
          return !!e()
        } catch (e) {
          return !0
        }
      }
    },
    9712: e => {
      var t = e.exports = "undefined" != typeof window && window.Math == Math ? window : "undefined" != typeof self && self.Math == Math ? self : Function("return this")();
      "number" == typeof __g && (__g = t)
    },
    2304: e => {
      var t = {}.hasOwnProperty;
      e.exports = function(e, r) {
        return t.call(e, r)
      }
    },
    9132: (e, t, r) => {
      var i = r(7428),
        n = r(7364);
      e.exports = r(180) ? function(e, t, r) {
        return i.f(e, t, n(1, r))
      } : function(e, t, r) {
        return e[t] = r, e
      }
    },
    5043: (e, t, r) => {
      var i = r(9712).document;
      e.exports = i && i.documentElement
    },
    8820: (e, t, r) => {
      e.exports = !r(180) && !r(1380)((function() {
        return 7 != Object.defineProperty(r(7508)("div"), "a", {
          get: function() {
            return 7
          }
        }).a
      }))
    },
    1960: (e, t, r) => {
      var i = r(5736);
      e.exports = Object("z").propertyIsEnumerable(0) ? Object : function(e) {
        return "String" == i(e) ? e.split("") : Object(e)
      }
    },
    1126: (e, t, r) => {
      var i = r(5736);
      e.exports = Array.isArray || function(e) {
        return "Array" == i(e)
      }
    },
    3176: e => {
      e.exports = function(e) {
        return "object" == typeof e ? null !== e : "function" == typeof e
      }
    },
    916: (e, t, r) => {
      "use strict";
      var i = r(880),
        n = r(7364),
        a = r(6080),
        s = {};
      r(9132)(s, r(3716)("iterator"), (function() {
        return this
      })), e.exports = function(e, t, r) {
        e.prototype = i(s, {
          next: n(1, r)
        }), a(e, t + " Iterator")
      }
    },
    3240: (e, t, r) => {
      "use strict";
      var i = r(4292),
        n = r(1048),
        a = r(4936),
        s = r(9132),
        o = r(3416),
        l = r(916),
        h = r(6080),
        c = r(9640),
        p = r(3716)("iterator"),
        u = !([].keys && "next" in [].keys()),
        d = "keys",
        f = "values",
        m = function() {
          return this
        };
      e.exports = function(e, t, r, g, v, y, b) {
        l(r, t, g);
        var S, x, E, w = function(e) {
            if (!u && e in _) return _[e];
            switch (e) {
              case d:
              case f:
                return function() {
                  return new r(this, e)
                }
            }
            return function() {
              return new r(this, e)
            }
          },
          P = t + " Iterator",
          T = v == f,
          C = !1,
          _ = e.prototype,
          M = _[p] || _["@@iterator"] || v && _[v],
          A = M || w(v),
          k = v ? T ? w("entries") : A : void 0,
          D = "Array" == t && _.entries || M;
        if (D && (E = c(D.call(new e))) !== Object.prototype && E.next && (h(E, P, !0), i || "function" == typeof E[p] || s(E, p, m)), T && M && M.name !== f && (C = !0, A = function() {
            return M.call(this)
          }), i && !b || !u && !C && _[p] || s(_, p, A), o[t] = A, o[P] = m, v)
          if (S = {
              values: T ? A : w(f),
              keys: y ? A : w(d),
              entries: k
            }, b)
            for (x in S) x in _ || a(_, x, S[x]);
          else n(n.P + n.F * (u || C), t, S);
        return S
      }
    },
    3848: e => {
      e.exports = function(e, t) {
        return {
          value: t,
          done: !!e
        }
      }
    },
    3416: e => {
      e.exports = {}
    },
    4292: e => {
      e.exports = !0
    },
    6980: (e, t, r) => {
      var i = r(4820)("meta"),
        n = r(3176),
        a = r(2304),
        s = r(7428).f,
        o = 0,
        l = Object.isExtensible || function() {
          return !0
        },
        h = !r(1380)((function() {
          return l(Object.preventExtensions({}))
        })),
        c = function(e) {
          s(e, i, {
            value: {
              i: "O" + ++o,
              w: {}
            }
          })
        },
        p = e.exports = {
          KEY: i,
          NEED: !1,
          fastKey: function(e, t) {
            if (!n(e)) return "symbol" == typeof e ? e : ("string" == typeof e ? "S" : "P") + e;
            if (!a(e, i)) {
              if (!l(e)) return "F";
              if (!t) return "E";
              c(e)
            }
            return e[i].i
          },
          getWeak: function(e, t) {
            if (!a(e, i)) {
              if (!l(e)) return !0;
              if (!t) return !1;
              c(e)
            }
            return e[i].w
          },
          onFreeze: function(e) {
            return h && p.NEED && l(e) && !a(e, i) && c(e), e
          }
        }
    },
    6948: (e, t, r) => {
      "use strict";
      var i = r(180),
        n = r(7768),
        a = r(6868),
        s = r(3995),
        o = r(4524),
        l = r(1960),
        h = Object.assign;
      e.exports = !h || r(1380)((function() {
        var e = {},
          t = {},
          r = Symbol(),
          i = "abcdefghijklmnopqrst";
        return e[r] = 7, i.split("").forEach((function(e) {
          t[e] = e
        })), 7 != h({}, e)[r] || Object.keys(h({}, t)).join("") != i
      })) ? function(e, t) {
        for (var r = o(e), h = arguments.length, c = 1, p = a.f, u = s.f; h > c;)
          for (var d, f = l(arguments[c++]), m = p ? n(f).concat(p(f)) : n(f), g = m.length, v = 0; g > v;) d = m[v++], i && !u.call(f, d) || (r[d] = f[d]);
        return r
      } : h
    },
    880: (e, t, r) => {
      var i = r(7544),
        n = r(9176),
        a = r(9752),
        s = r(8504)("IE_PROTO"),
        o = function() {},
        l = "prototype",
        h = function() {
          var e, t = r(7508)("iframe"),
            i = a.length;
          for (t.style.display = "none", r(5043).appendChild(t), t.src = "javascript:", (e = t.contentWindow.document).open(), e.write("<script>document.F=Object<\/script>"), e.close(), h = e.F; i--;) delete h[l][a[i]];
          return h()
        };
      e.exports = Object.create || function(e, t) {
        var r;
        return null !== e ? (o[l] = i(e), r = new o, o[l] = null, r[s] = e) : r = h(), void 0 === t ? r : n(r, t)
      }
    },
    7428: (e, t, r) => {
      var i = r(7544),
        n = r(8820),
        a = r(5812),
        s = Object.defineProperty;
      t.f = r(180) ? Object.defineProperty : function(e, t, r) {
        if (i(e), t = a(t, !0), i(r), n) try {
          return s(e, t, r)
        } catch (e) {}
        if ("get" in r || "set" in r) throw TypeError("Accessors not supported!");
        return "value" in r && (e[t] = r.value), e
      }
    },
    9176: (e, t, r) => {
      var i = r(7428),
        n = r(7544),
        a = r(7768);
      e.exports = r(180) ? Object.defineProperties : function(e, t) {
        n(e);
        for (var r, s = a(t), o = s.length, l = 0; o > l;) i.f(e, r = s[l++], t[r]);
        return e
      }
    },
    8028: (e, t, r) => {
      var i = r(3995),
        n = r(7364),
        a = r(8412),
        s = r(5812),
        o = r(2304),
        l = r(8820),
        h = Object.getOwnPropertyDescriptor;
      t.f = r(180) ? h : function(e, t) {
        if (e = a(e), t = s(t, !0), l) try {
          return h(e, t)
        } catch (e) {}
        if (o(e, t)) return n(!i.f.call(e, t), e[t])
      }
    },
    8488: (e, t, r) => {
      var i = r(8412),
        n = r(7048).f,
        a = {}.toString,
        s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
      e.exports.f = function(e) {
        return s && "[object Window]" == a.call(e) ? function(e) {
          try {
            return n(e)
          } catch (e) {
            return s.slice()
          }
        }(e) : n(i(e))
      }
    },
    7048: (e, t, r) => {
      var i = r(4136),
        n = r(9752).concat("length", "prototype");
      t.f = Object.getOwnPropertyNames || function(e) {
        return i(e, n)
      }
    },
    6868: (e, t) => {
      t.f = Object.getOwnPropertySymbols
    },
    9640: (e, t, r) => {
      var i = r(2304),
        n = r(4524),
        a = r(8504)("IE_PROTO"),
        s = Object.prototype;
      e.exports = Object.getPrototypeOf || function(e) {
        return e = n(e), i(e, a) ? e[a] : "function" == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? s : null
      }
    },
    4136: (e, t, r) => {
      var i = r(2304),
        n = r(8412),
        a = r(9e3)(!1),
        s = r(8504)("IE_PROTO");
      e.exports = function(e, t) {
        var r, o = n(e),
          l = 0,
          h = [];
        for (r in o) r != s && i(o, r) && h.push(r);
        for (; t.length > l;) i(o, r = t[l++]) && (~a(h, r) || h.push(r));
        return h
      }
    },
    7768: (e, t, r) => {
      var i = r(4136),
        n = r(9752);
      e.exports = Object.keys || function(e) {
        return i(e, n)
      }
    },
    3995: (e, t) => {
      t.f = {}.propertyIsEnumerable
    },
    7320: (e, t, r) => {
      var i = r(1048),
        n = r(5968),
        a = r(1380);
      e.exports = function(e, t) {
        var r = (n.Object || {})[e] || Object[e],
          s = {};
        s[e] = t(r), i(i.S + i.F * a((function() {
          r(1)
        })), "Object", s)
      }
    },
    7364: e => {
      e.exports = function(e, t) {
        return {
          enumerable: !(1 & e),
          configurable: !(2 & e),
          writable: !(4 & e),
          value: t
        }
      }
    },
    4936: (e, t, r) => {
      e.exports = r(9132)
    },
    4440: (e, t, r) => {
      var i = r(3176),
        n = r(7544),
        a = function(e, t) {
          if (n(e), !i(t) && null !== t) throw TypeError(t + ": can't set as prototype!")
        };
      e.exports = {
        set: Object.setPrototypeOf || ("__proto__" in {} ? function(e, t, i) {
          try {
            (i = r(6508)(Function.call, r(8028).f(Object.prototype, "__proto__").set, 2))(e, []), t = !(e instanceof Array)
          } catch (e) {
            t = !0
          }
          return function(e, r) {
            return a(e, r), t ? e.__proto__ = r : i(e, r), e
          }
        }({}, !1) : void 0),
        check: a
      }
    },
    6080: (e, t, r) => {
      var i = r(7428).f,
        n = r(2304),
        a = r(3716)("toStringTag");
      e.exports = function(e, t, r) {
        e && !n(e = r ? e : e.prototype, a) && i(e, a, {
          configurable: !0,
          value: t
        })
      }
    },
    8504: (e, t, r) => {
      var i = r(2944)("keys"),
        n = r(4820);
      e.exports = function(e) {
        return i[e] || (i[e] = n(e))
      }
    },
    2944: (e, t, r) => {
      var i = r(5968),
        n = r(9712),
        a = "__core-js_shared__",
        s = n[a] || (n[a] = {});
      (e.exports = function(e, t) {
        return s[e] || (s[e] = void 0 !== t ? t : {})
      })("versions", []).push({
        version: i.version,
        mode: r(4292) ? "pure" : "global",
        copyright: "© 2020 Denis Pushkarev (zloirock.ru)"
      })
    },
    3556: (e, t, r) => {
      var i = r(4456),
        n = r(9048);
      e.exports = function(e) {
        return function(t, r) {
          var a, s, o = String(n(t)),
            l = i(r),
            h = o.length;
          return l < 0 || l >= h ? e ? "" : void 0 : (a = o.charCodeAt(l)) < 55296 || a > 56319 || l + 1 === h || (s = o.charCodeAt(l + 1)) < 56320 || s > 57343 ? e ? o.charAt(l) : a : e ? o.slice(l, l + 2) : s - 56320 + (a - 55296 << 10) + 65536
        }
      }
    },
    4124: (e, t, r) => {
      var i = r(4456),
        n = Math.max,
        a = Math.min;
      e.exports = function(e, t) {
        return (e = i(e)) < 0 ? n(e + t, 0) : a(e, t)
      }
    },
    4456: e => {
      var t = Math.ceil,
        r = Math.floor;
      e.exports = function(e) {
        return isNaN(e = +e) ? 0 : (e > 0 ? r : t)(e)
      }
    },
    8412: (e, t, r) => {
      var i = r(1960),
        n = r(9048);
      e.exports = function(e) {
        return i(n(e))
      }
    },
    5008: (e, t, r) => {
      var i = r(4456),
        n = Math.min;
      e.exports = function(e) {
        return e > 0 ? n(i(e), 9007199254740991) : 0
      }
    },
    4524: (e, t, r) => {
      var i = r(9048);
      e.exports = function(e) {
        return Object(i(e))
      }
    },
    5812: (e, t, r) => {
      var i = r(3176);
      e.exports = function(e, t) {
        if (!i(e)) return e;
        var r, n;
        if (t && "function" == typeof(r = e.toString) && !i(n = r.call(e))) return n;
        if ("function" == typeof(r = e.valueOf) && !i(n = r.call(e))) return n;
        if (!t && "function" == typeof(r = e.toString) && !i(n = r.call(e))) return n;
        throw TypeError("Can't convert object to primitive value")
      }
    },
    4820: e => {
      var t = 0,
        r = Math.random();
      e.exports = function(e) {
        return "Symbol(".concat(void 0 === e ? "" : e, ")_", (++t + r).toString(36))
      }
    },
    5516: (e, t, r) => {
      var i = r(9712),
        n = r(5968),
        a = r(4292),
        s = r(7368),
        o = r(7428).f;
      e.exports = function(e) {
        var t = n.Symbol || (n.Symbol = a ? {} : i.Symbol || {});
        "_" == e.charAt(0) || e in t || o(t, e, {
          value: s.f(e)
        })
      }
    },
    7368: (e, t, r) => {
      t.f = r(3716)
    },
    3716: (e, t, r) => {
      var i = r(2944)("wks"),
        n = r(4820),
        a = r(9712).Symbol,
        s = "function" == typeof a;
      (e.exports = function(e) {
        return i[e] || (i[e] = s && a[e] || (s ? a : n)("Symbol." + e))
      }).store = i
    },
    9560: (e, t, r) => {
      "use strict";
      var i = r(16),
        n = r(3848),
        a = r(3416),
        s = r(8412);
      e.exports = r(3240)(Array, "Array", (function(e, t) {
        this._t = s(e), this._i = 0, this._k = t
      }), (function() {
        var e = this._t,
          t = this._k,
          r = this._i++;
        return !e || r >= e.length ? (this._t = void 0, n(1)) : n(0, "keys" == t ? r : "values" == t ? e[r] : [r, e[r]])
      }), "values"), a.Arguments = a.Array, i("keys"), i("values"), i("entries")
    },
    8960: (e, t, r) => {
      var i = r(1048);
      i(i.S + i.F, "Object", {
        assign: r(6948)
      })
    },
    9616: (e, t, r) => {
      var i = r(1048);
      i(i.S, "Object", {
        create: r(880)
      })
    },
    5376: (e, t, r) => {
      var i = r(1048);
      i(i.S + i.F * !r(180), "Object", {
        defineProperty: r(7428).f
      })
    },
    2660: (e, t, r) => {
      var i = r(4524),
        n = r(9640);
      r(7320)("getPrototypeOf", (function() {
        return function(e) {
          return n(i(e))
        }
      }))
    },
    4252: (e, t, r) => {
      var i = r(1048);
      i(i.S, "Object", {
        setPrototypeOf: r(4440).set
      })
    },
    4623: () => {},
    3928: (e, t, r) => {
      "use strict";
      var i = r(3556)(!0);
      r(3240)(String, "String", (function(e) {
        this._t = String(e), this._i = 0
      }), (function() {
        var e, t = this._t,
          r = this._i;
        return r >= t.length ? {
          value: void 0,
          done: !0
        } : (e = i(t, r), this._i += e.length, {
          value: e,
          done: !1
        })
      }))
    },
    4396: (e, t, r) => {
      "use strict";
      var i = r(9712),
        n = r(2304),
        a = r(180),
        s = r(1048),
        o = r(4936),
        l = r(6980).KEY,
        h = r(1380),
        c = r(2944),
        p = r(6080),
        u = r(4820),
        d = r(3716),
        f = r(7368),
        m = r(5516),
        g = r(6632),
        v = r(1126),
        y = r(7544),
        b = r(3176),
        S = r(4524),
        x = r(8412),
        E = r(5812),
        w = r(7364),
        P = r(880),
        T = r(8488),
        C = r(8028),
        _ = r(6868),
        M = r(7428),
        A = r(7768),
        k = C.f,
        D = M.f,
        I = T.f,
        F = i.Symbol,
        L = i.JSON,
        O = L && L.stringify,
        R = "prototype",
        V = d("_hidden"),
        B = d("toPrimitive"),
        N = {}.propertyIsEnumerable,
        z = c("symbol-registry"),
        G = c("symbols"),
        j = c("op-symbols"),
        H = Object[R],
        W = "function" == typeof F && !!_.f,
        X = i.QObject,
        Y = !X || !X[R] || !X[R].findChild,
        U = a && h((function() {
          return 7 != P(D({}, "a", {
            get: function() {
              return D(this, "a", {
                value: 7
              }).a
            }
          })).a
        })) ? function(e, t, r) {
          var i = k(H, t);
          i && delete H[t], D(e, t, r), i && e !== H && D(H, t, i)
        } : D,
        q = function(e) {
          var t = G[e] = P(F[R]);
          return t._k = e, t
        },
        Z = W && "symbol" == typeof F.iterator ? function(e) {
          return "symbol" == typeof e
        } : function(e) {
          return e instanceof F
        },
        $ = function(e, t, r) {
          return e === H && $(j, t, r), y(e), t = E(t, !0), y(r), n(G, t) ? (r.enumerable ? (n(e, V) && e[V][t] && (e[V][t] = !1), r = P(r, {
            enumerable: w(0, !1)
          })) : (n(e, V) || D(e, V, w(1, {})), e[V][t] = !0), U(e, t, r)) : D(e, t, r)
        },
        J = function(e, t) {
          y(e);
          for (var r, i = g(t = x(t)), n = 0, a = i.length; a > n;) $(e, r = i[n++], t[r]);
          return e
        },
        K = function(e) {
          var t = N.call(this, e = E(e, !0));
          return !(this === H && n(G, e) && !n(j, e)) && (!(t || !n(this, e) || !n(G, e) || n(this, V) && this[V][e]) || t)
        },
        Q = function(e, t) {
          if (e = x(e), t = E(t, !0), e !== H || !n(G, t) || n(j, t)) {
            var r = k(e, t);
            return !r || !n(G, t) || n(e, V) && e[V][t] || (r.enumerable = !0), r
          }
        },
        ee = function(e) {
          for (var t, r = I(x(e)), i = [], a = 0; r.length > a;) n(G, t = r[a++]) || t == V || t == l || i.push(t);
          return i
        },
        te = function(e) {
          for (var t, r = e === H, i = I(r ? j : x(e)), a = [], s = 0; i.length > s;) !n(G, t = i[s++]) || r && !n(H, t) || a.push(G[t]);
          return a
        };
      W || (o((F = function() {
        if (this instanceof F) throw TypeError("Symbol is not a constructor!");
        var e = u(arguments.length > 0 ? arguments[0] : void 0),
          t = function(r) {
            this === H && t.call(j, r), n(this, V) && n(this[V], e) && (this[V][e] = !1), U(this, e, w(1, r))
          };
        return a && Y && U(H, e, {
          configurable: !0,
          set: t
        }), q(e)
      })[R], "toString", (function() {
        return this._k
      })), C.f = Q, M.f = $, r(7048).f = T.f = ee, r(3995).f = K, _.f = te, a && !r(4292) && o(H, "propertyIsEnumerable", K, !0), f.f = function(e) {
        return q(d(e))
      }), s(s.G + s.W + s.F * !W, {
        Symbol: F
      });
      for (var re = "hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","), ie = 0; re.length > ie;) d(re[ie++]);
      for (var ne = A(d.store), ae = 0; ne.length > ae;) m(ne[ae++]);
      s(s.S + s.F * !W, "Symbol", {
        for: function(e) {
          return n(z, e += "") ? z[e] : z[e] = F(e)
        },
        keyFor: function(e) {
          if (!Z(e)) throw TypeError(e + " is not a symbol!");
          for (var t in z)
            if (z[t] === e) return t
        },
        useSetter: function() {
          Y = !0
        },
        useSimple: function() {
          Y = !1
        }
      }), s(s.S + s.F * !W, "Object", {
        create: function(e, t) {
          return void 0 === t ? P(e) : J(P(e), t)
        },
        defineProperty: $,
        defineProperties: J,
        getOwnPropertyDescriptor: Q,
        getOwnPropertyNames: ee,
        getOwnPropertySymbols: te
      });
      var se = h((function() {
        _.f(1)
      }));
      s(s.S + s.F * se, "Object", {
        getOwnPropertySymbols: function(e) {
          return _.f(S(e))
        }
      }), L && s(s.S + s.F * (!W || h((function() {
        var e = F();
        return "[null]" != O([e]) || "{}" != O({
          a: e
        }) || "{}" != O(Object(e))
      }))), "JSON", {
        stringify: function(e) {
          for (var t, r, i = [e], n = 1; arguments.length > n;) i.push(arguments[n++]);
          if (r = t = i[1], (b(t) || void 0 !== e) && !Z(e)) return v(t) || (t = function(e, t) {
            if ("function" == typeof r && (t = r.call(this, e, t)), !Z(t)) return t
          }), i[1] = t, O.apply(L, i)
        }
      }), F[R][B] || r(9132)(F[R], B, F[R].valueOf), p(F, "Symbol"), p(Math, "Math", !0), p(i.JSON, "JSON", !0)
    },
    2880: (e, t, r) => {
      r(5516)("asyncIterator")
    },
    929: (e, t, r) => {
      r(5516)("observable")
    },
    9888: (e, t, r) => {
      r(9560);
      for (var i = r(9712), n = r(9132), a = r(3416), s = r(3716)("toStringTag"), o = "CSSRuleList,CSSStyleDeclaration,CSSValueList,ClientRectList,DOMRectList,DOMStringList,DOMTokenList,DataTransferItemList,FileList,HTMLAllCollection,HTMLCollection,HTMLFormElement,HTMLSelectElement,MediaList,MimeTypeArray,NamedNodeMap,NodeList,PaintRequestList,Plugin,PluginArray,SVGLengthList,SVGNumberList,SVGPathSegList,SVGPointList,SVGStringList,SVGTransformList,SourceBufferList,StyleSheetList,TextTrackCueList,TextTrackList,TouchList".split(","), l = 0; l < o.length; l++) {
        var h = o[l],
          c = i[h],
          p = c && c.prototype;
        p && !p[s] && n(p, s, h), a[h] = a.Array
      }
    },
    8912: (e, t, r) => {
      "use strict";
      r.d(t, {
        cD: () => h
      });
      var i = r(8200),
        n = (Object.defineProperty, new Map),
        a = new WeakMap,
        s = 0,
        o = void 0;

      function l(e, t, r = {}, i = o) {
        if (void 0 === window.IntersectionObserver && void 0 !== i) {
          const n = e.getBoundingClientRect();
          return t(i, {
            isIntersecting: i,
            target: e,
            intersectionRatio: "number" == typeof r.threshold ? r.threshold : 0,
            time: 0,
            boundingClientRect: n,
            intersectionRect: n,
            rootBounds: n
          }), () => {}
        }
        const {
          id: l,
          observer: h,
          elements: c
        } = function(e) {
          let t = function(e) {
              return Object.keys(e).sort().filter((t => void 0 !== e[t])).map((t => {
                return `${t}_${"root"===t?(r=e.root,r?(a.has(r)||(s+=1,a.set(r,s.toString())),a.get(r)):"0"):e[t]}`;
                var r
              })).toString()
            }(e),
            r = n.get(t);
          if (!r) {
            const i = new Map;
            let a;
            const s = new IntersectionObserver((t => {
              t.forEach((t => {
                var r;
                const n = t.isIntersecting && a.some((e => t.intersectionRatio >= e));
                e.trackVisibility && void 0 === t.isVisible && (t.isVisible = n), null == (r = i.get(t.target)) || r.forEach((e => {
                  e(n, t)
                }))
              }))
            }), e);
            a = s.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), r = {
              id: t,
              observer: s,
              elements: i
            }, n.set(t, r)
          }
          return r
        }(r);
        let p = c.get(e) || [];
        return c.has(e) || c.set(e, p), p.push(t), h.observe(e),
          function() {
            p.splice(p.indexOf(t), 1), 0 === p.length && (c.delete(e), h.unobserve(e)), 0 === c.size && (h.disconnect(), n.delete(l))
          }
      }

      function h({
        threshold: e,
        delay: t,
        trackVisibility: r,
        rootMargin: n,
        root: a,
        triggerOnce: s,
        skip: o,
        initialInView: h,
        fallbackInView: c,
        onChange: p
      } = {}) {
        var u;
        const [d, f] = i.useState(null), m = i.useRef(), [g, v] = i.useState({
          inView: !!h,
          entry: void 0
        });
        m.current = p, i.useEffect((() => {
          if (o || !d) return;
          let i;
          return i = l(d, ((e, t) => {
            v({
              inView: e,
              entry: t
            }), m.current && m.current(e, t), t.isIntersecting && s && i && (i(), i = void 0)
          }), {
            root: a,
            rootMargin: n,
            threshold: e,
            trackVisibility: r,
            delay: t
          }, c), () => {
            i && i()
          }
        }), [Array.isArray(e) ? e.toString() : e, d, a, n, s, o, r, c, t]);
        const y = null == (u = g.entry) ? void 0 : u.target,
          b = i.useRef();
        d || !y || s || o || b.current === y || (b.current = y, v({
          inView: !!h,
          entry: void 0
        }));
        const S = [f, g.inView, g.entry];
        return S.ref = S[0], S.inView = S[1], S.entry = S[2], S
      }
      i.Component
    },
    8548: (e, t, r) => {
      "use strict";
      r.d(t, {
        _2: () => n
      }), r(1068);
      var i = r(5848);

      function n(e) {
        let {
          swiper: t,
          extendParams: r,
          on: n,
          emit: a
        } = e;

        function s(e) {
          let r;
          return e && "string" == typeof e && t.isElement && (r = t.el.querySelector(e), r) ? r : (e && ("string" == typeof e && (r = [...document.querySelectorAll(e)]), t.params.uniqueNavElements && "string" == typeof e && r.length > 1 && 1 === t.el.querySelectorAll(e).length && (r = t.el.querySelector(e))), e && !r ? e : r)
        }

        function o(e, r) {
          const n = t.params.navigation;
          (e = (0, i.m)(e)).forEach((e => {
            e && (e.classList[r ? "add" : "remove"](...n.disabledClass.split(" ")), "BUTTON" === e.tagName && (e.disabled = r), t.params.watchOverflow && t.enabled && e.classList[t.isLocked ? "add" : "remove"](n.lockClass))
          }))
        }

        function l() {
          const {
            nextEl: e,
            prevEl: r
          } = t.navigation;
          if (t.params.loop) return o(r, !1), void o(e, !1);
          o(r, t.isBeginning && !t.params.rewind), o(e, t.isEnd && !t.params.rewind)
        }

        function h(e) {
          e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), a("navigationPrev"))
        }

        function c(e) {
          e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), a("navigationNext"))
        }

        function p() {
          const e = t.params.navigation;
          if (t.params.navigation = function(e, t, r, n) {
              return e.params.createElements && Object.keys(n).forEach((a => {
                if (!r[a] && !0 === r.auto) {
                  let s = (0, i.e)(e.el, `.${n[a]}`)[0];
                  s || (s = (0, i.c)("div", n[a]), s.className = n[a], e.el.append(s)), r[a] = s, t[a] = s
                }
              })), r
            }(t, t.originalParams.navigation, t.params.navigation, {
              nextEl: "swiper-button-next",
              prevEl: "swiper-button-prev"
            }), !e.nextEl && !e.prevEl) return;
          let r = s(e.nextEl),
            n = s(e.prevEl);
          Object.assign(t.navigation, {
            nextEl: r,
            prevEl: n
          }), r = (0, i.m)(r), n = (0, i.m)(n);
          const a = (r, i) => {
            r && r.addEventListener("click", "next" === i ? c : h), !t.enabled && r && r.classList.add(...e.lockClass.split(" "))
          };
          r.forEach((e => a(e, "next"))), n.forEach((e => a(e, "prev")))
        }

        function u() {
          let {
            nextEl: e,
            prevEl: r
          } = t.navigation;
          e = (0, i.m)(e), r = (0, i.m)(r);
          const n = (e, r) => {
            e.removeEventListener("click", "next" === r ? c : h), e.classList.remove(...t.params.navigation.disabledClass.split(" "))
          };
          e.forEach((e => n(e, "next"))), r.forEach((e => n(e, "prev")))
        }
        r({
          navigation: {
            nextEl: null,
            prevEl: null,
            hideOnClick: !1,
            disabledClass: "swiper-button-disabled",
            hiddenClass: "swiper-button-hidden",
            lockClass: "swiper-button-lock",
            navigationDisabledClass: "swiper-navigation-disabled"
          }
        }), t.navigation = {
          nextEl: null,
          prevEl: null
        }, n("init", (() => {
          !1 === t.params.navigation.enabled ? d() : (p(), l())
        })), n("toEdge fromEdge lock unlock", (() => {
          l()
        })), n("destroy", (() => {
          u()
        })), n("enable disable", (() => {
          let {
            nextEl: e,
            prevEl: r
          } = t.navigation;
          e = (0, i.m)(e), r = (0, i.m)(r), t.enabled ? l() : [...e, ...r].filter((e => !!e)).forEach((e => e.classList.add(t.params.navigation.lockClass)))
        })), n("click", ((e, r) => {
          let {
            nextEl: n,
            prevEl: s
          } = t.navigation;
          n = (0, i.m)(n), s = (0, i.m)(s);
          const o = r.target;
          if (t.params.navigation.hideOnClick && !s.includes(o) && !n.includes(o)) {
            if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === o || t.pagination.el.contains(o))) return;
            let e;
            n.length ? e = n[0].classList.contains(t.params.navigation.hiddenClass) : s.length && (e = s[0].classList.contains(t.params.navigation.hiddenClass)), a(!0 === e ? "navigationShow" : "navigationHide"), [...n, ...s].filter((e => !!e)).forEach((e => e.classList.toggle(t.params.navigation.hiddenClass)))
          }
        }));
        const d = () => {
          t.el.classList.add(...t.params.navigation.navigationDisabledClass.split(" ")), u()
        };
        Object.assign(t.navigation, {
          enable: () => {
            t.el.classList.remove(...t.params.navigation.navigationDisabledClass.split(" ")), p(), l()
          },
          disable: d,
          update: l,
          init: p,
          destroy: u
        })
      }
    },
    1068: (e, t, r) => {
      "use strict";

      function i(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
      }

      function n(e, t) {
        void 0 === e && (e = {}), void 0 === t && (t = {}), Object.keys(t).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : i(t[r]) && i(e[r]) && Object.keys(t[r]).length > 0 && n(e[r], t[r])
        }))
      }
      r.d(t, {
        a: () => l,
        g: () => s
      });
      const a = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
          blur() {},
          nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
          initEvent() {}
        }),
        createElement: () => ({
          children: [],
          childNodes: [],
          style: {},
          setAttribute() {},
          getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        }
      };

      function s() {
        const e = "undefined" != typeof document ? document : {};
        return n(e, a), e
      }
      const o = {
        document: a,
        navigator: {
          userAgent: ""
        },
        location: {
          hash: "",
          host: "",
          hostname: "",
          href: "",
          origin: "",
          pathname: "",
          protocol: "",
          search: ""
        },
        history: {
          replaceState() {},
          pushState() {},
          go() {},
          back() {}
        },
        CustomEvent: function() {
          return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
          getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
          "undefined" != typeof setTimeout && clearTimeout(e)
        }
      };

      function l() {
        const e = "undefined" != typeof window ? window : {};
        return n(e, o), e
      }
    },
    5848: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => b,
        c: () => f,
        d: () => s,
        e: () => u,
        f: () => S,
        g: () => y,
        i: () => o,
        m: () => x,
        n: () => a,
        o: () => v,
        p: () => g,
        q: () => m,
        r: () => p,
        s: () => c,
        t: () => d,
        u: () => h,
        v: () => n
      });
      var i = r(1068);

      function n(e) {
        const t = e;
        Object.keys(t).forEach((e => {
          try {
            t[e] = null
          } catch (e) {}
          try {
            delete t[e]
          } catch (e) {}
        }))
      }

      function a(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t)
      }

      function s() {
        return Date.now()
      }

      function o(e, t) {
        void 0 === t && (t = "x");
        const r = (0, i.a)();
        let n, a, s;
        const o = function(e) {
          const t = (0, i.a)();
          let r;
          return t.getComputedStyle && (r = t.getComputedStyle(e, null)), !r && e.currentStyle && (r = e.currentStyle), r || (r = e.style), r
        }(e);
        return r.WebKitCSSMatrix ? (a = o.transform || o.webkitTransform, a.split(",").length > 6 && (a = a.split(", ").map((e => e.replace(",", "."))).join(", ")), s = new r.WebKitCSSMatrix("none" === a ? "" : a)) : (s = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), n = s.toString().split(",")), "x" === t && (a = r.WebKitCSSMatrix ? s.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (a = r.WebKitCSSMatrix ? s.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), a || 0
      }

      function l(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
      }

      function h() {
        const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
          t = ["__proto__", "constructor", "prototype"];
        for (let i = 1; i < arguments.length; i += 1) {
          const n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
          if (null != n && (r = n, !("undefined" != typeof window && void 0 !== window.HTMLElement ? r instanceof HTMLElement : r && (1 === r.nodeType || 11 === r.nodeType)))) {
            const r = Object.keys(Object(n)).filter((e => t.indexOf(e) < 0));
            for (let t = 0, i = r.length; t < i; t += 1) {
              const i = r[t],
                a = Object.getOwnPropertyDescriptor(n, i);
              void 0 !== a && a.enumerable && (l(e[i]) && l(n[i]) ? n[i].__swiper__ ? e[i] = n[i] : h(e[i], n[i]) : !l(e[i]) && l(n[i]) ? (e[i] = {}, n[i].__swiper__ ? e[i] = n[i] : h(e[i], n[i])) : e[i] = n[i])
            }
          }
        }
        var r;
        return e
      }

      function c(e, t, r) {
        e.style.setProperty(t, r)
      }

      function p(e) {
        let {
          swiper: t,
          targetPosition: r,
          side: n
        } = e;
        const a = (0, i.a)(),
          s = -t.translate;
        let o, l = null;
        const h = t.params.speed;
        t.wrapperEl.style.scrollSnapType = "none", a.cancelAnimationFrame(t.cssModeFrameID);
        const c = r > s ? "next" : "prev",
          p = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
          u = () => {
            o = (new Date).getTime(), null === l && (l = o);
            const e = Math.max(Math.min((o - l) / h, 1), 0),
              i = .5 - Math.cos(e * Math.PI) / 2;
            let c = s + i * (r - s);
            if (p(c, r) && (c = r), t.wrapperEl.scrollTo({
                [n]: c
              }), p(c, r)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout((() => {
              t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                [n]: c
              })
            })), void a.cancelAnimationFrame(t.cssModeFrameID);
            t.cssModeFrameID = a.requestAnimationFrame(u)
          };
        u()
      }

      function u(e, t) {
        return void 0 === t && (t = ""), [...e.children].filter((e => e.matches(t)))
      }

      function d(e) {
        try {
          return void console.warn(e)
        } catch (e) {}
      }

      function f(e, t) {
        void 0 === t && (t = []);
        const r = document.createElement(e);
        return r.classList.add(...Array.isArray(t) ? t : function(e) {
          return void 0 === e && (e = ""), e.trim().split(" ").filter((e => !!e.trim()))
        }(t)), r
      }

      function m(e, t) {
        const r = [];
        for (; e.previousElementSibling;) {
          const i = e.previousElementSibling;
          t ? i.matches(t) && r.push(i) : r.push(i), e = i
        }
        return r
      }

      function g(e, t) {
        const r = [];
        for (; e.nextElementSibling;) {
          const i = e.nextElementSibling;
          t ? i.matches(t) && r.push(i) : r.push(i), e = i
        }
        return r
      }

      function v(e, t) {
        return (0, i.a)().getComputedStyle(e, null).getPropertyValue(t)
      }

      function y(e) {
        let t, r = e;
        if (r) {
          for (t = 0; null !== (r = r.previousSibling);) 1 === r.nodeType && (t += 1);
          return t
        }
      }

      function b(e, t) {
        const r = [];
        let i = e.parentElement;
        for (; i;) t ? i.matches(t) && r.push(i) : r.push(i), i = i.parentElement;
        return r
      }

      function S(e, t, r) {
        const n = (0, i.a)();
        return r ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(n.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
      }

      function x(e) {
        return (Array.isArray(e) ? e : [e]).filter((e => !!e))
      }
    },
    8111: (e, t, r) => {
      "use strict";
      r.d(t, {
        wx: () => $,
        Ky: () => J
      });
      var i = r(8200),
        n = r(1068),
        a = r(5848);
      let s, o, l;

      function h() {
        return s || (s = function() {
          const e = (0, n.a)(),
            t = (0, n.g)();
          return {
            smoothScroll: t.documentElement && t.documentElement.style && "scrollBehavior" in t.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch)
          }
        }()), s
      }

      function c(e) {
        return void 0 === e && (e = {}), o || (o = function(e) {
          let {
            userAgent: t
          } = void 0 === e ? {} : e;
          const r = h(),
            i = (0, n.a)(),
            a = i.navigator.platform,
            s = t || i.navigator.userAgent,
            o = {
              ios: !1,
              android: !1
            },
            l = i.screen.width,
            c = i.screen.height,
            p = s.match(/(Android);?[\s\/]+([\d.]+)?/);
          let u = s.match(/(iPad).*OS\s([\d_]+)/);
          const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
            f = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
            m = "Win32" === a;
          let g = "MacIntel" === a;
          return !u && g && r.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${c}`) >= 0 && (u = s.match(/(Version)\/([\d.]+)/), u || (u = [0, 1, "13_0_0"]), g = !1), p && !m && (o.os = "android", o.android = !0), (u || f || d) && (o.os = "ios", o.ios = !0), o
        }(e)), o
      }
      var p = {
        on(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;
          const n = r ? "unshift" : "push";
          return e.split(" ").forEach((e => {
            i.eventsListeners[e] || (i.eventsListeners[e] = []), i.eventsListeners[e][n](t)
          })), i
        },
        once(e, t, r) {
          const i = this;
          if (!i.eventsListeners || i.destroyed) return i;
          if ("function" != typeof t) return i;

          function n() {
            i.off(e, n), n.__emitterProxy && delete n.__emitterProxy;
            for (var r = arguments.length, a = new Array(r), s = 0; s < r; s++) a[s] = arguments[s];
            t.apply(i, a)
          }
          return n.__emitterProxy = t, i.on(e, n, r)
        },
        onAny(e, t) {
          const r = this;
          if (!r.eventsListeners || r.destroyed) return r;
          if ("function" != typeof e) return r;
          const i = t ? "unshift" : "push";
          return r.eventsAnyListeners.indexOf(e) < 0 && r.eventsAnyListeners[i](e), r
        },
        offAny(e) {
          const t = this;
          if (!t.eventsListeners || t.destroyed) return t;
          if (!t.eventsAnyListeners) return t;
          const r = t.eventsAnyListeners.indexOf(e);
          return r >= 0 && t.eventsAnyListeners.splice(r, 1), t
        },
        off(e, t) {
          const r = this;
          return !r.eventsListeners || r.destroyed ? r : r.eventsListeners ? (e.split(" ").forEach((e => {
            void 0 === t ? r.eventsListeners[e] = [] : r.eventsListeners[e] && r.eventsListeners[e].forEach(((i, n) => {
              (i === t || i.__emitterProxy && i.__emitterProxy === t) && r.eventsListeners[e].splice(n, 1)
            }))
          })), r) : r
        },
        emit() {
          const e = this;
          if (!e.eventsListeners || e.destroyed) return e;
          if (!e.eventsListeners) return e;
          let t, r, i;
          for (var n = arguments.length, a = new Array(n), s = 0; s < n; s++) a[s] = arguments[s];
          return "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], r = a.slice(1, a.length), i = e) : (t = a[0].events, r = a[0].data, i = a[0].context || e), r.unshift(i), (Array.isArray(t) ? t : t.split(" ")).forEach((t => {
            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach((e => {
              e.apply(i, [t, ...r])
            })), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach((e => {
              e.apply(i, r)
            }))
          })), e
        }
      };
      const u = (e, t) => {
          if (!e || e.destroyed || !e.params) return;
          const r = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
          if (r) {
            let t = r.querySelector(`.${e.params.lazyPreloaderClass}`);
            !t && e.isElement && (r.shadowRoot ? t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame((() => {
              r.shadowRoot && (t = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`), t && t.remove())
            }))), t && t.remove()
          }
        },
        d = (e, t) => {
          if (!e.slides[t]) return;
          const r = e.slides[t].querySelector('[loading="lazy"]');
          r && r.removeAttribute("loading")
        },
        f = e => {
          if (!e || e.destroyed || !e.params) return;
          let t = e.params.lazyPreloadPrevNext;
          const r = e.slides.length;
          if (!r || !t || t < 0) return;
          t = Math.min(t, r);
          const i = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
            n = e.activeIndex;
          if (e.params.grid && e.params.grid.rows > 1) {
            const r = n,
              a = [r - t];
            return a.push(...Array.from({
              length: t
            }).map(((e, t) => r + i + t))), void e.slides.forEach(((t, r) => {
              a.includes(t.column) && d(e, r)
            }))
          }
          const a = n + i - 1;
          if (e.params.rewind || e.params.loop)
            for (let i = n - t; i <= a + t; i += 1) {
              const t = (i % r + r) % r;
              (t < n || t > a) && d(e, t)
            } else
              for (let i = Math.max(n - t, 0); i <= Math.min(a + t, r - 1); i += 1) i !== n && (i > a || i < n) && d(e, i)
        };
      var m = {
        updateSize: function() {
          const e = this;
          let t, r;
          const i = e.el;
          t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : i.clientWidth, r = void 0 !== e.params.height && null !== e.params.height ? e.params.height : i.clientHeight, 0 === t && e.isHorizontal() || 0 === r && e.isVertical() || (t = t - parseInt((0, a.o)(i, "padding-left") || 0, 10) - parseInt((0, a.o)(i, "padding-right") || 0, 10), r = r - parseInt((0, a.o)(i, "padding-top") || 0, 10) - parseInt((0, a.o)(i, "padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(r) && (r = 0), Object.assign(e, {
            width: t,
            height: r,
            size: e.isHorizontal() ? t : r
          }))
        },
        updateSlides: function() {
          const e = this;

          function t(t, r) {
            return parseFloat(t.getPropertyValue(e.getDirectionLabel(r)) || 0)
          }
          const r = e.params,
            {
              wrapperEl: i,
              slidesEl: n,
              size: s,
              rtlTranslate: o,
              wrongRTL: l
            } = e,
            h = e.virtual && r.virtual.enabled,
            c = h ? e.virtual.slides.length : e.slides.length,
            p = (0, a.e)(n, `.${e.params.slideClass}, swiper-slide`),
            u = h ? e.virtual.slides.length : p.length;
          let d = [];
          const f = [],
            m = [];
          let g = r.slidesOffsetBefore;
          "function" == typeof g && (g = r.slidesOffsetBefore.call(e));
          let v = r.slidesOffsetAfter;
          "function" == typeof v && (v = r.slidesOffsetAfter.call(e));
          const y = e.snapGrid.length,
            b = e.slidesGrid.length;
          let S = r.spaceBetween,
            x = -g,
            E = 0,
            w = 0;
          if (void 0 === s) return;
          "string" == typeof S && S.indexOf("%") >= 0 ? S = parseFloat(S.replace("%", "")) / 100 * s : "string" == typeof S && (S = parseFloat(S)), e.virtualSize = -S, p.forEach((e => {
            o ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
          })), r.centeredSlides && r.cssMode && ((0, a.s)(i, "--swiper-centered-offset-before", ""), (0, a.s)(i, "--swiper-centered-offset-after", ""));
          const P = r.grid && r.grid.rows > 1 && e.grid;
          let T;
          P ? e.grid.initSlides(p) : e.grid && e.grid.unsetSlides();
          const C = "auto" === r.slidesPerView && r.breakpoints && Object.keys(r.breakpoints).filter((e => void 0 !== r.breakpoints[e].slidesPerView)).length > 0;
          for (let i = 0; i < u; i += 1) {
            let n;
            if (T = 0, p[i] && (n = p[i]), P && e.grid.updateSlide(i, n, p), !p[i] || "none" !== (0, a.o)(n, "display")) {
              if ("auto" === r.slidesPerView) {
                C && (p[i].style[e.getDirectionLabel("width")] = "");
                const s = getComputedStyle(n),
                  o = n.style.transform,
                  l = n.style.webkitTransform;
                if (o && (n.style.transform = "none"), l && (n.style.webkitTransform = "none"), r.roundLengths) T = e.isHorizontal() ? (0, a.f)(n, "width", !0) : (0, a.f)(n, "height", !0);
                else {
                  const e = t(s, "width"),
                    r = t(s, "padding-left"),
                    i = t(s, "padding-right"),
                    a = t(s, "margin-left"),
                    o = t(s, "margin-right"),
                    l = s.getPropertyValue("box-sizing");
                  if (l && "border-box" === l) T = e + a + o;
                  else {
                    const {
                      clientWidth: t,
                      offsetWidth: s
                    } = n;
                    T = e + r + i + a + o + (s - t)
                  }
                }
                o && (n.style.transform = o), l && (n.style.webkitTransform = l), r.roundLengths && (T = Math.floor(T))
              } else T = (s - (r.slidesPerView - 1) * S) / r.slidesPerView, r.roundLengths && (T = Math.floor(T)), p[i] && (p[i].style[e.getDirectionLabel("width")] = `${T}px`);
              p[i] && (p[i].swiperSlideSize = T), m.push(T), r.centeredSlides ? (x = x + T / 2 + E / 2 + S, 0 === E && 0 !== i && (x = x - s / 2 - S), 0 === i && (x = x - s / 2 - S), Math.abs(x) < .001 && (x = 0), r.roundLengths && (x = Math.floor(x)), w % r.slidesPerGroup == 0 && d.push(x), f.push(x)) : (r.roundLengths && (x = Math.floor(x)), (w - Math.min(e.params.slidesPerGroupSkip, w)) % e.params.slidesPerGroup == 0 && d.push(x), f.push(x), x = x + T + S), e.virtualSize += T + S, E = T, w += 1
            }
          }
          if (e.virtualSize = Math.max(e.virtualSize, s) + v, o && l && ("slide" === r.effect || "coverflow" === r.effect) && (i.style.width = `${e.virtualSize+S}px`), r.setWrapperSize && (i.style[e.getDirectionLabel("width")] = `${e.virtualSize+S}px`), P && e.grid.updateWrapperSize(T, d), !r.centeredSlides) {
            const t = [];
            for (let i = 0; i < d.length; i += 1) {
              let n = d[i];
              r.roundLengths && (n = Math.floor(n)), d[i] <= e.virtualSize - s && t.push(n)
            }
            d = t, Math.floor(e.virtualSize - s) - Math.floor(d[d.length - 1]) > 1 && d.push(e.virtualSize - s)
          }
          if (h && r.loop) {
            const t = m[0] + S;
            if (r.slidesPerGroup > 1) {
              const i = Math.ceil((e.virtual.slidesBefore + e.virtual.slidesAfter) / r.slidesPerGroup),
                n = t * r.slidesPerGroup;
              for (let e = 0; e < i; e += 1) d.push(d[d.length - 1] + n)
            }
            for (let i = 0; i < e.virtual.slidesBefore + e.virtual.slidesAfter; i += 1) 1 === r.slidesPerGroup && d.push(d[d.length - 1] + t), f.push(f[f.length - 1] + t), e.virtualSize += t
          }
          if (0 === d.length && (d = [0]), 0 !== S) {
            const t = e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
            p.filter(((e, t) => !(r.cssMode && !r.loop) || t !== p.length - 1)).forEach((e => {
              e.style[t] = `${S}px`
            }))
          }
          if (r.centeredSlides && r.centeredSlidesBounds) {
            let e = 0;
            m.forEach((t => {
              e += t + (S || 0)
            })), e -= S;
            const t = e - s;
            d = d.map((e => e <= 0 ? -g : e > t ? t + v : e))
          }
          if (r.centerInsufficientSlides) {
            let e = 0;
            if (m.forEach((t => {
                e += t + (S || 0)
              })), e -= S, e < s) {
              const t = (s - e) / 2;
              d.forEach(((e, r) => {
                d[r] = e - t
              })), f.forEach(((e, r) => {
                f[r] = e + t
              }))
            }
          }
          if (Object.assign(e, {
              slides: p,
              snapGrid: d,
              slidesGrid: f,
              slidesSizesGrid: m
            }), r.centeredSlides && r.cssMode && !r.centeredSlidesBounds) {
            (0, a.s)(i, "--swiper-centered-offset-before", -d[0] + "px"), (0, a.s)(i, "--swiper-centered-offset-after", e.size / 2 - m[m.length - 1] / 2 + "px");
            const t = -e.snapGrid[0],
              r = -e.slidesGrid[0];
            e.snapGrid = e.snapGrid.map((e => e + t)), e.slidesGrid = e.slidesGrid.map((e => e + r))
          }
          if (u !== c && e.emit("slidesLengthChange"), d.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), f.length !== b && e.emit("slidesGridLengthChange"), r.watchSlidesProgress && e.updateSlidesOffset(), e.emit("slidesUpdated"), !(h || r.cssMode || "slide" !== r.effect && "fade" !== r.effect)) {
            const t = `${r.containerModifierClass}backface-hidden`,
              i = e.el.classList.contains(t);
            u <= r.maxBackfaceHiddenSlides ? i || e.el.classList.add(t) : i && e.el.classList.remove(t)
          }
        },
        updateAutoHeight: function(e) {
          const t = this,
            r = [],
            i = t.virtual && t.params.virtual.enabled;
          let n, a = 0;
          "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
          const s = e => i ? t.slides[t.getSlideIndexByData(e)] : t.slides[e];
          if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1)
            if (t.params.centeredSlides)(t.visibleSlides || []).forEach((e => {
              r.push(e)
            }));
            else
              for (n = 0; n < Math.ceil(t.params.slidesPerView); n += 1) {
                const e = t.activeIndex + n;
                if (e > t.slides.length && !i) break;
                r.push(s(e))
              } else r.push(s(t.activeIndex));
          for (n = 0; n < r.length; n += 1)
            if (void 0 !== r[n]) {
              const e = r[n].offsetHeight;
              a = e > a ? e : a
            }(a || 0 === a) && (t.wrapperEl.style.height = `${a}px`)
        },
        updateSlidesOffset: function() {
          const e = this,
            t = e.slides,
            r = e.isElement ? e.isHorizontal() ? e.wrapperEl.offsetLeft : e.wrapperEl.offsetTop : 0;
          for (let i = 0; i < t.length; i += 1) t[i].swiperSlideOffset = (e.isHorizontal() ? t[i].offsetLeft : t[i].offsetTop) - r - e.cssOverflowAdjustment()
        },
        updateSlidesProgress: function(e) {
          void 0 === e && (e = this && this.translate || 0);
          const t = this,
            r = t.params,
            {
              slides: i,
              rtlTranslate: n,
              snapGrid: a
            } = t;
          if (0 === i.length) return;
          void 0 === i[0].swiperSlideOffset && t.updateSlidesOffset();
          let s = -e;
          n && (s = e), i.forEach((e => {
            e.classList.remove(r.slideVisibleClass, r.slideFullyVisibleClass)
          })), t.visibleSlidesIndexes = [], t.visibleSlides = [];
          let o = r.spaceBetween;
          "string" == typeof o && o.indexOf("%") >= 0 ? o = parseFloat(o.replace("%", "")) / 100 * t.size : "string" == typeof o && (o = parseFloat(o));
          for (let e = 0; e < i.length; e += 1) {
            const l = i[e];
            let h = l.swiperSlideOffset;
            r.cssMode && r.centeredSlides && (h -= i[0].swiperSlideOffset);
            const c = (s + (r.centeredSlides ? t.minTranslate() : 0) - h) / (l.swiperSlideSize + o),
              p = (s - a[0] + (r.centeredSlides ? t.minTranslate() : 0) - h) / (l.swiperSlideSize + o),
              u = -(s - h),
              d = u + t.slidesSizesGrid[e],
              f = u >= 0 && u <= t.size - t.slidesSizesGrid[e];
            (u >= 0 && u < t.size - 1 || d > 1 && d <= t.size || u <= 0 && d >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e), i[e].classList.add(r.slideVisibleClass)), f && i[e].classList.add(r.slideFullyVisibleClass), l.progress = n ? -c : c, l.originalProgress = n ? -p : p
          }
        },
        updateProgress: function(e) {
          const t = this;
          if (void 0 === e) {
            const r = t.rtlTranslate ? -1 : 1;
            e = t && t.translate && t.translate * r || 0
          }
          const r = t.params,
            i = t.maxTranslate() - t.minTranslate();
          let {
            progress: n,
            isBeginning: a,
            isEnd: s,
            progressLoop: o
          } = t;
          const l = a,
            h = s;
          if (0 === i) n = 0, a = !0, s = !0;
          else {
            n = (e - t.minTranslate()) / i;
            const r = Math.abs(e - t.minTranslate()) < 1,
              o = Math.abs(e - t.maxTranslate()) < 1;
            a = r || n <= 0, s = o || n >= 1, r && (n = 0), o && (n = 1)
          }
          if (r.loop) {
            const r = t.getSlideIndexByData(0),
              i = t.getSlideIndexByData(t.slides.length - 1),
              n = t.slidesGrid[r],
              a = t.slidesGrid[i],
              s = t.slidesGrid[t.slidesGrid.length - 1],
              l = Math.abs(e);
            o = l >= n ? (l - n) / s : (l + s - a) / s, o > 1 && (o -= 1)
          }
          Object.assign(t, {
            progress: n,
            progressLoop: o,
            isBeginning: a,
            isEnd: s
          }), (r.watchSlidesProgress || r.centeredSlides && r.autoHeight) && t.updateSlidesProgress(e), a && !l && t.emit("reachBeginning toEdge"), s && !h && t.emit("reachEnd toEdge"), (l && !a || h && !s) && t.emit("fromEdge"), t.emit("progress", n)
        },
        updateSlidesClasses: function() {
          const e = this,
            {
              slides: t,
              params: r,
              slidesEl: i,
              activeIndex: n
            } = e,
            s = e.virtual && r.virtual.enabled,
            o = e.grid && r.grid && r.grid.rows > 1,
            l = e => (0, a.e)(i, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
          let h, c, p;
          if (t.forEach((e => {
              e.classList.remove(r.slideActiveClass, r.slideNextClass, r.slidePrevClass)
            })), s)
            if (r.loop) {
              let t = n - e.virtual.slidesBefore;
              t < 0 && (t = e.virtual.slides.length + t), t >= e.virtual.slides.length && (t -= e.virtual.slides.length), h = l(`[data-swiper-slide-index="${t}"]`)
            } else h = l(`[data-swiper-slide-index="${n}"]`);
          else o ? (h = t.filter((e => e.column === n))[0], p = t.filter((e => e.column === n + 1))[0], c = t.filter((e => e.column === n - 1))[0]) : h = t[n];
          h && (h.classList.add(r.slideActiveClass), o ? (p && p.classList.add(r.slideNextClass), c && c.classList.add(r.slidePrevClass)) : (p = (0, a.p)(h, `.${r.slideClass}, swiper-slide`)[0], r.loop && !p && (p = t[0]), p && p.classList.add(r.slideNextClass), c = (0, a.q)(h, `.${r.slideClass}, swiper-slide`)[0], r.loop && 0 === !c && (c = t[t.length - 1]), c && c.classList.add(r.slidePrevClass))), e.emitSlidesClasses()
        },
        updateActiveIndex: function(e) {
          const t = this,
            r = t.rtlTranslate ? t.translate : -t.translate,
            {
              snapGrid: i,
              params: n,
              activeIndex: a,
              realIndex: s,
              snapIndex: o
            } = t;
          let l, h = e;
          const c = e => {
            let r = e - t.virtual.slidesBefore;
            return r < 0 && (r = t.virtual.slides.length + r), r >= t.virtual.slides.length && (r -= t.virtual.slides.length), r
          };
          if (void 0 === h && (h = function(e) {
              const {
                slidesGrid: t,
                params: r
              } = e, i = e.rtlTranslate ? e.translate : -e.translate;
              let n;
              for (let e = 0; e < t.length; e += 1) void 0 !== t[e + 1] ? i >= t[e] && i < t[e + 1] - (t[e + 1] - t[e]) / 2 ? n = e : i >= t[e] && i < t[e + 1] && (n = e + 1) : i >= t[e] && (n = e);
              return r.normalizeSlideIndex && (n < 0 || void 0 === n) && (n = 0), n
            }(t)), i.indexOf(r) >= 0) l = i.indexOf(r);
          else {
            const e = Math.min(n.slidesPerGroupSkip, h);
            l = e + Math.floor((h - e) / n.slidesPerGroup)
          }
          if (l >= i.length && (l = i.length - 1), h === a && !t.params.loop) return void(l !== o && (t.snapIndex = l, t.emit("snapIndexChange")));
          if (h === a && t.params.loop && t.virtual && t.params.virtual.enabled) return void(t.realIndex = c(h));
          const p = t.grid && n.grid && n.grid.rows > 1;
          let u;
          if (t.virtual && n.virtual.enabled && n.loop) u = c(h);
          else if (p) {
            const e = t.slides.filter((e => e.column === h))[0];
            let r = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
            Number.isNaN(r) && (r = Math.max(t.slides.indexOf(e), 0)), u = Math.floor(r / n.grid.rows)
          } else if (t.slides[h]) {
            const e = t.slides[h].getAttribute("data-swiper-slide-index");
            u = e ? parseInt(e, 10) : h
          } else u = h;
          Object.assign(t, {
            previousSnapIndex: o,
            snapIndex: l,
            previousRealIndex: s,
            realIndex: u,
            previousIndex: a,
            activeIndex: h
          }), t.initialized && f(t), t.emit("activeIndexChange"), t.emit("snapIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && (s !== u && t.emit("realIndexChange"), t.emit("slideChange"))
        },
        updateClickedSlide: function(e, t) {
          const r = this,
            i = r.params;
          let n = e.closest(`.${i.slideClass}, swiper-slide`);
          !n && r.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach((e => {
            !n && e.matches && e.matches(`.${i.slideClass}, swiper-slide`) && (n = e)
          }));
          let a, s = !1;
          if (n)
            for (let e = 0; e < r.slides.length; e += 1)
              if (r.slides[e] === n) {
                s = !0, a = e;
                break
              } if (!n || !s) return r.clickedSlide = void 0, void(r.clickedIndex = void 0);
          r.clickedSlide = n, r.virtual && r.params.virtual.enabled ? r.clickedIndex = parseInt(n.getAttribute("data-swiper-slide-index"), 10) : r.clickedIndex = a, i.slideToClickedSlide && void 0 !== r.clickedIndex && r.clickedIndex !== r.activeIndex && r.slideToClickedSlide()
        }
      };

      function g(e) {
        let {
          swiper: t,
          runCallbacks: r,
          direction: i,
          step: n
        } = e;
        const {
          activeIndex: a,
          previousIndex: s
        } = t;
        let o = i;
        if (o || (o = a > s ? "next" : a < s ? "prev" : "reset"), t.emit(`transition${n}`), r && a !== s) {
          if ("reset" === o) return void t.emit(`slideResetTransition${n}`);
          t.emit(`slideChangeTransition${n}`), "next" === o ? t.emit(`slideNextTransition${n}`) : t.emit(`slidePrevTransition${n}`)
        }
      }
      var v = {
          slideTo: function(e, t, r, i, n) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const s = this;
            let o = e;
            o < 0 && (o = 0);
            const {
              params: l,
              snapGrid: h,
              slidesGrid: c,
              previousIndex: p,
              activeIndex: u,
              rtlTranslate: d,
              wrapperEl: f,
              enabled: m
            } = s;
            if (s.animating && l.preventInteractionOnTransition || !m && !i && !n || s.destroyed) return !1;
            const g = Math.min(s.params.slidesPerGroupSkip, o);
            let v = g + Math.floor((o - g) / s.params.slidesPerGroup);
            v >= h.length && (v = h.length - 1);
            const y = -h[v];
            if (l.normalizeSlideIndex)
              for (let e = 0; e < c.length; e += 1) {
                const t = -Math.floor(100 * y),
                  r = Math.floor(100 * c[e]),
                  i = Math.floor(100 * c[e + 1]);
                void 0 !== c[e + 1] ? t >= r && t < i - (i - r) / 2 ? o = e : t >= r && t < i && (o = e + 1) : t >= r && (o = e)
              }
            if (s.initialized && o !== u) {
              if (!s.allowSlideNext && (d ? y > s.translate && y > s.minTranslate() : y < s.translate && y < s.minTranslate())) return !1;
              if (!s.allowSlidePrev && y > s.translate && y > s.maxTranslate() && (u || 0) !== o) return !1
            }
            let b;
            if (o !== (p || 0) && r && s.emit("beforeSlideChangeStart"), s.updateProgress(y), b = o > u ? "next" : o < u ? "prev" : "reset", d && -y === s.translate || !d && y === s.translate) return s.updateActiveIndex(o), l.autoHeight && s.updateAutoHeight(), s.updateSlidesClasses(), "slide" !== l.effect && s.setTranslate(y), "reset" !== b && (s.transitionStart(r, b), s.transitionEnd(r, b)), !1;
            if (l.cssMode) {
              const e = s.isHorizontal(),
                r = d ? y : -y;
              if (0 === t) {
                const t = s.virtual && s.params.virtual.enabled;
                t && (s.wrapperEl.style.scrollSnapType = "none", s._immediateVirtual = !0), t && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0 ? (s._cssModeVirtualInitialSet = !0, requestAnimationFrame((() => {
                  f[e ? "scrollLeft" : "scrollTop"] = r
                }))) : f[e ? "scrollLeft" : "scrollTop"] = r, t && requestAnimationFrame((() => {
                  s.wrapperEl.style.scrollSnapType = "", s._immediateVirtual = !1
                }))
              } else {
                if (!s.support.smoothScroll) return (0, a.r)({
                  swiper: s,
                  targetPosition: r,
                  side: e ? "left" : "top"
                }), !0;
                f.scrollTo({
                  [e ? "left" : "top"]: r,
                  behavior: "smooth"
                })
              }
              return !0
            }
            return s.setTransition(t), s.setTranslate(y), s.updateActiveIndex(o), s.updateSlidesClasses(), s.emit("beforeTransitionStart", t, i), s.transitionStart(r, b), 0 === t ? s.transitionEnd(r, b) : s.animating || (s.animating = !0, s.onSlideToWrapperTransitionEnd || (s.onSlideToWrapperTransitionEnd = function(e) {
              s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onSlideToWrapperTransitionEnd), s.onSlideToWrapperTransitionEnd = null, delete s.onSlideToWrapperTransitionEnd, s.transitionEnd(r, b))
            }), s.wrapperEl.addEventListener("transitionend", s.onSlideToWrapperTransitionEnd)), !0
          },
          slideToLoop: function(e, t, r, i) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), "string" == typeof e && (e = parseInt(e, 10));
            const n = this;
            if (n.destroyed) return;
            const a = n.grid && n.params.grid && n.params.grid.rows > 1;
            let s = e;
            if (n.params.loop)
              if (n.virtual && n.params.virtual.enabled) s += n.virtual.slidesBefore;
              else {
                let e;
                if (a) {
                  const t = s * n.params.grid.rows;
                  e = n.slides.filter((e => 1 * e.getAttribute("data-swiper-slide-index") === t))[0].column
                } else e = n.getSlideIndexByData(s);
                const t = a ? Math.ceil(n.slides.length / n.params.grid.rows) : n.slides.length,
                  {
                    centeredSlides: r
                  } = n.params;
                let i = n.params.slidesPerView;
                "auto" === i ? i = n.slidesPerViewDynamic() : (i = Math.ceil(parseFloat(n.params.slidesPerView, 10)), r && i % 2 == 0 && (i += 1));
                let o = t - e < i;
                if (r && (o = o || e < Math.ceil(i / 2)), o) {
                  const i = r ? e < n.activeIndex ? "prev" : "next" : e - n.activeIndex - 1 < n.params.slidesPerView ? "next" : "prev";
                  n.loopFix({
                    direction: i,
                    slideTo: !0,
                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                    slideRealIndex: "next" === i ? n.realIndex : void 0
                  })
                }
                if (a) {
                  const e = s * n.params.grid.rows;
                  s = n.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0].column
                } else s = n.getSlideIndexByData(s)
              } return requestAnimationFrame((() => {
              n.slideTo(s, t, r, i)
            })), n
          },
          slideNext: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                enabled: n,
                params: a,
                animating: s
              } = i;
            if (!n || i.destroyed) return i;
            let o = a.slidesPerGroup;
            "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (o = Math.max(i.slidesPerViewDynamic("current", !0), 1));
            const l = i.activeIndex < a.slidesPerGroupSkip ? 1 : o,
              h = i.virtual && a.virtual.enabled;
            if (a.loop) {
              if (s && !h && a.loopPreventsSliding) return !1;
              if (i.loopFix({
                  direction: "next"
                }), i._clientLeft = i.wrapperEl.clientLeft, i.activeIndex === i.slides.length - 1 && a.cssMode) return requestAnimationFrame((() => {
                i.slideTo(i.activeIndex + l, e, t, r)
              })), !0
            }
            return a.rewind && i.isEnd ? i.slideTo(0, e, t, r) : i.slideTo(i.activeIndex + l, e, t, r)
          },
          slidePrev: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this,
              {
                params: n,
                snapGrid: a,
                slidesGrid: s,
                rtlTranslate: o,
                enabled: l,
                animating: h
              } = i;
            if (!l || i.destroyed) return i;
            const c = i.virtual && n.virtual.enabled;
            if (n.loop) {
              if (h && !c && n.loopPreventsSliding) return !1;
              i.loopFix({
                direction: "prev"
              }), i._clientLeft = i.wrapperEl.clientLeft
            }

            function p(e) {
              return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
            }
            const u = p(o ? i.translate : -i.translate),
              d = a.map((e => p(e)));
            let f = a[d.indexOf(u) - 1];
            if (void 0 === f && n.cssMode) {
              let e;
              a.forEach(((t, r) => {
                u >= t && (e = r)
              })), void 0 !== e && (f = a[e > 0 ? e - 1 : e])
            }
            let m = 0;
            if (void 0 !== f && (m = s.indexOf(f), m < 0 && (m = i.activeIndex - 1), "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (m = m - i.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), n.rewind && i.isBeginning) {
              const n = i.params.virtual && i.params.virtual.enabled && i.virtual ? i.virtual.slides.length - 1 : i.slides.length - 1;
              return i.slideTo(n, e, t, r)
            }
            return n.loop && 0 === i.activeIndex && n.cssMode ? (requestAnimationFrame((() => {
              i.slideTo(m, e, t, r)
            })), !0) : i.slideTo(m, e, t, r)
          },
          slideReset: function(e, t, r) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const i = this;
            if (!i.destroyed) return i.slideTo(i.activeIndex, e, t, r)
          },
          slideToClosest: function(e, t, r, i) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === i && (i = .5);
            const n = this;
            if (n.destroyed) return;
            let a = n.activeIndex;
            const s = Math.min(n.params.slidesPerGroupSkip, a),
              o = s + Math.floor((a - s) / n.params.slidesPerGroup),
              l = n.rtlTranslate ? n.translate : -n.translate;
            if (l >= n.snapGrid[o]) {
              const e = n.snapGrid[o];
              l - e > (n.snapGrid[o + 1] - e) * i && (a += n.params.slidesPerGroup)
            } else {
              const e = n.snapGrid[o - 1];
              l - e <= (n.snapGrid[o] - e) * i && (a -= n.params.slidesPerGroup)
            }
            return a = Math.max(a, 0), a = Math.min(a, n.slidesGrid.length - 1), n.slideTo(a, e, t, r)
          },
          slideToClickedSlide: function() {
            const e = this;
            if (e.destroyed) return;
            const {
              params: t,
              slidesEl: r
            } = e, i = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let n, s = e.clickedIndex;
            const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
            if (t.loop) {
              if (e.animating) return;
              n = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10), t.centeredSlides ? s < e.loopedSlides - i / 2 || s > e.slides.length - e.loopedSlides + i / 2 ? (e.loopFix(), s = e.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, a.n)((() => {
                e.slideTo(s)
              }))) : e.slideTo(s) : s > e.slides.length - i ? (e.loopFix(), s = e.getSlideIndex((0, a.e)(r, `${o}[data-swiper-slide-index="${n}"]`)[0]), (0, a.n)((() => {
                e.slideTo(s)
              }))) : e.slideTo(s)
            } else e.slideTo(s)
          }
        },
        y = {
          loopCreate: function(e) {
            const t = this,
              {
                params: r,
                slidesEl: i
              } = t;
            if (!r.loop || t.virtual && t.params.virtual.enabled) return;
            const n = () => {
                (0, a.e)(i, `.${r.slideClass}, swiper-slide`).forEach(((e, t) => {
                  e.setAttribute("data-swiper-slide-index", t)
                }))
              },
              s = t.grid && r.grid && r.grid.rows > 1,
              o = r.slidesPerGroup * (s ? r.grid.rows : 1),
              l = t.slides.length % o != 0,
              h = s && t.slides.length % r.grid.rows != 0,
              c = e => {
                for (let i = 0; i < e; i += 1) {
                  const e = t.isElement ? (0, a.c)("swiper-slide", [r.slideBlankClass]) : (0, a.c)("div", [r.slideClass, r.slideBlankClass]);
                  t.slidesEl.append(e)
                }
              };
            l ? (r.loopAddBlankSlides ? (c(o - t.slides.length % o), t.recalcSlides(), t.updateSlides()) : (0, a.t)("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : h ? (r.loopAddBlankSlides ? (c(r.grid.rows - t.slides.length % r.grid.rows), t.recalcSlides(), t.updateSlides()) : (0, a.t)("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"), n()) : n(), t.loopFix({
              slideRealIndex: e,
              direction: r.centeredSlides ? void 0 : "next"
            })
          },
          loopFix: function(e) {
            let {
              slideRealIndex: t,
              slideTo: r = !0,
              direction: i,
              setTranslate: n,
              activeSlideIndex: s,
              byController: o,
              byMousewheel: l
            } = void 0 === e ? {} : e;
            const h = this;
            if (!h.params.loop) return;
            h.emit("beforeLoopFix");
            const {
              slides: c,
              allowSlidePrev: p,
              allowSlideNext: u,
              slidesEl: d,
              params: f
            } = h, {
              centeredSlides: m
            } = f;
            if (h.allowSlidePrev = !0, h.allowSlideNext = !0, h.virtual && f.virtual.enabled) return r && (f.centeredSlides || 0 !== h.snapIndex ? f.centeredSlides && h.snapIndex < f.slidesPerView ? h.slideTo(h.virtual.slides.length + h.snapIndex, 0, !1, !0) : h.snapIndex === h.snapGrid.length - 1 && h.slideTo(h.virtual.slidesBefore, 0, !1, !0) : h.slideTo(h.virtual.slides.length, 0, !1, !0)), h.allowSlidePrev = p, h.allowSlideNext = u, void h.emit("loopFix");
            let g = f.slidesPerView;
            "auto" === g ? g = h.slidesPerViewDynamic() : (g = Math.ceil(parseFloat(f.slidesPerView, 10)), m && g % 2 == 0 && (g += 1));
            const v = f.slidesPerGroupAuto ? g : f.slidesPerGroup;
            let y = v;
            y % v != 0 && (y += v - y % v), y += f.loopAdditionalSlides, h.loopedSlides = y;
            const b = h.grid && f.grid && f.grid.rows > 1;
            c.length < g + y ? (0, a.t)("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : b && "row" === f.grid.fill && (0, a.t)("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
            const S = [],
              x = [];
            let E = h.activeIndex;
            void 0 === s ? s = h.getSlideIndex(c.filter((e => e.classList.contains(f.slideActiveClass)))[0]) : E = s;
            const w = "next" === i || !i,
              P = "prev" === i || !i;
            let T = 0,
              C = 0;
            const _ = b ? Math.ceil(c.length / f.grid.rows) : c.length,
              M = (b ? c[s].column : s) + (m && void 0 === n ? -g / 2 + .5 : 0);
            if (M < y) {
              T = Math.max(y - M, v);
              for (let e = 0; e < y - M; e += 1) {
                const t = e - Math.floor(e / _) * _;
                if (b) {
                  const e = _ - t - 1;
                  for (let t = c.length - 1; t >= 0; t -= 1) c[t].column === e && S.push(t)
                } else S.push(_ - t - 1)
              }
            } else if (M + g > _ - y) {
              C = Math.max(M - (_ - 2 * y), v);
              for (let e = 0; e < C; e += 1) {
                const t = e - Math.floor(e / _) * _;
                b ? c.forEach(((e, r) => {
                  e.column === t && x.push(r)
                })) : x.push(t)
              }
            }
            if (h.__preventObserver__ = !0, requestAnimationFrame((() => {
                h.__preventObserver__ = !1
              })), P && S.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, d.prepend(c[e]), c[e].swiperLoopMoveDOM = !1
              })), w && x.forEach((e => {
                c[e].swiperLoopMoveDOM = !0, d.append(c[e]), c[e].swiperLoopMoveDOM = !1
              })), h.recalcSlides(), "auto" === f.slidesPerView ? h.updateSlides() : b && (S.length > 0 && P || x.length > 0 && w) && h.slides.forEach(((e, t) => {
                h.grid.updateSlide(t, e, h.slides)
              })), f.watchSlidesProgress && h.updateSlidesOffset(), r)
              if (S.length > 0 && P) {
                if (void 0 === t) {
                  const e = h.slidesGrid[E],
                    t = h.slidesGrid[E + T] - e;
                  l ? h.setTranslate(h.translate - t) : (h.slideTo(E + T, 0, !1, !0), n && (h.touchEventsData.startTranslate = h.touchEventsData.startTranslate - t, h.touchEventsData.currentTranslate = h.touchEventsData.currentTranslate - t))
                } else if (n) {
                  const e = b ? S.length / f.grid.rows : S.length;
                  h.slideTo(h.activeIndex + e, 0, !1, !0), h.touchEventsData.currentTranslate = h.translate
                }
              } else if (x.length > 0 && w)
              if (void 0 === t) {
                const e = h.slidesGrid[E],
                  t = h.slidesGrid[E - C] - e;
                l ? h.setTranslate(h.translate - t) : (h.slideTo(E - C, 0, !1, !0), n && (h.touchEventsData.startTranslate = h.touchEventsData.startTranslate - t, h.touchEventsData.currentTranslate = h.touchEventsData.currentTranslate - t))
              } else {
                const e = b ? x.length / f.grid.rows : x.length;
                h.slideTo(h.activeIndex - e, 0, !1, !0)
              } if (h.allowSlidePrev = p, h.allowSlideNext = u, h.controller && h.controller.control && !o) {
              const e = {
                slideRealIndex: t,
                direction: i,
                setTranslate: n,
                activeSlideIndex: s,
                byController: !0
              };
              Array.isArray(h.controller.control) ? h.controller.control.forEach((t => {
                !t.destroyed && t.params.loop && t.loopFix({
                  ...e,
                  slideTo: t.params.slidesPerView === f.slidesPerView && r
                })
              })) : h.controller.control instanceof h.constructor && h.controller.control.params.loop && h.controller.control.loopFix({
                ...e,
                slideTo: h.controller.control.params.slidesPerView === f.slidesPerView && r
              })
            }
            h.emit("loopFix")
          },
          loopDestroy: function() {
            const e = this,
              {
                params: t,
                slidesEl: r
              } = e;
            if (!t.loop || e.virtual && e.params.virtual.enabled) return;
            e.recalcSlides();
            const i = [];
            e.slides.forEach((e => {
              const t = void 0 === e.swiperSlideIndex ? 1 * e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex;
              i[t] = e
            })), e.slides.forEach((e => {
              e.removeAttribute("data-swiper-slide-index")
            })), i.forEach((e => {
              r.append(e)
            })), e.recalcSlides(), e.slideTo(e.realIndex, 0)
          }
        };

      function b(e, t, r) {
        const i = (0, n.a)(),
          {
            params: a
          } = e,
          s = a.edgeSwipeDetection,
          o = a.edgeSwipeThreshold;
        return !s || !(r <= o || r >= i.innerWidth - o) || "prevent" === s && (t.preventDefault(), !0)
      }

      function S(e) {
        const t = this,
          r = (0, n.g)();
        let i = e;
        i.originalEvent && (i = i.originalEvent);
        const s = t.touchEventsData;
        if ("pointerdown" === i.type) {
          if (null !== s.pointerId && s.pointerId !== i.pointerId) return;
          s.pointerId = i.pointerId
        } else "touchstart" === i.type && 1 === i.targetTouches.length && (s.touchId = i.targetTouches[0].identifier);
        if ("touchstart" === i.type) return void b(t, i, i.targetTouches[0].pageX);
        const {
          params: o,
          touches: l,
          enabled: h
        } = t;
        if (!h) return;
        if (!o.simulateTouch && "mouse" === i.pointerType) return;
        if (t.animating && o.preventInteractionOnTransition) return;
        !t.animating && o.cssMode && o.loop && t.loopFix();
        let c = i.target;
        if ("wrapper" === o.touchEventsTarget && !t.wrapperEl.contains(c)) return;
        if ("which" in i && 3 === i.which) return;
        if ("button" in i && i.button > 0) return;
        if (s.isTouched && s.isMoved) return;
        const p = !!o.noSwipingClass && "" !== o.noSwipingClass,
          u = i.composedPath ? i.composedPath() : i.path;
        p && i.target && i.target.shadowRoot && u && (c = u[0]);
        const d = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
          f = !(!i.target || !i.target.shadowRoot);
        if (o.noSwiping && (f ? function(e, t) {
            return void 0 === t && (t = this),
              function t(r) {
                if (!r || r === (0, n.g)() || r === (0, n.a)()) return null;
                r.assignedSlot && (r = r.assignedSlot);
                const i = r.closest(e);
                return i || r.getRootNode ? i || t(r.getRootNode().host) : null
              }(t)
          }(d, c) : c.closest(d))) return void(t.allowClick = !0);
        if (o.swipeHandler && !c.closest(o.swipeHandler)) return;
        l.currentX = i.pageX, l.currentY = i.pageY;
        const m = l.currentX,
          g = l.currentY;
        if (!b(t, i, m)) return;
        Object.assign(s, {
          isTouched: !0,
          isMoved: !1,
          allowTouchCallbacks: !0,
          isScrolling: void 0,
          startMoving: void 0
        }), l.startX = m, l.startY = g, s.touchStartTime = (0, a.d)(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (s.allowThresholdMove = !1);
        let v = !0;
        c.matches(s.focusableElements) && (v = !1, "SELECT" === c.nodeName && (s.isTouched = !1)), r.activeElement && r.activeElement.matches(s.focusableElements) && r.activeElement !== c && r.activeElement.blur();
        const y = v && t.allowTouchMove && o.touchStartPreventDefault;
        !o.touchStartForcePreventDefault && !y || c.isContentEditable || i.preventDefault(), o.freeMode && o.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", i)
      }

      function x(e) {
        const t = (0, n.g)(),
          r = this,
          i = r.touchEventsData,
          {
            params: s,
            touches: o,
            rtlTranslate: l,
            enabled: h
          } = r;
        if (!h) return;
        if (!s.simulateTouch && "mouse" === e.pointerType) return;
        let c, p = e;
        if (p.originalEvent && (p = p.originalEvent), "pointermove" === p.type) {
          if (null !== i.touchId) return;
          if (p.pointerId !== i.pointerId) return
        }
        if ("touchmove" === p.type) {
          if (c = [...p.changedTouches].filter((e => e.identifier === i.touchId))[0], !c || c.identifier !== i.touchId) return
        } else c = p;
        if (!i.isTouched) return void(i.startMoving && i.isScrolling && r.emit("touchMoveOpposite", p));
        const u = c.pageX,
          d = c.pageY;
        if (p.preventedByNestedSwiper) return o.startX = u, void(o.startY = d);
        if (!r.allowTouchMove) return p.target.matches(i.focusableElements) || (r.allowClick = !1), void(i.isTouched && (Object.assign(o, {
          startX: u,
          startY: d,
          currentX: u,
          currentY: d
        }), i.touchStartTime = (0, a.d)()));
        if (s.touchReleaseOnEdges && !s.loop)
          if (r.isVertical()) {
            if (d < o.startY && r.translate <= r.maxTranslate() || d > o.startY && r.translate >= r.minTranslate()) return i.isTouched = !1, void(i.isMoved = !1)
          } else if (u < o.startX && r.translate <= r.maxTranslate() || u > o.startX && r.translate >= r.minTranslate()) return;
        if (t.activeElement && p.target === t.activeElement && p.target.matches(i.focusableElements)) return i.isMoved = !0, void(r.allowClick = !1);
        i.allowTouchCallbacks && r.emit("touchMove", p), o.previousX = o.currentX, o.previousY = o.currentY, o.currentX = u, o.currentY = d;
        const f = o.currentX - o.startX,
          m = o.currentY - o.startY;
        if (r.params.threshold && Math.sqrt(f ** 2 + m ** 2) < r.params.threshold) return;
        if (void 0 === i.isScrolling) {
          let e;
          r.isHorizontal() && o.currentY === o.startY || r.isVertical() && o.currentX === o.startX ? i.isScrolling = !1 : f * f + m * m >= 25 && (e = 180 * Math.atan2(Math.abs(m), Math.abs(f)) / Math.PI, i.isScrolling = r.isHorizontal() ? e > s.touchAngle : 90 - e > s.touchAngle)
        }
        if (i.isScrolling && r.emit("touchMoveOpposite", p), void 0 === i.startMoving && (o.currentX === o.startX && o.currentY === o.startY || (i.startMoving = !0)), i.isScrolling) return void(i.isTouched = !1);
        if (!i.startMoving) return;
        r.allowClick = !1, !s.cssMode && p.cancelable && p.preventDefault(), s.touchMoveStopPropagation && !s.nested && p.stopPropagation();
        let g = r.isHorizontal() ? f : m,
          v = r.isHorizontal() ? o.currentX - o.previousX : o.currentY - o.previousY;
        s.oneWayMovement && (g = Math.abs(g) * (l ? 1 : -1), v = Math.abs(v) * (l ? 1 : -1)), o.diff = g, g *= s.touchRatio, l && (g = -g, v = -v);
        const y = r.touchesDirection;
        r.swipeDirection = g > 0 ? "prev" : "next", r.touchesDirection = v > 0 ? "prev" : "next";
        const b = r.params.loop && !s.cssMode,
          S = "next" === r.touchesDirection && r.allowSlideNext || "prev" === r.touchesDirection && r.allowSlidePrev;
        if (!i.isMoved) {
          if (b && S && r.loopFix({
              direction: r.swipeDirection
            }), i.startTranslate = r.getTranslate(), r.setTransition(0), r.animating) {
            const e = new window.CustomEvent("transitionend", {
              bubbles: !0,
              cancelable: !0
            });
            r.wrapperEl.dispatchEvent(e)
          }
          i.allowMomentumBounce = !1, !s.grabCursor || !0 !== r.allowSlideNext && !0 !== r.allowSlidePrev || r.setGrabCursor(!0), r.emit("sliderFirstMove", p)
        }
        if ((new Date).getTime(), i.isMoved && i.allowThresholdMove && y !== r.touchesDirection && b && S && Math.abs(g) >= 1) return Object.assign(o, {
          startX: u,
          startY: d,
          currentX: u,
          currentY: d,
          startTranslate: i.currentTranslate
        }), i.loopSwapReset = !0, void(i.startTranslate = i.currentTranslate);
        r.emit("sliderMove", p), i.isMoved = !0, i.currentTranslate = g + i.startTranslate;
        let x = !0,
          E = s.resistanceRatio;
        if (s.touchReleaseOnEdges && (E = 0), g > 0 ? (b && S && i.allowThresholdMove && i.currentTranslate > (s.centeredSlides ? r.minTranslate() - r.slidesSizesGrid[r.activeIndex + 1] : r.minTranslate()) && r.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0
          }), i.currentTranslate > r.minTranslate() && (x = !1, s.resistance && (i.currentTranslate = r.minTranslate() - 1 + (-r.minTranslate() + i.startTranslate + g) ** E))) : g < 0 && (b && S && i.allowThresholdMove && i.currentTranslate < (s.centeredSlides ? r.maxTranslate() + r.slidesSizesGrid[r.slidesSizesGrid.length - 1] : r.maxTranslate()) && r.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex: r.slides.length - ("auto" === s.slidesPerView ? r.slidesPerViewDynamic() : Math.ceil(parseFloat(s.slidesPerView, 10)))
          }), i.currentTranslate < r.maxTranslate() && (x = !1, s.resistance && (i.currentTranslate = r.maxTranslate() + 1 - (r.maxTranslate() - i.startTranslate - g) ** E))), x && (p.preventedByNestedSwiper = !0), !r.allowSlideNext && "next" === r.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !r.allowSlidePrev && "prev" === r.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), r.allowSlidePrev || r.allowSlideNext || (i.currentTranslate = i.startTranslate), s.threshold > 0) {
          if (!(Math.abs(g) > s.threshold || i.allowThresholdMove)) return void(i.currentTranslate = i.startTranslate);
          if (!i.allowThresholdMove) return i.allowThresholdMove = !0, o.startX = o.currentX, o.startY = o.currentY, i.currentTranslate = i.startTranslate, void(o.diff = r.isHorizontal() ? o.currentX - o.startX : o.currentY - o.startY)
        }
        s.followFinger && !s.cssMode && ((s.freeMode && s.freeMode.enabled && r.freeMode || s.watchSlidesProgress) && (r.updateActiveIndex(), r.updateSlidesClasses()), s.freeMode && s.freeMode.enabled && r.freeMode && r.freeMode.onTouchMove(), r.updateProgress(i.currentTranslate), r.setTranslate(i.currentTranslate))
      }

      function E(e) {
        const t = this,
          r = t.touchEventsData;
        let i, n = e;
        if (n.originalEvent && (n = n.originalEvent), "touchend" === n.type || "touchcancel" === n.type) {
          if (i = [...n.changedTouches].filter((e => e.identifier === r.touchId))[0], !i || i.identifier !== r.touchId) return
        } else {
          if (null !== r.touchId) return;
          if (n.pointerId !== r.pointerId) return;
          i = n
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(n.type) && (!["pointercancel", "contextmenu"].includes(n.type) || !t.browser.isSafari && !t.browser.isWebView)) return;
        r.pointerId = null, r.touchId = null;
        const {
          params: s,
          touches: o,
          rtlTranslate: l,
          slidesGrid: h,
          enabled: c
        } = t;
        if (!c) return;
        if (!s.simulateTouch && "mouse" === n.pointerType) return;
        if (r.allowTouchCallbacks && t.emit("touchEnd", n), r.allowTouchCallbacks = !1, !r.isTouched) return r.isMoved && s.grabCursor && t.setGrabCursor(!1), r.isMoved = !1, void(r.startMoving = !1);
        s.grabCursor && r.isMoved && r.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const p = (0, a.d)(),
          u = p - r.touchStartTime;
        if (t.allowClick) {
          const e = n.path || n.composedPath && n.composedPath();
          t.updateClickedSlide(e && e[0] || n.target, e), t.emit("tap click", n), u < 300 && p - r.lastClickTime < 300 && t.emit("doubleTap doubleClick", n)
        }
        if (r.lastClickTime = (0, a.d)(), (0, a.n)((() => {
            t.destroyed || (t.allowClick = !0)
          })), !r.isTouched || !r.isMoved || !t.swipeDirection || 0 === o.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) return r.isTouched = !1, r.isMoved = !1, void(r.startMoving = !1);
        let d;
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, d = s.followFinger ? l ? t.translate : -t.translate : -r.currentTranslate, s.cssMode) return;
        if (s.freeMode && s.freeMode.enabled) return void t.freeMode.onTouchEnd({
          currentPos: d
        });
        const f = d >= -t.maxTranslate() && !t.params.loop;
        let m = 0,
          g = t.slidesSizesGrid[0];
        for (let e = 0; e < h.length; e += e < s.slidesPerGroupSkip ? 1 : s.slidesPerGroup) {
          const t = e < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
          void 0 !== h[e + t] ? (f || d >= h[e] && d < h[e + t]) && (m = e, g = h[e + t] - h[e]) : (f || d >= h[e]) && (m = e, g = h[h.length - 1] - h[h.length - 2])
        }
        let v = null,
          y = null;
        s.rewind && (t.isBeginning ? y = s.virtual && s.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (v = 0));
        const b = (d - h[m]) / g,
          S = m < s.slidesPerGroupSkip - 1 ? 1 : s.slidesPerGroup;
        if (u > s.longSwipesMs) {
          if (!s.longSwipes) return void t.slideTo(t.activeIndex);
          "next" === t.swipeDirection && (b >= s.longSwipesRatio ? t.slideTo(s.rewind && t.isEnd ? v : m + S) : t.slideTo(m)), "prev" === t.swipeDirection && (b > 1 - s.longSwipesRatio ? t.slideTo(m + S) : null !== y && b < 0 && Math.abs(b) > s.longSwipesRatio ? t.slideTo(y) : t.slideTo(m))
        } else {
          if (!s.shortSwipes) return void t.slideTo(t.activeIndex);
          !t.navigation || n.target !== t.navigation.nextEl && n.target !== t.navigation.prevEl ? ("next" === t.swipeDirection && t.slideTo(null !== v ? v : m + S), "prev" === t.swipeDirection && t.slideTo(null !== y ? y : m)) : n.target === t.navigation.nextEl ? t.slideTo(m + S) : t.slideTo(m)
        }
      }

      function w() {
        const e = this,
          {
            params: t,
            el: r
          } = e;
        if (r && 0 === r.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const {
          allowSlideNext: i,
          allowSlidePrev: n,
          snapGrid: a
        } = e, s = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        const o = s && t.loop;
        !("auto" === t.slidesPerView || t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || o ? e.params.loop && !s ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0) : e.slideTo(e.slides.length - 1, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout((() => {
          e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }), 500)), e.allowSlidePrev = n, e.allowSlideNext = i, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
      }

      function P(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
      }

      function T() {
        const e = this,
          {
            wrapperEl: t,
            rtlTranslate: r,
            enabled: i
          } = e;
        if (!i) return;
        let n;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const a = e.maxTranslate() - e.minTranslate();
        n = 0 === a ? 0 : (e.translate - e.minTranslate()) / a, n !== e.progress && e.updateProgress(r ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
      }

      function C(e) {
        const t = this;
        u(t, e.target), t.params.cssMode || "auto" !== t.params.slidesPerView && !t.params.autoHeight || t.update()
      }

      function _() {
        const e = this;
        e.documentTouchHandlerProceeded || (e.documentTouchHandlerProceeded = !0, e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"))
      }
      const M = (e, t) => {
          const r = (0, n.g)(),
            {
              params: i,
              el: a,
              wrapperEl: s,
              device: o
            } = e,
            l = !!i.nested,
            h = "on" === t ? "addEventListener" : "removeEventListener",
            c = t;
          r[h]("touchstart", e.onDocumentTouchStart, {
            passive: !1,
            capture: l
          }), a[h]("touchstart", e.onTouchStart, {
            passive: !1
          }), a[h]("pointerdown", e.onTouchStart, {
            passive: !1
          }), r[h]("touchmove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[h]("pointermove", e.onTouchMove, {
            passive: !1,
            capture: l
          }), r[h]("touchend", e.onTouchEnd, {
            passive: !0
          }), r[h]("pointerup", e.onTouchEnd, {
            passive: !0
          }), r[h]("pointercancel", e.onTouchEnd, {
            passive: !0
          }), r[h]("touchcancel", e.onTouchEnd, {
            passive: !0
          }), r[h]("pointerout", e.onTouchEnd, {
            passive: !0
          }), r[h]("pointerleave", e.onTouchEnd, {
            passive: !0
          }), r[h]("contextmenu", e.onTouchEnd, {
            passive: !0
          }), (i.preventClicks || i.preventClicksPropagation) && a[h]("click", e.onClick, !0), i.cssMode && s[h]("scroll", e.onScroll), i.updateOnWindowResize ? e[c](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", w, !0) : e[c]("observerUpdate", w, !0), a[h]("load", e.onLoad, {
            capture: !0
          })
        },
        A = (e, t) => e.grid && t.grid && t.grid.rows > 1;
      var k = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
      };

      function D(e, t) {
        return function(r) {
          void 0 === r && (r = {});
          const i = Object.keys(r)[0],
            n = r[i];
          "object" == typeof n && null !== n ? (!0 === e[i] && (e[i] = {
            enabled: !0
          }), "navigation" === i && e[i] && e[i].enabled && !e[i].prevEl && !e[i].nextEl && (e[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && e[i] && e[i].enabled && !e[i].el && (e[i].auto = !0), i in e && "enabled" in n ? ("object" != typeof e[i] || "enabled" in e[i] || (e[i].enabled = !0), e[i] || (e[i] = {
            enabled: !1
          }), (0, a.u)(t, r)) : (0, a.u)(t, r)) : (0, a.u)(t, r)
        }
      }
      const I = {
          eventsEmitter: p,
          update: m,
          translate: {
            getTranslate: function(e) {
              void 0 === e && (e = this.isHorizontal() ? "x" : "y");
              const {
                params: t,
                rtlTranslate: r,
                translate: i,
                wrapperEl: n
              } = this;
              if (t.virtualTranslate) return r ? -i : i;
              if (t.cssMode) return i;
              let s = (0, a.i)(n, e);
              return s += this.cssOverflowAdjustment(), r && (s = -s), s || 0
            },
            setTranslate: function(e, t) {
              const r = this,
                {
                  rtlTranslate: i,
                  params: n,
                  wrapperEl: a,
                  progress: s
                } = r;
              let o, l = 0,
                h = 0;
              r.isHorizontal() ? l = i ? -e : e : h = e, n.roundLengths && (l = Math.floor(l), h = Math.floor(h)), r.previousTranslate = r.translate, r.translate = r.isHorizontal() ? l : h, n.cssMode ? a[r.isHorizontal() ? "scrollLeft" : "scrollTop"] = r.isHorizontal() ? -l : -h : n.virtualTranslate || (r.isHorizontal() ? l -= r.cssOverflowAdjustment() : h -= r.cssOverflowAdjustment(), a.style.transform = `translate3d(${l}px, ${h}px, 0px)`);
              const c = r.maxTranslate() - r.minTranslate();
              o = 0 === c ? 0 : (e - r.minTranslate()) / c, o !== s && r.updateProgress(e), r.emit("setTranslate", r.translate, t)
            },
            minTranslate: function() {
              return -this.snapGrid[0]
            },
            maxTranslate: function() {
              return -this.snapGrid[this.snapGrid.length - 1]
            },
            translateTo: function(e, t, r, i, n) {
              void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === r && (r = !0), void 0 === i && (i = !0);
              const s = this,
                {
                  params: o,
                  wrapperEl: l
                } = s;
              if (s.animating && o.preventInteractionOnTransition) return !1;
              const h = s.minTranslate(),
                c = s.maxTranslate();
              let p;
              if (p = i && e > h ? h : i && e < c ? c : e, s.updateProgress(p), o.cssMode) {
                const e = s.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -p;
                else {
                  if (!s.support.smoothScroll) return (0, a.r)({
                    swiper: s,
                    targetPosition: -p,
                    side: e ? "left" : "top"
                  }), !0;
                  l.scrollTo({
                    [e ? "left" : "top"]: -p,
                    behavior: "smooth"
                  })
                }
                return !0
              }
              return 0 === t ? (s.setTransition(0), s.setTranslate(p), r && (s.emit("beforeTransitionStart", t, n), s.emit("transitionEnd"))) : (s.setTransition(t), s.setTranslate(p), r && (s.emit("beforeTransitionStart", t, n), s.emit("transitionStart")), s.animating || (s.animating = !0, s.onTranslateToWrapperTransitionEnd || (s.onTranslateToWrapperTransitionEnd = function(e) {
                s && !s.destroyed && e.target === this && (s.wrapperEl.removeEventListener("transitionend", s.onTranslateToWrapperTransitionEnd), s.onTranslateToWrapperTransitionEnd = null, delete s.onTranslateToWrapperTransitionEnd, r && s.emit("transitionEnd"))
              }), s.wrapperEl.addEventListener("transitionend", s.onTranslateToWrapperTransitionEnd))), !0
            }
          },
          transition: {
            setTransition: function(e, t) {
              const r = this;
              r.params.cssMode || (r.wrapperEl.style.transitionDuration = `${e}ms`, r.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), r.emit("setTransition", e, t)
            },
            transitionStart: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: i
                } = r;
              i.cssMode || (i.autoHeight && r.updateAutoHeight(), g({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "Start"
              }))
            },
            transitionEnd: function(e, t) {
              void 0 === e && (e = !0);
              const r = this,
                {
                  params: i
                } = r;
              r.animating = !1, i.cssMode || (r.setTransition(0), g({
                swiper: r,
                runCallbacks: e,
                direction: t,
                step: "End"
              }))
            }
          },
          slide: v,
          loop: y,
          grabCursor: {
            setGrabCursor: function(e) {
              const t = this;
              if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
              const r = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
              t.isElement && (t.__preventObserver__ = !0), r.style.cursor = "move", r.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame((() => {
                t.__preventObserver__ = !1
              }))
            },
            unsetGrabCursor: function() {
              const e = this;
              e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame((() => {
                e.__preventObserver__ = !1
              })))
            }
          },
          events: {
            attachEvents: function() {
              const e = this,
                {
                  params: t
                } = e;
              e.onTouchStart = S.bind(e), e.onTouchMove = x.bind(e), e.onTouchEnd = E.bind(e), e.onDocumentTouchStart = _.bind(e), t.cssMode && (e.onScroll = T.bind(e)), e.onClick = P.bind(e), e.onLoad = C.bind(e), M(e, "on")
            },
            detachEvents: function() {
              M(this, "off")
            }
          },
          breakpoints: {
            setBreakpoint: function() {
              const e = this,
                {
                  realIndex: t,
                  initialized: r,
                  params: i,
                  el: n
                } = e,
                s = i.breakpoints;
              if (!s || s && 0 === Object.keys(s).length) return;
              const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
              if (!o || e.currentBreakpoint === o) return;
              const l = (o in s ? s[o] : void 0) || e.originalParams,
                h = A(e, i),
                c = A(e, l),
                p = i.enabled;
              h && !c ? (n.classList.remove(`${i.containerModifierClass}grid`, `${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !h && c && (n.classList.add(`${i.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === i.grid.fill) && n.classList.add(`${i.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach((t => {
                if (void 0 === l[t]) return;
                const r = i[t] && i[t].enabled,
                  n = l[t] && l[t].enabled;
                r && !n && e[t].disable(), !r && n && e[t].enable()
              }));
              const u = l.direction && l.direction !== i.direction,
                d = i.loop && (l.slidesPerView !== i.slidesPerView || u),
                f = i.loop;
              u && r && e.changeDirection(), (0, a.u)(e.params, l);
              const m = e.params.enabled,
                g = e.params.loop;
              Object.assign(e, {
                allowTouchMove: e.params.allowTouchMove,
                allowSlideNext: e.params.allowSlideNext,
                allowSlidePrev: e.params.allowSlidePrev
              }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), r && (d ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !f && g ? (e.loopCreate(t), e.updateSlides()) : f && !g && e.loopDestroy()), e.emit("breakpoint", l)
            },
            getBreakpoint: function(e, t, r) {
              if (void 0 === t && (t = "window"), !e || "container" === t && !r) return;
              let i = !1;
              const a = (0, n.a)(),
                s = "window" === t ? a.innerHeight : r.clientHeight,
                o = Object.keys(e).map((e => {
                  if ("string" == typeof e && 0 === e.indexOf("@")) {
                    const t = parseFloat(e.substr(1));
                    return {
                      value: s * t,
                      point: e
                    }
                  }
                  return {
                    value: e,
                    point: e
                  }
                }));
              o.sort(((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10)));
              for (let e = 0; e < o.length; e += 1) {
                const {
                  point: n,
                  value: s
                } = o[e];
                "window" === t ? a.matchMedia(`(min-width: ${s}px)`).matches && (i = n) : s <= r.clientWidth && (i = n)
              }
              return i || "max"
            }
          },
          checkOverflow: {
            checkOverflow: function() {
              const e = this,
                {
                  isLocked: t,
                  params: r
                } = e,
                {
                  slidesOffsetBefore: i
                } = r;
              if (i) {
                const t = e.slides.length - 1,
                  r = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * i;
                e.isLocked = e.size > r
              } else e.isLocked = 1 === e.snapGrid.length;
              !0 === r.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === r.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
            }
          },
          classes: {
            addClasses: function() {
              const e = this,
                {
                  classNames: t,
                  params: r,
                  rtl: i,
                  el: n,
                  device: a
                } = e,
                s = function(e, t) {
                  const r = [];
                  return e.forEach((e => {
                    "object" == typeof e ? Object.keys(e).forEach((i => {
                      e[i] && r.push(t + i)
                    })) : "string" == typeof e && r.push(t + e)
                  })), r
                }(["initialized", r.direction, {
                  "free-mode": e.params.freeMode && r.freeMode.enabled
                }, {
                  autoheight: r.autoHeight
                }, {
                  rtl: i
                }, {
                  grid: r.grid && r.grid.rows > 1
                }, {
                  "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                }, {
                  android: a.android
                }, {
                  ios: a.ios
                }, {
                  "css-mode": r.cssMode
                }, {
                  centered: r.cssMode && r.centeredSlides
                }, {
                  "watch-progress": r.watchSlidesProgress
                }], r.containerModifierClass);
              t.push(...s), n.classList.add(...t), e.emitContainerClasses()
            },
            removeClasses: function() {
              const {
                el: e,
                classNames: t
              } = this;
              e.classList.remove(...t), this.emitContainerClasses()
            }
          }
        },
        F = {};
      class L {
        constructor() {
          let e, t;
          for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
          1 === i.length && i[0].constructor && "Object" === Object.prototype.toString.call(i[0]).slice(8, -1) ? t = i[0] : [e, t] = i, t || (t = {}), t = (0, a.u)({}, t), e && !t.el && (t.el = e);
          const o = (0, n.g)();
          if (t.el && "string" == typeof t.el && o.querySelectorAll(t.el).length > 1) {
            const e = [];
            return o.querySelectorAll(t.el).forEach((r => {
              const i = (0, a.u)({}, t, {
                el: r
              });
              e.push(new L(i))
            })), e
          }
          const p = this;
          p.__swiper__ = !0, p.support = h(), p.device = c({
            userAgent: t.userAgent
          }), p.browser = (l || (l = function() {
            const e = (0, n.a)(),
              t = c();
            let r = !1;

            function i() {
              const t = e.navigator.userAgent.toLowerCase();
              return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0
            }
            if (i()) {
              const t = String(e.navigator.userAgent);
              if (t.includes("Version/")) {
                const [e, i] = t.split("Version/")[1].split(" ")[0].split(".").map((e => Number(e)));
                r = e < 16 || 16 === e && i < 2
              }
            }
            const a = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
              s = i();
            return {
              isSafari: r || s,
              needPerspectiveFix: r,
              need3dFix: s || a && t.ios,
              isWebView: a
            }
          }()), l), p.eventsListeners = {}, p.eventsAnyListeners = [], p.modules = [...p.__modules__], t.modules && Array.isArray(t.modules) && p.modules.push(...t.modules);
          const u = {};
          p.modules.forEach((e => {
            e({
              params: t,
              swiper: p,
              extendParams: D(t, u),
              on: p.on.bind(p),
              once: p.once.bind(p),
              off: p.off.bind(p),
              emit: p.emit.bind(p)
            })
          }));
          const d = (0, a.u)({}, k, u);
          return p.params = (0, a.u)({}, d, F, t), p.originalParams = (0, a.u)({}, p.params), p.passedParams = (0, a.u)({}, t), p.params && p.params.on && Object.keys(p.params.on).forEach((e => {
            p.on(e, p.params.on[e])
          })), p.params && p.params.onAny && p.onAny(p.params.onAny), Object.assign(p, {
            enabled: p.params.enabled,
            el: e,
            classNames: [],
            slides: [],
            slidesGrid: [],
            snapGrid: [],
            slidesSizesGrid: [],
            isHorizontal: () => "horizontal" === p.params.direction,
            isVertical: () => "vertical" === p.params.direction,
            activeIndex: 0,
            realIndex: 0,
            isBeginning: !0,
            isEnd: !1,
            translate: 0,
            previousTranslate: 0,
            progress: 0,
            velocity: 0,
            animating: !1,
            cssOverflowAdjustment() {
              return Math.trunc(this.translate / 2 ** 23) * 2 ** 23
            },
            allowSlideNext: p.params.allowSlideNext,
            allowSlidePrev: p.params.allowSlidePrev,
            touchEventsData: {
              isTouched: void 0,
              isMoved: void 0,
              allowTouchCallbacks: void 0,
              touchStartTime: void 0,
              isScrolling: void 0,
              currentTranslate: void 0,
              startTranslate: void 0,
              allowThresholdMove: void 0,
              focusableElements: p.params.focusableElements,
              lastClickTime: 0,
              clickTimeout: void 0,
              velocities: [],
              allowMomentumBounce: void 0,
              startMoving: void 0,
              pointerId: null,
              touchId: null
            },
            allowClick: !0,
            allowTouchMove: p.params.allowTouchMove,
            touches: {
              startX: 0,
              startY: 0,
              currentX: 0,
              currentY: 0,
              diff: 0
            },
            imagesToLoad: [],
            imagesLoaded: 0
          }), p.emit("_swiper"), p.params.init && p.init(), p
        }
        getDirectionLabel(e) {
          return this.isHorizontal() ? e : {
            width: "height",
            "margin-top": "margin-left",
            "margin-bottom ": "margin-right",
            "margin-left": "margin-top",
            "margin-right": "margin-bottom",
            "padding-left": "padding-top",
            "padding-right": "padding-bottom",
            marginRight: "marginBottom"
          } [e]
        }
        getSlideIndex(e) {
          const {
            slidesEl: t,
            params: r
          } = this, i = (0, a.e)(t, `.${r.slideClass}, swiper-slide`), n = (0, a.g)(i[0]);
          return (0, a.g)(e) - n
        }
        getSlideIndexByData(e) {
          return this.getSlideIndex(this.slides.filter((t => 1 * t.getAttribute("data-swiper-slide-index") === e))[0])
        }
        recalcSlides() {
          const {
            slidesEl: e,
            params: t
          } = this;
          this.slides = (0, a.e)(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
          const e = this;
          e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
        }
        disable() {
          const e = this;
          e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
        }
        setProgress(e, t) {
          const r = this;
          e = Math.min(Math.max(e, 0), 1);
          const i = r.minTranslate(),
            n = (r.maxTranslate() - i) * e + i;
          r.translateTo(n, void 0 === t ? 0 : t), r.updateActiveIndex(), r.updateSlidesClasses()
        }
        emitContainerClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = e.el.className.split(" ").filter((t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)));
          e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
          const t = this;
          return t.destroyed ? "" : e.className.split(" ").filter((e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass))).join(" ")
        }
        emitSlidesClasses() {
          const e = this;
          if (!e.params._emitClasses || !e.el) return;
          const t = [];
          e.slides.forEach((r => {
            const i = e.getSlideClasses(r);
            t.push({
              slideEl: r,
              classNames: i
            }), e.emit("_slideClass", r, i)
          })), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e, t) {
          void 0 === e && (e = "current"), void 0 === t && (t = !1);
          const {
            params: r,
            slides: i,
            slidesGrid: n,
            slidesSizesGrid: a,
            size: s,
            activeIndex: o
          } = this;
          let l = 1;
          if ("number" == typeof r.slidesPerView) return r.slidesPerView;
          if (r.centeredSlides) {
            let e, t = i[o] ? Math.ceil(i[o].swiperSlideSize) : 0;
            for (let r = o + 1; r < i.length; r += 1) i[r] && !e && (t += Math.ceil(i[r].swiperSlideSize), l += 1, t > s && (e = !0));
            for (let r = o - 1; r >= 0; r -= 1) i[r] && !e && (t += i[r].swiperSlideSize, l += 1, t > s && (e = !0))
          } else if ("current" === e)
            for (let e = o + 1; e < i.length; e += 1)(t ? n[e] + a[e] - n[o] < s : n[e] - n[o] < s) && (l += 1);
          else
            for (let e = o - 1; e >= 0; e -= 1) n[o] - n[e] < s && (l += 1);
          return l
        }
        update() {
          const e = this;
          if (!e || e.destroyed) return;
          const {
            snapGrid: t,
            params: r
          } = e;

          function i() {
            const t = e.rtlTranslate ? -1 * e.translate : e.translate,
              r = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
            e.setTranslate(r), e.updateActiveIndex(), e.updateSlidesClasses()
          }
          let n;
          if (r.breakpoints && e.setBreakpoint(), [...e.el.querySelectorAll('[loading="lazy"]')].forEach((t => {
              t.complete && u(e, t)
            })), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), r.freeMode && r.freeMode.enabled && !r.cssMode) i(), r.autoHeight && e.updateAutoHeight();
          else {
            if (("auto" === r.slidesPerView || r.slidesPerView > 1) && e.isEnd && !r.centeredSlides) {
              const t = e.virtual && r.virtual.enabled ? e.virtual.slides : e.slides;
              n = e.slideTo(t.length - 1, 0, !1, !0)
            } else n = e.slideTo(e.activeIndex, 0, !1, !0);
            n || i()
          }
          r.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
        }
        changeDirection(e, t) {
          void 0 === t && (t = !0);
          const r = this,
            i = r.params.direction;
          return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (r.el.classList.remove(`${r.params.containerModifierClass}${i}`), r.el.classList.add(`${r.params.containerModifierClass}${e}`), r.emitContainerClasses(), r.params.direction = e, r.slides.forEach((t => {
            "vertical" === e ? t.style.width = "" : t.style.height = ""
          })), r.emit("changeDirection"), t && r.update()), r
        }
        changeLanguageDirection(e) {
          const t = this;
          t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.el.classList.add(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.el.classList.remove(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
        }
        mount(e) {
          const t = this;
          if (t.mounted) return !0;
          let r = e || t.params.el;
          if ("string" == typeof r && (r = document.querySelector(r)), !r) return !1;
          r.swiper = t, r.parentNode && r.parentNode.host && r.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
          const i = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`;
          let n = r && r.shadowRoot && r.shadowRoot.querySelector ? r.shadowRoot.querySelector(i()) : (0, a.e)(r, i())[0];
          return !n && t.params.createElements && (n = (0, a.c)("div", t.params.wrapperClass), r.append(n), (0, a.e)(r, `.${t.params.slideClass}`).forEach((e => {
            n.append(e)
          }))), Object.assign(t, {
            el: r,
            wrapperEl: n,
            slidesEl: t.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : n,
            hostEl: t.isElement ? r.parentNode.host : r,
            mounted: !0,
            rtl: "rtl" === r.dir.toLowerCase() || "rtl" === (0, a.o)(r, "direction"),
            rtlTranslate: "horizontal" === t.params.direction && ("rtl" === r.dir.toLowerCase() || "rtl" === (0, a.o)(r, "direction")),
            wrongRTL: "-webkit-box" === (0, a.o)(n, "display")
          }), !0
        }
        init(e) {
          const t = this;
          if (t.initialized) return t;
          if (!1 === t.mount(e)) return t;
          t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(), t.attachEvents();
          const r = [...t.el.querySelectorAll('[loading="lazy"]')];
          return t.isElement && r.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), r.forEach((e => {
            e.complete ? u(t, e) : e.addEventListener("load", (e => {
              u(t, e.target)
            }))
          })), f(t), t.initialized = !0, f(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e, t) {
          void 0 === e && (e = !0), void 0 === t && (t = !0);
          const r = this,
            {
              params: i,
              el: n,
              wrapperEl: s,
              slides: o
            } = r;
          return void 0 === r.params || r.destroyed || (r.emit("beforeDestroy"), r.initialized = !1, r.detachEvents(), i.loop && r.loopDestroy(), t && (r.removeClasses(), n.removeAttribute("style"), s.removeAttribute("style"), o && o.length && o.forEach((e => {
            e.classList.remove(i.slideVisibleClass, i.slideFullyVisibleClass, i.slideActiveClass, i.slideNextClass, i.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
          }))), r.emit("destroy"), Object.keys(r.eventsListeners).forEach((e => {
            r.off(e)
          })), !1 !== e && (r.el.swiper = null, (0, a.v)(r)), r.destroyed = !0), null
        }
        static extendDefaults(e) {
          (0, a.u)(F, e)
        }
        static get extendedDefaults() {
          return F
        }
        static get defaults() {
          return k
        }
        static installModule(e) {
          L.prototype.__modules__ || (L.prototype.__modules__ = []);
          const t = L.prototype.__modules__;
          "function" == typeof e && t.indexOf(e) < 0 && t.push(e)
        }
        static use(e) {
          return Array.isArray(e) ? (e.forEach((e => L.installModule(e))), L) : (L.installModule(e), L)
        }
      }
      Object.keys(I).forEach((e => {
        Object.keys(I[e]).forEach((t => {
          L.prototype[t] = I[e][t]
        }))
      })), L.use([function(e) {
        let {
          swiper: t,
          on: r,
          emit: i
        } = e;
        const a = (0, n.a)();
        let s = null,
          o = null;
        const l = () => {
            t && !t.destroyed && t.initialized && (i("beforeResize"), i("resize"))
          },
          h = () => {
            t && !t.destroyed && t.initialized && i("orientationchange")
          };
        r("init", (() => {
          t.params.resizeObserver && void 0 !== a.ResizeObserver ? t && !t.destroyed && t.initialized && (s = new ResizeObserver((e => {
            o = a.requestAnimationFrame((() => {
              const {
                width: r,
                height: i
              } = t;
              let n = r,
                a = i;
              e.forEach((e => {
                let {
                  contentBoxSize: r,
                  contentRect: i,
                  target: s
                } = e;
                s && s !== t.el || (n = i ? i.width : (r[0] || r).inlineSize, a = i ? i.height : (r[0] || r).blockSize)
              })), n === r && a === i || l()
            }))
          })), s.observe(t.el)) : (a.addEventListener("resize", l), a.addEventListener("orientationchange", h))
        })), r("destroy", (() => {
          o && a.cancelAnimationFrame(o), s && s.unobserve && t.el && (s.unobserve(t.el), s = null), a.removeEventListener("resize", l), a.removeEventListener("orientationchange", h)
        }))
      }, function(e) {
        let {
          swiper: t,
          extendParams: r,
          on: i,
          emit: s
        } = e;
        const o = [],
          l = (0, n.a)(),
          h = function(e, r) {
            void 0 === r && (r = {});
            const i = new(l.MutationObserver || l.WebkitMutationObserver)((e => {
              if (t.__preventObserver__) return;
              if (1 === e.length) return void s("observerUpdate", e[0]);
              const r = function() {
                s("observerUpdate", e[0])
              };
              l.requestAnimationFrame ? l.requestAnimationFrame(r) : l.setTimeout(r, 0)
            }));
            i.observe(e, {
              attributes: void 0 === r.attributes || r.attributes,
              childList: void 0 === r.childList || r.childList,
              characterData: void 0 === r.characterData || r.characterData
            }), o.push(i)
          };
        r({
          observer: !1,
          observeParents: !1,
          observeSlideChildren: !1
        }), i("init", (() => {
          if (t.params.observer) {
            if (t.params.observeParents) {
              const e = (0, a.a)(t.hostEl);
              for (let t = 0; t < e.length; t += 1) h(e[t])
            }
            h(t.hostEl, {
              childList: t.params.observeSlideChildren
            }), h(t.wrapperEl, {
              attributes: !1
            })
          }
        })), i("destroy", (() => {
          o.forEach((e => {
            e.disconnect()
          })), o.splice(0, o.length)
        }))
      }]);
      const O = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

      function R(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
      }

      function V(e, t) {
        const r = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter((e => r.indexOf(e) < 0)).forEach((r => {
          void 0 === e[r] ? e[r] = t[r] : R(t[r]) && R(e[r]) && Object.keys(t[r]).length > 0 ? t[r].__swiper__ ? e[r] = t[r] : V(e[r], t[r]) : e[r] = t[r]
        }))
      }

      function B(e) {
        return void 0 === e && (e = {}), e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
      }

      function N(e) {
        return void 0 === e && (e = {}), e.pagination && void 0 === e.pagination.el
      }

      function z(e) {
        return void 0 === e && (e = {}), e.scrollbar && void 0 === e.scrollbar.el
      }

      function G(e) {
        void 0 === e && (e = "");
        const t = e.split(" ").map((e => e.trim())).filter((e => !!e)),
          r = [];
        return t.forEach((e => {
          r.indexOf(e) < 0 && r.push(e)
        })), r.join(" ")
      }

      function j(e) {
        return void 0 === e && (e = ""), e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
      }

      function H() {
        return H = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var i in r) Object.prototype.hasOwnProperty.call(r, i) && (e[i] = r[i])
          }
          return e
        }, H.apply(this, arguments)
      }

      function W(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
      }

      function X(e) {
        const t = [];
        return i.Children.toArray(e).forEach((e => {
          W(e) ? t.push(e) : e.props && e.props.children && X(e.props.children).forEach((e => t.push(e)))
        })), t
      }

      function Y(e) {
        const t = [],
          r = {
            "container-start": [],
            "container-end": [],
            "wrapper-start": [],
            "wrapper-end": []
          };
        return i.Children.toArray(e).forEach((e => {
          if (W(e)) t.push(e);
          else if (e.props && e.props.slot && r[e.props.slot]) r[e.props.slot].push(e);
          else if (e.props && e.props.children) {
            const i = X(e.props.children);
            i.length > 0 ? i.forEach((e => t.push(e))) : r["container-end"].push(e)
          } else r["container-end"].push(e)
        })), {
          slides: t,
          slots: r
        }
      }

      function U(e, t) {
        return "undefined" == typeof window ? (0, i.useEffect)(e, t) : (0, i.useLayoutEffect)(e, t)
      }
      const q = (0, i.createContext)(null),
        Z = (0, i.createContext)(null),
        $ = (0, i.forwardRef)((function(e, t) {
          let {
            className: r,
            tag: n = "div",
            wrapperTag: a = "div",
            children: s,
            onSwiper: o,
            ...l
          } = void 0 === e ? {} : e, h = !1;
          const [c, p] = (0, i.useState)("swiper"), [u, d] = (0, i.useState)(null), [f, m] = (0, i.useState)(!1), g = (0, i.useRef)(!1), v = (0, i.useRef)(null), y = (0, i.useRef)(null), b = (0, i.useRef)(null), S = (0, i.useRef)(null), x = (0, i.useRef)(null), E = (0, i.useRef)(null), w = (0, i.useRef)(null), P = (0, i.useRef)(null), {
            params: T,
            passedParams: C,
            rest: _,
            events: M
          } = function(e, t) {
            void 0 === e && (e = {}), void 0 === t && (t = !0);
            const r = {
                on: {}
              },
              i = {},
              n = {};
            V(r, k), r._emitClasses = !0, r.init = !1;
            const a = {},
              s = O.map((e => e.replace(/_/, ""))),
              o = Object.assign({}, e);
            return Object.keys(o).forEach((o => {
              void 0 !== e[o] && (s.indexOf(o) >= 0 ? R(e[o]) ? (r[o] = {}, n[o] = {}, V(r[o], e[o]), V(n[o], e[o])) : (r[o] = e[o], n[o] = e[o]) : 0 === o.search(/on[A-Z]/) && "function" == typeof e[o] ? t ? i[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : r.on[`${o[2].toLowerCase()}${o.substr(3)}`] = e[o] : a[o] = e[o])
            })), ["navigation", "pagination", "scrollbar"].forEach((e => {
              !0 === r[e] && (r[e] = {}), !1 === r[e] && delete r[e]
            })), {
              params: r,
              passedParams: n,
              rest: a,
              events: i
            }
          }(l), {
            slides: A,
            slots: D
          } = Y(s), I = () => {
            m(!f)
          };
          Object.assign(T.on, {
            _containerClasses(e, t) {
              p(t)
            }
          });
          const F = () => {
            Object.assign(T.on, M), h = !0;
            const e = {
              ...T
            };
            if (delete e.wrapperClass, y.current = new L(e), y.current.virtual && y.current.params.virtual.enabled) {
              y.current.virtual.slides = A;
              const e = {
                cache: !1,
                slides: A,
                renderExternal: d,
                renderExternalUpdate: !1
              };
              V(y.current.params.virtual, e), V(y.current.originalParams.virtual, e)
            }
          };
          return v.current || F(), y.current && y.current.on("_beforeBreakpoint", I), (0, i.useEffect)((() => () => {
            y.current && y.current.off("_beforeBreakpoint", I)
          })), (0, i.useEffect)((() => {
            !g.current && y.current && (y.current.emitSlidesClasses(), g.current = !0)
          })), U((() => {
            if (t && (t.current = v.current), v.current) return y.current.destroyed && F(),
              function(e, t) {
                let {
                  el: r,
                  nextEl: i,
                  prevEl: n,
                  paginationEl: a,
                  scrollbarEl: s,
                  swiper: o
                } = e;
                B(t) && i && n && (o.params.navigation.nextEl = i, o.originalParams.navigation.nextEl = i, o.params.navigation.prevEl = n, o.originalParams.navigation.prevEl = n), N(t) && a && (o.params.pagination.el = a, o.originalParams.pagination.el = a), z(t) && s && (o.params.scrollbar.el = s, o.originalParams.scrollbar.el = s), o.init(r)
              }({
                el: v.current,
                nextEl: x.current,
                prevEl: E.current,
                paginationEl: w.current,
                scrollbarEl: P.current,
                swiper: y.current
              }, T), o && !y.current.destroyed && o(y.current), () => {
                y.current && !y.current.destroyed && y.current.destroy(!0, !1)
              }
          }), []), U((() => {
            !h && M && y.current && Object.keys(M).forEach((e => {
              y.current.on(e, M[e])
            }));
            const e = function(e, t, r, i, n) {
              const a = [];
              if (!t) return a;
              const s = e => {
                a.indexOf(e) < 0 && a.push(e)
              };
              if (r && i) {
                const e = i.map(n),
                  t = r.map(n);
                e.join("") !== t.join("") && s("children"), i.length !== r.length && s("children")
              }
              return O.filter((e => "_" === e[0])).map((e => e.replace(/_/, ""))).forEach((r => {
                if (r in e && r in t)
                  if (R(e[r]) && R(t[r])) {
                    const i = Object.keys(e[r]),
                      n = Object.keys(t[r]);
                    i.length !== n.length ? s(r) : (i.forEach((i => {
                      e[r][i] !== t[r][i] && s(r)
                    })), n.forEach((i => {
                      e[r][i] !== t[r][i] && s(r)
                    })))
                  } else e[r] !== t[r] && s(r)
              })), a
            }(C, b.current, A, S.current, (e => e.key));
            return b.current = C, S.current = A, e.length && y.current && !y.current.destroyed && function(e) {
              let {
                swiper: t,
                slides: r,
                passedParams: i,
                changedParams: n,
                nextEl: a,
                prevEl: s,
                scrollbarEl: o,
                paginationEl: l
              } = e;
              const h = n.filter((e => "children" !== e && "direction" !== e && "wrapperClass" !== e)),
                {
                  params: c,
                  pagination: p,
                  navigation: u,
                  scrollbar: d,
                  virtual: f,
                  thumbs: m
                } = t;
              let g, v, y, b, S, x, E, w;
              n.includes("thumbs") && i.thumbs && i.thumbs.swiper && c.thumbs && !c.thumbs.swiper && (g = !0), n.includes("controller") && i.controller && i.controller.control && c.controller && !c.controller.control && (v = !0), n.includes("pagination") && i.pagination && (i.pagination.el || l) && (c.pagination || !1 === c.pagination) && p && !p.el && (y = !0), n.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || o) && (c.scrollbar || !1 === c.scrollbar) && d && !d.el && (b = !0), n.includes("navigation") && i.navigation && (i.navigation.prevEl || s) && (i.navigation.nextEl || a) && (c.navigation || !1 === c.navigation) && u && !u.prevEl && !u.nextEl && (S = !0);
              const P = e => {
                t[e] && (t[e].destroy(), "navigation" === e ? (t.isElement && (t[e].prevEl.remove(), t[e].nextEl.remove()), c[e].prevEl = void 0, c[e].nextEl = void 0, t[e].prevEl = void 0, t[e].nextEl = void 0) : (t.isElement && t[e].el.remove(), c[e].el = void 0, t[e].el = void 0))
              };
              n.includes("loop") && t.isElement && (c.loop && !i.loop ? x = !0 : !c.loop && i.loop ? E = !0 : w = !0), h.forEach((e => {
                if (R(c[e]) && R(i[e])) Object.assign(c[e], i[e]), "navigation" !== e && "pagination" !== e && "scrollbar" !== e || !("enabled" in i[e]) || i[e].enabled || P(e);
                else {
                  const t = i[e];
                  !0 !== t && !1 !== t || "navigation" !== e && "pagination" !== e && "scrollbar" !== e ? c[e] = i[e] : !1 === t && P(e)
                }
              })), h.includes("controller") && !v && t.controller && t.controller.control && c.controller && c.controller.control && (t.controller.control = c.controller.control), n.includes("children") && r && f && c.virtual.enabled ? (f.slides = r, f.update(!0)) : n.includes("virtual") && f && c.virtual.enabled && (r && (f.slides = r), f.update(!0)), n.includes("children") && r && c.loop && (w = !0), g && m.init() && m.update(!0), v && (t.controller.control = c.controller.control), y && (!t.isElement || l && "string" != typeof l || (l = document.createElement("div"), l.classList.add("swiper-pagination"), l.part.add("pagination"), t.el.appendChild(l)), l && (c.pagination.el = l), p.init(), p.render(), p.update()), b && (!t.isElement || o && "string" != typeof o || (o = document.createElement("div"), o.classList.add("swiper-scrollbar"), o.part.add("scrollbar"), t.el.appendChild(o)), o && (c.scrollbar.el = o), d.init(), d.updateSize(), d.setTranslate()), S && (t.isElement && (a && "string" != typeof a || (a = document.createElement("div"), a.classList.add("swiper-button-next"), a.innerHTML = t.hostEl.constructor.nextButtonSvg, a.part.add("button-next"), t.el.appendChild(a)), s && "string" != typeof s || (s = document.createElement("div"), s.classList.add("swiper-button-prev"), s.innerHTML = t.hostEl.constructor.prevButtonSvg, s.part.add("button-prev"), t.el.appendChild(s))), a && (c.navigation.nextEl = a), s && (c.navigation.prevEl = s), u.init(), u.update()), n.includes("allowSlideNext") && (t.allowSlideNext = i.allowSlideNext), n.includes("allowSlidePrev") && (t.allowSlidePrev = i.allowSlidePrev), n.includes("direction") && t.changeDirection(i.direction, !1), (x || w) && t.loopDestroy(), (E || w) && t.loopCreate(), t.update()
            }({
              swiper: y.current,
              slides: A,
              passedParams: C,
              changedParams: e,
              nextEl: x.current,
              prevEl: E.current,
              scrollbarEl: P.current,
              paginationEl: w.current
            }), () => {
              M && y.current && Object.keys(M).forEach((e => {
                y.current.off(e, M[e])
              }))
            }
          })), U((() => {
            var e;
            !(e = y.current) || e.destroyed || !e.params.virtual || e.params.virtual && !e.params.virtual.enabled || (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
          }), [u]), i.createElement(n, H({
            ref: v,
            className: G(`${c}${r?` ${r}`:""}`)
          }, _), i.createElement(Z.Provider, {
            value: y.current
          }, D["container-start"], i.createElement(a, {
            className: j(T.wrapperClass)
          }, D["wrapper-start"], T.virtual ? function(e, t, r) {
            if (!r) return null;
            const n = e => {
                let r = e;
                return e < 0 ? r = t.length + e : r >= t.length && (r -= t.length), r
              },
              a = e.isHorizontal() ? {
                [e.rtlTranslate ? "right" : "left"]: `${r.offset}px`
              } : {
                top: `${r.offset}px`
              },
              {
                from: s,
                to: o
              } = r,
              l = e.params.loop ? -t.length : 0,
              h = e.params.loop ? 2 * t.length : t.length,
              c = [];
            for (let e = l; e < h; e += 1) e >= s && e <= o && c.push(t[n(e)]);
            return c.map(((t, r) => i.cloneElement(t, {
              swiper: e,
              style: a,
              key: `slide-${r}`
            })))
          }(y.current, A, u) : A.map(((e, t) => i.cloneElement(e, {
            swiper: y.current,
            swiperSlideIndex: t
          }))), D["wrapper-end"]), B(T) && i.createElement(i.Fragment, null, i.createElement("div", {
            ref: E,
            className: "swiper-button-prev"
          }), i.createElement("div", {
            ref: x,
            className: "swiper-button-next"
          })), z(T) && i.createElement("div", {
            ref: P,
            className: "swiper-scrollbar"
          }), N(T) && i.createElement("div", {
            ref: w,
            className: "swiper-pagination"
          }), D["container-end"]))
        }));
      $.displayName = "Swiper";
      const J = (0, i.forwardRef)((function(e, t) {
        let {
          tag: r = "div",
          children: n,
          className: a = "",
          swiper: s,
          zoom: o,
          lazy: l,
          virtualIndex: h,
          swiperSlideIndex: c,
          ...p
        } = void 0 === e ? {} : e;
        const u = (0, i.useRef)(null),
          [d, f] = (0, i.useState)("swiper-slide"),
          [m, g] = (0, i.useState)(!1);

        function v(e, t, r) {
          t === u.current && f(r)
        }
        U((() => {
          if (void 0 !== c && (u.current.swiperSlideIndex = c), t && (t.current = u.current), u.current && s) {
            if (!s.destroyed) return s.on("_slideClass", v), () => {
              s && s.off("_slideClass", v)
            };
            "swiper-slide" !== d && f("swiper-slide")
          }
        })), U((() => {
          s && u.current && !s.destroyed && f(s.getSlideClasses(u.current))
        }), [s]);
        const y = {
            isActive: d.indexOf("swiper-slide-active") >= 0,
            isVisible: d.indexOf("swiper-slide-visible") >= 0,
            isPrev: d.indexOf("swiper-slide-prev") >= 0,
            isNext: d.indexOf("swiper-slide-next") >= 0
          },
          b = () => "function" == typeof n ? n(y) : n;
        return i.createElement(r, H({
          ref: u,
          className: G(`${d}${a?` ${a}`:""}`),
          "data-swiper-slide-index": h,
          onLoad: () => {
            g(!0)
          }
        }, p), o && i.createElement(q.Provider, {
          value: y
        }, i.createElement("div", {
          className: "swiper-zoom-container",
          "data-swiper-zoom": "number" == typeof o ? o : void 0
        }, b(), l && !m && i.createElement("div", {
          className: "swiper-lazy-preloader"
        }))), !o && i.createElement(q.Provider, {
          value: y
        }, b(), l && !m && i.createElement("div", {
          className: "swiper-lazy-preloader"
        })))
      }));
      J.displayName = "SwiperSlide"
    },
    8048: e => {
      "use strict";
      e.exports = JSON.parse('[{"value":"AF","label":"افغانستان"},{"value":"AX","label":"Åland"},{"value":"AL","label":"Shqipëria"},{"value":"DZ","label":"الجزائر"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Հայաստան"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Österreich"},{"value":"AZ","label":"Azərbaycan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"‏البحرين"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Белару́сь"},{"value":"BE","label":"België"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Bénin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"ʼbrug-yul"},{"value":"BO","label":"Bolivia"},{"value":"BQ","label":"Bonaire"},{"value":"BA","label":"Bosna i Hercegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvetøya"},{"value":"BR","label":"Brasil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Negara Brunei Darussalam"},{"value":"BG","label":"България"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"KH","label":"Kâmpŭchéa"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"CV","label":"Cabo Verde"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Ködörösêse tî Bêafrîka"},{"value":"TD","label":"Tchad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"中国"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Komori"},{"value":"CG","label":"République du Congo"},{"value":"CD","label":"République démocratique du Congo"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"HR","label":"Hrvatska"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Κύπρος"},{"value":"CZ","label":"Česká republika"},{"value":"DK","label":"Danmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"República Dominicana"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"مصر‎"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Guinea Ecuatorial"},{"value":"ER","label":"ኤርትራ"},{"value":"EE","label":"Eesti"},{"value":"ET","label":"ኢትዮጵያ"},{"value":"FK","label":"Falkland Islands"},{"value":"FO","label":"Føroyar"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Suomi"},{"value":"FR","label":"France"},{"value":"GF","label":"Guyane française"},{"value":"PF","label":"Polynésie française"},{"value":"TF","label":"Territoire des Terres australes et antarctiques fr"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"საქართველო"},{"value":"DE","label":"Deutschland"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Ελλάδα"},{"value":"GL","label":"Kalaallit Nunaat"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinée"},{"value":"GW","label":"Guiné-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haïti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Vaticano"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"香港"},{"value":"HU","label":"Magyarország"},{"value":"IS","label":"Ísland"},{"value":"IN","label":"भारत"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"ایران"},{"value":"IQ","label":"العراق"},{"value":"IE","label":"Éire"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"יִשְׂרָאֵל"},{"value":"IT","label":"Italia"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"日本"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"الأردن"},{"value":"KZ","label":"Қазақстан"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"북한"},{"value":"KR","label":"대한민국"},{"value":"KW","label":"الكويت"},{"value":"KG","label":"Кыргызстан"},{"value":"LA","label":"ສປປລາວ"},{"value":"LV","label":"Latvija"},{"value":"LB","label":"لبنان"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"‏ليبيا"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lietuva"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"澳門"},{"value":"MK","label":"Северна Македонија"},{"value":"MG","label":"Madagasikara"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"M̧ajeļ"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"موريتانيا"},{"value":"MU","label":"Maurice"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"México"},{"value":"FM","label":"Micronesia"},{"value":"MD","label":"Moldova"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Монгол улс"},{"value":"ME","label":"Црна Гора"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"المغرب"},{"value":"MZ","label":"Moçambique"},{"value":"MM","label":"မြန်မာ"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"नपल"},{"value":"NL","label":"Nederland"},{"value":"NC","label":"Nouvelle-Calédonie"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niuē"},{"value":"NF","label":"Norfolk Island"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norge"},{"value":"OM","label":"عمان"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"فلسطين"},{"value":"PA","label":"Panamá"},{"value":"PG","label":"Papua Niugini"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Perú"},{"value":"PH","label":"Pilipinas"},{"value":"PN","label":"Pitcairn Islands"},{"value":"PL","label":"Polska"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"قطر"},{"value":"RE","label":"La Réunion"},{"value":"RO","label":"România"},{"value":"RU","label":"Россия"},{"value":"RW","label":"Rwanda"},{"value":"BL","label":"Saint-Barthélemy"},{"value":"SH","label":"Saint Helena"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint-Martin"},{"value":"PM","label":"Saint-Pierre-et-Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"São Tomé e Príncipe"},{"value":"SA","label":"العربية السعودية"},{"value":"SN","label":"Sénégal"},{"value":"RS","label":"Србија"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten"},{"value":"SK","label":"Slovensko"},{"value":"SI","label":"Slovenija"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Soomaaliya"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"España"},{"value":"LK","label":"śrī laṃkāva"},{"value":"SD","label":"السودان"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard og Jan Mayen"},{"value":"SZ","label":"Swaziland"},{"value":"SE","label":"Sverige"},{"value":"CH","label":"Schweiz"},{"value":"SY","label":"سوريا"},{"value":"TW","label":"臺灣"},{"value":"TJ","label":"Тоҷикистон"},{"value":"TZ","label":"Tanzania"},{"value":"TH","label":"ประเทศไทย"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"تونس"},{"value":"TR","label":"Türkiye"},{"value":"TM","label":"Türkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Україна"},{"value":"AE","label":"دولة الإمارات العربية المتحدة"},{"value":"GB","label":"United Kingdom"},{"value":"US","label":"United States"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"O‘zbekiston"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela"},{"value":"VN","label":"Việt Nam"},{"value":"VG","label":"British Virgin Islands"},{"value":"VI","label":"United States Virgin Islands"},{"value":"WF","label":"Wallis et Futuna"},{"value":"EH","label":"الصحراء الغربية"},{"value":"YE","label":"اليَمَن"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    },
    2396: e => {
      "use strict";
      e.exports = JSON.parse('[{"value":"AF","label":"Afghanistan"},{"value":"AX","label":"Åland Islands"},{"value":"AL","label":"Albania"},{"value":"DZ","label":"Algeria"},{"value":"AS","label":"American Samoa"},{"value":"AD","label":"Andorra"},{"value":"AO","label":"Angola"},{"value":"AI","label":"Anguilla"},{"value":"AQ","label":"Antarctica"},{"value":"AG","label":"Antigua and Barbuda"},{"value":"AR","label":"Argentina"},{"value":"AM","label":"Armenia"},{"value":"AW","label":"Aruba"},{"value":"AU","label":"Australia"},{"value":"AT","label":"Austria"},{"value":"AZ","label":"Azerbaijan"},{"value":"BS","label":"Bahamas"},{"value":"BH","label":"Bahrain"},{"value":"BD","label":"Bangladesh"},{"value":"BB","label":"Barbados"},{"value":"BY","label":"Belarus"},{"value":"BE","label":"Belgium"},{"value":"BZ","label":"Belize"},{"value":"BJ","label":"Benin"},{"value":"BM","label":"Bermuda"},{"value":"BT","label":"Bhutan"},{"value":"BO","label":"Bolivia, Plurinational State of"},{"value":"BQ","label":"Bonaire, Sint Eustatius and Saba"},{"value":"BA","label":"Bosnia and Herzegovina"},{"value":"BW","label":"Botswana"},{"value":"BV","label":"Bouvet Island"},{"value":"BR","label":"Brazil"},{"value":"IO","label":"British Indian Ocean Territory"},{"value":"BN","label":"Brunei Darussalam"},{"value":"BG","label":"Bulgaria"},{"value":"BF","label":"Burkina Faso"},{"value":"BI","label":"Burundi"},{"value":"CV","label":"Cabo Verde"},{"value":"KH","label":"Cambodia"},{"value":"CM","label":"Cameroon"},{"value":"CA","label":"Canada"},{"value":"KY","label":"Cayman Islands"},{"value":"CF","label":"Central African Republic"},{"value":"TD","label":"Chad"},{"value":"CL","label":"Chile"},{"value":"CN","label":"China"},{"value":"CX","label":"Christmas Island"},{"value":"CC","label":"Cocos (Keeling) Islands"},{"value":"CO","label":"Colombia"},{"value":"KM","label":"Comoros"},{"value":"CG","label":"Congo"},{"value":"CD","label":"Congo, Democratic Republic of the"},{"value":"CK","label":"Cook Islands"},{"value":"CR","label":"Costa Rica"},{"value":"HR","label":"Croatia"},{"value":"CU","label":"Cuba"},{"value":"CW","label":"Curaçao"},{"value":"CY","label":"Cyprus"},{"value":"CZ","label":"Czechia"},{"value":"CI","label":"Côte d\'Ivoire"},{"value":"DK","label":"Denmark"},{"value":"DJ","label":"Djibouti"},{"value":"DM","label":"Dominica"},{"value":"DO","label":"Dominican Republic"},{"value":"EC","label":"Ecuador"},{"value":"EG","label":"Egypt"},{"value":"SV","label":"El Salvador"},{"value":"GQ","label":"Equatorial Guinea"},{"value":"ER","label":"Eritrea"},{"value":"EE","label":"Estonia"},{"value":"SZ","label":"Eswatini"},{"value":"ET","label":"Ethiopia"},{"value":"FK","label":"Falkland Islands (Malvinas)"},{"value":"FO","label":"Faroe Islands"},{"value":"FJ","label":"Fiji"},{"value":"FI","label":"Finland"},{"value":"FR","label":"France"},{"value":"GF","label":"French Guiana"},{"value":"PF","label":"French Polynesia"},{"value":"TF","label":"French Southern Territories"},{"value":"GA","label":"Gabon"},{"value":"GM","label":"Gambia"},{"value":"GE","label":"Georgia"},{"value":"DE","label":"Germany"},{"value":"GH","label":"Ghana"},{"value":"GI","label":"Gibraltar"},{"value":"GR","label":"Greece"},{"value":"GL","label":"Greenland"},{"value":"GD","label":"Grenada"},{"value":"GP","label":"Guadeloupe"},{"value":"GU","label":"Guam"},{"value":"GT","label":"Guatemala"},{"value":"GG","label":"Guernsey"},{"value":"GN","label":"Guinea"},{"value":"GW","label":"Guinea-Bissau"},{"value":"GY","label":"Guyana"},{"value":"HT","label":"Haiti"},{"value":"HM","label":"Heard Island and McDonald Islands"},{"value":"VA","label":"Holy See"},{"value":"HN","label":"Honduras"},{"value":"HK","label":"Hong Kong"},{"value":"HU","label":"Hungary"},{"value":"IS","label":"Iceland"},{"value":"IN","label":"India"},{"value":"ID","label":"Indonesia"},{"value":"IR","label":"Iran, Islamic Republic of"},{"value":"IQ","label":"Iraq"},{"value":"IE","label":"Ireland"},{"value":"IM","label":"Isle of Man"},{"value":"IL","label":"Israel"},{"value":"IT","label":"Italy"},{"value":"JM","label":"Jamaica"},{"value":"JP","label":"Japan"},{"value":"JE","label":"Jersey"},{"value":"JO","label":"Jordan"},{"value":"KZ","label":"Kazakhstan"},{"value":"KE","label":"Kenya"},{"value":"KI","label":"Kiribati"},{"value":"KP","label":"Korea, Democratic People\'s Republic of"},{"value":"KR","label":"Korea, Republic of"},{"value":"KW","label":"Kuwait"},{"value":"KG","label":"Kyrgyzstan"},{"value":"LA","label":"Lao People\'s Democratic Republic"},{"value":"LV","label":"Latvia"},{"value":"LB","label":"Lebanon"},{"value":"LS","label":"Lesotho"},{"value":"LR","label":"Liberia"},{"value":"LY","label":"Libya"},{"value":"LI","label":"Liechtenstein"},{"value":"LT","label":"Lithuania"},{"value":"LU","label":"Luxembourg"},{"value":"MO","label":"Macao"},{"value":"MG","label":"Madagascar"},{"value":"MW","label":"Malawi"},{"value":"MY","label":"Malaysia"},{"value":"MV","label":"Maldives"},{"value":"ML","label":"Mali"},{"value":"MT","label":"Malta"},{"value":"MH","label":"Marshall Islands"},{"value":"MQ","label":"Martinique"},{"value":"MR","label":"Mauritania"},{"value":"MU","label":"Mauritius"},{"value":"YT","label":"Mayotte"},{"value":"MX","label":"Mexico"},{"value":"FM","label":"Micronesia, Federated States of"},{"value":"MD","label":"Moldova, Republic of"},{"value":"MC","label":"Monaco"},{"value":"MN","label":"Mongolia"},{"value":"ME","label":"Montenegro"},{"value":"MS","label":"Montserrat"},{"value":"MA","label":"Morocco"},{"value":"MZ","label":"Mozambique"},{"value":"MM","label":"Myanmar"},{"value":"NA","label":"Namibia"},{"value":"NR","label":"Nauru"},{"value":"NP","label":"Nepal"},{"value":"NL","label":"Netherlands"},{"value":"NC","label":"New Caledonia"},{"value":"NZ","label":"New Zealand"},{"value":"NI","label":"Nicaragua"},{"value":"NE","label":"Niger"},{"value":"NG","label":"Nigeria"},{"value":"NU","label":"Niue"},{"value":"NF","label":"Norfolk Island"},{"value":"MK","label":"North Macedonia"},{"value":"MP","label":"Northern Mariana Islands"},{"value":"NO","label":"Norway"},{"value":"OM","label":"Oman"},{"value":"PK","label":"Pakistan"},{"value":"PW","label":"Palau"},{"value":"PS","label":"Palestine, State of"},{"value":"PA","label":"Panama"},{"value":"PG","label":"Papua New Guinea"},{"value":"PY","label":"Paraguay"},{"value":"PE","label":"Peru"},{"value":"PH","label":"Philippines"},{"value":"PN","label":"Pitcairn"},{"value":"PL","label":"Poland"},{"value":"PT","label":"Portugal"},{"value":"PR","label":"Puerto Rico"},{"value":"QA","label":"Qatar"},{"value":"RO","label":"Romania"},{"value":"RU","label":"Russian Federation"},{"value":"RW","label":"Rwanda"},{"value":"RE","label":"Réunion"},{"value":"BL","label":"Saint Barthélemy"},{"value":"SH","label":"Saint Helena, Ascension and Tristan da Cunha"},{"value":"KN","label":"Saint Kitts and Nevis"},{"value":"LC","label":"Saint Lucia"},{"value":"MF","label":"Saint Martin (French part)"},{"value":"PM","label":"Saint Pierre and Miquelon"},{"value":"VC","label":"Saint Vincent and the Grenadines"},{"value":"WS","label":"Samoa"},{"value":"SM","label":"San Marino"},{"value":"ST","label":"Sao Tome and Principe"},{"value":"SA","label":"Saudi Arabia"},{"value":"SN","label":"Senegal"},{"value":"RS","label":"Serbia"},{"value":"SC","label":"Seychelles"},{"value":"SL","label":"Sierra Leone"},{"value":"SG","label":"Singapore"},{"value":"SX","label":"Sint Maarten (Dutch part)"},{"value":"SK","label":"Slovakia"},{"value":"SI","label":"Slovenia"},{"value":"SB","label":"Solomon Islands"},{"value":"SO","label":"Somalia"},{"value":"ZA","label":"South Africa"},{"value":"GS","label":"South Georgia and the South Sandwich Islands"},{"value":"SS","label":"South Sudan"},{"value":"ES","label":"Spain"},{"value":"LK","label":"Sri Lanka"},{"value":"SD","label":"Sudan"},{"value":"SR","label":"Suriname"},{"value":"SJ","label":"Svalbard and Jan Mayen"},{"value":"SE","label":"Sweden"},{"value":"CH","label":"Switzerland"},{"value":"SY","label":"Syrian Arab Republic"},{"value":"TW","label":"Taiwan, Province of China"},{"value":"TJ","label":"Tajikistan"},{"value":"TZ","label":"Tanzania, United Republic of"},{"value":"TH","label":"Thailand"},{"value":"TL","label":"Timor-Leste"},{"value":"TG","label":"Togo"},{"value":"TK","label":"Tokelau"},{"value":"TO","label":"Tonga"},{"value":"TT","label":"Trinidad and Tobago"},{"value":"TN","label":"Tunisia"},{"value":"TR","label":"Turkey"},{"value":"TM","label":"Turkmenistan"},{"value":"TC","label":"Turks and Caicos Islands"},{"value":"TV","label":"Tuvalu"},{"value":"UG","label":"Uganda"},{"value":"UA","label":"Ukraine"},{"value":"AE","label":"United Arab Emirates"},{"value":"GB","label":"United Kingdom"},{"value":"UM","label":"United States Minor Outlying Islands"},{"value":"US","label":"United States"},{"value":"UY","label":"Uruguay"},{"value":"UZ","label":"Uzbekistan"},{"value":"VU","label":"Vanuatu"},{"value":"VE","label":"Venezuela, Bolivarian Republic of"},{"value":"VN","label":"Viet Nam"},{"value":"VG","label":"Virgin Islands, British"},{"value":"VI","label":"Virgin Islands, U.S."},{"value":"WF","label":"Wallis and Futuna"},{"value":"EH","label":"Western Sahara"},{"value":"YE","label":"Yemen"},{"value":"ZM","label":"Zambia"},{"value":"ZW","label":"Zimbabwe"}]')
    }
  }
]);
//# sourceMappingURL=ac7887def94f53d045fc326e551cee2f.js.map