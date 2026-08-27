try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "5c6379dc-8ed6-4468-a07b-ed178e5d811f", e._sentryDebugIdIdentifier = "sentry-dbid-5c6379dc-8ed6-4468-a07b-ed178e5d811f")
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
  [3019], {
    3019(e, t, n) {
      function o(e) {
        return "init" in e
      }

      function r(e) {
        return "function" == typeof e.write
      }

      function s(e) {
        return "v" in e || "e" in e
      }

      function l(e) {
        if ("e" in e) throw e.e;
        return e.v
      }

      function u(e) {
        return "function" == typeof(null == e ? void 0 : e.then)
      }

      function a(e, t, n) {
        if (!n.p.has(e)) {
          n.p.add(e);
          const o = () => n.p.delete(e);
          t.then(o, o)
        }
      }

      function i(e, t, n) {
        const o = n.get(e),
          r = null == o ? void 0 : o.t,
          s = t.p;
        if (!(null == r ? void 0 : r.size)) return s;
        if (!s.size) return r;
        const l = new Set(r);
        for (const e of s) l.add(e);
        return l
      }
      n.r(t), n.d(t, {
        INTERNAL_overrideCreateStore: () => j,
        Provider: () => q,
        atom: () => W,
        createStore: () => L,
        getDefaultStore: () => P,
        useAtom: () => U,
        useAtomValue: () => K,
        useSetAtom: () => Q,
        useStore: () => Y
      });
      const c = (e, t, n, ...o) => n.read(...o),
        d = (e, t, n, ...o) => n.write(...o),
        f = (e, t, n) => n.INTERNAL_onInit(t),
        g = (e, t, n, o) => {
          var r;
          return null == (r = n.onMount) ? void 0 : r.call(n, o)
        },
        y = (e, t, n) => {
          var o;
          const r = e[0];
          let s = r.get(n);
          if (!s) {
            const l = e[6],
              u = e[9];
            s = {
                d: new Map,
                p: new Set,
                n: 0
              }, r.set(n, s), null == (o = l.i) || o.call(l, n),
              function(e) {
                return !!e.INTERNAL_onInit
              }(n) && u(e, t, n)
          }
          return s
        },
        p = (e, t) => {
          var n;
          const o = e[1],
            r = e[3],
            s = e[4],
            l = e[5],
            u = e[6],
            a = e[13];
          if (!(u.f || r.size || s.size || l.size)) return;
          const i = [],
            c = e => {
              try {
                e()
              } catch (e) {
                i.push(e)
              }
            };
          do {
            u.f && c(u.f);
            const i = new Set;
            for (const e of r) {
              const t = null == (n = o.get(e)) ? void 0 : n.l;
              if (t)
                for (const e of t) i.add(e)
            }
            r.clear();
            for (const e of l) i.add(e);
            l.clear();
            for (const e of s) i.add(e);
            s.clear();
            for (const e of i) c(e);
            r.size && a(e, t)
          } while (r.size || l.size || s.size);
          if (i.length) throw new AggregateError(i)
        },
        h = (e, t) => {
          const n = e[1],
            o = e[2],
            r = e[3],
            s = e[11],
            l = e[14],
            u = e[17];
          if (!r.size) return;
          const a = [],
            c = [],
            d = new WeakSet,
            f = new WeakSet,
            g = [],
            y = [];
          for (const n of r) g.push(n), y.push(s(e, t, n));
          for (; g.length;) {
            const r = g.length - 1,
              l = g[r],
              u = y[r];
            if (f.has(l)) g.pop(), y.pop();
            else if (d.has(l)) o.get(l) === u.n && (a.push(l), c.push(u)), f.add(l), g.pop(), y.pop();
            else {
              d.add(l);
              for (const o of i(l, u, n)) d.has(o) || (g.push(o), y.push(s(e, t, o)))
            }
          }
          for (let n = a.length - 1; n >= 0; --n) {
            const s = a[n],
              i = c[n];
            let d = !1;
            for (const e of i.d.keys())
              if (e !== s && r.has(e)) {
                d = !0;
                break
              } d && (o.set(s, i.n), l(e, t, s), u(e, t, s)), o.delete(s)
          }
        },
        w = (e, t, n) => {
          var i, c;
          const d = e[1],
            f = e[2],
            g = e[3],
            y = e[6],
            p = e[7],
            h = e[11],
            w = e[12],
            v = e[13],
            b = e[14],
            m = e[16],
            k = e[17],
            S = e[20],
            E = e[26],
            _ = e[28],
            M = h(e, t, n),
            z = _[0];
          if (s(M)) {
            if (d.has(n) && f.get(n) !== M.n || M.m === z) return M.m = z, M;
            let o = !1;
            for (const [n, r] of M.d)
              if (b(e, t, n).n !== r) {
                o = !0;
                break
              } if (!o) return M.m = z, M
          }
          let T = !0;
          const A = new Set(M.d.keys()),
            I = () => {
              for (const e of A) M.d.delete(e)
            },
            C = () => {
              if (d.has(n)) {
                const o = !g.size;
                k(e, t, n), o && (v(e, t), w(e, t))
              }
            },
            D = r => {
              var i;
              if (r === n) {
                const n = h(e, t, r);
                if (!s(n)) {
                  if (!o(r)) throw new Error("no atom init");
                  S(e, t, r, r.init)
                }
                return l(n)
              }
              const c = b(e, t, r);
              try {
                return l(c)
              } finally {
                A.delete(r), M.d.set(r, c.n), u(M.v) && a(n, M.v, c), d.has(n) && (null == (i = d.get(r)) || i.t.add(n)), T || C()
              }
            };
          let R, W;
          const N = {
              get signal() {
                return R || (R = new AbortController), R.signal
              },
              get setSelf() {
                return !W && r(n) && (W = (...o) => {
                  if (!T) try {
                    return m(e, t, n, o)
                  } finally {
                    v(e, t), w(e, t)
                  }
                }), W
              }
            },
            V = M.n,
            j = f.get(n) === V;
          try {
            const o = p(e, t, n, D, N);
            if (S(e, t, n, o), u(o)) {
              E(e, t, o, () => null == R ? void 0 : R.abort());
              const n = () => {
                I(), C()
              };
              o.then(n, n)
            } else I();
            return null == (i = y.r) || i.call(y, n), M.m = z, M
          } catch (e) {
            if (function(e) {
                if (!(e instanceof Error)) return !1;
                const t = e.name,
                  n = e.message.toLowerCase();
                return ("RangeError" === t || "InternalError" === t) && (n.includes("call stack") || n.includes("too much recursion") || n.includes("stack overflow"))
              }(e)) throw e;
            return delete M.v, M.e = e, ++M.n, M.m = z, M
          } finally {
            T = !1, M.n !== V && j && (f.set(n, M.n), g.add(n), null == (c = y.c) || c.call(y, n))
          }
        },
        v = (e, t, n) => {
          const o = e[1],
            r = e[2],
            s = e[11],
            l = [n];
          for (; l.length;) {
            const n = l.pop(),
              u = s(e, t, n);
            for (const a of i(n, u, o)) {
              const n = s(e, t, a);
              r.get(a) !== n.n && (r.set(a, n.n), l.push(a))
            }
          }
        },
        b = (e, t, n, r) => {
          const s = e[3],
            u = e[6],
            a = e[8],
            i = e[11],
            c = e[12],
            d = e[13],
            f = e[14],
            g = e[15],
            y = e[16],
            p = e[17],
            h = e[20],
            w = e[28];
          let v = !0;
          const b = n => l(f(e, t, n)),
            m = (r, ...l) => {
              var a;
              const f = i(e, t, r);
              try {
                if (r === n) {
                  if (!o(r)) throw new Error("atom not writable");
                  const n = f.n,
                    i = l[0];
                  return h(e, t, r, i), p(e, t, r), void(n !== f.n && (++w[0], s.add(r), g(e, t, r), null == (a = u.c) || a.call(u, r)))
                }
                return y(e, t, r, l)
              } finally {
                v || (d(e, t), c(e, t))
              }
            };
          try {
            return a(e, t, n, b, m, ...r)
          } finally {
            v = !1
          }
        },
        m = (e, t, n) => {
          var o;
          const r = e[1],
            s = e[3],
            l = e[6],
            u = e[11],
            a = e[15],
            i = e[18],
            c = e[19],
            d = u(e, t, n),
            f = r.get(n);
          if (f && d.d.size > 0) {
            for (const [r, c] of d.d)
              if (!f.d.has(r)) {
                const d = u(e, t, r);
                i(e, t, r).t.add(n), f.d.add(r), c !== d.n && (s.add(r), a(e, t, r), null == (o = l.c) || o.call(l, r))
              } for (const o of f.d)
              if (!d.d.has(o)) {
                f.d.delete(o);
                const r = c(e, t, o);
                null == r || r.t.delete(n)
              }
          }
        },
        k = (e, t, n) => {
          var o;
          const s = e[1],
            l = e[4],
            u = e[6],
            a = e[10],
            i = e[11],
            c = e[12],
            d = e[13],
            f = e[14],
            g = e[16],
            y = e[18],
            p = i(e, t, n);
          let h = s.get(n);
          if (!h) {
            f(e, t, n);
            for (const o of p.d.keys()) y(e, t, o).t.add(n);
            if (h = {
                l: new Set,
                d: new Set(p.d.keys()),
                t: new Set
              }, s.set(n, h), r(n) && function(e) {
                return !!e.onMount
              }(n)) {
              const o = () => {
                let o = !0;
                const r = (...r) => {
                  try {
                    return g(e, t, n, r)
                  } finally {
                    o || (d(e, t), c(e, t))
                  }
                };
                try {
                  const s = a(e, t, n, r);
                  s && (h.u = () => {
                    o = !0;
                    try {
                      s()
                    } finally {
                      o = !1
                    }
                  })
                } finally {
                  o = !1
                }
              };
              l.add(o)
            }
            null == (o = u.m) || o.call(u, n)
          }
          return h
        },
        S = (e, t, n) => {
          var o, r;
          const s = e[1],
            l = e[5],
            u = e[6],
            a = e[11],
            i = e[19],
            c = a(e, t, n);
          let d = s.get(n);
          if (!d || d.l.size) return d;
          let f = !1;
          for (const e of d.t)
            if (null == (o = s.get(e)) ? void 0 : o.d.has(n)) {
              f = !0;
              break
            } if (f) return d;
          d.u && l.add(d.u), d = void 0, s.delete(n);
          for (const o of c.d.keys()) {
            const r = i(e, t, o);
            null == r || r.t.delete(n)
          }
          null == (r = u.u) || r.call(u, n)
        },
        E = (e, t, n, o) => {
          const r = e[11],
            s = e[27],
            l = r(e, t, n),
            i = "v" in l,
            c = l.v;
          if (u(o))
            for (const s of l.d.keys()) a(n, o, r(e, t, s));
          l.v = o, delete l.e, i && Object.is(c, l.v) || (++l.n, u(c) && s(e, t, c))
        },
        _ = (e, t, n) => l((0, e[14])(e, t, n)),
        M = (e, t, n, ...o) => {
          const r = e[3],
            s = e[12],
            l = e[13],
            u = e[16],
            a = r.size;
          try {
            return u(e, t, n, o)
          } finally {
            r.size !== a && (l(e, t), s(e, t))
          }
        },
        z = (e, t, n, o) => {
          const r = e[12],
            s = e[13],
            l = e[18],
            u = e[19],
            a = l(e, t, n).l;
          return a.add(o), s(e, t), r(e, t), () => {
            a.delete(o), u(e, t, n), s(e, t), r(e, t)
          }
        },
        T = (e, t, n, o) => {
          const r = e[25];
          let s = r.get(n);
          if (!s) {
            s = new Set, r.set(n, s);
            const e = () => r.delete(n);
            n.then(e, e)
          }
          s.add(o)
        },
        A = (e, t, n) => {
          const o = e[25].get(n);
          null == o || o.forEach(e => e())
        },
        I = new WeakMap;
      let C, D, R = 0;

      function W(e, t) {
        const n = "atom" + ++R,
          o = {
            toString: () => n
          };
        return "function" == typeof e ? o.read = e : (o.init = e, o.read = N, o.write = V), t && (o.write = t), o
      }

      function N(e) {
        return e(this)
      }

      function V(e, t, n) {
        return t(this, "function" == typeof n ? n(e(this)) : n)
      }

      function j(e) {
        C = e(C)
      }

      function L() {
        return C ? C() : function(...e) {
          const t = {
              get: e => o(n, t, e),
              set: (e, ...o) => r(n, t, e, ...o),
              sub: (e, o) => s(n, t, e, o)
            },
            n = [new WeakMap, new WeakMap, new WeakMap, new Set, new Set, new Set, {}, c, d, f, g, y, p, h, w, v, b, m, k, S, E, _, M, z, void 0, new WeakMap, T, A, [0]].map((t, n) => e[n] || t);
          I.set(t, Object.freeze(n));
          const o = n[21],
            r = n[22],
            s = n[23];
          return t
        }()
      }

      function P() {
        return D || (D = L()), D
      }
      var O = n(3082);
      const x = (0, O.createContext)(void 0);

      function Y(e) {
        const t = (0, O.useContext)(x);
        return (null == e ? void 0 : e.store) || t || P()
      }

      function q({
        children: e,
        store: t
      }) {
        const n = (0, O.useRef)(null);
        return t ? (0, O.createElement)(x.Provider, {
          value: t
        }, e) : (null === n.current && (n.current = L()), (0, O.createElement)(x.Provider, {
          value: n.current
        }, e))
      }
      const B = e => "function" == typeof(null == e ? void 0 : e.then),
        F = e => {
          e.status || (e.status = "pending", e.then(t => {
            e.status = "fulfilled", e.value = t
          }, t => {
            e.status = "rejected", e.reason = t
          }))
        },
        G = O.use || (e => {
          if ("pending" === e.status) throw e;
          if ("fulfilled" === e.status) return e.value;
          throw "rejected" === e.status ? e.reason : (F(e), e)
        }),
        H = new WeakMap,
        J = (e, t, n) => {
          const o = function(e) {
              const t = I.get(e),
                n = t[24];
              return n ? n(t, e) : t
            }(e),
            r = o[26];
          let s = H.get(t);
          return s || (s = new Promise((l, u) => {
            let a = t;
            const i = e => t => {
                a === e && l(t)
              },
              c = e => t => {
                a === e && u(t)
              },
              d = () => {
                try {
                  const t = n();
                  B(t) ? (H.set(t, s), a = t, t.then(i(t), c(t)), r(o, e, t, d)) : l(t)
                } catch (e) {
                  u(e)
                }
              };
            t.then(i(t), c(t)), r(o, e, t, d)
          }), H.set(t, s)), s
        };

      function K(e, t) {
        const {
          delay: n,
          unstable_promiseStatus: o = !O.use
        } = t || {}, r = Y(t), [
          [s, l, u], a
        ] = (0, O.useReducer)(t => {
          const n = r.get(e);
          return Object.is(t[0], n) && t[1] === r && t[2] === e ? t : [n, r, e]
        }, void 0, () => [r.get(e), r, e]);
        let i = s;
        if (l === r && u === e || (a(), i = r.get(e)), (0, O.useEffect)(() => {
            const t = r.sub(e, () => {
              if (o) try {
                const t = r.get(e);
                B(t) && F(J(r, t, () => r.get(e)))
              } catch (e) {}
              if ("number" == typeof n) return console.warn("[DEPRECATED] delay option is deprecated and will be removed in v3.\n\nMigration guide:\n\nCreate a custom hook like the following.\n\nfunction useAtomValueWithDelay<Value>(\n  atom: Atom<Value>,\n  options: { delay: number },\n): Value {\n  const { delay } = options\n  const store = useStore(options)\n  const [value, setValue] = useState(() => store.get(atom))\n  useEffect(() => {\n    const unsub = store.sub(atom, () => {\n      setTimeout(() => setValue(store.get(atom)), delay)\n    })\n    return unsub\n  }, [store, atom, delay])\n  return value\n}\n"), void setTimeout(a, n);
              a()
            });
            return a(), t
          }, [r, e, n, o]), (0, O.useDebugValue)(i), B(i)) {
          const t = J(r, i, () => r.get(e));
          return o && F(t), G(t)
        }
        return i
      }

      function Q(e, t) {
        const n = Y(t);
        return (0, O.useCallback)((...t) => n.set(e, ...t), [n, e])
      }

      function U(e, t) {
        return [K(e, t), Q(e, t)]
      }
    }
  }
]);