try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "c5bf1aac-f3bf-40ca-8371-45cab70b4245", e._sentryDebugIdIdentifier = "sentry-dbid-c5bf1aac-f3bf-40ca-8371-45cab70b4245")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [4139], {
    4139(e, t, n) {
      n.r(t), n.d(t, {
        Composite: () => be,
        CompositeItem: () => ye,
        FloatingArrow: () => ke,
        FloatingDelayGroup: () => Be,
        FloatingFocusManager: () => yt,
        FloatingList: () => oe,
        FloatingNode: () => Ae,
        FloatingOverlay: () => Et,
        FloatingPortal: () => ft,
        FloatingTree: () => Se,
        NextFloatingDelayGroup: () => Ue,
        arrow: () => J.UE,
        autoPlacement: () => J.RK,
        autoUpdate: () => ee.ll,
        computePosition: () => ee.rD,
        detectOverflow: () => ee.__,
        flip: () => J.UU,
        getOverflowAncestors: () => u.v9,
        hide: () => J.jD,
        inline: () => J.mG,
        inner: () => Jt,
        limitShift: () => J.ER,
        offset: () => J.cY,
        platform: () => ee.iD,
        safePolygon: () => rn,
        shift: () => J.BN,
        size: () => J.Ej,
        useClick: () => Mt,
        useClientPoint: () => Tt,
        useDelayGroup: () => Ye,
        useDelayGroupContext: () => We,
        useDismiss: () => At,
        useFloating: () => Dt,
        useFloatingNodeId: () => Oe,
        useFloatingParentNodeId: () => Pe,
        useFloatingPortalNode: () => at,
        useFloatingRootContext: () => St,
        useFloatingTree: () => Le,
        useFocus: () => Ft,
        useHover: () => qe,
        useId: () => Ie,
        useInnerOffset: () => en,
        useInteractions: () => _t,
        useListItem: () => ue,
        useListNavigation: () => Yt,
        useMergeRefs: () => te,
        useNextDelayGroup: () => Xe,
        useRole: () => Ut,
        useTransitionStatus: () => Vt,
        useTransitionStyles: () => Zt,
        useTypeahead: () => Qt
      });
      var r = n(3082),
        o = n.t(r, 2),
        u = n(1538),
        i = n(5444),
        l = n(6295);

      function c() {
        const e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform
      }

      function s() {
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands) ? e.brands.map(e => {
          let {
            brand: t,
            version: n
          } = e;
          return t + "/" + n
        }).join(" ") : navigator.userAgent
      }

      function a() {
        return /apple/i.test(navigator.vendor)
      }

      function f() {
        const e = /android/i;
        return e.test(c()) || e.test(s())
      }

      function d() {
        return s().includes("jsdom/")
      }
      const v = "data-floating-ui-focusable",
        m = "ArrowLeft",
        p = "ArrowRight";

      function g(e) {
        let t = e.activeElement;
        for (; null != (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement);) {
          var n;
          t = t.shadowRoot.activeElement
        }
        return t
      }

      function h(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, u.Ng)(n)) {
          let n = t;
          for (; n;) {
            if (e === n) return !0;
            n = n.parentNode || n.host
          }
        }
        return !1
      }

      function b(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target
      }

      function y(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target)
      }

      function R(e) {
        return (null == e ? void 0 : e.ownerDocument) || document
      }

      function x(e) {
        return (0, u.sb)(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")
      }

      function w(e) {
        return !!e && "combobox" === e.getAttribute("role") && x(e)
      }

      function E(e) {
        return e ? e.hasAttribute(v) ? e : e.querySelector("[" + v + "]") || e : null
      }

      function I(e, t, n) {
        return void 0 === n && (n = !0), e.filter(e => {
          var r;
          return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open))
        }).flatMap(t => [t, ...I(e, t.id, n)])
      }

      function k(e, t) {
        var n;
        let r = [],
          o = null == (n = e.find(e => e.id === t)) ? void 0 : n.parentId;
        for (; o;) {
          const t = e.find(e => e.id === o);
          o = null == t ? void 0 : t.parentId, t && (r = r.concat(t))
        }
        return r
      }

      function M(e) {
        e.preventDefault(), e.stopPropagation()
      }

      function C(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (f() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function T(e) {
        return !d() && (!f() && 0 === e.width && 0 === e.height || f() && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType || e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && "touch" === e.pointerType)
      }

      function P(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e)
      }
      var L = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function O(e) {
        const t = r.useRef(e);
        return L(() => {
          t.current = e
        }), t
      }
      const A = {
        ...o
      }.useInsertionEffect || (e => e());

      function S(e) {
        const t = r.useRef(() => {});
        return A(() => {
          t.current = e
        }), r.useCallback(function() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return null == t.current ? void 0 : t.current(...n)
        }, [])
      }

      function D(e, t, n) {
        return Math.floor(e / t) !== n
      }

      function N(e, t) {
        return t < 0 || t >= e.current.length
      }

      function F(e, t) {
        return _(e, {
          disabledIndices: t
        })
      }

      function j(e, t) {
        return _(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: t
        })
      }

      function _(e, t) {
        let {
          startingIndex: n = -1,
          decrement: r = !1,
          disabledIndices: o,
          amount: u = 1
        } = void 0 === t ? {} : t, i = n;
        do {
          i += r ? -u : u
        } while (i >= 0 && i <= e.current.length - 1 && B(e, i, o));
        return i
      }

      function q(e, t) {
        let {
          event: n,
          orientation: r,
          loop: o,
          rtl: u,
          cols: l,
          disabledIndices: c,
          minIndex: s,
          maxIndex: a,
          prevIndex: f,
          stopEvent: d = !1
        } = t, v = f;
        if ("ArrowUp" === n.key) {
          if (d && M(n), -1 === f) v = a;
          else if (v = _(e, {
              startingIndex: v,
              amount: l,
              decrement: !0,
              disabledIndices: c
            }), o && (f - l < s || v < 0)) {
            const e = f % l,
              t = a % l,
              n = a - (t - e);
            v = t === e ? a : t > e ? n : n - l
          }
          N(e, v) && (v = f)
        }
        if ("ArrowDown" === n.key && (d && M(n), -1 === f ? v = s : (v = _(e, {
            startingIndex: f,
            amount: l,
            disabledIndices: c
          }), o && f + l > a && (v = _(e, {
            startingIndex: f % l - l,
            amount: l,
            disabledIndices: c
          }))), N(e, v) && (v = f)), "both" === r) {
          const t = (0, i.RI)(f / l);
          n.key === (u ? m : p) && (d && M(n), f % l !== l - 1 ? (v = _(e, {
            startingIndex: f,
            disabledIndices: c
          }), o && D(v, l, t) && (v = _(e, {
            startingIndex: f - f % l - 1,
            disabledIndices: c
          }))) : o && (v = _(e, {
            startingIndex: f - f % l - 1,
            disabledIndices: c
          })), D(v, l, t) && (v = f)), n.key === (u ? p : m) && (d && M(n), f % l !== 0 ? (v = _(e, {
            startingIndex: f,
            decrement: !0,
            disabledIndices: c
          }), o && D(v, l, t) && (v = _(e, {
            startingIndex: f + (l - f % l),
            decrement: !0,
            disabledIndices: c
          }))) : o && (v = _(e, {
            startingIndex: f + (l - f % l),
            decrement: !0,
            disabledIndices: c
          })), D(v, l, t) && (v = f));
          const r = (0, i.RI)(a / l) === t;
          N(e, v) && (v = o && r ? n.key === (u ? p : m) ? a : _(e, {
            startingIndex: f - f % l - 1,
            disabledIndices: c
          }) : f)
        }
        return v
      }

      function K(e, t, n) {
        const r = [];
        let o = 0;
        return e.forEach((e, u) => {
          let {
            width: i,
            height: l
          } = e, c = !1;
          for (n && (o = 0); !c;) {
            const e = [];
            for (let n = 0; n < i; n++)
              for (let r = 0; r < l; r++) e.push(o + n + r * t);
            o % t + i <= t && e.every(e => null == r[e]) ? (e.forEach(e => {
              r[e] = u
            }), c = !0) : o++
          }
        }), [...r]
      }

      function H(e, t, n, r, o) {
        if (-1 === e) return -1;
        const u = n.indexOf(e),
          i = t[e];
        switch (o) {
          case "tl":
            return u;
          case "tr":
            return i ? u + i.width - 1 : u;
          case "bl":
            return i ? u + (i.height - 1) * r : u;
          case "br":
            return n.lastIndexOf(e)
        }
      }

      function W(e, t) {
        return t.flatMap((t, n) => e.includes(t) ? [n] : [])
      }

      function B(e, t, n) {
        if ("function" == typeof n) return n(t);
        if (n) return n.includes(t);
        const r = e.current[t];
        return null == r || r.hasAttribute("disabled") || "true" === r.getAttribute("aria-disabled")
      }
      const Y = () => ({
        getShadowRoot: !0,
        displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
      });

      function z(e, t) {
        const n = (0, l.tabbable)(e, Y()),
          r = n.length;
        if (0 === r) return;
        const o = g(R(e)),
          u = n.indexOf(o);
        return n[-1 === u ? 1 === t ? 0 : r - 1 : u + t]
      }

      function U(e) {
        return z(R(e).body, 1) || e
      }

      function X(e) {
        return z(R(e).body, -1) || e
      }

      function G(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !h(n, r)
      }

      function V(e) {
        (0, l.tabbable)(e, Y()).forEach(e => {
          e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
        })
      }

      function Z(e) {
        e.querySelectorAll("[data-tabindex]").forEach(e => {
          const t = e.dataset.tabindex;
          delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
        })
      }
      var Q = n(9793),
        $ = n(4017),
        J = n(3213),
        ee = n(7015);

      function te(e) {
        const t = r.useRef(void 0),
          n = r.useCallback(t => {
            const n = e.map(e => {
              if (null != e) {
                if ("function" == typeof e) {
                  const n = e,
                    r = n(t);
                  return "function" == typeof r ? r : () => {
                    n(null)
                  }
                }
                return e.current = t, () => {
                  e.current = null
                }
              }
            });
            return () => {
              n.forEach(e => null == e ? void 0 : e())
            }
          }, e);
        return r.useMemo(() => e.every(e => null == e) ? null : e => {
          t.current && (t.current(), t.current = void 0), null != e && (t.current = n(e))
        }, e)
      }

      function ne(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0
      }
      const re = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map,
        elementsRef: {
          current: []
        }
      });

      function oe(e) {
        const {
          children: t,
          elementsRef: n,
          labelsRef: o
        } = e, [u, i] = r.useState(() => new Set), l = r.useCallback(e => {
          i(t => new Set(t).add(e))
        }, []), c = r.useCallback(e => {
          i(t => {
            const n = new Set(t);
            return n.delete(e), n
          })
        }, []), s = r.useMemo(() => {
          const e = new Map;
          return Array.from(u.keys()).sort(ne).forEach((t, n) => {
            e.set(t, n)
          }), e
        }, [u]);
        return (0, Q.jsx)(re.Provider, {
          value: r.useMemo(() => ({
            register: l,
            unregister: c,
            map: s,
            elementsRef: n,
            labelsRef: o
          }), [l, c, s, n, o]),
          children: t
        })
      }

      function ue(e) {
        void 0 === e && (e = {});
        const {
          label: t
        } = e, {
          register: n,
          unregister: o,
          map: u,
          elementsRef: i,
          labelsRef: l
        } = r.useContext(re), [c, s] = r.useState(null), a = r.useRef(null), f = r.useCallback(e => {
          if (a.current = e, null !== c && (i.current[c] = e, l)) {
            var n;
            const r = void 0 !== t;
            l.current[c] = r ? t : null != (n = null == e ? void 0 : e.textContent) ? n : null
          }
        }, [c, i, l, t]);
        return L(() => {
          const e = a.current;
          if (e) return n(e), () => {
            o(e)
          }
        }, [n, o]), L(() => {
          const e = a.current ? u.get(a.current) : null;
          null != e && s(e)
        }, [u]), r.useMemo(() => ({
          ref: f,
          index: c ?? -1
        }), [c, f])
      }
      const ie = "data-floating-ui-focusable",
        le = "active",
        ce = "selected",
        se = "ArrowLeft",
        ae = "ArrowRight",
        fe = "ArrowUp",
        de = "ArrowDown";

      function ve(e, t) {
        return "function" == typeof e ? e(t) : e ? r.cloneElement(e, t) : (0, Q.jsx)("div", {
          ...t
        })
      }
      const me = r.createContext({
          activeIndex: 0,
          onNavigate: () => {}
        }),
        pe = [se, ae],
        ge = [fe, de],
        he = [...pe, ...ge],
        be = r.forwardRef(function(e, t) {
          const {
            render: n,
            orientation: o = "both",
            loop: u = !0,
            rtl: i = !1,
            cols: l = 1,
            disabledIndices: c,
            activeIndex: s,
            onNavigate: a,
            itemSizes: f,
            dense: d = !1,
            ...v
          } = e, [m, p] = r.useState(0), g = null != s ? s : m, h = S(null != a ? a : p), b = r.useRef([]), y = n && "function" != typeof n ? n.props : {}, R = r.useMemo(() => ({
            activeIndex: g,
            onNavigate: h
          }), [g, h]), x = l > 1, w = {
            ...v,
            ...y,
            ref: t,
            "aria-orientation": "both" === o ? void 0 : o,
            onKeyDown(e) {
              null == v.onKeyDown || v.onKeyDown(e), null == y.onKeyDown || y.onKeyDown(e),
                function(e) {
                  if (!he.includes(e.key)) return;
                  let t = g;
                  const n = F(b, c),
                    r = j(b, c),
                    s = i ? se : ae,
                    a = i ? ae : se;
                  if (x) {
                    const a = f || Array.from({
                        length: b.current.length
                      }, () => ({
                        width: 1,
                        height: 1
                      })),
                      v = K(a, l, d),
                      m = v.findIndex(e => null != e && !B(b, e, c)),
                      p = v.reduce((e, t, n) => null == t || B(b, t, c) ? e : n, -1),
                      h = v[q({
                        current: v.map(e => e ? b.current[e] : null)
                      }, {
                        event: e,
                        orientation: o,
                        loop: u,
                        rtl: i,
                        cols: l,
                        disabledIndices: W([...("function" != typeof c ? c : null) || b.current.map((e, t) => B(b, t, c) ? t : void 0), void 0], v),
                        minIndex: m,
                        maxIndex: p,
                        prevIndex: H(g > r ? n : g, a, v, l, e.key === de ? "bl" : e.key === s ? "tr" : "tl")
                      })];
                    null != h && (t = h)
                  }
                  const v = {
                      horizontal: [s],
                      vertical: [de],
                      both: [s, de]
                    } [o],
                    m = {
                      horizontal: [a],
                      vertical: [fe],
                      both: [a, fe]
                    } [o],
                    p = x ? he : {
                      horizontal: pe,
                      vertical: ge,
                      both: he
                    } [o];
                  var y;
                  t === g && [...v, ...m].includes(e.key) && (t = u && t === r && v.includes(e.key) ? n : u && t === n && m.includes(e.key) ? r : _(b, {
                    startingIndex: t,
                    decrement: m.includes(e.key),
                    disabledIndices: c
                  })), t === g || N(b, t) || (e.stopPropagation(), p.includes(e.key) && e.preventDefault(), h(t), null == (y = b.current[t]) || y.focus())
                }(e)
            }
          };
          return (0, Q.jsx)(me.Provider, {
            value: R,
            children: (0, Q.jsx)(oe, {
              elementsRef: b,
              children: ve(n, w)
            })
          })
        }),
        ye = r.forwardRef(function(e, t) {
          const {
            render: n,
            ...o
          } = e, u = n && "function" != typeof n ? n.props : {}, {
            activeIndex: i,
            onNavigate: l
          } = r.useContext(me), {
            ref: c,
            index: s
          } = ue(), a = te([c, t, u.ref]), f = i === s;
          return ve(n, {
            ...o,
            ...u,
            ref: a,
            tabIndex: f ? 0 : -1,
            "data-active": f ? "" : void 0,
            onFocus(e) {
              null == o.onFocus || o.onFocus(e), null == u.onFocus || u.onFocus(e), l(s)
            }
          })
        }),
        Re = {
          ...o
        };
      let xe = !1,
        we = 0;
      const Ee = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + we++,
        Ie = Re.useId || function() {
          const [e, t] = r.useState(() => xe ? Ee() : void 0);
          return L(() => {
            null == e && t(Ee())
          }, []), r.useEffect(() => {
            xe = !0
          }, []), e
        },
        ke = r.forwardRef(function(e, t) {
          const {
            context: {
              placement: n,
              elements: {
                floating: o
              },
              middlewareData: {
                arrow: i,
                shift: l
              }
            },
            width: c = 14,
            height: s = 7,
            tipRadius: a = 0,
            strokeWidth: f = 0,
            staticOffset: d,
            stroke: v,
            d: m,
            style: {
              transform: p,
              ...g
            } = {},
            ...h
          } = e, b = Ie(), [y, R] = r.useState(!1);
          if (L(() => {
              o && "rtl" === (0, u.L9)(o).direction && R(!0)
            }, [o]), !o) return null;
          const [x, w] = n.split("-"), E = "top" === x || "bottom" === x;
          let I = d;
          (E && null != l && l.x || !E && null != l && l.y) && (I = null);
          const k = 2 * f,
            M = k / 2,
            C = c / 2 * (a / -8 + 1),
            T = s / 2 * a / 4,
            P = !!m,
            O = I && "end" === w ? "bottom" : "top";
          let A = I && "end" === w ? "right" : "left";
          I && y && (A = "end" === w ? "left" : "right");
          const S = null != (null == i ? void 0 : i.x) ? I || i.x : "",
            D = null != (null == i ? void 0 : i.y) ? I || i.y : "",
            N = m || "M0,0 H" + c + " L" + (c - C) + "," + (s - T) + " Q" + c / 2 + "," + s + " " + C + "," + (s - T) + " Z",
            F = {
              top: P ? "rotate(180deg)" : "",
              left: P ? "rotate(90deg)" : "rotate(-90deg)",
              bottom: P ? "" : "rotate(180deg)",
              right: P ? "rotate(-90deg)" : "rotate(90deg)"
            } [x];
          return (0, Q.jsxs)("svg", {
            ...h,
            "aria-hidden": !0,
            ref: t,
            width: P ? c : c + k,
            height: c,
            viewBox: "0 0 " + c + " " + (s > c ? s : c),
            style: {
              position: "absolute",
              pointerEvents: "none",
              [A]: S,
              [O]: D,
              [x]: E || P ? "100%" : "calc(100% - " + k / 2 + "px)",
              transform: [F, p].filter(e => !!e).join(" "),
              ...g
            },
            children: [k > 0 && (0, Q.jsx)("path", {
              clipPath: "url(#" + b + ")",
              fill: "none",
              stroke: v,
              strokeWidth: k + (m ? 0 : 1),
              d: N
            }), (0, Q.jsx)("path", {
              stroke: k && !m ? h.fill : "none",
              d: N
            }), (0, Q.jsx)("clipPath", {
              id: b,
              children: (0, Q.jsx)("rect", {
                x: -M,
                y: M * (P ? -1 : 1),
                width: c + k,
                height: c
              })
            })]
          })
        });

      function Me() {
        const e = new Map;
        return {
          emit(t, n) {
            var r;
            null == (r = e.get(t)) || r.forEach(e => e(n))
          },
          on(t, n) {
            e.has(t) || e.set(t, new Set), e.get(t).add(n)
          },
          off(t, n) {
            var r;
            null == (r = e.get(t)) || r.delete(n)
          }
        }
      }
      const Ce = r.createContext(null),
        Te = r.createContext(null),
        Pe = () => {
          var e;
          return (null == (e = r.useContext(Ce)) ? void 0 : e.id) || null
        },
        Le = () => r.useContext(Te);

      function Oe(e) {
        const t = Ie(),
          n = Le(),
          r = Pe(),
          o = e || r;
        return L(() => {
          if (!t) return;
          const e = {
            id: t,
            parentId: o
          };
          return null == n || n.addNode(e), () => {
            null == n || n.removeNode(e)
          }
        }, [n, t, o]), t
      }

      function Ae(e) {
        const {
          children: t,
          id: n
        } = e, o = Pe();
        return (0, Q.jsx)(Ce.Provider, {
          value: r.useMemo(() => ({
            id: n,
            parentId: o
          }), [n, o]),
          children: t
        })
      }

      function Se(e) {
        const {
          children: t
        } = e, n = r.useRef([]), o = r.useCallback(e => {
          n.current = [...n.current, e]
        }, []), u = r.useCallback(e => {
          n.current = n.current.filter(t => t !== e)
        }, []), [i] = r.useState(() => Me());
        return (0, Q.jsx)(Te.Provider, {
          value: r.useMemo(() => ({
            nodesRef: n,
            addNode: o,
            removeNode: u,
            events: i
          }), [o, u, i]),
          children: t
        })
      }

      function De(e) {
        return "data-floating-ui-" + e
      }

      function Ne(e) {
        -1 !== e.current && (clearTimeout(e.current), e.current = -1)
      }
      const Fe = De("safe-polygon");

      function je(e, t, n) {
        if (n && !P(n)) return 0;
        if ("number" == typeof e) return e;
        if ("function" == typeof e) {
          const n = e();
          return "number" == typeof n ? n : null == n ? void 0 : n[t]
        }
        return null == e ? void 0 : e[t]
      }

      function _e(e) {
        return "function" == typeof e ? e() : e
      }

      function qe(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          dataRef: i,
          events: l,
          elements: c
        } = e, {
          enabled: s = !0,
          delay: a = 0,
          handleClose: f = null,
          mouseOnly: d = !1,
          restMs: v = 0,
          move: m = !0
        } = t, p = Le(), g = Pe(), b = O(f), y = O(a), x = O(n), w = O(v), E = r.useRef(), I = r.useRef(-1), k = r.useRef(), M = r.useRef(-1), C = r.useRef(!0), T = r.useRef(!1), A = r.useRef(() => {}), D = r.useRef(!1), N = S(() => {
          var e;
          const t = null == (e = i.current.openEvent) ? void 0 : e.type;
          return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
        });
        r.useEffect(() => {
          if (s) return l.on("openchange", e), () => {
            l.off("openchange", e)
          };

          function e(e) {
            let {
              open: t
            } = e;
            t || (Ne(I), Ne(M), C.current = !0, D.current = !1)
          }
        }, [s, l]), r.useEffect(() => {
          if (!s) return;
          if (!b.current) return;
          if (!n) return;

          function e(e) {
            N() && o(!1, e, "hover")
          }
          const t = R(c.floating).documentElement;
          return t.addEventListener("mouseleave", e), () => {
            t.removeEventListener("mouseleave", e)
          }
        }, [c.floating, n, o, s, b, N]);
        const F = r.useCallback(function(e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = "hover");
            const r = je(y.current, "close", E.current);
            r && !k.current ? (Ne(I), I.current = window.setTimeout(() => o(!1, e, n), r)) : t && (Ne(I), o(!1, e, n))
          }, [y, o]),
          j = S(() => {
            A.current(), k.current = void 0
          }),
          _ = S(() => {
            if (T.current) {
              const e = R(c.floating).body;
              e.style.pointerEvents = "", e.removeAttribute(Fe), T.current = !1
            }
          }),
          q = S(() => !!i.current.openEvent && ["click", "mousedown"].includes(i.current.openEvent.type));
        r.useEffect(() => {
          if (s && (0, u.vq)(c.domReference)) {
            const o = c.domReference,
              u = c.floating;
            return n && o.addEventListener("mouseleave", r), m && o.addEventListener("mousemove", e, {
              once: !0
            }), o.addEventListener("mouseenter", e), o.addEventListener("mouseleave", t), u && (u.addEventListener("mouseleave", r), u.addEventListener("mouseenter", l), u.addEventListener("mouseleave", a)), () => {
              n && o.removeEventListener("mouseleave", r), m && o.removeEventListener("mousemove", e), o.removeEventListener("mouseenter", e), o.removeEventListener("mouseleave", t), u && (u.removeEventListener("mouseleave", r), u.removeEventListener("mouseenter", l), u.removeEventListener("mouseleave", a))
            }
          }

          function e(e) {
            if (Ne(I), C.current = !1, d && !P(E.current) || _e(w.current) > 0 && !je(y.current, "open")) return;
            const t = je(y.current, "open", E.current);
            t ? I.current = window.setTimeout(() => {
              x.current || o(!0, e, "hover")
            }, t) : n || o(!0, e, "hover")
          }

          function t(e) {
            if (q()) return void _();
            A.current();
            const t = R(c.floating);
            if (Ne(M), D.current = !1, b.current && i.current.floatingContext) {
              n || Ne(I), k.current = b.current({
                ...i.current.floatingContext,
                tree: p,
                x: e.clientX,
                y: e.clientY,
                onClose() {
                  _(), j(), q() || F(e, !0, "safe-polygon")
                }
              });
              const r = k.current;
              return t.addEventListener("mousemove", r), void(A.current = () => {
                t.removeEventListener("mousemove", r)
              })
            }("touch" !== E.current || !h(c.floating, e.relatedTarget)) && F(e)
          }

          function r(e) {
            q() || i.current.floatingContext && (null == b.current || b.current({
              ...i.current.floatingContext,
              tree: p,
              x: e.clientX,
              y: e.clientY,
              onClose() {
                _(), j(), q() || F(e)
              }
            })(e))
          }

          function l() {
            Ne(I)
          }

          function a(e) {
            q() || F(e, !1)
          }
        }, [c, s, e, d, m, F, j, _, o, n, x, p, y, b, i, q, w]), L(() => {
          var e;
          if (s && n && null != (e = b.current) && null != (e = e.__options) && e.blockPointerEvents && N()) {
            T.current = !0;
            const e = c.floating;
            if ((0, u.vq)(c.domReference) && e) {
              var t;
              const n = R(c.floating).body;
              n.setAttribute(Fe, "");
              const r = c.domReference,
                o = null == p || null == (t = p.nodesRef.current.find(e => e.id === g)) || null == (t = t.context) ? void 0 : t.elements.floating;
              return o && (o.style.pointerEvents = ""), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", e.style.pointerEvents = "auto", () => {
                n.style.pointerEvents = "", r.style.pointerEvents = "", e.style.pointerEvents = ""
              }
            }
          }
        }, [s, n, g, c, p, b, N]), L(() => {
          n || (E.current = void 0, D.current = !1, j(), _())
        }, [n, j, _]), r.useEffect(() => () => {
          j(), Ne(I), Ne(M), _()
        }, [s, c.domReference, j, _]);
        const K = r.useMemo(() => {
          function e(e) {
            E.current = e.pointerType
          }
          return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
              const {
                nativeEvent: t
              } = e;

              function r() {
                C.current || x.current || o(!0, t, "hover")
              }
              d && !P(E.current) || n || 0 === _e(w.current) || D.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (Ne(M), "touch" === E.current ? r() : (D.current = !0, M.current = window.setTimeout(r, _e(w.current))))
            }
          }
        }, [d, o, n, x, w]);
        return r.useMemo(() => s ? {
          reference: K
        } : {}, [s, K])
      }
      const Ke = () => {},
        He = r.createContext({
          delay: 0,
          initialDelay: 0,
          timeoutMs: 0,
          currentId: null,
          setCurrentId: Ke,
          setState: Ke,
          isInstantPhase: !1
        }),
        We = () => r.useContext(He);

      function Be(e) {
        const {
          children: t,
          delay: n,
          timeoutMs: o = 0
        } = e, [u, i] = r.useReducer((e, t) => ({
          ...e,
          ...t
        }), {
          delay: n,
          timeoutMs: o,
          initialDelay: n,
          currentId: null,
          isInstantPhase: !1
        }), l = r.useRef(null), c = r.useCallback(e => {
          i({
            currentId: e
          })
        }, []);
        return L(() => {
          u.currentId ? null === l.current ? l.current = u.currentId : u.isInstantPhase || i({
            isInstantPhase: !0
          }) : (u.isInstantPhase && i({
            isInstantPhase: !1
          }), l.current = null)
        }, [u.currentId, u.isInstantPhase]), (0, Q.jsx)(He.Provider, {
          value: r.useMemo(() => ({
            ...u,
            setState: i,
            setCurrentId: c
          }), [u, c]),
          children: t
        })
      }

      function Ye(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: r,
          floatingId: o
        } = e, {
          id: u,
          enabled: i = !0
        } = t, l = null != u ? u : o, c = We(), {
          currentId: s,
          setCurrentId: a,
          initialDelay: f,
          setState: d,
          timeoutMs: v
        } = c;
        return L(() => {
          i && s && (d({
            delay: {
              open: 1,
              close: je(f, "close")
            }
          }), s !== l && r(!1))
        }, [i, l, r, d, s, f]), L(() => {
          function e() {
            r(!1), d({
              delay: f,
              currentId: null
            })
          }
          if (i && s && !n && s === l) {
            if (v) {
              const t = window.setTimeout(e, v);
              return () => {
                clearTimeout(t)
              }
            }
            e()
          }
        }, [i, n, d, s, l, r, f, v]), L(() => {
          i && a !== Ke && n && a(l)
        }, [i, n, a, l]), c
      }
      const ze = r.createContext({
        hasProvider: !1,
        timeoutMs: 0,
        delayRef: {
          current: 0
        },
        initialDelayRef: {
          current: 0
        },
        timeoutIdRef: {
          current: -1
        },
        currentIdRef: {
          current: null
        },
        currentContextRef: {
          current: null
        }
      });

      function Ue(e) {
        const {
          children: t,
          delay: n,
          timeoutMs: o = 0
        } = e, u = r.useRef(n), i = r.useRef(n), l = r.useRef(null), c = r.useRef(null), s = r.useRef(-1);
        return (0, Q.jsx)(ze.Provider, {
          value: r.useMemo(() => ({
            hasProvider: !0,
            delayRef: u,
            initialDelayRef: i,
            currentIdRef: l,
            timeoutMs: o,
            currentContextRef: c,
            timeoutIdRef: s
          }), [o]),
          children: t
        })
      }

      function Xe(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          floatingId: u
        } = e, {
          enabled: i = !0
        } = t, l = r.useContext(ze), {
          currentIdRef: c,
          delayRef: s,
          timeoutMs: a,
          initialDelayRef: f,
          currentContextRef: d,
          hasProvider: v,
          timeoutIdRef: m
        } = l, [p, g] = r.useState(!1);
        return L(() => {
          function e() {
            var e;
            g(!1), null == (e = d.current) || e.setIsInstantPhase(!1), c.current = null, d.current = null, s.current = f.current
          }
          if (i && c.current && !n && c.current === u) {
            if (g(!1), a) return m.current = window.setTimeout(e, a), () => {
              clearTimeout(m.current)
            };
            e()
          }
        }, [i, n, u, c, s, a, f, d, m]), L(() => {
          if (!i) return;
          if (!n) return;
          const e = d.current,
            t = c.current;
          d.current = {
            onOpenChange: o,
            setIsInstantPhase: g
          }, c.current = u, s.current = {
            open: 0,
            close: je(f.current, "close")
          }, null !== t && t !== u ? (Ne(m), g(!0), null == e || e.setIsInstantPhase(!0), null == e || e.onOpenChange(!1)) : (g(!1), null == e || e.setIsInstantPhase(!1))
        }, [i, n, u, o, c, s, a, f, d, m]), L(() => () => {
          d.current = null
        }, [d]), r.useMemo(() => ({
          hasProvider: v,
          delayRef: s,
          isInstantPhase: p
        }), [v, s, p])
      }
      let Ge = 0;

      function Ve(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1
        } = t;
        r && cancelAnimationFrame(Ge);
        const u = () => null == e ? void 0 : e.focus({
          preventScroll: n
        });
        o ? u() : Ge = requestAnimationFrame(u)
      }

      function Ze(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && (0, u.Ng)(n)) {
          let n = t;
          for (; n;) {
            if (e === n) return !0;
            n = n.parentNode || n.host
          }
        }
        return !1
      }
      const Qe = {
        inert: new WeakMap,
        "aria-hidden": new WeakMap,
        none: new WeakMap
      };

      function $e(e) {
        return "inert" === e ? Qe.inert : "aria-hidden" === e ? Qe["aria-hidden"] : Qe.none
      }
      let Je = new WeakSet,
        et = {},
        tt = 0;

      function nt(e) {
        return e ? (0, u.Ng)(e) ? e.host : nt(e.parentNode) : null
      }
      const rt = (e, t) => t.map(t => {
        if (e.contains(t)) return t;
        const n = nt(t);
        return e.contains(n) ? n : null
      }).filter(e => null != e);

      function ot(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = (o = e[0], (null == o ? void 0 : o.ownerDocument) || document).body;
        var o;
        return function(e, t, n, r) {
          const o = "data-floating-ui-inert",
            i = r ? "inert" : n ? "aria-hidden" : null,
            l = rt(t, e),
            c = new Set,
            s = new Set(l),
            a = [];
          et[o] || (et[o] = new WeakMap);
          const f = et[o];
          return l.forEach(function e(t) {
              t && !c.has(t) && (c.add(t), t.parentNode && e(t.parentNode))
            }),
            function e(t) {
              t && !s.has(t) && [].forEach.call(t.children, t => {
                if ("script" !== (0, u.mq)(t))
                  if (c.has(t)) e(t);
                  else {
                    const e = i ? t.getAttribute(i) : null,
                      n = null !== e && "false" !== e,
                      r = $e(i),
                      u = (r.get(t) || 0) + 1,
                      l = (f.get(t) || 0) + 1;
                    r.set(t, u), f.set(t, l), a.push(t), 1 === u && n && Je.add(t), 1 === l && t.setAttribute(o, ""), !n && i && t.setAttribute(i, "inert" === i ? "" : "true")
                  }
              })
            }(t), c.clear(), tt++, () => {
              a.forEach(e => {
                const t = $e(i),
                  n = (t.get(e) || 0) - 1,
                  r = (f.get(e) || 0) - 1;
                t.set(e, n), f.set(e, r), n || (!Je.has(e) && i && e.removeAttribute(i), Je.delete(e)), r || e.removeAttribute(o)
              }), tt--, tt || (Qe.inert = new WeakMap, Qe["aria-hidden"] = new WeakMap, Qe.none = new WeakMap, Je = new WeakSet, et = {})
            }
        }(e.concat(Array.from(r.querySelectorAll('[aria-live],[role="status"],output'))), r, t, n)
      }
      const ut = {
          border: 0,
          clip: "rect(0 0 0 0)",
          height: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: 0,
          position: "fixed",
          whiteSpace: "nowrap",
          width: "1px",
          top: 0,
          left: 0
        },
        it = r.forwardRef(function(e, t) {
          const [n, o] = r.useState();
          L(() => {
            a() && o("button")
          }, []);
          const u = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [De("focus-guard")]: "",
            style: ut
          };
          return (0, Q.jsx)("span", {
            ...e,
            ...u
          })
        }),
        lt = {
          clipPath: "inset(50%)",
          position: "fixed",
          top: 0,
          left: 0
        },
        ct = r.createContext(null),
        st = De("portal");

      function at(e) {
        void 0 === e && (e = {});
        const {
          id: t,
          root: n
        } = e, o = Ie(), i = dt(), [l, c] = r.useState(null), s = r.useRef(null);
        return L(() => () => {
          null == l || l.remove(), queueMicrotask(() => {
            s.current = null
          })
        }, [l]), L(() => {
          if (!o) return;
          if (s.current) return;
          const e = t ? document.getElementById(t) : null;
          if (!e) return;
          const n = document.createElement("div");
          n.id = o, n.setAttribute(st, ""), e.appendChild(n), s.current = n, c(n)
        }, [t, o]), L(() => {
          if (null === n) return;
          if (!o) return;
          if (s.current) return;
          let e = n || (null == i ? void 0 : i.portalNode);
          e && !(0, u.Ll)(e) && (e = e.current), e = e || document.body;
          let r = null;
          t && (r = document.createElement("div"), r.id = t, e.appendChild(r));
          const l = document.createElement("div");
          l.id = o, l.setAttribute(st, ""), e = r || e, e.appendChild(l), s.current = l, c(l)
        }, [t, n, o, i]), l
      }

      function ft(e) {
        const {
          children: t,
          id: n,
          root: o,
          preserveTabOrder: u = !0
        } = e, i = at({
          id: n,
          root: o
        }), [l, c] = r.useState(null), s = r.useRef(null), a = r.useRef(null), f = r.useRef(null), d = r.useRef(null), v = null == l ? void 0 : l.modal, m = null == l ? void 0 : l.open, p = !!l && !l.modal && l.open && u && !(!o && !i);
        return r.useEffect(() => {
          if (i && u && !v) return i.addEventListener("focusin", e, !0), i.addEventListener("focusout", e, !0), () => {
            i.removeEventListener("focusin", e, !0), i.removeEventListener("focusout", e, !0)
          };

          function e(e) {
            i && G(e) && ("focusin" === e.type ? Z : V)(i)
          }
        }, [i, u, v]), r.useEffect(() => {
          i && (m || Z(i))
        }, [m, i]), (0, Q.jsxs)(ct.Provider, {
          value: r.useMemo(() => ({
            preserveTabOrder: u,
            beforeOutsideRef: s,
            afterOutsideRef: a,
            beforeInsideRef: f,
            afterInsideRef: d,
            portalNode: i,
            setFocusManagerState: c
          }), [u, i]),
          children: [p && i && (0, Q.jsx)(it, {
            "data-type": "outside",
            ref: s,
            onFocus: e => {
              if (G(e, i)) {
                var t;
                null == (t = f.current) || t.focus()
              } else {
                const e = X(l ? l.domReference : null);
                null == e || e.focus()
              }
            }
          }), p && i && (0, Q.jsx)("span", {
            "aria-owns": i.id,
            style: lt
          }), i && $.createPortal(t, i), p && i && (0, Q.jsx)(it, {
            "data-type": "outside",
            ref: a,
            onFocus: e => {
              if (G(e, i)) {
                var t;
                null == (t = d.current) || t.focus()
              } else {
                const t = U(l ? l.domReference : null);
                null == t || t.focus(), (null == l ? void 0 : l.closeOnFocusOut) && (null == l || l.onOpenChange(!1, e.nativeEvent, "focus-out"))
              }
            }
          })]
        })
      }
      const dt = () => r.useContext(ct);

      function vt(e) {
        return r.useMemo(() => t => {
          e.forEach(e => {
            e && (e.current = t)
          })
        }, e)
      }
      let mt = [];

      function pt() {
        mt = mt.filter(e => {
          var t;
          return null == (t = e.deref()) ? void 0 : t.isConnected
        })
      }

      function gt() {
        pt();
        const e = mt[mt.length - 1];
        return null == e ? void 0 : e.deref()
      }

      function ht(e, t) {
        var n;
        if (!(t.current.includes("floating") || null != (n = e.getAttribute("role")) && n.includes("dialog"))) return;
        const r = Y(),
          o = (0, l.focusable)(e, r).filter(e => {
            const t = e.getAttribute("data-tabindex") || "";
            return (0, l.isTabbable)(e, r) || e.hasAttribute("data-tabindex") && !t.startsWith("-")
          }),
          u = e.getAttribute("tabindex");
        t.current.includes("floating") || 0 === o.length ? "0" !== u && e.setAttribute("tabindex", "0") : ("-1" !== u || e.hasAttribute("data-tabindex") && "-1" !== e.getAttribute("data-tabindex")) && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"))
      }
      const bt = r.forwardRef(function(e, t) {
        return (0, Q.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: ut
        })
      });

      function yt(e) {
        const {
          context: t,
          children: n,
          disabled: o = !1,
          order: i = ["content"],
          guards: c = !0,
          initialFocus: s = 0,
          returnFocus: a = !0,
          restoreFocus: f = !1,
          modal: d = !0,
          visuallyHiddenDismiss: v = !1,
          closeOnFocusOut: m = !0,
          outsideElementsInert: p = !1,
          getInsideElements: y = () => []
        } = e, {
          open: x,
          onOpenChange: P,
          events: A,
          dataRef: D,
          elements: {
            domReference: N,
            floating: F
          }
        } = t, j = S(() => {
          var e;
          return null == (e = D.current.floatingContext) ? void 0 : e.nodeId
        }), _ = S(y), q = "number" == typeof s && s < 0, K = w(N) && q, H = "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype, W = !H || c, B = !W || H && p, z = O(i), V = O(s), Z = O(a), $ = Le(), J = dt(), ee = r.useRef(null), te = r.useRef(null), ne = r.useRef(!1), re = r.useRef(!1), oe = r.useRef(-1), ue = r.useRef(-1), ie = null != J, le = E(F), ce = S(function(e) {
          return void 0 === e && (e = le), e ? (0, l.tabbable)(e, Y()) : []
        }), se = S(e => {
          const t = ce(e);
          return z.current.map(e => N && "reference" === e ? N : le && "floating" === e ? le : t).filter(Boolean).flat()
        });
        r.useEffect(() => {
          if (o) return;
          if (!d) return;

          function e(e) {
            if ("Tab" === e.key) {
              h(le, g(R(le))) && 0 === ce().length && !K && M(e);
              const t = se(),
                n = b(e);
              "reference" === z.current[0] && n === N && (M(e), e.shiftKey ? Ve(t[t.length - 1]) : Ve(t[1])), "floating" === z.current[1] && n === le && e.shiftKey && (M(e), Ve(t[0]))
            }
          }
          const t = R(le);
          return t.addEventListener("keydown", e), () => {
            t.removeEventListener("keydown", e)
          }
        }, [o, N, le, d, z, K, ce, se]), r.useEffect(() => {
          if (!o && F) return F.addEventListener("focusin", e), () => {
            F.removeEventListener("focusin", e)
          };

          function e(e) {
            const t = b(e),
              n = ce().indexOf(t); - 1 !== n && (oe.current = n)
          }
        }, [o, F, ce]), r.useEffect(() => {
          if (o) return;
          if (!m) return;

          function e() {
            re.current = !0, setTimeout(() => {
              re.current = !1
            })
          }

          function t(e) {
            const t = e.relatedTarget,
              n = e.currentTarget,
              r = b(e);
            queueMicrotask(() => {
              const o = j(),
                i = !(h(N, t) || h(F, t) || h(t, F) || h(null == J ? void 0 : J.portalNode, t) || null != t && t.hasAttribute(De("focus-guard")) || $ && (I($.nodesRef.current, o).find(e => {
                  var n, r;
                  return h(null == (n = e.context) ? void 0 : n.elements.floating, t) || h(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                }) || k($.nodesRef.current, o).find(e => {
                  var n, r, o;
                  return [null == (n = e.context) ? void 0 : n.elements.floating, E(null == (r = e.context) ? void 0 : r.elements.floating)].includes(t) || (null == (o = e.context) ? void 0 : o.elements.domReference) === t
                })));
              if (n === N && le && ht(le, z), f && n !== N && (null == r || !r.isConnected) && g(R(le)) === R(le).body) {
                (0, u.sb)(le) && le.focus();
                const e = oe.current,
                  t = ce(),
                  n = t[e] || t[t.length - 1] || le;
                (0, u.sb)(n) && n.focus()
              }
              D.current.insideReactTree ? D.current.insideReactTree = !1 : !K && d || !t || !i || re.current || t === gt() || (ne.current = !0, P(!1, e, "focus-out"))
            })
          }
          const n = Boolean(!$ && J);

          function r() {
            Ne(ue), D.current.insideReactTree = !0, ue.current = window.setTimeout(() => {
              D.current.insideReactTree = !1
            })
          }
          return F && (0, u.sb)(N) ? (N.addEventListener("focusout", t), N.addEventListener("pointerdown", e), F.addEventListener("focusout", t), n && F.addEventListener("focusout", r, !0), () => {
            N.removeEventListener("focusout", t), N.removeEventListener("pointerdown", e), F.removeEventListener("focusout", t), n && F.removeEventListener("focusout", r, !0)
          }) : void 0
        }, [o, N, F, le, d, $, J, P, m, f, ce, K, j, z, D]);
        const ae = r.useRef(null),
          fe = r.useRef(null),
          de = vt([ae, null == J ? void 0 : J.beforeInsideRef]),
          ve = vt([fe, null == J ? void 0 : J.afterInsideRef]);

        function me(e) {
          return !o && v && d ? (0, Q.jsx)(bt, {
            ref: "start" === e ? ee : te,
            onClick: e => P(!1, e.nativeEvent),
            children: "string" == typeof v ? v : "Dismiss"
          }) : null
        }
        r.useEffect(() => {
          var e, t;
          if (o) return;
          if (!F) return;
          const n = Array.from((null == J || null == (e = J.portalNode) ? void 0 : e.querySelectorAll("[" + De("portal") + "]")) || []),
            r = null == (t = ($ ? k($.nodesRef.current, j()) : []).find(e => {
              var t;
              return w((null == (t = e.context) ? void 0 : t.elements.domReference) || null)
            })) || null == (t = t.context) ? void 0 : t.elements.domReference,
            u = [F, r, ...n, ..._(), ee.current, te.current, ae.current, fe.current, null == J ? void 0 : J.beforeOutsideRef.current, null == J ? void 0 : J.afterOutsideRef.current, z.current.includes("reference") || K ? N : null].filter(e => null != e),
            i = d || K ? ot(u, !B, B) : ot(u);
          return () => {
            i()
          }
        }, [o, N, F, d, z, J, K, W, B, $, j, _]), L(() => {
          if (o || !(0, u.sb)(le)) return;
          const e = g(R(le));
          queueMicrotask(() => {
            const t = se(le),
              n = V.current,
              r = ("number" == typeof n ? t[n] : n.current) || le,
              o = h(le, e);
            q || o || !x || Ve(r, {
              preventScroll: r === le
            })
          })
        }, [o, x, le, q, se, V]), L(() => {
          if (o || !le) return;
          const e = R(le);
          var t;

          function n(e) {
            let {
              reason: t,
              event: n,
              nested: r
            } = e;
            if (["hover", "safe-polygon"].includes(t) && "mouseleave" === n.type && (ne.current = !0), "outside-press" === t)
              if (r) ne.current = !1;
              else if (C(n) || T(n)) ne.current = !1;
            else {
              let e = !1;
              document.createElement("div").focus({
                get preventScroll() {
                  return e = !0, !1
                }
              }), ne.current = !e
            }
          }
          t = g(e), pt(), t && "body" !== (0, u.mq)(t) && (mt.push(new WeakRef(t)), mt.length > 20 && (mt = mt.slice(-20))), A.on("openchange", n);
          const r = e.createElement("span");
          return r.setAttribute("tabindex", "-1"), r.setAttribute("aria-hidden", "true"), Object.assign(r.style, ut), ie && N && N.insertAdjacentElement("afterend", r), () => {
            A.off("openchange", n);
            const t = g(e),
              o = h(F, t) || $ && I($.nodesRef.current, j(), !1).some(e => {
                var n;
                return h(null == (n = e.context) ? void 0 : n.elements.floating, t)
              }),
              i = function() {
                if ("boolean" == typeof Z.current) {
                  const e = N || gt();
                  return e && e.isConnected ? e : r
                }
                return Z.current.current || r
              }();
            queueMicrotask(() => {
              const n = function(e) {
                const t = Y();
                return (0, l.isTabbable)(e, t) ? e : (0, l.tabbable)(e, t)[0] || e
              }(i);
              Z.current && !ne.current && (0, u.sb)(n) && (n === t || t === e.body || o) && n.focus({
                preventScroll: !0
              }), r.remove()
            })
          }
        }, [o, F, le, Z, D, A, $, ie, N, j]), r.useEffect(() => (queueMicrotask(() => {
          ne.current = !1
        }), () => {
          queueMicrotask(pt)
        }), [o]), L(() => {
          if (!o && J) return J.setFocusManagerState({
            modal: d,
            closeOnFocusOut: m,
            open: x,
            onOpenChange: P,
            domReference: N
          }), () => {
            J.setFocusManagerState(null)
          }
        }, [o, J, d, x, P, m, N]), L(() => {
          o || le && ht(le, z)
        }, [o, le, z]);
        const pe = !o && W && (!d || !K) && (ie || d);
        return (0, Q.jsxs)(Q.Fragment, {
          children: [pe && (0, Q.jsx)(it, {
            "data-type": "inside",
            ref: de,
            onFocus: e => {
              if (d) {
                const e = se();
                Ve("reference" === i[0] ? e[0] : e[e.length - 1])
              } else if (null != J && J.preserveTabOrder && J.portalNode)
                if (ne.current = !1, G(e, J.portalNode)) {
                  const e = U(N);
                  null == e || e.focus()
                } else {
                  var t;
                  null == (t = J.beforeOutsideRef.current) || t.focus()
                }
            }
          }), !K && me("start"), n, me("end"), pe && (0, Q.jsx)(it, {
            "data-type": "inside",
            ref: ve,
            onFocus: e => {
              if (d) Ve(se()[0]);
              else if (null != J && J.preserveTabOrder && J.portalNode)
                if (m && (ne.current = !0), G(e, J.portalNode)) {
                  const e = X(N);
                  null == e || e.focus()
                } else {
                  var t;
                  null == (t = J.afterOutsideRef.current) || t.focus()
                }
            }
          })]
        })
      }
      let Rt = 0;
      const xt = "--floating-ui-scrollbar-width";
      let wt = () => {};
      const Et = r.forwardRef(function(e, t) {
        const {
          lockScroll: n = !1,
          ...r
        } = e;
        return L(() => {
          if (n) return Rt++, 1 === Rt && (wt = function() {
            const e = c(),
              t = /iP(hone|ad|od)|iOS/.test(e) || "MacIntel" === e && navigator.maxTouchPoints > 1,
              n = document.body.style,
              r = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight",
              o = window.innerWidth - document.documentElement.clientWidth,
              u = n.left ? parseFloat(n.left) : window.scrollX,
              i = n.top ? parseFloat(n.top) : window.scrollY;
            if (n.overflow = "hidden", n.setProperty(xt, o + "px"), o && (n[r] = o + "px"), t) {
              var l, s;
              const e = (null == (l = window.visualViewport) ? void 0 : l.offsetLeft) || 0,
                t = (null == (s = window.visualViewport) ? void 0 : s.offsetTop) || 0;
              Object.assign(n, {
                position: "fixed",
                top: -(i - Math.floor(t)) + "px",
                left: -(u - Math.floor(e)) + "px",
                right: "0"
              })
            }
            return () => {
              Object.assign(n, {
                overflow: "",
                [r]: ""
              }), n.removeProperty(xt), t && (Object.assign(n, {
                position: "",
                top: "",
                left: "",
                right: ""
              }), window.scrollTo(u, i))
            }
          }()), () => {
            Rt--, 0 === Rt && wt()
          }
        }, [n]), (0, Q.jsx)("div", {
          ref: t,
          ...r,
          style: {
            position: "fixed",
            overflow: "auto",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            ...r.style
          }
        })
      });

      function It(e) {
        return (0, u.sb)(e.target) && "BUTTON" === e.target.tagName
      }

      function kt(e) {
        return x(e)
      }

      function Mt(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          dataRef: i,
          elements: {
            domReference: l
          }
        } = e, {
          enabled: c = !0,
          event: s = "click",
          toggle: a = !0,
          ignoreMouse: f = !1,
          keyboardHandlers: d = !0,
          stickIfOpen: v = !0
        } = t, m = r.useRef(), p = r.useRef(!1), g = r.useMemo(() => ({
          onPointerDown(e) {
            m.current = e.pointerType
          },
          onMouseDown(e) {
            const t = m.current;
            0 === e.button && "click" !== s && (P(t, !0) && f || (!n || !a || i.current.openEvent && v && "mousedown" !== i.current.openEvent.type ? (e.preventDefault(), o(!0, e.nativeEvent, "click")) : o(!1, e.nativeEvent, "click")))
          },
          onClick(e) {
            const t = m.current;
            "mousedown" === s && m.current ? m.current = void 0 : P(t, !0) && f || (!n || !a || i.current.openEvent && v && "click" !== i.current.openEvent.type ? o(!0, e.nativeEvent, "click") : o(!1, e.nativeEvent, "click"))
          },
          onKeyDown(e) {
            m.current = void 0, e.defaultPrevented || !d || It(e) || (" " !== e.key || kt(l) || (e.preventDefault(), p.current = !0), function(e) {
              return (0, u.sb)(e.target) && "A" === e.target.tagName
            }(e) || "Enter" === e.key && o(!n || !a, e.nativeEvent, "click"))
          },
          onKeyUp(e) {
            e.defaultPrevented || !d || It(e) || kt(l) || " " === e.key && p.current && (p.current = !1, o(!n || !a, e.nativeEvent, "click"))
          }
        }), [i, l, s, f, d, o, n, v, a]);
        return r.useMemo(() => c ? {
          reference: g
        } : {}, [c, g])
      }

      function Ct(e) {
        return null != e && null != e.clientX
      }

      function Tt(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          dataRef: o,
          elements: {
            floating: i,
            domReference: l
          },
          refs: c
        } = e, {
          enabled: s = !0,
          axis: a = "both",
          x: f = null,
          y: d = null
        } = t, v = r.useRef(!1), m = r.useRef(null), [p, g] = r.useState(), [y, R] = r.useState([]), x = S((e, t) => {
          v.current || o.current.openEvent && !Ct(o.current.openEvent) || c.setPositionReference(function(e, t) {
            let n = null,
              r = null,
              o = !1;
            return {
              contextElement: e || void 0,
              getBoundingClientRect() {
                var u;
                const i = (null == e ? void 0 : e.getBoundingClientRect()) || {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0
                  },
                  l = "x" === t.axis || "both" === t.axis,
                  c = "y" === t.axis || "both" === t.axis,
                  s = ["mouseenter", "mousemove"].includes((null == (u = t.dataRef.current.openEvent) ? void 0 : u.type) || "") && "touch" !== t.pointerType;
                let a = i.width,
                  f = i.height,
                  d = i.x,
                  v = i.y;
                return null == n && t.x && l && (n = i.x - t.x), null == r && t.y && c && (r = i.y - t.y), d -= n || 0, v -= r || 0, a = 0, f = 0, !o || s ? (a = "y" === t.axis ? i.width : 0, f = "x" === t.axis ? i.height : 0, d = l && null != t.x ? t.x : d, v = c && null != t.y ? t.y : v) : o && !s && (f = "x" === t.axis ? i.height : f, a = "y" === t.axis ? i.width : a), o = !0, {
                  width: a,
                  height: f,
                  x: d,
                  y: v,
                  top: v,
                  right: d + a,
                  bottom: v + f,
                  left: d
                }
              }
            }
          }(l, {
            x: e,
            y: t,
            axis: a,
            dataRef: o,
            pointerType: p
          }))
        }), w = S(e => {
          null == f && null == d && (n ? m.current || R([]) : x(e.clientX, e.clientY))
        }), E = P(p) ? i : n, I = r.useCallback(() => {
          if (!E || !s || null != f || null != d) return;
          const e = (0, u.zk)(i);

          function t(n) {
            const r = b(n);
            h(i, r) ? (e.removeEventListener("mousemove", t), m.current = null) : x(n.clientX, n.clientY)
          }
          if (!o.current.openEvent || Ct(o.current.openEvent)) {
            e.addEventListener("mousemove", t);
            const n = () => {
              e.removeEventListener("mousemove", t), m.current = null
            };
            return m.current = n, n
          }
          c.setPositionReference(l)
        }, [E, s, f, d, i, o, c, l, x]);
        r.useEffect(() => I(), [I, y]), r.useEffect(() => {
          s && !i && (v.current = !1)
        }, [s, i]), r.useEffect(() => {
          !s && n && (v.current = !0)
        }, [s, n]), L(() => {
          !s || null == f && null == d || (v.current = !1, x(f, d))
        }, [s, f, d, x]);
        const k = r.useMemo(() => {
          function e(e) {
            let {
              pointerType: t
            } = e;
            g(t)
          }
          return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove: w,
            onMouseEnter: w
          }
        }, [w]);
        return r.useMemo(() => s ? {
          reference: k
        } : {}, [s, k])
      }
      const Pt = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick"
        },
        Lt = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture"
        },
        Ot = e => {
          var t, n;
          return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n
          }
        };

      function At(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          elements: i,
          dataRef: l
        } = e, {
          enabled: c = !0,
          escapeKey: s = !0,
          outsidePress: a = !0,
          outsidePressEvent: f = "pointerdown",
          referencePress: d = !1,
          referencePressEvent: v = "pointerdown",
          ancestorScroll: m = !1,
          bubbles: p,
          capture: g
        } = t, x = Le(), w = S("function" == typeof a ? a : () => !1), E = "function" == typeof a ? w : a, k = r.useRef(!1), {
          escapeKey: M,
          outsidePress: C
        } = Ot(p), {
          escapeKey: T,
          outsidePress: P
        } = Ot(g), L = r.useRef(!1), O = S(e => {
          var t;
          if (!n || !c || !s || "Escape" !== e.key) return;
          if (L.current) return;
          const r = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
            u = x ? I(x.nodesRef.current, r) : [];
          if (!M && (e.stopPropagation(), u.length > 0)) {
            let e = !0;
            if (u.forEach(t => {
                var n;
                null == (n = t.context) || !n.open || t.context.dataRef.current.__escapeKeyBubbles || (e = !1)
              }), !e) return
          }
          o(!1, function(e) {
            return "nativeEvent" in e
          }(e) ? e.nativeEvent : e, "escape-key")
        }), A = S(e => {
          var t;
          const n = () => {
            var t;
            O(e), null == (t = b(e)) || t.removeEventListener("keydown", n)
          };
          null == (t = b(e)) || t.addEventListener("keydown", n)
        }), D = S(e => {
          var t;
          const n = l.current.insideReactTree;
          l.current.insideReactTree = !1;
          const r = k.current;
          if (k.current = !1, "click" === f && r) return;
          if (n) return;
          if ("function" == typeof E && !E(e)) return;
          const c = b(e),
            s = "[" + De("inert") + "]",
            a = R(i.floating).querySelectorAll(s);
          let d = (0, u.vq)(c) ? c : null;
          for (; d && !(0, u.eu)(d);) {
            const e = (0, u.$4)(d);
            if ((0, u.eu)(e) || !(0, u.vq)(e)) break;
            d = e
          }
          if (a.length && (0, u.vq)(c) && !c.matches("html,body") && !h(c, i.floating) && Array.from(a).every(e => !h(d, e))) return;
          if ((0, u.sb)(c) && j) {
            const t = (0, u.eu)(c),
              n = (0, u.L9)(c),
              r = /auto|scroll/,
              o = t || r.test(n.overflowX),
              i = t || r.test(n.overflowY),
              l = o && c.clientWidth > 0 && c.scrollWidth > c.clientWidth,
              s = i && c.clientHeight > 0 && c.scrollHeight > c.clientHeight,
              a = "rtl" === n.direction,
              f = s && (a ? e.offsetX <= c.offsetWidth - c.clientWidth : e.offsetX > c.clientWidth),
              d = l && e.offsetY > c.clientHeight;
            if (f || d) return
          }
          const v = null == (t = l.current.floatingContext) ? void 0 : t.nodeId,
            m = x && I(x.nodesRef.current, v).some(t => {
              var n;
              return y(e, null == (n = t.context) ? void 0 : n.elements.floating)
            });
          if (y(e, i.floating) || y(e, i.domReference) || m) return;
          const p = x ? I(x.nodesRef.current, v) : [];
          if (p.length > 0) {
            let e = !0;
            if (p.forEach(t => {
                var n;
                null == (n = t.context) || !n.open || t.context.dataRef.current.__outsidePressBubbles || (e = !1)
              }), !e) return
          }
          o(!1, e, "outside-press")
        }), N = S(e => {
          var t;
          const n = () => {
            var t;
            D(e), null == (t = b(e)) || t.removeEventListener(f, n)
          };
          null == (t = b(e)) || t.addEventListener(f, n)
        });
        r.useEffect(() => {
          if (!n || !c) return;
          l.current.__escapeKeyBubbles = M, l.current.__outsidePressBubbles = C;
          let e = -1;

          function t(e) {
            o(!1, e, "ancestor-scroll")
          }

          function r() {
            window.clearTimeout(e), L.current = !0
          }

          function a() {
            e = window.setTimeout(() => {
              L.current = !1
            }, (0, u.Tc)() ? 5 : 0)
          }
          const d = R(i.floating);
          s && (d.addEventListener("keydown", T ? A : O, T), d.addEventListener("compositionstart", r), d.addEventListener("compositionend", a)), E && d.addEventListener(f, P ? N : D, P);
          let v = [];
          return m && ((0, u.vq)(i.domReference) && (v = (0, u.v9)(i.domReference)), (0, u.vq)(i.floating) && (v = v.concat((0, u.v9)(i.floating))), !(0, u.vq)(i.reference) && i.reference && i.reference.contextElement && (v = v.concat((0, u.v9)(i.reference.contextElement)))), v = v.filter(e => {
            var t;
            return e !== (null == (t = d.defaultView) ? void 0 : t.visualViewport)
          }), v.forEach(e => {
            e.addEventListener("scroll", t)
          }), () => {
            s && (d.removeEventListener("keydown", T ? A : O, T), d.removeEventListener("compositionstart", r), d.removeEventListener("compositionend", a)), E && d.removeEventListener(f, P ? N : D, P), v.forEach(e => {
              e.removeEventListener("scroll", t)
            }), window.clearTimeout(e)
          }
        }, [l, i, s, E, f, n, o, m, c, M, C, O, T, A, D, P, N]), r.useEffect(() => {
          l.current.insideReactTree = !1
        }, [l, E, f]);
        const F = r.useMemo(() => ({
            onKeyDown: O,
            ...d && {
              [Pt[v]]: e => {
                o(!1, e.nativeEvent, "reference-press")
              },
              ..."click" !== v && {
                onClick(e) {
                  o(!1, e.nativeEvent, "reference-press")
                }
              }
            }
          }), [O, o, d, v]),
          j = r.useMemo(() => {
            function e(e) {
              0 === e.button && (k.current = !0)
            }
            return {
              onKeyDown: O,
              onMouseDown: e,
              onMouseUp: e,
              [Lt[f]]: () => {
                l.current.insideReactTree = !0
              }
            }
          }, [O, f, l]);
        return r.useMemo(() => c ? {
          reference: F,
          floating: j
        } : {}, [c, F, j])
      }

      function St(e) {
        const {
          open: t = !1,
          onOpenChange: n,
          elements: o
        } = e, u = Ie(), i = r.useRef({}), [l] = r.useState(() => Me()), c = null != Pe(), [s, a] = r.useState(o.reference), f = S((e, t, r) => {
          i.current.openEvent = e ? t : void 0, l.emit("openchange", {
            open: e,
            event: t,
            reason: r,
            nested: c
          }), null == n || n(e, t, r)
        }), d = r.useMemo(() => ({
          setPositionReference: a
        }), []), v = r.useMemo(() => ({
          reference: s || o.reference || null,
          floating: o.floating || null,
          domReference: o.reference
        }), [s, o.reference, o.floating]);
        return r.useMemo(() => ({
          dataRef: i,
          open: t,
          onOpenChange: f,
          elements: v,
          events: l,
          floatingId: u,
          refs: d
        }), [t, f, v, l, u, d])
      }

      function Dt(e) {
        var t, n;
        let {
          elements: o,
          ...i
        } = void 0 === e ? {} : e;
        const {
          nodeId: l
        } = i, c = St({
          ...i,
          elements: {
            reference: null != (t = null == o ? void 0 : o.reference) ? t : null,
            floating: null != (n = null == o ? void 0 : o.floating) ? n : null
          }
        }), s = i.rootContext || c, a = s.elements, [f, d] = r.useState(null), [v, m] = r.useState(null), p = (null == a ? void 0 : a.domReference) || f, g = r.useRef(null), h = Le();
        L(() => {
          p && (g.current = p)
        }, [p]);
        const b = (0, J.we)({
            ...i,
            elements: {
              ...a,
              ...v && {
                reference: v
              }
            }
          }),
          y = r.useCallback(e => {
            const t = (0, u.vq)(e) ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              getClientRects: () => e.getClientRects(),
              contextElement: e
            } : e;
            m(t), b.refs.setReference(t)
          }, [b.refs]),
          R = r.useCallback(e => {
            ((0, u.vq)(e) || null === e) && (g.current = e, d(e)), ((0, u.vq)(b.refs.reference.current) || null === b.refs.reference.current || null !== e && !(0, u.vq)(e)) && b.refs.setReference(e)
          }, [b.refs]),
          x = r.useMemo(() => ({
            ...b.refs,
            setReference: R,
            setPositionReference: y,
            domReference: g
          }), [b.refs, R, y]),
          w = r.useMemo(() => ({
            ...b.elements,
            domReference: p
          }), [b.elements, p]),
          E = r.useMemo(() => ({
            ...b,
            ...s,
            refs: x,
            elements: w,
            nodeId: l
          }), [b, x, w, l, s]);
        return L(() => {
          s.dataRef.current.floatingContext = E;
          const e = null == h ? void 0 : h.nodesRef.current.find(e => e.id === l);
          e && (e.context = E)
        }), r.useMemo(() => ({
          ...b,
          context: E,
          refs: x,
          elements: w
        }), [b, x, w, E])
      }

      function Nt() {
        return c().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints && a()
      }

      function Ft(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          events: i,
          dataRef: l,
          elements: c
        } = e, {
          enabled: s = !0,
          visibleOnly: a = !0
        } = t, f = r.useRef(!1), v = r.useRef(-1), m = r.useRef(!0);
        r.useEffect(() => {
          if (!s) return;
          const e = (0, u.zk)(c.domReference);

          function t() {
            !n && (0, u.sb)(c.domReference) && c.domReference === g(R(c.domReference)) && (f.current = !0)
          }

          function r() {
            m.current = !0
          }

          function o() {
            m.current = !1
          }
          return e.addEventListener("blur", t), Nt() && (e.addEventListener("keydown", r, !0), e.addEventListener("pointerdown", o, !0)), () => {
            e.removeEventListener("blur", t), Nt() && (e.removeEventListener("keydown", r, !0), e.removeEventListener("pointerdown", o, !0))
          }
        }, [c.domReference, n, s]), r.useEffect(() => {
          if (s) return i.on("openchange", e), () => {
            i.off("openchange", e)
          };

          function e(e) {
            let {
              reason: t
            } = e;
            "reference-press" !== t && "escape-key" !== t || (f.current = !0)
          }
        }, [i, s]), r.useEffect(() => () => {
          Ne(v)
        }, []);
        const p = r.useMemo(() => ({
          onMouseLeave() {
            f.current = !1
          },
          onFocus(e) {
            if (f.current) return;
            const t = b(e.nativeEvent);
            if (a && (0, u.vq)(t))
              if (Nt() && !e.relatedTarget) {
                if (!m.current && !x(t)) return
              } else if (! function(e) {
                if (!e || d()) return !0;
                try {
                  return e.matches(":focus-visible")
                } catch (e) {
                  return !0
                }
              }(t)) return;
            o(!0, e.nativeEvent, "focus")
          },
          onBlur(e) {
            f.current = !1;
            const t = e.relatedTarget,
              n = e.nativeEvent,
              r = (0, u.vq)(t) && t.hasAttribute(De("focus-guard")) && "outside" === t.getAttribute("data-type");
            v.current = window.setTimeout(() => {
              var e;
              const u = g(c.domReference ? c.domReference.ownerDocument : document);
              (t || u !== c.domReference) && (h(null == (e = l.current.floatingContext) ? void 0 : e.refs.floating.current, u) || h(c.domReference, u) || r || o(!1, n, "focus"))
            })
          }
        }), [l, c.domReference, o, a]);
        return r.useMemo(() => s ? {
          reference: p
        } : {}, [s, p])
      }

      function jt(e, t, n) {
        const r = new Map,
          o = "item" === n;
        let u = e;
        if (o && e) {
          const {
            [le]: t, [ce]: n, ...r
          } = e;
          u = r
        }
        return {
          ..."floating" === n && {
            tabIndex: -1,
            [ie]: ""
          },
          ...u,
          ...t.map(t => {
            const r = t ? t[n] : null;
            return "function" == typeof r ? e ? r(e) : null : r
          }).concat(e).reduce((e, t) => t ? (Object.entries(t).forEach(t => {
            let [n, u] = t;
            var i;
            o && [le, ce].includes(n) || (0 === n.indexOf("on") ? (r.has(n) || r.set(n, []), "function" == typeof u && (null == (i = r.get(n)) || i.push(u), e[n] = function() {
              for (var e, t = arguments.length, o = new Array(t), u = 0; u < t; u++) o[u] = arguments[u];
              return null == (e = r.get(n)) ? void 0 : e.map(e => e(...o)).find(e => void 0 !== e)
            })) : e[n] = u)
          }), e) : e, {})
        }
      }

      function _t(e) {
        void 0 === e && (e = []);
        const t = e.map(e => null == e ? void 0 : e.reference),
          n = e.map(e => null == e ? void 0 : e.floating),
          o = e.map(e => null == e ? void 0 : e.item),
          u = r.useCallback(t => jt(t, e, "reference"), t),
          i = r.useCallback(t => jt(t, e, "floating"), n),
          l = r.useCallback(t => jt(t, e, "item"), o);
        return r.useMemo(() => ({
          getReferenceProps: u,
          getFloatingProps: i,
          getItemProps: l
        }), [u, i, l])
      }

      function qt(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n
        }
      }

      function Kt(e, t) {
        return qt(t, e === fe || e === de, e === se || e === ae)
      }

      function Ht(e, t, n) {
        return qt(t, e === de, n ? e === se : e === ae) || "Enter" === e || " " === e || "" === e
      }

      function Wt(e, t, n) {
        return qt(t, n ? e === se : e === ae, e === de)
      }

      function Bt(e, t, n, r) {
        return "both" === t || "horizontal" === t && r && r > 1 ? "Escape" === e : qt(t, n ? e === ae : e === se, e === fe)
      }

      function Yt(e, t) {
        const {
          open: n,
          onOpenChange: o,
          elements: i,
          floatingId: l
        } = e, {
          listRef: c,
          activeIndex: s,
          onNavigate: a = () => {},
          enabled: f = !0,
          selectedIndex: d = null,
          allowEscape: v = !1,
          loop: m = !1,
          nested: p = !1,
          rtl: b = !1,
          virtual: y = !1,
          focusItemOnOpen: x = "auto",
          focusItemOnHover: k = !0,
          openOnArrowKeyDown: P = !0,
          disabledIndices: A,
          orientation: D = "vertical",
          parentOrientation: Y,
          cols: z = 1,
          scrollItemIntoView: U = !0,
          virtualItemRef: X,
          itemSizes: G,
          dense: V = !1
        } = t, Z = O(E(i.floating)), Q = Pe(), $ = Le();
        L(() => {
          e.dataRef.current.orientation = D
        }, [e, D]);
        const J = S(() => {
            a(-1 === ne.current ? null : ne.current)
          }),
          ee = w(i.domReference),
          te = r.useRef(x),
          ne = r.useRef(null != d ? d : -1),
          re = r.useRef(null),
          oe = r.useRef(!0),
          ue = r.useRef(J),
          ie = r.useRef(!!i.floating),
          le = r.useRef(n),
          ce = r.useRef(!1),
          fe = r.useRef(!1),
          ve = O(A),
          me = O(n),
          pe = O(U),
          ge = O(d),
          [he, be] = r.useState(),
          [ye, Re] = r.useState(),
          xe = S(() => {
            function e(e) {
              var t;
              y ? (null != (t = e.id) && t.endsWith("-fui-option") && (e.id = l + "-" + Math.random().toString(16).slice(2, 10)), be(e.id), null == $ || $.events.emit("virtualfocus", e), X && (X.current = e)) : Ve(e, {
                sync: ce.current,
                preventScroll: !0
              })
            }
            const t = c.current[ne.current],
              n = fe.current;
            t && e(t), (ce.current ? e => e() : requestAnimationFrame)(() => {
              const r = c.current[ne.current] || t;
              if (!r) return;
              t || e(r);
              const o = pe.current;
              o && Ee && (n || !oe.current) && (null == r.scrollIntoView || r.scrollIntoView("boolean" == typeof o ? {
                block: "nearest",
                inline: "nearest"
              } : o))
            })
          });
        L(() => {
          f && (n && i.floating ? te.current && null != d && (fe.current = !0, ne.current = d, J()) : ie.current && (ne.current = -1, ue.current()))
        }, [f, n, i.floating, d, J]), L(() => {
          if (f && n && i.floating)
            if (null == s) {
              if (ce.current = !1, null != ge.current) return;
              if (ie.current && (ne.current = -1, xe()), (!le.current || !ie.current) && te.current && (null != re.current || !0 === te.current && null == re.current)) {
                let e = 0;
                const t = () => {
                  null == c.current[0] ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t), e++) : (ne.current = null == re.current || Ht(re.current, D, b) || p ? F(c, ve.current) : j(c, ve.current), re.current = null, J())
                };
                t()
              }
            } else N(c, s) || (ne.current = s, xe(), fe.current = !1)
        }, [f, n, i.floating, s, ge, p, c, D, b, J, xe, ve]), L(() => {
          var e;
          if (!f || i.floating || !$ || y || !ie.current) return;
          const t = $.nodesRef.current,
            n = null == (e = t.find(e => e.id === Q)) || null == (e = e.context) ? void 0 : e.elements.floating,
            r = g(R(i.floating)),
            o = t.some(e => e.context && h(e.context.elements.floating, r));
          n && !o && oe.current && n.focus({
            preventScroll: !0
          })
        }, [f, i.floating, $, Q, y]), L(() => {
          if (f && $ && y && !Q) return $.events.on("virtualfocus", e), () => {
            $.events.off("virtualfocus", e)
          };

          function e(e) {
            Re(e.id), X && (X.current = e)
          }
        }, [f, $, y, Q, X]), L(() => {
          ue.current = J, le.current = n, ie.current = !!i.floating
        }), L(() => {
          n || (re.current = null, te.current = x)
        }, [n, x]);
        const we = null != s,
          Ee = r.useMemo(() => {
            function e(e) {
              if (!me.current) return;
              const t = c.current.indexOf(e); - 1 !== t && ne.current !== t && (ne.current = t, J())
            }
            return {
              onFocus(t) {
                let {
                  currentTarget: n
                } = t;
                ce.current = !0, e(n)
              },
              onClick: e => {
                let {
                  currentTarget: t
                } = e;
                return t.focus({
                  preventScroll: !0
                })
              },
              onMouseMove(t) {
                let {
                  currentTarget: n
                } = t;
                ce.current = !0, fe.current = !1, k && e(n)
              },
              onPointerLeave(e) {
                let {
                  pointerType: t
                } = e;
                var n;
                oe.current && "touch" !== t && (ce.current = !0, k && (ne.current = -1, J(), y || null == (n = Z.current) || n.focus({
                  preventScroll: !0
                })))
              }
            }
          }, [me, Z, k, c, J, y]),
          Ie = r.useCallback(() => {
            var e;
            return null != Y ? Y : null == $ || null == (e = $.nodesRef.current.find(e => e.id === Q)) || null == (e = e.context) || null == (e = e.dataRef) ? void 0 : e.current.orientation
          }, [Q, $, Y]),
          ke = S(e => {
            if (oe.current = !1, ce.current = !0, 229 === e.which) return;
            if (!me.current && e.currentTarget === Z.current) return;
            if (p && Bt(e.key, D, b, z)) return Kt(e.key, Ie()) || M(e), o(!1, e.nativeEvent, "list-navigation"), void((0, u.sb)(i.domReference) && (y ? null == $ || $.events.emit("virtualfocus", i.domReference) : i.domReference.focus()));
            const t = ne.current,
              r = F(c, A),
              l = j(c, A);
            if (ee || ("Home" === e.key && (M(e), ne.current = r, J()), "End" === e.key && (M(e), ne.current = l, J())), z > 1) {
              const t = G || Array.from({
                  length: c.current.length
                }, () => ({
                  width: 1,
                  height: 1
                })),
                n = K(t, z, V),
                o = n.findIndex(e => null != e && !B(c, e, A)),
                u = n.reduce((e, t, n) => null == t || B(c, t, A) ? e : n, -1),
                i = n[q({
                  current: n.map(e => null != e ? c.current[e] : null)
                }, {
                  event: e,
                  orientation: D,
                  loop: m,
                  rtl: b,
                  cols: z,
                  disabledIndices: W([...("function" != typeof A ? A : null) || c.current.map((e, t) => B(c, t, A) ? t : void 0), void 0], n),
                  minIndex: o,
                  maxIndex: u,
                  prevIndex: H(ne.current > l ? r : ne.current, t, n, z, e.key === de ? "bl" : e.key === (b ? se : ae) ? "tr" : "tl"),
                  stopEvent: !0
                })];
              if (null != i && (ne.current = i, J()), "both" === D) return
            }
            if (Kt(e.key, D)) {
              if (M(e), n && !y && g(e.currentTarget.ownerDocument) === e.currentTarget) return ne.current = Ht(e.key, D, b) ? r : l, void J();
              Ht(e.key, D, b) ? ne.current = m ? t >= l ? v && t !== c.current.length ? -1 : r : _(c, {
                startingIndex: t,
                disabledIndices: A
              }) : Math.min(l, _(c, {
                startingIndex: t,
                disabledIndices: A
              })) : ne.current = m ? t <= r ? v && -1 !== t ? c.current.length : l : _(c, {
                startingIndex: t,
                decrement: !0,
                disabledIndices: A
              }) : Math.max(r, _(c, {
                startingIndex: t,
                decrement: !0,
                disabledIndices: A
              })), N(c, ne.current) && (ne.current = -1), J()
            }
          }),
          Me = r.useMemo(() => y && n && we && {
            "aria-activedescendant": ye || he
          }, [y, n, we, ye, he]),
          Ce = r.useMemo(() => ({
            "aria-orientation": "both" === D ? void 0 : D,
            ...ee ? {} : Me,
            onKeyDown: ke,
            onPointerMove() {
              oe.current = !0
            }
          }), [Me, ke, D, ee]),
          Te = r.useMemo(() => {
            function e(e) {
              "auto" === x && C(e.nativeEvent) && (te.current = !0)
            }

            function t(e) {
              te.current = x, "auto" === x && T(e.nativeEvent) && (te.current = !0)
            }
            return {
              ...Me,
              onKeyDown(e) {
                oe.current = !1;
                const t = e.key.startsWith("Arrow"),
                  r = ["Home", "End"].includes(e.key),
                  u = t || r,
                  i = Wt(e.key, D, b),
                  l = Bt(e.key, D, b, z),
                  s = Wt(e.key, Ie(), b),
                  a = Kt(e.key, D),
                  f = (p ? s : a) || "Enter" === e.key || "" === e.key.trim();
                if (y && n) {
                  const t = null == $ ? void 0 : $.nodesRef.current.find(e => null == e.parentId),
                    n = $ && t ? function(e, t) {
                      let n, r = -1;
                      return function t(o, u) {
                        u > r && (n = o, r = u), I(e, o).forEach(e => {
                          t(e.id, u + 1)
                        })
                      }(t, 0), e.find(e => e.id === n)
                    }($.nodesRef.current, t.id) : null;
                  if (u && n && X) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0
                    });
                    if (i || l) {
                      var v, m;
                      const r = (null == (v = n.context) ? void 0 : v.elements.domReference) === e.currentTarget,
                        o = l && !r ? null == (m = n.context) ? void 0 : m.elements.domReference : i ? c.current.find(e => (null == e ? void 0 : e.id) === he) : null;
                      o && (M(e), o.dispatchEvent(t), Re(void 0))
                    }
                    var g;
                    if ((a || r) && n.context && n.context.open && n.parentId && e.currentTarget !== n.context.elements.domReference) return M(e), void(null == (g = n.context.elements.domReference) || g.dispatchEvent(t))
                  }
                  return ke(e)
                }
                if (n || P || !t) {
                  if (f) {
                    const t = Kt(e.key, Ie());
                    re.current = p && t ? null : e.key
                  }
                  p ? s && (M(e), n ? (ne.current = F(c, ve.current), J()) : o(!0, e.nativeEvent, "list-navigation")) : a && (null != d && (ne.current = d), M(e), !n && P ? o(!0, e.nativeEvent, "list-navigation") : ke(e), n && J())
                }
              },
              onFocus() {
                n && !y && (ne.current = -1, J())
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e
            }
          }, [he, Me, z, ke, ve, x, c, p, J, o, n, P, D, Ie, b, d, $, y, X]);
        return r.useMemo(() => f ? {
          reference: Te,
          floating: Ce,
          item: Ee
        } : {}, [f, Te, Ce, Ee])
      }
      const zt = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1]
      ]);

      function Ut(e, t) {
        var n, o;
        void 0 === t && (t = {});
        const {
          open: u,
          elements: i,
          floatingId: l
        } = e, {
          enabled: c = !0,
          role: s = "dialog"
        } = t, a = Ie(), f = (null == (n = i.domReference) ? void 0 : n.id) || a, d = r.useMemo(() => {
          var e;
          return (null == (e = E(i.floating)) ? void 0 : e.id) || l
        }, [i.floating, l]), v = null != (o = zt.get(s)) ? o : s, m = null != Pe(), p = r.useMemo(() => "tooltip" === v || "label" === s ? {
          ["aria-" + ("label" === s ? "labelledby" : "describedby")]: u ? d : void 0
        } : {
          "aria-expanded": u ? "true" : "false",
          "aria-haspopup": "alertdialog" === v ? "dialog" : v,
          "aria-controls": u ? d : void 0,
          ..."listbox" === v && {
            role: "combobox"
          },
          ..."menu" === v && {
            id: f
          },
          ..."menu" === v && m && {
            role: "menuitem"
          },
          ..."select" === s && {
            "aria-autocomplete": "none"
          },
          ..."combobox" === s && {
            "aria-autocomplete": "list"
          }
        }, [v, d, m, u, f, s]), g = r.useMemo(() => {
          const e = {
            id: d,
            ...v && {
              role: v
            }
          };
          return "tooltip" === v || "label" === s ? e : {
            ...e,
            ..."menu" === v && {
              "aria-labelledby": f
            }
          }
        }, [v, d, f, s]), h = r.useCallback(e => {
          let {
            active: t,
            selected: n
          } = e;
          const r = {
            role: "option",
            ...t && {
              id: d + "-fui-option"
            }
          };
          switch (s) {
            case "select":
            case "combobox":
              return {
                ...r, "aria-selected": n
              }
          }
          return {}
        }, [d, s]);
        return r.useMemo(() => c ? {
          reference: p,
          floating: g,
          item: h
        } : {}, [c, p, g, h])
      }
      const Xt = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());

      function Gt(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Vt(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          elements: {
            floating: o
          }
        } = e, {
          duration: u = 250
        } = t, i = ("number" == typeof u ? u : u.close) || 0, [l, c] = r.useState("unmounted"), s = function(e, t) {
          const [n, o] = r.useState(e);
          return e && !n && o(!0), r.useEffect(() => {
            if (!e && n) {
              const e = setTimeout(() => o(!1), t);
              return () => clearTimeout(e)
            }
          }, [e, n, t]), n
        }(n, i);
        return s || "close" !== l || c("unmounted"), L(() => {
          if (o) {
            if (n) {
              c("initial");
              const e = requestAnimationFrame(() => {
                $.flushSync(() => {
                  c("open")
                })
              });
              return () => {
                cancelAnimationFrame(e)
              }
            }
            c("close")
          }
        }, [n, o]), {
          isMounted: s,
          status: l
        }
      }

      function Zt(e, t) {
        void 0 === t && (t = {});
        const {
          initial: n = {
            opacity: 0
          },
          open: o,
          close: u,
          common: i,
          duration: l = 250
        } = t, c = e.placement, s = c.split("-")[0], a = r.useMemo(() => ({
          side: s,
          placement: c
        }), [s, c]), f = "number" == typeof l, d = (f ? l : l.open) || 0, v = (f ? l : l.close) || 0, [m, p] = r.useState(() => ({
          ...Gt(i, a),
          ...Gt(n, a)
        })), {
          isMounted: g,
          status: h
        } = Vt(e, {
          duration: l
        }), b = O(n), y = O(o), R = O(u), x = O(i);
        return L(() => {
          const e = Gt(b.current, a),
            t = Gt(R.current, a),
            n = Gt(x.current, a),
            r = Gt(y.current, a) || Object.keys(e).reduce((e, t) => (e[t] = "", e), {});
          if ("initial" === h && p(t => ({
              transitionProperty: t.transitionProperty,
              ...n,
              ...e
            })), "open" === h && p({
              transitionProperty: Object.keys(r).map(Xt).join(","),
              transitionDuration: d + "ms",
              ...n,
              ...r
            }), "close" === h) {
            const r = t || e;
            p({
              transitionProperty: Object.keys(r).map(Xt).join(","),
              transitionDuration: v + "ms",
              ...n,
              ...r
            })
          }
        }, [v, R, b, y, x, d, h, a]), {
          isMounted: g,
          styles: m
        }
      }

      function Qt(e, t) {
        var n;
        const {
          open: o,
          dataRef: u
        } = e, {
          listRef: i,
          activeIndex: l,
          onMatch: c,
          onTypingChange: s,
          enabled: a = !0,
          findMatch: f = null,
          resetMs: d = 750,
          ignoreKeys: v = [],
          selectedIndex: m = null
        } = t, p = r.useRef(-1), g = r.useRef(""), h = r.useRef(null != (n = null != m ? m : l) ? n : -1), b = r.useRef(null), y = S(c), R = S(s), x = O(f), w = O(v);
        L(() => {
          o && (Ne(p), b.current = null, g.current = "")
        }, [o]), L(() => {
          var e;
          o && "" === g.current && (h.current = null != (e = null != m ? m : l) ? e : -1)
        }, [o, m, l]);
        const E = S(e => {
            e ? u.current.typing || (u.current.typing = e, R(e)) : u.current.typing && (u.current.typing = e, R(e))
          }),
          I = S(e => {
            function t(e, t, n) {
              const r = x.current ? x.current(t, n) : t.find(e => 0 === (null == e ? void 0 : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())));
              return r ? e.indexOf(r) : -1
            }
            const n = i.current;
            if (g.current.length > 0 && " " !== g.current[0] && (-1 === t(n, n, g.current) ? E(!1) : " " === e.key && M(e)), null == n || w.current.includes(e.key) || 1 !== e.key.length || e.ctrlKey || e.metaKey || e.altKey) return;
            o && " " !== e.key && (M(e), E(!0)), n.every(e => {
              var t, n;
              return !e || (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !== (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
            }) && g.current === e.key && (g.current = "", h.current = b.current), g.current += e.key, Ne(p), p.current = window.setTimeout(() => {
              g.current = "", h.current = b.current, E(!1)
            }, d);
            const r = h.current,
              u = t(n, [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)], g.current); - 1 !== u ? (y(u), b.current = u) : " " !== e.key && (g.current = "", E(!1))
          }),
          k = r.useMemo(() => ({
            onKeyDown: I
          }), [I]),
          C = r.useMemo(() => ({
            onKeyDown: I,
            onKeyUp(e) {
              " " === e.key && E(!1)
            }
          }), [I, E]);
        return r.useMemo(() => a ? {
          reference: k,
          floating: C
        } : {}, [a, k, C])
      }

      function $t(e, t) {
        return {
          ...e,
          rects: {
            ...e.rects,
            floating: {
              ...e.rects.floating,
              height: t
            }
          }
        }
      }
      const Jt = e => ({
        name: "inner",
        options: e,
        async fn(t) {
          const {
            listRef: n,
            overflowRef: r,
            onFallbackChange: o,
            offset: u = 0,
            index: l = 0,
            minItemsVisible: c = 4,
            referenceOverflowThreshold: s = 0,
            scrollRef: a,
            ...f
          } = (0, i._3)(e, t), {
            rects: d,
            platform: v,
            elements: {
              floating: m
            }
          } = t, p = n.current[l], g = (null == a ? void 0 : a.current) || m, h = m.clientTop || g.clientTop, b = 0 !== m.clientTop, y = 0 !== g.clientTop, R = m === g;
          if (!p) return {};
          const x = {
              ...t,
              ...await (0, J.cY)(-p.offsetTop - m.clientTop - d.reference.height / 2 - p.offsetHeight / 2 - u).fn(t)
            },
            w = await v.detectOverflow($t(x, g.scrollHeight + h + m.clientTop), f),
            E = await v.detectOverflow(x, {
              ...f,
              elementContext: "reference"
            }),
            I = (0, i.T9)(0, w.top),
            k = x.y + I,
            M = (g.scrollHeight > g.clientHeight ? e => e : i.LI)((0, i.T9)(0, g.scrollHeight + (b && R || y ? 2 * h : 0) - I - (0, i.T9)(0, w.bottom)));
          if (g.style.maxHeight = M + "px", g.scrollTop = I, o) {
            const e = g.offsetHeight < p.offsetHeight * (0, i.jk)(c, n.current.length) - 1 || E.top >= -s || E.bottom >= -s;
            $.flushSync(() => o(e))
          }
          return r && (r.current = await v.detectOverflow($t({
            ...x,
            y: k
          }, g.offsetHeight + h + m.clientTop), f)), {
            y: k
          }
        }
      });

      function en(e, t) {
        const {
          open: n,
          elements: o
        } = e, {
          enabled: u = !0,
          overflowRef: i,
          scrollRef: l,
          onChange: c
        } = t, a = S(c), f = r.useRef(!1), d = r.useRef(null), v = r.useRef(null);
        r.useEffect(() => {
          if (!u) return;

          function e(e) {
            if (e.ctrlKey || !t || null == i.current) return;
            const n = e.deltaY,
              r = i.current.top >= -.5,
              o = i.current.bottom >= -.5,
              u = t.scrollHeight - t.clientHeight,
              l = n < 0 ? -1 : 1,
              c = n < 0 ? "max" : "min";
            t.scrollHeight <= t.clientHeight || (!r && n > 0 || !o && n < 0 ? (e.preventDefault(), $.flushSync(() => {
              a(e => e + Math[c](n, u * l))
            })) : /firefox/i.test(s()) && (t.scrollTop += n))
          }
          const t = (null == l ? void 0 : l.current) || o.floating;
          return n && t ? (t.addEventListener("wheel", e), requestAnimationFrame(() => {
            d.current = t.scrollTop, null != i.current && (v.current = {
              ...i.current
            })
          }), () => {
            d.current = null, v.current = null, t.removeEventListener("wheel", e)
          }) : void 0
        }, [u, n, o.floating, i, l, a]);
        const m = r.useMemo(() => ({
          onKeyDown() {
            f.current = !0
          },
          onWheel() {
            f.current = !1
          },
          onPointerMove() {
            f.current = !1
          },
          onScroll() {
            const e = (null == l ? void 0 : l.current) || o.floating;
            if (i.current && e && f.current) {
              if (null !== d.current) {
                const t = e.scrollTop - d.current;
                (i.current.bottom < -.5 && t < -1 || i.current.top < -.5 && t > 1) && $.flushSync(() => a(e => e + t))
              }
              requestAnimationFrame(() => {
                d.current = e.scrollTop
              })
            }
          }
        }), [o.floating, a, i, l]);
        return r.useMemo(() => u ? {
          floating: m
        } : {}, [u, m])
      }

      function tn(e, t, n) {
        return void 0 === n && (n = !0), e.filter(e => {
          var r;
          return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open))
        }).flatMap(t => [t, ...tn(e, t.id, n)])
      }

      function nn(e, t) {
        const [n, r] = e;
        let o = !1;
        const u = t.length;
        for (let e = 0, i = u - 1; e < u; i = e++) {
          const [u, l] = t[e] || [0, 0], [c, s] = t[i] || [0, 0];
          l >= r != s >= r && n <= (c - u) * (r - l) / (s - l) + u && (o = !o)
        }
        return o
      }

      function rn(e) {
        void 0 === e && (e = {});
        const {
          buffer: t = .5,
          blockPointerEvents: n = !1,
          requireIntent: r = !0
        } = e, o = {
          current: -1
        };
        let i = !1,
          l = null,
          c = null,
          s = "undefined" != typeof performance ? performance.now() : 0;
        const a = e => {
          let {
            x: n,
            y: a,
            placement: f,
            elements: d,
            onClose: v,
            nodeId: m,
            tree: p
          } = e;
          return function(e) {
            function g() {
              Ne(o), v()
            }
            if (Ne(o), !d.domReference || !d.floating || null == f || null == n || null == a) return;
            const {
              clientX: h,
              clientY: b
            } = e, y = [h, b], R = function(e) {
              return "composedPath" in e ? e.composedPath()[0] : e.target
            }(e), x = "mouseleave" === e.type, w = Ze(d.floating, R), E = Ze(d.domReference, R), I = d.domReference.getBoundingClientRect(), k = d.floating.getBoundingClientRect(), M = f.split("-")[0], C = n > k.right - k.width / 2, T = a > k.bottom - k.height / 2, P = function(e, t) {
              return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height
            }(y, I), L = k.width > I.width, O = k.height > I.height, A = (L ? I : k).left, S = (L ? I : k).right, D = (O ? I : k).top, N = (O ? I : k).bottom;
            if (w && (i = !0, !x)) return;
            if (E && (i = !1), E && !x) return void(i = !0);
            if (x && (0, u.vq)(e.relatedTarget) && Ze(d.floating, e.relatedTarget)) return;
            if (p && tn(p.nodesRef.current, m).length) return;
            if ("top" === M && a >= I.bottom - 1 || "bottom" === M && a <= I.top + 1 || "left" === M && n >= I.right - 1 || "right" === M && n <= I.left + 1) return g();
            let F = [];
            switch (M) {
              case "top":
                F = [
                  [A, I.top + 1],
                  [A, k.bottom - 1],
                  [S, k.bottom - 1],
                  [S, I.top + 1]
                ];
                break;
              case "bottom":
                F = [
                  [A, k.top + 1],
                  [A, I.bottom - 1],
                  [S, I.bottom - 1],
                  [S, k.top + 1]
                ];
                break;
              case "left":
                F = [
                  [k.right - 1, N],
                  [k.right - 1, D],
                  [I.left + 1, D],
                  [I.left + 1, N]
                ];
                break;
              case "right":
                F = [
                  [I.right - 1, N],
                  [I.right - 1, D],
                  [k.left + 1, D],
                  [k.left + 1, N]
                ]
            }
            if (!nn([h, b], F)) {
              if (i && !P) return g();
              if (!x && r) {
                const t = function(e, t) {
                  const n = performance.now(),
                    r = n - s;
                  if (null === l || null === c || 0 === r) return l = e, c = t, s = n, null;
                  const o = e - l,
                    u = t - c,
                    i = Math.sqrt(o * o + u * u);
                  return l = e, c = t, s = n, i / r
                }(e.clientX, e.clientY);
                if (null !== t && t < .1) return g()
              }
              nn([h, b], function(e) {
                let [n, r] = e;
                switch (M) {
                  case "top":
                    return [
                      [L ? n + t / 2 : C ? n + 4 * t : n - 4 * t, r + t + 1],
                      [L ? n - t / 2 : C ? n + 4 * t : n - 4 * t, r + t + 1],
                      [k.left, C || L ? k.bottom - t : k.top],
                      [k.right, C ? L ? k.bottom - t : k.top : k.bottom - t]
                    ];
                  case "bottom":
                    return [
                      [L ? n + t / 2 : C ? n + 4 * t : n - 4 * t, r - t],
                      [L ? n - t / 2 : C ? n + 4 * t : n - 4 * t, r - t],
                      [k.left, C || L ? k.top + t : k.bottom],
                      [k.right, C ? L ? k.top + t : k.bottom : k.top + t]
                    ];
                  case "left": {
                    const e = [n + t + 1, O ? r + t / 2 : T ? r + 4 * t : r - 4 * t],
                      o = [n + t + 1, O ? r - t / 2 : T ? r + 4 * t : r - 4 * t];
                    return [
                      [T || O ? k.right - t : k.left, k.top],
                      [T ? O ? k.right - t : k.left : k.right - t, k.bottom], e, o
                    ]
                  }
                  case "right":
                    return [
                      [n - t, O ? r + t / 2 : T ? r + 4 * t : r - 4 * t],
                      [n - t, O ? r - t / 2 : T ? r + 4 * t : r - 4 * t],
                      [T || O ? k.left + t : k.right, k.top],
                      [T ? O ? k.left + t : k.right : k.left + t, k.bottom]
                    ]
                }
              }([n, a])) ? !i && r && (o.current = window.setTimeout(g, 40)) : g()
            }
          }
        };
        return a.__options = {
          blockPointerEvents: n
        }, a
      }
    }
  }
]);