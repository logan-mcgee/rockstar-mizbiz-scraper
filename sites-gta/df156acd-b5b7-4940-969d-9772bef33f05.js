! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "df156acd-b5b7-4940-969d-9772bef33f05", e._sentryDebugIdIdentifier = "sentry-dbid-df156acd-b5b7-4940-969d-9772bef33f05")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-gta",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_gta = self.webpackChunk_rockstargames_sites_gta || []).push([
  [3156], {
    6433: (e, t, r) => {
      r.d(t, {
        S: () => o
      });
      var n = r(2229);

      function o(e, t) {
        return r = t || null, o = function(t) {
          return e.forEach((function(e) {
            return function(e, t) {
              return "function" == typeof e ? e(t) : e && (e.current = t), e
            }(e, t)
          }))
        }, (a = (0, n.useState)((function() {
          return {
            value: r,
            callback: o,
            facade: {
              get current() {
                return a.value
              },
              set current(e) {
                var t = a.value;
                t !== e && (a.value = e, a.callback(e, t))
              }
            }
          }
        }))[0]).callback = o, a.facade;
        var r, o, a
      }
    },
    2788: (e, t, r) => {
      r.d(t, {
        C: () => i,
        f: () => c
      });
      var n = r(1299);

      function o(e) {
        return e
      }

      function a(e, t) {
        void 0 === t && (t = o);
        var r = [],
          n = !1;
        return {
          read: function() {
            if (n) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
            return r.length ? r[r.length - 1] : e
          },
          useMedium: function(e) {
            var o = t(e, n);
            return r.push(o),
              function() {
                r = r.filter((function(e) {
                  return e !== o
                }))
              }
          },
          assignSyncMedium: function(e) {
            for (n = !0; r.length;) {
              var t = r;
              r = [], t.forEach(e)
            }
            r = {
              push: function(t) {
                return e(t)
              },
              filter: function() {
                return r
              }
            }
          },
          assignMedium: function(e) {
            n = !0;
            var t = [];
            if (r.length) {
              var o = r;
              r = [], o.forEach(e), t = r
            }
            var a = function() {
                var r = t;
                t = [], r.forEach(e)
              },
              i = function() {
                return Promise.resolve().then(a)
              };
            i(), r = {
              push: function(e) {
                t.push(e), i()
              },
              filter: function(e) {
                return t = t.filter(e), r
              }
            }
          }
        }
      }

      function i(e, t) {
        return void 0 === t && (t = o), a(e, t)
      }

      function c(e) {
        void 0 === e && (e = {});
        var t = a(null);
        return t.options = (0, n.__assign)({
          async: !0,
          ssr: !1
        }, e), t
      }
    },
    1299: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => A,
        __assign: () => a,
        __asyncDelegator: () => E,
        __asyncGenerator: () => j,
        __asyncValues: () => P,
        __await: () => S,
        __awaiter: () => y,
        __classPrivateFieldGet: () => I,
        __classPrivateFieldIn: () => R,
        __classPrivateFieldSet: () => M,
        __createBinding: () => b,
        __decorate: () => c,
        __disposeResources: () => F,
        __esDecorate: () => f,
        __exportStar: () => h,
        __extends: () => o,
        __generator: () => _,
        __importDefault: () => D,
        __importStar: () => T,
        __makeTemplateObject: () => k,
        __metadata: () => p,
        __param: () => u,
        __propKey: () => l,
        __read: () => w,
        __rest: () => i,
        __runInitializers: () => s,
        __setFunctionName: () => d,
        __spread: () => g,
        __spreadArray: () => O,
        __spreadArrays: () => m,
        __values: () => v,
        default: () => G
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

      function u(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function f(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var c, u = n.kind, f = "getter" === u ? "get" : "setter" === u ? "set" : "value", s = !t && e ? n.static ? e : e.prototype : null, l = t || (s ? Object.getOwnPropertyDescriptor(s, n.name) : {}), d = !1, p = r.length - 1; p >= 0; p--) {
          var y = {};
          for (var _ in n) y[_] = "access" === _ ? {} : n[_];
          for (var _ in n.access) y.access[_] = n.access[_];
          y.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var b = (0, r[p])("accessor" === u ? {
            get: l.get,
            set: l.set
          } : l[f], y);
          if ("accessor" === u) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (c = i(b.get)) && (l.get = c), (c = i(b.set)) && (l.set = c), (c = i(b.init)) && o.unshift(c)
          } else(c = i(b)) && ("field" === u ? o.unshift(c) : l[f] = c)
        }
        s && Object.defineProperty(s, n.name, l), d = !0
      }

      function s(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0
      }

      function l(e) {
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

      function y(e, t, r, n) {
        return new(r || (r = Promise))((function(o, a) {
          function i(e) {
            try {
              u(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            try {
              u(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function u(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(i, c)
          }
          u((n = n.apply(e, t || [])).next())
        }))
      }

      function _(e, t) {
        var r, n, o, a, i = {
          label: 0,
          sent: function() {
            if (1 & o[0]) throw o[1];
            return o[1]
          },
          trys: [],
          ops: []
        };
        return a = {
          next: c(0),
          throw: c(1),
          return: c(2)
        }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
          return this
        }), a;

        function c(c) {
          return function(u) {
            return function(c) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; a && (a = 0, c[0] && (i = 0)), i;) try {
                if (r = 1, n && (o = 2 & c[0] ? n.return : c[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, c[1])).done) return o;
                switch (n = 0, o && (c = [2 & c[0], o.value]), c[0]) {
                  case 0:
                  case 1:
                    o = c;
                    break;
                  case 4:
                    return i.label++, {
                      value: c[1],
                      done: !1
                    };
                  case 5:
                    i.label++, n = c[1], c = [0];
                    continue;
                  case 7:
                    c = i.ops.pop(), i.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = i.trys).length > 0 && o[o.length - 1]) || 6 !== c[0] && 2 !== c[0])) {
                      i = 0;
                      continue
                    }
                    if (3 === c[0] && (!o || c[1] > o[0] && c[1] < o[3])) {
                      i.label = c[1];
                      break
                    }
                    if (6 === c[0] && i.label < o[1]) {
                      i.label = o[1], o = c;
                      break
                    }
                    if (o && i.label < o[2]) {
                      i.label = o[2], i.ops.push(c);
                      break
                    }
                    o[2] && i.ops.pop(), i.trys.pop();
                    continue
                }
                c = t.call(e, i)
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
            }([c, u])
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

      function h(e, t) {
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || b(t, e, r)
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

      function S(e) {
        return this instanceof S ? (this.v = e, this) : new S(e)
      }

      function j(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = {}, i("next"), i("throw"), i("return"), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e) {
          o[e] && (n[e] = function(t) {
            return new Promise((function(r, n) {
              a.push([e, t, r, n]) > 1 || c(e, t)
            }))
          })
        }

        function c(e, t) {
          try {
            (r = o[e](t)).value instanceof S ? Promise.resolve(r.value.v).then(u, f) : s(a[0][2], r)
          } catch (e) {
            s(a[0][3], e)
          }
          var r
        }

        function u(e) {
          c("next", e)
        }

        function f(e) {
          c("throw", e)
        }

        function s(e, t) {
          e(t), a.shift(), a.length && c(a[0][0], a[0][1])
        }
      }

      function E(e) {
        var t, r;
        return t = {}, n("next"), n("throw", (function(e) {
          throw e
        })), n("return"), t[Symbol.iterator] = function() {
          return this
        }, t;

        function n(n, o) {
          t[n] = e[n] ? function(t) {
            return (r = !r) ? {
              value: S(e[n](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function P(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = v(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
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
      };

      function T(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r in e) "default" !== r && Object.prototype.hasOwnProperty.call(e, r) && b(t, e, r);
        return x(t, e), t
      }

      function D(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function I(e, t, r, n) {
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

      function R(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function A(e, t, r) {
        if (null != t) {
          if ("object" != typeof t && "function" != typeof t) throw new TypeError("Object expected.");
          var n;
          if (r) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            n = t[Symbol.asyncDispose]
          }
          if (void 0 === n) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            n = t[Symbol.dispose]
          }
          if ("function" != typeof n) throw new TypeError("Object not disposable.");
          e.stack.push({
            value: t,
            dispose: n,
            async: r
          })
        } else r && e.stack.push({
          async: !0
        });
        return t
      }
      var C = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function F(e) {
        function t(t) {
          e.error = e.hasError ? new C(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
        }
        return function r() {
          for (; e.stack.length;) {
            var n = e.stack.pop();
            try {
              var o = n.dispose && n.dispose.call(n.value);
              if (n.async) return Promise.resolve(o).then(r, (function(e) {
                return t(e), r()
              }))
            } catch (e) {
              t(e)
            }
          }
          if (e.hasError) throw e.error
        }()
      }
      const G = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: c,
        __param: u,
        __metadata: p,
        __awaiter: y,
        __generator: _,
        __createBinding: b,
        __exportStar: h,
        __values: v,
        __read: w,
        __spread: g,
        __spreadArrays: m,
        __spreadArray: O,
        __await: S,
        __asyncGenerator: j,
        __asyncDelegator: E,
        __asyncValues: P,
        __makeTemplateObject: k,
        __importStar: T,
        __importDefault: D,
        __classPrivateFieldGet: I,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: R,
        __addDisposableResource: A,
        __disposeResources: F
      }
    }
  }
]);