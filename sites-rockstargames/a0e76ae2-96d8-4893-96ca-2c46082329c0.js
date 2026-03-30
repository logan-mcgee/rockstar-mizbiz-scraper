try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a0e76ae2-96d8-4893-96ca-2c46082329c0", e._sentryDebugIdIdentifier = "sentry-dbid-a0e76ae2-96d8-4893-96ca-2c46082329c0")
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
  [78], {
    19403: (e, t, n) => {
      n.d(t, {
        sL: () => qe,
        UP: () => s,
        ic: () => c,
        iQ: () => f,
        Ub: () => i,
        jt: () => l,
        ZC: () => a,
        rl: () => p
      });
      var r = n(60211),
        o = n(71127);

      function i(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const i = e => r.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [a, s] = (0, o.useState)(() => n ? i(e) : t);

        function l() {
          s(i(e))
        }
        return (0, o.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }, [e]), a
      }

      function a(e) {
        const t = (0, o.useRef)({
            value: e,
            prev: void 0
          }),
          n = t.current.value;
        return e !== n && (t.current = {
          value: e,
          prev: n
        }), t.current.prev
      }

      function s(...e) {
        const t = (0, o.useRef)(null);
        return t.current || (t.current = t => {
          e.forEach(e => {
            "function" == typeof e ? e(t) : null != e && (e.current = t)
          })
        }), t.current
      }
      const l = () => i("(prefers-reduced-motion: reduce)", {
        defaultValue: !1,
        initializeWithValue: !0
      });

      function u(e) {
        const t = (0, o.useRef)(e);
        return (0, o.useEffect)(() => {
          t.current = e
        }), (0, o.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function c({
        prop: e,
        defaultProp: t,
        onChange: n = () => {}
      }) {
        const [r, i] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, o.useState)(e),
            [r] = n,
            i = (0, o.useRef)(r),
            a = u(t);
          return (0, o.useEffect)(() => {
            i.current !== r && (a(r), i.current = r)
          }, [r, i, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, s = a ? e : r, l = u(n), c = (0, o.useCallback)(t => {
          if (a) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else i(t)
        }, [a, e, i, l]);
        return [s, c]
      }

      function d(e, t, n, r) {
        const i = (0, o.useRef)(t);
        (0, o.useEffect)(() => {
          i.current = t
        }, [t]), (0, o.useEffect)(() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const o = e => {
            i.current(e)
          };
          return t.addEventListener(e, o, r), () => {
            t.removeEventListener(e, o, r)
          }
        }, [e, n?.current, r])
      }
      const f = ({
        ref: e,
        onChange: t,
        onFocusIn: n,
        onFocusOut: r,
        enabled: i = !0
      }) => {
        const [a, s] = (0, o.useState)(!1);
        return d("focusin", e => {
          s(!0), n?.(e), t?.(!0, e)
        }, e), d("focusout", e => {
          s(!1), r?.(e), t?.(!1, e)
        }, e), {
          isFocused: !!i && a
        }
      };

      function p(e = !0) {
        const t = i("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }

      function v(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let m, g = new Map;

      function y(e, t) {
        if (e === t) return e;
        let n = g.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = g.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }
      "undefined" != typeof FinalizationRegistry && (m = new FinalizationRegistry(e => {
        g.delete(e)
      }));
      var b = n(1556);

      function h(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let r = e[n];
          for (let e in r) {
            let n = t[e],
              o = r[e];
            "function" == typeof n && "function" == typeof o && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = v(n, o) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof o ? "id" === e && n && o ? t.id = y(n, o) : t[e] = void 0 !== o ? o : n : t[e] = b(n, o)
          }
        }
        return t
      }
      const E = new Set(["id"]),
        w = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        P = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        T = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        L = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        k = /^(data-.*)$/;
      const S = "undefined" != typeof document ? o.useLayoutEffect : () => {};
      var C;
      const M = null !== (C = o.useInsertionEffect) && void 0 !== C ? C : S;

      function x(e) {
        const t = (0, o.useRef)(null);
        return M(() => {
          t.current = e
        }, [e]), (0, o.useCallback)((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }, [])
      }
      const K = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        D = e => e && "window" in e && e.window === e ? e : K(e).defaultView || window;

      function A(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
      const O = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function N(e, t) {
        return O ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = D(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: r
          } = e.style, o = "none" !== n && "hidden" !== r && "collapse" !== r;
          if (o) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            o = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return o
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || N(e.parentElement, e))
      }
      const _ = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        F = _.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function I(e) {
        return e.matches(F) && N(e) && ! function(e) {
          let t = e;
          for (; null != t;) {
            if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
            t = t.parentElement
          }
          return !1
        }(e)
      }

      function U(e) {
        if (function() {
            if (null == R) {
              R = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return R = !0, !0
                  }
                })
              } catch {}
            }
            return R
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              n = [],
              r = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== r;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && n.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return r instanceof HTMLElement && n.push({
              element: r,
              scrollTop: r.scrollTop,
              scrollLeft: r.scrollLeft
            }), n
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: n,
                  scrollLeft: r
                }
                of e) t.scrollTop = n, t.scrollLeft = r
            }(t)
        }
      }
      _.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), _.join(':not([hidden]):not([tabindex="-1"]),');
      let R = null;

      function H(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }
      let j = !1;

      function W(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let n = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function V(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function z(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const X = z(function() {
          return V(/^Mac/i)
        }),
        G = z(function() {
          return V(/^iPhone/i)
        }),
        B = z(function() {
          return V(/^iPad/i) || X() && navigator.maxTouchPoints > 1
        }),
        Y = z(function() {
          return G() || B()
        }),
        Z = (z(function() {
          return X() || Y()
        }), z(function() {
          return W(/AppleWebKit/i) && !$()
        })),
        $ = z(function() {
          return W(/Chrome/i)
        }),
        q = z(function() {
          return W(/Android/i)
        }),
        Q = z(function() {
          return W(/Firefox/i)
        });
      let J = new Map,
        ee = new Set;

      function te() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let r = J.get(n.target);
          if (r && (r.delete(n.propertyName), 0 === r.size && (n.target.removeEventListener("transitioncancel", t), J.delete(n.target)), 0 === J.size)) {
            for (let e of ee) e();
            ee.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          if (!e(n) || !n.target) return;
          let r = J.get(n.target);
          r || (r = new Set, J.set(n.target, r), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), r.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function ne(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of J) "isConnected" in e && !e.isConnected && J.delete(e)
          }(), 0 === J.size ? e() : ee.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? te() : document.addEventListener("DOMContentLoaded", te));
      let re = "default",
        oe = "",
        ie = new WeakMap;

      function ae(e) {
        if (Y()) {
          if ("disabled" !== re) return;
          re = "restoring", setTimeout(() => {
            ne(() => {
              if ("restoring" === re) {
                const t = K(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = oe || ""), oe = "", re = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && ie.has(e)) {
          let t = ie.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), ie.delete(e)
        }
      }
      const se = o.createContext({
        register: () => {}
      });
      se.displayName = "PressResponderContext";
      var le = n(88842),
        ue = n(57178),
        ce = n(72562);

      function de(e, t) {
        S(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
      var fe = n(35412);

      function pe(e, t) {
        if (!(0, fe.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let n = t;
        for (; null !== n;) {
          if (n === e) return !0;
          n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : A(n) ? n.host : n.parentNode
        }
        return !1
      }
      const ve = (e = document) => {
        var t;
        if (!(0, fe.Nf)()) return e.activeElement;
        let n = e.activeElement;
        for (; n && "shadowRoot" in n && (null === (t = n.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) n = n.shadowRoot.activeElement;
        return n
      };

      function me(e) {
        return (0, fe.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }

      function ge(e, t, n = !0) {
        var r, o;
        let {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        } = t;
        Q() && (null === (o = window.event) || void 0 === o || null === (r = o.type) || void 0 === r ? void 0 : r.startsWith("key")) && "_blank" === e.target && (X() ? i = !0 : a = !0);
        let u = Z() && X() && !B() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: a,
          altKey: s,
          shiftKey: l,
          bubbles: !0,
          cancelable: !0
        });
        ge.isOpening = n, U(e), e.dispatchEvent(u), ge.isOpening = !1
      }

      function ye(e) {
        return !("" !== e.pointerType || !e.isTrusted) || (q() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }
      ge.isOpening = !1, n(18429);
      var be = new WeakMap;
      class he {
        continuePropagation() {
          (0, ce._)(this, be, !1)
        }
        get shouldStopPropagation() {
          return (0, le._)(this, be)
        }
        constructor(e, t, n, r) {
          var o;
          (0, ue._)(this, be, {
            writable: !0,
            value: void 0
          }), (0, ce._)(this, be, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, u = 0,
            c = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, c = n.clientY), a && (null != l && null != c ? (s = l - a.left, u = c - a.top) : (s = a.width / 2, u = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = u
        }
      }
      const Ee = Symbol("linkClicked"),
        we = "react-aria-pressable-style",
        Pe = "data-react-aria-pressable";

      function Te(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: r,
          onPressEnd: i,
          onPressUp: a,
          onClick: s,
          isDisabled: l,
          isPressed: u,
          preventFocusOnPress: c,
          shouldCancelOnPointerExit: d,
          allowTextSelectionOnPress: f,
          ref: p,
          ...m
        } = function(e) {
          let t = (0, o.useContext)(se);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = h(r, e), n()
          }
          return de(t, e.ref), e
        }(e), [g, y] = (0, o.useState)(!1), b = (0, o.useRef)({
          isPressed: !1,
          ignoreEmulatedMouseEvents: !1,
          didFirePressStart: !1,
          isTriggeringEvent: !1,
          activePointerId: null,
          target: null,
          isOverTarget: !1,
          pointerType: null,
          disposables: []
        }), {
          addGlobalListener: E,
          removeAllGlobalListeners: w
        } = function() {
          let e = (0, o.useRef)(new Map),
            t = (0, o.useCallback)((t, n, r, o) => {
              let i = (null == o ? void 0 : o.once) ? (...t) => {
                e.current.delete(r), r(...t)
              } : r;
              e.current.set(r, {
                type: n,
                eventTarget: t,
                fn: i,
                options: o
              }), t.addEventListener(n, i, o)
            }, []),
            n = (0, o.useCallback)((t, n, r, o) => {
              var i;
              let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
              t.removeEventListener(n, a, o), e.current.delete(r)
            }, []),
            r = (0, o.useCallback)(() => {
              e.current.forEach((e, t) => {
                n(e.eventTarget, e.type, t, e.options)
              })
            }, [n]);
          return (0, o.useEffect)(() => r, [r]), {
            addGlobalListener: t,
            removeGlobalListener: n,
            removeAllGlobalListeners: r
          }
        }(), P = x((e, t) => {
          let o = b.current;
          if (l || o.didFirePressStart) return !1;
          let i = !0;
          if (o.isTriggeringEvent = !0, r) {
            let n = new he("pressstart", t, e);
            r(n), i = n.shouldStopPropagation
          }
          return n && n(!0), o.isTriggeringEvent = !1, o.didFirePressStart = !0, y(!0), i
        }), T = x((e, r, o = !0) => {
          let a = b.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let s = !0;
          if (i) {
            let t = new he("pressend", r, e);
            i(t), s = t.shouldStopPropagation
          }
          if (n && n(!1), y(!1), t && o && !l) {
            let n = new he("press", r, e);
            t(n), s && (s = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, s
        }), L = x((e, t) => {
          let n = b.current;
          if (l) return !1;
          if (a) {
            n.isTriggeringEvent = !0;
            let r = new he("pressup", t, e);
            return a(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }), k = x(e => {
          let t = b.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && T(Se(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, w(), f || ae(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), S = x(e => {
          d && k(e)
        }), C = x(e => {
          l || null == s || s(e)
        }), M = x((e, t) => {
          if (!l && s) {
            let n = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(n, t), s(H(n))
          }
        }), A = (0, o.useMemo)(() => {
          let e = b.current,
            t = {
              onKeyDown(t) {
                if (ke(t.nativeEvent, t.currentTarget) && pe(t.currentTarget, me(t.nativeEvent))) {
                  var r;
                  Ce(me(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = P(t, "keyboard");
                    let r = t.currentTarget,
                      i = t => {
                        ke(t, r) && !t.repeat && pe(r, me(t)) && e.target && L(Se(e.target, t), "keyboard")
                      };
                    E(K(t.currentTarget), "keyup", v(i, n), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && X() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || pe(t.currentTarget, me(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !ge.isOpening) {
                  let n = !0;
                  if (l && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !ye(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = L(Se(t.currentTarget, t), r),
                        i = T(Se(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, C(t), k(t)
                    }
                  } else {
                    let e = P(t, "virtual"),
                      r = L(t, "virtual"),
                      o = T(t, "virtual");
                    C(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && ke(t, e.target)) {
                var r;
                Ce(me(t), t.key) && t.preventDefault();
                let n = me(t),
                  o = pe(e.target, me(t));
                T(Se(e.target, t), "keyboard", o), o && M(t, e.target), w(), "Enter" !== t.key && Le(e.target) && pe(e.target, n) && !t[Ee] && (t[Ee] = !0, ge(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !pe(t.currentTarget, me(t.nativeEvent))) return;
              if (o = t.nativeEvent, !q() && 0 === o.width && 0 === o.height || 1 === o.width && 1 === o.height && 0 === o.pressure && 0 === o.detail && "mouse" === o.pointerType) return void(e.pointerType = "virtual");
              var o;
              e.pointerType = t.pointerType;
              let i = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, f || function(e) {
                  if (Y()) {
                    if ("default" === re) {
                      const t = K(e);
                      oe = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    re = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    ie.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), i = P(t, e.pointerType);
                let o = me(t.nativeEvent);
                "releasePointerCapture" in o && o.releasePointerCapture(t.pointerId), E(K(t.currentTarget), "pointerup", n, !1), E(K(t.currentTarget), "pointercancel", r, !1)
              }
              i && t.stopPropagation()
            }, t.onMouseDown = t => {
              if (pe(t.currentTarget, me(t.nativeEvent)) && 0 === t.button) {
                if (c) {
                  let n = function(e) {
                    for (; e && !I(e);) e = e.parentElement;
                    let t = D(e),
                      n = t.document.activeElement;
                    if (!n || n === e) return;
                    j = !0;
                    let r = !1,
                      o = e => {
                        (e.target === n || r) && e.stopImmediatePropagation()
                      },
                      i = t => {
                        (t.target === n || r) && (t.stopImmediatePropagation(), e || r || (r = !0, U(n), l()))
                      },
                      a = t => {
                        (t.target === e || r) && t.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === e || r) && (t.stopImmediatePropagation(), r || (r = !0, U(n), l()))
                      };
                    t.addEventListener("blur", o, !0), t.addEventListener("focusout", i, !0), t.addEventListener("focusin", s, !0), t.addEventListener("focus", a, !0);
                    let l = () => {
                        cancelAnimationFrame(u), t.removeEventListener("blur", o, !0), t.removeEventListener("focusout", i, !0), t.removeEventListener("focusin", s, !0), t.removeEventListener("focus", a, !0), j = !1, r = !1
                      },
                      u = requestAnimationFrame(l);
                    return l
                  }(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              pe(t.currentTarget, me(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || L(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, P(Se(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, T(Se(e.target, t), e.pointerType, !1), S(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if (pe(e.target, me(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? k(t) : (U(e.target), e.target.click()))
                      }, 80);
                    E(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else k(t);
                  e.isOverTarget = !1
                }
              },
              r = e => {
                k(e)
              };
            t.onDragStart = e => {
              pe(e.currentTarget, me(e.nativeEvent)) && k(e)
            }
          }
          return t
        }, [E, l, c, w, f, k, S, T, P, L, C, M]);
        return (0, o.useEffect)(() => {
          if (!p) return;
          const e = K(p.current);
          if (!e || !e.head || e.getElementById(we)) return;
          const t = e.createElement("style");
          t.id = we, t.textContent = `\n@layer {\n  [${Pe}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [p]), (0, o.useEffect)(() => {
          let e = b.current;
          return () => {
            var t;
            f || ae(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [f]), {
          isPressed: u || g,
          pressProps: h(m, A, {
            [Pe]: !0
          })
        }
      }

      function Le(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function ke(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof D(o).HTMLInputElement && !xe(o, n) || o instanceof D(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && Le(o)) && "Enter" !== n)
      }

      function Se(e, t) {
        let n = t.clientX,
          r = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: n,
          clientY: r
        }
      }

      function Ce(e, t) {
        return e instanceof HTMLInputElement ? !xe(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : Le(e)))
        }(e)
      }
      const Me = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function xe(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : Me.has(e.type)
      }
      let Ke = null,
        De = new Set,
        Ae = new Map,
        Oe = !1,
        Ne = !1;

      function _e(e, t) {
        for (let n of De) n(e, t)
      }

      function Fe(e) {
        Oe = !0,
          function(e) {
            return !(e.metaKey || !X() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (Ke = "keyboard", _e("keyboard", e))
      }

      function Ie(e) {
        Ke = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (Oe = !0, _e("pointer", e))
      }

      function Ue(e) {
        ye(e) && (Oe = !0, Ke = "virtual")
      }

      function Re(e) {
        e.target !== window && e.target !== document && !j && e.isTrusted && (Oe || Ne || (Ke = "virtual", _e("virtual", e)), Oe = !1, Ne = !1)
      }

      function He() {
        j || (Oe = !1, Ne = !0)
      }

      function je(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || Ae.get(D(e))) return;
        const t = D(e),
          n = K(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          Oe = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", Fe, !0), n.addEventListener("keyup", Fe, !0), n.addEventListener("click", Ue, !0), t.addEventListener("focus", Re, !0), t.addEventListener("blur", He, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", Ie, !0), n.addEventListener("pointermove", Ie, !0), n.addEventListener("pointerup", Ie, !0)), t.addEventListener("beforeunload", () => {
          We(e)
        }, {
          once: !0
        }), Ae.set(t, {
          focus: r
        })
      }
      const We = (e, t) => {
        const n = D(e),
          r = K(e);
        t && r.removeEventListener("DOMContentLoaded", t), Ae.has(n) && (n.HTMLElement.prototype.focus = Ae.get(n).focus, r.removeEventListener("keydown", Fe, !0), r.removeEventListener("keyup", Fe, !0), r.removeEventListener("click", Ue, !0), n.removeEventListener("focus", Re, !0), n.removeEventListener("blur", He, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", Ie, !0), r.removeEventListener("pointermove", Ie, !0), r.removeEventListener("pointerup", Ie, !0)), Ae.delete(n))
      };

      function Ve(e) {
        let {
          isDisabled: t,
          onFocus: n,
          onBlur: r,
          onFocusChange: i
        } = e;
        const a = (0, o.useCallback)(e => {
            if (e.target === e.currentTarget) return r && r(e), i && i(!1), !0
          }, [r, i]),
          s = function(e) {
            let t = (0, o.useRef)({
              isFocused: !1,
              observer: null
            });
            S(() => {
              const e = t.current;
              return () => {
                e.observer && (e.observer.disconnect(), e.observer = null)
              }
            }, []);
            let n = x(t => {
              null == e || e(t)
            });
            return (0, o.useCallback)(e => {
              if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
                t.current.isFocused = !0;
                let r = e.target,
                  o = e => {
                    if (t.current.isFocused = !1, r.disabled) {
                      let t = H(e);
                      n(t)
                    }
                    t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
                  };
                r.addEventListener("focusout", o, {
                  once: !0
                }), t.current.observer = new MutationObserver(() => {
                  if (t.current.isFocused && r.disabled) {
                    var e;
                    null === (e = t.current.observer) || void 0 === e || e.disconnect();
                    let n = r === document.activeElement ? null : document.activeElement;
                    r.dispatchEvent(new FocusEvent("blur", {
                      relatedTarget: n
                    })), r.dispatchEvent(new FocusEvent("focusout", {
                      bubbles: !0,
                      relatedTarget: n
                    }))
                  }
                }), t.current.observer.observe(r, {
                  attributes: !0,
                  attributeFilter: ["disabled"]
                })
              }
            }, [n])
          }(a),
          l = (0, o.useCallback)(e => {
            const t = K(e.target),
              r = t ? ve(t) : ve();
            e.target === e.currentTarget && r === me(e.nativeEvent) && (n && n(e), i && i(!0), s(e))
          }, [i, n, s]);
        return {
          focusProps: {
            onFocus: !t && (n || i || r) ? l : void 0,
            onBlur: t || !r && !i ? void 0 : a
          }
        }
      }

      function ze(e) {
        if (!e) return;
        let t = !0;
        return n => {
          let r = {
            ...n,
            preventDefault() {
              n.preventDefault()
            },
            isDefaultPrevented: () => n.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(r), t && n.stopPropagation()
        }
      }
      "undefined" != typeof document && function(e) {
        const t = K(e);
        let n;
        "loading" !== t.readyState ? je(e) : (n = () => {
          je(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);
      let Xe = o.createContext(null);

      function Ge(e, t) {
        let {
          focusProps: n
        } = Ve(e), {
          keyboardProps: r
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: ze(e.onKeyDown),
              onKeyUp: ze(e.onKeyUp)
            }
          }
        }(e), i = h(n, r), a = function(e) {
          let t = (0, o.useContext)(Xe) || {};
          de(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), s = e.isDisabled ? {} : a, l = (0, o.useRef)(e.autoFocus);
        (0, o.useEffect)(() => {
          l.current && t.current && function(e) {
            const t = K(e),
              n = ve(t);
            if ("virtual" === Ke) {
              let r = n;
              ne(() => {
                ve(t) === r && e.isConnected && U(e)
              })
            } else U(e)
          }(t.current), l.current = !1
        }, [t]);
        let u = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (u = void 0), {
          focusableProps: h({
            ...i,
            tabIndex: u
          }, s)
        }
      }

      function Be(e, t) {
        let n, {
          elementType: r = "button",
          isDisabled: o,
          onPress: i,
          onPressStart: a,
          onPressEnd: s,
          onPressUp: l,
          onPressChange: u,
          preventFocusOnPress: c,
          allowFocusWhenDisabled: d,
          onClick: f,
          href: p,
          target: v,
          rel: m,
          type: g = "button"
        } = e;
        n = "button" === r ? {
          type: g,
          disabled: o,
          form: e.form,
          formAction: e.formAction,
          formEncType: e.formEncType,
          formMethod: e.formMethod,
          formNoValidate: e.formNoValidate,
          formTarget: e.formTarget,
          name: e.name,
          value: e.value
        } : {
          role: "button",
          href: "a" !== r || o ? void 0 : p,
          target: "a" === r ? v : void 0,
          type: "input" === r ? g : void 0,
          disabled: "input" === r ? o : void 0,
          "aria-disabled": o && "input" !== r ? o : void 0,
          rel: "a" === r ? m : void 0
        };
        let {
          pressProps: y,
          isPressed: b
        } = Te({
          onPressStart: a,
          onPressEnd: s,
          onPressChange: u,
          onPress: i,
          onPressUp: l,
          onClick: f,
          isDisabled: o,
          preventFocusOnPress: c,
          ref: t
        }), {
          focusableProps: S
        } = Ge(e, t);
        d && (S.tabIndex = o ? -1 : S.tabIndex);
        let C = h(S, y, function(e, t = {}) {
          let {
            labelable: n,
            isLink: r,
            global: o,
            events: i = o,
            propNames: a
          } = t, s = {};
          for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (E.has(t) || n && w.has(t) || r && P.has(t) || o && T.has(t) || i && L.has(t) || t.endsWith("Capture") && L.has(t.slice(0, -7)) || (null == a ? void 0 : a.has(t)) || k.test(t)) && (s[t] = e[t]);
          return s
        }(e, {
          labelable: !0
        }));
        return {
          isPressed: b,
          buttonProps: h(n, C, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"],
            "aria-disabled": e["aria-disabled"]
          })
        }
      }
      const Ye = /^(on.*)$/,
        Ze = /^(onPress.*)$/;
      var $e = n(51105);
      const qe = ({
        inert: e,
        className: t,
        onClick: n,
        isLoading: r,
        ...o
      }, i) => {
        const {
          events: a,
          others: s
        } = function(e, {
          onPress: t
        } = {
          onPress: !0
        }) {
          const n = {},
            r = {};
          for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (Ze.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : Ye.test(o) ? n[o] = e[o] : r[o] = e[o]);
          return {
            events: n,
            others: r
          }
        }(o, {
          onPress: !1
        }), {
          buttonProps: l,
          isPressed: u
        } = Be({
          ...s,
          elementType: "button",
          preventFocusOnPress: !0,
          onPress: e => {
            r || (s.onPress?.(e) ?? n?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, i), c = {
          ...l,
          role: "button",
          "data-pressed": !e && u,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && u,
          buttonProps: (0, $e.v)(e ? {} : c, {
            ...a,
            className: t
          })
        }
      }
    },
    31130: (e, t, n) => {
      function r(e, t, n) {
        if (!t.has(e)) throw new TypeError("attempted to " + n + " private field on non-instance");
        return t.get(e)
      }
      n.d(t, {
        _: () => r
      })
    },
    35412: (e, t, n) => {
      n.d(t, {
        Nf: () => o
      });
      let r = !1;

      function o() {
        return r
      }
    },
    50078: (e, t, n) => {
      n.d(t, {
        NP: () => m,
        Ym: () => u,
        zQ: () => l
      });
      var r = n(42295),
        o = (n(84735), n(4408)),
        i = n(71127);
      const a = (0, i.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          locale: "en-US"
        }),
        s = () => (0, i.useContext)(a),
        l = () => {
          const {
            platformScale: e
          } = s();
          return e
        },
        u = () => {
          const {
            locale: e
          } = s();
          return e
        };
      var c = n(19403),
        d = n(86825);
      const f = e => "dark" === e ? d.xW.dark : d.xW.light;
      var p = n(75523);
      const v = () => p.X3 ? null : document.body,
        m = (0, i.forwardRef)(({
          children: e,
          className: t,
          container: n = v(),
          asChild: s,
          colorScheme: l,
          defaultColorScheme: u,
          defaultPlatformScale: m,
          platformScale: g,
          onPlatformScaleChange: y,
          locale: b = "en-US"
        }, h) => {
          const E = (0, i.useRef)(null),
            w = (0, c.UP)(E, h),
            P = (0, i.useRef)(n),
            {
              ratio: T,
              scale: L
            } = function(e) {
              const [t, n] = (0, i.useState)(e.platformScale || e.defaultPlatformScale), r = (0, i.useCallback)(t => {
                n(t), e.onPlatformScaleChange?.(t)
              }, [e.onPlatformScaleChange]), o = (0, i.useRef)([]), a = () => {
                if (!p.X3) {
                  for (const {
                      handler: e,
                      matchMedia: t
                    }
                    of o.current) t.removeEventListener("change", e);
                  o.current = []
                }
              };
              return (0, i.useEffect)(() => (e.platformScale ? r(e.platformScale) : (() => {
                if (!p.X3) {
                  a();
                  for (const e in d.wj) {
                    const t = window.matchMedia(d.wj[e]),
                      n = t => {
                        t.matches && r(e)
                      };
                    t.addEventListener("change", n), t.matches && r(e), o.current.push({
                      handler: n,
                      matchMedia: t
                    })
                  }
                }
              })(), a), [e.platformScale, r]), {
                scale: t,
                ratio: d.nz[t]
              }
            }({
              onPlatformScaleChange: y,
              defaultPlatformScale: m,
              platformScale: g
            }),
            {
              appearanceClass: k,
              otherAppearanceClasses: S,
              providerColor: C
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark"
            }) {
              const n = (0, c.Ub)("(prefers-color-scheme: light)"),
                r = (0, c.Ub)("(prefers-color-scheme: dark)"),
                o = "system" !== e && e || n && "light" || r && "dark" || t,
                a = (0, i.useMemo)(() => f(o), [o]),
                s = (0, i.useMemo)(() => (e => {
                  const t = f(e);
                  return [d.xW.light, d.xW.dark].filter(e => e !== t)
                })(o), [o]);
              return {
                appearanceClass: a,
                otherAppearanceClasses: s,
                providerColor: o
              }
            }({
              colorScheme: l,
              defaultColorScheme: u
            });
          return (({
            container: e,
            currentScale: t,
            appearanceClass: n,
            otherAppearanceClasses: r,
            locale: o,
            className: a
          }) => {
            const s = (0, c.ZC)(a),
              l = (0, c.ZC)(e.current);
            (0, i.useEffect)(() => {
              e.current?.classList.contains(d.X6) || e.current?.classList.add(d.X6), e.current?.classList.contains(d.yU) || e.current?.classList.add(d.yU), e.current?.classList.add(n), e.current?.classList.remove(...r), s && a && e.current?.classList.contains(s) ? e.current?.classList.replace(s, a) : s && !a && e.current?.classList.contains(s) ? e.current?.classList.remove(s) : a && e.current?.classList.add(a)
            }, [n, a]), (0, i.useEffect)(() => {
              e.current?.setAttribute("lang", o)
            }, [o]), (0, i.useEffect)(() => (t && e.current?.style.setProperty(d.HZ, t.toString()), () => {
              e.current?.style.removeProperty(d.HZ)
            }), [t]), (0, i.useEffect)(() => {
              l?.classList.remove(d.X6), l?.classList.remove(d.yU), l?.classList.remove(n), l?.style.removeProperty(d.HZ), a && l?.classList.remove(a)
            }, [l])
          })({
            locale: b,
            className: t,
            appearanceClass: k,
            otherAppearanceClasses: S,
            currentScale: g ? T : -0,
            container: s ? E : P
          }), (0, r.jsx)(a.Provider, {
            value: {
              locale: b,
              defaultColorScheme: u,
              colorScheme: C,
              defaultPlatformScale: m,
              platformScale: L
            },
            children: s ? (0, r.jsx)(o.DX, {
              ref: w,
              children: e
            }) : e
          })
        })
    },
    57178: (e, t, n) => {
      function r(e, t, n) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, n)
      }
      n.d(t, {
        _: () => r
      })
    },
    72562: (e, t, n) => {
      n.d(t, {
        _: () => o
      });
      var r = n(31130);

      function o(e, t, n) {
        return function(e, t, n) {
          if (t.set) t.set.call(e, n);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = n
          }
        }(e, (0, r._)(e, t, "set"), n), n
      }
    },
    86825: (e, t, n) => {
      n.d(t, {
        nz: () => r,
        wj: () => o,
        xW: () => i,
        HZ: () => a,
        X6: () => s,
        yU: () => l
      });
      var r = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        o = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        i = {
          dark: "foundry_nu8bkp6",
          light: "foundry_nu8bkp5",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        a = "--foundry-platform-scales-ratio-65afb887",
        s = "foundry_nu8bkp4",
        l = "foundry_nu8bkp3"
    },
    88842: (e, t, n) => {
      n.d(t, {
        _: () => o
      });
      var r = n(31130);

      function o(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, (0, r._)(e, t, "get"))
      }
    }
  }
]);