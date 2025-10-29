try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "f5b9136f-0b9e-446b-836a-11b8b50eedcc", e._sentryDebugIdIdentifier = "sentry-dbid-f5b9136f-0b9e-446b-836a-11b8b50eedcc")
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
  [4958], {
    15234: (e, n, t) => {
      t.d(n, {
        Oh: () => i
      });
      var r = t(62229),
        o = 0;

      function i() {
        r.useEffect((() => {
          const e = document.querySelectorAll("[data-radix-focus-guard]");
          return document.body.insertAdjacentElement("afterbegin", e[0] ?? c()), document.body.insertAdjacentElement("beforeend", e[1] ?? c()), o++, () => {
            1 === o && document.querySelectorAll("[data-radix-focus-guard]").forEach((e => e.remove())), o--
          }
        }), [])
      }

      function c() {
        const e = document.createElement("span");
        return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.outline = "none", e.style.opacity = "0", e.style.position = "fixed", e.style.pointerEvents = "none", e
      }
    },
    16675: (e, n, t) => {
      t.d(n, {
        A: () => j
      });
      var r = t(62229);

      function o(e) {
        return function(e) {
          return "[object Object]" === Object.prototype.toString.call(e)
        }(e) || Array.isArray(e)
      }

      function i(e, n) {
        const t = Object.keys(e),
          r = Object.keys(n);
        return t.length === r.length && (JSON.stringify(Object.keys(e.breakpoints || {})) === JSON.stringify(Object.keys(n.breakpoints || {})) && t.every((t => {
          const r = e[t],
            c = n[t];
          return "function" == typeof r ? `${r}` == `${c}` : o(r) && o(c) ? i(r, c) : r === c
        })))
      }

      function c(e) {
        return e.concat().sort(((e, n) => e.name > n.name ? 1 : -1)).map((e => e.options))
      }

      function u(e) {
        return "number" == typeof e
      }

      function s(e) {
        return "string" == typeof e
      }

      function a(e) {
        return "boolean" == typeof e
      }

      function d(e) {
        return "[object Object]" === Object.prototype.toString.call(e)
      }

      function l(e) {
        return Math.abs(e)
      }

      function f(e) {
        return Math.sign(e)
      }

      function p(e, n) {
        return l(e - n)
      }

      function m(e) {
        return b(e).map(Number)
      }

      function g(e) {
        return e[h(e)]
      }

      function h(e) {
        return Math.max(0, e.length - 1)
      }

      function y(e, n) {
        return n === h(e)
      }

      function v(e, n = 0) {
        return Array.from(Array(e), ((e, t) => n + t))
      }

      function b(e) {
        return Object.keys(e)
      }

      function w(e, n) {
        return [e, n].reduce(((e, n) => (b(n).forEach((t => {
          const r = e[t],
            o = n[t],
            i = d(r) && d(o);
          e[t] = i ? w(r, o) : o
        })), e)), {})
      }

      function x(e, n) {
        return void 0 !== n.MouseEvent && e instanceof n.MouseEvent
      }

      function E() {
        let e = [];
        const n = {
          add: function(t, r, o, i = {
            passive: !0
          }) {
            let c;
            if ("addEventListener" in t) t.addEventListener(r, o, i), c = () => t.removeEventListener(r, o, i);
            else {
              const e = t;
              e.addListener(o), c = () => e.removeListener(o)
            }
            return e.push(c), n
          },
          clear: function() {
            e = e.filter((e => e()))
          }
        };
        return n
      }

      function S(e = 0, n = 0) {
        const t = l(e - n);

        function r(n) {
          return n < e
        }

        function o(e) {
          return e > n
        }

        function i(e) {
          return r(e) || o(e)
        }
        return {
          length: t,
          max: n,
          min: e,
          constrain: function(t) {
            return i(t) ? r(t) ? e : n : t
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function(e) {
            return t ? e - t * Math.ceil((e - n) / t) : e
          }
        }
      }

      function A(e, n, t) {
        const {
          constrain: r
        } = S(0, e), o = e + 1;
        let i = c(n);

        function c(e) {
          return t ? l((o + e) % o) : r(e)
        }

        function u() {
          return i
        }

        function s() {
          return A(e, u(), t)
        }
        const a = {
          get: u,
          set: function(e) {
            return i = c(e), a
          },
          add: function(e) {
            return s().set(u() + e)
          },
          clone: s
        };
        return a
      }

      function M(e, n, t, r, o, i, c, u, s, d, m, g, h, y, v, b, w, A, M) {
        const {
          cross: N,
          direction: O
        } = e, k = ["INPUT", "SELECT", "TEXTAREA"], T = {
          passive: !1
        }, I = E(), L = E(), D = S(50, 225).constrain(y.measure(20)), P = {
          mouse: 300,
          touch: 400
        }, C = {
          mouse: 500,
          touch: 600
        }, R = v ? 43 : 25;
        let F = !1,
          _ = 0,
          j = 0,
          W = !1,
          H = !1,
          $ = !1,
          z = !1;

        function U(e) {
          if (!x(e, r) && e.touches.length >= 2) return V(e);
          const n = i.readPoint(e),
            t = i.readPoint(e, N),
            c = p(n, _),
            s = p(t, j);
          if (!H && !z) {
            if (!e.cancelable) return V(e);
            if (H = c > s, !H) return V(e)
          }
          const a = i.pointerMove(e);
          c > b && ($ = !0), d.useFriction(.3).useDuration(.75), u.start(), o.add(O(a)), e.preventDefault()
        }

        function V(e) {
          const n = m.byDistance(0, !1).index !== g.get(),
            t = i.pointerUp(e) * (v ? C : P)[z ? "mouse" : "touch"],
            r = function(e, n) {
              const t = g.add(-1 * f(e)),
                r = m.byDistance(e, !v).distance;
              return v || l(e) < D ? r : w && n ? .5 * r : m.byIndex(t.get(), 0).distance
            }(O(t), n),
            o = function(e, n) {
              if (0 === e || 0 === n) return 0;
              if (l(e) <= l(n)) return 0;
              const t = p(l(e), l(n));
              return l(t / e)
            }(t, r),
            c = R - 10 * o,
            u = A + o / 50;
          H = !1, W = !1, L.clear(), d.useDuration(c).useFriction(u), s.distance(r, !v), z = !1, h.emit("pointerUp")
        }

        function B(e) {
          $ && (e.stopPropagation(), e.preventDefault(), $ = !1)
        }
        return {
          init: function(e) {
            if (!M) return;

            function u(u) {
              (a(M) || M(e, u)) && function(e) {
                const u = x(e, r);
                z = u, $ = v && u && !e.buttons && F, F = p(o.get(), c.get()) >= 2, u && 0 !== e.button || function(e) {
                  const n = e.nodeName || "";
                  return k.includes(n)
                }(e.target) || (W = !0, i.pointerDown(e), d.useFriction(0).useDuration(0), o.set(c), function() {
                  const e = z ? t : n;
                  L.add(e, "touchmove", U, T).add(e, "touchend", V).add(e, "mousemove", U, T).add(e, "mouseup", V)
                }(), _ = i.readPoint(e), j = i.readPoint(e, N), h.emit("pointerDown"))
              }(u)
            }
            const s = n;
            I.add(s, "dragstart", (e => e.preventDefault()), T).add(s, "touchmove", (() => {}), T).add(s, "touchend", (() => {})).add(s, "touchstart", u).add(s, "mousedown", u).add(s, "touchcancel", V).add(s, "contextmenu", V).add(s, "click", B, !0)
          },
          destroy: function() {
            I.clear(), L.clear()
          },
          pointerDown: function() {
            return W
          }
        }
      }

      function N(e, n) {
        let t, r;

        function o(e) {
          return e.timeStamp
        }

        function i(t, r) {
          const o = "client" + ("x" === (r || e.scroll) ? "X" : "Y");
          return (x(t, n) ? t : t.touches[0])[o]
        }
        return {
          pointerDown: function(e) {
            return t = e, r = e, i(e)
          },
          pointerMove: function(e) {
            const n = i(e) - i(r),
              c = o(e) - o(t) > 170;
            return r = e, c && (t = e), n
          },
          pointerUp: function(e) {
            if (!t || !r) return 0;
            const n = i(r) - i(t),
              c = o(e) - o(t),
              u = o(e) - o(r) > 170,
              s = n / c;
            return c && !u && l(s) > .1 ? s : 0
          },
          readPoint: i
        }
      }

      function O(e, n, t, r, o, i, c) {
        const u = [e].concat(r);
        let s, d, f = [],
          p = !1;

        function m(e) {
          return o.measureSize(c.measure(e))
        }
        return {
          init: function(o) {
            i && (d = m(e), f = r.map(m), s = new ResizeObserver((t => {
              (a(i) || i(o, t)) && function(t) {
                for (const i of t) {
                  if (p) return;
                  const t = i.target === e,
                    c = r.indexOf(i.target),
                    u = t ? d : f[c];
                  if (l(m(t ? e : r[c]) - u) >= .5) {
                    o.reInit(), n.emit("resize");
                    break
                  }
                }
              }(t)
            })), t.requestAnimationFrame((() => {
              u.forEach((e => s.observe(e)))
            })))
          },
          destroy: function() {
            p = !0, s && s.disconnect()
          }
        }
      }

      function k(e, n, t, r, o) {
        const i = o.measure(10),
          c = o.measure(50),
          u = S(.1, .99);
        let s = !1;

        function a() {
          return !s && !!e.reachedAny(t.get()) && !!e.reachedAny(n.get())
        }
        return {
          shouldConstrain: a,
          constrain: function(o) {
            if (!a()) return;
            const s = e.reachedMin(n.get()) ? "min" : "max",
              d = l(e[s] - n.get()),
              f = t.get() - n.get(),
              p = u.constrain(d / c);
            t.subtract(f * p), !o && l(f) < i && (t.set(e.constrain(t.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(e) {
            s = !e
          }
        }
      }

      function T(e, n, t, r) {
        const o = n.min + .1,
          i = n.max + .1,
          {
            reachedMin: c,
            reachedMax: u
          } = S(o, i);
        return {
          loop: function(n) {
            if (! function(e) {
                return 1 === e ? u(t.get()) : -1 === e && c(t.get())
              }(n)) return;
            const o = e * (-1 * n);
            r.forEach((e => e.add(o)))
          }
        }
      }

      function I(e) {
        let n = e;

        function t(e) {
          return u(e) ? e : e.get()
        }
        return {
          get: function() {
            return n
          },
          set: function(e) {
            n = t(e)
          },
          add: function(e) {
            n += t(e)
          },
          subtract: function(e) {
            n -= t(e)
          }
        }
      }

      function L(e, n) {
        const t = "x" === e.scroll ? function(e) {
            return `translate3d(${e}px,0px,0px)`
          } : function(e) {
            return `translate3d(0px,${e}px,0px)`
          },
          r = n.style;
        let o = null,
          i = !1;
        return {
          clear: function() {
            i || (r.transform = "", n.getAttribute("style") || n.removeAttribute("style"))
          },
          to: function(n) {
            if (i) return;
            const c = (u = e.direction(n), Math.round(100 * u) / 100);
            var u;
            c !== o && (r.transform = t(c), o = c)
          },
          toggleActive: function(e) {
            i = !e
          }
        }
      }

      function D(e, n, t, r, o, i, c, u, s) {
        const a = m(o),
          d = m(o).reverse(),
          l = function() {
            const e = c[0];
            return g(p(d, e), t, !1)
          }().concat(function() {
            const e = n - c[0] - 1;
            return g(p(a, e), -t, !0)
          }());

        function f(e, n) {
          return e.reduce(((e, n) => e - o[n]), n)
        }

        function p(e, n) {
          return e.reduce(((e, t) => f(e, n) > 0 ? e.concat([t]) : e), [])
        }

        function g(o, c, a) {
          const d = function(e) {
            return i.map(((t, o) => ({
              start: t - r[o] + .5 + e,
              end: t + n - .5 + e
            })))
          }(c);
          return o.map((n => {
            const r = a ? 0 : -t,
              o = a ? t : 0,
              i = a ? "end" : "start",
              c = d[n][i];
            return {
              index: n,
              loopPoint: c,
              slideLocation: I(-1),
              translate: L(e, s[n]),
              target: () => u.get() > c ? r : o
            }
          }))
        }
        return {
          canLoop: function() {
            return l.every((({
              index: e
            }) => f(a.filter((n => n !== e)), n) <= .1))
          },
          clear: function() {
            l.forEach((e => e.translate.clear()))
          },
          loop: function() {
            l.forEach((e => {
              const {
                target: n,
                translate: t,
                slideLocation: r
              } = e, o = n();
              o !== r.get() && (t.to(o), r.set(o))
            }))
          },
          loopPoints: l
        }
      }

      function P(e, n, t) {
        let r, o = !1;
        return {
          init: function(i) {
            t && (r = new MutationObserver((e => {
              o || (a(t) || t(i, e)) && function(e) {
                for (const t of e)
                  if ("childList" === t.type) {
                    i.reInit(), n.emit("slidesChanged");
                    break
                  }
              }(e)
            })), r.observe(e, {
              childList: !0
            }))
          },
          destroy: function() {
            r && r.disconnect(), o = !0
          }
        }
      }

      function C(e, n, t, r, o, i, c) {
        const {
          align: d,
          axis: w,
          direction: x,
          startIndex: C,
          loop: R,
          duration: F,
          dragFree: _,
          dragThreshold: j,
          inViewThreshold: W,
          slidesToScroll: H,
          skipSnaps: $,
          containScroll: z,
          watchResize: U,
          watchSlides: V,
          watchDrag: B,
          watchFocus: q
        } = i, G = {
          measure: function(e) {
            const {
              offsetTop: n,
              offsetLeft: t,
              offsetWidth: r,
              offsetHeight: o
            } = e;
            return {
              top: n,
              right: t + r,
              bottom: n + o,
              left: t,
              width: r,
              height: o
            }
          }
        }, Q = G.measure(n), X = t.map(G.measure), Y = function(e, n) {
          const t = "rtl" === n,
            r = "y" === e,
            o = !r && t ? -1 : 1;
          return {
            scroll: r ? "y" : "x",
            cross: r ? "x" : "y",
            startEdge: r ? "top" : t ? "right" : "left",
            endEdge: r ? "bottom" : t ? "left" : "right",
            measureSize: function(e) {
              const {
                height: n,
                width: t
              } = e;
              return r ? n : t
            },
            direction: function(e) {
              return e * o
            }
          }
        }(w, x), J = Y.measureSize(Q), K = function(e) {
          return {
            measure: function(n) {
              return e * (n / 100)
            }
          }
        }(J), Z = function(e, n) {
          const t = {
            start: function() {
              return 0
            },
            center: function(e) {
              return r(e) / 2
            },
            end: r
          };

          function r(e) {
            return n - e
          }
          return {
            measure: function(r, o) {
              return s(e) ? t[e](r) : e(n, r, o)
            }
          }
        }(d, J), ee = !R && !!z, ne = R || !!z, {
          slideSizes: te,
          slideSizesWithGaps: re,
          startGap: oe,
          endGap: ie
        } = function(e, n, t, r, o, i) {
          const {
            measureSize: c,
            startEdge: u,
            endEdge: s
          } = e, a = t[0] && o, d = function() {
            if (!a) return 0;
            const e = t[0];
            return l(n[u] - e[u])
          }(), f = function() {
            if (!a) return 0;
            const e = i.getComputedStyle(g(r));
            return parseFloat(e.getPropertyValue(`margin-${s}`))
          }(), p = t.map(c), m = t.map(((e, n, t) => {
            const r = !n,
              o = y(t, n);
            return r ? p[n] + d : o ? p[n] + f : t[n + 1][u] - e[u]
          })).map(l);
          return {
            slideSizes: p,
            slideSizesWithGaps: m,
            startGap: d,
            endGap: f
          }
        }(Y, Q, X, t, ne, o), ce = function(e, n, t, r, o, i, c, s, a) {
          const {
            startEdge: d,
            endEdge: f,
            direction: p
          } = e, y = u(t);
          return {
            groupSlides: function(e) {
              return y ? function(e, n) {
                return m(e).filter((e => e % n == 0)).map((t => e.slice(t, t + n)))
              }(e, t) : function(e) {
                return e.length ? m(e).reduce(((t, u, m) => {
                  const y = g(t) || 0,
                    v = 0 === y,
                    b = u === h(e),
                    w = o[d] - i[y][d],
                    x = o[d] - i[u][f],
                    E = !r && v ? p(c) : 0,
                    S = l(x - (!r && b ? p(s) : 0) - (w + E));
                  return m && S > n + a && t.push(u), b && t.push(e.length), t
                }), []).map(((n, t, r) => {
                  const o = Math.max(r[t - 1] || 0);
                  return e.slice(o, n)
                })) : []
              }(e)
            }
          }
        }(Y, J, H, R, Q, X, oe, ie, 2), {
          snaps: ue,
          snapsAligned: se
        } = function(e, n, t, r, o) {
          const {
            startEdge: i,
            endEdge: c
          } = e, {
            groupSlides: u
          } = o, s = u(r).map((e => g(e)[c] - e[0][i])).map(l).map(n.measure), a = r.map((e => t[i] - e[i])).map((e => -l(e))), d = u(a).map((e => e[0])).map(((e, n) => e + s[n]));
          return {
            snaps: a,
            snapsAligned: d
          }
        }(Y, Z, Q, X, ce), ae = -g(ue) + g(re), {
          snapsContained: de,
          scrollContainLimit: le
        } = function(e, n, t, r) {
          const o = S(-n + e, 0),
            i = t.map(((e, n) => {
              const {
                min: r,
                max: i
              } = o, c = o.constrain(e), s = !n, a = y(t, n);
              return s ? i : a || u(r, c) ? r : u(i, c) ? i : c
            })).map((e => parseFloat(e.toFixed(3)))),
            c = function() {
              const e = i[0],
                n = g(i);
              return S(i.lastIndexOf(e), i.indexOf(n) + 1)
            }();

          function u(e, n) {
            return p(e, n) <= 1
          }
          return {
            snapsContained: function() {
              if (n <= e + 2) return [o.max];
              if ("keepSnaps" === r) return i;
              const {
                min: t,
                max: u
              } = c;
              return i.slice(t, u)
            }(),
            scrollContainLimit: c
          }
        }(J, ae, se, z), fe = ee ? de : se, {
          limit: pe
        } = function(e, n, t) {
          const r = n[0];
          return {
            limit: S(t ? r - e : g(n), r)
          }
        }(ae, fe, R), me = A(h(fe), C, R), ge = me.clone(), he = m(t), ye = function(e, n, t, r) {
          const o = E(),
            i = 1e3 / 60;
          let c = null,
            u = 0,
            s = 0;

          function a(e) {
            if (!s) return;
            c || (c = e, t(), t());
            const o = e - c;
            for (c = e, u += o; u >= i;) t(), u -= i;
            r(u / i), s && (s = n.requestAnimationFrame(a))
          }

          function d() {
            n.cancelAnimationFrame(s), c = null, u = 0, s = 0
          }
          return {
            init: function() {
              o.add(e, "visibilitychange", (() => {
                e.hidden && (c = null, u = 0)
              }))
            },
            destroy: function() {
              d(), o.clear()
            },
            start: function() {
              s || (s = n.requestAnimationFrame(a))
            },
            stop: d,
            update: t,
            render: r
          }
        }(r, o, (() => (({
          dragHandler: e,
          scrollBody: n,
          scrollBounds: t,
          options: {
            loop: r
          }
        }) => {
          r || t.constrain(e.pointerDown()), n.seek()
        })(Le)), (e => (({
          scrollBody: e,
          translate: n,
          location: t,
          offsetLocation: r,
          previousLocation: o,
          scrollLooper: i,
          slideLooper: c,
          dragHandler: u,
          animation: s,
          eventHandler: a,
          scrollBounds: d,
          options: {
            loop: l
          }
        }, f) => {
          const p = e.settled(),
            m = !d.shouldConstrain(),
            g = l ? p : p && m,
            h = g && !u.pointerDown();
          h && s.stop();
          const y = t.get() * f + o.get() * (1 - f);
          r.set(y), l && (i.loop(e.direction()), c.loop()), n.to(r.get()), h && a.emit("settle"), g || a.emit("scroll")
        })(Le, e))), ve = fe[me.get()], be = I(ve), we = I(ve), xe = I(ve), Ee = I(ve), Se = function(e, n, t, r, o) {
          let i = 0,
            c = 0,
            u = o,
            s = .68,
            a = e.get(),
            d = 0;

          function p(e) {
            return u = e, g
          }

          function m(e) {
            return s = e, g
          }
          const g = {
            direction: function() {
              return c
            },
            duration: function() {
              return u
            },
            velocity: function() {
              return i
            },
            seek: function() {
              const n = r.get() - e.get();
              let o = 0;
              return u ? (t.set(e), i += n / u, i *= s, a += i, e.add(i), o = a - d) : (i = 0, t.set(r), e.set(r), o = n), c = f(o), d = a, g
            },
            settled: function() {
              return l(r.get() - n.get()) < .001
            },
            useBaseFriction: function() {
              return m(.68)
            },
            useBaseDuration: function() {
              return p(o)
            },
            useFriction: m,
            useDuration: p
          };
          return g
        }(be, xe, we, Ee, F), Ae = function(e, n, t, r, o) {
          const {
            reachedAny: i,
            removeOffset: c,
            constrain: u
          } = r;

          function s(e) {
            return e.concat().sort(((e, n) => l(e) - l(n)))[0]
          }

          function a(n, r) {
            const o = [n, n + t, n - t];
            if (!e) return n;
            if (!r) return s(o);
            const i = o.filter((e => f(e) === r));
            return i.length ? s(i) : g(o) - t
          }
          return {
            byDistance: function(t, r) {
              const s = o.get() + t,
                {
                  index: d,
                  distance: f
                } = function(t) {
                  const r = e ? c(t) : u(t),
                    o = n.map(((e, n) => ({
                      diff: a(e - r, 0),
                      index: n
                    }))).sort(((e, n) => l(e.diff) - l(n.diff))),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: r
                  }
                }(s),
                p = !e && i(s);
              return !r || p ? {
                index: d,
                distance: t
              } : {
                index: d,
                distance: t + a(n[d] - f, 0)
              }
            },
            byIndex: function(e, t) {
              return {
                index: e,
                distance: a(n[e] - o.get(), t)
              }
            },
            shortcut: a
          }
        }(R, fe, ae, pe, Ee), Me = function(e, n, t, r, o, i, c) {
          function u(o) {
            const u = o.distance,
              s = o.index !== n.get();
            i.add(u), u && (r.duration() ? e.start() : (e.update(), e.render(1), e.update())), s && (t.set(n.get()), n.set(o.index), c.emit("select"))
          }
          return {
            distance: function(e, n) {
              u(o.byDistance(e, n))
            },
            index: function(e, t) {
              const r = n.clone().set(e);
              u(o.byIndex(r.get(), t))
            }
          }
        }(ye, me, ge, Se, Ae, Ee, c), Ne = function(e) {
          const {
            max: n,
            length: t
          } = e;
          return {
            get: function(e) {
              return t ? (e - n) / -t : 0
            }
          }
        }(pe), Oe = E(), ke = function(e, n, t, r) {
          const o = {};
          let i, c = null,
            u = null,
            s = !1;
          return {
            init: function() {
              i = new IntersectionObserver((e => {
                s || (e.forEach((e => {
                  const t = n.indexOf(e.target);
                  o[t] = e
                })), c = null, u = null, t.emit("slidesInView"))
              }), {
                root: e.parentElement,
                threshold: r
              }), n.forEach((e => i.observe(e)))
            },
            destroy: function() {
              i && i.disconnect(), s = !0
            },
            get: function(e = !0) {
              if (e && c) return c;
              if (!e && u) return u;
              const n = function(e) {
                return b(o).reduce(((n, t) => {
                  const r = parseInt(t),
                    {
                      isIntersecting: i
                    } = o[r];
                  return (e && i || !e && !i) && n.push(r), n
                }), [])
              }(e);
              return e && (c = n), e || (u = n), n
            }
          }
        }(n, t, c, W), {
          slideRegistry: Te
        } = function(e, n, t, r, o, i) {
          const {
            groupSlides: c
          } = o, {
            min: u,
            max: s
          } = r;
          return {
            slideRegistry: function() {
              const r = c(i),
                o = !e || "keepSnaps" === n;
              return 1 === t.length ? [i] : o ? r : r.slice(u, s).map(((e, n, t) => {
                const r = !n,
                  o = y(t, n);
                return r ? v(g(t[0]) + 1) : o ? v(h(i) - g(t)[0] + 1, g(t)[0]) : e
              }))
            }()
          }
        }(ee, z, fe, le, ce, he), Ie = function(e, n, t, r, o, i, c, s) {
          const d = {
            passive: !0,
            capture: !0
          };
          let l = 0;

          function f(e) {
            "Tab" === e.code && (l = (new Date).getTime())
          }
          return {
            init: function(p) {
              s && (i.add(document, "keydown", f, !1), n.forEach(((n, f) => {
                i.add(n, "focus", (n => {
                  (a(s) || s(p, n)) && function(n) {
                    if ((new Date).getTime() - l > 10) return;
                    c.emit("slideFocusStart"), e.scrollLeft = 0;
                    const i = t.findIndex((e => e.includes(n)));
                    u(i) && (o.useDuration(0), r.index(i, 0), c.emit("slideFocus"))
                  }(f)
                }), d)
              })))
            }
          }
        }(e, t, Te, Me, Se, Oe, c, q), Le = {
          ownerDocument: r,
          ownerWindow: o,
          eventHandler: c,
          containerRect: Q,
          slideRects: X,
          animation: ye,
          axis: Y,
          dragHandler: M(Y, e, r, o, Ee, N(Y, o), be, ye, Me, Se, Ae, me, c, K, _, j, $, .68, B),
          eventStore: Oe,
          percentOfView: K,
          index: me,
          indexPrevious: ge,
          limit: pe,
          location: be,
          offsetLocation: xe,
          previousLocation: we,
          options: i,
          resizeHandler: O(n, c, o, t, Y, U, G),
          scrollBody: Se,
          scrollBounds: k(pe, xe, Ee, Se, K),
          scrollLooper: T(ae, pe, xe, [be, xe, we, Ee]),
          scrollProgress: Ne,
          scrollSnapList: fe.map(Ne.get),
          scrollSnaps: fe,
          scrollTarget: Ae,
          scrollTo: Me,
          slideLooper: D(Y, J, ae, te, re, ue, fe, xe, t),
          slideFocus: Ie,
          slidesHandler: P(n, c, V),
          slidesInView: ke,
          slideIndexes: he,
          slideRegistry: Te,
          slidesToScroll: ce,
          target: Ee,
          translate: L(Y, n)
        };
        return Le
      }
      const R = {
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

      function F(e) {
        function n(e, n) {
          return w(e, n || {})
        }
        return {
          mergeOptions: n,
          optionsAtMedia: function(t) {
            const r = t.breakpoints || {},
              o = b(r).filter((n => e.matchMedia(n).matches)).map((e => r[e])).reduce(((e, t) => n(e, t)), {});
            return n(t, o)
          },
          optionsMediaQueries: function(n) {
            return n.map((e => b(e.breakpoints || {}))).reduce(((e, n) => e.concat(n)), []).map(e.matchMedia)
          }
        }
      }

      function _(e, n, t) {
        const r = e.ownerDocument,
          o = r.defaultView,
          i = F(o),
          c = function(e) {
            let n = [];
            return {
              init: function(t, r) {
                return n = r.filter((({
                  options: n
                }) => !1 !== e.optionsAtMedia(n).active)), n.forEach((n => n.init(t, e))), r.reduce(((e, n) => Object.assign(e, {
                  [n.name]: n
                })), {})
              },
              destroy: function() {
                n = n.filter((e => e.destroy()))
              }
            }
          }(i),
          u = E(),
          a = function() {
            let e, n = {};

            function t(e) {
              return n[e] || []
            }
            const r = {
              init: function(n) {
                e = n
              },
              emit: function(n) {
                return t(n).forEach((t => t(e, n))), r
              },
              off: function(e, o) {
                return n[e] = t(e).filter((e => e !== o)), r
              },
              on: function(e, o) {
                return n[e] = t(e).concat([o]), r
              },
              clear: function() {
                n = {}
              }
            };
            return r
          }(),
          {
            mergeOptions: d,
            optionsAtMedia: l,
            optionsMediaQueries: f
          } = i,
          {
            on: p,
            off: m,
            emit: g
          } = a,
          h = k;
        let y, v, b, w, x = !1,
          S = d(R, _.globalOptions),
          A = d(S),
          M = [];

        function N(n) {
          const t = C(e, b, w, r, o, n, a);
          return n.loop && !t.slideLooper.canLoop() ? N(Object.assign({}, n, {
            loop: !1
          })) : t
        }

        function O(n, t) {
          x || (S = d(S, n), A = l(S), M = t || M, function() {
            const {
              container: n,
              slides: t
            } = A, r = s(n) ? e.querySelector(n) : n;
            b = r || e.children[0];
            const o = s(t) ? b.querySelectorAll(t) : t;
            w = [].slice.call(o || b.children)
          }(), y = N(A), f([S, ...M.map((({
            options: e
          }) => e))]).forEach((e => u.add(e, "change", k))), A.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(D), y.eventHandler.init(D), y.resizeHandler.init(D), y.slidesHandler.init(D), y.options.loop && y.slideLooper.loop(), b.offsetParent && w.length && y.dragHandler.init(D), v = c.init(D, M)))
        }

        function k(e, n) {
          const t = L();
          T(), O(d({
            startIndex: t
          }, e), n), a.emit("reInit")
        }

        function T() {
          y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), c.destroy(), u.clear()
        }

        function I(e, n, t) {
          A.active && !x && (y.scrollBody.useBaseFriction().useDuration(!0 === n ? 0 : A.duration), y.scrollTo.index(e, t || 0))
        }

        function L() {
          return y.index.get()
        }
        const D = {
          canScrollNext: function() {
            return y.index.add(1).get() !== L()
          },
          canScrollPrev: function() {
            return y.index.add(-1).get() !== L()
          },
          containerNode: function() {
            return b
          },
          internalEngine: function() {
            return y
          },
          destroy: function() {
            x || (x = !0, u.clear(), T(), a.emit("destroy"), a.clear())
          },
          off: m,
          on: p,
          emit: g,
          plugins: function() {
            return v
          },
          previousScrollSnap: function() {
            return y.indexPrevious.get()
          },
          reInit: h,
          rootNode: function() {
            return e
          },
          scrollNext: function(e) {
            I(y.index.add(1).get(), e, -1)
          },
          scrollPrev: function(e) {
            I(y.index.add(-1).get(), e, 1)
          },
          scrollProgress: function() {
            return y.scrollProgress.get(y.offsetLocation.get())
          },
          scrollSnapList: function() {
            return y.scrollSnapList
          },
          scrollTo: I,
          selectedScrollSnap: L,
          slideNodes: function() {
            return w
          },
          slidesInView: function() {
            return y.slidesInView.get()
          },
          slidesNotInView: function() {
            return y.slidesInView.get(!1)
          }
        };
        return O(n, t), setTimeout((() => a.emit("init")), 0), D
      }

      function j(e = {}, n = []) {
        const t = (0, r.useRef)(e),
          o = (0, r.useRef)(n),
          [u, s] = (0, r.useState)(),
          [a, d] = (0, r.useState)(),
          l = (0, r.useCallback)((() => {
            u && u.reInit(t.current, o.current)
          }), [u]);
        return (0, r.useEffect)((() => {
          i(t.current, e) || (t.current = e, l())
        }), [e, l]), (0, r.useEffect)((() => {
          (function(e, n) {
            if (e.length !== n.length) return !1;
            const t = c(e),
              r = c(n);
            return t.every(((e, n) => i(e, r[n])))
          })(o.current, n) || (o.current = n, l())
        }), [n, l]), (0, r.useEffect)((() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            _.globalOptions = j.globalOptions;
            const e = _(a, t.current, o.current);
            return s(e), () => e.destroy()
          }
          s(void 0)
        }), [a, s]), [d, u]
      }
      _.globalOptions = void 0, j.globalOptions = void 0
    },
    25778: (e, n, t) => {
      t.d(n, {
        m: () => i
      });
      var r = t(4218);
      const o = (e, n) => {
          const t = "more" === n ? r.xW.lightHc : r.xW.light,
            o = "more" === n ? r.xW.darkHc : r.xW.dark;
          return "dark" === e ? o : t
        },
        i = (e, n) => [r.xW.tokens, r.xW.typography, o(e, n)].join(" ")
    },
    53054: (e, n, t) => {
      var r;
      t.d(n, {
        i: () => u
      });
      var o = t(62229),
        i = t(63155),
        c = (r || (r = t.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

      function u({
        prop: e,
        defaultProp: n,
        onChange: t = () => {},
        caller: r
      }) {
        const [i, u, s] = function({
          defaultProp: e,
          onChange: n
        }) {
          const [t, r] = o.useState(e), i = o.useRef(t), u = o.useRef(n);
          return c((() => {
            u.current = n
          }), [n]), o.useEffect((() => {
            i.current !== t && (u.current?.(t), i.current = t)
          }), [t, i]), [t, r, u]
        }({
          defaultProp: n,
          onChange: t
        }), a = void 0 !== e, d = a ? e : i; {
          const n = o.useRef(void 0 !== e);
          o.useEffect((() => {
            const e = n.current;
            if (e !== a) {
              const n = e ? "controlled" : "uncontrolled",
                t = a ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${n} to ${t}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            n.current = a
          }), [a, r])
        }
        const l = o.useCallback((n => {
          if (a) {
            const t = function(e) {
              return "function" == typeof e
            }(n) ? n(e) : n;
            t !== e && s.current?.(t)
          } else u(n)
        }), [a, e, u, s]);
        return [d, l]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    53146: (e, n, t) => {
      t.d(n, {
        C: () => c
      });
      var r = t(62229),
        o = t(95362),
        i = t(63155),
        c = e => {
          const {
            present: n,
            children: t
          } = e, c = function(e) {
            const [n, t] = r.useState(), o = r.useRef(null), c = r.useRef(e), s = r.useRef("none"), a = e ? "mounted" : "unmounted", [d, l] = function(e, n) {
              return r.useReducer(((e, t) => n[e][t] ?? e), e)
            }(a, {
              mounted: {
                UNMOUNT: "unmounted",
                ANIMATION_OUT: "unmountSuspended"
              },
              unmountSuspended: {
                MOUNT: "mounted",
                ANIMATION_END: "unmounted"
              },
              unmounted: {
                MOUNT: "mounted"
              }
            });
            return r.useEffect((() => {
              const e = u(o.current);
              s.current = "mounted" === d ? e : "none"
            }), [d]), (0, i.N)((() => {
              const n = o.current,
                t = c.current;
              if (t !== e) {
                const r = s.current,
                  o = u(n);
                l(e ? "MOUNT" : "none" === o || "none" === n?.display ? "UNMOUNT" : t && r !== o ? "ANIMATION_OUT" : "UNMOUNT"), c.current = e
              }
            }), [e, l]), (0, i.N)((() => {
              if (n) {
                let e;
                const t = n.ownerDocument.defaultView ?? window,
                  r = r => {
                    const i = u(o.current).includes(r.animationName);
                    if (r.target === n && i && (l("ANIMATION_END"), !c.current)) {
                      const r = n.style.animationFillMode;
                      n.style.animationFillMode = "forwards", e = t.setTimeout((() => {
                        "forwards" === n.style.animationFillMode && (n.style.animationFillMode = r)
                      }))
                    }
                  },
                  i = e => {
                    e.target === n && (s.current = u(o.current))
                  };
                return n.addEventListener("animationstart", i), n.addEventListener("animationcancel", r), n.addEventListener("animationend", r), () => {
                  t.clearTimeout(e), n.removeEventListener("animationstart", i), n.removeEventListener("animationcancel", r), n.removeEventListener("animationend", r)
                }
              }
              l("ANIMATION_END")
            }), [n, l]), {
              isPresent: ["mounted", "unmountSuspended"].includes(d),
              ref: r.useCallback((e => {
                o.current = e ? getComputedStyle(e) : null, t(e)
              }), [])
            }
          }(n), s = "function" == typeof t ? t({
            present: c.isPresent
          }) : r.Children.only(t), a = (0, o.s)(c.ref, function(e) {
            let n = Object.getOwnPropertyDescriptor(e.props, "ref")?.get,
              t = n && "isReactWarning" in n && n.isReactWarning;
            return t ? e.ref : (n = Object.getOwnPropertyDescriptor(e, "ref")?.get, t = n && "isReactWarning" in n && n.isReactWarning, t ? e.props.ref : e.props.ref || e.ref)
          }(s));
          return "function" == typeof t || c.isPresent ? r.cloneElement(s, {
            ref: a
          }) : null
        };

      function u(e) {
        return e?.animationName || "none"
      }
      c.displayName = "Presence"
    },
    63155: (e, n, t) => {
      t.d(n, {
        N: () => o
      });
      var r = t(62229),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    69055: (e, n, t) => {
      t.d(n, {
        Qg: () => c,
        bL: () => s,
        s6: () => u
      });
      var r = t(62229),
        o = t(78004),
        i = t(42295),
        c = Object.freeze({
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
        u = r.forwardRef(((e, n) => (0, i.jsx)(o.sG.span, {
          ...e,
          ref: n,
          style: {
            ...c,
            ...e.style
          }
        })));
      u.displayName = "VisuallyHidden";
      var s = u
    },
    76286: (e, n, t) => {
      t.d(n, {
        c: () => o
      });
      var r = t(62229);

      function o(e) {
        const n = r.useRef(e);
        return r.useEffect((() => {
          n.current = e
        })), r.useMemo((() => (...e) => n.current?.(...e)), [])
      }
    },
    78004: (e, n, t) => {
      t.d(n, {
        hO: () => s,
        sG: () => u
      });
      var r = t(62229),
        o = t(44853),
        i = t(39447),
        c = t(42295),
        u = ["a", "button", "div", "form", "h2", "h3", "img", "input", "label", "li", "nav", "ol", "p", "select", "span", "svg", "ul"].reduce(((e, n) => {
          const t = (0, i.TL)(`Primitive.${n}`),
            o = r.forwardRef(((e, r) => {
              const {
                asChild: o,
                ...i
              } = e, u = o ? t : n;
              return "undefined" != typeof window && (window[Symbol.for("radix-ui")] = !0), (0, c.jsx)(u, {
                ...i,
                ref: r
              })
            }));
          return o.displayName = `Primitive.${n}`, {
            ...e,
            [n]: o
          }
        }), {});

      function s(e, n) {
        e && o.flushSync((() => e.dispatchEvent(n)))
      }
    },
    85426: (e, n, t) => {
      t.d(n, {
        A: () => c,
        q: () => i
      });
      var r = t(62229),
        o = t(42295);

      function i(e, n) {
        const t = r.createContext(n),
          i = e => {
            const {
              children: n,
              ...i
            } = e, c = r.useMemo((() => i), Object.values(i));
            return (0, o.jsx)(t.Provider, {
              value: c,
              children: n
            })
          };
        return i.displayName = e + "Provider", [i, function(o) {
          const i = r.useContext(t);
          if (i) return i;
          if (void 0 !== n) return n;
          throw new Error(`\`${o}\` must be used within \`${e}\``)
        }]
      }

      function c(e, n = []) {
        let t = [];
        const i = () => {
          const n = t.map((e => r.createContext(e)));
          return function(t) {
            const o = t?.[e] || n;
            return r.useMemo((() => ({
              [`__scope${e}`]: {
                ...t,
                [e]: o
              }
            })), [t, o])
          }
        };
        return i.scopeName = e, [function(n, i) {
          const c = r.createContext(i),
            u = t.length;
          t = [...t, i];
          const s = n => {
            const {
              scope: t,
              children: i,
              ...s
            } = n, a = t?.[e]?.[u] || c, d = r.useMemo((() => s), Object.values(s));
            return (0, o.jsx)(a.Provider, {
              value: d,
              children: i
            })
          };
          return s.displayName = n + "Provider", [s, function(t, o) {
            const s = o?.[e]?.[u] || c,
              a = r.useContext(s);
            if (a) return a;
            if (void 0 !== i) return i;
            throw new Error(`\`${t}\` must be used within \`${n}\``)
          }]
        }, u(i, ...n)]
      }

      function u(...e) {
        const n = e[0];
        if (1 === e.length) return n;
        const t = () => {
          const t = e.map((e => ({
            useScope: e(),
            scopeName: e.scopeName
          })));
          return function(e) {
            const o = t.reduce(((n, {
              useScope: t,
              scopeName: r
            }) => ({
              ...n,
              ...t(e)[`__scope${r}`]
            })), {});
            return r.useMemo((() => ({
              [`__scope${n.scopeName}`]: o
            })), [o])
          }
        };
        return t.scopeName = n.scopeName, t
      }
    },
    86126: (e, n, t) => {
      var r;
      t.d(n, {
        B: () => s
      });
      var o = t(62229),
        i = t(63155),
        c = (r || (r = t.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        u = 0;

      function s(e) {
        const [n, t] = o.useState(c());
        return (0, i.N)((() => {
          e || t((e => e ?? String(u++)))
        }), [e]), e || (n ? `radix-${n}` : "")
      }
    },
    94040: (e, n, t) => {
      t.d(n, {
        U: () => i
      });
      var r = t(62229),
        o = t(76286);

      function i(e, n = globalThis?.document) {
        const t = (0, o.c)(e);
        r.useEffect((() => {
          const e = e => {
            "Escape" === e.key && t(e)
          };
          return n.addEventListener("keydown", e, {
            capture: !0
          }), () => n.removeEventListener("keydown", e, {
            capture: !0
          })
        }), [t, n])
      }
    },
    94118: (e, n, t) => {
      function r(e, n, {
        checkForDefaultPrevented: t = !0
      } = {}) {
        return function(r) {
          if (e?.(r), !1 === t || !r.defaultPrevented) return n?.(r)
        }
      }
      t.d(n, {
        m: () => r
      })
    },
    94926: (e, n, t) => {
      t.d(n, {
        Eq: () => s
      });
      var r = new WeakMap,
        o = new WeakMap,
        i = {},
        c = 0,
        u = function(e) {
          return e && (e.host || u(e.parentNode))
        },
        s = function(e, n, t) {
          void 0 === t && (t = "data-aria-hidden");
          var s = Array.from(Array.isArray(e) ? e : [e]),
            a = n || function(e) {
              return "undefined" == typeof document ? null : (Array.isArray(e) ? e[0] : e).ownerDocument.body
            }(e);
          return a ? (s.push.apply(s, Array.from(a.querySelectorAll("[aria-live]"))), function(e, n, t, s) {
            var a = function(e, n) {
              return n.map((function(n) {
                if (e.contains(n)) return n;
                var t = u(n);
                return t && e.contains(t) ? t : (console.error("aria-hidden", n, "in not contained inside", e, ". Doing nothing"), null)
              })).filter((function(e) {
                return Boolean(e)
              }))
            }(n, Array.isArray(e) ? e : [e]);
            i[t] || (i[t] = new WeakMap);
            var d = i[t],
              l = [],
              f = new Set,
              p = new Set(a),
              m = function(e) {
                e && !f.has(e) && (f.add(e), m(e.parentNode))
              };
            a.forEach(m);
            var g = function(e) {
              e && !p.has(e) && Array.prototype.forEach.call(e.children, (function(e) {
                if (f.has(e)) g(e);
                else try {
                  var n = e.getAttribute(s),
                    i = null !== n && "false" !== n,
                    c = (r.get(e) || 0) + 1,
                    u = (d.get(e) || 0) + 1;
                  r.set(e, c), d.set(e, u), l.push(e), 1 === c && i && o.set(e, !0), 1 === u && e.setAttribute(t, "true"), i || e.setAttribute(s, "true")
                } catch (n) {
                  console.error("aria-hidden: cannot operate on ", e, n)
                }
              }))
            };
            return g(n), f.clear(), c++,
              function() {
                l.forEach((function(e) {
                  var n = r.get(e) - 1,
                    i = d.get(e) - 1;
                  r.set(e, n), d.set(e, i), n || (o.has(e) || e.removeAttribute(s), o.delete(e)), i || e.removeAttribute(t)
                })), --c || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(s, a, t, "aria-hidden")) : function() {
            return null
          }
        }
    }
  }
]);