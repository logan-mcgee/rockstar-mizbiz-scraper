try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ccbf6327-67d0-4fbd-9bba-9c869d96d199", e._sentryDebugIdIdentifier = "sentry-dbid-ccbf6327-67d0-4fbd-9bba-9c869d96d199")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-gif-viewer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [792, 2295], {
    792: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, {
        Gif: () => V,
        HashSelector: () => A
      });
      var n = i(2295);
      const o = "rockstargames-modules-core-gif-viewera19bcd2b98d91e60c43b9de146e20f4e",
        s = ({
          color: e
        }) => (0, n.jsxs)("div", {
          className: "rockstargames-modules-core-gif-viewere83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": e
          },
          children: [(0, n.jsx)("div", {
            className: o
          }), (0, n.jsx)("div", {
            className: o
          }), (0, n.jsx)("div", {
            className: o
          })]
        }),
        r = {
          randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
        };
      let a;
      const l = new Uint8Array(16);

      function d() {
        if (!a && (a = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !a)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
        return a(l)
      }
      const h = [];
      for (let e = 0; e < 256; ++e) h.push((e + 256).toString(16).slice(1));
      const p = function(e, t, i) {
        if (r.randomUUID && !t && !e) return r.randomUUID();
        const n = (e = e || {}).random || (e.rng || d)();
        if (n[6] = 15 & n[6] | 64, n[8] = 63 & n[8] | 128, t) {
          i = i || 0;
          for (let e = 0; e < 16; ++e) t[i + e] = n[e];
          return t
        }
        return function(e, t = 0) {
          return h[e[t + 0]] + h[e[t + 1]] + h[e[t + 2]] + h[e[t + 3]] + "-" + h[e[t + 4]] + h[e[t + 5]] + "-" + h[e[t + 6]] + h[e[t + 7]] + "-" + h[e[t + 8]] + h[e[t + 9]] + "-" + h[e[t + 10]] + h[e[t + 11]] + h[e[t + 12]] + h[e[t + 13]] + h[e[t + 14]] + h[e[t + 15]]
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
        v = (e = "") => ({
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, n.jsx)("hr", {})
        });
      v("Background Image Gradient"), ((e = "Label") => {
        e.toLowerCase().split(" ").join("_")
      })("Background Image Gradient"), v("Background Image Gradient"), i(8613);
      const b = (e = "") => ({
        label: `${e} Line`,
        name: `${e}_line`,
        component: () => (0, n.jsx)("hr", {})
      });
      var g, w = i(1098),
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
            o = e.children,
            s = e.replaceStyles,
            r = e.className,
            a = (0, c.useCallback)((function(e) {
              t(e, i)
            }), [t, i]),
            l = (0, c.useCallback)((function(e) {
              t(e, i)
            }), [t, i]),
            d = (0, c.useMemo)((function() {
              return y(y({
                position: "absolute",
                userSelect: "none"
              }, S[i]), null != s ? s : {})
            }), [s, i]);
          return (0, n.jsx)("div", {
            className: r || void 0,
            style: d,
            onMouseDown: a,
            onTouchStart: l,
            children: o
          })
        })),
        E = (g = function(e, t) {
          return g = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          }, g(e, t)
        }, function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

          function i() {
            this.constructor = e
          }
          g(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
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
        j = function(e, t) {
          return new RegExp(e, "i").test(t)
        },
        O = function(e) {
          return Boolean(e.touches && e.touches.length)
        },
        D = function(e, t, i) {
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
        C = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        T = "__resizable_base__",
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
              return t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.transform = "scale(0, 0)", t.style.left = "0", t.style.flex = "0 0 100%", t.classList ? t.classList.add(T) : t.className += T, e.appendChild(t), t
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
              r = o && j("left", s),
              a = o && j("top", s);
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
              d = a.original,
              h = this.props,
              p = h.lockAspectRatio,
              c = h.lockAspectRatioExtraHeight,
              u = h.lockAspectRatioExtraWidth,
              f = d.width,
              m = d.height,
              v = c || 0,
              b = u || 0;
            return j("right", l) && (f = d.width + (e - d.x) * s / n, p && (m = (f - b) / this.ratio + v)), j("left", l) && (f = d.width - (e - d.x) * s / n, p && (m = (f - b) / this.ratio + v)), j("bottom", l) && (m = d.height + (t - d.y) * r / n, p && (f = (m - v) * this.ratio + b)), j("top", l) && (m = d.height - (t - d.y) * r / n, p && (f = (m - v) * this.ratio + b)), {
              newWidth: f,
              newHeight: m
            }
          }, t.prototype.calculateNewSizeFromAspectRatio = function(e, t, i, n) {
            var o = this.props,
              s = o.lockAspectRatio,
              r = o.lockAspectRatioExtraHeight,
              a = o.lockAspectRatioExtraWidth,
              l = void 0 === n.width ? 10 : n.width,
              d = void 0 === i.width || i.width < 0 ? e : i.width,
              h = void 0 === n.height ? 10 : n.height,
              p = void 0 === i.height || i.height < 0 ? t : i.height,
              c = r || 0,
              u = a || 0;
            if (s) {
              var f = (h - c) * this.ratio + u,
                m = (p - c) * this.ratio + u,
                v = (l - u) / this.ratio + c,
                b = (d - u) / this.ratio + c,
                g = Math.max(l, f),
                w = Math.min(d, m),
                y = Math.max(h, v),
                k = Math.min(p, b);
              e = L(e, g, w), t = L(t, y, k)
            } else e = L(e, l, d), t = L(t, h, p);
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
                }(e.nativeEvent) ? (n = e.nativeEvent.clientX, o = e.nativeEvent.clientY) : e.nativeEvent && O(e.nativeEvent) && (n = e.nativeEvent.touches[0].clientX, o = e.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(e, t, this.resizable)) return;
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
              if (this.window.TouchEvent && O(e)) try {
                e.preventDefault(), e.stopPropagation()
              } catch (e) {}
              var i = this.props,
                n = i.maxWidth,
                o = i.maxHeight,
                s = i.minWidth,
                r = i.minHeight,
                a = O(e) ? e.touches[0].clientX : e.clientX,
                l = O(e) ? e.touches[0].clientY : e.clientY,
                d = this.state,
                h = d.direction,
                p = d.original,
                c = d.width,
                u = d.height,
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
                b = v.newHeight,
                g = v.newWidth,
                y = this.calculateNewMaxFromBoundary(n, o);
              this.props.snap && this.props.snap.x && (g = D(g, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (b = D(b, this.props.snap.y, this.props.snapGap));
              var k = this.calculateNewSizeFromAspectRatio(g, b, {
                width: y.maxWidth,
                height: y.maxHeight
              }, {
                width: s,
                height: r
              });
              if (g = k.newWidth, b = k.newHeight, this.props.grid) {
                var z = W(g, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  x = W(b, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  S = this.props.snapGap || 0;
                g = 0 === S || Math.abs(z - g) <= S ? z : g, b = 0 === S || Math.abs(x - b) <= S ? x : b
              }
              var N = {
                width: g - p.width,
                height: b - p.height
              };
              if (this.delta = N, c && "string" == typeof c)
                if (c.endsWith("%")) {
                  var E = g / f.width * 100;
                  g = "".concat(E, "%")
                } else if (c.endsWith("vw")) {
                var R = g / this.window.innerWidth * 100;
                g = "".concat(R, "vw")
              } else if (c.endsWith("vh")) {
                var _ = g / this.window.innerHeight * 100;
                g = "".concat(_, "vh")
              }
              u && "string" == typeof u && (u.endsWith("%") ? (E = b / f.height * 100, b = "".concat(E, "%")) : u.endsWith("vw") ? (R = b / this.window.innerWidth * 100, b = "".concat(R, "vw")) : u.endsWith("vh") && (_ = b / this.window.innerHeight * 100, b = "".concat(_, "vh")));
              var L = {
                width: this.createSizeForCssProperty(g, "width"),
                height: this.createSizeForCssProperty(b, "height")
              };
              "row" === this.flexDir ? L.flexBasis = L.width : "column" === this.flexDir && (L.flexBasis = L.height);
              var j = this.state.width !== L.width,
                M = this.state.height !== L.height,
                C = this.state.flexBasis !== L.flexBasis,
                T = j || M || C;
              T && (0, w.flushSync)((function() {
                t.setState(L)
              })), this.props.onResize && T && this.props.onResize(e, h, this.resizable, N)
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
              o = t.handleStyles,
              s = t.handleClasses,
              r = t.handleWrapperStyle,
              a = t.handleWrapperClass,
              l = t.handleComponent;
            if (!i) return null;
            var d = Object.keys(i).map((function(t) {
              return !1 !== i[t] ? (0, n.jsx)(N, {
                direction: t,
                onResizeStart: e.onResizeStart,
                replaceStyles: o && o[t],
                className: s && s[t],
                children: l && l[t] ? l[t] : null
              }, t) : null
            }));
            return (0, n.jsx)("div", {
              className: a,
              style: r,
              children: d
            })
          }, t.prototype.render = function() {
            var e = this,
              t = Object.keys(this.props).reduce((function(t, i) {
                return -1 !== C.indexOf(i) || (t[i] = e.props[i]), t
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
            var o = this.props.as || "div";
            return (0, n.jsxs)(o, R({
              style: i,
              className: this.props.className
            }, t, {
              ref: function(t) {
                t && (e.resizable = t)
              },
              children: [this.state.isResizing && (0, n.jsx)("div", {
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
      const U = ({
          style: e,
          width: t,
          height: i,
          resizable: o,
          field: s,
          input: r,
          meta: a,
          name: l,
          label: d,
          description: h,
          error: p,
          children: u
        }) => {
          const f = () => o ? (0, n.jsx)(I, {
            defaultSize: {
              width: t || "100%",
              height: i || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, c.cloneElement)(u, ...r)
          }) : u;
          return (0, n.jsxs)("div", {
            className: "rockstargames-modules-core-gif-viewere8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
            style: e,
            children: [(0, n.jsxs)("label", {
              className: "rockstargames-modules-core-gif-viewerceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
              htmlFor: l ?? s?.name,
              children: [d ?? s?.label, (0, n.jsx)("span", {
                className: "rockstargames-modules-core-gif-viewera0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
                children: h ?? s?.description
              })]
            }), (0, n.jsx)(f, {}), (p || a?.error) && (0, n.jsx)("div", {
              className: "FieldError_sc_custom",
              children: p ?? a?.error
            })]
          })
        },
        P = (b("Background Image Gradient"), ((e = "Label") => {
          e.toLowerCase().split(" ").join("_")
        })("Background Image Gradient"), b("Background Image Gradient"), () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => F({
            hero: !1
          })
        }));
      i(1398);
      const F = (e = {}) => ({
        ...e,
        key: `key_${p()}`
      });
      var H = i(4235);
      const G = ({
          field: e,
          input: t,
          meta: i
        }) => {
          const {
            data: o
          } = (0, u.useQuery)(H.GifsList);
          return (0, n.jsx)(U, {
            name: t.name || e.name || e.label,
            label: e.label,
            description: e.description,
            meta: i,
            children: o?.gifsList?.length ? (0, n.jsxs)("select", {
              ...t,
              children: [(0, n.jsx)("option", {
                value: "",
                children: "-- Select a gif --"
              }), o.gifsList.map((e => (0, n.jsxs)("option", {
                value: e.hash,
                children: ["(", e.hash, ")", " ", e.name]
              }, e.hash)))]
            }) : (0, n.jsx)(s, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        A = (e = {}) => ({
          label: e?.label ?? "Gif hash",
          name: e?.group ?? "hash",
          description: e?.description ?? "",
          component: ({
            field: e,
            input: t,
            meta: i
          }) => (0, n.jsx)(G, {
            field: e,
            input: t,
            meta: i
          })
        }),
        V = (e = {
          group: "hash"
        }) => {
          return {
            name: e.group,
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
            }), (t = {
              name: "caption",
              label: "Caption",
              component: "html"
            }, {
              ...t,
              name: `_memoq.${t.name}`
            }), {
              name: "loop",
              label: "Is Looping?",
              description: "Should this gif repeat endlessly?",
              component: "toggle"
            }, P()],
            defaultItem: () => F({
              loop: !1
            }),
            itemProps: e => ((e, t = {}) => ({
              ...t,
              key: e.key
            }))(e, {
              label: e?.name ? `${e.name} [Gif]` : "New [Gif]"
            })
          };
          var t
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
    2295: (e, t, i) => {
      "use strict";
      e.exports = i(9245)
    },
    3019: (e, t, i) => {
      var n = {
        "./de": [2666, 6879],
        "./en": [9390, 2243],
        "./es": [8697, 278],
        "./fr": [7185, 9022],
        "./it": [1872, 2365],
        "./ja": [3476, 9377],
        "./ko": [1239, 9028],
        "./pl": [1645, 1242],
        "./pt": [3669, 7970],
        "./ru": [1520, 7453],
        "./zh": [3907, 8880]
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
        "./de": [1367, 4710],
        "./en": [579, 3486],
        "./es": [7304, 4011],
        "./fr": [2436, 4851],
        "./it": [665, 9936],
        "./ja": [9729, 2156],
        "./ko": [5414, 3885],
        "./pl": [4156, 6891],
        "./pt": [772, 3475],
        "./ru": [8501, 4528],
        "./zh": [8282, 4861]
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
        "./de": [1464, 5639],
        "./en": [3872, 6267],
        "./es": [6507, 5742],
        "./fr": [31, 2678],
        "./it": [6625, 6997],
        "./ja": [3142, 6361],
        "./ko": [2189, 7452],
        "./pl": [6283, 2642],
        "./pt": [6515, 3034],
        "./ru": [7746, 3941],
        "./zh": [4333, 5832]
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
        "./de": [7894, 5259],
        "./en": [1658, 4799],
        "./es": [8637, 3370],
        "./fr": [3157, 7010],
        "./it": [9060, 4913],
        "./ja": [6688, 6285],
        "./ko": [4907, 6664],
        "./pl": [8097, 1054],
        "./pt": [8953, 662],
        "./ru": [7924, 5233],
        "./zh": [6975, 4700]
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
        "./de": [406, 299],
        "./en": [874, 5663],
        "./es": [4013, 5530],
        "./fr": [4965, 2466],
        "./it": [8596, 7073],
        "./ja": [4656, 4621],
        "./ko": [5451, 824],
        "./pl": [6273, 2398],
        "./pt": [6585, 9126],
        "./ru": [7284, 3697],
        "./zh": [1615, 1868]
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
    5422: (e, t, i) => {},
    8525: (e, t, i) => {
      var n = {
        "./de": [5149, 9990],
        "./en": [8517, 1822],
        "./es": [3877, 2347],
        "./fr": [6170, 131],
        "./it": [5583, 8272],
        "./ja": [5571, 7436],
        "./ko": [8284, 2221],
        "./pl": [9682, 2171],
        "./pt": [2762, 8755],
        "./ru": [1007, 2864],
        "./zh": [8548, 3197]
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
    },
    8613: (e, t, i) => {
      "use strict";
      i.d(t, {
        JK: () => d
      }), i(2295), i(2229);
      var n = i(9867);
      const o = (e, t) => {
          if (!e || !t) return void console.log(`Couldn't set cookie (${e}) to value (${t})`);
          const i = window.location.hostname.split("."),
            n = i.slice(i.length - 2).join(".");
          document.cookie = `${e}=${t}; domain=${n}; path=/;`
        },
        s = e => {
          const t = document.cookie.split("; "),
            i = `${e}=`,
            n = t.find((e => e.startsWith(i))),
            o = n?.substring(i.length, n.length);
          return o
        },
        r = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US",
          store: "en"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE",
          store: "de"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES",
          store: "es"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX",
          store: "es-419"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR",
          store: "fr"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT",
          store: "it"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP",
          store: "ja"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR",
          store: "ko"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL",
          store: "pl"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR",
          store: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU",
          store: "ru"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW",
          store: "zh-Hant"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN",
          store: "zh-CN"
        }],
        a = r[0],
        l = r,
        d = () => {
          const {
            location: e
          } = window, t = (0, n.A)(), i = (e => {
            const t = l.map((e => e.subdomaincom)),
              i = e.pathname.substring(1).split("/"),
              n = "detect-locals" === i[0] ? 1 : 0;
            return -1 !== t.indexOf(i[n]) ? i[n] : null
          })(e), r = (e => {
            const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return t?.split("=")[1]
          })(e), d = a;
          let h = d;
          const p = `rockstarweb_lang.${t.cookieIdentifier}`,
            c = s(p);
          h = t.currentSite?.site === n.C.www ? l.find((e => e.subdomaincom === r)) || l.find((e => e.subdomaincom === i)) || d : l.find((e => e.iso === c)) || d;
          const [, u] = ((e, t, i = !1) => {
            const n = s(e);
            return n && !i || o(e, t), [n, (r = e, e => {
              o(r, e)
            })];
            var r
          })(p, h.iso);
          return [h, u]
        };
      i(5422)
    },
    9245: (e, t, i) => {
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
          d = null,
          h = null;
        for (n in void 0 !== i && (d = "" + i), void 0 !== t.key && (d = "" + t.key), void 0 !== t.ref && (h = t.ref), t) s.call(t, n) && !a.hasOwnProperty(n) && (l[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === l[n] && (l[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: d,
          ref: h,
          props: l,
          _owner: r.current
        }
      }
      t.jsx = l, t.jsxs = l
    },
    9867: (e, t, i) => {
      "use strict";
      i.d(t, {
        A: () => s,
        C: () => n
      });
      const n = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          circoloco: "circoloco",
          supportNew: "support"
        },
        o = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            circoloco: "circolocorecords",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        s = () => {
          let e;
          const {
            location: t
          } = window, i = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), n = o.findIndex((t => Object.entries(t.sites).findIndex((([t, n]) => n === i && (e = {
            site: t,
            subDomain: n
          }, !0))) >= 0)), s = o[n >= 0 ? n : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...s,
            currentSite: e
          }
        }
    }
  }
]);