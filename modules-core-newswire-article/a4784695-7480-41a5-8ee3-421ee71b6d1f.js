try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a4784695-7480-41a5-8ee3-421ee71b6d1f", e._sentryDebugIdIdentifier = "sentry-dbid-a4784695-7480-41a5-8ee3-421ee71b6d1f")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "sentry-release-id",
    packageName: "@rockstargames/modules-core-newswire-article",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_newswire_article = self.webpackChunk_rockstargames_modules_core_newswire_article || []).push([
  [5493], {
    55422: (e, t, r) => {
      r.d(t, {
        A: () => l
      });
      const n = {
          getcanonicallocales: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 61303)),
            polyfill: () => r.e(5018).then(r.bind(r, 46819))
          },
          locale: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 60206)),
            polyfill: () => r.e(9615).then(r.bind(r, 48634))
          },
          listformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 47913)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(8970)]).then(r.bind(r, 28423)),
            locale: e => r(63514)(`./${e}`)
          },
          displaynames: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 2028)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(3343)]).then(r.bind(r, 1988)),
            locale: e => r(94375)(`./${e}`)
          },
          pluralrules: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 84727)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(314)]).then(r.bind(r, 10649)),
            locale: e => r(38525)(`./${e}`)
          },
          numberformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 61610)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(907)]).then(r.bind(r, 72694)),
            locale: e => r(5267)(`./${e}`)
          },
          relativetimeformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 79222)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(8391)]).then(r.bind(r, 46258)),
            locale: e => r(33019)(`./${e}`)
          },
          datetimeformat: {
            should: () => Promise.all([r.e(4578), r.e(5830)]).then(r.bind(r, 1306)),
            polyfill: () => Promise.all([r.e(4578), r.e(2306), r.e(4731)]).then(r.bind(r, 35334)),
            locale: e => Promise.all([r.e(6280).then(r.t.bind(r, 29989, 23)), r(94819)(`./${e}`)])
          }
        },
        o = {
          getcanonicallocales: ["getcanonicallocales"],
          locale: ["getcanonicallocales", "locale"],
          pluralrules: ["getcanonicallocales", "locale", "pluralrules"],
          numberformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat"],
          relativetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "relativetimeformat"],
          datetimeformat: ["getcanonicallocales", "locale", "pluralrules", "numberformat", "datetimeformat"],
          displaynames: ["getcanonicallocales", "locale", "displaynames"],
          listformat: ["getcanonicallocales", "locale", "listformat"]
        },
        a = async (e, t, r) => {
          const {
            shouldPolyfill: n
          } = await e.should();
          return !!n(e.locale ? t : null) && (await e.polyfill(), e.locale && await e.locale(t), !0)
        }, l = async (e, t) => {
          if (!e) throw new Error("Please provide the desired locale");
          if (!t || !t.length) throw new Error(`Please provide the list of polyfills to load, supported ones are: ${Object.keys(o).join(", ")}`);
          const r = [];
          let l = 0;
          for (const i of t) {
            if (!i || !o[i]) throw new Error(`Unsupported polyfill: ${i}. Supported ones are: ${Object.keys(o).join(", ")}`);
            for (const t of o[i]) - 1 === r.indexOf(t) && (await a(n[t], e) && l++, r.push(t))
          }
          return l
        }
    },
    62486: (e, t, r) => {
      r.d(t, {
        A: () => c
      });
      var n = r(78322),
        o = r(71127),
        a = r(55165),
        l = r(30597);

      function i(e) {
        var t = (0, l.A)(),
          r = t.formatMessage,
          n = t.textComponent,
          a = void 0 === n ? o.Fragment : n,
          i = e.id,
          s = e.description,
          c = e.defaultMessage,
          u = e.values,
          f = e.children,
          d = e.tagName,
          p = void 0 === d ? a : d,
          y = r({
            id: i,
            description: s,
            defaultMessage: c
          }, u, {
            ignoreTag: e.ignoreTag
          });
        return "function" == typeof f ? f(Array.isArray(y) ? y : [y]) : p ? o.createElement(p, null, y) : o.createElement(o.Fragment, null, y)
      }
      i.displayName = "FormattedMessage";
      var s = o.memo(i, function(e, t) {
        var r = e.values,
          o = (0, n.__rest)(e, ["values"]),
          l = t.values,
          i = (0, n.__rest)(t, ["values"]);
        return (0, a.bN)(l, r) && (0, a.bN)(o, i)
      });
      s.displayName = "MemoizedFormattedMessage";
      const c = s
    },
    78322: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => F,
        __assign: () => a,
        __asyncDelegator: () => E,
        __asyncGenerator: () => O,
        __asyncValues: () => S,
        __await: () => j,
        __awaiter: () => y,
        __classPrivateFieldGet: () => A,
        __classPrivateFieldIn: () => R,
        __classPrivateFieldSet: () => M,
        __createBinding: () => h,
        __decorate: () => i,
        __disposeResources: () => N,
        __esDecorate: () => c,
        __exportStar: () => b,
        __extends: () => o,
        __generator: () => _,
        __importDefault: () => D,
        __importStar: () => I,
        __makeTemplateObject: () => T,
        __metadata: () => p,
        __param: () => s,
        __propKey: () => f,
        __read: () => w,
        __rest: () => l,
        __rewriteRelativeImportExtension: () => C,
        __runInitializers: () => u,
        __setFunctionName: () => d,
        __spread: () => v,
        __spreadArray: () => P,
        __spreadArrays: () => g,
        __values: () => m,
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

      function l(e, t) {
        var r = {};
        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
        if (null != e && "function" == typeof Object.getOwnPropertySymbols) {
          var o = 0;
          for (n = Object.getOwnPropertySymbols(e); o < n.length; o++) t.indexOf(n[o]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[o]) && (r[n[o]] = e[n[o]])
        }
        return r
      }

      function i(e, t, r, n) {
        var o, a = arguments.length,
          l = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(e, t, r, n);
        else
          for (var i = e.length - 1; i >= 0; i--)(o = e[i]) && (l = (a < 3 ? o(l) : a > 3 ? o(t, r, l) : o(t, r)) || l);
        return a > 3 && l && Object.defineProperty(t, r, l), l
      }

      function s(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function c(e, t, r, n, o, a) {
        function l(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var i, s = n.kind, c = "getter" === s ? "get" : "setter" === s ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, f = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), d = !1, p = r.length - 1; p >= 0; p--) {
          var y = {};
          for (var _ in n) y[_] = "access" === _ ? {} : n[_];
          for (var _ in n.access) y.access[_] = n.access[_];
          y.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(l(e || null))
          };
          var h = (0, r[p])("accessor" === s ? {
            get: f.get,
            set: f.set
          } : f[c], y);
          if ("accessor" === s) {
            if (void 0 === h) continue;
            if (null === h || "object" != typeof h) throw new TypeError("Object expected");
            (i = l(h.get)) && (f.get = i), (i = l(h.set)) && (f.set = i), (i = l(h.init)) && o.unshift(i)
          } else(i = l(h)) && ("field" === s ? o.unshift(i) : f[c] = i)
        }
        u && Object.defineProperty(u, n.name, f), d = !0
      }

      function u(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0
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

      function y(e, t, r, n) {
        return new(r || (r = Promise))(function(o, a) {
          function l(e) {
            try {
              s(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function i(e) {
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
            })).then(l, i)
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
          l = Object.create(("function" == typeof Iterator ? Iterator : Object).prototype);
        return l.next = i(0), l.throw = i(1), l.return = i(2), "function" == typeof Symbol && (l[Symbol.iterator] = function() {
          return this
        }), l;

        function i(i) {
          return function(s) {
            return function(i) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; l && (l = 0, i[0] && (a = 0)), a;) try {
                if (r = 1, n && (o = 2 & i[0] ? n.return : i[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, i[1])).done) return o;
                switch (n = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                  case 0:
                  case 1:
                    o = i;
                    break;
                  case 4:
                    return a.label++, {
                      value: i[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = i[1], i = [0];
                    continue;
                  case 7:
                    i = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                      a.label = i[1];
                      break
                    }
                    if (6 === i[0] && a.label < o[1]) {
                      a.label = o[1], o = i;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(i);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                i = t.call(e, a)
              } catch (e) {
                i = [6, e], n = 0
              } finally {
                r = o = 0
              }
              if (5 & i[0]) throw i[1];
              return {
                value: i[0] ? i[1] : void 0,
                done: !0
              }
            }([i, s])
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

      function m(e) {
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
          l = [];
        try {
          for (;
            (void 0 === t || t-- > 0) && !(n = a.next()).done;) l.push(n.value)
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
        return l
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
          for (var a = arguments[t], l = 0, i = a.length; l < i; l++, o++) n[o] = a[l];
        return n
      }

      function P(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function j(e) {
        return this instanceof j ? (this.v = e, this) : new j(e)
      }

      function O(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), l("next"), l("throw"), l("return", function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, c)
          }
        }), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function l(e, t) {
          o[e] && (n[e] = function(t) {
            return new Promise(function(r, n) {
              a.push([e, t, r, n]) > 1 || i(e, t)
            })
          }, t && (n[e] = t(n[e])))
        }

        function i(e, t) {
          try {
            (r = o[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(s, c) : u(a[0][2], r)
          } catch (e) {
            u(a[0][3], e)
          }
          var r
        }

        function s(e) {
          i("next", e)
        }

        function c(e) {
          i("throw", e)
        }

        function u(e, t) {
          e(t), a.shift(), a.length && i(a[0][0], a[0][1])
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
              value: j(e[n](t)),
              done: !1
            } : o ? o(t) : t
          } : o
        }
      }

      function S(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = m(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
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

      function T(e, t) {
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
        k = function(e) {
          return k = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, k(e)
        };

      function I(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = k(e), n = 0; n < r.length; n++) "default" !== r[n] && h(t, e, r[n]);
        return x(t, e), t
      }

      function D(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function A(e, t, r, n) {
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

      function F(e, t, r) {
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
      var $ = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function N(e) {
        function t(t) {
          e.error = e.hasError ? new $(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
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

      function C(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(e, r, n, o, a) {
          return r ? t ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e
        }) : e
      }
      const z = {
        __extends: o,
        __assign: a,
        __rest: l,
        __decorate: i,
        __param: s,
        __esDecorate: c,
        __runInitializers: u,
        __propKey: f,
        __setFunctionName: d,
        __metadata: p,
        __awaiter: y,
        __generator: _,
        __createBinding: h,
        __exportStar: b,
        __values: m,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: P,
        __await: j,
        __asyncGenerator: O,
        __asyncDelegator: E,
        __asyncValues: S,
        __makeTemplateObject: T,
        __importStar: I,
        __importDefault: D,
        __classPrivateFieldGet: A,
        __classPrivateFieldSet: M,
        __classPrivateFieldIn: R,
        __addDisposableResource: F,
        __disposeResources: N,
        __rewriteRelativeImportExtension: C
      }
    }
  }
]);