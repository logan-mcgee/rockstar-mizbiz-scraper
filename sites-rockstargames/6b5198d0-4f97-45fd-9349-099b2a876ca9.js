try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "6b5198d0-4f97-45fd-9349-099b2a876ca9", e._sentryDebugIdIdentifier = "sentry-dbid-6b5198d0-4f97-45fd-9349-099b2a876ca9")
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
  [1515, 7547, 8322, 9928], {
    43292(e, t, r) {
      r.d(t, {
        zR: () => i
      });
      var n, o = r(32549);
      ! function(e) {
        e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"
      }(n || (n = {}));
      var a = "beforeunload";

      function i(e) {
        void 0 === e && (e = {});
        var t = e.window,
          r = void 0 === t ? document.defaultView : t,
          i = r.history;

        function u() {
          var e = r.location,
            t = e.pathname,
            n = e.search,
            o = e.hash,
            a = i.state || {};
          return [a.idx, {
            pathname: t,
            search: n,
            hash: o,
            state: a.usr || null,
            key: a.key || "default"
          }]
        }
        var f = null;
        r.addEventListener("popstate", function() {
          if (f) h.call(f), f = null;
          else {
            var e = n.Pop,
              t = u(),
              r = t[0],
              o = t[1];
            if (h.length) {
              if (null != r) {
                var a = d - r;
                a && (f = {
                  action: e,
                  location: o,
                  retry: function() {
                    O(-1 * a)
                  }
                }, O(a))
              }
            } else m(e)
          }
        });
        var l = n.Pop,
          p = u(),
          d = p[0],
          y = p[1],
          _ = s(),
          h = s();

        function b(e) {
          return "string" == typeof e ? e : (r = (t = e).pathname, n = void 0 === r ? "/" : r, o = t.search, a = void 0 === o ? "" : o, i = t.hash, c = void 0 === i ? "" : i, a && "?" !== a && (n += "?" === a.charAt(0) ? a : "?" + a), c && "#" !== c && (n += "#" === c.charAt(0) ? c : "#" + c), n);
          var t, r, n, o, a, i, c
        }

        function v(e, t) {
          return void 0 === t && (t = null), (0, o.A)({
            pathname: y.pathname,
            hash: "",
            search: ""
          }, "string" == typeof e ? function(e) {
            var t = {};
            if (e) {
              var r = e.indexOf("#");
              r >= 0 && (t.hash = e.substr(r), e = e.substr(0, r));
              var n = e.indexOf("?");
              n >= 0 && (t.search = e.substr(n), e = e.substr(0, n)), e && (t.pathname = e)
            }
            return t
          }(e) : e, {
            state: t,
            key: Math.random().toString(36).substr(2, 8)
          })
        }

        function w(e, t) {
          return [{
            usr: e.state,
            key: e.key,
            idx: t
          }, b(e)]
        }

        function g(e, t, r) {
          return !h.length || (h.call({
            action: e,
            location: t,
            retry: r
          }), !1)
        }

        function m(e) {
          l = e;
          var t = u();
          d = t[0], y = t[1], _.call({
            action: l,
            location: y
          })
        }

        function O(e) {
          i.go(e)
        }
        return null == d && (d = 0, i.replaceState((0, o.A)({}, i.state, {
          idx: d
        }), "")), {
          get action() {
            return l
          },
          get location() {
            return y
          },
          createHref: b,
          push: function e(t, o) {
            var a = n.Push,
              c = v(t, o);
            if (g(a, c, function() {
                e(t, o)
              })) {
              var s = w(c, d + 1),
                u = s[0],
                f = s[1];
              try {
                i.pushState(u, "", f)
              } catch (e) {
                r.location.assign(f)
              }
              m(a)
            }
          },
          replace: function e(t, r) {
            var o = n.Replace,
              a = v(t, r);
            if (g(o, a, function() {
                e(t, r)
              })) {
              var c = w(a, d),
                s = c[0],
                u = c[1];
              i.replaceState(s, "", u), m(o)
            }
          },
          go: O,
          back: function() {
            O(-1)
          },
          forward: function() {
            O(1)
          },
          listen: function(e) {
            return _.push(e)
          },
          block: function(e) {
            var t = h.push(e);
            return 1 === h.length && r.addEventListener(a, c),
              function() {
                t(), h.length || r.removeEventListener(a, c)
              }
          }
        }
      }

      function c(e) {
        e.preventDefault(), e.returnValue = ""
      }

      function s() {
        var e = [];
        return {
          get length() {
            return e.length
          },
          push: function(t) {
            return e.push(t),
              function() {
                e = e.filter(function(e) {
                  return e !== t
                })
              }
          },
          call: function(t) {
            e.forEach(function(e) {
              return e && e(t)
            })
          }
        }
      }
    },
    9827(e, t, r) {
      var n = r(18429);
      t.H = n.createRoot, n.hydrateRoot
    },
    69245(e, t, r) {
      var n = r(71127),
        o = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        c = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        s = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function u(e, t, r) {
        var n, a = {},
          u = null,
          f = null;
        for (n in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (f = t.ref), t) i.call(t, n) && !s.hasOwnProperty(n) && (a[n] = t[n]);
        if (e && e.defaultProps)
          for (n in t = e.defaultProps) void 0 === a[n] && (a[n] = t[n]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: f,
          props: a,
          _owner: c.current
        }
      }
      t.Fragment = a, t.jsx = u, t.jsxs = u
    },
    42295(e, t, r) {
      e.exports = r(69245)
    },
    32549(e, t, r) {
      function n() {
        return n = Object.assign ? Object.assign.bind() : function(e) {
          for (var t = 1; t < arguments.length; t++) {
            var r = arguments[t];
            for (var n in r)({}).hasOwnProperty.call(r, n) && (e[n] = r[n])
          }
          return e
        }, n.apply(null, arguments)
      }
      r.d(t, {
        A: () => n
      })
    },
    77053(e, t, r) {
      r.d(t, {
        DI: () => n.DI,
        LU: () => n.LU
      });
      var n = r(93715);
      r(57461)
    },
    87927(e, t, r) {
      r.d(t, {
        NP: () => n.NP
      });
      var n = r(43661)
    },
    78322(e, t, r) {
      r.r(t), r.d(t, {
        __addDisposableResource: () => C,
        __assign: () => a,
        __asyncDelegator: () => E,
        __asyncGenerator: () => j,
        __asyncValues: () => S,
        __await: () => P,
        __awaiter: () => y,
        __classPrivateFieldGet: () => D,
        __classPrivateFieldIn: () => M,
        __classPrivateFieldSet: () => A,
        __createBinding: () => h,
        __decorate: () => c,
        __disposeResources: () => L,
        __esDecorate: () => u,
        __exportStar: () => b,
        __extends: () => o,
        __generator: () => _,
        __importDefault: () => R,
        __importStar: () => I,
        __makeTemplateObject: () => k,
        __metadata: () => d,
        __param: () => s,
        __propKey: () => l,
        __read: () => w,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => N,
        __runInitializers: () => f,
        __setFunctionName: () => p,
        __spread: () => g,
        __spreadArray: () => O,
        __spreadArrays: () => m,
        __values: () => v,
        default: () => z
      });
      var n = function(e, t) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, n(e, t)
      };

      function o(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, n = arguments.length; r < n; r++)
            for (var o in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function c(e, t, r, n) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function s(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function u(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, s = n.kind, u = "getter" === s ? "get" : "setter" === s ? "set" : "value", f = !t && e ? n.static ? e : e.prototype : null, l = t || (f ? Object.getOwnPropertyDescriptor(f, n.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var y = {};
          for (var _ in n) y[_] = "access" === _ ? {} : n[_];
          for (var _ in n.access) y.access[_] = n.access[_];
          y.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var h = (0, r[d])("accessor" === s ? {
            get: l.get,
            set: l.set
          } : l[u], y);
          if ("accessor" === s) {
            if (void 0 === h) continue;
            if (null === h || "object" != typeof h) throw new TypeError("Object expected");
            (c = i(h.get)) && (l.get = c), (c = i(h.set)) && (l.set = c), (c = i(h.init)) && o.unshift(c)
          } else(c = i(h)) && ("field" === s ? o.unshift(c) : l[u] = c)
        }
        f && Object.defineProperty(f, n.name, l), p = !0
      }

      function f(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0
      }

      function l(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function p(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function d(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function y(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
          function i(e) {
            try {
              s(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              s(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r(function(e) {
              e(t)
            })).then(i, c)
          }
          s((n = n.apply(e, t || [])).next())
        })
      }

      function _(e, t) {
        var r, n, o, a = {
            label: 0,
            sent: function() {
              if (1 & o[0]) throw o[1];
              return o[1]
            },
            trys: [],
            ops: []
          },
          i = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return i.next = c(0), i.throw = c(1), i.return = c(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function c(c) {
          return function(s) {
            return function(c) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return a.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = c[1], c = [0];
                    continue;
                  case 7:
                    c = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      a.label = c[1];
                      break
                    }
                    if (6 === c[0] && a.label < o[1]) {
                      a.label = o[1], o = c;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(c);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                c = t.call(e, a)
              } catch (e) {
                c = [6, e], n = 0
              } finally {
                r = o = 0
              }
              if (5 & c[0]) throw c[1];
              return {
                value: c[0] ? c[1] : void 0,
                done: !0
              }
            }([c, s])
          }
        }
      }
      var h = Object.create ? function(e, t, r, n) {
        void 0 === n && (n = r);
        var o = Object.getOwnPropertyDescriptor(t, r);
        o && !("get" in o ? !t.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, n, o)
      } : function(e, t, r, n) {
        void 0 === n && (n = r), e[n] = t[r]
      };

      function b(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || h(t, e, r)
      }

      function v(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          n = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function w(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var n, o, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (r = a.return) && r.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }

      function g() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
        return e
      }

      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) n[o] = a[i];
        return n
      }

      function O(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function P(e) {
        return this instanceof P ? (this.v = e, this) : new P(e)
      }

      function j(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
          }
        }), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e, t) {
          o[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
              a.push([e, t, r, n]) > 1 || c(e, t)
            })
          }, t && (n[e] = t(n[e])))
        }

        function c(e, t) {
          try {
            (r = o[e](t)).value instanceof P ? Promise.resolve(r.value.v).then(s, u) : f(a[0][2], r)
          } catch (e) {
            f(a[0][3], e)
          }
          var r
        }

        function s(e) {
          c("next", e)
        }

        function u(e) {
          c("throw", e)
        }

        function f(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function E(e) {
        var t, r;
        return t = {}, n("next"), n("throw", function(e) {
          throw e
        }), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, o) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: P(e[n](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function S(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = v(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function n(r) {
          t[r] = e[r] && function(t) {
            return new Promise(function(n, o) {
              ! function(e, t, r, n) {
                Promise.resolve(n).then(function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }, t)
              }(n, o, (t = e[r](t)).done, t.value)
            })
          }
        }
      }

      function k(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var x = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        T = function(e) {
          return T = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, T(e)
        };

      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = T(e), n = 0; n < r.length; n++) "default" !== r[n] && h(t, e, r[n]);
        return x(t, e), t
      }

      function R(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function D(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function A(e, t, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
      }

      function M(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function C(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n, o;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose], r && (o = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          o && (n = function() {
            try {
              o.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: n,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var F = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function L(e) {
        function t(t) {
          e.error = e.hasError ? new F(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, n = 0;
        return function o() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return n |= 2, Promise.resolve(a).then(o, function(e) {
                return t(e), o()
              })
            } else n |= 1
          } catch (e) {
            t(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function N(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, o, a) {
          return r ? t ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const z = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: s,
        __esDecorate: u,
        __runInitializers: f,
        __propKey: l,
        __setFunctionName: p,
        __metadata: d,
        __awaiter: y,
        __generator: _,
        __createBinding: h,
        __exportStar: b,
        __values: v,
        __read: w,
        __spread: g,
        __spreadArrays: m,
        __spreadArray: O,
        __await: P,
        __asyncGenerator: j,
        __asyncDelegator: E,
        __asyncValues: S,
        __makeTemplateObject: k,
        __importStar: I,
        __importDefault: R,
        __classPrivateFieldGet: D,
        __classPrivateFieldSet: A,
        __classPrivateFieldIn: M,
        __addDisposableResource: C,
        __disposeResources: L,
        __rewriteRelativeImportExtension: N
      }
    }
  }
]);