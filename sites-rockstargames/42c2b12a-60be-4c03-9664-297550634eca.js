try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "42c2b12a-60be-4c03-9664-297550634eca", e._sentryDebugIdIdentifier = "sentry-dbid-42c2b12a-60be-4c03-9664-297550634eca")
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
  [1711], {
    51711: (e, t, r) => {
      r.r(t), r.d(t, {
        ApolloCache: () => Rt,
        ApolloClient: () => Tt,
        ApolloConsumer: () => yn,
        ApolloError: () => Fe.K4,
        ApolloLink: () => o.C,
        ApolloProvider: () => dn,
        Cache: () => St,
        DocumentTransform: () => me,
        DocumentType: () => gn,
        HttpLink: () => u.P,
        InMemoryCache: () => Rr,
        MissingFieldError: () => Dt,
        NetworkStatus: () => Ce,
        Observable: () => be.c,
        ObservableQuery: () => Be,
        checkFetcher: () => xr.S,
        concat: () => Cr,
        createHttpLink: () => Vr.$,
        createQueryPreloader: () => Fi,
        createSignalIfSupported: () => Ir,
        defaultDataIdFromObject: () => Ct,
        defaultPrinter: () => qr.i1,
        disableExperimentalFragmentVariables: () => tn,
        disableFragmentWarnings: () => Zr,
        empty: () => Dr,
        enableExperimentalFragmentVariables: () => en,
        execute: () => a,
        fallbackHttpConfig: () => qr.R4,
        from: () => Mr,
        fromError: () => Nr.N,
        fromPromise: () => zr,
        getApolloContext: () => hn,
        gql: () => $r,
        isApolloError: () => Fe.Mn,
        isNetworkRequestSettled: () => qe,
        isReference: () => Oe.A_,
        makeReference: () => Oe.WU,
        makeVar: () => _t,
        mergeOptions: () => kt,
        operationName: () => kn,
        parseAndCheckHttpResponse: () => Fr.OQ,
        parser: () => Sn,
        resetApolloContext: () => pn,
        resetCaches: () => Xr,
        rewriteURIForGET: () => Ar.E,
        selectHttpOptionsAndBody: () => qr.Wz,
        selectHttpOptionsAndBodyInternal: () => qr.HY,
        selectURI: () => jr.z,
        serializeFetchParameter: () => Qr.Y,
        setLogVerbosity: () => Ur.Q9,
        skipToken: () => yi,
        split: () => Pr,
        throwServerError: () => Wr.A,
        toPromise: () => Lr,
        useApolloClient: () => vn,
        useBackgroundQuery: () => _i,
        useFragment: () => Hn,
        useLazyQuery: () => Un,
        useLoadableQuery: () => Ri,
        useMutation: () => Bn,
        useQuery: () => Pn,
        useQueryRefHandlers: () => Di,
        useReactiveVar: () => Gn,
        useReadQuery: () => Pi,
        useSubscription: () => Yn,
        useSuspenseFragment: () => Oi,
        useSuspenseQuery: () => vi
      });
      var n = r(78322),
        i = r(82966),
        o = r(21429),
        a = o.C.execute,
        s = r(48914),
        u = r(79958);
      const {
        toString: c,
        hasOwnProperty: l
      } = Object.prototype, f = Function.prototype.toString, h = new Map;

      function p(e, t) {
        try {
          return y(e, t)
        } finally {
          h.clear()
        }
      }
      const d = p;

      function y(e, t) {
        if (e === t) return !0;
        const r = c.call(e);
        if (r !== c.call(t)) return !1;
        switch (r) {
          case "[object Array]":
            if (e.length !== t.length) return !1;
          case "[object Object]": {
            if (b(e, t)) return !0;
            const r = v(e),
              n = v(t),
              i = r.length;
            if (i !== n.length) return !1;
            for (let e = 0; e < i; ++e)
              if (!l.call(t, r[e])) return !1;
            for (let n = 0; n < i; ++n) {
              const i = r[n];
              if (!y(e[i], t[i])) return !1
            }
            return !0
          }
          case "[object Error]":
            return e.name === t.name && e.message === t.message;
          case "[object Number]":
            if (e != e) return t != t;
          case "[object Boolean]":
          case "[object Date]":
            return +e == +t;
          case "[object RegExp]":
          case "[object String]":
            return e == `${t}`;
          case "[object Map]":
          case "[object Set]": {
            if (e.size !== t.size) return !1;
            if (b(e, t)) return !0;
            const n = e.entries(),
              i = "[object Map]" === r;
            for (;;) {
              const e = n.next();
              if (e.done) break;
              const [r, o] = e.value;
              if (!t.has(r)) return !1;
              if (i && !y(o, t.get(r))) return !1
            }
            return !0
          }
          case "[object Uint16Array]":
          case "[object Uint8Array]":
          case "[object Uint32Array]":
          case "[object Int32Array]":
          case "[object Int8Array]":
          case "[object Int16Array]":
          case "[object ArrayBuffer]":
            e = new Uint8Array(e), t = new Uint8Array(t);
          case "[object DataView]": {
            let r = e.byteLength;
            if (r === t.byteLength)
              for (; r-- && e[r] === t[r];);
            return -1 === r
          }
          case "[object AsyncFunction]":
          case "[object GeneratorFunction]":
          case "[object AsyncGeneratorFunction]":
          case "[object Function]": {
            const r = f.call(e);
            return r === f.call(t) && ! function(e, t) {
              const r = e.length - t.length;
              return r >= 0 && e.indexOf(t, r) === r
            }(r, m)
          }
        }
        return !1
      }

      function v(e) {
        return Object.keys(e).filter(g, e)
      }

      function g(e) {
        return void 0 !== this[e]
      }
      const m = "{ [native code] }";

      function b(e, t) {
        let r = h.get(e);
        if (r) {
          if (r.has(t)) return !0
        } else h.set(e, r = new Set);
        return r.add(t), !1
      }
      var _ = r(61102),
        w = r(45309),
        k = r(52827),
        S = r(85346),
        O = r(90564);
      const E = () => Object.create(null),
        {
          forEach: T,
          slice: R
        } = Array.prototype,
        {
          hasOwnProperty: D
        } = Object.prototype;
      class M {
        constructor(e = !0, t = E) {
          this.weakness = e, this.makeData = t
        }
        lookup() {
          return this.lookupArray(arguments)
        }
        lookupArray(e) {
          let t = this;
          return T.call(e, (e => t = t.getChildTrie(e))), D.call(t, "data") ? t.data : t.data = this.makeData(R.call(e))
        }
        peek() {
          return this.peekArray(arguments)
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            const n = t.mapFor(e[r], !1);
            t = n && n.get(e[r])
          }
          return t && t.data
        }
        remove() {
          return this.removeArray(arguments)
        }
        removeArray(e) {
          let t;
          if (e.length) {
            const r = e[0],
              n = this.mapFor(r, !1),
              i = n && n.get(r);
            i && (t = i.removeArray(R.call(e, 1)), i.data || i.weak || i.strong && i.strong.size || n.delete(r))
          } else t = this.data, delete this.data;
          return t
        }
        getChildTrie(e) {
          const t = this.mapFor(e, !0);
          let r = t.get(e);
          return r || t.set(e, r = new M(this.weakness, this.makeData)), r
        }
        mapFor(e, t) {
          return this.weakness && function(e) {
            switch (typeof e) {
              case "object":
                if (null === e) break;
              case "function":
                return !0
            }
            return !1
          }(e) ? this.weak || (t ? this.weak = new WeakMap : void 0) : this.strong || (t ? this.strong = new Map : void 0)
        }
      }
      var P = r(46026),
        C = r(81967),
        F = r(26753),
        Q = r(35394);
      let q = null;
      const x = {};
      let I = 1;

      function j(e) {
        try {
          return e()
        } catch (e) {}
      }
      const V = "@wry/context:Slot",
        A = j((() => globalThis)) || j((() => global)) || Object.create(null),
        N = A[V] || Array[V] || function(e) {
          try {
            Object.defineProperty(A, V, {
              value: e,
              enumerable: !1,
              writable: !1,
              configurable: !0
            })
          } finally {
            return e
          }
        }(class {
          constructor() {
            this.id = ["slot", I++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          hasValue() {
            for (let e = q; e; e = e.parent)
              if (this.id in e.slots) {
                const t = e.slots[this.id];
                if (t === x) break;
                return e !== q && (q.slots[this.id] = t), !0
              } return q && (q.slots[this.id] = x), !1
          }
          getValue() {
            if (this.hasValue()) return q.slots[this.id]
          }
          withValue(e, t, r, n) {
            const i = {
                __proto__: null,
                [this.id]: e
              },
              o = q;
            q = {
              parent: o,
              slots: i
            };
            try {
              return t.apply(n, r)
            } finally {
              q = o
            }
          }
          static bind(e) {
            const t = q;
            return function() {
              const r = q;
              try {
                return q = t, e.apply(this, arguments)
              } finally {
                q = r
              }
            }
          }
          static noContext(e, t, r) {
            if (!q) return e.apply(r, t); {
              const n = q;
              try {
                return q = null, e.apply(r, t)
              } finally {
                q = n
              }
            }
          }
        }),
        {
          bind: L,
          noContext: z
        } = N,
        W = new N,
        {
          hasOwnProperty: U
        } = Object.prototype,
        B = Array.from || function(e) {
          const t = [];
          return e.forEach((e => t.push(e))), t
        };

      function K(e) {
        const {
          unsubscribe: t
        } = e;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      const Y = [];

      function G(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function H(e, t) {
        const r = e.length;
        return r > 0 && r === t.length && e[r - 1] === t[r - 1]
      }

      function J(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1]
        }
      }

      function $(e) {
        return e.slice(0)
      }
      class X {
        constructor(e) {
          this.fn = e, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++X.count
        }
        peek() {
          if (1 === this.value.length && !te(this)) return Z(this), this.value[0]
        }
        recompute(e) {
          return G(!this.recomputing, "already recomputing"), Z(this), te(this) ? function(e, t) {
            return ue(e), W.withValue(e, ee, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  K(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, te(e) || ne(e)
              }(e), J(e.value)
          }(this, e) : J(this.value)
        }
        setDirty() {
          this.dirty || (this.dirty = !0, re(this), K(this))
        }
        dispose() {
          this.setDirty(), ue(this), ie(this, ((e, t) => {
            e.setDirty(), ce(e, this)
          }))
        }
        forget() {
          this.dispose()
        }
        dependOn(e) {
          e.add(this), this.deps || (this.deps = Y.pop() || new Set), this.deps.add(e)
        }
        forgetDeps() {
          this.deps && (B(this.deps).forEach((e => e.delete(this))), this.deps.clear(), Y.push(this.deps), this.deps = null)
        }
      }

      function Z(e) {
        const t = W.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), te(e) ? oe(t, e) : ae(t, e), t
      }

      function ee(e, t) {
        e.recomputing = !0;
        const {
          normalizeResult: r
        } = e;
        let n;
        r && 1 === e.value.length && (n = $(e.value)), e.value.length = 0;
        try {
          if (e.value[0] = e.fn.apply(null, t), r && n && !H(n, e.value)) try {
            e.value[0] = r(e.value[0], n[0])
          } catch (e) {}
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function te(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function re(e) {
        ie(e, oe)
      }

      function ne(e) {
        ie(e, ae)
      }

      function ie(e, t) {
        const r = e.parents.size;
        if (r) {
          const n = B(e.parents);
          for (let i = 0; i < r; ++i) t(n[i], e)
        }
      }

      function oe(e, t) {
        G(e.childValues.has(t)), G(te(t));
        const r = !te(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = Y.pop() || new Set;
        e.dirtyChildren.add(t), r && re(e)
      }

      function ae(e, t) {
        G(e.childValues.has(t)), G(!te(t));
        const r = e.childValues.get(t);
        0 === r.length ? e.childValues.set(t, $(t.value)) : H(r, t.value) || e.setDirty(), se(e, t), te(e) || ne(e)
      }

      function se(e, t) {
        const r = e.dirtyChildren;
        r && (r.delete(t), 0 === r.size && (Y.length < 100 && Y.push(r), e.dirtyChildren = null))
      }

      function ue(e) {
        e.childValues.size > 0 && e.childValues.forEach(((t, r) => {
          ce(e, r)
        })), e.forgetDeps(), G(null === e.dirtyChildren)
      }

      function ce(e, t) {
        t.parents.delete(e), e.childValues.delete(t), se(e, t)
      }
      X.count = 0;
      const le = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function fe(e) {
        const t = new Map,
          r = e && e.subscribe;

        function n(e) {
          const n = W.getValue();
          if (n) {
            let i = t.get(e);
            i || t.set(e, i = new Set), n.dependOn(i), "function" == typeof r && (K(i), i.unsubscribe = r(e))
          }
        }
        return n.dirty = function(e, r) {
          const n = t.get(e);
          if (n) {
            const i = r && U.call(le, r) ? r : "setDirty";
            B(n).forEach((e => e[i]())), t.delete(e), K(n)
          }
        }, n
      }
      let he;

      function pe(...e) {
        return (he || (he = new M("function" == typeof WeakMap))).lookupArray(e)
      }
      const de = new Set;

      function ye(e, {
        max: t = Math.pow(2, 16),
        keyArgs: r,
        makeCacheKey: n = pe,
        normalizeResult: i,
        subscribe: o,
        cache: a = Q.C
      } = Object.create(null)) {
        const s = "function" == typeof a ? new a(t, (e => e.dispose())) : a,
          u = function() {
            const t = n.apply(null, r ? r.apply(null, arguments) : arguments);
            if (void 0 === t) return e.apply(null, arguments);
            let a = s.get(t);
            a || (s.set(t, a = new X(e)), a.normalizeResult = i, a.subscribe = o, a.forget = () => s.delete(t));
            const u = a.recompute(Array.prototype.slice.call(arguments));
            return s.set(t, a), de.add(s), W.hasValue() || (de.forEach((e => e.clean())), de.clear()), u
          };

        function c(e) {
          const t = e && s.get(e);
          t && t.setDirty()
        }

        function l(e) {
          const t = e && s.get(e);
          if (t) return t.peek()
        }

        function f(e) {
          return !!e && s.delete(e)
        }
        return Object.defineProperty(u, "size", {
          get: () => s.size,
          configurable: !1,
          enumerable: !1
        }), Object.freeze(u.options = {
          max: t,
          keyArgs: r,
          makeCacheKey: n,
          normalizeResult: i,
          subscribe: o,
          cache: s
        }), u.dirtyKey = c, u.dirty = function() {
          c(n.apply(null, arguments))
        }, u.peekKey = l, u.peek = function() {
          return l(n.apply(null, arguments))
        }, u.forgetKey = f, u.forget = function() {
          return f(n.apply(null, arguments))
        }, u.makeCacheKey = n, u.getKey = r ? function() {
          return n.apply(null, r.apply(null, arguments))
        } : n, Object.freeze(u)
      }
      var ve = r(74197);

      function ge(e) {
        return e
      }
      var me = function() {
          function e(e, t) {
            void 0 === t && (t = Object.create(null)), this.resultCache = P.En ? new WeakSet : new Set, this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = !1 !== t.cache, this.resetCache()
          }
          return e.prototype.getCacheKey = function(e) {
            return [e]
          }, e.identity = function() {
            return new e(ge, {
              cache: !1
            })
          }, e.split = function(t, r, n) {
            return void 0 === n && (n = e.identity()), Object.assign(new e((function(e) {
              return (t(e) ? r : n).transformDocument(e)
            }), {
              cache: !1
            }), {
              left: r,
              right: n
            })
          }, e.prototype.resetCache = function() {
            var t = this;
            if (this.cached) {
              var r = new M(P.et);
              this.performWork = ye(e.prototype.performWork.bind(this), {
                makeCacheKey: function(e) {
                  var n = t.getCacheKey(e);
                  if (n) return (0, i.V1)(Array.isArray(n), 77), r.lookupArray(n)
                },
                max: ve.v["documentTransform.cache"],
                cache: F.l
              })
            }
          }, e.prototype.performWork = function(e) {
            return (0, C.sw)(e), this.transform(e)
          }, e.prototype.transformDocument = function(e) {
            if (this.resultCache.has(e)) return e;
            var t = this.performWork(e);
            return this.resultCache.add(t), t
          }, e.prototype.concat = function(t) {
            var r = this;
            return Object.assign(new e((function(e) {
              return t.transformDocument(r.transformDocument(e))
            }), {
              cache: !1
            }), {
              left: this,
              right: t
            })
          }, e
        }(),
        be = r(57308);

      function _e(e, t, r) {
        return new be.c((function(n) {
          var i = {
            then: function(e) {
              return new Promise((function(t) {
                return t(e())
              }))
            }
          };

          function o(e, t) {
            return function(r) {
              if (e) {
                var o = function() {
                  return n.closed ? 0 : e(r)
                };
                i = i.then(o, o).then((function(e) {
                  return n.next(e)
                }), (function(e) {
                  return n.error(e)
                }))
              } else n[t](r)
            }
          }
          var a = {
              next: o(t, "next"),
              error: o(r, "error"),
              complete: function() {
                i.then((function() {
                  return n.complete()
                }))
              }
            },
            s = e.subscribe(a);
          return function() {
            return s.unsubscribe()
          }
        }))
      }
      var we = r(7569);

      function ke(e) {
        var t = Se(e);
        return (0, we.E)(t)
      }

      function Se(e) {
        var t = (0, we.E)(e.errors) ? e.errors.slice(0) : [];
        return (0, _.ST)(e) && (0, we.E)(e.incremental) && e.incremental.forEach((function(e) {
          e.errors && t.push.apply(t, e.errors)
        })), t
      }
      var Oe = r(39493),
        Ee = r(26871),
        Te = r(35907);

      function Re(e, t, r) {
        var n = [];
        e.forEach((function(e) {
          return e[t] && n.push(e)
        })), n.forEach((function(e) {
          return e[t](r)
        }))
      }

      function De(e) {
        function t(t) {
          Object.defineProperty(e, t, {
            value: be.c
          })
        }
        return P.ol && Symbol.species && t(Symbol.species), t("@@species"), e
      }

      function Me(e) {
        return e && "function" == typeof e.then
      }
      var Pe = function(e) {
        function t(t) {
          var r = e.call(this, (function(e) {
            return r.addObserver(e),
              function() {
                return r.removeObserver(e)
              }
          })) || this;
          return r.observers = new Set, r.promise = new Promise((function(e, t) {
            r.resolve = e, r.reject = t
          })), r.handlers = {
            next: function(e) {
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), Re(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout((function() {
                return t.unsubscribe()
              })), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), Re(r.observers, "error", e))
            },
            complete: function() {
              var e = r,
                t = e.sub,
                n = e.sources;
              if (null !== t) {
                var i = (void 0 === n ? [] : n).shift();
                i ? Me(i) ? i.then((function(e) {
                  return r.sub = e.subscribe(r.handlers)
                }), r.handlers.error) : r.sub = i.subscribe(r.handlers) : (t && setTimeout((function() {
                  return t.unsubscribe()
                })), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), Re(r.observers, "complete"))
              }
            }
          }, r.nextResultListeners = new Set, r.cancel = function(e) {
            r.reject(e), r.sources = [], r.handlers.error(e)
          }, r.promise.catch((function(e) {})), "function" == typeof t && (t = [new be.c(t)]), Me(t) ? t.then((function(e) {
            return r.start(e)
          }), r.handlers.error) : r.start(t), r
        }
        return (0, n.__extends)(t, e), t.prototype.start = function(e) {
          void 0 === this.sub && (this.sources = Array.from(e), this.handlers.complete())
        }, t.prototype.deliverLastMessage = function(e) {
          if (this.latest) {
            var t = this.latest[0],
              r = e[t];
            r && r.call(e, this.latest[1]), null === this.sub && "next" === t && e.complete && e.complete()
          }
        }, t.prototype.addObserver = function(e) {
          this.observers.has(e) || (this.deliverLastMessage(e), this.observers.add(e))
        }, t.prototype.removeObserver = function(e) {
          this.observers.delete(e) && this.observers.size < 1 && this.handlers.complete()
        }, t.prototype.notify = function(e, t) {
          var r = this.nextResultListeners;
          r.size && (this.nextResultListeners = new Set, r.forEach((function(r) {
            return r(e, t)
          })))
        }, t.prototype.beforeNext = function(e) {
          var t = !1;
          this.nextResultListeners.add((function(r, n) {
            t || (t = !0, e(r, n))
          }))
        }, t
      }(be.c);
      De(Pe);
      var Ce, Fe = r(4548);

      function Qe(e) {
        return !!e && e < 7
      }

      function qe(e) {
        return 7 === e || 8 === e
      }! function(e) {
        e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error"
      }(Ce || (Ce = {}));
      var xe = r(86570),
        Ie = Object.prototype.toString;

      function je(e) {
        return Ve(e)
      }

      function Ve(e, t) {
        switch (Ie.call(e)) {
          case "[object Array]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var r = e.slice(0);
            return t.set(e, r), r.forEach((function(e, n) {
              r[n] = Ve(e, t)
            })), r;
          case "[object Object]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var n = Object.create(Object.getPrototypeOf(e));
            return t.set(e, n), Object.keys(e).forEach((function(r) {
              n[r] = Ve(e[r], t)
            })), n;
          default:
            return e
        }
      }

      function Ae(e, t, r, i) {
        var o = t.data,
          a = (0, n.__rest)(t, ["data"]),
          s = r.data,
          u = (0, n.__rest)(r, ["data"]);
        return d(a, u) && Ne((0, C.Vn)(e).selectionSet, o, s, {
          fragmentMap: (0, S.JG)((0, C.zK)(e)),
          variables: i
        })
      }

      function Ne(e, t, r, n) {
        if (t === r) return !0;
        var i = new Set;
        return e.selections.every((function(e) {
          if (i.has(e)) return !0;
          if (i.add(e), !(0, w.MS)(e, n.variables)) return !0;
          if (Le(e)) return !0;
          if ((0, Oe.dt)(e)) {
            var o = (0, Oe.ue)(e),
              a = t && t[o],
              s = r && r[o],
              u = e.selectionSet;
            if (!u) return d(a, s);
            var c = Array.isArray(a),
              l = Array.isArray(s);
            if (c !== l) return !1;
            if (c && l) {
              var f = a.length;
              if (s.length !== f) return !1;
              for (var h = 0; h < f; ++h)
                if (!Ne(u, a[h], s[h], n)) return !1;
              return !0
            }
            return Ne(u, a, s, n)
          }
          var p = (0, S.HQ)(e, n.fragmentMap);
          return p ? !!Le(p) || Ne(p.selectionSet, t, r, n) : void 0
        }))
      }

      function Le(e) {
        return !!e.directives && e.directives.some(ze)
      }

      function ze(e) {
        return "nonreactive" === e.name.value
      }
      var We = Object.assign,
        Ue = Object.hasOwnProperty,
        Be = function(e) {
          function t(r) {
            var i = r.queryManager,
              o = r.queryInfo,
              a = r.options,
              s = this,
              u = t.inactiveOnCreation.getValue();
            (s = e.call(this, (function(e) {
              u && (i.queries.set(s.queryId, o), u = !1);
              try {
                var t = e._subscription._observer;
                t && !t.error && (t.error = Ke)
              } catch (e) {}
              var r = !s.observers.size;
              s.observers.add(e);
              var n = s.last;
              return n && n.error ? e.error && e.error(n.error) : n && n.result && e.next && e.next(s.maskResult(n.result)), r && s.reobserve().catch((function() {})),
                function() {
                  s.observers.delete(e) && !s.observers.size && s.tearDownQuery()
                }
            })) || this).observers = new Set, s.subscriptions = new Set, s.dirty = !1, s.queryInfo = o, s.queryManager = i, s.waitForOwnResult = Ge(a.fetchPolicy), s.isTornDown = !1, s.subscribeToMore = s.subscribeToMore.bind(s), s.maskResult = s.maskResult.bind(s);
            var c = i.defaultOptions.watchQuery,
              l = (void 0 === c ? {} : c).fetchPolicy,
              f = void 0 === l ? "cache-first" : l,
              h = a.fetchPolicy,
              p = void 0 === h ? f : h,
              d = a.initialFetchPolicy,
              y = void 0 === d ? "standby" === p ? f : p : d;
            s.options = (0, n.__assign)((0, n.__assign)({}, a), {
              initialFetchPolicy: y,
              fetchPolicy: p
            }), s.queryId = o.queryId || i.generateQueryId();
            var v = (0, C.Vu)(s.query);
            return s.queryName = v && v.name && v.name.value, s
          }
          return (0, n.__extends)(t, e), Object.defineProperty(t.prototype, "query", {
            get: function() {
              return this.lastQuery || this.options.query
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(t.prototype, "variables", {
            get: function() {
              return this.options.variables
            },
            enumerable: !1,
            configurable: !0
          }), t.prototype.result = function() {
            var e = this;
            return new Promise((function(t, r) {
              var n = {
                  next: function(r) {
                    t(r), e.observers.delete(n), e.observers.size || e.queryManager.removeQuery(e.queryId), setTimeout((function() {
                      i.unsubscribe()
                    }), 0)
                  },
                  error: r
                },
                i = e.subscribe(n)
            }))
          }, t.prototype.resetDiff = function() {
            this.queryInfo.resetDiff()
          }, t.prototype.getCurrentFullResult = function(e) {
            void 0 === e && (e = !0);
            var t = this.getLastResult(!0),
              r = this.queryInfo.networkStatus || t && t.networkStatus || Ce.ready,
              i = (0, n.__assign)((0, n.__assign)({}, t), {
                loading: Qe(r),
                networkStatus: r
              }),
              o = this.options.fetchPolicy,
              a = void 0 === o ? "cache-first" : o;
            if (Ge(a) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var s = this.queryInfo.getDiff();
              (s.complete || this.options.returnPartialData) && (i.data = s.result), p(i.data, {}) && (i.data = void 0), s.complete ? (delete i.partial, !s.complete || i.networkStatus !== Ce.loading || "cache-first" !== a && "cache-only" !== a || (i.networkStatus = Ce.ready, i.loading = !1)) : i.partial = !0, i.networkStatus === Ce.ready && (i.error || i.errors) && (i.networkStatus = Ce.error), !1 === globalThis.__DEV__ || s.complete || this.options.partialRefetch || i.loading || i.data || i.error || Ye(s.missing)
            }
            return e && this.updateLastResult(i), i
          }, t.prototype.getCurrentResult = function(e) {
            return void 0 === e && (e = !0), this.maskResult(this.getCurrentFullResult(e))
          }, t.prototype.isDifferentFromLastResult = function(e, t) {
            if (!this.last) return !0;
            var r = this.queryManager.getDocumentInfo(this.query),
              n = this.queryManager.dataMasking,
              i = n ? r.nonReactiveQuery : this.query;
            return (n || r.hasNonreactiveDirective ? !Ae(i, this.last.result, e, this.variables) : !p(this.last.result, e)) || t && !p(this.last.variables, t)
          }, t.prototype.getLast = function(e, t) {
            var r = this.last;
            if (r && r[e] && (!t || p(r.variables, this.variables))) return r[e]
          }, t.prototype.getLastResult = function(e) {
            return this.getLast("result", e)
          }, t.prototype.getLastError = function(e) {
            return this.getLast("error", e)
          }, t.prototype.resetLastResults = function() {
            delete this.last, this.isTornDown = !1
          }, t.prototype.resetQueryStoreErrors = function() {
            this.queryManager.resetErrors(this.queryId)
          }, t.prototype.refetch = function(e) {
            var t, r = {
                pollInterval: 0
              },
              o = this.options.fetchPolicy;
            if (r.fetchPolicy = "no-cache" === o ? "no-cache" : "network-only", !1 !== globalThis.__DEV__ && e && Ue.call(e, "variables")) {
              var a = (0, C.AT)(this.query),
                s = a.variableDefinitions;
              s && s.some((function(e) {
                return "variables" === e.variable.name.value
              })) || !1 !== globalThis.__DEV__ && i.V1.warn(21, e, (null === (t = a.name) || void 0 === t ? void 0 : t.value) || a)
            }
            return e && !p(this.options.variables, e) && (r.variables = this.options.variables = (0, n.__assign)((0, n.__assign)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(r, Ce.refetch)
          }, t.prototype.fetchMore = function(e) {
            var t = this,
              r = (0, n.__assign)((0, n.__assign)({}, e.query ? e : (0, n.__assign)((0, n.__assign)((0, n.__assign)((0, n.__assign)({}, this.options), {
                query: this.options.query
              }), e), {
                variables: (0, n.__assign)((0, n.__assign)({}, this.options.variables), e.variables)
              })), {
                fetchPolicy: "no-cache"
              });
            r.query = this.transformDocument(r.query);
            var o = this.queryManager.generateQueryId();
            this.lastQuery = e.query ? this.transformDocument(this.options.query) : r.query;
            var a = this.queryInfo,
              s = a.networkStatus;
            a.networkStatus = Ce.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
            var u = new Set,
              c = null == e ? void 0 : e.updateQuery,
              l = "no-cache" !== this.options.fetchPolicy;
            return l || (0, i.V1)(c, 22), this.queryManager.fetchQuery(o, r, Ce.fetchMore).then((function(i) {
              if (t.queryManager.removeQuery(o), a.networkStatus === Ce.fetchMore && (a.networkStatus = s), l) t.queryManager.cache.batch({
                update: function(n) {
                  var o = e.updateQuery;
                  o ? n.updateQuery({
                    query: t.query,
                    variables: t.variables,
                    returnPartialData: !0,
                    optimistic: !1
                  }, (function(e) {
                    return o(e, {
                      fetchMoreResult: i.data,
                      variables: r.variables
                    })
                  })) : n.writeQuery({
                    query: r.query,
                    variables: r.variables,
                    data: i.data
                  })
                },
                onWatchUpdated: function(e) {
                  u.add(e.query)
                }
              });
              else {
                var f = t.getLast("result"),
                  h = c(f.data, {
                    fetchMoreResult: i.data,
                    variables: r.variables
                  });
                t.reportResult((0, n.__assign)((0, n.__assign)({}, f), {
                  networkStatus: s,
                  loading: Qe(s),
                  data: h
                }), t.variables)
              }
              return t.maskResult(i)
            })).finally((function() {
              l && !u.has(t.query) && t.reobserveCacheFirst()
            }))
          }, t.prototype.subscribeToMore = function(e) {
            var t = this,
              r = this.queryManager.startGraphQLSubscription({
                query: e.document,
                variables: e.variables,
                context: e.context
              }).subscribe({
                next: function(r) {
                  var i = e.updateQuery;
                  i && t.updateQuery((function(e, t) {
                    return i(e, (0, n.__assign)({
                      subscriptionData: r
                    }, t))
                  }))
                },
                error: function(t) {
                  e.onError ? e.onError(t) : !1 !== globalThis.__DEV__ && i.V1.error(23, t)
                }
              });
            return this.subscriptions.add(r),
              function() {
                t.subscriptions.delete(r) && r.unsubscribe()
              }
          }, t.prototype.setOptions = function(e) {
            return this.reobserve(e)
          }, t.prototype.silentSetOptions = function(e) {
            var t = (0, xe.o)(this.options, e || {});
            We(this.options, t)
          }, t.prototype.setVariables = function(e) {
            return p(this.variables, e) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
              fetchPolicy: this.options.initialFetchPolicy,
              variables: e
            }, Ce.setVariables) : Promise.resolve())
          }, t.prototype.updateQuery = function(e) {
            var t = this.queryManager,
              r = t.cache.diff({
                query: this.options.query,
                variables: this.variables,
                returnPartialData: !0,
                optimistic: !1
              }),
              n = r.result,
              i = r.complete,
              o = e(n, {
                variables: this.variables,
                complete: !!i,
                previousData: n
              });
            o && (t.cache.writeQuery({
              query: this.options.query,
              data: o,
              variables: this.variables
            }), t.broadcastQueries())
          }, t.prototype.startPolling = function(e) {
            this.options.pollInterval = e, this.updatePolling()
          }, t.prototype.stopPolling = function() {
            this.options.pollInterval = 0, this.updatePolling()
          }, t.prototype.applyNextFetchPolicy = function(e, t) {
            if (t.nextFetchPolicy) {
              var r = t.fetchPolicy,
                n = void 0 === r ? "cache-first" : r,
                i = t.initialFetchPolicy,
                o = void 0 === i ? n : i;
              "standby" === n || ("function" == typeof t.nextFetchPolicy ? t.fetchPolicy = t.nextFetchPolicy(n, {
                reason: e,
                options: t,
                observable: this,
                initialFetchPolicy: o
              }) : t.fetchPolicy = "variables-changed" === e ? o : t.nextFetchPolicy)
            }
            return t.fetchPolicy
          }, t.prototype.fetch = function(e, t, r) {
            var n = this.queryManager.getOrCreateQuery(this.queryId);
            return n.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(n, e, t, r)
          }, t.prototype.updatePolling = function() {
            var e = this;
            if (!this.queryManager.ssrMode) {
              var t = this.pollingInfo,
                r = this.options.pollInterval;
              if (r && this.hasObservers()) {
                if (!t || t.interval !== r) {
                  (0, i.V1)(r, 24), (t || (this.pollingInfo = {})).interval = r;
                  var n = function() {
                      var t, r;
                      e.pollingInfo && (Qe(e.queryInfo.networkStatus) || (null === (r = (t = e.options).skipPollAttempt) || void 0 === r ? void 0 : r.call(t)) ? o() : e.reobserve({
                        fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only"
                      }, Ce.poll).then(o, o))
                    },
                    o = function() {
                      var t = e.pollingInfo;
                      t && (clearTimeout(t.timeout), t.timeout = setTimeout(n, t.interval))
                    };
                  o()
                }
              } else t && (clearTimeout(t.timeout), delete this.pollingInfo)
            }
          }, t.prototype.updateLastResult = function(e, t) {
            void 0 === t && (t = this.variables);
            var r = this.getLastError();
            return r && this.last && !p(t, this.last.variables) && (r = void 0), this.last = (0, n.__assign)({
              result: this.queryManager.assumeImmutableResults ? e : je(e),
              variables: t
            }, r ? {
              error: r
            } : null)
          }, t.prototype.reobserveAsConcast = function(e, t) {
            var r = this;
            this.isTornDown = !1;
            var i = t === Ce.refetch || t === Ce.fetchMore || t === Ce.poll,
              o = this.options.variables,
              a = this.options.fetchPolicy,
              s = (0, xe.o)(this.options, e || {}),
              u = i ? s : We(this.options, s),
              c = this.transformDocument(u.query);
            this.lastQuery = c, i || (this.updatePolling(), !e || !e.variables || p(e.variables, o) || "standby" === u.fetchPolicy || u.fetchPolicy !== a && "function" != typeof u.nextFetchPolicy || (this.applyNextFetchPolicy("variables-changed", u), void 0 === t && (t = Ce.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = Ge(u.fetchPolicy));
            var l = function() {
                r.concast === d && (r.waitForOwnResult = !1)
              },
              f = u.variables && (0, n.__assign)({}, u.variables),
              h = this.fetch(u, t, c),
              d = h.concast,
              y = h.fromLink,
              v = {
                next: function(e) {
                  p(r.variables, f) && (l(), r.reportResult(e, f))
                },
                error: function(e) {
                  p(r.variables, f) && ((0, Fe.Mn)(e) || (e = new Fe.K4({
                    networkError: e
                  })), l(), r.reportError(e, f))
                }
              };
            return i || !y && this.concast || (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = d, this.observer = v), d.addObserver(v), d
          }, t.prototype.reobserve = function(e, t) {
            return (r = this.reobserveAsConcast(e, t).promise.then(this.maskResult)).catch((function() {})), r;
            var r
          }, t.prototype.resubscribeAfterError = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            var r = this.last;
            this.resetLastResults();
            var n = this.subscribe.apply(this, e);
            return this.last = r, n
          }, t.prototype.observe = function() {
            this.reportResult(this.getCurrentFullResult(!1), this.variables)
          }, t.prototype.reportResult = function(e, t) {
            var r = this.getLastError(),
              n = this.isDifferentFromLastResult(e, t);
            (r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (r || n) && Re(this.observers, "next", this.maskResult(e))
          }, t.prototype.reportError = function(e, t) {
            var r = (0, n.__assign)((0, n.__assign)({}, this.getLastResult()), {
              error: e,
              errors: e.graphQLErrors,
              networkStatus: Ce.error,
              loading: !1
            });
            this.updateLastResult(r, t), Re(this.observers, "error", this.last.error = e)
          }, t.prototype.hasObservers = function() {
            return this.observers.size > 0
          }, t.prototype.tearDownQuery = function() {
            this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach((function(e) {
              return e.unsubscribe()
            })), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
          }, t.prototype.transformDocument = function(e) {
            return this.queryManager.transform(e)
          }, t.prototype.maskResult = function(e) {
            return e && "data" in e ? (0, n.__assign)((0, n.__assign)({}, e), {
              data: this.queryManager.maskOperation({
                document: this.query,
                data: e.data,
                fetchPolicy: this.options.fetchPolicy,
                id: this.queryId
              })
            }) : e
          }, t.prototype.resetNotifications = function() {
            this.cancelNotifyTimeout(), this.dirty = !1
          }, t.prototype.cancelNotifyTimeout = function() {
            this.notifyTimeout && (clearTimeout(this.notifyTimeout), this.notifyTimeout = void 0)
          }, t.prototype.scheduleNotify = function() {
            var e = this;
            this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout((function() {
              return e.notify()
            }), 0)))
          }, t.prototype.notify = function() {
            this.cancelNotifyTimeout(), this.dirty && ("cache-only" != this.options.fetchPolicy && "cache-and-network" != this.options.fetchPolicy && Qe(this.queryInfo.networkStatus) || (this.queryInfo.getDiff().fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst())), this.dirty = !1
          }, t.prototype.reobserveCacheFirst = function() {
            var e = this.options,
              t = e.fetchPolicy,
              r = e.nextFetchPolicy;
            return "cache-and-network" === t || "network-only" === t ? this.reobserve({
              fetchPolicy: "cache-first",
              nextFetchPolicy: function(e, n) {
                return this.nextFetchPolicy = r, "function" == typeof this.nextFetchPolicy ? this.nextFetchPolicy(e, n) : t
              }
            }) : this.reobserve()
          }, t.inactiveOnCreation = new N, t
        }(be.c);

      function Ke(e) {
        !1 !== globalThis.__DEV__ && i.V1.error(25, e.message, e.stack)
      }

      function Ye(e) {
        !1 !== globalThis.__DEV__ && e && !1 !== globalThis.__DEV__ && i.V1.debug(26, e)
      }

      function Ge(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }
      De(Be);
      var He = r(48169),
        Je = new(P.et ? WeakMap : Map);

      function $e(e, t) {
        var r = e[t];
        "function" == typeof r && (e[t] = function() {
          return Je.set(e, (Je.get(e) + 1) % 1e15), r.apply(this, arguments)
        })
      }
      var Xe = function() {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
          var r = this.cache = e.cache;
          Je.has(r) || (Je.set(r, 0), $e(r, "evict"), $e(r, "modify"), $e(r, "reset"))
        }
        return e.prototype.init = function(e) {
          var t = e.networkStatus || Ce.loading;
          return this.variables && this.networkStatus !== Ce.loading && !p(this.variables, e.variables) && (t = Ce.setVariables), p(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: t
          }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this
        }, e.prototype.resetDiff = function() {
          this.lastDiff = void 0
        }, e.prototype.getDiff = function() {
          var e = this.getDiffOptions();
          if (this.lastDiff && p(e, this.lastDiff.options)) return this.lastDiff.diff;
          this.updateWatch(this.variables);
          var t = this.observableQuery;
          if (t && "no-cache" === t.options.fetchPolicy) return {
            complete: !1
          };
          var r = this.cache.diff(e);
          return this.updateLastDiff(r, e), r
        }, e.prototype.updateLastDiff = function(e, t) {
          this.lastDiff = e ? {
            diff: e,
            options: t || this.getDiffOptions()
          } : void 0
        }, e.prototype.getDiffOptions = function(e) {
          var t;
          return void 0 === e && (e = this.variables), {
            query: this.document,
            variables: e,
            returnPartialData: !0,
            optimistic: !0,
            canonizeResults: null === (t = this.observableQuery) || void 0 === t ? void 0 : t.options.canonizeResults
          }
        }, e.prototype.setDiff = function(e) {
          var t, r, n = this.lastDiff && this.lastDiff.diff;
          e && !e.complete && (null === (t = this.observableQuery) || void 0 === t ? void 0 : t.getLastError()) || (this.updateLastDiff(e), p(n && n.result, e && e.result) || null === (r = this.observableQuery) || void 0 === r || r.scheduleNotify())
        }, e.prototype.setObservableQuery = function(e) {
          e !== this.observableQuery && (this.observableQuery = e, e && (e.queryInfo = this))
        }, e.prototype.stop = function() {
          var e;
          if (!this.stopped) {
            this.stopped = !0, null === (e = this.observableQuery) || void 0 === e || e.resetNotifications(), this.cancel();
            var t = this.observableQuery;
            t && t.stopPolling()
          }
        }, e.prototype.cancel = function() {
          var e;
          null === (e = this.cancelWatch) || void 0 === e || e.call(this), this.cancelWatch = void 0
        }, e.prototype.updateWatch = function(e) {
          var t = this;
          void 0 === e && (e = this.variables);
          var r = this.observableQuery;
          if (!r || "no-cache" !== r.options.fetchPolicy) {
            var i = (0, n.__assign)((0, n.__assign)({}, this.getDiffOptions(e)), {
              watcher: this,
              callback: function(e) {
                return t.setDiff(e)
              }
            });
            this.lastWatch && p(i, this.lastWatch) || (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i))
          }
        }, e.prototype.resetLastWrite = function() {
          this.lastWrite = void 0
        }, e.prototype.shouldWrite = function(e, t) {
          var r = this.lastWrite;
          return !(r && r.dmCount === Je.get(this.cache) && p(t, r.variables) && p(e.data, r.result.data))
        }, e.prototype.markResult = function(e, t, r, n) {
          var i, o = this,
            a = new He.ZI,
            s = (0, we.E)(e.errors) ? e.errors.slice(0) : [];
          if (null === (i = this.observableQuery) || void 0 === i || i.resetNotifications(), "incremental" in e && (0, we.E)(e.incremental)) {
            var u = (0, _.bd)(this.getDiff().result, e);
            e.data = u
          } else if ("hasNext" in e && e.hasNext) {
            var c = this.getDiff();
            e.data = a.merge(c.result, e.data)
          }
          this.graphQLErrors = s, "no-cache" === r.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
          }, this.getDiffOptions(r.variables)) : 0 !== n && (Ze(e, r.errorPolicy) ? this.cache.performTransaction((function(i) {
            if (o.shouldWrite(e, r.variables)) i.writeQuery({
              query: t,
              data: e.data,
              variables: r.variables,
              overwrite: 1 === n
            }), o.lastWrite = {
              result: e,
              variables: r.variables,
              dmCount: Je.get(o.cache)
            };
            else if (o.lastDiff && o.lastDiff.diff.complete) return void(e.data = o.lastDiff.diff.result);
            var a = o.getDiffOptions(r.variables),
              s = i.diff(a);
            !o.stopped && p(o.variables, r.variables) && o.updateWatch(r.variables), o.updateLastDiff(s, a), s.complete && (e.data = s.result)
          })) : this.lastWrite = void 0)
        }, e.prototype.markReady = function() {
          return this.networkError = null, this.networkStatus = Ce.ready
        }, e.prototype.markError = function(e) {
          var t;
          return this.networkStatus = Ce.error, this.lastWrite = void 0, null === (t = this.observableQuery) || void 0 === t || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function Ze(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !ke(e);
        return !n && r && e.data && (n = !0), n
      }
      var et = r(35588),
        tt = r(15492),
        rt = r(16565);

      function nt(e) {
        return !1 !== globalThis.__DEV__ && (t = e, (r = new Set([t])).forEach((function(e) {
          (0, Ee.U)(e) && function(e) {
            if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e)) try {
              Object.freeze(e)
            } catch (e) {
              if (e instanceof TypeError) return null;
              throw e
            }
            return e
          }(e) === e && Object.getOwnPropertyNames(e).forEach((function(t) {
            (0, Ee.U)(e[t]) && r.add(e[t])
          }))
        }))), e;
        var t, r
      }
      var it = P.et ? WeakMap : Map,
        ot = P.En ? WeakSet : Set,
        at = new N,
        st = !1;

      function ut() {
        st || (st = !0, !1 !== globalThis.__DEV__ && i.V1.warn(52))
      }

      function ct(e, t, r) {
        return at.withValue(!0, (function() {
          var n = lt(e, t, r, !1);
          return Object.isFrozen(e) && nt(n), n
        }))
      }

      function lt(e, t, r, n, o) {
        var a, s = r.knownChanged,
          u = function(e, t) {
            if (t.has(e)) return t.get(e);
            var r = Array.isArray(e) ? [] : Object.create(null);
            return t.set(e, r), r
          }(e, r.mutableTargets);
        if (Array.isArray(e)) {
          for (var c = 0, l = Array.from(e.entries()); c < l.length; c++) {
            var f = l[c],
              h = f[0],
              p = f[1];
            if (null !== p) {
              var d = lt(p, t, r, n, !1 !== globalThis.__DEV__ ? "".concat(o || "", "[").concat(h, "]") : void 0);
              s.has(d) && s.add(u), u[h] = d
            } else u[h] = null
          }
          return s.has(u) ? u : e
        }
        for (var y = 0, v = t.selections; y < v.length; y++) {
          var g = v[y],
            m = void 0;
          if (n && s.add(u), g.kind === rt.Kind.FIELD) {
            var b = (0, Oe.ue)(g),
              _ = g.selectionSet;
            if (void 0 === (m = u[b] || e[b])) continue;
            _ && null !== m && (d = lt(e[b], _, r, n, !1 !== globalThis.__DEV__ ? "".concat(o || "", ".").concat(b) : void 0), s.has(d) && (m = d)), !1 === globalThis.__DEV__ && (u[b] = m), !1 !== globalThis.__DEV__ && (n && "__typename" !== b && !(null === (a = Object.getOwnPropertyDescriptor(u, b)) || void 0 === a ? void 0 : a.value) ? Object.defineProperty(u, b, ft(b, m, o || "", r.operationName, r.operationType)) : (delete u[b], u[b] = m))
          }
          if (g.kind !== rt.Kind.INLINE_FRAGMENT || g.typeCondition && !r.cache.fragmentMatches(g, e.__typename) || (m = lt(e, g.selectionSet, r, n, o)), g.kind === rt.Kind.FRAGMENT_SPREAD) {
            var k = g.name.value,
              S = r.fragmentMap[k] || (r.fragmentMap[k] = r.cache.lookupFragment(k));
            (0, i.V1)(S, 47, k);
            var O = (0, w.s7)(g);
            "mask" !== O && (m = lt(e, S.selectionSet, r, "migrate" === O, o))
          }
          s.has(m) && s.add(u)
        }
        return "__typename" in e && !("__typename" in u) && (u.__typename = e.__typename), Object.keys(u).length !== Object.keys(e).length && s.add(u), s.has(u) ? u : e
      }

      function ft(e, t, r, n, o) {
        var a = function() {
          return at.getValue() || (!1 !== globalThis.__DEV__ && i.V1.warn(48, n ? "".concat(o, " '").concat(n, "'") : "anonymous ".concat(o), "".concat(r, ".").concat(e).replace(/^\./, "")), a = function() {
            return t
          }), t
        };
        return {
          get: function() {
            return a()
          },
          set: function(e) {
            a = function() {
              return e
            }
          },
          enumerable: !0,
          configurable: !0
        }
      }

      function ht(e, t, r, n) {
        if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && ut(), e;
        var o = t.definitions.filter((function(e) {
          return e.kind === rt.Kind.FRAGMENT_DEFINITION
        }));
        void 0 === n && ((0, i.V1)(1 === o.length, 49, o.length), n = o[0].name.value);
        var a = o.find((function(e) {
          return e.name.value === n
        }));
        return (0, i.V1)(!!a, 50, n), null == e || d(e, {}) ? e : ct(e, a.selectionSet, {
          operationType: "fragment",
          operationName: a.name.value,
          fragmentMap: (0, S.JG)((0, C.zK)(t)),
          cache: r,
          mutableTargets: new it,
          knownChanged: new ot
        })
      }
      var pt = Object.prototype.hasOwnProperty,
        dt = Object.create(null),
        yt = function() {
          function e(e) {
            var t = this;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new tt.A(ve.v["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new M(!1), this.noCacheWarningsByQueryId = new Set;
            var r = new me((function(e) {
              return t.cache.transformDocument(e)
            }), {
              cache: !1
            });
            this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking;
            var n = e.documentTransform;
            this.documentTransform = n ? r.concat(n).concat(r) : r, this.defaultContext = e.defaultContext || Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = Object.create(null))
          }
          return e.prototype.stop = function() {
            var e = this;
            this.queries.forEach((function(t, r) {
              e.stopQueryNoBroadcast(r)
            })), this.cancelPendingFetches((0, i.vA)(27))
          }, e.prototype.cancelPendingFetches = function(e) {
            this.fetchCancelFns.forEach((function(t) {
              return t(e)
            })), this.fetchCancelFns.clear()
          }, e.prototype.mutate = function(e) {
            return (0, n.__awaiter)(this, arguments, void 0, (function(e) {
              var t, r, o, a, s, u, c, l = e.mutation,
                f = e.variables,
                h = e.optimisticResponse,
                p = e.updateQueries,
                d = e.refetchQueries,
                y = void 0 === d ? [] : d,
                v = e.awaitRefetchQueries,
                g = void 0 !== v && v,
                m = e.update,
                b = e.onQueryUpdated,
                _ = e.fetchPolicy,
                w = void 0 === _ ? (null === (u = this.defaultOptions.mutate) || void 0 === u ? void 0 : u.fetchPolicy) || "network-only" : _,
                k = e.errorPolicy,
                S = void 0 === k ? (null === (c = this.defaultOptions.mutate) || void 0 === c ? void 0 : c.errorPolicy) || "none" : k,
                O = e.keepRootFields,
                E = e.context;
              return (0, n.__generator)(this, (function(e) {
                switch (e.label) {
                  case 0:
                    return (0, i.V1)(l, 28), (0, i.V1)("network-only" === w || "no-cache" === w, 29), t = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), r = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), r ? [4, this.localState.addExportedVariables(l, f, E)] : [3, 2];
                  case 1:
                    f = e.sent(), e.label = 2;
                  case 2:
                    return o = this.mutationStore && (this.mutationStore[t] = {
                      mutation: l,
                      variables: f,
                      loading: !0,
                      error: null
                    }), a = h && this.markMutationOptimistic(h, {
                      mutationId: t,
                      document: l,
                      variables: f,
                      fetchPolicy: w,
                      errorPolicy: S,
                      context: E,
                      updateQueries: p,
                      update: m,
                      keepRootFields: O
                    }), this.broadcastQueries(), s = this, [2, new Promise((function(e, r) {
                      return _e(s.getObservableFromLink(l, (0, n.__assign)((0, n.__assign)({}, E), {
                        optimisticResponse: a ? h : void 0
                      }), f, {}, !1), (function(e) {
                        if (ke(e) && "none" === S) throw new Fe.K4({
                          graphQLErrors: Se(e)
                        });
                        o && (o.loading = !1, o.error = null);
                        var r = (0, n.__assign)({}, e);
                        return "function" == typeof y && (y = y(r)), "ignore" === S && ke(r) && delete r.errors, s.markMutationResult({
                          mutationId: t,
                          result: r,
                          document: l,
                          variables: f,
                          fetchPolicy: w,
                          errorPolicy: S,
                          context: E,
                          update: m,
                          updateQueries: p,
                          awaitRefetchQueries: g,
                          refetchQueries: y,
                          removeOptimistic: a ? t : void 0,
                          onQueryUpdated: b,
                          keepRootFields: O
                        })
                      })).subscribe({
                        next: function(r) {
                          s.broadcastQueries(), "hasNext" in r && !1 !== r.hasNext || e((0, n.__assign)((0, n.__assign)({}, r), {
                            data: s.maskOperation({
                              document: l,
                              data: r.data,
                              fetchPolicy: w,
                              id: t
                            })
                          }))
                        },
                        error: function(e) {
                          o && (o.loading = !1, o.error = e), a && s.cache.removeOptimistic(t), s.broadcastQueries(), r(e instanceof Fe.K4 ? e : new Fe.K4({
                            networkError: e
                          }))
                        }
                      })
                    }))]
                }
              }))
            }))
          }, e.prototype.markMutationResult = function(e, t) {
            var r = this;
            void 0 === t && (t = this.cache);
            var i = e.result,
              o = [],
              a = "no-cache" === e.fetchPolicy;
            if (!a && Ze(i, e.errorPolicy)) {
              if ((0, _.ST)(i) || o.push({
                  result: i.data,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }), (0, _.ST)(i) && (0, we.E)(i.incremental)) {
                var s = t.diff({
                    id: "ROOT_MUTATION",
                    query: this.getDocumentInfo(e.document).asQuery,
                    variables: e.variables,
                    optimistic: !1,
                    returnPartialData: !0
                  }),
                  u = void 0;
                s.result && (u = (0, _.bd)(s.result, i)), void 0 !== u && (i.data = u, o.push({
                  result: u,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }))
              }
              var c = e.updateQueries;
              c && this.queries.forEach((function(e, n) {
                var a = e.observableQuery,
                  s = a && a.queryName;
                if (s && pt.call(c, s)) {
                  var u = c[s],
                    l = r.queries.get(n),
                    f = l.document,
                    h = l.variables,
                    p = t.diff({
                      query: f,
                      variables: h,
                      returnPartialData: !0,
                      optimistic: !1
                    }),
                    d = p.result;
                  if (p.complete && d) {
                    var y = u(d, {
                      mutationResult: i,
                      queryName: f && (0, C.n4)(f) || void 0,
                      queryVariables: h
                    });
                    y && o.push({
                      result: y,
                      dataId: "ROOT_QUERY",
                      query: f,
                      variables: h
                    })
                  }
                }
              }))
            }
            if (o.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
              var l = [];
              if (this.refetchQueries({
                  updateCache: function(t) {
                    a || o.forEach((function(e) {
                      return t.write(e)
                    }));
                    var s = e.update,
                      u = !(0, _.YX)(i) || (0, _.ST)(i) && !i.hasNext;
                    if (s) {
                      if (!a) {
                        var c = t.diff({
                          id: "ROOT_MUTATION",
                          query: r.getDocumentInfo(e.document).asQuery,
                          variables: e.variables,
                          optimistic: !1,
                          returnPartialData: !0
                        });
                        c.complete && ("incremental" in (i = (0, n.__assign)((0, n.__assign)({}, i), {
                          data: c.result
                        })) && delete i.incremental, "hasNext" in i && delete i.hasNext)
                      }
                      u && s(t, i, {
                        context: e.context,
                        variables: e.variables
                      })
                    }
                    a || e.keepRootFields || !u || t.modify({
                      id: "ROOT_MUTATION",
                      fields: function(e, t) {
                        var r = t.fieldName,
                          n = t.DELETE;
                        return "__typename" === r ? e : n
                      }
                    })
                  },
                  include: e.refetchQueries,
                  optimistic: !1,
                  removeOptimistic: e.removeOptimistic,
                  onQueryUpdated: e.onQueryUpdated || null
                }).forEach((function(e) {
                  return l.push(e)
                })), e.awaitRefetchQueries || e.onQueryUpdated) return Promise.all(l).then((function() {
                return i
              }))
            }
            return Promise.resolve(i)
          }, e.prototype.markMutationOptimistic = function(e, t) {
            var r = this,
              o = "function" == typeof e ? e(t.variables, {
                IGNORE: dt
              }) : e;
            return o !== dt && (this.cache.recordOptimisticTransaction((function(e) {
              try {
                r.markMutationResult((0, n.__assign)((0, n.__assign)({}, t), {
                  result: {
                    data: o
                  }
                }), e)
              } catch (e) {
                !1 !== globalThis.__DEV__ && i.V1.error(e)
              }
            }), t.mutationId), !0)
          }, e.prototype.fetchQuery = function(e, t, r) {
            return this.fetchConcastWithInfo(this.getOrCreateQuery(e), t, r).concast.promise
          }, e.prototype.getQueryStore = function() {
            var e = Object.create(null);
            return this.queries.forEach((function(t, r) {
              e[r] = {
                variables: t.variables,
                networkStatus: t.networkStatus,
                networkError: t.networkError,
                graphQLErrors: t.graphQLErrors
              }
            })), e
          }, e.prototype.resetErrors = function(e) {
            var t = this.queries.get(e);
            t && (t.networkError = void 0, t.graphQLErrors = [])
          }, e.prototype.transform = function(e) {
            return this.documentTransform.transformDocument(e)
          }, e.prototype.getDocumentInfo = function(e) {
            var t = this.transformCache;
            if (!t.has(e)) {
              var r = {
                hasClientExports: (0, w.f2)(e),
                hasForcedResolvers: this.localState.shouldForceResolvers(e),
                hasNonreactiveDirective: (0, w.d8)(["nonreactive"], e),
                nonReactiveQuery: (0, k.x3)(e),
                clientQuery: this.localState.clientQuery(e),
                serverQuery: (0, k.iz)([{
                  name: "client",
                  remove: !0
                }, {
                  name: "connection"
                }, {
                  name: "nonreactive"
                }, {
                  name: "unmask"
                }], e),
                defaultVars: (0, C.wY)((0, C.Vu)(e)),
                asQuery: (0, n.__assign)((0, n.__assign)({}, e), {
                  definitions: e.definitions.map((function(e) {
                    return "OperationDefinition" === e.kind && "query" !== e.operation ? (0, n.__assign)((0, n.__assign)({}, e), {
                      operation: "query"
                    }) : e
                  }))
                })
              };
              t.set(e, r)
            }
            return t.get(e)
          }, e.prototype.getVariables = function(e, t) {
            return (0, n.__assign)((0, n.__assign)({}, this.getDocumentInfo(e).defaultVars), t)
          }, e.prototype.watchQuery = function(e) {
            var t = this.transform(e.query);
            void 0 === (e = (0, n.__assign)((0, n.__assign)({}, e), {
              variables: this.getVariables(t, e.variables)
            })).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1);
            var r = new Xe(this),
              i = new Be({
                queryManager: this,
                queryInfo: r,
                options: e
              });
            return i.lastQuery = t, Be.inactiveOnCreation.getValue() || this.queries.set(i.queryId, r), r.init({
              document: t,
              observableQuery: i,
              variables: i.variables
            }), i
          }, e.prototype.query = function(e, t) {
            var r = this;
            void 0 === t && (t = this.generateQueryId()), (0, i.V1)(e.query, 30), (0, i.V1)("Document" === e.query.kind, 31), (0, i.V1)(!e.returnPartialData, 32), (0, i.V1)(!e.pollInterval, 33);
            var o = this.transform(e.query);
            return this.fetchQuery(t, (0, n.__assign)((0, n.__assign)({}, e), {
              query: o
            })).then((function(i) {
              return i && (0, n.__assign)((0, n.__assign)({}, i), {
                data: r.maskOperation({
                  document: o,
                  data: i.data,
                  fetchPolicy: e.fetchPolicy,
                  id: t
                })
              })
            })).finally((function() {
              return r.stopQuery(t)
            }))
          }, e.prototype.generateQueryId = function() {
            return String(this.queryIdCounter++)
          }, e.prototype.generateRequestId = function() {
            return this.requestIdCounter++
          }, e.prototype.generateMutationId = function() {
            return String(this.mutationIdCounter++)
          }, e.prototype.stopQueryInStore = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.broadcastQueries()
          }, e.prototype.stopQueryInStoreNoBroadcast = function(e) {
            var t = this.queries.get(e);
            t && t.stop()
          }, e.prototype.clearStore = function(e) {
            return void 0 === e && (e = {
              discardWatches: !0
            }), this.cancelPendingFetches((0, i.vA)(34)), this.queries.forEach((function(e) {
              e.observableQuery ? e.networkStatus = Ce.loading : e.stop()
            })), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e)
          }, e.prototype.getObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = "active");
            var r = new Map,
              o = new Map,
              a = new Map,
              s = new Set;
            return Array.isArray(e) && e.forEach((function(e) {
              if ("string" == typeof e) o.set(e, e), a.set(e, !1);
              else if ((0, Oe.Kc)(e)) {
                var r = (0, et.y)(t.transform(e));
                o.set(r, (0, C.n4)(e)), a.set(r, !1)
              } else(0, Ee.U)(e) && e.query && s.add(e)
            })), this.queries.forEach((function(t, n) {
              var i = t.observableQuery,
                o = t.document;
              if (i) {
                if ("all" === e) return void r.set(n, i);
                var s = i.queryName;
                if ("standby" === i.options.fetchPolicy || "active" === e && !i.hasObservers()) return;
                ("active" === e || s && a.has(s) || o && a.has((0, et.y)(o))) && (r.set(n, i), s && a.set(s, !0), o && a.set((0, et.y)(o), !0))
              }
            })), s.size && s.forEach((function(e) {
              var o = (0, Te.v)("legacyOneTimeQuery"),
                a = t.getOrCreateQuery(o).init({
                  document: e.query,
                  variables: e.variables
                }),
                s = new Be({
                  queryManager: t,
                  queryInfo: a,
                  options: (0, n.__assign)((0, n.__assign)({}, e), {
                    fetchPolicy: "network-only"
                  })
                });
              (0, i.V1)(s.queryId === o), a.setObservableQuery(s), r.set(o, s)
            })), !1 !== globalThis.__DEV__ && a.size && a.forEach((function(e, t) {
              if (!e) {
                var r = o.get(t);
                r ? !1 !== globalThis.__DEV__ && i.V1.warn(35, r) : !1 !== globalThis.__DEV__ && i.V1.warn(36)
              }
            })), r
          }, e.prototype.reFetchObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = !1);
            var r = [];
            return this.getObservableQueries(e ? "all" : "active").forEach((function(n, i) {
              var o = n.options.fetchPolicy;
              n.resetLastResults(), (e || "standby" !== o && "cache-only" !== o) && r.push(n.refetch()), (t.queries.get(i) || n.queryInfo).setDiff(null)
            })), this.broadcastQueries(), Promise.all(r)
          }, e.prototype.startGraphQLSubscription = function(e) {
            var t = this,
              r = e.query,
              n = e.variables,
              i = e.fetchPolicy,
              o = e.errorPolicy,
              a = void 0 === o ? "none" : o,
              s = e.context,
              u = void 0 === s ? {} : s,
              c = e.extensions,
              l = void 0 === c ? {} : c;
            r = this.transform(r), n = this.getVariables(r, n);
            var f = function(e) {
              return t.getObservableFromLink(r, u, e, l).map((function(n) {
                "no-cache" !== i && (Ze(n, a) && t.cache.write({
                  query: r,
                  result: n.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: e
                }), t.broadcastQueries());
                var o = ke(n),
                  s = (0, Fe.uR)(n);
                if (o || s) {
                  var u = {};
                  if (o && (u.graphQLErrors = n.errors), s && (u.protocolErrors = n.extensions[Fe.K$]), "none" === a || s) throw new Fe.K4(u)
                }
                return "ignore" === a && delete n.errors, n
              }))
            };
            if (this.getDocumentInfo(r).hasClientExports) {
              var h = this.localState.addExportedVariables(r, n, u).then(f);
              return new be.c((function(e) {
                var t = null;
                return h.then((function(r) {
                    return t = r.subscribe(e)
                  }), e.error),
                  function() {
                    return t && t.unsubscribe()
                  }
              }))
            }
            return f(n)
          }, e.prototype.stopQuery = function(e) {
            this.stopQueryNoBroadcast(e), this.broadcastQueries()
          }, e.prototype.stopQueryNoBroadcast = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e)
          }, e.prototype.removeQuery = function(e) {
            var t;
            this.fetchCancelFns.delete(e), this.queries.has(e) && (null === (t = this.queries.get(e)) || void 0 === t || t.stop(), this.queries.delete(e))
          }, e.prototype.broadcastQueries = function() {
            this.onBroadcast && this.onBroadcast(), this.queries.forEach((function(e) {
              var t;
              return null === (t = e.observableQuery) || void 0 === t ? void 0 : t.notify()
            }))
          }, e.prototype.getLocalState = function() {
            return this.localState
          }, e.prototype.getObservableFromLink = function(e, t, r, i, o) {
            var s, u, c = this;
            void 0 === o && (o = null !== (s = null == t ? void 0 : t.queryDeduplication) && void 0 !== s ? s : this.queryDeduplication);
            var l = this.getDocumentInfo(e),
              f = l.serverQuery,
              h = l.clientQuery;
            if (f) {
              var p = this.inFlightLinkObservables,
                d = this.link,
                y = {
                  query: f,
                  variables: r,
                  operationName: (0, C.n4)(f) || void 0,
                  context: this.prepareContext((0, n.__assign)((0, n.__assign)({}, t), {
                    forceFetch: !o
                  })),
                  extensions: i
                };
              if (t = y.context, o) {
                var v = (0, et.y)(f),
                  g = (0, O.M)(r),
                  m = p.lookup(v, g);
                if (!(u = m.observable)) {
                  var b = new Pe([a(d, y)]);
                  u = m.observable = b, b.beforeNext((function e(t, r) {
                    "next" === t && "hasNext" in r && r.hasNext ? b.beforeNext(e) : p.remove(v, g)
                  }))
                }
              } else u = new Pe([a(d, y)])
            } else u = new Pe([be.c.of({
              data: {}
            })]), t = this.prepareContext(t);
            return h && (u = _e(u, (function(e) {
              return c.localState.runResolvers({
                document: h,
                remoteResult: e,
                context: t,
                variables: r
              })
            }))), u
          }, e.prototype.getResultsFromLink = function(e, t, r) {
            var n = e.lastRequestId = this.generateRequestId(),
              i = this.cache.transformForLink(r.query);
            return _e(this.getObservableFromLink(i, r.context, r.variables), (function(o) {
              var a = Se(o),
                s = a.length > 0,
                u = r.errorPolicy;
              if (n >= e.lastRequestId) {
                if (s && "none" === u) throw e.markError(new Fe.K4({
                  graphQLErrors: a
                }));
                e.markResult(o, i, r, t), e.markReady()
              }
              var c = {
                data: o.data,
                loading: !1,
                networkStatus: Ce.ready
              };
              return s && "none" === u && (c.data = void 0), s && "ignore" !== u && (c.errors = a, c.networkStatus = Ce.error), c
            }), (function(t) {
              var r = (0, Fe.Mn)(t) ? t : new Fe.K4({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            }))
          }, e.prototype.fetchConcastWithInfo = function(e, t, r, n) {
            var i = this;
            void 0 === r && (r = Ce.loading), void 0 === n && (n = t.query);
            var o, a, s = this.getVariables(n, t.variables),
              u = this.defaultOptions.watchQuery,
              c = t.fetchPolicy,
              l = void 0 === c ? u && u.fetchPolicy || "cache-first" : c,
              f = t.errorPolicy,
              h = void 0 === f ? u && u.errorPolicy || "none" : f,
              p = t.returnPartialData,
              d = void 0 !== p && p,
              y = t.notifyOnNetworkStatusChange,
              v = void 0 !== y && y,
              g = t.context,
              m = void 0 === g ? {} : g,
              b = Object.assign({}, t, {
                query: n,
                variables: s,
                fetchPolicy: l,
                errorPolicy: h,
                returnPartialData: d,
                notifyOnNetworkStatusChange: v,
                context: m
              }),
              _ = function(n) {
                b.variables = n;
                var o = i.fetchQueryByPolicy(e, b, r);
                return "standby" !== b.fetchPolicy && o.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", t), o
              },
              w = function() {
                return i.fetchCancelFns.delete(e.queryId)
              };
            if (this.fetchCancelFns.set(e.queryId, (function(e) {
                w(), setTimeout((function() {
                  return o.cancel(e)
                }))
              })), this.getDocumentInfo(b.query).hasClientExports) o = new Pe(this.localState.addExportedVariables(b.query, b.variables, b.context).then(_).then((function(e) {
              return e.sources
            }))), a = !0;
            else {
              var k = _(b.variables);
              a = k.fromLink, o = new Pe(k.sources)
            }
            return o.promise.then(w, w), {
              concast: o,
              fromLink: a
            }
          }, e.prototype.refetchQueries = function(e) {
            var t = this,
              r = e.updateCache,
              n = e.include,
              i = e.optimistic,
              o = void 0 !== i && i,
              a = e.removeOptimistic,
              s = void 0 === a ? o ? (0, Te.v)("refetchQueries") : void 0 : a,
              u = e.onQueryUpdated,
              c = new Map;
            n && this.getObservableQueries(n).forEach((function(e, r) {
              c.set(r, {
                oq: e,
                lastDiff: (t.queries.get(r) || e.queryInfo).getDiff()
              })
            }));
            var l = new Map;
            return r && this.cache.batch({
              update: r,
              optimistic: o && s || !1,
              removeOptimistic: s,
              onWatchUpdated: function(e, t, r) {
                var n = e.watcher instanceof Xe && e.watcher.observableQuery;
                if (n) {
                  if (u) {
                    c.delete(n.queryId);
                    var i = u(n, t, r);
                    return !0 === i && (i = n.refetch()), !1 !== i && l.set(n, i), i
                  }
                  null !== u && c.set(n.queryId, {
                    oq: n,
                    lastDiff: r,
                    diff: t
                  })
                }
              }
            }), c.size && c.forEach((function(e, r) {
              var n, i = e.oq,
                o = e.lastDiff,
                a = e.diff;
              u && (a || (a = t.cache.diff(i.queryInfo.getDiffOptions())), n = u(i, a, o)), u && !0 !== n || (n = i.refetch()), !1 !== n && l.set(i, n), r.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(r)
            })), s && this.cache.removeOptimistic(s), l
          }, e.prototype.maskOperation = function(e) {
            var t, r, n, o = e.document,
              a = e.data;
            if (!1 !== globalThis.__DEV__) {
              var s = e.fetchPolicy,
                u = e.id,
                c = null === (t = (0, C.Vu)(o)) || void 0 === t ? void 0 : t.operation,
                l = (null !== (r = null == c ? void 0 : c[0]) && void 0 !== r ? r : "o") + u;
              !this.dataMasking || "no-cache" !== s || (0, S.s6)(o) || this.noCacheWarningsByQueryId.has(l) || (this.noCacheWarningsByQueryId.add(l), !1 !== globalThis.__DEV__ && i.V1.warn(37, null !== (n = (0, C.n4)(o)) && void 0 !== n ? n : "Unnamed ".concat(null != c ? c : "operation")))
            }
            return this.dataMasking ? function(e, t, r) {
              var n;
              if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && ut(), e;
              var o = (0, C.Vu)(t);
              return (0, i.V1)(o, 51), null == e ? e : ct(e, o.selectionSet, {
                operationType: o.operation,
                operationName: null === (n = o.name) || void 0 === n ? void 0 : n.value,
                fragmentMap: (0, S.JG)((0, C.zK)(t)),
                cache: r,
                mutableTargets: new it,
                knownChanged: new ot
              })
            }(a, o, this.cache) : a
          }, e.prototype.maskFragment = function(e) {
            var t = e.data,
              r = e.fragment,
              n = e.fragmentName;
            return this.dataMasking ? ht(t, r, this.cache, n) : t
          }, e.prototype.fetchQueryByPolicy = function(e, t, r) {
            var i = this,
              o = t.query,
              a = t.variables,
              s = t.fetchPolicy,
              u = t.refetchWritePolicy,
              c = t.errorPolicy,
              l = t.returnPartialData,
              f = t.context,
              h = t.notifyOnNetworkStatusChange,
              d = e.networkStatus;
            e.init({
              document: o,
              variables: a,
              networkStatus: r
            });
            var y = function() {
                return e.getDiff()
              },
              v = function(t, r) {
                void 0 === r && (r = e.networkStatus || Ce.loading);
                var s = t.result;
                !1 === globalThis.__DEV__ || l || p(s, {}) || Ye(t.missing);
                var u = function(e) {
                  return be.c.of((0, n.__assign)({
                    data: e,
                    loading: Qe(r),
                    networkStatus: r
                  }, t.complete ? null : {
                    partial: !0
                  }))
                };
                return s && i.getDocumentInfo(o).hasForcedResolvers ? i.localState.runResolvers({
                  document: o,
                  remoteResult: {
                    data: s
                  },
                  context: f,
                  variables: a,
                  onlyRunForcedResolvers: !0
                }).then((function(e) {
                  return u(e.data || void 0)
                })) : "none" === c && r === Ce.refetch && Array.isArray(t.missing) ? u(void 0) : u(s)
              },
              g = "no-cache" === s ? 0 : r === Ce.refetch && "merge" !== u ? 1 : 2,
              m = function() {
                return i.getResultsFromLink(e, g, {
                  query: o,
                  variables: a,
                  context: f,
                  fetchPolicy: s,
                  errorPolicy: c
                })
              },
              b = h && "number" == typeof d && d !== r && Qe(r);
            switch (s) {
              default:
              case "cache-first":
                return (_ = y()).complete ? {
                  fromLink: !1,
                  sources: [v(_, e.markReady())]
                } : l || b ? {
                  fromLink: !0,
                  sources: [v(_), m()]
                } : {
                  fromLink: !0,
                  sources: [m()]
                };
              case "cache-and-network":
                var _;
                return (_ = y()).complete || l || b ? {
                  fromLink: !0,
                  sources: [v(_), m()]
                } : {
                  fromLink: !0,
                  sources: [m()]
                };
              case "cache-only":
                return {
                  fromLink: !1, sources: [v(y(), e.markReady())]
                };
              case "network-only":
                return b ? {
                  fromLink: !0,
                  sources: [v(y()), m()]
                } : {
                  fromLink: !0,
                  sources: [m()]
                };
              case "no-cache":
                return b ? {
                  fromLink: !0,
                  sources: [v(e.getDiff()), m()]
                } : {
                  fromLink: !0,
                  sources: [m()]
                };
              case "standby":
                return {
                  fromLink: !1, sources: []
                }
            }
          }, e.prototype.getOrCreateQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new Xe(this, e)), this.queries.get(e)
          }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, this.defaultContext), t), {
              clientAwareness: this.clientAwareness
            })
          }, e
        }(),
        vt = new N,
        gt = new WeakMap;

      function mt(e) {
        var t = gt.get(e);
        return t || gt.set(e, t = {
          vars: new Set,
          dep: fe()
        }), t
      }

      function bt(e) {
        mt(e).vars.forEach((function(t) {
          return t.forgetCache(e)
        }))
      }

      function _t(e) {
        var t = new Set,
          r = new Set,
          n = function(o) {
            if (arguments.length > 0) {
              if (e !== o) {
                e = o, t.forEach((function(e) {
                  mt(e).dep.dirty(n),
                    function(e) {
                      e.broadcastWatches && e.broadcastWatches()
                    }(e)
                }));
                var a = Array.from(r);
                r.clear(), a.forEach((function(t) {
                  return t(e)
                }))
              }
            } else {
              var s = vt.getValue();
              s && (i(s), mt(s).dep(n))
            }
            return e
          };
        n.onNextChange = function(e) {
          return r.add(e),
            function() {
              r.delete(e)
            }
        };
        var i = n.attachCache = function(e) {
          return t.add(e), mt(e).vars.add(n), n
        };
        return n.forgetCache = function(e) {
          return t.delete(e)
        }, n
      }
      var wt = function() {
        function e(e) {
          var t = e.cache,
            r = e.client,
            n = e.resolvers,
            i = e.fragmentMatcher;
          this.selectionsToResolveCache = new WeakMap, this.cache = t, r && (this.client = r), n && this.addResolvers(n), i && this.setFragmentMatcher(i)
        }
        return e.prototype.addResolvers = function(e) {
          var t = this;
          this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach((function(e) {
            t.resolvers = (0, He.D9)(t.resolvers, e)
          })) : this.resolvers = (0, He.D9)(this.resolvers, e)
        }, e.prototype.setResolvers = function(e) {
          this.resolvers = {}, this.addResolvers(e)
        }, e.prototype.getResolvers = function() {
          return this.resolvers || {}
        }, e.prototype.runResolvers = function(e) {
          return (0, n.__awaiter)(this, arguments, void 0, (function(e) {
            var t = e.document,
              r = e.remoteResult,
              i = e.context,
              o = e.variables,
              a = e.onlyRunForcedResolvers,
              s = void 0 !== a && a;
            return (0, n.__generator)(this, (function(e) {
              return t ? [2, this.resolveDocument(t, r.data, i, o, this.fragmentMatcher, s).then((function(e) {
                return (0, n.__assign)((0, n.__assign)({}, r), {
                  data: e.result
                })
              }))] : [2, r]
            }))
          }))
        }, e.prototype.setFragmentMatcher = function(e) {
          this.fragmentMatcher = e
        }, e.prototype.getFragmentMatcher = function() {
          return this.fragmentMatcher
        }, e.prototype.clientQuery = function(e) {
          return (0, w.d8)(["client"], e) && this.resolvers ? e : null
        }, e.prototype.serverQuery = function(e) {
          return (0, k.er)(e)
        }, e.prototype.prepareContext = function(e) {
          var t = this.cache;
          return (0, n.__assign)((0, n.__assign)({}, e), {
            cache: t,
            getCacheKey: function(e) {
              return t.identify(e)
            }
          })
        }, e.prototype.addExportedVariables = function(e) {
          return (0, n.__awaiter)(this, arguments, void 0, (function(e, t, r) {
            return void 0 === t && (t = {}), void 0 === r && (r = {}), (0, n.__generator)(this, (function(i) {
              return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then((function(e) {
                return (0, n.__assign)((0, n.__assign)({}, t), e.exportedVariables)
              }))] : [2, (0, n.__assign)({}, t)]
            }))
          }))
        }, e.prototype.shouldForceResolvers = function(e) {
          var t = !1;
          return (0, rt.visit)(e, {
            Directive: {
              enter: function(e) {
                if ("client" === e.name.value && e.arguments && (t = e.arguments.some((function(e) {
                    return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                  })))) return rt.BREAK
              }
            }
          }), t
        }, e.prototype.buildRootValueFromCache = function(e, t) {
          return this.cache.diff({
            query: (0, k.zc)(e),
            variables: t,
            returnPartialData: !0,
            optimistic: !1
          }).result
        }, e.prototype.resolveDocument = function(e, t) {
          return (0, n.__awaiter)(this, arguments, void 0, (function(e, t, r, i, o, a) {
            var s, u, c, l, f, h, p, d, y, v;
            return void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === o && (o = function() {
              return !0
            }), void 0 === a && (a = !1), (0, n.__generator)(this, (function(g) {
              return s = (0, C.Vn)(e), u = (0, C.zK)(e), c = (0, S.JG)(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, h = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", d = (p = this).cache, y = p.client, v = {
                fragmentMap: c,
                context: (0, n.__assign)((0, n.__assign)({}, r), {
                  cache: d,
                  client: y
                }),
                variables: i,
                fragmentMatcher: o,
                defaultOperationType: h,
                exportedVariables: {},
                selectionsToResolve: l,
                onlyRunForcedResolvers: a
              }, [2, this.resolveSelectionSet(s.selectionSet, !1, t, v).then((function(e) {
                return {
                  result: e,
                  exportedVariables: v.exportedVariables
                }
              }))]
            }))
          }))
        }, e.prototype.resolveSelectionSet = function(e, t, r, o) {
          return (0, n.__awaiter)(this, void 0, void 0, (function() {
            var a, s, u, c, l, f = this;
            return (0, n.__generator)(this, (function(h) {
              return a = o.fragmentMap, s = o.context, u = o.variables, c = [r], l = function(e) {
                return (0, n.__awaiter)(f, void 0, void 0, (function() {
                  var l, f;
                  return (0, n.__generator)(this, (function(n) {
                    return (t || o.selectionsToResolve.has(e)) && (0, w.MS)(e, u) ? (0, Oe.dt)(e) ? [2, this.resolveField(e, t, r, o).then((function(t) {
                      var r;
                      void 0 !== t && c.push(((r = {})[(0, Oe.ue)(e)] = t, r))
                    }))] : ((0, Oe.kd)(e) ? l = e : (l = a[e.name.value], (0, i.V1)(l, 19, e.name.value)), l && l.typeCondition && (f = l.typeCondition.name.value, o.fragmentMatcher(r, f, s)) ? [2, this.resolveSelectionSet(l.selectionSet, t, r, o).then((function(e) {
                      c.push(e)
                    }))] : [2]) : [2]
                  }))
                }))
              }, [2, Promise.all(e.selections.map(l)).then((function() {
                return (0, He.IM)(c)
              }))]
            }))
          }))
        }, e.prototype.resolveField = function(e, t, r, i) {
          return (0, n.__awaiter)(this, void 0, void 0, (function() {
            var o, a, s, u, c, l, f, h, p, d = this;
            return (0, n.__generator)(this, (function(n) {
              return r ? (o = i.variables, a = e.name.value, s = (0, Oe.ue)(e), u = a !== s, c = r[s] || r[a], l = Promise.resolve(c), i.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (f = r.__typename || i.defaultOperationType, (h = this.resolvers && this.resolvers[f]) && (p = h[u ? a : s]) && (l = Promise.resolve(vt.withValue(this.cache, p, [r, (0, Oe.MB)(e, o), i.context, {
                field: e,
                fragmentMap: i.fragmentMap
              }])))), [2, l.then((function(r) {
                var n, o;
                if (void 0 === r && (r = c), e.directives && e.directives.forEach((function(e) {
                    "export" === e.name.value && e.arguments && e.arguments.forEach((function(e) {
                      "as" === e.name.value && "StringValue" === e.value.kind && (i.exportedVariables[e.value.value] = r)
                    }))
                  })), !e.selectionSet) return r;
                if (null == r) return r;
                var a = null !== (o = null === (n = e.directives) || void 0 === n ? void 0 : n.some((function(e) {
                  return "client" === e.name.value
                }))) && void 0 !== o && o;
                return Array.isArray(r) ? d.resolveSubSelectedArray(e, t || a, r, i) : e.selectionSet ? d.resolveSelectionSet(e.selectionSet, t || a, r, i) : void 0
              }))]) : [2, null]
            }))
          }))
        }, e.prototype.resolveSubSelectedArray = function(e, t, r, n) {
          var i = this;
          return Promise.all(r.map((function(r) {
            return null === r ? null : Array.isArray(r) ? i.resolveSubSelectedArray(e, t, r, n) : e.selectionSet ? i.resolveSelectionSet(e.selectionSet, t, r, n) : void 0
          })))
        }, e.prototype.collectSelectionsToResolve = function(e, t) {
          var r = function(e) {
              return !Array.isArray(e)
            },
            n = this.selectionsToResolveCache;
          return function e(o) {
            if (!n.has(o)) {
              var a = new Set;
              n.set(o, a), (0, rt.visit)(o, {
                Directive: function(e, t, n, i, o) {
                  "client" === e.name.value && o.forEach((function(e) {
                    r(e) && (0, rt.isSelectionNode)(e) && a.add(e)
                  }))
                },
                FragmentSpread: function(n, o, s, u, c) {
                  var l = t[n.name.value];
                  (0, i.V1)(l, 20, n.name.value);
                  var f = e(l);
                  f.size > 0 && (c.forEach((function(e) {
                    r(e) && (0, rt.isSelectionNode)(e) && a.add(e)
                  })), a.add(n), f.forEach((function(e) {
                    a.add(e)
                  })))
                }
              })
            }
            return n.get(o)
          }(e)
        }, e
      }();

      function kt(e, t) {
        return (0, xe.o)(e, t, t.variables && {
          variables: (0, xe.o)((0, n.__assign)((0, n.__assign)({}, e && e.variables), t.variables))
        })
      }
      var St, Ot = r(27312),
        Et = !1,
        Tt = function() {
          function e(e) {
            var t, r = this;
            if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw (0, i.vA)(16);
            var a = e.uri,
              c = e.credentials,
              l = e.headers,
              f = e.cache,
              h = e.documentTransform,
              p = e.ssrMode,
              d = void 0 !== p && p,
              y = e.ssrForceFetchDelay,
              v = void 0 === y ? 0 : y,
              g = e.connectToDevTools,
              m = e.queryDeduplication,
              b = void 0 === m || m,
              _ = e.defaultOptions,
              w = e.defaultContext,
              k = e.assumeImmutableResults,
              S = void 0 === k ? f.assumeImmutableResults : k,
              O = e.resolvers,
              E = e.typeDefs,
              T = e.fragmentMatcher,
              R = e.name,
              D = e.version,
              M = e.devtools,
              P = e.dataMasking,
              C = e.link;
            C || (C = a ? new u.P({
              uri: a,
              credentials: c,
              headers: l
            }) : o.C.empty()), this.link = C, this.cache = f, this.disableNetworkFetches = d || v > 0, this.queryDeduplication = b, this.defaultOptions = _ || Object.create(null), this.typeDefs = E, this.devtoolsConfig = (0, n.__assign)((0, n.__assign)({}, M), {
              enabled: null !== (t = null == M ? void 0 : M.enabled) && void 0 !== t ? t : g
            }), void 0 === this.devtoolsConfig.enabled && (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__), v && setTimeout((function() {
              return r.disableNetworkFetches = !1
            }), v), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = s.r, this.localState = new wt({
              cache: f,
              client: this,
              resolvers: O,
              fragmentMatcher: T
            }), this.queryManager = new yt({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              defaultContext: w,
              documentTransform: h,
              queryDeduplication: b,
              ssrMode: d,
              dataMasking: !!P,
              clientAwareness: {
                name: R,
                version: D
              },
              localState: this.localState,
              assumeImmutableResults: S,
              onBroadcast: this.devtoolsConfig.enabled ? function() {
                r.devToolsHookCb && r.devToolsHookCb({
                  action: {},
                  state: {
                    queries: r.queryManager.getQueryStore(),
                    mutations: r.queryManager.mutationStore || {}
                  },
                  dataWithOptimisticResults: r.cache.extract(!0)
                })
              } : void 0
            }), this.devtoolsConfig.enabled && this.connectToDevTools()
          }
          return e.prototype.connectToDevTools = function() {
            if ("undefined" != typeof window) {
              var e = window,
                t = Symbol.for("apollo.devtools");
              (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, Et || !1 === globalThis.__DEV__ || (Et = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout((function() {
                if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                  var e = window.navigator,
                    t = e && e.userAgent,
                    r = void 0;
                  "string" == typeof t && (t.indexOf("Chrome/") > -1 ? r = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : t.indexOf("Firefox/") > -1 && (r = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), r && !1 !== globalThis.__DEV__ && i.V1.log("Download the Apollo DevTools for a better development experience: %s", r)
                }
              }), 1e4))
            }
          }, Object.defineProperty(e.prototype, "documentTransform", {
            get: function() {
              return this.queryManager.documentTransform
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.stop = function() {
            this.queryManager.stop()
          }, e.prototype.watchQuery = function(e) {
            return this.defaultOptions.watchQuery && (e = kt(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.watchQuery(e)
          }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = kt(this.defaultOptions.query, e)), (0, i.V1)("cache-and-network" !== e.fetchPolicy, 17), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.query(e)
          }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = kt(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
          }, e.prototype.subscribe = function(e) {
            var t = this,
              r = this.queryManager.generateQueryId();
            return this.queryManager.startGraphQLSubscription(e).map((function(i) {
              return (0, n.__assign)((0, n.__assign)({}, i), {
                data: t.queryManager.maskOperation({
                  document: e.query,
                  data: i.data,
                  fetchPolicy: e.fetchPolicy,
                  id: r
                })
              })
            }))
          }, e.prototype.readQuery = function(e, t) {
            return void 0 === t && (t = !1), this.cache.readQuery(e, t)
          }, e.prototype.watchFragment = function(e) {
            var t;
            return this.cache.watchFragment((0, n.__assign)((0, n.__assign)({}, e), ((t = {})[Symbol.for("apollo.dataMasking")] = this.queryManager.dataMasking, t)))
          }, e.prototype.readFragment = function(e, t) {
            return void 0 === t && (t = !1), this.cache.readFragment(e, t)
          }, e.prototype.writeQuery = function(e) {
            var t = this.cache.writeQuery(e);
            return !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
          }, e.prototype.writeFragment = function(e) {
            var t = this.cache.writeFragment(e);
            return !1 !== e.broadcast && this.queryManager.broadcastQueries(), t
          }, e.prototype.__actionHookForDevTools = function(e) {
            this.devToolsHookCb = e
          }, e.prototype.__requestRaw = function(e) {
            return a(this.link, e)
          }, e.prototype.resetStore = function() {
            var e = this;
            return Promise.resolve().then((function() {
              return e.queryManager.clearStore({
                discardWatches: !1
              })
            })).then((function() {
              return Promise.all(e.resetStoreCallbacks.map((function(e) {
                return e()
              })))
            })).then((function() {
              return e.reFetchObservableQueries()
            }))
          }, e.prototype.clearStore = function() {
            var e = this;
            return Promise.resolve().then((function() {
              return e.queryManager.clearStore({
                discardWatches: !0
              })
            })).then((function() {
              return Promise.all(e.clearStoreCallbacks.map((function(e) {
                return e()
              })))
            }))
          }, e.prototype.onResetStore = function(e) {
            var t = this;
            return this.resetStoreCallbacks.push(e),
              function() {
                t.resetStoreCallbacks = t.resetStoreCallbacks.filter((function(t) {
                  return t !== e
                }))
              }
          }, e.prototype.onClearStore = function(e) {
            var t = this;
            return this.clearStoreCallbacks.push(e),
              function() {
                t.clearStoreCallbacks = t.clearStoreCallbacks.filter((function(t) {
                  return t !== e
                }))
              }
          }, e.prototype.reFetchObservableQueries = function(e) {
            return this.queryManager.reFetchObservableQueries(e)
          }, e.prototype.refetchQueries = function(e) {
            var t = this.queryManager.refetchQueries(e),
              r = [],
              n = [];
            t.forEach((function(e, t) {
              r.push(t), n.push(e)
            }));
            var o = Promise.all(n);
            return o.queries = r, o.results = n, o.catch((function(e) {
              !1 !== globalThis.__DEV__ && i.V1.debug(18, e)
            })), o
          }, e.prototype.getObservableQueries = function(e) {
            return void 0 === e && (e = "active"), this.queryManager.getObservableQueries(e)
          }, e.prototype.extract = function(e) {
            return this.cache.extract(e)
          }, e.prototype.restore = function(e) {
            return this.cache.restore(e)
          }, e.prototype.addResolvers = function(e) {
            this.localState.addResolvers(e)
          }, e.prototype.setResolvers = function(e) {
            this.localState.setResolvers(e)
          }, e.prototype.getResolvers = function() {
            return this.localState.getResolvers()
          }, e.prototype.setLocalStateFragmentMatcher = function(e) {
            this.localState.setFragmentMatcher(e)
          }, e.prototype.setLink = function(e) {
            this.link = this.queryManager.link = e
          }, Object.defineProperty(e.prototype, "defaultContext", {
            get: function() {
              return this.queryManager.defaultContext
            },
            enumerable: !1,
            configurable: !0
          }), e
        }();
      !1 !== globalThis.__DEV__ && (Tt.prototype.getMemoryInternals = Ot.ep), St || (St = {});
      var Rt = function() {
        function e() {
          this.assumeImmutableResults = !1, this.getFragmentDoc = ye(S.ct, {
            max: ve.v["cache.fragmentQueryDocuments"] || 1e3,
            cache: F.l
          })
        }
        return e.prototype.lookupFragment = function(e) {
          return null
        }, e.prototype.batch = function(e) {
          var t, r = this,
            n = "string" == typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0;
          return this.performTransaction((function() {
            return t = e.update(r)
          }), n), t
        }, e.prototype.recordOptimisticTransaction = function(e, t) {
          this.performTransaction(e, t)
        }, e.prototype.transformDocument = function(e) {
          return e
        }, e.prototype.transformForLink = function(e) {
          return e
        }, e.prototype.identify = function(e) {}, e.prototype.gc = function() {
          return []
        }, e.prototype.modify = function(e) {
          return !1
        }, e.prototype.readQuery = function(e, t) {
          return void 0 === t && (t = !!e.optimistic), this.read((0, n.__assign)((0, n.__assign)({}, e), {
            rootId: e.id || "ROOT_QUERY",
            optimistic: t
          }))
        }, e.prototype.watchFragment = function(e) {
          var t = this,
            r = e.fragment,
            o = e.fragmentName,
            a = e.from,
            s = e.optimistic,
            u = void 0 === s || s,
            c = (0, n.__rest)(e, ["fragment", "fragmentName", "from", "optimistic"]),
            l = this.getFragmentDoc(r, o),
            f = void 0 === a || "string" == typeof a ? a : this.identify(a),
            h = !!e[Symbol.for("apollo.dataMasking")];
          if (!1 !== globalThis.__DEV__) {
            var p = o || (0, C.E4)(r).name.value;
            f || !1 !== globalThis.__DEV__ && i.V1.warn(1, p)
          }
          var d, y = (0, n.__assign)((0, n.__assign)({}, c), {
            returnPartialData: !0,
            id: f,
            query: l,
            optimistic: u
          });
          return new be.c((function(i) {
            return t.watch((0, n.__assign)((0, n.__assign)({}, y), {
              immediate: !0,
              callback: function(a) {
                var s = h ? ht(a.result, r, t, o) : a.result;
                if (!d || !Ae(l, {
                    data: d.result
                  }, {
                    data: s
                  }, e.variables)) {
                  var u = {
                    data: s,
                    complete: !!a.complete
                  };
                  a.missing && (u.missing = (0, He.IM)(a.missing.map((function(e) {
                    return e.missing
                  })))), d = (0, n.__assign)((0, n.__assign)({}, a), {
                    result: s
                  }), i.next(u)
                }
              }
            }))
          }))
        }, e.prototype.readFragment = function(e, t) {
          return void 0 === t && (t = !!e.optimistic), this.read((0, n.__assign)((0, n.__assign)({}, e), {
            query: this.getFragmentDoc(e.fragment, e.fragmentName),
            rootId: e.id,
            optimistic: t
          }))
        }, e.prototype.writeQuery = function(e) {
          var t = e.id,
            r = e.data,
            i = (0, n.__rest)(e, ["id", "data"]);
          return this.write(Object.assign(i, {
            dataId: t || "ROOT_QUERY",
            result: r
          }))
        }, e.prototype.writeFragment = function(e) {
          var t = e.id,
            r = e.data,
            i = e.fragment,
            o = e.fragmentName,
            a = (0, n.__rest)(e, ["id", "data", "fragment", "fragmentName"]);
          return this.write(Object.assign(a, {
            query: this.getFragmentDoc(i, o),
            dataId: t,
            result: r
          }))
        }, e.prototype.updateQuery = function(e, t) {
          return this.batch({
            update: function(r) {
              var i = r.readQuery(e),
                o = t(i);
              return null == o ? i : (r.writeQuery((0, n.__assign)((0, n.__assign)({}, e), {
                data: o
              })), o)
            }
          })
        }, e.prototype.updateFragment = function(e, t) {
          return this.batch({
            update: function(r) {
              var i = r.readFragment(e),
                o = t(i);
              return null == o ? i : (r.writeFragment((0, n.__assign)((0, n.__assign)({}, e), {
                data: o
              })), o)
            }
          })
        }, e
      }();
      !1 !== globalThis.__DEV__ && (Rt.prototype.getMemoryInternals = Ot.tQ);
      var Dt = function(e) {
          function t(r, n, i, o) {
            var a, s = e.call(this, r) || this;
            if (s.message = r, s.path = n, s.query = i, s.variables = o, Array.isArray(s.path)) {
              s.missing = s.message;
              for (var u = s.path.length - 1; u >= 0; --u) s.missing = ((a = {})[s.path[u]] = s.missing, a)
            } else s.missing = s.path;
            return s.__proto__ = t.prototype, s
          }
          return (0, n.__extends)(t, e), t
        }(Error),
        Mt = Object.prototype.hasOwnProperty;

      function Pt(e) {
        return null == e
      }

      function Ct(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ("string" == typeof r && (t && (t.keyObject = Pt(n) ? Pt(i) ? void 0 : {
            _id: i
          } : {
            id: n
          }), Pt(n) && !Pt(i) && (n = i), !Pt(n))) return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      }
      var Ft = {
        dataIdFromObject: Ct,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1
      };

      function Qt(e) {
        var t = e.canonizeResults;
        return void 0 === t ? Ft.canonizeResults : t
      }
      var qt = /^[_a-z][_0-9a-z]*/i;

      function xt(e) {
        var t = e.match(qt);
        return t ? t[0] : e
      }

      function It(e, t, r) {
        return !!(0, Ee.U)(t) && ((0, we.c)(t) ? t.every((function(t) {
          return It(e, t, r)
        })) : e.selections.every((function(e) {
          if ((0, Oe.dt)(e) && (0, w.MS)(e, r)) {
            var n = (0, Oe.ue)(e);
            return Mt.call(t, n) && (!e.selectionSet || It(e.selectionSet, t[n], r))
          }
          return !0
        })))
      }

      function jt(e) {
        return (0, Ee.U)(e) && !(0, Oe.A_)(e) && !(0, we.c)(e)
      }

      function Vt(e, t) {
        var r = (0, S.JG)((0, C.zK)(e));
        return {
          fragmentMap: r,
          lookupFragment: function(e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null
          }
        }
      }
      var At = Object.create(null),
        Nt = function() {
          return At
        },
        Lt = Object.create(null),
        zt = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return nt((0, Oe.A_)(e) ? r.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
              return (0, Oe.A_)(e) ? r.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
              if ("string" == typeof e) return (0, Oe.WU)(e);
              if ((0, Oe.A_)(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = (0, Oe.WU)(n);
                return t && r.merge(n, e), i
              }
            }
          }
          return e.prototype.toObject = function() {
            return (0, n.__assign)({}, this.data)
          }, e.prototype.has = function(e) {
            return void 0 !== this.lookup(e, !0)
          }, e.prototype.get = function(e, t) {
            if (this.group.depend(e, t), Mt.call(this.data, e)) {
              var r = this.data[e];
              if (r && Mt.call(r, t)) return r[t]
            }
            return "__typename" === t && Mt.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof Kt ? this.parent.get(e, t) : void 0
          }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), Mt.call(this.data, e) ? this.data[e] : this instanceof Kt ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
          }, e.prototype.merge = function(e, t) {
            var r, n = this;
            (0, Oe.A_)(e) && (e = e.__ref), (0, Oe.A_)(t) && (t = t.__ref);
            var o = "string" == typeof e ? this.lookup(r = e) : e,
              a = "string" == typeof t ? this.lookup(r = t) : t;
            if (a) {
              (0, i.V1)("string" == typeof r, 2);
              var s = new He.ZI(Gt).merge(o, a);
              if (this.data[r] = s, s !== o && (delete this.refs[r], this.group.caching)) {
                var u = Object.create(null);
                o || (u.__exists = 1), Object.keys(a).forEach((function(e) {
                  if (!o || o[e] !== s[e]) {
                    u[e] = 1;
                    var t = xt(e);
                    t === e || n.policies.hasKeyArgs(s.__typename, t) || (u[t] = 1), void 0 !== s[e] || n instanceof Kt || delete s[e]
                  }
                })), !u.__typename || o && o.__typename || this.policies.rootTypenamesById[r] !== s.__typename || delete u.__typename, Object.keys(u).forEach((function(e) {
                  return n.group.dirty(r, e)
                }))
              }
            }
          }, e.prototype.modify = function(e, t) {
            var r = this,
              o = this.lookup(e);
            if (o) {
              var a = Object.create(null),
                s = !1,
                u = !0,
                c = {
                  DELETE: At,
                  INVALIDATE: Lt,
                  isReference: Oe.A_,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function(t, n) {
                    return r.policies.readField("string" == typeof t ? {
                      fieldName: t,
                      from: n || (0, Oe.WU)(e)
                    } : t, {
                      store: r
                    })
                  }
                };
              if (Object.keys(o).forEach((function(l) {
                  var f = xt(l),
                    h = o[l];
                  if (void 0 !== h) {
                    var p = "function" == typeof t ? t : t[l] || t[f];
                    if (p) {
                      var d = p === Nt ? At : p(nt(h), (0, n.__assign)((0, n.__assign)({}, c), {
                        fieldName: f,
                        storeFieldName: l,
                        storage: r.getStorage(e, l)
                      }));
                      if (d === Lt) r.group.dirty(e, l);
                      else if (d === At && (d = void 0), d !== h && (a[l] = d, s = !0, h = d, !1 !== globalThis.__DEV__)) {
                        var y = function(e) {
                          if (void 0 === r.lookup(e.__ref)) return !1 !== globalThis.__DEV__ && i.V1.warn(3, e), !0
                        };
                        if ((0, Oe.A_)(d)) y(d);
                        else if (Array.isArray(d))
                          for (var v = !1, g = void 0, m = 0, b = d; m < b.length; m++) {
                            var _ = b[m];
                            if ((0, Oe.A_)(_)) {
                              if (v = !0, y(_)) break
                            } else "object" == typeof _ && _ && r.policies.identify(_)[0] && (g = _);
                            if (v && void 0 !== g) {
                              !1 !== globalThis.__DEV__ && i.V1.warn(4, g);
                              break
                            }
                          }
                      }
                    }
                    void 0 !== h && (u = !1)
                  }
                })), s) return this.merge(e, a), u && (this instanceof Kt ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
            }
            return !1
          }, e.prototype.delete = function(e, t, r) {
            var n, i = this.lookup(e);
            if (i) {
              var o = this.getFieldValue(i, "__typename"),
                a = t && r ? this.policies.getStoreFieldName({
                  typename: o,
                  fieldName: t,
                  args: r
                }) : t;
              return this.modify(e, a ? ((n = {})[a] = Nt, n) : Nt)
            }
            return !1
          }, e.prototype.evict = function(e, t) {
            var r = !1;
            return e.id && (Mt.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof Kt && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
          }, e.prototype.clear = function() {
            this.replace(null)
          }, e.prototype.extract = function() {
            var e = this,
              t = this.toObject(),
              r = [];
            return this.getRootIdSet().forEach((function(t) {
              Mt.call(e.policies.rootTypenamesById, t) || r.push(t)
            })), r.length && (t.__META = {
              extraRootIds: r.sort()
            }), t
          }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach((function(r) {
                e && Mt.call(e, r) || t.delete(r)
              })), e) {
              var r = e.__META,
                i = (0, n.__rest)(e, ["__META"]);
              Object.keys(i).forEach((function(e) {
                t.merge(e, i[e])
              })), r && r.extraRootIds.forEach(this.retain, this)
            }
          }, e.prototype.retain = function(e) {
            return this.rootIds[e] = (this.rootIds[e] || 0) + 1
          }, e.prototype.release = function(e) {
            if (this.rootIds[e] > 0) {
              var t = --this.rootIds[e];
              return t || delete this.rootIds[e], t
            }
            return 0
          }, e.prototype.getRootIdSet = function(e) {
            return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Kt ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
          }, e.prototype.gc = function() {
            var e = this,
              t = this.getRootIdSet(),
              r = this.toObject();
            t.forEach((function(n) {
              Mt.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
            }));
            var n = Object.keys(r);
            if (n.length) {
              for (var i = this; i instanceof Kt;) i = i.parent;
              n.forEach((function(e) {
                return i.delete(e)
              }))
            }
            return n
          }, e.prototype.findChildRefIds = function(e) {
            if (!Mt.call(this.refs, e)) {
              var t = this.refs[e] = Object.create(null),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach((function(e) {
                (0, Oe.A_)(e) && (t[e.__ref] = !0), (0, Ee.U)(e) && Object.keys(e).forEach((function(t) {
                  var r = e[t];
                  (0, Ee.U)(r) && n.add(r)
                }))
              }))
            }
            return this.refs[e]
          }, e.prototype.makeCacheKey = function() {
            return this.group.keyMaker.lookupArray(arguments)
          }, e
        }(),
        Wt = function() {
          function e(e, t) {
            void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
          }
          return e.prototype.resetCaching = function() {
            this.d = this.caching ? fe() : null, this.keyMaker = new M(P.et)
          }, e.prototype.depend = function(e, t) {
            if (this.d) {
              this.d(Ut(e, t));
              var r = xt(t);
              r !== t && this.d(Ut(e, r)), this.parent && this.parent.depend(e, t)
            }
          }, e.prototype.dirty = function(e, t) {
            this.d && this.d.dirty(Ut(e, t), "__exists" === t ? "forget" : "setDirty")
          }, e
        }();

      function Ut(e, t) {
        return t + "#" + e
      }

      function Bt(e, t) {
        Ht(e) && e.group.depend(t, "__exists")
      }! function(e) {
        var t = function(e) {
          function t(t) {
            var r = t.policies,
              n = t.resultCaching,
              i = void 0 === n || n,
              o = t.seed,
              a = e.call(this, r, new Wt(i)) || this;
            return a.stump = new Yt(a), a.storageTrie = new M(P.et), o && a.replace(o), a
          }
          return (0, n.__extends)(t, e), t.prototype.addLayer = function(e, t) {
            return this.stump.addLayer(e, t)
          }, t.prototype.removeLayer = function() {
            return this
          }, t.prototype.getStorage = function() {
            return this.storageTrie.lookupArray(arguments)
          }, t
        }(e);
        e.Root = t
      }(zt || (zt = {}));
      var Kt = function(e) {
          function t(t, r, n, i) {
            var o = e.call(this, r.policies, i) || this;
            return o.id = t, o.parent = r, o.replay = n, o.group = i, n(o), o
          }
          return (0, n.__extends)(t, e), t.prototype.addLayer = function(e, r) {
            return new t(e, this, r, this.group)
          }, t.prototype.removeLayer = function(e) {
            var t = this,
              r = this.parent.removeLayer(e);
            return e === this.id ? (this.group.caching && Object.keys(this.data).forEach((function(e) {
              var n = t.data[e],
                i = r.lookup(e);
              i ? n ? n !== i && Object.keys(n).forEach((function(r) {
                p(n[r], i[r]) || t.group.dirty(e, r)
              })) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach((function(r) {
                t.group.dirty(e, r)
              }))) : t.delete(e)
            })), r) : r === this.parent ? this : r.addLayer(this.id, this.replay)
          }, t.prototype.toObject = function() {
            return (0, n.__assign)((0, n.__assign)({}, this.parent.toObject()), this.data)
          }, t.prototype.findChildRefIds = function(t) {
            var r = this.parent.findChildRefIds(t);
            return Mt.call(this.data, t) ? (0, n.__assign)((0, n.__assign)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(zt),
        Yt = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, (function() {}), new Wt(t.group.caching, t.group)) || this
          }
          return (0, n.__extends)(t, e), t.prototype.removeLayer = function() {
            return this
          }, t.prototype.merge = function(e, t) {
            return this.parent.merge(e, t)
          }, t
        }(Kt);

      function Gt(e, t, r) {
        var n = e[r],
          i = t[r];
        return p(n, i) ? n : i
      }

      function Ht(e) {
        return !!(e instanceof zt && e.group.caching)
      }
      var Jt = function() {
        function e() {
          this.known = new(P.En ? WeakSet : Set), this.pool = new M(P.et), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
        }
        return e.prototype.isKnown = function(e) {
          return (0, Ee.U)(e) && this.known.has(e)
        }, e.prototype.pass = function(e) {
          if ((0, Ee.U)(e)) {
            var t = function(e) {
              return (0, Ee.U)(e) ? (0, we.c)(e) ? e.slice(0) : (0, n.__assign)({
                __proto__: Object.getPrototypeOf(e)
              }, e) : e
            }(e);
            return this.passes.set(t, e), t
          }
          return e
        }, e.prototype.admit = function(e) {
          var t = this;
          if ((0, Ee.U)(e)) {
            var r = this.passes.get(e);
            if (r) return r;
            switch (Object.getPrototypeOf(e)) {
              case Array.prototype:
                if (this.known.has(e)) return e;
                var n = e.map(this.admit, this);
                return (s = this.pool.lookupArray(n)).array || (this.known.add(s.array = n), !1 !== globalThis.__DEV__ && Object.freeze(n)), s.array;
              case null:
              case Object.prototype:
                if (this.known.has(e)) return e;
                var i = Object.getPrototypeOf(e),
                  o = [i],
                  a = this.sortedKeys(e);
                o.push(a.json);
                var s, u = o.length;
                if (a.sorted.forEach((function(r) {
                    o.push(t.admit(e[r]))
                  })), !(s = this.pool.lookupArray(o)).object) {
                  var c = s.object = Object.create(i);
                  this.known.add(c), a.sorted.forEach((function(e, t) {
                    c[e] = o[u + t]
                  })), !1 !== globalThis.__DEV__ && Object.freeze(c)
                }
                return s.object
            }
          }
          return e
        }, e.prototype.sortedKeys = function(e) {
          var t = Object.keys(e),
            r = this.pool.lookupArray(t);
          if (!r.keys) {
            t.sort();
            var n = JSON.stringify(t);
            (r.keys = this.keysByJSON.get(n)) || this.keysByJSON.set(n, r.keys = {
              sorted: t,
              json: n
            })
          }
          return r.keys
        }, e
      }();

      function $t(e) {
        return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
      }
      var Xt = function() {
        function e(e) {
          var t = this;
          this.knownResults = new(P.et ? WeakMap : Map), this.config = (0, xe.o)(e, {
            addTypename: !1 !== e.addTypename,
            canonizeResults: Qt(e)
          }), this.canon = e.canon || new Jt, this.executeSelectionSet = ye((function(e) {
            var r, i = e.context.canonizeResults,
              o = $t(e);
            o[3] = !i;
            var a = (r = t.executeSelectionSet).peek.apply(r, o);
            return a ? i ? (0, n.__assign)((0, n.__assign)({}, a), {
              result: t.canon.admit(a.result)
            }) : a : (Bt(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          }), {
            max: this.config.resultCacheMaxSize || ve.v["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: $t,
            makeCacheKey: function(e, t, r, n) {
              if (Ht(r.store)) return r.store.makeCacheKey(e, (0, Oe.A_)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = ye((function(e) {
            return Bt(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }), {
            max: this.config.resultCacheMaxSize || ve.v["inMemoryCache.executeSubSelectedArray"] || 1e4,
            makeCacheKey: function(e) {
              var t = e.field,
                r = e.array,
                n = e.context;
              if (Ht(n.store)) return n.store.makeCacheKey(t, r, n.varString)
            }
          })
        }
        return e.prototype.resetCanon = function() {
          this.canon = new Jt
        }, e.prototype.diffQueryAgainstStore = function(e) {
          var t = e.store,
            r = e.query,
            i = e.rootId,
            o = void 0 === i ? "ROOT_QUERY" : i,
            a = e.variables,
            s = e.returnPartialData,
            u = void 0 === s || s,
            c = e.canonizeResults,
            l = void 0 === c ? this.config.canonizeResults : c,
            f = this.config.cache.policies;
          a = (0, n.__assign)((0, n.__assign)({}, (0, C.wY)((0, C.AT)(r))), a);
          var h, p = (0, Oe.WU)(o),
            d = this.executeSelectionSet({
              selectionSet: (0, C.Vn)(r).selectionSet,
              objectOrReference: p,
              enclosingRef: p,
              context: (0, n.__assign)({
                store: t,
                query: r,
                policies: f,
                variables: a,
                varString: (0, O.M)(a),
                canonizeResults: l
              }, Vt(r, this.config.fragments))
            });
          if (d.missing && (h = [new Dt(Zt(d.missing), d.missing, r, a)], !u)) throw h[0];
          return {
            result: d.result,
            complete: !h,
            missing: h
          }
        }, e.prototype.isFresh = function(e, t, r, n) {
          if (Ht(n.store) && this.knownResults.get(e) === r) {
            var i = this.executeSelectionSet.peek(r, t, n, this.canon.isKnown(e));
            if (i && e === i.result) return !0
          }
          return !1
        }, e.prototype.execSelectionSetImpl = function(e) {
          var t = this,
            r = e.selectionSet,
            n = e.objectOrReference,
            o = e.enclosingRef,
            a = e.context;
          if ((0, Oe.A_)(n) && !a.policies.rootTypenamesById[n.__ref] && !a.store.has(n.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(n.__ref, " object")
          };
          var s, u = a.variables,
            c = a.policies,
            l = a.store.getFieldValue(n, "__typename"),
            f = [],
            h = new He.ZI;

          function p(e, t) {
            var r;
            return e.missing && (s = h.merge(s, ((r = {})[t] = e.missing, r))), e.result
          }
          this.config.addTypename && "string" == typeof l && !c.rootIdsByTypename[l] && f.push({
            __typename: l
          });
          var d = new Set(r.selections);
          d.forEach((function(e) {
            var r, y;
            if ((0, w.MS)(e, u))
              if ((0, Oe.dt)(e)) {
                var v = c.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: a.variables,
                    from: n
                  }, a),
                  g = (0, Oe.ue)(e);
                void 0 === v ? k.XY.added(e) || (s = h.merge(s, ((r = {})[g] = "Can't find field '".concat(e.name.value, "' on ").concat((0, Oe.A_)(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), r))) : (0, we.c)(v) ? v.length > 0 && (v = p(t.executeSubSelectedArray({
                  field: e,
                  array: v,
                  enclosingRef: o,
                  context: a
                }), g)) : e.selectionSet ? null != v && (v = p(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: v,
                  enclosingRef: (0, Oe.A_)(v) ? v : o,
                  context: a
                }), g)) : a.canonizeResults && (v = t.canon.pass(v)), void 0 !== v && f.push(((y = {})[g] = v, y))
              } else {
                var m = (0, S.HQ)(e, a.lookupFragment);
                if (!m && e.kind === rt.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(10, e.name.value);
                m && c.fragmentMatches(m, l) && m.selectionSet.selections.forEach(d.add, d)
              }
          }));
          var y = {
              result: (0, He.IM)(f),
              missing: s
            },
            v = a.canonizeResults ? this.canon.admit(y) : nt(y);
          return v.result && this.knownResults.set(v.result, r), v
        }, e.prototype.execSubSelectedArrayImpl = function(e) {
          var t, r = this,
            n = e.field,
            o = e.array,
            a = e.enclosingRef,
            s = e.context,
            u = new He.ZI;

          function c(e, r) {
            var n;
            return e.missing && (t = u.merge(t, ((n = {})[r] = e.missing, n))), e.result
          }
          return n.selectionSet && (o = o.filter(s.store.canRead)), o = o.map((function(e, t) {
            return null === e ? null : (0, we.c)(e) ? c(r.executeSubSelectedArray({
              field: n,
              array: e,
              enclosingRef: a,
              context: s
            }), t) : n.selectionSet ? c(r.executeSelectionSet({
              selectionSet: n.selectionSet,
              objectOrReference: e,
              enclosingRef: (0, Oe.A_)(e) ? e : a,
              context: s
            }), t) : (!1 !== globalThis.__DEV__ && function(e, t, r) {
              if (!t.selectionSet) {
                var n = new Set([r]);
                n.forEach((function(r) {
                  (0, Ee.U)(r) && ((0, i.V1)(!(0, Oe.A_)(r), 11, function(e, t) {
                    return (0, Oe.A_)(t) ? e.get(t.__ref, "__typename") : t && t.__typename
                  }(e, r), t.name.value), Object.values(r).forEach(n.add, n))
                }))
              }
            }(s.store, n, e), e)
          })), {
            result: s.canonizeResults ? this.canon.admit(o) : o,
            missing: t
          }
        }, e
      }();

      function Zt(e) {
        try {
          JSON.stringify(e, (function(e, t) {
            if ("string" == typeof t) throw t;
            return t
          }))
        } catch (e) {
          return e
        }
      }
      var er = r(46465),
        tr = Object.create(null);

      function rr(e) {
        var t = JSON.stringify(e);
        return tr[t] || (tr[t] = Object.create(null))
      }

      function nr(e) {
        var t = rr(e);
        return t.keyFieldsFn || (t.keyFieldsFn = function(t, r) {
          var n = function(e, t) {
              return r.readField(t, e)
            },
            o = r.keyObject = or(e, (function(e) {
              var o = ur(r.storeObject, e, n);
              return void 0 === o && t !== r.storeObject && Mt.call(t, e[0]) && (o = ur(t, e, sr)), (0, i.V1)(void 0 !== o, 5, e.join("."), t), o
            }));
          return "".concat(r.typename, ":").concat(JSON.stringify(o))
        })
      }

      function ir(e) {
        var t = rr(e);
        return t.keyArgsFn || (t.keyArgsFn = function(t, r) {
          var n = r.field,
            i = r.variables,
            o = r.fieldName,
            a = or(e, (function(e) {
              var r = e[0],
                o = r.charAt(0);
              if ("@" !== o)
                if ("$" !== o) {
                  if (t) return ur(t, e)
                } else {
                  var a = r.slice(1);
                  if (i && Mt.call(i, a)) {
                    var s = e.slice(0);
                    return s[0] = a, ur(i, s)
                  }
                }
              else if (n && (0, we.E)(n.directives)) {
                var u = r.slice(1),
                  c = n.directives.find((function(e) {
                    return e.name.value === u
                  })),
                  l = c && (0, Oe.MB)(c, i);
                return l && ur(l, e.slice(1))
              }
            })),
            s = JSON.stringify(a);
          return (t || "{}" !== s) && (o += ":" + s), o
        })
      }

      function or(e, t) {
        var r = new He.ZI;
        return ar(e).reduce((function(e, n) {
          var i, o = t(n);
          if (void 0 !== o) {
            for (var a = n.length - 1; a >= 0; --a)(i = {})[n[a]] = o, o = i;
            e = r.merge(e, o)
          }
          return e
        }), Object.create(null))
      }

      function ar(e) {
        var t = rr(e);
        if (!t.paths) {
          var r = t.paths = [],
            n = [];
          e.forEach((function(t, i) {
            (0, we.c)(t) ? (ar(t).forEach((function(e) {
              return r.push(n.concat(e))
            })), n.length = 0) : (n.push(t), (0, we.c)(e[i + 1]) || (r.push(n.slice(0)), n.length = 0))
          }))
        }
        return t.paths
      }

      function sr(e, t) {
        return e[t]
      }

      function ur(e, t, r) {
        return r = r || sr, cr(t.reduce((function e(t, n) {
          return (0, we.c)(t) ? t.map((function(t) {
            return e(t, n)
          })) : t && r(t, n)
        }), e))
      }

      function cr(e) {
        return (0, Ee.U)(e) ? (0, we.c)(e) ? e.map(cr) : or(Object.keys(e).sort(), (function(t) {
          return ur(e, t)
        })) : e
      }

      function lr(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, Oe.MB)(e.field, e.variables) : null
      }
      var fr = function() {},
        hr = function(e, t) {
          return t.fieldName
        },
        pr = function(e, t, r) {
          return (0, r.mergeObjects)(e, t)
        },
        dr = function(e, t) {
          return t
        },
        yr = function() {
          function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, n.__assign)({
              dataIdFromObject: Ct
            }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies)
          }
          return e.prototype.identify = function(e, t) {
            var r, i = this,
              o = t && (t.typename || (null === (r = t.storeObject) || void 0 === r ? void 0 : r.__typename)) || e.__typename;
            if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
            var a, s = t && t.storeObject || e,
              u = (0, n.__assign)((0, n.__assign)({}, t), {
                typename: o,
                storeObject: s,
                readField: t && t.readField || function() {
                  var e = gr(arguments, s);
                  return i.readField(e, {
                    store: i.cache.data,
                    variables: e.variables
                  })
                }
              }),
              c = o && this.getTypePolicy(o),
              l = c && c.keyFn || this.config.dataIdFromObject;
            return at.withValue(!0, (function() {
              for (; l;) {
                var t = l((0, n.__assign)((0, n.__assign)({}, e), s), u);
                if (!(0, we.c)(t)) {
                  a = t;
                  break
                }
                l = nr(t)
              }
            })), a = a ? String(a) : void 0, u.keyObject ? [a, u.keyObject] : [a]
          }, e.prototype.addTypePolicies = function(e) {
            var t = this;
            Object.keys(e).forEach((function(r) {
              var i = e[r],
                o = i.queryType,
                a = i.mutationType,
                s = i.subscriptionType,
                u = (0, n.__rest)(i, ["queryType", "mutationType", "subscriptionType"]);
              o && t.setRootTypename("Query", r), a && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), Mt.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : t.toBeAdded[r] = [u]
            }))
          }, e.prototype.updateTypePolicy = function(e, t) {
            var r = this,
              n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function a(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? pr : !1 === t ? dr : e.merge
            }
            a(n, t.merge), n.keyFn = !1 === i ? fr : (0, we.c)(i) ? nr(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach((function(t) {
              var n = r.getFieldPolicy(e, t, !0),
                i = o[t];
              if ("function" == typeof i) n.read = i;
              else {
                var s = i.keyArgs,
                  u = i.read,
                  c = i.merge;
                n.keyFn = !1 === s ? hr : (0, we.c)(s) ? ir(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof u && (n.read = u), a(n, c)
              }
              n.read && n.merge && (n.keyFn = n.keyFn || hr)
            }))
          }, e.prototype.setRootTypename = function(e, t) {
            void 0 === t && (t = e);
            var r = "ROOT_" + e.toUpperCase(),
              n = this.rootTypenamesById[r];
            t !== n && ((0, i.V1)(!n || n === e, 6, e), n && delete this.rootIdsByTypename[n], this.rootIdsByTypename[t] = r, this.rootTypenamesById[r] = t)
          }, e.prototype.addPossibleTypes = function(e) {
            var t = this;
            this.usingPossibleTypes = !0, Object.keys(e).forEach((function(r) {
              t.getSupertypeSet(r, !0), e[r].forEach((function(e) {
                t.getSupertypeSet(e, !0).add(r);
                var n = e.match(qt);
                n && n[0] === e || t.fuzzySubtypes.set(e, new RegExp(e))
              }))
            }))
          }, e.prototype.getTypePolicy = function(e) {
            var t = this;
            if (!Mt.call(this.typePolicies, e)) {
              var r = this.typePolicies[e] = Object.create(null);
              r.fields = Object.create(null);
              var i = this.supertypeMap.get(e);
              !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach((function(r, n) {
                if (r.test(e)) {
                  var o = t.supertypeMap.get(n);
                  o && o.forEach((function(e) {
                    return i.add(e)
                  }))
                }
              }))), i && i.size && i.forEach((function(e) {
                var i = t.getTypePolicy(e),
                  o = i.fields,
                  a = (0, n.__rest)(i, ["fields"]);
                Object.assign(r, a), Object.assign(r.fields, o)
              }))
            }
            var o = this.toBeAdded[e];
            return o && o.length && o.splice(0).forEach((function(r) {
              t.updateTypePolicy(e, r)
            })), this.typePolicies[e]
          }, e.prototype.getFieldPolicy = function(e, t, r) {
            if (e) {
              var n = this.getTypePolicy(e).fields;
              return n[t] || r && (n[t] = Object.create(null))
            }
          }, e.prototype.getSupertypeSet = function(e, t) {
            var r = this.supertypeMap.get(e);
            return !r && t && this.supertypeMap.set(e, r = new Set), r
          }, e.prototype.fragmentMatches = function(e, t, r, n) {
            var o = this;
            if (!e.typeCondition) return !0;
            if (!t) return !1;
            var a = e.typeCondition.name.value;
            if (t === a) return !0;
            if (this.usingPossibleTypes && this.supertypeMap.has(a))
              for (var s = this.getSupertypeSet(t, !0), u = [s], c = function(e) {
                  var t = o.getSupertypeSet(e, !1);
                  t && t.size && u.indexOf(t) < 0 && u.push(t)
                }, l = !(!r || !this.fuzzySubtypes.size), f = !1, h = 0; h < u.length; ++h) {
                var p = u[h];
                if (p.has(a)) return s.has(a) || (f && !1 !== globalThis.__DEV__ && i.V1.warn(7, t, a), s.add(a)), !0;
                p.forEach(c), l && h === u.length - 1 && It(e.selectionSet, r, n) && (l = !1, f = !0, this.fuzzySubtypes.forEach((function(e, r) {
                  var n = t.match(e);
                  n && n[0] === t && c(r)
                })))
              }
            return !1
          }, e.prototype.hasKeyArgs = function(e, t) {
            var r = this.getFieldPolicy(e, t, !1);
            return !(!r || !r.keyFn)
          }, e.prototype.getStoreFieldName = function(e) {
            var t, r = e.typename,
              n = e.fieldName,
              i = this.getFieldPolicy(r, n, !1),
              o = i && i.keyFn;
            if (o && r)
              for (var a = {
                  typename: r,
                  fieldName: n,
                  field: e.field || null,
                  variables: e.variables
                }, s = lr(e); o;) {
                var u = o(s, a);
                if (!(0, we.c)(u)) {
                  t = u || n;
                  break
                }
                o = ir(u)
              }
            return void 0 === t && (t = e.field ? (0, Oe.Ii)(e.field, e.variables) : (0, Oe.o5)(n, lr(e))), !1 === t ? n : n === xt(t) ? t : n + ":" + t
          }, e.prototype.readField = function(e, t) {
            var r = e.from;
            if (r && (e.field || e.fieldName)) {
              if (void 0 === e.typename) {
                var n = t.store.getFieldValue(r, "__typename");
                n && (e.typename = n)
              }
              var i = this.getStoreFieldName(e),
                o = xt(i),
                a = t.store.getFieldValue(r, i),
                s = this.getFieldPolicy(e.typename, o, !1),
                u = s && s.read;
              if (u) {
                var c = vr(this, r, e, t, t.store.getStorage((0, Oe.A_)(r) ? r.__ref : r, i));
                return vt.withValue(this.cache, u, [a, c])
              }
              return a
            }
          }, e.prototype.getReadFunction = function(e, t) {
            var r = this.getFieldPolicy(e, t, !1);
            return r && r.read
          }, e.prototype.getMergeFunction = function(e, t, r) {
            var n = this.getFieldPolicy(e, t, !1),
              i = n && n.merge;
            return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i
          }, e.prototype.runMergeFunction = function(e, t, r, n, i) {
            var o = r.field,
              a = r.typename,
              s = r.merge;
            return s === pr ? mr(n.store)(e, t) : s === dr ? t : (n.overwrite && (e = void 0), s(e, t, vr(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function vr(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = xt(o),
          s = r.variables || n.variables,
          u = n.store,
          c = u.toReference,
          l = u.canRead;
        return {
          args: lr(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: Oe.A_,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function() {
            return e.readField(gr(arguments, t, s), n)
          },
          mergeObjects: mr(n.store)
        }
      }

      function gr(e, t, r) {
        var o, a = e[0],
          s = e[1],
          u = e.length;
        return "string" == typeof a ? o = {
          fieldName: a,
          from: u > 1 ? s : t
        } : (o = (0, n.__assign)({}, a), Mt.call(o, "from") || (o.from = t)), !1 !== globalThis.__DEV__ && void 0 === o.from && !1 !== globalThis.__DEV__ && i.V1.warn(8, (0, er.p)(Array.from(e))), void 0 === o.variables && (o.variables = r), o
      }

      function mr(e) {
        return function(t, r) {
          if ((0, we.c)(t) || (0, we.c)(r)) throw (0, i.vA)(9);
          if ((0, Ee.U)(t) && (0, Ee.U)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              a = e.getFieldValue(r, "__typename");
            if (o && a && o !== a) return r;
            if ((0, Oe.A_)(t) && jt(r)) return e.merge(t.__ref, r), t;
            if (jt(t) && (0, Oe.A_)(r)) return e.merge(t, r.__ref), r;
            if (jt(t) && jt(r)) return (0, n.__assign)((0, n.__assign)({}, t), r)
          }
          return r
        }
      }

      function br(e, t, r) {
        var i = "".concat(t).concat(r),
          o = e.flavors.get(i);
        return o || e.flavors.set(i, o = e.clientOnly === t && e.deferred === r ? e : (0, n.__assign)((0, n.__assign)({}, e), {
          clientOnly: t,
          deferred: r
        })), o
      }
      var _r = function() {
          function e(e, t, r) {
            this.cache = e, this.reader = t, this.fragments = r
          }
          return e.prototype.writeToStore = function(e, t) {
            var r = this,
              o = t.query,
              a = t.result,
              s = t.dataId,
              u = t.variables,
              c = t.overwrite,
              l = (0, C.Vu)(o),
              f = new He.ZI;
            u = (0, n.__assign)((0, n.__assign)({}, (0, C.wY)(l)), u);
            var h = (0, n.__assign)((0, n.__assign)({
                store: e,
                written: Object.create(null),
                merge: function(e, t) {
                  return f.merge(e, t)
                },
                variables: u,
                varString: (0, O.M)(u)
              }, Vt(o, this.fragments)), {
                overwrite: !!c,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map
              }),
              d = this.processSelectionSet({
                result: a || Object.create(null),
                dataId: s,
                selectionSet: l.selectionSet,
                mergeTree: {
                  map: new Map
                },
                context: h
              });
            if (!(0, Oe.A_)(d)) throw (0, i.vA)(12, a);
            return h.incomingById.forEach((function(t, o) {
              var a = t.storeObject,
                s = t.mergeTree,
                u = t.fieldNodeSet,
                c = (0, Oe.WU)(o);
              if (s && s.map.size) {
                var l = r.applyMerges(s, c, a, h);
                if ((0, Oe.A_)(l)) return;
                a = l
              }
              if (!1 !== globalThis.__DEV__ && !h.overwrite) {
                var f = Object.create(null);
                u.forEach((function(e) {
                  e.selectionSet && (f[e.name.value] = !0)
                })), Object.keys(a).forEach((function(e) {
                  (function(e) {
                    return !0 === f[xt(e)]
                  })(e) && ! function(e) {
                    var t = s && s.map.get(e);
                    return Boolean(t && t.info && t.info.merge)
                  }(e) && function(e, t, r, o) {
                    var a = function(e) {
                        var t = o.getFieldValue(e, r);
                        return "object" == typeof t && t
                      },
                      s = a(e);
                    if (s) {
                      var u = a(t);
                      if (u && !(0, Oe.A_)(s) && !p(s, u) && !Object.keys(s).every((function(e) {
                          return void 0 !== o.getFieldValue(u, e)
                        }))) {
                        var c = o.getFieldValue(e, "__typename") || o.getFieldValue(t, "__typename"),
                          l = xt(r),
                          f = "".concat(c, ".").concat(l);
                        if (!Tr.has(f)) {
                          Tr.add(f);
                          var h = [];
                          (0, we.c)(s) || (0, we.c)(u) || [s, u].forEach((function(e) {
                            var t = o.getFieldValue(e, "__typename");
                            "string" != typeof t || h.includes(t) || h.push(t)
                          })), !1 !== globalThis.__DEV__ && i.V1.warn(15, l, c, h.length ? "either ensure all objects of type " + h.join(" and ") + " have an ID or a custom merge function, or " : "", f, (0, n.__assign)({}, s), (0, n.__assign)({}, u))
                        }
                      }
                    }
                  }(c, a, e, h.store)
                }))
              }
              e.merge(o, a)
            })), e.retain(d.__ref), d
          }, e.prototype.processSelectionSet = function(e) {
            var t = this,
              r = e.dataId,
              o = e.result,
              a = e.selectionSet,
              s = e.context,
              u = e.mergeTree,
              c = this.cache.policies,
              l = Object.create(null),
              f = r && c.rootTypenamesById[r] || (0, Oe.D$)(o, a, s.fragmentMap) || r && s.store.get(r, "__typename");
            "string" == typeof f && (l.__typename = f);
            var h = function() {
                var e = gr(arguments, l, s.variables);
                if ((0, Oe.A_)(e.from)) {
                  var t = s.incomingById.get(e.from.__ref);
                  if (t) {
                    var r = c.readField((0, n.__assign)((0, n.__assign)({}, e), {
                      from: t.storeObject
                    }), s);
                    if (void 0 !== r) return r
                  }
                }
                return c.readField(e, s)
              },
              p = new Set;
            this.flattenFields(a, o, s, f).forEach((function(e, r) {
              var n, a = (0, Oe.ue)(r),
                s = o[a];
              if (p.add(r), void 0 !== s) {
                var d = c.getStoreFieldName({
                    typename: f,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables
                  }),
                  y = kr(u, d),
                  v = t.processFieldValue(s, r, r.selectionSet ? br(e, !1, !1) : e, y),
                  g = void 0;
                r.selectionSet && ((0, Oe.A_)(v) || jt(v)) && (g = h("__typename", v));
                var m = c.getMergeFunction(f, r.name.value, g);
                m ? y.info = {
                  field: r,
                  typename: f,
                  merge: m
                } : Er(u, d), l = e.merge(l, ((n = {})[d] = v, n))
              } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || k.XY.added(r) || c.getReadFunction(f, r.name.value) || !1 !== globalThis.__DEV__ && i.V1.error(13, (0, Oe.ue)(r), o)
            }));
            try {
              var d = c.identify(o, {
                  typename: f,
                  selectionSet: a,
                  fragmentMap: s.fragmentMap,
                  storeObject: l,
                  readField: h
                }),
                y = d[0],
                v = d[1];
              r = r || y, v && (l = s.merge(l, v))
            } catch (e) {
              if (!r) throw e
            }
            if ("string" == typeof r) {
              var g = (0, Oe.WU)(r),
                m = s.written[r] || (s.written[r] = []);
              if (m.indexOf(a) >= 0) return g;
              if (m.push(a), this.reader && this.reader.isFresh(o, g, a, s)) return g;
              var b = s.incomingById.get(r);
              return b ? (b.storeObject = s.merge(b.storeObject, l), b.mergeTree = Sr(b.mergeTree, u), p.forEach((function(e) {
                return b.fieldNodeSet.add(e)
              }))) : s.incomingById.set(r, {
                storeObject: l,
                mergeTree: Or(u) ? void 0 : u,
                fieldNodeSet: p
              }), g
            }
            return l
          }, e.prototype.processFieldValue = function(e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e ? (0, we.c)(e) ? e.map((function(e, o) {
              var a = i.processFieldValue(e, t, r, kr(n, o));
              return Er(n, o), a
            })) : this.processSelectionSet({
              result: e,
              selectionSet: t.selectionSet,
              context: r,
              mergeTree: n
            }) : !1 !== globalThis.__DEV__ ? je(e) : e
          }, e.prototype.flattenFields = function(e, t, r, n) {
            void 0 === n && (n = (0, Oe.D$)(t, e, r.fragmentMap));
            var o = new Map,
              a = this.cache.policies,
              s = new M(!1);
            return function e(u, c) {
              var l = s.lookup(u, c.clientOnly, c.deferred);
              l.visited || (l.visited = !0, u.selections.forEach((function(s) {
                if ((0, w.MS)(s, r.variables)) {
                  var u = c.clientOnly,
                    l = c.deferred;
                  if (u && l || !(0, we.E)(s.directives) || s.directives.forEach((function(e) {
                      var t = e.name.value;
                      if ("client" === t && (u = !0), "defer" === t) {
                        var n = (0, Oe.MB)(e, r.variables);
                        n && !1 === n.if || (l = !0)
                      }
                    })), (0, Oe.dt)(s)) {
                    var f = o.get(s);
                    f && (u = u && f.clientOnly, l = l && f.deferred), o.set(s, br(r, u, l))
                  } else {
                    var h = (0, S.HQ)(s, r.lookupFragment);
                    if (!h && s.kind === rt.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(14, s.name.value);
                    h && a.fragmentMatches(h, n, t, r.variables) && e(h.selectionSet, br(r, u, l))
                  }
                }
              })))
            }(e, r), o
          }, e.prototype.applyMerges = function(e, t, r, o, a) {
            var s, u = this;
            if (e.map.size && !(0, Oe.A_)(r)) {
              var c, l = (0, we.c)(r) || !(0, Oe.A_)(t) && !jt(t) ? void 0 : t,
                f = r;
              l && !a && (a = [(0, Oe.A_)(l) ? l.__ref : l]);
              var h = function(e, t) {
                return (0, we.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach((function(e, t) {
                var r = h(l, t),
                  n = h(f, t);
                if (void 0 !== n) {
                  a && a.push(t);
                  var s = u.applyMerges(e, r, n, o, a);
                  s !== n && (c = c || new Map).set(t, s), a && (0, i.V1)(a.pop() === t)
                }
              })), c && (r = (0, we.c)(f) ? f.slice(0) : (0, n.__assign)({}, f), c.forEach((function(e, t) {
                r[t] = e
              })))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, a && (s = o.store).getStorage.apply(s, a)) : r
          }, e
        }(),
        wr = [];

      function kr(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, wr.pop() || {
          map: new Map
        }), r.get(t)
      }

      function Sr(e, t) {
        if (e === t || !t || Or(t)) return e;
        if (!e || Or(e)) return t;
        var r = e.info && t.info ? (0, n.__assign)((0, n.__assign)({}, e.info), t.info) : e.info || t.info,
          i = e.map.size && t.map.size,
          o = {
            info: r,
            map: i ? new Map : e.map.size ? e.map : t.map
          };
        if (i) {
          var a = new Set(t.map.keys());
          e.map.forEach((function(e, r) {
            o.map.set(r, Sr(e, t.map.get(r))), a.delete(r)
          })), a.forEach((function(r) {
            o.map.set(r, Sr(t.map.get(r), e.map.get(r)))
          }))
        }
        return o
      }

      function Or(e) {
        return !e || !(e.info || e.map.size)
      }

      function Er(e, t) {
        var r = e.map,
          n = r.get(t);
        n && Or(n) && (wr.push(n), r.delete(t))
      }
      var Tr = new Set,
        Rr = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.addTypenameTransform = new me(k.XY), r.assumeImmutableResults = !0, r.makeVar = _t, r.txCount = 0, r.config = function(e) {
              return (0, xe.o)(Ft, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new yr({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies
            }), r.init(), r
          }
          return (0, n.__extends)(t, e), t.prototype.init = function() {
            var e = this.data = new zt.Root({
              policies: this.policies,
              resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache()
          }, t.prototype.resetResultCache = function(e) {
            var t = this,
              r = this.storeReader,
              n = this.config.fragments;
            this.storeWriter = new _r(this, this.storeReader = new Xt({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: Qt(this.config),
              canon: e ? void 0 : r && r.canon,
              fragments: n
            }), n), this.maybeBroadcastWatch = ye((function(e, r) {
              return t.broadcastWatch(e, r)
            }), {
              max: this.config.resultCacheMaxSize || ve.v["inMemoryCache.maybeBroadcastWatch"] || 5e3,
              makeCacheKey: function(e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if (Ht(r)) {
                  var n = e.optimistic,
                    i = e.id,
                    o = e.variables;
                  return r.makeCacheKey(e.query, e.callback, (0, O.M)({
                    optimistic: n,
                    id: i,
                    variables: o
                  }))
                }
              }
            }), new Set([this.data.group, this.optimisticData.group]).forEach((function(e) {
              return e.resetCaching()
            }))
          }, t.prototype.restore = function(e) {
            return this.init(), e && this.data.replace(e), this
          }, t.prototype.extract = function(e) {
            return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract()
          }, t.prototype.read = function(e) {
            var t = e.returnPartialData,
              r = void 0 !== t && t;
            try {
              return this.storeReader.diffQueryAgainstStore((0, n.__assign)((0, n.__assign)({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: r
              })).result || null
            } catch (e) {
              if (e instanceof Dt) return null;
              throw e
            }
          }, t.prototype.write = function(e) {
            try {
              return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.modify = function(e) {
            if (Mt.call(e, "id") && !e.id) return !1;
            var t = e.optimistic ? this.optimisticData : this.data;
            try {
              return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.diff = function(e) {
            return this.storeReader.diffQueryAgainstStore((0, n.__assign)((0, n.__assign)({}, e), {
              store: e.optimistic ? this.optimisticData : this.data,
              rootId: e.id || "ROOT_QUERY",
              config: this.config
            }))
          }, t.prototype.watch = function(e) {
            var t = this;
            return this.watches.size || function(e) {
                mt(e).vars.forEach((function(t) {
                  return t.attachCache(e)
                }))
              }(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e),
              function() {
                t.watches.delete(e) && !t.watches.size && bt(t), t.maybeBroadcastWatch.forget(e)
              }
          }, t.prototype.gc = function(e) {
            var t;
            O.M.reset(), et.y.reset(), this.addTypenameTransform.resetCache(), null === (t = this.config.fragments) || void 0 === t || t.resetCaches();
            var r = this.optimisticData.gc();
            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), r
          }, t.prototype.retain = function(e, t) {
            return (t ? this.optimisticData : this.data).retain(e)
          }, t.prototype.release = function(e, t) {
            return (t ? this.optimisticData : this.data).release(e)
          }, t.prototype.identify = function(e) {
            if ((0, Oe.A_)(e)) return e.__ref;
            try {
              return this.policies.identify(e)[0]
            } catch (e) {
              !1 !== globalThis.__DEV__ && i.V1.warn(e)
            }
          }, t.prototype.evict = function(e) {
            if (!e.id) {
              if (Mt.call(e, "id")) return !1;
              e = (0, n.__assign)((0, n.__assign)({}, e), {
                id: "ROOT_QUERY"
              })
            }
            try {
              return ++this.txCount, this.optimisticData.evict(e, this.data)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.reset = function(e) {
            var t = this;
            return this.init(), O.M.reset(), e && e.discardWatches ? (this.watches.forEach((function(e) {
              return t.maybeBroadcastWatch.forget(e)
            })), this.watches.clear(), bt(this)) : this.broadcastWatches(), Promise.resolve()
          }, t.prototype.removeOptimistic = function(e) {
            var t = this.optimisticData.removeLayer(e);
            t !== this.optimisticData && (this.optimisticData = t, this.broadcastWatches())
          }, t.prototype.batch = function(e) {
            var t, r = this,
              i = e.update,
              o = e.optimistic,
              a = void 0 === o || o,
              s = e.removeOptimistic,
              u = e.onWatchUpdated,
              c = function(e) {
                var n = r,
                  o = n.data,
                  a = n.optimisticData;
                ++r.txCount, e && (r.data = r.optimisticData = e);
                try {
                  return t = i(r)
                } finally {
                  --r.txCount, r.data = o, r.optimisticData = a
                }
              },
              l = new Set;
            return u && !this.txCount && this.broadcastWatches((0, n.__assign)((0, n.__assign)({}, e), {
              onWatchUpdated: function(e) {
                return l.add(e), !1
              }
            })), "string" == typeof a ? this.optimisticData = this.optimisticData.addLayer(a, c) : !1 === a ? c(this.data) : c(), "string" == typeof s && (this.optimisticData = this.optimisticData.removeLayer(s)), u && l.size ? (this.broadcastWatches((0, n.__assign)((0, n.__assign)({}, e), {
              onWatchUpdated: function(e, t) {
                var r = u.call(this, e, t);
                return !1 !== r && l.delete(e), r
              }
            })), l.size && l.forEach((function(e) {
              return r.maybeBroadcastWatch.dirty(e)
            }))) : this.broadcastWatches(e), t
          }, t.prototype.performTransaction = function(e, t) {
            return this.batch({
              update: e,
              optimistic: t || null !== t
            })
          }, t.prototype.transformDocument = function(e) {
            return this.addTypenameToDocument(this.addFragmentsToDocument(e))
          }, t.prototype.fragmentMatches = function(e, t) {
            return this.policies.fragmentMatches(e, t)
          }, t.prototype.lookupFragment = function(e) {
            var t;
            return (null === (t = this.config.fragments) || void 0 === t ? void 0 : t.lookup(e)) || null
          }, t.prototype.broadcastWatches = function(e) {
            var t = this;
            this.txCount || this.watches.forEach((function(r) {
              return t.maybeBroadcastWatch(r, e)
            }))
          }, t.prototype.addFragmentsToDocument = function(e) {
            var t = this.config.fragments;
            return t ? t.transform(e) : e
          }, t.prototype.addTypenameToDocument = function(e) {
            return this.addTypename ? this.addTypenameTransform.transformDocument(e) : e
          }, t.prototype.broadcastWatch = function(e, t) {
            var r = e.lastDiff,
              n = this.diff(e);
            t && (e.optimistic && "string" == typeof t.optimistic && (n.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, n, r)) || r && p(r.result, n.result) || e.callback(e.lastDiff = n, r)
          }, t
        }(Rt);
      !1 !== globalThis.__DEV__ && (Rr.prototype.getMemoryInternals = Ot.cM);
      var Dr = o.C.empty,
        Mr = o.C.from,
        Pr = o.C.split,
        Cr = o.C.concat,
        Fr = r(14120),
        Qr = r(13277),
        qr = r(55001),
        xr = r(74801),
        Ir = function() {
          if ("undefined" == typeof AbortController) return {
            controller: !1,
            signal: !1
          };
          var e = new AbortController;
          return {
            controller: e,
            signal: e.signal
          }
        },
        jr = r(26618),
        Vr = r(16383),
        Ar = r(2669),
        Nr = r(96807);

      function Lr(e) {
        var t = !1;
        return new Promise((function(r, n) {
          e.subscribe({
            next: function(e) {
              t ? !1 !== globalThis.__DEV__ && i.V1.warn(45) : (t = !0, r(e))
            },
            error: n
          })
        }))
      }

      function zr(e) {
        return new be.c((function(t) {
          e.then((function(e) {
            t.next(e), t.complete()
          })).catch(t.error.bind(t))
        }))
      }
      var Wr = r(7842),
        Ur = r(81797),
        Br = new Map,
        Kr = new Map,
        Yr = !0,
        Gr = !1;

      function Hr(e) {
        return e.replace(/[\s,]+/g, " ").trim()
      }

      function Jr(e) {
        var t, r, i, o = Hr(e);
        if (!Br.has(o)) {
          var a = (0, rt.parse)(e, {
            experimentalFragmentVariables: Gr,
            allowLegacyFragmentVariables: Gr
          });
          if (!a || "Document" !== a.kind) throw new Error("Not a valid GraphQL document.");
          Br.set(o, function(e) {
            var t = new Set(e.definitions);
            t.forEach((function(e) {
              e.loc && delete e.loc, Object.keys(e).forEach((function(r) {
                var n = e[r];
                n && "object" == typeof n && t.add(n)
              }))
            }));
            var r = e.loc;
            return r && (delete r.startToken, delete r.endToken), e
          }((t = a, r = new Set, i = [], t.definitions.forEach((function(e) {
            if ("FragmentDefinition" === e.kind) {
              var t = e.name.value,
                n = Hr((a = e.loc).source.body.substring(a.start, a.end)),
                o = Kr.get(t);
              o && !o.has(n) ? Yr && console.warn("Warning: fragment with name " + t + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || Kr.set(t, o = new Set), o.add(n), r.has(n) || (r.add(n), i.push(e))
            } else i.push(e);
            var a
          })), (0, n.__assign)((0, n.__assign)({}, t), {
            definitions: i
          }))))
        }
        return Br.get(o)
      }

      function $r(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        "string" == typeof e && (e = [e]);
        var n = e[0];
        return t.forEach((function(t, r) {
          t && "Document" === t.kind ? n += t.loc.source.body : n += t, n += e[r + 1]
        })), Jr(n)
      }

      function Xr() {
        Br.clear(), Kr.clear()
      }

      function Zr() {
        Yr = !1
      }

      function en() {
        Gr = !0
      }

      function tn() {
        Gr = !1
      }
      var rn, nn = $r,
        on = Xr,
        an = Zr,
        sn = en,
        un = tn;
      (rn = $r || ($r = {})).gql = nn, rn.resetCaches = on, rn.disableFragmentWarnings = an, rn.enableExperimentalFragmentVariables = sn, rn.disableExperimentalFragmentVariables = un, $r.default = $r, (0, Ur.Q9)(!1 !== globalThis.__DEV__ ? "log" : "silent");
      var cn = r(82540),
        ln = r.t(cn, 2),
        fn = P.ol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";

      function hn() {
        (0, i.V1)("createContext" in ln, 54);
        var e = cn.createContext[fn];
        return e || (Object.defineProperty(cn.createContext, fn, {
          value: e = cn.createContext({}),
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), e.displayName = "ApolloContext"), e
      }
      var pn = hn,
        dn = function(e) {
          var t = e.client,
            r = e.children,
            o = hn(),
            a = cn.useContext(o),
            s = cn.useMemo((function() {
              return (0, n.__assign)((0, n.__assign)({}, a), {
                client: t || a.client
              })
            }), [a, t]);
          return (0, i.V1)(s.client, 55), cn.createElement(o.Provider, {
            value: s
          }, r)
        },
        yn = function(e) {
          var t = hn();
          return cn.createElement(t.Consumer, null, (function(t) {
            return (0, i.V1)(t && t.client, 53), e.children(t.client)
          }))
        };

      function vn(e) {
        var t = cn.useContext(hn()),
          r = e || t.client;
        return (0, i.V1)(!!r, 58), r
      }
      var gn, mn, bn = !1,
        _n = ln.useSyncExternalStore || function(e, t, r) {
          var n = t();
          !1 === globalThis.__DEV__ || bn || n === t() || (bn = !0, !1 !== globalThis.__DEV__ && i.V1.error(68));
          var o = cn.useState({
              inst: {
                value: n,
                getSnapshot: t
              }
            }),
            a = o[0].inst,
            s = o[1];
          return P.JR ? cn.useLayoutEffect((function() {
            Object.assign(a, {
              value: n,
              getSnapshot: t
            }), wn(a) && s({
              inst: a
            })
          }), [e, n, t]) : Object.assign(a, {
            value: n,
            getSnapshot: t
          }), cn.useEffect((function() {
            return wn(a) && s({
              inst: a
            }), e((function() {
              wn(a) && s({
                inst: a
              })
            }))
          }), [e]), n
        };

      function wn(e) {
        var t = e.value,
          r = e.getSnapshot;
        try {
          return t !== r()
        } catch (e) {
          return !0
        }
      }

      function kn(e) {
        var t;
        switch (e) {
          case gn.Query:
            t = "Query";
            break;
          case gn.Mutation:
            t = "Mutation";
            break;
          case gn.Subscription:
            t = "Subscription"
        }
        return t
      }

      function Sn(e) {
        mn || (mn = new tt.A(ve.v.parser || 1e3));
        var t, r, n = mn.get(e);
        if (n) return n;
        (0, i.V1)(!!e && !!e.kind, 70, e);
        for (var o = [], a = [], s = [], u = [], c = 0, l = e.definitions; c < l.length; c++) {
          var f = l[c];
          if ("FragmentDefinition" !== f.kind) {
            if ("OperationDefinition" === f.kind) switch (f.operation) {
              case "query":
                a.push(f);
                break;
              case "mutation":
                s.push(f);
                break;
              case "subscription":
                u.push(f)
            }
          } else o.push(f)
        }(0, i.V1)(!o.length || a.length || s.length || u.length, 71), (0, i.V1)(a.length + s.length + u.length <= 1, 72, e, a.length, u.length, s.length), r = a.length ? gn.Query : gn.Mutation, a.length || s.length || (r = gn.Subscription);
        var h = a.length ? a : s.length ? s : u;
        (0, i.V1)(1 === h.length, 73, e, h.length);
        var p = h[0];
        t = p.variableDefinitions || [];
        var d = {
          name: p.name && "Name" === p.name.kind ? p.name.value : "data",
          type: r,
          variables: t
        };
        return mn.set(e, d), d
      }

      function On(e, t) {
        var r = Sn(e),
          n = kn(t),
          o = kn(r.type);
        (0, i.V1)(r.type === t, 74, n, n, o)
      }! function(e) {
        e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
      }(gn || (gn = {})), Sn.resetCache = function() {
        mn = void 0
      }, !1 !== globalThis.__DEV__ && (0, Ot.D_)("parser", (function() {
        return mn ? mn.size : 0
      }));
      var En = Symbol.for("apollo.hook.wrappers");

      function Tn(e, t, r) {
        var n = r.queryManager,
          i = n && n[En],
          o = i && i[e];
        return o ? o(t) : t
      }
      var Rn = Object.prototype.hasOwnProperty;

      function Dn() {}
      var Mn = Symbol();

      function Pn(e, t) {
        return void 0 === t && (t = Object.create(null)), Tn("useQuery", Cn, vn(t && t.client))(e, t)
      }

      function Cn(e, t) {
        var r = Fn(e, t),
          i = r.result,
          o = r.obsQueryFields;
        return cn.useMemo((function() {
          return (0, n.__assign)((0, n.__assign)({}, i), o)
        }), [i, o])
      }

      function Fn(e, t) {
        var r = vn(t.client),
          i = cn.useContext(hn()).renderPromises,
          o = !!i,
          a = r.disableNetworkFetches,
          s = !1 !== t.ssr && !t.skip,
          u = t.partialRefetch,
          c = Qn(r, e, t, o),
          l = function(e, t, r, i, o) {
            function a(n) {
              var a;
              return On(t, gn.Query), {
                client: e,
                query: t,
                observable: i && i.getSSRObservable(o()) || Be.inactiveOnCreation.withValue(!i, (function() {
                  return e.watchQuery(qn(void 0, e, r, o()))
                })),
                resultData: {
                  previousData: null === (a = null == n ? void 0 : n.resultData.current) || void 0 === a ? void 0 : a.data
                }
              }
            }
            var s = cn.useState(a),
              u = s[0],
              c = s[1];

            function l(e) {
              var t, r;
              Object.assign(u.observable, ((t = {})[Mn] = e, t));
              var i = u.resultData;
              c((0, n.__assign)((0, n.__assign)({}, u), {
                query: e.query,
                resultData: Object.assign(i, {
                  previousData: (null === (r = i.current) || void 0 === r ? void 0 : r.data) || i.previousData,
                  current: void 0
                })
              }))
            }
            if (e !== u.client || t !== u.query) {
              var f = a(u);
              return c(f), [f, l]
            }
            return [u, l]
          }(r, e, t, i, c),
          f = l[0],
          h = f.observable,
          d = f.resultData,
          y = l[1],
          v = c(h);
        ! function(e, t, r, n, i) {
          var o;
          t[Mn] && !p(t[Mn], i) && (t.reobserve(qn(t, r, n, i)), e.previousData = (null === (o = e.current) || void 0 === o ? void 0 : o.data) || e.previousData, e.current = void 0), t[Mn] = i
        }(d, h, r, t, v);
        var g = cn.useMemo((function() {
          return function(e) {
            return {
              refetch: e.refetch.bind(e),
              reobserve: e.reobserve.bind(e),
              fetchMore: e.fetchMore.bind(e),
              updateQuery: e.updateQuery.bind(e),
              startPolling: e.startPolling.bind(e),
              stopPolling: e.stopPolling.bind(e),
              subscribeToMore: e.subscribeToMore.bind(e)
            }
          }(h)
        }), [h]);
        ! function(e, t, r) {
          t && r && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e))
        }(h, i, s);
        var m = function(e, t, r, n, i, o, a, s, u) {
          var c = cn.useRef(u);
          cn.useEffect((function() {
            c.current = u
          }));
          var l = !s && !o || !1 !== n.ssr || n.skip ? n.skip || "standby" === i.fetchPolicy ? Ln : void 0 : Nn,
            f = e.previousData,
            h = cn.useMemo((function() {
              return l && An(l, f, t, r)
            }), [r, t, l, f]);
          return _n(cn.useCallback((function(n) {
            if (s) return function() {};
            var i = function() {
                var i = e.current,
                  o = t.getCurrentResult();
                i && i.loading === o.loading && i.networkStatus === o.networkStatus && p(i.data, o.data) || xn(o, e, t, r, a, n, c.current)
              },
              o = function(s) {
                if (u.current.unsubscribe(), u.current = t.resubscribeAfterError(i, o), !Rn.call(s, "graphQLErrors")) throw s;
                var l = e.current;
                (!l || l && l.loading || !p(s, l.error)) && xn({
                  data: l && l.data,
                  error: s,
                  loading: !1,
                  networkStatus: Ce.error
                }, e, t, r, a, n, c.current)
              },
              u = {
                current: t.subscribe(i, o)
              };
            return function() {
              setTimeout((function() {
                return u.current.unsubscribe()
              }))
            }
          }), [o, s, t, e, a, r]), (function() {
            return h || In(e, t, c.current, a, r)
          }), (function() {
            return h || In(e, t, c.current, a, r)
          }))
        }(d, h, r, t, v, a, u, o, {
          onCompleted: t.onCompleted || Dn,
          onError: t.onError || Dn
        });
        return {
          result: m,
          obsQueryFields: g,
          observable: h,
          resultData: d,
          client: r,
          onQueryExecuted: y
        }
      }

      function Qn(e, t, r, i) {
        void 0 === r && (r = {});
        var o = r.skip,
          a = (r.ssr, r.onCompleted, r.onError, r.defaultOptions),
          s = (0, n.__rest)(r, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        return function(r) {
          var n = Object.assign(s, {
            query: t
          });
          return !i || "network-only" !== n.fetchPolicy && "cache-and-network" !== n.fetchPolicy || (n.fetchPolicy = "cache-first"), n.variables || (n.variables = {}), o ? (n.initialFetchPolicy = n.initialFetchPolicy || n.fetchPolicy || jn(a, e.defaultOptions), n.fetchPolicy = "standby") : n.fetchPolicy || (n.fetchPolicy = (null == r ? void 0 : r.options.initialFetchPolicy) || jn(a, e.defaultOptions)), n
        }
      }

      function qn(e, t, r, n) {
        var i = [],
          o = t.defaultOptions.watchQuery;
        return o && i.push(o), r.defaultOptions && i.push(r.defaultOptions), i.push((0, xe.o)(e && e.options, n)), i.reduce(kt)
      }

      function xn(e, t, r, o, a, s, u) {
        var c = t.current;
        c && c.data && (t.previousData = c.data), !e.error && (0, we.E)(e.errors) && (e.error = new Fe.K4({
            graphQLErrors: e.errors
          })), t.current = An(function(e, t, r) {
            return !e.partial || !r || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === t.options.fetchPolicy ? e : (t.refetch(), (0, n.__assign)((0, n.__assign)({}, e), {
              loading: !0,
              networkStatus: Ce.refetch
            }))
          }(e, r, a), t.previousData, r, o), s(),
          function(e, t, r) {
            if (!e.loading) {
              var n = Vn(e);
              Promise.resolve().then((function() {
                n ? r.onError(n) : e.data && t !== e.networkStatus && e.networkStatus === Ce.ready && r.onCompleted(e.data)
              })).catch((function(e) {
                !1 !== globalThis.__DEV__ && i.V1.warn(e)
              }))
            }
          }(e, null == c ? void 0 : c.networkStatus, u)
      }

      function In(e, t, r, n, i) {
        return e.current || xn(t.getCurrentResult(), e, t, i, n, (function() {}), r), e.current
      }

      function jn(e, t) {
        var r;
        return (null == e ? void 0 : e.fetchPolicy) || (null === (r = null == t ? void 0 : t.watchQuery) || void 0 === r ? void 0 : r.fetchPolicy) || "cache-first"
      }

      function Vn(e) {
        return (0, we.E)(e.errors) ? new Fe.K4({
          graphQLErrors: e.errors
        }) : e.error
      }

      function An(e, t, r, i) {
        var o = e.data,
          a = (e.partial, (0, n.__rest)(e, ["data", "partial"]));
        return (0, n.__assign)((0, n.__assign)({
          data: o
        }, a), {
          client: i,
          observable: r,
          variables: r.variables,
          called: e !== Nn && e !== Ln,
          previousData: t
        })
      }
      var Nn = nt({
          loading: !0,
          data: void 0,
          error: void 0,
          networkStatus: Ce.loading
        }),
        Ln = nt({
          loading: !1,
          data: void 0,
          error: void 0,
          networkStatus: Ce.ready
        }),
        zn = P.Sw ? cn.useLayoutEffect : cn.useEffect,
        Wn = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "stopPolling", "subscribeToMore"];

      function Un(e, t) {
        var r, i = cn.useRef(void 0),
          o = cn.useRef(void 0),
          a = cn.useRef(void 0),
          s = kt(t, i.current || {}),
          u = null !== (r = null == s ? void 0 : s.query) && void 0 !== r ? r : e;
        o.current = t, a.current = u;
        var c = (0, n.__assign)((0, n.__assign)({}, s), {
            skip: !i.current
          }),
          l = Fn(u, c),
          f = l.obsQueryFields,
          h = l.result,
          p = l.client,
          d = l.resultData,
          y = l.observable,
          v = l.onQueryExecuted,
          g = y.options.initialFetchPolicy || jn(c.defaultOptions, p.defaultOptions),
          m = cn.useReducer((function(e) {
            return e + 1
          }), 0)[1],
          b = cn.useMemo((function() {
            for (var e = {}, t = function(t) {
                var r = f[t];
                e[t] = function() {
                  return i.current || (i.current = Object.create(null), m()), r.apply(this, arguments)
                }
              }, r = 0, n = Wn; r < n.length; r++) t(n[r]);
            return e
          }), [m, f]),
          _ = !!i.current,
          w = cn.useMemo((function() {
            return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, h), b), {
              called: _
            })
          }), [h, b, _]),
          k = cn.useCallback((function(e) {
            i.current = e ? (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: e.fetchPolicy || g
            }) : {
              fetchPolicy: g
            };
            var t = kt(o.current, (0, n.__assign)({
                query: a.current
              }, i.current)),
              r = function(e, t, r, n, i, o) {
                var a = i.query || n,
                  s = Qn(r, a, i, !1)(t),
                  u = t.reobserveAsConcast(qn(t, r, i, s));
                return o(s), new Promise((function(n) {
                  var i;
                  u.subscribe({
                    next: function(e) {
                      i = e
                    },
                    error: function() {
                      n(An(t.getCurrentResult(), e.previousData, t, r))
                    },
                    complete: function() {
                      n(An(t.maskResult(i), e.previousData, t, r))
                    }
                  })
                }))
              }(d, y, p, u, (0, n.__assign)((0, n.__assign)({}, t), {
                skip: !1
              }), v).then((function(e) {
                return Object.assign(e, b)
              }));
            return r.catch((function() {})), r
          }), [p, u, b, g, y, d, v]),
          S = cn.useRef(k);
        zn((function() {
          S.current = k
        }));
        var O = cn.useCallback((function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return S.current.apply(S, e)
        }), []);
        return [O, w]
      }

      function Bn(e, t) {
        var r = vn(null == t ? void 0 : t.client);
        On(e, gn.Mutation);
        var i = cn.useState({
            called: !1,
            loading: !1,
            client: r
          }),
          o = i[0],
          a = i[1],
          s = cn.useRef({
            result: o,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: t
          });
        zn((function() {
          Object.assign(s.current, {
            client: r,
            options: t,
            mutation: e
          })
        }));
        var u = cn.useCallback((function(e) {
            void 0 === e && (e = {});
            var t = s.current,
              r = t.options,
              i = t.mutation,
              o = (0, n.__assign)((0, n.__assign)({}, r), {
                mutation: i
              }),
              u = e.client || s.current.client;
            s.current.result.loading || o.ignoreResults || !s.current.isMounted || a(s.current.result = {
              loading: !0,
              error: void 0,
              data: void 0,
              called: !0,
              client: u
            });
            var c = ++s.current.mutationId,
              l = kt(o, e);
            return u.mutate(l).then((function(t) {
              var r, n, i = t.data,
                o = t.errors,
                f = o && o.length > 0 ? new Fe.K4({
                  graphQLErrors: o
                }) : void 0,
                h = e.onError || (null === (r = s.current.options) || void 0 === r ? void 0 : r.onError);
              if (f && h && h(f, l), c === s.current.mutationId && !l.ignoreResults) {
                var d = {
                  called: !0,
                  loading: !1,
                  data: i,
                  error: f,
                  client: u
                };
                s.current.isMounted && !p(s.current.result, d) && a(s.current.result = d)
              }
              var y = e.onCompleted || (null === (n = s.current.options) || void 0 === n ? void 0 : n.onCompleted);
              return f || null == y || y(t.data, l), t
            }), (function(t) {
              var r;
              if (c === s.current.mutationId && s.current.isMounted) {
                var n = {
                  loading: !1,
                  error: t,
                  data: void 0,
                  called: !0,
                  client: u
                };
                p(s.current.result, n) || a(s.current.result = n)
              }
              var i = e.onError || (null === (r = s.current.options) || void 0 === r ? void 0 : r.onError);
              if (i) return i(t, l), {
                data: void 0,
                errors: t
              };
              throw t
            }))
          }), []),
          c = cn.useCallback((function() {
            if (s.current.isMounted) {
              var e = {
                called: !1,
                loading: !1,
                client: s.current.client
              };
              Object.assign(s.current, {
                mutationId: 0,
                result: e
              }), a(e)
            }
          }), []);
        return cn.useEffect((function() {
          var e = s.current;
          return e.isMounted = !0,
            function() {
              e.isMounted = !1
            }
        }), []), [u, (0, n.__assign)({
          reset: c
        }, o)]
      }

      function Kn(e, t) {
        var r = cn.useRef(void 0);
        return r.current && p(r.current.deps, t) || (r.current = {
          value: e(),
          deps: t
        }), r.current.value
      }

      function Yn(e, t) {
        void 0 === t && (t = Object.create(null));
        var r = cn.useRef(!1),
          o = vn(t.client);
        On(e, gn.Subscription), r.current || (r.current = !0, t.onSubscriptionData && !1 !== globalThis.__DEV__ && i.V1.warn(t.onData ? 61 : 62), t.onSubscriptionComplete && !1 !== globalThis.__DEV__ && i.V1.warn(t.onComplete ? 63 : 64));
        var a = t.skip,
          s = t.fetchPolicy,
          u = t.errorPolicy,
          c = t.shouldResubscribe,
          l = t.context,
          f = t.extensions,
          h = t.ignoreResults,
          d = Kn((function() {
            return t.variables
          }), [t.variables]),
          y = function() {
            return function(e, t, r, i, o, a, s) {
              var u = {
                  query: t,
                  variables: r,
                  fetchPolicy: i,
                  errorPolicy: o,
                  context: a,
                  extensions: s
                },
                c = (0, n.__assign)((0, n.__assign)({}, u), {
                  client: e,
                  result: {
                    loading: !0,
                    data: void 0,
                    error: void 0,
                    variables: r
                  },
                  setResult: function(e) {
                    c.result = e
                  }
                }),
                l = null;
              return Object.assign(new be.c((function(t) {
                l || (l = e.subscribe(u));
                var r = l.subscribe(t);
                return function() {
                  return r.unsubscribe()
                }
              })), {
                __: c
              })
            }(o, e, d, s, u, l, f)
          },
          v = cn.useState(t.skip ? null : y),
          g = v[0],
          m = v[1],
          b = cn.useRef(y);
        zn((function() {
          b.current = y
        })), a ? g && m(g = null) : g && (o === g.__.client && e === g.__.query && s === g.__.fetchPolicy && u === g.__.errorPolicy && p(d, g.__.variables) || !1 === ("function" == typeof c ? !!c(t) : c)) || m(g = y());
        var _ = cn.useRef(t);
        cn.useEffect((function() {
          _.current = t
        }));
        var w = !a && !h,
          k = cn.useMemo((function() {
            return {
              loading: w,
              error: void 0,
              data: void 0,
              variables: d
            }
          }), [w, d]),
          S = cn.useRef(h);
        zn((function() {
          S.current = h
        }));
        var O = _n(cn.useCallback((function(e) {
            if (!g) return function() {};
            var t = !1,
              r = g.__.variables,
              n = g.__.client,
              i = g.subscribe({
                next: function(i) {
                  var o, a;
                  if (!t) {
                    var s = {
                      loading: !1,
                      data: i.data,
                      error: Vn(i),
                      variables: r
                    };
                    g.__.setResult(s), S.current || e(), s.error ? null === (a = (o = _.current).onError) || void 0 === a || a.call(o, s.error) : _.current.onData ? _.current.onData({
                      client: n,
                      data: s
                    }) : _.current.onSubscriptionData && _.current.onSubscriptionData({
                      client: n,
                      subscriptionData: s
                    })
                  }
                },
                error: function(n) {
                  var i, o;
                  n = n instanceof Fe.K4 ? n : new Fe.K4({
                    protocolErrors: [n]
                  }), t || (g.__.setResult({
                    loading: !1,
                    data: void 0,
                    error: n,
                    variables: r
                  }), S.current || e(), null === (o = (i = _.current).onError) || void 0 === o || o.call(i, n))
                },
                complete: function() {
                  t || (_.current.onComplete ? _.current.onComplete() : _.current.onSubscriptionComplete && _.current.onSubscriptionComplete())
                }
              });
            return function() {
              t = !0, setTimeout((function() {
                i.unsubscribe()
              }))
            }
          }), [g]), (function() {
            return !g || a || h ? k : g.__.result
          }), (function() {
            return k
          })),
          E = cn.useCallback((function() {
            (0, i.V1)(!_.current.skip, 65), m(b.current())
          }), [_, b]);
        return cn.useMemo((function() {
          return (0, n.__assign)((0, n.__assign)({}, O), {
            restart: E
          })
        }), [O, E])
      }

      function Gn(e) {
        return _n(cn.useCallback((function(t) {
          return e.onNextChange((function r() {
            t(), e.onNextChange(r)
          }))
        }), [e]), e, e)
      }

      function Hn(e) {
        return Tn("useFragment", Jn, vn(e.client))(e)
      }

      function Jn(e) {
        var t = vn(e.client),
          r = t.cache,
          i = e.from,
          o = (0, n.__rest)(e, ["from"]),
          a = cn.useMemo((function() {
            return "string" == typeof i ? i : null === i ? null : r.identify(i)
          }), [r, i]),
          s = Kn((function() {
            return (0, n.__assign)((0, n.__assign)({}, o), {
              from: a
            })
          }), [o, a]),
          u = cn.useMemo((function() {
            var e = s.fragment,
              r = s.fragmentName,
              i = s.from,
              o = s.optimistic,
              a = void 0 === o || o;
            if (null === i) return {
              result: $n({
                result: {},
                complete: !1
              })
            };
            var u = t.cache,
              c = u.diff((0, n.__assign)((0, n.__assign)({}, s), {
                returnPartialData: !0,
                id: i,
                query: u.getFragmentDoc(e, r),
                optimistic: a
              }));
            return {
              result: $n((0, n.__assign)((0, n.__assign)({}, c), {
                result: t.queryManager.maskFragment({
                  fragment: e,
                  fragmentName: r,
                  data: c.result
                })
              }))
            }
          }), [t, s]),
          c = cn.useCallback((function() {
            return u.result
          }), [u]);
        return _n(cn.useCallback((function(e) {
          var r = 0,
            n = null === s.from ? null : t.watchFragment(s).subscribe({
              next: function(t) {
                d(t, u.result) || (u.result = t, clearTimeout(r), r = setTimeout(e))
              }
            });
          return function() {
            null == n || n.unsubscribe(), clearTimeout(r)
          }
        }), [t, s, u]), c, c)
      }

      function $n(e) {
        var t = {
          data: e.result,
          complete: !!e.complete
        };
        return e.missing && (t.missing = (0, He.IM)(e.missing.map((function(e) {
          return e.missing
        })))), t
      }

      function Xn(e) {
        var t = Promise.resolve(e);
        return t.status = "fulfilled", t.value = e, t
      }

      function Zn(e) {
        if (function(e) {
            return "status" in e
          }(e)) return e;
        var t = e;
        return t.status = "pending", t.then((function(e) {
          if ("pending" === t.status) {
            var r = t;
            r.status = "fulfilled", r.value = e
          }
        }), (function(e) {
          if ("pending" === t.status) {
            var r = t;
            r.status = "rejected", r.reason = e
          }
        })), e
      }
      var ei = ln.use || function(e) {
          var t = Zn(e);
          switch (t.status) {
            case "pending":
              throw t;
            case "rejected":
              throw t.reason;
            case "fulfilled":
              return t.value
          }
        },
        ti = r(78718),
        ri = Symbol.for("apollo.internal.queryRef"),
        ni = Symbol.for("apollo.internal.refPromise");

      function ii(e) {
        var t, r = ((t = {
          toPromise: function() {
            return ai(r).then((function() {
              return r
            }))
          }
        })[ri] = e, t[ni] = e.promise, t);
        return r
      }

      function oi(e) {
        (0, ti.V1)(!e || ri in e, 69)
      }

      function ai(e) {
        var t = si(e);
        return "fulfilled" === t.promise.status ? t.promise : e[ni]
      }

      function si(e) {
        return e[ri]
      }

      function ui(e, t) {
        e[ni] = t
      }
      var ci = ["canonizeResults", "context", "errorPolicy", "fetchPolicy", "refetchWritePolicy", "returnPartialData"],
        li = function() {
          function e(e, t) {
            var r = this;
            this.key = {}, this.listeners = new Set, this.references = 0, this.softReferences = 0, this.handleNext = this.handleNext.bind(this), this.handleError = this.handleError.bind(this), this.dispose = this.dispose.bind(this), this.observable = e, t.onDispose && (this.onDispose = t.onDispose), this.setResult(), this.subscribeToQuery();
            var n = function() {
              var e;
              r.references || (r.autoDisposeTimeoutId = setTimeout(r.dispose, null !== (e = t.autoDisposeTimeoutMs) && void 0 !== e ? e : 3e4))
            };
            this.promise.then(n, n)
          }
          return Object.defineProperty(e.prototype, "disposed", {
            get: function() {
              return this.subscription.closed
            },
            enumerable: !1,
            configurable: !0
          }), Object.defineProperty(e.prototype, "watchQueryOptions", {
            get: function() {
              return this.observable.options
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.reinitialize = function() {
            var e = this.observable,
              t = this.watchQueryOptions.fetchPolicy,
              r = "no-cache" === t || "standby" === t;
            try {
              if (r ? e.silentSetOptions({
                  fetchPolicy: "standby"
                }) : (e.resetLastResults(), e.silentSetOptions({
                  fetchPolicy: "cache-first"
                })), this.subscribeToQuery(), r) return;
              e.resetDiff(), this.setResult()
            } finally {
              e.silentSetOptions({
                fetchPolicy: t
              })
            }
          }, e.prototype.retain = function() {
            var e = this;
            this.references++, clearTimeout(this.autoDisposeTimeoutId);
            var t = !1;
            return function() {
              t || (t = !0, e.references--, setTimeout((function() {
                e.references || e.dispose()
              })))
            }
          }, e.prototype.softRetain = function() {
            var e = this;
            this.softReferences++;
            var t = !1;
            return function() {
              t || (t = !0, e.softReferences--, setTimeout((function() {
                e.softReferences || e.references || e.dispose()
              })))
            }
          }, e.prototype.didChangeOptions = function(e) {
            var t = this;
            return ci.some((function(r) {
              return r in e && !p(t.watchQueryOptions[r], e[r])
            }))
          }, e.prototype.applyOptions = function(e) {
            var t = this.watchQueryOptions,
              r = t.fetchPolicy,
              i = t.canonizeResults;
            return "standby" === r && r !== e.fetchPolicy ? this.initiateFetch(this.observable.reobserve(e)) : (this.observable.silentSetOptions(e), i !== e.canonizeResults && (this.result = (0, n.__assign)((0, n.__assign)({}, this.result), this.observable.getCurrentResult()), this.promise = Xn(this.result))), this.promise
          }, e.prototype.listen = function(e) {
            var t = this;
            return this.listeners.add(e),
              function() {
                t.listeners.delete(e)
              }
          }, e.prototype.refetch = function(e) {
            return this.initiateFetch(this.observable.refetch(e))
          }, e.prototype.fetchMore = function(e) {
            return this.initiateFetch(this.observable.fetchMore(e))
          }, e.prototype.dispose = function() {
            this.subscription.unsubscribe(), this.onDispose()
          }, e.prototype.onDispose = function() {}, e.prototype.handleNext = function(e) {
            var t;
            if ("pending" === this.promise.status) void 0 === e.data && (e.data = this.result.data), this.result = e, null === (t = this.resolve) || void 0 === t || t.call(this, e);
            else {
              if (e.data === this.result.data && e.networkStatus === this.result.networkStatus) return;
              void 0 === e.data && (e.data = this.result.data), this.result = e, this.promise = Xn(e), this.deliver(this.promise)
            }
          }, e.prototype.handleError = function(e) {
            var t, r, n;
            this.subscription.unsubscribe(), this.subscription = this.observable.resubscribeAfterError(this.handleNext, this.handleError), "pending" === this.promise.status ? null === (t = this.reject) || void 0 === t || t.call(this, e) : (this.promise = (r = e, (n = Promise.reject(r)).catch((function() {})), n.status = "rejected", n.reason = r, n), this.deliver(this.promise))
          }, e.prototype.deliver = function(e) {
            this.listeners.forEach((function(t) {
              return t(e)
            }))
          }, e.prototype.initiateFetch = function(e) {
            var t = this;
            return this.promise = this.createPendingPromise(), this.promise.catch((function() {})), e.then((function() {
              setTimeout((function() {
                var e;
                "pending" === t.promise.status && (t.result = t.observable.getCurrentResult(), null === (e = t.resolve) || void 0 === e || e.call(t, t.result))
              }))
            })).catch((function(e) {
              var r;
              return null === (r = t.reject) || void 0 === r ? void 0 : r.call(t, e)
            })), e
          }, e.prototype.subscribeToQuery = function() {
            var e = this;
            this.subscription = this.observable.filter((function(t) {
              return !p(t.data, {}) && !p(t, e.result)
            })).subscribe(this.handleNext, this.handleError)
          }, e.prototype.setResult = function() {
            var e = this.observable.getCurrentResult(!1);
            p(e, this.result) || (this.result = e, this.promise = !e.data || e.partial && !this.watchQueryOptions.returnPartialData ? this.createPendingPromise() : Xn(e))
          }, e.prototype.createPendingPromise = function() {
            var e = this;
            return Zn(new Promise((function(t, r) {
              e.resolve = t, e.reject = r
            })))
          }, e
        }(),
        fi = function() {
          function e(e, t, r) {
            var n = this;
            this.key = {}, this.listeners = new Set, this.references = 0, this.dispose = this.dispose.bind(this), this.handleNext = this.handleNext.bind(this), this.handleError = this.handleError.bind(this), this.observable = e.watchFragment(t), r.onDispose && (this.onDispose = r.onDispose);
            var i = this.getDiff(e, t),
              o = function() {
                var e;
                n.references || (n.autoDisposeTimeoutId = setTimeout(n.dispose, null !== (e = r.autoDisposeTimeoutMs) && void 0 !== e ? e : 3e4))
              };
            this.promise = i.complete ? Xn(i.result) : this.createPendingPromise(), this.subscribeToFragment(), this.promise.then(o, o)
          }
          return e.prototype.listen = function(e) {
            var t = this;
            return this.listeners.add(e),
              function() {
                t.listeners.delete(e)
              }
          }, e.prototype.retain = function() {
            var e = this;
            this.references++, clearTimeout(this.autoDisposeTimeoutId);
            var t = !1;
            return function() {
              t || (t = !0, e.references--, setTimeout((function() {
                e.references || e.dispose()
              })))
            }
          }, e.prototype.dispose = function() {
            this.subscription.unsubscribe(), this.onDispose()
          }, e.prototype.onDispose = function() {}, e.prototype.subscribeToFragment = function() {
            this.subscription = this.observable.subscribe(this.handleNext.bind(this), this.handleError.bind(this))
          }, e.prototype.handleNext = function(e) {
            var t;
            switch (this.promise.status) {
              case "pending":
                if (e.complete) return null === (t = this.resolve) || void 0 === t ? void 0 : t.call(this, e.data);
                this.deliver(this.promise);
                break;
              case "fulfilled":
                if (p(this.promise.value, e.data)) return;
                this.promise = e.complete ? Xn(e.data) : this.createPendingPromise(), this.deliver(this.promise)
            }
          }, e.prototype.handleError = function(e) {
            var t;
            null === (t = this.reject) || void 0 === t || t.call(this, e)
          }, e.prototype.deliver = function(e) {
            this.listeners.forEach((function(t) {
              return t(e)
            }))
          }, e.prototype.createPendingPromise = function() {
            var e = this;
            return Zn(new Promise((function(t, r) {
              e.resolve = t, e.reject = r
            })))
          }, e.prototype.getDiff = function(e, t) {
            var r = e.cache,
              i = t.from,
              o = t.fragment,
              a = t.fragmentName,
              s = r.diff((0, n.__assign)((0, n.__assign)({}, t), {
                query: r.getFragmentDoc(o, a),
                returnPartialData: !0,
                id: i,
                optimistic: !0
              }));
            return (0, n.__assign)((0, n.__assign)({}, s), {
              result: e.queryManager.maskFragment({
                fragment: o,
                fragmentName: a,
                data: s.result
              })
            })
          }, e
        }(),
        hi = function() {
          function e(e) {
            void 0 === e && (e = Object.create(null)), this.queryRefs = new M(P.et), this.fragmentRefs = new M(P.et), this.options = e
          }
          return e.prototype.getQueryRef = function(e, t) {
            var r = this.queryRefs.lookupArray(e);
            return r.current || (r.current = new li(t(), {
              autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
              onDispose: function() {
                delete r.current
              }
            })), r.current
          }, e.prototype.getFragmentRef = function(e, t, r) {
            var n = this.fragmentRefs.lookupArray(e);
            return n.current || (n.current = new fi(t, r, {
              autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
              onDispose: function() {
                delete n.current
              }
            })), n.current
          }, e.prototype.add = function(e, t) {
            this.queryRefs.lookupArray(e).current = t
          }, e
        }(),
        pi = Symbol.for("apollo.suspenseCache");

      function di(e) {
        var t;
        return e[pi] || (e[pi] = new hi(null === (t = e.defaultOptions.react) || void 0 === t ? void 0 : t.suspense)), e[pi]
      }
      var yi = Symbol.for("apollo.skipToken");

      function vi(e, t) {
        return void 0 === t && (t = Object.create(null)), Tn("useSuspenseQuery", gi, vn("object" == typeof t ? t.client : void 0))(e, t)
      }

      function gi(e, t) {
        var r = vn(t.client),
          i = di(r),
          o = bi({
            client: r,
            query: e,
            options: t
          }),
          a = o.fetchPolicy,
          s = o.variables,
          u = t.queryKey,
          c = void 0 === u ? [] : u,
          l = (0, n.__spreadArray)([e, (0, O.M)(s)], [].concat(c), !0),
          f = i.getQueryRef(l, (function() {
            return r.watchQuery(o)
          })),
          h = cn.useState([f.key, f.promise]),
          p = h[0],
          d = h[1];
        p[0] !== f.key && (p[0] = f.key, p[1] = f.promise);
        var y = p[1];
        f.didChangeOptions(o) && (p[1] = y = f.applyOptions(o)), cn.useEffect((function() {
          var e = f.retain(),
            t = f.listen((function(e) {
              d([f.key, e])
            }));
          return function() {
            t(), e()
          }
        }), [f]);
        var v = cn.useMemo((function() {
            var e = mi(f.result);
            return {
              loading: !1,
              data: f.result.data,
              networkStatus: e ? Ce.error : Ce.ready,
              error: e
            }
          }), [f.result]),
          g = "standby" === a ? v : ei(y),
          m = cn.useCallback((function(e) {
            var t = f.fetchMore(e);
            return d([f.key, f.promise]), t
          }), [f]),
          b = cn.useCallback((function(e) {
            var t = f.refetch(e);
            return d([f.key, f.promise]), t
          }), [f]),
          _ = f.observable.subscribeToMore;
        return cn.useMemo((function() {
          return {
            client: r,
            data: g.data,
            error: mi(g),
            networkStatus: g.networkStatus,
            fetchMore: m,
            refetch: b,
            subscribeToMore: _
          }
        }), [r, m, b, g, _])
      }

      function mi(e) {
        return (0, we.E)(e.errors) ? new Fe.K4({
          graphQLErrors: e.errors
        }) : e.error
      }

      function bi(e) {
        var t = e.client,
          r = e.query,
          o = e.options;
        return Kn((function() {
          var e;
          if (o === yi) return {
            query: r,
            fetchPolicy: "standby"
          };
          var a = o.fetchPolicy || (null === (e = t.defaultOptions.watchQuery) || void 0 === e ? void 0 : e.fetchPolicy) || "cache-first",
            s = (0, n.__assign)((0, n.__assign)({}, o), {
              fetchPolicy: a,
              query: r,
              notifyOnNetworkStatusChange: !1,
              nextFetchPolicy: void 0
            });
          return !1 !== globalThis.__DEV__ && function(e) {
            var t = e.query,
              r = e.fetchPolicy,
              n = e.returnPartialData;
            On(t, gn.Query),
              function(e) {
                void 0 === e && (e = "cache-first"), (0, i.V1)(["cache-first", "network-only", "no-cache", "cache-and-network"].includes(e), 66, e)
              }(r),
              function(e, t) {
                "no-cache" === e && t && !1 !== globalThis.__DEV__ && i.V1.warn(67)
              }(r, n)
          }(s), o.skip && (s.fetchPolicy = "standby"), s
        }), [t, o, r])
      }

      function _i(e, t) {
        return void 0 === t && (t = Object.create(null)), Tn("useBackgroundQuery", wi, vn("object" == typeof t ? t.client : void 0))(e, t)
      }

      function wi(e, t) {
        var r = vn(t.client),
          i = di(r),
          o = bi({
            client: r,
            query: e,
            options: t
          }),
          a = o.fetchPolicy,
          s = o.variables,
          u = t.queryKey,
          c = void 0 === u ? [] : u,
          l = cn.useRef("standby" !== a);
        l.current || (l.current = "standby" !== a);
        var f = (0, n.__spreadArray)([e, (0, O.M)(s)], [].concat(c), !0),
          h = i.getQueryRef(f, (function() {
            return r.watchQuery(o)
          })),
          p = cn.useState(ii(h)),
          d = p[0],
          y = p[1];
        si(d) !== h && y(ii(h)), h.didChangeOptions(o) && ui(d, h.applyOptions(o)), cn.useEffect((function() {
          var e = setTimeout((function() {
            h.disposed && i.add(f, h)
          }));
          return function() {
            return clearTimeout(e)
          }
        }));
        var v = cn.useCallback((function(e) {
            var t = h.fetchMore(e);
            return y(ii(h)), t
          }), [h]),
          g = cn.useCallback((function(e) {
            var t = h.refetch(e);
            return y(ii(h)), t
          }), [h]);
        return cn.useEffect((function() {
          return h.softRetain()
        }), [h]), [l.current ? d : void 0, {
          fetchMore: v,
          refetch: g,
          subscribeToMore: h.observable.subscribeToMore
        }]
      }
      var ki, Si = [];

      function Oi(e) {
        return Tn("useSuspenseFragment", Ei, vn("object" == typeof e ? e.client : void 0))(e)
      }

      function Ei(e) {
        var t = vn(e.client),
          r = e.from,
          i = e.variables,
          o = t.cache,
          a = cn.useMemo((function() {
            return "string" == typeof r ? r : null === r ? null : o.identify(r)
          }), [o, r]),
          s = null === a ? null : di(t).getFragmentRef([a, e.fragment, (0, O.M)(i)], t, (0, n.__assign)((0, n.__assign)({}, e), {
            variables: i,
            from: a
          })),
          u = cn.useState(null === s ? Si : [s.key, s.promise]),
          c = u[0],
          l = u[1];
        return cn.useEffect((function() {
          if (null !== s) {
            var e = s.retain(),
              t = s.listen((function(e) {
                l([s.key, e])
              }));
            return function() {
              e(), t()
            }
          }
        }), [s]), null === s ? {
          data: null
        } : (c[0] !== s.key && (c[0] = s.key, c[1] = s.promise), {
          data: ei(c[1])
        })
      }

      function Ti() {}

      function Ri(e, t) {
        void 0 === t && (t = Object.create(null));
        var r = vn(t.client),
          o = di(r),
          a = bi({
            client: r,
            query: e,
            options: t
          }),
          s = t.queryKey,
          u = void 0 === s ? [] : s,
          c = cn.useState(null),
          l = c[0],
          f = c[1];
        oi(l);
        var h = l && si(l);
        l && (null == h ? void 0 : h.didChangeOptions(a)) && ui(l, h.applyOptions(a));
        var p = (ki || (ki = cn.createContext(null)), cn.useCallback((function() {
            var e = console.error;
            try {
              return console.error = Ti, cn.useContext(ki), !0
            } catch (e) {
              return !1
            } finally {
              console.error = e
            }
          }), [])),
          d = cn.useCallback((function(e) {
            if (!h) throw new Error("The query has not been loaded. Please load the query.");
            var t = h.fetchMore(e);
            return f(ii(h)), t
          }), [h]),
          y = cn.useCallback((function(e) {
            if (!h) throw new Error("The query has not been loaded. Please load the query.");
            var t = h.refetch(e);
            return f(ii(h)), t
          }), [h]),
          v = cn.useCallback((function() {
            for (var t = [], s = 0; s < arguments.length; s++) t[s] = arguments[s];
            (0, i.V1)(!p(), 59);
            var c = t[0],
              l = (0, n.__spreadArray)([e, (0, O.M)(c)], [].concat(u), !0),
              h = o.getQueryRef(l, (function() {
                return r.watchQuery((0, n.__assign)((0, n.__assign)({}, a), {
                  variables: c
                }))
              }));
            f(ii(h))
          }), [e, u, o, a, p, r]),
          g = cn.useCallback((function(e) {
            return (0, i.V1)(h, 60), h.observable.subscribeToMore(e)
          }), [h]);
        return [v, l, {
          fetchMore: d,
          refetch: y,
          reset: cn.useCallback((function() {
            f(null)
          }), []),
          subscribeToMore: g
        }]
      }

      function Di(e) {
        var t = si(e);
        return Tn("useQueryRefHandlers", Mi, vn(t ? t.observable : void 0))(e)
      }

      function Mi(e) {
        oi(e);
        var t = cn.useState(e),
          r = t[0],
          n = t[1],
          i = cn.useState(e),
          o = i[0],
          a = i[1],
          s = si(e);
        return r !== e ? (n(e), a(e)) : ui(e, ai(o)), {
          refetch: cn.useCallback((function(e) {
            var t = s.refetch(e);
            return a(ii(s)), t
          }), [s]),
          fetchMore: cn.useCallback((function(e) {
            var t = s.fetchMore(e);
            return a(ii(s)), t
          }), [s]),
          subscribeToMore: s.observable.subscribeToMore
        }
      }

      function Pi(e) {
        var t = si(e);
        return Tn("useReadQuery", Ci, vn(t ? t.observable : void 0))(e)
      }

      function Ci(e) {
        oi(e);
        var t = cn.useMemo((function() {
            return si(e)
          }), [e]),
          r = cn.useCallback((function() {
            return ai(e)
          }), [e]);
        t.disposed && (t.reinitialize(), ui(e, t.promise)), cn.useEffect((function() {
          return t.retain()
        }), [t]);
        var n = _n(cn.useCallback((function(r) {
            return t.listen((function(t) {
              ui(e, t), r()
            }))
          }), [t, e]), r, r),
          i = ei(n);
        return cn.useMemo((function() {
          return {
            data: i.data,
            networkStatus: i.networkStatus,
            error: mi(i)
          }
        }), [i])
      }

      function Fi(e) {
        return Tn("createQueryPreloader", Qi, e)(e)
      }
      var Qi = function(e) {
        return function(t, r) {
          var i, o;
          return void 0 === r && (r = Object.create(null)), ii(new li(e.watchQuery((0, n.__assign)((0, n.__assign)({}, r), {
            query: t
          })), {
            autoDisposeTimeoutMs: null === (o = null === (i = e.defaultOptions.react) || void 0 === i ? void 0 : i.suspense) || void 0 === o ? void 0 : o.autoDisposeTimeoutMs
          }))
        }
      }
    },
    82540: (e, t, r) => {
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, r(62229))
    }
  }
]);