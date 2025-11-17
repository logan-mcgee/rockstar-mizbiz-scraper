try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "83665e94-0af2-486d-a1d3-c572178c877f", t._sentryDebugIdIdentifier = "sentry-dbid-83665e94-0af2-486d-a1d3-c572178c877f")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [8787], {
    11206: (t, e, i) => {
      "use strict";
      i.d(e, {
        A: () => h
      });
      const s = {
        randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
      };
      let o;
      const n = new Uint8Array(16);

      function r() {
        if (!o && (o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !o)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return o(n)
      }
      const a = [];
      for (let t = 0; t < 256; ++t) a.push((t + 256).toString(16).slice(1));
      const h = function(t, e, i) {
        if (s.randomUUID && !e && !t) return s.randomUUID();
        const o = (t = t || {}).random || (t.rng || r)();
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
    21442: (t, e, i) => {
      "use strict";
      var s, o = i(42295),
        n = i(62229),
        r = i(44853),
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
        c = (0, n.memo)(function(t) {
          var e = t.onResizeStart,
            i = t.direction,
            s = t.children,
            r = t.replaceStyles,
            h = t.className,
            p = (0, n.useCallback)(function(t) {
              e(t, i)
            }, [e, i]),
            d = (0, n.useCallback)(function(t) {
              e(t, i)
            }, [e, i]),
            c = (0, n.useMemo)(function() {
              return a(a({
                position: "absolute",
                userSelect: "none"
              }, l[i]), null != r ? r : {})
            }, [r, i]);
          return (0, o.jsx)("div", {
            className: h || void 0,
            style: c,
            onMouseDown: p,
            onTouchStart: d,
            children: s
          })
        }),
        u = (s = function(t, e) {
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
        b = function(t, e, i) {
          return Math.max(Math.min(t, i), e)
        },
        w = function(t, e, i) {
          var s = Math.round(t / e);
          return s * e + i * (s - 1)
        },
        v = function(t, e) {
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
        R = "__resizable_base__";
      ! function(t) {
        function e(e) {
          var i, s, o, n, r = t.call(this, e) || this;
          return r.ratio = 1, r.resizable = null, r.parentLeft = 0, r.parentTop = 0, r.resizableLeft = 0, r.resizableRight = 0, r.resizableTop = 0, r.resizableBottom = 0, r.targetLeft = 0, r.targetTop = 0, r.delta = {
            width: 0,
            height: 0
          }, r.appendBase = function() {
            if (!r.resizable || !r.window) return null;
            var t = r.parentNode;
            if (!t) return null;
            var e = r.window.document.createElement("div");
            return e.style.width = "100%", e.style.height = "100%", e.style.position = "absolute", e.style.transform = "scale(0, 0)", e.style.left = "0", e.style.flex = "0 0 100%", e.classList ? e.classList.add(R) : e.className += R, t.appendChild(e), e
          }, r.removeBase = function(t) {
            var e = r.parentNode;
            e && e.removeChild(t)
          }, r.state = {
            isResizing: !1,
            width: null !== (s = null === (i = r.propsSize) || void 0 === i ? void 0 : i.width) && void 0 !== s ? s : "auto",
            height: null !== (n = null === (o = r.propsSize) || void 0 === o ? void 0 : o.height) && void 0 !== n ? n : "auto",
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
        u(e, t), Object.defineProperty(e.prototype, "parentNode", {
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
            n = this.state.direction,
            r = o && v("left", n),
            a = o && v("top", n);
          if ("parent" === this.props.bounds) {
            var h = this.parentNode;
            h && (i = r ? this.resizableRight - this.parentLeft : h.offsetWidth + (this.parentLeft - this.resizableLeft), s = a ? this.resizableBottom - this.parentTop : h.offsetHeight + (this.parentTop - this.resizableTop))
          } else "window" === this.props.bounds ? this.window && (i = r ? this.resizableRight : this.window.innerWidth - this.resizableLeft, s = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = r ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), s = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
          return i && Number.isFinite(i) && (t = t && t < i ? t : i), s && Number.isFinite(s) && (e = e && e < s ? e : s), {
            maxWidth: t,
            maxHeight: e
          }
        }, e.prototype.calculateNewSizeFromDirection = function(t, e) {
          var i, s = this.props.scale || 1,
            o = (i = this.props.resizeRatio || 1, Array.isArray(i) ? i : [i, i]),
            n = o[0],
            r = o[1],
            a = this.state,
            h = a.direction,
            p = a.original,
            d = this.props,
            l = d.lockAspectRatio,
            c = d.lockAspectRatioExtraHeight,
            u = d.lockAspectRatioExtraWidth,
            f = p.width,
            g = p.height,
            b = c || 0,
            w = u || 0;
          return v("right", h) && (f = p.width + (t - p.x) * n / s, l && (g = (f - w) / this.ratio + b)), v("left", h) && (f = p.width - (t - p.x) * n / s, l && (g = (f - w) / this.ratio + b)), v("bottom", h) && (g = p.height + (e - p.y) * r / s, l && (f = (g - b) * this.ratio + w)), v("top", h) && (g = p.height - (e - p.y) * r / s, l && (f = (g - b) * this.ratio + w)), {
            newWidth: f,
            newHeight: g
          }
        }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, s) {
          var o = this.props,
            n = o.lockAspectRatio,
            r = o.lockAspectRatioExtraHeight,
            a = o.lockAspectRatioExtraWidth,
            h = void 0 === s.width ? 10 : s.width,
            p = void 0 === i.width || i.width < 0 ? t : i.width,
            d = void 0 === s.height ? 10 : s.height,
            l = void 0 === i.height || i.height < 0 ? e : i.height,
            c = r || 0,
            u = a || 0;
          if (n) {
            var f = (d - c) * this.ratio + u,
              g = (l - c) * this.ratio + u,
              w = (h - u) / this.ratio + c,
              v = (p - u) / this.ratio + c,
              y = Math.max(h, f),
              m = Math.min(p, g),
              z = Math.max(d, w),
              x = Math.min(l, v);
            t = b(t, y, m), e = b(e, z, x)
          } else t = b(t, h, p), e = b(e, d, l);
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
              n = o.left,
              r = o.top,
              a = o.right,
              h = o.bottom;
            this.resizableLeft = n * t, this.resizableRight = a * t, this.resizableTop = r * t, this.resizableBottom = h * t
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
            var n = this.window.getComputedStyle(this.resizable);
            if ("auto" !== n.flexBasis) {
              var r = this.parentNode;
              if (r) {
                var a = this.window.getComputedStyle(r).flexDirection;
                this.flexDir = a.startsWith("row") ? "row" : "column", i = n.flexBasis
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
              n = i.minWidth,
              a = i.minHeight,
              h = y(t) ? t.touches[0].clientX : t.clientX,
              p = y(t) ? t.touches[0].clientY : t.clientY,
              d = this.state,
              l = d.direction,
              c = d.original,
              u = d.width,
              f = d.height,
              g = this.getParentSize(),
              b = function(t, e, i, s, o, n, r) {
                return s = x(s, t.width, e, i), o = x(o, t.height, e, i), n = x(n, t.width, e, i), r = x(r, t.height, e, i), {
                  maxWidth: void 0 === s ? void 0 : Number(s),
                  maxHeight: void 0 === o ? void 0 : Number(o),
                  minWidth: void 0 === n ? void 0 : Number(n),
                  minHeight: void 0 === r ? void 0 : Number(r)
                }
              }(g, this.window.innerWidth, this.window.innerHeight, s, o, n, a);
            s = b.maxWidth, o = b.maxHeight, n = b.minWidth, a = b.minHeight;
            var v = this.calculateNewSizeFromDirection(h, p),
              z = v.newHeight,
              S = v.newWidth,
              R = this.calculateNewMaxFromBoundary(s, o);
            this.props.snap && this.props.snap.x && (S = m(S, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (z = m(z, this.props.snap.y, this.props.snapGap));
            var W = this.calculateNewSizeFromAspectRatio(S, z, {
              width: R.maxWidth,
              height: R.maxHeight
            }, {
              width: n,
              height: a
            });
            if (S = W.newWidth, z = W.newHeight, this.props.grid) {
              var j = w(S, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                M = w(z, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                k = this.props.snapGap || 0;
              S = 0 === k || Math.abs(j - S) <= k ? j : S, z = 0 === k || Math.abs(M - z) <= k ? M : z
            }
            var E = {
              width: S - c.width,
              height: z - c.height
            };
            if (this.delta = E, u && "string" == typeof u)
              if (u.endsWith("%")) {
                var N = S / g.width * 100;
                S = "".concat(N, "%")
              } else if (u.endsWith("vw")) {
              var O = S / this.window.innerWidth * 100;
              S = "".concat(O, "vw")
            } else if (u.endsWith("vh")) {
              var B = S / this.window.innerHeight * 100;
              S = "".concat(B, "vh")
            }
            f && "string" == typeof f && (f.endsWith("%") ? (N = z / g.height * 100, z = "".concat(N, "%")) : f.endsWith("vw") ? (O = z / this.window.innerWidth * 100, z = "".concat(O, "vw")) : f.endsWith("vh") && (B = z / this.window.innerHeight * 100, z = "".concat(B, "vh")));
            var H = {
              width: this.createSizeForCssProperty(S, "width"),
              height: this.createSizeForCssProperty(z, "height")
            };
            "row" === this.flexDir ? H.flexBasis = H.width : "column" === this.flexDir && (H.flexBasis = H.height);
            var _ = this.state.width !== H.width,
              L = this.state.height !== H.height,
              A = this.state.flexBasis !== H.flexBasis,
              C = _ || L || A;
            C && (0, r.flushSync)(function() {
              e.setState(H)
            }), this.props.onResize && C && this.props.onResize(t, l, this.resizable, E)
          }
        }, e.prototype.onMouseUp = function(t) {
          var e, i, s = this.state,
            o = s.isResizing,
            n = s.direction;
          s.original, o && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(t, n, this.resizable, this.delta), this.props.size && this.setState({
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
            n = e.handleClasses,
            r = e.handleWrapperStyle,
            a = e.handleWrapperClass,
            h = e.handleComponent;
          if (!i) return null;
          var p = Object.keys(i).map(function(e) {
            return !1 !== i[e] ? (0, o.jsx)(c, {
              direction: e,
              onResizeStart: t.onResizeStart,
              replaceStyles: s && s[e],
              className: n && n[e],
              children: h && h[e] ? h[e] : null
            }, e) : null
          });
          return (0, o.jsx)("div", {
            className: a,
            style: r,
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
        }
      }(n.PureComponent)
    },
    90287: t => {
      function e(t) {
        return t && t.constructor && "function" == typeof t.constructor.isBuffer && t.constructor.isBuffer(t)
      }

      function i(t) {
        return t
      }

      function s(t, s) {
        const o = (s = s || {}).delimiter || ".",
          n = s.maxDepth,
          r = s.transformKey || i,
          a = {};
        return function t(i, h, p) {
          p = p || 1, Object.keys(i).forEach(function(d) {
            const l = i[d],
              c = s.safe && Array.isArray(l),
              u = Object.prototype.toString.call(l),
              f = e(l),
              g = "[object Object]" === u || "[object Array]" === u,
              b = h ? h + o + r(d) : r(d);
            if (!c && !f && g && Object.keys(l).length && (!s.maxDepth || p < n)) return t(l, b, p + 1);
            a[b] = l
          })
        }(t), a
      }
      t.exports = s, s.flatten = s, s.unflatten = function t(o, n) {
        const r = (n = n || {}).delimiter || ".",
          a = n.overwrite || !1,
          h = n.transformKey || i,
          p = {};
        if (e(o) || "[object Object]" !== Object.prototype.toString.call(o)) return o;

        function d(t) {
          const e = Number(t);
          return isNaN(e) || -1 !== t.indexOf(".") || n.object ? t : e
        }
        return o = Object.keys(o).reduce(function(t, e) {
          const i = Object.prototype.toString.call(o[e]);
          return "[object Object]" !== i && "[object Array]" !== i || function(t) {
            const e = Object.prototype.toString.call(t),
              i = "[object Object]" === e;
            return !t || ("[object Array]" === e ? !t.length : i ? !Object.keys(t).length : void 0)
          }(o[e]) ? (t[e] = o[e], t) : function(t, e, i) {
            return Object.keys(i).reduce(function(e, s) {
              return e[t + r + s] = i[s], e
            }, e)
          }(e, t, s(o[e], n))
        }, {}), Object.keys(o).forEach(function(e) {
          const i = e.split(r).map(h);
          let s = d(i.shift()),
            l = d(i[0]),
            c = p;
          for (; void 0 !== l;) {
            if ("__proto__" === s) return;
            const t = Object.prototype.toString.call(c[s]),
              e = "[object Object]" === t || "[object Array]" === t;
            if (!a && !e && void 0 !== c[s]) return;
            (a && !e || !a && null == c[s]) && (c[s] = "number" != typeof l || n.object ? {} : []), c = c[s], i.length > 0 && (s = d(i.shift()), l = d(i[0]))
          }
          c[s] = t(o[e], n)
        }), p
      }
    }
  }
]);