try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "60ec7d73-fea3-43a5-93d1-eb75c662fa9f", t._sentryDebugIdIdentifier = "sentry-dbid-60ec7d73-fea3-43a5-93d1-eb75c662fa9f")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "7e6a862245c0f03cf7f976b07fd639dca846e391",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "7e6a862245c0f03cf7f976b07fd639dca846e391"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5117], {
    11206: (t, e, i) => {
      i.d(e, {
        A: () => a
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
      const h = [];
      for (let t = 0; t < 256; ++t) h.push((t + 256).toString(16).slice(1));
      const a = function(t, e, i) {
        if (s.randomUUID && !e && !t) return s.randomUUID();
        const o = (t = t || {}).random || (t.rng || r)();
        if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, e) {
          i = i || 0;
          for (let t = 0; t < 16; ++t) e[i + t] = o[t];
          return e
        }
        return function(t, e = 0) {
          return h[t[e + 0]] + h[t[e + 1]] + h[t[e + 2]] + h[t[e + 3]] + "-" + h[t[e + 4]] + h[t[e + 5]] + "-" + h[t[e + 6]] + h[t[e + 7]] + "-" + h[t[e + 8]] + h[t[e + 9]] + "-" + h[t[e + 10]] + h[t[e + 11]] + h[t[e + 12]] + h[t[e + 13]] + h[t[e + 14]] + h[t[e + 15]]
        }(o)
      }
    },
    21442: (t, e, i) => {
      i.d(e, {
        c: () => W
      });
      var s, o = i(42295),
        n = i(62229),
        r = i(44853),
        h = function() {
          return h = Object.assign || function(t) {
            for (var e, i = 1, s = arguments.length; i < s; i++)
              for (var o in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, o) && (t[o] = e[o]);
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
          position: "absolute",
          zIndex: 1
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
        u = (0, n.memo)((function(t) {
          var e = t.onResizeStart,
            i = t.direction,
            s = t.children,
            r = t.replaceStyles,
            a = t.className,
            p = (0, n.useCallback)((function(t) {
              e(t, i)
            }), [e, i]),
            d = (0, n.useCallback)((function(t) {
              e(t, i)
            }), [e, i]),
            u = (0, n.useMemo)((function() {
              return h(h({
                position: "absolute",
                userSelect: "none"
              }, l[i]), null != r ? r : {})
            }), [r, i]);
          return (0, o.jsx)("div", {
            className: a || void 0,
            style: u,
            onMouseDown: p,
            onTouchStart: d,
            children: s
          })
        })),
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
        m = function(t) {
          return Boolean(t.touches && t.touches.length)
        },
        y = function(t, e, i) {
          void 0 === i && (i = 0);
          var s = e.reduce((function(i, s, o) {
              return Math.abs(s - t) < Math.abs(e[i] - t) ? o : i
            }), 0),
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
              n = this.state.direction,
              r = o && b("left", n),
              h = o && b("top", n);
            if ("parent" === this.props.bounds) {
              var a = this.parentNode;
              a && (i = r ? this.resizableRight - this.parentLeft : a.offsetWidth + (this.parentLeft - this.resizableLeft), s = h ? this.resizableBottom - this.parentTop : a.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = r ? this.resizableRight : this.window.innerWidth - this.resizableLeft, s = h ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = r ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), s = h ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (t = t && t < i ? t : i), s && Number.isFinite(s) && (e = e && e < s ? e : s), {
              maxWidth: t,
              maxHeight: e
            }
          }, e.prototype.calculateNewSizeFromDirection = function(t, e) {
            var i, s = this.props.scale || 1,
              o = (i = this.props.resizeRatio || 1, Array.isArray(i) ? i : [i, i]),
              n = o[0],
              r = o[1],
              h = this.state,
              a = h.direction,
              p = h.original,
              d = this.props,
              l = d.lockAspectRatio,
              u = d.lockAspectRatioExtraHeight,
              c = d.lockAspectRatioExtraWidth,
              f = p.width,
              g = p.height,
              w = u || 0,
              v = c || 0;
            return b("right", a) && (f = p.width + (t - p.x) * n / s, l && (g = (f - v) / this.ratio + w)), b("left", a) && (f = p.width - (t - p.x) * n / s, l && (g = (f - v) / this.ratio + w)), b("bottom", a) && (g = p.height + (e - p.y) * r / s, l && (f = (g - w) * this.ratio + v)), b("top", a) && (g = p.height - (e - p.y) * r / s, l && (f = (g - w) * this.ratio + v)), {
              newWidth: f,
              newHeight: g
            }
          }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, s) {
            var o = this.props,
              n = o.lockAspectRatio,
              r = o.lockAspectRatioExtraHeight,
              h = o.lockAspectRatioExtraWidth,
              a = void 0 === s.width ? 10 : s.width,
              p = void 0 === i.width || i.width < 0 ? t : i.width,
              d = void 0 === s.height ? 10 : s.height,
              l = void 0 === i.height || i.height < 0 ? e : i.height,
              u = r || 0,
              c = h || 0;
            if (n) {
              var f = (d - u) * this.ratio + c,
                g = (l - u) * this.ratio + c,
                v = (a - c) / this.ratio + u,
                b = (p - c) / this.ratio + u,
                m = Math.max(a, f),
                y = Math.min(p, g),
                z = Math.max(d, v),
                x = Math.min(l, b);
              t = w(t, m, y), e = w(e, z, x)
            } else t = w(t, a, p), e = w(e, d, l);
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
                h = o.right,
                a = o.bottom;
              this.resizableLeft = n * t, this.resizableRight = h * t, this.resizableTop = r * t, this.resizableBottom = a * t
            }
          }, e.prototype.onResizeStart = function(t, e) {
            if (this.resizable && this.window) {
              var i, s = 0,
                o = 0;
              if (t.nativeEvent && function(t) {
                  return Boolean((t.clientX || 0 === t.clientX) && (t.clientY || 0 === t.clientY))
                }(t.nativeEvent) ? (s = t.nativeEvent.clientX, o = t.nativeEvent.clientY) : t.nativeEvent && m(t.nativeEvent) && (s = t.nativeEvent.touches[0].clientX, o = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(t, e, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var n = this.window.getComputedStyle(this.resizable);
              if ("auto" !== n.flexBasis) {
                var r = this.parentNode;
                if (r) {
                  var h = this.window.getComputedStyle(r).flexDirection;
                  this.flexDir = h.startsWith("row") ? "row" : "column", i = n.flexBasis
                }
              }
              this.setBoundingClientRect(), this.bindEvents();
              var a = {
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
              this.setState(a)
            }
          }, e.prototype.onMouseMove = function(t) {
            var e = this;
            if (this.state.isResizing && this.resizable && this.window) {
              if (this.window.TouchEvent && m(t)) try {
                t.preventDefault(), t.stopPropagation()
              } catch (t) {}
              var i = this.props,
                s = i.maxWidth,
                o = i.maxHeight,
                n = i.minWidth,
                h = i.minHeight,
                a = m(t) ? t.touches[0].clientX : t.clientX,
                p = m(t) ? t.touches[0].clientY : t.clientY,
                d = this.state,
                l = d.direction,
                u = d.original,
                c = d.width,
                f = d.height,
                g = this.getParentSize(),
                w = function(t, e, i, s, o, n, r) {
                  return s = x(s, t.width, e, i), o = x(o, t.height, e, i), n = x(n, t.width, e, i), r = x(r, t.height, e, i), {
                    maxWidth: void 0 === s ? void 0 : Number(s),
                    maxHeight: void 0 === o ? void 0 : Number(o),
                    minWidth: void 0 === n ? void 0 : Number(n),
                    minHeight: void 0 === r ? void 0 : Number(r)
                  }
                }(g, this.window.innerWidth, this.window.innerHeight, s, o, n, h);
              s = w.maxWidth, o = w.maxHeight, n = w.minWidth, h = w.minHeight;
              var b = this.calculateNewSizeFromDirection(a, p),
                z = b.newHeight,
                S = b.newWidth,
                R = this.calculateNewMaxFromBoundary(s, o);
              this.props.snap && this.props.snap.x && (S = y(S, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (z = y(z, this.props.snap.y, this.props.snapGap));
              var W = this.calculateNewSizeFromAspectRatio(S, z, {
                width: R.maxWidth,
                height: R.maxHeight
              }, {
                width: n,
                height: h
              });
              if (S = W.newWidth, z = W.newHeight, this.props.grid) {
                var M = v(S, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  E = v(z, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  N = this.props.snapGap || 0;
                S = 0 === N || Math.abs(M - S) <= N ? M : S, z = 0 === N || Math.abs(E - z) <= N ? E : z
              }
              var k = {
                width: S - u.width,
                height: z - u.height
              };
              if (this.delta = k, c && "string" == typeof c)
                if (c.endsWith("%")) {
                  var B = S / g.width * 100;
                  S = "".concat(B, "%")
                } else if (c.endsWith("vw")) {
                var H = S / this.window.innerWidth * 100;
                S = "".concat(H, "vw")
              } else if (c.endsWith("vh")) {
                var _ = S / this.window.innerHeight * 100;
                S = "".concat(_, "vh")
              }
              f && "string" == typeof f && (f.endsWith("%") ? (B = z / g.height * 100, z = "".concat(B, "%")) : f.endsWith("vw") ? (H = z / this.window.innerWidth * 100, z = "".concat(H, "vw")) : f.endsWith("vh") && (_ = z / this.window.innerHeight * 100, z = "".concat(_, "vh")));
              var L = {
                width: this.createSizeForCssProperty(S, "width"),
                height: this.createSizeForCssProperty(z, "height")
              };
              "row" === this.flexDir ? L.flexBasis = L.width : "column" === this.flexDir && (L.flexBasis = L.height);
              var C = this.state.width !== L.width,
                T = this.state.height !== L.height,
                A = this.state.flexBasis !== L.flexBasis,
                D = C || T || A;
              D && (0, r.flushSync)((function() {
                e.setState(L)
              })), this.props.onResize && D && this.props.onResize(t, l, this.resizable, k)
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
              h = e.handleWrapperClass,
              a = e.handleComponent;
            if (!i) return null;
            var p = Object.keys(i).map((function(e) {
              return !1 !== i[e] ? (0, o.jsx)(u, {
                direction: e,
                onResizeStart: t.onResizeStart,
                replaceStyles: s && s[e],
                className: n && n[e],
                children: a && a[e] ? a[e] : null
              }, e) : null
            }));
            return (0, o.jsx)("div", {
              className: h,
              style: r,
              children: p
            })
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
        }(n.PureComponent)
    }
  }
]);