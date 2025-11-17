try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "e510b16f-c34f-4eb9-a60f-1d73aa971ada", e._sentryDebugIdIdentifier = "sentry-dbid-e510b16f-c34f-4eb9-a60f-1d73aa971ada")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/sites-gta-gen9",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta_gen9 = self.webpackChunk_rockstargames_sites_gta_gen9 || []).push([
  [7180], {
    488: (e, t, r) => {
      "use strict";
      var n;
      r.d(t, {
        l: () => u
      });
      var i = r(82540),
        o = r(46026),
        a = r(82966),
        s = o.ol ? Symbol.for("__APOLLO_CONTEXT__") : "__APOLLO_CONTEXT__";

      function u() {
        (0, a.V1)("createContext" in (n || (n = r.t(i, 2))), 69);
        var e = i.createContext[s];
        return e || (Object.defineProperty(i.createContext, s, {
          value: e = i.createContext({}),
          enumerable: !1,
          writable: !1,
          configurable: !0
        }), e.displayName = "ApolloContext"), e
      }
    },
    1910: (e, t, r) => {
      "use strict";
      r.d(t, {
        E: () => i
      });
      var n = r(82540),
        i = r(46026).Sw ? n.useLayoutEffect : n.useEffect
    },
    4548: (e, t, r) => {
      "use strict";
      r.d(t, {
        K$: () => o,
        K4: () => u,
        Mn: () => s,
        uR: () => a
      });
      var n = r(78322),
        i = (r(82966), r(26871)),
        o = Symbol();

      function a(e) {
        return !!e.extensions && Array.isArray(e.extensions[o])
      }

      function s(e) {
        return e.hasOwnProperty("graphQLErrors")
      }
      var u = function(e) {
        function t(r) {
          var o, a, s = r.graphQLErrors,
            u = r.protocolErrors,
            c = r.clientErrors,
            l = r.networkError,
            f = r.errorMessage,
            h = r.extraInfo,
            d = e.call(this, f) || this;
          return d.name = "ApolloError", d.graphQLErrors = s || [], d.protocolErrors = u || [], d.clientErrors = c || [], d.networkError = l || null, d.message = f || (o = d, a = (0, n.__spreadArray)((0, n.__spreadArray)((0, n.__spreadArray)([], o.graphQLErrors, !0), o.clientErrors, !0), o.protocolErrors, !0), o.networkError && a.push(o.networkError), a.map(function(e) {
            return (0, i.U)(e) && e.message || "Error message not found."
          }).join("\n")), d.extraInfo = h, d.cause = (0, n.__spreadArray)((0, n.__spreadArray)((0, n.__spreadArray)([l], s || [], !0), u || [], !0), c || [], !0).find(function(e) {
            return !!e
          }) || null, d.__proto__ = t.prototype, d
        }
        return (0, n.__extends)(t, e), t
      }(Error)
    },
    6306: e => {
      function t(e, t) {
        return Object.keys(t).forEach(function(r) {
          "default" === r || "__esModule" === r || Object.prototype.hasOwnProperty.call(e, r) || Object.defineProperty(e, r, {
            enumerable: !0,
            get: function() {
              return t[r]
            }
          })
        }), e
      }

      function r(e, t, r, n) {
        Object.defineProperty(e, t, {
          get: r,
          set: n,
          enumerable: !0,
          configurable: !0
        })
      }
      var n = {};
      r(n, "ONETRUST_LOADED_EVENT", () => o), r(n, "WRAPPER_CALLED_EVENT", () => a), r(n, "CONSENT_CHANGED_EVENT", () => s), r(n, "init", () => c);
      const i = window.document.currentScript?.nonce,
        o = "ONETRUST_LOADED_EVENT",
        a = "WRAPPER_CALLED_EVENT",
        s = "CONSENT_CHANGED_EVENT";
      let u = !0;

      function c(e) {
        const t = window.document.head,
          r = window.document.createElement("script");
        if (r.setAttribute("id", "onetrust-sdk-stub"), r.setAttribute("src", "https://cdn.cookielaw.org/scripttemplates/otSDKStub.js"), r.setAttribute("type", "text/javascript"), r.setAttribute("charset", "UTF-8"), r.setAttribute("data-document-language", "true"), i && (r.nonce = i), !e) throw new Error("You must specify the OneTrust script ID");
        r.setAttribute("data-domain-script", e), t.insertBefore(r, t.firstChild), window.OptanonWrapper = function() {
          u && (u = !1, window.dispatchEvent(new CustomEvent(o, {
            bubbles: !0
          }))), window.dispatchEvent(new CustomEvent(a, {
            bubbles: !0
          })), window.OneTrust.OnConsentChanged(() => {
            window.dispatchEvent(new CustomEvent(s, {
              bubbles: !0
            }))
          })
        }
      }
      var l = {};
      r(l, "NoChoiceTransactionType", () => f), r(l, "ConfirmedTransactionType", () => h), r(l, "canStoreCookie", () => p);
      const f = "NO_CHOICE",
        h = "CONFIRMED",
        d = {
          AlwaysActive: "always active"
        };

      function p(e, t = null) {
        if (!window.OneTrust) return !1;
        const r = window.OneTrust.GetDomainData(),
          n = r.Groups.find(t => t.Cookies.some(t => t.Name === e));
        if (!n) {
          const r = `Unable to find ${e} in any OneTrust category. Therefore, we won't store the cookie`;
          return t && t.log(r), !1
        }
        if (n.Status === d.AlwaysActive) return !0;
        const i = r.ConsentIntegrationData?.consentPayload?.purposes?.find(e => e.Id === n.PurposeId);
        return i?.TransactionType === h
      }
      t(e.exports, n), t(e.exports, l)
    },
    7569: (e, t, r) => {
      "use strict";
      r.d(t, {
        E: () => i,
        c: () => n
      });
      var n = Array.isArray;

      function i(e) {
        return Array.isArray(e) && e.length > 0
      }
    },
    15492: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => s,
        V: () => u
      });
      var n = r(35394),
        i = r(26753),
        o = new WeakSet;

      function a(e) {
        e.size <= (e.max || -1) || o.has(e) || (o.add(e), setTimeout(function() {
          e.clean(), o.delete(e)
        }, 100))
      }
      var s = function(e, t) {
          var r = new i.l(e, t);
          return r.set = function(e, t) {
            var r = i.l.prototype.set.call(this, e, t);
            return a(this), r
          }, r
        },
        u = function(e, t) {
          var r = new n.C(e, t);
          return r.set = function(e, t) {
            var r = n.C.prototype.set.call(this, e, t);
            return a(this), r
          }, r
        }
    },
    19757: (e, t, r) => {
      "use strict";
      r.d(t, {
        D: () => Ie
      });
      var n = r(78322),
        i = r(82966),
        o = r(87552),
        a = r(81474),
        s = r(85346),
        u = r(74197),
        c = r(81967),
        l = r(57308),
        f = r(48169),
        h = r(26753),
        d = r(27312),
        p = r(48053),
        v = r(49145),
        y = r(38516),
        g = function() {
          function e() {
            this.assumeImmutableResults = !1, this.getFragmentDoc = (0, o.LV)(s.ct, {
              max: u.v["cache.fragmentQueryDocuments"] || 1e3,
              cache: h.l
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
            return void 0 === t && (t = !!e.optimistic), !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.readQuery"), (0, y.lz)("canonizeResults", function() {
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
              h = (0, n.__rest)(e, ["fragment", "fragmentName", "from", "optimistic"]),
              d = this.getFragmentDoc(r, o),
              y = void 0 === a || "string" == typeof a ? a : this.identify(a),
              g = !!e[Symbol.for("apollo.dataMasking")];
            if (!1 !== globalThis.__DEV__) {
              var m = o || (0, c.E4)(r).name.value;
              y || !1 !== globalThis.__DEV__ && i.V1.warn(1, m)
            }
            var _, b = (0, n.__assign)((0, n.__assign)({}, h), {
              returnPartialData: !0,
              id: y,
              query: d,
              optimistic: u
            });
            return new l.c(function(i) {
              return t.watch((0, n.__assign)((0, n.__assign)({}, b), {
                immediate: !0,
                callback: function(a) {
                  var s = g ? (0, v.z)(a.result, r, t, o) : a.result;
                  if (!_ || !(0, p.a)(d, {
                      data: _.result
                    }, {
                      data: s
                    }, e.variables)) {
                    var u = {
                      data: s,
                      complete: !!a.complete
                    };
                    a.missing && (u.missing = (0, f.IM)(a.missing.map(function(e) {
                      return e.missing
                    }))), _ = (0, n.__assign)((0, n.__assign)({}, a), {
                      result: s
                    }), i.next(u)
                  }
                }
              }))
            })
          }, e.prototype.readFragment = function(e, t) {
            var r = this;
            return void 0 === t && (t = !!e.optimistic), !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.readFragment"), (0, y.lz)("canonizeResults", function() {
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
            return !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.updateQuery"), this.batch({
              update: function(r) {
                var i = (0, y.lz)("canonizeResults", function() {
                    return r.readQuery(e)
                  }),
                  o = t(i);
                return null == o ? i : (r.writeQuery((0, n.__assign)((0, n.__assign)({}, e), {
                  data: o
                })), o)
              }
            })
          }, e.prototype.updateFragment = function(e, t) {
            return !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.updateFragment"), this.batch({
              update: function(r) {
                var i = (0, y.lz)("canonizeResults", function() {
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
      !1 !== globalThis.__DEV__ && (g.prototype.getMemoryInternals = d.tQ);
      var m = function(e) {
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
        _ = r(68236),
        b = r(52827),
        w = r(90564),
        E = r(35588),
        k = r(39493),
        O = r(16565),
        S = r(46026),
        T = r(86570),
        D = r(45309),
        R = r(35902),
        V = r(26871),
        x = r(56926),
        M = r(7569),
        P = Object.prototype.hasOwnProperty;

      function I(e) {
        return null == e
      }

      function C(e, t) {
        var r = e.__typename,
          n = e.id,
          i = e._id;
        if ("string" == typeof r && (t && (t.keyObject = I(n) ? I(i) ? void 0 : {
            _id: i
          } : {
            id: n
          }), I(n) && !I(i) && (n = i), !I(n))) return "".concat(r, ":").concat("number" == typeof n || "string" == typeof n ? n : JSON.stringify(n))
      }
      var q = {
        dataIdFromObject: C,
        addTypename: !0,
        resultCaching: !0,
        canonizeResults: !1
      };

      function A(e) {
        var t = e.canonizeResults;
        return void 0 === t ? q.canonizeResults : t
      }
      var F = /^[_a-z][_0-9a-z]*/i;

      function Q(e) {
        var t = e.match(F);
        return t ? t[0] : e
      }

      function j(e, t, r) {
        return !!(0, V.U)(t) && ((0, M.c)(t) ? t.every(function(t) {
          return j(e, t, r)
        }) : e.selections.every(function(e) {
          if ((0, k.dt)(e) && (0, D.MS)(e, r)) {
            var n = (0, k.ue)(e);
            return P.call(t, n) && (!e.selectionSet || j(e.selectionSet, t[n], r))
          }
          return !0
        }))
      }

      function N(e) {
        return (0, V.U)(e) && !(0, k.A_)(e) && !(0, M.c)(e)
      }

      function L(e, t) {
        var r = (0, s.JG)((0, c.zK)(e));
        return {
          fragmentMap: r,
          lookupFragment: function(e) {
            var n = r[e];
            return !n && t && (n = t.lookup(e)), n || null
          }
        }
      }
      var z = Object.create(null),
        W = function() {
          return z
        },
        U = Object.create(null),
        B = function() {
          function e(e, t) {
            var r = this;
            this.policies = e, this.group = t, this.data = Object.create(null), this.rootIds = Object.create(null), this.refs = Object.create(null), this.getFieldValue = function(e, t) {
              return (0, R.G)((0, k.A_)(e) ? r.get(e.__ref, t) : e && e[t])
            }, this.canRead = function(e) {
              return (0, k.A_)(e) ? r.has(e.__ref) : "object" == typeof e
            }, this.toReference = function(e, t) {
              if ("string" == typeof e) return (0, k.WU)(e);
              if ((0, k.A_)(e)) return e;
              var n = r.policies.identify(e)[0];
              if (n) {
                var i = (0, k.WU)(n);
                return t && r.merge(n, e), i
              }
            }
          }
          return e.prototype.toObject = function() {
            return (0, n.__assign)({}, this.data)
          }, e.prototype.has = function(e) {
            return void 0 !== this.lookup(e, !0)
          }, e.prototype.get = function(e, t) {
            if (this.group.depend(e, t), P.call(this.data, e)) {
              var r = this.data[e];
              if (r && P.call(r, t)) return r[t]
            }
            return "__typename" === t && P.call(this.policies.rootTypenamesById, e) ? this.policies.rootTypenamesById[e] : this instanceof H ? this.parent.get(e, t) : void 0
          }, e.prototype.lookup = function(e, t) {
            return t && this.group.depend(e, "__exists"), P.call(this.data, e) ? this.data[e] : this instanceof H ? this.parent.lookup(e, t) : this.policies.rootTypenamesById[e] ? Object.create(null) : void 0
          }, e.prototype.merge = function(e, t) {
            var r, n = this;
            (0, k.A_)(e) && (e = e.__ref), (0, k.A_)(t) && (t = t.__ref);
            var o = "string" == typeof e ? this.lookup(r = e) : e,
              a = "string" == typeof t ? this.lookup(r = t) : t;
            if (a) {
              (0, i.V1)("string" == typeof r, 2);
              var s = new f.ZI($).merge(o, a);
              if (this.data[r] = s, s !== o && (delete this.refs[r], this.group.caching)) {
                var u = Object.create(null);
                o || (u.__exists = 1), Object.keys(a).forEach(function(e) {
                  if (!o || o[e] !== s[e]) {
                    u[e] = 1;
                    var t = Q(e);
                    t === e || n.policies.hasKeyArgs(s.__typename, t) || (u[t] = 1), void 0 !== s[e] || n instanceof H || delete s[e]
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
                  DELETE: z,
                  INVALIDATE: U,
                  isReference: k.A_,
                  toReference: this.toReference,
                  canRead: this.canRead,
                  readField: function(t, n) {
                    return r.policies.readField("string" == typeof t ? {
                      fieldName: t,
                      from: n || (0, k.WU)(e)
                    } : t, {
                      store: r
                    })
                  }
                };
              if (Object.keys(o).forEach(function(l) {
                  var f = Q(l),
                    h = o[l];
                  if (void 0 !== h) {
                    var d = "function" == typeof t ? t : t[l] || t[f];
                    if (d) {
                      var p = d === W ? z : d((0, R.G)(h), (0, n.__assign)((0, n.__assign)({}, c), {
                        fieldName: f,
                        storeFieldName: l,
                        storage: r.getStorage(e, l)
                      }));
                      if (p === U) r.group.dirty(e, l);
                      else if (p === z && (p = void 0), p !== h && (a[l] = p, s = !0, h = p, !1 !== globalThis.__DEV__)) {
                        var v = function(e) {
                          if (void 0 === r.lookup(e.__ref)) return !1 !== globalThis.__DEV__ && i.V1.warn(3, e), !0
                        };
                        if ((0, k.A_)(p)) v(p);
                        else if (Array.isArray(p))
                          for (var y = !1, g = void 0, m = 0, _ = p; m < _.length; m++) {
                            var b = _[m];
                            if ((0, k.A_)(b)) {
                              if (y = !0, v(b)) break
                            } else "object" == typeof b && b && r.policies.identify(b)[0] && (g = b);
                            if (y && void 0 !== g) {
                              !1 !== globalThis.__DEV__ && i.V1.warn(4, g);
                              break
                            }
                          }
                      }
                    }
                    void 0 !== h && (u = !1)
                  }
                }), s) return this.merge(e, a), u && (this instanceof H ? this.data[e] = void 0 : delete this.data[e], this.group.dirty(e, "__exists")), !0
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
              return this.modify(e, a ? ((n = {})[a] = W, n) : W)
            }
            return !1
          }, e.prototype.evict = function(e, t) {
            var r = !1;
            return e.id && (P.call(this.data, e.id) && (r = this.delete(e.id, e.fieldName, e.args)), this instanceof H && this !== t && (r = this.parent.evict(e, t) || r), (e.fieldName || r) && this.group.dirty(e.id, e.fieldName || "__exists")), r
          }, e.prototype.clear = function() {
            this.replace(null)
          }, e.prototype.extract = function() {
            var e = this,
              t = this.toObject(),
              r = [];
            return this.getRootIdSet().forEach(function(t) {
              P.call(e.policies.rootTypenamesById, t) || r.push(t)
            }), r.length && (t.__META = {
              extraRootIds: r.sort()
            }), t
          }, e.prototype.replace = function(e) {
            var t = this;
            if (Object.keys(this.data).forEach(function(r) {
                e && P.call(e, r) || t.delete(r)
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
            return void 0 === e && (e = new Set), Object.keys(this.rootIds).forEach(e.add, e), this instanceof H ? this.parent.getRootIdSet(e) : Object.keys(this.policies.rootTypenamesById).forEach(e.add, e), e
          }, e.prototype.gc = function() {
            var e = this,
              t = this.getRootIdSet(),
              r = this.toObject();
            t.forEach(function(n) {
              P.call(r, n) && (Object.keys(e.findChildRefIds(n)).forEach(t.add, t), delete r[n])
            });
            var n = Object.keys(r);
            if (n.length) {
              for (var i = this; i instanceof H;) i = i.parent;
              n.forEach(function(e) {
                return i.delete(e)
              })
            }
            return n
          }, e.prototype.findChildRefIds = function(e) {
            if (!P.call(this.refs, e)) {
              var t = this.refs[e] = Object.create(null),
                r = this.data[e];
              if (!r) return t;
              var n = new Set([r]);
              n.forEach(function(e) {
                (0, k.A_)(e) && (t[e.__ref] = !0), (0, V.U)(e) && Object.keys(e).forEach(function(t) {
                  var r = e[t];
                  (0, V.U)(r) && n.add(r)
                })
              })
            }
            return this.refs[e]
          }, e.prototype.makeCacheKey = function() {
            return this.group.keyMaker.lookupArray(arguments)
          }, e
        }(),
        K = function() {
          function e(e, t) {
            void 0 === t && (t = null), this.caching = e, this.parent = t, this.d = null, this.resetCaching()
          }
          return e.prototype.resetCaching = function() {
            this.d = this.caching ? (0, o.yN)() : null, this.keyMaker = new x.b(S.et)
          }, e.prototype.depend = function(e, t) {
            if (this.d) {
              this.d(G(e, t));
              var r = Q(t);
              r !== t && this.d(G(e, r)), this.parent && this.parent.depend(e, t)
            }
          }, e.prototype.dirty = function(e, t) {
            this.d && this.d.dirty(G(e, t), "__exists" === t ? "forget" : "setDirty")
          }, e
        }();

      function G(e, t) {
        return t + "#" + e
      }

      function J(e, t) {
        X(e) && e.group.depend(t, "__exists")
      }! function(e) {
        var t = function(e) {
          function t(t) {
            var r = t.policies,
              n = t.resultCaching,
              i = void 0 === n || n,
              o = t.seed,
              a = e.call(this, r, new K(i)) || this;
            return a.stump = new Y(a), a.storageTrie = new x.b(S.et), o && a.replace(o), a
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
      }(B || (B = {}));
      var H = function(e) {
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
                (0, a.L)(n[r], i[r]) || t.group.dirty(e, r)
              }) : (t.group.dirty(e, "__exists"), Object.keys(i).forEach(function(r) {
                t.group.dirty(e, r)
              })) : t.delete(e)
            }), r) : r === this.parent ? this : r.addLayer(this.id, this.replay)
          }, t.prototype.toObject = function() {
            return (0, n.__assign)((0, n.__assign)({}, this.parent.toObject()), this.data)
          }, t.prototype.findChildRefIds = function(t) {
            var r = this.parent.findChildRefIds(t);
            return P.call(this.data, t) ? (0, n.__assign)((0, n.__assign)({}, r), e.prototype.findChildRefIds.call(this, t)) : r
          }, t.prototype.getStorage = function() {
            for (var e = this.parent; e.parent;) e = e.parent;
            return e.getStorage.apply(e, arguments)
          }, t
        }(B),
        Y = function(e) {
          function t(t) {
            return e.call(this, "EntityStore.Stump", t, function() {}, new K(t.group.caching, t.group)) || this
          }
          return (0, n.__extends)(t, e), t.prototype.removeLayer = function() {
            return this
          }, t.prototype.merge = function(e, t) {
            return this.parent.merge(e, t)
          }, t
        }(H);

      function $(e, t, r) {
        var n = e[r],
          i = t[r];
        return (0, a.L)(n, i) ? n : i
      }

      function X(e) {
        return !!(e instanceof B && e.group.caching)
      }
      var Z = function() {
        function e() {
          this.known = new(S.En ? WeakSet : Set), this.pool = new x.b(S.et), this.passes = new WeakMap, this.keysByJSON = new Map, this.empty = this.admit({})
        }
        return e.prototype.isKnown = function(e) {
          return (0, V.U)(e) && this.known.has(e)
        }, e.prototype.pass = function(e) {
          if ((0, V.U)(e)) {
            var t = function(e) {
              return (0, V.U)(e) ? (0, M.c)(e) ? e.slice(0) : (0, n.__assign)({
                __proto__: Object.getPrototypeOf(e)
              }, e) : e
            }(e);
            return this.passes.set(t, e), t
          }
          return e
        }, e.prototype.admit = function(e) {
          var t = this;
          if ((0, V.U)(e)) {
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

      function ee(e) {
        return [e.selectionSet, e.objectOrReference, e.context, e.context.canonizeResults]
      }
      var te = function() {
        function e(e) {
          var t = this;
          this.knownResults = new(S.et ? WeakMap : Map), this.config = (0, T.o)(e, {
            addTypename: !1 !== e.addTypename,
            canonizeResults: A(e)
          }), this.canon = e.canon || new Z, this.executeSelectionSet = (0, o.LV)(function(e) {
            var r, i = e.context.canonizeResults,
              o = ee(e);
            o[3] = !i;
            var a = (r = t.executeSelectionSet).peek.apply(r, o);
            return a ? i ? (0, n.__assign)((0, n.__assign)({}, a), {
              result: t.canon.admit(a.result)
            }) : a : (J(e.context.store, e.enclosingRef.__ref), t.execSelectionSetImpl(e))
          }, {
            max: this.config.resultCacheMaxSize || u.v["inMemoryCache.executeSelectionSet"] || 5e4,
            keyArgs: ee,
            makeCacheKey: function(e, t, r, n) {
              if (X(r.store)) return r.store.makeCacheKey(e, (0, k.A_)(t) ? t.__ref : t, r.varString, n)
            }
          }), this.executeSubSelectedArray = (0, o.LV)(function(e) {
            return J(e.context.store, e.enclosingRef.__ref), t.execSubSelectedArrayImpl(e)
          }, {
            max: this.config.resultCacheMaxSize || u.v["inMemoryCache.executeSubSelectedArray"] || 1e4,
            makeCacheKey: function(e) {
              var t = e.field,
                r = e.array,
                n = e.context;
              if (X(n.store)) return n.store.makeCacheKey(t, r, n.varString)
            }
          })
        }
        return e.prototype.resetCanon = function() {
          this.canon = new Z
        }, e.prototype.diffQueryAgainstStore = function(e) {
          var t = e.store,
            r = e.query,
            i = e.rootId,
            o = void 0 === i ? "ROOT_QUERY" : i,
            a = e.variables,
            s = e.returnPartialData,
            u = void 0 === s || s,
            l = e.canonizeResults,
            f = void 0 === l ? this.config.canonizeResults : l,
            h = this.config.cache.policies;
          a = (0, n.__assign)((0, n.__assign)({}, (0, c.wY)((0, c.AT)(r))), a);
          var d, p = (0, k.WU)(o),
            v = this.executeSelectionSet({
              selectionSet: (0, c.Vn)(r).selectionSet,
              objectOrReference: p,
              enclosingRef: p,
              context: (0, n.__assign)({
                store: t,
                query: r,
                policies: h,
                variables: a,
                varString: (0, w.M)(a),
                canonizeResults: f
              }, L(r, this.config.fragments))
            });
          if (v.missing && (d = [new m(re(v.missing), v.missing, r, a)], !u)) throw d[0];
          return {
            result: v.result,
            complete: !d,
            missing: d
          }
        }, e.prototype.isFresh = function(e, t, r, n) {
          if (X(n.store) && this.knownResults.get(e) === r) {
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
          if ((0, k.A_)(n) && !a.policies.rootTypenamesById[n.__ref] && !a.store.has(n.__ref)) return {
            result: this.canon.empty,
            missing: "Dangling reference to missing ".concat(n.__ref, " object")
          };
          var u, c = a.variables,
            l = a.policies,
            h = a.store.getFieldValue(n, "__typename"),
            d = [],
            p = new f.ZI;

          function v(e, t) {
            var r;
            return e.missing && (u = p.merge(u, ((r = {})[t] = e.missing, r))), e.result
          }
          this.config.addTypename && "string" == typeof h && !l.rootIdsByTypename[h] && d.push({
            __typename: h
          });
          var y = new Set(r.selections);
          y.forEach(function(e) {
            var r, f;
            if ((0, D.MS)(e, c))
              if ((0, k.dt)(e)) {
                var g = l.readField({
                    fieldName: e.name.value,
                    field: e,
                    variables: a.variables,
                    from: n
                  }, a),
                  m = (0, k.ue)(e);
                void 0 === g ? b.XY.added(e) || (u = p.merge(u, ((r = {})[m] = "Can't find field '".concat(e.name.value, "' on ").concat((0, k.A_)(n) ? n.__ref + " object" : "object " + JSON.stringify(n, null, 2)), r))) : (0, M.c)(g) ? g.length > 0 && (g = v(t.executeSubSelectedArray({
                  field: e,
                  array: g,
                  enclosingRef: o,
                  context: a
                }), m)) : e.selectionSet ? null != g && (g = v(t.executeSelectionSet({
                  selectionSet: e.selectionSet,
                  objectOrReference: g,
                  enclosingRef: (0, k.A_)(g) ? g : o,
                  context: a
                }), m)) : a.canonizeResults && (g = t.canon.pass(g)), void 0 !== g && d.push(((f = {})[m] = g, f))
              } else {
                var _ = (0, s.HQ)(e, a.lookupFragment);
                if (!_ && e.kind === O.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(10, e.name.value);
                _ && l.fragmentMatches(_, h) && _.selectionSet.selections.forEach(y.add, y)
              }
          });
          var g = {
              result: (0, f.IM)(d),
              missing: u
            },
            m = a.canonizeResults ? this.canon.admit(g) : (0, R.G)(g);
          return m.result && this.knownResults.set(m.result, r), m
        }, e.prototype.execSubSelectedArrayImpl = function(e) {
          var t, r = this,
            n = e.field,
            o = e.array,
            a = e.enclosingRef,
            s = e.context,
            u = new f.ZI;

          function c(e, r) {
            var n;
            return e.missing && (t = u.merge(t, ((n = {})[r] = e.missing, n))), e.result
          }
          return n.selectionSet && (o = o.filter(s.store.canRead)), o = o.map(function(e, t) {
            return null === e ? null : (0, M.c)(e) ? c(r.executeSubSelectedArray({
              field: n,
              array: e,
              enclosingRef: a,
              context: s
            }), t) : n.selectionSet ? c(r.executeSelectionSet({
              selectionSet: n.selectionSet,
              objectOrReference: e,
              enclosingRef: (0, k.A_)(e) ? e : a,
              context: s
            }), t) : (!1 !== globalThis.__DEV__ && function(e, t, r) {
              if (!t.selectionSet) {
                var n = new Set([r]);
                n.forEach(function(r) {
                  (0, V.U)(r) && ((0, i.V1)(!(0, k.A_)(r), 11, function(e, t) {
                    return (0, k.A_)(t) ? e.get(t.__ref, "__typename") : t && t.__typename
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

      function re(e) {
        try {
          JSON.stringify(e, function(e, t) {
            if ("string" == typeof t) throw t;
            return t
          })
        } catch (e) {
          return e
        }
      }
      var ne = r(77816),
        ie = r(46465),
        oe = r(21823),
        ae = Object.create(null);

      function se(e) {
        var t = JSON.stringify(e);
        return ae[t] || (ae[t] = Object.create(null))
      }

      function ue(e) {
        var t = se(e);
        return t.keyFieldsFn || (t.keyFieldsFn = function(t, r) {
          var n = function(e, t) {
              return r.readField(t, e)
            },
            o = r.keyObject = le(e, function(e) {
              var o = de(r.storeObject, e, n);
              return void 0 === o && t !== r.storeObject && P.call(t, e[0]) && (o = de(t, e, he)), (0, i.V1)(void 0 !== o, 5, e.join("."), t), o
            });
          return "".concat(r.typename, ":").concat(JSON.stringify(o))
        })
      }

      function ce(e) {
        var t = se(e);
        return t.keyArgsFn || (t.keyArgsFn = function(t, r) {
          var n = r.field,
            i = r.variables,
            o = r.fieldName,
            a = le(e, function(e) {
              var r = e[0],
                o = r.charAt(0);
              if ("@" !== o)
                if ("$" !== o) {
                  if (t) return de(t, e)
                } else {
                  var a = r.slice(1);
                  if (i && P.call(i, a)) {
                    var s = e.slice(0);
                    return s[0] = a, de(i, s)
                  }
                }
              else if (n && (0, M.E)(n.directives)) {
                var u = r.slice(1),
                  c = n.directives.find(function(e) {
                    return e.name.value === u
                  }),
                  l = c && (0, k.MB)(c, i);
                return l && de(l, e.slice(1))
              }
            }),
            s = JSON.stringify(a);
          return (t || "{}" !== s) && (o += ":" + s), o
        })
      }

      function le(e, t) {
        var r = new f.ZI;
        return fe(e).reduce(function(e, n) {
          var i, o = t(n);
          if (void 0 !== o) {
            for (var a = n.length - 1; a >= 0; --a)(i = {})[n[a]] = o, o = i;
            e = r.merge(e, o)
          }
          return e
        }, Object.create(null))
      }

      function fe(e) {
        var t = se(e);
        if (!t.paths) {
          var r = t.paths = [],
            n = [];
          e.forEach(function(t, i) {
            (0, M.c)(t) ? (fe(t).forEach(function(e) {
              return r.push(n.concat(e))
            }), n.length = 0) : (n.push(t), (0, M.c)(e[i + 1]) || (r.push(n.slice(0)), n.length = 0))
          })
        }
        return t.paths
      }

      function he(e, t) {
        return e[t]
      }

      function de(e, t, r) {
        return r = r || he, pe(t.reduce(function e(t, n) {
          return (0, M.c)(t) ? t.map(function(t) {
            return e(t, n)
          }) : t && r(t, n)
        }, e))
      }

      function pe(e) {
        return (0, V.U)(e) ? (0, M.c)(e) ? e.map(pe) : le(Object.keys(e).sort(), function(t) {
          return de(e, t)
        }) : e
      }
      var ve = r(48440);

      function ye(e) {
        return void 0 !== e.args ? e.args : e.field ? (0, k.MB)(e.field, e.variables) : null
      }
      var ge = function() {},
        me = function(e, t) {
          return t.fieldName
        },
        _e = function(e, t, r) {
          return (0, r.mergeObjects)(e, t)
        },
        be = function(e, t) {
          return t
        },
        we = function() {
          function e(e) {
            this.config = e, this.typePolicies = Object.create(null), this.toBeAdded = Object.create(null), this.supertypeMap = new Map, this.fuzzySubtypes = new Map, this.rootIdsByTypename = Object.create(null), this.rootTypenamesById = Object.create(null), this.usingPossibleTypes = !1, this.config = (0, n.__assign)({
              dataIdFromObject: C
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
                  var e = ke(arguments, s);
                  return i.readField(e, {
                    store: i.cache.data,
                    variables: e.variables
                  })
                }
              }),
              c = o && this.getTypePolicy(o),
              l = c && c.keyFn || this.config.dataIdFromObject;
            return ve.yV.withValue(!0, function() {
              for (; l;) {
                var t = l((0, n.__assign)((0, n.__assign)({}, e), s), u);
                if (!(0, M.c)(t)) {
                  a = t;
                  break
                }
                l = ue(t)
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
              o && t.setRootTypename("Query", r), a && t.setRootTypename("Mutation", r), s && t.setRootTypename("Subscription", r), P.call(t.toBeAdded, r) ? t.toBeAdded[r].push(u) : t.toBeAdded[r] = [u]
            })
          }, e.prototype.updateTypePolicy = function(e, t, r) {
            var n = this.getTypePolicy(e),
              i = t.keyFields,
              o = t.fields;

            function a(e, t) {
              e.merge = "function" == typeof t ? t : !0 === t ? _e : !1 === t ? be : e.merge
            }
            a(n, t.merge), n.keyFn = !1 === i ? ge : (0, M.c)(i) ? ue(i) : "function" == typeof i ? i : n.keyFn, o && Object.keys(o).forEach(function(t) {
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
                n.keyFn = !1 === s ? me : (0, M.c)(s) ? ce(s) : "function" == typeof s ? s : n.keyFn, "function" == typeof u && (n.read = u), a(n, c)
              }
              n.read && n.merge && (n.keyFn = n.keyFn || me)
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
                var n = e.match(F);
                n && n[0] === e || t.fuzzySubtypes.set(e, new RegExp(e))
              })
            })
          }, e.prototype.getTypePolicy = function(e) {
            var t = this;
            if (!P.call(this.typePolicies, e)) {
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
                d.forEach(c), l && h === u.length - 1 && j(e.selectionSet, r, n) && (l = !1, f = !0, this.fuzzySubtypes.forEach(function(e, r) {
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
                }, s = ye(e); o;) {
                var u = o(s, a);
                if (!(0, M.c)(u)) {
                  t = u || n;
                  break
                }
                o = ce(u)
              }
            return void 0 === t && (t = e.field ? (0, k.Ii)(e.field, e.variables) : (0, k.o5)(n, ye(e))), !1 === t ? n : n === Q(t) ? t : n + ":" + t
          }, e.prototype.readField = function(e, t) {
            var r = e.from;
            if (r && (e.field || e.fieldName)) {
              if (void 0 === e.typename) {
                var n = t.store.getFieldValue(r, "__typename");
                n && (e.typename = n)
              }
              var i = this.getStoreFieldName(e),
                o = Q(i),
                a = t.store.getFieldValue(r, i),
                s = this.getFieldPolicy(e.typename, o),
                u = s && s.read;
              if (u) {
                var c = Ee(this, r, e, t, t.store.getStorage((0, k.A_)(r) ? r.__ref : r, i));
                return oe.bl.withValue(this.cache, u, [a, c])
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
            return s === _e ? Oe(n.store)(e, t) : s === be ? t : (n.overwrite && (e = void 0), s(e, t, Ee(this, void 0, {
              typename: a,
              fieldName: o.name.value,
              field: o,
              variables: n.variables
            }, n, i || Object.create(null))))
          }, e
        }();

      function Ee(e, t, r, n, i) {
        var o = e.getStoreFieldName(r),
          a = Q(o),
          s = r.variables || n.variables,
          u = n.store,
          c = u.toReference,
          l = u.canRead;
        return {
          args: ye(r),
          field: r.field || null,
          fieldName: a,
          storeFieldName: o,
          variables: s,
          isReference: k.A_,
          toReference: c,
          storage: i,
          cache: e.cache,
          canRead: l,
          readField: function() {
            return e.readField(ke(arguments, t, s), n)
          },
          mergeObjects: Oe(n.store)
        }
      }

      function ke(e, t, r) {
        var o, a = e[0],
          s = e[1],
          u = e.length;
        return "string" == typeof a ? o = {
          fieldName: a,
          from: u > 1 ? s : t
        } : (o = (0, n.__assign)({}, a), P.call(o, "from") || (o.from = t)), !1 !== globalThis.__DEV__ && void 0 === o.from && !1 !== globalThis.__DEV__ && i.V1.warn(8, (0, ie.p)(Array.from(e))), void 0 === o.variables && (o.variables = r), o
      }

      function Oe(e) {
        return function(t, r) {
          if ((0, M.c)(t) || (0, M.c)(r)) throw (0, i.vA)(9);
          if ((0, V.U)(t) && (0, V.U)(r)) {
            var o = e.getFieldValue(t, "__typename"),
              a = e.getFieldValue(r, "__typename");
            if (o && a && o !== a) return r;
            if ((0, k.A_)(t) && N(r)) return e.merge(t.__ref, r), t;
            if (N(t) && (0, k.A_)(r)) return e.merge(t, r.__ref), r;
            if (N(t) && N(r)) return (0, n.__assign)((0, n.__assign)({}, t), r)
          }
          return r
        }
      }

      function Se(e, t, r) {
        var i = "".concat(t).concat(r),
          o = e.flavors.get(i);
        return o || e.flavors.set(i, o = e.clientOnly === t && e.deferred === r ? e : (0, n.__assign)((0, n.__assign)({}, e), {
          clientOnly: t,
          deferred: r
        })), o
      }
      var Te = function() {
          function e(e, t, r) {
            this.cache = e, this.reader = t, this.fragments = r
          }
          return e.prototype.writeToStore = function(e, t) {
            var r = this,
              o = t.query,
              s = t.result,
              u = t.dataId,
              l = t.variables,
              h = t.overwrite,
              d = (0, c.Vu)(o),
              p = new f.ZI;
            l = (0, n.__assign)((0, n.__assign)({}, (0, c.wY)(d)), l);
            var v = (0, n.__assign)((0, n.__assign)({
                store: e,
                written: Object.create(null),
                merge: function(e, t) {
                  return p.merge(e, t)
                },
                variables: l,
                varString: (0, w.M)(l)
              }, L(o, this.fragments)), {
                overwrite: !!h,
                incomingById: new Map,
                clientOnly: !1,
                deferred: !1,
                flavors: new Map
              }),
              y = this.processSelectionSet({
                result: s || Object.create(null),
                dataId: u,
                selectionSet: d.selectionSet,
                mergeTree: {
                  map: new Map
                },
                context: v
              });
            if (!(0, k.A_)(y)) throw (0, i.vA)(12, s);
            return v.incomingById.forEach(function(t, o) {
              var s = t.storeObject,
                u = t.mergeTree,
                c = t.fieldNodeSet,
                l = (0, k.WU)(o);
              if (u && u.map.size) {
                var f = r.applyMerges(u, l, s, v);
                if ((0, k.A_)(f)) return;
                s = f
              }
              if (!1 !== globalThis.__DEV__ && !v.overwrite) {
                var h = Object.create(null);
                c.forEach(function(e) {
                  e.selectionSet && (h[e.name.value] = !0)
                }), Object.keys(s).forEach(function(e) {
                  (function(e) {
                    return !0 === h[Q(e)]
                  })(e) && ! function(e) {
                    var t = u && u.map.get(e);
                    return Boolean(t && t.info && t.info.merge)
                  }(e) && function(e, t, r, o) {
                    var s = function(e) {
                        var t = o.getFieldValue(e, r);
                        return "object" == typeof t && t
                      },
                      u = s(e);
                    if (u) {
                      var c = s(t);
                      if (c && !(0, k.A_)(u) && !(0, a.L)(u, c) && !Object.keys(u).every(function(e) {
                          return void 0 !== o.getFieldValue(c, e)
                        })) {
                        var l = o.getFieldValue(e, "__typename") || o.getFieldValue(t, "__typename"),
                          f = Q(r),
                          h = "".concat(l, ".").concat(f);
                        if (!Pe.has(h)) {
                          Pe.add(h);
                          var d = [];
                          (0, M.c)(u) || (0, M.c)(c) || [u, c].forEach(function(e) {
                            var t = o.getFieldValue(e, "__typename");
                            "string" != typeof t || d.includes(t) || d.push(t)
                          }), !1 !== globalThis.__DEV__ && i.V1.warn(15, f, l, d.length ? "either ensure all objects of type " + d.join(" and ") + " have an ID or a custom merge function, or " : "", h, (0, n.__assign)({}, u), (0, n.__assign)({}, c))
                        }
                      }
                    }
                  }(l, s, e, v.store)
                })
              }
              e.merge(o, s)
            }), e.retain(y.__ref), y
          }, e.prototype.processSelectionSet = function(e) {
            var t = this,
              r = e.dataId,
              o = e.result,
              a = e.selectionSet,
              s = e.context,
              u = e.mergeTree,
              c = this.cache.policies,
              l = Object.create(null),
              f = r && c.rootTypenamesById[r] || (0, k.D$)(o, a, s.fragmentMap) || r && s.store.get(r, "__typename");
            "string" == typeof f && (l.__typename = f);
            var h = function() {
                var e = ke(arguments, l, s.variables);
                if ((0, k.A_)(e.from)) {
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
              var n, a = (0, k.ue)(r),
                s = o[a];
              if (d.add(r), void 0 !== s) {
                var p = c.getStoreFieldName({
                    typename: f,
                    fieldName: r.name.value,
                    field: r,
                    variables: e.variables
                  }),
                  v = Re(u, p),
                  y = t.processFieldValue(s, r, r.selectionSet ? Se(e, !1, !1) : e, v),
                  g = void 0;
                r.selectionSet && ((0, k.A_)(y) || N(y)) && (g = h("__typename", y));
                var m = c.getMergeFunction(f, r.name.value, g);
                m ? v.info = {
                  field: r,
                  typename: f,
                  merge: m
                } : Me(u, p), l = e.merge(l, ((n = {})[p] = y, n))
              } else !1 === globalThis.__DEV__ || e.clientOnly || e.deferred || b.XY.added(r) || c.getReadFunction(f, r.name.value) || !1 !== globalThis.__DEV__ && i.V1.error(13, (0, k.ue)(r), o)
            });
            try {
              var p = c.identify(o, {
                  typename: f,
                  selectionSet: a,
                  fragmentMap: s.fragmentMap,
                  storeObject: l,
                  readField: h
                }),
                v = p[0],
                y = p[1];
              r = r || v, y && (l = s.merge(l, y))
            } catch (e) {
              if (!r) throw e
            }
            if ("string" == typeof r) {
              var g = (0, k.WU)(r),
                m = s.written[r] || (s.written[r] = []);
              if (m.indexOf(a) >= 0) return g;
              if (m.push(a), this.reader && this.reader.isFresh(o, g, a, s)) return g;
              var _ = s.incomingById.get(r);
              return _ ? (_.storeObject = s.merge(_.storeObject, l), _.mergeTree = Ve(_.mergeTree, u), d.forEach(function(e) {
                return _.fieldNodeSet.add(e)
              })) : s.incomingById.set(r, {
                storeObject: l,
                mergeTree: xe(u) ? void 0 : u,
                fieldNodeSet: d
              }), g
            }
            return l
          }, e.prototype.processFieldValue = function(e, t, r, n) {
            var i = this;
            return t.selectionSet && null !== e ? (0, M.c)(e) ? e.map(function(e, o) {
              var a = i.processFieldValue(e, t, r, Re(n, o));
              return Me(n, o), a
            }) : this.processSelectionSet({
              result: e,
              selectionSet: t.selectionSet,
              context: r,
              mergeTree: n
            }) : !1 !== globalThis.__DEV__ ? (0, ne.m)(e) : e
          }, e.prototype.flattenFields = function(e, t, r, n) {
            void 0 === n && (n = (0, k.D$)(t, e, r.fragmentMap));
            var o = new Map,
              a = this.cache.policies,
              u = new x.b(!1);
            return function e(c, l) {
              var f = u.lookup(c, l.clientOnly, l.deferred);
              f.visited || (f.visited = !0, c.selections.forEach(function(u) {
                if ((0, D.MS)(u, r.variables)) {
                  var c = l.clientOnly,
                    f = l.deferred;
                  if (c && f || !(0, M.E)(u.directives) || u.directives.forEach(function(e) {
                      var t = e.name.value;
                      if ("client" === t && (c = !0), "defer" === t) {
                        var n = (0, k.MB)(e, r.variables);
                        n && !1 === n.if || (f = !0)
                      }
                    }), (0, k.dt)(u)) {
                    var h = o.get(u);
                    h && (c = c && h.clientOnly, f = f && h.deferred), o.set(u, Se(r, c, f))
                  } else {
                    var d = (0, s.HQ)(u, r.lookupFragment);
                    if (!d && u.kind === O.Kind.FRAGMENT_SPREAD) throw (0, i.vA)(14, u.name.value);
                    d && a.fragmentMatches(d, n, t, r.variables) && e(d.selectionSet, Se(r, c, f))
                  }
                }
              }))
            }(e, r), o
          }, e.prototype.applyMerges = function(e, t, r, o, a) {
            var s, u = this;
            if (e.map.size && !(0, k.A_)(r)) {
              var c, l = (0, M.c)(r) || !(0, k.A_)(t) && !N(t) ? void 0 : t,
                f = r;
              l && !a && (a = [(0, k.A_)(l) ? l.__ref : l]);
              var h = function(e, t) {
                return (0, M.c)(e) ? "number" == typeof t ? e[t] : void 0 : o.store.getFieldValue(e, String(t))
              };
              e.map.forEach(function(e, t) {
                var r = h(l, t),
                  n = h(f, t);
                if (void 0 !== n) {
                  a && a.push(t);
                  var s = u.applyMerges(e, r, n, o, a);
                  s !== n && (c = c || new Map).set(t, s), a && (0, i.V1)(a.pop() === t)
                }
              }), c && (r = (0, M.c)(f) ? f.slice(0) : (0, n.__assign)({}, f), c.forEach(function(e, t) {
                r[t] = e
              }))
            }
            return e.info ? this.cache.policies.runMergeFunction(t, r, e.info, o, a && (s = o.store).getStorage.apply(s, a)) : r
          }, e
        }(),
        De = [];

      function Re(e, t) {
        var r = e.map;
        return r.has(t) || r.set(t, De.pop() || {
          map: new Map
        }), r.get(t)
      }

      function Ve(e, t) {
        if (e === t || !t || xe(t)) return e;
        if (!e || xe(e)) return t;
        var r = e.info && t.info ? (0, n.__assign)((0, n.__assign)({}, e.info), t.info) : e.info || t.info,
          i = e.map.size && t.map.size,
          o = {
            info: r,
            map: i ? new Map : e.map.size ? e.map : t.map
          };
        if (i) {
          var a = new Set(t.map.keys());
          e.map.forEach(function(e, r) {
            o.map.set(r, Ve(e, t.map.get(r))), a.delete(r)
          }), a.forEach(function(r) {
            o.map.set(r, Ve(t.map.get(r), e.map.get(r)))
          })
        }
        return o
      }

      function xe(e) {
        return !e || !(e.info || e.map.size)
      }

      function Me(e, t) {
        var r = e.map,
          n = r.get(t);
        n && xe(n) && (De.push(n), r.delete(t))
      }
      var Pe = new Set,
        Ie = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this) || this;
            return r.watches = new Set, r.addTypenameTransform = new _.c(b.XY), r.assumeImmutableResults = !0, r.makeVar = oe.UT, r.txCount = 0, !1 !== globalThis.__DEV__ && ((0, y.cc)(t, "addTypename", "InMemoryCache", "Please remove the `addTypename` option when initializing `InMemoryCache`."), (0, y.cc)(t, "canonizeResults", "InMemoryCache", "Please remove the `canonizeResults` option when initializing `InMemoryCache`.")), r.config = function(e) {
              return (0, T.o)(q, e)
            }(t), r.addTypename = !!r.config.addTypename, r.policies = new we({
              cache: r,
              dataIdFromObject: r.config.dataIdFromObject,
              possibleTypes: r.config.possibleTypes,
              typePolicies: r.config.typePolicies
            }), r.init(), r
          }
          return (0, n.__extends)(t, e), t.prototype.init = function() {
            var e = this.data = new B.Root({
              policies: this.policies,
              resultCaching: this.config.resultCaching
            });
            this.optimisticData = e.stump, this.resetResultCache()
          }, t.prototype.resetResultCache = function(e) {
            var t = this,
              r = this.storeReader,
              n = this.config.fragments;
            this.addTypenameTransform.resetCache(), null == n || n.resetCaches(), this.storeWriter = new Te(this, this.storeReader = new te({
              cache: this,
              addTypename: this.addTypename,
              resultCacheMaxSize: this.config.resultCacheMaxSize,
              canonizeResults: A(this.config),
              canon: e ? void 0 : r && r.canon,
              fragments: n
            }), n), this.maybeBroadcastWatch = (0, o.LV)(function(e, r) {
              return t.broadcastWatch(e, r)
            }, {
              max: this.config.resultCacheMaxSize || u.v["inMemoryCache.maybeBroadcastWatch"] || 5e3,
              makeCacheKey: function(e) {
                var r = e.optimistic ? t.optimisticData : t.data;
                if (X(r)) {
                  var n = e.optimistic,
                    i = e.id,
                    o = e.variables;
                  return r.makeCacheKey(e.query, e.callback, (0, w.M)({
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
            !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.read");
            var t = e.returnPartialData,
              r = void 0 !== t && t;
            try {
              return this.storeReader.diffQueryAgainstStore((0, n.__assign)((0, n.__assign)({}, e), {
                store: e.optimistic ? this.optimisticData : this.data,
                config: this.config,
                returnPartialData: r
              })).result || null
            } catch (e) {
              if (e instanceof m) return null;
              throw e
            }
          }, t.prototype.write = function(e) {
            try {
              return ++this.txCount, this.storeWriter.writeToStore(this.data, e)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.modify = function(e) {
            if (P.call(e, "id") && !e.id) return !1;
            var t = e.optimistic ? this.optimisticData : this.data;
            try {
              return ++this.txCount, t.modify(e.id || "ROOT_QUERY", e.fields)
            } finally {
              --this.txCount || !1 === e.broadcast || this.broadcastWatches()
            }
          }, t.prototype.diff = function(e) {
            return !1 !== globalThis.__DEV__ && (0, y.cc)(e, "canonizeResults", "cache.diff"), this.storeReader.diffQueryAgainstStore((0, n.__assign)((0, n.__assign)({}, e), {
              store: e.optimistic ? this.optimisticData : this.data,
              rootId: e.id || "ROOT_QUERY",
              config: this.config
            }))
          }, t.prototype.watch = function(e) {
            var t = this;
            return this.watches.size || (0, oe.MS)(this), this.watches.add(e), e.immediate && this.maybeBroadcastWatch(e),
              function() {
                t.watches.delete(e) && !t.watches.size && (0, oe.WR)(t), t.maybeBroadcastWatch.forget(e)
              }
          }, t.prototype.gc = function(e) {
            !1 !== globalThis.__DEV__ && (0, y.cc)(e || {}, "resetResultIdentities", "cache.gc", "First ensure all usages of `canonizeResults` are removed, then remove this option."), w.M.reset(), E.y.reset();
            var t = this.optimisticData.gc();
            return e && !this.txCount && (e.resetResultCache ? this.resetResultCache(e.resetResultIdentities) : e.resetResultIdentities && this.storeReader.resetCanon()), t
          }, t.prototype.retain = function(e, t) {
            return (t ? this.optimisticData : this.data).retain(e)
          }, t.prototype.release = function(e, t) {
            return (t ? this.optimisticData : this.data).release(e)
          }, t.prototype.identify = function(e) {
            if ((0, k.A_)(e)) return e.__ref;
            try {
              return this.policies.identify(e)[0]
            } catch (e) {
              !1 !== globalThis.__DEV__ && i.V1.warn(e)
            }
          }, t.prototype.evict = function(e) {
            if (!e.id) {
              if (P.call(e, "id")) return !1;
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
            return this.init(), w.M.reset(), e && e.discardWatches ? (this.watches.forEach(function(e) {
              return t.maybeBroadcastWatch.forget(e)
            }), this.watches.clear(), (0, oe.WR)(this)) : this.broadcastWatches(), Promise.resolve()
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
              i = (0, y.lz)("canonizeResults", function() {
                return r.diff(e)
              });
            t && (e.optimistic && "string" == typeof t.optimistic && (i.fromOptimisticTransaction = !0), t.onWatchUpdated && !1 === t.onWatchUpdated.call(this, e, i, n)) || n && (0, a.L)(n.result, i.result) || e.callback(e.lastDiff = i, n)
          }, t
        }(g);
      !1 !== globalThis.__DEV__ && (Ie.prototype.getMemoryInternals = d.cM)
    },
    20937: (e, t, r) => {
      "use strict";
      r.d(t, {
        l: () => o
      });
      var n = r(78322),
        i = r(86570);

      function o(e, t) {
        return (0, i.o)(e, t, t.variables && {
          variables: (0, i.o)((0, n.__assign)((0, n.__assign)({}, e && e.variables), t.variables))
        })
      }
    },
    21429: (e, t, r) => {
      "use strict";
      r.d(t, {
        C: () => f
      });
      var n = r(82966),
        i = r(57308),
        o = r(78322),
        a = r(81967),
        s = r(38516);

      function u(e, t) {
        return t ? t(e) : i.c.of()
      }

      function c(e) {
        return "function" == typeof e ? new f(e) : e
      }

      function l(e) {
        return e.request.length <= 1
      }
      var f = function() {
        function e(e) {
          e && (this.request = e)
        }
        return e.empty = function() {
          return new e(function() {
            return i.c.of()
          })
        }, e.from = function(t) {
          return 0 === t.length ? e.empty() : t.map(c).reduce(function(e, t) {
            return e.concat(t)
          })
        }, e.split = function(t, r, n) {
          var o, a = c(r),
            s = c(n || new e(u));
          return o = l(a) && l(s) ? new e(function(e) {
            return t(e) ? a.request(e) || i.c.of() : s.request(e) || i.c.of()
          }) : new e(function(e, r) {
            return t(e) ? a.request(e, r) || i.c.of() : s.request(e, r) || i.c.of()
          }), Object.assign(o, {
            left: a,
            right: s
          })
        }, e.execute = function(e, t) {
          return e.request(function(e, t) {
            var r = (0, o.__assign)({}, e);
            return Object.defineProperty(t, "setContext", {
              enumerable: !1,
              value: function(e) {
                r = "function" == typeof e ? (0, o.__assign)((0, o.__assign)({}, r), e(r)) : (0, o.__assign)((0, o.__assign)({}, r), e)
              }
            }), Object.defineProperty(t, "getContext", {
              enumerable: !1,
              value: function() {
                return (0, o.__assign)({}, r)
              }
            }), t
          }(t.context, function(e) {
            var t = {
              variables: e.variables || {},
              extensions: e.extensions || {},
              operationName: e.operationName,
              query: e.query
            };
            return t.operationName || (t.operationName = "string" != typeof t.query ? (0, a.n4)(t.query) || void 0 : ""), t
          }(function(e) {
            for (var t = ["query", "operationName", "variables", "extensions", "context"], r = 0, i = Object.keys(e); r < i.length; r++) {
              var o = i[r];
              if (t.indexOf(o) < 0) throw (0, n.vA)(58, o)
            }
            return e
          }(t)))) || i.c.of()
        }, e.concat = function(t, r) {
          var o = c(t);
          if (l(o)) return !1 !== globalThis.__DEV__ && n.V1.warn(47, o), o;
          var a, s = c(r);
          return a = l(s) ? new e(function(e) {
            return o.request(e, function(e) {
              return s.request(e) || i.c.of()
            }) || i.c.of()
          }) : new e(function(e, t) {
            return o.request(e, function(e) {
              return s.request(e, t) || i.c.of()
            }) || i.c.of()
          }), Object.assign(a, {
            left: o,
            right: s
          })
        }, e.prototype.split = function(t, r, n) {
          return this.concat(e.split(t, r, n || new e(u)))
        }, e.prototype.concat = function(t) {
          return e.concat(this, t)
        }, e.prototype.request = function(e, t) {
          throw (0, n.vA)(48)
        }, e.prototype.onError = function(e, t) {
          if (!1 !== globalThis.__DEV__ && (0, s.S2)("onError", function() {
              !1 !== globalThis.__DEV__ && n.V1.warn(49)
            }), t && t.error) return t.error(e), !1;
          throw e
        }, e.prototype.setOnError = function(e) {
          return !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && n.V1.warn(50), this.onError = e, this
        }, e
      }()
    },
    21643: (e, t, r) => {
      "use strict";
      r.d(t, {
        R: () => re
      });
      var n = r(78322),
        i = r(82966),
        o = r(21429),
        a = o.C.execute,
        s = r(48914),
        u = r(83605),
        c = function(e) {
          function t(t) {
            void 0 === t && (t = {});
            var r = e.call(this, (0, u.$)(t).request) || this;
            return r.options = t, r
          }
          return (0, n.__extends)(t, e), t
        }(o.C),
        l = r(81474),
        f = r(61102),
        h = r(45309),
        d = r(52827),
        p = r(85346),
        v = r(90564),
        y = r(68236),
        g = r(57308);

      function m(e, t, r) {
        return new g.c(function(n) {
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
      var _ = r(7569);

      function b(e) {
        var t = w(e);
        return (0, _.E)(t)
      }

      function w(e) {
        var t = (0, _.E)(e.errors) ? e.errors.slice(0) : [];
        return (0, f.ST)(e) && (0, _.E)(e.incremental) && e.incremental.forEach(function(e) {
          e.errors && t.push.apply(t, e.errors)
        }), t
      }
      var E = r(81967),
        k = r(39493),
        O = r(26871),
        S = r(35907),
        T = r(74891),
        D = r(69906);

      function R(e) {
        return e && "function" == typeof e.then
      }
      var V = function(e) {
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
              null !== r.sub && (r.latest = ["next", e], r.notify("next", e), (0, T.w)(r.observers, "next", e))
            },
            error: function(e) {
              var t = r.sub;
              null !== t && (t && setTimeout(function() {
                return t.unsubscribe()
              }), r.sub = null, r.latest = ["error", e], r.reject(e), r.notify("error", e), (0, T.w)(r.observers, "error", e))
            },
            complete: function() {
              var e = r,
                t = e.sub,
                n = e.sources;
              if (null !== t) {
                var i = (void 0 === n ? [] : n).shift();
                i ? R(i) ? i.then(function(e) {
                  return r.sub = e.subscribe(r.handlers)
                }, r.handlers.error) : r.sub = i.subscribe(r.handlers) : (t && setTimeout(function() {
                  return t.unsubscribe()
                }), r.sub = null, r.latest && "next" === r.latest[0] ? r.resolve(r.latest[1]) : r.resolve(), r.notify("complete"), (0, T.w)(r.observers, "complete"))
              }
            }
          }, r.nextResultListeners = new Set, r.cancel = function(e) {
            r.reject(e), r.sources = [], r.handlers.error(e)
          }, r.promise.catch(function(e) {}), "function" == typeof t && (t = [new g.c(t)]), R(t) ? t.then(function(e) {
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
      }(g.c);
      (0, D.r)(V);
      var x = r(4548),
        M = r(39254),
        P = r(24304),
        I = r(48169),
        C = r(46026),
        q = r(38516),
        A = new(C.et ? WeakMap : Map);

      function F(e, t) {
        var r = e[t];
        "function" == typeof r && (e[t] = function() {
          return A.set(e, (A.get(e) + 1) % 1e15), r.apply(this, arguments)
        })
      }
      var Q = function() {
        function e(e, t) {
          void 0 === t && (t = e.generateQueryId()), this.queryId = t, this.document = null, this.lastRequestId = 1, this.stopped = !1, this.observableQuery = null;
          var r = this.cache = e.cache;
          A.has(r) || (A.set(r, 0), F(r, "evict"), F(r, "modify"), F(r, "reset"))
        }
        return e.prototype.init = function(e) {
          var t = e.networkStatus || P.pT.loading;
          return this.variables && this.networkStatus !== P.pT.loading && !(0, l.L)(this.variables, e.variables) && (t = P.pT.setVariables), (0, l.L)(e.variables, this.variables) || (this.lastDiff = void 0, this.cancel()), Object.assign(this, {
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
          if (this.lastDiff && (0, l.L)(t, this.lastDiff.options)) return this.lastDiff.diff;
          this.updateWatch(this.variables);
          var r = this.observableQuery;
          if (r && "no-cache" === r.options.fetchPolicy) return {
            complete: !1
          };
          var n = (0, q.lz)("canonizeResults", function() {
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
          e && !e.complete && (0, q.lz)("getLastError", function() {
            var e;
            return null === (e = r.observableQuery) || void 0 === e ? void 0 : e.getLastError()
          }) || (this.updateLastDiff(e), (0, l.L)(n && n.result, e && e.result) || null === (t = this.observableQuery) || void 0 === t || t.scheduleNotify())
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
            this.lastWatch && (0, l.L)(i, this.lastWatch) || (this.cancel(), this.cancelWatch = this.cache.watch(this.lastWatch = i))
          }
        }, e.prototype.resetLastWrite = function() {
          this.lastWrite = void 0
        }, e.prototype.shouldWrite = function(e, t) {
          var r = this.lastWrite;
          return !(r && r.dmCount === A.get(this.cache) && (0, l.L)(t, r.variables) && (0, l.L)(e.data, r.result.data))
        }, e.prototype.markResult = function(e, t, r, n) {
          var i, o = this,
            a = new I.ZI,
            s = (0, _.E)(e.errors) ? e.errors.slice(0) : [];
          if (null === (i = this.observableQuery) || void 0 === i || i.resetNotifications(), "incremental" in e && (0, _.E)(e.incremental)) {
            var u = (0, f.bd)(this.getDiff().result, e);
            e.data = u
          } else if ("hasNext" in e && e.hasNext) {
            var c = this.getDiff();
            e.data = a.merge(c.result, e.data)
          }
          this.graphQLErrors = s, "no-cache" === r.fetchPolicy ? this.updateLastDiff({
            result: e.data,
            complete: !0
          }, this.getDiffOptions(r.variables)) : 0 !== n && (j(e, r.errorPolicy) ? this.cache.performTransaction(function(i) {
            if (o.shouldWrite(e, r.variables)) i.writeQuery({
              query: t,
              data: e.data,
              variables: r.variables,
              overwrite: 1 === n
            }), o.lastWrite = {
              result: e,
              variables: r.variables,
              dmCount: A.get(o.cache)
            };
            else if (o.lastDiff && o.lastDiff.diff.complete) return void(e.data = o.lastDiff.diff.result);
            var a = o.getDiffOptions(r.variables),
              s = (0, q.lz)("canonizeResults", function() {
                return i.diff(a)
              });
            !o.stopped && (0, l.L)(o.variables, r.variables) && o.updateWatch(r.variables), o.updateLastDiff(s, a), s.complete && (e.data = s.result)
          }) : this.lastWrite = void 0)
        }, e.prototype.markReady = function() {
          return this.networkError = null, this.networkStatus = P.pT.ready
        }, e.prototype.markError = function(e) {
          var t;
          return this.networkStatus = P.pT.error, this.lastWrite = void 0, null === (t = this.observableQuery) || void 0 === t || t.resetNotifications(), e.graphQLErrors && (this.graphQLErrors = e.graphQLErrors), e.networkError && (this.networkError = e.networkError), e
        }, e
      }();

      function j(e, t) {
        void 0 === t && (t = "none");
        var r = "ignore" === t || "all" === t,
          n = !b(e);
        return !n && r && e.data && (n = !0), n
      }
      var N = r(35588),
        L = r(56926),
        z = r(15492),
        W = r(74197),
        U = r(78012),
        B = r(48440),
        K = r(49145),
        G = Object.prototype.hasOwnProperty,
        J = Object.create(null),
        H = function() {
          function e(e) {
            var t = this;
            this.clientAwareness = {}, this.queries = new Map, this.fetchCancelFns = new Map, this.transformCache = new z.A(W.v["queryManager.getDocumentInfo"] || 2e3), this.queryIdCounter = 1, this.requestIdCounter = 1, this.mutationIdCounter = 1, this.inFlightLinkObservables = new L.b(!1), this.noCacheWarningsByQueryId = new Set;
            var r = new y.c(function(e) {
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
                v = void 0 === p ? [] : p,
                y = e.awaitRefetchQueries,
                g = void 0 !== y && y,
                _ = e.update,
                E = e.onQueryUpdated,
                k = e.fetchPolicy,
                O = void 0 === k ? (null === (u = this.defaultOptions.mutate) || void 0 === u ? void 0 : u.fetchPolicy) || "network-only" : k,
                S = e.errorPolicy,
                T = void 0 === S ? (null === (c = this.defaultOptions.mutate) || void 0 === c ? void 0 : c.errorPolicy) || "none" : S,
                D = e.keepRootFields,
                R = e.context;
              return (0, n.__generator)(this, function(e) {
                switch (e.label) {
                  case 0:
                    return (0, i.V1)(l, 36), (0, i.V1)("network-only" === O || "no-cache" === O, 37), t = this.generateMutationId(), l = this.cache.transformForLink(this.transform(l)), r = this.getDocumentInfo(l).hasClientExports, f = this.getVariables(l, f), r ? [4, this.localState.addExportedVariables(l, f, R)] : [3, 2];
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
                      fetchPolicy: O,
                      errorPolicy: T,
                      context: R,
                      updateQueries: d,
                      update: _,
                      keepRootFields: D
                    }), this.broadcastQueries(), s = this, [2, new Promise(function(e, r) {
                      return m(s.getObservableFromLink(l, (0, n.__assign)((0, n.__assign)({}, R), {
                        optimisticResponse: a ? h : void 0
                      }), f, {}, !1), function(e) {
                        if (b(e) && "none" === T) throw new x.K4({
                          graphQLErrors: w(e)
                        });
                        o && (o.loading = !1, o.error = null);
                        var r = (0, n.__assign)({}, e);
                        return "function" == typeof v && (v = v(r)), "ignore" === T && b(r) && delete r.errors, s.markMutationResult({
                          mutationId: t,
                          result: r,
                          document: l,
                          variables: f,
                          fetchPolicy: O,
                          errorPolicy: T,
                          context: R,
                          update: _,
                          updateQueries: d,
                          awaitRefetchQueries: g,
                          refetchQueries: v,
                          removeOptimistic: a ? t : void 0,
                          onQueryUpdated: E,
                          keepRootFields: D
                        })
                      }).subscribe({
                        next: function(r) {
                          s.broadcastQueries(), "hasNext" in r && !1 !== r.hasNext || e((0, n.__assign)((0, n.__assign)({}, r), {
                            data: s.maskOperation({
                              document: l,
                              data: r.data,
                              fetchPolicy: O,
                              id: t
                            })
                          }))
                        },
                        error: function(e) {
                          o && (o.loading = !1, o.error = e), a && s.cache.removeOptimistic(t), s.broadcastQueries(), r(e instanceof x.K4 ? e : new x.K4({
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
            if (!a && j(i, e.errorPolicy)) {
              if ((0, f.ST)(i) || o.push({
                  result: i.data,
                  dataId: "ROOT_MUTATION",
                  query: e.document,
                  variables: e.variables
                }), (0, f.ST)(i) && (0, _.E)(i.incremental)) {
                var s = t.diff({
                    id: "ROOT_MUTATION",
                    query: this.getDocumentInfo(e.document).asQuery,
                    variables: e.variables,
                    optimistic: !1,
                    returnPartialData: !0
                  }),
                  u = void 0;
                s.result && (u = (0, f.bd)(s.result, i)), void 0 !== u && (i.data = u, o.push({
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
                if (s && G.call(c, s)) {
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
                    var v = u(p, {
                      mutationResult: i,
                      queryName: f && (0, E.n4)(f) || void 0,
                      queryVariables: h
                    });
                    v && o.push({
                      result: v,
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
                      u = !(0, f.YX)(i) || (0, f.ST)(i) && !i.hasNext;
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
                IGNORE: J
              }) : e;
            return o !== J && (this.cache.recordOptimisticTransaction(function(e) {
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
                hasClientExports: (0, h.f2)(e),
                hasForcedResolvers: this.localState.shouldForceResolvers(e),
                hasNonreactiveDirective: (0, h.d8)(["nonreactive"], e),
                nonReactiveQuery: (0, d.x3)(e),
                clientQuery: this.localState.clientQuery(e),
                serverQuery: (0, d.iz)([{
                  name: "client",
                  remove: !0
                }, {
                  name: "connection"
                }, {
                  name: "nonreactive"
                }, {
                  name: "unmask"
                }], e),
                defaultVars: (0, E.wY)((0, E.Vu)(e)),
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
            var r = new Q(this),
              i = new M.U({
                queryManager: this,
                queryInfo: r,
                options: e
              });
            return i.lastQuery = t, M.U.inactiveOnCreation.getValue() || this.queries.set(i.queryId, r), r.init({
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
              e.observableQuery ? e.networkStatus = P.pT.loading : e.stop()
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
              else if ((0, k.Kc)(e)) {
                var r = (0, N.y)(t.transform(e));
                o.set(r, (0, E.n4)(e)), a.set(r, !1)
              } else(0, O.U)(e) && e.query && s.add(e)
            }), this.queries.forEach(function(t, n) {
              var i = t.observableQuery,
                o = t.document;
              if (i) {
                if ("all" === e) return void r.set(n, i);
                var s = i.queryName;
                if ("standby" === i.options.fetchPolicy || "active" === e && !i.hasObservers()) return;
                ("active" === e || s && a.has(s) || o && a.has((0, N.y)(o))) && (r.set(n, i), s && a.set(s, !0), o && a.set((0, N.y)(o), !0))
              }
            }), s.size && s.forEach(function(e) {
              var o = (0, S.v)("legacyOneTimeQuery"),
                a = t.getOrCreateQuery(o).init({
                  document: e.query,
                  variables: e.variables
                }),
                s = new M.U({
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
              (0, q.lz)("resetLastResults", function() {
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
                "no-cache" !== i && (j(n, a) && t.cache.write({
                  query: r,
                  result: n.data,
                  dataId: "ROOT_SUBSCRIPTION",
                  variables: e
                }), t.broadcastQueries());
                var o = b(n),
                  s = (0, x.uR)(n);
                if (o || s) {
                  var u = {};
                  if (o && (u.graphQLErrors = n.errors), s && (u.protocolErrors = n.extensions[x.K$]), "none" === a || s) throw new x.K4(u)
                }
                return "ignore" === a && delete n.errors, n
              })
            };
            if (this.getDocumentInfo(r).hasClientExports) {
              var h = this.localState.addExportedVariables(r, n, u).then(f);
              return new g.c(function(e) {
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
                  operationName: (0, E.n4)(f) || void 0,
                  context: this.prepareContext((0, n.__assign)((0, n.__assign)({}, t), {
                    forceFetch: !o
                  })),
                  extensions: i
                };
              if (t = y.context, o) {
                var _ = (0, N.y)(f),
                  b = (0, v.M)(r),
                  w = d.lookup(_, b);
                if (!(u = w.observable)) {
                  var k = new V([a(p, y)]);
                  u = w.observable = k, k.beforeNext(function e(t, r) {
                    "next" === t && "hasNext" in r && r.hasNext ? k.beforeNext(e) : d.remove(_, b)
                  })
                }
              } else u = new V([a(p, y)])
            } else u = new V([g.c.of({
              data: {}
            })]), t = this.prepareContext(t);
            return h && (u = m(u, function(e) {
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
            return m(this.getObservableFromLink(i, r.context, r.variables), function(o) {
              var a = w(o),
                s = a.length > 0,
                u = r.errorPolicy;
              if (n >= e.lastRequestId) {
                if (s && "none" === u) throw e.markError(new x.K4({
                  graphQLErrors: a
                }));
                e.markResult(o, i, r, t), e.markReady()
              }
              var c = {
                data: o.data,
                loading: !1,
                networkStatus: P.pT.ready
              };
              return s && "none" === u && (c.data = void 0), s && "ignore" !== u && (c.errors = a, c.networkStatus = P.pT.error), c
            }, function(t) {
              var r = (0, x.Mn)(t) ? t : new x.K4({
                networkError: t
              });
              throw n >= e.lastRequestId && e.markError(r), r
            })
          }, e.prototype.fetchConcastWithInfo = function(e, t, r, n) {
            var i = this;
            void 0 === r && (r = P.pT.loading), void 0 === n && (n = t.query);
            var o, a, s = this.getVariables(n, t.variables),
              u = this.defaultOptions.watchQuery,
              c = t.fetchPolicy,
              l = void 0 === c ? u && u.fetchPolicy || "cache-first" : c,
              f = t.errorPolicy,
              h = void 0 === f ? u && u.errorPolicy || "none" : f,
              d = t.returnPartialData,
              p = void 0 !== d && d,
              v = t.notifyOnNetworkStatusChange,
              y = void 0 !== v && v,
              g = t.context,
              m = void 0 === g ? {} : g,
              _ = Object.assign({}, t, {
                query: n,
                variables: s,
                fetchPolicy: l,
                errorPolicy: h,
                returnPartialData: p,
                notifyOnNetworkStatusChange: y,
                context: m
              }),
              b = function(n) {
                _.variables = n;
                var o = i.fetchQueryByPolicy(e, _, r);
                return "standby" !== _.fetchPolicy && o.sources.length > 0 && e.observableQuery && e.observableQuery.applyNextFetchPolicy("after-fetch", t), o
              },
              w = function() {
                return i.fetchCancelFns.delete(e.queryId)
              };
            if (this.fetchCancelFns.set(e.queryId, function(e) {
                w(), setTimeout(function() {
                  return o.cancel(e)
                })
              }), this.getDocumentInfo(_.query).hasClientExports) o = new V(this.localState.addExportedVariables(_.query, _.variables, _.context).then(b).then(function(e) {
              return e.sources
            })), a = !0;
            else {
              var E = b(_.variables);
              a = E.fromLink, o = new V(E.sources)
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
              s = void 0 === a ? o ? (0, S.v)("refetchQueries") : void 0 : a,
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
                var n = e.watcher instanceof Q && e.watcher.observableQuery;
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
              u && (a || (a = (0, q.lz)("canonizeResults", function() {
                return t.cache.diff(i.queryInfo.getDiffOptions())
              })), n = u(i, a, o)), u && !0 !== n || (n = i.refetch()), !1 !== n && l.set(i, n), r.indexOf("legacyOneTimeQuery") >= 0 && t.stopQueryNoBroadcast(r)
            }), s && this.cache.removeOptimistic(s), l
          }, e.prototype.maskOperation = function(e) {
            var t, r, n, o = e.document,
              a = e.data;
            if (!1 !== globalThis.__DEV__) {
              var s = e.fetchPolicy,
                u = e.id,
                c = null === (t = (0, E.Vu)(o)) || void 0 === t ? void 0 : t.operation,
                l = (null !== (r = null == c ? void 0 : c[0]) && void 0 !== r ? r : "o") + u;
              !this.dataMasking || "no-cache" !== s || (0, p.s6)(o) || this.noCacheWarningsByQueryId.has(l) || (this.noCacheWarningsByQueryId.add(l), !1 !== globalThis.__DEV__ && i.V1.warn(45, null !== (n = (0, E.n4)(o)) && void 0 !== n ? n : "Unnamed ".concat(null != c ? c : "operation")))
            }
            return this.dataMasking ? function(e, t, r) {
              var n;
              if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && (0, B.Ki)(), e;
              var o = (0, E.Vu)(t);
              return (0, i.V1)(o, 63), null == e ? e : (0, U.S)(e, o.selectionSet, {
                operationType: o.operation,
                operationName: null === (n = o.name) || void 0 === n ? void 0 : n.value,
                fragmentMap: (0, p.JG)((0, E.zK)(t)),
                cache: r,
                mutableTargets: new B.jq,
                knownChanged: new B.xm
              })
            }(a, o, this.cache) : a
          }, e.prototype.maskFragment = function(e) {
            var t = e.data,
              r = e.fragment,
              n = e.fragmentName;
            return this.dataMasking ? (0, K.z)(t, r, this.cache, n) : t
          }, e.prototype.fetchQueryByPolicy = function(e, t, r) {
            var i = this,
              o = t.query,
              a = t.variables,
              s = t.fetchPolicy,
              u = t.refetchWritePolicy,
              c = t.errorPolicy,
              f = t.returnPartialData,
              h = t.context,
              d = t.notifyOnNetworkStatusChange,
              p = e.networkStatus;
            e.init({
              document: o,
              variables: a,
              networkStatus: r
            });
            var v = function() {
                return e.getDiff()
              },
              y = function(t, r) {
                void 0 === r && (r = e.networkStatus || P.pT.loading);
                var s = t.result;
                !1 === globalThis.__DEV__ || f || (0, l.L)(s, {}) || (0, M.y)(t.missing);
                var u = function(e) {
                  return g.c.of((0, n.__assign)({
                    data: e,
                    loading: (0, P.bi)(r),
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
                  context: h,
                  variables: a,
                  onlyRunForcedResolvers: !0
                }).then(function(e) {
                  return u(e.data || void 0)
                }) : "none" === c && r === P.pT.refetch && Array.isArray(t.missing) ? u(void 0) : u(s)
              },
              m = "no-cache" === s ? 0 : r === P.pT.refetch && "merge" !== u ? 1 : 2,
              _ = function() {
                return i.getResultsFromLink(e, m, {
                  query: o,
                  variables: a,
                  context: h,
                  fetchPolicy: s,
                  errorPolicy: c
                })
              },
              b = d && "number" == typeof p && p !== r && (0, P.bi)(r);
            switch (s) {
              default:
              case "cache-first":
                return (w = v()).complete ? {
                  fromLink: !1,
                  sources: [y(w, e.markReady())]
                } : f || b ? {
                  fromLink: !0,
                  sources: [y(w), _()]
                } : {
                  fromLink: !0,
                  sources: [_()]
                };
              case "cache-and-network":
                var w;
                return (w = v()).complete || f || b ? {
                  fromLink: !0,
                  sources: [y(w), _()]
                } : {
                  fromLink: !0,
                  sources: [_()]
                };
              case "cache-only":
                return {
                  fromLink: !1, sources: [y(v(), e.markReady())]
                };
              case "network-only":
                return b ? {
                  fromLink: !0,
                  sources: [y(v()), _()]
                } : {
                  fromLink: !0,
                  sources: [_()]
                };
              case "no-cache":
                return b ? {
                  fromLink: !0,
                  sources: [y(e.getDiff()), _()]
                } : {
                  fromLink: !0,
                  sources: [_()]
                };
              case "standby":
                return {
                  fromLink: !1, sources: []
                }
            }
          }, e.prototype.getOrCreateQuery = function(e) {
            return e && !this.queries.has(e) && this.queries.set(e, new Q(this, e)), this.queries.get(e)
          }, e.prototype.prepareContext = function(e) {
            void 0 === e && (e = {});
            var t = this.localState.prepareContext(e);
            return (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, this.defaultContext), t), {
              clientAwareness: this.clientAwareness
            })
          }, e
        }(),
        Y = r(16565),
        $ = r(21823),
        X = function() {
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
              t.resolvers = (0, I.D9)(t.resolvers, e)
            }) : this.resolvers = (0, I.D9)(this.resolvers, e)
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
            return (0, h.d8)(["client"], e) && this.resolvers ? e : null
          }, e.prototype.serverQuery = function(e) {
            return (0, d.er)(e)
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
            return (0, Y.visit)(e, {
              Directive: {
                enter: function(e) {
                  if ("client" === e.name.value && e.arguments && (t = e.arguments.some(function(e) {
                      return "always" === e.name.value && "BooleanValue" === e.value.kind && !0 === e.value.value
                    }))) return Y.BREAK
                }
              }
            }), t
          }, e.prototype.buildRootValueFromCache = function(e, t) {
            return this.cache.diff({
              query: (0, d.zc)(e),
              variables: t,
              returnPartialData: !0,
              optimistic: !1
            }).result
          }, e.prototype.resolveDocument = function(e, t) {
            return (0, n.__awaiter)(this, arguments, void 0, function(e, t, r, i, o, a) {
              var s, u, c, l, f, h, d, v, y, g;
              return void 0 === r && (r = {}), void 0 === i && (i = {}), void 0 === o && (o = function() {
                return !0
              }), void 0 === a && (a = !1), (0, n.__generator)(this, function(m) {
                return s = (0, E.Vn)(e), u = (0, E.zK)(e), c = (0, p.JG)(u), l = this.collectSelectionsToResolve(s, c), f = s.operation, h = f ? f.charAt(0).toUpperCase() + f.slice(1) : "Query", v = (d = this).cache, y = d.client, g = {
                  fragmentMap: c,
                  context: (0, n.__assign)((0, n.__assign)({}, r), {
                    cache: v,
                    client: y
                  }),
                  variables: i,
                  fragmentMatcher: o,
                  defaultOperationType: h,
                  exportedVariables: {},
                  selectionsToResolve: l,
                  onlyRunForcedResolvers: a
                }, [2, this.resolveSelectionSet(s.selectionSet, !1, t, g).then(function(e) {
                  return {
                    result: e,
                    exportedVariables: g.exportedVariables
                  }
                })]
              })
            })
          }, e.prototype.resolveSelectionSet = function(e, t, r, o) {
            return (0, n.__awaiter)(this, void 0, void 0, function() {
              var a, s, u, c, l, f = this;
              return (0, n.__generator)(this, function(d) {
                return a = o.fragmentMap, s = o.context, u = o.variables, c = [r], l = function(e) {
                  return (0, n.__awaiter)(f, void 0, void 0, function() {
                    var l, f;
                    return (0, n.__generator)(this, function(n) {
                      return (t || o.selectionsToResolve.has(e)) && (0, h.MS)(e, u) ? (0, k.dt)(e) ? [2, this.resolveField(e, t, r, o).then(function(t) {
                        var r;
                        void 0 !== t && c.push(((r = {})[(0, k.ue)(e)] = t, r))
                      })] : ((0, k.kd)(e) ? l = e : (l = a[e.name.value], (0, i.V1)(l, 21, e.name.value)), l && l.typeCondition && (f = l.typeCondition.name.value, o.fragmentMatcher(r, f, s)) ? [2, this.resolveSelectionSet(l.selectionSet, t, r, o).then(function(e) {
                        c.push(e)
                      })] : [2]) : [2]
                    })
                  })
                }, [2, Promise.all(e.selections.map(l)).then(function() {
                  return (0, I.IM)(c)
                })]
              })
            })
          }, e.prototype.resolveField = function(e, t, r, i) {
            return (0, n.__awaiter)(this, void 0, void 0, function() {
              var o, a, s, u, c, l, f, h, d, p = this;
              return (0, n.__generator)(this, function(n) {
                return r ? (o = i.variables, a = e.name.value, s = (0, k.ue)(e), u = a !== s, c = r[s] || r[a], l = Promise.resolve(c), i.onlyRunForcedResolvers && !this.shouldForceResolvers(e) || (f = r.__typename || i.defaultOperationType, (h = this.resolvers && this.resolvers[f]) && (d = h[u ? a : s]) && (l = Promise.resolve($.bl.withValue(this.cache, d, [r, (0, k.MB)(e, o), i.context, {
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
                n.set(o, a), (0, Y.visit)(o, {
                  Directive: function(e, t, n, i, o) {
                    "client" === e.name.value && o.forEach(function(e) {
                      r(e) && (0, Y.isSelectionNode)(e) && a.add(e)
                    })
                  },
                  FragmentSpread: function(n, o, s, u, c) {
                    var l = t[n.name.value];
                    (0, i.V1)(l, 22, n.name.value);
                    var f = e(l);
                    f.size > 0 && (c.forEach(function(e) {
                      r(e) && (0, Y.isSelectionNode)(e) && a.add(e)
                    }), a.add(n), f.forEach(function(e) {
                      a.add(e)
                    }))
                  }
                })
              }
              return n.get(o)
            }(e)
          }, e
        }(),
        Z = r(20937),
        ee = r(27312),
        te = !1,
        re = function() {
          function e(e) {
            var t, r, a, u = this;
            if (this.resetStoreCallbacks = [], this.clearStoreCallbacks = [], !e.cache) throw (0, i.vA)(16);
            var l = e.uri,
              f = e.credentials,
              h = e.headers,
              d = e.cache,
              p = e.documentTransform,
              v = e.ssrMode,
              y = void 0 !== v && v,
              g = e.ssrForceFetchDelay,
              m = void 0 === g ? 0 : g,
              _ = e.connectToDevTools,
              b = e.queryDeduplication,
              w = void 0 === b || b,
              E = e.defaultOptions,
              k = e.defaultContext,
              O = e.assumeImmutableResults,
              S = void 0 === O ? d.assumeImmutableResults : O,
              T = e.resolvers,
              D = e.typeDefs,
              R = e.fragmentMatcher,
              V = e.clientAwareness,
              x = e.name,
              M = e.version,
              P = e.devtools,
              I = e.dataMasking;
            !1 !== globalThis.__DEV__ && ((0, q.cc)(e, "connectToDevTools", "ApolloClient", "Please use `devtools.enabled` instead."), (0, q.cc)(e, "uri", "ApolloClient", "Please initialize an instance of `HttpLink` with `uri` instead."), (0, q.cc)(e, "credentials", "ApolloClient", "Please initialize an instance of `HttpLink` with `credentials` instead."), (0, q.cc)(e, "headers", "ApolloClient", "Please initialize an instance of `HttpLink` with `headers` instead."), (0, q.cc)(e, "name", "ApolloClient", "Please use the `clientAwareness.name` option instead."), (0, q.cc)(e, "version", "ApolloClient", "Please use the `clientAwareness.version` option instead."), (0, q.cc)(e, "typeDefs", "ApolloClient"), e.link || !1 !== globalThis.__DEV__ && i.V1.warn(17));
            var C = e.link;
            C || (C = l ? new c({
              uri: l,
              credentials: f,
              headers: h
            }) : o.C.empty()), this.link = C, this.cache = d, this.disableNetworkFetches = y || m > 0, this.queryDeduplication = w, this.defaultOptions = E || Object.create(null), this.typeDefs = D, this.devtoolsConfig = (0, n.__assign)((0, n.__assign)({}, P), {
              enabled: null !== (t = null == P ? void 0 : P.enabled) && void 0 !== t ? t : _
            }), void 0 === this.devtoolsConfig.enabled && (this.devtoolsConfig.enabled = !1 !== globalThis.__DEV__), m && setTimeout(function() {
              return u.disableNetworkFetches = !1
            }, m), this.watchQuery = this.watchQuery.bind(this), this.query = this.query.bind(this), this.mutate = this.mutate.bind(this), this.watchFragment = this.watchFragment.bind(this), this.resetStore = this.resetStore.bind(this), this.reFetchObservableQueries = this.reFetchObservableQueries.bind(this), this.version = s.r, this.localState = new X({
              cache: d,
              client: this,
              resolvers: T,
              fragmentMatcher: R
            }), this.queryManager = new H({
              cache: this.cache,
              link: this.link,
              defaultOptions: this.defaultOptions,
              defaultContext: k,
              documentTransform: p,
              queryDeduplication: w,
              ssrMode: y,
              dataMasking: !!I,
              clientAwareness: {
                name: null !== (r = null == V ? void 0 : V.name) && void 0 !== r ? r : x,
                version: null !== (a = null == V ? void 0 : V.version) && void 0 !== a ? a : M
              },
              localState: this.localState,
              assumeImmutableResults: S,
              onBroadcast: this.devtoolsConfig.enabled ? function() {
                u.devToolsHookCb && u.devToolsHookCb({
                  action: {},
                  state: {
                    queries: u.queryManager.getQueryStore(),
                    mutations: u.queryManager.mutationStore || {}
                  },
                  dataWithOptimisticResults: u.cache.extract(!0)
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
              (e[t] = e[t] || []).push(this), e.__APOLLO_CLIENT__ = this, te || !1 === globalThis.__DEV__ || (te = !0, window.document && window.top === window.self && /^(https?|file):$/.test(window.location.protocol) && setTimeout(function() {
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
            return this.defaultOptions.watchQuery && (e = (0, Z.l)(this.defaultOptions.watchQuery, e)), !this.disableNetworkFetches || "network-only" !== e.fetchPolicy && "cache-and-network" !== e.fetchPolicy || (e = (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: "cache-first"
            })), !1 !== globalThis.__DEV__ && ((0, q.cc)(e, "canonizeResults", "client.watchQuery"), (0, q.cc)(e, "partialRefetch", "client.watchQuery")), this.queryManager.watchQuery(e)
          }, e.prototype.query = function(e) {
            return this.defaultOptions.query && (e = (0, Z.l)(this.defaultOptions.query, e)), (0, i.V1)("cache-and-network" !== e.fetchPolicy, 18), this.disableNetworkFetches && "network-only" === e.fetchPolicy && (e = (0, n.__assign)((0, n.__assign)({}, e), {
              fetchPolicy: "cache-first"
            })), !1 !== globalThis.__DEV__ && ((0, q.cc)(e, "canonizeResults", "client.query"), (0, q.cc)(e, "notifyOnNetworkStatusChange", "client.query", "This option does not affect `client.query` and can be safely removed."), "standby" === e.fetchPolicy && !1 !== globalThis.__DEV__ && i.V1.warn(19)), this.queryManager.query(e)
          }, e.prototype.mutate = function(e) {
            return this.defaultOptions.mutate && (e = (0, Z.l)(this.defaultOptions.mutate, e)), this.queryManager.mutate(e)
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
      !1 !== globalThis.__DEV__ && (re.prototype.getMemoryInternals = ee.ep)
    },
    24304: (e, t, r) => {
      "use strict";
      var n;

      function i(e) {
        return !!e && e < 7
      }
      r.d(t, {
          bi: () => i,
          pT: () => n
        }),
        function(e) {
          e[e.loading = 1] = "loading", e[e.setVariables = 2] = "setVariables", e[e.fetchMore = 3] = "fetchMore", e[e.refetch = 4] = "refetch", e[e.poll = 6] = "poll", e[e.ready = 7] = "ready", e[e.error = 8] = "error"
        }(n || (n = {}))
    },
    26753: (e, t, r) => {
      "use strict";

      function n() {}
      r.d(t, {
        l: () => u
      });
      const i = n,
        o = "undefined" != typeof WeakRef ? WeakRef : function(e) {
          return {
            deref: () => e
          }
        },
        a = "undefined" != typeof WeakMap ? WeakMap : Map,
        s = "undefined" != typeof FinalizationRegistry ? FinalizationRegistry : function() {
          return {
            register: n,
            unregister: n
          }
        };
      class u {
        constructor(e = 1 / 0, t = i) {
          this.max = e, this.dispose = t, this.map = new a, this.newest = null, this.oldest = null, this.unfinalizedNodes = new Set, this.finalizationScheduled = !1, this.size = 0, this.finalize = () => {
            const e = this.unfinalizedNodes.values();
            for (let t = 0; t < 10024; t++) {
              const t = e.next().value;
              if (!t) break;
              this.unfinalizedNodes.delete(t);
              const r = t.key;
              delete t.key, t.keyRef = new o(r), this.registry.register(r, t, t)
            }
            this.unfinalizedNodes.size > 0 ? queueMicrotask(this.finalize) : this.finalizationScheduled = !1
          }, this.registry = new s(this.deleteNode.bind(this))
        }
        has(e) {
          return this.map.has(e)
        }
        get(e) {
          const t = this.getNode(e);
          return t && t.value
        }
        getNode(e) {
          const t = this.map.get(e);
          if (t && t !== this.newest) {
            const {
              older: e,
              newer: r
            } = t;
            r && (r.older = e), e && (e.newer = r), t.older = this.newest, t.older.newer = t, t.newer = null, this.newest = t, t === this.oldest && (this.oldest = r)
          }
          return t
        }
        set(e, t) {
          let r = this.getNode(e);
          return r ? r.value = t : (r = {
            key: e,
            value: t,
            newer: null,
            older: this.newest
          }, this.newest && (this.newest.newer = r), this.newest = r, this.oldest = this.oldest || r, this.scheduleFinalization(r), this.map.set(e, r), this.size++, r.value)
        }
        clean() {
          for (; this.oldest && this.size > this.max;) this.deleteNode(this.oldest)
        }
        deleteNode(e) {
          e === this.newest && (this.newest = e.older), e === this.oldest && (this.oldest = e.newer), e.newer && (e.newer.older = e.older), e.older && (e.older.newer = e.newer), this.size--;
          const t = e.key || e.keyRef && e.keyRef.deref();
          this.dispose(e.value, t), e.keyRef ? this.registry.unregister(e) : this.unfinalizedNodes.delete(e), t && this.map.delete(t)
        }
        delete(e) {
          const t = this.map.get(e);
          return !!t && (this.deleteNode(t), !0)
        }
        scheduleFinalization(e) {
          this.unfinalizedNodes.add(e), this.finalizationScheduled || (this.finalizationScheduled = !0, queueMicrotask(this.finalize))
        }
      }
    },
    26871: (e, t, r) => {
      "use strict";

      function n(e) {
        return null !== e && "object" == typeof e
      }
      r.d(t, {
        U: () => n
      })
    },
    27312: (e, t, r) => {
      "use strict";
      r.d(t, {
        D_: () => a,
        cM: () => u,
        ep: () => s,
        tQ: () => c
      });
      var n = r(78322),
        i = r(74197),
        o = {};

      function a(e, t) {
        o[e] = t
      }
      var s = !1 !== globalThis.__DEV__ ? function() {
          var e, t, r, a, s;
          if (!1 === globalThis.__DEV__) throw new Error("only supported in development mode");
          return {
            limits: Object.fromEntries(Object.entries({
              parser: 1e3,
              canonicalStringify: 1e3,
              print: 2e3,
              "documentTransform.cache": 2e3,
              "queryManager.getDocumentInfo": 2e3,
              "PersistedQueryLink.persistedQueryHashes": 2e3,
              "fragmentRegistry.transform": 2e3,
              "fragmentRegistry.lookup": 1e3,
              "fragmentRegistry.findFragmentSpreads": 4e3,
              "cache.fragmentQueryDocuments": 1e3,
              "removeTypenameFromVariables.getVariableDefinitions": 2e3,
              "inMemoryCache.maybeBroadcastWatch": 5e3,
              "inMemoryCache.executeSelectionSet": 5e4,
              "inMemoryCache.executeSubSelectedArray": 1e4
            }).map(function(e) {
              var t = e[0],
                r = e[1];
              return [t, i.v[t] || r]
            })),
            sizes: (0, n.__assign)({
              print: null === (e = o.print) || void 0 === e ? void 0 : e.call(o),
              parser: null === (t = o.parser) || void 0 === t ? void 0 : t.call(o),
              canonicalStringify: null === (r = o.canonicalStringify) || void 0 === r ? void 0 : r.call(o),
              links: v(this.link),
              queryManager: {
                getDocumentInfo: this.queryManager.transformCache.size,
                documentTransforms: d(this.queryManager.documentTransform)
              }
            }, null === (s = (a = this.cache).getMemoryInternals) || void 0 === s ? void 0 : s.call(a))
          }
        } : void 0,
        u = !1 !== globalThis.__DEV__ ? function() {
          var e = this.config.fragments;
          return (0, n.__assign)((0, n.__assign)({}, l.apply(this)), {
            addTypenameDocumentTransform: d(this.addTypenameTransform),
            inMemoryCache: {
              executeSelectionSet: f(this.storeReader.executeSelectionSet),
              executeSubSelectedArray: f(this.storeReader.executeSubSelectedArray),
              maybeBroadcastWatch: f(this.maybeBroadcastWatch)
            },
            fragmentRegistry: {
              findFragmentSpreads: f(null == e ? void 0 : e.findFragmentSpreads),
              lookup: f(null == e ? void 0 : e.lookup),
              transform: f(null == e ? void 0 : e.transform)
            }
          })
        } : void 0,
        c = !1 !== globalThis.__DEV__ ? l : void 0;

      function l() {
        return {
          cache: {
            fragmentQueryDocuments: f(this.getFragmentDoc)
          }
        }
      }

      function f(e) {
        return function(e) {
          return !!e && "dirtyKey" in e
        }(e) ? e.size : void 0
      }

      function h(e) {
        return null != e
      }

      function d(e) {
        return p(e).map(function(e) {
          return {
            cache: e
          }
        })
      }

      function p(e) {
        return e ? (0, n.__spreadArray)((0, n.__spreadArray)([f(null == e ? void 0 : e.performWork)], p(null == e ? void 0 : e.left), !0), p(null == e ? void 0 : e.right), !0).filter(h) : []
      }

      function v(e) {
        var t;
        return e ? (0, n.__spreadArray)((0, n.__spreadArray)([null === (t = null == e ? void 0 : e.getMemoryInternals) || void 0 === t ? void 0 : t.call(e)], v(null == e ? void 0 : e.left), !0), v(null == e ? void 0 : e.right), !0).filter(h) : []
      }
    },
    31703: (e, t, r) => {
      "use strict";
      r.d(t, {
        h: () => o
      });
      var n = r(82540),
        i = r(82966);

      function o(e, t, r, o) {
        void 0 === o && (o = "Please remove this option.");
        var a = n.useRef(!1);
        t in e && !a.current && (!1 !== globalThis.__DEV__ && i.V1.warn(78, r, t, o), a.current = !0)
      }
    },
    35216: (e, t, r) => {
      "use strict";
      r.d(t, {
        D$: () => h,
        KG: () => n
      });
      var n, i, o = r(82966),
        a = r(15492),
        s = r(74197),
        u = r(27312),
        c = r(38516);

      function l(e) {
        var t;
        switch (e) {
          case n.Query:
            t = "Query";
            break;
          case n.Mutation:
            t = "Mutation";
            break;
          case n.Subscription:
            t = "Subscription"
        }
        return t
      }

      function f(e) {
        (0, c.S2)("parser", function() {
          !1 !== globalThis.__DEV__ && o.V1.warn(94)
        }), i || (i = new a.A(s.v.parser || 1e3));
        var t, r, u = i.get(e);
        if (u) return u;
        (0, o.V1)(!!e && !!e.kind, 95, e);
        for (var l = [], f = [], h = [], d = [], p = 0, v = e.definitions; p < v.length; p++) {
          var y = v[p];
          if ("FragmentDefinition" !== y.kind) {
            if ("OperationDefinition" === y.kind) switch (y.operation) {
              case "query":
                f.push(y);
                break;
              case "mutation":
                h.push(y);
                break;
              case "subscription":
                d.push(y)
            }
          } else l.push(y)
        }(0, o.V1)(!l.length || f.length || h.length || d.length, 96), (0, o.V1)(f.length + h.length + d.length <= 1, 97, e, f.length, d.length, h.length), r = f.length ? n.Query : n.Mutation, f.length || h.length || (r = n.Subscription);
        var g = f.length ? f : h.length ? h : d;
        (0, o.V1)(1 === g.length, 98, e, g.length);
        var m = g[0];
        t = m.variableDefinitions || [];
        var _ = {
          name: m.name && "Name" === m.name.kind ? m.name.value : "data",
          type: r,
          variables: t
        };
        return i.set(e, _), _
      }

      function h(e, t) {
        var r = (0, c.lz)("parser", f, [e]),
          n = l(t),
          i = l(r.type);
        (0, o.V1)(r.type === t, 99, n, n, i)
      }! function(e) {
        e[e.Query = 0] = "Query", e[e.Mutation = 1] = "Mutation", e[e.Subscription = 2] = "Subscription"
      }(n || (n = {})), f.resetCache = function() {
        i = void 0
      }, !1 !== globalThis.__DEV__ && (0, u.D_)("parser", function() {
        return i ? i.size : 0
      })
    },
    35588: (e, t, r) => {
      "use strict";
      r.d(t, {
        y: () => u
      });
      var n, i = r(16565),
        o = r(15492),
        a = r(74197),
        s = r(27312),
        u = Object.assign(function(e) {
          var t = n.get(e);
          return t || (t = (0, i.print)(e), n.set(e, t)), t
        }, {
          reset: function() {
            n = new o.A(a.v.print || 2e3)
          }
        });
      u.reset(), !1 !== globalThis.__DEV__ && (0, s.D_)("print", function() {
        return n ? n.size : 0
      })
    },
    35902: (e, t, r) => {
      "use strict";
      r.d(t, {
        G: () => i
      });
      var n = r(26871);

      function i(e) {
        return !1 !== globalThis.__DEV__ && (t = e, (r = new Set([t])).forEach(function(e) {
          (0, n.U)(e) && function(e) {
            if (!1 !== globalThis.__DEV__ && !Object.isFrozen(e)) try {
              Object.freeze(e)
            } catch (e) {
              if (e instanceof TypeError) return null;
              throw e
            }
            return e
          }(e) === e && Object.getOwnPropertyNames(e).forEach(function(t) {
            (0, n.U)(e[t]) && r.add(e[t])
          })
        })), e;
        var t, r
      }
    },
    38516: (e, t, r) => {
      "use strict";
      r.d(t, {
        S2: () => f,
        cc: () => l,
        lz: () => c
      });
      var n = r(78322),
        i = r(87552),
        o = r(82966),
        a = Symbol.for("apollo.deprecations"),
        s = o.Sf,
        u = new i.DX;

      function c(e) {
        for (var t = [], r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
        return u.withValue.apply(u, (0, n.__spreadArray)([Array.isArray(e) ? e : [e]], t, !1))
      }

      function l(e, t, r, n) {
        void 0 === n && (n = "Please remove this option."), f(t, function() {
          t in e && !1 !== globalThis.__DEV__ && o.V1.warn(104, r, t, n)
        })
      }

      function f(e, t) {
        (function(e) {
          return s[a] || (u.getValue() || []).includes(e)
        })(e) || t()
      }
    },
    39254: (e, t, r) => {
      "use strict";
      r.d(t, {
        U: () => _,
        y: () => w
      });
      var n = r(78322),
        i = r(82966),
        o = r(81474),
        a = r(24304),
        s = r(81967),
        u = r(86570),
        c = r(77816),
        l = r(74891),
        f = r(57308),
        h = r(69906),
        d = r(4548),
        p = r(48053),
        v = r(87552),
        y = r(38516),
        g = Object.assign,
        m = Object.hasOwnProperty,
        _ = function(e) {
          function t(r) {
            var i = r.queryManager,
              o = r.queryInfo,
              a = r.options,
              u = this,
              c = t.inactiveOnCreation.getValue();
            (u = e.call(this, function(e) {
              u._getOrCreateQuery();
              try {
                var t = e._subscription._observer;
                t && !t.error && (t.error = b)
              } catch (e) {}
              var r = !u.observers.size;
              u.observers.add(e);
              var n = u.last;
              return n && n.error ? e.error && e.error(n.error) : n && n.result && e.next && e.next(u.maskResult(n.result)), r && u.reobserve().catch(function() {}),
                function() {
                  u.observers.delete(e) && !u.observers.size && u.tearDownQuery()
                }
            }) || this).observers = new Set, u.subscriptions = new Set, u.dirty = !1, u._getOrCreateQuery = function() {
              return c && (i.queries.set(u.queryId, o), c = !1), u.queryManager.getOrCreateQuery(u.queryId)
            }, u.queryInfo = o, u.queryManager = i, u.waitForOwnResult = E(a.fetchPolicy), u.isTornDown = !1, u.subscribeToMore = u.subscribeToMore.bind(u), u.maskResult = u.maskResult.bind(u);
            var l = i.defaultOptions.watchQuery,
              f = (void 0 === l ? {} : l).fetchPolicy,
              h = void 0 === f ? "cache-first" : f,
              d = a.fetchPolicy,
              p = void 0 === d ? h : d,
              v = a.initialFetchPolicy,
              y = void 0 === v ? "standby" === p ? h : p : v;
            u.options = (0, n.__assign)((0, n.__assign)({}, a), {
              initialFetchPolicy: y,
              fetchPolicy: p
            }), u.queryId = o.queryId || i.generateQueryId();
            var g = (0, s.Vu)(u.query);
            return u.queryName = g && g.name && g.name.value, u
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
            return !1 !== globalThis.__DEV__ && (0, y.S2)("observableQuery.result", function() {
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
            var r = (0, y.lz)("getLastResult", function() {
                return t.getLastResult(!0)
              }),
              i = this.queryInfo.networkStatus || r && r.networkStatus || a.pT.ready,
              s = (0, n.__assign)((0, n.__assign)({}, r), {
                loading: (0, a.bi)(i),
                networkStatus: i
              }),
              u = this.options.fetchPolicy,
              c = void 0 === u ? "cache-first" : u;
            if (E(c) || this.queryManager.getDocumentInfo(this.query).hasForcedResolvers);
            else if (this.waitForOwnResult) this.queryInfo.updateWatch();
            else {
              var l = this.queryInfo.getDiff();
              (l.complete || this.options.returnPartialData) && (s.data = l.result), (0, o.L)(s.data, {}) && (s.data = void 0), l.complete ? (delete s.partial, !l.complete || s.networkStatus !== a.pT.loading || "cache-first" !== c && "cache-only" !== c || (s.networkStatus = a.pT.ready, s.loading = !1)) : s.partial = !0, s.networkStatus === a.pT.ready && (s.error || s.errors) && (s.networkStatus = a.pT.error), !1 === globalThis.__DEV__ || l.complete || this.options.partialRefetch || s.loading || s.data || s.error || w(l.missing)
            }
            return e && this.updateLastResult(s), s
          }, t.prototype.getCurrentResult = function(e) {
            return void 0 === e && (e = !0), this.maskResult(this.getCurrentFullResult(e))
          }, t.prototype.isDifferentFromLastResult = function(e, t) {
            if (!this.last) return !0;
            var r = this.queryManager.getDocumentInfo(this.query),
              n = this.queryManager.dataMasking,
              i = n ? r.nonReactiveQuery : this.query;
            return (n || r.hasNonreactiveDirective ? !(0, p.a)(i, this.last.result, e, this.variables) : !(0, o.L)(this.last.result, e)) || t && !(0, o.L)(this.last.variables, t)
          }, t.prototype.getLast = function(e, t) {
            var r = this.last;
            if (r && r[e] && (!t || (0, o.L)(r.variables, this.variables))) return r[e]
          }, t.prototype.getLastResult = function(e) {
            return !1 !== globalThis.__DEV__ && (0, y.S2)("getLastResult", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(24)
            }), this.getLast("result", e)
          }, t.prototype.getLastError = function(e) {
            return !1 !== globalThis.__DEV__ && (0, y.S2)("getLastError", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(25)
            }), this.getLast("error", e)
          }, t.prototype.resetLastResults = function() {
            !1 !== globalThis.__DEV__ && (0, y.S2)("resetLastResults", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(26)
            }), delete this.last, this.isTornDown = !1
          }, t.prototype.resetQueryStoreErrors = function() {
            !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(27), this.queryManager.resetErrors(this.queryId)
          }, t.prototype.refetch = function(e) {
            var t, r = {
                pollInterval: 0
              },
              u = this.options.fetchPolicy;
            if (r.fetchPolicy = "no-cache" === u ? "no-cache" : "network-only", !1 !== globalThis.__DEV__ && e && m.call(e, "variables")) {
              var c = (0, s.AT)(this.query),
                l = c.variableDefinitions;
              l && l.some(function(e) {
                return "variables" === e.variable.name.value
              }) || !1 !== globalThis.__DEV__ && i.V1.warn(28, e, (null === (t = c.name) || void 0 === t ? void 0 : t.value) || c)
            }
            return e && !(0, o.L)(this.options.variables, e) && (r.variables = this.options.variables = (0, n.__assign)((0, n.__assign)({}, this.options.variables), e)), this.queryInfo.resetLastWrite(), this.reobserve(r, a.pT.refetch)
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
            var s = this.queryInfo,
              u = s.networkStatus;
            s.networkStatus = a.pT.fetchMore, r.notifyOnNetworkStatusChange && this.observe();
            var c = new Set,
              l = null == e ? void 0 : e.updateQuery,
              f = "no-cache" !== this.options.fetchPolicy;
            return f || (0, i.V1)(l, 29), this.queryManager.fetchQuery(o, r, a.pT.fetchMore).then(function(i) {
              if (t.queryManager.removeQuery(o), s.networkStatus === a.pT.fetchMore && (s.networkStatus = u), f) t.queryManager.cache.batch({
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
                  c.add(e.query)
                }
              });
              else {
                var h = t.getLast("result"),
                  d = l(h.data, {
                    fetchMoreResult: i.data,
                    variables: r.variables
                  });
                t.reportResult((0, n.__assign)((0, n.__assign)({}, h), {
                  networkStatus: u,
                  loading: (0, a.bi)(u),
                  data: d
                }), t.variables)
              }
              return t.maskResult(i)
            }).finally(function() {
              f && !c.has(t.query) && t.reobserveCacheFirst()
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
            return !1 !== globalThis.__DEV__ && ((0, y.cc)(e, "canonizeResults", "setOptions"), (0, y.S2)("setOptions", function() {
              !1 !== globalThis.__DEV__ && i.V1.warn(31)
            })), this.reobserve(e)
          }, t.prototype.silentSetOptions = function(e) {
            var t = (0, u.o)(this.options, e || {});
            g(this.options, t)
          }, t.prototype.setVariables = function(e) {
            var t = this;
            return (0, o.L)(this.variables, e) ? this.observers.size ? (0, y.lz)("observableQuery.result", function() {
              return t.result()
            }) : Promise.resolve() : (this.options.variables = e, this.observers.size ? this.reobserve({
              fetchPolicy: this.options.initialFetchPolicy,
              variables: e
            }, a.pT.setVariables) : Promise.resolve())
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
                      e.pollingInfo && ((0, a.bi)(e.queryInfo.networkStatus) || (null === (r = (t = e.options).skipPollAttempt) || void 0 === r ? void 0 : r.call(t)) ? o() : e.reobserve({
                        fetchPolicy: "no-cache" === e.options.initialFetchPolicy ? "no-cache" : "network-only"
                      }, a.pT.poll).then(o, o))
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
            var i = (0, y.lz)("getLastError", function() {
              return r.getLastError()
            });
            return i && this.last && !(0, o.L)(t, this.last.variables) && (i = void 0), this.last = (0, n.__assign)({
              result: this.queryManager.assumeImmutableResults ? e : (0, c.m)(e),
              variables: t
            }, i ? {
              error: i
            } : null)
          }, t.prototype.reobserveAsConcast = function(e, t) {
            var r = this;
            this.isTornDown = !1;
            var i = t === a.pT.refetch || t === a.pT.fetchMore || t === a.pT.poll,
              s = this.options.variables,
              c = this.options.fetchPolicy,
              l = (0, u.o)(this.options, e || {}),
              f = i ? l : g(this.options, l),
              h = this.transformDocument(f.query);
            this.lastQuery = h, i || (this.updatePolling(), !e || !e.variables || (0, o.L)(e.variables, s) || "standby" === f.fetchPolicy || f.fetchPolicy !== c && "function" != typeof f.nextFetchPolicy || (this.applyNextFetchPolicy("variables-changed", f), void 0 === t && (t = a.pT.setVariables))), this.waitForOwnResult && (this.waitForOwnResult = E(f.fetchPolicy));
            var p = function() {
                r.concast === m && (r.waitForOwnResult = !1)
              },
              v = f.variables && (0, n.__assign)({}, f.variables),
              y = this.fetch(f, t, h),
              m = y.concast,
              _ = y.fromLink,
              b = {
                next: function(e) {
                  (0, o.L)(r.variables, v) && (p(), r.reportResult(e, v))
                },
                error: function(e) {
                  (0, o.L)(r.variables, v) && ((0, d.Mn)(e) || (e = new d.K4({
                    networkError: e
                  })), p(), r.reportError(e, v))
                }
              };
            return i || !_ && this.concast || (this.concast && this.observer && this.concast.removeObserver(this.observer), this.concast = m, this.observer = b), m.addObserver(b), m
          }, t.prototype.reobserve = function(e, t) {
            return (r = this.reobserveAsConcast(e, t).promise.then(this.maskResult)).catch(function() {}), r;
            var r
          }, t.prototype.resubscribeAfterError = function() {
            for (var e = this, t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            var n = this.last;
            (0, y.lz)("resetLastResults", function() {
              return e.resetLastResults()
            });
            var i = this.subscribe.apply(this, t);
            return this.last = n, i
          }, t.prototype.observe = function() {
            this.reportResult(this.getCurrentFullResult(!1), this.variables)
          }, t.prototype.reportResult = function(e, t) {
            var r = this,
              n = (0, y.lz)("getLastError", function() {
                return r.getLastError()
              }),
              i = this.isDifferentFromLastResult(e, t);
            (n || !e.partial || this.options.returnPartialData) && this.updateLastResult(e, t), (n || i) && (0, l.w)(this.observers, "next", this.maskResult(e))
          }, t.prototype.reportError = function(e, t) {
            var r = this,
              i = (0, n.__assign)((0, n.__assign)({}, (0, y.lz)("getLastResult", function() {
                return r.getLastResult()
              })), {
                error: e,
                errors: e.graphQLErrors,
                networkStatus: a.pT.error,
                loading: !1
              });
            this.updateLastResult(i, t), (0, l.w)(this.observers, "error", this.last.error = e)
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
            this.cancelNotifyTimeout(), this.dirty && ("cache-only" != this.options.fetchPolicy && "cache-and-network" != this.options.fetchPolicy && (0, a.bi)(this.queryInfo.networkStatus) || (this.queryInfo.getDiff().fromOptimisticTransaction ? this.observe() : this.reobserveCacheFirst())), this.dirty = !1
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
          }, t.inactiveOnCreation = new v.DX, t
        }(f.c);

      function b(e) {
        !1 !== globalThis.__DEV__ && i.V1.error(33, e.message, e.stack)
      }

      function w(e) {
        !1 !== globalThis.__DEV__ && e && !1 !== globalThis.__DEV__ && i.V1.debug(34, e)
      }

      function E(e) {
        return "network-only" === e || "no-cache" === e || "standby" === e
      }(0, h.r)(_)
    },
    39493: (e, t, r) => {
      "use strict";
      r.d(t, {
        A_: () => u,
        D$: () => g,
        Ii: () => f,
        J: () => l,
        Kc: () => c,
        MB: () => v,
        WU: () => s,
        dt: () => m,
        kd: () => _,
        o5: () => p,
        ue: () => y
      });
      var n = r(82966),
        i = r(26871),
        o = r(85346),
        a = r(90564);

      function s(e) {
        return {
          __ref: String(e)
        }
      }

      function u(e) {
        return Boolean(e && "object" == typeof e && "string" == typeof e.__ref)
      }

      function c(e) {
        return (0, i.U)(e) && "Document" === e.kind && Array.isArray(e.definitions)
      }

      function l(e, t, r, i) {
        if (function(e) {
            return "IntValue" === e.kind
          }(r) || function(e) {
            return "FloatValue" === e.kind
          }(r)) e[t.value] = Number(r.value);
        else if (function(e) {
            return "BooleanValue" === e.kind
          }(r) || function(e) {
            return "StringValue" === e.kind
          }(r)) e[t.value] = r.value;
        else if (function(e) {
            return "ObjectValue" === e.kind
          }(r)) {
          var o = {};
          r.fields.map(function(e) {
            return l(o, e.name, e.value, i)
          }), e[t.value] = o
        } else if (function(e) {
            return "Variable" === e.kind
          }(r)) {
          var a = (i || {})[r.name.value];
          e[t.value] = a
        } else if (function(e) {
            return "ListValue" === e.kind
          }(r)) e[t.value] = r.values.map(function(e) {
          var r = {};
          return l(r, t, e, i), r[t.value]
        });
        else if (function(e) {
            return "EnumValue" === e.kind
          }(r)) e[t.value] = r.value;
        else {
          if (! function(e) {
              return "NullValue" === e.kind
            }(r)) throw (0, n.vA)(124, t.value, r.kind);
          e[t.value] = null
        }
      }

      function f(e, t) {
        var r = null;
        e.directives && (r = {}, e.directives.forEach(function(e) {
          r[e.name.value] = {}, e.arguments && e.arguments.forEach(function(n) {
            var i = n.name,
              o = n.value;
            return l(r[e.name.value], i, o, t)
          })
        }));
        var n = null;
        return e.arguments && e.arguments.length && (n = {}, e.arguments.forEach(function(e) {
          var r = e.name,
            i = e.value;
          return l(n, r, i, t)
        })), p(e.name.value, n, r)
      }
      var h = ["connection", "include", "skip", "client", "rest", "export", "nonreactive"],
        d = a.M,
        p = Object.assign(function(e, t, r) {
          if (t && r && r.connection && r.connection.key) {
            if (r.connection.filter && r.connection.filter.length > 0) {
              var n = r.connection.filter ? r.connection.filter : [];
              n.sort();
              var i = {};
              return n.forEach(function(e) {
                i[e] = t[e]
              }), "".concat(r.connection.key, "(").concat(d(i), ")")
            }
            return r.connection.key
          }
          var o = e;
          if (t) {
            var a = d(t);
            o += "(".concat(a, ")")
          }
          return r && Object.keys(r).forEach(function(e) {
            -1 === h.indexOf(e) && (r[e] && Object.keys(r[e]).length ? o += "@".concat(e, "(").concat(d(r[e]), ")") : o += "@".concat(e))
          }), o
        }, {
          setStringify: function(e) {
            var t = d;
            return d = e, t
          }
        });

      function v(e, t) {
        if (e.arguments && e.arguments.length) {
          var r = {};
          return e.arguments.forEach(function(e) {
            var n = e.name,
              i = e.value;
            return l(r, n, i, t)
          }), r
        }
        return null
      }

      function y(e) {
        return e.alias ? e.alias.value : e.name.value
      }

      function g(e, t, r) {
        for (var n, i = 0, a = t.selections; i < a.length; i++)
          if (m(c = a[i])) {
            if ("__typename" === c.name.value) return e[y(c)]
          } else n ? n.push(c) : n = [c];
        if ("string" == typeof e.__typename) return e.__typename;
        if (n)
          for (var s = 0, u = n; s < u.length; s++) {
            var c = u[s],
              l = g(e, (0, o.HQ)(c, r).selectionSet, r);
            if ("string" == typeof l) return l
          }
      }

      function m(e) {
        return "Field" === e.kind
      }

      function _(e) {
        return "InlineFragment" === e.kind
      }
    },
    45309: (e, t, r) => {
      "use strict";
      r.d(t, {
        MS: () => o,
        d8: () => a,
        f2: () => s,
        s7: () => u
      });
      var n = r(82966),
        i = r(16565);

      function o(e, t) {
        var r = e.directives;
        return !r || !r.length || function(e) {
          var t = [];
          return e && e.length && e.forEach(function(e) {
            if (function(e) {
                var t = e.name.value;
                return "skip" === t || "include" === t
              }(e)) {
              var r = e.arguments,
                i = e.name.value;
              (0, n.V1)(r && 1 === r.length, 107, i);
              var o = r[0];
              (0, n.V1)(o.name && "if" === o.name.value, 108, i);
              var a = o.value;
              (0, n.V1)(a && ("Variable" === a.kind || "BooleanValue" === a.kind), 109, i), t.push({
                directive: e,
                ifArgument: o
              })
            }
          }), t
        }(r).every(function(e) {
          var r = e.directive,
            i = e.ifArgument,
            o = !1;
          return "Variable" === i.value.kind ? (o = t && t[i.value.name.value], (0, n.V1)(void 0 !== o, 106, r.name.value)) : o = i.value.value, "skip" === r.name.value ? !o : o
        })
      }

      function a(e, t, r) {
        var n = new Set(e),
          o = n.size;
        return (0, i.visit)(t, {
          Directive: function(e) {
            if (n.delete(e.name.value) && (!r || !n.size)) return i.BREAK
          }
        }), r ? !n.size : n.size < o
      }

      function s(e) {
        return e && a(["client", "export"], e, !0)
      }

      function u(e) {
        var t, r, o = null === (t = e.directives) || void 0 === t ? void 0 : t.find(function(e) {
          return "unmask" === e.name.value
        });
        if (!o) return "mask";
        var a = null === (r = o.arguments) || void 0 === r ? void 0 : r.find(function(e) {
          return "mode" === e.name.value
        });
        return !1 !== globalThis.__DEV__ && a && (a.value.kind === i.Kind.VARIABLE ? !1 !== globalThis.__DEV__ && n.V1.warn(110) : a.value.kind !== i.Kind.STRING ? !1 !== globalThis.__DEV__ && n.V1.warn(111) : "migrate" !== a.value.value && !1 !== globalThis.__DEV__ && n.V1.warn(112, a.value.value)), a && "value" in a.value && "migrate" === a.value.value ? "migrate" : "unmask"
      }
    },
    46277: (e, t, r) => {
      "use strict";
      r.d(t, {
        Er: () => D,
        kk: () => M,
        t_: () => R,
        $X: () => P,
        IT: () => O,
        SX: () => T
      });
      var n = r(78322),
        i = r(82966),
        o = r(82540),
        a = r(22706),
        s = r(81474),
        u = r(20937),
        c = r(488),
        l = r(4548),
        f = r(39254),
        h = r(24304),
        d = r(35216),
        p = r(82234),
        v = r(86570),
        y = r(7569),
        g = r(35902),
        m = Symbol.for("apollo.hook.wrappers"),
        _ = r(31703),
        b = r(38516),
        w = Object.prototype.hasOwnProperty;

      function E() {}
      var k = Symbol();

      function O(e, t) {
        return void 0 === t && (t = Object.create(null)), (r = S, (o = (i = (n = (0, p.m)(t && t.client).queryManager) && n[m]) && i.useQuery) ? o(r) : r)(e, t);
        var r, n, i, o
      }

      function S(e, t) {
        !1 !== globalThis.__DEV__ && ((0, _.h)(t, "canonizeResults", "useQuery"), (0, _.h)(t, "partialRefetch", "useQuery"), (0, _.h)(t, "defaultOptions", "useQuery", "Pass the options directly to the hook instead."), (0, _.h)(t, "onCompleted", "useQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), (0, _.h)(t, "onError", "useQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."));
        var r = T(e, t),
          i = r.result,
          a = r.obsQueryFields;
        return o.useMemo(function() {
          return (0, n.__assign)((0, n.__assign)({}, i), a)
        }, [i, a])
      }

      function T(e, t) {
        var r = (0, p.m)(t.client),
          u = o.useContext((0, c.l)()).renderPromises,
          l = !!u,
          v = r.disableNetworkFetches,
          y = !1 !== t.ssr && !t.skip,
          g = t.partialRefetch,
          m = D(r, e, t, l),
          _ = function(e, t, r, i, a) {
            function s(n) {
              var o;
              return (0, d.D$)(t, d.KG.Query), {
                client: e,
                query: t,
                observable: i && i.getSSRObservable(a()) || f.U.inactiveOnCreation.withValue(!i, function() {
                  return (0, b.lz)("canonizeResults", function() {
                    return e.watchQuery(R(void 0, e, r, a()))
                  })
                }),
                resultData: {
                  previousData: null === (o = null == n ? void 0 : n.resultData.current) || void 0 === o ? void 0 : o.data
                }
              }
            }
            var u = o.useState(s),
              c = u[0],
              l = u[1];

            function h(e) {
              var t, r;
              Object.assign(c.observable, ((t = {})[k] = e, t));
              var i = c.resultData;
              l((0, n.__assign)((0, n.__assign)({}, c), {
                query: e.query,
                resultData: Object.assign(i, {
                  previousData: (null === (r = i.current) || void 0 === r ? void 0 : r.data) || i.previousData,
                  current: void 0
                })
              }))
            }
            if (e !== c.client || t !== c.query) {
              var p = s(c);
              return l(p), [p, h]
            }
            return [c, h]
          }(r, e, t, u, m),
          O = _[0],
          S = O.observable,
          T = O.resultData,
          M = _[1],
          q = m(S);
        ! function(e, t, r, n, i) {
          var o;
          t[k] && !(0, s.L)(t[k], i) && (t.reobserve(R(t, r, n, i)), e.previousData = (null === (o = e.current) || void 0 === o ? void 0 : o.data) || e.previousData, e.current = void 0), t[k] = i
        }(T, S, r, t, q);
        var A = o.useMemo(function() {
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
          }(S)
        }, [S]);
        ! function(e, t, r) {
          t && r && (t.registerSSRObservable(e), e.getCurrentResult().loading && t.addObservableQueryPromise(e))
        }(S, u, y);
        var F = function(e, t, r, n, i, u, c, l, f) {
          var d = o.useRef(f);
          o.useEffect(function() {
            d.current = f
          });
          var p = !l && !u || !1 !== n.ssr || n.skip ? n.skip || "standby" === i.fetchPolicy ? C : void 0 : I,
            v = e.previousData,
            y = o.useMemo(function() {
              return p && P(p, v, t, r)
            }, [r, t, p, v]);
          return (0, a.r)(o.useCallback(function(n) {
            if (l) return function() {};
            var i = function() {
                var i = e.current,
                  o = t.getCurrentResult();
                i && i.loading === o.loading && i.networkStatus === o.networkStatus && (0, s.L)(i.data, o.data) || V(o, e, t, r, c, n, d.current)
              },
              o = function(u) {
                if (a.current.unsubscribe(), a.current = t.resubscribeAfterError(i, o), !w.call(u, "graphQLErrors")) throw u;
                var l = e.current;
                (!l || l && l.loading || !(0, s.L)(u, l.error)) && V({
                  data: l && l.data,
                  error: u,
                  loading: !1,
                  networkStatus: h.pT.error
                }, e, t, r, c, n, d.current)
              },
              a = {
                current: t.subscribe(i, o)
              };
            return function() {
              setTimeout(function() {
                return a.current.unsubscribe()
              })
            }
          }, [u, l, t, e, c, r]), function() {
            return y || x(e, t, d.current, c, r)
          }, function() {
            return y || x(e, t, d.current, c, r)
          })
        }(T, S, r, t, q, v, g, l, {
          onCompleted: t.onCompleted || E,
          onError: t.onError || E
        });
        return {
          result: F,
          obsQueryFields: A,
          observable: S,
          resultData: T,
          client: r,
          onQueryExecuted: M
        }
      }

      function D(e, t, r, i) {
        void 0 === r && (r = {});
        var o = r.skip,
          a = (r.ssr, r.onCompleted, r.onError, r.defaultOptions),
          s = (0, n.__rest)(r, ["skip", "ssr", "onCompleted", "onError", "defaultOptions"]);
        return function(r) {
          var n = Object.assign(s, {
            query: t
          });
          return !i || "network-only" !== n.fetchPolicy && "cache-and-network" !== n.fetchPolicy || (n.fetchPolicy = "cache-first"), n.variables || (n.variables = {}), o ? (n.initialFetchPolicy = n.initialFetchPolicy || n.fetchPolicy || M(a, e.defaultOptions), n.fetchPolicy = "standby") : n.fetchPolicy || (n.fetchPolicy = (null == r ? void 0 : r.options.initialFetchPolicy) || M(a, e.defaultOptions)), n
        }
      }

      function R(e, t, r, n) {
        var i = [],
          o = t.defaultOptions.watchQuery;
        return o && i.push(o), r.defaultOptions && i.push(r.defaultOptions), i.push((0, v.o)(e && e.options, n)), i.reduce(u.l)
      }

      function V(e, t, r, o, a, s, u) {
        var c = t.current;
        c && c.data && (t.previousData = c.data), !e.error && (0, y.E)(e.errors) && (e.error = new l.K4({
            graphQLErrors: e.errors
          })), t.current = P(function(e, t, r) {
            return !e.partial || !r || e.loading || e.data && 0 !== Object.keys(e.data).length || "cache-only" === t.options.fetchPolicy ? e : (t.refetch(), (0, n.__assign)((0, n.__assign)({}, e), {
              loading: !0,
              networkStatus: h.pT.refetch
            }))
          }(e, r, a), t.previousData, r, o), s(),
          function(e, t, r) {
            if (!e.loading) {
              var n = function(e) {
                return (0, y.E)(e.errors) ? new l.K4({
                  graphQLErrors: e.errors
                }) : e.error
              }(e);
              Promise.resolve().then(function() {
                n ? r.onError(n) : e.data && t !== e.networkStatus && e.networkStatus === h.pT.ready && r.onCompleted(e.data)
              }).catch(function(e) {
                !1 !== globalThis.__DEV__ && i.V1.warn(e)
              })
            }
          }(e, null == c ? void 0 : c.networkStatus, u)
      }

      function x(e, t, r, n, i) {
        return e.current || V(t.getCurrentResult(), e, t, i, n, function() {}, r), e.current
      }

      function M(e, t) {
        var r;
        return (null == e ? void 0 : e.fetchPolicy) || (null === (r = null == t ? void 0 : t.watchQuery) || void 0 === r ? void 0 : r.fetchPolicy) || "cache-first"
      }

      function P(e, t, r, i) {
        var o = e.data,
          a = (e.partial, (0, n.__rest)(e, ["data", "partial"]));
        return (0, n.__assign)((0, n.__assign)({
          data: o
        }, a), {
          client: i,
          observable: r,
          variables: r.variables,
          called: e !== I && e !== C,
          previousData: t
        })
      }
      var I = (0, g.G)({
          loading: !0,
          data: void 0,
          error: void 0,
          networkStatus: h.pT.loading
        }),
        C = (0, g.G)({
          loading: !1,
          data: void 0,
          error: void 0,
          networkStatus: h.pT.ready
        })
    },
    48053: (e, t, r) => {
      "use strict";
      r.d(t, {
        a: () => c
      });
      var n = r(78322),
        i = r(81474),
        o = r(45309),
        a = r(85346),
        s = r(81967),
        u = r(39493);

      function c(e, t, r, o) {
        var u = t.data,
          c = (0, n.__rest)(t, ["data"]),
          f = r.data,
          h = (0, n.__rest)(r, ["data"]);
        return (0, i.A)(c, h) && l((0, s.Vn)(e).selectionSet, u, f, {
          fragmentMap: (0, a.JG)((0, s.zK)(e)),
          variables: o
        })
      }

      function l(e, t, r, n) {
        if (t === r) return !0;
        var s = new Set;
        return e.selections.every(function(e) {
          if (s.has(e)) return !0;
          if (s.add(e), !(0, o.MS)(e, n.variables)) return !0;
          if (f(e)) return !0;
          if ((0, u.dt)(e)) {
            var c = (0, u.ue)(e),
              h = t && t[c],
              d = r && r[c],
              p = e.selectionSet;
            if (!p) return (0, i.A)(h, d);
            var v = Array.isArray(h),
              y = Array.isArray(d);
            if (v !== y) return !1;
            if (v && y) {
              var g = h.length;
              if (d.length !== g) return !1;
              for (var m = 0; m < g; ++m)
                if (!l(p, h[m], d[m], n)) return !1;
              return !0
            }
            return l(p, h, d, n)
          }
          var _ = (0, a.HQ)(e, n.fragmentMap);
          return _ ? !!f(_) || l(_.selectionSet, t, r, n) : void 0
        })
      }

      function f(e) {
        return !!e.directives && e.directives.some(h)
      }

      function h(e) {
        return "nonreactive" === e.name.value
      }
    },
    48169: (e, t, r) => {
      "use strict";
      r.d(t, {
        D9: () => a,
        IM: () => s,
        ZI: () => c
      });
      var n = r(78322),
        i = r(26871),
        o = Object.prototype.hasOwnProperty;

      function a() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        return s(e)
      }

      function s(e) {
        var t = e[0] || {},
          r = e.length;
        if (r > 1)
          for (var n = new c, i = 1; i < r; ++i) t = n.merge(t, e[i]);
        return t
      }
      var u = function(e, t, r) {
          return this.merge(e[r], t[r])
        },
        c = function() {
          function e(e) {
            void 0 === e && (e = u), this.reconciler = e, this.isObject = i.U, this.pastCopies = new Set
          }
          return e.prototype.merge = function(e, t) {
            for (var r = this, a = [], s = 2; s < arguments.length; s++) a[s - 2] = arguments[s];
            return (0, i.U)(t) && (0, i.U)(e) ? (Object.keys(t).forEach(function(i) {
              if (o.call(e, i)) {
                var s = e[i];
                if (t[i] !== s) {
                  var u = r.reconciler.apply(r, (0, n.__spreadArray)([e, t, i], a, !1));
                  u !== s && ((e = r.shallowCopyForMerge(e))[i] = u)
                }
              } else(e = r.shallowCopyForMerge(e))[i] = t[i]
            }), e) : t
          }, e.prototype.shallowCopyForMerge = function(e) {
            return (0, i.U)(e) && (this.pastCopies.has(e) || (e = Array.isArray(e) ? e.slice(0) : (0, n.__assign)({
              __proto__: Object.getPrototypeOf(e)
            }, e), this.pastCopies.add(e))), e
          }, e
        }()
    },
    48440: (e, t, r) => {
      "use strict";
      r.d(t, {
        Ki: () => l,
        jq: () => a,
        xm: () => s,
        yV: () => u
      });
      var n = r(87552),
        i = r(82966),
        o = r(46026),
        a = o.et ? WeakMap : Map,
        s = o.En ? WeakSet : Set,
        u = new n.DX,
        c = !1;

      function l() {
        c || (c = !0, !1 !== globalThis.__DEV__ && i.V1.warn(64))
      }
    },
    49145: (e, t, r) => {
      "use strict";
      r.d(t, {
        z: () => l
      });
      var n = r(16565),
        i = r(48440),
        o = r(82966),
        a = r(81474),
        s = r(78012),
        u = r(85346),
        c = r(81967);

      function l(e, t, r, l) {
        if (!r.fragmentMatches) return !1 !== globalThis.__DEV__ && (0, i.Ki)(), e;
        var f = t.definitions.filter(function(e) {
          return e.kind === n.Kind.FRAGMENT_DEFINITION
        });
        void 0 === l && ((0, o.V1)(1 === f.length, 61, f.length), l = f[0].name.value);
        var h = f.find(function(e) {
          return e.name.value === l
        });
        return (0, o.V1)(!!h, 62, l), null == e || (0, a.A)(e, {}) ? e : (0, s.S)(e, h.selectionSet, {
          operationType: "fragment",
          operationName: h.name.value,
          fragmentMap: (0, u.JG)((0, c.zK)(t)),
          cache: r,
          mutableTargets: new i.jq,
          knownChanged: new i.xm
        })
      }
    },
    52827: (e, t, r) => {
      "use strict";
      r.d(t, {
        XY: () => v,
        er: () => g,
        iz: () => p,
        x3: () => m,
        zc: () => y
      });
      var n = r(78322),
        i = r(82966),
        o = r(16565),
        a = r(81967),
        s = r(39493),
        u = r(85346),
        c = r(7569),
        l = {
          kind: o.Kind.FIELD,
          name: {
            kind: o.Kind.NAME,
            value: "__typename"
          }
        };

      function f(e, t) {
        return !e || e.selectionSet.selections.every(function(e) {
          return e.kind === o.Kind.FRAGMENT_SPREAD && f(t[e.name.value], t)
        })
      }

      function h(e) {
        return f((0, a.Vu)(e) || (0, a.E4)(e), (0, u.JG)((0, a.zK)(e))) ? null : e
      }

      function d(e) {
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

      function p(e, t) {
        (0, a.sw)(t);
        for (var r = d(""), s = d(""), u = function(e) {
            for (var t = 0, n = void 0; t < e.length && (n = e[t]); ++t)
              if (!(0, c.c)(n)) {
                if (n.kind === o.Kind.OPERATION_DEFINITION) return r(n.name && n.name.value);
                if (n.kind === o.Kind.FRAGMENT_DEFINITION) return s(n.name.value)
              } return !1 !== globalThis.__DEV__ && i.V1.error(125), null
          }, l = 0, f = t.definitions.length - 1; f >= 0; --f) t.definitions[f].kind === o.Kind.OPERATION_DEFINITION && ++l;
        var p, v, y, g = (p = e, v = new Map, y = new Map, p.forEach(function(e) {
            e && (e.name ? v.set(e.name, e) : e.test && y.set(e.test, e))
          }), function(e) {
            var t = v.get(e.name.value);
            return !t && y.size && y.forEach(function(r, n) {
              n(e) && (t = r)
            }), t
          }),
          m = function(e) {
            return (0, c.E)(e) && e.map(g).some(function(e) {
              return e && e.remove
            })
          },
          _ = new Map,
          b = !1,
          w = {
            enter: function(e) {
              if (m(e.directives)) return b = !0, null
            }
          },
          E = (0, o.visit)(t, {
            Field: w,
            InlineFragment: w,
            VariableDefinition: {
              enter: function() {
                return !1
              }
            },
            Variable: {
              enter: function(e, t, r, n, i) {
                var o = u(i);
                o && o.variables.add(e.name.value)
              }
            },
            FragmentSpread: {
              enter: function(e, t, r, n, i) {
                if (m(e.directives)) return b = !0, null;
                var o = u(i);
                o && o.fragmentSpreads.add(e.name.value)
              }
            },
            FragmentDefinition: {
              enter: function(e, t, r, n) {
                _.set(JSON.stringify(n), e)
              },
              leave: function(e, t, r, n) {
                return e === _.get(JSON.stringify(n)) ? e : l > 0 && e.selectionSet.selections.every(function(e) {
                  return e.kind === o.Kind.FIELD && "__typename" === e.name.value
                }) ? (s(e.name.value).removed = !0, b = !0, null) : void 0
              }
            },
            Directive: {
              leave: function(e) {
                if (g(e)) return b = !0, null
              }
            }
          });
        if (!b) return t;
        var k = function(e) {
            return e.transitiveVars || (e.transitiveVars = new Set(e.variables), e.removed || e.fragmentSpreads.forEach(function(t) {
              k(s(t)).transitiveVars.forEach(function(t) {
                e.transitiveVars.add(t)
              })
            })), e
          },
          O = new Set;
        E.definitions.forEach(function(e) {
          e.kind === o.Kind.OPERATION_DEFINITION ? k(r(e.name && e.name.value)).fragmentSpreads.forEach(function(e) {
            O.add(e)
          }) : e.kind !== o.Kind.FRAGMENT_DEFINITION || 0 !== l || s(e.name.value).removed || O.add(e.name.value)
        }), O.forEach(function(e) {
          k(s(e)).fragmentSpreads.forEach(function(e) {
            O.add(e)
          })
        });
        var S = {
          enter: function(e) {
            if (t = e.name.value, !O.has(t) || s(t).removed) return null;
            var t
          }
        };
        return h((0, o.visit)(E, {
          FragmentSpread: S,
          FragmentDefinition: S,
          OperationDefinition: {
            leave: function(e) {
              if (e.variableDefinitions) {
                var t = k(r(e.name && e.name.value)).transitiveVars;
                if (t.size < e.variableDefinitions.length) return (0, n.__assign)((0, n.__assign)({}, e), {
                  variableDefinitions: e.variableDefinitions.filter(function(e) {
                    return t.has(e.variable.name.value)
                  })
                })
              }
            }
          }
        }))
      }
      var v = Object.assign(function(e) {
        return (0, o.visit)(e, {
          SelectionSet: {
            enter: function(e, t, r) {
              if (!r || r.kind !== o.Kind.OPERATION_DEFINITION) {
                var i = e.selections;
                if (i && !i.some(function(e) {
                    return (0, s.dt)(e) && ("__typename" === e.name.value || 0 === e.name.value.lastIndexOf("__", 0))
                  })) {
                  var a = r;
                  if (!((0, s.dt)(a) && a.directives && a.directives.some(function(e) {
                      return "export" === e.name.value
                    }))) return (0, n.__assign)((0, n.__assign)({}, e), {
                    selections: (0, n.__spreadArray)((0, n.__spreadArray)([], i, !0), [l], !1)
                  })
                }
              }
            }
          }
        })
      }, {
        added: function(e) {
          return e === l
        }
      });

      function y(e) {
        return "query" === (0, a.Vn)(e).operation ? e : (0, o.visit)(e, {
          OperationDefinition: {
            enter: function(e) {
              return (0, n.__assign)((0, n.__assign)({}, e), {
                operation: "query"
              })
            }
          }
        })
      }

      function g(e) {
        return (0, a.sw)(e), p([{
          test: function(e) {
            return "client" === e.name.value
          },
          remove: !0
        }], e)
      }

      function m(e) {
        return (0, a.sw)(e), (0, o.visit)(e, {
          FragmentSpread: function(e) {
            var t;
            if (!(null === (t = e.directives) || void 0 === t ? void 0 : t.some(function(e) {
                return "unmask" === e.name.value
              }))) return (0, n.__assign)((0, n.__assign)({}, e), {
              directives: (0, n.__spreadArray)((0, n.__spreadArray)([], e.directives || [], !0), [{
                kind: o.Kind.DIRECTIVE,
                name: {
                  kind: o.Kind.NAME,
                  value: "nonreactive"
                }
              }], !1)
            })
          }
        })
      }
    },
    57308: (e, t, r) => {
      "use strict";

      function n(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var r = 0, n = new Array(t); r < t; r++) n[r] = e[r];
        return n
      }

      function i(e, t) {
        for (var r = 0; r < t.length; r++) {
          var n = t[r];
          n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
      }

      function o(e, t, r) {
        return t && i(e.prototype, t), r && i(e, r), Object.defineProperty(e, "prototype", {
          writable: !1
        }), e
      }
      r.d(t, {
        c: () => k
      });
      var a = function() {
          return "function" == typeof Symbol
        },
        s = function(e) {
          return a() && Boolean(Symbol[e])
        },
        u = function(e) {
          return s(e) ? Symbol[e] : "@@" + e
        };
      a() && !s("observable") && (Symbol.observable = Symbol("observable"));
      var c = u("iterator"),
        l = u("observable"),
        f = u("species");

      function h(e, t) {
        var r = e[t];
        if (null != r) {
          if ("function" != typeof r) throw new TypeError(r + " is not a function");
          return r
        }
      }

      function d(e) {
        var t = e.constructor;
        return void 0 !== t && null === (t = t[f]) && (t = void 0), void 0 !== t ? t : k
      }

      function p(e) {
        return e instanceof k
      }

      function v(e) {
        v.log ? v.log(e) : setTimeout(function() {
          throw e
        })
      }

      function y(e) {
        Promise.resolve().then(function() {
          try {
            e()
          } catch (e) {
            v(e)
          }
        })
      }

      function g(e) {
        var t = e._cleanup;
        if (void 0 !== t && (e._cleanup = void 0, t)) try {
          if ("function" == typeof t) t();
          else {
            var r = h(t, "unsubscribe");
            r && r.call(t)
          }
        } catch (e) {
          v(e)
        }
      }

      function m(e) {
        e._observer = void 0, e._queue = void 0, e._state = "closed"
      }

      function _(e, t, r) {
        e._state = "running";
        var n = e._observer;
        try {
          var i = h(n, t);
          switch (t) {
            case "next":
              i && i.call(n, r);
              break;
            case "error":
              if (m(e), !i) throw r;
              i.call(n, r);
              break;
            case "complete":
              m(e), i && i.call(n)
          }
        } catch (e) {
          v(e)
        }
        "closed" === e._state ? g(e) : "running" === e._state && (e._state = "ready")
      }

      function b(e, t, r) {
        if ("closed" !== e._state) {
          if ("buffering" !== e._state) return "ready" !== e._state ? (e._state = "buffering", e._queue = [{
            type: t,
            value: r
          }], void y(function() {
            return function(e) {
              var t = e._queue;
              if (t) {
                e._queue = void 0, e._state = "ready";
                for (var r = 0; r < t.length && (_(e, t[r].type, t[r].value), "closed" !== e._state); ++r);
              }
            }(e)
          })) : void _(e, t, r);
          e._queue.push({
            type: t,
            value: r
          })
        }
      }
      var w = function() {
          function e(e, t) {
            this._cleanup = void 0, this._observer = e, this._queue = void 0, this._state = "initializing";
            var r = new E(this);
            try {
              this._cleanup = t.call(void 0, r)
            } catch (e) {
              r.error(e)
            }
            "initializing" === this._state && (this._state = "ready")
          }
          return e.prototype.unsubscribe = function() {
            "closed" !== this._state && (m(this), g(this))
          }, o(e, [{
            key: "closed",
            get: function() {
              return "closed" === this._state
            }
          }]), e
        }(),
        E = function() {
          function e(e) {
            this._subscription = e
          }
          var t = e.prototype;
          return t.next = function(e) {
            b(this._subscription, "next", e)
          }, t.error = function(e) {
            b(this._subscription, "error", e)
          }, t.complete = function() {
            b(this._subscription, "complete")
          }, o(e, [{
            key: "closed",
            get: function() {
              return "closed" === this._subscription._state
            }
          }]), e
        }(),
        k = function() {
          function e(t) {
            if (!(this instanceof e)) throw new TypeError("Observable cannot be called as a function");
            if ("function" != typeof t) throw new TypeError("Observable initializer must be a function");
            this._subscriber = t
          }
          var t = e.prototype;
          return t.subscribe = function(e) {
            return "object" == typeof e && null !== e || (e = {
              next: e,
              error: arguments[1],
              complete: arguments[2]
            }), new w(e, this._subscriber)
          }, t.forEach = function(e) {
            var t = this;
            return new Promise(function(r, n) {
              if ("function" == typeof e) var i = t.subscribe({
                next: function(t) {
                  try {
                    e(t, o)
                  } catch (e) {
                    n(e), i.unsubscribe()
                  }
                },
                error: n,
                complete: r
              });
              else n(new TypeError(e + " is not a function"));

              function o() {
                i.unsubscribe(), r()
              }
            })
          }, t.map = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            return new(d(this))(function(r) {
              return t.subscribe({
                next: function(t) {
                  try {
                    t = e(t)
                  } catch (e) {
                    return r.error(e)
                  }
                  r.next(t)
                },
                error: function(e) {
                  r.error(e)
                },
                complete: function() {
                  r.complete()
                }
              })
            })
          }, t.filter = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            return new(d(this))(function(r) {
              return t.subscribe({
                next: function(t) {
                  try {
                    if (!e(t)) return
                  } catch (e) {
                    return r.error(e)
                  }
                  r.next(t)
                },
                error: function(e) {
                  r.error(e)
                },
                complete: function() {
                  r.complete()
                }
              })
            })
          }, t.reduce = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var r = d(this),
              n = arguments.length > 1,
              i = !1,
              o = arguments[1];
            return new r(function(r) {
              return t.subscribe({
                next: function(t) {
                  var a = !i;
                  if (i = !0, !a || n) try {
                    o = e(o, t)
                  } catch (e) {
                    return r.error(e)
                  } else o = t
                },
                error: function(e) {
                  r.error(e)
                },
                complete: function() {
                  if (!i && !n) return r.error(new TypeError("Cannot reduce an empty sequence"));
                  r.next(o), r.complete()
                }
              })
            })
          }, t.concat = function() {
            for (var e = this, t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            var i = d(this);
            return new i(function(t) {
              var n, o = 0;
              return function e(a) {
                  n = a.subscribe({
                    next: function(e) {
                      t.next(e)
                    },
                    error: function(e) {
                      t.error(e)
                    },
                    complete: function() {
                      o === r.length ? (n = void 0, t.complete()) : e(i.from(r[o++]))
                    }
                  })
                }(e),
                function() {
                  n && (n.unsubscribe(), n = void 0)
                }
            })
          }, t.flatMap = function(e) {
            var t = this;
            if ("function" != typeof e) throw new TypeError(e + " is not a function");
            var r = d(this);
            return new r(function(n) {
              var i = [],
                o = t.subscribe({
                  next: function(t) {
                    if (e) try {
                      t = e(t)
                    } catch (e) {
                      return n.error(e)
                    }
                    var o = r.from(t).subscribe({
                      next: function(e) {
                        n.next(e)
                      },
                      error: function(e) {
                        n.error(e)
                      },
                      complete: function() {
                        var e = i.indexOf(o);
                        e >= 0 && i.splice(e, 1), a()
                      }
                    });
                    i.push(o)
                  },
                  error: function(e) {
                    n.error(e)
                  },
                  complete: function() {
                    a()
                  }
                });

              function a() {
                o.closed && 0 === i.length && n.complete()
              }
              return function() {
                i.forEach(function(e) {
                  return e.unsubscribe()
                }), o.unsubscribe()
              }
            })
          }, t[l] = function() {
            return this
          }, e.from = function(t) {
            var r = "function" == typeof this ? this : e;
            if (null == t) throw new TypeError(t + " is not an object");
            var i = h(t, l);
            if (i) {
              var o = i.call(t);
              if (Object(o) !== o) throw new TypeError(o + " is not an object");
              return p(o) && o.constructor === r ? o : new r(function(e) {
                return o.subscribe(e)
              })
            }
            if (s("iterator") && (i = h(t, c))) return new r(function(e) {
              y(function() {
                if (!e.closed) {
                  for (var r, o = function(e, t) {
                      var r = "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
                      if (r) return (r = r.call(e)).next.bind(r);
                      if (Array.isArray(e) || (r = function(e, t) {
                          if (e) {
                            if ("string" == typeof e) return n(e, t);
                            var r = Object.prototype.toString.call(e).slice(8, -1);
                            return "Object" === r && e.constructor && (r = e.constructor.name), "Map" === r || "Set" === r ? Array.from(e) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? n(e, t) : void 0
                          }
                        }(e)) || t && e && "number" == typeof e.length) {
                        r && (e = r);
                        var i = 0;
                        return function() {
                          return i >= e.length ? {
                            done: !0
                          } : {
                            done: !1,
                            value: e[i++]
                          }
                        }
                      }
                      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }(i.call(t)); !(r = o()).done;) {
                    var a = r.value;
                    if (e.next(a), e.closed) return
                  }
                  e.complete()
                }
              })
            });
            if (Array.isArray(t)) return new r(function(e) {
              y(function() {
                if (!e.closed) {
                  for (var r = 0; r < t.length; ++r)
                    if (e.next(t[r]), e.closed) return;
                  e.complete()
                }
              })
            });
            throw new TypeError(t + " is not observable")
          }, e.of = function() {
            for (var t = arguments.length, r = new Array(t), n = 0; n < t; n++) r[n] = arguments[n];
            return new("function" == typeof this ? this : e)(function(e) {
              y(function() {
                if (!e.closed) {
                  for (var t = 0; t < r.length; ++t)
                    if (e.next(r[t]), e.closed) return;
                  e.complete()
                }
              })
            })
          }, o(e, null, [{
            key: f,
            get: function() {
              return this
            }
          }]), e
        }();
      a() && Object.defineProperty(k, Symbol("extensions"), {
        value: {
          symbol: l,
          hostReportError: v
        },
        configurable: !0
      })
    },
    61102: (e, t, r) => {
      "use strict";
      r.d(t, {
        Nw: () => u,
        ST: () => a,
        YX: () => s,
        bd: () => c
      });
      var n = r(26871),
        i = r(7569),
        o = r(48169);

      function a(e) {
        return "incremental" in e
      }

      function s(e) {
        return a(e) || function(e) {
          return "hasNext" in e && "data" in e
        }(e)
      }

      function u(e) {
        return (0, n.U)(e) && "payload" in e
      }

      function c(e, t) {
        var r = e,
          n = new o.ZI;
        return a(t) && (0, i.E)(t.incremental) && t.incremental.forEach(function(e) {
          for (var t = e.data, i = e.path, o = i.length - 1; o >= 0; --o) {
            var a = i[o],
              s = isNaN(+a) ? {} : [];
            s[a] = t, t = s
          }
          r = n.merge(r, t)
        }), r
      }
    },
    66591: (e, t, r) => {
      "use strict";
      r.d(t, {
        _: () => y
      });
      var n, i = r(78322),
        o = r(82540),
        a = r(20937),
        s = r(46277),
        u = r(1910),
        c = r(31703),
        l = r(45305),
        f = r(38516);

      function h() {}
      var d = ["refetch", "reobserve", "fetchMore", "updateQuery", "startPolling", "stopPolling", "subscribeToMore"],
        p = ["initialFetchPolicy", "onCompleted", "onError", "defaultOptions", "partialRefetch", "canonizeResults"],
        v = ["query", "ssr", "client", "fetchPolicy", "nextFetchPolicy", "refetchWritePolicy", "errorPolicy", "pollInterval", "notifyOnNetworkStatusChange", "returnPartialData", "skipPollAttempt"];

      function y(e, t) {
        var r;
        if (!1 !== globalThis.__DEV__) {
          var y = t || {};
          (0, c.h)(y, "canonizeResults", "useLazyQuery"), (0, c.h)(y, "variables", "useLazyQuery", "Pass all `variables` to the returned `execute` function instead."), (0, c.h)(y, "context", "useLazyQuery", "Pass `context` to the returned `execute` function instead."), (0, c.h)(y, "onCompleted", "useLazyQuery", "If your `onCompleted` callback sets local state, switch to use derived state using `data` returned from the hook instead. Use `useEffect` to perform side-effects as a result of updates to `data`."), (0, c.h)(y, "onError", "useLazyQuery", "If your `onError` callback sets local state, switch to use derived state using `data`, `error` or `errors` returned from the hook instead. Use `useEffect` if you need to perform side-effects as a result of updates to `data`, `error` or `errors`."), (0, c.h)(y, "defaultOptions", "useLazyQuery", "Pass the options directly to the hook instead."), (0, c.h)(y, "initialFetchPolicy", "useLazyQuery", "Use the `fetchPolicy` option instead."), (0, c.h)(y, "partialRefetch", "useLazyQuery")
        }
        var g = o.useRef(void 0),
          m = o.useRef(void 0),
          _ = o.useRef(void 0),
          b = (0, a.l)(t, g.current || {}),
          w = null !== (r = null == b ? void 0 : b.query) && void 0 !== r ? r : e;
        m.current = t, _.current = w;
        var E = (0, i.__assign)((0, i.__assign)({}, b), {
            skip: !g.current
          }),
          k = (0, s.SX)(w, E),
          O = k.obsQueryFields,
          S = k.result,
          T = k.client,
          D = k.resultData,
          R = k.observable,
          V = k.onQueryExecuted,
          x = R.options.initialFetchPolicy || (0, s.kk)(E.defaultOptions, T.defaultOptions),
          M = o.useReducer(function(e) {
            return e + 1
          }, 0)[1],
          P = o.useMemo(function() {
            for (var e = {}, t = function(t) {
                var r = O[t];
                e[t] = function() {
                  return !1 !== globalThis.__DEV__ && "reobserve" === t && !1 !== globalThis.__DEV__ && l.V1.warn(80), g.current || (g.current = Object.create(null), M()), r.apply(this, arguments)
                }
              }, r = 0, n = d; r < n.length; r++) t(n[r]);
            return e
          }, [M, O]),
          I = !!g.current,
          C = o.useMemo(function() {
            return (0, i.__assign)((0, i.__assign)((0, i.__assign)({}, S), P), {
              called: I
            })
          }, [S, P, I]),
          q = (n || (n = o.createContext(null)), o.useCallback(function() {
            var e = console.error;
            try {
              return console.error = h, o.useContext(n), !0
            } catch (e) {
              return !1
            } finally {
              console.error = e
            }
          }, [])),
          A = o.useRef(new Set),
          F = o.useCallback(function(e) {
            if (!1 !== globalThis.__DEV__) {
              q() && !1 !== globalThis.__DEV__ && l.V1.warn(81);
              for (var t = 0, r = p; t < r.length; t++) {
                var n = r[t];
                A.current.has(n) || ((0, f.cc)(e || {}, n, "useLazyQuery.execute"), A.current.add(n))
              }
              for (var o = 0, u = v; o < u.length; o++) {
                var c = u[o];
                A.current.has(c) || ((0, f.cc)(e || {}, c, "useLazyQuery.execute", "Please pass the option to the `useLazyQuery` hook instead."), A.current.add(c))
              }
            }
            g.current = e ? (0, i.__assign)((0, i.__assign)({}, e), {
              fetchPolicy: e.fetchPolicy || x
            }) : {
              fetchPolicy: x
            };
            var h = (0, a.l)(m.current, (0, i.__assign)({
                query: _.current
              }, g.current)),
              d = function(e, t, r, n, i, o) {
                var a = i.query || n,
                  u = (0, s.Er)(r, a, i, !1)(t),
                  c = t.reobserveAsConcast((0, s.t_)(t, r, i, u));
                return o(u), new Promise(function(n) {
                  var i;
                  c.subscribe({
                    next: function(e) {
                      i = e
                    },
                    error: function() {
                      n((0, s.$X)(t.getCurrentResult(), e.previousData, t, r))
                    },
                    complete: function() {
                      n((0, s.$X)(t.maskResult(i), e.previousData, t, r))
                    }
                  })
                })
              }(D, R, T, w, (0, i.__assign)((0, i.__assign)({}, h), {
                skip: !1
              }), V).then(function(e) {
                return Object.assign(e, P)
              });
            return d.catch(function() {}), d
          }, [q, T, w, P, x, R, D, V]),
          Q = o.useRef(F);
        (0, u.E)(function() {
          Q.current = F
        });
        var j = o.useCallback(function() {
          for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
          return Q.current.apply(Q, e)
        }, []);
        return [j, C]
      }
    },
    68236: (e, t, r) => {
      "use strict";
      r.d(t, {
        c: () => f
      });
      var n = r(56926),
        i = r(46026),
        o = r(81967),
        a = r(82966),
        s = r(26753),
        u = r(87552),
        c = r(74197);

      function l(e) {
        return e
      }
      var f = function() {
        function e(e, t) {
          void 0 === t && (t = Object.create(null)), this.resultCache = i.En ? new WeakSet : new Set, this.transform = e, t.getCacheKey && (this.getCacheKey = t.getCacheKey), this.cached = !1 !== t.cache, this.resetCache()
        }
        return e.prototype.getCacheKey = function(e) {
          return [e]
        }, e.identity = function() {
          return new e(l, {
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
            var r = new n.b(i.et);
            this.performWork = (0, u.LV)(e.prototype.performWork.bind(this), {
              makeCacheKey: function(e) {
                var n = t.getCacheKey(e);
                if (n) return (0, a.V1)(Array.isArray(n), 105), r.lookupArray(n)
              },
              max: c.v["documentTransform.cache"],
              cache: s.l
            })
          }
        }, e.prototype.performWork = function(e) {
          return (0, o.sw)(e), this.transform(e)
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
      }()
    },
    69906: (e, t, r) => {
      "use strict";
      r.d(t, {
        r: () => o
      });
      var n = r(57308),
        i = r(46026);

      function o(e) {
        function t(t) {
          Object.defineProperty(e, t, {
            value: n.c
          })
        }
        return i.ol && Symbol.species && t(Symbol.species), t("@@species"), e
      }
    },
    74197: (e, t, r) => {
      "use strict";
      r.d(t, {
        v: () => a
      });
      var n = r(78322),
        i = r(82966),
        o = Symbol.for("apollo.cacheSize"),
        a = (0, n.__assign)({}, i.Sf[o])
    },
    74891: (e, t, r) => {
      "use strict";

      function n(e, t, r) {
        var n = [];
        e.forEach(function(e) {
          return e[t] && n.push(e)
        }), n.forEach(function(e) {
          return e[t](r)
        })
      }
      r.d(t, {
        w: () => n
      })
    },
    77816: (e, t, r) => {
      "use strict";
      r.d(t, {
        m: () => i
      });
      var n = Object.prototype.toString;

      function i(e) {
        return o(e)
      }

      function o(e, t) {
        switch (n.call(e)) {
          case "[object Array]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var r = e.slice(0);
            return t.set(e, r), r.forEach(function(e, n) {
              r[n] = o(e, t)
            }), r;
          case "[object Object]":
            if ((t = t || new Map).has(e)) return t.get(e);
            var i = Object.create(Object.getPrototypeOf(e));
            return t.set(e, i), Object.keys(e).forEach(function(r) {
              i[r] = o(e[r], t)
            }), i;
          default:
            return e
        }
      }
    },
    78012: (e, t, r) => {
      "use strict";
      r.d(t, {
        S: () => c
      });
      var n = r(16565),
        i = r(45309),
        o = r(39493),
        a = r(35902),
        s = r(48440),
        u = r(82966);

      function c(e, t, r) {
        return s.yV.withValue(!0, function() {
          var n = l(e, t, r, !1);
          return Object.isFrozen(e) && (0, a.G)(n), n
        })
      }

      function l(e, t, r, a, s) {
        var c, h = r.knownChanged,
          d = function(e, t) {
            if (t.has(e)) return t.get(e);
            var r = Array.isArray(e) ? [] : Object.create(null);
            return t.set(e, r), r
          }(e, r.mutableTargets);
        if (Array.isArray(e)) {
          for (var p = 0, v = Array.from(e.entries()); p < v.length; p++) {
            var y = v[p],
              g = y[0],
              m = y[1];
            if (null !== m) {
              var _ = l(m, t, r, a, !1 !== globalThis.__DEV__ ? "".concat(s || "", "[").concat(g, "]") : void 0);
              h.has(_) && h.add(d), d[g] = _
            } else d[g] = null
          }
          return h.has(d) ? d : e
        }
        for (var b = 0, w = t.selections; b < w.length; b++) {
          var E = w[b],
            k = void 0;
          if (a && h.add(d), E.kind === n.Kind.FIELD) {
            var O = (0, o.ue)(E),
              S = E.selectionSet;
            if (void 0 === (k = d[O] || e[O])) continue;
            S && null !== k && (_ = l(e[O], S, r, a, !1 !== globalThis.__DEV__ ? "".concat(s || "", ".").concat(O) : void 0), h.has(_) && (k = _)), !1 === globalThis.__DEV__ && (d[O] = k), !1 !== globalThis.__DEV__ && (a && "__typename" !== O && !(null === (c = Object.getOwnPropertyDescriptor(d, O)) || void 0 === c ? void 0 : c.value) ? Object.defineProperty(d, O, f(O, k, s || "", r.operationName, r.operationType)) : (delete d[O], d[O] = k))
          }
          if (E.kind !== n.Kind.INLINE_FRAGMENT || E.typeCondition && !r.cache.fragmentMatches(E, e.__typename) || (k = l(e, E.selectionSet, r, a, s)), E.kind === n.Kind.FRAGMENT_SPREAD) {
            var T = E.name.value,
              D = r.fragmentMap[T] || (r.fragmentMap[T] = r.cache.lookupFragment(T));
            (0, u.V1)(D, 59, T);
            var R = (0, i.s7)(E);
            "mask" !== R && (k = l(e, D.selectionSet, r, "migrate" === R, s))
          }
          h.has(k) && h.add(d)
        }
        return "__typename" in e && !("__typename" in d) && (d.__typename = e.__typename), Object.keys(d).length !== Object.keys(e).length && h.add(d), h.has(d) ? d : e
      }

      function f(e, t, r, n, i) {
        var o = function() {
          return s.yV.getValue() || (!1 !== globalThis.__DEV__ && u.V1.warn(60, n ? "".concat(i, " '").concat(n, "'") : "anonymous ".concat(i), "".concat(r, ".").concat(e).replace(/^\./, "")), o = function() {
            return t
          }), t
        };
        return {
          get: function() {
            return o()
          },
          set: function(e) {
            o = function() {
              return e
            }
          },
          enumerable: !0,
          configurable: !0
        }
      }
    },
    80701: (e, t, r) => {
      "use strict";
      r.d(t, {
        n: () => h
      });
      var n = r(78322),
        i = r(82540),
        o = r(20937),
        a = r(81474),
        s = r(35216),
        u = r(4548),
        c = r(82234),
        l = r(1910),
        f = r(31703);

      function h(e, t) {
        !1 !== globalThis.__DEV__ && (0, f.h)(t || {}, "ignoreResults", "useMutation", "If you don't want to synchronize component state with the mutation, please use the `useApolloClient` hook to get the client instance and call `client.mutate` directly.");
        var r = (0, c.m)(null == t ? void 0 : t.client);
        (0, s.D$)(e, s.KG.Mutation);
        var h = i.useState({
            called: !1,
            loading: !1,
            client: r
          }),
          d = h[0],
          p = h[1],
          v = i.useRef({
            result: d,
            mutationId: 0,
            isMounted: !0,
            client: r,
            mutation: e,
            options: t
          });
        (0, l.E)(function() {
          Object.assign(v.current, {
            client: r,
            options: t,
            mutation: e
          })
        });
        var y = i.useCallback(function(e) {
            void 0 === e && (e = {});
            var t = v.current,
              r = t.options,
              i = t.mutation,
              s = (0, n.__assign)((0, n.__assign)({}, r), {
                mutation: i
              }),
              c = e.client || v.current.client;
            v.current.result.loading || s.ignoreResults || !v.current.isMounted || p(v.current.result = {
              loading: !0,
              error: void 0,
              data: void 0,
              called: !0,
              client: c
            });
            var l = ++v.current.mutationId,
              f = (0, o.l)(s, e);
            return c.mutate(f).then(function(t) {
              var r, n, i = t.data,
                o = t.errors,
                s = o && o.length > 0 ? new u.K4({
                  graphQLErrors: o
                }) : void 0,
                h = e.onError || (null === (r = v.current.options) || void 0 === r ? void 0 : r.onError);
              if (s && h && h(s, f), l === v.current.mutationId && !f.ignoreResults) {
                var d = {
                  called: !0,
                  loading: !1,
                  data: i,
                  error: s,
                  client: c
                };
                v.current.isMounted && !(0, a.L)(v.current.result, d) && p(v.current.result = d)
              }
              var y = e.onCompleted || (null === (n = v.current.options) || void 0 === n ? void 0 : n.onCompleted);
              return s || null == y || y(t.data, f), t
            }, function(t) {
              var r;
              if (l === v.current.mutationId && v.current.isMounted) {
                var n = {
                  loading: !1,
                  error: t,
                  data: void 0,
                  called: !0,
                  client: c
                };
                (0, a.L)(v.current.result, n) || p(v.current.result = n)
              }
              var i = e.onError || (null === (r = v.current.options) || void 0 === r ? void 0 : r.onError);
              if (i) return i(t, f), {
                data: void 0,
                errors: t
              };
              throw t
            })
          }, []),
          g = i.useCallback(function() {
            if (v.current.isMounted) {
              var e = {
                called: !1,
                loading: !1,
                client: v.current.client
              };
              Object.assign(v.current, {
                mutationId: 0,
                result: e
              }), p(e)
            }
          }, []);
        return i.useEffect(function() {
          var e = v.current;
          return e.isMounted = !0,
            function() {
              e.isMounted = !1
            }
        }, []), [y, (0, n.__assign)({
          reset: g
        }, d)]
      }
    },
    81474: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => u,
        L: () => s
      });
      const {
        toString: n,
        hasOwnProperty: i
      } = Object.prototype, o = Function.prototype.toString, a = new Map;

      function s(e, t) {
        try {
          return c(e, t)
        } finally {
          a.clear()
        }
      }
      const u = s;

      function c(e, t) {
        if (e === t) return !0;
        const r = n.call(e);
        if (r !== n.call(t)) return !1;
        switch (r) {
          case "[object Array]":
            if (e.length !== t.length) return !1;
          case "[object Object]": {
            if (d(e, t)) return !0;
            const r = l(e),
              n = l(t),
              o = r.length;
            if (o !== n.length) return !1;
            for (let e = 0; e < o; ++e)
              if (!i.call(t, r[e])) return !1;
            for (let n = 0; n < o; ++n) {
              const i = r[n];
              if (!c(e[i], t[i])) return !1
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
            if (d(e, t)) return !0;
            const n = e.entries(),
              i = "[object Map]" === r;
            for (;;) {
              const e = n.next();
              if (e.done) break;
              const [r, o] = e.value;
              if (!t.has(r)) return !1;
              if (i && !c(o, t.get(r))) return !1
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
            const r = o.call(e);
            return r === o.call(t) && ! function(e, t) {
              const r = e.length - t.length;
              return r >= 0 && e.indexOf(t, r) === r
            }(r, h)
          }
        }
        return !1
      }

      function l(e) {
        return Object.keys(e).filter(f, e)
      }

      function f(e) {
        return void 0 !== this[e]
      }
      const h = "{ [native code] }";

      function d(e, t) {
        let r = a.get(e);
        if (r) {
          if (r.has(t)) return !0
        } else a.set(e, r = new Set);
        return r.add(t), !1
      }
    },
    81967: (e, t, r) => {
      "use strict";
      r.d(t, {
        AT: () => c,
        E4: () => l,
        Vn: () => f,
        Vu: () => a,
        n4: () => s,
        sw: () => o,
        wY: () => h,
        zK: () => u
      });
      var n = r(82966),
        i = r(39493);

      function o(e) {
        (0, n.V1)(e && "Document" === e.kind, 116);
        var t = e.definitions.filter(function(e) {
          return "FragmentDefinition" !== e.kind
        }).map(function(e) {
          if ("OperationDefinition" !== e.kind) throw (0, n.vA)(117, e.kind);
          return e
        });
        return (0, n.V1)(t.length <= 1, 118, t.length), e
      }

      function a(e) {
        return o(e), e.definitions.filter(function(e) {
          return "OperationDefinition" === e.kind
        })[0]
      }

      function s(e) {
        return e.definitions.filter(function(e) {
          return "OperationDefinition" === e.kind && !!e.name
        }).map(function(e) {
          return e.name.value
        })[0] || null
      }

      function u(e) {
        return e.definitions.filter(function(e) {
          return "FragmentDefinition" === e.kind
        })
      }

      function c(e) {
        var t = a(e);
        return (0, n.V1)(t && "query" === t.operation, 119), t
      }

      function l(e) {
        (0, n.V1)("Document" === e.kind, 120), (0, n.V1)(e.definitions.length <= 1, 121);
        var t = e.definitions[0];
        return (0, n.V1)("FragmentDefinition" === t.kind, 122), t
      }

      function f(e) {
        var t;
        o(e);
        for (var r = 0, i = e.definitions; r < i.length; r++) {
          var a = i[r];
          if ("OperationDefinition" === a.kind) {
            var s = a.operation;
            if ("query" === s || "mutation" === s || "subscription" === s) return a
          }
          "FragmentDefinition" !== a.kind || t || (t = a)
        }
        if (t) return t;
        throw (0, n.vA)(123)
      }

      function h(e) {
        var t = Object.create(null),
          r = e && e.variableDefinitions;
        return r && r.length && r.forEach(function(e) {
          e.defaultValue && (0, i.J)(t, e.variable.name, e.defaultValue)
        }), t
      }
    },
    82234: (e, t, r) => {
      "use strict";
      r.d(t, {
        m: () => a
      });
      var n = r(82966),
        i = r(82540),
        o = r(488);

      function a(e) {
        var t = i.useContext((0, o.l)()),
          r = e || t.client;
        return (0, n.V1)(!!r, 79), r
      }
    },
    83605: (e, t, r) => {
      "use strict";
      r.d(t, {
        $: () => D
      });
      var n = r(78322),
        i = r(82966),
        o = r(21429),
        a = r(45309),
        s = r(57308),
        u = function(e, t) {
          var r;
          try {
            r = JSON.stringify(e)
          } catch (e) {
            var n = (0, i.vA)(54, t, e.message);
            throw n.parseError = e, n
          }
          return r
        },
        c = r(46026);

      function l(e) {
        var t = {
          next: function() {
            return e.read()
          }
        };
        return c.uJ && (t[Symbol.asyncIterator] = function() {
          return this
        }), t
      }

      function f(e) {
        var t, r, n, i = e;
        if (e.body && (i = e.body), n = i, c.uJ && n[Symbol.asyncIterator]) return r = i[Symbol.asyncIterator](), (t = {
          next: function() {
            return r.next()
          }
        })[Symbol.asyncIterator] = function() {
          return this
        }, t;
        if (function(e) {
            return !!e.getReader
          }(i)) return l(i.getReader());
        if (function(e) {
            return !!e.stream
          }(i)) return l(i.stream().getReader());
        if (function(e) {
            return !!e.arrayBuffer
          }(i)) return function(e) {
          var t = !1,
            r = {
              next: function() {
                return t ? Promise.resolve({
                  value: void 0,
                  done: !0
                }) : (t = !0, new Promise(function(t, r) {
                  e.then(function(e) {
                    t({
                      value: e,
                      done: !1
                    })
                  }).catch(r)
                }))
              }
            };
          return c.uJ && (r[Symbol.asyncIterator] = function() {
            return this
          }), r
        }(i.arrayBuffer());
        if (function(e) {
            return !!e.pipe
          }(i)) return function(e) {
          var t = null,
            r = null,
            n = !1,
            i = [],
            o = [];

          function a(e) {
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

          function s(e) {
            r = e, o.slice().forEach(function(t) {
              t[1](e)
            }), !t || t()
          }

          function u() {
            n = !0, o.slice().forEach(function(e) {
              e[0]({
                value: void 0,
                done: !0
              })
            }), !t || t()
          }
          t = function() {
            t = null, e.removeListener("data", a), e.removeListener("error", s), e.removeListener("end", u), e.removeListener("finish", u), e.removeListener("close", u)
          }, e.on("data", a), e.on("error", s), e.on("end", u), e.on("finish", u), e.on("close", u);
          var l = {
            next: function() {
              return new Promise(function(e, t) {
                return r ? t(r) : i.length ? e({
                  value: i.shift(),
                  done: !1
                }) : n ? e({
                  value: void 0,
                  done: !0
                }) : void o.push([e, t])
              })
            }
          };
          return c.uJ && (l[Symbol.asyncIterator] = function() {
            return this
          }), l
        }(i);
        throw new Error("Unknown body type for responseIterator. Please pass a streamable response.")
      }
      var h = function(e, t, r) {
          var n = new Error(r);
          throw n.name = "ServerError", n.response = e, n.statusCode = e.status, n.result = t, n
        },
        d = r(4548),
        p = r(61102),
        v = Object.prototype.hasOwnProperty;

      function y(e) {
        var t = {};
        return e.split("\n").forEach(function(e) {
          var r = e.indexOf(":");
          if (r > -1) {
            var n = e.slice(0, r).trim().toLowerCase(),
              i = e.slice(r + 1).trim();
            t[n] = i
          }
        }), t
      }

      function g(e, t) {
        e.status >= 300 && h(e, function() {
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
      var m = r(35588),
        _ = {
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
        b = function(e, t) {
          return t(e)
        };

      function w(e, t) {
        for (var r = [], i = 2; i < arguments.length; i++) r[i - 2] = arguments[i];
        var o = {},
          a = {};
        r.forEach(function(e) {
          o = (0, n.__assign)((0, n.__assign)((0, n.__assign)({}, o), e.options), {
            headers: (0, n.__assign)((0, n.__assign)({}, o.headers), e.headers)
          }), e.credentials && (o.credentials = e.credentials), a = (0, n.__assign)((0, n.__assign)({}, a), e.http)
        }), o.headers && (o.headers = function(e, t) {
          if (!t) {
            var r = {};
            return Object.keys(Object(e)).forEach(function(t) {
              r[t.toLowerCase()] = e[t]
            }), r
          }
          var n = {};
          Object.keys(Object(e)).forEach(function(t) {
            n[t.toLowerCase()] = {
              originalName: t,
              value: e[t]
            }
          });
          var i = {};
          return Object.keys(n).forEach(function(e) {
            i[n[e].originalName] = n[e].value
          }), i
        }(o.headers, a.preserveHeaderCase));
        var s = e.operationName,
          u = e.extensions,
          c = e.variables,
          l = e.query,
          f = {
            operationName: s,
            variables: c
          };
        return a.includeExtensions && (f.extensions = u), a.includeQuery && (f.query = t(l, m.y)), {
          options: o,
          body: f
        }
      }

      function E(e) {
        return new s.c(function(t) {
          t.error(e)
        })
      }
      var k = r(16565),
        O = r(52827),
        S = r(81967),
        T = (0, i.no)(function() {
          return fetch
        }),
        D = function(e) {
          void 0 === e && (e = {});
          var t = e.uri,
            r = void 0 === t ? "/graphql" : t,
            c = e.fetch,
            l = e.print,
            m = void 0 === l ? b : l,
            D = e.includeExtensions,
            R = e.preserveHeaderCase,
            V = e.useGETForQueries,
            x = e.includeUnusedVariables,
            M = void 0 !== x && x,
            P = (0, n.__rest)(e, ["uri", "fetch", "print", "includeExtensions", "preserveHeaderCase", "useGETForQueries", "includeUnusedVariables"]);
          !1 !== globalThis.__DEV__ && function(e) {
            if (!e && "undefined" == typeof fetch) throw (0, i.vA)(51)
          }(c || T);
          var I = {
            http: {
              includeExtensions: D,
              preserveHeaderCase: R
            },
            options: P.fetchOptions,
            credentials: P.credentials,
            headers: P.headers
          };
          return new o.C(function(e) {
            var t = function(e, t) {
                return e.getContext().uri || ("function" == typeof t ? t(e) : t || "/graphql")
              }(e, r),
              o = e.getContext(),
              l = {};
            if (o.clientAwareness) {
              var b = o.clientAwareness,
                D = b.name,
                R = b.version;
              D && (l["apollographql-client-name"] = D), R && (l["apollographql-client-version"] = R)
            }
            var x = (0, n.__assign)((0, n.__assign)({}, l), o.headers),
              P = {
                http: o.http,
                options: o.fetchOptions,
                credentials: o.credentials,
                headers: x
              };
            if ((0, a.d8)(["client"], e.query)) {
              !1 !== globalThis.__DEV__ && !1 !== globalThis.__DEV__ && i.V1.warn(52);
              var C = (0, O.er)(e.query);
              if (!C) return E(new Error("HttpLink: Trying to send a client-only query to the server. To send to the server, ensure a non-client field is added to the query or set the `transformOptions.removeClientFields` option to `true`."));
              e.query = C
            }
            var q, A, F, Q, j, N = w(e, m, _, I, P),
              L = N.options,
              z = N.body;
            z.variables && !M && (z.variables = (q = z.variables, A = e.query, F = (0, n.__assign)({}, q), Q = new Set(Object.keys(q)), (0, k.visit)(A, {
              Variable: function(e, t, r) {
                r && "VariableDefinition" !== r.kind && Q.delete(e.name.value)
              }
            }), Q.forEach(function(e) {
              delete F[e]
            }), F)), L.signal || "undefined" == typeof AbortController || (j = new AbortController, L.signal = j.signal);
            var W, U = "OperationDefinition" === (W = (0, S.Vn)(e.query)).kind && "subscription" === W.operation,
              B = (0, a.d8)(["defer"], e.query);
            if (V && !e.query.definitions.some(function(e) {
                return "OperationDefinition" === e.kind && "mutation" === e.operation
              }) && (L.method = "GET"), B || U) {
              L.headers = L.headers || {};
              var K = "multipart/mixed;";
              U && B && !1 !== globalThis.__DEV__ && i.V1.warn(53), U ? K += "boundary=graphql;subscriptionSpec=1.0,application/json" : B && (K += "deferSpec=20220824,application/json"), L.headers.accept = K
            }
            if ("GET" === L.method) {
              var G = function(e, t) {
                  var r = [],
                    n = function(e, t) {
                      r.push("".concat(e, "=").concat(encodeURIComponent(t)))
                    };
                  if ("query" in t && n("query", t.query), t.operationName && n("operationName", t.operationName), t.variables) {
                    var i = void 0;
                    try {
                      i = u(t.variables, "Variables map")
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
                      o = u(t.extensions, "Extensions map")
                    } catch (e) {
                      return {
                        parseError: e
                      }
                    }
                    n("extensions", o)
                  }
                  var a = "",
                    s = e,
                    c = e.indexOf("#"); - 1 !== c && (a = e.substr(c), s = e.substr(0, c));
                  var l = -1 === s.indexOf("?") ? "?" : "&";
                  return {
                    newURI: s + l + r.join("&") + a
                  }
                }(t, z),
                J = G.newURI,
                H = G.parseError;
              if (H) return E(H);
              t = J
            } else try {
              L.body = u(z, "Payload")
            } catch (H) {
              return E(H)
            }
            return new s.c(function(r) {
              var o = c || (0, i.no)(function() {
                  return fetch
                }) || T,
                a = r.next.bind(r);
              return o(t, L).then(function(t) {
                  var r;
                  e.setContext({
                    response: t
                  });
                  var i, o = null === (r = t.headers) || void 0 === r ? void 0 : r.get("content-type");
                  return null !== o && /^multipart\/mixed/i.test(o) ? function(e, t) {
                    return (0, n.__awaiter)(this, void 0, void 0, function() {
                      var r, i, o, a, s, u, c, l, h, v, m, _, b, w, E, k, O, S, T, D, R, V, x, M;
                      return (0, n.__generator)(this, function(P) {
                        switch (P.label) {
                          case 0:
                            if (void 0 === TextDecoder) throw new Error("TextDecoder must be defined in the environment: please import a polyfill.");
                            r = new TextDecoder("utf-8"), i = null === (M = e.headers) || void 0 === M ? void 0 : M.get("content-type"), o = "boundary=", a = (null == i ? void 0 : i.includes(o)) ? null == i ? void 0 : i.substring((null == i ? void 0 : i.indexOf(o)) + 9).replace(/['"]/g, "").replace(/\;(.*)/gm, "").trim() : "-", s = "\r\n--".concat(a), u = "", c = f(e), l = !0, P.label = 1;
                          case 1:
                            return l ? [4, c.next()] : [3, 3];
                          case 2:
                            for (h = P.sent(), v = h.value, m = h.done, _ = "string" == typeof v ? v : r.decode(v), b = u.length - s.length + 1, l = !m, w = (u += _).indexOf(s, b); w > -1;) {
                              if (E = void 0, V = [u.slice(0, w), u.slice(w + s.length)], u = V[1], k = (E = V[0]).indexOf("\r\n\r\n"), O = y(E.slice(0, k)), (S = O["content-type"]) && -1 === S.toLowerCase().indexOf("application/json")) throw new Error("Unsupported patch content type: application/json is required.");
                              if (T = E.slice(k))
                                if (D = g(e, T), Object.keys(D).length > 1 || "data" in D || "incremental" in D || "errors" in D || "payload" in D)
                                  if ((0, p.Nw)(D)) {
                                    if (R = {}, "payload" in D) {
                                      if (1 === Object.keys(D).length && null === D.payload) return [2];
                                      R = (0, n.__assign)({}, D.payload)
                                    }
                                    "errors" in D && (R = (0, n.__assign)((0, n.__assign)({}, R), {
                                      extensions: (0, n.__assign)((0, n.__assign)({}, "extensions" in R ? R.extensions : null), (x = {}, x[d.K$] = D.errors, x))
                                    })), t(R)
                                  } else t(D);
                              else if (1 === Object.keys(D).length && "hasNext" in D && !D.hasNext) return [2];
                              w = u.indexOf(s)
                            }
                            return [3, 1];
                          case 3:
                            return [2]
                        }
                      })
                    })
                  }(t, a) : (i = e, function(e) {
                    return e.text().then(function(t) {
                      return g(e, t)
                    }).then(function(t) {
                      return Array.isArray(t) || v.call(t, "data") || v.call(t, "errors") || h(e, t, "Server response was missing for query '".concat(Array.isArray(i) ? i.map(function(e) {
                        return e.operationName
                      }) : i.operationName, "'.")), t
                    })
                  })(t).then(a)
                }).then(function() {
                  j = void 0, r.complete()
                }).catch(function(e) {
                  j = void 0,
                    function(e, t) {
                      e.result && e.result.errors && e.result.data && t.next(e.result), t.error(e)
                    }(e, r)
                }),
                function() {
                  j && j.abort()
                }
            })
          })
        }
    },
    85346: (e, t, r) => {
      "use strict";
      r.d(t, {
        HQ: () => u,
        JG: () => s,
        ct: () => a,
        s6: () => c
      });
      var n = r(78322),
        i = r(82966),
        o = r(16565);

      function a(e, t) {
        var r = t,
          o = [];
        return e.definitions.forEach(function(e) {
          if ("OperationDefinition" === e.kind) throw (0, i.vA)(113, e.operation, e.name ? " named '".concat(e.name.value, "'") : "");
          "FragmentDefinition" === e.kind && o.push(e)
        }), void 0 === r && ((0, i.V1)(1 === o.length, 114, o.length), r = o[0].name.value), (0, n.__assign)((0, n.__assign)({}, e), {
          definitions: (0, n.__spreadArray)([{
            kind: "OperationDefinition",
            operation: "query",
            selectionSet: {
              kind: "SelectionSet",
              selections: [{
                kind: "FragmentSpread",
                name: {
                  kind: "Name",
                  value: r
                }
              }]
            }
          }], e.definitions, !0)
        })
      }

      function s(e) {
        void 0 === e && (e = []);
        var t = {};
        return e.forEach(function(e) {
          t[e.name.value] = e
        }), t
      }

      function u(e, t) {
        switch (e.kind) {
          case "InlineFragment":
            return e;
          case "FragmentSpread":
            var r = e.name.value;
            if ("function" == typeof t) return t(r);
            var n = t && t[r];
            return (0, i.V1)(n, 115, r), n || null;
          default:
            return null
        }
      }

      function c(e) {
        var t = !0;
        return (0, o.visit)(e, {
          FragmentSpread: function(e) {
            if (!(t = !!e.directives && e.directives.some(function(e) {
                return "unmask" === e.name.value
              }))) return o.BREAK
          }
        }), t
      }
    },
    86570: (e, t, r) => {
      "use strict";

      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
        var r = Object.create(null);
        return e.forEach(function(e) {
          e && Object.keys(e).forEach(function(t) {
            var n = e[t];
            void 0 !== n && (r[t] = n)
          })
        }), r
      }
      r.d(t, {
        o: () => n
      })
    },
    90564: (e, t, r) => {
      "use strict";
      r.d(t, {
        M: () => s
      });
      var n, i = r(15492),
        o = r(74197),
        a = r(27312),
        s = Object.assign(function(e) {
          return JSON.stringify(e, u)
        }, {
          reset: function() {
            n = new i.V(o.v.canonicalStringify || 1e3)
          }
        });

      function u(e, t) {
        if (t && "object" == typeof t) {
          var r = Object.getPrototypeOf(t);
          if (r === Object.prototype || null === r) {
            var i = Object.keys(t);
            if (i.every(c)) return t;
            var o = JSON.stringify(i),
              a = n.get(o);
            if (!a) {
              i.sort();
              var s = JSON.stringify(i);
              a = n.get(s) || i, n.set(o, a), n.set(s, a)
            }
            var u = Object.create(r);
            return a.forEach(function(e) {
              u[e] = t[e]
            }), u
          }
        }
        return t
      }

      function c(e, t, r) {
        return 0 === t || r[t - 1] <= e
      }!1 !== globalThis.__DEV__ && (0, a.D_)("canonicalStringify", function() {
        return n.size
      }), s.reset()
    }
  }
]);