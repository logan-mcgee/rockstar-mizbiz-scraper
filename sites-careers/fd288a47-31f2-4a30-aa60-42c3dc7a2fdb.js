! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "fd288a47-31f2-4a30-aa60-42c3dc7a2fdb", e._sentryDebugIdIdentifier = "sentry-dbid-fd288a47-31f2-4a30-aa60-42c3dc7a2fdb")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/sites-careers",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_sites_careers = self.webpackChunk_rockstargames_sites_careers || []).push([
  [3343], {
    9436: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.CanonicalCodeForDisplayNames = function(e, t) {
        if ("language" === e) return (0, n.CanonicalizeLocaleList)([t])[0];
        if ("region" === e) {
          if (r = t, !a.test(r)) throw RangeError("invalid region");
          return t.toUpperCase()
        }
        var r, c;
        if ("script" === e) {
          if (c = t, !i.test(c)) throw RangeError("invalid script");
          return "".concat(t[0].toUpperCase()).concat(t.slice(1).toLowerCase())
        }
        if ("calendar" === e) {
          if (! function(e) {
              return l.test(e)
            }(t)) throw RangeError("invalid calendar");
          return t.toLowerCase()
        }
        if ("dateTimeField" === e) {
          if (!(0, o.IsValidDateTimeFieldCode)(t)) throw RangeError("invalid dateTimeField");
          return t
        }
        if ((0, n.invariant)("currency" === e, "invalid type"), !(0, n.IsWellFormedCurrencyCode)(t)) throw RangeError("invalid currency");
        return t.toUpperCase()
      };
      var n = r(9550),
        o = r(5120),
        a = /^([a-z]{2}|[0-9]{3})$/i,
        i = /^[a-z]{4}$/i,
        l = /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i
    },
    5120: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.IsValidDateTimeFieldCode = function(e) {
        return r.indexOf(e) >= 0
      };
      var r = ["era", "year", "quarter", "month", "weekOfYear", "weekday", "day", "dayPeriod", "hour", "minute", "second", "timeZoneName"]
    },
    4159: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.DisplayNames = void 0;
      var n = r(3339),
        o = r(9550),
        a = r(9436),
        i = r(5120),
        l = r(6832),
        c = function() {
          function e(t, r) {
            if (void 0 === this.constructor) throw TypeError("Constructor Intl.DisplayNames requires 'new'");
            var n = (0, o.CanonicalizeLocaleList)(t);
            r = (0, o.GetOptionsObject)(r);
            var a = Object.create(null),
              i = e.localeData,
              c = (0, o.GetOption)(r, "localeMatcher", "string", ["lookup", "best fit"], "best fit");
            a.localeMatcher = c;
            var s = (0, l.ResolveLocale)(Array.from(e.availableLocales), n, a, [], e.localeData, e.getDefaultLocale),
              u = (0, o.GetOption)(r, "style", "string", ["narrow", "short", "long"], "long");
            f(this, "style", u);
            var d = (0, o.GetOption)(r, "type", "string", ["language", "region", "script", "currency", "calendar", "dateTimeField"], void 0);
            if (void 0 === d) throw TypeError('Intl.DisplayNames constructor requires "type" option');
            f(this, "type", d), f(this, "fallback", (0, o.GetOption)(r, "fallback", "string", ["code", "none"], "code")), f(this, "locale", s.locale);
            var p = s.dataLocale,
              y = i[p];
            (0, o.invariant)(!!y, "Missing locale data for ".concat(p)), f(this, "localeData", y), (0, o.invariant)(void 0 !== y, "locale data for ".concat(s.locale, " does not exist."));
            var _ = y.types;
            (0, o.invariant)("object" == typeof _ && null != _, "invalid types data");
            var v = _[d];
            (0, o.invariant)("object" == typeof v && null != v, "invalid typeFields data");
            var b = (0, o.GetOption)(r, "languageDisplay", "string", ["dialect", "standard"], "dialect");
            if ("language" === d) {
              f(this, "languageDisplay", b);
              var h = _[d][b];
              (0, o.invariant)("object" == typeof h && null != h, "invalid language typeFields data")
            }
            var g = "language" === d ? _[d][b][u] : _[d][u];
            (0, o.invariant)("object" == typeof g && null != g, "invalid styleFields data"), f(this, "fields", g)
          }
          return e.supportedLocalesOf = function(t, r) {
            return (0, o.SupportedLocales)(e.availableLocales, (0, o.CanonicalizeLocaleList)(t), r)
          }, e.__addLocaleData = function() {
            for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
            for (var n = 0, o = t; n < o.length; n++) {
              var a = o[n],
                i = a.data,
                l = a.locale,
                c = new Intl.Locale(l).minimize().toString();
              e.localeData[l] = e.localeData[c] = i, e.availableLocales.add(c), e.availableLocales.add(l), e.__defaultLocale || (e.__defaultLocale = c)
            }
          }, e.prototype.of = function(e) {
            d(this, "of");
            var t = u(this, "type"),
              r = (0, o.ToString)(e);
            if (! function(e, t) {
                switch (e) {
                  case "language":
                    return /^[a-z]{2,3}(-[a-z]{4})?(-([a-z]{2}|\d{3}))?(-([a-z\d]{5,8}|\d[a-z\d]{3}))*$/i.test(t);
                  case "region":
                    return /^([a-z]{2}|\d{3})$/i.test(t);
                  case "script":
                    return /^[a-z]{4}$/i.test(t);
                  case "currency":
                    return (0, o.IsWellFormedCurrencyCode)(t);
                  case "calendar":
                    return /^[a-z0-9]{3,8}([-_][a-z0-9]{3,8})*$/i.test(t);
                  case "dateTimeField":
                    return (0, i.IsValidDateTimeFieldCode)(t)
                }
              }(t, r)) throw RangeError("invalid code for Intl.DisplayNames.prototype.of");
            var n, l = (0, o.getMultiInternalSlots)(s, this, "localeData", "style", "fallback"),
              c = l.localeData,
              f = l.style,
              p = l.fallback,
              y = (0, a.CanonicalCodeForDisplayNames)(t, r);
            if ("language" === t) n = function(e, t, r, n, o) {
              var a = t.types.language[e],
                i = a[r][n] || a.long[n];
              if (void 0 !== i) return i;
              var l = /-([a-z]{2}|\d{3})\b/i.exec(n);
              if (l) {
                var c = n.substring(0, l.index) + n.substring(l.index + l[0].length),
                  s = l[1],
                  u = a[r][c] || a.long[c];
                if (void 0 === u || !s) return u;
                var f = t.types.region,
                  d = f[r][s] || f.long[s];
                if (d || "code" === o) return t.patterns.locale.replace("{0}", u).replace("{1}", d || s)
              }
            }(u(this, "languageDisplay"), c, f, y, p);
            else {
              var _ = c.types[t];
              n = _[f][y] || _.long[y]
            }
            return void 0 !== n ? n : "code" === p ? r : void 0
          }, e.prototype.resolvedOptions = function() {
            return d(this, "resolvedOptions"), n.__assign({}, (0, o.getMultiInternalSlots)(s, this, "locale", "style", "type", "fallback", "languageDisplay"))
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.polyfilled = !0, e
        }();
      t.DisplayNames = c;
      try {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(c.prototype, Symbol.toStringTag, {
          value: "Intl.DisplayNames",
          configurable: !0,
          enumerable: !1,
          writable: !1
        }), Object.defineProperty(c, "length", {
          value: 2,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
      var s = new WeakMap;

      function u(e, t) {
        return (0, o.getInternalSlot)(s, e, t)
      }

      function f(e, t, r) {
        (0, o.setInternalSlot)(s, e, t, r)
      }

      function d(e, t) {
        if (!(e instanceof c)) throw TypeError("Method Intl.DisplayNames.prototype.".concat(t, " called on incompatible receiver"))
      }
    },
    2438: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = r(4159);
      Object.defineProperty(Intl, "DisplayNames", {
        value: n.DisplayNames,
        enumerable: !1,
        writable: !0,
        configurable: !0
      })
    },
    3339: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => z,
        __assign: () => a,
        __asyncDelegator: () => D,
        __asyncGenerator: () => S,
        __asyncValues: () => P,
        __await: () => j,
        __awaiter: () => y,
        __classPrivateFieldGet: () => C,
        __classPrivateFieldIn: () => F,
        __classPrivateFieldSet: () => L,
        __createBinding: () => v,
        __decorate: () => l,
        __disposeResources: () => M,
        __esDecorate: () => s,
        __exportStar: () => b,
        __extends: () => o,
        __generator: () => _,
        __importDefault: () => x,
        __importStar: () => k,
        __makeTemplateObject: () => E,
        __metadata: () => p,
        __param: () => c,
        __propKey: () => f,
        __read: () => g,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => N,
        __runInitializers: () => u,
        __setFunctionName: () => d,
        __spread: () => w,
        __spreadArray: () => O,
        __spreadArrays: () => m,
        __values: () => h,
        default: () => A
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

      function l(e, t, r, n) {
        var o, a = arguments.length,
          i = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) i = Reflect.decorate(e, t, r, n);
        else
          for (var l = e.length - 1; l >= 0; l--)(o = e[l]) && (i = (a < 3 ? o(i) : a > 3 ? o(t, r, i) : o(t, r)) || i);
        return a > 3 && i && Object.defineProperty(t, r, i), i
      }

      function c(e, t) {
        return function(r, n) {
          t(r, n, e)
        }
      }

      function s(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var l, c = n.kind, s = "getter" === c ? "get" : "setter" === c ? "set" : "value", u = !t && e ? n.static ? e : e.prototype : null, f = t || (u ? Object.getOwnPropertyDescriptor(u, n.name) : {}), d = !1, p = r.length - 1; p >= 0; p--) {
          var y = {};
          for (var _ in n) y[_] = "access" === _ ? {} : n[_];
          for (var _ in n.access) y.access[_] = n.access[_];
          y.addInitializer = function(e) {
            if (d) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var v = (0, r[p])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[s], y);
          if ("accessor" === c) {
            if (void 0 === v) continue;
            if (null === v || "object" != typeof v) throw new TypeError("Object expected");
            (l = i(v.get)) && (f.get = l), (l = i(v.set)) && (f.set = l), (l = i(v.init)) && o.unshift(l)
          } else(l = i(v)) && ("field" === c ? o.unshift(l) : f[s] = l)
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
        return new(r || (r = Promise))((function(o, a) {
          function i(e) {
            try {
              c(n.next(e))
            } catch (e) {
              a(e)
            }
          }

          function l(e) {
            try {
              c(n.throw(e))
            } catch (e) {
              a(e)
            }
          }

          function c(e) {
            var t;
            e.done ? o(e.value) : (t = e.value, t instanceof r ? t : new r((function(e) {
              e(t)
            }))).then(i, l)
          }
          c((n = n.apply(e, t || [])).next())
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
        return i.next = l(0), i.throw = l(1), i.return = l(2), "function" == typeof Symbol && (i[Symbol.iterator] = function() {
          return this
        }), i;

        function l(l) {
          return function(c) {
            return function(l) {
              if (r) throw new TypeError("Generator is already executing.");
              for (; i && (i = 0, l[0] && (a = 0)), a;) try {
                if (r = 1, n && (o = 2 & l[0] ? n.return : l[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, l[1])).done) return o;
                switch (n = 0, o && (l = [2 & l[0], o.value]), l[0]) {
                  case 0:
                  case 1:
                    o = l;
                    break;
                  case 4:
                    return a.label++, {
                      value: l[1],
                      done: !1
                    };
                  case 5:
                    a.label++, n = l[1], l = [0];
                    continue;
                  case 7:
                    l = a.ops.pop(), a.trys.pop();
                    continue;
                  default:
                    if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== l[0] && 2 !== l[0])) {
                      a = 0;
                      continue
                    }
                    if (3 === l[0] && (!o || l[1] > o[0] && l[1] < o[3])) {
                      a.label = l[1];
                      break
                    }
                    if (6 === l[0] && a.label < o[1]) {
                      a.label = o[1], o = l;
                      break
                    }
                    if (o && a.label < o[2]) {
                      a.label = o[2], a.ops.push(l);
                      break
                    }
                    o[2] && a.ops.pop(), a.trys.pop();
                    continue
                }
                l = t.call(e, a)
              } catch (e) {
                l = [6, e], n = 0
              } finally {
                r = o = 0
              }
              if (5 & l[0]) throw l[1];
              return {
                value: l[0] ? l[1] : void 0,
                done: !0
              }
            }([l, c])
          }
        }
      }
      var v = Object.create ? function(e, t, r, n) {
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
        for (var r in e) "default" === r || Object.prototype.hasOwnProperty.call(t, r) || v(t, e, r)
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

      function g(e, t) {
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

      function w() {
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(g(arguments[t]));
        return e
      }

      function m() {
        for (var e = 0, t = 0, r = arguments.length; t < r; t++) e += arguments[t].length;
        var n = Array(e),
          o = 0;
        for (t = 0; t < r; t++)
          for (var a = arguments[t], i = 0, l = a.length; i < l; i++, o++) n[o] = a[i];
        return n
      }

      function O(e, t, r) {
        if (r || 2 === arguments.length)
          for (var n, o = 0, a = t.length; o < a; o++) !n && o in t || (n || (n = Array.prototype.slice.call(t, 0, o)), n[o] = t[o]);
        return e.concat(n || Array.prototype.slice.call(t))
      }

      function j(e) {
        return this instanceof j ? (this.v = e, this) : new j(e)
      }

      function S(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, s)
          }
        })), n[Symbol.asyncIterator] = function() {
          return this
        }, n;

        function i(e, t) {
          o[e] && (n[e] = function(t) {
            return new Promise((function(r, n) {
              a.push([e, t, r, n]) > 1 || l(e, t)
            }))
          }, t && (n[e] = t(n[e])))
        }

        function l(e, t) {
          try {
            (r = o[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(c, s) : u(a[0][2], r)
          } catch (e) {
            u(a[0][3], e)
          }
          var r
        }

        function c(e) {
          l("next", e)
        }

        function s(e) {
          l("throw", e)
        }

        function u(e, t) {
          e(t), a.shift(), a.length && l(a[0][0], a[0][1])
        }
      }

      function D(e) {
        var t, r;
        return t = {}, n("next"), n("throw", (function(e) {
          throw e
        })), n("return"), t[Symbol.iterator] = function() {
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

      function P(e) {
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

      function E(e, t) {
        return Object.defineProperty ? Object.defineProperty(e, "raw", {
          value: t
        }) : e.raw = t, e
      }
      var I = Object.create ? function(e, t) {
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

      function k(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = T(e), n = 0; n < r.length; n++) "default" !== r[n] && v(t, e, r[n]);
        return I(t, e), t
      }

      function x(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function C(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function L(e, t, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
      }

      function F(e, t) {
        if (null === t || "object" != typeof t && "function" != typeof t) throw new TypeError("Cannot use 'in' operator on non-object");
        return "function" == typeof e ? t === e : e.has(t)
      }

      function z(e, t, r) {
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
      var R = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function M(e) {
        function t(t) {
          e.error = e.hasError ? new R(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
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
      const A = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: l,
        __param: c,
        __esDecorate: s,
        __runInitializers: u,
        __propKey: f,
        __setFunctionName: d,
        __metadata: p,
        __awaiter: y,
        __generator: _,
        __createBinding: v,
        __exportStar: b,
        __values: h,
        __read: g,
        __spread: w,
        __spreadArrays: m,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: S,
        __asyncDelegator: D,
        __asyncValues: P,
        __makeTemplateObject: E,
        __importStar: k,
        __importDefault: x,
        __classPrivateFieldGet: C,
        __classPrivateFieldSet: L,
        __classPrivateFieldIn: F,
        __addDisposableResource: z,
        __disposeResources: M,
        __rewriteRelativeImportExtension: N
      }
    }
  }
]);