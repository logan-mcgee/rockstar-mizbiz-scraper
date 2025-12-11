try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "87efeb34-a583-4902-b512-4240273c76ea", e._sentryDebugIdIdentifier = "sentry-dbid-87efeb34-a583-4902-b512-4240273c76ea")
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
    8324: (e, t, n) => {
      n.d(t, {
        v: () => i
      });
      let r = new Map,
        o = new Set;

      function a() {
        if ("undefined" == typeof window) return;

        function e(e) {
          return "propertyName" in e
        }
        let t = n => {
          if (!e(n) || !n.target) return;
          let a = r.get(n.target);
          if (a && (a.delete(n.propertyName), 0 === a.size && (n.target.removeEventListener("transitioncancel", t), r.delete(n.target)), 0 === r.size)) {
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

      function i(e) {
        requestAnimationFrame(() => {
          ! function() {
            for (const [e] of r) "isConnected" in e && !e.isConnected && r.delete(e)
          }(), 0 === r.size ? e() : o.add(e)
        })
      }
      "undefined" != typeof document && ("loading" !== document.readyState ? a() : document.addEventListener("DOMContentLoaded", a))
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
        bq: () => i,
        sD: () => a,
        wt: () => s
      });
      var r = n(62993),
        o = n(35412);

      function a(e, t) {
        if (!(0, o.Nf)()) return !(!t || !e) && e.contains(t);
        if (!e || !t) return !1;
        let n = t;
        for (; null !== n;) {
          if (n === e) return !0;
          n = "SLOT" === n.tagName && n.assignedSlot ? n.assignedSlot.parentNode : (0, r.Ng)(n) ? n.host : n.parentNode
        }
        return !1
      }
      const i = (e = document) => {
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
    32067: (e, t, n) => {
      n.d(t, {
        DX: () => r.DX,
        xV: () => r.xV,
        s6: () => s
      });
      var r = n(39447),
        o = n(42295),
        a = n(62229),
        i = n(69055);
      const s = ({
        enabled: e = !0,
        ...t
      }) => {
        const n = e ? i.s6 : a.Fragment;
        return (0, o.jsx)(n, {
          ...t
        })
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
        PJ: () => c,
        _h: () => u,
        rd: () => s
      });
      var r = n(28215),
        o = n(87263),
        a = n(62229);
      const i = (0, a.createContext)({
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
        return (0, a.useContext)(i)
      }

      function l(e, t, n = !0) {
        var a, i;
        let {
          metaKey: s,
          ctrlKey: u,
          altKey: c,
          shiftKey: d
        } = t;
        (0, o.gm)() && (null === (i = window.event) || void 0 === i || null === (a = i.type) || void 0 === a ? void 0 : a.startsWith("key")) && "_blank" === e.target && ((0, o.cX)() ? s = !0 : u = !0);
        let f = (0, o.Tc)() && (0, o.cX)() && !(0, o.bh)() ? new KeyboardEvent("keydown", {
          keyIdentifier: "Enter",
          metaKey: s,
          ctrlKey: u,
          altKey: c,
          shiftKey: d
        }) : new MouseEvent("click", {
          metaKey: s,
          ctrlKey: u,
          altKey: c,
          shiftKey: d,
          bubbles: !0,
          cancelable: !0
        });
        l.isOpening = n, (0, r.e)(e), e.dispatchEvent(f), l.isOpening = !1
      }

      function u(e) {
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

      function c(e, t, n, r) {
        !t.isNative && e.currentTarget instanceof HTMLAnchorElement && e.currentTarget.href && !e.isDefaultPrevented() && function(e, t) {
          let n = e.getAttribute("target");
          return !(n && "_self" !== n || e.origin !== location.origin || e.hasAttribute("download") || t.metaKey || t.ctrlKey || t.altKey || t.shiftKey)
        }(e.currentTarget, e) && n && (e.preventDefault(), t.open(e.currentTarget, e, n, r))
      }
      l.isOpening = !1
    },
    36768: (e, t, n) => {
      n.d(t, {
        v: () => i
      });
      var r = n(72301),
        o = n(49652),
        a = n(4572);

      function i(...e) {
        let t = {
          ...e[0]
        };
        for (let n = 1; n < e.length; n++) {
          let i = e[n];
          for (let e in i) {
            let n = t[e],
              s = i[e];
            "function" == typeof n && "function" == typeof s && "o" === e[0] && "n" === e[1] && e.charCodeAt(2) >= 65 && e.charCodeAt(2) <= 90 ? t[e] = (0, r.c)(n, s) : "className" !== e && "UNSAFE_className" !== e || "string" != typeof n || "string" != typeof s ? "id" === e && n && s ? t.id = (0, o.Tw)(n, s) : t[e] = void 0 !== s ? s : n : t[e] = a(n, s)
          }
        }
        return t
      }
    },
    38223: (e, t, n) => {
      n.d(t, {
        Cl: () => w,
        ME: () => E
      });
      var r = n(89839),
        o = n(62993),
        a = n(87263),
        i = n(61205);
      n(62229);
      let s = null,
        l = new Set,
        u = new Map,
        c = !1,
        d = !1;

      function f(e, t) {
        for (let n of l) n(e, t)
      }

      function p(e) {
        c = !0,
          function(e) {
            return !(e.metaKey || !(0, a.cX)() && e.altKey || e.ctrlKey || "Control" === e.key || "Shift" === e.key || "Meta" === e.key)
          }(e) && (s = "keyboard", f("keyboard", e))
      }

      function v(e) {
        s = "pointer", "mousedown" !== e.type && "pointerdown" !== e.type || (c = !0, f("pointer", e))
      }

      function m(e) {
        (0, i.Y)(e) && (c = !0, s = "virtual")
      }

      function g(e) {
        e.target !== window && e.target !== document && !r.lR && e.isTrusted && (c || d || (s = "virtual", f("virtual", e)), c = !1, d = !1)
      }

      function y() {
        r.lR || (c = !1, d = !0)
      }

      function h(e) {
        if ("undefined" == typeof window || "undefined" == typeof document || u.get((0, o.mD)(e))) return;
        const t = (0, o.mD)(e),
          n = (0, o.TW)(e);
        let r = t.HTMLElement.prototype.focus;
        t.HTMLElement.prototype.focus = function() {
          c = !0, r.apply(this, arguments)
        }, n.addEventListener("keydown", p, !0), n.addEventListener("keyup", p, !0), n.addEventListener("click", m, !0), t.addEventListener("focus", g, !0), t.addEventListener("blur", y, !1), "undefined" != typeof PointerEvent && (n.addEventListener("pointerdown", v, !0), n.addEventListener("pointermove", v, !0), n.addEventListener("pointerup", v, !0)), t.addEventListener("beforeunload", () => {
          b(e)
        }, {
          once: !0
        }), u.set(t, {
          focus: r
        })
      }
      const b = (e, t) => {
        const n = (0, o.mD)(e),
          r = (0, o.TW)(e);
        t && r.removeEventListener("DOMContentLoaded", t), u.has(n) && (n.HTMLElement.prototype.focus = u.get(n).focus, r.removeEventListener("keydown", p, !0), r.removeEventListener("keyup", p, !0), r.removeEventListener("click", m, !0), n.removeEventListener("focus", g, !0), n.removeEventListener("blur", y, !1), "undefined" != typeof PointerEvent && (r.removeEventListener("pointerdown", v, !0), r.removeEventListener("pointermove", v, !0), r.removeEventListener("pointerup", v, !0)), u.delete(n))
      };

      function E() {
        return s
      }

      function w(e) {
        s = e, f(e, null)
      }
      "undefined" != typeof document && function(e) {
        const t = (0, o.TW)(e);
        let n;
        "loading" !== t.readyState ? h(e) : (n = () => {
          h(e)
        }, t.addEventListener("DOMContentLoaded", n))
      }(), new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"])
    },
    39447: (e, t, n) => {
      n.d(t, {
        DX: () => s,
        Dc: () => c,
        TL: () => i,
        xV: () => d
      });
      var r = n(62229),
        o = n(95362),
        a = n(42295);

      function i(e) {
        const t = l(e),
          n = r.forwardRef((e, n) => {
            const {
              children: o,
              ...i
            } = e, s = r.Children.toArray(o), l = s.find(f);
            if (l) {
              const e = l.props.children,
                o = s.map(t => t === l ? r.Children.count(e) > 1 ? r.Children.only(null) : r.isValidElement(e) ? e.props.children : null : t);
              return (0, a.jsx)(t, {
                ...i,
                ref: n,
                children: r.isValidElement(e) ? r.cloneElement(e, void 0, o) : null
              })
            }
            return (0, a.jsx)(t, {
              ...i,
              ref: n,
              children: o
            })
          });
        return n.displayName = `${e}.Slot`, n
      }
      var s = i("Slot");

      function l(e) {
        const t = r.forwardRef((e, t) => {
          const {
            children: n,
            ...a
          } = e;
          if (r.isValidElement(n)) {
            const e = function(e) {
                let t = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
                  n = t && "isReactWarning" in t && t.isReactWarning;
                return n ? e.ref : (t = Object.getOwnPropertyDescriptor(e, "ref")?.get, n = t && "isReactWarning" in t && t.isReactWarning, n ? e.props.ref : e.props.ref || e.ref)
              }(n),
              i = function(e, t) {
                const n = {
                  ...t
                };
                for (const r in t) {
                  const o = e[r],
                    a = t[r];
                  /^on[A-Z]/.test(r) ? o && a ? n[r] = (...e) => {
                    const t = a(...e);
                    return o(...e), t
                  } : o && (n[r] = o) : "style" === r ? n[r] = {
                    ...o,
                    ...a
                  } : "className" === r && (n[r] = [o, a].filter(Boolean).join(" "))
                }
                return {
                  ...e,
                  ...n
                }
              }(a, n.props);
            return n.type !== r.Fragment && (i.ref = t ? (0, o.t)(t, e) : e), r.cloneElement(n, i)
          }
          return r.Children.count(n) > 1 ? r.Children.only(null) : null
        });
        return t.displayName = `${e}.SlotClone`, t
      }
      var u = Symbol("radix.slottable");

      function c(e) {
        const t = ({
          children: e
        }) => (0, a.jsx)(a.Fragment, {
          children: e
        });
        return t.displayName = `${e}.Slottable`, t.__radixId = u, t
      }
      var d = c("Slottable");

      function f(e) {
        return r.isValidElement(e) && "function" == typeof e.type && "__radixId" in e.type && e.type.__radixId === u
      }
    },
    41149: (e, t, n) => {
      n.d(t, {
        d: () => D
      });
      var r = n(89839),
        o = n(87263),
        a = n(62993),
        i = n(8324);
      let s = "default",
        l = "",
        u = new WeakMap;

      function c(e) {
        if ((0, o.un)()) {
          if ("disabled" !== s) return;
          s = "restoring", setTimeout(() => {
            (0, i.v)(() => {
              if ("restoring" === s) {
                const t = (0, a.TW)(e);
                "none" === t.documentElement.style.webkitUserSelect && (t.documentElement.style.webkitUserSelect = l || ""), l = "", s = "default"
              }
            })
          }, 300)
        } else if ((e instanceof HTMLElement || e instanceof SVGElement) && e && u.has(e)) {
          let t = u.get(e),
            n = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
          "none" === e.style[n] && (e.style[n] = t), "" === e.getAttribute("style") && e.removeAttribute("style"), u.delete(e)
        }
      }
      var d = n(62229);
      const f = d.createContext({
        register: () => {}
      });
      f.displayName = "PressResponderContext";
      var p = n(88842),
        v = n(57178),
        m = n(72562),
        g = n(36768),
        y = n(11021),
        h = n(73581),
        b = n(79888),
        E = n(13569),
        w = n(72301),
        T = n(36566),
        P = n(61205),
        S = n(28215);
      n(44853);
      var k = new WeakMap;
      class C {
        continuePropagation() {
          (0, m._)(this, k, !1)
        }
        get shouldStopPropagation() {
          return (0, p._)(this, k)
        }
        constructor(e, t, n, r) {
          var o;
          (0, v._)(this, k, {
            writable: !0,
            value: void 0
          }), (0, m._)(this, k, !0);
          let a = null !== (o = null == r ? void 0 : r.target) && void 0 !== o ? o : n.currentTarget;
          const i = null == a ? void 0 : a.getBoundingClientRect();
          let s, l, u = 0,
            c = null;
          null != n.clientX && null != n.clientY && (l = n.clientX, c = n.clientY), i && (null != l && null != c ? (s = l - i.left, u = c - i.top) : (s = i.width / 2, u = i.height / 2)), this.type = e, this.pointerType = t, this.target = n.currentTarget, this.shiftKey = n.shiftKey, this.metaKey = n.metaKey, this.ctrlKey = n.ctrlKey, this.altKey = n.altKey, this.x = s, this.y = u
        }
      }
      const L = Symbol("linkClicked"),
        M = "react-aria-pressable-style",
        x = "data-react-aria-pressable";

      function D(e) {
        let {
          onPress: t,
          onPressChange: n,
          onPressStart: i,
          onPressEnd: p,
          onPressUp: v,
          onClick: m,
          isDisabled: k,
          isPressed: D,
          preventFocusOnPress: K,
          shouldCancelOnPointerExit: O,
          allowTextSelectionOnPress: I,
          ref: F,
          ...W
        } = function(e) {
          let t = (0, d.useContext)(f);
          if (t) {
            let {
              register: n,
              ...r
            } = t;
            e = (0, g.v)(r, e), n()
          }
          return (0, y.w)(t, e.ref), e
        }(e), [H, U] = (0, d.useState)(!1), j = (0, d.useRef)({
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
          addGlobalListener: B,
          removeAllGlobalListeners: V
        } = (0, h.A)(), X = (0, b.J)((e, t) => {
          let r = j.current;
          if (k || r.didFirePressStart) return !1;
          let o = !0;
          if (r.isTriggeringEvent = !0, i) {
            let n = new C("pressstart", t, e);
            i(n), o = n.shouldStopPropagation
          }
          return n && n(!0), r.isTriggeringEvent = !1, r.didFirePressStart = !0, U(!0), o
        }), $ = (0, b.J)((e, r, o = !0) => {
          let a = j.current;
          if (!a.didFirePressStart) return !1;
          a.didFirePressStart = !1, a.isTriggeringEvent = !0;
          let i = !0;
          if (p) {
            let t = new C("pressend", r, e);
            p(t), i = t.shouldStopPropagation
          }
          if (n && n(!1), U(!1), t && o && !k) {
            let n = new C("press", r, e);
            t(n), i && (i = n.shouldStopPropagation)
          }
          return a.isTriggeringEvent = !1, i
        }), z = (0, b.J)((e, t) => {
          let n = j.current;
          if (k) return !1;
          if (v) {
            n.isTriggeringEvent = !0;
            let r = new C("pressup", t, e);
            return v(r), n.isTriggeringEvent = !1, r.shouldStopPropagation
          }
          return !0
        }), G = (0, b.J)(e => {
          let t = j.current;
          if (t.isPressed && t.target) {
            t.didFirePressStart && null != t.pointerType && $(_(t.target, e), t.pointerType, !1), t.isPressed = !1, t.isOverTarget = !1, t.activePointerId = null, t.pointerType = null, V(), I || c(t.target);
            for (let e of t.disposables) e();
            t.disposables = []
          }
        }), J = (0, b.J)(e => {
          O && G(e)
        }), Y = (0, b.J)(e => {
          k || null == m || m(e)
        }), q = (0, b.J)((e, t) => {
          if (!k && m) {
            let n = new MouseEvent("click", e);
            (0, r.o1)(n, t), m((0, r.eg)(n))
          }
        }), Z = (0, d.useMemo)(() => {
          let e = j.current,
            t = {
              onKeyDown(t) {
                if (R(t.nativeEvent, t.currentTarget) && (0, E.sD)(t.currentTarget, (0, E.wt)(t.nativeEvent))) {
                  var r;
                  N((0, E.wt)(t.nativeEvent), t.key) && t.preventDefault();
                  let i = !0;
                  if (!e.isPressed && !t.repeat) {
                    e.target = t.currentTarget, e.isPressed = !0, e.pointerType = "keyboard", i = X(t, "keyboard");
                    let r = t.currentTarget,
                      o = t => {
                        R(t, r) && !t.repeat && (0, E.sD)(r, (0, E.wt)(t)) && e.target && z(_(e.target, t), "keyboard")
                      };
                    B((0, a.TW)(t.currentTarget), "keyup", (0, w.c)(o, n), !0)
                  }
                  i && t.stopPropagation(), t.metaKey && (0, o.cX)() && (null === (r = e.metaKeyEvents) || void 0 === r || r.set(t.key, t.nativeEvent))
                } else "Meta" === t.key && (e.metaKeyEvents = new Map)
              },
              onClick(t) {
                if ((!t || (0, E.sD)(t.currentTarget, (0, E.wt)(t.nativeEvent))) && t && 0 === t.button && !e.isTriggeringEvent && !T.Fe.isOpening) {
                  let n = !0;
                  if (k && t.preventDefault(), e.ignoreEmulatedMouseEvents || e.isPressed || "virtual" !== e.pointerType && !(0, P.Y)(t.nativeEvent)) {
                    if (e.isPressed && "keyboard" !== e.pointerType) {
                      let r = e.pointerType || t.nativeEvent.pointerType || "virtual",
                        o = z(_(t.currentTarget, t), r),
                        a = $(_(t.currentTarget, t), r, !0);
                      n = o && a, e.isOverTarget = !1, Y(t), G(t)
                    }
                  } else {
                    let e = X(t, "virtual"),
                      r = z(t, "virtual"),
                      o = $(t, "virtual");
                    Y(t), n = e && r && o
                  }
                  e.ignoreEmulatedMouseEvents = !1, n && t.stopPropagation()
                }
              }
            },
            n = t => {
              var n;
              if (e.isPressed && e.target && R(t, e.target)) {
                var r;
                N((0, E.wt)(t), t.key) && t.preventDefault();
                let n = (0, E.wt)(t),
                  o = (0, E.sD)(e.target, (0, E.wt)(t));
                $(_(e.target, t), "keyboard", o), o && q(t, e.target), V(), "Enter" !== t.key && A(e.target) && (0, E.sD)(e.target, n) && !t[L] && (t[L] = !0, (0, T.Fe)(e.target, t, !1)), e.isPressed = !1, null === (r = e.metaKeyEvents) || void 0 === r || r.delete(t.key)
              } else if ("Meta" === t.key && (null === (n = e.metaKeyEvents) || void 0 === n ? void 0 : n.size)) {
                var o;
                let t = e.metaKeyEvents;
                e.metaKeyEvents = void 0;
                for (let n of t.values()) null === (o = e.target) || void 0 === o || o.dispatchEvent(new KeyboardEvent("keyup", n))
              }
            };
          if ("undefined" != typeof PointerEvent) {
            t.onPointerDown = t => {
              if (0 !== t.button || !(0, E.sD)(t.currentTarget, (0, E.wt)(t.nativeEvent))) return;
              if ((0, P.P)(t.nativeEvent)) return void(e.pointerType = "virtual");
              e.pointerType = t.pointerType;
              let r = !0;
              if (!e.isPressed) {
                e.isPressed = !0, e.isOverTarget = !0, e.activePointerId = t.pointerId, e.target = t.currentTarget, I || function(e) {
                  if ((0, o.un)()) {
                    if ("default" === s) {
                      const t = (0, a.TW)(e);
                      l = t.documentElement.style.webkitUserSelect, t.documentElement.style.webkitUserSelect = "none"
                    }
                    s = "disabled"
                  } else if (e instanceof HTMLElement || e instanceof SVGElement) {
                    let t = "userSelect" in e.style ? "userSelect" : "webkitUserSelect";
                    u.set(e, e.style[t]), e.style[t] = "none"
                  }
                }(e.target), r = X(t, e.pointerType);
                let c = (0, E.wt)(t.nativeEvent);
                "releasePointerCapture" in c && c.releasePointerCapture(t.pointerId), B((0, a.TW)(t.currentTarget), "pointerup", n, !1), B((0, a.TW)(t.currentTarget), "pointercancel", i, !1)
              }
              r && t.stopPropagation()
            }, t.onMouseDown = t => {
              if ((0, E.sD)(t.currentTarget, (0, E.wt)(t.nativeEvent)) && 0 === t.button) {
                if (K) {
                  let n = (0, r.LE)(t.target);
                  n && e.disposables.push(n)
                }
                t.stopPropagation()
              }
            }, t.onPointerUp = t => {
              (0, E.sD)(t.currentTarget, (0, E.wt)(t.nativeEvent)) && "virtual" !== e.pointerType && (0 !== t.button || e.isPressed || z(t, e.pointerType || t.pointerType))
            }, t.onPointerEnter = t => {
              t.pointerId === e.activePointerId && e.target && !e.isOverTarget && null != e.pointerType && (e.isOverTarget = !0, X(_(e.target, t), e.pointerType))
            }, t.onPointerLeave = t => {
              t.pointerId === e.activePointerId && e.target && e.isOverTarget && null != e.pointerType && (e.isOverTarget = !1, $(_(e.target, t), e.pointerType, !1), J(t))
            };
            let n = t => {
                if (t.pointerId === e.activePointerId && e.isPressed && 0 === t.button && e.target) {
                  if ((0, E.sD)(e.target, (0, E.wt)(t)) && null != e.pointerType) {
                    let n = !1,
                      r = setTimeout(() => {
                        e.isPressed && e.target instanceof HTMLElement && (n ? G(t) : ((0, S.e)(e.target), e.target.click()))
                      }, 80);
                    B(t.currentTarget, "click", () => n = !0, !0), e.disposables.push(() => clearTimeout(r))
                  } else G(t);
                  e.isOverTarget = !1
                }
              },
              i = e => {
                G(e)
              };
            t.onDragStart = e => {
              (0, E.sD)(e.currentTarget, (0, E.wt)(e.nativeEvent)) && G(e)
            }
          }
          return t
        }, [B, k, K, V, I, G, J, $, X, z, Y, q]);
        return (0, d.useEffect)(() => {
          if (!F) return;
          const e = (0, a.TW)(F.current);
          if (!e || !e.head || e.getElementById(M)) return;
          const t = e.createElement("style");
          t.id = M, t.textContent = `\n@layer {\n  [${x}] {\n    touch-action: pan-x pan-y pinch-zoom;\n  }\n}\n    `.trim(), e.head.prepend(t)
        }, [F]), (0, d.useEffect)(() => {
          let e = j.current;
          return () => {
            var t;
            I || c(null !== (t = e.target) && void 0 !== t ? t : void 0);
            for (let t of e.disposables) t();
            e.disposables = []
          }
        }, [I]), {
          isPressed: D || H,
          pressProps: (0, g.v)(W, Z, {
            [x]: !0
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
        } = e, o = t, i = o.getAttribute("role");
        return !("Enter" !== n && " " !== n && "Spacebar" !== n && "Space" !== r || o instanceof(0, a.mD)(o).HTMLInputElement && !O(o, n) || o instanceof(0, a.mD)(o).HTMLTextAreaElement || o.isContentEditable || ("link" === i || !i && A(o)) && "Enter" !== n)
      }

      function _(e, t) {
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

      function N(e, t) {
        return e instanceof HTMLInputElement ? !O(e, t) : function(e) {
          return !(e instanceof HTMLInputElement || (e instanceof HTMLButtonElement ? "submit" === e.type || "reset" === e.type : A(e)))
        }(e)
      }
      const K = new Set(["checkbox", "radio", "range", "color", "file", "image", "button", "submit", "reset"]);

      function O(e, t) {
        return "checkbox" === e.type || "radio" === e.type ? " " === t : K.has(e.type)
      }
    },
    42351: (e, t, n) => {
      n.d(t, {
        t: () => u,
        A: () => c
      });
      var r = n(62993);
      const o = "undefined" != typeof Element && "checkVisibility" in Element.prototype;

      function a(e, t) {
        return o ? e.checkVisibility({
          visibilityProperty: !0
        }) && !e.closest("[data-react-aria-prevent-focus]") : "#comment" !== e.nodeName && function(e) {
          const t = (0, r.mD)(e);
          if (!(e instanceof t.HTMLElement || e instanceof t.SVGElement)) return !1;
          let {
            display: n,
            visibility: o
          } = e.style, a = "none" !== n && "hidden" !== o && "collapse" !== o;
          if (a) {
            const {
              getComputedStyle: t
            } = e.ownerDocument.defaultView;
            let {
              display: n,
              visibility: r
            } = t(e);
            a = "none" !== n && "hidden" !== r && "collapse" !== r
          }
          return a
        }(e) && function(e, t) {
          return !e.hasAttribute("hidden") && !e.hasAttribute("data-react-aria-prevent-focus") && ("DETAILS" !== e.nodeName || !t || "SUMMARY" === t.nodeName || e.hasAttribute("open"))
        }(e, t) && (!e.parentElement || a(e.parentElement, e))
      }
      const i = ["input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable^="false"])', "permission"],
        s = i.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
      i.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
      const l = i.join(':not([hidden]):not([tabindex="-1"]),');

      function u(e) {
        return e.matches(s) && a(e) && !d(e)
      }

      function c(e) {
        return e.matches(l) && a(e) && !d(e)
      }

      function d(e) {
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
        sL: () => w,
        UP: () => s,
        ic: () => c,
        iQ: () => f,
        Ub: () => a,
        jt: () => l,
        ZC: () => i,
        rl: () => p
      });
      var r = n(60211),
        o = n(62229);

      function a(e, {
        defaultValue: t = !1,
        initializeWithValue: n = !0
      } = {}) {
        const a = e => r.X || !window.matchMedia ? t : window.matchMedia(e).matches,
          [i, s] = (0, o.useState)(() => n ? a(e) : t);

        function l() {
          s(a(e))
        }
        return (0, o.useEffect)(() => {
          const t = window.matchMedia?.(e);
          return l(), t?.addListener ? t?.addListener(l) : t?.addEventListener("change", l), () => {
            t?.removeListener ? t?.removeListener(l) : t?.removeEventListener("change", l)
          }
        }, [e]), i
      }

      function i(e) {
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
      const l = () => a("(prefers-reduced-motion: reduce)", {
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
        const [r, a] = function({
          defaultProp: e,
          onChange: t
        }) {
          const n = (0, o.useState)(e),
            [r] = n,
            a = (0, o.useRef)(r),
            i = u(t);
          return (0, o.useEffect)(() => {
            a.current !== r && (i(r), a.current = r)
          }, [r, a, i]), n
        }({
          defaultProp: t,
          onChange: n
        }), i = void 0 !== e, s = i ? e : r, l = u(n), c = (0, o.useCallback)(t => {
          if (i) {
            const n = "function" == typeof t ? t(e) : t;
            n !== e && l(n)
          } else a(t)
        }, [i, e, a, l]);
        return [s, c]
      }

      function d(e, t, n, r) {
        const a = (0, o.useRef)(t);
        (0, o.useEffect)(() => {
          a.current = t
        }, [t]), (0, o.useEffect)(() => {
          const t = n?.current ?? window;
          if (!t || !t.addEventListener) return;
          const o = e => {
            a.current(e)
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
        enabled: a = !0
      }) => {
        const [i, s] = (0, o.useState)(!1);
        return d("focusin", e => {
          s(!0), n?.(e), t?.(!0, e)
        }, e), d("focusout", e => {
          s(!1), r?.(e), t?.(!1, e)
        }, e), {
          isFocused: !!a && i
        }
      };

      function p(e = !0) {
        const t = a("screen and (pointer: coarse) and (hover: none)");
        return !!e && t
      }
      var v = n(36768),
        m = n(99098),
        g = n(41149),
        y = n(52061);
      const h = /^(on.*)$/,
        b = /^(onPress.*)$/;
      var E = n(51105);
      const w = ({
        inert: e,
        className: t,
        onClick: n,
        isLoading: r,
        ...o
      }, a) => {
        const {
          events: i,
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
          isPressed: u
        } = function(e, t) {
          let n, {
            elementType: r = "button",
            isDisabled: o,
            onPress: a,
            onPressStart: i,
            onPressEnd: s,
            onPressUp: l,
            onPressChange: u,
            preventFocusOnPress: c,
            allowFocusWhenDisabled: d,
            onClick: f,
            href: p,
            target: h,
            rel: b,
            type: E = "button"
          } = e;
          n = "button" === r ? {
            type: E,
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
            type: "input" === r ? E : void 0,
            disabled: "input" === r ? o : void 0,
            "aria-disabled": o && "input" !== r ? o : void 0,
            rel: "a" === r ? b : void 0
          };
          let {
            pressProps: w,
            isPressed: T
          } = (0, g.d)({
            onPressStart: i,
            onPressEnd: s,
            onPressChange: u,
            onPress: a,
            onPressUp: l,
            onClick: f,
            isDisabled: o,
            preventFocusOnPress: c,
            ref: t
          }), {
            focusableProps: P
          } = (0, y.Wc)(e, t);
          d && (P.tabIndex = o ? -1 : P.tabIndex);
          let S = (0, v.v)(P, w, (0, m.$)(e, {
            labelable: !0
          }));
          return {
            isPressed: T,
            buttonProps: (0, v.v)(n, S, {
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
        }, a), c = {
          ...l,
          role: "button",
          "data-pressed": !e && u,
          "data-loading": r,
          "aria-busy": r
        };
        return {
          isPressed: !e && u,
          buttonProps: (0, E.v)(e ? {} : c, {
            ...i,
            className: t
          })
        }
      }
    },
    49652: (e, t, n) => {
      n.d(t, {
        Tw: () => d,
        Bi: () => c,
        X1: () => f
      });
      var r = n(28830),
        o = n(79888),
        a = n(62229);
      var i = n(50336);
      let s, l = Boolean("undefined" != typeof window && window.document && window.document.createElement),
        u = new Map;

      function c(e) {
        let [t, n] = (0, a.useState)(e), o = (0, a.useRef)(null), c = (0, i.Cc)(t), d = (0, a.useRef)(null);
        if (s && s.register(d, c), l) {
          const e = u.get(c);
          e && !e.includes(o) ? e.push(o) : u.set(c, [o])
        }
        return (0, r.N)(() => {
          let e = c;
          return () => {
            s && s.unregister(d), u.delete(e)
          }
        }, [c]), (0, a.useEffect)(() => {
          let e = o.current;
          return e && n(e), () => {
            e && (o.current = null)
          }
        }), c
      }

      function d(e, t) {
        if (e === t) return e;
        let n = u.get(e);
        if (n) return n.forEach(e => e.current = t), t;
        let r = u.get(t);
        return r ? (r.forEach(t => t.current = e), e) : t
      }

      function f(e = []) {
        let t = c(),
          [n, i] = function(e) {
            let [t, n] = (0, a.useState)(e), i = (0, a.useRef)(null), s = (0, o.J)(() => {
              if (!i.current) return;
              let e = i.current.next();
              e.done ? i.current = null : t === e.value ? s() : n(e.value)
            });
            (0, r.N)(() => {
              i.current && s()
            });
            let l = (0, o.J)(e => {
              i.current = e(t), s()
            });
            return [t, l]
          }(t),
          s = (0, a.useCallback)(() => {
            i(function*() {
              yield t, yield document.getElementById(t) ? t : void 0
            })
          }, [t, i]);
        return (0, r.N)(s, [t, s, ...e]), n
      }
      "undefined" != typeof FinalizationRegistry && (s = new FinalizationRegistry(e => {
        u.delete(e)
      }))
    },
    50078: (e, t, n) => {
      n.d(t, {
        NP: () => g,
        Ym: () => d,
        zQ: () => c,
        DP: () => u
      });
      var r = n(42295),
        o = (n(10131), n(32067)),
        a = n(86825),
        i = n(62229);
      const s = (0, i.createContext)({
          colorScheme: "dark",
          defaultColorScheme: "dark",
          contrastMode: "normal",
          defaultContrastMode: "normal",
          platformScale: "mobile",
          defaultPlatformScale: "mobile",
          platformScaleRatios: a.US,
          platformScaleBreakpoints: a.Cb,
          locale: "en-US"
        }),
        l = () => (0, i.useContext)(s),
        u = () => {
          const {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: n,
            defaultContrastMode: r,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: i,
            platformScaleBreakpoints: s,
            locale: u
          } = l();
          return {
            colorScheme: e,
            defaultColorScheme: t,
            contrastMode: n,
            defaultContrastMode: r,
            platformScale: o,
            defaultPlatformScale: a,
            platformScaleRatios: i,
            platformScaleBreakpoints: s,
            locale: u
          }
        },
        c = () => {
          const {
            platformScale: e
          } = l();
          return e
        },
        d = () => {
          const {
            locale: e
          } = l();
          return e
        };
      var f = n(46219);
      const p = (e, t) => {
        const n = "more" === t ? a.xW.lightHc : a.xW.light,
          r = "more" === t ? a.xW.darkHc : a.xW.dark;
        return "dark" === e ? r : n
      };
      var v = n(75523);
      const m = () => v.X3 ? null : document.body,
        g = (0, i.forwardRef)(({
          children: e,
          className: t,
          container: n = m(),
          asChild: l,
          colorScheme: u,
          defaultColorScheme: c,
          contrastMode: d,
          defaultContrastMode: g,
          platformScaleBreakpoints: y,
          platformScaleRatios: h,
          defaultPlatformScale: b,
          platformScale: E,
          onPlatformScaleChange: w,
          locale: T = "en-US"
        }, P) => {
          const S = (0, i.useRef)(null),
            k = (0, f.UP)(S, P),
            C = (0, i.useRef)(n),
            {
              ratio: L,
              scale: M
            } = function(e) {
              const t = (0, i.useMemo)(() => ({
                  ...a.US,
                  ...e.platformScaleRatios
                }), [e.platformScaleRatios]),
                n = (0, i.useMemo)(() => ({
                  ...a.Cb,
                  ...e.platformScaleBreakpoints
                }), [e.platformScaleBreakpoints]),
                [r, o] = (0, i.useState)(e.platformScale || e.defaultPlatformScale),
                s = (0, i.useCallback)(t => {
                  o(t), e.onPlatformScaleChange?.(t)
                }, [e.onPlatformScaleChange]),
                l = (0, i.useRef)([]),
                u = () => {
                  if (!v.X3) {
                    for (const {
                        handler: e,
                        matchMedia: t
                      }
                      of l.current) t.removeEventListener("change", e);
                    l.current = []
                  }
                };
              return (0, i.useEffect)(() => (e.platformScale ? s(e.platformScale) : (() => {
                if (!v.X3) {
                  u();
                  for (const e in n) {
                    const t = window.matchMedia(n[e]),
                      r = t => {
                        t.matches && s(e)
                      };
                    t.addEventListener("change", r), t.matches && s(e), l.current.push({
                      handler: r,
                      matchMedia: t
                    })
                  }
                }
              })(), u), [n, e.platformScale, s]), {
                scale: r,
                ratio: t[r]
              }
            }({
              onPlatformScaleChange: w,
              platformScaleBreakpoints: y,
              platformScaleRatios: h,
              defaultPlatformScale: b,
              platformScale: E
            }),
            {
              appearanceClass: x,
              otherAppearanceClasses: D,
              providerColor: A,
              providerContrast: R
            } = function({
              colorScheme: e,
              defaultColorScheme: t = "dark",
              contrastMode: n,
              defaultContrastMode: r = "normal"
            }) {
              const o = (0, f.Ub)("(prefers-color-scheme: light)"),
                s = (0, f.Ub)("(prefers-color-scheme: dark)"),
                l = (0, f.Ub)("(prefers-contrast: more)"),
                u = "system" !== e && e || o && "light" || s && "dark" || t,
                c = n || l && "more" || r,
                d = (0, i.useMemo)(() => p(u, c), [u, c]),
                v = (0, i.useMemo)(() => ((e, t) => {
                  const n = p(e, t);
                  return [a.xW.light, a.xW.dark, a.xW.lightHc, a.xW.darkHc].filter(e => e !== n)
                })(u, c), [u, c]);
              return {
                appearanceClass: d,
                otherAppearanceClasses: v,
                providerColor: u,
                providerContrast: c
              }
            }({
              colorScheme: u,
              defaultColorScheme: c,
              contrastMode: d,
              defaultContrastMode: g
            });
          return (({
            container: e,
            currentScale: t,
            appearanceClass: n,
            otherAppearanceClasses: r,
            locale: o,
            className: s
          }) => {
            const l = (0, f.ZC)(s),
              u = (0, f.ZC)(e.current);
            (0, i.useEffect)(() => {
              e.current?.classList.contains(a.X6) || e.current?.classList.add(a.X6), e.current?.classList.contains(a.yU) || e.current?.classList.add(a.yU), e.current?.classList.add(n), e.current?.classList.remove(...r), l && s && e.current?.classList.contains(l) ? e.current?.classList.replace(l, s) : l && !s && e.current?.classList.contains(l) ? e.current?.classList.remove(l) : s && e.current?.classList.add(s)
            }, [n, s]), (0, i.useEffect)(() => {
              e.current?.setAttribute("lang", o)
            }, [o]), (0, i.useEffect)(() => {
              e.current?.style.setProperty(a.HZ, t.toString())
            }, [t]), (0, i.useEffect)(() => {
              u?.classList.remove(a.X6), u?.classList.remove(a.yU), u?.classList.remove(n), u?.style.removeProperty(a.HZ), s && u?.classList.remove(s)
            }, [u])
          })({
            locale: T,
            className: t,
            appearanceClass: x,
            otherAppearanceClasses: D,
            currentScale: L,
            container: l ? S : C
          }), (0, r.jsx)(s.Provider, {
            value: {
              locale: T,
              defaultColorScheme: c,
              colorScheme: A,
              defaultContrastMode: g,
              contrastMode: R,
              defaultPlatformScale: b,
              platformScale: M,
              platformScaleRatios: h,
              platformScaleBreakpoints: y
            },
            children: l ? (0, r.jsx)(o.DX, {
              ref: k,
              children: e
            }) : e
          })
        })
    },
    50336: (e, t, n) => {
      n.d(t, {
        Cc: () => l,
        wR: () => f
      });
      var r = n(62229);
      const o = {
          prefix: String(Math.round(1e10 * Math.random())),
          current: 0
        },
        a = r.createContext(o),
        i = r.createContext(!1);
      Boolean("undefined" != typeof window && window.document && window.document.createElement);
      let s = new WeakMap;
      const l = "function" == typeof r.useId ? function(e) {
        let t = r.useId(),
          [n] = (0, r.useState)(f());
        return e || `${n?"react-aria":`react-aria${o.prefix}`}-${t}`
      } : function(e) {
        let t = (0, r.useContext)(a),
          n = function(e = !1) {
            let t = (0, r.useContext)(a),
              n = (0, r.useRef)(null);
            if (null === n.current && !e) {
              var o, i;
              let e = null === (i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) || void 0 === i || null === (o = i.ReactCurrentOwner) || void 0 === o ? void 0 : o.current;
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

      function u() {
        return !1
      }

      function c() {
        return !0
      }

      function d(e) {
        return () => {}
      }

      function f() {
        return "function" == typeof r.useSyncExternalStore ? r.useSyncExternalStore(d, u, c) : (0, r.useContext)(i)
      }
    },
    52061: (e, t, n) => {
      n.d(t, {
        Wc: () => v
      });
      var r = n(38223),
        o = n(62993),
        a = n(13569),
        i = n(8324),
        s = n(28215);
      var l = n(89839),
        u = n(62229);

      function c(e) {
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
      var d = n(11021),
        f = n(36768);
      let p = u.createContext(null);

      function v(e, t) {
        let {
          focusProps: n
        } = function(e) {
          let {
            isDisabled: t,
            onFocus: n,
            onBlur: r,
            onFocusChange: i
          } = e;
          const s = (0, u.useCallback)(e => {
              if (e.target === e.currentTarget) return r && r(e), i && i(!1), !0
            }, [r, i]),
            c = (0, l.yB)(s),
            d = (0, u.useCallback)(e => {
              const t = (0, o.TW)(e.target),
                r = t ? (0, a.bq)(t) : (0, a.bq)();
              e.target === e.currentTarget && r === (0, a.wt)(e.nativeEvent) && (n && n(e), i && i(!0), c(e))
            }, [i, n, c]);
          return {
            focusProps: {
              onFocus: !t && (n || i || r) ? d : void 0,
              onBlur: t || !r && !i ? void 0 : s
            }
          }
        }(e), {
          keyboardProps: v
        } = function(e) {
          return {
            keyboardProps: e.isDisabled ? {} : {
              onKeyDown: c(e.onKeyDown),
              onKeyUp: c(e.onKeyUp)
            }
          }
        }(e), m = (0, f.v)(n, v), g = function(e) {
          let t = (0, u.useContext)(p) || {};
          (0, d.w)(t, e);
          let {
            ref: n,
            ...r
          } = t;
          return r
        }(t), y = e.isDisabled ? {} : g, h = (0, u.useRef)(e.autoFocus);
        (0, u.useEffect)(() => {
          h.current && t.current && function(e) {
            const t = (0, o.TW)(e),
              n = (0, a.bq)(t);
            if ("virtual" === (0, r.ME)()) {
              let r = n;
              (0, i.v)(() => {
                (0, a.bq)(t) === r && e.isConnected && (0, s.e)(e)
              })
            } else(0, s.e)(e)
          }(t.current), h.current = !1
        }, [t]);
        let b = e.excludeFromTabOrder ? -1 : 0;
        return e.isDisabled && (b = void 0), {
          focusableProps: (0, f.v)({
            ...m,
            tabIndex: b
          }, y)
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
        P: () => a,
        Y: () => o
      });
      var r = n(87263);

      function o(e) {
        return !("" !== e.pointerType || !e.isTrusted) || ((0, r.m0)() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function a(e) {
        return !(0, r.m0)() && 0 === e.width && 0 === e.height || 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType
      }
    },
    62993: (e, t, n) => {
      n.d(t, {
        Ng: () => a,
        TW: () => r,
        mD: () => o
      });
      const r = e => {
          var t;
          return null !== (t = null == e ? void 0 : e.ownerDocument) && void 0 !== t ? t : document
        },
        o = e => e && "window" in e && e.window === e ? e : r(e).defaultView || window;

      function a(e) {
        return null !== (t = e) && "object" == typeof t && "nodeType" in t && "number" == typeof t.nodeType && e.nodeType === Node.DOCUMENT_FRAGMENT_NODE && "host" in e;
        var t
      }
    },
    69055: (e, t, n) => {
      n.d(t, {
        Qg: () => i,
        bL: () => l,
        s6: () => s
      });
      var r = n(62229),
        o = n(78004),
        a = n(42295),
        i = Object.freeze({
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
        s = r.forwardRef((e, t) => (0, a.jsx)(o.sG.span, {
          ...e,
          ref: t,
          style: {
            ...i,
            ...e.style
          }
        }));
      s.displayName = "VisuallyHidden";
      var l = s
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
            let a = (null == o ? void 0 : o.once) ? (...t) => {
              e.current.delete(r), r(...t)
            } : r;
            e.current.set(r, {
              type: n,
              eventTarget: t,
              fn: a,
              options: o
            }), t.addEventListener(n, a, o)
          }, []),
          n = (0, r.useCallback)((t, n, r, o) => {
            var a;
            let i = (null === (a = e.current.get(r)) || void 0 === a ? void 0 : a.fn) || r;
            t.removeEventListener(n, i, o), e.current.delete(r)
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
    78004: (e, t, n) => {
      n.d(t, {
        hO: () => l,
        sG: () => s
      });
      var r = n(62229),
        o = n(91082),
        a = n(39447),
        i = n(42295),
        s = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce((e, t) => {
          const n = (0, a.TL)(`Primitive.${t}`),
            o = r.forwardRef((e, r) => {
              const {
                asChild: o,
                ...a
              } = e, s = o ? n : t;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, i.jsx)(s, {
                ...a,
                ref: r
              })
            });
          return o.displayName = `Primitive.${t}`, {
            ...e,
            [t]: o
          }
        }, {});

      function l(e, t) {
        e && o.flushSync(() => e.dispatchEvent(t))
      }
    },
    79888: (e, t, n) => {
      n.d(t, {
        J: () => s
      });
      var r, o = n(28830),
        a = n(62229);
      const i = null !== (r = a.useInsertionEffect) && void 0 !== r ? r : o.N;

      function s(e) {
        const t = (0, a.useRef)(null);
        return i(() => {
          t.current = e
        }, [e]), (0, a.useCallback)((...e) => {
          const n = t.current;
          return null == n ? void 0 : n(...e)
        }, [])
      }
    },
    86825: (e, t, n) => {
      n.d(t, {
        Cb: () => r,
        US: () => o,
        xW: () => a,
        HZ: () => i,
        X6: () => s,
        yU: () => l
      });
      var r = {
          mobile: "screen and (max-width: 1023px)",
          tablet: "screen and (min-width: 1024px) and (max-width: 1919px)",
          desktop: "screen and (min-width: 1920px) and (max-width: 2559px)",
          desktopLarge: "screen and (min-width: 2560px)"
        },
        o = {
          mobile: 1,
          tablet: 1.125,
          desktop: 1.25,
          desktopLarge: 1.375
        },
        a = {
          dark: "foundry_nu8bkp6",
          darkHc: "foundry_nu8bkp8",
          light: "foundry_nu8bkp5",
          lightHc: "foundry_nu8bkp7",
          tokens: "foundry_nu8bkp4",
          typography: "foundry_nu8bkp3"
        },
        i = "--foundry-platform-scales-ratio-65afb887",
        s = "foundry_nu8bkp4",
        l = "foundry_nu8bkp3"
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

      function a(e) {
        let t = null;
        return () => (null == t && (t = e()), t)
      }
      n.d(t, {
        Tc: () => c,
        bh: () => l,
        cX: () => i,
        gm: () => p,
        m0: () => f,
        un: () => u
      });
      const i = a(function() {
          return o(/^Mac/i)
        }),
        s = a(function() {
          return o(/^iPhone/i)
        }),
        l = a(function() {
          return o(/^iPad/i) || i() && navigator.maxTouchPoints > 1
        }),
        u = a(function() {
          return s() || l()
        }),
        c = (a(function() {
          return i() || u()
        }), a(function() {
          return r(/AppleWebKit/i) && !d()
        })),
        d = a(function() {
          return r(/Chrome/i)
        }),
        f = a(function() {
          return r(/Android/i)
        }),
        p = a(function() {
          return r(/Firefox/i)
        })
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
        eg: () => u,
        lR: () => f,
        o1: () => c,
        yB: () => d
      });
      var r = n(62993),
        o = n(28215),
        a = n(28830),
        i = n(79888),
        s = n(42351),
        l = n(62229);

      function u(e) {
        let t = e;
        return t.nativeEvent = e, t.isDefaultPrevented = () => t.defaultPrevented, t.isPropagationStopped = () => t.cancelBubble, t.persist = () => {}, t
      }

      function c(e, t) {
        Object.defineProperty(e, "target", {
          value: t
        }), Object.defineProperty(e, "currentTarget", {
          value: t
        })
      }

      function d(e) {
        let t = (0, l.useRef)({
          isFocused: !1,
          observer: null
        });
        (0, a.N)(() => {
          const e = t.current;
          return () => {
            e.observer && (e.observer.disconnect(), e.observer = null)
          }
        }, []);
        let n = (0, i.J)(t => {
          null == e || e(t)
        });
        return (0, l.useCallback)(e => {
          if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            t.current.isFocused = !0;
            let r = e.target,
              o = e => {
                if (t.current.isFocused = !1, r.disabled) {
                  let t = u(e);
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
      let f = !1;

      function p(e) {
        for (; e && !(0, s.t)(e);) e = e.parentElement;
        let t = (0, r.mD)(e),
          n = t.document.activeElement;
        if (!n || n === e) return;
        f = !0;
        let a = !1,
          i = e => {
            (e.target === n || a) && e.stopImmediatePropagation()
          },
          l = t => {
            (t.target === n || a) && (t.stopImmediatePropagation(), e || a || (a = !0, (0, o.e)(n), d()))
          },
          u = t => {
            (t.target === e || a) && t.stopImmediatePropagation()
          },
          c = t => {
            (t.target === e || a) && (t.stopImmediatePropagation(), a || (a = !0, (0, o.e)(n), d()))
          };
        t.addEventListener("blur", i, !0), t.addEventListener("focusout", l, !0), t.addEventListener("focusin", c, !0), t.addEventListener("focus", u, !0);
        let d = () => {
            cancelAnimationFrame(p), t.removeEventListener("blur", i, !0), t.removeEventListener("focusout", l, !0), t.removeEventListener("focusin", c, !0), t.removeEventListener("focus", u, !0), f = !1, a = !1
          },
          p = requestAnimationFrame(d);
        return d
      }
    },
    95362: (e, t, n) => {
      n.d(t, {
        s: () => i,
        t: () => a
      });
      var r = n(62229);

      function o(e, t) {
        if ("function" == typeof e) return e(t);
        null != e && (e.current = t)
      }

      function a(...e) {
        return t => {
          let n = !1;
          const r = e.map(e => {
            const r = o(e, t);
            return n || "function" != typeof r || (n = !0), r
          });
          if (n) return () => {
            for (let t = 0; t < r.length; t++) {
              const n = r[t];
              "function" == typeof n ? n() : o(e[t], null)
            }
          }
        }
      }

      function i(...e) {
        return r.useCallback(a(...e), e)
      }
    },
    99098: (e, t, n) => {
      n.d(t, {
        $: () => u
      });
      const r = new Set(["id"]),
        o = new Set(["aria-label", "aria-labelledby", "aria-describedby", "aria-details"]),
        a = new Set(["href", "hrefLang", "target", "rel", "download", "ping", "referrerPolicy"]),
        i = new Set(["dir", "lang", "hidden", "inert", "translate"]),
        s = new Set(["onClick", "onAuxClick", "onContextMenu", "onDoubleClick", "onMouseDown", "onMouseEnter", "onMouseLeave", "onMouseMove", "onMouseOut", "onMouseOver", "onMouseUp", "onTouchCancel", "onTouchEnd", "onTouchMove", "onTouchStart", "onPointerDown", "onPointerMove", "onPointerUp", "onPointerCancel", "onPointerEnter", "onPointerLeave", "onPointerOver", "onPointerOut", "onGotPointerCapture", "onLostPointerCapture", "onScroll", "onWheel", "onAnimationStart", "onAnimationEnd", "onAnimationIteration", "onTransitionCancel", "onTransitionEnd", "onTransitionRun", "onTransitionStart"]),
        l = /^(data-.*)$/;

      function u(e, t = {}) {
        let {
          labelable: n,
          isLink: u,
          global: c,
          events: d = c,
          propNames: f
        } = t, p = {};
        for (const t in e) Object.prototype.hasOwnProperty.call(e, t) && (r.has(t) || n && o.has(t) || u && a.has(t) || c && i.has(t) || d && s.has(t) || t.endsWith("Capture") && s.has(t.slice(0, -7)) || (null == f ? void 0 : f.has(t)) || l.test(t)) && (p[t] = e[t]);
        return p
      }
    }
  }
]);