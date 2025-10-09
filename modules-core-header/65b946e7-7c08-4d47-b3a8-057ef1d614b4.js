try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "65b946e7-7c08-4d47-b3a8-057ef1d614b4", e._sentryDebugIdIdentifier = "sentry-dbid-65b946e7-7c08-4d47-b3a8-057ef1d614b4")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-header",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_header = self.webpackChunk_rockstargames_modules_core_header || []).push([
  [9512], {
    16859: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        n = r ? Symbol.for("react.element") : 60103,
        o = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        i = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        f = r ? Symbol.for("react.context") : 60110,
        u = r ? Symbol.for("react.async_mode") : 60111,
        l = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        y = r ? Symbol.for("react.suspense") : 60113,
        d = r ? Symbol.for("react.suspense_list") : 60120,
        _ = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        m = r ? Symbol.for("react.block") : 60121,
        h = r ? Symbol.for("react.fundamental") : 60117,
        w = r ? Symbol.for("react.responder") : 60118,
        v = r ? Symbol.for("react.scope") : 60119;

      function g(e) {
        if ("object" == typeof e && null !== e) {
          var t = e.$$typeof;
          switch (t) {
            case n:
              switch (e = e.type) {
                case u:
                case l:
                case a:
                case c:
                case i:
                case y:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case f:
                    case p:
                    case b:
                    case _:
                    case s:
                      return e;
                    default:
                      return t
                  }
              }
            case o:
              return t
          }
        }
      }

      function S(e) {
        return g(e) === l
      }
      t.AsyncMode = u, t.ConcurrentMode = l, t.ContextConsumer = f, t.ContextProvider = s, t.Element = n, t.ForwardRef = p, t.Fragment = a, t.Lazy = b, t.Memo = _, t.Portal = o, t.Profiler = c, t.StrictMode = i, t.Suspense = y, t.isAsyncMode = function(e) {
        return S(e) || g(e) === u
      }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return g(e) === f
      }, t.isContextProvider = function(e) {
        return g(e) === s
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === n
      }, t.isForwardRef = function(e) {
        return g(e) === p
      }, t.isFragment = function(e) {
        return g(e) === a
      }, t.isLazy = function(e) {
        return g(e) === b
      }, t.isMemo = function(e) {
        return g(e) === _
      }, t.isPortal = function(e) {
        return g(e) === o
      }, t.isProfiler = function(e) {
        return g(e) === c
      }, t.isStrictMode = function(e) {
        return g(e) === i
      }, t.isSuspense = function(e) {
        return g(e) === y
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === l || e === c || e === i || e === y || e === d || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === _ || e.$$typeof === s || e.$$typeof === f || e.$$typeof === p || e.$$typeof === h || e.$$typeof === w || e.$$typeof === v || e.$$typeof === m)
      }, t.typeOf = g
    },
    35255: (e, t, r) => {
      var n = r(88335),
        o = {
          childContextTypes: !0,
          contextType: !0,
          contextTypes: !0,
          defaultProps: !0,
          displayName: !0,
          getDefaultProps: !0,
          getDerivedStateFromError: !0,
          getDerivedStateFromProps: !0,
          mixins: !0,
          propTypes: !0,
          type: !0
        },
        a = {
          name: !0,
          length: !0,
          prototype: !0,
          caller: !0,
          callee: !0,
          arguments: !0,
          arity: !0
        },
        i = {
          $$typeof: !0,
          compare: !0,
          defaultProps: !0,
          displayName: !0,
          propTypes: !0,
          type: !0
        },
        c = {};

      function s(e) {
        return n.isMemo(e) ? i : c[e.$$typeof] || o
      }
      c[n.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, c[n.Memo] = i;
      var f = Object.defineProperty,
        u = Object.getOwnPropertyNames,
        l = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, r, n) {
        if ("string" != typeof r) {
          if (d) {
            var o = y(r);
            o && o !== d && e(t, o, n)
          }
          var i = u(r);
          l && (i = i.concat(l(r)));
          for (var c = s(t), _ = s(r), b = 0; b < i.length; ++b) {
            var m = i[b];
            if (!(a[m] || n && n[m] || _ && _[m] || c && c[m])) {
              var h = p(r, m);
              try {
                f(t, m, h)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    78322: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => R,
        __assign: () => a,
        __asyncDelegator: () => P,
        __asyncGenerator: () => j,
        __asyncValues: () => E,
        __await: () => O,
        __awaiter: () => d,
        __classPrivateFieldGet: () => D,
        __classPrivateFieldIn: () => C,
        __classPrivateFieldSet: () => M,
        __createBinding: () => b,
        __decorate: () => c,
        __disposeResources: () => A,
        __esDecorate: () => f,
        __exportStar: () => m,
        __extends: () => o,
        __generator: () => _,
        __importDefault: () => k,
        __importStar: () => I,
        __makeTemplateObject: () => x,
        __metadata: () => y,
        __param: () => s,
        __propKey: () => l,
        __read: () => w,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => N,
        __runInitializers: () => u,
        __setFunctionName: () => p,
        __spread: () => v,
        __spreadArray: () => S,
        __spreadArrays: () => g,
        __values: () => h,
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

      function f(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, s = n.kind, f = "getter" === s ? "get" : "setter" === s ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, l = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), p = !1, y = r.length - 1; y >= 0; y--) {
          var d = {};
          for (var _ in n) d[_] = "access" === _ ? {} : n[_];
          for (var _ in n.access) d.access[_] = n.access[_];
          d.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var b = (0, r[y])("accessor" === s ? {
            get: l.get,
            set: l.set
          } : l[f], d);
          if ("accessor" === s) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (c = i(b.get)) && (l.get = c), (c = i(b.set)) && (l.set = c), (c = i(b.init)) && o.unshift(c)
          } else(c = i(b)) && ("field" === s ? o.unshift(c) : l[f] = c)
        }
        u && Object.defineProperty(u, n.name, l), p = !0
      }

      function u(e, t, r) {
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

      function y(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function d(e, t, r, n) {
        return new(r || (r = Promise))((function(o, a) {
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
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(i, c)
          }
          s((n = n.apply(e, t || [])).next())
        }))
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
      var b = Object.create ? function(e, t, r, n) {
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

      function m(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r)
      }

      function h(e) {
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

      function v() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(w(arguments[t]));
        return e
      }

      function g() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, o++) n[o] = a[i];
        return n
      }

      function S(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function O(e) {
        return this instanceof O ? (this.v = e, this) : new O(e)
      }

      function j(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, f)
          }
        })), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e, t) {
          o[e] && (n[e] = function(t) {
            return new Promise((function(r, n) {
              a.push([e, t, r, n]) > 1 || c(e, t)
            }))
          }, t && (n[e] = t(n[e])))
        }

        function c(e, t) {
          try {
            (r = o[e](t)).value instanceof O ? Promise.resolve(r.value.v).then(s, f) : u(a[0][2], r)
          } catch (e) {
            u(a[0][3], e)
          }
          var r
        }

        function s(e) {
          c("next", e)
        }

        function f(e) {
          c("throw", e)
        }

        function u(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function P(e) {
        var t, r;
        return t = {}, n("next"), n("throw", (function(e) {
          throw e
        })), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, o) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: O(e[n](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = h(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function n(r) {
          t[r] = e[r] && function(t) {
            return new Promise((function(n, o) {
              ! function(e, t, r, n) {
                Promise.resolve(n).then((function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }), t)
              }(n, o, (t = e[r](t)).done, t.value)
            }))
          }
        }
      }

      function x(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var T = Object.create ? function(e, t) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: t
          })
        } : function(e, t) {
          e.default = t
        },
        $ = function(e) {
          return $ = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, $(e)
        };

      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = $(e), n = 0; n < r.length; n++) "default" !== r[n] && b(t, e, r[n]);
        return T(t, e), t
      }

      function k(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function D(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function M(e, t, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
      }

      function C(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function R(e, t, r) {
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

      function A(e) {
        function t(t) {
          e.error = e.hasError ? new F(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, n = 0;
        return function o() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === n) return n = 0, e.stack.push(r), Promise.resolve().then(o);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return n |= 2, Promise.resolve(a).then(o, (function(e) {
                return t(e), o()
              }))
            } else n |= 1
          } catch (e) {
            t(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function N(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, n, o, a) {
          return r ? t ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e
        })) : e
      }
      const z = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: s,
        __esDecorate: f,
        __runInitializers: u,
        __propKey: l,
        __setFunctionName: p,
        __metadata: y,
        __awaiter: d,
        __generator: _,
        __createBinding: b,
        __exportStar: m,
        __values: h,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: S,
        __await: O,
        __asyncGenerator: j,
        __asyncDelegator: P,
        __asyncValues: E,
        __makeTemplateObject: x,
        __importStar: I,
        __importDefault: k,
        __classPrivateFieldGet: D,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: C,
        __addDisposableResource: R,
        __disposeResources: A,
        __rewriteRelativeImportExtension: N
      }
    },
    88335: (e, t, r) => {
      e.exports = r(16859)
    }
  }
]);