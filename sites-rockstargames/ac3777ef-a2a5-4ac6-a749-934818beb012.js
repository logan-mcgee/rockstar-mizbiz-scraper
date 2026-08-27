try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "ac3777ef-a2a5-4ac6-a749-934818beb012", e._sentryDebugIdIdentifier = "sentry-dbid-ac3777ef-a2a5-4ac6-a749-934818beb012")
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
  [1529], {
    43156(e, t, n) {
      function r(e) {
        var t = function(e) {
          if ("object" != typeof e || !e) return e;
          var t = e[Symbol.toPrimitive];
          if (void 0 !== t) {
            var n = t.call(e, "string");
            if ("object" != typeof n) return n;
            throw new TypeError("@@toPrimitive must return a primitive value.")
          }
          return String(e)
        }(e);
        return "symbol" == typeof t ? t : String(t)
      }

      function o(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          t && (r = r.filter(function(t) {
            return Object.getOwnPropertyDescriptor(e, t).enumerable
          })), n.push.apply(n, r)
        }
        return n
      }

      function s(e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = null != arguments[t] ? arguments[t] : {};
          t % 2 ? o(Object(n), !0).forEach(function(t) {
            var o, s, a;
            o = e, s = t, a = n[t], (s = r(s)) in o ? Object.defineProperty(o, s, {
              value: a,
              enumerable: !0,
              configurable: !0,
              writable: !0
            }) : o[s] = a
          }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach(function(t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
        }
        return e
      }

      function a(e, t) {
        var n = {};
        for (var r in e) n[r] = t(e[r], r);
        return n
      }
      n.d(t, {
        c: () => l
      });
      var i = (e, t, n) => {
          for (var r of Object.keys(e)) {
            var o;
            if (e[r] !== (null !== (o = t[r]) && void 0 !== o ? o : n[r])) return !1
          }
          return !0
        },
        l = e => {
          var t = t => {
            var n = e.defaultClassName,
              r = s(s({}, e.defaultVariants), t);
            for (var o in r) {
              var a, l = null !== (a = r[o]) && void 0 !== a ? a : e.defaultVariants[o];
              if (null != l) {
                var u = l;
                "boolean" == typeof u && (u = !0 === u ? "true" : "false");
                var f = e.variantClassNames[o][u];
                f && (n += " " + f)
              }
            }
            for (var [c, d] of e.compoundVariants) i(c, r, e.defaultVariants) && (n += " " + d);
            return n
          };
          return t.variants = () => Object.keys(e.variantClassNames), t.classNames = {
            get base() {
              return e.defaultClassName.split(" ")[0]
            },
            get variants() {
              return a(e.variantClassNames, e => a(e, e => e.split(" ")[0]))
            }
          }, t
        }
    },
    60150(e, t, n) {
      n.d(t, {
        fp: () => y
      });
      var r = n(93082),
        o = n(49906),
        s = n(82745);
      const a = (0, r.createContext)(void 0);

      function i(e) {
        const t = (0, r.useContext)(a);
        return (null == e ? void 0 : e.store) || t || (0, o.zp)()
      }
      const l = e => "function" == typeof(null == e ? void 0 : e.then),
        u = e => {
          e.status || (e.status = "pending", e.then(t => {
            e.status = "fulfilled", e.value = t
          }, t => {
            e.status = "rejected", e.reason = t
          }))
        },
        f = r.use || (e => {
          if ("pending" === e.status) throw e;
          if ("fulfilled" === e.status) return e.value;
          throw "rejected" === e.status ? e.reason : (u(e), e)
        }),
        c = new WeakMap,
        d = (e, t, n) => {
          const r = (0, s.h7)(e),
            o = r[26];
          let a = c.get(t);
          return a || (a = new Promise((s, i) => {
            let u = t;
            const f = e => t => {
                u === e && s(t)
              },
              d = e => t => {
                u === e && i(t)
              },
              p = () => {
                try {
                  const t = n();
                  l(t) ? (c.set(t, a), u = t, t.then(f(t), d(t)), o(r, e, t, p)) : s(t)
                } catch (e) {
                  i(e)
                }
              };
            t.then(f(t), d(t)), o(r, e, t, p)
          }), c.set(t, a)), a
        };

      function p(e, t) {
        const {
          delay: n,
          unstable_promiseStatus: o = !r.use
        } = t || {}, s = i(t), [
          [a, c, p], g
        ] = (0, r.useReducer)(t => {
          const n = s.get(e);
          return Object.is(t[0], n) && t[1] === s && t[2] === e ? t : [n, s, e]
        }, void 0, () => [s.get(e), s, e]);
        let y = a;
        if (c === s && p === e || (g(), y = s.get(e)), (0, r.useEffect)(() => {
            const t = s.sub(e, () => {
              if (o) try {
                const t = s.get(e);
                l(t) && u(d(s, t, () => s.get(e)))
              } catch (e) {}
              if ("number" == typeof n) return console.warn("[DEPRECATED] delay option is deprecated and will be removed in v3.\n\nMigration guide:\n\nCreate a custom hook like the following.\n\nfunction useAtomValueWithDelay<Value>(\n  atom: Atom<Value>,\n  options: { delay: number },\n): Value {\n  const { delay } = options\n  const store = useStore(options)\n  const [value, setValue] = useState(() => store.get(atom))\n  useEffect(() => {\n    const unsub = store.sub(atom, () => {\n      setTimeout(() => setValue(store.get(atom)), delay)\n    })\n    return unsub\n  }, [store, atom, delay])\n  return value\n}\n"), void setTimeout(g, n);
              g()
            });
            return g(), t
          }, [s, e, n, o]), (0, r.useDebugValue)(y), l(y)) {
          const t = d(s, y, () => s.get(e));
          return o && u(t), f(t)
        }
        return y
      }

      function g(e, t) {
        const n = i(t);
        return (0, r.useCallback)((...t) => n.set(e, ...t), [n, e])
      }

      function y(e, t) {
        return [p(e, t), g(e, t)]
      }
    },
    49906(e, t, n) {
      n.d(t, {
        eU: () => a,
        zp: () => u
      });
      var r = n(82745);
      let o, s = 0;

      function a(e, t) {
        const n = "atom" + ++s,
          r = {
            toString: () => n
          };
        return "function" == typeof e ? r.read = e : (r.init = e, r.read = i, r.write = l), t && (r.write = t), r
      }

      function i(e) {
        return e(this)
      }

      function l(e, t, n) {
        return t(this, "function" == typeof n ? n(e(this)) : n)
      }

      function u() {
        return o || (o = (0, r._b)()), o
      }
    },
    82745(e, t, n) {
      function r(e) {
        return "init" in e
      }

      function o(e) {
        return "function" == typeof e.write
      }

      function s(e) {
        return "v" in e || "e" in e
      }

      function a(e) {
        if ("e" in e) throw e.e;
        return e.v
      }

      function i(e) {
        return "function" == typeof(null == e ? void 0 : e.then)
      }

      function l(e, t, n) {
        if (!n.p.has(e)) {
          n.p.add(e);
          const r = () => n.p.delete(e);
          t.then(r, r)
        }
      }

      function u(e, t, n) {
        const r = n.get(e),
          o = null == r ? void 0 : r.t,
          s = t.p;
        if (!(null == o ? void 0 : o.size)) return s;
        if (!s.size) return o;
        const a = new Set(o);
        for (const e of s) a.add(e);
        return a
      }
      n.d(t, {
        _b: () => T,
        h7: () => P
      });
      const f = (e, t, n, ...r) => n.read(...r),
        c = (e, t, n, ...r) => n.write(...r),
        d = (e, t, n) => n.INTERNAL_onInit(t),
        p = (e, t, n, r) => {
          var o;
          return null == (o = n.onMount) ? void 0 : o.call(n, r)
        },
        g = (e, t, n) => {
          var r;
          const o = e[0];
          let s = o.get(n);
          if (!s) {
            const a = e[6],
              i = e[9];
            s = {
                d: new Map,
                p: new Set,
                n: 0
              }, o.set(n, s), null == (r = a.i) || r.call(a, n),
              function(e) {
                return !!e.INTERNAL_onInit
              }(n) && i(e, t, n)
          }
          return s
        },
        y = (e, t) => {
          var n;
          const r = e[1],
            o = e[3],
            s = e[4],
            a = e[5],
            i = e[6],
            l = e[13];
          if (!(i.f || o.size || s.size || a.size)) return;
          const u = [],
            f = e => {
              try {
                e()
              } catch (e) {
                u.push(e)
              }
            };
          do {
            i.f && f(i.f);
            const u = new Set;
            for (const e of o) {
              const t = null == (n = r.get(e)) ? void 0 : n.l;
              if (t)
                for (const e of t) u.add(e)
            }
            o.clear();
            for (const e of a) u.add(e);
            a.clear();
            for (const e of s) u.add(e);
            s.clear();
            for (const e of u) f(e);
            o.size && l(e, t)
          } while (o.size || a.size || s.size);
          if (u.length) throw new AggregateError(u)
        },
        v = (e, t) => {
          const n = e[1],
            r = e[2],
            o = e[3],
            s = e[11],
            a = e[14],
            i = e[17];
          if (!o.size) return;
          const l = [],
            f = [],
            c = new WeakSet,
            d = new WeakSet,
            p = [],
            g = [];
          for (const n of o) p.push(n), g.push(s(e, t, n));
          for (; p.length;) {
            const o = p.length - 1,
              a = p[o],
              i = g[o];
            if (d.has(a)) p.pop(), g.pop();
            else if (c.has(a)) r.get(a) === i.n && (l.push(a), f.push(i)), d.add(a), p.pop(), g.pop();
            else {
              c.add(a);
              for (const r of u(a, i, n)) c.has(r) || (p.push(r), g.push(s(e, t, r)))
            }
          }
          for (let n = l.length - 1; n >= 0; --n) {
            const s = l[n],
              u = f[n];
            let c = !1;
            for (const e of u.d.keys())
              if (e !== s && o.has(e)) {
                c = !0;
                break
              } c && (r.set(s, u.n), a(e, t, s), i(e, t, s)), r.delete(s)
          }
        },
        b = (e, t, n) => {
          var u, f;
          const c = e[1],
            d = e[2],
            p = e[3],
            g = e[6],
            y = e[7],
            v = e[11],
            b = e[12],
            h = e[13],
            w = e[14],
            m = e[16],
            k = e[17],
            S = e[20],
            E = e[26],
            O = e[28],
            j = v(e, t, n),
            _ = O[0];
          if (s(j)) {
            if (c.has(n) && d.get(n) !== j.n || j.m === _) return j.m = _, j;
            let r = !1;
            for (const [n, o] of j.d)
              if (w(e, t, n).n !== o) {
                r = !0;
                break
              } if (!r) return j.m = _, j
          }
          let z = !0;
          const M = new Set(j.d.keys()),
            C = () => {
              for (const e of M) j.d.delete(e)
            },
            P = () => {
              if (c.has(n)) {
                const r = !p.size;
                k(e, t, n), r && (h(e, t), b(e, t))
              }
            },
            T = o => {
              var u;
              if (o === n) {
                const n = v(e, t, o);
                if (!s(n)) {
                  if (!r(o)) throw new Error("no atom init");
                  S(e, t, o, o.init)
                }
                return a(n)
              }
              const f = w(e, t, o);
              try {
                return a(f)
              } finally {
                M.delete(o), j.d.set(o, f.n), i(j.v) && l(n, j.v, f), c.has(n) && (null == (u = c.get(o)) || u.t.add(n)), z || P()
              }
            };
          let D, N;
          const V = {
              get signal() {
                return D || (D = new AbortController), D.signal
              },
              get setSelf() {
                return !N && o(n) && (N = (...r) => {
                  if (!z) try {
                    return m(e, t, n, r)
                  } finally {
                    h(e, t), b(e, t)
                  }
                }), N
              }
            },
            I = j.n,
            W = d.get(n) === I;
          try {
            const r = y(e, t, n, T, V);
            if (S(e, t, n, r), i(r)) {
              E(e, t, r, () => null == D ? void 0 : D.abort());
              const n = () => {
                C(), P()
              };
              r.then(n, n)
            } else C();
            return null == (u = g.r) || u.call(g, n), j.m = _, j
          } catch (e) {
            if (function(e) {
                if (!(e instanceof Error)) return !1;
                const t = e.name,
                  n = e.message.toLowerCase();
                return ("RangeError" === t || "InternalError" === t) && (n.includes("call stack") || n.includes("too much recursion") || n.includes("stack overflow"))
              }(e)) throw e;
            return delete j.v, j.e = e, ++j.n, j.m = _, j
          } finally {
            z = !1, j.n !== I && W && (d.set(n, j.n), p.add(n), null == (f = g.c) || f.call(g, n))
          }
        },
        h = (e, t, n) => {
          const r = e[1],
            o = e[2],
            s = e[11],
            a = [n];
          for (; a.length;) {
            const n = a.pop(),
              i = s(e, t, n);
            for (const l of u(n, i, r)) {
              const n = s(e, t, l);
              o.get(l) !== n.n && (o.set(l, n.n), a.push(l))
            }
          }
        },
        w = (e, t, n, o) => {
          const s = e[3],
            i = e[6],
            l = e[8],
            u = e[11],
            f = e[12],
            c = e[13],
            d = e[14],
            p = e[15],
            g = e[16],
            y = e[17],
            v = e[20],
            b = e[28];
          let h = !0;
          const w = n => a(d(e, t, n)),
            m = (o, ...a) => {
              var l;
              const d = u(e, t, o);
              try {
                if (o === n) {
                  if (!r(o)) throw new Error("atom not writable");
                  const n = d.n,
                    u = a[0];
                  return v(e, t, o, u), y(e, t, o), void(n !== d.n && (++b[0], s.add(o), p(e, t, o), null == (l = i.c) || l.call(i, o)))
                }
                return g(e, t, o, a)
              } finally {
                h || (c(e, t), f(e, t))
              }
            };
          try {
            return l(e, t, n, w, m, ...o)
          } finally {
            h = !1
          }
        },
        m = (e, t, n) => {
          var r;
          const o = e[1],
            s = e[3],
            a = e[6],
            i = e[11],
            l = e[15],
            u = e[18],
            f = e[19],
            c = i(e, t, n),
            d = o.get(n);
          if (d && c.d.size > 0) {
            for (const [o, f] of c.d)
              if (!d.d.has(o)) {
                const c = i(e, t, o);
                u(e, t, o).t.add(n), d.d.add(o), f !== c.n && (s.add(o), l(e, t, o), null == (r = a.c) || r.call(a, o))
              } for (const r of d.d)
              if (!c.d.has(r)) {
                d.d.delete(r);
                const o = f(e, t, r);
                null == o || o.t.delete(n)
              }
          }
        },
        k = (e, t, n) => {
          var r;
          const s = e[1],
            a = e[4],
            i = e[6],
            l = e[10],
            u = e[11],
            f = e[12],
            c = e[13],
            d = e[14],
            p = e[16],
            g = e[18],
            y = u(e, t, n);
          let v = s.get(n);
          if (!v) {
            d(e, t, n);
            for (const r of y.d.keys()) g(e, t, r).t.add(n);
            if (v = {
                l: new Set,
                d: new Set(y.d.keys()),
                t: new Set
              }, s.set(n, v), o(n) && function(e) {
                return !!e.onMount
              }(n)) {
              const r = () => {
                let r = !0;
                const o = (...o) => {
                  try {
                    return p(e, t, n, o)
                  } finally {
                    r || (c(e, t), f(e, t))
                  }
                };
                try {
                  const s = l(e, t, n, o);
                  s && (v.u = () => {
                    r = !0;
                    try {
                      s()
                    } finally {
                      r = !1
                    }
                  })
                } finally {
                  r = !1
                }
              };
              a.add(r)
            }
            null == (r = i.m) || r.call(i, n)
          }
          return v
        },
        S = (e, t, n) => {
          var r, o;
          const s = e[1],
            a = e[5],
            i = e[6],
            l = e[11],
            u = e[19],
            f = l(e, t, n);
          let c = s.get(n);
          if (!c || c.l.size) return c;
          let d = !1;
          for (const e of c.t)
            if (null == (r = s.get(e)) ? void 0 : r.d.has(n)) {
              d = !0;
              break
            } if (d) return c;
          c.u && a.add(c.u), c = void 0, s.delete(n);
          for (const r of f.d.keys()) {
            const o = u(e, t, r);
            null == o || o.t.delete(n)
          }
          null == (o = i.u) || o.call(i, n)
        },
        E = (e, t, n, r) => {
          const o = e[11],
            s = e[27],
            a = o(e, t, n),
            u = "v" in a,
            f = a.v;
          if (i(r))
            for (const s of a.d.keys()) l(n, r, o(e, t, s));
          a.v = r, delete a.e, u && Object.is(f, a.v) || (++a.n, i(f) && s(e, t, f))
        },
        O = (e, t, n) => a((0, e[14])(e, t, n)),
        j = (e, t, n, ...r) => {
          const o = e[3],
            s = e[12],
            a = e[13],
            i = e[16],
            l = o.size;
          try {
            return i(e, t, n, r)
          } finally {
            o.size !== l && (a(e, t), s(e, t))
          }
        },
        _ = (e, t, n, r) => {
          const o = e[12],
            s = e[13],
            a = e[18],
            i = e[19],
            l = a(e, t, n).l;
          return l.add(r), s(e, t), o(e, t), () => {
            l.delete(r), i(e, t, n), s(e, t), o(e, t)
          }
        },
        z = (e, t, n, r) => {
          const o = e[25];
          let s = o.get(n);
          if (!s) {
            s = new Set, o.set(n, s);
            const e = () => o.delete(n);
            n.then(e, e)
          }
          s.add(r)
        },
        M = (e, t, n) => {
          const r = e[25].get(n);
          null == r || r.forEach(e => e())
        },
        C = new WeakMap;

      function P(e) {
        const t = C.get(e),
          n = t[24];
        return n ? n(t, e) : t
      }

      function T(...e) {
        const t = {
            get: e => r(n, t, e),
            set: (e, ...r) => o(n, t, e, ...r),
            sub: (e, r) => s(n, t, e, r)
          },
          n = [new WeakMap, new WeakMap, new WeakMap, new Set, new Set, new Set, {}, f, c, d, p, g, y, v, b, h, w, m, k, S, E, O, j, _, void 0, new WeakMap, z, M, [0]].map((t, n) => e[n] || t);
        C.set(t, Object.freeze(n));
        const r = n[21],
          o = n[22],
          s = n[23];
        return t
      }
    }
  }
]);