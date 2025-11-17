try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3a315b83-12f4-47f4-b3ae-3a5973151ef8", e._sentryDebugIdIdentifier = "sentry-dbid-3a315b83-12f4-47f4-b3ae-3a5973151ef8")
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
  [5872], {
    35872: (e, t, r) => {
      r.r(t), r.d(t, {
        ApolloCache: () => Le,
        ApolloClient: () => ze,
        ApolloConsumer: () => Pr,
        ApolloError: () => K.K4,
        ApolloLink: () => o.C,
        ApolloProvider: () => Dr,
        Cache: () => je,
        DocumentTransform: () => Q,
        DocumentType: () => Cr,
        HttpLink: () => u.P,
        InMemoryCache: () => Lt,
        MissingFieldError: () => We,
        NetworkStatus: () => B,
        Observable: () => F.c,
        ObservableQuery: () => ae,
        checkFetcher: () => Jt.S,
        concat: () => Kt,
        createHttpLink: () => Zt.$,
        createQueryPreloader: () => Xn,
        createSignalIfSupported: () => Xt,
        defaultDataIdFromObject: () => Ke,
        defaultPrinter: () => Gt.i1,
        disableExperimentalFragmentVariables: () => vr,
        disableFragmentWarnings: () => pr,
        empty: () => Wt,
        enableExperimentalFragmentVariables: () => yr,
        execute: () => a,
        fallbackHttpConfig: () => Gt.R4,
        from: () => Ut,
        fromError: () => tr.N,
        fromPromise: () => nr,
        getApolloContext: () => Tr,
        gql: () => hr,
        isApolloError: () => K.Mn,
        isNetworkRequestSettled: () => Y,
        isReference: () => j.A_,
        makeReference: () => j.WU,
        makeVar: () => qe,
        mergeOptions: () => Ie,
        operationName: () => xr,
        parseAndCheckHttpResponse: () => Ht.OQ,
        parser: () => Ir,
        resetApolloContext: () => Rr,
        resetCaches: () => dr,
        rewriteURIForGET: () => er.E,
        selectHttpOptionsAndBody: () => Gt.Wz,
        selectHttpOptionsAndBodyInternal: () => Gt.HY,
        selectURI: () => $t.z,
        serializeFetchParameter: () => Yt.Y,
        setLogVerbosity: () => or.Q9,
        skipToken: () => xn,
        split: () => Bt,
        throwServerError: () => ir.A,
        toPromise: () => rr,
        useApolloClient: () => Mr,
        useBackgroundQuery: () => zn,
        useFragment: () => gn,
        useLazyQuery: () => hn,
        useLoadableQuery: () => Kn,
        useMutation: () => dn,
        useQuery: () => Br,
        useQueryRefHandlers: () => Hn,
        useReactiveVar: () => vn,
        useReadQuery: () => Gn,
        useSubscription: () => yn,
        useSuspenseFragment: () => Un,
        useSuspenseQuery: () => In
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

      function d(e, t) {
        try {
          return y(e, t)
        } finally {
          h.clear()
        }
      }
      const p = d;

      function y(e, t) {
        if (e === t) return !0;
        const r = c.call(e);
        if (r !== c.call(t)) return !1;
        switch (r) {
          case "[object Array]":
            if (e.length !== t.length) return !1;
          case "[object Object]": {
            if (m(e, t)) return !0;
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
            return +e === +t;
          case "[object RegExp]":
          case "[object String]":
            return e == `${t}`;
          case "[object Map]":
          case "[object Set]": {
            if (e.size !== t.size) return !1;
            if (m(e, t)) return !0;
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
            }(r, b)
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
      const b = "{ [native code] }";

      function m(e, t) {
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
        O = r(90564),
        E = r(56926),
        T = r(46026),
        R = r(81967),
        D = r(26753),
        P = r(87552),
        M = r(74197);

      function C(e) {
        return e
      }
      var Q = function() {
          function e(e, t) {
            void 0 === t && (t = Object.create(null)), this.resultCache = T.En ? new WeakSet : new Set, this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = !1 !== t.cache, this.resetCache()
          }
          return e.prototype.getCacheKey = function(e) {
            return [e]
          }, e.identity = function() {
            return new e(C, {
              cache: !1
            })
          }, e.split = function(t, r, n) {
            return void 0 === n && (n = e.identity()), Object.assign(new e(function(e) {
              return (t(e) ? r : n).transformDocument(e)
            }, {
              cache: !1
            }), {
              left: r,
              right: n
            })
          }, e.prototype.resetCache = function() {
            var t = this;
            if (this.cached) {
              var r = new E.b(T.et);
              this.performWork = (0, P.LV)(e.prototype.performWork.bind(this), {
                makeCacheKey: function(e) {
                  var n = t.getCacheKey(e);
                  if (n) return (0, i.V1)(Array.isArray(n), 105), r.lookupArray(n)
                },
                max: M.v["documentTransform.cache"],
                cache: D.l
              })
            }
          }, e.prototype.performWork = function(e) {
            return (0, R.sw)(e), this.transform(e)
          }, e.prototype.transformDocument = function(e) {
            if (this.resultCache.has(e)) return e;
            var t = this.performWork(e);
            return this.resultCache.add(t), t
          }, e.prototype.concat = function(t) {
            var r = this;
            return Object.assign(new e(function(e) {
              return t.transformDocument(r.transformDocument(e))
            }, {
              cache: !1
            }), {
              left: this,
              right: t
            })
          }, e
        }(),
        F = r(57308);

      function V(e, t, r) {
        return new F.c(function(n) {
          var i = {
            then: function(e) {
              return new Promise(function(t) {
                return t(e())
              })
            }
          };

          function o(e, t) {
            return function(r) {
              if (e) {
                var o = function() {
                  return n.closed ? 0 : e(r)
                };
                i = i.then(o, o).then(function(e) {
                  return n.next(e)
                }, function(e) {
                  return n.error(e)
                })
              } else n[t](r)
            }
          }
          var a = {
              next: o(t, "next"),
              error: o(r, "error"),
              complete: function() {
                i.then(function() {
                  return n.complete()
                })
              }
            },
            s = e.subscribe(a);
          return function() {
            return s.unsubscribe()
          }
        })
      }
      var q = r(7569);

      function x(e) {
        var t = I(e);
        return (0, q.E)(t)
      }

      function I(e) {
        var t = (0, q.E)(e.errors) ? e.errors.slice(0) : [];
        return (0, _.ST)(e) && (0, q.E)(e.incremental) && e.incremental.forEach(function(e) {
          e.errors && t.push.apply(t, e.errors)
        }), t
      }
      var j = r(39493),
        A = r(26871),
        N = r(35907);

      function z(e, t, r) {
        var n = [];
        e.forEach(function(e) {
          return e[t] && n.push(e)
        }), n.forEach(function(e) {
          return e[t](r)
        })
      }

      function L(e) {
        function t(t) {
          Object.defineProperty(e, t, {
            value: F.c
          })
        }
        return T.ol && Symbol.species && t(Symbol.species), t("@@species"), e
      }

      function W(e) {
        return e && "function" == typeof e.then
      }
      var U = function(e) {
        function t(t) {
          var r = e.call(this, function(e) {
            return r.addObserver(e),
              function() {
                return r.removeObserver(e)
              }
          }) || this;
          return r.observers = new Set, r.promise = new Promise(function(e, t) {
            r.resolve = e, r.reject = t
          }), r.handlers = {
            next: function(e) {
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), z(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout(function() {
                return t.unsubscribe()
              }), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), z(r.observers, "error", e))
            },
            complete: function() {
              var e = r,
                t = e.sub,
                n = e.sources;
              if (null !== t) {
                var i = (void 0 === n ? [] : n).shift();
                i ? W(i) ? i.then(function(e) {
                  return r.sub = e.subscribe(r.handlers)
                }, r.handlers.error) : r.sub = i.subscribe(r.handlers) : (t && setTimeout(function() {
                  return t.unsubscribe()
                }), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), z(r.observers, "complete"))
              }
            }
          }, r.nextResultListeners = new Set, r.cancel = function(e) {
            r.reject(e), r.sources = [], r.handlers.error(e)
          }, r.promise.catch(function(e) {}), "function" == typeof t && (t = [new F.c(t)]), W(t) ? t.then(function(e) {
            return r.start(e)
          }, r.handlers.error) : r.start(t), r
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
          r.size && (this.nextResultListeners = new Set, r.forEach(function(r) {
            return r(e, t)
          }))
        }, t.prototype.beforeNext = function(e) {
          var t = !1;
          this.nextResultListeners.add(function(r, n) {
            t || (t = !0, e(r, n))
          })
        }, t
      }(F.c);
      L(U);
      var B, K = r(4548);

      function H(e) {
        return !!e && e < 7
      }

      function Y(e) {
        return 7 === e || 8 === e
      }! function(e) {
        e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error"
      }(B || (B = {}));
      var G = r(86570),
        J = Object.prototype.toString;

      function X(e) {
        return $(e)
      }

      function $(e, t) {
        switch (J.call(e)) {
          case "[object Array]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var r = e.slice(0);
            return t.set(e, r), r.forEach(function(e, n) {
              r[n] = $(e, t)
            }), r;
          case "[object Object]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var n = Object.create(Object.getPrototypeOf(e));
            return t.set(e, n), Object.keys(e).forEach(function(r) {
              n[r] = $(e[r], t)
            }), n;
          default:
            return e
        }
      }

      function Z(e, t, r, i) {
        var o = t.data,
          a = (0, n.__rest)(t, ["data"]),
          s = r.data,
          u = (0, n.__rest)(r, ["data"]);
        return p(a, u) && ee((0, R.Vn)(e).selectionSet, o, s, {
          fragmentMap: (0, S.JG)((0, R.zK)(e)),
          variables: i
        })
      }

      function ee(e, t, r, n) {
        if (t === r) return !0;
        var i = new Set;
        return e.selections.every(function(e) {
          if (i.has(e)) return !0;
          if (i.add(e), !(0, w.MS)(e, n.variables)) return !0;
          if (te(e)) return !0;
          if ((0, j.dt)(e)) {
            var o = (0, j.ue)(e),
              a = t && t[o],
              s = r && r[o],
              u = e.selectionSet;
            if (!u) return p(a, s);
            var c = Array.isArray(a),
              l = Array.isArray(s);
            if (c !== l) return !1;
            if (c && l) {
              var f = a.length;
              if (s.length !== f) return !1;
              for (var h = 0; h < f; ++h)
                if (!ee(u, a[h], s[h], n)) return !1;
              return !0
            }
            return ee(u, a, s, n)
          }
          var d = (0, S.HQ)(e, n.fragmentMap);
          return d ? !!te(d) || ee(d.selectionSet, t, r, n) : void 0
        })
      }

      function te(e) {
        return !!e.directives && e.directives.some(re)
      }

      function re(e) {
        return "nonreactive" === e.name.value
      }
      var ne = r(38516),
        ie = Object.assign,
        oe = Object.hasOwnProperty,
        ae = function(e) {
          function t(r) {
            var i = r.queryManager,
              o = r.queryInfo,
              a = r.options,
              s = this,
              u = t.inactiveOnCreation.getValue();
            (s = e.call(this, function(e) {
              s._getOrCreateQuery();
              try {
                var t = e._subscription._observer;
                t && !t.error && (t.error = se)
              } catch (e) {}
              var r = !s.observers.size;
              s.observers.add(e);
              var n = s.last;
              return n && n.error ? e.error && e.error(n.error) : n && n.result && e.next && e.next(s.maskResult(n.result)), r && s.reobserve().catch(function() {}),
                function() {
                  s.observers.delete(e) && !s.observers.size && s.tearDownQuery()
                }
            }) || this).observers = new Set, s.subscriptions = new Set, s.dirty = !1, s._getOrCreateQuery = function() {
              return u && (i.queries.set(s.queryId, o), u = !1), s.queryManager.getOrCreateQuery(s.queryId)
            }, s.queryInfo = o, s.queryManager = i, s.waitForOwnResult = ce(a.fetchPolicy), s.isTornDown = !1, s.subscribeToMore = s.subscribeToMore.bind(s), s.maskResult = s.maskResult.bind(s);
            var c = i.defaultOptions.watchQuery,
              l = (void 0 === c ? {} : c).fetchPolicy,
              f = void 0 === l ? "cache-first" : l,
              h = a.fetchPolicy,
              d = void 0 === h ? f : h,
              p = a.initialFetchPolicy,
              y = void 0 === p ? "standby" === d ? f : d : p;
            s.options = (0, n.__assign)((0, n.__assign)({}, a), {
              initialFetchPolicy: y,
              fetchPolicy: d
            }), s.queryId = o.queryId || i.generateQueryId();
            var v = (0, R.Vu)(s.query);
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
            return !1 !== globalThis.__DEV__ && (0, ne.S2)("observableQuery.result", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(23)
            }), new Promise(function(t, r) {
              var n = {
                  next: function(r) {
                    t(r), e.observers.delete(n), e.observers.size || e.queryManager.removeQuery(e.queryId), setTimeout(function() {
                      i.unsubscribe()
                    }, 0)
                  },
                  error: r
                },
                i = e.subscribe(n)
            })
          }, t.prototype.resetDiff = function() {
            this.queryInfo.resetDiff()
          }, t.prototype.getCurrentFullResult = function(e) {
            var t = this;
            void 0 === e && (e = !0);
            var r = (0, ne.lz)("getLastResult", function() {
                return t.getLastResult(!0)
              }),
              i = this.queryInfo.networkStatus || r && r.networkStatus || B.ready,
              o = (0, n.__assign)((0, n.__assign)({}, r), {
                loading: H(i),
                networkStatus: i
              }),
              a = this.options.fetchPolicy,
              s = void 0 === a ? "cache-first" : a;
            if (ce(s) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var u = this.queryInfo.getDiff();
              (u.complete || this.options.returnPartialData) && (o.data = u.result), d(o.data, {}) && (o.data = void 0), u.complete ? (delete o.partial, !u.complete || o.networkStatus !== B.loading || "cache-first" !== s && "cache-only" !== s || (o.networkStatus = B.ready, o.loading = !1)) : o.partial = !0, o.networkStatus === B.ready && (o.error || o.errors) && (o.networkStatus = B.error), !1 === globalThis.__DEV__ || u.complete || this.options.partialRefetch || o.loading || o.data || o.error || ue(u.missing)
            }
            return e && this.updateLastResult(o), o
          }, t.prototype.getCurrentResult = function(e) {
            return void 0 === e && (e = !0), this.maskResult(this.getCurrentFullResult(e))
          }, t.prototype.isDifferentFromLastResult = function(e, t) {
            if (!this.last) return !0;
            var r = this.queryManager.getDocumentInfo(this.query),
              n = this.queryManager.dataMasking,
              i = n ? r.nonReactiveQuery : this.query;
            return (n || r.hasNonreactiveDirective ? !Z(i, this.last.result, e, this.variables) : !d(this.last.result, e)) || t && !d(this.last.variables, t)
          }, t.prototype.getLast = function(e, t) {
            var r = this.last;
            if (r && r[e] && (!t || d(r.variables, this.variables))) return r[e]
          }, t.prototype.getLastResult = function(e) {
            return !1 !== globalThis.__DEV__ && (0, ne.S2)("getLastResult", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(24)
            }), this.getLast("result", e)
          }, t.prototype.getLastError = function(e) {
            return !1 !== globalThis.__DEV__ && (0, ne.S2)("getLastError", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(25)
            }), this.getLast("error", e)
          }, t.prototype.resetLastResults = function() {
            !1 !== globalThis.__DEV__ && (0, ne.S2)("resetLastResults", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(26)
            }), delete this.last, this.isTornDown = !1
          }, t.prototype.resetQueryStoreErrors = function() {
            !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(27), this.queryManager.resetErrors(this.queryId)
          }, t.prototype.refetch = function(e) {
            var t, r = {
                pollInterval: 0
              },
              o = this.options.fetchPolicy;
            if (r.fetchPolicy = "no-cache" === o ? "no-cache" : "network-only", !1 !== globalThis.__DEV__ && e && oe.call(e, "variables")) {
              var a = (0, R.AT)(this.query),
                s = a.variableDefinitions;
              s && s.some(function(e) {
                return "variables" === e.variable.name.value
              }) || !1 !== globalThis.__DEV__ && i.V1.warn(28, e, (null === (t = a.name) || void 0 === t ? void 0 : t.value) || a)
            }
            return e && !d(this.options.variables, e) && (r.variables = this.options.variables = (0, n.__assign)((0, n.__assign)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(r, B.refetch)
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
            a.networkStatus = B.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
            var u = new Set,
              c = null == e ? void 0 : e.updateQuery,
              l = "no-cache" !== this.options.fetchPolicy;
            return l || (0, i.V1)(c, 29), this.queryManager.fetchQuery(o, r, B.fetchMore).then(function(i) {
              if (t.queryManager.removeQuery(o), a.networkStatus === B.fetchMore && (a.networkStatus = s), l) t.queryManager.cache.batch({
                update: function(n) {
                  var o = e.updateQuery;
                  o ? n.updateQuery({
                    query: t.query,
                    variables: t.variables,
                    returnPartialData: !0,
                    optimistic: !1
                  }, function(e) {
                    return o(e, {
                      fetchMoreResult: i.data,
                      variables: r.variables
                    })
                  }) : n.writeQuery({
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
                  loading: H(s),
                  data: h
                }), t.variables)
              }
              return t.maskResult(i)
            }).finally(function() {
              l && !u.has(t.query) && t.reobserveCacheFirst()
            })
          }, t.prototype.subscribeToMore = function(e) {
            var t = this,
              r = this.queryManager.startGraphQLSubscription({
                query: e.document,
                variables: e.variables,
                context: e.context
              }).subscribe({
                next: function(r) {
                  var i = e.updateQuery;
                  i && t.updateQuery(function(e, t) {
                    return i(e, (0, n.__assign)({
                      subscriptionData: r
                    }, t))
                  })
                },
                error: function(t) {
                  e.onError ? e.onError(t) : !1 !== globalThis.__DEV__ && i.V1.error(30, t)
                }
              });
            return this.subscriptions.add(r),
              function() {
                t.subscriptions.delete(r) && r.unsubscribe()
              }
          }, t.prototype.setOptions = function(e) {
            return !1 !== globalThis.__DEV__ && ((0, ne.cc)(e, "canonizeResults", "setOptions"), (0, ne.S2)("setOptions", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(31)
            })), this.reobserve(e)
          }, t.prototype.silentSetOptions = function(e) {
            var t = (0, G.o)(this.options, e || {});
            ie(this.options, t)
          }, t.prototype.setVariables = function(e) {
            var t = this;
            return d(this.variables, e) ? this.observers.size ? (0, ne.lz)("observableQuery.result", function() {
              return t.result()
            }) : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
              fetchPolicy: this.options.initialFetchPolicy,
              variables: e
            }, B.setVariables) : Promise.resolve())
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
            var n = this._getOrCreateQuery();
            return n.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(n, e, t, r)
          }, t.prototype.updatePolling = function() {
            var e = this;
            if (!this.queryManager.ssrMode) {
              var t = this.pollingInfo,
                r = this.options.pollInterval;
              if (r && this.hasObservers()) {
                if (!t || t.interval !== r) {
                  (0, i.V1)(r, 32), (t || (this.pollingInfo = {})).interval = r;
                  var n = function() {
                      var t, r;
                      e.pollingInfo && (H(e.queryInfo.networkStatus) || (null === (r = (t = e.options).skipPollAttempt) || void 0 === r ? void 0 : r.call(t)) ? o() : e.reobserve({
                        fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only"
                      }, B.poll).then(o, o))
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
            var r = this;
            void 0 === t && (t = this.variables);
            var i = (0, ne.lz)("getLastError", function() {
              return r.getLastError()
            });
            return i && this.last && !d(t, this.last.variables) && (i = void 0), this.last = (0, n.__assign)({
              result: this.queryManager.assumeImmutableResults ? e : X(e),
              variables: t
            }, i ? {
              error: i
            } : null)
          }, t.prototype.reobserveAsConcast = function(e, t) {
            var r = this;
            this.isTornDown = !1;
            var i = t === B.refetch || t === B.fetchMore || t === B.poll,
              o = this.options.variables,
              a = this.options.fetchPolicy,
              s = (0, G.o)(this.options, e || {}),
              u = i ? s : ie(this.options, s),
              c = this.transformDocument(u.query);
            this.lastQuery = c, i || (this.updatePolling(), !e || !e.variables || d(e.variables, o) || "standby" === u.fetchPolicy || u.fetchPolicy !== a && "function" != typeof u.nextFetchPolicy || (this.applyNextFetchPolicy("variables-changed", u), void 0 === t && (t = B.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = ce(u.fetchPolicy));
            var l = function() {
                r.concast === p && (r.waitForOwnResult = !1)
              },
              f = u.variables && (0, n.__assign)({}, u.variables),
              h = this.fetch(u, t, c),
              p = h.concast,
              y = h.fromLink,
              v = {
                next: function(e) {
                  d(r.variables, f) && (l(), r.reportResult(e, f))
                },
                error: function(e) {
                  d(r.variables, f) && ((0, K.Mn)(e) || (e = new K.K4({
                    networkError: e
                  })), l(), r.reportError(e, f))
                }
              };
            return i || !y && this.concast || (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = p, this.observer = v), p.addObserver(v), p
          }, t.prototype.reobserve = function(e, t) {
            return (r = this.reobserveAsConcast(e, t).promise.then(this.maskResult)).catch(function() {}), r;
            var r
          }, t.prototype.resubscribeAfterError = function() {
            for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            var n = this.last;
            (0, ne.lz)("resetLastResults", function() {
              return e.resetLastResults()
            });
            var i = this.subscribe.apply(this, t);
            return this.last = n, i
          }, t.prototype.observe = function() {
            this.reportResult(this.getCurrentFullResult(!1), this.variables)
          }, t.prototype.reportResult = function(e, t) {
            var r = this,
              n = (0, ne.lz)("getLastError", function() {
                return r.getLastError()
              }),
              i = this.isDifferentFromLastResult(e, t);
            (n || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (n || i) && z(this.observers, "next", this.maskResult(e))
          }, t.prototype.reportError = function(e, t) {
            var r = this,
              i = (0, n.__assign)((0, n.__assign)({}, (0, ne.lz)("getLastResult", function() {
                return r.getLastResult()
              })), {
                error: e,
                errors: e.graphQLErrors,
                networkStatus: B.error,
                loading: !1
              });
            this.updateLastResult(i, t), z(this.observers, "error", this.last.error = e)
          }, t.prototype.hasObservers = function() {
            return this.observers.size > 0
          }, t.prototype.tearDownQuery = function() {
            this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach(function(e) {
              return e.unsubscribe()
            }), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
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
            this.dirty || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout(function() {
              return e.notify()
            }, 0)))
          }, t.prototype.notify = function() {
            this.cancelNotifyTimeout(), this.dirty && ("cache-only" != this.options.fetchPolicy && "cache-and-network" != this.options.fetchPolicy && H(this.queryInfo.networkStatus) || (this.queryInfo.getDiff().fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst())), this.dirty = !1
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
          }, t.inactiveOnCreation = new P.DX, t
        }(F.c);

      function se(e) {
        !1 !== globalThis.__DEV__ && i.V1.error(33, e.message, e.stack)
      }

      function ue(e) {
        !1 !== globalThis.__DEV__ && e && !1 !== globalThis.__DEV__ && i.V1.debug(34, e)
      }

      function ce(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }
      L(ae);
      var le = r(48169),
        fe = new(T.et ? WeakMap : Map);

      function he(e, t) {
        var r = e[t];
        "function" == typeof r && (e[t] = function() {
          return fe.set(e, (fe.get(e) + 1) % 1e15), r.apply(this, arguments)
        })
      }
      var de = function() {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
          var r = this.cache = e.cache;
          fe.has(r) || (fe.set(r, 0), he(r, "evict"), he(r, "modify"), he(r, "reset"))
        }
        return e.prototype.init = function(e) {
          var t = e.networkStatus || B.loading;
          return this.variables && this.networkStatus !== B.loading && !d(this.variables, e.variables) && (t = B.setVariables), d(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: t
          }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this
        }, e.prototype.resetDiff = function() {
          this.lastDiff = void 0
        }, e.prototype.getDiff = function() {
          var e = this,
            t = this.getDiffOptions();
          if (this.lastDiff && d(t, this.lastDiff.options)) return this.lastDiff.diff;
          this.updateWatch(this.variables);
          var r = this.observableQuery;
          if (r && "no-cache" === r.options.fetchPolicy) return {
            complete: !1
          };
          var n = (0, ne.lz)("canonizeResults", function() {
            return e.cache.diff(t)
          });
          return this.updateLastDiff(n, t), n
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
          var t, r = this,
            n = this.lastDiff && this.lastDiff.diff;
          e && !e.complete && (0, ne.lz)("getLastError", function() {
            var e;
            return null === (e = r.observableQuery) || void 0 === e ? void 0 : e.getLastError()
          }) || (this.updateLastDiff(e), d(n && n.result, e && e.result) || null === (t = this.observableQuery) || void 0 === t || t.scheduleNotify())
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
            this.lastWatch && d(i, this.lastWatch) || (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i))
          }
        }, e.prototype.resetLastWrite = function() {
          this.lastWrite = void 0
        }, e.prototype.shouldWrite = function(e, t) {
          var r = this.lastWrite;
          return !(r && r.dmCount === fe.get(this.cache) && d(t, r.variables) && d(e.data, r.result.data))
        }, e.prototype.markResult = function(e, t, r, n) {
          var i, o = this,
            a = new le.ZI,
            s = (0, q.E)(e.errors) ? e.errors.slice(0) : [];
          if (null === (i = this.observableQuery) || void 0 === i || i.resetNotifications(), "incremental" in e && (0, q.E)(e.incremental)) {
            var u = (0, _.bd)(this.getDiff().result, e);
            e.data = u
          } else if ("hasNext" in e && e.hasNext) {
            var c = this.getDiff();
            e.data = a.merge(c.result, e.data)
          }
          this.graphQLErrors = s, "no-cache" === r.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
          }, this.getDiffOptions(r.variables)) : 0 !== n && (pe(e, r.errorPolicy) ? this.cache.performTransaction(function(i) {
            if (o.shouldWrite(e, r.variables)) i.writeQuery({
              query: t,
              data: e.data,
              variables: r.variables,
              overwrite: 1 === n
            }), o.lastWrite = {
              result: e,
              variables: r.variables,
              dmCount: fe.get(o.cache)
            };
            else if (o.lastDiff && o.lastDiff.diff.complete) return void(e.data = o.lastDiff.diff.result);
            var a = o.getDiffOptions(r.variables),
              s = (0, ne.lz)("canonizeResults", function() {
                return i.diff(a)
              });
            !o.stopped && d(o.variables, r.variables) && o.updateWatch(r.variables), o.updateLastDiff(s, a), s.complete && (e.data = s.result)
          }) : this.lastWrite = void 0)
        }, e.prototype.markReady = function() {
          return this.networkError = null, this.networkStatus = B.ready
        }, e.prototype.markError = function(e) {
          var t;
          return this.networkStatus = B.error, this.lastWrite = void 0, null === (t = this.observableQuery) || void 0 === t || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function pe(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !x(e);
        return !n && r && e.data && (n = !0), n
      }
      var ye = r(35588),
        ve = r(15492),
        ge = r(16565);

      function be(e) {
        return !1 !== globalThis.__DEV__ && (t = e, (r = new Set([t])).forEach(function(e) {
          (0, A.U)(e) && function(e) {
            if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e)) try {
              Object.freeze(e)
            } catch (e) {
              if (e instanceof TypeError) return null;
              throw e
            }
            return e
          }(e) === e && Object.getOwnPropertyNames(e).forEach(function(t) {
            (0, A.U)(e[t]) && r.add(e[t])
          })
        })), e;
        var t, r
      }
      var me = T.et ? WeakMap : Map,
        _e = T.En ? WeakSet : Set,
        we = new P.DX,
        ke = !1;

      function Se() {
        ke || (ke = !0, !1 !== globalThis.__DEV__ && i.V1.warn(64))
      }

      function Oe(e, t, r) {
        return we.withValue(!0, function() {
          var n = Ee(e, t, r, !1);
          return Object.isFrozen(e) && be(n), n
        })
      }

      function Ee(e, t, r, n, o) {
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
              d = f[1];
            if (null !== d) {
              var p = Ee(d, t, r, n, !1 !== globalThis.__DEV__ ? "".concat(o || "", "[").concat(h, "]") : void 0);
              s.has(p) && s.add(u), u[h] = p
            } else u[h] = null
          }
          return s.has(u) ? u : e
        }
        for (var y = 0, v = t.selections; y < v.length; y++) {
          var g = v[y],
            b = void 0;
          if (n && s.add(u), g.kind === ge.Kind.FIELD) {
            var m = (0, j.ue)(g),
              _ = g.selectionSet;
            if (void 0 === (b = u[m] || e[m])) continue;
            _ && null !== b && (p = Ee(e[m], _, r, n, !1 !== globalThis.__DEV__ ? "".concat(o || "", ".").concat(m) : void 0), s.has(p) && (b = p)), !1 === globalThis.__DEV__ && (u[m] = b), !1 !== globalThis.__DEV__ && (n && "__typename" !== m && !(null === (a = Object.getOwnPropertyDescriptor(u, m)) || void 0 === a ? void 0 : a.value) ? Object.defineProperty(u, m, Te(m, b, o || "", r.operationName, r.operationType)) : (delete u[m], u[m] = b))
          }
          if (g.kind !== ge.Kind.INLINE_FRAGMENT || g.typeCondition && !r.cache.fragmentMatches(g, e.__typename) || (b = Ee(e, g.selectionSet, r, n, o)), g.kind === ge.Kind.FRAGMENT_SPREAD) {
            var k = g.name.value,
              S = r.fragmentMap[k] || (r.fragmentMap[k] = r.cache.lookupFragment(k));
            (0, i.V1)(S, 59, k);
            var O = (0, w.s7)(g);
            "mask" !== O && (b = Ee(e, S.selectionSet, r, "migrate" === O, o))
          }
          s.has(b) && s.add(u)
        }
        return "__typename" in e && !("__typename" in u) && (u.__typename = e.__typename), Object.keys(u).length !== Object.keys(e).length && s.add(u), s.has(u) ? u : e
      }

      function Te(e, t, r, n, o) {
        var a = function() {
          return we.getValue() || (!1 !== globalThis.__DEV__ && i.V1.warn(60, n ? "".concat(o, " '").concat(n, "'") : "anonymous ".concat(o), "".concat(r, ".").concat(e).replace(/^\./, "")), a = function() {
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

      function Re(e, t, r, n) {
        if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && Se(), e;
        var o = t.definitions.filter(function(e) {
          return e.kind === ge.Kind.FRAGMENT_DEFINITION
        });
        void 0 === n && ((0, i.V1)(1 === o.length, 61, o.length), n = o[0].name.value);
        var a = o.find(function(e) {
          return e.name.value === n
        });
        return (0, i.V1)(!!a, 62, n), null == e || p(e, {}) ? e : Oe(e, a.selectionSet, {
          operationType: "fragment",
          operationName: a.name.value,
          fragmentMap: (0, S.JG)((0, R.zK)(t)),
          cache: r,
          mutableTargets: new me,
          knownChanged: new _e
        })
      }
      var De = Object.prototype.hasOwnProperty,
        Pe = Object.create(null),
        Me = function() {
          function e(e) {
            var t = this;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new ve.A(M.v["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new E.b(!1), this.noCacheWarningsByQueryId = new Set;
            var r = new Q(function(e) {
              return t.cache.transformDocument(e)
            }, {
              cache: !1
            });
            this.cache = e.cache, this.link = e.link, this.defaultOptions = e.defaultOptions, this.queryDeduplication = e.queryDeduplication, this.clientAwareness = e.clientAwareness, this.localState = e.localState, this.ssrMode = e.ssrMode, this.assumeImmutableResults = e.assumeImmutableResults, this.dataMasking = e.dataMasking;
            var n = e.documentTransform;
            this.documentTransform = n ? r.concat(n).concat(r) : r, this.defaultContext = e.defaultContext || Object.create(null), (this.onBroadcast = e.onBroadcast) && (this.mutationStore = Object.create(null))
          }
          return e.prototype.stop = function() {
            var e = this;
            this.queries.forEach(function(t, r) {
              e.stopQueryNoBroadcast(r)
            }), this.cancelPendingFetches((0, i.vA)(35))
          }, e.prototype.cancelPendingFetches = function(e) {
            this.fetchCancelFns.forEach(function(t) {
              return t(e)
            }), this.fetchCancelFns.clear()
          }, e.prototype.mutate = function(e) {
            return (0, n.__awaiter)(this, arguments, void 0, function(e) {
              var t, r, o, a, s, u, c, l = e.mutation,
                f = e.variables,
                h = e.optimisticResponse,
                d = e.updateQueries,
                p = e.refetchQueries,
                y = void 0 === p ? [] : p,
                v = e.awaitRefetchQueries,
                g = void 0 !== v && v,
                b = e.update,
                m = e.onQueryUpdated,
                _ = e.fetchPolicy,
                w = void 0 === _ ? (null === (u = this.defaultOptions.mutate) || void 0 === u ? void 0 : u.fetchPolicy) || "network-only" : _,
                k = e.errorPolicy,
                S = void 0 === k ? (null === (c = this.defaultOptions.mutate) || void 0 === c ? void 0 : c.errorPolicy) || "none" : k,
                O = e.keepRootFields,
                E = e.context;
              return (0, n.__generator)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (0, i.V1)(l, 36), (0, i.V1)("network-only" === w || "no-cache" === w, 37), t = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), r = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), r ? [4, this.localState.addExportedVariables(l, f, E)] : [3, 2];
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
                      updateQueries: d,
                      update: b,
                      keepRootFields: O
                    }), this.broadcastQueries(), s = this, [2, new Promise(function(e, r) {
                      return V(s.getObservableFromLink(l, (0, n.__assign)((0, n.__assign)({}, E), {
                        optimisticResponse: a ? h : void 0
                      }), f, {}, !1), function(e) {
                        if (x(e) && "none" === S) throw new K.K4({
                          graphQLErrors: I(e)
                        });
                        o && (o.loading = !1, o.error = null);
                        var r = (0, n.__assign)({}, e);
                        return "function" == typeof y && (y = y(r)), "ignore" === S && x(r) && delete r.errors, s.markMutationResult({
                          mutationId: t,
                          result: r,
                          document: l,
                          variables: f,
                          fetchPolicy: w,
                          errorPolicy: S,
                          context: E,
                          update: b,
                          updateQueries: d,
                          awaitRefetchQueries: g,
                          refetchQueries: y,
                          removeOptimistic: a ? t : void 0,
                          onQueryUpdated: m,
                          keepRootFields: O
                        })
                      }).subscribe({
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
                          o && (o.loading = !1, o.error = e), a && s.cache.removeOptimistic(t), s.broadcastQueries(), r(e instanceof K.K4 ? e : new K.K4({
                            networkError: e
                          }))
                        }
                      })
                    })]
                }
              })
            })
          }, e.prototype.markMutationResult = function(e, t) {
            var r = this;
            void 0 === t && (t = this.cache);
            var i = e.result,
              o = [],
              a = "no-cache" === e.fetchPolicy;
            if (!a && pe(i, e.errorPolicy)) {
              if ((0, _.ST)(i) || o.push({
                  result: i.data,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }), (0, _.ST)(i) && (0, q.E)(i.incremental)) {
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
              c && this.queries.forEach(function(e, n) {
                var a = e.observableQuery,
                  s = a && a.queryName;
                if (s && De.call(c, s)) {
                  var u = c[s],
                    l = r.queries.get(n),
                    f = l.document,
                    h = l.variables,
                    d = t.diff({
                      query: f,
                      variables: h,
                      returnPartialData: !0,
                      optimistic: !1
                    }),
                    p = d.result;
                  if (d.complete && p) {
                    var y = u(p, {
                      mutationResult: i,
                      queryName: f && (0, R.n4)(f) || void 0,
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
              })
            }
            if (o.length > 0 || (e.refetchQueries || "").length > 0 || e.update || e.onQueryUpdated || e.removeOptimistic) {
              var l = [];
              if (this.refetchQueries({
                  updateCache: function(t) {
                    a || o.forEach(function(e) {
                      return t.write(e)
                    });
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
                }).forEach(function(e) {
                  return l.push(e)
                }), e.awaitRefetchQueries || e.onQueryUpdated) return Promise.all(l).then(function() {
                return i
              })
            }
            return Promise.resolve(i)
          }, e.prototype.markMutationOptimistic = function(e, t) {
            var r = this,
              o = "function" == typeof e ? e(t.variables, {
                IGNORE: Pe
              }) : e;
            return o !== Pe && (this.cache.recordOptimisticTransaction(function(e) {
              try {
                r.markMutationResult((0, n.__assign)((0, n.__assign)({}, t), {
                  result: {
                    data: o
                  }
                }), e)
              } catch (e) {
                !1 !== globalThis.__DEV__ && i.V1.error(e)
              }
            }, t.mutationId), !0)
          }, e.prototype.fetchQuery = function(e, t, r) {
            return this.fetchConcastWithInfo(this.getOrCreateQuery(e), t, r).concast.promise
          }, e.prototype.getQueryStore = function() {
            var e = Object.create(null);
            return this.queries.forEach(function(t, r) {
              e[r] = {
                variables: t.variables,
                networkStatus: t.networkStatus,
                networkError: t.networkError,
                graphQLErrors: t.graphQLErrors
              }
            }), e
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
                defaultVars: (0, R.wY)((0, R.Vu)(e)),
                asQuery: (0, n.__assign)((0, n.__assign)({}, e), {
                  definitions: e.definitions.map(function(e) {
                    return "OperationDefinition" === e.kind && "query" !== e.operation ? (0, n.__assign)((0, n.__assign)({}, e), {
                      operation: "query"
                    }) : e
                  })
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
            var r = new de(this),
              i = new ae({
                queryManager: this,
                queryInfo: r,
                options: e
              });
            return i.lastQuery = t, ae.inactiveOnCreation.getValue() || this.queries.set(i.queryId, r), r.init({
              document: t,
              observableQuery: i,
              variables: i.variables
            }), i
          }, e.prototype.query = function(e, t) {
            var r = this;
            void 0 === t && (t = this.generateQueryId()), (0, i.V1)(e.query, 38), (0, i.V1)("Document" === e.query.kind, 39), (0, i.V1)(!e.returnPartialData, 40), (0, i.V1)(!e.pollInterval, 41);
            var o = this.transform(e.query);
            return this.fetchQuery(t, (0, n.__assign)((0, n.__assign)({}, e), {
              query: o
            })).then(function(i) {
              return i && (0, n.__assign)((0, n.__assign)({}, i), {
                data: r.maskOperation({
                  document: o,
                  data: i.data,
                  fetchPolicy: e.fetchPolicy,
                  id: t
                })
              })
            }).finally(function() {
              return r.stopQuery(t)
            })
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
            }), this.cancelPendingFetches((0, i.vA)(42)), this.queries.forEach(function(e) {
              e.observableQuery ? e.networkStatus = B.loading : e.stop()
            }), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e)
          }, e.prototype.getObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = "active");
            var r = new Map,
              o = new Map,
              a = new Map,
              s = new Set;
            return Array.isArray(e) && e.forEach(function(e) {
              if ("string" == typeof e) o.set(e, e), a.set(e, !1);
              else if ((0, j.Kc)(e)) {
                var r = (0, ye.y)(t.transform(e));
                o.set(r, (0, R.n4)(e)), a.set(r, !1)
              } else(0, A.U)(e) && e.query && s.add(e)
            }), this.queries.forEach(function(t, n) {
              var i = t.observableQuery,
                o = t.document;
              if (i) {
                if ("all" === e) return void r.set(n, i);
                var s = i.queryName;
                if ("standby" === i.options.fetchPolicy || "active" === e && !i.hasObservers()) return;
                ("active" === e || s && a.has(s) || o && a.has((0, ye.y)(o))) && (r.set(n, i), s && a.set(s, !0), o && a.set((0, ye.y)(o), !0))
              }
            }), s.size && s.forEach(function(e) {
              var o = (0, N.v)("legacyOneTimeQuery"),
                a = t.getOrCreateQuery(o).init({
                  document: e.query,
                  variables: e.variables
                }),
                s = new ae({
                  queryManager: t,
                  queryInfo: a,
                  options: (0, n.__assign)((0, n.__assign)({}, e), {
                    fetchPolicy: "network-only"
                  })
                });
              (0, i.V1)(s.queryId === o), a.setObservableQuery(s), r.set(o, s)
            }), !1 !== globalThis.__DEV__ && a.size && a.forEach(function(e, t) {
              if (!e) {
                var r = o.get(t);
                r ? !1 !== globalThis.__DEV__ && i.V1.warn(43, r) : !1 !== globalThis.__DEV__ && i.V1.warn(44)
              }
            }), r
          }, e.prototype.reFetchObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = !1);
            var r = [];
            return this.getObservableQueries(e ? "all" : "active").forEach(function(n, i) {
              var o = n.options.fetchPolicy;
              (0, ne.lz)("resetLastResults", function() {
                return n.resetLastResults()
              }), (e || "standby" !== o && "cache-only" !== o) && r.push(n.refetch()), (t.queries.get(i) || n.queryInfo).setDiff(null)
            }), this.broadcastQueries(), Promise.all(r)
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
              return t.getObservableFromLink(r, u, e, l).map(function(n) {
                "no-cache" !== i && (pe(n, a) && t.cache.write({
                  query: r,
                  result: n.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: e
                }), t.broadcastQueries());
                var o = x(n),
                  s = (0, K.uR)(n);
                if (o || s) {
                  var u = {};
                  if (o && (u.graphQLErrors = n.errors), s && (u.protocolErrors = n.extensions[K.K$]), "none" === a || s) throw new K.K4(u)
                }
                return "ignore" === a && delete n.errors, n
              })
            };
            if (this.getDocumentInfo(r).hasClientExports) {
              var h = this.localState.addExportedVariables(r, n, u).then(f);
              return new F.c(function(e) {
                var t = null;
                return h.then(function(r) {
                    return t = r.subscribe(e)
                  }, e.error),
                  function() {
                    return t && t.unsubscribe()
                  }
              })
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
            this.onBroadcast && this.onBroadcast(), this.queries.forEach(function(e) {
              var t;
              return null === (t = e.observableQuery) || void 0 === t ? void 0 : t.notify()
            })
          }, e.prototype.getLocalState = function() {
            return this.localState
          }, e.prototype.getObservableFromLink = function(e, t, r, i, o) {
            var s, u, c = this;
            void 0 === o && (o = null !== (s = null == t ? void 0 : t.queryDeduplication) && void 0 !== s ? s : this.queryDeduplication);
            var l = this.getDocumentInfo(e),
              f = l.serverQuery,
              h = l.clientQuery;
            if (f) {
              var d = this.inFlightLinkObservables,
                p = this.link,
                y = {
                  query: f,
                  variables: r,
                  operationName: (0, R.n4)(f) || void 0,
                  context: this.prepareContext((0, n.__assign)((0, n.__assign)({}, t), {
                    forceFetch: !o
                  })),
                  extensions: i
                };
              if (t = y.context, o) {
                var v = (0, ye.y)(f),
                  g = (0, O.M)(r),
                  b = d.lookup(v, g);
                if (!(u = b.observable)) {
                  var m = new U([a(p, y)]);
                  u = b.observable = m, m.beforeNext(function e(t, r) {
                    "next" === t && "hasNext" in r && r.hasNext ? m.beforeNext(e) : d.remove(v, g)
                  })
                }
              } else u = new U([a(p, y)])
            } else u = new U([F.c.of({
              data: {}
            })]), t = this.prepareContext(t);
            return h && (u = V(u, function(e) {
              return c.localState.runResolvers({
                document: h,
                remoteResult: e,
                context: t,
                variables: r
              })
            })), u
          }, e.prototype.getResultsFromLink = function(e, t, r) {
            var n = e.lastRequestId = this.generateRequestId(),
              i = this.cache.transformForLink(r.query);
            return V(this.getObservableFromLink(i, r.context, r.variables), function(o) {
              var a = I(o),
                s = a.length > 0,
                u = r.errorPolicy;
              if (n >= e.lastRequestId) {
                if (s && "none" === u) throw e.markError(new K.K4({
                  graphQLErrors: a
                }));
                e.markResult(o, i, r, t), e.markReady()
              }
              var c = {
                data: o.data,
                loading: !1,
                networkStatus: B.ready
              };
              return s && "none" === u && (c.data = void 0), s && "ignore" !== u && (c.errors = a, c.networkStatus = B.error), c
            }, function(t) {
              var r = (0, K.Mn)(t) ? t : new K.K4({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            })
          }, e.prototype.fetchConcastWithInfo = function(e, t, r, n) {
            var i = this;
            void 0 === r && (r = B.loading), void 0 === n && (n = t.query);
            var o, a, s = this.getVariables(n, t.variables),
              u = this.defaultOptions.watchQuery,
              c = t.fetchPolicy,
              l = void 0 === c ? u && u.fetchPolicy || "cache-first" : c,
              f = t.errorPolicy,
              h = void 0 === f ? u && u.errorPolicy || "none" : f,
              d = t.returnPartialData,
              p = void 0 !== d && d,
              y = t.notifyOnNetworkStatusChange,
              v = void 0 !== y && y,
              g = t.context,
              b = void 0 === g ? {} : g,
              m = Object.assign({}, t, {
                query: n,
                variables: s,
                fetchPolicy: l,
                errorPolicy: h,
                returnPartialData: p,
                notifyOnNetworkStatusChange: v,
                context: b
              }),
              _ = function(n) {
                m.variables = n;
                var o = i.fetchQueryByPolicy(e, m, r);
                return "standby" !== m.fetchPolicy && o.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", t), o
              },
              w = function() {
                return i.fetchCancelFns.delete(e.queryId)
              };
            if (this.fetchCancelFns.set(e.queryId, function(e) {
                w(), setTimeout(function() {
                  return o.cancel(e)
                })
              }), this.getDocumentInfo(m.query).hasClientExports) o = new U(this.localState.addExportedVariables(m.query, m.variables, m.context).then(_).then(function(e) {
              return e.sources
            })), a = !0;
            else {
              var k = _(m.variables);
              a = k.fromLink, o = new U(k.sources)
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
              s = void 0 === a ? o ? (0, N.v)("refetchQueries") : void 0 : a,
              u = e.onQueryUpdated,
              c = new Map;
            n && this.getObservableQueries(n).forEach(function(e, r) {
              c.set(r, {
                oq: e,
                lastDiff: (t.queries.get(r) || e.queryInfo).getDiff()
              })
            });
            var l = new Map;
            return r && this.cache.batch({
              update: r,
              optimistic: o && s || !1,
              removeOptimistic: s,
              onWatchUpdated: function(e, t, r) {
                var n = e.watcher instanceof de && e.watcher.observableQuery;
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
            }), c.size && c.forEach(function(e, r) {
              var n, i = e.oq,
                o = e.lastDiff,
                a = e.diff;
              u && (a || (a = (0, ne.lz)("canonizeResults", function() {
                return t.cache.diff(i.queryInfo.getDiffOptions())
              })), n = u(i, a, o)), u && !0 !== n || (n = i.refetch()), !1 !== n && l.set(i, n), r.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(r)
            }), s && this.cache.removeOptimistic(s), l
          }, e.prototype.maskOperation = function(e) {
            var t, r, n, o = e.document,
              a = e.data;
            if (!1 !== globalThis.__DEV__) {
              var s = e.fetchPolicy,
                u = e.id,
                c = null === (t = (0, R.Vu)(o)) || void 0 === t ? void 0 : t.operation,
                l = (null !== (r = null == c ? void 0 : c[0]) && void 0 !== r ? r : "o") + u;
              !this.dataMasking || "no-cache" !== s || (0, S.s6)(o) || this.noCacheWarningsByQueryId.has(l) || (this.noCacheWarningsByQueryId.add(l), !1 !== globalThis.__DEV__ && i.V1.warn(45, null !== (n = (0, R.n4)(o)) && void 0 !== n ? n : "Unnamed ".concat(null != c ? c : "operation")))
            }
            return this.dataMasking ? function(e, t, r) {
              var n;
              if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && Se(), e;
              var o = (0, R.Vu)(t);
              return (0, i.V1)(o, 63), null == e ? e : Oe(e, o.selectionSet, {
                operationType: o.operation,
                operationName: null === (n = o.name) || void 0 === n ? void 0 : n.value,
                fragmentMap: (0, S.JG)((0, R.zK)(t)),
                cache: r,
                mutableTargets: new me,
                knownChanged: new _e
              })
            }(a, o, this.cache) : a
          }, e.prototype.maskFragment = function(e) {
            var t = e.data,
              r = e.fragment,
              n = e.fragmentName;
            return this.dataMasking ? Re(t, r, this.cache, n) : t
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
              p = e.networkStatus;
            e.init({
              document: o,
              variables: a,
              networkStatus: r
            });
            var y = function() {
                return e.getDiff()
              },
              v = function(t, r) {
                void 0 === r && (r = e.networkStatus || B.loading);
                var s = t.result;
                !1 === globalThis.__DEV__ || l || d(s, {}) || ue(t.missing);
                var u = function(e) {
                  return F.c.of((0, n.__assign)({
                    data: e,
                    loading: H(r),
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
                }).then(function(e) {
                  return u(e.data || void 0)
                }) : "none" === c && r === B.refetch && Array.isArray(t.missing) ? u(void 0) : u(s)
              },
              g = "no-cache" === s ? 0 : r === B.refetch && "merge" !== u ? 1 : 2,
              b = function() {
                return i.getResultsFromLink(e, g, {
                  query: o,
                  variables: a,
                  context: f,
                  fetchPolicy: s,
                  errorPolicy: c
                })
              },
              m = h && "number" == typeof p && p !== r && H(r);
            switch (s) {
              default:
              case "cache-first":
                return (_ = y()).complete ? {
                  fromLink: !1,
                  sources: [v(_, e.markReady())]
                } : l || m ? {
                  fromLink: !0,
                  sources: [v(_), b()]
                } : {
                  fromLink: !0,
                  sources: [b()]
                };
              case "cache-and-network":
                var _;
                return (_ = y()).complete || l || m ? {
                  fromLink: !0,
                  sources: [v(_), b()]
                } : {
                  fromLink: !0,
                  sources: [b()]
                };
              case "cache-only":
                return {
                  fromLink: !1, sources: [v(y(), e.markReady())]
                };
              case "network-only":
                return m ? {
                  fromLink: !0,
                  sources: [v(y()), b()]
                } : {
                  fromLink: !0,
                  sources: [b()]
                };
              case "no-cache":
                return m ? {
                  fromLink: !0,
                  sources: [v(e.getDiff()), b()]
                } : {
                  fromLink: !0,
                  sources: [b()]
                };
              case "standby":
                return {
                  fromLink: !1, sources: []
                }
            }
          }, e.prototype.getOrCreateQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new de(this, e)), this.queries.get(e)
          }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, this.defaultContext), t), {
              clientAwareness: this.clientAwareness
            })
          }, e
        }(),
        Ce = new P.DX,
        Qe = new WeakMap;

      function Fe(e) {
        var t = Qe.get(e);
        return t || Qe.set(e, t = {
          vars: new Set,
          dep: (0, P.yN)()
        }), t
      }

      function Ve(e) {
        Fe(e).vars.forEach(function(t) {
          return t.forgetCache(e)
        })
      }

      function qe(e) {
        var t = new Set,
          r = new Set,
          n = function(o) {
            if (arguments.length > 0) {
              if (e !== o) {
                e = o, t.forEach(function(e) {
                  Fe(e).dep.dirty(n),
                    function(e) {
                      e.broadcastWatches && e.broadcastWatches()
                    }(e)
                });
                var a = Array.from(r);
                r.clear(), a.forEach(function(t) {
                  return t(e)
                })
              }
            } else {
              var s = Ce.getValue();
              s && (i(s), Fe(s).dep(n))
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
          return t.add(e), Fe(e).vars.add(n), n
        };
        return n.forgetCache = function(e) {
          return t.delete(e)
        }, n
      }
      var xe = function() {
        function e(e) {
          var t = e.cache,
            r = e.client,
            n = e.resolvers,
            i = e.fragmentMatcher;
          this.selectionsToResolveCache = new WeakMap, this.cache = t, r && (this.client = r), n && this.addResolvers(n), i && this.setFragmentMatcher(i)
        }
        return e.prototype.addResolvers = function(e) {
          var t = this;
          this.resolvers = this.resolvers || {}, Array.isArray(e) ? e.forEach(function(e) {
            t.resolvers = (0, le.D9)(t.resolvers, e)
          }) : this.resolvers = (0, le.D9)(this.resolvers, e)
        }, e.prototype.setResolvers = function(e) {
          this.resolvers = {}, this.addResolvers(e)
        }, e.prototype.getResolvers = function() {
          return this.resolvers || {}
        }, e.prototype.runResolvers = function(e) {
          return (0, n.__awaiter)(this, arguments, void 0, function(e) {
            var t = e.document,
              r = e.remoteResult,
              i = e.context,
              o = e.variables,
              a = e.onlyRunForcedResolvers,
              s = void 0 !== a && a;
            return (0, n.__generator)(this, function(e) {
              return t ? [2, this.resolveDocument(t, r.data, i, o, this.fragmentMatcher, s).then(function(e) {
                return (0, n.__assign)((0, n.__assign)({}, r), {
                  data: e.result
                })
              })] : [2, r]
            })
          })
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
          return (0, n.__awaiter)(this, arguments, void 0, function(e, t, r) {
            return void 0 === t && (t = {}), void 0 === r && (r = {}), (0, n.__generator)(this, function(i) {
              return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then(function(e) {
                return (0, n.__assign)((0, n.__assign)({}, t), e.exportedVariables)
              })] : [2, (0, n.__assign)({}, t)]
            })
          })
        }, e.prototype.shouldForceResolvers = function(e) {
          var t = !1;
          return (0, ge.visit)(e, {
            Directive: {
              enter: function(e) {
                if ("client" === e.name.value && e.arguments && (t = e.arguments.some(function(e) {
                    return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                  }))) return ge.BREAK
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
          return (0, n.__awaiter)(this, arguments, void 0, function(e, t, r, i, o, a) {
            var s, u, c, l, f, h, d, p, y, v;
            return void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === o && (o = function() {
              return !0
            }), void 0 === a && (a = !1), (0, n.__generator)(this, function(g) {
              return s = (0, R.Vn)(e), u = (0, R.zK)(e), c = (0, S.JG)(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, h = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", p = (d = this).cache, y = d.client, v = {
                fragmentMap: c,
                context: (0, n.__assign)((0, n.__assign)({}, r), {
                  cache: p,
                  client: y
                }),
                variables: i,
                fragmentMatcher: o,
                defaultOperationType: h,
                exportedVariables: {},
                selectionsToResolve: l,
                onlyRunForcedResolvers: a
              }, [2, this.resolveSelectionSet(s.selectionSet, !1, t, v).then(function(e) {
                return {
                  result: e,
                  exportedVariables: v.exportedVariables
                }
              })]
            })
          })
        }, e.prototype.resolveSelectionSet = function(e, t, r, o) {
          return (0, n.__awaiter)(this, void 0, void 0, function() {
            var a, s, u, c, l, f = this;
            return (0, n.__generator)(this, function(h) {
              return a = o.fragmentMap, s = o.context, u = o.variables, c = [r], l = function(e) {
                return (0, n.__awaiter)(f, void 0, void 0, function() {
                  var l, f;
                  return (0, n.__generator)(this, function(n) {
                    return (t || o.selectionsToResolve.has(e)) && (0, w.MS)(e, u) ? (0, j.dt)(e) ? [2, this.resolveField(e, t, r, o).then(function(t) {
                      var r;
                      void 0 !== t && c.push(((r = {})[(0, j.ue)(e)] = t, r))
                    })] : ((0, j.kd)(e) ? l = e : (l = a[e.name.value], (0, i.V1)(l, 21, e.name.value)), l && l.typeCondition && (f = l.typeCondition.name.value, o.fragmentMatcher(r, f, s)) ? [2, this.resolveSelectionSet(l.selectionSet, t, r, o).then(function(e) {
                      c.push(e)
                    })] : [2]) : [2]
                  })
                })
              }, [2, Promise.all(e.selections.map(l)).then(function() {
                return (0, le.IM)(c)
              })]
            })
          })
        }, e.prototype.resolveField = function(e, t, r, i) {
          return (0, n.__awaiter)(this, void 0, void 0, function() {
            var o, a, s, u, c, l, f, h, d, p = this;
            return (0, n.__generator)(this, function(n) {
              return r ? (o = i.variables, a = e.name.value, s = (0, j.ue)(e), u = a !== s, c = r[s] || r[a], l = Promise.resolve(c), i.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (f = r.__typename || i.defaultOperationType, (h = this.resolvers && this.resolvers[f]) && (d = h[u ? a : s]) && (l = Promise.resolve(Ce.withValue(this.cache, d, [r, (0, j.MB)(e, o), i.context, {
                field: e,
                fragmentMap: i.fragmentMap
              }])))), [2, l.then(function(r) {
                var n, o;
                if (void 0 === r && (r = c), e.directives && e.directives.forEach(function(e) {
                    "export" === e.name.value && e.arguments && e.arguments.forEach(function(e) {
                      "as" === e.name.value && "StringValue" === e.value.kind && (i.exportedVariables[e.value.value] = r)
                    })
                  }), !e.selectionSet) return r;
                if (null == r) return r;
                var a = null !== (o = null === (n = e.directives) || void 0 === n ? void 0 : n.some(function(e) {
                  return "client" === e.name.value
                })) && void 0 !== o && o;
                return Array.isArray(r) ? p.resolveSubSelectedArray(e, t || a, r, i) : e.selectionSet ? p.resolveSelectionSet(e.selectionSet, t || a, r, i) : void 0
              })]) : [2, null]
            })
          })
        }, e.prototype.resolveSubSelectedArray = function(e, t, r, n) {
          var i = this;
          return Promise.all(r.map(function(r) {
            return null === r ? null : Array.isArray(r) ? i.resolveSubSelectedArray(e, t, r, n) : e.selectionSet ? i.resolveSelectionSet(e.selectionSet, t, r, n) : void 0
          }))
        }, e.prototype.collectSelectionsToResolve = function(e, t) {
          var r = function(e) {
              return !Array.isArray(e)
            },
            n = this.selectionsToResolveCache;
          return function e(o) {
            if (!n.has(o)) {
              var a = new Set;
              n.set(o, a), (0, ge.visit)(o, {
                Directive: function(e, t, n, i, o) {
                  "client" === e.name.value && o.forEach(function(e) {
                    r(e) && (0, ge.isSelectionNode)(e) && a.add(e)
                  })
                },
                FragmentSpread: function(n, o, s, u, c) {
                  var l = t[n.name.value];
                  (0, i.V1)(l, 22, n.name.value);
                  var f = e(l);
                  f.size > 0 && (c.forEach(function(e) {
                    r(e) && (0, ge.isSelectionNode)(e) && a.add(e)
                  }), a.add(n), f.forEach(function(e) {
                    a.add(e)
                  }))
                }
              })
            }
            return n.get(o)
          }(e)
        }, e
      }();

      function Ie(e, t) {
        return (0, G.o)(e, t, t.variables && {
          variables: (0, G.o)((0, n.__assign)((0, n.__assign)({}, e && e.variables), t.variables))
        })
      }
      var je, Ae = r(27312),
        Ne = !1,
        ze = function() {
          function e(e) {
            var t, r, a, c = this;
            if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw (0, i.vA)(16);
            var l = e.uri,
              f = e.credentials,
              h = e.headers,
              d = e.cache,
              p = e.documentTransform,
              y = e.ssrMode,
              v = void 0 !== y && y,
              g = e.ssrForceFetchDelay,
              b = void 0 === g ? 0 : g,
              m = e.connectToDevTools,
              _ = e.queryDeduplication,
              w = void 0 === _ || _,
              k = e.defaultOptions,
              S = e.defaultContext,
              O = e.assumeImmutableResults,
              E = void 0 === O ? d.assumeImmutableResults : O,
              T = e.resolvers,
              R = e.typeDefs,
              D = e.fragmentMatcher,
              P = e.clientAwareness,
              M = e.name,
              C = e.version,
              Q = e.devtools,
              F = e.dataMasking;
            !1 !== globalThis.__DEV__ && ((0, ne.cc)(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), (0, ne.cc)(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), (0, ne.cc)(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), (0, ne.cc)(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), (0, ne.cc)(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), (0, ne.cc)(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), (0, ne.cc)(e, "typeDefs", "ApolloClient"), e.link || !1 !== globalThis.__DEV__ && i.V1.warn(17));
            var V = e.link;
            V || (V = l ? new u.P({
              uri: l,
              credentials: f,
              headers: h
            }) : o.C.empty()), this.link = V, this.cache = d, this.disableNetworkFetches = v || b > 0, this.queryDeduplication = w, this.defaultOptions = k || Object.create(null), this.typeDefs = R, this.devtoolsConfig = (0, n.__assign)((0, n.__assign)({}, Q), {
              enabled: null !== (t = null == Q ? void 0 : Q.enabled) && void 0 !== t ? t : m
            }), void 0 === this.devtoolsConfig.enabled && (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__), b && setTimeout(function() {
              return c.disableNetworkFetches = !1
            }, b), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = s.r, this.localState = new xe({
              cache: d,
              client: this,
              resolvers: T,
              fragmentMatcher: D
            }), this.queryManager = new Me({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              defaultContext: S,
              documentTransform: p,
              queryDeduplication: w,
              ssrMode: v,
              dataMasking: !!F,
              clientAwareness: {
                name: null !== (r = null == P ? void 0 : P.name) && void 0 !== r ? r : M,
                version: null !== (a = null == P ? void 0 : P.version) && void 0 !== a ? a : C
              },
              localState: this.localState,
              assumeImmutableResults: E,
              onBroadcast: this.devtoolsConfig.enabled ? function() {
                c.devToolsHookCb && c.devToolsHookCb({
                  action: {},
                  state: {
                    queries: c.queryManager.getQueryStore(),
                    mutations: c.queryManager.mutationStore || {}
                  },
                  dataWithOptimisticResults: c.cache.extract(!0)
                })
              } : void 0
            }), this.devtoolsConfig.enabled && this.connectToDevTools()
          }
          return Object.defineProperty(e.prototype, "prioritizeCacheValues", {
            get: function() {
              return this.disableNetworkFetches
            },
            set: function(e) {
              this.disableNetworkFetches = e
            },
            enumerable: !1,
            configurable: !0
          }), e.prototype.connectToDevTools = function() {
            if ("undefined" != typeof window) {
              var e = window,
                t = Symbol.for("apollo.devtools");
              (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, Ne || !1 === globalThis.__DEV__ || (Ne = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
                if (!window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__) {
                  var e = window.navigator,
                    t = e && e.userAgent,
                    r = void 0;
                  "string" == typeof t && (t.indexOf("Chrome/") > -1 ? r = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : t.indexOf("Firefox/") > -1 && (r = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), r && !1 !== globalThis.__DEV__ && i.V1.log("Download the Apollo DevTools for a better development experience: %s", r)
                }
              }, 1e4))
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
            return this.defaultOptions.watchQuery && (e = Ie(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: "cache-first"
            })), !1 !== globalThis.__DEV__ && ((0, ne.cc)(e, "canonizeResults", "client.watchQuery"), (0, ne.cc)(e, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(e)
          }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = Ie(this.defaultOptions.query, e)), (0, i.V1)("cache-and-network" !== e.fetchPolicy, 18), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: "cache-first"
            })), !1 !== globalThis.__DEV__ && ((0, ne.cc)(e, "canonizeResults", "client.query"), (0, ne.cc)(e, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), "standby" === e.fetchPolicy && !1 !== globalThis.__DEV__ && i.V1.warn(19)), this.queryManager.query(e)
          }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = Ie(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
          }, e.prototype.subscribe = function(e) {
            var t = this,
              r = this.queryManager.generateQueryId();
            return this.queryManager.startGraphQLSubscription(e).map(function(i) {
              return (0, n.__assign)((0, n.__assign)({}, i), {
                data: t.queryManager.maskOperation({
                  document: e.query,
                  data: i.data,
                  fetchPolicy: e.fetchPolicy,
                  id: r
                })
              })
            })
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
            return Promise.resolve().then(function() {
              return e.queryManager.clearStore({
                discardWatches: !1
              })
            }).then(function() {
              return Promise.all(e.resetStoreCallbacks.map(function(e) {
                return e()
              }))
            }).then(function() {
              return e.reFetchObservableQueries()
            })
          }, e.prototype.clearStore = function() {
            var e = this;
            return Promise.resolve().then(function() {
              return e.queryManager.clearStore({
                discardWatches: !0
              })
            }).then(function() {
              return Promise.all(e.clearStoreCallbacks.map(function(e) {
                return e()
              }))
            })
          }, e.prototype.onResetStore = function(e) {
            var t = this;
            return this.resetStoreCallbacks.push(e),
              function() {
                t.resetStoreCallbacks = t.resetStoreCallbacks.filter(function(t) {
                  return t !== e
                })
              }
          }, e.prototype.onClearStore = function(e) {
            var t = this;
            return this.clearStoreCallbacks.push(e),
              function() {
                t.clearStoreCallbacks = t.clearStoreCallbacks.filter(function(t) {
                  return t !== e
                })
              }
          }, e.prototype.reFetchObservableQueries = function(e) {
            return this.queryManager.reFetchObservableQueries(e)
          }, e.prototype.refetchQueries = function(e) {
            var t = this.queryManager.refetchQueries(e),
              r = [],
              n = [];
            t.forEach(function(e, t) {
              r.push(t), n.push(e)
            });
            var o = Promise.all(n);
            return o.queries = r, o.results = n, o.catch(function(e) {
              !1 !== globalThis.__DEV__ && i.V1.debug(20, e)
            }), o
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
      !1 !== globalThis.__DEV__ && (ze.prototype.getMemoryInternals = Ae.ep), je || (je = {});
      var Le = function() {
        function e() {
          this.assumeImmutableResults = !1, this.getFragmentDoc = (0, P.LV)(S.ct, {
            max: M.v["cache.fragmentQueryDocuments"] || 1e3,
            cache: D.l
          })
        }
        return e.prototype.lookupFragment = function(e) {
          return null
        }, e.prototype.batch = function(e) {
          var t, r = this,
            n = "string" == typeof e.optimistic ? e.optimistic : !1 === e.optimistic ? null : void 0;
          return this.performTransaction(function() {
            return t = e.update(r)
          }, n), t
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
          var r = this;
          return void 0 === t && (t = !!e.optimistic), !1 !== globalThis.__DEV__ && (0, ne.cc)(e, "canonizeResults", "cache.readQuery"), (0, ne.lz)("canonizeResults", function() {
            return r.read((0, n.__assign)((0, n.__assign)({}, e), {
              rootId: e.id || "ROOT_QUERY",
              optimistic: t
            }))
          })
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
            var d = o || (0, R.E4)(r).name.value;
            f || !1 !== globalThis.__DEV__ && i.V1.warn(1, d)
          }
          var p, y = (0, n.__assign)((0, n.__assign)({}, c), {
            returnPartialData: !0,
            id: f,
            query: l,
            optimistic: u
          });
          return new F.c(function(i) {
            return t.watch((0, n.__assign)((0, n.__assign)({}, y), {
              immediate: !0,
              callback: function(a) {
                var s = h ? Re(a.result, r, t, o) : a.result;
                if (!p || !Z(l, {
                    data: p.result
                  }, {
                    data: s
                  }, e.variables)) {
                  var u = {
                    data: s,
                    complete: !!a.complete
                  };
                  a.missing && (u.missing = (0, le.IM)(a.missing.map(function(e) {
                    return e.missing
                  }))), p = (0, n.__assign)((0, n.__assign)({}, a), {
                    result: s
                  }), i.next(u)
                }
              }
            }))
          })
        }, e.prototype.readFragment = function(e, t) {
          var r = this;
          return void 0 === t && (t = !!e.optimistic), !1 !== globalThis.__DEV__ && (0, ne.cc)(e, "canonizeResults", "cache.readFragment"), (0, ne.lz)("canonizeResults", function() {
            return r.read((0, n.__assign)((0, n.__assign)({}, e), {
              query: r.getFragmentDoc(e.fragment, e.fragmentName),
              rootId: e.id,
              optimistic: t
            }))
          })
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
          return !1 !== globalThis.__DEV__ && (0, ne.cc)(e, "canonizeResults", "cache.updateQuery"), this.batch({
            update: function(r) {
              var i = (0, ne.lz)("canonizeResults", function() {
                  return r.readQuery(e)
                }),
                o = t(i);
              return null == o ? i : (r.writeQuery((0, n.__assign)((0, n.__assign)({}, e), {
                data: o
              })), o)
            }
          })
        }, e.prototype.updateFragment = function(e, t) {
          return !1 !== globalThis.__DEV__ && (0, ne.cc)(e, "canonizeResults", "cache.updateFragment"), this.batch({
            update: function(r) {
              var i = (0, ne.lz)("canonizeResults", function() {
                  return r.readFragment(e)
                }),
                o = t(i);
              return null == o ? i : (r.writeFragment((0, n.__assign)((0, n.__assign)({}, e), {
                data: o
              })), o)
            }
          })
        }, e
      }();
      !1 !== globalThis.__DEV__ && (Le.prototype.getMemoryInternals = Ae.tQ);
      var We = function(e) {
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
        Ue = Object.prototype.hasOwnProperty;

      function Be(e) {
        return null == e
      }

      function Ke(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ("string" == typeof r && (t && (t.keyObject = Be(n) ? Be(i) ? void 0 : {
            _id: i
          } : {
            id: n
          }), Be(n) && !Be(i) && (n = i), !Be(n))) return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      }
      var He = {
        dataIdFromObject: Ke,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1
      };

      function Ye(e) {
        var t = e.canonizeResults;
        return void 0 === t ? He.canonizeResults : t
      }
      var Ge = /^[_a-z][_0-9a-z]*/i;

      function Je(e) {
        var t = e.match(Ge);
        return t ? t[0] : e
      }

      function Xe(e, t, r) {
        return !!(0, A.U)(t) && ((0, q.c)(t) ? t.every(function(t) {
          return Xe(e, t, r)
        }) : e.selections.every(function(e) {
          if ((0, j.dt)(e) && (0, w.MS)(e, r)) {
            var n = (0, j.ue)(e);
            return Ue.call(t, n) && (!e.selectionSet || Xe(e.selectionSet, t[n], r))
          }
          return !0
        }))
      }

      function $e(e) {
        return (0, A.U)(e) && !(0, j.A_)(e) && !(0, q.c)(e)
      }

      function Ze(e, t) {
        var r = (0, S.JG)((0, R.zK)(e));
        return {
          fragmentMap: r,
          lookupFragment: function(e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null
          }
        }
      }
      var et = Object.create(null),
        tt = function() {
          return et
        },
        rt = Object.create(null),
        nt = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return be((0, j.A_)(e) ? r.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
              return (0, j.A_)(e) ? r.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
              if ("string" == typeof e) return (0, j.WU)(e);
              if ((0, j.A_)(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = (0, j.WU)(n);
                return t && r.merge(n, e), i
              }
            }
          }
          return e.prototype.toObject = function() {
            return (0, n.__assign)({}, this.data)
          }, e.prototype.has = function(e) {
            return void 0 !== this.lookup(e, !0)
          }, e.prototype.get = function(e, t) {
            if (this.group.depend(e, t), Ue.call(this.data, e)) {
              var r = this.data[e];
              if (r && Ue.call(r, t)) return r[t]
            }
            return "__typename" === t && Ue.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof st ? this.parent.get(e, t) : void 0
          }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), Ue.call(this.data, e) ? this.data[e] : this instanceof st ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
          }, e.prototype.merge = function(e, t) {
            var r, n = this;
            (0, j.A_)(e) && (e = e.__ref), (0, j.A_)(t) && (t = t.__ref);
            var o = "string" == typeof e ? this.lookup(r = e) : e,
              a = "string" == typeof t ? this.lookup(r = t) : t;
            if (a) {
              (0, i.V1)("string" == typeof r, 2);
              var s = new le.ZI(ct).merge(o, a);
              if (this.data[r] = s, s !== o && (delete this.refs[r], this.group.caching)) {
                var u = Object.create(null);
                o || (u.__exists = 1), Object.keys(a).forEach(function(e) {
                  if (!o || o[e] !== s[e]) {
                    u[e] = 1;
                    var t = Je(e);
                    t === e || n.policies.hasKeyArgs(s.__typename, t) || (u[t] = 1), void 0 !== s[e] || n instanceof st || delete s[e]
                  }
                }), !u.__typename || o && o.__typename || this.policies.rootTypenamesById[r] !== s.__typename || delete u.__typename, Object.keys(u).forEach(function(e) {
                  return n.group.dirty(r, e)
                })
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
                  DELETE: et,
                  INVALIDATE: rt,
                  isReference: j.A_,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function(t, n) {
                    return r.policies.readField("string" == typeof t ? {
                      fieldName: t,
                      from: n || (0, j.WU)(e)
                    } : t, {
                      store: r
                    })
                  }
                };
              if (Object.keys(o).forEach(function(l) {
                  var f = Je(l),
                    h = o[l];
                  if (void 0 !== h) {
                    var d = "function" == typeof t ? t : t[l] || t[f];
                    if (d) {
                      var p = d === tt ? et : d(be(h), (0, n.__assign)((0, n.__assign)({}, c), {
                        fieldName: f,
                        storeFieldName: l,
                        storage: r.getStorage(e, l)
                      }));
                      if (p === rt) r.group.dirty(e, l);
                      else if (p === et && (p = void 0), p !== h && (a[l] = p, s = !0, h = p, !1 !== globalThis.__DEV__)) {
                        var y = function(e) {
                          if (void 0 === r.lookup(e.__ref)) return !1 !== globalThis.__DEV__ && i.V1.warn(3, e), !0
                        };
                        if ((0, j.A_)(p)) y(p);
                        else if (Array.isArray(p))
                          for (var v = !1, g = void 0, b = 0, m = p; b < m.length; b++) {
                            var _ = m[b];
                            if ((0, j.A_)(_)) {
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
                }), s) return this.merge(e, a), u && (this instanceof st ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
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
              return this.modify(e, a ? ((n = {})[a] = tt, n) : tt)
            }
            return !1
          }, e.prototype.evict = function(e, t) {
            var r = !1;
            return e.id && (Ue.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof st && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
          }, e.prototype.clear = function() {
            this.replace(null)
          }, e.prototype.extract = function() {
            var e = this,
              t = this.toObject(),
              r = [];
            return this.getRootIdSet().forEach(function(t) {
              Ue.call(e.policies.rootTypenamesById, t) || r.push(t)
            }), r.length && (t.__META = {
              extraRootIds: r.sort()
            }), t
          }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach(function(r) {
                e && Ue.call(e, r) || t.delete(r)
              }), e) {
              var r = e.__META,
                i = (0, n.__rest)(e, ["__META"]);
              Object.keys(i).forEach(function(e) {
                t.merge(e, i[e])
              }), r && r.extraRootIds.forEach(this.retain, this)
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
            return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof st ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
          }, e.prototype.gc = function() {
            var e = this,
              t = this.getRootIdSet(),
              r = this.toObject();
            t.forEach(function(n) {
              Ue.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
            });
            var n = Object.keys(r);
            if (n.length) {
              for (var i = this; i instanceof st;) i = i.parent;
              n.forEach(function(e) {
                return i.delete(e)
              })
            }
            return n
          }, e.prototype.findChildRefIds = function(e) {
            if (!Ue.call(this.refs, e)) {
              var t = this.refs[e] = Object.create(null),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach(function(e) {
                (0, j.A_)(e) && (t[e.__ref] = !0), (0, A.U)(e) && Object.keys(e).forEach(function(t) {
                  var r = e[t];
                  (0, A.U)(r) && n.add(r)
                })
              })
            }
            return this.refs[e]
          }, e.prototype.makeCacheKey = function() {
            return this.group.keyMaker.lookupArray(arguments)
          }, e
        }(),
        it = function() {
          function e(e, t) {
            void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
          }
          return e.prototype.resetCaching = function() {
            this.d = this.caching ? (0, P.yN)() : null, this.keyMaker = new E.b(T.et)
          }, e.prototype.depend = function(e, t) {
            if (this.d) {
              this.d(ot(e, t));
              var r = Je(t);
              r !== t && this.d(ot(e, r)), this.parent && this.parent.depend(e, t)
            }
          }, e.prototype.dirty = function(e, t) {
            this.d && this.d.dirty(ot(e, t), "__exists" === t ? "forget" : "setDirty")
          }, e
        }();

      function ot(e, t) {
        return t + "#" + e
      }

      function at(e, t) {
        lt(e) && e.group.depend(t, "__exists")
      }! function(e) {
        var t = function(e) {
          function t(t) {
            var r = t.policies,
              n = t.resultCaching,
              i = void 0 === n || n,
              o = t.seed,
              a = e.call(this, r, new it(i)) || this;
            return a.stump = new ut(a), a.storageTrie = new E.b(T.et), o && a.replace(o), a
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
      }(nt || (nt = {}));
      var st = function(e) {
          function t(t, r, n, i) {
            var o = e.call(this, r.policies, i) || this;
            return o.id = t, o.parent = r, o.replay = n, o.group = i, n(o), o
          }
          return (0, n.__extends)(t, e), t.prototype.addLayer = function(e, r) {
            return new t(e, this, r, this.group)
          }, t.prototype.removeLayer = function(e) {
            var t = this,
              r = this.parent.removeLayer(e);
            return e === this.id ? (this.group.caching && Object.keys(this.data).forEach(function(e) {
              var n = t.data[e],
                i = r.lookup(e);
              i ? n ? n !== i && Object.keys(n).forEach(function(r) {
                d(n[r], i[r]) || t.group.dirty(e, r)
              }) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach(function(r) {
                t.group.dirty(e, r)
              })) : t.delete(e)
            }), r) : r === this.parent ? this : r.addLayer(this.id, this.replay)
          }, t.prototype.toObject = function() {
            return (0, n.__assign)((0, n.__assign)({}, this.parent.toObject()), this.data)
          }, t.prototype.findChildRefIds = function(t) {
            var r = this.parent.findChildRefIds(t);
            return Ue.call(this.data, t) ? (0, n.__assign)((0, n.__assign)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(nt),
        ut = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, function() {}, new it(t.group.caching, t.group)) || this
          }
          return (0, n.__extends)(t, e), t.prototype.removeLayer = function() {
            return this
          }, t.prototype.merge = function(e, t) {
            return this.parent.merge(e, t)
          }, t
        }(st);

      function ct(e, t, r) {
        var n = e[r],
          i = t[r];
        return d(n, i) ? n : i
      }

      function lt(e) {
        return !!(e instanceof nt && e.group.caching)
      }
      var ft = function() {
        function e() {
          this.known = new(T.En ? WeakSet : Set), this.pool = new E.b(T.et), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
        }
        return e.prototype.isKnown = function(e) {
          return (0, A.U)(e) && this.known.has(e)
        }, e.prototype.pass = function(e) {
          if ((0, A.U)(e)) {
            var t = function(e) {
              return (0, A.U)(e) ? (0, q.c)(e) ? e.slice(0) : (0, n.__assign)({
                __proto__: Object.getPrototypeOf(e)
              }, e) : e
            }(e);
            return this.passes.set(t, e), t
          }
          return e
        }, e.prototype.admit = function(e) {
          var t = this;
          if ((0, A.U)(e)) {
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
                if (a.sorted.forEach(function(r) {
                    o.push(t.admit(e[r]))
                  }), !(s = this.pool.lookupArray(o)).object) {
                  var c = s.object = Object.create(i);
                  this.known.add(c), a.sorted.forEach(function(e, t) {
                    c[e] = o[u + t]
                  }), !1 !== globalThis.__DEV__ && Object.freeze(c)
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

      function ht(e) {
        return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
      }
      var dt = function() {
        function e(e) {
          var t = this;
          this.knownResults = new(T.et ? WeakMap : Map), this.config = (0, G.o)(e, {
            addTypename: !1 !== e.addTypename,
            canonizeResults: Ye(e)
          }), this.canon = e.canon || new ft, this.executeSelectionSet = (0, P.LV)(function(e) {
            var r, i = e.context.canonizeResults,
              o = ht(e);
            o[3] = !i;
            var a = (r = t.executeSelectionSet).peek.apply(r, o);
            return a ? i ? (0, n.__assign)((0, n.__assign)({}, a), {
              result: t.canon.admit(a.result)
            }) : a : (at(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          }, {
            max: this.config.resultCacheMaxSize || M.v["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: ht,
            makeCacheKey: function(e, t, r, n) {
              if (lt(r.store)) return r.store.makeCacheKey(e, (0, j.A_)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = (0, P.LV)(function(e) {
            return at(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }, {
            max: this.config.resultCacheMaxSize || M.v["inMemoryCache.executeSubSelectedArray"] || 1e4,
            makeCacheKey: function(e) {
              var t = e.field,
                r = e.array,
                n = e.context;
              if (lt(n.store)) return n.store.makeCacheKey(t, r, n.varString)
            }
          })
        }
        return e.prototype.resetCanon = function() {
          this.canon = new ft
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
          a = (0, n.__assign)((0, n.__assign)({}, (0, R.wY)((0, R.AT)(r))), a);
          var h, d = (0, j.WU)(o),
            p = this.executeSelectionSet({
              selectionSet: (0, R.Vn)(r).selectionSet,
              objectOrReference: d,
              enclosingRef: d,
              context: (0, n.__assign)({
                store: t,
                query: r,
                policies: f,
                variables: a,
                varString: (0, O.M)(a),
                canonizeResults: l
              }, Ze(r, this.config.fragments))
            });
          if (p.missing && (h = [new We(pt(p.missing), p.missing, r, a)], !u)) throw h[0];
          return {
            result: p.result,
            complete: !h,
            missing: h
          }
        }, e.prototype.isFresh = function(e, t, r, n) {
          if (lt(n.store) && this.knownResults.get(e) === r) {
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
          if ((0, j.A_)(n) && !a.policies.rootTypenamesById[n.__ref] && !a.store.has(n.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(n.__ref, " object")
          };
          var s, u = a.variables,
            c = a.policies,
            l = a.store.getFieldValue(n, "__typename"),
            f = [],
            h = new le.ZI;

          function d(e, t) {
            var r;
            return e.missing && (s = h.merge(s, ((r = {})[t] = e.missing, r))), e.result
          }
          this.config.addTypename && "string" == typeof l && !c.rootIdsByTypename[l] && f.push({
            __typename: l
          });
          var p = new Set(r.selections);
          p.forEach(function(e) {
            var r, y;
            if ((0, w.MS)(e, u))
              if ((0, j.dt)(e)) {
                var v = c.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: a.variables,
                    from: n
                  }, a),
                  g = (0, j.ue)(e);
                void 0 === v ? k.XY.added(e) || (s = h.merge(s, ((r = {})[g] = "Can't find field '".concat(e.name.value, "' on ").concat((0, j.A_)(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), r))) : (0, q.c)(v) ? v.length > 0 && (v = d(t.executeSubSelectedArray({
                  field: e,
                  array: v,
                  enclosingRef: o,
                  context: a
                }), g)) : e.selectionSet ? null != v && (v = d(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: v,
                  enclosingRef: (0, j.A_)(v) ? v : o,
                  context: a
                }), g)) : a.canonizeResults && (v = t.canon.pass(v)), void 0 !== v && f.push(((y = {})[g] = v, y))
              } else {
                var b = (0, S.HQ)(e, a.lookupFragment);
                if (!b && e.kind === ge.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(10, e.name.value);
                b && c.fragmentMatches(b, l) && b.selectionSet.selections.forEach(p.add, p)
              }
          });
          var y = {
              result: (0, le.IM)(f),
              missing: s
            },
            v = a.canonizeResults ? this.canon.admit(y) : be(y);
          return v.result && this.knownResults.set(v.result, r), v
        }, e.prototype.execSubSelectedArrayImpl = function(e) {
          var t, r = this,
            n = e.field,
            o = e.array,
            a = e.enclosingRef,
            s = e.context,
            u = new le.ZI;

          function c(e, r) {
            var n;
            return e.missing && (t = u.merge(t, ((n = {})[r] = e.missing, n))), e.result
          }
          return n.selectionSet && (o = o.filter(s.store.canRead)), o = o.map(function(e, t) {
            return null === e ? null : (0, q.c)(e) ? c(r.executeSubSelectedArray({
              field: n,
              array: e,
              enclosingRef: a,
              context: s
            }), t) : n.selectionSet ? c(r.executeSelectionSet({
              selectionSet: n.selectionSet,
              objectOrReference: e,
              enclosingRef: (0, j.A_)(e) ? e : a,
              context: s
            }), t) : (!1 !== globalThis.__DEV__ && function(e, t, r) {
              if (!t.selectionSet) {
                var n = new Set([r]);
                n.forEach(function(r) {
                  (0, A.U)(r) && ((0, i.V1)(!(0, j.A_)(r), 11, function(e, t) {
                    return (0, j.A_)(t) ? e.get(t.__ref, "__typename") : t && t.__typename
                  }(e, r), t.name.value), Object.values(r).forEach(n.add, n))
                })
              }
            }(s.store, n, e), e)
          }), {
            result: s.canonizeResults ? this.canon.admit(o) : o,
            missing: t
          }
        }, e
      }();

      function pt(e) {
        try {
          JSON.stringify(e, function(e, t) {
            if ("string" == typeof t) throw t;
            return t
          })
        } catch (e) {
          return e
        }
      }
      var yt = r(46465),
        vt = Object.create(null);

      function gt(e) {
        var t = JSON.stringify(e);
        return vt[t] || (vt[t] = Object.create(null))
      }

      function bt(e) {
        var t = gt(e);
        return t.keyFieldsFn || (t.keyFieldsFn = function(t, r) {
          var n = function(e, t) {
              return r.readField(t, e)
            },
            o = r.keyObject = _t(e, function(e) {
              var o = St(r.storeObject, e, n);
              return void 0 === o && t !== r.storeObject && Ue.call(t, e[0]) && (o = St(t, e, kt)), (0, i.V1)(void 0 !== o, 5, e.join("."), t), o
            });
          return "".concat(r.typename, ":").concat(JSON.stringify(o))
        })
      }

      function mt(e) {
        var t = gt(e);
        return t.keyArgsFn || (t.keyArgsFn = function(t, r) {
          var n = r.field,
            i = r.variables,
            o = r.fieldName,
            a = _t(e, function(e) {
              var r = e[0],
                o = r.charAt(0);
              if ("@" !== o)
                if ("$" !== o) {
                  if (t) return St(t, e)
                } else {
                  var a = r.slice(1);
                  if (i && Ue.call(i, a)) {
                    var s = e.slice(0);
                    return s[0] = a, St(i, s)
                  }
                }
              else if (n && (0, q.E)(n.directives)) {
                var u = r.slice(1),
                  c = n.directives.find(function(e) {
                    return e.name.value === u
                  }),
                  l = c && (0, j.MB)(c, i);
                return l && St(l, e.slice(1))
              }
            }),
            s = JSON.stringify(a);
          return (t || "{}" !== s) && (o += ":" + s), o
        })
      }

      function _t(e, t) {
        var r = new le.ZI;
        return wt(e).reduce(function(e, n) {
          var i, o = t(n);
          if (void 0 !== o) {
            for (var a = n.length - 1; a >= 0; --a)(i = {})[n[a]] = o, o = i;
            e = r.merge(e, o)
          }
          return e
        }, Object.create(null))
      }

      function wt(e) {
        var t = gt(e);
        if (!t.paths) {
          var r = t.paths = [],
            n = [];
          e.forEach(function(t, i) {
            (0, q.c)(t) ? (wt(t).forEach(function(e) {
              return r.push(n.concat(e))
            }), n.length = 0) : (n.push(t), (0, q.c)(e[i + 1]) || (r.push(n.slice(0)), n.length = 0))
          })
        }
        return t.paths
      }

      function kt(e, t) {
        return e[t]
      }

      function St(e, t, r) {
        return r = r || kt, Ot(t.reduce(function e(t, n) {
          return (0, q.c)(t) ? t.map(function(t) {
            return e(t, n)
          }) : t && r(t, n)
        }, e))
      }

      function Ot(e) {
        return (0, A.U)(e) ? (0, q.c)(e) ? e.map(Ot) : _t(Object.keys(e).sort(), function(t) {
          return St(e, t)
        }) : e
      }

      function Et(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, j.MB)(e.field, e.variables) : null
      }
      var Tt = function() {},
        Rt = function(e, t) {
          return t.fieldName
        },
        Dt = function(e, t, r) {
          return (0, r.mergeObjects)(e, t)
        },
        Pt = function(e, t) {
          return t
        },
        Mt = function() {
          function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, n.__assign)({
              dataIdFromObject: Ke
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
                  var e = Qt(arguments, s);
                  return i.readField(e, {
                    store: i.cache.data,
                    variables: e.variables
                  })
                }
              }),
              c = o && this.getTypePolicy(o),
              l = c && c.keyFn || this.config.dataIdFromObject;
            return we.withValue(!0, function() {
              for (; l;) {
                var t = l((0, n.__assign)((0, n.__assign)({}, e), s), u);
                if (!(0, q.c)(t)) {
                  a = t;
                  break
                }
                l = bt(t)
              }
            }), a = a ? String(a) : void 0, u.keyObject ? [a, u.keyObject] : [a]
          }, e.prototype.addTypePolicies = function(e) {
            var t = this;
            Object.keys(e).forEach(function(r) {
              var i = e[r],
                o = i.queryType,
                a = i.mutationType,
                s = i.subscriptionType,
                u = (0, n.__rest)(i, ["queryType", "mutationType", "subscriptionType"]);
              o && t.setRootTypename("Query", r), a && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), Ue.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : t.toBeAdded[r] = [u]
            })
          }, e.prototype.updateTypePolicy = function(e, t, r) {
            var n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function a(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? Dt : !1 === t ? Pt : e.merge
            }
            a(n, t.merge), n.keyFn = !1 === i ? Tt : (0, q.c)(i) ? bt(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach(function(t) {
              var n = r[t];
              n && (null == n ? void 0 : n.typename) === e || (n = r[t] = {
                typename: e
              });
              var i = o[t];
              if ("function" == typeof i) n.read = i;
              else {
                var s = i.keyArgs,
                  u = i.read,
                  c = i.merge;
                n.keyFn = !1 === s ? Rt : (0, q.c)(s) ? mt(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof u && (n.read = u), a(n, c)
              }
              n.read && n.merge && (n.keyFn = n.keyFn || Rt)
            })
          }, e.prototype.setRootTypename = function(e, t) {
            void 0 === t && (t = e);
            var r = "ROOT_" + e.toUpperCase(),
              n = this.rootTypenamesById[r];
            t !== n && ((0, i.V1)(!n || n === e, 6, e), n && delete this.rootIdsByTypename[n], this.rootIdsByTypename[t] = r, this.rootTypenamesById[r] = t)
          }, e.prototype.addPossibleTypes = function(e) {
            var t = this;
            this.usingPossibleTypes = !0, Object.keys(e).forEach(function(r) {
              t.getSupertypeSet(r, !0), e[r].forEach(function(e) {
                t.getSupertypeSet(e, !0).add(r);
                var n = e.match(Ge);
                n && n[0] === e || t.fuzzySubtypes.set(e, new RegExp(e))
              })
            })
          }, e.prototype.getTypePolicy = function(e) {
            var t = this;
            if (!Ue.call(this.typePolicies, e)) {
              var r = this.typePolicies[e] = Object.create(null);
              r.fields = Object.create(null);
              var i = this.supertypeMap.get(e);
              !i && this.fuzzySubtypes.size && (i = this.getSupertypeSet(e, !0), this.fuzzySubtypes.forEach(function(r, n) {
                if (r.test(e)) {
                  var o = t.supertypeMap.get(n);
                  o && o.forEach(function(e) {
                    return i.add(e)
                  })
                }
              })), i && i.size && i.forEach(function(e) {
                var i = t.getTypePolicy(e),
                  o = i.fields,
                  a = (0, n.__rest)(i, ["fields"]);
                Object.assign(r, a), Object.assign(r.fields, o)
              })
            }
            var o = this.toBeAdded[e];
            return o && o.length && o.splice(0).forEach(function(r) {
              t.updateTypePolicy(e, r, t.typePolicies[e].fields)
            }), this.typePolicies[e]
          }, e.prototype.getFieldPolicy = function(e, t) {
            if (e) return this.getTypePolicy(e).fields[t]
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
                var d = u[h];
                if (d.has(a)) return s.has(a) || (f && !1 !== globalThis.__DEV__ && i.V1.warn(7, t, a), s.add(a)), !0;
                d.forEach(c), l && h === u.length - 1 && Xe(e.selectionSet, r, n) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(e, r) {
                  var n = t.match(e);
                  n && n[0] === t && c(r)
                }))
              }
            return !1
          }, e.prototype.hasKeyArgs = function(e, t) {
            var r = this.getFieldPolicy(e, t);
            return !(!r || !r.keyFn)
          }, e.prototype.getStoreFieldName = function(e) {
            var t, r = e.typename,
              n = e.fieldName,
              i = this.getFieldPolicy(r, n),
              o = i && i.keyFn;
            if (o && r)
              for (var a = {
                  typename: r,
                  fieldName: n,
                  field: e.field || null,
                  variables: e.variables
                }, s = Et(e); o;) {
                var u = o(s, a);
                if (!(0, q.c)(u)) {
                  t = u || n;
                  break
                }
                o = mt(u)
              }
            return void 0 === t && (t = e.field ? (0, j.Ii)(e.field, e.variables) : (0, j.o5)(n, Et(e))), !1 === t ? n : n === Je(t) ? t : n + ":" + t
          }, e.prototype.readField = function(e, t) {
            var r = e.from;
            if (r && (e.field || e.fieldName)) {
              if (void 0 === e.typename) {
                var n = t.store.getFieldValue(r, "__typename");
                n && (e.typename = n)
              }
              var i = this.getStoreFieldName(e),
                o = Je(i),
                a = t.store.getFieldValue(r, i),
                s = this.getFieldPolicy(e.typename, o),
                u = s && s.read;
              if (u) {
                var c = Ct(this, r, e, t, t.store.getStorage((0, j.A_)(r) ? r.__ref : r, i));
                return Ce.withValue(this.cache, u, [a, c])
              }
              return a
            }
          }, e.prototype.getReadFunction = function(e, t) {
            var r = this.getFieldPolicy(e, t);
            return r && r.read
          }, e.prototype.getMergeFunction = function(e, t, r) {
            var n = this.getFieldPolicy(e, t),
              i = n && n.merge;
            return !i && r && (i = (n = this.getTypePolicy(r)) && n.merge), i
          }, e.prototype.runMergeFunction = function(e, t, r, n, i) {
            var o = r.field,
              a = r.typename,
              s = r.merge;
            return s === Dt ? Ft(n.store)(e, t) : s === Pt ? t : (n.overwrite && (e = void 0), s(e, t, Ct(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function Ct(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = Je(o),
          s = r.variables || n.variables,
          u = n.store,
          c = u.toReference,
          l = u.canRead;
        return {
          args: Et(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: j.A_,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function() {
            return e.readField(Qt(arguments, t, s), n)
          },
          mergeObjects: Ft(n.store)
        }
      }

      function Qt(e, t, r) {
        var o, a = e[0],
          s = e[1],
          u = e.length;
        return "string" == typeof a ? o = {
          fieldName: a,
          from: u > 1 ? s : t
        } : (o = (0, n.__assign)({}, a), Ue.call(o, "from") || (o.from = t)), !1 !== globalThis.__DEV__ && void 0 === o.from && !1 !== globalThis.__DEV__ && i.V1.warn(8, (0, yt.p)(Array.from(e))), void 0 === o.variables && (o.variables = r), o
      }

      function Ft(e) {
        return function(t, r) {
          if ((0, q.c)(t) || (0, q.c)(r)) throw (0, i.vA)(9);
          if ((0, A.U)(t) && (0, A.U)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              a = e.getFieldValue(r, "__typename");
            if (o && a && o !== a) return r;
            if ((0, j.A_)(t) && $e(r)) return e.merge(t.__ref, r), t;
            if ($e(t) && (0, j.A_)(r)) return e.merge(t, r.__ref), r;
            if ($e(t) && $e(r)) return (0, n.__assign)((0, n.__assign)({}, t), r)
          }
          return r
        }
      }

      function Vt(e, t, r) {
        var i = "".concat(t).concat(r),
          o = e.flavors.get(i);
        return o || e.flavors.set(i, o = e.clientOnly === t && e.deferred === r ? e : (0, n.__assign)((0, n.__assign)({}, e), {
          clientOnly: t,
          deferred: r
        })), o
      }
      var qt = function() {
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
              l = (0, R.Vu)(o),
              f = new le.ZI;
            u = (0, n.__assign)((0, n.__assign)({}, (0, R.wY)(l)), u);
            var h = (0, n.__assign)((0, n.__assign)({
                store: e,
                written: Object.create(null),
                merge: function(e, t) {
                  return f.merge(e, t)
                },
                variables: u,
                varString: (0, O.M)(u)
              }, Ze(o, this.fragments)), {
                overwrite: !!c,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map
              }),
              p = this.processSelectionSet({
                result: a || Object.create(null),
                dataId: s,
                selectionSet: l.selectionSet,
                mergeTree: {
                  map: new Map
                },
                context: h
              });
            if (!(0, j.A_)(p)) throw (0, i.vA)(12, a);
            return h.incomingById.forEach(function(t, o) {
              var a = t.storeObject,
                s = t.mergeTree,
                u = t.fieldNodeSet,
                c = (0, j.WU)(o);
              if (s && s.map.size) {
                var l = r.applyMerges(s, c, a, h);
                if ((0, j.A_)(l)) return;
                a = l
              }
              if (!1 !== globalThis.__DEV__ && !h.overwrite) {
                var f = Object.create(null);
                u.forEach(function(e) {
                  e.selectionSet && (f[e.name.value] = !0)
                }), Object.keys(a).forEach(function(e) {
                  (function(e) {
                    return !0 === f[Je(e)]
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
                      if (u && !(0, j.A_)(s) && !d(s, u) && !Object.keys(s).every(function(e) {
                          return void 0 !== o.getFieldValue(u, e)
                        })) {
                        var c = o.getFieldValue(e, "__typename") || o.getFieldValue(t, "__typename"),
                          l = Je(r),
                          f = "".concat(c, ".").concat(l);
                        if (!zt.has(f)) {
                          zt.add(f);
                          var h = [];
                          (0, q.c)(s) || (0, q.c)(u) || [s, u].forEach(function(e) {
                            var t = o.getFieldValue(e, "__typename");
                            "string" != typeof t || h.includes(t) || h.push(t)
                          }), !1 !== globalThis.__DEV__ && i.V1.warn(15, l, c, h.length ? "either ensure all objects of type " + h.join(" and ") + " have an ID or a custom merge function, or " : "", f, (0, n.__assign)({}, s), (0, n.__assign)({}, u))
                        }
                      }
                    }
                  }(c, a, e, h.store)
                })
              }
              e.merge(o, a)
            }), e.retain(p.__ref), p
          }, e.prototype.processSelectionSet = function(e) {
            var t = this,
              r = e.dataId,
              o = e.result,
              a = e.selectionSet,
              s = e.context,
              u = e.mergeTree,
              c = this.cache.policies,
              l = Object.create(null),
              f = r && c.rootTypenamesById[r] || (0, j.D$)(o, a, s.fragmentMap) || r && s.store.get(r, "__typename");
            "string" == typeof f && (l.__typename = f);
            var h = function() {
                var e = Qt(arguments, l, s.variables);
                if ((0, j.A_)(e.from)) {
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
              d = new Set;
            this.flattenFields(a, o, s, f).forEach(function(e, r) {
              var n, a = (0, j.ue)(r),
                s = o[a];
              if (d.add(r), void 0 !== s) {
                var p = c.getStoreFieldName({
                    typename: f,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables
                  }),
                  y = It(u, p),
                  v = t.processFieldValue(s, r, r.selectionSet ? Vt(e, !1, !1) : e, y),
                  g = void 0;
                r.selectionSet && ((0, j.A_)(v) || $e(v)) && (g = h("__typename", v));
                var b = c.getMergeFunction(f, r.name.value, g);
                b ? y.info = {
                  field: r,
                  typename: f,
                  merge: b
                } : Nt(u, p), l = e.merge(l, ((n = {})[p] = v, n))
              } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || k.XY.added(r) || c.getReadFunction(f, r.name.value) || !1 !== globalThis.__DEV__ && i.V1.error(13, (0, j.ue)(r), o)
            });
            try {
              var p = c.identify(o, {
                  typename: f,
                  selectionSet: a,
                  fragmentMap: s.fragmentMap,
                  storeObject: l,
                  readField: h
                }),
                y = p[0],
                v = p[1];
              r = r || y, v && (l = s.merge(l, v))
            } catch (e) {
              if (!r) throw e
            }
            if ("string" == typeof r) {
              var g = (0, j.WU)(r),
                b = s.written[r] || (s.written[r] = []);
              if (b.indexOf(a) >= 0) return g;
              if (b.push(a), this.reader && this.reader.isFresh(o, g, a, s)) return g;
              var m = s.incomingById.get(r);
              return m ? (m.storeObject = s.merge(m.storeObject, l), m.mergeTree = jt(m.mergeTree, u), d.forEach(function(e) {
                return m.fieldNodeSet.add(e)
              })) : s.incomingById.set(r, {
                storeObject: l,
                mergeTree: At(u) ? void 0 : u,
                fieldNodeSet: d
              }), g
            }
            return l
          }, e.prototype.processFieldValue = function(e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e ? (0, q.c)(e) ? e.map(function(e, o) {
              var a = i.processFieldValue(e, t, r, It(n, o));
              return Nt(n, o), a
            }) : this.processSelectionSet({
              result: e,
              selectionSet: t.selectionSet,
              context: r,
              mergeTree: n
            }) : !1 !== globalThis.__DEV__ ? X(e) : e
          }, e.prototype.flattenFields = function(e, t, r, n) {
            void 0 === n && (n = (0, j.D$)(t, e, r.fragmentMap));
            var o = new Map,
              a = this.cache.policies,
              s = new E.b(!1);
            return function e(u, c) {
              var l = s.lookup(u, c.clientOnly, c.deferred);
              l.visited || (l.visited = !0, u.selections.forEach(function(s) {
                if ((0, w.MS)(s, r.variables)) {
                  var u = c.clientOnly,
                    l = c.deferred;
                  if (u && l || !(0, q.E)(s.directives) || s.directives.forEach(function(e) {
                      var t = e.name.value;
                      if ("client" === t && (u = !0), "defer" === t) {
                        var n = (0, j.MB)(e, r.variables);
                        n && !1 === n.if || (l = !0)
                      }
                    }), (0, j.dt)(s)) {
                    var f = o.get(s);
                    f && (u = u && f.clientOnly, l = l && f.deferred), o.set(s, Vt(r, u, l))
                  } else {
                    var h = (0, S.HQ)(s, r.lookupFragment);
                    if (!h && s.kind === ge.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(14, s.name.value);
                    h && a.fragmentMatches(h, n, t, r.variables) && e(h.selectionSet, Vt(r, u, l))
                  }
                }
              }))
            }(e, r), o
          }, e.prototype.applyMerges = function(e, t, r, o, a) {
            var s, u = this;
            if (e.map.size && !(0, j.A_)(r)) {
              var c, l = (0, q.c)(r) || !(0, j.A_)(t) && !$e(t) ? void 0 : t,
                f = r;
              l && !a && (a = [(0, j.A_)(l) ? l.__ref : l]);
              var h = function(e, t) {
                return (0, q.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach(function(e, t) {
                var r = h(l, t),
                  n = h(f, t);
                if (void 0 !== n) {
                  a && a.push(t);
                  var s = u.applyMerges(e, r, n, o, a);
                  s !== n && (c = c || new Map).set(t, s), a && (0, i.V1)(a.pop() === t)
                }
              }), c && (r = (0, q.c)(f) ? f.slice(0) : (0, n.__assign)({}, f), c.forEach(function(e, t) {
                r[t] = e
              }))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, a && (s = o.store).getStorage.apply(s, a)) : r
          }, e
        }(),
        xt = [];

      function It(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, xt.pop() || {
          map: new Map
        }), r.get(t)
      }

      function jt(e, t) {
        if (e === t || !t || At(t)) return e;
        if (!e || At(e)) return t;
        var r = e.info && t.info ? (0, n.__assign)((0, n.__assign)({}, e.info), t.info) : e.info || t.info,
          i = e.map.size && t.map.size,
          o = {
            info: r,
            map: i ? new Map : e.map.size ? e.map : t.map
          };
        if (i) {
          var a = new Set(t.map.keys());
          e.map.forEach(function(e, r) {
            o.map.set(r, jt(e, t.map.get(r))), a.delete(r)
          }), a.forEach(function(r) {
            o.map.set(r, jt(t.map.get(r), e.map.get(r)))
          })
        }
        return o
      }

      function At(e) {
        return !e || !(e.info || e.map.size)
      }

      function Nt(e, t) {
        var r = e.map,
          n = r.get(t);
        n && At(n) && (xt.push(n), r.delete(t))
      }
      var zt = new Set,
        Lt = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.addTypenameTransform = new Q(k.XY), r.assumeImmutableResults = !0, r.makeVar = qe, r.txCount = 0, !1 !== globalThis.__DEV__ && ((0, ne.cc)(t, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), (0, ne.cc)(t, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), r.config = function(e) {
              return (0, G.o)(He, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new Mt({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies
            }), r.init(), r
          }
          return (0, n.__extends)(t, e), t.prototype.init = function() {
            var e = this.data = new nt.Root({
              policies: this.policies,
              resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache()
          }, t.prototype.resetResultCache = function(e) {
            var t = this,
              r = this.storeReader,
              n = this.config.fragments;
            this.addTypenameTransform.resetCache(), null == n || n.resetCaches(), this.storeWriter = new qt(this, this.storeReader = new dt({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: Ye(this.config),
              canon: e ? void 0 : r && r.canon,
              fragments: n
            }), n), this.maybeBroadcastWatch = (0, P.LV)(function(e, r) {
              return t.broadcastWatch(e, r)
            }, {
              max: this.config.resultCacheMaxSize || M.v["inMemoryCache.maybeBroadcastWatch"] || 5e3,
              makeCacheKey: function(e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if (lt(r)) {
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
            }), new Set([this.data.group, this.optimisticData.group]).forEach(function(e) {
              return e.resetCaching()
            })
          }, t.prototype.restore = function(e) {
            return this.init(), e && this.data.replace(e), this
          }, t.prototype.extract = function(e) {
            return void 0 === e && (e = !1), (e ? this.optimisticData : this.data).extract()
          }, t.prototype.read = function(e) {
            !1 !== globalThis.__DEV__ && (0, ne.cc)(e, "canonizeResults", "cache.read");
            var t = e.returnPartialData,
              r = void 0 !== t && t;
            try {
              return this.storeReader.diffQueryAgainstStore((0, n.__assign)((0, n.__assign)({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: r
              })).result || null
            } catch (e) {
              if (e instanceof We) return null;
              throw e
            }
          }, t.prototype.write = function(e) {
            try {
              return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.modify = function(e) {
            if (Ue.call(e, "id") && !e.id) return !1;
            var t = e.optimistic ? this.optimisticData : this.data;
            try {
              return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.diff = function(e) {
            return !1 !== globalThis.__DEV__ && (0, ne.cc)(e, "canonizeResults", "cache.diff"), this.storeReader.diffQueryAgainstStore((0, n.__assign)((0, n.__assign)({}, e), {
              store: e.optimistic ? this.optimisticData : this.data,
              rootId: e.id || "ROOT_QUERY",
              config: this.config
            }))
          }, t.prototype.watch = function(e) {
            var t = this;
            return this.watches.size || function(e) {
                Fe(e).vars.forEach(function(t) {
                  return t.attachCache(e)
                })
              }(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e),
              function() {
                t.watches.delete(e) && !t.watches.size && Ve(t), t.maybeBroadcastWatch.forget(e)
              }
          }, t.prototype.gc = function(e) {
            !1 !== globalThis.__DEV__ && (0, ne.cc)(e || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), O.M.reset(), ye.y.reset();
            var t = this.optimisticData.gc();
            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t
          }, t.prototype.retain = function(e, t) {
            return (t ? this.optimisticData : this.data).retain(e)
          }, t.prototype.release = function(e, t) {
            return (t ? this.optimisticData : this.data).release(e)
          }, t.prototype.identify = function(e) {
            if ((0, j.A_)(e)) return e.__ref;
            try {
              return this.policies.identify(e)[0]
            } catch (e) {
              !1 !== globalThis.__DEV__ && i.V1.warn(e)
            }
          }, t.prototype.evict = function(e) {
            if (!e.id) {
              if (Ue.call(e, "id")) return !1;
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
            return this.init(), O.M.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
              return t.maybeBroadcastWatch.forget(e)
            }), this.watches.clear(), Ve(this)) : this.broadcastWatches(), Promise.resolve()
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
            })), l.size && l.forEach(function(e) {
              return r.maybeBroadcastWatch.dirty(e)
            })) : this.broadcastWatches(e), t
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
            this.txCount || this.watches.forEach(function(r) {
              return t.maybeBroadcastWatch(r, e)
            })
          }, t.prototype.addFragmentsToDocument = function(e) {
            var t = this.config.fragments;
            return t ? t.transform(e) : e
          }, t.prototype.addTypenameToDocument = function(e) {
            return this.addTypename ? this.addTypenameTransform.transformDocument(e) : e
          }, t.prototype.broadcastWatch = function(e, t) {
            var r = this,
              n = e.lastDiff,
              i = (0, ne.lz)("canonizeResults", function() {
                return r.diff(e)
              });
            t && (e.optimistic && "string" == typeof t.optimistic && (i.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, i, n)) || n && d(n.result, i.result) || e.callback(e.lastDiff = i, n)
          }, t
        }(Le);
      !1 !== globalThis.__DEV__ && (Lt.prototype.getMemoryInternals = Ae.cM);
      var Wt = o.C.empty,
        Ut = o.C.from,
        Bt = o.C.split,
        Kt = o.C.concat,
        Ht = r(14120),
        Yt = r(13277),
        Gt = r(55001),
        Jt = r(74801),
        Xt = function() {
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
        $t = r(26618),
        Zt = r(16383),
        er = r(2669),
        tr = r(96807);

      function rr(e) {
        var t = !1;
        return new Promise(function(r, n) {
          e.subscribe({
            next: function(e) {
              t ? !1 !== globalThis.__DEV__ && i.V1.warn(57) : (t = !0, r(e))
            },
            error: n
          })
        })
      }

      function nr(e) {
        return new F.c(function(t) {
          e.then(function(e) {
            t.next(e), t.complete()
          }).catch(t.error.bind(t))
        })
      }
      var ir = r(7842),
        or = r(81797),
        ar = new Map,
        sr = new Map,
        ur = !0,
        cr = !1;

      function lr(e) {
        return e.replace(/[\s,]+/g, " ").trim()
      }

      function fr(e) {
        var t, r, i, o = lr(e);
        if (!ar.has(o)) {
          var a = (0, ge.parse)(e, {
            experimentalFragmentVariables: cr,
            allowLegacyFragmentVariables: cr
          });
          if (!a || "Document" !== a.kind) throw new Error("Not a valid GraphQL document.");
          ar.set(o, function(e) {
            var t = new Set(e.definitions);
            t.forEach(function(e) {
              e.loc && delete e.loc, Object.keys(e).forEach(function(r) {
                var n = e[r];
                n && "object" == typeof n && t.add(n)
              })
            });
            var r = e.loc;
            return r && (delete r.startToken, delete r.endToken), e
          }((t = a, r = new Set, i = [], t.definitions.forEach(function(e) {
            if ("FragmentDefinition" === e.kind) {
              var t = e.name.value,
                n = lr((a = e.loc).source.body.substring(a.start, a.end)),
                o = sr.get(t);
              o && !o.has(n) ? ur && console.warn("Warning: fragment with name " + t + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || sr.set(t, o = new Set), o.add(n), r.has(n) || (r.add(n), i.push(e))
            } else i.push(e);
            var a
          }), (0, n.__assign)((0, n.__assign)({}, t), {
            definitions: i
          }))))
        }
        return ar.get(o)
      }

      function hr(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        "string" == typeof e && (e = [e]);
        var n = e[0];
        return t.forEach(function(t, r) {
          t && "Document" === t.kind ? n += t.loc.source.body : n += t, n += e[r + 1]
        }), fr(n)
      }

      function dr() {
        ar.clear(), sr.clear()
      }

      function pr() {
        ur = !1
      }

      function yr() {
        cr = !0
      }

      function vr() {
        cr = !1
      }
      var gr, br = hr,
        mr = dr,
        _r = pr,
        wr = yr,
        kr = vr;
      (gr = hr || (hr = {})).gql = br, gr.resetCaches = mr, gr.disableFragmentWarnings = _r, gr.enableExperimentalFragmentVariables = wr, gr.disableExperimentalFragmentVariables = kr, hr.default = hr, (0, or.Q9)(!1 !== globalThis.__DEV__ ? "log" : "silent");
      var Sr = r(82540),
        Or = r.t(Sr, 2),
        Er = T.ol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";

      function Tr() {
        (0, i.V1)("createContext" in Or, 69);
        var e = Sr.createContext[Er];
        return e || (Object.defineProperty(Sr.createContext, Er, {
          value: e = Sr.createContext({}),
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), e.displayName = "ApolloContext"), e
      }
      var Rr = function() {
          return !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(70), Tr()
        },
        Dr = function(e) {
          var t = e.client,
            r = e.children,
            o = Tr(),
            a = Sr.useContext(o),
            s = Sr.useMemo(function() {
              return (0, n.__assign)((0, n.__assign)({}, a), {
                client: t || a.client
              })
            }, [a, t]);
          return (0, i.V1)(s.client, 71), Sr.createElement(o.Provider, {
            value: s
          }, r)
        },
        Pr = function(e) {
          var t = Tr();
          return Sr.createElement(t.Consumer, null, function(t) {
            return (0, i.V1)(t && t.client, 68), e.children(t.client)
          })
        };

      function Mr(e) {
        var t = Sr.useContext(Tr()),
          r = e || t.client;
        return (0, i.V1)(!!r, 79), r
      }
      var Cr, Qr, Fr = !1,
        Vr = Or.useSyncExternalStore || function(e, t, r) {
          var n = t();
          !1 === globalThis.__DEV__ || Fr || n === t() || (Fr = !0, !1 !== globalThis.__DEV__ && i.V1.error(92));
          var o = Sr.useState({
              inst: {
                value: n,
                getSnapshot: t
              }
            }),
            a = o[0].inst,
            s = o[1];
          return T.JR ? Sr.useLayoutEffect(function() {
            Object.assign(a, {
              value: n,
              getSnapshot: t
            }), qr(a) && s({
              inst: a
            })
          }, [e, n, t]) : Object.assign(a, {
            value: n,
            getSnapshot: t
          }), Sr.useEffect(function() {
            return qr(a) && s({
              inst: a
            }), e(function() {
              qr(a) && s({
                inst: a
              })
            })
          }, [e]), n
        };

      function qr(e) {
        var t = e.value,
          r = e.getSnapshot;
        try {
          return t !== r()
        } catch (e) {
          return !0
        }
      }

      function xr(e) {
        var t;
        switch (e) {
          case Cr.Query:
            t = "Query";
            break;
          case Cr.Mutation:
            t = "Mutation";
            break;
          case Cr.Subscription:
            t = "Subscription"
        }
        return t
      }

      function Ir(e) {
        (0, ne.S2)("parser", function() {
          !1 !== globalThis.__DEV__ && i.V1.warn(94)
        }), Qr || (Qr = new ve.A(M.v.parser || 1e3));
        var t, r, n = Qr.get(e);
        if (n) return n;
        (0, i.V1)(!!e && !!e.kind, 95, e);
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
        }(0, i.V1)(!o.length || a.length || s.length || u.length, 96), (0, i.V1)(a.length + s.length + u.length <= 1, 97, e, a.length, u.length, s.length), r = a.length ? Cr.Query : Cr.Mutation, a.length || s.length || (r = Cr.Subscription);
        var h = a.length ? a : s.length ? s : u;
        (0, i.V1)(1 === h.length, 98, e, h.length);
        var d = h[0];
        t = d.variableDefinitions || [];
        var p = {
          name: d.name && "Name" === d.name.kind ? d.name.value : "data",
          type: r,
          variables: t
        };
        return Qr.set(e, p), p
      }

      function jr(e, t) {
        var r = (0, ne.lz)("parser", Ir, [e]),
          n = xr(t),
          o = xr(r.type);
        (0, i.V1)(r.type === t, 99, n, n, o)
      }! function(e) {
        e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
      }(Cr || (Cr = {})), Ir.resetCache = function() {
        Qr = void 0
      }, !1 !== globalThis.__DEV__ && (0, Ae.D_)("parser", function() {
        return Qr ? Qr.size : 0
      });
      var Ar = Symbol.for("apollo.hook.wrappers");

      function Nr(e, t, r) {
        var n = r.queryManager,
          i = n && n[Ar],
          o = i && i[e];
        return o ? o(t) : t
      }

      function zr(e, t, r, n) {
        void 0 === n && (n = "Please remove this option.");
        var o = Sr.useRef(!1);
        t in e && !o.current && (!1 !== globalThis.__DEV__ && i.V1.warn(78, r, t, n), o.current = !0)
      }
      var Lr = Object.prototype.hasOwnProperty;

      function Wr() {}
      var Ur = Symbol();

      function Br(e, t) {
        return void 0 === t && (t = Object.create(null)), Nr("useQuery", Kr, Mr(t && t.client))(e, t)
      }

      function Kr(e, t) {
        !1 !== globalThis.__DEV__ && (zr(t, "canonizeResults", "useQuery"), zr(t, "partialRefetch", "useQuery"), zr(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), zr(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), zr(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
        var r = Hr(e, t),
          i = r.result,
          o = r.obsQueryFields;
        return Sr.useMemo(function() {
          return (0, n.__assign)((0, n.__assign)({}, i), o)
        }, [i, o])
      }

      function Hr(e, t) {
        var r = Mr(t.client),
          o = Sr.useContext(Tr()).renderPromises,
          a = !!o,
          s = r.disableNetworkFetches,
          u = !1 !== t.ssr && !t.skip,
          c = t.partialRefetch,
          l = Yr(r, e, t, a),
          f = function(e, t, r, i, o) {
            function a(n) {
              var a;
              return jr(t, Cr.Query), {
                client: e,
                query: t,
                observable: i && i.getSSRObservable(o()) || ae.inactiveOnCreation.withValue(!i, function() {
                  return (0, ne.lz)("canonizeResults", function() {
                    return e.watchQuery(Gr(void 0, e, r, o()))
                  })
                }),
                resultData: {
                  previousData: null === (a = null == n ? void 0 : n.resultData.current) || void 0 === a ? void 0 : a.data
                }
              }
            }
            var s = Sr.useState(a),
              u = s[0],
              c = s[1];

            function l(e) {
              var t, r;
              Object.assign(u.observable, ((t = {})[Ur] = e, t));
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
          }(r, e, t, o, l),
          h = f[0],
          p = h.observable,
          y = h.resultData,
          v = f[1],
          g = l(p);
        ! function(e, t, r, n, i) {
          var o;
          t[Ur] && !d(t[Ur], i) && (t.reobserve(Gr(t, r, n, i)), e.previousData = (null === (o = e.current) || void 0 === o ? void 0 : o.data) || e.previousData, e.current = void 0), t[Ur] = i
        }(y, p, r, t, g);
        var b = Sr.useMemo(function() {
          return function(e) {
            return {
              refetch: e.refetch.bind(e),
              reobserve: function() {
                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                return !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(84), e.reobserve.apply(e, t)
              },
              fetchMore: e.fetchMore.bind(e),
              updateQuery: e.updateQuery.bind(e),
              startPolling: e.startPolling.bind(e),
              stopPolling: e.stopPolling.bind(e),
              subscribeToMore: e.subscribeToMore.bind(e)
            }
          }(p)
        }, [p]);
        ! function(e, t, r) {
          t && r && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e))
        }(p, o, u);
        var m = function(e, t, r, n, i, o, a, s, u) {
          var c = Sr.useRef(u);
          Sr.useEffect(function() {
            c.current = u
          });
          var l = !s && !o || !1 !== n.ssr || n.skip ? n.skip || "standby" === i.fetchPolicy ? nn : void 0 : rn,
            f = e.previousData,
            h = Sr.useMemo(function() {
              return l && en(l, f, t, r)
            }, [r, t, l, f]);
          return Vr(Sr.useCallback(function(n) {
            if (s) return function() {};
            var i = function() {
                var i = e.current,
                  o = t.getCurrentResult();
                i && i.loading === o.loading && i.networkStatus === o.networkStatus && d(i.data, o.data) || Jr(o, e, t, r, a, n, c.current)
              },
              o = function(s) {
                if (u.current.unsubscribe(), u.current = t.resubscribeAfterError(i, o), !Lr.call(s, "graphQLErrors")) throw s;
                var l = e.current;
                (!l || l && l.loading || !d(s, l.error)) && Jr({
                  data: l && l.data,
                  error: s,
                  loading: !1,
                  networkStatus: B.error
                }, e, t, r, a, n, c.current)
              },
              u = {
                current: t.subscribe(i, o)
              };
            return function() {
              setTimeout(function() {
                return u.current.unsubscribe()
              })
            }
          }, [o, s, t, e, a, r]), function() {
            return h || Xr(e, t, c.current, a, r)
          }, function() {
            return h || Xr(e, t, c.current, a, r)
          })
        }(y, p, r, t, g, s, c, a, {
          onCompleted: t.onCompleted || Wr,
          onError: t.onError || Wr
        });
        return {
          result: m,
          obsQueryFields: b,
          observable: p,
          resultData: y,
          client: r,
          onQueryExecuted: v
        }
      }

      function Yr(e, t, r, i) {
        void 0 === r && (r = {});
        var o = r.skip,
          a = (r.ssr, r.onCompleted, r.onError, r.defaultOptions),
          s = (0, n.__rest)(r, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        return function(r) {
          var n = Object.assign(s, {
            query: t
          });
          return !i || "network-only" !== n.fetchPolicy && "cache-and-network" !== n.fetchPolicy || (n.fetchPolicy = "cache-first"), n.variables || (n.variables = {}), o ? (n.initialFetchPolicy = n.initialFetchPolicy || n.fetchPolicy || $r(a, e.defaultOptions), n.fetchPolicy = "standby") : n.fetchPolicy || (n.fetchPolicy = (null == r ? void 0 : r.options.initialFetchPolicy) || $r(a, e.defaultOptions)), n
        }
      }

      function Gr(e, t, r, n) {
        var i = [],
          o = t.defaultOptions.watchQuery;
        return o && i.push(o), r.defaultOptions && i.push(r.defaultOptions), i.push((0, G.o)(e && e.options, n)), i.reduce(Ie)
      }

      function Jr(e, t, r, o, a, s, u) {
        var c = t.current;
        c && c.data && (t.previousData = c.data), !e.error && (0, q.E)(e.errors) && (e.error = new K.K4({
            graphQLErrors: e.errors
          })), t.current = en(function(e, t, r) {
            return !e.partial || !r || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === t.options.fetchPolicy ? e : (t.refetch(), (0, n.__assign)((0, n.__assign)({}, e), {
              loading: !0,
              networkStatus: B.refetch
            }))
          }(e, r, a), t.previousData, r, o), s(),
          function(e, t, r) {
            if (!e.loading) {
              var n = Zr(e);
              Promise.resolve().then(function() {
                n ? r.onError(n) : e.data && t !== e.networkStatus && e.networkStatus === B.ready && r.onCompleted(e.data)
              }).catch(function(e) {
                !1 !== globalThis.__DEV__ && i.V1.warn(e)
              })
            }
          }(e, null == c ? void 0 : c.networkStatus, u)
      }

      function Xr(e, t, r, n, i) {
        return e.current || Jr(t.getCurrentResult(), e, t, i, n, function() {}, r), e.current
      }

      function $r(e, t) {
        var r;
        return (null == e ? void 0 : e.fetchPolicy) || (null === (r = null == t ? void 0 : t.watchQuery) || void 0 === r ? void 0 : r.fetchPolicy) || "cache-first"
      }

      function Zr(e) {
        return (0, q.E)(e.errors) ? new K.K4({
          graphQLErrors: e.errors
        }) : e.error
      }

      function en(e, t, r, i) {
        var o = e.data,
          a = (e.partial, (0, n.__rest)(e, ["data", "partial"]));
        return (0, n.__assign)((0, n.__assign)({
          data: o
        }, a), {
          client: i,
          observable: r,
          variables: r.variables,
          called: e !== rn && e !== nn,
          previousData: t
        })
      }
      var tn, rn = be({
          loading: !0,
          data: void 0,
          error: void 0,
          networkStatus: B.loading
        }),
        nn = be({
          loading: !1,
          data: void 0,
          error: void 0,
          networkStatus: B.ready
        }),
        on = T.Sw ? Sr.useLayoutEffect : Sr.useEffect,
        an = r(78718);

      function sn() {}

      function un() {
        return tn || (tn = Sr.createContext(null)), Sr.useCallback(function() {
          var e = console.error;
          try {
            return console.error = sn, Sr.useContext(tn), !0
          } catch (e) {
            return !1
          } finally {
            console.error = e
          }
        }, [])
      }
      var cn = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "stopPolling", "subscribeToMore"],
        ln = ["initialFetchPolicy", "onCompleted", "onError", "defaultOptions", "partialRefetch", "canonizeResults"],
        fn = ["query", "ssr", "client", "fetchPolicy", "nextFetchPolicy", "refetchWritePolicy", "errorPolicy", "pollInterval", "notifyOnNetworkStatusChange", "returnPartialData", "skipPollAttempt"];

      function hn(e, t) {
        var r;
        if (!1 !== globalThis.__DEV__) {
          var i = t || {};
          zr(i, "canonizeResults", "useLazyQuery"), zr(i, "variables", "useLazyQuery", "Pass all `variables` to the returned `execute` function instead."), zr(i, "context", "useLazyQuery", "Pass `context` to the returned `execute` function instead."), zr(i, "onCompleted", "useLazyQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), zr(i, "onError", "useLazyQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."), zr(i, "defaultOptions", "useLazyQuery", "Pass the options directly to the hook instead."), zr(i, "initialFetchPolicy", "useLazyQuery", "Use the `fetchPolicy` option instead."), zr(i, "partialRefetch", "useLazyQuery")
        }
        var o = Sr.useRef(void 0),
          a = Sr.useRef(void 0),
          s = Sr.useRef(void 0),
          u = Ie(t, o.current || {}),
          c = null !== (r = null == u ? void 0 : u.query) && void 0 !== r ? r : e;
        a.current = t, s.current = c;
        var l = (0, n.__assign)((0, n.__assign)({}, u), {
            skip: !o.current
          }),
          f = Hr(c, l),
          h = f.obsQueryFields,
          d = f.result,
          p = f.client,
          y = f.resultData,
          v = f.observable,
          g = f.onQueryExecuted,
          b = v.options.initialFetchPolicy || $r(l.defaultOptions, p.defaultOptions),
          m = Sr.useReducer(function(e) {
            return e + 1
          }, 0)[1],
          _ = Sr.useMemo(function() {
            for (var e = {}, t = function(t) {
                var r = h[t];
                e[t] = function() {
                  return !1 !== globalThis.__DEV__ && "reobserve" === t && !1 !== globalThis.__DEV__ && an.V1.warn(80), o.current || (o.current = Object.create(null), m()), r.apply(this, arguments)
                }
              }, r = 0, n = cn; r < n.length; r++) t(n[r]);
            return e
          }, [m, h]),
          w = !!o.current,
          k = Sr.useMemo(function() {
            return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, d), _), {
              called: w
            })
          }, [d, _, w]),
          S = un(),
          O = Sr.useRef(new Set),
          E = Sr.useCallback(function(e) {
            if (!1 !== globalThis.__DEV__) {
              S() && !1 !== globalThis.__DEV__ && an.V1.warn(81);
              for (var t = 0, r = ln; t < r.length; t++) {
                var i = r[t];
                O.current.has(i) || ((0, ne.cc)(e || {}, i, "useLazyQuery.execute"), O.current.add(i))
              }
              for (var u = 0, l = fn; u < l.length; u++) {
                var f = l[u];
                O.current.has(f) || ((0, ne.cc)(e || {}, f, "useLazyQuery.execute", "Please pass the option to the `useLazyQuery` hook instead."), O.current.add(f))
              }
            }
            o.current = e ? (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: e.fetchPolicy || b
            }) : {
              fetchPolicy: b
            };
            var h = Ie(a.current, (0, n.__assign)({
                query: s.current
              }, o.current)),
              d = function(e, t, r, n, i, o) {
                var a = i.query || n,
                  s = Yr(r, a, i, !1)(t),
                  u = t.reobserveAsConcast(Gr(t, r, i, s));
                return o(s), new Promise(function(n) {
                  var i;
                  u.subscribe({
                    next: function(e) {
                      i = e
                    },
                    error: function() {
                      n(en(t.getCurrentResult(), e.previousData, t, r))
                    },
                    complete: function() {
                      n(en(t.maskResult(i), e.previousData, t, r))
                    }
                  })
                })
              }(y, v, p, c, (0, n.__assign)((0, n.__assign)({}, h), {
                skip: !1
              }), g).then(function(e) {
                return Object.assign(e, _)
              });
            return d.catch(function() {}), d
          }, [S, p, c, _, b, v, y, g]),
          T = Sr.useRef(E);
        on(function() {
          T.current = E
        });
        var R = Sr.useCallback(function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return T.current.apply(T, e)
        }, []);
        return [R, k]
      }

      function dn(e, t) {
        !1 !== globalThis.__DEV__ && zr(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
        var r = Mr(null == t ? void 0 : t.client);
        jr(e, Cr.Mutation);
        var i = Sr.useState({
            called: !1,
            loading: !1,
            client: r
          }),
          o = i[0],
          a = i[1],
          s = Sr.useRef({
            result: o,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: t
          });
        on(function() {
          Object.assign(s.current, {
            client: r,
            options: t,
            mutation: e
          })
        });
        var u = Sr.useCallback(function(e) {
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
              l = Ie(o, e);
            return u.mutate(l).then(function(t) {
              var r, n, i = t.data,
                o = t.errors,
                f = o && o.length > 0 ? new K.K4({
                  graphQLErrors: o
                }) : void 0,
                h = e.onError || (null === (r = s.current.options) || void 0 === r ? void 0 : r.onError);
              if (f && h && h(f, l), c === s.current.mutationId && !l.ignoreResults) {
                var p = {
                  called: !0,
                  loading: !1,
                  data: i,
                  error: f,
                  client: u
                };
                s.current.isMounted && !d(s.current.result, p) && a(s.current.result = p)
              }
              var y = e.onCompleted || (null === (n = s.current.options) || void 0 === n ? void 0 : n.onCompleted);
              return f || null == y || y(t.data, l), t
            }, function(t) {
              var r;
              if (c === s.current.mutationId && s.current.isMounted) {
                var n = {
                  loading: !1,
                  error: t,
                  data: void 0,
                  called: !0,
                  client: u
                };
                d(s.current.result, n) || a(s.current.result = n)
              }
              var i = e.onError || (null === (r = s.current.options) || void 0 === r ? void 0 : r.onError);
              if (i) return i(t, l), {
                data: void 0,
                errors: t
              };
              throw t
            })
          }, []),
          c = Sr.useCallback(function() {
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
          }, []);
        return Sr.useEffect(function() {
          var e = s.current;
          return e.isMounted = !0,
            function() {
              e.isMounted = !1
            }
        }, []), [u, (0, n.__assign)({
          reset: c
        }, o)]
      }

      function pn(e, t) {
        var r = Sr.useRef(void 0);
        return r.current && d(r.current.deps, t) || (r.current = {
          value: e(),
          deps: t
        }), r.current.value
      }

      function yn(e, t) {
        void 0 === t && (t = Object.create(null));
        var r = Sr.useRef(!1),
          o = Mr(t.client);
        jr(e, Cr.Subscription), r.current || (r.current = !0, t.onSubscriptionData && !1 !== globalThis.__DEV__ && i.V1.warn(t.onData ? 85 : 86), t.onSubscriptionComplete && !1 !== globalThis.__DEV__ && i.V1.warn(t.onComplete ? 87 : 88));
        var a = t.skip,
          s = t.fetchPolicy,
          u = t.errorPolicy,
          c = t.shouldResubscribe,
          l = t.context,
          f = t.extensions,
          h = t.ignoreResults,
          p = pn(function() {
            return t.variables
          }, [t.variables]),
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
              return Object.assign(new F.c(function(t) {
                l || (l = e.subscribe(u));
                var r = l.subscribe(t);
                return function() {
                  return r.unsubscribe()
                }
              }), {
                __: c
              })
            }(o, e, p, s, u, l, f)
          },
          v = Sr.useState(t.skip ? null : y),
          g = v[0],
          b = v[1],
          m = Sr.useRef(y);
        on(function() {
          m.current = y
        }), a ? g && b(g = null) : g && (o === g.__.client && e === g.__.query && s === g.__.fetchPolicy && u === g.__.errorPolicy && d(p, g.__.variables) || !1 === ("function" == typeof c ? !!c(t) : c)) || b(g = y());
        var _ = Sr.useRef(t);
        Sr.useEffect(function() {
          _.current = t
        });
        var w = !a && !h,
          k = Sr.useMemo(function() {
            return {
              loading: w,
              error: void 0,
              data: void 0,
              variables: p
            }
          }, [w, p]),
          S = Sr.useRef(h);
        on(function() {
          S.current = h
        });
        var O = Vr(Sr.useCallback(function(e) {
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
                      error: Zr(i),
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
                  n = n instanceof K.K4 ? n : new K.K4({
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
              t = !0, setTimeout(function() {
                i.unsubscribe()
              })
            }
          }, [g]), function() {
            return !g || a || h ? k : g.__.result
          }, function() {
            return k
          }),
          E = Sr.useCallback(function() {
            (0, i.V1)(!_.current.skip, 89), b(m.current())
          }, [_, m]);
        return Sr.useMemo(function() {
          return (0, n.__assign)((0, n.__assign)({}, O), {
            restart: E
          })
        }, [O, E])
      }

      function vn(e) {
        return Vr(Sr.useCallback(function(t) {
          return e.onNextChange(function r() {
            t(), e.onNextChange(r)
          })
        }, [e]), e, e)
      }

      function gn(e) {
        return Nr("useFragment", bn, Mr(e.client))(e)
      }

      function bn(e) {
        !1 !== globalThis.__DEV__ && zr(e, "canonizeResults", "useFragment");
        var t = Mr(e.client),
          r = t.cache,
          i = e.from,
          o = (0, n.__rest)(e, ["from"]),
          a = Sr.useMemo(function() {
            return "string" == typeof i ? i : null === i ? null : r.identify(i)
          }, [r, i]),
          s = pn(function() {
            return (0, n.__assign)((0, n.__assign)({}, o), {
              from: a
            })
          }, [o, a]),
          u = Sr.useMemo(function() {
            var e = s.fragment,
              r = s.fragmentName,
              i = s.from,
              o = s.optimistic,
              a = void 0 === o || o;
            if (null === i) return {
              result: mn({
                result: {},
                complete: !1
              })
            };
            var u = t.cache,
              c = (0, ne.lz)("canonizeResults", function() {
                return u.diff((0, n.__assign)((0, n.__assign)({}, s), {
                  returnPartialData: !0,
                  id: i,
                  query: u.getFragmentDoc(e, r),
                  optimistic: a
                }))
              });
            return {
              result: mn((0, n.__assign)((0, n.__assign)({}, c), {
                result: t.queryManager.maskFragment({
                  fragment: e,
                  fragmentName: r,
                  data: c.result
                })
              }))
            }
          }, [t, s]),
          c = Sr.useCallback(function() {
            return u.result
          }, [u]);
        return Vr(Sr.useCallback(function(e) {
          var r = 0,
            n = (0, ne.lz)("canonizeResults", function() {
              return null === s.from ? null : t.watchFragment(s).subscribe({
                next: function(t) {
                  p(t, u.result) || (u.result = t, clearTimeout(r), r = setTimeout(e))
                }
              })
            });
          return function() {
            null == n || n.unsubscribe(), clearTimeout(r)
          }
        }, [t, s, u]), c, c)
      }

      function mn(e) {
        var t = {
          data: e.result,
          complete: !!e.complete
        };
        return e.missing && (t.missing = (0, le.IM)(e.missing.map(function(e) {
          return e.missing
        }))), t
      }

      function _n(e) {
        var t = Promise.resolve(e);
        return t.status = "fulfilled", t.value = e, t
      }

      function wn(e) {
        if (function(e) {
            return "status" in e
          }(e)) return e;
        var t = e;
        return t.status = "pending", t.then(function(e) {
          if ("pending" === t.status) {
            var r = t;
            r.status = "fulfilled", r.value = e
          }
        }, function(e) {
          if ("pending" === t.status) {
            var r = t;
            r.status = "rejected", r.reason = e
          }
        }), e
      }
      var kn = Or.use || function(e) {
          var t = wn(e);
          switch (t.status) {
            case "pending":
              throw t;
            case "rejected":
              throw t.reason;
            case "fulfilled":
              return t.value
          }
        },
        Sn = Symbol.for("apollo.internal.queryRef"),
        On = Symbol.for("apollo.internal.refPromise");

      function En(e) {
        var t, r = ((t = {
          toPromise: function() {
            return Rn(r).then(function() {
              return r
            })
          }
        })[Sn] = e, t[On] = e.promise, t);
        return r
      }

      function Tn(e) {
        (0, an.V1)(!e || Sn in e, 93)
      }

      function Rn(e) {
        var t = Dn(e);
        return "fulfilled" === t.promise.status ? t.promise : e[On]
      }

      function Dn(e) {
        return e[Sn]
      }

      function Pn(e, t) {
        e[On] = t
      }
      var Mn = ["canonizeResults", "context", "errorPolicy", "fetchPolicy", "refetchWritePolicy", "returnPartialData"],
        Cn = function() {
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
                }) : ((0, ne.lz)("resetLastResults", function() {
                  return e.resetLastResults()
                }), e.silentSetOptions({
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
              t || (t = !0, e.references--, setTimeout(function() {
                e.references || e.dispose()
              }))
            }
          }, e.prototype.softRetain = function() {
            var e = this;
            this.softReferences++;
            var t = !1;
            return function() {
              t || (t = !0, e.softReferences--, setTimeout(function() {
                e.softReferences || e.references || e.dispose()
              }))
            }
          }, e.prototype.didChangeOptions = function(e) {
            var t = this;
            return Mn.some(function(r) {
              return r in e && !d(t.watchQueryOptions[r], e[r])
            })
          }, e.prototype.applyOptions = function(e) {
            var t = this.watchQueryOptions,
              r = t.fetchPolicy,
              i = t.canonizeResults;
            return "standby" === r && r !== e.fetchPolicy ? this.initiateFetch(this.observable.reobserve(e)) : (this.observable.silentSetOptions(e), i !== e.canonizeResults && (this.result = (0, n.__assign)((0, n.__assign)({}, this.result), this.observable.getCurrentResult()), this.promise = _n(this.result))), this.promise
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
              void 0 === e.data && (e.data = this.result.data), this.result = e, this.promise = _n(e), this.deliver(this.promise)
            }
          }, e.prototype.handleError = function(e) {
            var t, r, n;
            this.subscription.unsubscribe(), this.subscription = this.observable.resubscribeAfterError(this.handleNext, this.handleError), "pending" === this.promise.status ? null === (t = this.reject) || void 0 === t || t.call(this, e) : (this.promise = (r = e, (n = Promise.reject(r)).catch(function() {}), n.status = "rejected", n.reason = r, n), this.deliver(this.promise))
          }, e.prototype.deliver = function(e) {
            this.listeners.forEach(function(t) {
              return t(e)
            })
          }, e.prototype.initiateFetch = function(e) {
            var t = this;
            return this.promise = this.createPendingPromise(), this.promise.catch(function() {}), e.then(function() {
              setTimeout(function() {
                var e;
                "pending" === t.promise.status && (t.result = t.observable.getCurrentResult(), null === (e = t.resolve) || void 0 === e || e.call(t, t.result))
              })
            }).catch(function(e) {
              var r;
              return null === (r = t.reject) || void 0 === r ? void 0 : r.call(t, e)
            }), e
          }, e.prototype.subscribeToQuery = function() {
            var e = this;
            this.subscription = this.observable.filter(function(t) {
              return !d(t.data, {}) && !d(t, e.result)
            }).subscribe(this.handleNext, this.handleError)
          }, e.prototype.setResult = function() {
            var e = this.observable.getCurrentResult(!1);
            d(e, this.result) || (this.result = e, this.promise = !e.data || e.partial && !this.watchQueryOptions.returnPartialData ? this.createPendingPromise() : _n(e))
          }, e.prototype.createPendingPromise = function() {
            var e = this;
            return wn(new Promise(function(t, r) {
              e.resolve = t, e.reject = r
            }))
          }, e
        }(),
        Qn = function() {
          function e(e, t, r) {
            var n = this;
            this.key = {}, this.listeners = new Set, this.references = 0, this.dispose = this.dispose.bind(this), this.handleNext = this.handleNext.bind(this), this.handleError = this.handleError.bind(this), this.observable = e.watchFragment(t), r.onDispose && (this.onDispose = r.onDispose);
            var i = this.getDiff(e, t),
              o = function() {
                var e;
                n.references || (n.autoDisposeTimeoutId = setTimeout(n.dispose, null !== (e = r.autoDisposeTimeoutMs) && void 0 !== e ? e : 3e4))
              };
            this.promise = i.complete ? _n(i.result) : this.createPendingPromise(), this.subscribeToFragment(), this.promise.then(o, o)
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
              t || (t = !0, e.references--, setTimeout(function() {
                e.references || e.dispose()
              }))
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
                if (d(this.promise.value, e.data)) return;
                this.promise = e.complete ? _n(e.data) : this.createPendingPromise(), this.deliver(this.promise)
            }
          }, e.prototype.handleError = function(e) {
            var t;
            null === (t = this.reject) || void 0 === t || t.call(this, e)
          }, e.prototype.deliver = function(e) {
            this.listeners.forEach(function(t) {
              return t(e)
            })
          }, e.prototype.createPendingPromise = function() {
            var e = this;
            return wn(new Promise(function(t, r) {
              e.resolve = t, e.reject = r
            }))
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
        Fn = function() {
          function e(e) {
            void 0 === e && (e = Object.create(null)), this.queryRefs = new E.b(T.et), this.fragmentRefs = new E.b(T.et), this.options = e
          }
          return e.prototype.getQueryRef = function(e, t) {
            var r = this.queryRefs.lookupArray(e);
            return r.current || (r.current = new Cn(t(), {
              autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
              onDispose: function() {
                delete r.current
              }
            })), r.current
          }, e.prototype.getFragmentRef = function(e, t, r) {
            var n = this.fragmentRefs.lookupArray(e);
            return n.current || (n.current = new Qn(t, r, {
              autoDisposeTimeoutMs: this.options.autoDisposeTimeoutMs,
              onDispose: function() {
                delete n.current
              }
            })), n.current
          }, e.prototype.add = function(e, t) {
            this.queryRefs.lookupArray(e).current = t
          }, e
        }(),
        Vn = Symbol.for("apollo.suspenseCache");

      function qn(e) {
        var t;
        return e[Vn] || (e[Vn] = new Fn(null === (t = e.defaultOptions.react) || void 0 === t ? void 0 : t.suspense)), e[Vn]
      }
      var xn = Symbol.for("apollo.skipToken");

      function In(e, t) {
        return void 0 === t && (t = Object.create(null)), Nr("useSuspenseQuery", jn, Mr("object" == typeof t ? t.client : void 0))(e, t)
      }

      function jn(e, t) {
        !1 !== globalThis.__DEV__ && zr("symbol" == typeof t ? {} : t, "canonizeResults", "useSuspenseQuery");
        var r = Mr(t.client),
          i = qn(r),
          o = Nn({
            client: r,
            query: e,
            options: t
          }),
          a = o.fetchPolicy,
          s = o.variables,
          u = t.queryKey,
          c = void 0 === u ? [] : u,
          l = (0, n.__spreadArray)([e, (0, O.M)(s)], [].concat(c), !0),
          f = (0, ne.lz)("canonizeResults", function() {
            return i.getQueryRef(l, function() {
              return r.watchQuery(o)
            })
          }),
          h = Sr.useState([f.key, f.promise]),
          d = h[0],
          p = h[1];
        d[0] !== f.key && (d[0] = f.key, d[1] = f.promise);
        var y = d[1];
        f.didChangeOptions(o) && (d[1] = y = f.applyOptions(o)), Sr.useEffect(function() {
          var e = f.retain(),
            t = f.listen(function(e) {
              p([f.key, e])
            });
          return function() {
            t(), e()
          }
        }, [f]);
        var v = Sr.useMemo(function() {
            var e = An(f.result);
            return {
              loading: !1,
              data: f.result.data,
              networkStatus: e ? B.error : B.ready,
              error: e
            }
          }, [f.result]),
          g = "standby" === a ? v : kn(y),
          b = Sr.useCallback(function(e) {
            var t = f.fetchMore(e);
            return p([f.key, f.promise]), t
          }, [f]),
          m = Sr.useCallback(function(e) {
            var t = f.refetch(e);
            return p([f.key, f.promise]), t
          }, [f]),
          _ = f.observable.subscribeToMore;
        return Sr.useMemo(function() {
          return {
            client: r,
            data: g.data,
            error: An(g),
            networkStatus: g.networkStatus,
            fetchMore: b,
            refetch: m,
            subscribeToMore: _
          }
        }, [r, b, m, g, _])
      }

      function An(e) {
        return (0, q.E)(e.errors) ? new K.K4({
          graphQLErrors: e.errors
        }) : e.error
      }

      function Nn(e) {
        var t = e.client,
          r = e.query,
          o = e.options;
        return pn(function() {
          var e;
          if (o === xn) return {
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
            jr(t, Cr.Query),
              function(e) {
                void 0 === e && (e = "cache-first"), (0, i.V1)(["cache-first", "network-only", "no-cache", "cache-and-network"].includes(e), 90, e)
              }(r),
              function(e, t) {
                "no-cache" === e && t && !1 !== globalThis.__DEV__ && i.V1.warn(91)
              }(r, n)
          }(s), o.skip && (s.fetchPolicy = "standby"), s
        }, [t, o, r])
      }

      function zn(e, t) {
        return void 0 === t && (t = Object.create(null)), Nr("useBackgroundQuery", Ln, Mr("object" == typeof t ? t.client : void 0))(e, t)
      }

      function Ln(e, t) {
        !1 !== globalThis.__DEV__ && zr("symbol" == typeof t ? {} : t, "canonizeResults", "useBackgroundQuery");
        var r = Mr(t.client),
          i = qn(r),
          o = Nn({
            client: r,
            query: e,
            options: t
          }),
          a = o.fetchPolicy,
          s = o.variables,
          u = t.queryKey,
          c = void 0 === u ? [] : u,
          l = Sr.useRef("standby" !== a);
        l.current || (l.current = "standby" !== a);
        var f = (0, n.__spreadArray)([e, (0, O.M)(s)], [].concat(c), !0),
          h = (0, ne.lz)("canonizeResults", function() {
            return i.getQueryRef(f, function() {
              return r.watchQuery(o)
            })
          }),
          d = Sr.useState(En(h)),
          p = d[0],
          y = d[1];
        Dn(p) !== h && y(En(h)), h.didChangeOptions(o) && Pn(p, h.applyOptions(o)), Sr.useEffect(function() {
          var e = setTimeout(function() {
            h.disposed && i.add(f, h)
          });
          return function() {
            return clearTimeout(e)
          }
        });
        var v = Sr.useCallback(function(e) {
            var t = h.fetchMore(e);
            return y(En(h)), t
          }, [h]),
          g = Sr.useCallback(function(e) {
            var t = h.refetch(e);
            return y(En(h)), t
          }, [h]);
        return Sr.useEffect(function() {
          return h.softRetain()
        }, [h]), [l.current ? p : void 0, {
          fetchMore: v,
          refetch: g,
          subscribeToMore: h.observable.subscribeToMore
        }]
      }
      var Wn = [];

      function Un(e) {
        return Nr("useSuspenseFragment", Bn, Mr("object" == typeof e ? e.client : void 0))(e)
      }

      function Bn(e) {
        var t = Mr(e.client),
          r = e.from,
          i = e.variables,
          o = t.cache,
          a = Sr.useMemo(function() {
            return "string" == typeof r ? r : null === r ? null : o.identify(r)
          }, [o, r]),
          s = null === a ? null : qn(t).getFragmentRef([a, e.fragment, (0, O.M)(i)], t, (0, n.__assign)((0, n.__assign)({}, e), {
            variables: i,
            from: a
          })),
          u = Sr.useState(null === s ? Wn : [s.key, s.promise]),
          c = u[0],
          l = u[1];
        return Sr.useEffect(function() {
          if (null !== s) {
            var e = s.retain(),
              t = s.listen(function(e) {
                l([s.key, e])
              });
            return function() {
              e(), t()
            }
          }
        }, [s]), null === s ? {
          data: null
        } : (c[0] !== s.key && (c[0] = s.key, c[1] = s.promise), {
          data: kn(c[1])
        })
      }

      function Kn(e, t) {
        void 0 === t && (t = Object.create(null)), !1 !== globalThis.__DEV__ && zr(t, "canonizeResults", "useLoadableQuery");
        var r = Mr(t.client),
          o = qn(r),
          a = Nn({
            client: r,
            query: e,
            options: t
          }),
          s = t.queryKey,
          u = void 0 === s ? [] : s,
          c = Sr.useState(null),
          l = c[0],
          f = c[1];
        Tn(l);
        var h = l && Dn(l);
        l && (null == h ? void 0 : h.didChangeOptions(a)) && Pn(l, h.applyOptions(a));
        var d = un(),
          p = Sr.useCallback(function(e) {
            if (!h) throw new Error("The query has not been loaded. Please load the query.");
            var t = h.fetchMore(e);
            return f(En(h)), t
          }, [h]),
          y = Sr.useCallback(function(e) {
            if (!h) throw new Error("The query has not been loaded. Please load the query.");
            var t = h.refetch(e);
            return f(En(h)), t
          }, [h]),
          v = Sr.useCallback(function() {
            for (var t = [], s = 0; s < arguments.length; s++) t[s] = arguments[s];
            (0, i.V1)(!d(), 82);
            var c = t[0],
              l = (0, n.__spreadArray)([e, (0, O.M)(c)], [].concat(u), !0),
              h = (0, ne.lz)("canonizeResults", function() {
                return o.getQueryRef(l, function() {
                  return r.watchQuery((0, n.__assign)((0, n.__assign)({}, a), {
                    variables: c
                  }))
                })
              });
            f(En(h))
          }, [e, u, o, a, d, r]),
          g = Sr.useCallback(function(e) {
            return (0, i.V1)(h, 83), h.observable.subscribeToMore(e)
          }, [h]);
        return [v, l, {
          fetchMore: p,
          refetch: y,
          reset: Sr.useCallback(function() {
            f(null)
          }, []),
          subscribeToMore: g
        }]
      }

      function Hn(e) {
        var t = Dn(e);
        return Nr("useQueryRefHandlers", Yn, Mr(t ? t.observable : void 0))(e)
      }

      function Yn(e) {
        Tn(e);
        var t = Sr.useState(e),
          r = t[0],
          n = t[1],
          i = Sr.useState(e),
          o = i[0],
          a = i[1],
          s = Dn(e);
        return r !== e ? (n(e), a(e)) : Pn(e, Rn(o)), {
          refetch: Sr.useCallback(function(e) {
            var t = s.refetch(e);
            return a(En(s)), t
          }, [s]),
          fetchMore: Sr.useCallback(function(e) {
            var t = s.fetchMore(e);
            return a(En(s)), t
          }, [s]),
          subscribeToMore: s.observable.subscribeToMore
        }
      }

      function Gn(e) {
        var t = Dn(e);
        return Nr("useReadQuery", Jn, Mr(t ? t.observable : void 0))(e)
      }

      function Jn(e) {
        Tn(e);
        var t = Sr.useMemo(function() {
            return Dn(e)
          }, [e]),
          r = Sr.useCallback(function() {
            return Rn(e)
          }, [e]);
        t.disposed && (t.reinitialize(), Pn(e, t.promise)), Sr.useEffect(function() {
          return t.retain()
        }, [t]);
        var n = Vr(Sr.useCallback(function(r) {
            return t.listen(function(t) {
              Pn(e, t), r()
            })
          }, [t, e]), r, r),
          i = kn(n);
        return Sr.useMemo(function() {
          return {
            data: i.data,
            networkStatus: i.networkStatus,
            error: An(i)
          }
        }, [i])
      }

      function Xn(e) {
        return Nr("createQueryPreloader", $n, e)(e)
      }
      var $n = function(e) {
        return Object.assign(function(t, r) {
          return void 0 === r && (r = Object.create(null)), (0, ne.cc)(r, "canonizeResults", "preloadQuery"), En((0, ne.lz)("canonizeResults", function() {
            var i, o;
            return new Cn(e.watchQuery((0, n.__assign)((0, n.__assign)({}, r), {
              query: t
            })), {
              autoDisposeTimeoutMs: null === (o = null === (i = e.defaultOptions.react) || void 0 === i ? void 0 : i.suspense) || void 0 === o ? void 0 : o.autoDisposeTimeoutMs
            })
          }))
        }, {
          toPromise: function(e) {
            return e.toPromise()
          }
        })
      }
    },
    82540: (e, t, r) => {
      e.exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = void 0, e.exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, e.exports.__SERVER_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = void 0, Object.assign(e.exports, r(62229))
    }
  }
]);