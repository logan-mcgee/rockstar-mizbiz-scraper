try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3c0e322d-9105-46e5-8a33-2607db4d8b66", e._sentryDebugIdIdentifier = "sentry-dbid-3c0e322d-9105-46e5-8a33-2607db4d8b66")
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
  [9757], {
    54446() {
      ! function() {
        if ("navigate" in window) return;
        const e = {
          37: "left",
          38: "up",
          39: "right",
          40: "down"
        };
        let t = null,
          n = null,
          o = {
            element: null,
            rect: null
          },
          i = null;

        function r(e) {
          const t = function() {
            let e = document.activeElement;
            if (!e || e === document.body && !document.querySelector(":focus")) {
              if (o.element && e !== o.element) {
                const t = window.getComputedStyle(o.element, null),
                  n = ["hidden", "collapse"];
                if (o.element.disabled || n.includes(t.getPropertyValue("visibility"))) return e = o.element, e
              }
              e = document.documentElement
            }
            if (!o.element || 0 !== B(o.element).height && 0 !== B(o.element).width || (i = o.rect), !M(e)) {
              const t = m(e);
              if (t && (t === window || "auto" === w(t))) return t
            }
            return e
          }();
          let r = t,
            u = null;
          n && (u = document.elementFromPoint(n.x, n.y), null === u && (u = document.body), R(u) && !b(u) ? n = null : r = b(u) ? u : u.getSpatialNavigationContainer()), r !== document && r !== document.documentElement || (r = document.body || document.documentElement);
          let s = null;
          if ((b(r) || "BODY" === r.nodeName) && "INPUT" !== r.nodeName) {
            "IFRAME" === r.nodeName && (r = r.contentDocument.documentElement), s = r;
            let n = null;
            if (document.activeElement === t || document.activeElement === document.body && t === document.documentElement) {
              if ("scroll" === w(r)) {
                if (l(r, e)) return
              } else if ("focus" === w(r)) {
                if (n = r.spatialNavigationSearch(e, {
                    container: r,
                    candidates: c(r, {
                      mode: "all"
                    })
                  }), a(n, e)) return
              } else if ("auto" === w(r) && (n = r.spatialNavigationSearch(e, {
                  container: r
                }), a(n, e) || l(r, e))) return
            } else s = s.getSpatialNavigationContainer()
          }
          s = r.getSpatialNavigationContainer();
          let d = s.parentElement ? s.getSpatialNavigationContainer() : null;
          if (d || window.location === window.parent.location || (d = window.parent.document.documentElement), "scroll" === w(s)) {
            if (l(s, e)) return
          } else "focus" === w(s) ? h(r, s, d, e, "all") : "auto" === w(s) && h(r, s, d, e, "visible")
        }

        function a(e, t) {
          if (e) {
            if (!g("beforefocus", e, null, t)) return !0;
            const o = e.getSpatialNavigationContainer();
            return o !== window && "focus" === w(o) ? e.focus() : e.focus({
              preventScroll: !0
            }), n = null, !0
          }
          return !1
        }

        function l(e, t) {
          return N(e, t) && !P(e, t) ? (v(e, t), !0) : !e.parentElement && !C(e, t) && (v(e.ownerDocument.documentElement, t), !0)
        }

        function c(e, t = {
          mode: "visible"
        }) {
          let n = [];
          if (e.childElementCount > 0) {
            e.parentElement || (e = e.getElementsByTagName("body")[0] || document.body);
            const t = e.children;
            for (const e of t) y(e) ? n.push(e) : R(e) ? (n.push(e), !b(e) && e.childElementCount && (n = n.concat(c(e, {
              mode: "all"
            })))) : e.childElementCount && (n = n.concat(c(e, {
              mode: "all"
            })))
          }
          return "all" === t.mode ? n : n.filter(T)
        }

        function u(e, t, n, o) {
          const i = e;
          return o = o || i.getSpatialNavigationContainer(), s(i, n = !n || n.length <= 0 ? c(o) : n, t, o)
        }

        function s(e, t, n, o) {
          const r = e.getSpatialNavigationContainer();
          let a;
          return void 0 === n ? t : (a = r.parentElement && o !== r && !T(e) ? B(r) : i || B(e), !b(e) && "BODY" !== e.nodeName || "INPUT" === e.nodeName ? t.filter(t => {
            const i = B(t),
              r = "IFRAME" === t.nodeName ? t.contentDocument.body : null;
            return o.contains(t) && t !== e && r !== e && I(i, a, n) && !k(a, i)
          }) : t.filter(t => {
            const i = B(t);
            return o.contains(t) && (e.contains(t) && k(a, i) && t !== e || I(i, a, n))
          }))
        }

        function d(e, t, n) {
          const o = e.getSpatialNavigationContainer(),
            r = getComputedStyle(o).getPropertyValue("--spatial-navigation-function"),
            a = i || B(e);
          let l, c;
          return "grid" === r ? (c = t.filter(e => O(a, B(e), n)), c.length > 0 && (t = c), l = V) : l = j, f(e, t, n, l)
        }

        function f(e, t, n, o) {
          let r = null;
          window.location === window.parent.location || "BODY" !== e.nodeName && "HTML" !== e.nodeName ? r = i || e.getBoundingClientRect() : (r = window.frameElement.getBoundingClientRect(), r.x = 0, r.y = 0);
          let a = Number.POSITIVE_INFINITY,
            l = [];
          if (t)
            for (let e = 0; e < t.length; e++) {
              const i = o(r, B(t[e]), n);
              i < a ? (a = i, l = [t[e]]) : i === a && l.push(t[e])
            }
          return 0 === l.length ? null : l.length > 1 && o === V ? f(e, l, n, K) : l[0]
        }

        function m(e) {
          let t = e;
          do {
            if (!t.parentElement) {
              t = window.location !== window.parent.location ? window.parent.document.documentElement : window.document.documentElement;
              break
            }
            t = t.parentElement
          } while (!E(t) || !T(t));
          return t !== document && t !== document.documentElement || (t = window), t
        }

        function g(e, t, n, o) {
          if (["beforefocus", "notarget"].includes(e)) {
            const i = new CustomEvent("nav" + e, {
              bubbles: !0,
              cancelable: !0,
              detail: {
                causedTarget: n,
                dir: o
              }
            });
            return t.dispatchEvent(i)
          }
        }

        function p(e, t) {
          return e.style.getPropertyValue(`--${t}`).trim()
        }

        function w(e) {
          return p(e, "spatial-navigation-action") || "auto"
        }

        function h(e, t, n, o, i) {
          let r = {
            candidates: c(t, {
              mode: i
            }),
            container: t
          };
          for (; n;) {
            if (a(e.spatialNavigationSearch(o, r), o)) return;
            if ("visible" === i && l(t, o)) return; {
              if (!g("notarget", t, e, o)) return;
              t === document || t === document.documentElement ? window.location !== window.parent.location && (t = (e = window.frameElement).ownerDocument.documentElement) : t = n, r = {
                candidates: c(t, {
                  mode: i
                }),
                container: t
              };
              let a = t.getSpatialNavigationContainer();
              n = a !== t ? a : null
            }
          }
          r = {
            candidates: c(t, {
              mode: i
            }),
            container: t
          }, !n && t && a(e.spatialNavigationSearch(o, r), o) || g("notarget", r.container, e, o) && ("auto" !== w(t) || "visible" !== i || l(t, o))
        }

        function v(e, t, n = 0) {
          if (e) switch (t) {
            case "left":
              e.scrollLeft -= 40 + n;
              break;
            case "right":
              e.scrollLeft += 40 + n;
              break;
            case "up":
              e.scrollTop -= 40 + n;
              break;
            case "down":
              e.scrollTop += 40 + n
          }
        }

        function b(e) {
          return !e.parentElement || "IFRAME" === e.nodeName || E(e) || function(e) {
            return "contain" === p(e, "spatial-navigation-contain")
          }(e)
        }

        function y(e) {
          return "delegable" === p(e, "spatial-navigation-contain")
        }

        function E(e) {
          const t = window.getComputedStyle(e, null),
            n = t.getPropertyValue("overflow-x"),
            o = t.getPropertyValue("overflow-y");
          return !!("visible" !== n && "clip" !== n && x(e, "left") || "visible" !== o && "clip" !== o && x(e, "down"))
        }

        function N(e, t) {
          if (e && "object" == typeof e) {
            if (t && "string" == typeof t) {
              if (x(e, t)) {
                const n = window.getComputedStyle(e, null),
                  o = n.getPropertyValue("overflow-x"),
                  i = n.getPropertyValue("overflow-y");
                switch (t) {
                  case "left":
                  case "right":
                    return "visible" !== o && "clip" !== o && "hidden" !== o;
                  case "up":
                  case "down":
                    return "visible" !== i && "clip" !== i && "hidden" !== i
                }
              }
              return !1
            }
            return "HTML" === e.nodeName || "BODY" === e.nodeName || E(e) && x(e)
          }
        }

        function x(e, t) {
          if (e && "object" == typeof e) {
            if (!t || "string" != typeof t) return e.scrollWidth > e.clientWidth || e.scrollHeight > e.clientHeight;
            switch (t) {
              case "left":
              case "right":
                return e.scrollWidth > e.clientWidth;
              case "up":
              case "down":
                return e.scrollHeight > e.clientHeight
            }
            return !1
          }
        }

        function C(e, t) {
          let n = !1;
          switch (t) {
            case "left":
              n = 0 === e.scrollLeft;
              break;
            case "right":
              n = e.scrollWidth - e.scrollLeft - e.clientWidth === 0;
              break;
            case "up":
              n = 0 === e.scrollTop;
              break;
            case "down":
              n = e.scrollHeight - e.scrollTop - e.clientHeight === 0
          }
          return n
        }

        function P(e, t) {
          if (N(e, t)) {
            const n = e.scrollTop,
              o = e.scrollLeft,
              i = e.scrollHeight - e.clientHeight,
              r = e.scrollWidth - e.clientWidth;
            switch (t) {
              case "left":
                return 0 === o;
              case "right":
                return Math.abs(o - r) <= 1;
              case "up":
                return 0 === n;
              case "down":
                return Math.abs(n - i) <= 1
            }
          }
          return !1
        }

        function M(e) {
          const t = e.getBoundingClientRect();
          let n = m(e),
            o = null;
          return o = n !== window ? B(n) : new DOMRect(0, 0, window.innerWidth, window.innerHeight), !(!k(o, t) || !k(o, t))
        }

        function R(e) {
          return !(e.tabIndex < 0 || function(e) {
            return "A" === e.tagName && null === e.getAttribute("href") && null === e.getAttribute("tabIndex")
          }(e) || function(e) {
            return !!["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTGROUP", "OPTION", "FIELDSET"].includes(e.tagName) && e.disabled
          }(e) || function(e) {
            return e.inert && !e.ownerDocument.documentElement.inert
          }(e) || ! function(e) {
            return !!S(e.parentElement) && !(!S(e) || "0" === e.style.opacity || "0px" === window.getComputedStyle(e).height || "0px" === window.getComputedStyle(e).width)
          }(e)) && (!!(!e.parentElement || N(e) && x(e) || e.tabIndex >= 0) || void 0)
        }

        function T(e) {
          return !e.parentElement || S(e) && function(e) {
            const t = B(e);
            if ("IFRAME" !== e.nodeName && (t.top < 0 || t.left < 0 || t.top > e.ownerDocument.documentElement.clientHeight || t.left > e.ownerDocument.documentElement.clientWidth)) return !1;
            let n = parseInt(e.offsetWidth) / 10,
              o = parseInt(e.offsetHeight) / 10;
            n = isNaN(n) ? 1 : n, o = isNaN(o) ? 1 : o;
            const i = {
              middle: [(t.left + t.right) / 2, (t.top + t.bottom) / 2],
              leftTop: [t.left + n, t.top + o],
              rightBottom: [t.right - n, t.bottom - o]
            };
            for (const t in i) {
              const n = e.ownerDocument.elementFromPoint(...i[t]);
              if (e === n || e.contains(n)) return !0
            }
            return !1
          }(e)
        }

        function _(e, t) {
          const n = B(e),
            o = B(t || e.getSpatialNavigationContainer());
          return !(n.left < o.left || n.right > o.right || n.top < o.top || n.bottom > o.bottom)
        }

        function S(e) {
          const t = window.getComputedStyle(e, null),
            n = t.getPropertyValue("visibility");
          return "none" !== t.getPropertyValue("display") && !["hidden", "collapse"].includes(n)
        }

        function k(e, t) {
          const n = e.left <= t.right && e.right >= t.right,
            o = e.left <= t.left && e.right >= t.left,
            i = e.top <= t.top && e.bottom >= t.top,
            r = e.top <= t.bottom && e.bottom >= t.bottom;
          return (n || o) && (i || r)
        }

        function I(e, t, n) {
          switch (n) {
            case "left":
              return A(t, e);
            case "right":
              return A(e, t);
            case "up":
              return D(t, e);
            case "down":
              return D(e, t);
            default:
              return !1
          }
        }

        function A(e, t) {
          return e.left >= t.right || e.left >= t.left && e.right > t.right && e.bottom > t.top && e.top < t.bottom
        }

        function D(e, t) {
          return e.top >= t.bottom || e.top >= t.top && e.bottom > t.bottom && e.left < t.right && e.right > t.left
        }

        function O(e, t, n) {
          switch (n) {
            case "left":
            case "right":
              return e.bottom > t.top && e.top < t.bottom;
            case "up":
            case "down":
              return e.right > t.left && e.left < t.right;
            default:
              return !1
          }
        }

        function F(e, t, o) {
          const i = W(o, n, t),
            r = Math.abs(i.entryPoint.x - i.exitPoint.x),
            a = Math.abs(i.entryPoint.y - i.exitPoint.y);
          return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2))
        }

        function L(e, t, n) {
          const o = {
            left: "right",
            right: "left",
            up: "bottom",
            down: "top"
          } [n];
          return Math.abs(e[o] - t[o])
        }

        function j(e, t, n) {
          let o = 0,
            i = 0;
          const r = W(n, e, t),
            a = Math.abs(r.entryPoint.x - r.exitPoint.x),
            l = Math.abs(r.entryPoint.y - r.exitPoint.y),
            c = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2));
          let u, s;
          const d = function(e, t) {
              const n = {
                  width: 0,
                  height: 0,
                  area: 0
                },
                o = [Math.max(e.left, t.left), Math.max(e.top, t.top)],
                i = [Math.min(e.right, t.right), Math.min(e.bottom, t.bottom)];
              return n.width = Math.abs(o[0] - i[0]), n.height = Math.abs(o[1] - i[1]), o[0] >= i[0] || o[1] >= i[1] || (n.area = Math.sqrt(n.width * n.height)), n
            }(e, t),
            f = d.area;
          switch (n) {
            case "left":
            case "right":
              O(e, t, n) ? i = Math.min(d.height / e.height, 1) : o = e.height / 2, u = 30 * (l + o), s = 5 * i;
              break;
            case "up":
            case "down":
              O(e, t, n) ? i = Math.min(d.width / e.width, 1) : o = e.width / 2, u = 2 * (a + o), s = 5 * i;
              break;
            default:
              u = 0, s = 0
          }
          return c + u - s - f
        }

        function K(e, t, n) {
          const o = W(n, e, t),
            i = Math.abs(o.entryPoint.x - o.exitPoint.x),
            r = Math.abs(o.entryPoint.y - o.exitPoint.y);
          return Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2))
        }

        function V(e, t, n) {
          const o = W(n, e, t);
          return "left" === n || "right" === n ? Math.abs(o.entryPoint.x - o.exitPoint.x) : Math.abs(o.entryPoint.y - o.exitPoint.y)
        }

        function W(e = "down", t, o) {
          const i = {
            entryPoint: {
              x: 0,
              y: 0
            },
            exitPoint: {
              x: 0,
              y: 0
            }
          };
          if (n) {
            switch (i.exitPoint = t, e) {
              case "left":
                i.entryPoint.x = o.right;
                break;
              case "up":
                i.entryPoint.y = o.bottom;
                break;
              case "right":
                i.entryPoint.x = o.left;
                break;
              case "down":
                i.entryPoint.y = o.top
            }
            switch (e) {
              case "left":
              case "right":
                n.y <= o.top ? i.entryPoint.y = o.top : n.y < o.bottom ? i.entryPoint.y = n.y : i.entryPoint.y = o.bottom;
                break;
              case "up":
              case "down":
                n.x <= o.left ? i.entryPoint.x = o.left : n.x < o.right ? i.entryPoint.x = n.x : i.entryPoint.x = o.right
            }
          } else {
            switch (e) {
              case "left":
                i.exitPoint.x = t.left, i.entryPoint.x = o.right < t.left ? o.right : t.left;
                break;
              case "up":
                i.exitPoint.y = t.top, i.entryPoint.y = o.bottom < t.top ? o.bottom : t.top;
                break;
              case "right":
                i.exitPoint.x = t.right, i.entryPoint.x = o.left > t.right ? o.left : t.right;
                break;
              case "down":
                i.exitPoint.y = t.bottom, i.entryPoint.y = o.top > t.bottom ? o.top : t.bottom
            }
            switch (e) {
              case "left":
              case "right":
                D(t, o) ? (i.exitPoint.y = t.top, i.entryPoint.y = o.bottom < t.top ? o.bottom : t.top) : D(o, t) ? (i.exitPoint.y = t.bottom, i.entryPoint.y = o.top > t.bottom ? o.top : t.bottom) : (i.exitPoint.y = Math.max(t.top, o.top), i.entryPoint.y = i.exitPoint.y);
                break;
              case "up":
              case "down":
                A(t, o) ? (i.exitPoint.x = t.left, i.entryPoint.x = o.right < t.left ? o.right : t.left) : A(o, t) ? (i.exitPoint.x = t.right, i.entryPoint.x = o.left > t.right ? o.left : t.right) : (i.exitPoint.x = Math.max(t.left, o.left), i.entryPoint.x = i.exitPoint.x)
            }
          }
          return i
        }

        function B(e) {
          let n = t && t.get(e);
          if (!n) {
            const o = e.getBoundingClientRect();
            n = {
              top: Number(o.top.toFixed(2)),
              right: Number(o.right.toFixed(2)),
              bottom: Number(o.bottom.toFixed(2)),
              left: Number(o.left.toFixed(2)),
              width: Number(o.width.toFixed(2)),
              height: Number(o.height.toFixed(2))
            }, t && t.set(e, n)
          }
          return n
        }

        function H(e) {
          const t = window.__spatialNavigation__ && window.__spatialNavigation__.keyMode;
          window.__spatialNavigation__ = !1 === e ? U() : Object.assign(U(), function() {
            function e(e, t) {
              return N(e, t) && !P(e, t) || !e.parentElement && !C(e, t)
            }

            function t(t, n, o, i) {
              let r = n,
                a = null;
              if (r !== document && r !== document.documentElement || (r = document.body || document.documentElement), (b(r) || "BODY" === r.nodeName) && "INPUT" !== r.nodeName) {
                "IFRAME" === r.nodeName && (r = r.contentDocument.body);
                const n = c(r, i);
                if (Array.isArray(n) && n.length > 0) return t ? u(r, o, n) : r.spatialNavigationSearch(o, {
                  candidates: n
                });
                if (e(r, o)) return t ? [] : r
              }
              let l = r.getSpatialNavigationContainer(),
                d = l.parentElement ? l.getSpatialNavigationContainer() : null;
              for (d || window.location === window.parent.location || (d = window.parent.document.documentElement); d;) {
                const n = s(r, c(l, i), o, l);
                if (Array.isArray(n) && n.length > 0) {
                  if (a = r.spatialNavigationSearch(o, {
                      candidates: n,
                      container: l
                    }), a) return t ? n : a
                } else {
                  if (e(l, o)) return t ? [] : r;
                  if (l === document || l === document.documentElement) {
                    if (l = window.document.documentElement, window.location !== window.parent.location) {
                      if (r = window.frameElement, l = window.parent.document.documentElement, !l.parentElement) {
                        d = null;
                        break
                      }
                      d = l.getSpatialNavigationContainer()
                    }
                  } else {
                    if (R(l) && (r = l), l = d, !l.parentElement) {
                      d = null;
                      break
                    }
                    d = l.getSpatialNavigationContainer()
                  }
                }
              }
              if (!d && l) {
                const e = s(r, c(l, i), o, l);
                if (Array.isArray(e) && e.length > 0 && (a = r.spatialNavigationSearch(o, {
                    candidates: e,
                    container: l
                  }), a)) return t ? e : a
              }
              if (e(l, o)) return a = r, a
            }
            return {
              isContainer: b,
              isScrollContainer: E,
              isVisibleInScroller: M,
              findCandidates: t.bind(null, !0),
              findNextTarget: t.bind(null, !1),
              getDistanceFromTarget: (e, t, n) => (b(e) || "BODY" === e.nodeName) && "INPUT" !== e.nodeName && c(e).includes(t) ? L(B(e), B(t), n) : j(B(e), B(t), n)
            }
          }()), window.__spatialNavigation__.keyMode = t, Object.seal(window.__spatialNavigation__)
        }

        function U() {
          return {
            enableExperimentalAPIs: H,
            get keyMode() {
              return this._keymode ? this._keymode : "ARROW"
            },
            set keyMode(e) {
              this._keymode = ["SHIFTARROW", "ARROW", "NONE"].includes(e) ? e : "ARROW"
            },
            setStartingPoint: function(e, t) {
              n = e && t ? {
                x: e,
                y: t
              } : null
            }
          }
        }
        window.navigate = r, window.Element.prototype.spatialNavigationSearch = function(e, t) {
          const o = this;
          let r, a = [],
            l = [],
            s = function(e) {
              const t = e.getSpatialNavigationContainer().focusableAreas(),
                n = [];
              return t.forEach(t => {
                e !== t && _(t, e) && n.push(t)
              }), n
            }(o);
          t || (t = {});
          const m = o.getSpatialNavigationContainer();
          let g = c(m);
          const p = t.container || m;
          t.container && m.contains(t.container) && (g = g.concat(c(p)));
          const w = t.candidates && t.candidates.length > 0 ? t.candidates.filter(e => p.contains(e)) : g.filter(e => p.contains(e) && p !== e);
          if (w && w.length > 0) {
            w.forEach(e => {
              e !== o && (o.contains(e) && o !== e ? a : l).push(e)
            });
            let t = s.filter(e => !a.includes(e)),
              m = w.filter(e => b(e) && _(o, e)).map(e => e.focusableAreas()).flat().filter(e => e !== o);
            if (a = a.concat(t).filter(e => p.contains(e)), l = l.concat(m).filter(e => p.contains(e)), l.length > 0 && (l = u(o, e, l, p)), i && (r = d(o, u(o, e, a, p), e)), a && a.length > 0 && "INPUT" !== o.nodeName && (r = function(e, t, o) {
                return f(e, t, o, n ? F : L)
              }(o, a, e)), r = r || d(o, l, e), r && y(r)) {
              const t = c(r, {
                  mode: "all"
                }),
                n = t.length > 0 ? o.spatialNavigationSearch(e, {
                  candidates: t,
                  container: r
                }) : null;
              n ? r = n : R(r) || (w.splice(w.indexOf(r), 1), r = w.length ? o.spatialNavigationSearch(e, {
                candidates: w,
                container: p
              }) : null)
            }
            return r
          }
          return null
        }, window.Element.prototype.focusableAreas = function(e = {
          mode: "visible"
        }) {
          const t = this.parentElement ? this : document.body,
            n = Array.prototype.filter.call(t.getElementsByTagName("*"), R);
          return "all" === e.mode ? n : n.filter(T)
        }, window.Element.prototype.getSpatialNavigationContainer = function() {
          let e = this;
          do {
            if (!e.parentElement) {
              e = window.location !== window.parent.location ? window.parent.document.documentElement : window.document.documentElement;
              break
            }
            e = e.parentElement
          } while (!b(e));
          return e
        }, window.CSS && CSS.registerProperty && ("" === window.getComputedStyle(document.documentElement).getPropertyValue("--spatial-navigation-contain") && CSS.registerProperty({
          name: "--spatial-navigation-contain",
          syntax: "auto | contain",
          inherits: !1,
          initialValue: "auto"
        }), "" === window.getComputedStyle(document.documentElement).getPropertyValue("--spatial-navigation-action") && CSS.registerProperty({
          name: "--spatial-navigation-action",
          syntax: "auto | focus | scroll",
          inherits: !1,
          initialValue: "auto"
        }), "" === window.getComputedStyle(document.documentElement).getPropertyValue("--spatial-navigation-function") && CSS.registerProperty({
          name: "--spatial-navigation-function",
          syntax: "normal | grid",
          inherits: !1,
          initialValue: "normal"
        })), H(!1), window.addEventListener("load", () => {
          window.addEventListener("keydown", o => {
            const i = parent && parent.__spatialNavigation__.keyMode || window.__spatialNavigation__.keyMode,
              a = document.activeElement,
              l = e[o.keyCode];
            if (9 === o.keyCode && (n = null), !(!i || "NONE" === i || "SHIFTARROW" === i && !o.shiftKey || "ARROW" === i && o.shiftKey || o.defaultPrevented)) {
              let i = {
                left: !0,
                up: !0,
                right: !0,
                down: !0
              };
              "INPUT" !== a.nodeName && "TEXTAREA" !== a.nodeName || (i = function(t) {
                const n = document.activeElement,
                  o = n.selectionStart,
                  i = n.selectionEnd,
                  r = {
                    left: !1,
                    up: !1,
                    right: !1,
                    down: !1
                  },
                  a = e[t.keyCode];
                return void 0 === a || (["email", "date", "month", "number", "time", "week"].includes(n.getAttribute("type")) && ("up" === a || "down" === a) || !["password", "text", "search", "tel", "url", null].includes(n.getAttribute("type")) && "TEXTAREA" !== n.nodeName ? r[a] = !0 : o === i && (0 === o && (r.left = !0, r.up = !0), i === n.value.length && (r.right = !0, r.down = !0))), r
              }(o)), i[l] && (o.preventDefault(), t = new Map, r(l), t = null, n = null)
            }
          }), document.addEventListener("mouseup", e => {
            n = {
              x: e.clientX,
              y: e.clientY
            }
          }), window.addEventListener("focusin", e => {
            e.target !== window && (o.element = e.target, o.rect = e.target.getBoundingClientRect())
          })
        })
      }()
    },
    84390(e, t, n) {
      "use strict";
      n.d(t, {
        m: () => o.m
      });
      var o = n(14414)
    },
    40147(e, t, n) {
      "use strict";
      n.d(t, {
        B8: () => ae,
        N_: () => ue,
        UC: () => se,
        bL: () => re,
        l9: () => ce,
        q7: () => le
      });
      var o = n(93082),
        i = (n(84017), n(72579)),
        r = n(44752),
        a = n(41988),
        l = n(15782),
        c = n(85049),
        u = n(12430),
        s = n(81432),
        d = n(88918),
        f = n(97620),
        m = n(78077),
        g = n(19046),
        p = n(9608),
        w = n(7198),
        h = n(94299),
        v = n(39793),
        b = Object.defineProperty,
        y = (e, t) => b(e, "name", {
          value: t,
          configurable: !0
        }),
        E = "NavigationMenu",
        [N, x, C] = (0, f.N)(E),
        [P, M, R] = (0, f.N)(E),
        [T, _] = (0, i.A)(E, [C, R]),
        [S, k] = T(E),
        [I, A] = T(E),
        D = o.forwardRef(y(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            value: i,
            onValueChange: r,
            defaultValue: s,
            delayDuration: d = 200,
            skipDelayDuration: f = 300,
            orientation: m = "horizontal",
            dir: g,
            ...p
          } = e, [w, h] = o.useState(null), b = (0, c.s)(t, h), N = (0, u.jH)(g), x = o.useRef(0), C = o.useRef(0), P = o.useRef(0), [M, R] = o.useState(!0), [T, _] = (0, l.i)({
            prop: i,
            onChange: y(e => {
              const t = f > 0;
              "" !== e ? (window.clearTimeout(P.current), t && R(!1)) : (window.clearTimeout(P.current), P.current = window.setTimeout(() => R(!0), f)), r?.(e)
            }, "onChange"),
            defaultProp: s ?? "",
            caller: E
          }), S = o.useCallback(() => {
            window.clearTimeout(C.current), C.current = window.setTimeout(() => _(""), 150)
          }, [_]), k = o.useCallback(e => {
            window.clearTimeout(C.current), _(e)
          }, [_]), I = o.useCallback(e => {
            T === e ? window.clearTimeout(C.current) : x.current = window.setTimeout(() => {
              window.clearTimeout(C.current), _(e)
            }, d)
          }, [T, _, d]);
          return o.useEffect(() => () => {
            window.clearTimeout(x.current), window.clearTimeout(C.current), window.clearTimeout(P.current)
          }, []), (0, v.jsx)(O, {
            scope: n,
            isRootMenu: !0,
            value: T,
            dir: N,
            orientation: m,
            rootNavigationMenu: w,
            onTriggerEnter: e => {
              window.clearTimeout(x.current), M ? I(e) : k(e)
            },
            onTriggerLeave: () => {
              window.clearTimeout(x.current), S()
            },
            onContentEnter: () => window.clearTimeout(C.current),
            onContentLeave: S,
            onItemSelect: e => {
              _(t => t === e ? "" : e)
            },
            onItemDismiss: () => _(""),
            children: (0, v.jsx)(a.sG.nav, {
              "aria-label": "Main",
              "data-orientation": m,
              dir: N,
              ...p,
              ref: b
            })
          })
        }, "NavigationMenu")),
        O = y(e => {
          const {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: i,
            dir: r,
            orientation: a,
            children: l,
            value: c,
            onItemSelect: u,
            onItemDismiss: s,
            onTriggerEnter: f,
            onTriggerLeave: m,
            onContentEnter: p,
            onContentLeave: h
          } = e, [b, y] = o.useState(null), [E, x] = o.useState(new Map), [C, P] = o.useState(null);
          return (0, v.jsx)(S, {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: i,
            value: c,
            previousValue: (0, g.Z)(c),
            baseId: (0, d.B)(),
            dir: r,
            orientation: a,
            viewport: b,
            onViewportChange: y,
            indicatorTrack: C,
            onIndicatorTrackChange: P,
            onTriggerEnter: (0, w.c)(f),
            onTriggerLeave: (0, w.c)(m),
            onContentEnter: (0, w.c)(p),
            onContentLeave: (0, w.c)(h),
            onItemSelect: (0, w.c)(u),
            onItemDismiss: (0, w.c)(s),
            onViewportContentChange: o.useCallback((e, t) => {
              x(n => (n.set(e, t), new Map(n)))
            }, []),
            onViewportContentRemove: o.useCallback(e => {
              x(t => t.has(e) ? (t.delete(e), new Map(t)) : t)
            }, []),
            children: (0, v.jsx)(N.Provider, {
              scope: t,
              children: (0, v.jsx)(I, {
                scope: t,
                items: E,
                children: l
              })
            })
          })
        }, "NavigationMenuProvider"),
        F = o.forwardRef(y(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, i = k("NavigationMenuList", n), r = (0, v.jsx)(a.sG.ul, {
            "data-orientation": i.orientation,
            ...o,
            ref: t
          });
          return (0, v.jsx)(a.sG.div, {
            style: {
              position: "relative"
            },
            ref: i.onIndicatorTrackChange,
            children: (0, v.jsx)(N.Slot, {
              scope: n,
              children: i.isRootMenu ? (0, v.jsx)(z, {
                asChild: !0,
                children: r
              }) : r
            })
          })
        }, "NavigationMenuList")),
        [L, j] = T("NavigationMenuItem"),
        K = o.forwardRef(y(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            value: i,
            ...r
          } = e, l = (0, d.B)(), c = i || l || "LEGACY_REACT_AUTO_VALUE", u = o.useRef(null), s = o.useRef(null), f = o.useRef(null), m = o.useRef(() => {}), g = o.useRef(!1), p = o.useCallback((e = "start") => {
            if (u.current) {
              m.current();
              const t = J(u.current);
              t.length && Q("start" === e ? t : t.reverse())
            }
          }, []), w = o.useCallback(() => {
            if (u.current) {
              const e = J(u.current);
              e.length && (m.current = ee(e))
            }
          }, []);
          return (0, v.jsx)(L, {
            scope: n,
            value: c,
            triggerRef: s,
            contentRef: u,
            focusProxyRef: f,
            wasEscapeCloseRef: g,
            onEntryKeyDown: p,
            onFocusProxyEnter: p,
            onRootContentClose: w,
            onContentFocusOutside: w,
            children: (0, v.jsx)(a.sG.li, {
              ...r,
              ref: t
            })
          })
        }, "NavigationMenuItem")),
        V = "NavigationMenuTrigger",
        W = o.forwardRef(y(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            disabled: i,
            ...l
          } = e, u = k(V, e.__scopeNavigationMenu), s = j(V, e.__scopeNavigationMenu), d = o.useRef(null), f = (0, c.s)(d, s.triggerRef, t), m = ne(u.baseId, s.value), g = oe(u.baseId, s.value), p = o.useRef(!1), w = o.useRef(!1), b = s.value === u.value;
          return (0, v.jsxs)(v.Fragment, {
            children: [(0, v.jsx)(N.ItemSlot, {
              scope: n,
              value: s.value,
              children: (0, v.jsx)(Z, {
                asChild: !0,
                children: (0, v.jsx)(a.sG.button, {
                  id: m,
                  disabled: i,
                  "data-disabled": i ? "" : void 0,
                  "data-state": te(b),
                  "aria-expanded": b,
                  "aria-controls": b ? g : void 0,
                  ...l,
                  ref: f,
                  onPointerEnter: (0, r.mK)(e.onPointerEnter, () => {
                    w.current = !1, s.wasEscapeCloseRef.current = !1
                  }),
                  onPointerMove: (0, r.mK)(e.onPointerMove, ie(() => {
                    i || w.current || s.wasEscapeCloseRef.current || p.current || (u.onTriggerEnter(s.value), p.current = !0)
                  })),
                  onPointerLeave: (0, r.mK)(e.onPointerLeave, ie(() => {
                    i || (u.onTriggerLeave(), p.current = !1)
                  })),
                  onClick: (0, r.mK)(e.onClick, () => {
                    u.onItemSelect(s.value), w.current = b
                  }),
                  onKeyDown: (0, r.mK)(e.onKeyDown, e => {
                    const t = {
                      horizontal: "ArrowDown",
                      vertical: "rtl" === u.dir ? "ArrowLeft" : "ArrowRight"
                    } [u.orientation];
                    b && e.key === t && (s.onEntryKeyDown(), e.preventDefault())
                  })
                })
              })
            }), b && (0, v.jsxs)(v.Fragment, {
              children: [(0, v.jsx)(h.bL, {
                "aria-hidden": !0,
                tabIndex: 0,
                ref: s.focusProxyRef,
                onFocus: e => {
                  const t = s.contentRef.current,
                    n = e.relatedTarget,
                    o = n === d.current,
                    i = t?.contains(n);
                  !o && i || s.onFocusProxyEnter(o ? "start" : "end")
                }
              }), u.viewport && (0, v.jsx)("span", {
                "aria-owns": g
              })]
            })]
          })
        }, "NavigationMenuTrigger")),
        B = "navigationMenu.linkSelect",
        H = o.forwardRef(y(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            active: o,
            onSelect: i,
            ...l
          } = e;
          return (0, v.jsx)(Z, {
            asChild: !0,
            children: (0, v.jsx)(a.sG.a, {
              "data-active": o ? "" : void 0,
              "aria-current": o ? "page" : void 0,
              ...l,
              ref: t,
              onClick: (0, r.mK)(e.onClick, e => {
                const t = e.target,
                  n = new CustomEvent(B, {
                    bubbles: !0,
                    cancelable: !0
                  });
                if (t.addEventListener(B, e => i?.(e), {
                    once: !0
                  }), (0, a.hO)(t, n), !n.defaultPrevented && !e.metaKey) {
                  const e = new CustomEvent(q, {
                    bubbles: !0,
                    cancelable: !0
                  });
                  (0, a.hO)(t, e)
                }
              }, {
                checkForDefaultPrevented: !1
              })
            })
          })
        }, "NavigationMenuLink")),
        U = "NavigationMenuContent",
        G = o.forwardRef(y(function(e, t) {
          const {
            forceMount: n,
            ...o
          } = e, i = k(U, e.__scopeNavigationMenu), a = j(U, e.__scopeNavigationMenu), l = (0, c.s)(a.contentRef, t), u = a.value === i.value, d = {
            value: a.value,
            triggerRef: a.triggerRef,
            focusProxyRef: a.focusProxyRef,
            wasEscapeCloseRef: a.wasEscapeCloseRef,
            onContentFocusOutside: a.onContentFocusOutside,
            onRootContentClose: a.onRootContentClose,
            ...o
          };
          return i.viewport ? (0, v.jsx)(Y, {
            forceMount: n,
            ...d,
            ref: l
          }) : (0, v.jsx)(s.C, {
            present: n || u,
            children: (0, v.jsx)($, {
              "data-state": te(u),
              ...d,
              ref: l,
              onPointerEnter: (0, r.mK)(e.onPointerEnter, i.onContentEnter),
              onPointerLeave: (0, r.mK)(e.onPointerLeave, ie(i.onContentLeave)),
              style: {
                pointerEvents: !u && i.isRootMenu ? "none" : void 0,
                ...d.style
              }
            })
          })
        }, "NavigationMenuContent")),
        Y = o.forwardRef(y(function(e, t) {
          const n = k(U, e.__scopeNavigationMenu),
            {
              onViewportContentChange: o,
              onViewportContentRemove: i
            } = n;
          return (0, p.N)(() => {
            o(e.value, {
              ref: t,
              ...e
            })
          }, [e, t, o]), (0, p.N)(() => () => i(e.value), [e.value, i]), null
        }, "ViewportContentMounter")),
        q = "navigationMenu.rootContentDismiss",
        $ = o.forwardRef(y(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            value: i,
            triggerRef: a,
            focusProxyRef: l,
            wasEscapeCloseRef: u,
            onRootContentClose: s,
            onContentFocusOutside: d,
            ...f
          } = e, g = k(U, n), p = o.useRef(null), w = (0, c.s)(p, t), h = ne(g.baseId, i), b = oe(g.baseId, i), E = x(n), N = o.useRef(null), {
            onItemDismiss: C
          } = g;
          o.useEffect(() => {
            const e = p.current;
            if (g.isRootMenu && e) {
              const t = y(() => {
                C(), s(), e.contains(document.activeElement) && a.current?.focus()
              }, "handleClose");
              return e.addEventListener(q, t), () => e.removeEventListener(q, t)
            }
          }, [g.isRootMenu, e.value, a, C, s]);
          const P = o.useMemo(() => {
            const e = E().map(e => e.value);
            "rtl" === g.dir && e.reverse();
            const t = e.indexOf(g.value),
              n = e.indexOf(g.previousValue),
              o = i === g.value,
              r = n === e.indexOf(i);
            if (!o && !r) return N.current;
            const a = (() => {
              if (t !== n) {
                if (o && -1 !== n) return t > n ? "from-end" : "from-start";
                if (r && -1 !== t) return t > n ? "to-start" : "to-end"
              }
              return null
            })();
            return N.current = a, a
          }, [g.previousValue, g.value, g.dir, E, i]);
          return (0, v.jsx)(z, {
            asChild: !0,
            children: (0, v.jsx)(m.qW, {
              id: b,
              "aria-labelledby": h,
              "data-motion": P,
              "data-orientation": g.orientation,
              ...f,
              ref: w,
              disableOutsidePointerEvents: !1,
              onDismiss: () => {
                const e = new Event(q, {
                  bubbles: !0,
                  cancelable: !0
                });
                p.current?.dispatchEvent(e)
              },
              onFocusOutside: (0, r.mK)(e.onFocusOutside, e => {
                d();
                const t = e.target;
                g.rootNavigationMenu?.contains(t) && e.preventDefault()
              }),
              onPointerDownOutside: (0, r.mK)(e.onPointerDownOutside, e => {
                const t = e.target,
                  n = E().some(e => e.ref.current?.contains(t)),
                  o = g.isRootMenu && g.viewport?.contains(t);
                (n || o || !g.isRootMenu) && e.preventDefault()
              }),
              onKeyDown: (0, r.mK)(e.onKeyDown, e => {
                const t = e.altKey || e.ctrlKey || e.metaKey;
                if ("Tab" === e.key && !t) {
                  const t = J(e.currentTarget),
                    n = document.activeElement,
                    o = t.findIndex(e => e === n);
                  Q(e.shiftKey ? t.slice(0, o).reverse() : t.slice(o + 1, t.length)) ? e.preventDefault() : l.current?.focus()
                }
              }),
              onEscapeKeyDown: (0, r.mK)(e.onEscapeKeyDown, e => {
                u.current = !0
              })
            })
          })
        }, "NavigationMenuContentImpl")),
        z = o.forwardRef(y(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, i = k("FocusGroup", n);
          return (0, v.jsx)(P.Provider, {
            scope: n,
            children: (0, v.jsx)(P.Slot, {
              scope: n,
              children: (0, v.jsx)(a.sG.div, {
                dir: i.dir,
                ...o,
                ref: t
              })
            })
          })
        }, "FocusGroup")),
        X = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        Z = o.forwardRef(y(function(e, t) {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, i = M(n), l = k("FocusGroupItem", n);
          return (0, v.jsx)(P.ItemSlot, {
            scope: n,
            children: (0, v.jsx)(a.sG.button, {
              ...o,
              ref: t,
              onKeyDown: (0, r.mK)(e.onKeyDown, e => {
                if (["Home", "End", ...X].includes(e.key)) {
                  let t = i().map(e => e.ref.current);
                  if (["rtl" === l.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), X.includes(e.key)) {
                    const n = t.indexOf(e.currentTarget);
                    t = t.slice(n + 1)
                  }
                  setTimeout(() => Q(t)), e.preventDefault()
                }
              })
            })
          })
        }, "FocusGroupItem"));

      function J(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: y(e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }, "acceptNode")
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function Q(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }

      function ee(e) {
        return e.forEach(e => {
          e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
        }), () => {
          e.forEach(e => {
            const t = e.dataset.tabindex;
            e.setAttribute("tabindex", t)
          })
        }
      }

      function te(e) {
        return e ? "open" : "closed"
      }

      function ne(e, t) {
        return `${e}-trigger-${t}`
      }

      function oe(e, t) {
        return `${e}-content-${t}`
      }

      function ie(e) {
        return t => "mouse" === t.pointerType ? e(t) : void 0
      }
      y(J, "getTabbableCandidates"), y(Q, "focusFirst"), y(ee, "removeFromTabOrder"), y(function(e, t) {
        const n = (0, w.c)(t);
        (0, p.N)(() => {
          let t = 0;
          if (e) {
            const o = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            });
            return o.observe(e), () => {
              window.cancelAnimationFrame(t), o.unobserve(e)
            }
          }
        }, [e, n])
      }, "useResizeObserver"), y(te, "getOpenState"), y(ne, "makeTriggerId"), y(oe, "makeContentId"), y(ie, "whenMouse");
      var re = D,
        ae = F,
        le = K,
        ce = W,
        ue = H,
        se = G
    }
  }
]);