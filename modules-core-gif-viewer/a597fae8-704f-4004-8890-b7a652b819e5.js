! function() {
  try {
    var e = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {},
      t = (new Error).stack;
    t && (e._sentryDebugIds = e._sentryDebugIds || {}, e._sentryDebugIds[t] = "a597fae8-704f-4004-8890-b7a652b819e5", e._sentryDebugIdIdentifier = "sentry-dbid-a597fae8-704f-4004-8890-b7a652b819e5")
  } catch (e) {}
}();
var _global2 = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global2._sentryModuleMetadata = _global2._sentryModuleMetadata || {}, _global2._sentryModuleMetadata[(new Error).stack] = {
  release: "sentry-release-id",
  packageName: "@rockstargames/modules-core-gif-viewer",
  dsn: "https://45716709f6ae4d08adc015d264f231ae@o432808.ingest.sentry.io/4504565542748160"
};
var _global = "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self ? self : {};
_global.SENTRY_RELEASE = {
  id: "sentry-release-id"
}, (self.webpackChunk_rockstargames_modules_core_gif_viewer = self.webpackChunk_rockstargames_modules_core_gif_viewer || []).push([
  [8391], {
    3656: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.InitializeRelativeTimeFormat = function(e, t, r, i) {
        var l = i.getInternalSlots,
          c = i.availableLocales,
          u = i.relevantExtensionKeys,
          s = i.localeData,
          f = i.getDefaultLocale,
          p = l(e);
        p.initializedRelativeTimeFormat = !0;
        var d = (0, n.CanonicalizeLocaleList)(t),
          y = Object.create(null),
          _ = (0, n.CoerceOptionsToObject)(r),
          v = (0, n.GetOption)(_, "localeMatcher", "string", ["best fit", "lookup"], "best fit");
        y.localeMatcher = v;
        var b = (0, n.GetOption)(_, "numberingSystem", "string", void 0, void 0);
        if (void 0 !== b && !a.test(b)) throw new RangeError("Invalid numbering system ".concat(b));
        y.nu = b;
        var m = (0, o.ResolveLocale)(c, d, y, u, s, f),
          h = m.locale,
          w = m.nu;
        p.locale = h, p.style = (0, n.GetOption)(_, "style", "string", ["long", "narrow", "short"], "long"), p.numeric = (0, n.GetOption)(_, "numeric", "string", ["always", "auto"], "always");
        var g = s[m.dataLocale];
        return (0, n.invariant)(!!g, "Missing locale data for ".concat(m.dataLocale)), p.fields = g, p.numberFormat = (0, n.createMemoizedNumberFormat)(t), p.pluralRules = (0, n.createMemoizedPluralRules)(t), p.numberingSystem = w, e
      };
      var n = r(8337),
        o = r(5254),
        a = /^[a-z0-9]{3,8}(-[a-z0-9]{3,8})*$/i
    },
    2990: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.MakePartsList = function(e, t, r) {
        for (var o = [], a = 0, i = (0, n.PartitionPattern)(e); a < i.length; a++) {
          var l = i[a];
          if ("literal" === l.type) o.push({
            type: "literal",
            value: l.value
          });
          else {
            (0, n.invariant)("0" === l.type, "Malformed pattern ".concat(e));
            for (var c = 0, u = r; c < u.length; c++) {
              var s = u[c];
              o.push({
                type: s.type,
                value: s.value,
                unit: t
              })
            }
          }
        }
        return o
      };
      var n = r(8337)
    },
    3051: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.PartitionRelativeTimePattern = function(e, t, r, i) {
        var l = i.getInternalSlots;
        if ((0, n.invariant)("Number" === (0, n.Type)(t), "value must be number, instead got ".concat(typeof t), TypeError), (0, n.invariant)("String" === (0, n.Type)(r), "unit must be number, instead got ".concat(typeof t), TypeError), isNaN(t) || !isFinite(t)) throw new RangeError("Invalid value ".concat(t));
        var c = (0, o.SingularRelativeTimeUnit)(r),
          u = l(e),
          s = u.fields,
          f = u.style,
          p = u.numeric,
          d = u.pluralRules,
          y = u.numberFormat,
          _ = c;
        "short" === f ? _ = "".concat(c, "-short") : "narrow" === f && (_ = "".concat(c, "-narrow")), _ in s || (_ = c);
        var v = s[_];
        if ("auto" === p && (0, n.ToString)(t) in v) return [{
          type: "literal",
          value: v[(0, n.ToString)(t)]
        }];
        var b = "future";
        ((0, n.SameValue)(t, -0) || t < 0) && (b = "past");
        var m = v[b],
          h = "function" == typeof y.formatToParts ? y.formatToParts(Math.abs(t)) : [{
            type: "literal",
            value: y.format(Math.abs(t)),
            unit: r
          }],
          w = m[d.select(t)];
        return (0, a.MakePartsList)(w, c, h)
      };
      var n = r(8337),
        o = r(9070),
        a = r(2990)
    },
    9070: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.SingularRelativeTimeUnit = function(e) {
        if ((0, n.invariant)("String" === (0, n.Type)(e), "unit must be a string"), "seconds" === e) return "second";
        if ("minutes" === e) return "minute";
        if ("hours" === e) return "hour";
        if ("days" === e) return "day";
        if ("weeks" === e) return "week";
        if ("months" === e) return "month";
        if ("quarters" === e) return "quarter";
        if ("years" === e) return "year";
        if ("second" !== e && "minute" !== e && "hour" !== e && "day" !== e && "week" !== e && "month" !== e && "quarter" !== e && "year" !== e) throw new RangeError("invalid unit");
        return e
      };
      var n = r(8337)
    },
    7485: (e, t) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      }), t.default = function(e) {
        var t = r.get(e);
        return t || (t = Object.create(null), r.set(e, t)), t
      };
      var r = new WeakMap
    },
    9691: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = r(5800),
        o = r(8337),
        a = r(3656),
        i = r(3051),
        l = n.__importDefault(r(7485)),
        c = function() {
          function e(t, r) {
            if (!(this && this instanceof e ? this.constructor : void 0)) throw new TypeError("Intl.RelativeTimeFormat must be called with 'new'");
            return (0, a.InitializeRelativeTimeFormat)(this, t, r, {
              getInternalSlots: l.default,
              availableLocales: e.availableLocales,
              relevantExtensionKeys: e.relevantExtensionKeys,
              localeData: e.localeData,
              getDefaultLocale: e.getDefaultLocale
            })
          }
          return e.prototype.format = function(e, t) {
            if ("object" != typeof this) throw new TypeError("format was called on a non-object");
            if (!(0, l.default)(this).initializedRelativeTimeFormat) throw new TypeError("format was called on a invalid context");
            return (0, i.PartitionRelativeTimePattern)(this, Number(e), (0, o.ToString)(t), {
              getInternalSlots: l.default
            }).map((function(e) {
              return e.value
            })).join("")
          }, e.prototype.formatToParts = function(e, t) {
            if ("object" != typeof this) throw new TypeError("formatToParts was called on a non-object");
            if (!(0, l.default)(this).initializedRelativeTimeFormat) throw new TypeError("formatToParts was called on a invalid context");
            return (0, i.PartitionRelativeTimePattern)(this, Number(e), (0, o.ToString)(t), {
              getInternalSlots: l.default
            })
          }, e.prototype.resolvedOptions = function() {
            if ("object" != typeof this) throw new TypeError("resolvedOptions was called on a non-object");
            var e = (0, l.default)(this);
            if (!e.initializedRelativeTimeFormat) throw new TypeError("resolvedOptions was called on a invalid context");
            return {
              locale: e.locale,
              style: e.style,
              numeric: e.numeric,
              numberingSystem: e.numberingSystem
            }
          }, e.supportedLocalesOf = function(t, r) {
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
          }, e.getDefaultLocale = function() {
            return e.__defaultLocale
          }, e.localeData = {}, e.availableLocales = new Set, e.__defaultLocale = "", e.relevantExtensionKeys = ["nu"], e.polyfilled = !0, e
        }();
      t.default = c;
      try {
        "undefined" != typeof Symbol && Object.defineProperty(c.prototype, Symbol.toStringTag, {
          value: "Intl.RelativeTimeFormat",
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(c.prototype.constructor, "length", {
          value: 0,
          writable: !1,
          enumerable: !1,
          configurable: !0
        }), Object.defineProperty(c.supportedLocalesOf, "length", {
          value: 1,
          writable: !1,
          enumerable: !1,
          configurable: !0
        })
      } catch (e) {}
    },
    106: (e, t, r) => {
      Object.defineProperty(t, "__esModule", {
        value: !0
      });
      var n = r(5800).__importDefault(r(9691));
      Object.defineProperty(Intl, "RelativeTimeFormat", {
        value: n.default,
        writable: !0,
        enumerable: !1,
        configurable: !0
      })
    },
    5800: (e, t, r) => {
      r.r(t), r.d(t, {
        __addDisposableResource: () => F,
        __assign: () => a,
        __asyncDelegator: () => S,
        __asyncGenerator: () => P,
        __asyncValues: () => T,
        __await: () => j,
        __awaiter: () => y,
        __classPrivateFieldGet: () => L,
        __classPrivateFieldIn: () => M,
        __classPrivateFieldSet: () => k,
        __createBinding: () => v,
        __decorate: () => l,
        __disposeResources: () => A,
        __esDecorate: () => u,
        __exportStar: () => b,
        __extends: () => o,
        __generator: () => _,
        __importDefault: () => D,
        __importStar: () => x,
        __makeTemplateObject: () => E,
        __metadata: () => d,
        __param: () => c,
        __propKey: () => f,
        __read: () => h,
        __rest: () => i,
        __rewriteRelativeImportExtension: () => C,
        __runInitializers: () => s,
        __setFunctionName: () => p,
        __spread: () => w,
        __spreadArray: () => O,
        __spreadArrays: () => g,
        __values: () => m,
        default: () => N
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

      function u(e, t, r, n, o, a) {
        function i(e) {
          if (void 0 !== e && "function" != typeof e) throw new TypeError("Function expected");
          return e
        }
        for (var l, c = n.kind, u = "getter" === c ? "get" : "setter" === c ? "set" : "value", s = !t && e ? n.static ? e : e.prototype : null, f = t || (s ? Object.getOwnPropertyDescriptor(s, n.name) : {}), p = !1, d = r.length - 1; d >= 0; d--) {
          var y = {};
          for (var _ in n) y[_] = "access" === _ ? {} : n[_];
          for (var _ in n.access) y.access[_] = n.access[_];
          y.addInitializer = function(e) {
            if (p) throw new TypeError("Cannot add initializers after decoration has completed");
            a.push(i(e || null))
          };
          var v = (0, r[d])("accessor" === c ? {
            get: f.get,
            set: f.set
          } : f[u], y);
          if ("accessor" === c) {
            if (void 0 === v) continue;
            if (null === v || "object" != typeof v) throw new TypeError("Object expected");
            (l = i(v.get)) && (f.get = l), (l = i(v.set)) && (f.set = l), (l = i(v.init)) && o.unshift(l)
          } else(l = i(v)) && ("field" === c ? o.unshift(l) : f[u] = l)
        }
        s && Object.defineProperty(s, n.name, f), p = !0
      }

      function s(e, t, r) {
        for (var n = arguments.length > 2, o = 0; o < t.length; o++) r = n ? t[o].call(e, r) : t[o].call(e);
        return n ? r : void 0
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

      function h(e, t) {
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
        for (var e = [], t = 0; t < arguments.length; t++) e = e.concat(h(arguments[t]));
        return e
      }

      function g() {
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

      function P(e, t, r) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var n, o = r.apply(e, t || []),
          a = [];
        return n = Object.create(("function" == typeof AsyncIterator ? AsyncIterator : Object).prototype), i("next"), i("throw"), i("return", (function(e) {
          return function(t) {
            return Promise.resolve(t).then(e, u)
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
            (r = o[e](t)).value instanceof j ? Promise.resolve(r.value.v).then(c, u) : s(a[0][2], r)
          } catch (e) {
            s(a[0][3], e)
          }
          var r
        }

        function c(e) {
          l("next", e)
        }

        function u(e) {
          l("throw", e)
        }

        function s(e, t) {
          e(t), a.shift(), a.length && l(a[0][0], a[0][1])
        }
      }

      function S(e) {
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

      function T(e) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var t, r = e[Symbol.asyncIterator];
        return r ? r.call(e) : (e = m(e), t = {}, n("next"), n("throw"), n("return"), t[Symbol.asyncIterator] = function() {
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
        R = function(e) {
          return R = Object.getOwnPropertyNames || function(e) {
            var t = [];
            for (var r in e) Object.prototype.hasOwnProperty.call(e, r) && (t[t.length] = r);
            return t
          }, R(e)
        };

      function x(e) {
        if (e && e.__esModule) return e;
        var t = {};
        if (null != e)
          for (var r = R(e), n = 0; n < r.length; n++) "default" !== r[n] && v(t, e, r[n]);
        return I(t, e), t
      }

      function D(e) {
        return e && e.__esModule ? e : {
          default: e
        }
      }

      function L(e, t, r, n) {
        if ("a" === r && !n) throw new TypeError("Private accessor was defined without a getter");
        if ("function" == typeof t ? e !== t || !n : !t.has(e)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return "m" === r ? n : "a" === r ? n.call(e) : n ? n.value : t.get(e)
      }

      function k(e, t, r, n, o) {
        if ("m" === n) throw new TypeError("Private method is not writable");
        if ("a" === n && !o) throw new TypeError("Private accessor was defined without a setter");
        if ("function" == typeof t ? e !== t || !o : !t.has(e)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return "a" === n ? o.call(e, r) : o ? o.value = r : t.set(e, r), r
      }

      function M(e, t) {
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
      var z = "function" == typeof SuppressedError ? SuppressedError : function(e, t, r) {
        var n = new Error(r);
        return n.name = "SuppressedError", n.error = e, n.suppressed = t, n
      };

      function A(e) {
        function t(t) {
          e.error = e.hasError ? new z(t, e.error, "An error was suppressed during disposal.") : t, e.hasError = !0
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

      function C(e, t) {
        return "string" == typeof e && /^\.\.?\//.test(e) ? e.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, (function(e, r, n, o, a) {
          return r ? t ? ".jsx" : ".js" : !n || o && a ? n + o + "." + a.toLowerCase() + "js" : e
        })) : e
      }
      const N = {
        __extends: o,
        __assign: a,
        __rest: i,
        __decorate: l,
        __param: c,
        __esDecorate: u,
        __runInitializers: s,
        __propKey: f,
        __setFunctionName: p,
        __metadata: d,
        __awaiter: y,
        __generator: _,
        __createBinding: v,
        __exportStar: b,
        __values: m,
        __read: h,
        __spread: w,
        __spreadArrays: g,
        __spreadArray: O,
        __await: j,
        __asyncGenerator: P,
        __asyncDelegator: S,
        __asyncValues: T,
        __makeTemplateObject: E,
        __importStar: x,
        __importDefault: D,
        __classPrivateFieldGet: L,
        __classPrivateFieldSet: k,
        __classPrivateFieldIn: M,
        __addDisposableResource: F,
        __disposeResources: A,
        __rewriteRelativeImportExtension: C
      }
    }
  }
]);