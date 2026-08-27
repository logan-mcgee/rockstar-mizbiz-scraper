try {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    e = (new t.Error).stack;
  e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "8d693708-dc5f-4c10-acf3-7038629f4146", t._sentryDebugIdIdentifier = "sentry-dbid-8d693708-dc5f-4c10-acf3-7038629f4146")
} catch (t) {} {
  let t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  t._sentryModuleMetadata = t._sentryModuleMetadata || {}, t._sentryModuleMetadata[(new t.Error).stack] = Object.assign({}, t._sentryModuleMetadata[(new t.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-videoplayer",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_videoplayer = self.webpackChunk_rockstargames_modules_core_videoplayer || []).push([
  [3213], {
    7015(t, e, n) {
      n.d(e, {
        UE: () => V,
        RK: () => A,
        ll: () => C,
        rD: () => j,
        __: () => k,
        UU: () => P,
        jD: () => O,
        mG: () => B,
        ER: () => M,
        cY: () => D,
        iD: () => L,
        BN: () => S,
        Ej: () => _
      });
      var o = n(5444);

      function r(t, e, n) {
        let {
          reference: r,
          floating: i
        } = t;
        const l = (0, o.TV)(e),
          s = (0, o.Dz)(e),
          c = (0, o.sq)(s),
          a = (0, o.C0)(e),
          f = "y" === l,
          u = r.x + r.width / 2 - i.width / 2,
          d = r.y + r.height / 2 - i.height / 2,
          m = r[c] / 2 - i[c] / 2;
        let p;
        switch (a) {
          case "top":
            p = {
              x: u,
              y: r.y - i.height
            };
            break;
          case "bottom":
            p = {
              x: u,
              y: r.y + r.height
            };
            break;
          case "right":
            p = {
              x: r.x + r.width,
              y: d
            };
            break;
          case "left":
            p = {
              x: r.x - i.width,
              y: d
            };
            break;
          default:
            p = {
              x: r.x,
              y: r.y
            }
        }
        const g = (0, o.Sg)(e);
        return g && (p[s] += m * ("end" === g ? 1 : -1) * (n && f ? -1 : 1)), p
      }
      async function i(t, e) {
        var n;
        void 0 === e && (e = {});
        const {
          x: r,
          y: i,
          platform: l,
          rects: s,
          elements: c,
          strategy: a
        } = t, {
          boundary: f = "clippingAncestors",
          rootBoundary: u = "viewport",
          elementContext: d = "floating",
          altBoundary: m = !1,
          padding: p = 0
        } = (0, o._3)(e, t), g = (0, o.nI)(p), h = c[m ? "floating" === d ? "reference" : "floating" : d], y = (0, o.B1)(await l.getClippingRect({
          element: null == (n = await (null == l.isElement ? void 0 : l.isElement(h))) || n ? h : h.contextElement || await (null == l.getDocumentElement ? void 0 : l.getDocumentElement(c.floating)),
          boundary: f,
          rootBoundary: u,
          strategy: a
        })), w = "floating" === d ? {
          x: r,
          y: i,
          width: s.floating.width,
          height: s.floating.height
        } : s.reference, v = await (null == l.getOffsetParent ? void 0 : l.getOffsetParent(c.floating)), x = await (null == l.isElement ? void 0 : l.isElement(v)) && await (null == l.getScale ? void 0 : l.getScale(v)) || {
          x: 1,
          y: 1
        }, b = (0, o.B1)(l.convertOffsetParentRelativeRectToViewportRelativeRect ? await l.convertOffsetParentRelativeRectToViewportRelativeRect({
          elements: c,
          rect: w,
          offsetParent: v,
          strategy: a
        }) : w);
        return {
          top: (y.top - b.top + g.top) / x.y,
          bottom: (b.bottom - y.bottom + g.bottom) / x.y,
          left: (y.left - b.left + g.left) / x.x,
          right: (b.right - y.right + g.right) / x.x
        }
      }

      function l(t, e) {
        return {
          top: t.top - e.height,
          right: t.right - e.width,
          bottom: t.bottom - e.height,
          left: t.left - e.width
        }
      }

      function s(t) {
        return o.r_.some(e => t[e] >= 0)
      }

      function c(t) {
        const e = (0, o.jk)(...t.map(t => t.left)),
          n = (0, o.jk)(...t.map(t => t.top));
        return {
          x: e,
          y: n,
          width: (0, o.T9)(...t.map(t => t.right)) - e,
          height: (0, o.T9)(...t.map(t => t.bottom)) - n
        }
      }
      const a = new Set(["left", "top"]);
      var f = n(1538);

      function u(t) {
        const e = (0, f.L9)(t);
        let n = parseFloat(e.width) || 0,
          r = parseFloat(e.height) || 0;
        const i = (0, f.sb)(t),
          l = i ? t.offsetWidth : n,
          s = i ? t.offsetHeight : r,
          c = (0, o.LI)(n) !== l || (0, o.LI)(r) !== s;
        return c && (n = l, r = s), {
          width: n,
          height: r,
          $: c
        }
      }

      function d(t) {
        return (0, f.vq)(t) ? t : t.contextElement
      }

      function m(t) {
        const e = d(t);
        if (!(0, f.sb)(e)) return (0, o.Jx)(1);
        const n = e.getBoundingClientRect(),
          {
            width: r,
            height: i,
            $: l
          } = u(e);
        let s = (l ? (0, o.LI)(n.width) : n.width) / r,
          c = (l ? (0, o.LI)(n.height) : n.height) / i;
        return s && Number.isFinite(s) || (s = 1), c && Number.isFinite(c) || (c = 1), {
          x: s,
          y: c
        }
      }
      const p = (0, o.Jx)(0);

      function g(t) {
        const e = (0, f.zk)(t);
        return (0, f.Tc)() && e.visualViewport ? {
          x: e.visualViewport.offsetLeft,
          y: e.visualViewport.offsetTop
        } : p
      }

      function h(t, e, n, r) {
        void 0 === e && (e = !1), void 0 === n && (n = !1);
        const i = t.getBoundingClientRect(),
          l = d(t);
        let s = (0, o.Jx)(1);
        e && (r ? (0, f.vq)(r) && (s = m(r)) : s = m(t));
        const c = function(t, e, n) {
          return void 0 === e && (e = !1), !!n && e && n === (0, f.zk)(t)
        }(l, n, r) ? g(l) : (0, o.Jx)(0);
        let a = (i.left + c.x) / s.x,
          u = (i.top + c.y) / s.y,
          p = i.width / s.x,
          h = i.height / s.y;
        if (l && r) {
          const t = (0, f.zk)(l),
            e = (0, f.vq)(r) ? (0, f.zk)(r) : r;
          let n = t,
            o = (0, f._m)(n);
          for (; o && e !== n;) {
            const t = m(o),
              e = o.getBoundingClientRect(),
              r = (0, f.L9)(o),
              i = e.left + (o.clientLeft + parseFloat(r.paddingLeft)) * t.x,
              l = e.top + (o.clientTop + parseFloat(r.paddingTop)) * t.y;
            a *= t.x, u *= t.y, p *= t.x, h *= t.y, a += i, u += l, n = (0, f.zk)(o), o = (0, f._m)(n)
          }
        }
        return (0, o.B1)({
          width: p,
          height: h,
          x: a,
          y: u
        })
      }

      function y(t, e) {
        const n = (0, f.CP)(t).scrollLeft;
        return e ? e.left + n : h((0, f.ep)(t)).left + n
      }

      function w(t, e) {
        const n = t.getBoundingClientRect();
        return {
          x: n.left + e.scrollLeft - y(t, n),
          y: n.top + e.scrollTop
        }
      }

      function v(t, e, n) {
        let r;
        if ("viewport" === e || "layoutViewport" === e) r = function(t, e, n) {
          void 0 === n && (n = "viewport");
          const o = "layoutViewport" === n,
            r = (0, f.zk)(t),
            i = (0, f.ep)(t),
            l = r.visualViewport;
          let s = i.clientWidth,
            c = i.clientHeight,
            a = 0,
            u = 0;
          if (l) {
            const t = !(0, f.Tc)() || "fixed" === e;
            o ? t || (a = -l.offsetLeft, u = -l.offsetTop) : (s = l.width, c = l.height, t && (a = l.offsetLeft, u = l.offsetTop))
          }
          if (y(i) <= 0) {
            const t = i.ownerDocument,
              e = t.body,
              n = getComputedStyle(e),
              o = "CSS1Compat" === t.compatMode && parseFloat(n.marginLeft) + parseFloat(n.marginRight) || 0,
              r = Math.abs(i.clientWidth - e.clientWidth - o),
              l = "stable both-edges" === getComputedStyle(i).scrollbarGutter ? r / 2 : r;
            l <= 25 && (s -= l)
          }
          return {
            width: s,
            height: c,
            x: a,
            y: u
          }
        }(t, n, e);
        else if ("document" === e) r = function(t) {
          const e = (0, f.CP)(t),
            n = t.ownerDocument.body,
            r = (0, o.T9)(t.scrollWidth, t.clientWidth, n.scrollWidth, n.clientWidth),
            i = (0, o.T9)(t.scrollHeight, t.clientHeight, n.scrollHeight, n.clientHeight);
          let l = -e.scrollLeft + y(t);
          const s = -e.scrollTop;
          return "rtl" === (0, f.L9)(n).direction && (l += (0, o.T9)(t.clientWidth, n.clientWidth) - r), {
            width: r,
            height: i,
            x: l,
            y: s
          }
        }((0, f.ep)(t));
        else if ((0, f.vq)(e)) r = function(t, e) {
          const n = h(t, !0, "fixed" === e),
            o = n.top + t.clientTop,
            r = n.left + t.clientLeft,
            i = m(t);
          return {
            width: t.clientWidth * i.x,
            height: t.clientHeight * i.y,
            x: r * i.x,
            y: o * i.y
          }
        }(e, n);
        else {
          const n = g(t);
          r = {
            x: e.x - n.x,
            y: e.y - n.y,
            width: e.width,
            height: e.height
          }
        }
        return (0, o.B1)(r)
      }

      function x(t, e, n) {
        const r = (0, f.sb)(e),
          i = (0, f.ep)(e),
          l = "fixed" === n,
          s = h(t, !0, l, e);
        let c = {
          scrollLeft: 0,
          scrollTop: 0
        };
        const a = (0, o.Jx)(0);
        if ((r || !l) && (("body" !== (0, f.mq)(e) || (0, f.ZU)(i)) && (c = (0, f.CP)(e)), r)) {
          const t = h(e, !0, l, e);
          a.x = t.x + e.clientLeft, a.y = t.y + e.clientTop
        }!r && i && (a.x = y(i));
        const u = !i || r || l ? (0, o.Jx)(0) : w(i, c);
        return {
          x: s.left + c.scrollLeft - a.x - u.x,
          y: s.top + c.scrollTop - a.y - u.y,
          width: s.width,
          height: s.height
        }
      }

      function b(t) {
        return "static" === (0, f.L9)(t).position
      }

      function T(t, e) {
        if (!(0, f.sb)(t) || "fixed" === (0, f.L9)(t).position) return null;
        if (e) return e(t);
        let n = t.offsetParent;
        return (0, f.ep)(t) === n && (n = n.ownerDocument.body), n
      }

      function R(t, e) {
        const n = (0, f.zk)(t);
        if ((0, f.Tf)(t)) return n;
        if (!(0, f.sb)(t)) {
          let e = (0, f.$4)(t);
          for (; e && !(0, f.eu)(e);) {
            if ((0, f.vq)(e) && !b(e)) return e;
            e = (0, f.$4)(e)
          }
          return n
        }
        let o = T(t, e);
        for (; o && (0, f.Lv)(o) && b(o);) o = T(o, e);
        return o && (0, f.eu)(o) && b(o) && !(0, f.sQ)(o) ? n : o || (0, f.gJ)(t) || n
      }
      const L = {
        convertOffsetParentRelativeRectToViewportRelativeRect: function(t) {
          let {
            elements: e,
            rect: n,
            offsetParent: r,
            strategy: i
          } = t;
          const l = "fixed" === i,
            s = (0, f.ep)(r),
            c = !!e && (0, f.Tf)(e.floating);
          if (r === s || c && l) return n;
          let a = {
              scrollLeft: 0,
              scrollTop: 0
            },
            u = (0, o.Jx)(1);
          const d = (0, o.Jx)(0),
            p = (0, f.sb)(r);
          if ((p || !l) && (("body" !== (0, f.mq)(r) || (0, f.ZU)(s)) && (a = (0, f.CP)(r)), p)) {
            const t = h(r);
            u = m(r), d.x = t.x + r.clientLeft, d.y = t.y + r.clientTop
          }
          const g = !s || p || l ? (0, o.Jx)(0) : w(s, a);
          return {
            width: n.width * u.x,
            height: n.height * u.y,
            x: n.x * u.x - a.scrollLeft * u.x + d.x + g.x,
            y: n.y * u.y - a.scrollTop * u.y + d.y + g.y
          }
        },
        getDocumentElement: f.ep,
        getClippingRect: function(t) {
          let {
            element: e,
            boundary: n,
            rootBoundary: r,
            strategy: i
          } = t;
          const l = [..."clippingAncestors" === n ? (0, f.Tf)(e) ? [] : function(t, e) {
              const n = e.get(t);
              if (n) return n;
              let o = (0, f.v9)(t, [], !1).filter(t => (0, f.vq)(t) && "body" !== (0, f.mq)(t)),
                r = null;
              const i = "fixed" === (0, f.L9)(t).position;
              let l = i ? (0, f.$4)(t) : t;
              for (;
                (0, f.vq)(l) && !(0, f.eu)(l);) {
                const t = (0, f.L9)(l),
                  e = (0, f.sQ)(l),
                  n = r ? r.position : i ? "fixed" : "";
                e || "fixed" !== n && ("absolute" !== n || "static" !== t.position) ? r = t : o = o.filter(t => t !== l), l = (0, f.$4)(l)
              }
              return e.set(t, o), o
            }(e, this._c) : [].concat(n), r],
            s = v(e, l[0], i);
          let c = s.top,
            a = s.right,
            u = s.bottom,
            d = s.left;
          for (let t = 1; t < l.length; t++) {
            const n = v(e, l[t], i);
            c = (0, o.T9)(n.top, c), a = (0, o.jk)(n.right, a), u = (0, o.jk)(n.bottom, u), d = (0, o.T9)(n.left, d)
          }
          return {
            width: a - d,
            height: u - c,
            x: d,
            y: c
          }
        },
        getOffsetParent: R,
        getElementRects: async function(t) {
          const e = this.getOffsetParent || R,
            n = this.getDimensions,
            o = await n(t.floating);
          return {
            reference: x(t.reference, await e(t.floating), t.strategy),
            floating: {
              x: 0,
              y: 0,
              width: o.width,
              height: o.height
            }
          }
        },
        getClientRects: function(t) {
          return t.getClientRects ? Array.from(t.getClientRects()) : []
        },
        getDimensions: function(t) {
          const {
            width: e,
            height: n
          } = u(t);
          return {
            width: e,
            height: n
          }
        },
        getScale: m,
        isElement: f.vq,
        isRTL: function(t) {
          return "rtl" === (0, f.L9)(t).direction
        }
      };

      function E(t, e) {
        return t.x === e.x && t.y === e.y && t.width === e.width && t.height === e.height
      }

      function C(t, e, n, r) {
        void 0 === r && (r = {});
        const {
          ancestorScroll: i = !0,
          ancestorResize: l = !0,
          elementResize: s = "function" == typeof ResizeObserver,
          layoutShift: c = "function" == typeof IntersectionObserver,
          animationFrame: a = !1
        } = r, u = d(t), m = i || l ? [...u ? (0, f.v9)(u) : [], ...e ? (0, f.v9)(e) : []] : [];
        m.forEach(t => {
          i && t.addEventListener("scroll", n), l && t.addEventListener("resize", n)
        });
        const p = u && c ? function(t, e, n) {
          let r, i = null;
          const l = (0, f.ep)(t);

          function s() {
            var t;
            clearTimeout(r), null == (t = i) || t.disconnect(), i = null
          }

          function c(n, a) {
            void 0 === n && (n = !1), void 0 === a && (a = 1), s();
            const f = t.getBoundingClientRect(),
              {
                left: u,
                top: d,
                width: m,
                height: p
              } = f;
            if (n || e(), !m || !p) return;
            const g = {
              rootMargin: -(0, o.RI)(d) + "px " + -(0, o.RI)(l.clientWidth - (u + m)) + "px " + -(0, o.RI)(l.clientHeight - (d + p)) + "px " + -(0, o.RI)(u) + "px",
              threshold: (0, o.T9)(0, (0, o.jk)(1, a)) || 1
            };
            let h = !0;

            function y(e) {
              const n = e[0].intersectionRatio;
              if (!E(f, t.getBoundingClientRect())) return c();
              if (n !== a) {
                if (!h) return c();
                n ? c(!1, n) : r = setTimeout(() => {
                  c(!1, 1e-7)
                }, 1e3)
              }
              h = !1
            }
            try {
              i = new IntersectionObserver(y, {
                ...g,
                root: l.ownerDocument
              })
            } catch (t) {
              i = new IntersectionObserver(y, g)
            }
            i.observe(t)
          }
          const a = (0, f.zk)(t),
            u = () => c(n);
          return a.addEventListener("resize", u), c(!0), () => {
            a.removeEventListener("resize", u), s()
          }
        }(u, n, l) : null;
        let g, y = -1,
          w = null;
        s && (w = new ResizeObserver(t => {
          let [o] = t;
          o && o.target === u && w && e && (w.unobserve(e), cancelAnimationFrame(y), y = requestAnimationFrame(() => {
            var t;
            null == (t = w) || t.observe(e)
          })), n()
        }), u && !a && w.observe(u), e && w.observe(e));
        let v = a ? h(t) : null;
        return a && function e() {
          const o = h(t);
          v && !E(v, o) && n(), v = o, g = requestAnimationFrame(e)
        }(), n(), () => {
          var t;
          m.forEach(t => {
            i && t.removeEventListener("scroll", n), l && t.removeEventListener("resize", n)
          }), null == p || p(), null == (t = w) || t.disconnect(), w = null, a && cancelAnimationFrame(g)
        }
      }
      const k = i,
        D = function(t) {
          return void 0 === t && (t = 0), {
            name: "offset",
            options: t,
            async fn(e) {
              var n, r;
              const {
                x: i,
                y: l,
                placement: s,
                middlewareData: c
              } = e, f = await async function(t, e) {
                const {
                  placement: n,
                  platform: r,
                  elements: i
                } = t, l = await (null == r.isRTL ? void 0 : r.isRTL(i.floating)), s = (0, o.C0)(n), c = (0, o.Sg)(n), f = "y" === (0, o.TV)(n), u = a.has(s) ? -1 : 1, d = l && f ? -1 : 1, m = (0, o._3)(e, t);
                let {
                  mainAxis: p,
                  crossAxis: g,
                  alignmentAxis: h
                } = "number" == typeof m ? {
                  mainAxis: m,
                  crossAxis: 0,
                  alignmentAxis: null
                } : {
                  mainAxis: m.mainAxis || 0,
                  crossAxis: m.crossAxis || 0,
                  alignmentAxis: m.alignmentAxis
                };
                return c && "number" == typeof h && (g = "end" === c ? -1 * h : h), f ? {
                  x: g * d,
                  y: p * u
                } : {
                  x: p * u,
                  y: g * d
                }
              }(e, t);
              return s === (null == (n = c.offset) ? void 0 : n.placement) && null != (r = c.arrow) && r.alignmentOffset ? {} : {
                x: i + f.x,
                y: l + f.y,
                data: {
                  ...f,
                  placement: s
                }
              }
            }
          }
        },
        A = function(t) {
          return void 0 === t && (t = {}), {
            name: "autoPlacement",
            options: t,
            async fn(e) {
              var n, r, i;
              const {
                rects: l,
                middlewareData: s,
                placement: c,
                platform: a,
                elements: f
              } = e, {
                crossAxis: u = !1,
                alignment: d,
                allowedPlacements: m = o.DD,
                autoAlignment: p = !0,
                ...g
              } = (0, o._3)(t, e), h = void 0 !== d || m === o.DD ? function(t, e, n) {
                return (t ? [...n.filter(e => (0, o.Sg)(e) === t), ...n.filter(e => (0, o.Sg)(e) !== t)] : n.filter(t => (0, o.C0)(t) === t)).filter(n => !t || (0, o.Sg)(n) === t || !!e && (0, o.aD)(n) !== n)
              }(d || null, p, m) : m, y = (null == (n = s.autoPlacement) ? void 0 : n.index) || 0, w = h[y];
              if (null == w) return {};
              if (c !== w) return {
                reset: {
                  placement: h[0]
                }
              };
              const v = await a.detectOverflow(e, g),
                x = (0, o.w7)(w, l, await (null == a.isRTL ? void 0 : a.isRTL(f.floating))),
                b = [v[(0, o.C0)(w)], v[x[0]], v[x[1]]],
                T = [...(null == (r = s.autoPlacement) ? void 0 : r.overflows) || [], {
                  placement: w,
                  overflows: b
                }],
                R = h[y + 1];
              if (R) return {
                data: {
                  index: y + 1,
                  overflows: T
                },
                reset: {
                  placement: R
                }
              };
              const L = T.map(t => {
                  const e = (0, o.Sg)(t.placement);
                  return [t.placement, e && u ? t.overflows.slice(0, 2).reduce((t, e) => t + e, 0) : t.overflows[0], t.overflows]
                }).sort((t, e) => t[1] - e[1]),
                E = (null == (i = L.filter(t => t[2].slice(0, (0, o.Sg)(t[0]) ? 2 : 3).every(t => t <= 0))[0]) ? void 0 : i[0]) || L[0][0];
              return E !== c ? {
                data: {
                  index: y + 1,
                  overflows: T
                },
                reset: {
                  placement: E
                }
              } : {}
            }
          }
        },
        S = function(t) {
          return void 0 === t && (t = {}), {
            name: "shift",
            options: t,
            async fn(e) {
              const {
                x: n,
                y: r,
                placement: i,
                platform: l
              } = e, {
                mainAxis: s = !0,
                crossAxis: c = !1,
                limiter: a = {
                  fn: t => {
                    let {
                      x: e,
                      y: n
                    } = t;
                    return {
                      x: e,
                      y: n
                    }
                  }
                },
                ...f
              } = (0, o._3)(t, e), u = {
                x: n,
                y: r
              }, d = await l.detectOverflow(e, f), m = (0, o.TV)(i), p = (0, o.PG)(m);
              let g = u[p],
                h = u[m];
              const y = (t, e) => (0, o.qE)(e + d["y" === t ? "top" : "left"], e, e - d["y" === t ? "bottom" : "right"]);
              s && (g = y(p, g)), c && (h = y(m, h));
              const w = a.fn({
                ...e,
                [p]: g,
                [m]: h
              });
              return {
                ...w,
                data: {
                  x: w.x - n,
                  y: w.y - r,
                  enabled: {
                    [p]: s,
                    [m]: c
                  }
                }
              }
            }
          }
        },
        P = function(t) {
          return void 0 === t && (t = {}), {
            name: "flip",
            options: t,
            async fn(e) {
              var n, r;
              const {
                placement: i,
                middlewareData: l,
                rects: s,
                initialPlacement: c,
                platform: a,
                elements: f
              } = e, {
                mainAxis: u = !0,
                crossAxis: d = !0,
                fallbackPlacements: m,
                fallbackStrategy: p = "bestFit",
                fallbackAxisSideDirection: g = "none",
                flipAlignment: h = !0,
                ...y
              } = (0, o._3)(t, e);
              if (null != (n = l.arrow) && n.alignmentOffset) return {};
              const w = (0, o.C0)(i),
                v = (0, o.TV)(c),
                x = (0, o.C0)(c) === c,
                b = await (null == a.isRTL ? void 0 : a.isRTL(f.floating)),
                T = m || (x || !h ? [(0, o.bV)(c)] : (0, o.WJ)(c)),
                R = "none" !== g;
              !m && R && T.push(...(0, o.lP)(c, h, g, b));
              const L = [c, ...T],
                E = await a.detectOverflow(e, y),
                C = [];
              let k = (null == (r = l.flip) ? void 0 : r.overflows) || [];
              if (u && C.push(E[w]), d) {
                const t = (0, o.w7)(i, s, b);
                C.push(E[t[0]], E[t[1]])
              }
              if (k = [...k, {
                  placement: i,
                  overflows: C
                }], !C.every(t => t <= 0)) {
                var D, A;
                const t = ((null == (D = l.flip) ? void 0 : D.index) || 0) + 1,
                  e = L[t];
                if (e && ("alignment" !== d || v === (0, o.TV)(e) || k.every(t => (0, o.TV)(t.placement) !== v || t.overflows[0] > 0))) return {
                  data: {
                    index: t,
                    overflows: k
                  },
                  reset: {
                    placement: e
                  }
                };
                let n = null == (A = k.filter(t => t.overflows[0] <= 0).sort((t, e) => t.overflows[1] - e.overflows[1])[0]) ? void 0 : A.placement;
                if (!n) switch (p) {
                  case "bestFit": {
                    var S;
                    const t = null == (S = k.filter(t => {
                      if (R) {
                        const e = (0, o.TV)(t.placement);
                        return e === v || "y" === e
                      }
                      return !0
                    }).map(t => [t.placement, t.overflows.filter(t => t > 0).reduce((t, e) => t + e, 0)]).sort((t, e) => t[1] - e[1])[0]) ? void 0 : S[0];
                    t && (n = t);
                    break
                  }
                  case "initialPlacement":
                    n = c
                }
                if (i !== n) return {
                  reset: {
                    placement: n
                  }
                }
              }
              return {}
            }
          }
        },
        _ = function(t) {
          return void 0 === t && (t = {}), {
            name: "size",
            options: t,
            async fn(e) {
              const {
                placement: n,
                rects: r,
                platform: i,
                elements: l
              } = e, {
                apply: s = () => {},
                ...c
              } = (0, o._3)(t, e), a = await i.detectOverflow(e, c), f = (0, o.C0)(n), u = (0, o.Sg)(n), d = "y" === (0, o.TV)(n), {
                width: m,
                height: p
              } = r.floating;
              let g, h;
              "top" === f || "bottom" === f ? (g = f, h = u === (await (null == i.isRTL ? void 0 : i.isRTL(l.floating)) ? "start" : "end") ? "left" : "right") : (h = f, g = "end" === u ? "top" : "bottom");
              const y = p - a.top - a.bottom,
                w = m - a.left - a.right,
                v = (0, o.jk)(p - a[g], y),
                x = (0, o.jk)(m - a[h], w),
                b = e.middlewareData.shift,
                T = !b;
              let R = v,
                L = x;
              null != b && b.enabled.x && (L = w), null != b && b.enabled.y && (R = y), T && !u && (d ? L = m - 2 * (0, o.T9)(a.left, a.right) : R = p - 2 * (0, o.T9)(a.top, a.bottom)), await s({
                ...e,
                availableWidth: L,
                availableHeight: R
              });
              const E = await i.getDimensions(l.floating);
              return m !== E.width || p !== E.height ? {
                reset: {
                  rects: !0
                }
              } : {}
            }
          }
        },
        O = function(t) {
          return void 0 === t && (t = {}), {
            name: "hide",
            options: t,
            async fn(e) {
              const {
                rects: n,
                platform: r
              } = e, {
                strategy: i = "referenceHidden",
                ...c
              } = (0, o._3)(t, e);
              switch (i) {
                case "referenceHidden": {
                  const t = l(await r.detectOverflow(e, {
                    ...c,
                    elementContext: "reference"
                  }), n.reference);
                  return {
                    data: {
                      referenceHiddenOffsets: t,
                      referenceHidden: s(t)
                    }
                  }
                }
                case "escaped": {
                  const t = l(await r.detectOverflow(e, {
                    ...c,
                    altBoundary: !0
                  }), n.floating);
                  return {
                    data: {
                      escapedOffsets: t,
                      escaped: s(t)
                    }
                  }
                }
                default:
                  return {}
              }
            }
          }
        },
        V = t => ({
          name: "arrow",
          options: t,
          async fn(e) {
            const {
              x: n,
              y: r,
              placement: i,
              rects: l,
              platform: s,
              elements: c,
              middlewareData: a
            } = e, {
              element: f,
              padding: u = 0
            } = (0, o._3)(t, e) || {};
            if (null == f) return {};
            const d = (0, o.nI)(u),
              m = {
                x: n,
                y: r
              },
              p = (0, o.Dz)(i),
              g = (0, o.sq)(p),
              h = await s.getDimensions(f),
              y = "y" === p,
              w = y ? "top" : "left",
              v = y ? "bottom" : "right",
              x = y ? "clientHeight" : "clientWidth",
              b = l.reference[g] + l.reference[p] - m[p] - l.floating[g],
              T = m[p] - l.reference[p],
              R = await (null == s.getOffsetParent ? void 0 : s.getOffsetParent(f));
            let L = R ? R[x] : 0;
            L && await (null == s.isElement ? void 0 : s.isElement(R)) || (L = c.floating[x] || l.floating[g]);
            const E = b / 2 - T / 2,
              C = L / 2 - h[g] / 2 - 1,
              k = (0, o.jk)(d[w], C),
              D = (0, o.jk)(d[v], C),
              A = L - h[g] - D,
              S = L / 2 - h[g] / 2 + E,
              P = (0, o.qE)(k, S, A),
              _ = !a.arrow && null != (0, o.Sg)(i) && S !== P && l.reference[g] / 2 - (S < k ? k : D) - h[g] / 2 < 0,
              O = _ ? S < k ? S - k : S - A : 0;
            return {
              [p]: m[p] + O,
              data: {
                [p]: P,
                centerOffset: S - P - O,
                ..._ && {
                  alignmentOffset: O
                }
              },
              reset: _
            }
          }
        }),
        B = function(t) {
          return void 0 === t && (t = {}), {
            name: "inline",
            options: t,
            async fn(e) {
              const {
                placement: n,
                elements: r,
                rects: i,
                platform: l,
                strategy: s
              } = e, {
                padding: a = 2,
                x: f,
                y: u
              } = (0, o._3)(t, e), d = Array.from(await (null == l.getClientRects ? void 0 : l.getClientRects(r.reference)) || []);
              if (!d.length) return {};
              const m = function(t) {
                  const e = t.slice().sort((t, e) => t.y - e.y),
                    n = [];
                  let r = null;
                  for (let t = 0; t < e.length; t++) {
                    const o = e[t];
                    !r || o.y - r.y > r.height / 2 ? n.push([o]) : n[n.length - 1].push(o), r = o
                  }
                  return n.map(t => (0, o.B1)(c(t)))
                }(d),
                p = (0, o.B1)(c(d)),
                g = (0, o.nI)(a),
                h = await l.getElementRects({
                  reference: {
                    getBoundingClientRect: function() {
                      if (2 === m.length && (m[0].left > m[1].right || m[1].left > m[0].right) && null != f && null != u) return m.find(t => f > t.left - g.left && f < t.right + g.right && u > t.top - g.top && u < t.bottom + g.bottom) || p;
                      if (m.length >= 2) {
                        if ("y" === (0, o.TV)(n)) {
                          const t = m[0],
                            e = m[m.length - 1],
                            r = "top" === (0, o.C0)(n),
                            i = t.top,
                            l = e.bottom,
                            s = r ? t.left : e.left,
                            c = r ? t.right : e.right;
                          return (0, o.B1)({
                            x: s,
                            y: i,
                            width: c - s,
                            height: l - i
                          })
                        }
                        const t = "left" === (0, o.C0)(n),
                          e = (0, o.T9)(...m.map(t => t.right)),
                          r = (0, o.jk)(...m.map(t => t.left)),
                          i = m.filter(n => t ? n.left === r : n.right === e),
                          l = i[0].top,
                          s = i[i.length - 1].bottom;
                        return (0, o.B1)({
                          x: r,
                          y: l,
                          width: e - r,
                          height: s - l
                        })
                      }
                      return p
                    }
                  },
                  floating: r.floating,
                  strategy: s
                });
              return i.reference.x !== h.reference.x || i.reference.y !== h.reference.y || i.reference.width !== h.reference.width || i.reference.height !== h.reference.height ? {
                reset: {
                  rects: h
                }
              } : {}
            }
          }
        },
        M = function(t) {
          return void 0 === t && (t = {}), {
            options: t,
            fn(e) {
              var n, r;
              const {
                x: i,
                y: l,
                placement: s,
                rects: c,
                middlewareData: f
              } = e, {
                offset: u = 0,
                mainAxis: d = !0,
                crossAxis: m = !0
              } = (0, o._3)(t, e), p = {
                x: i,
                y: l
              }, g = (0, o.TV)(s), h = (0, o.PG)(g);
              let y = p[h],
                w = p[g];
              const v = (0, o._3)(u, e),
                x = "number" == typeof v ? {
                  mainAxis: v,
                  crossAxis: 0
                } : {
                  mainAxis: null != (n = v.mainAxis) ? n : 0,
                  crossAxis: null != (r = v.crossAxis) ? r : 0
                };
              if (d) {
                const t = "y" === h ? "height" : "width",
                  e = c.reference[h] - c.floating[t] + x.mainAxis,
                  n = c.reference[h] + c.reference[t] - x.mainAxis;
                y < e ? y = e : y > n && (y = n)
              }
              if (m) {
                var b, T;
                const t = "y" === h ? "width" : "height",
                  e = a.has((0, o.C0)(s)),
                  n = c.reference[g] - c.floating[t] + (e && (null == (b = f.offset) ? void 0 : b[g]) || 0) + (e ? 0 : x.crossAxis),
                  r = c.reference[g] + c.reference[t] + (e ? 0 : (null == (T = f.offset) ? void 0 : T[g]) || 0) - (e ? x.crossAxis : 0);
                w < n ? w = n : w > r && (w = r)
              }
              return {
                [h]: y,
                [g]: w
              }
            }
          }
        },
        j = (t, e, n) => {
          const o = new Map,
            l = null != n ? n : {},
            s = {
              ...L,
              ...l.platform,
              _c: o
            };
          return (async (t, e, n) => {
            const {
              placement: o = "bottom",
              strategy: l = "absolute",
              middleware: s = [],
              platform: c
            } = n, a = c.detectOverflow ? c : {
              ...c,
              detectOverflow: i
            }, f = await (null == c.isRTL ? void 0 : c.isRTL(e));
            let u = await c.getElementRects({
                reference: t,
                floating: e,
                strategy: l
              }),
              {
                x: d,
                y: m
              } = r(u, o, f),
              p = o,
              g = 0;
            const h = {};
            for (let n = 0; n < s.length; n++) {
              const i = s[n];
              if (!i) continue;
              const {
                name: y,
                fn: w
              } = i, {
                x: v,
                y: x,
                data: b,
                reset: T
              } = await w({
                x: d,
                y: m,
                initialPlacement: o,
                placement: p,
                strategy: l,
                middlewareData: h,
                rects: u,
                platform: a,
                elements: {
                  reference: t,
                  floating: e
                }
              });
              d = null != v ? v : d, m = null != x ? x : m, h[y] = {
                ...h[y],
                ...b
              }, T && g < 50 && (g++, "object" == typeof T && (T.placement && (p = T.placement), T.rects && (u = !0 === T.rects ? await c.getElementRects({
                reference: t,
                floating: e,
                strategy: l
              }) : T.rects), ({
                x: d,
                y: m
              } = r(u, p, f))), n = -1)
            }
            return {
              x: d,
              y: m,
              placement: p,
              strategy: l,
              middlewareData: h
            }
          })(t, e, {
            ...l,
            platform: s
          })
        }
    },
    3213(t, e, n) {
      n.d(e, {
        we: () => u
      });
      var o = n(7015),
        r = n(3082),
        i = n(4017),
        l = "undefined" != typeof document ? r.useLayoutEffect : function() {};

      function s(t, e) {
        if (t === e) return !0;
        if (typeof t != typeof e) return !1;
        if ("function" == typeof t && t.toString() === e.toString()) return !0;
        let n, o, r;
        if (t && e && "object" == typeof t) {
          if (Array.isArray(t)) {
            if (n = t.length, n !== e.length) return !1;
            for (o = n; 0 !== o--;)
              if (!s(t[o], e[o])) return !1;
            return !0
          }
          if (r = Object.keys(t), n = r.length, n !== Object.keys(e).length) return !1;
          for (o = n; 0 !== o--;)
            if (!{}.hasOwnProperty.call(e, r[o])) return !1;
          for (o = n; 0 !== o--;) {
            const n = r[o];
            if (!("_owner" === n && t.$$typeof || s(t[n], e[n]))) return !1
          }
          return !0
        }
        return t != t && e != e
      }

      function c(t) {
        return "undefined" == typeof window ? 1 : (t.ownerDocument.defaultView || window).devicePixelRatio || 1
      }

      function a(t, e) {
        const n = c(t);
        return Math.round(e * n) / n
      }

      function f(t) {
        const e = r.useRef(t);
        return l(() => {
          e.current = t
        }), e
      }

      function u(t) {
        void 0 === t && (t = {});
        const {
          placement: e = "bottom",
          strategy: n = "absolute",
          middleware: u = [],
          platform: d,
          elements: {
            reference: m,
            floating: p
          } = {},
          transform: g = !0,
          whileElementsMounted: h,
          open: y
        } = t, [w, v] = r.useState({
          x: 0,
          y: 0,
          strategy: n,
          placement: e,
          middlewareData: {},
          isPositioned: !1
        }), [x, b] = r.useState(u);
        s(x, u) || b(u);
        const [T, R] = r.useState(null), [L, E] = r.useState(null), C = r.useCallback(t => {
          t !== S.current && (S.current = t, R(t))
        }, []), k = r.useCallback(t => {
          t !== P.current && (P.current = t, E(t))
        }, []), D = m || T, A = p || L, S = r.useRef(null), P = r.useRef(null), _ = r.useRef(w), O = null != h, V = f(h), B = f(d), M = f(y), j = r.useCallback(() => {
          if (!S.current || !P.current) return;
          const t = {
            placement: e,
            strategy: n,
            middleware: x
          };
          B.current && (t.platform = B.current), (0, o.rD)(S.current, P.current, t).then(t => {
            const e = {
              ...t,
              isPositioned: !1 !== M.current
            };
            I.current && !s(_.current, e) && (_.current = e, i.flushSync(() => {
              v(e)
            }))
          })
        }, [x, e, n, B, M]);
        l(() => {
          !1 === y && _.current.isPositioned && (_.current.isPositioned = !1, v(t => ({
            ...t,
            isPositioned: !1
          })))
        }, [y]);
        const I = r.useRef(!1);
        l(() => (I.current = !0, () => {
          I.current = !1
        }), []), l(() => {
          if (D && (S.current = D), A && (P.current = A), D && A) {
            if (V.current) return V.current(D, A, j);
            j()
          }
        }, [D, A, j, V, O]);
        const q = r.useMemo(() => ({
            reference: S,
            floating: P,
            setReference: C,
            setFloating: k
          }), [C, k]),
          z = r.useMemo(() => ({
            reference: D,
            floating: A
          }), [D, A]),
          F = r.useMemo(() => {
            const t = {
              position: n,
              left: 0,
              top: 0
            };
            if (!z.floating) return t;
            const e = a(z.floating, w.x),
              o = a(z.floating, w.y);
            return g ? {
              ...t,
              transform: "translate(" + e + "px, " + o + "px)",
              ...c(z.floating) >= 1.5 && {
                willChange: "transform"
              }
            } : {
              position: n,
              left: e,
              top: o
            }
          }, [n, g, z.floating, w.x, w.y]);
        return r.useMemo(() => ({
          ...w,
          update: j,
          refs: q,
          elements: z,
          floatingStyles: F
        }), [w, j, q, z, F])
      }
      n.d(e, ["BN", 0, (t, e) => {
        const n = (0, o.BN)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "ER", 0, (t, e) => ({
        fn: (0, o.ER)(t).fn,
        options: [t, e]
      }), "Ej", 0, (t, e) => {
        const n = (0, o.Ej)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "RK", 0, (t, e) => {
        const n = (0, o.RK)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "UE", 0, (t, e) => {
        const n = (t => ({
          name: "arrow",
          options: t,
          fn(e) {
            const {
              element: n,
              padding: r
            } = "function" == typeof t ? t(e) : t;
            return n && (i = n, {}.hasOwnProperty.call(i, "current")) ? null != n.current ? (0, o.UE)({
              element: n.current,
              padding: r
            }).fn(e) : {} : n ? (0, o.UE)({
              element: n,
              padding: r
            }).fn(e) : {};
            var i
          }
        }))(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "UU", 0, (t, e) => {
        const n = (0, o.UU)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "cY", 0, (t, e) => {
        const n = (0, o.cY)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "jD", 0, (t, e) => {
        const n = (0, o.jD)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }, "mG", 0, (t, e) => {
        const n = (0, o.mG)(t);
        return {
          name: n.name,
          fn: n.fn,
          options: [t, e]
        }
      }])
    },
    1538(t, e, n) {
      function o() {
        return "undefined" != typeof window
      }

      function r(t) {
        return s(t) ? (t.nodeName || "").toLowerCase() : "#document"
      }

      function i(t) {
        var e;
        return (null == t || null == (e = t.ownerDocument) ? void 0 : e.defaultView) || window
      }

      function l(t) {
        var e;
        return null == (e = (s(t) ? t.ownerDocument : t.document) || window.document) ? void 0 : e.documentElement
      }

      function s(t) {
        return !!o() && (t instanceof Node || t instanceof i(t).Node)
      }

      function c(t) {
        return !!o() && (t instanceof Element || t instanceof i(t).Element)
      }

      function a(t) {
        return !!o() && (t instanceof HTMLElement || t instanceof i(t).HTMLElement)
      }

      function f(t) {
        return !(!o() || "undefined" == typeof ShadowRoot) && (t instanceof ShadowRoot || t instanceof i(t).ShadowRoot)
      }

      function u(t) {
        const {
          overflow: e,
          overflowX: n,
          overflowY: o,
          display: r
        } = T(t);
        return /auto|scroll|overlay|hidden|clip/.test(e + o + n) && "inline" !== r && "contents" !== r
      }

      function d(t) {
        return /^(table|td|th)$/.test(r(t))
      }

      function m(t) {
        try {
          if (t.matches(":popover-open")) return !0
        } catch (t) {}
        try {
          return t.matches(":modal")
        } catch (t) {
          return !1
        }
      }
      n.d(e, {
        $4: () => L,
        CP: () => R,
        L9: () => T,
        Ll: () => s,
        Lv: () => d,
        Ng: () => f,
        Tc: () => x,
        Tf: () => m,
        ZU: () => u,
        _m: () => k,
        ep: () => l,
        eu: () => b,
        gJ: () => v,
        mq: () => r,
        sQ: () => w,
        sb: () => a,
        v9: () => C,
        vq: () => c,
        zk: () => i
      });
      const p = /transform|translate|scale|rotate|perspective|filter/,
        g = /paint|layout|strict|content/,
        h = t => !!t && "none" !== t;
      let y;

      function w(t) {
        const e = c(t) ? T(t) : t;
        return h(e.transform) || h(e.translate) || h(e.scale) || h(e.rotate) || h(e.perspective) || !x() && (h(e.backdropFilter) || h(e.filter)) || p.test(e.willChange || "") || g.test(e.contain || "")
      }

      function v(t) {
        let e = L(t);
        for (; a(e) && !b(e);) {
          if (w(e)) return e;
          if (m(e)) return null;
          e = L(e)
        }
        return null
      }

      function x() {
        return null == y && (y = "undefined" != typeof CSS && CSS.supports && CSS.supports("-webkit-backdrop-filter", "none")), y
      }

      function b(t) {
        return /^(html|body|#document)$/.test(r(t))
      }

      function T(t) {
        return i(t).getComputedStyle(t)
      }

      function R(t) {
        return c(t) ? {
          scrollLeft: t.scrollLeft,
          scrollTop: t.scrollTop
        } : {
          scrollLeft: t.scrollX,
          scrollTop: t.scrollY
        }
      }

      function L(t) {
        if ("html" === r(t)) return t;
        const e = t.assignedSlot || t.parentNode || f(t) && t.host || l(t);
        return f(e) ? e.host : e
      }

      function E(t) {
        const e = L(t);
        return b(e) ? (t.ownerDocument || t).body : a(e) && u(e) ? e : E(e)
      }

      function C(t, e, n) {
        var o;
        void 0 === e && (e = []), void 0 === n && (n = !0);
        const r = E(t),
          l = r === (null == (o = t.ownerDocument) ? void 0 : o.body),
          s = i(r);
        if (l) {
          const t = k(s);
          return e.concat(s, s.visualViewport || [], u(r) ? r : [], t && n ? C(t) : [])
        }
        return e.concat(r, C(r, [], n))
      }

      function k(t) {
        return t.parent && Object.getPrototypeOf(t.parent) ? t.frameElement : null
      }
    },
    5444(t, e, n) {
      n.d(e, {
        B1: () => A,
        C0: () => m,
        Dz: () => w,
        PG: () => g,
        Sg: () => p,
        TV: () => y,
        WJ: () => x,
        _3: () => d,
        aD: () => b,
        bV: () => k,
        lP: () => C,
        nI: () => D,
        qE: () => u,
        sq: () => h,
        w7: () => v
      });
      const o = ["top", "right", "bottom", "left"],
        r = ["start", "end"],
        i = o.reduce((t, e) => t.concat(e, e + "-" + r[0], e + "-" + r[1]), []),
        l = Math.min,
        s = Math.max,
        c = Math.round,
        a = Math.floor,
        f = {
          left: "right",
          right: "left",
          bottom: "top",
          top: "bottom"
        };

      function u(t, e, n) {
        return s(t, l(e, n))
      }

      function d(t, e) {
        return "function" == typeof t ? t(e) : t
      }

      function m(t) {
        return t.split("-")[0]
      }

      function p(t) {
        return t.split("-")[1]
      }

      function g(t) {
        return "x" === t ? "y" : "x"
      }

      function h(t) {
        return "y" === t ? "height" : "width"
      }

      function y(t) {
        const e = t[0];
        return "t" === e || "b" === e ? "y" : "x"
      }

      function w(t) {
        return g(y(t))
      }

      function v(t, e, n) {
        void 0 === n && (n = !1);
        const o = p(t),
          r = w(t),
          i = h(r);
        let l = "x" === r ? o === (n ? "end" : "start") ? "right" : "left" : "start" === o ? "bottom" : "top";
        return e.reference[i] > e.floating[i] && (l = k(l)), [l, k(l)]
      }

      function x(t) {
        const e = k(t);
        return [b(t), e, b(e)]
      }

      function b(t) {
        return t.includes("start") ? t.replace("start", "end") : t.replace("end", "start")
      }
      const T = ["left", "right"],
        R = ["right", "left"],
        L = ["top", "bottom"],
        E = ["bottom", "top"];

      function C(t, e, n, o) {
        const r = p(t);
        let i = function(t, e, n) {
          switch (t) {
            case "top":
            case "bottom":
              return n ? e ? R : T : e ? T : R;
            case "left":
            case "right":
              return e ? L : E;
            default:
              return []
          }
        }(m(t), "start" === n, o);
        return r && (i = i.map(t => t + "-" + r), e && (i = i.concat(i.map(b)))), i
      }

      function k(t) {
        const e = m(t);
        return f[e] + t.slice(e.length)
      }

      function D(t) {
        return "number" != typeof t ? function(t) {
          var e, n, o, r;
          return {
            top: null != (e = t.top) ? e : 0,
            right: null != (n = t.right) ? n : 0,
            bottom: null != (o = t.bottom) ? o : 0,
            left: null != (r = t.left) ? r : 0
          }
        }(t) : {
          top: t,
          right: t,
          bottom: t,
          left: t
        }
      }

      function A(t) {
        const {
          x: e,
          y: n,
          width: o,
          height: r
        } = t;
        return {
          width: o,
          height: r,
          top: n,
          left: e,
          right: e + o,
          bottom: n + r,
          x: e,
          y: n
        }
      }
      n.d(e, ["DD", 0, i, "Jx", 0, t => ({
        x: t,
        y: t
      }), "LI", 0, c, "RI", 0, a, "T9", 0, s, "jk", 0, l, "r_", 0, o])
    }
  }
]);