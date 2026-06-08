try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    n = (new e.Error).stack;
  n && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[n] = "56b333f3-14d6-456b-a41d-ccf39d0d40dc", e._sentryDebugIdIdentifier = "sentry-dbid-56b333f3-14d6-456b-a41d-ccf39d0d40dc")
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
  [8857], {
    18857(e, n, r) {
      r.d(n, {
        P: () => o
      });
      var t = r(51177),
        i = r(6964),
        a = r(53846),
        o = function(e) {
          function n(n) {
            void 0 === n && (n = {});
            var r = e.call(this, (0, a.$)(n).request) || this;
            return r.options = n, r
          }
          return (0, t.C6)(n, e), n
        }(i.C)
    },
    3822(e, n, r) {
      r.d(n, {
        S: () => i
      });
      var t = r(23023),
        i = function(e) {
          if (!e && "undefined" == typeof fetch) throw (0, t.vA)(51)
        }
    },
    53846(e, n, r) {
      r.d(n, {
        $: () => b
      });
      var t = r(51177),
        i = r(23023),
        a = r(6964),
        o = r(95154),
        u = r(47593),
        s = r(92072),
        l = r(73191),
        c = r(46055),
        f = r(3822),
        d = r(20562),
        v = r(90250),
        p = r(92300),
        h = r(67122),
        m = r(42846),
        y = r(76408),
        g = (0, i.no)(function() {
          return fetch
        }),
        b = function(e) {
          void 0 === e && (e = {});
          var n = e.uri,
            r = void 0 === n ? "/graphql" : n,
            b = e.fetch,
            E = e.print,
            w = void 0 === E ? d.i1 : E,
            _ = e.includeExtensions,
            O = e.preserveHeaderCase,
            C = e.useGETForQueries,
            k = e.includeUnusedVariables,
            I = void 0 !== k && k,
            N = (0, t.Tt)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          !1 !== globalThis.__DEV__ && (0, f.S)(b || g);
          var S = {
            http: {
              includeExtensions: _,
              preserveHeaderCase: O
            },
            options: N.fetchOptions,
            credentials: N.credentials,
            headers: N.headers
          };
          return new a.C(function(e) {
            var n = (0, l.z)(e, r),
              a = e.getContext(),
              f = {};
            if (a.clientAwareness) {
              var E = a.clientAwareness,
                _ = E.name,
                O = E.version;
              _ && (f["apollographql-client-name"] = _), O && (f["apollographql-client-version"] = O)
            }
            var k = (0, t.Cl)((0, t.Cl)({}, f), a.headers),
              N = {
                http: a.http,
                options: a.fetchOptions,
                credentials: a.credentials,
                headers: k
              };
            if ((0, o.d8)(["client"], e.query)) {
              !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(52);
              var x = (0, m.er)(e.query);
              if (!x) return (0, p.N)(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
              e.query = x
            }
            var T, D, V, A, R, q = (0, d.HY)(e, w, d.R4, S, N),
              F = q.options,
              j = q.body;
            j.variables && !I && (j.variables = (T = j.variables, D = e.query, V = (0, t.Cl)({}, T), A = new Set(Object.keys(T)), (0, h.visit)(D, {
              Variable: function(e, n, r) {
                r && "VariableDefinition" !== r.kind && A.delete(e.name.value)
              }
            }), A.forEach(function(e) {
              delete V[e]
            }), V)), F.signal || "undefined" == typeof AbortController || (R = new AbortController, F.signal = R.signal);
            var M, K = "OperationDefinition" === (M = (0, y.Vn)(e.query)).kind && "subscription" === M.operation,
              P = (0, o.d8)(["defer"], e.query);
            if (C && !e.query.definitions.some(function(e) {
                return "OperationDefinition" === e.kind && "mutation" === e.operation
              }) && (F.method = "GET"), P || K) {
              F.headers = F.headers || {};
              var L = "multipart/mixed;";
              K && P && !1 !== globalThis.__DEV__ && i.V1.warn(53), K ? L += "boundary=graphql;subscriptionSpec=1.0,application/json" : P && (L += "deferSpec=20220824,application/json"), F.headers.accept = L
            }
            if ("GET" === F.method) {
              var H = (0, v.E)(n, j),
                z = H.newURI,
                J = H.parseError;
              if (J) return (0, p.N)(J);
              n = z
            } else try {
              F.body = (0, s.Y)(j, "Payload")
            } catch (J) {
              return (0, p.N)(J)
            }
            return new u.c(function(r) {
              var t = b || (0, i.no)(function() {
                  return fetch
                }) || g,
                a = r.next.bind(r);
              return t(n, F).then(function(n) {
                  var r;
                  e.setContext({
                    response: n
                  });
                  var t = null === (r = n.headers) || void 0 === r ? void 0 : r.get("content-type");
                  return null !== t && /^multipart\/mixed/i.test(t) ? (0, c.tD)(n, a) : (0, c.OQ)(e)(n).then(a)
                }).then(function() {
                  R = void 0, r.complete()
                }).catch(function(e) {
                  R = void 0, (0, c.H4)(e, r)
                }),
                function() {
                  R && R.abort()
                }
            })
          })
        }
    },
    46055(e, n, r) {
      r.d(n, {
        H4: () => p,
        OQ: () => h,
        tD: () => f
      });
      var t = r(51177),
        i = r(75355);

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
                }) : (n = !0, new Promise(function(n, r) {
                  e.then(function(e) {
                    n({
                      value: e,
                      done: !1
                    })
                  }).catch(r)
                }))
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

          function u(e) {
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

          function s(e) {
            r = e, o.slice().forEach(function(n) {
              n[1](e)
            }), !n || n()
          }

          function l() {
            t = !0, o.slice().forEach(function(e) {
              e[0]({
                value: void 0,
                done: !0
              })
            }), !n || n()
          }
          n = function() {
            n = null, e.removeListener("data", u), e.removeListener("error", s), e.removeListener("end", l), e.removeListener("finish", l), e.removeListener("close", l)
          }, e.on("data", u), e.on("error", s), e.on("end", l), e.on("finish", l), e.on("close", l);
          var c = {
            next: function() {
              return new Promise(function(e, n) {
                return r ? n(r) : a.length ? e({
                  value: a.shift(),
                  done: !1
                }) : t ? e({
                  value: void 0,
                  done: !0
                }) : void o.push([e, n])
              })
            }
          };
          return i.uJ && (c[Symbol.asyncIterator] = function() {
            return this
          }), c
        }(o);
        throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")
      }
      var u = r(49659),
        s = r(75227),
        l = r(61029),
        c = Object.prototype.hasOwnProperty;

      function f(e, n) {
        return (0, t.sH)(this, void 0, void 0, function() {
          var r, i, a, u, c, f, p, h, m, y, g, b, E, w, _, O, C, k, I, N, S, x, T, D;
          return (0, t.YH)(this, function(V) {
            switch (V.label) {
              case 0:
                if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                r = new TextDecoder("utf-8"), i = null === (D = e.headers) || void 0 === D ? void 0 : D.get("content-type"), a = "boundary=", u = (null == i ? void 0 : i.includes(a)) ? null == i ? void 0 : i.substring((null == i ? void 0 : i.indexOf(a)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", c = "\r\n--".concat(u), f = "", p = o(e), h = !0, V.label = 1;
              case 1:
                return h ? [4, p.next()] : [3, 3];
              case 2:
                for (m = V.sent(), y = m.value, g = m.done, b = "string" == typeof y ? y : r.decode(y), E = f.length - c.length + 1, h = !g, w = (f += b).indexOf(c, E); w > -1;) {
                  if (_ = void 0, x = [f.slice(0, w), f.slice(w + c.length)], f = x[1], O = (_ = x[0]).indexOf("\r\n\r\n"), C = d(_.slice(0, O)), (k = C["content-type"]) && -1 === k.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                  if (I = _.slice(O))
                    if (N = v(e, I), Object.keys(N).length > 1 || "data" in N || "incremental" in N || "errors" in N || "payload" in N)
                      if ((0, l.Nw)(N)) {
                        if (S = {}, "payload" in N) {
                          if (1 === Object.keys(N).length && null === N.payload) return [2];
                          S = (0, t.Cl)({}, N.payload)
                        }
                        "errors" in N && (S = (0, t.Cl)((0, t.Cl)({}, S), {
                          extensions: (0, t.Cl)((0, t.Cl)({}, "extensions" in S ? S.extensions : null), (T = {}, T[s.K$] = N.errors, T))
                        })), n(S)
                      } else n(N);
                  else if (1 === Object.keys(N).length && "hasNext" in N && !N.hasNext) return [2];
                  w = f.indexOf(c)
                }
                return [3, 1];
              case 3:
                return [2]
            }
          })
        })
      }

      function d(e) {
        var n = {};
        return e.split("\n").forEach(function(e) {
          var r = e.indexOf(":");
          if (r > -1) {
            var t = e.slice(0, r).trim().toLowerCase(),
              i = e.slice(r + 1).trim();
            n[t] = i
          }
        }), n
      }

      function v(e, n) {
        e.status >= 300 && (0, u.A)(e, function() {
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
          return n.text().then(function(e) {
            return v(n, e)
          }).then(function(r) {
            return Array.isArray(r) || c.call(r, "data") || c.call(r, "errors") || (0, u.A)(n, r, "Server response was missing for query '".concat(Array.isArray(e) ? e.map(function(e) {
              return e.operationName
            }) : e.operationName, "'.")), r
          })
        }
      }
    },
    90250(e, n, r) {
      r.d(n, {
        E: () => i
      });
      var t = r(92072);

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
        var u = "",
          s = e,
          l = e.indexOf("#"); - 1 !== l && (u = e.substr(l), s = e.substr(0, l));
        var c = -1 === s.indexOf("?") ? "?" : "&";
        return {
          newURI: s + c + r.join("&") + u
        }
      }
    },
    20562(e, n, r) {
      r.d(n, {
        HY: () => s,
        R4: () => a,
        Wz: () => u,
        i1: () => o
      });
      var t = r(51177),
        i = r(58629),
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

      function u(e, n) {
        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        return r.unshift(n), s.apply(void 0, (0, t.fX)([e, o], r, !1))
      }

      function s(e, n) {
        for (var r = [], a = 2; a < arguments.length; a++) r[a - 2] = arguments[a];
        var o = {},
          u = {};
        r.forEach(function(e) {
          o = (0, t.Cl)((0, t.Cl)((0, t.Cl)({}, o), e.options), {
            headers: (0, t.Cl)((0, t.Cl)({}, o.headers), e.headers)
          }), e.credentials && (o.credentials = e.credentials), u = (0, t.Cl)((0, t.Cl)({}, u), e.http)
        }), o.headers && (o.headers = function(e, n) {
          if (!n) {
            var r = {};
            return Object.keys(Object(e)).forEach(function(n) {
              r[n.toLowerCase()] = e[n]
            }), r
          }
          var t = {};
          Object.keys(Object(e)).forEach(function(n) {
            t[n.toLowerCase()] = {
              originalName: n,
              value: e[n]
            }
          });
          var i = {};
          return Object.keys(t).forEach(function(e) {
            i[t[e].originalName] = t[e].value
          }), i
        }(o.headers, u.preserveHeaderCase));
        var s = e.operationName,
          l = e.extensions,
          c = e.variables,
          f = e.query,
          d = {
            operationName: s,
            variables: c
          };
        return u.includeExtensions && (d.extensions = l), u.includeQuery && (d.query = n(f, i.y)), {
          options: o,
          body: d
        }
      }
    },
    73191(e, n, r) {
      r.d(n, {
        z: () => t
      });
      var t = function(e, n) {
        return e.getContext().uri || ("function" == typeof n ? n(e) : n || "/graphql")
      }
    },
    92072(e, n, r) {
      r.d(n, {
        Y: () => i
      });
      var t = r(23023),
        i = function(e, n) {
          var r;
          try {
            r = JSON.stringify(e)
          } catch (e) {
            var i = (0, t.vA)(54, n, e.message);
            throw i.parseError = e, i
          }
          return r
        }
    },
    92300(e, n, r) {
      r.d(n, {
        N: () => i
      });
      var t = r(47593);

      function i(e) {
        return new t.c(function(n) {
          n.error(e)
        })
      }
    },
    49659(e, n, r) {
      r.d(n, {
        A: () => t
      });
      var t = function(e, n, r) {
        var t = new Error(r);
        throw t.name = "ServerError", t.response = e, t.statusCode = e.status, t.result = n, t
      }
    },
    75355(e, n, r) {
      r.d(n, {
        En: () => o,
        JR: () => f,
        Sw: () => l,
        et: () => a,
        ol: () => u,
        uJ: () => s
      });
      var t = r(23023),
        i = "ReactNative" == (0, t.no)(function() {
          return navigator.product
        }),
        a = "function" == typeof WeakMap && !(i && !r.g.HermesInternal),
        o = "function" == typeof WeakSet,
        u = "function" == typeof Symbol && "function" == typeof Symbol.for,
        s = u && Symbol.asyncIterator,
        l = "function" == typeof(0, t.no)(function() {
          return window.document.createElement
        }),
        c = (0, t.no)(function() {
          return navigator.userAgent.indexOf("jsdom") >= 0
        }) || !1,
        f = (l || i) && !c
    },
    61029(e, n, r) {
      r.d(n, {
        Nw: () => s,
        ST: () => o,
        YX: () => u,
        bd: () => l
      });
      var t = r(81384),
        i = r(37540),
        a = r(9722);

      function o(e) {
        return "incremental" in e
      }

      function u(e) {
        return o(e) || function(e) {
          return "hasNext" in e && "data" in e
        }(e)
      }

      function s(e) {
        return (0, t.U)(e) && "payload" in e
      }

      function l(e, n) {
        var r = e,
          t = new a.ZI;
        return o(n) && (0, i.E)(n.incremental) && n.incremental.forEach(function(e) {
          for (var n = e.data, i = e.path, a = i.length - 1; a >= 0; --a) {
            var o = i[a],
              u = isNaN(+o) ? {} : [];
            u[o] = n, n = u
          }
          r = t.merge(r, n)
        }), r
      }
    },
    9722(e, n, r) {
      r.d(n, {
        D9: () => o,
        IM: () => u,
        ZI: () => l
      });
      var t = r(51177),
        i = r(81384),
        a = Object.prototype.hasOwnProperty;

      function o() {
        for (var e = [], n = 0; n < arguments.length; n++) e[n] = arguments[n];
        return u(e)
      }

      function u(e) {
        var n = e[0] || {},
          r = e.length;
        if (r > 1)
          for (var t = new l, i = 1; i < r; ++i) n = t.merge(n, e[i]);
        return n
      }
      var s = function(e, n, r) {
          return this.merge(e[r], n[r])
        },
        l = function() {
          function e(e) {
            void 0 === e && (e = s), this.reconciler = e, this.isObject = i.U, this.pastCopies = new Set
          }
          return e.prototype.merge = function(e, n) {
            for (var r = this, o = [], u = 2; u < arguments.length; u++) o[u - 2] = arguments[u];
            return (0, i.U)(n) && (0, i.U)(e) ? (Object.keys(n).forEach(function(i) {
              if (a.call(e, i)) {
                var u = e[i];
                if (n[i] !== u) {
                  var s = r.reconciler.apply(r, (0, t.fX)([e, n, i], o, !1));
                  s !== u && ((e = r.shallowCopyForMerge(e))[i] = s)
                }
              } else(e = r.shallowCopyForMerge(e))[i] = n[i]
            }), e) : n
          }, e.prototype.shallowCopyForMerge = function(e) {
            return (0, i.U)(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : (0, t.Cl)({
              __proto__: Object.getPrototypeOf(e)
            }, e), this.pastCopies.add(e))), e
          }, e
        }()
    },
    95154(e, n, r) {
      r.d(n, {
        MS: () => a,
        d8: () => o,
        f2: () => u,
        s7: () => s
      });
      var t = r(23023),
        i = r(67122);

      function a(e, n) {
        var r = e.directives;
        return !r || !r.length || function(e) {
          var n = [];
          return e && e.length && e.forEach(function(e) {
            if (function(e) {
                var n = e.name.value;
                return "skip" === n || "include" === n
              }(e)) {
              var r = e.arguments,
                i = e.name.value;
              (0, t.V1)(r && 1 === r.length, 106, i);
              var a = r[0];
              (0, t.V1)(a.name && "if" === a.name.value, 107, i);
              var o = a.value;
              (0, t.V1)(o && ("Variable" === o.kind || "BooleanValue" === o.kind), 108, i), n.push({
                directive: e,
                ifArgument: a
              })
            }
          }), n
        }(r).every(function(e) {
          var r = e.directive,
            i = e.ifArgument,
            a = !1;
          return "Variable" === i.value.kind ? (a = n && n[i.value.name.value], (0, t.V1)(void 0 !== a, 105, r.name.value)) : a = i.value.value, "skip" === r.name.value ? !a : a
        })
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

      function u(e) {
        return e && o(["client", "export"], e, !0)
      }

      function s(e) {
        var n, r, a = null === (n = e.directives) || void 0 === n ? void 0 : n.find(function(e) {
          return "unmask" === e.name.value
        });
        if (!a) return "mask";
        var o = null === (r = a.arguments) || void 0 === r ? void 0 : r.find(function(e) {
          return "mode" === e.name.value
        });
        return !1 !== globalThis.__DEV__ && o && (o.value.kind === i.Kind.VARIABLE ? !1 !== globalThis.__DEV__ && t.V1.warn(109) : o.value.kind !== i.Kind.STRING ? !1 !== globalThis.__DEV__ && t.V1.warn(110) : "migrate" !== o.value.value && !1 !== globalThis.__DEV__ && t.V1.warn(111, o.value.value)), o && "value" in o.value && "migrate" === o.value.value ? "migrate" : "unmask"
      }
    },
    42846(e, n, r) {
      r.d(n, {
        XY: () => h,
        er: () => y,
        iz: () => p,
        x3: () => g,
        zc: () => m
      });
      var t = r(51177),
        i = r(23023),
        a = r(67122),
        o = r(76408),
        u = r(93946),
        s = r(53023),
        l = r(37540),
        c = {
          kind: a.Kind.FIELD,
          name: {
            kind: a.Kind.NAME,
            value: "__typename"
          }
        };

      function f(e, n) {
        return !e || e.selectionSet.selections.every(function(e) {
          return e.kind === a.Kind.FRAGMENT_SPREAD && f(n[e.name.value], n)
        })
      }

      function d(e) {
        return f((0, o.Vu)(e) || (0, o.E4)(e), (0, s.JG)((0, o.zK)(e))) ? null : e
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
        for (var r = v(""), u = v(""), s = function(e) {
            for (var n = 0, t = void 0; n < e.length && (t = e[n]); ++n)
              if (!(0, l.c)(t)) {
                if (t.kind === a.Kind.OPERATION_DEFINITION) return r(t.name && t.name.value);
                if (t.kind === a.Kind.FRAGMENT_DEFINITION) return u(t.name.value)
              } return !1 !== globalThis.__DEV__ && i.V1.error(124), null
          }, c = 0, f = n.definitions.length - 1; f >= 0; --f) n.definitions[f].kind === a.Kind.OPERATION_DEFINITION && ++c;
        var p, h, m, y = (p = e, h = new Map, m = new Map, p.forEach(function(e) {
            e && (e.name ? h.set(e.name, e) : e.test && m.set(e.test, e))
          }), function(e) {
            var n = h.get(e.name.value);
            return !n && m.size && m.forEach(function(r, t) {
              t(e) && (n = r)
            }), n
          }),
          g = function(e) {
            return (0, l.E)(e) && e.map(y).some(function(e) {
              return e && e.remove
            })
          },
          b = new Map,
          E = !1,
          w = {
            enter: function(e) {
              if (g(e.directives)) return E = !0, null
            }
          },
          _ = (0, a.visit)(n, {
            Field: w,
            InlineFragment: w,
            VariableDefinition: {
              enter: function() {
                return !1
              }
            },
            Variable: {
              enter: function(e, n, r, t, i) {
                var a = s(i);
                a && a.variables.add(e.name.value)
              }
            },
            FragmentSpread: {
              enter: function(e, n, r, t, i) {
                if (g(e.directives)) return E = !0, null;
                var a = s(i);
                a && a.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, n, r, t) {
                b.set(JSON.stringify(t), e)
              },
              leave: function(e, n, r, t) {
                return e === b.get(JSON.stringify(t)) ? e : c > 0 && e.selectionSet.selections.every(function(e) {
                  return e.kind === a.Kind.FIELD && "__typename" === e.name.value
                }) ? (u(e.name.value).removed = !0, E = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (y(e)) return E = !0, null
              }
            }
          });
        if (!E) return n;
        var O = function(e) {
            return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach(function(n) {
              O(u(n)).transitiveVars.forEach(function(n) {
                e.transitiveVars.add(n)
              })
            })), e
          },
          C = new Set;
        _.definitions.forEach(function(e) {
          e.kind === a.Kind.OPERATION_DEFINITION ? O(r(e.name && e.name.value)).fragmentSpreads.forEach(function(e) {
            C.add(e)
          }) : e.kind !== a.Kind.FRAGMENT_DEFINITION || 0 !== c || u(e.name.value).removed || C.add(e.name.value)
        }), C.forEach(function(e) {
          O(u(e)).fragmentSpreads.forEach(function(e) {
            C.add(e)
          })
        });
        var k = {
          enter: function(e) {
            if (n = e.name.value, !C.has(n) || u(n).removed) return null;
            var n
          }
        };
        return d((0, a.visit)(_, {
          FragmentSpread: k,
          FragmentDefinition: k,
          OperationDefinition: {
            leave: function(e) {
              if (e.variableDefinitions) {
                var n = O(r(e.name && e.name.value)).transitiveVars;
                if (n.size < e.variableDefinitions.length) return (0, t.Cl)((0, t.Cl)({}, e), {
                  variableDefinitions: e.variableDefinitions.filter(function(e) {
                    return n.has(e.variable.name.value)
                  })
                })
              }
            }
          }
        }))
      }
      var h = Object.assign(function(e) {
        return (0, a.visit)(e, {
          SelectionSet: {
            enter: function(e, n, r) {
              if (!r || r.kind !== a.Kind.OPERATION_DEFINITION) {
                var i = e.selections;
                if (i && !i.some(function(e) {
                    return (0, u.dt)(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                  })) {
                  var o = r;
                  if (!((0, u.dt)(o) && o.directives && o.directives.some(function(e) {
                      return "export" === e.name.value
                    }))) return (0, t.Cl)((0, t.Cl)({}, e), {
                    selections: (0, t.fX)((0, t.fX)([], i, !0), [c], !1)
                  })
                }
              }
            }
          }
        })
      }, {
        added: function(e) {
          return e === c
        }
      });

      function m(e) {
        return "query" === (0, o.Vn)(e).operation ? e : (0, a.visit)(e, {
          OperationDefinition: {
            enter: function(e) {
              return (0, t.Cl)((0, t.Cl)({}, e), {
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

      function g(e) {
        return (0, o.sw)(e), (0, a.visit)(e, {
          FragmentSpread: function(e) {
            var n;
            if (!(null === (n = e.directives) || void 0 === n ? void 0 : n.some(function(e) {
                return "unmask" === e.name.value
              }))) return (0, t.Cl)((0, t.Cl)({}, e), {
              directives: (0, t.fX)((0, t.fX)([], e.directives || [], !0), [{
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
    }
  }
]);