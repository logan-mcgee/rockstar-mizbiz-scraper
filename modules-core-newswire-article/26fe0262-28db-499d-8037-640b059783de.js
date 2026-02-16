try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "26fe0262-28db-499d-8037-640b059783de", e._sentryDebugIdIdentifier = "sentry-dbid-26fe0262-28db-499d-8037-640b059783de")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [7642], {
    8324: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      let r = new Map,
        o = new Set;

      function i() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let i = r.get(n.target);
          if (i && (i.delete(n.propertyName), 0 === i.size && (n.target.removeEventListener("transitioncancel", t), r.delete(n.target)), 0 === r.size)) {
            for (let e of o) e();
            o.clear()
          }
        };
        document.body.addEventListener("transitionrun", n => {
          if (!e(n) || !n.target) return;
          let o = r.get(n.target);
          o || (o = new Set, r.set(n.target, o), n.target.addEventListener("transitioncancel", t, {
            once: !0
          })), o.add(n.propertyName)
        }), document.body.addEventListener("transitionend", t)
      }

      function a(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of r) "isConnected" in e && !e.isConnected && r.delete(e)
          }(), 0 === r.size ? e() : o.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? i() : document.addEventListener("DOMContentLoaded", i))
    },
    11021: (e, t, n) => {
      n.d(t, {
        w: () => o
      });
      var r = n(28830);

      function o(e, t) {
        (0, r.N)(() => {
          if (e && e.ref && t) return e.ref.current = t.current, () => {
            e.ref && (e.ref.current = null)
          }
        })
      }
    },
    13569: (e, t, n) => {
      n.d(t, {
        bq: () => a,
        sD: () => i,
        wt: () => s
      });
      var r = n(62993),
        o = n(35412);

      function i(e, t) {
        if (!(0, o.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let n = t;
        for (; null !== n;) {
          if (n === e) return !0;
          n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, r.Ng)(n) ? n.host : n.parentNode
        }
        return !1
      }
      const a = (e = document) => {
        var t;
        if (!(0, o.Nf)()) return e.activeElement;
        let n = e.activeElement;
        for (; n && "shadowRoot" in n && (null === (t = n.shadowRoot) || void 0 === t ? void 0 : t.activeElement);) n = n.shadowRoot.activeElement;
        return n
      };

      function s(e) {
        return (0, o.Nf)() && e.target.shadowRoot && e.composedPath ? e.composedPath()[0] : e.target
      }
    },
    16859: (e, t) => {
      var n = "function" == typeof Symbol && Symbol.for,
        r = n ? Symbol.for("react.element") : 60103,
        o = n ? Symbol.for("react.portal") : 60106,
        i = n ? Symbol.for("react.fragment") : 60107,
        a = n ? Symbol.for("react.strict_mode") : 60108,
        s = n ? Symbol.for("react.profiler") : 60114,
        l = n ? Symbol.for("react.provider") : 60109,
        c = n ? Symbol.for("react.context") : 60110,
        u = n ? Symbol.for("react.async_mode") : 60111,
        f = n ? Symbol.for("react.concurrent_mode") : 60111,
        d = n ? Symbol.for("react.forward_ref") : 60112,
        p = n ? Symbol.for("react.suspense") : 60113,
        m = n ? Symbol.for("react.suspense_list") : 60120,
        g = n ? Symbol.for("react.memo") : 60115,
        y = n ? Symbol.for("react.lazy") : 60116,
        v = n ? Symbol.for("react.block") : 60121,
        h = n ? Symbol.for("react.fundamental") : 60117,
        b = n ? Symbol.for("react.responder") : 60118,
        w = n ? Symbol.for("react.scope") : 60119;

      function E(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case r:
              switch (e = e.type) {
                case u:
                case f:
                case i:
                case s:
                case a:
                case p:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case c:
                    case d:
                    case y:
                    case g:
                    case l:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function T(e) {
        return E(e) === f
      }
      t.AsyncMode = u, t.ConcurrentMode = f, t.ContextConsumer = c, t.ContextProvider = l, t.Element = r, t.ForwardRef = d, t.Fragment = i, t.Lazy = y, t.Memo = g, t.Portal = o, t.Profiler = s, t.StrictMode = a, t.Suspense = p, t.isAsyncMode = function(e) {
        return T(e) || E(e) === u
      }, t.isConcurrentMode = T, t.isContextConsumer = function(e) {
        return E(e) === c
      }, t.isContextProvider = function(e) {
        return E(e) === l
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === r
      }, t.isForwardRef = function(e) {
        return E(e) === d
      }, t.isFragment = function(e) {
        return E(e) === i
      }, t.isLazy = function(e) {
        return E(e) === y
      }, t.isMemo = function(e) {
        return E(e) === g
      }, t.isPortal = function(e) {
        return E(e) === o
      }, t.isProfiler = function(e) {
        return E(e) === s
      }, t.isStrictMode = function(e) {
        return E(e) === a
      }, t.isSuspense = function(e) {
        return E(e) === p
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === i || e === f || e === s || e === a || e === p || e === m || "object" == typeof e && null !== e && (e.$$typeof === y || e.$$typeof === g || e.$$typeof === l || e.$$typeof === c || e.$$typeof === d || e.$$typeof === h || e.$$typeof === b || e.$$typeof === w || e.$$typeof === v)
      }, t.typeOf = E
    },
    28215: (e, t, n) => {
      function r(e) {
        if (function() {
            if (null == o) {
              o = !1;
              try {
                document.createElement("div").focus({
                  get preventScroll() {
                    return o = !0, !0
                  }
                })
              } catch {}
            }
            return o
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
      n.d(t, {
        e: () => r
      });
      let o = null
    },
    28830: (e, t, n) => {
      n.d(t, {
        N: () => o
      });
      var r = n(62229);
      const o = "undefined" != typeof document ? r.useLayoutEffect : () => {}
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
    35255: (e, t, n) => {
      var r = n(88335),
        o = {
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
        i = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        a = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        s = {};

      function l(e) {
        return r.isMemo(e) ? a : s[e.$$typeof] || o
      }
      s[r.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[r.Memo] = a;
      var c = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        d = Object.getOwnPropertyDescriptor,
        p = Object.getPrototypeOf,
        m = Object.prototype;
      e.exports = function e(t, n, r) {
        if ("string" != typeof n) {
          if (m) {
            var o = p(n);
            o && o !== m && e(t, o, r)
          }
          var a = u(n);
          f && (a = a.concat(f(n)));
          for (var s = l(t), g = l(n), y = 0; y < a.length; ++y) {
            var v = a[y];
            if (!(i[v] || r && r[v] || g && g[v] || s && s[v])) {
              var h = d(n, v);
              try {
                c(t, v, h)
              } catch (e) {}
            }
          }
        }
        return t
      }
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
    36566: (e, t, n) => {
      n.d(t, {
        Fe: () => l,
        PJ: () => u,
        _h: () => c,
        rd: () => s
      });
      var r = n(28215),
        o = n(87263),
        i = n(62229);
      const a = (0, i.createContext)({
        isNative: !0,
        open: function(e, t) {
          ! function(e, t) {
            if (e instanceof HTMLAnchorElement) t(e);
            else if (e.hasAttribute("data-href")) {
              let n = document.createElement("a");
              n.href = e.getAttribute("data-href"), e.hasAttribute("data-target") && (n.target = e.getAttribute("data-target")), e.hasAttribute("data-rel") && (n.rel = e.getAttribute("data-rel")), e.hasAttribute("data-download") && (n.download = e.getAttribute("data-download")), e.hasAttribute("data-ping") && (n.ping = e.getAttribute("data-ping")), e.hasAttribute("data-referrer-policy") && (n.referrerPolicy = e.getAttribute("data-referrer-policy")), e.appendChild(n), t(n), e.removeChild(n)
            }
          }(e, e => l(e, t))
        },
        useHref: e => e
      });

      function s() {
        return (0, i.useContext)(a)
      }

      function l(e, t, n = !0) {
        var i, a;
        let {
          metaKey: s,
          ctrlKey: c,
          altKey: u,
          shiftKey: f
        } = t;
        (0, o.gm)() && (null === (a = window.event) || void 0 === a || null === (i = a.type) || void 0 === i ? void 0 : i.startsWith("key")) && "_blank" === e.target && ((0, o.cX)() ? s = !0 : c = !0);
        let d = (0, o.Tc)() && (0, o.cX)() && !(0, o.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: s,
          ctrlKey: c,
          altKey: u,
          shiftKey: f
        }) : new MouseEvent("click", {
          metaKey: s,
          ctrlKey: c,
          altKey: u,
          shiftKey: f,
          bubbles: !0,
          cancelable: !0
        });
        l.isOpening = n, (0, r.e)(e), e.dispatchEvent(d), l.isOpening = !1
      }

      function c(e) {
        var t;
        const n = s().useHref(null !== (t = null == e ? void 0 : e.href) && void 0 !== t ? t : "");
        return {
          href: (null == e ? void 0 : e.href) ? n : void 0,
          target: null == e ? void 0 : e.target,
          rel: null == e ? void 0 : e.rel,
          download: null == e ? void 0 : e.download,
          ping: null == e ? void 0 : e.ping,
          referrerPolicy: null == e ? void 0 : e.referrerPolicy
        }
      }

      function u(e, t, n, r) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let n = e.getAttribute("target");
          return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r))
      }
      l.isOpening = !1
    },
    36768: (e, t, n) => {
      n.d(t, {
        v: () => a
      });
      var r = n(72301),
        o = n(49652),
        i = n(4572);

      function a(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let a = e[n];
          for (let e in a) {
            let n = t[e],
              s = a[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = (0, r.c)(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = (0, o.Tw)(n, s) : t[e] = void 0 !== s ? s : n : t[e] = i(n, s)
          }
        }
        return t
      }
    },
    38223: (e, t, n) => {
      n.d(t, {
        Cl: () => E,
        ME: () => w
      });
      var r = n(89839),
        o = n(62993),
        i = n(87263),
        a = n(61205);
      n(62229);
      let s = null,
        l = new Set,
        c = new Map,
        u = !1,
        f = !1;

      function d(e, t) {
        for (let n of l) n(e, t)
      }

      function p(e) {
        u = !0,
          function(e) {
            return !(e.metaKey || !(0, i.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (s = "keyboard", d("keyboard", e))
      }

      function m(e) {
        s = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (u = !0, d("pointer", e))
      }

      function g(e) {
        (0, a.Y)(e) && (u = !0, s = "virtual")
      }

      function y(e) {
        e.target !== window && e.target !== document && !r.lR && e.isTrusted && (u || f || (s = "virtual", d("virtual", e)), u = !1, f = !1)
      }

      function v() {
        r.lR || (u = !1, f = !0)
      }

      function h(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || c.get((0, o.mD)(e))) return;
        const t = (0, o.mD)(e),
          n = (0, o.TW)(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          u = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", p, !0), n.addEventListener("keyup", p, !0), n.addEventListener("click", g, !0), t.addEventListener("focus", y, !0), t.addEventListener("blur", v, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", m, !0), n.addEventListener("pointermove", m, !0), n.addEventListener("pointerup", m, !0)), t.addEventListener("beforeunload", () => {
          b(e)
        }, {
          once: !0
        }), c.set(t, {
          focus: r
        })
      }
      const b = (e, t) => {
        const n = (0, o.mD)(e),
          r = (0, o.TW)(e);
        t && r.removeEventListener("DOMContentLoaded", t), c.has(n) && (n.HTMLElement.prototype.focus = c.get(n).focus, r.removeEventListener("keydown", p, !0), r.removeEventListener("keyup", p, !0), r.removeEventListener("click", g, !0), n.removeEventListener("focus", y, !0), n.removeEventListener("blur", v, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", m, !0), r.removeEventListener("pointermove", m, !0), r.removeEventListener("pointerup", m, !0)), c.delete(n))
      };

      function w() {
        return s
      }

      function E(e) {
        s = e, d(e, null)
      }
      "undefined" != typeof document && function(e) {
        const t = (0, o.TW)(e);
        let n;
        "loading" !== t.readyState ? h(e) : (n = () => {
          h(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"])
    },
    41149: (e, t, n) => {
      n.d(t, {
        d: () => D
      });
      var r = n(89839),
        o = n(87263),
        i = n(62993),
        a = n(8324);
      let s = "default",
        l = "",
        c = new WeakMap;

      function u(e) {
        if ((0, o.un)()) {
          if ("disabled" !== s) return;
          s = "restoring", setTimeout(() => {
            (0, a.v)(() => {
              if ("restoring" === s) {
                const t = (0, i.TW)(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = l || ""), l = "", s = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && c.has(e)) {
          let t = c.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), c.delete(e)
        }
      }
      var f = n(62229);
      const d = f.createContext({
        register: () => {}
      });
      d.displayName = "PressResponderContext";
      var p = n(88842),
        m = n(57178),
        g = n(72562),
        y = n(36768),
        v = n(11021),
        h = n(73581),
        b = n(79888),
        w = n(13569),
        E = n(72301),
        T = n(36566),
        x = n(61205),
        P = n(28215);
      n(18429);
      var S = new WeakMap;
      class L {
        continuePropagation() {
          (0, g._)(this, S, !1)
        }
        get shouldStopPropagation() {
          return (0, p._)(this, S)
        }
        constructor(e, t, n, r) {
          var o;
          (0, m._)(this, S, {
            writable: !0,
            value: void 0
          }), (0, g._)(this, S, !0);
          let i = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const a = null == i ? void 0 : i.getBoundingClientRect();
          let s, l, c = 0,
            u = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, u = n.clientY), a && (null != l && null != u ? (s = l - a.left, c = u - a.top) : (s = a.width / 2, c = a.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = c
        }
      }
      const C = Symbol("linkClicked"),
        k = "react-aria-pressable-style",
        M = "data-react-aria-pressable";

      function D(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: a,
          onPressEnd: p,
          onPressUp: m,
          onClick: g,
          isDisabled: S,
          isPressed: D,
          preventFocusOnPress: N,
          shouldCancelOnPointerExit: _,
          allowTextSelectionOnPress: K,
          ref: $,
          ...I
        } = function(e) {
          let t = (0, f.useContext)(d);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = (0, y.v)(r, e), n()
          }
          return (0, v.w)(t, e.ref), e
        }(e), [H, W] = (0, f.useState)(!1), B = (0, f.useRef)({
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
          addGlobalListener: j,
          removeAllGlobalListeners: U
        } = (0, h.A)(), V = (0, b.J)((e, t) => {
          let r = B.current;
          if (S || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, a) {
            let n = new L("pressstart", t, e);
            a(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, W(!0), o
        }), z = (0, b.J)((e, r, o = !0) => {
          let i = B.current;
          if (!i.didFirePressStart) return !1;
          i.didFirePressStart = !1, i.isTriggeringEvent = !0;
          let a = !0;
          if (p) {
            let t = new L("pressend", r, e);
            p(t), a = t.shouldStopPropagation
          }
          if (n && n(!1), W(!1), t && o && !S) {
            let n = new L("press", r, e);
            t(n), a && (a = n.shouldStopPropagation)
          }
          return i.isTriggeringEvent = !1, a
        }), X = (0, b.J)((e, t) => {
          let n = B.current;
          if (S) return !1;
          if (m) {
            n.isTriggeringEvent = !0;
            let r = new L("pressup", t, e);
            return m(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }), Y = (0, b.J)(e => {
          let t = B.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && z(O(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, U(), K || u(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), J = (0, b.J)(e => {
          _ && Y(e)
        }), G = (0, b.J)(e => {
          S || null == g || g(e)
        }), q = (0, b.J)((e, t) => {
          if (!S && g) {
            let n = new MouseEvent("click", e);
            (0, r.o1)(n, t), g((0, r.eg)(n))
          }
        }), Q = (0, f.useMemo)(() => {
          let e = B.current,
            t = {
              onKeyDown(t) {
                if (R(t.nativeEvent, t.currentTarget) && (0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent))) {
                  var r;
                  F((0, w.wt)(t.nativeEvent), t.key) && t.preventDefault();
                  let a = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", a = V(t, "keyboard");
                    let r = t.currentTarget,
                      o = t => {
                        R(t, r) && !t.repeat && (0, w.sD)(r, (0, w.wt)(t)) && e.target && X(O(e.target, t), "keyboard")
                      };
                    j((0, i.TW)(t.currentTarget), "keyup", (0, E.c)(o, n), !0)
                  }
                  a && t.stopPropagation(), t.metaKey && (0, o.cX)() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || (0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !T.Fe.isOpening) {
                  let n = !0;
                  if (S && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, x.Y)(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = X(O(t.currentTarget, t), r),
                        i = z(O(t.currentTarget, t), r, !0);
                      n = o && i, e.isOverTarget = !1, G(t), Y(t)
                    }
                  } else {
                    let e = V(t, "virtual"),
                      r = X(t, "virtual"),
                      o = z(t, "virtual");
                    G(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && R(t, e.target)) {
                var r;
                F((0, w.wt)(t), t.key) && t.preventDefault();
                let n = (0, w.wt)(t),
                  o = (0, w.sD)(e.target, (0, w.wt)(t));
                z(O(e.target, t), "keyboard", o), o && q(t, e.target), U(), "Enter" !== t.key && A(e.target) && (0, w.sD)(e.target, n) && !t[C] && (t[C] = !0, (0, T.Fe)(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !(0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent))) return;
              if ((0, x.P)(t.nativeEvent)) return void(e.pointerType = "virtual");
              e.pointerType = t.pointerType;
              let r = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, K || function(e) {
                  if ((0, o.un)()) {
                    if ("default" === s) {
                      const t = (0, i.TW)(e);
                      l = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    s = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    c.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), r = V(t, e.pointerType);
                let u = (0, w.wt)(t.nativeEvent);
                "releasePointerCapture" in u && u.releasePointerCapture(t.pointerId), j((0, i.TW)(t.currentTarget), "pointerup", n, !1), j((0, i.TW)(t.currentTarget), "pointercancel", a, !1)
              }
              r && t.stopPropagation()
            }, t.onMouseDown = t => {
              if ((0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent)) && 0 === t.button) {
                if (N) {
                  let n = (0, r.LE)(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              (0, w.sD)(t.currentTarget, (0, w.wt)(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || X(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, V(O(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, z(O(e.target, t), e.pointerType, !1), J(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ((0, w.sD)(e.target, (0, w.wt)(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? Y(t) : ((0, P.e)(e.target), e.target.click()))
                      }, 80);
                    j(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else Y(t);
                  e.isOverTarget = !1
                }
              },
              a = e => {
                Y(e)
              };
            t.onDragStart = e => {
              (0, w.sD)(e.currentTarget, (0, w.wt)(e.nativeEvent)) && Y(e)
            }
          }
          return t
        }, [j, S, N, U, K, Y, J, z, V, X, G, q]);
        return (0, f.useEffect)(() => {
          if (!$) return;
          const e = (0, i.TW)($.current);
          if (!e || !e.head || e.getElementById(k)) return;
          const t = e.createElement("style");
          t.id = k, t.textContent = `\n@layer {\n  [${M}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [$]), (0, f.useEffect)(() => {
          let e = B.current;
          return () => {
            var t;
            K || u(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [K]), {
          isPressed: D || H,
          pressProps: (0, y.v)(I, Q, {
            [M]: !0
          })
        }
      }

      function A(e) {
        return "A" === e.tagName && e.hasAttribute("href")
      }

      function R(e, t) {
        const {
          key: n,
          code: r
        } = e, o = t, a = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof(0, i.mD)(o).HTMLInputElement && !_(o, n) || o instanceof(0, i.mD)(o).HTMLTextAreaElement || o.isContentEditable || ("link" === a || !a && A(o)) && "Enter" !== n)
      }

      function O(e, t) {
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

      function F(e, t) {
        return e instanceof HTMLInputElement ? !_(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : A(e)))
        }(e)
      }
      const N = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function _(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : N.has(e.type)
      }
    },
    42351: (e, t, n) => {
      n.d(t, {
        t: () => c,
        A: () => u
      });
      var r = n(62993);
      const o = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function i(e, t) {
        return o ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = (0, r.mD)(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: o
          } = e.style, i = "none" !== n && "hidden" !== o && "collapse" !== o;
          if (i) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            i = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return i
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || i(e.parentElement, e))
      }
      const a = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        s = a.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      a.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const l = a.join(':not([hidden]):not([tabindex="-1"]),');

      function c(e) {
        return e.matches(s) && i(e) && !f(e)
      }

      function u(e) {
        return e.matches(l) && i(e) && !f(e)
      }

      function f(e) {
        let t = e;
        for (; null != t;) {
          if (t instanceof t.ownerDocument.defaultView.HTMLElement && t.inert) return !0;
          t = t.parentElement
        }
        return !1
      }
    },
    46219: (e, t, n) => {
      n.d(t, {
        sL: () => E,
        UP: () => s,
        ic: () => u,
        iQ: () => d,
        Ub: () => i,
        jt: () => l,
        ZC: () => a,
        rl: () => p
      });
      var r = n(60211),
        o = n(62229);

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

      function c(e) {
        const t = (0, o.useRef)(e);
        return (0, o.useEffect)(() => {
          t.current = e
        }), (0, o.useMemo)(() => (...e) => t.current?.(...e), [])
      }

      function u({
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
            a = c(t);
          return (0, o.useEffect)(() => {
            i.current !== r && (a(r), i.current = r)
          }, [r, i, a]), n
        }({
          defaultProp: t,
          onChange: n
        }), a = void 0 !== e, s = a ? e : r, l = c(n), u = (0, o.useCallback)(t => {
          if (a) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else i(t)
        }, [a, e, i, l]);
        return [s, u]
      }

      function f(e, t, n, r) {
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
      const d = ({
        ref: e,
        onChange: t,
        onFocusIn: n,
        onFocusOut: r,
        enabled: i = !0
      }) => {
        const [a, s] = (0, o.useState)(!1);
        return f("focusin", e => {
          s(!0), n?.(e), t?.(!0, e)
        }, e), f("focusout", e => {
          s(!1), r?.(e), t?.(!1, e)
        }, e), {
          isFocused: !!i && a
        }
      };

      function p(e = !0) {
        const t = i("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      var m = n(36768),
        g = n(99098),
        y = n(41149),
        v = n(52061);
      const h = /^(on.*)$/,
        b = /^(onPress.*)$/;
      var w = n(51105);
      const E = ({
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
          for (const o in e) Object.prototype.hasOwnProperty.call(e, o) && (b.test(o) ? t ? n[o] = e[o] : r[o] = e[o] : h.test(o) ? n[o] = e[o] : r[o] = e[o]);
          return {
            events: n,
            others: r
          }
        }(o, {
          onPress: !1
        }), {
          buttonProps: l,
          isPressed: c
        } = function(e, t) {
          let n, {
            elementType: r = "button",
            isDisabled: o,
            onPress: i,
            onPressStart: a,
            onPressEnd: s,
            onPressUp: l,
            onPressChange: c,
            preventFocusOnPress: u,
            allowFocusWhenDisabled: f,
            onClick: d,
            href: p,
            target: h,
            rel: b,
            type: w = "button"
          } = e;
          n = "button" === r ? {
            type: w,
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
            target: "a" === r ? h : void 0,
            type: "input" === r ? w : void 0,
            disabled: "input" === r ? o : void 0,
            "aria-disabled": o && "input" !== r ? o : void 0,
            rel: "a" === r ? b : void 0
          };
          let {
            pressProps: E,
            isPressed: T
          } = (0, y.d)({
            onPressStart: a,
            onPressEnd: s,
            onPressChange: c,
            onPress: i,
            onPressUp: l,
            onClick: d,
            isDisabled: o,
            preventFocusOnPress: u,
            ref: t
          }), {
            focusableProps: x
          } = (0, v.Wc)(e, t);
          f && (x.tabIndex = o ? -1 : x.tabIndex);
          let P = (0, m.v)(x, E, (0, g.$)(e, {
            labelable: !0
          }));
          return {
            isPressed: T,
            buttonProps: (0, m.v)(n, P, {
              "aria-haspopup": e["aria-haspopup"],
              "aria-expanded": e["aria-expanded"],
              "aria-controls": e["aria-controls"],
              "aria-pressed": e["aria-pressed"],
              "aria-current": e["aria-current"],
              "aria-disabled": e["aria-disabled"]
            })
          }
        }({
          ...s,
          elementType: "button",
          preventFocusOnPress: !0,
          onPress: e => {
            r || (s.onPress?.(e) ?? n?.({
              ...e,
              currentTarget: e.target
            }))
          }
        }, i), u = {
          ...l,
          role: "button",
          "data-pressed": !e && c,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && c,
          buttonProps: (0, w.v)(e ? {} : u, {
            ...a,
            className: t
          })
        }
      }
    },
    49652: (e, t, n) => {
      n.d(t, {
        Tw: () => f,
        Bi: () => u,
        X1: () => d
      });
      var r = n(28830),
        o = n(79888),
        i = n(62229);
      var a = n(50336);
      let s, l = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        c = new Map;

      function u(e) {
        let [t, n] = (0, i.useState)(e), o = (0, i.useRef)(null), u = (0, a.Cc)(t), f = (0, i.useRef)(null);
        if (s && s.register(f, u), l) {
          const e = c.get(u);
          e && !e.includes(o) ? e.push(o) : c.set(u, [o])
        }
        return (0, r.N)(() => {
          let e = u;
          return () => {
            s && s.unregister(f), c.delete(e)
          }
        }, [u]), (0, i.useEffect)(() => {
          let e = o.current;
          return e && n(e), () => {
            e && (o.current = null)
          }
        }), u
      }

      function f(e, t) {
        if (e === t) return e;
        let n = c.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = c.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }

      function d(e = []) {
        let t = u(),
          [n, a] = function(e) {
            let [t, n] = (0, i.useState)(e), a = (0, i.useRef)(null), s = (0, o.J)(() => {
              if (!a.current) return;
              let e = a.current.next();
              e.done ? a.current = null : t === e.value ? s() : n(e.value)
            });
            (0, r.N)(() => {
              a.current && s()
            });
            let l = (0, o.J)(e => {
              a.current = e(t), s()
            });
            return [t, l]
          }(t),
          s = (0, i.useCallback)(() => {
            a(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, a]);
        return (0, r.N)(s, [t, s, ...e]), n
      }
      "undefined" != typeof FinalizationRegistry && (s = new FinalizationRegistry(e => {
        c.delete(e)
      }))
    },
    50336: (e, t, n) => {
      n.d(t, {
        Cc: () => l,
        wR: () => d
      });
      var r = n(62229);
      const o = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        i = r.createContext(o),
        a = r.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let s = new WeakMap;
      const l = "function" == typeof r.useId ? function(e) {
        let t = r.useId(),
          [n] = (0, r.useState)(d());
        return e || `${n?"react-aria":`react-aria${o.prefix}`}-${t}`
      } : function(e) {
        let t = (0, r.useContext)(i),
          n = function(e = !1) {
            let t = (0, r.useContext)(i),
              n = (0, r.useRef)(null);
            if (null === n.current && !e) {
              var o, a;
              let e = null === (a = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === a || null === (o = a.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
              if (e) {
                let n = s.get(e);
                null == n ? s.set(e, {
                  id: t.current,
                  state: e.memoizedState
                }) : e.memoizedState !== n.state && (t.current = n.id, s.delete(e))
              }
              n.current = ++t.current
            }
            return n.current
          }(!!e),
          o = `react-aria${t.prefix}`;
        return e || `${o}-${n}`
      };

      function c() {
        return !1
      }

      function u() {
        return !0
      }

      function f(e) {
        return () => {}
      }

      function d() {
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(f, c, u) : (0, r.useContext)(a)
      }
    },
    52061: (e, t, n) => {
      n.d(t, {
        Wc: () => m
      });
      var r = n(38223),
        o = n(62993),
        i = n(13569),
        a = n(8324),
        s = n(28215);
      var l = n(89839),
        c = n(62229);

      function u(e) {
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
      var f = n(11021),
        d = n(36768);
      let p = c.createContext(null);

      function m(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: a
          } = e;
          const s = (0, c.useCallback)(e => {
              if (e.target === e.currentTarget) return r && r(e), a && a(!1), !0
            }, [r, a]),
            u = (0, l.yB)(s),
            f = (0, c.useCallback)(e => {
              const t = (0, o.TW)(e.target),
                r = t ? (0, i.bq)(t) : (0, i.bq)();
              e.target === e.currentTarget && r === (0, i.wt)(e.nativeEvent) && (n && n(e), a && a(!0), u(e))
            }, [a, n, u]);
          return {
            focusProps: {
              onFocus: !t && (n || a || r) ? f : void 0,
              onBlur: t || !r && !a ? void 0 : s
            }
          }
        }(e), {
          keyboardProps: m
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: u(e.onKeyDown),
              onKeyUp: u(e.onKeyUp)
            }
          }
        }(e), g = (0, d.v)(n, m), y = function(e) {
          let t = (0, c.useContext)(p) || {};
          (0, f.w)(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), v = e.isDisabled ? {} : y, h = (0, c.useRef)(e.autoFocus);
        (0, c.useEffect)(() => {
          h.current && t.current && function(e) {
            const t = (0, o.TW)(e),
              n = (0, i.bq)(t);
            if ("virtual" === (0, r.ME)()) {
              let r = n;
              (0, a.v)(() => {
                (0, i.bq)(t) === r && e.isConnected && (0, s.e)(e)
              })
            } else(0, s.e)(e)
          }(t.current), h.current = !1
        }, [t]);
        let b = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (b = void 0), {
          focusableProps: (0, d.v)({
            ...g,
            tabIndex: b
          }, v)
        }
      }
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
    61205: (e, t, n) => {
      n.d(t, {
        P: () => i,
        Y: () => o
      });
      var r = n(87263);

      function o(e) {
        return !("" !== e.pointerType || !e.isTrusted) || ((0, r.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function i(e) {
        return !(0, r.m0)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
      }
    },
    62993: (e, t, n) => {
      n.d(t, {
        Ng: () => i,
        TW: () => r,
        mD: () => o
      });
      const r = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        o = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window;

      function i(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
    },
    64728: (e, t, n) => {
      n.d(t, {
        UE: () => Me,
        ll: () => xe,
        rD: () => Ae,
        UU: () => Le,
        jD: () => ke,
        ER: () => De,
        cY: () => Pe,
        BN: () => Se,
        Ej: () => Ce
      });
      const r = ["top", "right", "bottom", "left"],
        o = Math.min,
        i = Math.max,
        a = Math.round,
        s = Math.floor,
        l = e => ({
          x: e,
          y: e
        }),
        c = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        },
        u = {
          start: "end",
          end: "start"
        };

      function f(e, t, n) {
        return i(e, o(t, n))
      }

      function d(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function p(e) {
        return e.split("-")[0]
      }

      function m(e) {
        return e.split("-")[1]
      }

      function g(e) {
        return "x" === e ? "y" : "x"
      }

      function y(e) {
        return "y" === e ? "height" : "width"
      }
      const v = new Set(["top", "bottom"]);

      function h(e) {
        return v.has(p(e)) ? "y" : "x"
      }

      function b(e) {
        return g(h(e))
      }

      function w(e) {
        return e.replace(/start|end/g, e => u[e])
      }
      const E = ["left", "right"],
        T = ["right", "left"],
        x = ["top", "bottom"],
        P = ["bottom", "top"];

      function S(e) {
        return e.replace(/left|right|bottom|top/g, e => c[e])
      }

      function L(e) {
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

      function C(e) {
        const {
          x: t,
          y: n,
          width: r,
          height: o
        } = e;
        return {
          width: r,
          height: o,
          top: n,
          left: t,
          right: t + r,
          bottom: n + o,
          x: t,
          y: n
        }
      }

      function k(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = h(t),
          a = b(t),
          s = y(a),
          l = p(t),
          c = "y" === i,
          u = r.x + r.width / 2 - o.width / 2,
          f = r.y + r.height / 2 - o.height / 2,
          d = r[s] / 2 - o[s] / 2;
        let g;
        switch (l) {
          case "top":
            g = {
              x: u,
              y: r.y - o.height
            };
            break;
          case "bottom":
            g = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            g = {
              x: r.x + r.width,
              y: f
            };
            break;
          case "left":
            g = {
              x: r.x - o.width,
              y: f
            };
            break;
          default:
            g = {
              x: r.x,
              y: r.y
            }
        }
        switch (m(t)) {
          case "start":
            g[a] -= d * (n && c ? -1 : 1);
            break;
          case "end":
            g[a] += d * (n && c ? -1 : 1)
        }
        return g
      }
      async function M(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: a,
          elements: s,
          strategy: l
        } = e, {
          boundary: c = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: f = "floating",
          altBoundary: p = !1,
          padding: m = 0
        } = d(t, e), g = L(m), y = s[p ? "floating" === f ? "reference" : "floating" : f], v = C(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(y))) || n ? y : y.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(s.floating)),
          boundary: c,
          rootBoundary: u,
          strategy: l
        })), h = "floating" === f ? {
          x: r,
          y: o,
          width: a.floating.width,
          height: a.floating.height
        } : a.reference, b = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(s.floating)), w = await (null == i.isElement ? void 0 : i.isElement(b)) && await (null == i.getScale ? void 0 : i.getScale(b)) || {
          x: 1,
          y: 1
        }, E = C(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: s,
          rect: h,
          offsetParent: b,
          strategy: l
        }) : h);
        return {
          top: (v.top - E.top + g.top) / w.y,
          bottom: (E.bottom - v.bottom + g.bottom) / w.y,
          left: (v.left - E.left + g.left) / w.x,
          right: (E.right - v.right + g.right) / w.x
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

      function A(e) {
        return r.some(t => e[t] >= 0)
      }
      const R = new Set(["left", "top"]);

      function O() {
        return "undefined" != typeof window
      }

      function F(e) {
        return K(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function N(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function _(e) {
        var t;
        return null == (t = (K(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function K(e) {
        return !!O() && (e instanceof Node || e instanceof N(e).Node)
      }

      function $(e) {
        return !!O() && (e instanceof Element || e instanceof N(e).Element)
      }

      function I(e) {
        return !!O() && (e instanceof HTMLElement || e instanceof N(e).HTMLElement)
      }

      function H(e) {
        return !(!O() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof N(e).ShadowRoot)
      }
      const W = new Set(["inline", "contents"]);

      function B(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = ee(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && !W.has(o)
      }
      const j = new Set(["table", "td", "th"]);

      function U(e) {
        return j.has(F(e))
      }
      const V = [":popover-open", ":modal"];

      function z(e) {
        return V.some(t => {
          try {
            return e.matches(t)
          } catch (e) {
            return !1
          }
        })
      }
      const X = ["transform", "translate", "scale", "rotate", "perspective"],
        Y = ["transform", "translate", "scale", "rotate", "perspective", "filter"],
        J = ["paint", "layout", "strict", "content"];

      function G(e) {
        const t = q(),
          n = $(e) ? ee(e) : e;
        return X.some(e => !!n[e] && "none" !== n[e]) || !!n.containerType && "normal" !== n.containerType || !t && !!n.backdropFilter && "none" !== n.backdropFilter || !t && !!n.filter && "none" !== n.filter || Y.some(e => (n.willChange || "").includes(e)) || J.some(e => (n.contain || "").includes(e))
      }

      function q() {
        return !("undefined" == typeof CSS || !CSS.supports) && CSS.supports("-webkit-backdrop-filter", "none")
      }
      const Q = new Set(["html", "body", "#document"]);

      function Z(e) {
        return Q.has(F(e))
      }

      function ee(e) {
        return N(e).getComputedStyle(e)
      }

      function te(e) {
        return $(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function ne(e) {
        if ("html" === F(e)) return e;
        const t = e.assignedSlot || e.parentNode || H(e) && e.host || _(e);
        return H(t) ? t.host : t
      }

      function re(e) {
        const t = ne(e);
        return Z(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : I(t) && B(t) ? t : re(t)
      }

      function oe(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = re(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          a = N(o);
        if (i) {
          const e = ie(a);
          return t.concat(a, a.visualViewport || [], B(o) ? o : [], e && n ? oe(e) : [])
        }
        return t.concat(o, oe(o, [], n))
      }

      function ie(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }

      function ae(e) {
        const t = ee(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = I(e),
          i = o ? e.offsetWidth : n,
          s = o ? e.offsetHeight : r,
          l = a(n) !== i || a(r) !== s;
        return l && (n = i, r = s), {
          width: n,
          height: r,
          $: l
        }
      }

      function se(e) {
        return $(e) ? e : e.contextElement
      }

      function le(e) {
        const t = se(e);
        if (!I(t)) return l(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = ae(t);
        let s = (i ? a(n.width) : n.width) / r,
          c = (i ? a(n.height) : n.height) / o;
        return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), {
          x: s,
          y: c
        }
      }
      const ce = l(0);

      function ue(e) {
        const t = N(e);
        return q() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : ce
      }

      function fe(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = se(e);
        let a = l(1);
        t && (r ? $(r) && (a = le(r)) : a = le(e));
        const s = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== N(e)) && t
        }(i, n, r) ? ue(i) : l(0);
        let c = (o.left + s.x) / a.x,
          u = (o.top + s.y) / a.y,
          f = o.width / a.x,
          d = o.height / a.y;
        if (i) {
          const e = N(i),
            t = r && $(r) ? N(r) : r;
          let n = e,
            o = ie(n);
          for (; o && r && t !== n;) {
            const e = le(o),
              t = o.getBoundingClientRect(),
              r = ee(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              a = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            c *= e.x, u *= e.y, f *= e.x, d *= e.y, c += i, u += a, n = N(o), o = ie(n)
          }
        }
        return C({
          width: f,
          height: d,
          x: c,
          y: u
        })
      }

      function de(e, t) {
        const n = te(e).scrollLeft;
        return t ? t.left + n : fe(_(e)).left + n
      }

      function pe(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - de(e, n),
          y: n.top + t.scrollTop
        }
      }
      const me = new Set(["absolute", "fixed"]);

      function ge(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = N(e),
            r = _(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            a = r.clientHeight,
            s = 0,
            l = 0;
          if (o) {
            i = o.width, a = o.height;
            const e = q();
            (!e || e && "fixed" === t) && (s = o.offsetLeft, l = o.offsetTop)
          }
          const c = de(r);
          if (c <= 0) {
            const e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              a = Math.abs(r.clientWidth - t.clientWidth - o);
            a <= 25 && (i -= a)
          } else c <= 25 && (i += c);
          return {
            width: i,
            height: a,
            x: s,
            y: l
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = _(e),
            n = te(e),
            r = e.ownerDocument.body,
            o = i(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            a = i(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let s = -n.scrollLeft + de(e);
          const l = -n.scrollTop;
          return "rtl" === ee(r).direction && (s += i(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: a,
            x: s,
            y: l
          }
        }(_(e));
        else if ($(t)) r = function(e, t) {
          const n = fe(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = I(e) ? le(e) : l(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = ue(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return C(r)
      }

      function ye(e, t) {
        const n = ne(e);
        return !(n === t || !$(n) || Z(n)) && ("fixed" === ee(n).position || ye(n, t))
      }

      function ve(e, t, n) {
        const r = I(t),
          o = _(t),
          i = "fixed" === n,
          a = fe(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const c = l(0);

        function u() {
          c.x = de(o)
        }
        if (r || !r && !i)
          if (("body" !== F(t) || B(o)) && (s = te(t)), r) {
            const e = fe(t, !0, i, t);
            c.x = e.x + t.clientLeft, c.y = e.y + t.clientTop
          } else o && u();
        i && !r && o && u();
        const f = !o || r || i ? l(0) : pe(o, s);
        return {
          x: a.left + s.scrollLeft - c.x - f.x,
          y: a.top + s.scrollTop - c.y - f.y,
          width: a.width,
          height: a.height
        }
      }

      function he(e) {
        return "static" === ee(e).position
      }

      function be(e, t) {
        if (!I(e) || "fixed" === ee(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return _(e) === n && (n = n.ownerDocument.body), n
      }

      function we(e, t) {
        const n = N(e);
        if (z(e)) return n;
        if (!I(e)) {
          let t = ne(e);
          for (; t && !Z(t);) {
            if ($(t) && !he(t)) return t;
            t = ne(t)
          }
          return n
        }
        let r = be(e, t);
        for (; r && U(r) && he(r);) r = be(r, t);
        return r && Z(r) && he(r) && !G(r) ? n : r || function(e) {
          let t = ne(e);
          for (; I(t) && !Z(t);) {
            if (G(t)) return t;
            if (z(t)) return null;
            t = ne(t)
          }
          return null
        }(e) || n
      }
      const Ee = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            a = _(r),
            s = !!t && z(t.floating);
          if (r === a || s && i) return n;
          let c = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = l(1);
          const f = l(0),
            d = I(r);
          if ((d || !d && !i) && (("body" !== F(r) || B(a)) && (c = te(r)), I(r))) {
            const e = fe(r);
            u = le(r), f.x = e.x + r.clientLeft, f.y = e.y + r.clientTop
          }
          const p = !a || d || i ? l(0) : pe(a, c);
          return {
            width: n.width * u.x,
            height: n.height * u.y,
            x: n.x * u.x - c.scrollLeft * u.x + f.x + p.x,
            y: n.y * u.y - c.scrollTop * u.y + f.y + p.y
          }
        },
        getDocumentElement: _,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: a
          } = e;
          const s = [..."clippingAncestors" === n ? z(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = oe(e, [], !1).filter(e => $(e) && "body" !== F(e)),
                o = null;
              const i = "fixed" === ee(e).position;
              let a = i ? ne(e) : e;
              for (; $(a) && !Z(a);) {
                const t = ee(a),
                  n = G(a);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && me.has(o.position) || B(a) && !n && ye(e, a)) ? r = r.filter(e => e !== a) : o = t, a = ne(a)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            l = s[0],
            c = s.reduce((e, n) => {
              const r = ge(t, n, a);
              return e.top = i(r.top, e.top), e.right = o(r.right, e.right), e.bottom = o(r.bottom, e.bottom), e.left = i(r.left, e.left), e
            }, ge(t, l, a));
          return {
            width: c.right - c.left,
            height: c.bottom - c.top,
            x: c.left,
            y: c.top
          }
        },
        getOffsetParent: we,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || we,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: ve(e.reference, await t(e.floating), e.strategy),
            floating: {
              x: 0,
              y: 0,
              width: r.width,
              height: r.height
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
          } = ae(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: le,
        isElement: $,
        isRTL: function(e) {
          return "rtl" === ee(e).direction
        }
      };

      function Te(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }

      function xe(e, t, n, r) {
        void 0 === r && (r = {});
        const {
          ancestorScroll: a = !0,
          ancestorResize: l = !0,
          elementResize: c = "function" == typeof ResizeObserver,
          layoutShift: u = "function" == typeof IntersectionObserver,
          animationFrame: f = !1
        } = r, d = se(e), p = a || l ? [...d ? oe(d) : [], ...oe(t)] : [];
        p.forEach(e => {
          a && e.addEventListener("scroll", n, {
            passive: !0
          }), l && e.addEventListener("resize", n)
        });
        const m = d && u ? function(e, t) {
          let n, r = null;
          const a = _(e);

          function l() {
            var e;
            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
          }
          return function c(u, f) {
            void 0 === u && (u = !1), void 0 === f && (f = 1), l();
            const d = e.getBoundingClientRect(),
              {
                left: p,
                top: m,
                width: g,
                height: y
              } = d;
            if (u || t(), !g || !y) return;
            const v = {
              rootMargin: -s(m) + "px " + -s(a.clientWidth - (p + g)) + "px " + -s(a.clientHeight - (m + y)) + "px " + -s(p) + "px",
              threshold: i(0, o(1, f)) || 1
            };
            let h = !0;

            function b(t) {
              const r = t[0].intersectionRatio;
              if (r !== f) {
                if (!h) return c();
                r ? c(!1, r) : n = setTimeout(() => {
                  c(!1, 1e-7)
                }, 1e3)
              }
              1 !== r || Te(d, e.getBoundingClientRect()) || c(), h = !1
            }
            try {
              r = new IntersectionObserver(b, {
                ...v,
                root: a.ownerDocument
              })
            } catch (e) {
              r = new IntersectionObserver(b, v)
            }
            r.observe(e)
          }(!0), l
        }(d, n) : null;
        let g, y = -1,
          v = null;
        c && (v = new ResizeObserver(e => {
          let [r] = e;
          r && r.target === d && v && (v.unobserve(t), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
            var e;
            null == (e = v) || e.observe(t)
          })), n()
        }), d && !f && v.observe(d), v.observe(t));
        let h = f ? fe(e) : null;
        return f && function t() {
          const r = fe(e);
          h && !Te(h, r) && n(), h = r, g = requestAnimationFrame(t)
        }(), n(), () => {
          var e;
          p.forEach(e => {
            a && e.removeEventListener("scroll", n), l && e.removeEventListener("resize", n)
          }), null == m || m(), null == (e = v) || e.disconnect(), v = null, f && cancelAnimationFrame(g)
        }
      }
      const Pe = function(e) {
          return void 0 === e && (e = 0), {
            name: "offset",
            options: e,
            async fn(t) {
              var n, r;
              const {
                x: o,
                y: i,
                placement: a,
                middlewareData: s
              } = t, l = await async function(e, t) {
                const {
                  placement: n,
                  platform: r,
                  elements: o
                } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), a = p(n), s = m(n), l = "y" === h(n), c = R.has(a) ? -1 : 1, u = i && l ? -1 : 1, f = d(t, e);
                let {
                  mainAxis: g,
                  crossAxis: y,
                  alignmentAxis: v
                } = "number" == typeof f ? {
                  mainAxis: f,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: f.mainAxis || 0,
                  crossAxis: f.crossAxis || 0,
                  alignmentAxis: f.alignmentAxis
                };
                return s && "number" == typeof v && (y = "end" === s ? -1 * v : v), l ? {
                  x: y * u,
                  y: g * c
                } : {
                  x: g * c,
                  y: y * u
                }
              }(t, e);
              return a === (null == (n = s.offset) ? void 0 : n.placement) && null != (r = s.arrow) && r.alignmentOffset ? {} : {
                x: o + l.x,
                y: i + l.y,
                data: {
                  ...l,
                  placement: a
                }
              }
            }
          }
        },
        Se = function(e) {
          return void 0 === e && (e = {}), {
            name: "shift",
            options: e,
            async fn(t) {
              const {
                x: n,
                y: r,
                placement: o
              } = t, {
                mainAxis: i = !0,
                crossAxis: a = !1,
                limiter: s = {
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
                ...l
              } = d(e, t), c = {
                x: n,
                y: r
              }, u = await M(t, l), m = h(p(o)), y = g(m);
              let v = c[y],
                b = c[m];
              if (i) {
                const e = "y" === y ? "bottom" : "right";
                v = f(v + u["y" === y ? "top" : "left"], v, v - u[e])
              }
              if (a) {
                const e = "y" === m ? "bottom" : "right";
                b = f(b + u["y" === m ? "top" : "left"], b, b - u[e])
              }
              const w = s.fn({
                ...t,
                [y]: v,
                [m]: b
              });
              return {
                ...w,
                data: {
                  x: w.x - n,
                  y: w.y - r,
                  enabled: {
                    [y]: i,
                    [m]: a
                  }
                }
              }
            }
          }
        },
        Le = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                middlewareData: i,
                rects: a,
                initialPlacement: s,
                platform: l,
                elements: c
              } = t, {
                mainAxis: u = !0,
                crossAxis: f = !0,
                fallbackPlacements: g,
                fallbackStrategy: v = "bestFit",
                fallbackAxisSideDirection: L = "none",
                flipAlignment: C = !0,
                ...k
              } = d(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const D = p(o),
                A = h(s),
                R = p(s) === s,
                O = await (null == l.isRTL ? void 0 : l.isRTL(c.floating)),
                F = g || (R || !C ? [S(s)] : function(e) {
                  const t = S(e);
                  return [w(e), t, w(t)]
                }(s)),
                N = "none" !== L;
              !g && N && F.push(... function(e, t, n, r) {
                const o = m(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? T : E : t ? E : T;
                    case "left":
                    case "right":
                      return t ? x : P;
                    default:
                      return []
                  }
                }(p(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(w)))), i
              }(s, C, L, O));
              const _ = [s, ...F],
                K = await M(t, k),
                $ = [];
              let I = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (u && $.push(K[D]), f) {
                const e = function(e, t, n) {
                  void 0 === n && (n = !1);
                  const r = m(e),
                    o = b(e),
                    i = y(o);
                  let a = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
                  return t.reference[i] > t.floating[i] && (a = S(a)), [a, S(a)]
                }(o, a, O);
                $.push(K[e[0]], K[e[1]])
              }
              if (I = [...I, {
                  placement: o,
                  overflows: $
                }], !$.every(e => e <= 0)) {
                var H, W;
                const e = ((null == (H = i.flip) ? void 0 : H.index) || 0) + 1,
                  t = _[e];
                if (t && ("alignment" !== f || A === h(t) || I.every(e => h(e.placement) !== A || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: I
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (W = I.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : W.placement;
                if (!n) switch (v) {
                  case "bestFit": {
                    var B;
                    const e = null == (B = I.filter(e => {
                      if (N) {
                        const t = h(e.placement);
                        return t === A || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : B[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = s
                }
                if (o !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        Ce = function(e) {
          return void 0 === e && (e = {}), {
            name: "size",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: a,
                rects: s,
                platform: l,
                elements: c
              } = t, {
                apply: u = () => {},
                ...f
              } = d(e, t), g = await M(t, f), y = p(a), v = m(a), b = "y" === h(a), {
                width: w,
                height: E
              } = s.floating;
              let T, x;
              "top" === y || "bottom" === y ? (T = y, x = v === (await (null == l.isRTL ? void 0 : l.isRTL(c.floating)) ? "start" : "end") ? "left" : "right") : (x = y, T = "end" === v ? "top" : "bottom");
              const P = E - g.top - g.bottom,
                S = w - g.left - g.right,
                L = o(E - g[T], P),
                C = o(w - g[x], S),
                k = !t.middlewareData.shift;
              let D = L,
                A = C;
              if (null != (n = t.middlewareData.shift) && n.enabled.x && (A = S), null != (r = t.middlewareData.shift) && r.enabled.y && (D = P), k && !v) {
                const e = i(g.left, 0),
                  t = i(g.right, 0),
                  n = i(g.top, 0),
                  r = i(g.bottom, 0);
                b ? A = w - 2 * (0 !== e || 0 !== t ? e + t : i(g.left, g.right)) : D = E - 2 * (0 !== n || 0 !== r ? n + r : i(g.top, g.bottom))
              }
              await u({
                ...t,
                availableWidth: A,
                availableHeight: D
              });
              const R = await l.getDimensions(c.floating);
              return w !== R.width || E !== R.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        ke = function(e) {
          return void 0 === e && (e = {}), {
            name: "hide",
            options: e,
            async fn(t) {
              const {
                rects: n
              } = t, {
                strategy: r = "referenceHidden",
                ...o
              } = d(e, t);
              switch (r) {
                case "referenceHidden": {
                  const e = D(await M(t, {
                    ...o,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: e,
                      referenceHidden: A(e)
                    }
                  }
                }
                case "escaped": {
                  const e = D(await M(t, {
                    ...o,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: e,
                      escaped: A(e)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        Me = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: r,
              placement: i,
              rects: a,
              platform: s,
              elements: l,
              middlewareData: c
            } = t, {
              element: u,
              padding: p = 0
            } = d(e, t) || {};
            if (null == u) return {};
            const g = L(p),
              v = {
                x: n,
                y: r
              },
              h = b(i),
              w = y(h),
              E = await s.getDimensions(u),
              T = "y" === h,
              x = T ? "top" : "left",
              P = T ? "bottom" : "right",
              S = T ? "clientHeight" : "clientWidth",
              C = a.reference[w] + a.reference[h] - v[h] - a.floating[w],
              k = v[h] - a.reference[h],
              M = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(u));
            let D = M ? M[S] : 0;
            D && await (null == s.isElement ? void 0 : s.isElement(M)) || (D = l.floating[S] || a.floating[w]);
            const A = C / 2 - k / 2,
              R = D / 2 - E[w] / 2 - 1,
              O = o(g[x], R),
              F = o(g[P], R),
              N = O,
              _ = D - E[w] - F,
              K = D / 2 - E[w] / 2 + A,
              $ = f(N, K, _),
              I = !c.arrow && null != m(i) && K !== $ && a.reference[w] / 2 - (K < N ? O : F) - E[w] / 2 < 0,
              H = I ? K < N ? K - N : K - _ : 0;
            return {
              [h]: v[h] + H,
              data: {
                [h]: $,
                centerOffset: K - $ - H,
                ...I && {
                  alignmentOffset: H
                }
              },
              reset: I
            }
          }
        }),
        De = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                middlewareData: a
              } = t, {
                offset: s = 0,
                mainAxis: l = !0,
                crossAxis: c = !0
              } = d(e, t), u = {
                x: n,
                y: r
              }, f = h(o), m = g(f);
              let y = u[m],
                v = u[f];
              const b = d(s, t),
                w = "number" == typeof b ? {
                  mainAxis: b,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...b
                };
              if (l) {
                const e = "y" === m ? "height" : "width",
                  t = i.reference[m] - i.floating[e] + w.mainAxis,
                  n = i.reference[m] + i.reference[e] - w.mainAxis;
                y < t ? y = t : y > n && (y = n)
              }
              if (c) {
                var E, T;
                const e = "y" === m ? "width" : "height",
                  t = R.has(p(o)),
                  n = i.reference[f] - i.floating[e] + (t && (null == (E = a.offset) ? void 0 : E[f]) || 0) + (t ? 0 : w.crossAxis),
                  r = i.reference[f] + i.reference[e] + (t ? 0 : (null == (T = a.offset) ? void 0 : T[f]) || 0) - (t ? w.crossAxis : 0);
                v < n ? v = n : v > r && (v = r)
              }
              return {
                [m]: y,
                [f]: v
              }
            }
          }
        },
        Ae = (e, t, n) => {
          const r = new Map,
            o = {
              platform: Ee,
              ...n
            },
            i = {
              ...o.platform,
              _c: r
            };
          return (async (e, t, n) => {
            const {
              placement: r = "bottom",
              strategy: o = "absolute",
              middleware: i = [],
              platform: a
            } = n, s = i.filter(Boolean), l = await (null == a.isRTL ? void 0 : a.isRTL(t));
            let c = await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: u,
                y: f
              } = k(c, r, l),
              d = r,
              p = {},
              m = 0;
            for (let n = 0; n < s.length; n++) {
              const {
                name: i,
                fn: g
              } = s[n], {
                x: y,
                y: v,
                data: h,
                reset: b
              } = await g({
                x: u,
                y: f,
                initialPlacement: r,
                placement: d,
                strategy: o,
                middlewareData: p,
                rects: c,
                platform: a,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              u = null != y ? y : u, f = null != v ? v : f, p = {
                ...p,
                [i]: {
                  ...p[i],
                  ...h
                }
              }, b && m <= 50 && (m++, "object" == typeof b && (b.placement && (d = b.placement), b.rects && (c = !0 === b.rects ? await a.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : b.rects), ({
                x: u,
                y: f
              } = k(c, d, l))), n = -1)
            }
            return {
              x: u,
              y: f,
              placement: d,
              strategy: o,
              middlewareData: p
            }
          })(e, t, {
            ...o,
            platform: i
          })
        }
    },
    72301: (e, t, n) => {
      function r(...e) {
        return (...t) => {
          for (let n of e) "function" == typeof n && n(...t)
        }
      }
      n.d(t, {
        c: () => r
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
    73581: (e, t, n) => {
      n.d(t, {
        A: () => o
      });
      var r = n(62229);

      function o() {
        let e = (0, r.useRef)(new Map),
          t = (0, r.useCallback)((t, n, r, o) => {
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
          n = (0, r.useCallback)((t, n, r, o) => {
            var i;
            let a = (null === (i = e.current.get(r)) || void 0 === i ? void 0 : i.fn) || r;
            t.removeEventListener(n, a, o), e.current.delete(r)
          }, []),
          o = (0, r.useCallback)(() => {
            e.current.forEach((e, t) => {
              n(e.eventTarget, e.type, t, e.options)
            })
          }, [n]);
        return (0, r.useEffect)(() => o, [o]), {
          addGlobalListener: t,
          removeGlobalListener: n,
          removeAllGlobalListeners: o
        }
      }
    },
    79888: (e, t, n) => {
      n.d(t, {
        J: () => s
      });
      var r, o = n(28830),
        i = n(62229);
      const a = null !== (r = i.useInsertionEffect) && void 0 !== r ? r : o.N;

      function s(e) {
        const t = (0, i.useRef)(null);
        return a(() => {
          t.current = e
        }, [e]), (0, i.useCallback)((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }, [])
      }
    },
    87263: (e, t, n) => {
      function r(e) {
        var t;
        if ("undefined" == typeof window || null == window.navigator) return !1;
        let n = null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.brands;
        return Array.isArray(n) && n.some(t => e.test(t.brand)) || e.test(window.navigator.userAgent)
      }

      function o(e) {
        var t;
        return "undefined" != typeof window && null != window.navigator && e.test((null === (t = window.navigator.userAgentData) || void 0 === t ? void 0 : t.platform) || window.navigator.platform)
      }

      function i(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      n.d(t, {
        Tc: () => u,
        bh: () => l,
        cX: () => a,
        gm: () => p,
        m0: () => d,
        un: () => c
      });
      const a = i(function() {
          return o(/^Mac/i)
        }),
        s = i(function() {
          return o(/^iPhone/i)
        }),
        l = i(function() {
          return o(/^iPad/i) || a() && navigator.maxTouchPoints > 1
        }),
        c = i(function() {
          return s() || l()
        }),
        u = (i(function() {
          return a() || c()
        }), i(function() {
          return r(/AppleWebKit/i) && !f()
        })),
        f = i(function() {
          return r(/Chrome/i)
        }),
        d = i(function() {
          return r(/Android/i)
        }),
        p = i(function() {
          return r(/Firefox/i)
        })
    },
    88335: (e, t, n) => {
      e.exports = n(16859)
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
    },
    89839: (e, t, n) => {
      n.d(t, {
        LE: () => p,
        eg: () => c,
        lR: () => d,
        o1: () => u,
        yB: () => f
      });
      var r = n(62993),
        o = n(28215),
        i = n(28830),
        a = n(79888),
        s = n(42351),
        l = n(62229);

      function c(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function u(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function f(e) {
        let t = (0, l.useRef)({
          isFocused: !1,
          observer: null
        });
        (0, i.N)(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []);
        let n = (0, a.J)(t => {
          null == e || e(t)
        });
        return (0, l.useCallback)(e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = c(e);
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
      }
      let d = !1;

      function p(e) {
        for (; e && !(0, s.t)(e);) e = e.parentElement;
        let t = (0, r.mD)(e),
          n = t.document.activeElement;
        if (!n || n === e) return;
        d = !0;
        let i = !1,
          a = e => {
            (e.target === n || i) && e.stopImmediatePropagation()
          },
          l = t => {
            (t.target === n || i) && (t.stopImmediatePropagation(), e || i || (i = !0, (0, o.e)(n), f()))
          },
          c = t => {
            (t.target === e || i) && t.stopImmediatePropagation()
          },
          u = t => {
            (t.target === e || i) && (t.stopImmediatePropagation(), i || (i = !0, (0, o.e)(n), f()))
          };
        t.addEventListener("blur", a, !0), t.addEventListener("focusout", l, !0), t.addEventListener("focusin", u, !0), t.addEventListener("focus", c, !0);
        let f = () => {
            cancelAnimationFrame(p), t.removeEventListener("blur", a, !0), t.removeEventListener("focusout", l, !0), t.removeEventListener("focusin", u, !0), t.removeEventListener("focus", c, !0), d = !1, i = !1
          },
          p = requestAnimationFrame(f);
        return f
      }
    },
    99098: (e, t, n) => {
      n.d(t, {
        $: () => c
      });
      const r = new Set(["id"]),
        o = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        i = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        a = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        s = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        l = /^(data-.*)$/;

      function c(e, t = {}) {
        let {
          labelable: n,
          isLink: c,
          global: u,
          events: f = u,
          propNames: d
        } = t, p = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && o.has(t) || c && i.has(t) || u && a.has(t) || f && s.has(t) || t.endsWith("Capture") && s.has(t.slice(0, -7)) || (null == d ? void 0 : d.has(t)) || l.test(t)) && (p[t] = e[t]);
        return p
      }
    }
  }
]);