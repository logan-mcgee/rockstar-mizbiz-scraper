! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
      t = (new e.Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "dbd3e53d-fa5e-493a-b1e0-e21c47719760", e._sentryDebugIdIdentifier = "sentry-dbid-dbd3e53d-fa5e-493a-b1e0-e21c47719760")
  } catch (e) {}
}();
var _sentryModuleMetadataGlobal = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_sentryModuleMetadataGlobal._sentryModuleMetadata = _sentryModuleMetadataGlobal._sentryModuleMetadata || {}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack] = Object.assign({}, _sentryModuleMetadataGlobal._sentryModuleMetadata[(new _sentryModuleMetadataGlobal.Error).stack], {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
});
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [5, 838, 3514], {
    148: (e, t, r) => {
      "use strict";
      r.d(t, {
        A: () => a,
        C: () => o
      });
      const o = {
          www: "www",
          socialClub: "socialClub",
          support: "support",
          store: "store",
          supportNew: "support"
        },
        n = [{
          id: "prod",
          sites: {
            www: "www",
            socialClub: "socialclub",
            support: "support",
            store: "store",
            supportNew: "support"
          },
          cookieIdentifier: "prod"
        }],
        a = () => {
          let e;
          const {
            location: t
          } = window, r = t.hostname.substring(0, t.hostname.indexOf(".rockstargames.com")), o = n.findIndex((t => Object.entries(t.sites).findIndex((t => {
            let [o, n] = t;
            return n === r && (e = {
              site: o,
              subDomain: n
            }, !0)
          })) >= 0)), a = n[o >= 0 ? o : 0];
          return e || (e = {
            site: "www",
            subDomain: "local"
          }), {
            ...a,
            currentSite: e
          }
        }
    },
    1133: (e, t, r) => {
      var o = {
        "./de": [6304, 4710],
        "./en": [3832, 3486],
        "./es": [4579, 4011],
        "./fr": [2951, 4851],
        "./it": [5014, 9936],
        "./ja": [5422, 2156],
        "./ko": [6373, 3885],
        "./pl": [1923, 6891],
        "./pt": [267, 3475],
        "./ru": [2282, 4528],
        "./zh": [7749, 4861]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 1133, e.exports = n
    },
    1454: (e, t, r) => {
      "use strict";
      var o = r(2229),
        n = Symbol.for("react.element"),
        a = Symbol.for("react.fragment"),
        i = Object.prototype.hasOwnProperty,
        s = o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
        c = {
          key: !0,
          ref: !0,
          __self: !0,
          __source: !0
        };

      function l(e, t, r) {
        var o, a = {},
          l = null,
          u = null;
        for (o in void 0 !== r && (l = "" + r), void 0 !== t.key && (l = "" + t.key), void 0 !== t.ref && (u = t.ref), t) i.call(t, o) && !c.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: l,
          ref: u,
          props: a,
          _owner: s.current
        }
      }
      t.Fragment = a, t.jsx = l, t.jsxs = l
    },
    3019: (e, t, r) => {
      var o = {
        "./de": [1261, 6879],
        "./en": [7157, 2243],
        "./es": [8194, 278],
        "./fr": [3034, 9022],
        "./it": [8271, 2365],
        "./ja": [6083, 9377],
        "./ko": [1324, 9028],
        "./pl": [9090, 1242],
        "./pt": [4698, 7970],
        "./ru": [3695, 7453],
        "./zh": [7188, 8880]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 3019, e.exports = n
    },
    3514: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        __addDisposableResource: () => R,
        __assign: () => a,
        __asyncDelegator: () => E,
        __asyncGenerator: () => k,
        __asyncValues: () => P,
        __await: () => j,
        __awaiter: () => _,
        __classPrivateFieldGet: () => M,
        __classPrivateFieldIn: () => N,
        __classPrivateFieldSet: () => C,
        __createBinding: () => b,
        __decorate: () => s,
        __disposeResources: () => L,
        __esDecorate: () => l,
        __exportStar: () => h,
        __extends: () => n,
        __generator: () => y,
        __importDefault: () => T,
        __importStar: () => I,
        __makeTemplateObject: () => S,
        __metadata: () => p,
        __param: () => c,
        __propKey: () => f,
        __read: () => w,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => $,
        __runInitializers: () => u,
        __setFunctionName: () => d,
        __spread: () => v,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => m,
        default: () => A
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

      function s(e, t, r, o) {
        var n, a = arguments.length,
          i = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, r) : o;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, o);
        else
          for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (i = (a < 3 ? n(i) : a > 3 ? n(t, r, i) : n(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function c(e, t) {
        return function(r, o) {
          t(r, o, e)
        }
      }

      function l(e, t, r, o, n, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = o.kind, l = "getter" === c ? "get" : "setter" === c ? "set" : "value", u = !t && e ? o.static ? e : e.prototype : null, f = t || (u ? Object.getOwnPropertyDescriptor(u, o.name) : {}), d = !1, p = r.length - 1; p >= 0; p--) {
          var _ = {};
          for (var y in o) _[y] = "access" === y ? {} : o[y];
          for (var y in o.access) _.access[y] = o.access[y];
          _.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var b = (0, r[p])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[l], _);
          if ("accessor" === c) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (s = i(b.get)) && (f.get = s), (s = i(b.set)) && (f.set = s), (s = i(b.init)) && n.unshift(s)
          } else(s = i(b)) && ("field" === c ? n.unshift(s) : f[l] = s)
        }
        u && Object.defineProperty(u, o.name, f), d = !0
      }

      function u(e, t, r) {
        for (var o = arguments.length > 2, n = 0; n < t.length; n++) r = o ? t[n].call(e, r) : t[n].call(e);
        return o ? r : void 0
      }

      function f(e) {
        return "symbol" == typeof e ? e : "".concat(e)
      }

      function d(e, t, r) {
        return "symbol" == typeof t && (t = t.description ? "[".concat(t.description, "]") : ""), Object.defineProperty(e, "name", {
          configurable: !0,
          value: r ? "".concat(r, " ", t) : t
        })
      }

      function p(e, t) {
        if ("object" == typeof Reflect && "function" == typeof Reflect.metadata) return Reflect.metadata(e, t)
      }

      function _(e, t, r, o) {
        return new(r || (r = Promise))((function(n, a) {
          function i(e) {
            try {
              c(o.next(e))
            } catch (e) {
              a(e)
            }
          }

          function s(e) {
            try {
              c(o.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? n(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(i, s)
          }
          c((o = o.apply(e, t || [])).next())
        }))
      }

      function y(e, t) {
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
        return i.next = s(0), i.throw = s(1), i.return = s(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function s(s) {
          return function(c) {
            return function(s) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, s[0] && (a = 0)), a;) try {
                if (r = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n;
                switch (o = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                  case 0:
                  case 1:
                    n = s;
                    break;
                  case 4:
                    return a.label++, {
                      value: s[1],
                      done: !1
                    };
                  case 5:
                    a.label++, o = s[1], s = [0];
                    continue;
                  case 7:
                    s = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((n = (n = a.trys).length > 0 && n[n.length - 1]) || 6 !== s[0] && 2 !== s[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                      a.label = s[1];
                      break
                    }
                    if (6 === s[0] && a.label < n[1]) {
                      a.label = n[1], n = s;
                      break
                    }
                    if (n && a.label < n[2]) {
                      a.label = n[2], a.ops.push(s);
                      break
                    }
                    n[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                s = t.call(e, a)
              } catch (e) {
                s = [6, e], o = 0
              } finally {
                r = n = 0
              }
              if (5 & s[0]) throw s[1];
              return {
                value: s[0] ? s[1] : void 0,
                done: !0
              }
            }([s, c])
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

      function h(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r)
      }

      function m(e) {
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
          for (var a = arguments[t], i = 0, s = a.length; i < s; i++, n++) o[n] = a[i];
        return o
      }

      function O(e, t, r) {
        if (r || 2 === arguments.length)
          for (var o, n = 0, a = t.length; n < a; n++) !o && n in t || (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
        return e.concat(o || Array.prototype.slice.call(t))
      }

      function j(e) {
        return this instanceof j ? (this.v = e, this) : new j(e)
      }

      function k(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, n = r.apply(e, t || []),
          a = [];
        return o = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, l)
          }
        })), o[Symbol.asyncIterator] = function() {
          return this
        }, o;

        function i(e, t) {
          n[e] && (o[e] = function(t) {
            return new Promise((function(r, o) {
              a.push([e, t, r, o]) > 1 || s(e, t)
            }))
          }, t && (o[e] = t(o[e])))
        }

        function s(e, t) {
          try {
            (r = n[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(c, l) : u(a[0][2], r)
          } catch (e) {
            u(a[0][3], e)
          }
          var r
        }

        function c(e) {
          s("next", e)
        }

        function l(e) {
          s("throw", e)
        }

        function u(e, t) {
          e(t), a.shift(), a.length && s(a[0][0], a[0][1])
        }
      }

      function E(e) {
        var t, r;
        return t = {}, o("next"), o("throw", (function(e) {
          throw e
        })), o("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function o(o, n) {
          t[o] = e[o] ? function(t) {
            return (r = !r) ? {
              value: j(e[o](t)),
              done: !1
            } : n ? n(t) : t
          } : n
        }
      }

      function P(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = m(e), t = {}, o("next"), o("throw"), o("return"), t[Symbol.asyncIterator] = function() {
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

      function S(e, t) {
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
        D = function(e) {
          return D = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, D(e)
        };

      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = D(e), o = 0; o < r.length; o++) "default" !== r[o] && b(t, e, r[o]);
        return x(t, e), t
      }

      function T(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function M(e, t, r, o) {
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? o : "a" === r ? o.call(e) : o ? o.value : t.get(e)
      }

      function C(e, t, r, o, n) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === o ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
      }

      function N(e, t) {
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

      function L(e) {
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

      function $(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, o, n, a) {
          return r ? t ? ".jsx" : ".js" : !o || n && a ? o + n + "." + a.toLowerCase() + "js" : e
        })) : e
      }
      const A = {
        __extends: n,
        __assign: a,
        __rest: i,
        __decorate: s,
        __param: c,
        __esDecorate: l,
        __runInitializers: u,
        __propKey: f,
        __setFunctionName: d,
        __metadata: p,
        __awaiter: _,
        __generator: y,
        __createBinding: b,
        __exportStar: h,
        __values: m,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: k,
        __asyncDelegator: E,
        __asyncValues: P,
        __makeTemplateObject: S,
        __importStar: I,
        __importDefault: T,
        __classPrivateFieldGet: M,
        __classPrivateFieldSet: C,
        __classPrivateFieldIn: N,
        __addDisposableResource: R,
        __disposeResources: L,
        __rewriteRelativeImportExtension: $
      }
    },
    4375: (e, t, r) => {
      var o = {
        "./de": [7311, 5639],
        "./en": [2347, 6267],
        "./es": [7376, 5742],
        "./fr": [7084, 2678],
        "./it": [1121, 6997],
        "./ja": [1561, 6361],
        "./ko": [5982, 7452],
        "./pl": [3204, 2642],
        "./pt": [6396, 3034],
        "./ru": [6317, 3941],
        "./zh": [754, 3451]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 4375, e.exports = n
    },
    4819: (e, t, r) => {
      var o = {
        "./de": [3577, 5259],
        "./en": [1137, 4799],
        "./es": [5494, 3370],
        "./fr": [2974, 7010],
        "./it": [6515, 4913],
        "./ja": [1535, 6285],
        "./ko": [6208, 6664],
        "./pl": [230, 1054],
        "./pt": [9006, 662],
        "./ru": [211, 5233],
        "./zh": [8432, 4700]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 4819, e.exports = n
    },
    5267: (e, t, r) => {
      var o = {
        "./de": [5293, 299],
        "./en": [8085, 5663],
        "./es": [6594, 5530],
        "./fr": [3210, 2466],
        "./it": [3135, 7073],
        "./ja": [115, 4621],
        "./ko": [8140, 824],
        "./pl": [3122, 2398],
        "./pt": [5626, 9126],
        "./ru": [8559, 3697],
        "./zh": [3572, 1868]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 5267, e.exports = n
    },
    5671: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        FormattedMessage: () => n.A,
        POSIXLocales: () => b,
        ReactIntlProviderForMocking: () => s.A,
        createDevLocaleHook: () => P,
        createIntl: () => a.E,
        defineMessages: () => o.YK,
        englishLocale: () => y,
        getCookieValueByName: () => d,
        getLocale: () => m,
        localeCookieHandler: () => p,
        locales: () => h,
        onLanguageChange: () => S,
        splitLocale: () => E,
        useIntl: () => i.A,
        withIntl: () => k
      });
      var o = r(9008),
        n = r(1075),
        a = r(6692),
        i = r(6920),
        s = r(5379),
        c = r(2229),
        l = r(148),
        u = r(7171);
      const f = (e, t) => {
          e && t ? document.cookie = `${e}=${t}; domain=${(0,u.F)()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${t})`)
        },
        d = e => {
          const t = document.cookie.split("; "),
            r = `${e}=`,
            o = t.find((e => e.startsWith(r))),
            n = o?.substring(r.length, o.length);
          return n
        },
        p = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const o = d(e);
          return o && !r || f(e, t), [o, (n = e, e => {
            f(n, e)
          })];
          var n
        },
        _ = [{
          label: "English",
          subdomain: "en-US",
          subdomaincom: "en",
          support: "us",
          iso: "en-US"
        }, {
          label: "Deutsch",
          subdomain: "de",
          subdomaincom: "de",
          support: "de",
          iso: "de-DE"
        }, {
          label: "Español",
          subdomain: "es",
          subdomaincom: "es",
          support: "es",
          iso: "es-ES"
        }, {
          label: "Español Latinoamérica",
          subdomain: "es-mx",
          subdomaincom: "mx",
          support: "es-mx",
          iso: "es-MX"
        }, {
          label: "Français",
          subdomain: "fr",
          subdomaincom: "fr",
          support: "fr",
          iso: "fr-FR"
        }, {
          label: "Italiano",
          subdomain: "it",
          subdomaincom: "it",
          support: "it",
          iso: "it-IT"
        }, {
          label: "日本語",
          subdomain: "ja",
          subdomaincom: "jp",
          support: "jp",
          iso: "ja-JP"
        }, {
          label: "한국어",
          subdomain: "ko",
          subdomaincom: "kr",
          support: "kr",
          iso: "ko-KR"
        }, {
          label: "Polski",
          subdomain: "pl",
          subdomaincom: "pl",
          support: "pl",
          iso: "pl-PL"
        }, {
          label: "Português do Brasil",
          subdomain: "pt",
          subdomaincom: "br",
          support: "br",
          iso: "pt-BR"
        }, {
          label: "Русский",
          subdomain: "ru",
          subdomaincom: "ru",
          support: "ru",
          iso: "ru-RU"
        }, {
          label: "繁體中文",
          subdomain: "zh",
          subdomaincom: "tw",
          support: "tw",
          iso: "zh-TW"
        }, {
          label: "简体中文",
          subdomain: "zh-cn",
          subdomaincom: "zh",
          support: "zh",
          iso: "zh-CN"
        }],
        y = _[0],
        b = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        h = _,
        m = () => {
          const {
            location: e
          } = window, t = (0, l.A)(), r = (e => {
            const t = h.map((e => e.subdomaincom)),
              r = e.pathname.substring(1).split("/"),
              o = "detect-locals" === r[0] ? 1 : 0;
            return -1 !== t.indexOf(r[o]) ? r[o] : null
          })(e), o = (e => {
            const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return t?.split("=")[1]
          })(e), n = y;
          let a = n;
          const i = `rockstarweb_lang.${t.cookieIdentifier}`,
            s = d(i);
          a = t.currentSite?.site === l.C.www ? h.find((e => e.subdomaincom === o)) || h.find((e => e.subdomaincom === r)) || n : h.find((e => e.iso === s)) || n;
          const [c, u] = p(i, a.iso);
          return [a, u]
        };
      var w = r(6481);
      const v = () => "en-US";

      function g(e) {
        const t = e.split("-");
        return (0, w.A)(t[1] ? t[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function O(e, t) {
        return e[t] ?? {}
      }
      var j = r(5854);

      function k(e, t, r, o) {
        return n => {
          const a = (0, c.useMemo)((() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const r = t ?? m()[0].iso ?? v(),
                  [, o] = [g(r), O(e, r)];
                var n;
                return {
                  rsLocale: r,
                  locale: r,
                  messages: (n = o, {
                    ...n
                  })
                }
              }(e, t)
            }(t, r)
          }), [r]);
          return (0, j.jsx)(s.A, {
            locale: a?.locale || v(),
            messages: {
              ...a?.messages
            },
            onError: o,
            children: a && (0, j.jsx)(e, {
              ...n
            })
          }, "intl-provider")
        }
      }

      function E(e) {
        let [t, r] = e.split(/[-_]/), o = r?.toLowerCase();
        return "cn" === o && (o = "hans"), t && r || (t = "en", o = "us"), [t, o]
      }
      const P = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: t
            }] = m(), [r, o] = E(t);
            return e?.[o] ?? e.us
          }
        },
        S = e => {
          let {
            selectedLocale: t,
            track: r,
            parent: o = ""
          } = e;
          const n = (0, l.A)(),
            [a, i] = m(),
            {
              subdomaincom: s,
              iso: c
            } = t,
            u = (e => {
              let t = location.pathname.replace(/^\/|\/$/g, "");
              const r = t.split("/");
              return h.map((e => e.subdomaincom)).includes(r[0]) && (t = r.slice(1).join("/")), n.currentSite?.site === l.C.www ? "en" === e ? `${window.location.origin}/${t}${location.search}` : `${window.location.origin}/${e}/${t}${location.search}` : `${window.location.origin}/${t}${location.search}`
            })(s);
          r?.({
            event: "cta_other",
            link_url: u,
            text: s,
            element_placement: o
          }), i(c), window.location.href = u
        }
    },
    5854: (e, t, r) => {
      "use strict";
      e.exports = r(1454)
    },
    7171: (e, t, r) => {
      "use strict";
      r.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    8525: (e, t, r) => {
      var o = {
        "./de": [9692, 9990],
        "./en": [8436, 1822],
        "./es": [7911, 2347],
        "./fr": [3691, 131],
        "./it": [9802, 8272],
        "./ja": [3050, 7436],
        "./ko": [8073, 2221],
        "./pl": [695, 2171],
        "./pt": [1999, 8755],
        "./ru": [1790, 2864],
        "./zh": [2721, 3197]
      };

      function n(e) {
        if (!r.o(o, e)) return Promise.resolve().then((() => {
          var t = new Error("Cannot find module '" + e + "'");
          throw t.code = "MODULE_NOT_FOUND", t
        }));
        var t = o[e],
          n = t[0];
        return r.e(t[1]).then((() => r.t(n, 23)))
      }
      n.keys = () => Object.keys(o), n.id = 8525, e.exports = n
    }
  }
]);