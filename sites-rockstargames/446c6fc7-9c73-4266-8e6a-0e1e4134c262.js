try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "446c6fc7-9c73-4266-8e6a-0e1e4134c262", e._sentryDebugIdIdentifier = "sentry-dbid-446c6fc7-9c73-4266-8e6a-0e1e4134c262")
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
  [9958], {
    2669: (e, n, r) => {
      r.d(n, {
        E: () => i
      });
      var t = r(13277);

      function i(e, n) {
        var r = [],
          i = function(e, n) {
            r.push("".concat(e, "=").concat(encodeURIComponent(n)))
          };
        if ("query" in n && i("query", n.query), n.operationName && i("operationName", n.operationName), n.variables) {
          var a = void 0;
          try {
            a = (0, t.Y)(n.variables, "Variables map")
          } catch (e) {
            return {
              parseError: e
            }
          }
          i("variables", a)
        }
        if (n.extensions) {
          var o = void 0;
          try {
            o = (0, t.Y)(n.extensions, "Extensions map")
          } catch (e) {
            return {
              parseError: e
            }
          }
          i("extensions", o)
        }
        var s = "",
          u = e,
          c = e.indexOf("#"); - 1 !== c && (s = e.substr(c), u = e.substr(0, c));
        var l = -1 === u.indexOf("?") ? "?" : "&";
        return {
          newURI: u + l + r.join("&") + s
        }
      }
    },
    4548: (e, n, r) => {
      r.d(n, {
        K$: () => a,
        K4: () => u,
        Mn: () => s,
        uR: () => o
      });
      var t = r(78322),
        i = (r(82966), r(26871)),
        a = Symbol();

      function o(e) {
        return !!e.extensions && Array.isArray(e.extensions[a])
      }

      function s(e) {
        return e.hasOwnProperty("graphQLErrors")
      }
      var u = function(e) {
        function n(r) {
          var a, o, s = r.graphQLErrors,
            u = r.protocolErrors,
            c = r.clientErrors,
            l = r.networkError,
            f = r.errorMessage,
            d = r.extraInfo,
            v = e.call(this, f) || this;
          return v.name = "ApolloError", v.graphQLErrors = s || [], v.protocolErrors = u || [], v.clientErrors = c || [], v.networkError = l || null, v.message = f || (a = v, o = (0, t.__spreadArray)((0, t.__spreadArray)((0, t.__spreadArray)([], a.graphQLErrors, !0), a.clientErrors, !0), a.protocolErrors, !0), a.networkError && o.push(a.networkError), o.map((function(e) {
            return (0, i.U)(e) && e.message || "Error message not found."
          })).join("\n")), v.extraInfo = d, v.cause = (0, t.__spreadArray)((0, t.__spreadArray)((0, t.__spreadArray)([l], s || [], !0), u || [], !0), c || [], !0).find((function(e) {
            return !!e
          })) || null, v.__proto__ = n.prototype, v
        }
        return (0, t.__extends)(n, e), n
      }(Error)
    },
    7842: (e, n, r) => {
      r.d(n, {
        A: () => t
      });
      var t = function(e, n, r) {
        var t = new Error(r);
        throw t.name = "ServerError", t.response = e, t.statusCode = e.status, t.result = n, t
      }
    },
    13277: (e, n, r) => {
      r.d(n, {
        Y: () => i
      });
      var t = r(82966),
        i = function(e, n) {
          var r;
          try {
            r = JSON.stringify(e)
          } catch (e) {
            var i = (0, t.vA)(42, n, e.message);
            throw i.parseError = e, i
          }
          return r
        }
    },
    14120: (e, n, r) => {
      r.d(n, {
        H4: () => p,
        OQ: () => h,
        tD: () => f
      });
      var t = r(78322),
        i = r(46026);

      function a(e) {
        var n = {
          next: function() {
            return e.read()
          }
        };
        return i.uJ && (n[Symbol.asyncIterator] = function() {
          return this
        }), n
      }

      function o(e) {
        var n, r, t, o = e;
        if (e.body && (o = e.body), t = o, i.uJ && t[Symbol.asyncIterator]) return r = o[Symbol.asyncIterator](), (n = {
          next: function() {
            return r.next()
          }
        })[Symbol.asyncIterator] = function() {
          return this
        }, n;
        if (function(e) {
            return !!e.getReader
          }(o)) return a(o.getReader());
        if (function(e) {
            return !!e.stream
          }(o)) return a(o.stream().getReader());
        if (function(e) {
            return !!e.arrayBuffer
          }(o)) return function(e) {
          var n = !1,
            r = {
              next: function() {
                return n ? Promise.resolve({
                  value: void 0,
                  done: !0
                }) : (n = !0, new Promise((function(n, r) {
                  e.then((function(e) {
                    n({
                      value: e,
                      done: !1
                    })
                  })).catch(r)
                })))
              }
            };
          return i.uJ && (r[Symbol.asyncIterator] = function() {
            return this
          }), r
        }(o.arrayBuffer());
        if (function(e) {
            return !!e.pipe
          }(o)) return function(e) {
          var n = null,
            r = null,
            t = !1,
            a = [],
            o = [];

          function s(e) {
            if (!r) {
              if (o.length) {
                var n = o.shift();
                if (Array.isArray(n) && n[0]) return n[0]({
                  value: e,
                  done: !1
                })
              }
              a.push(e)
            }
          }

          function u(e) {
            r = e, o.slice().forEach((function(n) {
              n[1](e)
            })), !n || n()
          }

          function c() {
            t = !0, o.slice().forEach((function(e) {
              e[0]({
                value: void 0,
                done: !0
              })
            })), !n || n()
          }
          n = function() {
            n = null, e.removeListener("data", s), e.removeListener("error", u), e.removeListener("end", c), e.removeListener("finish", c), e.removeListener("close", c)
          }, e.on("data", s), e.on("error", u), e.on("end", c), e.on("finish", c), e.on("close", c);
          var l = {
            next: function() {
              return new Promise((function(e, n) {
                return r ? n(r) : a.length ? e({
                  value: a.shift(),
                  done: !1
                }) : t ? e({
                  value: void 0,
                  done: !0
                }) : void o.push([e, n])
              }))
            }
          };
          return i.uJ && (l[Symbol.asyncIterator] = function() {
            return this
          }), l
        }(o);
        throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")
      }
      var s = r(7842),
        u = r(4548),
        c = r(61102),
        l = Object.prototype.hasOwnProperty;

      function f(e, n) {
        return (0, t.__awaiter)(this, void 0, void 0, (function() {
          var r, i, a, s, l, f, p, h, m, y, _, g, b, E, w, O, k, x, I, N, S, A, D, T;
          return (0, t.__generator)(this, (function(V) {
            switch (V.label) {
              case 0:
                if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                r = new TextDecoder("utf-8"), i = null === (T = e.headers) || void 0 === T ? void 0 : T.get("content-type"), a = "boundary=", s = (null == i ? void 0 : i.includes(a)) ? null == i ? void 0 : i.substring((null == i ? void 0 : i.indexOf(a)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", l = "\r\n--".concat(s), f = "", p = o(e), h = !0, V.label = 1;
              case 1:
                return h ? [4, p.next()] : [3, 3];
              case 2:
                for (m = V.sent(), y = m.value, _ = m.done, g = "string" == typeof y ? y : r.decode(y), b = f.length - l.length + 1, h = !_, E = (f += g).indexOf(l, b); E > -1;) {
                  if (w = void 0, A = [f.slice(0, E), f.slice(E + l.length)], f = A[1], O = (w = A[0]).indexOf("\r\n\r\n"), k = d(w.slice(0, O)), (x = k["content-type"]) && -1 === x.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                  if (I = w.slice(O))
                    if (N = v(e, I), Object.keys(N).length > 1 || "data" in N || "incremental" in N || "errors" in N || "payload" in N)
                      if ((0, c.Nw)(N)) {
                        if (S = {}, "payload" in N) {
                          if (1 === Object.keys(N).length && null === N.payload) return [2];
                          S = (0, t.__assign)({}, N.payload)
                        }
                        "errors" in N && (S = (0, t.__assign)((0, t.__assign)({}, S), {
                          extensions: (0, t.__assign)((0, t.__assign)({}, "extensions" in S ? S.extensions : null), (D = {}, D[u.K$] = N.errors, D))
                        })), n(S)
                      } else n(N);
                  else if (1 === Object.keys(N).length && "hasNext" in N && !N.hasNext) return [2];
                  E = f.indexOf(l)
                }
                return [3, 1];
              case 3:
                return [2]
            }
          }))
        }))
      }

      function d(e) {
        var n = {};
        return e.split("\n").forEach((function(e) {
          var r = e.indexOf(":");
          if (r > -1) {
            var t = e.slice(0, r).trim().toLowerCase(),
              i = e.slice(r + 1).trim();
            n[t] = i
          }
        })), n
      }

      function v(e, n) {
        e.status >= 300 && (0, s.A)(e, function() {
          try {
            return JSON.parse(n)
          } catch (e) {
            return n
          }
        }(), "Response not successful: Received status code ".concat(e.status));
        try {
          return JSON.parse(n)
        } catch (t) {
          var r = t;
          throw r.name = "ServerParseError", r.response = e, r.statusCode = e.status, r.bodyText = n, r
        }
      }

      function p(e, n) {
        e.result && e.result.errors && e.result.data && n.next(e.result), n.error(e)
      }

      function h(e) {
        return function(n) {
          return n.text().then((function(e) {
            return v(n, e)
          })).then((function(r) {
            return Array.isArray(r) || l.call(r, "data") || l.call(r, "errors") || (0, s.A)(n, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map((function(e) {
              return e.operationName
            })) : e.operationName, "'.")), r
          }))
        }
      }
    },
    16383: (e, n, r) => {
      r.d(n, {
        $: () => g
      });
      var t = r(78322),
        i = r(82966),
        a = r(21429),
        o = r(45309),
        s = r(57308),
        u = r(13277),
        c = r(26618),
        l = r(14120),
        f = r(74801),
        d = r(55001),
        v = r(2669),
        p = r(96807),
        h = r(16565),
        m = r(52827),
        y = r(81967),
        _ = (0, i.no)((function() {
          return fetch
        })),
        g = function(e) {
          void 0 === e && (e = {});
          var n = e.uri,
            r = void 0 === n ? "/graphql" : n,
            g = e.fetch,
            b = e.print,
            E = void 0 === b ? d.i1 : b,
            w = e.includeExtensions,
            O = e.preserveHeaderCase,
            k = e.useGETForQueries,
            x = e.includeUnusedVariables,
            I = void 0 !== x && x,
            N = (0, t.__rest)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          !1 !== globalThis.__DEV__ && (0, f.S)(g || _);
          var S = {
            http: {
              includeExtensions: w,
              preserveHeaderCase: O
            },
            options: N.fetchOptions,
            credentials: N.credentials,
            headers: N.headers
          };
          return new a.C((function(e) {
            var n = (0, c.z)(e, r),
              a = e.getContext(),
              f = {};
            if (a.clientAwareness) {
              var b = a.clientAwareness,
                w = b.name,
                O = b.version;
              w && (f["apollographql-client-name"] = w), O && (f["apollographql-client-version"] = O)
            }
            var x = (0, t.__assign)((0, t.__assign)({}, f), a.headers),
              N = {
                http: a.http,
                options: a.fetchOptions,
                credentials: a.credentials,
                headers: x
              };
            if ((0, o.d8)(["client"], e.query)) {
              var A = (0, m.er)(e.query);
              if (!A) return (0, p.N)(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
              e.query = A
            }
            var D, T, V, C, R, M = (0, d.HY)(e, E, d.R4, S, N),
              j = M.options,
              q = M.body;
            q.variables && !I && (q.variables = (D = q.variables, T = e.query, V = (0, t.__assign)({}, D), C = new Set(Object.keys(D)), (0, h.visit)(T, {
              Variable: function(e, n, r) {
                r && "VariableDefinition" !== r.kind && C.delete(e.name.value)
              }
            }), C.forEach((function(e) {
              delete V[e]
            })), V)), j.signal || "undefined" == typeof AbortController || (R = new AbortController, j.signal = R.signal);
            var F, K = "OperationDefinition" === (F = (0, y.Vn)(e.query)).kind && "subscription" === F.operation,
              L = (0, o.d8)(["defer"], e.query);
            if (k && !e.query.definitions.some((function(e) {
                return "OperationDefinition" === e.kind && "mutation" === e.operation
              })) && (j.method = "GET"), L || K) {
              j.headers = j.headers || {};
              var P = "multipart/mixed;";
              K && L && !1 !== globalThis.__DEV__ && i.V1.warn(41), K ? P += "boundary=graphql;subscriptionSpec=1.0,application/json" : L && (P += "deferSpec=20220824,application/json"), j.headers.accept = P
            }
            if ("GET" === j.method) {
              var U = (0, v.E)(n, q),
                z = U.newURI,
                J = U.parseError;
              if (J) return (0, p.N)(J);
              n = z
            } else try {
              j.body = (0, u.Y)(q, "Payload")
            } catch (J) {
              return (0, p.N)(J)
            }
            return new s.c((function(r) {
              var t = g || (0, i.no)((function() {
                  return fetch
                })) || _,
                a = r.next.bind(r);
              return t(n, j).then((function(n) {
                  var r;
                  e.setContext({
                    response: n
                  });
                  var t = null === (r = n.headers) || void 0 === r ? void 0 : r.get("content-type");
                  return null !== t && /^multipart\/mixed/i.test(t) ? (0, l.tD)(n, a) : (0, l.OQ)(e)(n).then(a)
                })).then((function() {
                  R = void 0, r.complete()
                })).catch((function(e) {
                  R = void 0, (0, l.H4)(e, r)
                })),
                function() {
                  R && R.abort()
                }
            }))
          }))
        }
    },
    26618: (e, n, r) => {
      r.d(n, {
        z: () => t
      });
      var t = function(e, n) {
        return e.getContext().uri || ("function" == typeof n ? n(e) : n || "/graphql")
      }
    },
    45309: (e, n, r) => {
      r.d(n, {
        MS: () => a,
        d8: () => o,
        f2: () => s,
        s7: () => u
      });
      var t = r(82966),
        i = r(16565);

      function a(e, n) {
        var r = e.directives;
        return !r || !r.length || function(e) {
          var n = [];
          return e && e.length && e.forEach((function(e) {
            if (function(e) {
                var n = e.name.value;
                return "skip" === n || "include" === n
              }(e)) {
              var r = e.arguments,
                i = e.name.value;
              (0, t.V1)(r && 1 === r.length, 79, i);
              var a = r[0];
              (0, t.V1)(a.name && "if" === a.name.value, 80, i);
              var o = a.value;
              (0, t.V1)(o && ("Variable" === o.kind || "BooleanValue" === o.kind), 81, i), n.push({
                directive: e,
                ifArgument: a
              })
            }
          })), n
        }(r).every((function(e) {
          var r = e.directive,
            i = e.ifArgument,
            a = !1;
          return "Variable" === i.value.kind ? (a = n && n[i.value.name.value], (0, t.V1)(void 0 !== a, 78, r.name.value)) : a = i.value.value, "skip" === r.name.value ? !a : a
        }))
      }

      function o(e, n, r) {
        var t = new Set(e),
          a = t.size;
        return (0, i.visit)(n, {
          Directive: function(e) {
            if (t.delete(e.name.value) && (!r || !t.size)) return i.BREAK
          }
        }), r ? !t.size : t.size < a
      }

      function s(e) {
        return e && o(["client", "export"], e, !0)
      }

      function u(e) {
        var n, r, a = null === (n = e.directives) || void 0 === n ? void 0 : n.find((function(e) {
          return "unmask" === e.name.value
        }));
        if (!a) return "mask";
        var o = null === (r = a.arguments) || void 0 === r ? void 0 : r.find((function(e) {
          return "mode" === e.name.value
        }));
        return !1 !== globalThis.__DEV__ && o && (o.value.kind === i.Kind.VARIABLE ? !1 !== globalThis.__DEV__ && t.V1.warn(82) : o.value.kind !== i.Kind.STRING ? !1 !== globalThis.__DEV__ && t.V1.warn(83) : "migrate" !== o.value.value && !1 !== globalThis.__DEV__ && t.V1.warn(84, o.value.value)), o && "value" in o.value && "migrate" === o.value.value ? "migrate" : "unmask"
      }
    },
    46026: (e, n, r) => {
      r.d(n, {
        En: () => o,
        JR: () => f,
        Sw: () => c,
        et: () => a,
        ol: () => s,
        uJ: () => u
      });
      var t = r(82966),
        i = "ReactNative" == (0, t.no)((function() {
          return navigator.product
        })),
        a = "function" == typeof WeakMap && !(i && !global.HermesInternal),
        o = "function" == typeof WeakSet,
        s = "function" == typeof Symbol && "function" == typeof Symbol.for,
        u = s && Symbol.asyncIterator,
        c = "function" == typeof(0, t.no)((function() {
          return window.document.createElement
        })),
        l = (0, t.no)((function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        })) || !1,
        f = (c || i) && !l
    },
    48169: (e, n, r) => {
      r.d(n, {
        D9: () => o,
        IM: () => s,
        ZI: () => c
      });
      var t = r(78322),
        i = r(26871),
        a = Object.prototype.hasOwnProperty;

      function o() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return s(e)
      }

      function s(e) {
        var n = e[0] || {},
          r = e.length;
        if (r > 1)
          for (var t = new c, i = 1; i < r; ++i) n = t.merge(n, e[i]);
        return n
      }
      var u = function(e, n, r) {
          return this.merge(e[r], n[r])
        },
        c = function() {
          function e(e) {
            void 0 === e && (e = u), this.reconciler = e, this.isObject = i.U, this.pastCopies = new Set
          }
          return e.prototype.merge = function(e, n) {
            for (var r = this, o = [], s = 2; s < arguments.length; s++) o[s - 2] = arguments[s];
            return (0, i.U)(n) && (0, i.U)(e) ? (Object.keys(n).forEach((function(i) {
              if (a.call(e, i)) {
                var s = e[i];
                if (n[i] !== s) {
                  var u = r.reconciler.apply(r, (0, t.__spreadArray)([e, n, i], o, !1));
                  u !== s && ((e = r.shallowCopyForMerge(e))[i] = u)
                }
              } else(e = r.shallowCopyForMerge(e))[i] = n[i]
            })), e) : n
          }, e.prototype.shallowCopyForMerge = function(e) {
            return (0, i.U)(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : (0, t.__assign)({
              __proto__: Object.getPrototypeOf(e)
            }, e), this.pastCopies.add(e))), e
          }, e
        }()
    },
    52827: (e, n, r) => {
      r.d(n, {
        XY: () => h,
        er: () => y,
        iz: () => p,
        x3: () => _,
        zc: () => m
      });
      var t = r(78322),
        i = r(82966),
        a = r(16565),
        o = r(81967),
        s = r(39493),
        u = r(85346),
        c = r(7569),
        l = {
          kind: a.Kind.FIELD,
          name: {
            kind: a.Kind.NAME,
            value: "__typename"
          }
        };

      function f(e, n) {
        return !e || e.selectionSet.selections.every((function(e) {
          return e.kind === a.Kind.FRAGMENT_SPREAD && f(n[e.name.value], n)
        }))
      }

      function d(e) {
        return f((0, o.Vu)(e) || (0, o.E4)(e), (0, u.JG)((0, o.zK)(e))) ? null : e
      }

      function v(e) {
        var n = new Map;
        return function(r) {
          void 0 === r && (r = e);
          var t = n.get(r);
          return t || n.set(r, t = {
            variables: new Set,
            fragmentSpreads: new Set
          }), t
        }
      }

      function p(e, n) {
        (0, o.sw)(n);
        for (var r = v(""), s = v(""), u = function(e) {
            for (var n = 0, t = void 0; n < e.length && (t = e[n]); ++n)
              if (!(0, c.c)(t)) {
                if (t.kind === a.Kind.OPERATION_DEFINITION) return r(t.name && t.name.value);
                if (t.kind === a.Kind.FRAGMENT_DEFINITION) return s(t.name.value)
              } return !1 !== globalThis.__DEV__ && i.V1.error(97), null
          }, l = 0, f = n.definitions.length - 1; f >= 0; --f) n.definitions[f].kind === a.Kind.OPERATION_DEFINITION && ++l;
        var p, h, m, y = (p = e, h = new Map, m = new Map, p.forEach((function(e) {
            e && (e.name ? h.set(e.name, e) : e.test && m.set(e.test, e))
          })), function(e) {
            var n = h.get(e.name.value);
            return !n && m.size && m.forEach((function(r, t) {
              t(e) && (n = r)
            })), n
          }),
          _ = function(e) {
            return (0, c.E)(e) && e.map(y).some((function(e) {
              return e && e.remove
            }))
          },
          g = new Map,
          b = !1,
          E = {
            enter: function(e) {
              if (_(e.directives)) return b = !0, null
            }
          },
          w = (0, a.visit)(n, {
            Field: E,
            InlineFragment: E,
            VariableDefinition: {
              enter: function() {
                return !1
              }
            },
            Variable: {
              enter: function(e, n, r, t, i) {
                var a = u(i);
                a && a.variables.add(e.name.value)
              }
            },
            FragmentSpread: {
              enter: function(e, n, r, t, i) {
                if (_(e.directives)) return b = !0, null;
                var a = u(i);
                a && a.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, n, r, t) {
                g.set(JSON.stringify(t), e)
              },
              leave: function(e, n, r, t) {
                return e === g.get(JSON.stringify(t)) ? e : l > 0 && e.selectionSet.selections.every((function(e) {
                  return e.kind === a.Kind.FIELD && "__typename" === e.name.value
                })) ? (s(e.name.value).removed = !0, b = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (y(e)) return b = !0, null
              }
            }
          });
        if (!b) return n;
        var O = function(e) {
            return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach((function(n) {
              O(s(n)).transitiveVars.forEach((function(n) {
                e.transitiveVars.add(n)
              }))
            }))), e
          },
          k = new Set;
        w.definitions.forEach((function(e) {
          e.kind === a.Kind.OPERATION_DEFINITION ? O(r(e.name && e.name.value)).fragmentSpreads.forEach((function(e) {
            k.add(e)
          })) : e.kind !== a.Kind.FRAGMENT_DEFINITION || 0 !== l || s(e.name.value).removed || k.add(e.name.value)
        })), k.forEach((function(e) {
          O(s(e)).fragmentSpreads.forEach((function(e) {
            k.add(e)
          }))
        }));
        var x = {
          enter: function(e) {
            if (n = e.name.value, !k.has(n) || s(n).removed) return null;
            var n
          }
        };
        return d((0, a.visit)(w, {
          FragmentSpread: x,
          FragmentDefinition: x,
          OperationDefinition: {
            leave: function(e) {
              if (e.variableDefinitions) {
                var n = O(r(e.name && e.name.value)).transitiveVars;
                if (n.size < e.variableDefinitions.length) return (0, t.__assign)((0, t.__assign)({}, e), {
                  variableDefinitions: e.variableDefinitions.filter((function(e) {
                    return n.has(e.variable.name.value)
                  }))
                })
              }
            }
          }
        }))
      }
      var h = Object.assign((function(e) {
        return (0, a.visit)(e, {
          SelectionSet: {
            enter: function(e, n, r) {
              if (!r || r.kind !== a.Kind.OPERATION_DEFINITION) {
                var i = e.selections;
                if (i && !i.some((function(e) {
                    return (0, s.dt)(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                  }))) {
                  var o = r;
                  if (!((0, s.dt)(o) && o.directives && o.directives.some((function(e) {
                      return "export" === e.name.value
                    })))) return (0, t.__assign)((0, t.__assign)({}, e), {
                    selections: (0, t.__spreadArray)((0, t.__spreadArray)([], i, !0), [l], !1)
                  })
                }
              }
            }
          }
        })
      }), {
        added: function(e) {
          return e === l
        }
      });

      function m(e) {
        return "query" === (0, o.Vn)(e).operation ? e : (0, a.visit)(e, {
          OperationDefinition: {
            enter: function(e) {
              return (0, t.__assign)((0, t.__assign)({}, e), {
                operation: "query"
              })
            }
          }
        })
      }

      function y(e) {
        return (0, o.sw)(e), p([{
          test: function(e) {
            return "client" === e.name.value
          },
          remove: !0
        }], e)
      }

      function _(e) {
        return (0, o.sw)(e), (0, a.visit)(e, {
          FragmentSpread: function(e) {
            var n;
            if (!(null === (n = e.directives) || void 0 === n ? void 0 : n.some((function(e) {
                return "unmask" === e.name.value
              })))) return (0, t.__assign)((0, t.__assign)({}, e), {
              directives: (0, t.__spreadArray)((0, t.__spreadArray)([], e.directives || [], !0), [{
                kind: a.Kind.DIRECTIVE,
                name: {
                  kind: a.Kind.NAME,
                  value: "nonreactive"
                }
              }], !1)
            })
          }
        })
      }
    },
    55001: (e, n, r) => {
      r.d(n, {
        HY: () => u,
        R4: () => a,
        Wz: () => s,
        i1: () => o
      });
      var t = r(78322),
        i = r(35588),
        a = {
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
        o = function(e, n) {
          return n(e)
        };

      function s(e, n) {
        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return r.unshift(n), u.apply(void 0, (0, t.__spreadArray)([e, o], r, !1))
      }

      function u(e, n) {
        for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
        var o = {},
          s = {};
        r.forEach((function(e) {
          o = (0, t.__assign)((0, t.__assign)((0, t.__assign)({}, o), e.options), {
            headers: (0, t.__assign)((0, t.__assign)({}, o.headers), e.headers)
          }), e.credentials && (o.credentials = e.credentials), s = (0, t.__assign)((0, t.__assign)({}, s), e.http)
        })), o.headers && (o.headers = function(e, n) {
          if (!n) {
            var r = {};
            return Object.keys(Object(e)).forEach((function(n) {
              r[n.toLowerCase()] = e[n]
            })), r
          }
          var t = {};
          Object.keys(Object(e)).forEach((function(n) {
            t[n.toLowerCase()] = {
              originalName: n,
              value: e[n]
            }
          }));
          var i = {};
          return Object.keys(t).forEach((function(e) {
            i[t[e].originalName] = t[e].value
          })), i
        }(o.headers, s.preserveHeaderCase));
        var u = e.operationName,
          c = e.extensions,
          l = e.variables,
          f = e.query,
          d = {
            operationName: u,
            variables: l
          };
        return s.includeExtensions && (d.extensions = c), s.includeQuery && (d.query = n(f, i.y)), {
          options: o,
          body: d
        }
      }
    },
    61102: (e, n, r) => {
      r.d(n, {
        Nw: () => u,
        ST: () => o,
        YX: () => s,
        bd: () => c
      });
      var t = r(26871),
        i = r(7569),
        a = r(48169);

      function o(e) {
        return "incremental" in e
      }

      function s(e) {
        return o(e) || function(e) {
          return "hasNext" in e && "data" in e
        }(e)
      }

      function u(e) {
        return (0, t.U)(e) && "payload" in e
      }

      function c(e, n) {
        var r = e,
          t = new a.ZI;
        return o(n) && (0, i.E)(n.incremental) && n.incremental.forEach((function(e) {
          for (var n = e.data, i = e.path, a = i.length - 1; a >= 0; --a) {
            var o = i[a],
              s = isNaN(+o) ? {} : [];
            s[o] = n, n = s
          }
          r = t.merge(r, n)
        })), r
      }
    },
    74801: (e, n, r) => {
      r.d(n, {
        S: () => i
      });
      var t = r(82966),
        i = function(e) {
          if (!e && "undefined" == typeof fetch) throw (0, t.vA)(40)
        }
    },
    79958: (e, n, r) => {
      r.d(n, {
        P: () => o
      });
      var t = r(78322),
        i = r(21429),
        a = r(16383),
        o = function(e) {
          function n(n) {
            void 0 === n && (n = {});
            var r = e.call(this, (0, a.$)(n).request) || this;
            return r.options = n, r
          }
          return (0, t.__extends)(n, e), n
        }(i.C)
    },
    96807: (e, n, r) => {
      r.d(n, {
        N: () => i
      });
      var t = r(57308);

      function i(e) {
        return new t.c((function(n) {
          n.error(e)
        }))
      }
    }
  }
]);