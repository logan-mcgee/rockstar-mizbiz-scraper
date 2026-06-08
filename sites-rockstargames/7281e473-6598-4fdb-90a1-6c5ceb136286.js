try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "7281e473-6598-4fdb-90a1-6c5ceb136286", e._sentryDebugIdIdentifier = "sentry-dbid-7281e473-6598-4fdb-90a1-6c5ceb136286")
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
  [5368], {
    23028(e, t, n) {
      n.d(t, {
        N: () => l
      });
      var o = n(93082),
        r = n(53582),
        i = n(50446),
        s = n(2976),
        a = n(39793);

      function l(e) {
        const t = e + "CollectionProvider",
          [n, l] = (0, r.A)(t),
          [c, f] = n(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: t,
              children: n
            } = e, r = o.useRef(null), i = o.useRef(new Map).current;
            return (0, a.jsx)(c, {
              scope: t,
              itemMap: i,
              collectionRef: r,
              children: n
            })
          };
        u.displayName = t;
        const d = e + "CollectionSlot",
          p = (0, s.TL)(d),
          h = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: o
            } = e, r = f(d, n), s = (0, i.s)(t, r.collectionRef);
            return (0, a.jsx)(p, {
              ref: s,
              children: o
            })
          });
        h.displayName = d;
        const m = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          y = (0, s.TL)(m),
          w = o.forwardRef((e, t) => {
            const {
              scope: n,
              children: r,
              ...s
            } = e, l = o.useRef(null), c = (0, i.s)(t, l), u = f(m, n);
            return o.useEffect(() => (u.itemMap.set(l, {
              ref: l,
              ...s
            }), () => {
              u.itemMap.delete(l)
            })), (0, a.jsx)(y, {
              [g]: "",
              ref: c,
              children: r
            })
          });
        return w.displayName = m, [{
          Provider: u,
          Slot: h,
          ItemSlot: w
        }, function(t) {
          const n = f(e + "CollectionConsumer", t);
          return o.useCallback(() => {
            const e = n.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(n.itemMap.values()).sort((e, n) => t.indexOf(e.ref.current) - t.indexOf(n.ref.current))
          }, [n.collectionRef, n.itemMap])
        }, l]
      }
      Map
    },
    93689(e, t, n) {
      n.d(t, {
        jH: () => i
      });
      var o = n(93082),
        r = (n(39793), o.createContext(void 0));

      function i(e) {
        const t = o.useContext(r);
        return e || t || "ltr"
      }
    },
    41421(e, t, n) {
      n.d(t, {
        Mz: () => X,
        UC: () => q,
        ZL: () => G,
        bL: () => K,
        bm: () => U,
        i3: () => Z,
        l9: () => Y
      });
      var o = n(93082),
        r = n(8316),
        i = n(50446),
        s = n(53582),
        a = n(17028),
        l = n(91685),
        c = n(83876),
        f = n(96883),
        u = n(55677),
        d = n(2823),
        p = n(47306),
        h = n(66704),
        m = n(2976),
        g = n(1531),
        y = n(45787),
        w = n(35328),
        v = n(39793),
        x = "Popover",
        [b, R] = (0, s.A)(x, [u.Bk]),
        A = (0, u.Bk)(),
        [C, P] = b(x),
        O = e => {
          const {
            __scopePopover: t,
            children: n,
            open: r,
            defaultOpen: i,
            onOpenChange: s,
            modal: a = !1
          } = e, l = A(t), c = o.useRef(null), [d, p] = o.useState(!1), [h, m] = (0, g.i)({
            prop: r,
            defaultProp: i ?? !1,
            onChange: s,
            caller: x
          });
          return (0, v.jsx)(u.bL, {
            ...l,
            children: (0, v.jsx)(C, {
              scope: t,
              contentId: (0, f.B)(),
              triggerRef: c,
              open: h,
              onOpenChange: m,
              onOpenToggle: o.useCallback(() => m(e => !e), [m]),
              hasCustomAnchor: d,
              onCustomAnchorAdd: o.useCallback(() => p(!0), []),
              onCustomAnchorRemove: o.useCallback(() => p(!1), []),
              modal: a,
              children: n
            })
          })
        };
      O.displayName = x;
      var S = "PopoverAnchor",
        E = o.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...r
          } = e, i = P(S, n), s = A(n), {
            onCustomAnchorAdd: a,
            onCustomAnchorRemove: l
          } = i;
          return o.useEffect(() => (a(), () => l()), [a, l]), (0, v.jsx)(u.Mz, {
            ...s,
            ...r,
            ref: t
          })
        });
      E.displayName = S;
      var D = "PopoverTrigger",
        _ = o.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...o
          } = e, s = P(D, n), a = A(n), l = (0, i.s)(t, s.triggerRef), c = (0, v.jsx)(h.sG.button, {
            type: "button",
            "aria-haspopup": "dialog",
            "aria-expanded": s.open,
            "aria-controls": s.contentId,
            "data-state": V(s.open),
            ...o,
            ref: l,
            onClick: (0, r.mK)(e.onClick, s.onOpenToggle)
          });
          return s.hasCustomAnchor ? c : (0, v.jsx)(u.Mz, {
            asChild: !0,
            ...a,
            children: c
          })
        });
      _.displayName = D;
      var k = "PopoverPortal",
        [M, T] = b(k, {
          forceMount: void 0
        }),
        L = e => {
          const {
            __scopePopover: t,
            forceMount: n,
            children: o,
            container: r
          } = e, i = P(k, t);
          return (0, v.jsx)(M, {
            scope: t,
            forceMount: n,
            children: (0, v.jsx)(p.C, {
              present: n || i.open,
              children: (0, v.jsx)(d.Z, {
                asChild: !0,
                container: r,
                children: o
              })
            })
          })
        };
      L.displayName = k;
      var j = "PopoverContent",
        F = o.forwardRef((e, t) => {
          const n = T(j, e.__scopePopover),
            {
              forceMount: o = n.forceMount,
              ...r
            } = e,
            i = P(j, e.__scopePopover);
          return (0, v.jsx)(p.C, {
            present: o || i.open,
            children: i.modal ? (0, v.jsx)(H, {
              ...r,
              ref: t
            }) : (0, v.jsx)(W, {
              ...r,
              ref: t
            })
          })
        });
      F.displayName = j;
      var N = (0, m.TL)("PopoverContent.RemoveScroll"),
        H = o.forwardRef((e, t) => {
          const n = P(j, e.__scopePopover),
            s = o.useRef(null),
            a = (0, i.s)(t, s),
            l = o.useRef(!1);
          return o.useEffect(() => {
            const e = s.current;
            if (e) return (0, y.Eq)(e)
          }, []), (0, v.jsx)(w.A, {
            as: N,
            allowPinchZoom: !0,
            children: (0, v.jsx)(z, {
              ...e,
              ref: a,
              trapFocus: n.open,
              disableOutsidePointerEvents: !0,
              onCloseAutoFocus: (0, r.mK)(e.onCloseAutoFocus, e => {
                e.preventDefault(), l.current || n.triggerRef.current?.focus()
              }),
              onPointerDownOutside: (0, r.mK)(e.onPointerDownOutside, e => {
                const t = e.detail.originalEvent,
                  n = 0 === t.button && !0 === t.ctrlKey,
                  o = 2 === t.button || n;
                l.current = o
              }, {
                checkForDefaultPrevented: !1
              }),
              onFocusOutside: (0, r.mK)(e.onFocusOutside, e => e.preventDefault(), {
                checkForDefaultPrevented: !1
              })
            })
          })
        }),
        W = o.forwardRef((e, t) => {
          const n = P(j, e.__scopePopover),
            r = o.useRef(!1),
            i = o.useRef(!1);
          return (0, v.jsx)(z, {
            ...e,
            ref: t,
            trapFocus: !1,
            disableOutsidePointerEvents: !1,
            onCloseAutoFocus: t => {
              e.onCloseAutoFocus?.(t), t.defaultPrevented || (r.current || n.triggerRef.current?.focus(), t.preventDefault()), r.current = !1, i.current = !1
            },
            onInteractOutside: t => {
              e.onInteractOutside?.(t), t.defaultPrevented || (r.current = !0, "pointerdown" === t.detail.originalEvent.type && (i.current = !0));
              const o = t.target,
                s = n.triggerRef.current?.contains(o);
              s && t.preventDefault(), "focusin" === t.detail.originalEvent.type && i.current && t.preventDefault()
            }
          })
        }),
        z = o.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            trapFocus: o,
            onOpenAutoFocus: r,
            onCloseAutoFocus: i,
            disableOutsidePointerEvents: s,
            onEscapeKeyDown: f,
            onPointerDownOutside: d,
            onFocusOutside: p,
            onInteractOutside: h,
            ...m
          } = e, g = P(j, n), y = A(n);
          return (0, l.Oh)(), (0, v.jsx)(c.n, {
            asChild: !0,
            loop: !0,
            trapped: o,
            onMountAutoFocus: r,
            onUnmountAutoFocus: i,
            children: (0, v.jsx)(a.qW, {
              asChild: !0,
              disableOutsidePointerEvents: s,
              onInteractOutside: h,
              onEscapeKeyDown: f,
              onPointerDownOutside: d,
              onFocusOutside: p,
              onDismiss: () => g.onOpenChange(!1),
              children: (0, v.jsx)(u.UC, {
                "data-state": V(g.open),
                role: "dialog",
                id: g.contentId,
                ...y,
                ...m,
                ref: t,
                style: {
                  ...m.style,
                  "--radix-popover-content-transform-origin": "var(--radix-popper-transform-origin)",
                  "--radix-popover-content-available-width": "var(--radix-popper-available-width)",
                  "--radix-popover-content-available-height": "var(--radix-popper-available-height)",
                  "--radix-popover-trigger-width": "var(--radix-popper-anchor-width)",
                  "--radix-popover-trigger-height": "var(--radix-popper-anchor-height)"
                }
              })
            })
          })
        }),
        B = "PopoverClose",
        I = o.forwardRef((e, t) => {
          const {
            __scopePopover: n,
            ...o
          } = e, i = P(B, n);
          return (0, v.jsx)(h.sG.button, {
            type: "button",
            ...o,
            ref: t,
            onClick: (0, r.mK)(e.onClick, () => i.onOpenChange(!1))
          })
        });
      I.displayName = B;
      var $ = o.forwardRef((e, t) => {
        const {
          __scopePopover: n,
          ...o
        } = e, r = A(n);
        return (0, v.jsx)(u.i3, {
          ...r,
          ...o,
          ref: t
        })
      });

      function V(e) {
        return e ? "open" : "closed"
      }
      $.displayName = "PopoverArrow";
      var K = O,
        X = E,
        Y = _,
        G = L,
        q = F,
        U = I,
        Z = $
    },
    55677(e, t, n) {
      n.d(t, {
        Mz: () => lt,
        i3: () => ft,
        UC: () => ct,
        bL: () => at,
        Bk: () => Ke
      });
      var o = n(93082);
      const r = ["top", "right", "bottom", "left"],
        i = Math.min,
        s = Math.max,
        a = Math.round,
        l = Math.floor,
        c = e => ({
          x: e,
          y: e
        }),
        f = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function u(e, t, n) {
        return s(e, i(t, n))
      }

      function d(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function p(e) {
        return e.split("-")[0]
      }

      function h(e) {
        return e.split("-")[1]
      }

      function m(e) {
        return "x" === e ? "y" : "x"
      }

      function g(e) {
        return "y" === e ? "height" : "width"
      }

      function y(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function w(e) {
        return m(y(e))
      }

      function v(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const x = ["left", "right"],
        b = ["right", "left"],
        R = ["top", "bottom"],
        A = ["bottom", "top"];

      function C(e) {
        const t = p(e);
        return f[t] + e.slice(t.length)
      }

      function P(e) {
        return "number" != typeof e ? function(e) {
          return {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...e
          }
        }(e) : {
          top: e,
          right: e,
          bottom: e,
          left: e
        }
      }

      function O(e) {
        const {
          x: t,
          y: n,
          width: o,
          height: r
        } = e;
        return {
          width: o,
          height: r,
          top: n,
          left: t,
          right: t + o,
          bottom: n + r,
          x: t,
          y: n
        }
      }

      function S(e, t, n) {
        let {
          reference: o,
          floating: r
        } = e;
        const i = y(t),
          s = w(t),
          a = g(s),
          l = p(t),
          c = "y" === i,
          f = o.x + o.width / 2 - r.width / 2,
          u = o.y + o.height / 2 - r.height / 2,
          d = o[a] / 2 - r[a] / 2;
        let m;
        switch (l) {
          case "top":
            m = {
              x: f,
              y: o.y - r.height
            };
            break;
          case "bottom":
            m = {
              x: f,
              y: o.y + o.height
            };
            break;
          case "right":
            m = {
              x: o.x + o.width,
              y: u
            };
            break;
          case "left":
            m = {
              x: o.x - r.width,
              y: u
            };
            break;
          default:
            m = {
              x: o.x,
              y: o.y
            }
        }
        switch (h(t)) {
          case "start":
            m[s] -= d * (n && c ? -1 : 1);
            break;
          case "end":
            m[s] += d * (n && c ? -1 : 1)
        }
        return m
      }
      async function E(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: o,
          y: r,
          platform: i,
          rects: s,
          elements: a,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: f = "viewport",
          elementContext: u = "floating",
          altBoundary: p = !1,
          padding: h = 0
        } = d(t, e), m = P(h), g = a[p ? "floating" === u ? "reference" : "floating" : u], y = O(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(g))) || n ? g : g.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(a.floating)),
          boundary: c,
          rootBoundary: f,
          strategy: l
        })), w = "floating" === u ? {
          x: o,
          y: r,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, v = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(a.floating)), x = await (null == i.isElement ? void 0 : i.isElement(v)) && await (null == i.getScale ? void 0 : i.getScale(v)) || {
          x: 1,
          y: 1
        }, b = O(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: a,
          rect: w,
          offsetParent: v,
          strategy: l
        }) : w);
        return {
          top: (y.top - b.top + m.top) / x.y,
          bottom: (b.bottom - y.bottom + m.bottom) / x.y,
          left: (y.left - b.left + m.left) / x.x,
          right: (b.right - y.right + m.right) / x.x
        }
      }

      function D(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function _(e) {
        return r.some(t => e[t] >= 0)
      }
      const k = new Set(["left", "top"]);

      function M() {
        return "undefined" != typeof window
      }

      function T(e) {
        return F(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function L(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function j(e) {
        var t;
        return null == (t = (F(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function F(e) {
        return !!M() && (e instanceof Node || e instanceof L(e).Node)
      }

      function N(e) {
        return !!M() && (e instanceof Element || e instanceof L(e).Element)
      }

      function H(e) {
        return !!M() && (e instanceof HTMLElement || e instanceof L(e).HTMLElement)
      }

      function W(e) {
        return !(!M() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof L(e).ShadowRoot)
      }

      function z(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: o,
          display: r
        } = U(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && "inline" !== r && "contents" !== r
      }

      function B(e) {
        return /^(table|td|th)$/.test(T(e))
      }

      function I(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      const $ = /transform|translate|scale|rotate|perspective|filter/,
        V = /paint|layout|strict|content/,
        K = e => !!e && "none" !== e;
      let X;

      function Y(e) {
        const t = N(e) ? U(e) : e;
        return K(t.transform) || K(t.translate) || K(t.scale) || K(t.rotate) || K(t.perspective) || !G() && (K(t.backdropFilter) || K(t.filter)) || $.test(t.willChange || "") || V.test(t.contain || "")
      }

      function G() {
        return null == X && (X = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), X
      }

      function q(e) {
        return /^(html|body|#document)$/.test(T(e))
      }

      function U(e) {
        return L(e).getComputedStyle(e)
      }

      function Z(e) {
        return N(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function Q(e) {
        if ("html" === T(e)) return e;
        const t = e.assignedSlot || e.parentNode || W(e) && e.host || j(e);
        return W(t) ? t.host : t
      }

      function J(e) {
        const t = Q(e);
        return q(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : H(t) && z(t) ? t : J(t)
      }

      function ee(e, t, n) {
        var o;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const r = J(e),
          i = r === (null == (o = e.ownerDocument) ? void 0 : o.body),
          s = L(r);
        if (i) {
          const e = te(s);
          return t.concat(s, s.visualViewport || [], z(r) ? r : [], e && n ? ee(e) : [])
        }
        return t.concat(r, ee(r, [], n))
      }

      function te(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function ne(e) {
        const t = U(e);
        let n = parseFloat(t.width) || 0,
          o = parseFloat(t.height) || 0;
        const r = H(e),
          i = r ? e.offsetWidth : n,
          s = r ? e.offsetHeight : o,
          l = a(n) !== i || a(o) !== s;
        return l && (n = i, o = s), {
          width: n,
          height: o,
          $: l
        }
      }

      function oe(e) {
        return N(e) ? e : e.contextElement
      }

      function re(e) {
        const t = oe(e);
        if (!H(t)) return c(1);
        const n = t.getBoundingClientRect(),
          {
            width: o,
            height: r,
            $: i
          } = ne(t);
        let s = (i ? a(n.width) : n.width) / o,
          l = (i ? a(n.height) : n.height) / r;
        return s && Number.isFinite(s) || (s = 1), l && Number.isFinite(l) || (l = 1), {
          x: s,
          y: l
        }
      }
      const ie = c(0);

      function se(e) {
        const t = L(e);
        return G() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : ie
      }

      function ae(e, t, n, o) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = e.getBoundingClientRect(),
          i = oe(e);
        let s = c(1);
        t && (o ? N(o) && (s = re(o)) : s = re(e));
        const a = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== L(e)) && t
        }(i, n, o) ? se(i) : c(0);
        let l = (r.left + a.x) / s.x,
          f = (r.top + a.y) / s.y,
          u = r.width / s.x,
          d = r.height / s.y;
        if (i) {
          const e = L(i),
            t = o && N(o) ? L(o) : o;
          let n = e,
            r = te(n);
          for (; r && o && t !== n;) {
            const e = re(r),
              t = r.getBoundingClientRect(),
              o = U(r),
              i = t.left + (r.clientLeft + parseFloat(o.paddingLeft)) * e.x,
              s = t.top + (r.clientTop + parseFloat(o.paddingTop)) * e.y;
            l *= e.x, f *= e.y, u *= e.x, d *= e.y, l += i, f += s, n = L(r), r = te(n)
          }
        }
        return O({
          width: u,
          height: d,
          x: l,
          y: f
        })
      }

      function le(e, t) {
        const n = Z(e).scrollLeft;
        return t ? t.left + n : ae(j(e)).left + n
      }

      function ce(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - le(e, n),
          y: n.top + t.scrollTop
        }
      }

      function fe(e, t, n) {
        let o;
        if ("viewport" === t) o = function(e, t) {
          const n = L(e),
            o = j(e),
            r = n.visualViewport;
          let i = o.clientWidth,
            s = o.clientHeight,
            a = 0,
            l = 0;
          if (r) {
            i = r.width, s = r.height;
            const e = G();
            (!e || e && "fixed" === t) && (a = r.offsetLeft, l = r.offsetTop)
          }
          const c = le(o);
          if (c <= 0) {
            const e = o.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              r = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              s = Math.abs(o.clientWidth - t.clientWidth - r);
            s <= 25 && (i -= s)
          } else c <= 25 && (i += c);
          return {
            width: i,
            height: s,
            x: a,
            y: l
          }
        }(e, n);
        else if ("document" === t) o = function(e) {
          const t = j(e),
            n = Z(e),
            o = e.ownerDocument.body,
            r = s(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
            i = s(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
          let a = -n.scrollLeft + le(e);
          const l = -n.scrollTop;
          return "rtl" === U(o).direction && (a += s(t.clientWidth, o.clientWidth) - r), {
            width: r,
            height: i,
            x: a,
            y: l
          }
        }(j(e));
        else if (N(t)) o = function(e, t) {
          const n = ae(e, !0, "fixed" === t),
            o = n.top + e.clientTop,
            r = n.left + e.clientLeft,
            i = H(e) ? re(e) : c(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: r * i.x,
            y: o * i.y
          }
        }(t, n);
        else {
          const n = se(e);
          o = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return O(o)
      }

      function ue(e, t) {
        const n = Q(e);
        return !(n === t || !N(n) || q(n)) && ("fixed" === U(n).position || ue(n, t))
      }

      function de(e, t, n) {
        const o = H(t),
          r = j(t),
          i = "fixed" === n,
          s = ae(e, !0, i, t);
        let a = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const l = c(0);

        function f() {
          l.x = le(r)
        }
        if (o || !o && !i)
          if (("body" !== T(t) || z(r)) && (a = Z(t)), o) {
            const e = ae(t, !0, i, t);
            l.x = e.x + t.clientLeft, l.y = e.y + t.clientTop
          } else r && f();
        i && !o && r && f();
        const u = !r || o || i ? c(0) : ce(r, a);
        return {
          x: s.left + a.scrollLeft - l.x - u.x,
          y: s.top + a.scrollTop - l.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function pe(e) {
        return "static" === U(e).position
      }

      function he(e, t) {
        if (!H(e) || "fixed" === U(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return j(e) === n && (n = n.ownerDocument.body), n
      }

      function me(e, t) {
        const n = L(e);
        if (I(e)) return n;
        if (!H(e)) {
          let t = Q(e);
          for (; t && !q(t);) {
            if (N(t) && !pe(t)) return t;
            t = Q(t)
          }
          return n
        }
        let o = he(e, t);
        for (; o && B(o) && pe(o);) o = he(o, t);
        return o && q(o) && pe(o) && !Y(o) ? n : o || function(e) {
          let t = Q(e);
          for (; H(t) && !q(t);) {
            if (Y(t)) return t;
            if (I(t)) return null;
            t = Q(t)
          }
          return null
        }(e) || n
      }
      const ge = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: o,
            strategy: r
          } = e;
          const i = "fixed" === r,
            s = j(o),
            a = !!t && I(t.floating);
          if (o === s || a && i) return n;
          let l = {
              scrollLeft: 0,
              scrollTop: 0
            },
            f = c(1);
          const u = c(0),
            d = H(o);
          if ((d || !d && !i) && (("body" !== T(o) || z(s)) && (l = Z(o)), d)) {
            const e = ae(o);
            f = re(o), u.x = e.x + o.clientLeft, u.y = e.y + o.clientTop
          }
          const p = !s || d || i ? c(0) : ce(s, l);
          return {
            width: n.width * f.x,
            height: n.height * f.y,
            x: n.x * f.x - l.scrollLeft * f.x + u.x + p.x,
            y: n.y * f.y - l.scrollTop * f.y + u.y + p.y
          }
        },
        getDocumentElement: j,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: o,
            strategy: r
          } = e;
          const a = [..."clippingAncestors" === n ? I(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let o = ee(e, [], !1).filter(e => N(e) && "body" !== T(e)),
                r = null;
              const i = "fixed" === U(e).position;
              let s = i ? Q(e) : e;
              for (; N(s) && !q(s);) {
                const t = U(s),
                  n = Y(s);
                n || "fixed" !== t.position || (r = null), (i ? !n && !r : !n && "static" === t.position && r && ("absolute" === r.position || "fixed" === r.position) || z(s) && !n && ue(e, s)) ? o = o.filter(e => e !== s) : r = t, s = Q(s)
              }
              return t.set(e, o), o
            }(t, this._c) : [].concat(n), o],
            l = fe(t, a[0], r);
          let c = l.top,
            f = l.right,
            u = l.bottom,
            d = l.left;
          for (let e = 1; e < a.length; e++) {
            const n = fe(t, a[e], r);
            c = s(n.top, c), f = i(n.right, f), u = i(n.bottom, u), d = s(n.left, d)
          }
          return {
            width: f - d,
            height: u - c,
            x: d,
            y: c
          }
        },
        getOffsetParent: me,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || me,
            n = this.getDimensions,
            o = await n(e.floating);
          return {
            reference: de(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: o.width,
              height: o.height
            }
          }
        },
        getClientRects: function(e) {
          return Array.from(e.getClientRects())
        },
        getDimensions: function(e) {
          const {
            width: t,
            height: n
          } = ne(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: re,
        isElement: N,
        isRTL: function(e) {
          return "rtl" === U(e).direction
        }
      };

      function ye(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }
      const we = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, o;
              const {
                placement: r,
                middlewareData: i,
                rects: s,
                initialPlacement: a,
                platform: l,
                elements: c
              } = t, {
                mainAxis: f = !0,
                crossAxis: u = !0,
                fallbackPlacements: m,
                fallbackStrategy: P = "bestFit",
                fallbackAxisSideDirection: O = "none",
                flipAlignment: S = !0,
                ...E
              } = d(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const D = p(r),
                _ = y(a),
                k = p(a) === a,
                M = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                T = m || (k || !S ? [C(a)] : function(e) {
                  const t = C(e);
                  return [v(e), t, v(t)]
                }(a)),
                L = "none" !== O;
              !m && L && T.push(... function(e, t, n, o) {
                const r = h(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? b : x : t ? x : b;
                    case "left":
                    case "right":
                      return t ? R : A;
                    default:
                      return []
                  }
                }(p(e), "start" === n, o);
                return r && (i = i.map(e => e + "-" + r), t && (i = i.concat(i.map(v)))), i
              }(a, S, O, M));
              const j = [a, ...T],
                F = await l.detectOverflow(t, E),
                N = [];
              let H = (null == (o = i.flip) ? void 0 : o.overflows) || [];
              if (f && N.push(F[D]), u) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const o = h(e),
                    r = w(e),
                    i = g(r);
                  let s = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (s = C(s)), [s, C(s)]
                }(r, s, M);
                N.push(F[e[0]], F[e[1]])
              }
              if (H = [...H, {
                  placement: r,
                  overflows: N
                }], !N.every(e => e <= 0)) {
                var W, z;
                const e = ((null == (W = i.flip) ? void 0 : W.index) || 0) + 1,
                  t = j[e];
                if (t && ("alignment" !== u || _ === y(t) || H.every(e => y(e.placement) !== _ || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: H
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (z = H.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : z.placement;
                if (!n) switch (P) {
                  case "bestFit": {
                    var B;
                    const e = null == (B = H.filter(e => {
                      if (L) {
                        const t = y(e.placement);
                        return t === _ || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : B[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = a
                }
                if (r !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        ve = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: o,
              placement: r,
              rects: s,
              platform: a,
              elements: l,
              middlewareData: c
            } = t, {
              element: f,
              padding: p = 0
            } = d(e, t) || {};
            if (null == f) return {};
            const m = P(p),
              y = {
                x: n,
                y: o
              },
              v = w(r),
              x = g(v),
              b = await a.getDimensions(f),
              R = "y" === v,
              A = R ? "top" : "left",
              C = R ? "bottom" : "right",
              O = R ? "clientHeight" : "clientWidth",
              S = s.reference[x] + s.reference[v] - y[v] - s.floating[x],
              E = y[v] - s.reference[v],
              D = await (null == a.getOffsetParent ? void 0 : a.getOffsetParent(f));
            let _ = D ? D[O] : 0;
            _ && await (null == a.isElement ? void 0 : a.isElement(D)) || (_ = l.floating[O] || s.floating[x]);
            const k = S / 2 - E / 2,
              M = _ / 2 - b[x] / 2 - 1,
              T = i(m[A], M),
              L = i(m[C], M),
              j = T,
              F = _ - b[x] - L,
              N = _ / 2 - b[x] / 2 + k,
              H = u(j, N, F),
              W = !c.arrow && null != h(r) && N !== H && s.reference[x] / 2 - (N < j ? T : L) - b[x] / 2 < 0,
              z = W ? N < j ? N - j : N - F : 0;
            return {
              [v]: y[v] + z,
              data: {
                [v]: H,
                centerOffset: N - H - z,
                ...W && {
                  alignmentOffset: z
                }
              },
              reset: W
            }
          }
        }),
        xe = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: o,
                placement: r,
                rects: i,
                middlewareData: s
              } = t, {
                offset: a = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = d(e, t), f = {
                x: n,
                y: o
              }, u = y(r), h = m(u);
              let g = f[h],
                w = f[u];
              const v = d(a, t),
                x = "number" == typeof v ? {
                  mainAxis: v,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...v
                };
              if (l) {
                const e = "y" === h ? "height" : "width",
                  t = i.reference[h] - i.floating[e] + x.mainAxis,
                  n = i.reference[h] + i.reference[e] - x.mainAxis;
                g < t ? g = t : g > n && (g = n)
              }
              if (c) {
                var b, R;
                const e = "y" === h ? "width" : "height",
                  t = k.has(p(r)),
                  n = i.reference[u] - i.floating[e] + (t && (null == (b = s.offset) ? void 0 : b[u]) || 0) + (t ? 0 : x.crossAxis),
                  o = i.reference[u] + i.reference[e] + (t ? 0 : (null == (R = s.offset) ? void 0 : R[u]) || 0) - (t ? x.crossAxis : 0);
                w < n ? w = n : w > o && (w = o)
              }
              return {
                [h]: g,
                [u]: w
              }
            }
          }
        },
        be = (e, t, n) => {
          const o = new Map,
            r = {
              platform: ge,
              ...n
            },
            i = {
              ...r.platform,
              _c: o
            };
          return (async (e, t, n) => {
            const {
              placement: o = "bottom",
              strategy: r = "absolute",
              middleware: i = [],
              platform: s
            } = n, a = s.detectOverflow ? s : {
              ...s,
              detectOverflow: E
            }, l = await (null == s.isRTL ? void 0 : s.isRTL(t));
            let c = await s.getElementRects({
                reference: e,
                floating: t,
                strategy: r
              }),
              {
                x: f,
                y: u
              } = S(c, o, l),
              d = o,
              p = 0;
            const h = {};
            for (let n = 0; n < i.length; n++) {
              const m = i[n];
              if (!m) continue;
              const {
                name: g,
                fn: y
              } = m, {
                x: w,
                y: v,
                data: x,
                reset: b
              } = await y({
                x: f,
                y: u,
                initialPlacement: o,
                placement: d,
                strategy: r,
                middlewareData: h,
                rects: c,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              f = null != w ? w : f, u = null != v ? v : u, h[g] = {
                ...h[g],
                ...x
              }, b && p < 50 && (p++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (c = !0 === b.rects ? await s.getElementRects({
                reference: e,
                floating: t,
                strategy: r
              }) : b.rects), ({
                x: f,
                y: u
              } = S(c, d, l))), n = -1)
            }
            return {
              x: f,
              y: u,
              placement: d,
              strategy: r,
              middlewareData: h
            }
          })(e, t, {
            ...r,
            platform: i
          })
        };
      var Re = n(84017),
        Ae = "undefined" != typeof document ? o.useLayoutEffect : function() {};

      function Ce(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, o, r;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (o = n; 0 !== o--;)
              if (!Ce(e[o], t[o])) return !1;
            return !0
          }
          if (r = Object.keys(e), n = r.length, n !== Object.keys(t).length) return !1;
          for (o = n; 0 !== o--;)
            if (!{}.hasOwnProperty.call(t, r[o])) return !1;
          for (o = n; 0 !== o--;) {
            const n = r[o];
            if (!("_owner" === n && e.$$typeof || Ce(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Pe(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function Oe(e, t) {
        const n = Pe(e);
        return Math.round(t * n) / n
      }

      function Se(e) {
        const t = o.useRef(e);
        return Ae(() => {
          t.current = e
        }), t
      }
      const Ee = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = 0), {
              name: "offset",
              options: e,
              async fn(t) {
                var n, o;
                const {
                  x: r,
                  y: i,
                  placement: s,
                  middlewareData: a
                } = t, l = await async function(e, t) {
                  const {
                    placement: n,
                    platform: o,
                    elements: r
                  } = e, i = await (null == o.isRTL ? void 0 : o.isRTL(r.floating)), s = p(n), a = h(n), l = "y" === y(n), c = k.has(s) ? -1 : 1, f = i && l ? -1 : 1, u = d(t, e);
                  let {
                    mainAxis: m,
                    crossAxis: g,
                    alignmentAxis: w
                  } = "number" == typeof u ? {
                    mainAxis: u,
                    crossAxis: 0,
                    alignmentAxis: null
                  } : {
                    mainAxis: u.mainAxis || 0,
                    crossAxis: u.crossAxis || 0,
                    alignmentAxis: u.alignmentAxis
                  };
                  return a && "number" == typeof w && (g = "end" === a ? -1 * w : w), l ? {
                    x: g * f,
                    y: m * c
                  } : {
                    x: m * c,
                    y: g * f
                  }
                }(t, e);
                return s === (null == (n = a.offset) ? void 0 : n.placement) && null != (o = a.arrow) && o.alignmentOffset ? {} : {
                  x: r + l.x,
                  y: i + l.y,
                  data: {
                    ...l,
                    placement: s
                  }
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        De = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "shift",
              options: e,
              async fn(t) {
                const {
                  x: n,
                  y: o,
                  placement: r,
                  platform: i
                } = t, {
                  mainAxis: s = !0,
                  crossAxis: a = !1,
                  limiter: l = {
                    fn: e => {
                      let {
                        x: t,
                        y: n
                      } = e;
                      return {
                        x: t,
                        y: n
                      }
                    }
                  },
                  ...c
                } = d(e, t), f = {
                  x: n,
                  y: o
                }, h = await i.detectOverflow(t, c), g = y(p(r)), w = m(g);
                let v = f[w],
                  x = f[g];
                if (s) {
                  const e = "y" === w ? "bottom" : "right";
                  v = u(v + h["y" === w ? "top" : "left"], v, v - h[e])
                }
                if (a) {
                  const e = "y" === g ? "bottom" : "right";
                  x = u(x + h["y" === g ? "top" : "left"], x, x - h[e])
                }
                const b = l.fn({
                  ...t,
                  [w]: v,
                  [g]: x
                });
                return {
                  ...b,
                  data: {
                    x: b.x - n,
                    y: b.y - o,
                    enabled: {
                      [w]: s,
                      [g]: a
                    }
                  }
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        _e = (e, t) => {
          const n = we(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        ke = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "size",
              options: e,
              async fn(t) {
                var n, o;
                const {
                  placement: r,
                  rects: a,
                  platform: l,
                  elements: c
                } = t, {
                  apply: f = () => {},
                  ...u
                } = d(e, t), m = await l.detectOverflow(t, u), g = p(r), w = h(r), v = "y" === y(r), {
                  width: x,
                  height: b
                } = a.floating;
                let R, A;
                "top" === g || "bottom" === g ? (R = g, A = w === (await (null == l.isRTL ? void 0 : l.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (A = g, R = "end" === w ? "top" : "bottom");
                const C = b - m.top - m.bottom,
                  P = x - m.left - m.right,
                  O = i(b - m[R], C),
                  S = i(x - m[A], P),
                  E = !t.middlewareData.shift;
                let D = O,
                  _ = S;
                if (null != (n = t.middlewareData.shift) && n.enabled.x && (_ = P), null != (o = t.middlewareData.shift) && o.enabled.y && (D = C), E && !w) {
                  const e = s(m.left, 0),
                    t = s(m.right, 0),
                    n = s(m.top, 0),
                    o = s(m.bottom, 0);
                  v ? _ = x - 2 * (0 !== e || 0 !== t ? e + t : s(m.left, m.right)) : D = b - 2 * (0 !== n || 0 !== o ? n + o : s(m.top, m.bottom))
                }
                await f({
                  ...t,
                  availableWidth: _,
                  availableHeight: D
                });
                const k = await l.getDimensions(c.floating);
                return x !== k.width || b !== k.height ? {
                  reset: {
                    rects: !0
                  }
                } : {}
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Me = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "hide",
              options: e,
              async fn(t) {
                const {
                  rects: n,
                  platform: o
                } = t, {
                  strategy: r = "referenceHidden",
                  ...i
                } = d(e, t);
                switch (r) {
                  case "referenceHidden": {
                    const e = D(await o.detectOverflow(t, {
                      ...i,
                      elementContext: "reference"
                    }), n.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: _(e)
                      }
                    }
                  }
                  case "escaped": {
                    const e = D(await o.detectOverflow(t, {
                      ...i,
                      altBoundary: !0
                    }), n.floating);
                    return {
                      data: {
                        escapedOffsets: e,
                        escaped: _(e)
                      }
                    }
                  }
                  default:
                    return {}
                }
              }
            }
          }(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Te = (e, t) => {
          const n = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: n,
                padding: o
              } = "function" == typeof e ? e(t) : e;
              return n && (r = n, {}.hasOwnProperty.call(r, "current")) ? null != n.current ? ve({
                element: n.current,
                padding: o
              }).fn(t) : {} : n ? ve({
                element: n,
                padding: o
              }).fn(t) : {};
              var r
            }
          }))(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        };
      var Le = n(66704),
        je = n(39793),
        Fe = o.forwardRef((e, t) => {
          const {
            children: n,
            width: o = 10,
            height: r = 5,
            ...i
          } = e;
          return (0, je.jsx)(Le.sG.svg, {
            ...i,
            ref: t,
            width: o,
            height: r,
            viewBox: "0 0 30 10",
            preserveAspectRatio: "none",
            children: e.asChild ? n : (0, je.jsx)("polygon", {
              points: "0,0 30,0 15,10"
            })
          })
        });
      Fe.displayName = "Arrow";
      var Ne = Fe,
        He = n(50446),
        We = n(53582),
        ze = n(38351),
        Be = n(86627),
        Ie = n(94119),
        $e = "Popper",
        [Ve, Ke] = (0, We.A)($e),
        [Xe, Ye] = Ve($e),
        Ge = e => {
          const {
            __scopePopper: t,
            children: n
          } = e, [r, i] = o.useState(null);
          return (0, je.jsx)(Xe, {
            scope: t,
            anchor: r,
            onAnchorChange: i,
            children: n
          })
        };
      Ge.displayName = $e;
      var qe = "PopperAnchor",
        Ue = o.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            virtualRef: r,
            ...i
          } = e, s = Ye(qe, n), a = o.useRef(null), l = (0, He.s)(t, a), c = o.useRef(null);
          return o.useEffect(() => {
            const e = c.current;
            c.current = r?.current || a.current, e !== c.current && s.onAnchorChange(c.current)
          }), r ? null : (0, je.jsx)(Le.sG.div, {
            ...i,
            ref: l
          })
        });
      Ue.displayName = qe;
      var Ze = "PopperContent",
        [Qe, Je] = Ve(Ze),
        et = o.forwardRef((e, t) => {
          const {
            __scopePopper: n,
            side: r = "bottom",
            sideOffset: a = 0,
            align: c = "center",
            alignOffset: f = 0,
            arrowPadding: u = 0,
            avoidCollisions: d = !0,
            collisionBoundary: p = [],
            collisionPadding: h = 0,
            sticky: m = "partial",
            hideWhenDetached: g = !1,
            updatePositionStrategy: y = "optimized",
            onPlaced: w,
            ...v
          } = e, x = Ye(Ze, n), [b, R] = o.useState(null), A = (0, He.s)(t, e => R(e)), [C, P] = o.useState(null), O = (0, Ie.X)(C), S = O?.width ?? 0, E = O?.height ?? 0, D = r + ("center" !== c ? "-" + c : ""), _ = "number" == typeof h ? h : {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...h
          }, k = Array.isArray(p) ? p : [p], M = k.length > 0, T = {
            padding: _,
            boundary: k.filter(rt),
            altBoundary: M
          }, {
            refs: L,
            floatingStyles: F,
            placement: N,
            isPositioned: H,
            middlewareData: W
          } = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: r = [],
              platform: i,
              elements: {
                reference: s,
                floating: a
              } = {},
              transform: l = !0,
              whileElementsMounted: c,
              open: f
            } = e, [u, d] = o.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [p, h] = o.useState(r);
            Ce(p, r) || h(r);
            const [m, g] = o.useState(null), [y, w] = o.useState(null), v = o.useCallback(e => {
              e !== A.current && (A.current = e, g(e))
            }, []), x = o.useCallback(e => {
              e !== C.current && (C.current = e, w(e))
            }, []), b = s || m, R = a || y, A = o.useRef(null), C = o.useRef(null), P = o.useRef(u), O = null != c, S = Se(c), E = Se(i), D = Se(f), _ = o.useCallback(() => {
              if (!A.current || !C.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: p
              };
              E.current && (e.platform = E.current), be(A.current, C.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== D.current
                };
                k.current && !Ce(P.current, t) && (P.current = t, Re.flushSync(() => {
                  d(t)
                }))
              })
            }, [p, t, n, E, D]);
            Ae(() => {
              !1 === f && P.current.isPositioned && (P.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [f]);
            const k = o.useRef(!1);
            Ae(() => (k.current = !0, () => {
              k.current = !1
            }), []), Ae(() => {
              if (b && (A.current = b), R && (C.current = R), b && R) {
                if (S.current) return S.current(b, R, _);
                _()
              }
            }, [b, R, _, S, O]);
            const M = o.useMemo(() => ({
                reference: A,
                floating: C,
                setReference: v,
                setFloating: x
              }), [v, x]),
              T = o.useMemo(() => ({
                reference: b,
                floating: R
              }), [b, R]),
              L = o.useMemo(() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!T.floating) return e;
                const t = Oe(T.floating, u.x),
                  o = Oe(T.floating, u.y);
                return l ? {
                  ...e,
                  transform: "translate(" + t + "px, " + o + "px)",
                  ...Pe(T.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: o
                }
              }, [n, l, T.floating, u.x, u.y]);
            return o.useMemo(() => ({
              ...u,
              update: _,
              refs: M,
              elements: T,
              floatingStyles: L
            }), [u, _, M, T, L])
          }({
            strategy: "fixed",
            placement: D,
            whileElementsMounted: (...e) => function(e, t, n, o) {
              void 0 === o && (o = {});
              const {
                ancestorScroll: r = !0,
                ancestorResize: a = !0,
                elementResize: c = "function" == typeof ResizeObserver,
                layoutShift: f = "function" == typeof IntersectionObserver,
                animationFrame: u = !1
              } = o, d = oe(e), p = r || a ? [...d ? ee(d) : [], ...t ? ee(t) : []] : [];
              p.forEach(e => {
                r && e.addEventListener("scroll", n, {
                  passive: !0
                }), a && e.addEventListener("resize", n)
              });
              const h = d && f ? function(e, t) {
                let n, o = null;
                const r = j(e);

                function a() {
                  var e;
                  clearTimeout(n), null == (e = o) || e.disconnect(), o = null
                }
                return function c(f, u) {
                  void 0 === f && (f = !1), void 0 === u && (u = 1), a();
                  const d = e.getBoundingClientRect(),
                    {
                      left: p,
                      top: h,
                      width: m,
                      height: g
                    } = d;
                  if (f || t(), !m || !g) return;
                  const y = {
                    rootMargin: -l(h) + "px " + -l(r.clientWidth - (p + m)) + "px " + -l(r.clientHeight - (h + g)) + "px " + -l(p) + "px",
                    threshold: s(0, i(1, u)) || 1
                  };
                  let w = !0;

                  function v(t) {
                    const o = t[0].intersectionRatio;
                    if (o !== u) {
                      if (!w) return c();
                      o ? c(!1, o) : n = setTimeout(() => {
                        c(!1, 1e-7)
                      }, 1e3)
                    }
                    1 !== o || ye(d, e.getBoundingClientRect()) || c(), w = !1
                  }
                  try {
                    o = new IntersectionObserver(v, {
                      ...y,
                      root: r.ownerDocument
                    })
                  } catch (e) {
                    o = new IntersectionObserver(v, y)
                  }
                  o.observe(e)
                }(!0), a
              }(d, n) : null;
              let m, g = -1,
                y = null;
              c && (y = new ResizeObserver(e => {
                let [o] = e;
                o && o.target === d && y && t && (y.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
                  var e;
                  null == (e = y) || e.observe(t)
                })), n()
              }), d && !u && y.observe(d), t && y.observe(t));
              let w = u ? ae(e) : null;
              return u && function t() {
                const o = ae(e);
                w && !ye(w, o) && n(), w = o, m = requestAnimationFrame(t)
              }(), n(), () => {
                var e;
                p.forEach(e => {
                  r && e.removeEventListener("scroll", n), a && e.removeEventListener("resize", n)
                }), null == h || h(), null == (e = y) || e.disconnect(), y = null, u && cancelAnimationFrame(m)
              }
            }(...e, {
              animationFrame: "always" === y
            }),
            elements: {
              reference: x.anchor
            },
            middleware: [Ee({
              mainAxis: a + E,
              alignmentAxis: f
            }), d && De({
              mainAxis: !0,
              crossAxis: !1,
              limiter: "partial" === m ? {
                fn: xe(z).fn,
                options: [z, void 0]
              } : void 0,
              ...T
            }), d && _e({
              ...T
            }), ke({
              ...T,
              apply: ({
                elements: e,
                rects: t,
                availableWidth: n,
                availableHeight: o
              }) => {
                const {
                  width: r,
                  height: i
                } = t.reference, s = e.floating.style;
                s.setProperty("--radix-popper-available-width", `${n}px`), s.setProperty("--radix-popper-available-height", `${o}px`), s.setProperty("--radix-popper-anchor-width", `${r}px`), s.setProperty("--radix-popper-anchor-height", `${i}px`)
              }
            }), C && Te({
              element: C,
              padding: u
            }), it({
              arrowWidth: S,
              arrowHeight: E
            }), g && Me({
              strategy: "referenceHidden",
              ...T
            })]
          });
          var z;
          const [B, I] = st(N), $ = (0, ze.c)(w);
          (0, Be.N)(() => {
            H && $?.()
          }, [H, $]);
          const V = W.arrow?.x,
            K = W.arrow?.y,
            X = 0 !== W.arrow?.centerOffset,
            [Y, G] = o.useState();
          return (0, Be.N)(() => {
            b && G(window.getComputedStyle(b).zIndex)
          }, [b]), (0, je.jsx)("div", {
            ref: L.setFloating,
            "data-radix-popper-content-wrapper": "",
            style: {
              ...F,
              transform: H ? F.transform : "translate(0, -200%)",
              minWidth: "max-content",
              zIndex: Y,
              "--radix-popper-transform-origin": [W.transformOrigin?.x, W.transformOrigin?.y].join(" "),
              ...W.hide?.referenceHidden && {
                visibility: "hidden",
                pointerEvents: "none"
              }
            },
            dir: e.dir,
            children: (0, je.jsx)(Qe, {
              scope: n,
              placedSide: B,
              onArrowChange: P,
              arrowX: V,
              arrowY: K,
              shouldHideArrow: X,
              children: (0, je.jsx)(Le.sG.div, {
                "data-side": B,
                "data-align": I,
                ...v,
                ref: A,
                style: {
                  ...v.style,
                  animation: H ? void 0 : "none"
                }
              })
            })
          })
        });
      et.displayName = Ze;
      var tt = "PopperArrow",
        nt = {
          top: "bottom",
          right: "left",
          bottom: "top",
          left: "right"
        },
        ot = o.forwardRef(function(e, t) {
          const {
            __scopePopper: n,
            ...o
          } = e, r = Je(tt, n), i = nt[r.placedSide];
          return (0, je.jsx)("span", {
            ref: r.onArrowChange,
            style: {
              position: "absolute",
              left: r.arrowX,
              top: r.arrowY,
              [i]: 0,
              transformOrigin: {
                top: "",
                right: "0 0",
                bottom: "center 0",
                left: "100% 0"
              } [r.placedSide],
              transform: {
                top: "translateY(100%)",
                right: "translateY(50%) rotate(90deg) translateX(-50%)",
                bottom: "rotate(180deg)",
                left: "translateY(50%) rotate(-90deg) translateX(50%)"
              } [r.placedSide],
              visibility: r.shouldHideArrow ? "hidden" : void 0
            },
            children: (0, je.jsx)(Ne, {
              ...o,
              ref: t,
              style: {
                ...o.style,
                display: "block"
              }
            })
          })
        });

      function rt(e) {
        return null !== e
      }
      ot.displayName = tt;
      var it = e => ({
        name: "transformOrigin",
        options: e,
        fn(t) {
          const {
            placement: n,
            rects: o,
            middlewareData: r
          } = t, i = 0 !== r.arrow?.centerOffset, s = i ? 0 : e.arrowWidth, a = i ? 0 : e.arrowHeight, [l, c] = st(n), f = {
            start: "0%",
            center: "50%",
            end: "100%"
          } [c], u = (r.arrow?.x ?? 0) + s / 2, d = (r.arrow?.y ?? 0) + a / 2;
          let p = "",
            h = "";
          return "bottom" === l ? (p = i ? f : `${u}px`, h = -a + "px") : "top" === l ? (p = i ? f : `${u}px`, h = `${o.floating.height+a}px`) : "right" === l ? (p = -a + "px", h = i ? f : `${d}px`) : "left" === l && (p = `${o.floating.width+a}px`, h = i ? f : `${d}px`), {
            data: {
              x: p,
              y: h
            }
          }
        }
      });

      function st(e) {
        const [t, n = "center"] = e.split("-");
        return [t, n]
      }
      var at = Ge,
        lt = Ue,
        ct = et,
        ft = ot
    },
    14823(e, t, n) {
      n.d(t, {
        Z: () => r
      });
      var o = n(93082);

      function r(e) {
        const t = o.useRef({
          value: e,
          previous: e
        });
        return o.useMemo(() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous), [e])
      }
    },
    94119(e, t, n) {
      n.d(t, {
        X: () => i
      });
      var o = n(93082),
        r = n(86627);

      function i(e) {
        const [t, n] = o.useState(void 0);
        return (0, r.N)(() => {
          if (e) {
            n({
              width: e.offsetWidth,
              height: e.offsetHeight
            });
            const t = new ResizeObserver(t => {
              if (!Array.isArray(t)) return;
              if (!t.length) return;
              const o = t[0];
              let r, i;
              if ("borderBoxSize" in o) {
                const e = o.borderBoxSize,
                  t = Array.isArray(e) ? e[0] : e;
                r = t.inlineSize, i = t.blockSize
              } else r = e.offsetWidth, i = e.offsetHeight;
              n({
                width: r,
                height: i
              })
            });
            return t.observe(e, {
              box: "border-box"
            }), () => t.unobserve(e)
          }
          n(void 0)
        }, [e]), t
      }
    },
    45047(e, t, n) {
      n.d(t, {
        Qg: () => s,
        bL: () => l,
        s6: () => a
      });
      var o = n(93082),
        r = n(66704),
        i = n(39793),
        s = Object.freeze({
          position: "absolute",
          border: 0,
          width: 1,
          height: 1,
          padding: 0,
          margin: -1,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          whiteSpace: "nowrap",
          wordWrap: "normal"
        }),
        a = o.forwardRef((e, t) => (0, i.jsx)(r.sG.span, {
          ...e,
          ref: t,
          style: {
            ...s,
            ...e.style
          }
        }));
      a.displayName = "VisuallyHidden";
      var l = a
    }
  }
]);