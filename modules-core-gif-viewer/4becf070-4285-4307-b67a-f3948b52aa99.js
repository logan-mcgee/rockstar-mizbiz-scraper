try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "4becf070-4285-4307-b67a-f3948b52aa99", t._sentryDebugIdIdentifier = "sentry-dbid-4becf070-4285-4307-b67a-f3948b52aa99")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [986], {
    79484(t, e, i) {
      i.d(e, {
        c: () => W
      });
      var s, o = i(39793),
        r = i(93082),
        n = i(84017),
        a = function() {
          return a = Object.assign || function(t) {
            for (var e, i = 1, s = arguments.length; i < s; i++)
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
        d = {
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
          topRight: a(a({}, d), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: a(a({}, d), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: a(a({}, d), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: a(a({}, d), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        u = (0, r.memo)(function(t) {
          var e = t.onResizeStart,
            i = t.direction,
            s = t.children,
            n = t.replaceStyles,
            h = t.className,
            p = (0, r.useCallback)(function(t) {
              e(t, i)
            }, [e, i]),
            d = (0, r.useCallback)(function(t) {
              e(t, i)
            }, [e, i]),
            u = (0, r.useMemo)(function() {
              return a(a({
                position: "absolute",
                userSelect: "none"
              }, l[i]), null != n ? n : {})
            }, [n, i]);
          return (0, o.jsx)("div", {
            className: h || void 0,
            style: u,
            onMouseDown: p,
            onTouchStart: d,
            children: s
          })
        }),
        c = (s = function(t, e) {
          return s = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(t, e) {
            t.__proto__ = e
          } || function(t, e) {
            for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i])
          }, s(t, e)
        }, function(t, e) {
          if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

          function i() {
            this.constructor = t
          }
          s(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
        }),
        f = function() {
          return f = Object.assign || function(t) {
            for (var e, i = 1, s = arguments.length; i < s; i++)
              for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
            return t
          }, f.apply(this, arguments)
        },
        g = {
          width: "auto",
          height: "auto"
        },
        w = function(t, e, i) {
          return Math.max(Math.min(t, i), e)
        },
        v = function(t, e, i) {
          var s = Math.round(t / e);
          return s * e + i * (s - 1)
        },
        b = function(t, e) {
          return new RegExp(t, "i").test(e)
        },
        y = function(t) {
          return Boolean(t.touches && t.touches.length)
        },
        m = function(t, e, i) {
          void 0 === i && (i = 0);
          var s = e.reduce(function(i, s, o) {
              return Math.abs(s - t) < Math.abs(e[i] - t) ? o : i
            }, 0),
            o = Math.abs(e[s] - t);
          return 0 === i || o < i ? e[s] : t
        },
        z = function(t) {
          return "auto" === (t = t.toString()) || t.endsWith("px") || t.endsWith("%") || t.endsWith("vh") || t.endsWith("vw") || t.endsWith("vmax") || t.endsWith("vmin") ? t : "".concat(t, "px")
        },
        x = function(t, e, i, s) {
          if (t && "string" == typeof t) {
            if (t.endsWith("px")) return Number(t.replace("px", ""));
            if (t.endsWith("%")) return e * (Number(t.replace("%", "")) / 100);
            if (t.endsWith("vw")) return i * (Number(t.replace("vw", "")) / 100);
            if (t.endsWith("vh")) return s * (Number(t.replace("vh", "")) / 100)
          }
          return t
        },
        S = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        R = "__resizable_base__",
        W = function(t) {
          function e(e) {
            var i, s, o, r, n = t.call(this, e) || this;
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
              width: null !== (s = null === (i = n.propsSize) || void 0 === i ? void 0 : i.width) && void 0 !== s ? s : "auto",
              height: null !== (r = null === (o = n.propsSize) || void 0 === o ? void 0 : o.height) && void 0 !== r ? r : "auto",
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
                  s = this.resizable.offsetHeight,
                  o = this.resizable.style.position;
                "relative" !== o && (this.resizable.style.position = "relative"), t = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i, e = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : s, this.resizable.style.position = o
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
                    var s = t.getParentSize(),
                      o = Number(t.state[e].toString().replace("px", "")) / s[e] * 100;
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
            var s = {
              width: t.offsetWidth,
              height: t.offsetHeight
            };
            return e && (this.parentNode.style.flexWrap = i), this.removeBase(t), s
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
            var i, s, o = this.props.boundsByDirection,
              r = this.state.direction,
              n = o && b("left", r),
              a = o && b("top", r);
            if ("parent" === this.props.bounds) {
              var h = this.parentNode;
              h && (i = n ? this.resizableRight - this.parentLeft : h.offsetWidth + (this.parentLeft - this.resizableLeft), s = a ? this.resizableBottom - this.parentTop : h.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = n ? this.resizableRight : this.window.innerWidth - this.resizableLeft, s = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = n ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), s = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (t = t && t < i ? t : i), s && Number.isFinite(s) && (e = e && e < s ? e : s), {
              maxWidth: t,
              maxHeight: e
            }
          }, e.prototype.calculateNewSizeFromDirection = function(t, e) {
            var i, s = this.props.scale || 1,
              o = (i = this.props.resizeRatio || 1, Array.isArray(i) ? i : [i, i]),
              r = o[0],
              n = o[1],
              a = this.state,
              h = a.direction,
              p = a.original,
              d = this.props,
              l = d.lockAspectRatio,
              u = d.lockAspectRatioExtraHeight,
              c = d.lockAspectRatioExtraWidth,
              f = p.width,
              g = p.height,
              w = u || 0,
              v = c || 0;
            return b("right", h) && (f = p.width + (t - p.x) * r / s, l && (g = (f - v) / this.ratio + w)), b("left", h) && (f = p.width - (t - p.x) * r / s, l && (g = (f - v) / this.ratio + w)), b("bottom", h) && (g = p.height + (e - p.y) * n / s, l && (f = (g - w) * this.ratio + v)), b("top", h) && (g = p.height - (e - p.y) * n / s, l && (f = (g - w) * this.ratio + v)), {
              newWidth: f,
              newHeight: g
            }
          }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, s) {
            var o = this.props,
              r = o.lockAspectRatio,
              n = o.lockAspectRatioExtraHeight,
              a = o.lockAspectRatioExtraWidth,
              h = void 0 === s.width ? 10 : s.width,
              p = void 0 === i.width || i.width < 0 ? t : i.width,
              d = void 0 === s.height ? 10 : s.height,
              l = void 0 === i.height || i.height < 0 ? e : i.height,
              u = n || 0,
              c = a || 0;
            if (r) {
              var f = (d - u) * this.ratio + c,
                g = (l - u) * this.ratio + c,
                v = (h - c) / this.ratio + u,
                b = (p - c) / this.ratio + u,
                y = Math.max(h, f),
                m = Math.min(p, g),
                z = Math.max(d, v),
                x = Math.min(l, b);
              t = w(t, y, m), e = w(e, z, x)
            } else t = w(t, h, p), e = w(e, d, l);
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
              var s = this.props.bounds.getBoundingClientRect();
              this.targetLeft = s.left * t, this.targetTop = s.top * t
            }
            if (this.resizable) {
              var o = this.resizable.getBoundingClientRect(),
                r = o.left,
                n = o.top,
                a = o.right,
                h = o.bottom;
              this.resizableLeft = r * t, this.resizableRight = a * t, this.resizableTop = n * t, this.resizableBottom = h * t
            }
          }, e.prototype.onResizeStart = function(t, e) {
            if (this.resizable && this.window) {
              var i, s = 0,
                o = 0;
              if (t.nativeEvent && function(t) {
                  return Boolean((t.clientX || 0 === t.clientX) && (t.clientY || 0 === t.clientY))
                }(t.nativeEvent) ? (s = t.nativeEvent.clientX, o = t.nativeEvent.clientY) : t.nativeEvent && y(t.nativeEvent) && (s = t.nativeEvent.touches[0].clientX, o = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(t, e, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var r = this.window.getComputedStyle(this.resizable);
              if ("auto" !== r.flexBasis) {
                var n = this.parentNode;
                if (n) {
                  var a = this.window.getComputedStyle(n).flexDirection;
                  this.flexDir = a.startsWith("row") ? "row" : "column", i = r.flexBasis
                }
              }
              this.setBoundingClientRect(), this.bindEvents();
              var h = {
                original: {
                  x: s,
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
                s = i.maxWidth,
                o = i.maxHeight,
                r = i.minWidth,
                a = i.minHeight,
                h = y(t) ? t.touches[0].clientX : t.clientX,
                p = y(t) ? t.touches[0].clientY : t.clientY,
                d = this.state,
                l = d.direction,
                u = d.original,
                c = d.width,
                f = d.height,
                g = this.getParentSize(),
                w = function(t, e, i, s, o, r, n) {
                  return s = x(s, t.width, e, i), o = x(o, t.height, e, i), r = x(r, t.width, e, i), n = x(n, t.height, e, i), {
                    maxWidth: void 0 === s ? void 0 : Number(s),
                    maxHeight: void 0 === o ? void 0 : Number(o),
                    minWidth: void 0 === r ? void 0 : Number(r),
                    minHeight: void 0 === n ? void 0 : Number(n)
                  }
                }(g, this.window.innerWidth, this.window.innerHeight, s, o, r, a);
              s = w.maxWidth, o = w.maxHeight, r = w.minWidth, a = w.minHeight;
              var b = this.calculateNewSizeFromDirection(h, p),
                z = b.newHeight,
                S = b.newWidth,
                R = this.calculateNewMaxFromBoundary(s, o);
              this.props.snap && this.props.snap.x && (S = m(S, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (z = m(z, this.props.snap.y, this.props.snapGap));
              var W = this.calculateNewSizeFromAspectRatio(S, z, {
                width: R.maxWidth,
                height: R.maxHeight
              }, {
                width: r,
                height: a
              });
              if (S = W.newWidth, z = W.newHeight, this.props.grid) {
                var E = v(S, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  M = v(z, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  _ = this.props.snapGap || 0;
                S = 0 === _ || Math.abs(E - S) <= _ ? E : S, z = 0 === _ || Math.abs(M - z) <= _ ? M : z
              }
              var k = {
                width: S - u.width,
                height: z - u.height
              };
              if (this.delta = k, c && "string" == typeof c)
                if (c.endsWith("%")) {
                  var N = S / g.width * 100;
                  S = "".concat(N, "%")
                } else if (c.endsWith("vw")) {
                var B = S / this.window.innerWidth * 100;
                S = "".concat(B, "vw")
              } else if (c.endsWith("vh")) {
                var H = S / this.window.innerHeight * 100;
                S = "".concat(H, "vh")
              }
              f && "string" == typeof f && (f.endsWith("%") ? (N = z / g.height * 100, z = "".concat(N, "%")) : f.endsWith("vw") ? (B = z / this.window.innerWidth * 100, z = "".concat(B, "vw")) : f.endsWith("vh") && (H = z / this.window.innerHeight * 100, z = "".concat(H, "vh")));
              var L = {
                width: this.createSizeForCssProperty(S, "width"),
                height: this.createSizeForCssProperty(z, "height")
              };
              "row" === this.flexDir ? L.flexBasis = L.width : "column" === this.flexDir && (L.flexBasis = L.height);
              var C = this.state.width !== L.width,
                O = this.state.height !== L.height,
                T = this.state.flexBasis !== L.flexBasis,
                j = C || O || T;
              j && (0, n.flushSync)(function() {
                e.setState(L)
              }), this.props.onResize && j && this.props.onResize(t, l, this.resizable, k)
            }
          }, e.prototype.onMouseUp = function(t) {
            var e, i, s = this.state,
              o = s.isResizing,
              r = s.direction;
            s.original, o && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(t, r, this.resizable, this.delta), this.props.size && this.setState({
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
              s = e.handleStyles,
              r = e.handleClasses,
              n = e.handleWrapperStyle,
              a = e.handleWrapperClass,
              h = e.handleComponent;
            if (!i) return null;
            var p = Object.keys(i).map(function(e) {
              return !1 !== i[e] ? (0, o.jsx)(u, {
                direction: e,
                onResizeStart: t.onResizeStart,
                replaceStyles: s && s[e],
                className: r && r[e],
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
            var s = this.props.as || "div";
            return (0, o.jsxs)(s, f({
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
        }(r.PureComponent)
    },
    94931(t, e, i) {
      var s = i(93082),
        o = Symbol.for("react.element"),
        r = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        n = s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function h(t, e, i) {
        var s, h = {},
          p = null,
          d = null;
        for (s in void 0 !== i && (p = "" + i), void 0 !== e.key && (p = "" + e.key), void 0 !== e.ref && (d = e.ref), e) r.call(e, s) && !a.hasOwnProperty(s) && (h[s] = e[s]);
        if (t && t.defaultProps)
          for (s in e = t.defaultProps) void 0 === h[s] && (h[s] = e[s]);
        return {
          $$typeof: o,
          type: t,
          key: p,
          ref: d,
          props: h,
          _owner: n.current
        }
      }
      e.jsx = h, e.jsxs = h
    },
    39793(t, e, i) {
      t.exports = i(94931)
    },
    39279(t, e, i) {
      i.d(e, {
        A: () => h
      });
      const s = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let o;
      const r = new Uint8Array(16);

      function n() {
        if (!o && (o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !o)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return o(r)
      }
      const a = [];
      for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
      const h = function(t, e, i) {
        if (s.randomUUID && !e && !t) return s.randomUUID();
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
    }
  }
]);