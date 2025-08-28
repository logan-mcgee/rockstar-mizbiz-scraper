try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dd5fa1c8-4998-48ea-90a2-e408c7cbcdcd", e._sentryDebugIdIdentifier = "sentry-dbid-dd5fa1c8-4998-48ea-90a2-e408c7cbcdcd")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "b3bd47b24b7b42d8940ac28238cd2e138ae3f139"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [7793], {
    116: (e, t, r) => {
      r.d(t, {
        w: () => n
      });
      var l = r(31985);

      function n(e, t) {
        (0, l.N)((() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        }))
      }
    },
    1331: (e, t, r) => {
      r.d(t, {
        d: () => ne
      });
      const l = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        n = e => e && "window" in e && e.window === e ? e : l(e).defaultView || window;

      function a(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
      const o = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function i(e, t) {
        return o ? e.checkVisibility() : "#comment" !== e.nodeName && function(e) {
          const t = n(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: r,
            visibility: l
          } = e.style, a = "none" !== r && "hidden" !== l && "collapse" !== l;
          if (a) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: r,
              visibility: l
            } = t(e);
            a = "none" !== r && "hidden" !== l && "collapse" !== l
          }
          return a
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || i(e.parentElement, e))
      }
      const s = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        c = s.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";

      function d(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }

      function u(e) {
        if (function() {
            if (null == h) {
              h = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return h = !0, !0
                  }
                })
              } catch {}
            }
            return h
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              r = [],
              l = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== l;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return l instanceof HTMLElement && r.push({
              element: l,
              scrollTop: l.scrollTop,
              scrollLeft: l.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: l
                }
                of e) t.scrollTop = r, t.scrollLeft = l
            }(t)
        }
      }
      s.push('[tabindex]:not([tabindex="-1"]):not([disabled])'), s.join(':not([hidden]):not([tabindex="-1"]),');
      let h = null;
      var f = r(71127);
      let v = !1;

      function p(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let r = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(r) && r.some((t => e.test(t.brand))) || e.test(window.navigator.userAgent)
      }

      function g(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function w(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      const m = w((function() {
          return g(/^Mac/i)
        })),
        x = w((function() {
          return g(/^iPhone/i)
        })),
        b = w((function() {
          return g(/^iPad/i) || m() && navigator.maxTouchPoints > 1
        })),
        j = w((function() {
          return x() || b()
        })),
        y = (w((function() {
          return m() || j()
        })), w((function() {
          return p(/AppleWebKit/i) && !R()
        }))),
        R = w((function() {
          return p(/Chrome/i)
        })),
        M = w((function() {
          return p(/Android/i)
        })),
        L = w((function() {
          return p(/Firefox/i)
        }));
      let C = new Map,
        E = new Set;

      function A() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let l = C.get(r.target);
          if (l && (l.delete(r.propertyName), 0 === l.size && (r.target.removeEventListener("transitioncancel", t), C.delete(r.target)), 0 === C.size)) {
            for (let e of E) e();
            E.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let l = C.get(r.target);
          l || (l = new Set, C.set(r.target, l), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), l.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? A() : document.addEventListener("DOMContentLoaded", A));
      let P = "default",
        I = "",
        S = new WeakMap;

      function _(e) {
        if (j()) {
          if ("disabled" !== P) return;
          P = "restoring", setTimeout((() => {
            var t;
            t = () => {
              if ("restoring" === P) {
                const t = l(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = I || ""), I = "", P = "default"
              }
            }, requestAnimationFrame((() => {
              ! function() {
                for (const [e] of C) "isConnected" in e && !e.isConnected && C.delete(e)
              }(), 0 === C.size ? t() : E.add(t)
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && S.has(e)) {
          let t = S.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), S.delete(e)
        }
      }
      const z = f.createContext({
        register: () => {}
      });
      z.displayName = "PressResponderContext";
      var H = r(90162),
        T = r(59194),
        D = r(99427);

      function B(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let N, k = new Map;

      function V(e, t) {
        if (e === t) return e;
        let r = k.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let l = k.get(t);
        return l ? (l.forEach((t => t.current = e)), e) : t
      }
      "undefined" != typeof FinalizationRegistry && (N = new FinalizationRegistry((e => {
        k.delete(e)
      })));
      var O = r(5060);

      function G(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let l = e[r];
          for (let e in l) {
            let r = t[e],
              n = l[e];
            "function" == typeof r && "function" == typeof n && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = B(r, n) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof n ? "id" === e && r && n ? t.id = V(r, n) : t[e] = void 0 !== n ? n : r : t[e] = (0, O.A)(r, n)
          }
        }
        return t
      }
      const F = "undefined" != typeof document ? f.useLayoutEffect : () => {};
      var X;
      const q = null !== (X = f.useInsertionEffect) && void 0 !== X ? X : F;

      function U(e) {
        const t = (0, f.useRef)(null);
        return q((() => {
          t.current = e
        }), [e]), (0, f.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }
      let K = !1;

      function W() {
        return K
      }

      function $(e, t) {
        if (!W()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : a(r) ? r.host : r.parentNode
        }
        return !1
      }

      function Y(e) {
        return W() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }

      function Z(e, t, r = !0) {
        var l, n;
        let {
          metaKey: a,
          ctrlKey: o,
          altKey: i,
          shiftKey: s
        } = t;
        L() && (null === (n = window.event) || void 0 === n || null === (l = n.type) || void 0 === l ? void 0 : l.startsWith("key")) && "_blank" === e.target && (m() ? a = !0 : o = !0);
        let c = y() && m() && !b() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: a,
          ctrlKey: o,
          altKey: i,
          shiftKey: s
        }) : new MouseEvent("click", {
          metaKey: a,
          ctrlKey: o,
          altKey: i,
          shiftKey: s,
          bubbles: !0,
          cancelable: !0
        });
        Z.isOpening = r, u(e), e.dispatchEvent(c), Z.isOpening = !1
      }

      function Q(e) {
        let t = (0, f.useContext)(z);
        if (t) {
          let {
            register: r,
            ...l
          } = t;
          e = G(l, e), r()
        }
        return function(e, t) {
          F((() => {
            if (e && e.ref && t) return e.ref.current = t.current, () => {
              e.ref && (e.ref.current = null)
            }
          }))
        }(t, e.ref), e
      }
      Z.isOpening = !1, r(18429);
      var J = new WeakMap;
      class ee {
        continuePropagation() {
          (0, D._)(this, J, !1)
        }
        get shouldStopPropagation() {
          return (0, H._)(this, J)
        }
        constructor(e, t, r, l) {
          var n;
          (0, T._)(this, J, {
            writable: !0,
            value: void 0
          }), (0, D._)(this, J, !0);
          let a = null !== (n = null == l ? void 0 : l.target) && void 0 !== n ? n : r.currentTarget;
          const o = null == a ? void 0 : a.getBoundingClientRect();
          let i, s, c = 0,
            d = null;
          null != r.clientX && null != r.clientY && (s = r.clientX, d = r.clientY), o && (null != s && null != d ? (i = s - o.left, c = d - o.top) : (i = o.width / 2, c = o.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = i, this.y = c
        }
      }
      const te = Symbol("linkClicked"),
        re = "react-aria-pressable-style",
        le = "data-react-aria-pressable";

      function ne(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: a,
          onPressEnd: o,
          onPressUp: s,
          onClick: h,
          isDisabled: p,
          isPressed: g,
          preventFocusOnPress: w,
          shouldCancelOnPointerExit: x,
          allowTextSelectionOnPress: b,
          ref: y,
          ...R
        } = Q(e), [L, C] = (0, f.useState)(!1), E = (0, f.useRef)({
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
          addGlobalListener: A,
          removeAllGlobalListeners: z
        } = function() {
          let e = (0, f.useRef)(new Map),
            t = (0, f.useCallback)(((t, r, l, n) => {
              let a = (null == n ? void 0 : n.once) ? (...t) => {
                e.current.delete(l), l(...t)
              } : l;
              e.current.set(l, {
                type: r,
                eventTarget: t,
                fn: a,
                options: n
              }), t.addEventListener(r, a, n)
            }), []),
            r = (0, f.useCallback)(((t, r, l, n) => {
              var a;
              let o = (null === (a = e.current.get(l)) || void 0 === a ? void 0 : a.fn) || l;
              t.removeEventListener(r, o, n), e.current.delete(l)
            }), []),
            l = (0, f.useCallback)((() => {
              e.current.forEach(((e, t) => {
                r(e.eventTarget, e.type, t, e.options)
              }))
            }), [r]);
          return (0, f.useEffect)((() => l), [l]), {
            addGlobalListener: t,
            removeGlobalListener: r,
            removeAllGlobalListeners: l
          }
        }(), H = U(((e, t) => {
          let l = E.current;
          if (p || l.didFirePressStart) return !1;
          let n = !0;
          if (l.isTriggeringEvent = !0, a) {
            let r = new ee("pressstart", t, e);
            a(r), n = r.shouldStopPropagation
          }
          return r && r(!0), l.isTriggeringEvent = !1, l.didFirePressStart = !0, C(!0), n
        })), T = U(((e, l, n = !0) => {
          let a = E.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let i = !0;
          if (o) {
            let t = new ee("pressend", l, e);
            o(t), i = t.shouldStopPropagation
          }
          if (r && r(!1), C(!1), t && n && !p) {
            let r = new ee("press", l, e);
            t(r), i && (i = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, i
        })), D = U(((e, t) => {
          let r = E.current;
          if (p) return !1;
          if (s) {
            r.isTriggeringEvent = !0;
            let l = new ee("pressup", t, e);
            return s(l), r.isTriggeringEvent = !1, l.shouldStopPropagation
          }
          return !0
        })), N = U((e => {
          let t = E.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && T(ie(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, z(), b || _(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), k = U((e => {
          x && N(e)
        })), V = U((e => {
          null == h || h(e)
        })), O = U(((e, t) => {
          if (h) {
            let r = new MouseEvent("click", e);
            (function(e, t) {
              Object.defineProperty(e, "target", {
                value: t
              }), Object.defineProperty(e, "currentTarget", {
                value: t
              })
            })(r, t), h(function(e) {
              let t = e;
              return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
            }(r))
          }
        })), F = (0, f.useMemo)((() => {
          let e = E.current,
            t = {
              onKeyDown(t) {
                if (oe(t.nativeEvent, t.currentTarget) && $(t.currentTarget, Y(t.nativeEvent))) {
                  var n;
                  se(Y(t.nativeEvent), t.key) && t.preventDefault();
                  let a = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", a = H(t, "keyboard");
                    let n = t.currentTarget,
                      o = t => {
                        oe(t, n) && !t.repeat && $(n, Y(t)) && e.target && D(ie(e.target, t), "keyboard")
                      };
                    A(l(t.currentTarget), "keyup", B(o, r), !0)
                  }
                  a && t.stopPropagation(), t.metaKey && m() && (null === (n = e.metaKeyEvents) || void 0 === n || n.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                var r;
                if ((!t || $(t.currentTarget, Y(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !Z.isOpening) {
                  let l = !0;
                  if (p && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && (0 !== (r = t.nativeEvent).mozInputSource || !r.isTrusted) && (M() && r.pointerType ? "click" !== r.type || 1 !== r.buttons : 0 !== r.detail || r.pointerType)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        n = D(ie(t.currentTarget, t), r),
                        a = T(ie(t.currentTarget, t), r, !0);
                      l = n && a, e.isOverTarget = !1, V(t), N(t)
                    }
                  } else {
                    let e = H(t, "virtual"),
                      r = D(t, "virtual"),
                      n = T(t, "virtual");
                    V(t), l = e && r && n
                  }
                  e.ignoreEmulatedMouseEvents = !1, l && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && oe(t, e.target)) {
                var l;
                se(Y(t), t.key) && t.preventDefault();
                let r = Y(t),
                  n = $(e.target, Y(t));
                T(ie(e.target, t), "keyboard", n), n && O(t, e.target), z(), "Enter" !== t.key && ae(e.target) && $(e.target, r) && !t[te] && (t[te] = !0, Z(e.target, t, !1)), e.isPressed = !1, null === (l = e.metaKeyEvents) || void 0 === l || l.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var n;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (n = e.target) || void 0 === n || n.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !$(t.currentTarget, Y(t.nativeEvent))) return;
              if (n = t.nativeEvent, !M() && 0 === n.width && 0 === n.height || 1 === n.width && 1 === n.height && 0 === n.pressure && 0 === n.detail && "mouse" === n.pointerType) return void(e.pointerType = "virtual");
              var n;
              e.pointerType = t.pointerType;
              let o = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, b || function(e) {
                  if (j()) {
                    if ("default" === P) {
                      const t = l(e);
                      I = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    P = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    S.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), o = H(t, e.pointerType);
                let n = Y(t.nativeEvent);
                "releasePointerCapture" in n && n.releasePointerCapture(t.pointerId), A(l(t.currentTarget), "pointerup", r, !1), A(l(t.currentTarget), "pointercancel", a, !1)
              }
              o && t.stopPropagation()
            }, t.onMouseDown = t => {
              if ($(t.currentTarget, Y(t.nativeEvent)) && 0 === t.button) {
                if (w) {
                  let r = function(e) {
                    for (; e && (!(t = e).matches(c) || !i(t) || d(t));) e = e.parentElement;
                    var t;
                    let r = n(e),
                      l = r.document.activeElement;
                    if (!l || l === e) return;
                    v = !0;
                    let a = !1,
                      o = e => {
                        (e.target === l || a) && e.stopImmediatePropagation()
                      },
                      s = t => {
                        (t.target === l || a) && (t.stopImmediatePropagation(), e || a || (a = !0, u(l), p()))
                      },
                      h = t => {
                        (t.target === e || a) && t.stopImmediatePropagation()
                      },
                      f = t => {
                        (t.target === e || a) && (t.stopImmediatePropagation(), a || (a = !0, u(l), p()))
                      };
                    r.addEventListener("blur", o, !0), r.addEventListener("focusout", s, !0), r.addEventListener("focusin", f, !0), r.addEventListener("focus", h, !0);
                    let p = () => {
                        cancelAnimationFrame(g), r.removeEventListener("blur", o, !0), r.removeEventListener("focusout", s, !0), r.removeEventListener("focusin", f, !0), r.removeEventListener("focus", h, !0), v = !1, a = !1
                      },
                      g = requestAnimationFrame(p);
                    return p
                  }(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              $(t.currentTarget, Y(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || D(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, H(ie(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, T(ie(e.target, t), e.pointerType, !1), k(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ($(e.target, Y(t)) && null != e.pointerType) {
                    let r = !1,
                      l = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? N(t) : (u(e.target), e.target.click()))
                      }), 80);
                    A(t.currentTarget, "click", (() => r = !0), !0), e.disposables.push((() => clearTimeout(l)))
                  } else N(t);
                  e.isOverTarget = !1
                }
              },
              a = e => {
                N(e)
              };
            t.onDragStart = e => {
              $(e.currentTarget, Y(e.nativeEvent)) && N(e)
            }
          }
          return t
        }), [A, p, w, z, b, N, k, T, H, D, V, O]);
        return (0, f.useEffect)((() => {
          if (!y) return;
          const e = l(y.current);
          if (!e || !e.head || e.getElementById(re)) return;
          const t = e.createElement("style");
          t.id = re, t.textContent = `\n@layer {\n  [${le}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }), [y]), (0, f.useEffect)((() => {
          let e = E.current;
          return () => {
            var t;
            b || _(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [b]), {
          isPressed: g || L,
          pressProps: G(R, F, {
            [le]: !0
          })
        }
      }

      function ae(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function oe(e, t) {
        const {
          key: r,
          code: l
        } = e, a = t, o = a.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== l || a instanceof n(a).HTMLInputElement && !de(a, r) || a instanceof n(a).HTMLTextAreaElement || a.isContentEditable || ("link" === o || !o && ae(a)) && "Enter" !== r)
      }

      function ie(e, t) {
        let r = t.clientX,
          l = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: l
        }
      }

      function se(e, t) {
        return e instanceof HTMLInputElement ? !de(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : ae(e)))
        }(e)
      }
      const ce = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function de(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : ce.has(e.type)
      }
    },
    3431: (e, t, r) => {
      r.d(t, {
        M: () => o
      });
      var l = r(45665);

      function n(e, t) {
        let {
          id: r,
          "aria-label": n,
          "aria-labelledby": a
        } = e;
        if (r = (0, l.Bi)(r), a && n) {
          let e = new Set([r, ...a.trim().split(/\s+/)]);
          a = [...e].join(" ")
        } else a && (a = a.trim().split(/\s+/).join(" "));
        return n || a || !t || (n = t), {
          id: r,
          "aria-label": n,
          "aria-labelledby": a
        }
      }
      var a = r(78345);

      function o(e) {
        let {
          description: t,
          errorMessage: r,
          isInvalid: o,
          validationState: i
        } = e, {
          labelProps: s,
          fieldProps: c
        } = function(e) {
          let {
            id: t,
            label: r,
            "aria-labelledby": a,
            "aria-label": o,
            labelElementType: i = "label"
          } = e;
          t = (0, l.Bi)(t);
          let s = (0, l.Bi)(),
            c = {};
          return r && (a = a ? `${s} ${a}` : s, c = {
            id: s,
            htmlFor: "label" === i ? t : void 0
          }), {
            labelProps: c,
            fieldProps: n({
              id: t,
              "aria-label": o,
              "aria-labelledby": a
            })
          }
        }(e), d = (0, l.X1)([Boolean(t), Boolean(r), o, i]), u = (0, l.X1)([Boolean(t), Boolean(r), o, i]);
        return c = (0, a.v)(c, {
          "aria-describedby": [d, u, e["aria-describedby"]].filter(Boolean).join(" ") || void 0
        }), {
          labelProps: s,
          fieldProps: c,
          descriptionProps: {
            id: d
          },
          errorMessageProps: {
            id: u
          }
        }
      }
    },
    3586: (e, t, r) => {
      r.d(t, {
        Ho: () => d,
        OC: () => o,
        hr: () => s,
        pg: () => c,
        sb: () => u,
        uo: () => i
      });
      var l, n = r(91299);
      ! function(e) {
        e.FORMAT_ERROR = "FORMAT_ERROR", e.UNSUPPORTED_FORMATTER = "UNSUPPORTED_FORMATTER", e.INVALID_CONFIG = "INVALID_CONFIG", e.MISSING_DATA = "MISSING_DATA", e.MISSING_TRANSLATION = "MISSING_TRANSLATION"
      }(l || (l = {}));
      var a = function(e) {
          function t(r, l, n) {
            var a = this,
              o = n ? n instanceof Error ? n : new Error(String(n)) : void 0;
            return (a = e.call(this, "[@formatjs/intl Error ".concat(r, "] ").concat(l, "\n").concat(o ? "\n".concat(o.message, "\n").concat(o.stack) : "")) || this).code = r, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(a, t), a
          }
          return (0, n.__extends)(t, e), t
        }(Error),
        o = function(e) {
          function t(t, r) {
            return e.call(this, l.UNSUPPORTED_FORMATTER, t, r) || this
          }
          return (0, n.__extends)(t, e), t
        }(a),
        i = function(e) {
          function t(t, r) {
            return e.call(this, l.INVALID_CONFIG, t, r) || this
          }
          return (0, n.__extends)(t, e), t
        }(a),
        s = function(e) {
          function t(t, r) {
            return e.call(this, l.MISSING_DATA, t, r) || this
          }
          return (0, n.__extends)(t, e), t
        }(a),
        c = function(e) {
          function t(t, r, n) {
            var a = e.call(this, l.FORMAT_ERROR, "".concat(t, "\nLocale: ").concat(r, "\n"), n) || this;
            return a.locale = r, a
          }
          return (0, n.__extends)(t, e), t
        }(a),
        d = function(e) {
          function t(t, r, l, n) {
            var a = e.call(this, "".concat(t, "\nMessageID: ").concat(null == l ? void 0 : l.id, "\nDefault Message: ").concat(null == l ? void 0 : l.defaultMessage, "\nDescription: ").concat(null == l ? void 0 : l.description, "\n"), r, n) || this;
            return a.descriptor = l, a.locale = r, a
          }
          return (0, n.__extends)(t, e), t
        }(c),
        u = function(e) {
          function t(t, r) {
            var n = e.call(this, l.MISSING_TRANSLATION, 'Missing message: "'.concat(t.id, '" for locale "').concat(r, '", using ').concat(t.defaultMessage ? "default message (".concat("string" == typeof t.defaultMessage ? t.defaultMessage : t.defaultMessage.map((function(e) {
              var t;
              return null !== (t = e.value) && void 0 !== t ? t : JSON.stringify(e)
            })).join(), ")") : "id", " as fallback.")) || this;
            return n.descriptor = t, n
          }
          return (0, n.__extends)(t, e), t
        }(a)
    },
    5060: (e, t, r) => {
      function l(e) {
        var t, r, n = "";
        if ("string" == typeof e || "number" == typeof e) n += e;
        else if ("object" == typeof e)
          if (Array.isArray(e)) {
            var a = e.length;
            for (t = 0; t < a; t++) e[t] && (r = l(e[t])) && (n && (n += " "), n += r)
          } else
            for (r in e) e[r] && (n && (n += " "), n += r);
        return n
      }

      function n() {
        for (var e, t, r = 0, n = "", a = arguments.length; r < a; r++)(e = arguments[r]) && (t = l(e)) && (n && (n += " "), n += t);
        return n
      }
      r.d(t, {
        $: () => n,
        A: () => a
      });
      const a = n
    },
    6415: (e, t, r) => {
      r.d(t, {
        v: () => c
      });
      var l = r(71127),
        n = r(78345),
        a = r(37784),
        o = r(52436),
        i = r(88622),
        s = r(75305);

      function c(e, t, r) {
        let c = (0, a.KZ)({
            ...e,
            value: t.isSelected
          }),
          {
            isInvalid: d,
            validationErrors: u,
            validationDetails: h
          } = c.displayValidation,
          {
            labelProps: f,
            inputProps: v,
            isSelected: p,
            isPressed: g,
            isDisabled: w,
            isReadOnly: m
          } = (0, s.e)({
            ...e,
            isInvalid: d
          }, t, r);
        (0, o.X)(e, c, r);
        let {
          isIndeterminate: x,
          isRequired: b,
          validationBehavior: j = "aria"
        } = e;
        (0, l.useEffect)((() => {
          r.current && (r.current.indeterminate = !!x)
        }));
        let {
          pressProps: y
        } = (0, i.d)({
          isDisabled: w || m,
          onPress() {
            let {
              [a.Lf]: t
            } = e, {
              commitValidation: r
            } = t || c;
            r()
          }
        });
        return {
          labelProps: (0, n.v)(f, y),
          inputProps: {
            ...v,
            checked: p,
            "aria-required": b && "aria" === j || void 0,
            required: b && "native" === j
          },
          isSelected: p,
          isPressed: g,
          isDisabled: w,
          isReadOnly: m,
          isInvalid: d,
          validationErrors: u,
          validationDetails: h
        }
      }
    },
    10269: (e, t, r) => {
      r.d(t, {
        s: () => i
      });
      var l = r(78345),
        n = r(39891),
        a = r(88622),
        o = r(33527);

      function i(e, t) {
        let r, {
          elementType: i = "button",
          isDisabled: s,
          onPress: c,
          onPressStart: d,
          onPressEnd: u,
          onPressUp: h,
          onPressChange: f,
          preventFocusOnPress: v,
          allowFocusWhenDisabled: p,
          onClick: g,
          href: w,
          target: m,
          rel: x,
          type: b = "button"
        } = e;
        r = "button" === i ? {
          type: b,
          disabled: s
        } : {
          role: "button",
          href: "a" !== i || s ? void 0 : w,
          target: "a" === i ? m : void 0,
          type: "input" === i ? b : void 0,
          disabled: "input" === i ? s : void 0,
          "aria-disabled": s && "input" !== i ? s : void 0,
          rel: "a" === i ? x : void 0
        };
        let {
          pressProps: j,
          isPressed: y
        } = (0, a.d)({
          onPressStart: d,
          onPressEnd: u,
          onPressChange: f,
          onPress: c,
          onPressUp: h,
          onClick: g,
          isDisabled: s,
          preventFocusOnPress: v,
          ref: t
        }), {
          focusableProps: R
        } = (0, o.Wc)(e, t);
        p && (R.tabIndex = s ? -1 : R.tabIndex);
        let M = (0, l.v)(R, j, (0, n.$)(e, {
          labelable: !0
        }));
        return {
          isPressed: y,
          buttonProps: (0, l.v)(r, M, {
            "aria-haspopup": e["aria-haspopup"],
            "aria-expanded": e["aria-expanded"],
            "aria-controls": e["aria-controls"],
            "aria-pressed": e["aria-pressed"],
            "aria-current": e["aria-current"]
          })
        }
      }
    },
    13817: (e, t, r) => {
      r.d(t, {
        I: () => n
      });
      var l = r(50617);

      function n(e, t) {
        let {
          isCurrent: r,
          isDisabled: n,
          "aria-current": a,
          elementType: o = "a",
          ...i
        } = e, {
          linkProps: s
        } = (0, l.i)({
          isDisabled: n || r,
          elementType: o,
          ...i
        }, t), c = {};
        return /^h[1-6]$/.test(o) || (c = s), r && (c["aria-current"] = a || "page", c.tabIndex = e.autoFocus ? -1 : void 0), {
          itemProps: {
            "aria-disabled": n,
            ...c
          }
        }
      }
    },
    15485: (e, t, r) => {
      r.d(t, {
        Z: () => n
      });
      var l = r(71127);

      function n(e) {
        const t = l.useRef({
          value: e,
          previous: e
        });
        return l.useMemo((() => (t.current.value !== e && (t.current.previous = t.current.value, t.current.value = e), t.current.previous)), [e])
      }
    },
    15751: (e, t, r) => {
      r.d(t, {
        F: () => a
      });
      var l = r(85753),
        n = r(71127);

      function a(e, t, r) {
        let a = (0, n.useRef)(t),
          o = (0, l.J)((() => {
            r && r(a.current)
          }));
        (0, n.useEffect)((() => {
          var t;
          let r = null == e || null === (t = e.current) || void 0 === t ? void 0 : t.form;
          return null == r || r.addEventListener("reset", o), () => {
            null == r || r.removeEventListener("reset", o)
          }
        }), [e, o])
      }
    },
    21265: (e, t, r) => {
      r.d(t, {
        D: () => n
      });
      var l = r(97249);

      function n(e, t) {
        var r = {};
        if ("object" == typeof t) {
          var n = e;
          (0, l.Bx)(t, ((e, t) => {
            if (null != e) {
              var a = (0, l.Jt)(n, t);
              r[(0, l.Tm)(a)] = String(e)
            }
          }))
        } else {
          var a = e;
          for (var o in a) {
            var i = a[o];
            null != i && (r[(0, l.Tm)(o)] = i)
          }
        }
        return Object.defineProperty(r, "toString", {
          value: function() {
            return Object.keys(this).map((e => "".concat(e, ":").concat(this[e]))).join(";")
          },
          writable: !1
        }), r
      }
    },
    23908: (e, t, r) => {
      r.d(t, {
        P: () => a,
        Y: () => n
      });
      var l = r(35362);

      function n(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || ((0, l.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function a(e) {
        return !(0, l.m0)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
      }
    },
    27415: (e, t, r) => {
      r.d(t, {
        n: () => p
      });
      var l = r(70954),
        n = r(89129),
        a = r(71127),
        o = r(21222);

      function i(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function s(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          t && (l = l.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, l)
        }
        return r
      }

      function c(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? s(Object(r), !0).forEach((function(t) {
            var l, n, a;
            l = e, n = t, a = r[t], (n = i(n)) in l ? Object.defineProperty(l, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : l[n] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : s(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function d(e, t) {
        var r = {};
        for (var l in e) r[l] = t(e[l], l);
        return r
      }
      r(63694);
      var u, h, f = (e, t, r) => {
          for (var l of Object.keys(e)) {
            var n;
            if (e[l] !== (null !== (n = t[l]) && void 0 !== n ? n : r[l])) return !1
          }
          return !0
        },
        v = (u = {
          defaultClassName: "foundry_cw8njk0",
          variantClassNames: {
            size: {
              LG: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdw",
              MD: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdx",
              SM: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdy",
              XS: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcdz"
            },
            appearance: {
              default: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd10",
              bold: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd11",
              hyperlink: "foundry_tdsdcdu foundry_tdsdcd0 foundry_tdsdcd12"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (h = e => {
          var t = u.defaultClassName,
            r = c(c({}, u.defaultVariants), e);
          for (var l in r) {
            var n, a = null !== (n = r[l]) && void 0 !== n ? n : u.defaultVariants[l];
            if (null != a) {
              var o = a;
              "boolean" == typeof o && (o = !0 === o ? "true" : "false");
              var i = u.variantClassNames[l][o];
              i && (t += " " + i)
            }
          }
          for (var [s, d] of u.compoundVariants) f(s, r, u.defaultVariants) && (t += " " + d);
          return t
        }).variants = () => Object.keys(u.variantClassNames), h.classNames = {
          get base() {
            return u.defaultClassName.split(" ")[0]
          },
          get variants() {
            return d(u.variantClassNames, (e => d(e, (e => e.split(" ")[0]))))
          }
        }, h);
      const p = (0, a.forwardRef)((({
        asChild: e,
        testId: t,
        appearance: r = "default",
        size: a = "MD",
        ...i
      }, s) => {
        const c = e ? o.Slot : "p",
          d = (0, n.mergeProps)({
            className: v({
              size: a,
              appearance: r
            })
          }, i);
        return (0, l.jsx)(c, {
          ref: s,
          "data-testid": t,
          ...d
        })
      }))
    },
    28136: (e, t, r) => {
      var l = r(75754),
        n = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        o = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        i = {};

      function s(e) {
        return l.isMemo(e) ? o : i[e.$$typeof] || n
      }
      i[l.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, i[l.Memo] = o;
      var c = Object.defineProperty,
        d = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        h = Object.getOwnPropertyDescriptor,
        f = Object.getPrototypeOf,
        v = Object.prototype;
      e.exports = function e(t, r, l) {
        if ("string" != typeof r) {
          if (v) {
            var n = f(r);
            n && n !== v && e(t, n, l)
          }
          var o = d(r);
          u && (o = o.concat(u(r)));
          for (var i = s(t), p = s(r), g = 0; g < o.length; ++g) {
            var w = o[g];
            if (!(a[w] || l && l[w] || p && p[w] || i && i[w])) {
              var m = h(r, w);
              try {
                c(t, w, m)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    30630: (e, t, r) => {
      function l(e, t, r) {
        return Math.min(Math.max(e, r), t)
      }
      r.d(t, {
        J1: () => m,
        a: () => x,
        e$: () => w
      });
      class n extends Error {
        constructor(e) {
          super(`Failed to parse color: "${e}"`)
        }
      }
      var a = n;

      function o(e) {
        if ("string" != typeof e) throw new a(e);
        if ("transparent" === e.trim().toLowerCase()) return [0, 0, 0, 0];
        let t = e.trim();
        t = v.test(e) ? function(e) {
          const t = e.toLowerCase().trim(),
            r = s[function(e) {
              let t = 5381,
                r = e.length;
              for (; r;) t = 33 * t ^ e.charCodeAt(--r);
              return (t >>> 0) % 2341
            }(t)];
          if (!r) throw new a(e);
          return `#${r}`
        }(e) : e;
        const r = d.exec(t);
        if (r) {
          const e = Array.from(r).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(c(e, 2), 16))), parseInt(c(e[3] || "f", 2), 16) / 255]
        }
        const n = u.exec(t);
        if (n) {
          const e = Array.from(n).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 16))), parseInt(e[3] || "ff", 16) / 255]
        }
        const o = h.exec(t);
        if (o) {
          const e = Array.from(o).slice(1);
          return [...e.slice(0, 3).map((e => parseInt(e, 10))), parseFloat(e[3] || "1")]
        }
        const i = f.exec(t);
        if (i) {
          const [t, r, n, o] = Array.from(i).slice(1).map(parseFloat);
          if (l(0, 100, r) !== r) throw new a(e);
          if (l(0, 100, n) !== n) throw new a(e);
          return [...g(t, r, n), Number.isNaN(o) ? 1 : o]
        }
        throw new a(e)
      }
      const i = e => parseInt(e.replace(/_/g, ""), 36),
        s = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce(((e, t) => {
          const r = i(t.substring(0, 3)),
            l = i(t.substring(3)).toString(16);
          let n = "";
          for (let e = 0; e < 6 - l.length; e++) n += "0";
          return e[r] = `${n}${l}`, e
        }), {}),
        c = (e, t) => Array.from(Array(t)).map((() => e)).join(""),
        d = new RegExp(`^#${c("([a-f0-9])",3)}([a-f0-9])?$`, "i"),
        u = new RegExp(`^#${c("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`, "i"),
        h = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${c(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"),
        f = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,
        v = /^[a-z]+$/i,
        p = e => Math.round(255 * e),
        g = (e, t, r) => {
          let l = r / 100;
          if (0 === t) return [l, l, l].map(p);
          const n = (e % 360 + 360) % 360 / 60,
            a = (1 - Math.abs(2 * l - 1)) * (t / 100),
            o = a * (1 - Math.abs(n % 2 - 1));
          let i = 0,
            s = 0,
            c = 0;
          n >= 0 && n < 1 ? (i = a, s = o) : n >= 1 && n < 2 ? (i = o, s = a) : n >= 2 && n < 3 ? (s = a, c = o) : n >= 3 && n < 4 ? (s = o, c = a) : n >= 4 && n < 5 ? (i = o, c = a) : n >= 5 && n < 6 && (i = a, c = o);
          const d = l - a / 2;
          return [i + d, s + d, c + d].map(p)
        };

      function w(e, t) {
        const [r, n, a, i] = function(e) {
          const [t, r, l, n] = o(e).map(((e, t) => 3 === t ? e : e / 255)), a = Math.max(t, r, l), i = Math.min(t, r, l), s = (a + i) / 2;
          if (a === i) return [0, 0, s, n];
          const c = a - i;
          return [60 * (t === a ? (r - l) / c + (r < l ? 6 : 0) : r === a ? (l - t) / c + 2 : (t - r) / c + 4), s > .5 ? c / (2 - a - i) : c / (a + i), s, n]
        }(e);
        return function(e, t, r, n) {
          return `hsla(${(e%360).toFixed()}, ${l(0,100,100*t).toFixed()}%, ${l(0,100,100*r).toFixed()}%, ${parseFloat(l(0,1,n).toFixed(3))})`
        }(r, n, a - t, i)
      }

      function m(e) {
        if ("transparent" === e) return 0;

        function t(e) {
          const t = e / 255;
          return t <= .04045 ? t / 12.92 : Math.pow((t + .055) / 1.055, 2.4)
        }
        const [r, l, n] = o(e);
        return .2126 * t(r) + .7152 * t(l) + .0722 * t(n)
      }

      function x(e, t) {
        return w(e, -t)
      }
    },
    31985: (e, t, r) => {
      r.d(t, {
        N: () => n
      });
      var l = r(71127);
      const n = "undefined" != typeof document ? l.useLayoutEffect : () => {}
    },
    32109: (e, t, r) => {
      r.r(t), r.d(t, {
        ArrowDown: () => Ja,
        ArrowLeft: () => lo,
        ArrowRight: () => io,
        ArrowRightLeft: () => aa,
        ArrowUp: () => $a,
        ArrowUpDown: () => ho,
        Book: () => Vt,
        Bug: () => As,
        BugOff: () => _s,
        Calendar: () => _t,
        CalendarOff: () => At,
        Car: () => Mt,
        CarSide: () => bt,
        ChartSpline: () => Fn,
        Check: () => hl,
        ChevronDown: () => bo,
        ChevronFirst: () => ca,
        ChevronLast: () => fa,
        ChevronLeft: () => Mo,
        ChevronRight: () => Ao,
        ChevronUp: () => go,
        ChevronsDownUp: () => wa,
        ChevronsUpDown: () => ja,
        CircleCheck: () => el,
        CircleDollarSign: () => _l,
        CircleHelp: () => Xs,
        CircleMinus: () => Yr,
        CirclePerson: () => Qo,
        CircleSlash: () => Gi,
        CircleX: () => Gr,
        Clipboard: () => W,
        Clock: () => Dt,
        CloudAlert: () => Wt,
        CloudDownload: () => La,
        CloudUpload: () => Pa,
        CodeXml: () => rr,
        Copy: () => X,
        Database: () => Xt,
        Discord: () => b,
        DollarSign: () => Dl,
        Download: () => Vo,
        EllipsisVertical: () => ye,
        Envelope: () => ns,
        EnvelopeOpen: () => bl,
        ExternalLink: () => Xo,
        Eye: () => dc,
        EyeClosed: () => Ds,
        EyeOff: () => vc,
        Facebook: () => A,
        FastForward: () => Ye,
        FileText: () => ht,
        Files: () => gt,
        Filter: () => Ce,
        Flag: () => ri,
        FlagOff: () => oi,
        Gear: () => hs,
        Globe: () => me,
        Handshake: () => Ms,
        Headset: () => rn,
        Heart: () => Vl,
        HeartPulse: () => gl,
        House: () => Zn,
        Image: () => Hr,
        Info: () => Vs,
        Instagram: () => M,
        LayoutGrid: () => vr,
        Lightbulb: () => Nr,
        Link: () => es,
        List: () => oe,
        ListFilter: () => Q,
        LockKeyhole: () => Cr,
        LockPassword: () => Ir,
        MapPin: () => di,
        Maximize: () => or,
        Maximize2: () => za,
        Menu: () => gs,
        MessageSquareText: () => de,
        Minimize: () => dr,
        Minimize2: () => Ba,
        Minus: () => Ur,
        Moon: () => Ws,
        PaperPlane: () => xn,
        Paperclip: () => Al,
        PartialCircle: () => yr,
        Pause: () => Ge,
        Pencil: () => Wl,
        PencilOff: () => Xl,
        Person: () => ss,
        PersonBlock: () => bs,
        PersonMinus: () => Ci,
        PersonPlus: () => Ii,
        Play: () => nt,
        Plus: () => Ql,
        Power: () => on,
        Property: () => ta,
        RefreshCw: () => Wo,
        RefreshCwOff: () => Oa,
        Replay: () => qa,
        Rewind: () => Ue,
        Search: () => ve,
        Server: () => Qt,
        ShieldAlert: () => vi,
        ShieldCheck: () => mi,
        SkipBack: () => He,
        SkipForward: () => Ne,
        Star: () => yi,
        StarOff: () => Ie,
        Stop: () => et,
        Store: () => Kn,
        Sun: () => Qs,
        ThumbsDown: () => Yi,
        ThumbsUp: () => Ui,
        Trash: () => Ml,
        TriangleAlert: () => nl,
        Trophy: () => mr,
        Twitch: () => _,
        Twitter: () => V,
        TwoPeople: () => Hi,
        Undo: () => _o,
        Unlink: () => re,
        Upload: () => Do,
        Volume: () => Rn,
        Volume1: () => kn,
        Volume2: () => Tn,
        VolumeOff: () => En,
        VolumeX: () => Sn,
        Weapon: () => st,
        Wifi: () => un,
        WifiOff: () => pn,
        Wrench: () => Ni,
        X: () => sl,
        Youtube: () => D,
        ZoomIn: () => rc,
        ZoomOut: () => oc
      });
      var l = r(70954),
        n = r(71127),
        a = r(63694),
        o = ({
          children: e,
          label: t
        }) => {
          const r = n.Children.only(e);
          return (0, l.jsxs)(l.Fragment, {
            children: [n.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, l.jsx)(a.Root, {
              children: t
            })]
          })
        };
      o.displayName = "AccessibleIcon";
      var i = o,
        s = r(91755);

      function c(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var r = t.call(e, "string");
            if ("object" != typeof r) return r;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function d(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          t && (l = l.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, l)
        }
        return r
      }

      function u(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? d(Object(r), !0).forEach((function(t) {
            var l, n, a;
            l = e, n = t, a = r[t], (n = c(n)) in l ? Object.defineProperty(l, n, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : l[n] = a
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : d(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function h(e, t) {
        var r = {};
        for (var l in e) r[l] = t(e[l], l);
        return r
      }
      var f, v, p = (e, t, r) => {
          for (var l of Object.keys(e)) {
            var n;
            if (e[l] !== (null !== (n = t[l]) && void 0 !== n ? n : r[l])) return !1
          }
          return !0
        },
        g = (f = {
          defaultClassName: "foundry_hcgxh_v1yii70",
          variantClassNames: {
            size: {
              MD: "foundry_hcgxh_v1yii71",
              LG: "foundry_hcgxh_v1yii72",
              XL: "foundry_hcgxh_v1yii73"
            }
          },
          defaultVariants: {},
          compoundVariants: []
        }, (v = e => {
          var t = f.defaultClassName,
            r = u(u({}, f.defaultVariants), e);
          for (var l in r) {
            var n, a = null !== (n = r[l]) && void 0 !== n ? n : f.defaultVariants[l];
            if (null != a) {
              var o = a;
              "boolean" == typeof o && (o = !0 === o ? "true" : "false");
              var i = f.variantClassNames[l][o];
              i && (t += " " + i)
            }
          }
          for (var [s, c] of f.compoundVariants) p(s, r, f.defaultVariants) && (t += " " + c);
          return t
        }).variants = () => Object.keys(f.variantClassNames), v.classNames = {
          get base() {
            return f.defaultClassName.split(" ")[0]
          },
          get variants() {
            return h(f.variantClassNames, (e => h(e, (e => e.split(" ")[0]))))
          }
        }, v);
      const w = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12.622 3.796c-.876-.4-1.8-.685-2.75-.846q-.196.35-.352.716a10.2 10.2 0 0 0-3.053 0 8 8 0 0 0-.352-.716c-.95.162-1.875.447-2.752.848-1.74 2.575-2.212 5.086-1.976 7.562 1.019.753 2.16 1.326 3.373 1.693a8 8 0 0 0 .722-1.165 7 7 0 0 1-1.138-.543q.145-.105.28-.21a7.92 7.92 0 0 0 6.743 0q.136.113.279.21a7 7 0 0 1-1.14.544q.312.613.723 1.164a11 11 0 0 0 3.374-1.692c.277-2.87-.472-5.359-1.981-7.565M5.78 9.837c-.658 0-1.2-.596-1.2-1.33s.523-1.336 1.198-1.336 1.213.602 1.201 1.336c-.011.734-.53 1.33-1.2 1.33m4.428 0c-.658 0-1.199-.596-1.199-1.33s.524-1.336 1.2-1.336 1.21.602 1.198 1.336-.529 1.33-1.199 1.33"
            })
          })
        }))),
        m = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M18.942 5.69a16.5 16.5 0 0 0-4.126-1.27q-.293.523-.529 1.074a15.4 15.4 0 0 0-4.579 0 11 11 0 0 0-.529-1.074c-1.425.243-2.814.67-4.129 1.273-2.611 3.863-3.319 7.63-2.965 11.345 1.53 1.13 3.24 1.989 5.06 2.54q.616-.828 1.084-1.748a11 11 0 0 1-1.706-.814q.215-.158.418-.315a11.89 11.89 0 0 0 10.118 0q.206.168.418.314-.819.483-1.71.817.469.92 1.084 1.746a16.6 16.6 0 0 0 5.064-2.539c.415-4.307-.71-8.04-2.973-11.35M8.678 14.752c-.987 0-1.802-.895-1.802-1.996s.787-2.004 1.798-2.004 1.82.903 1.803 2.004-.794 1.996-1.8 1.996m6.644 0c-.988 0-1.8-.895-1.8-1.996s.787-2.004 1.8-2.004 1.816.903 1.798 2.004c-.017 1.101-.793 1.996-1.798 1.996"
            })
          })
        }))),
        x = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M25.262 7.593A22 22 0 0 0 19.76 5.9q-.39.698-.705 1.433a20.5 20.5 0 0 0-6.106 0q-.315-.735-.705-1.433a22.2 22.2 0 0 0-5.507 1.697c-3.482 5.152-4.426 10.176-3.954 15.128a22.2 22.2 0 0 0 6.748 3.388 16.3 16.3 0 0 0 1.446-2.33Q9.79 23.339 8.7 22.696c.19-.138.377-.281.558-.42a15.85 15.85 0 0 0 13.492 0q.274.226.558.42a14.4 14.4 0 0 1-2.28 1.089c.415.815.898 1.594 1.445 2.328a22.1 22.1 0 0 0 6.753-3.386c.553-5.743-.947-10.72-3.965-15.134M11.575 19.68c-1.316 0-2.402-1.194-2.402-2.662 0-1.469 1.049-2.673 2.397-2.673 1.35 0 2.427 1.204 2.404 2.673-.023 1.468-1.059 2.662-2.4 2.662m8.86 0c-1.317 0-2.4-1.194-2.4-2.662 0-1.469 1.05-2.673 2.4-2.673 1.351 0 2.42 1.204 2.398 2.673-.023 1.468-1.057 2.662-2.398 2.662"
            })
          })
        }))),
        b = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(w, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(m, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(x, {
              ...n,
              ref: r
            })]
          })
        }));
      b.displayName = "Discord", b.categories = ["brands", "social"], b.tags = ["Social media", "Video", "Player", "Game", "Community", "App", "Share", "Logo"], b.MD = w, b.LG = m, b.XL = x;
      const j = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.235 1.377c-.71.033-1.194.146-1.617.313-.438.17-.81.4-1.18.77-.369.371-.596.743-.766 1.182-.164.424-.275.909-.306 1.618-.032.71-.039.938-.035 2.748s.011 2.037.046 2.748c.034.709.146 1.193.313 1.617.17.438.4.809.77 1.179.372.37.743.596 1.183.766.424.164.909.276 1.618.307s.938.038 2.747.034c1.81-.003 2.038-.011 2.748-.045s1.193-.147 1.617-.313c.438-.171.81-.4 1.179-.77.369-.372.596-.744.766-1.183.164-.424.276-.909.306-1.617.031-.712.039-.939.035-2.749s-.011-2.036-.045-2.747-.147-1.193-.313-1.617c-.171-.438-.4-.81-.77-1.18a3.25 3.25 0 0 0-1.183-.766c-.424-.164-.908-.275-1.618-.306s-.938-.039-2.748-.035-2.036.011-2.747.046m.078 12.048c-.65-.028-1.003-.136-1.238-.226a2.1 2.1 0 0 1-.768-.497 2.05 2.05 0 0 1-.5-.766c-.091-.235-.2-.587-.231-1.237-.033-.702-.04-.913-.044-2.693s.003-1.99.034-2.692c.027-.65.136-1.003.226-1.238.12-.312.265-.533.497-.767.233-.235.455-.379.766-.5.235-.092.587-.201 1.237-.232.703-.033.913-.04 2.692-.044s1.99.003 2.694.034c.65.028 1.002.136 1.237.226.312.12.534.264.768.498s.378.454.5.765c.092.235.2.587.231 1.237.034.703.041.913.045 2.693.003 1.779-.003 1.99-.034 2.692-.029.65-.136 1.003-.227 1.238-.12.312-.264.534-.497.768a2.06 2.06 0 0 1-.766.5c-.234.091-.587.2-1.236.231-.703.034-.914.04-2.694.044s-1.99-.003-2.692-.034m5.433-8.992a.8.8 0 1 0 1.6-.003.8.8 0 0 0-1.6.003M4.573 8.002a3.422 3.422 0 1 0 6.844-.013 3.422 3.422 0 0 0-6.844.013m1.2-.003a2.222 2.222 0 1 1 4.444-.008 2.222 2.222 0 0 1-4.444.008"
            })
          })
        }))),
        y = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.858 2.07c-1.064.05-1.79.22-2.425.47-.658.256-1.215.6-1.77 1.156a4.9 4.9 0 0 0-1.15 1.772c-.246.637-.413 1.364-.46 2.429s-.057 1.407-.052 4.122c.005 2.716.017 3.056.069 4.123.05 1.064.22 1.79.47 2.426.256.657.6 1.214 1.156 1.769a4.9 4.9 0 0 0 1.774 1.15c.636.246 1.363.413 2.428.46 1.064.046 1.407.057 4.122.052s3.056-.017 4.123-.068c1.067-.05 1.79-.22 2.425-.47a4.9 4.9 0 0 0 1.769-1.156 4.9 4.9 0 0 0 1.15-1.774c.246-.636.413-1.363.46-2.427.046-1.067.057-1.408.052-4.123s-.018-3.056-.068-4.122c-.05-1.067-.22-1.79-.47-2.427a4.9 4.9 0 0 0-1.156-1.769 4.9 4.9 0 0 0-1.773-1.15c-.637-.245-1.364-.413-2.428-.46-1.065-.045-1.407-.057-4.123-.052s-3.056.017-4.123.069m.117 18.078c-.975-.043-1.504-.205-1.857-.34-.467-.18-.8-.398-1.152-.746a3.1 3.1 0 0 1-.75-1.149c-.137-.352-.302-.881-.347-1.856-.05-1.054-.06-1.37-.066-4.04s.004-2.986.05-4.04c.042-.974.205-1.504.34-1.857.18-.468.397-.8.746-1.151a3.1 3.1 0 0 1 1.15-.75c.351-.138.88-.302 1.855-.348 1.054-.05 1.37-.06 4.04-.066s2.986.004 4.041.05c.974.043 1.505.204 1.857.34.467.18.8.397 1.151.746.352.35.568.682.75 1.15.138.35.302.88.348 1.855.05 1.054.062 1.37.066 4.04s-.004 2.986-.05 4.04c-.043.975-.205 1.504-.34 1.858a3.1 3.1 0 0 1-.747 1.15c-.349.352-.681.568-1.148.75-.352.138-.882.302-1.855.349-1.055.05-1.371.06-4.041.065s-2.986-.005-4.04-.05m8.152-13.493a1.2 1.2 0 1 0 2.4-.003 1.2 1.2 0 0 0-2.4.003M6.865 12.01a5.134 5.134 0 1 0 10.27-.02 5.134 5.134 0 0 0-10.27.02m1.802-.004a3.333 3.333 0 1 1 6.666-.013 3.333 3.333 0 0 1-6.666.013"
            })
          })
        }))),
        R = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.482 2.763c-1.419.067-2.388.294-3.235.626-.876.342-1.62.8-2.359 1.542a6.5 6.5 0 0 0-1.533 2.364c-.329.849-.551 1.819-.614 3.238s-.076 1.876-.07 5.498c.007 3.62.023 4.075.092 5.497.068 1.419.294 2.388.627 3.235.342.877.8 1.62 1.542 2.359a6.5 6.5 0 0 0 2.365 1.534c.848.327 1.818.55 3.238.613s1.876.076 5.496.07c3.62-.007 4.076-.023 5.499-.09 1.422-.068 2.386-.296 3.233-.627.877-.343 1.62-.8 2.359-1.543a6.5 6.5 0 0 0 1.533-2.365c.329-.848.552-1.818.613-3.236.063-1.423.077-1.878.07-5.499s-.023-4.074-.09-5.496c-.068-1.422-.294-2.388-.626-3.236a6.55 6.55 0 0 0-1.542-2.359 6.5 6.5 0 0 0-2.365-1.533c-.849-.328-1.818-.552-3.238-.613-1.42-.062-1.876-.078-5.498-.07-3.621.006-4.074.022-5.497.091m.156 24.107c-1.3-.057-2.006-.273-2.477-.454a4.15 4.15 0 0 1-1.535-.994 4.1 4.1 0 0 1-1-1.531c-.183-.47-.403-1.176-.464-2.476-.066-1.405-.08-1.827-.088-5.388s.006-3.981.068-5.387c.055-1.3.273-2.006.453-2.476a4.1 4.1 0 0 1 .995-1.535c.465-.47.91-.758 1.531-1 .47-.184 1.175-.403 2.475-.464 1.406-.067 1.828-.08 5.387-.088 3.56-.008 3.983.005 5.39.067 1.299.057 2.006.272 2.475.454.624.24 1.067.528 1.536.994.468.466.757.909 1 1.532.184.469.402 1.174.464 2.474.067 1.407.082 1.828.088 5.388.007 3.56-.006 3.982-.068 5.387-.056 1.3-.272 2.007-.453 2.478a4.1 4.1 0 0 1-.995 1.535 4.1 4.1 0 0 1-1.532 1c-.47.183-1.175.402-2.474.464-1.406.066-1.827.08-5.388.087-3.561.008-3.982-.006-5.388-.067M21.51 8.878a1.6 1.6 0 1 0 3.201-.006 1.6 1.6 0 0 0-3.201.006m-12.351 7.14a6.848 6.848 0 1 0 13.694-.029 6.848 6.848 0 0 0-13.694.03m2.402-.005a4.446 4.446 0 1 1 8.891-.017 4.446 4.446 0 0 1-8.891.018"
            })
          })
        }))),
        M = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(j, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(y, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(R, {
              ...n,
              ref: r
            })]
          })
        }));
      M.displayName = "Instagram", M.categories = ["brands", "social", "photography"], M.tags = ["logo", "camera", "social media", "photo", "camera", "app", "share"], M.MD = j, M.LG = y, M.XL = R;
      const L = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.66 8.02c0-3.695-2.984-6.69-6.665-6.69S1.33 4.325 1.33 8.02a6.69 6.69 0 0 0 5.055 6.492v-4.448H5.011V8.019h1.374v-.88c0-2.277 1.027-3.333 3.254-3.333.422 0 1.15.084 1.449.167v1.853a9 9 0 0 0-.77-.025c-1.093 0-1.515.415-1.515 1.495v.723h2.177l-.374 2.045H8.803v4.596c3.3-.4 5.857-3.22 5.857-6.64"
            })
          })
        }))),
        C = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M22 12.037C22 6.494 17.523 2 12 2S2 6.494 2 12.037c0 4.706 3.229 8.656 7.584 9.74v-6.673H7.522v-3.067h2.062v-1.322c0-3.416 1.54-5 4.882-5 .634 0 1.727.125 2.174.25v2.78a13 13 0 0 0-1.155-.037c-1.64 0-2.273.623-2.273 2.244v1.085h3.266l-.561 3.067h-2.705V22C18.163 21.4 22 17.168 22 12.037"
            })
          })
        }))),
        E = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M29.34 16.054c0-7.392-5.97-13.384-13.335-13.384S2.67 8.662 2.67 16.054a13.38 13.38 0 0 0 10.114 12.99v-8.9h-2.75v-4.09h2.75V14.29c0-4.555 2.054-6.666 6.51-6.666.844 0 2.302.166 2.898.332v3.707c-.314-.033-.86-.05-1.54-.05-2.186 0-3.031.832-3.031 2.993v1.447h4.356l-.749 4.09h-3.607v9.195c6.603-.8 11.719-6.442 11.719-13.285"
            })
          })
        }))),
        A = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(L, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(C, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(E, {
              ...n,
              ref: r
            })]
          })
        }));
      A.displayName = "Facebook", A.categories = ["social", "brands"], A.tags = ["logo", "social media", "profile", "feed", "app", "share"], A.MD = L, A.LG = C, A.XL = E;
      const P = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M4.69 1.33 2.31 3.71v8.57h2.856v2.38l2.38-2.38h1.905l4.284-4.285V1.33zm8.093 6.189L10.88 9.423H8.975L7.308 11.09V9.423H5.166v-7.14h7.617z"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M11.355 3.948h-.952v2.857h.952zM8.737 3.948h-.953v2.857h.953z"
            })]
          })
        }))),
        I = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M7.001 2 3.43 5.571V18.43h4.285V22l3.572-3.571h2.857L20.573 12V2zm12.143 9.286-2.857 2.857H13.43l-2.5 2.5v-2.5H7.715V3.429h11.429z"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M17.001 5.929h-1.429v4.285h1.43zM13.073 5.929h-1.429v4.285h1.428z"
            })]
          })
        }))),
        S = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M9.333 2.67 4.57 7.432v17.145h5.715v4.763l4.763-4.763h3.81l8.572-8.572V2.67zm16.192 12.382-3.81 3.81h-3.81l-3.333 3.334v-3.334h-4.287V4.575h15.24z"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M22.668 7.909h-1.905v5.715h1.905zM17.43 7.909h-1.906v5.715h1.905z"
            })]
          })
        }))),
        _ = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(P, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(I, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(S, {
              ...n,
              ref: r
            })]
          })
        }));
      _.displayName = "Twitch", _.categories = ["brands", "social", "account", "gaming"], _.tags = ["logo", "social", "social media", "streaming", "game", "app", "share"], _.MD = P, _.LG = I, _.XL = S;
      const z = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.383 4.787a1.67 1.67 0 0 0-1.179-1.178c-1.04-.279-5.209-.279-5.209-.279s-4.169 0-5.208.279A1.67 1.67 0 0 0 1.61 4.787c-.279 1.04-.279 3.209-.279 3.209s0 2.169.279 3.208a1.67 1.67 0 0 0 1.178 1.178c1.04.28 5.208.28 5.208.28s4.169 0 5.208-.28a1.67 1.67 0 0 0 1.178-1.178c.28-1.04.28-3.208.28-3.208s0-2.17-.28-3.209zM6.662 9.995V5.996l3.463 2z"
            })
          })
        }))),
        H = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M21.584 7.186a2.5 2.5 0 0 0-1.769-1.768C18.255 5 12 5 12 5s-6.255 0-7.814.418a2.5 2.5 0 0 0-1.768 1.768C2 8.746 2 12 2 12s0 3.255.418 4.814c.23.86.907 1.537 1.768 1.768C5.746 19 12 19 12 19s6.255 0 7.814-.418a2.5 2.5 0 0 0 1.768-1.768C22 15.254 22 12 22 12s0-3.255-.418-4.814zM10 15V9l5.196 3z"
            })
          })
        }))),
        T = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M28.785 9.585a3.34 3.34 0 0 0-2.358-2.357c-2.082-.558-10.422-.558-10.422-.558s-8.34 0-10.42.558a3.34 3.34 0 0 0-2.357 2.357c-.558 2.08-.558 6.42-.558 6.42s0 4.34.558 6.419a3.34 3.34 0 0 0 2.357 2.357c2.08.558 10.42.558 10.42.558s8.34 0 10.42-.558a3.34 3.34 0 0 0 2.357-2.357c.558-2.08.558-6.42.558-6.42s0-4.34-.558-6.419zm-15.447 10.42v-8l6.928 4z"
            })
          })
        }))),
        D = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(z, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(H, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(T, {
              ...n,
              ref: r
            })]
          })
        }));
      D.displayName = "Youtube", D.categories = ["multimedia", "social", "brands"], D.tags = ["logo", "social", "video", "play", "video", "player", "app", "share"], D.MD = z, D.LG = H, D.XL = T;
      const B = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "m9.263 6.974 4.963-5.644H13.05L8.74 6.231l-3.44-4.9H1.33l5.204 7.41-5.204 5.92h1.176l4.55-5.176 3.635 5.175h3.97zm-1.61 1.832-.528-.738L2.93 2.196h1.806l3.386 4.74.527.737 4.401 6.16h-1.806z"
            })
          })
        }))),
        N = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.903 10.469 21.348 2h-1.764l-6.465 7.353L7.955 2H2l7.808 11.12L2 22h1.764l6.828-7.765L16.044 22H22zm-2.417 2.748-.791-1.107L4.4 3.3h2.71l5.08 7.11.791 1.107 6.604 9.242h-2.71z"
            })
          })
        }))),
        k = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M18.542 13.963 28.471 2.67h-2.353l-8.621 9.805-6.885-9.805H2.67l10.412 14.828L2.67 29.34h2.353l9.104-10.355 7.271 10.355h7.942zm-3.222 3.665-1.055-1.476L5.87 4.403h3.613l6.775 9.482 1.055 1.476 8.805 12.325h-3.614z"
            })
          })
        }))),
        V = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(B, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(N, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(k, {
              ...n,
              ref: r
            })]
          })
        }));
      V.displayName = "Twitter", V.categories = ["brands", "social", "account"], V.tags = ["logo", "social", "social media", "twitter", "tweet", "app", "share", "x"], V.MD = B, V.LG = N, V.XL = k;
      const O = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.667 2A.67.67 0 0 0 2 2.667v6.666a.67.67 0 0 0 .667.667.667.667 0 1 1 0 1.333c-1.102 0-2-.898-2-2V2.667c0-1.102.898-2 2-2h6.667c1.101 0 2 .898 2 2a.667.667 0 0 1-1.334 0A.67.67 0 0 0 9.334 2zm4 4A.667.667 0 0 0 6 6.667v6.666c0 .368.299.667.667.667h6.667a.667.667 0 0 0 .666-.667V6.667A.667.667 0 0 0 13.334 6zm-2 .667a2 2 0 0 1 2-2h6.667a2 2 0 0 1 2 2v6.666a2 2 0 0 1-2 2H6.667a2 2 0 0 1-2-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        G = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4 3c-.548 0-1 .452-1 1v10c0 .548.452 1 1 1a1 1 0 1 1 0 2c-1.652 0-3-1.348-3-3V4c0-1.652 1.348-3 3-3h10c1.652 0 3 1.348 3 3a1 1 0 1 1-2 0c0-.548-.452-1-1-1zm6 6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V10a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H10a3 3 0 0 1-3-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        F = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.333 4C4.603 4 4 4.603 4 5.334v13.333C4 19.397 4.603 20 5.333 20a1.333 1.333 0 1 1 0 2.667c-2.203 0-4-1.797-4-4V5.334c0-2.204 1.797-4 4-4h13.333c2.203 0 4 1.796 4 4a1.333 1.333 0 1 1-2.666 0C20 4.604 19.397 4 18.666 4zm8 8c-.736 0-1.333.597-1.333 1.334v13.333c0 .736.597 1.333 1.333 1.333h13.333c.737 0 1.334-.597 1.334-1.333V13.334c0-.737-.597-1.334-1.334-1.334zm-4 1.334a4 4 0 0 1 4-4h13.333a4 4 0 0 1 4 4v13.333a4 4 0 0 1-4 4H13.333a4 4 0 0 1-4-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        X = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(O, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(G, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(F, {
              ...n,
              ref: r
            })]
          })
        }));
      X.displayName = "Copy", X.categories = ["text"], X.tags = ["clone", "duplicate", "multiple"], X.MD = O, X.LG = G, X.XL = F;
      const q = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.667 2c0-.737.597-1.333 1.333-1.333h4c.736 0 1.333.596 1.333 1.333H12a2 2 0 0 1 2 2v9.333a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zM6 2.667v.666h4V2H6zm5.333.666c0 .737-.597 1.334-1.333 1.334H6a1.333 1.333 0 0 1-1.333-1.334H4A.667.667 0 0 0 3.333 4v9.333A.667.667 0 0 0 4 14h8a.667.667 0 0 0 .667-.667V4A.667.667 0 0 0 12 3.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        U = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7 3a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2h1a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3zm0 2H6a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1h-1a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2m8 0H9V3h6z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        K = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.333 4A2.667 2.667 0 0 1 12 1.334h8A2.667 2.667 0 0 1 22.667 4H24a4 4 0 0 1 4 4v18.667a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4zM12 5.332v1.335h8V4h-8zm10.667 1.335A2.667 2.667 0 0 1 20 9.334h-8a2.667 2.667 0 0 1-2.667-2.667H8A1.333 1.333 0 0 0 6.667 8v18.667A1.333 1.333 0 0 0 8 28h16a1.333 1.333 0 0 0 1.333-1.333V8A1.333 1.333 0 0 0 24 6.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        W = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(q, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(U, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(K, {
              ...n,
              ref: r
            })]
          })
        }));
      W.displayName = "Clipboard", W.categories = ["text"], W.tags = ["copy", "paste"], W.MD = q, W.LG = U, W.XL = K;
      const $ = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.333 4c0-.368.298-.667.667-.667h12a.667.667 0 1 1 0 1.334H2A.667.667 0 0 1 1.333 4M4 8c0-.368.298-.667.666-.667h6.667a.667.667 0 1 1 0 1.334H4.666A.667.667 0 0 1 4 8m2 4c0-.368.298-.666.666-.666h2.667a.667.667 0 0 1 0 1.333H6.666A.667.667 0 0 1 6 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Y = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2 6a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1m4 6a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m3 6a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Z = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.667 8c0-.737.597-1.333 1.333-1.333h24a1.333 1.333 0 1 1 0 2.666H4A1.333 1.333 0 0 1 2.667 8M8 16c0-.736.597-1.334 1.334-1.334h13.333a1.333 1.333 0 0 1 0 2.667H9.334A1.333 1.333 0 0 1 8 16m4 8c0-.736.597-1.334 1.334-1.334h5.333a1.333 1.333 0 0 1 0 2.667h-5.333A1.333 1.333 0 0 1 12 24",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Q = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)($, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Y, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Z, {
              ...n,
              ref: r
            })]
          })
        }));
      Q.displayName = "ListFilter", Q.categories = ["text"], Q.tags = ["options"], Q.MD = $, Q.LG = Y, Q.XL = Z;
      const J = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.334.667c.368 0 .666.298.666.666v2a.667.667 0 0 1-1.333 0v-2c0-.368.298-.666.667-.666m3.184 1.167a4.004 4.004 0 0 1 5.558 0h.001a4.003 4.003 0 0 1 .188 5.557.7.7 0 0 1-.088.109L13.03 8.64a.667.667 0 0 1-.94-.946l1.061-1.055a1 1 0 0 1 .063-.075 2.67 2.67 0 0 0-.064-3.771 2.67 2.67 0 0 0-3.703-.003L8.304 3.926a.667.667 0 0 1-.94-.945zm-7.851 3.5c0-.369.298-.667.667-.667h2a.667.667 0 1 1 0 1.333h-2a.667.667 0 0 1-.667-.667m3.251 2.028c.26.26.26.682 0 .943L2.783 9.44a2.67 2.67 0 0 0 .067 3.767 2.67 2.67 0 0 0 3.703.004l1.136-1.136a.667.667 0 0 1 .943.943l-1.149 1.149a4.004 4.004 0 0 1-5.559 0v-.001a4.003 4.003 0 0 1-.097-5.656l.009-.008 1.14-1.14c.26-.26.682-.26.942 0M12 10.667c0-.368.299-.667.667-.667h2a.667.667 0 1 1 0 1.333h-2a.667.667 0 0 1-.667-.666M10.667 12c.368 0 .667.299.667.667v2a.667.667 0 0 1-1.334 0v-2c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ee = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 1a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V2a1 1 0 0 1 1-1m4.776 1.75a6.006 6.006 0 0 1 8.338 0l.002.002a6.004 6.004 0 0 1 .281 8.335 1 1 0 0 1-.132.162l-1.72 1.71a1 1 0 0 1-1.41-1.418l1.591-1.582a1 1 0 0 1 .094-.113 4.004 4.004 0 0 0-.095-5.657 4.006 4.006 0 0 0-5.556-.004l-1.714 1.704a1 1 0 1 1-1.41-1.418l1.72-1.71zM1 8a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1m4.877 3.043a1 1 0 0 1 0 1.414l-1.703 1.704a4.004 4.004 0 0 0 .1 5.65 4.006 4.006 0 0 0 5.556.005l1.703-1.703a1 1 0 0 1 1.414 1.414l-1.71 1.71-.013.013a6.006 6.006 0 0 1-8.338 0l-.002-.002a6.004 6.004 0 0 1-.144-8.482l.013-.013 1.71-1.71a1 1 0 0 1 1.414 0M18 16a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1m-2 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        te = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.666 1.333c.737 0 1.334.597 1.334 1.334v4a1.333 1.333 0 0 1-2.667 0v-4c0-.737.597-1.334 1.333-1.334m6.368 2.334a8.01 8.01 0 0 1 11.118 0l.002.002a8.006 8.006 0 0 1 .375 11.113q-.075.117-.176.217l-2.293 2.28a1.333 1.333 0 1 1-1.88-1.891l2.121-2.11a1.3 1.3 0 0 1 .126-.15 5.34 5.34 0 0 0-.127-7.543 5.34 5.34 0 0 0-7.408-.005l-2.286 2.272a1.333 1.333 0 1 1-1.88-1.891l2.294-2.28zm-15.701 7c0-.737.597-1.334 1.333-1.334h4a1.333 1.333 0 0 1 0 2.667h-4a1.333 1.333 0 0 1-1.333-1.333m6.503 4.057c.52.52.52 1.365 0 1.885l-2.271 2.272a5.34 5.34 0 0 0 .135 7.534 5.34 5.34 0 0 0 7.406.006l2.27-2.27a1.333 1.333 0 1 1 1.886 1.885l-2.28 2.28-.017.017a8.01 8.01 0 0 1-11.118 0l-.001-.002a8.005 8.005 0 0 1-.192-11.31l.016-.017 2.28-2.28c.52-.52 1.365-.52 1.886 0M24 21.334c0-.737.597-1.334 1.333-1.334h4a1.333 1.333 0 0 1 0 2.667h-4A1.333 1.333 0 0 1 24 21.333M21.333 24c.736 0 1.333.597 1.333 1.333v4a1.333 1.333 0 0 1-2.666 0v-4c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        re = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(J, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ee, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(te, {
              ...n,
              ref: r
            })]
          })
        }));
      re.displayName = "Unlink", re.categories = ["text"], re.tags = ["url", "unchain"], re.MD = J, re.LG = ee, re.XL = te;
      const le = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              stroke: e,
              d: "M2 8h.007M2 12h.007M2 4h.007m3.326 4H14m-8.667 4H14M5.333 4H14",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.333"
            })
          })
        }))),
        ne = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              stroke: e,
              d: "M3 12h.01M3 18h.01M3 6h.01M8 12h13M8 18h13M8 6h13",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            })
          })
        }))),
        ae = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              stroke: e,
              d: "M4 16h.013M4 24h.013M4 8h.013m6.654 8H28m-17.333 8H28M10.667 8H28",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.667"
            })
          })
        }))),
        oe = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(le, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ne, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ae, {
              ...n,
              ref: r
            })]
          })
        }));
      oe.displayName = "List", oe.categories = ["text"], oe.tags = ["options", "index", "table of contents", "menu", "side nav", "navigation", "bullet", "to do"], oe.MD = le, oe.LG = ne, oe.XL = ae;
      const ie = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.333 2.667a.667.667 0 0 0-.667.667v9.057l1.529-1.529a.67.67 0 0 1 .471-.195h8a.667.667 0 0 0 .667-.667V3.334a.666.666 0 0 0-.667-.667zm-1.414-.748a2 2 0 0 1 1.414-.586h9.333a2 2 0 0 1 2 2V10a2 2 0 0 1-2 2H4.942l-2.47 2.472A.667.667 0 0 1 1.332 14V3.334a2 2 0 0 1 .586-1.415m2.08 3.415c0-.369.3-.667.667-.667h4a.667.667 0 0 1 0 1.333h-4A.667.667 0 0 1 4 5.333M4 8c0-.368.3-.667.667-.667h6.667a.667.667 0 1 1 0 1.334H4.666A.667.667 0 0 1 4 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        se = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5 4a1 1 0 0 0-1 1v13.586l2.293-2.293A1 1 0 0 1 7 16h12a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1zM2.879 2.879A3 3 0 0 1 5 2h14a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H7.414l-3.707 3.707A1 1 0 0 1 2 21V5a3 3 0 0 1 .879-2.121M6 8a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ce = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.667 5.333a1.333 1.333 0 0 0-1.333 1.334V24.78l3.057-3.057c.25-.25.589-.39.943-.39h16A1.333 1.333 0 0 0 26.667 20V6.667a1.334 1.334 0 0 0-1.333-1.334zM3.839 3.838a4 4 0 0 1 2.828-1.171h18.667a4 4 0 0 1 4 4V20a4 4 0 0 1-4 4H9.886l-4.943 4.943A1.333 1.333 0 0 1 2.667 28V6.667a4 4 0 0 1 1.172-2.829M8 10.667c0-.737.597-1.334 1.334-1.334h8a1.333 1.333 0 0 1 0 2.667h-8A1.333 1.333 0 0 1 8 10.666M8 16c0-.736.597-1.334 1.334-1.334h13.333a1.333 1.333 0 0 1 0 2.667H9.334A1.333 1.333 0 0 1 8 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        de = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ie, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(se, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ce, {
              ...n,
              ref: r
            })]
          })
        }));
      de.displayName = "MessageSquareText", de.categories = ["social"], de.tags = ["comment", "chat", "conversation", "dialog", "feedback", "speech bubble", "clear", "close", "delete", "remove", "cancel", "silence", "mute", "moderate"], de.MD = ie, de.LG = se, de.XL = ce;
      const ue = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.333 2.667a4.667 4.667 0 1 0 0 9.333 4.667 4.667 0 0 0 0-9.333m-6 4.667a6 6 0 1 1 10.688 3.745l2.45 2.45a.667.667 0 0 1-.943.943l-2.45-2.45a6 6 0 0 1-9.745-4.688",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        he = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 0 14 7 7 0 0 0 0-14m-9 7a9 9 0 1 1 16.032 5.618l3.675 3.675a1 1 0 0 1-1.414 1.414l-3.675-3.675A9 9 0 0 1 2 11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fe = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.667 5.333a9.333 9.333 0 1 0 0 18.667 9.333 9.333 0 0 0 0-18.667m-12 9.334c0-6.628 5.373-12 12-12s12 5.372 12 12a11.95 11.95 0 0 1-2.624 7.49l4.9 4.9a1.333 1.333 0 1 1-1.886 1.886l-4.9-4.9a11.95 11.95 0 0 1-7.49 2.624c-6.627 0-12-5.373-12-12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ve = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ue, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(he, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(fe, {
              ...n,
              ref: r
            })]
          })
        }));
      ve.displayName = "Search", ve.categories = ["text", "social"], ve.tags = ["find", "scan", "magnifier", "magnifying glass", "look", "view"], ve.MD = ue, ve.LG = he, ve.XL = fe;
      const pe = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.036 7.333h2.652a10.33 10.33 0 0 1 1.758-5.13 6.005 6.005 0 0 0-4.41 5.13M8 2.343a9 9 0 0 0-1.975 4.99h3.95A9 9 0 0 0 8 2.343m1.975 6.323h-3.95A9 9 0 0 0 8 13.657a9 9 0 0 0 1.975-4.99m-3.53 5.13a10.33 10.33 0 0 1-1.757-5.13H2.036a6.005 6.005 0 0 0 4.41 5.13m3.11 0a10.34 10.34 0 0 0 1.757-5.13h2.651a6.005 6.005 0 0 1-4.409 5.13m4.408-6.463h-2.651a10.34 10.34 0 0 0-1.758-5.13 6.005 6.005 0 0 1 4.41 5.13M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ge = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.055 11h3.977A15.5 15.5 0 0 1 9.67 3.305 9.01 9.01 0 0 0 3.055 11M12 3.515A13.5 13.5 0 0 0 9.037 11h5.926A13.5 13.5 0 0 0 12 3.515M14.963 13H9.037A13.5 13.5 0 0 0 12 20.485 13.5 13.5 0 0 0 14.963 13m-5.294 7.695A15.5 15.5 0 0 1 7.031 13H3.055a9.01 9.01 0 0 0 6.613 7.695m4.663 0A15.5 15.5 0 0 0 16.968 13h3.977a9.01 9.01 0 0 1-6.613 7.695M20.945 11h-3.977a15.5 15.5 0 0 0-2.636-7.695A9.01 9.01 0 0 1 20.945 11M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        we = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.073 14.667h5.304a20.67 20.67 0 0 1 3.515-10.26c-4.705 1.258-8.27 5.304-8.819 10.26M16 4.687a18 18 0 0 0-3.95 9.98h7.9A18 18 0 0 0 16 4.687m3.95 12.647h-7.9a18 18 0 0 0 3.95 9.98 18 18 0 0 0 3.95-9.98m-7.058 10.26a20.67 20.67 0 0 1-3.515-10.26H4.073c.548 4.955 4.114 9.001 8.819 10.26m6.217 0a20.67 20.67 0 0 0 3.515-10.26h5.303c-.548 4.955-4.113 9.001-8.818 10.26m8.818-12.927h-5.303a20.67 20.67 0 0 0-3.515-10.26c4.705 1.258 8.27 5.304 8.818 10.26M1.334 16C1.334 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        me = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(pe, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ge, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(we, {
              ...n,
              ref: r
            })]
          })
        }));
      me.displayName = "Globe", me.categories = ["navigation"], me.tags = ["world", "browser", "language", "translate", "global", "network", "earth"], me.MD = pe, me.LG = ge, me.XL = we;
      const xe = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.667 3.333a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0m0 4.667a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0m0 4.667a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        be = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0m0 7a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        je = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.334 6.667a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.334 0m0 9.333a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.334 0m0 9.333a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ye = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(xe, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(be, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(je, {
              ...n,
              ref: r
            })]
          })
        }));
      ye.displayName = "EllipsisVertical", ye.categories = ["layout"], ye.tags = ["menu", "options", "spread", "more", "further", "extra", "overflow", "dots", "..."], ye.MD = xe, ye.LG = be, ye.XL = je;
      const Re = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M.728 1.72a.67.67 0 0 1 .605-.387h13.333a.667.667 0 0 1 .51 1.098L10 8.55V14a.667.667 0 0 1-.965.596l-2.667-1.333A.67.67 0 0 1 6 12.667V8.55L.824 2.43a.67.67 0 0 1-.096-.712m2.042.947 4.406 5.21c.101.12.157.272.157.43v3.948l1.334.666V8.307c0-.158.055-.31.157-.43l4.406-5.21z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Me = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.093 2.58A1 1 0 0 1 2 2h20a1 1 0 0 1 .764 1.646L15 12.826V21a1 1 0 0 1-1.447.894l-4-2A1 1 0 0 1 9 19v-6.174l-7.764-9.18a1 1 0 0 1-.143-1.067M4.155 4l6.609 7.814a1 1 0 0 1 .236.646v5.922l2 1V12.46a1 1 0 0 1 .236-.646L19.845 4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Le = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.457 3.439c.219-.471.69-.772 1.21-.772h26.667a1.333 1.333 0 0 1 1.018 2.194L20 17.1V28a1.333 1.333 0 0 1-1.93 1.192l-5.333-2.666A1.33 1.33 0 0 1 12 25.333v-8.231L1.65 4.86a1.33 1.33 0 0 1-.192-1.422m4.084 1.894 8.81 10.42c.204.24.316.545.316.86v7.896l2.667 1.334v-9.23c0-.315.111-.62.315-.86l8.81-10.42z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ce = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Re, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Me, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Le, {
              ...n,
              ref: r
            })]
          })
        }));
      Ce.displayName = "Filter", Ce.categories = ["layout"], Ce.tags = ["funnel", "hopper"], Ce.MD = Re, Ce.LG = Me, Ce.XL = Le;
      const Ee = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l4.221 4.222.01.01 6.076 6.075a.7.7 0 0 1 .159.16l2.867 2.866a.667.667 0 1 1-.943.943l-1.453-1.453.035.202a.667.667 0 0 1-.966.704L8 12.599 4.189 14.59a.667.667 0 0 1-.966-.704l.727-4.228L.868 6.657a.667.667 0 0 1 .368-1.137l2.914-.427L.862 1.805a.667.667 0 0 1 0-.943m4.463 5.406-2.56.376 2.367 2.305c.157.153.229.374.192.59l-.559 3.246 2.926-1.53a.67.67 0 0 1 .618 0l2.925 1.53-.126-.734zM8 .667c.254 0 .486.144.598.371l1.905 3.866 4.259.616a.667.667 0 0 1 .37 1.137l-2.387 2.327a.667.667 0 1 1-.93-.955l1.418-1.383-3.269-.473a.67.67 0 0 1-.502-.365l-1.463-2.97-.362.73a.667.667 0 0 1-1.195-.59l.96-1.94A.67.67 0 0 1 8 .666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ae = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0L9.04 7.626l.016.015 9.113 9.113q.138.099.238.238l4.3 4.3a1 1 0 1 1-1.414 1.415l-2.18-2.18.053.303a1 1 0 0 1-1.45 1.056L12 18.898l-5.717 2.988a1 1 0 0 1-1.449-1.055l1.091-6.342-4.623-4.503a1 1 0 0 1 .553-1.705l4.37-.642-4.932-4.932a1 1 0 0 1 0-1.414m6.695 8.11-3.84.563 3.55 3.458a1 1 0 0 1 .288.886l-.838 4.867 4.389-2.293a1 1 0 0 1 .926 0l4.389 2.293-.19-1.1zM12.001 1a1 1 0 0 1 .896.558l2.857 5.798 6.39.924a1 1 0 0 1 .554 1.706l-3.58 3.49a1 1 0 0 1-1.396-1.432l2.128-2.075-4.903-.71a1 1 0 0 1-.754-.547l-2.195-4.454-.542 1.096a1 1 0 0 1-1.792-.888l1.44-2.91A1 1 0 0 1 12 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pe = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0l8.443 8.444.021.02L24.225 22.34q.185.131.317.318l5.734 5.734a1.333 1.333 0 1 1-1.885 1.885l-2.906-2.906.07.404a1.333 1.333 0 0 1-1.932 1.408L16 25.198l-7.622 3.984a1.333 1.333 0 0 1-1.932-1.408l1.455-8.455-6.164-6.004a1.333 1.333 0 0 1 .736-2.274l5.828-.855L1.724 3.61a1.333 1.333 0 0 1 0-1.886m8.927 10.813-5.12.75 4.733 4.611c.315.307.458.749.384 1.181L9.53 25.57l5.852-3.058a1.33 1.33 0 0 1 1.235 0l5.851 3.058-.252-1.468zm5.35-11.203c.508 0 .97.288 1.195.743l3.81 7.73 8.519 1.234a1.333 1.333 0 0 1 .74 2.274l-4.774 4.653a1.333 1.333 0 1 1-1.861-1.91l2.837-2.765-6.538-.947a1.33 1.33 0 0 1-1.005-.73l-2.926-5.938-.723 1.46a1.333 1.333 0 1 1-2.39-1.183l1.92-3.88a1.33 1.33 0 0 1 1.196-.742",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ie = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ee, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ae, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Pe, {
              ...n,
              ref: r
            })]
          })
        }));
      Ie.displayName = "StarOff", Ie.categories = ["multimedia", "social"], Ie.tags = ["dislike", "unlike", "remove", "unrate"], Ie.MD = Ee, Ie.LG = Ae, Ie.XL = Pe;
      const Se = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M12.557 2.066a.67.67 0 0 1 .378.6v10.667a.667.667 0 0 1-1.083.52L5.186 8.522a.667.667 0 0 1 0-1.042l6.666-5.333c.2-.16.474-.191.705-.08",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M3.978 2.667c.507 0 .918.298.918.666v9.334c0 .368-.411.666-.918.666s-.917-.298-.917-.666V3.333c0-.368.41-.666.917-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        _e = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M18.835 3.099a1 1 0 0 1 .567.901v16a1 1 0 0 1-1.624.78l-10-8a1 1 0 0 1 0-1.56l10-8a1 1 0 0 1 1.057-.121",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M5.966 4c.76 0 1.376.448 1.376 1v14c0 .552-.616 1-1.376 1s-1.376-.448-1.376-1V5c0-.552.616-1 1.376-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        ze = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M25.094 4.132c.462.222.756.689.756 1.201v21.334a1.333 1.333 0 0 1-2.166 1.04L10.35 17.042a1.333 1.333 0 0 1 0-2.082L23.684 4.292c.4-.32.948-.382 1.41-.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M7.936 5.334c1.013 0 1.835.596 1.835 1.333v18.667c0 .736-.822 1.333-1.835 1.333-1.014 0-1.835-.597-1.835-1.334V6.668c0-.737.821-1.333 1.835-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        He = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Se, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(_e, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ze, {
              ...n,
              ref: r
            })]
          })
        }));
      He.displayName = "SkipBack", He.categories = ["multimedia", "arrows"], He.tags = ["music", "audio", "video", "arrow", "previous", "back", "rewind", "reverse", "control", "player"], He.MD = Se, He.LG = _e, He.XL = ze;
      const Te = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M3.439 13.934a.67.67 0 0 1-.378-.6V2.666a.667.667 0 0 1 1.083-.52l6.667 5.332a.667.667 0 0 1 0 1.042l-6.667 5.333a.67.67 0 0 1-.705.08",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M12.018 13.333c-.507 0-.917-.298-.917-.666V3.333c0-.368.41-.666.917-.666s.918.298.918.666v9.334c0 .368-.411.666-.918.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        De = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M5.157 20.901A1 1 0 0 1 4.59 20V4a1 1 0 0 1 1.625-.78l10 8a1 1 0 0 1 0 1.56l-10 8a1 1 0 0 1-1.058.121",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M18.026 20c-.76 0-1.376-.448-1.376-1V5c0-.552.616-1 1.376-1s1.376.448 1.376 1v14c0 .552-.616 1-1.376 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Be = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M6.856 27.868a1.33 1.33 0 0 1-.756-1.201V5.333a1.333 1.333 0 0 1 2.166-1.04L21.6 14.958a1.333 1.333 0 0 1 0 2.082L8.266 27.708c-.4.32-.948.382-1.41.16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M24.015 26.667c-1.014 0-1.835-.597-1.835-1.334V6.667c0-.737.821-1.334 1.835-1.334 1.013 0 1.834.597 1.834 1.334v18.666c0 .737-.821 1.334-1.834 1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ne = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Te, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(De, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Be, {
              ...n,
              ref: r
            })]
          })
        }));
      Ne.displayName = "SkipForward", Ne.categories = ["multimedia", "arrows"], Ne.tags = ["music", "audio", "video", "arrow", "skip", "next", "forward", "control", "player"], Ne.MD = Te, Ne.LG = De, Ne.XL = Be;
      const ke = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.833 2.811c0-.818-.597-1.48-1.333-1.48h-.834c-.736 0-1.333.662-1.333 1.48V13.18c0 .818.597 1.481 1.333 1.481H5.5c.736 0 1.333-.663 1.333-1.481zM12.666 2.811c0-.818-.597-1.48-1.333-1.48H10.5c-.736 0-1.333.662-1.333 1.48V13.18c0 .818.597 1.481 1.333 1.481h.833c.736 0 1.333-.663 1.333-1.481z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ve = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.25 4.222c0-1.227-.895-2.222-2-2.222H7c-1.105 0-2 .995-2 2.222v15.556C5 21.005 5.895 22 7 22h1.25c1.105 0 2-.995 2-2.222zM19 4.222C19 2.995 18.105 2 17 2h-1.25c-1.104 0-2 .995-2 2.222v15.556c0 1.227.896 2.222 2 2.222H17c1.105 0 2-.995 2-2.222z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oe = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.887 5.644c0-1.637-1.175-2.964-2.623-2.964h-1.64C8.173 2.68 7 4.007 7 5.644v20.743c0 1.636 1.174 2.963 2.623 2.963h1.64c1.45 0 2.624-1.327 2.624-2.963zM25 5.644c0-1.637-1.174-2.964-2.623-2.964h-1.64c-1.448 0-2.622 1.327-2.622 2.964v20.743c0 1.636 1.174 2.963 2.623 2.963h1.639c1.449 0 2.623-1.327 2.623-2.963z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ge = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ke, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ve, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Oe, {
              ...n,
              ref: r
            })]
          })
        }));
      Ge.displayName = "Pause", Ge.categories = ["multimedia"], Ge.tags = ["music", "audio", "video", "stop", "pause", "control", "player"], Ge.MD = ke, Ge.LG = Ve, Ge.XL = Oe;
      const Fe = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M7.68 3.779c.187.09.305.276.305.48v7.482c0 .204-.118.39-.305.48a.55.55 0 0 1-.573-.059L2.21 8.423a.53.53 0 0 1 0-.844l4.897-3.74a.55.55 0 0 1 .573-.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M13.666 3.779c.186.09.305.276.305.48v7.482c0 .204-.119.39-.305.48a.55.55 0 0 1-.574-.059l-4.897-3.74a.53.53 0 0 1 0-.844l4.897-3.74a.55.55 0 0 1 .574-.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Xe = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M11.541 5.538c.281.137.459.422.459.735v11.454a.818.818 0 0 1-1.32.646l-7.364-5.727a.818.818 0 0 1 0-1.292l7.364-5.727a.82.82 0 0 1 .861-.09",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M20.541 5.538c.281.137.459.422.459.735v11.454a.818.818 0 0 1-1.32.646l-7.364-5.727a.818.818 0 0 1 0-1.292l7.364-5.727a.82.82 0 0 1 .861-.09",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        qe = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M15.388 7.114c.375.19.612.581.612 1.011v15.75c0 .43-.237.822-.612 1.01-.374.19-.82.142-1.149-.122l-9.818-7.875A1.14 1.14 0 0 1 4 16c0-.347.155-.675.421-.888l9.818-7.875a1.06 1.06 0 0 1 1.15-.123",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M27.388 7.114c.375.19.612.581.612 1.011v15.75c0 .43-.237.822-.612 1.01-.374.19-.82.142-1.149-.122l-9.818-7.875A1.14 1.14 0 0 1 16 16c0-.347.155-.675.421-.888l9.818-7.875a1.06 1.06 0 0 1 1.15-.123",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ue = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Fe, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Xe, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(qe, {
              ...n,
              ref: r
            })]
          })
        }));
      Ue.displayName = "Rewind", Ue.categories = ["arrows", "multimedia"], Ue.tags = ["music", "audio", "video", "control", "player", "previous", "back", "reverse"], Ue.MD = Fe, Ue.LG = Xe, Ue.XL = qe;
      const Ke = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M8.29 3.779a.53.53 0 0 0-.305.48v7.482c0 .204.119.39.305.48.187.09.41.067.574-.059l4.897-3.74a.53.53 0 0 0 0-.844l-4.897-3.74a.55.55 0 0 0-.574-.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M2.305 3.779a.53.53 0 0 0-.305.48v7.482c0 .204.118.39.305.48s.41.067.573-.059l4.897-3.74a.53.53 0 0 0 0-.844l-4.897-3.74a.55.55 0 0 0-.573-.06",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        We = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M16.612 7.114c-.375.19-.612.581-.612 1.011v15.75c0 .43.237.822.612 1.01.374.19.82.142 1.149-.122l9.818-7.875c.266-.213.421-.54.421-.888 0-.347-.155-.675-.421-.888L17.76 7.237a1.06 1.06 0 0 0-1.15-.123",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M4.612 7.114C4.237 7.304 4 7.695 4 8.125v15.75c0 .43.237.822.612 1.01.374.19.82.142 1.149-.122l9.818-7.875c.266-.213.421-.54.421-.888 0-.347-.155-.675-.421-.888L5.76 7.237a1.06 1.06 0 0 0-1.15-.123",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        $e = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M12.459 5.538a.82.82 0 0 0-.459.735v11.454a.818.818 0 0 0 1.32.646l7.364-5.727a.818.818 0 0 0 0-1.292L13.32 5.627a.82.82 0 0 0-.861-.09",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M3.459 5.538A.82.82 0 0 0 3 6.273v11.454a.818.818 0 0 0 1.32.646l7.364-5.727a.818.818 0 0 0 0-1.292L4.321 5.627a.82.82 0 0 0-.862-.09",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        Ye = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ke, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(We, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)($e, {
              ...n,
              ref: r
            })]
          })
        }));
      Ye.displayName = "FastForward", Ye.categories = ["multimedia", "arrows"], Ye.tags = ["music", "audio", "video", "control", "player"], Ye.MD = Ke, Ye.XL = We, Ye.LG = $e;
      const Ze = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.333 3.333a2 2 0 0 1 2-2h9.333a2 2 0 0 1 2 2v9.333a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qe = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2 5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Je = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.667 6.667a4 4 0 0 1 4-4h18.667a4 4 0 0 1 4 4v18.667a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        et = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ze, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Qe, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Je, {
              ...n,
              ref: r
            })]
          })
        }));
      et.displayName = "Stop", et.categories = ["multimedia"], et.tags = ["music", "audio", "video", "control", "player", "stop"], et.MD = Ze, et.LG = Qe, et.XL = Je;
      const tt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.677 1.412a.67.67 0 0 1 .68.024l9.334 6a.667.667 0 0 1 0 1.122l-9.334 6a.667.667 0 0 1-1.027-.561v-12c0-.244.133-.469.347-.585",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.52 2.122a1 1 0 0 1 1.02.037l14 9a1 1 0 0 1 0 1.682l-14 9A1 1 0 0 1 5 21V3a1 1 0 0 1 .52-.878",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.364 2.83c.428-.234.95-.215 1.36.049l18.667 12a1.333 1.333 0 0 1 0 2.243l-18.667 12A1.334 1.334 0 0 1 6.67 28V4c0-.487.266-.936.694-1.17",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nt = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(tt, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(rt, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(lt, {
              ...n,
              ref: r
            })]
          })
        }));
      nt.displayName = "Play", nt.categories = ["arrows", "multimedia"], nt.tags = ["music", "audio", "video", "start", "run", "play", "continue", "control", "player"], nt.MD = tt, nt.LG = rt, nt.XL = lt;
      const at = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              stroke: e,
              d: "M10.873 6.941h2.787a1 1 0 0 0 1-1V3.7a1 1 0 0 0-1-1H3.49a1 1 0 0 0-.91.586l-.933 2.052a1 1 0 0 0 .27 1.182l.716.598a1 1 0 0 1 .314 1.069L1.74 12.002a1 1 0 0 0 .954 1.301H4.85a1 1 0 0 0 .948-.683l.833-2.498m4.241-3.18h-2.46a1 1 0 0 0-.949.683l-.832 2.497m4.241-3.18c.05 1.312-.727 3.786-4.241 3.18",
              strokeWidth: "1.3"
            })
          })
        }))),
        ot = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              stroke: e,
              d: "M16.4 10.4h4.714a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1H4.93a1 1 0 0 0-.91.586L2.314 8.335a1 1 0 0 0 .27 1.182l1.642 1.368a1 1 0 0 1 .314 1.07l-2.13 6.744A1 1 0 0 0 3.364 20H7.68a1 1 0 0 0 .949-.684L10 15.2m6.4-4.8h-4.08a1 1 0 0 0-.948.684L10 15.2m6.4-4.8c.076 1.981-1.097 5.714-6.4 4.8",
              strokeWidth: "2"
            })
          })
        }))),
        it = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              stroke: e,
              d: "M21.763 13.867h6.577a1 1 0 0 0 1-1V6.25a1 1 0 0 0-1-1H6.349a1 1 0 0 0-.913.591l-2.459 5.493a1 1 0 0 0 .267 1.172L5.8 14.669a1 1 0 0 1 .309 1.06l-3.037 9.765a1 1 0 0 0 .955 1.297h6.404a1 1 0 0 0 .95-.688l1.895-5.774m8.486-6.462h-5.64a1 1 0 0 0-.95.688l-1.896 5.774m8.486-6.462c.101 2.666-1.455 7.693-8.486 6.462",
              strokeWidth: "2.5"
            })
          })
        }))),
        st = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(at, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ot, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(it, {
              ...n,
              ref: r
            })]
          })
        }));
      st.displayName = "Weapon", st.categories = ["gaming"], st.tags = ["gun", "pistol", "GTAO", "fire", "shoot", "death", "danger"], st.MD = at, st.LG = ot, st.XL = it;
      const ct = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.586 1.252A2 2 0 0 1 4 .667h6c.177 0 .346.07.471.195l3.334 3.333a.67.67 0 0 1 .195.471v8.667a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2.667a2 2 0 0 1 .586-1.415m9.805 3.415L10 2.276V4a.666.666 0 0 0 .667.667zM8.667 2v2a2 2 0 0 0 2 2h2v7.333A.667.667 0 0 1 12 14H4a.667.667 0 0 1-.667-.667V2.667A.667.667 0 0 1 4 2zm-4 4c0-.368.298-.667.666-.667h1.334a.667.667 0 0 1 0 1.334H5.333A.667.667 0 0 1 4.667 6m0 2.666c0-.368.298-.666.666-.666h5.334a.667.667 0 0 1 0 1.333H5.333a.667.667 0 0 1-.666-.667m0 2.667c0-.368.298-.667.666-.667h5.334a.667.667 0 0 1 0 1.334H5.333a.667.667 0 0 1-.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.879 1.879A3 3 0 0 1 6 1h9a1 1 0 0 1 .707.293l5 5A1 1 0 0 1 21 7v13a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 .879-2.121M18.586 7H16a1 1 0 0 1-1-1V3.414zM13 3v3a3 3 0 0 0 3 3h3v11a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zM7 9a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m0 4a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ut = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.172 2.505A4 4 0 0 1 8 1.334h12c.354 0 .693.14.943.39l6.666 6.667c.25.25.391.589.391.943v17.333a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V5.334a4 4 0 0 1 1.172-2.829M24.78 9.334 20 4.552V8a1.334 1.334 0 0 0 1.333 1.334zM17.333 4v4a4 4 0 0 0 4 4h4v14.667A1.333 1.333 0 0 1 24 28H8a1.333 1.333 0 0 1-1.333-1.333V5.334A1.333 1.333 0 0 1 8 4zm-8 8c0-.736.597-1.333 1.334-1.333h2.666a1.333 1.333 0 0 1 0 2.667h-2.666A1.333 1.333 0 0 1 9.333 12m0 5.334c0-.737.597-1.334 1.334-1.334h10.666a1.333 1.333 0 1 1 0 2.667H10.667a1.333 1.333 0 0 1-1.334-1.334m0 5.333c0-.737.597-1.334 1.334-1.334h10.666a1.333 1.333 0 1 1 0 2.667H10.667a1.333 1.333 0 0 1-1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ht = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ct, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(dt, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ut, {
              ...n,
              ref: r
            })]
          })
        }));
      ht.displayName = "FileText", ht.categories = ["files", "text"], ht.tags = ["data", "txt", "pdf", "document"], ht.MD = ct, ht.LG = dt, ht.XL = ut;
      const ft = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6 2a.667.667 0 0 0-.667.667v8a.667.667 0 0 0 .667.666h6a.667.667 0 0 0 .667-.667V5.333h-1.333a2 2 0 0 1-2-2V2zM6 .667a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4a.67.67 0 0 0-.195-.472L11.138.862a.67.67 0 0 0-.471-.195zM12.39 4l-1.723-1.724v1.057a.667.667 0 0 0 .667.667zM2 4.4c.368 0 .667.298.667.666V13.6a.4.4 0 0 0 .4.4H9.6a.667.667 0 0 1 0 1.333H3.067A1.734 1.734 0 0 1 1.333 13.6V5.067c0-.369.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9 3a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V8h-2a3 3 0 0 1-3-3V3zm0-2a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h9a3 3 0 0 0 3-3V6a1 1 0 0 0-.293-.707l-4-4A1 1 0 0 0 16 1zm9.586 5L16 3.414V5a1 1 0 0 0 1 1zM3 6.6a1 1 0 0 1 1 1v12.8a.6.6 0 0 0 .6.6h9.8a1 1 0 1 1 0 2H4.6A2.6 2.6 0 0 1 2 20.4V7.6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 4a1.333 1.333 0 0 0-1.334 1.334v16A1.333 1.333 0 0 0 12 22.667h12a1.333 1.333 0 0 0 1.333-1.334V10.668h-2.666a4 4 0 0 1-4-4V4zm0-2.666a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V8c0-.353-.14-.693-.39-.943l-5.334-5.333c-.25-.25-.59-.39-.943-.39zM24.78 8l-3.447-3.448v2.115A1.333 1.333 0 0 0 22.667 8zM4 8.8c.736 0 1.333.597 1.333 1.333V27.2a.8.8 0 0 0 .8.8H19.2a1.333 1.333 0 1 1 0 2.667H6.133A3.467 3.467 0 0 1 2.667 27.2V10.134C2.667 9.397 3.263 8.8 4 8.8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gt = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ft, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(vt, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(pt, {
              ...n,
              ref: r
            })]
          })
        }));
      gt.displayName = "Files", gt.categories = ["files"], gt.tags = ["multiple", "copy", "documents", "data", "file", "folder", "restore"], gt.MD = ft, gt.LG = vt, gt.XL = pt;
      const wt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.829 4.924C2.1 4.469 2.619 4 3.334 4H8c.668 0 1.21.288 1.617.613q.028.023.055.049a54 54 0 0 1 1.337 1.394l.005.005.101.023c.189.043.453.104.755.176.6.141 1.356.326 1.968.496.803.205 1.496.985 1.496 1.91v2c0 .352-.12.697-.379.955A1.33 1.33 0 0 1 14 12h-.78a2 2 0 0 1-3.773 0H6.553a2 2 0 0 1-3.772 0H2c-.352 0-.697-.12-.955-.379a1.33 1.33 0 0 1-.379-.954V8c0-.346.057-.69.17-1.016a1 1 0 0 1 .03-.074L1.8 4.977zm.952 5.743a2 2 0 0 1 3.772 0h2.894a2 2 0 0 1 3.773 0H14v-2c0-.271-.235-.555-.495-.62l-.016-.005a55 55 0 0 0-1.925-.485 97 97 0 0 0-.963-.222l-.079-.018a.67.67 0 0 1-.344-.197l-.037-.04-.106-.113-.36-.384c-.282-.298-.63-.662-.918-.95-.252-.195-.5-.3-.757-.3H3.334c-.083 0-.224.06-.348.254l-.9 1.864A1.8 1.8 0 0 0 2 8v2.667zm1.886 0a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333m6.667 0a.667.667 0 1 0 0 1.333.667.667 0 0 0 0-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.743 7.386C3.15 6.704 3.929 6 5 6h7c1.002 0 1.816.432 2.425.92q.042.034.082.073c.46.46 1.018 1.043 1.457 1.507l.55.584.007.008 1.284.297c.9.213 2.034.49 2.951.744C21.962 10.442 23 11.612 23 13v3c0 .527-.18 1.044-.568 1.432S21.527 18 21 18h-1.17a3.001 3.001 0 0 1-5.66 0H9.83a3.001 3.001 0 0 1-5.66 0H3c-.527 0-1.044-.18-1.432-.568S1 16.527 1 16v-4a4.7 4.7 0 0 1 .254-1.524 1 1 0 0 1 .045-.11l1.4-2.9a1 1 0 0 1 .044-.08M4.17 16a3.001 3.001 0 0 1 5.658 0h4.342a3.001 3.001 0 0 1 5.658 0H21v-3c0-.406-.353-.832-.742-.93l-.026-.007c-.88-.244-1.99-.516-2.887-.727a147 147 0 0 0-1.445-.334l-.117-.026a1 1 0 0 1-.516-.296l-.056-.06-.159-.17c-.134-.144-.324-.346-.541-.575a82 82 0 0 0-1.377-1.426C12.757 8.156 12.384 8 12 8H5c-.124 0-.335.09-.522.381l-1.35 2.796A2.7 2.7 0 0 0 3 12v4zM7 16a1 1 0 1 0 0 2 1 1 0 0 0 0-2m10 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.656 9.847C4.202 8.94 5.238 8 6.666 8H16c1.335 0 2.42.576 3.233 1.226q.057.045.11.098c.613.613 1.357 1.391 1.942 2.01.294.31.55.583.732.778l.01.01.202.047c.378.086.906.207 1.51.35 1.2.283 2.713.653 3.936.992 1.606.411 2.991 1.971 2.991 3.822v4c0 .703-.24 1.393-.757 1.91S28.703 24 28 24h-1.56a4.002 4.002 0 0 1-7.545 0h-5.789a4.002 4.002 0 0 1-7.544 0H4c-.703 0-1.393-.24-1.91-.757s-.757-1.207-.757-1.91V16c0-.691.114-1.378.339-2.032q.025-.075.06-.148L3.6 9.954q.026-.055.057-.107m1.905 11.486a4.002 4.002 0 0 1 7.544 0h5.789a4.002 4.002 0 0 1 7.545 0h1.56v-4c0-.542-.47-1.11-.99-1.24l-.033-.008a110 110 0 0 0-3.85-.97 193 193 0 0 0-1.926-.445l-.156-.035a1.33 1.33 0 0 1-.688-.394l-.075-.081a163 163 0 0 0-2.769-2.895c-.503-.39-1-.598-1.512-.598H6.666c-.165 0-.447.119-.695.508l-1.8 3.727A3.6 3.6 0 0 0 4 16v5.333zm3.772 0a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667m13.333 0a1.333 1.333 0 1 0 0 2.667 1.333 1.333 0 0 0 0-2.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bt = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(wt, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(mt, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(xt, {
              ...n,
              ref: r
            })]
          })
        }));
      bt.displayName = "CarSide", bt.categories = ["transportation"], bt.tags = ["vehicle", "drive", "trip", "journey"], bt.MD = wt, bt.LG = mt, bt.XL = xt;
      const jt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.607 2.667h4.83a2 2 0 0 1 1.85 1.29l.62 1.527.621-.622a.667.667 0 1 1 .943.943l-.6.599c.483.365.795.944.795 1.596v2.667a2 2 0 0 1-1.333 1.886v.78a.667.667 0 0 1-1.333 0v-.666H4v.666a.667.667 0 1 1-1.334 0v-.78a2 2 0 0 1-1.333-1.886V8c0-.652.312-1.23.795-1.596l-.6-.6a.667.667 0 1 1 .943-.942l.618.618.623-1.556a2 2 0 0 1 1.895-1.257M4.317 6l.633-1.581a.67.67 0 0 1 .634-.42h4.843a.67.67 0 0 1 .615.434l.007.017.628 1.55zm-.984 1.333A.667.667 0 0 0 2.666 8v2.667c0 .368.299.666.667.666h9.333a.667.667 0 0 0 .667-.666V8a.667.667 0 0 0-.667-.667zm.667 2c0-.368.298-.666.666-.666h.007a.667.667 0 0 1 0 1.333h-.007A.667.667 0 0 1 4 9.333m6.666 0c0-.368.299-.666.667-.666h.007a.667.667 0 0 1 0 1.333h-.007a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8.41 4h7.246a3 3 0 0 1 2.775 1.936l.929 2.29.933-.933a1 1 0 1 1 1.414 1.414l-.899.899A3 3 0 0 1 22 12v4a3 3 0 0 1-2 2.83V20a1 1 0 1 1-2 0v-1H6v1a1 1 0 1 1-2 0v-1.17A3 3 0 0 1 2 16v-4c0-.978.468-1.846 1.192-2.394l-.9-.899a1 1 0 0 1 1.415-1.414l.928.928.933-2.335A3 3 0 0 1 8.41 4M6.477 9l.948-2.372A1 1 0 0 1 8.377 6h7.263a1 1 0 0 1 .933.676L17.515 9zM5 11a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm1 3a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1m10 0a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H17a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.214 5.333h9.66a4 4 0 0 1 3.702 2.581l1.237 3.054 1.245-1.244a1.333 1.333 0 1 1 1.885 1.886l-1.198 1.198A4 4 0 0 1 29.334 16v5.333a4 4 0 0 1-2.667 3.773v1.56a1.333 1.333 0 0 1-2.667 0v-1.333H8v1.334a1.333 1.333 0 1 1-2.666 0v-1.561a4 4 0 0 1-2.667-3.773V16c0-1.304.624-2.462 1.589-3.192L3.058 11.61a1.333 1.333 0 0 1 1.885-1.886L6.18 10.96l1.245-3.113a4 4 0 0 1 3.79-2.515M8.636 12l1.265-3.162a1.33 1.33 0 0 1 1.3-.838h9.653a1.33 1.33 0 0 1 1.244.9l1.256 3.1zm-1.969 2.667c-.736 0-1.333.597-1.333 1.333v5.333c0 .737.597 1.334 1.333 1.334h18.667c.736 0 1.333-.597 1.333-1.334V16c0-.736-.597-1.333-1.333-1.333zm1.333 4c0-.737.597-1.334 1.334-1.334h.013a1.333 1.333 0 0 1 0 2.667h-.013A1.333 1.333 0 0 1 8 18.667m13.334 0c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667h-.013a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mt = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(jt, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(yt, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Rt, {
              ...n,
              ref: r
            })]
          })
        }));
      Mt.displayName = "Car", Mt.categories = ["transportation"], Mt.tags = ["vehicle", "drive", "trip", "journey", "automobile", "GTAO", "transport"], Mt.MD = jt, Mt.LG = yt, Mt.XL = Rt;
      const Lt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.683-.26.943 0l1.456 1.456.022.022 3.855 3.855 7.203 7.203.022.022.775.775a.667.667 0 0 1-.942.943l-.26-.26a2 2 0 0 1-1.268.455H3.334a2 2 0 0 1-2-2V3.99a2 2 0 0 1 .464-1.248l-.936-.936a.667.667 0 0 1 0-.943m1.89 2.833a.7.7 0 0 0-.085.312V6h2.39zm3.639 3.638H2.667v6a.667.667 0 0 0 .667.667h9.332c.11 0 .217-.027.313-.079zM10.667.667c.368 0 .667.298.667.666V2h1.333a2 2 0 0 1 2 2v6.333a.667.667 0 0 1-1.333 0v-3h-3a.667.667 0 1 1 0-1.333h3V4a.667.667 0 0 0-.667-.667h-1.333V4A.667.667 0 0 1 10 4v-.667H6.334a.667.667 0 1 1 0-1.333H10v-.667c0-.368.299-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ct = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l2.184 2.184.033.032L21.51 20.096l.032.033 1.164 1.164a1 1 0 0 1-1.414 1.414l-.39-.39a3 3 0 0 1-1.9.683H5a3 3 0 0 1-3-3V5.983a3 3 0 0 1 .697-1.872L1.293 2.707a1 1 0 0 1 0-1.414m2.835 4.25A1 1 0 0 0 4 6.01V9h3.586zM9.586 11H4v9a1 1 0 0 0 1 1h13.998c.164 0 .326-.041.47-.118zM15 3V2a1 1 0 1 1 2 0v1h2a3 3 0 0 1 3 3v9.5a1 1 0 1 1-2 0V11h-4.5a1 1 0 1 1 0-2H20V6a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V5H9.5a1 1 0 0 1 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Et = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.364-.52 1.885 0l2.912 2.912q.023.02.043.043l7.711 7.71.001.002L28.68 26.795l.044.044 1.552 1.551a1.333 1.333 0 0 1-1.886 1.886l-.52-.52a4 4 0 0 1-2.534.91H6.666a4 4 0 0 1-4-4V7.979a4 4 0 0 1 .93-2.497L1.723 3.609a1.333 1.333 0 0 1 0-1.885m3.78 5.666c-.107.19-.166.404-.171.623V12h4.781zm7.277 7.277H5.333v12A1.333 1.333 0 0 0 6.666 28h18.666c.218 0 .433-.055.624-.158zm8.552-13.334c.736 0 1.333.597 1.333 1.334V4h2.667a4 4 0 0 1 4 4v12.667a1.333 1.333 0 1 1-2.667 0v-6h-6a1.333 1.333 0 0 1 0-2.667h6V8a1.333 1.333 0 0 0-1.333-1.333h-2.667V8A1.333 1.333 0 1 1 20 8V6.667h-7.334a1.333 1.333 0 0 1 0-2.667H20V2.667c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        At = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Lt, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ct, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Et, {
              ...n,
              ref: r
            })]
          })
        }));
      At.displayName = "CalendarOff", At.categories = ["time"], At.tags = ["date", "day", "month", "year", "event", "delete", "remove"], At.MD = Lt, At.LG = Ct, At.XL = Et;
      const Pt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.333.667c.368 0 .667.298.667.666V2h4v-.667a.667.667 0 0 1 1.333 0V2h1.333a2 2 0 0 1 2 2v9.333a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h1.333v-.667c0-.368.299-.666.667-.666m-.667 2.666H3.333A.667.667 0 0 0 2.666 4v2h10.667V4a.667.667 0 0 0-.667-.667h-1.333V4A.667.667 0 0 1 10 4v-.667H6V4a.667.667 0 1 1-1.334 0zm8.667 4H2.666v6c0 .369.299.667.667.667h9.333a.667.667 0 0 0 .667-.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        It = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 1a1 1 0 0 1 1 1v1h6V2a1 1 0 1 1 2 0v1h2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h2V2a1 1 0 0 1 1-1M7 5H5a1 1 0 0 0-1 1v3h16V6a1 1 0 0 0-1-1h-2v1a1 1 0 1 1-2 0V5H9v1a1 1 0 0 1-2 0zm13 6H4v9a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        St = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.667 1.333c.736 0 1.333.597 1.333 1.334V4h8V2.667a1.333 1.333 0 0 1 2.667 0V4h2.667a4 4 0 0 1 4 4v18.667a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4V8a4 4 0 0 1 4-4h2.667V2.667c0-.737.597-1.334 1.333-1.334M9.334 6.667H6.667c-.736 0-1.333.597-1.333 1.333v4h21.333V8c0-.736-.597-1.333-1.333-1.333h-2.667V8A1.333 1.333 0 0 1 20 8V6.667h-8V8a1.333 1.333 0 1 1-2.666 0zm17.333 8H5.334v12c0 .736.597 1.333 1.333 1.333h18.667c.736 0 1.333-.597 1.333-1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _t = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Pt, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(It, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(St, {
              ...n,
              ref: r
            })]
          })
        }));
      _t.displayName = "Calendar", _t.categories = ["time"], _t.tags = ["date", "month", "year", "event", "birthday", "birthdate"], _t.MD = Pt, _t.LG = It, _t.XL = St;
      const zt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.667 0A7.333 7.333 0 0 1 .667 8M8 3.333c.369 0 .667.299.667.667v3.588l2.298 1.15a.667.667 0 1 1-.596 1.192L7.702 8.596A.67.67 0 0 1 7.334 8V4c0-.368.298-.667.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ht = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-7a1 1 0 0 1 1 1v5.382l3.447 1.724a1 1 0 1 1-.894 1.788l-4-2A1 1 0 0 1 11 12V6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4C9.372 4 4 9.373 4 16s5.372 12 12 12c6.627 0 12-5.373 12-12S22.627 4 16 4M1.333 16C1.333 7.9 7.9 1.333 16 1.333S30.666 7.9 30.666 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16M16 6.667c.736 0 1.333.597 1.333 1.333v7.176l4.596 2.298a1.333 1.333 0 0 1-1.192 2.385l-5.334-2.667A1.33 1.33 0 0 1 14.666 16V8c0-.736.597-1.333 1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dt = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(zt, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ht, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Tt, {
              ...n,
              ref: r
            })]
          })
        }));
      Dt.displayName = "Clock", Dt.categories = ["time"], Dt.tags = ["time", "watch", "alarm", "hour", "minute", "second", "planned", "watch"], Dt.MD = zt, Dt.LG = Ht, Dt.XL = Tt;
      const Bt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.333 2a1 1 0 0 0-1 1v7.892c.31-.147.651-.225 1-.225h8.334V2zM14 2A1.334 1.334 0 0 0 12.667.667H4.333A2.333 2.333 0 0 0 2 3v10a2.333 2.333 0 0 0 2.333 2.333h8.334A1.334 1.334 0 0 0 14 14zm-1.333 10H4.333a1 1 0 1 0 0 2h8.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.5 3A1.5 1.5 0 0 0 5 4.5v11.838A3.5 3.5 0 0 1 6.5 16H19V3zM21 3a2 2 0 0 0-2-2H6.5A3.5 3.5 0 0 0 3 4.5v15A3.5 3.5 0 0 0 6.5 23H19a2 2 0 0 0 2-2zm-2 15H6.5a1.5 1.5 0 1 0 0 3H19z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8.667 4a2 2 0 0 0-2 2v15.784a4.7 4.7 0 0 1 2-.45h16.666V4zM28 4a2.667 2.667 0 0 0-2.667-2.667H8.667A4.667 4.667 0 0 0 4 6v20a4.667 4.667 0 0 0 4.667 4.667h16.666A2.667 2.667 0 0 0 28 28zm-2.667 20H8.667a2 2 0 1 0 0 4h16.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vt = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Bt, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Nt, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(kt, {
              ...n,
              ref: r
            })]
          })
        }));
      Vt.displayName = "Book", Vt.categories = ["text", "gaming"], Vt.tags = ["code", "coding", "version control", "git", "repository", "remove", "delete", "reading", "misinformation", "disinformation", "misinformed", "charlatan", "sophistry", "false", "lies", "untruth", "propaganda", "censored", "cancelled", "forbidden", "prohibited", "banned", "uneducated", "re-education", "unlearn"], Vt.MD = Bt, Vt.LG = Nt, Vt.XL = kt;
      const Ot = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "m2.667 3.333.002.01a.2.2 0 0 0 .021.045.8.8 0 0 0 .194.2c.22.174.58.36 1.084.527 1.001.334 2.427.552 4.032.552s3.03-.218 4.032-.552c.504-.168.864-.353 1.084-.527a.8.8 0 0 0 .194-.2.2.2 0 0 0 .021-.044l.002-.01-.002-.01a.2.2 0 0 0-.021-.045.8.8 0 0 0-.194-.2c-.22-.174-.58-.36-1.084-.527C11.03 2.218 9.605 2 8 2s-3.03.218-4.032.552c-.504.168-.864.353-1.084.527a.8.8 0 0 0-.194.2.2.2 0 0 0-.021.044zm10.666 1.685a6.4 6.4 0 0 1-.88.362C11.283 5.77 9.708 6 8 6s-3.283-.23-4.454-.62a6.4 6.4 0 0 1-.88-.362V8l.002.006a.2.2 0 0 0 .02.042.8.8 0 0 0 .187.197c.214.172.572.362 1.093.536 1.039.346 2.49.551 4.032.551s2.993-.205 4.032-.551c.521-.174.88-.364 1.093-.536a.8.8 0 0 0 .187-.197.2.2 0 0 0 .021-.048zm1.334-1.685c0-.568-.346-1.003-.726-1.302-.387-.305-.906-.55-1.488-.744C11.283.897 9.708.667 8 .667s-3.283.23-4.454.62c-.581.194-1.1.44-1.487.744-.38.3-.726.734-.726 1.302v9.334c0 .55.329.981.706 1.284.383.309.904.561 1.507.762 1.212.404 2.814.62 4.454.62s3.241-.216 4.453-.62c.604-.2 1.125-.453 1.508-.761.377-.304.706-.735.706-1.285zm-1.334 6.351c-.264.136-.56.256-.88.363-1.212.404-2.813.62-4.453.62s-3.242-.216-4.454-.62a6 6 0 0 1-.88-.363v2.983l.002.007a.2.2 0 0 0 .02.042.8.8 0 0 0 .187.197c.214.172.572.362 1.093.535C5.007 13.795 6.458 14 8 14s2.993-.205 4.032-.552c.521-.173.88-.363 1.093-.535a.8.8 0 0 0 .187-.197.2.2 0 0 0 .021-.048V9.684",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4 5q0 .002.003.015a.3.3 0 0 0 .032.066c.043.07.13.174.291.301.33.26.87.539 1.626.79C7.454 6.674 9.592 7 12 7s4.546-.327 6.048-.827c.756-.252 1.296-.53 1.626-.79.162-.128.248-.232.29-.302a.3.3 0 0 0 .033-.066L20 5l-.003-.015a.3.3 0 0 0-.032-.066 1.2 1.2 0 0 0-.291-.301c-.33-.26-.87-.539-1.626-.79C16.546 3.326 14.408 3 12 3s-4.546.327-6.048.827c-.756.252-1.296.53-1.626.79a1.2 1.2 0 0 0-.29.302.3.3 0 0 0-.033.066zm16 2.527a9.5 9.5 0 0 1-1.32.543C16.925 8.655 14.563 9 12 9s-4.925-.345-6.68-.93A9.5 9.5 0 0 1 4 7.527v4.475l.002.009q.003.015.03.063a1.2 1.2 0 0 0 .28.295c.321.258.858.543 1.64.804C7.51 13.692 9.686 14 12 14s4.49-.308 6.048-.827c.782-.261 1.319-.546 1.64-.804.158-.127.24-.229.28-.295a.3.3 0 0 0 .031-.07v-.002L20 12zM22 5c0-.852-.519-1.504-1.088-1.953-.581-.458-1.36-.826-2.232-1.117C16.925 1.345 14.563 1 12 1s-4.925.345-6.68.93c-.873.29-1.651.66-2.232 1.117C2.518 3.496 2 4.148 2 5v14c0 .825.492 1.472 1.058 1.927.575.463 1.356.841 2.262 1.143 1.818.606 4.22.93 6.68.93s4.862-.324 6.68-.93c.906-.302 1.687-.68 2.262-1.143C21.508 20.472 22 19.825 22 19zm-2 9.526a9.5 9.5 0 0 1-1.32.544c-1.818.606-4.22.93-6.68.93s-4.862-.324-6.68-.93A9.5 9.5 0 0 1 4 14.526v4.476l.002.009q.003.015.03.063a1.2 1.2 0 0 0 .28.295c.321.258.858.543 1.64.804C7.51 20.692 9.686 21 12 21s4.49-.308 6.048-.827c.782-.261 1.319-.546 1.64-.804.158-.127.24-.229.28-.295a.3.3 0 0 0 .032-.072v-4.476",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ft = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.333 6.667q-.001.001.004.02a.4.4 0 0 0 .043.088c.057.092.172.231.388.401.44.347 1.16.718 2.168 1.054C9.94 8.898 12.79 9.333 16 9.333s6.061-.435 8.064-1.103c1.008-.336 1.727-.707 2.168-1.054.216-.17.331-.309.388-.4a.4.4 0 0 0 .043-.089l.004-.02q.001-.001-.004-.02a.4.4 0 0 0-.043-.089 1.7 1.7 0 0 0-.388-.401c-.44-.347-1.16-.718-2.168-1.054C22.06 4.436 19.21 4 16 4s-6.061.436-8.064 1.103c-1.008.336-1.727.707-2.168 1.054-.216.17-.331.309-.388.401a.4.4 0 0 0-.043.088q-.005.02-.004.02m21.334 3.368c-.535.274-1.13.515-1.76.725-2.34.78-5.49 1.24-8.907 1.24s-6.566-.46-8.907-1.24c-.63-.21-1.225-.451-1.76-.725v5.967l.004.013a.4.4 0 0 0 .04.083c.052.089.162.225.372.394.429.344 1.145.724 2.187 1.071 2.077.693 4.98 1.104 8.064 1.104 3.085 0 5.987-.411 8.064-1.104 1.043-.347 1.759-.727 2.187-1.071.21-.17.32-.305.373-.394a.4.4 0 0 0 .043-.096v-5.967m2.666-3.368c0-1.136-.691-2.006-1.45-2.605-.775-.61-1.813-1.1-2.976-1.489-2.34-.78-5.49-1.24-8.907-1.24s-6.566.46-8.907 1.24c-1.163.388-2.201.88-2.975 1.49-.76.598-1.451 1.468-1.451 2.604v18.666c0 1.1.656 1.963 1.41 2.57.767.617 1.809 1.121 3.016 1.524 2.424.808 5.627 1.24 8.907 1.24s6.483-.432 8.907-1.24c1.207-.403 2.249-.907 3.016-1.524.754-.607 1.41-1.47 1.41-2.57zm-2.666 12.7c-.53.272-1.122.514-1.76.726-2.424.808-5.627 1.24-8.907 1.24s-6.483-.432-8.907-1.24a13 13 0 0 1-1.76-.725v5.967l.004.013a.4.4 0 0 0 .04.084c.052.088.162.224.372.393.429.345 1.145.724 2.187 1.072C10.013 27.589 12.916 28 16 28c3.085 0 5.987-.41 8.064-1.103 1.043-.348 1.759-.727 2.187-1.072.21-.169.32-.305.373-.393a.4.4 0 0 0 .043-.097v-5.967",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xt = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ot, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Gt, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Ft, {
              ...n,
              ref: r
            })]
          })
        }));
      Xt.displayName = "Database", Xt.categories = ["devices", "development"], Xt.tags = ["storage", "memory", "container", "tin", "pot", "bytes", "servers"], Xt.MD = Ot, Xt.LG = Gt, Xt.XL = Ft;
      const qt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.585 2.192a5.333 5.333 0 0 1 6.36 3.141h.722a3.666 3.666 0 1 1 0 7.334h-.334a.667.667 0 0 1 0-1.334h.334a2.333 2.333 0 1 0 0-4.666h-1.194a.67.67 0 0 1-.639-.476 4 4 0 1 0-4.977 4.975.667.667 0 0 1-.381 1.278 5.333 5.333 0 0 1 .11-10.252M8 7.333c.368 0 .667.299.667.667v2.667a.667.667 0 0 1-1.334 0V8c0-.368.299-.667.667-.667m-.667 6c0-.368.299-.666.667-.666h.007a.667.667 0 1 1 0 1.333H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ut = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.878 3.287A8 8 0 0 1 16.418 8H17.5a5.5 5.5 0 1 1 0 11H17a1 1 0 0 1 0-2h.5a3.5 3.5 0 0 0 0-7h-1.79a1 1 0 0 1-.958-.714 6 6 0 1 0-7.466 7.464 1 1 0 0 1-.572 1.916 8 8 0 0 1 .164-15.379M12 11a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.17 4.383a10.667 10.667 0 0 1 12.72 6.284h1.443a7.333 7.333 0 1 1 0 14.666h-.666a1.333 1.333 0 0 1 0-2.666h.666a4.666 4.666 0 1 0 0-9.334h-2.386c-.59 0-1.11-.387-1.278-.952a8.001 8.001 0 1 0-9.954 9.952 1.333 1.333 0 0 1-.763 2.555 10.667 10.667 0 0 1 .219-20.505M16 14.667c.736 0 1.333.597 1.333 1.333v5.333a1.333 1.333 0 1 1-2.666 0V16c0-.736.597-1.333 1.333-1.333m-1.333 12c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wt = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(qt, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ut, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Kt, {
              ...n,
              ref: r
            })]
          })
        }));
      Wt.displayName = "CloudAlert", Wt.categories = ["development"], Wt.tags = ["weather", "danger", "warning", "alert", "error", "sync", "network", "exclamation"], Wt.MD = qt, Wt.LG = Ut, Wt.XL = Kt;
      const $t = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.667 2A.667.667 0 0 0 2 2.667v2.666C2 5.701 2.3 6 2.667 6h10.666A.667.667 0 0 0 14 5.333V2.667A.667.667 0 0 0 13.333 2zm-2 .667a2 2 0 0 1 2-2h10.666a2 2 0 0 1 2 2v2.666a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2zM3.333 4c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H4A.667.667 0 0 1 3.333 4m-.666 6a.667.667 0 0 0-.667.667v2.666c0 .368.299.667.667.667h10.666a.667.667 0 0 0 .667-.667v-2.666a.667.667 0 0 0-.667-.667zm-2 .667a2 2 0 0 1 2-2h10.666a2 2 0 0 1 2 2v2.666a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2zM3.333 12c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H4A.667.667 0 0 1 3.333 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4 3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zM1 4a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm4 2a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1m-1 9a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-4a1 1 0 0 0-1-1zm-3 1a3 3 0 0 1 3-3h16a3 3 0 0 1 3 3v4a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3zm4 2a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H6a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.333 4C4.597 4 4 4.597 4 5.333v5.334C4 11.403 4.597 12 5.333 12h21.334c.736 0 1.333-.597 1.333-1.333V5.333C28 4.597 27.403 4 26.667 4zm-4 1.333a4 4 0 0 1 4-4h21.334a4 4 0 0 1 4 4v5.334a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4zM6.667 8c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H8A1.333 1.333 0 0 1 6.667 8M5.333 20C4.597 20 4 20.597 4 21.333v5.334C4 27.403 4.597 28 5.333 28h21.334c.736 0 1.333-.597 1.333-1.333v-5.334c0-.736-.597-1.333-1.333-1.333zm-4 1.333a4 4 0 0 1 4-4h21.334a4 4 0 0 1 4 4v5.334a4 4 0 0 1-4 4H5.333a4 4 0 0 1-4-4zM6.667 24c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 0 1 0 2.666H8A1.333 1.333 0 0 1 6.667 24",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qt = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)($t, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Yt, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Zt, {
              ...n,
              ref: r
            })]
          })
        }));
      Qt.displayName = "Server", Qt.categories = ["development", "devices"], Qt.tags = ["cloud", "storage"], Qt.MD = $t, Qt.LG = Yt, Qt.XL = Zt;
      const Jt = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.866 2.03c.351.11.547.484.437.835L6.97 13.532a.667.667 0 0 1-1.273-.398L9.03 2.468a.667.667 0 0 1 .836-.438M4.47 4.862c.26.26.26.682 0 .943L2.276 8l2.195 2.195a.667.667 0 1 1-.942.943L.862 8.471a.667.667 0 0 1 0-.942l2.667-2.667c.26-.26.682-.26.942 0m7.058 0c.26-.26.682-.26.943 0l2.666 2.667a.667.667 0 0 1 0 .942l-2.666 2.667a.667.667 0 1 1-.943-.943L13.724 8l-2.195-2.195a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        er = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.798 3.046a1 1 0 0 1 .656 1.252l-5 16a1 1 0 0 1-1.908-.596l5-16a1 1 0 0 1 1.252-.656m-8.09 4.247a1 1 0 0 1 0 1.414L3.413 12l3.293 3.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0m10.585 0a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 1 1-1.414-1.414L20.586 12l-3.293-3.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M19.731 4.06c.703.22 1.095.968.875 1.671l-6.667 21.334a1.333 1.333 0 1 1-2.545-.796L18.06 4.936a1.333 1.333 0 0 1 1.67-.875M8.943 9.725c.52.52.52 1.365 0 1.886L4.553 16l4.39 4.39a1.333 1.333 0 0 1-1.886 1.886l-5.333-5.333a1.333 1.333 0 0 1 0-1.886l5.333-5.333c.52-.52 1.365-.52 1.886 0m14.114 0c.52-.52 1.365-.52 1.886 0l5.333 5.333a1.334 1.334 0 0 1 0 1.886l-5.333 5.333a1.333 1.333 0 1 1-1.886-1.885l4.39-4.39-4.39-4.391a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Jt, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(er, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(tr, {
              ...n,
              ref: r
            })]
          })
        }));
      rr.displayName = "CodeXml", rr.categories = ["text", "development"], rr.tags = ["source", "programming", "html", "xml", "code", "computer", "dev", "engineering", "web", "tag"], rr.MD = Jt, rr.LG = er, rr.XL = tr;
      const lr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.919 1.919a2 2 0 0 1 1.414-.586h2a.667.667 0 0 1 0 1.334h-2a.667.667 0 0 0-.666.666v2a.667.667 0 0 1-1.334 0v-2A2 2 0 0 1 1.92 1.92m8.08.08c0-.367.3-.666.668-.666h2a2 2 0 0 1 2 2v2a.667.667 0 0 1-1.334 0v-2a.667.667 0 0 0-.666-.666h-2A.667.667 0 0 1 10 2m-8 8c.37 0 .668.3.668.668v2a.667.667 0 0 0 .666.666h2a.667.667 0 1 1 0 1.334h-2a2 2 0 0 1-2-2v-2c0-.369.299-.667.667-.667m12 0c.37 0 .668.3.668.668v2a2 2 0 0 1-2 2h-2a.667.667 0 0 1 0-1.334h2a.667.667 0 0 0 .666-.666v-2c0-.369.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.879 2.879A3 3 0 0 1 5 2h3a1 1 0 0 1 0 2H5a1 1 0 0 0-1 1v3a1 1 0 0 1-2 0V5a3 3 0 0 1 .879-2.121M15 3a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0V5a1 1 0 0 0-1-1h-3a1 1 0 0 1-1-1M3 15a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3v-3a1 1 0 0 1 1-1m18 0a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3h-3a1 1 0 1 1 0-2h3a1 1 0 0 0 1-1v-3a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ar = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.838 3.838a4 4 0 0 1 2.829-1.171h4a1.333 1.333 0 1 1 0 2.666h-4a1.333 1.333 0 0 0-1.334 1.334v4a1.333 1.333 0 1 1-2.666 0v-4a4 4 0 0 1 1.171-2.829M20 4c0-.736.597-1.333 1.333-1.333h4a4 4 0 0 1 4 4v4a1.333 1.333 0 1 1-2.666 0v-4a1.333 1.333 0 0 0-1.334-1.334h-4A1.333 1.333 0 0 1 20 4M4 20c.736 0 1.333.597 1.333 1.333v4a1.333 1.333 0 0 0 1.334 1.334h4a1.333 1.333 0 0 1 0 2.666h-4a4 4 0 0 1-4-4v-4C2.667 20.597 3.264 20 4 20m24 0c.736 0 1.333.597 1.333 1.333v4a4 4 0 0 1-4 4h-4a1.333 1.333 0 1 1 0-2.666h4a1.333 1.333 0 0 0 1.334-1.334v-4c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        or = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(lr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(nr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ar, {
              ...n,
              ref: r
            })]
          })
        }));
      or.displayName = "Maximize", or.categories = ["layout", "design"], or.tags = ["full screen", "expand", "dashed", "maximum", "big", "large"], or.MD = lr, or.LG = nr, or.XL = ar;
      const ir = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.333 1.333c.368 0 .667.299.667.667v2a2 2 0 0 1-2 2H2a.667.667 0 0 1 0-1.333h2A.667.667 0 0 0 4.667 4V2c0-.368.298-.667.666-.667m5.334 0c.368 0 .666.299.666.667v2a.667.667 0 0 0 .667.667h2A.667.667 0 1 1 14 6h-2a2 2 0 0 1-2-2V2c0-.368.298-.667.667-.667m-9.334 9.334c0-.369.299-.667.667-.667h2a2 2 0 0 1 2 2v2a.667.667 0 1 1-1.333 0v-2A.667.667 0 0 0 4 11.333H2a.667.667 0 0 1-.667-.666M12 11.333a.667.667 0 0 0-.667.667v2A.667.667 0 0 1 10 14v-2a2 2 0 0 1 2-2h2a.667.667 0 1 1 0 1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a1 1 0 0 1 1 1v3a3 3 0 0 1-3 3H3a1 1 0 0 1 0-2h3a1 1 0 0 0 1-1V3a1 1 0 0 1 1-1m8 0a1 1 0 0 1 1 1v3a1 1 0 0 0 1 1h3a1 1 0 1 1 0 2h-3a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1M2 16a1 1 0 0 1 1-1h3a3 3 0 0 1 3 3v3a1 1 0 1 1-2 0v-3a1 1 0 0 0-1-1H3a1 1 0 0 1-1-1m16 1a1 1 0 0 0-1 1v3a1 1 0 1 1-2 0v-3a3 3 0 0 1 3-3h3a1 1 0 1 1 0 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.667 2.667C11.403 2.667 12 3.264 12 4v4a4 4 0 0 1-4 4H4a1.333 1.333 0 0 1 0-2.667h4A1.333 1.333 0 0 0 9.333 8V4c0-.736.597-1.333 1.334-1.333m10.666 0c.737 0 1.334.597 1.334 1.333v4A1.333 1.333 0 0 0 24 9.333h4A1.333 1.333 0 1 1 28 12h-4a4 4 0 0 1-4-4V4c0-.736.597-1.333 1.333-1.333M2.667 21.333C2.667 20.597 3.264 20 4 20h4a4 4 0 0 1 4 4v4a1.333 1.333 0 0 1-2.667 0v-4A1.333 1.333 0 0 0 8 22.667H4a1.333 1.333 0 0 1-1.333-1.334M24 22.667A1.333 1.333 0 0 0 22.667 24v4A1.333 1.333 0 1 1 20 28v-4a4 4 0 0 1 4-4h4a1.333 1.333 0 1 1 0 2.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ir, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(sr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(cr, {
              ...n,
              ref: r
            })]
          })
        }));
      dr.displayName = "Minimize", dr.categories = ["layout", "design"], dr.tags = ["exit", "full screen", "close", "shrink", "window", "reduce", "video playback"], dr.MD = ir, dr.LG = sr, dr.XL = cr;
      const ur = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.333 2.667c0-.737.597-1.334 1.334-1.334H6c.736 0 1.333.597 1.333 1.334V6c0 .736-.597 1.333-1.333 1.333H2.667A1.333 1.333 0 0 1 1.333 6zm4.667 0H2.667V6H6zm2.667 0c0-.737.597-1.334 1.333-1.334h3.333c.737 0 1.334.597 1.334 1.334V6c0 .736-.597 1.333-1.334 1.333H10A1.333 1.333 0 0 1 8.667 6zm4.666 0H10V6h3.333zM1.333 10c0-.736.597-1.333 1.334-1.333H6c.736 0 1.333.597 1.333 1.333v3.333c0 .737-.597 1.334-1.333 1.334H2.667a1.333 1.333 0 0 1-1.334-1.334zM6 10H2.667v3.333H6zm2.667 0c0-.736.597-1.333 1.333-1.333h3.333c.737 0 1.334.597 1.334 1.333v3.333c0 .737-.597 1.334-1.334 1.334H10a1.333 1.333 0 0 1-1.333-1.334zm4.666 0H10v3.333h3.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2 4a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 0H4v5h5zm4 0a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm7 0h-5v5h5zM2 15a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm7 0H4v5h5zm4 0a2 2 0 0 1 2-2h5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2zm7 0h-5v5h5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.667 5.333a2.667 2.667 0 0 1 2.666-2.666H12a2.667 2.667 0 0 1 2.667 2.666V12A2.667 2.667 0 0 1 12 14.667H5.333A2.667 2.667 0 0 1 2.667 12zm9.333 0H5.333V12H12zm5.333 0A2.667 2.667 0 0 1 20 2.667h6.667a2.667 2.667 0 0 1 2.666 2.666V12a2.667 2.667 0 0 1-2.666 2.667H20A2.667 2.667 0 0 1 17.333 12zm9.334 0H20V12h6.667zM2.667 20a2.667 2.667 0 0 1 2.666-2.667H12A2.667 2.667 0 0 1 14.667 20v6.667A2.667 2.667 0 0 1 12 29.333H5.333a2.667 2.667 0 0 1-2.666-2.666zM12 20H5.333v6.667H12zm5.333 0A2.667 2.667 0 0 1 20 17.333h6.667A2.667 2.667 0 0 1 29.333 20v6.667a2.667 2.667 0 0 1-2.666 2.666H20a2.667 2.667 0 0 1-2.667-2.666zm9.334 0H20v6.667h6.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ur, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(hr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(fr, {
              ...n,
              ref: r
            })]
          })
        }));
      vr.displayName = "LayoutGrid", vr.categories = ["design", "layout"], vr.tags = ["app", "home", "start", "squares", "hub", "menu", "blocks", "options", "items", "gallery"], vr.MD = ur, vr.LG = hr, vr.XL = fr;
      const pr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.334 1.333c0-.368.298-.666.666-.666h8c.368 0 .667.298.667.666V2H13a2.333 2.333 0 1 1 0 4.667h-.38a4.67 4.67 0 0 1-2.62 3.55v1.112c.003.006.01.022.033.048.045.051.124.11.226.157l-.279.606.278-.606c.907.415 1.513 1.374 1.689 2.466h1.387a.667.667 0 0 1 0 1.333H2.667a.667.667 0 0 1 0-1.333h1.387c.176-1.092.781-2.05 1.688-2.466a.7.7 0 0 0 .226-.157.2.2 0 0 0 .032-.048v-1.113a4.67 4.67 0 0 1-2.618-3.55H3A2.333 2.333 0 1 1 3 2h.334zm0 2H3a1 1 0 0 0 0 2h.334zM4.667 2h6.667v4a3.333 3.333 0 1 1-6.667 0zm8 1.333v2H13a1 1 0 1 0 0-2zM7.334 10.62v.714c0 .767-.626 1.224-1.035 1.412l-.001.001c-.368.168-.732.615-.887 1.254h5.179c-.155-.639-.52-1.086-.887-1.254h-.001c-.41-.189-1.035-.646-1.035-1.413v-.714a4.7 4.7 0 0 1-1.333 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1h.5a3.5 3.5 0 1 1 0 7h-.572A7 7 0 0 1 15 15.325v1.669c.004.01.015.033.049.071.068.077.186.166.339.236l-.418.909.416-.91c1.361.624 2.27 2.062 2.534 3.7H20a1 1 0 1 1 0 2H4a1 1 0 1 1 0-2h2.08c.264-1.638 1.172-3.076 2.533-3.699.152-.07.27-.159.338-.236A.3.3 0 0 0 9 16.994v-1.67A7 7 0 0 1 5.072 10H4.5a3.5 3.5 0 1 1 0-7H5zm0 3h-.5a1.5 1.5 0 0 0 0 3H5zm2-2h10v6A5 5 0 1 1 7 9zm12 2v3h.5a1.5 1.5 0 0 0 0-3zm-8 10.928V17c0 1.15-.939 1.836-1.552 2.119h-.002c-.551.253-1.098.923-1.33 1.881h7.768c-.232-.958-.779-1.628-1.33-1.88l-.002-.002C13.94 18.837 13 18.15 13 17v-1.072a7 7 0 0 1-2 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.666 2.667c0-.737.597-1.333 1.334-1.333h16c.736 0 1.333.596 1.333 1.333V4H26a4.667 4.667 0 0 1 0 9.334h-.763A9.33 9.33 0 0 1 20 20.433v2.226c.005.013.02.044.065.095.09.103.248.221.452.315l-.557 1.211.555-1.212c1.814.83 3.025 2.748 3.378 4.932h2.773a1.333 1.333 0 1 1 0 2.667H5.333a1.333 1.333 0 1 1 0-2.667h2.773c.353-2.184 1.563-4.1 3.377-4.931.203-.094.361-.212.451-.315a.4.4 0 0 0 .066-.096v-2.225a9.33 9.33 0 0 1-5.238-7.1H6A4.667 4.667 0 0 1 6 4h.666zm0 4H6a2 2 0 1 0 0 4h.666zM9.333 4h13.333v8a6.666 6.666 0 1 1-13.333 0zm16 2.667v4H26a2 2 0 0 0 0-4zm-10.667 14.57v1.43c0 1.534-1.251 2.448-2.07 2.824l-.002.002c-.735.336-1.463 1.23-1.773 2.507h10.357c-.31-1.277-1.038-2.171-1.773-2.507l-.003-.002c-.817-.376-2.069-1.29-2.069-2.824v-1.43a9.3 9.3 0 0 1-2.667 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(pr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(gr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(wr, {
              ...n,
              ref: r
            })]
          })
        }));
      mr.displayName = "Trophy", mr.categories = ["sports", "gaming"], mr.tags = ["prize", "sports", "winner", "achievement", "award", "champion", "celebration", "victory"], mr.MD = pr, mr.LG = gr, mr.XL = wr;
      const xr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2 8a6 6 0 0 1 6-6v12a6 6 0 0 1-6-6M8 .666a7.333 7.333 0 1 0 0 14.667A7.333 7.333 0 0 0 8 .666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        br = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3 12a9 9 0 0 1 9-9v18a9 9 0 0 1-9-9m9-11C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12zm0-2.666C7.9 1.334 1.334 7.9 1.334 16S7.9 30.667 16 30.667 30.667 24.1 30.667 16 24.1 1.334 16 1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(xr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(br, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(jr, {
              ...n,
              ref: r
            })]
          })
        }));
      yr.displayName = "PartialCircle", yr.categories = ["shapes"], yr.tags = ["Partial", "Half", "Middle", "Split"], yr.MD = xr, yr.LG = br, yr.XL = jr;
      const Rr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a2.667 2.667 0 0 0-2.666 2.667V6h5.333V4.667A2.667 2.667 0 0 0 8 2m4 4V4.667a4 4 0 0 0-8 0V6h-.667a2 2 0 0 0-2 2v5.333a2 2 0 0 0 2 2h9.334a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zM3.334 7.333A.667.667 0 0 0 2.667 8v5.333c0 .368.298.667.667.667h9.333a.667.667 0 0 0 .667-.667V8a.667.667 0 0 0-.667-.667zm3.333 3.334a1.333 1.333 0 1 1 2.666 0 1.333 1.333 0 0 1-2.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a4 4 0 0 0-4 4v2h8V7a4 4 0 0 0-4-4m6 6V7A6 6 0 1 0 6 7v2H5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-8a3 3 0 0 0-3-3zM5 11a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1zm5 5a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Lr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4a5.333 5.333 0 0 0-5.334 5.333V12h10.667V9.333A5.333 5.333 0 0 0 16 4m8 8V9.333a8 8 0 1 0-16 0V12H6.667a4 4 0 0 0-4 4v10.667a4 4 0 0 0 4 4h18.666a4 4 0 0 0 4-4V16a4 4 0 0 0-4-4zM6.667 14.667c-.737 0-1.334.597-1.334 1.333v10.667c0 .736.597 1.333 1.334 1.333h18.666c.737 0 1.334-.597 1.334-1.333V16c0-.736-.597-1.333-1.334-1.333zm6.666 6.666a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Rr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Mr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Lr, {
              ...n,
              ref: r
            })]
          })
        }));
      Cr.displayName = "LockKeyhole", Cr.categories = ["security"], Cr.tags = ["security", "password", "secure", "admin", "lock", "safe", "protection", "security", "latch"], Cr.MD = Rr, Cr.LG = Mr, Cr.XL = Lr;
      const Er = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a2.667 2.667 0 0 0-2.666 2.666v2h5.333v-2A2.667 2.667 0 0 0 8 2M4.667 8zh7.999c.368 0 .667.298.667.666v4.667a.667.667 0 0 1-.667.667H3.334a.667.667 0 0 1-.667-.667V8.666c0-.368.298-.666.667-.666zm7.334-3.334v2h.666a2 2 0 0 1 2 2v4.667a2 2 0 0 1-2 2H3.334a2 2 0 0 1-2-2V8.666a2 2 0 0 1 2-2H4v-2a4 4 0 0 1 8 0M4 11c0-.368.298-.667.666-.667h.006a.667.667 0 0 1 0 1.333h-.006A.667.667 0 0 1 4 11M8 10.333a.667.667 0 0 0 0 1.333h.007a.667.667 0 0 0 0-1.333zm3.333 0a.667.667 0 0 0 0 1.333h.006a.667.667 0 0 0 0-1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ar = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a4 4 0 0 0-4 4v3h8V7a4 4 0 0 0-4-4M6 7v3H5a3 3 0 0 0-3 3v7a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-7a3 3 0 0 0-3-3h-1V7A6 6 0 1 0 6 7m-2 6a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1zm2 3a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H7a1 1 0 0 1-1-1m6-1a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2zm5 0a1 1 0 1 0 0 2h.01a1 1 0 1 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4a5.333 5.333 0 0 0-5.334 5.334v4h10.667v-4A5.333 5.333 0 0 0 16 4M9.333 16h16c.737 0 1.334.597 1.334 1.334v9.333c0 .736-.597 1.333-1.334 1.333H6.667a1.333 1.333 0 0 1-1.334-1.333v-9.333c0-.737.597-1.334 1.334-1.334h2.666M24 9.334v4h1.333a4 4 0 0 1 4 4v9.333a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4v-9.333a4 4 0 0 1 4-4H8v-4a8 8 0 0 1 16 0M8 22c0-.736.597-1.333 1.333-1.333h.014a1.333 1.333 0 1 1 0 2.667h-.014A1.333 1.333 0 0 1 8 22m8-1.333a1.333 1.333 0 1 0 0 2.667h.014a1.333 1.333 0 1 0 0-2.667zm6.667 0a1.333 1.333 0 1 0 0 2.667h.013a1.333 1.333 0 1 0 0-2.667z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ir = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Er, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ar, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Pr, {
              ...n,
              ref: r
            })]
          })
        }));
      Ir.displayName = "LockPassword", Ir.categories = ["security"], Ir.tags = ["security", "password", "secure", "admin"], Ir.MD = Er, Ir.LG = Ar, Ir.XL = Pr;
      const Sr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.334 2.667a.667.667 0 0 0-.667.666v9.334c0 .368.298.666.667.666h.39l5.862-5.862a2 2 0 0 1 2.828 0l.92.92V3.332a.667.667 0 0 0-.667-.666zm11.333 7.332V3.333a2 2 0 0 0-2-2H3.334a2 2 0 0 0-2 2v9.334a2 2 0 0 0 2 2h9.333a2 2 0 0 0 2-2V9.999m-1.333.277-1.862-1.862a.667.667 0 0 0-.943 0l-4.92 4.92h7.058a.667.667 0 0 0 .667-.667zM6 5.333a.667.667 0 1 0 0 1.334.667.667 0 0 0 0-1.334M4 6a2 2 0 1 1 4 0 2 2 0 0 1-4 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _r = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5 4a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h.586l8.793-8.793a3 3 0 0 1 4.242 0L20 12.586V5a1 1 0 0 0-1-1zm17 10.999V5a3 3 0 0 0-3-3H5a3 3 0 0 0-3 3v14a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3v-4.001m-2 .415-2.793-2.793a1 1 0 0 0-1.414 0L8.414 20H19a1 1 0 0 0 1-1zM9 8a1 1 0 1 0 0 2 1 1 0 0 0 0-2M6 9a3 3 0 1 1 6 0 3 3 0 0 1-6 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.667 5.333c-.737 0-1.334.597-1.334 1.334v18.666c0 .737.597 1.334 1.334 1.334h.78l11.725-11.724a4 4 0 0 1 5.656 0l1.838 1.838V6.667c0-.737-.596-1.334-1.333-1.334zm22.666 14.665V6.667a4 4 0 0 0-4-4H6.667a4 4 0 0 0-4 4v18.666a4 4 0 0 0 4 4h18.666a4 4 0 0 0 4-4v-5.335m-2.666.554-3.725-3.724a1.333 1.333 0 0 0-1.885 0l-9.838 9.839h14.114c.737 0 1.334-.597 1.334-1.334zM12 10.667a1.333 1.333 0 1 0 0 2.666 1.333 1.333 0 0 0 0-2.666M8 12a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Sr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(_r, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(zr, {
              ...n,
              ref: r
            })]
          })
        }));
      Hr.displayName = "Image", Hr.categories = ["photography", "text", "multimedia", "files"], Hr.tags = ["picture", "photo"], Hr.MD = Sr, Hr.LG = _r, Hr.XL = zr;
      const Tr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.7 2.034a4.667 4.667 0 0 1 7.967 3.3c0 1.025-.392 2.075-1.207 2.816-.481.483-.71.835-.806 1.314a.667.667 0 0 1-1.308-.261c.17-.85.605-1.43 1.183-2.008l.025-.024c.51-.458.78-1.136.78-1.838a3.333 3.333 0 0 0-6.667 0c0 .537.092 1.15.805 1.862.504.504 1.01 1.152 1.182 2.008a.667.667 0 1 1-1.308.261c-.095-.477-.388-.897-.817-1.326-1.021-1.02-1.195-2.007-1.195-2.805 0-1.237.491-2.424 1.366-3.3M5.333 12c0-.368.299-.667.667-.667h4a.667.667 0 0 1 0 1.334H6A.667.667 0 0 1 5.333 12M6 14.667c0-.368.299-.667.667-.667h2.667a.667.667 0 1 1 0 1.333H6.667A.667.667 0 0 1 6 14.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.05 3.05A7 7 0 0 1 19 8c0 1.538-.588 3.113-1.81 4.224-.722.725-1.066 1.253-1.21 1.972a1 1 0 0 1-1.96-.392c.254-1.275.907-2.145 1.773-3.011l.038-.036C16.595 10.069 17 9.053 17 8A5 5 0 0 0 7 8c0 .804.139 1.724 1.207 2.793.756.756 1.517 1.727 1.774 3.01a1 1 0 1 1-1.962.393c-.143-.716-.582-1.345-1.226-1.989C5.26 10.676 5 9.196 5 8a7 7 0 0 1 2.05-4.95M8 18a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1m1 4a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Br = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.4 4.067a9.333 9.333 0 0 1 15.933 6.6c0 2.05-.784 4.15-2.413 5.632-.963.967-1.42 1.67-1.613 2.63a1.333 1.333 0 0 1-2.615-.524c.34-1.7 1.21-2.86 2.365-4.015l.05-.048c1.02-.916 1.56-2.272 1.56-3.675a6.667 6.667 0 0 0-13.334 0c0 1.072.185 2.299 1.61 3.723 1.008 1.009 2.022 2.304 2.364 4.015a1.333 1.333 0 0 1-2.615.523c-.19-.955-.777-1.794-1.635-2.652-2.042-2.042-2.39-4.015-2.39-5.61 0-2.475.983-4.849 2.733-6.6M10.666 24c0-.736.598-1.333 1.334-1.333h8a1.333 1.333 0 1 1 0 2.666h-8A1.333 1.333 0 0 1 10.666 24M12 29.333c0-.736.597-1.333 1.333-1.333h5.333a1.333 1.333 0 0 1 0 2.667h-5.333A1.333 1.333 0 0 1 12 29.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Tr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Dr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Br, {
              ...n,
              ref: r
            })]
          })
        }));
      Nr.displayName = "Lightbulb", Nr.categories = ["photography"], Nr.tags = ["idea", "bright", "lights"], Nr.MD = Tr, Nr.LG = Dr, Nr.XL = Br;
      const kr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m4.861-2.471c.26-.26.683-.26.943 0L8 7.057 9.528 5.53a.667.667 0 1 1 .943.942L8.943 8l1.528 1.529a.667.667 0 1 1-.943.942L8 8.943 6.47 10.47a.667.667 0 0 1-.943-.942L7.057 8 5.528 6.471a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m7.293-3.707a1 1 0 0 1 1.414 0L12 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414L13.414 12l2.293 2.293a1 1 0 0 1-1.414 1.414L12 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L10.586 12 8.293 9.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Or = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c6.628 0 12-5.373 12-12S22.628 4 16 4M1.334 16C1.334 7.9 7.9 1.333 16 1.333S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16m9.723-4.943c.521-.52 1.365-.52 1.886 0L16 14.114l3.057-3.057a1.333 1.333 0 1 1 1.886 1.886L17.886 16l3.057 3.057a1.333 1.333 0 1 1-1.886 1.886L16 17.886l-3.057 3.057a1.333 1.333 0 1 1-1.886-1.886L14.114 16l-3.057-3.057a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(kr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Vr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Or, {
              ...n,
              ref: r
            })]
          })
        }));
      Gr.displayName = "CircleX", Gr.categories = ["math", "development"], Gr.tags = ["cancel", "close", "delete", "remove", "times", "clear", "error", "incorrect", "wrong", "mistake", "failure", "linter", "multiply", "multiplication", "clean", "erase", "deprecate", "delete", "navigation"], Gr.MD = kr, Gr.LG = Vr, Gr.XL = Or;
      const Fr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.667 8c0-.368.298-.667.666-.667h9.334a.667.667 0 1 1 0 1.334H3.332A.667.667 0 0 1 2.666 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4 12a1 1 0 0 1 1-1h14a1 1 0 1 1 0 2H5a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.334 16c0-.736.596-1.333 1.333-1.333h18.667a1.333 1.333 0 1 1 0 2.666H6.666A1.333 1.333 0 0 1 5.334 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ur = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Fr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Xr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(qr, {
              ...n,
              ref: r
            })]
          })
        }));
      Ur.displayName = "Minus", Ur.categories = ["math", "development", "text", "tools"], Ur.tags = ["subtract", "remove", "decrease", "decrement", "reduce", "negative", "calculate", "line", "divider", "separator", "horizontal rule", "hr", "html", "markup", "markdown", "---", "toolbar", "operator", "code", "coding", "minimum", "downgrade", "less", "delete", "navigation", "minimize"], Ur.MD = Fr, Ur.LG = Xr, Ur.XL = qr;
      const Kr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m4 0c0-.368.298-.667.666-.667h5.333a.667.667 0 1 1 0 1.334H5.333A.667.667 0 0 1 4.666 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m6 0a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $r = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c6.628 0 12-5.373 12-12S22.628 4 16 4M1.334 16C1.334 7.9 7.9 1.333 16 1.333S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16m8 0c0-.736.596-1.333 1.333-1.333h10.667a1.333 1.333 0 1 1 0 2.666H10.667A1.333 1.333 0 0 1 9.334 16",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yr = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Kr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Wr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)($r, {
              ...n,
              ref: r
            })]
          })
        }));
      Yr.displayName = "CircleMinus", Yr.categories = ["math"], Yr.tags = ["subtract", "remove", "decrease", "reduce", "calculate", "line", "operator", "code", "coding", "minimum", "downgrade", "minus", "no", "less", "n/a", "delete"], Yr.MD = Kr, Yr.LG = Wr, Yr.XL = $r;
      const Zr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m9.804-1.805c.26.26.26.683 0 .943L7.805 9.805a.667.667 0 0 1-.943 0L5.528 8.47a.667.667 0 1 1 .943-.942l.862.862 2.195-2.196c.26-.26.683-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m14.707-2.707a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jr = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16s5.373 12 12 12c6.628 0 12-5.373 12-12S22.628 4 16 4M1.334 16C1.334 7.9 7.9 1.333 16 1.333S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16m19.609-3.61c.52.521.52 1.365 0 1.886L15.61 19.61c-.521.521-1.365.521-1.886 0l-2.667-2.666a1.333 1.333 0 1 1 1.886-1.886l1.724 1.724 4.39-4.39c.521-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        el = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Zr, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Qr, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Jr, {
              ...n,
              ref: r
            })]
          })
        }));
      el.displayName = "CircleCheck", el.categories = ["notifications"], el.tags = ["done", "todo", "tick", "complete", "task", "ready", "yes", "available", "circle", "approve", "success"], el.MD = Zr, el.LG = Qr, el.XL = Jr;
      const tl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.987 1.596a2 2 0 0 1 2.746.742l5.331 9.329.001.001a2 2 0 0 1-1.73 2.999H2.668a2 2 0 0 1-1.747-3l5.331-9.33h.001a2 2 0 0 1 .733-.741m1.006 1.061a.67.67 0 0 0-.58.338v.002l-5.334 9.334-.002.002a.667.667 0 0 0 .584 1h10.672a.67.67 0 0 0 .666-.667.67.67 0 0 0-.09-.333l-.001-.002-5.335-9.336a.67.67 0 0 0-.58-.338M8 5.333c.368 0 .667.299.667.667v2.667a.667.667 0 1 1-1.334 0V6c0-.368.299-.667.667-.667m-.667 6c0-.368.299-.666.667-.666h.007a.667.667 0 1 1 0 1.333H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.48 2.394a3 3 0 0 1 4.119 1.111v.002L22.597 17.5v.002A3 3 0 0 1 20.002 22H4.004a3 3 0 0 1-2.62-4.5L9.38 3.507v-.002a3 3 0 0 1 1.1-1.111m1.51 1.592a1 1 0 0 0-.87.507l-.002.003L3.116 18.5A1 1 0 0 0 3.99 20h16.008a1 1 0 0 0 .865-1.5l-.002-.004-8-14-.002-.003a1 1 0 0 0-.87-.507M12 8a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0V9a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ll = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.973 3.192a4 4 0 0 1 5.493 1.482v.002l10.662 18.657.002.003a4 4 0 0 1-3.462 5.997H5.34a4 4 0 0 1-3.495-5.997l.002-.003 10.66-18.657.002-.002a4 4 0 0 1 1.465-1.482m2.014 2.123a1.33 1.33 0 0 0-1.16.676l-.002.004L4.158 24.662l-.003.005a1.333 1.333 0 0 0 1.167 2h21.344a1.333 1.333 0 0 0 1.153-2l-.003-.005L17.146 5.99a1.33 1.33 0 0 0-1.16-.676M16 10.667c.737 0 1.334.597 1.334 1.333v5.333a1.333 1.333 0 0 1-2.667 0V12c0-.736.597-1.333 1.333-1.333m-1.333 12c0-.737.597-1.334 1.333-1.334h.014a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nl = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(tl, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(rl, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ll, {
              ...n,
              ref: r
            })]
          })
        }));
      nl.displayName = "TriangleAlert", nl.categories = ["notifications", "shapes", "development"], nl.tags = ["warning", "alert", "danger", "exclamation mark", "linter", "caution", "attention", "error", "triangle"], nl.MD = tl, nl.LG = rl, nl.XL = ll;
      const al = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.529 3.529c.26-.26.682-.26.943 0L8 7.057 11.53 3.53a.667.667 0 1 1 .943.942L8.943 8l3.529 3.528a.667.667 0 0 1-.943.943L8 8.943 4.472 12.47a.667.667 0 1 1-.943-.943L7.057 8 3.53 4.47a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ol = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        il = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.057 7.057c.52-.52 1.365-.52 1.886 0L16 14.114l7.057-7.057a1.333 1.333 0 1 1 1.886 1.886L17.885 16l7.058 7.057a1.333 1.333 0 1 1-1.886 1.886L16 17.886l-7.057 7.057a1.333 1.333 0 0 1-1.886-1.886L14.114 16 7.057 8.943a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sl = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(al, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ol, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(il, {
              ...n,
              ref: r
            })]
          })
        }));
      sl.displayName = "X", sl.categories = ["notifications", "math"], sl.tags = ["cancel", "close", "delete", "remove", "times", "clear", "math", "multiply", "multiplication", "error", "remove", "clean", "erase", "navigation", "cross", "times"], sl.MD = al, sl.LG = ol, sl.XL = il;
      const cl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.805 3.529c.26.26.26.682 0 .942L6.47 11.805a.667.667 0 0 1-.942 0L2.195 8.47a.667.667 0 1 1 .943-.942L6 10.39l6.862-6.861c.26-.26.682-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M20.707 5.293a1 1 0 0 1 0 1.414l-11 11a1 1 0 0 1-1.414 0l-5-5a1 1 0 1 1 1.414-1.414L9 15.586 19.293 5.293a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ul = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M27.61 7.057c.52.521.52 1.365 0 1.886L12.943 23.61c-.52.52-1.365.52-1.886 0l-6.666-6.667a1.333 1.333 0 0 1 1.885-1.886L12 20.781 25.724 7.057c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hl = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(cl, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(dl, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ul, {
              ...n,
              ref: r
            })]
          })
        }));
      hl.displayName = "Check", hl.categories = ["notifications"], hl.tags = ["done", "todo", "tick", "complete", "task", "ready", "yes", "available", "success", "accept"], hl.MD = cl, hl.LG = dl, hl.XL = ul;
      const fl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.936 2.603A4.33 4.33 0 0 1 5 1.333c.653 0 1.249.094 1.831.348.409.178.79.425 1.169.745.378-.32.76-.567 1.169-.745.582-.254 1.177-.348 1.83-.348a4.334 4.334 0 0 1 4.334 4.334c0 1.043-.393 1.927-.914 2.675a1 1 0 0 1-.06.084c-.379.527-.82.985-1.223 1.381L8.47 14.472a.667.667 0 0 1-.943 0L2.866 9.809c-.41-.396-.85-.853-1.23-1.38a1 1 0 0 1-.065-.092c-.518-.746-.904-1.628-.904-2.67 0-1.15.456-2.252 1.269-3.064m1.67 6.064.19.187.009.008L8 13.057l4.2-4.2.192-.19h-2.059a.67.67 0 0 1-.613-.404l-.261-.61-.818 2.864a.667.667 0 0 1-1.25.087l-.873-1.963a.7.7 0 0 1-.185.026zM5.92 7.334H2.508C2.193 6.819 2 6.272 2 5.667a3 3 0 0 1 3-3c.52 0 .924.073 1.299.236.378.165.767.44 1.23.902.26.26.682.26.942 0 .462-.462.851-.737 1.23-.902.374-.163.779-.236 1.299-.236a3 3 0 0 1 3 3c0 .603-.196 1.15-.513 1.667h-2.714l-.827-1.93a.667.667 0 0 0-1.254.08l-.829 2.9-.587-1.321a.667.667 0 0 0-1.206-.028z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.904 3.904A6.5 6.5 0 0 1 7.5 2c.98 0 1.873.14 2.747.52.613.268 1.185.64 1.753 1.12.568-.48 1.14-.852 1.753-1.12C14.627 2.14 15.52 2 16.5 2A6.5 6.5 0 0 1 23 8.5c0 1.564-.59 2.891-1.371 4.013a1 1 0 0 1-.09.126c-.569.79-1.229 1.477-1.836 2.072l-6.996 6.996a1 1 0 0 1-1.414 0l-6.994-6.994c-.614-.593-1.275-1.279-1.844-2.069a1 1 0 0 1-.098-.139C1.58 11.387 1 10.063 1 8.5a6.5 6.5 0 0 1 1.904-4.596M5.409 13q.142.141.286.281l.012.012L12 19.586l6.3-6.3q.146-.142.287-.286H15.5a1 1 0 0 1-.92-.606l-.391-.915-1.228 4.296a1 1 0 0 1-1.875.131l-1.309-2.945A1 1 0 0 1 9.5 13zm3.473-2h-5.12C3.29 10.228 3 9.407 3 8.5A4.5 4.5 0 0 1 7.5 4c.78 0 1.387.11 1.948.354.568.248 1.152.66 1.845 1.353a1 1 0 0 0 1.414 0c.693-.693 1.277-1.105 1.845-1.353C15.113 4.11 15.72 4 16.5 4A4.5 4.5 0 0 1 21 8.5c0 .905-.294 1.726-.77 2.5h-4.07l-1.24-2.894a1 1 0 0 0-1.881.12l-1.244 4.35-.881-1.982a1 1 0 0 0-1.808-.041z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.872 5.205A8.67 8.67 0 0 1 10 2.667c1.307 0 2.498.186 3.663.694.817.356 1.58.851 2.337 1.491.757-.64 1.52-1.135 2.338-1.491 1.165-.508 2.355-.695 3.662-.695a8.667 8.667 0 0 1 8.667 8.667c0 2.086-.786 3.855-1.829 5.35q-.053.09-.119.169c-.759 1.054-1.639 1.97-2.448 2.762l-9.328 9.329c-.52.52-1.365.52-1.886 0l-9.325-9.326c-.818-.79-1.7-1.705-2.459-2.759a1.3 1.3 0 0 1-.13-.184c-1.036-1.492-1.81-3.257-1.81-5.34 0-2.3.914-4.504 2.539-6.13m3.34 12.128q.188.187.382.375l.016.016 8.39 8.39 8.4-8.4q.195-.19.383-.38h-4.116a1.33 1.33 0 0 1-1.226-.809l-.522-1.22-1.637 5.728a1.333 1.333 0 0 1-2.5.175l-1.746-3.927a1.3 1.3 0 0 1-.37.052zm4.63-2.666H5.017C4.386 13.637 4 12.542 4 11.333a6 6 0 0 1 6-6c1.04 0 1.85.147 2.598.473.757.33 1.535.88 2.46 1.803.52.521 1.364.521 1.885 0 .924-.924 1.702-1.474 2.46-1.803.748-.326 1.557-.473 2.597-.473a6 6 0 0 1 6 6c0 1.207-.391 2.3-1.026 3.333h-5.428l-1.654-3.858a1.334 1.334 0 0 0-2.507.159l-1.658 5.802-1.175-2.644a1.333 1.333 0 0 0-2.411-.055z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gl = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(fl, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(vl, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(pl, {
              ...n,
              ref: r
            })]
          })
        }));
      gl.displayName = "HeartPulse", gl.categories = ["medical"], gl.tags = ["heartbeat", "pulse", "health", "medical", "blood pressure", "cardiac", "systole", "diastole"], gl.MD = fl, gl.LG = vl, gl.XL = pl;
      const wl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a.67.67 0 0 0-.4.133l-5.333 4a.7.7 0 0 0-.188.218L7.667 9.9l.002.002a.63.63 0 0 0 .662 0l.002-.001 5.586-3.55a.7.7 0 0 0-.188-.22l-.001-.001L8.4 2.133A.67.67 0 0 0 8 2m6 5.88-4.96 3.152a1.96 1.96 0 0 1-2.08 0l-.004-.003L2 7.88v5.453a.667.667 0 0 0 .667.667h10.666a.667.667 0 0 0 .667-.667zM6.8 1.067a2 2 0 0 1 2.4 0l5.337 4.002c.495.377.796.964.796 1.598v6.666a2 2 0 0 1-2 2H2.667a2 2 0 0 1-2-2V6.667a2 2 0 0 1 .8-1.6z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ml = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a1 1 0 0 0-.6.2l-8 6a1 1 0 0 0-.28.326l8.383 5.328a.94.94 0 0 0 .994 0l.002-.001 8.38-5.326a1 1 0 0 0-.282-.33h-.002L12.6 3.2A1 1 0 0 0 12 3m9 8.82-7.44 4.727a2.94 2.94 0 0 1-3.12 0l-.006-.003L3 11.82V20a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1zM10.2 1.6a3 3 0 0 1 3.6 0l8.005 6.004A3.01 3.01 0 0 1 23 10v10a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V10a3 3 0 0 1 1.2-2.4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4c-.288 0-.569.094-.8.267l-10.666 8a1.3 1.3 0 0 0-.375.435l11.176 7.102.003.001a1.25 1.25 0 0 0 1.325 0q0 0 .003-.002l11.173-7.1a1.4 1.4 0 0 0-.376-.44l-.003-.001L16.8 4.267A1.33 1.33 0 0 0 16 4m12 11.76-9.919 6.303a3.92 3.92 0 0 1-4.162 0l-.007-.004L4 15.76v10.907A1.333 1.333 0 0 0 5.334 28h21.333A1.333 1.333 0 0 0 28 26.667zM13.6 2.133a4 4 0 0 1 4.8 0l10.674 8.006a4.02 4.02 0 0 1 1.593 3.194v13.334a4 4 0 0 1-4 4H5.334a4 4 0 0 1-4-4V13.333a4 4 0 0 1 1.6-3.2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bl = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(wl, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ml, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(xl, {
              ...n,
              ref: r
            })]
          })
        }));
      bl.displayName = "EnvelopeOpen", bl.categories = ["mail"], bl.tags = ["email", "message", "letter", "read"], bl.MD = wl, bl.LG = ml, bl.XL = xl;
      const jl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.222 2.221c-.157.157-.222.33-.222.446v.666h4v-.666c0-.117-.065-.29-.221-.446C9.622 2.065 9.45 2 9.334 2H6.667c-.117 0-.289.065-.445.221m5.112 1.112v-.666c0-.55-.269-1.045-.612-1.388-.344-.344-.838-.612-1.388-.612H6.667c-.55 0-1.045.268-1.388.612-.344.343-.612.838-.612 1.388v.666H2a.667.667 0 0 0 0 1.334h.667v8.666c0 .55.268 1.045.612 1.388.343.344.838.612 1.388.612h6.667c.55 0 1.044-.268 1.388-.612s.612-.838.612-1.388V4.667H14a.667.667 0 0 0 0-1.334zM4 4.667v8.666c0 .117.065.29.222.446.156.156.328.221.445.221h6.667c.116 0 .288-.065.445-.221.156-.157.221-.33.221-.446V4.667zm2.667 2c.368 0 .667.298.667.666v4a.667.667 0 0 1-1.334 0v-4c0-.368.299-.666.667-.666m2.667 0c.368 0 .666.298.666.666v4a.667.667 0 0 1-1.333 0v-4c0-.368.298-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.332 3.332C9.097 3.567 9 3.825 9 4v1h6V4c0-.175-.098-.433-.332-.668S14.175 3 14 3h-4c-.175 0-.433.097-.668.332M17 5V4c0-.825-.402-1.567-.918-2.082C15.567 1.403 14.825 1 14 1h-4c-.825 0-1.567.403-2.082.918S7 3.175 7 4v1H3a1 1 0 0 0 0 2h1v13c0 .825.403 1.567.918 2.082S6.175 23 7 23h10c.825 0 1.567-.402 2.082-.918.515-.515.918-1.257.918-2.082V7h1a1 1 0 1 0 0-2zM6 7v13c0 .175.097.433.332.668S6.825 21 7 21h10c.175 0 .433-.098.668-.332S18 20.175 18 20V7zm4 3a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1m4 0a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-6a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12.443 4.443c-.313.313-.443.657-.443.89v1.334h8V5.333c0-.233-.13-.577-.443-.89S18.9 4 18.667 4h-5.334c-.233 0-.578.13-.89.443m10.224 2.224V5.333c0-1.1-.537-2.089-1.224-2.776s-1.676-1.224-2.777-1.224h-5.333c-1.1 0-2.089.537-2.776 1.224S9.333 4.233 9.333 5.333v1.334H4a1.333 1.333 0 1 0 0 2.666h1.333v17.334c0 1.1.537 2.089 1.224 2.776s1.676 1.224 2.776 1.224h13.333c1.1 0 2.09-.537 2.777-1.224s1.223-1.676 1.223-2.776V9.333H28a1.333 1.333 0 1 0 0-2.666zM8 9.333v17.334c0 .233.13.577.443.89s.657.443.89.443h13.333c.233 0 .578-.13.891-.443s.443-.657.443-.89V9.333zm5.333 4c.737 0 1.333.597 1.333 1.334v8a1.333 1.333 0 1 1-2.666 0v-8c0-.737.597-1.334 1.333-1.334m5.333 0c.737 0 1.334.597 1.334 1.334v8a1.333 1.333 0 1 1-2.667 0v-8c0-.737.597-1.334 1.334-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ml = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(jl, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(yl, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Rl, {
              ...n,
              ref: r
            })]
          })
        }));
      Ml.displayName = "Trash", Ml.categories = ["files", "mail"], Ml.tags = ["garbage", "delete", "remove", "bin", "trashcan", "bin", "waste bin", "erase"], Ml.MD = jl, Ml.LG = yl, Ml.XL = Rl;
      const Ll = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.228 3.143c-.335-.324-.636-.45-1.064-.443a1.45 1.45 0 0 0-.707.222c-.166.099-.272.196-.29.213L4.399 8.078c-.027.03-.7.772-.7 1.8 0 .43.061.72.166.956.105.239.279.474.58.767.303.293.56.468.814.57.25.101.54.148.932.122a2.73 2.73 0 0 0 1.64-.678l.003-.005 2.248-2.268a.7.7 0 1 1 .994.985L8.83 12.594c-.084.087-1 .99-2.544 1.096-.561.037-1.068-.026-1.548-.22-.476-.19-.882-.49-1.267-.864-.377-.365-.683-.745-.887-1.205-.205-.463-.284-.958-.284-1.523 0-1.633 1.056-2.735 1.087-2.768l.002-.002 4.78-4.955.008-.008c.036-.036.827-.827 1.965-.845.835-.013 1.486.282 2.06.838.276.268.489.55.624.894.132.337.17.681.177 1.035.021 1.15-.745 1.964-.778 1.998l-.007.007-4.783 4.958-.055.053c-.037.031-.17.14-.358.246-.178.1-.47.236-.815.245a1.7 1.7 0 0 1-.72-.11 1.7 1.7 0 0 1-.545-.374 1.7 1.7 0 0 1-.406-.566 1.8 1.8 0 0 1-.137-.673 1.8 1.8 0 0 1 .49-1.27l4.435-4.566a.7.7 0 0 1 1.004.975L5.894 9.555a.42.42 0 0 0-.096.263.4.4 0 0 0 .023.15.4.4 0 0 0 .088.11c.07.065.098.085.106.089.01.002.05.01.154.008q.002.002.053-.013a1 1 0 0 0 .112-.052c.054-.03.097-.062.12-.08l4.75-4.923c.014-.015.107-.123.201-.293.112-.203.203-.454.198-.72-.005-.278-.035-.434-.08-.55-.043-.108-.118-.23-.295-.4m-5.216 7.023h.003zm.003 0 .002.002zm-.127-.605h.001",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16.773 4.708C16.24 4.194 15.755 3.99 15.07 4c-.423.007-.82.167-1.136.356a3 3 0 0 0-.461.34l-7.37 7.64-.002.002C6.064 12.38 5 13.55 5 15.175c0 .674.094 1.133.262 1.51.169.383.444.755.916 1.212.471.457.877.736 1.284.899.4.16.86.234 1.476.192 1.625-.11 2.584-1.07 2.584-1.07l.002-.003.005-.005.003-.003 3.471-3.503a1 1 0 0 1 1.42 1.407l-3.47 3.503.005-.004-.006.006c-.123.126-1.521 1.508-3.879 1.668-.857.058-1.628-.04-2.357-.332-.722-.29-1.341-.748-1.93-1.32-.579-.56-1.044-1.138-1.353-1.836C3.122 16.793 3 16.04 3 15.175 3 12.683 4.613 11 4.658 10.953l.003-.002.001-.002h.001l7.38-7.65.002-.003.002-.002.005-.005.007-.007c.047-.047 1.251-1.255 2.98-1.281 1.268-.02 2.252.426 3.125 1.27.422.41.742.837.946 1.354.199.508.257 1.029.267 1.572.033 1.745-1.136 2.984-1.18 3.03l-.005.005-.005.005-.003.003-7.39 7.66a1 1 0 0 1-.074.071c-.05.042-.248.208-.534.37-.27.153-.713.36-1.231.374-.363.01-.723-.02-1.08-.165-.352-.143-.61-.364-.817-.561a2.6 2.6 0 0 1-.609-.848 2.7 2.7 0 0 1-.205-1.01 2.72 2.72 0 0 1 .735-1.904l6.854-7.056a1 1 0 0 1 1.434 1.393l-6.855 7.057c-.005.007-.041.049-.079.118a.7.7 0 0 0-.09.345.7.7 0 0 0 .041.262.6.6 0 0 0 .155.196c.147.14.187.155.19.155.001.001.014.006.05.011.042.006.11.01.22.007a.4.4 0 0 0 .11-.025q.089-.03.19-.088c.088-.05.159-.102.194-.13l7.346-7.614c.021-.024.17-.196.321-.467.178-.321.326-.725.318-1.157-.009-.434-.055-.686-.13-.877-.071-.181-.196-.378-.475-.649",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        El = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M22.1 6.567c-.696-.662-1.325-.919-2.215-.905-.543.008-1.056.209-1.472.452a3.7 3.7 0 0 0-.605.436L7.874 16.651l-.002.002c-.055.06-1.455 1.577-1.455 3.677 0 .88.125 1.472.343 1.954.22.488.581.969 1.211 1.568.629.598 1.165.957 1.695 1.166.521.205 1.125.301 1.942.247 2.145-.143 3.414-1.386 3.414-1.386l.008-.008 4.684-4.637a1.48 1.48 0 0 1 2.062-.01c.572.557.577 1.462.01 2.024l-4.68 4.633c-.176.177-2.085 2.025-5.3 2.238-1.17.078-2.226-.052-3.227-.447-.99-.39-1.838-1.004-2.639-1.766-.785-.747-1.422-1.522-1.847-2.463-.427-.947-.593-1.957-.593-3.113 0-3.337 2.2-5.589 2.266-5.657l.004-.004 9.96-10.126.016-.017c.074-.072 1.723-1.689 4.094-1.725 1.74-.027 3.095.576 4.29 1.71.577.549 1.02 1.126 1.3 1.83.276.687.355 1.39.37 2.115.044 2.348-1.553 4.012-1.62 4.082l-.015.015L14.2 22.685a2 2 0 0 1-.116.107 5 5 0 0 1-.746.504c-.37.205-.98.481-1.697.5-.496.014-1-.026-1.5-.225-.495-.197-.854-.5-1.136-.764a3.5 3.5 0 0 1-.846-1.156 3.6 3.6 0 0 1-.286-1.376c-.037-1.513.903-2.478 1.022-2.596l9.24-9.33a1.48 1.48 0 0 1 2.063-.03c.577.55.59 1.456.03 2.023l-9.24 9.329a1 1 0 0 0-.093.137.8.8 0 0 0-.106.399c.005.2.033.277.047.307.012.027.046.095.183.223.145.136.206.175.22.184.02.005.105.021.322.016 0 0 .04-.003.111-.027q.107-.037.234-.106c.112-.062.202-.126.25-.162l9.895-10.061c.03-.032.224-.253.42-.6.233-.414.422-.927.412-1.471-.011-.568-.072-.887-.167-1.123-.089-.222-.247-.47-.615-.82M11.236 20.92l.005.002zm.005.002.004.002zm-.264-1.238.002-.002z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Al = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ll, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Cl, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(El, {
              ...n,
              ref: r
            })]
          })
        }));
      Al.displayName = "Paperclip", Al.categories = ["text", "design", "files", "mail"], Al.tags = ["attachment", "file", "attach", "clip", "document", "paper"], Al.MD = Ll, Al.LG = Cl, Al.XL = El;
      const Pl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8M8 3.333c.368 0 .666.299.666.667v.667h2a.667.667 0 1 1 0 1.333h-2v1.333h.667a2 2 0 0 1 0 4h-.667V12a.667.667 0 1 1-1.333 0v-.667h-2a.667.667 0 0 1 0-1.333h2V8.666h-.667a2 2 0 1 1 0-4h.667V4c0-.368.299-.667.667-.667M7.333 6h-.667a.667.667 0 0 0 0 1.333h.667zm1.333 2.666V10h.667a.667.667 0 0 0 0-1.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Il = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-7a1 1 0 0 1 1 1v1h3a1 1 0 1 1 0 2h-3v2h1a3 3 0 0 1 0 6h-1v1a1 1 0 1 1-2 0v-1H8a1 1 0 1 1 0-2h3v-2h-1a3 3 0 0 1 0-6h1V6a1 1 0 0 1 1-1m-1 4h-1a1 1 0 0 0 0 2h1zm2 4v2h1a1 1 0 0 0 0-2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12M1.334 16C1.334 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.334 24.1 1.334 16M16 6.667c.736 0 1.334.597 1.334 1.333v1.334h4a1.333 1.333 0 1 1 0 2.666h-4v2.667h1.333a4 4 0 0 1 0 8h-1.334V24a1.333 1.333 0 0 1-2.666 0v-1.333h-4a1.333 1.333 0 1 1 0-2.667h4v-2.666h-1.333a4 4 0 1 1 0-8h1.333V8c0-.736.597-1.333 1.333-1.333M14.667 12h-1.333a1.333 1.333 0 1 0 0 2.667h1.333zm2.667 5.334V20h1.333a1.333 1.333 0 1 0 0-2.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _l = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Pl, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Il, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Sl, {
              ...n,
              ref: r
            })]
          })
        }));
      _l.displayName = "CircleDollarSign", _l.categories = ["finance"], _l.tags = ["monetization", "marketing", "currency", "money", "payment"], _l.MD = Pl, _l.LG = Il, _l.XL = Sl;
      const zl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 .667c.368 0 .667.298.667.666v1.334h2.667a.667.667 0 1 1 0 1.333H8.667v3.333h1a3 3 0 0 1 0 6h-1v1.333a.667.667 0 1 1-1.333 0v-1.333H4A.667.667 0 0 1 4 12h3.334V8.666h-1a3 3 0 1 1 0-6h1V1.334c0-.368.298-.666.666-.666M7.333 4h-1a1.667 1.667 0 1 0 0 3.333h1zm1.334 4.666V12h1a1.667 1.667 0 1 0 0-3.334z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 1a1 1 0 0 1 1 1v2h4a1 1 0 1 1 0 2h-4v5h1.5a4.5 4.5 0 1 1 0 9H13v2a1 1 0 1 1-2 0v-2H6a1 1 0 1 1 0-2h5v-5H9.5a4.5 4.5 0 1 1 0-9H11V2a1 1 0 0 1 1-1m-1 5H9.5a2.5 2.5 0 1 0 0 5H11zm2 7v5h1.5a2.5 2.5 0 0 0 0-5z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 1.334c.736 0 1.333.596 1.333 1.333v2.667h5.334a1.333 1.333 0 1 1 0 2.666h-5.334v6.667h2a6 6 0 0 1 0 12h-2v2.666a1.333 1.333 0 0 1-2.666 0v-2.666H8A1.333 1.333 0 1 1 8 24h6.666v-6.666h-2a6 6 0 1 1 0-12h2V2.667c0-.737.598-1.333 1.334-1.333M14.666 8h-2a3.333 3.333 0 1 0 0 6.667h2zm2.667 9.334V24h2a3.333 3.333 0 0 0 0-6.666z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Dl = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(zl, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Hl, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Tl, {
              ...n,
              ref: r
            })]
          })
        }));
      Dl.displayName = "DollarSign", Dl.categories = ["finance"], Dl.tags = ["currency", "money", "payment"], Dl.MD = zl, Dl.LG = Hl, Dl.XL = Tl;
      const Bl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.936 2.603A4.33 4.33 0 0 1 5 1.333c.654 0 1.249.094 1.831.347.409.178.79.426 1.17.746.378-.32.76-.568 1.168-.746.582-.253 1.178-.347 1.831-.347a4.333 4.333 0 0 1 4.333 4.334c0 1.828-1.206 3.168-2.197 4.14L8.47 14.471a.667.667 0 0 1-.942 0L2.866 9.81c-1.003-.97-2.2-2.31-2.2-4.142 0-1.15.457-2.252 1.27-3.064M5 2.667a3 3 0 0 0-3 3c0 1.23.8 2.224 1.797 3.187l.008.008L8 13.057l4.2-4.2c.995-.975 1.8-1.966 1.8-3.19a3 3 0 0 0-3-3c-.52 0-.925.073-1.299.236-.378.165-.768.44-1.23.902a.667.667 0 0 1-.942 0c-.462-.462-.852-.737-1.23-.902C5.925 2.74 5.52 2.667 5 2.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.904 3.904A6.5 6.5 0 0 1 7.5 2c.98 0 1.873.14 2.747.52.613.268 1.185.64 1.753 1.12.568-.48 1.14-.852 1.753-1.12C14.627 2.14 15.52 2 16.5 2A6.5 6.5 0 0 1 23 8.5c0 2.742-1.81 4.753-3.297 6.21l-6.996 6.997a1 1 0 0 1-1.414 0l-6.994-6.994C2.794 13.258 1 11.25 1 8.5a6.5 6.5 0 0 1 1.904-4.596M7.5 4A4.5 4.5 0 0 0 3 8.5c0 1.847 1.2 3.336 2.695 4.781l.012.012L12 19.586l6.3-6.3c1.492-1.463 2.7-2.95 2.7-4.786A4.5 4.5 0 0 0 16.5 4c-.78 0-1.387.11-1.948.354-.568.248-1.152.66-1.845 1.353a1 1 0 0 1-1.414 0c-.693-.693-1.277-1.105-1.845-1.353C8.887 4.11 8.28 4 7.5 4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.872 5.205A8.67 8.67 0 0 1 10 2.667c1.307 0 2.498.187 3.662.694.817.356 1.58.852 2.338 1.491.757-.64 1.52-1.135 2.337-1.491 1.165-.507 2.356-.694 3.663-.694a8.667 8.667 0 0 1 8.667 8.666c0 3.656-2.413 6.338-4.396 8.281l-9.328 9.329c-.521.52-1.365.52-1.886 0l-9.325-9.326C3.726 17.677 1.333 15 1.333 11.333c0-2.298.913-4.503 2.539-6.128M10 5.333a6 6 0 0 0-6 6c0 2.463 1.6 4.449 3.593 6.375l.016.016 8.39 8.39 8.401-8.4c1.99-1.95 3.6-3.933 3.6-6.38a6 6 0 0 0-6-6c-1.04 0-1.85.146-2.598.472-.757.33-1.535.88-2.46 1.803-.52.521-1.364.521-1.885 0-.924-.924-1.702-1.473-2.46-1.803-.748-.326-1.557-.473-2.597-.473",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vl = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Bl, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Nl, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(kl, {
              ...n,
              ref: r
            })]
          })
        }));
      Vl.displayName = "Heart", Vl.categories = ["medical", "social", "multimedia", "emoji", "gaming", "shapes"], Vl.tags = ["like", "love", "emotion", "suit", "playing", "cards"], Vl.MD = Bl, Vl.LG = Nl, Vl.XL = kl;
      const Ol = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l5.332 5.332.002.002L9.723 8.78a.7.7 0 0 1 .151.151l5.264 5.264a.667.667 0 0 1-.943.943L9.327 10.27l-3.634 3.638a2 2 0 0 1-.83.5H4.86l-2.905.882-.003.001A1 1 0 0 1 .71 14.043l.882-2.907c.095-.314.267-.6.5-.833l3.633-3.636L.862 1.805a.667.667 0 0 1 0-.943M6.667 7.61l-3.633 3.636a.7.7 0 0 0-.167.277l-.7 2.31 2.305-.7c.104-.032.2-.09.276-.166l3.637-3.64zM12.787 2a1.2 1.2 0 0 0-.857.355l-.984.981 1.716 1.716.982-.982A1.212 1.212 0 0 0 12.788 2m.413 4.4 1.387-1.387a2.547 2.547 0 0 0-3.6-3.601L9.582 2.815a.7.7 0 0 0-.098.097L8.082 4.31a.667.667 0 1 0 .941.944l.979-.975 1.717 1.717-.976.977a.667.667 0 0 0 .942.943l1.382-1.382A.7.7 0 0 0 13.2 6.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0L14.585 13.17a1 1 0 0 1 .226.226l7.896 7.896a1 1 0 0 1-1.414 1.414l-7.302-7.302-5.452 5.457a3 3 0 0 1-1.245.75h-.002l-4.358 1.324H2.93a1.5 1.5 0 0 1-1.866-1.871l1.322-4.36c.143-.472.401-.902.75-1.25L8.586 10 1.293 2.707a1 1 0 0 1 0-1.414M10 11.415l-5.45 5.454c-.116.116-.202.26-.25.417L3.25 20.75l3.458-1.05h.001a1 1 0 0 0 .414-.25l5.454-5.459zM19.181 3a1.82 1.82 0 0 0-1.286.533L16.42 5.005l2.574 2.574 1.474-1.474A1.818 1.818 0 0 0 19.18 3m.619 6.6 2.081-2.08a3.819 3.819 0 0 0-5.4-5.402l-2.11 2.104a1 1 0 0 0-.147.147l-2.101 2.095a1 1 0 1 0 1.412 1.416l1.468-1.463 2.576 2.576-1.465 1.465a1 1 0 0 0 1.414 1.414L19.6 9.8a1 1 0 0 0 .2-.2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0l10.665 10.665v.001q.002.001.003.002l5.169 5.17a1.4 1.4 0 0 1 .301.3l10.528 10.529a1.333 1.333 0 1 1-1.885 1.885l-9.736-9.735-7.27 7.275a4 4 0 0 1-1.66 1l-.003.001-5.81 1.764-.005.002a2 2 0 0 1-2.488-2.496l1.763-5.815a4 4 0 0 1 1-1.665l7.266-7.273L1.724 3.61a1.333 1.333 0 0 1 0-1.886m11.61 13.496-7.268 7.273c-.155.155-.269.345-.333.555l-1.4 4.619 4.61-1.4h.003c.208-.065.397-.18.551-.334l7.273-7.278zM25.574 4a2.42 2.42 0 0 0-1.714.711l-.001.001-1.967 1.961 3.432 3.432L27.29 8.14a2.426 2.426 0 0 0-.786-3.955 2.4 2.4 0 0 0-.928-.184m.826 8.8 2.775-2.774a5.091 5.091 0 0 0-7.199-7.202l-.001.001L19.16 5.63a1.4 1.4 0 0 0-.195.195L16.164 8.62a1.333 1.333 0 1 0 1.883 1.888l1.957-1.951 3.435 3.435-1.954 1.953a1.333 1.333 0 1 0 1.886 1.886l2.763-2.763a1.3 1.3 0 0 0 .266-.267",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xl = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ol, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Gl, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Fl, {
              ...n,
              ref: r
            })]
          })
        }));
      Xl.displayName = "PencilOff", Xl.categories = ["design", "cursors", "tools", "text"], Xl.tags = ["disabled", "inactive", "non-editable", "locked", "read-only", "unmodifiable", "frozen", "restricted", "rubber", "edit", "create", "draw", "sketch", "draft", "writer", "writing", "stationery", "artist"], Xl.MD = Ol, Xl.LG = Gl, Xl.XL = Fl;
      const ql = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.993 1.416a2.546 2.546 0 1 1 3.6 3.601l-1.387 1.389a.7.7 0 0 1-.132.132l-7.38 7.38v.001a2 2 0 0 1-.831.498l-2.905.88a1 1 0 0 1-1.246-1.244v-.003l.882-2.902v-.002a2 2 0 0 1 .5-.83l7.379-7.38a.7.7 0 0 1 .13-.13zm-.983 2.869L3.037 11.26h-.001a.7.7 0 0 0-.167.277L2.17 13.84l2.305-.698a.7.7 0 0 0 .276-.166L11.725 6zm2.658.772-1.715-1.715.983-.983a1.213 1.213 0 0 1 1.715 1.715z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ul = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16.48 2.118a3.819 3.819 0 0 1 5.401 5.401l-2.082 2.082a1 1 0 0 1-.197.198L8.534 20.868l-.001.001a3 3 0 0 1-1.245.746l-4.356 1.32a1.5 1.5 0 0 1-1.87-1.865l.002-.005 1.321-4.352v-.002a3 3 0 0 1 .75-1.244v-.001L14.202 4.398a1 1 0 0 1 .197-.196zM15.008 6.42 4.549 16.88l-.001.001a1 1 0 0 0-.25.415L3.25 20.749l3.456-1.048a1 1 0 0 0 .414-.248L17.58 8.993zm3.986 1.158-2.572-2.572 1.474-1.475a1.82 1.82 0 0 1 2.572 2.573z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M21.97 2.82a5.091 5.091 0 0 1 7.198 7.202l-2.775 2.776a1.3 1.3 0 0 1-.264.263L11.375 27.82l-.001.001a4 4 0 0 1-1.66.994l-5.807 1.761a2 2 0 0 1-2.492-2.488l.001-.005 1.762-5.802v-.004a4 4 0 0 1 1-1.658v-.002L18.93 5.861a1.4 1.4 0 0 1 .262-.262zm-1.966 5.738L6.062 22.503l-.002.002a1.33 1.33 0 0 0-.333.551v.002L4.33 27.66l4.607-1.397c.209-.063.398-.177.553-.33l13.943-13.946zm5.314 1.543L21.89 6.672l1.965-1.966a2.426 2.426 0 0 1 3.43 3.43z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wl = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ql, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ul, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Kl, {
              ...n,
              ref: r
            })]
          })
        }));
      Wl.displayName = "Pencil", Wl.categories = ["design", "cursors", "tools", "text"], Wl.tags = ["rubber", "edit", "create", "draw", "sketch", "draft", "writer", "writing", "stationery", "artist", "update", "correct", "modify", "note"], Wl.MD = ql, Wl.LG = Ul, Wl.XL = Kl;
      const $l = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2.667c.368 0 .667.298.667.666v4h4a.667.667 0 1 1 0 1.333h-4v4a.667.667 0 1 1-1.334 0v-4h-4a.667.667 0 1 1 0-1.333h4v-4c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 4a1 1 0 0 1 1 1v6h6a1 1 0 1 1 0 2h-6v6a1 1 0 1 1-2 0v-6H5a1 1 0 1 1 0-2h6V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 5.334c.736 0 1.333.596 1.333 1.333v8h8a1.333 1.333 0 0 1 0 2.667h-8v8a1.333 1.333 0 0 1-2.666 0v-8h-8a1.333 1.333 0 0 1 0-2.667h8v-8c0-.737.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ql = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)($l, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Yl, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Zl, {
              ...n,
              ref: r
            })]
          })
        }));
      Ql.displayName = "Plus", Ql.categories = ["math", "tools", "development", "text", "cursors", "gaming"], Ql.tags = ["add", "new", "increase", "increment", "positive", "calculate", "toolbar", "crosshair", "aim", "target", "scope", "sight", "reticule", "maximum", "upgrade", "extra", "+", "more", "create", "navigation"], Ql.MD = $l, Ql.LG = Yl, Ql.XL = Zl;
      const Jl = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a5.333 5.333 0 0 0-5.292 4.667H4a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-.667a2 2 0 0 1-2-2V7.333a6.667 6.667 0 0 1 13.334 0V12a3.334 3.334 0 0 1-3.334 3.333H8A.667.667 0 0 1 8 14h3.333a2 2 0 0 0 1.914-1.42 2 2 0 0 1-.58.086H12a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h1.291A5.336 5.336 0 0 0 8 2m5.333 6H12a.667.667 0 0 0-.667.666v2a.667.667 0 0 0 .667.667h.667a.667.667 0 0 0 .666-.667zM2.667 8v2.666a.667.667 0 0 0 .666.667H4a.667.667 0 0 0 .667-.667v-2A.667.667 0 0 0 4 8z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        en = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a8 8 0 0 0-7.937 7H6a3 3 0 0 1 3 3v3a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-5a10 10 0 0 1 20 0v7a5 5 0 0 1-5 5h-5a1 1 0 1 1 0-2h5a3 3 0 0 0 2.87-2.13c-.279.086-.572.13-.87.13h-1a3 3 0 0 1-3-3v-3a3 3 0 0 1 3-3h1.937A8 8 0 0 0 12 3m8 9h-2a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1zM4 12v4a1 1 0 0 0 1 1h1a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4a10.67 10.67 0 0 0-10.583 9.334H8a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4v-6.667a13.333 13.333 0 0 1 26.666 0V24a6.667 6.667 0 0 1-6.666 6.667H16A1.333 1.333 0 1 1 16 28h6.667a4 4 0 0 0 3.827-2.839 4 4 0 0 1-1.16.172H24a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4h2.583A10.67 10.67 0 0 0 16 4m10.667 12H24a1.333 1.333 0 0 0-1.333 1.334v4A1.333 1.333 0 0 0 24 22.667h1.333a1.333 1.333 0 0 0 1.334-1.334zM5.333 16v5.334a1.333 1.333 0 0 0 1.334 1.333H8a1.333 1.333 0 0 0 1.333-1.334v-4A1.333 1.333 0 0 0 8 16z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Jl, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(en, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(tn, {
              ...n,
              ref: r
            })]
          })
        }));
      rn.displayName = "Headset", rn.categories = ["multimedia", "connectivity", "devices", "files", "gaming"], rn.tags = ["music", "audio", "sound", "gaming", "headphones", "headset", "call", "center", "phone", "telephone", "voip", "video"], rn.MD = Jl, rn.LG = en, rn.XL = tn;
      const ln = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 .667c.368 0 .667.298.667.666V8a.667.667 0 0 1-1.334 0V1.333c0-.368.299-.666.667-.666m3.796 3.261c.26-.26.682-.26.942 0a6.667 6.667 0 1 1-9.459.03.667.667 0 1 1 .949.937 5.333 5.333 0 1 0 7.567-.024.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 1a1 1 0 0 1 1 1v10a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1m5.693 4.893a1 1 0 0 1 1.414 0 10 10 0 1 1-14.189.044 1 1 0 1 1 1.424 1.406 8 8 0 1 0 11.35-.036 1 1 0 0 1 .001-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        an = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 1.334c.736 0 1.333.596 1.333 1.333V16a1.333 1.333 0 0 1-2.666 0V2.667c0-.737.597-1.333 1.333-1.333m7.59 6.523c.521-.52 1.366-.52 1.886 0a13.333 13.333 0 1 1-18.918.06A1.333 1.333 0 1 1 8.456 9.79a10.667 10.667 0 1 0 15.134-.047 1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        on = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ln, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(nn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(an, {
              ...n,
              ref: r
            })]
          })
        }));
      on.displayName = "Power", on.categories = ["connectivity"], on.tags = ["on", "off", "device", "switch", "toggle", "binary", "boolean", "reboot", "restart", "button", "keyboard", "troubleshoot"], on.MD = ln, on.LG = nn, on.XL = an;
      const sn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 4a9.33 9.33 0 0 0-6.222 2.377.667.667 0 1 1-.889-.994 10.667 10.667 0 0 1 14.222 0 .667.667 0 0 1-.889.994A9.33 9.33 0 0 0 8 4m0 3.334a6 6 0 0 0-4.2 1.715.667.667 0 0 1-.933-.952 7.333 7.333 0 0 1 10.266 0 .667.667 0 1 1-.933.952A6 6 0 0 0 8 7.334m0 3.333c-.698 0-1.368.273-1.867.762a.667.667 0 0 1-.933-.952 4 4 0 0 1 5.6 0 .667.667 0 0 1-.933.952A2.67 2.67 0 0 0 8 10.667m-.667 2.666c0-.368.299-.666.667-.666h.007a.667.667 0 1 1 0 1.333H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        cn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 6a14 14 0 0 0-9.333 3.566 1 1 0 0 1-1.334-1.491 16 16 0 0 1 21.334 0 1 1 0 0 1-1.334 1.49A14 14 0 0 0 12 6m0 5a9 9 0 0 0-6.3 2.573 1 1 0 1 1-1.4-1.428 11 11 0 0 1 15.4 0 1 1 0 1 1-1.4 1.428 9 9 0 0 0-6.3-2.572m0 5a4 4 0 0 0-2.8 1.143 1 1 0 1 1-1.4-1.428 6 6 0 0 1 8.4 0 1 1 0 1 1-1.4 1.428A4 4 0 0 0 12 16m-1 4a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        dn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 8a18.67 18.67 0 0 0-12.445 4.754 1.333 1.333 0 1 1-1.777-1.988 21.333 21.333 0 0 1 28.444 0 1.333 1.333 0 0 1-1.778 1.988A18.67 18.67 0 0 0 16 8.001m0 6.667a12 12 0 0 0-8.4 3.43 1.333 1.333 0 1 1-1.867-1.904 14.667 14.667 0 0 1 20.534 0 1.333 1.333 0 0 1-1.867 1.905 12 12 0 0 0-8.4-3.43m0 6.666a5.33 5.33 0 0 0-3.733 1.525 1.333 1.333 0 1 1-1.867-1.905 8 8 0 0 1 11.2 0 1.333 1.333 0 1 1-1.867 1.905A5.33 5.33 0 0 0 16 21.333m-1.333 5.334c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        un = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(sn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(cn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(dn, {
              ...n,
              ref: r
            })]
          })
        }));
      un.displayName = "Wifi", un.categories = ["connectivity", "devices"], un.tags = ["connection", "signal", "wireless", "internet", "technology", "network"], un.MD = sn, un.LG = cn, un.XL = dn;
      const hn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l2.774 2.774.021.021L7.233 6.29l.037.037 7.868 7.868a.667.667 0 0 1-.943.943l-3.58-3.58a.67.67 0 0 1-.748-.13 2.667 2.667 0 0 0-3.734 0 .667.667 0 0 1-.933-.952 4 4 0 0 1 3.212-1.122L6.565 7.507A6 6 0 0 0 3.8 9.05a.667.667 0 1 1-.933-.953 7.3 7.3 0 0 1 2.63-1.656L3.973 4.914a9.3 9.3 0 0 0-2.194 1.463.667.667 0 0 1-.889-.994c.637-.57 1.339-1.06 2.09-1.46L.863 1.804a.667.667 0 0 1 0-.943m6.222 1.844a10.67 10.67 0 0 1 8.027 2.677.667.667 0 0 1-.889.994A9.33 9.33 0 0 0 7.2 4.035a.667.667 0 0 1-.115-1.329m3.667 4.518a.667.667 0 0 1 .91-.244 7.3 7.3 0 0 1 1.472 1.116.667.667 0 1 1-.933.953 6 6 0 0 0-1.204-.914.667.667 0 0 1-.245-.91m-3.418 6.11c0-.369.299-.668.667-.668h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l4.161 4.161.033.032 3.948 3.949q.03.027.057.056l11.801 11.802a1 1 0 0 1-1.414 1.414l-5.371-5.371a1 1 0 0 1-1.122-.193 4 4 0 0 0-5.6 0 1 1 0 0 1-1.4-1.428 6 6 0 0 1 4.817-1.684l-2.77-2.77A9 9 0 0 0 5.7 13.573a1 1 0 0 1-1.4-1.428A11 11 0 0 1 8.246 9.66L5.958 7.372a14 14 0 0 0-3.291 2.193 1 1 0 0 1-1.334-1.49A16 16 0 0 1 4.47 5.884L1.293 2.707a1 1 0 0 1 0-1.414m9.333 2.767a16 16 0 0 1 12.04 4.015 1 1 0 0 1-1.333 1.49 14 14 0 0 0-10.535-3.513 1 1 0 1 1-.172-1.992m5.5 6.777a1 1 0 0 1 1.366-.367 11 11 0 0 1 2.208 1.675 1 1 0 1 1-1.4 1.428 9 9 0 0 0-1.806-1.37 1 1 0 0 1-.367-1.366M11 20a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.885 0l5.548 5.548.044.043 5.264 5.265q.04.037.076.075l15.735 15.736a1.333 1.333 0 1 1-1.886 1.885l-7.161-7.161a1.33 1.33 0 0 1-1.496-.257 5.334 5.334 0 0 0-7.466 0 1.333 1.333 0 1 1-1.867-1.905 8 8 0 0 1 6.423-2.244l-3.693-3.694a12 12 0 0 0-5.53 3.083 1.333 1.333 0 0 1-1.867-1.905c1.504-1.474 3.3-2.6 5.262-3.312L7.943 9.829a18.7 18.7 0 0 0-4.388 2.925 1.333 1.333 0 1 1-1.777-1.988 21.3 21.3 0 0 1 4.181-2.921L1.724 3.61a1.333 1.333 0 0 1 0-1.886m12.444 3.69a21.33 21.33 0 0 1 16.054 5.352 1.333 1.333 0 1 1-1.778 1.988A18.67 18.67 0 0 0 14.397 8.07a1.333 1.333 0 1 1-.229-2.657m7.334 9.035a1.333 1.333 0 0 1 1.821-.49 14.7 14.7 0 0 1 2.944 2.234 1.333 1.333 0 1 1-1.867 1.905 12 12 0 0 0-2.408-1.828 1.333 1.333 0 0 1-.49-1.82m-6.835 12.218c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(hn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(fn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(vn, {
              ...n,
              ref: r
            })]
          })
        }));
      pn.displayName = "WifiOff", pn.categories = ["connectivity", "devices"], pn.tags = ["disabled", "connection", "internet", "wireless", "technology", "network", "signal", "no", "off"], pn.MD = hn, pn.LG = fn, pn.XL = vn;
      const gn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.006.722a.997.997 0 0 1 1.272 1.272l-4.332 12.663a1.002 1.002 0 0 1-1.874.049l-2.12-5.288a.67.67 0 0 0-.37-.37l-5.288-2.12a1 1 0 0 1 .048-1.874zm-1.64 1.97L2.623 6.025 7.077 7.81q.06.024.118.052zM8.137 8.804l5.17-5.168-3.333 9.74L8.19 8.92a2 2 0 0 0-.051-.117",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M21.009 1.083a1.496 1.496 0 0 1 1.908 1.909L16.42 21.986a1.502 1.502 0 0 1-2.243.767 1.5 1.5 0 0 1-.568-.695l-3.18-7.93a1 1 0 0 0-.556-.556l-7.93-3.18a1.5 1.5 0 0 1 .072-2.81zm-2.461 2.955-14.612 5 6.68 2.678q.09.036.176.077zm-6.341 9.168 7.754-7.752-4.998 14.61-2.68-6.683a3 3 0 0 0-.076-.175",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M28.011 1.444a1.995 1.995 0 0 1 2.545 2.545l-8.664 25.325a2 2 0 0 1-1.84 1.352 2 2 0 0 1-1.908-1.255l-4.24-10.574a1.34 1.34 0 0 0-.741-.74l-10.574-4.24a2.001 2.001 0 0 1 .096-3.749zm-3.28 3.94L5.248 12.05l8.906 3.57q.12.049.236.104zM16.276 17.61 26.615 7.272l-6.664 19.48-3.572-8.91v-.001a4 4 0 0 0-.103-.232",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(gn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(wn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(mn, {
              ...n,
              ref: r
            })]
          })
        }));
      xn.displayName = "PaperPlane", xn.categories = ["mail", "communication", "connectivity"], xn.tags = ["email", "message", "mail", "paper airplane", "paper aeroplane", "submit", "send"], xn.MD = gn, xn.LG = wn, xn.XL = mn;
      const bn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.893 2.007c.138.015.253.05.343.086a1.155 1.155 0 0 1 .552.412.95.95 0 0 1 .175.41l.002.01.004.016.001.008q.03.092.03.188v9.726a.6.6 0 0 1-.031.196l-.004.015q0 .005-.002.012l-.01.05a.95.95 0 0 1-.165.36 1.15 1.15 0 0 1-.552.412c-.09.034-.205.07-.343.085-.14.015-.266.004-.375-.016a1.14 1.14 0 0 1-.472-.198l-.003-.001-.01-.007a.7.7 0 0 1-.153-.107l-2.427-2.216-.07-.052-.033-.025-.031-.024h-.004l-.049-.005-.023-.002-.08-.009H1.461a.8.8 0 0 1-.212-.029l-.109-.025a3 3 0 0 1-.167-.04 1.3 1.3 0 0 1-.537-.288 1.1 1.1 0 0 1-.328-.509c-.015-.046-.03-.1-.038-.132l-.026-.086A.6.6 0 0 1 0 9.994V5.996q0-.12.046-.232l.022-.067q0-.007.004-.017c.009-.031.024-.085.039-.13.048-.146.134-.328.325-.5.181-.162.37-.241.537-.287.064-.018.128-.032.167-.04l.01-.002.099-.023a.8.8 0 0 1 .212-.029h1.727a2 2 0 0 0 .132-.018 1 1 0 0 0 .112-.08L5.88 2.337a.7.7 0 0 1 .163-.113l.002-.002.073-.046c.09-.054.22-.12.4-.152.11-.02.235-.031.375-.016M4.43 5.547l-.001.001-.002.002-.003.002-.01.009a3 3 0 0 1-.139.105c-.072.052-.216.15-.38.214-.165.064-.342.091-.433.103a3 3 0 0 1-.18.018h-.014l-.004.001H3.26l-.046.002H1.56l-.072.016-.004.01-.02.071v3.79l.022.078.003.012.071.016h1.656a1 1 0 0 1 .115.008l.083.01c.026.002.065.005.103.01.107.014.233.038.379.095a1.5 1.5 0 0 1 .41.24l.013.01q.028.023.048.035.046.03.086.067l2.086 1.905V3.623L4.452 5.528z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        jn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.478 3.01c.19.022.348.077.472.129.126.053.274.127.42.245.15.12.256.251.339.373.14.208.197.402.226.54l.014.074.004.018.004.023.002.012q.04.139.041.282v14.588a1 1 0 0 1-.043.294l-.005.024-.003.017-.014.074a1.5 1.5 0 0 1-.226.54 1.7 1.7 0 0 1-.338.373 1.7 1.7 0 0 1-.421.245 1.7 1.7 0 0 1-.472.129 1.7 1.7 0 0 1-.515-.024 1.5 1.5 0 0 1-.55-.228l-.1-.069-.003-.002-.014-.01a1 1 0 0 1-.211-.16l-3.337-3.325-.097-.078-.045-.037-.043-.036h-.005l-.067-.008-.032-.004-.11-.012H3.01q-.149 0-.292-.044a2 2 0 0 0-.135-.034l-.014-.003c-.054-.013-.142-.033-.23-.06a1.75 1.75 0 0 1-.738-.432 1.7 1.7 0 0 1-.452-.763c-.02-.07-.04-.152-.052-.2l-.006-.026a1 1 0 0 0-.03-.102A1 1 0 0 1 1 14.99V8.994q0-.18.063-.349c.008-.022.017-.05.03-.1l.006-.026c.012-.046.032-.126.053-.195a1.749 1.749 0 0 1 1.185-1.18c.089-.027.177-.047.231-.06q.008 0 .014-.003c.062-.014.1-.023.135-.034a1 1 0 0 1 .292-.043h2.375a2 2 0 0 0 .181-.027 1 1 0 0 0 .146-.112l.008-.007 3.366-3.354a1 1 0 0 1 .224-.17q0 0 .003-.002l.1-.07c.123-.081.302-.18.55-.228.15-.03.323-.046.516-.024M7.091 8.322h-.002l-.001.002-.005.005-.014.012a3 3 0 0 1-.19.158 2.5 2.5 0 0 1-.524.321c-.226.096-.47.136-.595.154a4 4 0 0 1-.247.028h-.019l-.006.001h-.003q-.001 0 0 0-.032.003-.064.003H3.144l-.1.023-.004.017-.03.106v5.685l.032.117.004.018.098.023H5.42q.08 0 .158.012l.114.014.142.017a2 2 0 0 1 .987.422l.099.081.082.066q.063.046.118.101l2.868 2.857V5.435L7.121 8.292z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.916 4.014c.251.03.461.102.626.171.167.07.364.17.559.328.197.159.338.334.448.497a2 2 0 0 1 .32.819l.004.023.006.031.003.017q.054.183.054.376v19.458q0 .193-.054.376l-.003.017-.006.031-.004.023-.02.1a2 2 0 0 1-.3.72 2.2 2.2 0 0 1-.448.496 2.3 2.3 0 0 1-.56.328c-.164.07-.374.142-.626.171-.256.03-.485.008-.684-.031a2 2 0 0 1-.73-.304c-.048-.032-.115-.08-.133-.093l-.004-.003-.019-.013a1.3 1.3 0 0 1-.28-.214l-4.43-4.434-.129-.104-.06-.05-.052-.043-.005-.004-.007-.001-.089-.01-.042-.005-.146-.017H3.998q-.198 0-.388-.058a3 3 0 0 0-.198-.05c-.072-.016-.189-.043-.306-.079a2.32 2.32 0 0 1-1.58-1.595c-.027-.094-.053-.203-.068-.266l-.009-.035a1 1 0 0 0-.039-.136q-.08-.22-.08-.456v-8c0-.158.028-.316.084-.465.01-.03.022-.066.04-.134l.008-.034c.016-.062.043-.168.07-.26a2.32 2.32 0 0 1 1.573-1.574c.118-.036.235-.063.307-.08l.018-.004c.083-.02.133-.031.18-.046q.19-.057.388-.057H7.15a3 3 0 0 0 .24-.036 2 2 0 0 0 .194-.15l.01-.01 4.47-4.472a1.3 1.3 0 0 1 .298-.227l.004-.003c.018-.013.085-.061.133-.093.163-.109.4-.24.73-.304.2-.04.429-.062.686-.032m-4.499 7.084-.001.002-.003.002-.006.006-.018.016a4 4 0 0 1-.253.212c-.132.103-.395.3-.695.428s-.625.181-.79.205a5 5 0 0 1-.329.036l-.025.002H7.29l-.003.001h-.002.002-.003l-.082.003H4.177l-.133.032-.005.021-.039.142v7.583q.025.089.04.156l.007.024.13.03H7.2q.105 0 .209.017a3 3 0 0 0 .151.019l.189.022a2.63 2.63 0 0 1 1.31.563c.045.036.098.08.131.109l.023.019.087.069q.084.06.157.134l3.808 3.811V7.248L9.458 11.06z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(bn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(jn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(yn, {
              ...n,
              ref: r
            })]
          })
        }));
      Rn.displayName = "Volume", Rn.categories = ["connectivity", "communication", "multimedia"], Rn.tags = ["music", "sound", "mute", "speaker"], Rn.MD = bn, Rn.LG = jn, Rn.XL = yn;
      const Mn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M.862.861c.26-.26.682-.26.943 0l13.333 13.334a.667.667 0 0 1-.943.942L8 8.942v3.633a.6.6 0 0 1-.027.181l-.001.008-.003.015-.002.011-.01.048a.95.95 0 0 1-.148.346 1.08 1.08 0 0 1-.496.397 1.2 1.2 0 0 1-.31.082 1.1 1.1 0 0 1-.336-.015 1 1 0 0 1-.36-.146l-.066-.045-.002-.001-.01-.007a.7.7 0 0 1-.137-.103l-2.184-2.132-.063-.05-.03-.024-.026-.02-.002-.002h-.003l-.044-.006-.021-.002-.072-.008H2.115a.7.7 0 0 1-.19-.028l-.09-.022-.008-.002a2 2 0 0 1-.151-.038 1.15 1.15 0 0 1-.483-.277 1.1 1.1 0 0 1-.296-.49l-.034-.128L.86 10.1l-.02-.065a.6.6 0 0 1-.039-.22V5.97q0-.115.041-.224l.02-.064.004-.017c.008-.03.021-.08.035-.125.043-.14.12-.315.293-.48a1.15 1.15 0 0 1 .483-.277c.057-.017.115-.03.15-.038l.01-.002c.04-.01.065-.015.088-.022a.7.7 0 0 1 .191-.028H3.67q.022-.001.059-.007l.012-.002L.862 1.804a.667.667 0 0 1 0-.943m3.82 4.764 2.002 2.001v4.482l-1.877-1.833a1 1 0 0 0-.078-.064l-.042-.034-.012-.009-.064-.052a1.3 1.3 0 0 0-.646-.27l-.093-.011-.012-.001-.063-.008a1 1 0 0 0-.103-.008h-1.49l-.065-.015-.003-.012-.02-.074V6.07l.02-.068.002-.01.065-.016h1.491l.04-.001h.008l.012-.001a2 2 0 0 0 .162-.018c.081-.011.241-.037.39-.099a1.6 1.6 0 0 0 .377-.232m1.985-2.187A.666.666 0 0 1 6.08 2.31 1.124 1.124 0 0 1 8 3.104v.457a.667.667 0 1 1-1.333 0zm6.714-.152a.667.667 0 1 0-.943.943 5.33 5.33 0 0 1 1.12 5.902.667.667 0 1 0 1.222.533 6.67 6.67 0 0 0-1.4-7.378M11.2 5.6a.667.667 0 0 0-1.067.8c.27.358.444.779.507 1.223a.667.667 0 0 0 1.32-.189A4 4 0 0 0 11.2 5.6",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ln = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414L12 13.414v5.884q0 .144-.04.281l-.003.012-.005.024-.003.017-.014.074c-.03.138-.086.331-.226.539a1.7 1.7 0 0 1-.338.372 1.7 1.7 0 0 1-.421.244 1.7 1.7 0 0 1-.472.129 1.7 1.7 0 0 1-.515-.024 1.5 1.5 0 0 1-.55-.227l-.1-.07-.003-.002-.014-.01a1 1 0 0 1-.211-.16L5.748 17.18l-.097-.077-.045-.038-.039-.032-.004-.003h-.005l-.067-.008-.032-.004-.11-.012H3.01q-.149 0-.292-.044a2 2 0 0 0-.135-.034l-.014-.003a4 4 0 0 1-.23-.06 1.75 1.75 0 0 1-.738-.43 1.7 1.7 0 0 1-.452-.763 4 4 0 0 1-.052-.198l-.006-.026a1 1 0 0 0-.03-.102 1 1 0 0 1-.06-.341V9.02q0-.18.063-.348a1 1 0 0 0 .03-.1l.006-.026c.012-.046.032-.126.053-.195a1.7 1.7 0 0 1 .448-.746 1.75 1.75 0 0 1 .737-.431c.089-.027.177-.047.231-.06l.014-.003c.062-.014.1-.023.135-.034q.143-.042.292-.043h2.375a2 2 0 0 0 .181-.027L5.577 7 1.293 2.707a1 1 0 0 1 0-1.414m5.715 7.13 2.981 2.98v7.168L7.121 15.72a1 1 0 0 0-.118-.1l-.065-.052-.017-.014c-.026-.021-.065-.055-.1-.082a1.96 1.96 0 0 0-.986-.42c-.052-.008-.107-.014-.142-.017l-.018-.002-.096-.012a1 1 0 0 0-.158-.013H3.144l-.098-.023-.004-.018-.031-.116V9.178l.029-.106.004-.016.1-.024H5.42q.032 0 .062-.002h.011l.019-.002a3 3 0 0 0 .247-.027c.125-.018.37-.058.595-.153a2.5 2.5 0 0 0 .523-.32zM10 5.156a.999.999 0 0 1-.88-1.691A1.686 1.686 0 0 1 12 4.657v.686a1 1 0 1 1-2 0zm10.07-.229a1 1 0 1 0-1.413 1.415 8 8 0 0 1 1.68 8.853 1 1 0 0 0 1.833.8 10 10 0 0 0-2.1-11.068M16.8 8.4a1 1 0 1 0-1.6 1.2c.404.538.665 1.169.76 1.835a1 1 0 1 0 1.98-.284A6 6 0 0 0 16.8 8.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.724 1.725c.52-.521 1.365-.521 1.886 0L30.276 28.39a1.333 1.333 0 1 1-1.885 1.886L1.724 3.61a1.333 1.333 0 0 1 0-1.885m5.684 7.57-.016.01a1.6 1.6 0 0 1-.241.036H3.998q-.198 0-.388.058a3 3 0 0 1-.18.046l-.018.004c-.072.017-.189.043-.306.08a2.32 2.32 0 0 0-1.573 1.573c-.028.092-.055.2-.07.26l-.01.035a1 1 0 0 1-.04.134 1.3 1.3 0 0 0-.083.465v8c0 .155.027.31.08.455.011.03.022.068.04.137l.008.035c.015.063.041.172.069.265a2.32 2.32 0 0 0 1.58 1.595c.116.036.233.063.305.08l.018.004c.083.02.133.032.18.046q.19.057.388.057h3.107q.084.011.146.018l.042.004.09.01.006.001.005.005.052.043.06.05q.054.045.129.103l4.43 4.435q.127.125.28.214l.019.013.004.003.133.093c.163.108.4.239.73.303.199.04.428.062.684.032a2.3 2.3 0 0 0 .627-.171c.167-.07.364-.17.559-.328.197-.16.338-.335.448-.497a2 2 0 0 0 .32-.82l.004-.022.006-.031.003-.017q.054-.184.054-.376v-7.912l-2.67-2.67v9.61l-3.808-3.811a1.3 1.3 0 0 0-.157-.135l-.087-.069-.023-.019-.131-.108a2.6 2.6 0 0 0-1.31-.563c-.07-.01-.141-.017-.189-.022l-.023-.003-.128-.016Q7.305 20 7.2 20H4.178l-.13-.03-.006-.025L4 19.79v-7.584l.038-.141.005-.022.133-.032H7.2q.041 0 .082-.002h.006l.008-.001.025-.002.079-.007c.062-.006.15-.015.25-.03.165-.023.49-.077.79-.205s.563-.325.695-.428q.103-.081.172-.141zm5.925-2.418a1.333 1.333 0 0 1-1.174-2.255A2.248 2.248 0 0 1 16 6.211h-1.333H16v.914a1.333 1.333 0 0 1-2.667 0zm13.428-.305a1.333 1.333 0 1 0-1.885 1.886 10.67 10.67 0 0 1 2.24 11.805 1.333 1.333 0 0 0 2.444 1.064A13.33 13.33 0 0 0 26.76 6.573M22.4 11.2a1.333 1.333 0 0 0-2.133 1.6 5.33 5.33 0 0 1 1.013 2.446 1.333 1.333 0 1 0 2.64-.377A8 8 0 0 0 22.4 11.2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        En = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Mn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ln, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Cn, {
              ...n,
              ref: r
            })]
          })
        }));
      En.displayName = "VolumeOff", En.categories = ["connectivity", "communication", "multimedia"], En.tags = ["music", "sound", "mute", "speaker"], En.MD = Mn, En.LG = Ln, En.XL = Cn;
      const An = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.894 2.007c.137.015.252.051.342.086a1.155 1.155 0 0 1 .552.412.95.95 0 0 1 .175.41q0 .006.003.01l.003.017q0 .006.002.007.03.092.029.189v9.724q0 .097-.03.189l-.001.008-.003.015-.003.012-.01.05a.95.95 0 0 1-.165.36 1.16 1.16 0 0 1-.552.411c-.09.035-.205.072-.342.086-.14.015-.266.004-.375-.015a1.15 1.15 0 0 1-.473-.199l-.002-.002-.01-.005a.7.7 0 0 1-.154-.108l-2.427-2.216-.103-.077-.029-.021-.003-.002-.003-.001-.05-.005-.022-.002-.08-.009H1.461a.8.8 0 0 1-.212-.028l-.099-.024q-.004 0-.01-.002a3 3 0 0 1-.167-.04 1.3 1.3 0 0 1-.536-.288 1.13 1.13 0 0 1-.33-.508c-.015-.047-.028-.102-.037-.133l-.005-.018a1 1 0 0 0-.021-.068A.6.6 0 0 1 0 9.994V5.996q0-.12.046-.232l.021-.068.005-.016.04-.13c.048-.145.133-.328.325-.5.18-.161.37-.241.536-.287.064-.018.128-.032.168-.04l.01-.002c.045-.01.072-.015.098-.023a.8.8 0 0 1 .212-.029h1.727a2 2 0 0 0 .132-.018l.055-.036q.031-.022.05-.039l.007-.005L5.88 2.336a.7.7 0 0 1 .151-.106l.012-.007.002-.001.073-.047c.09-.054.22-.12.4-.152.11-.02.235-.031.376-.016M4.452 5.528l-.022.02-.002.002-.004.003-.01.008-.032.026-.107.08c-.072.05-.216.15-.38.213-.165.064-.342.09-.433.103l-.137.015-.043.003-.013.001H3.26l-.045.002H1.56l-.074.016-.003.01-.02.072v3.79q.013.044.021.077l.004.013.072.014h1.656a1 1 0 0 1 .114.009l.07.008h.013l.104.012c.107.014.232.038.378.095.15.059.256.127.338.187l.073.054q.008.006.012.01l.048.034q.046.03.086.067l2.085 1.905V3.623zm9.743 0a.667.667 0 0 1 .944.944L13.61 8l1.529 1.528a.668.668 0 0 1-.944.944l-1.528-1.529-1.528 1.529a.668.668 0 0 1-.944-.944L11.724 8l-1.529-1.528a.667.667 0 0 1 .944-.944l1.528 1.529z"
            })
          })
        }))),
        Pn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.46 3.01c.189.023.346.077.47.129.125.053.272.128.418.246.148.12.255.25.337.372a1.5 1.5 0 0 1 .24.614l.002.018.005.023.002.012q.04.139.041.282v14.588q0 .144-.04.282l-.003.012-.005.023-.002.018-.015.074c-.03.139-.085.332-.225.54a1.7 1.7 0 0 1-.337.373 1.7 1.7 0 0 1-.419.245 1.7 1.7 0 0 1-.47.128 1.6 1.6 0 0 1-.512-.023 1.5 1.5 0 0 1-.547-.228l-.103-.07q-.011-.01-.014-.01a1 1 0 0 1-.21-.162l-3.321-3.324-.097-.078-.045-.037-.039-.032-.004-.003-.005-.001-.066-.008-.032-.003-.109-.014h-2.33a1 1 0 0 1-.29-.043 2 2 0 0 0-.136-.034l-.013-.003a4 4 0 0 1-.23-.06 1.74 1.74 0 0 1-1.183-1.196c-.02-.07-.04-.15-.052-.198l-.006-.026a1 1 0 0 0-.03-.103q-.06-.166-.06-.342V8.994a1 1 0 0 1 .063-.348 1 1 0 0 0 .03-.1l.006-.026c.011-.046.032-.127.053-.196a1.741 1.741 0 0 1 1.18-1.18c.087-.027.174-.047.229-.06l.013-.003c.063-.014.1-.023.136-.034q.142-.042.29-.043H5.39l.09-.01q.067-.011.09-.017a1 1 0 0 0 .146-.113l.007-.006 3.351-3.354a1 1 0 0 1 .224-.17l.003-.002.1-.07c.122-.08.3-.18.547-.228.15-.029.322-.046.514-.023M7.12 8.293l-.031.03-.007.006-.015.013-.044.04q-.055.047-.145.118a2.4 2.4 0 0 1-.52.321 2.4 2.4 0 0 1-.594.155c-.074.01-.14.017-.187.021l-.059.006-.018.001h-.007l-.002.001h-.002l-.061.002H3.159q-.058.014-.1.023l-.004.017-.028.106v5.685l.03.116.005.019.097.023h2.268q.078 0 .156.012l.096.013.017.002c.036.003.09.01.142.016a1.97 1.97 0 0 1 1.08.503l.017.015.066.052q.062.046.118.1l2.854 2.858V5.436zm14.174.001a1 1 0 0 1 1.414 1.414L20.414 12l2.293 2.293a1 1 0 1 1-1.414 1.414L19 13.414l-2.293 2.293a1 1 0 0 1-1.414-1.414L17.586 12l-2.293-2.293a1 1 0 0 1 1.414-1.414L19 10.586z"
            })
          })
        }))),
        In = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.916 4.014c.252.03.461.102.626.172.167.07.364.17.559.327.197.16.338.334.448.497a2 2 0 0 1 .32.82l.004.023.006.03.003.016q.053.186.053.376v19.46q0 .191-.053.375l-.003.017-.006.031-.004.024c-.004.024-.011.06-.02.098a2 2 0 0 1-.3.72c-.11.162-.251.338-.448.497a2.3 2.3 0 0 1-.559.328c-.165.07-.375.142-.627.171-.256.03-.485.008-.684-.031a2 2 0 0 1-.73-.304c-.048-.032-.115-.08-.133-.093q-.003 0-.004-.003a1.335 1.335 0 0 1-.299-.228l-4.43-4.434a5 5 0 0 1-.189-.153l-.051-.043-.006-.004h-.006l-.09-.012-.042-.003-.146-.018H3.998q-.198 0-.388-.058a3 3 0 0 0-.18-.046l-.018-.003a5 5 0 0 1-.306-.08 2.32 2.32 0 0 1-1.58-1.595c-.027-.094-.053-.203-.068-.266l-.009-.035a1 1 0 0 0-.039-.136q-.08-.22-.08-.456v-8q0-.24.084-.465c.011-.03.022-.066.04-.133q.002-.014.008-.035c.015-.061.042-.168.07-.26a2.322 2.322 0 0 1 1.574-1.574c.117-.036.234-.063.306-.08l.019-.004a3 3 0 0 0 .18-.046q.189-.057.387-.057h3.153a3 3 0 0 0 .24-.036 2.675 2.675 0 0 0 .193-.15l.012-.01 4.47-4.472q.123-.125.277-.213l.02-.015.004-.003.133-.092c.163-.109.4-.24.73-.304.2-.04.43-.062.686-.032M9.458 11.06l-.041.039h-.001l-.003.003-.006.005-.018.017-.059.052a5 5 0 0 1-.194.16c-.132.103-.395.3-.695.428a3.3 3.3 0 0 1-.79.205 5 5 0 0 1-.329.037h-.024l-.009.002h-.006l-.082.003H4.177l-.133.032-.006.022-.038.141v7.583l.041.155.006.025.13.031H7.2q.105 0 .21.017c.036.006.074.01.127.015l.024.003c.047.005.12.013.188.023a2.63 2.63 0 0 1 1.31.562c.045.036.098.08.131.109q.014.01.023.02c.036.03.062.05.087.067q.083.061.157.135l3.808 3.812V7.248zm18.933-.002a1.333 1.333 0 1 1 1.884 1.884L27.218 16l3.057 3.058a1.332 1.332 0 1 1-1.884 1.884l-3.058-3.057-3.058 3.057a1.332 1.332 0 1 1-1.884-1.884L23.448 16l-3.057-3.058a1.333 1.333 0 0 1 1.884-1.884l3.058 3.057z"
            })
          })
        }))),
        Sn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(An, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Pn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(In, {
              ...n,
              ref: r
            })]
          })
        }));
      Sn.displayName = "VolumeX", Sn.categories = ["connectivity", "communication", "multimedia"], Sn.tags = ["music", "sound", "mute", "speaker", "control", "volume"], Sn.MD = An, Sn.LG = Pn, Sn.XL = In;
      const _n = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.236 2.093a1.4 1.4 0 0 0-.343-.086 1.3 1.3 0 0 0-.375.016 1.14 1.14 0 0 0-.473.198l-.002.002-.011.007a.7.7 0 0 0-.152.106L3.432 4.572l-.006.004a1 1 0 0 1-.106.075 1 1 0 0 1-.132.018H1.461a.8.8 0 0 0-.212.029l-.099.023-.01.002c-.04.008-.103.022-.167.04a1.3 1.3 0 0 0-.537.288 1.13 1.13 0 0 0-.325.498c-.015.046-.03.1-.039.13l-.004.018-.022.067A.6.6 0 0 0 0 5.996v3.998q0 .118.044.228a1 1 0 0 1 .021.068l.005.018c.008.031.023.086.038.132.047.148.133.334.328.51.181.162.37.242.537.288.064.018.128.031.167.04l.01.001.099.023q.104.03.212.029h1.702l.08.009.023.002.049.005h.004l.003.003.028.021.033.025.07.052 2.427 2.216a.7.7 0 0 0 .153.107l.01.007.003.001.072.046c.09.055.22.12.4.152.11.02.235.031.375.016.138-.015.253-.05.343-.085a1.154 1.154 0 0 0 .552-.412.95.95 0 0 0 .175-.41l.002-.012.004-.015.001-.008a.6.6 0 0 0 .03-.188V3.137a.6.6 0 0 0-.03-.188l-.001-.008-.004-.015-.002-.012-.01-.05a.95.95 0 0 0-.165-.36 1.16 1.16 0 0 0-.552-.411M4.43 5.548l.023-.02 2.086-1.905v8.754l-2.086-1.905a1 1 0 0 0-.086-.067l-.048-.035-.012-.01-.072-.053a1.5 1.5 0 0 0-.34-.187 1.6 1.6 0 0 0-.378-.095c-.038-.005-.077-.008-.103-.01l-.013-.002-.07-.008a1 1 0 0 0-.115-.008H1.56l-.071-.016-.003-.012-.023-.078v-3.79q.014-.04.021-.07l.004-.011.072-.016h1.656q.023 0 .046-.002h.007L3.282 6a3 3 0 0 0 .18-.018c.09-.012.268-.039.433-.103s.308-.162.38-.214a3 3 0 0 0 .139-.105l.01-.009.003-.002zm8.009-2.262c.26-.26.682-.26.943 0a6.667 6.667 0 0 1 0 9.429.667.667 0 0 1-.943-.943 5.33 5.33 0 0 0 0-7.543.667.667 0 0 1 0-.943m-2.171 2.18a.667.667 0 0 1 .933.134 4 4 0 0 1 0 4.8.667.667 0 0 1-1.067-.8 2.67 2.67 0 0 0 0-3.2.667.667 0 0 1 .134-.933",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.93 3.139a1.7 1.7 0 0 0-.47-.129 1.6 1.6 0 0 0-.513.024 1.5 1.5 0 0 0-.548.228l-.1.07-.003.002-.015.01a1 1 0 0 0-.208.16l-3.35 3.354-.009.007a2 2 0 0 1-.145.112 1 1 0 0 1-.18.027H3.025a1 1 0 0 0-.29.043c-.036.01-.073.02-.135.034l-.014.003a4 4 0 0 0-.23.06 1.74 1.74 0 0 0-1.18 1.18c-.02.07-.04.15-.052.195l-.006.026c-.014.05-.022.078-.03.1a1 1 0 0 0-.063.35v5.996a1 1 0 0 0 .06.342c.008.022.017.05.03.102l.006.026c.011.048.031.13.052.2a1.74 1.74 0 0 0 1.184 1.196c.087.026.175.046.23.059l.013.003c.062.014.099.024.135.034a1 1 0 0 0 .29.044h2.33q.063.008.109.012l.031.004c.034.003.05.005.067.008h.006l.003.003.04.033.044.037.097.078 3.321 3.324a1 1 0 0 0 .21.16h-.001l.015.01.003.003.1.07c.122.08.3.179.547.227.15.03.32.046.513.024.189-.022.346-.077.47-.129.125-.053.273-.127.419-.245.148-.12.254-.251.336-.373.14-.208.196-.402.225-.54l.015-.074.003-.017.004-.024.002-.012a1 1 0 0 0 .041-.282V4.706a1 1 0 0 0-.04-.282l-.003-.012-.004-.023-.003-.018-.015-.074a1.5 1.5 0 0 0-.225-.54 1.7 1.7 0 0 0-.336-.373 1.7 1.7 0 0 0-.42-.245M7.087 8.323l.001-.001.03-.03 2.855-2.857v13.13L7.12 15.708a1 1 0 0 0-.118-.1l-.065-.052-.017-.015-.099-.081a1.96 1.96 0 0 0-.982-.422l-.142-.017-.017-.002-.096-.012a1 1 0 0 0-.157-.012H3.16l-.097-.023-.005-.018-.03-.117V9.152l.029-.106.004-.017.1-.023h2.266l.062-.002h.004l.007-.001.018-.001a3 3 0 0 0 .246-.028c.125-.018.368-.058.593-.154s.422-.243.52-.32a4 4 0 0 0 .19-.159l.014-.012.005-.005zm11.57-3.394a1 1 0 0 1 1.414 0 10 10 0 0 1 0 14.142 1 1 0 1 1-1.414-1.414 8 8 0 0 0 0-11.314 1 1 0 0 1 0-1.414M15.4 8.2a1 1 0 0 1 1.4.2 6 6 0 0 1 0 7.2 1 1 0 0 1-1.6-1.2 4 4 0 0 0 0-4.8 1 1 0 0 1 .2-1.4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.542 4.185a2.3 2.3 0 0 0-.626-.171 2.2 2.2 0 0 0-.686.032 2 2 0 0 0-.73.304c-.048.032-.115.08-.133.093l-.004.003-.02.014q-.153.088-.278.213l-4.47 4.473-.01.01a3 3 0 0 1-.193.149 1.6 1.6 0 0 1-.241.035H3.998q-.198 0-.388.058a3 3 0 0 1-.18.046l-.018.004a5 5 0 0 0-.306.08 2.32 2.32 0 0 0-1.573 1.574c-.028.092-.055.198-.07.26l-.01.034a1 1 0 0 1-.04.134 1.3 1.3 0 0 0-.083.466v7.999c0 .155.027.31.08.456.011.03.022.067.04.136l.008.035c.015.063.041.172.069.266a2.32 2.32 0 0 0 1.58 1.595c.116.036.233.063.305.08l.018.004c.083.019.133.03.18.045q.19.058.388.058h3.107l.146.017.042.005.09.01h.006l.005.005.052.043.06.05q.054.045.129.104l4.43 4.434a1.3 1.3 0 0 0 .299.227l.004.003.133.093c.163.108.4.24.73.303.199.04.428.062.684.032.252-.03.462-.102.627-.171.167-.07.364-.17.559-.328a2.2 2.2 0 0 0 .448-.497 2 2 0 0 0 .32-.819l.004-.023.006-.031.003-.017q.054-.184.054-.376V6.276q0-.192-.054-.376l-.003-.017-.006-.03-.004-.024-.02-.1a2 2 0 0 0-.3-.72 2.2 2.2 0 0 0-.448-.496 2.3 2.3 0 0 0-.56-.328m-2.199 23.366.002.001zM9.416 11.1l.001-.002.041-.039 3.808-3.81v17.513l-3.808-3.81a1.3 1.3 0 0 0-.157-.135l-.087-.07-.023-.018c-.033-.028-.086-.073-.131-.109a2.6 2.6 0 0 0-1.31-.563l-.189-.022-.023-.003-.128-.016A1.3 1.3 0 0 0 7.2 20H4.178l-.13-.031-.006-.024-.04-.156v-7.583l.038-.142.005-.021q.056-.014.133-.032H7.2q.041 0 .082-.003h.014l.025-.003a4 4 0 0 0 .328-.036c.166-.024.49-.077.791-.205.3-.128.563-.325.695-.428a5 5 0 0 0 .253-.212l.018-.016.006-.006zm15.46-4.528c.52-.52 1.365-.52 1.886 0a13.334 13.334 0 0 1 0 18.856 1.333 1.333 0 0 1-1.886-1.886 10.666 10.666 0 0 0 0-15.085 1.333 1.333 0 0 1 0-1.885m-4.343 4.361a1.333 1.333 0 0 1 1.867.267 8 8 0 0 1 0 9.6 1.333 1.333 0 0 1-2.133-1.6 5.33 5.33 0 0 0 0-6.4 1.333 1.333 0 0 1 .267-1.867",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Tn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(_n, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(zn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Hn, {
              ...n,
              ref: r
            })]
          })
        }));
      Tn.displayName = "Volume2", Tn.categories = ["connectivity", "communication", "multimedia"], Tn.tags = ["music", "sound", "speaker", "control", "volume", "high"], Tn.MD = _n, Tn.LG = zn, Tn.XL = Hn;
      const Dn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.236 2.093a1.4 1.4 0 0 0-.343-.086 1.3 1.3 0 0 0-.375.016 1.14 1.14 0 0 0-.473.198l-.002.002-.011.007a.7.7 0 0 0-.152.106L3.432 4.572l-.006.004a1 1 0 0 1-.106.075 1 1 0 0 1-.132.018H1.461a.8.8 0 0 0-.212.029l-.099.023-.01.002c-.04.008-.103.022-.167.04a1.3 1.3 0 0 0-.537.288 1.13 1.13 0 0 0-.325.498c-.015.046-.03.1-.039.13l-.004.018-.022.067A.6.6 0 0 0 0 5.996v3.998q0 .118.044.228a1 1 0 0 1 .021.068l.005.018c.008.031.023.086.038.132.047.148.133.334.328.51.181.162.37.242.537.288.064.018.128.031.167.04l.01.001.099.023q.104.03.212.029h1.702l.08.009.023.002.049.005h.004l.003.003.028.021.033.025.07.052 2.427 2.216a.7.7 0 0 0 .153.107l.01.007.003.001.072.046c.09.055.22.12.4.152.11.02.235.031.375.016.138-.015.253-.05.343-.085a1.154 1.154 0 0 0 .552-.412.95.95 0 0 0 .175-.41l.002-.012.004-.015.001-.008a.6.6 0 0 0 .03-.188V3.137a.6.6 0 0 0-.03-.188l-.001-.008-.004-.015-.002-.012-.01-.05a.95.95 0 0 0-.165-.36 1.16 1.16 0 0 0-.552-.411M4.43 5.548l.023-.02 2.086-1.905v8.754l-2.086-1.905a1 1 0 0 0-.086-.067l-.048-.035-.012-.01-.072-.053a1.5 1.5 0 0 0-.34-.187 1.6 1.6 0 0 0-.378-.095c-.038-.005-.077-.008-.103-.01l-.013-.002-.07-.008a1 1 0 0 0-.115-.008H1.56l-.071-.016-.003-.012-.023-.078v-3.79q.014-.04.021-.07l.004-.011.072-.016h1.656q.023 0 .046-.002h.007L3.282 6a3 3 0 0 0 .18-.018c.09-.012.268-.039.433-.103s.308-.162.38-.214a3 3 0 0 0 .139-.105l.01-.009.003-.002zM11.2 5.6a.667.667 0 1 0-1.067.8 2.67 2.67 0 0 1 0 3.2.667.667 0 1 0 1.067.8 4 4 0 0 0 0-4.8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.95 3.139a1.7 1.7 0 0 0-.472-.129 1.7 1.7 0 0 0-.516.024 1.5 1.5 0 0 0-.55.228l-.1.07-.003.002-.015.01a1 1 0 0 0-.21.16L5.72 6.858l-.008.007a2 2 0 0 1-.146.112 1 1 0 0 1-.181.027H3.009a1 1 0 0 0-.292.043c-.035.01-.073.02-.135.034l-.014.003a4 4 0 0 0-.23.06 1.75 1.75 0 0 0-1.186 1.18l-.053.195-.006.026c-.013.05-.022.078-.03.1a1 1 0 0 0-.063.35v5.996q0 .176.06.342c.009.022.017.05.03.102l.006.026c.012.048.031.13.052.2a1.75 1.75 0 0 0 1.19 1.196c.088.026.176.046.23.059l.014.003c.062.014.1.024.135.034q.143.044.292.044h2.34q.065.008.11.012l.032.004.067.008h.005l.004.003.04.033.044.037.097.078 3.337 3.324q.095.095.21.16-.002 0 0 0l.015.01.003.003.1.07c.123.08.302.179.55.227.15.03.322.046.515.024.19-.022.348-.077.472-.129.126-.053.274-.127.421-.245.149-.12.255-.251.338-.373a1.5 1.5 0 0 0 .226-.54l.014-.074.004-.017.004-.024.002-.012a1 1 0 0 0 .041-.282V4.706a1 1 0 0 0-.04-.282l-.003-.012-.005-.023-.003-.018-.014-.074a1.5 1.5 0 0 0-.226-.54 1.7 1.7 0 0 0-.338-.373 1.7 1.7 0 0 0-.42-.245M7.09 8.323v-.001l.031-.03L9.99 5.435v13.13l-2.868-2.857a1 1 0 0 0-.118-.1l-.065-.052-.017-.015c-.026-.02-.065-.054-.1-.081a1.97 1.97 0 0 0-.986-.422l-.142-.017-.018-.002-.096-.012a1 1 0 0 0-.158-.012H3.144l-.098-.023-.004-.018-.031-.117V9.152l.029-.106.004-.017.1-.023H5.42l.062-.002h.005l.006-.001.019-.001a4 4 0 0 0 .247-.028c.125-.018.37-.058.595-.154a2.5 2.5 0 0 0 .523-.32 4 4 0 0 0 .191-.159l.014-.012.005-.005zm9.71.077a1 1 0 0 0-1.6 1.2 4 4 0 0 1 0 4.8 1 1 0 0 0 1.6 1.2 6 6 0 0 0 0-7.2",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Nn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.542 4.185a2.3 2.3 0 0 0-.626-.171 2.2 2.2 0 0 0-.686.032 2 2 0 0 0-.73.304c-.048.032-.115.08-.133.093l-.004.003-.02.014q-.153.088-.278.213l-4.47 4.473-.01.01a3 3 0 0 1-.193.149 1.6 1.6 0 0 1-.241.035H3.998q-.198 0-.388.058a3 3 0 0 1-.18.046l-.018.004a5 5 0 0 0-.306.08 2.32 2.32 0 0 0-1.573 1.574c-.028.092-.055.198-.07.26l-.01.034a1 1 0 0 1-.04.134 1.3 1.3 0 0 0-.083.466v7.999c0 .155.027.31.08.456.011.03.022.067.04.136l.008.035c.015.063.041.172.069.266a2.32 2.32 0 0 0 1.58 1.595c.116.036.233.063.305.08l.018.004c.083.019.133.03.18.045q.19.058.388.058h3.107l.146.017.042.005.09.01h.006l.005.005.052.043.06.05q.054.045.129.104l4.43 4.434q.127.125.28.214l.019.013.004.003.133.093c.163.108.4.24.73.303.199.04.428.062.684.032.252-.03.462-.102.627-.171.167-.07.364-.17.559-.328a2.2 2.2 0 0 0 .448-.497 2 2 0 0 0 .32-.819l.004-.023.006-.031.003-.017q.054-.184.054-.376V6.276q0-.192-.054-.376l-.003-.017-.006-.03-.004-.024-.02-.1a2 2 0 0 0-.3-.72 2.2 2.2 0 0 0-.448-.496 2.3 2.3 0 0 0-.56-.328M9.416 11.1l.001-.002.041-.039 3.808-3.81v17.513l-3.808-3.81a1.3 1.3 0 0 0-.157-.135l-.087-.07-.023-.018c-.033-.028-.086-.073-.131-.109a2.6 2.6 0 0 0-1.31-.563l-.189-.022-.023-.003-.128-.016A1.3 1.3 0 0 0 7.2 20H4.178l-.13-.031-.006-.024-.04-.156v-7.583l.038-.142.005-.021q.056-.014.133-.032H7.2q.041 0 .082-.003h.014l.025-.003a4 4 0 0 0 .328-.036c.166-.024.49-.077.791-.205.3-.128.563-.325.695-.428a5 5 0 0 0 .253-.212l.018-.016.006-.006zm12.984.1a1.333 1.333 0 0 0-2.133 1.6 5.33 5.33 0 0 1 0 6.4 1.333 1.333 0 0 0 2.133 1.6 8 8 0 0 0 0-9.6",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        kn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Dn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Bn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Nn, {
              ...n,
              ref: r
            })]
          })
        }));
      kn.displayName = "Volume1", kn.categories = ["connectivity", "communication", "multimedia"], kn.tags = ["music", "sound", "speaker", "control", "volume", "low"], kn.MD = Dn, kn.LG = Bn, kn.XL = Nn;
      const Vn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2 1.333c.368 0 .667.299.667.667v10.667a.667.667 0 0 0 .666.666H14a.667.667 0 0 1 0 1.334H3.333a2 2 0 0 1-2-2V2c0-.368.299-.667.667-.667m11.495 1.354c.357.089.574.45.485.808-.18.72-.618 1.946-1.237 3.008-.31.53-.683 1.051-1.116 1.447-.43.393-.98.717-1.627.717-1.03 0-1.55-.786-1.849-1.238l-.039-.06c-.374-.56-.521-.702-.779-.702-.168 0-.356.077-.579.322-.228.253-.443.632-.639 1.1-.33.794-.549 1.7-.714 2.383q-.046.192-.088.356a.667.667 0 0 1-1.293-.323l.078-.322c.163-.676.411-1.705.787-2.606.221-.531.506-1.069.881-1.483.382-.421.903-.76 1.567-.76 1.03 0 1.55.785 1.85 1.237l.038.06c.374.56.522.702.779.702.186 0 .428-.093.727-.367.296-.27.59-.666.864-1.135.547-.939.942-2.045 1.096-2.66a.667.667 0 0 1 .808-.484",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        On = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3 2a1 1 0 0 1 1 1v16a1 1 0 0 0 1 1h16a1 1 0 1 1 0 2H5a3 3 0 0 1-3-3V3a1 1 0 0 1 1-1m17.243 2.03a1 1 0 0 1 .727 1.213c-.27 1.078-.927 2.918-1.856 4.51-.465.797-1.024 1.579-1.674 2.172C16.795 12.516 15.971 13 15 13c-1.545 0-2.324-1.178-2.774-1.857l-.058-.088C11.608 10.214 11.386 10 11 10c-.253 0-.535.116-.868.484-.343.379-.666.947-.959 1.65-.496 1.19-.824 2.548-1.072 3.574l-.13.534a1 1 0 1 1-1.941-.485l.117-.482c.245-1.015.617-2.558 1.18-3.91.332-.796.76-1.603 1.323-2.224C9.222 8.509 10.003 8 11 8c1.545 0 2.324 1.178 2.774 1.857l.058.088c.56.841.782 1.055 1.168 1.055.279 0 .642-.14 1.09-.55.445-.406.886-1 1.296-1.704.821-1.407 1.413-3.067 1.644-3.989a1 1 0 0 1 1.212-.727",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4 2.667c.736 0 1.333.597 1.333 1.333v21.333a1.333 1.333 0 0 0 1.334 1.334H28a1.333 1.333 0 0 1 0 2.666H6.667a4 4 0 0 1-4-4V4c0-.736.597-1.333 1.333-1.333m22.99 2.706c.714.179 1.149.903.97 1.617-.36 1.438-1.236 3.892-2.475 6.015-.62 1.062-1.365 2.104-2.231 2.896-.86.786-1.96 1.432-3.254 1.432-2.06 0-3.099-1.57-3.698-2.476l-.078-.117c-.748-1.122-1.043-1.407-1.557-1.407-.338 0-.713.155-1.158.646-.458.504-.888 1.263-1.278 2.2-.661 1.587-1.1 3.397-1.43 4.765l-.174.713a1.333 1.333 0 1 1-2.587-.647q.071-.286.156-.643c.327-1.354.822-3.41 1.573-5.213.443-1.062 1.013-2.137 1.764-2.966.763-.843 1.804-1.521 3.134-1.521 2.06 0 3.098 1.57 3.698 2.476l.078.117c.747 1.122 1.042 1.407 1.557 1.407.372 0 .856-.187 1.454-.734.593-.542 1.18-1.333 1.728-2.271 1.094-1.877 1.884-4.09 2.191-5.319a1.333 1.333 0 0 1 1.617-.97",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Vn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(On, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Gn, {
              ...n,
              ref: r
            })]
          })
        }));
      Fn.displayName = "ChartSpline", Fn.categories = ["charts"], Fn.tags = ["statistics", "analytics", "diagram", "graph", "curve", "continuous", "smooth", "polynomial", "quadratic", "function", "interpolation"], Fn.MD = Vn, Fn.LG = On, Fn.XL = Gn;
      const Xn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.22 2a.67.67 0 0 0-.474.197l-.001.001L2.943 4h10.114l-1.802-1.802-.001-.001A.67.67 0 0 0 10.78 2zM14 5.333H2v1.334a.667.667 0 0 0 .65.666c.238-.017.464-.11.647-.263l.04-.03a1.13 1.13 0 0 1 1.366.03c.178.15.398.241.63.262.232-.02.453-.112.631-.262l.039-.03a1.13 1.13 0 0 1 1.366.03c.179.15.4.241.631.262.232-.02.452-.112.63-.262l.04-.03a1.13 1.13 0 0 1 1.366.03c.178.15.399.241.63.262.232-.02.453-.112.631-.262l.04-.03a1.13 1.13 0 0 1 1.366.03c.183.154.41.246.648.263A.667.667 0 0 0 14 6.667zm-1.333 3.215A2.5 2.5 0 0 1 12 8.21c-.38.27-.829.429-1.297.455h-.073a2.47 2.47 0 0 1-1.297-.455c-.379.27-.828.429-1.296.455a1 1 0 0 1-.074 0 2.47 2.47 0 0 1-1.296-.455c-.38.27-.83.429-1.297.455h-.073A2.47 2.47 0 0 1 4 8.21c-.205.146-.43.26-.667.337v4.785A.667.667 0 0 0 4 14h1.333v-2a2 2 0 0 1 2-2h1.334a2 2 0 0 1 2 2v2H12a.667.667 0 0 0 .667-.667zM9.333 14v-2a.667.667 0 0 0-.666-.667H7.333a.667.667 0 0 0-.666.667v2zM6 15.333h6a2 2 0 0 0 2-2v-4.78a2 2 0 0 0 1.333-1.886v-2a.67.67 0 0 0-.195-.472l-2.939-2.938a2 2 0 0 0-1.419-.59H5.22M6 15.333H4a2 2 0 0 1-2-2v-4.78A2 2 0 0 1 .667 6.666v-2c0-.177.07-.347.195-.472L3.8 1.257l.001-.001a2 2 0 0 1 1.42-.59",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.83 3a1 1 0 0 0-.71.295l-.003.002L4.414 6h15.172l-2.703-2.703-.002-.002A1 1 0 0 0 16.17 3zM21 8H3v2a1 1 0 0 0 .974 1 1.7 1.7 0 0 0 .972-.395l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .946.393 1.7 1.7 0 0 0 .946-.393l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .946.393 1.7 1.7 0 0 0 .946-.393l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .946.393 1.7 1.7 0 0 0 .946-.393l.058-.046a1.7 1.7 0 0 1 2.05.046 1.7 1.7 0 0 0 .972.395A1 1 0 0 0 21 10zm-2 4.821a3.7 3.7 0 0 1-1-.505 3.7 3.7 0 0 1-1.945.682 1 1 0 0 1-.11 0A3.7 3.7 0 0 1 14 12.317a3.7 3.7 0 0 1-1.945.681 1 1 0 0 1-.11 0A3.7 3.7 0 0 1 10 12.317a3.7 3.7 0 0 1-1.945.681 1 1 0 0 1-.11 0A3.7 3.7 0 0 1 6 12.317a3.7 3.7 0 0 1-1 .504V20a1 1 0 0 0 1 1h2v-3a3 3 0 0 1 3-3h2a3 3 0 0 1 3 3v3h2a1 1 0 0 0 1-1zM14 21v-3a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v3zm-5 2h9a3 3 0 0 0 3-3v-7.172A3 3 0 0 0 23 10V7a1 1 0 0 0-.293-.707L18.3 1.885l-.001-.001A3 3 0 0 0 16.17 1H7.83M9 23H6a3 3 0 0 1-3-3v-7.172A3 3 0 0 1 1 10V7a1 1 0 0 1 .293-.707L5.7 1.885l.001-.001A3 3 0 0 1 7.83 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Un = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.439 4a1.33 1.33 0 0 0-.947.393l-.002.003L5.886 8h20.228l-3.603-3.604-.003-.003A1.33 1.33 0 0 0 21.56 4zM28 10.667H4v2.666a1.333 1.333 0 0 0 1.299 1.333c.476-.034.93-.218 1.296-.526q.037-.032.077-.06a2.27 2.27 0 0 1 2.733.06c.357.3.798.483 1.262.523.463-.04.904-.223 1.261-.523q.038-.032.078-.06a2.266 2.266 0 0 1 2.733.06c.357.3.797.483 1.261.523.464-.04.904-.223 1.262-.523q.037-.032.077-.06a2.27 2.27 0 0 1 2.733.06c.357.3.798.483 1.261.523.464-.04.905-.223 1.262-.523q.037-.032.077-.06a2.27 2.27 0 0 1 2.733.06c.366.308.82.492 1.296.526A1.333 1.333 0 0 0 28 13.333zm-2.667 6.428A5 5 0 0 1 24 16.422a4.93 4.93 0 0 1-2.593.91 1 1 0 0 1-.147 0 4.93 4.93 0 0 1-2.593-.91 4.93 4.93 0 0 1-2.594.91 1 1 0 0 1-.146 0 4.93 4.93 0 0 1-2.594-.91 4.93 4.93 0 0 1-2.593.91 1 1 0 0 1-.147 0A4.93 4.93 0 0 1 8 16.421c-.409.292-.859.518-1.333.673v9.572A1.333 1.333 0 0 0 8 28h2.667v-4a4 4 0 0 1 4-4h2.666a4 4 0 0 1 4 4v4H24a1.334 1.334 0 0 0 1.333-1.333zM18.667 28v-4a1.333 1.333 0 0 0-1.334-1.333h-2.666A1.333 1.333 0 0 0 13.333 24v4zM12 30.667h12a4 4 0 0 0 4-4v-9.562a4 4 0 0 0 2.667-3.772v-4c0-.353-.14-.692-.39-.943l-5.878-5.877-.001-.001a4 4 0 0 0-2.838-1.179H10.44M12 30.667H8a4 4 0 0 1-4-4v-9.562a4 4 0 0 1-2.667-3.772v-4c0-.353.14-.692.39-.943l5.878-5.877.002-.001a4 4 0 0 1 2.837-1.179",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Kn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Xn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(qn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Un, {
              ...n,
              ref: r
            })]
          })
        }));
      Kn.displayName = "Store", Kn.categories = ["buildings", "navigation", "shopping"], Kn.tags = ["shop", "supermarket", "stand", "boutique", "building"], Kn.MD = Xn, Kn.LG = qn, Kn.XL = Un;
      const Wn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "m7.571 2.157-4.668 4a.67.67 0 0 0-.236.51v6a.667.667 0 0 0 .666.666h2V8.667a1.333 1.333 0 0 1 1.334-1.334h2.666a1.333 1.333 0 0 1 1.334 1.334v4.666h2a.667.667 0 0 0 .666-.666v-6a.67.67 0 0 0-.236-.51l-.003-.003-4.665-3.997a.67.67 0 0 0-.858 0m1.762 11.176V8.667H6.667v4.666zm3.334 1.334a2 2 0 0 0 2-2v-6a2 2 0 0 0-.707-1.527L9.295 1.142 9.29 1.14a2 2 0 0 0-2.582 0L2.04 5.14a2 2 0 0 0-.707 1.527v6a2 2 0 0 0 2 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $n = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "m11.357 3.235-7.002 6A1 1 0 0 0 4 10v9a1 1 0 0 0 1 1h3v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v7h3a1 1 0 0 0 1-1v-9a1 1 0 0 0-.355-.764l-.005-.005-6.994-5.994-.003-.002a1 1 0 0 0-1.286 0M14 20v-7h-4v7zm5 2a3 3 0 0 0 3-3v-9a3 3 0 0 0-1.06-2.29q-.003 0-.004-.002l-6.994-5.994-.005-.005a3 3 0 0 0-3.873 0L3.06 7.711A3 3 0 0 0 2 10v9a3 3 0 0 0 3 3z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "m15.142 4.313-9.336 8.001a1.33 1.33 0 0 0-.473 1.019v12a1.333 1.333 0 0 0 1.334 1.334h4v-9.334a2.667 2.667 0 0 1 2.666-2.666h5.334a2.666 2.666 0 0 1 2.666 2.666v9.334h4a1.333 1.333 0 0 0 1.334-1.334v-12a1.33 1.33 0 0 0-.473-1.019l-.007-.005-9.33-7.996a1.33 1.33 0 0 0-1.715 0m3.525 22.354v-9.334h-5.334v9.334zm6.666 2.666a4 4 0 0 0 4-4v-12a4 4 0 0 0-1.414-3.052l-9.33-7.996-.007-.006a4 4 0 0 0-5.164 0l-9.337 8.002a4 4 0 0 0-1.414 3.052v12a4 4 0 0 0 4 4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zn = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Wn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)($n, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Yn, {
              ...n,
              ref: r
            })]
          })
        }));
      Zn.displayName = "House", Zn.categories = ["buildings", "home"], Zn.tags = ["home", "living", "building", "residence", "architecture", "property", "homepage", "city"], Zn.MD = Wn, Zn.LG = $n, Zn.XL = Yn;
      const Qn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4 2a.667.667 0 0 0-.667.667v10.666c0 .368.299.667.667.667h1.333v-2c0-.368.299-.667.667-.667h4c.368 0 .667.299.667.667v2H12a.667.667 0 0 0 .667-.667V2.667A.667.667 0 0 0 12 2zm8 13.333a2 2 0 0 0 2-2V2.667a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10.666a2 2 0 0 0 2 2zM9.333 14v-1.333H6.667V14zM4.667 4c0-.368.298-.667.666-.667h.007a.667.667 0 0 1 0 1.334h-.007A.667.667 0 0 1 4.667 4m2.666 0c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H8A.667.667 0 0 1 7.333 4M10 4c0-.368.299-.667.667-.667h.006a.667.667 0 1 1 0 1.334h-.006A.667.667 0 0 1 10 4M4.667 6.667c0-.369.298-.667.666-.667h.007a.667.667 0 0 1 0 1.333h-.007a.667.667 0 0 1-.666-.666m2.666 0C7.333 6.298 7.632 6 8 6h.007a.667.667 0 0 1 0 1.333H8a.667.667 0 0 1-.667-.666m2.667 0c0-.369.299-.667.667-.667h.006a.667.667 0 1 1 0 1.333h-.006A.667.667 0 0 1 10 6.667M4.667 9.333c0-.368.298-.666.666-.666h.007a.667.667 0 1 1 0 1.333h-.007a.667.667 0 0 1-.666-.667m2.666 0c0-.368.299-.666.667-.666h.007a.667.667 0 1 1 0 1.333H8a.667.667 0 0 1-.667-.667m2.667 0c0-.368.299-.666.667-.666h.006a.667.667 0 1 1 0 1.333h-.006A.667.667 0 0 1 10 9.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Jn = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6 3a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h2v-3a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v3h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm12 20a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v16a3 3 0 0 0 3 3zm-4-2v-2h-4v2zM7 6a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m-8 4a1 1 0 0 1 1-1h.01a1 1 0 0 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1m-8 4a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m4 0a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H16a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ea = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 4c-.736 0-1.333.597-1.333 1.333v21.334C6.667 27.403 7.264 28 8 28h2.667v-4c0-.736.597-1.333 1.333-1.333h8c.736 0 1.333.597 1.333 1.333v4H24c.736 0 1.333-.597 1.333-1.333V5.333C25.333 4.597 24.736 4 24 4zm16 26.667a4 4 0 0 0 4-4V5.333a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v21.334a4 4 0 0 0 4 4zM18.667 28v-2.667h-5.334V28zM9.333 8c0-.736.597-1.333 1.334-1.333h.013a1.333 1.333 0 1 1 0 2.666h-.013A1.333 1.333 0 0 1 9.333 8m5.334 0c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H16A1.333 1.333 0 0 1 14.667 8M20 8c0-.736.597-1.333 1.333-1.333h.014a1.333 1.333 0 0 1 0 2.666h-.014A1.333 1.333 0 0 1 20 8M9.333 13.333c0-.736.597-1.333 1.334-1.333h.013a1.333 1.333 0 1 1 0 2.667h-.013a1.333 1.333 0 0 1-1.334-1.334m5.334 0c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.334m5.333 0c0-.736.597-1.333 1.333-1.333h.014a1.333 1.333 0 0 1 0 2.667h-.014A1.333 1.333 0 0 1 20 13.333M9.333 18.667c0-.737.597-1.334 1.334-1.334h.013a1.333 1.333 0 0 1 0 2.667h-.013a1.333 1.333 0 0 1-1.334-1.333m5.334 0c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 1 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333m5.333 0c0-.737.597-1.334 1.333-1.334h.014a1.333 1.333 0 0 1 0 2.667h-.014A1.333 1.333 0 0 1 20 18.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ta = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Qn, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Jn, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ea, {
              ...n,
              ref: r
            })]
          })
        }));
      ta.displayName = "Property", ta.categories = ["account", "buildings"], ta.tags = ["organization", "building", "house", "city", "GTAO", "structure"], ta.MD = Qn, ta.LG = Jn, ta.XL = ea;
      const ra = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.195 1.529c.26-.26.683-.26.943 0l2.667 2.666a.666.666 0 0 1 0 .943l-2.667 2.667a.667.667 0 1 1-.943-.943l1.529-1.529H2.667a.667.667 0 1 1 0-1.333h9.057L10.195 2.47a.667.667 0 0 1 0-.942m-4.39 6.666c.26.26.26.683 0 .943l-1.529 1.529h9.057a.667.667 0 0 1 0 1.333H4.276l1.529 1.528a.667.667 0 1 1-.943.943l-2.667-2.666a.667.667 0 0 1 0-.943l2.667-2.667c.26-.26.682-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        la = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414-1.414L17.586 8H4a1 1 0 0 1 0-2h13.586l-2.293-2.293a1 1 0 0 1 0-1.414m-6.586 10a1 1 0 0 1 0 1.414L6.414 16H20a1 1 0 1 1 0 2H6.414l2.293 2.293a1 1 0 1 1-1.414 1.414l-4-4a1 1 0 0 1 0-1.414l4-4a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        na = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M20.39 3.057c.521-.52 1.365-.52 1.886 0l5.334 5.334a1.333 1.333 0 0 1 0 1.885l-5.334 5.334a1.333 1.333 0 1 1-1.886-1.886l3.058-3.057H5.333a1.333 1.333 0 1 1 0-2.667h18.115L20.39 4.943a1.333 1.333 0 0 1 0-1.886m-8.78 13.334c.52.52.52 1.365 0 1.885l-3.058 3.057h18.115a1.333 1.333 0 0 1 0 2.667H8.552l3.058 3.057a1.333 1.333 0 1 1-1.886 1.886L4.39 23.61a1.333 1.333 0 0 1 0-1.886l5.333-5.333c.52-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        aa = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ra, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(la, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(na, {
              ...n,
              ref: r
            })]
          })
        }));
      aa.displayName = "ArrowRightLeft", aa.categories = ["arrows", "navigation"], aa.tags = ["bidirectional", "two-way", "2-way", "swap", "switch", "transaction", "reorder", "move", "<-", "->"], aa.MD = ra, aa.LG = la, aa.XL = na;
      const oa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.667 3.333c.368 0 .666.299.666.667v8A.667.667 0 1 1 4 12V4c0-.368.298-.667.667-.667m6.195.196a.667.667 0 1 1 .943.942L8.276 8l3.529 3.528a.667.667 0 1 1-.943.943l-4-4a.667.667 0 0 1 0-.942z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ia = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7 5a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V6a1 1 0 0 1 1-1m9.293.293a1 1 0 1 1 1.414 1.414L12.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        sa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.333 6.667c.737 0 1.334.597 1.334 1.333v16A1.333 1.333 0 0 1 8 24V8c0-.736.597-1.333 1.333-1.333m12.39.39a1.333 1.333 0 1 1 1.887 1.886L16.552 16l7.058 7.057a1.333 1.333 0 1 1-1.886 1.886l-8-8a1.333 1.333 0 0 1 0-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ca = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(oa, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ia, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(sa, {
              ...n,
              ref: r
            })]
          })
        }));
      ca.displayName = "ChevronFirst", ca.categories = ["arrows", "multimedia"], ca.tags = ["previous", "music"], ca.MD = oa, ca.LG = ia, ca.XL = sa;
      const da = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.195 3.529c.26-.26.683-.26.943 0l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 1 1-.943-.943L7.724 8 4.195 4.47a.667.667 0 0 1 0-.942m7.138 9.138a.667.667 0 0 1-.666-.667V4A.667.667 0 1 1 12 4v8a.667.667 0 0 1-.667.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ua = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L11.586 12 6.293 6.707a1 1 0 0 1 0-1.414M17 19a1 1 0 0 1-1-1V6a1 1 0 1 1 2 0v12a1 1 0 0 1-1 1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ha = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8.39 7.057c.521-.52 1.365-.52 1.886 0l8 8c.52.521.52 1.365 0 1.886l-8 8a1.333 1.333 0 1 1-1.885-1.886L15.448 16 8.39 8.943a1.333 1.333 0 0 1 0-1.886m14.277 18.276A1.333 1.333 0 0 1 21.333 24V8A1.333 1.333 0 0 1 24 8v16c0 .736-.597 1.333-1.333 1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fa = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(da, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ua, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ha, {
              ...n,
              ref: r
            })]
          })
        }));
      fa.displayName = "ChevronLast", fa.categories = ["arrows", "multimedia"], fa.tags = ["skip", "next", "music"], fa.MD = da, fa.LG = ua, fa.XL = ha;
      const va = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.195 2.195c.26-.26.683-.26.943 0L8 5.057l2.862-2.862a.667.667 0 1 1 .943.943L8.47 6.471a.667.667 0 0 1-.942 0L4.195 3.138a.667.667 0 0 1 0-.943M8 10.943l-2.862 2.862a.667.667 0 1 1-.943-.943L7.53 9.529c.26-.26.682-.26.942 0l3.334 3.333a.667.667 0 1 1-.943.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        pa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.293 3.293a1 1 0 0 1 1.414 0L12 7.586l4.293-4.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414M12 16.414l-4.293 4.293a1 1 0 0 1-1.414-1.414l5-5a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ga = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8.39 4.39c.521-.52 1.365-.52 1.886 0L16 10.115l5.724-5.723a1.333 1.333 0 0 1 1.886 1.885l-6.667 6.667c-.52.52-1.365.52-1.886 0L8.391 6.276a1.333 1.333 0 0 1 0-1.885M16 21.887l-5.724 5.724a1.333 1.333 0 1 1-1.885-1.886l6.666-6.667c.52-.52 1.365-.52 1.886 0l6.666 6.667a1.333 1.333 0 1 1-1.885 1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wa = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(va, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(pa, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ga, {
              ...n,
              ref: r
            })]
          })
        }));
      wa.displayName = "ChevronsDownUp", wa.categories = ["arrows"], wa.tags = ["collapse", "fold", "vertical"], wa.MD = va, wa.LG = pa, wa.XL = ga;
      const ma = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.529 2.195c.26-.26.682-.26.942 0l3.334 3.334a.667.667 0 1 1-.943.942L8 3.61 5.138 6.471a.667.667 0 0 1-.943-.942zM4.195 9.53c.26-.26.683-.26.943 0L8 12.39l2.862-2.861a.667.667 0 1 1 .943.942L8.47 13.805a.667.667 0 0 1-.942 0L4.195 10.47a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.293 3.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L12 5.414 7.707 9.707a1 1 0 0 1-1.414-1.414zm-5 11a1 1 0 0 1 1.414 0L12 18.586l4.293-4.293a1 1 0 0 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ba = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.057 4.39c.52-.52 1.365-.52 1.886 0l6.666 6.667a1.333 1.333 0 1 1-1.885 1.886L16 7.219l-5.724 5.724a1.333 1.333 0 1 1-1.885-1.886zM8.391 19.058c.52-.52 1.364-.52 1.885 0L16 24.781l5.724-5.724a1.333 1.333 0 1 1 1.886 1.886l-6.667 6.666c-.52.521-1.365.521-1.886 0l-6.666-6.666a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ja = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ma, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(xa, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ba, {
              ...n,
              ref: r
            })]
          })
        }));
      ja.displayName = "ChevronsUpDown", ja.categories = ["arrows"], ja.tags = ["expand", "unfold", "vertical"], ja.MD = ma, ja.LG = xa, ja.XL = ba;
      const ya = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.392 2.917a4 4 0 0 0-4.024 6.76.667.667 0 1 1-.878 1.004 5.333 5.333 0 1 1 8.455-6.014h.722a3.667 3.667 0 0 1 1.985 6.75.667.667 0 1 1-.722-1.121A2.334 2.334 0 0 0 11.667 6h-1.194a.67.67 0 0 1-.639-.476 4 4 0 0 0-2.442-2.607M8 8c.368 0 .667.299.667.667v3.724l1.528-1.529a.667.667 0 0 1 .943.943l-2.667 2.667a.667.667 0 0 1-.942 0l-2.667-2.667a.667.667 0 0 1 .943-.943l1.528 1.529V8.667C7.333 8.299 7.632 8 8 8",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ra = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.088 4.375A6 6 0 0 0 5.05 14.516a1 1 0 0 1-1.316 1.506A8 8 0 1 1 16.418 7H17.5a5.5 5.5 0 0 1 2.977 10.125 1 1 0 1 1-1.082-1.682A3.5 3.5 0 0 0 17.5 9h-1.79a1 1 0 0 1-.958-.714 6 6 0 0 0-3.664-3.911M12 12a1 1 0 0 1 1 1v5.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 1 1 1.414-1.414L11 18.586V13a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ma = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.783 5.833a8 8 0 0 0-8.048 13.522 1.333 1.333 0 0 1-1.756 2.007A10.667 10.667 0 1 1 21.891 9.333h1.442a7.334 7.334 0 0 1 3.97 13.5 1.333 1.333 0 0 1-1.443-2.242A4.667 4.667 0 0 0 23.334 12h-2.387c-.59 0-1.11-.387-1.278-.952a8 8 0 0 0-4.886-5.215M16 16c.736 0 1.333.597 1.333 1.333v7.448l3.058-3.057a1.333 1.333 0 1 1 1.885 1.886l-5.333 5.333a1.333 1.333 0 0 1-1.886 0l-5.333-5.334a1.333 1.333 0 1 1 1.886-1.885l3.057 3.057v-7.448c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        La = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ya, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ra, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Ma, {
              ...n,
              ref: r
            })]
          })
        }));
      La.displayName = "CloudDownload", La.categories = ["arrows", "files"], La.tags = ["import"], La.MD = ya, La.LG = Ra, La.XL = Ma;
      const Ca = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.463 2.945a4 4 0 0 0-4.32 6.521.667.667 0 0 1-.953.933 5.334 5.334 0 1 1 8.755-5.732h.721a3.667 3.667 0 0 1 2.038 6.716.667.667 0 1 1-.741-1.11A2.333 2.333 0 0 0 11.667 6h-1.194a.67.67 0 0 1-.639-.476 4 4 0 0 0-2.37-2.579m.066 5.25c.26-.26.682-.26.942 0l2.667 2.667a.667.667 0 1 1-.943.943l-1.528-1.529V14a.667.667 0 1 1-1.334 0v-3.724l-1.528 1.529a.667.667 0 1 1-.943-.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ea = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.195 4.418a6 6 0 0 0-6.48 9.782 1 1 0 0 1-1.43 1.399A8 8 0 1 1 16.418 7H17.5a5.5 5.5 0 0 1 3.055 10.074 1 1 0 0 1-1.11-1.664A3.5 3.5 0 0 0 17.5 9h-1.79a1 1 0 0 1-.958-.714 6 6 0 0 0-3.557-3.868M12 12a1 1 0 0 1 .707.293l4 4a1 1 0 0 1-1.414 1.414L13 15.414V21a1 1 0 1 1-2 0v-5.586l-2.293 2.293a1 1 0 1 1-1.414-1.414l4-4A1 1 0 0 1 12 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Aa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.927 5.89a8 8 0 0 0-8.64 13.043 1.333 1.333 0 0 1-1.907 1.865A10.667 10.667 0 1 1 21.89 9.333h1.443a7.334 7.334 0 0 1 4.074 13.432 1.333 1.333 0 0 1-1.48-2.218A4.666 4.666 0 0 0 23.333 12h-2.387c-.59 0-1.11-.387-1.278-.952a8 8 0 0 0-4.742-5.158m.13 10.5c.52-.52 1.365-.52 1.886 0l5.333 5.334a1.333 1.333 0 1 1-1.886 1.885l-3.057-3.057V28a1.333 1.333 0 1 1-2.666 0v-7.448L11.61 23.61a1.333 1.333 0 0 1-1.886-1.885z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pa = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ca, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ea, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Aa, {
              ...n,
              ref: r
            })]
          })
        }));
      Pa.displayName = "CloudUpload", Pa.categories = ["arrows", "files"], Pa.tags = ["file"], Pa.MD = Ca, Pa.LG = Ea, Pa.XL = Aa;
      const Ia = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10 2.667a.667.667 0 0 1 0-1.334h4c.368 0 .667.299.667.667v4a.667.667 0 0 1-1.334 0V3.61L9.805 7.137a.667.667 0 1 1-.943-.943l3.529-3.528zM7.138 8.862c.26.26.26.682 0 .943L3.61 13.333H6a.667.667 0 1 1 0 1.334H2A.667.667 0 0 1 1.333 14v-4a.667.667 0 0 1 1.334 0v2.39l3.528-3.528c.26-.26.683-.26.943 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Sa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15 4a1 1 0 1 1 0-2h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V5.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L18.586 4zm-5.707 9.293a1 1 0 0 1 1.414 1.414L5.414 20H9a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1v-6a1 1 0 1 1 2 0v3.586z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _a = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M20 5.333a1.333 1.333 0 1 1 0-2.666h8c.736 0 1.333.597 1.333 1.333v8a1.333 1.333 0 0 1-2.666 0V7.22l-7.058 7.057a1.333 1.333 0 1 1-1.885-1.885l7.057-7.058zm-5.724 12.39c.52.522.52 1.366 0 1.887L7.22 26.667H12a1.333 1.333 0 0 1 0 2.666H4A1.333 1.333 0 0 1 2.667 28v-8a1.333 1.333 0 1 1 2.666 0v4.781l7.057-7.057c.521-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        za = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ia, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Sa, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(_a, {
              ...n,
              ref: r
            })]
          })
        }));
      za.displayName = "Maximize2", za.categories = ["arrows", "layout", "design"], za.tags = ["fullscreen", "arrows", "expand"], za.MD = Ia, za.LG = Sa, za.XL = _a;
      const Ha = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.529 1.529a.667.667 0 1 1 .942.942L10.943 6h2.39a.667.667 0 0 1 0 1.333h-4a.667.667 0 0 1-.666-.666v-4a.667.667 0 1 1 1.333 0v2.39zM2 9.333c0-.368.299-.666.667-.666h4c.368 0 .666.298.666.666v4a.667.667 0 0 1-1.333 0v-2.39L2.471 14.47a.667.667 0 1 1-.942-.943L5.057 10h-2.39A.667.667 0 0 1 2 9.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ta = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M20.293 2.293a1 1 0 1 1 1.414 1.414L16.414 9H20a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V4a1 1 0 1 1 2 0v3.586zM3 14a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-3.586l-5.293 5.293a1 1 0 0 1-1.414-1.414L7.586 15H4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Da = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M27.057 3.057a1.333 1.333 0 1 1 1.886 1.886L21.886 12h4.78a1.333 1.333 0 1 1 0 2.667h-8a1.333 1.333 0 0 1-1.333-1.334v-8a1.333 1.333 0 1 1 2.667 0v4.781zM4 18.667c0-.737.597-1.334 1.333-1.334h8c.737 0 1.334.597 1.334 1.334v8a1.333 1.333 0 1 1-2.667 0v-4.781l-7.057 7.057a1.333 1.333 0 0 1-1.886-1.886L10.114 20h-4.78A1.333 1.333 0 0 1 4 18.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ba = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ha, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ta, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Da, {
              ...n,
              ref: r
            })]
          })
        }));
      Ba.displayName = "Minimize2", Ba.categories = ["arrows", "layout", "design"], Ba.tags = ["exit fullscreen", "arrows", "close", "shrink"], Ba.MD = Ha, Ba.LG = Ta, Ba.XL = Da;
      const Na = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0L4.23 3.288l.003.003 8.475 8.475.003.004 2.426 2.425a.667.667 0 1 1-.943.943l-1.976-1.976A6.6 6.6 0 0 1 8 14.667h-.003a7.17 7.17 0 0 1-4.954-2.014l-.008-.008-.368-.369V14a.667.667 0 0 1-1.334 0v-3.333c0-.369.299-.667.667-.667h3.333a.667.667 0 1 1 0 1.333H3.61l.365.365A5.83 5.83 0 0 0 8 13.333a5.27 5.27 0 0 0 3.27-1.12L3.786 4.73A5.27 5.27 0 0 0 2.667 8a.667.667 0 0 1-1.334 0c0-1.601.56-3.072 1.505-4.219L.862 1.805a.667.667 0 0 1 0-.943m5.008.821A6.5 6.5 0 0 1 8 1.333h.002a7.17 7.17 0 0 1 4.955 2.014l.008.008.368.369V2a.667.667 0 0 1 1.334 0v3.333A.667.667 0 0 1 14 6h-3.333a.667.667 0 0 1 0-1.333h1.723l-.364-.365a5.83 5.83 0 0 0-4.027-1.635c-.596 0-1.168.095-1.695.277a.667.667 0 0 1-.434-1.261M14 7.333c.368 0 .667.299.667.667 0 .738-.118 1.458-.35 2.13a.667.667 0 0 1-1.26-.434c.181-.527.276-1.1.276-1.696 0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ka = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l3.64 3.64.004.004 16.356 16.356a1 1 0 0 1-1.414 1.414l-2.965-2.965A9.9 9.9 0 0 1 12 22h-.004a10.75 10.75 0 0 1-7.431-3.021l-.012-.012L4 18.414V21a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H5.414l.547.547A8.75 8.75 0 0 0 12 20a7.9 7.9 0 0 0 4.905-1.68L5.68 7.094A7.9 7.9 0 0 0 4 12a1 1 0 1 1-2 0c0-2.402.84-4.608 2.258-6.328L1.293 2.707a1 1 0 0 1 0-1.414m7.511 1.232A9.8 9.8 0 0 1 12 2h.004a10.75 10.75 0 0 1 7.431 3.021l.012.012.553.553V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-.547-.547A8.75 8.75 0 0 0 11.999 4c-.894 0-1.753.143-2.543.415a1 1 0 1 1-.652-1.89m10.78 12.02c.273-.792.416-1.651.416-2.545a1 1 0 1 1 2 0 9.8 9.8 0 0 1-.524 3.196 1 1 0 0 1-1.892-.652",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Va = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0l4.852 4.852.007.007 16.948 16.949.008.007 4.851 4.852a1.333 1.333 0 1 1-1.885 1.885l-3.954-3.953A13.2 13.2 0 0 1 16 29.333h-.005a14.33 14.33 0 0 1-9.908-4.028l-.016-.015-.738-.738V28a1.333 1.333 0 1 1-2.666 0v-6.667C2.667 20.597 3.264 20 4 20h6.667a1.333 1.333 0 0 1 0 2.667H7.219l.729.729a11.67 11.67 0 0 0 8.055 3.27c2.474 0 4.741-.83 6.538-2.24L7.574 9.46A10.55 10.55 0 0 0 5.334 16a1.333 1.333 0 1 1-2.667 0c0-3.202 1.119-6.143 3.01-8.437L1.724 3.61a1.333 1.333 0 0 1 0-1.886m10.015 1.642c1.345-.463 2.786-.7 4.261-.7h.005a14.33 14.33 0 0 1 9.908 4.029l.017.016.737.737V4a1.333 1.333 0 0 1 2.666 0v6.667c0 .736-.597 1.333-1.333 1.333h-6.667a1.333 1.333 0 1 1 0-2.667h3.448l-.729-.729a11.67 11.67 0 0 0-8.054-3.27c-1.191 0-2.336.19-3.39.553a1.333 1.333 0 1 1-.869-2.52M28 14.666c.736 0 1.333.598 1.333 1.334 0 1.475-.236 2.916-.699 4.26a1.333 1.333 0 1 1-2.521-.868c.363-1.054.554-2.2.554-3.392 0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oa = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Na, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ka, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Va, {
              ...n,
              ref: r
            })]
          })
        }));
      Oa.displayName = "RefreshCwOff", Oa.categories = ["arrows"], Oa.tags = ["rotate", "reload", "rerun", "synchronise", "synchronize", "arrows", "circular", "cycle", "cancel", "no", "stop", "error", "disconnect", "ignore"], Oa.MD = Na, Oa.LG = ka, Oa.XL = Va;
      const Ga = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2.667A5.333 5.333 0 1 0 13.333 8a.667.667 0 0 1 1.334 0A6.666 6.666 0 1 1 8 1.333a7.16 7.16 0 0 1 4.955 2.013l.01.01.368.368V2a.667.667 0 0 1 1.334 0v3.333A.667.667 0 0 1 14 6h-3.333a.667.667 0 0 1 0-1.333h1.723l-.363-.364A5.83 5.83 0 0 0 8 2.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 4a8 8 0 1 0 8 8 1 1 0 1 1 2 0A10 10 0 1 1 12 2c2.786 0 5.442 1.105 7.433 3.02l.014.013.553.553V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-.546-.546C16.412 4.892 14.251 4 12 4",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 5.333A10.667 10.667 0 1 0 26.667 16a1.333 1.333 0 1 1 2.666 0A13.334 13.334 0 1 1 16 2.667c3.714 0 7.256 1.473 9.91 4.025l.02.018.737.738V4a1.333 1.333 0 1 1 2.666 0v6.667c0 .736-.597 1.333-1.333 1.333h-6.667a1.333 1.333 0 0 1 0-2.667h3.448l-.728-.727C21.883 6.523 19.001 5.333 16 5.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qa = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ga, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Fa, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Xa, {
              ...n,
              ref: r
            })]
          })
        }));
      qa.displayName = "Replay", qa.categories = ["arrows", "design", "photography"], qa.tags = ["arrow", "right", "clockwise", "refresh", "reload", "rerun", "redo"], qa.MD = Ga, qa.LG = Fa, qa.XL = Xa;
      const Ua = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.529 2.862c.26-.26.682-.26.942 0l4.667 4.667a.667.667 0 0 1-.943.942L8.667 4.943v7.724a.667.667 0 1 1-1.334 0V4.943L3.805 8.47a.667.667 0 1 1-.943-.942z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ka = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1-1.414 1.414L13 7.414V19a1 1 0 1 1-2 0V7.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.057 5.724c.52-.52 1.365-.52 1.886 0l9.333 9.333a1.333 1.333 0 1 1-1.886 1.886l-7.057-7.057v15.447a1.333 1.333 0 0 1-2.666 0V9.886l-7.058 7.057a1.333 1.333 0 0 1-1.885-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $a = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ua, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ka, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Wa, {
              ...n,
              ref: r
            })]
          })
        }));
      $a.displayName = "ArrowUp", $a.categories = ["arrows", "navigation"], $a.tags = ["forward", "direction", "north", "increase"], $a.MD = Ua, $a.LG = Ka, $a.XL = Wa;
      const Ya = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2.667c.368 0 .667.298.667.666v7.724l3.528-3.528a.667.667 0 1 1 .943.942l-4.667 4.667a.667.667 0 0 1-.942 0L2.862 8.471a.667.667 0 1 1 .943-.942l3.528 3.528V3.333c0-.368.299-.666.667-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Za = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 4a1 1 0 0 1 1 1v11.586l5.293-5.293a1 1 0 0 1 1.414 1.414l-7 7a1 1 0 0 1-1.414 0l-7-7a1 1 0 1 1 1.414-1.414L11 16.586V5a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qa = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 5.333c.736 0 1.333.597 1.333 1.334v15.447l7.058-7.057a1.333 1.333 0 1 1 1.885 1.886l-9.333 9.333c-.52.52-1.365.52-1.886 0l-9.333-9.333a1.333 1.333 0 1 1 1.886-1.886l7.057 7.057V6.667c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ja = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ya, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Za, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Qa, {
              ...n,
              ref: r
            })]
          })
        }));
      Ja.displayName = "ArrowDown", Ja.categories = ["arrows", "navigation"], Ja.tags = ["backwards", "reverse", "direction", "south", "Down", "Navigation", "Decrease"], Ja.MD = Ya, Ja.LG = Za, Ja.XL = Qa;
      const eo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8.471 2.862c.26.26.26.682 0 .943L4.943 7.333h7.724a.667.667 0 1 1 0 1.334H4.943l3.528 3.528a.667.667 0 0 1-.942.943L2.862 8.471a.667.667 0 0 1 0-.942l4.667-4.667c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        to = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12.707 4.293a1 1 0 0 1 0 1.414L7.414 11H19a1 1 0 1 1 0 2H7.414l5.293 5.293a1 1 0 0 1-1.414 1.414l-7-7a1 1 0 0 1 0-1.414l7-7a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ro = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16.943 5.724c.52.52.52 1.365 0 1.885l-7.057 7.058h15.447a1.333 1.333 0 1 1 0 2.666H9.886l7.057 7.057a1.333 1.333 0 0 1-1.886 1.886l-9.333-9.333a1.333 1.333 0 0 1 0-1.886l9.333-9.333c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        lo = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(eo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(to, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ro, {
              ...n,
              ref: r
            })]
          })
        }));
      lo.displayName = "ArrowLeft", lo.categories = ["arrows", "navigation"], lo.tags = ["previous", "back", "direction", "west", "<-", "Left", "Navigation", "Back"], lo.MD = eo, lo.LG = to, lo.XL = ro;
      const no = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.529 2.862c.26-.26.682-.26.942 0l4.667 4.667c.26.26.26.682 0 .942l-4.667 4.667a.667.667 0 0 1-.942-.943l3.528-3.528H3.333a.667.667 0 0 1 0-1.334h7.724L7.53 3.805a.667.667 0 0 1 0-.943",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ao = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.293 4.293a1 1 0 0 1 1.414 0l7 7a1 1 0 0 1 0 1.414l-7 7a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-5.293-5.293a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.057 5.724c.52-.52 1.365-.52 1.886 0l9.333 9.333c.52.52.52 1.365 0 1.886l-9.333 9.333a1.333 1.333 0 0 1-1.886-1.886l7.057-7.057H6.667a1.333 1.333 0 0 1 0-2.666h15.447l-7.057-7.058a1.333 1.333 0 0 1 0-1.885",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        io = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(no, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ao, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(oo, {
              ...n,
              ref: r
            })]
          })
        }));
      io.displayName = "ArrowRight", io.categories = ["arrows", "navigation"], io.tags = ["forward", "next", "direction", "east", "->"], io.MD = no, io.LG = ao, io.XL = oo;
      const so = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.195 2.195c.26-.26.683-.26.943 0l2.667 2.667a.667.667 0 1 1-.943.943L5.333 4.276v9.057a.667.667 0 1 1-1.333 0V4.276L2.471 5.805a.667.667 0 1 1-.942-.943zM11.333 2c.369 0 .667.298.667.667v9.057l1.529-1.529a.667.667 0 1 1 .942.943l-2.666 2.667a.667.667 0 0 1-.943 0l-2.667-2.667a.667.667 0 1 1 .943-.943l1.529 1.529V2.667c0-.369.298-.667.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        co = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.293 3.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1-1.414 1.414L8 6.414V20a1 1 0 1 1-2 0V6.414L3.707 8.707a1 1 0 0 1-1.414-1.414zM17 3a1 1 0 0 1 1 1v13.586l2.293-2.293a1 1 0 0 1 1.414 1.414l-4 4a1 1 0 0 1-1.414 0l-4-4a1 1 0 0 1 1.414-1.414L16 17.586V4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        uo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8.39 4.39c.521-.52 1.365-.52 1.886 0l5.333 5.334a1.333 1.333 0 0 1-1.885 1.886l-3.057-3.058v18.115a1.333 1.333 0 0 1-2.667 0V8.552L4.943 11.61a1.333 1.333 0 1 1-1.886-1.886zM22.667 4C23.403 4 24 4.597 24 5.333v18.115l3.057-3.058a1.333 1.333 0 1 1 1.886 1.886l-5.334 5.334c-.52.52-1.365.52-1.885 0l-5.334-5.334a1.333 1.333 0 1 1 1.886-1.886l3.057 3.058V5.333c0-.736.597-1.333 1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ho = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(so, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(co, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(uo, {
              ...n,
              ref: r
            })]
          })
        }));
      ho.displayName = "ArrowUpDown", ho.categories = ["arrows", "navigation"], ho.tags = ["bidirectional", "two-way", "2-way", "swap", "switch", "network", "mobile data", "internet", "sort", "reorder", "move", "Sortable", "Control", "Filter", "Sort"], ho.MD = so, ho.LG = co, ho.XL = uo;
      const fo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.529 5.529c.26-.26.682-.26.942 0l4 4a.667.667 0 1 1-.942.942L8 6.943 4.471 10.47a.667.667 0 1 1-.942-.942z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.293 8.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 10.414l-5.293 5.293a1 1 0 0 1-1.414-1.414z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        po = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.057 11.057c.52-.52 1.365-.52 1.886 0l8 8a1.333 1.333 0 1 1-1.886 1.886L16 13.886l-7.057 7.057a1.333 1.333 0 0 1-1.886-1.886z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        go = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(fo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(vo, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(po, {
              ...n,
              ref: r
            })]
          })
        }));
      go.displayName = "ChevronUp", go.categories = ["arrows", "navigation", "math", "gaming"], go.tags = ["caret", "keyboard", "mac", "control", "ctrl", "superscript", "exponential", "power", "ahead", "fast", "^", "dropdown", "up", "direction", "top"], go.MD = fo, go.LG = vo, go.XL = po;
      const wo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.529 5.529c.26-.26.682-.26.942 0L8 9.057l3.528-3.528a.667.667 0 1 1 .943.942l-4 4a.667.667 0 0 1-.942 0l-4-4a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.293 8.293a1 1 0 0 1 1.414 0L12 13.586l5.293-5.293a1 1 0 1 1 1.414 1.414l-6 6a1 1 0 0 1-1.414 0l-6-6a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.057 11.057c.521-.52 1.365-.52 1.886 0L16 18.114l7.057-7.057a1.333 1.333 0 1 1 1.886 1.886l-8 8c-.52.52-1.365.52-1.886 0l-8-8a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bo = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(wo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(mo, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(xo, {
              ...n,
              ref: r
            })]
          })
        }));
      bo.displayName = "ChevronDown", bo.categories = ["arrows", "navigation", "gaming"], bo.tags = ["backwards", "reverse", "slow", "dropdown", "down", "direction", "bottom"], bo.MD = wo, bo.LG = mo, bo.XL = xo;
      const jo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10.471 3.529c.26.26.26.682 0 .942L6.943 8l3.528 3.528a.667.667 0 0 1-.942.943l-4-4a.667.667 0 0 1 0-.942l4-4c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.707 5.293a1 1 0 0 1 0 1.414L10.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ro = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M20.943 7.057c.52.521.52 1.365 0 1.886L13.886 16l7.057 7.057a1.333 1.333 0 1 1-1.886 1.886l-8-8a1.333 1.333 0 0 1 0-1.886l8-8c.52-.52 1.365-.52 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mo = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(jo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(yo, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Ro, {
              ...n,
              ref: r
            })]
          })
        }));
      Mo.displayName = "ChevronLeft", Mo.categories = ["arrows", "navigation"], Mo.tags = ["back", "previous", "less than", "fewer", "menu", "left", "direction", "side"], Mo.MD = jo, Mo.LG = yo, Mo.XL = Ro;
      const Lo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.529 3.529c.26-.26.682-.26.942 0l4 4c.26.26.26.682 0 .942l-4 4a.667.667 0 1 1-.942-.943L9.057 8 5.53 4.47a.667.667 0 0 1 0-.942",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Co = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L13.586 12 8.293 6.707a1 1 0 0 1 0-1.414",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Eo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.057 7.057c.52-.52 1.365-.52 1.886 0l8 8c.52.521.52 1.365 0 1.886l-8 8a1.333 1.333 0 1 1-1.886-1.886L18.114 16l-7.057-7.057a1.333 1.333 0 0 1 0-1.886",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ao = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Lo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Co, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Eo, {
              ...n,
              ref: r
            })]
          })
        }));
      Ao.displayName = "ChevronRight", Ao.categories = ["arrows", "navigation", "math", "development"], Ao.tags = ["forward", "next", "more than", "greater", "menu", "code", "coding", "command line", "terminal", "prompt", "shell", "right", "direction", "side"], Ao.MD = Lo, Ao.LG = Co, Ao.XL = Eo;
      const Po = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.471 2.195c.26.26.26.683 0 .943L4.276 5.333h5.39a4.334 4.334 0 0 1 0 8.667H7.334a.667.667 0 0 1 0-1.333h2.334a3 3 0 0 0 0-6h-5.39L6.47 8.862a.667.667 0 0 1-.942.943L2.195 6.47a.667.667 0 0 1 0-.942L5.53 2.195c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Io = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.707 3.293a1 1 0 0 1 0 1.414L6.414 8H14.5a6.5 6.5 0 1 1 0 13H11a1 1 0 1 1 0-2h3.5a4.501 4.501 0 0 0 1.722-8.657A4.5 4.5 0 0 0 14.5 10H6.414l3.293 3.293a1 1 0 0 1-1.414 1.414l-5-5a1 1 0 0 1 0-1.414l5-5a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        So = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12.943 4.39c.52.521.52 1.365 0 1.886l-4.39 4.39h10.78A8.665 8.665 0 0 1 22.65 27.34a8.7 8.7 0 0 1-3.317.66h-4.666a1.333 1.333 0 1 1 0-2.667h4.666a6 6 0 1 0 0-12H8.553l4.39 4.39a1.333 1.333 0 1 1-1.886 1.887l-6.666-6.667a1.333 1.333 0 0 1 0-1.886l6.666-6.666c.52-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _o = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Po, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Io, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(So, {
              ...n,
              ref: r
            })]
          })
        }));
      _o.displayName = "Undo", _o.categories = ["text", "arrows"], _o.tags = ["redo", "rerun", "history", "back", "return", "reverse", "revert", "direction", "u-turn", "undo", "arrow", "navigation"], _o.MD = Po, _o.LG = Io, _o.XL = So;
      const zo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.529 1.529c.26-.26.682-.26.942 0l3.334 3.333a.667.667 0 0 1-.943.943L8.667 3.609V10a.667.667 0 0 1-1.334 0V3.61L5.138 5.805a.667.667 0 1 1-.943-.943zM2 9.333c.368 0 .667.299.667.667v2.667a.667.667 0 0 0 .666.666h9.334a.667.667 0 0 0 .666-.666V10a.667.667 0 0 1 1.334 0v2.667a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V10c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ho = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.293 2.293a1 1 0 0 1 1.414 0l5 5a1 1 0 0 1-1.414 1.414L13 5.414V15a1 1 0 1 1-2 0V5.414L7.707 8.707a1 1 0 0 1-1.414-1.414zM3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        To = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.057 3.057c.52-.52 1.365-.52 1.886 0l6.666 6.667a1.333 1.333 0 0 1-1.885 1.886l-4.39-4.391V20a1.333 1.333 0 0 1-2.667 0V7.22l-4.39 4.39A1.333 1.333 0 1 1 8.39 9.725zM4 18.667c.736 0 1.333.597 1.333 1.333v5.333a1.333 1.333 0 0 0 1.334 1.334h18.666a1.333 1.333 0 0 0 1.334-1.334V20a1.333 1.333 0 0 1 2.666 0v5.333a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4V20c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Do = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(zo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ho, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(To, {
              ...n,
              ref: r
            })]
          })
        }));
      Do.displayName = "Upload", Do.categories = ["arrows", "files"], Do.tags = ["file", "up", "file", "share"], Do.MD = zo, Do.LG = Ho, Do.XL = To;
      const Bo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "17",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 17",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2.333c.368 0 .667.299.667.667v6.39l2.195-2.195a.667.667 0 1 1 .943.943L8.47 11.471a.667.667 0 0 1-.942 0L4.195 8.138a.667.667 0 1 1 .943-.943L7.333 9.39V3c0-.368.299-.667.667-.667m-6 8c.368 0 .667.299.667.667v2.667a.667.667 0 0 0 .666.666h9.334a.667.667 0 0 0 .666-.666V11a.667.667 0 0 1 1.334 0v2.667a2 2 0 0 1-2 2H3.333a2 2 0 0 1-2-2V11c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        No = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 2a1 1 0 0 1 1 1v9.586l3.293-3.293a1 1 0 1 1 1.414 1.414l-5 5a1 1 0 0 1-1.414 0l-5-5a1 1 0 0 1 1.414-1.414L11 12.586V3a1 1 0 0 1 1-1M3 14a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-4a1 1 0 1 1 2 0v4a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ko = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 2.667c.736 0 1.333.597 1.333 1.333v12.781l4.39-4.39a1.333 1.333 0 1 1 1.886 1.885l-6.666 6.667c-.52.52-1.365.52-1.886 0L8.39 14.276a1.333 1.333 0 1 1 1.886-1.885l4.39 4.39V4.001c0-.737.598-1.334 1.334-1.334m-12 16c.736 0 1.333.597 1.333 1.333v5.333a1.333 1.333 0 0 0 1.334 1.334h18.666a1.333 1.333 0 0 0 1.334-1.334V20a1.333 1.333 0 0 1 2.666 0v5.333a4 4 0 0 1-4 4H6.667a4 4 0 0 1-4-4V20c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vo = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Bo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(No, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ko, {
              ...n,
              ref: r
            })]
          })
        }));
      Vo.displayName = "Download", Vo.categories = ["arrows", "files"], Vo.tags = ["import", "export", "save", "down"], Vo.MD = Bo, Vo.LG = No, Vo.XL = ko;
      const Oo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.667 5.333a.667.667 0 1 1 0-1.333h5.666c.368 0 .667.298.667.667v5.666a.667.667 0 0 1-1.333 0V6.276l-5.529 5.529a.667.667 0 1 1-.943-.943l5.529-5.529z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Go = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.5 7a1 1 0 0 1 1-1H17a1 1 0 0 1 1 1v8.5a1 1 0 1 1-2 0V9.414l-8.293 8.293a1 1 0 0 1-1.414-1.414L14.586 8H8.5a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.333 10.667a1.333 1.333 0 0 1 0-2.667h11.334C23.403 8 24 8.597 24 9.333v11.334a1.333 1.333 0 0 1-2.667 0v-8.115L10.276 23.61a1.333 1.333 0 1 1-1.885-1.886l11.057-11.057z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xo = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Oo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Go, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Fo, {
              ...n,
              ref: r
            })]
          })
        }));
      Xo.displayName = "ExternalLink", Xo.categories = ["arrows", "text", "social"], Xo.tags = ["outbound", "share", "link", "new tab", "new window", "open", "URL", "hyperlink", "external"], Xo.MD = Oo, Xo.LG = Go, Xo.XL = Fo;
      const qo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.999 2.667A5.333 5.333 0 0 0 2.667 8a.667.667 0 0 1-1.334 0A6.667 6.667 0 0 1 8 1.333h.002a7.17 7.17 0 0 1 4.955 2.014l.008.008.368.369V2a.667.667 0 0 1 1.334 0v3.333A.667.667 0 0 1 14 6h-3.333a.667.667 0 0 1 0-1.333h1.723l-.364-.365a5.83 5.83 0 0 0-4.027-1.635m3.772 9.104c1-1 1.562-2.356 1.562-3.771a.667.667 0 0 1 1.334 0A6.667 6.667 0 0 1 8 14.667h-.003a7.17 7.17 0 0 1-4.954-2.014l-.008-.008-.368-.369V14a.667.667 0 1 1-1.334 0v-3.333c0-.368.299-.667.667-.667h3.333a.667.667 0 0 1 0 1.333H3.61l.365.365A5.83 5.83 0 0 0 8 13.333c1.414 0 2.77-.562 3.77-1.562",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Uo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.998 4A8 8 0 0 0 4 12a1 1 0 1 1-2 0A10 10 0 0 1 12 2h.004a10.75 10.75 0 0 1 7.431 3.021l.012.012.553.553V3a1 1 0 1 1 2 0v5a1 1 0 0 1-1 1h-5a1 1 0 1 1 0-2h2.586l-.547-.547A8.75 8.75 0 0 0 11.999 4m5.659 13.657A8 8 0 0 0 20 12a1 1 0 1 1 2 0 10 10 0 0 1-10 10h-.004a10.75 10.75 0 0 1-7.431-3.021l-.012-.012L4 18.414V21a1 1 0 1 1-2 0v-5a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H5.414l.547.547A8.75 8.75 0 0 0 12 20a8 8 0 0 0 5.656-2.343",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ko = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.998 5.333A10.667 10.667 0 0 0 5.333 16a1.333 1.333 0 0 1-2.666 0A13.333 13.333 0 0 1 16 2.667h.005a14.33 14.33 0 0 1 9.908 4.028l.017.015.737.738V4a1.333 1.333 0 1 1 2.666 0v6.667c0 .736-.597 1.333-1.333 1.333h-6.667a1.333 1.333 0 0 1 0-2.667h3.448l-.729-.729a11.67 11.67 0 0 0-8.054-3.27m7.545 18.21c2-2.001 3.124-4.714 3.124-7.543a1.333 1.333 0 1 1 2.666 0A13.333 13.333 0 0 1 16 29.333h-.005a14.33 14.33 0 0 1-9.908-4.028l-.016-.016-.738-.737V28a1.333 1.333 0 0 1-2.666 0v-6.667C2.667 20.597 3.264 20 4 20h6.667a1.333 1.333 0 1 1 0 2.667H7.219l.729.729a11.67 11.67 0 0 0 8.055 3.27c2.828 0 5.54-1.124 7.54-3.124",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wo = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(qo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Uo, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Ko, {
              ...n,
              ref: r
            })]
          })
        }));
      Wo.displayName = "RefreshCw", Wo.categories = ["arrows"], Wo.tags = ["rotate", "reload", "rerun", "synchronise", "synchronize", "arrows", "circular", "cycle", "loop", "repeat", "sync", "update", "reset", "restore"], Wo.MD = qo, Wo.LG = Uo, Wo.XL = Ko;
      const $o = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 0 0-3.991 10.48A2 2 0 0 1 6 10.666h4a2 2 0 0 1 1.991 1.814A6 6 0 0 0 8 2m2.667 11.376v-.71A.667.667 0 0 0 10 12H6a.667.667 0 0 0-.667.666v.71c.804.4 1.71.624 2.667.624.958 0 1.863-.225 2.667-.624M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8M8 5.333A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0-2.667M5.333 6.667a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 0 0-5.987 15.72A3 3 0 0 1 9 16h6a3 3 0 0 1 2.987 2.72A9 9 0 0 0 12 3m4 17.065V19a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v1.064A8.96 8.96 0 0 0 12 21a8.96 8.96 0 0 0 4-.936M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11-4a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16a11.97 11.97 0 0 0 4.017 8.96A4 4 0 0 1 12 21.334h8a4 4 0 0 1 3.983 3.626A11.97 11.97 0 0 0 28 16c0-6.627-5.373-12-12-12m5.333 22.753v-1.42A1.333 1.333 0 0 0 20 24h-8a1.333 1.333 0 0 0-1.333 1.334v1.419A11.95 11.95 0 0 0 16 28a11.95 11.95 0 0 0 5.333-1.247M1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16M16 10.667A2.667 2.667 0 1 0 16 16a2.667 2.667 0 0 0 0-5.333m-5.333 2.667a5.333 5.333 0 1 1 10.666 0 5.333 5.333 0 0 1-10.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qo = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)($o, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Yo, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Zo, {
              ...n,
              ref: r
            })]
          })
        }));
      Qo.displayName = "CirclePerson", Qo.categories = ["account"], Qo.tags = ["person", "account", "contact"], Qo.MD = $o, Qo.LG = Yo, Qo.XL = Zo;
      const Jo = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.002 1.048C3.506.846 4.258.667 5.333.667c1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a1.8 1.8 0 0 0 .375-.2A.667.667 0 0 1 14 2v8c0 .177-.07.346-.195.471L13.333 10l.472.471-.002.002-.001.001-.003.003-.008.007a1 1 0 0 1-.066.06 2 2 0 0 1-.157.115 3 3 0 0 1-.57.293c-.504.202-1.256.381-2.331.381-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.287q-.095.038-.165.072v4.308a.667.667 0 1 1-1.333 0V2c0-.177.07-.347.195-.472L2.667 2l-.472-.472.002-.001.001-.001.003-.004.007-.006.067-.06q.059-.048.157-.115c.132-.088.319-.193.57-.293m.331 1.31v6.573c.485-.15 1.14-.264 2-.264 1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a2 2 0 0 0 .165-.073V3.07c-.485.149-1.14.264-2 .264-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.286q-.095.038-.165.074",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ei = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.504 1.572C5.259 1.269 6.387 1 8 1c1.693 0 3.097.561 4.316 1.05l.055.022C13.64 2.579 14.72 3 16 3c1.387 0 2.26-.23 2.754-.428.248-.1.405-.192.488-.248a1 1 0 0 0 .073-.053A1 1 0 0 1 21 3v12a1 1 0 0 1-.293.707l.075-.084-.076.085-.001.001-.002.002-.005.005-.01.01-.027.025-.074.064a3 3 0 0 1-.235.173c-.198.132-.479.29-.856.44-.755.303-1.883.572-3.496.572-1.694 0-3.097-.561-4.316-1.05l-.055-.021C10.36 15.42 9.28 15 8 15c-1.387 0-2.26.23-2.754.428a3 3 0 0 0-.246.11V22a1 1 0 1 1-2 0V3a1 1 0 0 1 .293-.707l.02-.02-.02.019.002-.001.002-.002.005-.005.01-.01a2 2 0 0 1 .101-.089q.088-.073.235-.173c.198-.132.479-.29.856-.44M5 3.538v9.859C5.728 13.173 6.708 13 8 13c1.693 0 3.097.562 4.316 1.05l.055.021C13.64 14.58 14.72 15 16 15c1.387 0 2.26-.23 2.754-.428q.142-.058.246-.11V4.603c-.728.224-1.708.397-3 .397-1.693 0-3.097-.561-4.316-1.05l-.055-.022C10.36 3.421 9.28 3 8 3c-1.387 0-2.26.23-2.754.428a3 3 0 0 0-.246.11",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ti = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.005 2.096c1.008-.404 2.511-.763 4.662-.763 2.258 0 4.129.75 5.754 1.4l.074.03C18.186 3.438 19.625 4 21.333 4c1.85 0 3.013-.308 3.672-.571.33-.132.54-.256.651-.33q.083-.057.098-.07A1.333 1.333 0 0 1 28 4v16c0 .354-.14.693-.39.943l.1-.112-.102.113-.001.002-.003.003-.007.006-.014.014a2 2 0 0 1-.134.118 4 4 0 0 1-.314.23 6.2 6.2 0 0 1-1.14.588c-1.008.403-2.511.762-4.662.762-2.258 0-4.129-.749-5.754-1.4l-.074-.029C13.814 20.562 12.375 20 10.667 20c-1.85 0-3.013.308-3.672.572q-.19.076-.328.146v8.616a1.333 1.333 0 1 1-2.667 0V4c0-.353.14-.693.39-.943l.027-.025-.025.024.001-.001.003-.003.007-.007.014-.013a2 2 0 0 1 .134-.118q.117-.099.314-.232a6.2 6.2 0 0 1 1.14-.586m.662 2.622v13.145c.97-.3 2.277-.53 4-.53 2.258 0 4.129.75 5.754 1.4l.074.03c1.691.675 3.13 1.237 4.838 1.237 1.85 0 3.013-.308 3.672-.571q.19-.076.328-.146V6.138c-.97.299-2.277.529-4 .529-2.258 0-4.129-.749-5.754-1.4l-.074-.029C13.814 4.562 12.375 4 10.667 4c-1.85 0-3.013.308-3.672.571q-.19.076-.328.147",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ri = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Jo, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ei, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ti, {
              ...n,
              ref: r
            })]
          })
        }));
      ri.displayName = "Flag", ri.categories = ["account", "social"], ri.tags = ["report"], ri.MD = Jo, ri.LG = ei, ri.XL = ti;
      const li = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l1.333 1.333 8 8 .001.001 3.999 4a.667.667 0 1 1-.943.942l-3.812-3.813c-1.004-.055-1.85-.394-2.593-.691l-.038-.015c-.845-.338-1.565-.62-2.419-.62-.925 0-1.506.155-1.835.287q-.095.038-.165.072v4.308a.667.667 0 1 1-1.333 0V2.943L.862 1.805a.667.667 0 0 1 0-.943m2.471 3.414v4.655c.485-.15 1.14-.264 2-.264 1.13 0 2.065.374 2.877.699l.038.015q.16.065.316.125zm1.334-2.943c0-.368.298-.666.666-.666 1.13 0 2.065.374 2.877.699l.038.015c.845.338 1.565.619 2.419.619.925 0 1.506-.154 1.835-.286a1.8 1.8 0 0 0 .375-.2A.667.667 0 0 1 14 2v7.333a.667.667 0 0 1-1.333 0V3.07c-.485.149-1.14.264-2 .264-1.13 0-2.065-.374-2.877-.7l-.038-.014c-.845-.338-1.565-.62-2.419-.62a.667.667 0 0 1-.666-.666",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ni = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-5.719-5.719c-1.505-.083-2.774-.591-3.89-1.037l-.055-.023C10.36 15.422 9.28 15 8 15c-1.387 0-2.26.23-2.754.428a3 3 0 0 0-.246.11V22a1 1 0 1 1-2 0V4.414L1.293 2.707a1 1 0 0 1 0-1.414M5 6.414v6.983C5.728 13.173 6.708 13 8 13c1.693 0 3.097.562 4.316 1.05l.055.021.474.189zM7 2a1 1 0 0 1 1-1c1.693 0 3.097.561 4.316 1.05l.055.022C13.64 2.579 14.72 3 16 3c1.387 0 2.26-.23 2.754-.428.248-.1.405-.192.488-.248a1 1 0 0 0 .073-.053A1 1 0 0 1 21 3v11a1 1 0 1 1-2 0V4.603c-.728.224-1.708.397-3 .397-1.693 0-3.097-.561-4.316-1.05l-.055-.022C10.36 3.421 9.28 3 8 3a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ai = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.886 0L6.276 4.39v.001L22.275 20.39l.004.004 7.998 7.998a1.333 1.333 0 1 1-1.885 1.885l-7.626-7.625c-2.006-.11-3.699-.788-5.186-1.383l-.074-.03c-1.69-.676-3.13-1.238-4.838-1.238-1.85 0-3.013.308-3.672.572q-.19.076-.328.146v8.616a1.333 1.333 0 1 1-2.667 0V5.886L1.724 3.61a1.333 1.333 0 0 1 0-1.886m4.943 6.828v9.31c.97-.298 2.277-.528 4-.528 2.258 0 4.129.748 5.754 1.399l.074.03.632.25zm2.666-5.885c0-.737.597-1.333 1.334-1.333 2.258 0 4.129.748 5.754 1.398l.074.03C18.186 3.44 19.625 4 21.333 4c1.85 0 3.013-.308 3.672-.571.33-.132.54-.256.651-.33q.083-.057.098-.07A1.334 1.334 0 0 1 28 4v14.667a1.333 1.333 0 1 1-2.667 0V6.137c-.97.3-2.277.53-4 .53-2.258 0-4.129-.749-5.754-1.4l-.074-.029C13.815 4.562 12.375 4 10.667 4a1.333 1.333 0 0 1-1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oi = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(li, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ni, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ai, {
              ...n,
              ref: r
            })]
          })
        }));
      oi.displayName = "FlagOff", oi.categories = ["account", "social"], oi.tags = ["unflag"], oi.MD = li, oi.LG = ni, oi.XL = ai;
      const ii = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a4.667 4.667 0 0 0-4.667 4.667c0 1.439.811 2.99 1.865 4.376C6.218 12.38 7.386 13.465 8 13.998c.614-.533 1.783-1.617 2.802-2.955 1.053-1.385 1.865-2.937 1.865-4.376A4.667 4.667 0 0 0 8 2m-4.243.424A6 6 0 0 1 14 6.667c0 1.889-1.035 3.735-2.137 5.183-1.118 1.469-2.39 2.637-3.027 3.187l-.035.028a1.33 1.33 0 0 1-1.637-.028c-.637-.55-1.909-1.718-3.026-3.187C3.035 10.402 2 8.556 2 6.667a6 6 0 0 1 1.757-4.243M8 5.334A1.333 1.333 0 1 0 8 8a1.333 1.333 0 0 0 0-2.667M5.333 6.666a2.667 2.667 0 1 1 5.334 0 2.667 2.667 0 0 1-5.334 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        si = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a7 7 0 0 0-7 7c0 2.16 1.217 4.487 2.798 6.564 1.528 2.008 3.282 3.634 4.202 4.433.92-.799 2.674-2.425 4.202-4.433C17.783 14.487 19 12.159 19 10a7 7 0 0 0-7-7m-6.364.636A9 9 0 0 1 21 10c0 2.834-1.553 5.603-3.206 7.775-1.677 2.203-3.584 3.956-4.54 4.78l-.052.043a2 2 0 0 1-2.456-.042c-.956-.825-2.863-2.578-4.54-4.78C4.553 15.602 3 12.833 3 10a9 9 0 0 1 2.636-6.364M12 8a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ci = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4a9.333 9.333 0 0 0-9.333 9.334c0 2.879 1.622 5.982 3.73 8.752 2.038 2.677 4.376 4.845 5.603 5.91 1.227-1.065 3.565-3.233 5.603-5.91 2.108-2.77 3.73-5.873 3.73-8.752A9.333 9.333 0 0 0 16 4m-8.485.848A12 12 0 0 1 28 13.334c0 3.778-2.07 7.47-4.275 10.367-2.236 2.937-4.779 5.274-6.052 6.374q-.034.03-.07.056a2.67 2.67 0 0 1-3.276-.056c-1.273-1.1-3.816-3.437-6.052-6.374C6.07 20.804 4 17.11 4 13.334a12 12 0 0 1 3.515-8.486M16 10.667A2.667 2.667 0 1 0 16 16a2.667 2.667 0 0 0 0-5.333m-5.333 2.667a5.333 5.333 0 1 1 10.666 0 5.333 5.333 0 0 1-10.666 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        di = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ii, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(si, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ci, {
              ...n,
              ref: r
            })]
          })
        }));
      di.displayName = "MapPin", di.categories = ["navigation", "travel", "account"], di.tags = ["location", "waypoint", "marker", "drop"], di.MD = ii, di.LG = si, di.XL = ci;
      const ui = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.928 2.026C6.695 3.1 4.88 4 3.333 4v4.667c0 1.49.514 2.574 1.325 3.404.829.849 1.998 1.462 3.34 1.926l.015.005c1.336-.466 2.502-1.08 3.33-1.93.81-.831 1.324-1.915 1.324-3.405V4c-1.547 0-3.355-.892-4.595-1.974a.11.11 0 0 0-.144 0M7.06 1.013a1.45 1.45 0 0 1 1.88 0l.005.005c1.094.956 2.604 1.649 3.722 1.649A1.333 1.333 0 0 1 14 4v4.667c0 1.843-.653 3.259-1.703 4.336-1.031 1.058-2.417 1.76-3.85 2.26l-.006.002c-.288.097-.6.094-.885-.01-1.436-.497-2.82-1.196-3.852-2.253C2.653 11.926 2 10.51 2 8.668V4a1.333 1.333 0 0 1 1.333-1.333c1.118 0 2.635-.7 3.722-1.649zM8 4.667c.368 0 .667.298.667.666V8a.667.667 0 0 1-1.334 0V5.333c0-.368.299-.666.667-.666m-.667 6c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.892 3.038C10.042 4.652 7.322 6 5 6v7c0 2.236.77 3.861 1.987 5.106 1.243 1.274 2.997 2.194 5.01 2.889l.022.008c2.005-.7 3.754-1.622 4.995-2.895C18.229 16.861 19 15.236 19 13V6c-2.32 0-5.032-1.338-6.892-2.962a.17.17 0 0 0-.216 0M10.59 1.52a2.17 2.17 0 0 1 2.82 0l.008.007C15.058 2.961 17.323 4 19 4a2 2 0 0 1 2 2v7c0 2.764-.98 4.889-2.554 6.504-1.547 1.588-3.625 2.64-5.777 3.39l-.008.003a2 2 0 0 1-1.327-.015c-2.154-.745-4.231-1.794-5.778-3.378C3.979 17.889 3 15.764 3 13V6a2 2 0 0 1 2-2c1.676 0 3.952-1.049 5.582-2.473zM12 7a1 1 0 0 1 1 1v4a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m-1 9a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.856 4.051C13.39 6.202 9.76 8 6.666 8v9.333c0 2.981 1.028 5.148 2.65 6.809 1.657 1.697 3.996 2.924 6.68 3.85l.03.012c2.673-.933 5.005-2.162 6.66-3.86 1.62-1.662 2.647-3.83 2.647-6.81V8c-3.093 0-6.708-1.784-9.189-3.95a.23.23 0 0 0-.288.001M14.12 2.026a2.89 2.89 0 0 1 3.758 0l.012.01c2.186 1.911 5.206 3.297 7.442 3.297A2.667 2.667 0 0 1 28 8v9.333c0 3.686-1.306 6.518-3.405 8.672-2.063 2.117-4.834 3.52-7.703 4.52l-.01.004c-.576.195-1.2.188-1.77-.02-2.872-.993-5.642-2.392-7.704-4.504C5.306 23.852 4 21.019 4 17.333V8a2.667 2.667 0 0 1 2.667-2.667c2.235 0 5.268-1.398 7.443-3.297zM16 9.333c.736 0 1.333.597 1.333 1.333V16a1.333 1.333 0 1 1-2.666 0v-5.334c0-.736.597-1.333 1.333-1.333m-1.333 12c0-.736.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vi = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ui, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(hi, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(fi, {
              ...n,
              ref: r
            })]
          })
        }));
      vi.displayName = "ShieldAlert", vi.categories = ["account", "security", "development", "notifications", "gaming"], vi.tags = ["unshielded", "cybersecurity", "insecure", "unsecured", "safety", "unsafe", "protection", "unprotected", "guardian", "unguarded", "unarmored", "unarmoured", "defenseless", "defenceless", "undefended", "defender", "blocked", "stopped", "intercepted", "interception", "saved", "thwarted", "threat", "prevention", "unprevented", "antivirus", "vigilance", "vigilant", "detection", "detected", "scanned", "found", "exploit", "vulnerability", "vulnerable", "weakness", "infection", "infected", "comprimised", "data leak", "audited", "admin", "verification", "unverified", "uncertified", "warning", "emergency", "attention", "urgent", "alarm", "crest", "bravery", "strength", "tough", "attacked", "damaged", "injured", "hit", "expired", "disabled", "inactive", "error", "exclamation mark", "!"], vi.MD = ui, vi.LG = hi, vi.XL = fi;
      const pi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.928 2.026C6.695 3.1 4.88 4 3.333 4v4.667c0 1.49.514 2.574 1.325 3.404.829.849 1.998 1.462 3.34 1.926l.015.005c1.336-.466 2.502-1.08 3.33-1.93.81-.831 1.324-1.915 1.324-3.405V4c-1.547 0-3.355-.892-4.595-1.974a.11.11 0 0 0-.144 0M7.06 1.013a1.45 1.45 0 0 1 1.88 0l.005.005c1.094.956 2.604 1.649 3.722 1.649A1.333 1.333 0 0 1 14 4v4.667c0 1.843-.653 3.259-1.703 4.336-1.031 1.058-2.417 1.76-3.85 2.26l-.006.002c-.288.097-.6.094-.885-.01-1.436-.497-2.82-1.196-3.852-2.253C2.653 11.926 2 10.51 2 8.668V4a1.333 1.333 0 0 1 1.333-1.333c1.118 0 2.635-.7 3.722-1.649zm3.411 5.182c.26.26.26.683 0 .943L7.805 9.805a.667.667 0 0 1-.943 0L5.529 8.472a.667.667 0 0 1 .942-.943l.862.862L9.53 6.195c.26-.26.682-.26.942 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.892 3.038C10.042 4.652 7.322 6 5 6v7c0 2.236.77 3.861 1.987 5.106 1.243 1.274 2.997 2.194 5.01 2.889l.022.008c2.005-.7 3.754-1.622 4.995-2.895C18.229 16.861 19 15.236 19 13V6c-2.32 0-5.032-1.338-6.892-2.962a.17.17 0 0 0-.216 0M10.59 1.52a2.17 2.17 0 0 1 2.82 0l.008.007C15.058 2.961 17.323 4 19 4a2 2 0 0 1 2 2v7c0 2.764-.98 4.889-2.554 6.504-1.547 1.588-3.625 2.64-5.777 3.39l-.008.003a2 2 0 0 1-1.327-.015c-2.154-.745-4.231-1.794-5.778-3.378C3.979 17.889 3 15.764 3 13V6a2 2 0 0 1 2-2c1.676 0 3.952-1.049 5.582-2.473zm5.117 7.773a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        wi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M15.856 4.051C13.39 6.202 9.76 8 6.666 8v9.333c0 2.981 1.028 5.148 2.65 6.809 1.657 1.697 3.996 2.924 6.68 3.85l.03.012c2.673-.933 5.005-2.162 6.66-3.86 1.62-1.662 2.647-3.83 2.647-6.81V8c-3.093 0-6.708-1.784-9.189-3.95a.23.23 0 0 0-.288.001M14.12 2.026a2.89 2.89 0 0 1 3.758 0l.012.01c2.186 1.911 5.206 3.297 7.442 3.297A2.667 2.667 0 0 1 28 8v9.333c0 3.686-1.306 6.518-3.405 8.672-2.063 2.117-4.834 3.52-7.703 4.52l-.01.004c-.576.195-1.2.188-1.77-.02-2.872-.993-5.642-2.392-7.704-4.504C5.306 23.852 4 21.019 4 17.333V8a2.667 2.667 0 0 1 2.667-2.667c2.235 0 5.268-1.398 7.443-3.297zm6.822 10.364c.52.521.52 1.365 0 1.886l-5.334 5.333c-.52.521-1.364.521-1.885 0l-2.667-2.666a1.333 1.333 0 1 1 1.886-1.886l1.724 1.724 4.39-4.39c.52-.521 1.365-.521 1.886 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        mi = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(pi, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(gi, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(wi, {
              ...n,
              ref: r
            })]
          })
        }));
      mi.displayName = "ShieldCheck", mi.categories = ["account", "security", "development", "gaming"], mi.tags = ["cybersecurity", "secured", "safety", "protection", "protected", "guardian", "guarded", "armored", "armoured", "defense", "defence", "defended", "blocked", "threat", "prevention", "prevented", "antivirus", "vigilance", "vigilant", "active", "activated", "enabled", "detection", "scanned", "found", "strength", "strong", "tough", "invincible", "invincibility", "invulnerable", "undamaged", "audited", "admin", "verification", "verified", "certification", "certified", "tested", "passed", "qualified", "cleared", "cleaned", "disinfected", "uninfected", "task", "completed", "todo", "done", "ticked", "checked", "crest", "bravery"], mi.MD = pi, mi.LG = gi, mi.XL = wi;
      const xi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2.343 6.73 4.916a2.1 2.1 0 0 1-1.58 1.148l-2.842.415L4.363 8.48a2.1 2.1 0 0 1 .605 1.86l-.484 2.827 2.54-1.336a2.1 2.1 0 0 1 1.952 0l2.541 1.336-.485-2.828a2.1 2.1 0 0 1 .605-1.859l2.054-2-2.842-.416a2.1 2.1 0 0 1-1.578-1.148zM7.457.754a1.03 1.03 0 0 1 1.466.418l1.554 3.148a.75.75 0 0 0 .567.413l3.474.508a1.03 1.03 0 0 1 .852 1.265 1.03 1.03 0 0 1-.281.49l-2.513 2.448a.76.76 0 0 0-.218.668m0 0 .593 3.454v.002a1.03 1.03 0 0 1-1.495 1.087l-.002-.002-3.103-1.631a.76.76 0 0 0-.702 0l-3.104 1.632a1.03 1.03 0 0 1-1.495-1.086v-.001l.592-3.454a.76.76 0 0 0-.217-.669L.914 7l-.001-.002a1.03 1.03 0 0 1 .57-1.758l3.473-.507a.76.76 0 0 0 .568-.413l1.554-3.148a1.03 1.03 0 0 1 .38-.418",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "m12 3.592-1.887 3.824a3.12 3.12 0 0 1-2.35 1.707l-4.225.618 3.056 2.974a3.12 3.12 0 0 1 .899 2.765l-.72 4.202 3.774-1.985a3.13 3.13 0 0 1 2.904 0l3.778 1.986-.722-4.204a3.13 3.13 0 0 1 .9-2.763l3.053-2.974-4.225-.619a3.13 3.13 0 0 1-2.347-1.706zm-.807-2.362a1.53 1.53 0 0 1 2.178.621l2.31 4.68a1.12 1.12 0 0 0 .844.613l5.164.756a1.53 1.53 0 0 1 1.236 1.041 1.53 1.53 0 0 1-.387 1.569l-3.736 3.638a1.12 1.12 0 0 0-.323.993m0 0 .88 5.135.001.004a1.53 1.53 0 0 1-2.223 1.614l-.003-.001-4.613-2.426a1.12 1.12 0 0 0-1.043 0l-4.614 2.427h-.002a1.53 1.53 0 0 1-2.221-1.614v-.003l.88-5.135a1.12 1.12 0 0 0-.323-.994l-3.733-3.634-.002-.002A1.53 1.53 0 0 1 2.311 7.9l5.163-.755a1.13 1.13 0 0 0 .845-.613l2.31-4.68a1.53 1.53 0 0 1 .564-.62",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ji = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "m16.001 4.763-2.522 5.11a4.17 4.17 0 0 1-3.14 2.282l-5.645.825 4.083 3.974a4.17 4.17 0 0 1 1.201 3.695l-.963 5.615 5.045-2.653a4.18 4.18 0 0 1 3.88 0l5.048 2.654-.964-5.617a4.18 4.18 0 0 1 1.2-3.693l4.082-3.974-5.646-.826a4.18 4.18 0 0 1-3.136-2.28zm-1.078-3.156a2.044 2.044 0 0 1 2.91.83l3.088 6.253a1.5 1.5 0 0 0 1.126.82l6.901 1.01a2.05 2.05 0 0 1 1.652 1.391 2.04 2.04 0 0 1-.517 2.096L25.09 18.87a1.5 1.5 0 0 0-.432 1.326m0 0 1.177 6.862.001.005a2.044 2.044 0 0 1-2.97 2.158l-.005-.002-6.164-3.241a1.5 1.5 0 0 0-1.394 0l-6.165 3.242-.002.001a2.045 2.045 0 0 1-2.969-2.158v-.003l1.177-6.862a1.5 1.5 0 0 0-.432-1.328l-4.988-4.856-.002-.002a2.044 2.044 0 0 1 1.132-3.492l6.9-1.009a1.5 1.5 0 0 0 1.129-.819l3.086-6.254c.169-.341.43-.629.754-.83",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        yi = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(xi, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(bi, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ji, {
              ...n,
              ref: r
            })]
          })
        }));
      yi.displayName = "Star", yi.categories = ["account", "social", "shapes", "multimedia", "weather", "emoji", "gaming"], yi.tags = ["bookmark", "favorite", "like", "review", "rating"], yi.MD = xi, yi.LG = bi, yi.XL = ji;
      const Ri = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.667 2.667a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0l-.04.018a6 6 0 0 0-3.532 5.47A.667.667 0 1 0 2 14a4.667 4.667 0 0 1 7.754-3.5.667.667 0 1 0 .882-1 6 6 0 0 0-1.542-.988M10 12.667c0-.368.298-.667.667-.667h4a.667.667 0 1 1 0 1.334h-4a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Mi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.283 0l-.06.027A9 9 0 0 0 1 21a1 1 0 0 0 2 0 7 7 0 0 1 7-7h.054a7 7 0 0 1 4.576 1.75 1 1 0 1 0 1.323-1.5 9 9 0 0 0-2.312-1.48M15 19a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Li = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.333 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0-10.667m4.856 11.692a8 8 0 1 0-9.71 0l-.083.037A12 12 0 0 0 1.333 28 1.333 1.333 0 0 0 4 28a9.333 9.333 0 0 1 15.507-7 1.333 1.333 0 1 0 1.764-2 12 12 0 0 0-3.082-1.975M20 25.333c0-.736.597-1.333 1.333-1.333h8a1.333 1.333 0 0 1 0 2.666h-8A1.333 1.333 0 0 1 20 25.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ci = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ri, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Mi, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Li, {
              ...n,
              ref: r
            })]
          })
        }));
      Ci.displayName = "PersonMinus", Ci.categories = ["account"], Ci.tags = ["delete", "remove", "unfollow", "unsubscribe"], Ci.MD = Ri, Ci.LG = Mi, Ci.XL = Li;
      const Ei = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.667 2.667a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0l-.04.018a6 6 0 0 0-3.532 5.47A.667.667 0 1 0 2 14a4.667 4.667 0 0 1 7.754-3.5.667.667 0 1 0 .882-1 6 6 0 0 0-1.542-.988M12.667 10c.368 0 .666.299.666.667V12h1.334a.667.667 0 1 1 0 1.334h-1.334v1.333a.667.667 0 0 1-1.333 0v-1.333h-1.333a.667.667 0 0 1 0-1.334H12v-1.333c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ai = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.283 0l-.06.027A9 9 0 0 0 1 21a1 1 0 0 0 2 0 7 7 0 0 1 7-7h.054a7 7 0 0 1 4.576 1.75 1 1 0 1 0 1.323-1.5 9 9 0 0 0-2.312-1.48M19 15a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2h-2a1 1 0 1 1 0-2h2v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Pi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.333 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0-10.667m4.855 11.692a8 8 0 1 0-9.71 0l-.082.037A12 12 0 0 0 1.333 28 1.333 1.333 0 0 0 4 28a9.333 9.333 0 0 1 15.507-7 1.333 1.333 0 1 0 1.764-2 12 12 0 0 0-3.083-1.975M25.333 20c.737 0 1.334.597 1.334 1.333V24h2.666a1.333 1.333 0 0 1 0 2.666h-2.666v2.667a1.333 1.333 0 1 1-2.667 0v-2.666h-2.667a1.333 1.333 0 1 1 0-2.667H24v-2.667c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ii = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ei, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ai, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Pi, {
              ...n,
              ref: r
            })]
          })
        }));
      Ii.displayName = "PersonPlus", Ii.categories = ["account"], Ii.tags = ["new", "add", "create", "follow", "subscribe"], Ii.MD = Ei, Ii.LG = Ai, Ii.XL = Pi;
      const Si = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.667 2.667a2.667 2.667 0 1 0 0 5.333 2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0A6 6 0 0 0 .667 14 .667.667 0 0 0 2 14a4.667 4.667 0 1 1 9.333 0 .667.667 0 0 0 1.334 0 6 6 0 0 0-3.573-5.487m2.033-6.386a.667.667 0 0 1 .913-.234 4 4 0 0 1 .958 6.088c1.248 1.216 2.335 3.205 2.335 5.353a.667.667 0 0 1-1.333 0c0-2.008-1.21-3.907-2.4-4.8a.667.667 0 0 1 0-1.067 2.667 2.667 0 0 0-.24-4.427.667.667 0 0 1-.233-.913",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _i = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M10 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.282 0A9 9 0 0 0 1 21a1 1 0 1 0 2 0 7 7 0 1 1 14 0 1 1 0 1 0 2 0 9 9 0 0 0-5.359-8.23m3.049-9.58a1 1 0 0 1 1.37-.35 6 6 0 0 1 1.437 9.132C21.37 13.795 23 16.778 23 20a1 1 0 1 1-2 0c0-3.01-1.814-5.86-3.6-7.2a1 1 0 0 1 0-1.6 4 4 0 0 0-.36-6.64 1 1 0 0 1-.35-1.37",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        zi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.333 5.333a5.333 5.333 0 1 0 0 10.667 5.333 5.333 0 0 0 0-10.667m4.855 11.693a8 8 0 1 0-9.71 0A12 12 0 0 0 1.334 28 1.333 1.333 0 1 0 4 28a9.333 9.333 0 0 1 18.667 0 1.333 1.333 0 1 0 2.666 0 12 12 0 0 0-7.145-10.974m4.065-12.773a1.333 1.333 0 0 1 1.827-.467 8 8 0 0 1 1.916 12.176c2.496 2.43 4.67 6.409 4.67 10.705a1.333 1.333 0 1 1-2.666 0c0-4.015-2.419-7.815-4.8-9.6a1.333 1.333 0 0 1 0-2.134 5.334 5.334 0 0 0-.48-8.853 1.333 1.333 0 0 1-.467-1.827",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hi = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Si, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(_i, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(zi, {
              ...n,
              ref: r
            })]
          })
        }));
      Hi.displayName = "TwoPeople", Hi.categories = ["account"], Hi.tags = ["group", "people"], Hi.MD = Si, Hi.LG = _i, Hi.XL = zi;
      const Ti = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.039 2.018a3.333 3.333 0 0 0-3.412 4.687c.115.253.06.55-.136.746l-4.606 4.607a.748.748 0 1 0 1.057 1.057l4.607-4.607a.67.67 0 0 1 .746-.136 3.333 3.333 0 0 0 4.686-3.41l-1.714 1.714a1.333 1.333 0 0 1-1.867 0l-.005-.005L9.324 5.6a1.333 1.333 0 0 1 0-1.867l.005-.005zM9.828.74a4.67 4.67 0 0 1 2.76.34.667.667 0 0 1 .197 1.078l-2.509 2.508 1.057 1.058 2.509-2.509a.667.667 0 0 1 1.079.197 4.667 4.667 0 0 1-5.738 6.347l-4.298 4.299a2.081 2.081 0 0 1-2.943-2.943L6.24 6.817A4.667 4.667 0 0 1 9.828.74",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Di = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16.558 3.028a5 5 0 0 0-5.117 7.03 1 1 0 0 1-.204 1.12l-6.91 6.91a1.121 1.121 0 0 0 1.586 1.585l6.91-6.91a1 1 0 0 1 1.12-.204 5 5 0 0 0 7.029-5.117L18.4 10.014a2 2 0 0 1-2.8 0l-.007-.007L13.986 8.4a2 2 0 0 1 0-2.8l.007-.007zM14.742 1.11a7 7 0 0 1 4.14.51 1 1 0 0 1 .295 1.617L15.414 7 17 8.586l3.763-3.763a1 1 0 0 1 1.618.295 7 7 0 0 1-8.606 9.522l-6.448 6.447a3.121 3.121 0 1 1-4.414-4.414l6.448-6.448a7 7 0 0 1 5.38-9.115",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Bi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M22.077 4.037a6.666 6.666 0 0 0-6.822 9.373c.229.506.12 1.1-.272 1.493l-9.214 9.213a1.495 1.495 0 1 0 2.115 2.115l9.213-9.214c.393-.392.987-.5 1.493-.272a6.666 6.666 0 0 0 9.373-6.822l-3.43 3.43a2.667 2.667 0 0 1-3.733 0l-.01-.01-2.142-2.143a2.667 2.667 0 0 1 0-3.733l.01-.01zM19.655 1.48a9.33 9.33 0 0 1 5.521.679 1.333 1.333 0 0 1 .394 2.157l-5.018 5.017 2.115 2.115 5.017-5.017a1.333 1.333 0 0 1 2.157.393 9.334 9.334 0 0 1-11.475 12.695L9.77 28.116a4.162 4.162 0 0 1-5.885-5.885l8.597-8.597A9.333 9.333 0 0 1 19.656 1.48",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ni = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ti, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Di, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Bi, {
              ...n,
              ref: r
            })]
          })
        }));
      Ni.displayName = "Wrench", Ni.categories = ["account", "development", "tools"], Ni.tags = ["account", "settings", "spanner", "diy", "toolbox", "build", "construction"], Ni.MD = Ti, Ni.LG = Di, Ni.XL = Bi;
      const ki = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3.312 4.255a6 6 0 0 0 8.433 8.433zm-.636-1.299a7.333 7.333 0 0 0 10.367 10.367.67.67 0 0 0 .28-.28A7.333 7.333 0 0 0 2.957 2.676a.67.67 0 0 0-.28.28m1.579.356 8.433 8.433a6 6 0 0 0-8.433-8.433",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.968 6.382a9 9 0 0 0 12.65 12.65zm-.954-1.947A10.96 10.96 0 0 0 1 12c0 6.075 4.925 11 11 11 2.93 0 5.594-1.146 7.565-3.015a1 1 0 0 0 .42-.42A10.96 10.96 0 0 0 23 12c0-6.075-4.925-11-11-11-2.93 0-5.594 1.146-7.565 3.014a1 1 0 0 0-.42.42m2.368.533 12.65 12.65a9 9 0 0 0-12.65-12.65",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Oi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.624 8.51A11.95 11.95 0 0 0 4 16c0 6.628 5.373 12 12 12a11.95 11.95 0 0 0 7.49-2.624zM5.353 5.913A14.62 14.62 0 0 0 1.333 16C1.333 24.1 7.9 30.667 16 30.667c3.908 0 7.458-1.528 10.087-4.02a1.33 1.33 0 0 0 .56-.56A14.62 14.62 0 0 0 30.667 16C30.667 7.9 24.1 1.334 16 1.334A14.62 14.62 0 0 0 5.913 5.353a1.33 1.33 0 0 0-.56.56m3.157.711L25.376 23.49A11.95 11.95 0 0 0 28 16c0-6.627-5.372-12-12-12a11.95 11.95 0 0 0-7.49 2.624",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gi = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ki, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Vi, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Oi, {
              ...n,
              ref: r
            })]
          })
        }));
      Gi.displayName = "CircleSlash", Gi.categories = ["account"], Gi.tags = ["cancel", "no", "stop", "forbidden", "prohibited", "error", "incorrect", "mistake", "wrong", "failure", "circle", "slash", "null", "void", "ban", "Blocked", "Restricted", "Denied", "Unavailable", "Stop", "Alert"], Gi.MD = ki, Gi.LG = Vi, Gi.XL = Oi;
      const Fi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.404 1.035a.67.67 0 0 1 .604-.368 2.753 2.753 0 0 1 2.64 3.413L10.18 6h3.039a2 2 0 0 1 1.92 2.56l-1.553 5.333a2 2 0 0 1-1.92 1.44h-9a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h1.84a.67.67 0 0 0 .596-.37v-.002zM4 7.333H2.667A.667.667 0 0 0 2 8v5.333a.667.667 0 0 0 .667.667H4zM5.333 14h6.334a.67.67 0 0 0 .64-.48l1.553-5.333a.668.668 0 0 0-.64-.854H9.333a.667.667 0 0 1-.648-.824l.667-2.746V3.76a1.42 1.42 0 0 0-.97-1.7L6.297 6.222v.001a2 2 0 0 1-.964.93z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11.106 1.552A1 1 0 0 1 12.012 1a4.13 4.13 0 0 1 3.959 5.12L15.27 9h4.559a3 3 0 0 1 2.88 3.84l-2.33 8A3 3 0 0 1 17.5 23H4a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3h2.76a1 1 0 0 0 .894-.555l.002-.003zM6 11H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h2zm2 10h9.5a1 1 0 0 0 .96-.72l2.33-8a1 1 0 0 0-.513-1.174A1 1 0 0 0 19.83 11H14a1 1 0 0 1-.972-1.236l1-4.12.001-.004a2.13 2.13 0 0 0-1.456-2.55L9.446 9.334l-.001.001A3 3 0 0 1 8 10.731z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        qi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.808 2.07a1.33 1.33 0 0 1 1.209-.736 5.507 5.507 0 0 1 5.278 6.823v.003L20.362 12h6.078a4 4 0 0 1 3.84 5.12l-3.107 10.666a4 4 0 0 1-3.84 2.88h-18a4 4 0 0 1-4-4V16a4 4 0 0 1 4-4h3.68a1.33 1.33 0 0 0 1.193-.74l.002-.003zM8 14.667H5.333A1.333 1.333 0 0 0 4 16v10.667A1.333 1.333 0 0 0 5.333 28H8zM10.667 28h12.666a1.33 1.33 0 0 0 1.28-.96l3.107-10.666a1.335 1.335 0 0 0-1.28-1.707h-7.773a1.333 1.333 0 0 1-1.296-1.648l1.333-5.493.002-.005a2.84 2.84 0 0 0-1.942-3.402l-4.17 8.328v.002a4 4 0 0 1-1.927 1.86z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ui = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Fi, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Xi, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(qi, {
              ...n,
              ref: r
            })]
          })
        }));
      Ui.displayName = "ThumbsUp", Ui.categories = ["account", "social", "emoji"], Ui.tags = ["like", "good", "emotion", "rate", "social", "review", "feedback", "positive"], Ui.MD = Fi, Ui.LG = Xi, Ui.XL = qi;
      const Ki = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.333 2a.67.67 0 0 0-.64.48L2.14 7.813a.668.668 0 0 0 .64.853h3.887a.667.667 0 0 1 .648.824l-.667 2.747v.003a1.42 1.42 0 0 0 .97 1.7l2.085-4.163v-.002a2 2 0 0 1 .964-.93V2zm0-1.333a2 2 0 0 0-1.92 1.44L.86 7.44A2 2 0 0 0 2.78 10h3.039l-.466 1.92v.001a2.753 2.753 0 0 0 2.639 3.412c.255.003.49-.14.604-.368l2.3-4.593.001-.002a.67.67 0 0 1 .597-.37h1.84a2 2 0 0 0 2-2V2.667a2 2 0 0 0-2-2zM12 2v6.666h1.333A.667.667 0 0 0 14 8V2.667A.666.666 0 0 0 13.333 2z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Wi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.5 3a1 1 0 0 0-.96.72l-2.33 8A1.002 1.002 0 0 0 4.17 13H10a1 1 0 0 1 .972 1.236l-1 4.12-.001.004a2.13 2.13 0 0 0 1.456 2.55l3.128-6.245v-.002A3 3 0 0 1 16 13.27V3zm0-2a3 3 0 0 0-2.88 2.16l-2.33 8A3.002 3.002 0 0 0 4.17 15h4.558l-.699 2.88v.002A4.13 4.13 0 0 0 11.988 23a1 1 0 0 0 .906-.552l3.45-6.89.002-.003A1 1 0 0 1 17.24 15H20a3 3 0 0 0 3-3V4a3 3 0 0 0-3-3zM18 3v10h2a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        $i = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8.667 4a1.33 1.33 0 0 0-1.28.96L4.28 15.626a1.336 1.336 0 0 0 .684 1.567c.185.092.389.14.596.14h7.773a1.333 1.333 0 0 1 1.296 1.648l-1.333 5.494-.002.005a2.84 2.84 0 0 0 1.942 3.4l4.17-8.326.001-.003a4 4 0 0 1 1.926-1.86V4.002zm0-2.666a4 4 0 0 0-3.84 2.88L1.72 14.88A4.002 4.002 0 0 0 5.56 20h6.078l-.932 3.84-.001.003a5.506 5.506 0 0 0 5.278 6.824c.511.006.98-.28 1.21-.737l4.6-9.186.001-.004a1.33 1.33 0 0 1 1.193-.74h3.68a4 4 0 0 0 4-4V5.334a4 4 0 0 0-4-4zM24 4v13.334h2.667A1.334 1.334 0 0 0 28 16V5.334A1.334 1.334 0 0 0 26.667 4z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Yi = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ki, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Wi, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)($i, {
              ...n,
              ref: r
            })]
          })
        }));
      Yi.displayName = "ThumbsDown", Yi.categories = ["account", "social", "emoji"], Yi.tags = ["dislike", "bad", "emotion", "rate", "social", "review", "feedback", "negative"], Yi.MD = Ki, Yi.LG = Wi, Yi.XL = $i;
      const Zi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8.517 1.834a4 4 0 0 1 5.656 5.656l-.008.008-2 2a4.002 4.002 0 0 1-6.032-.432.667.667 0 0 1 1.068-.799 2.667 2.667 0 0 0 4.02.288l1.997-1.995a2.666 2.666 0 0 0-3.772-3.77L8.303 3.926a.667.667 0 1 1-.94-.945zm-3.25 3.748a4 4 0 0 1 4.6 1.352.667.667 0 0 1-1.067.799 2.667 2.667 0 0 0-4.022-.288L2.782 9.44a2.667 2.667 0 0 0 3.771 3.77l1.136-1.135a.667.667 0 0 1 .942.943l-1.148 1.148A4 4 0 0 1 1.827 8.51l.008-.008 2-2a4 4 0 0 1 1.431-.92",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qi = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12.775 2.75a6 6 0 0 1 8.484 8.485l-.012.012-3 3a6 6 0 0 1-9.048-.648 1 1 0 1 1 1.602-1.198 4 4 0 0 0 6.032.432l2.993-2.994a4 4 0 0 0-5.656-5.654l-1.715 1.704a1 1 0 0 1-1.41-1.418l1.72-1.71zM7.9 8.374a6 6 0 0 1 6.902 2.028 1 1 0 1 1-1.602 1.198 4 4 0 0 0-6.032-.432L4.174 14.16a4 4 0 0 0 5.655 5.655l1.704-1.703a1 1 0 1 1 1.414 1.414l-1.71 1.71-.012.012a6 6 0 0 1-8.484-8.484l.012-.012 3-3a6 6 0 0 1 2.146-1.38",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ji = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M17.034 3.668A8 8 0 0 1 28.346 14.98l-.016.016-4 4a8 8 0 0 1-12.064-.864 1.333 1.333 0 0 1 2.135-1.597 5.332 5.332 0 0 0 8.043.576l3.991-3.992a5.334 5.334 0 0 0-7.542-7.54l-2.286 2.273a1.333 1.333 0 1 1-1.88-1.89l2.293-2.28zm-6.502 7.496a8 8 0 0 1 9.203 2.704 1.333 1.333 0 0 1-2.136 1.597 5.332 5.332 0 0 0-8.043-.576l-3.991 3.992a5.333 5.333 0 0 0 7.541 7.54l2.271-2.27a1.333 1.333 0 1 1 1.886 1.885l-2.28 2.28-.017.016A8 8 0 0 1 3.654 17.02l.017-.016 4-4a8 8 0 0 1 2.861-1.84",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        es = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Zi, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Qi, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Ji, {
              ...n,
              ref: r
            })]
          })
        }));
      es.displayName = "Link", es.categories = ["text", "account"], es.tags = ["chain", "url", "links", "hyperlink"], es.MD = Zi, es.LG = Qi, es.XL = Ji;
      const ts = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.667 3.333A.667.667 0 0 0 2 4v.3l5.669 3.603a.63.63 0 0 0 .662 0l.002-.001L14 4.3V4a.667.667 0 0 0-.667-.667zm12.666 1.322V4a2 2 0 0 0-2-2H2.667a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10.666a2 2 0 0 0 2-2V4.655M14 5.88 9.04 9.032a1.96 1.96 0 0 1-2.08 0l-.004-.003L2 5.88V12c0 .368.299.667.667.667h10.666A.667.667 0 0 0 14 12z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4 5a1 1 0 0 0-1 1v.45l8.503 5.404a.94.94 0 0 0 .994 0l.002-.001L21 6.45V6a1 1 0 0 0-1-1zm19 1.983V6a3 3 0 0 0-3-3H4a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3h16a3 3 0 0 0 3-3V6.983M21 8.82l-7.44 4.727a2.94 2.94 0 0 1-3.12 0l-.006-.003L3 8.82V18a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ls = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M5.333 6.667C4.597 6.667 4 7.264 4 8v.6l11.338 7.205a1.25 1.25 0 0 0 1.324 0q.002 0 .003-.002L28 8.601V8c0-.736-.597-1.333-1.333-1.333zM30.667 9.31V8a4 4 0 0 0-4-4H5.333a4 4 0 0 0-4 4v16a4 4 0 0 0 4 4h21.334a4 4 0 0 0 4-4V9.311M28 11.76l-9.919 6.302a3.92 3.92 0 0 1-4.162 0l-.008-.004L4 11.76V24c0 .736.597 1.333 1.333 1.333h21.334c.736 0 1.333-.597 1.333-1.333z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ns = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ts, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(rs, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ls, {
              ...n,
              ref: r
            })]
          })
        }));
      ns.displayName = "Envelope", ns.categories = ["text", "account", "mail"], ns.tags = ["email", "message", "letter", "unread", "inbox", "chat", "letter", "invitation"], ns.MD = ts, ns.LG = rs, ns.XL = ls;
      const as = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2.667A2.667 2.667 0 1 0 8 8a2.667 2.667 0 0 0 0-5.333m2.427 5.846a4 4 0 1 0-4.855 0A6 6 0 0 0 2 14a.667.667 0 0 0 1.333 0 4.667 4.667 0 0 1 9.334 0A.667.667 0 1 0 14 14a6 6 0 0 0-3.573-5.487",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        os = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8m3.641 8.77a6 6 0 1 0-7.282 0A9 9 0 0 0 3 21a1 1 0 1 0 2 0 7 7 0 1 1 14 0 1 1 0 1 0 2 0 9 9 0 0 0-5.359-8.23",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        is = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 5.333A5.333 5.333 0 1 0 16 16a5.333 5.333 0 0 0 0-10.667m4.855 11.693a8 8 0 1 0-9.71 0A12 12 0 0 0 4 28a1.333 1.333 0 1 0 2.667 0 9.333 9.333 0 0 1 18.666 0A1.333 1.333 0 0 0 28 28a12 12 0 0 0-7.145-10.974",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ss = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(as, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(os, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(is, {
              ...n,
              ref: r
            })]
          })
        }));
      ss.displayName = "Person", ss.categories = ["account"], ss.tags = ["person", "account", "contact", "profile", "avatar", "user", "people", "human"], ss.MD = as, ss.LG = os, ss.XL = is;
      const cs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
              stroke: e,
              d: "M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            }), (0, l.jsx)("path", {
              stroke: e,
              d: "M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2"
            })]
          })
        }))),
        ds = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, l.jsx)("path", {
              stroke: e,
              d: "M8.147 1.334h-.294A1.333 1.333 0 0 0 6.52 2.667v.12a1.33 1.33 0 0 1-.667 1.153l-.286.167a1.33 1.33 0 0 1-1.334 0l-.1-.054a1.333 1.333 0 0 0-1.82.487l-.146.253a1.333 1.333 0 0 0 .486 1.82l.1.067a1.33 1.33 0 0 1 .667 1.147v.34a1.33 1.33 0 0 1-.667 1.16l-.1.06a1.333 1.333 0 0 0-.486 1.82l.146.253a1.334 1.334 0 0 0 1.82.487l.1-.053a1.33 1.33 0 0 1 1.334 0l.286.166a1.33 1.33 0 0 1 .667 1.153v.12a1.333 1.333 0 0 0 1.333 1.334h.294a1.333 1.333 0 0 0 1.333-1.333v-.12a1.33 1.33 0 0 1 .667-1.154l.286-.167a1.33 1.33 0 0 1 1.334 0l.1.054a1.333 1.333 0 0 0 1.82-.487l.146-.26a1.334 1.334 0 0 0-.486-1.82l-.1-.053a1.33 1.33 0 0 1-.667-1.16v-.333a1.33 1.33 0 0 1 .667-1.16l.1-.06a1.334 1.334 0 0 0 .486-1.82l-.146-.254a1.333 1.333 0 0 0-1.82-.487l-.1.054a1.33 1.33 0 0 1-1.334 0l-.286-.167a1.33 1.33 0 0 1-.667-1.153v-.12a1.333 1.333 0 0 0-1.333-1.333",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.333"
            }), (0, l.jsx)("path", {
              stroke: e,
              d: "M8 10a2 2 0 1 0 0-4 2 2 0 0 0 0 4",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "1.333"
            })]
          })
        }))),
        us = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, l.jsx)("path", {
              stroke: e,
              d: "M16.293 2.667h-.586a2.666 2.666 0 0 0-2.667 2.667v.24a2.67 2.67 0 0 1-1.333 2.306l-.574.334a2.67 2.67 0 0 1-2.666 0l-.2-.107a2.667 2.667 0 0 0-3.64.973l-.294.507a2.667 2.667 0 0 0 .974 3.64l.2.133a2.67 2.67 0 0 1 1.333 2.294v.68a2.67 2.67 0 0 1-1.333 2.32l-.2.12a2.666 2.666 0 0 0-.974 3.64l.294.506a2.667 2.667 0 0 0 3.64.974l.2-.107a2.67 2.67 0 0 1 2.666 0l.574.333a2.67 2.67 0 0 1 1.333 2.307v.24a2.667 2.667 0 0 0 2.667 2.667h.586a2.667 2.667 0 0 0 2.667-2.667v-.24a2.67 2.67 0 0 1 1.333-2.307l.574-.333a2.67 2.67 0 0 1 2.666 0l.2.107a2.667 2.667 0 0 0 3.64-.974l.294-.52a2.666 2.666 0 0 0-.974-3.64l-.2-.106a2.67 2.67 0 0 1-1.333-2.32v-.667a2.67 2.67 0 0 1 1.333-2.32l.2-.12a2.667 2.667 0 0 0 .974-3.64l-.294-.507a2.666 2.666 0 0 0-3.64-.973l-.2.107a2.67 2.67 0 0 1-2.666 0l-.574-.334a2.67 2.67 0 0 1-1.333-2.306v-.24a2.667 2.667 0 0 0-2.667-2.667",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.667"
            }), (0, l.jsx)("path", {
              stroke: e,
              d: "M16 20a4 4 0 1 0 0-8 4 4 0 0 0 0 8",
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2.667"
            })]
          })
        }))),
        hs = (0, n.forwardRef)((({
          size: e = "LG",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["LG" === e && (0, l.jsx)(cs, {
              ...n,
              ref: r
            }), "MD" === e && (0, l.jsx)(ds, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(us, {
              ...n,
              ref: r
            })]
          })
        }));
      hs.displayName = "Gear", hs.categories = ["account"], hs.tags = ["Cog", "Settings", "Preferences", "Options", "Custom", "Customize"], hs.LG = cs, hs.MD = ds, hs.XL = us;
      const fs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2 4c0-.368.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.334H2.667A.667.667 0 0 1 2 4m0 4c0-.368.298-.667.667-.667h10.666a.667.667 0 1 1 0 1.334H2.667A.667.667 0 0 1 2 8m0 4c0-.368.298-.666.667-.666h10.666a.667.667 0 0 1 0 1.333H2.667A.667.667 0 0 1 2 12",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M3 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1m0 6a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ps = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4 8c0-.737.597-1.333 1.333-1.333h21.334a1.333 1.333 0 0 1 0 2.666H5.333A1.333 1.333 0 0 1 4 8m0 8c0-.736.597-1.334 1.333-1.334h21.334a1.333 1.333 0 0 1 0 2.667H5.333A1.333 1.333 0 0 1 4 16m0 8c0-.736.597-1.334 1.333-1.334h21.334a1.333 1.333 0 0 1 0 2.667H5.333A1.333 1.333 0 0 1 4 24",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        gs = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(fs, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(vs, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ps, {
              ...n,
              ref: r
            })]
          })
        }));
      gs.displayName = "Menu", gs.categories = ["layout", "account"], gs.tags = ["bars", "navigation", "hamburger", "options", "side nav", "triple bar", "item"], gs.MD = fs, gs.LG = vs, gs.XL = ps;
      const ws = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4 5.334a2.667 2.667 0 1 1 5.333 0 2.667 2.667 0 0 1-5.333 0m2.666-4a4 4 0 0 0-2.427 7.18A6 6 0 0 0 .666 14 .667.667 0 1 0 2 14a4.666 4.666 0 0 1 6.086-4.445.667.667 0 0 0 .814-.902 4 4 0 0 0-2.233-7.319m5.5 9c-.261 0-.51.055-.736.154l2.416 2.415a1.833 1.833 0 0 0-1.68-2.57m-1.833 1.833c0-.262.055-.511.154-.737l2.416 2.416a1.833 1.833 0 0 1-2.57-1.68m-1.333 0a3.167 3.167 0 1 1 6.333 0 3.167 3.167 0 0 1-6.333 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ms = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6 8a4 4 0 1 1 8 0 4 4 0 0 1-8 0m4-6a6 6 0 0 0-3.64 10.77A9 9 0 0 0 1 21a1 1 0 0 0 2 0 7 7 0 0 1 9.13-6.667 1 1 0 0 0 1.22-1.354A6 6 0 0 0 10 2m8 13c-.463 0-.902.105-1.293.292l4 4v.001A3 3 0 0 0 18 15m-3 3c0-.463.105-.902.292-1.293l4 4h.001A3 3 0 0 1 15 18m-2 0a5 5 0 1 1 10 0 5 5 0 0 1-10 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        xs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 10.667a5.333 5.333 0 1 1 10.667 0 5.333 5.333 0 0 1-10.667 0m5.334-8a8 8 0 0 0-4.854 14.36A12 12 0 0 0 1.334 28 1.333 1.333 0 0 0 4 28a9.333 9.333 0 0 1 12.173-8.89 1.333 1.333 0 0 0 1.627-1.805 8 8 0 0 0-4.466-14.638m11 18c-.525 0-1.023.11-1.474.307l4.832 4.832a3.667 3.667 0 0 0-3.359-5.14m-3.667 3.666c0-.524.11-1.022.308-1.473l4.831 4.832a3.667 3.667 0 0 1-5.14-3.359m-2.667 0a6.333 6.333 0 1 1 12.667 0 6.333 6.333 0 0 1-12.667 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        bs = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ws, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ms, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(xs, {
              ...n,
              ref: r
            })]
          })
        }));
      bs.displayName = "PersonBlock", bs.categories = ["account"], bs.tags = ["ban", "block", "delete", "remove", "report"], bs.MD = ws, bs.LG = ms, bs.XL = xs;
      const js = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.868 2.014a.66.66 0 0 1 .371.031c.26.072.46.298.487.582l.604 6.647a.666.666 0 0 1-.664.727h-.585a2.08 2.08 0 0 1-2.372 2.06 2.08 2.08 0 0 1-2.043 1.687 2.1 2.1 0 0 1-1.072-.297 2.08 2.08 0 0 1-3.4.687L.862 9.805a.67.67 0 0 1-.192-.532l.606-6.666a.667.667 0 0 1 .664-.606h5.294a4.53 4.53 0 0 1 4.688-.026l.317.188c.141.086.31.115.472.084h.001zm-4.66.677a3.2 3.2 0 0 1 2.03.428l.313.187a2 2 0 0 0 1.418.249h.002l.491-.1.474 5.213h-.338a2 2 0 0 0-.127-.139l-2.587-2.587a2.667 2.667 0 0 0-3.769 0l-.587.587a.748.748 0 1 1-1.057-1.057l1.873-1.873a3.2 3.2 0 0 1 1.864-.908m-3.485.643H2.547l-.522 5.749 4.112 4.112a.747.747 0 0 0 1.071-1.043l-.347-.347a.667.667 0 1 1 .943-.943l.32.32.036.037.977.977a.748.748 0 1 0 1.043-1.073L8.862 9.805a.667.667 0 1 1 .943-.943l1.666 1.667a.748.748 0 0 0 1.057-1.057L9.942 6.886a1.333 1.333 0 0 0-1.884 0l-.587.586a2.08 2.08 0 1 1-2.943-2.943z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ys = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16.857 4.679a4.79 4.79 0 0 0-5.84.72l-2.81 2.809a1.121 1.121 0 1 0 1.586 1.585l.88-.88a4 4 0 0 1 5.654 0l3.88 3.88q.1.1.19.208h.508l-.71-7.818-.738.148h-.004a3 3 0 0 1-2.127-.373l-.003-.001zm4.083-1.677.06-.007a1 1 0 0 1 1.086.905l.91 10.01A1 1 0 0 1 22 15h-.879a3.12 3.12 0 0 1-3.556 3.091 3.124 3.124 0 0 1-3.065 2.53 3.1 3.1 0 0 1-1.608-.445 3.12 3.12 0 0 1-5.1 1.032l-6.5-6.5a1 1 0 0 1-.288-.798l.909-9.996a1 1 0 0 1 .996-.91h7.935a6.79 6.79 0 0 1 7.039-.042l.474.282a1 1 0 0 0 .708.126h.002l1.736-.35q.069-.014.137-.018M8.58 5.005h-4.76l-.783 8.62 6.17 6.168a1.121 1.121 0 0 0 1.585-1.585l-.5-.5a1 1 0 1 1 1.414-1.415l2 2a1.122 1.122 0 0 0 1.587-1.584l-.001-.001-2-2a1 1 0 0 1 1.414-1.415l2.5 2.5a1.121 1.121 0 0 0 1.586-1.585l-3.88-3.88a2 2 0 0 0-2.826 0l-.88.88a3.121 3.121 0 1 1-4.414-4.415z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Rs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M22.476 6.238a6.39 6.39 0 0 0-7.787.96l-3.745 3.745a1.495 1.495 0 0 0 2.114 2.115l1.173-1.174a5.335 5.335 0 0 1 7.539 0l5.174 5.174q.132.132.252.276h.678L26.926 6.91l-.982.198h-.006a4 4 0 0 1-2.836-.497l-.004-.002zm5.445-2.235.079-.01A1.333 1.333 0 0 1 29.449 5.2l1.213 13.347A1.333 1.333 0 0 1 29.334 20h-1.172a4.162 4.162 0 0 1-4.741 4.122A4.163 4.163 0 0 1 17.19 26.9a4.162 4.162 0 0 1-6.799 1.376L1.725 19.61c-.28-.28-.421-.67-.386-1.063L2.551 5.219A1.333 1.333 0 0 1 3.88 4.006h10.58a9.05 9.05 0 0 1 9.385-.057l.632.377c.284.17.62.23.945.167h.002l2.315-.466q.09-.019.183-.024m-16.478 2.67H5.097L4.052 18.166l8.225 8.225a1.495 1.495 0 0 0 2.115-2.113l-.667-.668a1.333 1.333 0 1 1 1.885-1.886l2.667 2.667a1.494 1.494 0 0 0 2.116-2.113l-.002-.001-2.666-2.667a1.333 1.333 0 1 1 1.885-1.886l3.334 3.334a1.495 1.495 0 1 0 2.114-2.115l-5.173-5.172a2.667 2.667 0 0 0-3.769 0l-1.172 1.172a4.162 4.162 0 1 1-5.886-5.885z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ms = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(js, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ys, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Rs, {
              ...n,
              ref: r
            })]
          })
        }));
      Ms.displayName = "Handshake", Ms.categories = ["account", "social", "communication", "finance", "security"], Ms.tags = ["agreement", "partnership", "deal", "business", "assistance", "cooperation", "friendship", "union", "terms"], Ms.MD = js, Ms.LG = ys, Ms.XL = Rs;
      const Ls = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.862.862c.26-.26.682-.26.943 0l.837.838a2.67 2.67 0 0 1 2.716 0l.837-.838a.667.667 0 1 1 .943.943l-.838.838a2.67 2.67 0 0 1 .367 1.458v.177a3.3 3.3 0 0 1 1.275.98 2.03 2.03 0 0 0 1.371-1.925.667.667 0 0 1 1.334 0c0 1.426-.89 2.64-2.098 3.123q.117.427.118.877V8h2a.667.667 0 1 1 0 1.333h-2c0 .53-.09 1.038-.253 1.512 1.308.457 2.253 1.72 2.253 3.155a.667.667 0 0 1-1.334 0c0-.926-.67-1.74-1.544-1.95A4.67 4.67 0 0 1 8 14c-1.557 0-2.94-.77-3.79-1.95-.874.21-1.543 1.024-1.543 1.95a.667.667 0 0 1-1.334 0c0-1.435.945-2.698 2.253-3.155a4.6 4.6 0 0 1-.253-1.512h-2a.667.667 0 0 1 0-1.333h2v-.667c0-.297.04-.591.117-.874a3.36 3.36 0 0 1-2.117-3.126.667.667 0 0 1 1.334 0c0 .92.61 1.679 1.39 1.927a3.33 3.33 0 0 1 1.276-.982v-.177A2.67 2.67 0 0 1 5.7 2.643l-.838-.838a.667.667 0 0 1 0-.943m2.146 2.242A1.34 1.34 0 0 0 6.665 4h2.67a1.34 1.34 0 0 0-.343-.896.7.7 0 0 1-.096-.097 1.336 1.336 0 0 0-1.792 0 .7.7 0 0 1-.096.097m2.781 2.282a2 2 0 0 0-.456-.053H6.667a2 2 0 0 0-2 2v2A3.35 3.35 0 0 0 7.333 12.6V7.333a.667.667 0 0 1 1.334 0V12.6a3.35 3.35 0 0 0 2.666-3.266v-2A2 2 0 0 0 9.79 5.386",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Cs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.293 1.293a1 1 0 0 1 1.414 0l1.257 1.256a4 4 0 0 1 4.072 0l1.257-1.256a1 1 0 1 1 1.414 1.414L15.45 3.965A4 4 0 0 1 16 6.15v.266a5 5 0 0 1 1.913 1.47C19.057 7.514 19.97 6.38 19.97 5a1 1 0 1 1 2 0 5.06 5.06 0 0 1-3.146 4.684c.116.425.176.868.176 1.316v1h3a1 1 0 1 1 0 2h-3c0 .793-.133 1.556-.379 2.268C20.583 16.953 22 18.848 22 21a1 1 0 1 1-2 0c0-1.389-1.004-2.609-2.316-2.925A7 7 0 0 1 12 21a7 7 0 0 1-5.684-2.925C5.004 18.391 4 19.611 4 21a1 1 0 1 1-2 0c0-2.152 1.417-4.047 3.379-4.732A7 7 0 0 1 5 14H2a1 1 0 1 1 0-2h3v-1c0-.447.06-.887.175-1.311A5.05 5.05 0 0 1 2 5a1 1 0 0 1 2 0 3.04 3.04 0 0 0 2.085 2.89A5 5 0 0 1 8 6.417v-.266a4 4 0 0 1 .55-2.186L7.294 2.707a1 1 0 0 1 0-1.414m3.219 3.362A2 2 0 0 0 9.997 6h4.006a2 2 0 0 0-.515-1.345 1 1 0 0 1-.145-.145 2.003 2.003 0 0 0-2.686 0 1 1 0 0 1-.145.145m4.172 3.424A3 3 0 0 0 14 8h-4a3 3 0 0 0-.684.079 1 1 0 0 1-.132.034A3 3 0 0 0 7 11v3c0 2.406 1.726 4.431 4 4.899V11a1 1 0 1 1 2 0v7.899c2.274-.468 4-2.493 4-4.899v-3a3 3 0 0 0-2.184-2.887 1 1 0 0 1-.132-.034",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Es = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.724 1.724c.52-.52 1.365-.52 1.886 0l1.675 1.675a5.33 5.33 0 0 1 5.43 0l1.676-1.675a1.333 1.333 0 1 1 1.885 1.885L20.6 5.286a5.33 5.33 0 0 1 .734 2.915v.355a6.67 6.67 0 0 1 2.551 1.96c1.525-.499 2.743-2.01 2.743-3.85a1.333 1.333 0 0 1 2.666 0c0 2.852-1.778 5.28-4.195 6.246.155.567.235 1.157.235 1.755V16h4a1.333 1.333 0 0 1 0 2.667h-4a9.3 9.3 0 0 1-.505 3.024c2.616.913 4.505 3.44 4.505 6.309a1.333 1.333 0 0 1-2.666 0c0-1.852-1.34-3.479-3.088-3.9C21.88 26.458 19.113 28 16 28s-5.881-1.542-7.579-3.9c-1.748.421-3.088 2.048-3.088 3.9a1.333 1.333 0 1 1-2.666 0c0-2.87 1.89-5.396 4.505-6.31a9.3 9.3 0 0 1-.505-3.023h-4a1.333 1.333 0 0 1 0-2.667h4v-1.333c0-.596.08-1.184.233-1.749a6.73 6.73 0 0 1-4.233-6.251 1.333 1.333 0 1 1 2.666 0c0 1.84 1.22 3.357 2.78 3.853a6.67 6.67 0 0 1 2.554-1.964v-.355a5.34 5.34 0 0 1 .734-2.915L9.724 3.61a1.333 1.333 0 0 1 0-1.885m4.291 4.483A2.67 2.67 0 0 0 13.33 8h5.342a2.67 2.67 0 0 0-.686-1.793 1.3 1.3 0 0 1-.194-.194 2.67 2.67 0 0 0-3.582 0 1.4 1.4 0 0 1-.194.194m5.563 4.565a4 4 0 0 0-.911-.105h-5.334a4 4 0 0 0-.911.105q-.085.028-.177.045a4 4 0 0 0-2.912 3.85v4c0 3.207 2.302 5.908 5.334 6.531V14.667a1.333 1.333 0 0 1 2.666 0v10.531c3.032-.623 5.334-3.324 5.334-6.531v-4a4 4 0 0 0-2.912-3.85 1.3 1.3 0 0 1-.177-.045",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        As = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ls, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Cs, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Es, {
              ...n,
              ref: r
            })]
          })
        }));
      As.displayName = "Bug", As.categories = ["development", "animals"], As.tags = ["issue", "report", "debug", "code", "insect"], As.MD = Ls, As.LG = Cs, As.XL = Es;
      const Ps = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M4.867.857a.667.667 0 0 1 .943.01l.825.844a2.67 2.67 0 0 1 2.718-.007l.842-.842a.667.667 0 1 1 .943.943l-.841.841c.241.41.37.877.37 1.354v.278a3.3 3.3 0 0 1 1.275.98 2.03 2.03 0 0 0 1.371-1.925.667.667 0 0 1 1.334 0c0 1.426-.89 2.64-2.098 3.123q.117.427.118.877V8h2a.667.667 0 1 1 0 1.333H12a.667.667 0 0 1-.667-.666V7.333a2 2 0 0 0-2-2h-.866a.667.667 0 0 1 0-1.333h.866a1.333 1.333 0 0 0-2.284-.933.667.667 0 0 1-.952 0L4.857 1.8a.667.667 0 0 1 .01-.943M.862.862c.26-.26.682-.26.943 0l3.79 3.79.018.018L8.47 7.528v.001l3.41 3.41.02.02 3.237 3.236a.667.667 0 1 1-.943.943l-2.7-2.7a4.666 4.666 0 0 1-7.296-.385c-.869.215-1.532 1.025-1.532 1.947a.667.667 0 0 1-1.334 0c0-1.433.943-2.695 2.248-3.153a4.7 4.7 0 0 1-.248-1.514h-2a.667.667 0 0 1 0-1.333h2v-.664a3.33 3.33 0 0 1 .834-2.226L.862 1.805a.667.667 0 0 1 0-.943m4.25 5.194a2 2 0 0 0-.445 1.273v2.006c-.002.566.14 1.12.409 1.61a.7.7 0 0 1 .066.117 3.33 3.33 0 0 0 2.191 1.55V8.276zM8.668 9.61v3.002a3.34 3.34 0 0 0 1.883-1.12z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Is = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.3 1.285a1 1 0 0 1 1.415.015l1.238 1.266a4 4 0 0 1 4.077-.01l1.263-1.263a1 1 0 1 1 1.414 1.414L15.445 3.97A4 4 0 0 1 16 6v.418a5 5 0 0 1 1.913 1.47C19.057 7.514 19.97 6.38 19.97 5a1 1 0 1 1 2 0 5.06 5.06 0 0 1-3.146 4.684c.116.425.176.868.176 1.316v1h3a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1v-2a3 3 0 0 0-2.184-2.887 1 1 0 0 1-.132-.034A3 3 0 0 0 14 8h-1.3a1 1 0 1 1 0-2H14a2 2 0 0 0-3.427-1.4 1 1 0 0 1-1.428 0l-1.86-1.9A1 1 0 0 1 7.3 1.285m-6.007.008a1 1 0 0 1 1.414 0l5.686 5.686.026.026 9.404 9.403.03.03 4.854 4.855a1 1 0 0 1-1.414 1.414l-4.05-4.05a7 7 0 0 1-10.945-.578C4.995 18.402 4 19.617 4 21a1 1 0 1 1-2 0c0-2.15 1.414-4.043 3.372-4.73A7 7 0 0 1 5 14H2a1 1 0 1 1 0-2h3v-.997a5 5 0 0 1 1.25-3.338L1.294 2.707a1 1 0 0 1 0-1.414m6.376 7.79A3 3 0 0 0 7 10.994v3.01a5 5 0 0 0 .614 2.416 1 1 0 0 1 .1.173A5 5 0 0 0 11 18.917v-6.503zM13 14.415v4.503a5 5 0 0 0 2.825-1.678z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ss = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.734 1.714a1.333 1.333 0 0 1 1.886.02L13.27 3.42a5.33 5.33 0 0 1 5.436-.013l1.684-1.684a1.333 1.333 0 1 1 1.885 1.885l-1.683 1.683c.483.819.74 1.753.74 2.707v.557a6.67 6.67 0 0 1 2.551 1.96c1.525-.499 2.743-2.01 2.743-3.85a1.333 1.333 0 0 1 2.666 0c0 2.852-1.778 5.28-4.195 6.246.155.567.235 1.157.235 1.755V16h4a1.333 1.333 0 0 1 0 2.667H24a1.333 1.333 0 0 1-1.333-1.334v-2.666a4 4 0 0 0-2.912-3.85 1.3 1.3 0 0 1-.177-.045 4 4 0 0 0-.911-.105h-1.734a1.333 1.333 0 0 1 0-2.667h1.734a2.666 2.666 0 0 0-4.57-1.866 1.333 1.333 0 0 1-1.903-.001l-2.48-2.534a1.333 1.333 0 0 1 .02-1.885m-8.01.01c.52-.52 1.365-.52 1.886 0l7.581 7.582q.018.016.034.034l5.717 5.716.002.002 6.82 6.82.04.04 6.472 6.472a1.333 1.333 0 0 1-1.885 1.886l-5.4-5.4a9.334 9.334 0 0 1-14.593-.77c-1.737.43-3.065 2.05-3.065 3.894a1.333 1.333 0 1 1-2.666 0c0-2.866 1.885-5.39 4.496-6.306a9.3 9.3 0 0 1-.496-3.027h-4a1.333 1.333 0 0 1 0-2.667h4v-1.33a6.67 6.67 0 0 1 1.667-4.45l-6.61-6.61a1.333 1.333 0 0 1 0-1.886m8.502 10.387a4 4 0 0 0-.893 2.547v4.013a6.67 6.67 0 0 0 .819 3.22q.077.11.133.232a6.67 6.67 0 0 0 4.382 3.1v-8.67zm7.107 7.108v6.004a6.66 6.66 0 0 0 3.767-2.238z",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        _s = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Ps, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Is, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Ss, {
              ...n,
              ref: r
            })]
          })
        }));
      _s.displayName = "BugOff", _s.categories = ["development", "animals"], _s.tags = ["issue", "report", "debug", "code", "insect"], _s.MD = Ps, _s.LG = Is, _s.XL = Ss;
      const zs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.105 4.707a.667.667 0 0 1 .855.398 6.43 6.43 0 0 0 12.08 0 .667.667 0 1 1 1.253.457 7.76 7.76 0 0 1-2.161 3.164l.711.845a.667.667 0 1 1-1.02.858l-.766-.91a7.8 7.8 0 0 1-1.749.794l.343 1.542a.667.667 0 1 1-1.302.29l-.343-1.546a7.8 7.8 0 0 1-2.012 0l-.343 1.546a.667.667 0 1 1-1.302-.29l.343-1.542a7.8 7.8 0 0 1-1.75-.794l-.765.91a.667.667 0 1 1-1.02-.858l.711-.845a7.76 7.76 0 0 1-2.16-3.164.667.667 0 0 1 .397-.855",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Hs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.657 7.06a1 1 0 0 1 1.282.597 9.645 9.645 0 0 0 18.122 0 1 1 0 1 1 1.878.686 11.65 11.65 0 0 1-3.241 4.745l1.067 1.268a1 1 0 0 1-1.53 1.288l-1.15-1.365c-.824.506-1.706.905-2.623 1.19l.514 2.314a1 1 0 1 1-1.952.434l-.515-2.32a11.6 11.6 0 0 1-3.018 0l-.515 2.32a1 1 0 1 1-1.952-.434l.514-2.314a11.7 11.7 0 0 1-2.624-1.19l-1.149 1.365a1 1 0 0 1-1.53-1.288l1.067-1.268a11.65 11.65 0 0 1-3.241-4.745 1 1 0 0 1 .596-1.283",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ts = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M2.21 9.414a1.333 1.333 0 0 1 1.71.796 12.86 12.86 0 0 0 24.16 0 1.333 1.333 0 0 1 2.506.914 15.5 15.5 0 0 1-4.322 6.327l1.423 1.69a1.333 1.333 0 0 1-2.04 1.718l-1.533-1.82a15.5 15.5 0 0 1-3.498 1.587l.686 3.085a1.333 1.333 0 0 1-2.604.578l-.686-3.092a15.5 15.5 0 0 1-4.023 0l-.687 3.092a1.333 1.333 0 0 1-2.604-.578l.686-3.085a15.5 15.5 0 0 1-3.498-1.587l-1.533 1.82a1.333 1.333 0 1 1-2.04-1.718l1.423-1.69a15.5 15.5 0 0 1-4.322-6.327 1.333 1.333 0 0 1 .796-1.71",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ds = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(zs, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Hs, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Ts, {
              ...n,
              ref: r
            })]
          })
        }));
      Ds.displayName = "EyeClosed", Ds.categories = ["accessibility", "photography", "design", "security"], Ds.tags = ["view", "watch", "see", "hide", "conceal", "mask", "hidden", "visibility", "vision"], Ds.MD = zs, Ds.LG = Hs, Ds.XL = Ts;
      const Bs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m6.666-2.667c0-.368.299-.667.667-.667h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667m.667 2c.368 0 .667.299.667.667v2.666a.667.667 0 1 1-1.334 0V8c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ns = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m10-4a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1m1 3a1 1 0 0 1 1 1v4a1 1 0 1 1-2 0v-4a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ks = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12M1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16m13.334-5.333c0-.737.597-1.333 1.333-1.333h.013a1.333 1.333 0 1 1 0 2.666H16a1.333 1.333 0 0 1-1.333-1.333m1.333 4c.736 0 1.333.597 1.333 1.333v5.334a1.333 1.333 0 0 1-2.666 0V16c0-.736.597-1.333 1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Vs = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Bs, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ns, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ks, {
              ...n,
              ref: r
            })]
          })
        }));
      Vs.displayName = "Info", Vs.categories = ["accessibility", "notifications"], Vs.tags = ["help", "info", "information", "support"], Vs.MD = Bs, Vs.LG = Ns, Vs.XL = ks;
      const Os = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 2a6 6 0 1 0 0 12A6 6 0 0 0 8 2M.667 8a7.333 7.333 0 1 1 14.666 0A7.333 7.333 0 0 1 .667 8m7.505-2.65a1.33 1.33 0 0 0-1.483.871.667.667 0 0 1-1.258-.442 2.667 2.667 0 0 1 5.182.888c0 1.02-.756 1.694-1.297 2.054a5.4 5.4 0 0 1-1.124.566l-.023.008-.007.002-.003.001s-.002.001-.212-.632l.211.633a.667.667 0 0 1-.423-1.265l.01-.003.05-.019a4.034 4.034 0 0 0 .782-.4c.46-.307.703-.633.703-.945a1.336 1.336 0 0 0-1.108-1.318m-.839 5.984c0-.369.299-.668.667-.668h.007a.667.667 0 0 1 0 1.334H8a.667.667 0 0 1-.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Gs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18M1 12C1 5.925 5.925 1 12 1s11 4.925 11 11-4.925 11-11 11S1 18.075 1 12m11.258-3.976a2 2 0 0 0-2.225 1.308 1 1 0 1 1-1.886-.664 4 4 0 0 1 7.773 1.333c0 1.53-1.135 2.54-1.945 3.081a8 8 0 0 1-1.686.848l-.035.013-.011.003-.004.002h-.002L11.92 13l.316.949a1 1 0 0 1-.633-1.897l.016-.006.074-.027a6.051 6.051 0 0 0 1.172-.6c.69-.46 1.055-.95 1.055-1.419v-.001a2 2 0 0 0-1.662-1.975M11 17a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2H12a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Fs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 4C9.373 4 4 9.373 4 16c0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12M1.333 16C1.333 7.9 7.9 1.334 16 1.334S30.667 7.9 30.667 16 24.1 30.667 16 30.667 1.333 24.1 1.333 16m15.011-5.3a2.67 2.67 0 0 0-2.966 1.743 1.333 1.333 0 1 1-2.516-.885 5.333 5.333 0 0 1 10.365 1.776c0 2.04-1.514 3.389-2.594 4.109a10.7 10.7 0 0 1-2.248 1.131l-.046.016-.015.005-.005.002h-.002c0 .001-.002.001-.424-1.264l.422 1.265a1.333 1.333 0 0 1-.846-2.528l.002-.001.02-.007.1-.037a8.075 8.075 0 0 0 1.563-.8c.92-.614 1.406-1.266 1.406-1.891v-.002a2.666 2.666 0 0 0-2.216-2.633m-.875 5.37.002-.001zm5.758-2.736v.002l-1.334-.002zm-6.56 9.333c0-.737.597-1.334 1.333-1.334h.013a1.333 1.333 0 0 1 0 2.667H16a1.333 1.333 0 0 1-1.333-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Xs = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Os, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Gs, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Fs, {
              ...n,
              ref: r
            })]
          })
        }));
      Xs.displayName = "CircleHelp", Xs.categories = ["accessibility", "text", "notifications"], Xs.tags = ["question mark", "help", "support", "assistance", "doubt", "FAQ", "tooltip"], Xs.MD = Os, Xs.LG = Gs, Xs.XL = Fs;
      const qs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M6.582 2.859a5.333 5.333 0 1 0 6.56 6.559 4.909 4.909 0 0 1-6.56-6.56m-2.286-.402A6.67 6.67 0 0 1 8 1.334a.667.667 0 0 1 .471 1.138 3.576 3.576 0 1 0 5.058 5.057.667.667 0 0 1 1.138.471 6.666 6.666 0 1 1-10.37-5.543",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Us = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M9.874 4.288a8 8 0 1 0 9.838 9.838 7.363 7.363 0 0 1-9.838-9.838m-3.43-.603A10 10 0 0 1 12 2a1 1 0 0 1 .707 1.707 5.364 5.364 0 0 0 7.586 7.586A1 1 0 0 1 22 12 10 10 0 1 1 6.444 3.685",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ks = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M13.165 5.717a10.667 10.667 0 1 0 13.118 13.118A9.818 9.818 0 0 1 13.165 5.717m-4.573-.803A13.33 13.33 0 0 1 16 2.667a1.333 1.333 0 0 1 .943 2.276 7.152 7.152 0 0 0 10.114 10.114 1.333 1.333 0 0 1 2.276.943A13.333 13.333 0 1 1 8.593 4.914",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ws = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(qs, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Us, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Ks, {
              ...n,
              ref: r
            })]
          })
        }));
      Ws.displayName = "Moon", Ws.categories = ["accessibility"], Ws.tags = ["dark", "night", "lightness", "theme", "brightness"], Ws.MD = qs, Ws.LG = Us, Ws.XL = Ks;
      const $s = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M8 .667c.368 0 .667.298.667.666v1.334a.667.667 0 0 1-1.334 0V1.333c0-.368.299-.666.667-.666m5.185 2.148c.26.26.26.683 0 .943l-.94.94a.667.667 0 1 1-.943-.943l.94-.94c.26-.26.682-.26.943 0m-10.37 0c.26-.26.683-.26.943 0l.94.94a.667.667 0 1 1-.943.943l-.94-.94a.667.667 0 0 1 0-.943M8 6a2 2 0 1 0 0 4 2 2 0 0 0 0-4M4.667 8a3.333 3.333 0 1 1 6.666 0 3.333 3.333 0 0 1-6.666 0m-4 0c0-.368.298-.667.666-.667h1.334a.667.667 0 0 1 0 1.333H1.333A.667.667 0 0 1 .667 8m12 0c0-.368.298-.667.666-.667h1.334a.667.667 0 1 1 0 1.333h-1.334A.667.667 0 0 1 12.667 8m-7.969 3.302c.26.26.26.682 0 .943l-.94.94a.667.667 0 0 1-.943-.943l.94-.94c.26-.26.683-.26.943 0m6.604 0c.26-.26.682-.26.943 0l.94.94a.667.667 0 0 1-.943.943l-.94-.94a.667.667 0 0 1 0-.943M8 12.666c.368 0 .667.299.667.667v1.333a.667.667 0 1 1-1.334 0v-1.333c0-.368.299-.667.667-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Ys = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M12 1a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1M4.223 4.223a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414m15.554 0a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 1 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0m-6 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1m18 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1M7.047 16.953a1 1 0 0 1 0 1.414l-1.41 1.41a1 1 0 0 1-1.414-1.414l1.41-1.41a1 1 0 0 1 1.414 0m9.906 0a1 1 0 0 1 1.414 0l1.41 1.41a1 1 0 0 1-1.414 1.414l-1.41-1.41a1 1 0 0 1 0-1.414M12 19a1 1 0 0 1 1 1v2a1 1 0 1 1-2 0v-2a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Zs = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M16 1.334c.736 0 1.333.596 1.333 1.333v2.667a1.333 1.333 0 0 1-2.666 0V2.667c0-.737.597-1.333 1.333-1.333M26.37 5.63c.52.52.52 1.365 0 1.885l-1.88 1.88a1.333 1.333 0 0 1-1.886-1.885l1.88-1.88c.52-.521 1.365-.521 1.885 0m-20.74 0c.521-.521 1.365-.521 1.886 0l1.88 1.88a1.333 1.333 0 0 1-1.885 1.885l-1.88-1.88a1.333 1.333 0 0 1 0-1.885M16 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8m-6.667 4a6.667 6.667 0 1 1 13.334 0 6.667 6.667 0 0 1-13.334 0m-8 0c0-.737.597-1.334 1.334-1.334h2.666a1.333 1.333 0 0 1 0 2.667H2.667A1.333 1.333 0 0 1 1.333 16m24 0c0-.737.597-1.334 1.334-1.334h2.666a1.333 1.333 0 0 1 0 2.667h-2.666A1.333 1.333 0 0 1 25.333 16M9.396 22.603c.52.52.52 1.365 0 1.886l-1.88 1.88a1.333 1.333 0 0 1-1.885-1.886l1.88-1.88c.52-.52 1.364-.52 1.885 0m13.208 0c.52-.52 1.365-.52 1.886 0l1.88 1.88a1.333 1.333 0 1 1-1.886 1.886l-1.88-1.88a1.333 1.333 0 0 1 0-1.886M16 25.334c.736 0 1.333.596 1.333 1.333v2.666a1.333 1.333 0 0 1-2.666 0v-2.666c0-.737.597-1.334 1.333-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        Qs = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)($s, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(Ys, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(Zs, {
              ...n,
              ref: r
            })]
          })
        }));
      Qs.displayName = "Sun", Qs.categories = ["accessibility", "weather", "seasons", "sustainability"], Qs.tags = ["brightness", "weather", "light", "summer", "day", "lightness", "theme", "brightness"], Qs.MD = $s, Qs.LG = Ys, Qs.XL = Zs;
      const Js = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.333 2.667a4.667 4.667 0 1 0 3.238 8.027.7.7 0 0 1 .123-.123 4.667 4.667 0 0 0-3.36-7.904m4.688 8.412a6 6 0 1 0-.943.943l2.45 2.45a.667.667 0 0 0 .943-.943zM7.333 4.667c.369 0 .667.298.667.667v1.333h1.333a.667.667 0 0 1 0 1.333H8v1.334a.667.667 0 0 1-1.333 0V8H5.333a.667.667 0 1 1 0-1.333h1.334V5.334c0-.369.298-.667.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ec = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 4.856 12.041 1 1 0 0 1 .185-.185A7 7 0 0 0 11 4m7.032 12.618a9 9 0 1 0-1.414 1.414l3.675 3.675a1 1 0 0 0 1.414-1.414zM11 7a1 1 0 0 1 1 1v2h2a1 1 0 1 1 0 2h-2v2a1 1 0 1 1-2 0v-2H8a1 1 0 1 1 0-2h2V8a1 1 0 0 1 1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        tc = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.667 5.333a9.333 9.333 0 1 0 6.475 16.055 1.3 1.3 0 0 1 .247-.246 9.333 9.333 0 0 0-6.722-15.809m9.376 16.824a11.95 11.95 0 0 0 2.624-7.49c0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12a11.95 11.95 0 0 0 7.49-2.625l4.9 4.9a1.333 1.333 0 1 0 1.886-1.885zM14.667 9.333c.736 0 1.333.597 1.333 1.333v2.667h2.667a1.333 1.333 0 1 1 0 2.667H16v2.666a1.333 1.333 0 0 1-2.667 0V16h-2.666a1.333 1.333 0 1 1 0-2.667h2.666v-2.667c0-.736.597-1.333 1.334-1.333",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        rc = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(Js, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(ec, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(tc, {
              ...n,
              ref: r
            })]
          })
        }));
      rc.displayName = "ZoomIn", rc.categories = ["accessibility", "layout", "design", "text", "photography"], rc.tags = ["magnifying glass", "plus", "zoom", "view", "see", "more", "closer"], rc.MD = Js, rc.LG = ec, rc.XL = tc;
      const lc = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M7.333 2.667a4.667 4.667 0 1 0 3.238 8.027.7.7 0 0 1 .123-.123 4.667 4.667 0 0 0-3.36-7.904m4.688 8.412a6 6 0 1 0-.943.943l2.45 2.45a.667.667 0 0 0 .943-.943zM4.667 7.333c0-.368.298-.666.666-.666h4a.667.667 0 0 1 0 1.333h-4a.667.667 0 0 1-.666-.667",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        nc = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M11 4a7 7 0 1 0 4.856 12.041 1 1 0 0 1 .185-.185A7 7 0 0 0 11 4m7.032 12.618a9 9 0 1 0-1.414 1.414l3.675 3.675a1 1 0 0 0 1.414-1.414zM7 11a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        ac = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M14.667 5.333a9.333 9.333 0 1 0 6.475 16.055 1.3 1.3 0 0 1 .247-.246 9.333 9.333 0 0 0-6.722-15.809m9.376 16.824a11.95 11.95 0 0 0 2.624-7.49c0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.627 5.372 12 12 12a11.95 11.95 0 0 0 7.49-2.625l4.9 4.9a1.333 1.333 0 1 0 1.886-1.885zm-14.71-7.49c0-.737.597-1.334 1.334-1.334h8a1.333 1.333 0 1 1 0 2.667h-8a1.333 1.333 0 0 1-1.334-1.334",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        oc = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(lc, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(nc, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(ac, {
              ...n,
              ref: r
            })]
          })
        }));
      oc.displayName = "ZoomOut", oc.categories = ["accessibility", "layout", "design", "text", "photography"], oc.tags = ["magnifying glass", "plus", "zoom", "view", "see", "less", "further"], oc.MD = lc, oc.LG = nc, oc.XL = ac;
      const ic = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: [(0, l.jsxs)("mask", {
              id: "a",
              fill: e,
              children: [(0, l.jsx)("path", {
                d: "M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0",
                fillRule: "evenodd",
                clipRule: "evenodd"
              }), (0, l.jsx)("path", {
                d: "M8 3.25c-1.693 0-3.197.644-4.35 1.507-1.141.854-1.998 1.968-2.358 2.995L1.205 8l.087.248c.36 1.027 1.217 2.141 2.359 2.995C4.803 12.106 6.307 12.75 8 12.75s3.197-.644 4.35-1.507c1.141-.854 1.998-1.968 2.358-2.995L14.794 8l-.086-.248c-.36-1.027-1.217-2.141-2.359-2.995C11.197 3.894 9.693 3.25 8 3.25m-3.45 6.792C3.702 9.41 3.101 8.644 2.807 8c.294-.644.895-1.409 1.741-2.042C5.497 5.248 6.693 4.75 8 4.75c1.308 0 2.504.499 3.452 1.208.846.633 1.447 1.398 1.74 2.042-.293.644-.894 1.409-1.74 2.042-.948.71-2.144 1.208-3.451 1.208s-2.503-.499-3.45-1.208",
                fillRule: "evenodd",
                clipRule: "evenodd"
              })]
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0M9.25 8a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M8 3.25c-1.693 0-3.197.644-4.35 1.507-1.141.854-1.998 1.968-2.358 2.995L1.205 8l.087.248c.36 1.027 1.217 2.141 2.359 2.995C4.803 12.106 6.307 12.75 8 12.75s3.197-.644 4.35-1.507c1.141-.854 1.998-1.968 2.358-2.995L14.794 8l-.086-.248c-.36-1.027-1.217-2.141-2.359-2.995C11.197 3.894 9.693 3.25 8 3.25m-3.45 6.792C3.702 9.41 3.101 8.644 2.807 8c.294-.644.895-1.409 1.741-2.042C5.497 5.248 6.693 4.75 8 4.75c1.308 0 2.504.499 3.452 1.208.846.633 1.447 1.398 1.74 2.042-.293.644-.894 1.409-1.74 2.042-.948.71-2.144 1.208-3.451 1.208s-2.503-.499-3.45-1.208",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "m3.65 4.757 2.397 3.202zM1.293 7.752l3.775 1.322zM1.205 8-2.57 6.679-3.033 8l.463 1.321zm.087.248 3.775-1.322zm2.359 2.995 2.396-3.202zm8.698 0 2.397 3.203zm2.359-2.995 3.775 1.321zM14.794 8l3.776 1.321L19.032 8l-.462-1.321zm-.086-.248 3.775-1.321zm-2.359-2.995 2.397-3.203zM2.81 8-.83 6.337-1.59 8l.76 1.663zm1.74 2.042-2.396 3.203zm0-4.084L2.153 2.755zm6.902 0 2.396-3.203zM13.19 8l3.638 1.663L17.59 8l-.76-1.663zm-1.74 2.042 2.396 3.203zM6.047 7.96C6.654 7.505 7.337 7.25 8 7.25v-8C5.277-.75 2.953.283 1.254 1.554zm-.98 1.115c.009-.025.074-.18.261-.42.18-.23.425-.475.72-.695L1.253 1.554c-1.63 1.22-3.06 2.943-3.737 4.877zm-.086.247.086-.247-7.55-2.643-.087.248zm.086-2.395-.086-.247L-2.57 9.32l.087.248zm.98 1.115a3.9 3.9 0 0 1-.719-.696 1.8 1.8 0 0 1-.26-.419L-2.484 9.57c.677 1.934 2.107 3.657 3.737 4.877zM8 8.75c-.663 0-1.346-.255-1.953-.71l-4.793 6.406C2.953 15.716 5.277 16.75 8 16.75zm1.953-.71c-.607.455-1.29.71-1.953.71v8c2.723 0 5.047-1.033 6.746-2.304zm.98-1.114c-.01.025-.074.18-.261.42a3.9 3.9 0 0 1-.72.695l4.794 6.405c1.63-1.22 3.06-2.943 3.737-4.877zm.086-.247-.087.247 7.551 2.643.087-.248zm-.087 2.395.087.247L18.57 6.68l-.087-.248zm-.98-1.115c.295.22.54.466.72.696.187.239.252.394.26.419l7.551-2.643c-.677-1.934-2.107-3.657-3.737-4.877zM8 7.25c.663 0 1.346.255 1.953.71l4.793-6.406C13.047.284 10.723-.75 8-.75zM-.83 9.663c.61 1.333 1.675 2.603 2.983 3.582L6.946 6.84a2.4 2.4 0 0 1-.402-.377c-.102-.122-.12-.176-.098-.126zm2.983-6.908C.845 3.734-.22 5.005-.83 6.337l7.276 3.326c-.023.05-.004-.004.098-.126a2.4 2.4 0 0 1 .402-.377zM8 .75c-2.336 0-4.352.886-5.847 2.005L6.946 9.16c.4-.3.775-.41 1.054-.41zm5.847 2.005C12.352 1.636 10.336.75 8 .75v8c.278 0 .654.11 1.054.41zm2.983 3.582c-.61-1.333-1.675-2.603-2.983-3.582L9.054 9.16c.172.129.307.263.402.377.102.122.12.176.098.126zm-2.983 6.908c1.308-.979 2.373-2.25 2.983-3.582L9.554 6.337c.023-.05.004.004-.098.126a2.4 2.4 0 0 1-.402.377zM8 15.25c2.335 0 4.352-.886 5.847-2.005L9.054 6.84c-.4.3-.776.41-1.054.41zm-5.847-2.005C3.648 14.364 5.664 15.25 8 15.25v-8c-.279 0-.654-.11-1.054-.41zM8 15a7 7 0 0 0 7-7H7a1 1 0 0 1 1-1zM1 8a7 7 0 0 0 7 7V7a1 1 0 0 1 1 1zm7-7a7 7 0 0 0-7 7h8a1 1 0 0 1-1 1zm7 7a7 7 0 0 0-7-7v8a1 1 0 0 1-1-1zm-7 5.25c2.9 0 5.25-2.35 5.25-5.25h-8A2.75 2.75 0 0 1 8 5.25zM2.75 8c0 2.9 2.35 5.25 5.25 5.25v-8A2.75 2.75 0 0 1 10.75 8zM8 2.75A5.25 5.25 0 0 0 2.75 8h8A2.75 2.75 0 0 1 8 10.75zM13.25 8c0-2.9-2.35-5.25-5.25-5.25v8A2.75 2.75 0 0 1 5.25 8z",
              mask: "url(#a)"
            })]
          })
        }))),
        sc = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M15.5 12a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0m-2 0a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M12 6c-2.24 0-4.237.8-5.774 1.878-1.52 1.066-2.675 2.466-3.163 3.772l-.13.35.13.35c.488 1.306 1.642 2.706 3.163 3.772C7.763 17.201 9.76 18 12 18s4.237-.8 5.774-1.878c1.52-1.066 2.675-2.466 3.163-3.772l.13-.35-.13-.35c-.488-1.306-1.642-2.706-3.163-3.772C16.237 6.799 14.24 6 12 6m-4.626 8.485c-1.108-.777-1.89-1.707-2.283-2.485.393-.778 1.175-1.708 2.283-2.485C8.637 8.63 10.24 8 12 8s3.363.63 4.626 1.515c1.108.777 1.89 1.707 2.283 2.485-.393.778-1.175 1.708-2.283 2.485C15.363 15.37 13.76 16 12 16s-3.363-.63-4.626-1.515",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        cc = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: [(0, l.jsx)("path", {
              fill: e,
              d: "M22 16a6 6 0 1 1-12 0 6 6 0 0 1 12 0m-3 0a3 3 0 1 1-6 0 3 3 0 0 1 6 0",
              fillRule: "evenodd",
              clipRule: "evenodd"
            }), (0, l.jsx)("path", {
              fill: e,
              d: "M16 6.75c-3.322 0-6.278 1.264-8.549 2.963-2.253 1.686-3.932 3.877-4.63 5.874L2.675 16l.144.413c.7 1.997 2.378 4.188 4.631 5.874 2.27 1.699 5.227 2.963 8.549 2.963s6.278-1.264 8.549-2.963c2.253-1.686 3.932-3.876 4.63-5.874l.145-.413-.144-.413c-.7-1.998-2.378-4.188-4.631-5.874-2.271-1.699-5.227-2.963-8.55-2.963M8.949 20.285c-1.764-1.32-3.015-2.93-3.606-4.285.591-1.355 1.842-2.965 3.606-4.285 1.929-1.444 4.373-2.465 7.05-2.465 2.68 0 5.123 1.021 7.052 2.465 1.764 1.32 3.014 2.93 3.606 4.285-.592 1.355-1.842 2.965-3.606 4.285-1.93 1.444-4.373 2.465-7.051 2.465s-5.122-1.021-7.051-2.465",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })]
          })
        }))),
        dc = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(ic, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(sc, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(cc, {
              ...n,
              ref: r
            })]
          })
        }));
      dc.displayName = "Eye", dc.categories = ["accessibility", "photography", "design", "security"], dc.tags = ["view", "watch", "see", "show", "expose", "reveal", "display", "visible", "visibility", "vision", "preview", "read", "password", "sign", "vision", "look"], dc.MD = ic, dc.LG = sc, dc.XL = cc;
      const uc = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "16",
            height: "16",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 16 16",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M.862.862c.26-.26.682-.26.943 0l13.333 13.333a.667.667 0 1 1-.943.943l-2.652-2.652A7.833 7.833 0 0 1 .75 8.464a1.33 1.33 0 0 1 .008-.95 7.83 7.83 0 0 1 2.537-3.277L.862 1.805a.667.667 0 0 1 0-.943m3.387 4.33A6.5 6.5 0 0 0 2 8a6.5 6.5 0 0 0 8.54 3.483l-1.186-1.186a2.667 2.667 0 0 1-3.651-3.652zm2.463 2.463a1.333 1.333 0 0 0 1.633 1.633zm4.579-2.761a6.5 6.5 0 0 0-4.057-.848.667.667 0 1 1-.157-1.324 7.83 7.83 0 0 1 8.173 4.813 1.33 1.33 0 0 1-.008.95 7.8 7.8 0 0 1-1.053 1.815.667.667 0 1 1-1.053-.817A6.5 6.5 0 0 0 14 7.999a6.5 6.5 0 0 0-2.71-3.105",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        hc = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "24",
            height: "24",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 24 24",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.293 1.293a1 1 0 0 1 1.414 0l20 20a1 1 0 0 1-1.414 1.414l-3.978-3.978a11.75 11.75 0 0 1-16.19-6.033 2 2 0 0 1 .013-1.425 11.75 11.75 0 0 1 3.804-4.915l-3.65-3.649a1 1 0 0 1 0-1.414m5.08 6.495A9.75 9.75 0 0 0 3 12a9.75 9.75 0 0 0 12.81 5.225l-1.778-1.78a4 4 0 0 1-5.478-5.477zm3.695 3.694a1.999 1.999 0 0 0 2.45 2.45zm6.868-4.141a9.74 9.74 0 0 0-6.085-1.272 1 1 0 1 1-.236-1.986 11.744 11.744 0 0 1 12.26 7.22 2 2 0 0 1-.012 1.425c-.402.974-.933 1.89-1.579 2.722a1 1 0 0 1-1.58-1.226A9.8 9.8 0 0 0 21 11.999a9.74 9.74 0 0 0-4.064-4.658",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        fc = (0, n.forwardRef)((({
          color: e = "currentColor",
          testId: t,
          label: r,
          ...n
        }, a) => (0, l.jsx)(i, {
          label: r,
          children: (0, l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            width: "32",
            height: "32",
            fill: "none",
            ...n,
            ref: a,
            "data-testid": t,
            viewBox: "0 0 32 32",
            children: (0, l.jsx)("path", {
              fill: e,
              d: "M1.724 1.724c.52-.52 1.365-.52 1.885 0l26.667 26.667a1.333 1.333 0 1 1-1.886 1.885l-5.303-5.303a15.666 15.666 0 0 1-21.588-8.045 2.67 2.67 0 0 1 .018-1.9 15.67 15.67 0 0 1 5.072-6.553L1.724 3.61a1.333 1.333 0 0 1 0-1.886m6.774 8.66A13 13 0 0 0 4 16a13 13 0 0 0 17.08 6.966l-2.371-2.372a5.333 5.333 0 0 1-7.303-7.303zm4.926 4.926a2.664 2.664 0 0 0 2.553 3.357 2.7 2.7 0 0 0 .713-.09zm9.157-5.522a13 13 0 0 0-8.113-1.696 1.333 1.333 0 1 1-.315-2.648A15.66 15.66 0 0 1 30.5 15.071a2.67 2.67 0 0 1-.018 1.9 15.7 15.7 0 0 1-2.104 3.63 1.333 1.333 0 0 1-2.107-1.636A13 13 0 0 0 28 16a13 13 0 0 0-5.419-6.211",
              fillRule: "evenodd",
              clipRule: "evenodd"
            })
          })
        }))),
        vc = (0, n.forwardRef)((({
          size: e = "MD",
          ...t
        }, r) => {
          const n = (0, s.mergeProps)(t, {
            className: g({
              size: e
            })
          });
          return (0, l.jsxs)(l.Fragment, {
            children: ["MD" === e && (0, l.jsx)(uc, {
              ...n,
              ref: r
            }), "LG" === e && (0, l.jsx)(hc, {
              ...n,
              ref: r
            }), "XL" === e && (0, l.jsx)(fc, {
              ...n,
              ref: r
            })]
          })
        }));
      vc.displayName = "EyeOff", vc.categories = ["accessibility", "photography", "design", "security"], vc.tags = ["view", "watch", "see", "hide", "conceal", "mask", "hidden", "visibility", "vision", "lock", "password", "private", "invisible"], vc.MD = uc, vc.LG = hc, vc.XL = fc
    },
    33527: (e, t, r) => {
      r.d(t, {
        Wc: () => v
      });
      var l = r(36813),
        n = r(47444),
        a = r(98952),
        o = r(77425),
        i = r(97724);
      var s = r(54270),
        c = r(71127);

      function d(e) {
        if (!e) return;
        let t = !0;
        return r => {
          let l = {
            ...r,
            preventDefault() {
              r.preventDefault()
            },
            isDefaultPrevented: () => r.isDefaultPrevented(),
            stopPropagation() {
              t = !0
            },
            continuePropagation() {
              t = !1
            },
            isPropagationStopped: () => t
          };
          e(l), t && r.stopPropagation()
        }
      }
      var u = r(116),
        h = r(78345);
      let f = c.createContext(null);

      function v(e, t) {
        let {
          focusProps: r
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: r,
            onBlur: l,
            onFocusChange: o
          } = e;
          const i = (0, c.useCallback)((e => {
              if (e.target === e.currentTarget) return l && l(e), o && o(!1), !0
            }), [l, o]),
            d = (0, s.yB)(i),
            u = (0, c.useCallback)((e => {
              const t = (0, n.TW)(e.target),
                l = t ? (0, a.bq)(t) : (0, a.bq)();
              e.target === e.currentTarget && l === (0, a.wt)(e.nativeEvent) && (r && r(e), o && o(!0), d(e))
            }), [o, r, d]);
          return {
            focusProps: {
              onFocus: !t && (r || o || l) ? u : void 0,
              onBlur: t || !l && !o ? void 0 : i
            }
          }
        }(e), {
          keyboardProps: v
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: d(e.onKeyDown),
              onKeyUp: d(e.onKeyUp)
            }
          }
        }(e), p = (0, h.v)(r, v), g = function(e) {
          let t = (0, c.useContext)(f) || {};
          (0, u.w)(t, e);
          let {
            ref: r,
            ...l
          } = t;
          return l
        }(t), w = e.isDisabled ? {} : g, m = (0, c.useRef)(e.autoFocus);
        (0, c.useEffect)((() => {
          m.current && t.current && function(e) {
            const t = (0, n.TW)(e),
              r = (0, a.bq)(t);
            if ("virtual" === (0, l.ME)()) {
              let l = r;
              (0, o.v)((() => {
                (0, a.bq)(t) === l && e.isConnected && (0, i.e)(e)
              }))
            } else(0, i.e)(e)
          }(t.current), m.current = !1
        }), [t]);
        let x = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (x = void 0), {
          focusableProps: (0, h.v)({
            ...p,
            tabIndex: x
          }, w)
        }
      }
    },
    35303: (e, t, r) => {
      function l(e, t) {
        var r = t && t.cache ? t.cache : d,
          l = t && t.serializer ? t.serializer : s;
        return (t && t.strategy ? t.strategy : i)(e, {
          cache: r,
          serializer: l
        })
      }

      function n(e, t, r, l) {
        var n, a = null == (n = l) || "number" == typeof n || "boolean" == typeof n ? l : r(l),
          o = t.get(a);
        return void 0 === o && (o = e.call(this, l), t.set(a, o)), o
      }

      function a(e, t, r) {
        var l = Array.prototype.slice.call(arguments, 3),
          n = r(l),
          a = t.get(n);
        return void 0 === a && (a = e.apply(this, l), t.set(n, a)), a
      }

      function o(e, t, r, l, n) {
        return r.bind(t, e, l, n)
      }

      function i(e, t) {
        return o(e, this, 1 === e.length ? n : a, t.cache.create(), t.serializer)
      }
      r.d(t, {
        B: () => l,
        W: () => u
      });
      var s = function() {
        return JSON.stringify(arguments)
      };

      function c() {
        this.cache = Object.create(null)
      }
      c.prototype.get = function(e) {
        return this.cache[e]
      }, c.prototype.set = function(e, t) {
        this.cache[e] = t
      };
      var d = {
          create: function() {
            return new c
          }
        },
        u = {
          variadic: function(e, t) {
            return o(e, this, a, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return o(e, this, n, t.cache.create(), t.serializer)
          }
        }
    },
    35362: (e, t, r) => {
      function l(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && ((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands.some((t => e.test(t.brand)))) || e.test(window.navigator.userAgent))
      }

      function n(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function a(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      r.d(t, {
        Tc: () => d,
        bh: () => s,
        cX: () => o,
        gm: () => f,
        m0: () => h,
        un: () => c
      });
      const o = a((function() {
          return n(/^Mac/i)
        })),
        i = a((function() {
          return n(/^iPhone/i)
        })),
        s = a((function() {
          return n(/^iPad/i) || o() && navigator.maxTouchPoints > 1
        })),
        c = a((function() {
          return i() || s()
        })),
        d = (a((function() {
          return o() || c()
        })), a((function() {
          return l(/AppleWebKit/i) && !u()
        }))),
        u = a((function() {
          return l(/Chrome/i)
        })),
        h = a((function() {
          return l(/Android/i)
        })),
        f = a((function() {
          return l(/Firefox/i)
        }))
    },
    36813: (e, t, r) => {
      r.d(t, {
        Cl: () => j,
        ME: () => b
      });
      var l = r(54270),
        n = r(35362),
        a = r(23908),
        o = r(47444);
      r(71127);
      let i = null,
        s = new Set,
        c = new Map,
        d = !1,
        u = !1;

      function h(e, t) {
        for (let r of s) r(e, t)
      }

      function f(e) {
        d = !0,
          function(e) {
            return !(e.metaKey || !(0, n.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (i = "keyboard", h("keyboard", e))
      }

      function v(e) {
        i = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (d = !0, h("pointer", e))
      }

      function p(e) {
        (0, a.Y)(e) && (d = !0, i = "virtual")
      }

      function g(e) {
        e.target !== window && e.target !== document && !l.lR && e.isTrusted && (d || u || (i = "virtual", h("virtual", e)), d = !1, u = !1)
      }

      function w() {
        l.lR || (d = !1, u = !0)
      }

      function m(e) {
        if ("undefined" == typeof window || c.get((0, o.mD)(e))) return;
        const t = (0, o.mD)(e),
          r = (0, o.TW)(e);
        let l = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          d = !0, l.apply(this, arguments)
        }, r.addEventListener("keydown", f, !0), r.addEventListener("keyup", f, !0), r.addEventListener("click", p, !0), t.addEventListener("focus", g, !0), t.addEventListener("blur", w, !1), "undefined" != typeof PointerEvent && (r.addEventListener("pointerdown", v, !0), r.addEventListener("pointermove", v, !0), r.addEventListener("pointerup", v, !0)), t.addEventListener("beforeunload", (() => {
          x(e)
        }), {
          once: !0
        }), c.set(t, {
          focus: l
        })
      }
      const x = (e, t) => {
        const r = (0, o.mD)(e),
          l = (0, o.TW)(e);
        t && l.removeEventListener("DOMContentLoaded", t), c.has(r) && (r.HTMLElement.prototype.focus = c.get(r).focus, l.removeEventListener("keydown", f, !0), l.removeEventListener("keyup", f, !0), l.removeEventListener("click", p, !0), r.removeEventListener("focus", g, !0), r.removeEventListener("blur", w, !1), "undefined" != typeof PointerEvent && (l.removeEventListener("pointerdown", v, !0), l.removeEventListener("pointermove", v, !0), l.removeEventListener("pointerup", v, !0)), c.delete(r))
      };

      function b() {
        return i
      }

      function j(e) {
        i = e, h(e, null)
      }
      "undefined" != typeof document && function(e) {
        const t = (0, o.TW)(e);
        let r;
        "loading" !== t.readyState ? m(e) : (r = () => {
          m(e)
        }, t.addEventListener("DOMContentLoaded", r))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"])
    },
    37784: (e, t, r) => {
      r.d(t, {
        KZ: () => c,
        Lf: () => s
      });
      var l = r(71127);
      const n = {
          badInput: !1,
          customError: !1,
          patternMismatch: !1,
          rangeOverflow: !1,
          rangeUnderflow: !1,
          stepMismatch: !1,
          tooLong: !1,
          tooShort: !1,
          typeMismatch: !1,
          valueMissing: !1,
          valid: !0
        },
        a = {
          ...n,
          customError: !0,
          valid: !1
        },
        o = {
          isInvalid: !1,
          validationDetails: n,
          validationErrors: []
        },
        i = (0, l.createContext)({}),
        s = "__formValidationState" + Date.now();

      function c(e) {
        if (e[s]) {
          let {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: l,
            resetValidation: n,
            commitValidation: a
          } = e[s];
          return {
            realtimeValidation: t,
            displayValidation: r,
            updateValidation: l,
            resetValidation: n,
            commitValidation: a
          }
        }
        return function(e) {
          let {
            isInvalid: t,
            validationState: r,
            name: n,
            value: s,
            builtinValidation: c,
            validate: f,
            validationBehavior: v = "aria"
          } = e;
          r && (t || (t = "invalid" === r));
          let p = void 0 !== t ? {
              isInvalid: t,
              validationErrors: [],
              validationDetails: a
            } : null,
            g = (0, l.useMemo)((() => {
              if (!f || null == s) return null;
              let e = function(e, t) {
                if ("function" == typeof e) {
                  let r = e(t);
                  if (r && "boolean" != typeof r) return d(r)
                }
                return []
              }(f, s);
              return u(e)
            }), [f, s]);
          (null == c ? void 0 : c.validationDetails.valid) && (c = void 0);
          let w = (0, l.useContext)(i),
            m = (0, l.useMemo)((() => n ? Array.isArray(n) ? n.flatMap((e => d(w[e]))) : d(w[n]) : []), [w, n]),
            [x, b] = (0, l.useState)(w),
            [j, y] = (0, l.useState)(!1);
          w !== x && (b(w), y(!1));
          let R = (0, l.useMemo)((() => u(j ? [] : m)), [j, m]),
            M = (0, l.useRef)(o),
            [L, C] = (0, l.useState)(o),
            E = (0, l.useRef)(o),
            [A, P] = (0, l.useState)(!1);
          return (0, l.useEffect)((() => {
            if (!A) return;
            P(!1);
            let e = g || c || M.current;
            h(e, E.current) || (E.current = e, C(e))
          })), {
            realtimeValidation: p || R || g || c || o,
            displayValidation: "native" === v ? p || R || L : p || R || g || c || L,
            updateValidation(e) {
              "aria" !== v || h(L, e) ? M.current = e : C(e)
            },
            resetValidation() {
              let e = o;
              h(e, E.current) || (E.current = e, C(e)), "native" === v && P(!1), y(!0)
            },
            commitValidation() {
              "native" === v && P(!0), y(!0)
            }
          }
        }(e)
      }

      function d(e) {
        return e ? Array.isArray(e) ? e : [e] : []
      }

      function u(e) {
        return e.length ? {
          isInvalid: !0,
          validationErrors: e,
          validationDetails: a
        } : null
      }

      function h(e, t) {
        return e === t || !!e && !!t && e.isInvalid === t.isInvalid && e.validationErrors.length === t.validationErrors.length && e.validationErrors.every(((e, r) => e === t.validationErrors[r])) && Object.entries(e.validationDetails).every((([e, r]) => t.validationDetails[e] === r))
      }
    },
    39891: (e, t, r) => {
      r.d(t, {
        $: () => i
      });
      const l = new Set(["id"]),
        n = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        a = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        o = /^(data-.*)$/;

      function i(e, t = {}) {
        let {
          labelable: r,
          isLink: i,
          propNames: s
        } = t, c = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (l.has(t) || r && n.has(t) || i && a.has(t) || (null == s ? void 0 : s.has(t)) || o.test(t)) && (c[t] = e[t]);
        return c
      }
    },
    41527: (e, t, r) => {
      r.d(t, {
        A: () => i
      });
      const l = {
        active: !0,
        breakpoints: {},
        snapped: "is-snapped",
        inView: "is-in-view",
        draggable: "is-draggable",
        dragging: "is-dragging",
        loop: "is-loop"
      };

      function n(e) {
        return (Array.isArray(e) ? e : [e]).filter(Boolean)
      }

      function a(e, t) {
        e && t.length && e.classList.remove(...t)
      }

      function o(e, t) {
        e && t.length && e.classList.add(...t)
      }

      function i(e = {}) {
        let t, r, s, c, d = [],
          u = [];
        const h = ["select"],
          f = ["pointerDown", "pointerUp"],
          v = ["slidesInView"],
          p = {
            snapped: [],
            inView: [],
            draggable: [],
            dragging: [],
            loop: []
          };

        function g(e, t) {
          ("pointerDown" === t ? o : a)(s, p.dragging)
        }

        function w(e = [], t = [], r) {
          const l = t.map((e => c[e])),
            n = e.map((e => c[e]));
          return l.forEach((e => a(e, r))), n.forEach((e => o(e, r))), e
        }

        function m() {
          const {
            slideRegistry: e
          } = r.internalEngine(), t = e[r.selectedScrollSnap()];
          d = w(t, d, p.snapped)
        }

        function x() {
          const e = r.slidesInView();
          u = w(e, u, p.inView)
        }
        return {
          name: "classNames",
          options: e,
          init: function(a, d) {
            r = a;
            const {
              mergeOptions: u,
              optionsAtMedia: w
            } = d, b = u(l, i.globalOptions), j = u(b, e);
            t = w(j), s = r.rootNode(), c = r.slideNodes();
            const {
              watchDrag: y,
              loop: R
            } = r.internalEngine().options, M = !!y;
            t.loop && R && (p.loop = n(t.loop), o(s, p.loop)), t.draggable && M && (p.draggable = n(t.draggable), o(s, p.draggable)), t.dragging && (p.dragging = n(t.dragging), f.forEach((e => r.on(e, g)))), t.snapped && (p.snapped = n(t.snapped), h.forEach((e => r.on(e, m))), m()), t.inView && (p.inView = n(t.inView), v.forEach((e => r.on(e, x))), x())
          },
          destroy: function() {
            f.forEach((e => r.off(e, g))), h.forEach((e => r.off(e, m))), v.forEach((e => r.off(e, x))), a(s, p.loop), a(s, p.draggable), a(s, p.dragging), w([], d, p.snapped), w([], u, p.inView), Object.keys(p).forEach((e => {
              p[e] = []
            }))
          }
        }
      }
      i.globalOptions = void 0
    },
    43042: (e, t, r) => {
      r.d(t, {
        Z: () => s
      });
      var l = r(37784),
        n = r(48436),
        a = r(71127);
      let o = Math.round(1e10 * Math.random()),
        i = 0;

      function s(e) {
        let t = (0, a.useMemo)((() => e.name || `radio-group-${o}-${++i}`), [e.name]);
        var r;
        let [s, c] = (0, n.P)(e.value, null !== (r = e.defaultValue) && void 0 !== r ? r : null, e.onChange), [d, u] = (0, a.useState)(null), h = (0, l.KZ)({
          ...e,
          value: s
        }), f = h.displayValidation.isInvalid;
        return {
          ...h,
          name: t,
          selectedValue: s,
          setSelectedValue: t => {
            e.isReadOnly || e.isDisabled || (c(t), h.commitValidation())
          },
          lastFocusedValue: d,
          setLastFocusedValue: u,
          isDisabled: e.isDisabled || !1,
          isReadOnly: e.isReadOnly || !1,
          isRequired: e.isRequired || !1,
          validationState: e.validationState || (f ? "invalid" : null),
          isInvalid: f
        }
      }
    },
    45665: (e, t, r) => {
      r.d(t, {
        Tw: () => u,
        Bi: () => d,
        X1: () => h
      });
      var l = r(31985),
        n = r(85753),
        a = r(71127);
      var o = r(87791);
      let i, s = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        c = new Map;

      function d(e) {
        let [t, r] = (0, a.useState)(e), n = (0, a.useRef)(null), d = (0, o.Cc)(t), u = (0, a.useRef)(null);
        if (i && i.register(u, d), s) {
          const e = c.get(d);
          e && !e.includes(n) ? e.push(n) : c.set(d, [n])
        }
        return (0, l.N)((() => {
          let e = d;
          return () => {
            i && i.unregister(u), c.delete(e)
          }
        }), [d]), (0, a.useEffect)((() => {
          let e = n.current;
          return e && r(e), () => {
            e && (n.current = null)
          }
        })), d
      }

      function u(e, t) {
        if (e === t) return e;
        let r = c.get(e);
        if (r) return r.forEach((e => e.current = t)), t;
        let l = c.get(t);
        return l ? (l.forEach((t => t.current = e)), e) : t
      }

      function h(e = []) {
        let t = d(),
          [r, o] = function(e) {
            let [t, r] = (0, a.useState)(e), o = (0, a.useRef)(null), i = (0, n.J)((() => {
              if (!o.current) return;
              let e = o.current.next();
              e.done ? o.current = null : t === e.value ? i() : r(e.value)
            }));
            (0, l.N)((() => {
              o.current && i()
            }));
            let s = (0, n.J)((e => {
              o.current = e(t), i()
            }));
            return [t, s]
          }(t),
          i = (0, a.useCallback)((() => {
            o((function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            }))
          }), [t, o]);
        return (0, l.N)(i, [t, i, ...e]), r
      }
      "undefined" != typeof FinalizationRegistry && (i = new FinalizationRegistry((e => {
        c.delete(e)
      })))
    },
    46113: (e, t, r) => {
      r.d(t, {
        m: () => _
      });
      var l = r(50060),
        n = r(39891),
        a = r(45665),
        o = r(78345),
        i = r(47444);

      function s(e, t) {
        return "#comment" !== e.nodeName && function(e) {
          const t = (0, i.mD)(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: r,
            visibility: l
          } = e.style, n = "none" !== r && "hidden" !== l && "collapse" !== l;
          if (n) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: r,
              visibility: l
            } = t(e);
            n = "none" !== r && "hidden" !== l && "collapse" !== l
          }
          return n
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || s(e.parentElement, e))
      }
      var c = r(80477),
        d = r(98952),
        u = r(75463);
      class h {
        get currentNode() {
          return this._currentNode
        }
        set currentNode(e) {
          if (!(0, d.sD)(this.root, e)) throw new Error("Cannot set currentNode to a node that is not contained by the root node.");
          const t = [];
          let r = e,
            l = e;
          for (this._currentNode = e; r && r !== this.root;)
            if (r.nodeType === Node.DOCUMENT_FRAGMENT_NODE) {
              const e = r,
                n = this._doc.createTreeWalker(e, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
              t.push(n), n.currentNode = l, this._currentSetFor.add(n), r = l = e.host
            } else r = r.parentNode;
          const n = this._doc.createTreeWalker(this.root, this.whatToShow, {
            acceptNode: this._acceptNode
          });
          t.push(n), n.currentNode = l, this._currentSetFor.add(n), this._walkerStack = t
        }
        get doc() {
          return this._doc
        }
        firstChild() {
          let e = this.currentNode,
            t = this.nextNode();
          return (0, d.sD)(e, t) ? (t && (this.currentNode = t), t) : (this.currentNode = e, null)
        }
        lastChild() {
          let e = this._walkerStack[0].lastChild();
          return e && (this.currentNode = e), e
        }
        nextNode() {
          const e = this._walkerStack[0].nextNode();
          if (e) {
            if (e.shadowRoot) {
              var t;
              let r;
              if ("function" == typeof this.filter ? r = this.filter(e) : (null === (t = this.filter) || void 0 === t ? void 0 : t.acceptNode) && (r = this.filter.acceptNode(e)), r === NodeFilter.FILTER_ACCEPT) return this.currentNode = e, e;
              let l = this.nextNode();
              return l && (this.currentNode = l), l
            }
            return e && (this.currentNode = e), e
          }
          if (this._walkerStack.length > 1) {
            this._walkerStack.shift();
            let e = this.nextNode();
            return e && (this.currentNode = e), e
          }
          return null
        }
        previousNode() {
          const e = this._walkerStack[0];
          if (e.currentNode === e.root) {
            if (this._currentSetFor.has(e)) {
              if (this._currentSetFor.delete(e), this._walkerStack.length > 1) {
                this._walkerStack.shift();
                let e = this.previousNode();
                return e && (this.currentNode = e), e
              }
              return null
            }
            return null
          }
          const t = e.previousNode();
          if (t) {
            if (t.shadowRoot) {
              var r;
              let e;
              if ("function" == typeof this.filter ? e = this.filter(t) : (null === (r = this.filter) || void 0 === r ? void 0 : r.acceptNode) && (e = this.filter.acceptNode(t)), e === NodeFilter.FILTER_ACCEPT) return t && (this.currentNode = t), t;
              let l = this.lastChild();
              return l && (this.currentNode = l), l
            }
            return t && (this.currentNode = t), t
          }
          if (this._walkerStack.length > 1) {
            this._walkerStack.shift();
            let e = this.previousNode();
            return e && (this.currentNode = e), e
          }
          return null
        }
        nextSibling() {
          return null
        }
        previousSibling() {
          return null
        }
        parentNode() {
          return null
        }
        constructor(e, t, r, l) {
          this._walkerStack = [], this._currentSetFor = new Set, this._acceptNode = e => {
            if (e.nodeType === Node.ELEMENT_NODE) {
              const r = e.shadowRoot;
              if (r) {
                const e = this._doc.createTreeWalker(r, this.whatToShow, {
                  acceptNode: this._acceptNode
                });
                return this._walkerStack.unshift(e), NodeFilter.FILTER_ACCEPT
              }
              var t;
              if ("function" == typeof this.filter) return this.filter(e);
              if (null === (t = this.filter) || void 0 === t ? void 0 : t.acceptNode) return this.filter.acceptNode(e);
              if (null === this.filter) return NodeFilter.FILTER_ACCEPT
            }
            return NodeFilter.FILTER_SKIP
          }, this._doc = e, this.root = t, this.filter = null != l ? l : null, this.whatToShow = null != r ? r : NodeFilter.SHOW_ALL, this._currentNode = t, this._walkerStack.unshift(e.createTreeWalker(t, r, this._acceptNode));
          const n = t.shadowRoot;
          if (n) {
            const e = this._doc.createTreeWalker(n, this.whatToShow, {
              acceptNode: this._acceptNode
            });
            this._walkerStack.unshift(e)
          }
        }
      }
      var f = r(71127);

      function v(e, t) {
        return !!e && !!t && t.some((t => t.contains(e)))
      }

      function p(e, t, r) {
        let l = (null == t ? void 0 : t.tabbable) ? c.A : c.t,
          n = (null == e ? void 0 : e.nodeType) === Node.ELEMENT_NODE ? e : null,
          a = (0, i.TW)(n),
          o = function(e, t, r, l) {
            return (0, u.Nf)() ? new h(e, t, r, l) : e.createTreeWalker(t, r, l)
          }(a, e || a, NodeFilter.SHOW_ELEMENT, {
            acceptNode(e) {
              var n;
              return (null == t || null === (n = t.from) || void 0 === n ? void 0 : n.contains(e)) ? NodeFilter.FILTER_REJECT : !l(e) || !s(e) || r && !v(e, r) || (null == t ? void 0 : t.accept) && !t.accept(e) ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
            }
          });
        return (null == t ? void 0 : t.from) && (o.currentNode = t.from), o
      }
      class g {
        get size() {
          return this.fastMap.size
        }
        getTreeNode(e) {
          return this.fastMap.get(e)
        }
        addTreeNode(e, t, r) {
          let l = this.fastMap.get(null != t ? t : null);
          if (!l) return;
          let n = new w({
            scopeRef: e
          });
          l.addChild(n), n.parent = l, this.fastMap.set(e, n), r && (n.nodeToRestore = r)
        }
        addNode(e) {
          this.fastMap.set(e.scopeRef, e)
        }
        removeTreeNode(e) {
          if (null === e) return;
          let t = this.fastMap.get(e);
          if (!t) return;
          let r = t.parent;
          for (let e of this.traverse()) e !== t && t.nodeToRestore && e.nodeToRestore && t.scopeRef && t.scopeRef.current && v(e.nodeToRestore, t.scopeRef.current) && (e.nodeToRestore = t.nodeToRestore);
          let l = t.children;
          r && (r.removeChild(t), l.size > 0 && l.forEach((e => r && r.addChild(e)))), this.fastMap.delete(t.scopeRef)
        }* traverse(e = this.root) {
          if (null != e.scopeRef && (yield e), e.children.size > 0)
            for (let t of e.children) yield* this.traverse(t)
        }
        clone() {
          var e;
          let t = new g;
          var r;
          for (let l of this.traverse()) t.addTreeNode(l.scopeRef, null !== (r = null === (e = l.parent) || void 0 === e ? void 0 : e.scopeRef) && void 0 !== r ? r : null, l.nodeToRestore);
          return t
        }
        constructor() {
          this.fastMap = new Map, this.root = new w({
            scopeRef: null
          }), this.fastMap.set(null, this.root)
        }
      }
      class w {
        addChild(e) {
          this.children.add(e), e.parent = this
        }
        removeChild(e) {
          this.children.delete(e), e.parent = void 0
        }
        constructor(e) {
          this.children = new Set, this.contain = !1, this.scopeRef = e.scopeRef
        }
      }
      new g;
      var m = r(3431),
        x = r(54270),
        b = r(85124);
      const j = new Set(["Arab", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]),
        y = new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);

      function R(e) {
        if (Intl.Locale) {
          let t = new Intl.Locale(e).maximize(),
            r = "function" == typeof t.getTextInfo ? t.getTextInfo() : t.textInfo;
          if (r) return "rtl" === r.direction;
          if (t.script) return j.has(t.script)
        }
        let t = e.split("-")[0];
        return y.has(t)
      }
      var M = r(87791);
      const L = Symbol.for("react-aria.i18n.locale");

      function C() {
        let e = "undefined" != typeof window && window[L] || "undefined" != typeof navigator && (navigator.language || navigator.userLanguage) || "en-US";
        try {
          Intl.DateTimeFormat.supportedLocalesOf([e])
        } catch {
          e = "en-US"
        }
        return {
          locale: e,
          direction: R(e) ? "rtl" : "ltr"
        }
      }
      let E = C(),
        A = new Set;

      function P() {
        E = C();
        for (let e of A) e(E)
      }
      const I = f.createContext(null);

      function S() {
        let e = function() {
          let e = (0, M.wR)(),
            [t, r] = (0, f.useState)(E);
          return (0, f.useEffect)((() => (0 === A.size && window.addEventListener("languagechange", P), A.add(r), () => {
            A.delete(r), 0 === A.size && window.removeEventListener("languagechange", P)
          })), []), e ? {
            locale: "en-US",
            direction: "ltr"
          } : t
        }();
        return (0, f.useContext)(I) || e
      }

      function _(e, t) {
        let {
          name: r,
          isReadOnly: s,
          isRequired: c,
          isDisabled: u,
          orientation: h = "vertical",
          validationBehavior: v = "aria"
        } = e, {
          direction: g
        } = S(), {
          isInvalid: w,
          validationErrors: j,
          validationDetails: y
        } = t.displayValidation, {
          labelProps: R,
          fieldProps: M,
          descriptionProps: L,
          errorMessageProps: C
        } = (0, m.M)({
          ...e,
          labelElementType: "span",
          isInvalid: t.isInvalid,
          errorMessage: e.errorMessage || j
        }), E = (0, n.$)(e, {
          labelable: !0
        }), {
          focusWithinProps: A
        } = function(e) {
          let {
            isDisabled: t,
            onBlurWithin: r,
            onFocusWithin: l,
            onFocusWithinChange: n
          } = e, a = (0, f.useRef)({
            isFocusWithin: !1
          }), {
            addGlobalListener: o,
            removeAllGlobalListeners: s
          } = (0, b.A)(), c = (0, f.useCallback)((e => {
            e.currentTarget.contains(e.target) && a.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget) && (a.current.isFocusWithin = !1, s(), r && r(e), n && n(!1))
          }), [r, n, a, s]), u = (0, x.yB)(c), h = (0, f.useCallback)((e => {
            if (!e.currentTarget.contains(e.target)) return;
            const t = (0, i.TW)(e.target),
              r = (0, d.bq)(t);
            if (!a.current.isFocusWithin && r === (0, d.wt)(e.nativeEvent)) {
              l && l(e), n && n(!0), a.current.isFocusWithin = !0, u(e);
              let r = e.currentTarget;
              o(t, "focus", (e => {
                if (a.current.isFocusWithin && !(0, d.sD)(r, e.target)) {
                  let l = new t.defaultView.FocusEvent("blur", {
                    relatedTarget: e.target
                  });
                  (0, x.o1)(l, r);
                  let n = (0, x.eg)(l);
                  c(n)
                }
              }), {
                capture: !0
              })
            }
          }), [l, n, u, o, c]);
          return t ? {
            focusWithinProps: {
              onFocus: void 0,
              onBlur: void 0
            }
          } : {
            focusWithinProps: {
              onFocus: h,
              onBlur: c
            }
          }
        }({
          onBlurWithin(r) {
            var l;
            null === (l = e.onBlur) || void 0 === l || l.call(e, r), t.selectedValue || t.setLastFocusedValue(null)
          },
          onFocusWithin: e.onFocus,
          onFocusWithinChange: e.onFocusChange
        }), P = (0, a.Bi)(r);
        return l.V.set(t, {
          name: P,
          descriptionId: L.id,
          errorMessageId: C.id,
          validationBehavior: v
        }), {
          radioGroupProps: (0, o.v)(E, {
            role: "radiogroup",
            onKeyDown: e => {
              let r;
              switch (e.key) {
                case "ArrowRight":
                  r = "rtl" === g && "vertical" !== h ? "prev" : "next";
                  break;
                case "ArrowLeft":
                  r = "rtl" === g && "vertical" !== h ? "next" : "prev";
                  break;
                case "ArrowDown":
                  r = "next";
                  break;
                case "ArrowUp":
                  r = "prev";
                  break;
                default:
                  return
              }
              e.preventDefault();
              let l, n = p(e.currentTarget, {
                from: e.target
              });
              "next" === r ? (l = n.nextNode(), l || (n.currentNode = e.currentTarget, l = n.firstChild())) : (l = n.previousNode(), l || (n.currentNode = e.currentTarget, l = n.lastChild())), l && (l.focus(), t.setSelectedValue(l.value))
            },
            "aria-invalid": t.isInvalid || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-readonly": s || void 0,
            "aria-required": c || void 0,
            "aria-disabled": u || void 0,
            "aria-orientation": h,
            ...M,
            ...A
          }),
          labelProps: R,
          descriptionProps: L,
          errorMessageProps: C,
          isInvalid: w,
          validationErrors: j,
          validationDetails: y
        }
      }
    },
    47444: (e, t, r) => {
      r.d(t, {
        Ng: () => a,
        TW: () => l,
        mD: () => n
      });
      const l = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        n = e => e && "window" in e && e.window === e ? e : l(e).defaultView || window;

      function a(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
    },
    48436: (e, t, r) => {
      r.d(t, {
        P: () => n
      });
      var l = r(71127);

      function n(e, t, r) {
        let [n, a] = (0, l.useState)(e || t), o = (0, l.useRef)(void 0 !== e), i = void 0 !== e;
        (0, l.useEffect)((() => {
          o.current, o.current = i
        }), [i]);
        let s = i ? e : n,
          c = (0, l.useCallback)(((e, ...t) => {
            let l = (e, ...t) => {
              r && (Object.is(s, e) || r(e, ...t)), i || (s = e)
            };
            "function" == typeof e ? a(((r, ...n) => {
              let a = e(i ? s : r, ...n);
              return l(a, ...t), i ? r : a
            })) : (i || a(e), l(e, ...t))
          }), [i, s, r]);
        return [s, c]
      }
    },
    49118: (e, t, r) => {
      r.d(t, {
        b: () => i
      });
      var l = r(71127),
        n = r(7492),
        a = r(70954),
        o = ({
          children: e,
          label: t
        }) => {
          const r = l.Children.only(e);
          return (0, a.jsxs)(a.Fragment, {
            children: [l.cloneElement(r, {
              "aria-hidden": "true",
              focusable: "false"
            }), (0, a.jsx)(n.Root, {
              children: t
            })]
          })
        };
      o.displayName = "AccessibleIcon";
      var i = o
    },
    50060: (e, t, r) => {
      r.d(t, {
        V: () => l
      });
      const l = new WeakMap
    },
    50438: (e, t, r) => {
      r.d(t, {
        N: () => s
      });
      var l = r(71127),
        n = r(91173),
        a = r(21423),
        o = r(21222),
        i = r(70954);

      function s(e) {
        const t = e + "CollectionProvider",
          [r, s] = (0, n.A)(t),
          [c, d] = r(t, {
            collectionRef: {
              current: null
            },
            itemMap: new Map
          }),
          u = e => {
            const {
              scope: t,
              children: r
            } = e, n = l.useRef(null), a = l.useRef(new Map).current;
            return (0, i.jsx)(c, {
              scope: t,
              itemMap: a,
              collectionRef: n,
              children: r
            })
          };
        u.displayName = t;
        const h = e + "CollectionSlot",
          f = (0, o.createSlot)(h),
          v = l.forwardRef(((e, t) => {
            const {
              scope: r,
              children: l
            } = e, n = d(h, r), o = (0, a.s)(t, n.collectionRef);
            return (0, i.jsx)(f, {
              ref: o,
              children: l
            })
          }));
        v.displayName = h;
        const p = e + "CollectionItemSlot",
          g = "data-radix-collection-item",
          w = (0, o.createSlot)(p),
          m = l.forwardRef(((e, t) => {
            const {
              scope: r,
              children: n,
              ...o
            } = e, s = l.useRef(null), c = (0, a.s)(t, s), u = d(p, r);
            return l.useEffect((() => (u.itemMap.set(s, {
              ref: s,
              ...o
            }), () => {
              u.itemMap.delete(s)
            }))), (0, i.jsx)(w, {
              [g]: "",
              ref: c,
              children: n
            })
          }));
        return m.displayName = p, [{
          Provider: u,
          Slot: v,
          ItemSlot: m
        }, function(t) {
          const r = d(e + "CollectionConsumer", t);
          return l.useCallback((() => {
            const e = r.collectionRef.current;
            if (!e) return [];
            const t = Array.from(e.querySelectorAll(`[${g}]`));
            return Array.from(r.itemMap.values()).sort(((e, r) => t.indexOf(e.ref.current) - t.indexOf(r.ref.current)))
          }), [r.collectionRef, r.itemMap])
        }, s]
      }
      Map
    },
    50617: (e, t, r) => {
      r.d(t, {
        i: () => s
      });
      var l = r(39891),
        n = r(78345),
        a = r(79623),
        o = r(33527),
        i = r(88622);

      function s(e, t) {
        let {
          elementType: r = "a",
          onPress: s,
          onPressStart: c,
          onPressEnd: d,
          onClick: u,
          isDisabled: h,
          ...f
        } = e, v = {};
        "a" !== r && (v = {
          role: "link",
          tabIndex: h ? void 0 : 0
        });
        let {
          focusableProps: p
        } = (0, o.Wc)(e, t), {
          pressProps: g,
          isPressed: w
        } = (0, i.d)({
          onPress: s,
          onPressStart: c,
          onPressEnd: d,
          onClick: u,
          isDisabled: h,
          ref: t
        }), m = (0, l.$)(f, {
          labelable: !0
        }), x = (0, n.v)(p, g), b = (0, a.rd)(), j = (0, a._h)(e);
        return {
          isPressed: w,
          linkProps: (0, n.v)(m, j, {
            ...x,
            ...v,
            "aria-disabled": h || void 0,
            "aria-current": e["aria-current"],
            onClick: t => {
              var r;
              null === (r = g.onClick) || void 0 === r || r.call(g, t), !b.isNative && t.currentTarget instanceof HTMLAnchorElement && t.currentTarget.href && !t.isDefaultPrevented() && (0, a.sU)(t.currentTarget, t) && e.href && (t.preventDefault(), b.open(t.currentTarget, t, e.href, e.routerOptions))
            }
          })
        }
      }
    },
    50691: (e, t, r) => {
      r.d(t, {
        LM: () => W,
        Ze: () => $,
        bL: () => K,
        zi: () => Y
      });
      var l = r(71127),
        n = r(51347),
        a = r(79315),
        o = r(91173),
        i = r(21423),
        s = r(26727),
        c = r(59219),
        d = r(92600),
        u = r(72213),
        h = r(22517),
        f = r(70954),
        v = "ScrollArea",
        [p, g] = (0, o.A)(v),
        [w, m] = p(v),
        x = l.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            type: a = "hover",
            dir: o,
            scrollHideDelay: s = 600,
            ...d
          } = e, [u, h] = l.useState(null), [v, p] = l.useState(null), [g, m] = l.useState(null), [x, b] = l.useState(null), [j, y] = l.useState(null), [R, M] = l.useState(0), [L, C] = l.useState(0), [E, A] = l.useState(!1), [P, I] = l.useState(!1), S = (0, i.s)(t, (e => h(e))), _ = (0, c.jH)(o);
          return (0, f.jsx)(w, {
            scope: r,
            type: a,
            dir: _,
            scrollHideDelay: s,
            scrollArea: u,
            viewport: v,
            onViewportChange: p,
            content: g,
            onContentChange: m,
            scrollbarX: x,
            onScrollbarXChange: b,
            scrollbarXEnabled: E,
            onScrollbarXEnabledChange: A,
            scrollbarY: j,
            onScrollbarYChange: y,
            scrollbarYEnabled: P,
            onScrollbarYEnabledChange: I,
            onCornerWidthChange: M,
            onCornerHeightChange: C,
            children: (0, f.jsx)(n.sG.div, {
              dir: _,
              ...d,
              ref: S,
              style: {
                position: "relative",
                "--radix-scroll-area-corner-width": R + "px",
                "--radix-scroll-area-corner-height": L + "px",
                ...e.style
              }
            })
          })
        }));
      x.displayName = v;
      var b = "ScrollAreaViewport",
        j = l.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            children: a,
            nonce: o,
            ...s
          } = e, c = m(b, r), d = l.useRef(null), u = (0, i.s)(t, d, c.onViewportChange);
          return (0, f.jsxs)(f.Fragment, {
            children: [(0, f.jsx)("style", {
              dangerouslySetInnerHTML: {
                __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
              },
              nonce: o
            }), (0, f.jsx)(n.sG.div, {
              "data-radix-scroll-area-viewport": "",
              ...s,
              ref: u,
              style: {
                overflowX: c.scrollbarXEnabled ? "scroll" : "hidden",
                overflowY: c.scrollbarYEnabled ? "scroll" : "hidden",
                ...e.style
              },
              children: (0, f.jsx)("div", {
                ref: c.onContentChange,
                style: {
                  minWidth: "100%",
                  display: "table"
                },
                children: a
              })
            })]
          })
        }));
      j.displayName = b;
      var y = "ScrollAreaScrollbar",
        R = l.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, a = m(y, e.__scopeScrollArea), {
            onScrollbarXEnabledChange: o,
            onScrollbarYEnabledChange: i
          } = a, s = "horizontal" === e.orientation;
          return l.useEffect((() => (s ? o(!0) : i(!0), () => {
            s ? o(!1) : i(!1)
          })), [s, o, i]), "hover" === a.type ? (0, f.jsx)(M, {
            ...n,
            ref: t,
            forceMount: r
          }) : "scroll" === a.type ? (0, f.jsx)(L, {
            ...n,
            ref: t,
            forceMount: r
          }) : "auto" === a.type ? (0, f.jsx)(C, {
            ...n,
            ref: t,
            forceMount: r
          }) : "always" === a.type ? (0, f.jsx)(E, {
            ...n,
            ref: t
          }) : null
        }));
      R.displayName = y;
      var M = l.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = m(y, e.__scopeScrollArea), [i, s] = l.useState(!1);
          return l.useEffect((() => {
            const e = o.scrollArea;
            let t = 0;
            if (e) {
              const r = () => {
                  window.clearTimeout(t), s(!0)
                },
                l = () => {
                  t = window.setTimeout((() => s(!1)), o.scrollHideDelay)
                };
              return e.addEventListener("pointerenter", r), e.addEventListener("pointerleave", l), () => {
                window.clearTimeout(t), e.removeEventListener("pointerenter", r), e.removeEventListener("pointerleave", l)
              }
            }
          }), [o.scrollArea, o.scrollHideDelay]), (0, f.jsx)(a.C, {
            present: r || i,
            children: (0, f.jsx)(C, {
              "data-state": i ? "visible" : "hidden",
              ...n,
              ref: t
            })
          })
        })),
        L = l.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...n
          } = e, o = m(y, e.__scopeScrollArea), i = "horizontal" === e.orientation, s = q((() => d("SCROLL_END")), 100), [c, d] = (u = {
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
          }, l.useReducer(((e, t) => u[e][t] ?? e), "hidden"));
          var u;
          return l.useEffect((() => {
            if ("idle" === c) {
              const e = window.setTimeout((() => d("HIDE")), o.scrollHideDelay);
              return () => window.clearTimeout(e)
            }
          }), [c, o.scrollHideDelay, d]), l.useEffect((() => {
            const e = o.viewport,
              t = i ? "scrollLeft" : "scrollTop";
            if (e) {
              let r = e[t];
              const l = () => {
                const l = e[t];
                r !== l && (d("SCROLL"), s()), r = l
              };
              return e.addEventListener("scroll", l), () => e.removeEventListener("scroll", l)
            }
          }), [o.viewport, i, d, s]), (0, f.jsx)(a.C, {
            present: r || "hidden" !== c,
            children: (0, f.jsx)(E, {
              "data-state": "hidden" === c ? "hidden" : "visible",
              ...n,
              ref: t,
              onPointerEnter: (0, h.m)(e.onPointerEnter, (() => d("POINTER_ENTER"))),
              onPointerLeave: (0, h.m)(e.onPointerLeave, (() => d("POINTER_LEAVE")))
            })
          })
        })),
        C = l.forwardRef(((e, t) => {
          const r = m(y, e.__scopeScrollArea),
            {
              forceMount: n,
              ...o
            } = e,
            [i, s] = l.useState(!1),
            c = "horizontal" === e.orientation,
            d = q((() => {
              if (r.viewport) {
                const e = r.viewport.offsetWidth < r.viewport.scrollWidth,
                  t = r.viewport.offsetHeight < r.viewport.scrollHeight;
                s(c ? e : t)
              }
            }), 10);
          return U(r.viewport, d), U(r.content, d), (0, f.jsx)(a.C, {
            present: n || i,
            children: (0, f.jsx)(E, {
              "data-state": i ? "visible" : "hidden",
              ...o,
              ref: t
            })
          })
        })),
        E = l.forwardRef(((e, t) => {
          const {
            orientation: r = "vertical",
            ...n
          } = e, a = m(y, e.__scopeScrollArea), o = l.useRef(null), i = l.useRef(0), [s, c] = l.useState({
            content: 0,
            viewport: 0,
            scrollbar: {
              size: 0,
              paddingStart: 0,
              paddingEnd: 0
            }
          }), d = k(s.viewport, s.content), u = {
            ...n,
            sizes: s,
            onSizesChange: c,
            hasThumb: Boolean(d > 0 && d < 1),
            onThumbChange: e => o.current = e,
            onThumbPointerUp: () => i.current = 0,
            onThumbPointerDown: e => i.current = e
          };

          function h(e, t) {
            return function(e, t, r, l = "ltr") {
              const n = V(r),
                a = t || n / 2,
                o = n - a,
                i = r.scrollbar.paddingStart + a,
                s = r.scrollbar.size - r.scrollbar.paddingEnd - o,
                c = r.content - r.viewport;
              return G([i, s], "ltr" === l ? [0, c] : [-1 * c, 0])(e)
            }(e, i.current, s, t)
          }
          return "horizontal" === r ? (0, f.jsx)(A, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (a.viewport && o.current) {
                const e = O(a.viewport.scrollLeft, s, a.dir);
                o.current.style.transform = `translate3d(${e}px, 0, 0)`
              }
            },
            onWheelScroll: e => {
              a.viewport && (a.viewport.scrollLeft = e)
            },
            onDragScroll: e => {
              a.viewport && (a.viewport.scrollLeft = h(e, a.dir))
            }
          }) : "vertical" === r ? (0, f.jsx)(P, {
            ...u,
            ref: t,
            onThumbPositionChange: () => {
              if (a.viewport && o.current) {
                const e = O(a.viewport.scrollTop, s);
                o.current.style.transform = `translate3d(0, ${e}px, 0)`
              }
            },
            onWheelScroll: e => {
              a.viewport && (a.viewport.scrollTop = e)
            },
            onDragScroll: e => {
              a.viewport && (a.viewport.scrollTop = h(e))
            }
          }) : null
        })),
        A = l.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...a
          } = e, o = m(y, e.__scopeScrollArea), [s, c] = l.useState(), d = l.useRef(null), u = (0, i.s)(t, d, o.onScrollbarXChange);
          return l.useEffect((() => {
            d.current && c(getComputedStyle(d.current))
          }), [d]), (0, f.jsx)(_, {
            "data-orientation": "horizontal",
            ...a,
            ref: u,
            sizes: r,
            style: {
              bottom: 0,
              left: "rtl" === o.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              right: "ltr" === o.dir ? "var(--radix-scroll-area-corner-width)" : 0,
              "--radix-scroll-area-thumb-width": V(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.x),
            onDragScroll: t => e.onDragScroll(t.x),
            onWheelScroll: (t, r) => {
              if (o.viewport) {
                const l = o.viewport.scrollLeft + t.deltaX;
                e.onWheelScroll(l), F(l, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && o.viewport && s && n({
                content: o.viewport.scrollWidth,
                viewport: o.viewport.offsetWidth,
                scrollbar: {
                  size: d.current.clientWidth,
                  paddingStart: N(s.paddingLeft),
                  paddingEnd: N(s.paddingRight)
                }
              })
            }
          })
        })),
        P = l.forwardRef(((e, t) => {
          const {
            sizes: r,
            onSizesChange: n,
            ...a
          } = e, o = m(y, e.__scopeScrollArea), [s, c] = l.useState(), d = l.useRef(null), u = (0, i.s)(t, d, o.onScrollbarYChange);
          return l.useEffect((() => {
            d.current && c(getComputedStyle(d.current))
          }), [d]), (0, f.jsx)(_, {
            "data-orientation": "vertical",
            ...a,
            ref: u,
            sizes: r,
            style: {
              top: 0,
              right: "ltr" === o.dir ? 0 : void 0,
              left: "rtl" === o.dir ? 0 : void 0,
              bottom: "var(--radix-scroll-area-corner-height)",
              "--radix-scroll-area-thumb-height": V(r) + "px",
              ...e.style
            },
            onThumbPointerDown: t => e.onThumbPointerDown(t.y),
            onDragScroll: t => e.onDragScroll(t.y),
            onWheelScroll: (t, r) => {
              if (o.viewport) {
                const l = o.viewport.scrollTop + t.deltaY;
                e.onWheelScroll(l), F(l, r) && t.preventDefault()
              }
            },
            onResize: () => {
              d.current && o.viewport && s && n({
                content: o.viewport.scrollHeight,
                viewport: o.viewport.offsetHeight,
                scrollbar: {
                  size: d.current.clientHeight,
                  paddingStart: N(s.paddingTop),
                  paddingEnd: N(s.paddingBottom)
                }
              })
            }
          })
        })),
        [I, S] = p(y),
        _ = l.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            sizes: a,
            hasThumb: o,
            onThumbChange: c,
            onThumbPointerUp: d,
            onThumbPointerDown: u,
            onThumbPositionChange: v,
            onDragScroll: p,
            onWheelScroll: g,
            onResize: w,
            ...x
          } = e, b = m(y, r), [j, R] = l.useState(null), M = (0, i.s)(t, (e => R(e))), L = l.useRef(null), C = l.useRef(""), E = b.viewport, A = a.content - a.viewport, P = (0, s.c)(g), S = (0, s.c)(v), _ = q(w, 10);

          function z(e) {
            if (L.current) {
              const t = e.clientX - L.current.left,
                r = e.clientY - L.current.top;
              p({
                x: t,
                y: r
              })
            }
          }
          return l.useEffect((() => {
            const e = e => {
              const t = e.target,
                r = j?.contains(t);
              r && P(e, A)
            };
            return document.addEventListener("wheel", e, {
              passive: !1
            }), () => document.removeEventListener("wheel", e, {
              passive: !1
            })
          }), [E, j, A, P]), l.useEffect(S, [a, S]), U(j, _), U(b.content, _), (0, f.jsx)(I, {
            scope: r,
            scrollbar: j,
            hasThumb: o,
            onThumbChange: (0, s.c)(c),
            onThumbPointerUp: (0, s.c)(d),
            onThumbPositionChange: S,
            onThumbPointerDown: (0, s.c)(u),
            children: (0, f.jsx)(n.sG.div, {
              ...x,
              ref: M,
              style: {
                position: "absolute",
                ...x.style
              },
              onPointerDown: (0, h.m)(e.onPointerDown, (e => {
                0 === e.button && (e.target.setPointerCapture(e.pointerId), L.current = j.getBoundingClientRect(), C.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", b.viewport && (b.viewport.style.scrollBehavior = "auto"), z(e))
              })),
              onPointerMove: (0, h.m)(e.onPointerMove, z),
              onPointerUp: (0, h.m)(e.onPointerUp, (e => {
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), document.body.style.webkitUserSelect = C.current, b.viewport && (b.viewport.style.scrollBehavior = ""), L.current = null
              }))
            })
          })
        })),
        z = "ScrollAreaThumb",
        H = l.forwardRef(((e, t) => {
          const {
            forceMount: r,
            ...l
          } = e, n = S(z, e.__scopeScrollArea);
          return (0, f.jsx)(a.C, {
            present: r || n.hasThumb,
            children: (0, f.jsx)(T, {
              ref: t,
              ...l
            })
          })
        })),
        T = l.forwardRef(((e, t) => {
          const {
            __scopeScrollArea: r,
            style: a,
            ...o
          } = e, s = m(z, r), c = S(z, r), {
            onThumbPositionChange: d
          } = c, u = (0, i.s)(t, (e => c.onThumbChange(e))), v = l.useRef(void 0), p = q((() => {
            v.current && (v.current(), v.current = void 0)
          }), 100);
          return l.useEffect((() => {
            const e = s.viewport;
            if (e) {
              const t = () => {
                if (p(), !v.current) {
                  const t = X(e, d);
                  v.current = t, d()
                }
              };
              return d(), e.addEventListener("scroll", t), () => e.removeEventListener("scroll", t)
            }
          }), [s.viewport, p, d]), (0, f.jsx)(n.sG.div, {
            "data-state": c.hasThumb ? "visible" : "hidden",
            ...o,
            ref: u,
            style: {
              width: "var(--radix-scroll-area-thumb-width)",
              height: "var(--radix-scroll-area-thumb-height)",
              ...a
            },
            onPointerDownCapture: (0, h.m)(e.onPointerDownCapture, (e => {
              const t = e.target.getBoundingClientRect(),
                r = e.clientX - t.left,
                l = e.clientY - t.top;
              c.onThumbPointerDown({
                x: r,
                y: l
              })
            })),
            onPointerUp: (0, h.m)(e.onPointerUp, c.onThumbPointerUp)
          })
        }));
      H.displayName = z;
      var D = "ScrollAreaCorner";
      l.forwardRef(((e, t) => {
        const r = m(D, e.__scopeScrollArea),
          l = Boolean(r.scrollbarX && r.scrollbarY);
        return "scroll" !== r.type && l ? (0, f.jsx)(B, {
          ...e,
          ref: t
        }) : null
      })).displayName = D;
      var B = l.forwardRef(((e, t) => {
        const {
          __scopeScrollArea: r,
          ...a
        } = e, o = m(D, r), [i, s] = l.useState(0), [c, d] = l.useState(0), u = Boolean(i && c);
        return U(o.scrollbarX, (() => {
          const e = o.scrollbarX?.offsetHeight || 0;
          o.onCornerHeightChange(e), d(e)
        })), U(o.scrollbarY, (() => {
          const e = o.scrollbarY?.offsetWidth || 0;
          o.onCornerWidthChange(e), s(e)
        })), u ? (0, f.jsx)(n.sG.div, {
          ...a,
          ref: t,
          style: {
            width: i,
            height: c,
            position: "absolute",
            right: "ltr" === o.dir ? 0 : void 0,
            left: "rtl" === o.dir ? 0 : void 0,
            bottom: 0,
            ...e.style
          }
        }) : null
      }));

      function N(e) {
        return e ? parseInt(e, 10) : 0
      }

      function k(e, t) {
        const r = e / t;
        return isNaN(r) ? 0 : r
      }

      function V(e) {
        const t = k(e.viewport, e.content),
          r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd,
          l = (e.scrollbar.size - r) * t;
        return Math.max(l, 18)
      }

      function O(e, t, r = "ltr") {
        const l = V(t),
          n = t.scrollbar.paddingStart + t.scrollbar.paddingEnd,
          a = t.scrollbar.size - n,
          o = t.content - t.viewport,
          i = a - l,
          s = "ltr" === r ? [0, o] : [-1 * o, 0],
          c = (0, u.q)(e, s);
        return G([0, o], [0, i])(c)
      }

      function G(e, t) {
        return r => {
          if (e[0] === e[1] || t[0] === t[1]) return t[0];
          const l = (t[1] - t[0]) / (e[1] - e[0]);
          return t[0] + l * (r - e[0])
        }
      }

      function F(e, t) {
        return e > 0 && e < t
      }
      var X = (e, t = () => {}) => {
        let r = {
            left: e.scrollLeft,
            top: e.scrollTop
          },
          l = 0;
        return function n() {
          const a = {
              left: e.scrollLeft,
              top: e.scrollTop
            },
            o = r.left !== a.left,
            i = r.top !== a.top;
          (o || i) && t(), r = a, l = window.requestAnimationFrame(n)
        }(), () => window.cancelAnimationFrame(l)
      };

      function q(e, t) {
        const r = (0, s.c)(e),
          n = l.useRef(0);
        return l.useEffect((() => () => window.clearTimeout(n.current)), []), l.useCallback((() => {
          window.clearTimeout(n.current), n.current = window.setTimeout(r, t)
        }), [r, t])
      }

      function U(e, t) {
        const r = (0, s.c)(t);
        (0, d.N)((() => {
          let t = 0;
          if (e) {
            const l = new ResizeObserver((() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(r)
            }));
            return l.observe(e), () => {
              window.cancelAnimationFrame(t), l.unobserve(e)
            }
          }
        }), [e, r])
      }
      var K = x,
        W = j,
        $ = R,
        Y = H
    },
    50847: (e, t, r) => {
      function l(e, t, r) {
        if (!t.has(e)) throw new TypeError("attempted to " + r + " private field on non-instance");
        return t.get(e)
      }
      r.d(t, {
        _: () => l
      })
    },
    52436: (e, t, r) => {
      r.d(t, {
        X: () => i
      });
      var l = r(36813),
        n = r(71127),
        a = r(31985),
        o = r(85753);

      function i(e, t, r) {
        let {
          validationBehavior: i,
          focus: c
        } = e;
        (0, a.N)((() => {
          if ("native" === i && (null == r ? void 0 : r.current) && !r.current.disabled) {
            let l = t.realtimeValidation.isInvalid ? t.realtimeValidation.validationErrors.join(" ") || "Invalid value." : "";
            r.current.setCustomValidity(l), r.current.hasAttribute("title") || (r.current.title = ""), t.realtimeValidation.isInvalid || t.updateValidation({
              isInvalid: !(e = r.current).validity.valid,
              validationDetails: s(e),
              validationErrors: e.validationMessage ? [e.validationMessage] : []
            })
          }
          var e
        }));
        let d = (0, o.J)((() => {
            t.resetValidation()
          })),
          u = (0, o.J)((e => {
            var n;
            t.displayValidation.isInvalid || t.commitValidation();
            let a = null == r || null === (n = r.current) || void 0 === n ? void 0 : n.form;
            var o;
            !e.defaultPrevented && r && a && function(e) {
              for (let t = 0; t < e.elements.length; t++) {
                let r = e.elements[t];
                if (!r.validity.valid) return r
              }
              return null
            }(a) === r.current && (c ? c() : null === (o = r.current) || void 0 === o || o.focus(), (0, l.Cl)("keyboard")), e.preventDefault()
          })),
          h = (0, o.J)((() => {
            t.commitValidation()
          }));
        (0, n.useEffect)((() => {
          let e = null == r ? void 0 : r.current;
          if (!e) return;
          let t = e.form;
          return e.addEventListener("invalid", u), e.addEventListener("change", h), null == t || t.addEventListener("reset", d), () => {
            e.removeEventListener("invalid", u), e.removeEventListener("change", h), null == t || t.removeEventListener("reset", d)
          }
        }), [r, u, h, d, i])
      }

      function s(e) {
        let t = e.validity;
        return {
          badInput: t.badInput,
          customError: t.customError,
          patternMismatch: t.patternMismatch,
          rangeOverflow: t.rangeOverflow,
          rangeUnderflow: t.rangeUnderflow,
          stepMismatch: t.stepMismatch,
          tooLong: t.tooLong,
          tooShort: t.tooShort,
          typeMismatch: t.typeMismatch,
          valueMissing: t.valueMissing,
          valid: t.valid
        }
      }
    },
    52639: (e, t, r) => {
      r.d(t, {
        e: () => n
      });
      var l = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function n(e) {
        var t = {};
        return e.replace(l, (function(e) {
          var r = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === r ? "2-digit" : "numeric";
              break;
            case "Y":
            case "u":
            case "U":
            case "r":
              throw new RangeError("`Y/u/U/r` (year) patterns are not supported, use `y` instead");
            case "q":
            case "Q":
              throw new RangeError("`q/Q` (quarter) patterns are not supported");
            case "M":
            case "L":
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][r - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][r - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === r ? "long" : 5 === r ? "narrow" : "short";
              break;
            case "e":
              if (r < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "c":
              if (r < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][r - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][r - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][r - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][r - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = r < 4 ? "short" : "long";
              break;
            case "Z":
            case "O":
            case "v":
            case "V":
            case "X":
            case "x":
              throw new RangeError("`Z/O/v/V/X/x` (timeZone) patterns are not supported, use `z` instead")
          }
          return ""
        })), t
      }
    },
    54270: (e, t, r) => {
      r.d(t, {
        LE: () => f,
        eg: () => c,
        lR: () => h,
        o1: () => d,
        yB: () => u
      });
      var l = r(31985),
        n = r(85753),
        a = r(80477),
        o = r(47444),
        i = r(97724),
        s = r(71127);

      function c(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function d(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function u(e) {
        let t = (0, s.useRef)({
          isFocused: !1,
          observer: null
        });
        (0, l.N)((() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }), []);
        let r = (0, n.J)((t => {
          null == e || e(t)
        }));
        return (0, s.useCallback)((e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let l = e.target,
              n = e => {
                if (t.current.isFocused = !1, l.disabled) {
                  let t = c(e);
                  r(t)
                }
                t.current.observer && (t.current.observer.disconnect(), t.current.observer = null)
              };
            l.addEventListener("focusout", n, {
              once: !0
            }), t.current.observer = new MutationObserver((() => {
              if (t.current.isFocused && l.disabled) {
                var e;
                null === (e = t.current.observer) || void 0 === e || e.disconnect();
                let r = l === document.activeElement ? null : document.activeElement;
                l.dispatchEvent(new FocusEvent("blur", {
                  relatedTarget: r
                })), l.dispatchEvent(new FocusEvent("focusout", {
                  bubbles: !0,
                  relatedTarget: r
                }))
              }
            })), t.current.observer.observe(l, {
              attributes: !0,
              attributeFilter: ["disabled"]
            })
          }
        }), [r])
      }
      let h = !1;

      function f(e) {
        for (; e && !(0, a.t)(e);) e = e.parentElement;
        let t = (0, o.mD)(e),
          r = t.document.activeElement;
        if (!r || r === e) return;
        h = !0;
        let l = !1,
          n = e => {
            (e.target === r || l) && e.stopImmediatePropagation()
          },
          s = t => {
            (t.target === r || l) && (t.stopImmediatePropagation(), e || l || (l = !0, (0, i.e)(r), u()))
          },
          c = t => {
            (t.target === e || l) && t.stopImmediatePropagation()
          },
          d = t => {
            (t.target === e || l) && (t.stopImmediatePropagation(), l || (l = !0, (0, i.e)(r), u()))
          };
        t.addEventListener("blur", n, !0), t.addEventListener("focusout", s, !0), t.addEventListener("focusin", d, !0), t.addEventListener("focus", c, !0);
        let u = () => {
            cancelAnimationFrame(f), t.removeEventListener("blur", n, !0), t.removeEventListener("focusout", s, !0), t.removeEventListener("focusin", d, !0), t.removeEventListener("focus", c, !0), h = !1, l = !1
          },
          f = requestAnimationFrame(u);
        return u
      }
    },
    59194: (e, t, r) => {
      function l(e, t, r) {
        ! function(e, t) {
          if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object")
        }(e, t), t.set(e, r)
      }
      r.d(t, {
        _: () => l
      })
    },
    59219: (e, t, r) => {
      r.d(t, {
        jH: () => a
      });
      var l = r(71127),
        n = (r(70954), l.createContext(void 0));

      function a(e) {
        const t = l.useContext(n);
        return e || t || "ltr"
      }
    },
    64169: (e, t, r) => {
      r.d(t, {
        F3: () => h,
        GT: () => u,
        J9: () => i,
        JF: () => s,
        MT: () => c
      });
      var l = r(91299),
        n = r(85677),
        a = r(35303),
        o = r(3586);

      function i(e, t, r) {
        return void 0 === r && (r = {}), t.reduce((function(t, l) {
          return l in e ? t[l] = e[l] : l in r && (t[l] = r[l]), t
        }), {})
      }
      var s = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: function(e) {},
        onWarn: function(e) {}
      };

      function c() {
        return {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        }
      }

      function d(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }

      function u(e) {
        void 0 === e && (e = {
          dateTime: {},
          number: {},
          message: {},
          relativeTime: {},
          pluralRules: {},
          list: {},
          displayNames: {}
        });
        var t = Intl.RelativeTimeFormat,
          r = Intl.ListFormat,
          o = Intl.DisplayNames,
          i = (0, a.B)((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.DateTimeFormat).bind.apply(e, (0, l.__spreadArray)([void 0], t, !1)))
          }), {
            cache: d(e.dateTime),
            strategy: a.W.variadic
          }),
          s = (0, a.B)((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.NumberFormat).bind.apply(e, (0, l.__spreadArray)([void 0], t, !1)))
          }), {
            cache: d(e.number),
            strategy: a.W.variadic
          }),
          c = (0, a.B)((function() {
            for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            return new((e = Intl.PluralRules).bind.apply(e, (0, l.__spreadArray)([void 0], t, !1)))
          }), {
            cache: d(e.pluralRules),
            strategy: a.W.variadic
          });
        return {
          getDateTimeFormat: i,
          getNumberFormat: s,
          getMessageFormat: (0, a.B)((function(e, t, r, a) {
            return new n.S(e, t, r, (0, l.__assign)({
              formatters: {
                getNumberFormat: s,
                getDateTimeFormat: i,
                getPluralRules: c
              }
            }, a || {}))
          }), {
            cache: d(e.message),
            strategy: a.W.variadic
          }),
          getRelativeTimeFormat: (0, a.B)((function() {
            for (var e = [], r = 0; r < arguments.length; r++) e[r] = arguments[r];
            return new(t.bind.apply(t, (0, l.__spreadArray)([void 0], e, !1)))
          }), {
            cache: d(e.relativeTime),
            strategy: a.W.variadic
          }),
          getPluralRules: c,
          getListFormat: (0, a.B)((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(r.bind.apply(r, (0, l.__spreadArray)([void 0], e, !1)))
          }), {
            cache: d(e.list),
            strategy: a.W.variadic
          }),
          getDisplayNames: (0, a.B)((function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return new(o.bind.apply(o, (0, l.__spreadArray)([void 0], e, !1)))
          }), {
            cache: d(e.displayNames),
            strategy: a.W.variadic
          })
        }
      }

      function h(e, t, r, l) {
        var n, a = e && e[t];
        if (a && (n = a[r]), n) return n;
        l(new o.OC("No ".concat(t, " format named: ").concat(r)))
      }
    },
    67267: (e, t, r) => {
      r.d(t, {
        z: () => d
      });
      var l = r(50060),
        n = r(78345),
        a = r(39891),
        o = r(15751),
        i = r(88622),
        s = r(33527),
        c = r(52436);

      function d(e, t, r) {
        let {
          value: d,
          children: u,
          "aria-label": h,
          "aria-labelledby": f
        } = e;
        const v = e.isDisabled || t.isDisabled;
        let p = t.selectedValue === d,
          {
            pressProps: g,
            isPressed: w
          } = (0, i.d)({
            isDisabled: v
          }),
          {
            pressProps: m,
            isPressed: x
          } = (0, i.d)({
            isDisabled: v,
            onPress() {
              var e;
              t.setSelectedValue(d), null === (e = r.current) || void 0 === e || e.focus()
            }
          }),
          {
            focusableProps: b
          } = (0, s.Wc)((0, n.v)(e, {
            onFocus: () => t.setLastFocusedValue(d)
          }), r),
          j = (0, n.v)(g, b),
          y = (0, a.$)(e, {
            labelable: !0
          }),
          R = -1;
        null != t.selectedValue ? t.selectedValue === d && (R = 0) : t.lastFocusedValue !== d && null != t.lastFocusedValue || (R = 0), v && (R = void 0);
        let {
          name: M,
          descriptionId: L,
          errorMessageId: C,
          validationBehavior: E
        } = l.V.get(t);
        return (0, o.F)(r, t.selectedValue, t.setSelectedValue), (0, c.X)({
          validationBehavior: E
        }, t, r), {
          labelProps: (0, n.v)(m, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, n.v)(y, {
            ...j,
            type: "radio",
            name: M,
            tabIndex: R,
            disabled: v,
            required: t.isRequired && "native" === E,
            checked: p,
            value: d,
            onChange: e => {
              e.stopPropagation(), t.setSelectedValue(d)
            },
            "aria-describedby": [e["aria-describedby"], t.isInvalid ? C : null, L].filter(Boolean).join(" ") || void 0
          }),
          isDisabled: v,
          isSelected: p,
          isPressed: w || x
        }
      }
    },
    70233: (e, t, r) => {
      r.d(t, {
        Kq: () => q,
        UC: () => $,
        ZL: () => W,
        bL: () => U,
        i3: () => Y,
        l9: () => K
      });
      var l = r(71127),
        n = r(22517),
        a = r(21423),
        o = r(91173),
        i = r(74687),
        s = r(74406),
        c = r(54917),
        d = r(34902),
        u = r(79315),
        h = r(51347),
        f = r(21222),
        v = r(79158),
        p = r(63694),
        g = r(70954),
        [w, m] = (0, o.A)("Tooltip", [c.Bk]),
        x = (0, c.Bk)(),
        b = "TooltipProvider",
        j = 700,
        y = "tooltip.open",
        [R, M] = w(b),
        L = e => {
          const {
            __scopeTooltip: t,
            delayDuration: r = j,
            skipDelayDuration: n = 300,
            disableHoverableContent: a = !1,
            children: o
          } = e, i = l.useRef(!0), s = l.useRef(!1), c = l.useRef(0);
          return l.useEffect((() => {
            const e = c.current;
            return () => window.clearTimeout(e)
          }), []), (0, g.jsx)(R, {
            scope: t,
            isOpenDelayedRef: i,
            delayDuration: r,
            onOpen: l.useCallback((() => {
              window.clearTimeout(c.current), i.current = !1
            }), []),
            onClose: l.useCallback((() => {
              window.clearTimeout(c.current), c.current = window.setTimeout((() => i.current = !0), n)
            }), [n]),
            isPointerInTransitRef: s,
            onPointerInTransitChange: l.useCallback((e => {
              s.current = e
            }), []),
            disableHoverableContent: a,
            children: o
          })
        };
      L.displayName = b;
      var C = "Tooltip",
        [E, A] = w(C),
        P = e => {
          const {
            __scopeTooltip: t,
            children: r,
            open: n,
            defaultOpen: a,
            onOpenChange: o,
            disableHoverableContent: i,
            delayDuration: d
          } = e, u = M(C, e.__scopeTooltip), h = x(t), [f, p] = l.useState(null), w = (0, s.useId)(), m = l.useRef(0), b = i ?? u.disableHoverableContent, j = d ?? u.delayDuration, R = l.useRef(!1), [L, A] = (0, v.useControllableState)({
            prop: n,
            defaultProp: a ?? !1,
            onChange: e => {
              e ? (u.onOpen(), document.dispatchEvent(new CustomEvent(y))) : u.onClose(), o?.(e)
            },
            caller: C
          }), P = l.useMemo((() => L ? R.current ? "delayed-open" : "instant-open" : "closed"), [L]), I = l.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, R.current = !1, A(!0)
          }), [A]), S = l.useCallback((() => {
            window.clearTimeout(m.current), m.current = 0, A(!1)
          }), [A]), _ = l.useCallback((() => {
            window.clearTimeout(m.current), m.current = window.setTimeout((() => {
              R.current = !0, A(!0), m.current = 0
            }), j)
          }), [j, A]);
          return l.useEffect((() => () => {
            m.current && (window.clearTimeout(m.current), m.current = 0)
          }), []), (0, g.jsx)(c.bL, {
            ...h,
            children: (0, g.jsx)(E, {
              scope: t,
              contentId: w,
              open: L,
              stateAttribute: P,
              trigger: f,
              onTriggerChange: p,
              onTriggerEnter: l.useCallback((() => {
                u.isOpenDelayedRef.current ? _() : I()
              }), [u.isOpenDelayedRef, _, I]),
              onTriggerLeave: l.useCallback((() => {
                b ? S() : (window.clearTimeout(m.current), m.current = 0)
              }), [S, b]),
              onOpen: I,
              onClose: S,
              disableHoverableContent: b,
              children: r
            })
          })
        };
      P.displayName = C;
      var I = "TooltipTrigger",
        S = l.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...o
          } = e, i = A(I, r), s = M(I, r), d = x(r), u = l.useRef(null), f = (0, a.s)(t, u, i.onTriggerChange), v = l.useRef(!1), p = l.useRef(!1), w = l.useCallback((() => v.current = !1), []);
          return l.useEffect((() => () => document.removeEventListener("pointerup", w)), [w]), (0, g.jsx)(c.Mz, {
            asChild: !0,
            ...d,
            children: (0, g.jsx)(h.sG.button, {
              "aria-describedby": i.open ? i.contentId : void 0,
              "data-state": i.stateAttribute,
              ...o,
              ref: f,
              onPointerMove: (0, n.m)(e.onPointerMove, (e => {
                "touch" !== e.pointerType && (p.current || s.isPointerInTransitRef.current || (i.onTriggerEnter(), p.current = !0))
              })),
              onPointerLeave: (0, n.m)(e.onPointerLeave, (() => {
                i.onTriggerLeave(), p.current = !1
              })),
              onPointerDown: (0, n.m)(e.onPointerDown, (() => {
                i.open && i.onClose(), v.current = !0, document.addEventListener("pointerup", w, {
                  once: !0
                })
              })),
              onFocus: (0, n.m)(e.onFocus, (() => {
                v.current || i.onOpen()
              })),
              onBlur: (0, n.m)(e.onBlur, i.onClose),
              onClick: (0, n.m)(e.onClick, i.onClose)
            })
          })
        }));
      S.displayName = I;
      var _ = "TooltipPortal",
        [z, H] = w(_, {
          forceMount: void 0
        }),
        T = e => {
          const {
            __scopeTooltip: t,
            forceMount: r,
            children: l,
            container: n
          } = e, a = A(_, t);
          return (0, g.jsx)(z, {
            scope: t,
            forceMount: r,
            children: (0, g.jsx)(u.C, {
              present: r || a.open,
              children: (0, g.jsx)(d.Portal, {
                asChild: !0,
                container: n,
                children: l
              })
            })
          })
        };
      T.displayName = _;
      var D = "TooltipContent",
        B = l.forwardRef(((e, t) => {
          const r = H(D, e.__scopeTooltip),
            {
              forceMount: l = r.forceMount,
              side: n = "top",
              ...a
            } = e,
            o = A(D, e.__scopeTooltip);
          return (0, g.jsx)(u.C, {
            present: l || o.open,
            children: o.disableHoverableContent ? (0, g.jsx)(G, {
              side: n,
              ...a,
              ref: t
            }) : (0, g.jsx)(N, {
              side: n,
              ...a,
              ref: t
            })
          })
        })),
        N = l.forwardRef(((e, t) => {
          const r = A(D, e.__scopeTooltip),
            n = M(D, e.__scopeTooltip),
            o = l.useRef(null),
            i = (0, a.s)(t, o),
            [s, c] = l.useState(null),
            {
              trigger: d,
              onClose: u
            } = r,
            h = o.current,
            {
              onPointerInTransitChange: f
            } = n,
            v = l.useCallback((() => {
              c(null), f(!1)
            }), [f]),
            p = l.useCallback(((e, t) => {
              const r = e.currentTarget,
                l = {
                  x: e.clientX,
                  y: e.clientY
                },
                n = function(e, t, r = 5) {
                  const l = [];
                  switch (t) {
                    case "top":
                      l.push({
                        x: e.x - r,
                        y: e.y + r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "bottom":
                      l.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y - r
                      });
                      break;
                    case "left":
                      l.push({
                        x: e.x + r,
                        y: e.y - r
                      }, {
                        x: e.x + r,
                        y: e.y + r
                      });
                      break;
                    case "right":
                      l.push({
                        x: e.x - r,
                        y: e.y - r
                      }, {
                        x: e.x - r,
                        y: e.y + r
                      })
                  }
                  return l
                }(l, function(e, t) {
                  const r = Math.abs(t.top - e.y),
                    l = Math.abs(t.bottom - e.y),
                    n = Math.abs(t.right - e.x),
                    a = Math.abs(t.left - e.x);
                  switch (Math.min(r, l, n, a)) {
                    case a:
                      return "left";
                    case n:
                      return "right";
                    case r:
                      return "top";
                    case l:
                      return "bottom";
                    default:
                      throw new Error("unreachable")
                  }
                }(l, r.getBoundingClientRect())),
                a = function(e) {
                  const t = e.slice();
                  return t.sort(((e, t) => e.x < t.x ? -1 : e.x > t.x ? 1 : e.y < t.y ? -1 : e.y > t.y ? 1 : 0)),
                    function(e) {
                      if (e.length <= 1) return e.slice();
                      const t = [];
                      for (let r = 0; r < e.length; r++) {
                        const l = e[r];
                        for (; t.length >= 2;) {
                          const e = t[t.length - 1],
                            r = t[t.length - 2];
                          if (!((e.x - r.x) * (l.y - r.y) >= (e.y - r.y) * (l.x - r.x))) break;
                          t.pop()
                        }
                        t.push(l)
                      }
                      t.pop();
                      const r = [];
                      for (let t = e.length - 1; t >= 0; t--) {
                        const l = e[t];
                        for (; r.length >= 2;) {
                          const e = r[r.length - 1],
                            t = r[r.length - 2];
                          if (!((e.x - t.x) * (l.y - t.y) >= (e.y - t.y) * (l.x - t.x))) break;
                          r.pop()
                        }
                        r.push(l)
                      }
                      return r.pop(), 1 === t.length && 1 === r.length && t[0].x === r[0].x && t[0].y === r[0].y ? t : t.concat(r)
                    }(t)
                }([...n, ... function(e) {
                  const {
                    top: t,
                    right: r,
                    bottom: l,
                    left: n
                  } = e;
                  return [{
                    x: n,
                    y: t
                  }, {
                    x: r,
                    y: t
                  }, {
                    x: r,
                    y: l
                  }, {
                    x: n,
                    y: l
                  }]
                }(t.getBoundingClientRect())]);
              c(a), f(!0)
            }), [f]);
          return l.useEffect((() => () => v()), [v]), l.useEffect((() => {
            if (d && h) {
              const e = e => p(e, h),
                t = e => p(e, d);
              return d.addEventListener("pointerleave", e), h.addEventListener("pointerleave", t), () => {
                d.removeEventListener("pointerleave", e), h.removeEventListener("pointerleave", t)
              }
            }
          }), [d, h, p, v]), l.useEffect((() => {
            if (s) {
              const e = e => {
                const t = e.target,
                  r = {
                    x: e.clientX,
                    y: e.clientY
                  },
                  l = d?.contains(t) || h?.contains(t),
                  n = ! function(e, t) {
                    const {
                      x: r,
                      y: l
                    } = e;
                    let n = !1;
                    for (let e = 0, a = t.length - 1; e < t.length; a = e++) {
                      const o = t[e],
                        i = t[a],
                        s = o.x,
                        c = o.y,
                        d = i.x,
                        u = i.y;
                      c > l != u > l && r < (d - s) * (l - c) / (u - c) + s && (n = !n)
                    }
                    return n
                  }(r, s);
                l ? v() : n && (v(), u())
              };
              return document.addEventListener("pointermove", e), () => document.removeEventListener("pointermove", e)
            }
          }), [d, h, s, u, v]), (0, g.jsx)(G, {
            ...e,
            ref: i
          })
        })),
        [k, V] = w(C, {
          isInside: !1
        }),
        O = (0, f.createSlottable)("TooltipContent"),
        G = l.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            children: n,
            "aria-label": a,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            ...d
          } = e, u = A(D, r), h = x(r), {
            onClose: f
          } = u;
          return l.useEffect((() => (document.addEventListener(y, f), () => document.removeEventListener(y, f))), [f]), l.useEffect((() => {
            if (u.trigger) {
              const e = e => {
                const t = e.target;
                t?.contains(u.trigger) && f()
              };
              return window.addEventListener("scroll", e, {
                capture: !0
              }), () => window.removeEventListener("scroll", e, {
                capture: !0
              })
            }
          }), [u.trigger, f]), (0, g.jsx)(i.qW, {
            asChild: !0,
            disableOutsidePointerEvents: !1,
            onEscapeKeyDown: o,
            onPointerDownOutside: s,
            onFocusOutside: e => e.preventDefault(),
            onDismiss: f,
            children: (0, g.jsxs)(c.UC, {
              "data-state": u.stateAttribute,
              ...h,
              ...d,
              ref: t,
              style: {
                ...d.style,
                "--radix-tooltip-content-transform-origin": "var(--radix-popper-transform-origin)",
                "--radix-tooltip-content-available-width": "var(--radix-popper-available-width)",
                "--radix-tooltip-content-available-height": "var(--radix-popper-available-height)",
                "--radix-tooltip-trigger-width": "var(--radix-popper-anchor-width)",
                "--radix-tooltip-trigger-height": "var(--radix-popper-anchor-height)"
              },
              children: [(0, g.jsx)(O, {
                children: n
              }), (0, g.jsx)(k, {
                scope: r,
                isInside: !0,
                children: (0, g.jsx)(p.Root, {
                  id: u.contentId,
                  role: "tooltip",
                  children: a || n
                })
              })]
            })
          })
        }));
      B.displayName = D;
      var F = "TooltipArrow",
        X = l.forwardRef(((e, t) => {
          const {
            __scopeTooltip: r,
            ...l
          } = e, n = x(r);
          return V(F, r).isInside ? null : (0, g.jsx)(c.i3, {
            ...n,
            ...l,
            ref: t
          })
        }));
      X.displayName = F;
      var q = L,
        U = P,
        K = S,
        W = T,
        $ = B,
        Y = X
    },
    71734: (e, t, r) => {
      function l(...e) {
        return (...t) => {
          for (let r of e) "function" == typeof r && r(...t)
        }
      }
      r.d(t, {
        c: () => l
      })
    },
    72213: (e, t, r) => {
      function l(e, [t, r]) {
        return Math.min(r, Math.max(t, e))
      }
      r.d(t, {
        q: () => l
      })
    },
    73259: (e, t, r) => {
      r.d(t, {
        Hb: () => R,
        vC: () => C
      });
      var l = r(71127),
        n = r(70954);

      function a() {
        return a = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var l in r)({}).hasOwnProperty.call(r, l) && (e[l] = r[l])
          }
          return e
        }, a.apply(null, arguments)
      }
      var o = ["shift", "alt", "meta", "mod", "ctrl"],
        i = {
          esc: "escape",
          return: "enter",
          ".": "period",
          ",": "comma",
          "-": "slash",
          " ": "space",
          "`": "backquote",
          "#": "backslash",
          "+": "bracketright",
          ShiftLeft: "shift",
          ShiftRight: "shift",
          AltLeft: "alt",
          AltRight: "alt",
          MetaLeft: "meta",
          MetaRight: "meta",
          OSLeft: "meta",
          OSRight: "meta",
          ControlLeft: "ctrl",
          ControlRight: "ctrl"
        };

      function s(e) {
        return (e && i[e] || e || "").trim().toLowerCase().replace(/key|digit|numpad|arrow/, "")
      }

      function c(e, t) {
        return void 0 === t && (t = ","), e.split(t)
      }

      function d(e, t, r) {
        void 0 === t && (t = "+");
        var l = e.toLocaleLowerCase().split(t).map((function(e) {
          return s(e)
        }));
        return a({}, {
          alt: l.includes("alt"),
          ctrl: l.includes("ctrl") || l.includes("control"),
          shift: l.includes("shift"),
          meta: l.includes("meta"),
          mod: l.includes("mod")
        }, {
          keys: l.filter((function(e) {
            return !o.includes(e)
          })),
          description: r,
          hotkey: e
        })
      }
      "undefined" != typeof document && (document.addEventListener("keydown", (function(e) {
        void 0 !== e.key && f([s(e.key), s(e.code)])
      })), document.addEventListener("keyup", (function(e) {
        void 0 !== e.key && v([s(e.key), s(e.code)])
      }))), "undefined" != typeof window && window.addEventListener("blur", (function() {
        u.clear()
      }));
      var u = new Set;

      function h(e) {
        return Array.isArray(e)
      }

      function f(e) {
        var t = Array.isArray(e) ? e : [e];
        u.has("meta") && u.forEach((function(e) {
          return ! function(e) {
            return o.includes(e)
          }(e) && u.delete(e.toLowerCase())
        })), t.forEach((function(e) {
          return u.add(e.toLowerCase())
        }))
      }

      function v(e) {
        var t = Array.isArray(e) ? e : [e];
        "meta" === e ? u.clear() : t.forEach((function(e) {
          return u.delete(e.toLowerCase())
        }))
      }

      function p(e, t) {
        void 0 === t && (t = !1);
        var r, l, n = e.target,
          a = e.composed;
        return l = (r = n).tagName && !r.tagName.startsWith("-") && r.tagName.includes("-") && a ? e.composedPath()[0] && e.composedPath()[0].tagName : n && n.tagName, h(t) ? Boolean(l && t && t.some((function(e) {
          var t;
          return e.toLowerCase() === (null == (t = l) ? void 0 : t.toLowerCase())
        }))) : Boolean(l && t && t)
      }
      var g = function(e, t, r) {
          void 0 === r && (r = !1);
          var l, n, a = t.alt,
            o = t.meta,
            i = t.mod,
            c = t.shift,
            d = t.ctrl,
            f = t.keys,
            v = e.key,
            p = e.code,
            g = e.ctrlKey,
            w = e.metaKey,
            m = e.shiftKey,
            x = e.altKey,
            b = s(p),
            j = v.toLowerCase();
          if (!(null != f && f.includes(b) || null != f && f.includes(j) || ["ctrl", "control", "unknown", "meta", "alt", "shift", "os"].includes(b))) return !1;
          if (!r) {
            if (a === !x && "alt" !== j) return !1;
            if (c === !m && "shift" !== j) return !1;
            if (i) {
              if (!w && !g) return !1
            } else {
              if (o === !w && "meta" !== j && "os" !== j) return !1;
              if (d === !g && "ctrl" !== j && "control" !== j) return !1
            }
          }
          return !(!f || 1 !== f.length || !f.includes(j) && !f.includes(b)) || (f ? (void 0 === n && (n = ","), (h(l = f) ? l : l.split(n)).every((function(e) {
            return u.has(e.trim().toLowerCase())
          }))) : !f)
        },
        w = (0, l.createContext)(void 0),
        m = function() {
          return (0, l.useContext)(w)
        };

      function x(e) {
        var t = e.addHotkey,
          r = e.removeHotkey,
          l = e.children;
        return (0, n.jsx)(w.Provider, {
          value: {
            addHotkey: t,
            removeHotkey: r
          },
          children: l
        })
      }

      function b(e, t) {
        return e && t && "object" == typeof e && "object" == typeof t ? Object.keys(e).length === Object.keys(t).length && Object.keys(e).reduce((function(r, l) {
          return r && b(e[l], t[l])
        }), !0) : e === t
      }
      var j = (0, l.createContext)({
          hotkeys: [],
          enabledScopes: [],
          toggleScope: function() {},
          enableScope: function() {},
          disableScope: function() {}
        }),
        y = function() {
          return (0, l.useContext)(j)
        },
        R = function(e) {
          var t = e.initiallyActiveScopes,
            r = void 0 === t ? ["*"] : t,
            a = e.children,
            o = (0, l.useState)((null == r ? void 0 : r.length) > 0 ? r : ["*"]),
            i = o[0],
            s = o[1],
            c = (0, l.useState)([]),
            d = c[0],
            u = c[1],
            h = (0, l.useCallback)((function(e) {
              s((function(t) {
                return t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            f = (0, l.useCallback)((function(e) {
              s((function(t) {
                return 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                }))
              }))
            }), []),
            v = (0, l.useCallback)((function(e) {
              s((function(t) {
                return t.includes(e) ? 0 === t.filter((function(t) {
                  return t !== e
                })).length ? ["*"] : t.filter((function(t) {
                  return t !== e
                })) : t.includes("*") ? [e] : Array.from(new Set([].concat(t, [e])))
              }))
            }), []),
            p = (0, l.useCallback)((function(e) {
              u((function(t) {
                return [].concat(t, [e])
              }))
            }), []),
            g = (0, l.useCallback)((function(e) {
              u((function(t) {
                return t.filter((function(t) {
                  return !b(t, e)
                }))
              }))
            }), []);
          return (0, n.jsx)(j.Provider, {
            value: {
              enabledScopes: i,
              hotkeys: d,
              enableScope: h,
              disableScope: f,
              toggleScope: v
            },
            children: (0, n.jsx)(x, {
              addHotkey: p,
              removeHotkey: g,
              children: a
            })
          })
        },
        M = function(e) {
          e.stopPropagation(), e.preventDefault(), e.stopImmediatePropagation()
        },
        L = "undefined" != typeof window ? l.useLayoutEffect : l.useEffect;

      function C(e, t, r, n) {
        var a = (0, l.useState)(null),
          o = a[0],
          i = a[1],
          u = (0, l.useRef)(!1),
          w = r instanceof Array ? n instanceof Array ? void 0 : n : r,
          x = h(e) ? e.join(null == w ? void 0 : w.splitKey) : e,
          j = r instanceof Array ? r : n instanceof Array ? n : void 0,
          R = (0, l.useCallback)(t, null != j ? j : []),
          C = (0, l.useRef)(R);
        C.current = j ? R : t;
        var E = function(e) {
            var t = (0, l.useRef)(void 0);
            return b(t.current, e) || (t.current = e), t.current
          }(w),
          A = y().enabledScopes,
          P = m();
        return L((function() {
          if (!1 !== (null == E ? void 0 : E.enabled) && (e = A, t = null == E ? void 0 : E.scopes, 0 === e.length && t ? (console.warn('A hotkey has the "scopes" option set, however no active scopes were found. If you want to use the global scopes feature, you need to wrap your app in a <HotkeysProvider>'), 1) : !t || e.some((function(e) {
              return t.includes(e)
            })) || e.includes("*"))) {
            var e, t, r = function(e, t) {
                var r;
                if (void 0 === t && (t = !1), !p(e, ["input", "textarea", "select"]) || p(e, null == E ? void 0 : E.enableOnFormTags)) {
                  if (null !== o) {
                    var l = o.getRootNode();
                    if ((l instanceof Document || l instanceof ShadowRoot) && l.activeElement !== o && !o.contains(l.activeElement)) return void M(e)
                  }(null == (r = e.target) || !r.isContentEditable || null != E && E.enableOnContentEditable) && c(x, null == E ? void 0 : E.splitKey).forEach((function(r) {
                    var l, n = d(r, null == E ? void 0 : E.combinationKey);
                    if (g(e, n, null == E ? void 0 : E.ignoreModifiers) || null != (l = n.keys) && l.includes("*")) {
                      if (null != E && null != E.ignoreEventWhen && E.ignoreEventWhen(e)) return;
                      if (t && u.current) return;
                      if (function(e, t, r) {
                          ("function" == typeof r && r(e, t) || !0 === r) && e.preventDefault()
                        }(e, n, null == E ? void 0 : E.preventDefault), ! function(e, t, r) {
                          return "function" == typeof r ? r(e, t) : !0 === r || void 0 === r
                        }(e, n, null == E ? void 0 : E.enabled)) return void M(e);
                      C.current(e, n), t || (u.current = !0)
                    }
                  }))
                }
              },
              l = function(e) {
                void 0 !== e.key && (f(s(e.code)), (void 0 === (null == E ? void 0 : E.keydown) && !0 !== (null == E ? void 0 : E.keyup) || null != E && E.keydown) && r(e))
              },
              n = function(e) {
                void 0 !== e.key && (v(s(e.code)), u.current = !1, null != E && E.keyup && r(e, !0))
              },
              a = o || (null == w ? void 0 : w.document) || document;
            return a.addEventListener("keyup", n, null == w ? void 0 : w.eventListenerOptions), a.addEventListener("keydown", l, null == w ? void 0 : w.eventListenerOptions), P && c(x, null == E ? void 0 : E.splitKey).forEach((function(e) {
                return P.addHotkey(d(e, null == E ? void 0 : E.combinationKey, null == E ? void 0 : E.description))
              })),
              function() {
                a.removeEventListener("keyup", n, null == w ? void 0 : w.eventListenerOptions), a.removeEventListener("keydown", l, null == w ? void 0 : w.eventListenerOptions), P && c(x, null == E ? void 0 : E.splitKey).forEach((function(e) {
                  return P.removeHotkey(d(e, null == E ? void 0 : E.combinationKey, null == E ? void 0 : E.description))
                }))
              }
          }
        }), [o, x, E, A]), i
      }
    },
    73715: (e, t, r) => {
      r.d(t, {
        A: () => N
      });
      var l = r(71127);

      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, l = Array(t); r < t; r++) l[r] = e[r];
        return l
      }

      function a(e, t) {
        var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
        if (!r) {
          if (Array.isArray(e) || (r = function(e, t) {
              if (e) {
                if ("string" == typeof e) return n(e, t);
                var r = {}.toString.call(e).slice(8, -1);
                return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
              }
            }(e)) || t) {
            r && (e = r);
            var l = 0,
              a = function() {};
            return {
              s: a,
              n: function() {
                return l >= e.length ? {
                  done: !0
                } : {
                  done: !1,
                  value: e[l++]
                }
              },
              e: function(e) {
                throw e
              },
              f: a
            }
          }
          throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }
        var o, i = !0,
          s = !1;
        return {
          s: function() {
            r = r.call(e)
          },
          n: function() {
            var e = r.next();
            return i = e.done, e
          },
          e: function(e) {
            s = !0, o = e
          },
          f: function() {
            try {
              i || null == r.return || r.return()
            } finally {
              if (s) throw o
            }
          }
        }
      }

      function o(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function i(e) {
        return i = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, i(e)
      }

      function s() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (s = function() {
          return !!e
        })()
      }

      function c(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          t && (l = l.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, l)
        }
        return r
      }

      function d(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? c(Object(r), !0).forEach((function(t) {
            o(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : c(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function u(e, t) {
        return u = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, u(e, t)
      }

      function h(e, t) {
        var r, l = t.replacementChars,
          n = t.replacement,
          o = t.separate,
          i = l,
          s = "",
          c = a(e);
        try {
          for (c.s(); !(r = c.n()).done;) {
            var d, u = r.value,
              h = !Object.prototype.hasOwnProperty.call(n, u) && (null === (d = n[i[0]]) || void 0 === d ? void 0 : d.test(u));
            (o && u === i[0] || h) && (i = i.slice(1), s += u)
          }
        } catch (e) {
          c.e(e)
        } finally {
          c.f()
        }
        return s
      }

      function f(e, t) {
        var r, l = t.mask,
          n = t.replacement,
          o = t.separate,
          i = t.showMask,
          s = 0,
          c = "",
          d = a(l);
        try {
          for (d.s(); !(r = d.n()).done;) {
            var u = r.value;
            if (!i && void 0 === e[s]) break;
            Object.prototype.hasOwnProperty.call(n, u) && void 0 !== e[s] ? c += e[s++] : c += u
          }
        } catch (e) {
          d.e(e)
        } finally {
          d.f()
        }
        if (o && !i) {
          for (var h = l.length - 1; h >= 0 && c[h] === l[h]; h--);
          c = c.slice(0, h + 1)
        }
        return c
      }

      function v(e, t) {
        for (var r = t.mask, l = t.replacement, n = [], a = 0; a < r.length; a++) {
          var o, i = null !== (o = e[a]) && void 0 !== o ? o : r[a],
            s = Object.prototype.hasOwnProperty.call(l, i) ? "replacement" : void 0 !== e[a] && e[a] !== r[a] ? "input" : "mask";
          n.push({
            type: s,
            value: i,
            index: a
          })
        }
        return n
      }

      function p(e) {
        return e.length > 0 ? o({}, e, /./) : {}
      }

      function g(e, t) {
        for (var r = t.start, l = void 0 === r ? 0 : r, n = t.end, a = t.mask, o = t.replacement, i = t.separate, s = e.slice(l, n), c = a.slice(l, n), d = "", u = 0; u < c.length; u++) {
          var h = Object.prototype.hasOwnProperty.call(o, c[u]);
          h && void 0 !== s[u] && s[u] !== c[u] ? d += s[u] : h && i && (d += c[u])
        }
        return d
      }

      function w(e, t) {
        var r = t.mask,
          l = t.replacement,
          n = "string" == typeof l ? p(l) : l,
          a = RegExp("[^".concat(Object.keys(n).join(""), "]"), "g");
        return f(h(e, {
          replacementChars: r.replace(a, ""),
          replacement: n,
          separate: !1
        }), {
          mask: r,
          replacement: n,
          separate: !1,
          showMask: !1
        })
      }
      var m = ["[", "]", "\\", "/", "^", "$", ".", "|", "?", "*", "+", "(", ")", "{", "}"];

      function x(e) {
        return m.includes(e) ? "\\".concat(e) : e
      }

      function b(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
      }

      function j(e, t, r) {
        return Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }

      function y(e, t, r) {
        return (t = function(e) {
          var t = function(e) {
            if ("object" != typeof e || !e) return e;
            var t = e[Symbol.toPrimitive];
            if (void 0 !== t) {
              var r = t.call(e, "string");
              if ("object" != typeof r) return r;
              throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
          }(e);
          return "symbol" == typeof t ? t : t + ""
        }(t)) in e ? Object.defineProperty(e, t, {
          value: r,
          enumerable: !0,
          configurable: !0,
          writable: !0
        }) : e[t] = r, e
      }

      function R(e) {
        return R = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(e) {
          return e.__proto__ || Object.getPrototypeOf(e)
        }, R(e)
      }

      function M() {
        try {
          var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {})))
        } catch (e) {}
        return (M = function() {
          return !!e
        })()
      }

      function L(e, t) {
        var r = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          t && (l = l.filter((function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          }))), r.push.apply(r, l)
        }
        return r
      }

      function C(e) {
        for (var t = 1; t < arguments.length; t++) {
          var r = null != arguments[t] ? arguments[t] : {};
          t % 2 ? L(Object(r), !0).forEach((function(t) {
            y(e, t, r[t])
          })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : L(Object(r)).forEach((function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
          }))
        }
        return e
      }

      function E(e, t) {
        return E = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(e, t) {
          return e.__proto__ = t, e
        }, E(e, t)
      }

      function A(e) {
        var t = "function" == typeof Map ? new Map : void 0;
        return A = function(e) {
          if (null === e || ! function(e) {
              try {
                return -1 !== Function.toString.call(e).indexOf("[native code]")
              } catch (t) {
                return "function" == typeof e
              }
            }(e)) return e;
          if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
          if (void 0 !== t) {
            if (t.has(e)) return t.get(e);
            t.set(e, r)
          }

          function r() {
            return function(e, t, r) {
              if (M()) return Reflect.construct.apply(null, arguments);
              var l = [null];
              l.push.apply(l, t);
              var n = new(e.bind.apply(e, l));
              return r && E(n, r.prototype), n
            }(e, arguments, R(this).constructor)
          }
          return r.prototype = Object.create(e.prototype, {
            constructor: {
              value: r,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          }), E(r, e)
        }, A(e)
      }
      var P, I = function(e) {
          function t(e) {
            var r;
            return b(this, t), (r = function(e, t, r) {
              return t = R(t),
                function(e, t) {
                  if (t && ("object" == typeof t || "function" == typeof t)) return t;
                  if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                  return function(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                  }(e)
                }(e, M() ? Reflect.construct(t, r || [], R(e).constructor) : t.apply(e, r))
            }(this, t, [e])).name = "SyntheticChangeError", r
          }
          return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && E(e, t)
          }(t, e), j(t)
        }(A(Error)),
        S = ["options"],
        _ = ["text", "email", "tel", "search", "url"],
        z = j((function e(t) {
          var r = t.init,
            l = t.tracking;
          b(this, e);
          var n = new WeakMap;
          this.register = function(e) {
            var t;
            if (_.includes(e.type)) {
              var a = null !== (t = e._wrapperState) && void 0 !== t ? t : {},
                o = a.initialValue,
                i = void 0 === o ? "" : o,
                s = a.controlled,
                c = void 0 !== s && s,
                d = r({
                  initialValue: e.value || i,
                  controlled: c
                }),
                u = d.value,
                h = d.options,
                f = {
                  value: u,
                  options: h,
                  fallbackOptions: h
                },
                v = {
                  id: -1,
                  cachedId: -1
                },
                p = {
                  value: "",
                  selectionStart: 0,
                  selectionEnd: 0
                },
                g = Object.getOwnPropertyDescriptor("_valueTracker" in e ? e : HTMLInputElement.prototype, "value");
              Object.defineProperty(e, "value", C(C({}, g), {}, {
                set: function(t) {
                  var r;
                  p.value = t, null == g || null === (r = g.set) || void 0 === r || r.call(e, t)
                }
              })), e.value = u;
              var w = function() {
                  var t = function() {
                    var r, l;
                    p.selectionStart = null !== (r = e.selectionStart) && void 0 !== r ? r : 0, p.selectionEnd = null !== (l = e.selectionEnd) && void 0 !== l ? l : 0, v.id = window.setTimeout(t)
                  };
                  v.id = window.setTimeout(t)
                },
                m = function() {
                  window.clearTimeout(v.id), v.id = -1, v.cachedId = -1
                },
                x = function(t) {
                  try {
                    var r, n;
                    if (v.cachedId === v.id) throw new I("The input selection has not been updated.");
                    v.cachedId = v.id;
                    var a = e.value,
                      o = e.selectionStart,
                      i = e.selectionEnd;
                    if (null === o || null === i) throw new I("The selection attributes have not been initialized.");
                    var s, c = p.value;
                    if (void 0 === t.inputType && (p.selectionStart = 0, p.selectionEnd = c.length), o > p.selectionStart ? s = "insert" : o <= p.selectionStart && o < p.selectionEnd ? s = "deleteBackward" : o === p.selectionEnd && a.length < c.length && (s = "deleteForward"), void 0 === s || ("deleteBackward" === s || "deleteForward" === s) && a.length > c.length) throw new I("Input type detection error.");
                    var d = "",
                      u = p.selectionStart,
                      h = p.selectionEnd;
                    if ("insert" === s) d = a.slice(p.selectionStart, o);
                    else {
                      var g = c.length - a.length;
                      u = o, h = o + g
                    }
                    f.value !== c ? f.options = f.fallbackOptions : f.fallbackOptions = f.options;
                    var w = f.options,
                      m = l({
                        inputType: s,
                        previousValue: c,
                        previousOptions: w,
                        value: a,
                        addedValue: d,
                        changeStart: u,
                        changeEnd: h,
                        selectionStart: o,
                        selectionEnd: i
                      }),
                      x = m.options,
                      b = function(e, t) {
                        if (null == e) return {};
                        var r, l, n = function(e, t) {
                          if (null == e) return {};
                          var r = {};
                          for (var l in e)
                            if ({}.hasOwnProperty.call(e, l)) {
                              if (t.includes(l)) continue;
                              r[l] = e[l]
                            } return r
                        }(e, t);
                        if (Object.getOwnPropertySymbols) {
                          var a = Object.getOwnPropertySymbols(e);
                          for (l = 0; l < a.length; l++) r = a[l], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                        }
                        return n
                      }(m, S);
                    e.value = b.value, e.setSelectionRange(b.selectionStart, b.selectionEnd), f.value = b.value, f.options = x, p.selectionStart = b.selectionStart, p.selectionEnd = b.selectionEnd, null === (r = e._valueTracker) || void 0 === r || null === (n = r.setValue) || void 0 === n || n.call(r, c)
                  } catch (r) {
                    if (e.value = p.value, e.setSelectionRange(p.selectionStart, p.selectionEnd), t.preventDefault(), t.stopPropagation(), "SyntheticChangeError" !== r.name) throw r
                  }
                };
              document.activeElement === e && w(), e.addEventListener("focus", w), e.addEventListener("blur", m), e.addEventListener("input", x), n.set(e, {
                onFocus: w,
                onBlur: m,
                onInput: x
              })
            }
          }, this.unregister = function(e) {
            var t = n.get(e);
            void 0 !== t && (e.removeEventListener("focus", t.onFocus), e.removeEventListener("blur", t.onBlur), e.removeEventListener("input", t.onInput), n.delete(e))
          }
        }));
      P = z, Object.defineProperty(P.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Input"
      });
      var H, T = ["track", "modify"];

      function D(e) {
        var t, r, l, n;
        return {
          mask: null !== (t = e.mask) && void 0 !== t ? t : "",
          replacement: "string" == typeof e.replacement ? p(e.replacement) : null !== (r = e.replacement) && void 0 !== r ? r : {},
          showMask: null !== (l = e.showMask) && void 0 !== l && l,
          separate: null !== (n = e.separate) && void 0 !== n && n,
          track: e.track,
          modify: e.modify
        }
      }
      var B = function() {
        function e() {
          var t, r = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
          return function(e, t) {
            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
          }(this, e), (t = function(e, t, r) {
            return t = i(t),
              function(e, t) {
                if (t && ("object" == typeof t || "function" == typeof t)) return t;
                if (void 0 !== t) throw new TypeError("Derived constructors may only return object or undefined");
                return function(e) {
                  if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                  return e
                }(e)
              }(e, s() ? Reflect.construct(t, r || [], i(e).constructor) : t.apply(e, r))
          }(this, e, [{
            init: function(e) {
              var t = e.initialValue,
                l = e.controlled,
                n = D(r),
                a = n.mask,
                o = n.replacement,
                i = n.separate,
                s = n.showMask;
              return {
                value: t = l || t ? t : s ? a : "",
                options: {
                  mask: a,
                  replacement: o,
                  separate: i
                }
              }
            },
            tracking: function(e) {
              var t = e.inputType,
                l = e.previousValue,
                n = e.previousOptions,
                a = e.addedValue,
                o = e.changeStart,
                i = e.changeEnd,
                s = D(r),
                c = s.track,
                u = s.modify,
                w = function(e, t) {
                  if (null == e) return {};
                  var r, l, n = function(e, t) {
                    if (null == e) return {};
                    var r = {};
                    for (var l in e)
                      if ({}.hasOwnProperty.call(e, l)) {
                        if (t.includes(l)) continue;
                        r[l] = e[l]
                      } return r
                  }(e, t);
                  if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    for (l = 0; l < a.length; l++) r = a[l], t.includes(r) || {}.propertyIsEnumerable.call(e, r) && (n[r] = e[r])
                  }
                  return n
                }(s, T),
                m = w.mask,
                x = w.replacement,
                b = w.showMask,
                j = w.separate,
                y = d(d({}, "insert" === t ? {
                  inputType: t,
                  data: a
                } : {
                  inputType: t,
                  data: null
                }), {}, {
                  value: l,
                  selectionStart: o,
                  selectionEnd: i
                }),
                R = null == c ? void 0 : c(y);
              if (!1 === R) throw new I("Custom tracking stop.");
              null === R ? a = "" : !0 !== R && void 0 !== R && (a = R);
              var M = null == u ? void 0 : u(y);
              void 0 !== (null == M ? void 0 : M.mask) && (m = M.mask), void 0 !== (null == M ? void 0 : M.replacement) && (x = "string" == typeof(null == M ? void 0 : M.replacement) ? p(null == M ? void 0 : M.replacement) : M.replacement), void 0 !== (null == M ? void 0 : M.showMask) && (b = M.showMask), void 0 !== (null == M ? void 0 : M.separate) && (j = M.separate);
              var L = g(l, d({
                  end: o
                }, n)),
                C = g(l, d({
                  start: i
                }, n)),
                E = RegExp("[^".concat(Object.keys(x).join(""), "]"), "g"),
                A = m.replace(E, "");
              if (L && (L = h(L, {
                  replacementChars: A,
                  replacement: x,
                  separate: j
                }), A = A.slice(L.length)), a && (a = h(a, {
                  replacementChars: A,
                  replacement: x,
                  separate: !1
                }), A = A.slice(a.length)), "insert" === t && "" === a) throw new I("The character does not match the key value of the `replacement` object.");
              if (j) {
                var P = m.slice(o, i).replace(E, ""),
                  S = P.length - a.length;
                S < 0 ? C = C.slice(-S) : S > 0 && (C = P.slice(-S) + C)
              }
              C && (C = h(C, {
                replacementChars: A,
                replacement: x,
                separate: j
              }));
              var _ = f(L + a + C, {
                  mask: m,
                  replacement: x,
                  separate: j,
                  showMask: b
                }),
                z = function(e) {
                  var t, r, l, n = e.inputType,
                    a = e.value,
                    o = e.addedValue,
                    i = e.beforeChangeValue,
                    s = e.replacement,
                    c = e.separate,
                    d = v(a, {
                      mask: e.mask,
                      replacement: s
                    }).filter((function(e) {
                      var t = e.type;
                      return "input" === t || c && "replacement" === t
                    })),
                    u = null === (t = d[i.length + o.length - 1]) || void 0 === t ? void 0 : t.index,
                    h = null === (r = d[i.length - 1]) || void 0 === r ? void 0 : r.index,
                    f = null === (l = d[i.length + o.length]) || void 0 === l ? void 0 : l.index;
                  if ("insert" === n) {
                    if (void 0 !== u) return u + 1;
                    if (void 0 !== f) return f;
                    if (void 0 !== h) return h + 1
                  }
                  if ("deleteForward" === n) {
                    if (void 0 !== f) return f;
                    if (void 0 !== h) return h + 1
                  }
                  if ("deleteBackward" === n) {
                    if (void 0 !== h) return h + 1;
                    if (void 0 !== f) return f
                  }
                  var p = a.split("").findIndex((function(e) {
                    return Object.prototype.hasOwnProperty.call(s, e)
                  }));
                  return -1 !== p ? p : a.length
                }({
                  inputType: t,
                  value: _,
                  addedValue: a,
                  beforeChangeValue: L,
                  mask: m,
                  replacement: x,
                  separate: j
                });
              return {
                value: _,
                selectionStart: z,
                selectionEnd: z,
                options: {
                  mask: m,
                  replacement: x,
                  separate: j
                }
              }
            }
          }])).format = function(e) {
            return w(e, D(r))
          }, t.formatToParts = function(e) {
            return function(e, t) {
              var r = t.mask,
                l = t.replacement,
                n = "string" == typeof l ? p(l) : l;
              return v(w(e, {
                mask: r,
                replacement: n
              }), {
                mask: r,
                replacement: n
              })
            }(e, D(r))
          }, t.unformat = function(e) {
            return function(e, t) {
              var r = t.mask,
                l = t.replacement,
                n = "string" == typeof l ? p(l) : l,
                a = g(e, {
                  mask: r,
                  replacement: n,
                  separate: !1
                }),
                o = RegExp("[^".concat(Object.keys(n).join(""), "]"), "g");
              return h(a, {
                replacementChars: r.replace(o, ""),
                replacement: n,
                separate: !1
              })
            }(e, D(r))
          }, t.generatePattern = function(e) {
            return function(e, t) {
              for (var r = t.mask, l = t.replacement, n = "string" == typeof l ? p(l) : l, a = "partial" === e || "partial-inexact" === e, o = "full" === e || "partial" === e, i = "", s = 0; s < r.length; s++) {
                var c = r[s];
                0 === s && (i = "^"), a && (i += "("), i += Object.prototype.hasOwnProperty.call(n, c) ? "".concat(o ? "(?!".concat(x(c), ")") : "", "(").concat(n[c].source, ")") : x(c), s === r.length - 1 && (a && (i += ")?".repeat(r.length)), i += "$")
              }
              return i
            }(e, D(r))
          }, t
        }
        return function(e, t) {
            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
            e.prototype = Object.create(t && t.prototype, {
              constructor: {
                value: e,
                writable: !0,
                configurable: !0
              }
            }), Object.defineProperty(e, "prototype", {
              writable: !1
            }), t && u(e, t)
          }(e, z),
          function(e) {
            return Object.defineProperty(e, "prototype", {
              writable: !1
            }), e
          }(e)
      }();

      function N() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
          t = e.mask,
          r = e.replacement,
          n = e.showMask,
          a = e.separate,
          o = e.track,
          i = e.modify,
          s = (0, l.useRef)(null),
          c = (0, l.useRef)({
            mask: t,
            replacement: r,
            showMask: n,
            separate: a,
            track: o,
            modify: i
          });
        return c.current.mask = t, c.current.replacement = r, c.current.showMask = n, c.current.separate = a, c.current.track = o, c.current.modify = i, (0, l.useMemo)((function() {
          return function(e, t) {
            return new Proxy(e, {
              set: function(r, l, n) {
                return "current" === l && (n !== e.current && (null !== e.current && t.unregister(e.current), null !== n && t.register(n)), r[l] = n, !0)
              }
            })
          }(s, new B(c.current))
        }), [])
      }
      H = B, Object.defineProperty(H.prototype, Symbol.toStringTag, {
        writable: !1,
        enumerable: !1,
        configurable: !0,
        value: "Mask"
      })
    },
    75130: (e, t, r) => {
      r.d(t, {
        ZE: () => n,
        Im: () => s,
        tv: () => d,
        Tu: () => w,
        eW: () => i,
        oF: () => c,
        N1: () => g,
        N6: () => f,
        jA: () => v,
        Jp: () => h,
        xm: () => p,
        Qh: () => u,
        qg: () => $
      });
      var l, n, a, o = r(91299);

      function i(e) {
        return e.type === n.literal
      }

      function s(e) {
        return e.type === n.argument
      }

      function c(e) {
        return e.type === n.number
      }

      function d(e) {
        return e.type === n.date
      }

      function u(e) {
        return e.type === n.time
      }

      function h(e) {
        return e.type === n.select
      }

      function f(e) {
        return e.type === n.plural
      }

      function v(e) {
        return e.type === n.pound
      }

      function p(e) {
        return e.type === n.tag
      }

      function g(e) {
        return !(!e || "object" != typeof e || e.type !== a.number)
      }

      function w(e) {
        return !(!e || "object" != typeof e || e.type !== a.dateTime)
      }! function(e) {
        e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG"
      }(l || (l = {})),
      function(e) {
        e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag"
      }(n || (n = {})),
      function(e) {
        e[e.number = 0] = "number", e[e.dateTime = 1] = "dateTime"
      }(a || (a = {}));
      var m, x = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        b = r(52639),
        j = r(76191),
        y = {
          "001": ["H", "h"],
          419: ["h", "H", "hB", "hb"],
          AC: ["H", "h", "hb", "hB"],
          AD: ["H", "hB"],
          AE: ["h", "hB", "hb", "H"],
          AF: ["H", "hb", "hB", "h"],
          AG: ["h", "hb", "H", "hB"],
          AI: ["H", "h", "hb", "hB"],
          AL: ["h", "H", "hB"],
          AM: ["H", "hB"],
          AO: ["H", "hB"],
          AR: ["h", "H", "hB", "hb"],
          AS: ["h", "H"],
          AT: ["H", "hB"],
          AU: ["h", "hb", "H", "hB"],
          AW: ["H", "hB"],
          AX: ["H"],
          AZ: ["H", "hB", "h"],
          BA: ["H", "hB", "h"],
          BB: ["h", "hb", "H", "hB"],
          BD: ["h", "hB", "H"],
          BE: ["H", "hB"],
          BF: ["H", "hB"],
          BG: ["H", "hB", "h"],
          BH: ["h", "hB", "hb", "H"],
          BI: ["H", "h"],
          BJ: ["H", "hB"],
          BL: ["H", "hB"],
          BM: ["h", "hb", "H", "hB"],
          BN: ["hb", "hB", "h", "H"],
          BO: ["h", "H", "hB", "hb"],
          BQ: ["H"],
          BR: ["H", "hB"],
          BS: ["h", "hb", "H", "hB"],
          BT: ["h", "H"],
          BW: ["H", "h", "hb", "hB"],
          BY: ["H", "h"],
          BZ: ["H", "h", "hb", "hB"],
          CA: ["h", "hb", "H", "hB"],
          CC: ["H", "h", "hb", "hB"],
          CD: ["hB", "H"],
          CF: ["H", "h", "hB"],
          CG: ["H", "hB"],
          CH: ["H", "hB", "h"],
          CI: ["H", "hB"],
          CK: ["H", "h", "hb", "hB"],
          CL: ["h", "H", "hB", "hb"],
          CM: ["H", "h", "hB"],
          CN: ["H", "hB", "hb", "h"],
          CO: ["h", "H", "hB", "hb"],
          CP: ["H"],
          CR: ["h", "H", "hB", "hb"],
          CU: ["h", "H", "hB", "hb"],
          CV: ["H", "hB"],
          CW: ["H", "hB"],
          CX: ["H", "h", "hb", "hB"],
          CY: ["h", "H", "hb", "hB"],
          CZ: ["H"],
          DE: ["H", "hB"],
          DG: ["H", "h", "hb", "hB"],
          DJ: ["h", "H"],
          DK: ["H"],
          DM: ["h", "hb", "H", "hB"],
          DO: ["h", "H", "hB", "hb"],
          DZ: ["h", "hB", "hb", "H"],
          EA: ["H", "h", "hB", "hb"],
          EC: ["h", "H", "hB", "hb"],
          EE: ["H", "hB"],
          EG: ["h", "hB", "hb", "H"],
          EH: ["h", "hB", "hb", "H"],
          ER: ["h", "H"],
          ES: ["H", "hB", "h", "hb"],
          ET: ["hB", "hb", "h", "H"],
          FI: ["H"],
          FJ: ["h", "hb", "H", "hB"],
          FK: ["H", "h", "hb", "hB"],
          FM: ["h", "hb", "H", "hB"],
          FO: ["H", "h"],
          FR: ["H", "hB"],
          GA: ["H", "hB"],
          GB: ["H", "h", "hb", "hB"],
          GD: ["h", "hb", "H", "hB"],
          GE: ["H", "hB", "h"],
          GF: ["H", "hB"],
          GG: ["H", "h", "hb", "hB"],
          GH: ["h", "H"],
          GI: ["H", "h", "hb", "hB"],
          GL: ["H", "h"],
          GM: ["h", "hb", "H", "hB"],
          GN: ["H", "hB"],
          GP: ["H", "hB"],
          GQ: ["H", "hB", "h", "hb"],
          GR: ["h", "H", "hb", "hB"],
          GT: ["h", "H", "hB", "hb"],
          GU: ["h", "hb", "H", "hB"],
          GW: ["H", "hB"],
          GY: ["h", "hb", "H", "hB"],
          HK: ["h", "hB", "hb", "H"],
          HN: ["h", "H", "hB", "hb"],
          HR: ["H", "hB"],
          HU: ["H", "h"],
          IC: ["H", "h", "hB", "hb"],
          ID: ["H"],
          IE: ["H", "h", "hb", "hB"],
          IL: ["H", "hB"],
          IM: ["H", "h", "hb", "hB"],
          IN: ["h", "H"],
          IO: ["H", "h", "hb", "hB"],
          IQ: ["h", "hB", "hb", "H"],
          IR: ["hB", "H"],
          IS: ["H"],
          IT: ["H", "hB"],
          JE: ["H", "h", "hb", "hB"],
          JM: ["h", "hb", "H", "hB"],
          JO: ["h", "hB", "hb", "H"],
          JP: ["H", "K", "h"],
          KE: ["hB", "hb", "H", "h"],
          KG: ["H", "h", "hB", "hb"],
          KH: ["hB", "h", "H", "hb"],
          KI: ["h", "hb", "H", "hB"],
          KM: ["H", "h", "hB", "hb"],
          KN: ["h", "hb", "H", "hB"],
          KP: ["h", "H", "hB", "hb"],
          KR: ["h", "H", "hB", "hb"],
          KW: ["h", "hB", "hb", "H"],
          KY: ["h", "hb", "H", "hB"],
          KZ: ["H", "hB"],
          LA: ["H", "hb", "hB", "h"],
          LB: ["h", "hB", "hb", "H"],
          LC: ["h", "hb", "H", "hB"],
          LI: ["H", "hB", "h"],
          LK: ["H", "h", "hB", "hb"],
          LR: ["h", "hb", "H", "hB"],
          LS: ["h", "H"],
          LT: ["H", "h", "hb", "hB"],
          LU: ["H", "h", "hB"],
          LV: ["H", "hB", "hb", "h"],
          LY: ["h", "hB", "hb", "H"],
          MA: ["H", "h", "hB", "hb"],
          MC: ["H", "hB"],
          MD: ["H", "hB"],
          ME: ["H", "hB", "h"],
          MF: ["H", "hB"],
          MG: ["H", "h"],
          MH: ["h", "hb", "H", "hB"],
          MK: ["H", "h", "hb", "hB"],
          ML: ["H"],
          MM: ["hB", "hb", "H", "h"],
          MN: ["H", "h", "hb", "hB"],
          MO: ["h", "hB", "hb", "H"],
          MP: ["h", "hb", "H", "hB"],
          MQ: ["H", "hB"],
          MR: ["h", "hB", "hb", "H"],
          MS: ["H", "h", "hb", "hB"],
          MT: ["H", "h"],
          MU: ["H", "h"],
          MV: ["H", "h"],
          MW: ["h", "hb", "H", "hB"],
          MX: ["h", "H", "hB", "hb"],
          MY: ["hb", "hB", "h", "H"],
          MZ: ["H", "hB"],
          NA: ["h", "H", "hB", "hb"],
          NC: ["H", "hB"],
          NE: ["H"],
          NF: ["H", "h", "hb", "hB"],
          NG: ["H", "h", "hb", "hB"],
          NI: ["h", "H", "hB", "hb"],
          NL: ["H", "hB"],
          NO: ["H", "h"],
          NP: ["H", "h", "hB"],
          NR: ["H", "h", "hb", "hB"],
          NU: ["H", "h", "hb", "hB"],
          NZ: ["h", "hb", "H", "hB"],
          OM: ["h", "hB", "hb", "H"],
          PA: ["h", "H", "hB", "hb"],
          PE: ["h", "H", "hB", "hb"],
          PF: ["H", "h", "hB"],
          PG: ["h", "H"],
          PH: ["h", "hB", "hb", "H"],
          PK: ["h", "hB", "H"],
          PL: ["H", "h"],
          PM: ["H", "hB"],
          PN: ["H", "h", "hb", "hB"],
          PR: ["h", "H", "hB", "hb"],
          PS: ["h", "hB", "hb", "H"],
          PT: ["H", "hB"],
          PW: ["h", "H"],
          PY: ["h", "H", "hB", "hb"],
          QA: ["h", "hB", "hb", "H"],
          RE: ["H", "hB"],
          RO: ["H", "hB"],
          RS: ["H", "hB", "h"],
          RU: ["H"],
          RW: ["H", "h"],
          SA: ["h", "hB", "hb", "H"],
          SB: ["h", "hb", "H", "hB"],
          SC: ["H", "h", "hB"],
          SD: ["h", "hB", "hb", "H"],
          SE: ["H"],
          SG: ["h", "hb", "H", "hB"],
          SH: ["H", "h", "hb", "hB"],
          SI: ["H", "hB"],
          SJ: ["H"],
          SK: ["H"],
          SL: ["h", "hb", "H", "hB"],
          SM: ["H", "h", "hB"],
          SN: ["H", "h", "hB"],
          SO: ["h", "H"],
          SR: ["H", "hB"],
          SS: ["h", "hb", "H", "hB"],
          ST: ["H", "hB"],
          SV: ["h", "H", "hB", "hb"],
          SX: ["H", "h", "hb", "hB"],
          SY: ["h", "hB", "hb", "H"],
          SZ: ["h", "hb", "H", "hB"],
          TA: ["H", "h", "hb", "hB"],
          TC: ["h", "hb", "H", "hB"],
          TD: ["h", "H", "hB"],
          TF: ["H", "h", "hB"],
          TG: ["H", "hB"],
          TH: ["H", "h"],
          TJ: ["H", "h"],
          TL: ["H", "hB", "hb", "h"],
          TM: ["H", "h"],
          TN: ["h", "hB", "hb", "H"],
          TO: ["h", "H"],
          TR: ["H", "hB"],
          TT: ["h", "hb", "H", "hB"],
          TW: ["hB", "hb", "h", "H"],
          TZ: ["hB", "hb", "H", "h"],
          UA: ["H", "hB", "h"],
          UG: ["hB", "hb", "H", "h"],
          UM: ["h", "hb", "H", "hB"],
          US: ["h", "hb", "H", "hB"],
          UY: ["h", "H", "hB", "hb"],
          UZ: ["H", "hB", "h"],
          VA: ["H", "h", "hB"],
          VC: ["h", "hb", "H", "hB"],
          VE: ["h", "H", "hB", "hb"],
          VG: ["h", "hb", "H", "hB"],
          VI: ["h", "hb", "H", "hB"],
          VN: ["H", "h"],
          VU: ["h", "H"],
          WF: ["H", "hB"],
          WS: ["h", "H"],
          XK: ["H", "hB", "h"],
          YE: ["h", "hB", "hb", "H"],
          YT: ["H", "hB"],
          ZA: ["H", "h", "hb", "hB"],
          ZM: ["h", "hb", "H", "hB"],
          ZW: ["H", "h"],
          "af-ZA": ["H", "h", "hB", "hb"],
          "ar-001": ["h", "hB", "hb", "H"],
          "ca-ES": ["H", "h", "hB"],
          "en-001": ["h", "hb", "H", "hB"],
          "en-HK": ["h", "hb", "H", "hB"],
          "en-IL": ["H", "h", "hb", "hB"],
          "en-MY": ["h", "hb", "H", "hB"],
          "es-BR": ["H", "h", "hB", "hb"],
          "es-ES": ["H", "h", "hB", "hb"],
          "es-GQ": ["H", "h", "hB", "hb"],
          "fr-CA": ["H", "h", "hB"],
          "gl-ES": ["H", "h", "hB"],
          "gu-IN": ["hB", "hb", "h", "H"],
          "hi-IN": ["hB", "h", "H"],
          "it-CH": ["H", "h", "hB"],
          "it-IT": ["H", "h", "hB"],
          "kn-IN": ["hB", "h", "H"],
          "ml-IN": ["hB", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          "ta-IN": ["hB", "h", "hb", "H"],
          "te-IN": ["hB", "h", "H"],
          "zu-ZA": ["H", "hB", "hb", "h"]
        };

      function R(e) {
        var t = e.hourCycle;
        if (void 0 === t && e.hourCycles && e.hourCycles.length && (t = e.hourCycles[0]), t) switch (t) {
          case "h24":
            return "k";
          case "h23":
            return "H";
          case "h12":
            return "h";
          case "h11":
            return "K";
          default:
            throw new Error("Invalid hourCycle")
        }
        var r, l = e.language;
        return "root" !== l && (r = e.maximize().region), (y[r || ""] || y[l || ""] || y["".concat(l, "-001")] || y["001"])[0]
      }
      var M = new RegExp("^".concat(x.source, "*")),
        L = new RegExp("".concat(x.source, "*$"));

      function C(e, t) {
        return {
          start: e,
          end: t
        }
      }
      var E = !!String.prototype.startsWith && "_a".startsWith("a", 1),
        A = !!String.fromCodePoint,
        P = !!Object.fromEntries,
        I = !!String.prototype.codePointAt,
        S = !!String.prototype.trimStart,
        _ = !!String.prototype.trimEnd,
        z = Number.isSafeInteger ? Number.isSafeInteger : function(e) {
          return "number" == typeof e && isFinite(e) && Math.floor(e) === e && Math.abs(e) <= 9007199254740991
        },
        H = !0;
      try {
        H = "a" === (null === (m = G("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu").exec("a")) || void 0 === m ? void 0 : m[0])
      } catch (e) {
        H = !1
      }
      var T, D = E ? function(e, t, r) {
          return e.startsWith(t, r)
        } : function(e, t, r) {
          return e.slice(r, r + t.length) === t
        },
        B = A ? String.fromCodePoint : function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          for (var r, l = "", n = e.length, a = 0; n > a;) {
            if ((r = e[a++]) > 1114111) throw RangeError(r + " is not a valid code point");
            l += r < 65536 ? String.fromCharCode(r) : String.fromCharCode(55296 + ((r -= 65536) >> 10), r % 1024 + 56320)
          }
          return l
        },
        N = P ? Object.fromEntries : function(e) {
          for (var t = {}, r = 0, l = e; r < l.length; r++) {
            var n = l[r],
              a = n[0],
              o = n[1];
            t[a] = o
          }
          return t
        },
        k = I ? function(e, t) {
          return e.codePointAt(t)
        } : function(e, t) {
          var r = e.length;
          if (!(t < 0 || t >= r)) {
            var l, n = e.charCodeAt(t);
            return n < 55296 || n > 56319 || t + 1 === r || (l = e.charCodeAt(t + 1)) < 56320 || l > 57343 ? n : l - 56320 + (n - 55296 << 10) + 65536
          }
        },
        V = S ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(M, "")
        },
        O = _ ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(L, "")
        };

      function G(e, t) {
        return new RegExp(e, t)
      }
      if (H) {
        var F = G("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
        T = function(e, t) {
          var r;
          return F.lastIndex = t, null !== (r = F.exec(e)[1]) && void 0 !== r ? r : ""
        }
      } else T = function(e, t) {
        for (var r = [];;) {
          var l = k(e, t);
          if (void 0 === l || U(l) || K(l)) break;
          r.push(l), t += l >= 65536 ? 2 : 1
        }
        return B.apply(void 0, r)
      };
      var X = function() {
        function e(e, t) {
          void 0 === t && (t = {}), this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        return e.prototype.parse = function() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          return this.parseMessage(0, "", !1)
        }, e.prototype.parseMessage = function(e, t, r) {
          for (var a = []; !this.isEOF();) {
            var o = this.char();
            if (123 === o) {
              if ((i = this.parseArgument(e, r)).err) return i;
              a.push(i.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (r) break;
                  return this.error(l.UNMATCHED_CLOSING_TAG, C(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && q(this.peek() || 0)) {
                  if ((i = this.parseTag(e, t)).err) return i;
                  a.push(i.val)
                } else {
                  var i;
                  if ((i = this.parseLiteral(e, t)).err) return i;
                  a.push(i.val)
                }
              } else {
                var s = this.clonePosition();
                this.bump(), a.push({
                  type: n.pound,
                  location: C(s, this.clonePosition())
                })
              }
            }
          }
          return {
            val: a,
            err: null
          }
        }, e.prototype.parseTag = function(e, t) {
          var r = this.clonePosition();
          this.bump();
          var a = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: n.literal,
              value: "<".concat(a, "/>"),
              location: C(r, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            var o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            var i = o.val,
              s = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !q(this.char())) return this.error(l.INVALID_TAG, C(s, this.clonePosition()));
              var c = this.clonePosition();
              return a !== this.parseTagName() ? this.error(l.UNMATCHED_CLOSING_TAG, C(c, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: n.tag,
                  value: a,
                  children: i,
                  location: C(r, this.clonePosition())
                },
                err: null
              } : this.error(l.INVALID_TAG, C(s, this.clonePosition())))
            }
            return this.error(l.UNCLOSED_TAG, C(r, this.clonePosition()))
          }
          return this.error(l.INVALID_TAG, C(r, this.clonePosition()))
        }, e.prototype.parseTagName = function() {
          var e, t = this.offset();
          for (this.bump(); !this.isEOF() && (45 === (e = this.char()) || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039);) this.bump();
          return this.message.slice(t, this.offset())
        }, e.prototype.parseLiteral = function(e, t) {
          for (var r = this.clonePosition(), l = "";;) {
            var a = this.tryParseQuote(t);
            if (a) l += a;
            else {
              var o = this.tryParseUnquoted(e, t);
              if (o) l += o;
              else {
                var i = this.tryParseLeftAngleBracket();
                if (!i) break;
                l += i
              }
            }
          }
          var s = C(r, this.clonePosition());
          return {
            val: {
              type: n.literal,
              value: l,
              location: s
            },
            err: null
          }
        }, e.prototype.tryParseLeftAngleBracket = function() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (q(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }, e.prototype.tryParseQuote = function(e) {
          if (this.isEOF() || 39 !== this.char()) return null;
          switch (this.peek()) {
            case 39:
              return this.bump(), this.bump(), "'";
            case 123:
            case 60:
            case 62:
            case 125:
              break;
            case 35:
              if ("plural" === e || "selectordinal" === e) break;
              return null;
            default:
              return null
          }
          this.bump();
          var t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            var r = this.char();
            if (39 === r) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(r);
            this.bump()
          }
          return B.apply(void 0, t)
        }, e.prototype.tryParseUnquoted = function(e, t) {
          if (this.isEOF()) return null;
          var r = this.char();
          return 60 === r || 123 === r || 35 === r && ("plural" === t || "selectordinal" === t) || 125 === r && e > 0 ? null : (this.bump(), B(r))
        }, e.prototype.parseArgument = function(e, t) {
          var r = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, C(r, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(l.EMPTY_ARGUMENT, C(r, this.clonePosition()));
          var a = this.parseIdentifierIfPossible().value;
          if (!a) return this.error(l.MALFORMED_ARGUMENT, C(r, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, C(r, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: n.argument,
                  value: a,
                  location: C(r, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, C(r, this.clonePosition())) : this.parseArgumentOptions(e, t, a, r);
            default:
              return this.error(l.MALFORMED_ARGUMENT, C(r, this.clonePosition()))
          }
        }, e.prototype.parseIdentifierIfPossible = function() {
          var e = this.clonePosition(),
            t = this.offset(),
            r = T(this.message, t),
            l = t + r.length;
          return this.bumpTo(l), {
            value: r,
            location: C(e, this.clonePosition())
          }
        }, e.prototype.parseArgumentOptions = function(e, t, r, i) {
          var s, c = this.clonePosition(),
            d = this.parseIdentifierIfPossible().value,
            u = this.clonePosition();
          switch (d) {
            case "":
              return this.error(l.EXPECT_ARGUMENT_TYPE, C(c, u));
            case "number":
            case "date":
            case "time":
              this.bumpSpace();
              var h = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                var f = this.clonePosition();
                if ((y = this.parseSimpleArgStyleIfPossible()).err) return y;
                if (0 === (w = O(y.val)).length) return this.error(l.EXPECT_ARGUMENT_STYLE, C(this.clonePosition(), this.clonePosition()));
                h = {
                  style: w,
                  styleLocation: C(f, this.clonePosition())
                }
              }
              if ((M = this.tryParseArgumentClose(i)).err) return M;
              var v = C(i, this.clonePosition());
              if (h && D(null == h ? void 0 : h.style, "::", 0)) {
                var p = V(h.style.slice(2));
                if ("number" === d) return (y = this.parseNumberSkeletonFromString(p, h.styleLocation)).err ? y : {
                  val: {
                    type: n.number,
                    value: r,
                    location: v,
                    style: y.val
                  },
                  err: null
                };
                if (0 === p.length) return this.error(l.EXPECT_DATE_TIME_SKELETON, v);
                var g = p;
                this.locale && (g = function(e, t) {
                  for (var r = "", l = 0; l < e.length; l++) {
                    var n = e.charAt(l);
                    if ("j" === n) {
                      for (var a = 0; l + 1 < e.length && e.charAt(l + 1) === n;) a++, l++;
                      var o = 1 + (1 & a),
                        i = a < 2 ? 1 : 3 + (a >> 1),
                        s = R(t);
                      for ("H" != s && "k" != s || (i = 0); i-- > 0;) r += "a";
                      for (; o-- > 0;) r = s + r
                    } else r += "J" === n ? "H" : n
                  }
                  return r
                }(p, this.locale));
                var w = {
                  type: a.dateTime,
                  pattern: g,
                  location: h.styleLocation,
                  parsedOptions: this.shouldParseSkeletons ? (0, b.e)(g) : {}
                };
                return {
                  val: {
                    type: "date" === d ? n.date : n.time,
                    value: r,
                    location: v,
                    style: w
                  },
                  err: null
                }
              }
              return {
                val: {
                  type: "number" === d ? n.number : "date" === d ? n.date : n.time,
                  value: r,
                  location: v,
                  style: null !== (s = null == h ? void 0 : h.style) && void 0 !== s ? s : null
                }, err: null
              };
            case "plural":
            case "selectordinal":
            case "select":
              var m = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(l.EXPECT_SELECT_ARGUMENT_OPTIONS, C(m, (0, o.__assign)({}, m)));
              this.bumpSpace();
              var x = this.parseIdentifierIfPossible(),
                j = 0;
              if ("select" !== d && "offset" === x.value) {
                if (!this.bumpIf(":")) return this.error(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, C(this.clonePosition(), this.clonePosition()));
                var y;
                if (this.bumpSpace(), (y = this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE, l.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE)).err) return y;
                this.bumpSpace(), x = this.parseIdentifierIfPossible(), j = y.val
              }
              var M, L = this.tryParsePluralOrSelectOptions(e, d, t, x);
              if (L.err) return L;
              if ((M = this.tryParseArgumentClose(i)).err) return M;
              var E = C(i, this.clonePosition());
              return "select" === d ? {
                val: {
                  type: n.select,
                  value: r,
                  options: N(L.val),
                  location: E
                },
                err: null
              } : {
                val: {
                  type: n.plural,
                  value: r,
                  options: N(L.val),
                  offset: j,
                  pluralType: "plural" === d ? "cardinal" : "ordinal",
                  location: E
                },
                err: null
              };
            default:
              return this.error(l.INVALID_ARGUMENT_TYPE, C(c, u))
          }
        }, e.prototype.tryParseArgumentClose = function(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(l.EXPECT_ARGUMENT_CLOSING_BRACE, C(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }, e.prototype.parseSimpleArgStyleIfPossible = function() {
          for (var e = 0, t = this.clonePosition(); !this.isEOF();) switch (this.char()) {
            case 39:
              this.bump();
              var r = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(l.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE, C(r, this.clonePosition()));
              this.bump();
              break;
            case 123:
              e += 1, this.bump();
              break;
            case 125:
              if (!(e > 0)) return {
                val: this.message.slice(t.offset, this.offset()),
                err: null
              };
              e -= 1;
              break;
            default:
              this.bump()
          }
          return {
            val: this.message.slice(t.offset, this.offset()),
            err: null
          }
        }, e.prototype.parseNumberSkeletonFromString = function(e, t) {
          var r = [];
          try {
            r = (0, j.r)(e)
          } catch (e) {
            return this.error(l.INVALID_NUMBER_SKELETON, t)
          }
          return {
            val: {
              type: a.number,
              tokens: r,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? (0, j.e)(r) : {}
            },
            err: null
          }
        }, e.prototype.tryParsePluralOrSelectOptions = function(e, t, r, n) {
          for (var a, o = !1, i = [], s = new Set, c = n.value, d = n.location;;) {
            if (0 === c.length) {
              var u = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break;
              var h = this.tryParseDecimalInteger(l.EXPECT_PLURAL_ARGUMENT_SELECTOR, l.INVALID_PLURAL_ARGUMENT_SELECTOR);
              if (h.err) return h;
              d = C(u, this.clonePosition()), c = this.message.slice(u.offset, this.offset())
            }
            if (s.has(c)) return this.error("select" === t ? l.DUPLICATE_SELECT_ARGUMENT_SELECTOR : l.DUPLICATE_PLURAL_ARGUMENT_SELECTOR, d);
            "other" === c && (o = !0), this.bumpSpace();
            var f = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? l.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT : l.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT, C(this.clonePosition(), this.clonePosition()));
            var v = this.parseMessage(e + 1, t, r);
            if (v.err) return v;
            var p = this.tryParseArgumentClose(f);
            if (p.err) return p;
            i.push([c, {
              value: v.val,
              location: C(f, this.clonePosition())
            }]), s.add(c), this.bumpSpace(), c = (a = this.parseIdentifierIfPossible()).value, d = a.location
          }
          return 0 === i.length ? this.error("select" === t ? l.EXPECT_SELECT_ARGUMENT_SELECTOR : l.EXPECT_PLURAL_ARGUMENT_SELECTOR, C(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(l.MISSING_OTHER_CLAUSE, C(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }, e.prototype.tryParseDecimalInteger = function(e, t) {
          var r = 1,
            l = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (r = -1);
          for (var n = !1, a = 0; !this.isEOF();) {
            var o = this.char();
            if (!(o >= 48 && o <= 57)) break;
            n = !0, a = 10 * a + (o - 48), this.bump()
          }
          var i = C(l, this.clonePosition());
          return n ? z(a *= r) ? {
            val: a,
            err: null
          } : this.error(t, i) : this.error(e, i)
        }, e.prototype.offset = function() {
          return this.position.offset
        }, e.prototype.isEOF = function() {
          return this.offset() === this.message.length
        }, e.prototype.clonePosition = function() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }, e.prototype.char = function() {
          var e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          var t = k(this.message, e);
          if (void 0 === t) throw Error("Offset ".concat(e, " is at invalid UTF-16 code unit boundary"));
          return t
        }, e.prototype.error = function(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }, e.prototype.bump = function() {
          if (!this.isEOF()) {
            var e = this.char();
            10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
          }
        }, e.prototype.bumpIf = function(e) {
          if (D(this.message, e, this.offset())) {
            for (var t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }, e.prototype.bumpUntil = function(e) {
          var t = this.offset(),
            r = this.message.indexOf(e, t);
          return r >= 0 ? (this.bumpTo(r), !0) : (this.bumpTo(this.message.length), !1)
        }, e.prototype.bumpTo = function(e) {
          if (this.offset() > e) throw Error("targetOffset ".concat(e, " must be greater than or equal to the current offset ").concat(this.offset()));
          for (e = Math.min(e, this.message.length);;) {
            var t = this.offset();
            if (t === e) break;
            if (t > e) throw Error("targetOffset ".concat(e, " is at invalid UTF-16 code unit boundary"));
            if (this.bump(), this.isEOF()) break
          }
        }, e.prototype.bumpSpace = function() {
          for (; !this.isEOF() && U(this.char());) this.bump()
        }, e.prototype.peek = function() {
          if (this.isEOF()) return null;
          var e = this.char(),
            t = this.offset(),
            r = this.message.charCodeAt(t + (e >= 65536 ? 2 : 1));
          return null != r ? r : null
        }, e
      }();

      function q(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function U(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function K(e) {
        return e >= 33 && e <= 35 || 36 === e || e >= 37 && e <= 39 || 40 === e || 41 === e || 42 === e || 43 === e || 44 === e || 45 === e || e >= 46 && e <= 47 || e >= 58 && e <= 59 || e >= 60 && e <= 62 || e >= 63 && e <= 64 || 91 === e || 92 === e || 93 === e || 94 === e || 96 === e || 123 === e || 124 === e || 125 === e || 126 === e || 161 === e || e >= 162 && e <= 165 || 166 === e || 167 === e || 169 === e || 171 === e || 172 === e || 174 === e || 176 === e || 177 === e || 182 === e || 187 === e || 191 === e || 215 === e || 247 === e || e >= 8208 && e <= 8213 || e >= 8214 && e <= 8215 || 8216 === e || 8217 === e || 8218 === e || e >= 8219 && e <= 8220 || 8221 === e || 8222 === e || 8223 === e || e >= 8224 && e <= 8231 || e >= 8240 && e <= 8248 || 8249 === e || 8250 === e || e >= 8251 && e <= 8254 || e >= 8257 && e <= 8259 || 8260 === e || 8261 === e || 8262 === e || e >= 8263 && e <= 8273 || 8274 === e || 8275 === e || e >= 8277 && e <= 8286 || e >= 8592 && e <= 8596 || e >= 8597 && e <= 8601 || e >= 8602 && e <= 8603 || e >= 8604 && e <= 8607 || 8608 === e || e >= 8609 && e <= 8610 || 8611 === e || e >= 8612 && e <= 8613 || 8614 === e || e >= 8615 && e <= 8621 || 8622 === e || e >= 8623 && e <= 8653 || e >= 8654 && e <= 8655 || e >= 8656 && e <= 8657 || 8658 === e || 8659 === e || 8660 === e || e >= 8661 && e <= 8691 || e >= 8692 && e <= 8959 || e >= 8960 && e <= 8967 || 8968 === e || 8969 === e || 8970 === e || 8971 === e || e >= 8972 && e <= 8991 || e >= 8992 && e <= 8993 || e >= 8994 && e <= 9e3 || 9001 === e || 9002 === e || e >= 9003 && e <= 9083 || 9084 === e || e >= 9085 && e <= 9114 || e >= 9115 && e <= 9139 || e >= 9140 && e <= 9179 || e >= 9180 && e <= 9185 || e >= 9186 && e <= 9254 || e >= 9255 && e <= 9279 || e >= 9280 && e <= 9290 || e >= 9291 && e <= 9311 || e >= 9472 && e <= 9654 || 9655 === e || e >= 9656 && e <= 9664 || 9665 === e || e >= 9666 && e <= 9719 || e >= 9720 && e <= 9727 || e >= 9728 && e <= 9838 || 9839 === e || e >= 9840 && e <= 10087 || 10088 === e || 10089 === e || 10090 === e || 10091 === e || 10092 === e || 10093 === e || 10094 === e || 10095 === e || 10096 === e || 10097 === e || 10098 === e || 10099 === e || 10100 === e || 10101 === e || e >= 10132 && e <= 10175 || e >= 10176 && e <= 10180 || 10181 === e || 10182 === e || e >= 10183 && e <= 10213 || 10214 === e || 10215 === e || 10216 === e || 10217 === e || 10218 === e || 10219 === e || 10220 === e || 10221 === e || 10222 === e || 10223 === e || e >= 10224 && e <= 10239 || e >= 10240 && e <= 10495 || e >= 10496 && e <= 10626 || 10627 === e || 10628 === e || 10629 === e || 10630 === e || 10631 === e || 10632 === e || 10633 === e || 10634 === e || 10635 === e || 10636 === e || 10637 === e || 10638 === e || 10639 === e || 10640 === e || 10641 === e || 10642 === e || 10643 === e || 10644 === e || 10645 === e || 10646 === e || 10647 === e || 10648 === e || e >= 10649 && e <= 10711 || 10712 === e || 10713 === e || 10714 === e || 10715 === e || e >= 10716 && e <= 10747 || 10748 === e || 10749 === e || e >= 10750 && e <= 11007 || e >= 11008 && e <= 11055 || e >= 11056 && e <= 11076 || e >= 11077 && e <= 11078 || e >= 11079 && e <= 11084 || e >= 11085 && e <= 11123 || e >= 11124 && e <= 11125 || e >= 11126 && e <= 11157 || 11158 === e || e >= 11159 && e <= 11263 || e >= 11776 && e <= 11777 || 11778 === e || 11779 === e || 11780 === e || 11781 === e || e >= 11782 && e <= 11784 || 11785 === e || 11786 === e || 11787 === e || 11788 === e || 11789 === e || e >= 11790 && e <= 11798 || 11799 === e || e >= 11800 && e <= 11801 || 11802 === e || 11803 === e || 11804 === e || 11805 === e || e >= 11806 && e <= 11807 || 11808 === e || 11809 === e || 11810 === e || 11811 === e || 11812 === e || 11813 === e || 11814 === e || 11815 === e || 11816 === e || 11817 === e || e >= 11818 && e <= 11822 || 11823 === e || e >= 11824 && e <= 11833 || e >= 11834 && e <= 11835 || e >= 11836 && e <= 11839 || 11840 === e || 11841 === e || 11842 === e || e >= 11843 && e <= 11855 || e >= 11856 && e <= 11857 || 11858 === e || e >= 11859 && e <= 11903 || e >= 12289 && e <= 12291 || 12296 === e || 12297 === e || 12298 === e || 12299 === e || 12300 === e || 12301 === e || 12302 === e || 12303 === e || 12304 === e || 12305 === e || e >= 12306 && e <= 12307 || 12308 === e || 12309 === e || 12310 === e || 12311 === e || 12312 === e || 12313 === e || 12314 === e || 12315 === e || 12316 === e || 12317 === e || e >= 12318 && e <= 12319 || 12320 === e || 12336 === e || 64830 === e || 64831 === e || e >= 65093 && e <= 65094
      }

      function W(e) {
        e.forEach((function(e) {
          if (delete e.location, h(e) || f(e))
            for (var t in e.options) delete e.options[t].location, W(e.options[t].value);
          else c(e) && g(e.style) || (d(e) || u(e)) && w(e.style) ? delete e.style.location : p(e) && W(e.children)
        }))
      }

      function $(e, t) {
        void 0 === t && (t = {}), t = (0, o.__assign)({
          shouldParseSkeletons: !0,
          requiresOtherClause: !0
        }, t);
        var r = new X(e, t).parse();
        if (r.err) {
          var n = SyntaxError(l[r.err.kind]);
          throw n.location = r.err.location, n.originalMessage = r.err.message, n
        }
        return (null == t ? void 0 : t.captureLocation) || W(r.val), r.val
      }
    },
    75305: (e, t, r) => {
      r.d(t, {
        e: () => s
      });
      var l = r(78345),
        n = r(39891),
        a = r(15751),
        o = r(88622),
        i = r(33527);

      function s(e, t, r) {
        let {
          isDisabled: s = !1,
          isReadOnly: c = !1,
          value: d,
          name: u,
          children: h,
          "aria-label": f,
          "aria-labelledby": v,
          validationState: p = "valid",
          isInvalid: g
        } = e, {
          pressProps: w,
          isPressed: m
        } = (0, o.d)({
          isDisabled: s
        }), {
          pressProps: x,
          isPressed: b
        } = (0, o.d)({
          onPress() {
            var e;
            t.toggle(), null === (e = r.current) || void 0 === e || e.focus()
          },
          isDisabled: s || c
        }), {
          focusableProps: j
        } = (0, i.Wc)(e, r), y = (0, l.v)(w, j), R = (0, n.$)(e, {
          labelable: !0
        });
        return (0, a.F)(r, t.isSelected, t.setSelected), {
          labelProps: (0, l.v)(x, {
            onClick: e => e.preventDefault()
          }),
          inputProps: (0, l.v)(R, {
            "aria-invalid": g || "invalid" === p || void 0,
            "aria-errormessage": e["aria-errormessage"],
            "aria-controls": e["aria-controls"],
            "aria-readonly": c || void 0,
            onChange: e => {
              e.stopPropagation(), t.setSelected(e.target.checked)
            },
            disabled: s,
            ...null == d ? {} : {
              value: d
            },
            name: u,
            type: "checkbox",
            ...y
          }),
          isSelected: t.isSelected,
          isPressed: m || b,
          isDisabled: s,
          isReadOnly: c,
          isInvalid: g || "invalid" === p
        }
      }
    },
    75463: (e, t, r) => {
      r.d(t, {
        Nf: () => n
      });
      let l = !1;

      function n() {
        return l
      }
    },
    75754: (e, t, r) => {
      e.exports = r(82886)
    },
    76191: (e, t, r) => {
      r.d(t, {
        e: () => v,
        r: () => a
      });
      var l = r(91299),
        n = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function a(e) {
        if (0 === e.length) throw new Error("Number skeleton cannot be empty");
        for (var t = [], r = 0, l = e.split(n).filter((function(e) {
            return e.length > 0
          })); r < l.length; r++) {
          var a = l[r].split("/");
          if (0 === a.length) throw new Error("Invalid number skeleton");
          for (var o = a[0], i = a.slice(1), s = 0, c = i; s < c.length; s++)
            if (0 === c[s].length) throw new Error("Invalid number skeleton");
          t.push({
            stem: o,
            options: i
          })
        }
        return t
      }
      var o = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        i = /^(@+)?(\+|#+)?[rs]?$/g,
        s = /(\*)(0+)|(#+)(0+)|(0+)/g,
        c = /^(0+)$/;

      function d(e) {
        var t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(i, (function(e, r, l) {
          return "string" != typeof l ? (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length) : "+" === l ? t.minimumSignificantDigits = r.length : "#" === r[0] ? t.maximumSignificantDigits = r.length : (t.minimumSignificantDigits = r.length, t.maximumSignificantDigits = r.length + ("string" == typeof l ? l.length : 0)), ""
        })), t
      }

      function u(e) {
        switch (e) {
          case "sign-auto":
            return {
              signDisplay: "auto"
            };
          case "sign-accounting":
          case "()":
            return {
              currencySign: "accounting"
            };
          case "sign-always":
          case "+!":
            return {
              signDisplay: "always"
            };
          case "sign-accounting-always":
          case "()!":
            return {
              signDisplay: "always", currencySign: "accounting"
            };
          case "sign-except-zero":
          case "+?":
            return {
              signDisplay: "exceptZero"
            };
          case "sign-accounting-except-zero":
          case "()?":
            return {
              signDisplay: "exceptZero", currencySign: "accounting"
            };
          case "sign-never":
          case "+_":
            return {
              signDisplay: "never"
            }
        }
      }

      function h(e) {
        var t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          var r = e.slice(0, 2);
          if ("+!" === r ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === r && (t.signDisplay = "exceptZero", e = e.slice(2)), !c.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function f(e) {
        return u(e) || {}
      }

      function v(e) {
        for (var t = {}, r = 0, n = e; r < n.length; r++) {
          var a = n[r];
          switch (a.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = a.options[0];
              continue;
            case "group-off":
            case ",_":
              t.useGrouping = !1;
              continue;
            case "precision-integer":
            case ".":
              t.maximumFractionDigits = 0;
              continue;
            case "measure-unit":
            case "unit":
              t.style = "unit", t.unit = a.options[0].replace(/^(.*?)-/, "");
              continue;
            case "compact-short":
            case "K":
              t.notation = "compact", t.compactDisplay = "short";
              continue;
            case "compact-long":
            case "KK":
              t.notation = "compact", t.compactDisplay = "long";
              continue;
            case "scientific":
              t = (0, l.__assign)((0, l.__assign)((0, l.__assign)({}, t), {
                notation: "scientific"
              }), a.options.reduce((function(e, t) {
                return (0, l.__assign)((0, l.__assign)({}, e), f(t))
              }), {}));
              continue;
            case "engineering":
              t = (0, l.__assign)((0, l.__assign)((0, l.__assign)({}, t), {
                notation: "engineering"
              }), a.options.reduce((function(e, t) {
                return (0, l.__assign)((0, l.__assign)({}, e), f(t))
              }), {}));
              continue;
            case "notation-simple":
              t.notation = "standard";
              continue;
            case "unit-width-narrow":
              t.currencyDisplay = "narrowSymbol", t.unitDisplay = "narrow";
              continue;
            case "unit-width-short":
              t.currencyDisplay = "code", t.unitDisplay = "short";
              continue;
            case "unit-width-full-name":
              t.currencyDisplay = "name", t.unitDisplay = "long";
              continue;
            case "unit-width-iso-code":
              t.currencyDisplay = "symbol";
              continue;
            case "scale":
              t.scale = parseFloat(a.options[0]);
              continue;
            case "rounding-mode-floor":
              t.roundingMode = "floor";
              continue;
            case "rounding-mode-ceiling":
              t.roundingMode = "ceil";
              continue;
            case "rounding-mode-down":
              t.roundingMode = "trunc";
              continue;
            case "rounding-mode-up":
              t.roundingMode = "expand";
              continue;
            case "rounding-mode-half-even":
              t.roundingMode = "halfEven";
              continue;
            case "rounding-mode-half-down":
              t.roundingMode = "halfTrunc";
              continue;
            case "rounding-mode-half-up":
              t.roundingMode = "halfExpand";
              continue;
            case "integer-width":
              if (a.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              a.options[0].replace(s, (function(e, r, l, n, a, o) {
                if (r) t.minimumIntegerDigits = l.length;
                else {
                  if (n && a) throw new Error("We currently do not support maximum integer digits");
                  if (o) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              }));
              continue
          }
          if (c.test(a.stem)) t.minimumIntegerDigits = a.stem.length;
          else if (o.test(a.stem)) {
            if (a.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            a.stem.replace(o, (function(e, r, l, n, a, o) {
              return "*" === l ? t.minimumFractionDigits = r.length : n && "#" === n[0] ? t.maximumFractionDigits = n.length : a && o ? (t.minimumFractionDigits = a.length, t.maximumFractionDigits = a.length + o.length) : (t.minimumFractionDigits = r.length, t.maximumFractionDigits = r.length), ""
            }));
            var v = a.options[0];
            "w" === v ? t = (0, l.__assign)((0, l.__assign)({}, t), {
              trailingZeroDisplay: "stripIfInteger"
            }) : v && (t = (0, l.__assign)((0, l.__assign)({}, t), d(v)))
          } else if (i.test(a.stem)) t = (0, l.__assign)((0, l.__assign)({}, t), d(a.stem));
          else {
            var p = u(a.stem);
            p && (t = (0, l.__assign)((0, l.__assign)({}, t), p));
            var g = h(a.stem);
            g && (t = (0, l.__assign)((0, l.__assign)({}, t), g))
          }
        }
        return t
      }
    },
    77425: (e, t, r) => {
      r.d(t, {
        v: () => o
      });
      let l = new Map,
        n = new Set;

      function a() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = r => {
          if (!e(r) || !r.target) return;
          let a = l.get(r.target);
          if (a && (a.delete(r.propertyName), 0 === a.size && (r.target.removeEventListener("transitioncancel", t), l.delete(r.target)), 0 === l.size)) {
            for (let e of n) e();
            n.clear()
          }
        };
        document.body.addEventListener("transitionrun", (r => {
          if (!e(r) || !r.target) return;
          let n = l.get(r.target);
          n || (n = new Set, l.set(r.target, n), r.target.addEventListener("transitioncancel", t, {
            once: !0
          })), n.add(r.propertyName)
        })), document.body.addEventListener("transitionend", t)
      }

      function o(e) {
        requestAnimationFrame((() => {
          0 === l.size ? e() : n.add(e)
        }))
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a))
    },
    78345: (e, t, r) => {
      r.d(t, {
        v: () => o
      });
      var l = r(71734),
        n = r(45665),
        a = r(5060);

      function o(...e) {
        let t = {
          ...e[0]
        };
        for (let r = 1; r < e.length; r++) {
          let o = e[r];
          for (let e in o) {
            let r = t[e],
              i = o[e];
            "function" == typeof r && "function" == typeof i && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = (0, l.c)(r, i) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof r || "string" != typeof i ? "id" === e && r && i ? t.id = (0, n.Tw)(r, i) : t[e] = void 0 !== i ? i : r : t[e] = (0, a.A)(r, i)
          }
        }
        return t
      }
    },
    79623: (e, t, r) => {
      r.d(t, {
        Fe: () => c,
        _h: () => d,
        rd: () => i,
        sU: () => s
      });
      var l = r(97724),
        n = r(35362),
        a = r(71127);
      const o = (0, a.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let r = document.createElement("a");
              r.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (r.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (r.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (r.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (r.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (r.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(r), t(r), e.removeChild(r)
            }
          }(e, (e => c(e, t)))
        },
        useHref: e => e
      });

      function i() {
        return (0, a.useContext)(o)
      }

      function s(e, t) {
        let r = e.getAttribute("target");
        return !(r && "_self" !== r || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
      }

      function c(e, t, r = !0) {
        var a, o;
        let {
          metaKey: i,
          ctrlKey: s,
          altKey: d,
          shiftKey: u
        } = t;
        (0, n.gm)() && (null === (o = window.event) || void 0 === o || null === (a = o.type) || void 0 === a ? void 0 : a.startsWith("key")) && "_blank" === e.target && ((0, n.cX)() ? i = !0 : s = !0);
        let h = (0, n.Tc)() && (0, n.cX)() && !(0, n.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: i,
          ctrlKey: s,
          altKey: d,
          shiftKey: u
        }) : new MouseEvent("click", {
          metaKey: i,
          ctrlKey: s,
          altKey: d,
          shiftKey: u,
          bubbles: !0,
          cancelable: !0
        });
        c.isOpening = r, (0, l.e)(e), e.dispatchEvent(h), c.isOpening = !1
      }

      function d(e) {
        var t;
        const r = i().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? r : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }
      c.isOpening = !1
    },
    79680: (e, t, r) => {
      r.d(t, {
        CS: () => Ur,
        $W: () => Pt,
        n$: () => At,
        zh: () => Rr,
        U2: () => Lr,
        pn: () => Cr
      });
      var l = x(),
        n = e => p(e, l),
        a = x();
      n.write = e => p(e, a);
      var o = x();
      n.onStart = e => p(e, o);
      var i = x();
      n.onFrame = e => p(e, i);
      var s = x();
      n.onFinish = e => p(e, s);
      var c = [];
      n.setTimeout = (e, t) => {
        const r = n.now() + t,
          l = () => {
            const e = c.findIndex((e => e.cancel == l));
            ~e && c.splice(e, 1), f -= ~e ? 1 : 0
          },
          a = {
            time: r,
            handler: e,
            cancel: l
          };
        return c.splice(d(r), 0, a), f += 1, g(), a
      };
      var d = e => ~(~c.findIndex((t => t.time > e)) || ~c.length);
      n.cancel = e => {
        o.delete(e), i.delete(e), s.delete(e), l.delete(e), a.delete(e)
      }, n.sync = e => {
        v = !0, n.batchedUpdates(e), v = !1
      }, n.throttle = e => {
        let t;

        function r() {
          try {
            e(...t)
          } finally {
            t = null
          }
        }

        function l(...e) {
          t = e, n.onStart(r)
        }
        return l.handler = e, l.cancel = () => {
          o.delete(r), t = null
        }, l
      };
      var u = "undefined" != typeof window ? window.requestAnimationFrame : () => {};
      n.use = e => u = e, n.now = "undefined" != typeof performance ? () => performance.now() : Date.now, n.batchedUpdates = e => e(), n.catch = console.error, n.frameLoop = "always", n.advance = () => {
        "demand" !== n.frameLoop ? console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand") : m()
      };
      var h = -1,
        f = 0,
        v = !1;

      function p(e, t) {
        v ? (t.delete(e), e(0)) : (t.add(e), g())
      }

      function g() {
        h < 0 && (h = 0, "demand" !== n.frameLoop && u(w))
      }

      function w() {
        ~h && (u(w), n.batchedUpdates(m))
      }

      function m() {
        const e = h;
        h = n.now();
        const t = d(h);
        t && (b(c.splice(0, t), (e => e.handler())), f -= t), f ? (o.flush(), l.flush(e ? Math.min(64, h - e) : 16.667), i.flush(), a.flush(), s.flush()) : h = -1
      }

      function x() {
        let e = new Set,
          t = e;
        return {
          add(r) {
            f += t != e || e.has(r) ? 0 : 1, e.add(r)
          },
          delete: r => (f -= t == e && e.has(r) ? 1 : 0, e.delete(r)),
          flush(r) {
            t.size && (e = new Set, f -= t.size, b(t, (t => t(r) && e.add(t))), f += e.size, t = e)
          }
        }
      }

      function b(e, t) {
        e.forEach((e => {
          try {
            t(e)
          } catch (e) {
            n.catch(e)
          }
        }))
      }
      var j = r(71127),
        y = Object.defineProperty,
        R = {};

      function M() {}((e, t) => {
        for (var r in t) y(e, r, {
          get: t[r],
          enumerable: !0
        })
      })(R, {
        assign: () => N,
        colors: () => T,
        createStringInterpolator: () => S,
        skipAnimation: () => D,
        to: () => _,
        willAdvance: () => B
      });
      var L = {
        arr: Array.isArray,
        obj: e => !!e && "Object" === e.constructor.name,
        fun: e => "function" == typeof e,
        str: e => "string" == typeof e,
        num: e => "number" == typeof e,
        und: e => void 0 === e
      };

      function C(e, t) {
        if (L.arr(e)) {
          if (!L.arr(t) || e.length !== t.length) return !1;
          for (let r = 0; r < e.length; r++)
            if (e[r] !== t[r]) return !1;
          return !0
        }
        return e === t
      }
      var E = (e, t) => e.forEach(t);

      function A(e, t, r) {
        if (L.arr(e))
          for (let l = 0; l < e.length; l++) t.call(r, e[l], `${l}`);
        else
          for (const l in e) e.hasOwnProperty(l) && t.call(r, e[l], l)
      }
      var P = e => L.und(e) ? [] : L.arr(e) ? e : [e];

      function I(e, t) {
        if (e.size) {
          const r = Array.from(e);
          e.clear(), E(r, t)
        }
      }
      var S, _, z = (e, ...t) => I(e, (e => e(...t))),
        H = () => "undefined" == typeof window || !window.navigator || /ServerSideRendering|^Deno\//.test(window.navigator.userAgent),
        T = null,
        D = !1,
        B = M,
        N = e => {
          e.to && (_ = e.to), e.now && (n.now = e.now), void 0 !== e.colors && (T = e.colors), null != e.skipAnimation && (D = e.skipAnimation), e.createStringInterpolator && (S = e.createStringInterpolator), e.requestAnimationFrame && n.use(e.requestAnimationFrame), e.batchedUpdates && (n.batchedUpdates = e.batchedUpdates), e.willAdvance && (B = e.willAdvance), e.frameLoop && (n.frameLoop = e.frameLoop)
        },
        k = new Set,
        V = [],
        O = [],
        G = 0,
        F = {
          get idle() {
            return !k.size && !V.length
          },
          start(e) {
            G > e.priority ? (k.add(e), n.onStart(X)) : (q(e), n(K))
          },
          advance: K,
          sort(e) {
            if (G) n.onFrame((() => F.sort(e)));
            else {
              const t = V.indexOf(e);
              ~t && (V.splice(t, 1), U(e))
            }
          },
          clear() {
            V = [], k.clear()
          }
        };

      function X() {
        k.forEach(q), k.clear(), n(K)
      }

      function q(e) {
        V.includes(e) || U(e)
      }

      function U(e) {
        V.splice(function(t) {
          const r = t.findIndex((t => t.priority > e.priority));
          return r < 0 ? t.length : r
        }(V), 0, e)
      }

      function K(e) {
        const t = O;
        for (let r = 0; r < V.length; r++) {
          const l = V[r];
          G = l.priority, l.idle || (B(l), l.advance(e), l.idle || t.push(l))
        }
        return G = 0, (O = V).length = 0, (V = t).length > 0
      }
      var W = "[-+]?\\d*\\.?\\d+",
        $ = W + "%";

      function Y(...e) {
        return "\\(\\s*(" + e.join(")\\s*,\\s*(") + ")\\s*\\)"
      }
      var Z = new RegExp("rgb" + Y(W, W, W)),
        Q = new RegExp("rgba" + Y(W, W, W, W)),
        J = new RegExp("hsl" + Y(W, $, $)),
        ee = new RegExp("hsla" + Y(W, $, $, W)),
        te = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        re = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        le = /^#([0-9a-fA-F]{6})$/,
        ne = /^#([0-9a-fA-F]{8})$/;

      function ae(e, t, r) {
        return r < 0 && (r += 1), r > 1 && (r -= 1), r < 1 / 6 ? e + 6 * (t - e) * r : r < .5 ? t : r < 2 / 3 ? e + (t - e) * (2 / 3 - r) * 6 : e
      }

      function oe(e, t, r) {
        const l = r < .5 ? r * (1 + t) : r + t - r * t,
          n = 2 * r - l,
          a = ae(n, l, e + 1 / 3),
          o = ae(n, l, e),
          i = ae(n, l, e - 1 / 3);
        return Math.round(255 * a) << 24 | Math.round(255 * o) << 16 | Math.round(255 * i) << 8
      }

      function ie(e) {
        const t = parseInt(e, 10);
        return t < 0 ? 0 : t > 255 ? 255 : t
      }

      function se(e) {
        return (parseFloat(e) % 360 + 360) % 360 / 360
      }

      function ce(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 1 ? 255 : Math.round(255 * t)
      }

      function de(e) {
        const t = parseFloat(e);
        return t < 0 ? 0 : t > 100 ? 1 : t / 100
      }

      function ue(e) {
        let t = function(e) {
          let t;
          return "number" == typeof e ? e >>> 0 === e && e >= 0 && e <= 4294967295 ? e : null : (t = le.exec(e)) ? parseInt(t[1] + "ff", 16) >>> 0 : T && void 0 !== T[e] ? T[e] : (t = Z.exec(e)) ? (ie(t[1]) << 24 | ie(t[2]) << 16 | ie(t[3]) << 8 | 255) >>> 0 : (t = Q.exec(e)) ? (ie(t[1]) << 24 | ie(t[2]) << 16 | ie(t[3]) << 8 | ce(t[4])) >>> 0 : (t = te.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + "ff", 16) >>> 0 : (t = ne.exec(e)) ? parseInt(t[1], 16) >>> 0 : (t = re.exec(e)) ? parseInt(t[1] + t[1] + t[2] + t[2] + t[3] + t[3] + t[4] + t[4], 16) >>> 0 : (t = J.exec(e)) ? (255 | oe(se(t[1]), de(t[2]), de(t[3]))) >>> 0 : (t = ee.exec(e)) ? (oe(se(t[1]), de(t[2]), de(t[3])) | ce(t[4])) >>> 0 : null
        }(e);
        return null === t ? e : (t = t || 0, `rgba(${(4278190080&t)>>>24}, ${(16711680&t)>>>16}, ${(65280&t)>>>8}, ${(255&t)/255})`)
      }
      var he = (e, t, r) => {
          if (L.fun(e)) return e;
          if (L.arr(e)) return he({
            range: e,
            output: t,
            extrapolate: r
          });
          if (L.str(e.output[0])) return S(e);
          const l = e,
            n = l.output,
            a = l.range || [0, 1],
            o = l.extrapolateLeft || l.extrapolate || "extend",
            i = l.extrapolateRight || l.extrapolate || "extend",
            s = l.easing || (e => e);
          return e => {
            const t = function(e, t) {
              for (var r = 1; r < t.length - 1 && !(t[r] >= e); ++r);
              return r - 1
            }(e, a);
            return function(e, t, r, l, n, a, o, i, s) {
              let c = s ? s(e) : e;
              if (c < t) {
                if ("identity" === o) return c;
                "clamp" === o && (c = t)
              }
              if (c > r) {
                if ("identity" === i) return c;
                "clamp" === i && (c = r)
              }
              return l === n ? l : t === r ? e <= t ? l : n : (t === -1 / 0 ? c = -c : r === 1 / 0 ? c -= t : c = (c - t) / (r - t), c = a(c), l === -1 / 0 ? c = -c : n === 1 / 0 ? c += l : c = c * (n - l) + l, c)
            }(e, a[t], a[t + 1], n[t], n[t + 1], s, o, i, l.map)
          }
        },
        fe = 1.70158,
        ve = 1.525 * fe,
        pe = fe + 1,
        ge = 2 * Math.PI / 3,
        we = 2 * Math.PI / 4.5,
        me = e => {
          const t = 7.5625,
            r = 2.75;
          return e < 1 / r ? t * e * e : e < 2 / r ? t * (e -= 1.5 / r) * e + .75 : e < 2.5 / r ? t * (e -= 2.25 / r) * e + .9375 : t * (e -= 2.625 / r) * e + .984375
        },
        xe = {
          linear: e => e,
          easeInQuad: e => e * e,
          easeOutQuad: e => 1 - (1 - e) * (1 - e),
          easeInOutQuad: e => e < .5 ? 2 * e * e : 1 - Math.pow(-2 * e + 2, 2) / 2,
          easeInCubic: e => e * e * e,
          easeOutCubic: e => 1 - Math.pow(1 - e, 3),
          easeInOutCubic: e => e < .5 ? 4 * e * e * e : 1 - Math.pow(-2 * e + 2, 3) / 2,
          easeInQuart: e => e * e * e * e,
          easeOutQuart: e => 1 - Math.pow(1 - e, 4),
          easeInOutQuart: e => e < .5 ? 8 * e * e * e * e : 1 - Math.pow(-2 * e + 2, 4) / 2,
          easeInQuint: e => e * e * e * e * e,
          easeOutQuint: e => 1 - Math.pow(1 - e, 5),
          easeInOutQuint: e => e < .5 ? 16 * e * e * e * e * e : 1 - Math.pow(-2 * e + 2, 5) / 2,
          easeInSine: e => 1 - Math.cos(e * Math.PI / 2),
          easeOutSine: e => Math.sin(e * Math.PI / 2),
          easeInOutSine: e => -(Math.cos(Math.PI * e) - 1) / 2,
          easeInExpo: e => 0 === e ? 0 : Math.pow(2, 10 * e - 10),
          easeOutExpo: e => 1 === e ? 1 : 1 - Math.pow(2, -10 * e),
          easeInOutExpo: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? Math.pow(2, 20 * e - 10) / 2 : (2 - Math.pow(2, -20 * e + 10)) / 2,
          easeInCirc: e => 1 - Math.sqrt(1 - Math.pow(e, 2)),
          easeOutCirc: e => Math.sqrt(1 - Math.pow(e - 1, 2)),
          easeInOutCirc: e => e < .5 ? (1 - Math.sqrt(1 - Math.pow(2 * e, 2))) / 2 : (Math.sqrt(1 - Math.pow(-2 * e + 2, 2)) + 1) / 2,
          easeInBack: e => pe * e * e * e - fe * e * e,
          easeOutBack: e => 1 + pe * Math.pow(e - 1, 3) + fe * Math.pow(e - 1, 2),
          easeInOutBack: e => e < .5 ? Math.pow(2 * e, 2) * (7.189819 * e - ve) / 2 : (Math.pow(2 * e - 2, 2) * ((ve + 1) * (2 * e - 2) + ve) + 2) / 2,
          easeInElastic: e => 0 === e ? 0 : 1 === e ? 1 : -Math.pow(2, 10 * e - 10) * Math.sin((10 * e - 10.75) * ge),
          easeOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : Math.pow(2, -10 * e) * Math.sin((10 * e - .75) * ge) + 1,
          easeInOutElastic: e => 0 === e ? 0 : 1 === e ? 1 : e < .5 ? -Math.pow(2, 20 * e - 10) * Math.sin((20 * e - 11.125) * we) / 2 : Math.pow(2, -20 * e + 10) * Math.sin((20 * e - 11.125) * we) / 2 + 1,
          easeInBounce: e => 1 - me(1 - e),
          easeOutBounce: me,
          easeInOutBounce: e => e < .5 ? (1 - me(1 - 2 * e)) / 2 : (1 + me(2 * e - 1)) / 2,
          steps: (e, t = "end") => r => {
            const l = (r = "end" === t ? Math.min(r, .999) : Math.max(r, .001)) * e;
            return n = ("end" === t ? Math.floor(l) : Math.ceil(l)) / e, Math.min(Math.max(n, 0), 1);
            var n
          }
        },
        be = Symbol.for("FluidValue.get"),
        je = Symbol.for("FluidValue.observers"),
        ye = e => Boolean(e && e[be]),
        Re = e => e && e[be] ? e[be]() : e,
        Me = e => e[je] || null;

      function Le(e, t) {
        const r = e[je];
        r && r.forEach((e => {
          ! function(e, t) {
            e.eventObserved ? e.eventObserved(t) : e(t)
          }(e, t)
        }))
      }
      var Ce = class {
          constructor(e) {
            if (!e && !(e = this.get)) throw Error("Unknown getter");
            Ee(this, e)
          }
        },
        Ee = (e, t) => Se(e, be, t);

      function Ae(e, t) {
        if (e[be]) {
          let r = e[je];
          r || Se(e, je, r = new Set), r.has(t) || (r.add(t), e.observerAdded && e.observerAdded(r.size, t))
        }
        return t
      }

      function Pe(e, t) {
        const r = e[je];
        if (r && r.has(t)) {
          const l = r.size - 1;
          l ? r.delete(t) : e[je] = null, e.observerRemoved && e.observerRemoved(l, t)
        }
      }
      var Ie, Se = (e, t, r) => Object.defineProperty(e, t, {
          value: r,
          writable: !0,
          configurable: !0
        }),
        _e = /[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,
        ze = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,
        He = new RegExp(`(${_e.source})(%|[a-z]+)`, "i"),
        Te = /rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,
        De = /var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,
        Be = e => {
          const [t, r] = Ne(e);
          if (!t || H()) return e;
          const l = window.getComputedStyle(document.documentElement).getPropertyValue(t);
          if (l) return l.trim();
          if (r && r.startsWith("--")) {
            return window.getComputedStyle(document.documentElement).getPropertyValue(r) || e
          }
          return r && De.test(r) ? Be(r) : r || e
        },
        Ne = e => {
          const t = De.exec(e);
          if (!t) return [, ];
          const [, r, l] = t;
          return [r, l]
        },
        ke = (e, t, r, l, n) => `rgba(${Math.round(t)}, ${Math.round(r)}, ${Math.round(l)}, ${n})`,
        Ve = e => {
          Ie || (Ie = T ? new RegExp(`(${Object.keys(T).join("|")})(?!\\w)`, "g") : /^\b$/);
          const t = e.output.map((e => Re(e).replace(De, Be).replace(ze, ue).replace(Ie, ue))),
            r = t.map((e => e.match(_e).map(Number))),
            l = r[0].map(((e, t) => r.map((e => {
              if (!(t in e)) throw Error('The arity of each "output" value must be equal');
              return e[t]
            })))).map((t => he({
              ...e,
              output: t
            })));
          return e => {
            const r = !He.test(t[0]) && t.find((e => He.test(e)))?.replace(_e, "");
            let n = 0;
            return t[0].replace(_e, (() => `${l[n++](e)}${r||""}`)).replace(Te, ke)
          }
        },
        Oe = "react-spring: ",
        Ge = e => {
          const t = e;
          let r = !1;
          if ("function" != typeof t) throw new TypeError(`${Oe}once requires a function parameter`);
          return (...e) => {
            r || (t(...e), r = !0)
          }
        },
        Fe = Ge(console.warn),
        Xe = Ge(console.warn);

      function qe(e) {
        return L.str(e) && ("#" == e[0] || /\d/.test(e) || !H() && De.test(e) || e in (T || {}))
      }
      var Ue = H() ? j.useEffect : j.useLayoutEffect,
        Ke = () => {
          const e = (0, j.useRef)(!1);
          return Ue((() => (e.current = !0, () => {
            e.current = !1
          })), []), e
        };

      function We() {
        const e = (0, j.useState)()[1],
          t = Ke();
        return () => {
          t.current && e(Math.random())
        }
      }
      var $e = e => (0, j.useEffect)(e, Ye),
        Ye = [];

      function Ze(e) {
        const t = (0, j.useRef)();
        return (0, j.useEffect)((() => {
          t.current = e
        })), t.current
      }
      var Qe = Symbol.for("Animated:node"),
        Je = e => e && e[Qe],
        et = (e, t) => {
          return r = e, l = Qe, n = t, Object.defineProperty(r, l, {
            value: n,
            writable: !0,
            configurable: !0
          });
          var r, l, n
        },
        tt = e => e && e[Qe] && e[Qe].getPayload(),
        rt = class {
          constructor() {
            et(this, this)
          }
          getPayload() {
            return this.payload || []
          }
        },
        lt = class extends rt {
          constructor(e) {
            super(), this._value = e, this.done = !0, this.durationProgress = 0, L.num(this._value) && (this.lastPosition = this._value)
          }
          static create(e) {
            return new lt(e)
          }
          getPayload() {
            return [this]
          }
          getValue() {
            return this._value
          }
          setValue(e, t) {
            return L.num(e) && (this.lastPosition = e, t && (e = Math.round(e / t) * t, this.done && (this.lastPosition = e))), this._value !== e && (this._value = e, !0)
          }
          reset() {
            const {
              done: e
            } = this;
            this.done = !1, L.num(this._value) && (this.elapsedTime = 0, this.durationProgress = 0, this.lastPosition = this._value, e && (this.lastVelocity = null), this.v0 = null)
          }
        },
        nt = class extends lt {
          constructor(e) {
            super(0), this._string = null, this._toString = he({
              output: [e, e]
            })
          }
          static create(e) {
            return new nt(e)
          }
          getValue() {
            const e = this._string;
            return null == e ? this._string = this._toString(this._value) : e
          }
          setValue(e) {
            if (L.str(e)) {
              if (e == this._string) return !1;
              this._string = e, this._value = 1
            } else {
              if (!super.setValue(e)) return !1;
              this._string = null
            }
            return !0
          }
          reset(e) {
            e && (this._toString = he({
              output: [this.getValue(), e]
            })), this._value = 0, super.reset()
          }
        },
        at = {
          dependencies: null
        },
        ot = class extends rt {
          constructor(e) {
            super(), this.source = e, this.setValue(e)
          }
          getValue(e) {
            const t = {};
            return A(this.source, ((r, l) => {
              var n;
              (n = r) && n[Qe] === n ? t[l] = r.getValue(e) : ye(r) ? t[l] = Re(r) : e || (t[l] = r)
            })), t
          }
          setValue(e) {
            this.source = e, this.payload = this._makePayload(e)
          }
          reset() {
            this.payload && E(this.payload, (e => e.reset()))
          }
          _makePayload(e) {
            if (e) {
              const t = new Set;
              return A(e, this._addToPayload, t), Array.from(t)
            }
          }
          _addToPayload(e) {
            at.dependencies && ye(e) && at.dependencies.add(e);
            const t = tt(e);
            t && E(t, (e => this.add(e)))
          }
        },
        it = class extends ot {
          constructor(e) {
            super(e)
          }
          static create(e) {
            return new it(e)
          }
          getValue() {
            return this.source.map((e => e.getValue()))
          }
          setValue(e) {
            const t = this.getPayload();
            return e.length == t.length ? t.map(((t, r) => t.setValue(e[r]))).some(Boolean) : (super.setValue(e.map(st)), !0)
          }
        };

      function st(e) {
        return (qe(e) ? nt : lt).create(e)
      }

      function ct(e) {
        const t = Je(e);
        return t ? t.constructor : L.arr(e) ? it : qe(e) ? nt : lt
      }
      var dt = (e, t) => {
          const r = !L.fun(e) || e.prototype && e.prototype.isReactComponent;
          return (0, j.forwardRef)(((l, a) => {
            const o = (0, j.useRef)(null),
              i = r && (0, j.useCallback)((e => {
                o.current = function(e, t) {
                  return e && (L.fun(e) ? e(t) : e.current = t), t
                }(a, e)
              }), [a]),
              [s, c] = function(e, t) {
                const r = new Set;
                return at.dependencies = r, e.style && (e = {
                  ...e,
                  style: t.createAnimatedStyle(e.style)
                }), e = new ot(e), at.dependencies = null, [e, r]
              }(l, t),
              d = We(),
              u = () => {
                const e = o.current;
                r && !e || !1 === (!!e && t.applyAnimatedValues(e, s.getValue(!0))) && d()
              },
              h = new ut(u, c),
              f = (0, j.useRef)();
            Ue((() => (f.current = h, E(c, (e => Ae(e, h))), () => {
              f.current && (E(f.current.deps, (e => Pe(e, f.current))), n.cancel(f.current.update))
            }))), (0, j.useEffect)(u, []), $e((() => () => {
              const e = f.current;
              E(e.deps, (t => Pe(t, e)))
            }));
            const v = t.getComponentProps(s.getValue());
            return j.createElement(e, {
              ...v,
              ref: i
            })
          }))
        },
        ut = class {
          constructor(e, t) {
            this.update = e, this.deps = t
          }
          eventObserved(e) {
            "change" == e.type && n.write(this.update)
          }
        },
        ht = Symbol.for("AnimatedComponent"),
        ft = e => L.str(e) ? e : e && L.str(e.displayName) ? e.displayName : L.fun(e) && e.name || null;

      function vt(e, ...t) {
        return L.fun(e) ? e(...t) : e
      }
      var pt = (e, t) => !0 === e || !!(t && e && (L.fun(e) ? e(t) : P(e).includes(t))),
        gt = (e, t) => L.obj(e) ? t && e[t] : e,
        wt = (e, t) => !0 === e.default ? e[t] : e.default ? e.default[t] : void 0,
        mt = e => e,
        xt = (e, t = mt) => {
          let r = bt;
          e.default && !0 !== e.default && (e = e.default, r = Object.keys(e));
          const l = {};
          for (const n of r) {
            const r = t(e[n], n);
            L.und(r) || (l[n] = r)
          }
          return l
        },
        bt = ["config", "onProps", "onStart", "onChange", "onPause", "onResume", "onRest"],
        jt = {
          config: 1,
          from: 1,
          to: 1,
          ref: 1,
          loop: 1,
          reset: 1,
          pause: 1,
          cancel: 1,
          reverse: 1,
          immediate: 1,
          default: 1,
          delay: 1,
          onProps: 1,
          onStart: 1,
          onChange: 1,
          onPause: 1,
          onResume: 1,
          onRest: 1,
          onResolve: 1,
          items: 1,
          trail: 1,
          sort: 1,
          expires: 1,
          initial: 1,
          enter: 1,
          update: 1,
          leave: 1,
          children: 1,
          onDestroyed: 1,
          keys: 1,
          callId: 1,
          parentId: 1
        };

      function yt(e) {
        const t = function(e) {
          const t = {};
          let r = 0;
          if (A(e, ((e, l) => {
              jt[l] || (t[l] = e, r++)
            })), r) return t
        }(e);
        if (t) {
          const r = {
            to: t
          };
          return A(e, ((e, l) => l in t || (r[l] = e))), r
        }
        return {
          ...e
        }
      }

      function Rt(e) {
        return e = Re(e), L.arr(e) ? e.map(Rt) : qe(e) ? R.createStringInterpolator({
          range: [0, 1],
          output: [e, e]
        })(1) : e
      }

      function Mt(e) {
        for (const t in e) return !0;
        return !1
      }

      function Lt(e) {
        return L.fun(e) || L.arr(e) && L.obj(e[0])
      }

      function Ct(e, t) {
        e.ref?.delete(e), t?.delete(e)
      }

      function Et(e, t) {
        t && e.ref !== t && (e.ref?.delete(e), t.add(e), e.ref = t)
      }

      function At(e, t, r = 1e3) {
        Ue((() => {
          if (t) {
            let l = 0;
            E(e, ((e, n) => {
              const a = e.current;
              if (a.length) {
                let o = r * t[n];
                isNaN(o) ? o = l : l = o, E(a, (e => {
                  E(e.queue, (e => {
                    const t = e.delay;
                    e.delay = e => o + vt(t || 0, e)
                  }))
                })), e.start()
              }
            }))
          } else {
            let t = Promise.resolve();
            E(e, (e => {
              const r = e.current;
              if (r.length) {
                const l = r.map((e => {
                  const t = e.queue;
                  return e.queue = [], t
                }));
                t = t.then((() => (E(r, ((e, t) => E(l[t] || [], (t => e.queue.push(t))))), Promise.all(e.start()))))
              }
            }))
          }
        }))
      }
      var Pt = {
          default: {
            tension: 170,
            friction: 26
          },
          gentle: {
            tension: 120,
            friction: 14
          },
          wobbly: {
            tension: 180,
            friction: 12
          },
          stiff: {
            tension: 210,
            friction: 20
          },
          slow: {
            tension: 280,
            friction: 60
          },
          molasses: {
            tension: 280,
            friction: 120
          }
        },
        It = {
          ...Pt.default,
          mass: 1,
          damping: 1,
          easing: xe.linear,
          clamp: !1
        },
        St = class {
          constructor() {
            this.velocity = 0, Object.assign(this, It)
          }
        };

      function _t(e, t) {
        if (L.und(t.decay)) {
          const r = !L.und(t.tension) || !L.und(t.friction);
          !r && L.und(t.frequency) && L.und(t.damping) && L.und(t.mass) || (e.duration = void 0, e.decay = void 0), r && (e.frequency = void 0)
        } else e.duration = void 0
      }
      var zt = [],
        Ht = class {
          constructor() {
            this.changed = !1, this.values = zt, this.toValues = null, this.fromValues = zt, this.config = new St, this.immediate = !1
          }
        };

      function Tt(e, {
        key: t,
        props: r,
        defaultProps: l,
        state: a,
        actions: o
      }) {
        return new Promise(((i, s) => {
          let c, d, u = pt(r.cancel ?? l?.cancel, t);
          if (u) v();
          else {
            L.und(r.pause) || (a.paused = pt(r.pause, t));
            let e = l?.pause;
            !0 !== e && (e = a.paused || pt(e, t)), c = vt(r.delay || 0, t), e ? (a.resumeQueue.add(f), o.pause()) : (o.resume(), f())
          }

          function h() {
            a.resumeQueue.add(f), a.timeouts.delete(d), d.cancel(), c = d.time - n.now()
          }

          function f() {
            c > 0 && !R.skipAnimation ? (a.delayed = !0, d = n.setTimeout(v, c), a.pauseQueue.add(h), a.timeouts.add(d)) : v()
          }

          function v() {
            a.delayed && (a.delayed = !1), a.pauseQueue.delete(h), a.timeouts.delete(d), e <= (a.cancelId || 0) && (u = !0);
            try {
              o.start({
                ...r,
                callId: e,
                cancel: u
              }, i)
            } catch (e) {
              s(e)
            }
          }
        }))
      }
      var Dt = (e, t) => 1 == t.length ? t[0] : t.some((e => e.cancelled)) ? kt(e.get()) : t.every((e => e.noop)) ? Bt(e.get()) : Nt(e.get(), t.every((e => e.finished))),
        Bt = e => ({
          value: e,
          noop: !0,
          finished: !0,
          cancelled: !1
        }),
        Nt = (e, t, r = !1) => ({
          value: e,
          finished: t,
          cancelled: r
        }),
        kt = e => ({
          value: e,
          cancelled: !0,
          finished: !1
        });

      function Vt(e, t, r, l) {
        const {
          callId: a,
          parentId: o,
          onRest: i
        } = t, {
          asyncTo: s,
          promise: c
        } = r;
        return o || e !== s || t.reset ? r.promise = (async () => {
          r.asyncId = a, r.asyncTo = e;
          const d = xt(t, ((e, t) => "onRest" === t ? void 0 : e));
          let u, h;
          const f = new Promise(((e, t) => (u = e, h = t))),
            v = e => {
              const t = a <= (r.cancelId || 0) && kt(l) || a !== r.asyncId && Nt(l, !1);
              if (t) throw e.result = t, h(e), e
            },
            p = (e, t) => {
              const n = new Gt,
                o = new Ft;
              return (async () => {
                if (R.skipAnimation) throw Ot(r), o.result = Nt(l, !1), h(o), o;
                v(n);
                const i = L.obj(e) ? {
                  ...e
                } : {
                  ...t,
                  to: e
                };
                i.parentId = a, A(d, ((e, t) => {
                  L.und(i[t]) && (i[t] = e)
                }));
                const s = await l.start(i);
                return v(n), r.paused && await new Promise((e => {
                  r.resumeQueue.add(e)
                })), s
              })()
            };
          let g;
          if (R.skipAnimation) return Ot(r), Nt(l, !1);
          try {
            let t;
            t = L.arr(e) ? (async e => {
              for (const t of e) await p(t)
            })(e) : Promise.resolve(e(p, l.stop.bind(l))), await Promise.all([t.then(u), f]), g = Nt(l.get(), !0, !1)
          } catch (e) {
            if (e instanceof Gt) g = e.result;
            else {
              if (!(e instanceof Ft)) throw e;
              g = e.result
            }
          } finally {
            a == r.asyncId && (r.asyncId = o, r.asyncTo = o ? s : void 0, r.promise = o ? c : void 0)
          }
          return L.fun(i) && n.batchedUpdates((() => {
            i(g, l, l.item)
          })), g
        })() : c
      }

      function Ot(e, t) {
        I(e.timeouts, (e => e.cancel())), e.pauseQueue.clear(), e.resumeQueue.clear(), e.asyncId = e.asyncTo = e.promise = void 0, t && (e.cancelId = t)
      }
      var Gt = class extends Error {
          constructor() {
            super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise.")
          }
        },
        Ft = class extends Error {
          constructor() {
            super("SkipAnimationSignal")
          }
        },
        Xt = e => e instanceof Ut,
        qt = 1,
        Ut = class extends Ce {
          constructor() {
            super(...arguments), this.id = qt++, this._priority = 0
          }
          get priority() {
            return this._priority
          }
          set priority(e) {
            this._priority != e && (this._priority = e, this._onPriorityChange(e))
          }
          get() {
            const e = Je(this);
            return e && e.getValue()
          }
          to(...e) {
            return R.to(this, e)
          }
          interpolate(...e) {
            return Fe(`${Oe}The "interpolate" function is deprecated in v9 (use "to" instead)`), R.to(this, e)
          }
          toJSON() {
            return this.get()
          }
          observerAdded(e) {
            1 == e && this._attach()
          }
          observerRemoved(e) {
            0 == e && this._detach()
          }
          _attach() {}
          _detach() {}
          _onChange(e, t = !1) {
            Le(this, {
              type: "change",
              parent: this,
              value: e,
              idle: t
            })
          }
          _onPriorityChange(e) {
            this.idle || F.sort(this), Le(this, {
              type: "priority",
              parent: this,
              priority: e
            })
          }
        },
        Kt = Symbol.for("SpringPhase"),
        Wt = e => (1 & e[Kt]) > 0,
        $t = e => (2 & e[Kt]) > 0,
        Yt = e => (4 & e[Kt]) > 0,
        Zt = (e, t) => t ? e[Kt] |= 3 : e[Kt] &= -3,
        Qt = (e, t) => t ? e[Kt] |= 4 : e[Kt] &= -5,
        Jt = class extends Ut {
          constructor(e, t) {
            if (super(), this.animation = new Ht, this.defaultProps = {}, this._state = {
                paused: !1,
                delayed: !1,
                pauseQueue: new Set,
                resumeQueue: new Set,
                timeouts: new Set
              }, this._pendingCalls = new Set, this._lastCallId = 0, this._lastToId = 0, this._memoizedDuration = 0, !L.und(e) || !L.und(t)) {
              const r = L.obj(e) ? {
                ...e
              } : {
                ...t,
                from: e
              };
              L.und(r.default) && (r.default = !0), this.start(r)
            }
          }
          get idle() {
            return !($t(this) || this._state.asyncTo) || Yt(this)
          }
          get goal() {
            return Re(this.animation.to)
          }
          get velocity() {
            const e = Je(this);
            return e instanceof lt ? e.lastVelocity || 0 : e.getPayload().map((e => e.lastVelocity || 0))
          }
          get hasAnimated() {
            return Wt(this)
          }
          get isAnimating() {
            return $t(this)
          }
          get isPaused() {
            return Yt(this)
          }
          get isDelayed() {
            return this._state.delayed
          }
          advance(e) {
            let t = !0,
              r = !1;
            const l = this.animation;
            let {
              toValues: n
            } = l;
            const {
              config: a
            } = l, o = tt(l.to);
            !o && ye(l.to) && (n = P(Re(l.to))), l.values.forEach(((i, s) => {
              if (i.done) return;
              const c = i.constructor == nt ? 1 : o ? o[s].lastPosition : n[s];
              let d = l.immediate,
                u = c;
              if (!d) {
                if (u = i.lastPosition, a.tension <= 0) return void(i.done = !0);
                let t = i.elapsedTime += e;
                const r = l.fromValues[s],
                  n = null != i.v0 ? i.v0 : i.v0 = L.arr(a.velocity) ? a.velocity[s] : a.velocity;
                let o;
                const h = a.precision || (r == c ? .005 : Math.min(1, .001 * Math.abs(c - r)));
                if (L.und(a.duration))
                  if (a.decay) {
                    const e = !0 === a.decay ? .998 : a.decay,
                      l = Math.exp(-(1 - e) * t);
                    u = r + n / (1 - e) * (1 - l), d = Math.abs(i.lastPosition - u) <= h, o = n * l
                  } else {
                    o = null == i.lastVelocity ? n : i.lastVelocity;
                    const t = a.restVelocity || h / 10,
                      l = a.clamp ? 0 : a.bounce,
                      s = !L.und(l),
                      f = r == c ? i.v0 > 0 : r < c;
                    let v, p = !1;
                    const g = 1,
                      w = Math.ceil(e / g);
                    for (let e = 0; e < w && (v = Math.abs(o) > t, v || (d = Math.abs(c - u) <= h, !d)); ++e) s && (p = u == c || u > c == f, p && (o = -o * l, u = c)), o += (1e-6 * -a.tension * (u - c) + .001 * -a.friction * o) / a.mass * g, u += o * g
                  }
                else {
                  let l = 1;
                  a.duration > 0 && (this._memoizedDuration !== a.duration && (this._memoizedDuration = a.duration, i.durationProgress > 0 && (i.elapsedTime = a.duration * i.durationProgress, t = i.elapsedTime += e)), l = (a.progress || 0) + t / this._memoizedDuration, l = l > 1 ? 1 : l < 0 ? 0 : l, i.durationProgress = l), u = r + a.easing(l) * (c - r), o = (u - i.lastPosition) / e, d = 1 == l
                }
                i.lastVelocity = o, Number.isNaN(u) && (console.warn("Got NaN while animating:", this), d = !0)
              }
              o && !o[s].done && (d = !1), d ? i.done = !0 : t = !1, i.setValue(u, a.round) && (r = !0)
            }));
            const i = Je(this),
              s = i.getValue();
            if (t) {
              const e = Re(l.to);
              s === e && !r || a.decay ? r && a.decay && this._onChange(s) : (i.setValue(e), this._onChange(e)), this._stop()
            } else r && this._onChange(s)
          }
          set(e) {
            return n.batchedUpdates((() => {
              this._stop(), this._focus(e), this._set(e)
            })), this
          }
          pause() {
            this._update({
              pause: !0
            })
          }
          resume() {
            this._update({
              pause: !1
            })
          }
          finish() {
            if ($t(this)) {
              const {
                to: e,
                config: t
              } = this.animation;
              n.batchedUpdates((() => {
                this._onStart(), t.decay || this._set(e, !1), this._stop()
              }))
            }
            return this
          }
          update(e) {
            return (this.queue || (this.queue = [])).push(e), this
          }
          start(e, t) {
            let r;
            return L.und(e) ? (r = this.queue || [], this.queue = []) : r = [L.obj(e) ? e : {
              ...t,
              to: e
            }], Promise.all(r.map((e => this._update(e)))).then((e => Dt(this, e)))
          }
          stop(e) {
            const {
              to: t
            } = this.animation;
            return this._focus(this.get()), Ot(this._state, e && this._lastCallId), n.batchedUpdates((() => this._stop(t, e))), this
          }
          reset() {
            this._update({
              reset: !0
            })
          }
          eventObserved(e) {
            "change" == e.type ? this._start() : "priority" == e.type && (this.priority = e.priority + 1)
          }
          _prepareNode(e) {
            const t = this.key || "";
            let {
              to: r,
              from: l
            } = e;
            r = L.obj(r) ? r[t] : r, (null == r || Lt(r)) && (r = void 0), l = L.obj(l) ? l[t] : l, null == l && (l = void 0);
            const n = {
              to: r,
              from: l
            };
            return Wt(this) || (e.reverse && ([r, l] = [l, r]), l = Re(l), L.und(l) ? Je(this) || this._set(r) : this._set(l)), n
          }
          _update({
            ...e
          }, t) {
            const {
              key: r,
              defaultProps: l
            } = this;
            e.default && Object.assign(l, xt(e, ((e, t) => /^on/.test(t) ? gt(e, r) : e))), or(this, e, "onProps"), ir(this, "onProps", e, this);
            const n = this._prepareNode(e);
            if (Object.isFrozen(this)) throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");
            const a = this._state;
            return Tt(++this._lastCallId, {
              key: r,
              props: e,
              defaultProps: l,
              state: a,
              actions: {
                pause: () => {
                  Yt(this) || (Qt(this, !0), z(a.pauseQueue), ir(this, "onPause", Nt(this, er(this, this.animation.to)), this))
                },
                resume: () => {
                  Yt(this) && (Qt(this, !1), $t(this) && this._resume(), z(a.resumeQueue), ir(this, "onResume", Nt(this, er(this, this.animation.to)), this))
                },
                start: this._merge.bind(this, n)
              }
            }).then((r => {
              if (e.loop && r.finished && (!t || !r.noop)) {
                const t = tr(e);
                if (t) return this._update(t, !0)
              }
              return r
            }))
          }
          _merge(e, t, r) {
            if (t.cancel) return this.stop(!0), r(kt(this));
            const l = !L.und(e.to),
              a = !L.und(e.from);
            if (l || a) {
              if (!(t.callId > this._lastToId)) return r(kt(this));
              this._lastToId = t.callId
            }
            const {
              key: o,
              defaultProps: i,
              animation: s
            } = this, {
              to: c,
              from: d
            } = s;
            let {
              to: u = c,
              from: h = d
            } = e;
            !a || l || t.default && !L.und(u) || (u = h), t.reverse && ([u, h] = [h, u]);
            const f = !C(h, d);
            f && (s.from = h), h = Re(h);
            const v = !C(u, c);
            v && this._focus(u);
            const p = Lt(t.to),
              {
                config: g
              } = s,
              {
                decay: w,
                velocity: m
              } = g;
            (l || a) && (g.velocity = 0), t.config && !p && function(e, t, r) {
              r && (_t(r = {
                ...r
              }, t), t = {
                ...r,
                ...t
              }), _t(e, t), Object.assign(e, t);
              for (const t in It) null == e[t] && (e[t] = It[t]);
              let {
                frequency: l,
                damping: n
              } = e;
              const {
                mass: a
              } = e;
              L.und(l) || (l < .01 && (l = .01), n < 0 && (n = 0), e.tension = Math.pow(2 * Math.PI / l, 2) * a, e.friction = 4 * Math.PI * n * a / l)
            }(g, vt(t.config, o), t.config !== i.config ? vt(i.config, o) : void 0);
            let x = Je(this);
            if (!x || L.und(u)) return r(Nt(this, !0));
            const b = L.und(t.reset) ? a && !t.default : !L.und(h) && pt(t.reset, o),
              j = b ? h : this.get(),
              y = Rt(u),
              R = L.num(y) || L.arr(y) || qe(y),
              M = !p && (!R || pt(i.immediate || t.immediate, o));
            if (v) {
              const e = ct(u);
              if (e !== x.constructor) {
                if (!M) throw Error(`Cannot animate between ${x.constructor.name} and ${e.name}, as the "to" prop suggests`);
                x = this._set(y)
              }
            }
            const A = x.constructor;
            let I = ye(u),
              S = !1;
            if (!I) {
              const e = b || !Wt(this) && f;
              (v || e) && (S = C(Rt(j), y), I = !S), (C(s.immediate, M) || M) && C(g.decay, w) && C(g.velocity, m) || (I = !0)
            }
            if (S && $t(this) && (s.changed && !b ? I = !0 : I || this._stop(c)), !p && ((I || ye(c)) && (s.values = x.getPayload(), s.toValues = ye(u) ? null : A == nt ? [1] : P(y)), s.immediate != M && (s.immediate = M, M || b || this._set(c)), I)) {
              const {
                onRest: e
              } = s;
              E(ar, (e => or(this, t, e)));
              const l = Nt(this, er(this, c));
              z(this._pendingCalls, l), this._pendingCalls.add(r), s.changed && n.batchedUpdates((() => {
                s.changed = !b, e?.(l, this), b ? vt(i.onRest, l) : s.onStart?.(l, this)
              }))
            }
            b && this._set(j), p ? r(Vt(t.to, t, this._state, this)) : I ? this._start() : $t(this) && !v ? this._pendingCalls.add(r) : r(Bt(j))
          }
          _focus(e) {
            const t = this.animation;
            e !== t.to && (Me(this) && this._detach(), t.to = e, Me(this) && this._attach())
          }
          _attach() {
            let e = 0;
            const {
              to: t
            } = this.animation;
            ye(t) && (Ae(t, this), Xt(t) && (e = t.priority + 1)), this.priority = e
          }
          _detach() {
            const {
              to: e
            } = this.animation;
            ye(e) && Pe(e, this)
          }
          _set(e, t = !0) {
            const r = Re(e);
            if (!L.und(r)) {
              const e = Je(this);
              if (!e || !C(r, e.getValue())) {
                const l = ct(r);
                e && e.constructor == l ? e.setValue(r) : et(this, l.create(r)), e && n.batchedUpdates((() => {
                  this._onChange(r, t)
                }))
              }
            }
            return Je(this)
          }
          _onStart() {
            const e = this.animation;
            e.changed || (e.changed = !0, ir(this, "onStart", Nt(this, er(this, e.to)), this))
          }
          _onChange(e, t) {
            t || (this._onStart(), vt(this.animation.onChange, e, this)), vt(this.defaultProps.onChange, e, this), super._onChange(e, t)
          }
          _start() {
            const e = this.animation;
            Je(this).reset(Re(e.to)), e.immediate || (e.fromValues = e.values.map((e => e.lastPosition))), $t(this) || (Zt(this, !0), Yt(this) || this._resume())
          }
          _resume() {
            R.skipAnimation ? this.finish() : F.start(this)
          }
          _stop(e, t) {
            if ($t(this)) {
              Zt(this, !1);
              const r = this.animation;
              E(r.values, (e => {
                e.done = !0
              })), r.toValues && (r.onChange = r.onPause = r.onResume = void 0), Le(this, {
                type: "idle",
                parent: this
              });
              const l = t ? kt(this.get()) : Nt(this.get(), er(this, e ?? r.to));
              z(this._pendingCalls, l), r.changed && (r.changed = !1, ir(this, "onRest", l, this))
            }
          }
        };

      function er(e, t) {
        const r = Rt(t);
        return C(Rt(e.get()), r)
      }

      function tr(e, t = e.loop, r = e.to) {
        const l = vt(t);
        if (l) {
          const n = !0 !== l && yt(l),
            a = (n || e).reverse,
            o = !n || n.reset;
          return rr({
            ...e,
            loop: t,
            default: !1,
            pause: void 0,
            to: !a || Lt(r) ? r : void 0,
            from: o ? e.from : void 0,
            reset: o,
            ...n
          })
        }
      }

      function rr(e) {
        const {
          to: t,
          from: r
        } = e = yt(e), l = new Set;
        return L.obj(t) && nr(t, l), L.obj(r) && nr(r, l), e.keys = l.size ? Array.from(l) : null, e
      }

      function lr(e) {
        const t = rr(e);
        return L.und(t.default) && (t.default = xt(t)), t
      }

      function nr(e, t) {
        A(e, ((e, r) => null != e && t.add(r)))
      }
      var ar = ["onStart", "onRest", "onChange", "onPause", "onResume"];

      function or(e, t, r) {
        e.animation[r] = t[r] !== wt(t, r) ? gt(t[r], e.key) : void 0
      }

      function ir(e, t, ...r) {
        e.animation[t]?.(...r), e.defaultProps[t]?.(...r)
      }
      var sr = ["onStart", "onChange", "onRest"],
        cr = 1,
        dr = class {
          constructor(e, t) {
            this.id = cr++, this.springs = {}, this.queue = [], this._lastAsyncId = 0, this._active = new Set, this._changed = new Set, this._started = !1, this._state = {
              paused: !1,
              pauseQueue: new Set,
              resumeQueue: new Set,
              timeouts: new Set
            }, this._events = {
              onStart: new Map,
              onChange: new Map,
              onRest: new Map
            }, this._onFrame = this._onFrame.bind(this), t && (this._flush = t), e && this.start({
              default: !0,
              ...e
            })
          }
          get idle() {
            return !this._state.asyncTo && Object.values(this.springs).every((e => e.idle && !e.isDelayed && !e.isPaused))
          }
          get item() {
            return this._item
          }
          set item(e) {
            this._item = e
          }
          get() {
            const e = {};
            return this.each(((t, r) => e[r] = t.get())), e
          }
          set(e) {
            for (const t in e) {
              const r = e[t];
              L.und(r) || this.springs[t].set(r)
            }
          }
          update(e) {
            return e && this.queue.push(rr(e)), this
          }
          start(e) {
            let {
              queue: t
            } = this;
            return e ? t = P(e).map(rr) : this.queue = [], this._flush ? this._flush(this, t) : (wr(this, t), ur(this, t))
          }
          stop(e, t) {
            if (e !== !!e && (t = e), t) {
              const r = this.springs;
              E(P(t), (t => r[t].stop(!!e)))
            } else Ot(this._state, this._lastAsyncId), this.each((t => t.stop(!!e)));
            return this
          }
          pause(e) {
            if (L.und(e)) this.start({
              pause: !0
            });
            else {
              const t = this.springs;
              E(P(e), (e => t[e].pause()))
            }
            return this
          }
          resume(e) {
            if (L.und(e)) this.start({
              pause: !1
            });
            else {
              const t = this.springs;
              E(P(e), (e => t[e].resume()))
            }
            return this
          }
          each(e) {
            A(this.springs, e)
          }
          _onFrame() {
            const {
              onStart: e,
              onChange: t,
              onRest: r
            } = this._events, l = this._active.size > 0, n = this._changed.size > 0;
            (l && !this._started || n && !this._started) && (this._started = !0, I(e, (([e, t]) => {
              t.value = this.get(), e(t, this, this._item)
            })));
            const a = !l && this._started,
              o = n || a && r.size ? this.get() : null;
            n && t.size && I(t, (([e, t]) => {
              t.value = o, e(t, this, this._item)
            })), a && (this._started = !1, I(r, (([e, t]) => {
              t.value = o, e(t, this, this._item)
            })))
          }
          eventObserved(e) {
            if ("change" == e.type) this._changed.add(e.parent), e.idle || this._active.add(e.parent);
            else {
              if ("idle" != e.type) return;
              this._active.delete(e.parent)
            }
            n.onFrame(this._onFrame)
          }
        };

      function ur(e, t) {
        return Promise.all(t.map((t => hr(e, t)))).then((t => Dt(e, t)))
      }
      async function hr(e, t, r) {
        const {
          keys: l,
          to: a,
          from: o,
          loop: i,
          onRest: s,
          onResolve: c
        } = t, d = L.obj(t.default) && t.default;
        i && (t.loop = !1), !1 === a && (t.to = null), !1 === o && (t.from = null);
        const u = L.arr(a) || L.fun(a) ? a : void 0;
        u ? (t.to = void 0, t.onRest = void 0, d && (d.onRest = void 0)) : E(sr, (r => {
          const l = t[r];
          if (L.fun(l)) {
            const n = e._events[r];
            t[r] = ({
              finished: e,
              cancelled: t
            }) => {
              const r = n.get(l);
              r ? (e || (r.finished = !1), t && (r.cancelled = !0)) : n.set(l, {
                value: null,
                finished: e || !1,
                cancelled: t || !1
              })
            }, d && (d[r] = t[r])
          }
        }));
        const h = e._state;
        t.pause === !h.paused ? (h.paused = t.pause, z(t.pause ? h.pauseQueue : h.resumeQueue)) : h.paused && (t.pause = !0);
        const f = (l || Object.keys(e.springs)).map((r => e.springs[r].start(t))),
          v = !0 === t.cancel || !0 === wt(t, "cancel");
        (u || v && h.asyncId) && f.push(Tt(++e._lastAsyncId, {
          props: t,
          state: h,
          actions: {
            pause: M,
            resume: M,
            start(t, r) {
              v ? (Ot(h, e._lastAsyncId), r(kt(e))) : (t.onRest = s, r(Vt(u, t, h, e)))
            }
          }
        })), h.paused && await new Promise((e => {
          h.resumeQueue.add(e)
        }));
        const p = Dt(e, await Promise.all(f));
        if (i && p.finished && (!r || !p.noop)) {
          const r = tr(t, i, a);
          if (r) return wr(e, [r]), hr(e, r, !0)
        }
        return c && n.batchedUpdates((() => c(p, e, e.item))), p
      }

      function fr(e, t) {
        const r = {
          ...e.springs
        };
        return t && E(P(t), (e => {
          L.und(e.keys) && (e = rr(e)), L.obj(e.to) || (e = {
            ...e,
            to: void 0
          }), gr(r, e, (e => pr(e)))
        })), vr(e, r), r
      }

      function vr(e, t) {
        A(t, ((t, r) => {
          e.springs[r] || (e.springs[r] = t, Ae(t, e))
        }))
      }

      function pr(e, t) {
        const r = new Jt;
        return r.key = e, t && Ae(r, t), r
      }

      function gr(e, t, r) {
        t.keys && E(t.keys, (l => {
          (e[l] || (e[l] = r(l)))._prepareNode(t)
        }))
      }

      function wr(e, t) {
        E(t, (t => {
          gr(e.springs, t, (t => pr(t, e)))
        }))
      }
      var mr, xr, br = ({
          children: e,
          ...t
        }) => {
          const r = (0, j.useContext)(jr),
            l = t.pause || !!r.pause,
            n = t.immediate || !!r.immediate;
          t = function(e, t) {
            const [r] = (0, j.useState)((() => ({
              inputs: t,
              result: e()
            }))), l = (0, j.useRef)(), n = l.current;
            let a = n;
            return a ? Boolean(t && a.inputs && function(e, t) {
              if (e.length !== t.length) return !1;
              for (let r = 0; r < e.length; r++)
                if (e[r] !== t[r]) return !1;
              return !0
            }(t, a.inputs)) || (a = {
              inputs: t,
              result: e()
            }) : a = r, (0, j.useEffect)((() => {
              l.current = a, n == r && (r.inputs = r.result = void 0)
            }), [a]), a.result
          }((() => ({
            pause: l,
            immediate: n
          })), [l, n]);
          const {
            Provider: a
          } = jr;
          return j.createElement(a, {
            value: t
          }, e)
        },
        jr = (mr = br, xr = {}, Object.assign(mr, j.createContext(xr)), mr.Provider._context = mr, mr.Consumer._context = mr, mr);
      br.Provider = jr.Provider, br.Consumer = jr.Consumer;
      var yr = () => {
        const e = [],
          t = function(t) {
            Xe(`${Oe}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`);
            const l = [];
            return E(e, ((e, n) => {
              if (L.und(t)) l.push(e.start());
              else {
                const a = r(t, e, n);
                a && l.push(e.start(a))
              }
            })), l
          };
        t.current = e, t.add = function(t) {
          e.includes(t) || e.push(t)
        }, t.delete = function(t) {
          const r = e.indexOf(t);
          ~r && e.splice(r, 1)
        }, t.pause = function() {
          return E(e, (e => e.pause(...arguments))), this
        }, t.resume = function() {
          return E(e, (e => e.resume(...arguments))), this
        }, t.set = function(t) {
          E(e, ((e, r) => {
            const l = L.fun(t) ? t(r, e) : t;
            l && e.set(l)
          }))
        }, t.start = function(t) {
          const r = [];
          return E(e, ((e, l) => {
            if (L.und(t)) r.push(e.start());
            else {
              const n = this._getProps(t, e, l);
              n && r.push(e.start(n))
            }
          })), r
        }, t.stop = function() {
          return E(e, (e => e.stop(...arguments))), this
        }, t.update = function(t) {
          return E(e, ((e, r) => e.update(this._getProps(t, e, r)))), this
        };
        const r = function(e, t, r) {
          return L.fun(e) ? e(r, t) : e
        };
        return t._getProps = r, t
      };

      function Rr(e, t) {
        const r = L.fun(e),
          [
            [l], n
          ] = function(e, t, r) {
            const l = L.fun(t) && t;
            l && !r && (r = []);
            const n = (0, j.useMemo)((() => l || 3 == arguments.length ? yr() : void 0), []),
              a = (0, j.useRef)(0),
              o = We(),
              i = (0, j.useMemo)((() => ({
                ctrls: [],
                queue: [],
                flush(e, t) {
                  const r = fr(e, t);
                  return a.current > 0 && !i.queue.length && !Object.keys(r).some((t => !e.springs[t])) ? ur(e, t) : new Promise((l => {
                    vr(e, r), i.queue.push((() => {
                      l(ur(e, t))
                    })), o()
                  }))
                }
              })), []),
              s = (0, j.useRef)([...i.ctrls]),
              c = [],
              d = Ze(e) || 0;

            function u(e, r) {
              for (let n = e; n < r; n++) {
                const e = s.current[n] || (s.current[n] = new dr(null, i.flush)),
                  r = l ? l(n, e) : t[n];
                r && (c[n] = lr(r))
              }
            }(0, j.useMemo)((() => {
              E(s.current.slice(e, d), (e => {
                Ct(e, n), e.stop(!0)
              })), s.current.length = e, u(d, e)
            }), [e]), (0, j.useMemo)((() => {
              u(0, Math.min(d, e))
            }), r);
            const h = s.current.map(((e, t) => fr(e, c[t]))),
              f = (0, j.useContext)(br),
              v = Ze(f),
              p = f !== v && Mt(f);
            Ue((() => {
              a.current++, i.ctrls = s.current;
              const {
                queue: e
              } = i;
              e.length && (i.queue = [], E(e, (e => e()))), E(s.current, ((e, t) => {
                n?.add(e), p && e.start({
                  default: f
                });
                const r = c[t];
                r && (Et(e, r.ref), e.ref ? e.queue.push(r) : e.start(r))
              }))
            })), $e((() => () => {
              E(i.ctrls, (e => e.stop(!0)))
            }));
            const g = h.map((e => ({
              ...e
            })));
            return n ? [g, n] : g
          }(1, r ? e : [e], r ? t || [] : t);
        return r || 2 == arguments.length ? [l, n] : l
      }
      var Mr = () => yr(),
        Lr = () => (0, j.useState)(Mr)[0];

      function Cr(e, t, r) {
        const l = L.fun(t) && t,
          {
            reset: n,
            sort: a,
            trail: o = 0,
            expires: i = !0,
            exitBeforeEnter: s = !1,
            onDestroyed: c,
            ref: d,
            config: u
          } = l ? l() : t,
          h = (0, j.useMemo)((() => l || 3 == arguments.length ? yr() : void 0), []),
          f = P(e),
          v = [],
          p = (0, j.useRef)(null),
          g = n ? null : p.current;
        Ue((() => {
          p.current = v
        })), $e((() => (E(v, (e => {
          h?.add(e.ctrl), e.ctrl.ref = h
        })), () => {
          E(p.current, (e => {
            e.expired && clearTimeout(e.expirationId), Ct(e.ctrl, h), e.ctrl.stop(!0)
          }))
        })));
        const w = function(e, {
            key: t,
            keys: r = t
          }, l) {
            if (null === r) {
              const t = new Set;
              return e.map((e => {
                const r = l && l.find((r => r.item === e && "leave" !== r.phase && !t.has(r)));
                return r ? (t.add(r), r.key) : Er++
              }))
            }
            return L.und(r) ? e : L.fun(r) ? e.map(r) : P(r)
          }(f, l ? l() : t, g),
          m = n && p.current || [];
        Ue((() => E(m, (({
          ctrl: e,
          item: t,
          key: r
        }) => {
          Ct(e, h), vt(c, t, r)
        }))));
        const x = [];
        if (g && E(g, ((e, t) => {
            e.expired ? (clearTimeout(e.expirationId), m.push(e)) : ~(t = x[t] = w.indexOf(e.key)) && (v[t] = e)
          })), E(f, ((e, t) => {
            v[t] || (v[t] = {
              key: w[t],
              item: e,
              phase: "mount",
              ctrl: new dr
            }, v[t].ctrl.item = e)
          })), x.length) {
          let e = -1;
          const {
            leave: r
          } = l ? l() : t;
          E(x, ((t, l) => {
            const n = g[l];
            ~t ? (e = v.indexOf(n), v[e] = {
              ...n,
              item: f[t]
            }) : r && v.splice(++e, 0, n)
          }))
        }
        L.fun(a) && v.sort(((e, t) => a(e.item, t.item)));
        let b = -o;
        const y = We(),
          R = xt(t),
          M = new Map,
          C = (0, j.useRef)(new Map),
          A = (0, j.useRef)(!1);
        E(v, ((e, r) => {
          const n = e.key,
            a = e.phase,
            c = l ? l() : t;
          let h, f;
          const v = vt(c.delay || 0, n);
          if ("mount" == a) h = c.enter, f = "enter";
          else {
            const e = w.indexOf(n) < 0;
            if ("leave" != a)
              if (e) h = c.leave, f = "leave";
              else {
                if (!(h = c.update)) return;
                f = "update"
              }
            else {
              if (e) return;
              h = c.enter, f = "enter"
            }
          }
          if (h = vt(h, e.item, r), h = L.obj(h) ? yt(h) : {
              to: h
            }, !h.config) {
            const t = u || R.config;
            h.config = vt(t, e.item, r, f)
          }
          b += o;
          const m = {
            ...R,
            delay: v + b,
            ref: d,
            immediate: c.immediate,
            reset: !1,
            ...h
          };
          if ("enter" == f && L.und(m.from)) {
            const n = l ? l() : t,
              a = L.und(n.initial) || g ? n.from : n.initial;
            m.from = vt(a, e.item, r)
          }
          const {
            onResolve: x
          } = m;
          m.onResolve = e => {
            vt(x, e);
            const t = p.current,
              r = t.find((e => e.key === n));
            if (r && (!e.cancelled || "update" == r.phase) && r.ctrl.idle) {
              const e = t.every((e => e.ctrl.idle));
              if ("leave" == r.phase) {
                const t = vt(i, r.item);
                if (!1 !== t) {
                  const l = !0 === t ? 0 : t;
                  if (r.expired = !0, !e && l > 0) return void(l <= 2147483647 && (r.expirationId = setTimeout(y, l)))
                }
              }
              e && t.some((e => e.expired)) && (C.current.delete(r), s && (A.current = !0), y())
            }
          };
          const j = fr(e.ctrl, m);
          "leave" === f && s ? C.current.set(e, {
            phase: f,
            springs: j,
            payload: m
          }) : M.set(e, {
            phase: f,
            springs: j,
            payload: m
          })
        }));
        const I = (0, j.useContext)(br),
          S = Ze(I),
          _ = I !== S && Mt(I);
        Ue((() => {
          _ && E(v, (e => {
            e.ctrl.start({
              default: I
            })
          }))
        }), [I]), E(M, ((e, t) => {
          if (C.current.size) {
            const e = v.findIndex((e => e.key === t.key));
            v.splice(e, 1)
          }
        })), Ue((() => {
          E(C.current.size ? C.current : M, (({
            phase: e,
            payload: t
          }, r) => {
            const {
              ctrl: l
            } = r;
            r.phase = e, h?.add(l), _ && "enter" == e && l.start({
              default: I
            }), t && (Et(l, t.ref), !l.ref && !h || A.current ? (l.start(t), A.current && (A.current = !1)) : l.update(t))
          }))
        }), n ? void 0 : r);
        const z = e => j.createElement(j.Fragment, null, v.map(((t, r) => {
          const {
            springs: l
          } = M.get(t) || t.ctrl, n = e({
            ...l
          }, t.item, t, r);
          return n && n.type ? j.createElement(n.type, {
            ...n.props,
            key: L.str(t.key) || L.num(t.key) ? t.key : t.ctrl.id,
            ref: n.ref
          }) : n
        })));
        return h ? [z, h] : z
      }
      var Er = 1,
        Ar = class extends Ut {
          constructor(e, t) {
            super(), this.source = e, this.idle = !0, this._active = new Set, this.calc = he(...t);
            const r = this._get(),
              l = ct(r);
            et(this, l.create(r))
          }
          advance(e) {
            const t = this._get();
            C(t, this.get()) || (Je(this).setValue(t), this._onChange(t, this.idle)), !this.idle && Ir(this._active) && Sr(this)
          }
          _get() {
            const e = L.arr(this.source) ? this.source.map(Re) : P(Re(this.source));
            return this.calc(...e)
          }
          _start() {
            this.idle && !Ir(this._active) && (this.idle = !1, E(tt(this), (e => {
              e.done = !1
            })), R.skipAnimation ? (n.batchedUpdates((() => this.advance())), Sr(this)) : F.start(this))
          }
          _attach() {
            let e = 1;
            E(P(this.source), (t => {
              ye(t) && Ae(t, this), Xt(t) && (t.idle || this._active.add(t), e = Math.max(e, t.priority + 1))
            })), this.priority = e, this._start()
          }
          _detach() {
            E(P(this.source), (e => {
              ye(e) && Pe(e, this)
            })), this._active.clear(), Sr(this)
          }
          eventObserved(e) {
            "change" == e.type ? e.idle ? this.advance() : (this._active.add(e.parent), this._start()) : "idle" == e.type ? this._active.delete(e.parent) : "priority" == e.type && (this.priority = P(this.source).reduce(((e, t) => Math.max(e, (Xt(t) ? t.priority : 0) + 1)), 0))
          }
        };

      function Pr(e) {
        return !1 !== e.idle
      }

      function Ir(e) {
        return !e.size || Array.from(e).every(Pr)
      }

      function Sr(e) {
        e.idle || (e.idle = !0, E(tt(e), (e => {
          e.done = !0
        })), Le(e, {
          type: "idle",
          parent: e
        }))
      }
      R.assign({
        createStringInterpolator: Ve,
        to: (e, t) => new Ar(e, t)
      }), F.advance;
      var _r = r(18429),
        zr = /^--/;

      function Hr(e, t) {
        return null == t || "boolean" == typeof t || "" === t ? "" : "number" != typeof t || 0 === t || zr.test(e) || Dr.hasOwnProperty(e) && Dr[e] ? ("" + t).trim() : t + "px"
      }
      var Tr = {},
        Dr = {
          animationIterationCount: !0,
          borderImageOutset: !0,
          borderImageSlice: !0,
          borderImageWidth: !0,
          boxFlex: !0,
          boxFlexGroup: !0,
          boxOrdinalGroup: !0,
          columnCount: !0,
          columns: !0,
          flex: !0,
          flexGrow: !0,
          flexPositive: !0,
          flexShrink: !0,
          flexNegative: !0,
          flexOrder: !0,
          gridRow: !0,
          gridRowEnd: !0,
          gridRowSpan: !0,
          gridRowStart: !0,
          gridColumn: !0,
          gridColumnEnd: !0,
          gridColumnSpan: !0,
          gridColumnStart: !0,
          fontWeight: !0,
          lineClamp: !0,
          lineHeight: !0,
          opacity: !0,
          order: !0,
          orphans: !0,
          tabSize: !0,
          widows: !0,
          zIndex: !0,
          zoom: !0,
          fillOpacity: !0,
          floodOpacity: !0,
          stopOpacity: !0,
          strokeDasharray: !0,
          strokeDashoffset: !0,
          strokeMiterlimit: !0,
          strokeOpacity: !0,
          strokeWidth: !0
        },
        Br = ["Webkit", "Ms", "Moz", "O"];
      Dr = Object.keys(Dr).reduce(((e, t) => (Br.forEach((r => e[((e, t) => e + t.charAt(0).toUpperCase() + t.substring(1))(r, t)] = e[t])), e)), Dr);
      var Nr = /^(matrix|translate|scale|rotate|skew)/,
        kr = /^(translate)/,
        Vr = /^(rotate|skew)/,
        Or = (e, t) => L.num(e) && 0 !== e ? e + t : e,
        Gr = (e, t) => L.arr(e) ? e.every((e => Gr(e, t))) : L.num(e) ? e === t : parseFloat(e) === t,
        Fr = class extends ot {
          constructor({
            x: e,
            y: t,
            z: r,
            ...l
          }) {
            const n = [],
              a = [];
            (e || t || r) && (n.push([e || 0, t || 0, r || 0]), a.push((e => [`translate3d(${e.map((e=>Or(e,"px"))).join(",")})`, Gr(e, 0)]))), A(l, ((e, t) => {
              if ("transform" === t) n.push([e || ""]), a.push((e => [e, "" === e]));
              else if (Nr.test(t)) {
                if (delete l[t], L.und(e)) return;
                const r = kr.test(t) ? "px" : Vr.test(t) ? "deg" : "";
                n.push(P(e)), a.push("rotate3d" === t ? ([e, t, l, n]) => [`rotate3d(${e},${t},${l},${Or(n,r)})`, Gr(n, 0)] : e => [`${t}(${e.map((e=>Or(e,r))).join(",")})`, Gr(e, t.startsWith("scale") ? 1 : 0)])
              }
            })), n.length && (l.transform = new Xr(n, a)), super(l)
          }
        },
        Xr = class extends Ce {
          constructor(e, t) {
            super(), this.inputs = e, this.transforms = t, this._value = null
          }
          get() {
            return this._value || (this._value = this._get())
          }
          _get() {
            let e = "",
              t = !0;
            return E(this.inputs, ((r, l) => {
              const n = Re(r[0]),
                [a, o] = this.transforms[l](L.arr(n) ? n : r.map(Re));
              e += " " + a, t = t && o
            })), t ? "none" : e
          }
          observerAdded(e) {
            1 == e && E(this.inputs, (e => E(e, (e => ye(e) && Ae(e, this)))))
          }
          observerRemoved(e) {
            0 == e && E(this.inputs, (e => E(e, (e => ye(e) && Pe(e, this)))))
          }
          eventObserved(e) {
            "change" == e.type && (this._value = null), Le(this, e)
          }
        };
      R.assign({
        batchedUpdates: _r.unstable_batchedUpdates,
        createStringInterpolator: Ve,
        colors: {
          transparent: 0,
          aliceblue: 4042850303,
          antiquewhite: 4209760255,
          aqua: 16777215,
          aquamarine: 2147472639,
          azure: 4043309055,
          beige: 4126530815,
          bisque: 4293182719,
          black: 255,
          blanchedalmond: 4293643775,
          blue: 65535,
          blueviolet: 2318131967,
          brown: 2771004159,
          burlywood: 3736635391,
          burntsienna: 3934150143,
          cadetblue: 1604231423,
          chartreuse: 2147418367,
          chocolate: 3530104575,
          coral: 4286533887,
          cornflowerblue: 1687547391,
          cornsilk: 4294499583,
          crimson: 3692313855,
          cyan: 16777215,
          darkblue: 35839,
          darkcyan: 9145343,
          darkgoldenrod: 3095792639,
          darkgray: 2846468607,
          darkgreen: 6553855,
          darkgrey: 2846468607,
          darkkhaki: 3182914559,
          darkmagenta: 2332068863,
          darkolivegreen: 1433087999,
          darkorange: 4287365375,
          darkorchid: 2570243327,
          darkred: 2332033279,
          darksalmon: 3918953215,
          darkseagreen: 2411499519,
          darkslateblue: 1211993087,
          darkslategray: 793726975,
          darkslategrey: 793726975,
          darkturquoise: 13554175,
          darkviolet: 2483082239,
          deeppink: 4279538687,
          deepskyblue: 12582911,
          dimgray: 1768516095,
          dimgrey: 1768516095,
          dodgerblue: 512819199,
          firebrick: 2988581631,
          floralwhite: 4294635775,
          forestgreen: 579543807,
          fuchsia: 4278255615,
          gainsboro: 3705462015,
          ghostwhite: 4177068031,
          gold: 4292280575,
          goldenrod: 3668254975,
          gray: 2155905279,
          green: 8388863,
          greenyellow: 2919182335,
          grey: 2155905279,
          honeydew: 4043305215,
          hotpink: 4285117695,
          indianred: 3445382399,
          indigo: 1258324735,
          ivory: 4294963455,
          khaki: 4041641215,
          lavender: 3873897215,
          lavenderblush: 4293981695,
          lawngreen: 2096890111,
          lemonchiffon: 4294626815,
          lightblue: 2916673279,
          lightcoral: 4034953471,
          lightcyan: 3774873599,
          lightgoldenrodyellow: 4210742015,
          lightgray: 3553874943,
          lightgreen: 2431553791,
          lightgrey: 3553874943,
          lightpink: 4290167295,
          lightsalmon: 4288707327,
          lightseagreen: 548580095,
          lightskyblue: 2278488831,
          lightslategray: 2005441023,
          lightslategrey: 2005441023,
          lightsteelblue: 2965692159,
          lightyellow: 4294959359,
          lime: 16711935,
          limegreen: 852308735,
          linen: 4210091775,
          magenta: 4278255615,
          maroon: 2147483903,
          mediumaquamarine: 1724754687,
          mediumblue: 52735,
          mediumorchid: 3126187007,
          mediumpurple: 2473647103,
          mediumseagreen: 1018393087,
          mediumslateblue: 2070474495,
          mediumspringgreen: 16423679,
          mediumturquoise: 1221709055,
          mediumvioletred: 3340076543,
          midnightblue: 421097727,
          mintcream: 4127193855,
          mistyrose: 4293190143,
          moccasin: 4293178879,
          navajowhite: 4292783615,
          navy: 33023,
          oldlace: 4260751103,
          olive: 2155872511,
          olivedrab: 1804477439,
          orange: 4289003775,
          orangered: 4282712319,
          orchid: 3664828159,
          palegoldenrod: 4008225535,
          palegreen: 2566625535,
          paleturquoise: 2951671551,
          palevioletred: 3681588223,
          papayawhip: 4293907967,
          peachpuff: 4292524543,
          peru: 3448061951,
          pink: 4290825215,
          plum: 3718307327,
          powderblue: 2967529215,
          purple: 2147516671,
          rebeccapurple: 1714657791,
          red: 4278190335,
          rosybrown: 3163525119,
          royalblue: 1097458175,
          saddlebrown: 2336560127,
          salmon: 4202722047,
          sandybrown: 4104413439,
          seagreen: 780883967,
          seashell: 4294307583,
          sienna: 2689740287,
          silver: 3233857791,
          skyblue: 2278484991,
          slateblue: 1784335871,
          slategray: 1887473919,
          slategrey: 1887473919,
          snow: 4294638335,
          springgreen: 16744447,
          steelblue: 1182971135,
          tan: 3535047935,
          teal: 8421631,
          thistle: 3636451583,
          tomato: 4284696575,
          turquoise: 1088475391,
          violet: 4001558271,
          wheat: 4125012991,
          white: 4294967295,
          whitesmoke: 4126537215,
          yellow: 4294902015,
          yellowgreen: 2597139199
        }
      });
      var qr = ((e, {
          applyAnimatedValues: t = () => !1,
          createAnimatedStyle: r = e => new ot(e),
          getComponentProps: l = e => e
        } = {}) => {
          const n = {
              applyAnimatedValues: t,
              createAnimatedStyle: r,
              getComponentProps: l
            },
            a = e => {
              const t = ft(e) || "Anonymous";
              return (e = L.str(e) ? a[e] || (a[e] = dt(e, n)) : e[ht] || (e[ht] = dt(e, n))).displayName = `Animated(${t})`, e
            };
          return A(e, ((t, r) => {
            L.arr(e) && (r = ft(t)), a[r] = a(t)
          })), {
            animated: a
          }
        })(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "u", "ul", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"], {
          applyAnimatedValues: function(e, t) {
            if (!e.nodeType || !e.setAttribute) return !1;
            const r = "filter" === e.nodeName || e.parentNode && "filter" === e.parentNode.nodeName,
              {
                className: l,
                style: n,
                children: a,
                scrollTop: o,
                scrollLeft: i,
                viewBox: s,
                ...c
              } = t,
              d = Object.values(c),
              u = Object.keys(c).map((t => r || e.hasAttribute(t) ? t : Tr[t] || (Tr[t] = t.replace(/([A-Z])/g, (e => "-" + e.toLowerCase())))));
            void 0 !== a && (e.textContent = a);
            for (const t in n)
              if (n.hasOwnProperty(t)) {
                const r = Hr(t, n[t]);
                zr.test(t) ? e.style.setProperty(t, r) : e.style[t] = r
              } u.forEach(((t, r) => {
              e.setAttribute(t, d[r])
            })), void 0 !== l && (e.className = l), void 0 !== o && (e.scrollTop = o), void 0 !== i && (e.scrollLeft = i), void 0 !== s && e.setAttribute("viewBox", s)
          },
          createAnimatedStyle: e => new Fr(e),
          getComponentProps: ({
            scrollTop: e,
            scrollLeft: t,
            ...r
          }) => r
        }),
        Ur = qr.animated
    },
    80477: (e, t, r) => {
      r.d(t, {
        A: () => i,
        t: () => o
      });
      const l = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])'],
        n = l.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      l.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const a = l.join(':not([hidden]):not([tabindex="-1"]),');

      function o(e) {
        return e.matches(n)
      }

      function i(e) {
        return e.matches(a)
      }
    },
    81175: (e, t, r) => {
      r.d(t, {
        H: () => n
      });
      var l = r(48436);

      function n(e = {}) {
        let {
          isReadOnly: t
        } = e, [r, n] = (0, l.P)(e.isSelected, e.defaultSelected || !1, e.onChange);
        return {
          isSelected: r,
          setSelected: function(e) {
            t || n(e)
          },
          toggle: function() {
            t || n(!r)
          }
        }
      }
    },
    82886: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        l = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        o = r ? Symbol.for("react.strict_mode") : 60108,
        i = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        c = r ? Symbol.for("react.context") : 60110,
        d = r ? Symbol.for("react.async_mode") : 60111,
        u = r ? Symbol.for("react.concurrent_mode") : 60111,
        h = r ? Symbol.for("react.forward_ref") : 60112,
        f = r ? Symbol.for("react.suspense") : 60113,
        v = r ? Symbol.for("react.suspense_list") : 60120,
        p = r ? Symbol.for("react.memo") : 60115,
        g = r ? Symbol.for("react.lazy") : 60116,
        w = r ? Symbol.for("react.block") : 60121,
        m = r ? Symbol.for("react.fundamental") : 60117,
        x = r ? Symbol.for("react.responder") : 60118,
        b = r ? Symbol.for("react.scope") : 60119;

      function j(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case l:
              switch (e = e.type) {
                case d:
                case u:
                case a:
                case i:
                case o:
                case f:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case h:
                    case g:
                    case p:
                    case s:
                      return e;
                    default:
                      return t
                  }
              }
            case n:
              return t
          }
        }
      }

      function y(e) {
        return j(e) === u
      }
      t.AsyncMode = d, t.ConcurrentMode = u, t.ContextConsumer = c, t.ContextProvider = s, t.Element = l, t.ForwardRef = h, t.Fragment = a, t.Lazy = g, t.Memo = p, t.Portal = n, t.Profiler = i, t.StrictMode = o, t.Suspense = f, t.isAsyncMode = function(e) {
        return y(e) || j(e) === d
      }, t.isConcurrentMode = y, t.isContextConsumer = function(e) {
        return j(e) === c
      }, t.isContextProvider = function(e) {
        return j(e) === s
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === l
      }, t.isForwardRef = function(e) {
        return j(e) === h
      }, t.isFragment = function(e) {
        return j(e) === a
      }, t.isLazy = function(e) {
        return j(e) === g
      }, t.isMemo = function(e) {
        return j(e) === p
      }, t.isPortal = function(e) {
        return j(e) === n
      }, t.isProfiler = function(e) {
        return j(e) === i
      }, t.isStrictMode = function(e) {
        return j(e) === o
      }, t.isSuspense = function(e) {
        return j(e) === f
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === u || e === i || e === o || e === f || e === v || "object" == typeof e && null !== e && (e.$$typeof === g || e.$$typeof === p || e.$$typeof === s || e.$$typeof === c || e.$$typeof === h || e.$$typeof === m || e.$$typeof === x || e.$$typeof === b || e.$$typeof === w)
      }, t.typeOf = j
    },
    85124: (e, t, r) => {
      r.d(t, {
        A: () => n
      });
      var l = r(71127);

      function n() {
        let e = (0, l.useRef)(new Map),
          t = (0, l.useCallback)(((t, r, l, n) => {
            let a = (null == n ? void 0 : n.once) ? (...t) => {
              e.current.delete(l), l(...t)
            } : l;
            e.current.set(l, {
              type: r,
              eventTarget: t,
              fn: a,
              options: n
            }), t.addEventListener(r, a, n)
          }), []),
          r = (0, l.useCallback)(((t, r, l, n) => {
            var a;
            let o = (null === (a = e.current.get(l)) || void 0 === a ? void 0 : a.fn) || l;
            t.removeEventListener(r, o, n), e.current.delete(l)
          }), []),
          n = (0, l.useCallback)((() => {
            e.current.forEach(((e, t) => {
              r(e.eventTarget, e.type, t, e.options)
            }))
          }), [r]);
        return (0, l.useEffect)((() => n), [n]), {
          addGlobalListener: t,
          removeGlobalListener: r,
          removeAllGlobalListeners: n
        }
      }
    },
    85334: (e, t, r) => {
      r.d(t, {
        In: () => Ae,
        LM: () => Se,
        UC: () => Ie,
        WT: () => Ee,
        ZL: () => Pe,
        bL: () => Le,
        l9: () => Ce,
        p4: () => ze,
        q7: () => _e
      });
      var l = r(71127),
        n = r(18429),
        a = r(72213),
        o = r(22517),
        i = r(50438),
        s = r(21423),
        c = r(91173),
        d = r(59219),
        u = r(74687),
        h = r(22759),
        f = r(22259),
        v = r(74406),
        p = r(54917),
        g = r(34902),
        w = r(51347),
        m = r(21222),
        x = r(26727),
        b = r(79158),
        j = r(92600),
        y = r(15485),
        R = r(63694),
        M = r(85435),
        L = r(19690),
        C = r(70954),
        E = [" ", "Enter", "ArrowUp", "ArrowDown"],
        A = [" ", "Enter"],
        P = "Select",
        [I, S, _] = (0, i.N)(P),
        [z, H] = (0, c.A)(P, [_, p.Bk]),
        T = (0, p.Bk)(),
        [D, B] = z(P),
        [N, k] = z(P),
        V = e => {
          const {
            __scopeSelect: t,
            children: r,
            open: n,
            defaultOpen: a,
            onOpenChange: o,
            value: i,
            defaultValue: s,
            onValueChange: c,
            dir: u,
            name: h,
            autoComplete: f,
            disabled: g,
            required: w,
            form: m
          } = e, x = T(t), [j, y] = l.useState(null), [R, M] = l.useState(null), [L, E] = l.useState(!1), A = (0, d.jH)(u), [S, _] = (0, b.useControllableState)({
            prop: n,
            defaultProp: a ?? !1,
            onChange: o,
            caller: P
          }), [z, H] = (0, b.useControllableState)({
            prop: i,
            defaultProp: s,
            onChange: c,
            caller: P
          }), B = l.useRef(null), k = !j || m || !!j.closest("form"), [V, O] = l.useState(new Set), G = Array.from(V).map((e => e.props.value)).join(";");
          return (0, C.jsx)(p.bL, {
            ...x,
            children: (0, C.jsxs)(D, {
              required: w,
              scope: t,
              trigger: j,
              onTriggerChange: y,
              valueNode: R,
              onValueNodeChange: M,
              valueNodeHasChildren: L,
              onValueNodeHasChildrenChange: E,
              contentId: (0, v.useId)(),
              value: z,
              onValueChange: H,
              open: S,
              onOpenChange: _,
              dir: A,
              triggerPointerDownPosRef: B,
              disabled: g,
              children: [(0, C.jsx)(I.Provider, {
                scope: t,
                children: (0, C.jsx)(N, {
                  scope: e.__scopeSelect,
                  onNativeOptionAdd: l.useCallback((e => {
                    O((t => new Set(t).add(e)))
                  }), []),
                  onNativeOptionRemove: l.useCallback((e => {
                    O((t => {
                      const r = new Set(t);
                      return r.delete(e), r
                    }))
                  }), []),
                  children: r
                })
              }), k ? (0, C.jsxs)(je, {
                "aria-hidden": !0,
                required: w,
                tabIndex: -1,
                name: h,
                autoComplete: f,
                value: z,
                onChange: e => H(e.target.value),
                disabled: g,
                form: m,
                children: [void 0 === z ? (0, C.jsx)("option", {
                  value: ""
                }) : null, Array.from(V)]
              }, G) : null]
            })
          })
        };
      V.displayName = P;
      var O = "SelectTrigger",
        G = l.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            disabled: n = !1,
            ...a
          } = e, i = T(r), c = B(O, r), d = c.disabled || n, u = (0, s.s)(t, c.onTriggerChange), h = S(r), f = l.useRef("touch"), [v, g, m] = Re((e => {
            const t = h().filter((e => !e.disabled)),
              r = t.find((e => e.value === c.value)),
              l = Me(t, e, r);
            void 0 !== l && c.onValueChange(l.value)
          })), x = e => {
            d || (c.onOpenChange(!0), m()), e && (c.triggerPointerDownPosRef.current = {
              x: Math.round(e.pageX),
              y: Math.round(e.pageY)
            })
          };
          return (0, C.jsx)(p.Mz, {
            asChild: !0,
            ...i,
            children: (0, C.jsx)(w.sG.button, {
              type: "button",
              role: "combobox",
              "aria-controls": c.contentId,
              "aria-expanded": c.open,
              "aria-required": c.required,
              "aria-autocomplete": "none",
              dir: c.dir,
              "data-state": c.open ? "open" : "closed",
              disabled: d,
              "data-disabled": d ? "" : void 0,
              "data-placeholder": ye(c.value) ? "" : void 0,
              ...a,
              ref: u,
              onClick: (0, o.m)(a.onClick, (e => {
                e.currentTarget.focus(), "mouse" !== f.current && x(e)
              })),
              onPointerDown: (0, o.m)(a.onPointerDown, (e => {
                f.current = e.pointerType;
                const t = e.target;
                t.hasPointerCapture(e.pointerId) && t.releasePointerCapture(e.pointerId), 0 === e.button && !1 === e.ctrlKey && "mouse" === e.pointerType && (x(e), e.preventDefault())
              })),
              onKeyDown: (0, o.m)(a.onKeyDown, (e => {
                const t = "" !== v.current;
                e.ctrlKey || e.altKey || e.metaKey || 1 !== e.key.length || g(e.key), t && " " === e.key || E.includes(e.key) && (x(), e.preventDefault())
              }))
            })
          })
        }));
      G.displayName = O;
      var F = "SelectValue",
        X = l.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: l,
            style: n,
            children: a,
            placeholder: o = "",
            ...i
          } = e, c = B(F, r), {
            onValueNodeHasChildrenChange: d
          } = c, u = void 0 !== a, h = (0, s.s)(t, c.onValueNodeChange);
          return (0, j.N)((() => {
            d(u)
          }), [d, u]), (0, C.jsx)(w.sG.span, {
            ...i,
            ref: h,
            style: {
              pointerEvents: "none"
            },
            children: ye(c.value) ? (0, C.jsx)(C.Fragment, {
              children: o
            }) : a
          })
        }));
      X.displayName = F;
      var q = l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          children: l,
          ...n
        } = e;
        return (0, C.jsx)(w.sG.span, {
          "aria-hidden": !0,
          ...n,
          ref: t,
          children: l || "▼"
        })
      }));
      q.displayName = "SelectIcon";
      var U = e => (0, C.jsx)(g.Portal, {
        asChild: !0,
        ...e
      });
      U.displayName = "SelectPortal";
      var K = "SelectContent",
        W = l.forwardRef(((e, t) => {
          const r = B(K, e.__scopeSelect),
            [a, o] = l.useState();
          if ((0, j.N)((() => {
              o(new DocumentFragment)
            }), []), !r.open) {
            const t = a;
            return t ? n.createPortal((0, C.jsx)(Y, {
              scope: e.__scopeSelect,
              children: (0, C.jsx)(I.Slot, {
                scope: e.__scopeSelect,
                children: (0, C.jsx)("div", {
                  children: e.children
                })
              })
            }), t) : null
          }
          return (0, C.jsx)(J, {
            ...e,
            ref: t
          })
        }));
      W.displayName = K;
      var $ = 10,
        [Y, Z] = z(K),
        Q = (0, m.createSlot)("SelectContent.RemoveScroll"),
        J = l.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            position: n = "item-aligned",
            onCloseAutoFocus: a,
            onEscapeKeyDown: i,
            onPointerDownOutside: c,
            side: d,
            sideOffset: v,
            align: p,
            alignOffset: g,
            arrowPadding: w,
            collisionBoundary: m,
            collisionPadding: x,
            sticky: b,
            hideWhenDetached: j,
            avoidCollisions: y,
            ...R
          } = e, E = B(K, r), [A, P] = l.useState(null), [I, _] = l.useState(null), z = (0, s.s)(t, (e => P(e))), [H, T] = l.useState(null), [D, N] = l.useState(null), k = S(r), [V, O] = l.useState(!1), G = l.useRef(!1);
          l.useEffect((() => {
            if (A) return (0, M.Eq)(A)
          }), [A]), (0, h.Oh)();
          const F = l.useCallback((e => {
              const [t, ...r] = k().map((e => e.ref.current)), [l] = r.slice(-1), n = document.activeElement;
              for (const r of e) {
                if (r === n) return;
                if (r?.scrollIntoView({
                    block: "nearest"
                  }), r === t && I && (I.scrollTop = 0), r === l && I && (I.scrollTop = I.scrollHeight), r?.focus(), document.activeElement !== n) return
              }
            }), [k, I]),
            X = l.useCallback((() => F([H, A])), [F, H, A]);
          l.useEffect((() => {
            V && X()
          }), [V, X]);
          const {
            onOpenChange: q,
            triggerPointerDownPosRef: U
          } = E;
          l.useEffect((() => {
            if (A) {
              let e = {
                x: 0,
                y: 0
              };
              const t = t => {
                  e = {
                    x: Math.abs(Math.round(t.pageX) - (U.current?.x ?? 0)),
                    y: Math.abs(Math.round(t.pageY) - (U.current?.y ?? 0))
                  }
                },
                r = r => {
                  e.x <= 10 && e.y <= 10 ? r.preventDefault() : A.contains(r.target) || q(!1), document.removeEventListener("pointermove", t), U.current = null
                };
              return null !== U.current && (document.addEventListener("pointermove", t), document.addEventListener("pointerup", r, {
                capture: !0,
                once: !0
              })), () => {
                document.removeEventListener("pointermove", t), document.removeEventListener("pointerup", r, {
                  capture: !0
                })
              }
            }
          }), [A, q, U]), l.useEffect((() => {
            const e = () => q(!1);
            return window.addEventListener("blur", e), window.addEventListener("resize", e), () => {
              window.removeEventListener("blur", e), window.removeEventListener("resize", e)
            }
          }), [q]);
          const [W, $] = Re((e => {
            const t = k().filter((e => !e.disabled)),
              r = t.find((e => e.ref.current === document.activeElement)),
              l = Me(t, e, r);
            l && setTimeout((() => l.ref.current.focus()))
          })), Z = l.useCallback(((e, t, r) => {
            const l = !G.current && !r;
            (void 0 !== E.value && E.value === t || l) && (T(e), l && (G.current = !0))
          }), [E.value]), J = l.useCallback((() => A?.focus()), [A]), re = l.useCallback(((e, t, r) => {
            const l = !G.current && !r;
            (void 0 !== E.value && E.value === t || l) && N(e)
          }), [E.value]), le = "popper" === n ? te : ee, ne = le === te ? {
            side: d,
            sideOffset: v,
            align: p,
            alignOffset: g,
            arrowPadding: w,
            collisionBoundary: m,
            collisionPadding: x,
            sticky: b,
            hideWhenDetached: j,
            avoidCollisions: y
          } : {};
          return (0, C.jsx)(Y, {
            scope: r,
            content: A,
            viewport: I,
            onViewportChange: _,
            itemRefCallback: Z,
            selectedItem: H,
            onItemLeave: J,
            itemTextRefCallback: re,
            focusSelectedItem: X,
            selectedItemText: D,
            position: n,
            isPositioned: V,
            searchRef: W,
            children: (0, C.jsx)(L.RemoveScroll, {
              as: Q,
              allowPinchZoom: !0,
              children: (0, C.jsx)(f.n, {
                asChild: !0,
                trapped: E.open,
                onMountAutoFocus: e => {
                  e.preventDefault()
                },
                onUnmountAutoFocus: (0, o.m)(a, (e => {
                  E.trigger?.focus({
                    preventScroll: !0
                  }), e.preventDefault()
                })),
                children: (0, C.jsx)(u.qW, {
                  asChild: !0,
                  disableOutsidePointerEvents: !0,
                  onEscapeKeyDown: i,
                  onPointerDownOutside: c,
                  onFocusOutside: e => e.preventDefault(),
                  onDismiss: () => E.onOpenChange(!1),
                  children: (0, C.jsx)(le, {
                    role: "listbox",
                    id: E.contentId,
                    "data-state": E.open ? "open" : "closed",
                    dir: E.dir,
                    onContextMenu: e => e.preventDefault(),
                    ...R,
                    ...ne,
                    onPlaced: () => O(!0),
                    ref: z,
                    style: {
                      display: "flex",
                      flexDirection: "column",
                      outline: "none",
                      ...R.style
                    },
                    onKeyDown: (0, o.m)(R.onKeyDown, (e => {
                      const t = e.ctrlKey || e.altKey || e.metaKey;
                      if ("Tab" === e.key && e.preventDefault(), t || 1 !== e.key.length || $(e.key), ["ArrowUp", "ArrowDown", "Home", "End"].includes(e.key)) {
                        let t = k().filter((e => !e.disabled)).map((e => e.ref.current));
                        if (["ArrowUp", "End"].includes(e.key) && (t = t.slice().reverse()), ["ArrowUp", "ArrowDown"].includes(e.key)) {
                          const r = e.target,
                            l = t.indexOf(r);
                          t = t.slice(l + 1)
                        }
                        setTimeout((() => F(t))), e.preventDefault()
                      }
                    }))
                  })
                })
              })
            })
          })
        }));
      J.displayName = "SelectContentImpl";
      var ee = l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onPlaced: n,
          ...o
        } = e, i = B(K, r), c = Z(K, r), [d, u] = l.useState(null), [h, f] = l.useState(null), v = (0, s.s)(t, (e => f(e))), p = S(r), g = l.useRef(!1), m = l.useRef(!0), {
          viewport: x,
          selectedItem: b,
          selectedItemText: y,
          focusSelectedItem: R
        } = c, M = l.useCallback((() => {
          if (i.trigger && i.valueNode && d && h && x && b && y) {
            const e = i.trigger.getBoundingClientRect(),
              t = h.getBoundingClientRect(),
              r = i.valueNode.getBoundingClientRect(),
              l = y.getBoundingClientRect();
            if ("rtl" !== i.dir) {
              const n = l.left - t.left,
                o = r.left - n,
                i = e.left - o,
                s = e.width + i,
                c = Math.max(s, t.width),
                u = window.innerWidth - $,
                h = (0, a.q)(o, [$, Math.max($, u - c)]);
              d.style.minWidth = s + "px", d.style.left = h + "px"
            } else {
              const n = t.right - l.right,
                o = window.innerWidth - r.right - n,
                i = window.innerWidth - e.right - o,
                s = e.width + i,
                c = Math.max(s, t.width),
                u = window.innerWidth - $,
                h = (0, a.q)(o, [$, Math.max($, u - c)]);
              d.style.minWidth = s + "px", d.style.right = h + "px"
            }
            const o = p(),
              s = window.innerHeight - 2 * $,
              c = x.scrollHeight,
              u = window.getComputedStyle(h),
              f = parseInt(u.borderTopWidth, 10),
              v = parseInt(u.paddingTop, 10),
              w = parseInt(u.borderBottomWidth, 10),
              m = f + v + c + parseInt(u.paddingBottom, 10) + w,
              j = Math.min(5 * b.offsetHeight, m),
              R = window.getComputedStyle(x),
              M = parseInt(R.paddingTop, 10),
              L = parseInt(R.paddingBottom, 10),
              C = e.top + e.height / 2 - $,
              E = s - C,
              A = b.offsetHeight / 2,
              P = f + v + (b.offsetTop + A),
              I = m - P;
            if (P <= C) {
              const e = o.length > 0 && b === o[o.length - 1].ref.current;
              d.style.bottom = "0px";
              const t = h.clientHeight - x.offsetTop - x.offsetHeight,
                r = P + Math.max(E, A + (e ? L : 0) + t + w);
              d.style.height = r + "px"
            } else {
              const e = o.length > 0 && b === o[0].ref.current;
              d.style.top = "0px";
              const t = Math.max(C, f + x.offsetTop + (e ? M : 0) + A) + I;
              d.style.height = t + "px", x.scrollTop = P - C + x.offsetTop
            }
            d.style.margin = `${$}px 0`, d.style.minHeight = j + "px", d.style.maxHeight = s + "px", n?.(), requestAnimationFrame((() => g.current = !0))
          }
        }), [p, i.trigger, i.valueNode, d, h, x, b, y, i.dir, n]);
        (0, j.N)((() => M()), [M]);
        const [L, E] = l.useState();
        (0, j.N)((() => {
          h && E(window.getComputedStyle(h).zIndex)
        }), [h]);
        const A = l.useCallback((e => {
          e && !0 === m.current && (M(), R?.(), m.current = !1)
        }), [M, R]);
        return (0, C.jsx)(re, {
          scope: r,
          contentWrapper: d,
          shouldExpandOnScrollRef: g,
          onScrollButtonChange: A,
          children: (0, C.jsx)("div", {
            ref: u,
            style: {
              display: "flex",
              flexDirection: "column",
              position: "fixed",
              zIndex: L
            },
            children: (0, C.jsx)(w.sG.div, {
              ...o,
              ref: v,
              style: {
                boxSizing: "border-box",
                maxHeight: "100%",
                ...o.style
              }
            })
          })
        })
      }));
      ee.displayName = "SelectItemAlignedPosition";
      var te = l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          align: l = "start",
          collisionPadding: n = $,
          ...a
        } = e, o = T(r);
        return (0, C.jsx)(p.UC, {
          ...o,
          ...a,
          ref: t,
          align: l,
          collisionPadding: n,
          style: {
            boxSizing: "border-box",
            ...a.style,
            "--radix-select-content-transform-origin": "var(--radix-popper-transform-origin)",
            "--radix-select-content-available-width": "var(--radix-popper-available-width)",
            "--radix-select-content-available-height": "var(--radix-popper-available-height)",
            "--radix-select-trigger-width": "var(--radix-popper-anchor-width)",
            "--radix-select-trigger-height": "var(--radix-popper-anchor-height)"
          }
        })
      }));
      te.displayName = "SelectPopperPosition";
      var [re, le] = z(K, {}), ne = "SelectViewport", ae = l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          nonce: n,
          ...a
        } = e, i = Z(ne, r), c = le(ne, r), d = (0, s.s)(t, i.onViewportChange), u = l.useRef(0);
        return (0, C.jsxs)(C.Fragment, {
          children: [(0, C.jsx)("style", {
            dangerouslySetInnerHTML: {
              __html: "[data-radix-select-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-select-viewport]::-webkit-scrollbar{display:none}"
            },
            nonce: n
          }), (0, C.jsx)(I.Slot, {
            scope: r,
            children: (0, C.jsx)(w.sG.div, {
              "data-radix-select-viewport": "",
              role: "presentation",
              ...a,
              ref: d,
              style: {
                position: "relative",
                flex: 1,
                overflow: "hidden auto",
                ...a.style
              },
              onScroll: (0, o.m)(a.onScroll, (e => {
                const t = e.currentTarget,
                  {
                    contentWrapper: r,
                    shouldExpandOnScrollRef: l
                  } = c;
                if (l?.current && r) {
                  const e = Math.abs(u.current - t.scrollTop);
                  if (e > 0) {
                    const l = window.innerHeight - 2 * $,
                      n = parseFloat(r.style.minHeight),
                      a = parseFloat(r.style.height),
                      o = Math.max(n, a);
                    if (o < l) {
                      const n = o + e,
                        a = Math.min(l, n),
                        i = n - a;
                      r.style.height = a + "px", "0px" === r.style.bottom && (t.scrollTop = i > 0 ? i : 0, r.style.justifyContent = "flex-end")
                    }
                  }
                }
                u.current = t.scrollTop
              }))
            })
          })]
        })
      }));
      ae.displayName = ne;
      var oe = "SelectGroup",
        [ie, se] = z(oe);
      l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...l
        } = e, n = (0, v.useId)();
        return (0, C.jsx)(ie, {
          scope: r,
          id: n,
          children: (0, C.jsx)(w.sG.div, {
            role: "group",
            "aria-labelledby": n,
            ...l,
            ref: t
          })
        })
      })).displayName = oe;
      var ce = "SelectLabel";
      l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...l
        } = e, n = se(ce, r);
        return (0, C.jsx)(w.sG.div, {
          id: n.id,
          ...l,
          ref: t
        })
      })).displayName = ce;
      var de = "SelectItem",
        [ue, he] = z(de),
        fe = l.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            value: n,
            disabled: a = !1,
            textValue: i,
            ...c
          } = e, d = B(de, r), u = Z(de, r), h = d.value === n, [f, p] = l.useState(i ?? ""), [g, m] = l.useState(!1), x = (0, s.s)(t, (e => u.itemRefCallback?.(e, n, a))), b = (0, v.useId)(), j = l.useRef("touch"), y = () => {
            a || (d.onValueChange(n), d.onOpenChange(!1))
          };
          if ("" === n) throw new Error("A <Select.Item /> must have a value prop that is not an empty string. This is because the Select value can be set to an empty string to clear the selection and show the placeholder.");
          return (0, C.jsx)(ue, {
            scope: r,
            value: n,
            disabled: a,
            textId: b,
            isSelected: h,
            onItemTextChange: l.useCallback((e => {
              p((t => t || (e?.textContent ?? "").trim()))
            }), []),
            children: (0, C.jsx)(I.ItemSlot, {
              scope: r,
              value: n,
              disabled: a,
              textValue: f,
              children: (0, C.jsx)(w.sG.div, {
                role: "option",
                "aria-labelledby": b,
                "data-highlighted": g ? "" : void 0,
                "aria-selected": h && g,
                "data-state": h ? "checked" : "unchecked",
                "aria-disabled": a || void 0,
                "data-disabled": a ? "" : void 0,
                tabIndex: a ? void 0 : -1,
                ...c,
                ref: x,
                onFocus: (0, o.m)(c.onFocus, (() => m(!0))),
                onBlur: (0, o.m)(c.onBlur, (() => m(!1))),
                onClick: (0, o.m)(c.onClick, (() => {
                  "mouse" !== j.current && y()
                })),
                onPointerUp: (0, o.m)(c.onPointerUp, (() => {
                  "mouse" === j.current && y()
                })),
                onPointerDown: (0, o.m)(c.onPointerDown, (e => {
                  j.current = e.pointerType
                })),
                onPointerMove: (0, o.m)(c.onPointerMove, (e => {
                  j.current = e.pointerType, a ? u.onItemLeave?.() : "mouse" === j.current && e.currentTarget.focus({
                    preventScroll: !0
                  })
                })),
                onPointerLeave: (0, o.m)(c.onPointerLeave, (e => {
                  e.currentTarget === document.activeElement && u.onItemLeave?.()
                })),
                onKeyDown: (0, o.m)(c.onKeyDown, (e => {
                  "" !== u.searchRef?.current && " " === e.key || (A.includes(e.key) && y(), " " === e.key && e.preventDefault())
                }))
              })
            })
          })
        }));
      fe.displayName = de;
      var ve = "SelectItemText",
        pe = l.forwardRef(((e, t) => {
          const {
            __scopeSelect: r,
            className: a,
            style: o,
            ...i
          } = e, c = B(ve, r), d = Z(ve, r), u = he(ve, r), h = k(ve, r), [f, v] = l.useState(null), p = (0, s.s)(t, (e => v(e)), u.onItemTextChange, (e => d.itemTextRefCallback?.(e, u.value, u.disabled))), g = f?.textContent, m = l.useMemo((() => (0, C.jsx)("option", {
            value: u.value,
            disabled: u.disabled,
            children: g
          }, u.value)), [u.disabled, u.value, g]), {
            onNativeOptionAdd: x,
            onNativeOptionRemove: b
          } = h;
          return (0, j.N)((() => (x(m), () => b(m))), [x, b, m]), (0, C.jsxs)(C.Fragment, {
            children: [(0, C.jsx)(w.sG.span, {
              id: u.textId,
              ...i,
              ref: p
            }), u.isSelected && c.valueNode && !c.valueNodeHasChildren ? n.createPortal(i.children, c.valueNode) : null]
          })
        }));
      pe.displayName = ve;
      var ge = "SelectItemIndicator";
      l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...l
        } = e;
        return he(ge, r).isSelected ? (0, C.jsx)(w.sG.span, {
          "aria-hidden": !0,
          ...l,
          ref: t
        }) : null
      })).displayName = ge;
      var we = "SelectScrollUpButton";
      l.forwardRef(((e, t) => {
        const r = Z(we, e.__scopeSelect),
          n = le(we, e.__scopeSelect),
          [a, o] = l.useState(!1),
          i = (0, s.s)(t, n.onScrollButtonChange);
        return (0, j.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollTop > 0;
              o(e)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), a ? (0, C.jsx)(xe, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop - t.offsetHeight)
          }
        }) : null
      })).displayName = we;
      var me = "SelectScrollDownButton";
      l.forwardRef(((e, t) => {
        const r = Z(me, e.__scopeSelect),
          n = le(me, e.__scopeSelect),
          [a, o] = l.useState(!1),
          i = (0, s.s)(t, n.onScrollButtonChange);
        return (0, j.N)((() => {
          if (r.viewport && r.isPositioned) {
            let e = function() {
              const e = t.scrollHeight - t.clientHeight,
                r = Math.ceil(t.scrollTop) < e;
              o(r)
            };
            const t = r.viewport;
            return e(), t.addEventListener("scroll", e), () => t.removeEventListener("scroll", e)
          }
        }), [r.viewport, r.isPositioned]), a ? (0, C.jsx)(xe, {
          ...e,
          ref: i,
          onAutoScroll: () => {
            const {
              viewport: e,
              selectedItem: t
            } = r;
            e && t && (e.scrollTop = e.scrollTop + t.offsetHeight)
          }
        }) : null
      })).displayName = me;
      var xe = l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          onAutoScroll: n,
          ...a
        } = e, i = Z("SelectScrollButton", r), s = l.useRef(null), c = S(r), d = l.useCallback((() => {
          null !== s.current && (window.clearInterval(s.current), s.current = null)
        }), []);
        return l.useEffect((() => () => d()), [d]), (0, j.N)((() => {
          const e = c().find((e => e.ref.current === document.activeElement));
          e?.ref.current?.scrollIntoView({
            block: "nearest"
          })
        }), [c]), (0, C.jsx)(w.sG.div, {
          "aria-hidden": !0,
          ...a,
          ref: t,
          style: {
            flexShrink: 0,
            ...a.style
          },
          onPointerDown: (0, o.m)(a.onPointerDown, (() => {
            null === s.current && (s.current = window.setInterval(n, 50))
          })),
          onPointerMove: (0, o.m)(a.onPointerMove, (() => {
            i.onItemLeave?.(), null === s.current && (s.current = window.setInterval(n, 50))
          })),
          onPointerLeave: (0, o.m)(a.onPointerLeave, (() => {
            d()
          }))
        })
      }));
      l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...l
        } = e;
        return (0, C.jsx)(w.sG.div, {
          "aria-hidden": !0,
          ...l,
          ref: t
        })
      })).displayName = "SelectSeparator";
      var be = "SelectArrow";
      l.forwardRef(((e, t) => {
        const {
          __scopeSelect: r,
          ...l
        } = e, n = T(r), a = B(be, r), o = Z(be, r);
        return a.open && "popper" === o.position ? (0, C.jsx)(p.i3, {
          ...n,
          ...l,
          ref: t
        }) : null
      })).displayName = be;
      var je = l.forwardRef((({
        __scopeSelect: e,
        value: t,
        ...r
      }, n) => {
        const a = l.useRef(null),
          o = (0, s.s)(n, a),
          i = (0, y.Z)(t);
        return l.useEffect((() => {
          const e = a.current;
          if (!e) return;
          const r = window.HTMLSelectElement.prototype,
            l = Object.getOwnPropertyDescriptor(r, "value").set;
          if (i !== t && l) {
            const r = new Event("change", {
              bubbles: !0
            });
            l.call(e, t), e.dispatchEvent(r)
          }
        }), [i, t]), (0, C.jsx)(w.sG.select, {
          ...r,
          style: {
            ...R.VISUALLY_HIDDEN_STYLES,
            ...r.style
          },
          ref: o,
          defaultValue: t
        })
      }));

      function ye(e) {
        return "" === e || void 0 === e
      }

      function Re(e) {
        const t = (0, x.c)(e),
          r = l.useRef(""),
          n = l.useRef(0),
          a = l.useCallback((e => {
            const l = r.current + e;
            t(l),
              function e(t) {
                r.current = t, window.clearTimeout(n.current), "" !== t && (n.current = window.setTimeout((() => e("")), 1e3))
              }(l)
          }), [t]),
          o = l.useCallback((() => {
            r.current = "", window.clearTimeout(n.current)
          }), []);
        return l.useEffect((() => () => window.clearTimeout(n.current)), []), [r, a, o]
      }

      function Me(e, t, r) {
        const l = t.length > 1 && Array.from(t).every((e => e === t[0])) ? t[0] : t,
          n = r ? e.indexOf(r) : -1;
        let a = (o = e, i = Math.max(n, 0), o.map(((e, t) => o[(i + t) % o.length])));
        var o, i;
        1 === l.length && (a = a.filter((e => e !== r)));
        const s = a.find((e => e.textValue.toLowerCase().startsWith(l.toLowerCase())));
        return s !== r ? s : void 0
      }
      je.displayName = "SelectBubbleInput";
      var Le = V,
        Ce = G,
        Ee = X,
        Ae = q,
        Pe = U,
        Ie = W,
        Se = ae,
        _e = fe,
        ze = pe
    },
    85677: (e, t, r) => {
      r.d(t, {
        S: () => u
      });
      var l, n = r(91299),
        a = r(35303),
        o = r(75130),
        i = r(98992);

      function s(e) {
        return "function" == typeof e
      }

      function c(e, t, r, n, a, d, u) {
        if (1 === e.length && (0, o.eW)(e[0])) return [{
          type: l.literal,
          value: e[0].value
        }];
        for (var h = [], f = 0, v = e; f < v.length; f++) {
          var p = v[f];
          if ((0, o.eW)(p)) h.push({
            type: l.literal,
            value: p.value
          });
          else if ((0, o.jA)(p)) "number" == typeof d && h.push({
            type: l.literal,
            value: r.getNumberFormat(t).format(d)
          });
          else {
            var g = p.value;
            if (!a || !(g in a)) throw new i.Ei(g, u);
            var w = a[g];
            if ((0, o.Im)(p)) w && "string" != typeof w && "number" != typeof w || (w = "string" == typeof w || "number" == typeof w ? String(w) : ""), h.push({
              type: "string" == typeof w ? l.literal : l.object,
              value: w
            });
            else if ((0, o.tv)(p)) {
              var m = "string" == typeof p.style ? n.date[p.style] : (0, o.Tu)(p.style) ? p.style.parsedOptions : void 0;
              h.push({
                type: l.literal,
                value: r.getDateTimeFormat(t, m).format(w)
              })
            } else if ((0, o.Qh)(p)) m = "string" == typeof p.style ? n.time[p.style] : (0, o.Tu)(p.style) ? p.style.parsedOptions : n.time.medium, h.push({
              type: l.literal,
              value: r.getDateTimeFormat(t, m).format(w)
            });
            else if ((0, o.oF)(p))(m = "string" == typeof p.style ? n.number[p.style] : (0, o.N1)(p.style) ? p.style.parsedOptions : void 0) && m.scale && (w *= m.scale || 1), h.push({
              type: l.literal,
              value: r.getNumberFormat(t, m).format(w)
            });
            else {
              if ((0, o.xm)(p)) {
                var x = p.children,
                  b = p.value,
                  j = a[b];
                if (!s(j)) throw new i.Zo(b, "function", u);
                var y = j(c(x, t, r, n, a, d).map((function(e) {
                  return e.value
                })));
                Array.isArray(y) || (y = [y]), h.push.apply(h, y.map((function(e) {
                  return {
                    type: "string" == typeof e ? l.literal : l.object,
                    value: e
                  }
                })))
              }
              if ((0, o.Jp)(p)) {
                if (!(R = p.options[w] || p.options.other)) throw new i.$x(p.value, w, Object.keys(p.options), u);
                h.push.apply(h, c(R.value, t, r, n, a))
              } else if ((0, o.N6)(p)) {
                var R;
                if (!(R = p.options["=".concat(w)])) {
                  if (!Intl.PluralRules) throw new i.IF('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', i.O4.MISSING_INTL_API, u);
                  var M = r.getPluralRules(t, {
                    type: p.pluralType
                  }).select(w - (p.offset || 0));
                  R = p.options[M] || p.options.other
                }
                if (!R) throw new i.$x(p.value, w, Object.keys(p.options), u);
                h.push.apply(h, c(R.value, t, r, n, a, w - (p.offset || 0)))
              }
            }
          }
        }
        return (L = h).length < 2 ? L : L.reduce((function(e, t) {
          var r = e[e.length - 1];
          return r && r.type === l.literal && t.type === l.literal ? r.value += t.value : e.push(t), e
        }), []);
        var L
      }

      function d(e) {
        return {
          create: function() {
            return {
              get: function(t) {
                return e[t]
              },
              set: function(t, r) {
                e[t] = r
              }
            }
          }
        }
      }! function(e) {
        e[e.literal = 0] = "literal", e[e.object = 1] = "object"
      }(l || (l = {}));
      var u = function() {
        function e(t, r, o, i) {
          void 0 === r && (r = e.defaultLocale);
          var s, u, h, f = this;
          if (this.formatterCache = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }, this.format = function(e) {
              var t = f.formatToParts(e);
              if (1 === t.length) return t[0].value;
              var r = t.reduce((function(e, t) {
                return e.length && t.type === l.literal && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e
              }), []);
              return r.length <= 1 ? r[0] || "" : r
            }, this.formatToParts = function(e) {
              return c(f.ast, f.locales, f.formatters, f.formats, e, void 0, f.message)
            }, this.resolvedOptions = function() {
              var e;
              return {
                locale: (null === (e = f.resolvedLocale) || void 0 === e ? void 0 : e.toString()) || Intl.NumberFormat.supportedLocalesOf(f.locales)[0]
              }
            }, this.getAst = function() {
              return f.ast
            }, this.locales = r, this.resolvedLocale = e.resolveLocale(r), "string" == typeof t) {
            if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
            var v = i || {},
              p = (v.formatters, (0, n.__rest)(v, ["formatters"]));
            this.ast = e.__parse(t, (0, n.__assign)((0, n.__assign)({}, p), {
              locale: this.resolvedLocale
            }))
          } else this.ast = t;
          if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
          this.formats = (u = e.formats, (h = o) ? Object.keys(u).reduce((function(e, t) {
            var r, l;
            return e[t] = (r = u[t], (l = h[t]) ? (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, r || {}), l || {}), Object.keys(r).reduce((function(e, t) {
              return e[t] = (0, n.__assign)((0, n.__assign)({}, r[t]), l[t] || {}), e
            }), {})) : r), e
          }), (0, n.__assign)({}, u)) : u), this.formatters = i && i.formatters || (void 0 === (s = this.formatterCache) && (s = {
            number: {},
            dateTime: {},
            pluralRules: {}
          }), {
            getNumberFormat: (0, a.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.NumberFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
            }), {
              cache: d(s.number),
              strategy: a.W.variadic
            }),
            getDateTimeFormat: (0, a.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.DateTimeFormat).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
            }), {
              cache: d(s.dateTime),
              strategy: a.W.variadic
            }),
            getPluralRules: (0, a.B)((function() {
              for (var e, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
              return new((e = Intl.PluralRules).bind.apply(e, (0, n.__spreadArray)([void 0], t, !1)))
            }), {
              cache: d(s.pluralRules),
              strategy: a.W.variadic
            })
          })
        }
        return Object.defineProperty(e, "defaultLocale", {
          get: function() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
          },
          enumerable: !1,
          configurable: !0
        }), e.memoizedDefaultLocale = null, e.resolveLocale = function(e) {
          if (void 0 !== Intl.Locale) {
            var t = Intl.NumberFormat.supportedLocalesOf(e);
            return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
          }
        }, e.__parse = o.qg, e.formats = {
          number: {
            integer: {
              maximumFractionDigits: 0
            },
            currency: {
              style: "currency"
            },
            percent: {
              style: "percent"
            }
          },
          date: {
            short: {
              month: "numeric",
              day: "numeric",
              year: "2-digit"
            },
            medium: {
              month: "short",
              day: "numeric",
              year: "numeric"
            },
            long: {
              month: "long",
              day: "numeric",
              year: "numeric"
            },
            full: {
              weekday: "long",
              month: "long",
              day: "numeric",
              year: "numeric"
            }
          },
          time: {
            short: {
              hour: "numeric",
              minute: "numeric"
            },
            medium: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric"
            },
            long: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            },
            full: {
              hour: "numeric",
              minute: "numeric",
              second: "numeric",
              timeZoneName: "short"
            }
          }
        }, e
      }()
    },
    85753: (e, t, r) => {
      r.d(t, {
        J: () => a
      });
      var l = r(31985),
        n = r(71127);

      function a(e) {
        const t = (0, n.useRef)(null);
        return (0, l.N)((() => {
          t.current = e
        }), [e]), (0, n.useCallback)(((...e) => {
          const r = t.current;
          return null == r ? void 0 : r(...e)
        }), [])
      }
    },
    87791: (e, t, r) => {
      r.d(t, {
        Cc: () => s,
        wR: () => h
      });
      var l = r(71127);
      const n = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        a = l.createContext(n),
        o = l.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let i = new WeakMap;
      const s = "function" == typeof l.useId ? function(e) {
        let t = l.useId(),
          [r] = (0, l.useState)(h());
        return e || `${r?"react-aria":`react-aria${n.prefix}`}-${t}`
      } : function(e) {
        let t = (0, l.useContext)(a),
          r = function(e = !1) {
            let t = (0, l.useContext)(a),
              r = (0, l.useRef)(null);
            if (null === r.current && !e) {
              var n, o;
              let e = null === (o = l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === o || null === (n = o.ReactCurrentOwner) || void 0 === n ? void 0 : n.current;
              if (e) {
                let r = i.get(e);
                null == r ? i.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== r.state && (t.current = r.id, i.delete(e))
              }
              r.current = ++t.current
            }
            return r.current
          }(!!e),
          n = `react-aria${t.prefix}`;
        return e || `${n}-${r}`
      };

      function c() {
        return !1
      }

      function d() {
        return !0
      }

      function u(e) {
        return () => {}
      }

      function h() {
        return "function" == typeof l.useSyncExternalStore ? l.useSyncExternalStore(u, c, d) : (0, l.useContext)(o)
      }
    },
    88622: (e, t, r) => {
      r.d(t, {
        d: () => A
      });
      var l = r(54270),
        n = r(35362),
        a = r(47444),
        o = r(77425);
      let i = "default",
        s = "",
        c = new WeakMap;

      function d(e) {
        if ((0, n.un)()) {
          if ("disabled" !== i) return;
          i = "restoring", setTimeout((() => {
            (0, o.v)((() => {
              if ("restoring" === i) {
                const t = (0, a.TW)(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = s || ""), s = "", i = "default"
              }
            }))
          }), 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && c.has(e)) {
          let t = c.get(e),
            r = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[r] && (e.style[r] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), c.delete(e)
        }
      }
      var u = r(71127);
      const h = u.createContext({
        register: () => {}
      });
      h.displayName = "PressResponderContext";
      var f = r(90162),
        v = r(59194),
        p = r(99427),
        g = r(78345),
        w = r(116),
        m = r(85124),
        x = r(85753),
        b = r(98952),
        j = r(71734),
        y = r(79623),
        R = r(23908),
        M = r(97724);
      r(18429);
      var L = new WeakMap;
      class C {
        continuePropagation() {
          (0, p._)(this, L, !1)
        }
        get shouldStopPropagation() {
          return (0, f._)(this, L)
        }
        constructor(e, t, r, l) {
          var n;
          (0, v._)(this, L, {
            writable: !0,
            value: void 0
          }), (0, p._)(this, L, !0);
          let a = null !== (n = null == l ? void 0 : l.target) && void 0 !== n ? n : r.currentTarget;
          const o = null == a ? void 0 : a.getBoundingClientRect();
          let i, s, c = 0,
            d = null;
          null != r.clientX && null != r.clientY && (s = r.clientX, d = r.clientY), o && (null != s && null != d ? (i = s - o.left, c = d - o.top) : (i = o.width / 2, c = o.height / 2)), this.type = e, this.pointerType = t, this.target = r.currentTarget, this.shiftKey = r.shiftKey, this.metaKey = r.metaKey, this.ctrlKey = r.ctrlKey, this.altKey = r.altKey, this.x = i, this.y = c
        }
      }
      const E = Symbol("linkClicked");

      function A(e) {
        let {
          onPress: t,
          onPressChange: r,
          onPressStart: o,
          onPressEnd: f,
          onPressUp: v,
          onClick: p,
          isDisabled: L,
          isPressed: A,
          preventFocusOnPress: z,
          shouldCancelOnPointerExit: H,
          allowTextSelectionOnPress: T,
          ref: D,
          ...B
        } = function(e) {
          let t = (0, u.useContext)(h);
          if (t) {
            let {
              register: r,
              ...l
            } = t;
            e = (0, g.v)(l, e), r()
          }
          return (0, w.w)(t, e.ref), e
        }(e), [N, k] = (0, u.useState)(!1), V = (0, u.useRef)({
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
          addGlobalListener: O,
          removeAllGlobalListeners: G
        } = (0, m.A)(), F = (0, x.J)(((e, t) => {
          let l = V.current;
          if (L || l.didFirePressStart) return !1;
          let n = !0;
          if (l.isTriggeringEvent = !0, o) {
            let r = new C("pressstart", t, e);
            o(r), n = r.shouldStopPropagation
          }
          return r && r(!0), l.isTriggeringEvent = !1, l.didFirePressStart = !0, k(!0), n
        })), X = (0, x.J)(((e, l, n = !0) => {
          let a = V.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let o = !0;
          if (f) {
            let t = new C("pressend", l, e);
            f(t), o = t.shouldStopPropagation
          }
          if (r && r(!1), k(!1), t && n && !L) {
            let r = new C("press", l, e);
            t(r), o && (o = r.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, o
        })), q = (0, x.J)(((e, t) => {
          let r = V.current;
          if (L) return !1;
          if (v) {
            r.isTriggeringEvent = !0;
            let l = new C("pressup", t, e);
            return v(l), r.isTriggeringEvent = !1, l.shouldStopPropagation
          }
          return !0
        })), U = (0, x.J)((e => {
          let t = V.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && X(S(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, G(), T || d(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        })), K = (0, x.J)((e => {
          H && U(e)
        })), W = (0, x.J)((e => {
          null == p || p(e)
        })), $ = (0, x.J)(((e, t) => {
          if (p) {
            let r = new MouseEvent("click", e);
            (0, l.o1)(r, t), p((0, l.eg)(r))
          }
        })), Y = (0, u.useMemo)((() => {
          let e = V.current,
            t = {
              onKeyDown(t) {
                if (I(t.nativeEvent, t.currentTarget) && (0, b.sD)(t.currentTarget, (0, b.wt)(t.nativeEvent))) {
                  var l;
                  _((0, b.wt)(t.nativeEvent), t.key) && t.preventDefault();
                  let o = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", o = F(t, "keyboard");
                    let l = t.currentTarget,
                      n = t => {
                        I(t, l) && !t.repeat && (0, b.sD)(l, (0, b.wt)(t)) && e.target && q(S(e.target, t), "keyboard")
                      };
                    O((0, a.TW)(t.currentTarget), "keyup", (0, j.c)(n, r), !0)
                  }
                  o && t.stopPropagation(), t.metaKey && (0, n.cX)() && (null === (l = e.metaKeyEvents) || void 0 === l || l.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || (0, b.sD)(t.currentTarget, (0, b.wt)(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !y.Fe.isOpening) {
                  let r = !0;
                  if (L && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, R.Y)(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let l = e.pointerType || t.nativeEvent.pointerType || "virtual";
                      r = X(S(t.currentTarget, t), l, !0), e.isOverTarget = !1, W(t), U(t)
                    }
                  } else {
                    let e = F(t, "virtual"),
                      l = q(t, "virtual"),
                      n = X(t, "virtual");
                    W(t), r = e && l && n
                  }
                  e.ignoreEmulatedMouseEvents = !1, r && t.stopPropagation()
                }
              }
            },
            r = t => {
              var r;
              if (e.isPressed && e.target && I(t, e.target)) {
                var l;
                _((0, b.wt)(t), t.key) && t.preventDefault();
                let r = (0, b.wt)(t),
                  n = (0, b.sD)(e.target, (0, b.wt)(t));
                X(S(e.target, t), "keyboard", n), n && $(t, e.target), G(), "Enter" !== t.key && P(e.target) && (0, b.sD)(e.target, r) && !t[E] && (t[E] = !0, (0, y.Fe)(e.target, t, !1)), e.isPressed = !1, null === (l = e.metaKeyEvents) || void 0 === l || l.delete(t.key)
              } else if ("Meta" === t.key && (null === (r = e.metaKeyEvents) || void 0 === r ? void 0 : r.size)) {
                var n;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let r of t.values()) null === (n = e.target) || void 0 === n || n.dispatchEvent(new KeyboardEvent("keyup", r))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !(0, b.sD)(t.currentTarget, (0, b.wt)(t.nativeEvent))) return;
              if ((0, R.P)(t.nativeEvent)) return void(e.pointerType = "virtual");
              e.pointerType = t.pointerType;
              let l = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, T || function(e) {
                  if ((0, n.un)()) {
                    if ("default" === i) {
                      const t = (0, a.TW)(e);
                      s = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    i = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    c.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), l = F(t, e.pointerType);
                let d = (0, b.wt)(t.nativeEvent);
                "releasePointerCapture" in d && d.releasePointerCapture(t.pointerId), O((0, a.TW)(t.currentTarget), "pointerup", r, !1), O((0, a.TW)(t.currentTarget), "pointercancel", o, !1)
              }
              l && t.stopPropagation()
            }, t.onMouseDown = t => {
              if ((0, b.sD)(t.currentTarget, (0, b.wt)(t.nativeEvent)) && 0 === t.button) {
                if (z) {
                  let r = (0, l.LE)(t.target);
                  r && e.disposables.push(r)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              (0, b.sD)(t.currentTarget, (0, b.wt)(t.nativeEvent)) && "virtual" !== e.pointerType && 0 === t.button && q(t, e.pointerType || t.pointerType)
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, F(S(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, X(S(e.target, t), e.pointerType, !1), K(t))
            };
            let r = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ((0, b.sD)(e.target, (0, b.wt)(t)) && null != e.pointerType) {
                    let r = !1,
                      l = setTimeout((() => {
                        e.isPressed && e.target instanceof HTMLElement && (r ? U(t) : ((0, M.e)(e.target), e.target.click()))
                      }), 80);
                    O(t.currentTarget, "click", (() => r = !0), !0), e.disposables.push((() => clearTimeout(l)))
                  } else U(t);
                  e.isOverTarget = !1
                }
              },
              o = e => {
                U(e)
              };
            t.onDragStart = e => {
              (0, b.sD)(e.currentTarget, (0, b.wt)(e.nativeEvent)) && U(e)
            }
          }
          return t
        }), [O, L, z, G, T, U, K, X, F, q, W, $]);
        return (0, u.useEffect)((() => {
          let e = null == D ? void 0 : D.current;
          e && e instanceof(0, a.mD)(e).Element && "auto" === (0, a.mD)(e).getComputedStyle(e).touchAction && (e.style.touchAction = "pan-x pan-y pinch-zoom")
        }), [D]), (0, u.useEffect)((() => {
          let e = V.current;
          return () => {
            var t;
            T || d(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }), [T]), {
          isPressed: A || N,
          pressProps: (0, g.v)(B, Y)
        }
      }

      function P(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function I(e, t) {
        const {
          key: r,
          code: l
        } = e, n = t, o = n.getAttribute("role");
        return !("Enter" !== r && " " !== r && "Spacebar" !== r && "Space" !== l || n instanceof(0, a.mD)(n).HTMLInputElement && !H(n, r) || n instanceof(0, a.mD)(n).HTMLTextAreaElement || n.isContentEditable || ("link" === o || !o && P(n)) && "Enter" !== r)
      }

      function S(e, t) {
        let r = t.clientX,
          l = t.clientY;
        return {
          currentTarget: e,
          shiftKey: t.shiftKey,
          ctrlKey: t.ctrlKey,
          metaKey: t.metaKey,
          altKey: t.altKey,
          clientX: r,
          clientY: l
        }
      }

      function _(e, t) {
        return e instanceof HTMLInputElement ? !H(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : P(e)))
        }(e)
      }
      const z = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function H(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : z.has(e.type)
      }
    },
    90162: (e, t, r) => {
      r.d(t, {
        _: () => n
      });
      var l = r(50847);

      function n(e, t) {
        return function(e, t) {
          return t.get ? t.get.call(e) : t.value
        }(e, (0, l._)(e, t, "get"))
      }
    },
    92793: (e, t, r) => {
      r.d(t, {
        A: () => N
      });
      var l = r(71127);

      function n(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function a(e, t) {
        const r = Object.keys(e),
          l = Object.keys(t);
        return r.length === l.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && r.every((r => {
          const l = e[r],
            o = t[r];
          return "function" == typeof l ? `${l}` == `${o}` : n(l) && n(o) ? a(l, o) : l === o
        })))
      }

      function o(e) {
        return e.concat().sort(((e, t) => e.name > t.name ? 1 : -1)).map((e => e.options))
      }

      function i(e) {
        return "number" == typeof e
      }

      function s(e) {
        return "string" == typeof e
      }

      function c(e) {
        return "boolean" == typeof e
      }

      function d(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function u(e) {
        return Math.abs(e)
      }

      function h(e) {
        return Math.sign(e)
      }

      function f(e, t) {
        return u(e - t)
      }

      function v(e) {
        return x(e).map(Number)
      }

      function p(e) {
        return e[g(e)]
      }

      function g(e) {
        return Math.max(0, e.length - 1)
      }

      function w(e, t) {
        return t === g(e)
      }

      function m(e, t = 0) {
        return Array.from(Array(e), ((e, r) => t + r))
      }

      function x(e) {
        return Object.keys(e)
      }

      function b(e, t) {
        return [e, t].reduce(((e, t) => (x(t).forEach((r => {
          const l = e[r],
            n = t[r],
            a = d(l) && d(n);
          e[r] = a ? b(l, n) : n
        })), e)), {})
      }

      function j(e, t) {
        return void 0 !== t.MouseEvent && e instanceof t.MouseEvent
      }

      function y() {
        let e = [];
        const t = {
          add: function(r, l, n, a = {
            passive: !0
          }) {
            let o;
            if ("addEventListener" in r) r.addEventListener(l, n, a), o = () => r.removeEventListener(l, n, a);
            else {
              const e = r;
              e.addListener(n), o = () => e.removeListener(n)
            }
            return e.push(o), t
          },
          clear: function() {
            e = e.filter((e => e()))
          }
        };
        return t
      }

      function R(e = 0, t = 0) {
        const r = u(e - t);

        function l(t) {
          return t < e
        }

        function n(e) {
          return e > t
        }

        function a(e) {
          return l(e) || n(e)
        }
        return {
          length: r,
          max: t,
          min: e,
          constrain: function(r) {
            return a(r) ? l(r) ? e : t : r
          },
          reachedAny: a,
          reachedMax: n,
          reachedMin: l,
          removeOffset: function(e) {
            return r ? e - r * Math.ceil((e - t) / r) : e
          }
        }
      }

      function M(e, t, r) {
        const {
          constrain: l
        } = R(0, e), n = e + 1;
        let a = o(t);

        function o(e) {
          return r ? u((n + e) % n) : l(e)
        }

        function i() {
          return a
        }

        function s() {
          return M(e, i(), r)
        }
        const c = {
          get: i,
          set: function(e) {
            return a = o(e), c
          },
          add: function(e) {
            return s().set(i() + e)
          },
          clone: s
        };
        return c
      }

      function L(e, t, r, l, n, a, o, i, s, d, v, p, g, w, m, x, b, M, L) {
        const {
          cross: C,
          direction: E
        } = e, A = ["INPUT", "SELECT", "TEXTAREA"], P = {
          passive: !1
        }, I = y(), S = y(), _ = R(50, 225).constrain(w.measure(20)), z = {
          mouse: 300,
          touch: 400
        }, H = {
          mouse: 500,
          touch: 600
        }, T = m ? 43 : 25;
        let D = !1,
          B = 0,
          N = 0,
          k = !1,
          V = !1,
          O = !1,
          G = !1;

        function F(e) {
          if (!j(e, l) && e.touches.length >= 2) return X(e);
          const t = a.readPoint(e),
            r = a.readPoint(e, C),
            o = f(t, B),
            s = f(r, N);
          if (!V && !G) {
            if (!e.cancelable) return X(e);
            if (V = o > s, !V) return X(e)
          }
          const c = a.pointerMove(e);
          o > x && (O = !0), d.useFriction(.3).useDuration(.75), i.start(), n.add(E(c)), e.preventDefault()
        }

        function X(e) {
          const t = v.byDistance(0, !1).index !== p.get(),
            r = a.pointerUp(e) * (m ? H : z)[G ? "mouse" : "touch"],
            l = function(e, t) {
              const r = p.add(-1 * h(e)),
                l = v.byDistance(e, !m).distance;
              return m || u(e) < _ ? l : b && t ? .5 * l : v.byIndex(r.get(), 0).distance
            }(E(r), t),
            n = function(e, t) {
              if (0 === e || 0 === t) return 0;
              if (u(e) <= u(t)) return 0;
              const r = f(u(e), u(t));
              return u(r / e)
            }(r, l),
            o = T - 10 * n,
            i = M + n / 50;
          V = !1, k = !1, S.clear(), d.useDuration(o).useFriction(i), s.distance(l, !m), G = !1, g.emit("pointerUp")
        }

        function q(e) {
          O && (e.stopPropagation(), e.preventDefault(), O = !1)
        }
        return {
          init: function(e) {
            if (!L) return;

            function i(i) {
              (c(L) || L(e, i)) && function(e) {
                const i = j(e, l);
                G = i, O = m && i && !e.buttons && D, D = f(n.get(), o.get()) >= 2, i && 0 !== e.button || function(e) {
                  const t = e.nodeName || "";
                  return A.includes(t)
                }(e.target) || (k = !0, a.pointerDown(e), d.useFriction(0).useDuration(0), n.set(o), function() {
                  const e = G ? r : t;
                  S.add(e, "touchmove", F, P).add(e, "touchend", X).add(e, "mousemove", F, P).add(e, "mouseup", X)
                }(), B = a.readPoint(e), N = a.readPoint(e, C), g.emit("pointerDown"))
              }(i)
            }
            const s = t;
            I.add(s, "dragstart", (e => e.preventDefault()), P).add(s, "touchmove", (() => {}), P).add(s, "touchend", (() => {})).add(s, "touchstart", i).add(s, "mousedown", i).add(s, "touchcancel", X).add(s, "contextmenu", X).add(s, "click", q, !0)
          },
          destroy: function() {
            I.clear(), S.clear()
          },
          pointerDown: function() {
            return k
          }
        }
      }

      function C(e, t) {
        let r, l;

        function n(e) {
          return e.timeStamp
        }

        function a(r, l) {
          const n = "client" + ("x" === (l || e.scroll) ? "X" : "Y");
          return (j(r, t) ? r : r.touches[0])[n]
        }
        return {
          pointerDown: function(e) {
            return r = e, l = e, a(e)
          },
          pointerMove: function(e) {
            const t = a(e) - a(l),
              o = n(e) - n(r) > 170;
            return l = e, o && (r = e), t
          },
          pointerUp: function(e) {
            if (!r || !l) return 0;
            const t = a(l) - a(r),
              o = n(e) - n(r),
              i = n(e) - n(l) > 170,
              s = t / o;
            return o && !i && u(s) > .1 ? s : 0
          },
          readPoint: a
        }
      }

      function E(e, t, r, l, n, a, o) {
        const i = [e].concat(l);
        let s, d, h = [],
          f = !1;

        function v(e) {
          return n.measureSize(o.measure(e))
        }
        return {
          init: function(n) {
            a && (d = v(e), h = l.map(v), s = new ResizeObserver((r => {
              (c(a) || a(n, r)) && function(r) {
                for (const a of r) {
                  if (f) return;
                  const r = a.target === e,
                    o = l.indexOf(a.target),
                    i = r ? d : h[o];
                  if (u(v(r ? e : l[o]) - i) >= .5) {
                    n.reInit(), t.emit("resize");
                    break
                  }
                }
              }(r)
            })), r.requestAnimationFrame((() => {
              i.forEach((e => s.observe(e)))
            })))
          },
          destroy: function() {
            f = !0, s && s.disconnect()
          }
        }
      }

      function A(e, t, r, l, n) {
        const a = n.measure(10),
          o = n.measure(50),
          i = R(.1, .99);
        let s = !1;

        function c() {
          return !s && !!e.reachedAny(r.get()) && !!e.reachedAny(t.get())
        }
        return {
          shouldConstrain: c,
          constrain: function(n) {
            if (!c()) return;
            const s = e.reachedMin(t.get()) ? "min" : "max",
              d = u(e[s] - t.get()),
              h = r.get() - t.get(),
              f = i.constrain(d / o);
            r.subtract(h * f), !n && u(h) < a && (r.set(e.constrain(r.get())), l.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            s = !e
          }
        }
      }

      function P(e, t, r, l) {
        const n = t.min + .1,
          a = t.max + .1,
          {
            reachedMin: o,
            reachedMax: i
          } = R(n, a);
        return {
          loop: function(t) {
            if (! function(e) {
                return 1 === e ? i(r.get()) : -1 === e && o(r.get())
              }(t)) return;
            const n = e * (-1 * t);
            l.forEach((e => e.add(n)))
          }
        }
      }

      function I(e) {
        let t = e;

        function r(e) {
          return i(e) ? e : e.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(e) {
            t = r(e)
          },
          add: function(e) {
            t += r(e)
          },
          subtract: function(e) {
            t -= r(e)
          }
        }
      }

      function S(e, t) {
        const r = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          l = t.style;
        let n = null,
          a = !1;
        return {
          clear: function() {
            a || (l.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (a) return;
            const o = (i = e.direction(t), Math.round(100 * i) / 100);
            var i;
            o !== n && (l.transform = r(o), n = o)
          },
          toggleActive: function(e) {
            a = !e
          }
        }
      }

      function _(e, t, r, l, n, a, o, i, s) {
        const c = v(n),
          d = v(n).reverse(),
          u = function() {
            const e = o[0];
            return p(f(d, e), r, !1)
          }().concat(function() {
            const e = t - o[0] - 1;
            return p(f(c, e), -r, !0)
          }());

        function h(e, t) {
          return e.reduce(((e, t) => e - n[t]), t)
        }

        function f(e, t) {
          return e.reduce(((e, r) => h(e, t) > 0 ? e.concat([r]) : e), [])
        }

        function p(n, o, c) {
          const d = function(e) {
            return a.map(((r, n) => ({
              start: r - l[n] + .5 + e,
              end: r + t - .5 + e
            })))
          }(o);
          return n.map((t => {
            const l = c ? 0 : -r,
              n = c ? r : 0,
              a = c ? "end" : "start",
              o = d[t][a];
            return {
              index: t,
              loopPoint: o,
              slideLocation: I(-1),
              translate: S(e, s[t]),
              target: () => i.get() > o ? l : n
            }
          }))
        }
        return {
          canLoop: function() {
            return u.every((({
              index: e
            }) => h(c.filter((t => t !== e)), t) <= .1))
          },
          clear: function() {
            u.forEach((e => e.translate.clear()))
          },
          loop: function() {
            u.forEach((e => {
              const {
                target: t,
                translate: r,
                slideLocation: l
              } = e, n = t();
              n !== l.get() && (r.to(n), l.set(n))
            }))
          },
          loopPoints: u
        }
      }

      function z(e, t, r) {
        let l, n = !1;
        return {
          init: function(a) {
            r && (l = new MutationObserver((e => {
              n || (c(r) || r(a, e)) && function(e) {
                for (const r of e)
                  if ("childList" === r.type) {
                    a.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(e)
            })), l.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            l && l.disconnect(), n = !0
          }
        }
      }

      function H(e, t, r, l, n, a, o) {
        const {
          align: d,
          axis: b,
          direction: j,
          startIndex: H,
          loop: T,
          duration: D,
          dragFree: B,
          dragThreshold: N,
          inViewThreshold: k,
          slidesToScroll: V,
          skipSnaps: O,
          containScroll: G,
          watchResize: F,
          watchSlides: X,
          watchDrag: q,
          watchFocus: U
        } = a, K = {
          measure: function(e) {
            const {
              offsetTop: t,
              offsetLeft: r,
              offsetWidth: l,
              offsetHeight: n
            } = e;
            return {
              top: t,
              right: r + l,
              bottom: t + n,
              left: r,
              width: l,
              height: n
            }
          }
        }, W = K.measure(t), $ = r.map(K.measure), Y = function(e, t) {
          const r = "rtl" === t,
            l = "y" === e,
            n = !l && r ? -1 : 1;
          return {
            scroll: l ? "y" : "x",
            cross: l ? "x" : "y",
            startEdge: l ? "top" : r ? "right" : "left",
            endEdge: l ? "bottom" : r ? "left" : "right",
            measureSize: function(e) {
              const {
                height: t,
                width: r
              } = e;
              return l ? t : r
            },
            direction: function(e) {
              return e * n
            }
          }
        }(b, j), Z = Y.measureSize(W), Q = function(e) {
          return {
            measure: function(t) {
              return e * (t / 100)
            }
          }
        }(Z), J = function(e, t) {
          const r = {
            start: function() {
              return 0
            },
            center: function(e) {
              return l(e) / 2
            },
            end: l
          };

          function l(e) {
            return t - e
          }
          return {
            measure: function(l, n) {
              return s(e) ? r[e](l) : e(t, l, n)
            }
          }
        }(d, Z), ee = !T && !!G, te = T || !!G, {
          slideSizes: re,
          slideSizesWithGaps: le,
          startGap: ne,
          endGap: ae
        } = function(e, t, r, l, n, a) {
          const {
            measureSize: o,
            startEdge: i,
            endEdge: s
          } = e, c = r[0] && n, d = function() {
            if (!c) return 0;
            const e = r[0];
            return u(t[i] - e[i])
          }(), h = function() {
            if (!c) return 0;
            const e = a.getComputedStyle(p(l));
            return parseFloat(e.getPropertyValue(`margin-${s}`))
          }(), f = r.map(o), v = r.map(((e, t, r) => {
            const l = !t,
              n = w(r, t);
            return l ? f[t] + d : n ? f[t] + h : r[t + 1][i] - e[i]
          })).map(u);
          return {
            slideSizes: f,
            slideSizesWithGaps: v,
            startGap: d,
            endGap: h
          }
        }(Y, W, $, r, te, n), oe = function(e, t, r, l, n, a, o, s, c) {
          const {
            startEdge: d,
            endEdge: h,
            direction: f
          } = e, w = i(r);
          return {
            groupSlides: function(e) {
              return w ? function(e, t) {
                return v(e).filter((e => e % t == 0)).map((r => e.slice(r, r + t)))
              }(e, r) : function(e) {
                return e.length ? v(e).reduce(((r, i, v) => {
                  const w = p(r) || 0,
                    m = 0 === w,
                    x = i === g(e),
                    b = n[d] - a[w][d],
                    j = n[d] - a[i][h],
                    y = !l && m ? f(o) : 0,
                    R = u(j - (!l && x ? f(s) : 0) - (b + y));
                  return v && R > t + c && r.push(i), x && r.push(e.length), r
                }), []).map(((t, r, l) => {
                  const n = Math.max(l[r - 1] || 0);
                  return e.slice(n, t)
                })) : []
              }(e)
            }
          }
        }(Y, Z, V, T, W, $, ne, ae, 2), {
          snaps: ie,
          snapsAligned: se
        } = function(e, t, r, l, n) {
          const {
            startEdge: a,
            endEdge: o
          } = e, {
            groupSlides: i
          } = n, s = i(l).map((e => p(e)[o] - e[0][a])).map(u).map(t.measure), c = l.map((e => r[a] - e[a])).map((e => -u(e))), d = i(c).map((e => e[0])).map(((e, t) => e + s[t]));
          return {
            snaps: c,
            snapsAligned: d
          }
        }(Y, J, W, $, oe), ce = -p(ie) + p(le), {
          snapsContained: de,
          scrollContainLimit: ue
        } = function(e, t, r, l) {
          const n = R(-t + e, 0),
            a = r.map(((e, t) => {
              const {
                min: l,
                max: a
              } = n, o = n.constrain(e), s = !t, c = w(r, t);
              return s ? a : c || i(l, o) ? l : i(a, o) ? a : o
            })).map((e => parseFloat(e.toFixed(3)))),
            o = function() {
              const e = a[0],
                t = p(a);
              return R(a.lastIndexOf(e), a.indexOf(t) + 1)
            }();

          function i(e, t) {
            return f(e, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= e + 2) return [n.max];
              if ("keepSnaps" === l) return a;
              const {
                min: r,
                max: i
              } = o;
              return a.slice(r, i)
            }(),
            scrollContainLimit: o
          }
        }(Z, ce, se, G), he = ee ? de : se, {
          limit: fe
        } = function(e, t, r) {
          const l = t[0];
          return {
            limit: R(r ? l - e : p(t), l)
          }
        }(ce, he, T), ve = M(g(he), H, T), pe = ve.clone(), ge = v(r), we = function(e, t, r, l) {
          const n = y(),
            a = 1e3 / 60;
          let o = null,
            i = 0,
            s = 0;

          function c(e) {
            if (!s) return;
            o || (o = e, r(), r());
            const n = e - o;
            for (o = e, i += n; i >= a;) r(), i -= a;
            l(i / a), s && (s = t.requestAnimationFrame(c))
          }

          function d() {
            t.cancelAnimationFrame(s), o = null, i = 0, s = 0
          }
          return {
            init: function() {
              n.add(e, "visibilitychange", (() => {
                e.hidden && (o = null, i = 0)
              }))
            },
            destroy: function() {
              d(), n.clear()
            },
            start: function() {
              s || (s = t.requestAnimationFrame(c))
            },
            stop: d,
            update: r,
            render: l
          }
        }(l, n, (() => (({
          dragHandler: e,
          scrollBody: t,
          scrollBounds: r,
          options: {
            loop: l
          }
        }) => {
          l || r.constrain(e.pointerDown()), t.seek()
        })(Se)), (e => (({
          scrollBody: e,
          translate: t,
          location: r,
          offsetLocation: l,
          previousLocation: n,
          scrollLooper: a,
          slideLooper: o,
          dragHandler: i,
          animation: s,
          eventHandler: c,
          scrollBounds: d,
          options: {
            loop: u
          }
        }, h) => {
          const f = e.settled(),
            v = !d.shouldConstrain(),
            p = u ? f : f && v,
            g = p && !i.pointerDown();
          g && s.stop();
          const w = r.get() * h + n.get() * (1 - h);
          l.set(w), u && (a.loop(e.direction()), o.loop()), t.to(l.get()), g && c.emit("settle"), p || c.emit("scroll")
        })(Se, e))), me = he[ve.get()], xe = I(me), be = I(me), je = I(me), ye = I(me), Re = function(e, t, r, l, n) {
          let a = 0,
            o = 0,
            i = n,
            s = .68,
            c = e.get(),
            d = 0;

          function f(e) {
            return i = e, p
          }

          function v(e) {
            return s = e, p
          }
          const p = {
            direction: function() {
              return o
            },
            duration: function() {
              return i
            },
            velocity: function() {
              return a
            },
            seek: function() {
              const t = l.get() - e.get();
              let n = 0;
              return i ? (r.set(e), a += t / i, a *= s, c += a, e.add(a), n = c - d) : (a = 0, r.set(l), e.set(l), n = t), o = h(n), d = c, p
            },
            settled: function() {
              return u(l.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return v(.68)
            },
            useBaseDuration: function() {
              return f(n)
            },
            useFriction: v,
            useDuration: f
          };
          return p
        }(xe, je, be, ye, D), Me = function(e, t, r, l, n) {
          const {
            reachedAny: a,
            removeOffset: o,
            constrain: i
          } = l;

          function s(e) {
            return e.concat().sort(((e, t) => u(e) - u(t)))[0]
          }

          function c(t, l) {
            const n = [t, t + r, t - r];
            if (!e) return t;
            if (!l) return s(n);
            const a = n.filter((e => h(e) === l));
            return a.length ? s(a) : p(n) - r
          }
          return {
            byDistance: function(r, l) {
              const s = n.get() + r,
                {
                  index: d,
                  distance: h
                } = function(r) {
                  const l = e ? o(r) : i(r),
                    n = t.map(((e, t) => ({
                      diff: c(e - l, 0),
                      index: t
                    }))).sort(((e, t) => u(e.diff) - u(t.diff))),
                    {
                      index: a
                    } = n[0];
                  return {
                    index: a,
                    distance: l
                  }
                }(s),
                f = !e && a(s);
              return !l || f ? {
                index: d,
                distance: r
              } : {
                index: d,
                distance: r + c(t[d] - h, 0)
              }
            },
            byIndex: function(e, r) {
              return {
                index: e,
                distance: c(t[e] - n.get(), r)
              }
            },
            shortcut: c
          }
        }(T, he, ce, fe, ye), Le = function(e, t, r, l, n, a, o) {
          function i(n) {
            const i = n.distance,
              s = n.index !== t.get();
            a.add(i), i && (l.duration() ? e.start() : (e.update(), e.render(1), e.update())), s && (r.set(t.get()), t.set(n.index), o.emit("select"))
          }
          return {
            distance: function(e, t) {
              i(n.byDistance(e, t))
            },
            index: function(e, r) {
              const l = t.clone().set(e);
              i(n.byIndex(l.get(), r))
            }
          }
        }(we, ve, pe, Re, Me, ye, o), Ce = function(e) {
          const {
            max: t,
            length: r
          } = e;
          return {
            get: function(e) {
              return r ? (e - t) / -r : 0
            }
          }
        }(fe), Ee = y(), Ae = function(e, t, r, l) {
          const n = {};
          let a, o = null,
            i = null,
            s = !1;
          return {
            init: function() {
              a = new IntersectionObserver((e => {
                s || (e.forEach((e => {
                  const r = t.indexOf(e.target);
                  n[r] = e
                })), o = null, i = null, r.emit("slidesInView"))
              }), {
                root: e.parentElement,
                threshold: l
              }), t.forEach((e => a.observe(e)))
            },
            destroy: function() {
              a && a.disconnect(), s = !0
            },
            get: function(e = !0) {
              if (e && o) return o;
              if (!e && i) return i;
              const t = function(e) {
                return x(n).reduce(((t, r) => {
                  const l = parseInt(r),
                    {
                      isIntersecting: a
                    } = n[l];
                  return (e && a || !e && !a) && t.push(l), t
                }), [])
              }(e);
              return e && (o = t), e || (i = t), t
            }
          }
        }(t, r, o, k), {
          slideRegistry: Pe
        } = function(e, t, r, l, n, a) {
          const {
            groupSlides: o
          } = n, {
            min: i,
            max: s
          } = l;
          return {
            slideRegistry: function() {
              const l = o(a),
                n = !e || "keepSnaps" === t;
              return 1 === r.length ? [a] : n ? l : l.slice(i, s).map(((e, t, r) => {
                const l = !t,
                  n = w(r, t);
                return l ? m(p(r[0]) + 1) : n ? m(g(a) - p(r)[0] + 1, p(r)[0]) : e
              }))
            }()
          }
        }(ee, G, he, ue, oe, ge), Ie = function(e, t, r, l, n, a, o, s) {
          const d = {
            passive: !0,
            capture: !0
          };
          let u = 0;

          function h(e) {
            "Tab" === e.code && (u = (new Date).getTime())
          }
          return {
            init: function(f) {
              s && (a.add(document, "keydown", h, !1), t.forEach(((t, h) => {
                a.add(t, "focus", (t => {
                  (c(s) || s(f, t)) && function(t) {
                    if ((new Date).getTime() - u > 10) return;
                    o.emit("slideFocusStart"), e.scrollLeft = 0;
                    const a = r.findIndex((e => e.includes(t)));
                    i(a) && (n.useDuration(0), l.index(a, 0), o.emit("slideFocus"))
                  }(h)
                }), d)
              })))
            }
          }
        }(e, r, Pe, Le, Re, Ee, o, U), Se = {
          ownerDocument: l,
          ownerWindow: n,
          eventHandler: o,
          containerRect: W,
          slideRects: $,
          animation: we,
          axis: Y,
          dragHandler: L(Y, e, l, n, ye, C(Y, n), xe, we, Le, Re, Me, ve, o, Q, B, N, O, .68, q),
          eventStore: Ee,
          percentOfView: Q,
          index: ve,
          indexPrevious: pe,
          limit: fe,
          location: xe,
          offsetLocation: je,
          previousLocation: be,
          options: a,
          resizeHandler: E(t, o, n, r, Y, F, K),
          scrollBody: Re,
          scrollBounds: A(fe, je, ye, Re, Q),
          scrollLooper: P(ce, fe, je, [xe, je, be, ye]),
          scrollProgress: Ce,
          scrollSnapList: he.map(Ce.get),
          scrollSnaps: he,
          scrollTarget: Me,
          scrollTo: Le,
          slideLooper: _(Y, Z, ce, re, le, ie, he, je, r),
          slideFocus: Ie,
          slidesHandler: z(t, o, X),
          slidesInView: Ae,
          slideIndexes: ge,
          slideRegistry: Pe,
          slidesToScroll: oe,
          target: ye,
          translate: S(Y, t)
        };
        return Se
      }
      const T = {
        align: "center",
        axis: "x",
        container: null,
        slides: null,
        containScroll: "trimSnaps",
        direction: "ltr",
        slidesToScroll: 1,
        inViewThreshold: 0,
        breakpoints: {},
        dragFree: !1,
        dragThreshold: 10,
        loop: !1,
        skipSnaps: !1,
        duration: 25,
        startIndex: 0,
        active: !0,
        watchDrag: !0,
        watchResize: !0,
        watchSlides: !0,
        watchFocus: !0
      };

      function D(e) {
        function t(e, t) {
          return b(e, t || {})
        }
        return {
          mergeOptions: t,
          optionsAtMedia: function(r) {
            const l = r.breakpoints || {},
              n = x(l).filter((t => e.matchMedia(t).matches)).map((e => l[e])).reduce(((e, r) => t(e, r)), {});
            return t(r, n)
          },
          optionsMediaQueries: function(t) {
            return t.map((e => x(e.breakpoints || {}))).reduce(((e, t) => e.concat(t)), []).map(e.matchMedia)
          }
        }
      }

      function B(e, t, r) {
        const l = e.ownerDocument,
          n = l.defaultView,
          a = D(n),
          o = function(e) {
            let t = [];
            return {
              init: function(r, l) {
                return t = l.filter((({
                  options: t
                }) => !1 !== e.optionsAtMedia(t).active)), t.forEach((t => t.init(r, e))), l.reduce(((e, t) => Object.assign(e, {
                  [t.name]: t
                })), {})
              },
              destroy: function() {
                t = t.filter((e => e.destroy()))
              }
            }
          }(a),
          i = y(),
          c = function() {
            let e, t = {};

            function r(e) {
              return t[e] || []
            }
            const l = {
              init: function(t) {
                e = t
              },
              emit: function(t) {
                return r(t).forEach((r => r(e, t))), l
              },
              off: function(e, n) {
                return t[e] = r(e).filter((e => e !== n)), l
              },
              on: function(e, n) {
                return t[e] = r(e).concat([n]), l
              },
              clear: function() {
                t = {}
              }
            };
            return l
          }(),
          {
            mergeOptions: d,
            optionsAtMedia: u,
            optionsMediaQueries: h
          } = a,
          {
            on: f,
            off: v,
            emit: p
          } = c,
          g = A;
        let w, m, x, b, j = !1,
          R = d(T, B.globalOptions),
          M = d(R),
          L = [];

        function C(t) {
          const r = H(e, x, b, l, n, t, c);
          return t.loop && !r.slideLooper.canLoop() ? C(Object.assign({}, t, {
            loop: !1
          })) : r
        }

        function E(t, r) {
          j || (R = d(R, t), M = u(R), L = r || L, function() {
            const {
              container: t,
              slides: r
            } = M, l = s(t) ? e.querySelector(t) : t;
            x = l || e.children[0];
            const n = s(r) ? x.querySelectorAll(r) : r;
            b = [].slice.call(n || x.children)
          }(), w = C(M), h([R, ...L.map((({
            options: e
          }) => e))]).forEach((e => i.add(e, "change", A))), M.active && (w.translate.to(w.location.get()), w.animation.init(), w.slidesInView.init(), w.slideFocus.init(_), w.eventHandler.init(_), w.resizeHandler.init(_), w.slidesHandler.init(_), w.options.loop && w.slideLooper.loop(), x.offsetParent && b.length && w.dragHandler.init(_), m = o.init(_, L)))
        }

        function A(e, t) {
          const r = S();
          P(), E(d({
            startIndex: r
          }, e), t), c.emit("reInit")
        }

        function P() {
          w.dragHandler.destroy(), w.eventStore.clear(), w.translate.clear(), w.slideLooper.clear(), w.resizeHandler.destroy(), w.slidesHandler.destroy(), w.slidesInView.destroy(), w.animation.destroy(), o.destroy(), i.clear()
        }

        function I(e, t, r) {
          M.active && !j && (w.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : M.duration), w.scrollTo.index(e, r || 0))
        }

        function S() {
          return w.index.get()
        }
        const _ = {
          canScrollNext: function() {
            return w.index.add(1).get() !== S()
          },
          canScrollPrev: function() {
            return w.index.add(-1).get() !== S()
          },
          containerNode: function() {
            return x
          },
          internalEngine: function() {
            return w
          },
          destroy: function() {
            j || (j = !0, i.clear(), P(), c.emit("destroy"), c.clear())
          },
          off: v,
          on: f,
          emit: p,
          plugins: function() {
            return m
          },
          previousScrollSnap: function() {
            return w.indexPrevious.get()
          },
          reInit: g,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            I(w.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            I(w.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return w.scrollProgress.get(w.offsetLocation.get())
          },
          scrollSnapList: function() {
            return w.scrollSnapList
          },
          scrollTo: I,
          selectedScrollSnap: S,
          slideNodes: function() {
            return b
          },
          slidesInView: function() {
            return w.slidesInView.get()
          },
          slidesNotInView: function() {
            return w.slidesInView.get(!1)
          }
        };
        return E(t, r), setTimeout((() => c.emit("init")), 0), _
      }

      function N(e = {}, t = []) {
        const r = (0, l.useRef)(e),
          n = (0, l.useRef)(t),
          [i, s] = (0, l.useState)(),
          [c, d] = (0, l.useState)(),
          u = (0, l.useCallback)((() => {
            i && i.reInit(r.current, n.current)
          }), [i]);
        return (0, l.useEffect)((() => {
          a(r.current, e) || (r.current = e, u())
        }), [e, u]), (0, l.useEffect)((() => {
          (function(e, t) {
            if (e.length !== t.length) return !1;
            const r = o(e),
              l = o(t);
            return r.every(((e, t) => a(e, l[t])))
          })(n.current, t) || (n.current = t, u())
        }), [t, u]), (0, l.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && c) {
            B.globalOptions = N.globalOptions;
            const e = B(c, r.current, n.current);
            return s(e), () => e.destroy()
          }
          s(void 0)
        }), [c, s]), [d, i]
      }
      B.globalOptions = void 0, N.globalOptions = void 0
    },
    93773: (e, t, r) => {
      r.d(t, {
        K: () => n
      });
      var l = r(75305);

      function n(e, t, r) {
        let {
          labelProps: n,
          inputProps: a,
          isSelected: o,
          isPressed: i,
          isDisabled: s,
          isReadOnly: c
        } = (0, l.e)(e, t, r);
        return {
          labelProps: n,
          inputProps: {
            ...a,
            role: "switch",
            checked: o
          },
          isSelected: o,
          isPressed: i,
          isDisabled: s,
          isReadOnly: c
        }
      }
    },
    94903: (e, t, r) => {
      function l(e = {}) {
        let t, r = [];
        const l = ["select", "slideFocus"];

        function n() {
          const {
            slideRegistry: e
          } = t.internalEngine(), l = e[t.selectedScrollSnap()];
          return l ? l.map((e => r[e])).reduce(((e, t) => Math.max(e, t)), 0) : null
        }

        function a() {
          null !== n() && (t.containerNode().style.height = `${n()}px`)
        }
        return {
          name: "autoHeight",
          options: e,
          init: function(e) {
            t = e;
            const {
              options: {
                axis: n
              },
              slideRects: o
            } = t.internalEngine();
            "y" !== n && (r = o.map((e => e.height)), l.forEach((e => t.on(e, a))), a())
          },
          destroy: function() {
            l.forEach((e => t.off(e, a)));
            const e = t.containerNode();
            e.style.height = "", e.getAttribute("style") || e.removeAttribute("style")
          }
        }
      }
      r.d(t, {
        A: () => l
      }), l.globalOptions = void 0
    },
    97724: (e, t, r) => {
      function l(e) {
        if (function() {
            if (null == n) {
              n = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return n = !0, !0
                  }
                })
              } catch {}
            }
            return n
          }()) e.focus({
          preventScroll: !0
        });
        else {
          let t = function(e) {
            let t = e.parentNode,
              r = [],
              l = document.scrollingElement || document.documentElement;
            for (; t instanceof HTMLElement && t !== l;)(t.offsetHeight < t.scrollHeight || t.offsetWidth < t.scrollWidth) && r.push({
              element: t,
              scrollTop: t.scrollTop,
              scrollLeft: t.scrollLeft
            }), t = t.parentNode;
            return l instanceof HTMLElement && r.push({
              element: l,
              scrollTop: l.scrollTop,
              scrollLeft: l.scrollLeft
            }), r
          }(e);
          e.focus(),
            function(e) {
              for (let {
                  element: t,
                  scrollTop: r,
                  scrollLeft: l
                }
                of e) t.scrollTop = r, t.scrollLeft = l
            }(t)
        }
      }
      r.d(t, {
        e: () => l
      });
      let n = null
    },
    98952: (e, t, r) => {
      r.d(t, {
        bq: () => o,
        sD: () => a,
        wt: () => i
      });
      var l = r(47444),
        n = r(75463);

      function a(e, t) {
        if (!(0, n.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let r = t;
        for (; null !== r;) {
          if (r === e) return !0;
          r = "SLOT" === r.tagName && r.assignedSlot ? r.assignedSlot.parentNode : (0, l.Ng)(r) ? r.host : r.parentNode
        }
        return !1
      }
      const o = (e = document) => {
        var t;
        if (!(0, n.Nf)()) return e.activeElement;
        let r = e.activeElement;
        for (; r && "shadowRoot" in r && (null === (t = r.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) r = r.shadowRoot.activeElement;
        return r
      };

      function i(e) {
        return (0, n.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }
    },
    98992: (e, t, r) => {
      r.d(t, {
        $x: () => o,
        Ei: () => s,
        IF: () => a,
        O4: () => l,
        Zo: () => i
      });
      var l, n = r(91299);
      ! function(e) {
        e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API"
      }(l || (l = {}));
      var a = function(e) {
          function t(t, r, l) {
            var n = e.call(this, t) || this;
            return n.code = r, n.originalMessage = l, n
          }
          return (0, n.__extends)(t, e), t.prototype.toString = function() {
            return "[formatjs Error: ".concat(this.code, "] ").concat(this.message)
          }, t
        }(Error),
        o = function(e) {
          function t(t, r, n, a) {
            return e.call(this, 'Invalid values for "'.concat(t, '": "').concat(r, '". Options are "').concat(Object.keys(n).join('", "'), '"'), l.INVALID_VALUE, a) || this
          }
          return (0, n.__extends)(t, e), t
        }(a),
        i = function(e) {
          function t(t, r, n) {
            return e.call(this, 'Value for "'.concat(t, '" must be of type ').concat(r), l.INVALID_VALUE, n) || this
          }
          return (0, n.__extends)(t, e), t
        }(a),
        s = function(e) {
          function t(t, r) {
            return e.call(this, 'The intl string context variable "'.concat(t, '" was not provided to the string "').concat(r, '"'), l.MISSING_VALUE, r) || this
          }
          return (0, n.__extends)(t, e), t
        }(a)
    },
    99427: (e, t, r) => {
      r.d(t, {
        _: () => n
      });
      var l = r(50847);

      function n(e, t, r) {
        return function(e, t, r) {
          if (t.set) t.set.call(e, r);
          else {
            if (!t.writable) throw new TypeError("attempted to set read only private field");
            t.value = r
          }
        }(e, (0, l._)(e, t, "set"), r), r
      }
    }
  }
]);