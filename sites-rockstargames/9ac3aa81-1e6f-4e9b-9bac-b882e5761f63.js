try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "9ac3aa81-1e6f-4e9b-9bac-b882e5761f63", e._sentryDebugIdIdentifier = "sentry-dbid-9ac3aa81-1e6f-4e9b-9bac-b882e5761f63")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [9218], {
    58605(e, r, t) {
      t.d(r, {
        a: () => S
      });
      var o = t(39793),
        n = t(93082),
        l = t(29443),
        a = t(6365),
        i = t(55267),
        s = t(37494);

      function c(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function u(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function d(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? u(Object(t), !0).forEach(function(r) {
            var o, n, l;
            o = e, n = r, l = t[r], (n = c(n)) in o ? Object.defineProperty(o, n, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = l
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : u(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function f(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var p, b, h = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        v = "var(--foundry_9dxgbc2)",
        w = "var(--foundry_9dxgbc3)",
        g = (p = {
          defaultClassName: "foundry_9dxgbc7",
          variantClassNames: {
            size: {
              SM: "foundry_9dxgbc8",
              MD: "foundry_9dxgbc9",
              LG: "foundry_9dxgbca",
              XL: "foundry_9dxgbcb"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (b = e => {
          var r = p.defaultClassName,
            t = d(d({}, p.defaultVariants), e);
          for (var o in t) {
            var n, l = null !== (n = t[o]) && void 0 !== n ? n : p.defaultVariants[o];
            if (null != l) {
              var a = l;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var i = p.variantClassNames[o][a];
              i && (r += " " + i)
            }
          }
          for (var [s, c] of p.compoundVariants) h(s, t, p.defaultVariants) && (r += " " + c);
          return r
        }).variants = () => Object.keys(p.variantClassNames), b.classNames = {
          get base() {
            return p.defaultClassName.split(" ")[0]
          },
          get variants() {
            return f(p.variantClassNames, e => f(e, e => e.split(" ")[0]))
          }
        }, b),
        m = "var(--foundry_9dxgbc0)",
        y = "var(--foundry_9dxgbc1)";
      const S = (0, n.forwardRef)(({
        asChild: e,
        testId: r,
        children: t,
        colorOverride: n,
        label: c,
        size: u = "MD",
        ...d
      }, f) => {
        const p = (0, s.zQ)(),
          b = "string" == typeof u ? u : u?.[p] ?? u.default ?? "MD",
          h = (0, l.v6)({
            className: g({
              size: b
            }),
            "data-testid": r,
            style: (0, a.DI)({
              [m]: n?.pulseColorBackground,
              [y]: n?.pulseColorForeground,
              [v]: n?.gradientColorBackground,
              [w]: n?.gradientColorForeground
            }),
            role: "status",
            "aria-atomic": !0,
            "aria-label": c
          }, d),
          S = e ? i.DX : "div";
        return (0, o.jsx)(S, {
          ref: f,
          ...h,
          children: e ? (0, o.jsx)(i.xV, {
            children: t
          }) : (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)("div", {
              className: "foundry_9dxgbcd"
            }), (0, o.jsx)("div", {
              className: "foundry_9dxgbcc"
            })]
          })
        })
      })
    },
    85678(e, r, t) {
      t.r(r), t.d(r, {
        Corner: () => y,
        Root: () => v,
        Scrollbar: () => g,
        Thumb: () => m,
        Viewport: () => w
      });
      var o = t(39793),
        n = t(52514),
        l = t(29443),
        a = t(93082),
        i = t(59959);

      function s(e) {
        var r = function(e, r) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var o = t.call(e, r);
            if ("object" != typeof o) return o;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e, "string");
        return "symbol" == typeof r ? r : String(r)
      }

      function c(e, r) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var o = Object.getOwnPropertySymbols(e);
          r && (o = o.filter(function(r) {
            return Object.getOwnPropertyDescriptor(e, r).enumerable
          })), t.push.apply(t, o)
        }
        return t
      }

      function u(e) {
        for (var r = 1; r < arguments.length; r++) {
          var t = null != arguments[r] ? arguments[r] : {};
          r % 2 ? c(Object(t), !0).forEach(function(r) {
            var o, n, l;
            o = e, n = r, l = t[r], (n = s(n)) in o ? Object.defineProperty(o, n, {
              value: l,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[n] = l
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : c(Object(t)).forEach(function(r) {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r))
          })
        }
        return e
      }

      function d(e, r) {
        var t = {};
        for (var o in e) t[o] = r(e[o], o);
        return t
      }
      var f, p, b = (e, r, t) => {
          for (var o of Object.keys(e)) {
            var n;
            if (e[o] !== (null !== (n = r[o]) && void 0 !== n ? n : t[o])) return !1
          }
          return !0
        },
        h = (f = {
          defaultClassName: "foundry_hwzz174",
          variantClassNames: {
            isTouchDevice: {
              true: "foundry_hwzz175"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (p = e => {
          var r = f.defaultClassName,
            t = u(u({}, f.defaultVariants), e);
          for (var o in t) {
            var n, l = null !== (n = t[o]) && void 0 !== n ? n : f.defaultVariants[o];
            if (null != l) {
              var a = l;
              "boolean" == typeof a && (a = !0 === a ? "true" : "false");
              var i = f.variantClassNames[o][a];
              i && (r += " " + i)
            }
          }
          for (var [s, c] of f.compoundVariants) b(s, t, f.defaultVariants) && (r += " " + c);
          return r
        }).variants = () => Object.keys(f.variantClassNames), p.classNames = {
          get base() {
            return f.defaultClassName.split(" ")[0]
          },
          get variants() {
            return d(f.variantClassNames, e => d(e, e => e.split(" ")[0]))
          }
        }, p);
      const v = (0, a.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, l.v6)({
            "data-testid": e,
            className: "foundry_hwzz171"
          }, r);
          return (0, o.jsx)(i.bL, {
            ref: t,
            ...n
          })
        }),
        w = (0, a.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, l.v6)({
            "data-testid": e,
            className: "foundry_hwzz172"
          }, r);
          return (0, o.jsx)(i.LM, {
            ref: t,
            ...n
          })
        }),
        g = (0, a.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, l.v6)({
            "data-testid": e,
            className: "foundry_hwzz173"
          }, r);
          return (0, o.jsx)(i.Ze, {
            ref: t,
            ...n
          })
        }),
        m = (0, a.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const a = (0, n.rl)(),
            s = (0, l.v6)({
              "data-testid": e,
              className: h({
                isTouchDevice: a
              })
            }, r);
          return (0, o.jsx)(i.zi, {
            ref: t,
            ...s
          })
        }),
        y = (0, a.forwardRef)(({
          testId: e,
          ...r
        }, t) => {
          const n = (0, l.v6)({
            "data-testid": e
          }, r);
          return (0, o.jsx)(i.OK, {
            ref: t,
            ...n
          })
        })
    },
    59959(e, r, t) {
      t.d(r, {
        LM: () => J,
        OK: () => te,
        Ze: () => ee,
        bL: () => Q,
        zi: () => re
      });
      var o = t(93082),
        n = t(41988),
        l = t(81432),
        a = t(72579),
        i = t(85049),
        s = t(7198),
        c = t(12430),
        u = t(9608),
        d = t(76844),
        f = t(44752),
        p = t(39793),
        b = Object.defineProperty,
        h = (e, r) => b(e, "name", {
          value: r,
          configurable: !0
        });

      function v(e, r) {
        return o.useReducer((e, t) => r[e][t] ?? e, e)
      }
      h(v, "useStateMachine");
      var w = "ScrollArea",
        [g, m] = (0, a.A)(w),
        [y, S] = g(w),
        C = o.forwardRef(h(function(e, r) {
          const {
            __scopeScrollArea: t,
            type: l = "hover",
            dir: a,
            scrollHideDelay: s = 600,
            ...u
          } = e, [d, f] = o.useState(null), [b, h] = o.useState(null), [v, w] = o.useState(null), [g, m] = o.useState(null), [S, C] = o.useState(null), [j, x] = o.useState(0), [T, E] = o.useState(0), [P, _] = o.useState(!1), [O, R] = o.useState(!1), D = (0, i.s)(r, f), A = (0, c.jH)(a);
          return (0, p.jsx)(y, {
            scope: t,
            type: l,
            dir: A,
            scrollHideDelay: s,
            scrollArea: d,
            viewport: b,
            onViewportChange: h,
            content: v,
            onContentChange: w,
            scrollbarX: g,
            onScrollbarXChange: m,
            scrollbarXEnabled: P,
            onScrollbarXEnabledChange: _,
            scrollbarY: S,
            onScrollbarYChange: C,
            scrollbarYEnabled: O,
            onScrollbarYEnabledChange: R,
            onCornerWidthChange: x,
            onCornerHeightChange: E,
            children: (0, p.jsx)(n.sG.div, {
              dir: A,
              ...u,
              ref: D,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": j + "px",
                "--radix-scroll-area-corner-height": T + "px",
                ...e.style
              }
            })
          })
        }, "ScrollArea")),
        j = o.forwardRef(h(function(e, r) {
          const {
            __scopeScrollArea: t,
            children: l,
            nonce: a,
            ...s
          } = e, c = S("ScrollAreaViewport", t), u = o.useRef(null), d = (0, i.s)(r, u, c.onViewportChange);
          return (0, p.jsxs)(p.Fragment, {
            children: [(0, p.jsx)(x, {
              nonce: a
            }), (0, p.jsx)(n.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: d,
              style: {
                overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, p.jsx)("div", {
                ref: c.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: l
              })
            })]
          })
        }, "ScrollAreaViewport")),
        x = o.memo(h(function({
          nonce: e
        }) {
          return (0, p.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: e
          })
        }, "ScrollAreaViewportStyle"), (e, r) => e.nonce === r.nonce),
        T = "ScrollAreaScrollbar",
        E = o.forwardRef(h(function(e, r) {
          const {
            forceMount: t,
            ...n
          } = e, l = S(T, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: a,
            onScrollbarYEnabledChange: i
          } = l, s = "horizontal" === e.orientation;
          return o.useEffect(() => (s ? a(!0) : i(!0), () => {
            s ? a(!1) : i(!1)
          }), [s, a, i]), "hover" === l.type ? (0, p.jsx)(P, {
            ...n,
            ref: r,
            forceMount: t
          }) : "scroll" === l.type ? (0, p.jsx)(_, {
            ...n,
            ref: r,
            forceMount: t
          }) : "auto" === l.type ? (0, p.jsx)(O, {
            ...n,
            ref: r,
            forceMount: t
          }) : "always" === l.type ? (0, p.jsx)(R, {
            ...n,
            ref: r,
            "data-state": "visible"
          }) : null
        }, "ScrollAreaScrollbar")),
        P = o.forwardRef(h(function(e, r) {
          const {
            forceMount: t,
            ...n
          } = e, a = S(T, e.__scopeScrollArea), [i, s] = o.useState(!1);
          return o.useEffect(() => {
            const e = a.scrollArea;
            let r = 0;
            if (e) {
              const t = h(() => {
                  window.clearTimeout(r), s(!0)
                }, "handlePointerEnter"),
                o = h(() => {
                  r = window.setTimeout(() => s(!1), a.scrollHideDelay)
                }, "handlePointerLeave");
              return e.addEventListener("pointerenter", t), e.addEventListener("pointerleave", o), () => {
                window.clearTimeout(r), e.removeEventListener("pointerenter", t), e.removeEventListener("pointerleave", o)
              }
            }
          }, [a.scrollArea, a.scrollHideDelay]), (0, p.jsx)(l.C, {
            present: t || i,
            children: (0, p.jsx)(O, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: r
            })
          })
        }, "ScrollAreaScrollbarHover")),
        _ = o.forwardRef(h(function(e, r) {
          const {
            forceMount: t,
            ...n
          } = e, a = S(T, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = Z(() => u("SCROLL_END"), 100), [c, u] = v("hidden", {
            hidden: {
              SCROLL: "scrolling"
            },
            scrolling: {
              SCROLL_END: "idle",
              POINTER_ENTER: "interacting"
            },
            interacting: {
              SCROLL: "interacting",
              POINTER_LEAVE: "idle"
            },
            idle: {
              HIDE: "hidden",
              SCROLL: "scrolling",
              POINTER_ENTER: "interacting"
            }
          });
          return o.useEffect(() => {
            if ("idle" === c) {
              const e = window.setTimeout(() => u("HIDE"), a.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }, [c, a.scrollHideDelay, u]), o.useEffect(() => {
            const e = a.viewport,
              r = i ? "scrollLeft" : "scrollTop";
            if (e) {
              let t = e[r];
              const o = h(() => {
                const o = e[r];
                t !== o && (u("SCROLL"), s()), t = o
              }, "handleScroll");
              return e.addEventListener("scroll", o), () => e.removeEventListener("scroll", o)
            }
          }, [a.viewport, i, u, s]), (0, p.jsx)(l.C, {
            present: t || "hidden" !== c,
            children: (0, p.jsx)(R, {
              "data-state": "hidden" === c ? "hidden" : "visible",
              ...n,
              ref: r,
              onPointerEnter: (0, f.mK)(e.onPointerEnter, () => u("POINTER_ENTER")),
              onPointerLeave: (0, f.mK)(e.onPointerLeave, () => u("POINTER_LEAVE"))
            })
          })
        }, "ScrollAreaScrollbarScroll")),
        O = o.forwardRef(h(function(e, r) {
          const t = S(T, e.__scopeScrollArea),
            {
              forceMount: n,
              ...a
            } = e,
            [i, s] = o.useState(!1),
            c = "horizontal" === e.orientation,
            u = Z(() => {
              if (t.viewport) {
                const e = t.viewport.offsetWidth < t.viewport.scrollWidth,
                  r = t.viewport.offsetHeight < t.viewport.scrollHeight;
                s(c ? e : r)
              }
            }, 10);
          return $(t.viewport, u), $(t.content, u), (0, p.jsx)(l.C, {
            present: n || i,
            children: (0, p.jsx)(R, {
              "data-state": i ? "visible" : "hidden",
              ...a,
              ref: r
            })
          })
        }, "ScrollAreaScrollbarAuto")),
        R = o.forwardRef(h(function(e, r) {
          const {
            orientation: t = "vertical",
            ...n
          } = e, l = S(T, e.__scopeScrollArea), a = o.useRef(null), i = o.useRef(0), [s, c] = o.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), u = Y(s.viewport, s.content), d = {
            ...n,
            sizes: s,
            onSizesChange: c,
            hasThumb: Boolean(u > 0 && u < 1),
            onThumbChange: h(e => a.current = e, "onThumbChange"),
            onThumbPointerUp: h(() => i.current = 0, "onThumbPointerUp"),
            onThumbPointerDown: h(e => i.current = e, "onThumbPointerDown")
          };

          function f(e, r) {
            return B(e, i.current, s, r)
          }
          return h(f, "getScrollPosition"), "horizontal" === t ? (0, p.jsx)(D, {
            ...d,
            ref: r,
            onThumbPositionChange: () => {
              if (l.viewport && a.current) {
                const e = F(l.viewport.scrollLeft, s, l.dir);
                a.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              l.viewport && (l.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              l.viewport && (l.viewport.scrollLeft = f(e, l.dir))
            }
          }) : "vertical" === t ? (0, p.jsx)(A, {
            ...d,
            ref: r,
            onThumbPositionChange: () => {
              if (l.viewport && a.current) {
                const e = F(l.viewport.scrollTop, s);
                a.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              l.viewport && (l.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              l.viewport && (l.viewport.scrollTop = f(e))
            }
          }) : null
        }, "ScrollAreaScrollbarVisible")),
        D = o.forwardRef(h(function(e, r) {
          const {
            sizes: t,
            onSizesChange: n,
            ...l
          } = e, a = S(T, e.__scopeScrollArea), [s, c] = o.useState(), u = o.useRef(null), d = (0, i.s)(r, u, a.onScrollbarXChange);
          return o.useEffect(() => {
            u.current && c(getComputedStyle(u.current))
          }, [u]), (0, p.jsx)(N, {
            "data-orientation": "horizontal",
            ...l,
            ref: d,
            sizes: t,
            style: {
              bottom: 0,
              left: "rtl" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === a.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": U(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.x),
            onDragScroll: r => e.onDragScroll(r.x),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollLeft + r.deltaX;
                e.onWheelScroll(o), G(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              u.current && a.viewport && s && n({
                content: a.viewport.scrollWidth,
                viewport: a.viewport.offsetWidth,
                scrollbar: {
                  size: u.current.clientWidth,
                  paddingStart: X(s.paddingLeft),
                  paddingEnd: X(s.paddingRight)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarX")),
        A = o.forwardRef(h(function(e, r) {
          const {
            sizes: t,
            onSizesChange: n,
            ...l
          } = e, a = S(T, e.__scopeScrollArea), [s, c] = o.useState(), u = o.useRef(null), d = (0, i.s)(r, u, a.onScrollbarYChange);
          return o.useEffect(() => {
            u.current && c(getComputedStyle(u.current))
          }, [u]), (0, p.jsx)(N, {
            "data-orientation": "vertical",
            ...l,
            ref: d,
            sizes: t,
            style: {
              top: 0,
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": U(t) + "px",
              ...e.style
            },
            onThumbPointerDown: r => e.onThumbPointerDown(r.y),
            onDragScroll: r => e.onDragScroll(r.y),
            onWheelScroll: (r, t) => {
              if (a.viewport) {
                const o = a.viewport.scrollTop + r.deltaY;
                e.onWheelScroll(o), G(o, t) && r.preventDefault()
              }
            },
            onResize: () => {
              u.current && a.viewport && s && n({
                content: a.viewport.scrollHeight,
                viewport: a.viewport.offsetHeight,
                scrollbar: {
                  size: u.current.clientHeight,
                  paddingStart: X(s.paddingTop),
                  paddingEnd: X(s.paddingBottom)
                }
              })
            }
          })
        }, "ScrollAreaScrollbarY")),
        [L, z] = g(T),
        N = o.forwardRef(h(function(e, r) {
          const {
            __scopeScrollArea: t,
            sizes: l,
            hasThumb: a,
            onThumbChange: c,
            onThumbPointerUp: u,
            onThumbPointerDown: d,
            onThumbPositionChange: b,
            onDragScroll: v,
            onWheelScroll: w,
            onResize: g,
            ...m
          } = e, y = S(T, t), [C, j] = o.useState(null), x = (0, i.s)(r, j), E = o.useRef(null), P = o.useRef(""), _ = y.viewport, O = l.content - l.viewport, R = (0, s.c)(w), D = (0, s.c)(b), A = Z(g, 10);

          function z(e) {
            if (E.current) {
              const r = e.clientX - E.current.left,
                t = e.clientY - E.current.top;
              v({
                x: r,
                y: t
              })
            }
          }
          return h(z, "handleDragScroll"), o.useEffect(() => {
            const e = h(e => {
              const r = e.target,
                t = C?.contains(r);
              t && R(e, O)
            }, "handleWheel");
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }, [_, C, O, R]), o.useEffect(D, [l, D]), $(C, A), $(y.content, A), (0, p.jsx)(L, {
            scope: t,
            scrollbar: C,
            hasThumb: a,
            onThumbChange: (0, s.c)(c),
            onThumbPointerUp: (0, s.c)(u),
            onThumbPositionChange: D,
            onThumbPointerDown: (0, s.c)(d),
            children: (0, p.jsx)(n.sG.div, {
              ...m,
              ref: x,
              style: {
                position: "absolute",
                ...m.style
              },
              onPointerDown: (0, f.mK)(e.onPointerDown, e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), E.current = C.getBoundingClientRect(), P.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", y.viewport && (y.viewport.style.scrollBehavior = "auto"), z(e))
              }),
              onPointerMove: (0, f.mK)(e.onPointerMove, z),
              onPointerUp: (0, f.mK)(e.onPointerUp, e => {
                const r = e.target;
                r.hasPointerCapture(e.pointerId) && r.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = P.current, y.viewport && (y.viewport.style.scrollBehavior = ""), E.current = null
              })
            })
          })
        }, "ScrollAreaScrollbarImpl")),
        k = "ScrollAreaThumb",
        I = o.forwardRef(h(function(e, r) {
          const {
            forceMount: t,
            ...o
          } = e, n = z(k, e.__scopeScrollArea);
          return (0, p.jsx)(l.C, {
            present: t || n.hasThumb,
            children: (0, p.jsx)(M, {
              ref: r,
              ...o
            })
          })
        }, "ScrollAreaThumb")),
        M = o.forwardRef(h(function(e, r) {
          const {
            __scopeScrollArea: t,
            style: l,
            ...a
          } = e, s = S(k, t), c = z(k, t), {
            onThumbPositionChange: u
          } = c, d = (0, i.s)(r, c.onThumbChange), b = o.useRef(void 0), v = Z(() => {
            b.current && (b.current(), b.current = void 0)
          }, 100);
          return o.useEffect(() => {
            const e = s.viewport;
            if (e) {
              const r = h(() => {
                if (v(), !b.current) {
                  const r = q(e, u);
                  b.current = r, u()
                }
              }, "handleScroll");
              return u(), e.addEventListener("scroll", r), () => e.removeEventListener("scroll", r)
            }
          }, [s.viewport, v, u]), (0, p.jsx)(n.sG.div, {
            "data-state": c.hasThumb ? "visible" : "hidden",
            ...a,
            ref: d,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...l
            },
            onPointerDownCapture: (0, f.mK)(e.onPointerDownCapture, e => {
              const r = e.target.getBoundingClientRect(),
                t = e.clientX - r.left,
                o = e.clientY - r.top;
              c.onThumbPointerDown({
                x: t,
                y: o
              })
            }),
            onPointerUp: (0, f.mK)(e.onPointerUp, c.onThumbPointerUp)
          })
        }, "ScrollAreaThumbImpl")),
        V = "ScrollAreaCorner",
        H = o.forwardRef(h(function(e, r) {
          const t = S(V, e.__scopeScrollArea),
            o = Boolean(t.scrollbarX && t.scrollbarY);
          return "scroll" !== t.type && o ? (0, p.jsx)(W, {
            ...e,
            ref: r
          }) : null
        }, "ScrollAreaCorner")),
        W = o.forwardRef(h(function(e, r) {
          const {
            __scopeScrollArea: t,
            ...l
          } = e, a = S(V, t), [i, s] = o.useState(0), [c, u] = o.useState(0), d = Boolean(i && c), {
            onCornerWidthChange: f,
            onCornerHeightChange: b
          } = a;
          return $(a.scrollbarX, () => {
            const e = a.scrollbarX?.offsetHeight || 0;
            a.onCornerHeightChange(e), u(e)
          }), $(a.scrollbarY, () => {
            const e = a.scrollbarY?.offsetWidth || 0;
            a.onCornerWidthChange(e), s(e)
          }), o.useEffect(() => () => {
            f(0), b(0)
          }, [f, b]), d ? (0, p.jsx)(n.sG.div, {
            ...l,
            ref: r,
            style: {
              width: i,
              height: c,
              position: "absolute",
              right: "ltr" === a.dir ? 0 : void 0,
              left: "rtl" === a.dir ? 0 : void 0,
              bottom: 0,
              ...e.style
            }
          }) : null
        }, "ScrollAreaCornerImpl"));

      function X(e) {
        return e ? parseInt(e, 10) : 0
      }

      function Y(e, r) {
        const t = e / r;
        return isNaN(t) ? 0 : t
      }

      function U(e) {
        const r = Y(e.viewport, e.content),
          t = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          o = (e.scrollbar.size - t) * r;
        return Math.max(o, 18)
      }

      function B(e, r, t, o = "ltr") {
        const n = U(t),
          l = r || n / 2,
          a = n - l,
          i = t.scrollbar.paddingStart + l,
          s = t.scrollbar.size - t.scrollbar.paddingEnd - a,
          c = t.content - t.viewport;
        return K([i, s], "ltr" === o ? [0, c] : [-1 * c, 0])(e)
      }

      function F(e, r, t = "ltr") {
        const o = U(r),
          n = r.scrollbar.paddingStart + r.scrollbar.paddingEnd,
          l = r.scrollbar.size - n,
          a = r.content - r.viewport,
          i = l - o,
          s = "ltr" === t ? [0, a] : [-1 * a, 0],
          c = (0, d.q)(e, s);
        return K([0, a], [0, i])(c)
      }

      function K(e, r) {
        return t => {
          if (e[0] === e[1] || r[0] === r[1]) return r[0];
          const o = (r[1] - r[0]) / (e[1] - e[0]);
          return r[0] + o * (t - e[0])
        }
      }

      function G(e, r) {
        return e > 0 && e < r
      }
      h(X, "toInt"), h(Y, "getThumbRatio"), h(U, "getThumbSize"), h(B, "getScrollPositionFromPointer"), h(F, "getThumbOffsetFromScroll"), h(K, "linearScale"), h(G, "isScrollingWithinScrollbarBounds");
      var q = h((e, r = () => {}) => {
        let t = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          o = 0;
        return h(function n() {
          const l = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            a = t.left !== l.left,
            i = t.top !== l.top;
          (a || i) && r(), t = l, o = window.requestAnimationFrame(n)
        }, "loop")(), () => window.cancelAnimationFrame(o)
      }, "addUnlinkedScrollListener");

      function Z(e, r) {
        const t = (0, s.c)(e),
          n = o.useRef(0);
        return o.useEffect(() => () => window.clearTimeout(n.current), []), o.useCallback(() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(t, r)
        }, [t, r])
      }

      function $(e, r) {
        const t = (0, s.c)(r);
        (0, u.N)(() => {
          let r = 0;
          if (e) {
            const o = new ResizeObserver(() => {
              cancelAnimationFrame(r), r = window.requestAnimationFrame(t)
            });
            return o.observe(e), () => {
              window.cancelAnimationFrame(r), o.unobserve(e)
            }
          }
        }, [e, t])
      }
      h(Z, "useDebounceCallback"), h($, "useResizeObserver");
      var Q = C,
        J = j,
        ee = E,
        re = I,
        te = H
    }
  }
]);