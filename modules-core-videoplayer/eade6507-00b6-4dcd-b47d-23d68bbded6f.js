try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "eade6507-00b6-4dcd-b47d-23d68bbded6f", e._sentryDebugIdIdentifier = "sentry-dbid-eade6507-00b6-4dcd-b47d-23d68bbded6f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "dde524f11ca2e811c948d868f62c7d544de61cc3",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "dde524f11ca2e811c948d868f62c7d544de61cc3"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [954, 1907], {
    61398: e => {
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
    },
    70954: (e, t, i) => {
      "use strict";
      e.exports = i(92834)
    },
    91907: (e, t, i) => {
      "use strict";
      i.r(t), i.d(t, {
        RockstarVideoPlayer: () => Z,
        VideoField: () => K,
        default: () => J
      });
      var o = i(16188),
        n = i.n(o),
        s = i(95966);
      const a = "rockstargames-modules-core-videoplayera19bcd2b98d91e60c43b9de146e20f4e";
      var r = i(70954);
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
      var h = i(81569);
      const d = {
        alt: "Images Need Alt Text",
        badge: null,
        splitter: " ",
        role: "",
        caption: ""
      };
      var p = i(62229);
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
        x = e => {
          let {
            game: t = null,
            label: i = "Image Configuration"
          } = e;
          const o = [Y({
            name: "alt",
            label: "Alt Text",
            component: "text"
          }), Y({
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
          }, Y({
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
          }), Y({
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
            defaultItem: () => V(d),
            itemProps: e => X(e, {
              label: e?.name ? `${e.name} [Image]` : "New [Image]"
            })
          }
        };
      i(81788);
      const z = function() {
        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
        return {
          label: `${e} Line`,
          name: `${e}_line`,
          component: () => (0, r.jsx)("hr", {})
        }
      };
      var S, k = i(44853),
        _ = function() {
          return _ = Object.assign || function(e) {
            for (var t, i = 1, o = arguments.length; i < o; i++)
              for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }, _.apply(this, arguments)
        },
        N = {
          width: "100%",
          height: "10px",
          top: "0px",
          left: "0px",
          cursor: "row-resize"
        },
        R = {
          width: "10px",
          height: "100%",
          top: "0px",
          left: "0px",
          cursor: "col-resize"
        },
        W = {
          width: "20px",
          height: "20px",
          position: "absolute",
          zIndex: 1
        },
        E = {
          top: _(_({}, N), {
            top: "-5px"
          }),
          right: _(_({}, R), {
            left: void 0,
            right: "-5px"
          }),
          bottom: _(_({}, N), {
            top: void 0,
            bottom: "-5px"
          }),
          left: _(_({}, R), {
            left: "-5px"
          }),
          topRight: _(_({}, W), {
            right: "-10px",
            top: "-10px",
            cursor: "ne-resize"
          }),
          bottomRight: _(_({}, W), {
            right: "-10px",
            bottom: "-10px",
            cursor: "se-resize"
          }),
          bottomLeft: _(_({}, W), {
            left: "-10px",
            bottom: "-10px",
            cursor: "sw-resize"
          }),
          topLeft: _(_({}, W), {
            left: "-10px",
            top: "-10px",
            cursor: "nw-resize"
          })
        },
        B = (0, p.memo)((function(e) {
          var t = e.onResizeStart,
            i = e.direction,
            o = e.children,
            n = e.replaceStyles,
            s = e.className,
            a = (0, p.useCallback)((function(e) {
              t(e, i)
            }), [t, i]),
            l = (0, p.useCallback)((function(e) {
              t(e, i)
            }), [t, i]),
            h = (0, p.useMemo)((function() {
              return _(_({
                position: "absolute",
                userSelect: "none"
              }, E[i]), null != n ? n : {})
            }), [n, i]);
          return (0, r.jsx)("div", {
            className: s || void 0,
            style: h,
            onMouseDown: a,
            onTouchStart: l,
            children: o
          })
        })),
        M = (S = function(e, t) {
          return S = Object.setPrototypeOf || {
            __proto__: []
          }
          instanceof Array && function(e, t) {
            e.__proto__ = t
          } || function(e, t) {
            for (var i in t) Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i])
          }, S(e, t)
        }, function(e, t) {
          if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

          function i() {
            this.constructor = e
          }
          S(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
        }),
        L = function() {
          return L = Object.assign || function(e) {
            for (var t, i = 1, o = arguments.length; i < o; i++)
              for (var n in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
            return e
          }, L.apply(this, arguments)
        },
        T = {
          width: "auto",
          height: "auto"
        },
        j = function(e, t, i) {
          return Math.max(Math.min(e, i), t)
        },
        C = function(e, t, i) {
          var o = Math.round(e / t);
          return o * t + i * (o - 1)
        },
        I = function(e, t) {
          return new RegExp(e, "i").test(t)
        },
        H = function(e) {
          return Boolean(e.touches && e.touches.length)
        },
        O = function(e, t, i) {
          void 0 === i && (i = 0);
          var o = t.reduce((function(i, o, n) {
              return Math.abs(o - e) < Math.abs(t[i] - e) ? n : i
            }), 0),
            n = Math.abs(t[o] - e);
          return 0 === i || n < i ? t[o] : e
        },
        D = function(e) {
          return "auto" === (e = e.toString()) || e.endsWith("px") || e.endsWith("%") || e.endsWith("vh") || e.endsWith("vw") || e.endsWith("vmax") || e.endsWith("vmin") ? e : "".concat(e, "px")
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
        P = ["as", "ref", "style", "className", "grid", "gridGap", "snap", "bounds", "boundsByDirection", "size", "defaultSize", "minWidth", "minHeight", "maxWidth", "maxHeight", "lockAspectRatio", "lockAspectRatioExtraWidth", "lockAspectRatioExtraHeight", "enable", "handleStyles", "handleClasses", "handleWrapperStyle", "handleWrapperClass", "children", "onResizeStart", "onResize", "onResizeStop", "handleComponent", "scale", "resizeRatio", "snapGap"],
        A = "__resizable_base__",
        G = function(e) {
          function t(t) {
            var i, o, n, s, a = e.call(this, t) || this;
            return a.ratio = 1, a.resizable = null, a.parentLeft = 0, a.parentTop = 0, a.resizableLeft = 0, a.resizableRight = 0, a.resizableTop = 0, a.resizableBottom = 0, a.targetLeft = 0, a.targetTop = 0, a.delta = {
              width: 0,
              height: 0
            }, a.appendBase = function() {
              if (!a.resizable || !a.window) return null;
              var e = a.parentNode;
              if (!e) return null;
              var t = a.window.document.createElement("div");
              return t.style.width = "100%", t.style.height = "100%", t.style.position = "absolute", t.style.transform = "scale(0, 0)", t.style.left = "0", t.style.flex = "0 0 100%", t.classList ? t.classList.add(A) : t.className += A, e.appendChild(t), t
            }, a.removeBase = function(e) {
              var t = a.parentNode;
              t && t.removeChild(e)
            }, a.state = {
              isResizing: !1,
              width: null !== (o = null === (i = a.propsSize) || void 0 === i ? void 0 : i.width) && void 0 !== o ? o : "auto",
              height: null !== (s = null === (n = a.propsSize) || void 0 === n ? void 0 : n.height) && void 0 !== s ? s : "auto",
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
            }, a.onResizeStart = a.onResizeStart.bind(a), a.onMouseMove = a.onMouseMove.bind(a), a.onMouseUp = a.onMouseUp.bind(a), a
          }
          return M(t, e), Object.defineProperty(t.prototype, "parentNode", {
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
                  var i;
                  if (void 0 === e.state[t] || "auto" === e.state[t]) return "auto";
                  if (e.propsSize && e.propsSize[t] && (null === (i = e.propsSize[t]) || void 0 === i ? void 0 : i.toString().endsWith("%"))) {
                    if (e.state[t].toString().endsWith("%")) return e.state[t].toString();
                    var o = e.getParentSize(),
                      n = Number(e.state[t].toString().replace("px", "")) / o[t] * 100;
                    return "".concat(n, "%")
                  }
                  return D(e.state[t])
                };
              return {
                width: t && void 0 !== t.width && !this.state.isResizing ? D(t.width) : i("width"),
                height: t && void 0 !== t.height && !this.state.isResizing ? D(t.height) : i("height")
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
              a = n && I("left", s),
              r = n && I("top", s);
            if ("parent" === this.props.bounds) {
              var l = this.parentNode;
              l && (i = a ? this.resizableRight - this.parentLeft : l.offsetWidth + (this.parentLeft - this.resizableLeft), o = r ? this.resizableBottom - this.parentTop : l.offsetHeight + (this.parentTop - this.resizableTop))
            } else "window" === this.props.bounds ? this.window && (i = a ? this.resizableRight : this.window.innerWidth - this.resizableLeft, o = r ? this.resizableBottom : this.window.innerHeight - this.resizableTop) : this.props.bounds && (i = a ? this.resizableRight - this.targetLeft : this.props.bounds.offsetWidth + (this.targetLeft - this.resizableLeft), o = r ? this.resizableBottom - this.targetTop : this.props.bounds.offsetHeight + (this.targetTop - this.resizableTop));
            return i && Number.isFinite(i) && (e = e && e < i ? e : i), o && Number.isFinite(o) && (t = t && t < o ? t : o), {
              maxWidth: e,
              maxHeight: t
            }
          }, t.prototype.calculateNewSizeFromDirection = function(e, t) {
            var i, o = this.props.scale || 1,
              n = (i = this.props.resizeRatio || 1, Array.isArray(i) ? i : [i, i]),
              s = n[0],
              a = n[1],
              r = this.state,
              l = r.direction,
              h = r.original,
              d = this.props,
              p = d.lockAspectRatio,
              c = d.lockAspectRatioExtraHeight,
              u = d.lockAspectRatioExtraWidth,
              m = h.width,
              f = h.height,
              g = c || 0,
              b = u || 0;
            return I("right", l) && (m = h.width + (e - h.x) * s / o, p && (f = (m - b) / this.ratio + g)), I("left", l) && (m = h.width - (e - h.x) * s / o, p && (f = (m - b) / this.ratio + g)), I("bottom", l) && (f = h.height + (t - h.y) * a / o, p && (m = (f - g) * this.ratio + b)), I("top", l) && (f = h.height - (t - h.y) * a / o, p && (m = (f - g) * this.ratio + b)), {
              newWidth: m,
              newHeight: f
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
                x = Math.min(p, b);
              e = j(e, v, w), t = j(t, y, x)
            } else e = j(e, l, h), t = j(t, d, p);
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
              var o = this.props.bounds.getBoundingClientRect();
              this.targetLeft = o.left * e, this.targetTop = o.top * e
            }
            if (this.resizable) {
              var n = this.resizable.getBoundingClientRect(),
                s = n.left,
                a = n.top,
                r = n.right,
                l = n.bottom;
              this.resizableLeft = s * e, this.resizableRight = r * e, this.resizableTop = a * e, this.resizableBottom = l * e
            }
          }, t.prototype.onResizeStart = function(e, t) {
            if (this.resizable && this.window) {
              var i, o = 0,
                n = 0;
              if (e.nativeEvent && function(e) {
                  return Boolean((e.clientX || 0 === e.clientX) && (e.clientY || 0 === e.clientY))
                }(e.nativeEvent) ? (o = e.nativeEvent.clientX, n = e.nativeEvent.clientY) : e.nativeEvent && H(e.nativeEvent) && (o = e.nativeEvent.touches[0].clientX, n = e.nativeEvent.touches[0].clientY), this.props.onResizeStart && this.resizable && !1 === this.props.onResizeStart(e, t, this.resizable)) return;
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
                backgroundStyle: L(L({}, this.state.backgroundStyle), {
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
              if (this.window.TouchEvent && H(e)) try {
                e.preventDefault(), e.stopPropagation()
              } catch (e) {}
              var i = this.props,
                o = i.maxWidth,
                n = i.maxHeight,
                s = i.minWidth,
                a = i.minHeight,
                r = H(e) ? e.touches[0].clientX : e.clientX,
                l = H(e) ? e.touches[0].clientY : e.clientY,
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
              this.props.snap && this.props.snap.x && (v = O(v, this.props.snap.x, this.props.snapGap)), this.props.snap && this.props.snap.y && (b = O(b, this.props.snap.y, this.props.snapGap));
              var y = this.calculateNewSizeFromAspectRatio(v, b, {
                width: w.maxWidth,
                height: w.maxHeight
              }, {
                width: s,
                height: a
              });
              if (v = y.newWidth, b = y.newHeight, this.props.grid) {
                var x = C(v, this.props.grid[0], this.props.gridGap ? this.props.gridGap[0] : 0),
                  z = C(b, this.props.grid[1], this.props.gridGap ? this.props.gridGap[1] : 0),
                  S = this.props.snapGap || 0;
                v = 0 === S || Math.abs(x - v) <= S ? x : v, b = 0 === S || Math.abs(z - b) <= S ? z : b
              }
              var _ = {
                width: v - p.width,
                height: b - p.height
              };
              if (this.delta = _, c && "string" == typeof c)
                if (c.endsWith("%")) {
                  var N = v / m.width * 100;
                  v = "".concat(N, "%")
                } else if (c.endsWith("vw")) {
                var R = v / this.window.innerWidth * 100;
                v = "".concat(R, "vw")
              } else if (c.endsWith("vh")) {
                var W = v / this.window.innerHeight * 100;
                v = "".concat(W, "vh")
              }
              u && "string" == typeof u && (u.endsWith("%") ? (N = b / m.height * 100, b = "".concat(N, "%")) : u.endsWith("vw") ? (R = b / this.window.innerWidth * 100, b = "".concat(R, "vw")) : u.endsWith("vh") && (W = b / this.window.innerHeight * 100, b = "".concat(W, "vh")));
              var E = {
                width: this.createSizeForCssProperty(v, "width"),
                height: this.createSizeForCssProperty(b, "height")
              };
              "row" === this.flexDir ? E.flexBasis = E.width : "column" === this.flexDir && (E.flexBasis = E.height);
              var B = this.state.width !== E.width,
                M = this.state.height !== E.height,
                L = this.state.flexBasis !== E.flexBasis,
                T = B || M || L;
              T && (0, k.flushSync)((function() {
                t.setState(E)
              })), this.props.onResize && T && this.props.onResize(e, d, this.resizable, _)
            }
          }, t.prototype.onMouseUp = function(e) {
            var t, i, o = this.state,
              n = o.isResizing,
              s = o.direction;
            o.original, n && this.resizable && (this.props.onResizeStop && this.props.onResizeStop(e, s, this.resizable, this.delta), this.props.size && this.setState({
              width: null !== (t = this.props.size.width) && void 0 !== t ? t : "auto",
              height: null !== (i = this.props.size.height) && void 0 !== i ? i : "auto"
            }), this.unbindEvents(), this.setState({
              isResizing: !1,
              backgroundStyle: L(L({}, this.state.backgroundStyle), {
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
              n = t.handleClasses,
              s = t.handleWrapperStyle,
              a = t.handleWrapperClass,
              l = t.handleComponent;
            if (!i) return null;
            var h = Object.keys(i).map((function(t) {
              return !1 !== i[t] ? (0, r.jsx)(B, {
                direction: t,
                onResizeStart: e.onResizeStart,
                replaceStyles: o && o[t],
                className: n && n[t],
                children: l && l[t] ? l[t] : null
              }, t) : null
            }));
            return (0, r.jsx)("div", {
              className: a,
              style: s,
              children: h
            })
          }, t.prototype.render = function() {
            var e = this,
              t = Object.keys(this.props).reduce((function(t, i) {
                return -1 !== P.indexOf(i) || (t[i] = e.props[i]), t
              }), {}),
              i = L(L(L({
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
            return (0, r.jsxs)(o, L({
              style: i,
              className: this.props.className
            }, t, {
              ref: function(t) {
                t && (e.resizable = t)
              },
              children: [this.state.isResizing && (0, r.jsx)("div", {
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
        }(p.PureComponent);
      const $ = e => {
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
          const f = () => n ? (0, r.jsx)(G, {
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
        U = (z("Background Image Gradient"), function() {
          let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Label";
          e.toLowerCase().split(" ").join("_")
        }("Background Image Gradient"), z("Background Image Gradient"), () => ({
          name: "hero",
          label: "Is this a lead asset?",
          component: "toggle",
          defaultValue: !1,
          defaultItem: () => V({
            hero: !1
          })
        }));
      i(61398);
      const V = function() {
          return {
            ...arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            key: `key_${(0,h.v4)()}`
          }
        },
        X = function(e) {
          return {
            ...arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            key: e.key
          }
        },
        Y = e => ({
          ...e,
          name: `_memoq.${e.name}`
        }),
        q = s.gql`
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
        Q = e => {
          let {
            field: t,
            input: i,
            meta: o
          } = e;
          const {
            data: a
          } = (0, s.useQuery)(q, {
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
          return (0, r.jsx)($, {
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
        K = function() {
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
              return (0, r.jsx)(Q, {
                field: t,
                input: i,
                meta: o
              })
            }
          }
        },
        Z = () => ({
          label: "Video",
          fields: [{
            label: "Name",
            name: "name",
            component: "text",
            description: "Block label for internal use only"
          }, K(), {
            name: "autoplay",
            label: "Auto Play",
            description: "Should the video play as soon as it is loaded?",
            component: "toggle"
          }, U(), x({
            label: "Background Image"
          })],
          defaultItem: () => V({
            wrapper: !0,
            autoplay: !1
          }),
          itemProps: e => X(e, {
            label: e?.name ? `${e.name} [Video]` : "New [Video]"
          })
        }),
        J = Z
    },
    92834: (e, t, i) => {
      "use strict";
      var o = i(62229),
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
    }
  }
]);