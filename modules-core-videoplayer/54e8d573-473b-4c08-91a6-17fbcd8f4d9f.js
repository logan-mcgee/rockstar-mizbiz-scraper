! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "54e8d573-473b-4c08-91a6-17fbcd8f4d9f", e._sentryDebugIdIdentifier = "sentry-dbid-54e8d573-473b-4c08-91a6-17fbcd8f4d9f")
  } catch (e) {}
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
  [92, 96], {
    5356: (e, t, i) => {
      "use strict";
      var o = i(2229),
        n = Symbol.for("react.element"),
        s = Symbol.for("react.fragment"),
        a = Object.prototype.hasOwnProperty,
        r = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        l = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function h(e, t, i) {
        var o, s = {},
          h = null,
          d = null;
        for (o in void 0 !== i && (h = "" + i), void 0 !== t.key && (h = "" + t.key), void 0 !== t.ref && (d = t.ref), t) a.call(t, o) && !l.hasOwnProperty(o) && (s[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === s[o] && (s[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: h,
          ref: d,
          props: s,
          _owner: r.current
        }
      }
      t.Fragment = s, t.jsx = h, t.jsxs = h
    },
    8096: (e, t, i) => {
      "use strict";
      e.exports = i(5356)
    },
    6092: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, {
        RockstarVideoPlayer: () => J,
        VideoField: () => Z,
        default: () => ee
      });
      var o = i(6188),
        n = i.n(o),
        s = i(5966);
      const a = "rockstargames-modules-core-videoplayera19bcd2b98d91e60c43b9de146e20f4e";
      var r = i(8096);
      const l = e => {
        let {
          color: t
        } = e;
        return (0, r.jsxs)("div", {
          className: "rockstargames-modules-core-videoplayere83fe07aa054242e9023d2f9e7a3fd25",
          style: {
            "--loader-color": t
          },
          children: [(0, r.jsx)("div", {
            className: a
          }), (0, r.jsx)("div", {
            className: a
          }), (0, r.jsx)("div", {
            className: a
          })]
        })
      };
      var h = i(1569);
      const d = {
        alt: "Images Need Alt Text",
        badge: null,
        splitter: " ",
        role: "",
        caption: ""
      };
      var p = i(2229);
      const c = (0, s.setContextItem)({
          context: (0, p.createContext)(),
          key: "tinaPayloadContext"
        }),
        {
          Provider: u
        } = c,
        m = e => e.full_src,
        f = e => {
          const t = e?.previewSrc ?? e?.preview_src ?? e;
          return t?.startsWith("http") ? t : `${(0,s.getCdnPrefix)(!1)}${t}`
        },
        g = e => e.meta.uploads_directory,
        b = function() {
          return {
            name: "key",
            component: "text",
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
              label: "TranslationKey",
              description: "This value must begin with `key_` and MUST BE UNIQUE."
            }
          }
        },
        v = function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
          return {
            label: `${e} Line`,
            name: `${e}_line`,
            component: () => (0, r.jsx)("hr", {})
          }
        },
        w = e => {
          let {
            name: t,
            label: i = t
          } = e;
          return {
            name: t,
            label: i,
            component: "group",
            description: "If responsive, only the Mobile Source is needed.",
            fields: [{
              name: "mobile",
              label: "Mobile Source",
              component: "image",
              clearable: !0,
              uploadDir: g,
              parse: m,
              previewSrc: f
            }, {
              name: "desktop",
              label: "Desktop Source",
              component: "image",
              clearable: !0,
              uploadDir: g,
              parse: m,
              previewSrc: f
            }]
          }
        },
        y = [{
          ...v("Background Image Gradient")
        }, {
          ... function() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
            return {
              label: e,
              name: e.toLowerCase().split(" ").join("_"),
              component: () => (0, r.jsx)("h3", {
                style: {
                  marginBottom: "var(--tina-padding-small)",
                  "--color-h3": "var(--tina-color-grey-8)"
                },
                children: e
              })
            }
          }("Background Image Gradient")
        }, {
          name: "style.--gradient-height",
          label: "Gradient Height",
          description: "Select the height of the gradient. Smaller size means less of the selected gradient color(s).",
          component: "select",
          options: [{
            value: "",
            label: "Off"
          }, {
            value: "3",
            label: "xs"
          }, {
            value: "5",
            label: "small"
          }, {
            value: "10",
            label: "medium"
          }, {
            value: "15",
            label: "large"
          }, {
            value: "20",
            label: "xl"
          }]
        }, {
          name: "style.--gradient-start-color",
          label: "Top Color",
          component: "color"
        }, {
          name: "style.--gradient-end-color",
          label: "Bottom Color",
          component: "color"
        }, {
          ...v("Background Image Gradient")
        }, {
          label: "CSS for Linear Gradient (Optional)",
          description: "ex: to bottom, rgba(0,0,0,0.5) 80%, #000000",
          name: "style.--linear-gradient",
          component: "text"
        }],
        z = e => {
          let {
            game: t = null,
            label: i = "Image Configuration"
          } = e;
          const o = [q({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), q({
            label: "Badge Text",
            name: "badge",
            description: "What text should appear inside the badge? If blank, the badge will not be displayed.",
            component: "text"
          }), {
            label: "Badge Text Splitter",
            name: "splitter",
            description: "Character that used as a line break for badge text. Default is a single space.",
            component: "text"
          }, w({
            name: "sources.en_us",
            label: "Upload Global Images"
          }), {
            name: "sources",
            label: "Upload Local Images",
            description: "The site will default to the global value, but use a local one on local sites if it exists here.",
            component: "group",
            fields: ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"].map((e => w({
              name: e
            })))
          }, q({
            name: "frame",
            label: "Choose Frame",
            component: "select",
            options: [{
              value: "",
              label: "None"
            }, {
              value: "frame_1",
              label: "Frame 1"
            }, {
              value: "frame_2",
              label: "Frame 2"
            }, {
              value: "frame_3",
              label: "Frame 3"
            }, {
              value: "frame_4",
              label: "Frame 4"
            }, {
              value: "frame_5",
              label: "Frame 5"
            }, {
              value: "frame_6",
              label: "Frame 6"
            }]
          }), q({
            name: "caption",
            label: "Caption",
            component: "html"
          }), b({
            label: "Translation Key",
            description: "Only used for images that were marked as translatable after they were created. This value must begin with `key_` and MUST BE UNIQUE."
          })];
          return "rdo" !== t && "rdr2" !== t || o.push({
            name: "role",
            label: "Role",
            description: "Add a role icon.",
            component: "select",
            options: [{
              value: "",
              label: "None"
            }, {
              value: "bounty",
              label: "Bounty Hunter"
            }, {
              value: "collector",
              label: "Collector"
            }, {
              value: "moonshiner",
              label: "Moonshiner"
            }, {
              value: "naturalist",
              label: "Naturalist"
            }, {
              value: "trader",
              label: "Trader"
            }]
          }), o.push({
            label: "Border Style",
            name: "style.--image-border-style",
            description: "(ex. 1px solid #fff)",
            component: "text"
          }, {
            label: "Border Radius",
            name: "style.--image-border-radius",
            component: "text"
          }, {
            name: "style.--background-image-size",
            label: "Background Size",
            component: "text"
          }, {
            name: "style.--background-image-repeat",
            label: "Background Repeat",
            component: "select",
            options: ["", "repeat", "no-repeat", "repeat-y", "repeat-x", "initial", "inherit"]
          }), "Background Image" === i && o.push(...y), {
            name: "image",
            label: i,
            component: "group",
            fields: o,
            defaultItem: () => X(d),
            itemProps: e => Y(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      i(1788);
      const x = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, r.jsx)("hr", {})
        }
      };
      var S, k = i(4853),
        _ = (S = function(e, t) {
          return S = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          }, S(e, t)
        }, function(e, t) {
          function i() {
            this.constructor = e
          }
          S(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        }),
        N = function() {
          return N = Object.assign || function(e) {
            for (var t, i = 1, o = arguments.length; i < o; i++)
              for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }, N.apply(this, arguments)
        },
        R = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize"
        },
        E = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize"
        },
        W = {
          width: "20px",
          height: "20px",
          position: "absolute"
        },
        B = {
          top: N(N({}, R), {
            top: "-5px"
          }),
          right: N(N({}, E), {
            left: void 0,
            right: "-5px"
          }),
          bottom: N(N({}, R), {
            top: void 0,
            bottom: "-5px"
          }),
          left: N(N({}, E), {
            left: "-5px"
          }),
          topRight: N(N({}, W), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: N(N({}, W), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: N(N({}, W), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: N(N({}, W), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        M = function(e) {
          function t() {
            var t = null !== e && e.apply(this, arguments) || this;
            return t.onMouseDown = function(e) {
              t.props.onResizeStart(e, t.props.direction)
            }, t.onTouchStart = function(e) {
              t.props.onResizeStart(e, t.props.direction)
            }, t
          }
          return _(t, e), t.prototype.render = function() {
            return p.createElement("div", {
              className: this.props.className || "",
              style: N(N({
                position: "absolute",
                userSelect: "none"
              }, B[this.props.direction]), this.props.replaceStyles || {}),
              onMouseDown: this.onMouseDown,
              onTouchStart: this.onTouchStart
            }, this.props.children)
          }, t
        }(p.PureComponent),
        L = function() {
          var e = function(t, i) {
            return e = Object.setPrototypeOf || {
              __proto__: []
            }
            instanceof Array && function(e, t) {
              e.__proto__ = t
            } || function(e, t) {
              for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
            }, e(t, i)
          };
          return function(t, i) {
            function o() {
              this.constructor = t
            }
            e(t, i), t.prototype = null === i ? Object.create(i) : (o.prototype = i.prototype, new o)
          }
        }(),
        j = function() {
          return j = Object.assign || function(e) {
            for (var t, i = 1, o = arguments.length; i < o; i++)
              for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }, j.apply(this, arguments)
        },
        T = {
          width: "auto",
          height: "auto"
        },
        C = function(e, t, i) {
          return Math.max(Math.min(e, i), t)
        },
        O = function(e, t) {
          return Math.round(e / t) * t
        },
        H = function(e, t) {
          return new RegExp(e, "i").test(t)
        },
        I = function(e) {
          return Boolean(e.touches && e.touches.length)
        },
        D = function(e, t, i) {
          void 0 === i && (i = 0);
          var o = t.reduce((function(i, o, n) {
              return Math.abs(o - e) < Math.abs(t[i] - e) ? n : i
            }), 0),
            n = Math.abs(t[o] - e);
          return 0 === i || n < i ? t[o] : e
        },
        P = function(e) {
          return "auto" === (e = e.toString()) || e.endsWith("px") || e.endsWith("%") || e.endsWith("vh") || e.endsWith("vw") || e.endsWith("vmax") || e.endsWith("vmin") ? e : e + "px"
        },
        F = function(e, t, i, o) {
          if (e && "string" == typeof e) {
            if (e.endsWith("px")) return Number(e.replace("px", ""));
            if (e.endsWith("%")) return t * (Number(e.replace("%", "")) / 100);
            if (e.endsWith("vw")) return i * (Number(e.replace("vw", "")) / 100);
            if (e.endsWith("vh")) return o * (Number(e.replace("vh", "")) / 100)
          }
          return e
        },
        A = ["as", "style", "className", "grid", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        $ = "__resizable_base__",
        U = function(e) {
          function t(t) {
            var i = e.call(this, t) || this;
            return i.ratio = 1, i.resizable = null, i.parentLeft = 0, i.parentTop = 0, i.resizableLeft = 0, i.resizableRight = 0, i.resizableTop = 0, i.resizableBottom = 0, i.targetLeft = 0, i.targetTop = 0, i.appendBase = function() {
              if (!i.resizable || !i.window) return null;
              var e = i.parentNode;
              if (!e) return null;
              var t = i.window.document.createElement("div");
              return t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.transform = "scale(0, 0)", t.style.left = "0", t.style.flex = "0 0 100%", t.classList ? t.classList.add($) : t.className += $, e.appendChild(t), t
            }, i.removeBase = function(e) {
              var t = i.parentNode;
              t && t.removeChild(e)
            }, i.ref = function(e) {
              e && (i.resizable = e)
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
          return L(t, e), Object.defineProperty(t.prototype, "parentNode", {
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
              return this.props.size || this.props.defaultSize || T
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "size", {
            get: function() {
              var e = 0,
                t = 0;
              if (this.resizable && this.window) {
                var i = this.resizable.offsetWidth,
                  o = this.resizable.offsetHeight,
                  n = this.resizable.style.position;
                "relative" !== n && (this.resizable.style.position = "relative"), e = "auto" !== this.resizable.style.width ? this.resizable.offsetWidth : i, t = "auto" !== this.resizable.style.height ? this.resizable.offsetHeight : o, this.resizable.style.position = n
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
                  if (void 0 === e.state[t] || "auto" === e.state[t]) return "auto";
                  if (e.propsSize && e.propsSize[t] && e.propsSize[t].toString().endsWith("%")) {
                    if (e.state[t].toString().endsWith("%")) return e.state[t].toString();
                    var i = e.getParentSize();
                    return Number(e.state[t].toString().replace("px", "")) / i[t] * 100 + "%"
                  }
                  return P(e.state[t])
                };
              return {
                width: t && void 0 !== t.width && !this.state.isResizing ? P(t.width) : i("width"),
                height: t && void 0 !== t.height && !this.state.isResizing ? P(t.height) : i("height")
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
            var o = {
              width: e.offsetWidth,
              height: e.offsetHeight
            };
            return t && (this.parentNode.style.flexWrap = i), this.removeBase(e), o
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
            var i, o, n = this.props.boundsByDirection,
              s = this.state.direction,
              a = n && H("left", s),
              r = n && H("top", s);
            if ("parent" === this.props.bounds) {
              var l = this.parentNode;
              l && (i = a ? this.resizableRight - this.parentLeft : l.offsetWidth + (this.parentLeft - this.resizableLeft), o = r ? this.resizableBottom - this.parentTop : l.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = a ? this.resizableRight : this.window.innerWidth - this.resizableLeft, o = r ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = a ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), o = r ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (e = e && e < i ? e : i), o && Number.isFinite(o) && (t = t && t < o ? t : o), {
              maxWidth: e,
              maxHeight: t
            }
          }, t.prototype.calculateNewSizeFromDirection = function(e, t) {
            var i = this.props.scale || 1,
              o = this.props.resizeRatio || 1,
              n = this.state,
              s = n.direction,
              a = n.original,
              r = this.props,
              l = r.lockAspectRatio,
              h = r.lockAspectRatioExtraHeight,
              d = r.lockAspectRatioExtraWidth,
              p = a.width,
              c = a.height,
              u = h || 0,
              m = d || 0;
            return H("right", s) && (p = a.width + (e - a.x) * o / i, l && (c = (p - m) / this.ratio + u)), H("left", s) && (p = a.width - (e - a.x) * o / i, l && (c = (p - m) / this.ratio + u)), H("bottom", s) && (c = a.height + (t - a.y) * o / i, l && (p = (c - u) * this.ratio + m)), H("top", s) && (c = a.height - (t - a.y) * o / i, l && (p = (c - u) * this.ratio + m)), {
              newWidth: p,
              newHeight: c
            }
          }, t.prototype.calculateNewSizeFromAspectRatio = function(e, t, i, o) {
            var n = this.props,
              s = n.lockAspectRatio,
              a = n.lockAspectRatioExtraHeight,
              r = n.lockAspectRatioExtraWidth,
              l = void 0 === o.width ? 10 : o.width,
              h = void 0 === i.width || i.width < 0 ? e : i.width,
              d = void 0 === o.height ? 10 : o.height,
              p = void 0 === i.height || i.height < 0 ? t : i.height,
              c = a || 0,
              u = r || 0;
            if (s) {
              var m = (d - c) * this.ratio + u,
                f = (p - c) * this.ratio + u,
                g = (l - u) / this.ratio + c,
                b = (h - u) / this.ratio + c,
                v = Math.max(l, m),
                w = Math.min(h, f),
                y = Math.max(d, g),
                z = Math.min(p, b);
              e = C(e, v, w), t = C(t, y, z)
            } else e = C(e, l, h), t = C(t, d, p);
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
              var i = this.props.bounds.getBoundingClientRect();
              this.targetLeft = i.left, this.targetTop = i.top
            }
            if (this.resizable) {
              var o = this.resizable.getBoundingClientRect(),
                n = o.left,
                s = o.top,
                a = o.right,
                r = o.bottom;
              this.resizableLeft = n, this.resizableRight = a, this.resizableTop = s, this.resizableBottom = r
            }
          }, t.prototype.onResizeStart = function(e, t) {
            if (this.resizable && this.window) {
              var i, o = 0,
                n = 0;
              if (e.nativeEvent && function(e) {
                  return Boolean((e.clientX || 0 === e.clientX) && (e.clientY || 0 === e.clientY))
                }(e.nativeEvent) ? (o = e.nativeEvent.clientX, n = e.nativeEvent.clientY) : e.nativeEvent && I(e.nativeEvent) && (o = e.nativeEvent.touches[0].clientX, n = e.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(e, t, this.resizable)) return;
              this.props.size && (void 0 !== this.props.size.height && this.props.size.height !== this.state.height && this.setState({
                height: this.props.size.height
              }), void 0 !== this.props.size.width && this.props.size.width !== this.state.width && this.setState({
                width: this.props.size.width
              })), this.ratio = "number" == typeof this.props.lockAspectRatio ? this.props.lockAspectRatio : this.size.width / this.size.height;
              var s = this.window.getComputedStyle(this.resizable);
              if ("auto" !== s.flexBasis) {
                var a = this.parentNode;
                if (a) {
                  var r = this.window.getComputedStyle(a).flexDirection;
                  this.flexDir = r.startsWith("row") ? "row" : "column", i = s.flexBasis
                }
              }
              this.setBoundingClientRect(), this.bindEvents();
              var l = {
                original: {
                  x: o,
                  y: n,
                  width: this.size.width,
                  height: this.size.height
                },
                isResizing: !0,
                backgroundStyle: j(j({}, this.state.backgroundStyle), {
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
              if (this.window.TouchEvent && I(e)) try {
                e.preventDefault(), e.stopPropagation()
              } catch (e) {}
              var i = this.props,
                o = i.maxWidth,
                n = i.maxHeight,
                s = i.minWidth,
                a = i.minHeight,
                r = I(e) ? e.touches[0].clientX : e.clientX,
                l = I(e) ? e.touches[0].clientY : e.clientY,
                h = this.state,
                d = h.direction,
                p = h.original,
                c = h.width,
                u = h.height,
                m = this.getParentSize(),
                f = function(e, t, i, o, n, s, a) {
                  return o = F(o, e.width, t, i), n = F(n, e.height, t, i), s = F(s, e.width, t, i), a = F(a, e.height, t, i), {
                    maxWidth: void 0 === o ? void 0 : Number(o),
                    maxHeight: void 0 === n ? void 0 : Number(n),
                    minWidth: void 0 === s ? void 0 : Number(s),
                    minHeight: void 0 === a ? void 0 : Number(a)
                  }
                }(m, this.window.innerWidth, this.window.innerHeight, o, n, s, a);
              o = f.maxWidth, n = f.maxHeight, s = f.minWidth, a = f.minHeight;
              var g = this.calculateNewSizeFromDirection(r, l),
                b = g.newHeight,
                v = g.newWidth,
                w = this.calculateNewMaxFromBoundary(o, n);
              this.props.snap && this.props.snap.x && (v = D(v, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (b = D(b, this.props.snap.y, this.props.snapGap));
              var y = this.calculateNewSizeFromAspectRatio(v, b, {
                width: w.maxWidth,
                height: w.maxHeight
              }, {
                width: s,
                height: a
              });
              if (v = y.newWidth, b = y.newHeight, this.props.grid) {
                var z = O(v, this.props.grid[0]),
                  x = O(b, this.props.grid[1]),
                  S = this.props.snapGap || 0;
                v = 0 === S || Math.abs(z - v) <= S ? z : v, b = 0 === S || Math.abs(x - b) <= S ? x : b
              }
              var _ = {
                width: v - p.width,
                height: b - p.height
              };
              c && "string" == typeof c && (c.endsWith("%") ? v = v / m.width * 100 + "%" : c.endsWith("vw") ? v = v / this.window.innerWidth * 100 + "vw" : c.endsWith("vh") && (v = v / this.window.innerHeight * 100 + "vh")), u && "string" == typeof u && (u.endsWith("%") ? b = b / m.height * 100 + "%" : u.endsWith("vw") ? b = b / this.window.innerWidth * 100 + "vw" : u.endsWith("vh") && (b = b / this.window.innerHeight * 100 + "vh"));
              var N = {
                width: this.createSizeForCssProperty(v, "width"),
                height: this.createSizeForCssProperty(b, "height")
              };
              "row" === this.flexDir ? N.flexBasis = N.width : "column" === this.flexDir && (N.flexBasis = N.height), (0, k.flushSync)((function() {
                t.setState(N)
              })), this.props.onResize && this.props.onResize(e, d, this.resizable, _)
            }
          }, t.prototype.onMouseUp = function(e) {
            var t = this.state,
              i = t.isResizing,
              o = t.direction,
              n = t.original;
            if (i && this.resizable) {
              var s = {
                width: this.size.width - n.width,
                height: this.size.height - n.height
              };
              this.props.onResizeStop && this.props.onResizeStop(e, o, this.resizable, s), this.props.size && this.setState(this.props.size), this.unbindEvents(), this.setState({
                isResizing: !1,
                backgroundStyle: j(j({}, this.state.backgroundStyle), {
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
              i = t.enable,
              o = t.handleStyles,
              n = t.handleClasses,
              s = t.handleWrapperStyle,
              a = t.handleWrapperClass,
              r = t.handleComponent;
            if (!i) return null;
            var l = Object.keys(i).map((function(t) {
              return !1 !== i[t] ? p.createElement(M, {
                key: t,
                direction: t,
                onResizeStart: e.onResizeStart,
                replaceStyles: o && o[t],
                className: n && n[t]
              }, r && r[t] ? r[t] : null) : null
            }));
            return p.createElement("div", {
              className: a,
              style: s
            }, l)
          }, t.prototype.render = function() {
            var e = this,
              t = Object.keys(this.props).reduce((function(t, i) {
                return -1 !== A.indexOf(i) || (t[i] = e.props[i]), t
              }), {}),
              i = j(j(j({
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
            return p.createElement(o, j({
              ref: this.ref,
              style: i,
              className: this.props.className
            }, t), this.state.isResizing && p.createElement("div", {
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
          }, t
        }(p.PureComponent);
      const V = e => {
          let {
            style: t,
            width: i,
            height: o,
            resizable: n,
            field: s,
            input: a,
            meta: l,
            name: h,
            label: d,
            description: c,
            error: u,
            children: m
          } = e;
          const f = () => n ? (0, r.jsx)(U, {
            defaultSize: {
              width: i || "100%",
              height: o || "500px"
            },
            style: {
              paddingBottom: "10px"
            },
            children: (0, p.cloneElement)(m, ...a)
          }) : m;
          return (0, r.jsxs)("div", {
            className: "rockstargames-modules-core-videoplayere8a5daf12553885a40529a38c92c1d67 FieldWrapper-sc-custom jpQZXK",
            style: t,
            children: [(0, r.jsxs)("label", {
              className: "rockstargames-modules-core-videoplayerceac2b2784e621f05ce51dade558df8d FieldLabel-sc-custom dzLxXV",
              htmlFor: h ?? s?.name,
              children: [d ?? s?.label, (0, r.jsx)("span", {
                className: "rockstargames-modules-core-videoplayera0b2c6a5b66b849b487834caa1f6e3c8 FieldDescription-sc-custom cyKzVM",
                children: c ?? s?.description
              })]
            }), (0, r.jsx)(f, {}), (u || l?.error) && (0, r.jsx)("div", {
              className: "FieldError_sc_custom",
              children: u ?? l?.error
            })]
          })
        },
        G = (x("Background Image Gradient"), function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          e.toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), x("Background Image Gradient"), () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => X({
            hero: !1
          })
        }));
      i(1398);
      const X = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,h.v4)()}`
          }
        },
        Y = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        q = e => ({
          ...e,
          name: `_memoq.${e.name}`
        }),
        Q = s.gql`
query VideosList($locale: String!, $cache: Boolean = true, $limit: Int) {
    videos(locale: $locale, limit: $limit) {
        results {
            id
            title
            game {
                title
            }
        }
    }
}
`,
        K = e => {
          let {
            field: t,
            input: i,
            meta: o
          } = e;
          const {
            data: a
          } = (0, s.useQuery)(Q, {
            variables: {
              limit: 1e3
            }
          }), h = n()(a?.videos?.results).groupBy("game.title").map(((e, t) => ({
            gameTitle: t,
            videos: e.map((e => ({
              id: e.id,
              title: e.title
            })))
          }))).value();
          return (0, r.jsx)(V, {
            name: i.name || t.name || t.label,
            label: t.label,
            description: t.description,
            meta: o,
            children: a && h?.length ? (0, r.jsxs)("select", {
              ...i,
              children: [(0, r.jsx)("option", {
                value: "",
                children: "-- Select a video --"
              }), h.map((e => (0, r.jsx)("optgroup", {
                label: e.gameTitle,
                children: e.videos.map((e => (0, r.jsxs)("option", {
                  value: e.id,
                  children: ["(", e.id, ")", " ", e.title]
                }, e.id)))
              }, e.gameTitle)))]
            }) : (0, r.jsx)(l, {
              color: "var(--tina-color-primary, #2296fe)"
            })
          })
        },
        Z = function() {
          let {
            label: e = "Video",
            name: t = "id"
          } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return {
            label: e,
            name: t,
            component: e => {
              let {
                field: t,
                input: i,
                meta: o
              } = e;
              return (0, r.jsx)(K, {
                field: t,
                input: i,
                meta: o
              })
            }
          }
        },
        J = () => ({
          label: "Video",
          fields: [{
            label: "Name",
            name: "name",
            component: "text",
            description: "Block label for internal use only"
          }, Z(), {
            name: "autoplay",
            label: "Auto Play",
            description: "Should the video play as soon as it is loaded?",
            component: "toggle"
          }, G(), z({
            label: "Background Image"
          })],
          defaultItem: () => X({
            wrapper: !0,
            autoplay: !1
          }),
          itemProps: e => Y(e, {
            label: e?.name ? `${e.name} [Video]` : "New [Video]"
          })
        }),
        ee = J
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
          var o = e.type;
          "NamedType" === o.kind && t.add(o.name.value)
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
      var o = {};

      function n(e, t) {
        for (var i = 0; i < e.definitions.length; i++) {
          var o = e.definitions[i];
          if (o.name && o.name.value == t) return o
        }
      }
      t.definitions.forEach((function(e) {
        if (e.name) {
          var t = new Set;
          i(e, t), o[e.name.value] = t
        }
      })), e.exports = t, e.exports.TagList = function(e, t) {
        var i = {
          kind: e.kind,
          definitions: [n(e, t)]
        };
        e.hasOwnProperty("loc") && (i.loc = e.loc);
        var s = o[t] || new Set,
          a = new Set,
          r = new Set;
        for (s.forEach((function(e) {
            r.add(e)
          })); r.size > 0;) {
          var l = r;
          r = new Set, l.forEach((function(e) {
            a.has(e) || (a.add(e), (o[e] || new Set).forEach((function(e) {
              r.add(e)
            })))
          }))
        }
        return a.forEach((function(t) {
          var o = n(e, t);
          o && i.definitions.push(o)
        })), i
      }(t, "TagList")
    }
  }
]);