try {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {},
    t = (new e.Error).stack;
  t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "3d208c34-c458-4ab3-bad6-e52abdf0fd4e", e._sentryDebugIdIdentifier = "sentry-dbid-3d208c34-c458-4ab3-bad6-e52abdf0fd4e")
} catch (e) {} {
  let e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {};
  e._sentryModuleMetadata = e._sentryModuleMetadata || {}, e._sentryModuleMetadata[(new e.Error).stack] = Object.assign({}, e._sentryModuleMetadata[(new e.Error).stack], {
    release: "a42314239c99c13d151b1cd32472b6fee265a6cb",
    packageName: "@rockstargames/modules-gtao-license-plate",
    dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
  })
}("undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof globalThis ? globalThis : "undefined" != typeof self ? self : {}).SENTRY_RELEASE = {
  id: "a42314239c99c13d151b1cd32472b6fee265a6cb"
}, (self.webpackChunk_rockstargames_modules_gtao_license_plate = self.webpackChunk_rockstargames_modules_gtao_license_plate || []).push([
  [838, 4808], {
    5267: (e, t, r) => {
      var o = {
        "./de": [45293, 299],
        "./en": [28085, 5663],
        "./es": [46594, 5530],
        "./fr": [43210, 2466],
        "./it": [53135, 7073],
        "./ja": [30115, 4621],
        "./ko": [48140, 824],
        "./pl": [93122, 2398],
        "./pt": [95626, 9126],
        "./ru": [48559, 3697],
        "./zh": [43572, 1868]
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
    9862: (e, t, r) => {
      "use strict";
      e.exports = r(52522)
    },
    23514: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        __addDisposableResource: () => F,
        __assign: () => a,
        __asyncDelegator: () => P,
        __asyncGenerator: () => S,
        __asyncValues: () => k,
        __await: () => j,
        __awaiter: () => y,
        __classPrivateFieldGet: () => C,
        __classPrivateFieldIn: () => M,
        __classPrivateFieldSet: () => I,
        __createBinding: () => b,
        __decorate: () => s,
        __disposeResources: () => R,
        __esDecorate: () => u,
        __exportStar: () => _,
        __extends: () => n,
        __generator: () => m,
        __importDefault: () => D,
        __importStar: () => T,
        __makeTemplateObject: () => E,
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => w,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => L,
        __runInitializers: () => l,
        __setFunctionName: () => p,
        __spread: () => v,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => h,
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

      function u(e, t, r, o, n, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var s, c = o.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", l = !t && e ? o.static ? e : e.prototype : null, f = t || (l ? Object.getOwnPropertyDescriptor(l, o.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var y = {};
          for (var m in o) y[m] = "access" === m ? {} : o[m];
          for (var m in o.access) y.access[m] = o.access[m];
          y.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var b = (0, r[d])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[u], y);
          if ("accessor" === c) {
            if (void 0 === b) continue;
            if (null === b || "object" != typeof b) throw new TypeError("Object expected");
            (s = i(b.get)) && (f.get = s), (s = i(b.set)) && (f.set = s), (s = i(b.init)) && n.unshift(s)
          } else(s = i(b)) && ("field" === c ? n.unshift(s) : f[u] = s)
        }
        l && Object.defineProperty(l, o.name, f), p = !0
      }

      function l(e, t, r) {
        for (var o = arguments.length > 2, n = 0; n < t.length; n++) r = o ? t[n].call(e, r) : t[n].call(e);
        return o ? r : void 0
      }

      function f(e) {
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

      function y(e, t, r, o) {
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

      function m(e, t) {
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

      function _(e, t) {
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

      function S(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var o, n = r.apply(e, t || []),
          a = [];
        return o = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
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
            (r = n[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(c, u) : l(a[0][2], r)
          } catch (e) {
            l(a[0][3], e)
          }
          var r
        }

        function c(e) {
          s("next", e)
        }

        function u(e) {
          s("throw", e)
        }

        function l(e, t) {
          e(t), a.shift(), a.length && s(a[0][0], a[0][1])
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
              value: j(e[o](t)),
              done: !1
            } : n ? n(t) : t
          } : n
        }
      }

      function k(e) {
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

      function E(e, t) {
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
        $ = function(e) {
          return $ = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, $(e)
        };

      function T(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = $(e), o = 0; o < r.length; o++) "default" !== r[o] && b(t, e, r[o]);
        return x(t, e), t
      }

      function D(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function C(e, t, r, o) {
        if ("a" === r && !o) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? o : "a" === r ? o.call(e) : o ? o.value : t.get(e)
      }

      function I(e, t, r, o, n) {
        if ("m" === o) throw new TypeError("Private method is not writable");
        if ("a" === o && !n) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === o ? n.call(e, r) : n ? n.value = r : t.set(e, r), r
      }

      function M(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function F(e, t, r) {
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
      var N = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var o = new Error(r);
        return o.name = "SuppressedError", o.error = e, o.suppressed = t, o
      };

      function R(e) {
        function t(t) {
          e.error = e.hasError ? new N(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
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

      function L(e, t) {
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
        __esDecorate: u,
        __runInitializers: l,
        __propKey: f,
        __setFunctionName: p,
        __metadata: d,
        __awaiter: y,
        __generator: m,
        __createBinding: b,
        __exportStar: _,
        __values: h,
        __read: w,
        __spread: v,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: S,
        __asyncDelegator: P,
        __asyncValues: k,
        __makeTemplateObject: E,
        __importStar: T,
        __importDefault: D,
        __classPrivateFieldGet: C,
        __classPrivateFieldSet: I,
        __classPrivateFieldIn: M,
        __addDisposableResource: F,
        __disposeResources: R,
        __rewriteRelativeImportExtension: L
      }
    },
    25854: (e, t, r) => {
      "use strict";
      e.exports = r(41454)
    },
    33019: (e, t, r) => {
      var o = {
        "./de": [81261, 6879],
        "./en": [47157, 2243],
        "./es": [85813, 278],
        "./fr": [93034, 9022],
        "./it": [68271, 2365],
        "./ja": [66083, 9377],
        "./ko": [61324, 9028],
        "./pl": [29090, 1242],
        "./pt": [14698, 7970],
        "./ru": [63695, 7453],
        "./zh": [47188, 8880]
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
      n.keys = () => Object.keys(o), n.id = 33019, e.exports = n
    },
    35671: (e, t, r) => {
      "use strict";
      r.r(t), r.d(t, {
        FormattedMessage: () => n.A,
        POSIXLocales: () => b,
        ReactIntlProviderForMocking: () => s.A,
        createDevLocaleHook: () => k,
        createIntl: () => a.E,
        defineMessages: () => o.YK,
        englishLocale: () => m,
        getCookieValueByName: () => p,
        getLocale: () => h,
        localeCookieHandler: () => d,
        locales: () => _,
        onLanguageChange: () => E,
        splitLocale: () => P,
        useIntl: () => i.A,
        withIntl: () => S
      });
      var o = r(9008),
        n = r(1075),
        a = r(6692),
        i = r(66920),
        s = r(45379),
        c = r(62229),
        u = r(40148),
        l = r(87171);
      const f = (e, t) => {
          e && t ? document.cookie = `${e}=${t}; domain=${(0,l.F)()}; path=/;` : console.log(`Couldn't set cookie (${e}) to value (${t})`)
        },
        p = e => {
          const t = document.cookie.split("; "),
            r = `${e}=`,
            o = t.find((e => e.startsWith(r))),
            n = o?.substring(r.length, o.length);
          return n
        },
        d = function(e, t) {
          let r = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
          const o = p(e);
          return o && !r || f(e, t), [o, (n = e, e => {
            f(n, e)
          })];
          var n
        },
        y = [{
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
        m = y[0],
        b = ["de_de", "fr_fr", "it_it", "ja_jp", "ru_ru", "es_es", "es_mx", "pt_br", "ko_kr", "zh_tw", "pl_pl", "zh_hans"],
        _ = y,
        h = () => {
          const {
            location: e
          } = window, t = (0, u.A)(), r = (e => {
            const t = _.map((e => e.subdomaincom)),
              r = e.pathname.substring(1).split("/"),
              o = "detect-locals" === r[0] ? 1 : 0;
            return -1 !== t.indexOf(r[o]) ? r[o] : null
          })(e), o = (e => {
            const t = e.search.substring(1).split("&").find((e => e.startsWith("lang")));
            return t?.split("=")[1]
          })(e), n = m;
          let a = n;
          const i = `rockstarweb_lang.${t.cookieIdentifier}`,
            s = p(i);
          a = t.currentSite?.site === u.C.www ? _.find((e => e.subdomaincom === o)) || _.find((e => e.subdomaincom === r)) || n : _.find((e => e.iso === s)) || n;
          const [c, l] = d(i, a.iso);
          return [a, l]
        };
      var w = r(56481);
      const v = () => "en-US";

      function g(e) {
        const t = e.split("-");
        return (0, w.A)(t[1] ? t[0] : e, ["relativetimeformat", "pluralrules", "listformat"])
      }

      function O(e, t) {
        return e[t] ?? {}
      }
      var j = r(25854);

      function S(e, t, r, o) {
        return n => {
          const a = (0, c.useMemo)((() => {
            if (t) return function(e, t) {
              return function(e, t) {
                const r = t ?? h()[0].iso ?? v(),
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

      function P(e) {
        let [t, r] = e.split(/[-_]/), o = r?.toLowerCase();
        return "cn" === o && (o = "hans"), t && r || (t = "en", o = "us"), [t, o]
      }
      const k = e => {
          if (!e.us || 0 === Object.keys(e?.us).length) throw new Error("createDevLocaleHook requires at least a 'us' key with definitions");
          return () => {
            const [{
              iso: t
            }] = h(), [r, o] = P(t);
            return e?.[o] ?? e.us
          }
        },
        E = e => {
          let {
            selectedLocale: t,
            track: r,
            parent: o = ""
          } = e;
          const n = (0, u.A)(),
            [, a] = h(),
            {
              subdomaincom: i,
              iso: s
            } = t,
            c = (e => {
              let t = location.pathname.replace(/^\/|\/$/g, "");
              const r = t.split("/");
              return _.map((e => e.subdomaincom)).includes(r[0]) && (t = r.slice(1).join("/")), n.currentSite?.site === u.C.www ? "en" === e ? `${window.location.origin}/${t}${location.search}` : `${window.location.origin}/${e}/${t}${location.search}` : `${window.location.origin}/${t}${location.search}`
            })(i);
          r?.({
            event: "cta_other",
            link_url: c,
            text: i,
            element_placement: o?.toLowerCase()
          }), a(s), window.location.href = c
        }
    },
    38525: (e, t, r) => {
      var o = {
        "./de": [99692, 9990],
        "./en": [58436, 1822],
        "./es": [57911, 2347],
        "./fr": [13691, 131],
        "./it": [79802, 8272],
        "./ja": [33050, 7436],
        "./ko": [8073, 2221],
        "./pl": [70695, 2171],
        "./pt": [71999, 8755],
        "./ru": [81790, 2864],
        "./zh": [42721, 3197]
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
      n.keys = () => Object.keys(o), n.id = 38525, e.exports = n
    },
    40148: (e, t, r) => {
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
    41454: (e, t, r) => {
      "use strict";
      var o = r(62229),
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

      function u(e, t, r) {
        var o, a = {},
          u = null,
          l = null;
        for (o in void 0 !== r && (u = "" + r), void 0 !== t.key && (u = "" + t.key), void 0 !== t.ref && (l = t.ref), t) i.call(t, o) && !c.hasOwnProperty(o) && (a[o] = t[o]);
        if (e && e.defaultProps)
          for (o in t = e.defaultProps) void 0 === a[o] && (a[o] = t[o]);
        return {
          $$typeof: n,
          type: e,
          key: u,
          ref: l,
          props: a,
          _owner: s.current
        }
      }
      t.Fragment = a, t.jsx = u, t.jsxs = u
    },
    52522: (e, t) => {
      "use strict";
      var r = "function" == typeof Symbol && Symbol.for,
        o = r ? Symbol.for("react.element") : 60103,
        n = r ? Symbol.for("react.portal") : 60106,
        a = r ? Symbol.for("react.fragment") : 60107,
        i = r ? Symbol.for("react.strict_mode") : 60108,
        s = r ? Symbol.for("react.profiler") : 60114,
        c = r ? Symbol.for("react.provider") : 60109,
        u = r ? Symbol.for("react.context") : 60110,
        l = r ? Symbol.for("react.async_mode") : 60111,
        f = r ? Symbol.for("react.concurrent_mode") : 60111,
        p = r ? Symbol.for("react.forward_ref") : 60112,
        d = r ? Symbol.for("react.suspense") : 60113,
        y = r ? Symbol.for("react.suspense_list") : 60120,
        m = r ? Symbol.for("react.memo") : 60115,
        b = r ? Symbol.for("react.lazy") : 60116,
        _ = r ? Symbol.for("react.block") : 60121,
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
                case f:
                case a:
                case s:
                case i:
                case d:
                  return e;
                default:
                  switch (e = e && e.$$typeof) {
                    case u:
                    case p:
                    case b:
                    case m:
                    case c:
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

      function O(e) {
        return g(e) === f
      }
      t.AsyncMode = l, t.ConcurrentMode = f, t.ContextConsumer = u, t.ContextProvider = c, t.Element = o, t.ForwardRef = p, t.Fragment = a, t.Lazy = b, t.Memo = m, t.Portal = n, t.Profiler = s, t.StrictMode = i, t.Suspense = d, t.isAsyncMode = function(e) {
        return O(e) || g(e) === l
      }, t.isConcurrentMode = O, t.isContextConsumer = function(e) {
        return g(e) === u
      }, t.isContextProvider = function(e) {
        return g(e) === c
      }, t.isElement = function(e) {
        return "object" == typeof e && null !== e && e.$$typeof === o
      }, t.isForwardRef = function(e) {
        return g(e) === p
      }, t.isFragment = function(e) {
        return g(e) === a
      }, t.isLazy = function(e) {
        return g(e) === b
      }, t.isMemo = function(e) {
        return g(e) === m
      }, t.isPortal = function(e) {
        return g(e) === n
      }, t.isProfiler = function(e) {
        return g(e) === s
      }, t.isStrictMode = function(e) {
        return g(e) === i
      }, t.isSuspense = function(e) {
        return g(e) === d
      }, t.isValidElementType = function(e) {
        return "string" == typeof e || "function" == typeof e || e === a || e === f || e === s || e === i || e === d || e === y || "object" == typeof e && null !== e && (e.$$typeof === b || e.$$typeof === m || e.$$typeof === c || e.$$typeof === u || e.$$typeof === p || e.$$typeof === h || e.$$typeof === w || e.$$typeof === v || e.$$typeof === _)
      }, t.typeOf = g
    },
    63514: (e, t, r) => {
      var o = {
        "./de": [76304, 4710],
        "./en": [31451, 3486],
        "./es": [44579, 4011],
        "./fr": [32951, 4851],
        "./it": [45014, 9936],
        "./ja": [85422, 2156],
        "./ko": [16373, 3885],
        "./pl": [41923, 6891],
        "./pt": [90267, 3475],
        "./ru": [82282, 4528],
        "./zh": [37749, 4861]
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
      n.keys = () => Object.keys(o), n.id = 63514, e.exports = n
    },
    67332: (e, t, r) => {
      "use strict";
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
        s = {};

      function c(e) {
        return o.isMemo(e) ? i : s[e.$$typeof] || n
      }
      s[o.ForwardRef] = {
        $$typeof: !0,
        render: !0,
        defaultProps: !0,
        displayName: !0,
        propTypes: !0
      }, s[o.Memo] = i;
      var u = Object.defineProperty,
        l = Object.getOwnPropertyNames,
        f = Object.getOwnPropertySymbols,
        p = Object.getOwnPropertyDescriptor,
        d = Object.getPrototypeOf,
        y = Object.prototype;
      e.exports = function e(t, r, o) {
        if ("string" != typeof r) {
          if (y) {
            var n = d(r);
            n && n !== y && e(t, n, o)
          }
          var i = l(r);
          f && (i = i.concat(f(r)));
          for (var s = c(t), m = c(r), b = 0; b < i.length; ++b) {
            var _ = i[b];
            if (!(a[_] || o && o[_] || m && m[_] || s && s[_])) {
              var h = p(r, _);
              try {
                u(t, _, h)
              } catch (e) {}
            }
          }
        }
        return t
      }
    },
    87171: (e, t, r) => {
      "use strict";
      r.d(t, {
        F: () => o
      });
      const o = () => {
        const e = window.location.hostname.split(".");
        return e.slice(e.length - 2).join(".")
      }
    },
    94375: (e, t, r) => {
      var o = {
        "./de": [67311, 5639],
        "./en": [2347, 6267],
        "./es": [97376, 5742],
        "./fr": [17084, 2678],
        "./it": [1121, 6997],
        "./ja": [71561, 6361],
        "./ko": [45982, 7452],
        "./pl": [53204, 2642],
        "./pt": [6396, 3034],
        "./ru": [66317, 3941],
        "./zh": [60754, 5832]
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
      n.keys = () => Object.keys(o), n.id = 94375, e.exports = n
    },
    94819: (e, t, r) => {
      var o = {
        "./de": [13577, 5259],
        "./en": [71137, 4799],
        "./es": [15494, 3370],
        "./fr": [52974, 7010],
        "./it": [86515, 4913],
        "./ja": [31535, 6285],
        "./ko": [26208, 6664],
        "./pl": [40230, 1054],
        "./pt": [99006, 662],
        "./ru": [40211, 5233],
        "./zh": [98432, 4700]
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
      n.keys = () => Object.keys(o), n.id = 94819, e.exports = n
    }
  }
]);