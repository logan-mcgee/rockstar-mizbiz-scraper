! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0425d573-53ff-4ed1-97c8-16afe540d142", e._sentryDebugIdIdentifier = "sentry-dbid-0425d573-53ff-4ed1-97c8-16afe540d142")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "692b6956abd6177da3ac6da14c81527e5159ed6d",
  packageName: "@rockstargames/graph-client",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "692b6956abd6177da3ac6da14c81527e5159ed6d"
}, (self.webpackChunk_rockstargames_graph_client = self.webpackChunk_rockstargames_graph_client || []).push([
  [460], {
    5460: (e, t, r) => {
      r.r(t), r.d(t, {
        ApolloCache: () => ar,
        ApolloClient: () => sr,
        ApolloConsumer: () => _i,
        ApolloError: () => N,
        ApolloLink: () => o.A,
        ApolloProvider: () => bi,
        Cache: () => ir,
        DocumentType: () => Ei,
        HttpLink: () => ee,
        InMemoryCache: () => an,
        MissingFieldError: () => cr,
        NetworkStatus: () => Ve,
        Observable: () => h._,
        ObservableQuery: () => Je,
        checkFetcher: () => U,
        concat: () => hn,
        createHttpLink: () => Z,
        createSignalIfSupported: () => H,
        defaultDataIdFromObject: () => pr,
        defaultPrinter: () => W,
        disableExperimentalFragmentVariables: () => ci,
        disableFragmentWarnings: () => si,
        empty: () => cn,
        enableExperimentalFragmentVariables: () => ai,
        execute: () => s,
        fallbackHttpConfig: () => B,
        from: () => un,
        fromError: () => J,
        fromPromise: () => fn,
        getApolloContext: () => gi,
        gql: () => ii,
        isApolloError: () => S,
        isReference: () => Se.Ez,
        makeReference: () => Se.Yz,
        makeVar: () => Ht,
        mergeOptions: () => nr,
        operationName: () => Ni,
        parseAndCheckHttpResponse: () => V,
        parser: () => Di,
        resetApolloContext: () => gi,
        resetCaches: () => oi,
        rewriteURIForGET: () => Y,
        selectHttpOptionsAndBody: () => K,
        selectHttpOptionsAndBodyInternal: () => G,
        selectURI: () => f,
        serializeFetchParameter: () => p,
        setLogVerbosity: () => dn.kP,
        split: () => ln,
        throwServerError: () => w,
        toPromise: () => pn,
        useApolloClient: () => Oi,
        useFragment_experimental: () => qi,
        useLazyQuery: () => Fi,
        useMutation: () => Mi,
        useQuery: () => Ri,
        useReactiveVar: () => Qi,
        useSubscription: () => Li
      });
      var n = r(3464),
        i = r(7672),
        o = r(8280),
        s = o.A.execute,
        a = r(6836);

      function c(e, t) {
        var r = e.directives;
        return !r || !r.length || function(e) {
          var t = [];
          return e && e.length && e.forEach((function(e) {
            if (function(e) {
                var t = e.name.value;
                return "skip" === t || "include" === t
              }(e)) {
              var r = e.arguments,
                i = e.name.value;
              __DEV__ ? (0, n.ON)(r && 1 === r.length, "Incorrect number of arguments for the @".concat(i, " directive.")) : (0, n.ON)(r && 1 === r.length, 41);
              var o = r[0];
              __DEV__ ? (0, n.ON)(o.name && "if" === o.name.value, "Invalid argument for the @".concat(i, " directive.")) : (0, n.ON)(o.name && "if" === o.name.value, 42);
              var s = o.value;
              __DEV__ ? (0, n.ON)(s && ("Variable" === s.kind || "BooleanValue" === s.kind), "Argument for the @".concat(i, " directive must be a variable or a boolean value.")) : (0, n.ON)(s && ("Variable" === s.kind || "BooleanValue" === s.kind), 43), t.push({
                directive: e,
                ifArgument: o
              })
            }
          })), t
        }(r).every((function(e) {
          var r = e.directive,
            i = e.ifArgument,
            o = !1;
          return "Variable" === i.value.kind ? (o = t && t[i.value.name.value], __DEV__ ? (0, n.ON)(void 0 !== o, "Invalid variable referenced in @".concat(r.name.value, " directive.")) : (0, n.ON)(void 0 !== o, 40)) : o = i.value.value, "skip" === r.name.value ? !o : o
        }))
      }

      function u(e, t, r) {
        var n = new Set(e),
          i = n.size;
        return (0, a.kn)(t, {
          Directive: function(e) {
            if (n.delete(e.name.value) && (!r || !n.size)) return a.O0
          }
        }), r ? !n.size : n.size < i
      }

      function l(e) {
        return e && u(["client", "export"], e, !0)
      }
      var h = r(9428),
        p = function(e, t) {
          var r;
          try {
            r = JSON.stringify(e)
          } catch (e) {
            var i = __DEV__ ? new n.gZ("Network request failed. ".concat(t, " is not serializable: ").concat(e.message)) : new n.gZ(24);
            throw i.parseError = e, i
          }
          return r
        },
        f = function(e, t) {
          return e.getContext().uri || ("function" == typeof t ? t(e) : t || "/graphql")
        },
        d = "function" == typeof WeakMap && "ReactNative" !== (0, n.WG)((function() {
          return navigator.product
        })),
        v = "function" == typeof WeakSet,
        y = "function" == typeof Symbol && "function" == typeof Symbol.for,
        m = y && Symbol.asyncIterator,
        g = "function" == typeof(0, n.WG)((function() {
          return window.document.createElement
        })),
        b = (0, n.WG)((function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        })) || !1,
        _ = g && !b;

      function O(e) {
        var t = {
          next: function() {
            return e.read()
          }
        };
        return m && (t[Symbol.asyncIterator] = function() {
          return this
        }), t
      }

      function E(e) {
        var t, r, n, i, o = e;
        if (e.body && (o = e.body), i = o, m && i[Symbol.asyncIterator]) return function(e) {
          var t, r = e[Symbol.asyncIterator]();
          return (t = {
            next: function() {
              return r.next()
            }
          })[Symbol.asyncIterator] = function() {
            return this
          }, t
        }(o);
        if (function(e) {
            return !!e.getReader
          }(o)) return O(o.getReader());
        if (function(e) {
            return !!e.stream
          }(o)) return O(o.stream().getReader());
        if (function(e) {
            return !!e.arrayBuffer
          }(o)) return t = o.arrayBuffer(), r = !1, n = {
          next: function() {
            return r ? Promise.resolve({
              value: void 0,
              done: !0
            }) : (r = !0, new Promise((function(e, r) {
              t.then((function(t) {
                e({
                  value: t,
                  done: !1
                })
              })).catch(r)
            })))
          }
        }, m && (n[Symbol.asyncIterator] = function() {
          return this
        }), n;
        if (function(e) {
            return !!e.pipe
          }(o)) return function(e) {
          var t = null,
            r = null,
            n = !1,
            i = [],
            o = [];

          function s(e) {
            if (!r) {
              if (o.length) {
                var t = o.shift();
                if (Array.isArray(t) && t[0]) return t[0]({
                  value: e,
                  done: !1
                })
              }
              i.push(e)
            }
          }

          function a(e) {
            r = e, o.slice().forEach((function(t) {
              t[1](e)
            })), !t || t()
          }

          function c() {
            n = !0, o.slice().forEach((function(e) {
              e[0]({
                value: void 0,
                done: !0
              })
            })), !t || t()
          }
          t = function() {
            t = null, e.removeListener("data", s), e.removeListener("error", a), e.removeListener("end", c), e.removeListener("finish", c), e.removeListener("close", c)
          }, e.on("data", s), e.on("error", a), e.on("end", c), e.on("finish", c), e.on("close", c);
          var u = {
            next: function() {
              return new Promise((function(e, t) {
                return r ? t(r) : i.length ? e({
                  value: i.shift(),
                  done: !1
                }) : n ? e({
                  value: void 0,
                  done: !0
                }) : void o.push([e, t])
              }))
            }
          };
          return m && (u[Symbol.asyncIterator] = function() {
            return this
          }), u
        }(o);
        throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")
      }
      var w = function(e, t, r) {
          var n = new Error(r);
          throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n
        },
        k = r(8196),
        C = Symbol();

      function S(e) {
        return e.hasOwnProperty("graphQLErrors")
      }
      var N = function(e) {
          function t(r) {
            var n, o, s = r.graphQLErrors,
              a = r.protocolErrors,
              c = r.clientErrors,
              u = r.networkError,
              l = r.errorMessage,
              h = r.extraInfo,
              p = e.call(this, l) || this;
            return p.name = "ApolloError", p.graphQLErrors = s || [], p.protocolErrors = a || [], p.clientErrors = c || [], p.networkError = u || null, p.message = l || (n = p, o = (0, i.Mt)((0, i.Mt)((0, i.Mt)([], n.graphQLErrors, !0), n.clientErrors, !0), n.protocolErrors, !0), n.networkError && o.push(n.networkError), o.map((function(e) {
              return (0, k.a)(e) && e.message || "Error message not found."
            })).join("\n")), p.extraInfo = h, p.__proto__ = t.prototype, p
          }
          return (0, i.ct)(t, e), t
        }(Error),
        D = r(1584),
        x = Object.prototype.hasOwnProperty;

      function T() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return R(e)
      }

      function R(e) {
        var t = e[0] || {},
          r = e.length;
        if (r > 1)
          for (var n = new A, i = 1; i < r; ++i) t = n.merge(t, e[i]);
        return t
      }
      var I = function(e, t, r) {
          return this.merge(e[r], t[r])
        },
        A = function() {
          function e(e) {
            void 0 === e && (e = I), this.reconciler = e, this.isObject = k.a, this.pastCopies = new Set
          }
          return e.prototype.merge = function(e, t) {
            for (var r = this, n = [], o = 2; o < arguments.length; o++) n[o - 2] = arguments[o];
            return (0, k.a)(t) && (0, k.a)(e) ? (Object.keys(t).forEach((function(o) {
              if (x.call(e, o)) {
                var s = e[o];
                if (t[o] !== s) {
                  var a = r.reconciler.apply(r, (0, i.Mt)([e, t, o], n, !1));
                  a !== s && ((e = r.shallowCopyForMerge(e))[o] = a)
                }
              } else(e = r.shallowCopyForMerge(e))[o] = t[o]
            })), e) : t
          }, e.prototype.shallowCopyForMerge = function(e) {
            return (0, k.a)(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : (0, i.C3)({
              __proto__: Object.getPrototypeOf(e)
            }, e), this.pastCopies.add(e))), e
          }, e
        }();

      function P(e) {
        return "incremental" in e
      }

      function F(e) {
        return (0, k.a)(e) && "payload" in e
      }

      function M(e, t) {
        var r = e,
          n = new A;
        return P(t) && (0, D.g)(t.incremental) && t.incremental.forEach((function(e) {
          for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
            var s = i[o],
              a = isNaN(+s) ? {} : [];
            a[s] = t, t = a
          }
          r = n.merge(r, t)
        })), r
      }
      var L = Object.prototype.hasOwnProperty;

      function Q(e) {
        var t = {};
        return e.split("\n").forEach((function(e) {
          var r = e.indexOf(":");
          if (r > -1) {
            var n = e.slice(0, r).trim().toLowerCase(),
              i = e.slice(r + 1).trim();
            t[n] = i
          }
        })), t
      }

      function q(e, t) {
        e.status >= 300 && w(e, function() {
          try {
            return JSON.parse(t)
          } catch (e) {
            return t
          }
        }(), "Response not successful: Received status code ".concat(e.status));
        try {
          return JSON.parse(t)
        } catch (n) {
          var r = n;
          throw r.name = "ServerParseError", r.response = e, r.statusCode = e.status, r.bodyText = t, r
        }
      }

      function j(e, t) {
        var r, n;
        "AbortError" !== e.name && (e.result && e.result.errors && e.result.data && (null === (r = t.next) || void 0 === r || r.call(t, e.result)), null === (n = t.error) || void 0 === n || n.call(t, e))
      }

      function V(e) {
        return function(t) {
          return t.text().then((function(e) {
            return q(t, e)
          })).then((function(r) {
            return t.status >= 300 && w(t, r, "Response not successful: Received status code ".concat(t.status)), Array.isArray(r) || L.call(r, "data") || L.call(r, "errors") || w(t, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map((function(e) {
              return e.operationName
            })) : e.operationName, "'.")), r
          }))
        }
      }
      var U = function(e) {
          if (!e && "undefined" == typeof fetch) throw __DEV__ ? new n.gZ("\n\"fetch\" has not been found globally and no fetcher has been configured. To fix this, install a fetch package (like https://www.npmjs.com/package/cross-fetch), instantiate the fetcher, and pass it into your HttpLink constructor. For example:\n\nimport fetch from 'cross-fetch';\nimport { ApolloClient, HttpLink } from '@apollo/client';\nconst client = new ApolloClient({\n  link: new HttpLink({ uri: '/graphql', fetch })\n});\n    ") : new n.gZ(23)
        },
        z = r(9489),
        B = {
          http: {
            includeQuery: !0,
            includeExtensions: !1,
            preserveHeaderCase: !1
          },
          headers: {
            accept: "*/*",
            "content-type": "application/json"
          },
          options: {
            method: "POST"
          }
        },
        W = function(e, t) {
          return t(e)
        };

      function K(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        return r.unshift(t), G.apply(void 0, (0, i.Mt)([e, W], r, !1))
      }

      function G(e, t) {
        for (var r = [], n = 2; n < arguments.length; n++) r[n - 2] = arguments[n];
        var o = {},
          s = {};
        r.forEach((function(e) {
          o = (0, i.C3)((0, i.C3)((0, i.C3)({}, o), e.options), {
            headers: (0, i.C3)((0, i.C3)({}, o.headers), e.headers)
          }), e.credentials && (o.credentials = e.credentials), s = (0, i.C3)((0, i.C3)({}, s), e.http)
        })), o.headers && (o.headers = function(e, t) {
          if (!t) {
            var r = Object.create(null);
            return Object.keys(Object(e)).forEach((function(t) {
              r[t.toLowerCase()] = e[t]
            })), r
          }
          var n = Object.create(null);
          Object.keys(Object(e)).forEach((function(t) {
            n[t.toLowerCase()] = {
              originalName: t,
              value: e[t]
            }
          }));
          var i = Object.create(null);
          return Object.keys(n).forEach((function(e) {
            i[n[e].originalName] = n[e].value
          })), i
        }(o.headers, s.preserveHeaderCase));
        var a = e.operationName,
          c = e.extensions,
          u = e.variables,
          l = e.query,
          h = {
            operationName: a,
            variables: u
          };
        return s.includeExtensions && (h.extensions = c), s.includeQuery && (h.query = t(l, z.S)), {
          options: o,
          body: h
        }
      }
      var H = function() {
        if ("undefined" == typeof AbortController) return {
          controller: !1,
          signal: !1
        };
        var e = new AbortController;
        return {
          controller: e,
          signal: e.signal
        }
      };

      function Y(e, t) {
        var r = [],
          n = function(e, t) {
            r.push("".concat(e, "=").concat(encodeURIComponent(t)))
          };
        if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
          var i = void 0;
          try {
            i = p(t.variables, "Variables map")
          } catch (e) {
            return {
              parseError: e
            }
          }
          n("variables", i)
        }
        if (t.extensions) {
          var o = void 0;
          try {
            o = p(t.extensions, "Extensions map")
          } catch (e) {
            return {
              parseError: e
            }
          }
          n("extensions", o)
        }
        var s = "",
          a = e,
          c = e.indexOf("#"); - 1 !== c && (s = e.substr(c), a = e.substr(0, c));
        var u = -1 === a.indexOf("?") ? "?" : "&";
        return {
          newURI: a + u + r.join("&") + s
        }
      }

      function J(e) {
        return new h._((function(t) {
          t.error(e)
        }))
      }
      var $ = r(8256),
        X = (0, n.WG)((function() {
          return fetch
        })),
        Z = function(e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            s = e.fetch,
            c = e.print,
            l = void 0 === c ? W : c,
            d = e.includeExtensions,
            v = e.preserveHeaderCase,
            y = e.useGETForQueries,
            m = e.includeUnusedVariables,
            g = void 0 !== m && m,
            b = (0, i.sX)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          __DEV__ && U(s || X);
          var _ = {
            http: {
              includeExtensions: d,
              preserveHeaderCase: v
            },
            options: b.fetchOptions,
            credentials: b.credentials,
            headers: b.headers
          };
          return new o.A((function(e) {
            var t = f(e, r),
              o = e.getContext(),
              c = {};
            if (o.clientAwareness) {
              var d = o.clientAwareness,
                v = d.name,
                m = d.version;
              v && (c["apollographql-client-name"] = v), m && (c["apollographql-client-version"] = m)
            }
            var b, O = (0, i.C3)((0, i.C3)({}, c), o.headers),
              w = {
                http: o.http,
                options: o.fetchOptions,
                credentials: o.credentials,
                headers: O
              },
              k = G(e, l, B, _, w),
              S = k.options,
              N = k.body;
            if (N.variables && !g) {
              var D = new Set(Object.keys(N.variables));
              (0, a.kn)(e.query, {
                Variable: function(e, t, r) {
                  r && "VariableDefinition" !== r.kind && D.delete(e.name.value)
                }
              }), D.size && (N.variables = (0, i.C3)({}, N.variables), D.forEach((function(e) {
                delete N.variables[e]
              })))
            }
            if (!S.signal) {
              var x = H(),
                T = x.controller,
                R = x.signal;
              (b = T) && (S.signal = R)
            }
            var I, A = "OperationDefinition" === (I = (0, $.aG)(e.query)).kind && "subscription" === I.operation,
              P = u(["defer"], e.query);
            if (y && !e.query.definitions.some((function(e) {
                return "OperationDefinition" === e.kind && "mutation" === e.operation
              })) && (S.method = "GET"), P || A) {
              S.headers = S.headers || {};
              var M = "multipart/mixed;";
              A && P && __DEV__ && n.ON.warn("Multipart-subscriptions do not support @defer"), A ? M += "boundary=graphql;subscriptionSpec=1.0,application/json" : P && (M += "deferSpec=20220824,application/json"), S.headers.accept = M
            }
            if ("GET" === S.method) {
              var L = Y(t, N),
                U = L.newURI,
                z = L.parseError;
              if (z) return J(z);
              t = U
            } else try {
              S.body = p(N, "Payload")
            } catch (z) {
              return J(z)
            }
            return new h._((function(r) {
              return (s || (0, n.WG)((function() {
                  return fetch
                })) || X)(t, S).then((function(t) {
                  var n;
                  e.setContext({
                    response: t
                  });
                  var o = null === (n = t.headers) || void 0 === n ? void 0 : n.get("content-type");
                  return null !== o && /^multipart\/mixed/i.test(o) ? function(e, t) {
                    var r, n, o, s, a;
                    return (0, i.kH)(this, void 0, void 0, (function() {
                      var c, u, l, h, p, f, d, v, y, m, g, b, _, O, w, k, S, N, D, x, T, R, I;
                      return (0, i.KE)(this, (function(A) {
                        switch (A.label) {
                          case 0:
                            if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                            c = new TextDecoder("utf-8"), u = null === (r = e.headers) || void 0 === r ? void 0 : r.get("content-type"), l = "boundary=", h = (null == u ? void 0 : u.includes(l)) ? null == u ? void 0 : u.substring((null == u ? void 0 : u.indexOf(l)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", p = "\r\n--".concat(h), f = "", d = E(e), v = !0, A.label = 1;
                          case 1:
                            return v ? [4, d.next()] : [3, 3];
                          case 2:
                            for (y = A.sent(), m = y.value, g = y.done, b = "string" == typeof m ? m : c.decode(m), _ = f.length - p.length + 1, v = !g, O = (f += b).indexOf(p, _); O > -1;) {
                              if (w = void 0, R = [f.slice(0, O), f.slice(O + p.length)], f = R[1], k = (w = R[0]).indexOf("\r\n\r\n"), S = Q(w.slice(0, k)), (N = S["content-type"]) && -1 === N.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                              if (D = w.slice(k)) try {
                                x = q(e, D), Object.keys(x).length > 1 || "data" in x || "incremental" in x || "errors" in x || "payload" in x ? F(x) ? (T = {}, "payload" in x && (T = (0, i.C3)({}, x.payload)), "errors" in x && (T = (0, i.C3)((0, i.C3)({}, T), {
                                  extensions: (0, i.C3)((0, i.C3)({}, "extensions" in T ? T.extensions : null), (I = {}, I[C] = x.errors, I))
                                })), null === (n = t.next) || void 0 === n || n.call(t, T)) : null === (o = t.next) || void 0 === o || o.call(t, x) : 1 === Object.keys(x).length && "hasNext" in x && !x.hasNext && (null === (s = t.complete) || void 0 === s || s.call(t))
                              } catch (e) {
                                j(e, t)
                              }
                              O = f.indexOf(p)
                            }
                            return [3, 1];
                          case 3:
                            return null === (a = t.complete) || void 0 === a || a.call(t), [2]
                        }
                      }))
                    }))
                  }(t, r) : function(e, t, r) {
                    V(t)(e).then((function(e) {
                      var t, n;
                      null === (t = r.next) || void 0 === t || t.call(r, e), null === (n = r.complete) || void 0 === n || n.call(r)
                    })).catch((function(e) {
                      return j(e, r)
                    }))
                  }(t, e, r)
                })).catch((function(e) {
                  return j(e, r)
                })),
                function() {
                  b && b.abort()
                }
            }))
          }))
        },
        ee = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, Z(t).request) || this;
            return r.options = t, r
          }
          return (0, i.ct)(t, e), t
        }(o.A);
      const {
        toString: te,
        hasOwnProperty: re
      } = Object.prototype, ne = Function.prototype.toString, ie = new Map;

      function oe(e, t) {
        try {
          return se(e, t)
        } finally {
          ie.clear()
        }
      }

      function se(e, t) {
        if (e === t) return !0;
        const r = te.call(e);
        if (r !== te.call(t)) return !1;
        switch (r) {
          case "[object Array]":
            if (e.length !== t.length) return !1;
          case "[object Object]": {
            if (le(e, t)) return !0;
            const r = ae(e),
              n = ae(t),
              i = r.length;
            if (i !== n.length) return !1;
            for (let e = 0; e < i; ++e)
              if (!re.call(t, r[e])) return !1;
            for (let n = 0; n < i; ++n) {
              const i = r[n];
              if (!se(e[i], t[i])) return !1
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
            if (le(e, t)) return !0;
            const n = e.entries(),
              i = "[object Map]" === r;
            for (;;) {
              const e = n.next();
              if (e.done) break;
              const [r, o] = e.value;
              if (!t.has(r)) return !1;
              if (i && !se(o, t.get(r))) return !1
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
            const r = ne.call(e);
            return r === ne.call(t) && ! function(e, t) {
              const r = e.length - t.length;
              return r >= 0 && e.indexOf(t, r) === r
            }(r, ue)
          }
        }
        return !1
      }

      function ae(e) {
        return Object.keys(e).filter(ce, e)
      }

      function ce(e) {
        return void 0 !== this[e]
      }
      const ue = "{ [native code] }";

      function le(e, t) {
        let r = ie.get(e);
        if (r) {
          if (r.has(t)) return !0
        } else ie.set(e, r = new Set);
        return r.add(t), !1
      }
      const he = () => Object.create(null),
        {
          forEach: pe,
          slice: fe
        } = Array.prototype,
        {
          hasOwnProperty: de
        } = Object.prototype;
      class ve {
        constructor() {
          let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
            t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : he;
          this.weakness = e, this.makeData = t
        }
        lookup() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return this.lookupArray(t)
        }
        lookupArray(e) {
          let t = this;
          return pe.call(e, (e => t = t.getChildTrie(e))), de.call(t, "data") ? t.data : t.data = this.makeData(fe.call(e))
        }
        peek() {
          for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
          return this.peekArray(t)
        }
        peekArray(e) {
          let t = this;
          for (let r = 0, n = e.length; t && r < n; ++r) {
            const n = this.weakness && ye(e[r]) ? t.weak : t.strong;
            t = n && n.get(e[r])
          }
          return t && t.data
        }
        getChildTrie(e) {
          const t = this.weakness && ye(e) ? this.weak || (this.weak = new WeakMap) : this.strong || (this.strong = new Map);
          let r = t.get(e);
          return r || t.set(e, r = new ve(this.weakness, this.makeData)), r
        }
      }

      function ye(e) {
        switch (typeof e) {
          case "object":
            if (null === e) break;
          case "function":
            return !0
        }
        return !1
      }
      var me, ge, be = function() {
          function e() {
            this.known = new(v ? WeakSet : Set), this.pool = new ve(d), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
          }
          return e.prototype.isKnown = function(e) {
            return (0, k.a)(e) && this.known.has(e)
          }, e.prototype.pass = function(e) {
            if ((0, k.a)(e)) {
              var t = function(e) {
                return (0, k.a)(e) ? (0, D.c)(e) ? e.slice(0) : (0, i.C3)({
                  __proto__: Object.getPrototypeOf(e)
                }, e) : e
              }(e);
              return this.passes.set(t, e), t
            }
            return e
          }, e.prototype.admit = function(e) {
            var t = this;
            if ((0, k.a)(e)) {
              var r = this.passes.get(e);
              if (r) return r;
              switch (Object.getPrototypeOf(e)) {
                case Array.prototype:
                  if (this.known.has(e)) return e;
                  var n = e.map(this.admit, this);
                  return (a = this.pool.lookupArray(n)).array || (this.known.add(a.array = n), __DEV__ && Object.freeze(n)), a.array;
                case null:
                case Object.prototype:
                  if (this.known.has(e)) return e;
                  var i = Object.getPrototypeOf(e),
                    o = [i],
                    s = this.sortedKeys(e);
                  o.push(s.json);
                  var a, c = o.length;
                  if (s.sorted.forEach((function(r) {
                      o.push(t.admit(e[r]))
                    })), !(a = this.pool.lookupArray(o)).object) {
                    var u = a.object = Object.create(i);
                    this.known.add(u), s.sorted.forEach((function(e, t) {
                      u[e] = o[c + t]
                    })), __DEV__ && Object.freeze(u)
                  }
                  return a.object
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
        }(),
        _e = Object.assign((function(e) {
          if ((0, k.a)(e)) {
            void 0 === me && Oe();
            var t = me.admit(e),
              r = ge.get(t);
            return void 0 === r && ge.set(t, r = JSON.stringify(t)), r
          }
          return JSON.stringify(e)
        }), {
          reset: Oe
        });

      function Oe() {
        me = new be, ge = new(d ? WeakMap : Map)
      }

      function Ee(e, t, r) {
        return new h._((function(n) {
          var i = n.next,
            o = n.error,
            s = n.complete,
            a = 0,
            c = !1,
            u = {
              then: function(e) {
                return new Promise((function(t) {
                  return t(e())
                }))
              }
            };

          function l(e, t) {
            return e ? function(t) {
              ++a;
              var r = function() {
                return e(t)
              };
              u = u.then(r, r).then((function(e) {
                --a, i && i.call(n, e), c && h.complete()
              }), (function(e) {
                throw --a, e
              })).catch((function(e) {
                o && o.call(n, e)
              }))
            } : function(e) {
              return t && t.call(n, e)
            }
          }
          var h = {
              next: l(t, i),
              error: l(r, o),
              complete: function() {
                c = !0, a || s && s.call(n)
              }
            },
            p = e.subscribe(h);
          return function() {
            return p.unsubscribe()
          }
        }))
      }

      function we(e) {
        var t = ke(e);
        return (0, D.g)(t)
      }

      function ke(e) {
        var t = (0, D.g)(e.errors) ? e.errors.slice(0) : [];
        return P(e) && (0, D.g)(e.incremental) && e.incremental.forEach((function(e) {
          e.errors && t.push.apply(t, e.errors)
        })), t
      }
      var Ce = r(1428),
        Se = r(9136),
        Ne = r(6374),
        De = {
          kind: Ce.U.FIELD,
          name: {
            kind: Ce.U.NAME,
            value: "__typename"
          }
        };

      function xe(e, t) {
        return !e || e.selectionSet.selections.every((function(e) {
          return e.kind === Ce.U.FRAGMENT_SPREAD && xe(t[e.name.value], t)
        }))
      }

      function Te(e) {
        return xe((0, $.ED)(e) || (0, $.av)(e), (0, Ne.uC)((0, $._A)(e))) ? null : e
      }

      function Re(e) {
        var t = new Map;
        return function(r) {
          void 0 === r && (r = e);
          var n = t.get(r);
          return n || t.set(r, n = {
            variables: new Set,
            fragmentSpreads: new Set
          }), n
        }
      }

      function Ie(e, t) {
        for (var r = Re(""), o = Re(""), s = function(e) {
            for (var t = 0, i = void 0; t < e.length && (i = e[t]); ++t)
              if (!(0, D.c)(i)) {
                if (i.kind === Ce.U.OPERATION_DEFINITION) return r(i.name && i.name.value);
                if (i.kind === Ce.U.FRAGMENT_DEFINITION) return o(i.name.value)
              } return __DEV__ && n.ON.error("Could not find operation or fragment"), null
          }, c = 0, u = t.definitions.length - 1; u >= 0; --u) t.definitions[u].kind === Ce.U.OPERATION_DEFINITION && ++c;
        var l = function(e) {
            var t = new Set,
              r = [];
            return e.forEach((function(e) {
                e.name ? t.add(e.name) : e.test && r.push(e.test)
              })),
              function(e) {
                return t.has(e.name.value) || r.some((function(t) {
                  return t(e)
                }))
              }
          }(e),
          h = e.some((function(e) {
            return e.remove
          })),
          p = function(e) {
            return h && e && e.some(l)
          },
          f = new Map,
          d = !1,
          v = {
            enter: function(e) {
              if (p(e.directives)) return d = !0, null
            }
          },
          y = (0, a.kn)(t, {
            Field: v,
            InlineFragment: v,
            VariableDefinition: {
              enter: function() {
                return !1
              }
            },
            Variable: {
              enter: function(e, t, r, n, i) {
                var o = s(i);
                o && o.variables.add(e.name.value)
              }
            },
            FragmentSpread: {
              enter: function(e, t, r, n, i) {
                if (p(e.directives)) return d = !0, null;
                var o = s(i);
                o && o.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, t, r, n) {
                f.set(JSON.stringify(n), e)
              },
              leave: function(e, t, r, n) {
                return e === f.get(JSON.stringify(n)) ? e : c > 0 && e.selectionSet.selections.every((function(e) {
                  return e.kind === Ce.U.FIELD && "__typename" === e.name.value
                })) ? (o(e.name.value).removed = !0, d = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (l(e)) return d = !0, null
              }
            }
          });
        if (!d) return t;
        var m = function(e) {
            return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach((function(t) {
              m(o(t)).transitiveVars.forEach((function(t) {
                e.transitiveVars.add(t)
              }))
            }))), e
          },
          g = new Set;
        y.definitions.forEach((function(e) {
          e.kind === Ce.U.OPERATION_DEFINITION ? m(r(e.name && e.name.value)).fragmentSpreads.forEach((function(e) {
            g.add(e)
          })) : e.kind !== Ce.U.FRAGMENT_DEFINITION || 0 !== c || o(e.name.value).removed || g.add(e.name.value)
        })), g.forEach((function(e) {
          m(o(e)).fragmentSpreads.forEach((function(e) {
            g.add(e)
          }))
        }));
        var b = {
          enter: function(e) {
            if (t = e.name.value, !g.has(t) || o(t).removed) return null;
            var t
          }
        };
        return Te((0, a.kn)(y, {
          FragmentSpread: b,
          FragmentDefinition: b,
          OperationDefinition: {
            leave: function(e) {
              if (e.variableDefinitions) {
                var t = m(r(e.name && e.name.value)).transitiveVars;
                if (t.size < e.variableDefinitions.length) return (0, i.C3)((0, i.C3)({}, e), {
                  variableDefinitions: e.variableDefinitions.filter((function(e) {
                    return t.has(e.variable.name.value)
                  }))
                })
              }
            }
          }
        }))
      }
      var Ae = Object.assign((function(e) {
          return (0, a.kn)(e, {
            SelectionSet: {
              enter: function(e, t, r) {
                if (!r || r.kind !== Ce.U.OPERATION_DEFINITION) {
                  var n = e.selections;
                  if (n && !n.some((function(e) {
                      return (0, Se.sh)(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                    }))) {
                    var o = r;
                    if (!((0, Se.sh)(o) && o.directives && o.directives.some((function(e) {
                        return "export" === e.name.value
                      })))) return (0, i.C3)((0, i.C3)({}, e), {
                      selections: (0, i.Mt)((0, i.Mt)([], n, !0), [De], !1)
                    })
                  }
                }
              }
            }
          })
        }), {
          added: function(e) {
            return e === De
          }
        }),
        Pe = {
          test: function(e) {
            var t = "connection" === e.name.value;
            return t && (e.arguments && e.arguments.some((function(e) {
              return "key" === e.name.value
            })) || __DEV__ && n.ON.warn("Removing an @connection directive even though it does not have a key. You may want to use the key parameter to specify a store key.")), t
          }
        };

      function Fe(e) {
        return "query" === (0, $.aG)(e).operation ? e : (0, a.kn)(e, {
          OperationDefinition: {
            enter: function(e) {
              return (0, i.C3)((0, i.C3)({}, e), {
                operation: "query"
              })
            }
          }
        })
      }
      var Me = new Map;

      function Le(e) {
        var t = Me.get(e) || 1;
        return Me.set(e, t + 1), "".concat(e, ":").concat(t, ":").concat(Math.random().toString(36).slice(2))
      }

      function Qe(e, t, r) {
        var n = [];
        e.forEach((function(e) {
          return e[t] && n.push(e)
        })), n.forEach((function(e) {
          return e[t](r)
        }))
      }

      function qe(e) {
        function t(t) {
          Object.defineProperty(e, t, {
            value: h._
          })
        }
        return y && Symbol.species && t(Symbol.species), t("@@species"), e
      }

      function je(e) {
        return e && "function" == typeof e.then
      }
      var Ve, Ue = function(e) {
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
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), Qe(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout((function() {
                return t.unsubscribe()
              })), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), Qe(r.observers, "error", e))
            },
            complete: function() {
              var e = r,
                t = e.sub,
                n = e.sources;
              if (null !== t) {
                var i = (void 0 === n ? [] : n).shift();
                i ? je(i) ? i.then((function(e) {
                  return r.sub = e.subscribe(r.handlers)
                })) : r.sub = i.subscribe(r.handlers) : (t && setTimeout((function() {
                  return t.unsubscribe()
                })), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), Qe(r.observers, "complete"))
              }
            }
          }, r.nextResultListeners = new Set, r.cancel = function(e) {
            r.reject(e), r.sources = [], r.handlers.complete()
          }, r.promise.catch((function(e) {})), "function" == typeof t && (t = [new h._(t)]), je(t) ? t.then((function(e) {
            return r.start(e)
          }), r.handlers.error) : r.start(t), r
        }
        return (0, i.ct)(t, e), t.prototype.start = function(e) {
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
      }(h._);

      function ze(e) {
        return !!e && e < 7
      }
      qe(Ue),
        function(e) {
          e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error"
        }(Ve || (Ve = {}));
      var Be = Object.prototype.toString;

      function We(e) {
        return Ke(e)
      }

      function Ke(e, t) {
        switch (Be.call(e)) {
          case "[object Array]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var r = e.slice(0);
            return t.set(e, r), r.forEach((function(e, n) {
              r[n] = Ke(e, t)
            })), r;
          case "[object Object]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var n = Object.create(Object.getPrototypeOf(e));
            return t.set(e, n), Object.keys(e).forEach((function(r) {
              n[r] = Ke(e[r], t)
            })), n;
          default:
            return e
        }
      }
      var Ge = r(6444),
        He = Object.assign,
        Ye = Object.hasOwnProperty,
        Je = function(e) {
          function t(t) {
            var r = t.queryManager,
              n = t.queryInfo,
              o = t.options,
              s = e.call(this, (function(e) {
                try {
                  var t = e._subscription._observer;
                  t && !t.error && (t.error = Xe)
                } catch (e) {}
                var r = !s.observers.size;
                s.observers.add(e);
                var n = s.last;
                return n && n.error ? e.error && e.error(n.error) : n && n.result && e.next && e.next(n.result), r && s.reobserve().catch((function() {})),
                  function() {
                    s.observers.delete(e) && !s.observers.size && s.tearDownQuery()
                  }
              })) || this;
            s.observers = new Set, s.subscriptions = new Set, s.queryInfo = n, s.queryManager = r, s.waitForOwnResult = et(o.fetchPolicy), s.isTornDown = !1;
            var a = r.defaultOptions.watchQuery,
              c = (void 0 === a ? {} : a).fetchPolicy,
              u = void 0 === c ? "cache-first" : c,
              l = o.fetchPolicy,
              h = void 0 === l ? u : l,
              p = o.initialFetchPolicy,
              f = void 0 === p ? "standby" === h ? u : h : p;
            s.options = (0, i.C3)((0, i.C3)({}, o), {
              initialFetchPolicy: f,
              fetchPolicy: h
            }), s.queryId = n.queryId || r.generateQueryId();
            var d = (0, $.ED)(s.query);
            return s.queryName = d && d.name && d.name.value, s
          }
          return (0, i.ct)(t, e), Object.defineProperty(t.prototype, "query", {
            get: function() {
              return this.queryManager.transform(this.options.query).document
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
          }, t.prototype.getCurrentResult = function(e) {
            void 0 === e && (e = !0);
            var t = this.getLastResult(!0),
              r = this.queryInfo.networkStatus || t && t.networkStatus || Ve.ready,
              n = (0, i.C3)((0, i.C3)({}, t), {
                loading: ze(r),
                networkStatus: r
              }),
              o = this.options.fetchPolicy,
              s = void 0 === o ? "cache-first" : o;
            if (et(s) || this.queryManager.transform(this.options.query).hasForcedResolvers);
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var a = this.queryInfo.getDiff();
              (a.complete || this.options.returnPartialData) && (n.data = a.result), oe(n.data, {}) && (n.data = void 0), a.complete ? (delete n.partial, !a.complete || n.networkStatus !== Ve.loading || "cache-first" !== s && "cache-only" !== s || (n.networkStatus = Ve.ready, n.loading = !1)) : n.partial = !0, !__DEV__ || a.complete || this.options.partialRefetch || n.loading || n.data || n.error || Ze(a.missing)
            }
            return e && this.updateLastResult(n), n
          }, t.prototype.isDifferentFromLastResult = function(e, t) {
            return !this.last || !oe(this.last.result, e) || t && !oe(this.last.variables, t)
          }, t.prototype.getLast = function(e, t) {
            var r = this.last;
            if (r && r[e] && (!t || oe(r.variables, this.variables))) return r[e]
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
            if (r.fetchPolicy = "cache-and-network" === o ? o : "no-cache" === o ? "no-cache" : "network-only", __DEV__ && e && Ye.call(e, "variables")) {
              var s = (0, $.QR)(this.query),
                a = s.variableDefinitions;
              a && a.some((function(e) {
                return "variables" === e.variable.name.value
              })) || __DEV__ && n.ON.warn("Called refetch(".concat(JSON.stringify(e), ") for query ").concat((null === (t = s.name) || void 0 === t ? void 0 : t.value) || JSON.stringify(s), ", which does not declare a $variables variable.\nDid you mean to call refetch(variables) instead of refetch({ variables })?"))
            }
            return e && !oe(this.options.variables, e) && (r.variables = this.options.variables = (0, i.C3)((0, i.C3)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(r, Ve.refetch)
          }, t.prototype.fetchMore = function(e) {
            var t = this,
              r = (0, i.C3)((0, i.C3)({}, e.query ? e : (0, i.C3)((0, i.C3)((0, i.C3)((0, i.C3)({}, this.options), {
                query: this.query
              }), e), {
                variables: (0, i.C3)((0, i.C3)({}, this.options.variables), e.variables)
              })), {
                fetchPolicy: "no-cache"
              }),
              n = this.queryManager.generateQueryId(),
              o = this.queryInfo,
              s = o.networkStatus;
            o.networkStatus = Ve.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
            var a = new Set;
            return this.queryManager.fetchQuery(n, r, Ve.fetchMore).then((function(i) {
              return t.queryManager.removeQuery(n), o.networkStatus === Ve.fetchMore && (o.networkStatus = s), t.queryManager.cache.batch({
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
                  a.add(e.query)
                }
              }), i
            })).finally((function() {
              a.has(t.query) || $e(t)
            }))
          }, t.prototype.subscribeToMore = function(e) {
            var t = this,
              r = this.queryManager.startGraphQLSubscription({
                query: e.document,
                variables: e.variables,
                context: e.context
              }).subscribe({
                next: function(r) {
                  var n = e.updateQuery;
                  n && t.updateQuery((function(e, t) {
                    var i = t.variables;
                    return n(e, {
                      subscriptionData: r,
                      variables: i
                    })
                  }))
                },
                error: function(t) {
                  e.onError ? e.onError(t) : __DEV__ && n.ON.error("Unhandled GraphQL subscription error", t)
                }
              });
            return this.subscriptions.add(r),
              function() {
                t.subscriptions.delete(r) && r.unsubscribe()
              }
          }, t.prototype.setOptions = function(e) {
            return this.reobserve(e)
          }, t.prototype.setVariables = function(e) {
            return oe(this.variables, e) ? this.observers.size ? this.result() : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
              fetchPolicy: this.options.initialFetchPolicy,
              variables: e
            }, Ve.setVariables) : Promise.resolve())
          }, t.prototype.updateQuery = function(e) {
            var t = this.queryManager,
              r = e(t.cache.diff({
                query: this.options.query,
                variables: this.variables,
                returnPartialData: !0,
                optimistic: !1
              }).result, {
                variables: this.variables
              });
            r && (t.cache.writeQuery({
              query: this.options.query,
              data: r,
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
          }, t.prototype.fetch = function(e, t) {
            return this.queryManager.setObservableQuery(this), this.queryManager.fetchConcastWithInfo(this.queryId, e, t)
          }, t.prototype.updatePolling = function() {
            var e = this;
            if (!this.queryManager.ssrMode) {
              var t = this.pollingInfo,
                r = this.options.pollInterval;
              if (r) {
                if (!t || t.interval !== r) {
                  __DEV__ ? (0, n.ON)(r, "Attempted to start a polling query without a polling interval.") : (0, n.ON)(r, 13), (t || (this.pollingInfo = {})).interval = r;
                  var i = function() {
                      e.pollingInfo && (ze(e.queryInfo.networkStatus) ? o() : e.reobserve({
                        fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only"
                      }, Ve.poll).then(o, o))
                    },
                    o = function() {
                      var t = e.pollingInfo;
                      t && (clearTimeout(t.timeout), t.timeout = setTimeout(i, t.interval))
                    };
                  o()
                }
              } else t && (clearTimeout(t.timeout), delete this.pollingInfo)
            }
          }, t.prototype.updateLastResult = function(e, t) {
            return void 0 === t && (t = this.variables), this.last = (0, i.C3)((0, i.C3)({}, this.last), {
              result: this.queryManager.assumeImmutableResults ? e : We(e),
              variables: t
            }), (0, D.g)(e.errors) || delete this.last.error, this.last
          }, t.prototype.reobserveAsConcast = function(e, t) {
            var r = this;
            this.isTornDown = !1;
            var n = t === Ve.refetch || t === Ve.fetchMore || t === Ve.poll,
              o = this.options.variables,
              s = this.options.fetchPolicy,
              a = (0, Ge.g)(this.options, e || {}),
              c = n ? a : He(this.options, a);
            n || (this.updatePolling(), e && e.variables && !oe(e.variables, o) && "standby" !== c.fetchPolicy && c.fetchPolicy === s && (this.applyNextFetchPolicy("variables-changed", c), void 0 === t && (t = Ve.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = et(c.fetchPolicy));
            var u = function() {
                r.concast === p && (r.waitForOwnResult = !1)
              },
              l = c.variables && (0, i.C3)({}, c.variables),
              h = this.fetch(c, t),
              p = h.concast,
              f = h.fromLink,
              d = {
                next: function(e) {
                  u(), r.reportResult(e, l)
                },
                error: function(e) {
                  u(), r.reportError(e, l)
                }
              };
            return !n && f && (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = p, this.observer = d), p.addObserver(d), p
          }, t.prototype.reobserve = function(e, t) {
            return this.reobserveAsConcast(e, t).promise
          }, t.prototype.observe = function() {
            this.reportResult(this.getCurrentResult(!1), this.variables)
          }, t.prototype.reportResult = function(e, t) {
            var r = this.getLastError();
            (r || this.isDifferentFromLastResult(e, t)) && ((r || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), Qe(this.observers, "next", e))
          }, t.prototype.reportError = function(e, t) {
            var r = (0, i.C3)((0, i.C3)({}, this.getLastResult()), {
              error: e,
              errors: e.graphQLErrors,
              networkStatus: Ve.error,
              loading: !1
            });
            this.updateLastResult(r, t), Qe(this.observers, "error", this.last.error = e)
          }, t.prototype.hasObservers = function() {
            return this.observers.size > 0
          }, t.prototype.tearDownQuery = function() {
            this.isTornDown || (this.concast && this.observer && (this.concast.removeObserver(this.observer), delete this.concast, delete this.observer), this.stopPolling(), this.subscriptions.forEach((function(e) {
              return e.unsubscribe()
            })), this.subscriptions.clear(), this.queryManager.stopQuery(this.queryId), this.observers.clear(), this.isTornDown = !0)
          }, t
        }(h._);

      function $e(e) {
        var t = e.options,
          r = t.fetchPolicy,
          n = t.nextFetchPolicy;
        return "cache-and-network" === r || "network-only" === r ? e.reobserve({
          fetchPolicy: "cache-first",
          nextFetchPolicy: function() {
            return this.nextFetchPolicy = n, "function" == typeof n ? n.apply(this, arguments) : r
          }
        }) : e.reobserve()
      }

      function Xe(e) {
        __DEV__ && n.ON.error("Unhandled error", e.message, e.stack)
      }

      function Ze(e) {
        __DEV__ && e && __DEV__ && n.ON.debug("Missing cache result fields: ".concat(JSON.stringify(e)), e)
      }

      function et(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }

      function tt(e) {
        return e.kind === Ce.U.FIELD || e.kind === Ce.U.FRAGMENT_SPREAD || e.kind === Ce.U.INLINE_FRAGMENT
      }
      qe(Je);
      var rt = function() {
          return Object.create(null)
        },
        nt = Array.prototype,
        it = nt.forEach,
        ot = nt.slice,
        st = function() {
          function e(e, t) {
            void 0 === e && (e = !0), void 0 === t && (t = rt), this.weakness = e, this.makeData = t
          }
          return e.prototype.lookup = function() {
            for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
            return this.lookupArray(e)
          }, e.prototype.lookupArray = function(e) {
            var t = this;
            return it.call(e, (function(e) {
              return t = t.getChildTrie(e)
            })), t.data || (t.data = this.makeData(ot.call(e)))
          }, e.prototype.getChildTrie = function(t) {
            var r = this.weakness && function(e) {
                switch (typeof e) {
                  case "object":
                    if (null === e) break;
                  case "function":
                    return !0
                }
                return !1
              }(t) ? this.weak || (this.weak = new WeakMap) : this.strong || (this.strong = new Map),
              n = r.get(t);
            return n || r.set(t, n = new e(this.weakness, this.makeData)), n
          }, e
        }();
      let at = null;
      const ct = {};
      let ut = 1;

      function lt(e) {
        try {
          return e()
        } catch (e) {}
      }
      const ht = "@wry/context:Slot",
        pt = lt((() => globalThis)) || lt((() => global)) || Object.create(null),
        ft = pt[ht] || Array[ht] || function(e) {
          try {
            Object.defineProperty(pt, ht, {
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
            this.id = ["slot", ut++, Date.now(), Math.random().toString(36).slice(2)].join(":")
          }
          hasValue() {
            for (let e = at; e; e = e.parent)
              if (this.id in e.slots) {
                const t = e.slots[this.id];
                if (t === ct) break;
                return e !== at && (at.slots[this.id] = t), !0
              } return at && (at.slots[this.id] = ct), !1
          }
          getValue() {
            if (this.hasValue()) return at.slots[this.id]
          }
          withValue(e, t, r, n) {
            const i = {
                __proto__: null,
                [this.id]: e
              },
              o = at;
            at = {
              parent: o,
              slots: i
            };
            try {
              return t.apply(n, r)
            } finally {
              at = o
            }
          }
          static bind(e) {
            const t = at;
            return function() {
              const r = at;
              try {
                return at = t, e.apply(this, arguments)
              } finally {
                at = r
              }
            }
          }
          static noContext(e, t, r) {
            if (!at) return e.apply(r, t); {
              const n = at;
              try {
                return at = null, e.apply(r, t)
              } finally {
                at = n
              }
            }
          }
        }),
        {
          bind: dt,
          noContext: vt
        } = ft;

      function yt() {}
      var mt, gt = function() {
          function e(e, t) {
            void 0 === e && (e = 1 / 0), void 0 === t && (t = yt), this.max = e, this.dispose = t, this.map = new Map, this.newest = null, this.oldest = null
          }
          return e.prototype.has = function(e) {
            return this.map.has(e)
          }, e.prototype.get = function(e) {
            var t = this.getNode(e);
            return t && t.value
          }, e.prototype.getNode = function(e) {
            var t = this.map.get(e);
            if (t && t !== this.newest) {
              var r = t.older,
                n = t.newer;
              n && (n.older = r), r && (r.newer = n), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = n)
            }
            return t
          }, e.prototype.set = function(e, t) {
            var r = this.getNode(e);
            return r ? r.value = t : (r = {
              key: e,
              value: t,
              newer: null,
              older: this.newest
            }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.map.set(e, r), r.value)
          }, e.prototype.clean = function() {
            for (; this.oldest && this.map.size > this.max;) this.delete(this.oldest.key)
          }, e.prototype.delete = function(e) {
            var t = this.map.get(e);
            return !!t && (t === this.newest && (this.newest = t.older), t === this.oldest && (this.oldest = t.newer), t.newer && (t.newer.older = t.older), t.older && (t.older.newer = t.newer), this.map.delete(e), this.dispose(t.value, e), !0)
          }, e
        }(),
        bt = new ft,
        _t = Object.prototype.hasOwnProperty,
        Ot = void 0 === (mt = Array.from) ? function(e) {
          var t = [];
          return e.forEach((function(e) {
            return t.push(e)
          })), t
        } : mt;

      function Et(e) {
        var t = e.unsubscribe;
        "function" == typeof t && (e.unsubscribe = void 0, t())
      }
      var wt = [],
        kt = 100;

      function Ct(e, t) {
        if (!e) throw new Error(t || "assertion failure")
      }

      function St(e) {
        switch (e.length) {
          case 0:
            throw new Error("unknown value");
          case 1:
            return e[0];
          case 2:
            throw e[1]
        }
      }
      var Nt = function() {
        function e(t) {
          this.fn = t, this.parents = new Set, this.childValues = new Map, this.dirtyChildren = null, this.dirty = !0, this.recomputing = !1, this.value = [], this.deps = null, ++e.count
        }
        return e.prototype.peek = function() {
          if (1 === this.value.length && !Tt(this)) return Dt(this), this.value[0]
        }, e.prototype.recompute = function(e) {
          return Ct(!this.recomputing, "already recomputing"), Dt(this), Tt(this) ? function(e, t) {
            return Lt(e), bt.withValue(e, xt, [e, t]),
              function(e, t) {
                if ("function" == typeof e.subscribe) try {
                  Et(e), e.unsubscribe = e.subscribe.apply(null, t)
                } catch (t) {
                  return e.setDirty(), !1
                }
                return !0
              }(e, t) && function(e) {
                e.dirty = !1, Tt(e) || It(e)
              }(e), St(e.value)
          }(this, e) : St(this.value)
        }, e.prototype.setDirty = function() {
          this.dirty || (this.dirty = !0, this.value.length = 0, Rt(this), Et(this))
        }, e.prototype.dispose = function() {
          var e = this;
          this.setDirty(), Lt(this), At(this, (function(t, r) {
            t.setDirty(), Qt(t, e)
          }))
        }, e.prototype.forget = function() {
          this.dispose()
        }, e.prototype.dependOn = function(e) {
          e.add(this), this.deps || (this.deps = wt.pop() || new Set), this.deps.add(e)
        }, e.prototype.forgetDeps = function() {
          var e = this;
          this.deps && (Ot(this.deps).forEach((function(t) {
            return t.delete(e)
          })), this.deps.clear(), wt.push(this.deps), this.deps = null)
        }, e.count = 0, e
      }();

      function Dt(e) {
        var t = bt.getValue();
        if (t) return e.parents.add(t), t.childValues.has(e) || t.childValues.set(e, []), Tt(e) ? Pt(t, e) : Ft(t, e), t
      }

      function xt(e, t) {
        e.recomputing = !0, e.value.length = 0;
        try {
          e.value[0] = e.fn.apply(null, t)
        } catch (t) {
          e.value[1] = t
        }
        e.recomputing = !1
      }

      function Tt(e) {
        return e.dirty || !(!e.dirtyChildren || !e.dirtyChildren.size)
      }

      function Rt(e) {
        At(e, Pt)
      }

      function It(e) {
        At(e, Ft)
      }

      function At(e, t) {
        var r = e.parents.size;
        if (r)
          for (var n = Ot(e.parents), i = 0; i < r; ++i) t(n[i], e)
      }

      function Pt(e, t) {
        Ct(e.childValues.has(t)), Ct(Tt(t));
        var r = !Tt(e);
        if (e.dirtyChildren) {
          if (e.dirtyChildren.has(t)) return
        } else e.dirtyChildren = wt.pop() || new Set;
        e.dirtyChildren.add(t), r && Rt(e)
      }

      function Ft(e, t) {
        Ct(e.childValues.has(t)), Ct(!Tt(t));
        var r, n, i, o = e.childValues.get(t);
        0 === o.length ? e.childValues.set(t, t.value.slice(0)) : (r = o, n = t.value, (i = r.length) > 0 && i === n.length && r[i - 1] === n[i - 1] || e.setDirty()), Mt(e, t), Tt(e) || It(e)
      }

      function Mt(e, t) {
        var r = e.dirtyChildren;
        r && (r.delete(t), 0 === r.size && (wt.length < kt && wt.push(r), e.dirtyChildren = null))
      }

      function Lt(e) {
        e.childValues.size > 0 && e.childValues.forEach((function(t, r) {
          Qt(e, r)
        })), e.forgetDeps(), Ct(null === e.dirtyChildren)
      }

      function Qt(e, t) {
        t.parents.delete(e), e.childValues.delete(t), Mt(e, t)
      }
      var qt = {
        setDirty: !0,
        dispose: !0,
        forget: !0
      };

      function jt(e) {
        var t = new Map,
          r = e && e.subscribe;

        function n(e) {
          var n = bt.getValue();
          if (n) {
            var i = t.get(e);
            i || t.set(e, i = new Set), n.dependOn(i), "function" == typeof r && (Et(i), i.unsubscribe = r(e))
          }
        }
        return n.dirty = function(e, r) {
          var n = t.get(e);
          if (n) {
            var i = r && _t.call(qt, r) ? r : "setDirty";
            Ot(n).forEach((function(e) {
              return e[i]()
            })), t.delete(e), Et(n)
          }
        }, n
      }

      function Vt() {
        var e = new st("function" == typeof WeakMap);
        return function() {
          return e.lookupArray(arguments)
        }
      }
      Vt();
      var Ut = new Set;

      function zt(e, t) {
        void 0 === t && (t = Object.create(null));
        var r = new gt(t.max || Math.pow(2, 16), (function(e) {
            return e.dispose()
          })),
          n = t.keyArgs,
          i = t.makeCacheKey || Vt(),
          o = function() {
            var o = i.apply(null, n ? n.apply(null, arguments) : arguments);
            if (void 0 === o) return e.apply(null, arguments);
            var s = r.get(o);
            s || (r.set(o, s = new Nt(e)), s.subscribe = t.subscribe, s.forget = function() {
              return r.delete(o)
            });
            var a = s.recompute(Array.prototype.slice.call(arguments));
            return r.set(o, s), Ut.add(r), bt.hasValue() || (Ut.forEach((function(e) {
              return e.clean()
            })), Ut.clear()), a
          };

        function s(e) {
          var t = r.get(e);
          t && t.setDirty()
        }

        function a(e) {
          var t = r.get(e);
          if (t) return t.peek()
        }

        function c(e) {
          return r.delete(e)
        }
        return Object.defineProperty(o, "size", {
          get: function() {
            return r.map.size
          },
          configurable: !1,
          enumerable: !1
        }), o.dirtyKey = s, o.dirty = function() {
          s(i.apply(null, arguments))
        }, o.peekKey = a, o.peek = function() {
          return a(i.apply(null, arguments))
        }, o.forgetKey = c, o.forget = function() {
          return c(i.apply(null, arguments))
        }, o.makeCacheKey = i, o.getKey = n ? function() {
          return i.apply(null, n.apply(null, arguments))
        } : i, Object.freeze(o)
      }
      var Bt = new ft,
        Wt = new WeakMap;

      function Kt(e) {
        var t = Wt.get(e);
        return t || Wt.set(e, t = {
          vars: new Set,
          dep: jt()
        }), t
      }

      function Gt(e) {
        Kt(e).vars.forEach((function(t) {
          return t.forgetCache(e)
        }))
      }

      function Ht(e) {
        var t = new Set,
          r = new Set,
          n = function(o) {
            if (arguments.length > 0) {
              if (e !== o) {
                e = o, t.forEach((function(e) {
                  Kt(e).dep.dirty(n),
                    function(e) {
                      e.broadcastWatches && e.broadcastWatches()
                    }(e)
                }));
                var s = Array.from(r);
                r.clear(), s.forEach((function(t) {
                  return t(e)
                }))
              }
            } else {
              var a = Bt.getValue();
              a && (i(a), Kt(a).dep(n))
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
          return t.add(e), Kt(e).vars.add(n), n
        };
        return n.forgetCache = function(e) {
          return t.delete(e)
        }, n
      }
      var Yt = function() {
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
              t.resolvers = T(t.resolvers, e)
            })) : this.resolvers = T(this.resolvers, e)
          }, e.prototype.setResolvers = function(e) {
            this.resolvers = {}, this.addResolvers(e)
          }, e.prototype.getResolvers = function() {
            return this.resolvers || {}
          }, e.prototype.runResolvers = function(e) {
            var t = e.document,
              r = e.remoteResult,
              n = e.context,
              o = e.variables,
              s = e.onlyRunForcedResolvers,
              a = void 0 !== s && s;
            return (0, i.kH)(this, void 0, void 0, (function() {
              return (0, i.KE)(this, (function(e) {
                return t ? [2, this.resolveDocument(t, r.data, n, o, this.fragmentMatcher, a).then((function(e) {
                  return (0, i.C3)((0, i.C3)({}, r), {
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
            return u(["client"], e) && this.resolvers ? e : null
          }, e.prototype.serverQuery = function(e) {
            return function(e) {
              return (0, $.K)(e), Ie([{
                test: function(e) {
                  return "client" === e.name.value
                },
                remove: !0
              }], e)
            }(e)
          }, e.prototype.prepareContext = function(e) {
            var t = this.cache;
            return (0, i.C3)((0, i.C3)({}, e), {
              cache: t,
              getCacheKey: function(e) {
                return t.identify(e)
              }
            })
          }, e.prototype.addExportedVariables = function(e, t, r) {
            return void 0 === t && (t = {}), void 0 === r && (r = {}), (0, i.kH)(this, void 0, void 0, (function() {
              return (0, i.KE)(this, (function(n) {
                return e ? [2, this.resolveDocument(e, this.buildRootValueFromCache(e, t) || {}, this.prepareContext(r), t).then((function(e) {
                  return (0, i.C3)((0, i.C3)({}, t), e.exportedVariables)
                }))] : [2, (0, i.C3)({}, t)]
              }))
            }))
          }, e.prototype.shouldForceResolvers = function(e) {
            var t = !1;
            return (0, a.kn)(e, {
              Directive: {
                enter: function(e) {
                  if ("client" === e.name.value && e.arguments && (t = e.arguments.some((function(e) {
                      return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                    })))) return a.O0
                }
              }
            }), t
          }, e.prototype.buildRootValueFromCache = function(e, t) {
            return this.cache.diff({
              query: Fe(e),
              variables: t,
              returnPartialData: !0,
              optimistic: !1
            }).result
          }, e.prototype.resolveDocument = function(e, t, r, n, o, s) {
            return void 0 === r && (r = {}), void 0 === n && (n = {}), void 0 === o && (o = function() {
              return !0
            }), void 0 === s && (s = !1), (0, i.kH)(this, void 0, void 0, (function() {
              var a, c, u, l, h, p, f, d, v, y;
              return (0, i.KE)(this, (function(m) {
                return a = (0, $.aG)(e), c = (0, $._A)(e), u = (0, Ne.uC)(c), l = this.collectSelectionsToResolve(a, u), h = a.operation, p = h ? h.charAt(0).toUpperCase() + h.slice(1) : "Query", d = (f = this).cache, v = f.client, y = {
                  fragmentMap: u,
                  context: (0, i.C3)((0, i.C3)({}, r), {
                    cache: d,
                    client: v
                  }),
                  variables: n,
                  fragmentMatcher: o,
                  defaultOperationType: p,
                  exportedVariables: {},
                  selectionsToResolve: l,
                  onlyRunForcedResolvers: s
                }, [2, this.resolveSelectionSet(a.selectionSet, !1, t, y).then((function(e) {
                  return {
                    result: e,
                    exportedVariables: y.exportedVariables
                  }
                }))]
              }))
            }))
          }, e.prototype.resolveSelectionSet = function(e, t, r, o) {
            return (0, i.kH)(this, void 0, void 0, (function() {
              var s, a, u, l, h, p = this;
              return (0, i.KE)(this, (function(f) {
                return s = o.fragmentMap, a = o.context, u = o.variables, l = [r], h = function(e) {
                  return (0, i.kH)(p, void 0, void 0, (function() {
                    var h, p;
                    return (0, i.KE)(this, (function(i) {
                      return (t || o.selectionsToResolve.has(e)) && c(e, u) ? (0, Se.sh)(e) ? [2, this.resolveField(e, t, r, o).then((function(t) {
                        var r;
                        void 0 !== t && l.push(((r = {})[(0, Se.ue)(e)] = t, r))
                      }))] : ((0, Se.UD)(e) ? h = e : (h = s[e.name.value], __DEV__ ? (0, n.ON)(h, "No fragment named ".concat(e.name.value)) : (0, n.ON)(h, 11)), h && h.typeCondition && (p = h.typeCondition.name.value, o.fragmentMatcher(r, p, a)) ? [2, this.resolveSelectionSet(h.selectionSet, t, r, o).then((function(e) {
                        l.push(e)
                      }))] : [2]) : [2]
                    }))
                  }))
                }, [2, Promise.all(e.selections.map(h)).then((function() {
                  return R(l)
                }))]
              }))
            }))
          }, e.prototype.resolveField = function(e, t, r, n) {
            return (0, i.kH)(this, void 0, void 0, (function() {
              var o, s, a, c, u, l, h, p, f, d = this;
              return (0, i.KE)(this, (function(i) {
                return r ? (o = n.variables, s = e.name.value, a = (0, Se.ue)(e), c = s !== a, u = r[a] || r[s], l = Promise.resolve(u), n.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (h = r.__typename || n.defaultOperationType, (p = this.resolvers && this.resolvers[h]) && (f = p[c ? s : a]) && (l = Promise.resolve(Bt.withValue(this.cache, f, [r, (0, Se.IL)(e, o), n.context, {
                  field: e,
                  fragmentMap: n.fragmentMap
                }])))), [2, l.then((function(r) {
                  var i, o;
                  if (void 0 === r && (r = u), e.directives && e.directives.forEach((function(e) {
                      "export" === e.name.value && e.arguments && e.arguments.forEach((function(e) {
                        "as" === e.name.value && "StringValue" === e.value.kind && (n.exportedVariables[e.value.value] = r)
                      }))
                    })), !e.selectionSet) return r;
                  if (null == r) return r;
                  var s = null !== (o = null === (i = e.directives) || void 0 === i ? void 0 : i.some((function(e) {
                    return "client" === e.name.value
                  }))) && void 0 !== o && o;
                  return Array.isArray(r) ? d.resolveSubSelectedArray(e, t || s, r, n) : e.selectionSet ? d.resolveSelectionSet(e.selectionSet, t || s, r, n) : void 0
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
              i = this.selectionsToResolveCache;
            return function e(o) {
              if (!i.has(o)) {
                var s = new Set;
                i.set(o, s), (0, a.kn)(o, {
                  Directive: function(e, t, n, i, o) {
                    "client" === e.name.value && o.forEach((function(e) {
                      r(e) && tt(e) && s.add(e)
                    }))
                  },
                  FragmentSpread: function(i, o, a, c, u) {
                    var l = t[i.name.value];
                    __DEV__ ? (0, n.ON)(l, "No fragment named ".concat(i.name.value)) : (0, n.ON)(l, 12);
                    var h = e(l);
                    h.size > 0 && (u.forEach((function(e) {
                      r(e) && tt(e) && s.add(e)
                    })), s.add(i), h.forEach((function(e) {
                      s.add(e)
                    })))
                  }
                })
              }
              return i.get(o)
            }(e)
          }, e
        }(),
        Jt = new(d ? WeakMap : Map);

      function $t(e, t) {
        var r = e[t];
        "function" == typeof r && (e[t] = function() {
          return Jt.set(e, (Jt.get(e) + 1) % 1e15), r.apply(this, arguments)
        })
      }

      function Xt(e) {
        e.notifyTimeout && (clearTimeout(e.notifyTimeout), e.notifyTimeout = void 0)
      }
      var Zt = function() {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.listeners = new Set, this.document = null, this.lastRequestId = 1, this.subscriptions = new Set, this.stopped = !1, this.dirty = !1, this.observableQuery = null;
          var r = this.cache = e.cache;
          Jt.has(r) || (Jt.set(r, 0), $t(r, "evict"), $t(r, "modify"), $t(r, "reset"))
        }
        return e.prototype.init = function(e) {
          var t = e.networkStatus || Ve.loading;
          return this.variables && this.networkStatus !== Ve.loading && !oe(this.variables, e.variables) && (t = Ve.setVariables), oe(e.variables, this.variables) || (this.lastDiff = void 0), Object.assign(this, {
            document: e.document,
            variables: e.variables,
            networkError: null,
            graphQLErrors: this.graphQLErrors || [],
            networkStatus: t
          }), e.observableQuery && this.setObservableQuery(e.observableQuery), e.lastRequestId && (this.lastRequestId = e.lastRequestId), this
        }, e.prototype.reset = function() {
          Xt(this), this.dirty = !1
        }, e.prototype.getDiff = function(e) {
          void 0 === e && (e = this.variables);
          var t = this.getDiffOptions(e);
          if (this.lastDiff && oe(t, this.lastDiff.options)) return this.lastDiff.diff;
          this.updateWatch(this.variables = e);
          var r = this.observableQuery;
          if (r && "no-cache" === r.options.fetchPolicy) return {
            complete: !1
          };
          var n = this.cache.diff(t);
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
          var t = this,
            r = this.lastDiff && this.lastDiff.diff;
          this.updateLastDiff(e), this.dirty || oe(r && r.result, e && e.result) || (this.dirty = !0, this.notifyTimeout || (this.notifyTimeout = setTimeout((function() {
            return t.notify()
          }), 0)))
        }, e.prototype.setObservableQuery = function(e) {
          var t = this;
          e !== this.observableQuery && (this.oqListener && this.listeners.delete(this.oqListener), this.observableQuery = e, e ? (e.queryInfo = this, this.listeners.add(this.oqListener = function() {
            t.getDiff().fromOptimisticTransaction ? e.observe() : $e(e)
          })) : delete this.oqListener)
        }, e.prototype.notify = function() {
          var e = this;
          Xt(this), this.shouldNotify() && this.listeners.forEach((function(t) {
            return t(e)
          })), this.dirty = !1
        }, e.prototype.shouldNotify = function() {
          if (!this.dirty || !this.listeners.size) return !1;
          if (ze(this.networkStatus) && this.observableQuery) {
            var e = this.observableQuery.options.fetchPolicy;
            if ("cache-only" !== e && "cache-and-network" !== e) return !1
          }
          return !0
        }, e.prototype.stop = function() {
          if (!this.stopped) {
            this.stopped = !0, this.reset(), this.cancel(), this.cancel = e.prototype.cancel, this.subscriptions.forEach((function(e) {
              return e.unsubscribe()
            }));
            var t = this.observableQuery;
            t && t.stopPolling()
          }
        }, e.prototype.cancel = function() {}, e.prototype.updateWatch = function(e) {
          var t = this;
          void 0 === e && (e = this.variables);
          var r = this.observableQuery;
          if (!r || "no-cache" !== r.options.fetchPolicy) {
            var n = (0, i.C3)((0, i.C3)({}, this.getDiffOptions(e)), {
              watcher: this,
              callback: function(e) {
                return t.setDiff(e)
              }
            });
            this.lastWatch && oe(n, this.lastWatch) || (this.cancel(), this.cancel = this.cache.watch(this.lastWatch = n))
          }
        }, e.prototype.resetLastWrite = function() {
          this.lastWrite = void 0
        }, e.prototype.shouldWrite = function(e, t) {
          var r = this.lastWrite;
          return !(r && r.dmCount === Jt.get(this.cache) && oe(t, r.variables) && oe(e.data, r.result.data))
        }, e.prototype.markResult = function(e, t, r, n) {
          var i = this,
            o = new A,
            s = (0, D.g)(e.errors) ? e.errors.slice(0) : [];
          if (this.reset(), "incremental" in e && (0, D.g)(e.incremental)) {
            var a = M(this.getDiff().result, e);
            e.data = a
          } else if ("hasNext" in e && e.hasNext) {
            var c = this.getDiff();
            e.data = o.merge(c.result, e.data)
          }
          this.graphQLErrors = s, "no-cache" === r.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
          }, this.getDiffOptions(r.variables)) : 0 !== n && (er(e, r.errorPolicy) ? this.cache.performTransaction((function(o) {
            if (i.shouldWrite(e, r.variables)) o.writeQuery({
              query: t,
              data: e.data,
              variables: r.variables,
              overwrite: 1 === n
            }), i.lastWrite = {
              result: e,
              variables: r.variables,
              dmCount: Jt.get(i.cache)
            };
            else if (i.lastDiff && i.lastDiff.diff.complete) return void(e.data = i.lastDiff.diff.result);
            var s = i.getDiffOptions(r.variables),
              a = o.diff(s);
            i.stopped || i.updateWatch(r.variables), i.updateLastDiff(a, s), a.complete && (e.data = a.result)
          })) : this.lastWrite = void 0)
        }, e.prototype.markReady = function() {
          return this.networkError = null, this.networkStatus = Ve.ready
        }, e.prototype.markError = function(e) {
          return this.networkStatus = Ve.error, this.lastWrite = void 0, this.reset(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function er(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !we(e);
        return !n && r && e.data && (n = !0), n
      }
      var tr = Object.prototype.hasOwnProperty,
        rr = function() {
          function e(e) {
            var t = e.cache,
              r = e.link,
              n = e.defaultOptions,
              i = e.queryDeduplication,
              o = void 0 !== i && i,
              s = e.onBroadcast,
              a = e.ssrMode,
              c = void 0 !== a && a,
              u = e.clientAwareness,
              l = void 0 === u ? {} : u,
              h = e.localState,
              p = e.assumeImmutableResults;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new(d ? WeakMap : Map), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new Map, this.cache = t, this.link = r, this.defaultOptions = n || Object.create(null), this.queryDeduplication = o, this.clientAwareness = l, this.localState = h || new Yt({
              cache: t
            }), this.ssrMode = c, this.assumeImmutableResults = !!p, (this.onBroadcast = s) && (this.mutationStore = Object.create(null))
          }
          return e.prototype.stop = function() {
            var e = this;
            this.queries.forEach((function(t, r) {
              e.stopQueryNoBroadcast(r)
            })), this.cancelPendingFetches(__DEV__ ? new n.gZ("QueryManager stopped while query was in flight") : new n.gZ(14))
          }, e.prototype.cancelPendingFetches = function(e) {
            this.fetchCancelFns.forEach((function(t) {
              return t(e)
            })), this.fetchCancelFns.clear()
          }, e.prototype.mutate = function(e) {
            var t, r, o = e.mutation,
              s = e.variables,
              a = e.optimisticResponse,
              c = e.updateQueries,
              u = e.refetchQueries,
              l = void 0 === u ? [] : u,
              h = e.awaitRefetchQueries,
              p = void 0 !== h && h,
              f = e.update,
              d = e.onQueryUpdated,
              v = e.fetchPolicy,
              y = void 0 === v ? (null === (t = this.defaultOptions.mutate) || void 0 === t ? void 0 : t.fetchPolicy) || "network-only" : v,
              m = e.errorPolicy,
              g = void 0 === m ? (null === (r = this.defaultOptions.mutate) || void 0 === r ? void 0 : r.errorPolicy) || "none" : m,
              b = e.keepRootFields,
              _ = e.context;
            return (0, i.kH)(this, void 0, void 0, (function() {
              var e, t, r, u, h, v;
              return (0, i.KE)(this, (function(m) {
                switch (m.label) {
                  case 0:
                    return __DEV__ ? (0, n.ON)(o, "mutation option is required. You must specify your GraphQL document in the mutation option.") : (0, n.ON)(o, 15), __DEV__ ? (0, n.ON)("network-only" === y || "no-cache" === y, "Mutations support only 'network-only' or 'no-cache' fetchPolicy strings. The default `network-only` behavior automatically writes mutation results to the cache. Passing `no-cache` skips the cache write.") : (0, n.ON)("network-only" === y || "no-cache" === y, 16), e = this.generateMutationId(), t = this.transform(o), r = t.document, u = t.hasClientExports, o = this.cache.transformForLink(r), s = this.getVariables(o, s), u ? [4, this.localState.addExportedVariables(o, s, _)] : [3, 2];
                  case 1:
                    s = m.sent(), m.label = 2;
                  case 2:
                    return h = this.mutationStore && (this.mutationStore[e] = {
                      mutation: o,
                      variables: s,
                      loading: !0,
                      error: null
                    }), a && this.markMutationOptimistic(a, {
                      mutationId: e,
                      document: o,
                      variables: s,
                      fetchPolicy: y,
                      errorPolicy: g,
                      context: _,
                      updateQueries: c,
                      update: f,
                      keepRootFields: b
                    }), this.broadcastQueries(), v = this, [2, new Promise((function(t, r) {
                      return Ee(v.getObservableFromLink(o, (0, i.C3)((0, i.C3)({}, _), {
                        optimisticResponse: a
                      }), s, !1), (function(t) {
                        if (we(t) && "none" === g) throw new N({
                          graphQLErrors: ke(t)
                        });
                        h && (h.loading = !1, h.error = null);
                        var r = (0, i.C3)({}, t);
                        return "function" == typeof l && (l = l(r)), "ignore" === g && we(r) && delete r.errors, v.markMutationResult({
                          mutationId: e,
                          result: r,
                          document: o,
                          variables: s,
                          fetchPolicy: y,
                          errorPolicy: g,
                          context: _,
                          update: f,
                          updateQueries: c,
                          awaitRefetchQueries: p,
                          refetchQueries: l,
                          removeOptimistic: a ? e : void 0,
                          onQueryUpdated: d,
                          keepRootFields: b
                        })
                      })).subscribe({
                        next: function(e) {
                          v.broadcastQueries(), "hasNext" in e && !1 !== e.hasNext || t(e)
                        },
                        error: function(t) {
                          h && (h.loading = !1, h.error = t), a && v.cache.removeOptimistic(e), v.broadcastQueries(), r(t instanceof N ? t : new N({
                            networkError: t
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
            var n = e.result,
              o = [],
              s = "no-cache" === e.fetchPolicy;
            if (!s && er(n, e.errorPolicy)) {
              if (P(n) || o.push({
                  result: n.data,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }), P(n) && (0, D.g)(n.incremental)) {
                var a = t.diff({
                    id: "ROOT_MUTATION",
                    query: this.transform(e.document).asQuery,
                    variables: e.variables,
                    optimistic: !1,
                    returnPartialData: !0
                  }),
                  c = void 0;
                a.result && (c = M(a.result, n)), void 0 !== c && (n.data = c, o.push({
                  result: c,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }))
              }
              var u = e.updateQueries;
              u && this.queries.forEach((function(e, i) {
                var s = e.observableQuery,
                  a = s && s.queryName;
                if (a && tr.call(u, a)) {
                  var c = u[a],
                    l = r.queries.get(i),
                    h = l.document,
                    p = l.variables,
                    f = t.diff({
                      query: h,
                      variables: p,
                      returnPartialData: !0,
                      optimistic: !1
                    }),
                    d = f.result;
                  if (f.complete && d) {
                    var v = c(d, {
                      mutationResult: n,
                      queryName: h && (0, $.W4)(h) || void 0,
                      queryVariables: p
                    });
                    v && o.push({
                      result: v,
                      dataId: "ROOT_QUERY",
                      query: h,
                      variables: p
                    })
                  }
                }
              }))
            }
            if (o.length > 0 || e.refetchQueries || e.update || e.onQueryUpdated || e.removeOptimistic) {
              var l = [];
              if (this.refetchQueries({
                  updateCache: function(t) {
                    s || o.forEach((function(e) {
                      return t.write(e)
                    }));
                    var a, c = e.update,
                      u = !(P(a = n) || function(e) {
                        return "hasNext" in e && "data" in e
                      }(a)) || P(n) && !n.hasNext;
                    if (c) {
                      if (!s) {
                        var l = t.diff({
                          id: "ROOT_MUTATION",
                          query: r.transform(e.document).asQuery,
                          variables: e.variables,
                          optimistic: !1,
                          returnPartialData: !0
                        });
                        l.complete && ("incremental" in (n = (0, i.C3)((0, i.C3)({}, n), {
                          data: l.result
                        })) && delete n.incremental, "hasNext" in n && delete n.hasNext)
                      }
                      u && c(t, n, {
                        context: e.context,
                        variables: e.variables
                      })
                    }
                    s || e.keepRootFields || !u || t.modify({
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
                return n
              }))
            }
            return Promise.resolve(n)
          }, e.prototype.markMutationOptimistic = function(e, t) {
            var r = this,
              o = "function" == typeof e ? e(t.variables) : e;
            return this.cache.recordOptimisticTransaction((function(e) {
              try {
                r.markMutationResult((0, i.C3)((0, i.C3)({}, t), {
                  result: {
                    data: o
                  }
                }), e)
              } catch (e) {
                __DEV__ && n.ON.error(e)
              }
            }), t.mutationId)
          }, e.prototype.fetchQuery = function(e, t, r) {
            return this.fetchQueryObservable(e, t, r).promise
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
            var t, r = this.transformCache;
            if (!r.has(e)) {
              var n = this.cache.transformDocument(e),
                o = (t = n, Ie([Pe], (0, $.K)(t))),
                s = this.localState.clientQuery(n),
                a = o && this.localState.serverQuery(o),
                c = {
                  document: n,
                  hasClientExports: l(n),
                  hasForcedResolvers: this.localState.shouldForceResolvers(n),
                  clientQuery: s,
                  serverQuery: a,
                  defaultVars: (0, $._W)((0, $.ED)(n)),
                  asQuery: (0, i.C3)((0, i.C3)({}, n), {
                    definitions: n.definitions.map((function(e) {
                      return "OperationDefinition" === e.kind && "query" !== e.operation ? (0, i.C3)((0, i.C3)({}, e), {
                        operation: "query"
                      }) : e
                    }))
                  })
                },
                u = function(e) {
                  e && !r.has(e) && r.set(e, c)
                };
              u(e), u(n), u(s), u(a)
            }
            return r.get(e)
          }, e.prototype.getVariables = function(e, t) {
            return (0, i.C3)((0, i.C3)({}, this.transform(e).defaultVars), t)
          }, e.prototype.watchQuery = function(e) {
            void 0 === (e = (0, i.C3)((0, i.C3)({}, e), {
              variables: this.getVariables(e.query, e.variables)
            })).notifyOnNetworkStatusChange && (e.notifyOnNetworkStatusChange = !1);
            var t = new Zt(this),
              r = new Je({
                queryManager: this,
                queryInfo: t,
                options: e
              });
            return this.queries.set(r.queryId, t), t.init({
              document: r.query,
              observableQuery: r,
              variables: r.variables
            }), r
          }, e.prototype.query = function(e, t) {
            var r = this;
            return void 0 === t && (t = this.generateQueryId()), __DEV__ ? (0, n.ON)(e.query, "query option is required. You must specify your GraphQL document in the query option.") : (0, n.ON)(e.query, 17), __DEV__ ? (0, n.ON)("Document" === e.query.kind, 'You must wrap the query string in a "gql" tag.') : (0, n.ON)("Document" === e.query.kind, 18), __DEV__ ? (0, n.ON)(!e.returnPartialData, "returnPartialData option only supported on watchQuery.") : (0, n.ON)(!e.returnPartialData, 19), __DEV__ ? (0, n.ON)(!e.pollInterval, "pollInterval option only supported on watchQuery.") : (0, n.ON)(!e.pollInterval, 20), this.fetchQuery(t, e).finally((function() {
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
            }), this.cancelPendingFetches(__DEV__ ? new n.gZ("Store reset while query was in flight (not completed in link chain)") : new n.gZ(21)), this.queries.forEach((function(e) {
              e.observableQuery ? e.networkStatus = Ve.loading : e.stop()
            })), this.mutationStore && (this.mutationStore = Object.create(null)), this.cache.reset(e)
          }, e.prototype.getObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = "active");
            var r = new Map,
              o = new Map,
              s = new Set;
            return Array.isArray(e) && e.forEach((function(e) {
              "string" == typeof e ? o.set(e, !1) : (0, Se.kv)(e) ? o.set(t.transform(e).document, !1) : (0, k.a)(e) && e.query && s.add(e)
            })), this.queries.forEach((function(t, n) {
              var i = t.observableQuery,
                s = t.document;
              if (i) {
                if ("all" === e) return void r.set(n, i);
                var a = i.queryName;
                if ("standby" === i.options.fetchPolicy || "active" === e && !i.hasObservers()) return;
                ("active" === e || a && o.has(a) || s && o.has(s)) && (r.set(n, i), a && o.set(a, !0), s && o.set(s, !0))
              }
            })), s.size && s.forEach((function(e) {
              var o = Le("legacyOneTimeQuery"),
                s = t.getQuery(o).init({
                  document: e.query,
                  variables: e.variables
                }),
                a = new Je({
                  queryManager: t,
                  queryInfo: s,
                  options: (0, i.C3)((0, i.C3)({}, e), {
                    fetchPolicy: "network-only"
                  })
                });
              (0, n.ON)(a.queryId === o), s.setObservableQuery(a), r.set(o, a)
            })), __DEV__ && o.size && o.forEach((function(e, t) {
              e || __DEV__ && n.ON.warn("Unknown query ".concat("string" == typeof t ? "named " : "").concat(JSON.stringify(t, null, 2), " requested in refetchQueries options.include array"))
            })), r
          }, e.prototype.reFetchObservableQueries = function(e) {
            var t = this;
            void 0 === e && (e = !1);
            var r = [];
            return this.getObservableQueries(e ? "all" : "active").forEach((function(n, i) {
              var o = n.options.fetchPolicy;
              n.resetLastResults(), (e || "standby" !== o && "cache-only" !== o) && r.push(n.refetch()), t.getQuery(i).setDiff(null)
            })), this.broadcastQueries(), Promise.all(r)
          }, e.prototype.setObservableQuery = function(e) {
            this.getQuery(e.queryId).setObservableQuery(e)
          }, e.prototype.startGraphQLSubscription = function(e) {
            var t = this,
              r = e.query,
              n = e.fetchPolicy,
              i = e.errorPolicy,
              o = e.variables,
              s = e.context,
              a = void 0 === s ? {} : s;
            r = this.transform(r).document, o = this.getVariables(r, o);
            var c = function(e) {
              return t.getObservableFromLink(r, a, e).map((function(o) {
                "no-cache" !== n && (er(o, i) && t.cache.write({
                  query: r,
                  result: o.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: e
                }), t.broadcastQueries());
                var s = we(o),
                  a = function(e) {
                    return !!e.extensions && Array.isArray(e.extensions[C])
                  }(o);
                if (s || a) {
                  var c = {};
                  throw s && (c.graphQLErrors = o.errors), a && (c.protocolErrors = o.extensions[C]), new N(c)
                }
                return o
              }))
            };
            if (this.transform(r).hasClientExports) {
              var u = this.localState.addExportedVariables(r, o, a).then(c);
              return new h._((function(e) {
                var t = null;
                return u.then((function(r) {
                    return t = r.subscribe(e)
                  }), e.error),
                  function() {
                    return t && t.unsubscribe()
                  }
              }))
            }
            return c(o)
          }, e.prototype.stopQuery = function(e) {
            this.stopQueryNoBroadcast(e), this.broadcastQueries()
          }, e.prototype.stopQueryNoBroadcast = function(e) {
            this.stopQueryInStoreNoBroadcast(e), this.removeQuery(e)
          }, e.prototype.removeQuery = function(e) {
            this.fetchCancelFns.delete(e), this.queries.has(e) && (this.getQuery(e).stop(), this.queries.delete(e))
          }, e.prototype.broadcastQueries = function() {
            this.onBroadcast && this.onBroadcast(), this.queries.forEach((function(e) {
              return e.notify()
            }))
          }, e.prototype.getLocalState = function() {
            return this.localState
          }, e.prototype.getObservableFromLink = function(e, t, r, n) {
            var o, a, c = this;
            void 0 === n && (n = null !== (o = null == t ? void 0 : t.queryDeduplication) && void 0 !== o ? o : this.queryDeduplication);
            var u = this.transform(e).serverQuery;
            if (u) {
              var l = this.inFlightLinkObservables,
                p = this.link,
                f = {
                  query: u,
                  variables: r,
                  operationName: (0, $.W4)(u) || void 0,
                  context: this.prepareContext((0, i.C3)((0, i.C3)({}, t), {
                    forceFetch: !n
                  }))
                };
              if (t = f.context, n) {
                var d = l.get(u) || new Map;
                l.set(u, d);
                var v = _e(r);
                if (!(a = d.get(v))) {
                  var y = new Ue([s(p, f)]);
                  d.set(v, a = y), y.beforeNext((function() {
                    d.delete(v) && d.size < 1 && l.delete(u)
                  }))
                }
              } else a = new Ue([s(p, f)])
            } else a = new Ue([h._.of({
              data: {}
            })]), t = this.prepareContext(t);
            var m = this.transform(e).clientQuery;
            return m && (a = Ee(a, (function(e) {
              return c.localState.runResolvers({
                document: m,
                remoteResult: e,
                context: t,
                variables: r
              })
            }))), a
          }, e.prototype.getResultsFromLink = function(e, t, r) {
            var n = e.lastRequestId = this.generateRequestId(),
              i = this.cache.transformForLink(this.transform(e.document).document);
            return Ee(this.getObservableFromLink(i, r.context, r.variables), (function(o) {
              var s = ke(o),
                a = s.length > 0;
              if (n >= e.lastRequestId) {
                if (a && "none" === r.errorPolicy) throw e.markError(new N({
                  graphQLErrors: s
                }));
                e.markResult(o, i, r, t), e.markReady()
              }
              var c = {
                data: o.data,
                loading: !1,
                networkStatus: Ve.ready
              };
              return a && "ignore" !== r.errorPolicy && (c.errors = s, c.networkStatus = Ve.error), c
            }), (function(t) {
              var r = S(t) ? t : new N({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            }))
          }, e.prototype.fetchQueryObservable = function(e, t, r) {
            return this.fetchConcastWithInfo(e, t, r).concast
          }, e.prototype.fetchConcastWithInfo = function(e, t, r) {
            var n = this;
            void 0 === r && (r = Ve.loading);
            var i, o, s = this.transform(t.query).document,
              a = this.getVariables(s, t.variables),
              c = this.getQuery(e),
              u = this.defaultOptions.watchQuery,
              l = t.fetchPolicy,
              h = void 0 === l ? u && u.fetchPolicy || "cache-first" : l,
              p = t.errorPolicy,
              f = void 0 === p ? u && u.errorPolicy || "none" : p,
              d = t.returnPartialData,
              v = void 0 !== d && d,
              y = t.notifyOnNetworkStatusChange,
              m = void 0 !== y && y,
              g = t.context,
              b = void 0 === g ? {} : g,
              _ = Object.assign({}, t, {
                query: s,
                variables: a,
                fetchPolicy: h,
                errorPolicy: f,
                returnPartialData: v,
                notifyOnNetworkStatusChange: m,
                context: b
              }),
              O = function(e) {
                _.variables = e;
                var i = n.fetchQueryByPolicy(c, _, r);
                return "standby" !== _.fetchPolicy && i.sources.length > 0 && c.observableQuery && c.observableQuery.applyNextFetchPolicy("after-fetch", t), i
              },
              E = function() {
                return n.fetchCancelFns.delete(e)
              };
            if (this.fetchCancelFns.set(e, (function(e) {
                E(), setTimeout((function() {
                  return i.cancel(e)
                }))
              })), this.transform(_.query).hasClientExports) i = new Ue(this.localState.addExportedVariables(_.query, _.variables, _.context).then(O).then((function(e) {
              return e.sources
            }))), o = !0;
            else {
              var w = O(_.variables);
              o = w.fromLink, i = new Ue(w.sources)
            }
            return i.promise.then(E, E), {
              concast: i,
              fromLink: o
            }
          }, e.prototype.refetchQueries = function(e) {
            var t = this,
              r = e.updateCache,
              n = e.include,
              i = e.optimistic,
              o = void 0 !== i && i,
              s = e.removeOptimistic,
              a = void 0 === s ? o ? Le("refetchQueries") : void 0 : s,
              c = e.onQueryUpdated,
              u = new Map;
            n && this.getObservableQueries(n).forEach((function(e, r) {
              u.set(r, {
                oq: e,
                lastDiff: t.getQuery(r).getDiff()
              })
            }));
            var l = new Map;
            return r && this.cache.batch({
              update: r,
              optimistic: o && a || !1,
              removeOptimistic: a,
              onWatchUpdated: function(e, t, r) {
                var n = e.watcher instanceof Zt && e.watcher.observableQuery;
                if (n) {
                  if (c) {
                    u.delete(n.queryId);
                    var i = c(n, t, r);
                    return !0 === i && (i = n.refetch()), !1 !== i && l.set(n, i), i
                  }
                  null !== c && u.set(n.queryId, {
                    oq: n,
                    lastDiff: r,
                    diff: t
                  })
                }
              }
            }), u.size && u.forEach((function(e, r) {
              var n, i = e.oq,
                o = e.lastDiff,
                s = e.diff;
              if (c) {
                if (!s) {
                  var a = i.queryInfo;
                  a.reset(), s = a.getDiff()
                }
                n = c(i, s, o)
              }
              c && !0 !== n || (n = i.refetch()), !1 !== n && l.set(i, n), r.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(r)
            })), a && this.cache.removeOptimistic(a), l
          }, e.prototype.fetchQueryByPolicy = function(e, t, r) {
            var n = this,
              o = t.query,
              s = t.variables,
              a = t.fetchPolicy,
              c = t.refetchWritePolicy,
              u = t.errorPolicy,
              l = t.returnPartialData,
              p = t.context,
              f = t.notifyOnNetworkStatusChange,
              d = e.networkStatus;
            e.init({
              document: this.transform(o).document,
              variables: s,
              networkStatus: r
            });
            var v = function() {
                return e.getDiff(s)
              },
              y = function(t, r) {
                void 0 === r && (r = e.networkStatus || Ve.loading);
                var a = t.result;
                !__DEV__ || l || oe(a, {}) || Ze(t.missing);
                var c = function(e) {
                  return h._.of((0, i.C3)({
                    data: e,
                    loading: ze(r),
                    networkStatus: r
                  }, t.complete ? null : {
                    partial: !0
                  }))
                };
                return a && n.transform(o).hasForcedResolvers ? n.localState.runResolvers({
                  document: o,
                  remoteResult: {
                    data: a
                  },
                  context: p,
                  variables: s,
                  onlyRunForcedResolvers: !0
                }).then((function(e) {
                  return c(e.data || void 0)
                })) : "none" === u && r === Ve.refetch && Array.isArray(t.missing) ? c(void 0) : c(a)
              },
              m = "no-cache" === a ? 0 : r === Ve.refetch && "merge" !== c ? 1 : 2,
              g = function() {
                return n.getResultsFromLink(e, m, {
                  variables: s,
                  context: p,
                  fetchPolicy: a,
                  errorPolicy: u
                })
              },
              b = f && "number" == typeof d && d !== r && ze(r);
            switch (a) {
              default:
              case "cache-first":
                return (_ = v()).complete ? {
                  fromLink: !1,
                  sources: [y(_, e.markReady())]
                } : l || b ? {
                  fromLink: !0,
                  sources: [y(_), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "cache-and-network":
                var _;
                return (_ = v()).complete || l || b ? {
                  fromLink: !0,
                  sources: [y(_), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "cache-only":
                return {
                  fromLink: !1, sources: [y(v(), e.markReady())]
                };
              case "network-only":
                return b ? {
                  fromLink: !0,
                  sources: [y(v()), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "no-cache":
                return b ? {
                  fromLink: !0,
                  sources: [y(e.getDiff()), g()]
                } : {
                  fromLink: !0,
                  sources: [g()]
                };
              case "standby":
                return {
                  fromLink: !1, sources: []
                }
            }
          }, e.prototype.getQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new Zt(this, e)), this.queries.get(e)
          }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return (0, i.C3)((0, i.C3)({}, t), {
              clientAwareness: this.clientAwareness
            })
          }, e
        }();

      function nr(e, t) {
        return (0, Ge.g)(e, t, t.variables && {
          variables: (0, i.C3)((0, i.C3)({}, e && e.variables), t.variables)
        })
      }
      var ir, or = !1,
        sr = function() {
          function e(e) {
            var t = this;
            this.resetStoreCallbacks = [], this.clearStoreCallbacks = [];
            var r = e.uri,
              i = e.credentials,
              s = e.headers,
              a = e.cache,
              c = e.ssrMode,
              u = void 0 !== c && c,
              l = e.ssrForceFetchDelay,
              h = void 0 === l ? 0 : l,
              p = e.connectToDevTools,
              f = void 0 === p ? "object" == typeof window && !window.__APOLLO_CLIENT__ && __DEV__ : p,
              d = e.queryDeduplication,
              v = void 0 === d || d,
              y = e.defaultOptions,
              m = e.assumeImmutableResults,
              g = void 0 !== m && m,
              b = e.resolvers,
              _ = e.typeDefs,
              O = e.fragmentMatcher,
              E = e.name,
              w = e.version,
              k = e.link;
            if (k || (k = r ? new ee({
                uri: r,
                credentials: i,
                headers: s
              }) : o.A.empty()), !a) throw __DEV__ ? new n.gZ("To initialize Apollo Client, you must specify a 'cache' property in the options object. \nFor more information, please visit: https://go.apollo.dev/c/docs") : new n.gZ(9);
            if (this.link = k, this.cache = a, this.disableNetworkFetches = u || h > 0, this.queryDeduplication = v, this.defaultOptions = y || Object.create(null), this.typeDefs = _, h && setTimeout((function() {
                return t.disableNetworkFetches = !1
              }), h), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), f && "object" == typeof window && (window.__APOLLO_CLIENT__ = this), !or && f && __DEV__ && (or = !0, "undefined" != typeof window && window.document && window.top === window.self && !window.__APOLLO_DEVTOOLS_GLOBAL_HOOK__)) {
              var C = window.navigator,
                S = C && C.userAgent,
                N = void 0;
              "string" == typeof S && (S.indexOf("Chrome/") > -1 ? N = "https://chrome.google.com/webstore/detail/apollo-client-developer-t/jdkknkkbebbapilgoeccciglkfbmbnfm" : S.indexOf("Firefox/") > -1 && (N = "https://addons.mozilla.org/en-US/firefox/addon/apollo-developer-tools/")), N && __DEV__ && n.ON.log("Download the Apollo DevTools for a better development experience: " + N)
            }
            this.version = "3.7.17", this.localState = new Yt({
              cache: a,
              client: this,
              resolvers: b,
              fragmentMatcher: O
            }), this.queryManager = new rr({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              queryDeduplication: v,
              ssrMode: u,
              clientAwareness: {
                name: E,
                version: w
              },
              localState: this.localState,
              assumeImmutableResults: g,
              onBroadcast: f ? function() {
                t.devToolsHookCb && t.devToolsHookCb({
                  action: {},
                  state: {
                    queries: t.queryManager.getQueryStore(),
                    mutations: t.queryManager.mutationStore || {}
                  },
                  dataWithOptimisticResults: t.cache.extract(!0)
                })
              } : void 0
            })
          }
          return e.prototype.stop = function() {
            this.queryManager.stop()
          }, e.prototype.watchQuery = function(e) {
            return this.defaultOptions.watchQuery && (e = nr(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = (0, i.C3)((0, i.C3)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.watchQuery(e)
          }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = nr(this.defaultOptions.query, e)), __DEV__ ? (0, n.ON)("cache-and-network" !== e.fetchPolicy, "The cache-and-network fetchPolicy does not work with client.query, because client.query can only return a single result. Please use client.watchQuery to receive multiple results from the cache and the network, or consider using a different fetchPolicy, such as cache-first or network-only.") : (0, n.ON)("cache-and-network" !== e.fetchPolicy, 10), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, i.C3)((0, i.C3)({}, e), {
              fetchPolicy: "cache-first"
            })), this.queryManager.query(e)
          }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = nr(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
          }, e.prototype.subscribe = function(e) {
            return this.queryManager.startGraphQLSubscription(e)
          }, e.prototype.readQuery = function(e, t) {
            return void 0 === t && (t = !1), this.cache.readQuery(e, t)
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
            return s(this.link, e)
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
              i = [];
            t.forEach((function(e, t) {
              r.push(t), i.push(e)
            }));
            var o = Promise.all(i);
            return o.queries = r, o.results = i, o.catch((function(e) {
              __DEV__ && n.ON.debug("In client.refetchQueries, Promise.all promise rejected with error ".concat(e))
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
          }, e
        }();
      ir || (ir = {});
      var ar = function() {
          function e() {
            this.getFragmentDoc = zt(Ne.S)
          }
          return e.prototype.batch = function(e) {
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
            return void 0 === t && (t = !!e.optimistic), this.read((0, i.C3)((0, i.C3)({}, e), {
              rootId: e.id || "ROOT_QUERY",
              optimistic: t
            }))
          }, e.prototype.readFragment = function(e, t) {
            return void 0 === t && (t = !!e.optimistic), this.read((0, i.C3)((0, i.C3)({}, e), {
              query: this.getFragmentDoc(e.fragment, e.fragmentName),
              rootId: e.id,
              optimistic: t
            }))
          }, e.prototype.writeQuery = function(e) {
            var t = e.id,
              r = e.data,
              n = (0, i.sX)(e, ["id", "data"]);
            return this.write(Object.assign(n, {
              dataId: t || "ROOT_QUERY",
              result: r
            }))
          }, e.prototype.writeFragment = function(e) {
            var t = e.id,
              r = e.data,
              n = e.fragment,
              o = e.fragmentName,
              s = (0, i.sX)(e, ["id", "data", "fragment", "fragmentName"]);
            return this.write(Object.assign(s, {
              query: this.getFragmentDoc(n, o),
              dataId: t,
              result: r
            }))
          }, e.prototype.updateQuery = function(e, t) {
            return this.batch({
              update: function(r) {
                var n = r.readQuery(e),
                  o = t(n);
                return null == o ? n : (r.writeQuery((0, i.C3)((0, i.C3)({}, e), {
                  data: o
                })), o)
              }
            })
          }, e.prototype.updateFragment = function(e, t) {
            return this.batch({
              update: function(r) {
                var n = r.readFragment(e),
                  o = t(n);
                return null == o ? n : (r.writeFragment((0, i.C3)((0, i.C3)({}, e), {
                  data: o
                })), o)
              }
            })
          }, e
        }(),
        cr = function(e) {
          function t(r, n, i, o) {
            var s, a = e.call(this, r) || this;
            if (a.message = r, a.path = n, a.query = i, a.variables = o, Array.isArray(a.path)) {
              a.missing = a.message;
              for (var c = a.path.length - 1; c >= 0; --c) a.missing = ((s = {})[a.path[c]] = a.missing, s)
            } else a.missing = a.path;
            return a.__proto__ = t.prototype, a
          }
          return (0, i.ct)(t, e), t
        }(Error);

      function ur(e) {
        return __DEV__ && (t = e, (r = new Set([t])).forEach((function(e) {
          (0, k.a)(e) && function(e) {
            if (__DEV__ && !Object.isFrozen(e)) try {
              Object.freeze(e)
            } catch (e) {
              if (e instanceof TypeError) return null;
              throw e
            }
            return e
          }(e) === e && Object.getOwnPropertyNames(e).forEach((function(t) {
            (0, k.a)(e[t]) && r.add(e[t])
          }))
        }))), e;
        var t, r
      }
      var lr = Object.prototype.hasOwnProperty;

      function hr(e) {
        return null == e
      }

      function pr(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ("string" == typeof r && (t && (t.keyObject = hr(n) ? hr(i) ? void 0 : {
            _id: i
          } : {
            id: n
          }), hr(n) && !hr(i) && (n = i), !hr(n))) return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      }
      var fr = {
        dataIdFromObject: pr,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1
      };

      function dr(e) {
        var t = e.canonizeResults;
        return void 0 === t ? fr.canonizeResults : t
      }
      var vr = /^[_a-z][_0-9a-z]*/i;

      function yr(e) {
        var t = e.match(vr);
        return t ? t[0] : e
      }

      function mr(e, t, r) {
        return !!(0, k.a)(t) && ((0, D.c)(t) ? t.every((function(t) {
          return mr(e, t, r)
        })) : e.selections.every((function(e) {
          if ((0, Se.sh)(e) && c(e, r)) {
            var n = (0, Se.ue)(e);
            return lr.call(t, n) && (!e.selectionSet || mr(e.selectionSet, t[n], r))
          }
          return !0
        })))
      }

      function gr(e) {
        return (0, k.a)(e) && !(0, Se.Ez)(e) && !(0, D.c)(e)
      }

      function br(e, t) {
        var r = (0, Ne.uC)((0, $._A)(e));
        return {
          fragmentMap: r,
          lookupFragment: function(e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null
          }
        }
      }
      var _r = Object.create(null),
        Or = function() {
          return _r
        },
        Er = Object.create(null),
        wr = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return ur((0, Se.Ez)(e) ? r.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
              return (0, Se.Ez)(e) ? r.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
              if ("string" == typeof e) return (0, Se.Yz)(e);
              if ((0, Se.Ez)(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = (0, Se.Yz)(n);
                return t && r.merge(n, e), i
              }
            }
          }
          return e.prototype.toObject = function() {
            return (0, i.C3)({}, this.data)
          }, e.prototype.has = function(e) {
            return void 0 !== this.lookup(e, !0)
          }, e.prototype.get = function(e, t) {
            if (this.group.depend(e, t), lr.call(this.data, e)) {
              var r = this.data[e];
              if (r && lr.call(r, t)) return r[t]
            }
            return "__typename" === t && lr.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof Nr ? this.parent.get(e, t) : void 0
          }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), lr.call(this.data, e) ? this.data[e] : this instanceof Nr ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
          }, e.prototype.merge = function(e, t) {
            var r, i = this;
            (0, Se.Ez)(e) && (e = e.__ref), (0, Se.Ez)(t) && (t = t.__ref);
            var o = "string" == typeof e ? this.lookup(r = e) : e,
              s = "string" == typeof t ? this.lookup(r = t) : t;
            if (s) {
              __DEV__ ? (0, n.ON)("string" == typeof r, "store.merge expects a string ID") : (0, n.ON)("string" == typeof r, 1);
              var a = new A(xr).merge(o, s);
              if (this.data[r] = a, a !== o && (delete this.refs[r], this.group.caching)) {
                var c = Object.create(null);
                o || (c.__exists = 1), Object.keys(s).forEach((function(e) {
                  if (!o || o[e] !== a[e]) {
                    c[e] = 1;
                    var t = yr(e);
                    t === e || i.policies.hasKeyArgs(a.__typename, t) || (c[t] = 1), void 0 !== a[e] || i instanceof Nr || delete a[e]
                  }
                })), !c.__typename || o && o.__typename || this.policies.rootTypenamesById[r] !== a.__typename || delete c.__typename, Object.keys(c).forEach((function(e) {
                  return i.group.dirty(r, e)
                }))
              }
            }
          }, e.prototype.modify = function(e, t) {
            var r = this,
              n = this.lookup(e);
            if (n) {
              var o = Object.create(null),
                s = !1,
                a = !0,
                c = {
                  DELETE: _r,
                  INVALIDATE: Er,
                  isReference: Se.Ez,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function(t, n) {
                    return r.policies.readField("string" == typeof t ? {
                      fieldName: t,
                      from: n || (0, Se.Yz)(e)
                    } : t, {
                      store: r
                    })
                  }
                };
              if (Object.keys(n).forEach((function(u) {
                  var l = yr(u),
                    h = n[u];
                  if (void 0 !== h) {
                    var p = "function" == typeof t ? t : t[u] || t[l];
                    if (p) {
                      var f = p === Or ? _r : p(ur(h), (0, i.C3)((0, i.C3)({}, c), {
                        fieldName: l,
                        storeFieldName: u,
                        storage: r.getStorage(e, u)
                      }));
                      f === Er ? r.group.dirty(e, u) : (f === _r && (f = void 0), f !== h && (o[u] = f, s = !0, h = f))
                    }
                    void 0 !== h && (a = !1)
                  }
                })), s) return this.merge(e, o), a && (this instanceof Nr ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
            }
            return !1
          }, e.prototype.delete = function(e, t, r) {
            var n, i = this.lookup(e);
            if (i) {
              var o = this.getFieldValue(i, "__typename"),
                s = t && r ? this.policies.getStoreFieldName({
                  typename: o,
                  fieldName: t,
                  args: r
                }) : t;
              return this.modify(e, s ? ((n = {})[s] = Or, n) : Or)
            }
            return !1
          }, e.prototype.evict = function(e, t) {
            var r = !1;
            return e.id && (lr.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof Nr && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
          }, e.prototype.clear = function() {
            this.replace(null)
          }, e.prototype.extract = function() {
            var e = this,
              t = this.toObject(),
              r = [];
            return this.getRootIdSet().forEach((function(t) {
              lr.call(e.policies.rootTypenamesById, t) || r.push(t)
            })), r.length && (t.__META = {
              extraRootIds: r.sort()
            }), t
          }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach((function(r) {
                e && lr.call(e, r) || t.delete(r)
              })), e) {
              var r = e.__META,
                n = (0, i.sX)(e, ["__META"]);
              Object.keys(n).forEach((function(e) {
                t.merge(e, n[e])
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
            return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof Nr ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
          }, e.prototype.gc = function() {
            var e = this,
              t = this.getRootIdSet(),
              r = this.toObject();
            t.forEach((function(n) {
              lr.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
            }));
            var n = Object.keys(r);
            if (n.length) {
              for (var i = this; i instanceof Nr;) i = i.parent;
              n.forEach((function(e) {
                return i.delete(e)
              }))
            }
            return n
          }, e.prototype.findChildRefIds = function(e) {
            if (!lr.call(this.refs, e)) {
              var t = this.refs[e] = Object.create(null),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach((function(e) {
                (0, Se.Ez)(e) && (t[e.__ref] = !0), (0, k.a)(e) && Object.keys(e).forEach((function(t) {
                  var r = e[t];
                  (0, k.a)(r) && n.add(r)
                }))
              }))
            }
            return this.refs[e]
          }, e.prototype.makeCacheKey = function() {
            return this.group.keyMaker.lookupArray(arguments)
          }, e
        }(),
        kr = function() {
          function e(e, t) {
            void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
          }
          return e.prototype.resetCaching = function() {
            this.d = this.caching ? jt() : null, this.keyMaker = new ve(d)
          }, e.prototype.depend = function(e, t) {
            if (this.d) {
              this.d(Cr(e, t));
              var r = yr(t);
              r !== t && this.d(Cr(e, r)), this.parent && this.parent.depend(e, t)
            }
          }, e.prototype.dirty = function(e, t) {
            this.d && this.d.dirty(Cr(e, t), "__exists" === t ? "forget" : "setDirty")
          }, e
        }();

      function Cr(e, t) {
        return t + "#" + e
      }

      function Sr(e, t) {
        Tr(e) && e.group.depend(t, "__exists")
      }! function(e) {
        var t = function(e) {
          function t(t) {
            var r = t.policies,
              n = t.resultCaching,
              i = void 0 === n || n,
              o = t.seed,
              s = e.call(this, r, new kr(i)) || this;
            return s.stump = new Dr(s), s.storageTrie = new ve(d), o && s.replace(o), s
          }
          return (0, i.ct)(t, e), t.prototype.addLayer = function(e, t) {
            return this.stump.addLayer(e, t)
          }, t.prototype.removeLayer = function() {
            return this
          }, t.prototype.getStorage = function() {
            return this.storageTrie.lookupArray(arguments)
          }, t
        }(e);
        e.Root = t
      }(wr || (wr = {}));
      var Nr = function(e) {
          function t(t, r, n, i) {
            var o = e.call(this, r.policies, i) || this;
            return o.id = t, o.parent = r, o.replay = n, o.group = i, n(o), o
          }
          return (0, i.ct)(t, e), t.prototype.addLayer = function(e, r) {
            return new t(e, this, r, this.group)
          }, t.prototype.removeLayer = function(e) {
            var t = this,
              r = this.parent.removeLayer(e);
            return e === this.id ? (this.group.caching && Object.keys(this.data).forEach((function(e) {
              var n = t.data[e],
                i = r.lookup(e);
              i ? n ? n !== i && Object.keys(n).forEach((function(r) {
                oe(n[r], i[r]) || t.group.dirty(e, r)
              })) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach((function(r) {
                t.group.dirty(e, r)
              }))) : t.delete(e)
            })), r) : r === this.parent ? this : r.addLayer(this.id, this.replay)
          }, t.prototype.toObject = function() {
            return (0, i.C3)((0, i.C3)({}, this.parent.toObject()), this.data)
          }, t.prototype.findChildRefIds = function(t) {
            var r = this.parent.findChildRefIds(t);
            return lr.call(this.data, t) ? (0, i.C3)((0, i.C3)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(wr),
        Dr = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, (function() {}), new kr(t.group.caching, t.group)) || this
          }
          return (0, i.ct)(t, e), t.prototype.removeLayer = function() {
            return this
          }, t.prototype.merge = function() {
            return this.parent.merge.apply(this.parent, arguments)
          }, t
        }(Nr);

      function xr(e, t, r) {
        var n = e[r],
          i = t[r];
        return oe(n, i) ? n : i
      }

      function Tr(e) {
        return !!(e instanceof wr && e.group.caching)
      }

      function Rr(e) {
        return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
      }
      var Ir = function() {
        function e(e) {
          var t = this;
          this.knownResults = new(d ? WeakMap : Map), this.config = (0, Ge.g)(e, {
            addTypename: !1 !== e.addTypename,
            canonizeResults: dr(e)
          }), this.canon = e.canon || new be, this.executeSelectionSet = zt((function(e) {
            var r, n = e.context.canonizeResults,
              o = Rr(e);
            o[3] = !n;
            var s = (r = t.executeSelectionSet).peek.apply(r, o);
            return s ? n ? (0, i.C3)((0, i.C3)({}, s), {
              result: t.canon.admit(s.result)
            }) : s : (Sr(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          }), {
            max: this.config.resultCacheMaxSize,
            keyArgs: Rr,
            makeCacheKey: function(e, t, r, n) {
              if (Tr(r.store)) return r.store.makeCacheKey(e, (0, Se.Ez)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = zt((function(e) {
            return Sr(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }), {
            max: this.config.resultCacheMaxSize,
            makeCacheKey: function(e) {
              var t = e.field,
                r = e.array,
                n = e.context;
              if (Tr(n.store)) return n.store.makeCacheKey(t, r, n.varString)
            }
          })
        }
        return e.prototype.resetCanon = function() {
          this.canon = new be
        }, e.prototype.diffQueryAgainstStore = function(e) {
          var t = e.store,
            r = e.query,
            n = e.rootId,
            o = void 0 === n ? "ROOT_QUERY" : n,
            s = e.variables,
            a = e.returnPartialData,
            c = void 0 === a || a,
            u = e.canonizeResults,
            l = void 0 === u ? this.config.canonizeResults : u,
            h = this.config.cache.policies;
          s = (0, i.C3)((0, i.C3)({}, (0, $._W)((0, $.QR)(r))), s);
          var p, f = (0, Se.Yz)(o),
            d = this.executeSelectionSet({
              selectionSet: (0, $.aG)(r).selectionSet,
              objectOrReference: f,
              enclosingRef: f,
              context: (0, i.C3)({
                store: t,
                query: r,
                policies: h,
                variables: s,
                varString: _e(s),
                canonizeResults: l
              }, br(r, this.config.fragments))
            });
          if (d.missing && (p = [new cr(Ar(d.missing), d.missing, r, s)], !c)) throw p[0];
          return {
            result: d.result,
            complete: !p,
            missing: p
          }
        }, e.prototype.isFresh = function(e, t, r, n) {
          if (Tr(n.store) && this.knownResults.get(e) === r) {
            var i = this.executeSelectionSet.peek(r, t, n, this.canon.isKnown(e));
            if (i && e === i.result) return !0
          }
          return !1
        }, e.prototype.execSelectionSetImpl = function(e) {
          var t = this,
            r = e.selectionSet,
            i = e.objectOrReference,
            o = e.enclosingRef,
            s = e.context;
          if ((0, Se.Ez)(i) && !s.policies.rootTypenamesById[i.__ref] && !s.store.has(i.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(i.__ref, " object")
          };
          var a, u = s.variables,
            l = s.policies,
            h = s.store.getFieldValue(i, "__typename"),
            p = [],
            f = new A;

          function d(e, t) {
            var r;
            return e.missing && (a = f.merge(a, ((r = {})[t] = e.missing, r))), e.result
          }
          this.config.addTypename && "string" == typeof h && !l.rootIdsByTypename[h] && p.push({
            __typename: h
          });
          var v = new Set(r.selections);
          v.forEach((function(e) {
            var r, y;
            if (c(e, u))
              if ((0, Se.sh)(e)) {
                var m = l.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: s.variables,
                    from: i
                  }, s),
                  g = (0, Se.ue)(e);
                void 0 === m ? Ae.added(e) || (a = f.merge(a, ((r = {})[g] = "Can't find field '".concat(e.name.value, "' on ").concat((0, Se.Ez)(i) ? i.__ref + " object" : "object " + JSON.stringify(i, null, 2)), r))) : (0, D.c)(m) ? m = d(t.executeSubSelectedArray({
                  field: e,
                  array: m,
                  enclosingRef: o,
                  context: s
                }), g) : e.selectionSet ? null != m && (m = d(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: m,
                  enclosingRef: (0, Se.Ez)(m) ? m : o,
                  context: s
                }), g)) : s.canonizeResults && (m = t.canon.pass(m)), void 0 !== m && p.push(((y = {})[g] = m, y))
              } else {
                var b = (0, Ne.gV)(e, s.lookupFragment);
                if (!b && e.kind === Ce.U.FRAGMENT_SPREAD) throw __DEV__ ? new n.gZ("No fragment named ".concat(e.name.value)) : new n.gZ(5);
                b && l.fragmentMatches(b, h) && b.selectionSet.selections.forEach(v.add, v)
              }
          }));
          var y = {
              result: R(p),
              missing: a
            },
            m = s.canonizeResults ? this.canon.admit(y) : ur(y);
          return m.result && this.knownResults.set(m.result, r), m
        }, e.prototype.execSubSelectedArrayImpl = function(e) {
          var t, r = this,
            i = e.field,
            o = e.array,
            s = e.enclosingRef,
            a = e.context,
            c = new A;

          function u(e, r) {
            var n;
            return e.missing && (t = c.merge(t, ((n = {})[r] = e.missing, n))), e.result
          }
          return i.selectionSet && (o = o.filter(a.store.canRead)), o = o.map((function(e, t) {
            return null === e ? null : (0, D.c)(e) ? u(r.executeSubSelectedArray({
              field: i,
              array: e,
              enclosingRef: s,
              context: a
            }), t) : i.selectionSet ? u(r.executeSelectionSet({
              selectionSet: i.selectionSet,
              objectOrReference: e,
              enclosingRef: (0, Se.Ez)(e) ? e : s,
              context: a
            }), t) : (__DEV__ && function(e, t, r) {
              if (!t.selectionSet) {
                var i = new Set([r]);
                i.forEach((function(r) {
                  (0, k.a)(r) && (__DEV__ ? (0, n.ON)(!(0, Se.Ez)(r), "Missing selection set for object of type ".concat(function(e, t) {
                    return (0, Se.Ez)(t) ? e.get(t.__ref, "__typename") : t && t.__typename
                  }(e, r), " returned for query field ").concat(t.name.value)) : (0, n.ON)(!(0, Se.Ez)(r), 6), Object.values(r).forEach(i.add, i))
                }))
              }
            }(a.store, i, e), e)
          })), {
            result: a.canonizeResults ? this.canon.admit(o) : o,
            missing: t
          }
        }, e
      }();

      function Ar(e) {
        try {
          JSON.stringify(e, (function(e, t) {
            if ("string" == typeof t) throw t;
            return t
          }))
        } catch (e) {
          return e
        }
      }
      var Pr = Object.create(null);

      function Fr(e) {
        var t = JSON.stringify(e);
        return Pr[t] || (Pr[t] = Object.create(null))
      }

      function Mr(e) {
        var t = Fr(e);
        return t.keyFieldsFn || (t.keyFieldsFn = function(t, r) {
          var i = function(e, t) {
              return r.readField(t, e)
            },
            o = r.keyObject = Qr(e, (function(e) {
              var o = Vr(r.storeObject, e, i);
              return void 0 === o && t !== r.storeObject && lr.call(t, e[0]) && (o = Vr(t, e, jr)), __DEV__ ? (0, n.ON)(void 0 !== o, "Missing field '".concat(e.join("."), "' while extracting keyFields from ").concat(JSON.stringify(t))) : (0, n.ON)(void 0 !== o, 2), o
            }));
          return "".concat(r.typename, ":").concat(JSON.stringify(o))
        })
      }

      function Lr(e) {
        var t = Fr(e);
        return t.keyArgsFn || (t.keyArgsFn = function(t, r) {
          var n = r.field,
            i = r.variables,
            o = r.fieldName,
            s = Qr(e, (function(e) {
              var r = e[0],
                o = r.charAt(0);
              if ("@" !== o)
                if ("$" !== o) {
                  if (t) return Vr(t, e)
                } else {
                  var s = r.slice(1);
                  if (i && lr.call(i, s)) {
                    var a = e.slice(0);
                    return a[0] = s, Vr(i, a)
                  }
                }
              else if (n && (0, D.g)(n.directives)) {
                var c = r.slice(1),
                  u = n.directives.find((function(e) {
                    return e.name.value === c
                  })),
                  l = u && (0, Se.IL)(u, i);
                return l && Vr(l, e.slice(1))
              }
            })),
            a = JSON.stringify(s);
          return (t || "{}" !== a) && (o += ":" + a), o
        })
      }

      function Qr(e, t) {
        var r = new A;
        return qr(e).reduce((function(e, n) {
          var i, o = t(n);
          if (void 0 !== o) {
            for (var s = n.length - 1; s >= 0; --s)(i = {})[n[s]] = o, o = i;
            e = r.merge(e, o)
          }
          return e
        }), Object.create(null))
      }

      function qr(e) {
        var t = Fr(e);
        if (!t.paths) {
          var r = t.paths = [],
            n = [];
          e.forEach((function(t, i) {
            (0, D.c)(t) ? (qr(t).forEach((function(e) {
              return r.push(n.concat(e))
            })), n.length = 0) : (n.push(t), (0, D.c)(e[i + 1]) || (r.push(n.slice(0)), n.length = 0))
          }))
        }
        return t.paths
      }

      function jr(e, t) {
        return e[t]
      }

      function Vr(e, t, r) {
        return r = r || jr, Ur(t.reduce((function e(t, n) {
          return (0, D.c)(t) ? t.map((function(t) {
            return e(t, n)
          })) : t && r(t, n)
        }), e))
      }

      function Ur(e) {
        return (0, k.a)(e) ? (0, D.c)(e) ? e.map(Ur) : Qr(Object.keys(e).sort(), (function(t) {
          return Vr(e, t)
        })) : e
      }

      function zr(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, Se.IL)(e.field, e.variables) : null
      }
      Se.k7.setStringify(_e);
      var Br = function() {},
        Wr = function(e, t) {
          return t.fieldName
        },
        Kr = function(e, t, r) {
          return (0, r.mergeObjects)(e, t)
        },
        Gr = function(e, t) {
          return t
        },
        Hr = function() {
          function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, i.C3)({
              dataIdFromObject: pr
            }, e), this.cache = this.config.cache, this.setRootTypename("Query"), this.setRootTypename("Mutation"), this.setRootTypename("Subscription"), e.possibleTypes && this.addPossibleTypes(e.possibleTypes), e.typePolicies && this.addTypePolicies(e.typePolicies)
          }
          return e.prototype.identify = function(e, t) {
            var r, n = this,
              o = t && (t.typename || (null === (r = t.storeObject) || void 0 === r ? void 0 : r.__typename)) || e.__typename;
            if (o === this.rootTypenamesById.ROOT_QUERY) return ["ROOT_QUERY"];
            for (var s, a = t && t.storeObject || e, c = (0, i.C3)((0, i.C3)({}, t), {
                typename: o,
                storeObject: a,
                readField: t && t.readField || function() {
                  var e = Jr(arguments, a);
                  return n.readField(e, {
                    store: n.cache.data,
                    variables: e.variables
                  })
                }
              }), u = o && this.getTypePolicy(o), l = u && u.keyFn || this.config.dataIdFromObject; l;) {
              var h = l((0, i.C3)((0, i.C3)({}, e), a), c);
              if (!(0, D.c)(h)) {
                s = h;
                break
              }
              l = Mr(h)
            }
            return s = s ? String(s) : void 0, c.keyObject ? [s, c.keyObject] : [s]
          }, e.prototype.addTypePolicies = function(e) {
            var t = this;
            Object.keys(e).forEach((function(r) {
              var n = e[r],
                o = n.queryType,
                s = n.mutationType,
                a = n.subscriptionType,
                c = (0, i.sX)(n, ["queryType", "mutationType", "subscriptionType"]);
              o && t.setRootTypename("Query", r), s && t.setRootTypename("Mutation", r), a && t.setRootTypename("Subscription", r), lr.call(t.toBeAdded, r) ? t.toBeAdded[r].push(c) : t.toBeAdded[r] = [c]
            }))
          }, e.prototype.updateTypePolicy = function(e, t) {
            var r = this,
              n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function s(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? Kr : !1 === t ? Gr : e.merge
            }
            s(n, t.merge), n.keyFn = !1 === i ? Br : (0, D.c)(i) ? Mr(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach((function(t) {
              var n = r.getFieldPolicy(e, t, !0),
                i = o[t];
              if ("function" == typeof i) n.read = i;
              else {
                var a = i.keyArgs,
                  c = i.read,
                  u = i.merge;
                n.keyFn = !1 === a ? Wr : (0, D.c)(a) ? Lr(a) : "function" == typeof a ? a : n.keyFn, "function" == typeof c && (n.read = c), s(n, u)
              }
              n.read && n.merge && (n.keyFn = n.keyFn || Wr)
            }))
          }, e.prototype.setRootTypename = function(e, t) {
            void 0 === t && (t = e);
            var r = "ROOT_" + e.toUpperCase(),
              i = this.rootTypenamesById[r];
            t !== i && (__DEV__ ? (0, n.ON)(!i || i === e, "Cannot change root ".concat(e, " __typename more than once")) : (0, n.ON)(!i || i === e, 3), i && delete this.rootIdsByTypename[i], this.rootIdsByTypename[t] = r, this.rootTypenamesById[r] = t)
          }, e.prototype.addPossibleTypes = function(e) {
            var t = this;
            this.usingPossibleTypes = !0, Object.keys(e).forEach((function(r) {
              t.getSupertypeSet(r, !0), e[r].forEach((function(e) {
                t.getSupertypeSet(e, !0).add(r);
                var n = e.match(vr);
                n && n[0] === e || t.fuzzySubtypes.set(e, new RegExp(e))
              }))
            }))
          }, e.prototype.getTypePolicy = function(e) {
            var t = this;
            if (!lr.call(this.typePolicies, e)) {
              var r = this.typePolicies[e] = Object.create(null);
              r.fields = Object.create(null);
              var n = this.supertypeMap.get(e);
              n && n.size && n.forEach((function(e) {
                var n = t.getTypePolicy(e),
                  o = n.fields,
                  s = (0, i.sX)(n, ["fields"]);
                Object.assign(r, s), Object.assign(r.fields, o)
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
          }, e.prototype.fragmentMatches = function(e, t, r, i) {
            var o = this;
            if (!e.typeCondition) return !0;
            if (!t) return !1;
            var s = e.typeCondition.name.value;
            if (t === s) return !0;
            if (this.usingPossibleTypes && this.supertypeMap.has(s))
              for (var a = this.getSupertypeSet(t, !0), c = [a], u = function(e) {
                  var t = o.getSupertypeSet(e, !1);
                  t && t.size && c.indexOf(t) < 0 && c.push(t)
                }, l = !(!r || !this.fuzzySubtypes.size), h = !1, p = 0; p < c.length; ++p) {
                var f = c[p];
                if (f.has(s)) return a.has(s) || (h && __DEV__ && n.ON.warn("Inferring subtype ".concat(t, " of supertype ").concat(s)), a.add(s)), !0;
                f.forEach(u), l && p === c.length - 1 && mr(e.selectionSet, r, i) && (l = !1, h = !0, this.fuzzySubtypes.forEach((function(e, r) {
                  var n = t.match(e);
                  n && n[0] === t && u(r)
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
              for (var s = {
                  typename: r,
                  fieldName: n,
                  field: e.field || null,
                  variables: e.variables
                }, a = zr(e); o;) {
                var c = o(a, s);
                if (!(0, D.c)(c)) {
                  t = c || n;
                  break
                }
                o = Lr(c)
              }
            return void 0 === t && (t = e.field ? (0, Se.CE)(e.field, e.variables) : (0, Se.k7)(n, zr(e))), !1 === t ? n : n === yr(t) ? t : n + ":" + t
          }, e.prototype.readField = function(e, t) {
            var r = e.from;
            if (r && (e.field || e.fieldName)) {
              if (void 0 === e.typename) {
                var n = t.store.getFieldValue(r, "__typename");
                n && (e.typename = n)
              }
              var i = this.getStoreFieldName(e),
                o = yr(i),
                s = t.store.getFieldValue(r, i),
                a = this.getFieldPolicy(e.typename, o, !1),
                c = a && a.read;
              if (c) {
                var u = Yr(this, r, e, t, t.store.getStorage((0, Se.Ez)(r) ? r.__ref : r, i));
                return Bt.withValue(this.cache, c, [s, u])
              }
              return s
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
              s = r.typename,
              a = r.merge;
            return a === Kr ? $r(n.store)(e, t) : a === Gr ? t : (n.overwrite && (e = void 0), a(e, t, Yr(this, void 0, {
              typename: s,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function Yr(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          s = yr(o),
          a = r.variables || n.variables,
          c = n.store,
          u = c.toReference,
          l = c.canRead;
        return {
          args: zr(r),
          field: r.field || null,
          fieldName: s,
          storeFieldName: o,
          variables: a,
          isReference: Se.Ez,
          toReference: u,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function() {
            return e.readField(Jr(arguments, t, a), n)
          },
          mergeObjects: $r(n.store)
        }
      }

      function Jr(e, t, r) {
        var o, s, a, c = e[0],
          u = e[1],
          l = e.length;
        return "string" == typeof c ? o = {
          fieldName: c,
          from: l > 1 ? u : t
        } : (o = (0, i.C3)({}, c), lr.call(o, "from") || (o.from = t)), __DEV__ && void 0 === o.from && __DEV__ && n.ON.warn("Undefined 'from' passed to readField with arguments ".concat((s = Array.from(e), a = Le("stringifyForDisplay"), JSON.stringify(s, (function(e, t) {
          return void 0 === t ? a : t
        })).split(JSON.stringify(a)).join("<undefined>")))), void 0 === o.variables && (o.variables = r), o
      }

      function $r(e) {
        return function(t, r) {
          if ((0, D.c)(t) || (0, D.c)(r)) throw __DEV__ ? new n.gZ("Cannot automatically merge arrays") : new n.gZ(4);
          if ((0, k.a)(t) && (0, k.a)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              s = e.getFieldValue(r, "__typename");
            if (o && s && o !== s) return r;
            if ((0, Se.Ez)(t) && gr(r)) return e.merge(t.__ref, r), t;
            if (gr(t) && (0, Se.Ez)(r)) return e.merge(t, r.__ref), r;
            if (gr(t) && gr(r)) return (0, i.C3)((0, i.C3)({}, t), r)
          }
          return r
        }
      }

      function Xr(e, t, r) {
        var n = "".concat(t).concat(r),
          o = e.flavors.get(n);
        return o || e.flavors.set(n, o = e.clientOnly === t && e.deferred === r ? e : (0, i.C3)((0, i.C3)({}, e), {
          clientOnly: t,
          deferred: r
        })), o
      }
      var Zr = function() {
          function e(e, t, r) {
            this.cache = e, this.reader = t, this.fragments = r
          }
          return e.prototype.writeToStore = function(e, t) {
            var r = this,
              o = t.query,
              s = t.result,
              a = t.dataId,
              c = t.variables,
              u = t.overwrite,
              l = (0, $.ED)(o),
              h = new A;
            c = (0, i.C3)((0, i.C3)({}, (0, $._W)(l)), c);
            var p = (0, i.C3)((0, i.C3)({
                store: e,
                written: Object.create(null),
                merge: function(e, t) {
                  return h.merge(e, t)
                },
                variables: c,
                varString: _e(c)
              }, br(o, this.fragments)), {
                overwrite: !!u,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map
              }),
              f = this.processSelectionSet({
                result: s || Object.create(null),
                dataId: a,
                selectionSet: l.selectionSet,
                mergeTree: {
                  map: new Map
                },
                context: p
              });
            if (!(0, Se.Ez)(f)) throw __DEV__ ? new n.gZ("Could not identify object ".concat(JSON.stringify(s))) : new n.gZ(7);
            return p.incomingById.forEach((function(t, i) {
              var o = t.storeObject,
                s = t.mergeTree,
                a = t.fieldNodeSet,
                c = (0, Se.Yz)(i);
              if (s && s.map.size) {
                var u = r.applyMerges(s, c, o, p);
                if ((0, Se.Ez)(u)) return;
                o = u
              }
              if (__DEV__ && !p.overwrite) {
                var l = Object.create(null);
                a.forEach((function(e) {
                  e.selectionSet && (l[e.name.value] = !0)
                })), Object.keys(o).forEach((function(e) {
                  (function(e) {
                    return !0 === l[yr(e)]
                  })(e) && ! function(e) {
                    var t = s && s.map.get(e);
                    return Boolean(t && t.info && t.info.merge)
                  }(e) && function(e, t, r, i) {
                    var o = function(e) {
                        var t = i.getFieldValue(e, r);
                        return "object" == typeof t && t
                      },
                      s = o(e);
                    if (s) {
                      var a = o(t);
                      if (a && !(0, Se.Ez)(s) && !oe(s, a) && !Object.keys(s).every((function(e) {
                          return void 0 !== i.getFieldValue(a, e)
                        }))) {
                        var c = i.getFieldValue(e, "__typename") || i.getFieldValue(t, "__typename"),
                          u = yr(r),
                          l = "".concat(c, ".").concat(u);
                        if (!sn.has(l)) {
                          sn.add(l);
                          var h = [];
                          (0, D.c)(s) || (0, D.c)(a) || [s, a].forEach((function(e) {
                            var t = i.getFieldValue(e, "__typename");
                            "string" != typeof t || h.includes(t) || h.push(t)
                          })), __DEV__ && n.ON.warn("Cache data may be lost when replacing the ".concat(u, " field of a ").concat(c, " object.\n\nThis could cause additional (usually avoidable) network requests to fetch data that were otherwise cached.\n\nTo address this problem (which is not a bug in Apollo Client), ").concat(h.length ? "either ensure all objects of type " + h.join(" and ") + " have an ID or a custom merge function, or " : "", "define a custom merge function for the ").concat(l, " field, so InMemoryCache can safely merge these objects:\n\n  existing: ").concat(JSON.stringify(s).slice(0, 1e3), "\n  incoming: ").concat(JSON.stringify(a).slice(0, 1e3), "\n\nFor more information about these options, please refer to the documentation:\n\n  * Ensuring entity objects have IDs: https://go.apollo.dev/c/generating-unique-identifiers\n  * Defining custom merge functions: https://go.apollo.dev/c/merging-non-normalized-objects\n"))
                        }
                      }
                    }
                  }(c, o, e, p.store)
                }))
              }
              e.merge(i, o)
            })), e.retain(f.__ref), f
          }, e.prototype.processSelectionSet = function(e) {
            var t = this,
              r = e.dataId,
              o = e.result,
              s = e.selectionSet,
              a = e.context,
              c = e.mergeTree,
              u = this.cache.policies,
              l = Object.create(null),
              h = r && u.rootTypenamesById[r] || (0, Se.A1)(o, s, a.fragmentMap) || r && a.store.get(r, "__typename");
            "string" == typeof h && (l.__typename = h);
            var p = function() {
                var e = Jr(arguments, l, a.variables);
                if ((0, Se.Ez)(e.from)) {
                  var t = a.incomingById.get(e.from.__ref);
                  if (t) {
                    var r = u.readField((0, i.C3)((0, i.C3)({}, e), {
                      from: t.storeObject
                    }), a);
                    if (void 0 !== r) return r
                  }
                }
                return u.readField(e, a)
              },
              f = new Set;
            this.flattenFields(s, o, a, h).forEach((function(e, r) {
              var i, s = (0, Se.ue)(r),
                a = o[s];
              if (f.add(r), void 0 !== a) {
                var d = u.getStoreFieldName({
                    typename: h,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables
                  }),
                  v = tn(c, d),
                  y = t.processFieldValue(a, r, r.selectionSet ? Xr(e, !1, !1) : e, v),
                  m = void 0;
                r.selectionSet && ((0, Se.Ez)(y) || gr(y)) && (m = p("__typename", y));
                var g = u.getMergeFunction(h, r.name.value, m);
                g ? v.info = {
                  field: r,
                  typename: h,
                  merge: g
                } : on(c, d), l = e.merge(l, ((i = {})[d] = y, i))
              } else !__DEV__ || e.clientOnly || e.deferred || Ae.added(r) || u.getReadFunction(h, r.name.value) || __DEV__ && n.ON.error("Missing field '".concat((0, Se.ue)(r), "' while writing result ").concat(JSON.stringify(o, null, 2)).substring(0, 1e3))
            }));
            try {
              var d = u.identify(o, {
                  typename: h,
                  selectionSet: s,
                  fragmentMap: a.fragmentMap,
                  storeObject: l,
                  readField: p
                }),
                v = d[0],
                y = d[1];
              r = r || v, y && (l = a.merge(l, y))
            } catch (e) {
              if (!r) throw e
            }
            if ("string" == typeof r) {
              var m = (0, Se.Yz)(r),
                g = a.written[r] || (a.written[r] = []);
              if (g.indexOf(s) >= 0) return m;
              if (g.push(s), this.reader && this.reader.isFresh(o, m, s, a)) return m;
              var b = a.incomingById.get(r);
              return b ? (b.storeObject = a.merge(b.storeObject, l), b.mergeTree = rn(b.mergeTree, c), f.forEach((function(e) {
                return b.fieldNodeSet.add(e)
              }))) : a.incomingById.set(r, {
                storeObject: l,
                mergeTree: nn(c) ? void 0 : c,
                fieldNodeSet: f
              }), m
            }
            return l
          }, e.prototype.processFieldValue = function(e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e ? (0, D.c)(e) ? e.map((function(e, o) {
              var s = i.processFieldValue(e, t, r, tn(n, o));
              return on(n, o), s
            })) : this.processSelectionSet({
              result: e,
              selectionSet: t.selectionSet,
              context: r,
              mergeTree: n
            }) : __DEV__ ? We(e) : e
          }, e.prototype.flattenFields = function(e, t, r, i) {
            void 0 === i && (i = (0, Se.A1)(t, e, r.fragmentMap));
            var o = new Map,
              s = this.cache.policies,
              a = new ve(!1);
            return function e(u, l) {
              var h = a.lookup(u, l.clientOnly, l.deferred);
              h.visited || (h.visited = !0, u.selections.forEach((function(a) {
                if (c(a, r.variables)) {
                  var u = l.clientOnly,
                    h = l.deferred;
                  if (u && h || !(0, D.g)(a.directives) || a.directives.forEach((function(e) {
                      var t = e.name.value;
                      if ("client" === t && (u = !0), "defer" === t) {
                        var n = (0, Se.IL)(e, r.variables);
                        n && !1 === n.if || (h = !0)
                      }
                    })), (0, Se.sh)(a)) {
                    var p = o.get(a);
                    p && (u = u && p.clientOnly, h = h && p.deferred), o.set(a, Xr(r, u, h))
                  } else {
                    var f = (0, Ne.gV)(a, r.lookupFragment);
                    if (!f && a.kind === Ce.U.FRAGMENT_SPREAD) throw __DEV__ ? new n.gZ("No fragment named ".concat(a.name.value)) : new n.gZ(8);
                    f && s.fragmentMatches(f, i, t, r.variables) && e(f.selectionSet, Xr(r, u, h))
                  }
                }
              })))
            }(e, r), o
          }, e.prototype.applyMerges = function(e, t, r, o, s) {
            var a, c = this;
            if (e.map.size && !(0, Se.Ez)(r)) {
              var u, l = (0, D.c)(r) || !(0, Se.Ez)(t) && !gr(t) ? void 0 : t,
                h = r;
              l && !s && (s = [(0, Se.Ez)(l) ? l.__ref : l]);
              var p = function(e, t) {
                return (0, D.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach((function(e, t) {
                var r = p(l, t),
                  i = p(h, t);
                if (void 0 !== i) {
                  s && s.push(t);
                  var a = c.applyMerges(e, r, i, o, s);
                  a !== i && (u = u || new Map).set(t, a), s && (0, n.ON)(s.pop() === t)
                }
              })), u && (r = (0, D.c)(h) ? h.slice(0) : (0, i.C3)({}, h), u.forEach((function(e, t) {
                r[t] = e
              })))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, s && (a = o.store).getStorage.apply(a, s)) : r
          }, e
        }(),
        en = [];

      function tn(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, en.pop() || {
          map: new Map
        }), r.get(t)
      }

      function rn(e, t) {
        if (e === t || !t || nn(t)) return e;
        if (!e || nn(e)) return t;
        var r = e.info && t.info ? (0, i.C3)((0, i.C3)({}, e.info), t.info) : e.info || t.info,
          n = e.map.size && t.map.size,
          o = {
            info: r,
            map: n ? new Map : e.map.size ? e.map : t.map
          };
        if (n) {
          var s = new Set(t.map.keys());
          e.map.forEach((function(e, r) {
            o.map.set(r, rn(e, t.map.get(r))), s.delete(r)
          })), s.forEach((function(r) {
            o.map.set(r, rn(t.map.get(r), e.map.get(r)))
          }))
        }
        return o
      }

      function nn(e) {
        return !e || !(e.info || e.map.size)
      }

      function on(e, t) {
        var r = e.map,
          n = r.get(t);
        n && nn(n) && (en.push(n), r.delete(t))
      }
      var sn = new Set,
        an = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.typenameDocumentCache = new Map, r.makeVar = Ht, r.txCount = 0, r.config = function(e) {
              return (0, Ge.g)(fr, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new Hr({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies
            }), r.init(), r
          }
          return (0, i.ct)(t, e), t.prototype.init = function() {
            var e = this.data = new wr.Root({
              policies: this.policies,
              resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache()
          }, t.prototype.resetResultCache = function(e) {
            var t = this,
              r = this.storeReader,
              n = this.config.fragments;
            this.storeWriter = new Zr(this, this.storeReader = new Ir({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: dr(this.config),
              canon: e ? void 0 : r && r.canon,
              fragments: n
            }), n), this.maybeBroadcastWatch = zt((function(e, r) {
              return t.broadcastWatch(e, r)
            }), {
              max: this.config.resultCacheMaxSize,
              makeCacheKey: function(e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if (Tr(r)) {
                  var n = e.optimistic,
                    i = e.id,
                    o = e.variables;
                  return r.makeCacheKey(e.query, e.callback, _e({
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
              return this.storeReader.diffQueryAgainstStore((0, i.C3)((0, i.C3)({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: r
              })).result || null
            } catch (e) {
              if (e instanceof cr) return null;
              throw e
            }
          }, t.prototype.write = function(e) {
            try {
              return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.modify = function(e) {
            if (lr.call(e, "id") && !e.id) return !1;
            var t = e.optimistic ? this.optimisticData : this.data;
            try {
              return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.diff = function(e) {
            return this.storeReader.diffQueryAgainstStore((0, i.C3)((0, i.C3)({}, e), {
              store: e.optimistic ? this.optimisticData : this.data,
              rootId: e.id || "ROOT_QUERY",
              config: this.config
            }))
          }, t.prototype.watch = function(e) {
            var t = this;
            return this.watches.size || function(e) {
                Kt(e).vars.forEach((function(t) {
                  return t.attachCache(e)
                }))
              }(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e),
              function() {
                t.watches.delete(e) && !t.watches.size && Gt(t), t.maybeBroadcastWatch.forget(e)
              }
          }, t.prototype.gc = function(e) {
            _e.reset();
            var t = this.optimisticData.gc();
            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t
          }, t.prototype.retain = function(e, t) {
            return (t ? this.optimisticData : this.data).retain(e)
          }, t.prototype.release = function(e, t) {
            return (t ? this.optimisticData : this.data).release(e)
          }, t.prototype.identify = function(e) {
            if ((0, Se.Ez)(e)) return e.__ref;
            try {
              return this.policies.identify(e)[0]
            } catch (e) {
              __DEV__ && n.ON.warn(e)
            }
          }, t.prototype.evict = function(e) {
            if (!e.id) {
              if (lr.call(e, "id")) return !1;
              e = (0, i.C3)((0, i.C3)({}, e), {
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
            return this.init(), _e.reset(), e && e.discardWatches ? (this.watches.forEach((function(e) {
              return t.maybeBroadcastWatch.forget(e)
            })), this.watches.clear(), Gt(this)) : this.broadcastWatches(), Promise.resolve()
          }, t.prototype.removeOptimistic = function(e) {
            var t = this.optimisticData.removeLayer(e);
            t !== this.optimisticData && (this.optimisticData = t, this.broadcastWatches())
          }, t.prototype.batch = function(e) {
            var t, r = this,
              n = e.update,
              o = e.optimistic,
              s = void 0 === o || o,
              a = e.removeOptimistic,
              c = e.onWatchUpdated,
              u = function(e) {
                var i = r,
                  o = i.data,
                  s = i.optimisticData;
                ++r.txCount, e && (r.data = r.optimisticData = e);
                try {
                  return t = n(r)
                } finally {
                  --r.txCount, r.data = o, r.optimisticData = s
                }
              },
              l = new Set;
            return c && !this.txCount && this.broadcastWatches((0, i.C3)((0, i.C3)({}, e), {
              onWatchUpdated: function(e) {
                return l.add(e), !1
              }
            })), "string" == typeof s ? this.optimisticData = this.optimisticData.addLayer(s, u) : !1 === s ? u(this.data) : u(), "string" == typeof a && (this.optimisticData = this.optimisticData.removeLayer(a)), c && l.size ? (this.broadcastWatches((0, i.C3)((0, i.C3)({}, e), {
              onWatchUpdated: function(e, t) {
                var r = c.call(this, e, t);
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
            if (this.addTypename) {
              var t = this.typenameDocumentCache.get(e);
              return t || (t = Ae(e), this.typenameDocumentCache.set(e, t), this.typenameDocumentCache.set(t, t)), t
            }
            return e
          }, t.prototype.transformForLink = function(e) {
            var t = this.config.fragments;
            return t ? t.transform(e) : e
          }, t.prototype.broadcastWatches = function(e) {
            var t = this;
            this.txCount || this.watches.forEach((function(r) {
              return t.maybeBroadcastWatch(r, e)
            }))
          }, t.prototype.broadcastWatch = function(e, t) {
            var r = e.lastDiff,
              n = this.diff(e);
            t && (e.optimistic && "string" == typeof t.optimistic && (n.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, n, r)) || r && oe(r.result, n.result) || e.callback(e.lastDiff = n, r)
          }, t
        }(ar),
        cn = o.A.empty,
        un = o.A.from,
        ln = o.A.split,
        hn = o.A.concat;

      function pn(e) {
        var t = !1;
        return new Promise((function(r, i) {
          e.subscribe({
            next: function(e) {
              t ? __DEV__ && n.ON.warn("Promise Wrapper does not support multiple results from Observable") : (t = !0, r(e))
            },
            error: i
          })
        }))
      }

      function fn(e) {
        return new h._((function(t) {
          e.then((function(e) {
            t.next(e), t.complete()
          })).catch(t.error.bind(t))
        }))
      }
      var dn = r(4504);

      function vn(e, t) {
        if (!Boolean(e)) throw new Error(null != t ? t : "Unexpected invariant triggered.")
      }
      const yn = /\r\n|[\n\r]/g;

      function mn(e, t) {
        let r = 0,
          n = 1;
        for (const i of e.body.matchAll(yn)) {
          if ("number" == typeof i.index || vn(!1), i.index >= t) break;
          r = i.index + i[0].length, n += 1
        }
        return {
          line: n,
          column: t + 1 - r
        }
      }

      function gn(e, t) {
        const r = e.locationOffset.column - 1,
          n = "".padStart(r) + e.body,
          i = t.line - 1,
          o = e.locationOffset.line - 1,
          s = t.line + o,
          a = 1 === t.line ? r : 0,
          c = t.column + a,
          u = `${e.name}:${s}:${c}\n`,
          l = n.split(/\r\n|[\n\r]/g),
          h = l[i];
        if (h.length > 120) {
          const e = Math.floor(c / 80),
            t = c % 80,
            r = [];
          for (let e = 0; e < h.length; e += 80) r.push(h.slice(e, e + 80));
          return u + bn([
            [`${s} |`, r[0]], ...r.slice(1, e + 1).map((e => ["|", e])), ["|", "^".padStart(t)],
            ["|", r[e + 1]]
          ])
        }
        return u + bn([
          [s - 1 + " |", l[i - 1]],
          [`${s} |`, h],
          ["|", "^".padStart(c)],
          [`${s+1} |`, l[i + 1]]
        ])
      }

      function bn(e) {
        const t = e.filter((([e, t]) => void 0 !== t)),
          r = Math.max(...t.map((([e]) => e.length)));
        return t.map((([e, t]) => e.padStart(r) + (t ? " " + t : ""))).join("\n")
      }
      class _n extends Error {
        constructor(e, ...t) {
          var r, n, i;
          const {
            nodes: o,
            source: s,
            positions: a,
            path: c,
            originalError: u,
            extensions: l
          } = function(e) {
            const t = e[0];
            return null == t || "kind" in t || "length" in t ? {
              nodes: t,
              source: e[1],
              positions: e[2],
              path: e[3],
              originalError: e[4],
              extensions: e[5]
            } : t
          }(t);
          super(e), this.name = "GraphQLError", this.path = null != c ? c : void 0, this.originalError = null != u ? u : void 0, this.nodes = On(Array.isArray(o) ? o : o ? [o] : void 0);
          const h = On(null === (r = this.nodes) || void 0 === r ? void 0 : r.map((e => e.loc)).filter((e => null != e)));
          this.source = null != s ? s : null == h || null === (n = h[0]) || void 0 === n ? void 0 : n.source, this.positions = null != a ? a : null == h ? void 0 : h.map((e => e.start)), this.locations = a && s ? a.map((e => mn(s, e))) : null == h ? void 0 : h.map((e => mn(e.source, e.start)));
          const p = "object" == typeof(f = null == u ? void 0 : u.extensions) && null !== f ? null == u ? void 0 : u.extensions : void 0;
          var f;
          this.extensions = null !== (i = null != l ? l : p) && void 0 !== i ? i : Object.create(null), Object.defineProperties(this, {
            message: {
              writable: !0,
              enumerable: !0
            },
            name: {
              enumerable: !1
            },
            nodes: {
              enumerable: !1
            },
            source: {
              enumerable: !1
            },
            positions: {
              enumerable: !1
            },
            originalError: {
              enumerable: !1
            }
          }), null != u && u.stack ? Object.defineProperty(this, "stack", {
            value: u.stack,
            writable: !0,
            configurable: !0
          }) : Error.captureStackTrace ? Error.captureStackTrace(this, _n) : Object.defineProperty(this, "stack", {
            value: Error().stack,
            writable: !0,
            configurable: !0
          })
        }
        get[Symbol.toStringTag]() {
          return "GraphQLError"
        }
        toString() {
          let e = this.message;
          if (this.nodes)
            for (const r of this.nodes) r.loc && (e += "\n\n" + gn((t = r.loc).source, mn(t.source, t.start)));
          else if (this.source && this.locations)
            for (const t of this.locations) e += "\n\n" + gn(this.source, t);
          var t;
          return e
        }
        toJSON() {
          const e = {
            message: this.message
          };
          return null != this.locations && (e.locations = this.locations), null != this.path && (e.path = this.path), null != this.extensions && Object.keys(this.extensions).length > 0 && (e.extensions = this.extensions), e
        }
      }

      function On(e) {
        return void 0 === e || 0 === e.length ? void 0 : e
      }

      function En(e, t, r) {
        return new _n(`Syntax Error: ${r}`, {
          source: e,
          positions: [t]
        })
      }
      var wn, kn = r(5968);
      ! function(e) {
        e.QUERY = "QUERY", e.MUTATION = "MUTATION", e.SUBSCRIPTION = "SUBSCRIPTION", e.FIELD = "FIELD", e.FRAGMENT_DEFINITION = "FRAGMENT_DEFINITION", e.FRAGMENT_SPREAD = "FRAGMENT_SPREAD", e.INLINE_FRAGMENT = "INLINE_FRAGMENT", e.VARIABLE_DEFINITION = "VARIABLE_DEFINITION", e.SCHEMA = "SCHEMA", e.SCALAR = "SCALAR", e.OBJECT = "OBJECT", e.FIELD_DEFINITION = "FIELD_DEFINITION", e.ARGUMENT_DEFINITION = "ARGUMENT_DEFINITION", e.INTERFACE = "INTERFACE", e.UNION = "UNION", e.ENUM = "ENUM", e.ENUM_VALUE = "ENUM_VALUE", e.INPUT_OBJECT = "INPUT_OBJECT", e.INPUT_FIELD_DEFINITION = "INPUT_FIELD_DEFINITION"
      }(wn || (wn = {}));
      var Cn, Sn, Nn = r(6572),
        Dn = r(488);
      (Sn = Cn || (Cn = {})).SOF = "<SOF>", Sn.EOF = "<EOF>", Sn.BANG = "!", Sn.DOLLAR = "$", Sn.AMP = "&", Sn.PAREN_L = "(", Sn.PAREN_R = ")", Sn.SPREAD = "...", Sn.COLON = ":", Sn.EQUALS = "=", Sn.AT = "@", Sn.BRACKET_L = "[", Sn.BRACKET_R = "]", Sn.BRACE_L = "{", Sn.PIPE = "|", Sn.BRACE_R = "}", Sn.NAME = "Name", Sn.INT = "Int", Sn.FLOAT = "Float", Sn.STRING = "String", Sn.BLOCK_STRING = "BlockString", Sn.COMMENT = "Comment";
      class xn {
        constructor(e) {
          const t = new kn.En(Cn.SOF, 0, 0, 0, 0);
          this.source = e, this.lastToken = t, this.token = t, this.line = 1, this.lineStart = 0
        }
        get[Symbol.toStringTag]() {
          return "Lexer"
        }
        advance() {
          return this.lastToken = this.token, this.token = this.lookahead()
        }
        lookahead() {
          let e = this.token;
          if (e.kind !== Cn.EOF)
            do {
              if (e.next) e = e.next;
              else {
                const t = Mn(this, e.end);
                e.next = t, t.prev = e, e = t
              }
            } while (e.kind === Cn.COMMENT);
          return e
        }
      }

      function Tn(e) {
        return e >= 0 && e <= 55295 || e >= 57344 && e <= 1114111
      }

      function Rn(e, t) {
        return In(e.charCodeAt(t)) && An(e.charCodeAt(t + 1))
      }

      function In(e) {
        return e >= 55296 && e <= 56319
      }

      function An(e) {
        return e >= 56320 && e <= 57343
      }

      function Pn(e, t) {
        const r = e.source.body.codePointAt(t);
        if (void 0 === r) return Cn.EOF;
        if (r >= 32 && r <= 126) {
          const e = String.fromCodePoint(r);
          return '"' === e ? "'\"'" : `"${e}"`
        }
        return "U+" + r.toString(16).toUpperCase().padStart(4, "0")
      }

      function Fn(e, t, r, n, i) {
        const o = e.line,
          s = 1 + r - e.lineStart;
        return new kn.En(t, r, n, o, s, i)
      }

      function Mn(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t;
        for (; i < n;) {
          const t = r.charCodeAt(i);
          switch (t) {
            case 65279:
            case 9:
            case 32:
            case 44:
              ++i;
              continue;
            case 10:
              ++i, ++e.line, e.lineStart = i;
              continue;
            case 13:
              10 === r.charCodeAt(i + 1) ? i += 2 : ++i, ++e.line, e.lineStart = i;
              continue;
            case 35:
              return Ln(e, i);
            case 33:
              return Fn(e, Cn.BANG, i, i + 1);
            case 36:
              return Fn(e, Cn.DOLLAR, i, i + 1);
            case 38:
              return Fn(e, Cn.AMP, i, i + 1);
            case 40:
              return Fn(e, Cn.PAREN_L, i, i + 1);
            case 41:
              return Fn(e, Cn.PAREN_R, i, i + 1);
            case 46:
              if (46 === r.charCodeAt(i + 1) && 46 === r.charCodeAt(i + 2)) return Fn(e, Cn.SPREAD, i, i + 3);
              break;
            case 58:
              return Fn(e, Cn.COLON, i, i + 1);
            case 61:
              return Fn(e, Cn.EQUALS, i, i + 1);
            case 64:
              return Fn(e, Cn.AT, i, i + 1);
            case 91:
              return Fn(e, Cn.BRACKET_L, i, i + 1);
            case 93:
              return Fn(e, Cn.BRACKET_R, i, i + 1);
            case 123:
              return Fn(e, Cn.BRACE_L, i, i + 1);
            case 124:
              return Fn(e, Cn.PIPE, i, i + 1);
            case 125:
              return Fn(e, Cn.BRACE_R, i, i + 1);
            case 34:
              return 34 === r.charCodeAt(i + 1) && 34 === r.charCodeAt(i + 2) ? Kn(e, i) : jn(e, i)
          }
          if ((0, Dn.o7)(t) || 45 === t) return Qn(e, i, t);
          if ((0, Dn.kt)(t)) return Gn(e, i);
          throw En(e.source, i, 39 === t ? "Unexpected single quote character ('), did you mean to use a double quote (\")?" : Tn(t) || Rn(r, i) ? `Unexpected character: ${Pn(e,i)}.` : `Invalid character: ${Pn(e,i)}.`)
        }
        return Fn(e, Cn.EOF, n, n)
      }

      function Ln(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t + 1;
        for (; i < n;) {
          const e = r.charCodeAt(i);
          if (10 === e || 13 === e) break;
          if (Tn(e)) ++i;
          else {
            if (!Rn(r, i)) break;
            i += 2
          }
        }
        return Fn(e, Cn.COMMENT, t, i, r.slice(t + 1, i))
      }

      function Qn(e, t, r) {
        const n = e.source.body;
        let i = t,
          o = r,
          s = !1;
        if (45 === o && (o = n.charCodeAt(++i)), 48 === o) {
          if (o = n.charCodeAt(++i), (0, Dn.o7)(o)) throw En(e.source, i, `Invalid number, unexpected digit after 0: ${Pn(e,i)}.`)
        } else i = qn(e, i, o), o = n.charCodeAt(i);
        if (46 === o && (s = !0, o = n.charCodeAt(++i), i = qn(e, i, o), o = n.charCodeAt(i)), 69 !== o && 101 !== o || (s = !0, o = n.charCodeAt(++i), 43 !== o && 45 !== o || (o = n.charCodeAt(++i)), i = qn(e, i, o), o = n.charCodeAt(i)), 46 === o || (0, Dn.kt)(o)) throw En(e.source, i, `Invalid number, expected digit but got: ${Pn(e,i)}.`);
        return Fn(e, s ? Cn.FLOAT : Cn.INT, t, i, n.slice(t, i))
      }

      function qn(e, t, r) {
        if (!(0, Dn.o7)(r)) throw En(e.source, t, `Invalid number, expected digit but got: ${Pn(e,t)}.`);
        const n = e.source.body;
        let i = t + 1;
        for (;
          (0, Dn.o7)(n.charCodeAt(i));) ++i;
        return i
      }

      function jn(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t + 1,
          o = i,
          s = "";
        for (; i < n;) {
          const n = r.charCodeAt(i);
          if (34 === n) return s += r.slice(o, i), Fn(e, Cn.STRING, t, i + 1, s);
          if (92 !== n) {
            if (10 === n || 13 === n) break;
            if (Tn(n)) ++i;
            else {
              if (!Rn(r, i)) throw En(e.source, i, `Invalid character within String: ${Pn(e,i)}.`);
              i += 2
            }
          } else {
            s += r.slice(o, i);
            const t = 117 === r.charCodeAt(i + 1) ? 123 === r.charCodeAt(i + 2) ? Vn(e, i) : Un(e, i) : Wn(e, i);
            s += t.value, i += t.size, o = i
          }
        }
        throw En(e.source, i, "Unterminated string.")
      }

      function Vn(e, t) {
        const r = e.source.body;
        let n = 0,
          i = 3;
        for (; i < 12;) {
          const e = r.charCodeAt(t + i++);
          if (125 === e) {
            if (i < 5 || !Tn(n)) break;
            return {
              value: String.fromCodePoint(n),
              size: i
            }
          }
          if (n = n << 4 | Bn(e), n < 0) break
        }
        throw En(e.source, t, `Invalid Unicode escape sequence: "${r.slice(t,t+i)}".`)
      }

      function Un(e, t) {
        const r = e.source.body,
          n = zn(r, t + 2);
        if (Tn(n)) return {
          value: String.fromCodePoint(n),
          size: 6
        };
        if (In(n) && 92 === r.charCodeAt(t + 6) && 117 === r.charCodeAt(t + 7)) {
          const e = zn(r, t + 8);
          if (An(e)) return {
            value: String.fromCodePoint(n, e),
            size: 12
          }
        }
        throw En(e.source, t, `Invalid Unicode escape sequence: "${r.slice(t,t+6)}".`)
      }

      function zn(e, t) {
        return Bn(e.charCodeAt(t)) << 12 | Bn(e.charCodeAt(t + 1)) << 8 | Bn(e.charCodeAt(t + 2)) << 4 | Bn(e.charCodeAt(t + 3))
      }

      function Bn(e) {
        return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 55 : e >= 97 && e <= 102 ? e - 87 : -1
      }

      function Wn(e, t) {
        const r = e.source.body;
        switch (r.charCodeAt(t + 1)) {
          case 34:
            return {
              value: '"', size: 2
            };
          case 92:
            return {
              value: "\\", size: 2
            };
          case 47:
            return {
              value: "/", size: 2
            };
          case 98:
            return {
              value: "\b", size: 2
            };
          case 102:
            return {
              value: "\f", size: 2
            };
          case 110:
            return {
              value: "\n", size: 2
            };
          case 114:
            return {
              value: "\r", size: 2
            };
          case 116:
            return {
              value: "\t", size: 2
            }
        }
        throw En(e.source, t, `Invalid character escape sequence: "${r.slice(t,t+2)}".`)
      }

      function Kn(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = e.lineStart,
          o = t + 3,
          s = o,
          a = "";
        const c = [];
        for (; o < n;) {
          const n = r.charCodeAt(o);
          if (34 === n && 34 === r.charCodeAt(o + 1) && 34 === r.charCodeAt(o + 2)) {
            a += r.slice(s, o), c.push(a);
            const n = Fn(e, Cn.BLOCK_STRING, t, o + 3, (0, Nn.G_)(c).join("\n"));
            return e.line += c.length - 1, e.lineStart = i, n
          }
          if (92 !== n || 34 !== r.charCodeAt(o + 1) || 34 !== r.charCodeAt(o + 2) || 34 !== r.charCodeAt(o + 3))
            if (10 !== n && 13 !== n)
              if (Tn(n)) ++o;
              else {
                if (!Rn(r, o)) throw En(e.source, o, `Invalid character within String: ${Pn(e,o)}.`);
                o += 2
              }
          else a += r.slice(s, o), c.push(a), 13 === n && 10 === r.charCodeAt(o + 1) ? o += 2 : ++o, a = "", s = o, i = o;
          else a += r.slice(s, o), s = o + 1, o += 4
        }
        throw En(e.source, o, "Unterminated string.")
      }

      function Gn(e, t) {
        const r = e.source.body,
          n = r.length;
        let i = t + 1;
        for (; i < n;) {
          const e = r.charCodeAt(i);
          if (!(0, Dn.Ub)(e)) break;
          ++i
        }
        return Fn(e, Cn.NAME, t, i, r.slice(t, i))
      }
      var Hn = r(7680);
      class Yn {
        constructor(e, t = {}) {
          const r = (0, Hn.k)(e) ? e : new Hn.A(e);
          this._lexer = new xn(r), this._options = t, this._tokenCounter = 0
        }
        parseName() {
          const e = this.expectToken(Cn.NAME);
          return this.node(e, {
            kind: Ce.U.NAME,
            value: e.value
          })
        }
        parseDocument() {
          return this.node(this._lexer.token, {
            kind: Ce.U.DOCUMENT,
            definitions: this.many(Cn.SOF, this.parseDefinition, Cn.EOF)
          })
        }
        parseDefinition() {
          if (this.peek(Cn.BRACE_L)) return this.parseOperationDefinition();
          const e = this.peekDescription(),
            t = e ? this._lexer.lookahead() : this._lexer.token;
          if (t.kind === Cn.NAME) {
            switch (t.value) {
              case "schema":
                return this.parseSchemaDefinition();
              case "scalar":
                return this.parseScalarTypeDefinition();
              case "type":
                return this.parseObjectTypeDefinition();
              case "interface":
                return this.parseInterfaceTypeDefinition();
              case "union":
                return this.parseUnionTypeDefinition();
              case "enum":
                return this.parseEnumTypeDefinition();
              case "input":
                return this.parseInputObjectTypeDefinition();
              case "directive":
                return this.parseDirectiveDefinition()
            }
            if (e) throw En(this._lexer.source, this._lexer.token.start, "Unexpected description, descriptions are supported only on type definitions.");
            switch (t.value) {
              case "query":
              case "mutation":
              case "subscription":
                return this.parseOperationDefinition();
              case "fragment":
                return this.parseFragmentDefinition();
              case "extend":
                return this.parseTypeSystemExtension()
            }
          }
          throw this.unexpected(t)
        }
        parseOperationDefinition() {
          const e = this._lexer.token;
          if (this.peek(Cn.BRACE_L)) return this.node(e, {
            kind: Ce.U.OPERATION_DEFINITION,
            operation: kn.Gs.QUERY,
            name: void 0,
            variableDefinitions: [],
            directives: [],
            selectionSet: this.parseSelectionSet()
          });
          const t = this.parseOperationType();
          let r;
          return this.peek(Cn.NAME) && (r = this.parseName()), this.node(e, {
            kind: Ce.U.OPERATION_DEFINITION,
            operation: t,
            name: r,
            variableDefinitions: this.parseVariableDefinitions(),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseOperationType() {
          const e = this.expectToken(Cn.NAME);
          switch (e.value) {
            case "query":
              return kn.Gs.QUERY;
            case "mutation":
              return kn.Gs.MUTATION;
            case "subscription":
              return kn.Gs.SUBSCRIPTION
          }
          throw this.unexpected(e)
        }
        parseVariableDefinitions() {
          return this.optionalMany(Cn.PAREN_L, this.parseVariableDefinition, Cn.PAREN_R)
        }
        parseVariableDefinition() {
          return this.node(this._lexer.token, {
            kind: Ce.U.VARIABLE_DEFINITION,
            variable: this.parseVariable(),
            type: (this.expectToken(Cn.COLON), this.parseTypeReference()),
            defaultValue: this.expectOptionalToken(Cn.EQUALS) ? this.parseConstValueLiteral() : void 0,
            directives: this.parseConstDirectives()
          })
        }
        parseVariable() {
          const e = this._lexer.token;
          return this.expectToken(Cn.DOLLAR), this.node(e, {
            kind: Ce.U.VARIABLE,
            name: this.parseName()
          })
        }
        parseSelectionSet() {
          return this.node(this._lexer.token, {
            kind: Ce.U.SELECTION_SET,
            selections: this.many(Cn.BRACE_L, this.parseSelection, Cn.BRACE_R)
          })
        }
        parseSelection() {
          return this.peek(Cn.SPREAD) ? this.parseFragment() : this.parseField()
        }
        parseField() {
          const e = this._lexer.token,
            t = this.parseName();
          let r, n;
          return this.expectOptionalToken(Cn.COLON) ? (r = t, n = this.parseName()) : n = t, this.node(e, {
            kind: Ce.U.FIELD,
            alias: r,
            name: n,
            arguments: this.parseArguments(!1),
            directives: this.parseDirectives(!1),
            selectionSet: this.peek(Cn.BRACE_L) ? this.parseSelectionSet() : void 0
          })
        }
        parseArguments(e) {
          const t = e ? this.parseConstArgument : this.parseArgument;
          return this.optionalMany(Cn.PAREN_L, t, Cn.PAREN_R)
        }
        parseArgument(e = !1) {
          const t = this._lexer.token,
            r = this.parseName();
          return this.expectToken(Cn.COLON), this.node(t, {
            kind: Ce.U.ARGUMENT,
            name: r,
            value: this.parseValueLiteral(e)
          })
        }
        parseConstArgument() {
          return this.parseArgument(!0)
        }
        parseFragment() {
          const e = this._lexer.token;
          this.expectToken(Cn.SPREAD);
          const t = this.expectOptionalKeyword("on");
          return !t && this.peek(Cn.NAME) ? this.node(e, {
            kind: Ce.U.FRAGMENT_SPREAD,
            name: this.parseFragmentName(),
            directives: this.parseDirectives(!1)
          }) : this.node(e, {
            kind: Ce.U.INLINE_FRAGMENT,
            typeCondition: t ? this.parseNamedType() : void 0,
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseFragmentDefinition() {
          const e = this._lexer.token;
          return this.expectKeyword("fragment"), !0 === this._options.allowLegacyFragmentVariables ? this.node(e, {
            kind: Ce.U.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            variableDefinitions: this.parseVariableDefinitions(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          }) : this.node(e, {
            kind: Ce.U.FRAGMENT_DEFINITION,
            name: this.parseFragmentName(),
            typeCondition: (this.expectKeyword("on"), this.parseNamedType()),
            directives: this.parseDirectives(!1),
            selectionSet: this.parseSelectionSet()
          })
        }
        parseFragmentName() {
          if ("on" === this._lexer.token.value) throw this.unexpected();
          return this.parseName()
        }
        parseValueLiteral(e) {
          const t = this._lexer.token;
          switch (t.kind) {
            case Cn.BRACKET_L:
              return this.parseList(e);
            case Cn.BRACE_L:
              return this.parseObject(e);
            case Cn.INT:
              return this.advanceLexer(), this.node(t, {
                kind: Ce.U.INT,
                value: t.value
              });
            case Cn.FLOAT:
              return this.advanceLexer(), this.node(t, {
                kind: Ce.U.FLOAT,
                value: t.value
              });
            case Cn.STRING:
            case Cn.BLOCK_STRING:
              return this.parseStringLiteral();
            case Cn.NAME:
              switch (this.advanceLexer(), t.value) {
                case "true":
                  return this.node(t, {
                    kind: Ce.U.BOOLEAN,
                    value: !0
                  });
                case "false":
                  return this.node(t, {
                    kind: Ce.U.BOOLEAN,
                    value: !1
                  });
                case "null":
                  return this.node(t, {
                    kind: Ce.U.NULL
                  });
                default:
                  return this.node(t, {
                    kind: Ce.U.ENUM,
                    value: t.value
                  })
              }
            case Cn.DOLLAR:
              if (e) {
                if (this.expectToken(Cn.DOLLAR), this._lexer.token.kind === Cn.NAME) {
                  const e = this._lexer.token.value;
                  throw En(this._lexer.source, t.start, `Unexpected variable "$${e}" in constant value.`)
                }
                throw this.unexpected(t)
              }
              return this.parseVariable();
            default:
              throw this.unexpected()
          }
        }
        parseConstValueLiteral() {
          return this.parseValueLiteral(!0)
        }
        parseStringLiteral() {
          const e = this._lexer.token;
          return this.advanceLexer(), this.node(e, {
            kind: Ce.U.STRING,
            value: e.value,
            block: e.kind === Cn.BLOCK_STRING
          })
        }
        parseList(e) {
          return this.node(this._lexer.token, {
            kind: Ce.U.LIST,
            values: this.any(Cn.BRACKET_L, (() => this.parseValueLiteral(e)), Cn.BRACKET_R)
          })
        }
        parseObject(e) {
          return this.node(this._lexer.token, {
            kind: Ce.U.OBJECT,
            fields: this.any(Cn.BRACE_L, (() => this.parseObjectField(e)), Cn.BRACE_R)
          })
        }
        parseObjectField(e) {
          const t = this._lexer.token,
            r = this.parseName();
          return this.expectToken(Cn.COLON), this.node(t, {
            kind: Ce.U.OBJECT_FIELD,
            name: r,
            value: this.parseValueLiteral(e)
          })
        }
        parseDirectives(e) {
          const t = [];
          for (; this.peek(Cn.AT);) t.push(this.parseDirective(e));
          return t
        }
        parseConstDirectives() {
          return this.parseDirectives(!0)
        }
        parseDirective(e) {
          const t = this._lexer.token;
          return this.expectToken(Cn.AT), this.node(t, {
            kind: Ce.U.DIRECTIVE,
            name: this.parseName(),
            arguments: this.parseArguments(e)
          })
        }
        parseTypeReference() {
          const e = this._lexer.token;
          let t;
          if (this.expectOptionalToken(Cn.BRACKET_L)) {
            const r = this.parseTypeReference();
            this.expectToken(Cn.BRACKET_R), t = this.node(e, {
              kind: Ce.U.LIST_TYPE,
              type: r
            })
          } else t = this.parseNamedType();
          return this.expectOptionalToken(Cn.BANG) ? this.node(e, {
            kind: Ce.U.NON_NULL_TYPE,
            type: t
          }) : t
        }
        parseNamedType() {
          return this.node(this._lexer.token, {
            kind: Ce.U.NAMED_TYPE,
            name: this.parseName()
          })
        }
        peekDescription() {
          return this.peek(Cn.STRING) || this.peek(Cn.BLOCK_STRING)
        }
        parseDescription() {
          if (this.peekDescription()) return this.parseStringLiteral()
        }
        parseSchemaDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("schema");
          const r = this.parseConstDirectives(),
            n = this.many(Cn.BRACE_L, this.parseOperationTypeDefinition, Cn.BRACE_R);
          return this.node(e, {
            kind: Ce.U.SCHEMA_DEFINITION,
            description: t,
            directives: r,
            operationTypes: n
          })
        }
        parseOperationTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseOperationType();
          this.expectToken(Cn.COLON);
          const r = this.parseNamedType();
          return this.node(e, {
            kind: Ce.U.OPERATION_TYPE_DEFINITION,
            operation: t,
            type: r
          })
        }
        parseScalarTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("scalar");
          const r = this.parseName(),
            n = this.parseConstDirectives();
          return this.node(e, {
            kind: Ce.U.SCALAR_TYPE_DEFINITION,
            description: t,
            name: r,
            directives: n
          })
        }
        parseObjectTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("type");
          const r = this.parseName(),
            n = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            o = this.parseFieldsDefinition();
          return this.node(e, {
            kind: Ce.U.OBJECT_TYPE_DEFINITION,
            description: t,
            name: r,
            interfaces: n,
            directives: i,
            fields: o
          })
        }
        parseImplementsInterfaces() {
          return this.expectOptionalKeyword("implements") ? this.delimitedMany(Cn.AMP, this.parseNamedType) : []
        }
        parseFieldsDefinition() {
          return this.optionalMany(Cn.BRACE_L, this.parseFieldDefinition, Cn.BRACE_R)
        }
        parseFieldDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            r = this.parseName(),
            n = this.parseArgumentDefs();
          this.expectToken(Cn.COLON);
          const i = this.parseTypeReference(),
            o = this.parseConstDirectives();
          return this.node(e, {
            kind: Ce.U.FIELD_DEFINITION,
            description: t,
            name: r,
            arguments: n,
            type: i,
            directives: o
          })
        }
        parseArgumentDefs() {
          return this.optionalMany(Cn.PAREN_L, this.parseInputValueDef, Cn.PAREN_R)
        }
        parseInputValueDef() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            r = this.parseName();
          this.expectToken(Cn.COLON);
          const n = this.parseTypeReference();
          let i;
          this.expectOptionalToken(Cn.EQUALS) && (i = this.parseConstValueLiteral());
          const o = this.parseConstDirectives();
          return this.node(e, {
            kind: Ce.U.INPUT_VALUE_DEFINITION,
            description: t,
            name: r,
            type: n,
            defaultValue: i,
            directives: o
          })
        }
        parseInterfaceTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("interface");
          const r = this.parseName(),
            n = this.parseImplementsInterfaces(),
            i = this.parseConstDirectives(),
            o = this.parseFieldsDefinition();
          return this.node(e, {
            kind: Ce.U.INTERFACE_TYPE_DEFINITION,
            description: t,
            name: r,
            interfaces: n,
            directives: i,
            fields: o
          })
        }
        parseUnionTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("union");
          const r = this.parseName(),
            n = this.parseConstDirectives(),
            i = this.parseUnionMemberTypes();
          return this.node(e, {
            kind: Ce.U.UNION_TYPE_DEFINITION,
            description: t,
            name: r,
            directives: n,
            types: i
          })
        }
        parseUnionMemberTypes() {
          return this.expectOptionalToken(Cn.EQUALS) ? this.delimitedMany(Cn.PIPE, this.parseNamedType) : []
        }
        parseEnumTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("enum");
          const r = this.parseName(),
            n = this.parseConstDirectives(),
            i = this.parseEnumValuesDefinition();
          return this.node(e, {
            kind: Ce.U.ENUM_TYPE_DEFINITION,
            description: t,
            name: r,
            directives: n,
            values: i
          })
        }
        parseEnumValuesDefinition() {
          return this.optionalMany(Cn.BRACE_L, this.parseEnumValueDefinition, Cn.BRACE_R)
        }
        parseEnumValueDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription(),
            r = this.parseEnumValueName(),
            n = this.parseConstDirectives();
          return this.node(e, {
            kind: Ce.U.ENUM_VALUE_DEFINITION,
            description: t,
            name: r,
            directives: n
          })
        }
        parseEnumValueName() {
          if ("true" === this._lexer.token.value || "false" === this._lexer.token.value || "null" === this._lexer.token.value) throw En(this._lexer.source, this._lexer.token.start, `${Jn(this._lexer.token)} is reserved and cannot be used for an enum value.`);
          return this.parseName()
        }
        parseInputObjectTypeDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("input");
          const r = this.parseName(),
            n = this.parseConstDirectives(),
            i = this.parseInputFieldsDefinition();
          return this.node(e, {
            kind: Ce.U.INPUT_OBJECT_TYPE_DEFINITION,
            description: t,
            name: r,
            directives: n,
            fields: i
          })
        }
        parseInputFieldsDefinition() {
          return this.optionalMany(Cn.BRACE_L, this.parseInputValueDef, Cn.BRACE_R)
        }
        parseTypeSystemExtension() {
          const e = this._lexer.lookahead();
          if (e.kind === Cn.NAME) switch (e.value) {
            case "schema":
              return this.parseSchemaExtension();
            case "scalar":
              return this.parseScalarTypeExtension();
            case "type":
              return this.parseObjectTypeExtension();
            case "interface":
              return this.parseInterfaceTypeExtension();
            case "union":
              return this.parseUnionTypeExtension();
            case "enum":
              return this.parseEnumTypeExtension();
            case "input":
              return this.parseInputObjectTypeExtension()
          }
          throw this.unexpected(e)
        }
        parseSchemaExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("schema");
          const t = this.parseConstDirectives(),
            r = this.optionalMany(Cn.BRACE_L, this.parseOperationTypeDefinition, Cn.BRACE_R);
          if (0 === t.length && 0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: Ce.U.SCHEMA_EXTENSION,
            directives: t,
            operationTypes: r
          })
        }
        parseScalarTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("scalar");
          const t = this.parseName(),
            r = this.parseConstDirectives();
          if (0 === r.length) throw this.unexpected();
          return this.node(e, {
            kind: Ce.U.SCALAR_TYPE_EXTENSION,
            name: t,
            directives: r
          })
        }
        parseObjectTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("type");
          const t = this.parseName(),
            r = this.parseImplementsInterfaces(),
            n = this.parseConstDirectives(),
            i = this.parseFieldsDefinition();
          if (0 === r.length && 0 === n.length && 0 === i.length) throw this.unexpected();
          return this.node(e, {
            kind: Ce.U.OBJECT_TYPE_EXTENSION,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          })
        }
        parseInterfaceTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("interface");
          const t = this.parseName(),
            r = this.parseImplementsInterfaces(),
            n = this.parseConstDirectives(),
            i = this.parseFieldsDefinition();
          if (0 === r.length && 0 === n.length && 0 === i.length) throw this.unexpected();
          return this.node(e, {
            kind: Ce.U.INTERFACE_TYPE_EXTENSION,
            name: t,
            interfaces: r,
            directives: n,
            fields: i
          })
        }
        parseUnionTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("union");
          const t = this.parseName(),
            r = this.parseConstDirectives(),
            n = this.parseUnionMemberTypes();
          if (0 === r.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: Ce.U.UNION_TYPE_EXTENSION,
            name: t,
            directives: r,
            types: n
          })
        }
        parseEnumTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("enum");
          const t = this.parseName(),
            r = this.parseConstDirectives(),
            n = this.parseEnumValuesDefinition();
          if (0 === r.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: Ce.U.ENUM_TYPE_EXTENSION,
            name: t,
            directives: r,
            values: n
          })
        }
        parseInputObjectTypeExtension() {
          const e = this._lexer.token;
          this.expectKeyword("extend"), this.expectKeyword("input");
          const t = this.parseName(),
            r = this.parseConstDirectives(),
            n = this.parseInputFieldsDefinition();
          if (0 === r.length && 0 === n.length) throw this.unexpected();
          return this.node(e, {
            kind: Ce.U.INPUT_OBJECT_TYPE_EXTENSION,
            name: t,
            directives: r,
            fields: n
          })
        }
        parseDirectiveDefinition() {
          const e = this._lexer.token,
            t = this.parseDescription();
          this.expectKeyword("directive"), this.expectToken(Cn.AT);
          const r = this.parseName(),
            n = this.parseArgumentDefs(),
            i = this.expectOptionalKeyword("repeatable");
          this.expectKeyword("on");
          const o = this.parseDirectiveLocations();
          return this.node(e, {
            kind: Ce.U.DIRECTIVE_DEFINITION,
            description: t,
            name: r,
            arguments: n,
            repeatable: i,
            locations: o
          })
        }
        parseDirectiveLocations() {
          return this.delimitedMany(Cn.PIPE, this.parseDirectiveLocation)
        }
        parseDirectiveLocation() {
          const e = this._lexer.token,
            t = this.parseName();
          if (Object.prototype.hasOwnProperty.call(wn, t.value)) return t;
          throw this.unexpected(e)
        }
        node(e, t) {
          return !0 !== this._options.noLocation && (t.loc = new kn.oB(e, this._lexer.lastToken, this._lexer.source)), t
        }
        peek(e) {
          return this._lexer.token.kind === e
        }
        expectToken(e) {
          const t = this._lexer.token;
          if (t.kind === e) return this.advanceLexer(), t;
          throw En(this._lexer.source, t.start, `Expected ${$n(e)}, found ${Jn(t)}.`)
        }
        expectOptionalToken(e) {
          return this._lexer.token.kind === e && (this.advanceLexer(), !0)
        }
        expectKeyword(e) {
          const t = this._lexer.token;
          if (t.kind !== Cn.NAME || t.value !== e) throw En(this._lexer.source, t.start, `Expected "${e}", found ${Jn(t)}.`);
          this.advanceLexer()
        }
        expectOptionalKeyword(e) {
          const t = this._lexer.token;
          return t.kind === Cn.NAME && t.value === e && (this.advanceLexer(), !0)
        }
        unexpected(e) {
          const t = null != e ? e : this._lexer.token;
          return En(this._lexer.source, t.start, `Unexpected ${Jn(t)}.`)
        }
        any(e, t, r) {
          this.expectToken(e);
          const n = [];
          for (; !this.expectOptionalToken(r);) n.push(t.call(this));
          return n
        }
        optionalMany(e, t, r) {
          if (this.expectOptionalToken(e)) {
            const e = [];
            do {
              e.push(t.call(this))
            } while (!this.expectOptionalToken(r));
            return e
          }
          return []
        }
        many(e, t, r) {
          this.expectToken(e);
          const n = [];
          do {
            n.push(t.call(this))
          } while (!this.expectOptionalToken(r));
          return n
        }
        delimitedMany(e, t) {
          this.expectOptionalToken(e);
          const r = [];
          do {
            r.push(t.call(this))
          } while (this.expectOptionalToken(e));
          return r
        }
        advanceLexer() {
          const {
            maxTokens: e
          } = this._options, t = this._lexer.advance();
          if (void 0 !== e && t.kind !== Cn.EOF && (++this._tokenCounter, this._tokenCounter > e)) throw En(this._lexer.source, t.start, `Document contains more that ${e} tokens. Parsing aborted.`)
        }
      }

      function Jn(e) {
        const t = e.value;
        return $n(e.kind) + (null != t ? ` "${t}"` : "")
      }

      function $n(e) {
        return function(e) {
          return e === Cn.BANG || e === Cn.DOLLAR || e === Cn.AMP || e === Cn.PAREN_L || e === Cn.PAREN_R || e === Cn.SPREAD || e === Cn.COLON || e === Cn.EQUALS || e === Cn.AT || e === Cn.BRACKET_L || e === Cn.BRACKET_R || e === Cn.BRACE_L || e === Cn.PIPE || e === Cn.BRACE_R
        }(e) ? `"${e}"` : e
      }
      var Xn = new Map,
        Zn = new Map,
        ei = !0,
        ti = !1;

      function ri(e) {
        return e.replace(/[\s,]+/g, " ").trim()
      }

      function ni(e) {
        var t = ri(e);
        if (!Xn.has(t)) {
          var r = function(e, t) {
            return new Yn(e, t).parseDocument()
          }(e, {
            experimentalFragmentVariables: ti,
            allowLegacyFragmentVariables: ti
          });
          if (!r || "Document" !== r.kind) throw new Error("Not a valid GraphQL document.");
          Xn.set(t, function(e) {
            var t = new Set(e.definitions);
            t.forEach((function(e) {
              e.loc && delete e.loc, Object.keys(e).forEach((function(r) {
                var n = e[r];
                n && "object" == typeof n && t.add(n)
              }))
            }));
            var r = e.loc;
            return r && (delete r.startToken, delete r.endToken), e
          }(function(e) {
            var t = new Set,
              r = [];
            return e.definitions.forEach((function(e) {
              if ("FragmentDefinition" === e.kind) {
                var n = e.name.value,
                  i = ri((s = e.loc).source.body.substring(s.start, s.end)),
                  o = Zn.get(n);
                o && !o.has(i) ? ei && console.warn("Warning: fragment with name " + n + " already exists.\ngraphql-tag enforces all fragment names across your application to be unique; read more about\nthis in the docs: http://dev.apollodata.com/core/fragments.html#unique-names") : o || Zn.set(n, o = new Set), o.add(i), t.has(i) || (t.add(i), r.push(e))
              } else r.push(e);
              var s
            })), (0, i.C3)((0, i.C3)({}, e), {
              definitions: r
            })
          }(r)))
        }
        return Xn.get(t)
      }

      function ii(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        "string" == typeof e && (e = [e]);
        var n = e[0];
        return t.forEach((function(t, r) {
          t && "Document" === t.kind ? n += t.loc.source.body : n += t, n += e[r + 1]
        })), ni(n)
      }

      function oi() {
        Xn.clear(), Zn.clear()
      }

      function si() {
        ei = !1
      }

      function ai() {
        ti = !0
      }

      function ci() {
        ti = !1
      }
      var ui, li = ii,
        hi = oi,
        pi = si,
        fi = ai,
        di = ci;
      (ui = ii || (ii = {})).gql = li, ui.resetCaches = hi, ui.disableFragmentWarnings = pi, ui.enableExperimentalFragmentVariables = fi, ui.disableExperimentalFragmentVariables = di, ii.default = ii, (0, dn.kP)(n.al ? "log" : "silent");
      var vi = r(1664),
        yi = r.t(vi, 2),
        mi = y ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";

      function gi() {
        var e = vi.createContext[mi];
        return e || (Object.defineProperty(vi.createContext, mi, {
          value: e = vi.createContext({}),
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), e.displayName = "ApolloContext"), e
      }
      var bi = function(e) {
          var t = e.client,
            r = e.children,
            i = gi();
          return vi.createElement(i.Consumer, null, (function(e) {
            return void 0 === e && (e = {}), t && e.client !== t && (e = Object.assign({}, e, {
              client: t
            })), __DEV__ ? (0, n.ON)(e.client, 'ApolloProvider was not passed a client instance. Make sure you pass in your client via the "client" prop.') : (0, n.ON)(e.client, 29), vi.createElement(i.Provider, {
              value: e
            }, r)
          }))
        },
        _i = function(e) {
          var t = gi();
          return vi.createElement(t.Consumer, null, (function(t) {
            return __DEV__ ? (0, n.ON)(t && t.client, 'Could not find "client" in the context of ApolloConsumer. Wrap the root component in an <ApolloProvider>.') : (0, n.ON)(t && t.client, 28), e.children(t.client)
          }))
        };

      function Oi(e) {
        var t = (0, vi.useContext)(gi()),
          r = e || t.client;
        return __DEV__ ? (0, n.ON)(!!r, 'Could not find "client" in the context or passed in as an option. Wrap the root component in an <ApolloProvider>, or pass an ApolloClient instance in via options.') : (0, n.ON)(!!r, 32), r
      }
      var Ei, wi = !1,
        ki = yi.useSyncExternalStore || function(e, t, r) {
          var i = t();
          __DEV__ && !wi && i !== t() && (wi = !0, __DEV__ && n.ON.error("The result of getSnapshot should be cached to avoid an infinite loop"));
          var o = vi.useState({
              inst: {
                value: i,
                getSnapshot: t
              }
            }),
            s = o[0].inst,
            a = o[1];
          return _ ? vi.useLayoutEffect((function() {
            Object.assign(s, {
              value: i,
              getSnapshot: t
            }), Ci(s) && a({
              inst: s
            })
          }), [e, i, t]) : Object.assign(s, {
            value: i,
            getSnapshot: t
          }), vi.useEffect((function() {
            return Ci(s) && a({
              inst: s
            }), e((function() {
              Ci(s) && a({
                inst: s
              })
            }))
          }), [e]), i
        };

      function Ci(e) {
        var t = e.value,
          r = e.getSnapshot;
        try {
          return t !== r()
        } catch (e) {
          return !0
        }
      }! function(e) {
        e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
      }(Ei || (Ei = {}));
      var Si = new Map;

      function Ni(e) {
        var t;
        switch (e) {
          case Ei.Query:
            t = "Query";
            break;
          case Ei.Mutation:
            t = "Mutation";
            break;
          case Ei.Subscription:
            t = "Subscription"
        }
        return t
      }

      function Di(e) {
        var t, r, i = Si.get(e);
        if (i) return i;
        __DEV__ ? (0, n.ON)(!!e && !!e.kind, "Argument of ".concat(e, " passed to parser was not a valid GraphQL ") + "DocumentNode. You may need to use 'graphql-tag' or another method to convert your operation into a document") : (0, n.ON)(!!e && !!e.kind, 33);
        for (var o = [], s = [], a = [], c = [], u = 0, l = e.definitions; u < l.length; u++) {
          var h = l[u];
          if ("FragmentDefinition" !== h.kind) {
            if ("OperationDefinition" === h.kind) switch (h.operation) {
              case "query":
                s.push(h);
                break;
              case "mutation":
                a.push(h);
                break;
              case "subscription":
                c.push(h)
            }
          } else o.push(h)
        }
        __DEV__ ? (0, n.ON)(!o.length || s.length || a.length || c.length, "Passing only a fragment to 'graphql' is not yet supported. You must include a query, subscription or mutation as well") : (0, n.ON)(!o.length || s.length || a.length || c.length, 34), __DEV__ ? (0, n.ON)(s.length + a.length + c.length <= 1, "react-apollo only supports a query, subscription, or a mutation per HOC. " + "".concat(e, " had ").concat(s.length, " queries, ").concat(c.length, " ") + "subscriptions and ".concat(a.length, " mutations. ") + "You can use 'compose' to join multiple operation types to a component") : (0, n.ON)(s.length + a.length + c.length <= 1, 35), r = s.length ? Ei.Query : Ei.Mutation, s.length || a.length || (r = Ei.Subscription);
        var p = s.length ? s : a.length ? a : c;
        __DEV__ ? (0, n.ON)(1 === p.length, "react-apollo only supports one definition per HOC. ".concat(e, " had ") + "".concat(p.length, " definitions. ") + "You can use 'compose' to join multiple operation types to a component") : (0, n.ON)(1 === p.length, 36);
        var f = p[0];
        t = f.variableDefinitions || [];
        var d = {
          name: f.name && "Name" === f.name.kind ? f.name.value : "data",
          type: r,
          variables: t
        };
        return Si.set(e, d), d
      }

      function xi(e, t) {
        var r = Di(e),
          i = Ni(t),
          o = Ni(r.type);
        __DEV__ ? (0, n.ON)(r.type === t, "Running a ".concat(i, " requires a graphql ") + "".concat(i, ", but a ").concat(o, " was used instead.")) : (0, n.ON)(r.type === t, 37)
      }
      var Ti = Object.prototype.hasOwnProperty;

      function Ri(e, t) {
        return void 0 === t && (t = Object.create(null)), Ii(Oi(t.client), e).useQuery(t)
      }

      function Ii(e, t) {
        var r = (0, vi.useRef)();
        r.current && e === r.current.client && t === r.current.query || (r.current = new Ai(e, t, r.current));
        var n = r.current,
          i = (0, vi.useState)(0),
          o = (i[0], i[1]);
        return n.forceUpdate = function() {
          o((function(e) {
            return e + 1
          }))
        }, n
      }
      var Ai = function() {
          function e(e, t, r) {
            this.client = e, this.query = t, this.ssrDisabledResult = ur({
              loading: !0,
              data: void 0,
              error: void 0,
              networkStatus: Ve.loading
            }), this.skipStandbyResult = ur({
              loading: !1,
              data: void 0,
              error: void 0,
              networkStatus: Ve.ready
            }), this.toQueryResultCache = new(d ? WeakMap : Map), xi(t, Ei.Query);
            var n = r && r.result,
              i = n && n.data;
            i && (this.previousData = i)
          }
          return e.prototype.forceUpdate = function() {
            __DEV__ && n.ON.warn("Calling default no-op implementation of InternalState#forceUpdate")
          }, e.prototype.executeQuery = function(e) {
            var t, r = this;
            e.query && Object.assign(this, {
              query: e.query
            }), this.watchQueryOptions = this.createWatchQueryOptions(this.queryHookOptions = e);
            var n = this.observable.reobserveAsConcast(this.getObsQueryOptions());
            return this.previousData = (null === (t = this.result) || void 0 === t ? void 0 : t.data) || this.previousData, this.result = void 0, this.forceUpdate(), new Promise((function(e) {
              var t;
              n.subscribe({
                next: function(e) {
                  t = e
                },
                error: function() {
                  e(r.toQueryResult(r.observable.getCurrentResult()))
                },
                complete: function() {
                  e(r.toQueryResult(t))
                }
              })
            }))
          }, e.prototype.useQuery = function(e) {
            var t = this;
            this.renderPromises = (0, vi.useContext)(gi()).renderPromises, this.useOptions(e);
            var r = this.useObservableQuery(),
              n = ki((0, vi.useCallback)((function() {
                if (t.renderPromises) return function() {};
                var e = function() {
                    var e = t.result,
                      n = r.getCurrentResult();
                    e && e.loading === n.loading && e.networkStatus === n.networkStatus && oe(e.data, n.data) || t.setResult(n)
                  },
                  n = function(o) {
                    var s = r.last;
                    i.unsubscribe();
                    try {
                      r.resetLastResults(), i = r.subscribe(e, n)
                    } finally {
                      r.last = s
                    }
                    if (!Ti.call(o, "graphQLErrors")) throw o;
                    var a = t.result;
                    (!a || a && a.loading || !oe(o, a.error)) && t.setResult({
                      data: a && a.data,
                      error: o,
                      loading: !1,
                      networkStatus: Ve.error
                    })
                  },
                  i = r.subscribe(e, n);
                return function() {
                  return setTimeout((function() {
                    return i.unsubscribe()
                  }))
                }
              }), [r, this.renderPromises, this.client.disableNetworkFetches]), (function() {
                return t.getCurrentResult()
              }), (function() {
                return t.getCurrentResult()
              }));
            return this.unsafeHandlePartialRefetch(n), this.toQueryResult(n)
          }, e.prototype.useOptions = function(t) {
            var r, n = this.createWatchQueryOptions(this.queryHookOptions = t),
              i = this.watchQueryOptions;
            oe(n, i) || (this.watchQueryOptions = n, i && this.observable && (this.observable.reobserve(this.getObsQueryOptions()), this.previousData = (null === (r = this.result) || void 0 === r ? void 0 : r.data) || this.previousData, this.result = void 0)), this.onCompleted = t.onCompleted || e.prototype.onCompleted, this.onError = t.onError || e.prototype.onError, !this.renderPromises && !this.client.disableNetworkFetches || !1 !== this.queryHookOptions.ssr || this.queryHookOptions.skip ? this.queryHookOptions.skip || "standby" === this.watchQueryOptions.fetchPolicy ? this.result = this.skipStandbyResult : this.result !== this.ssrDisabledResult && this.result !== this.skipStandbyResult || (this.result = void 0) : this.result = this.ssrDisabledResult
          }, e.prototype.getObsQueryOptions = function() {
            var e = [],
              t = this.client.defaultOptions.watchQuery;
            return t && e.push(t), this.queryHookOptions.defaultOptions && e.push(this.queryHookOptions.defaultOptions), e.push((0, Ge.g)(this.observable && this.observable.options, this.watchQueryOptions)), e.reduce(nr)
          }, e.prototype.createWatchQueryOptions = function(e) {
            var t;
            void 0 === e && (e = {});
            var r = e.skip,
              n = (e.ssr, e.onCompleted, e.onError, e.defaultOptions, (0, i.sX)(e, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"])),
              o = Object.assign(n, {
                query: this.query
              });
            if (!this.renderPromises || "network-only" !== o.fetchPolicy && "cache-and-network" !== o.fetchPolicy || (o.fetchPolicy = "cache-first"), o.variables || (o.variables = {}), r) {
              var s = o.fetchPolicy,
                a = void 0 === s ? this.getDefaultFetchPolicy() : s,
                c = o.initialFetchPolicy,
                u = void 0 === c ? a : c;
              Object.assign(o, {
                initialFetchPolicy: u,
                fetchPolicy: "standby"
              })
            } else o.fetchPolicy || (o.fetchPolicy = (null === (t = this.observable) || void 0 === t ? void 0 : t.options.initialFetchPolicy) || this.getDefaultFetchPolicy());
            return o
          }, e.prototype.getDefaultFetchPolicy = function() {
            var e, t;
            return (null === (e = this.queryHookOptions.defaultOptions) || void 0 === e ? void 0 : e.fetchPolicy) || (null === (t = this.client.defaultOptions.watchQuery) || void 0 === t ? void 0 : t.fetchPolicy) || "cache-first"
          }, e.prototype.onCompleted = function(e) {}, e.prototype.onError = function(e) {}, e.prototype.useObservableQuery = function() {
            var e = this.observable = this.renderPromises && this.renderPromises.getSSRObservable(this.watchQueryOptions) || this.observable || this.client.watchQuery(this.getObsQueryOptions());
            this.obsQueryFields = (0, vi.useMemo)((function() {
              return {
                refetch: e.refetch.bind(e),
                reobserve: e.reobserve.bind(e),
                fetchMore: e.fetchMore.bind(e),
                updateQuery: e.updateQuery.bind(e),
                startPolling: e.startPolling.bind(e),
                stopPolling: e.stopPolling.bind(e),
                subscribeToMore: e.subscribeToMore.bind(e)
              }
            }), [e]);
            var t = !(!1 === this.queryHookOptions.ssr || this.queryHookOptions.skip);
            return this.renderPromises && t && (this.renderPromises.registerSSRObservable(e), e.getCurrentResult().loading && this.renderPromises.addObservableQueryPromise(e)), e
          }, e.prototype.setResult = function(e) {
            var t = this.result;
            t && t.data && (this.previousData = t.data), this.result = e, this.forceUpdate(), this.handleErrorOrCompleted(e)
          }, e.prototype.handleErrorOrCompleted = function(e) {
            var t = this;
            if (!e.loading) {
              var r = this.toApolloError(e);
              Promise.resolve().then((function() {
                r ? t.onError(r) : e.data && t.onCompleted(e.data)
              })).catch((function(e) {
                __DEV__ && n.ON.warn(e)
              }))
            }
          }, e.prototype.toApolloError = function(e) {
            return (0, D.g)(e.errors) ? new N({
              graphQLErrors: e.errors
            }) : e.error
          }, e.prototype.getCurrentResult = function() {
            return this.result || this.handleErrorOrCompleted(this.result = this.observable.getCurrentResult()), this.result
          }, e.prototype.toQueryResult = function(e) {
            var t = this.toQueryResultCache.get(e);
            if (t) return t;
            var r = e.data,
              n = (e.partial, (0, i.sX)(e, ["data", "partial"]));
            return this.toQueryResultCache.set(e, t = (0, i.C3)((0, i.C3)((0, i.C3)({
              data: r
            }, n), this.obsQueryFields), {
              client: this.client,
              observable: this.observable,
              variables: this.observable.variables,
              called: !this.queryHookOptions.skip,
              previousData: this.previousData
            })), !t.error && (0, D.g)(e.errors) && (t.error = new N({
              graphQLErrors: e.errors
            })), t
          }, e.prototype.unsafeHandlePartialRefetch = function(e) {
            !e.partial || !this.queryHookOptions.partialRefetch || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === this.observable.options.fetchPolicy || (Object.assign(e, {
              loading: !0,
              networkStatus: Ve.refetch
            }), this.observable.refetch())
          }, e
        }(),
        Pi = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "subscribeToMore"];

      function Fi(e, t) {
        var r, n = (0, vi.useRef)(),
          o = (0, vi.useRef)(),
          s = (0, vi.useRef)(),
          a = n.current ? nr(t, n.current) : t,
          c = null !== (r = null == a ? void 0 : a.query) && void 0 !== r ? r : e;
        o.current = a, s.current = c;
        var u = Ii(Oi(t && t.client), c),
          l = u.useQuery((0, i.C3)((0, i.C3)({}, a), {
            skip: !n.current
          })),
          h = l.observable.options.initialFetchPolicy || u.getDefaultFetchPolicy(),
          p = Object.assign(l, {
            called: !!n.current
          }),
          f = (0, vi.useMemo)((function() {
            for (var e = {}, t = function(t) {
                var r = p[t];
                e[t] = function() {
                  return n.current || (n.current = Object.create(null), u.forceUpdate()), r.apply(this, arguments)
                }
              }, r = 0, i = Pi; r < i.length; r++) t(i[r]);
            return e
          }), []);
        Object.assign(p, f);
        var d = (0, vi.useCallback)((function(e) {
          n.current = e ? (0, i.C3)((0, i.C3)({}, e), {
            fetchPolicy: e.fetchPolicy || h
          }) : {
            fetchPolicy: h
          };
          var t = nr(o.current, (0, i.C3)({
              query: s.current
            }, n.current)),
            r = u.executeQuery((0, i.C3)((0, i.C3)({}, t), {
              skip: !1
            })).then((function(e) {
              return Object.assign(e, f)
            }));
          return r.catch((function() {})), r
        }), []);
        return [d, p]
      }

      function Mi(e, t) {
        var r = Oi(null == t ? void 0 : t.client);
        xi(e, Ei.Mutation);
        var n = (0, vi.useState)({
            called: !1,
            loading: !1,
            client: r
          }),
          o = n[0],
          s = n[1],
          a = (0, vi.useRef)({
            result: o,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: t
          });
        Object.assign(a.current, {
          client: r,
          options: t,
          mutation: e
        });
        var c = (0, vi.useCallback)((function(e) {
            void 0 === e && (e = {});
            var t = a.current,
              r = t.options,
              n = t.mutation,
              o = (0, i.C3)((0, i.C3)({}, r), {
                mutation: n
              }),
              c = e.client || a.current.client;
            a.current.result.loading || o.ignoreResults || !a.current.isMounted || s(a.current.result = {
              loading: !0,
              error: void 0,
              data: void 0,
              called: !0,
              client: c
            });
            var u = ++a.current.mutationId,
              l = nr(o, e);
            return c.mutate(l).then((function(t) {
              var r, n = t.data,
                i = t.errors,
                o = i && i.length > 0 ? new N({
                  graphQLErrors: i
                }) : void 0;
              if (u === a.current.mutationId && !l.ignoreResults) {
                var h = {
                  called: !0,
                  loading: !1,
                  data: n,
                  error: o,
                  client: c
                };
                a.current.isMounted && !oe(a.current.result, h) && s(a.current.result = h)
              }
              var p = e.onCompleted || (null === (r = a.current.options) || void 0 === r ? void 0 : r.onCompleted);
              return null == p || p(t.data, l), t
            })).catch((function(t) {
              var r;
              if (u === a.current.mutationId && a.current.isMounted) {
                var n = {
                  loading: !1,
                  error: t,
                  data: void 0,
                  called: !0,
                  client: c
                };
                oe(a.current.result, n) || s(a.current.result = n)
              }
              var i = e.onError || (null === (r = a.current.options) || void 0 === r ? void 0 : r.onError);
              if (i) return i(t, l), {
                data: void 0,
                errors: t
              };
              throw t
            }))
          }), []),
          u = (0, vi.useCallback)((function() {
            a.current.isMounted && s({
              called: !1,
              loading: !1,
              client: r
            })
          }), []);
        return (0, vi.useEffect)((function() {
          return a.current.isMounted = !0,
            function() {
              a.current.isMounted = !1
            }
        }), []), [c, (0, i.C3)({
          reset: u
        }, o)]
      }

      function Li(e, t) {
        var r = (0, vi.useRef)(!1),
          i = Oi(null == t ? void 0 : t.client);
        xi(e, Ei.Subscription);
        var o = (0, vi.useState)({
            loading: !(null == t ? void 0 : t.skip),
            error: void 0,
            data: void 0,
            variables: null == t ? void 0 : t.variables
          }),
          s = o[0],
          a = o[1];
        r.current || (r.current = !0, (null == t ? void 0 : t.onSubscriptionData) && __DEV__ && n.ON.warn(t.onData ? "'useSubscription' supports only the 'onSubscriptionData' or 'onData' option, but not both. Only the 'onData' option will be used." : "'onSubscriptionData' is deprecated and will be removed in a future major version. Please use the 'onData' option instead."), (null == t ? void 0 : t.onSubscriptionComplete) && __DEV__ && n.ON.warn(t.onComplete ? "'useSubscription' supports only the 'onSubscriptionComplete' or 'onComplete' option, but not both. Only the 'onComplete' option will be used." : "'onSubscriptionComplete' is deprecated and will be removed in a future major version. Please use the 'onComplete' option instead."));
        var c = (0, vi.useState)((function() {
            return (null == t ? void 0 : t.skip) ? null : i.subscribe({
              query: e,
              variables: null == t ? void 0 : t.variables,
              fetchPolicy: null == t ? void 0 : t.fetchPolicy,
              context: null == t ? void 0 : t.context
            })
          })),
          u = c[0],
          l = c[1],
          h = (0, vi.useRef)(!1);
        (0, vi.useEffect)((function() {
          return function() {
            h.current = !0
          }
        }), []);
        var p = (0, vi.useRef)({
          client: i,
          subscription: e,
          options: t
        });
        return (0, vi.useEffect)((function() {
          var r, n, o, s, c = null == t ? void 0 : t.shouldResubscribe;
          "function" == typeof c && (c = !!c(t)), (null == t ? void 0 : t.skip) ? (!(null == t ? void 0 : t.skip) != !(null === (r = p.current.options) || void 0 === r ? void 0 : r.skip) || h.current) && (a({
            loading: !1,
            data: void 0,
            error: void 0,
            variables: null == t ? void 0 : t.variables
          }), l(null), h.current = !1) : (!1 === c || i === p.current.client && e === p.current.subscription && (null == t ? void 0 : t.fetchPolicy) === (null === (n = p.current.options) || void 0 === n ? void 0 : n.fetchPolicy) && !(null == t ? void 0 : t.skip) == !(null === (o = p.current.options) || void 0 === o ? void 0 : o.skip) && oe(null == t ? void 0 : t.variables, null === (s = p.current.options) || void 0 === s ? void 0 : s.variables)) && !h.current || (a({
            loading: !0,
            data: void 0,
            error: void 0,
            variables: null == t ? void 0 : t.variables
          }), l(i.subscribe({
            query: e,
            variables: null == t ? void 0 : t.variables,
            fetchPolicy: null == t ? void 0 : t.fetchPolicy,
            context: null == t ? void 0 : t.context
          })), h.current = !1), Object.assign(p.current, {
            client: i,
            subscription: e,
            options: t
          })
        }), [i, e, t, h.current]), (0, vi.useEffect)((function() {
          if (u) {
            var e = !1,
              r = u.subscribe({
                next: function(r) {
                  var n, o;
                  if (!e) {
                    var s = {
                      loading: !1,
                      data: r.data,
                      error: void 0,
                      variables: null == t ? void 0 : t.variables
                    };
                    a(s), (null === (n = p.current.options) || void 0 === n ? void 0 : n.onData) ? p.current.options.onData({
                      client: i,
                      data: s
                    }) : (null === (o = p.current.options) || void 0 === o ? void 0 : o.onSubscriptionData) && p.current.options.onSubscriptionData({
                      client: i,
                      subscriptionData: s
                    })
                  }
                },
                error: function(r) {
                  var n, i;
                  e || (a({
                    loading: !1,
                    data: void 0,
                    error: r,
                    variables: null == t ? void 0 : t.variables
                  }), null === (i = null === (n = p.current.options) || void 0 === n ? void 0 : n.onError) || void 0 === i || i.call(n, r))
                },
                complete: function() {
                  var t, r;
                  e || ((null === (t = p.current.options) || void 0 === t ? void 0 : t.onComplete) ? p.current.options.onComplete() : (null === (r = p.current.options) || void 0 === r ? void 0 : r.onSubscriptionComplete) && p.current.options.onSubscriptionComplete())
                }
              });
            return function() {
              e = !0, setTimeout((function() {
                r.unsubscribe()
              }))
            }
          }
        }), [u]), s
      }

      function Qi(e) {
        var t = e(),
          r = (0, vi.useState)(t)[1];
        return (0, vi.useEffect)((function() {
          var n = e();
          if (t === n) return e.onNextChange(r);
          r(n)
        }), [t]), t
      }

      function qi(e) {
        var t = Oi().cache,
          r = e.fragment,
          n = e.fragmentName,
          o = e.from,
          s = e.optimistic,
          a = void 0 === s || s,
          c = (0, i.sX)(e, ["fragment", "fragmentName", "from", "optimistic"]),
          u = (0, i.C3)((0, i.C3)({}, c), {
            id: "string" == typeof o ? o : t.identify(o),
            query: t.getFragmentDoc(r, n),
            optimistic: a
          }),
          l = (0, vi.useRef)(),
          h = t.diff(u),
          p = function() {
            var e = ji(h);
            return l.current && oe(l.current.data, e.data) ? l.current : l.current = e
          };
        return ki((function(e) {
          return t.watch((0, i.C3)((0, i.C3)({}, u), {
            immediate: !0,
            callback: function(t) {
              oe(t, h) || (l.current = ji(h = t), e())
            }
          }))
        }), p, p)
      }

      function ji(e) {
        var t = {
          data: e.result,
          complete: !!e.complete
        };
        return e.missing && (t.missing = R(e.missing.map((function(e) {
          return e.missing
        })))), t
      }
    }
  }
]);
//# sourceMappingURL=e0f1fb703f45581c75b247df5786bd91.js.map