! function() {
  try {
    var t = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      e = (new Error).stack;
    e && (t._sentryDebugIds = t._sentryDebugIds || {}, t._sentryDebugIds[e] = "c82ead98-3255-454b-919c-7d9d4d4668c3", t._sentryDebugIdIdentifier = "sentry-dbid-c82ead98-3255-454b-919c-7d9d4d4668c3")
  } catch (t) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-header",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [741], {
    2741: () => {
      ! function() {
        if ("navigate" in window) return;
        const t = {
          37: "left",
          38: "up",
          39: "right",
          40: "down"
        };
        let e = null,
          n = null,
          o = {
            element: null,
            rect: null
          },
          i = null;

        function a(t) {
          const e = function() {
            let t = document.activeElement;
            if (!t || t === document.body && !document.querySelector(":focus")) {
              if (o.element && t !== o.element) {
                const e = window.getComputedStyle(o.element, null),
                  n = ["hidden", "collapse"];
                if (o.element.disabled || n.includes(e.getPropertyValue("visibility"))) return t = o.element, t
              }
              t = document.documentElement
            }
            if (!o.element || 0 !== U(o.element).height && 0 !== U(o.element).width || (i = o.rect), !_(t)) {
              const e = m(t);
              if (e && (e === window || "auto" === h(e))) return e
            }
            return t
          }();
          let a = e,
            u = null;
          n && (u = document.elementFromPoint(n.x, n.y), null === u && (u = document.body), M(u) && !b(u) ? n = null : a = b(u) ? u : u.getSpatialNavigationContainer()), a !== document && a !== document.documentElement || (a = document.body || document.documentElement);
          let d = null;
          if ((b(a) || "BODY" === a.nodeName) && "INPUT" !== a.nodeName) {
            "IFRAME" === a.nodeName && (a = a.contentDocument.documentElement), d = a;
            let n = null;
            if (document.activeElement === e || document.activeElement === document.body && e === document.documentElement) {
              if ("scroll" === h(a)) {
                if (l(a, t)) return
              } else if ("focus" === h(a)) {
                if (n = a.spatialNavigationSearch(t, {
                    container: a,
                    candidates: c(a, {
                      mode: "all"
                    })
                  }), r(n, t)) return
              } else if ("auto" === h(a) && (n = a.spatialNavigationSearch(t, {
                  container: a
                }), r(n, t) || l(a, t))) return
            } else d = d.getSpatialNavigationContainer()
          }
          d = a.getSpatialNavigationContainer();
          let s = d.parentElement ? d.getSpatialNavigationContainer() : null;
          if (s || window.location === window.parent.location || (s = window.parent.document.documentElement), "scroll" === h(d)) {
            if (l(d, t)) return
          } else "focus" === h(d) ? w(a, d, s, t, "all") : "auto" === h(d) && w(a, d, s, t, "visible")
        }

        function r(t, e) {
          if (t) {
            if (!g("beforefocus", t, null, e)) return !0;
            const o = t.getSpatialNavigationContainer();
            return o !== window && "focus" === h(o) ? t.focus() : t.focus({
              preventScroll: !0
            }), n = null, !0
          }
          return !1
        }

        function l(t, e) {
          return N(t, e) && !S(t, e) ? (y(t, e), !0) : !t.parentElement && !x(t, e) && (y(t.ownerDocument.documentElement, e), !0)
        }

        function c(t) {
          let e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {
              mode: "visible"
            },
            n = [];
          if (t.childElementCount > 0) {
            t.parentElement || (t = t.getElementsByTagName("body")[0] || document.body);
            const e = t.children;
            for (const t of e) E(t) ? n.push(t) : M(t) ? (n.push(t), !b(t) && t.childElementCount && (n = n.concat(c(t, {
              mode: "all"
            })))) : t.childElementCount && (n = n.concat(c(t, {
              mode: "all"
            })))
          }
          return "all" === e.mode ? n : n.filter(C)
        }

        function u(t, e, n, o) {
          const i = t;
          return o = o || i.getSpatialNavigationContainer(), d(i, n = !n || n.length <= 0 ? c(o) : n, e, o)
        }

        function d(t, e, n, o) {
          const a = t.getSpatialNavigationContainer();
          let r;
          return void 0 === n ? e : (r = a.parentElement && o !== a && !C(t) ? U(a) : i || U(t), !b(t) && "BODY" !== t.nodeName || "INPUT" === t.nodeName ? e.filter((e => {
            const i = U(e),
              a = "IFRAME" === e.nodeName ? e.contentDocument.body : null;
            return o.contains(e) && e !== t && a !== t && I(i, r, n) && !A(r, i)
          })) : e.filter((e => {
            const i = U(e);
            return o.contains(e) && (t.contains(e) && A(r, i) && e !== t || I(i, r, n))
          })))
        }

        function s(t, e, n) {
          const o = t.getSpatialNavigationContainer(),
            a = getComputedStyle(o).getPropertyValue("--spatial-navigation-function"),
            r = i || U(t);
          let l, c;
          return "grid" === a ? (c = e.filter((t => D(r, U(t), n))), c.length > 0 && (e = c), l = H) : l = W, f(t, e, n, l)
        }

        function f(t, e, n, o) {
          let a = null;
          window.location === window.parent.location || "BODY" !== t.nodeName && "HTML" !== t.nodeName ? a = i || t.getBoundingClientRect() : (a = window.frameElement.getBoundingClientRect(), a.x = 0, a.y = 0);
          let r = Number.POSITIVE_INFINITY,
            l = [];
          if (e)
            for (let t = 0; t < e.length; t++) {
              const i = o(a, U(e[t]), n);
              i < r ? (r = i, l = [e[t]]) : i === r && l.push(e[t])
            }
          return 0 === l.length ? null : l.length > 1 && o === H ? f(t, l, n, B) : l[0]
        }

        function m(t) {
          let e = t;
          do {
            if (!e.parentElement) {
              e = window.location !== window.parent.location ? window.parent.document.documentElement : window.document.documentElement;
              break
            }
            e = e.parentElement
          } while (!v(e) || !C(e));
          return e !== document && e !== document.documentElement || (e = window), e
        }

        function g(t, e, n, o) {
          if (["beforefocus", "notarget"].includes(t)) {
            const i = new CustomEvent("nav" + t, {
              bubbles: !0,
              cancelable: !0,
              detail: {
                causedTarget: n,
                dir: o
              }
            });
            return e.dispatchEvent(i)
          }
        }

        function p(t, e) {
          return t.style.getPropertyValue(`--${e}`).trim()
        }

        function h(t) {
          return p(t, "spatial-navigation-action") || "auto"
        }

        function w(t, e, n, o, i) {
          let a = {
            candidates: c(e, {
              mode: i
            }),
            container: e
          };
          for (; n;) {
            if (r(t.spatialNavigationSearch(o, a), o)) return;
            if ("visible" === i && l(e, o)) return; {
              if (!g("notarget", e, t, o)) return;
              e === document || e === document.documentElement ? window.location !== window.parent.location && (e = (t = window.frameElement).ownerDocument.documentElement) : e = n, a = {
                candidates: c(e, {
                  mode: i
                }),
                container: e
              };
              let r = e.getSpatialNavigationContainer();
              n = r !== e ? r : null
            }
          }
          a = {
            candidates: c(e, {
              mode: i
            }),
            container: e
          }, !n && e && r(t.spatialNavigationSearch(o, a), o) || g("notarget", a.container, t, o) && ("auto" !== h(e) || "visible" !== i || l(e, o))
        }

        function y(t, e) {
          let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
          if (t) switch (e) {
            case "left":
              t.scrollLeft -= 40 + n;
              break;
            case "right":
              t.scrollLeft += 40 + n;
              break;
            case "up":
              t.scrollTop -= 40 + n;
              break;
            case "down":
              t.scrollTop += 40 + n
          }
        }

        function b(t) {
          return !t.parentElement || "IFRAME" === t.nodeName || v(t) || function(t) {
            return "contain" === p(t, "spatial-navigation-contain")
          }(t)
        }

        function E(t) {
          return "delegable" === p(t, "spatial-navigation-contain")
        }

        function v(t) {
          const e = window.getComputedStyle(t, null),
            n = e.getPropertyValue("overflow-x"),
            o = e.getPropertyValue("overflow-y");
          return !!("visible" !== n && "clip" !== n && P(t, "left") || "visible" !== o && "clip" !== o && P(t, "down"))
        }

        function N(t, e) {
          if (t && "object" == typeof t) {
            if (e && "string" == typeof e) {
              if (P(t, e)) {
                const n = window.getComputedStyle(t, null),
                  o = n.getPropertyValue("overflow-x"),
                  i = n.getPropertyValue("overflow-y");
                switch (e) {
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
            return "HTML" === t.nodeName || "BODY" === t.nodeName || v(t) && P(t)
          }
        }

        function P(t, e) {
          if (t && "object" == typeof t) {
            if (!e || "string" != typeof e) return t.scrollWidth > t.clientWidth || t.scrollHeight > t.clientHeight;
            switch (e) {
              case "left":
              case "right":
                return t.scrollWidth > t.clientWidth;
              case "up":
              case "down":
                return t.scrollHeight > t.clientHeight
            }
            return !1
          }
        }

        function x(t, e) {
          let n = !1;
          switch (e) {
            case "left":
              n = 0 === t.scrollLeft;
              break;
            case "right":
              n = t.scrollWidth - t.scrollLeft - t.clientWidth == 0;
              break;
            case "up":
              n = 0 === t.scrollTop;
              break;
            case "down":
              n = t.scrollHeight - t.scrollTop - t.clientHeight == 0
          }
          return n
        }

        function S(t, e) {
          if (N(t, e)) {
            const n = t.scrollTop,
              o = t.scrollLeft,
              i = t.scrollHeight - t.clientHeight,
              a = t.scrollWidth - t.clientWidth;
            switch (e) {
              case "left":
                return 0 === o;
              case "right":
                return Math.abs(o - a) <= 1;
              case "up":
                return 0 === n;
              case "down":
                return Math.abs(n - i) <= 1
            }
          }
          return !1
        }

        function _(t) {
          const e = t.getBoundingClientRect();
          let n = m(t),
            o = null;
          return o = n !== window ? U(n) : new DOMRect(0, 0, window.innerWidth, window.innerHeight), !(!A(o, e) || !A(o, e))
        }

        function M(t) {
          return !(t.tabIndex < 0 || function(t) {
            return "A" === t.tagName && null === t.getAttribute("href") && null === t.getAttribute("tabIndex")
          }(t) || function(t) {
            return !!["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTGROUP", "OPTION", "FIELDSET"].includes(t.tagName) && t.disabled
          }(t) || function(t) {
            return t.inert && !t.ownerDocument.documentElement.inert
          }(t) || ! function(t) {
            return !!T(t.parentElement) && !(!T(t) || "0" === t.style.opacity || "0px" === window.getComputedStyle(t).height || "0px" === window.getComputedStyle(t).width)
          }(t)) && (!!(!t.parentElement || N(t) && P(t) || t.tabIndex >= 0) || void 0)
        }

        function C(t) {
          return !t.parentElement || T(t) && function(t) {
            const e = U(t);
            if ("IFRAME" !== t.nodeName && (e.top < 0 || e.left < 0 || e.top > t.ownerDocument.documentElement.clientHeight || e.left > t.ownerDocument.documentElement.clientWidth)) return !1;
            let n = parseInt(t.offsetWidth) / 10,
              o = parseInt(t.offsetHeight) / 10;
            n = isNaN(n) ? 1 : n, o = isNaN(o) ? 1 : o;
            const i = {
              middle: [(e.left + e.right) / 2, (e.top + e.bottom) / 2],
              leftTop: [e.left + n, e.top + o],
              rightBottom: [e.right - n, e.bottom - o]
            };
            for (const e in i) {
              const n = t.ownerDocument.elementFromPoint(...i[e]);
              if (t === n || t.contains(n)) return !0
            }
            return !1
          }(t)
        }

        function k(t, e) {
          const n = U(t),
            o = U(e || t.getSpatialNavigationContainer());
          return !(n.left < o.left || n.right > o.right || n.top < o.top || n.bottom > o.bottom)
        }

        function T(t) {
          const e = window.getComputedStyle(t, null),
            n = e.getPropertyValue("visibility");
          return "none" !== e.getPropertyValue("display") && !["hidden", "collapse"].includes(n)
        }

        function A(t, e) {
          const n = t.left <= e.right && t.right >= e.right,
            o = t.left <= e.left && t.right >= e.left,
            i = t.top <= e.top && t.bottom >= e.top,
            a = t.top <= e.bottom && t.bottom >= e.bottom;
          return (n || o) && (i || a)
        }

        function I(t, e, n) {
          switch (n) {
            case "left":
              return R(e, t);
            case "right":
              return R(t, e);
            case "up":
              return O(e, t);
            case "down":
              return O(t, e);
            default:
              return !1
          }
        }

        function R(t, e) {
          return t.left >= e.right || t.left >= e.left && t.right > e.right && t.bottom > e.top && t.top < e.bottom
        }

        function O(t, e) {
          return t.top >= e.bottom || t.top >= e.top && t.bottom > e.bottom && t.left < e.right && t.right > e.left
        }

        function D(t, e, n) {
          switch (n) {
            case "left":
            case "right":
              return t.bottom > e.top && t.top < e.bottom;
            case "up":
            case "down":
              return t.right > e.left && t.left < e.right;
            default:
              return !1
          }
        }

        function F(t, e, o) {
          const i = L(o, n, e),
            a = Math.abs(i.entryPoint.x - i.exitPoint.x),
            r = Math.abs(i.entryPoint.y - i.exitPoint.y);
          return Math.sqrt(Math.pow(a, 2) + Math.pow(r, 2))
        }

        function V(t, e, n) {
          const o = {
            left: "right",
            right: "left",
            up: "bottom",
            down: "top"
          } [n];
          return Math.abs(t[o] - e[o])
        }

        function W(t, e, n) {
          let o = 0,
            i = 0;
          const a = L(n, t, e),
            r = Math.abs(a.entryPoint.x - a.exitPoint.x),
            l = Math.abs(a.entryPoint.y - a.exitPoint.y),
            c = Math.sqrt(Math.pow(r, 2) + Math.pow(l, 2));
          let u, d;
          const s = function(t, e) {
              const n = {
                  width: 0,
                  height: 0,
                  area: 0
                },
                o = [Math.max(t.left, e.left), Math.max(t.top, e.top)],
                i = [Math.min(t.right, e.right), Math.min(t.bottom, e.bottom)];
              return n.width = Math.abs(o[0] - i[0]), n.height = Math.abs(o[1] - i[1]), o[0] >= i[0] || o[1] >= i[1] || (n.area = Math.sqrt(n.width * n.height)), n
            }(t, e),
            f = s.area;
          switch (n) {
            case "left":
            case "right":
              D(t, e, n) ? i = Math.min(s.height / t.height, 1) : o = t.height / 2, u = 30 * (l + o), d = 5 * i;
              break;
            case "up":
            case "down":
              D(t, e, n) ? i = Math.min(s.width / t.width, 1) : o = t.width / 2, u = 2 * (r + o), d = 5 * i;
              break;
            default:
              u = 0, d = 0
          }
          return c + u - d - f
        }

        function B(t, e, n) {
          const o = L(n, t, e),
            i = Math.abs(o.entryPoint.x - o.exitPoint.x),
            a = Math.abs(o.entryPoint.y - o.exitPoint.y);
          return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))
        }

        function H(t, e, n) {
          const o = L(n, t, e);
          return "left" === n || "right" === n ? Math.abs(o.entryPoint.x - o.exitPoint.x) : Math.abs(o.entryPoint.y - o.exitPoint.y)
        }

        function L() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "down",
            e = arguments.length > 1 ? arguments[1] : void 0,
            o = arguments.length > 2 ? arguments[2] : void 0;
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
            switch (i.exitPoint = e, t) {
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
            switch (t) {
              case "left":
              case "right":
                n.y <= o.top ? i.entryPoint.y = o.top : n.y < o.bottom ? i.entryPoint.y = n.y : i.entryPoint.y = o.bottom;
                break;
              case "up":
              case "down":
                n.x <= o.left ? i.entryPoint.x = o.left : n.x < o.right ? i.entryPoint.x = n.x : i.entryPoint.x = o.right
            }
          } else {
            switch (t) {
              case "left":
                i.exitPoint.x = e.left, i.entryPoint.x = o.right < e.left ? o.right : e.left;
                break;
              case "up":
                i.exitPoint.y = e.top, i.entryPoint.y = o.bottom < e.top ? o.bottom : e.top;
                break;
              case "right":
                i.exitPoint.x = e.right, i.entryPoint.x = o.left > e.right ? o.left : e.right;
                break;
              case "down":
                i.exitPoint.y = e.bottom, i.entryPoint.y = o.top > e.bottom ? o.top : e.bottom
            }
            switch (t) {
              case "left":
              case "right":
                O(e, o) ? (i.exitPoint.y = e.top, i.entryPoint.y = o.bottom < e.top ? o.bottom : e.top) : O(o, e) ? (i.exitPoint.y = e.bottom, i.entryPoint.y = o.top > e.bottom ? o.top : e.bottom) : (i.exitPoint.y = Math.max(e.top, o.top), i.entryPoint.y = i.exitPoint.y);
                break;
              case "up":
              case "down":
                R(e, o) ? (i.exitPoint.x = e.left, i.entryPoint.x = o.right < e.left ? o.right : e.left) : R(o, e) ? (i.exitPoint.x = e.right, i.entryPoint.x = o.left > e.right ? o.left : e.right) : (i.exitPoint.x = Math.max(e.left, o.left), i.entryPoint.x = i.exitPoint.x)
            }
          }
          return i
        }

        function U(t) {
          let n = e && e.get(t);
          if (!n) {
            const o = t.getBoundingClientRect();
            n = {
              top: Number(o.top.toFixed(2)),
              right: Number(o.right.toFixed(2)),
              bottom: Number(o.bottom.toFixed(2)),
              left: Number(o.left.toFixed(2)),
              width: Number(o.width.toFixed(2)),
              height: Number(o.height.toFixed(2))
            }, e && e.set(t, n)
          }
          return n
        }

        function Y(t) {
          const e = window.__spatialNavigation__ && window.__spatialNavigation__.keyMode;
          window.__spatialNavigation__ = !1 === t ? q() : Object.assign(q(), function() {
            function t(t, e) {
              return N(t, e) && !S(t, e) || !t.parentElement && !x(t, e)
            }

            function e(e, n, o, i) {
              let a = n,
                r = null;
              if (a !== document && a !== document.documentElement || (a = document.body || document.documentElement), (b(a) || "BODY" === a.nodeName) && "INPUT" !== a.nodeName) {
                "IFRAME" === a.nodeName && (a = a.contentDocument.body);
                const n = c(a, i);
                if (Array.isArray(n) && n.length > 0) return e ? u(a, o, n) : a.spatialNavigationSearch(o, {
                  candidates: n
                });
                if (t(a, o)) return e ? [] : a
              }
              let l = a.getSpatialNavigationContainer(),
                s = l.parentElement ? l.getSpatialNavigationContainer() : null;
              for (s || window.location === window.parent.location || (s = window.parent.document.documentElement); s;) {
                const n = d(a, c(l, i), o, l);
                if (Array.isArray(n) && n.length > 0) {
                  if (r = a.spatialNavigationSearch(o, {
                      candidates: n,
                      container: l
                    }), r) return e ? n : r
                } else {
                  if (t(l, o)) return e ? [] : a;
                  if (l === document || l === document.documentElement) {
                    if (l = window.document.documentElement, window.location !== window.parent.location) {
                      if (a = window.frameElement, l = window.parent.document.documentElement, !l.parentElement) {
                        s = null;
                        break
                      }
                      s = l.getSpatialNavigationContainer()
                    }
                  } else {
                    if (M(l) && (a = l), l = s, !l.parentElement) {
                      s = null;
                      break
                    }
                    s = l.getSpatialNavigationContainer()
                  }
                }
              }
              if (!s && l) {
                const t = d(a, c(l, i), o, l);
                if (Array.isArray(t) && t.length > 0 && (r = a.spatialNavigationSearch(o, {
                    candidates: t,
                    container: l
                  }), r)) return e ? t : r
              }
              if (t(l, o)) return r = a, r
            }
            return {
              isContainer: b,
              isScrollContainer: v,
              isVisibleInScroller: _,
              findCandidates: e.bind(null, !0),
              findNextTarget: e.bind(null, !1),
              getDistanceFromTarget: (t, e, n) => (b(t) || "BODY" === t.nodeName) && "INPUT" !== t.nodeName && c(t).includes(e) ? V(U(t), U(e), n) : W(U(t), U(e), n)
            }
          }()), window.__spatialNavigation__.keyMode = e, Object.seal(window.__spatialNavigation__)
        }

        function q() {
          return {
            enableExperimentalAPIs: Y,
            get keyMode() {
              return this._keymode ? this._keymode : "ARROW"
            },
            set keyMode(t) {
              this._keymode = ["SHIFTARROW", "ARROW", "NONE"].includes(t) ? t : "ARROW"
            },
            setStartingPoint: function(t, e) {
              n = t && e ? {
                x: t,
                y: e
              } : null
            }
          }
        }
        window.navigate = a, window.Element.prototype.spatialNavigationSearch = function(t, e) {
          const o = this;
          let a, r = [],
            l = [],
            d = function(t) {
              const e = t.getSpatialNavigationContainer().focusableAreas(),
                n = [];
              return e.forEach((e => {
                t !== e && k(e, t) && n.push(e)
              })), n
            }(o);
          e || (e = {});
          const m = o.getSpatialNavigationContainer();
          let g = c(m);
          const p = e.container || m;
          e.container && m.contains(e.container) && (g = g.concat(c(p)));
          const h = e.candidates && e.candidates.length > 0 ? e.candidates.filter((t => p.contains(t))) : g.filter((t => p.contains(t) && p !== t));
          if (h && h.length > 0) {
            h.forEach((t => {
              t !== o && (o.contains(t) && o !== t ? r : l).push(t)
            }));
            let e = d.filter((t => !r.includes(t))),
              m = h.filter((t => b(t) && k(o, t))).map((t => t.focusableAreas())).flat().filter((t => t !== o));
            if (r = r.concat(e).filter((t => p.contains(t))), l = l.concat(m).filter((t => p.contains(t))), l.length > 0 && (l = u(o, t, l, p)), i && (a = s(o, u(o, t, r, p), t)), r && r.length > 0 && "INPUT" !== o.nodeName && (a = function(t, e, o) {
                return f(t, e, o, n ? F : V)
              }(o, r, t)), a = a || s(o, l, t), a && E(a)) {
              const e = c(a, {
                  mode: "all"
                }),
                n = e.length > 0 ? o.spatialNavigationSearch(t, {
                  candidates: e,
                  container: a
                }) : null;
              n ? a = n : M(a) || (h.splice(h.indexOf(a), 1), a = h.length ? o.spatialNavigationSearch(t, {
                candidates: h,
                container: p
              }) : null)
            }
            return a
          }
          return null
        }, window.Element.prototype.focusableAreas = function() {
          let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            mode: "visible"
          };
          const e = this.parentElement ? this : document.body,
            n = Array.prototype.filter.call(e.getElementsByTagName("*"), M);
          return "all" === t.mode ? n : n.filter(C)
        }, window.Element.prototype.getSpatialNavigationContainer = function() {
          let t = this;
          do {
            if (!t.parentElement) {
              t = window.location !== window.parent.location ? window.parent.document.documentElement : window.document.documentElement;
              break
            }
            t = t.parentElement
          } while (!b(t));
          return t
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
        })), Y(!1), window.addEventListener("load", (() => {
          window.addEventListener("keydown", (o => {
            const i = parent && parent.__spatialNavigation__.keyMode || window.__spatialNavigation__.keyMode,
              r = document.activeElement,
              l = t[o.keyCode];
            if (9 === o.keyCode && (n = null), !(!i || "NONE" === i || "SHIFTARROW" === i && !o.shiftKey || "ARROW" === i && o.shiftKey || o.defaultPrevented)) {
              let i = {
                left: !0,
                up: !0,
                right: !0,
                down: !0
              };
              "INPUT" !== r.nodeName && "TEXTAREA" !== r.nodeName || (i = function(e) {
                const n = document.activeElement,
                  o = n.selectionStart,
                  i = n.selectionEnd,
                  a = {
                    left: !1,
                    up: !1,
                    right: !1,
                    down: !1
                  },
                  r = t[e.keyCode];
                return void 0 === r || (["email", "date", "month", "number", "time", "week"].includes(n.getAttribute("type")) && ("up" === r || "down" === r) || !["password", "text", "search", "tel", "url", null].includes(n.getAttribute("type")) && "TEXTAREA" !== n.nodeName ? a[r] = !0 : o === i && (0 === o && (a.left = !0, a.up = !0), i === n.value.length && (a.right = !0, a.down = !0))), a
              }(o)), i[l] && (o.preventDefault(), e = new Map, a(l), e = null, n = null)
            }
          })), document.addEventListener("mouseup", (t => {
            n = {
              x: t.clientX,
              y: t.clientY
            }
          })), window.addEventListener("focusin", (t => {
            t.target !== window && (o.element = t.target, o.rect = t.target.getBoundingClientRect())
          }))
        }))
      }()
    }
  }
]);