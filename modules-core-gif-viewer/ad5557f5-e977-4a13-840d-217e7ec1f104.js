try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ad5557f5-e977-4a13-840d-217e7ec1f104", e._sentryDebugIdIdentifier = "sentry-dbid-ad5557f5-e977-4a13-840d-217e7ec1f104")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "1abf2adfc44dda687079577dcca1257a51fb3eb0",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "1abf2adfc44dda687079577dcca1257a51fb3eb0"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [954, 1113], {
    954: (e, t, i) => {
      "use strict";
      e.exports = i(2834)
    },
    1113: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, {
        Gif: () => V,
        HashSelector: () => A
      });
      const n = "rockstargames-modules-core-gif-viewera19bcd2b98d91e60c43b9de146e20f4e";
      var o = i(954);
      const s = e => {
          let {
            color: t
          } = e;
          return (0, o.jsxs)("div", {
            className: "rockstargames-modules-core-gif-viewere83fe07aa054242e9023d2f9e7a3fd25",
            style: {
              "--loader-color": t
            },
            children: [(0, o.jsx)("div", {
              className: n
            }), (0, o.jsx)("div", {
              className: n
            }), (0, o.jsx)("div", {
              className: n
            })]
          })
        },
        r = {
          randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
      let a;
      const l = new Uint8Array(16);

      function h() {
        if (!a && (a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !a)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return a(l)
      }
      const d = [];
      for (let e = 0; e < 256; ++e) d.push((e + 256).toString(16).slice(1));
      const p = function(e, t, i) {
        if (r.randomUUID && !t && !e) return r.randomUUID();
        const n = (e = e || {}).random || (e.rng || h)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
          i = i || 0;
          for (let e = 0; e < 16; ++e) t[i + e] = n[e];
          return t
        }
        return function(e, t = 0) {
          return d[e[t + 0]] + d[e[t + 1]] + d[e[t + 2]] + d[e[t + 3]] + "-" + d[e[t + 4]] + d[e[t + 5]] + "-" + d[e[t + 6]] + d[e[t + 7]] + "-" + d[e[t + 8]] + d[e[t + 9]] + "-" + d[e[t + 10]] + d[e[t + 11]] + d[e[t + 12]] + d[e[t + 13]] + d[e[t + 14]] + d[e[t + 15]]
        }(n)
      };
      var c = i(2229),
        u = i(5966);
      const f = (0, u.setContextItem)({
          context: (0, c.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: m
        } = f,
        v = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, o.jsx)("hr", {})
          }
        };
      v("Background Image Gradient"),
        function() {
          (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label").toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), v("Background Image Gradient"), i(2779);
      const g = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, o.jsx)("hr", {})
        }
      };
      var b, w = i(6019),
        y = function() {
          return y = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
              for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, y.apply(this, arguments)
        },
        k = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize"
        },
        z = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize"
        },
        x = {
          width: "20px",
          height: "20px",
          position: "absolute",
          zIndex: 1
        },
        S = {
          top: y(y({}, k), {
            top: "-5px"
          }),
          right: y(y({}, z), {
            left: void 0,
            right: "-5px"
          }),
          bottom: y(y({}, k), {
            top: void 0,
            bottom: "-5px"
          }),
          left: y(y({}, z), {
            left: "-5px"
          }),
          topRight: y(y({}, x), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: y(y({}, x), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: y(y({}, x), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: y(y({}, x), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        N = (0, c.memo)((function(e) {
          var t = e.onResizeStart,
            i = e.direction,
            n = e.children,
            s = e.replaceStyles,
            r = e.className,
            a = (0, c.useCallback)((function(e) {
              t(e, i)
            }), [t, i]),
            l = (0, c.useCallback)((function(e) {
              t(e, i)
            }), [t, i]),
            h = (0, c.useMemo)((function() {
              return y(y({
                position: "absolute",
                userSelect: "none"
              }, S[i]), null != s ? s : {})
            }), [s, i]);
          return (0, o.jsx)("div", {
            className: r || void 0,
            style: h,
            onMouseDown: a,
            onTouchStart: l,
            children: n
          })
        })),
        E = (b = function(e, t) {
          return b = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          }, b(e, t)
        }, function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

          function i() {
            this.constructor = e
          }
          b(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        }),
        R = function() {
          return R = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
              for (var o in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
            return e
          }, R.apply(this, arguments)
        },
        _ = {
          width: "auto",
          height: "auto"
        },
        L = function(e, t, i) {
          return Math.max(Math.min(e, i), t)
        },
        W = function(e, t, i) {
          var n = Math.round(e / t);
          return n * t + i * (n - 1)
        },
        O = function(e, t) {
          return new RegExp(e, "i").test(t)
        },
        D = function(e) {
          return Boolean(e.touches && e.touches.length)
        },
        j = function(e, t, i) {
          void 0 === i && (i = 0);
          var n = t.reduce((function(i, n, o) {
              return Math.abs(n - e) < Math.abs(t[i] - e) ? o : i
            }), 0),
            o = Math.abs(t[n] - e);
          return 0 === i || o < i ? t[n] : e
        },
        M = function(e) {
          return "auto" === (e = e.toString()) || e.endsWith("px") || e.endsWith("%") || e.endsWith("vh") || e.endsWith("vw") || e.endsWith("vmax") || e.endsWith("vmin") ? e : "".concat(e, "px")
        },
        B = function(e, t, i, n) {
          if (e && "string" == typeof e) {
            if (e.endsWith("px")) return Number(e.replace("px", ""));
            if (e.endsWith("%")) return t * (Number(e.replace("%", "")) / 100);
            if (e.endsWith("vw")) return i * (Number(e.replace("vw", "")) / 100);
            if (e.endsWith("vh")) return n * (Number(e.replace("vh", "")) / 100)
          }
          return e
        },
        T = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        C = "__resizable_base__",
        I = function(e) {
          function t(t) {
            var i, n, o, s, r = e.call(this, t) || this;
            return r.ratio = 1, r.resizable = null, r.parentLeft = 0, r.parentTop = 0, r.resizableLeft = 0, r.resizableRight = 0, r.resizableTop = 0, r.resizableBottom = 0, r.targetLeft = 0, r.targetTop = 0, r.delta = {
              width: 0,
              height: 0
            }, r.appendBase = function() {
              if (!r.resizable || !r.window) return null;
              var e = r.parentNode;
              if (!e) return null;
              var t = r.window.document.createElement("div");
              return t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.transform = "scale(0, 0)", t.style.left = "0", t.style.flex = "0 0 100%", t.classList ? t.classList.add(C) : t.className += C, e.appendChild(t), t
            }, r.removeBase = function(e) {
              var t = r.parentNode;
              t && t.removeChild(e)
            }, r.state = {
              isResizing: !1,
              width: null !== (n = null === (i = r.propsSize) || void 0 === i ? void 0 : i.width) && void 0 !== n ? n : "auto",
              height: null !== (s = null === (o = r.propsSize) || void 0 === o ? void 0 : o.height) && void 0 !== s ? s : "auto",
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
          return E(t, e), Object.defineProperty(t.prototype, "parentNode", {
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
              return this.props.size || this.props.defaultSize || _
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "size", {
            get: function() {
              var e = 0,
                t = 0;
              if (this.resizable && this.window) {
                var i = this.resizable.offsetWidth,
                  n = this.resizable.offsetHeight,
                  o = this.resizable.style.position;
                "relative" !== o && (this.resizable.style.position = "relative"), e = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i, t = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : n, this.resizable.style.position = o
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
                i = function(t) {
                  var i;
                  if (void 0 === e.state[t] || "auto" === e.state[t]) return "auto";
                  if (e.propsSize && e.propsSize[t] && (null === (i = e.propsSize[t]) || void 0 === i ? void 0 : i.toString().endsWith("%"))) {
                    if (e.state[t].toString().endsWith("%")) return e.state[t].toString();
                    var n = e.getParentSize(),
                      o = Number(e.state[t].toString().replace("px", "")) / n[t] * 100;
                    return "".concat(o, "%")
                  }
                  return M(e.state[t])
                };
              return {
                width: t && void 0 !== t.width && !this.state.isResizing ? M(t.width) : i("width"),
                height: t && void 0 !== t.height && !this.state.isResizing ? M(t.height) : i("height")
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
              i = this.parentNode.style.flexWrap;
            "wrap" !== i && (t = !0, this.parentNode.style.flexWrap = "wrap"), e.style.position = "relative", e.style.minWidth = "100%", e.style.minHeight = "100%";
            var n = {
              width: e.offsetWidth,
              height: e.offsetHeight
            };
            return t && (this.parentNode.style.flexWrap = i), this.removeBase(e), n
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
            var i = this.propsSize && this.propsSize[t];
            return "auto" !== this.state[t] || this.state.original[t] !== e || void 0 !== i && "auto" !== i ? e : "auto"
          }, t.prototype.calculateNewMaxFromBoundary = function(e, t) {
            var i, n, o = this.props.boundsByDirection,
              s = this.state.direction,
              r = o && O("left", s),
              a = o && O("top", s);
            if ("parent" === this.props.bounds) {
              var l = this.parentNode;
              l && (i = r ? this.resizableRight - this.parentLeft : l.offsetWidth + (this.parentLeft - this.resizableLeft), n = a ? this.resizableBottom - this.parentTop : l.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = r ? this.resizableRight : this.window.innerWidth - this.resizableLeft, n = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = r ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), n = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (e = e && e < i ? e : i), n && Number.isFinite(n) && (t = t && t < n ? t : n), {
              maxWidth: e,
              maxHeight: t
            }
          }, t.prototype.calculateNewSizeFromDirection = function(e, t) {
            var i, n = this.props.scale || 1,
              o = (i = this.props.resizeRatio || 1, Array.isArray(i) ? i : [i, i]),
              s = o[0],
              r = o[1],
              a = this.state,
              l = a.direction,
              h = a.original,
              d = this.props,
              p = d.lockAspectRatio,
              c = d.lockAspectRatioExtraHeight,
              u = d.lockAspectRatioExtraWidth,
              f = h.width,
              m = h.height,
              v = c || 0,
              g = u || 0;
            return O("right", l) && (f = h.width + (e - h.x) * s / n, p && (m = (f - g) / this.ratio + v)), O("left", l) && (f = h.width - (e - h.x) * s / n, p && (m = (f - g) / this.ratio + v)), O("bottom", l) && (m = h.height + (t - h.y) * r / n, p && (f = (m - v) * this.ratio + g)), O("top", l) && (m = h.height - (t - h.y) * r / n, p && (f = (m - v) * this.ratio + g)), {
              newWidth: f,
              newHeight: m
            }
          }, t.prototype.calculateNewSizeFromAspectRatio = function(e, t, i, n) {
            var o = this.props,
              s = o.lockAspectRatio,
              r = o.lockAspectRatioExtraHeight,
              a = o.lockAspectRatioExtraWidth,
              l = void 0 === n.width ? 10 : n.width,
              h = void 0 === i.width || i.width < 0 ? e : i.width,
              d = void 0 === n.height ? 10 : n.height,
              p = void 0 === i.height || i.height < 0 ? t : i.height,
              c = r || 0,
              u = a || 0;
            if (s) {
              var f = (d - c) * this.ratio + u,
                m = (p - c) * this.ratio + u,
                v = (l - u) / this.ratio + c,
                g = (h - u) / this.ratio + c,
                b = Math.max(l, f),
                w = Math.min(h, m),
                y = Math.max(d, v),
                k = Math.min(p, g);
              e = L(e, b, w), t = L(t, y, k)
            } else e = L(e, l, h), t = L(t, d, p);
            return {
              newWidth: e,
              newHeight: t
            }
          }, t.prototype.setBoundingClientRect = function() {
            var e = 1 / (this.props.scale || 1);
            if ("parent" === this.props.bounds) {
              var t = this.parentNode;
              if (t) {
                var i = t.getBoundingClientRect();
                this.parentLeft = i.left * e, this.parentTop = i.top * e
              }
            }
            if (this.props.bounds && "string" != typeof this.props.bounds) {
              var n = this.props.bounds.getBoundingClientRect();
              this.targetLeft = n.left * e, this.targetTop = n.top * e
            }
            if (this.resizable) {
              var o = this.resizable.getBoundingClientRect(),
                s = o.left,
                r = o.top,
                a = o.right,
                l = o.bottom;
              this.resizableLeft = s * e, this.resizableRight = a * e, this.resizableTop = r * e, this.resizableBottom = l * e
            }
          }, t.prototype.onResizeStart = function(e, t) {
            if (this.resizable && this.window) {
              var i, n = 0,
                o = 0;
              if (e.nativeEvent && function(e) {
                  return Boolean((e.clientX || 0 === e.clientX) && (e.clientY || 0 === e.clientY))
                }(e.nativeEvent) ? (n = e.nativeEvent.clientX, o = e.nativeEvent.clientY) : e.nativeEvent && D(e.nativeEvent) && (n = e.nativeEvent.touches[0].clientX, o = e.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(e, t, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var s = this.window.getComputedStyle(this.resizable);
              if ("auto" !== s.flexBasis) {
                var r = this.parentNode;
                if (r) {
                  var a = this.window.getComputedStyle(r).flexDirection;
                  this.flexDir = a.startsWith("row") ? "row" : "column", i = s.flexBasis
                }
              }
              this.setBoundingClientRect(), this.bindEvents();
              var l = {
                original: {
                  x: n,
                  y: o,
                  width: this.size.width,
                  height: this.size.height
                },
                isResizing: !0,
                backgroundStyle: R(R({}, this.state.backgroundStyle), {
                  cursor: this.window.getComputedStyle(e.target).cursor || "auto"
                }),
                direction: t,
                flexBasis: i
              };
              this.setState(l)
            }
          }, t.prototype.onMouseMove = function(e) {
            var t = this;
            if (this.state.isResizing && this.resizable && this.window) {
              if (this.window.TouchEvent && D(e)) try {
                e.preventDefault(), e.stopPropagation()
              } catch (e) {}
              var i = this.props,
                n = i.maxWidth,
                o = i.maxHeight,
                s = i.minWidth,
                r = i.minHeight,
                a = D(e) ? e.touches[0].clientX : e.clientX,
                l = D(e) ? e.touches[0].clientY : e.clientY,
                h = this.state,
                d = h.direction,
                p = h.original,
                c = h.width,
                u = h.height,
                f = this.getParentSize(),
                m = function(e, t, i, n, o, s, r) {
                  return n = B(n, e.width, t, i), o = B(o, e.height, t, i), s = B(s, e.width, t, i), r = B(r, e.height, t, i), {
                    maxWidth: void 0 === n ? void 0 : Number(n),
                    maxHeight: void 0 === o ? void 0 : Number(o),
                    minWidth: void 0 === s ? void 0 : Number(s),
                    minHeight: void 0 === r ? void 0 : Number(r)
                  }
                }(f, this.window.innerWidth, this.window.innerHeight, n, o, s, r);
              n = m.maxWidth, o = m.maxHeight, s = m.minWidth, r = m.minHeight;
              var v = this.calculateNewSizeFromDirection(a, l),
                g = v.newHeight,
                b = v.newWidth,
                y = this.calculateNewMaxFromBoundary(n, o);
              this.props.snap && this.props.snap.x && (b = j(b, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (g = j(g, this.props.snap.y, this.props.snapGap));
              var k = this.calculateNewSizeFromAspectRatio(b, g, {
                width: y.maxWidth,
                height: y.maxHeight
              }, {
                width: s,
                height: r
              });
              if (b = k.newWidth, g = k.newHeight, this.props.grid) {
                var z = W(b, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  x = W(g, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  S = this.props.snapGap || 0;
                b = 0 === S || Math.abs(z - b) <= S ? z : b, g = 0 === S || Math.abs(x - g) <= S ? x : g
              }
              var N = {
                width: b - p.width,
                height: g - p.height
              };
              if (this.delta = N, c && "string" == typeof c)
                if (c.endsWith("%")) {
                  var E = b / f.width * 100;
                  b = "".concat(E, "%")
                } else if (c.endsWith("vw")) {
                var R = b / this.window.innerWidth * 100;
                b = "".concat(R, "vw")
              } else if (c.endsWith("vh")) {
                var _ = b / this.window.innerHeight * 100;
                b = "".concat(_, "vh")
              }
              u && "string" == typeof u && (u.endsWith("%") ? (E = g / f.height * 100, g = "".concat(E, "%")) : u.endsWith("vw") ? (R = g / this.window.innerWidth * 100, g = "".concat(R, "vw")) : u.endsWith("vh") && (_ = g / this.window.innerHeight * 100, g = "".concat(_, "vh")));
              var L = {
                width: this.createSizeForCssProperty(b, "width"),
                height: this.createSizeForCssProperty(g, "height")
              };
              "row" === this.flexDir ? L.flexBasis = L.width : "column" === this.flexDir && (L.flexBasis = L.height);
              var O = this.state.width !== L.width,
                M = this.state.height !== L.height,
                T = this.state.flexBasis !== L.flexBasis,
                C = O || M || T;
              C && (0, w.flushSync)((function() {
                t.setState(L)
              })), this.props.onResize && C && this.props.onResize(e, d, this.resizable, N)
            }
          }, t.prototype.onMouseUp = function(e) {
            var t, i, n = this.state,
              o = n.isResizing,
              s = n.direction;
            n.original, o && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(e, s, this.resizable, this.delta), this.props.size && this.setState({
              width: null !== (t = this.props.size.width) && void 0 !== t ? t : "auto",
              height: null !== (i = this.props.size.height) && void 0 !== i ? i : "auto"
            }), this.unbindEvents(), this.setState({
              isResizing: !1,
              backgroundStyle: R(R({}, this.state.backgroundStyle), {
                cursor: "auto"
              })
            }))
          }, t.prototype.updateSize = function(e) {
            var t, i;
            this.setState({
              width: null !== (t = e.width) && void 0 !== t ? t : "auto",
              height: null !== (i = e.height) && void 0 !== i ? i : "auto"
            })
          }, t.prototype.renderResizer = function() {
            var e = this,
              t = this.props,
              i = t.enable,
              n = t.handleStyles,
              s = t.handleClasses,
              r = t.handleWrapperStyle,
              a = t.handleWrapperClass,
              l = t.handleComponent;
            if (!i) return null;
            var h = Object.keys(i).map((function(t) {
              return !1 !== i[t] ? (0, o.jsx)(N, {
                direction: t,
                onResizeStart: e.onResizeStart,
                replaceStyles: n && n[t],
                className: s && s[t],
                children: l && l[t] ? l[t] : null
              }, t) : null
            }));
            return (0, o.jsx)("div", {
              className: a,
              style: r,
              children: h
            })
          }, t.prototype.render = function() {
            var e = this,
              t = Object.keys(this.props).reduce((function(t, i) {
                return -1 !== T.indexOf(i) || (t[i] = e.props[i]), t
              }), {}),
              i = R(R(R({
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
            var n = this.props.as || "div";
            return (0, o.jsxs)(n, R({
              style: i,
              className: this.props.className
            }, t, {
              ref: function(t) {
                t && (e.resizable = t)
              },
              children: [this.state.isResizing && (0, o.jsx)("div", {
                style: this.state.backgroundStyle
              }), this.props.children, this.renderResizer()]
            }))
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
            gridGap: [0, 0],
            lockAspectRatio: !1,
            lockAspectRatioExtraWidth: 0,
            lockAspectRatioExtraHeight: 0,
            scale: 1,
            resizeRatio: 1,
            snapGap: 0
          }, t
        }(c.PureComponent);
      const U = e => {
          let {
            style: t,
            width: i,
            height: n,
            resizable: s,
            field: r,
            input: a,
            meta: l,
            name: h,
            label: d,
            description: p,
            error: u,
            children: f
          } = e;
          const m = () => s ? (0, o.jsx)(I, {
            defaultSize: {
              width: i || "100%",
              height: n || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, c.cloneElement)(f, ...a)
          }) : f;
          return (0, o.jsxs)("div", {
            className: "rockstargames-modules-core-gif-viewere8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
            style: t,
            children: [(0, o.jsxs)("label", {
              className: "rockstargames-modules-core-gif-viewerceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
              htmlFor: h ?? r?.name,
              children: [d ?? r?.label, (0, o.jsx)("span", {
                className: "rockstargames-modules-core-gif-viewera0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
                children: p ?? r?.description
              })]
            }), (0, o.jsx)(m, {}), (u || l?.error) && (0, o.jsx)("div", {
              className: "FieldError_sc_custom",
              children: u ?? l?.error
            })]
          })
        },
        H = (g("Background Image Gradient"), function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          e.toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), g("Background Image Gradient"), () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => F({
            hero: !1
          })
        }));
      i(1398);
      const F = function() {
        return {
          ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          key: `key_${p()}`
        }
      };
      var G = i(4235);
      const P = e => {
          let {
            field: t,
            input: i,
            meta: n
          } = e;
          const {
            data: r
          } = (0, u.useQuery)(G.GifsList);
          return (0, o.jsx)(U, {
            name: i.name || t.name || t.label,
            label: t.label,
            description: t.description,
            meta: n,
            children: r?.gifsList?.length ? (0, o.jsxs)("select", {
              ...i,
              children: [(0, o.jsx)("option", {
                value: "",
                children: "-- Select a gif --"
              }), r.gifsList.map((e => (0, o.jsxs)("option", {
                value: e.hash,
                children: ["(", e.hash, ")", " ", e.name]
              }, e.hash)))]
            }) : (0, o.jsx)(s, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        A = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: e?.label ?? "Gif hash",
            name: e?.group ?? "hash",
            description: e?.description ?? "",
            component: e => {
              let {
                field: t,
                input: i,
                meta: n
              } = e;
              return (0, o.jsx)(P, {
                field: t,
                input: i,
                meta: n
              })
            }
          }
        },
        V = function() {
          return {
            name: (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              group: "hash"
            }).group,
            label: "Gif",
            fields: [{
              label: "Name",
              name: "name",
              component: "text",
              description: "Block label for internal use only"
            }, A({
              group: "hash.mobile",
              label: "Mobile Source",
              description: "(If responsive, only Mobile Source is needed)"
            }), A({
              group: "hash.desktop",
              label: "Desktop Source"
            }), (e = {
              name: "caption",
              label: "Caption",
              component: "html"
            }, {
              ...e,
              name: `_memoq.${e.name}`
            }), {
              name: "loop",
              label: "Is Looping?",
              description: "Should this gif repeat endlessly?",
              component: "toggle"
            }, H()],
            defaultItem: () => F({
              loop: !1
            }),
            itemProps: e => function(e) {
              return {
                ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                key: e.key
              }
            }(e, {
              label: e?.name ? `${e.name} [Gif]` : "New [Gif]"
            })
          };
          var e
        }
    },
    1398: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "TagList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "context"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Int"
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "tagList"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "context"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "context"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "id"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 131
        }
      };

      function i(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && t.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, t)
        }))
      }
      t.loc.source = {
        body: "query TagList($locale: String!, $context: Int) {\n    tagList(locale: $locale, context: $context) {\n        name\n        id\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function o(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          i(e, t), n[e.name.value] = t
        }
      })), e.exports = t, e.exports.TagList = function(e, t) {
        var i = {
          kind: e.kind,
          definitions: [o(e, t)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[t] || new Set,
          r = new Set,
          a = new Set;
        for (s.forEach((function(e) {
            a.add(e)
          })); a.size > 0;) {
          var l = a;
          a = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              a.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var n = o(e, t);
          n && i.definitions.push(n)
        })), i
      }(t, "TagList")
    },
    2779: (e, t, i) => {
      "use strict";
      i.d(t, {
        A: () => o
      });
      const n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        o = () => {
          let e;
          const {
            location: t
          } = window, i = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = n.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [n, o] = t;
            return o === i && (e = {
              site: n,
              subDomain: o
            }, !0)
          })) >= 0)), s = n[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    },
    2834: (e, t, i) => {
      "use strict";
      var n = i(2229),
        o = Symbol.for("react.element"),
        s = (Symbol.for("react.fragment"), Object.prototype.hasOwnProperty),
        r = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        a = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, i) {
        var n, l = {},
          h = null,
          d = null;
        for (n in void 0 !== i && (h = "" + i), void 0 !== t.key && (h = "" + t.key), void 0 !== t.ref && (d = t.ref), t) s.call(t, n) && !a.hasOwnProperty(n) && (l[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === l[n] && (l[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: h,
          ref: d,
          props: l,
          _owner: r.current
        }
      }
      t.jsx = l, t.jsxs = l
    },
    3019: (e, t, i) => {
      var n = {
        "./de": [7625, 6879],
        "./en": [2609, 2243],
        "./es": [1270, 278],
        "./fr": [5598, 9022],
        "./it": [8355, 2365],
        "./ja": [1647, 9377],
        "./ko": [2800, 9028],
        "./pl": [438, 1242],
        "./pt": [5534, 7970],
        "./ru": [3779, 7453],
        "./zh": [8336, 8880]
      };

      function o(e) {
        if (!i.o(n, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = n[e],
          o = t[0];
        return i.e(t[1]).then((() => i.t(o, 23)))
      }
      o.keys = () => Object.keys(n), o.id = 3019, e.exports = o
    },
    3514: (e, t, i) => {
      var n = {
        "./de": [7148, 4710],
        "./en": [8052, 3486],
        "./es": [1719, 4011],
        "./fr": [5803, 4851],
        "./it": [8842, 9936],
        "./ja": [2090, 2156],
        "./ko": [5529, 3885],
        "./pl": [3031, 6891],
        "./pt": [1039, 3475],
        "./ru": [2542, 4528],
        "./zh": [2049, 4861]
      };

      function o(e) {
        if (!i.o(n, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = n[e],
          o = t[0];
        return i.e(t[1]).then((() => i.t(o, 23)))
      }
      o.keys = () => Object.keys(n), o.id = 3514, e.exports = o
    },
    4235: e => {
      var t = {
        kind: "Document",
        definitions: [{
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifsList"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "cache"
              }
            },
            type: {
              kind: "NamedType",
              name: {
                kind: "Name",
                value: "Boolean"
              }
            },
            defaultValue: {
              kind: "BooleanValue",
              value: !0
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "gifsList"
              },
              arguments: [],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "hash"
                  },
                  arguments: [],
                  directives: []
                }, {
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "name"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }, {
          kind: "OperationDefinition",
          operation: "query",
          name: {
            kind: "Name",
            value: "GifInfo"
          },
          variableDefinitions: [{
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "locale"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }, {
            kind: "VariableDefinition",
            variable: {
              kind: "Variable",
              name: {
                kind: "Name",
                value: "hash"
              }
            },
            type: {
              kind: "NonNullType",
              type: {
                kind: "NamedType",
                name: {
                  kind: "Name",
                  value: "String"
                }
              }
            },
            directives: []
          }],
          directives: [],
          selectionSet: {
            kind: "SelectionSet",
            selections: [{
              kind: "Field",
              name: {
                kind: "Name",
                value: "gifInfo"
              },
              arguments: [{
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "locale"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "locale"
                  }
                }
              }, {
                kind: "Argument",
                name: {
                  kind: "Name",
                  value: "hash"
                },
                value: {
                  kind: "Variable",
                  name: {
                    kind: "Name",
                    value: "hash"
                  }
                }
              }],
              directives: [],
              selectionSet: {
                kind: "SelectionSet",
                selections: [{
                  kind: "Field",
                  name: {
                    kind: "Name",
                    value: "file"
                  },
                  arguments: [],
                  directives: []
                }]
              }
            }]
          }
        }],
        loc: {
          start: 0,
          end: 206
        }
      };

      function i(e, t) {
        if ("FragmentSpread" === e.kind) t.add(e.name.value);
        else if ("VariableDefinition" === e.kind) {
          var n = e.type;
          "NamedType" === n.kind && t.add(n.name.value)
        }
        e.selectionSet && e.selectionSet.selections.forEach((function(e) {
          i(e, t)
        })), e.variableDefinitions && e.variableDefinitions.forEach((function(e) {
          i(e, t)
        })), e.definitions && e.definitions.forEach((function(e) {
          i(e, t)
        }))
      }
      t.loc.source = {
        body: "query GifsList($cache: Boolean = true) {\n    gifsList {\n        hash\n        name\n    }\n}\n\nquery GifInfo($locale: String!, $hash: String!) {\n    gifInfo(locale: $locale, hash: $hash) {\n        file\n    }\n}\n",
        name: "GraphQL request",
        locationOffset: {
          line: 1,
          column: 1
        }
      };
      var n = {};

      function o(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var n = e.definitions[i];
          if (n.name && n.name.value == t) return n
        }
      }

      function s(e, t) {
        var i = {
          kind: e.kind,
          definitions: [o(e, t)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = n[t] || new Set,
          r = new Set,
          a = new Set;
        for (s.forEach((function(e) {
            a.add(e)
          })); a.size > 0;) {
          var l = a;
          a = new Set, l.forEach((function(e) {
            r.has(e) || (r.add(e), (n[e] || new Set).forEach((function(e) {
              a.add(e)
            })))
          }))
        }
        return r.forEach((function(t) {
          var n = o(e, t);
          n && i.definitions.push(n)
        })), i
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          i(e, t), n[e.name.value] = t
        }
      })), e.exports = t, e.exports.GifsList = s(t, "GifsList"), e.exports.GifInfo = s(t, "GifInfo")
    },
    4375: (e, t, i) => {
      var n = {
        "./de": [8883, 5639],
        "./en": [3420, 6267],
        "./es": [9116, 5742],
        "./fr": [4632, 2678],
        "./it": [2685, 6997],
        "./ja": [9437, 6361],
        "./ko": [5130, 7452],
        "./pl": [6096, 2642],
        "./pt": [9464, 3034],
        "./ru": [8825, 3941],
        "./zh": [7030, 5832]
      };

      function o(e) {
        if (!i.o(n, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = n[e],
          o = t[0];
        return i.e(t[1]).then((() => i.t(o, 23)))
      }
      o.keys = () => Object.keys(n), o.id = 4375, e.exports = o
    },
    4819: (e, t, i) => {
      var n = {
        "./de": [821, 5259],
        "./en": [5021, 4799],
        "./es": [8042, 3370],
        "./fr": [4850, 7010],
        "./it": [4215, 4913],
        "./ja": [2379, 6285],
        "./ko": [6372, 6664],
        "./pl": [3194, 1054],
        "./pt": [6514, 662],
        "./ru": [3796, 5233],
        "./zh": [7900, 4700]
      };

      function o(e) {
        if (!i.o(n, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = n[e],
          o = t[0];
        return i.e(t[1]).then((() => i.t(o, 23)))
      }
      o.keys = () => Object.keys(n), o.id = 4819, e.exports = o
    },
    5267: (e, t, i) => {
      var n = {
        "./de": [2265, 299],
        "./en": [5649, 5663],
        "./es": [534, 5530],
        "./fr": [2414, 2466],
        "./it": [4083, 7073],
        "./ja": [4271, 4621],
        "./ko": [5648, 824],
        "./pl": [5270, 2398],
        "./pt": [4984, 9126],
        "./ru": [5475, 3697],
        "./zh": [400, 1868]
      };

      function o(e) {
        if (!i.o(n, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = n[e],
          o = t[0];
        return i.e(t[1]).then((() => i.t(o, 23)))
      }
      o.keys = () => Object.keys(n), o.id = 5267, e.exports = o
    },
    8525: (e, t, i) => {
      var n = {
        "./de": [2016, 9990],
        "./en": [3944, 1822],
        "./es": [1395, 2347],
        "./fr": [9767, 131],
        "./it": [5126, 8272],
        "./ja": [1134, 7436],
        "./ko": [8789, 2221],
        "./pl": [7635, 2171],
        "./pt": [155, 8755],
        "./ru": [6570, 2864],
        "./zh": [5333, 3197]
      };

      function o(e) {
        if (!i.o(n, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = n[e],
          o = t[0];
        return i.e(t[1]).then((() => i.t(o, 23)))
      }
      o.keys = () => Object.keys(n), o.id = 8525, e.exports = o
    }
  }
]);