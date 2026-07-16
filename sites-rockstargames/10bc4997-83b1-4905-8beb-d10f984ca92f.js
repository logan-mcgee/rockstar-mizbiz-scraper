try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "10bc4997-83b1-4905-8beb-d10f984ca92f", e._sentryDebugIdIdentifier = "sentry-dbid-10bc4997-83b1-4905-8beb-d10f984ca92f")
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
  [5736], {
    45787(e, t, n) {
      "use strict";
      n.d(t, {
        Eq: () => l
      });
      var r = new WeakMap,
        o = new WeakMap,
        i = {},
        a = 0,
        s = function(e) {
          return e && (e.host || s(e.parentNode))
        },
        l = function(e, t, n) {
          void 0 === n && (n = "data-aria-hidden");
          var l = Array.from(Array.isArray(e) ? e : [e]),
            c = t || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return c ? (l.push.apply(l, Array.from(c.querySelectorAll("[aria-live], script"))), function(e, t, n, l) {
            var c = function(e, t) {
              return t.map(function(t) {
                if (e.contains(t)) return t;
                var n = s(t);
                return n && e.contains(n) ? n : (console.error("aria-hidden", t, "in not contained inside", e, ". Doing nothing"), null)
              }).filter(function(e) {
                return Boolean(e)
              })
            }(t, Array.isArray(e) ? e : [e]);
            i[n] || (i[n] = new WeakMap);
            var u = i[n],
              h = [],
              f = new Set,
              m = new Set(c),
              d = function(e) {
                e && !f.has(e) && (f.add(e), d(e.parentNode))
              };
            c.forEach(d);
            var p = function(e) {
              e && !m.has(e) && Array.prototype.forEach.call(e.children, function(e) {
                if (f.has(e)) p(e);
                else try {
                  var t = e.getAttribute(l),
                    i = null !== t && "false" !== t,
                    a = (r.get(e) || 0) + 1,
                    s = (u.get(e) || 0) + 1;
                  r.set(e, a), u.set(e, s), h.push(e), 1 === a && i && o.set(e, !0), 1 === s && e.setAttribute(n, "true"), i || e.setAttribute(l, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", e, t)
                }
              })
            };
            return p(t), f.clear(), a++,
              function() {
                h.forEach(function(e) {
                  var t = r.get(e) - 1,
                    i = u.get(e) - 1;
                  r.set(e, t), u.set(e, i), t || (o.has(e) || e.removeAttribute(l), o.delete(e)), i || e.removeAttribute(n)
                }), --a || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(l, c, n, "aria-hidden")) : function() {
            return null
          }
        }
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
          r = {
            element: null,
            rect: null
          },
          o = null;

        function i(e) {
          const t = function() {
            let e = document.activeElement;
            if (!e || e === document.body && !document.querySelector(":focus")) {
              if (r.element && e !== r.element) {
                const t = window.getComputedStyle(r.element, null),
                  n = ["hidden", "collapse"];
                if (r.element.disabled || n.includes(t.getPropertyValue("visibility"))) return e = r.element, e
              }
              e = document.documentElement
            }
            if (!r.element || 0 !== j(r.element).height && 0 !== j(r.element).width || (o = r.rect), !S(e)) {
              const t = m(e);
              if (t && (t === window || "auto" === g(t))) return t
            }
            return e
          }();
          let i = t,
            c = null;
          n && (c = document.elementFromPoint(n.x, n.y), null === c && (c = document.body), B(c) && !E(c) ? n = null : i = E(c) ? c : c.getSpatialNavigationContainer()), i !== document && i !== document.documentElement || (i = document.body || document.documentElement);
          let u = null;
          if ((E(i) || "BODY" === i.nodeName) && "INPUT" !== i.nodeName) {
            "IFRAME" === i.nodeName && (i = i.contentDocument.documentElement), u = i;
            let n = null;
            if (document.activeElement === t || document.activeElement === document.body && t === document.documentElement) {
              if ("scroll" === g(i)) {
                if (s(i, e)) return
              } else if ("focus" === g(i)) {
                if (n = i.spatialNavigationSearch(e, {
                    container: i,
                    candidates: l(i, {
                      mode: "all"
                    })
                  }), a(n, e)) return
              } else if ("auto" === g(i) && (n = i.spatialNavigationSearch(e, {
                  container: i
                }), a(n, e) || s(i, e))) return
            } else u = u.getSpatialNavigationContainer()
          }
          u = i.getSpatialNavigationContainer();
          let h = u.parentElement ? u.getSpatialNavigationContainer() : null;
          if (h || window.location === window.parent.location || (h = window.parent.document.documentElement), "scroll" === g(u)) {
            if (s(u, e)) return
          } else "focus" === g(u) ? b(i, u, h, e, "all") : "auto" === g(u) && b(i, u, h, e, "visible")
        }

        function a(e, t) {
          if (e) {
            if (!d("beforefocus", e, null, t)) return !0;
            const r = e.getSpatialNavigationContainer();
            return r !== window && "focus" === g(r) ? e.focus() : e.focus({
              preventScroll: !0
            }), n = null, !0
          }
          return !1
        }

        function s(e, t) {
          return T(e, t) && !H(e, t) ? (y(e, t), !0) : !e.parentElement && !P(e, t) && (y(e.ownerDocument.documentElement, t), !0)
        }

        function l(e, t = {
          mode: "visible"
        }) {
          let n = [];
          if (e.childElementCount > 0) {
            e.parentElement || (e = e.getElementsByTagName("body")[0] || document.body);
            const t = e.children;
            for (const e of t) w(e) ? n.push(e) : B(e) ? (n.push(e), !E(e) && e.childElementCount && (n = n.concat(l(e, {
              mode: "all"
            })))) : e.childElementCount && (n = n.concat(l(e, {
              mode: "all"
            })))
          }
          return "all" === t.mode ? n : n.filter(M)
        }

        function c(e, t, n, r) {
          const o = e;
          return r = r || o.getSpatialNavigationContainer(), u(o, n = !n || n.length <= 0 ? l(r) : n, t, r)
        }

        function u(e, t, n, r) {
          const i = e.getSpatialNavigationContainer();
          let a;
          return void 0 === n ? t : (a = i.parentElement && r !== i && !M(e) ? j(i) : o || j(e), !E(e) && "BODY" !== e.nodeName || "INPUT" === e.nodeName ? t.filter(t => {
            const o = j(t),
              i = "IFRAME" === t.nodeName ? t.contentDocument.body : null;
            return r.contains(t) && t !== e && i !== e && C(o, a, n) && !A(a, o)
          }) : t.filter(t => {
            const o = j(t);
            return r.contains(t) && (e.contains(t) && A(a, o) && t !== e || C(o, a, n))
          }))
        }

        function h(e, t, n) {
          const r = e.getSpatialNavigationContainer(),
            i = getComputedStyle(r).getPropertyValue("--spatial-navigation-function"),
            a = o || j(e);
          let s, l;
          return "grid" === i ? (l = t.filter(e => x(a, j(e), n)), l.length > 0 && (t = l), s = U) : s = F, f(e, t, n, s)
        }

        function f(e, t, n, r) {
          let i = null;
          window.location === window.parent.location || "BODY" !== e.nodeName && "HTML" !== e.nodeName ? i = o || e.getBoundingClientRect() : (i = window.frameElement.getBoundingClientRect(), i.x = 0, i.y = 0);
          let a = Number.POSITIVE_INFINITY,
            s = [];
          if (t)
            for (let e = 0; e < t.length; e++) {
              const o = r(i, j(t[e]), n);
              o < a ? (a = o, s = [t[e]]) : o === a && s.push(t[e])
            }
          return 0 === s.length ? null : s.length > 1 && r === U ? f(e, s, n, k) : s[0]
        }

        function m(e) {
          let t = e;
          do {
            if (!t.parentElement) {
              t = window.location !== window.parent.location ? window.parent.document.documentElement : window.document.documentElement;
              break
            }
            t = t.parentElement
          } while (!v(t) || !M(t));
          return t !== document && t !== document.documentElement || (t = window), t
        }

        function d(e, t, n, r) {
          if (["beforefocus", "notarget"].includes(e)) {
            const o = new CustomEvent("nav" + e, {
              bubbles: !0,
              cancelable: !0,
              detail: {
                causedTarget: n,
                dir: r
              }
            });
            return t.dispatchEvent(o)
          }
        }

        function p(e, t) {
          return e.style.getPropertyValue(`--${t}`).trim()
        }

        function g(e) {
          return p(e, "spatial-navigation-action") || "auto"
        }

        function b(e, t, n, r, o) {
          let i = {
            candidates: l(t, {
              mode: o
            }),
            container: t
          };
          for (; n;) {
            if (a(e.spatialNavigationSearch(r, i), r)) return;
            if ("visible" === o && s(t, r)) return; {
              if (!d("notarget", t, e, r)) return;
              t === document || t === document.documentElement ? window.location !== window.parent.location && (t = (e = window.frameElement).ownerDocument.documentElement) : t = n, i = {
                candidates: l(t, {
                  mode: o
                }),
                container: t
              };
              let a = t.getSpatialNavigationContainer();
              n = a !== t ? a : null
            }
          }
          i = {
            candidates: l(t, {
              mode: o
            }),
            container: t
          }, !n && t && a(e.spatialNavigationSearch(r, i), r) || d("notarget", i.container, e, r) && ("auto" !== g(t) || "visible" !== o || s(t, r))
        }

        function y(e, t, n = 0) {
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

        function E(e) {
          return !e.parentElement || "IFRAME" === e.nodeName || v(e) || function(e) {
            return "contain" === p(e, "spatial-navigation-contain")
          }(e)
        }

        function w(e) {
          return "delegable" === p(e, "spatial-navigation-contain")
        }

        function v(e) {
          const t = window.getComputedStyle(e, null),
            n = t.getPropertyValue("overflow-x"),
            r = t.getPropertyValue("overflow-y");
          return !!("visible" !== n && "clip" !== n && N(e, "left") || "visible" !== r && "clip" !== r && N(e, "down"))
        }

        function T(e, t) {
          if (e && "object" == typeof e) {
            if (t && "string" == typeof t) {
              if (N(e, t)) {
                const n = window.getComputedStyle(e, null),
                  r = n.getPropertyValue("overflow-x"),
                  o = n.getPropertyValue("overflow-y");
                switch (t) {
                  case "left":
                  case "right":
                    return "visible" !== r && "clip" !== r && "hidden" !== r;
                  case "up":
                  case "down":
                    return "visible" !== o && "clip" !== o && "hidden" !== o
                }
              }
              return !1
            }
            return "HTML" === e.nodeName || "BODY" === e.nodeName || v(e) && N(e)
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

        function P(e, t) {
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

        function H(e, t) {
          if (T(e, t)) {
            const n = e.scrollTop,
              r = e.scrollLeft,
              o = e.scrollHeight - e.clientHeight,
              i = e.scrollWidth - e.clientWidth;
            switch (t) {
              case "left":
                return 0 === r;
              case "right":
                return Math.abs(r - i) <= 1;
              case "up":
                return 0 === n;
              case "down":
                return Math.abs(n - o) <= 1
            }
          }
          return !1
        }

        function S(e) {
          const t = e.getBoundingClientRect();
          let n = m(e),
            r = null;
          return r = n !== window ? j(n) : new DOMRect(0, 0, window.innerWidth, window.innerHeight), !(!A(r, t) || !A(r, t))
        }

        function B(e) {
          return !(e.tabIndex < 0 || function(e) {
            return "A" === e.tagName && null === e.getAttribute("href") && null === e.getAttribute("tabIndex")
          }(e) || function(e) {
            return !!["BUTTON", "INPUT", "SELECT", "TEXTAREA", "OPTGROUP", "OPTION", "FIELDSET"].includes(e.tagName) && e.disabled
          }(e) || function(e) {
            return e.inert && !e.ownerDocument.documentElement.inert
          }(e) || ! function(e) {
            return !!_(e.parentElement) && !(!_(e) || "0" === e.style.opacity || "0px" === window.getComputedStyle(e).height || "0px" === window.getComputedStyle(e).width)
          }(e)) && (!!(!e.parentElement || T(e) && N(e) || e.tabIndex >= 0) || void 0)
        }

        function M(e) {
          return !e.parentElement || _(e) && function(e) {
            const t = j(e);
            if ("IFRAME" !== e.nodeName && (t.top < 0 || t.left < 0 || t.top > e.ownerDocument.documentElement.clientHeight || t.left > e.ownerDocument.documentElement.clientWidth)) return !1;
            let n = parseInt(e.offsetWidth) / 10,
              r = parseInt(e.offsetHeight) / 10;
            n = isNaN(n) ? 1 : n, r = isNaN(r) ? 1 : r;
            const o = {
              middle: [(t.left + t.right) / 2, (t.top + t.bottom) / 2],
              leftTop: [t.left + n, t.top + r],
              rightBottom: [t.right - n, t.bottom - r]
            };
            for (const t in o) {
              const n = e.ownerDocument.elementFromPoint(...o[t]);
              if (e === n || e.contains(n)) return !0
            }
            return !1
          }(e)
        }

        function I(e, t) {
          const n = j(e),
            r = j(t || e.getSpatialNavigationContainer());
          return !(n.left < r.left || n.right > r.right || n.top < r.top || n.bottom > r.bottom)
        }

        function _(e) {
          const t = window.getComputedStyle(e, null),
            n = t.getPropertyValue("visibility");
          return "none" !== t.getPropertyValue("display") && !["hidden", "collapse"].includes(n)
        }

        function A(e, t) {
          const n = e.left <= t.right && e.right >= t.right,
            r = e.left <= t.left && e.right >= t.left,
            o = e.top <= t.top && e.bottom >= t.top,
            i = e.top <= t.bottom && e.bottom >= t.bottom;
          return (n || r) && (o || i)
        }

        function C(e, t, n) {
          switch (n) {
            case "left":
              return R(t, e);
            case "right":
              return R(e, t);
            case "up":
              return L(t, e);
            case "down":
              return L(e, t);
            default:
              return !1
          }
        }

        function R(e, t) {
          return e.left >= t.right || e.left >= t.left && e.right > t.right && e.bottom > t.top && e.top < t.bottom
        }

        function L(e, t) {
          return e.top >= t.bottom || e.top >= t.top && e.bottom > t.bottom && e.left < t.right && e.right > t.left
        }

        function x(e, t, n) {
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

        function D(e, t, r) {
          const o = G(r, n, t),
            i = Math.abs(o.entryPoint.x - o.exitPoint.x),
            a = Math.abs(o.entryPoint.y - o.exitPoint.y);
          return Math.sqrt(Math.pow(i, 2) + Math.pow(a, 2))
        }

        function O(e, t, n) {
          const r = {
            left: "right",
            right: "left",
            up: "bottom",
            down: "top"
          } [n];
          return Math.abs(e[r] - t[r])
        }

        function F(e, t, n) {
          let r = 0,
            o = 0;
          const i = G(n, e, t),
            a = Math.abs(i.entryPoint.x - i.exitPoint.x),
            s = Math.abs(i.entryPoint.y - i.exitPoint.y),
            l = Math.sqrt(Math.pow(a, 2) + Math.pow(s, 2));
          let c, u;
          const h = function(e, t) {
              const n = {
                  width: 0,
                  height: 0,
                  area: 0
                },
                r = [Math.max(e.left, t.left), Math.max(e.top, t.top)],
                o = [Math.min(e.right, t.right), Math.min(e.bottom, t.bottom)];
              return n.width = Math.abs(r[0] - o[0]), n.height = Math.abs(r[1] - o[1]), r[0] >= o[0] || r[1] >= o[1] || (n.area = Math.sqrt(n.width * n.height)), n
            }(e, t),
            f = h.area;
          switch (n) {
            case "left":
            case "right":
              x(e, t, n) ? o = Math.min(h.height / e.height, 1) : r = e.height / 2, c = 30 * (s + r), u = 5 * o;
              break;
            case "up":
            case "down":
              x(e, t, n) ? o = Math.min(h.width / e.width, 1) : r = e.width / 2, c = 2 * (a + r), u = 5 * o;
              break;
            default:
              c = 0, u = 0
          }
          return l + c - u - f
        }

        function k(e, t, n) {
          const r = G(n, e, t),
            o = Math.abs(r.entryPoint.x - r.exitPoint.x),
            i = Math.abs(r.entryPoint.y - r.exitPoint.y);
          return Math.sqrt(Math.pow(o, 2) + Math.pow(i, 2))
        }

        function U(e, t, n) {
          const r = G(n, e, t);
          return "left" === n || "right" === n ? Math.abs(r.entryPoint.x - r.exitPoint.x) : Math.abs(r.entryPoint.y - r.exitPoint.y)
        }

        function G(e = "down", t, r) {
          const o = {
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
            switch (o.exitPoint = t, e) {
              case "left":
                o.entryPoint.x = r.right;
                break;
              case "up":
                o.entryPoint.y = r.bottom;
                break;
              case "right":
                o.entryPoint.x = r.left;
                break;
              case "down":
                o.entryPoint.y = r.top
            }
            switch (e) {
              case "left":
              case "right":
                n.y <= r.top ? o.entryPoint.y = r.top : n.y < r.bottom ? o.entryPoint.y = n.y : o.entryPoint.y = r.bottom;
                break;
              case "up":
              case "down":
                n.x <= r.left ? o.entryPoint.x = r.left : n.x < r.right ? o.entryPoint.x = n.x : o.entryPoint.x = r.right
            }
          } else {
            switch (e) {
              case "left":
                o.exitPoint.x = t.left, o.entryPoint.x = r.right < t.left ? r.right : t.left;
                break;
              case "up":
                o.exitPoint.y = t.top, o.entryPoint.y = r.bottom < t.top ? r.bottom : t.top;
                break;
              case "right":
                o.exitPoint.x = t.right, o.entryPoint.x = r.left > t.right ? r.left : t.right;
                break;
              case "down":
                o.exitPoint.y = t.bottom, o.entryPoint.y = r.top > t.bottom ? r.top : t.bottom
            }
            switch (e) {
              case "left":
              case "right":
                L(t, r) ? (o.exitPoint.y = t.top, o.entryPoint.y = r.bottom < t.top ? r.bottom : t.top) : L(r, t) ? (o.exitPoint.y = t.bottom, o.entryPoint.y = r.top > t.bottom ? r.top : t.bottom) : (o.exitPoint.y = Math.max(t.top, r.top), o.entryPoint.y = o.exitPoint.y);
                break;
              case "up":
              case "down":
                R(t, r) ? (o.exitPoint.x = t.left, o.entryPoint.x = r.right < t.left ? r.right : t.left) : R(r, t) ? (o.exitPoint.x = t.right, o.entryPoint.x = r.left > t.right ? r.left : t.right) : (o.exitPoint.x = Math.max(t.left, r.left), o.entryPoint.x = o.exitPoint.x)
            }
          }
          return o
        }

        function j(e) {
          let n = t && t.get(e);
          if (!n) {
            const r = e.getBoundingClientRect();
            n = {
              top: Number(r.top.toFixed(2)),
              right: Number(r.right.toFixed(2)),
              bottom: Number(r.bottom.toFixed(2)),
              left: Number(r.left.toFixed(2)),
              width: Number(r.width.toFixed(2)),
              height: Number(r.height.toFixed(2))
            }, t && t.set(e, n)
          }
          return n
        }

        function V(e) {
          const t = window.__spatialNavigation__ && window.__spatialNavigation__.keyMode;
          window.__spatialNavigation__ = !1 === e ? K() : Object.assign(K(), function() {
            function e(e, t) {
              return T(e, t) && !H(e, t) || !e.parentElement && !P(e, t)
            }

            function t(t, n, r, o) {
              let i = n,
                a = null;
              if (i !== document && i !== document.documentElement || (i = document.body || document.documentElement), (E(i) || "BODY" === i.nodeName) && "INPUT" !== i.nodeName) {
                "IFRAME" === i.nodeName && (i = i.contentDocument.body);
                const n = l(i, o);
                if (Array.isArray(n) && n.length > 0) return t ? c(i, r, n) : i.spatialNavigationSearch(r, {
                  candidates: n
                });
                if (e(i, r)) return t ? [] : i
              }
              let s = i.getSpatialNavigationContainer(),
                h = s.parentElement ? s.getSpatialNavigationContainer() : null;
              for (h || window.location === window.parent.location || (h = window.parent.document.documentElement); h;) {
                const n = u(i, l(s, o), r, s);
                if (Array.isArray(n) && n.length > 0) {
                  if (a = i.spatialNavigationSearch(r, {
                      candidates: n,
                      container: s
                    }), a) return t ? n : a
                } else {
                  if (e(s, r)) return t ? [] : i;
                  if (s === document || s === document.documentElement) {
                    if (s = window.document.documentElement, window.location !== window.parent.location) {
                      if (i = window.frameElement, s = window.parent.document.documentElement, !s.parentElement) {
                        h = null;
                        break
                      }
                      h = s.getSpatialNavigationContainer()
                    }
                  } else {
                    if (B(s) && (i = s), s = h, !s.parentElement) {
                      h = null;
                      break
                    }
                    h = s.getSpatialNavigationContainer()
                  }
                }
              }
              if (!h && s) {
                const e = u(i, l(s, o), r, s);
                if (Array.isArray(e) && e.length > 0 && (a = i.spatialNavigationSearch(r, {
                    candidates: e,
                    container: s
                  }), a)) return t ? e : a
              }
              if (e(s, r)) return a = i, a
            }
            return {
              isContainer: E,
              isScrollContainer: v,
              isVisibleInScroller: S,
              findCandidates: t.bind(null, !0),
              findNextTarget: t.bind(null, !1),
              getDistanceFromTarget: (e, t, n) => (E(e) || "BODY" === e.nodeName) && "INPUT" !== e.nodeName && l(e).includes(t) ? O(j(e), j(t), n) : F(j(e), j(t), n)
            }
          }()), window.__spatialNavigation__.keyMode = t, Object.seal(window.__spatialNavigation__)
        }

        function K() {
          return {
            enableExperimentalAPIs: V,
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
        window.navigate = i, window.Element.prototype.spatialNavigationSearch = function(e, t) {
          const r = this;
          let i, a = [],
            s = [],
            u = function(e) {
              const t = e.getSpatialNavigationContainer().focusableAreas(),
                n = [];
              return t.forEach(t => {
                e !== t && I(t, e) && n.push(t)
              }), n
            }(r);
          t || (t = {});
          const m = r.getSpatialNavigationContainer();
          let d = l(m);
          const p = t.container || m;
          t.container && m.contains(t.container) && (d = d.concat(l(p)));
          const g = t.candidates && t.candidates.length > 0 ? t.candidates.filter(e => p.contains(e)) : d.filter(e => p.contains(e) && p !== e);
          if (g && g.length > 0) {
            g.forEach(e => {
              e !== r && (r.contains(e) && r !== e ? a : s).push(e)
            });
            let t = u.filter(e => !a.includes(e)),
              m = g.filter(e => E(e) && I(r, e)).map(e => e.focusableAreas()).flat().filter(e => e !== r);
            if (a = a.concat(t).filter(e => p.contains(e)), s = s.concat(m).filter(e => p.contains(e)), s.length > 0 && (s = c(r, e, s, p)), o && (i = h(r, c(r, e, a, p), e)), a && a.length > 0 && "INPUT" !== r.nodeName && (i = function(e, t, r) {
                return f(e, t, r, n ? D : O)
              }(r, a, e)), i = i || h(r, s, e), i && w(i)) {
              const t = l(i, {
                  mode: "all"
                }),
                n = t.length > 0 ? r.spatialNavigationSearch(e, {
                  candidates: t,
                  container: i
                }) : null;
              n ? i = n : B(i) || (g.splice(g.indexOf(i), 1), i = g.length ? r.spatialNavigationSearch(e, {
                candidates: g,
                container: p
              }) : null)
            }
            return i
          }
          return null
        }, window.Element.prototype.focusableAreas = function(e = {
          mode: "visible"
        }) {
          const t = this.parentElement ? this : document.body,
            n = Array.prototype.filter.call(t.getElementsByTagName("*"), B);
          return "all" === e.mode ? n : n.filter(M)
        }, window.Element.prototype.getSpatialNavigationContainer = function() {
          let e = this;
          do {
            if (!e.parentElement) {
              e = window.location !== window.parent.location ? window.parent.document.documentElement : window.document.documentElement;
              break
            }
            e = e.parentElement
          } while (!E(e));
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
        })), V(!1), window.addEventListener("load", () => {
          window.addEventListener("keydown", r => {
            const o = parent && parent.__spatialNavigation__.keyMode || window.__spatialNavigation__.keyMode,
              a = document.activeElement,
              s = e[r.keyCode];
            if (9 === r.keyCode && (n = null), !(!o || "NONE" === o || "SHIFTARROW" === o && !r.shiftKey || "ARROW" === o && r.shiftKey || r.defaultPrevented)) {
              let o = {
                left: !0,
                up: !0,
                right: !0,
                down: !0
              };
              "INPUT" !== a.nodeName && "TEXTAREA" !== a.nodeName || (o = function(t) {
                const n = document.activeElement,
                  r = n.selectionStart,
                  o = n.selectionEnd,
                  i = {
                    left: !1,
                    up: !1,
                    right: !1,
                    down: !1
                  },
                  a = e[t.keyCode];
                return void 0 === a || (["email", "date", "month", "number", "time", "week"].includes(n.getAttribute("type")) && ("up" === a || "down" === a) || !["password", "text", "search", "tel", "url", null].includes(n.getAttribute("type")) && "TEXTAREA" !== n.nodeName ? i[a] = !0 : r === o && (0 === r && (i.left = !0, i.up = !0), o === n.value.length && (i.right = !0, i.down = !0))), i
              }(r)), o[s] && (r.preventDefault(), t = new Map, i(s), t = null, n = null)
            }
          }), document.addEventListener("mouseup", e => {
            n = {
              x: e.clientX,
              y: e.clientY
            }
          }), window.addEventListener("focusin", e => {
            e.target !== window && (r.element = e.target, r.rect = e.target.getBoundingClientRect())
          })
        })
      }()
    },
    17194(e, t, n) {
      "use strict";
      n.d(t, {
        m: () => r.m
      });
      var r = n(56550)
    },
    39467(e, t, n) {
      "use strict";

      function r(e, t, {
        checkForDefaultPrevented: n = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === n || !r.defaultPrevented) return t?.(r)
        }
      }
      n.d(t, {
        mK: () => r
      }), "undefined" == typeof window || !window.document || window.document.createElement
    },
    54958(e, t, n) {
      "use strict";
      n.d(t, {
        A: () => i
      });
      var r = n(93082),
        o = n(39793);

      function i(e, t = []) {
        let n = [];
        const i = () => {
          const t = n.map(e => r.createContext(e));
          return function(n) {
            const o = n?.[e] || t;
            return r.useMemo(() => ({
              [`__scope${e}`]: {
                ...n,
                [e]: o
              }
            }), [n, o])
          }
        };
        return i.scopeName = e, [function(t, i) {
          const a = r.createContext(i);
          a.displayName = t + "Context";
          const s = n.length;
          n = [...n, i];
          const l = t => {
            const {
              scope: n,
              children: i,
              ...l
            } = t, c = n?.[e]?.[s] || a, u = r.useMemo(() => l, Object.values(l));
            return (0, o.jsx)(c.Provider, {
              value: u,
              children: i
            })
          };
          return l.displayName = t + "Provider", [l, function(n, o) {
            const l = o?.[e]?.[s] || a,
              c = r.useContext(l);
            if (c) return c;
            if (void 0 !== i) return i;
            throw new Error(`\`${n}\` must be used within \`${t}\``)
          }]
        }, a(i, ...t)]
      }

      function a(...e) {
        const t = e[0];
        if (1 === e.length) return t;
        const n = () => {
          const n = e.map(e => ({
            useScope: e(),
            scopeName: e.scopeName
          }));
          return function(e) {
            const o = n.reduce((t, {
              useScope: n,
              scopeName: r
            }) => ({
              ...t,
              ...n(e)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${t.scopeName}`]: o
            }), [o])
          }
        };
        return n.scopeName = t.scopeName, n
      }
    },
    38174(e, t, n) {
      "use strict";
      n.d(t, {
        Oh: () => a
      });
      var r = n(93082),
        o = 0,
        i = null;

      function a() {
        r.useEffect(() => {
          i || (i = {
            start: s(),
            end: s()
          });
          const {
            start: e,
            end: t
          } = i;
          return document.body.firstElementChild !== e && document.body.insertAdjacentElement("afterbegin", e), document.body.lastElementChild !== t && document.body.insertAdjacentElement("beforeend", t), o++, () => {
            1 === o && (i?.start.remove(), i?.end.remove(), i = null), o = Math.max(0, o - 1)
          }
        }, [])
      }

      function s() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    94296(e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        B: () => l
      });
      var o = n(93082),
        i = n(10198),
        a = (r || (r = n.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        s = 0;

      function l(e) {
        const [t, n] = o.useState(a());
        return (0, i.N)(() => {
          e || n(e => e ?? String(s++))
        }, [e]), e || (t ? `radix-${t}` : "")
      }
    },
    7139(e, t, n) {
      "use strict";
      n.d(t, {
        B8: () => fe,
        N_: () => pe,
        UC: () => ge,
        bL: () => he,
        l9: () => de,
        q7: () => me
      });
      var r = n(93082),
        o = n(84017),
        i = n(54958),
        a = n(39467),
        s = n(80082),
        l = n(17038),
        c = n(64239),
        u = n(99136),
        h = n(66624),
        f = n(94296),
        m = n(65324),
        d = n(96356),
        p = n(52184),
        g = n(10198),
        b = n(94660),
        y = n(92023),
        E = n(39793),
        w = "NavigationMenu",
        [v, T, N] = (0, m.N)(w),
        [P, H, S] = (0, m.N)(w),
        [B, M] = (0, i.A)(w, [N, S]),
        [I, _] = B(w),
        [A, C] = B(w),
        R = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            value: o,
            onValueChange: i,
            defaultValue: a,
            delayDuration: h = 200,
            skipDelayDuration: f = 300,
            orientation: m = "horizontal",
            dir: d,
            ...p
          } = e, [g, b] = r.useState(null), y = (0, c.s)(t, e => b(e)), v = (0, u.jH)(d), T = r.useRef(0), N = r.useRef(0), P = r.useRef(0), [H, S] = r.useState(!0), [B, M] = (0, l.i)({
            prop: o,
            onChange: e => {
              const t = f > 0;
              "" !== e ? (window.clearTimeout(P.current), t && S(!1)) : (window.clearTimeout(P.current), P.current = window.setTimeout(() => S(!0), f)), i?.(e)
            },
            defaultProp: a ?? "",
            caller: w
          }), I = r.useCallback(() => {
            window.clearTimeout(N.current), N.current = window.setTimeout(() => M(""), 150)
          }, [M]), _ = r.useCallback(e => {
            window.clearTimeout(N.current), M(e)
          }, [M]), A = r.useCallback(e => {
            B === e ? window.clearTimeout(N.current) : T.current = window.setTimeout(() => {
              window.clearTimeout(N.current), M(e)
            }, h)
          }, [B, M, h]);
          return r.useEffect(() => () => {
            window.clearTimeout(T.current), window.clearTimeout(N.current), window.clearTimeout(P.current)
          }, []), (0, E.jsx)(x, {
            scope: n,
            isRootMenu: !0,
            value: B,
            dir: v,
            orientation: m,
            rootNavigationMenu: g,
            onTriggerEnter: e => {
              window.clearTimeout(T.current), H ? A(e) : _(e)
            },
            onTriggerLeave: () => {
              window.clearTimeout(T.current), I()
            },
            onContentEnter: () => window.clearTimeout(N.current),
            onContentLeave: I,
            onItemSelect: e => {
              M(t => t === e ? "" : e)
            },
            onItemDismiss: () => M(""),
            children: (0, E.jsx)(s.sG.nav, {
              "aria-label": "Main",
              "data-orientation": m,
              dir: v,
              ...p,
              ref: y
            })
          })
        });
      R.displayName = w;
      var L = "NavigationMenuSub";
      r.forwardRef((e, t) => {
        const {
          __scopeNavigationMenu: n,
          value: r,
          onValueChange: o,
          defaultValue: i,
          orientation: a = "horizontal",
          ...c
        } = e, u = _(L, n), [h, f] = (0, l.i)({
          prop: r,
          onChange: o,
          defaultProp: i ?? "",
          caller: L
        });
        return (0, E.jsx)(x, {
          scope: n,
          isRootMenu: !1,
          value: h,
          dir: u.dir,
          orientation: a,
          rootNavigationMenu: u.rootNavigationMenu,
          onTriggerEnter: e => f(e),
          onItemSelect: e => f(e),
          onItemDismiss: () => f(""),
          children: (0, E.jsx)(s.sG.div, {
            "data-orientation": a,
            ...c,
            ref: t
          })
        })
      }).displayName = L;
      var x = e => {
          const {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: o,
            dir: i,
            orientation: a,
            children: s,
            value: l,
            onItemSelect: c,
            onItemDismiss: u,
            onTriggerEnter: h,
            onTriggerLeave: m,
            onContentEnter: d,
            onContentLeave: g
          } = e, [y, w] = r.useState(null), [T, N] = r.useState(new Map), [P, H] = r.useState(null);
          return (0, E.jsx)(I, {
            scope: t,
            isRootMenu: n,
            rootNavigationMenu: o,
            value: l,
            previousValue: (0, p.Z)(l),
            baseId: (0, f.B)(),
            dir: i,
            orientation: a,
            viewport: y,
            onViewportChange: w,
            indicatorTrack: P,
            onIndicatorTrackChange: H,
            onTriggerEnter: (0, b.c)(h),
            onTriggerLeave: (0, b.c)(m),
            onContentEnter: (0, b.c)(d),
            onContentLeave: (0, b.c)(g),
            onItemSelect: (0, b.c)(c),
            onItemDismiss: (0, b.c)(u),
            onViewportContentChange: r.useCallback((e, t) => {
              N(n => (n.set(e, t), new Map(n)))
            }, []),
            onViewportContentRemove: r.useCallback(e => {
              N(t => t.has(e) ? (t.delete(e), new Map(t)) : t)
            }, []),
            children: (0, E.jsx)(v.Provider, {
              scope: t,
              children: (0, E.jsx)(A, {
                scope: t,
                items: T,
                children: s
              })
            })
          })
        },
        D = "NavigationMenuList",
        O = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            ...r
          } = e, o = _(D, n), i = (0, E.jsx)(s.sG.ul, {
            "data-orientation": o.orientation,
            ...r,
            ref: t
          });
          return (0, E.jsx)(s.sG.div, {
            style: {
              position: "relative"
            },
            ref: o.onIndicatorTrackChange,
            children: (0, E.jsx)(v.Slot, {
              scope: n,
              children: o.isRootMenu ? (0, E.jsx)(te, {
                asChild: !0,
                children: i
              }) : i
            })
          })
        });
      O.displayName = D;
      var F = "NavigationMenuItem",
        [k, U] = B(F),
        G = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            value: o,
            ...i
          } = e, a = (0, f.B)(), l = o || a || "LEGACY_REACT_AUTO_VALUE", c = r.useRef(null), u = r.useRef(null), h = r.useRef(null), m = r.useRef(() => {}), d = r.useRef(!1), p = r.useCallback((e = "start") => {
            if (c.current) {
              m.current();
              const t = oe(c.current);
              t.length && ie("start" === e ? t : t.reverse())
            }
          }, []), g = r.useCallback(() => {
            if (c.current) {
              const e = oe(c.current);
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
          return (0, E.jsx)(k, {
            scope: n,
            value: l,
            triggerRef: u,
            contentRef: c,
            focusProxyRef: h,
            wasEscapeCloseRef: d,
            onEntryKeyDown: p,
            onFocusProxyEnter: p,
            onRootContentClose: g,
            onContentFocusOutside: g,
            children: (0, E.jsx)(s.sG.li, {
              ...i,
              ref: t
            })
          })
        });
      G.displayName = F;
      var j = "NavigationMenuTrigger",
        V = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            disabled: o,
            ...i
          } = e, l = _(j, e.__scopeNavigationMenu), u = U(j, e.__scopeNavigationMenu), h = r.useRef(null), f = (0, c.s)(h, u.triggerRef, t), m = le(l.baseId, u.value), d = ce(l.baseId, u.value), p = r.useRef(!1), g = r.useRef(!1), b = u.value === l.value;
          return (0, E.jsxs)(E.Fragment, {
            children: [(0, E.jsx)(v.ItemSlot, {
              scope: n,
              value: u.value,
              children: (0, E.jsx)(re, {
                asChild: !0,
                children: (0, E.jsx)(s.sG.button, {
                  id: m,
                  disabled: o,
                  "data-disabled": o ? "" : void 0,
                  "data-state": se(b),
                  "aria-expanded": b,
                  "aria-controls": b ? d : void 0,
                  ...i,
                  ref: f,
                  onPointerEnter: (0, a.mK)(e.onPointerEnter, () => {
                    g.current = !1, u.wasEscapeCloseRef.current = !1
                  }),
                  onPointerMove: (0, a.mK)(e.onPointerMove, ue(() => {
                    o || g.current || u.wasEscapeCloseRef.current || p.current || (l.onTriggerEnter(u.value), p.current = !0)
                  })),
                  onPointerLeave: (0, a.mK)(e.onPointerLeave, ue(() => {
                    o || (l.onTriggerLeave(), p.current = !1)
                  })),
                  onClick: (0, a.mK)(e.onClick, () => {
                    l.onItemSelect(u.value), g.current = b
                  }),
                  onKeyDown: (0, a.mK)(e.onKeyDown, e => {
                    const t = {
                      horizontal: "ArrowDown",
                      vertical: "rtl" === l.dir ? "ArrowLeft" : "ArrowRight"
                    } [l.orientation];
                    b && e.key === t && (u.onEntryKeyDown(), e.preventDefault())
                  })
                })
              })
            }), b && (0, E.jsxs)(E.Fragment, {
              children: [(0, E.jsx)(y.bL, {
                "aria-hidden": !0,
                tabIndex: 0,
                ref: u.focusProxyRef,
                onFocus: e => {
                  const t = u.contentRef.current,
                    n = e.relatedTarget,
                    r = n === h.current,
                    o = t?.contains(n);
                  !r && o || u.onFocusProxyEnter(r ? "start" : "end")
                }
              }), l.viewport && (0, E.jsx)("span", {
                "aria-owns": d
              })]
            })]
          })
        });
      V.displayName = j;
      var K = "navigationMenu.linkSelect",
        $ = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            active: r,
            onSelect: o,
            ...i
          } = e;
          return (0, E.jsx)(re, {
            asChild: !0,
            children: (0, E.jsx)(s.sG.a, {
              "data-active": r ? "" : void 0,
              "aria-current": r ? "page" : void 0,
              ...i,
              ref: t,
              onClick: (0, a.mK)(e.onClick, e => {
                const t = e.target,
                  n = new CustomEvent(K, {
                    bubbles: !0,
                    cancelable: !0
                  });
                if (t.addEventListener(K, e => o?.(e), {
                    once: !0
                  }), (0, s.hO)(t, n), !n.defaultPrevented && !e.metaKey) {
                  const e = new CustomEvent(q, {
                    bubbles: !0,
                    cancelable: !0
                  });
                  (0, s.hO)(t, e)
                }
              }, {
                checkForDefaultPrevented: !1
              })
            })
          })
        });
      $.displayName = "NavigationMenuLink";
      var W = "NavigationMenuIndicator";
      r.forwardRef((e, t) => {
        const {
          forceMount: n,
          ...r
        } = e, i = _(W, e.__scopeNavigationMenu), a = Boolean(i.value);
        return i.indicatorTrack ? o.createPortal((0, E.jsx)(h.C, {
          present: n || a,
          children: (0, E.jsx)(Y, {
            ...r,
            ref: t
          })
        }), i.indicatorTrack) : null
      }).displayName = W;
      var Y = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            ...o
          } = e, i = _(W, n), a = T(n), [l, c] = r.useState(null), [u, h] = r.useState(null), f = "horizontal" === i.orientation, m = Boolean(i.value);
          r.useEffect(() => {
            const e = a(),
              t = e.find(e => e.value === i.value)?.ref.current;
            t && c(t)
          }, [a, i.value]);
          const d = () => {
            l && h({
              size: f ? l.offsetWidth : l.offsetHeight,
              offset: f ? l.offsetLeft : l.offsetTop
            })
          };
          return ae(l, d), ae(i.indicatorTrack, d), u ? (0, E.jsx)(s.sG.div, {
            "aria-hidden": !0,
            "data-state": m ? "visible" : "hidden",
            "data-orientation": i.orientation,
            ...o,
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
              ...o.style
            }
          }) : null
        }),
        Z = "NavigationMenuContent",
        X = r.forwardRef((e, t) => {
          const {
            forceMount: n,
            ...r
          } = e, o = _(Z, e.__scopeNavigationMenu), i = U(Z, e.__scopeNavigationMenu), s = (0, c.s)(i.contentRef, t), l = i.value === o.value, u = {
            value: i.value,
            triggerRef: i.triggerRef,
            focusProxyRef: i.focusProxyRef,
            wasEscapeCloseRef: i.wasEscapeCloseRef,
            onContentFocusOutside: i.onContentFocusOutside,
            onRootContentClose: i.onRootContentClose,
            ...r
          };
          return o.viewport ? (0, E.jsx)(z, {
            forceMount: n,
            ...u,
            ref: s
          }) : (0, E.jsx)(h.C, {
            present: n || l,
            children: (0, E.jsx)(J, {
              "data-state": se(l),
              ...u,
              ref: s,
              onPointerEnter: (0, a.mK)(e.onPointerEnter, o.onContentEnter),
              onPointerLeave: (0, a.mK)(e.onPointerLeave, ue(o.onContentLeave)),
              style: {
                pointerEvents: !l && o.isRootMenu ? "none" : void 0,
                ...u.style
              }
            })
          })
        });
      X.displayName = Z;
      var z = r.forwardRef((e, t) => {
          const n = _(Z, e.__scopeNavigationMenu),
            {
              onViewportContentChange: r,
              onViewportContentRemove: o
            } = n;
          return (0, g.N)(() => {
            r(e.value, {
              ref: t,
              ...e
            })
          }, [e, t, r]), (0, g.N)(() => () => o(e.value), [e.value, o]), null
        }),
        q = "navigationMenu.rootContentDismiss",
        J = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            value: o,
            triggerRef: i,
            focusProxyRef: s,
            wasEscapeCloseRef: l,
            onRootContentClose: u,
            onContentFocusOutside: h,
            ...f
          } = e, m = _(Z, n), p = r.useRef(null), g = (0, c.s)(p, t), b = le(m.baseId, o), y = ce(m.baseId, o), w = T(n), v = r.useRef(null), {
            onItemDismiss: N
          } = m;
          r.useEffect(() => {
            const e = p.current;
            if (m.isRootMenu && e) {
              const t = () => {
                N(), u(), e.contains(document.activeElement) && i.current?.focus()
              };
              return e.addEventListener(q, t), () => e.removeEventListener(q, t)
            }
          }, [m.isRootMenu, e.value, i, N, u]);
          const P = r.useMemo(() => {
            const e = w().map(e => e.value);
            "rtl" === m.dir && e.reverse();
            const t = e.indexOf(m.value),
              n = e.indexOf(m.previousValue),
              r = o === m.value,
              i = n === e.indexOf(o);
            if (!r && !i) return v.current;
            const a = (() => {
              if (t !== n) {
                if (r && -1 !== n) return t > n ? "from-end" : "from-start";
                if (i && -1 !== t) return t > n ? "to-start" : "to-end"
              }
              return null
            })();
            return v.current = a, a
          }, [m.previousValue, m.value, m.dir, w, o]);
          return (0, E.jsx)(te, {
            asChild: !0,
            children: (0, E.jsx)(d.qW, {
              id: y,
              "aria-labelledby": b,
              "data-motion": P,
              "data-orientation": m.orientation,
              ...f,
              ref: g,
              disableOutsidePointerEvents: !1,
              onDismiss: () => {
                const e = new Event(q, {
                  bubbles: !0,
                  cancelable: !0
                });
                p.current?.dispatchEvent(e)
              },
              onFocusOutside: (0, a.mK)(e.onFocusOutside, e => {
                h();
                const t = e.target;
                m.rootNavigationMenu?.contains(t) && e.preventDefault()
              }),
              onPointerDownOutside: (0, a.mK)(e.onPointerDownOutside, e => {
                const t = e.target,
                  n = w().some(e => e.ref.current?.contains(t)),
                  r = m.isRootMenu && m.viewport?.contains(t);
                (n || r || !m.isRootMenu) && e.preventDefault()
              }),
              onKeyDown: (0, a.mK)(e.onKeyDown, e => {
                const t = e.altKey || e.ctrlKey || e.metaKey;
                if ("Tab" === e.key && !t) {
                  const t = oe(e.currentTarget),
                    n = document.activeElement,
                    r = t.findIndex(e => e === n);
                  ie(e.shiftKey ? t.slice(0, r).reverse() : t.slice(r + 1, t.length)) ? e.preventDefault() : s.current?.focus()
                }
              }),
              onEscapeKeyDown: (0, a.mK)(e.onEscapeKeyDown, e => {
                l.current = !0
              })
            })
          })
        }),
        Q = "NavigationMenuViewport";
      r.forwardRef((e, t) => {
        const {
          forceMount: n,
          ...r
        } = e, o = _(Q, e.__scopeNavigationMenu), i = Boolean(o.value);
        return (0, E.jsx)(h.C, {
          present: n || i,
          children: (0, E.jsx)(ee, {
            ...r,
            ref: t
          })
        })
      }).displayName = Q;
      var ee = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            children: o,
            ...i
          } = e, l = _(Q, n), u = (0, c.s)(t, l.onViewportChange), f = C(Z, e.__scopeNavigationMenu), [m, d] = r.useState(null), [p, g] = r.useState(null), b = m ? m?.width + "px" : void 0, y = m ? m?.height + "px" : void 0, w = Boolean(l.value), v = w ? l.value : l.previousValue;
          return ae(p, () => {
            p && d({
              width: p.offsetWidth,
              height: p.offsetHeight
            })
          }), (0, E.jsx)(s.sG.div, {
            "data-state": se(w),
            "data-orientation": l.orientation,
            ...i,
            ref: u,
            style: {
              pointerEvents: !w && l.isRootMenu ? "none" : void 0,
              "--radix-navigation-menu-viewport-width": b,
              "--radix-navigation-menu-viewport-height": y,
              ...i.style
            },
            onPointerEnter: (0, a.mK)(e.onPointerEnter, l.onContentEnter),
            onPointerLeave: (0, a.mK)(e.onPointerLeave, ue(l.onContentLeave)),
            children: Array.from(f.items).map(([e, {
              ref: t,
              forceMount: n,
              ...r
            }]) => {
              const o = v === e;
              return (0, E.jsx)(h.C, {
                present: n || o,
                children: (0, E.jsx)(J, {
                  ...r,
                  ref: (0, c.t)(t, e => {
                    o && e && g(e)
                  })
                })
              }, e)
            })
          })
        }),
        te = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            ...r
          } = e, o = _("FocusGroup", n);
          return (0, E.jsx)(P.Provider, {
            scope: n,
            children: (0, E.jsx)(P.Slot, {
              scope: n,
              children: (0, E.jsx)(s.sG.div, {
                dir: o.dir,
                ...r,
                ref: t
              })
            })
          })
        }),
        ne = ["ArrowRight", "ArrowLeft", "ArrowUp", "ArrowDown"],
        re = r.forwardRef((e, t) => {
          const {
            __scopeNavigationMenu: n,
            ...r
          } = e, o = H(n), i = _("FocusGroupItem", n);
          return (0, E.jsx)(P.ItemSlot, {
            scope: n,
            children: (0, E.jsx)(s.sG.button, {
              ...r,
              ref: t,
              onKeyDown: (0, a.mK)(e.onKeyDown, e => {
                if (["Home", "End", ...ne].includes(e.key)) {
                  let t = o().map(e => e.ref.current);
                  if (["rtl" === i.dir ? "ArrowRight" : "ArrowLeft", "ArrowUp", "End"].includes(e.key) && t.reverse(), ne.includes(e.key)) {
                    const n = t.indexOf(e.currentTarget);
                    t = t.slice(n + 1)
                  }
                  setTimeout(() => ie(t)), e.preventDefault()
                }
              })
            })
          })
        });

      function oe(e) {
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

      function ie(e) {
        const t = document.activeElement;
        return e.some(e => e === t || (e.focus(), document.activeElement !== t))
      }

      function ae(e, t) {
        const n = (0, b.c)(t);
        (0, g.N)(() => {
          let t = 0;
          if (e) {
            const r = new ResizeObserver(() => {
              cancelAnimationFrame(t), t = window.requestAnimationFrame(n)
            });
            return r.observe(e), () => {
              window.cancelAnimationFrame(t), r.unobserve(e)
            }
          }
        }, [e, n])
      }

      function se(e) {
        return e ? "open" : "closed"
      }

      function le(e, t) {
        return `${e}-trigger-${t}`
      }

      function ce(e, t) {
        return `${e}-content-${t}`
      }

      function ue(e) {
        return t => "mouse" === t.pointerType ? e(t) : void 0
      }
      var he = R,
        fe = O,
        me = G,
        de = V,
        pe = $,
        ge = X
    },
    94660(e, t, n) {
      "use strict";
      n.d(t, {
        c: () => o
      });
      var r = n(93082);

      function o(e) {
        const t = r.useRef(e);
        return r.useEffect(() => {
          t.current = e
        }), r.useMemo(() => (...e) => t.current?.(...e), [])
      }
    },
    17038(e, t, n) {
      "use strict";
      let r;
      n.d(t, {
        i: () => s
      });
      var o = n(93082),
        i = n(10198),
        a = (r || (r = n.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

      function s({
        prop: e,
        defaultProp: t,
        onChange: n = () => {},
        caller: r
      }) {
        const [i, s, l] = function({
          defaultProp: e,
          onChange: t
        }) {
          const [n, r] = o.useState(e), i = o.useRef(n), s = o.useRef(t);
          return a(() => {
            s.current = t
          }, [t]), o.useEffect(() => {
            i.current !== n && (s.current?.(n), i.current = n)
          }, [n, i]), [n, r, s]
        }({
          defaultProp: t,
          onChange: n
        }), c = void 0 !== e, u = c ? e : i; {
          const t = o.useRef(void 0 !== e);
          o.useEffect(() => {
            const e = t.current;
            if (e !== c) {
              const t = e ? "controlled" : "uncontrolled",
                n = c ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${n}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = c
          }, [c, r])
        }
        const h = o.useCallback(t => {
          if (c) {
            const n = function(e) {
              return "function" == typeof e
            }(t) ? t(e) : t;
            n !== e && l.current?.(n)
          } else s(t)
        }, [c, e, s, l]);
        return [u, h]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    61144(e, t, n) {
      "use strict";
      n.d(t, {
        U: () => i
      });
      var r = n(93082),
        o = n(94660);

      function i(e, t = globalThis?.document) {
        const n = (0, o.c)(e);
        r.useEffect(() => {
          const e = e => {
            "Escape" === e.key && n(e)
          };
          return t.addEventListener("keydown", e, {
            capture: !0
          }), () => t.removeEventListener("keydown", e, {
            capture: !0
          })
        }, [n, t])
      }
    },
    10198(e, t, n) {
      "use strict";
      n.d(t, {
        N: () => o
      });
      var r = n(93082),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    33558(e, t, n) {
      "use strict";
      n.d(t, {
        sA: () => ft,
        Dk: () => dt,
        YK: () => pt,
        tz: () => ot
      });
      var r = n(93082);

      function o(e, t) {
        const n = t && t.cache ? t.cache : h,
          r = t && t.serializer ? t.serializer : c;
        return (t && t.strategy ? t.strategy : l)(e, {
          cache: n,
          serializer: r
        })
      }

      function i(e, t, n, r) {
        const o = null == (i = r) || "number" == typeof i || "boolean" == typeof i ? r : n(r);
        var i;
        let a = t.get(o);
        return void 0 === a && (a = e.call(this, r), t.set(o, a)), a
      }

      function a(e, t, n) {
        const r = Array.prototype.slice.call(arguments, 3),
          o = n(r);
        let i = t.get(o);
        return void 0 === i && (i = e.apply(this, r), t.set(o, i)), i
      }

      function s(e, t, n, r, o) {
        return n.bind(t, e, r, o)
      }

      function l(e, t) {
        return s(e, this, 1 === e.length ? i : a, t.cache.create(), t.serializer)
      }
      const c = function() {
        return JSON.stringify(arguments)
      };
      var u = class {
        constructor() {
          this.cache = Object.create(null)
        }
        get(e) {
          return this.cache[e]
        }
        set(e, t) {
          this.cache[e] = t
        }
      };
      const h = {
          create: function() {
            return new u
          }
        },
        f = {
          variadic: function(e, t) {
            return s(e, this, a, t.cache.create(), t.serializer)
          },
          monadic: function(e, t) {
            return s(e, this, i, t.cache.create(), t.serializer)
          }
        },
        m = /(?:[Eec]{1,6}|G{1,5}|[Qq]{1,5}|(?:[yYur]+|U{1,5})|[ML]{1,5}|d{1,2}|D{1,3}|F{1}|[abB]{1,5}|[hkHK]{1,2}|w{1,2}|W{1}|m{1,2}|s{1,2}|[zZOvVxX]{1,4})(?=([^']*'[^']*')*[^']*$)/g;

      function d(e) {
        const t = {};
        return e.replace(m, e => {
          const n = e.length;
          switch (e[0]) {
            case "G":
              t.era = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "y":
              t.year = 2 === n ? "2-digit" : "numeric";
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
              t.month = ["numeric", "2-digit", "short", "long", "narrow"][n - 1];
              break;
            case "w":
            case "W":
              throw new RangeError("`w/W` (week) patterns are not supported");
            case "d":
              t.day = ["numeric", "2-digit"][n - 1];
              break;
            case "D":
            case "F":
            case "g":
              throw new RangeError("`D/F/g` (day) patterns are not supported, use `d` instead");
            case "E":
              t.weekday = 4 === n ? "long" : 5 === n ? "narrow" : "short";
              break;
            case "e":
              if (n < 4) throw new RangeError("`e..eee` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "c":
              if (n < 4) throw new RangeError("`c..ccc` (weekday) patterns are not supported");
              t.weekday = ["short", "long", "narrow", "short"][n - 4];
              break;
            case "a":
              t.hour12 = !0;
              break;
            case "b":
            case "B":
              throw new RangeError("`b/B` (period) patterns are not supported, use `a` instead");
            case "h":
              t.hourCycle = "h12", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "H":
              t.hourCycle = "h23", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "K":
              t.hourCycle = "h11", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "k":
              t.hourCycle = "h24", t.hour = ["numeric", "2-digit"][n - 1];
              break;
            case "j":
            case "J":
            case "C":
              throw new RangeError("`j/J/C` (hour) patterns are not supported, use `h/H/K/k` instead");
            case "m":
              t.minute = ["numeric", "2-digit"][n - 1];
              break;
            case "s":
              t.second = ["numeric", "2-digit"][n - 1];
              break;
            case "S":
            case "A":
              throw new RangeError("`S/A` (second) patterns are not supported, use `s` instead");
            case "z":
              t.timeZoneName = n < 4 ? "short" : "long";
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
        }), t
      }
      const p = /[\t-\r \x85\u200E\u200F\u2028\u2029]/i;

      function g(e) {
        return e.replace(/^(.*?)-/, "")
      }
      const b = /^\.(?:(0+)(\*)?|(#+)|(0+)(#+))$/g,
        y = /^(@+)?(\+|#+)?[rs]?$/g,
        E = /(\*)(0+)|(#+)(0+)|(0+)/g,
        w = /^(0+)$/;

      function v(e) {
        const t = {};
        return "r" === e[e.length - 1] ? t.roundingPriority = "morePrecision" : "s" === e[e.length - 1] && (t.roundingPriority = "lessPrecision"), e.replace(y, function(e, n, r) {
          return "string" != typeof r ? (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length) : "+" === r ? t.minimumSignificantDigits = n.length : "#" === n[0] ? t.maximumSignificantDigits = n.length : (t.minimumSignificantDigits = n.length, t.maximumSignificantDigits = n.length + ("string" == typeof r ? r.length : 0)), ""
        }), t
      }

      function T(e) {
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

      function N(e) {
        let t;
        if ("E" === e[0] && "E" === e[1] ? (t = {
            notation: "engineering"
          }, e = e.slice(2)) : "E" === e[0] && (t = {
            notation: "scientific"
          }, e = e.slice(1)), t) {
          const n = e.slice(0, 2);
          if ("+!" === n ? (t.signDisplay = "always", e = e.slice(2)) : "+?" === n && (t.signDisplay = "exceptZero", e = e.slice(2)), !w.test(e)) throw new Error("Malformed concise eng/scientific notation");
          t.minimumIntegerDigits = e.length
        }
        return t
      }

      function P(e) {
        return T(e) || {}
      }

      function H(e) {
        let t = {};
        for (const n of e) {
          switch (n.stem) {
            case "percent":
            case "%":
              t.style = "percent";
              continue;
            case "%x100":
              t.style = "percent", t.scale = 100;
              continue;
            case "currency":
              t.style = "currency", t.currency = n.options[0];
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
              t.style = "unit", t.unit = g(n.options[0]);
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
              t = {
                ...t,
                notation: "scientific",
                ...n.options.reduce((e, t) => ({
                  ...e,
                  ...P(t)
                }), {})
              };
              continue;
            case "engineering":
              t = {
                ...t,
                notation: "engineering",
                ...n.options.reduce((e, t) => ({
                  ...e,
                  ...P(t)
                }), {})
              };
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
              t.scale = parseFloat(n.options[0]);
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
              if (n.options.length > 1) throw new RangeError("integer-width stems only accept a single optional option");
              n.options[0].replace(E, function(e, n, r, o, i, a) {
                if (n) t.minimumIntegerDigits = r.length;
                else {
                  if (o && i) throw new Error("We currently do not support maximum integer digits");
                  if (a) throw new Error("We currently do not support exact integer digits")
                }
                return ""
              });
              continue
          }
          if (w.test(n.stem)) {
            t.minimumIntegerDigits = n.stem.length;
            continue
          }
          if (b.test(n.stem)) {
            if (n.options.length > 1) throw new RangeError("Fraction-precision stems only accept a single optional option");
            n.stem.replace(b, function(e, n, r, o, i, a) {
              return "*" === r ? t.minimumFractionDigits = n.length : o && "#" === o[0] ? t.maximumFractionDigits = o.length : i && a ? (t.minimumFractionDigits = i.length, t.maximumFractionDigits = i.length + a.length) : (t.minimumFractionDigits = n.length, t.maximumFractionDigits = n.length), ""
            });
            const e = n.options[0];
            "w" === e ? t = {
              ...t,
              trailingZeroDisplay: "stripIfInteger"
            } : e && (t = {
              ...t,
              ...v(e)
            });
            continue
          }
          if (y.test(n.stem)) {
            t = {
              ...t,
              ...v(n.stem)
            };
            continue
          }
          const e = T(n.stem);
          e && (t = {
            ...t,
            ...e
          });
          const r = N(n.stem);
          r && (t = {
            ...t,
            ...r
          })
        }
        return t
      }
      let S = function(e) {
          return e[e.EXPECT_ARGUMENT_CLOSING_BRACE = 1] = "EXPECT_ARGUMENT_CLOSING_BRACE", e[e.EMPTY_ARGUMENT = 2] = "EMPTY_ARGUMENT", e[e.MALFORMED_ARGUMENT = 3] = "MALFORMED_ARGUMENT", e[e.EXPECT_ARGUMENT_TYPE = 4] = "EXPECT_ARGUMENT_TYPE", e[e.INVALID_ARGUMENT_TYPE = 5] = "INVALID_ARGUMENT_TYPE", e[e.EXPECT_ARGUMENT_STYLE = 6] = "EXPECT_ARGUMENT_STYLE", e[e.INVALID_NUMBER_SKELETON = 7] = "INVALID_NUMBER_SKELETON", e[e.INVALID_DATE_TIME_SKELETON = 8] = "INVALID_DATE_TIME_SKELETON", e[e.EXPECT_NUMBER_SKELETON = 9] = "EXPECT_NUMBER_SKELETON", e[e.EXPECT_DATE_TIME_SKELETON = 10] = "EXPECT_DATE_TIME_SKELETON", e[e.UNCLOSED_QUOTE_IN_ARGUMENT_STYLE = 11] = "UNCLOSED_QUOTE_IN_ARGUMENT_STYLE", e[e.EXPECT_SELECT_ARGUMENT_OPTIONS = 12] = "EXPECT_SELECT_ARGUMENT_OPTIONS", e[e.EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE = 13] = "EXPECT_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.INVALID_PLURAL_ARGUMENT_OFFSET_VALUE = 14] = "INVALID_PLURAL_ARGUMENT_OFFSET_VALUE", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR = 15] = "EXPECT_SELECT_ARGUMENT_SELECTOR", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR = 16] = "EXPECT_PLURAL_ARGUMENT_SELECTOR", e[e.EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT = 17] = "EXPECT_SELECT_ARGUMENT_SELECTOR_FRAGMENT", e[e.EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT = 18] = "EXPECT_PLURAL_ARGUMENT_SELECTOR_FRAGMENT", e[e.INVALID_PLURAL_ARGUMENT_SELECTOR = 19] = "INVALID_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_PLURAL_ARGUMENT_SELECTOR = 20] = "DUPLICATE_PLURAL_ARGUMENT_SELECTOR", e[e.DUPLICATE_SELECT_ARGUMENT_SELECTOR = 21] = "DUPLICATE_SELECT_ARGUMENT_SELECTOR", e[e.MISSING_OTHER_CLAUSE = 22] = "MISSING_OTHER_CLAUSE", e[e.INVALID_TAG = 23] = "INVALID_TAG", e[e.INVALID_TAG_NAME = 25] = "INVALID_TAG_NAME", e[e.UNMATCHED_CLOSING_TAG = 26] = "UNMATCHED_CLOSING_TAG", e[e.UNCLOSED_TAG = 27] = "UNCLOSED_TAG", e
        }({}),
        B = function(e) {
          return e[e.literal = 0] = "literal", e[e.argument = 1] = "argument", e[e.number = 2] = "number", e[e.date = 3] = "date", e[e.time = 4] = "time", e[e.select = 5] = "select", e[e.plural = 6] = "plural", e[e.pound = 7] = "pound", e[e.tag = 8] = "tag", e
        }({});

      function M(e) {
        return 0 === e.type
      }

      function I(e) {
        return 1 === e.type
      }

      function _(e) {
        return 2 === e.type
      }

      function A(e) {
        return 3 === e.type
      }

      function C(e) {
        return 4 === e.type
      }

      function R(e) {
        return 5 === e.type
      }

      function L(e) {
        return 6 === e.type
      }

      function x(e) {
        return 7 === e.type
      }

      function D(e) {
        return 8 === e.type
      }

      function O(e) {
        return !(!e || "object" != typeof e || 0 !== e.type)
      }

      function F(e) {
        return !(!e || "object" != typeof e || 1 !== e.type)
      }
      const k = /[ \xA0\u1680\u2000-\u200A\u202F\u205F\u3000]/,
        U = {
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
          GS: ["H", "h", "hb", "hB"],
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
          "ku-SY": ["H", "hB"],
          "ml-IN": ["hB", "h", "H"],
          "mr-IN": ["hB", "hb", "h", "H"],
          "pa-IN": ["hB", "hb", "h", "H"],
          "ta-IN": ["hB", "h", "hb", "H"],
          "te-IN": ["hB", "h", "H"],
          "zu-ZA": ["H", "hB", "hb", "h"]
        };

      function G(e) {
        let t = e.hourCycle;
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
        const n = e.language;
        let r;
        return "root" !== n && (r = e.maximize().region), (U[r || ""] || U[n || ""] || U[`${n}-001`] || U["001"])[0]
      }
      const j = new RegExp(`^${k.source}*`),
        V = new RegExp(`${k.source}*$`);

      function K(e, t) {
        return {
          start: e,
          end: t
        }
      }
      const $ = !!Object.fromEntries,
        W = !!String.prototype.trimStart,
        Y = !!String.prototype.trimEnd,
        Z = $ ? Object.fromEntries : function(e) {
          const t = {};
          for (const [n, r] of e) t[n] = r;
          return t
        },
        X = W ? function(e) {
          return e.trimStart()
        } : function(e) {
          return e.replace(j, "")
        },
        z = Y ? function(e) {
          return e.trimEnd()
        } : function(e) {
          return e.replace(V, "")
        },
        q = new RegExp("([^\\p{White_Space}\\p{Pattern_Syntax}]*)", "yu");
      var J = class {
        constructor(e, t = {}) {
          this.message = e, this.position = {
            offset: 0,
            line: 1,
            column: 1
          }, this.ignoreTag = !!t.ignoreTag, this.locale = t.locale, this.requiresOtherClause = !!t.requiresOtherClause, this.shouldParseSkeletons = !!t.shouldParseSkeletons
        }
        parse() {
          if (0 !== this.offset()) throw Error("parser can only be used once");
          if (this.message.length > 0) {
            const e = this.message.charCodeAt(0);
            if (35 !== e && 39 !== e && 60 !== e && 123 !== e && 125 !== e) {
              const e = function(e) {
                if (0 === e.length) return null;
                let t = 1,
                  n = 1;
                for (let r = 0; r < e.length;) {
                  const o = e.charCodeAt(r);
                  switch (o) {
                    case 35:
                    case 39:
                    case 60:
                    case 123:
                    case 125:
                      return null
                  }
                  if (10 === o) t++, n = 1, r++;
                  else if (n++, o >= 55296 && o <= 56319 && r + 1 < e.length) {
                    const t = e.charCodeAt(r + 1);
                    r += t >= 56320 && t <= 57343 ? 2 : 1
                  } else r++
                }
                return {
                  offset: e.length,
                  line: t,
                  column: n
                }
              }(this.message);
              if (e) {
                const t = this.clonePosition();
                return this.position = e, {
                  val: [{
                    type: 0,
                    value: this.message,
                    location: K(t, this.clonePosition())
                  }],
                  err: null
                }
              }
            }
          }
          return this.parseMessage(0, "", !1)
        }
        parseMessage(e, t, n) {
          let r = [];
          for (; !this.isEOF();) {
            const o = this.char();
            if (123 === o) {
              const t = this.parseArgument(e, n);
              if (t.err) return t;
              r.push(t.val)
            } else {
              if (125 === o && e > 0) break;
              if (35 !== o || "plural" !== t && "selectordinal" !== t) {
                if (60 === o && !this.ignoreTag && 47 === this.peek()) {
                  if (n) break;
                  return this.error(26, K(this.clonePosition(), this.clonePosition()))
                }
                if (60 === o && !this.ignoreTag && Q(this.peek() || 0)) {
                  const n = this.parseTag(e, t);
                  if (n.err) return n;
                  r.push(n.val)
                } else {
                  const n = this.parseLiteral(e, t);
                  if (n.err) return n;
                  r.push(n.val)
                }
              } else {
                const e = this.clonePosition();
                this.bump(), r.push({
                  type: 7,
                  location: K(e, this.clonePosition())
                })
              }
            }
          }
          return {
            val: r,
            err: null
          }
        }
        parseTag(e, t) {
          const n = this.clonePosition();
          this.bump();
          const r = this.parseTagName();
          if (this.bumpSpace(), this.bumpIf("/>")) return {
            val: {
              type: 0,
              value: `<${r}/>`,
              location: K(n, this.clonePosition())
            },
            err: null
          };
          if (this.bumpIf(">")) {
            const o = this.parseMessage(e + 1, t, !0);
            if (o.err) return o;
            const i = o.val,
              a = this.clonePosition();
            if (this.bumpIf("</")) {
              if (this.isEOF() || !Q(this.char())) return this.error(23, K(a, this.clonePosition()));
              const e = this.clonePosition();
              return r !== this.parseTagName() ? this.error(26, K(e, this.clonePosition())) : (this.bumpSpace(), this.bumpIf(">") ? {
                val: {
                  type: 8,
                  value: r,
                  children: i,
                  location: K(n, this.clonePosition())
                },
                err: null
              } : this.error(23, K(a, this.clonePosition())))
            }
            return this.error(27, K(n, this.clonePosition()))
          }
          return this.error(23, K(n, this.clonePosition()))
        }
        parseTagName() {
          const e = this.offset();
          for (this.bump(); !this.isEOF() && ee(this.char());) this.bump();
          return this.message.slice(e, this.offset())
        }
        parseLiteral(e, t) {
          const n = this.clonePosition();
          let r = "";
          for (;;) {
            const n = this.tryParseQuote(t);
            if (n) {
              r += n;
              continue
            }
            const o = this.tryParseUnquoted(e, t);
            if (o) {
              r += o;
              continue
            }
            const i = this.tryParseLeftAngleBracket();
            if (!i) break;
            r += i
          }
          return {
            val: {
              type: 0,
              value: r,
              location: K(n, this.clonePosition())
            },
            err: null
          }
        }
        tryParseLeftAngleBracket() {
          return this.isEOF() || 60 !== this.char() || !this.ignoreTag && (Q(e = this.peek() || 0) || 47 === e) ? null : (this.bump(), "<");
          var e
        }
        tryParseQuote(e) {
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
          const t = [this.char()];
          for (this.bump(); !this.isEOF();) {
            const e = this.char();
            if (39 === e) {
              if (39 !== this.peek()) {
                this.bump();
                break
              }
              t.push(39), this.bump()
            } else t.push(e);
            this.bump()
          }
          return String.fromCodePoint(...t)
        }
        tryParseUnquoted(e, t) {
          if (this.isEOF()) return null;
          const n = this.char();
          return 60 === n || 123 === n || 35 === n && ("plural" === t || "selectordinal" === t) || 125 === n && e > 0 ? null : (this.bump(), String.fromCodePoint(n))
        }
        parseArgument(e, t) {
          const n = this.clonePosition();
          if (this.bump(), this.bumpSpace(), this.isEOF()) return this.error(1, K(n, this.clonePosition()));
          if (125 === this.char()) return this.bump(), this.error(2, K(n, this.clonePosition()));
          let r = this.parseIdentifierIfPossible().value;
          if (!r) return this.error(3, K(n, this.clonePosition()));
          if (this.bumpSpace(), this.isEOF()) return this.error(1, K(n, this.clonePosition()));
          switch (this.char()) {
            case 125:
              return this.bump(), {
                val: {
                  type: 1,
                  value: r,
                  location: K(n, this.clonePosition())
                },
                err: null
              };
            case 44:
              return this.bump(), this.bumpSpace(), this.isEOF() ? this.error(1, K(n, this.clonePosition())) : this.parseArgumentOptions(e, t, r, n);
            default:
              return this.error(3, K(n, this.clonePosition()))
          }
        }
        parseIdentifierIfPossible() {
          const e = this.clonePosition(),
            t = this.offset(),
            n = (r = this.message, o = t, q.lastIndex = o, q.exec(r)[1] ?? "");
          var r, o;
          const i = t + n.length;
          return this.bumpTo(i), {
            value: n,
            location: K(e, this.clonePosition())
          }
        }
        parseArgumentOptions(e, t, n, r) {
          let o = this.clonePosition(),
            i = this.parseIdentifierIfPossible().value,
            a = this.clonePosition();
          switch (i) {
            case "":
              return this.error(4, K(o, a));
            case "number":
            case "date":
            case "time": {
              this.bumpSpace();
              let e = null;
              if (this.bumpIf(",")) {
                this.bumpSpace();
                const t = this.clonePosition(),
                  n = this.parseSimpleArgStyleIfPossible();
                if (n.err) return n;
                const r = z(n.val);
                if (0 === r.length) return this.error(6, K(this.clonePosition(), this.clonePosition()));
                e = {
                  style: r,
                  styleLocation: K(t, this.clonePosition())
                }
              }
              const t = this.tryParseArgumentClose(r);
              if (t.err) return t;
              const o = K(r, this.clonePosition());
              if (e && e.style.startsWith("::")) {
                let t = X(e.style.slice(2));
                if ("number" === i) {
                  const r = this.parseNumberSkeletonFromString(t, e.styleLocation);
                  return r.err ? r : {
                    val: {
                      type: 2,
                      value: n,
                      location: o,
                      style: r.val
                    },
                    err: null
                  }
                } {
                  if (0 === t.length) return this.error(10, o);
                  let r = t;
                  return this.locale && (r = function(e, t) {
                    let n = "";
                    for (let r = 0; r < e.length; r++) {
                      const o = e.charAt(r);
                      if ("j" === o) {
                        let i = 0;
                        for (; r + 1 < e.length && e.charAt(r + 1) === o;) i++, r++;
                        let a = 1 + (1 & i),
                          s = i < 2 ? 1 : 3 + (i >> 1),
                          l = "a",
                          c = G(t);
                        for ("H" != c && "k" != c || (s = 0); s-- > 0;) n += l;
                        for (; a-- > 0;) n = c + n
                      } else n += "J" === o ? "H" : o
                    }
                    return n
                  }(t, this.locale)), {
                    val: {
                      type: "date" === i ? 3 : 4,
                      value: n,
                      location: o,
                      style: {
                        type: 1,
                        pattern: r,
                        location: e.styleLocation,
                        parsedOptions: this.shouldParseSkeletons ? d(r) : {}
                      }
                    },
                    err: null
                  }
                }
              }
              return {
                val: {
                  type: "number" === i ? 2 : "date" === i ? 3 : 4,
                  value: n,
                  location: o,
                  style: e?.style ?? null
                },
                err: null
              }
            }
            case "plural":
            case "selectordinal":
            case "select": {
              const o = this.clonePosition();
              if (this.bumpSpace(), !this.bumpIf(",")) return this.error(12, K(o, {
                ...o
              }));
              this.bumpSpace();
              let a = this.parseIdentifierIfPossible(),
                s = 0;
              if ("select" !== i && "offset" === a.value) {
                if (!this.bumpIf(":")) return this.error(13, K(this.clonePosition(), this.clonePosition()));
                this.bumpSpace();
                const e = this.tryParseDecimalInteger(13, 14);
                if (e.err) return e;
                this.bumpSpace(), a = this.parseIdentifierIfPossible(), s = e.val
              }
              const l = this.tryParsePluralOrSelectOptions(e, i, t, a);
              if (l.err) return l;
              const c = this.tryParseArgumentClose(r);
              if (c.err) return c;
              const u = K(r, this.clonePosition());
              return "select" === i ? {
                val: {
                  type: 5,
                  value: n,
                  options: Z(l.val),
                  location: u
                },
                err: null
              } : {
                val: {
                  type: 6,
                  value: n,
                  options: Z(l.val),
                  offset: s,
                  pluralType: "plural" === i ? "cardinal" : "ordinal",
                  location: u
                },
                err: null
              }
            }
            default:
              return this.error(5, K(o, a))
          }
        }
        tryParseArgumentClose(e) {
          return this.isEOF() || 125 !== this.char() ? this.error(1, K(e, this.clonePosition())) : (this.bump(), {
            val: !0,
            err: null
          })
        }
        parseSimpleArgStyleIfPossible() {
          let e = 0;
          const t = this.clonePosition();
          for (; !this.isEOF();) switch (this.char()) {
            case 39: {
              this.bump();
              let e = this.clonePosition();
              if (!this.bumpUntil("'")) return this.error(11, K(e, this.clonePosition()));
              this.bump();
              break
            }
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
        }
        parseNumberSkeletonFromString(e, t) {
          let n = [];
          try {
            n = function(e) {
              if (0 === e.length) throw new Error("Number skeleton cannot be empty");
              const t = e.split(p).filter(e => e.length > 0),
                n = [];
              for (const e of t) {
                let t = e.split("/");
                if (0 === t.length) throw new Error("Invalid number skeleton");
                const [r, ...o] = t;
                for (const e of o)
                  if (0 === e.length) throw new Error("Invalid number skeleton");
                n.push({
                  stem: r,
                  options: o
                })
              }
              return n
            }(e)
          } catch {
            return this.error(7, t)
          }
          return {
            val: {
              type: 0,
              tokens: n,
              location: t,
              parsedOptions: this.shouldParseSkeletons ? H(n) : {}
            },
            err: null
          }
        }
        tryParsePluralOrSelectOptions(e, t, n, r) {
          let o = !1;
          const i = [],
            a = new Set;
          let {
            value: s,
            location: l
          } = r;
          for (;;) {
            if (0 === s.length) {
              const e = this.clonePosition();
              if ("select" === t || !this.bumpIf("=")) break; {
                const t = this.tryParseDecimalInteger(16, 19);
                if (t.err) return t;
                l = K(e, this.clonePosition()), s = this.message.slice(e.offset, this.offset())
              }
            }
            if (a.has(s)) return this.error("select" === t ? 21 : 20, l);
            "other" === s && (o = !0), this.bumpSpace();
            const r = this.clonePosition();
            if (!this.bumpIf("{")) return this.error("select" === t ? 17 : 18, K(this.clonePosition(), this.clonePosition()));
            const c = this.parseMessage(e + 1, t, n);
            if (c.err) return c;
            const u = this.tryParseArgumentClose(r);
            if (u.err) return u;
            i.push([s, {
              value: c.val,
              location: K(r, this.clonePosition())
            }]), a.add(s), this.bumpSpace(), ({
              value: s,
              location: l
            } = this.parseIdentifierIfPossible())
          }
          return 0 === i.length ? this.error("select" === t ? 15 : 16, K(this.clonePosition(), this.clonePosition())) : this.requiresOtherClause && !o ? this.error(22, K(this.clonePosition(), this.clonePosition())) : {
            val: i,
            err: null
          }
        }
        tryParseDecimalInteger(e, t) {
          let n = 1;
          const r = this.clonePosition();
          this.bumpIf("+") || this.bumpIf("-") && (n = -1);
          let o = !1,
            i = 0;
          for (; !this.isEOF();) {
            const e = this.char();
            if (!(e >= 48 && e <= 57)) break;
            o = !0, i = 10 * i + (e - 48), this.bump()
          }
          const a = K(r, this.clonePosition());
          return o ? (i *= n, Number.isSafeInteger(i) ? {
            val: i,
            err: null
          } : this.error(t, a)) : this.error(e, a)
        }
        offset() {
          return this.position.offset
        }
        isEOF() {
          return this.offset() === this.message.length
        }
        clonePosition() {
          return {
            offset: this.position.offset,
            line: this.position.line,
            column: this.position.column
          }
        }
        char() {
          const e = this.position.offset;
          if (e >= this.message.length) throw Error("out of bound");
          const t = this.message.codePointAt(e);
          if (void 0 === t) throw Error(`Offset ${e} is at invalid UTF-16 code unit boundary`);
          return t
        }
        error(e, t) {
          return {
            val: null,
            err: {
              kind: e,
              message: this.message,
              location: t
            }
          }
        }
        bump() {
          if (this.isEOF()) return;
          const e = this.char();
          10 === e ? (this.position.line += 1, this.position.column = 1, this.position.offset += 1) : (this.position.column += 1, this.position.offset += e < 65536 ? 1 : 2)
        }
        bumpIf(e) {
          if (this.message.startsWith(e, this.offset())) {
            for (let t = 0; t < e.length; t++) this.bump();
            return !0
          }
          return !1
        }
        bumpUntil(e) {
          const t = this.offset(),
            n = this.message.indexOf(e, t);
          return n >= 0 ? (this.bumpTo(n), !0) : (this.bumpTo(this.message.length), !1)
        }
        bumpTo(e) {
          if (this.offset() > e) throw Error(`targetOffset ${e} must be greater than or equal to the current offset ${this.offset()}`);
          for (e = Math.min(e, this.message.length);;) {
            const t = this.offset();
            if (t === e) break;
            if (t > e) throw Error(`targetOffset ${e} is at invalid UTF-16 code unit boundary`);
            if (this.bump(), this.isEOF()) break
          }
        }
        bumpSpace() {
          for (; !this.isEOF() && te(this.char());) this.bump()
        }
        peek() {
          if (this.isEOF()) return null;
          const e = this.char(),
            t = this.offset();
          return this.message.charCodeAt(t + (e >= 65536 ? 2 : 1)) ?? null
        }
      };

      function Q(e) {
        return e >= 97 && e <= 122 || e >= 65 && e <= 90
      }

      function ee(e) {
        return 45 === e || 46 === e || e >= 48 && e <= 57 || 95 === e || e >= 97 && e <= 122 || e >= 65 && e <= 90 || 183 == e || e >= 192 && e <= 214 || e >= 216 && e <= 246 || e >= 248 && e <= 893 || e >= 895 && e <= 8191 || e >= 8204 && e <= 8205 || e >= 8255 && e <= 8256 || e >= 8304 && e <= 8591 || e >= 11264 && e <= 12271 || e >= 12289 && e <= 55295 || e >= 63744 && e <= 64975 || e >= 65008 && e <= 65533 || e >= 65536 && e <= 983039
      }

      function te(e) {
        return e >= 9 && e <= 13 || 32 === e || 133 === e || e >= 8206 && e <= 8207 || 8232 === e || 8233 === e
      }

      function ne(e) {
        e.forEach(e => {
          if (delete e.location, R(e) || L(e))
            for (const t in e.options) delete e.options[t].location, ne(e.options[t].value);
          else _(e) && O(e.style) || (A(e) || C(e)) && F(e.style) ? delete e.style.location : D(e) && ne(e.children)
        })
      }

      function re(e, t = {}) {
        t = {
          shouldParseSkeletons: !0,
          requiresOtherClause: !0,
          ...t
        };
        const n = new J(e, t).parse();
        if (n.err) {
          const e = SyntaxError(S[n.err.kind]);
          throw e.location = n.err.location, e.originalMessage = n.err.message, e
        }
        return t?.captureLocation || ne(n.val), n.val
      }
      let oe = function(e) {
        return e.MISSING_VALUE = "MISSING_VALUE", e.INVALID_VALUE = "INVALID_VALUE", e.MISSING_INTL_API = "MISSING_INTL_API", e
      }({});
      var ie = class extends Error {
          constructor(e, t, n) {
            super(e), this.code = t, this.originalMessage = n
          }
          toString() {
            return `[formatjs Error: ${this.code}] ${this.message}`
          }
        },
        ae = class extends ie {
          constructor(e, t, n, r) {
            super(`Invalid values for "${e}": "${t}". Options are "${Object.keys(n).join('", "')}"`, "INVALID_VALUE", r)
          }
        },
        se = class extends ie {
          constructor(e, t, n) {
            super(`Value for "${e}" must be of type ${t}`, "INVALID_VALUE", n)
          }
        },
        le = class extends ie {
          constructor(e, t) {
            super(`The intl string context variable "${e}" was not provided to the string "${t}"`, "MISSING_VALUE", t)
          }
        };

      function ce(e) {
        return "function" == typeof e
      }

      function ue(e, t, n, r, o, i, a) {
        if (1 === e.length && M(e[0])) return [{
          type: 0,
          value: e[0].value
        }];
        const s = [];
        for (const l of e) {
          if (M(l)) {
            s.push({
              type: 0,
              value: l.value
            });
            continue
          }
          if (x(l)) {
            "number" == typeof i && s.push({
              type: 0,
              value: n.getNumberFormat(t).format(i)
            });
            continue
          }
          const {
            value: e
          } = l;
          if (!o || !(e in o)) throw new le(e, a);
          let c = o[e];
          if (I(l)) c && "string" != typeof c && "number" != typeof c && "bigint" != typeof c || (c = "string" == typeof c || "number" == typeof c || "bigint" == typeof c ? String(c) : ""), s.push({
            type: "string" == typeof c ? 0 : 1,
            value: c
          });
          else {
            if (A(l)) {
              const e = "string" == typeof l.style ? r.date[l.style] : F(l.style) ? l.style.parsedOptions : void 0;
              s.push({
                type: 0,
                value: n.getDateTimeFormat(t, e).format(c)
              });
              continue
            }
            if (C(l)) {
              const e = "string" == typeof l.style ? r.time[l.style] : F(l.style) ? l.style.parsedOptions : r.time.medium;
              s.push({
                type: 0,
                value: n.getDateTimeFormat(t, e).format(c)
              });
              continue
            }
            if (_(l)) {
              const e = "string" == typeof l.style ? r.number[l.style] : O(l.style) ? l.style.parsedOptions : void 0;
              if (e && e.scale) {
                const t = e.scale || 1;
                if ("bigint" == typeof c) {
                  if (!Number.isInteger(t)) throw new TypeError(`Cannot apply fractional scale ${t} to bigint value. Scale must be an integer when formatting bigint.`);
                  c *= BigInt(t)
                } else c *= t
              }
              s.push({
                type: 0,
                value: n.getNumberFormat(t, e).format(c)
              });
              continue
            }
            if (D(l)) {
              const {
                children: e,
                value: c
              } = l, u = o[c];
              if (!ce(u)) throw new se(c, "function", a);
              let h = u(ue(e, t, n, r, o, i).map(e => e.value));
              Array.isArray(h) || (h = [h]), s.push(...h.map(e => ({
                type: "string" == typeof e ? 0 : 1,
                value: e
              })))
            }
            if (R(l)) {
              const e = c,
                i = (Object.prototype.hasOwnProperty.call(l.options, e) ? l.options[e] : void 0) || l.options.other;
              if (!i) throw new ae(l.value, c, Object.keys(l.options), a);
              s.push(...ue(i.value, t, n, r, o));
              continue
            }
            if (L(l)) {
              const e = `=${c}`;
              let i = Object.prototype.hasOwnProperty.call(l.options, e) ? l.options[e] : void 0;
              if (!i) {
                if (!Intl.PluralRules) throw new ie('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', "MISSING_INTL_API", a);
                const e = "bigint" == typeof c ? Number(c) : c,
                  r = n.getPluralRules(t, {
                    type: l.pluralType
                  }).select(e - (l.offset || 0));
                i = (Object.prototype.hasOwnProperty.call(l.options, r) ? l.options[r] : void 0) || l.options.other
              }
              if (!i) throw new ae(l.value, c, Object.keys(l.options), a);
              const u = "bigint" == typeof c ? Number(c) : c;
              s.push(...ue(i.value, t, n, r, o, u - (l.offset || 0)));
              continue
            }
          }
        }
        return (l = s).length < 2 ? l : l.reduce((e, t) => {
          const n = e[e.length - 1];
          return n && 0 === n.type && 0 === t.type ? n.value += t.value : e.push(t), e
        }, []);
        var l
      }

      function he(e) {
        return {
          create: () => ({
            get: t => e[t],
            set(t, n) {
              e[t] = n
            }
          })
        }
      }
      var fe = class e {
          constructor(t, n = e.defaultLocale, r, i) {
            if (this.formatterCache = {
                number: {},
                dateTime: {},
                pluralRules: {}
              }, this.format = e => {
                const t = this.formatToParts(e);
                if (1 === t.length) return t[0].value;
                const n = t.reduce((e, t) => (e.length && 0 === t.type && "string" == typeof e[e.length - 1] ? e[e.length - 1] += t.value : e.push(t.value), e), []);
                return n.length <= 1 ? n[0] || "" : n
              }, this.formatToParts = e => ue(this.ast, this.locales, this.formatters, this.formats, e, void 0, this.message), this.resolvedOptions = () => ({
                locale: this.resolvedLocale?.toString() || Intl.NumberFormat.supportedLocalesOf(this.locales)[0]
              }), this.getAst = () => this.ast, this.locales = n, this.resolvedLocale = e.resolveLocale(n), "string" == typeof t) {
              if (this.message = t, !e.__parse) throw new TypeError("IntlMessageFormat.__parse must be set to process `message` of type `string`");
              const {
                ...n
              } = i || {};
              this.ast = e.__parse(t, {
                ...n,
                locale: this.resolvedLocale
              })
            } else this.ast = t;
            if (!Array.isArray(this.ast)) throw new TypeError("A message must be provided as a String or AST.");
            var a, s;
            this.formats = (a = e.formats, (s = r) ? Object.keys(a).reduce((e, t) => {
              var n, r;
              return e[t] = (n = a[t], (r = s[t]) ? {
                ...n,
                ...r,
                ...Object.keys(n).reduce((e, t) => (e[t] = {
                  ...n[t],
                  ...r[t]
                }, e), {})
              } : n), e
            }, {
              ...a
            }) : a), this.formatters = i && i.formatters || function(e = {
              number: {},
              dateTime: {},
              pluralRules: {}
            }) {
              return {
                getNumberFormat: o((...e) => new Intl.NumberFormat(...e), {
                  cache: he(e.number),
                  strategy: f.variadic
                }),
                getDateTimeFormat: o((...e) => new Intl.DateTimeFormat(...e), {
                  cache: he(e.dateTime),
                  strategy: f.variadic
                }),
                getPluralRules: o((...e) => new Intl.PluralRules(...e), {
                  cache: he(e.pluralRules),
                  strategy: f.variadic
                })
              }
            }(this.formatterCache)
          }
          static {
            this.memoizedDefaultLocale = null
          }
          static get defaultLocale() {
            return e.memoizedDefaultLocale || (e.memoizedDefaultLocale = (new Intl.NumberFormat).resolvedOptions().locale), e.memoizedDefaultLocale
          }
          static {
            this.resolveLocale = e => {
              if (void 0 === Intl.Locale) return;
              const t = Intl.NumberFormat.supportedLocalesOf(e);
              return t.length > 0 ? new Intl.Locale(t[0]) : new Intl.Locale("string" == typeof e ? e : e[0])
            }
          }
          static {
            this.__parse = re
          }
          static {
            this.formats = {
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
            }
          }
        },
        me = class e extends Error {
          constructor(t, n, r) {
            const o = r ? r instanceof Error ? r : new Error(String(r)) : void 0;
            super(`[@formatjs/intl Error ${t}] ${n}\n${o?`\n${o.message}\n${o.stack}`:""}`), this.code = t, "function" == typeof Error.captureStackTrace && Error.captureStackTrace(this, e)
          }
        },
        de = class extends me {
          constructor(e, t) {
            super("UNSUPPORTED_FORMATTER", e, t)
          }
        },
        pe = class extends me {
          constructor(e, t) {
            super("INVALID_CONFIG", e, t)
          }
        },
        ge = class extends me {
          constructor(e, t) {
            super("MISSING_DATA", e, t)
          }
        },
        be = class extends me {
          constructor(e, t, n) {
            super("FORMAT_ERROR", `${e}\nLocale: ${t}\n`, n), this.locale = t
          }
        },
        ye = class extends be {
          constructor(e, t, n, r) {
            super(`${e}\nMessageID: ${n?.id}\nDefault Message: ${n?.defaultMessage}\nDescription: ${n?.description}\n`, t, r), this.descriptor = n, this.locale = t
          }
        },
        Ee = class extends me {
          constructor(e, t) {
            super("MISSING_TRANSLATION", `Missing message: "${e.id}" for locale "${t}", using ${e.defaultMessage?`default message (${"string"==typeof e.defaultMessage?e.defaultMessage:e.defaultMessage.map(e=>e.value??JSON.stringify(e)).join()})`:"id"} as fallback.`), this.descriptor = e
          }
        };

      function we(e, t, n = {}) {
        return t.reduce((t, r) => (r in e ? t[r] = e[r] : r in n && (t[r] = n[r]), t), {})
      }
      const ve = {
        formats: {},
        messages: {},
        timeZone: void 0,
        defaultLocale: "en",
        defaultFormats: {},
        fallbackOnEmptyString: !0,
        onError: e => {},
        onWarn: e => {}
      };

      function Te(e) {
        return {
          create: () => ({
            get: t => e[t],
            set(t, n) {
              e[t] = n
            }
          })
        }
      }

      function Ne(e, t, n, r) {
        const o = e && e[t];
        let i;
        if (o && (i = o[n]), i) return i;
        r(new de(`No ${t} format named: ${n}`))
      }

      function Pe(e, t) {
        return Object.keys(e).reduce((n, r) => (n[r] = {
          timeZone: t,
          ...e[r]
        }, n), {})
      }

      function He(e, t) {
        return Object.keys({
          ...e,
          ...t
        }).reduce((n, r) => (n[r] = {
          ...e[r],
          ...t[r]
        }, n), {})
      }

      function Se(e, t) {
        if (!t) return e;
        const n = fe.formats;
        return {
          ...n,
          ...e,
          date: He(Pe(n.date, t), Pe(e.date || {}, t)),
          time: He(Pe(n.time, t), Pe(e.time || {}, t))
        }
      }
      const Be = ({
          locale: e,
          formats: t,
          messages: n,
          defaultLocale: r,
          defaultFormats: o,
          fallbackOnEmptyString: i,
          onError: a,
          timeZone: s,
          defaultRichTextElements: l
        }, c, u = {
          id: ""
        }, h, f) => {
          const {
            id: m,
            defaultMessage: d
          } = u;
          ! function(e, t, n = Error) {
            if (!e) throw new n("[@formatjs/intl] An `id` must be provided to format a message. You can either:\n1. Configure your build toolchain with [babel-plugin-formatjs](https://formatjs.github.io/docs/tooling/babel-plugin)\nor [@formatjs/ts-transformer](https://formatjs.github.io/docs/tooling/ts-transformer) OR\n2. Configure your `eslint` config to include [eslint-plugin-formatjs](https://formatjs.github.io/docs/tooling/linter#enforce-id)\nto autofix this issue")
          }(!!m);
          const p = String(m),
            g = n && Object.prototype.hasOwnProperty.call(n, p) && n[p];
          if (Array.isArray(g) && 1 === g.length && g[0].type === B.literal) return g[0].value;
          if (h = {
              ...l,
              ...h
            }, t = Se(t, s), o = Se(o, s), !g) {
            if (!1 === i && "" === g) return g;
            if ((!d || e && e.toLowerCase() !== r.toLowerCase()) && a(new Ee(u, e)), d) try {
              return c.getMessageFormat(d, r, o, f).format(h)
            } catch (t) {
              return a(new ye(`Error formatting default message for: "${p}", rendering default message verbatim`, e, u, t)), "string" == typeof d ? d : p
            }
            return p
          }
          try {
            return c.getMessageFormat(g, e, t, {
              formatters: c,
              ...f
            }).format(h)
          } catch (t) {
            a(new ye(`Error formatting message: "${p}", using ${d?"default message":"id"} as fallback.`, e, u, t))
          }
          if (d) try {
            return c.getMessageFormat(d, r, o, f).format(h)
          } catch (t) {
            a(new ye(`Error formatting the default message for: "${p}", rendering message verbatim`, e, u, t))
          }
          return "string" == typeof g ? g : "string" == typeof d ? d : p
        },
        Me = ["formatMatcher", "timeZone", "hour12", "weekday", "era", "year", "month", "day", "hour", "minute", "second", "timeZoneName", "hourCycle", "dateStyle", "timeStyle", "calendar", "numberingSystem", "fractionalSecondDigits"];

      function Ie({
        locale: e,
        formats: t,
        onError: n,
        timeZone: r
      }, o, i, a = {}) {
        const {
          format: s
        } = a;
        let l = we(a, Me, {
          ...r && {
            timeZone: r
          },
          ...s && Ne(t, o, s, n)
        });
        return "time" !== o || l.hour || l.minute || l.second || l.timeStyle || l.dateStyle || (l = {
          ...l,
          hour: "numeric",
          minute: "numeric"
        }), i(e, l)
      }

      function _e(e, t, n, r = {}) {
        const o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return Ie(e, "date", t, r).format(o)
        } catch (t) {
          e.onError(new be("Error formatting date.", e.locale, t))
        }
        return String(o)
      }

      function Ae(e, t, n, r = {}) {
        const o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return Ie(e, "time", t, r).format(o)
        } catch (t) {
          e.onError(new be("Error formatting time.", e.locale, t))
        }
        return String(o)
      }

      function Ce(e, t, n, r, o = {}) {
        const i = "string" == typeof n ? new Date(n || 0) : n,
          a = "string" == typeof r ? new Date(r || 0) : r;
        try {
          return Ie(e, "dateTimeRange", t, o).formatRange(i, a)
        } catch (t) {
          e.onError(new be("Error formatting date time range.", e.locale, t))
        }
        return String(i)
      }

      function Re(e, t, n, r = {}) {
        const o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return Ie(e, "date", t, r).formatToParts(o)
        } catch (t) {
          e.onError(new be("Error formatting date.", e.locale, t))
        }
        return []
      }

      function Le(e, t, n, r = {}) {
        const o = "string" == typeof n ? new Date(n || 0) : n;
        try {
          return Ie(e, "time", t, r).formatToParts(o)
        } catch (t) {
          e.onError(new be("Error formatting time.", e.locale, t))
        }
        return []
      }
      const xe = ["style", "type", "fallback", "languageDisplay"];

      function De({
        locale: e,
        onError: t
      }, n, r, o) {
        Intl.DisplayNames || t(new ie('Intl.DisplayNames is not available in this environment.\nTry polyfilling it using "@formatjs/intl-displaynames"\n', oe.MISSING_INTL_API));
        const i = we(o, xe);
        try {
          return n(e, i).of(r)
        } catch (n) {
          t(new be("Error formatting display name.", e, n))
        }
      }
      const Oe = ["type", "style"],
        Fe = Date.now();

      function ke(e, t, n, r = {}) {
        const o = Ue(e, t, n, r).reduce((e, t) => {
          const n = t.value;
          return "string" != typeof n ? e.push(n) : "string" == typeof e[e.length - 1] ? e[e.length - 1] += n : e.push(n), e
        }, []);
        return 1 === o.length ? o[0] : 0 === o.length ? "" : o
      }

      function Ue({
        locale: e,
        onError: t
      }, n, r, o = {}) {
        Intl.ListFormat || t(new ie('Intl.ListFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-listformat"\n', oe.MISSING_INTL_API));
        const i = we(o, Oe);
        try {
          const t = {},
            o = Array.from(r).map((e, n) => {
              if ("object" == typeof e && null !== e) {
                const r = function(e) {
                  return `${Fe}_${e}_${Fe}`
                }(n);
                return t[r] = e, r
              }
              return String(e)
            });
          return n(e, i).formatToParts(o).map(e => "literal" === e.type ? e : {
            ...e,
            value: t[e.value] || e.value
          })
        } catch (n) {
          t(new be("Error formatting list.", e, n))
        }
        return r
      }
      const Ge = ["type"];

      function je({
        locale: e,
        onError: t
      }, n, r, o = {}) {
        Intl.PluralRules || t(new ie('Intl.PluralRules is not available in this environment.\nTry polyfilling it using "@formatjs/intl-pluralrules"\n', oe.MISSING_INTL_API));
        const i = we(o, Ge);
        try {
          return n(e, i).select(r)
        } catch (n) {
          t(new be("Error formatting plural.", e, n))
        }
        return "other"
      }
      const Ve = ["numeric", "style"];

      function Ke(e, t, n, r, o = {}) {
        r || (r = "second"), Intl.RelativeTimeFormat || e.onError(new ie('Intl.RelativeTimeFormat is not available in this environment.\nTry polyfilling it using "@formatjs/intl-relativetimeformat"\n', oe.MISSING_INTL_API));
        try {
          return function({
            locale: e,
            formats: t,
            onError: n
          }, r, o = {}) {
            const {
              format: i
            } = o;
            return r(e, we(o, Ve, !!i && Ne(t, "relative", i, n) || {}))
          }(e, t, o).format(n, r)
        } catch (t) {
          e.onError(new be("Error formatting relative time.", e.locale, t))
        }
        return String(n)
      }
      const $e = ["style", "currency", "unit", "unitDisplay", "useGrouping", "minimumIntegerDigits", "minimumFractionDigits", "maximumFractionDigits", "minimumSignificantDigits", "maximumSignificantDigits", "compactDisplay", "currencyDisplay", "currencySign", "notation", "signDisplay", "unit", "unitDisplay", "numberingSystem", "trailingZeroDisplay", "roundingPriority", "roundingIncrement", "roundingMode"];

      function We({
        locale: e,
        formats: t,
        onError: n
      }, r, o = {}) {
        const {
          format: i
        } = o;
        return r(e, we(o, $e, i && Ne(t, "number", i, n) || {}))
      }

      function Ye(e, t, n, r = {}) {
        try {
          return We(e, t, r).format(n)
        } catch (t) {
          e.onError(new be("Error formatting number.", e.locale, t))
        }
        return String(n)
      }

      function Ze(e, t, n, r = {}) {
        try {
          return We(e, t, r).formatToParts(n)
        } catch (t) {
          e.onError(new be("Error formatting number.", e.locale, t))
        }
        return []
      }

      function Xe(e, t) {
        const n = function(e = {
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }) {
            const t = Intl.RelativeTimeFormat,
              n = Intl.ListFormat,
              r = Intl.DisplayNames,
              i = o((...e) => new Intl.DateTimeFormat(...e), {
                cache: Te(e.dateTime),
                strategy: f.variadic
              }),
              a = o((...e) => new Intl.NumberFormat(...e), {
                cache: Te(e.number),
                strategy: f.variadic
              }),
              s = o((...e) => new Intl.PluralRules(...e), {
                cache: Te(e.pluralRules),
                strategy: f.variadic
              });
            return {
              getDateTimeFormat: i,
              getNumberFormat: a,
              getMessageFormat: o((e, t, n, r) => new fe(e, t, n, {
                formatters: {
                  getNumberFormat: a,
                  getDateTimeFormat: i,
                  getPluralRules: s
                },
                ...r
              }), {
                cache: Te(e.message),
                strategy: f.variadic
              }),
              getRelativeTimeFormat: o((...e) => new t(...e), {
                cache: Te(e.relativeTime),
                strategy: f.variadic
              }),
              getPluralRules: s,
              getListFormat: o((...e) => new n(...e), {
                cache: Te(e.list),
                strategy: f.variadic
              }),
              getDisplayNames: o((...e) => new r(...e), {
                cache: Te(e.displayNames),
                strategy: f.variadic
              })
            }
          }(t),
          r = {
            ...ve,
            ...e
          },
          {
            locale: i,
            defaultLocale: a,
            onError: s
          } = r;
        return i ? !Intl.NumberFormat.supportedLocalesOf(i).length && s ? s(new ge(`Missing locale data for locale: "${i}" in Intl.NumberFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : !Intl.DateTimeFormat.supportedLocalesOf(i).length && s && s(new ge(`Missing locale data for locale: "${i}" in Intl.DateTimeFormat. Using default locale: "${a}" as fallback. See https://formatjs.github.io/docs/react-intl#runtime-requirements for more details`)) : (s && s(new pe(`"locale" was not configured, using "${a}" as fallback. See https://formatjs.github.io/docs/react-intl/api#intlshape for more details`)), r.locale = r.defaultLocale || "en"),
          function(e) {
            var t;
            e.onWarn && e.defaultRichTextElements && "string" == typeof((t = e.messages || {}) ? t[Object.keys(t)[0]] : void 0) && e.onWarn('[@formatjs/intl] "defaultRichTextElements" was specified but "message" was not pre-compiled. \nPlease consider using "@formatjs/cli" to pre-compile your messages for performance.\nFor more details see https://formatjs.github.io/docs/getting-started/message-distribution')
          }(r), {
            ...r,
            formatters: n,
            formatNumber: Ye.bind(null, r, n.getNumberFormat),
            formatNumberToParts: Ze.bind(null, r, n.getNumberFormat),
            formatRelativeTime: Ke.bind(null, r, n.getRelativeTimeFormat),
            formatDate: _e.bind(null, r, n.getDateTimeFormat),
            formatDateToParts: Re.bind(null, r, n.getDateTimeFormat),
            formatTime: Ae.bind(null, r, n.getDateTimeFormat),
            formatDateTimeRange: Ce.bind(null, r, n.getDateTimeFormat),
            formatTimeToParts: Le.bind(null, r, n.getDateTimeFormat),
            formatPlural: je.bind(null, r, n.getPluralRules),
            formatMessage: Be.bind(null, r, n),
            $t: Be.bind(null, r, n),
            formatList: ke.bind(null, r, n.getListFormat),
            formatListToParts: Ue.bind(null, r, n.getListFormat),
            formatDisplayName: De.bind(null, r, n.getDisplayNames)
          }
      }
      var ze = n(39793);

      function qe(e, t, n = Error) {
        if (!e) throw new n(t)
      }

      function Je(e) {
        qe(e, "[React Intl] Could not find required `intl` object. <IntlProvider> needs to exist in the component ancestry.")
      }
      const Qe = {
          ...ve,
          textComponent: r.Fragment
        },
        et = e => r.Children.toArray(e).map((e, t) => r.isValidElement(e) ? (0, ze.jsx)(r.Fragment, {
          children: e
        }, t) : e);

      function tt(e, t) {
        if (e === t) return !0;
        if (!e || !t) return !1;
        var n = Object.keys(e),
          r = Object.keys(t),
          o = n.length;
        if (r.length !== o) return !1;
        for (var i = 0; i < o; i++) {
          var a = n[i];
          if (e[a] !== t[a] || !Object.prototype.hasOwnProperty.call(t, a)) return !1
        }
        return !0
      }
      const nt = r.createContext(null),
        rt = nt.Provider;

      function ot() {
        const e = r.useContext(nt);
        return Je(e), e
      }
      var it = function(e) {
          return e.formatDate = "FormattedDate", e.formatTime = "FormattedTime", e.formatNumber = "FormattedNumber", e.formatList = "FormattedList", e.formatDisplayName = "FormattedDisplayName", e
        }(it || {}),
        at = function(e) {
          return e.formatDate = "FormattedDateParts", e.formatTime = "FormattedTimeParts", e.formatNumber = "FormattedNumberParts", e.formatList = "FormattedListParts", e
        }(at || {});

      function st(e) {
        const t = t => {
          const n = ot(),
            {
              value: r,
              children: o,
              ...i
            } = t,
            a = "string" == typeof r ? new Date(r || 0) : r;
          return o("formatDate" === e ? n.formatDateToParts(a, i) : n.formatTimeToParts(a, i))
        };
        return t.displayName = at[e], t
      }

      function lt(e) {
        const t = t => {
          const n = ot(),
            {
              value: o,
              children: i,
              ...a
            } = t,
            s = n[e](o, a);
          return "function" == typeof i ? i(s) : (0, ze.jsx)(n.textComponent || r.Fragment, {
            children: s
          })
        };
        return t.displayName = it[e], t
      }

      function ct(e) {
        return e ? Object.keys(e).reduce((t, n) => {
          const r = e[n];
          var o;
          return t[n] = ce(r) ? (o = r, function(e) {
            return o(et(e))
          }) : r, t
        }, {}) : e
      }
      const ut = (e, t, n, r, ...o) => {
        const i = Be(e, t, n, ct(r), ...o);
        return Array.isArray(i) ? et(i) : i
      };

      function ht(e) {
        const {
          formatMessage: t,
          textComponent: n = r.Fragment
        } = ot(), {
          id: o,
          description: i,
          defaultMessage: a,
          values: s,
          children: l,
          tagName: c = n,
          ignoreTag: u
        } = e, h = t({
          id: o,
          description: i,
          defaultMessage: a
        }, s, {
          ignoreTag: u
        });
        return "function" == typeof l ? l(Array.isArray(h) ? h : [h]) : c ? (0, ze.jsx)(c, {
          children: h
        }) : (0, ze.jsx)(ze.Fragment, {
          children: h
        })
      }
      ht.displayName = "FormattedMessage";
      const ft = r.memo(ht, function(e, t) {
        const {
          values: n,
          ...r
        } = e, {
          values: o,
          ...i
        } = t;
        return tt(o, n) && tt(r, i)
      });

      function mt(e) {
        const t = r.useRef({
            dateTime: {},
            number: {},
            message: {},
            relativeTime: {},
            pluralRules: {},
            list: {},
            displayNames: {}
          }),
          n = r.useRef(void 0),
          o = r.useRef(void 0),
          i = {};
        for (const t in e) void 0 !== e[t] && (i[t] = e[t]);
        const a = function(e) {
          return {
            locale: e.locale,
            timeZone: e.timeZone,
            fallbackOnEmptyString: e.fallbackOnEmptyString,
            formats: e.formats,
            textComponent: e.textComponent,
            messages: e.messages,
            defaultLocale: e.defaultLocale,
            defaultFormats: e.defaultFormats,
            onError: e.onError,
            onWarn: e.onWarn,
            wrapRichTextChunksInFragment: e.wrapRichTextChunksInFragment,
            defaultRichTextElements: e.defaultRichTextElements
          }
        }({
          ...Qe,
          ...i
        });
        return n.current && tt(n.current, a) || (n.current = a, o.current = (({
          defaultRichTextElements: e,
          ...t
        }, n) => {
          const r = ct(e),
            o = Xe({
              ...Qe,
              ...t,
              defaultRichTextElements: r
            }, n),
            i = {
              locale: o.locale,
              timeZone: o.timeZone,
              fallbackOnEmptyString: o.fallbackOnEmptyString,
              formats: o.formats,
              defaultLocale: o.defaultLocale,
              defaultFormats: o.defaultFormats,
              messages: o.messages,
              onError: o.onError,
              defaultRichTextElements: r
            };
          return {
            ...o,
            formatMessage: ut.bind(null, i, o.formatters),
            $t: ut.bind(null, i, o.formatters)
          }
        })(a, t.current)), Je(o.current), (0, ze.jsx)(rt, {
          value: o.current,
          children: e.children
        })
      }
      ft.displayName = "MemoizedFormattedMessage", mt.displayName = "IntlProvider";
      const dt = mt;

      function pt(e) {
        return e
      }
      lt("formatDate"), lt("formatTime"), lt("formatNumber"), lt("formatList"), lt("formatDisplayName"), st("formatDate"), st("formatTime")
    }
  }
]);