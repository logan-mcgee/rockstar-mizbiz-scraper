try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a31c8b52-4ecc-428d-9164-0333baf6a3ed", e._sentryDebugIdIdentifier = "sentry-dbid-a31c8b52-4ecc-428d-9164-0333baf6a3ed")
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
  [454], {
    23470(e, t, n) {
      "use strict";
      n.d(t, {
        A: () => c
      });
      var o = n(51177),
        i = n(93082),
        r = n(40949),
        a = n(68925);

      function l(e) {
        var t = (0, a.A)(),
          n = t.formatMessage,
          o = t.textComponent,
          r = void 0 === o ? i.Fragment : o,
          l = e.id,
          s = e.description,
          c = e.defaultMessage,
          u = e.values,
          d = e.children,
          f = e.tagName,
          m = void 0 === f ? r : f,
          p = n({
            id: l,
            description: s,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof d ? d(Array.isArray(p) ? p : [p]) : m ? i.createElement(m, null, p) : i.createElement(i.Fragment, null, p)
      }
      l.displayName = "FormattedMessage";
      var s = i.memo(l, function(e, t) {
        var n = e.values,
          i = (0, o.Tt)(e, ["values"]),
          a = t.values,
          l = (0, o.Tt)(t, ["values"]);
        return (0, r.bN)(a, n) && (0, r.bN)(i, l)
      });
      s.displayName = "MemoizedFormattedMessage";
      const c = s
    },
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
            if (!o.element || 0 !== B(o.element).height && 0 !== B(o.element).width || (i = o.rect), !R(e)) {
              const t = m(e);
              if (t && (t === window || "auto" === h(t))) return t
            }
            return e
          }();
          let r = t,
            c = null;
          n && (c = document.elementFromPoint(n.x, n.y), null === c && (c = document.body), M(c) && !b(c) ? n = null : r = b(c) ? c : c.getSpatialNavigationContainer()), r !== document && r !== document.documentElement || (r = document.body || document.documentElement);
          let u = null;
          if ((b(r) || "BODY" === r.nodeName) && "INPUT" !== r.nodeName) {
            "IFRAME" === r.nodeName && (r = r.contentDocument.documentElement), u = r;
            let n = null;
            if (document.activeElement === t || document.activeElement === document.body && t === document.documentElement) {
              if ("scroll" === h(r)) {
                if (l(r, e)) return
              } else if ("focus" === h(r)) {
                if (n = r.spatialNavigationSearch(e, {
                    container: r,
                    candidates: s(r, {
                      mode: "all"
                    })
                  }), a(n, e)) return
              } else if ("auto" === h(r) && (n = r.spatialNavigationSearch(e, {
                  container: r
                }), a(n, e) || l(r, e))) return
            } else u = u.getSpatialNavigationContainer()
          }
          u = r.getSpatialNavigationContainer();
          let d = u.parentElement ? u.getSpatialNavigationContainer() : null;
          if (d || window.location === window.parent.location || (d = window.parent.document.documentElement), "scroll" === h(u)) {
            if (l(u, e)) return
          } else "focus" === h(u) ? v(r, u, d, e, "all") : "auto" === h(u) && v(r, u, d, e, "visible")
        }

        function a(e, t) {
          if (e) {
            if (!p("beforefocus", e, null, t)) return !0;
            const o = e.getSpatialNavigationContainer();
            return o !== window && "focus" === h(o) ? e.focus() : e.focus({
              preventScroll: !0
            }), n = null, !0
          }
          return !1
        }

        function l(e, t) {
          return E(e, t) && !P(e, t) ? (w(e, t), !0) : !e.parentElement && !C(e, t) && (w(e.ownerDocument.documentElement, t), !0)
        }

        function s(e, t = {
          mode: "visible"
        }) {
          let n = [];
          if (e.childElementCount > 0) {
            e.parentElement || (e = e.getElementsByTagName("body")[0] || document.body);
            const t = e.children;
            for (const e of t) y(e) ? n.push(e) : M(e) ? (n.push(e), !b(e) && e.childElementCount && (n = n.concat(s(e, {
              mode: "all"
            })))) : e.childElementCount && (n = n.concat(s(e, {
              mode: "all"
            })))
          }
          return "all" === t.mode ? n : n.filter(_)
        }

        function c(e, t, n, o) {
          const i = e;
          return o = o || i.getSpatialNavigationContainer(), u(i, n = !n || n.length <= 0 ? s(o) : n, t, o)
        }

        function u(e, t, n, o) {
          const r = e.getSpatialNavigationContainer();
          let a;
          return void 0 === n ? t : (a = r.parentElement && o !== r && !_(e) ? B(r) : i || B(e), !b(e) && "BODY" !== e.nodeName || "INPUT" === e.nodeName ? t.filter(t => {
            const i = B(t),
              r = "IFRAME" === t.nodeName ? t.contentDocument.body : null;
            return o.contains(t) && t !== e && r !== e && k(i, a, n) && !A(a, i)
          }) : t.filter(t => {
            const i = B(t);
            return o.contains(t) && (e.contains(t) && A(a, i) && t !== e || k(i, a, n))
          }))
        }

        function d(e, t, n) {
          const o = e.getSpatialNavigationContainer(),
            r = getComputedStyle(o).getPropertyValue("--spatial-navigation-function"),
            a = i || B(e);
          let l, s;
          return "grid" === r ? (s = t.filter(e => D(a, B(e), n)), s.length > 0 && (t = s), l = V) : l = O, f(e, t, n, l)
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
          } while (!x(t) || !_(t));
          return t !== document && t !== document.documentElement || (t = window), t
        }

        function p(e, t, n, o) {
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

        function g(e, t) {
          return e.style.getPropertyValue(`--${t}`).trim()
        }

        function h(e) {
          return g(e, "spatial-navigation-action") || "auto"
        }

        function v(e, t, n, o, i) {
          let r = {
            candidates: s(t, {
              mode: i
            }),
            container: t
          };
          for (; n;) {
            if (a(e.spatialNavigationSearch(o, r), o)) return;
            if ("visible" === i && l(t, o)) return; {
              if (!p("notarget", t, e, o)) return;
              t === document || t === document.documentElement ? window.location !== window.parent.location && (t = (e = window.frameElement).ownerDocument.documentElement) : t = n, r = {
                candidates: s(t, {
                  mode: i
                }),
                container: t
              };
              let a = t.getSpatialNavigationContainer();
              n = a !== t ? a : null
            }
          }
          r = {
            candidates: s(t, {
              mode: i
            }),
            container: t
          }, !n && t && a(e.spatialNavigationSearch(o, r), o) || p("notarget", r.container, e, o) && ("auto" !== h(t) || "visible" !== i || l(t, o))
        }

        function w(e, t, n = 0) {
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
          return !e.parentElement || "IFRAME" === e.nodeName || x(e) || function(e) {
            return "contain" === g(e, "spatial-navigation-contain")
          }(e)
        }

        function y(e) {
          return "delegable" === g(e, "spatial-navigation-contain")
        }

        function x(e) {
          const t = window.getComputedStyle(e, null),
            n = t.getPropertyValue("overflow-x"),
            o = t.getPropertyValue("overflow-y");
          return !!("visible" !== n && "clip" !== n && N(e, "left") || "visible" !== o && "clip" !== o && N(e, "down"))
        }

        function E(e, t) {
          if (e && "object" == typeof e) {
            if (t && "string" == typeof t) {
              if (N(e, t)) {
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
            return "HTML" === e.nodeName || "BODY" === e.nodeName || x(e) && N(e)
          }
        }

        function N(e, t) {
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
          if (E(e, t)) {
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

        function R(e) {
          const t = e.getBoundingClientRect();
          let n = m(e),
            o = null;
          return o = n !== window ? B(n) : new DOMRect(0, 0, window.innerWidth, window.innerHeight), !(!A(o, t) || !A(o, t))
        }

        function M(e) {
          return !(e.tabIndex < 0 || function(e) {
            return "A" === e.tagName && null === e.getAttribute("href") && null === e.getAttribute("tabIndex")
          }(e) || function(e) {
            return !!["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTGROUP", "OPTION", "FIELDSET"].includes(e.tagName) && e.disabled
          }(e) || function(e) {
            return e.inert && !e.ownerDocument.documentElement.inert
          }(e) || ! function(e) {
            return !!S(e.parentElement) && !(!S(e) || "0" === e.style.opacity || "0px" === window.getComputedStyle(e).height || "0px" === window.getComputedStyle(e).width)
          }(e)) && (!!(!e.parentElement || E(e) && N(e) || e.tabIndex >= 0) || void 0)
        }

        function _(e) {
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

        function T(e, t) {
          const n = B(e),
            o = B(t || e.getSpatialNavigationContainer());
          return !(n.left < o.left || n.right > o.right || n.top < o.top || n.bottom > o.bottom)
        }

        function S(e) {
          const t = window.getComputedStyle(e, null),
            n = t.getPropertyValue("visibility");
          return "none" !== t.getPropertyValue("display") && !["hidden", "collapse"].includes(n)
        }

        function A(e, t) {
          const n = e.left <= t.right && e.right >= t.right,
            o = e.left <= t.left && e.right >= t.left,
            i = e.top <= t.top && e.bottom >= t.top,
            r = e.top <= t.bottom && e.bottom >= t.bottom;
          return (n || o) && (i || r)
        }

        function k(e, t, n) {
          switch (n) {
            case "left":
              return I(t, e);
            case "right":
              return I(e, t);
            case "up":
              return j(t, e);
            case "down":
              return j(e, t);
            default:
              return !1
          }
        }

        function I(e, t) {
          return e.left >= t.right || e.left >= t.left && e.right > t.right && e.bottom > t.top && e.top < t.bottom
        }

        function j(e, t) {
          return e.top >= t.bottom || e.top >= t.top && e.bottom > t.bottom && e.left < t.right && e.right > t.left
        }

        function D(e, t, n) {
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

        function L(e, t, o) {
          const i = H(o, n, t),
            r = Math.abs(i.entryPoint.x - i.exitPoint.x),
            a = Math.abs(i.entryPoint.y - i.exitPoint.y);
          return Math.sqrt(Math.pow(r, 2) + Math.pow(a, 2))
        }

        function F(e, t, n) {
          const o = {
            left: "right",
            right: "left",
            up: "bottom",
            down: "top"
          } [n];
          return Math.abs(e[o] - t[o])
        }

        function O(e, t, n) {
          let o = 0,
            i = 0;
          const r = H(n, e, t),
            a = Math.abs(r.entryPoint.x - r.exitPoint.x),
            l = Math.abs(r.entryPoint.y - r.exitPoint.y),
            s = Math.sqrt(Math.pow(a, 2) + Math.pow(l, 2));
          let c, u;
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
              D(e, t, n) ? i = Math.min(d.height / e.height, 1) : o = e.height / 2, c = 30 * (l + o), u = 5 * i;
              break;
            case "up":
            case "down":
              D(e, t, n) ? i = Math.min(d.width / e.width, 1) : o = e.width / 2, c = 2 * (a + o), u = 5 * i;
              break;
            default:
              c = 0, u = 0
          }
          return s + c - u - f
        }

        function K(e, t, n) {
          const o = H(n, e, t),
            i = Math.abs(o.entryPoint.x - o.exitPoint.x),
            r = Math.abs(o.entryPoint.y - o.exitPoint.y);
          return Math.sqrt(Math.pow(i, 2) + Math.pow(r, 2))
        }

        function V(e, t, n) {
          const o = H(n, e, t);
          return "left" === n || "right" === n ? Math.abs(o.entryPoint.x - o.exitPoint.x) : Math.abs(o.entryPoint.y - o.exitPoint.y)
        }

        function H(e = "down", t, o) {
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
                j(t, o) ? (i.exitPoint.y = t.top, i.entryPoint.y = o.bottom < t.top ? o.bottom : t.top) : j(o, t) ? (i.exitPoint.y = t.bottom, i.entryPoint.y = o.top > t.bottom ? o.top : t.bottom) : (i.exitPoint.y = Math.max(t.top, o.top), i.entryPoint.y = i.exitPoint.y);
                break;
              case "up":
              case "down":
                I(t, o) ? (i.exitPoint.x = t.left, i.entryPoint.x = o.right < t.left ? o.right : t.left) : I(o, t) ? (i.exitPoint.x = t.right, i.entryPoint.x = o.left > t.right ? o.left : t.right) : (i.exitPoint.x = Math.max(t.left, o.left), i.entryPoint.x = i.exitPoint.x)
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

        function W(e) {
          const t = window.__spatialNavigation__ && window.__spatialNavigation__.keyMode;
          window.__spatialNavigation__ = !1 === e ? G() : Object.assign(G(), function() {
            function e(e, t) {
              return E(e, t) && !P(e, t) || !e.parentElement && !C(e, t)
            }

            function t(t, n, o, i) {
              let r = n,
                a = null;
              if (r !== document && r !== document.documentElement || (r = document.body || document.documentElement), (b(r) || "BODY" === r.nodeName) && "INPUT" !== r.nodeName) {
                "IFRAME" === r.nodeName && (r = r.contentDocument.body);
                const n = s(r, i);
                if (Array.isArray(n) && n.length > 0) return t ? c(r, o, n) : r.spatialNavigationSearch(o, {
                  candidates: n
                });
                if (e(r, o)) return t ? [] : r
              }
              let l = r.getSpatialNavigationContainer(),
                d = l.parentElement ? l.getSpatialNavigationContainer() : null;
              for (d || window.location === window.parent.location || (d = window.parent.document.documentElement); d;) {
                const n = u(r, s(l, i), o, l);
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
                    if (M(l) && (r = l), l = d, !l.parentElement) {
                      d = null;
                      break
                    }
                    d = l.getSpatialNavigationContainer()
                  }
                }
              }
              if (!d && l) {
                const e = u(r, s(l, i), o, l);
                if (Array.isArray(e) && e.length > 0 && (a = r.spatialNavigationSearch(o, {
                    candidates: e,
                    container: l
                  }), a)) return t ? e : a
              }
              if (e(l, o)) return a = r, a
            }
            return {
              isContainer: b,
              isScrollContainer: x,
              isVisibleInScroller: R,
              findCandidates: t.bind(null, !0),
              findNextTarget: t.bind(null, !1),
              getDistanceFromTarget: (e, t, n) => (b(e) || "BODY" === e.nodeName) && "INPUT" !== e.nodeName && s(e).includes(t) ? F(B(e), B(t), n) : O(B(e), B(t), n)
            }
          }()), window.__spatialNavigation__.keyMode = t, Object.seal(window.__spatialNavigation__)
        }

        function G() {
          return {
            enableExperimentalAPIs: W,
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
            u = function(e) {
              const t = e.getSpatialNavigationContainer().focusableAreas(),
                n = [];
              return t.forEach(t => {
                e !== t && T(t, e) && n.push(t)
              }), n
            }(o);
          t || (t = {});
          const m = o.getSpatialNavigationContainer();
          let p = s(m);
          const g = t.container || m;
          t.container && m.contains(t.container) && (p = p.concat(s(g)));
          const h = t.candidates && t.candidates.length > 0 ? t.candidates.filter(e => g.contains(e)) : p.filter(e => g.contains(e) && g !== e);
          if (h && h.length > 0) {
            h.forEach(e => {
              e !== o && (o.contains(e) && o !== e ? a : l).push(e)
            });
            let t = u.filter(e => !a.includes(e)),
              m = h.filter(e => b(e) && T(o, e)).map(e => e.focusableAreas()).flat().filter(e => e !== o);
            if (a = a.concat(t).filter(e => g.contains(e)), l = l.concat(m).filter(e => g.contains(e)), l.length > 0 && (l = c(o, e, l, g)), i && (r = d(o, c(o, e, a, g), e)), a && a.length > 0 && "INPUT" !== o.nodeName && (r = function(e, t, o) {
                return f(e, t, o, n ? L : F)
              }(o, a, e)), r = r || d(o, l, e), r && y(r)) {
              const t = s(r, {
                  mode: "all"
                }),
                n = t.length > 0 ? o.spatialNavigationSearch(e, {
                  candidates: t,
                  container: r
                }) : null;
              n ? r = n : M(r) || (h.splice(h.indexOf(r), 1), r = h.length ? o.spatialNavigationSearch(e, {
                candidates: h,
                container: g
              }) : null)
            }
            return r
          }
          return null
        }, window.Element.prototype.focusableAreas = function(e = {
          mode: "visible"
        }) {
          const t = this.parentElement ? this : document.body,
            n = Array.prototype.filter.call(t.getElementsByTagName("*"), M);
          return "all" === e.mode ? n : n.filter(_)
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
        })), W(!1), window.addEventListener("load", () => {
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
    69669(e, t, n) {
      "use strict";
      n.d(t, {
        us: () => o.us
      });
      var o = n(819);
      n(21423)
    },
    52457(e, t, n) {
      "use strict";
      n.d(t, {
        m: () => o.m
      });
      var o = n(18552)
    },
    39615(e, t, n) {
      "use strict";
      n.d(t, {
        NP: () => o.NP
      });
      var o = n(40632)
    },
    81010(e, t, n) {
      "use strict";
      n.d(t, {
        UC: () => ce,
        Y9: () => le,
        q7: () => ae,
        bL: () => re,
        l9: () => se
      });
      var o = n(93082),
        i = n(53582),
        r = n(23028),
        a = n(50446),
        l = n(8316),
        s = n(1531),
        c = n(66704),
        u = n(86627),
        d = n(47306),
        f = n(96883),
        m = n(39793),
        p = "Collapsible",
        [g, h] = (0, i.A)(p),
        [v, w] = g(p),
        b = o.forwardRef((e, t) => {
          const {
            __scopeCollapsible: n,
            open: i,
            defaultOpen: r,
            disabled: a,
            onOpenChange: l,
            ...u
          } = e, [d, g] = (0, s.i)({
            prop: i,
            defaultProp: r ?? !1,
            onChange: l,
            caller: p
          });
          return (0, m.jsx)(v, {
            scope: n,
            disabled: a,
            contentId: (0, f.B)(),
            open: d,
            onOpenToggle: o.useCallback(() => g(e => !e), [g]),
            children: (0, m.jsx)(c.sG.div, {
              "data-state": P(d),
              "data-disabled": a ? "" : void 0,
              ...u,
              ref: t
            })
          })
        });
      b.displayName = p;
      var y = "CollapsibleTrigger",
        x = o.forwardRef((e, t) => {
          const {
            __scopeCollapsible: n,
            ...o
          } = e, i = w(y, n);
          return (0, m.jsx)(c.sG.button, {
            type: "button",
            "aria-controls": i.contentId,
            "aria-expanded": i.open || !1,
            "data-state": P(i.open),
            "data-disabled": i.disabled ? "" : void 0,
            disabled: i.disabled,
            ...o,
            ref: t,
            onClick: (0, l.mK)(e.onClick, i.onOpenToggle)
          })
        });
      x.displayName = y;
      var E = "CollapsibleContent",
        N = o.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, i = w(E, e.__scopeCollapsible);
          return (0, m.jsx)(d.C, {
            present: n || i.open,
            children: ({
              present: e
            }) => (0, m.jsx)(C, {
              ...o,
              ref: t,
              present: e
            })
          })
        });
      N.displayName = E;
      var C = o.forwardRef((e, t) => {
        const {
          __scopeCollapsible: n,
          present: i,
          children: r,
          ...l
        } = e, s = w(E, n), [d, f] = o.useState(i), p = o.useRef(null), g = (0, a.s)(t, p), h = o.useRef(0), v = h.current, b = o.useRef(0), y = b.current, x = s.open || d, N = o.useRef(x), C = o.useRef(void 0);
        return o.useEffect(() => {
          const e = requestAnimationFrame(() => N.current = !1);
          return () => cancelAnimationFrame(e)
        }, []), (0, u.N)(() => {
          const e = p.current;
          if (e) {
            C.current = C.current || {
              transitionDuration: e.style.transitionDuration,
              animationName: e.style.animationName
            }, e.style.transitionDuration = "0s", e.style.animationName = "none";
            const t = e.getBoundingClientRect();
            h.current = t.height, b.current = t.width, N.current || (e.style.transitionDuration = C.current.transitionDuration, e.style.animationName = C.current.animationName), f(i)
          }
        }, [s.open, i]), (0, m.jsx)(c.sG.div, {
          "data-state": P(s.open),
          "data-disabled": s.disabled ? "" : void 0,
          id: s.contentId,
          hidden: !x,
          ...l,
          ref: g,
          style: {
            "--radix-collapsible-content-height": v ? `${v}px` : void 0,
            "--radix-collapsible-content-width": y ? `${y}px` : void 0,
            ...e.style
          },
          children: x && r
        })
      });

      function P(e) {
        return e ? "open" : "closed"
      }
      var R = b,
        M = x,
        _ = N,
        T = n(93689),
        S = "Accordion",
        A = ["Home", "End", "ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight"],
        [k, I, j] = (0, r.N)(S),
        [D, L] = (0, i.A)(S, [j, h]),
        F = h(),
        O = o.forwardRef((e, t) => {
          const {
            type: n,
            ...o
          } = e, i = o, r = o;
          return (0, m.jsx)(k.Provider, {
            scope: e.__scopeAccordion,
            children: "multiple" === n ? (0, m.jsx)(G, {
              ...r,
              ref: t
            }) : (0, m.jsx)(W, {
              ...i,
              ref: t
            })
          })
        });
      O.displayName = S;
      var [K, V] = D(S), [H, B] = D(S, {
        collapsible: !1
      }), W = o.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: i,
          onValueChange: r = () => {},
          collapsible: a = !1,
          ...l
        } = e, [c, u] = (0, s.i)({
          prop: n,
          defaultProp: i ?? "",
          onChange: r,
          caller: S
        });
        return (0, m.jsx)(K, {
          scope: e.__scopeAccordion,
          value: o.useMemo(() => c ? [c] : [], [c]),
          onItemOpen: u,
          onItemClose: o.useCallback(() => a && u(""), [a, u]),
          children: (0, m.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: a,
            children: (0, m.jsx)(z, {
              ...l,
              ref: t
            })
          })
        })
      }), G = o.forwardRef((e, t) => {
        const {
          value: n,
          defaultValue: i,
          onValueChange: r = () => {},
          ...a
        } = e, [l, c] = (0, s.i)({
          prop: n,
          defaultProp: i ?? [],
          onChange: r,
          caller: S
        }), u = o.useCallback(e => c((t = []) => [...t, e]), [c]), d = o.useCallback(e => c((t = []) => t.filter(t => t !== e)), [c]);
        return (0, m.jsx)(K, {
          scope: e.__scopeAccordion,
          value: l,
          onItemOpen: u,
          onItemClose: d,
          children: (0, m.jsx)(H, {
            scope: e.__scopeAccordion,
            collapsible: !0,
            children: (0, m.jsx)(z, {
              ...a,
              ref: t
            })
          })
        })
      }), [U, Y] = D(S), z = o.forwardRef((e, t) => {
        const {
          __scopeAccordion: n,
          disabled: i,
          dir: r,
          orientation: s = "vertical",
          ...u
        } = e, d = o.useRef(null), f = (0, a.s)(d, t), p = I(n), g = "ltr" === (0, T.jH)(r), h = (0, l.mK)(e.onKeyDown, e => {
          if (!A.includes(e.key)) return;
          const t = e.target,
            n = p().filter(e => !e.ref.current?.disabled),
            o = n.findIndex(e => e.ref.current === t),
            i = n.length;
          if (-1 === o) return;
          e.preventDefault();
          let r = o;
          const a = i - 1,
            l = () => {
              r = o + 1, r > a && (r = 0)
            },
            c = () => {
              r = o - 1, r < 0 && (r = a)
            };
          switch (e.key) {
            case "Home":
              r = 0;
              break;
            case "End":
              r = a;
              break;
            case "ArrowRight":
              "horizontal" === s && (g ? l() : c());
              break;
            case "ArrowDown":
              "vertical" === s && l();
              break;
            case "ArrowLeft":
              "horizontal" === s && (g ? c() : l());
              break;
            case "ArrowUp":
              "vertical" === s && c()
          }
          const u = r % i;
          n[u].ref.current?.focus()
        });
        return (0, m.jsx)(U, {
          scope: n,
          disabled: i,
          direction: r,
          orientation: s,
          children: (0, m.jsx)(k.Slot, {
            scope: n,
            children: (0, m.jsx)(c.sG.div, {
              ...u,
              "data-orientation": s,
              ref: f,
              onKeyDown: i ? void 0 : h
            })
          })
        })
      }), q = "AccordionItem", [$, X] = D(q), Z = o.forwardRef((e, t) => {
        const {
          __scopeAccordion: n,
          value: o,
          ...i
        } = e, r = Y(q, n), a = V(q, n), l = F(n), s = (0, f.B)(), c = o && a.value.includes(o) || !1, u = r.disabled || e.disabled;
        return (0, m.jsx)($, {
          scope: n,
          open: c,
          disabled: u,
          triggerId: s,
          children: (0, m.jsx)(R, {
            "data-orientation": r.orientation,
            "data-state": ie(c),
            ...l,
            ...i,
            ref: t,
            disabled: u,
            open: c,
            onOpenChange: e => {
              e ? a.onItemOpen(o) : a.onItemClose(o)
            }
          })
        })
      });
      Z.displayName = q;
      var J = "AccordionHeader",
        Q = o.forwardRef((e, t) => {
          const {
            __scopeAccordion: n,
            ...o
          } = e, i = Y(S, n), r = X(J, n);
          return (0, m.jsx)(c.sG.h3, {
            "data-orientation": i.orientation,
            "data-state": ie(r.open),
            "data-disabled": r.disabled ? "" : void 0,
            ...o,
            ref: t
          })
        });
      Q.displayName = J;
      var ee = "AccordionTrigger",
        te = o.forwardRef((e, t) => {
          const {
            __scopeAccordion: n,
            ...o
          } = e, i = Y(S, n), r = X(ee, n), a = B(ee, n), l = F(n);
          return (0, m.jsx)(k.ItemSlot, {
            scope: n,
            children: (0, m.jsx)(M, {
              "aria-disabled": r.open && !a.collapsible || void 0,
              "data-orientation": i.orientation,
              id: r.triggerId,
              ...l,
              ...o,
              ref: t
            })
          })
        });
      te.displayName = ee;
      var ne = "AccordionContent",
        oe = o.forwardRef((e, t) => {
          const {
            __scopeAccordion: n,
            ...o
          } = e, i = Y(S, n), r = X(ne, n), a = F(n);
          return (0, m.jsx)(_, {
            role: "region",
            "aria-labelledby": r.triggerId,
            "data-orientation": i.orientation,
            ...a,
            ...o,
            ref: t,
            style: {
              "--radix-accordion-content-height": "var(--radix-collapsible-content-height)",
              "--radix-accordion-content-width": "var(--radix-collapsible-content-width)",
              ...e.style
            }
          })
        });

      function ie(e) {
        return e ? "open" : "closed"
      }
      oe.displayName = ne;
      var re = O,
        ae = Z,
        le = Q,
        se = te,
        ce = oe
    },
    4956(e, t, n) {
      "use strict";
      n.d(t, {
        n: () => d
      });
      var o = n(93082),
        i = n(50446),
        r = n(20972),
        a = n(38351),
        l = n(39793),
        s = "focusScope.autoFocusOnMount",
        c = "focusScope.autoFocusOnUnmount",
        u = {
          bubbles: !1,
          cancelable: !0
        },
        d = o.forwardRef((e, t) => {
          const {
            loop: n = !1,
            trapped: d = !1,
            onMountAutoFocus: p,
            onUnmountAutoFocus: v,
            ...w
          } = e, [b, y] = o.useState(null), x = (0, a.c)(p), E = (0, a.c)(v), N = o.useRef(null), C = (0, i.s)(t, e => y(e)), P = o.useRef({
            paused: !1,
            pause() {
              this.paused = !0
            },
            resume() {
              this.paused = !1
            }
          }).current;
          o.useEffect(() => {
            if (d) {
              let e = function(e) {
                  if (P.paused || !b) return;
                  const t = e.target;
                  b.contains(t) ? N.current = t : g(N.current, {
                    select: !0
                  })
                },
                t = function(e) {
                  if (P.paused || !b) return;
                  const t = e.relatedTarget;
                  null !== t && (b.contains(t) || g(N.current, {
                    select: !0
                  }))
                },
                n = function(e) {
                  if (document.activeElement === document.body)
                    for (const t of e) t.removedNodes.length > 0 && g(b)
                };
              document.addEventListener("focusin", e), document.addEventListener("focusout", t);
              const o = new MutationObserver(n);
              return b && o.observe(b, {
                childList: !0,
                subtree: !0
              }), () => {
                document.removeEventListener("focusin", e), document.removeEventListener("focusout", t), o.disconnect()
              }
            }
          }, [d, b, P.paused]), o.useEffect(() => {
            if (b) {
              h.add(P);
              const e = document.activeElement;
              if (!b.contains(e)) {
                const t = new CustomEvent(s, u);
                b.addEventListener(s, x), b.dispatchEvent(t), t.defaultPrevented || (function(e, {
                  select: t = !1
                } = {}) {
                  const n = document.activeElement;
                  for (const o of e)
                    if (g(o, {
                        select: t
                      }), document.activeElement !== n) return
                }(f(b).filter(e => "A" !== e.tagName), {
                  select: !0
                }), document.activeElement === e && g(b))
              }
              return () => {
                b.removeEventListener(s, x), setTimeout(() => {
                  const t = new CustomEvent(c, u);
                  b.addEventListener(c, E), b.dispatchEvent(t), t.defaultPrevented || g(e ?? document.body, {
                    select: !0
                  }), b.removeEventListener(c, E), h.remove(P)
                }, 0)
              }
            }
          }, [b, x, E, P]);
          const R = o.useCallback(e => {
            if (!n && !d) return;
            if (P.paused) return;
            const t = "Tab" === e.key && !e.altKey && !e.ctrlKey && !e.metaKey,
              o = document.activeElement;
            if (t && o) {
              const t = e.currentTarget,
                [i, r] = function(e) {
                  const t = f(e);
                  return [m(t, e), m(t.reverse(), e)]
                }(t);
              i && r ? e.shiftKey || o !== r ? e.shiftKey && o === i && (e.preventDefault(), n && g(r, {
                select: !0
              })) : (e.preventDefault(), n && g(i, {
                select: !0
              })) : o === t && e.preventDefault()
            }
          }, [n, d, P.paused]);
          return (0, l.jsx)(r.sG.div, {
            tabIndex: -1,
            ...w,
            ref: C,
            onKeyDown: R
          })
        });

      function f(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function m(e, t) {
        for (const n of e)
          if (!p(n, {
              upTo: t
            })) return n
      }

      function p(e, {
        upTo: t
      }) {
        if ("hidden" === getComputedStyle(e).visibility) return !0;
        for (; e;) {
          if (void 0 !== t && e === t) return !1;
          if ("none" === getComputedStyle(e).display) return !0;
          e = e.parentElement
        }
        return !1
      }

      function g(e, {
        select: t = !1
      } = {}) {
        if (e && e.focus) {
          const n = document.activeElement;
          e.focus({
            preventScroll: !0
          }), e !== n && function(e) {
            return e instanceof HTMLInputElement && "select" in e
          }(e) && t && e.select()
        }
      }
      d.displayName = "FocusScope";
      var h = function() {
        let e = [];
        return {
          add(t) {
            const n = e[0];
            t !== n && n?.pause(), e = v(e, t), e.unshift(t)
          },
          remove(t) {
            e = v(e, t), e[0]?.resume()
          }
        }
      }();

      function v(e, t) {
        const n = [...e],
          o = n.indexOf(t);
        return -1 !== o && n.splice(o, 1), n
      }
    },
    79067(e, t, n) {
      "use strict";
      n.d(t, {
        B8: () => fe,
        N_: () => ge,
        UC: () => he,
        bL: () => de,
        l9: () => pe,
        q7: () => me
      });
      var o = n(93082),
        i = n(84017),
        r = n(53582),
        a = n(8316),
        l = n(66704),
        s = n(1531),
        c = n(50446),
        u = n(93689),
        d = n(47306),
        f = n(96883),
        m = n(23028),
        p = n(99523),
        g = n(14823),
        h = n(86627),
        v = n(38351),
        w = n(45047),
        b = n(39793),
        y = "NavigationMenu",
        [x, E, N] = (0, m.N)(y),
        [C, P, R] = (0, m.N)(y),
        [M, _] = (0, r.A)(y, [N, R]),
        [T, S] = M(y),
        [A, k] = M(y),
        I = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            value: i,
            onValueChange: r,
            defaultValue: a,
            delayDuration: d = 200,
            skipDelayDuration: f = 300,
            orientation: m = "horizontal",
            dir: p,
            ...g
          } = e, [h, v] = o.useState(null), w = (0, c.s)(t, e => v(e)), x = (0, u.jH)(p), E = o.useRef(0), N = o.useRef(0), C = o.useRef(0), [P, R] = o.useState(!0), [M, _] = (0, s.i)({
            prop: i,
            onChange: e => {
              const t = f > 0;
              "" !== e ? (window.clearTimeout(C.current), t && R(!1)) : (window.clearTimeout(C.current), C.current = window.setTimeout(() => R(!0), f)), r?.(e)
            },
            defaultProp: a ?? "",
            caller: y
          }), T = o.useCallback(() => {
            window.clearTimeout(N.current), N.current = window.setTimeout(() => _(""), 150)
          }, [_]), S = o.useCallback(e => {
            window.clearTimeout(N.current), _(e)
          }, [_]), A = o.useCallback(e => {
            M === e ? window.clearTimeout(N.current) : E.current = window.setTimeout(() => {
              window.clearTimeout(N.current), _(e)
            }, d)
          }, [M, _, d]);
          return o.useEffect(() => () => {
            window.clearTimeout(E.current), window.clearTimeout(N.current), window.clearTimeout(C.current)
          }, []), (0, b.jsx)(D, {
            scope: n,
            isRootMenu: !0,
            value: M,
            dir: x,
            orientation: m,
            rootNavigationMenu: h,
            onTriggerEnter: e => {
              window.clearTimeout(E.current), P ? A(e) : S(e)
            },
            onTriggerLeave: () => {
              window.clearTimeout(E.current), T()
            },
            onContentEnter: () => window.clearTimeout(N.current),
            onContentLeave: T,
            onItemSelect: e => {
              _(t => t === e ? "" : e)
            },
            onItemDismiss: () => _(""),
            children: (0, b.jsx)(l.sG.nav, {
              "aria-label": "Main",
              "data-orientation": m,
              dir: x,
              ...g,
              ref: w
            })
          })
        });
      I.displayName = y;
      var j = "NavigationMenuSub";
      o.forwardRef((e, t) => {
        const {
          __scopeNavigationMenu: n,
          value: o,
          onValueChange: i,
          defaultValue: r,
          orientation: a = "horizontal",
          ...c
        } = e, u = S(j, n), [d, f] = (0, s.i)({
          prop: o,
          onChange: i,
          defaultProp: r ?? "",
          caller: j
        });
        return (0, b.jsx)(D, {
          scope: n,
          isRootMenu: !1,
          value: d,
          dir: u.dir,
          orientation: a,
          rootNavigationMenu: u.rootNavigationMenu,
          onTriggerEnter: e => f(e),
          onItemSelect: e => f(e),
          onItemDismiss: () => f(""),
          children: (0, b.jsx)(l.sG.div, {
            "data-orientation": a,
            ...c,
            ref: t
          })
        })
      }).displayName = j;
      var D = e => {
          const {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: i,
            dir: r,
            orientation: a,
            children: l,
            value: s,
            onItemSelect: c,
            onItemDismiss: u,
            onTriggerEnter: d,
            onTriggerLeave: m,
            onContentEnter: p,
            onContentLeave: h
          } = e, [w, y] = o.useState(null), [E, N] = o.useState(new Map), [C, P] = o.useState(null);
          return (0, b.jsx)(T, {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: i,
            value: s,
            previousValue: (0, g.Z)(s),
            baseId: (0, f.B)(),
            dir: r,
            orientation: a,
            viewport: w,
            onViewportChange: y,
            indicatorTrack: C,
            onIndicatorTrackChange: P,
            onTriggerEnter: (0, v.c)(d),
            onTriggerLeave: (0, v.c)(m),
            onContentEnter: (0, v.c)(p),
            onContentLeave: (0, v.c)(h),
            onItemSelect: (0, v.c)(c),
            onItemDismiss: (0, v.c)(u),
            onViewportContentChange: o.useCallback((e, t) => {
              N(n => (n.set(e, t), new Map(n)))
            }, []),
            onViewportContentRemove: o.useCallback(e => {
              N(t => t.has(e) ? (t.delete(e), new Map(t)) : t)
            }, []),
            children: (0, b.jsx)(x.Provider, {
              scope: t,
              children: (0, b.jsx)(A, {
                scope: t,
                items: E,
                children: l
              })
            })
          })
        },
        L = "NavigationMenuList",
        F = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, i = S(L, n), r = (0, b.jsx)(l.sG.ul, {
            "data-orientation": i.orientation,
            ...o,
            ref: t
          });
          return (0, b.jsx)(l.sG.div, {
            style: {
              position: "relative"
            },
            ref: i.onIndicatorTrackChange,
            children: (0, b.jsx)(x.Slot, {
              scope: n,
              children: i.isRootMenu ? (0, b.jsx)(te, {
                asChild: !0,
                children: r
              }) : r
            })
          })
        });
      F.displayName = L;
      var O = "NavigationMenuItem",
        [K, V] = M(O),
        H = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            value: i,
            ...r
          } = e, a = (0, f.B)(), s = i || a || "LEGACY_REACT_AUTO_VALUE", c = o.useRef(null), u = o.useRef(null), d = o.useRef(null), m = o.useRef(() => {}), p = o.useRef(!1), g = o.useCallback((e = "start") => {
            if (c.current) {
              m.current();
              const t = ie(c.current);
              t.length && re("start" === e ? t : t.reverse())
            }
          }, []), h = o.useCallback(() => {
            if (c.current) {
              const e = ie(c.current);
              e.length && (m.current = function(e) {
                return e.forEach(e => {
                  e.dataset.tabindex = e.getAttribute("tabindex") || "", e.setAttribute("tabindex", "-1")
                }), () => {
                  e.forEach(e => {
                    const t = e.dataset.tabindex;
                    e.setAttribute("tabindex", t)
                  })
                }
              }(e))
            }
          }, []);
          return (0, b.jsx)(K, {
            scope: n,
            value: s,
            triggerRef: u,
            contentRef: c,
            focusProxyRef: d,
            wasEscapeCloseRef: p,
            onEntryKeyDown: g,
            onFocusProxyEnter: g,
            onRootContentClose: h,
            onContentFocusOutside: h,
            children: (0, b.jsx)(l.sG.li, {
              ...r,
              ref: t
            })
          })
        });
      H.displayName = O;
      var B = "NavigationMenuTrigger",
        W = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            disabled: i,
            ...r
          } = e, s = S(B, e.__scopeNavigationMenu), u = V(B, e.__scopeNavigationMenu), d = o.useRef(null), f = (0, c.s)(d, u.triggerRef, t), m = se(s.baseId, u.value), p = ce(s.baseId, u.value), g = o.useRef(!1), h = o.useRef(!1), v = u.value === s.value;
          return (0, b.jsxs)(b.Fragment, {
            children: [(0, b.jsx)(x.ItemSlot, {
              scope: n,
              value: u.value,
              children: (0, b.jsx)(oe, {
                asChild: !0,
                children: (0, b.jsx)(l.sG.button, {
                  id: m,
                  disabled: i,
                  "data-disabled": i ? "" : void 0,
                  "data-state": le(v),
                  "aria-expanded": v,
                  "aria-controls": p,
                  ...r,
                  ref: f,
                  onPointerEnter: (0, a.mK)(e.onPointerEnter, () => {
                    h.current = !1, u.wasEscapeCloseRef.current = !1
                  }),
                  onPointerMove: (0, a.mK)(e.onPointerMove, ue(() => {
                    i || h.current || u.wasEscapeCloseRef.current || g.current || (s.onTriggerEnter(u.value), g.current = !0)
                  })),
                  onPointerLeave: (0, a.mK)(e.onPointerLeave, ue(() => {
                    i || (s.onTriggerLeave(), g.current = !1)
                  })),
                  onClick: (0, a.mK)(e.onClick, () => {
                    s.onItemSelect(u.value), h.current = v
                  }),
                  onKeyDown: (0, a.mK)(e.onKeyDown, e => {
                    const t = {
                      horizontal: "ArrowDown",
                      vertical: "rtl" === s.dir ? "ArrowLeft" : "ArrowRight"
                    } [s.orientation];
                    v && e.key === t && (u.onEntryKeyDown(), e.preventDefault())
                  })
                })
              })
            }), v && (0, b.jsxs)(b.Fragment, {
              children: [(0, b.jsx)(w.bL, {
                "aria-hidden": !0,
                tabIndex: 0,
                ref: u.focusProxyRef,
                onFocus: e => {
                  const t = u.contentRef.current,
                    n = e.relatedTarget,
                    o = n === d.current,
                    i = t?.contains(n);
                  !o && i || u.onFocusProxyEnter(o ? "start" : "end")
                }
              }), s.viewport && (0, b.jsx)("span", {
                "aria-owns": p
              })]
            })]
          })
        });
      W.displayName = B;
      var G = "navigationMenu.linkSelect",
        U = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            active: o,
            onSelect: i,
            ...r
          } = e;
          return (0, b.jsx)(oe, {
            asChild: !0,
            children: (0, b.jsx)(l.sG.a, {
              "data-active": o ? "" : void 0,
              "aria-current": o ? "page" : void 0,
              ...r,
              ref: t,
              onClick: (0, a.mK)(e.onClick, e => {
                const t = e.target,
                  n = new CustomEvent(G, {
                    bubbles: !0,
                    cancelable: !0
                  });
                if (t.addEventListener(G, e => i?.(e), {
                    once: !0
                  }), (0, l.hO)(t, n), !n.defaultPrevented && !e.metaKey) {
                  const e = new CustomEvent(Z, {
                    bubbles: !0,
                    cancelable: !0
                  });
                  (0, l.hO)(t, e)
                }
              }, {
                checkForDefaultPrevented: !1
              })
            })
          })
        });
      U.displayName = "NavigationMenuLink";
      var Y = "NavigationMenuIndicator";
      o.forwardRef((e, t) => {
        const {
          forceMount: n,
          ...o
        } = e, r = S(Y, e.__scopeNavigationMenu), a = Boolean(r.value);
        return r.indicatorTrack ? i.createPortal((0, b.jsx)(d.C, {
          present: n || a,
          children: (0, b.jsx)(z, {
            ...o,
            ref: t
          })
        }), r.indicatorTrack) : null
      }).displayName = Y;
      var z = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            ...i
          } = e, r = S(Y, n), a = E(n), [s, c] = o.useState(null), [u, d] = o.useState(null), f = "horizontal" === r.orientation, m = Boolean(r.value);
          o.useEffect(() => {
            const e = a(),
              t = e.find(e => e.value === r.value)?.ref.current;
            t && c(t)
          }, [a, r.value]);
          const p = () => {
            s && d({
              size: f ? s.offsetWidth : s.offsetHeight,
              offset: f ? s.offsetLeft : s.offsetTop
            })
          };
          return ae(s, p), ae(r.indicatorTrack, p), u ? (0, b.jsx)(l.sG.div, {
            "aria-hidden": !0,
            "data-state": m ? "visible" : "hidden",
            "data-orientation": r.orientation,
            ...i,
            ref: t,
            style: {
              position: "absolute",
              ...f ? {
                left: 0,
                width: u.size + "px",
                transform: `translateX(${u.offset}px)`
              } : {
                top: 0,
                height: u.size + "px",
                transform: `translateY(${u.offset}px)`
              },
              ...i.style
            }
          }) : null
        }),
        q = "NavigationMenuContent",
        $ = o.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...o
          } = e, i = S(q, e.__scopeNavigationMenu), r = V(q, e.__scopeNavigationMenu), l = (0, c.s)(r.contentRef, t), s = r.value === i.value, u = {
            value: r.value,
            triggerRef: r.triggerRef,
            focusProxyRef: r.focusProxyRef,
            wasEscapeCloseRef: r.wasEscapeCloseRef,
            onContentFocusOutside: r.onContentFocusOutside,
            onRootContentClose: r.onRootContentClose,
            ...o
          };
          return i.viewport ? (0, b.jsx)(X, {
            forceMount: n,
            ...u,
            ref: l
          }) : (0, b.jsx)(d.C, {
            present: n || s,
            children: (0, b.jsx)(J, {
              "data-state": le(s),
              ...u,
              ref: l,
              onPointerEnter: (0, a.mK)(e.onPointerEnter, i.onContentEnter),
              onPointerLeave: (0, a.mK)(e.onPointerLeave, ue(i.onContentLeave)),
              style: {
                pointerEvents: !s && i.isRootMenu ? "none" : void 0,
                ...u.style
              }
            })
          })
        });
      $.displayName = q;
      var X = o.forwardRef((e, t) => {
          const n = S(q, e.__scopeNavigationMenu),
            {
              onViewportContentChange: o,
              onViewportContentRemove: i
            } = n;
          return (0, h.N)(() => {
            o(e.value, {
              ref: t,
              ...e
            })
          }, [e, t, o]), (0, h.N)(() => () => i(e.value), [e.value, i]), null
        }),
        Z = "navigationMenu.rootContentDismiss",
        J = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            value: i,
            triggerRef: r,
            focusProxyRef: l,
            wasEscapeCloseRef: s,
            onRootContentClose: u,
            onContentFocusOutside: d,
            ...f
          } = e, m = S(q, n), g = o.useRef(null), h = (0, c.s)(g, t), v = se(m.baseId, i), w = ce(m.baseId, i), y = E(n), x = o.useRef(null), {
            onItemDismiss: N
          } = m;
          o.useEffect(() => {
            const e = g.current;
            if (m.isRootMenu && e) {
              const t = () => {
                N(), u(), e.contains(document.activeElement) && r.current?.focus()
              };
              return e.addEventListener(Z, t), () => e.removeEventListener(Z, t)
            }
          }, [m.isRootMenu, e.value, r, N, u]);
          const C = o.useMemo(() => {
            const e = y().map(e => e.value);
            "rtl" === m.dir && e.reverse();
            const t = e.indexOf(m.value),
              n = e.indexOf(m.previousValue),
              o = i === m.value,
              r = n === e.indexOf(i);
            if (!o && !r) return x.current;
            const a = (() => {
              if (t !== n) {
                if (o && -1 !== n) return t > n ? "from-end" : "from-start";
                if (r && -1 !== t) return t > n ? "to-start" : "to-end"
              }
              return null
            })();
            return x.current = a, a
          }, [m.previousValue, m.value, m.dir, y, i]);
          return (0, b.jsx)(te, {
            asChild: !0,
            children: (0, b.jsx)(p.qW, {
              id: w,
              "aria-labelledby": v,
              "data-motion": C,
              "data-orientation": m.orientation,
              ...f,
              ref: h,
              disableOutsidePointerEvents: !1,
              onDismiss: () => {
                const e = new Event(Z, {
                  bubbles: !0,
                  cancelable: !0
                });
                g.current?.dispatchEvent(e)
              },
              onFocusOutside: (0, a.mK)(e.onFocusOutside, e => {
                d();
                const t = e.target;
                m.rootNavigationMenu?.contains(t) && e.preventDefault()
              }),
              onPointerDownOutside: (0, a.mK)(e.onPointerDownOutside, e => {
                const t = e.target,
                  n = y().some(e => e.ref.current?.contains(t)),
                  o = m.isRootMenu && m.viewport?.contains(t);
                (n || o || !m.isRootMenu) && e.preventDefault()
              }),
              onKeyDown: (0, a.mK)(e.onKeyDown, e => {
                const t = e.altKey || e.ctrlKey || e.metaKey;
                if ("Tab" === e.key && !t) {
                  const t = ie(e.currentTarget),
                    n = document.activeElement,
                    o = t.findIndex(e => e === n);
                  re(e.shiftKey ? t.slice(0, o).reverse() : t.slice(o + 1, t.length)) ? e.preventDefault() : l.current?.focus()
                }
              }),
              onEscapeKeyDown: (0, a.mK)(e.onEscapeKeyDown, e => {
                s.current = !0
              })
            })
          })
        }),
        Q = "NavigationMenuViewport";
      o.forwardRef((e, t) => {
        const {
          forceMount: n,
          ...o
        } = e, i = S(Q, e.__scopeNavigationMenu), r = Boolean(i.value);
        return (0, b.jsx)(d.C, {
          present: n || r,
          children: (0, b.jsx)(ee, {
            ...o,
            ref: t
          })
        })
      }).displayName = Q;
      var ee = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            children: i,
            ...r
          } = e, s = S(Q, n), u = (0, c.s)(t, s.onViewportChange), f = k(q, e.__scopeNavigationMenu), [m, p] = o.useState(null), [g, h] = o.useState(null), v = m ? m?.width + "px" : void 0, w = m ? m?.height + "px" : void 0, y = Boolean(s.value), x = y ? s.value : s.previousValue;
          return ae(g, () => {
            g && p({
              width: g.offsetWidth,
              height: g.offsetHeight
            })
          }), (0, b.jsx)(l.sG.div, {
            "data-state": le(y),
            "data-orientation": s.orientation,
            ...r,
            ref: u,
            style: {
              pointerEvents: !y && s.isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": v,
              "--radix-navigation-menu-viewport-height": w,
              ...r.style
            },
            onPointerEnter: (0, a.mK)(e.onPointerEnter, s.onContentEnter),
            onPointerLeave: (0, a.mK)(e.onPointerLeave, ue(s.onContentLeave)),
            children: Array.from(f.items).map(([e, {
              ref: t,
              forceMount: n,
              ...o
            }]) => {
              const i = x === e;
              return (0, b.jsx)(d.C, {
                present: n || i,
                children: (0, b.jsx)(J, {
                  ...o,
                  ref: (0, c.t)(t, e => {
                    i && e && h(e)
                  })
                })
              }, e)
            })
          })
        }),
        te = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, i = S("FocusGroup", n);
          return (0, b.jsx)(C.Provider, {
            scope: n,
            children: (0, b.jsx)(C.Slot, {
              scope: n,
              children: (0, b.jsx)(l.sG.div, {
                dir: i.dir,
                ...o,
                ref: t
              })
            })
          })
        }),
        ne = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        oe = o.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, i = P(n), r = S("FocusGroupItem", n);
          return (0, b.jsx)(C.ItemSlot, {
            scope: n,
            children: (0, b.jsx)(l.sG.button, {
              ...o,
              ref: t,
              onKeyDown: (0, a.mK)(e.onKeyDown, e => {
                if (["Home", "End", ...ne].includes(e.key)) {
                  let t = i().map(e => e.ref.current);
                  if (["rtl" === r.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), ne.includes(e.key)) {
                    const n = t.indexOf(e.currentTarget);
                    t = t.slice(n + 1)
                  }
                  setTimeout(() => re(t)), e.preventDefault()
                }
              })
            })
          })
        });

      function ie(e) {
        const t = [],
          n = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
            acceptNode: e => {
              const t = "INPUT" === e.tagName && "hidden" === e.type;
              return e.disabled || e.hidden || t ? NodeFilter.FILTER_SKIP : e.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP
            }
          });
        for (; n.nextNode();) t.push(n.currentNode);
        return t
      }

      function re(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }

      function ae(e, t) {
        const n = (0, v.c)(t);
        (0, h.N)(() => {
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
      }

      function le(e) {
        return e ? "open" : "closed"
      }

      function se(e, t) {
        return `${e}-trigger-${t}`
      }

      function ce(e, t) {
        return `${e}-content-${t}`
      }

      function ue(e) {
        return t => "mouse" === t.pointerType ? e(t) : void 0
      }
      var de = I,
        fe = F,
        me = H,
        pe = W,
        ge = U,
        he = $
    },
    29190(e, t, n) {
      "use strict";
      n.d(t, {
        b: () => c
      });
      var o = n(93082),
        i = n(84017),
        r = n(20972),
        a = n(86627),
        l = n(39793),
        s = o.forwardRef((e, t) => {
          const {
            container: n,
            ...s
          } = e, [c, u] = o.useState(!1);
          (0, a.N)(() => u(!0), []);
          const d = n || c && globalThis?.document?.body;
          return d ? i.createPortal((0, l.jsx)(r.sG.div, {
            ...s,
            ref: t
          }), d) : null
        });
      s.displayName = "Portal";
      var c = s
    }
  }
]);