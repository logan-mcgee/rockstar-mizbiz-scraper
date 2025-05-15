! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "0617957c-fbf6-4450-8178-8bcb54895764", e._sentryDebugIdIdentifier = "sentry-dbid-0617957c-fbf6-4450-8178-8bcb54895764")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-footer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_footer = self.webpackChunk_rockstargames_modules_core_footer || []).push([
  [7559], {
    9862: (e, t, r) => {
      e.exports = r(52522)
    },
    23514: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => R,
        __assign: () => a,
        __asyncDelegator: () => P,
        __asyncGenerator: () => j,
        __asyncValues: () => E,
        __await: () => O,
        __awaiter: () => d,
        __classPrivateFieldGet: () => k,
        __classPrivateFieldIn: () => C,
        __classPrivateFieldSet: () => D,
        __createBinding: () => b,
        __decorate: () => c,
        __disposeResources: () => A,
        __esDecorate: () => f,
        __exportStar: () => m,
        __extends: () => n,
        __generator: () => _,
        __importDefault: () => I,
        __importStar: () => $,
        __makeTemplateObject: () => x,
        __metadata: () => y,
        __param: () => s,
        __propKey: () => u,
        __read: () => w,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => G,
        __runInitializers: () => l,
        __setFunctionName: () => p,
        __spread: () => v,
        __spreadArray: () => S,
        __spreadArrays: () => g,
        __values: () => h,
        default: () => N
      });
      var o = function(e, t) {
        return o = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, t) {
          e.__proto__ = t
        } || function(e, t) {
          for (var r in t) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r])
        }, o(e, t)
      };

      function n(e, t) {
        if ("function" != typeof t && null !== t) throw new TypeError("Class extends value " + String(t) + " is not a constructor or null");

        function r() {
          this.constructor = e
        }
        o(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var t, r = 1, o = arguments.length; r < o; r++)
            for (var n in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, t) {
        var r = {};
        for (var o in e) Object.prototype.hasOwnProperty.call(e, o) && t.indexOf(o) < 0 && (r[o] = e[o]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var n = 0;
          for (o = Object.getOwnPropertySymbols(e); n < o.length; n++) t.indexOf(o[n]) < 0 && Object.prototype.propertyIsEnumerable.call(e, o[n]) && (r[o[n]] = e[o[n]])
        }
        return r
      }

      function c(e, t, r, o) {
        var n, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o);
        else
          for (var c = e.length - 1; c >= 0; c--)(n = e[c]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, r, i) : n(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function s(e, t) {
        return function(r, o) {
          t(r, o, e)
        }
      }

      function f(e, t, r, o, n, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, s = o.kind, f = "getter" === s ? "get" : "setter" === s ? "set" : "value", l = !t && e ? o.static ? e : e.prototype : null, u = t || (l ? Object.getOwnPropertyDescriptor(l, o.name) : {}), p = !1, y = r.length - 1; y >= 0; y--) {
          var d = {};
          for (var _ in o) d[_] = "access" === _ ? {} : o[_];
          for (var _ in o.access) d.access[_] = o.access[_];
          d.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var b = (0, r[y])("accessor" === s ? {
            get: u.get,
            set: u.set
          } : u[f], d);
          if ("accessor" === s) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (c = i(b.get)) && (u.get = c), (c = i(b.set)) && (u.set = c), (c = i(b.init)) && n.unshift(c)
          } else(c = i(b)) && ("field" === s ? n.unshift(c) : u[f] = c)
        }
        l && Object.defineProperty(l, o.name, u), p = !0
      }

      function l(e, t, r) {
        for (var o = arguments.length > 2, n = 0; n < t.length; n++) r = o ? t[n].call(e, r) : t[n].call(e);
        return o ? r : void 0
      }

      function u(e) {
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

      function d(e, t, r, o) {
        return new(r || (r = Promise))((function(n, a) {
          function i(e) {
            try {
              s(o.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              s(o.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(i, c)
          }
          s((o = o.apply(e, t || [])).next())
        }))
      }

      function _(e, t) {
        var r, o, n, a = {
            label: 0,
            sent: function() {
              if (1 & n[0]) throw n[1];
              return n[1]
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
                if (r = 1, o && (n = 2 & c[0] ? o.return : c[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, c[1])).done) return n;
                switch (o = 0, n && (c = [2 & c[0], n.value]), c[0]) {
                  case 0:
                  case 1:
                    n = c;
                    break;
                  case 4:
                    return a.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    a.label++, o = c[1], c = [0];
                    continue;
                  case 7:
                    c = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === c[0] && (!n || c[1] > n[0] && c[1] < n[3])) {
                      a.label = c[1];
                      break
                    }
                    if (6 === c[0] && a.label < n[1]) {
                      a.label = n[1], n = c;
                      break
                    }
                    if (n && a.label < n[2]) {
                      a.label = n[2], a.ops.push(c);
                      break
                    }
                    n[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                c = t.call(e, a)
              } catch (e) {
                c = [6, e], o = 0
              } finally {
                r = n = 0
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
      var b = Object.create ? function(e, t, r, o) {
        void 0 === o && (o = r);
        var n = Object.getOwnPropertyDescriptor(t, r);
        n && !("get" in n ? !t.__esModule : n.writable || n.configurable) || (n = {
          enumerable: !0,
          get: function() {
            return t[r]
          }
        }), Object.defineProperty(e, o, n)
      } : function(e, t, r, o) {
        void 0 === o && (o = r), e[o] = t[r]
      };

      function m(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r)
      }

      function h(e) {
        var t = "function" == typeof Symbol && Symbol.iterator,
          r = t && e[t],
          o = 0;
        if (r) return r.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && o >= e.length && (e = void 0), {
              value: e && e[o++],
              done: !e
            }
          }
        };
        throw new TypeError(t ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function w(e, t) {
        var r = "function" == typeof Symbol && e[Symbol.iterator];
        if (!r) return e;
        var o, n, a = r.call(e),
          i = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(o = a.next()).done;) i.push(o.value)
        } catch (e) {
          n = {
            error: e
          }
        } finally {
          try {
            o && !o.done && (r = a.return) && r.call(a)
          } finally {
            if (n) throw n.error
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
        var o = Array(e),
          n = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, c = a.length; i < c; i++, n++) o[n] = a[i];
        return o
      }

      function S(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, a = t.length; n < a; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }

      function O(e) {
        return this instanceof O ? (this.v = e, this) : new O(e)
      }

      function j(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, n = r.apply(e, t || []),
          a = [];
        return o = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, f)
          }
        })), o[Symbol.asyncIterator] = function() {
          return this
        }, o;

        function i(e, t) {
          n[e] && (o[e] = function(t) {
            return new Promise((function(r, o) {
              a.push([e, t, r, o]) > 1 || c(e, t)
            }))
          }, t && (o[e] = t(o[e])))
        }

        function c(e, t) {
          try {
            (r = n[e](t)).value instanceof O ? Promise.resolve(r.value.v).then(s, f) : l(a[0][2], r)
          } catch (e) {
            l(a[0][3], e)
          }
          var r
        }

        function s(e) {
          c("next", e)
        }

        function f(e) {
          c("throw", e)
        }

        function l(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function P(e) {
        var t, r;
        return t = {}, o("next"), o("throw", (function(e) {
          throw e
        })), o("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function o(o, n) {
          t[o] = e[o] ? function(t) {
            return (r = !r) ? {
              value: O(e[o](t)),
              done: !1
            } : n ? n(t) : t
          } : n
        }
      }

      function E(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = h(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
          return this
        }, t);

        function o(r) {
          t[r] = e[r] && function(t) {
            return new Promise((function(o, n) {
              ! function(e, t, r, o) {
                Promise.resolve(o).then((function(t) {
                  e({
                    value: t,
                    done: r
                  })
                }), t)
              }(o, n, (t = e[r](t)).done, t.value)
            }))
          }
        }
      }

      function x(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var M = Object.create ? function(e, t) {
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

      function $(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = T(e), o = 0; o < r.length; o++) "default" !== r[o] && b(t, e, r[o]);
        return M(t, e), t
      }

      function I(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function k(e, t, r, o) {
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? o : "a" === r ? o.call(e) : o ? o.value : t.get(e)
      }

      function D(e, t, r, o, n) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === o ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
      }

      function C(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function R(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var o, n;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            o = t[Symbol.asyncDispose]
          }
          if (void 0 === o) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            o = t[Symbol.dispose], r && (n = o)
          }
          if ("function" != typeof o) throw new TypeError("Object not disposable.");
          n && (o = function() {
            try {
              n.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: t,
            dispose: o,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var F = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var o = new Error(r);
        return o.name = "SuppressedError", o.error = e, o.suppressed = t, o
      };

      function A(e) {
        function t(t) {
          e.error = e.hasError ? new F(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        var r, o = 0;
        return function n() {
          for (; r = e.stack.pop();) try {
            if (!r.async && 1 === o) return o = 0, e.stack.push(r), Promise.resolve().then(n);
            if (r.dispose) {
              var a = r.dispose.call(r.value);
              if (r.async) return o |= 2, Promise.resolve(a).then(n, (function(e) {
                return t(e), n()
              }))
            } else o |= 1
          } catch (e) {
            t(e)
          }
          if (1 === o) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function G(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, o, n, a) {
          return r ? t ? ".jsx" : ".js" : !o || n && a ? o + n + "." + a.toLowerCase() + "js" : e
        })) : e
      }
      const N = {
        __extends: n,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: s,
        __esDecorate: f,
        __runInitializers: l,
        __propKey: u,
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
        __importStar: $,
        __importDefault: I,
        __classPrivateFieldGet: k,
        __classPrivateFieldSet: D,
        __classPrivateFieldIn: C,
        __addDisposableResource: R,
        __disposeResources: A,
        __rewriteRelativeImportExtension: G
      }
    },
    52522: (e, t) => {
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        i = r ? Symbol.for("react.strict_mode") : 60108,
        c = r ? Symbol.for("react.profiler") : 60114,
        s = r ? Symbol.for("react.provider") : 60109,
        f = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        u = r ? Symbol.for("react.concurrent_mode") : 60111,
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
            case o:
              switch (e = e.type) {
                case l:
                case u:
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
            case n:
              return t
          }
        }
      }

      function S(e) {
        return g(e) === u
      }
      t.AsyncMode = l, t.ConcurrentMode = u, t.ContextConsumer = f, t.ContextProvider = s, t.Element = o, t.ForwardRef = p, t.Fragment = a, t.Lazy = b, t.Memo = _, t.Portal = n, t.Profiler = c, t.StrictMode = i, t.Suspense = y, t.isAsyncMode = function(e) {
        return S(e) || g(e) === l
      }, t.isConcurrentMode = S, t.isContextConsumer = function(e) {
        return g(e) === f
      }, t.isContextProvider = function(e) {
        return g(e) === s
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
      }, t.isForwardRef = function(e) {
        return g(e) === p
      }, t.isFragment = function(e) {
        return g(e) === a
      }, t.isLazy = function(e) {
        return g(e) === b
      }, t.isMemo = function(e) {
        return g(e) === _
      }, t.isPortal = function(e) {
        return g(e) === n
      }, t.isProfiler = function(e) {
        return g(e) === c
      }, t.isStrictMode = function(e) {
        return g(e) === i
      }, t.isSuspense = function(e) {
        return g(e) === y
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === u || e === c || e === i || e === y || e === d || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === _ || e.$$typeof === s || e.$$typeof === f || e.$$typeof === p || e.$$typeof === h || e.$$typeof === w || e.$$typeof === v || e.$$typeof === m)
      }, t.typeOf = g
    },
    67332: (e, t, r) => {
      var o = r(9862),
        n = {
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
        return o.isMemo(e) ? i : c[e.$$typeof] || n
      }
      c[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, c[o.Memo] = i;
      var f = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        u = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        y = Object.getPrototypeOf,
        d = Object.prototype;
      e.exports = function e(t, r, o) {
        if ("string" != typeof r) {
          if (d) {
            var n = y(r);
            n && n !== d && e(t, n, o)
          }
          var i = l(r);
          u && (i = i.concat(u(r)));
          for (var c = s(t), _ = s(r), b = 0; b < i.length; ++b) {
            var m = i[b];
            if (!(a[m] || o && o[m] || _ && _[m] || c && c[m])) {
              var h = p(r, m);
              try {
                f(t, m, h)
              } catch (e) {}
            }
          }
        }
        return t
      }
    }
  }
]);