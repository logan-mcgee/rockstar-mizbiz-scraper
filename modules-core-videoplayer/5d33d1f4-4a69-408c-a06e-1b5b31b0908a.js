try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5d33d1f4-4a69-408c-a06e-1b5b31b0908a", e._sentryDebugIdIdentifier = "sentry-dbid-5d33d1f4-4a69-408c-a06e-1b5b31b0908a")
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
  [464], {
    2464(e, t, n) {
      n.r(t), n.d(t, {
        Composite: () => Qt,
        CompositeItem: () => Jt,
        FloatingArrow: () => un,
        FloatingDelayGroup: () => kn,
        FloatingFocusManager: () => er,
        FloatingList: () => Ht,
        FloatingNode: () => mn,
        FloatingOverlay: () => or,
        FloatingPortal: () => Yn,
        FloatingTree: () => pn,
        NextFloatingDelayGroup: () => Cn,
        arrow: () => Dt,
        autoPlacement: () => Ot,
        autoUpdate: () => vt,
        computePosition: () => wt,
        detectOverflow: () => gt,
        flip: () => Lt,
        getOverflowAncestors: () => C,
        hide: () => At,
        inline: () => St,
        inner: () => Dr,
        limitShift: () => Tt,
        offset: () => Mt,
        platform: () => mt,
        safePolygon: () => Hr,
        shift: () => Ct,
        size: () => Pt,
        useClick: () => lr,
        useClientPoint: () => sr,
        useDelayGroup: () => In,
        useDelayGroupContext: () => En,
        useDismiss: () => mr,
        useFloating: () => vr,
        useFloatingNodeId: () => dn,
        useFloatingParentNodeId: () => an,
        useFloatingPortalNode: () => Vn,
        useFloatingRootContext: () => pr,
        useFloatingTree: () => fn,
        useFocus: () => hr,
        useHover: () => wn,
        useId: () => on,
        useInnerOffset: () => Fr,
        useInteractions: () => br,
        useListItem: () => _t,
        useListNavigation: () => Ir,
        useMergeRefs: () => Ft,
        useNextDelayGroup: () => Tn,
        useRole: () => Cr,
        useTransitionStatus: () => Pr,
        useTransitionStyles: () => Or,
        useTypeahead: () => Ar
      });
      var r = n(3082),
        o = n.t(r, 2);

      function i() {
        return "undefined" != typeof window
      }

      function u(e) {
        return s(e) ? (e.nodeName || "").toLowerCase() : "#document"
      }

      function l(e) {
        var t;
        return (null == e || null == (t = e.ownerDocument) ? void 0 : t.defaultView) || window
      }

      function c(e) {
        var t;
        return null == (t = (s(e) ? e.ownerDocument : e.document) || window.document) ? void 0 : t.documentElement
      }

      function s(e) {
        return !!i() && (e instanceof Node || e instanceof l(e).Node)
      }

      function a(e) {
        return !!i() && (e instanceof Element || e instanceof l(e).Element)
      }

      function f(e) {
        return !!i() && (e instanceof HTMLElement || e instanceof l(e).HTMLElement)
      }

      function d(e) {
        return !(!i() || "undefined" == typeof ShadowRoot) && (e instanceof ShadowRoot || e instanceof l(e).ShadowRoot)
      }

      function m(e) {
        const {
          overflow: t,
          overflowX: n,
          overflowY: r,
          display: o
        } = E(e);
        return /auto|scroll|overlay|hidden|clip/.test(t + r + n) && "inline" !== o && "contents" !== o
      }

      function p(e) {
        return /^(table|td|th)$/.test(u(e))
      }

      function v(e) {
        try {
          if (e.matches(":popover-open")) return !0
        } catch (e) {}
        try {
          return e.matches(":modal")
        } catch (e) {
          return !1
        }
      }
      const g = /transform|translate|scale|rotate|perspective|filter/,
        h = /paint|layout|strict|content/,
        y = e => !!e && "none" !== e;
      let b;

      function w(e) {
        const t = a(e) ? E(e) : e;
        return y(t.transform) || y(t.translate) || y(t.scale) || y(t.rotate) || y(t.perspective) || !x() && (y(t.backdropFilter) || y(t.filter)) || g.test(t.willChange || "") || h.test(t.contain || "")
      }

      function x() {
        return null == b && (b = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), b
      }

      function R(e) {
        return /^(html|body|#document)$/.test(u(e))
      }

      function E(e) {
        return l(e).getComputedStyle(e)
      }

      function k(e) {
        return a(e) ? {
          scrollLeft: e.scrollLeft,
          scrollTop: e.scrollTop
        } : {
          scrollLeft: e.scrollX,
          scrollTop: e.scrollY
        }
      }

      function I(e) {
        if ("html" === u(e)) return e;
        const t = e.assignedSlot || e.parentNode || d(e) && e.host || c(e);
        return d(t) ? t.host : t
      }

      function M(e) {
        const t = I(e);
        return R(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : f(t) && m(t) ? t : M(t)
      }

      function C(e, t, n) {
        var r;
        void 0 === t && (t = []), void 0 === n && (n = !0);
        const o = M(e),
          i = o === (null == (r = e.ownerDocument) ? void 0 : r.body),
          u = l(o);
        if (i) {
          const e = T(u);
          return t.concat(u, u.visualViewport || [], m(o) ? o : [], e && n ? C(e) : [])
        }
        return t.concat(o, C(o, [], n))
      }

      function T(e) {
        return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null
      }
      const L = ["top", "right", "bottom", "left"],
        P = ["start", "end"],
        O = L.reduce((e, t) => e.concat(t, t + "-" + P[0], t + "-" + P[1]), []),
        A = Math.min,
        S = Math.max,
        D = Math.round,
        F = Math.floor,
        N = e => ({
          x: e,
          y: e
        }),
        j = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function H(e, t, n) {
        return S(e, A(t, n))
      }

      function _(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function W(e) {
        return e.split("-")[0]
      }

      function K(e) {
        return e.split("-")[1]
      }

      function B(e) {
        return "x" === e ? "y" : "x"
      }

      function q(e) {
        return "y" === e ? "height" : "width"
      }

      function z(e) {
        const t = e[0];
        return "t" === t || "b" === t ? "y" : "x"
      }

      function V(e) {
        return B(z(e))
      }

      function Y(e, t, n) {
        void 0 === n && (n = !1);
        const r = K(e),
          o = V(e),
          i = q(o);
        let u = "x" === o ? r === (n ? "end" : "start") ? "right" : "left" : "start" === r ? "bottom" : "top";
        return t.reference[i] > t.floating[i] && (u = Q(u)), [u, Q(u)]
      }

      function X(e) {
        return e.includes("start") ? e.replace("start", "end") : e.replace("end", "start")
      }
      const U = ["left", "right"],
        G = ["right", "left"],
        $ = ["top", "bottom"],
        Z = ["bottom", "top"];

      function Q(e) {
        const t = W(e);
        return j[t] + e.slice(t.length)
      }

      function J(e) {
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

      function ee(e) {
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
      var te = n(7766);

      function ne() {
        const e = navigator.userAgentData;
        return null != e && e.platform ? e.platform : navigator.platform
      }

      function re() {
        const e = navigator.userAgentData;
        return e && Array.isArray(e.brands) ? e.brands.map(e => {
          let {
            brand: t,
            version: n
          } = e;
          return t + "/" + n
        }).join(" ") : navigator.userAgent
      }

      function oe() {
        return /apple/i.test(navigator.vendor)
      }

      function ie() {
        const e = /android/i;
        return e.test(ne()) || e.test(re())
      }

      function ue() {
        return re().includes("jsdom/")
      }
      const le = "data-floating-ui-focusable",
        ce = "ArrowLeft",
        se = "ArrowRight";

      function ae(e) {
        let t = e.activeElement;
        for (; null != (null == (n = t) || null == (n = n.shadowRoot) ? void 0 : n.activeElement);) {
          var n;
          t = t.shadowRoot.activeElement
        }
        return t
      }

      function fe(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && d(n)) {
          let n = t;
          for (; n;) {
            if (e === n) return !0;
            n = n.parentNode || n.host
          }
        }
        return !1
      }

      function de(e) {
        return "composedPath" in e ? e.composedPath()[0] : e.target
      }

      function me(e, t) {
        if (null == t) return !1;
        if ("composedPath" in e) return e.composedPath().includes(t);
        const n = e;
        return null != n.target && t.contains(n.target)
      }

      function pe(e) {
        return (null == e ? void 0 : e.ownerDocument) || document
      }

      function ve(e) {
        return f(e) && e.matches("input:not([type='hidden']):not([disabled]),[contenteditable]:not([contenteditable='false']),textarea:not([disabled])")
      }

      function ge(e) {
        return !!e && "combobox" === e.getAttribute("role") && ve(e)
      }

      function he(e) {
        return e ? e.hasAttribute(le) ? e : e.querySelector("[" + le + "]") || e : null
      }

      function ye(e, t, n) {
        return void 0 === n && (n = !0), e.filter(e => {
          var r;
          return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open))
        }).flatMap(t => [t, ...ye(e, t.id, n)])
      }

      function be(e, t) {
        var n;
        let r = [],
          o = null == (n = e.find(e => e.id === t)) ? void 0 : n.parentId;
        for (; o;) {
          const t = e.find(e => e.id === o);
          o = null == t ? void 0 : t.parentId, t && (r = r.concat(t))
        }
        return r
      }

      function we(e) {
        e.preventDefault(), e.stopPropagation()
      }

      function xe(e) {
        return !(0 !== e.mozInputSource || !e.isTrusted) || (ie() && e.pointerType ? "click" === e.type && 1 === e.buttons : 0 === e.detail && !e.pointerType)
      }

      function Re(e) {
        return !ue() && (!ie() && 0 === e.width && 0 === e.height || ie() && 1 === e.width && 1 === e.height && 0 === e.pressure && 0 === e.detail && "mouse" === e.pointerType || e.width < 1 && e.height < 1 && 0 === e.pressure && 0 === e.detail && "touch" === e.pointerType)
      }

      function Ee(e, t) {
        const n = ["mouse", "pen"];
        return t || n.push("", void 0), n.includes(e)
      }
      var ke = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function Ie(e) {
        const t = r.useRef(e);
        return ke(() => {
          t.current = e
        }), t
      }
      const Me = {
        ...o
      }.useInsertionEffect || (e => e());

      function Ce(e) {
        const t = r.useRef(() => {});
        return Me(() => {
          t.current = e
        }), r.useCallback(function() {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
          return null == t.current ? void 0 : t.current(...n)
        }, [])
      }

      function Te(e, t, n) {
        return Math.floor(e / t) !== n
      }

      function Le(e, t) {
        return t < 0 || t >= e.current.length
      }

      function Pe(e, t) {
        return Ae(e, {
          disabledIndices: t
        })
      }

      function Oe(e, t) {
        return Ae(e, {
          decrement: !0,
          startingIndex: e.current.length,
          disabledIndices: t
        })
      }

      function Ae(e, t) {
        let {
          startingIndex: n = -1,
          decrement: r = !1,
          disabledIndices: o,
          amount: i = 1
        } = void 0 === t ? {} : t, u = n;
        do {
          u += r ? -i : i
        } while (u >= 0 && u <= e.current.length - 1 && je(e, u, o));
        return u
      }

      function Se(e, t) {
        let {
          event: n,
          orientation: r,
          loop: o,
          rtl: i,
          cols: u,
          disabledIndices: l,
          minIndex: c,
          maxIndex: s,
          prevIndex: a,
          stopEvent: f = !1
        } = t, d = a;
        if ("ArrowUp" === n.key) {
          if (f && we(n), -1 === a) d = s;
          else if (d = Ae(e, {
              startingIndex: d,
              amount: u,
              decrement: !0,
              disabledIndices: l
            }), o && (a - u < c || d < 0)) {
            const e = a % u,
              t = s % u,
              n = s - (t - e);
            d = t === e ? s : t > e ? n : n - u
          }
          Le(e, d) && (d = a)
        }
        if ("ArrowDown" === n.key && (f && we(n), -1 === a ? d = c : (d = Ae(e, {
            startingIndex: a,
            amount: u,
            disabledIndices: l
          }), o && a + u > s && (d = Ae(e, {
            startingIndex: a % u - u,
            amount: u,
            disabledIndices: l
          }))), Le(e, d) && (d = a)), "both" === r) {
          const t = F(a / u);
          n.key === (i ? ce : se) && (f && we(n), a % u !== u - 1 ? (d = Ae(e, {
            startingIndex: a,
            disabledIndices: l
          }), o && Te(d, u, t) && (d = Ae(e, {
            startingIndex: a - a % u - 1,
            disabledIndices: l
          }))) : o && (d = Ae(e, {
            startingIndex: a - a % u - 1,
            disabledIndices: l
          })), Te(d, u, t) && (d = a)), n.key === (i ? se : ce) && (f && we(n), a % u !== 0 ? (d = Ae(e, {
            startingIndex: a,
            decrement: !0,
            disabledIndices: l
          }), o && Te(d, u, t) && (d = Ae(e, {
            startingIndex: a + (u - a % u),
            decrement: !0,
            disabledIndices: l
          }))) : o && (d = Ae(e, {
            startingIndex: a + (u - a % u),
            decrement: !0,
            disabledIndices: l
          })), Te(d, u, t) && (d = a));
          const r = F(s / u) === t;
          Le(e, d) && (d = o && r ? n.key === (i ? se : ce) ? s : Ae(e, {
            startingIndex: a - a % u - 1,
            disabledIndices: l
          }) : a)
        }
        return d
      }

      function De(e, t, n) {
        const r = [];
        let o = 0;
        return e.forEach((e, i) => {
          let {
            width: u,
            height: l
          } = e, c = !1;
          for (n && (o = 0); !c;) {
            const e = [];
            for (let n = 0; n < u; n++)
              for (let r = 0; r < l; r++) e.push(o + n + r * t);
            o % t + u <= t && e.every(e => null == r[e]) ? (e.forEach(e => {
              r[e] = i
            }), c = !0) : o++
          }
        }), [...r]
      }

      function Fe(e, t, n, r, o) {
        if (-1 === e) return -1;
        const i = n.indexOf(e),
          u = t[e];
        switch (o) {
          case "tl":
            return i;
          case "tr":
            return u ? i + u.width - 1 : i;
          case "bl":
            return u ? i + (u.height - 1) * r : i;
          case "br":
            return n.lastIndexOf(e)
        }
      }

      function Ne(e, t) {
        return t.flatMap((t, n) => e.includes(t) ? [n] : [])
      }

      function je(e, t, n) {
        if ("function" == typeof n) return n(t);
        if (n) return n.includes(t);
        const r = e.current[t];
        return null == r || r.hasAttribute("disabled") || "true" === r.getAttribute("aria-disabled")
      }
      const He = () => ({
        getShadowRoot: !0,
        displayCheck: "function" == typeof ResizeObserver && ResizeObserver.toString().includes("[native code]") ? "full" : "none"
      });

      function _e(e, t) {
        const n = (0, te.tabbable)(e, He()),
          r = n.length;
        if (0 === r) return;
        const o = ae(pe(e)),
          i = n.indexOf(o);
        return n[-1 === i ? 1 === t ? 0 : r - 1 : i + t]
      }

      function We(e) {
        return _e(pe(e).body, 1) || e
      }

      function Ke(e) {
        return _e(pe(e).body, -1) || e
      }

      function Be(e, t) {
        const n = t || e.currentTarget,
          r = e.relatedTarget;
        return !r || !fe(n, r)
      }

      function qe(e) {
        (0, te.tabbable)(e, He()).forEach(e => {
          e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
        })
      }

      function ze(e) {
        e.querySelectorAll("[data-tabindex]").forEach(e => {
          const t = e.dataset.tabindex;
          delete e.dataset.tabindex, t ? e.setAttribute("tabindex", t) : e.removeAttribute("tabindex")
        })
      }
      var Ve = n(9793),
        Ye = n(4017);

      function Xe(e, t, n) {
        let {
          reference: r,
          floating: o
        } = e;
        const i = z(t),
          u = V(t),
          l = q(u),
          c = W(t),
          s = "y" === i,
          a = r.x + r.width / 2 - o.width / 2,
          f = r.y + r.height / 2 - o.height / 2,
          d = r[l] / 2 - o[l] / 2;
        let m;
        switch (c) {
          case "top":
            m = {
              x: a,
              y: r.y - o.height
            };
            break;
          case "bottom":
            m = {
              x: a,
              y: r.y + r.height
            };
            break;
          case "right":
            m = {
              x: r.x + r.width,
              y: f
            };
            break;
          case "left":
            m = {
              x: r.x - o.width,
              y: f
            };
            break;
          default:
            m = {
              x: r.x,
              y: r.y
            }
        }
        switch (K(t)) {
          case "start":
            m[u] -= d * (n && s ? -1 : 1);
            break;
          case "end":
            m[u] += d * (n && s ? -1 : 1)
        }
        return m
      }
      async function Ue(e, t) {
        var n;
        void 0 === t && (t = {});
        const {
          x: r,
          y: o,
          platform: i,
          rects: u,
          elements: l,
          strategy: c
        } = e, {
          boundary: s = "clippingAncestors",
          rootBoundary: a = "viewport",
          elementContext: f = "floating",
          altBoundary: d = !1,
          padding: m = 0
        } = _(t, e), p = J(m), v = l[d ? "floating" === f ? "reference" : "floating" : f], g = ee(await i.getClippingRect({
          element: null == (n = await (null == i.isElement ? void 0 : i.isElement(v))) || n ? v : v.contextElement || await (null == i.getDocumentElement ? void 0 : i.getDocumentElement(l.floating)),
          boundary: s,
          rootBoundary: a,
          strategy: c
        })), h = "floating" === f ? {
          x: r,
          y: o,
          width: u.floating.width,
          height: u.floating.height
        } : u.reference, y = await (null == i.getOffsetParent ? void 0 : i.getOffsetParent(l.floating)), b = await (null == i.isElement ? void 0 : i.isElement(y)) && await (null == i.getScale ? void 0 : i.getScale(y)) || {
          x: 1,
          y: 1
        }, w = ee(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: l,
          rect: h,
          offsetParent: y,
          strategy: c
        }) : h);
        return {
          top: (g.top - w.top + p.top) / b.y,
          bottom: (w.bottom - g.bottom + p.bottom) / b.y,
          left: (g.left - w.left + p.left) / b.x,
          right: (w.right - g.right + p.right) / b.x
        }
      }

      function Ge(e, t) {
        return {
          top: e.top - t.height,
          right: e.right - t.width,
          bottom: e.bottom - t.height,
          left: e.left - t.width
        }
      }

      function $e(e) {
        return L.some(t => e[t] >= 0)
      }

      function Ze(e) {
        const t = A(...e.map(e => e.left)),
          n = A(...e.map(e => e.top));
        return {
          x: t,
          y: n,
          width: S(...e.map(e => e.right)) - t,
          height: S(...e.map(e => e.bottom)) - n
        }
      }
      const Qe = new Set(["left", "top"]);

      function Je(e) {
        const t = E(e);
        let n = parseFloat(t.width) || 0,
          r = parseFloat(t.height) || 0;
        const o = f(e),
          i = o ? e.offsetWidth : n,
          u = o ? e.offsetHeight : r,
          l = D(n) !== i || D(r) !== u;
        return l && (n = i, r = u), {
          width: n,
          height: r,
          $: l
        }
      }

      function et(e) {
        return a(e) ? e : e.contextElement
      }

      function tt(e) {
        const t = et(e);
        if (!f(t)) return N(1);
        const n = t.getBoundingClientRect(),
          {
            width: r,
            height: o,
            $: i
          } = Je(t);
        let u = (i ? D(n.width) : n.width) / r,
          l = (i ? D(n.height) : n.height) / o;
        return u && Number.isFinite(u) || (u = 1), l && Number.isFinite(l) || (l = 1), {
          x: u,
          y: l
        }
      }
      const nt = N(0);

      function rt(e) {
        const t = l(e);
        return x() && t.visualViewport ? {
          x: t.visualViewport.offsetLeft,
          y: t.visualViewport.offsetTop
        } : nt
      }

      function ot(e, t, n, r) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const o = e.getBoundingClientRect(),
          i = et(e);
        let u = N(1);
        t && (r ? a(r) && (u = tt(r)) : u = tt(e));
        const c = function(e, t, n) {
          return void 0 === t && (t = !1), !(!n || t && n !== l(e)) && t
        }(i, n, r) ? rt(i) : N(0);
        let s = (o.left + c.x) / u.x,
          f = (o.top + c.y) / u.y,
          d = o.width / u.x,
          m = o.height / u.y;
        if (i) {
          const e = l(i),
            t = r && a(r) ? l(r) : r;
          let n = e,
            o = T(n);
          for (; o && r && t !== n;) {
            const e = tt(o),
              t = o.getBoundingClientRect(),
              r = E(o),
              i = t.left + (o.clientLeft + parseFloat(r.paddingLeft)) * e.x,
              u = t.top + (o.clientTop + parseFloat(r.paddingTop)) * e.y;
            s *= e.x, f *= e.y, d *= e.x, m *= e.y, s += i, f += u, n = l(o), o = T(n)
          }
        }
        return ee({
          width: d,
          height: m,
          x: s,
          y: f
        })
      }

      function it(e, t) {
        const n = k(e).scrollLeft;
        return t ? t.left + n : ot(c(e)).left + n
      }

      function ut(e, t) {
        const n = e.getBoundingClientRect();
        return {
          x: n.left + t.scrollLeft - it(e, n),
          y: n.top + t.scrollTop
        }
      }

      function lt(e, t, n) {
        let r;
        if ("viewport" === t) r = function(e, t) {
          const n = l(e),
            r = c(e),
            o = n.visualViewport;
          let i = r.clientWidth,
            u = r.clientHeight,
            s = 0,
            a = 0;
          if (o) {
            i = o.width, u = o.height;
            const e = x();
            (!e || e && "fixed" === t) && (s = o.offsetLeft, a = o.offsetTop)
          }
          const f = it(r);
          if (f <= 0) {
            const e = r.ownerDocument,
              t = e.body,
              n = getComputedStyle(t),
              o = "CSS1Compat" === e.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              u = Math.abs(r.clientWidth - t.clientWidth - o);
            u <= 25 && (i -= u)
          } else f <= 25 && (i += f);
          return {
            width: i,
            height: u,
            x: s,
            y: a
          }
        }(e, n);
        else if ("document" === t) r = function(e) {
          const t = c(e),
            n = k(e),
            r = e.ownerDocument.body,
            o = S(t.scrollWidth, t.clientWidth, r.scrollWidth, r.clientWidth),
            i = S(t.scrollHeight, t.clientHeight, r.scrollHeight, r.clientHeight);
          let u = -n.scrollLeft + it(e);
          const l = -n.scrollTop;
          return "rtl" === E(r).direction && (u += S(t.clientWidth, r.clientWidth) - o), {
            width: o,
            height: i,
            x: u,
            y: l
          }
        }(c(e));
        else if (a(t)) r = function(e, t) {
          const n = ot(e, !0, "fixed" === t),
            r = n.top + e.clientTop,
            o = n.left + e.clientLeft,
            i = f(e) ? tt(e) : N(1);
          return {
            width: e.clientWidth * i.x,
            height: e.clientHeight * i.y,
            x: o * i.x,
            y: r * i.y
          }
        }(t, n);
        else {
          const n = rt(e);
          r = {
            x: t.x - n.x,
            y: t.y - n.y,
            width: t.width,
            height: t.height
          }
        }
        return ee(r)
      }

      function ct(e, t) {
        const n = I(e);
        return !(n === t || !a(n) || R(n)) && ("fixed" === E(n).position || ct(n, t))
      }

      function st(e, t, n) {
        const r = f(t),
          o = c(t),
          i = "fixed" === n,
          l = ot(e, !0, i, t);
        let s = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const a = N(0);

        function d() {
          a.x = it(o)
        }
        if (r || !r && !i)
          if (("body" !== u(t) || m(o)) && (s = k(t)), r) {
            const e = ot(t, !0, i, t);
            a.x = e.x + t.clientLeft, a.y = e.y + t.clientTop
          } else o && d();
        i && !r && o && d();
        const p = !o || r || i ? N(0) : ut(o, s);
        return {
          x: l.left + s.scrollLeft - a.x - p.x,
          y: l.top + s.scrollTop - a.y - p.y,
          width: l.width,
          height: l.height
        }
      }

      function at(e) {
        return "static" === E(e).position
      }

      function ft(e, t) {
        if (!f(e) || "fixed" === E(e).position) return null;
        if (t) return t(e);
        let n = e.offsetParent;
        return c(e) === n && (n = n.ownerDocument.body), n
      }

      function dt(e, t) {
        const n = l(e);
        if (v(e)) return n;
        if (!f(e)) {
          let t = I(e);
          for (; t && !R(t);) {
            if (a(t) && !at(t)) return t;
            t = I(t)
          }
          return n
        }
        let r = ft(e, t);
        for (; r && p(r) && at(r);) r = ft(r, t);
        return r && R(r) && at(r) && !w(r) ? n : r || function(e) {
          let t = I(e);
          for (; f(t) && !R(t);) {
            if (w(t)) return t;
            if (v(t)) return null;
            t = I(t)
          }
          return null
        }(e) || n
      }
      const mt = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(e) {
          let {
            elements: t,
            rect: n,
            offsetParent: r,
            strategy: o
          } = e;
          const i = "fixed" === o,
            l = c(r),
            s = !!t && v(t.floating);
          if (r === l || s && i) return n;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            d = N(1);
          const p = N(0),
            g = f(r);
          if ((g || !g && !i) && (("body" !== u(r) || m(l)) && (a = k(r)), g)) {
            const e = ot(r);
            d = tt(r), p.x = e.x + r.clientLeft, p.y = e.y + r.clientTop
          }
          const h = !l || g || i ? N(0) : ut(l, a);
          return {
            width: n.width * d.x,
            height: n.height * d.y,
            x: n.x * d.x - a.scrollLeft * d.x + p.x + h.x,
            y: n.y * d.y - a.scrollTop * d.y + p.y + h.y
          }
        },
        getDocumentElement: c,
        getClippingRect: function(e) {
          let {
            element: t,
            boundary: n,
            rootBoundary: r,
            strategy: o
          } = e;
          const i = [..."clippingAncestors" === n ? v(t) ? [] : function(e, t) {
              const n = t.get(e);
              if (n) return n;
              let r = C(e, [], !1).filter(e => a(e) && "body" !== u(e)),
                o = null;
              const i = "fixed" === E(e).position;
              let l = i ? I(e) : e;
              for (; a(l) && !R(l);) {
                const t = E(l),
                  n = w(l);
                n || "fixed" !== t.position || (o = null), (i ? !n && !o : !n && "static" === t.position && o && ("absolute" === o.position || "fixed" === o.position) || m(l) && !n && ct(e, l)) ? r = r.filter(e => e !== l) : o = t, l = I(l)
              }
              return t.set(e, r), r
            }(t, this._c) : [].concat(n), r],
            l = lt(t, i[0], o);
          let c = l.top,
            s = l.right,
            f = l.bottom,
            d = l.left;
          for (let e = 1; e < i.length; e++) {
            const n = lt(t, i[e], o);
            c = S(n.top, c), s = A(n.right, s), f = A(n.bottom, f), d = S(n.left, d)
          }
          return {
            width: s - d,
            height: f - c,
            x: d,
            y: c
          }
        },
        getOffsetParent: dt,
        getElementRects: async function(e) {
          const t = this.getOffsetParent || dt,
            n = this.getDimensions,
            r = await n(e.floating);
          return {
            reference: st(e.reference, await t(e.floating), e.strategy),
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
          } = Je(e);
          return {
            width: t,
            height: n
          }
        },
        getScale: tt,
        isElement: a,
        isRTL: function(e) {
          return "rtl" === E(e).direction
        }
      };

      function pt(e, t) {
        return e.x === t.x && e.y === t.y && e.width === t.width && e.height === t.height
      }

      function vt(e, t, n, r) {
        void 0 === r && (r = {});
        const {
          ancestorScroll: o = !0,
          ancestorResize: i = !0,
          elementResize: u = "function" == typeof ResizeObserver,
          layoutShift: l = "function" == typeof IntersectionObserver,
          animationFrame: s = !1
        } = r, a = et(e), f = o || i ? [...a ? C(a) : [], ...t ? C(t) : []] : [];
        f.forEach(e => {
          o && e.addEventListener("scroll", n, {
            passive: !0
          }), i && e.addEventListener("resize", n)
        });
        const d = a && l ? function(e, t) {
          let n, r = null;
          const o = c(e);

          function i() {
            var e;
            clearTimeout(n), null == (e = r) || e.disconnect(), r = null
          }
          return function u(l, c) {
            void 0 === l && (l = !1), void 0 === c && (c = 1), i();
            const s = e.getBoundingClientRect(),
              {
                left: a,
                top: f,
                width: d,
                height: m
              } = s;
            if (l || t(), !d || !m) return;
            const p = {
              rootMargin: -F(f) + "px " + -F(o.clientWidth - (a + d)) + "px " + -F(o.clientHeight - (f + m)) + "px " + -F(a) + "px",
              threshold: S(0, A(1, c)) || 1
            };
            let v = !0;

            function g(t) {
              const r = t[0].intersectionRatio;
              if (r !== c) {
                if (!v) return u();
                r ? u(!1, r) : n = setTimeout(() => {
                  u(!1, 1e-7)
                }, 1e3)
              }
              1 !== r || pt(s, e.getBoundingClientRect()) || u(), v = !1
            }
            try {
              r = new IntersectionObserver(g, {
                ...p,
                root: o.ownerDocument
              })
            } catch (e) {
              r = new IntersectionObserver(g, p)
            }
            r.observe(e)
          }(!0), i
        }(a, n) : null;
        let m, p = -1,
          v = null;
        u && (v = new ResizeObserver(e => {
          let [r] = e;
          r && r.target === a && v && t && (v.unobserve(t), cancelAnimationFrame(p), p = requestAnimationFrame(() => {
            var e;
            null == (e = v) || e.observe(t)
          })), n()
        }), a && !s && v.observe(a), t && v.observe(t));
        let g = s ? ot(e) : null;
        return s && function t() {
          const r = ot(e);
          g && !pt(g, r) && n(), g = r, m = requestAnimationFrame(t)
        }(), n(), () => {
          var e;
          f.forEach(e => {
            o && e.removeEventListener("scroll", n), i && e.removeEventListener("resize", n)
          }), null == d || d(), null == (e = v) || e.disconnect(), v = null, s && cancelAnimationFrame(m)
        }
      }
      const gt = Ue,
        ht = function(e) {
          return void 0 === e && (e = {}), {
            name: "flip",
            options: e,
            async fn(t) {
              var n, r;
              const {
                placement: o,
                middlewareData: i,
                rects: u,
                initialPlacement: l,
                platform: c,
                elements: s
              } = t, {
                mainAxis: a = !0,
                crossAxis: f = !0,
                fallbackPlacements: d,
                fallbackStrategy: m = "bestFit",
                fallbackAxisSideDirection: p = "none",
                flipAlignment: v = !0,
                ...g
              } = _(e, t);
              if (null != (n = i.arrow) && n.alignmentOffset) return {};
              const h = W(o),
                y = z(l),
                b = W(l) === l,
                w = await (null == c.isRTL ? void 0 : c.isRTL(s.floating)),
                x = d || (b || !v ? [Q(l)] : function(e) {
                  const t = Q(e);
                  return [X(e), t, X(t)]
                }(l)),
                R = "none" !== p;
              !d && R && x.push(... function(e, t, n, r) {
                const o = K(e);
                let i = function(e, t, n) {
                  switch (e) {
                    case "top":
                    case "bottom":
                      return n ? t ? G : U : t ? U : G;
                    case "left":
                    case "right":
                      return t ? $ : Z;
                    default:
                      return []
                  }
                }(W(e), "start" === n, r);
                return o && (i = i.map(e => e + "-" + o), t && (i = i.concat(i.map(X)))), i
              }(l, v, p, w));
              const E = [l, ...x],
                k = await c.detectOverflow(t, g),
                I = [];
              let M = (null == (r = i.flip) ? void 0 : r.overflows) || [];
              if (a && I.push(k[h]), f) {
                const e = Y(o, u, w);
                I.push(k[e[0]], k[e[1]])
              }
              if (M = [...M, {
                  placement: o,
                  overflows: I
                }], !I.every(e => e <= 0)) {
                var C, T;
                const e = ((null == (C = i.flip) ? void 0 : C.index) || 0) + 1,
                  t = E[e];
                if (t && ("alignment" !== f || y === z(t) || M.every(e => z(e.placement) !== y || e.overflows[0] > 0))) return {
                  data: {
                    index: e,
                    overflows: M
                  },
                  reset: {
                    placement: t
                  }
                };
                let n = null == (T = M.filter(e => e.overflows[0] <= 0).sort((e, t) => e.overflows[1] - t.overflows[1])[0]) ? void 0 : T.placement;
                if (!n) switch (m) {
                  case "bestFit": {
                    var L;
                    const e = null == (L = M.filter(e => {
                      if (R) {
                        const t = z(e.placement);
                        return t === y || "y" === t
                      }
                      return !0
                    }).map(e => [e.placement, e.overflows.filter(e => e > 0).reduce((e, t) => e + t, 0)]).sort((e, t) => e[1] - t[1])[0]) ? void 0 : L[0];
                    e && (n = e);
                    break
                  }
                  case "initialPlacement":
                    n = l
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
        yt = e => ({
          name: "arrow",
          options: e,
          async fn(t) {
            const {
              x: n,
              y: r,
              placement: o,
              rects: i,
              platform: u,
              elements: l,
              middlewareData: c
            } = t, {
              element: s,
              padding: a = 0
            } = _(e, t) || {};
            if (null == s) return {};
            const f = J(a),
              d = {
                x: n,
                y: r
              },
              m = V(o),
              p = q(m),
              v = await u.getDimensions(s),
              g = "y" === m,
              h = g ? "top" : "left",
              y = g ? "bottom" : "right",
              b = g ? "clientHeight" : "clientWidth",
              w = i.reference[p] + i.reference[m] - d[m] - i.floating[p],
              x = d[m] - i.reference[m],
              R = await (null == u.getOffsetParent ? void 0 : u.getOffsetParent(s));
            let E = R ? R[b] : 0;
            E && await (null == u.isElement ? void 0 : u.isElement(R)) || (E = l.floating[b] || i.floating[p]);
            const k = w / 2 - x / 2,
              I = E / 2 - v[p] / 2 - 1,
              M = A(f[h], I),
              C = A(f[y], I),
              T = M,
              L = E - v[p] - C,
              P = E / 2 - v[p] / 2 + k,
              O = H(T, P, L),
              S = !c.arrow && null != K(o) && P !== O && i.reference[p] / 2 - (P < T ? M : C) - v[p] / 2 < 0,
              D = S ? P < T ? P - T : P - L : 0;
            return {
              [m]: d[m] + D,
              data: {
                [m]: O,
                centerOffset: P - O - D,
                ...S && {
                  alignmentOffset: D
                }
              },
              reset: S
            }
          }
        }),
        bt = function(e) {
          return void 0 === e && (e = {}), {
            options: e,
            fn(t) {
              const {
                x: n,
                y: r,
                placement: o,
                rects: i,
                middlewareData: u
              } = t, {
                offset: l = 0,
                mainAxis: c = !0,
                crossAxis: s = !0
              } = _(e, t), a = {
                x: n,
                y: r
              }, f = z(o), d = B(f);
              let m = a[d],
                p = a[f];
              const v = _(l, t),
                g = "number" == typeof v ? {
                  mainAxis: v,
                  crossAxis: 0
                } : {
                  mainAxis: 0,
                  crossAxis: 0,
                  ...v
                };
              if (c) {
                const e = "y" === d ? "height" : "width",
                  t = i.reference[d] - i.floating[e] + g.mainAxis,
                  n = i.reference[d] + i.reference[e] - g.mainAxis;
                m < t ? m = t : m > n && (m = n)
              }
              if (s) {
                var h, y;
                const e = "y" === d ? "width" : "height",
                  t = Qe.has(W(o)),
                  n = i.reference[f] - i.floating[e] + (t && (null == (h = u.offset) ? void 0 : h[f]) || 0) + (t ? 0 : g.crossAxis),
                  r = i.reference[f] + i.reference[e] + (t ? 0 : (null == (y = u.offset) ? void 0 : y[f]) || 0) - (t ? g.crossAxis : 0);
                p < n ? p = n : p > r && (p = r)
              }
              return {
                [d]: m,
                [f]: p
              }
            }
          }
        },
        wt = (e, t, n) => {
          const r = new Map,
            o = {
              platform: mt,
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
              platform: u
            } = n, l = u.detectOverflow ? u : {
              ...u,
              detectOverflow: Ue
            }, c = await (null == u.isRTL ? void 0 : u.isRTL(t));
            let s = await u.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }),
              {
                x: a,
                y: f
              } = Xe(s, r, c),
              d = r,
              m = 0;
            const p = {};
            for (let n = 0; n < i.length; n++) {
              const v = i[n];
              if (!v) continue;
              const {
                name: g,
                fn: h
              } = v, {
                x: y,
                y: b,
                data: w,
                reset: x
              } = await h({
                x: a,
                y: f,
                initialPlacement: r,
                placement: d,
                strategy: o,
                middlewareData: p,
                rects: s,
                platform: l,
                elements: {
                  reference: e,
                  floating: t
                }
              });
              a = null != y ? y : a, f = null != b ? b : f, p[g] = {
                ...p[g],
                ...w
              }, x && m < 50 && (m++, "object" == typeof x && (x.placement && (d = x.placement), x.rects && (s = !0 === x.rects ? await u.getElementRects({
                reference: e,
                floating: t,
                strategy: o
              }) : x.rects), ({
                x: a,
                y: f
              } = Xe(s, d, c))), n = -1)
            }
            return {
              x: a,
              y: f,
              placement: d,
              strategy: o,
              middlewareData: p
            }
          })(e, t, {
            ...o,
            platform: i
          })
        };
      var xt = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function Rt(e, t) {
        if (e === t) return !0;
        if (typeof e != typeof t) return !1;
        if ("function" == typeof e && e.toString() === t.toString()) return !0;
        let n, r, o;
        if (e && t && "object" == typeof e) {
          if (Array.isArray(e)) {
            if (n = e.length, n !== t.length) return !1;
            for (r = n; 0 !== r--;)
              if (!Rt(e[r], t[r])) return !1;
            return !0
          }
          if (o = Object.keys(e), n = o.length, n !== Object.keys(t).length) return !1;
          for (r = n; 0 !== r--;)
            if (!{}.hasOwnProperty.call(t, o[r])) return !1;
          for (r = n; 0 !== r--;) {
            const n = o[r];
            if (!("_owner" === n && e.$$typeof || Rt(e[n], t[n]))) return !1
          }
          return !0
        }
        return e != e && t != t
      }

      function Et(e) {
        return "undefined" == typeof window ? 1 : (e.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function kt(e, t) {
        const n = Et(e);
        return Math.round(t * n) / n
      }

      function It(e) {
        const t = r.useRef(e);
        return xt(() => {
          t.current = e
        }), t
      }
      const Mt = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = 0), {
              name: "offset",
              options: e,
              async fn(t) {
                var n, r;
                const {
                  x: o,
                  y: i,
                  placement: u,
                  middlewareData: l
                } = t, c = await async function(e, t) {
                  const {
                    placement: n,
                    platform: r,
                    elements: o
                  } = e, i = await (null == r.isRTL ? void 0 : r.isRTL(o.floating)), u = W(n), l = K(n), c = "y" === z(n), s = Qe.has(u) ? -1 : 1, a = i && c ? -1 : 1, f = _(t, e);
                  let {
                    mainAxis: d,
                    crossAxis: m,
                    alignmentAxis: p
                  } = "number" == typeof f ? {
                    mainAxis: f,
                    crossAxis: 0,
                    alignmentAxis: null
                  } : {
                    mainAxis: f.mainAxis || 0,
                    crossAxis: f.crossAxis || 0,
                    alignmentAxis: f.alignmentAxis
                  };
                  return l && "number" == typeof p && (m = "end" === l ? -1 * p : p), c ? {
                    x: m * a,
                    y: d * s
                  } : {
                    x: d * s,
                    y: m * a
                  }
                }(t, e);
                return u === (null == (n = l.offset) ? void 0 : n.placement) && null != (r = l.arrow) && r.alignmentOffset ? {} : {
                  x: o + c.x,
                  y: i + c.y,
                  data: {
                    ...c,
                    placement: u
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
        Ct = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "shift",
              options: e,
              async fn(t) {
                const {
                  x: n,
                  y: r,
                  placement: o,
                  platform: i
                } = t, {
                  mainAxis: u = !0,
                  crossAxis: l = !1,
                  limiter: c = {
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
                  ...s
                } = _(e, t), a = {
                  x: n,
                  y: r
                }, f = await i.detectOverflow(t, s), d = z(W(o)), m = B(d);
                let p = a[m],
                  v = a[d];
                if (u) {
                  const e = "y" === m ? "bottom" : "right";
                  p = H(p + f["y" === m ? "top" : "left"], p, p - f[e])
                }
                if (l) {
                  const e = "y" === d ? "bottom" : "right";
                  v = H(v + f["y" === d ? "top" : "left"], v, v - f[e])
                }
                const g = c.fn({
                  ...t,
                  [m]: p,
                  [d]: v
                });
                return {
                  ...g,
                  data: {
                    x: g.x - n,
                    y: g.y - r,
                    enabled: {
                      [m]: u,
                      [d]: l
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
        Tt = (e, t) => ({
          fn: bt(e).fn,
          options: [e, t]
        }),
        Lt = (e, t) => {
          const n = ht(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        },
        Pt = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "size",
              options: e,
              async fn(t) {
                var n, r;
                const {
                  placement: o,
                  rects: i,
                  platform: u,
                  elements: l
                } = t, {
                  apply: c = () => {},
                  ...s
                } = _(e, t), a = await u.detectOverflow(t, s), f = W(o), d = K(o), m = "y" === z(o), {
                  width: p,
                  height: v
                } = i.floating;
                let g, h;
                "top" === f || "bottom" === f ? (g = f, h = d === (await (null == u.isRTL ? void 0 : u.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = f, g = "end" === d ? "top" : "bottom");
                const y = v - a.top - a.bottom,
                  b = p - a.left - a.right,
                  w = A(v - a[g], y),
                  x = A(p - a[h], b),
                  R = !t.middlewareData.shift;
                let E = w,
                  k = x;
                if (null != (n = t.middlewareData.shift) && n.enabled.x && (k = b), null != (r = t.middlewareData.shift) && r.enabled.y && (E = y), R && !d) {
                  const e = S(a.left, 0),
                    t = S(a.right, 0),
                    n = S(a.top, 0),
                    r = S(a.bottom, 0);
                  m ? k = p - 2 * (0 !== e || 0 !== t ? e + t : S(a.left, a.right)) : E = v - 2 * (0 !== n || 0 !== r ? n + r : S(a.top, a.bottom))
                }
                await c({
                  ...t,
                  availableWidth: k,
                  availableHeight: E
                });
                const I = await u.getDimensions(l.floating);
                return p !== I.width || v !== I.height ? {
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
        Ot = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "autoPlacement",
              options: e,
              async fn(t) {
                var n, r, o;
                const {
                  rects: i,
                  middlewareData: u,
                  placement: l,
                  platform: c,
                  elements: s
                } = t, {
                  crossAxis: a = !1,
                  alignment: f,
                  allowedPlacements: d = O,
                  autoAlignment: m = !0,
                  ...p
                } = _(e, t), v = void 0 !== f || d === O ? function(e, t, n) {
                  return (e ? [...n.filter(t => K(t) === e), ...n.filter(t => K(t) !== e)] : n.filter(e => W(e) === e)).filter(n => !e || K(n) === e || !!t && X(n) !== n)
                }(f || null, m, d) : d, g = await c.detectOverflow(t, p), h = (null == (n = u.autoPlacement) ? void 0 : n.index) || 0, y = v[h];
                if (null == y) return {};
                const b = Y(y, i, await (null == c.isRTL ? void 0 : c.isRTL(s.floating)));
                if (l !== y) return {
                  reset: {
                    placement: v[0]
                  }
                };
                const w = [g[W(y)], g[b[0]], g[b[1]]],
                  x = [...(null == (r = u.autoPlacement) ? void 0 : r.overflows) || [], {
                    placement: y,
                    overflows: w
                  }],
                  R = v[h + 1];
                if (R) return {
                  data: {
                    index: h + 1,
                    overflows: x
                  },
                  reset: {
                    placement: R
                  }
                };
                const E = x.map(e => {
                    const t = K(e.placement);
                    return [e.placement, t && a ? e.overflows.slice(0, 2).reduce((e, t) => e + t, 0) : e.overflows[0], e.overflows]
                  }).sort((e, t) => e[1] - t[1]),
                  k = (null == (o = E.filter(e => e[2].slice(0, K(e[0]) ? 2 : 3).every(e => e <= 0))[0]) ? void 0 : o[0]) || E[0][0];
                return k !== l ? {
                  data: {
                    index: h + 1,
                    overflows: x
                  },
                  reset: {
                    placement: k
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
        At = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "hide",
              options: e,
              async fn(t) {
                const {
                  rects: n,
                  platform: r
                } = t, {
                  strategy: o = "referenceHidden",
                  ...i
                } = _(e, t);
                switch (o) {
                  case "referenceHidden": {
                    const e = Ge(await r.detectOverflow(t, {
                      ...i,
                      elementContext: "reference"
                    }), n.reference);
                    return {
                      data: {
                        referenceHiddenOffsets: e,
                        referenceHidden: $e(e)
                      }
                    }
                  }
                  case "escaped": {
                    const e = Ge(await r.detectOverflow(t, {
                      ...i,
                      altBoundary: !0
                    }), n.floating);
                    return {
                      data: {
                        escapedOffsets: e,
                        escaped: $e(e)
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
        St = (e, t) => {
          const n = function(e) {
            return void 0 === e && (e = {}), {
              name: "inline",
              options: e,
              async fn(t) {
                const {
                  placement: n,
                  elements: r,
                  rects: o,
                  platform: i,
                  strategy: u
                } = t, {
                  padding: l = 2,
                  x: c,
                  y: s
                } = _(e, t), a = Array.from(await (null == i.getClientRects ? void 0 : i.getClientRects(r.reference)) || []), f = function(e) {
                  const t = e.slice().sort((e, t) => e.y - t.y),
                    n = [];
                  let r = null;
                  for (let e = 0; e < t.length; e++) {
                    const o = t[e];
                    !r || o.y - r.y > r.height / 2 ? n.push([o]) : n[n.length - 1].push(o), r = o
                  }
                  return n.map(e => ee(Ze(e)))
                }(a), d = ee(Ze(a)), m = J(l), p = await i.getElementRects({
                  reference: {
                    getBoundingClientRect: function() {
                      if (2 === f.length && f[0].left > f[1].right && null != c && null != s) return f.find(e => c > e.left - m.left && c < e.right + m.right && s > e.top - m.top && s < e.bottom + m.bottom) || d;
                      if (f.length >= 2) {
                        if ("y" === z(n)) {
                          const e = f[0],
                            t = f[f.length - 1],
                            r = "top" === W(n),
                            o = e.top,
                            i = t.bottom,
                            u = r ? e.left : t.left,
                            l = r ? e.right : t.right;
                          return {
                            top: o,
                            bottom: i,
                            left: u,
                            right: l,
                            width: l - u,
                            height: i - o,
                            x: u,
                            y: o
                          }
                        }
                        const e = "left" === W(n),
                          t = S(...f.map(e => e.right)),
                          r = A(...f.map(e => e.left)),
                          o = f.filter(n => e ? n.left === r : n.right === t),
                          i = o[0].top,
                          u = o[o.length - 1].bottom;
                        return {
                          top: i,
                          bottom: u,
                          left: r,
                          right: t,
                          width: t - r,
                          height: u - i,
                          x: r,
                          y: i
                        }
                      }
                      return d
                    }
                  },
                  floating: r.floating,
                  strategy: u
                });
                return o.reference.x !== p.reference.x || o.reference.y !== p.reference.y || o.reference.width !== p.reference.width || o.reference.height !== p.reference.height ? {
                  reset: {
                    rects: p
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
        Dt = (e, t) => {
          const n = (e => ({
            name: "arrow",
            options: e,
            fn(t) {
              const {
                element: n,
                padding: r
              } = "function" == typeof e ? e(t) : e;
              return n && (o = n, {}.hasOwnProperty.call(o, "current")) ? null != n.current ? yt({
                element: n.current,
                padding: r
              }).fn(t) : {} : n ? yt({
                element: n,
                padding: r
              }).fn(t) : {};
              var o
            }
          }))(e);
          return {
            name: n.name,
            fn: n.fn,
            options: [e, t]
          }
        };

      function Ft(e) {
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

      function Nt(e, t) {
        const n = e.compareDocumentPosition(t);
        return n & Node.DOCUMENT_POSITION_FOLLOWING || n & Node.DOCUMENT_POSITION_CONTAINED_BY ? -1 : n & Node.DOCUMENT_POSITION_PRECEDING || n & Node.DOCUMENT_POSITION_CONTAINS ? 1 : 0
      }
      const jt = r.createContext({
        register: () => {},
        unregister: () => {},
        map: new Map,
        elementsRef: {
          current: []
        }
      });

      function Ht(e) {
        const {
          children: t,
          elementsRef: n,
          labelsRef: o
        } = e, [i, u] = r.useState(() => new Set), l = r.useCallback(e => {
          u(t => new Set(t).add(e))
        }, []), c = r.useCallback(e => {
          u(t => {
            const n = new Set(t);
            return n.delete(e), n
          })
        }, []), s = r.useMemo(() => {
          const e = new Map;
          return Array.from(i.keys()).sort(Nt).forEach((t, n) => {
            e.set(t, n)
          }), e
        }, [i]);
        return (0, Ve.jsx)(jt.Provider, {
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

      function _t(e) {
        void 0 === e && (e = {});
        const {
          label: t
        } = e, {
          register: n,
          unregister: o,
          map: i,
          elementsRef: u,
          labelsRef: l
        } = r.useContext(jt), [c, s] = r.useState(null), a = r.useRef(null), f = r.useCallback(e => {
          if (a.current = e, null !== c && (u.current[c] = e, l)) {
            var n;
            const r = void 0 !== t;
            l.current[c] = r ? t : null != (n = null == e ? void 0 : e.textContent) ? n : null
          }
        }, [c, u, l, t]);
        return ke(() => {
          const e = a.current;
          if (e) return n(e), () => {
            o(e)
          }
        }, [n, o]), ke(() => {
          const e = a.current ? i.get(a.current) : null;
          null != e && s(e)
        }, [i]), r.useMemo(() => ({
          ref: f,
          index: null == c ? -1 : c
        }), [c, f])
      }
      const Wt = "data-floating-ui-focusable",
        Kt = "active",
        Bt = "selected",
        qt = "ArrowLeft",
        zt = "ArrowRight",
        Vt = "ArrowUp",
        Yt = "ArrowDown";

      function Xt(e, t) {
        return "function" == typeof e ? e(t) : e ? r.cloneElement(e, t) : (0, Ve.jsx)("div", {
          ...t
        })
      }
      const Ut = r.createContext({
          activeIndex: 0,
          onNavigate: () => {}
        }),
        Gt = [qt, zt],
        $t = [Vt, Yt],
        Zt = [...Gt, ...$t],
        Qt = r.forwardRef(function(e, t) {
          const {
            render: n,
            orientation: o = "both",
            loop: i = !0,
            rtl: u = !1,
            cols: l = 1,
            disabledIndices: c,
            activeIndex: s,
            onNavigate: a,
            itemSizes: f,
            dense: d = !1,
            ...m
          } = e, [p, v] = r.useState(0), g = null != s ? s : p, h = Ce(null != a ? a : v), y = r.useRef([]), b = n && "function" != typeof n ? n.props : {}, w = r.useMemo(() => ({
            activeIndex: g,
            onNavigate: h
          }), [g, h]), x = l > 1, R = {
            ...m,
            ...b,
            ref: t,
            "aria-orientation": "both" === o ? void 0 : o,
            onKeyDown(e) {
              null == m.onKeyDown || m.onKeyDown(e), null == b.onKeyDown || b.onKeyDown(e),
                function(e) {
                  if (!Zt.includes(e.key)) return;
                  let t = g;
                  const n = Pe(y, c),
                    r = Oe(y, c),
                    s = u ? qt : zt,
                    a = u ? zt : qt;
                  if (x) {
                    const a = f || Array.from({
                        length: y.current.length
                      }, () => ({
                        width: 1,
                        height: 1
                      })),
                      m = De(a, l, d),
                      p = m.findIndex(e => null != e && !je(y, e, c)),
                      v = m.reduce((e, t, n) => null == t || je(y, t, c) ? e : n, -1),
                      h = m[Se({
                        current: m.map(e => e ? y.current[e] : null)
                      }, {
                        event: e,
                        orientation: o,
                        loop: i,
                        rtl: u,
                        cols: l,
                        disabledIndices: Ne([...("function" != typeof c ? c : null) || y.current.map((e, t) => je(y, t, c) ? t : void 0), void 0], m),
                        minIndex: p,
                        maxIndex: v,
                        prevIndex: Fe(g > r ? n : g, a, m, l, e.key === Yt ? "bl" : e.key === s ? "tr" : "tl")
                      })];
                    null != h && (t = h)
                  }
                  const m = {
                      horizontal: [s],
                      vertical: [Yt],
                      both: [s, Yt]
                    } [o],
                    p = {
                      horizontal: [a],
                      vertical: [Vt],
                      both: [a, Vt]
                    } [o],
                    v = x ? Zt : {
                      horizontal: Gt,
                      vertical: $t,
                      both: Zt
                    } [o];
                  var b;
                  t === g && [...m, ...p].includes(e.key) && (t = i && t === r && m.includes(e.key) ? n : i && t === n && p.includes(e.key) ? r : Ae(y, {
                    startingIndex: t,
                    decrement: p.includes(e.key),
                    disabledIndices: c
                  })), t === g || Le(y, t) || (e.stopPropagation(), v.includes(e.key) && e.preventDefault(), h(t), null == (b = y.current[t]) || b.focus())
                }(e)
            }
          };
          return (0, Ve.jsx)(Ut.Provider, {
            value: w,
            children: (0, Ve.jsx)(Ht, {
              elementsRef: y,
              children: Xt(n, R)
            })
          })
        }),
        Jt = r.forwardRef(function(e, t) {
          const {
            render: n,
            ...o
          } = e, i = n && "function" != typeof n ? n.props : {}, {
            activeIndex: u,
            onNavigate: l
          } = r.useContext(Ut), {
            ref: c,
            index: s
          } = _t(), a = Ft([c, t, i.ref]), f = u === s;
          return Xt(n, {
            ...o,
            ...i,
            ref: a,
            tabIndex: f ? 0 : -1,
            "data-active": f ? "" : void 0,
            onFocus(e) {
              null == o.onFocus || o.onFocus(e), null == i.onFocus || i.onFocus(e), l(s)
            }
          })
        }),
        en = {
          ...o
        };
      let tn = !1,
        nn = 0;
      const rn = () => "floating-ui-" + Math.random().toString(36).slice(2, 6) + nn++,
        on = en.useId || function() {
          const [e, t] = r.useState(() => tn ? rn() : void 0);
          return ke(() => {
            null == e && t(rn())
          }, []), r.useEffect(() => {
            tn = !0
          }, []), e
        },
        un = r.forwardRef(function(e, t) {
          const {
            context: {
              placement: n,
              elements: {
                floating: o
              },
              middlewareData: {
                arrow: i,
                shift: u
              }
            },
            width: l = 14,
            height: c = 7,
            tipRadius: s = 0,
            strokeWidth: a = 0,
            staticOffset: f,
            stroke: d,
            d: m,
            style: {
              transform: p,
              ...v
            } = {},
            ...g
          } = e, h = on(), [y, b] = r.useState(!1);
          if (ke(() => {
              o && "rtl" === E(o).direction && b(!0)
            }, [o]), !o) return null;
          const [w, x] = n.split("-"), R = "top" === w || "bottom" === w;
          let k = f;
          (R && null != u && u.x || !R && null != u && u.y) && (k = null);
          const I = 2 * a,
            M = I / 2,
            C = l / 2 * (s / -8 + 1),
            T = c / 2 * s / 4,
            L = !!m,
            P = k && "end" === x ? "bottom" : "top";
          let O = k && "end" === x ? "right" : "left";
          k && y && (O = "end" === x ? "left" : "right");
          const A = null != (null == i ? void 0 : i.x) ? k || i.x : "",
            S = null != (null == i ? void 0 : i.y) ? k || i.y : "",
            D = m || "M0,0 H" + l + " L" + (l - C) + "," + (c - T) + " Q" + l / 2 + "," + c + " " + C + "," + (c - T) + " Z",
            F = {
              top: L ? "rotate(180deg)" : "",
              left: L ? "rotate(90deg)" : "rotate(-90deg)",
              bottom: L ? "" : "rotate(180deg)",
              right: L ? "rotate(-90deg)" : "rotate(90deg)"
            } [w];
          return (0, Ve.jsxs)("svg", {
            ...g,
            "aria-hidden": !0,
            ref: t,
            width: L ? l : l + I,
            height: l,
            viewBox: "0 0 " + l + " " + (c > l ? c : l),
            style: {
              position: "absolute",
              pointerEvents: "none",
              [O]: A,
              [P]: S,
              [w]: R || L ? "100%" : "calc(100% - " + I / 2 + "px)",
              transform: [F, p].filter(e => !!e).join(" "),
              ...v
            },
            children: [I > 0 && (0, Ve.jsx)("path", {
              clipPath: "url(#" + h + ")",
              fill: "none",
              stroke: d,
              strokeWidth: I + (m ? 0 : 1),
              d: D
            }), (0, Ve.jsx)("path", {
              stroke: I && !m ? g.fill : "none",
              d: D
            }), (0, Ve.jsx)("clipPath", {
              id: h,
              children: (0, Ve.jsx)("rect", {
                x: -M,
                y: M * (L ? -1 : 1),
                width: l + I,
                height: l
              })
            })]
          })
        });

      function ln() {
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
      const cn = r.createContext(null),
        sn = r.createContext(null),
        an = () => {
          var e;
          return (null == (e = r.useContext(cn)) ? void 0 : e.id) || null
        },
        fn = () => r.useContext(sn);

      function dn(e) {
        const t = on(),
          n = fn(),
          r = an(),
          o = e || r;
        return ke(() => {
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

      function mn(e) {
        const {
          children: t,
          id: n
        } = e, o = an();
        return (0, Ve.jsx)(cn.Provider, {
          value: r.useMemo(() => ({
            id: n,
            parentId: o
          }), [n, o]),
          children: t
        })
      }

      function pn(e) {
        const {
          children: t
        } = e, n = r.useRef([]), o = r.useCallback(e => {
          n.current = [...n.current, e]
        }, []), i = r.useCallback(e => {
          n.current = n.current.filter(t => t !== e)
        }, []), [u] = r.useState(() => ln());
        return (0, Ve.jsx)(sn.Provider, {
          value: r.useMemo(() => ({
            nodesRef: n,
            addNode: o,
            removeNode: i,
            events: u
          }), [o, i, u]),
          children: t
        })
      }

      function vn(e) {
        return "data-floating-ui-" + e
      }

      function gn(e) {
        -1 !== e.current && (clearTimeout(e.current), e.current = -1)
      }
      const hn = vn("safe-polygon");

      function yn(e, t, n) {
        if (n && !Ee(n)) return 0;
        if ("number" == typeof e) return e;
        if ("function" == typeof e) {
          const n = e();
          return "number" == typeof n ? n : null == n ? void 0 : n[t]
        }
        return null == e ? void 0 : e[t]
      }

      function bn(e) {
        return "function" == typeof e ? e() : e
      }

      function wn(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          dataRef: i,
          events: u,
          elements: l
        } = e, {
          enabled: c = !0,
          delay: s = 0,
          handleClose: f = null,
          mouseOnly: d = !1,
          restMs: m = 0,
          move: p = !0
        } = t, v = fn(), g = an(), h = Ie(f), y = Ie(s), b = Ie(n), w = Ie(m), x = r.useRef(), R = r.useRef(-1), E = r.useRef(), k = r.useRef(-1), I = r.useRef(!0), M = r.useRef(!1), C = r.useRef(() => {}), T = r.useRef(!1), L = Ce(() => {
          var e;
          const t = null == (e = i.current.openEvent) ? void 0 : e.type;
          return (null == t ? void 0 : t.includes("mouse")) && "mousedown" !== t
        });
        r.useEffect(() => {
          if (c) return u.on("openchange", e), () => {
            u.off("openchange", e)
          };

          function e(e) {
            let {
              open: t
            } = e;
            t || (gn(R), gn(k), I.current = !0, T.current = !1)
          }
        }, [c, u]), r.useEffect(() => {
          if (!c) return;
          if (!h.current) return;
          if (!n) return;

          function e(e) {
            L() && o(!1, e, "hover")
          }
          const t = pe(l.floating).documentElement;
          return t.addEventListener("mouseleave", e), () => {
            t.removeEventListener("mouseleave", e)
          }
        }, [l.floating, n, o, c, h, L]);
        const P = r.useCallback(function(e, t, n) {
            void 0 === t && (t = !0), void 0 === n && (n = "hover");
            const r = yn(y.current, "close", x.current);
            r && !E.current ? (gn(R), R.current = window.setTimeout(() => o(!1, e, n), r)) : t && (gn(R), o(!1, e, n))
          }, [y, o]),
          O = Ce(() => {
            C.current(), E.current = void 0
          }),
          A = Ce(() => {
            if (M.current) {
              const e = pe(l.floating).body;
              e.style.pointerEvents = "", e.removeAttribute(hn), M.current = !1
            }
          }),
          S = Ce(() => !!i.current.openEvent && ["click", "mousedown"].includes(i.current.openEvent.type));
        r.useEffect(() => {
          if (c && a(l.domReference)) {
            const o = l.domReference,
              i = l.floating;
            return n && o.addEventListener("mouseleave", r), p && o.addEventListener("mousemove", e, {
              once: !0
            }), o.addEventListener("mouseenter", e), o.addEventListener("mouseleave", t), i && (i.addEventListener("mouseleave", r), i.addEventListener("mouseenter", u), i.addEventListener("mouseleave", s)), () => {
              n && o.removeEventListener("mouseleave", r), p && o.removeEventListener("mousemove", e), o.removeEventListener("mouseenter", e), o.removeEventListener("mouseleave", t), i && (i.removeEventListener("mouseleave", r), i.removeEventListener("mouseenter", u), i.removeEventListener("mouseleave", s))
            }
          }

          function e(e) {
            if (gn(R), I.current = !1, d && !Ee(x.current) || bn(w.current) > 0 && !yn(y.current, "open")) return;
            const t = yn(y.current, "open", x.current);
            t ? R.current = window.setTimeout(() => {
              b.current || o(!0, e, "hover")
            }, t) : n || o(!0, e, "hover")
          }

          function t(e) {
            if (S()) return void A();
            C.current();
            const t = pe(l.floating);
            if (gn(k), T.current = !1, h.current && i.current.floatingContext) {
              n || gn(R), E.current = h.current({
                ...i.current.floatingContext,
                tree: v,
                x: e.clientX,
                y: e.clientY,
                onClose() {
                  A(), O(), S() || P(e, !0, "safe-polygon")
                }
              });
              const r = E.current;
              return t.addEventListener("mousemove", r), void(C.current = () => {
                t.removeEventListener("mousemove", r)
              })
            }("touch" !== x.current || !fe(l.floating, e.relatedTarget)) && P(e)
          }

          function r(e) {
            S() || i.current.floatingContext && (null == h.current || h.current({
              ...i.current.floatingContext,
              tree: v,
              x: e.clientX,
              y: e.clientY,
              onClose() {
                A(), O(), S() || P(e)
              }
            })(e))
          }

          function u() {
            gn(R)
          }

          function s(e) {
            S() || P(e, !1)
          }
        }, [l, c, e, d, p, P, O, A, o, n, b, v, y, h, i, S, w]), ke(() => {
          var e;
          if (c && n && null != (e = h.current) && null != (e = e.__options) && e.blockPointerEvents && L()) {
            M.current = !0;
            const e = l.floating;
            if (a(l.domReference) && e) {
              var t;
              const n = pe(l.floating).body;
              n.setAttribute(hn, "");
              const r = l.domReference,
                o = null == v || null == (t = v.nodesRef.current.find(e => e.id === g)) || null == (t = t.context) ? void 0 : t.elements.floating;
              return o && (o.style.pointerEvents = ""), n.style.pointerEvents = "none", r.style.pointerEvents = "auto", e.style.pointerEvents = "auto", () => {
                n.style.pointerEvents = "", r.style.pointerEvents = "", e.style.pointerEvents = ""
              }
            }
          }
        }, [c, n, g, l, v, h, L]), ke(() => {
          n || (x.current = void 0, T.current = !1, O(), A())
        }, [n, O, A]), r.useEffect(() => () => {
          O(), gn(R), gn(k), A()
        }, [c, l.domReference, O, A]);
        const D = r.useMemo(() => {
          function e(e) {
            x.current = e.pointerType
          }
          return {
            onPointerDown: e,
            onPointerEnter: e,
            onMouseMove(e) {
              const {
                nativeEvent: t
              } = e;

              function r() {
                I.current || b.current || o(!0, t, "hover")
              }
              d && !Ee(x.current) || n || 0 === bn(w.current) || T.current && e.movementX ** 2 + e.movementY ** 2 < 2 || (gn(k), "touch" === x.current ? r() : (T.current = !0, k.current = window.setTimeout(r, bn(w.current))))
            }
          }
        }, [d, o, n, b, w]);
        return r.useMemo(() => c ? {
          reference: D
        } : {}, [c, D])
      }
      const xn = () => {},
        Rn = r.createContext({
          delay: 0,
          initialDelay: 0,
          timeoutMs: 0,
          currentId: null,
          setCurrentId: xn,
          setState: xn,
          isInstantPhase: !1
        }),
        En = () => r.useContext(Rn);

      function kn(e) {
        const {
          children: t,
          delay: n,
          timeoutMs: o = 0
        } = e, [i, u] = r.useReducer((e, t) => ({
          ...e,
          ...t
        }), {
          delay: n,
          timeoutMs: o,
          initialDelay: n,
          currentId: null,
          isInstantPhase: !1
        }), l = r.useRef(null), c = r.useCallback(e => {
          u({
            currentId: e
          })
        }, []);
        return ke(() => {
          i.currentId ? null === l.current ? l.current = i.currentId : i.isInstantPhase || u({
            isInstantPhase: !0
          }) : (i.isInstantPhase && u({
            isInstantPhase: !1
          }), l.current = null)
        }, [i.currentId, i.isInstantPhase]), (0, Ve.jsx)(Rn.Provider, {
          value: r.useMemo(() => ({
            ...i,
            setState: u,
            setCurrentId: c
          }), [i, c]),
          children: t
        })
      }

      function In(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: r,
          floatingId: o
        } = e, {
          id: i,
          enabled: u = !0
        } = t, l = null != i ? i : o, c = En(), {
          currentId: s,
          setCurrentId: a,
          initialDelay: f,
          setState: d,
          timeoutMs: m
        } = c;
        return ke(() => {
          u && s && (d({
            delay: {
              open: 1,
              close: yn(f, "close")
            }
          }), s !== l && r(!1))
        }, [u, l, r, d, s, f]), ke(() => {
          function e() {
            r(!1), d({
              delay: f,
              currentId: null
            })
          }
          if (u && s && !n && s === l) {
            if (m) {
              const t = window.setTimeout(e, m);
              return () => {
                clearTimeout(t)
              }
            }
            e()
          }
        }, [u, n, d, s, l, r, f, m]), ke(() => {
          u && a !== xn && n && a(l)
        }, [u, n, a, l]), c
      }
      const Mn = r.createContext({
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

      function Cn(e) {
        const {
          children: t,
          delay: n,
          timeoutMs: o = 0
        } = e, i = r.useRef(n), u = r.useRef(n), l = r.useRef(null), c = r.useRef(null), s = r.useRef(-1);
        return (0, Ve.jsx)(Mn.Provider, {
          value: r.useMemo(() => ({
            hasProvider: !0,
            delayRef: i,
            initialDelayRef: u,
            currentIdRef: l,
            timeoutMs: o,
            currentContextRef: c,
            timeoutIdRef: s
          }), [o]),
          children: t
        })
      }

      function Tn(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          floatingId: i
        } = e, {
          enabled: u = !0
        } = t, l = r.useContext(Mn), {
          currentIdRef: c,
          delayRef: s,
          timeoutMs: a,
          initialDelayRef: f,
          currentContextRef: d,
          hasProvider: m,
          timeoutIdRef: p
        } = l, [v, g] = r.useState(!1);
        return ke(() => {
          function e() {
            var e;
            g(!1), null == (e = d.current) || e.setIsInstantPhase(!1), c.current = null, d.current = null, s.current = f.current
          }
          if (u && c.current && !n && c.current === i) {
            if (g(!1), a) return p.current = window.setTimeout(e, a), () => {
              clearTimeout(p.current)
            };
            e()
          }
        }, [u, n, i, c, s, a, f, d, p]), ke(() => {
          if (!u) return;
          if (!n) return;
          const e = d.current,
            t = c.current;
          d.current = {
            onOpenChange: o,
            setIsInstantPhase: g
          }, c.current = i, s.current = {
            open: 0,
            close: yn(f.current, "close")
          }, null !== t && t !== i ? (gn(p), g(!0), null == e || e.setIsInstantPhase(!0), null == e || e.onOpenChange(!1)) : (g(!1), null == e || e.setIsInstantPhase(!1))
        }, [u, n, i, o, c, s, a, f, d, p]), ke(() => () => {
          d.current = null
        }, [d]), r.useMemo(() => ({
          hasProvider: m,
          delayRef: s,
          isInstantPhase: v
        }), [m, s, v])
      }
      let Ln = 0;

      function Pn(e, t) {
        void 0 === t && (t = {});
        const {
          preventScroll: n = !1,
          cancelPrevious: r = !0,
          sync: o = !1
        } = t;
        r && cancelAnimationFrame(Ln);
        const i = () => null == e ? void 0 : e.focus({
          preventScroll: n
        });
        o ? i() : Ln = requestAnimationFrame(i)
      }

      function On(e, t) {
        if (!e || !t) return !1;
        const n = null == t.getRootNode ? void 0 : t.getRootNode();
        if (e.contains(t)) return !0;
        if (n && d(n)) {
          let n = t;
          for (; n;) {
            if (e === n) return !0;
            n = n.parentNode || n.host
          }
        }
        return !1
      }
      const An = {
        inert: new WeakMap,
        "aria-hidden": new WeakMap,
        none: new WeakMap
      };

      function Sn(e) {
        return "inert" === e ? An.inert : "aria-hidden" === e ? An["aria-hidden"] : An.none
      }
      let Dn = new WeakSet,
        Fn = {},
        Nn = 0;

      function jn(e) {
        return e ? d(e) ? e.host : jn(e.parentNode) : null
      }
      const Hn = (e, t) => t.map(t => {
        if (e.contains(t)) return t;
        const n = jn(t);
        return e.contains(n) ? n : null
      }).filter(e => null != e);

      function _n(e, t, n) {
        void 0 === t && (t = !1), void 0 === n && (n = !1);
        const r = (o = e[0], (null == o ? void 0 : o.ownerDocument) || document).body;
        var o;
        return function(e, t, n, r) {
          const o = "data-floating-ui-inert",
            i = r ? "inert" : n ? "aria-hidden" : null,
            l = Hn(t, e),
            c = new Set,
            s = new Set(l),
            a = [];
          Fn[o] || (Fn[o] = new WeakMap);
          const f = Fn[o];
          return l.forEach(function e(t) {
              t && !c.has(t) && (c.add(t), t.parentNode && e(t.parentNode))
            }),
            function e(t) {
              t && !s.has(t) && [].forEach.call(t.children, t => {
                if ("script" !== u(t))
                  if (c.has(t)) e(t);
                  else {
                    const e = i ? t.getAttribute(i) : null,
                      n = null !== e && "false" !== e,
                      r = Sn(i),
                      u = (r.get(t) || 0) + 1,
                      l = (f.get(t) || 0) + 1;
                    r.set(t, u), f.set(t, l), a.push(t), 1 === u && n && Dn.add(t), 1 === l && t.setAttribute(o, ""), !n && i && t.setAttribute(i, "inert" === i ? "" : "true")
                  }
              })
            }(t), c.clear(), Nn++, () => {
              a.forEach(e => {
                const t = Sn(i),
                  n = (t.get(e) || 0) - 1,
                  r = (f.get(e) || 0) - 1;
                t.set(e, n), f.set(e, r), n || (!Dn.has(e) && i && e.removeAttribute(i), Dn.delete(e)), r || e.removeAttribute(o)
              }), Nn--, Nn || (An.inert = new WeakMap, An["aria-hidden"] = new WeakMap, An.none = new WeakMap, Dn = new WeakSet, Fn = {})
            }
        }(e.concat(Array.from(r.querySelectorAll('[aria-live],[role="status"],output'))), r, t, n)
      }
      const Wn = {
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
        Kn = r.forwardRef(function(e, t) {
          const [n, o] = r.useState();
          ke(() => {
            oe() && o("button")
          }, []);
          const i = {
            ref: t,
            tabIndex: 0,
            role: n,
            "aria-hidden": !n || void 0,
            [vn("focus-guard")]: "",
            style: Wn
          };
          return (0, Ve.jsx)("span", {
            ...e,
            ...i
          })
        }),
        Bn = {
          clipPath: "inset(50%)",
          position: "fixed",
          top: 0,
          left: 0
        },
        qn = r.createContext(null),
        zn = vn("portal");

      function Vn(e) {
        void 0 === e && (e = {});
        const {
          id: t,
          root: n
        } = e, o = on(), i = Xn(), [u, l] = r.useState(null), c = r.useRef(null);
        return ke(() => () => {
          null == u || u.remove(), queueMicrotask(() => {
            c.current = null
          })
        }, [u]), ke(() => {
          if (!o) return;
          if (c.current) return;
          const e = t ? document.getElementById(t) : null;
          if (!e) return;
          const n = document.createElement("div");
          n.id = o, n.setAttribute(zn, ""), e.appendChild(n), c.current = n, l(n)
        }, [t, o]), ke(() => {
          if (null === n) return;
          if (!o) return;
          if (c.current) return;
          let e = n || (null == i ? void 0 : i.portalNode);
          e && !s(e) && (e = e.current), e = e || document.body;
          let r = null;
          t && (r = document.createElement("div"), r.id = t, e.appendChild(r));
          const u = document.createElement("div");
          u.id = o, u.setAttribute(zn, ""), e = r || e, e.appendChild(u), c.current = u, l(u)
        }, [t, n, o, i]), u
      }

      function Yn(e) {
        const {
          children: t,
          id: n,
          root: o,
          preserveTabOrder: i = !0
        } = e, u = Vn({
          id: n,
          root: o
        }), [l, c] = r.useState(null), s = r.useRef(null), a = r.useRef(null), f = r.useRef(null), d = r.useRef(null), m = null == l ? void 0 : l.modal, p = null == l ? void 0 : l.open, v = !!l && !l.modal && l.open && i && !(!o && !u);
        return r.useEffect(() => {
          if (u && i && !m) return u.addEventListener("focusin", e, !0), u.addEventListener("focusout", e, !0), () => {
            u.removeEventListener("focusin", e, !0), u.removeEventListener("focusout", e, !0)
          };

          function e(e) {
            u && Be(e) && ("focusin" === e.type ? ze : qe)(u)
          }
        }, [u, i, m]), r.useEffect(() => {
          u && (p || ze(u))
        }, [p, u]), (0, Ve.jsxs)(qn.Provider, {
          value: r.useMemo(() => ({
            preserveTabOrder: i,
            beforeOutsideRef: s,
            afterOutsideRef: a,
            beforeInsideRef: f,
            afterInsideRef: d,
            portalNode: u,
            setFocusManagerState: c
          }), [i, u]),
          children: [v && u && (0, Ve.jsx)(Kn, {
            "data-type": "outside",
            ref: s,
            onFocus: e => {
              if (Be(e, u)) {
                var t;
                null == (t = f.current) || t.focus()
              } else {
                const e = Ke(l ? l.domReference : null);
                null == e || e.focus()
              }
            }
          }), v && u && (0, Ve.jsx)("span", {
            "aria-owns": u.id,
            style: Bn
          }), u && Ye.createPortal(t, u), v && u && (0, Ve.jsx)(Kn, {
            "data-type": "outside",
            ref: a,
            onFocus: e => {
              if (Be(e, u)) {
                var t;
                null == (t = d.current) || t.focus()
              } else {
                const t = We(l ? l.domReference : null);
                null == t || t.focus(), (null == l ? void 0 : l.closeOnFocusOut) && (null == l || l.onOpenChange(!1, e.nativeEvent, "focus-out"))
              }
            }
          })]
        })
      }
      const Xn = () => r.useContext(qn);

      function Un(e) {
        return r.useMemo(() => t => {
          e.forEach(e => {
            e && (e.current = t)
          })
        }, e)
      }
      let Gn = [];

      function $n() {
        Gn = Gn.filter(e => {
          var t;
          return null == (t = e.deref()) ? void 0 : t.isConnected
        })
      }

      function Zn() {
        $n();
        const e = Gn[Gn.length - 1];
        return null == e ? void 0 : e.deref()
      }

      function Qn(e, t) {
        var n;
        if (!(t.current.includes("floating") || null != (n = e.getAttribute("role")) && n.includes("dialog"))) return;
        const r = He(),
          o = (0, te.focusable)(e, r).filter(e => {
            const t = e.getAttribute("data-tabindex") || "";
            return (0, te.isTabbable)(e, r) || e.hasAttribute("data-tabindex") && !t.startsWith("-")
          }),
          i = e.getAttribute("tabindex");
        t.current.includes("floating") || 0 === o.length ? "0" !== i && e.setAttribute("tabindex", "0") : ("-1" !== i || e.hasAttribute("data-tabindex") && "-1" !== e.getAttribute("data-tabindex")) && (e.setAttribute("tabindex", "-1"), e.setAttribute("data-tabindex", "-1"))
      }
      const Jn = r.forwardRef(function(e, t) {
        return (0, Ve.jsx)("button", {
          ...e,
          type: "button",
          ref: t,
          tabIndex: -1,
          style: Wn
        })
      });

      function er(e) {
        const {
          context: t,
          children: n,
          disabled: o = !1,
          order: i = ["content"],
          guards: l = !0,
          initialFocus: c = 0,
          returnFocus: s = !0,
          restoreFocus: a = !1,
          modal: d = !0,
          visuallyHiddenDismiss: m = !1,
          closeOnFocusOut: p = !0,
          outsideElementsInert: v = !1,
          getInsideElements: g = () => []
        } = e, {
          open: h,
          onOpenChange: y,
          events: b,
          dataRef: w,
          elements: {
            domReference: x,
            floating: R
          }
        } = t, E = Ce(() => {
          var e;
          return null == (e = w.current.floatingContext) ? void 0 : e.nodeId
        }), k = Ce(g), I = "number" == typeof c && c < 0, M = ge(x) && I, C = "undefined" != typeof HTMLElement && "inert" in HTMLElement.prototype, T = !C || l, L = !T || C && v, P = Ie(i), O = Ie(c), A = Ie(s), S = fn(), D = Xn(), F = r.useRef(null), N = r.useRef(null), j = r.useRef(!1), H = r.useRef(!1), _ = r.useRef(-1), W = r.useRef(-1), K = null != D, B = he(R), q = Ce(function(e) {
          return void 0 === e && (e = B), e ? (0, te.tabbable)(e, He()) : []
        }), z = Ce(e => {
          const t = q(e);
          return P.current.map(e => x && "reference" === e ? x : B && "floating" === e ? B : t).filter(Boolean).flat()
        });
        r.useEffect(() => {
          if (o) return;
          if (!d) return;

          function e(e) {
            if ("Tab" === e.key) {
              fe(B, ae(pe(B))) && 0 === q().length && !M && we(e);
              const t = z(),
                n = de(e);
              "reference" === P.current[0] && n === x && (we(e), e.shiftKey ? Pn(t[t.length - 1]) : Pn(t[1])), "floating" === P.current[1] && n === B && e.shiftKey && (we(e), Pn(t[0]))
            }
          }
          const t = pe(B);
          return t.addEventListener("keydown", e), () => {
            t.removeEventListener("keydown", e)
          }
        }, [o, x, B, d, P, M, q, z]), r.useEffect(() => {
          if (!o && R) return R.addEventListener("focusin", e), () => {
            R.removeEventListener("focusin", e)
          };

          function e(e) {
            const t = de(e),
              n = q().indexOf(t); - 1 !== n && (_.current = n)
          }
        }, [o, R, q]), r.useEffect(() => {
          if (o) return;
          if (!p) return;

          function e() {
            H.current = !0, setTimeout(() => {
              H.current = !1
            })
          }

          function t(e) {
            const t = e.relatedTarget,
              n = e.currentTarget,
              r = de(e);
            queueMicrotask(() => {
              const o = E(),
                i = !(fe(x, t) || fe(R, t) || fe(t, R) || fe(null == D ? void 0 : D.portalNode, t) || null != t && t.hasAttribute(vn("focus-guard")) || S && (ye(S.nodesRef.current, o).find(e => {
                  var n, r;
                  return fe(null == (n = e.context) ? void 0 : n.elements.floating, t) || fe(null == (r = e.context) ? void 0 : r.elements.domReference, t)
                }) || be(S.nodesRef.current, o).find(e => {
                  var n, r, o;
                  return [null == (n = e.context) ? void 0 : n.elements.floating, he(null == (r = e.context) ? void 0 : r.elements.floating)].includes(t) || (null == (o = e.context) ? void 0 : o.elements.domReference) === t
                })));
              if (n === x && B && Qn(B, P), a && n !== x && (null == r || !r.isConnected) && ae(pe(B)) === pe(B).body) {
                f(B) && B.focus();
                const e = _.current,
                  t = q(),
                  n = t[e] || t[t.length - 1] || B;
                f(n) && n.focus()
              }
              w.current.insideReactTree ? w.current.insideReactTree = !1 : !M && d || !t || !i || H.current || t === Zn() || (j.current = !0, y(!1, e, "focus-out"))
            })
          }
          const n = Boolean(!S && D);

          function r() {
            gn(W), w.current.insideReactTree = !0, W.current = window.setTimeout(() => {
              w.current.insideReactTree = !1
            })
          }
          return R && f(x) ? (x.addEventListener("focusout", t), x.addEventListener("pointerdown", e), R.addEventListener("focusout", t), n && R.addEventListener("focusout", r, !0), () => {
            x.removeEventListener("focusout", t), x.removeEventListener("pointerdown", e), R.removeEventListener("focusout", t), n && R.removeEventListener("focusout", r, !0)
          }) : void 0
        }, [o, x, R, B, d, S, D, y, p, a, q, M, E, P, w]);
        const V = r.useRef(null),
          Y = r.useRef(null),
          X = Un([V, null == D ? void 0 : D.beforeInsideRef]),
          U = Un([Y, null == D ? void 0 : D.afterInsideRef]);

        function G(e) {
          return !o && m && d ? (0, Ve.jsx)(Jn, {
            ref: "start" === e ? F : N,
            onClick: e => y(!1, e.nativeEvent),
            children: "string" == typeof m ? m : "Dismiss"
          }) : null
        }
        r.useEffect(() => {
          var e, t;
          if (o) return;
          if (!R) return;
          const n = Array.from((null == D || null == (e = D.portalNode) ? void 0 : e.querySelectorAll("[" + vn("portal") + "]")) || []),
            r = null == (t = (S ? be(S.nodesRef.current, E()) : []).find(e => {
              var t;
              return ge((null == (t = e.context) ? void 0 : t.elements.domReference) || null)
            })) || null == (t = t.context) ? void 0 : t.elements.domReference,
            i = [R, r, ...n, ...k(), F.current, N.current, V.current, Y.current, null == D ? void 0 : D.beforeOutsideRef.current, null == D ? void 0 : D.afterOutsideRef.current, P.current.includes("reference") || M ? x : null].filter(e => null != e),
            u = d || M ? _n(i, !L, L) : _n(i);
          return () => {
            u()
          }
        }, [o, x, R, d, P, D, M, T, L, S, E, k]), ke(() => {
          if (o || !f(B)) return;
          const e = ae(pe(B));
          queueMicrotask(() => {
            const t = z(B),
              n = O.current,
              r = ("number" == typeof n ? t[n] : n.current) || B,
              o = fe(B, e);
            I || o || !h || Pn(r, {
              preventScroll: r === B
            })
          })
        }, [o, h, B, I, z, O]), ke(() => {
          if (o || !B) return;
          const e = pe(B);
          var t;

          function n(e) {
            let {
              reason: t,
              event: n,
              nested: r
            } = e;
            if (["hover", "safe-polygon"].includes(t) && "mouseleave" === n.type && (j.current = !0), "outside-press" === t)
              if (r) j.current = !1;
              else if (xe(n) || Re(n)) j.current = !1;
            else {
              let e = !1;
              document.createElement("div").focus({
                get preventScroll() {
                  return e = !0, !1
                }
              }), j.current = !e
            }
          }
          t = ae(e), $n(), t && "body" !== u(t) && (Gn.push(new WeakRef(t)), Gn.length > 20 && (Gn = Gn.slice(-20))), b.on("openchange", n);
          const r = e.createElement("span");
          return r.setAttribute("tabindex", "-1"), r.setAttribute("aria-hidden", "true"), Object.assign(r.style, Wn), K && x && x.insertAdjacentElement("afterend", r), () => {
            b.off("openchange", n);
            const t = ae(e),
              o = fe(R, t) || S && ye(S.nodesRef.current, E(), !1).some(e => {
                var n;
                return fe(null == (n = e.context) ? void 0 : n.elements.floating, t)
              }),
              i = function() {
                if ("boolean" == typeof A.current) {
                  const e = x || Zn();
                  return e && e.isConnected ? e : r
                }
                return A.current.current || r
              }();
            queueMicrotask(() => {
              const n = function(e) {
                const t = He();
                return (0, te.isTabbable)(e, t) ? e : (0, te.tabbable)(e, t)[0] || e
              }(i);
              A.current && !j.current && f(n) && (n === t || t === e.body || o) && n.focus({
                preventScroll: !0
              }), r.remove()
            })
          }
        }, [o, R, B, A, w, b, S, K, x, E]), r.useEffect(() => (queueMicrotask(() => {
          j.current = !1
        }), () => {
          queueMicrotask($n)
        }), [o]), ke(() => {
          if (!o && D) return D.setFocusManagerState({
            modal: d,
            closeOnFocusOut: p,
            open: h,
            onOpenChange: y,
            domReference: x
          }), () => {
            D.setFocusManagerState(null)
          }
        }, [o, D, d, h, y, p, x]), ke(() => {
          o || B && Qn(B, P)
        }, [o, B, P]);
        const $ = !o && T && (!d || !M) && (K || d);
        return (0, Ve.jsxs)(Ve.Fragment, {
          children: [$ && (0, Ve.jsx)(Kn, {
            "data-type": "inside",
            ref: X,
            onFocus: e => {
              if (d) {
                const e = z();
                Pn("reference" === i[0] ? e[0] : e[e.length - 1])
              } else if (null != D && D.preserveTabOrder && D.portalNode)
                if (j.current = !1, Be(e, D.portalNode)) {
                  const e = We(x);
                  null == e || e.focus()
                } else {
                  var t;
                  null == (t = D.beforeOutsideRef.current) || t.focus()
                }
            }
          }), !M && G("start"), n, G("end"), $ && (0, Ve.jsx)(Kn, {
            "data-type": "inside",
            ref: U,
            onFocus: e => {
              if (d) Pn(z()[0]);
              else if (null != D && D.preserveTabOrder && D.portalNode)
                if (p && (j.current = !0), Be(e, D.portalNode)) {
                  const e = Ke(x);
                  null == e || e.focus()
                } else {
                  var t;
                  null == (t = D.afterOutsideRef.current) || t.focus()
                }
            }
          })]
        })
      }
      let tr = 0;
      const nr = "--floating-ui-scrollbar-width";
      let rr = () => {};
      const or = r.forwardRef(function(e, t) {
        const {
          lockScroll: n = !1,
          ...r
        } = e;
        return ke(() => {
          if (n) return tr++, 1 === tr && (rr = function() {
            const e = ne(),
              t = /iP(hone|ad|od)|iOS/.test(e) || "MacIntel" === e && navigator.maxTouchPoints > 1,
              n = document.body.style,
              r = Math.round(document.documentElement.getBoundingClientRect().left) + document.documentElement.scrollLeft ? "paddingLeft" : "paddingRight",
              o = window.innerWidth - document.documentElement.clientWidth,
              i = n.left ? parseFloat(n.left) : window.scrollX,
              u = n.top ? parseFloat(n.top) : window.scrollY;
            if (n.overflow = "hidden", n.setProperty(nr, o + "px"), o && (n[r] = o + "px"), t) {
              var l, c;
              const e = (null == (l = window.visualViewport) ? void 0 : l.offsetLeft) || 0,
                t = (null == (c = window.visualViewport) ? void 0 : c.offsetTop) || 0;
              Object.assign(n, {
                position: "fixed",
                top: -(u - Math.floor(t)) + "px",
                left: -(i - Math.floor(e)) + "px",
                right: "0"
              })
            }
            return () => {
              Object.assign(n, {
                overflow: "",
                [r]: ""
              }), n.removeProperty(nr), t && (Object.assign(n, {
                position: "",
                top: "",
                left: "",
                right: ""
              }), window.scrollTo(i, u))
            }
          }()), () => {
            tr--, 0 === tr && rr()
          }
        }, [n]), (0, Ve.jsx)("div", {
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

      function ir(e) {
        return f(e.target) && "BUTTON" === e.target.tagName
      }

      function ur(e) {
        return ve(e)
      }

      function lr(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          dataRef: i,
          elements: {
            domReference: u
          }
        } = e, {
          enabled: l = !0,
          event: c = "click",
          toggle: s = !0,
          ignoreMouse: a = !1,
          keyboardHandlers: d = !0,
          stickIfOpen: m = !0
        } = t, p = r.useRef(), v = r.useRef(!1), g = r.useMemo(() => ({
          onPointerDown(e) {
            p.current = e.pointerType
          },
          onMouseDown(e) {
            const t = p.current;
            0 === e.button && "click" !== c && (Ee(t, !0) && a || (!n || !s || i.current.openEvent && m && "mousedown" !== i.current.openEvent.type ? (e.preventDefault(), o(!0, e.nativeEvent, "click")) : o(!1, e.nativeEvent, "click")))
          },
          onClick(e) {
            const t = p.current;
            "mousedown" === c && p.current ? p.current = void 0 : Ee(t, !0) && a || (!n || !s || i.current.openEvent && m && "click" !== i.current.openEvent.type ? o(!0, e.nativeEvent, "click") : o(!1, e.nativeEvent, "click"))
          },
          onKeyDown(e) {
            p.current = void 0, e.defaultPrevented || !d || ir(e) || (" " !== e.key || ur(u) || (e.preventDefault(), v.current = !0), function(e) {
              return f(e.target) && "A" === e.target.tagName
            }(e) || "Enter" === e.key && o(!n || !s, e.nativeEvent, "click"))
          },
          onKeyUp(e) {
            e.defaultPrevented || !d || ir(e) || ur(u) || " " === e.key && v.current && (v.current = !1, o(!n || !s, e.nativeEvent, "click"))
          }
        }), [i, u, c, a, d, o, n, m, s]);
        return r.useMemo(() => l ? {
          reference: g
        } : {}, [l, g])
      }

      function cr(e) {
        return null != e && null != e.clientX
      }

      function sr(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          dataRef: o,
          elements: {
            floating: i,
            domReference: u
          },
          refs: c
        } = e, {
          enabled: s = !0,
          axis: a = "both",
          x: f = null,
          y: d = null
        } = t, m = r.useRef(!1), p = r.useRef(null), [v, g] = r.useState(), [h, y] = r.useState([]), b = Ce((e, t) => {
          m.current || o.current.openEvent && !cr(o.current.openEvent) || c.setPositionReference(function(e, t) {
            let n = null,
              r = null,
              o = !1;
            return {
              contextElement: e || void 0,
              getBoundingClientRect() {
                var i;
                const u = (null == e ? void 0 : e.getBoundingClientRect()) || {
                    width: 0,
                    height: 0,
                    x: 0,
                    y: 0
                  },
                  l = "x" === t.axis || "both" === t.axis,
                  c = "y" === t.axis || "both" === t.axis,
                  s = ["mouseenter", "mousemove"].includes((null == (i = t.dataRef.current.openEvent) ? void 0 : i.type) || "") && "touch" !== t.pointerType;
                let a = u.width,
                  f = u.height,
                  d = u.x,
                  m = u.y;
                return null == n && t.x && l && (n = u.x - t.x), null == r && t.y && c && (r = u.y - t.y), d -= n || 0, m -= r || 0, a = 0, f = 0, !o || s ? (a = "y" === t.axis ? u.width : 0, f = "x" === t.axis ? u.height : 0, d = l && null != t.x ? t.x : d, m = c && null != t.y ? t.y : m) : o && !s && (f = "x" === t.axis ? u.height : f, a = "y" === t.axis ? u.width : a), o = !0, {
                  width: a,
                  height: f,
                  x: d,
                  y: m,
                  top: m,
                  right: d + a,
                  bottom: m + f,
                  left: d
                }
              }
            }
          }(u, {
            x: e,
            y: t,
            axis: a,
            dataRef: o,
            pointerType: v
          }))
        }), w = Ce(e => {
          null == f && null == d && (n ? p.current || y([]) : b(e.clientX, e.clientY))
        }), x = Ee(v) ? i : n, R = r.useCallback(() => {
          if (!x || !s || null != f || null != d) return;
          const e = l(i);

          function t(n) {
            const r = de(n);
            fe(i, r) ? (e.removeEventListener("mousemove", t), p.current = null) : b(n.clientX, n.clientY)
          }
          if (!o.current.openEvent || cr(o.current.openEvent)) {
            e.addEventListener("mousemove", t);
            const n = () => {
              e.removeEventListener("mousemove", t), p.current = null
            };
            return p.current = n, n
          }
          c.setPositionReference(u)
        }, [x, s, f, d, i, o, c, u, b]);
        r.useEffect(() => R(), [R, h]), r.useEffect(() => {
          s && !i && (m.current = !1)
        }, [s, i]), r.useEffect(() => {
          !s && n && (m.current = !0)
        }, [s, n]), ke(() => {
          !s || null == f && null == d || (m.current = !1, b(f, d))
        }, [s, f, d, b]);
        const E = r.useMemo(() => {
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
          reference: E
        } : {}, [s, E])
      }
      const ar = {
          pointerdown: "onPointerDown",
          mousedown: "onMouseDown",
          click: "onClick"
        },
        fr = {
          pointerdown: "onPointerDownCapture",
          mousedown: "onMouseDownCapture",
          click: "onClickCapture"
        },
        dr = e => {
          var t, n;
          return {
            escapeKey: "boolean" == typeof e ? e : null != (t = null == e ? void 0 : e.escapeKey) && t,
            outsidePress: "boolean" == typeof e ? e : null == (n = null == e ? void 0 : e.outsidePress) || n
          }
        };

      function mr(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          elements: i,
          dataRef: u
        } = e, {
          enabled: l = !0,
          escapeKey: c = !0,
          outsidePress: s = !0,
          outsidePressEvent: d = "pointerdown",
          referencePress: m = !1,
          referencePressEvent: p = "pointerdown",
          ancestorScroll: v = !1,
          bubbles: g,
          capture: h
        } = t, y = fn(), b = Ce("function" == typeof s ? s : () => !1), w = "function" == typeof s ? b : s, k = r.useRef(!1), {
          escapeKey: M,
          outsidePress: T
        } = dr(g), {
          escapeKey: L,
          outsidePress: P
        } = dr(h), O = r.useRef(!1), A = Ce(e => {
          var t;
          if (!n || !l || !c || "Escape" !== e.key) return;
          if (O.current) return;
          const r = null == (t = u.current.floatingContext) ? void 0 : t.nodeId,
            i = y ? ye(y.nodesRef.current, r) : [];
          if (!M && (e.stopPropagation(), i.length > 0)) {
            let e = !0;
            if (i.forEach(t => {
                var n;
                null == (n = t.context) || !n.open || t.context.dataRef.current.__escapeKeyBubbles || (e = !1)
              }), !e) return
          }
          o(!1, function(e) {
            return "nativeEvent" in e
          }(e) ? e.nativeEvent : e, "escape-key")
        }), S = Ce(e => {
          var t;
          const n = () => {
            var t;
            A(e), null == (t = de(e)) || t.removeEventListener("keydown", n)
          };
          null == (t = de(e)) || t.addEventListener("keydown", n)
        }), D = Ce(e => {
          var t;
          const n = u.current.insideReactTree;
          u.current.insideReactTree = !1;
          const r = k.current;
          if (k.current = !1, "click" === d && r) return;
          if (n) return;
          if ("function" == typeof w && !w(e)) return;
          const l = de(e),
            c = "[" + vn("inert") + "]",
            s = pe(i.floating).querySelectorAll(c);
          let m = a(l) ? l : null;
          for (; m && !R(m);) {
            const e = I(m);
            if (R(e) || !a(e)) break;
            m = e
          }
          if (s.length && a(l) && !l.matches("html,body") && !fe(l, i.floating) && Array.from(s).every(e => !fe(m, e))) return;
          if (f(l) && j) {
            const t = R(l),
              n = E(l),
              r = /auto|scroll/,
              o = t || r.test(n.overflowX),
              i = t || r.test(n.overflowY),
              u = o && l.clientWidth > 0 && l.scrollWidth > l.clientWidth,
              c = i && l.clientHeight > 0 && l.scrollHeight > l.clientHeight,
              s = "rtl" === n.direction,
              a = c && (s ? e.offsetX <= l.offsetWidth - l.clientWidth : e.offsetX > l.clientWidth),
              f = u && e.offsetY > l.clientHeight;
            if (a || f) return
          }
          const p = null == (t = u.current.floatingContext) ? void 0 : t.nodeId,
            v = y && ye(y.nodesRef.current, p).some(t => {
              var n;
              return me(e, null == (n = t.context) ? void 0 : n.elements.floating)
            });
          if (me(e, i.floating) || me(e, i.domReference) || v) return;
          const g = y ? ye(y.nodesRef.current, p) : [];
          if (g.length > 0) {
            let e = !0;
            if (g.forEach(t => {
                var n;
                null == (n = t.context) || !n.open || t.context.dataRef.current.__outsidePressBubbles || (e = !1)
              }), !e) return
          }
          o(!1, e, "outside-press")
        }), F = Ce(e => {
          var t;
          const n = () => {
            var t;
            D(e), null == (t = de(e)) || t.removeEventListener(d, n)
          };
          null == (t = de(e)) || t.addEventListener(d, n)
        });
        r.useEffect(() => {
          if (!n || !l) return;
          u.current.__escapeKeyBubbles = M, u.current.__outsidePressBubbles = T;
          let e = -1;

          function t(e) {
            o(!1, e, "ancestor-scroll")
          }

          function r() {
            window.clearTimeout(e), O.current = !0
          }

          function s() {
            e = window.setTimeout(() => {
              O.current = !1
            }, x() ? 5 : 0)
          }
          const f = pe(i.floating);
          c && (f.addEventListener("keydown", L ? S : A, L), f.addEventListener("compositionstart", r), f.addEventListener("compositionend", s)), w && f.addEventListener(d, P ? F : D, P);
          let m = [];
          return v && (a(i.domReference) && (m = C(i.domReference)), a(i.floating) && (m = m.concat(C(i.floating))), !a(i.reference) && i.reference && i.reference.contextElement && (m = m.concat(C(i.reference.contextElement)))), m = m.filter(e => {
            var t;
            return e !== (null == (t = f.defaultView) ? void 0 : t.visualViewport)
          }), m.forEach(e => {
            e.addEventListener("scroll", t, {
              passive: !0
            })
          }), () => {
            c && (f.removeEventListener("keydown", L ? S : A, L), f.removeEventListener("compositionstart", r), f.removeEventListener("compositionend", s)), w && f.removeEventListener(d, P ? F : D, P), m.forEach(e => {
              e.removeEventListener("scroll", t)
            }), window.clearTimeout(e)
          }
        }, [u, i, c, w, d, n, o, v, l, M, T, A, L, S, D, P, F]), r.useEffect(() => {
          u.current.insideReactTree = !1
        }, [u, w, d]);
        const N = r.useMemo(() => ({
            onKeyDown: A,
            ...m && {
              [ar[p]]: e => {
                o(!1, e.nativeEvent, "reference-press")
              },
              ..."click" !== p && {
                onClick(e) {
                  o(!1, e.nativeEvent, "reference-press")
                }
              }
            }
          }), [A, o, m, p]),
          j = r.useMemo(() => {
            function e(e) {
              0 === e.button && (k.current = !0)
            }
            return {
              onKeyDown: A,
              onMouseDown: e,
              onMouseUp: e,
              [fr[d]]: () => {
                u.current.insideReactTree = !0
              }
            }
          }, [A, d, u]);
        return r.useMemo(() => l ? {
          reference: N,
          floating: j
        } : {}, [l, N, j])
      }

      function pr(e) {
        const {
          open: t = !1,
          onOpenChange: n,
          elements: o
        } = e, i = on(), u = r.useRef({}), [l] = r.useState(() => ln()), c = null != an(), [s, a] = r.useState(o.reference), f = Ce((e, t, r) => {
          u.current.openEvent = e ? t : void 0, l.emit("openchange", {
            open: e,
            event: t,
            reason: r,
            nested: c
          }), null == n || n(e, t, r)
        }), d = r.useMemo(() => ({
          setPositionReference: a
        }), []), m = r.useMemo(() => ({
          reference: s || o.reference || null,
          floating: o.floating || null,
          domReference: o.reference
        }), [s, o.reference, o.floating]);
        return r.useMemo(() => ({
          dataRef: u,
          open: t,
          onOpenChange: f,
          elements: m,
          events: l,
          floatingId: i,
          refs: d
        }), [t, f, m, l, i, d])
      }

      function vr(e) {
        void 0 === e && (e = {});
        const {
          nodeId: t
        } = e, n = pr({
          ...e,
          elements: {
            reference: null,
            floating: null,
            ...e.elements
          }
        }), o = e.rootContext || n, i = o.elements, [u, l] = r.useState(null), [c, s] = r.useState(null), f = (null == i ? void 0 : i.domReference) || u, d = r.useRef(null), m = fn();
        ke(() => {
          f && (d.current = f)
        }, [f]);
        const p = function(e) {
            void 0 === e && (e = {});
            const {
              placement: t = "bottom",
              strategy: n = "absolute",
              middleware: o = [],
              platform: i,
              elements: {
                reference: u,
                floating: l
              } = {},
              transform: c = !0,
              whileElementsMounted: s,
              open: a
            } = e, [f, d] = r.useState({
              x: 0,
              y: 0,
              strategy: n,
              placement: t,
              middlewareData: {},
              isPositioned: !1
            }), [m, p] = r.useState(o);
            Rt(m, o) || p(o);
            const [v, g] = r.useState(null), [h, y] = r.useState(null), b = r.useCallback(e => {
              e !== E.current && (E.current = e, g(e))
            }, []), w = r.useCallback(e => {
              e !== k.current && (k.current = e, y(e))
            }, []), x = u || v, R = l || h, E = r.useRef(null), k = r.useRef(null), I = r.useRef(f), M = null != s, C = It(s), T = It(i), L = It(a), P = r.useCallback(() => {
              if (!E.current || !k.current) return;
              const e = {
                placement: t,
                strategy: n,
                middleware: m
              };
              T.current && (e.platform = T.current), wt(E.current, k.current, e).then(e => {
                const t = {
                  ...e,
                  isPositioned: !1 !== L.current
                };
                O.current && !Rt(I.current, t) && (I.current = t, Ye.flushSync(() => {
                  d(t)
                }))
              })
            }, [m, t, n, T, L]);
            xt(() => {
              !1 === a && I.current.isPositioned && (I.current.isPositioned = !1, d(e => ({
                ...e,
                isPositioned: !1
              })))
            }, [a]);
            const O = r.useRef(!1);
            xt(() => (O.current = !0, () => {
              O.current = !1
            }), []), xt(() => {
              if (x && (E.current = x), R && (k.current = R), x && R) {
                if (C.current) return C.current(x, R, P);
                P()
              }
            }, [x, R, P, C, M]);
            const A = r.useMemo(() => ({
                reference: E,
                floating: k,
                setReference: b,
                setFloating: w
              }), [b, w]),
              S = r.useMemo(() => ({
                reference: x,
                floating: R
              }), [x, R]),
              D = r.useMemo(() => {
                const e = {
                  position: n,
                  left: 0,
                  top: 0
                };
                if (!S.floating) return e;
                const t = kt(S.floating, f.x),
                  r = kt(S.floating, f.y);
                return c ? {
                  ...e,
                  transform: "translate(" + t + "px, " + r + "px)",
                  ...Et(S.floating) >= 1.5 && {
                    willChange: "transform"
                  }
                } : {
                  position: n,
                  left: t,
                  top: r
                }
              }, [n, c, S.floating, f.x, f.y]);
            return r.useMemo(() => ({
              ...f,
              update: P,
              refs: A,
              elements: S,
              floatingStyles: D
            }), [f, P, A, S, D])
          }({
            ...e,
            elements: {
              ...i,
              ...c && {
                reference: c
              }
            }
          }),
          v = r.useCallback(e => {
            const t = a(e) ? {
              getBoundingClientRect: () => e.getBoundingClientRect(),
              getClientRects: () => e.getClientRects(),
              contextElement: e
            } : e;
            s(t), p.refs.setReference(t)
          }, [p.refs]),
          g = r.useCallback(e => {
            (a(e) || null === e) && (d.current = e, l(e)), (a(p.refs.reference.current) || null === p.refs.reference.current || null !== e && !a(e)) && p.refs.setReference(e)
          }, [p.refs]),
          h = r.useMemo(() => ({
            ...p.refs,
            setReference: g,
            setPositionReference: v,
            domReference: d
          }), [p.refs, g, v]),
          y = r.useMemo(() => ({
            ...p.elements,
            domReference: f
          }), [p.elements, f]),
          b = r.useMemo(() => ({
            ...p,
            ...o,
            refs: h,
            elements: y,
            nodeId: t
          }), [p, h, y, t, o]);
        return ke(() => {
          o.dataRef.current.floatingContext = b;
          const e = null == m ? void 0 : m.nodesRef.current.find(e => e.id === t);
          e && (e.context = b)
        }), r.useMemo(() => ({
          ...p,
          context: b,
          refs: h,
          elements: y
        }), [p, h, y, b])
      }

      function gr() {
        return ne().toLowerCase().startsWith("mac") && !navigator.maxTouchPoints && oe()
      }

      function hr(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          onOpenChange: o,
          events: i,
          dataRef: u,
          elements: c
        } = e, {
          enabled: s = !0,
          visibleOnly: d = !0
        } = t, m = r.useRef(!1), p = r.useRef(-1), v = r.useRef(!0);
        r.useEffect(() => {
          if (!s) return;
          const e = l(c.domReference);

          function t() {
            !n && f(c.domReference) && c.domReference === ae(pe(c.domReference)) && (m.current = !0)
          }

          function r() {
            v.current = !0
          }

          function o() {
            v.current = !1
          }
          return e.addEventListener("blur", t), gr() && (e.addEventListener("keydown", r, !0), e.addEventListener("pointerdown", o, !0)), () => {
            e.removeEventListener("blur", t), gr() && (e.removeEventListener("keydown", r, !0), e.removeEventListener("pointerdown", o, !0))
          }
        }, [c.domReference, n, s]), r.useEffect(() => {
          if (s) return i.on("openchange", e), () => {
            i.off("openchange", e)
          };

          function e(e) {
            let {
              reason: t
            } = e;
            "reference-press" !== t && "escape-key" !== t || (m.current = !0)
          }
        }, [i, s]), r.useEffect(() => () => {
          gn(p)
        }, []);
        const g = r.useMemo(() => ({
          onMouseLeave() {
            m.current = !1
          },
          onFocus(e) {
            if (m.current) return;
            const t = de(e.nativeEvent);
            if (d && a(t))
              if (gr() && !e.relatedTarget) {
                if (!v.current && !ve(t)) return
              } else if (! function(e) {
                if (!e || ue()) return !0;
                try {
                  return e.matches(":focus-visible")
                } catch (e) {
                  return !0
                }
              }(t)) return;
            o(!0, e.nativeEvent, "focus")
          },
          onBlur(e) {
            m.current = !1;
            const t = e.relatedTarget,
              n = e.nativeEvent,
              r = a(t) && t.hasAttribute(vn("focus-guard")) && "outside" === t.getAttribute("data-type");
            p.current = window.setTimeout(() => {
              var e;
              const i = ae(c.domReference ? c.domReference.ownerDocument : document);
              (t || i !== c.domReference) && (fe(null == (e = u.current.floatingContext) ? void 0 : e.refs.floating.current, i) || fe(c.domReference, i) || r || o(!1, n, "focus"))
            })
          }
        }), [u, c.domReference, o, d]);
        return r.useMemo(() => s ? {
          reference: g
        } : {}, [s, g])
      }

      function yr(e, t, n) {
        const r = new Map,
          o = "item" === n;
        let i = e;
        if (o && e) {
          const {
            [Kt]: t, [Bt]: n, ...r
          } = e;
          i = r
        }
        return {
          ..."floating" === n && {
            tabIndex: -1,
            [Wt]: ""
          },
          ...i,
          ...t.map(t => {
            const r = t ? t[n] : null;
            return "function" == typeof r ? e ? r(e) : null : r
          }).concat(e).reduce((e, t) => t ? (Object.entries(t).forEach(t => {
            let [n, i] = t;
            var u;
            o && [Kt, Bt].includes(n) || (0 === n.indexOf("on") ? (r.has(n) || r.set(n, []), "function" == typeof i && (null == (u = r.get(n)) || u.push(i), e[n] = function() {
              for (var e, t = arguments.length, o = new Array(t), i = 0; i < t; i++) o[i] = arguments[i];
              return null == (e = r.get(n)) ? void 0 : e.map(e => e(...o)).find(e => void 0 !== e)
            })) : e[n] = i)
          }), e) : e, {})
        }
      }

      function br(e) {
        void 0 === e && (e = []);
        const t = e.map(e => null == e ? void 0 : e.reference),
          n = e.map(e => null == e ? void 0 : e.floating),
          o = e.map(e => null == e ? void 0 : e.item),
          i = r.useCallback(t => yr(t, e, "reference"), t),
          u = r.useCallback(t => yr(t, e, "floating"), n),
          l = r.useCallback(t => yr(t, e, "item"), o);
        return r.useMemo(() => ({
          getReferenceProps: i,
          getFloatingProps: u,
          getItemProps: l
        }), [i, u, l])
      }

      function wr(e, t, n) {
        switch (e) {
          case "vertical":
            return t;
          case "horizontal":
            return n;
          default:
            return t || n
        }
      }

      function xr(e, t) {
        return wr(t, e === Vt || e === Yt, e === qt || e === zt)
      }

      function Rr(e, t, n) {
        return wr(t, e === Yt, n ? e === qt : e === zt) || "Enter" === e || " " === e || "" === e
      }

      function Er(e, t, n) {
        return wr(t, n ? e === qt : e === zt, e === Yt)
      }

      function kr(e, t, n, r) {
        return "both" === t || "horizontal" === t && r && r > 1 ? "Escape" === e : wr(t, n ? e === zt : e === qt, e === Vt)
      }

      function Ir(e, t) {
        const {
          open: n,
          onOpenChange: o,
          elements: i,
          floatingId: u
        } = e, {
          listRef: l,
          activeIndex: c,
          onNavigate: s = () => {},
          enabled: a = !0,
          selectedIndex: d = null,
          allowEscape: m = !1,
          loop: p = !1,
          nested: v = !1,
          rtl: g = !1,
          virtual: h = !1,
          focusItemOnOpen: y = "auto",
          focusItemOnHover: b = !0,
          openOnArrowKeyDown: w = !0,
          disabledIndices: x,
          orientation: R = "vertical",
          parentOrientation: E,
          cols: k = 1,
          scrollItemIntoView: I = !0,
          virtualItemRef: M,
          itemSizes: C,
          dense: T = !1
        } = t, L = Ie(he(i.floating)), P = an(), O = fn();
        ke(() => {
          e.dataRef.current.orientation = R
        }, [e, R]);
        const A = Ce(() => {
            s(-1 === F.current ? null : F.current)
          }),
          S = ge(i.domReference),
          D = r.useRef(y),
          F = r.useRef(null != d ? d : -1),
          N = r.useRef(null),
          j = r.useRef(!0),
          H = r.useRef(A),
          _ = r.useRef(!!i.floating),
          W = r.useRef(n),
          K = r.useRef(!1),
          B = r.useRef(!1),
          q = Ie(x),
          z = Ie(n),
          V = Ie(I),
          Y = Ie(d),
          [X, U] = r.useState(),
          [G, $] = r.useState(),
          Z = Ce(() => {
            function e(e) {
              var t;
              h ? (null != (t = e.id) && t.endsWith("-fui-option") && (e.id = u + "-" + Math.random().toString(16).slice(2, 10)), U(e.id), null == O || O.events.emit("virtualfocus", e), M && (M.current = e)) : Pn(e, {
                sync: K.current,
                preventScroll: !0
              })
            }
            const t = l.current[F.current],
              n = B.current;
            t && e(t), (K.current ? e => e() : requestAnimationFrame)(() => {
              const r = l.current[F.current] || t;
              if (!r) return;
              t || e(r);
              const o = V.current;
              o && J && (n || !j.current) && (null == r.scrollIntoView || r.scrollIntoView("boolean" == typeof o ? {
                block: "nearest",
                inline: "nearest"
              } : o))
            })
          });
        ke(() => {
          a && (n && i.floating ? D.current && null != d && (B.current = !0, F.current = d, A()) : _.current && (F.current = -1, H.current()))
        }, [a, n, i.floating, d, A]), ke(() => {
          if (a && n && i.floating)
            if (null == c) {
              if (K.current = !1, null != Y.current) return;
              if (_.current && (F.current = -1, Z()), (!W.current || !_.current) && D.current && (null != N.current || !0 === D.current && null == N.current)) {
                let e = 0;
                const t = () => {
                  null == l.current[0] ? (e < 2 && (e ? requestAnimationFrame : queueMicrotask)(t), e++) : (F.current = null == N.current || Rr(N.current, R, g) || v ? Pe(l, q.current) : Oe(l, q.current), N.current = null, A())
                };
                t()
              }
            } else Le(l, c) || (F.current = c, Z(), B.current = !1)
        }, [a, n, i.floating, c, Y, v, l, R, g, A, Z, q]), ke(() => {
          var e;
          if (!a || i.floating || !O || h || !_.current) return;
          const t = O.nodesRef.current,
            n = null == (e = t.find(e => e.id === P)) || null == (e = e.context) ? void 0 : e.elements.floating,
            r = ae(pe(i.floating)),
            o = t.some(e => e.context && fe(e.context.elements.floating, r));
          n && !o && j.current && n.focus({
            preventScroll: !0
          })
        }, [a, i.floating, O, P, h]), ke(() => {
          if (a && O && h && !P) return O.events.on("virtualfocus", e), () => {
            O.events.off("virtualfocus", e)
          };

          function e(e) {
            $(e.id), M && (M.current = e)
          }
        }, [a, O, h, P, M]), ke(() => {
          H.current = A, W.current = n, _.current = !!i.floating
        }), ke(() => {
          n || (N.current = null, D.current = y)
        }, [n, y]);
        const Q = null != c,
          J = r.useMemo(() => {
            function e(e) {
              if (!z.current) return;
              const t = l.current.indexOf(e); - 1 !== t && F.current !== t && (F.current = t, A())
            }
            return {
              onFocus(t) {
                let {
                  currentTarget: n
                } = t;
                K.current = !0, e(n)
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
                K.current = !0, B.current = !1, b && e(n)
              },
              onPointerLeave(e) {
                let {
                  pointerType: t
                } = e;
                var n;
                j.current && "touch" !== t && (K.current = !0, b && (F.current = -1, A(), h || null == (n = L.current) || n.focus({
                  preventScroll: !0
                })))
              }
            }
          }, [z, L, b, l, A, h]),
          ee = r.useCallback(() => {
            var e;
            return null != E ? E : null == O || null == (e = O.nodesRef.current.find(e => e.id === P)) || null == (e = e.context) || null == (e = e.dataRef) ? void 0 : e.current.orientation
          }, [P, O, E]),
          te = Ce(e => {
            if (j.current = !1, K.current = !0, 229 === e.which) return;
            if (!z.current && e.currentTarget === L.current) return;
            if (v && kr(e.key, R, g, k)) return xr(e.key, ee()) || we(e), o(!1, e.nativeEvent, "list-navigation"), void(f(i.domReference) && (h ? null == O || O.events.emit("virtualfocus", i.domReference) : i.domReference.focus()));
            const t = F.current,
              r = Pe(l, x),
              u = Oe(l, x);
            if (S || ("Home" === e.key && (we(e), F.current = r, A()), "End" === e.key && (we(e), F.current = u, A())), k > 1) {
              const t = C || Array.from({
                  length: l.current.length
                }, () => ({
                  width: 1,
                  height: 1
                })),
                n = De(t, k, T),
                o = n.findIndex(e => null != e && !je(l, e, x)),
                i = n.reduce((e, t, n) => null == t || je(l, t, x) ? e : n, -1),
                c = n[Se({
                  current: n.map(e => null != e ? l.current[e] : null)
                }, {
                  event: e,
                  orientation: R,
                  loop: p,
                  rtl: g,
                  cols: k,
                  disabledIndices: Ne([...("function" != typeof x ? x : null) || l.current.map((e, t) => je(l, t, x) ? t : void 0), void 0], n),
                  minIndex: o,
                  maxIndex: i,
                  prevIndex: Fe(F.current > u ? r : F.current, t, n, k, e.key === Yt ? "bl" : e.key === (g ? qt : zt) ? "tr" : "tl"),
                  stopEvent: !0
                })];
              if (null != c && (F.current = c, A()), "both" === R) return
            }
            if (xr(e.key, R)) {
              if (we(e), n && !h && ae(e.currentTarget.ownerDocument) === e.currentTarget) return F.current = Rr(e.key, R, g) ? r : u, void A();
              Rr(e.key, R, g) ? F.current = p ? t >= u ? m && t !== l.current.length ? -1 : r : Ae(l, {
                startingIndex: t,
                disabledIndices: x
              }) : Math.min(u, Ae(l, {
                startingIndex: t,
                disabledIndices: x
              })) : F.current = p ? t <= r ? m && -1 !== t ? l.current.length : u : Ae(l, {
                startingIndex: t,
                decrement: !0,
                disabledIndices: x
              }) : Math.max(r, Ae(l, {
                startingIndex: t,
                decrement: !0,
                disabledIndices: x
              })), Le(l, F.current) && (F.current = -1), A()
            }
          }),
          ne = r.useMemo(() => h && n && Q && {
            "aria-activedescendant": G || X
          }, [h, n, Q, G, X]),
          re = r.useMemo(() => ({
            "aria-orientation": "both" === R ? void 0 : R,
            ...S ? {} : ne,
            onKeyDown: te,
            onPointerMove() {
              j.current = !0
            }
          }), [ne, te, R, S]),
          oe = r.useMemo(() => {
            function e(e) {
              "auto" === y && xe(e.nativeEvent) && (D.current = !0)
            }

            function t(e) {
              D.current = y, "auto" === y && Re(e.nativeEvent) && (D.current = !0)
            }
            return {
              ...ne,
              onKeyDown(e) {
                j.current = !1;
                const t = e.key.startsWith("Arrow"),
                  r = ["Home", "End"].includes(e.key),
                  i = t || r,
                  u = Er(e.key, R, g),
                  c = kr(e.key, R, g, k),
                  s = Er(e.key, ee(), g),
                  a = xr(e.key, R),
                  f = (v ? s : a) || "Enter" === e.key || "" === e.key.trim();
                if (h && n) {
                  const t = null == O ? void 0 : O.nodesRef.current.find(e => null == e.parentId),
                    n = O && t ? function(e, t) {
                      let n, r = -1;
                      return function t(o, i) {
                        i > r && (n = o, r = i), ye(e, o).forEach(e => {
                          t(e.id, i + 1)
                        })
                      }(t, 0), e.find(e => e.id === n)
                    }(O.nodesRef.current, t.id) : null;
                  if (i && n && M) {
                    const t = new KeyboardEvent("keydown", {
                      key: e.key,
                      bubbles: !0
                    });
                    if (u || c) {
                      var m, p;
                      const r = (null == (m = n.context) ? void 0 : m.elements.domReference) === e.currentTarget,
                        o = c && !r ? null == (p = n.context) ? void 0 : p.elements.domReference : u ? l.current.find(e => (null == e ? void 0 : e.id) === X) : null;
                      o && (we(e), o.dispatchEvent(t), $(void 0))
                    }
                    var y;
                    if ((a || r) && n.context && n.context.open && n.parentId && e.currentTarget !== n.context.elements.domReference) return we(e), void(null == (y = n.context.elements.domReference) || y.dispatchEvent(t))
                  }
                  return te(e)
                }
                if (n || w || !t) {
                  if (f) {
                    const t = xr(e.key, ee());
                    N.current = v && t ? null : e.key
                  }
                  v ? s && (we(e), n ? (F.current = Pe(l, q.current), A()) : o(!0, e.nativeEvent, "list-navigation")) : a && (null != d && (F.current = d), we(e), !n && w ? o(!0, e.nativeEvent, "list-navigation") : te(e), n && A())
                }
              },
              onFocus() {
                n && !h && (F.current = -1, A())
              },
              onPointerDown: t,
              onPointerEnter: t,
              onMouseDown: e,
              onClick: e
            }
          }, [X, ne, k, te, q, y, l, v, A, o, n, w, R, ee, g, d, O, h, M]);
        return r.useMemo(() => a ? {
          reference: oe,
          floating: re,
          item: J
        } : {}, [a, oe, re, J])
      }
      const Mr = new Map([
        ["select", "listbox"],
        ["combobox", "listbox"],
        ["label", !1]
      ]);

      function Cr(e, t) {
        var n, o;
        void 0 === t && (t = {});
        const {
          open: i,
          elements: u,
          floatingId: l
        } = e, {
          enabled: c = !0,
          role: s = "dialog"
        } = t, a = on(), f = (null == (n = u.domReference) ? void 0 : n.id) || a, d = r.useMemo(() => {
          var e;
          return (null == (e = he(u.floating)) ? void 0 : e.id) || l
        }, [u.floating, l]), m = null != (o = Mr.get(s)) ? o : s, p = null != an(), v = r.useMemo(() => "tooltip" === m || "label" === s ? {
          ["aria-" + ("label" === s ? "labelledby" : "describedby")]: i ? d : void 0
        } : {
          "aria-expanded": i ? "true" : "false",
          "aria-haspopup": "alertdialog" === m ? "dialog" : m,
          "aria-controls": i ? d : void 0,
          ..."listbox" === m && {
            role: "combobox"
          },
          ..."menu" === m && {
            id: f
          },
          ..."menu" === m && p && {
            role: "menuitem"
          },
          ..."select" === s && {
            "aria-autocomplete": "none"
          },
          ..."combobox" === s && {
            "aria-autocomplete": "list"
          }
        }, [m, d, p, i, f, s]), g = r.useMemo(() => {
          const e = {
            id: d,
            ...m && {
              role: m
            }
          };
          return "tooltip" === m || "label" === s ? e : {
            ...e,
            ..."menu" === m && {
              "aria-labelledby": f
            }
          }
        }, [m, d, f, s]), h = r.useCallback(e => {
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
          reference: v,
          floating: g,
          item: h
        } : {}, [c, v, g, h])
      }
      const Tr = e => e.replace(/[A-Z]+(?![a-z])|[A-Z]/g, (e, t) => (t ? "-" : "") + e.toLowerCase());

      function Lr(e, t) {
        return "function" == typeof e ? e(t) : e
      }

      function Pr(e, t) {
        void 0 === t && (t = {});
        const {
          open: n,
          elements: {
            floating: o
          }
        } = e, {
          duration: i = 250
        } = t, u = ("number" == typeof i ? i : i.close) || 0, [l, c] = r.useState("unmounted"), s = function(e, t) {
          const [n, o] = r.useState(e);
          return e && !n && o(!0), r.useEffect(() => {
            if (!e && n) {
              const e = setTimeout(() => o(!1), t);
              return () => clearTimeout(e)
            }
          }, [e, n, t]), n
        }(n, u);
        return s || "close" !== l || c("unmounted"), ke(() => {
          if (o) {
            if (n) {
              c("initial");
              const e = requestAnimationFrame(() => {
                Ye.flushSync(() => {
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

      function Or(e, t) {
        void 0 === t && (t = {});
        const {
          initial: n = {
            opacity: 0
          },
          open: o,
          close: i,
          common: u,
          duration: l = 250
        } = t, c = e.placement, s = c.split("-")[0], a = r.useMemo(() => ({
          side: s,
          placement: c
        }), [s, c]), f = "number" == typeof l, d = (f ? l : l.open) || 0, m = (f ? l : l.close) || 0, [p, v] = r.useState(() => ({
          ...Lr(u, a),
          ...Lr(n, a)
        })), {
          isMounted: g,
          status: h
        } = Pr(e, {
          duration: l
        }), y = Ie(n), b = Ie(o), w = Ie(i), x = Ie(u);
        return ke(() => {
          const e = Lr(y.current, a),
            t = Lr(w.current, a),
            n = Lr(x.current, a),
            r = Lr(b.current, a) || Object.keys(e).reduce((e, t) => (e[t] = "", e), {});
          if ("initial" === h && v(t => ({
              transitionProperty: t.transitionProperty,
              ...n,
              ...e
            })), "open" === h && v({
              transitionProperty: Object.keys(r).map(Tr).join(","),
              transitionDuration: d + "ms",
              ...n,
              ...r
            }), "close" === h) {
            const r = t || e;
            v({
              transitionProperty: Object.keys(r).map(Tr).join(","),
              transitionDuration: m + "ms",
              ...n,
              ...r
            })
          }
        }, [m, w, y, b, x, d, h, a]), {
          isMounted: g,
          styles: p
        }
      }

      function Ar(e, t) {
        var n;
        const {
          open: o,
          dataRef: i
        } = e, {
          listRef: u,
          activeIndex: l,
          onMatch: c,
          onTypingChange: s,
          enabled: a = !0,
          findMatch: f = null,
          resetMs: d = 750,
          ignoreKeys: m = [],
          selectedIndex: p = null
        } = t, v = r.useRef(-1), g = r.useRef(""), h = r.useRef(null != (n = null != p ? p : l) ? n : -1), y = r.useRef(null), b = Ce(c), w = Ce(s), x = Ie(f), R = Ie(m);
        ke(() => {
          o && (gn(v), y.current = null, g.current = "")
        }, [o]), ke(() => {
          var e;
          o && "" === g.current && (h.current = null != (e = null != p ? p : l) ? e : -1)
        }, [o, p, l]);
        const E = Ce(e => {
            e ? i.current.typing || (i.current.typing = e, w(e)) : i.current.typing && (i.current.typing = e, w(e))
          }),
          k = Ce(e => {
            function t(e, t, n) {
              const r = x.current ? x.current(t, n) : t.find(e => 0 === (null == e ? void 0 : e.toLocaleLowerCase().indexOf(n.toLocaleLowerCase())));
              return r ? e.indexOf(r) : -1
            }
            const n = u.current;
            if (g.current.length > 0 && " " !== g.current[0] && (-1 === t(n, n, g.current) ? E(!1) : " " === e.key && we(e)), null == n || R.current.includes(e.key) || 1 !== e.key.length || e.ctrlKey || e.metaKey || e.altKey) return;
            o && " " !== e.key && (we(e), E(!0)), n.every(e => {
              var t, n;
              return !e || (null == (t = e[0]) ? void 0 : t.toLocaleLowerCase()) !== (null == (n = e[1]) ? void 0 : n.toLocaleLowerCase())
            }) && g.current === e.key && (g.current = "", h.current = y.current), g.current += e.key, gn(v), v.current = window.setTimeout(() => {
              g.current = "", h.current = y.current, E(!1)
            }, d);
            const r = h.current,
              i = t(n, [...n.slice((r || 0) + 1), ...n.slice(0, (r || 0) + 1)], g.current); - 1 !== i ? (b(i), y.current = i) : " " !== e.key && (g.current = "", E(!1))
          }),
          I = r.useMemo(() => ({
            onKeyDown: k
          }), [k]),
          M = r.useMemo(() => ({
            onKeyDown: k,
            onKeyUp(e) {
              " " === e.key && E(!1)
            }
          }), [k, E]);
        return r.useMemo(() => a ? {
          reference: I,
          floating: M
        } : {}, [a, I, M])
      }

      function Sr(e, t) {
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
      const Dr = e => ({
        name: "inner",
        options: e,
        async fn(t) {
          const {
            listRef: n,
            overflowRef: r,
            onFallbackChange: o,
            offset: i = 0,
            index: u = 0,
            minItemsVisible: l = 4,
            referenceOverflowThreshold: c = 0,
            scrollRef: s,
            ...a
          } = _(e, t), {
            rects: f,
            platform: d,
            elements: {
              floating: m
            }
          } = t, p = n.current[u], v = (null == s ? void 0 : s.current) || m, g = m.clientTop || v.clientTop, h = 0 !== m.clientTop, y = 0 !== v.clientTop, b = m === v;
          if (!p) return {};
          const w = {
              ...t,
              ...await Mt(-p.offsetTop - m.clientTop - f.reference.height / 2 - p.offsetHeight / 2 - i).fn(t)
            },
            x = await d.detectOverflow(Sr(w, v.scrollHeight + g + m.clientTop), a),
            R = await d.detectOverflow(w, {
              ...a,
              elementContext: "reference"
            }),
            E = S(0, x.top),
            k = w.y + E,
            I = (v.scrollHeight > v.clientHeight ? e => e : D)(S(0, v.scrollHeight + (h && b || y ? 2 * g : 0) - E - S(0, x.bottom)));
          if (v.style.maxHeight = I + "px", v.scrollTop = E, o) {
            const e = v.offsetHeight < p.offsetHeight * A(l, n.current.length) - 1 || R.top >= -c || R.bottom >= -c;
            Ye.flushSync(() => o(e))
          }
          return r && (r.current = await d.detectOverflow(Sr({
            ...w,
            y: k
          }, v.offsetHeight + g + m.clientTop), a)), {
            y: k
          }
        }
      });

      function Fr(e, t) {
        const {
          open: n,
          elements: o
        } = e, {
          enabled: i = !0,
          overflowRef: u,
          scrollRef: l,
          onChange: c
        } = t, s = Ce(c), a = r.useRef(!1), f = r.useRef(null), d = r.useRef(null);
        r.useEffect(() => {
          if (!i) return;

          function e(e) {
            if (e.ctrlKey || !t || null == u.current) return;
            const n = e.deltaY,
              r = u.current.top >= -.5,
              o = u.current.bottom >= -.5,
              i = t.scrollHeight - t.clientHeight,
              l = n < 0 ? -1 : 1,
              c = n < 0 ? "max" : "min";
            t.scrollHeight <= t.clientHeight || (!r && n > 0 || !o && n < 0 ? (e.preventDefault(), Ye.flushSync(() => {
              s(e => e + Math[c](n, i * l))
            })) : /firefox/i.test(re()) && (t.scrollTop += n))
          }
          const t = (null == l ? void 0 : l.current) || o.floating;
          return n && t ? (t.addEventListener("wheel", e), requestAnimationFrame(() => {
            f.current = t.scrollTop, null != u.current && (d.current = {
              ...u.current
            })
          }), () => {
            f.current = null, d.current = null, t.removeEventListener("wheel", e)
          }) : void 0
        }, [i, n, o.floating, u, l, s]);
        const m = r.useMemo(() => ({
          onKeyDown() {
            a.current = !0
          },
          onWheel() {
            a.current = !1
          },
          onPointerMove() {
            a.current = !1
          },
          onScroll() {
            const e = (null == l ? void 0 : l.current) || o.floating;
            if (u.current && e && a.current) {
              if (null !== f.current) {
                const t = e.scrollTop - f.current;
                (u.current.bottom < -.5 && t < -1 || u.current.top < -.5 && t > 1) && Ye.flushSync(() => s(e => e + t))
              }
              requestAnimationFrame(() => {
                f.current = e.scrollTop
              })
            }
          }
        }), [o.floating, s, u, l]);
        return r.useMemo(() => i ? {
          floating: m
        } : {}, [i, m])
      }

      function Nr(e, t, n) {
        return void 0 === n && (n = !0), e.filter(e => {
          var r;
          return e.parentId === t && (!n || (null == (r = e.context) ? void 0 : r.open))
        }).flatMap(t => [t, ...Nr(e, t.id, n)])
      }

      function jr(e, t) {
        const [n, r] = e;
        let o = !1;
        const i = t.length;
        for (let e = 0, u = i - 1; e < i; u = e++) {
          const [i, l] = t[e] || [0, 0], [c, s] = t[u] || [0, 0];
          l >= r != s >= r && n <= (c - i) * (r - l) / (s - l) + i && (o = !o)
        }
        return o
      }

      function Hr(e) {
        void 0 === e && (e = {});
        const {
          buffer: t = .5,
          blockPointerEvents: n = !1,
          requireIntent: r = !0
        } = e, o = {
          current: -1
        };
        let i = !1,
          u = null,
          l = null,
          c = "undefined" != typeof performance ? performance.now() : 0;
        const s = e => {
          let {
            x: n,
            y: s,
            placement: f,
            elements: d,
            onClose: m,
            nodeId: p,
            tree: v
          } = e;
          return function(e) {
            function g() {
              gn(o), m()
            }
            if (gn(o), !d.domReference || !d.floating || null == f || null == n || null == s) return;
            const {
              clientX: h,
              clientY: y
            } = e, b = [h, y], w = function(e) {
              return "composedPath" in e ? e.composedPath()[0] : e.target
            }(e), x = "mouseleave" === e.type, R = On(d.floating, w), E = On(d.domReference, w), k = d.domReference.getBoundingClientRect(), I = d.floating.getBoundingClientRect(), M = f.split("-")[0], C = n > I.right - I.width / 2, T = s > I.bottom - I.height / 2, L = function(e, t) {
              return e[0] >= t.x && e[0] <= t.x + t.width && e[1] >= t.y && e[1] <= t.y + t.height
            }(b, k), P = I.width > k.width, O = I.height > k.height, A = (P ? k : I).left, S = (P ? k : I).right, D = (O ? k : I).top, F = (O ? k : I).bottom;
            if (R && (i = !0, !x)) return;
            if (E && (i = !1), E && !x) return void(i = !0);
            if (x && a(e.relatedTarget) && On(d.floating, e.relatedTarget)) return;
            if (v && Nr(v.nodesRef.current, p).length) return;
            if ("top" === M && s >= k.bottom - 1 || "bottom" === M && s <= k.top + 1 || "left" === M && n >= k.right - 1 || "right" === M && n <= k.left + 1) return g();
            let N = [];
            switch (M) {
              case "top":
                N = [
                  [A, k.top + 1],
                  [A, I.bottom - 1],
                  [S, I.bottom - 1],
                  [S, k.top + 1]
                ];
                break;
              case "bottom":
                N = [
                  [A, I.top + 1],
                  [A, k.bottom - 1],
                  [S, k.bottom - 1],
                  [S, I.top + 1]
                ];
                break;
              case "left":
                N = [
                  [I.right - 1, F],
                  [I.right - 1, D],
                  [k.left + 1, D],
                  [k.left + 1, F]
                ];
                break;
              case "right":
                N = [
                  [k.right - 1, F],
                  [k.right - 1, D],
                  [I.left + 1, D],
                  [I.left + 1, F]
                ]
            }
            if (!jr([h, y], N)) {
              if (i && !L) return g();
              if (!x && r) {
                const t = function(e, t) {
                  const n = performance.now(),
                    r = n - c;
                  if (null === u || null === l || 0 === r) return u = e, l = t, c = n, null;
                  const o = e - u,
                    i = t - l,
                    s = Math.sqrt(o * o + i * i);
                  return u = e, l = t, c = n, s / r
                }(e.clientX, e.clientY);
                if (null !== t && t < .1) return g()
              }
              jr([h, y], function(e) {
                let [n, r] = e;
                switch (M) {
                  case "top":
                    return [
                      [P ? n + t / 2 : C ? n + 4 * t : n - 4 * t, r + t + 1],
                      [P ? n - t / 2 : C ? n + 4 * t : n - 4 * t, r + t + 1],
                      [I.left, C || P ? I.bottom - t : I.top],
                      [I.right, C ? P ? I.bottom - t : I.top : I.bottom - t]
                    ];
                  case "bottom":
                    return [
                      [P ? n + t / 2 : C ? n + 4 * t : n - 4 * t, r - t],
                      [P ? n - t / 2 : C ? n + 4 * t : n - 4 * t, r - t],
                      [I.left, C || P ? I.top + t : I.bottom],
                      [I.right, C ? P ? I.top + t : I.bottom : I.top + t]
                    ];
                  case "left": {
                    const e = [n + t + 1, O ? r + t / 2 : T ? r + 4 * t : r - 4 * t],
                      o = [n + t + 1, O ? r - t / 2 : T ? r + 4 * t : r - 4 * t];
                    return [
                      [T || O ? I.right - t : I.left, I.top],
                      [T ? O ? I.right - t : I.left : I.right - t, I.bottom], e, o
                    ]
                  }
                  case "right":
                    return [
                      [n - t, O ? r + t / 2 : T ? r + 4 * t : r - 4 * t],
                      [n - t, O ? r - t / 2 : T ? r + 4 * t : r - 4 * t],
                      [T || O ? I.left + t : I.right, I.top],
                      [T ? O ? I.left + t : I.right : I.left + t, I.bottom]
                    ]
                }
              }([n, s])) ? !i && r && (o.current = window.setTimeout(g, 40)) : g()
            }
          }
        };
        return s.__options = {
          blockPointerEvents: n
        }, s
      }
    }
  }
]);