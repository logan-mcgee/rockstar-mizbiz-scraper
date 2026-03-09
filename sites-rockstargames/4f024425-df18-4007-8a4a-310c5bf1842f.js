try {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new n.Error).stack;
  t && (n._sentryDebugIds = n._sentryDebugIds || {}, n._sentryDebugIds[t] = "4f024425-df18-4007-8a4a-310c5bf1842f", n._sentryDebugIdIdentifier = "sentry-dbid-4f024425-df18-4007-8a4a-310c5bf1842f")
} catch (n) {} {
  let n = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  n._sentryModuleMetadata = n._sentryModuleMetadata || {}, n._sentryModuleMetadata[(new n.Error).stack] = Object.assign({}, n._sentryModuleMetadata[(new n.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-rockstargames",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_rockstargames = self.webpackChunk_rockstargames_sites_rockstargames || []).push([
  [6015], {
    16675: (n, t, e) => {
      e.d(t, {
        A: () => R
      });
      var r = e(62229);

      function o(n) {
        return function(n) {
          return "[object Object]" === Object.prototype.toString.call(n)
        }(n) || Array.isArray(n)
      }

      function i(n, t) {
        const e = Object.keys(n),
          r = Object.keys(t);
        return e.length === r.length && (JSON.stringify(Object.keys(n.breakpoints || {})) === JSON.stringify(Object.keys(t.breakpoints || {})) && e.every(e => {
          const r = n[e],
            c = t[e];
          return "function" == typeof r ? `${r}` == `${c}` : o(r) && o(c) ? i(r, c) : r === c
        }))
      }

      function c(n) {
        return n.concat().sort((n, t) => n.name > t.name ? 1 : -1).map(n => n.options)
      }

      function u(n) {
        return "number" == typeof n
      }

      function s(n) {
        return "string" == typeof n
      }

      function a(n) {
        return "boolean" == typeof n
      }

      function d(n) {
        return "[object Object]" === Object.prototype.toString.call(n)
      }

      function f(n) {
        return Math.abs(n)
      }

      function l(n) {
        return Math.sign(n)
      }

      function p(n, t) {
        return f(n - t)
      }

      function g(n) {
        return b(n).map(Number)
      }

      function m(n) {
        return n[h(n)]
      }

      function h(n) {
        return Math.max(0, n.length - 1)
      }

      function y(n, t) {
        return t === h(n)
      }

      function v(n, t = 0) {
        return Array.from(Array(n), (n, e) => t + e)
      }

      function b(n) {
        return Object.keys(n)
      }

      function w(n, t) {
        return [n, t].reduce((n, t) => (b(t).forEach(e => {
          const r = n[e],
            o = t[e],
            i = d(r) && d(o);
          n[e] = i ? w(r, o) : o
        }), n), {})
      }

      function x(n, t) {
        return void 0 !== t.MouseEvent && n instanceof t.MouseEvent
      }

      function S() {
        let n = [];
        const t = {
          add: function(e, r, o, i = {
            passive: !0
          }) {
            let c;
            if ("addEventListener" in e) e.addEventListener(r, o, i), c = () => e.removeEventListener(r, o, i);
            else {
              const n = e;
              n.addListener(o), c = () => n.removeListener(o)
            }
            return n.push(c), t
          },
          clear: function() {
            n = n.filter(n => n())
          }
        };
        return t
      }

      function E(n = 0, t = 0) {
        const e = f(n - t);

        function r(t) {
          return t < n
        }

        function o(n) {
          return n > t
        }

        function i(n) {
          return r(n) || o(n)
        }
        return {
          length: e,
          max: t,
          min: n,
          constrain: function(e) {
            return i(e) ? r(e) ? n : t : e
          },
          reachedAny: i,
          reachedMax: o,
          reachedMin: r,
          removeOffset: function(n) {
            return e ? n - e * Math.ceil((n - t) / e) : n
          }
        }
      }

      function k(n, t, e) {
        const {
          constrain: r
        } = E(0, n), o = n + 1;
        let i = c(t);

        function c(n) {
          return e ? f((o + n) % o) : r(n)
        }

        function u() {
          return i
        }

        function s() {
          return k(n, u(), e)
        }
        const a = {
          get: u,
          set: function(n) {
            return i = c(n), a
          },
          add: function(n) {
            return s().set(u() + n)
          },
          clone: s
        };
        return a
      }

      function A(n, t, e, r, o, i, c, u, s, d, g, m, h, y, v, b, w, k, A) {
        const {
          cross: M,
          direction: D
        } = n, L = ["INPUT", "SELECT", "TEXTAREA"], I = {
          passive: !1
        }, O = S(), T = S(), N = E(50, 225).constrain(y.measure(20)), P = {
          mouse: 300,
          touch: 400
        }, C = {
          mouse: 500,
          touch: 600
        }, F = v ? 43 : 25;
        let _ = !1,
          j = 0,
          R = 0,
          $ = !1,
          z = !1,
          H = !1,
          W = !1;

        function B(n) {
          if (!x(n, r) && n.touches.length >= 2) return V(n);
          const t = i.readPoint(n),
            e = i.readPoint(n, M),
            c = p(t, j),
            s = p(e, R);
          if (!z && !W) {
            if (!n.cancelable) return V(n);
            if (z = c > s, !z) return V(n)
          }
          const a = i.pointerMove(n);
          c > b && (H = !0), d.useFriction(.3).useDuration(.75), u.start(), o.add(D(a)), n.preventDefault()
        }

        function V(n) {
          const t = g.byDistance(0, !1).index !== m.get(),
            e = i.pointerUp(n) * (v ? C : P)[W ? "mouse" : "touch"],
            r = function(n, t) {
              const e = m.add(-1 * l(n)),
                r = g.byDistance(n, !v).distance;
              return v || f(n) < N ? r : w && t ? .5 * r : g.byIndex(e.get(), 0).distance
            }(D(e), t),
            o = function(n, t) {
              if (0 === n || 0 === t) return 0;
              if (f(n) <= f(t)) return 0;
              const e = p(f(n), f(t));
              return f(e / n)
            }(e, r),
            c = F - 10 * o,
            u = k + o / 50;
          z = !1, $ = !1, T.clear(), d.useDuration(c).useFriction(u), s.distance(r, !v), W = !1, h.emit("pointerUp")
        }

        function q(n) {
          H && (n.stopPropagation(), n.preventDefault(), H = !1)
        }
        return {
          init: function(n) {
            if (!A) return;

            function u(u) {
              (a(A) || A(n, u)) && function(n) {
                const u = x(n, r);
                W = u, H = v && u && !n.buttons && _, _ = p(o.get(), c.get()) >= 2, u && 0 !== n.button || function(n) {
                  const t = n.nodeName || "";
                  return L.includes(t)
                }(n.target) || ($ = !0, i.pointerDown(n), d.useFriction(0).useDuration(0), o.set(c), function() {
                  const n = W ? e : t;
                  T.add(n, "touchmove", B, I).add(n, "touchend", V).add(n, "mousemove", B, I).add(n, "mouseup", V)
                }(), j = i.readPoint(n), R = i.readPoint(n, M), h.emit("pointerDown"))
              }(u)
            }
            const s = t;
            O.add(s, "dragstart", n => n.preventDefault(), I).add(s, "touchmove", () => {}, I).add(s, "touchend", () => {}).add(s, "touchstart", u).add(s, "mousedown", u).add(s, "touchcancel", V).add(s, "contextmenu", V).add(s, "click", q, !0)
          },
          destroy: function() {
            O.clear(), T.clear()
          },
          pointerDown: function() {
            return $
          }
        }
      }

      function M(n, t) {
        let e, r;

        function o(n) {
          return n.timeStamp
        }

        function i(e, r) {
          const o = "client" + ("x" === (r || n.scroll) ? "X" : "Y");
          return (x(e, t) ? e : e.touches[0])[o]
        }
        return {
          pointerDown: function(n) {
            return e = n, r = n, i(n)
          },
          pointerMove: function(n) {
            const t = i(n) - i(r),
              c = o(n) - o(e) > 170;
            return r = n, c && (e = n), t
          },
          pointerUp: function(n) {
            if (!e || !r) return 0;
            const t = i(r) - i(e),
              c = o(n) - o(e),
              u = o(n) - o(r) > 170,
              s = t / c;
            return c && !u && f(s) > .1 ? s : 0
          },
          readPoint: i
        }
      }

      function D(n, t, e, r, o, i, c) {
        const u = [n].concat(r);
        let s, d, l = [],
          p = !1;

        function g(n) {
          return o.measureSize(c.measure(n))
        }
        return {
          init: function(o) {
            i && (d = g(n), l = r.map(g), s = new ResizeObserver(e => {
              (a(i) || i(o, e)) && function(e) {
                for (const i of e) {
                  if (p) return;
                  const e = i.target === n,
                    c = r.indexOf(i.target),
                    u = e ? d : l[c];
                  if (f(g(e ? n : r[c]) - u) >= .5) {
                    o.reInit(), t.emit("resize");
                    break
                  }
                }
              }(e)
            }), e.requestAnimationFrame(() => {
              u.forEach(n => s.observe(n))
            }))
          },
          destroy: function() {
            p = !0, s && s.disconnect()
          }
        }
      }

      function L(n, t, e, r, o) {
        const i = o.measure(10),
          c = o.measure(50),
          u = E(.1, .99);
        let s = !1;

        function a() {
          return !s && !!n.reachedAny(e.get()) && !!n.reachedAny(t.get())
        }
        return {
          shouldConstrain: a,
          constrain: function(o) {
            if (!a()) return;
            const s = n.reachedMin(t.get()) ? "min" : "max",
              d = f(n[s] - t.get()),
              l = e.get() - t.get(),
              p = u.constrain(d / c);
            e.subtract(l * p), !o && f(l) < i && (e.set(n.constrain(e.get())), r.useDuration(25).useBaseFriction())
          },
          toggleActive: function(n) {
            s = !n
          }
        }
      }

      function I(n, t, e, r) {
        const o = t.min + .1,
          i = t.max + .1,
          {
            reachedMin: c,
            reachedMax: u
          } = E(o, i);
        return {
          loop: function(t) {
            if (! function(n) {
                return 1 === n ? u(e.get()) : -1 === n && c(e.get())
              }(t)) return;
            const o = n * (-1 * t);
            r.forEach(n => n.add(o))
          }
        }
      }

      function O(n) {
        let t = n;

        function e(n) {
          return u(n) ? n : n.get()
        }
        return {
          get: function() {
            return t
          },
          set: function(n) {
            t = e(n)
          },
          add: function(n) {
            t += e(n)
          },
          subtract: function(n) {
            t -= e(n)
          }
        }
      }

      function T(n, t) {
        const e = "x" === n.scroll ? function(n) {
            return `translate3d(${n}px,0px,0px)`
          } : function(n) {
            return `translate3d(0px,${n}px,0px)`
          },
          r = t.style;
        let o = null,
          i = !1;
        return {
          clear: function() {
            i || (r.transform = "", t.getAttribute("style") || t.removeAttribute("style"))
          },
          to: function(t) {
            if (i) return;
            const c = (u = n.direction(t), Math.round(100 * u) / 100);
            var u;
            c !== o && (r.transform = e(c), o = c)
          },
          toggleActive: function(n) {
            i = !n
          }
        }
      }

      function N(n, t, e, r, o, i, c, u, s) {
        const a = g(o),
          d = g(o).reverse(),
          f = function() {
            const n = c[0];
            return m(p(d, n), e, !1)
          }().concat(function() {
            const n = t - c[0] - 1;
            return m(p(a, n), -e, !0)
          }());

        function l(n, t) {
          return n.reduce((n, t) => n - o[t], t)
        }

        function p(n, t) {
          return n.reduce((n, e) => l(n, t) > 0 ? n.concat([e]) : n, [])
        }

        function m(o, c, a) {
          const d = function(n) {
            return i.map((e, o) => ({
              start: e - r[o] + .5 + n,
              end: e + t - .5 + n
            }))
          }(c);
          return o.map(t => {
            const r = a ? 0 : -e,
              o = a ? e : 0,
              i = a ? "end" : "start",
              c = d[t][i];
            return {
              index: t,
              loopPoint: c,
              slideLocation: O(-1),
              translate: T(n, s[t]),
              target: () => u.get() > c ? r : o
            }
          })
        }
        return {
          canLoop: function() {
            return f.every(({
              index: n
            }) => l(a.filter(t => t !== n), t) <= .1)
          },
          clear: function() {
            f.forEach(n => n.translate.clear())
          },
          loop: function() {
            f.forEach(n => {
              const {
                target: t,
                translate: e,
                slideLocation: r
              } = n, o = t();
              o !== r.get() && (e.to(o), r.set(o))
            })
          },
          loopPoints: f
        }
      }

      function P(n, t, e) {
        let r, o = !1;
        return {
          init: function(i) {
            e && (r = new MutationObserver(n => {
              o || (a(e) || e(i, n)) && function(n) {
                for (const e of n)
                  if ("childList" === e.type) {
                    i.reInit(), t.emit("slidesChanged");
                    break
                  }
              }(n)
            }), r.observe(n, {
              childList: !0
            }))
          },
          destroy: function() {
            r && r.disconnect(), o = !0
          }
        }
      }

      function C(n, t, e, r, o, i, c) {
        const {
          align: d,
          axis: w,
          direction: x,
          startIndex: C,
          loop: F,
          duration: _,
          dragFree: j,
          dragThreshold: R,
          inViewThreshold: $,
          slidesToScroll: z,
          skipSnaps: H,
          containScroll: W,
          watchResize: B,
          watchSlides: V,
          watchDrag: q,
          watchFocus: G
        } = i, U = {
          measure: function(n) {
            const {
              offsetTop: t,
              offsetLeft: e,
              offsetWidth: r,
              offsetHeight: o
            } = n;
            return {
              top: t,
              right: e + r,
              bottom: t + o,
              left: e,
              width: r,
              height: o
            }
          }
        }, X = U.measure(t), Y = e.map(U.measure), J = function(n, t) {
          const e = "rtl" === t,
            r = "y" === n,
            o = !r && e ? -1 : 1;
          return {
            scroll: r ? "y" : "x",
            cross: r ? "x" : "y",
            startEdge: r ? "top" : e ? "right" : "left",
            endEdge: r ? "bottom" : e ? "left" : "right",
            measureSize: function(n) {
              const {
                height: t,
                width: e
              } = n;
              return r ? t : e
            },
            direction: function(n) {
              return n * o
            }
          }
        }(w, x), Q = J.measureSize(X), K = function(n) {
          return {
            measure: function(t) {
              return n * (t / 100)
            }
          }
        }(Q), Z = function(n, t) {
          const e = {
            start: function() {
              return 0
            },
            center: function(n) {
              return r(n) / 2
            },
            end: r
          };

          function r(n) {
            return t - n
          }
          return {
            measure: function(r, o) {
              return s(n) ? e[n](r) : n(t, r, o)
            }
          }
        }(d, Q), nn = !F && !!W, tn = F || !!W, {
          slideSizes: en,
          slideSizesWithGaps: rn,
          startGap: on,
          endGap: cn
        } = function(n, t, e, r, o, i) {
          const {
            measureSize: c,
            startEdge: u,
            endEdge: s
          } = n, a = e[0] && o, d = function() {
            if (!a) return 0;
            const n = e[0];
            return f(t[u] - n[u])
          }(), l = function() {
            if (!a) return 0;
            const n = i.getComputedStyle(m(r));
            return parseFloat(n.getPropertyValue(`margin-${s}`))
          }(), p = e.map(c), g = e.map((n, t, e) => {
            const r = !t,
              o = y(e, t);
            return r ? p[t] + d : o ? p[t] + l : e[t + 1][u] - n[u]
          }).map(f);
          return {
            slideSizes: p,
            slideSizesWithGaps: g,
            startGap: d,
            endGap: l
          }
        }(J, X, Y, e, tn, o), un = function(n, t, e, r, o, i, c, s, a) {
          const {
            startEdge: d,
            endEdge: l,
            direction: p
          } = n, y = u(e);
          return {
            groupSlides: function(n) {
              return y ? function(n, t) {
                return g(n).filter(n => n % t === 0).map(e => n.slice(e, e + t))
              }(n, e) : function(n) {
                return n.length ? g(n).reduce((e, u, g) => {
                  const y = m(e) || 0,
                    v = 0 === y,
                    b = u === h(n),
                    w = o[d] - i[y][d],
                    x = o[d] - i[u][l],
                    S = !r && v ? p(c) : 0,
                    E = f(x - (!r && b ? p(s) : 0) - (w + S));
                  return g && E > t + a && e.push(u), b && e.push(n.length), e
                }, []).map((t, e, r) => {
                  const o = Math.max(r[e - 1] || 0);
                  return n.slice(o, t)
                }) : []
              }(n)
            }
          }
        }(J, Q, z, F, X, Y, on, cn, 2), {
          snaps: sn,
          snapsAligned: an
        } = function(n, t, e, r, o) {
          const {
            startEdge: i,
            endEdge: c
          } = n, {
            groupSlides: u
          } = o, s = u(r).map(n => m(n)[c] - n[0][i]).map(f).map(t.measure), a = r.map(n => e[i] - n[i]).map(n => -f(n)), d = u(a).map(n => n[0]).map((n, t) => n + s[t]);
          return {
            snaps: a,
            snapsAligned: d
          }
        }(J, Z, X, Y, un), dn = -m(sn) + m(rn), {
          snapsContained: fn,
          scrollContainLimit: ln
        } = function(n, t, e, r) {
          const o = E(-t + n, 0),
            i = e.map((n, t) => {
              const {
                min: r,
                max: i
              } = o, c = o.constrain(n), s = !t, a = y(e, t);
              return s ? i : a || u(r, c) ? r : u(i, c) ? i : c
            }).map(n => parseFloat(n.toFixed(3))),
            c = function() {
              const n = i[0],
                t = m(i);
              return E(i.lastIndexOf(n), i.indexOf(t) + 1)
            }();

          function u(n, t) {
            return p(n, t) <= 1
          }
          return {
            snapsContained: function() {
              if (t <= n + 2) return [o.max];
              if ("keepSnaps" === r) return i;
              const {
                min: e,
                max: u
              } = c;
              return i.slice(e, u)
            }(),
            scrollContainLimit: c
          }
        }(Q, dn, an, W), pn = nn ? fn : an, {
          limit: gn
        } = function(n, t, e) {
          const r = t[0];
          return {
            limit: E(e ? r - n : m(t), r)
          }
        }(dn, pn, F), mn = k(h(pn), C, F), hn = mn.clone(), yn = g(e), vn = function(n, t, e, r) {
          const o = S(),
            i = 1e3 / 60;
          let c = null,
            u = 0,
            s = 0;

          function a(n) {
            if (!s) return;
            c || (c = n, e(), e());
            const o = n - c;
            for (c = n, u += o; u >= i;) e(), u -= i;
            r(u / i), s && (s = t.requestAnimationFrame(a))
          }

          function d() {
            t.cancelAnimationFrame(s), c = null, u = 0, s = 0
          }
          return {
            init: function() {
              o.add(n, "visibilitychange", () => {
                n.hidden && (c = null, u = 0)
              })
            },
            destroy: function() {
              d(), o.clear()
            },
            start: function() {
              s || (s = t.requestAnimationFrame(a))
            },
            stop: d,
            update: e,
            render: r
          }
        }(r, o, () => (({
          dragHandler: n,
          scrollBody: t,
          scrollBounds: e,
          options: {
            loop: r
          }
        }) => {
          r || e.constrain(n.pointerDown()), t.seek()
        })(Nn), n => (({
          scrollBody: n,
          translate: t,
          location: e,
          offsetLocation: r,
          previousLocation: o,
          scrollLooper: i,
          slideLooper: c,
          dragHandler: u,
          animation: s,
          eventHandler: a,
          scrollBounds: d,
          options: {
            loop: f
          }
        }, l) => {
          const p = n.settled(),
            g = !d.shouldConstrain(),
            m = f ? p : p && g,
            h = m && !u.pointerDown();
          h && s.stop();
          const y = e.get() * l + o.get() * (1 - l);
          r.set(y), f && (i.loop(n.direction()), c.loop()), t.to(r.get()), h && a.emit("settle"), m || a.emit("scroll")
        })(Nn, n)), bn = pn[mn.get()], wn = O(bn), xn = O(bn), Sn = O(bn), En = O(bn), kn = function(n, t, e, r, o) {
          let i = 0,
            c = 0,
            u = o,
            s = .68,
            a = n.get(),
            d = 0;

          function p(n) {
            return u = n, m
          }

          function g(n) {
            return s = n, m
          }
          const m = {
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
              const t = r.get() - n.get();
              let o = 0;
              return u ? (e.set(n), i += t / u, i *= s, a += i, n.add(i), o = a - d) : (i = 0, e.set(r), n.set(r), o = t), c = l(o), d = a, m
            },
            settled: function() {
              return f(r.get() - t.get()) < .001
            },
            useBaseFriction: function() {
              return g(.68)
            },
            useBaseDuration: function() {
              return p(o)
            },
            useFriction: g,
            useDuration: p
          };
          return m
        }(wn, Sn, xn, En, _), An = function(n, t, e, r, o) {
          const {
            reachedAny: i,
            removeOffset: c,
            constrain: u
          } = r;

          function s(n) {
            return n.concat().sort((n, t) => f(n) - f(t))[0]
          }

          function a(t, r) {
            const o = [t, t + e, t - e];
            if (!n) return t;
            if (!r) return s(o);
            const i = o.filter(n => l(n) === r);
            return i.length ? s(i) : m(o) - e
          }
          return {
            byDistance: function(e, r) {
              const s = o.get() + e,
                {
                  index: d,
                  distance: l
                } = function(e) {
                  const r = n ? c(e) : u(e),
                    o = t.map((n, t) => ({
                      diff: a(n - r, 0),
                      index: t
                    })).sort((n, t) => f(n.diff) - f(t.diff)),
                    {
                      index: i
                    } = o[0];
                  return {
                    index: i,
                    distance: r
                  }
                }(s),
                p = !n && i(s);
              return !r || p ? {
                index: d,
                distance: e
              } : {
                index: d,
                distance: e + a(t[d] - l, 0)
              }
            },
            byIndex: function(n, e) {
              return {
                index: n,
                distance: a(t[n] - o.get(), e)
              }
            },
            shortcut: a
          }
        }(F, pn, dn, gn, En), Mn = function(n, t, e, r, o, i, c) {
          function u(o) {
            const u = o.distance,
              s = o.index !== t.get();
            i.add(u), u && (r.duration() ? n.start() : (n.update(), n.render(1), n.update())), s && (e.set(t.get()), t.set(o.index), c.emit("select"))
          }
          return {
            distance: function(n, t) {
              u(o.byDistance(n, t))
            },
            index: function(n, e) {
              const r = t.clone().set(n);
              u(o.byIndex(r.get(), e))
            }
          }
        }(vn, mn, hn, kn, An, En, c), Dn = function(n) {
          const {
            max: t,
            length: e
          } = n;
          return {
            get: function(n) {
              return e ? (n - t) / -e : 0
            }
          }
        }(gn), Ln = S(), In = function(n, t, e, r) {
          const o = {};
          let i, c = null,
            u = null,
            s = !1;
          return {
            init: function() {
              i = new IntersectionObserver(n => {
                s || (n.forEach(n => {
                  const e = t.indexOf(n.target);
                  o[e] = n
                }), c = null, u = null, e.emit("slidesInView"))
              }, {
                root: n.parentElement,
                threshold: r
              }), t.forEach(n => i.observe(n))
            },
            destroy: function() {
              i && i.disconnect(), s = !0
            },
            get: function(n = !0) {
              if (n && c) return c;
              if (!n && u) return u;
              const t = function(n) {
                return b(o).reduce((t, e) => {
                  const r = parseInt(e),
                    {
                      isIntersecting: i
                    } = o[r];
                  return (n && i || !n && !i) && t.push(r), t
                }, [])
              }(n);
              return n && (c = t), n || (u = t), t
            }
          }
        }(t, e, c, $), {
          slideRegistry: On
        } = function(n, t, e, r, o, i) {
          const {
            groupSlides: c
          } = o, {
            min: u,
            max: s
          } = r;
          return {
            slideRegistry: function() {
              const r = c(i),
                o = !n || "keepSnaps" === t;
              return 1 === e.length ? [i] : o ? r : r.slice(u, s).map((n, t, e) => {
                const r = !t,
                  o = y(e, t);
                return r ? v(m(e[0]) + 1) : o ? v(h(i) - m(e)[0] + 1, m(e)[0]) : n
              })
            }()
          }
        }(nn, W, pn, ln, un, yn), Tn = function(n, t, e, r, o, i, c, s) {
          const d = {
            passive: !0,
            capture: !0
          };
          let f = 0;

          function l(n) {
            "Tab" === n.code && (f = (new Date).getTime())
          }
          return {
            init: function(p) {
              s && (i.add(document, "keydown", l, !1), t.forEach((t, l) => {
                i.add(t, "focus", t => {
                  (a(s) || s(p, t)) && function(t) {
                    if ((new Date).getTime() - f > 10) return;
                    c.emit("slideFocusStart"), n.scrollLeft = 0;
                    const i = e.findIndex(n => n.includes(t));
                    u(i) && (o.useDuration(0), r.index(i, 0), c.emit("slideFocus"))
                  }(l)
                }, d)
              }))
            }
          }
        }(n, e, On, Mn, kn, Ln, c, G), Nn = {
          ownerDocument: r,
          ownerWindow: o,
          eventHandler: c,
          containerRect: X,
          slideRects: Y,
          animation: vn,
          axis: J,
          dragHandler: A(J, n, r, o, En, M(J, o), wn, vn, Mn, kn, An, mn, c, K, j, R, H, .68, q),
          eventStore: Ln,
          percentOfView: K,
          index: mn,
          indexPrevious: hn,
          limit: gn,
          location: wn,
          offsetLocation: Sn,
          previousLocation: xn,
          options: i,
          resizeHandler: D(t, c, o, e, J, B, U),
          scrollBody: kn,
          scrollBounds: L(gn, Sn, En, kn, K),
          scrollLooper: I(dn, gn, Sn, [wn, Sn, xn, En]),
          scrollProgress: Dn,
          scrollSnapList: pn.map(Dn.get),
          scrollSnaps: pn,
          scrollTarget: An,
          scrollTo: Mn,
          slideLooper: N(J, Q, dn, en, rn, sn, pn, Sn, e),
          slideFocus: Tn,
          slidesHandler: P(t, c, V),
          slidesInView: In,
          slideIndexes: yn,
          slideRegistry: On,
          slidesToScroll: un,
          target: En,
          translate: T(J, t)
        };
        return Nn
      }
      const F = {
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

      function _(n) {
        function t(n, t) {
          return w(n, t || {})
        }
        return {
          mergeOptions: t,
          optionsAtMedia: function(e) {
            const r = e.breakpoints || {},
              o = b(r).filter(t => n.matchMedia(t).matches).map(n => r[n]).reduce((n, e) => t(n, e), {});
            return t(e, o)
          },
          optionsMediaQueries: function(t) {
            return t.map(n => b(n.breakpoints || {})).reduce((n, t) => n.concat(t), []).map(n.matchMedia)
          }
        }
      }

      function j(n, t, e) {
        const r = n.ownerDocument,
          o = r.defaultView,
          i = _(o),
          c = function(n) {
            let t = [];
            return {
              init: function(e, r) {
                return t = r.filter(({
                  options: t
                }) => !1 !== n.optionsAtMedia(t).active), t.forEach(t => t.init(e, n)), r.reduce((n, t) => Object.assign(n, {
                  [t.name]: t
                }), {})
              },
              destroy: function() {
                t = t.filter(n => n.destroy())
              }
            }
          }(i),
          u = S(),
          a = function() {
            let n, t = {};

            function e(n) {
              return t[n] || []
            }
            const r = {
              init: function(t) {
                n = t
              },
              emit: function(t) {
                return e(t).forEach(e => e(n, t)), r
              },
              off: function(n, o) {
                return t[n] = e(n).filter(n => n !== o), r
              },
              on: function(n, o) {
                return t[n] = e(n).concat([o]), r
              },
              clear: function() {
                t = {}
              }
            };
            return r
          }(),
          {
            mergeOptions: d,
            optionsAtMedia: f,
            optionsMediaQueries: l
          } = i,
          {
            on: p,
            off: g,
            emit: m
          } = a,
          h = L;
        let y, v, b, w, x = !1,
          E = d(F, j.globalOptions),
          k = d(E),
          A = [];

        function M(t) {
          const e = C(n, b, w, r, o, t, a);
          return t.loop && !e.slideLooper.canLoop() ? M(Object.assign({}, t, {
            loop: !1
          })) : e
        }

        function D(t, e) {
          x || (E = d(E, t), k = f(E), A = e || A, function() {
            const {
              container: t,
              slides: e
            } = k, r = s(t) ? n.querySelector(t) : t;
            b = r || n.children[0];
            const o = s(e) ? b.querySelectorAll(e) : e;
            w = [].slice.call(o || b.children)
          }(), y = M(k), l([E, ...A.map(({
            options: n
          }) => n)]).forEach(n => u.add(n, "change", L)), k.active && (y.translate.to(y.location.get()), y.animation.init(), y.slidesInView.init(), y.slideFocus.init(N), y.eventHandler.init(N), y.resizeHandler.init(N), y.slidesHandler.init(N), y.options.loop && y.slideLooper.loop(), b.offsetParent && w.length && y.dragHandler.init(N), v = c.init(N, A)))
        }

        function L(n, t) {
          const e = T();
          I(), D(d({
            startIndex: e
          }, n), t), a.emit("reInit")
        }

        function I() {
          y.dragHandler.destroy(), y.eventStore.clear(), y.translate.clear(), y.slideLooper.clear(), y.resizeHandler.destroy(), y.slidesHandler.destroy(), y.slidesInView.destroy(), y.animation.destroy(), c.destroy(), u.clear()
        }

        function O(n, t, e) {
          k.active && !x && (y.scrollBody.useBaseFriction().useDuration(!0 === t ? 0 : k.duration), y.scrollTo.index(n, e || 0))
        }

        function T() {
          return y.index.get()
        }
        const N = {
          canScrollNext: function() {
            return y.index.add(1).get() !== T()
          },
          canScrollPrev: function() {
            return y.index.add(-1).get() !== T()
          },
          containerNode: function() {
            return b
          },
          internalEngine: function() {
            return y
          },
          destroy: function() {
            x || (x = !0, u.clear(), I(), a.emit("destroy"), a.clear())
          },
          off: g,
          on: p,
          emit: m,
          plugins: function() {
            return v
          },
          previousScrollSnap: function() {
            return y.indexPrevious.get()
          },
          reInit: h,
          rootNode: function() {
            return n
          },
          scrollNext: function(n) {
            O(y.index.add(1).get(), n, -1)
          },
          scrollPrev: function(n) {
            O(y.index.add(-1).get(), n, 1)
          },
          scrollProgress: function() {
            return y.scrollProgress.get(y.offsetLocation.get())
          },
          scrollSnapList: function() {
            return y.scrollSnapList
          },
          scrollTo: O,
          selectedScrollSnap: T,
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
        return D(t, e), setTimeout(() => a.emit("init"), 0), N
      }

      function R(n = {}, t = []) {
        const e = (0, r.useRef)(n),
          o = (0, r.useRef)(t),
          [u, s] = (0, r.useState)(),
          [a, d] = (0, r.useState)(),
          f = (0, r.useCallback)(() => {
            u && u.reInit(e.current, o.current)
          }, [u]);
        return (0, r.useEffect)(() => {
          i(e.current, n) || (e.current = n, f())
        }, [n, f]), (0, r.useEffect)(() => {
          (function(n, t) {
            if (n.length !== t.length) return !1;
            const e = c(n),
              r = c(t);
            return e.every((n, t) => i(n, r[t]))
          })(o.current, t) || (o.current = t, f())
        }, [t, f]), (0, r.useEffect)(() => {
          if ("undefined" != typeof window && window.document && window.document.createElement && a) {
            j.globalOptions = R.globalOptions;
            const n = j(a, e.current, o.current);
            return s(n), () => n.destroy()
          }
          s(void 0)
        }, [a, s]), [d, u]
      }
      j.globalOptions = void 0, R.globalOptions = void 0
    },
    25778: (n, t, e) => {
      e.d(t, {
        m: () => i
      });
      var r = e(4218);
      const o = n => "dark" === n ? r.xW.dark : r.xW.light,
        i = (n, t) => [r.xW.tokens, r.xW.typography, o(n)].join(" ")
    },
    53054: (n, t, e) => {
      var r;
      e.d(t, {
        i: () => u
      });
      var o = e(62229),
        i = e(63155),
        c = (r || (r = e.t(o, 2)))[" useInsertionEffect ".trim().toString()] || i.N;

      function u({
        prop: n,
        defaultProp: t,
        onChange: e = () => {},
        caller: r
      }) {
        const [i, u, s] = function({
          defaultProp: n,
          onChange: t
        }) {
          const [e, r] = o.useState(n), i = o.useRef(e), u = o.useRef(t);
          return c(() => {
            u.current = t
          }, [t]), o.useEffect(() => {
            i.current !== e && (u.current?.(e), i.current = e)
          }, [e, i]), [e, r, u]
        }({
          defaultProp: t,
          onChange: e
        }), a = void 0 !== n, d = a ? n : i; {
          const t = o.useRef(void 0 !== n);
          o.useEffect(() => {
            const n = t.current;
            if (n !== a) {
              const t = n ? "controlled" : "uncontrolled",
                e = a ? "controlled" : "uncontrolled";
              console.warn(`${r} is changing from ${t} to ${e}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`)
            }
            t.current = a
          }, [a, r])
        }
        const f = o.useCallback(t => {
          if (a) {
            const e = function(n) {
              return "function" == typeof n
            }(t) ? t(n) : t;
            e !== n && s.current?.(e)
          } else u(t)
        }, [a, n, u, s]);
        return [d, f]
      }
      Symbol("RADIX:SYNC_STATE")
    },
    63155: (n, t, e) => {
      e.d(t, {
        N: () => o
      });
      var r = e(62229),
        o = globalThis?.document ? r.useLayoutEffect : () => {}
    },
    76286: (n, t, e) => {
      e.d(t, {
        c: () => o
      });
      var r = e(62229);

      function o(n) {
        const t = r.useRef(n);
        return r.useEffect(() => {
          t.current = n
        }), r.useMemo(() => (...n) => t.current?.(...n), [])
      }
    },
    85426: (n, t, e) => {
      e.d(t, {
        A: () => c,
        q: () => i
      });
      var r = e(62229),
        o = e(42295);

      function i(n, t) {
        const e = r.createContext(t),
          i = n => {
            const {
              children: t,
              ...i
            } = n, c = r.useMemo(() => i, Object.values(i));
            return (0, o.jsx)(e.Provider, {
              value: c,
              children: t
            })
          };
        return i.displayName = n + "Provider", [i, function(o) {
          const i = r.useContext(e);
          if (i) return i;
          if (void 0 !== t) return t;
          throw new Error(`\`${o}\` must be used within \`${n}\``)
        }]
      }

      function c(n, t = []) {
        let e = [];
        const i = () => {
          const t = e.map(n => r.createContext(n));
          return function(e) {
            const o = e?.[n] || t;
            return r.useMemo(() => ({
              [`__scope${n}`]: {
                ...e,
                [n]: o
              }
            }), [e, o])
          }
        };
        return i.scopeName = n, [function(t, i) {
          const c = r.createContext(i),
            u = e.length;
          e = [...e, i];
          const s = t => {
            const {
              scope: e,
              children: i,
              ...s
            } = t, a = e?.[n]?.[u] || c, d = r.useMemo(() => s, Object.values(s));
            return (0, o.jsx)(a.Provider, {
              value: d,
              children: i
            })
          };
          return s.displayName = t + "Provider", [s, function(e, o) {
            const s = o?.[n]?.[u] || c,
              a = r.useContext(s);
            if (a) return a;
            if (void 0 !== i) return i;
            throw new Error(`\`${e}\` must be used within \`${t}\``)
          }]
        }, u(i, ...t)]
      }

      function u(...n) {
        const t = n[0];
        if (1 === n.length) return t;
        const e = () => {
          const e = n.map(n => ({
            useScope: n(),
            scopeName: n.scopeName
          }));
          return function(n) {
            const o = e.reduce((t, {
              useScope: e,
              scopeName: r
            }) => ({
              ...t,
              ...e(n)[`__scope${r}`]
            }), {});
            return r.useMemo(() => ({
              [`__scope${t.scopeName}`]: o
            }), [o])
          }
        };
        return e.scopeName = t.scopeName, e
      }
    },
    86126: (n, t, e) => {
      var r;
      e.d(t, {
        B: () => s
      });
      var o = e(62229),
        i = e(63155),
        c = (r || (r = e.t(o, 2)))[" useId ".trim().toString()] || (() => {}),
        u = 0;

      function s(n) {
        const [t, e] = o.useState(c());
        return (0, i.N)(() => {
          n || e(n => n ?? String(u++))
        }, [n]), n || (t ? `radix-${t}` : "")
      }
    },
    94040: (n, t, e) => {
      e.d(t, {
        U: () => i
      });
      var r = e(62229),
        o = e(76286);

      function i(n, t = globalThis?.document) {
        const e = (0, o.c)(n);
        r.useEffect(() => {
          const n = n => {
            "Escape" === n.key && e(n)
          };
          return t.addEventListener("keydown", n, {
            capture: !0
          }), () => t.removeEventListener("keydown", n, {
            capture: !0
          })
        }, [e, t])
      }
    },
    94926: (n, t, e) => {
      e.d(t, {
        Eq: () => s
      });
      var r = new WeakMap,
        o = new WeakMap,
        i = {},
        c = 0,
        u = function(n) {
          return n && (n.host || u(n.parentNode))
        },
        s = function(n, t, e) {
          void 0 === e && (e = "data-aria-hidden");
          var s = Array.from(Array.isArray(n) ? n : [n]),
            a = t || function(n) {
              return "undefined" == typeof document ? null : (Array.isArray(n) ? n[0] : n).ownerDocument.body
            }(n);
          return a ? (s.push.apply(s, Array.from(a.querySelectorAll("[aria-live], script"))), function(n, t, e, s) {
            var a = function(n, t) {
              return t.map(function(t) {
                if (n.contains(t)) return t;
                var e = u(t);
                return e && n.contains(e) ? e : (console.error("aria-hidden", t, "in not contained inside", n, ". Doing nothing"), null)
              }).filter(function(n) {
                return Boolean(n)
              })
            }(t, Array.isArray(n) ? n : [n]);
            i[e] || (i[e] = new WeakMap);
            var d = i[e],
              f = [],
              l = new Set,
              p = new Set(a),
              g = function(n) {
                n && !l.has(n) && (l.add(n), g(n.parentNode))
              };
            a.forEach(g);
            var m = function(n) {
              n && !p.has(n) && Array.prototype.forEach.call(n.children, function(n) {
                if (l.has(n)) m(n);
                else try {
                  var t = n.getAttribute(s),
                    i = null !== t && "false" !== t,
                    c = (r.get(n) || 0) + 1,
                    u = (d.get(n) || 0) + 1;
                  r.set(n, c), d.set(n, u), f.push(n), 1 === c && i && o.set(n, !0), 1 === u && n.setAttribute(e, "true"), i || n.setAttribute(s, "true")
                } catch (t) {
                  console.error("aria-hidden: cannot operate on ", n, t)
                }
              })
            };
            return m(t), l.clear(), c++,
              function() {
                f.forEach(function(n) {
                  var t = r.get(n) - 1,
                    i = d.get(n) - 1;
                  r.set(n, t), d.set(n, i), t || (o.has(n) || n.removeAttribute(s), o.delete(n)), i || n.removeAttribute(e)
                }), --c || (r = new WeakMap, r = new WeakMap, o = new WeakMap, i = {})
              }
          }(s, a, e, "aria-hidden")) : function() {
            return null
          }
        }
    }
  }
]);