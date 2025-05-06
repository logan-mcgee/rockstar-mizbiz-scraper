! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "e81fb8f3-8322-41f1-9fa8-84794b1f9bc0", t._sentryDebugIdIdentifier = "sentry-dbid-e81fb8f3-8322-41f1-9fa8-84794b1f9bc0")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-videoplayer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [2127, 3855], {
    53178: t => {
      var e = [];

      function i(t) {
        for (var i = -1, o = 0; o < e.length; o++)
          if (e[o].identifier === t) {
            i = o;
            break
          } return i
      }

      function o(t, o) {
        for (var r = {}, n = [], a = 0; a < t.length; a++) {
          var h = t[a],
            p = o.base ? h[0] + o.base : h[0],
            l = r[p] || 0,
            d = "".concat(p, " ").concat(l);
          r[p] = l + 1;
          var u = i(d),
            c = {
              css: h[1],
              media: h[2],
              sourceMap: h[3],
              supports: h[4],
              layer: h[5]
            };
          if (-1 !== u) e[u].references++, e[u].updater(c);
          else {
            var f = s(c, o);
            o.byIndex = a, e.splice(a, 0, {
              identifier: d,
              updater: f,
              references: 1
            })
          }
          n.push(d)
        }
        return n
      }

      function s(t, e) {
        var i = e.domAPI(e);
        return i.update(t),
          function(e) {
            if (e) {
              if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
              i.update(t = e)
            } else i.remove()
          }
      }
      t.exports = function(t, s) {
        var r = o(t = t || [], s = s || {});
        return function(t) {
          t = t || [];
          for (var n = 0; n < r.length; n++) {
            var a = i(r[n]);
            e[a].references--
          }
          for (var h = o(t, s), p = 0; p < r.length; p++) {
            var l = i(r[p]);
            0 === e[l].references && (e[l].updater(), e.splice(l, 1))
          }
          r = h
        }
      }
    },
    17529: t => {
      var e = {};
      t.exports = function(t, i) {
        var o = function(t) {
          if (void 0 === e[t]) {
            var i = document.querySelector(t);
            if (window.HTMLIFrameElement && i instanceof window.HTMLIFrameElement) try {
              i = i.contentDocument.head
            } catch (t) {
              i = null
            }
            e[t] = i
          }
          return e[t]
        }(t);
        if (!o) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
        o.appendChild(i)
      }
    },
    82510: t => {
      t.exports = function(t) {
        var e = document.createElement("style");
        return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
      }
    },
    72162: (t, e, i) => {
      t.exports = function(t) {
        var e = i.nc;
        e && t.setAttribute("nonce", e)
      }
    },
    27835: t => {
      t.exports = function(t) {
        if ("undefined" == typeof document) return {
          update: function() {},
          remove: function() {}
        };
        var e = t.insertStyleElement(t);
        return {
          update: function(i) {
            ! function(t, e, i) {
              var o = "";
              i.supports && (o += "@supports (".concat(i.supports, ") {")), i.media && (o += "@media ".concat(i.media, " {"));
              var s = void 0 !== i.layer;
              s && (o += "@layer".concat(i.layer.length > 0 ? " ".concat(i.layer) : "", " {")), o += i.css, s && (o += "}"), i.media && (o += "}"), i.supports && (o += "}");
              var r = i.sourceMap;
              r && "undefined" != typeof btoa && (o += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r)))), " */")), e.styleTagTransform(o, t, e.options)
            }(e, t, i)
          },
          remove: function() {
            ! function(t) {
              if (null === t.parentNode) return !1;
              t.parentNode.removeChild(t)
            }(e)
          }
        }
      }
    },
    90675: t => {
      t.exports = function(t, e) {
        if (e.styleSheet) e.styleSheet.cssText = t;
        else {
          for (; e.firstChild;) e.removeChild(e.firstChild);
          e.appendChild(document.createTextNode(t))
        }
      }
    },
    15081: t => {
      t.exports = function(t) {
        var e = [];
        return e.toString = function() {
          return this.map((function(e) {
            var i = "",
              o = void 0 !== e[5];
            return e[4] && (i += "@supports (".concat(e[4], ") {")), e[2] && (i += "@media ".concat(e[2], " {")), o && (i += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), i += t(e), o && (i += "}"), e[2] && (i += "}"), e[4] && (i += "}"), i
          })).join("")
        }, e.i = function(t, i, o, s, r) {
          "string" == typeof t && (t = [
            [null, t, void 0]
          ]);
          var n = {};
          if (o)
            for (var a = 0; a < this.length; a++) {
              var h = this[a][0];
              null != h && (n[h] = !0)
            }
          for (var p = 0; p < t.length; p++) {
            var l = [].concat(t[p]);
            o && n[l[0]] || (void 0 !== r && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = r), i && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = i) : l[2] = i), s && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = s) : l[4] = "".concat(s)), e.push(l))
          }
        }, e
      }
    },
    79908: t => {
      t.exports = function(t, e) {
        return e || (e = {}), t ? (t = String(t.__esModule ? t.default : t), /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), e.hash && (t += e.hash), /["'() \t\n]|(%20)/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t) : t
      }
    },
    42587: t => {
      t.exports = function(t) {
        var e = t[1],
          i = t[3];
        if (!i) return e;
        if ("function" == typeof btoa) {
          var o = btoa(unescape(encodeURIComponent(JSON.stringify(i)))),
            s = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),
            r = "/*# ".concat(s, " */");
          return [e].concat([r]).join("\n")
        }
        return [e].join("\n")
      }
    },
    92255: (t, e, i) => {
      i.d(e, {
        c: () => W
      });
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
        a = function() {
          return a = Object.assign || function(t) {
            for (var e, i = 1, o = arguments.length; i < o; i++)
              for (var s in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, s) && (t[s] = e[s]);
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
        l = {
          width: "20px",
          height: "20px",
          position: "absolute"
        },
        d = {
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
          topRight: a(a({}, l), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: a(a({}, l), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: a(a({}, l), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: a(a({}, l), {
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
              style: a(a({
                position: "absolute",
                userSelect: "none"
              }, d[this.props.direction]), this.props.replaceStyles || {}),
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
        v = function(t, e, i) {
          return Math.max(Math.min(t, i), e)
        },
        w = function(t, e) {
          return Math.round(t / e) * e
        },
        b = function(t, e) {
          return new RegExp(t, "i").test(e)
        },
        m = function(t) {
          return Boolean(t.touches && t.touches.length)
        },
        y = function(t, e, i) {
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
        R = "__resizable_base__",
        W = function(t) {
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
              n = s && b("left", r),
              a = s && b("top", r);
            if ("parent" === this.props.bounds) {
              var h = this.parentNode;
              h && (i = n ? this.resizableRight - this.parentLeft : h.offsetWidth + (this.parentLeft - this.resizableLeft), o = a ? this.resizableBottom - this.parentTop : h.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = n ? this.resizableRight : this.window.innerWidth - this.resizableLeft, o = a ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = n ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), o = a ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
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
              a = this.props,
              h = a.lockAspectRatio,
              p = a.lockAspectRatioExtraHeight,
              l = a.lockAspectRatioExtraWidth,
              d = n.width,
              u = n.height,
              c = p || 0,
              f = l || 0;
            return b("right", r) && (d = n.width + (t - n.x) * o / i, h && (u = (d - f) / this.ratio + c)), b("left", r) && (d = n.width - (t - n.x) * o / i, h && (u = (d - f) / this.ratio + c)), b("bottom", r) && (u = n.height + (e - n.y) * o / i, h && (d = (u - c) * this.ratio + f)), b("top", r) && (u = n.height - (e - n.y) * o / i, h && (d = (u - c) * this.ratio + f)), {
              newWidth: d,
              newHeight: u
            }
          }, e.prototype.calculateNewSizeFromAspectRatio = function(t, e, i, o) {
            var s = this.props,
              r = s.lockAspectRatio,
              n = s.lockAspectRatioExtraHeight,
              a = s.lockAspectRatioExtraWidth,
              h = void 0 === o.width ? 10 : o.width,
              p = void 0 === i.width || i.width < 0 ? t : i.width,
              l = void 0 === o.height ? 10 : o.height,
              d = void 0 === i.height || i.height < 0 ? e : i.height,
              u = n || 0,
              c = a || 0;
            if (r) {
              var f = (l - u) * this.ratio + c,
                g = (d - u) * this.ratio + c,
                w = (h - c) / this.ratio + u,
                b = (p - c) / this.ratio + u,
                m = Math.max(h, f),
                y = Math.min(p, g),
                z = Math.max(l, w),
                x = Math.min(d, b);
              t = v(t, m, y), e = v(e, z, x)
            } else t = v(t, h, p), e = v(e, l, d);
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
                a = o.bottom;
              this.resizableLeft = s, this.resizableRight = n, this.resizableTop = r, this.resizableBottom = a
            }
          }, e.prototype.onResizeStart = function(t, e) {
            if (this.resizable && this.window) {
              var i, o = 0,
                s = 0;
              if (t.nativeEvent && function(t) {
                  return Boolean((t.clientX || 0 === t.clientX) && (t.clientY || 0 === t.clientY))
                }(t.nativeEvent) ? (o = t.nativeEvent.clientX, s = t.nativeEvent.clientY) : t.nativeEvent && m(t.nativeEvent) && (o = t.nativeEvent.touches[0].clientX, s = t.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(t, e, this.resizable)) return;
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
              this.setState(h)
            }
          }, e.prototype.onMouseMove = function(t) {
            var e = this;
            if (this.state.isResizing && this.resizable && this.window) {
              if (this.window.TouchEvent && m(t)) try {
                t.preventDefault(), t.stopPropagation()
              } catch (t) {}
              var i = this.props,
                o = i.maxWidth,
                s = i.maxHeight,
                n = i.minWidth,
                a = i.minHeight,
                h = m(t) ? t.touches[0].clientX : t.clientX,
                p = m(t) ? t.touches[0].clientY : t.clientY,
                l = this.state,
                d = l.direction,
                u = l.original,
                c = l.width,
                f = l.height,
                g = this.getParentSize(),
                v = function(t, e, i, o, s, r, n) {
                  return o = x(o, t.width, e, i), s = x(s, t.height, e, i), r = x(r, t.width, e, i), n = x(n, t.height, e, i), {
                    maxWidth: void 0 === o ? void 0 : Number(o),
                    maxHeight: void 0 === s ? void 0 : Number(s),
                    minWidth: void 0 === r ? void 0 : Number(r),
                    minHeight: void 0 === n ? void 0 : Number(n)
                  }
                }(g, this.window.innerWidth, this.window.innerHeight, o, s, n, a);
              o = v.maxWidth, s = v.maxHeight, n = v.minWidth, a = v.minHeight;
              var b = this.calculateNewSizeFromDirection(h, p),
                z = b.newHeight,
                S = b.newWidth,
                R = this.calculateNewMaxFromBoundary(o, s);
              this.props.snap && this.props.snap.x && (S = y(S, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (z = y(z, this.props.snap.y, this.props.snapGap));
              var W = this.calculateNewSizeFromAspectRatio(S, z, {
                width: R.maxWidth,
                height: R.maxHeight
              }, {
                width: n,
                height: a
              });
              if (S = W.newWidth, z = W.newHeight, this.props.grid) {
                var _ = w(S, this.props.grid[0]),
                  E = w(z, this.props.grid[1]),
                  M = this.props.snapGap || 0;
                S = 0 === M || Math.abs(_ - S) <= M ? _ : S, z = 0 === M || Math.abs(E - z) <= M ? E : z
              }
              var N = {
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
              })), this.props.onResize && this.props.onResize(t, d, this.resizable, N)
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
              a = e.handleWrapperClass,
              h = e.handleComponent;
            if (!i) return null;
            var p = Object.keys(i).map((function(e) {
              return !1 !== i[e] ? s.createElement(u, {
                key: e,
                direction: e,
                onResizeStart: t.onResizeStart,
                replaceStyles: o && o[e],
                className: r && r[e]
              }, h && h[e] ? h[e] : null) : null
            }));
            return s.createElement("div", {
              className: a,
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
          }, e
        }(s.PureComponent)
    },
    32469: (t, e, i) => {
      var o = i(62229),
        s = Symbol.for("react.element"),
        r = Symbol.for("react.fragment"),
        n = Object.prototype.hasOwnProperty,
        a = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        h = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function p(t, e, i) {
        var o, r = {},
          p = null,
          l = null;
        for (o in void 0 !== i && (p = "" + i), void 0 !== e.key && (p = "" + e.key), void 0 !== e.ref && (l = e.ref), e) n.call(e, o) && !h.hasOwnProperty(o) && (r[o] = e[o]);
        if (t && t.defaultProps)
          for (o in e = t.defaultProps) void 0 === r[o] && (r[o] = e[o]);
        return {
          $$typeof: s,
          type: t,
          key: p,
          ref: l,
          props: r,
          _owner: a.current
        }
      }
      e.Fragment = r, e.jsx = p, e.jsxs = p
    },
    73855: (t, e, i) => {
      t.exports = i(32469)
    }
  }
]);