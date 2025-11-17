try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    r = (new e.Error).stack;
  r && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[r] = "6e0aa364-6648-40ae-899f-9eb5e9594e7a", e._sentryDebugIdIdentifier = "sentry-dbid-6e0aa364-6648-40ae-899f-9eb5e9594e7a")
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
  [2295, 7144, 7815, 8322, 9928], {
    42295: (e, r, t) => {
      e.exports = t(69245)
    },
    69245: (e, r, t) => {
      var n = t(62229),
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

      function u(e, r, t) {
        var n, a = {},
          u = null,
          f = null;
        for (n in void 0 !== t && (u = "" + t), void 0 !== r.key && (u = "" + r.key), void 0 !== r.ref && (f = r.ref), r) i.call(r, n) && !s.hasOwnProperty(n) && (a[n] = r[n]);
        if (e && e.defaultProps)
          for (n in r = e.defaultProps) void 0 === a[n] && (a[n] = r[n]);
        return {
          $$typeof: o,
          type: e,
          key: u,
          ref: f,
          props: a,
          _owner: c.current
        }
      }
      r.Fragment = a, r.jsx = u, r.jsxs = u
    },
    78322: (e, r, t) => {
      t.r(r), t.d(r, {
        __addDisposableResource: () => F,
        __assign: () => a,
        __asyncDelegator: () => P,
        __asyncGenerator: () => E,
        __asyncValues: () => S,
        __await: () => j,
        __awaiter: () => d,
        __classPrivateFieldGet: () => D,
        __classPrivateFieldIn: () => R,
        __classPrivateFieldSet: () => M,
        __createBinding: () => b,
        __decorate: () => c,
        __disposeResources: () => N,
        __esDecorate: () => u,
        __exportStar: () => h,
        __extends: () => o,
        __generator: () => _,
        __importDefault: () => A,
        __importStar: () => I,
        __makeTemplateObject: () => k,
        __metadata: () => y,
        __param: () => s,
        __propKey: () => l,
        __read: () => v,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => $,
        __runInitializers: () => f,
        __setFunctionName: () => p,
        __spread: () => m,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => w,
        default: () => G
      });
      var n = function(e, r) {
        return n = Object.setPrototypeOf || {
          __proto__: []
        }
        instanceof Array && function(e, r) {
          e.__proto__ = r
        } || function(e, r) {
          for (var t in r) Object.prototype.hasOwnProperty.call(r, t) && (e[t] = r[t])
        }, n(e, r)
      };

      function o(e, r) {
        if ("function" != typeof r && null !== r) throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");

        function t() {
          this.constructor = e
        }
        n(e, r), e.prototype = null === r ? Object.create(r) : (t.prototype = r.prototype, new t)
      }
      var a = function() {
        return a = Object.assign || function(e) {
          for (var r, t = 1, n = arguments.length; t < n; t++)
            for (var o in r = arguments[t]) Object.prototype.hasOwnProperty.call(r, o) && (e[o] = r[o]);
          return e
        }, a.apply(this, arguments)
      };

      function i(e, r) {
        var t = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && r.indexOf(n) < 0 && (t[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) r.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (t[n[o]] = e[n[o]])
        }
        return t
      }

      function c(e, r, t, n) {
        var o, a = arguments.length,
          i = a < 3 ? r : null === n ? n = Object.getOwnPropertyDescriptor(r, t) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, r, t, n);
        else
          for (var c = e.length - 1; c >= 0; c--)(o = e[c]) && (i = (a < 3 ? o(i) : a > 3 ? o(r, t, i) : o(r, t)) || i);
        return a > 3 && i && Object.defineProperty(r, t, i), i
      }

      function s(e, r) {
        return function(t, n) {
          r(t, n, e)
        }
      }

      function u(e, r, t, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, s = n.kind, u = "getter" === s ? "get" : "setter" === s ? "set" : "value", f = !r && e ? n.static ? e : e.prototype : null, l = r || (f ? Object.getOwnPropertyDescriptor(f, n.name) : {}), p = !1, y = t.length - 1; y >= 0; y--) {
          var d = {};
          for (var _ in n) d[_] = "access" === _ ? {} : n[_];
          for (var _ in n.access) d.access[_] = n.access[_];
          d.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var b = (0, t[y])("accessor" === s ? {
            get: l.get,
            set: l.set
          } : l[u], d);
          if ("accessor" === s) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (c = i(b.get)) && (l.get = c), (c = i(b.set)) && (l.set = c), (c = i(b.init)) && o.unshift(c)
          } else(c = i(b)) && ("field" === s ? o.unshift(c) : l[u] = c)
        }
        f && Object.defineProperty(f, n.name, l), p = !0
      }

      function f(e, r, t) {
        for (var n = arguments.length > 2, o = 0; o < r.length; o++) t = n ? r[o].call(e, t) : r[o].call(e);
        return n ? t : void 0
      }

      function l(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function p(e, r, t) {
        return "symbol" == typeof r && (r = r.description ? "[".concat(r.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: t ? "".concat(t, " ", r) : r
        })
      }

      function y(e, r) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, r)
      }

      function d(e, r, t, n) {
        return new(t || (t = Promise))(function(o, a) {
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
            var r;
            e.done ? o(e.value) : (r = e.value, r instanceof t ? r : new t(function(e) {
              e(r)
            })).then(i, c)
          }
          s((n = n.apply(e, r || [])).next())
        })
      }

      function _(e, r) {
        var t, n, o, a = {
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
              if (t) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, c[0] && (a = 0)), a;) try {
                if (t = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
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
                c = r.call(e, a)
              } catch (e) {
                c = [6, e], n = 0
              } finally {
                t = o = 0
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
      var b = Object.create ? function(e, r, t, n) {
        void 0 === n && (n = t);
        var o = Object.getOwnPropertyDescriptor(r, t);
        o && !("get" in o ? !r.__esModule : o.writable || o.configurable) || (o = {
          enumerable: !0,
          get: function() {
            return r[t]
          }
        }), Object.defineProperty(e, n, o)
      } : function(e, r, t, n) {
        void 0 === n && (n = t), e[n] = r[t]
      };

      function h(e, r) {
        for (var t in e) "default" === t || Object.prototype.hasOwnProperty.call(r, t) || b(r, e, t)
      }

      function w(e) {
        var r = "function" == typeof Symbol && Symbol.iterator,
          t = r && e[r],
          n = 0;
        if (t) return t.call(e);
        if (e && "number" == typeof e.length) return {
          next: function() {
            return e && n >= e.length && (e = void 0), {
              value: e && e[n++],
              done: !e
            }
          }
        };
        throw new TypeError(r ? "Object is not iterable." : "Symbol.iterator is not defined.")
      }

      function v(e, r) {
        var t = "function" == typeof Symbol && e[Symbol.iterator];
        if (!t) return e;
        var n, o, a = t.call(e),
          i = [];
        try {
          for (;
            (void 0 === r || r-- > 0) && !(n = a.next()).done;) i.push(n.value)
        } catch (e) {
          o = {
            error: e
          }
        } finally {
          try {
            n && !n.done && (t = a.return) && t.call(a)
          } finally {
            if (o) throw o.error
          }
        }
        return i
      }

      function m() {
        for (var e = [], r = 0; r < arguments.length; r++) e = e.concat(v(arguments[r]));
        return e
      }

      function g() {
        for (var e = 0, r = 0, t = arguments.length; r < t; r++) e += arguments[r].length;
        var n = Array(e),
          o = 0;
        for (r = 0; r < t; r++)
          for (var a = arguments[r], i = 0, c = a.length; i < c; i++, o++) n[o] = a[i];
        return n
      }

      function O(e, r, t) {
        if (t || 2 === arguments.length)
          for (var n, o = 0, a = r.length; o < a; o++) !n && o in r || (n || (n = Array.prototype.slice.call(r, 0, o)), n[o] = r[o]);
        return e.concat(n || Array.prototype.slice.call(r))
      }

      function j(e) {
        return this instanceof j ? (this.v = e, this) : new j(e)
      }

      function E(e, r, t) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = t.apply(e, r || []),
          a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", function(e) {
          return function(r) {
            return Promise.resolve(r).then(e, u)
          }
        }), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e, r) {
          o[e] && (n[e] = function(r) {
            return new Promise(function(t, n) {
              a.push([e, r, t, n]) > 1 || c(e, r)
            })
          }, r && (n[e] = r(n[e])))
        }

        function c(e, r) {
          try {
            (t = o[e](r)).value instanceof j ? Promise.resolve(t.value.v).then(s, u) : f(a[0][2], t)
          } catch (e) {
            f(a[0][3], e)
          }
          var t
        }

        function s(e) {
          c("next", e)
        }

        function u(e) {
          c("throw", e)
        }

        function f(e, r) {
          e(r), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function P(e) {
        var r, t;
        return r = {}, n("next"), n("throw", function(e) {
          throw e
        }), n("return"), r[Symbol.iterator] = function() {
          return this
        }, r;

        function n(n, o) {
          r[n] = e[n] ? function(r) {
            return (t = !t) ? {
              value: j(e[n](r)),
              done: !1
            } : o ? o(r) : r
          } : o
        }
      }

      function S(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var r, t = e[Symbol.asyncIterator];
        return t ? t.call(e) : (e = w(e), r = {}, n("next"), n("throw"), n("return"), r[Symbol.asyncIterator] = function() {
          return this
        }, r);

        function n(t) {
          r[t] = e[t] && function(r) {
            return new Promise(function(n, o) {
              ! function(e, r, t, n) {
                Promise.resolve(n).then(function(r) {
                  e({
                    value: r,
                    done: t
                  })
                }, r)
              }(n, o, (r = e[t](r)).done, r.value)
            })
          }
        }
      }

      function k(e, r) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: r
        }) : e.raw = r, e
      }
      var x = Object.create ? function(e, r) {
          Object.defineProperty(e, "default", {
            enumerable: !0,
            value: r
          })
        } : function(e, r) {
          e.default = r
        },
        T = function(e) {
          return T = Object.getOwnPropertyNames || function(e) {
            var r = [];
            for (var t in e) Object.prototype.hasOwnProperty.call(e, t) && (r[r.length] = t);
            return r
          }, T(e)
        };

      function I(e) {
        if (e && e.__esModule) return e;
        var r = {};
        if (null != e)
          for (var t = T(e), n = 0; n < t.length; n++) "default" !== t[n] && b(r, e, t[n]);
        return x(r, e), r
      }

      function A(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function D(e, r, t, n) {
        if ("a" === t && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof r ? e !== r || !n : !r.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === t ? n : "a" === t ? n.call(e) : n ? n.value : r.get(e)
      }

      function M(e, r, t, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof r ? e !== r || !o : !r.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, t) : o ? o.value = t : r.set(e, t), t
      }

      function R(e, r) {
        if (null === r || "object" != typeof r && "function" != typeof r) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? r === e : e.has(r)
      }

      function F(e, r, t) {
        if (null != r) {
          if ("object" != typeof r && "function" != typeof r) throw new TypeError("Object expected.");
          var n, o;
          if (t) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = r[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = r[Symbol.dispose], t && (o = n)
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          o && (n = function() {
            try {
              o.call(this)
            } catch (e) {
              return Promise.reject(e)
            }
          }), e.stack.push({
            value: r,
            dispose: n,
            async: t
          })
        } else t && e.stack.push({
          async: !0
        });
        return r
      }
      var C = "function" == typeof SuppressedError ? SuppressedError : function(e, r, t) {
        var n = new Error(t);
        return n.name = "SuppressedError", n.error = e, n.suppressed = r, n
      };

      function N(e) {
        function r(r) {
          e.error = e.hasError ? new C(r, e.error, "An error was suppressed during disposal.") : r, e.hasError = !0
        }
        var t, n = 0;
        return function o() {
          for (; t = e.stack.pop();) try {
            if (!t.async && 1 === n) return n = 0, e.stack.push(t), Promise.resolve().then(o);
            if (t.dispose) {
              var a = t.dispose.call(t.value);
              if (t.async) return n |= 2, Promise.resolve(a).then(o, function(e) {
                return r(e), o()
              })
            } else n |= 1
          } catch (e) {
            r(e)
          }
          if (1 === n) return e.hasError ? Promise.reject(e.error) : Promise.resolve();
          if (e.hasError) throw e.error
        }()
      }

      function $(e, r) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, t, n, o, a) {
          return t ? r ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const G = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: s,
        __esDecorate: u,
        __runInitializers: f,
        __propKey: l,
        __setFunctionName: p,
        __metadata: y,
        __awaiter: d,
        __generator: _,
        __createBinding: b,
        __exportStar: h,
        __values: w,
        __read: v,
        __spread: m,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: E,
        __asyncDelegator: P,
        __asyncValues: S,
        __makeTemplateObject: k,
        __importStar: I,
        __importDefault: A,
        __classPrivateFieldGet: D,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: R,
        __addDisposableResource: F,
        __disposeResources: N,
        __rewriteRelativeImportExtension: $
      }
    },
    79465: e => {
      var r = function(e) {
          return function(e) {
            return !!e && "object" == typeof e
          }(e) && ! function(e) {
            var r = Object.prototype.toString.call(e);
            return "[object RegExp]" === r || "[object Date]" === r || function(e) {
              return e.$$typeof === t
            }(e)
          }(e)
        },
        t = "function" == typeof Symbol && Symbol.for ? Symbol.for("react.element") : 60103;

      function n(e, r) {
        return !1 !== r.clone && r.isMergeableObject(e) ? c((t = e, Array.isArray(t) ? [] : {}), e, r) : e;
        var t
      }

      function o(e, r, t) {
        return e.concat(r).map(function(e) {
          return n(e, t)
        })
      }

      function a(e) {
        return Object.keys(e).concat(function(e) {
          return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(e).filter(function(r) {
            return Object.propertyIsEnumerable.call(e, r)
          }) : []
        }(e))
      }

      function i(e, r) {
        try {
          return r in e
        } catch (e) {
          return !1
        }
      }

      function c(e, t, s) {
        (s = s || {}).arrayMerge = s.arrayMerge || o, s.isMergeableObject = s.isMergeableObject || r, s.cloneUnlessOtherwiseSpecified = n;
        var u = Array.isArray(t);
        return u === Array.isArray(e) ? u ? s.arrayMerge(e, t, s) : function(e, r, t) {
          var o = {};
          return t.isMergeableObject(e) && a(e).forEach(function(r) {
            o[r] = n(e[r], t)
          }), a(r).forEach(function(a) {
            (function(e, r) {
              return i(e, r) && !(Object.hasOwnProperty.call(e, r) && Object.propertyIsEnumerable.call(e, r))
            })(e, a) || (i(e, a) && t.isMergeableObject(r[a]) ? o[a] = function(e, r) {
              if (!r.customMerge) return c;
              var t = r.customMerge(e);
              return "function" == typeof t ? t : c
            }(a, t)(e[a], r[a], t) : o[a] = n(r[a], t))
          }), o
        }(e, t, s) : n(t, s)
      }
      c.all = function(e, r) {
        if (!Array.isArray(e)) throw new Error("first argument should be an array");
        return e.reduce(function(e, t) {
          return c(e, t, r)
        }, {})
      };
      var s = c;
      e.exports = s
    },
    87927: (e, r, t) => {
      t.d(r, {
        NP: () => n.NP
      });
      var n = t(33736)
    }
  }
]);